import { praxisData } from "@/lib/praxisData";
import Image from "next/image";
import { FC } from "react";

interface Praxis {
    selected: number
}

const Praxis: FC<Praxis> = ({
    selected
}) => {
    return <div className="w-full flex gap-2.5">
        <div className="w-96 flex flex-col gap-2.5">
            <Image src={praxisData[selected].image} alt="Praxis" width={250} height={150} />
            <div>
                {praxisData[selected].drs.map((dr, i) => <p key={i} className="m-0 p-0">{dr}</p>)}
            </div>
            <div className="font-semibold">
                <p>{praxisData[selected].address}</p>
                <p>{praxisData[selected].plzCity}</p>
            </div>
            <p>Tel.: <a href={`tel:${praxisData[selected].phone.replace(/\s/g, '')}`} className="underline">{praxisData[selected].phone}</a></p>
            <div>
                <p className="font-semibold">Öffnungszeiten:</p>

                {praxisData[selected].openingTimes.map((openingTime, i) => {
                    const key = Object.keys(openingTime)[0]
                    return <div key={i} className="flex justify-between">
                        <p key={i}>{key}</p>
                        <p key={i} className="font-semibold">{openingTime[key]}</p>
                    </div>
                })}
            </div>
        </div>
        <div className="w-full h-full relative">
            <Image src={praxisData[selected].locationImg} alt="Praxis" fill className="object-cover rounded" />
        </div>
    </div>
}

export default Praxis;