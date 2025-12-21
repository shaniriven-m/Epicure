'use client'


import { useState } from "react";
import SideMenu from "./side-menu";
import IconButtonGroup from "./icon-button-group";
import TopNav from "./top-nav";

export enum HeaderActionButtons {
    BURGER = "burger",
    LOGO = "logo",
    SEARCH = "search",
    USER = "user",
    BAG = "bag",
    CLOSE = "close",
}

export const ACTION_BUTTONS_CONFIG = {
    [HeaderActionButtons.BURGER]: {
        src: "/icons/burger.svg",
        ariaLabel: "burger",
    },
    [HeaderActionButtons.LOGO]: {
        src: "/icons/logo.svg",
        ariaLabel: "logo",
        href: "/",
    },
    [HeaderActionButtons.SEARCH]: {
        src: "/icons/search.svg",
        ariaLabel: "search",
    },
    [HeaderActionButtons.USER]: {
        src: "/icons/user.svg",
        ariaLabel: "user",
    },
    [HeaderActionButtons.BAG]: {
        src: "/icons/bag.svg",
        ariaLabel: "bag",
    },
    [HeaderActionButtons.CLOSE]: {
        src: "/icons/close.svg",
        ariaLabel: "close",
    },

}


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative w-full ">
            <div className="flex items-center px-page-inline h-[46px] md:h-[64px] md:px-page-inline-md">
                <TopNav setIsMenuOpen={setIsMenuOpen} />
                <IconButtonGroup icons={[HeaderActionButtons.SEARCH, HeaderActionButtons.USER, HeaderActionButtons.BAG]} />
            </div>
            {isMenuOpen && (<SideMenu setIsMenuOpen={setIsMenuOpen} />)}
        </header>
    );
}

