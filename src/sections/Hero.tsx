import React from "react";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import Image from "../components/Image";
import SectionHeader from "../components/SectionHeader";
import { MARGINS, TMarginSizes } from "../theme/vars";

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
  readonly marginBottom?: TMarginSizes;
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
  marginBottom = "lg",
}: IHero) {
  const Media = mediaSrc ? (
    <Box
      maxWidth="sm"
      padding={{ sm: 4, md: 8 }}
      paddingTop={{ sm: 4, md: 10 }}
      paddingBottom={{ sm: 4, md: 10 }}
    >
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
      {teaser && (
        <Typography sx={{ hyphens: "none" }} component="span">
          {teaser}
        </Typography>
      )}
      {action}
    </>
  );
  return (
    <Grid
      container
      alignItems="center"
      alignContent="center"
      justifyContent={{ xs: "center", md: "space-between" }}
      spacing={6}
      gap={{ xs: 4, md: 0 }}
      width="100%"
      margin="0"
      padding="0"
      marginBottom={MARGINS[marginBottom]}
    >
      <Grid
        xs={12}
        md={5}
        p={0}
        order={{ sm: 1, md: mediaRight ? 2 : 1 }}
        justifyContent="center"
      >
        {Media}
      </Grid>
      <Grid xs={12} md={6} order={{ sm: 2, md: mediaRight ? 1 : 2 }} p={0}>
        {Content}
      </Grid>
    </Grid>
  );
}
