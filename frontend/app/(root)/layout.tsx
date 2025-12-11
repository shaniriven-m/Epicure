"use client";

import type { ReactNode } from "react";
import Header from "@/components/header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto w-full">{children}</main>
    </section>
  );
}
