import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { ColorPaletteProp } from "@mui/joy/styles";
import { BACKGROUND_VARS } from "../theme/colors";

interface IScreen {
  readonly background: ColorPaletteProp;
}

export default function Screen({
  background,
  children,
}: React.PropsWithChildren<IScreen>) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: BACKGROUND_VARS[background],
        paddingTop: 12,
        paddingBottom: 12,
        display: "block",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
}
