import { cubicBezier } from "framer-motion";

export const HeroVariant = {
  hidden: {},
  gradientButtonHover: {
    transition: { duration: 0.5, ease: cubicBezier(0.25, 1, 0.5, 1) },
    background:
      "linear-gradient(90deg, #582590 0%, #EE8B3E 55.5%, #A17A0F 100%)",
    boxShadow: "4px 4px 0px 0px #7D619B"
  },
  gradientButtonCick: {
    transition: { duration: 0.5, ease: cubicBezier(0.25, 1, 0.5, 1) },
    background:
      "linear-gradient(90deg, #582590 0%, #EE8B3E 55.5%, #A17A0F 100%)",
    boxShadow: "4px 4px 0px 0px #7D619B"
  }
};

export const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5
    }
  }
};

export const childVariants = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 2.5
    }
  }
};
