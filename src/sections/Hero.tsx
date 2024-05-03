import React from "react";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";

import SectionHeader from "../components/SectionHeader";
import OpenMoji from "../components/OpenMoji";

export interface IHeroBase {
  readonly title?: string;
  readonly tagLine?: string;
  readonly teaser?: React.ReactNode;
  readonly action?: React.ReactNode;
}

interface IHeroSection extends IHeroBase {
  readonly icon?: string;
  readonly iconRight?: boolean;
}

export const HeroContent = ({ title, tagLine, teaser, action }: IHeroBase) => {
  return (
    <>
      {title && <SectionHeader title={title} tagLine={tagLine} />}
      {teaser && <Typography>{teaser}</Typography>}
      {action}
    </>
  );
};

export default function Hero({
  title,
  tagLine,
  teaser,
  icon,
  iconRight,
  action,
}: IHeroSection) {
  const Icon = icon ? (
    <Box maxWidth="sm">
      <OpenMoji icon={icon} sx={{ p: 6}} />
    </Box>
  ) : null;
  const Content = (
    <HeroContent
      title={title}
      tagLine={tagLine}
      teaser={teaser}
      action={action}
    />
  );
  
  return (
    <Grid container alignItems="center" alignContent="center" spacing={8}>
      <Grid md={6} order={{ xs: 1, sm: iconRight ? 2 : 1 }} >{Icon}</Grid>
      <Grid md={6} order={{ xs: 1, sm: iconRight ? 1 : 2}}>{Content}</Grid>
    </Grid>
  );
}
