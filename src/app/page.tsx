import FAQAccordion from "@/components/accordion/FAQAccordion";
import { Montserrat } from "next/font/google";
import Main from "@/pages/main";
import Showcase from "@/pages/showcase";
import Aboutus from "@/pages/aboutus";
import Image from "next/image";

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
                <div className="flex items-center text-center sm:grid-cols-1">
                  <div className="text-xl pr-12 sm:pb-8 w-full">Powered by</div>
                  <Image
                    alt="unstop logo"
                    height={150}
                    width={150}
                    src="/unstop-logo.svg"
                    className="w-auto h-24"
                  />
                </div>
              </div>
            </div>
            <a
              href="/BitwarsBrochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="sm:scale-[70%] border border-white/[0.2] flex flex-col items-center justify-end py-8 rounded-full px-12 cursor-pointer hover:scale-[105%] sm:hover:scale-[90%] transition duration-300 bg-gradient-to-b from-[#130f1f] to-[#001c4fe5]">
                <section className="text-3xl font-light pt-4 text-center">
                  INTERESTED IN SPONSORING US?
                </section>
                <section className="text-3xl pt-4 font-bold sm:text-xl">
                  CLICK HERE
                </section>
              </div>
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
