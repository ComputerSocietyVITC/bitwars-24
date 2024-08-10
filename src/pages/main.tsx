import React from "react";
import Image from "next/image";
import Timer from "@/components/timer/Timer";

const Main: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <section className="w-full flex -mb-6 justify-around">
        <Image
          src="/vit.svg"
          alt=""
          width={150}
          height={100}
          className="object-contain w-[17vh] sm:w-28"
        />
        <Image
          src="/compsoc.png"
          width={150}
          height={100}
          alt=""
          className=" object-contain w-[17vh] sm:w-28 sm:pl-5 ml-8"
        />
        <Image
          src="/swc.png"
          width={150}
          height={100}
          alt=""
          className="object-contain w-[20vh] sm:w-28"
        />
      </section>
      <div className="w-4/5 flex flex-col scale-[95%] self-center mt-12" id="home">
        <Image
          src="/bitwarsLogo.png"
          alt="logo"
          height={500}
          width={500}
          className="z-30 justify-center align-center mx-auto relative top-10 w-[45vh] md:scale-[80%] md:top-24"
        />
        <Timer />
      </div>
    </section>
  );
};

export default Main;
