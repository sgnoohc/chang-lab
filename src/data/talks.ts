export interface FeaturedTalk {
  image: string;
  imageAlt: string;
  title: string;
  eventInfo: string;
  videoUrl?: string;
}

export const publicTalks: FeaturedTalk[] = [
  {
    image: "aspenimage.jpg",
    imageAlt: "Prof. Philip Chang speaking at the Aspen Center of Physics",
    title: "An Invitation to Imagine Something from Nothing",
    eventInfo: "Aspen Center of Physics, March 2024",
    videoUrl: "https://www.youtube.com/watch?v=WBUvlviE_oY",
  },
  {
    image: "enzian.jpg",
    imageAlt: "Enzian Theater marquee for Particle Fever Science on Screen event",
    title: "Then and Now: Developments in the Large Hadron Collider",
    eventInfo: "Particle Fever — Science on Screen, Dec 2022, Enzian Theater, Maitland FL",
  },
];

export interface PublicTalkListItem {
  type: string;
  title: string;
  event: string;
}

export const publicTalksList: PublicTalkListItem[] = [
  {
    type: "Public Seminar",
    title: "New Frontiers of Electroweak Physics at the LHC",
    event: "Mid-Florida QuarkNet Day 2024",
  },
  {
    type: "Public Seminar",
    title: "An Invitation to Imagine Something from Nothing",
    event: "Galesville Astrophysical Society 2024",
  },
];

export interface TalkRow {
  date: string;
  type: string;
  session: string;
  event: string;
  location: string;
  linkUrl?: string;
  linkText?: string;
}

export interface TalkGroup {
  title: string;
  rows: TalkRow[];
}

