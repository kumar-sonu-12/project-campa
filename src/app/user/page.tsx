import { Button } from "@/components/User/LoginPage/button";
import { FormInput, ListChecks } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="w-screen flex flex-col gap-0 0.5sm:gap-4 p-5 justify-center items-center  min-h-screen h-auto"
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
        <Image
          src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg"
          height={50}
          width={75}
          alt="logo"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg"
          className="flex-shrink-0 fixed top-5 left-5"
        />
        <Button label="Submit Form" href="/user/form" icon={FormInput} />
        <Button label="Check Status" href="/user/status" icon={ListChecks} />
      </div>
    </>
  );
}
