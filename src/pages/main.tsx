import React from "react";
import Image from "next/image";
import Timer from "@/components/timer/Timer";

const Main: React.FC = () => {
  return (
    <section className="h-screen grid">
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
          className=" object-contain h-[7vh] w-full ml-6 sm:pl-5"
        />
        <Image
          src="/swc.svg"
          width={150}
          height={100}
          alt=""
          className="object-contain h-[5vh] w-full sm:w-28"
        />
      </section>
      <div className="grid-cols-1 place-self-center w-full">
        <div className="flex items-center ">
          <div className=" self-center mx-auto  w-4/5 flex flex-col" id="home">
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
      <section className=" w-full grid grid-cols-3 place-items-center invisible">
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
          className=" object-contain h-[7vh] w-full ml-6 sm:pl-5"
        />
        <Image
          src="/swc.svg"
          width={150}
          height={100}
          alt=""
          className="object-contain h-[5vh] w-full sm:w-28"
        />
      </section>
    </section>
  );
};

export default Main;
