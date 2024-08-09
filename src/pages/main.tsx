import React from "react";
import Image from "next/image";
import Timer from "@/components/timer/Timer";

const Main: React.FC = () => {
  return (
    <>
      
      <div className="min-h-screen flex flex-col scale-[110%] justify-center">
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
