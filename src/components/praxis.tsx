import { praxisData } from "@/lib/praxisData";
import Image from "next/image";
import { FC } from "react";
import Button, { ButtonType } from "./button";
import Link from "next/link";
import Modal from "./modal";
import Gmaps from "./gmaps";

interface Praxis {
  selected: number;
}

const Praxis: FC<Praxis> = ({ selected }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex gap-2.5">
        <div className="w-full md:w-96 flex flex-col gap-2.5">
          <div className="flex gap-2.5">
            <div className="w-full md:w-[250px] h-[150px] relative ">
              <Image
                src={praxisData[selected].image}
                alt="Praxis"
                fill
                className="object-cover rounded"
                unoptimized
              />
            </div>

            <div className="block md:hidden relative w-full ">
              <Image
                src={praxisData[selected].locationImg}
                alt="Praxis"
                fill
                className="object-cover rounded"
                unoptimized
              />
            </div>
          </div>
          <div>
            {praxisData[selected].drs.map((dr, i) => (
              <p key={i} className="m-0 p-0">
                {dr}
              </p>
            ))}
          </div>
          <div className="font-semibold">
            <p>{praxisData[selected].address}</p>
            <p>{praxisData[selected].plzCity}</p>
          </div>
          <p>
            Tel.:{" "}
            <a
              href={`tel:${praxisData[selected].phone.replace(/\s/g, "")}`}
              className="underline"
            >
              {praxisData[selected].phone}
            </a>
          </p>
          <div>
            <p className="font-semibold">Öffnungszeiten:</p>

            {praxisData[selected].openingTimes.map((openingTime, i) => {
              const key = Object.keys(openingTime)[0];
              return (
                <div key={i} className="flex justify-between">
                  <p>{key}</p>
                  <p className="font-semibold">{openingTime[key]}</p>
                </div>
              );
            })}
          </div>
          <div className="md:hidden flex flex-col gap-2.5">
            {praxisData[selected].link && (
              <Modal
                title="Wichtiger Hinweis"
                trigger={<Button className="px-10">Termin Buchen</Button>}
              >
                <p className="text-sm">
                  Wenn Sie länger als 1 Jahr nicht mehr oder noch nie Patient
                  unserer Praxis waren, ist folgendes Vorgehen notwendig:
                </p>

                <p className="my-2.5 text-sm">
                  Eine Terminvergabe ist derzeit nur telefonisch oder im Rahmen eines{" "}
                  <b>Hausarztvermittlungsfalls</b> möglich.{" "}
                </p>

                <p className="mb-5 text-sm">
                  Besteht die Indikation für eine dringende Vorstellung bei uns,
                  kann die Hausarztpraxis für Sie bei uns einen Termin
                  vereinbaren. Die zugehörige Indikation muss aber vom Hausarzt
                  überprüft werden.
                </p>
                <Link href={praxisData[selected].link || ""} target="_blank">
                  <Button className="px-10">Ja, Termin Buchen</Button>
                </Link>
              </Modal>
            )}

            <Gmaps link={praxisData[selected].route} />
          </div>
        </div>
        <div className="hidden md:block md:w-full h-full relative">
          <Image
            src={praxisData[selected].locationImg}
            alt="Praxis"
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
      <div className="hidden md:flex gap-2.5 mt-2.5">
        {praxisData[selected].link && (
          <Modal
            title="Wichtiger Hinweis"
            trigger={<Button className="px-10">Termin Buchen</Button>}
          >
            <p className="text-sm">
              Wenn Sie länger als 1 Jahr nicht mehr oder noch nie Patient
              unserer Praxis waren, ist folgendes Vorgehen notwendig:
            </p>

            <p className="my-2.5 text-sm">
              Eine Terminvergabe ist derzeit nur telefonisch oder im Rahmen eines{" "}
              <b>Hausarztvermittlungsfalls</b> möglich.{" "}
            </p>

            <p className="mb-5 text-sm">
              Besteht die Indikation für eine dringende Vorstellung bei uns,
              kann die Hausarztpraxis für Sie bei uns einen Termin vereinbaren.
              Die zugehörige Indikation muss aber vom Hausarzt überprüft werden.
            </p>
            <Link href={praxisData[selected].link || ""} target="_blank">
              <Button className="px-10">Ja, Termin Buchen</Button>
            </Link>
          </Modal>
        )}
        <Gmaps link={praxisData[selected].route} />
      </div>
    </div>
  );
};

export default Praxis;
