import { teamData } from "@/lib/teamData"
import Image from "next/image"

const Team = () => {
    return <div className="bg-light" id="praxis">
        <div className="p-5 flex justify-center w-full pt-24 pb-12">
            <div className="w-full max-w-7xl">
                <h1 className="font-bold text-2xl mb-6">Unsere Praxis</h1>

                <div className="flex lg:flex-row flex-col gap-10 justify-between">
                    {teamData.map((team, index) => {
                        return <div key={index} className="flex flex-col items-center">
                            <div className="max-w-xs">
                                <div className="w-full flex justify-center">
                                    <div className="relative w-48 h-48" >
                                        <Image src={team.image} alt={team.name} fill className="object-cover rounded-full" unoptimized />
                                    </div>
                                </div>

                                <p className="font-medium text-2xl mt-5 mb-2.5">{team.name}</p>
                                <p>{team.sex ? 'Fachärztin' : 'Facharzt'} für Innere Medizin, mit den Schwerpunkten:</p>
                                <ul className="list-disc list-inside">
                                    {team.schwerpunkte.map((schwerpunkt, index) => <li key={index}>{schwerpunkt}</li>)}
                                </ul>
                            </div>
                        </div>
                    })}
                </div>
                <div className="relative w-full" >
                    <Image src="/img/team2.webp" alt="Team" width={1800} height={520} className="object-cover mt-10" unoptimized />
                </div>
            </div>
        </div>
    </div>
}

export default Team