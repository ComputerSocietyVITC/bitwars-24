import Image from "next/image";
import { Poppins } from "next/font/google";
import Timer from "@/components/timer/Timer";
import FAQAccordion from "@/components/accordion/FAQAccordion";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="container mx-auto px-4 text-white">
        <Image
          src="/bitwarsLogo.png"
          alt="logo"
          height={500}
          width={500}
          className="z-30 items-center justify-center align-center mx-auto mt-24 relative"
        />
        <img
          src="/two.png"
          alt="2.0"
          className="absolute top-[63%] left-[52%] w-[71px] translate-x-1/2 translate-y-1/2 z-50"
        />
        {/* Timer Section */}
        <Timer />
        <div className="w-full" id="about">
          <div className="w-full flex flex-col mb-24 lg:ml-12">
            <p className="mt-24  font-extrabold text-5xl">ABOUT US</p>
            <div className="w-full sm:w-2/3 lg:w-2/4 lg:h-80 ml-6 sm:ml-24 md:ml-36 lg:ml-48 mt-14 rounded-2xl about-content text-center">
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
        <div className="w-full max-h-screen" id="events">
          <p className="text-center font-extrabold text-5xl">
            Our Event Showcase
          </p>

          <div className="flex flex-row w-full">
            <section className="h-min flex items-left pt-12 pl-12 pr-24 pb-48 my-12 mr-24">
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
            <section className="flex w-2/4 h-80 mt-12 rounded-2xl bg-[radial-gradient(_farthest-corner_at_60px_60px,_#100e17_0%,_#104456_100%)] text-center"></section>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="w-full max-h-screen" id="sponsors">
          <p className="text-center font-extrabold text-5xl">Our Sponsors</p>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-24 text-center border-[#104456] border-2">
            <div>
              <p>Sponsor 1</p>
            </div>
            <div>
              <p>Sponsor 2</p>
            </div>
            <div>
              <p>Sponsor 3</p>
            </div>
            <div>
              <p>Sponsor 4</p>
            </div>
            <div>
              <p>Sponsor 5</p>
            </div>
            <div>
              <p>Sponsor 6</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-h-screen py-24" id="faq">
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
