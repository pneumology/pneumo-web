import { faq } from '@/lib/content.json';
import cn from 'classnames';

const FAQ = () => {
    return (
        <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="846" viewBox="0 0 1920 846" fill="none" className='absolute bottom-[-80px] opacity-75 w-full'>
                <g filter="url(#filter0_f_2200_2473)">
                    <path d="M0 134L1920 377.872V712L1.47398e-06 712L0 134Z" fill="url(#paint0_linear_2200_2473)" fillOpacity="0.75" />
                </g>
                <defs>
                    <filter id="filter0_f_2200_2473" x="-134" y="0" width="2188" height="846" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="67" result="effect1_foregroundBlur_2200_2473" />
                    </filter>
                    <linearGradient id="paint0_linear_2200_2473" x1="489.644" y1="693.433" x2="992.994" y2="167.632" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F3E1F6" />
                        <stop offset="0.567708" stopColor="#DCE3F6" />
                        <stop offset="1" stopColor="#F3F3FC" />
                    </linearGradient>
                </defs>
            </svg>
            <div className='z-10 relative'>
                <div className="p-5 flex justify-center w-full py-20">
                    <div className="w-full max-w-7xl">
                        <hr className='my-12'></hr>
                        <h1 className='font-bold text-2xl'>FAQ</h1>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-12 mt-10">
                            {faq.map((e: any, i: any) =>
                                <div key={i} className={cn(`flex flex-col gap-2.5`,
                                    i == 0 ? 'lg:col-span-3 md:col-span-2' : '')}>
                                    <h2 className="font-semibold text-xl">{e.question}</h2>
                                    <p>{e.answer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;