import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-[#0c0b12]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
