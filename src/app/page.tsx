import Image from "next/image";
import FAQAccordion from "@/components/accordion/FAQAccordion";
import Sponsor from "@/components/ui/sponsor";
import { sponsorsList } from "@/lib/sponsorsList";
import { Montserrat } from "next/font/google";
import Main from "@/pages/main";
import Showcase from "@/pages/showcase";
import Aboutus from "@/pages/aboutus";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={montserrat.className}>
      <div className="w-4/5 mx-auto px-4 text-white">
        <Main />
        <Aboutus />
        {/* Events Section */}
        <Showcase />

        {/* Sponsors Section */}
        <div className="w-full" id="sponsors">
          <p className="text-center font-extrabold text-5xl">Our Sponsors</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-24 text-center border-[#104456] border-2 m-8">
            {sponsorsList.map((sponsor, index) => (
              <Sponsor
                key={sponsor.name}
                name={sponsor.name}
                image={sponsor.image}
              />
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
