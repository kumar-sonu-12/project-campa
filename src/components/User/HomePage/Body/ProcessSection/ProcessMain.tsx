import {
  BoxSubTitle,
  BoxTitle,
  FrstHeading,
  TitleHead
} from "@/components/ui/TypoGraphy/ProcessTypography";
import Image from "next/image";

const processData = [
  {
    id: "1",
    title: "Contact Our Team",
    description: `You may reach us via phone or WhatsApp at +91-9117587267, or by email at business@campabeveragesril.in. For faster processing, we recommend filling out the inquiry form on our official website: https://campacolaindustrie.com/.`
  },
  {
    id: "2",
    title: "Specify Your Interest",
    description: `When contacting us, please clearly mention the type of partnership you are interested in — Campa Cola dealership, distributorship, or franchise. This helps us route your request to the appropriate department.`
  },
  {
    id: "3",
    title: "Initial Assessment & Response",
    description: `Once your inquiry is submitted, our onboarding team will review your application and respond within 24–48 business hours to guide you through the next steps.`
  },
  {
    id: "4",
    title: "Begin Your Partnership",
    description: `Upon verification and approval, you will receive confirmation and the official documentation to begin your journey as an authorized Campa Cola partner.`
  }
];

const escapeRegExp = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightKeywords = (text: string, keywords: string[]) => {
  const escapedKeywords = keywords.map(escapeRegExp);
  const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    // Check for phone number
    if (part === "+91-9117587267") {
      return (
        <a
          key={index}
          href="tel:+919117587267"
          className="text-[#F3B814] cursor-pointer font-semibold underline"
        >
          {part}
        </a>
      );
    }

    // Check for email
    if (part === "campabeverages@ril.in") {
      return (
        <a
          key={index}
          href="mailto:campabeverages@ril.in"
          className="text-[#F3B814] cursor-pointer font-semibold underline"
        >
          {part}
        </a>
      );
    }

    // Check for website URL
    if (part === "https://campaindustries.com/") {
      return (
        <a
          key={index}
          href="https://campaindustries.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F3B814] cursor-pointer font-semibold underline"
        >
          {part}
        </a>
      );
    }

    // Check for other keywords to highlight (case-insensitive)
    const matched = keywords.find(
      (kw) =>
        kw.toLowerCase() === part.toLowerCase() &&
        ![
          "+91-9117587267",
          "campabeverages@ril.in",
          "https://campaindustries.com/"
        ].includes(kw)
    );

    return matched ? (
      <span key={index} className="text-[#F3B814] cursor-pointer font-semibold">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    );
  });
};

export const ProcessMain = () => {
  const keywords = [
    "+91-9117587267",
    "WhatsApp",
    "email",
    "campabeverages@ril.in",
    "https://campaindustries.com/",
    "dealership",
    "distributorship",
    "franchise",
    "24–48 business hours"
  ];

  return (
    <div
      id="Process"
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
      className="min-h-screen px-[16px] sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[100px] py-[90px] h-auto flex-shrink-0 flex flex-col gap-[48px] sm:gap-[54px] md:gap-[60px] lg:gap-[74px] relative"
    >
      <Image
        src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1749541154/image_30_er0yjq.png"
        layout="fill"
        alt="process background image"
        loading="lazy"
        className="absolute opacity-50"
      />
      <div className="flex flex-col items-center sm:items-start gap-[14px]">
        <FrstHeading>OUR FOUR STEP PROCESS</FrstHeading>
        <TitleHead>Steps to be a campa partner</TitleHead>
      </div>
      <div className="flex flex-wrap gap-x-[90px] gap-y-[40px] sm:gap-y-[50px] md:gap-y-[66px] lg:gap-y-[86px] justify-items-start">
        {processData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center sm:items-start gap-[10px] sm:gap-[24px] md:gap-[30px] w-full sm:max-w-[386px] h-auto"
          >
            <div className="w-12 md:w-16 h-[44px] md:h-[60px] flex justify-center items-center text-[24px] md:text-[32px] font-bold leading-[35px] md:leading-[43.52px] tracking-[0.64px] text-center text-white bg-[#8237D4] rounded-[4px]">
              {item.id}
            </div>
            <BoxTitle>{item.title}</BoxTitle>
            <BoxSubTitle>
              {highlightKeywords(item.description, keywords)}
            </BoxSubTitle>
          </div>
        ))}
      </div>
    </div>
  );
};
