"use client";
import React, { useState } from "react";
import { navLinks, Route } from "../data/navLinks";
import Image from "next/image";
import { motion } from "framer-motion";
import NavButton from "../buttons/NavButton";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${montserrat.className} px-6 py-4 lg:px-8 lg:py-6 flex justify-between items-center lg:relative z-50 fixed top-0 left-0 w-full`}
    >
      {isOpen && (
        <section
          onClick={handleClick}
          className="fixed top-0 left-0 flex flex-col items-center justify-center h-screen w-screen z-50 backdrop-blur-2xl"
        >
          <motion.section
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0,
              ease: "easeInOut",
            }}
            exit={{ opacity: 0 }}
            className="backdrop-blur-2xl shadow-slate-300 border border-white/[0.4] shadow-2xl flex flex-col items-center justify-center rounded-2xl py-4 px-8"
          >
            {navLinks.map((route: Route, index: number) => (
              <a key={index} href={route.href}>
                <section
                  onClick={handleClick}
                  className={`px-16 py-6 text-white hover:bg-black hover:bg-opacity-5 rounded-xl`}
                  id={route.title}
                >
                  {route.title}
                </section>
              </a>
            ))}
          </motion.section>
        </section>
      )}

      <a href="/">
        <Image src="/logo.png" alt="IEEE Logo" width={48} height={48} />
      </a>

      <nav className="lg:hidden">
        <button
          onClick={handleClick}
          className="flex flex-col justify-center items-center py-1"
        >
          <span
            className={`bg-slate-400 block transition-all duration-300 ease-out
                            h-0.5 w-6 rounded-sm ${
                              isOpen
                                ? "rotate-45 translate-y-1"
                                : "-translate-y-0.5"
                            }`}
          ></span>
          <span
            className={`bg-slate-400 block transition-all duration-300 ease-out
                            h-0.5 w-6 rounded-sm my-0.5 ${
                              isOpen ? "opacity-0" : "opacity-100"
                            }`}
          ></span>
          <span
            className={`bg-slate-400 block transition-all duration-300 ease-out
                            h-0.5 w-6 rounded-sm ${
                              isOpen
                                ? "-rotate-45 -translate-y-1"
                                : "translate-y-0.5"
                            }`}
          ></span>
        </button>
      </nav>

      <nav className="hidden lg:block">
        {navLinks.map((route: Route, index: number) => (
          <NavButton key={index} href={route.href}>
            {route.title}
          </NavButton>
        ))}
      </nav>

      <div className="hidden lg:block"></div>
    </div>
  );
};

export default Navbar;
