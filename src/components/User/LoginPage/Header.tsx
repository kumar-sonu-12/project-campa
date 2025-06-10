// import { JoinNowButton } from "@/components/ui/MotionVariants/Buttons";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import { IconButton } from "./button";

export const LoginHeader = () => {
  return (
    <div>
      <div className="w-full h-[70px] 0.5sm:h-[84px] fixed z-[101] px-2 xsm:px-[20px] md:px-[40px] flex-shrink-0 gap-[28px] lg:gap-[50px] 1.5lg:gap-[75px] flex  items-center bg-[#582590]">
        <Image
          src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1749539913/Logo_1_zkuvtd.svg"
          height={57.437}
          width={174}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAA..."
          className="0.5xsm:content-stretch absolute max-0.5sm:w-1/3 flex-shrink-0"
          alt="logo"
        />
        <div className="flex w-full justify-end">
          {/* <JoinNowButton label="home" /> */}
          <IconButton icon={HomeIcon} href="/" />
        </div>
      </div>
    </div>
  );
};
