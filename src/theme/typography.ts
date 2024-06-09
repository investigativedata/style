import { TypographySystemOptions } from "@mui/joy/styles/types";
import { FONT_SIZES } from "./vars";

type Typography = Partial<TypographySystemOptions>;

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
