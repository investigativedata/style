import React from "react";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";

import SectionHeader from "../components/SectionHeader";
import OpenMoji from "../components/OpenMoji";

interface IHeroBase {
  readonly title?: string;
  readonly tagLine?: string;
  readonly teaser?: React.ReactNode;
  readonly action?: React.ReactNode;
}

interface IHeroSection extends IHeroBase {
  readonly icon?: string;
  readonly iconRight?: boolean;
}

const HeroContent = ({ title, tagLine, teaser, action }: IHeroBase) => {
  return (
    <>
      {title && <SectionHeader title={title} tagLine={tagLine} />}
      {teaser && <Typography>{teaser}</Typography>}
      {action}
    </>
  );
};

const HeroBase = ({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) => (
  <Grid container alignItems="center" alignContent="center" spacing={8}>
    {left && <Grid md={6}>{left}</Grid>}
    {right && <Grid md={6}>{right}</Grid>}
  </Grid>
);

export default function Hero({
  title,
  tagLine,
  teaser,
  icon,
  iconRight,
  action,
}: IHeroSection) {
  const iconSx = iconRight ? { pl: 6 } : { pr: 6 };
  const Icon = icon ? (
    <Box maxWidth="sm">
      <OpenMoji icon={icon} sx={iconSx} />
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
  const left = iconRight ? Content : Icon;
  const right = iconRight ? Icon : Content;
  return <HeroBase left={left} right={right} />;
}

interface IMediaHero extends IHeroBase {
  readonly mediaComponent: React.ReactNode;
  readonly mediaRight?: boolean;
}

export function MediaHero({
  title,
  tagLine,
  teaser,
  mediaComponent,
  mediaRight,
  action,
}: IMediaHero) {
  const Media = (
    <Box maxWidth="sm" justifyContent={mediaRight ? "right" : "left"}>
      {mediaComponent}
    </Box>
  );
  const Content = (
    <HeroContent
      title={title}
      tagLine={tagLine}
      teaser={teaser}
      action={action}
    />
  );
  const left = mediaRight ? Content : Media;
  const right = mediaRight ? Media : Content;
  return <HeroBase left={left} right={right} />;
}
