"use client";
import TextButton from "../buttons/TextButton";
import SocialMediaGrid from "./SocialsGrid";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={montserrat.className}>
      <footer className="text-white p-8 w-full pb-12">
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
        <div className="flex flex-col md:flex-row lg:flex-row justify-center">
          {/* IEEE logo */}
          <div className="flex items-center justify-center basis-1/5">
            <Image src="/compsoc.webp" alt="logo2" width={280} height={80} />
          </div>

          {/* Menu */}
          <div className="space-y-4 mt-10 flex flex-col justify-center items-center basis-1/5">
            <h3 className="text-xl font-semibold items-center md:text-left">
              <div className="relative">
                Menu
                <hr className="absolute w-full h-0.5 border-transparent bg-gradient-to-r from-transparent via-[#116677]" />
              </div>
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <TextButton href="#about">About</TextButton>
              <TextButton href="https://ieeecsvitc.com/">Team</TextButton>
              <TextButton href="#events">Event</TextButton>
              <TextButton href="#sponsors">Sponsors</TextButton>
              <TextButton href="#faq">FAQs</TextButton>
            </ul>
          </div>

          {/* VITC address */}
          <div className="space-y-4 flex items-center flex-col justify-center basis-1/5 mt-10">
            <h3 className="text-xl font-semibold">
              <div className="relative">
                Address
                <hr className="absolute w-full h-0.5 border-transparent bg-gradient-to-r from-transparent via-[#116677]" />
              </div>
            </h3>
            <p className="text-center">
              Kelambakkam - Vandalur Rd
              <br />
              Rajan Nagar, Chennai
              <br />
              Tamil Nadu 600127
            </p>
            <h3 className="text-xl font-semibold">
              <div className="relative">
                Email
                <hr className="absolute w-full h-0.5 border-transparent bg-gradient-to-r from-transparent via-[#116677]" />
              </div>
            </h3>
            <p className="text-center">
              <a href="mailto:ieeecomputersociety@vit.ac.in">
                ieeecomputersociety@vit.ac.in
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4 flex flex-col text-center md:text-left justify-center items-center mt-10 basis-1/5">
            <h3 className="text-xl font-semibold">
              <div className="relative">
                Social Media
                <hr className="absolute w-full h-0.5 border-transparent bg-gradient-to-r from-transparent via-[#116677]" />
              </div>
            </h3>
            <SocialMediaGrid />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
