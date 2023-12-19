import Logo from "@/components/logo";
import { praxisData } from "@/lib/praxisData";
import Link from "next/link";
import { FC } from "react";

interface Footer {
    mini?: boolean
}

const Footer: FC<Footer> = ({ mini }) => {
    if (mini)
        return <div className="bg-black z-20 relative" id="kontakt">
            <div className="p-5 flex justify-center w-full py-5">
                <div className="w-full max-w-7xl">
                    <div className="flex flex-wrap justify-between items-end">
                        <Logo dark />
                        <div className="text-white flex gap-5 mt-12">
                            <Link className="underline" href="/impressum">Impressum</Link>
                            <Link className="underline" href="/datenschutz">Datenschutz</Link>
                        </div>
                    </div>
                    <p className="w-full text-grey text-center mt-10">Mit ♥️ entwickelt von cycle.de</p>
                </div>
            </div>
        </div>

    return <div className="bg-black z-20 relative" id="kontakt">
        <div className="p-5 flex justify-center w-full py-12">
            <div className="w-full max-w-7xl">
                <Logo dark />

                <div className="flex flex-wrap justify-between items-end">
                    <div className="flex flex-wrap text-white gap-12 mt-12">
                        {praxisData.map((praxis, i) => {
                            return <div key={i} className="flex flex-col">
                                <p className="font-semibold">{praxis.name}</p>
                                <p>{praxis.address}</p>
                                <p>{praxis.plzCity}</p>
                                <br></br>
                                <p>Tel.: <a href={`tel:${praxis.phone.replace(/\s/g, '')}`} className="underline">{praxis.phone}</a></p>
                                {praxis.fax && <p>Fax: {praxis.fax}</p>}
                            </div>
                        })}
                    </div>
                    <div className="text-white flex gap-5 mt-12">
                        <Link className="underline" href="/impressum">Impressum</Link>
                        <Link className="underline" href="/datenschutz">Datenschutz</Link>
                    </div>
                </div>

                <p className="w-full text-grey text-center mt-10">Mit ♥️ entwickelt von cycle.de</p>
            </div>
        </div>
    </div>
}

export default Footer;