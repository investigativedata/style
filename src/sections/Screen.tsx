import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { ColorPaletteProp } from "@mui/joy/styles";
import { BACKGROUND_VARS } from "../theme/colors";

export interface IScreen {
  readonly maxWidth?: "sm" | "md" | "lg" | "xl";
  readonly background?: ColorPaletteProp;
  readonly fullHeight?: boolean;
}

export default function Screen({
  background = "neutral",
  maxWidth = "xl",
  fullHeight = true,
  children,
}: React.PropsWithChildren<IScreen>) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: BACKGROUND_VARS[background],
        paddingTop: 12,
        paddingBottom: 12,
        display: "flex",
        width: "100%",
        minHeight: fullHeight ? "100vh" : "auto",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
}
