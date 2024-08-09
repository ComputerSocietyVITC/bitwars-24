import React from "react";
import Image from "next/image";
import Timer from "@/components/timer/Timer";

const Main: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center scale-[110%] lg:-mt-20">
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

      <div className="w-full" id="about">
        <div className="w-full flex flex-col mb-24">
          <p className="mt-24 font-extrabold text-5xl text-center md:text-start">
            About Us
          </p>
          <div className="w-full sm:w-2/3 lg:w-2/4 lg:ml-48 mt-14 rounded-2xl text-center bg-gradient-to-br from-[#100e1773] via-[#10345676] to-[#100e177e] border border-white/[0.2]">
            <p className="text-white text-start p-8 sm:p-12 md:p-12 lg:p-12">
              VIT Chennai, established in 2010, is a leading private institution
              in Tamil Nadu, India, offering top-tier engineering programs with
              a focus on research, industry collaboration, and practical
              learning for successful technical careers. IEEE CS VITC,
              established in 2019 at VIT Chennai, where innovation thrives and
              technology excels. As a premier branch of IEEE and its Computer
              Society, we are committed to driving breakthroughs in computer
              science and connecting visionary tech enthusiasts globally.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
