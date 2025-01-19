import { ReactNode } from "react";

interface HeadProp {
  children: ReactNode;
}

export const FrstHeading = ({ children }: HeadProp) => {
  return (
    <div className="text-[32px] font-[900] text-center leading-normal text-[#F3B814]">
      {children}
    </div>
  );
};

export const TitleHead = ({ children }: HeadProp) => {
  return (
    <div className="text-[28px] 0.5sm:text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] w-full  font-merienda font-[800] leading-[40px] 0.5sm:leading-[50px] md:leading-[80px] lg:leading-[100px] text-white">
      {children}
    </div>
  );
};

export const TitleDescription = ({ children }: HeadProp) => {
  return (
    <div className="0.5sm:text-xl w-full text-[18px] sm:text-2xl md:text-3xl lg:text-[32px] 1.5md:max-w-[586px] text-justify font-[400px] 0.5sm:font-[500] leading-[28px]  0.5sm:leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[54px] text-white">
      {children}
    </div>
  );
};

export const SectionTitle = ({ children }: HeadProp) => {
  return (
    <div className="text-[22px] 0.5sm:text-[26px] sm:text-[32px] md:text-4xl lg:text-[40px]  font-[900] leading-normal sm:leading-[40px] md:leading-[46px] lg:leading-[62px] text-white">
      {children}
    </div>
  );
};

export const SectionTitleDescription = ({ children }: HeadProp) => {
  return (
    <div className="text-[16px] 0.5sm:text-xl sm:text-2xl md:text-3xl lg:text-[32px] break-words text-justify gont-[400] 0.5sm:font-[500] leading-[26px] 0.5sm:leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[54px] text-white">
      {children}
    </div>
  );
};

export const CampaignTitle = ({ children }: HeadProp) => {
  return (
    <div className="text-[38px] sm:text-[50px] md:text-[60px] text-center lg:text-[68px] 1.5lg:text-[80px] xl:text-[90px] 1.5xl:text-[104px] max-w-[70%] sm:max-w-[614px]  font-[900] leading-[50px] sm:leading-[65px] md:leading-[78px] lg:leading-[118px] text-white">
      {children}
    </div>
  );
};
