import FAQAccordion from "@/components/accordion/FAQAccordion";
import { Montserrat } from "next/font/google";
import Main from "@/pages/main";
import Showcase from "@/pages/showcase";
import Aboutus from "@/pages/aboutus";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={montserrat.className}>
      <Main />
      <div className="w-4/5 mt-6 md:w-full sm:w-full mx-auto px-4 text-white">
        <Aboutus />
        <Showcase />

        {/* Sponsors Section */}
        <section>
          <section
            id="sponsors"
            className="items-center flex flex-col justify-center pt-48"
          >
            <div className="w-4/5" id="sponsors">
              <p className="text-center font-extrabold text-5xl">
                Our Sponsors
              </p>
              {/* <div className="grid grid-cols-2 gap-4 mt-16 text-center border-[#104456] border-2 py-12">
                {sponsorsList.map((sponsor, index) => (
                  <Sponsor
                    key={sponsor.name}
                    name={sponsor.name}
                    image={sponsor.image}
                  />
                ))}
              </div> */}
              <div className="flex justify-center items-center my-24">
                <div className="flex items-center text-center sm:flex-col">
                  <div className="z-50 text-xl pr-12 sm:pb-8 w-full sm:pr-0 text-left">
                    Powered by
                  </div>
                  <Link className="w-full z-50 h-28" href="https://unstop.com/about">
                    <Image
                      alt="unstop logo"
                      height={150}
                      width={150}
                      src="/unstop-logo.svg"
                      className="w-auto h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <a
              href="/BitwarsBrochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                borderRadius="9999px"
                className="border border-white/[0.2] flex flex-col items-center justify-end py-8 px-12 cursor-default transition duration-300"
              >
                <section className="text-3xl font-light pt-4 text-center">
                  INTERESTED IN SPONSORING US?
                </section>
                <section className="text-2xl mt-4 font-bold sm:text-xl rounded-full px-6 p-2 bg-slate-950 hover:bg-blue-950/[0.2] shadow-md hover:shadow-cyan-900 cursor-pointer border border-cyan-200/[0.1]">
                  CLICK HERE
                </section>
              </Button>
            </a>
          </section>
        </section>

        {/* FAQ Section */}
        <div className="w-full py-24 min-h-screen" id="faq">
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
