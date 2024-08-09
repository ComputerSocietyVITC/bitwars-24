import React from "react";
import Image from "next/image";
import Timer from "@/components/timer/Timer";

const Main: React.FC = () => {
  return (
    <>
      <section className="flex justify-around">
        <Image src="/vit.svg" alt="" width={150} height={150} className="object-contain sm:w-24" />
        <Image src="/compsoc.png" width={150} height={150} alt="" className=" object-contain sm:w-24 sm:pl-5"/>
        <Image src="/swc.png"width={150} height={150}  alt="" className="object-contain sm:w-24"/>
      </section>
      <div className="min-h-screen flex flex-col scale-[110%] mt-12">
        <Image
          src="/bitwarsLogo.png"
          alt="logo"
          height={500}
          width={500}
          className="z-30 justify-center align-center mx-auto relative top-10"
        />
        {/* Timer Section */}
        <Timer />
      </div>
    </>
  );
};

export default Main;
