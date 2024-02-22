import { FC } from "react"

interface Logo {
    dark?: boolean
}

const Logo: FC<Logo> = ({ dark }) => {
    if (dark)
        return (
            <div className="w-fit">
                <div className="flex items-center justify-center gap-2.5">
                    <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.72032 13.9977C7.85616 5.98391 10.7265 7.28771 11.9447 8.51713C12.4486 9.02579 12.6209 9.74813 12.6614 10.463L13.5343 25.8851C13.6085 27.1946 13.168 28.5004 12.0803 29.2334C10.9999 29.9614 9.37061 30.7915 7.22002 31.1485C3.00256 31.8485 4.77024 34.6485 2.32002 34.2985C-0.130197 33.9485 -1.87949 24.8481 3.72032 13.9977Z" fill="#F7F7F8" />
                        <path d="M27.4301 14.0309C23.2942 6.01711 20.4239 7.32091 19.2057 8.55033C18.7017 9.05899 18.5294 9.78133 18.489 10.4962L17.6161 25.9183C17.5419 27.2279 17.9823 28.5337 19.0701 29.2666C20.1505 29.9946 21.7798 30.8248 23.9304 31.1817C28.1478 31.8817 26.3802 34.6817 28.8304 34.3317C31.2806 33.9817 33.0299 24.8813 27.4301 14.0309Z" fill="#F7F7F8" />
                        <path d="M15.75 2V18.1608" stroke="#F7F7F8" strokeWidth="3" strokeLinecap="round" />
                    </svg>

                    <div className="text-white">
                        <p className="font-bold">Pneumologie</p>
                        <p className="text-xs">Erlangen & Höchstadt/Aisch</p>
                    </div>
                </div>
            </div>
        )

    return (
        <div className="w-fit">
            <div className="flex items-center justify-center gap-2.5">
                <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.72031 13.9977C7.85616 5.98391 10.7265 7.28771 11.9447 8.51713C12.4486 9.02579 12.6209 9.74813 12.6614 10.463L13.5343 25.8851C13.6085 27.1946 13.168 28.5005 12.0803 29.2334C10.9999 29.9614 9.37061 30.7915 7.22002 31.1485C3.00256 31.8485 4.77024 34.6485 2.32002 34.2985C-0.130197 33.9485 -1.87949 24.8481 3.72031 13.9977Z" fill="#0E61A8" />
                    <path d="M27.4301 14.0309C23.2942 6.01711 20.4239 7.32091 19.2057 8.55033C18.7017 9.05899 18.5294 9.78133 18.489 10.4962L17.6161 25.9183C17.5419 27.2279 17.9823 28.5337 19.0701 29.2666C20.1505 29.9946 21.7798 30.8248 23.9304 31.1817C28.1478 31.8817 26.3802 34.6817 28.8304 34.3317C31.2806 33.9817 33.0299 24.8813 27.4301 14.0309Z" fill="#31C5F4" />
                    <path d="M15.75 2V18.1608" stroke="#E4E4EB" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <div className="">
                    <p className="font-bold">Pneumologie</p>
                    <p className="text-xs">Erlangen & Höchstadt/Aisch</p>
                </div>
            </div>
        </div>
    )
}

export default Logo