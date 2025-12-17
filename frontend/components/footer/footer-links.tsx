'use client'

import Link from "next/link"
import clsx from "clsx";


export default function FooterLinks() {
    return (
        <div className="mx-auto flex items-center px-5 bg-white">
            <nav className="flex flex-col gap-[40px] px-2 py-8 text-footer-links items-start md:flex-row md:justify-center md:w-full">
                <Link href="/contact">Contact Us</Link>
                <Link href="/terms">Terms Of Use</Link>
                <Link href="/terms">Privacy Policy</Link>
            </nav>
        </div>
    )

}

