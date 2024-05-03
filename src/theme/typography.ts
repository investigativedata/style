import { TypographySystemOptions } from "@mui/joy/styles/types";

type Typography = Partial<TypographySystemOptions>;

export const typography: Typography = {
  h1: {
    fontSize: "clamp(2.5rem, 7vw, 6rem)",
    fontFamily: "Sligoil Micro",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "-0.12rem"
  },
  h2: {
    fontSize: "clamp(2rem, 7vw, 4rem)",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "120%",
    letterSpacing: "-0.04rem",
  },
  h3: {
    fontSize: "clamp(1rem, 7vw, 1.5rem)",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "130%",
  },
  "title-lg": {
    fontSize: "clamp(1.5rem, 7vw, 2.5rem)",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "130%",
    letterSpacing: "-0.05rem",
  },
  "body-lg": {
    fontSize: "clamp(1.5rem, 7vw, 2.5rem)",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "130%",
    letterSpacing: "-0.05rem",
  },
  "body-md": {
    fontSize: "clamp(1rem, 7vw, 1.5rem)",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "31.2px",
    letterSpacing: "-2%",
  },
  "body-sm": {
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20.8px",
  },
};
