import { IconButton } from "@/components/User/LoginPage/button";
import { Contact, FormInput, HomeIcon, ListChecks } from "lucide-react";

import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className="relative"
        style={{
          background: `
          radial-gradient(
          50% 80% at 50% 100%, 
          #673C96 0%, 
          #56327D 35%, 
          #211330 100%
        )`
        }}
      >
        <div className=" fixed right-5 0.5sm:right-9 bottom-5 flex flex-col justify-center gap-2 0.5sm:gap-4 z-10">
          <IconButton icon={HomeIcon} href="/user" />
          <IconButton icon={Contact} href="/contactUs" />
          <IconButton icon={FormInput} href="/user/form" />
          <IconButton icon={ListChecks} href="/user/status" />
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
