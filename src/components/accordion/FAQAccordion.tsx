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
        className="md:w-4/5 accord flex-none flex-row"
      >
        <div className="h-[100%] w-0.5 accord-vlines"></div>
        <div className="px-4">
          <AccordionItem value="item-1">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white ">
              What is Bitwars 2.0?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Bitwars 2.0 is a premier offline competitive coding event where
              participants demonstrate their expertise through a series of
              rigorous coding challenges. These challenges are meticulously
              designed to assess and enhance the participants' skills and
              capabilities in the field of computing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              Will the event be conducted in an online format or held on-site?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Bitwars 2.0 is conducted on-site at VIT Chennai campus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              What are the key features and highlights of the event?
            </AccordionTrigger>

            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Bitwars 2.0 specifically features workshops, keynote addresses,
              and a coding contest.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white ">
              Will the registration fees differ based on team composition?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Yes, the registration fee may vary depending on the composition of
              the team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white ">
              Where will Bitwars 2.0 be hosted?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              VIT Chennai, Mahatma Gandhi Auditorium
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white ">
              Is there a registration fee for participation in Bitwars 2.0?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              The registration fee for the event is ₹350.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white ">
              Are there any notable prizes or incentives offered for Bitwars 2.0
              participants?
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Definitely yes,Exciting cash prize of 5K accompanied by a
              selection of attractive goodies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white ">
              What are the featured individuals or notable participants at
              Bitwars 2.0?
            </AccordionTrigger>
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Featuring an "Algorithm Showdown" presented by Mr. Manas Tiwari,
              Software Engineer at Microsoft.
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
