import Link from "next/link";
import { ACTION_BUTTONS_CONFIG, HeaderActionButtons } from "./header";
import IconButton from "./icon-button";

type TopNavProps = {
    setIsMenuOpen: Function;
}

export default function TopNav({ setIsMenuOpen }: TopNavProps) {
    return (
        <>
            <div className="flex flex-1 items-center">
                <IconButton icon={HeaderActionButtons.BURGER} className="md:hidden" onClick={() => setIsMenuOpen((open: boolean) => !open)} />

                <div className="hidden md:flex items-center gap-[32px]">
                    <IconButton icon={HeaderActionButtons.LOGO} href={ACTION_BUTTONS_CONFIG[HeaderActionButtons.LOGO].href} iconClassName="w-[32px] h-[32px]">
                        <span className="text-icon-button-logo">EPICURE</span>
                    </IconButton>

                    <Link href="/restaurants" className="text-nav-links">Restaurants</Link>
                    <Link href="/chefs" className="text-nav-links">Chefs</Link>
                </div>

            </div>

            <div className="md:hidden flex flex-1 items-center justify-center">
                <IconButton icon={HeaderActionButtons.LOGO} href={ACTION_BUTTONS_CONFIG[HeaderActionButtons.LOGO].href} iconClassName="w-[32px] h-[32px]" />
            </div>
        </>
    )
}