'use client'

import cn from "classnames";
import { FC, useState } from "react";

interface More {
    title: string;
    content: string;
}

const More: FC<More> = ({ title, content }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <p className="cursor-pointer text-sm underline mt-5" onClick={() => setShow(!show)}>Mehr anzeigen</p>
            <div className={cn(
                show ? 'block' : 'hidden',
            )}>
                <div className="fixed z-50 top-0 left-0 w-full h-full backdrop-blur-sm bg-black/10 flex justify-center items-center p-10">
                    <div className="bg-white rounded max-w-md max-h-full relative">
                        <div className="flex justify-between mb-2.5">
                            <p className="font-semibold pl-5 py-5">{title}</p>
                            <div className="cursor-pointer p-5" onClick={() => setShow(false)}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="21.2129" width="30" height="4" rx="2" transform="rotate(-45 0 21.2129)" fill="black" />
                                    <rect x="2.80859" y="-0.0214844" width="30" height="4" rx="2" transform="rotate(45 2.80859 -0.0214844)" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-sm max-h-96 overflow-scroll px-5 pb-5">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default More;