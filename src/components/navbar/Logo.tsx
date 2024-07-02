"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {

  return (
    <>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={64}
          className="relative"
        />
      </Link>
    </>
  );
};

export default Logo;
