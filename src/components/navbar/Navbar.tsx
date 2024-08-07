import React from "react";
import TextButton from "../buttons/TextButton";
import IconButton from "../buttons/IconButton";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={montserrat.className}>
      <div className="w-full h-20 top-0 absolute">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-20">
            <IconButton
              href="/"
              src="/logo.png"
              alt="Logo"
              width={60}
              height={64}
            />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-16 text-white ">
              <TextButton href="#about">About Us</TextButton>
              <TextButton href="#team">Our Team</TextButton>
              <TextButton href="#events">Events</TextButton>
              <TextButton href="#sponsors">Sponsors</TextButton>
              <TextButton href="#faq">FAQs</TextButton>
            </ul>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
