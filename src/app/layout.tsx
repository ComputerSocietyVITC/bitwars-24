import Footer from "../components/footer/Footer";
import type { Metadata } from "next";
import "./globals.css";
import { FloatingNav } from "@/components/navbar/FloatingNav";

export const metadata: Metadata = {
  title: "Bitwars-24",
  description: "An IEEE CompSoc event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "Event",
      link: "#events",
    },
    {
      name: "Sponsors",
      link: "#sponsors",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];

  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden bg-black">
      <body className="bg-[url('/bg.svg')] bg-cover">
        <FloatingNav navItems={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
