"use client";
import TextButton from "../buttons/TextButton";
import SocialMediaGrid from "./SocialsGrid";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="text-white p-8">
        {/* Scroll to top button and line */}
        <div className="flex justify-center items-center mb-4">
          <hr className="absolute w-full h-1 border-transparent bg-gradient-to-r from-transparent via-[#114554]" />
          <Link
            href="#top"
            className="relative z-10 flex items-center justify-center bg-[#0B1E3E] rounded-full w-10 h-10 hover:bg-blue-500 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faArrowUpLong} size="lg" />
          </Link>
        </div>

        {/* Footer content */}
        <div className="flex md:flex-row flex-col justify-center gap-40">
          {/* IEEE logo */}
          <div className="flex items-center justify-center basis-1/3">
            <Image src="/logo2.png" alt="logo2" width={280} height={80} />
          </div>

          {/* Menu */}
          <div className="space-y-4 justify-center items-center basis-1/6">
            <h3 className="text-xl font-semibold items-center">Menu</h3>
            <ul className="space-y-2 text-left">
              <TextButton href="#about">About</TextButton>
              <TextButton href="#team">Our Team</TextButton>
              <TextButton href="#events">Events</TextButton>
              <TextButton href="#sponsors">Sponsors</TextButton>
              <TextButton href="#faq">FAQs</TextButton>
            </ul>
          </div>

          {/* VITC address */}
          <div className="space-y-4 text-center justify-center basis-1/5">
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-left">
              Kelambakkam - Vandallur
              <br />
              Rd, Rajan Nagar, Chennai,
              <br />
              Tamil Nadu 600127
              <br />
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4 text-center justify-center basis-1/4">
            <h3 className="text-xl font-semibold">Social Media</h3>
            <SocialMediaGrid />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
