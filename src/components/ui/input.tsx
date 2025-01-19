import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-white border-[1px] px-[9px] text-white mt-2 py-[14px] placeholder-[#a4a4a4] placeholder:text-[12px] placeholder:font-[500] placeholder:leading-normal focus:border-none w-full h-[44px] rounded-[4px] bg-transparent",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
