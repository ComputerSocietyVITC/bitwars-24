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
        <h1>Bitwars-24</h1>
        <Image
          src="/bitwarsLogo.png"
          alt="logo"
          height={500}
          width={500}
          className="z-30 items-center justify-center align-center mx-auto mt-24"
        />
        <Timer />
        <div className="w-full max-h-screen mb-24" id="about">
          <div className="w-full">
            <p className="mt-24 ml-36 font-extrabold text-5xl">ABOUT US</p>
            <div className="w-2/4 h-80 ml-48 mt-6 rounded-2xl bg-[radial-gradient(_farthest-corner_at_10px_10px,_#104456_0%,_#100e17_100%_)] text-center">
              <p className="text-white">Lorem ipsum dolor set</p>
            </div>
          </div>
        </div>
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

        <div className="w-full max-h-screen" id="faq">
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
