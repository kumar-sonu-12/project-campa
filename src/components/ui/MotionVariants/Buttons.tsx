"use client";
import { motion } from "framer-motion";
import { NavHoverVariant } from "./NavBarVariants";
import Image from "next/image";
import { HeroVariant } from "./HeroVariant";
import { handleScroll } from "@/components/User/HomePage/Body/Shared";

import { useRouter } from "next/navigation";
import { useState } from "react";
// import BounceLoader from "@/components/Loader";
// import { redirect } from "next/navigation";

interface ButtonProp {
  label: string;
}
export const JoinNowButton = ({ label }: ButtonProp) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <motion.button
        variants={NavHoverVariant}
        whileHover="buttonHover"
        whileTap="buttonHover"
        onClick={() => {
          setLoading(!loading);
          router.push(`/${label === "home" ? "" : label.toString()}`);
          setLoading(!loading);
        }}
        className="w-[101px] sm:w-[131px] select-none h-[44px] sm:h-[56px] flex justify-center items-center  leading-normal font-[500] text-[18px] lg:text-[22px] 1.5lg:text-[24px] text-black rounded-[50px] bg-[#F3B814] border-[1.5px] border-[#F3B814] cursor-pointer"
      >
        {label}
      </motion.button>
    </>
  );
};

export const GradientPrimaryButton = ({ label }: ButtonProp) => {
  return (
    <button className="w-auto flex justify-start items-center h-auto">
      <motion.div
        onClick={() => handleScroll({ location: "#Franchise-Application" })}
        variants={HeroVariant}
        whileHover="gradientButtonHover"
        whileTap="gradientButtonHover"
        // whileFocus="gradientButtonHover"
        className="text-white p-3 sm:p-4 flex cursor-pointer select-none items-center text-center text-[24px] sm:text-3xl md:text-[32px] font-bold leading-[111.5%] tracking-[0.64px]"
        style={{
          borderRadius: "12.924px",
          background:
            "linear-gradient(90deg, #A17A0F 0%, #EE8B3E 44.5%, #582590 100%)",
          boxShadow: "4px 4px 0px 0px #7D619B"
        }}
      >
        {label}
        <Image
          src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1749540349/Arrow_Up_Right_Contained_2_kxlkad.svg"
          width={35.751}
          height={35.751}
          alt=""
          className="ml-4 flex items-center"
        />
      </motion.div>
    </button>
  );
};
