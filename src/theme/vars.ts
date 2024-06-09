import { ResponsiveStyleValue } from "@mui/system";

export const STROKE_WIDTH_INT = 3;
export const STROKE_WIDTH = `${STROKE_WIDTH_INT}px`;

export const FONT_SIZES = {
  xxl: "clamp(2rem, 7vw, 4rem)",
  xl: "clamp(1.6rem, 7vw, 3.2rem)",
  lg: "clamp(1.2rem, 0.8571rem + 1.5238vw, 2rem)",
  md: "clamp(0.8rem, 7vw, 1.2rem)",
  sm: "0.8rem",
};

interface ISizes {
  readonly none: string;
  readonly sm: string;
  readonly md: string;
  readonly lg: string;
}
export type TMarginSizes = "none" | "sm" | "md" | "lg";
export type TMargins = {
  [key in keyof ISizes]: number | ResponsiveStyleValue<string>;
};
export const MARGINS: TMargins = {
  none: 0,
  sm: { xs: "2rem", md: "2rem", lg: "4rem" },
  md: { xs: "2.5rem", md: "3rem", lg: "7.5rem" },
  lg: { sm: "3rem", md: "7.5rem", lg: "15rem" },
};
