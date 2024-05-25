import React from "react";
import Box from "@mui/joy/Box";
import AspectRatio from "@mui/joy/AspectRatio";

interface IMediaScreen {
  readonly ratio?: string;
}

export default function MediaScreen({
  children,
  ratio,
}: React.PropsWithChildren<IMediaScreen>) {
  return (
    <Box
      component="section"
      sx={{
        display: "block",
        width: "100%",
      }}
    >
      <AspectRatio ratio={ratio}>{children}</AspectRatio>
    </Box>
  );
}
