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
      className="w-full px-4 sm:px-8 lg:px-[103px] py-12 md:py-16 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left Column: Logo and Brand Info */}
          <div className="flex flex-col space-y-8">
            <div className="flex-shrink-0 flex justify-center">
              <Image
                src="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1749541502/Untitled-155-x-90-px-1_1_1_wez3pu.svg"
                alt="Campa Cola Logo"
                width={255}
                height={148}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dfe8sdlkc/image/upload/v1749541502/Untitled-155-x-90-px-1_1_1_wez3pu.svg"
                className="max-w-[200px] md:max-w-[255px] h-auto"
              />
            </div>

            {/* Brand Description */}
            <div className="space-y-4">
              <TitlebDescription>
                Campa Cola stands as a symbol of Indian enterprise, resilience,
                and refreshment. A legacy built on trust, innovation, and
                community pride.
              </TitlebDescription>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold text-[#F3B814] mb-2">
                  Dealership
                </h4>
                <p className="text-sm text-gray-200">Retail partnerships</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold text-[#F3B814] mb-2">
                  Distribution
                </h4>
                <p className="text-sm text-gray-200">
                  Supply chain opportunities
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold text-[#F3B814] mb-2">Franchise</h4>
                <p className="text-sm text-gray-200">Brand licensing</p>
              </div>
            </div>
          </div>

          {/* Right Column: Partnership Information */}
          <div className="flex flex-col space-y-6">
            <div className="mb-4">
              <TitlebHead>Let&apos;s Grow Together</TitlebHead>
            </div>

            <div className="space-y-4">
              <TitlebDescription>
                We&apos;re inviting passionate entrepreneurs to partner with us
                in expanding our national footprint through:
              </TitlebDescription>

              <TitlebDescription>
                Our dedicated onboarding team is here to support your journey at
                every step.
              </TitlebDescription>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="text-[#F3B814] text-lg">📞</span>
                <span className="font-medium">Phone:</span>
                <a
                  href="tel:+919117587267"
                  className="text-[#F3B814] hover:text-[#F3B814]/80 transition-colors font-medium"
                >
                  +91-9117587267
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F3B814] text-lg">✉️</span>
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:business@campabeveragesril.in"
                  className="text-[#F3B814] hover:text-[#F3B814]/80 transition-colors font-medium break-all"
                >
                  business@campabeveragesril.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-300">
              © 1978 – 2025 Campa Cola Beverages (a division of Reliance
              Consumer Products Limited). All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>Established 1978</span>
              <span className="text-[#F3B814]">•</span>
              <span>Proudly Indian</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
