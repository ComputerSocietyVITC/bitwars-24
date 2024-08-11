"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        direction < 0 ? setVisible(true) : setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "grid grid-flow-col max-w-fit fixed top-10 inset-x-0 mx-auto border-b border-x border-slate-700 dark:border-white/[0.2] rounded-full bg-gradient-to-b from-[#100e17] to-[#031c37] shadow-md z-[5000] px-6 py-4 items-center justify-center space-x-4",
          className,
          montserrat.className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${navItem.name}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex text-slate-200 hover:text-white"
            )}
          >
            <span className="block sm:text-sm text-md lg:text-lg px-8 border bg-slate-900 py-2 border-white/[0.1] hover:border-cyan-700 rounded-full font-medium sm:hidden">
              {navItem.name}
            </span>
            <div
              key={`${navItem.name}`}
              className="hidden sm:inline-block text-sm"
            >
              {navItem.name}
            </div>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
