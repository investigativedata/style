import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";

export interface IMediaScreen {
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
      <AspectRatio
        ratio={ratio}
        variant="plain"
        sx={{ borderTop: "4px solid", borderBottom: "4px solid" }}
      >
        {children}
      </AspectRatio>
    </Box>
  );
}
