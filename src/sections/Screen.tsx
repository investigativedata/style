import React from "react";
import { SxProps } from "@mui/joy/styles/types";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { ColorPaletteProp } from "@mui/joy/styles";
import { BACKGROUND_VARS } from "../theme/colors";

export interface IScreen {
  readonly maxWidth?: "sm" | "md" | "lg" | "xl";
  readonly background?: ColorPaletteProp;
  readonly fullHeight?: boolean;
  readonly sx?: SxProps;
}

export default function Screen({
  background = "neutral",
  maxWidth = "xl",
  fullHeight = true,
  sx = {},
  children,
}: React.PropsWithChildren<IScreen>) {
  return (
    <Box
      component="section"
      paddingBottom={{ xs: 4, sm: 6, md: 9 }}
      paddingTop={{ xs: 4, sm: 6, md: 9 }}
      sx={{
        backgroundColor: BACKGROUND_VARS[background],
        display: "flex",
        width: "100%",
        minHeight: fullHeight ? "100vh" : "auto",
        alignItems: "center",
        alignContent: "center",
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
}
