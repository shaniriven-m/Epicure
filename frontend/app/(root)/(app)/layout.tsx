import type { ReactNode } from "react";
import FooterLinks from "@/components/footer/footer-links";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main>{children}</main>
            <FooterLinks />
        </>
    );
}
