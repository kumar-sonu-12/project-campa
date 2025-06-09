import {
  TitlebDescription,
  TitlebHead
} from "@/components/ui/TypoGraphy/ApprovalTypography";
import Image from "next/image";

export const FooterMain = () => {
  return (
    <footer
      style={{
        background: `
          radial-gradient(
            50% 80% at 50% 100%, 
            #673C96 0%, 
            #56327D 35%, 
            #211330 100%
          )
        `
      }}
      className="w-full px-4 sm:px-8 lg:px-[103px] py-8 md:py-14 text-white flex flex-col items-center gap-10"
    >
      {/* Top section: Logo + Info */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between gap-8 md:gap-20">
        {/* Logo */}
        <Image
          src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg"
          alt="Campa Cola Logo"
          width={255}
          height={148}
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg"
          className="flex-shrink-0"
        />

        {/* Information Block */}
        <div className="flex flex-col gap-5 max-w-3xl">
          <div className="mb-12">
            {" "}
            <TitlebHead>Let&apos;s Grow Together</TitlebHead>
          </div>

          <TitlebDescription>
            Campa Cola stands as a symbol of Indian enterprise, resilience, and
            refreshment. We&apos;re inviting passionate entrepreneurs to partner
            with us in expanding our national footprint.
          </TitlebDescription>
          <TitlebDescription>
            Whether you&apos;re interested in a <strong>dealership</strong>,
            pursuing a <strong>distribution</strong> opportunity, or launching a{" "}
            <strong>franchise</strong>, our dedicated onboarding team is here to
            support your journey at every step.
          </TitlebDescription>
          <TitlebDescription>
            Join hands with one of India&apos;s most iconic brands and be part
            of a legacy that&apos;s built on trust, innovation, and community
            pride.
          </TitlebDescription>
          <div className="text-base md:text-lg leading-relaxed mt-2">
            📞 <span className="font-semibold">Contact Us:</span>{" "}
            <a
              href="tel:+919211268216"
              className="underline text-[#F3B814] hover:text-[#F3B814]/[0.9] transition-colors"
            >
              +91-9211268216
            </a>{" "}
            |{" "}
            <a
              href="mailto:business@campabeveragesril.in"
              className="underline text-[#F3B814] hover:text-[#F3B814]/[0.9] transition-colors"
            >
              business@campabeveragesril.in
            </a>
          </div>
        </div>
      </div>

      {/* Bottom legal text */}
      <div className="text-xs md:text-sm text-center text-[#BBBABA] max-w-4xl">
        © 1978 – 2025 Campa Cola Beverages (a division of Reliance Consumer
        Products Limited). All rights reserved.
      </div>
    </footer>
  );
};
