import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import "../../app/globals.css";

const FAQAccordion = () => {
  return (
    <center>
      <Accordion
        type="single"
        collapsible
        className="md:w-4/5 accord flex-none flex-row z-50"
      >
        <div className="h-[100%] w-0.5 accord-vlines "></div>
        <div className="px-4">
          <AccordionItem value="item-1">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              What is Bitwars 2.0?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Bitwars 2.0 is a premier offline competitive coding event where
              participants showcase their expertise through a series of
              challenging coding problems. These carefully crafted challenges
              are designed to test and elevate the participants' proficiency in
              the field of computing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              Will the event be conducted in an online format or held on-site?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Bitwars 2.0 will be conducted on-site at the VIT Chennai campus.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              What are the key features and highlights of the event?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Bitwars 2.0 features workshops, keynote addresses, and an intense
              coding contest, all aimed at providing participants with a
              comprehensive experience in competitive programming.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              Will the registration fees differ based on team composition?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Yes, the registration fee varies based on the team composition:
              <ul className="list-disc pl-5 mt-2">
                <li>Trio: ₹300</li>
                <li>Duo: ₹220</li>
                <li>Solo: ₹120</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              Where will Bitwars 2.0 be hosted?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              The event will be held at the MG Auditorium, VIT Chennai.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              Is there a registration fee for participation in Bitwars 2.0?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Yes, the registration fee varies based on the team composition:
              <ul className="list-disc pl-5 mt-2">
                <li>Trio: ₹300</li>
                <li>Duo: ₹220</li>
                <li>Solo: ₹120</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              Are there any notable prizes or incentives offered for Bitwars 2.0
              participants?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Absolutely! There is an exciting prize pool of ₹20,000 along with
              a variety of attractive goodies for the winners.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              What are the featured individuals or notable participants at
              Bitwars 2.0?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              The event will feature a special "Algorithm Showdown" presented by
              Mr. Manas Tiwari, a Software Engineer at Microsoft.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              Are there any trial questions available for practice before the
              event?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Yes, participants can try the "Logic Leap" questions available on
              the Unstop website to prepare for the event.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              When is the event scheduled, and how can I register?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Bitwars 2.0 is scheduled for 6th September 2024. You can register
              for the event through the following link: &nbsp;
              <a
                href="https://unstop.com/p/bi-20-vai-11007"
                className="text-blue-500 underline"
              >
                Unstop Registration Link
              </a>
              .
            </AccordionContent>
          </AccordionItem>
        </div>

        <div></div>
        <div className="h-[100%] w-0.5 accord-velines"></div>
      </Accordion>
    </center>
  );
};

export default FAQAccordion;
