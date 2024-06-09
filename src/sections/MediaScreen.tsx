import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import { STROKE_WIDTH } from "../theme/vars";

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
        sx={{
          borderTop: `${STROKE_WIDTH} ${STROKE_WIDTH} 4px solid`,
          borderBottom: `${STROKE_WIDTH} solid`,
        }}
      >
        {children}
      </AspectRatio>
    </Box>
  );
}
