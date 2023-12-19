import Notification from "@/components/notification";
import Image from "next/image";

const Hero = () => {
    return <div className="my-24">
        <div className="flex flex-wrap-reverse justify-between">
            <div className="max-w-md flex flex-col gap-5 mb-10">
                <h1 className="font-bold text-3xl">Pneumologische<br />Schwerpunkpraxis</h1>
                <p className="">Lungenfachärztliche Praxis für <span className="font-semibold">Lungen</span>- bzw. <span className="font-semibold">Atemwegserkrankungen</span>, schlafbezogene <span className="font-semibold">Atmungsstörungen</span> und <span className="font-semibold">Allergologie</span> in Erlangen und Höchstadt.</p>
            </div>

            <Notification />
        </div>
        <Image
            src="/img/team.webp"
            alt="Team image"
            width={1800}
            height={520}
            unoptimized
        />
    </div>
}

export default Hero;