"use client";
import TextButton from "../buttons/TextButton";
import SocialMediaGrid from "./SocialsGrid";
import React from "react";
import Image from "next/image";
import { FaArrowUpLong } from "react-icons/fa6";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <footer className="text-white p-8">
        {/* Scroll to top button and line */}
        <div className="flex justify-center items-center mb-4">
          <hr
            className="absolute w-full border-t border-gray-700"
            style={{
              backgroundImage:
                "linear-gradient(to right, #0F1D29, #114554 50%, #0F1D29)",
            }}
          />
          <button
            onClick={scrollToTop}
            className="relative z-10 flex items-center bg-[#0B1E3E] rounded-full w-10 h-10 hover:bg-blue-500 transition-all duration-300"
          >
            <FaArrowUpLong size={28} className="pl-3" />
          </button>
        </div>

        {/* Footer content */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* IEEE logo */}
          <div className="flex items-center">
            <Image src="/logo2.png" alt="logo2" width={280} height={80} />
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold items-center">Menu</h3>
            <ul className="space-y-2">
              <TextButton href="#about">About</TextButton>
              <TextButton href="#team">Our Team</TextButton>
              <TextButton href="#events">Events</TextButton>
              <TextButton href="#sponsors">Sponsors</TextButton>
              <TextButton href="#faq">FAQs</TextButton>
            </ul>
          </div>

          {/* VITC address */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Address</h3>
            <p>
              Kelambakkam - Vandallur
              <br />
              Rd, Rajan Nagar, Chennai,
              <br />
              Tamil Nadu 600127
              <br />
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <SocialMediaGrid />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
