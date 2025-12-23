'use client';

import Link from "next/link";
import { ACTION_BUTTONS_CONFIG, HeaderActionButtons } from "./header";
import IconButton from "./icon-button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type TopNavProps = {
    setIsMenuOpen: Function;
}

export default function TopNav({ setIsMenuOpen }: TopNavProps) {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/")
    }

    const navLinkClassName = (href: string) =>
        clsx(
            "relative text-nav-links pb-[6px] ",
            isActive(href) && "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-rating"
        )
    return (
        <>
            <div className="flex flex-1 items-center">
                <IconButton icon={HeaderActionButtons.BURGER} className="md:hidden" onClick={() => setIsMenuOpen((open: boolean) => !open)} />

                <div className="hidden md:flex items-center gap-[32px]">
                    <IconButton icon={HeaderActionButtons.LOGO} href={ACTION_BUTTONS_CONFIG[HeaderActionButtons.LOGO].href} iconClassName="w-[32px] h-[32px]">
                        <span className="text-icon-button-logo">EPICURE</span>
                    </IconButton>

                    <Link href="/restaurants" className={navLinkClassName("/restaurants")}>
                        Restaurants
                    </Link>

                    <Link href="/chefs" className={navLinkClassName("/chefs")}>
                        Chefs
                    </Link>
                </div>

            </div>

            <div className="md:hidden flex flex-1 items-center justify-center">
                <IconButton icon={HeaderActionButtons.LOGO} href={ACTION_BUTTONS_CONFIG[HeaderActionButtons.LOGO].href} iconClassName="w-[32px] h-[32px]" />
            </div>
        </>
    )
}