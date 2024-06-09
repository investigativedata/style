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

export default function CurrentColorProvider({ children }: PropsWithChildren) {
  const [color, setColor] = useState<ColorPaletteProp>("neutral");
  const [height, setHeight] = useState<number>(window.innerHeight);
  const backgroundColor = useMemo(() => color, [color]);
  const colorSteps: IStep[] = [];

  // set up screens on mount and height change
  useEffect(() => {
    document.querySelectorAll("[data-screen-color]").forEach((e) => {
      colorSteps.push({
        color: (e.getAttribute("data-screen-color") ||
          "neutral") as ColorPaletteProp,
        scrollPos: e.getBoundingClientRect().top + height / 2,
      });
    });
    colorSteps.unshift({ color: colorSteps[0].color, scrollPos: 0 });
    setColor(colorSteps[0].color);
  }, [height]);

  const handleScroll = () => {
    const position = window.scrollY;
    const currentStep = colorSteps.find(
      ({ scrollPos }) => position <= scrollPos,
    );
    currentStep && setColor(currentStep.color);
  };

  const updateHeight = () => setHeight(window.innerHeight);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateHeight, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <CurrentColorContext.Provider value={backgroundColor}>
      <Box
        sx={{
          backgroundColor: BACKGROUNDS[backgroundColor],
          transition: "background 1s ease",
        }}
      >
        {children}
      </Box>
    </CurrentColorContext.Provider>
  );
}