export const talkGroups: TalkGroup[] = [
  {
    title: "Triboson Physics",
    rows: [
      { date: "Oct 2025", type: "Conference", session: "Invited Plenary", event: "MBI Workshop", location: "Waltham, MA" },
    ],
  },
  {
    title: "Measurement of WWZ and ZH production cross sections at √s = 13 and 13.6 TeV",
    rows: [
      { date: "Aug 2025", type: "Conference", session: "Invited Parallel", event: "KSEA US-Korea Conference", location: "Atlanta, GA" },
    ],
  },
  {
    title: "Extreme Computing",
    rows: [
      { date: "Jul 2025", type: "Conference", session: "Invited Plenary", event: "Physics At The Highest Energies With Colliders (Galileo Galilei Institute)", location: "Florence, Italy" },
    ],
  },
  {
    title: "Recent LHC Results",
    rows: [
      { date: "May 2025", type: "Conference", session: "Invited Plenary", event: "Pheno 2025", location: "Pittsburgh, PA" },
    ],
  },
  {
    title: "Computing R&D: How we get to our targets",
    rows: [
      { date: "May 2025", type: "Conference", session: "Invited", event: "LHCP 2025", location: "Taipei, Taiwan" },
    ],
  },
  {
    title: "Forging New Paths to Unveil the Electroweak Sector",
    rows: [
      { date: "Mar 2025", type: "Colloquium", session: "", event: "Univ. of Florida", location: "Gainesville, FL" },
    ],
  },
  {
    title: "Enhancing Particle Physics Discovery Through Computational Innovation",
    rows: [
      { date: "Mar 2025", type: "Conference", session: "Parallel", event: "KSEA Southeastern Regional Conference", location: "Orlando, FL" },
    ],
  },
  {
    title: "Muon Collider the Dream Machine",
    rows: [
      { date: "Aug 2024", type: "Conference", session: "Parallel", event: "KSEA US-Korea Conference", location: "San Francisco, CA" },
    ],
  },
  {
    title: "Higgs Physics: What is in the vacuum?",
    rows: [
      { date: "Jun 2025", type: "Seminar", session: "Invited", event: "PURSUE (USCMS) Program", location: "Fermilab (Virtual)" },
      { date: "Jul 2024", type: "Seminar", session: "Invited", event: "PURSUE (USCMS) Program", location: "Fermilab (Virtual)" },
    ],
  },
  {
    title: "GPU Programming",
    rows: [
      { date: "May 2024", type: "Lecture", session: "Invited", event: "HSF-India HEP Software Workshop", location: "Delhi, India" },
    ],
  },
  {
    title: "AI for Particle Tracking",
    rows: [
      { date: "Mar 2024", type: "Conference", session: "Parallel", event: "KSEA Southeastern Regional Conference", location: "Gainesville, FL" },
    ],
  },
  {
    title: "LHC Future Opportunities",
    rows: [
      { date: "Mar 2024", type: "Conference", session: "Invited Plenary", event: "The Future of High Energy Physics: A New Generation, A New Vision Aspen Winter Conference", location: "Aspen, CO" },
    ],
  },
  {
    title: "Line Segment Tracking at CMS",
    rows: [
      { date: "May 2023", type: "Conference", session: "Parallel", event: "Computing in High Energy & Nuclear Physics (CHEP)", location: "Norfolk, VA" },
    ],
  },
  {
    title: "Recent CMS results on Standard Model Physics",
    rows: [
      { date: "Sep 2022", type: "Conference", session: "Parallel", event: "Conference on the Intersection of Particle and Nuclear Physics (CIPANP)", location: "Lake Buena Vista, FL" },
    ],
  },
  {
    title: "Recent CMS results on Higgs physics",
    rows: [
      { date: "Aug 2022", type: "Conference", session: "Parallel", event: "Conference on the Intersection of Particle and Nuclear Physics (CIPANP)", location: "Lake Buena Vista, FL" },
    ],
  },
  {
    title: "New frontiers of electroweak physics at the LHC",
    rows: [
      { date: "May 2023", type: "Seminar", session: "Invited", event: "PKU / SJTU Collider Physics Forum", location: "Virtual" },
      { date: "Sep 2022", type: "Seminar", session: "Invited", event: "Univ. of Tennessee, Knoxville HEP Seminar", location: "Knoxville, TN" },
      { date: "May 2022", type: "Colloquium", session: "Invited", event: "Korea Advanced Institute of Science & Technology", location: "Daejeon, Korea" },
      { date: "May 2022", type: "Seminar", session: "Invited", event: "Association of Korean Physicists in America–Korean Physical Society Joint Symposium", location: "Virtual" },
      { date: "Mar 2022", type: "Colloquium", session: "Invited", event: "Univ. of Alabama", location: "Tuscaloosa, AL" },
      { date: "Mar 2022", type: "Colloquium", session: "Invited", event: "Univ. of Notre Dame", location: "Notre Dame, IN" },
      { date: "Jan 2022", type: "Colloquium", session: "Invited", event: "Univ. of Florida", location: "Gainesville, FL" },
      { date: "Jan 2022", type: "Seminar", session: "Invited", event: "Univ. of Notre Dame HEP Seminar", location: "Notre Dame, IN" },
    ],
  },
  {
    title: "Observation of production of three massive gauge boson",
    rows: [
      { date: "Jan 2022", type: "Seminar", session: "Invited", event: "Univ. of Florida HEP Seminar", location: "Gainesville, FL (Virtual)" },
      { date: "Mar 2021", type: "Seminar", session: "Invited", event: "Univ. of Illinois HEP Seminar", location: "Urbana, IL (Virtual)" },
      { date: "Dec 2020", type: "Seminar", session: "Invited", event: "Univ. of Pittsburgh HEP Seminar", location: "Pittsburgh, PA (Virtual)" },
      { date: "Oct 2020", type: "Seminar", session: "Invited", event: "UCSB HEP Seminar", location: "Santa Barbara, CA (Virtual)" },
      { date: "Oct 2020", type: "Seminar", session: "Invited", event: "Univ. of Michigan HEP Seminar", location: "Ann Arbor, MI (Virtual)" },
      { date: "Sep 2020", type: "Seminar", session: "Invited", event: "Univ. of Pennsylvania HEP Seminar", location: "Philadelphia, PA (Virtual)" },
      { date: "Sep 2020", type: "Seminar", session: "Invited", event: "Univ. of Maryland HEP Seminar", location: "College Park, MD (Virtual)" },
      { date: "Sep 2020", type: "Seminar", session: "Invited", event: "KSU/KU/UNL Joint HEP Seminar", location: "Kansas / Nebraska (Virtual)", linkUrl: "https://www.youtube.com/watch?v=WBUvlviE_oY", linkText: "YouTube →" },
      { date: "Sep 2020", type: "Seminar", session: "Invited", event: "Fermilab Wine & Cheese Seminar", location: "Batavia, IL (Virtual)" },
      { date: "Aug 2020", type: "Seminar", session: "Invited", event: "Korea Institute for Advanced Study HEP Seminar", location: "Seoul, Korea", linkUrl: "https://www.youtube.com/watch?v=UYbUNBO4t7I", linkText: "YouTube →" },
      { date: "Aug 2020", type: "Seminar", session: "Invited", event: "Univ. of Seoul HEP Seminar", location: "Seoul, Korea" },
      { date: "Aug 2020", type: "Seminar", session: "Invited", event: "Seoul National University HEP Seminar", location: "Seoul, Korea" },
      { date: "Jul 2020", type: "Seminar", session: "Invited", event: "Hanyang University HEP Seminar", location: "Seoul, Korea" },
      { date: "Jul 2020", type: "Seminar", session: "Invited", event: "Yonsei University HEP Seminar", location: "Seoul, Korea" },
      { date: "Jul 2020", type: "Seminar", session: "Invited", event: "Korea University HEP Seminar", location: "Seoul, Korea" },
      { date: "Jun 2020", type: "Seminar", session: "Invited", event: "Rice University HEP Seminar", location: "Houston, TX (Virtual)" },
      { date: "Jun 2020", type: "Seminar", session: "Invited", event: "Harvard/MIT LPPC Seminar", location: "Boston, MA (Virtual)" },
      { date: "May 2020", type: "Seminar", session: "Invited", event: "UC San Diego HEP Seminar", location: "San Diego, CA (Virtual)" },
    ],
  },
  {
    title: "Multiboson physics at CMS",
    rows: [
      { date: "Apr 2021", type: "Symposium", session: "Invited", event: "Korean Physical Society Spring Meeting — Pioneer Symposium", location: "Virtual" },
    ],
  },
  {
    title: "Search for heavy triboson production in leptonic final states",
    rows: [
      { date: "Jul 2020", type: "Conference", session: "Parallel", event: "ICHEP 2020", location: "Prague (Virtual)", linkUrl: "https://youtu.be/nOF4IBNO-Tk?t=1543", linkText: "YouTube →" },
    ],
  },
  {
    title: "Parallelizable Track Pattern Recognition in HL-LHC",
    rows: [
      { date: "Apr 2020", type: "Conference", session: "", event: "Connecting the Dots Workshop", location: "Princeton, NJ (Virtual)" },
    ],
  },
  {
    title: "Measurements of triple gauge boson production in ATLAS and CMS",
    rows: [
      { date: "Jul 2019", type: "Workshop", session: "Invited", event: "Physics Workshop at the LPC: Multibosons at the Energy Frontier", location: "Batavia, IL" },
    ],
  },
  {
    title: "Rare EW multiboson at LHC",
    rows: [
      { date: "May 2019", type: "Conference", session: "Plenary", event: "LHCP 2019", location: "Puebla, Mexico" },
    ],
  },
  {
    title: "Electroweak physics with multibosons at CMS",
    rows: [
      { date: "May 2019", type: "Conference", session: "Parallel", event: "Pheno 2019", location: "Pittsburgh, PA" },
    ],
  },
  {
    title: "Search for the SM production of WWW events",
    rows: [
      { date: "Jan 2019", type: "Seminar", session: "Invited", event: "LHC Physics Center Physics Forum", location: "Batavia, IL" },
    ],
  },
  {
    title: "Searches for new physics in the Higgs sector",
    rows: [
      { date: "Mar 2016", type: "Seminar", session: "Invited", event: "Univ. of Pennsylvania (HEP)", location: "Philadelphia, PA" },
    ],
  },
  {
    title: "First evidence for vector-boson fusion H→WW",
    rows: [
      { date: "Feb 2016", type: "Seminar", session: "Invited", event: "Univ. of Cincinnati HEP Seminar", location: "Cincinnati, OH" },
      { date: "Apr 2015", type: "Seminar", session: "Invited", event: "Univ. of Pittsburgh HEP Seminar", location: "Pittsburgh, PA" },
      { date: "Apr 2015", type: "Conference", session: "", event: "APS April Meeting", location: "Baltimore, MD" },
    ],
  },
  {
    title: "Advanced Analysis Technique: Squeezing out information",
    rows: [
      { date: "Nov 2015", type: "Workshop", session: "Invited", event: "4th Chicagoland Pheno–ATLAS Workshop", location: "Chicago, IL" },
    ],
  },
  {
    title: "ATLAS VBF Trigger Overview",
    rows: [
      { date: "Jan 2015", type: "Workshop", session: "Invited", event: "3rd Chicagoland ATLAS–Pheno Meeting", location: "Chicago, IL" },
    ],
  },
  {
    title: "Higgs Properties",
    rows: [
      { date: "Sep 2014", type: "Conference", session: "Plenary", event: "Physics in Collisions 2014", location: "Bloomington, IN" },
    ],
  },
];
