"use client";

import type { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="mx-auto w-full flex-1">{children}</main>
      <Footer responsiveClassName="md:flex-row md:justify-center md:w-full " />
    </section>
  );
}
