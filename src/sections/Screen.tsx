import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";

export interface IScreen {
  readonly maxWidth?: "sm" | "md" | "lg" | "xl";
  readonly background?: string; //FIXME should accept ColorPaletteProp
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
      data-color={background}
      component="section"
      sx={{
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
