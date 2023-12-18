'use client'

import cn from "classnames"
import Link from "next/link"
import { useState } from "react"

const MobileNavbarButton = () => {
    const [open, setOpen] = useState(false)

    return <>
        <div className="cursor-pointer select-none" onClick={() => setOpen(!open)}>
            {open ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="21.2129" width="30" height="4" rx="2" transform="rotate(-45 0 21.2129)" fill="black" />
                <rect x="2.80859" y="-0.0214844" width="30" height="4" rx="2" transform="rotate(45 2.80859 -0.0214844)" fill="black" />
            </svg>
                : <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="4" rx="2" fill="black" />
                    <rect y="9" width="30" height="4" rx="2" fill="black" />
                    <rect y="18" width="30" height="4" rx="2" fill="black" />
                </svg>
            }
        </div>
        <div className={cn('flex-col absolute bg-white font-bold w-full h-screen left-0 top-[81px] items-center z-50',
            open ? 'flex' : 'hidden')}>
            <div className="flex flex-col gap-4 p-10">
                <Link href="/">Standorte & Öffnungszeiten</Link>
                <div className="flex flex-col pl-7 gap-4">
                    <Link href="/">Praxis Erlangen</Link>
                    <Link href="/">Praxis Höchstadt</Link>
                    <Link href="/">Schlaflabor Tennenlohe</Link>
                </div>
                <Link href="/">Leistungen</Link>
                <div className="flex flex-col pl-7 gap-4">
                    <Link href="/">Lungenfunktion</Link>
                    <Link href="/">Laboruntersuchung</Link>
                    <Link href="/">Allergien</Link>
                    <Link href="/">Schlaflabor</Link>
                    <Link href="/">DMP Programm</Link>
                    <Link href="/">Röntgen</Link>
                    <Link href="/">Weitere Leistungen</Link>
                </div>
                <Link href="/">Termin-Buchung</Link>
                <Link href="/">FAQ</Link>
                <Link href="/">Kontakt</Link>
            </div>
        </div>
    </>
}

export default MobileNavbarButton;