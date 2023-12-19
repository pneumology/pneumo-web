import Logo from "@/components/logo"
import MobileNavbarButton from "@/components/mobileNavbarButton"
import Link from "next/link"

const Navbar = () => {
    return <div className="border-b border-lightGrey fixed w-full z-40">
        <div className="flex w-full bg-white justify-center items-center h-20 px-5">
            <div className="flex w-full max-w-7xl justify-between items-center">
                <Link href="/">
                    <Logo />
                </Link>

                <div className="lg:flex gap-4 font-bold hidden">
                    <Link className="hover:underline" href="/#standorte">Standorte & Öffnungszeiten</Link>
                    <Link className="hover:underline" href="/#leistungen">Leistungen</Link>
                    <Link className="hover:underline" href="/#standorte">Termin-Buchung</Link>
                    <Link className="hover:underline" href="/#faq">FAQ</Link>
                    <Link className="hover:underline" href="/#kontakt">Kontakt</Link>
                </div>

                <div className="lg:hidden">
                    <MobileNavbarButton />
                </div>
            </div>
        </div>
    </div>
}

export default Navbar