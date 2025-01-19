"use client";

import { GradientPrimaryButton } from "@/components/ui/MotionVariants/Buttons";
// import { GradientPrimaryButton } from "@/components/ui/button";
import {
  TitleHeading,
  TitleSubHeading
} from "@/components/ui/TypoGraphy/HeroTypography";
import Image from "next/image";

export const HeroMain = () => {
  return (
    <>
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #673C96 0%, #56327D 24.5%, #211330 100%)"
        }}
        className="h-auto md:min-h-screen px-[16px] sm:px-[25px] md:px-[40px] lg:px-[70px] xl:px-[122px] w-full  py-[85px] 0.5sm:py-[80px] sm:py-[100px] z-0 md:pb-48 flex  overflow-x-hidden "
      >
        <Image
          src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734301154/hge9vw5xqlbypyowwxz9.svg"
          alt="background"
          layout="fill"
          style={{
            mixBlendMode: "overlay"
          }}
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734301154/hge9vw5xqlbypyowwxz9.svg"
          className="absolute opacity-100  inset-0 md:opacity-80  "
        />
        <Image
          src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734317185/dpe2njiwb1ckgzbpyfwb.svg"
          width={813}
          height={826}
          alt="main img"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734317185/dpe2njiwb1ckgzbpyfwb.svg"
          className="absolute right-[1%] top-[30%] opacity-10 0.5sm:opacity-35 1.5xl:opacity-100 sm:block z-0 1.5xl:z-[100]"
        />

        <div className="flex flex-col justify-center items-center w-full max-w-6xl gap-[25px] 0.5sm:gap-0 sm:w-auto pt-2">
          <div className="flex justify-center w-full sm:w-auto">
            <Image
              src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734312929/nytukcu2kxxipi5gf7et.svg"
              className="w-1/6 block  sm:w-full h-auto"
              height={179}
              width={206.447}
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734312929/nytukcu2kxxipi5gf7et.svg"
              alt="logo"
            />
          </div>
          <div className="flex  flex-col gap-[30px] 0.5sm:gap-[40px] z-10">
            <div className="flex flex-col gap-[10px] 0.5sm:gap-0">
              <TitleHeading>India&apos;s Favourite Drink!</TitleHeading>
              <TitleSubHeading>
                Now You can become a Campa Franchise Partner, and Here you can
                apply for a campa cola distributorship,
              </TitleSubHeading>
            </div>
            <GradientPrimaryButton label="Become Partner" />
          </div>
        </div>
      </div>
    </>
  );
};
