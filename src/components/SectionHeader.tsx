import React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

interface ISectionHeader {
  readonly topMark?: string;
  readonly title: string;
}

export default function SectionHeader({ topMark, title }: ISectionHeader) {
  return (
    <Box>
      {topMark && (
        <Typography level="h3" sx={{ p: 0 }}>
          {topMark}
        </Typography>
      )}
      <Typography level="h2">{title}</Typography>
    </Box>
  );
}
