import Box from "@mui/joy/Box";
import type { IHeroBase } from "./Hero";
import { HeroContent } from "./Hero";
import Grid from "@mui/joy/Grid";

interface IMediaHero extends IHeroBase {
  readonly mediaComponent: React.ReactNode;
  readonly mediaRight?: boolean;
}

export default function MediaHero({
  title,
  tagLine,
  teaser,
  mediaComponent,
  mediaRight,
  action,
}: IMediaHero) {
  const Media = (
    <Box maxWidth="sm">
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
  return (
    <Grid container alignItems="center" alignContent="center" spacing={8}>
      <Grid md={6} order={{ sm: 1, md: mediaRight ? 1 : 2 }} >{Content}</Grid>
      <Grid md={6} order={{ sm: 1, md: mediaRight ? 2 : 1 }}>{Media}</Grid>
    </Grid>
  );
}
