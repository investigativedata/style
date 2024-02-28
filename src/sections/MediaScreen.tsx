import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";

interface IMediaScreen {
  readonly ratio?: string;
  readonly credits?: React.ReactNode;
}

export default function MediaScreen({
  children,
  ratio,
  credits,
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
      {credits && (
        <Container maxWidth="xl" sx={{ paddingTop: 2 }}>
          <Typography level="body-sm">{credits}</Typography>
        </Container>
      )}
    </Box>
  );
}
