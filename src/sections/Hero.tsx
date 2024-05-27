import React from "react";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";

import SectionHeader from "../components/SectionHeader";
import Image from "../components/Image";

export interface IHero {
  readonly title?: string;
  readonly titleLevel?: "h1" | "h2";
  readonly tagLine?: string;
  readonly teaser?: React.ReactNode;
  readonly action?: React.ReactNode;
  readonly mediaType?: "image";
  readonly mediaSrc?: string;
  readonly mediaRight?: boolean;
  readonly mediaBorder?: boolean;
  readonly mediaRatio?: string;
}

export default function Hero({
  title,
  titleLevel = "h2",
  tagLine,
  teaser,
  mediaSrc,
  mediaRight,
  mediaBorder,
  mediaRatio,
  action,
}: IHero) {
  const Media = mediaSrc ? (
    <Box maxWidth="sm" sx={{ p: 6 }}>
      <Image
        src={mediaSrc}
        variant={mediaBorder ? "outlined" : "plain"}
        ratio={mediaRatio}
      />
    </Box>
  ) : null;
  const Content = (
    <>
      {title && (
        <SectionHeader
          title={title}
          titleLevel={titleLevel}
          tagLine={tagLine}
        />
      )}
      {teaser && <Typography component="span">{teaser}</Typography>}
      {action}
    </>
  );
  return (
    <Grid
      container
      alignItems="center"
      alignContent="center"
      justifyContent="space-between"
      spacing={8}
      width="100%"
      margin="0"
      padding="0"
    >
      <Grid md={6} order={{ sm: 1, md: mediaRight ? 2 : 1 }}>
        {Media}
      </Grid>
      <Grid
        md={6}
        order={{ sm: 2, md: mediaRight ? 1 : 2 }}
        paddingLeft={mediaRight ? 0 : 4}
      >
        {Content}
      </Grid>
    </Grid>
  );
}
