import { ReactNode } from "react";

interface HeadProp {
  children: ReactNode;
}

export const FrstHeading = ({ children }: HeadProp) => {
  return (
    <div className="text-[24px] font-[900] leading-normal text-[#F3B814]">
      {children}
    </div>
  );
};

export const TitleHead = ({ children }: HeadProp) => {
  return (
    <div className="text-[32px] md:text-[56px] lg:text-[64px] font-merienda font-[800] leading-[40px] md:leading-[80px] lg:leading-[100px] text-[#E7D2FF]">
      {children}
    </div>
  );
};
