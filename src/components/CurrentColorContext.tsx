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

type TColor = ColorPaletteProp | "inherit";
export const CurrentColorContext = createContext<TColor>("inherit");

interface IStep {
  readonly color: ColorPaletteProp;
  readonly scrollPos: number;
}

interface IContextProps {
  readonly initialColor?: TColor;
  readonly dataAttr?: string;
}

const WINDOW = typeof window !== "undefined";

export default function CurrentColorProvider({
  children,
  initialColor = "inherit",
  dataAttr = "data-background-color",
}: PropsWithChildren<IContextProps>) {
  const [color, setColor] = useState<TColor>(initialColor);
  const [height, setHeight] = useState<number>(WINDOW ? window.innerHeight : 0);
  const currentColor = useMemo(() => color, [color]);
  const colorSteps: IStep[] = [];

  // set up screens on mount and height change
  useEffect(() => {
    document.querySelectorAll(`[${dataAttr}]`).forEach((e) => {
      colorSteps.push({
        color: (e.getAttribute(dataAttr) || initialColor) as ColorPaletteProp,
        scrollPos: e.getBoundingClientRect().bottom - height / 2,
      });
    });
    if (colorSteps.length) {
      colorSteps.unshift({ color: colorSteps[0].color, scrollPos: 0 });
      setColor(colorSteps[0].color);
    }
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
    <CurrentColorContext.Provider value={currentColor}>
      <Box
        sx={{
          backgroundColor: BACKGROUNDS[currentColor] || "inherit",
          transition: "background 0.8s ease",
        }}
      >
        {children}
      </Box>
    </CurrentColorContext.Provider>
  );
}
