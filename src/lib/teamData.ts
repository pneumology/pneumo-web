export interface TeamData {
  image: string;
  name: string;
  sex: number;
  schwerpunkte: string[];
}

export const teamData: TeamData[] = [
  {
    image: "/img/schaubenschlaeger.webp",
    name: "Dr. med. Schaubschläger",
    sex: 0,
    schwerpunkte: [
      "Lungen- und Bronchialheilkunde",
      "Allergologie",
      "Umweltmedizin",
      "Arbeits- und Betriebsmedizin",
    ],
  },
  {
    image: "/img/schahin.webp",
    name: "Dr. med. Pour Schahin",
    sex: 1,
    schwerpunkte: ["Lungen- und Bronchialheilkunde"],
  },
  {
    image: "/img/berg.webp",
    name: "Dr. med. Berg",
    sex: 0,
    schwerpunkte: ["Lungen- und Bronchialheilkunde", "Schlafmedizin"],
  },
];
