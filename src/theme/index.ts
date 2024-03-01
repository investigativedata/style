import { extendTheme } from "@mui/joy/styles";
import { BACKGROUNDS, BLACK, PALETTE, WHITE } from "./colors";
import { components } from "./components";
import { typography } from "./typography";

const theme = extendTheme({
  fontFamily: {
    display: "Inter", // applies to `h1`–`h4`
    body: "Inter", // applies to `title-*` and `body-*`
  },
  typography,
  // @ts-ignore
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
