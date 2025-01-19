import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};
import { useState, useEffect } from "react";

export const TitleHeading = ({ children }: HeadingProps) => {
  const [isMediaQueryMatched, setIsMediaQueryMatched] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 520px)");

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMediaQueryMatched(event.matches);
    };

    setIsMediaQueryMatched(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        textShadow: isMediaQueryMatched
          ? "0px 4px 4px rgba(0, 0, 0, 0.25)"
          : "",
        background: isMediaQueryMatched
          ? "linear-gradient(123deg, #FFF 39.16%, #988E8A 51.81%, #3E1D13 64.45%)"
          : "",
        backgroundClip: isMediaQueryMatched ? "text" : "",
        WebkitBackgroundClip: isMediaQueryMatched ? "text" : "",
        WebkitTextFillColor: isMediaQueryMatched ? "transparent" : "",
        color: !isMediaQueryMatched ? "#ede8e8" : ""
      }}
      className="font-merienda text-[64px] sm:text-[74px] md:text-[90px] lg:text-[104px] xl:text-[124px] font-[900] leading-normal"
    >
      {children}
    </div>
  );
};

export const TitleSubHeading = ({ children }: HeadingProps) => {
  const label = children?.toString();
  const wordsArr = label?.split(" ");
  const HighlightedWords = ["Campa", "Franchise", "Partner,"];
  return (
    <div className="text-white text-[16px] 0.5sm:text-[18px] sm:text-[22px] md:text-[24px]  max-w-[606px] flex gap-x-[6px] flex-wrap leading-[22.6px] 0.5sm:leading-[26.64px] sm:leading-[32.64px] tracking-[0.48px]">
      {wordsArr?.map((word, index) => (
        <div
          style={{
            color: HighlightedWords.includes(word) ? "#F3B814" : "white",
            fontWeight: HighlightedWords.includes(word) ? 900 : 700
          }}
          key={index}
        >
          {word}
        </div>
      ))}
    </div>
  );
};
