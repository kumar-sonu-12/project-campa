import { motion } from "framer-motion";
import { NavHoverVariant } from "@/components/ui/MotionVariants/NavBarVariants";
import { handleScroll } from "../Body/Shared";

export const SectionMap = ({
  isOpen,
  handleToggle
}: {
  isOpen: boolean;
  handleToggle: () => void;
}) => {
  const HeaderData = [
    "Home",
    "Franchise-Application",
    "Process",
    "Products",
    "Contact Us"
  ];
  const handleClick = (item: string) => {
    handleScroll({ location: `#${item}` });
    if (isOpen) {
      handleToggle();
    }
  };
  return (
    <>
      {HeaderData.map((item, index) => (
        <motion.button
          variants={NavHoverVariant}
          whileHover="sectionHover"
          whileTap="sectionHover"
          onClick={() => handleClick(item)}
          key={index}
          className="text-white text-left select-none cursor-pointer leading-tight md:leading-normal tracking-wide"
        >
          {item}
        </motion.button>
      ))}
    </>
  );
};
