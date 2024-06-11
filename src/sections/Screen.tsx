import React from "react";
import { SxProps } from "@mui/joy/styles/types";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { ColorPaletteProp } from "@mui/joy/styles";
import { BACKGROUND_VARS } from "../theme/colors";
import { MARGINS, TMarginSizes } from "../theme/vars";

export interface IScreen {
  readonly maxWidth?: "sm" | "md" | "lg" | "xl";
  readonly background?: ColorPaletteProp;
  readonly changeBackgroundOnScroll?: boolean;
  readonly fullHeight?: boolean;
  readonly textAlignCenter?: boolean;
  readonly padding?: TMarginSizes;
  readonly sx?: SxProps;
}

export default function Screen({
  background = "neutral",
  changeBackgroundOnScroll = false,
  maxWidth = "lg",
  fullHeight = true,
  textAlignCenter = false,
  padding = "md",
  sx = {},
  children,
}: React.PropsWithChildren<IScreen>) {
  return (
    <Box
      component="section"
      paddingBottom={MARGINS[padding]}
      paddingTop={MARGINS[padding]}
      data-background-color={background}
      sx={{
        backgroundColor: changeBackgroundOnScroll
          ? "inherit"
          : BACKGROUND_VARS[background],
        display: "flex",
        width: "100%",
        minHeight: fullHeight ? "100vh" : "auto",
        alignItems: "center",
        alignContent: "center",
        "& *": {
          textAlign: textAlignCenter ? "center" : "inherit",
        },
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
}
