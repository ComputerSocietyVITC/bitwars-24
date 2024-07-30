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
        className="lg:w-4/5 accord flex-none flex-row"
      >
        <div className="h-[100%] w-0.5 accord-vlines"></div>
        <div className="px-4">
          <AccordionItem value="item-1">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white ">
              Lorem ipsum
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              Lorem ipsum
            </AccordionTrigger>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              aperiam, sapiente nulla labore voluptas culpa incidunt perferendis
              necessitatibus corrupti debitis ipsum ullam odio hic! Ipsum
              laborum eligendi provident, voluptatum odit at nesciunt eveniet
              repellendus officia! Quae, vitae animi quidem repellat provident
              in nobis quis quisquam, dolores perferendis, totam voluptate
              numquam.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionTrigger className="text-white">
              Lorem ipsum
            </AccordionTrigger>
            <div className="w-[100%] accord-lines h-0.5"></div>
            <AccordionContent className="text-white text-left accord-cont p-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              iure quidem id eveniet nemo? Deserunt repellendus nulla dolorum
              cum, beatae, quisquam vero voluptatibus nesciunt soluta totam
              cumque sint autem quis dolor facere! Autem, provident animi ipsum
              voluptatibus perferendis magni modi enim reiciendis dignissimos
              soluta porro adipisci voluptate corrupti neque aliquid.
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
