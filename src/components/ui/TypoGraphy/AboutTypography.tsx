import { ReactNode } from "react";

interface HeadProp {
  children: ReactNode;
}

export const TitleHead = ({ children }: HeadProp) => {
  return (
    <h1 className="text-[#E7D2FF] text-center font-[900] text-[32px] sm:text-[36px] md:text-[38px] lg:text-[40px] leading-[40px] sm:leading-[44px] md:leading-[54px]">
      {children}
    </h1>
  );
};

export const BoxTitle = ({ children }: HeadProp) => {
  return (
    <div className="text-white text-center font-[Satoshi Variable] text-[20px] 0.1sm:text-[24px] font-bold leading-[32.64px] tracking-[0.48px]">
      {children}
    </div>
  );
};

export const BoxSubTitle = ({ children }: HeadProp) => {
  return (
    <div className="text-white text-center flex justify-center items-center font-[Satoshi Variable] text-[16px] 0.1sm:text-[20px] font-[400] leading-[27.2px] whitespace-normal break-words text-wrap">
      {children}
    </div>
  );
};

export const SecondHeadTitle = ({ children }: HeadProp) => {
  return (
    <div className="text-[#E7D2FF] text-center text-3xl sm:text-[34px] md:text-[40px] font-merienda font-[900] leading-normal">
      {children}
    </div>
  );
};
