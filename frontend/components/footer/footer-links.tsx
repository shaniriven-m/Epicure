'use client'

import Link from "next/link"
import clsx from "clsx";

type FooterLinksProps = {
    className?: string;
}


export default function FooterLinks({ className }: FooterLinksProps) {
    return (
        <div className={clsx("mx-auto flex items-center px-page-inline bg-white border border-primary-200", className)}>
            <nav className="flex flex-col gap-[40px] py-8 text-nav-links items-start md:flex-row md:justify-center md:w-full">
                <Link href="/contact">Contact Us</Link>
                <Link href="/terms">Terms Of Use</Link>
                <Link href="/terms">Privacy Policy</Link>
            </nav>
        </div>
    )

}

