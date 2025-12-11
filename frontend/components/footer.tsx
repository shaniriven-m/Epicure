import Link from "next/link";

type FooterProps = {
    className?: string;
    responsiveClassName?: string;
};

export default function Footer({ className = "", responsiveClassName = "" }: FooterProps) {
    return (
        <footer className={`relative w-full border-t-1 border-primary-200 ${className}`}>
            <div className="mx-auto flex items-center px-4">
                <nav className={`flex flex-col gap-6 px-3 py-8 text-footer items-start ${responsiveClassName}`}>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/terms">Terms Of Use</Link>
                    <Link href="/terms">Privacy Policy</Link>
                </nav>
            </div>
        </footer >
    );
}