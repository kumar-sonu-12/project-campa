import { ReactNode } from "react";

interface HeadProp {
  children: ReactNode;
}

export const TitleHead = ({ children }: HeadProp) => {
  return (
    <div className="text-[#E7D2FF] text-center font-merienda text-3xl sm:text-[32x] md:text-[36px] lg:text-[40px] font-[900] leading-[62px]">
      {children}
    </div>
  );
};
