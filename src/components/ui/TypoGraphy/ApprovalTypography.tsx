import { ReactNode } from "react";

interface HeadProp {
  children: ReactNode;
}

export const FrstHeading = ({ children }: HeadProp) => {
  return (
    <h1 className="text-[22px] sm:text-[26px] md:text-[32px] font-[900] leading-normal text-[#F3B814]">
      {children}
    </h1>
  );
};

export const TitleHead = ({ children }: HeadProp) => {
  return (
    <h2 className="font-merienda max-w-[803px] z-10 text-[44px] sm:text-[55px] md:text-[66px] lg:text-[77px] xl:text-[88px] font-[900] leading-[60px] md:leading-[80px] lg:leading-[100px]  text-[#E7D2ff]">
      {children}
    </h2>
  );
};

export const TitleDescription = ({ children }: HeadProp) => {
  return (
    <div className=" max-w-[803px] text-[16px] 0.5sm:text-[18px] text-justify sm:text-[22px] md:text-[24px] font-[500] leading-[26.63px] 0.5sm:leading-[32.64px] z-10 tracking-wider md:tracking-[-0.48px] text-white">
      {children}
    </div>
  );
};
