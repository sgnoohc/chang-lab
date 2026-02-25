export interface PersonLink {
  text: string;
  url: string;
}

export interface Person {
  name: string;
  role: string;
  image: string;
  links?: PersonLink[];
}

export const people: Person[] = [
  {
    name: "Prof. Philip Chang",
    role: "Principal Investigator",
    image: "PC.jpeg",
    links: [
      { text: "CV", url: "cv.pdf" },
      { text: "InspireHEP", url: "https://inspirehep.net/authors/1054464" },
      { text: "Email", url: "mailto:p.chang@ufl.edu" },
    ],
  },
  {
    name: "Dr. Kelci Mohrman",
    role: "Postdoc",
    image: "kelci.jpg",
    links: [
      { text: "InspireHEP", url: "https://inspirehep.net/authors/1650353" },
      { text: "Email", url: "mailto:k.mohrman@ufl.edu" },
    ],
  },
  {
    name: "Dr. Gustavs Kehris",
    role: "Postdoc",
    image: "photos/portrait_GK_low.jpg",
    links: [
      { text: "InspireHEP", url: "https://inspirehep.net/authors/2013204" },
      { text: "Email", url: "mailto:gustavs.kehris@cern.ch" },
    ],
  },
  {
    name: "Matthew Dittrich",
    role: "5th Year PhD Student",
    image: "MD.jpeg",
  },
  {
    name: "Alexandra Aponte Utani",
    role: "2nd Year PhD Student",
    image: "AAU.jpg",
  },
  {
    name: "Hubert Pugzlys",
    role: "BS Student",
    image: "HP.jpg",
  },
  {
    name: "Trevor Sabitsch",
    role: "BS Student",
    image: "TS.jpg",
  },
];
