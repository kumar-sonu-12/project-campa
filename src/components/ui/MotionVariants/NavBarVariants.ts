import { cubicBezier, easeIn } from "framer-motion";

export const NavHoverVariant = {
  hidden: {},
  sectionHover: {
    color: "#F3B814",
    transition: { duration: 0.5, ease: cubicBezier(0.25, 1, 0.5, 1) }
  },
  buttonHover: {
    background: "transparent",
    color: "#F3B814",
    transition: { ease: easeIn }
  }
};
