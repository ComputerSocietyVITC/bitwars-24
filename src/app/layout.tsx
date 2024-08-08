import Footer from "../components/footer/Footer";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Bitwars-24",
  description: "An IEEE CompSoc event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="bg-[url('/bg.svg')] bg-cover">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
