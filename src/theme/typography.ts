import { TypographySystemOptions } from "@mui/joy/styles/types";

type Typography = Partial<TypographySystemOptions>;

export const FONT_SIZES = {
  xxl: "clamp(2rem, 7vw, 4rem)",
  xl: "clamp(1.6rem, 7vw, 3.2rem)",
  lg: "clamp(1.2rem, 0.8571rem + 1.5238vw, 2rem)",
  md: "clamp(0.8rem, 7vw, 1.2rem)",
  sm: "0.8rem",
};

export const typography: Typography = {
  h1: {
    fontSize: FONT_SIZES.xxl,
    fontFamily: "Sligoil Micro",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "-0.096rem",
    hyphens: "none",
  },
  h2: {
    fontSize: FONT_SIZES.xl,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "120%",
    letterSpacing: "-0.032rem",
    hyphens: "auto",
  },
  h3: {
    fontSize: FONT_SIZES.md,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "130%",
    hyphens: "auto",
  },
  "title-lg": {
    fontSize: FONT_SIZES.lg,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "130%",
    letterSpacing: "-0.04rem",
    hyphens: "auto",
  },
  "body-lg": {
    fontSize: FONT_SIZES.lg,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "130%",
    letterSpacing: "-0.04rem",
    hyphens: "auto",
  },
  "body-md": {
    fontSize: FONT_SIZES.md,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "130%",
    letterSpacing: "-2%",
    hyphens: "auto",
  },
  "body-sm": {
    color: "inherit",
    fontSize: FONT_SIZES.sm,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "130%",
    hyphens: "auto",
  },
};
