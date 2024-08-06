import Image from "next/image";
import Timer from "@/components/timer/Timer";
import FAQAccordion from "@/components/accordion/FAQAccordion";
import Sponsor from "@/components/ui/sponsor";
import { sponsorsList } from "@/lib/sponsorsList";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={montserrat.className}>
      <div className="container mx-auto px-4 text-white">
        <Image
          src="/bitwarsLogo.png"
          alt="logo"
          height={500}
          width={500}
          className="z-30 items-center justify-center align-center mx-auto mt-24 relative"
        />
        <Image
          src="/two.png"
          alt="2.0"
          width={100}
          height={100}
          className="absolute top-[52%] left-[53%] w-[71px] translate-x-1/2 translate-y-1/2 z-50"
        />
        {/* Timer Section */}
        <Timer />
        <div className="w-full" id="about">
          <div className="w-full flex flex-col mb-24">
            <p className="mt-24 font-extrabold text-5xl text-center md:text-start">
              About Us
            </p>
            <div className="w-full sm:w-2/3 lg:w-2/4 sm:ml-24 md:ml-36 lg:ml-48 mt-14 rounded-2xl about-content text-center">
              <p className="text-white text-start p-8 sm:p-12 md:p-12 lg:p-12">
                VIT Chennai, established in 2010, is a leading private
                institution in Tamil Nadu, India, offering top-tier engineering
                programs with a focus on research, industry collaboration, and
                practical learning for successful technical careers. IEEE CS
                VITC, established in 2019 at VIT Chennai, where innovation
                thrives and technology excels. As a premier branch of IEEE and
                its Computer Society, we are committed to driving breakthroughs
                in computer science and connecting visionary tech enthusiasts
                globally.
              </p>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="w-full mb-11" id="events">
          <p className="text-center font-extrabold text-5xl">
            Our Event Showcase
          </p>

          <div className="flex flex-col md:flex-row lg:w-full">
            <section className=" flex items-left pt-12 pl-12 pr-24 my-12 mr-24">
              <section className="flex flex-col mx-auto">
                <section className="flex">
                  <Image
                    src="/logo.png"
                    alt="image1"
                    width={150}
                    height={150}
                    className="rounded-3xl"
                  />

                  <Image
                    alt="image2"
                    src="/logo.png"
                    height={150}
                    width={150}
                    className="rounded-3xl -translate-x-8 translate-y-12"
                  />
                </section>
                <Image
                  alt="image3"
                  src="/logo.png"
                  height={150}
                  width={150}
                  className="rounded-3xl z-10 translate-x-12 -translate-y-8"
                />
              </section>
            </section>
            <div className="flex flex-col w-full sm:w-2/3 md:mr-10 sm:ml-24 md:ml-0 lg:w-2/4 h-4/5 sm:mt-12 md:mt-12 rounded-2xl event-content p-8 sm:p-12 md:p-12 lg:p-12 overflow-auto">
              <p className="text-white text-start">
                BITWARS 2.0, VIT Chennai&apos;s second edition of the biggest
                offline Competitive Programming Event, is set to revolutionize
                Competitive Programming Culture. Hosted by IEEE CS, it features
                workshops, speeches, and Coding Contest. Network with brilliant
                minds and try to get them for PPI&apos;s opportunities.
                Competitions will challenge participants to solve algorithmic
                problems. Join us for a transformative experience.
              </p>
              <p className="text-white text-start my-2">
                <span className="font-bold">Overview</span> <br />
                1. Competitive coding event where participants competed for the
                top title Challenged participants&apos; coding skills and
                strategic thinking <br />
                2. Featured an &quot;Algorithm Showdown&quot; by Mr. Manas
                Tiwari, SWE @Microsoft <br />
                3. Competitive coding battleground with over 419 participants
              </p>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="w-full" id="sponsors">
          <p className="text-center font-extrabold text-5xl">Our Sponsors</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-24 text-center border-[#104456] border-2">
            {sponsorsList.map((sponsor, index) => (
              <Sponsor key={index} name={sponsor.name} image={sponsor.image} />
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full py-24" id="faq">
          <p className="text-center font-extrabold text-5xl py-24">
            Frequently Asked Questions
          </p>
          <div className="items-center justify-center">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </main>
  );
}
