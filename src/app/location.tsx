'use client'
import Praxis from "@/components/praxis";
import Selector from "@/components/selector";
import { useState } from "react";

const Location = () => {
    const [selected, setSelected] = useState(0)

    return <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="1824" height="1014" viewBox="0 0 1824 1014" fill="none" className="absolute top-[-50px] z-10 w-full">
            <g filter="url(#filter0_f_2193_2473)">
                <path d="M464.535 134.958L1689.63 614.603L1212.09 879.104L-12.9994 399.46L464.535 134.958Z" fill="url(#paint0_linear_2193_2473)" />
            </g>
            <defs>
                <filter id="filter0_f_2193_2473" x="-147" y="0.957031" width="1970.63" height="1012.15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="67" result="effect1_foregroundBlur_2193_2473" />
                </filter>
                <linearGradient id="paint0_linear_2193_2473" x1="420.557" y1="544.117" x2="1127.66" y2="372.482" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E1F3F6" />
                    <stop offset="0.567708" stopColor="#DCE3F6" />
                    <stop offset="1" stopColor="#F3F3FC" />
                </linearGradient>
            </defs>
        </svg>
        <div className="p-5 flex justify-center w-full pt-20">
            <div className="w-full max-w-7xl">
                <div className="my-20 flex flex-col md:flex-row justify-between gap-10 md:gap-0 z-10 relative">
                    <Selector selected={selected} setSelected={setSelected} />
                    <Praxis selected={selected} />
                </div>
            </div>
        </div>
    </div>
}

export default Location