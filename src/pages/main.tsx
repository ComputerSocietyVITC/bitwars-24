import React from "react";
import Image from "next/image";
import Timer from "@/components/timer/Timer";

const Main: React.FC = () => {
  return (
    <section className="h-screen border">
      <section className="w-full flex -mb-[6vh] justify-around">
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
          className="object-contain w-[25vh] sm:w-28"
        />
      </section>
      <div className="h-[60%] flex items-center">
        <div
          className=" self-center mx-auto  w-4/5 flex flex-col scale-[95%] mt-12"
          id="home"
        >
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
    </section>
  );
};

export default Main;
