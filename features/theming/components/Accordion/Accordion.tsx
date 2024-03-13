import { Box, styled } from "@mui/system";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { PropsWithChildren } from "react";

export const Accordion = () => {
  return (
    <RadixAccordion.Root type="single" collapsible>
      <RadixAccordion.Item value="item-1">
        <AccordionTrigger>
          <h3>Item 1</h3>
          <p>Show more</p>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          sint!
        </AccordionContent>
      </RadixAccordion.Item>
      <RadixAccordion.Item value="item-2">
        <AccordionTrigger>
          <h3>Item 2</h3>
          <p>Show more</p>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          sint!
        </AccordionContent>
      </RadixAccordion.Item>
      <RadixAccordion.Item value="item-3">
        <AccordionTrigger>
          <h3>Item 3</h3>
          <p>Show more</p>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          sint!
        </AccordionContent>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
};

const AccordionTrigger = ({
  children,
  ...props
}: PropsWithChildren<RadixAccordion.AccordionTriggerProps>) => (
  <CustomAccordionHeader>
    <CustomAccordionTrigger {...props}>{children}</CustomAccordionTrigger>
  </CustomAccordionHeader>
);

const AccordionContent = ({
  children,
  ...props
}: PropsWithChildren<RadixAccordion.AccordionContentProps>) => (
  <CustomAccordionContent {...props}>
    <Box sx={{ padding: "20px" }}>{children}</Box>
  </CustomAccordionContent>
);

const CustomAccordionHeader = styled(RadixAccordion.AccordionHeader)(() => ({
  marginBlock: 0,
}));

const CustomAccordionTrigger = styled(RadixAccordion.AccordionTrigger)(() => ({
  width: "100%",
  padding: "0 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#ebebeb",
  border: "1px solid grey",
  borderRadius: "5px",
  cursor: "pointer",
}));

const CustomAccordionContent = styled(RadixAccordion.AccordionContent)(() => ({
  border: "1px solid grey",
  borderBlockStart: "0",
  borderEndStartRadius: "5px",
  borderEndEndRadius: "5px",
  overflow: "hidden",

  '&[data-state="open"]': {
    animation: "slideDown 300ms ease-out",
  },

  '&[data-state="closed"]': {
    animation: "slideUp 300ms ease-out",
  },

  "@keyframes slideDown": {
    "0%": {
      height: 0,
    },
    "100%": {
      height: "var(--radix-accordion-content-height)",
    },
  },

  "@keyframes slideUp": {
    "0%": {
      height: "var(--radix-accordion-content-height)",
    },
    "100%": {
      height: 0,
    },
  },
}));
