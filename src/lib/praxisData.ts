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
  link?: string;
  route: string;
}

export const praxisData: PraxisData[] = [
  {
    name: "Praxis Erlangen",
    image: "/img/praxis.webp",
    locationImg: "/img/erlangen.webp",
    drs: ["Dr. Schaubschläger", "Dr. Berg", "Dr. Pour Schahin"],
    address: "Nägelsbachstraße 49 C",
    plzCity: "91052 Erlangen",
    phone: "09131 - 7625 - 60",
    fax: "09131 - 7625 - 65",
    openingTimes: [
      { "Mo, Di, Do": "08:00 - 16:30 Uhr" },
      { "Mi, Fr": "08:00 - 12:00 Uhr" },
    ],
    link: "https://webtermin.medatixx.de/#/400c6947-8959-4b6e-a35b-3acd78da756a",
    route: "https://maps.app.goo.gl/z6zke3vFjJzJgR6w5",
  },
  {
    name: "Praxis Höchstadt",
    image: "/img/weitere_leistungen.webp",
    locationImg: "/img/hoechstadt.webp",
    drs: ["Dr. Schaubschläger", "Dr. Berg", "Dr. Pour Schahin"],
    address: "Am Vogelseck 1",
    plzCity: "91315 Höchstadt/Aisch",
    phone: "09131 - 7625 - 60",
    fax: "09131 - 7625 - 65",
    openingTimes: [
      { "Mo, Di, Do": "08:00 - 16:30 Uhr" },
      { "Mi, Fr": "08:00 - 12:00 Uhr" },
    ],
    link: "https://webtermin.medatixx.de/#/5d5aec89-1c59-4ad8-a105-f2a94dd54e51",
    route: "https://maps.app.goo.gl/CgLJVQZ2f3JmkwpP9",
  },
  {
    name: "Schlaflabor Tennenlohe",
    image: "/img/schlaflabor.webp",
    locationImg: "/img/tennenlohe.webp",
    drs: ["Dr. Schaubschläger", "Dr. Berg", "Dr. Pour Schahin"],
    address: "Am Weichselgarten 8 (EG, Technische Fakultät)",
    plzCity: "91058 Tennenlohe",
    phone: "09131 - 614 - 6330",
    fax: "09131 - 7625 - 65",
    openingTimes: [{ "nach Vereinbarung": "" }],
    route: "https://maps.app.goo.gl/3oECKTX8wiBWw2mp9",
  },
];
