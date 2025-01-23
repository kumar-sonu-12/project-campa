import { ReactNode } from "react";

interface HeadProp {
  children: ReactNode;
}

export const FrstHeading = ({ children }: HeadProp) => {
  return (
    <h1 className="text-[24px] font-[900] leading-normal text-[#F3B814]">
      {children}
    </h1>
  );
};

export const TitleHead = ({ children }: HeadProp) => {
  return (
    <h2 className="text-[32px] md:text-[56px] lg:text-[64px] font-merienda font-[800] leading-[40px] md:leading-[80px] lg:leading-[100px] text-[#E7D2FF]">
      {children}
    </h2>
  );
};
