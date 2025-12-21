

import type { ReactNode } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main >{children}</main>
      <Footer />
    </>
  );
}
