"use client";

// import Image from "next/image";
import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import {
  //   FrstHeading,
  //   TitlebDescription,
  TitlebHead
} from "@/components/ui/TypoGraphy/ApprovalTypography";
import { SectionTitleDescription } from "@/components/ui/TypoGraphy/ProductsTypography";
// import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const AboutUsReal = () => {
  useEffect(() => {
    const splitTextInstances: SplitText[] = [];
    const init = () => {
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-us-container",
          start: "top 70%",
          end: "bottom 40%",
          // pin: true,
          scrub: 1,
          // markers: true,
          // pinSpacing: true,
          toggleActions: "play none none reverse"
        }
      });

      const aboutDescriptionSplit = new SplitText(".about-description", {
        type: "words"
      });
      splitTextInstances.push(aboutDescriptionSplit);

      aboutTl.to(aboutDescriptionSplit.words, {
        // rotationX: 0,
        stagger: 0.05,
        // duration: 0.6,
        color: "#fff",
        ease: "back.out(1.7)"
      });
    };
    function checkWidth() {
      console.log("window.innerWidth ", window.innerWidth);
      gsap.set(".mainn", {
        autoAlpha: 0
      });
      if (window.innerWidth > 0) {
        console.log("good");
        init();
      } else {
        console.log("bad");
        gsap.delayedCall(0.05, checkWidth);
      }
    }
    checkWidth();

    return () => {
      //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      splitTextInstances.forEach((split) => split.revert());
      //   locoScroll.destroy();
    };
  }, []);

  return (
    <div
      className="min-h-screen overflow-hidden flex px-[16px] sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[100px] flex-col gap-[90px] sm:gap-[110px] md:gap-[130px] lg:gap-[150px] py-[30px] sm:py-[80px] md:py-[100px] h-aut0"
      style={{
        background: ` #211330`
      }}
    >
      <div className="w-full flex flex-col gap-12">
        {/* <FrstHeading></FrstHeading> */}
        <TitlebHead>About Campa Cola - A Brand with Heart</TitlebHead>
        <SectionTitleDescription>
          The brand was first launched in the 70s and 80s as a home-grown
          competitor to international cola drinks. Used primarily as a
          celebratory drink,{" "}
          <span className="text-purple-300 font-semibold">Campa Cola</span> now
          has a special place in the heart of many Indian customers who enjoy
          the sweet and fizzy flavour. Originally introduced in the 70s and 80s
          as a domestic rival to international cola behemoths,{" "}
          <span className="text-purple-300 font-semibold">Campa Cola</span> soon
          discovered its place in the Indian consumer&apos;s heart. Renowned for
          its sweet, refreshing, and bubbly flavor, it quickly came to represent
          celebration and togetherness.{" "}
          <span className="text-purple-300 font-semibold">Campa Cola</span> has
          not just returned with the same classic taste in today&apos;s
          cutthroat market; we have also expanded our beverage selection to
          appeal to more people. Supported by contemporary tools, strategic
          planning, and seasoned leadership, the{" "}
          <span className="text-purple-300 font-semibold">Campa Cola</span> firm
          is growing nationally with a defined goal:{" "}
          <span className="text-yellow-300 font-bold">
            to return Campa to every Indian home.
          </span>
        </SectionTitleDescription>
      </div>
    </div>
  );
};
