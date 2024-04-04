import Box from "@mui/joy/Box";
import type { IHeroBase } from "./Hero";
import { HeroBase, HeroContent } from "./Hero";

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
