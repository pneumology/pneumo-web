"use client";
import More from "@/components/more";
import { serviceData } from "@/lib/serviceData";
import Image from "next/image";

const Services = () => {
    const Item = (id: number) => {
        return (
            <div className="w-full col sm:max-w-[250px]" key={id}>
                <div className="w-full h-40 sm:w-[250px] sm:h-[85px] relative mb-2.5">
                    <Image
                        src={serviceData[id].image}
                        alt={serviceData[id].title}
                        className="object-cover rounded"
                        fill
                        unoptimized
                    />
                </div>

                <h3 className="font-semibold">{serviceData[id].title}</h3>

                <div
                    className="mt-1 text-sm prose"
                    dangerouslySetInnerHTML={{
                        __html: serviceData[id].description,
                    }}
                />

                <More
                    title={serviceData[id].title}
                    content={serviceData[id].more}
                />
            </div>
        );
    };

    return (
        <div className="p-5 flex justify-center w-full pt-20" id="leistungen">
            <div className="w-full max-w-7xl">
                <h1 className="font-bold text-2xl mb-5">
                    Unsere Praxis-Leistungen
                </h1>
                <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap gap-5 lg:flex-row">
                    <div className="lg:w-full lg:flex lg:gap-52 lg:justify-center contents">
                        {Item(0)}
                        {Item(1)}
                    </div>

                    <div className="lg:w-full lg:flex lg:justify-between lg:items-center contents">
                        {Item(2)}
                        <div className="hidden lg:block w-10 h-10 relative z-0">
                            <svg
                                width="585"
                                height="575"
                                viewBox="0 0 585 575"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className=" absolute top-[-250px] left-[-270px] z-0"
                            >
                                <path
                                    d="M155.844 9.02133L294.836 273.966L416.032 0.422787L295.55 274.281L584.979 198.485L295.749 275.036L535.465 454.063L295.283 275.663L304.774 574.702L294.502 275.689L66.6221 469.557L293.995 275.094L0.341844 217.806L294.144 274.328L155.844 9.02133Z"
                                    fill="#E4E4EB"
                                />
                                <path
                                    d="M257.496 262.078C272.41 233.18 281.999 243.491 284.363 246.891C284.772 247.478 284.957 248.173 284.997 248.888L288.065 303.082C288.139 304.392 287.698 305.677 286.717 306.548C284.067 308.899 277.848 313.493 268.311 315.076C255.278 317.239 260.741 325.892 253.169 324.81C245.598 323.728 240.192 295.607 257.496 262.078Z"
                                    fill="#0E61A8"
                                />
                                <path
                                    d="M330.762 262.175C315.848 233.277 306.259 243.589 303.894 246.988C303.486 247.576 303.301 248.27 303.261 248.985L300.193 303.18C300.119 304.49 300.559 305.775 301.541 306.645C304.191 308.996 310.41 313.591 319.947 315.174C332.979 317.337 327.517 325.989 335.089 324.908C342.66 323.826 348.066 295.705 330.762 262.175Z"
                                    fill="#31C5F4"
                                />
                                <path
                                    d="M294.67 225V274.939"
                                    stroke="#E4E4EB"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        {Item(3)}
                    </div>

                    <div className="lg:w-full lg:flex lg:gap-96 justify-center contents">
                        {Item(4)}
                        {Item(5)}
                    </div>

                    <div className="w-full flex lg:justify-center">
                        {Item(6)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
