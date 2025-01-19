import {
  CampaignTitle,
  FrstHeading,
  SectionTitle,
  SectionTitleDescription,
  TitleDescription,
  TitleHead
} from "@/components/ui/TypoGraphy/ProductsTypography";
import Image from "next/image";

export const ProductsMain = () => {
  const ProductsUrl = [
    "https://res.cloudinary.com/dehegwbs0/image/upload/v1734395944/s4pbegsonkz1yltkvi9w.svg",
    "https://res.cloudinary.com/dehegwbs0/image/upload/v1734395945/dpg0pegafjh9vdedqaok.svg",
    "https://res.cloudinary.com/dehegwbs0/image/upload/v1734395945/eumrucefhpgx1o8uak2i.svg",
    "https://res.cloudinary.com/dehegwbs0/image/upload/v1734395946/bkj2hy0ckqlahpkbfqxe.svg"
  ];
  const productData = [
    {
      title: "A Taste of Nostalgia",
      description:
        "For many, Campa Cola is more than just a beverage; it’s a delightful blast from the past! Introduced way back in the 1970s, this fizzy drink quickly became a household name in India. With its bold flavours and eye-catching packaging, Campa Cola holds a special place in the hearts of generations. Today, it’s making a sensational comeback, and we couldn’t be more thrilled! If you haven’t tried it yet, get ready for a fizzy ride through its delicious flavour profiles!"
    },
    {
      title: "Diverse Flavors for Every Palate",
      description:
        "What sets Campa Cola apart from other soft drinks is its diverse range of unique and exciting flavours. From the classic Campa Cola Original, with its irresistible caramel flavour, to the tangy and refreshing Campa Lemon, there’s something to please every palate. And let’s not forget the exhilarating Campa Orange, bursting with citrusy zest—perfect for those sun-soaked days when all you need is a splash of sunshine!"
    },
    {
      title: "A Perfect Companion for Every Occasion",
      description:
        "Whether you’re hosting a backyard barbecue, enjoying a cosy movie night with friends, or simply lounging under the sun, Campa Cola is the ultimate companion! Its effervescent fizz and tantalizing flavours elevate any occasion and add a pop of fun to your sip. Imagine clinking glasses filled with ice-cold Campa Cola as you celebrate life’s little moments—it’s the kind of joy that stays with you!"
    },
    {
      title: "Sustainability Matters!",
      description:
        "In this day and age, being eco-conscious is essential. Campa Cola is committed to sustainability and is making strides in innovative packaging and production processes. The brand’s dedication to reducing its environmental footprint ensures that while you enjoy your favourite fizzy drink, you’re also contributing to a greener planet. It’s refreshing to know that sipping on your Campa Cola can feel good in more ways than one!"
    }
  ];
  return (
    <>
      <div
        id="Products"
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
        className="min-h-screen flex flex-col px-[16px] sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[100px] gap-[50px] sm:gap-[90px] md:gap-[100px] lg:gap-[142px] py-[80px] h-auto flex-shrink-0 relative"
      >
        <Image
          src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734395044/xfjb1pdu9gelhjzfqckf.svg"
          layout="fill"
          alt=""
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734395044/xfjb1pdu9gelhjzfqckf.svg"
          className="absolute opacity-50 bg-blend-overlay"
        />
        <div className="flex flex-col gap-[50px] sm:gap-[64px] md:gap-[72px] lg:gap-[84px]">
          <FrstHeading>OUR PRODUCTS</FrstHeading>
          <div className="flex flex-wrap items-center gap-y-3 justify-center  md:justify-between">
            {ProductsUrl.map((items, index) => (
              <Image
                key={index}
                src={items}
                height={408}
                width={233}
                alt=""
                placeholder="blur"
                blurDataURL={items}
                className="bg-cover"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[55px] 0.5sm:gap-[67px]">
          <div className="flex flex-col  gap-[20px] sm:gap-[25px] md:gap-[30px] lg:gap-[40px] xl:gap-[59px]">
            <TitleHead>
              Discover the Refreshing world of Campa Cola Beverages!
            </TitleHead>
            <div className="flex flex-col-reverse  items-center xl:items-start 1.5md:flex-row gap-[20px] sm:gap-[25px] md:gap-[30px] lg:gap-[40px] xl:gap-[56px]">
              <TitleDescription>
                Are you ready to tickle your taste buds and quench your thirst
                with something truly exciting? Allow me to introduce you to the
                vibrant world of Campa Cola beverages! Whether you’re a
                long-time fan of this iconic brand or a curious newcomer eager
                to explore, Campa Cola&apos;s unique flavours and spirited
                personality will surely make your heart skip a beat!
              </TitleDescription>
              <Image
                src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734396761/osewpofteczb48fcmm5e.svg"
                height={599}
                width={591}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734396761/osewpofteczb48fcmm5e.svg"
                className="rounded-xl w-full sm:w-2/3 xl:w-full"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-[30px] 0.5sm:gap-[38px] 1.5md:gap-[41px] lg:gap-[48px] 1.5lg:gap-[55px]">
            {productData.map((items, index) => (
              <div
                key={index}
                className="flex flex-col gap-[6px] 0.5sm:gap-[15px] sm:gap-[20px] md:gap-[24px] lg:gap-[34px] "
              >
                <SectionTitle>{items.title}</SectionTitle>
                <SectionTitleDescription>
                  {items.description}
                </SectionTitleDescription>
              </div>
            ))}
            <div className="flex flex-col 1.5md:flex-row items-center justify-center 1.5lg:justify-between ">
              <Image
                src="https://res.cloudinary.com/dehegwbs0/image/upload/v1734397813/or8x8ra6t36lrhhznow6.svg"
                height={602}
                width={594}
                alt=""
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dehegwbs0/image/upload/v1734397813/or8x8ra6t36lrhhznow6.svg"
                className="rounded-xl aspect-video w-full  xl:w-[570px] xl:h-[588px] 1.5xl:w-[594px] 1.5xl:h-[602px]"
              />
              <CampaignTitle>Join the Campa Revolution!</CampaignTitle>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
