import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-white">Lorem ipsum</AccordionTrigger>
        <AccordionContent className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-white">Lorem ipsum</AccordionTrigger>
        <AccordionContent className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-white">Lorem ipsum</AccordionTrigger>
        <AccordionContent className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQAccordion;
