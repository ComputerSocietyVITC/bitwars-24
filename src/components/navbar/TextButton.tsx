import React from 'react';
import Link from 'next/link';

interface TextButtonProps {
  href: string;
  children: React.ReactNode;
}

const TextButton: React.FC<TextButtonProps> = ({ href, children }) => {
  return (
    <li>
      <Link
        href={href}
        className="group text-white transition-all duration-300 ease-in-out"
      >
        <span className="bg-left-bottom bg-gradient-to-r from-sky-600 to-sky-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          {children}
        </span>
      </Link>
    </li>
  );
};

export default TextButton;
