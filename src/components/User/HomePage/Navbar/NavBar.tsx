"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionMap } from "./Common";
import { JoinNowButton } from "@/components/ui/MotionVariants/Buttons";
import { MenuIcon, XIcon } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="w-full h-[70px] 0.5sm:h-[84px] fixed z-[101] px-2 xsm:px-[20px] 1.5md:px-[10px] 1.5lg:px-[30px] xl:px-[100px] flex-shrink-0 gap-[28px] lg:gap-[50px] 1.5lg:gap-[75px] flex justify-between items-center bg-[#582590]">
      <Image
        src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734304511/s0bjniaumh1yn0ox5fl6.svg"
        height={57.437}
        width={174}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAA..."
        className="0.5xsm:content-stretch max-0.5sm:w-1/3 flex-shrink-0"
        alt="logo"
      />

      <div
        onClick={handleToggle}
        className="1.5md:hidden z-50 absolute right-[20px] top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        {isOpen ? (
          <XIcon color="white" size={40} />
        ) : (
          <MenuIcon color="white" size={40} />
        )}
      </div>
      <div className="1.5md:flex justify-center font-[500] hidden 1.5md:text-[18px] lg:text-[20px] 1.5xl:text-2xl cursor-pointer leading-normal items-center gap-[24px] xl:gap-[32px]">
        <SectionMap isOpen={isOpen} handleToggle={handleToggle} />
      </div>
      <div className="hidden  1.5md:flex items-center">
        <JoinNowButton label="login" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            exit={{
              y: -20,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeInOut" }
            }}
            className="fixed top-[70px] 0.5sm:top-[84px] right-0  text-white h-auto min-h-screen w-screen p-5 gap-3 py-5 z-40 bg-[#582590]"
          >
            <div className="flex flex-col w-auto overflow-y-auto text-[3rem] md:text-[3.5rem] font-[400] 0.5sm:font-[900] font-sans tracking-normal justify-center gap-[20px]">
              <SectionMap isOpen={isOpen} handleToggle={handleToggle} />
              <JoinNowButton label="login" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
