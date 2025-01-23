import {
  BoxSubTitle,
  BoxTitle,
  FrstHeading,
  TitleHead
} from "@/components/ui/TypoGraphy/ProcessTypography";
import Image from "next/image";

export const ProcessMain = () => {
  const processData = [
    {
      id: "1",
      title: "Submit Your Enquiry",
      description: `You Needs to Click on "Apply Now" Button According to Your Interest Type, Fill Your Personal Details Carefully, After That Press "SUBMIT NOW" Button and Go For Next Steps.`
    },
    {
      id: "2",
      title: "Choose Your Interest",
      description: `After Submission of Your Personal Details, Select What are You Applying For? Campa Cola Distributor, A SUPER STOCKIST? or Dealership for Entire City.`
    },
    {
      id: "3",
      title: "Track the progress",
      description: `After Selection & Submission of Your Enquiry, Our Expert Support Executive Will Call You for Verification & Next Process....`
    },
    {
      id: "4",
      title: "Be a Campa Partners",
      description: `If Everything Goes Fine, You'll Get Approval Message, & Grant You Campa Cola Franchise.`
    }
  ];
  return (
    <>
      <div
        id="Process"
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
        className="min-h-screen px-[16px] sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[100px] py-[90px] h-auto flex-shrink-0 flex flex-col gap-[48px] sm:gap-[54px] md:gap-[60px] lg:gap-[74px] relative"
      >
        <Image
          src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734393655/gc1dkcw6rozqcxpacdzs.svg"
          layout="fill"
          alt="process background image"
          loading="lazy"
          className="absolute opacity-50"
        />
        <div className="flex flex-col items-center sm:items-start gap-[14px]">
          <FrstHeading>OUR FOUR STEP PROCESS</FrstHeading>
          <TitleHead>Steps to be a campa partner</TitleHead>
        </div>
        <div className="flex flex-wrap gap-x-[90px] gap-y-[40px] sm:gap-y-[50px] md:gap-y-[66px] lg:gap-y-[86px]  justify-items-start">
          {processData.map((items, index) => (
            <div
              key={index}
              className=" flex flex-col justify-center items-center sm:items-start gap-[10px] sm:gap-[24px] md:gap-[30px] w-full sm:max-w-[386px] h-auto"
            >
              <div className="w-12 md:w-16 h-[44px] md:h-[60px] flex justify-center items-center text-[24px] md:text-[32px] font-bold leading-[35px] md:leading-[43.52px] tracking-[0.64px] text-center text-white bg-[#8237D4] rounded-[4px]">
                {items.id}
              </div>
              <BoxTitle>{items.title}</BoxTitle>
              <BoxSubTitle>{items.description}</BoxSubTitle>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
