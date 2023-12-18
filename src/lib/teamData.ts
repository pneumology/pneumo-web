export interface TeamData {
  image: string;
  name: string;
  sex: number;
  schwerpunkte: string[];
}

export const teamData: TeamData[] = [
  {
    image: "/img/dr1.png",
    name: "Dr. Med Schaubenschläger",
    sex: 0,
    schwerpunkte: [
      "Lungen- und Bronchialheilkunde",
      "Allergologie",
      "Umweltmedizin",
      "Arbeits- und Betriebsmedizin",
    ],
  },
  {
    image: "/img/praxis.webp",
    name: "Dr. Med. Pour Schahin",
    sex: 1,
    schwerpunkte: ["Lungen- und Bronchialheilkunde"],
  },
  {
    image: "/img/praxis.webp",
    name: "Dr. Med. P. Berg",
    sex: 0,
    schwerpunkte: ["Lungen- und Bronchialheilkunde", "Schlafmedizin"],
  },
];
