import { TypographySystemOptions } from "@mui/joy/styles/types";

type Typography = Partial<TypographySystemOptions>;

export const typography: Typography = {
  h1: {
    fontSize: "6rem",
    fontFamily: "Sligoil Micro",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "100%",
    letterSpacing: "-0.12rem"
  },
  h2: {
    fontSize: "4rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "120%",
    letterSpacing: "-0.04rem",
  },
  h3: {
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "130%",
  },
  "title-lg": {
    fontSize: "2.5rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "130%",
    letterSpacing: "-0.05rem",
  },
  "body-lg": {
    fontSize: "2.5rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "130%",
    letterSpacing: "-0.05rem",
  },
  // FIXME conver to rem
  "body-md": {
    fontSize: "24px",
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