import { ReactNode } from "react";

interface HeadProp {
  children: ReactNode;
}

export const FrstHeading = ({ children }: HeadProp) => {
  return (
    <h1 className="text-[20px] font-[900] leading-normal text-[#F3B814]">
      {children}
    </h1>
  );
};

export const TitleHead = ({ children }: HeadProp) => {
  return (
    <h2 className="font-merienda text-center 0.5sm:text-left max-w-[944px] z-10 text-[34px] md:text-[56px] lg:text-[64px] font-[900] leading-[43px] md:leading-[80px] lg:leading-[100px]   text-[#E7D2ff]">
      {children}
    </h2>
  );
};

export const BoxTitle = ({ children }: HeadProp) => {
  return (
    <div className="text-white text-[22px] 0.5sm:text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[43.52px] tracking-[0.64px]">
      {children}
    </div>
  );
};

export const BoxSubTitle = ({ children }: HeadProp) => {
  return (
    <div className="text-white text-[16px] 0.5sm:text-[18px] text-justify md:text-[20px] font-[500] leading-[27.2px] ">
      {children}
    </div>
  );
};
