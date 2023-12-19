import Link from "next/link"
import Footer from "../footer"

const Impressum = () => {
    return <div>
        <div className="p-5 flex justify-center w-full py-40 relative z-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="846" viewBox="0 0 1920 846" fill="none" className='absolute bottom-[-80px] opacity-75 w-full'>
                <g filter="url(#filter0_f_2200_2473)">
                    <path d="M0 134L1920 377.872V712L1.47398e-06 712L0 134Z" fill="url(#paint0_linear_2200_2473)" fillOpacity="0.75" />
                </g>
                <defs>
                    <filter id="filter0_f_2200_2473" x="-134" y="0" width="2188" height="846" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="67" result="effect1_foregroundBlur_2200_2473" />
                    </filter>
                    <linearGradient id="paint0_linear_2200_2473" x1="489.644" y1="693.433" x2="992.994" y2="167.632" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F3E1F6" />
                        <stop offset="0.567708" stopColor="#DCE3F6" />
                        <stop offset="1" stopColor="#F3F3FC" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="w-full max-w-7xl relative">
                <h1 className="font-bold text-2xl mb-5">Impressum</h1>
                <p>Ortsübergreifende Gemeinschaftspraxis</p>
                <br />
                <p>Dr. med. W. Schaubschläger</p>
                <p>Dr. med. P. Berg</p>
                <p>Dr. med. und S. Pour Schahin</p>
                <br />
                <p>Nägelsbachstraße 49c</p>
                <p>91052 Erlangen</p>
                <p>Telefon: 09131-7625-60</p>
                <p>Telefax: 09131-7625-65</p>
                <p>Internet: <Link className="underline" href="https://www.pneumologie-erlangen.de">www.pneumologie-erlangen.de</Link></p>
                <br />
                <p>2. Standort:</p>
                <p>Am Vogelseck 1</p>
                <p>91315 Höchstadt an der Aisch</p>
                <p>Telefon: 09193-63 53 0</p>
                <p>Telefax: 09193-63 53 20</p>
                <br />
                <p>3. Standort:</p>
                <p>Am Weichselgarten 8</p>
                <p>91058 Erlangen</p>
                <p>Telefon: 09131-614 63 30</p>
                <p>Telefax: 09131-614 63 31</p>
                <br />
                <h2 className="font-medium">Inhaltlich Verantwortlich gemäß § 6 MDStV:</h2>
                <p>Dr. med. W. Schaubschläger, Dr. med. P. Berg und Dr. med. S. Pour Schahin</p>
                <br />
                <h2 className="font-medium">Ärztekammer:</h2>
                <p>Bayerische Landesärztekammer <Link className="underline" href="https://www.blaek.de"target="_blank">www.blaek.de</Link></p>
                <br />
                <h2 className="font-medium">Kassenärztliche Vereinigung:</h2>
                <p> KV Bayern <Link className="underline" href="https://www.kvb.de" target="_blank">www.kvb.de</Link></p>
                <br />
                <h2 className="font-medium">Berufsbezeichnung:</h2>
                <p>Fachärzte für Innere Medizin und Pneumologie Verliehen durch die Bayrische Landesärztekammer.</p>
                <br />
                <h2 className="font-medium">Berufsordnung:</h2>
                <p>Bayerische Landesärztekammer</p>
                <br />
                <h2 className="font-medium">Berufsrechtliche Regelungen:</h2>
                <p>- Berufsordnung der Landesärztekammer Bayern <Link className="underline" href="https://www.blaek.de/kammerrecht/berufsordnung-fuer-die-aerzte-bayerns/berufsordnung-fuer-die-aerzte-bayerns-bekanntmachung-vom-09-januar-2012-i-d-f-der-aenderungsbeschluesse-vom-28-oktober-2018-bayerisches-aerzteblatt-12-2018-s-694"target="_blank">Zur Berufsordnung</Link>, <Link className="underline" href="https://www.gesetze-bayern.de/Content/Document/BayHKaG"target="_blank">Heilberufegesetz des Landes Bayern</Link></p>
                <br />
                <h2 className="font-medium">Haftungshinweis</h2>
                <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Der Anbieter übernimmt auch keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.</p>
                <br />
                <p>Alle auf dieser Website veröffentlichten Beiträge und Abbildungen sind urheberrechtlich geschützt. Jede vom Urheberrechtsgesetz nicht zugelassene Verwertung bedarf vorheriger schriftlicher Zustimmung. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen.</p>
            </div>
        </div>
        <Footer mini />
    </div>
}

export default Impressum