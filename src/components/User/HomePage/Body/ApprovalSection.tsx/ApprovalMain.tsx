"use client";
import { GradientPrimaryButton } from "@/components/ui/MotionVariants/Buttons";
import {
  FrstHeading,
  TitleDescription,
  TitleHead
} from "@/components/ui/TypoGraphy/ApprovalTypography";
import Image from "next/image";

export const ApprovalMain = () => {
  return (
    <>
      <div
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
        className=" 1.5md:min-h-screen px-[16px] sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[110px] overflow-y-hidden py-[100px] sm:py-[125px] md:py-[175px] 1.5md:pb-[236px] 1.5md:pt-[226px] flex flex-col gap-[26px] sm:gap-[30px] md:gap-[36px] 1.5md:gap-[40px]  h-auto flex-shrink-0 relative"
      >
        <Image
          src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734390235/amqqenzjk1ewrxe1lspm.svg"
          width={750}
          height={1100}
          className="absolute right-0 top-0 hidden 1.5md:block"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734390235/amqqenzjk1ewrxe1lspm.svg"
          alt=""
        />
        <FrstHeading>APPROVAL PROCESS</FrstHeading>
        <TitleHead>How our System work?</TitleHead>
        <TitleDescription>
          You Have No worries about Long Paperwork & Lengthy processes or
          Staying in Rows for a Full Day during Your Office Hours. You Have to
          Follow 4 Easy Steps for Campa Cola Dealer, Distributor or Super
          Stockist.
        </TitleDescription>
        <GradientPrimaryButton label="Become Partner" />
      </div>
    </>
  );
};
