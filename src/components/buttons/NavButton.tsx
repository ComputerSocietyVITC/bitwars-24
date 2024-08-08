import React from "react";
import Link from "next/link";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-block mx-6 font-medium text-white transition-all duration-300 ease-in-out group"
    >
      <span className="bg-left-bottom bg-gradient-to-r from-sky-600 to-sky-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
        {children}
      </span>
    </Link>
  );
};

export default NavButton;
