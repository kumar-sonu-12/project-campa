"use client";
// import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutUsMain } from "./AboutUsSection/AboutUsMain";
import { ApprovalMain } from "./ApprovalSection.tsx/ApprovalMain";
import { ContactFormMain } from "./ContactForm/ContactFormMain";
import { FaqsMain } from "./Faqs/Faqsmain";
import { ProcessMain } from "./ProcessSection/ProcessMain";
import { ProductsMain } from "./Products/ProductsMain";
import { HeroMain } from "./HeroSection/heroMain";
import { NavBar } from "../Navbar/NavBar";

gsap.registerPlugin(ScrollTrigger);

export const Body = () => {
  const sectionArr = [
    HeroMain,
    AboutUsMain,
    ApprovalMain,
    ProcessMain,
    ContactFormMain,
    ProductsMain,
    FaqsMain
  ];

  return (
    <>
      <NavBar />
      {sectionArr.map((Section, index) => (
        <div key={index} className="section">
          <Section mainForm={false} />
        </div>
      ))}
    </>
  );
};
