import { extendTheme } from "@mui/joy/styles";
import { BACKGROUNDS, BLACK, PALETTE, WHITE } from "./colors";
import { components } from "./components";

const theme = extendTheme({
  fontFamily: {
    display: "Inter", // applies to `h1`–`h4`
    body: "Inter", // applies to `title-*` and `body-*`
  },
  typography: {
    h1: {
      fontSize: "4.375rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "120%",
    },
    h2: {
      fontSize: "2.5rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "130%",
      letterSpacing: "-0.03rem",
    },
    h3: {
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "130%",
      letterSpacing: "-0.03rem",
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
      fontWeight: 400,
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
  },
  components,
  colorSchemes: {
    light: {
      palette: {
        primary: PALETTE.oranges,
        neutral: PALETTE.grays,
        success: PALETTE.greens,
        warning: PALETTE.yellows,
        danger: PALETTE.purples,
        text: {
          primary: PALETTE.grays[900],
          secondary: PALETTE.grays[900],
          tertiary: PALETTE.grays[700],
        },
        background: {
          body: BACKGROUNDS.default,
          surface: BACKGROUNDS.default,
        },
        common: {
          black: BLACK,
          white: WHITE,
        },
      },
    },
    dark: {
      palette: {
        primary: PALETTE.oranges,
        neutral: PALETTE.grays,
        success: PALETTE.greens,
        warning: PALETTE.yellows,
        danger: PALETTE.purples,
        background: {
          body: BLACK,
        },
      },
    },
  },
});

export default theme;
