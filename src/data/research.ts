export interface ResearchLink {
  url: string;
  text: string;
  external?: boolean;
}

export interface ResearchItem {
  title: string;
  primaryImage: string;
  primaryImageAlt: string;
  description: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  links: ResearchLink[];
}

export const research: ResearchItem[] = [
  {
    title: "Muon Collider Studies",
    primaryImage: "muoncollider.jpg",
    primaryImageAlt: "Concept illustration of a muon collider",
    description: `Muon colliders offer a unique path toward multi-TeV lepton collisions with clean experimental signatures
and direct sensitivity to new physics. We explore simulation strategies, detector concepts, and physics
potential — ranging from precision Higgs measurements to searches for Beyond the Standard Model phenomena.`,
    secondaryImage: "science.jpg",
    secondaryImageAlt: "Dream Machine",
    links: [{ url: "#media", text: "Learn more about the Muon Collider →" }],
  },
  {
    title: "Higgs + Two Vector Boson Production via VBS",
    primaryImage: "vbsvvh.jpg",
    primaryImageAlt: "Example Feynman diagrams for VVHH coupling in VBS",
    description: `The quartic couplings between two Higgs bosons and vector
bosons (HHWW and HHZZ) remain among the least constrained in
the Higgs sector.  This CMS study presents the first direct
search for production of a Higgs boson in association with
two vector bosons via vector boson scattering (VBS), using
138 fb⁻¹ of 13 TeV data.  It sets the most stringent limits
yet on the VVHH (κ₂V) coupling relative to the SM and independently
constrains the HHWW (κ₂W) and HHZZ (κ₂Z) quartic couplings—marking a
significant advance in our ability to probe Higgs self-interactions at
the LHC.`,
    secondaryImage: "wwhhzzhh.png",
    secondaryImageAlt: "WWHH vs. ZZHH coupling constraint",
    links: [
      {
        url: "https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/HIG-24-003/index.html",
        text: "View the CMS preliminary result →",
        external: true,
      },
    ],
  },
  {
    title: "Measurement of WWZ and ZH Production",
    primaryImage: "wwzeventdisplay.jpg",
    primaryImageAlt: "WWZ event display",
    description: `We led the study of <em>first simultaneous measurement</em> of nonresonant WWZ
and ZH (H→WW) production at √s = 13 and 13.6 TeV. This study delivered the
<span class="font-semibold">most precise determination</span> of the WWZ cross section to date
and provided the <em>first evidence for triboson production at 13.6 TeV</em>.
These results are a <span class="font-semibold">critical milestone</span> in testing the Standard Model's
self-consistency and probing the dynamics of <em>multi-boson interactions</em>,
which are uniquely sensitive to subtle effects from new physics at higher scales.`,
    secondaryImage: "WWZPlot.jpg",
    secondaryImageAlt: "WWZ Yield Plot",
    links: [
      {
        url: "https://doi.org/10.1103/6z3d-zjw4",
        text: "Read the publication →",
        external: true,
      },
    ],
  },
  {
    title: "WH Production via Vector Boson Scattering",
    primaryImage: "vbswh.jpg",
    primaryImageAlt: "Feynman diagrams for WH via VBS",
    description: `We led the study of <em>first simultaneous measurement</em> of nonresonant WWZ
and ZH (H→WW) production at √s = 13 and 13.6 TeV. This study delivered the
<span class="font-semibold">most precise determination</span> of the WWZ cross section to date
and provided the <em>first evidence for triboson production at 13.6 TeV</em>.
These results are a <span class="font-semibold">critical milestone</span> in testing the Standard Model's
self-consistency and probing the dynamics of <em>multi-boson interactions</em>,
which are uniquely sensitive to subtle effects from new physics at higher scales.`,
    secondaryImage: "vbswhfeyn.jpg",
    secondaryImageAlt: "Example Feynman diagrams for VVHH coupling in VBS",
    links: [
      {
        url: "https://doi.org/10.1016/j.physletb.2024.139202",
        text: "Read the publication →",
        external: true,
      },
    ],
  },
  {
    title: "First Observation of Three Massive Gauge Boson Production Process",
    primaryImage: "WWZ4l.jpg",
    primaryImageAlt: "CMS triboson event display",
    description: `The simultaneous production of three massive gauge bosons (<em>VVV with V = W, Z</em>) is an
extremely rare phenomenon predicted by the Standard Model of particle physics.
Observing such events provides a direct window into the <span class="font-semibold">self-interactions
    of the electroweak force</span>, one of the least tested aspects of the theory.
The first observation of VVV production, including <em>evidence for WWW</em> and
<em>evidence for WWZ</em>, marks a significant milestone: it confirms a key prediction
of the Standard Model and opens a new triboson physics program at the LHC.
These measurements will enable increasingly precise studies of multi-boson dynamics
and offer sensitivity to <span class="font-semibold">subtle effects of new physics</span>
at higher energy scales.`,
    secondaryImage: "https://cms-results.web.cern.ch/cms-results/public-results/superseded/SMP-19-014/CMS-PAS-SMP-19-014_Figure_001.png",
    secondaryImageAlt: "CMS triboson yield",
    links: [
      {
        url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.125.151802",
        text: "Read the publication →",
        external: true,
      },
    ],
  },
  {
    title: "Line Segment Tracking (LST)",
    primaryImage: "LST2.jpg",
    primaryImageAlt: "LST",
    description: `The High-Luminosity LHC will deliver an unprecedented volume of collision data, demanding new
approaches to <em>charged-particle tracking</em>. The Line Segment Tracking algorithm is a
highly parallelizable method designed to run efficiently on modern architectures such as GPUs.
By reconstructing tracks from short, local segments, LST dramatically reduces combinatorial
complexity, enabling <span class="font-semibold">fast and scalable track finding</span> in
high-pileup environments. This development is central to ensuring that the full discovery
potential of the HL-LHC can be realized.`,
    links: [
      {
        url: "https://doi.org/10.1088/1742-6596/2375/1/012005",
        text: "Read the publication →",
        external: true,
      },
    ],
  },
  {
    title: "Search for Three W Gauge Boson Production Process",
    primaryImage: "axion.jpg",
    primaryImageAlt: "axion limit plot",
    description: `The production of three W bosons (WWW) is one of the rarest processes predicted by the Standard Model,
providing a sensitive window into the structure of <em>quartic electroweak gauge couplings</em>
and the dynamics of multi-boson interactions. Studying this channel tests the self-interactions
of the weak force in extreme conditions and offers a pathway to uncover deviations that could signal
new physics. In addition to probing the Standard Model, the analysis also set the first experimental
limits on <em>photophobic axion-like particle models</em>, expanding the search for new phenomena
beyond the electroweak sector.`,
    links: [
      {
        url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.100.012004",
        text: "Read the publication →",
        external: true,
      },
    ],
  },
  {
    title: "Higgs Boson Physics in the WW Decay Channel",
    primaryImage: "vbfhww.jpg",
    primaryImageAlt: "ATLAS H→WW event display",
    description: `The Higgs boson, discovered in 2012, plays a central role in explaining how fundamental particles acquire mass.
One of the most important ways to study its properties is through its decay into a pair of W bosons
(<em>H → WW*</em>). Observations in this channel provided some of the earliest and most precise tests of
the Higgs mechanism, including the <span class="font-semibold">first evidence for vector boson fusion production</span>
of the Higgs boson. These measurements placed strong constraints on the Higgs boson's
<em>Yukawa coupling strength</em>, sharpening our understanding of its interaction with other particles.
In addition, searches for an <span class="font-semibold">extended Higgs sector</span> through the WW decay mode
explored possible links between the Higgs boson and <em>dark matter</em>, highlighting its potential as a
tool to probe new physics.`,
    links: [
      {
        url: "https://cerncourier.com/a/atlas-observes-and-measures-h-ww/",
        text: "CERN Courier coverage →",
        external: true,
      },
      {
        url: "https://atlas.cern/updates/briefing/new-atlas-precision-measurements-higgs-boson-observation-ww-decay",
        text: "ATLAS Physics Briefing →",
        external: true,
      },
    ],
  },
];
