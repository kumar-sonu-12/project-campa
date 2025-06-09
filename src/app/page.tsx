import { AboutUsReal } from "@/components/User/HomePage/Body/AboutUsSection/AboutReal";
import { AboutUsMain } from "@/components/User/HomePage/Body/AboutUsSection/AboutUsMain";
import { ApprovalMain } from "@/components/User/HomePage/Body/ApprovalSection.tsx/ApprovalMain";
import { ContactFormMain } from "@/components/User/HomePage/Body/ContactForm/ContactFormMain";
import { FaqsMain } from "@/components/User/HomePage/Body/Faqs/Faqsmain";
import { FooterMain } from "@/components/User/HomePage/Body/Footer/FooterMain";
import { HeroMain } from "@/components/User/HomePage/Body/HeroSection/heroMain";
import { ProcessMain } from "@/components/User/HomePage/Body/ProcessSection/ProcessMain";
import { ProductsMain } from "@/components/User/HomePage/Body/Products/ProductsMain";
import { NavBar } from "@/components/User/HomePage/Navbar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroMain />
      <AboutUsReal />
      <AboutUsMain />
      <ApprovalMain />
      <ProcessMain />
      <ContactFormMain mainForm={false} />
      <ProductsMain />
      <FaqsMain />
      <FooterMain />
    </>
  );
}
