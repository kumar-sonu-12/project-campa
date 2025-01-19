"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { GradientPrimaryButton } from "@/components/ui/MotionVariants/Buttons";
import {
  FrstHeading,
  TitleHead
} from "@/components/ui/TypoGraphy/FaqsTypography";
import { FaqsData } from "@/config/FaqsData";

export const FaqsMain = () => {
  return (
    <>
      <div
        id="Faqs"
        style={{
          background: `
              radial-gradient(
                50% 80% at 50% 100%, 
                #673C96 0%, 
                #56327D 35%, 
                #211330 100%
              )
            `
        }}
        className="sm:min-h-screen flex flex-col px-[16px] sm:px-[20px] mb-0 md:px-[30px] lg:px-[60px] xl:px-[100px] gap-[43px] md:gap-[63px] lg:gap-[83px] py-[50px] sm:py-[90px] h-auto flex-shrink-0 relative"
      >
        <div className="flex flex-col gap-[24px]">
          <FrstHeading>FAQ&apos;s</FrstHeading>
          <TitleHead>Need Assistance? Start Here</TitleHead>
        </div>
        <div>
          {FaqsData.map((items, index) => (
            <Accordion key={index} type="single" collapsible className="">
              <AccordionItem
                value="item-1"
                className="w-full mb-[21px] rounded-[4px] bg-gradient-to-r from-[#582590] to-[#1A0B2A] shadow-[0px_4px_10.8px_0px_rgba(255,255,255,0.25)]"
              >
                <AccordionTrigger className="text-white font-bold text-[13px] 0.5sm:text-lg sm:text-xl  md:text-[24px] leading-normal tracking-[0.48] py-3 px-4">
                  {items.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-[10px] 0.5sm:text-base sm:text-lg py-2 px-4">
                  {items.solution}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <GradientPrimaryButton label="Become Partner" />
        </div>
      </div>
    </>
  );
};
