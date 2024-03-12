import * as RadixAccordion from "@radix-ui/react-accordion";

export const Accordion = () => {
  return (
    <RadixAccordion.Root type="single">
      <RadixAccordion.Item value="item-1">
        <RadixAccordion.AccordionHeader>
          Item 1
          <RadixAccordion.AccordionTrigger>
            Show more
          </RadixAccordion.AccordionTrigger>
        </RadixAccordion.AccordionHeader>
        <RadixAccordion.AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, sint!
        </RadixAccordion.AccordionContent>
      </RadixAccordion.Item>
      <RadixAccordion.Item value="item-2">
      <RadixAccordion.AccordionHeader>
          Item 2
          <RadixAccordion.AccordionTrigger>
            Show more
          </RadixAccordion.AccordionTrigger>
        </RadixAccordion.AccordionHeader>
        <RadixAccordion.AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, sint!
        </RadixAccordion.AccordionContent>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
};