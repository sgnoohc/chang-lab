
import os

PAPERs=[
"2925580", # WWZ and ZH
"2790366", # WH
"1802096", # VVV
"1734235", # WWW
"1468068", # ATLAS-CMS Higgs Couplings Run 1
"1333228", # HWW
"1241574", # H diboson
"1124337", # H obs
]

PROCEEDINGs=[
"2116280", # LST CTD 2022
"2157930", # LST HEP 2022
"1859744", # ICHEP 2020
"1769928", # LHCP 2019
"1422721", # JINST TWEPP
"1413646", # VERTEX
"1250567", # NIMA
"1202133", # JINST WIT
]

CRs=[
"2811026" # CMS-CR-2024-141
]

for ID in PAPERs:
    os.system(f"curl https://inspirehep.net/api/literature/{ID}/?format=cv")
for ID in PROCEEDINGs:
    os.system(f"curl https://inspirehep.net/api/literature/{ID}/?format=cv")
for ID in CRs:
    os.system(f"curl https://inspirehep.net/api/literature/{ID}/?format=cv")

