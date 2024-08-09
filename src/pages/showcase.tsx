import React from "react";
import Image from "next/image";

const Showcase: React.FC = () => {
  return (
    <div className="w-full mb-11" id="events">
      <p className="text-center font-extrabold text-5xl">Our Event Showcase</p>
      <section className="flex-col flex justify-between items-center lg:flex-row">
        <section className="flex mx-48">
          <Image
            src="/logo.png"
            alt="image1"
            width={150}
            height={150}
            className="w-[150px] h-[150px] rounded-3xl relative -translate-y-12 z-10"
          />
          <Image
            alt="image2"
            src="/logo.png"
            height={150}
            width={150}
            className="w-[150px] h-[150px] rounded-3xl relative -translate-x-24 translate-y-12 z-10"
          />
          <Image
            alt="image3"
            src="/logo.png"
            height={150}
            width={150}
            className="w-[150px] h-[150px] rounded-3xl z-10 absolute translate-x-28 -translate-y-12"
          />
        </section>
        <div className="bg-gradient-to-br from-[#100e1773] via-[#10345676] to-[#100e177e] border-white/[0.2] border flex flex-col md:mr-10 md:ml-0 md:mt-12 rounded-2xl w-[45vw] md:p-12 p-12 sm:w-full">
         
          <p className="text-white text-start">
            BITWARS 2.0, VIT Chennai&apos;s second edition of the biggest
            offline Competitive Programming Event, is set to revolutionize
            Competitive Programming Culture. Hosted by IEEE CS, it features
            workshops, speeches, and Coding Contest. Network with brilliant
            minds and try to get them for PPI&apos;s opportunities. Competitions
            will challenge participants to solve algorithmic problems. Join us
            for a transformative experience.
          </p>
          <p className="text-white text-start my-2">
            <span className="font-bold">Overview</span> <br />
            1. Competitive coding event where participants competed for the top
            title Challenged participants&apos; coding skills and strategic
            thinking <br />
            2. Featured an &quot;Algorithm Showdown&quot; by Mr. Manas Tiwari,
            SWE @Microsoft <br />
            3. Competitive coding battleground with over 419 participants
          </p>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
