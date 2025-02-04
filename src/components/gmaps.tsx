"use client";

import useOutsideClick from "@/lib/useOutsideClick";
import { FC, useEffect, useRef, useState } from "react";
import Button, { ButtonType } from "./button";

interface ModalProps {
  link: string;
}

let timeG = 5;

const Gmaps: FC<ModalProps> = ({ link }) => {
  const [show, setShow] = useState(false);
  const outside = useRef(null);

  useOutsideClick(outside, () => {
    setShow(false);
  });

  let timer: any = null;
  let timeout: any = null;

  const [time, setTime] = useState(5);

  const delay = () => {
    timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);

    timeout = setTimeout(() => {
      window.location.assign(link);
    }, 5000);
  };

  useEffect(() => {
    if (show) {
      setTime(5);
      delay();
    }

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [show]);

  return (
    <>
      <div onClick={() => setShow(true)}>
        <Button type={ButtonType.Secondary} className="px-10">
          Anfahrtsroute
        </Button>
      </div>
      {show && (
        <div className="h-screen w-screen fixed bg-blue/10 top-0 left-0 backdrop-blur-sm flex items-center justify-center">
          <div className="max-w-md mx-2.5 bg-white p-5 rounded" ref={outside}>
            <div>
              <div className="flex justify-between mb-2.5">
                <h2 className="font-semibold">Weiterleitung zu Google Maps</h2>
              </div>

              <p className="my-5">
                Sie werden in {time} Sekunden automatisch zu Google Maps
                weitergeleitet. Google Maps verwendet Cookies.
              </p>

              <Button className="px-10" onClick={() => setShow(false)}>
                zurück zur Homepage
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gmaps;
