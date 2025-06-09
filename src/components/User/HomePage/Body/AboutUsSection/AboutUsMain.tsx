"use client";
import { motion } from "motion/react";
import {
  BoxSubTitle,
  BoxTitle,
  SecondHeadTitle,
  TitleHead
} from "@/components/ui/TypoGraphy/AboutTypography";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AboutBoxData, applyData } from "@/config/AboutUsData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GradientPrimaryButton } from "@/components/ui/MotionVariants/Buttons";

gsap.registerPlugin(ScrollTrigger);

export const AboutUsMain = () => {
  const boxesRef = useRef(null);
  const cardsRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

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
      <div className="flex flex-wrap justify-center  gap-[5vw]">
        {AboutBoxData.map((items, index) => {
          const Icon = items.icon;

          return (
            <motion.div
              ref={boxesRef}
              key={index}
              className={`box box-${index} h-[400px] px-[29px] w-[100%] max-w-[500px] pt-[29px] flex flex-col items-center justify-center rounded-[12px] shadow-[5px_4px_16.9px_-1px_rgba(0,0,0,0.25)]`}
              style={{
                gap: "24px",
                background:
                  "radial-gradient(119.09% 119.09% at 50% 13.79%, #F3B814 0%, #56327D 75.5%, #673C96 100%)"
              }}
            >
              <Icon className="w-[60px] h-[60px] text-white" />
              <BoxTitle>{items.Title}</BoxTitle>
              <div
                style={{
                  letterSpacing: index === 1 ? "-0.4px" : "0.4px"
                }}
              >
                <BoxSubTitle>{items.subTitle}</BoxSubTitle>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div ref={cardsRef} className="flex flex-col  gap-[59px]">
        <SecondHeadTitle>You can apply for</SecondHeadTitle>
        {/* <div className="flex flex-wrap justify-center gap-y-5 gap-[5vw]">
          {applyData.map((items, index) => (
            <div
              key={index}
              className={`apply-card apply-card-${index} w-[100%] max-w-[350px] h-[62px] flex justify-center items-center bg-[#7D619B] text-[#E7D2FF] text-[18px] sm:text-[22px] font-[900] leading-normal rounded-lg`}
            >
              {items}
            </div>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-center gap-y-5 gap-[5vw] mb-12">
          {applyData.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedCard(selectedCard === index ? null : index)
              }
              className={`apply-card apply-card-${index} w-[100%] max-w-[350px] h-[62px] flex justify-center items-center bg-[#7D619B] text-[#E7D2FF] text-[18px] sm:text-[22px] font-[900] leading-normal rounded-lg cursor-pointer transition-all duration-300 ${
                selectedCard === index
                  ? "ring-4 ring-white/50"
                  : "hover:bg-[#8B6FA8] hover:scale-105"
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>
        {selectedCard !== null && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white animate-in slide-in-from-bottom duration-500">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-[#E7D2FF]">
                {applyData[selectedCard].title}
              </h2>
              <h3 className="text-xl font-semibold mb-6 text-purple-200">
                {applyData[selectedCard].subtitle}
              </h3>

              <p className="text-lg mb-8 leading-relaxed text-purple-100">
                {applyData[selectedCard].description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Requirements */}
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4 text-[#E7D2FF]">
                    Requirements:
                  </h4>
                  <ul className="space-y-2">
                    {applyData[selectedCard].requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-300 mr-2">•</span>
                        <span className="text-purple-100">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Investment */}
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4 text-[#E7D2FF]">
                    Investment:
                  </h4>
                  <div className="space-y-2 text-purple-100">
                    <p>
                      <span className="font-semibold">Initial investment:</span>{" "}
                      {applyData[selectedCard].investment.initial}
                    </p>
                    <p>
                      <span className="font-semibold">Expected ROI:</span>{" "}
                      {applyData[selectedCard].investment.roi}
                    </p>
                    {applyData[selectedCard].investment.profit && (
                      <p>
                        <span className="font-semibold">
                          Average monthly profit:
                        </span>{" "}
                        {applyData[selectedCard].investment.profit}
                      </p>
                    )}
                    {applyData[selectedCard].investment.turnover && (
                      <p>
                        <span className="font-semibold">
                          Possible monthly turnover:
                        </span>{" "}
                        {applyData[selectedCard].investment.turnover}
                      </p>
                    )}
                    {applyData[selectedCard].investment.revenue && (
                      <p>
                        <span className="font-semibold">
                          Potential monthly revenue:
                        </span>{" "}
                        {applyData[selectedCard].investment.revenue}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8">
                {applyData[selectedCard].support && (
                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h4 className="text-xl font-bold mb-4 text-[#E7D2FF]">
                      Support from Campa Cola:
                    </h4>
                    <ul className="space-y-2">
                      {applyData[selectedCard].support.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-300 mr-2">✓</span>
                          <span className="text-purple-100">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {applyData[selectedCard].benefits && (
                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h4 className="text-xl font-bold mb-4 text-[#E7D2FF]">
                      {selectedCard === 1 ? "Benefits:" : "What you get:"}
                    </h4>
                    <ul className="space-y-2">
                      {applyData[selectedCard].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-300 mr-2">✓</span>
                          <span className="text-purple-100">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {applyData[selectedCard].models && (
                  <div className="bg-white/5 rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-4 text-[#E7D2FF]">
                      Franchise Models:
                    </h4>
                    <ul className="space-y-2">
                      {applyData[selectedCard].models.map((model, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-300 mr-2">
                            {idx + 1}.
                          </span>
                          <span className="text-purple-100">{model}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Apply Button */}
              <div className="text-center content-center w-full flex justify-center mt-8">
                <GradientPrimaryButton label={`Become Partner`} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
