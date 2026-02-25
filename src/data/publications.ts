export interface Publication {
  authors: string;
  title: string;
  journal: string;
  volume: string;
  pages: string;
  year: number;
  doi: string;
  doiUrl: string;
  erratum?: {
    journal: string;
    volume: string;
    pages: string;
    year: number;
    doi: string;
    doiUrl: string;
  };
}

export const publications: Publication[] = [
  {
    authors: "CMS Collaboration",
    title: "Measurement of WWZ and ZH Production Cross Sections at √s = 13 and 13.6 TeV",
    journal: "Phys. Rev. Lett.",
    volume: "135",
    pages: "091802",
    year: 2025,
    doi: "doi:10.1103/6z3d-zjw4",
    doiUrl: "https://doi.org/10.1103/6z3d-zjw4",
  },
  {
    authors: "CMS Collaboration",
    title: "Study of WH production through vector boson scattering and extraction of the relative sign of the W and Z couplings to the Higgs boson in proton–proton collisions at √s = 13 TeV",
    journal: "Phys. Lett. B",
    volume: "860",
    pages: "139202",
    year: 2025,
    doi: "doi:10.1016/j.physletb.2024.139202",
    doiUrl: "https://doi.org/10.1016/j.physletb.2024.139202",
  },
  {
    authors: "CMS Collaboration",
    title: "Observation of the Production of Three Massive Gauge Bosons at √s = 13 TeV",
    journal: "Phys. Rev. Lett.",
    volume: "125",
    pages: "151802",
    year: 2020,
    doi: "doi:10.1103/PhysRevLett.125.151802",
    doiUrl: "https://doi.org/10.1103/PhysRevLett.125.151802",
  },
  {
    authors: "CMS Collaboration",
    title: 'Search for the production of W<sup>±</sup>W<sup>±</sup>W<sup>∓</sup> events at √s = 13 TeV',
    journal: "Phys. Rev. D",
    volume: "100",
    pages: "012004",
    year: 2019,
    doi: "doi:10.1103/PhysRevD.100.012004",
    doiUrl: "https://doi.org/10.1103/PhysRevD.100.012004",
  },
  {
    authors: "ATLAS and CMS Collaborations",
    title: "Measurements of the Higgs boson production and decay rates and constraints on its couplings from a combined ATLAS and CMS analysis of the LHC pp collision data at √s = 7 and 8 TeV",
    journal: "J. High Energy Phys.",
    volume: "08",
    pages: "045",
    year: 2016,
    doi: "doi:10.1007/JHEP08(2016)045",
    doiUrl: "https://doi.org/10.1007/JHEP08(2016)045",
  },
  {
    authors: "ATLAS Collaboration",
    title: "Observation and measurement of Higgs boson decays to WW",
    journal: "Phys. Rev. D",
    volume: "92",
    pages: "012006",
    year: 2015,
    doi: "doi:10.1103/PhysRevD.92.012006",
    doiUrl: "https://doi.org/10.1103/PhysRevD.92.012006",
  },
  {
    authors: "ATLAS Collaboration",
    title: "Measurements of Higgs boson production and couplings in diboson final states with the ATLAS detector at the LHC",
    journal: "Phys. Lett. B",
    volume: "726",
    pages: "88–119",
    year: 2013,
    doi: "doi:10.1016/j.physletb.2013.08.010",
    doiUrl: "https://doi.org/10.1016/j.physletb.2013.08.010",
    erratum: {
      journal: "Phys. Lett. B",
      volume: "734",
      pages: "406",
      year: 2014,
      doi: "doi:10.1016/j.physletb.2014.05.011",
      doiUrl: "https://doi.org/10.1016/j.physletb.2014.05.011",
    },
  },
  {
    authors: "ATLAS Collaboration",
    title: "Observation of a new particle in the search for the Standard Model Higgs boson with the ATLAS detector at the LHC",
    journal: "Phys. Lett. B",
    volume: "716",
    pages: "1–29",
    year: 2012,
    doi: "doi:10.1016/j.physletb.2012.08.020",
    doiUrl: "https://doi.org/10.1016/j.physletb.2012.08.020",
  },
  {
    authors: "G. Niendorf, T. Reid, P. Wittich, P. Elmer, B. Wang <em>et al.</em>",
    title: "Line Segment Tracking in the HL-LHC",
    journal: "arXiv:2207.08207",
    volume: "",
    pages: "",
    year: 2022,
    doi: "arXiv:2207.08207",
    doiUrl: "https://doi.org/10.48550/arXiv.2207.08207",
  },
  {
    authors: "P. Chang, P. Elmer, Y. Gu, V. Krutelyov, G. Niendorf <em>et al.</em>",
    title: "Segment Linking: A Highly Parallelizable Track Reconstruction Algorithm for HL-LHC",
    journal: "J. Phys. Conf. Ser.",
    volume: "2375",
    pages: "012005",
    year: 2022,
    doi: "doi:10.1088/1742-6596/2375/1/012005",
    doiUrl: "https://doi.org/10.1088/1742-6596/2375/1/012005",
  },
  {
    authors: "CMS Collaboration",
    title: "First observation of production of three massive gauge bosons",
    journal: "PoS ICHEP2020",
    volume: "",
    pages: "325",
    year: 2021,
    doi: "doi:10.22323/1.390.0325",
    doiUrl: "https://doi.org/10.22323/1.390.0325",
  },
  {
    authors: "ATLAS and CMS Collaborations",
    title: "Studies of rare electroweak multiboson interactions at the LHC",
    journal: "PoS LHCP2019",
    volume: "",
    pages: "107",
    year: 2019,
    doi: "doi:10.22323/1.350.0107",
    doiUrl: "https://doi.org/10.22323/1.350.0107",
  },
  {
    authors: "V. Cavaliere, J. Adelman, P. Albicocco, J. Alison, L.S. Ancu <em>et al.</em>",
    title: "Design of a hardware track finder (Fast Tracker) for the ATLAS trigger",
    journal: "JINST",
    volume: "11",
    pages: "C02056",
    year: 2016,
    doi: "doi:10.1088/1748-0221/11/02/C02056",
    doiUrl: "https://doi.org/10.1088/1748-0221/11/02/C02056",
  },
  {
    authors: "G. Volpi, J. Adelman, P. Albicocco, J. Alison, L.S. Ancu <em>et al.</em>",
    title: "The ATLAS fast tracker processor design",
    journal: "PoS VERTEX2015",
    volume: "",
    pages: "040",
    year: 2015,
    doi: "doi:10.22323/1.254.0040",
    doiUrl: "https://doi.org/10.22323/1.254.0040",
  },
  {
    authors: "J. Anderson, A. Andreani, A. Andreazza, A. Annovi, M. Atkinson <em>et al.</em>",
    title: "A fast hardware tracker for the ATLAS trigger system",
    journal: "Nucl. Instrum. Meth. A",
    volume: "718",
    pages: "258",
    year: 2013,
    doi: "doi:10.1016/j.nima.2012.11.133",
    doiUrl: "https://doi.org/10.1016/j.nima.2012.11.133",
  },
  {
    authors: "J. Anderson, A. Andreani, A. Andreazza, A. Annovi, M. Atkinson <em>et al.</em>",
    title: "FTK: A Fast Track Trigger for ATLAS",
    journal: "JINST",
    volume: "7",
    pages: "C10002",
    year: 2012,
    doi: "doi:10.1088/1748-0221/7/10/C10002",
    doiUrl: "https://doi.org/10.1088/1748-0221/7/10/C10002",
  },
  {
    authors: "CMS Collaboration",
    title: "Line Segment Tracking: Improving the Phase-2 CMS High Level Trigger Tracking with a Novel, Hardware-Agnostic Pattern Recognition Algorithm",
    journal: "arXiv:2407.18231",
    volume: "",
    pages: "",
    year: 2024,
    doi: "arXiv:2407.18231",
    doiUrl: "https://doi.org/10.48550/arXiv.2407.18231",
  },
];
