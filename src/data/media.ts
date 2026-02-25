export interface MediaLink {
  url: string;
  text: string;
}

export interface MediaLogo {
  src: string;
  alt: string;
}

export interface MediaItem {
  logos: MediaLogo[];
  extraLabel?: string;
  title: string;
  description: string;
  links: MediaLink[];
}

export const media: MediaItem[] = [
  {
    logos: [
      { src: "nyt.png", alt: "The New York Times logo" },
      { src: "nature.png", alt: "Nature logo" },
      { src: "sciencemag.png", alt: "Science logo" },
    ],
    title: "Muon Collider in the Spotlight",
    description: "Media coverage on the physics potential and challenges of building a future muon collider.",
    links: [
      { url: "https://www.nature.com/articles/d41586-024-00105-9", text: "Nature coverage →" },
      { url: "https://www.nytimes.com/2023/12/07/science/particle-physics-muon-collider.html", text: "New York Times coverage →" },
      { url: "https://www.science.org/content/article/muon-collider-could-revolutionize-particle-physics-if-it-can-be-built", text: "Science Magazine coverage →" },
      { url: "https://www.muoncollider.us/", text: "US Muon Collider Collaboration →" },
    ],
  },
  {
    logos: [
      { src: "cms.png", alt: "CMS logo" },
    ],
    title: "Probing interactions among trios of heavy vector bosons",
    description: "CMS article on the first observation of triboson production at the LHC, probing electroweak self-interactions at unprecedented energies.",
    links: [
      { url: "https://cms.cern/news/probing-interactions-among-trios-heavy-vector-bosons-record-energy", text: "CMS Physics Briefings →" },
    ],
  },
  {
    logos: [
      { src: "physorglogo.png", alt: "Phys.org logo" },
      { src: "apsphysicsmagazine.png", alt: "APS Physics logo" },
      { src: "cms.png", alt: "CMS logo" },
      { src: "cern.png", alt: "CERN logo" },
      { src: "cerncourier.png", alt: "CERN Courier logo" },
      { src: "symmetry.png", alt: "Symmetry Magazine logo" },
    ],
    title: "Triple threat: Massive gauge bosons observed at the LHC",
    description: "Coverage of triboson production and what it reveals about electroweak self-interactions and rare multi-boson dynamics.",
    links: [
      { url: "https://phys.org/news/2020-12-triple-threat-massive-gauge-bosons.html", text: "Phys.org →" },
      { url: "https://physics.aps.org/articles/v13/s124", text: "APS Physics Magazine →" },
      { url: "https://www.symmetrymagazine.org/article/heavy-boson-triplets-test-standard-model", text: "Symmetry Magazine →" },
      { url: "https://home.cern/news/news/physics/search-new-physics-through-multiboson-production", text: "CERN Press Release →" },
      { url: "https://cms.cern/news/triple-treat-cms-observes-production-three-massive-vector-bosons-0", text: "CMS Press Release →" },
      { url: "https://cerncourier.com/a/lhc-physics-shines-amid-covid-19-crisis/", text: "CERN Courier →" },
    ],
  },
  {
    logos: [
      { src: "cern.png", alt: "CERN logo" },
      { src: "atlas.png", alt: "ATLAS logo" },
    ],
    extraLabel: "CERN",
    title: "Higgs boson physics",
    description: "These articles highlight the first clear observation of the Higgs boson decaying to two W bosons, a milestone that tests the Higgs mechanism and refines our understanding of its couplings.",
    links: [
      { url: "https://cerncourier.com/a/atlas-observes-and-measures-h-ww/", text: "CERN Courier coverage →" },
      { url: "https://atlas.cern/updates/briefing/new-atlas-precision-measurements-higgs-boson-observation-ww-decay", text: "ATLAS Physics Briefing →" },
      { url: "https://physics.illinois.edu/news/article/1741", text: "UIUC Department News →" },
    ],
  },
];
