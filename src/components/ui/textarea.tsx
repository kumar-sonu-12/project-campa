import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[100px]   border-white border-[1px] px-[9px] text-white mt-2 py-[14px] placeholder-[#a4a4a4] placeholder:text-[12px] placeholder:font-[500] placeholder:leading-normal focus:border-none w-full rounded-[4px] bg-transparent",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
