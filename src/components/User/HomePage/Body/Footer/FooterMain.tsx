import Image from "next/image";

export const FooterMain = () => {
  const FooterData = [
    {
      topic: "Abuse Report",
      labels: [
        {
          imgUrl: "",
          label:
            "If You have any Issues or Complaint Please Contact us at: Report-Abuse@campacolabeverages.com"
        },
        {
          imgUrl: "",
          label: `This is Abuse and Report Support Mail, we’ll Respond within 7 Days.`
        }
      ]
    },
    {
      topic: "Contact Us",
      labels: [
        {
          imgUrl: "",
          label:
            "Reg. Office: 3rd Floor, Maker Chambers IV; 222, Nariman Point, Mumbai - 400021"
        },
        {
          imgUrl: "",
          label: "Enquiry@Campacolabeverages.com"
        }
      ]
    }
  ];

  return (
    <>
      <div
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
        className="flex overflow-x-hidden flex-col items-center gap-6 md:gap-[72px] h-auto mt-0 py-6 md:py-[44.5px] w-full px-[16px] sm:px-8 lg:px-[103px]"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[110px] w-full">
          <Image
            src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg"
            height={148}
            width={255}
            alt="logo"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734628899/x41x5cm2fvfihhirp7pg.svg"
            className="flex-shrink-0"
          />

          <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
            {FooterData.map((items, index) => (
              <div
                key={index}
                className="flex flex-col text-white gap-4 md:gap-[28px]"
              >
                <div className="font-bold text-lg md:text-[28px] text-justify leading-snug">
                  {items.topic}
                </div>

                {items.labels.map((labelItem, idx) => (
                  <div
                    key={idx}
                    className="font-medium text-[16px] sm:text-justify md:text-[20px] leading-6 md:leading-[27px]"
                  >
                    <div>{labelItem.imgUrl}</div>
                    <div>{labelItem.label}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="font-medium text-xs md:text-[24px] leading-5 md:leading-[32.4px] text-[#BBBABA] text-center">
          © 1978 – 2024 Campa Cola Beverages (wings of Reliance Consumer
          Products Limited), All Rights Reserved.
        </div>
      </div>
    </>
  );
};
