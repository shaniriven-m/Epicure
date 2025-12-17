"use client";

import Link from "next/link";
import { useState } from "react";
import { IconButton } from "@/components/ui/icon-button";
import Image from "next/image";
import FooterLinks from "@/components/footer/footer-links"


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative w-full ">
            <div className="mx-auto flex items-center px-4 h-[46px] md:h-[64px]">

                {/* Left Section */}
                <div className="flex flex-1 items-center">

                    {/* Mobile Burger  */}
                    <IconButton
                        className="h-4 w-4 md:hidden"
                        ariaLabel="Open menu"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        icon={{ src: "/icons/burger.svg" }}
                    />

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-6">

                        {/* Logo + EPICURE text */}
                        <Link href="/" className="flex items-center text-header text-[22px]  gap-3">
                            <Image
                                src="/icons/logo.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="h-6 w-6"
                                aria-hidden
                            />
                            EPICURE
                        </Link>

                        <Link href="/restaurants" className="text-header">
                            Restaurants
                        </Link>

                        <Link href="/chefs" className="text-header">
                            Chefs
                        </Link>
                    </div>
                </div>

                {/* Center: Logo link */}
                <div className="md:hidden flex flex-1 items-center justify-center">
                    <IconButton
                        href="/"
                        ariaLabel="Home"
                        icon={{ src: "/icons/logo.svg" }}
                    />
                </div>

                {/* Right: icons */}
                <div className="flex flex-1 items-center justify-end gap-6">
                    <IconButton ariaLabel="Search" icon={{ src: "/icons/search.svg" }} />
                    <IconButton ariaLabel="User account" icon={{ src: "/icons/user.svg" }} />
                    <IconButton ariaLabel="Shopping bag" icon={{ src: "/icons/bag.svg" }} />
                </div>
            </div>

            {/* Overlay menu in mobiles above the nav */}
            {isMenuOpen && (
                <div className="absolute left-0 top-0 z-20 w-full bg-white shadow-md border-b border-secondary-100">
                    <div className="flex h-[46px] items-center justify-between px-4">
                        <IconButton
                            ariaLabel="Close menu"
                            onClick={() => setIsMenuOpen(false)}
                            icon={{ src: "/icons/close.svg" }}
                        />
                    </div>
                    <nav className="flex flex-col gap-6 px-7 py-8 text-header">
                        <Link
                            href="/restaurants"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Restaurants
                        </Link>
                        <Link
                            href="/chefs"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Chefs
                        </Link>
                    </nav>
                    <FooterLinks />
                </div>
            )}
        </header>
    );
}

