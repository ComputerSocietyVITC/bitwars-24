import React from "react";
import Image from "next/image";
import Timer from "@/components/timer/Timer";
import Link from "next/link";

const Main: React.FC = () => {
  return (
    <section className="min-h-screen grid grid-cols-1">
      <section className="w-full grid grid-cols-3 place-items-center">
        <Image
          src="/vit.svg"
          alt=""
          width={500}
          height={500}
          className="object-contain h-[7vh] w-full sm:w-28"
        />
        <Image
          src="/compsoc.png"
          width={150}
          height={100}
          alt=""
          className=" object-contain h-[6vh] -mr-2 w-full"
        />
        <Image
          src="/swc.svg"
          width={150}
          height={100}
          alt=""
          className="object-contain h-[5vh] w-full sm:w-28"
        />
      </section>
      <div className="col-span-3  w-full">
        <div className="flex items-center ">
          <div className=" mx-auto  w-4/5 flex flex-col" id="home">
            <Image
              src="/bitwarsLogo.png"
              alt="logo"
              height={500}
              width={500}
              className="z-30 justify-center align-center mx-auto relative top-10 w-[45vh] md:scale-[80%] md:top-24"
            />
            <Timer />
          </div>
        </div>
      </div>
      <section className="sm:mb-[7vh] w-full grid grid-rows-1 place-items-center text-blue-100 text-3xl">
        <section className="flex sm:flex-col gap-10 sm:gap-2 px-16 sm:px-6 sm:text-xl text-center font-medium items-center p-6 sm:p-4 rounded-xl border-slate-700/[0.6] bg-gradient-to-b to-[#100e17] from-[#071531]">
          <section className="sm:justify-center sm:flex sm:w-full items-center sm:text-[4vw]">
            <section className="py-2">6th September, 2024 </section>
            <section className="hidden sm:block"> &nbsp; - &nbsp; </section>
            <section>VIT Chennai</section>
          </section>
          <Link href="https://unstop.com/p/bitwars-20-vit-chennai-1100706">
            <section className="rounded-full bg-blue-100 font-normal sm:text-lg px-8 py-2 text-2xl text-blue-950 hover:scale-[95%] scale-[90%] transition duration-300">
              Register Here →
            </section>
          </Link>
        </section>
      </section>
    </section>
  );
};

export default Main;
