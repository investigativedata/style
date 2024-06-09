import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Box from "@mui/joy/Box";
import { ColorPaletteProp } from "@mui/joy/styles";
import { BACKGROUNDS } from "../theme/colors";

export const CurrentColorContext = createContext<ColorPaletteProp>("neutral");

interface IStep {
  readonly color: ColorPaletteProp;
  readonly scrollPos: number;
}

const WINDOW = typeof window !== "undefined";

export default function CurrentColorProvider({ children }: PropsWithChildren) {
  const [color, setColor] = useState<ColorPaletteProp>("neutral");
  const [height, setHeight] = useState<number>(WINDOW ? window.innerHeight : 0);
  const backgroundColor = useMemo(() => color, [color]);
  const colorSteps: IStep[] = [];

  // set up screens on mount and height change
  useEffect(() => {
    document.querySelectorAll("[data-screen-color]").forEach((e) => {
      colorSteps.push({
        color: (e.getAttribute("data-screen-color") ||
          "neutral") as ColorPaletteProp,
        scrollPos: e.getBoundingClientRect().bottom - height / 2,
      });
    });
    colorSteps.unshift({ color: colorSteps[0].color, scrollPos: 0 });
    setColor(colorSteps[0].color);
  }, [height]);

  const handleScroll = () => {
    if (WINDOW) {
      const position = window.scrollY || 0;
      const currentStep = colorSteps.find(
        ({ scrollPos }) => position <= scrollPos,
      );
      currentStep && setColor(currentStep.color);
    }
  };

  const updateHeight = () => {
    WINDOW && setHeight(window.innerHeight || 0);
  };

  useEffect(() => {
    WINDOW &&
      window.addEventListener("scroll", handleScroll, { passive: true });
    WINDOW &&
      window.addEventListener("resize", updateHeight, { passive: true });

    return () => {
      WINDOW && window.removeEventListener("scroll", handleScroll);
      WINDOW && window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <CurrentColorContext.Provider value={backgroundColor}>
      <Box
        sx={{
          backgroundColor: BACKGROUNDS[backgroundColor],
          transition: "background 0.8s ease",
        }}
      >
        {children}
      </Box>
    </CurrentColorContext.Provider>
  );
}
