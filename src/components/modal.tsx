"use client";

import useOutsideClick from "@/lib/useOutsideClick";
import { FC, ReactNode, useRef, useState } from "react";

interface ModalProps {
  title: string;
  trigger: ReactNode;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ title, trigger, children }) => {
  const [show, setShow] = useState(false);
  const outside = useRef(null);

  useOutsideClick(outside, () => {
    setShow(false);
  });

  return (
    <>
      <div onClick={() => setShow(true)}>{trigger}</div>
      {show && (
        <div className="h-screen w-screen fixed bg-blue/10 top-0 left-0 backdrop-blur-sm flex items-center justify-center">
          <div className="max-w-md mx-2.5 bg-white p-5 rounded" ref={outside}>
            <div>
              <div className="flex justify-between mb-2.5">
                <h2 className="font-semibold">{title}</h2>
                <button onClick={() => setShow(false)}>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.646447"
                      y1="17.6757"
                      x2="17.6758"
                      y2="0.646356"
                      stroke="#090A0E"
                    />
                    <line
                      x1="17.6757"
                      y1="18.3829"
                      x2="0.646356"
                      y2="1.35346"
                      stroke="#090A0E"
                    />
                  </svg>
                </button>
              </div>

              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
