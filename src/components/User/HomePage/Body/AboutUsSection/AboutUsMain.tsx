"use client";
import { motion } from "motion/react";
import {
  BoxSubTitle,
  BoxTitle,
  SecondHeadTitle,
  TitleHead
} from "@/components/ui/TypoGraphy/AboutTypography";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { AboutBoxData, applyData } from "@/config/AboutUsData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutUsMain = () => {
  const boxesRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    if (mediaQuery.matches) {
      AboutBoxData.forEach((_, index) => {
        gsap.from(`.box-${index}`, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.box-${index}`,
            start: "top 100%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            once: true
          }
        });
      });

      applyData.forEach((_, index) => {
        gsap.from(`.apply-card-${index}`, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.apply-card-${index}`,
            start: "top 100%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            once: true
          }
        });
      });
    } else {
      gsap.from(".box", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".box",
          start: "top 100%",
          end: "bottom top",
          toggleActions: "play none none reverse",
          once: true
        }
      });
    }
  }, []);

  return (
    <div
      className="min-h-screen overflow-hidden flex px-[16px] sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[100px] flex-col gap-[90px] sm:gap-[110px] md:gap-[130px] lg:gap-[150px] py-[50px] sm:py-[120px] md:py-[140px] h-auto w-full"
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
    >
      <TitleHead>WHY TO BECOME A CAMPA COLA PARTNER?</TitleHead>
      <div className="flex flex-wrap justify-center gap-y-7 md:justify-between">
        {AboutBoxData.map((items, index) => (
          <motion.div
            ref={boxesRef}
            key={index}
            className={`box box-${index} h-[280px] px-[29px] w-[100%] max-w-[350px] pt-[29px] flex flex-col items-center rounded-[12px] shadow-[5px_4px_16.9px_-1px_rgba(0,0,0,0.25)]`}
            style={{
              gap: index === 0 ? "24px" : "19px",
              background:
                "radial-gradient(119.09% 119.09% at 50% 13.79%, #F3B814 0%, #56327D 75.5%, #673C96 100%)"
            }}
          >
            <Image
              src={items.svgUrl}
              width={60}
              height={60}
              placeholder="blur"
              blurDataURL={items.svgUrl}
              alt={items.Title}
            />
            <BoxTitle>{items.Title}</BoxTitle>
            <div
              style={{
                width: index === 0 ? "197px" : "",
                letterSpacing: index === 1 ? "-0.4px" : "0.4px"
              }}
            >
              <BoxSubTitle>{items.subTitle}</BoxSubTitle>
            </div>
          </motion.div>
        ))}
      </div>
      <div ref={cardsRef} className="flex flex-col gap-[59px]">
        <SecondHeadTitle>You can apply for</SecondHeadTitle>
        <div className="flex flex-wrap justify-center gap-y-5 md:justify-between">
          {applyData.map((items, index) => (
            <div
              key={index}
              className={`apply-card apply-card-${index} w-[100%] max-w-[350px] h-[62px] flex justify-center items-center bg-[#7D619B] text-[#E7D2FF] text-[18px] sm:text-[22px] font-[900] leading-normal rounded-lg`}
            >
              {items}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
