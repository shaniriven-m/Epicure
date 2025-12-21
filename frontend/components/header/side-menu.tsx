import Link from "next/link";
import { HeaderActionButtons } from "./header";
import IconButton from "./icon-button";
import FooterLinks from "@/components/footer/footer-links";

type SideMenuProps = {
    setIsMenuOpen: Function;
}

export default function SideMenu({ setIsMenuOpen }: SideMenuProps) {
    return (
        <div className="absolute left-0 top-0 z-20 w-full bg-white shadow-header">

            <div className="flex h-[46px] items-center justify-between px-page-inline">
                <IconButton icon={HeaderActionButtons.CLOSE} iconClassName="w-[20px] h-[20px]" onClick={() => setIsMenuOpen(false)} />
            </div>

            <nav className="flex flex-col text-nav-links pt-[40px] pb-[24px] gap-[24px] px-page-inline">
                <Link href="/restaurants" onClick={() => setIsMenuOpen(false)}>
                    Restaurants
                </Link>
                <Link href="/chefs" onClick={() => setIsMenuOpen(false)}>
                    Chefs
                </Link>
            </nav>

            <FooterLinks className="border border-primary-200" />
        </div>
    )
}
