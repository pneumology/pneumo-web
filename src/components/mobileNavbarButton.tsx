'use client'

import cn from "classnames"
import Link from "next/link"
import { useState } from "react"

const MobileNavbarButton = () => {
    const [open, setOpen] = useState(false)

    return <>
        <div className="cursor-pointer select-none py-2.5" onClick={() => setOpen(!open)}>
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
        <div className={cn('flex-col absolute bg-white w-full h-screen overflow-scroll left-0 top-[81px] items-center z-50',
            open ? 'flex' : 'hidden')}>
            <div className="flex flex-col gap-2.5 p-5">
                <Link href="/#standorte" className="font-bold" onClick={() => setOpen(false)}>Standorte & Öffnungszeiten</Link>
                <div className="flex flex-col pl-7 gap-1.5">
                    <Link href="/#standorte" onClick={() => setOpen(false)}>Praxis Erlangen</Link>
                    <Link href="/#standorte" onClick={() => setOpen(false)}>Praxis Höchstadt</Link>
                    <Link href="/#standorte" onClick={() => setOpen(false)}>Schlaflabor Tennenlohe</Link>
                </div>
                <Link href="/#praxis" className="font-bold" onClick={() => setOpen(false)}>Praxis</Link>
                <Link href="/#leistungen" className="font-bold" onClick={() => setOpen(false)}>Leistungen</Link>
                <div className="flex flex-col pl-7 gap-1.5">
                    <Link href="/#leistungen" onClick={() => setOpen(false)}>Lungenfunktion</Link>
                    <Link href="/#leistungen" onClick={() => setOpen(false)}>Laboruntersuchung</Link>
                    <Link href="/#leistungen" onClick={() => setOpen(false)}>Allergien</Link>
                    <Link href="/#leistungen" onClick={() => setOpen(false)}>Schlaflabor</Link>
                    <Link href="/#leistungen" onClick={() => setOpen(false)}>DMP Programm</Link>
                    <Link href="/#leistungen" onClick={() => setOpen(false)}>Röntgen</Link>
                    <Link href="/#leistungen" onClick={() => setOpen(false)}>Weitere Leistungen</Link>
                </div>
                <Link href="/#standorte" className="font-bold" onClick={() => setOpen(false)}>Termin-Buchung</Link>
                <Link href="/#faq" className="font-bold" onClick={() => setOpen(false)}>FAQ</Link>
                <Link href="/#kontakt" className="font-bold" onClick={() => setOpen(false)}>Kontakt</Link>
            </div>
        </div>
    </>
}

export default MobileNavbarButton;