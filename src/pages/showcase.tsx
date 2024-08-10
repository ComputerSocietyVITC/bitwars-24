import React from "react";
import Image from "next/image";

const Showcase = () => {
  return (
    <>
      <div className="w-full" id="events">
        <div className="w-full flex flex-col">
          <p className="mt-24 font-extrabold text-5xl text-center">
            Event Showcase
          </p>
          <div className="flex gap-[5vw] items-center mt-8">
            <Image
              alt=""
              height={500}
              width={600}
              src="/bitwars.jpg"
              className="w-[35vw] rounded-xl object-contain sm:hidden"
            />
            <div className="shadow-md shadow-[#292761] flex flex-col items-center w-full rounded-2xl text-center bg-gradient-to-br from-[#100e1773] via-[#10345676] to-[#100e177e] border border-white/[0.2] lg:px-12 px-8 py-12">
              <Image
                alt=""
                height={500}
                width={600}
                src="/bitwars.jpg"
                className="w-full px-8 sm:px-0 rounded-3xl object-contain hidden sm:block pt-8"
              />
              <p className="text-white text-justify md:text-sm my-8 ">
                BITWARS 2.0, VIT Chennai&apos;s second edition of the biggest
                offline Competitive Programming Event, is set to revolutionize
                Competitive Programming Culture. Hosted by IEEE CS, it features
                workshops, speeches, and Coding Contest. Network with brilliant
                minds and try to get them for PPI&apos;s opportunities.
                Competitions will challenge participants to solve algorithmic
                problems. Join us for a transformative experience.
              </p>
              <section className="text-white text-start border border-slate-500 rounded-2xl p-4 md:text-sm">
                <section className="font-semibold md:text-lg">Overview</section>
                <section className="italic">
                  - Competitive coding event where participants competed for the
                  top title Challenged participants&apos; coding skills and
                  strategic thinking <br />
                  - Featured an &quot;Algorithm Showdown&quot; by Mr. Manas
                  Tiwari, SWE @Microsoft <br />- Competitive coding battleground
                  with over 419 participants
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="w-full mb-11" id="events">
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
    </div>*/}
    </>
  );
};

export default Showcase;
