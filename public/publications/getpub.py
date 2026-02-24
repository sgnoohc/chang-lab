import requests
from bs4 import BeautifulSoup
import re

PAPERs = [
    "2925580", # WWZ and ZH
    "2790366", # WH
    "1802096", # VVV
    "1734235", # WWW
    "1468068", # ATLAS-CMS Higgs Couplings Run 1
    "1333228", # HWW
    "1241574", # H diboson
    "1124337", # H obs
]

PROCEEDINGs = [
    "2116280", # LST CTD 2022
    "2157930", # LST HEP 2022
    "1859744", # ICHEP 2020
    "1769928", # LHCP 2019
    "1422721", # JINST TWEPP
    "1413646", # VERTEX
    "1250567", # NIMA
    "1202133", # JINST WIT
]

CRs = [
    "2811026" # CMS-CR-2024-141
]

BASE = "https://inspirehep.net/api/literature/{id}/?format=cv"

def fetch_cv_html(inspire_id: str) -> str:
    url = BASE.format(id=inspire_id)
    r = requests.get(url, timeout=30)
    r.raise_for_status()
    return r.text

def clean_space(s: str | None) -> str:
    if not s:
        return ""
    # Collapse whitespace and tidy punctuation spaces
    s = re.sub(r"\s+", " ", s).strip()
    s = re.sub(r"\s+([,.;:])", r"\1", s)
    return s

def extract_field_text(p_tag) -> str:
    """Return text of a <p> with math and spans flattened."""
    if not p_tag:
        return ""
    # get_text with a space separator to flatten nested tags like <math> or <span>
    return clean_space(p_tag.get_text(" "))

def parse_cv(html: str) -> dict:
    soup = BeautifulSoup(html, "html.parser")

    # Title
    title_a = soup.select_one("p > b > a")
    title = clean_space(title_a.get_text(" ")) if title_a else ""

    # Collaboration (look for a span that contains the word 'Collaboration')
    collab = ""
    for sp in soup.find_all("span"):
        t = clean_space(sp.get_text(" "))
        if re.search(r"\bCollaboration\b", t, re.IGNORECASE):
            collab = t
            break

    # arXiv id: look for the e-Print paragraph (contains 'e-Print:' and a link to arxiv)
    arxiv = ""
    for p in soup.find_all("p"):
        txt = p.get_text()
        if "e-Print" in txt or "arXiv" in txt:
            a = p.find("a", href=re.compile(r"arxiv.org/abs/"))
            if a:
                arxiv = clean_space(a.get_text(" "))
                break

    # DOI: look for a link starting with doi.org
    doi = ""
    for a in soup.find_all("a", href=True):
        if re.search(r"doi\.org/", a["href"]):
            doi = clean_space(a.get_text(" "))
            # Prefer the first "publication" DOI if multiple appear
            break

    # Published in: find the paragraph that starts with 'Published in:'
    published_in = ""
    for p in soup.find_all("p"):
        txt_flat = extract_field_text(p)
        if txt_flat.startswith("Published in:"):
            # Keep everything after the label
            published_in = clean_space(txt_flat.replace("Published in:", "", 1))
            break

    # If Published in missing but journal info is in spans inside that <p>, the above still works
    return {
        "title": title,
        "collab": collab,
        "published_in": published_in,
        "doi": doi,
        "arxiv": arxiv
    }

def format_reference(entry: dict) -> str:
    # Compose a compact, readable reference line.
    parts = []
    if entry.get("collab"):
        parts.append(entry["collab"])
    if entry.get("title"):
        parts.append(entry["title"])
    if entry.get("published_in"):
        parts.append(entry["published_in"])
    # Add DOI and arXiv if present
    tail = []
    if entry.get("doi"):
        tail.append(f"doi:{entry['doi']}")
    if entry.get("arxiv"):
        tail.append(f"arXiv:{entry['arxiv']}")
    if tail:
        parts.append(", ".join(tail))

    # Join major parts with ". " and ensure final period.
    ref = ". ".join([p for p in parts if p])
    if not ref.endswith("."):
        ref += "."
    return ref

def build_references(ids: list[str], section_title: str | None = None) -> list[str]:
    lines = []
    if section_title:
        lines.append(section_title)
    for iid in ids:
        try:
            html = fetch_cv_html(iid)
            entry = parse_cv(html)
            ref = format_reference(entry)
        except Exception as e:
            ref = f"[{iid}] (error fetching/parsing: {e})"
        lines.append(ref)
    return lines

if __name__ == "__main__":
    all_lines = []
    all_lines += build_references(PAPERs, "Papers")
    all_lines += build_references(PROCEEDINGs, "Proceedings")
    all_lines += build_references(CRs, "Conference Reports")

    # Join everything into a single string. Change delimiter if you prefer bullets/numbering.
    references_string = "\n".join(all_lines)
    print(references_string)

