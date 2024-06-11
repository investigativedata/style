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
import { HAS_WINDOW } from "../theme/vars";

type TColor = ColorPaletteProp | "inherit";

interface IContext {
  readonly currentColor: TColor;
  readonly headerCollapsed: boolean;
  readonly currentAnchorId: string;
}

export const PageContext = createContext<IContext>({
  currentColor: "inherit",
  currentAnchorId: "",
  headerCollapsed: false,
});

interface IStep {
  readonly scrollPos: number;
}

interface IColorStep extends IStep {
  readonly color: ColorPaletteProp;
}

interface IAnchorStep extends IStep {
  readonly id: string;
}

interface IContextProps {
  readonly initialColor?: TColor;
  readonly scrollOffset?: number;
}

export default function PageContextProvider({
  children,
  initialColor = "inherit",
  scrollOffset = 200,
}: PropsWithChildren<IContextProps>) {
  const [color, setColor] = useState<TColor>(initialColor);
  const [currentAnchorId, setCurrentAnchorId] = useState<string>("");
  const [headerCollapsed, setHeaderCollapsed] = useState<boolean>(false);

  const [height, setHeight] = useState<number>(
    HAS_WINDOW ? window.innerHeight : 0,
  );

  const colorSteps: IColorStep[] = [];
  const anchorSteps: IAnchorStep[] = [];

  // set up things on mount and height change
  useEffect(() => {
    // background colors
    document.querySelectorAll("[data-background-color]").forEach((e) => {
      colorSteps.push({
        color: (e.getAttribute("data-background-color") ||
          initialColor) as ColorPaletteProp,
        scrollPos:
          e.getBoundingClientRect().bottom + window.scrollY - height / 2,
      });
    });
    if (colorSteps.length) {
      colorSteps.unshift({ color: colorSteps[0].color, scrollPos: 0 });
    }

    // anchor links
    document.querySelectorAll("[data-anchor=true]").forEach((e) => {
      anchorSteps.unshift({
        id: e.id,
        scrollPos:
          e.getBoundingClientRect().top + window.scrollY - scrollOffset,
      });
    });

    // set initial state values
    handleScroll();
  }, [height]);

  const handleScroll = () => {
    if (HAS_WINDOW) {
      // update current color
      const position = window.scrollY;
      const colorStep = colorSteps.find(
        ({ scrollPos }) => position <= scrollPos,
      );
      colorStep && setColor(colorStep.color);

      // update current anchor
      const anchorStep = anchorSteps.find(
        ({ scrollPos }) => position >= scrollPos - 1,
      );
      setCurrentAnchorId(anchorStep?.id || "");

      // collapse header
      setHeaderCollapsed(window.scrollY > scrollOffset);
    }
  };

  const updateHeight = () => {
    HAS_WINDOW && setHeight(window.innerHeight || 0);
  };

  useEffect(() => {
    HAS_WINDOW &&
      window.addEventListener("scroll", handleScroll, { passive: true });
    HAS_WINDOW &&
      window.addEventListener("resize", updateHeight, { passive: true });

    return () => {
      HAS_WINDOW && window.removeEventListener("scroll", handleScroll);
      HAS_WINDOW && window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // cached context
  const currentColor = useMemo(() => color, [color]);
  const context: IContext = {
    currentColor,
    currentAnchorId: useMemo(() => currentAnchorId, [currentAnchorId]),
    headerCollapsed: useMemo(() => headerCollapsed, [headerCollapsed]),
  };

  return (
    <PageContext.Provider value={context}>
      <Box
        sx={{
          backgroundColor: BACKGROUNDS[currentColor] || "inherit",
          transition: "background 0.8s ease",
        }}
      >
        {children}
      </Box>
    </PageContext.Provider>
  );
}
