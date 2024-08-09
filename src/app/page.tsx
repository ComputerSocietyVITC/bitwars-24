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
      <section className="flex justify-around absolute w-full">
        <Image
          src="/vit.svg"
          alt=""
          width={150}
          height={150}
          className="object-contain sm:w-28"
        />
        <Image
          src="/compsoc.png"
          width={150}
          height={150}
          alt=""
          className=" object-contain sm:w-28 sm:pl-5"
        />
        <Image
          src="/swc.png"
          width={150}
          height={150}
          alt=""
          className="object-contain sm:w-28"
        />
      </section>
      <div className="w-4/5 md:w-full sm:w-full mx-auto px-4 text-white">
        <Main />
        <Aboutus />
        <Showcase />

        {/* Sponsors Section */}
        {/*<div className="w-full" id="sponsors">
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
        </div>*/}

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
