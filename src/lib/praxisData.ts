export interface PraxisData {
  name: string;
  image: string;
  locationImg: string;
  drs: string[];
  address: string;
  plzCity: string;
  phone: string;
  fax?: string;
  openingTimes: { [key: string]: string }[];
}

export const praxisData: PraxisData[] = [
  {
    name: "Praxis Erlangen",
    image: "/img/praxis.webp",
    locationImg: "/img/location.webp",
    drs: ["Dr. Schaubschläger", "Dr. Berg", "Dr. Pour Schahin"],
    address: "Nägelsbachstraße 49 C",
    plzCity: "91052 Erlangen",
    phone: "09131 - 7625 - 60",
    fax: "09131 - 7625 - 65",
    openingTimes: [
      { "Mo, Di, Do": "08:00 - 16:30 Uhr" },
      { "Mi, Fr": "08:00 - 12:00 Uhr" },
    ],
  },
  {
    name: "Praxis Häöchstadt",
    image: "/img/praxis.webp",
    locationImg: "/img/location.webp",
    drs: ["Dr. Schaubschläger", "Dr. Berg", "Dr. Pour Schahin"],
    address: "Am Vogelseck 1",
    plzCity: "91315 Höchstadt/Aisch",
    phone: "09131 - 7625 - 60",
    fax: "09131 - 7625 - 65",
    openingTimes: [
      { "Mo, Di, Do": "08:00 - 16:30 Uhr" },
      { "Mi, Fr": "08:00 - 12:00 Uhr" },
    ],
  },
  {
    name: "Schlaflabor Tennenlohe",
    image: "/img/praxis.webp",
    locationImg: "/img/location.webp",
    drs: ["Dr. Schaubschläger", "Dr. Berg", "Dr. Pour Schahin"],
    address: "Am Weichselgarten 8 (Erdgeschoss, Technische Fakultät)",
    plzCity: "91058 Tennenlohe",
    phone: "09131 - 614 - 6330",
    fax: "09131 - 7625 - 65",
    openingTimes: [
      { "Mo, Di, Do": "08:00 - 16:30 Uhr" },
      { "Mi, Fr": "08:00 - 12:00 Uhr" },
    ],
  },
];
