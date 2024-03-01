import { ColorPaletteProp } from "@mui/joy/styles";
import AspectRatio from "@mui/joy/AspectRatio";
import openmoji from "openmoji";
import { SxProps } from "@mui/joy/styles/types";

interface IOpenMojiComponent {
  readonly variant?: "black" | "color";
  readonly color?: ColorPaletteProp;
  readonly sx?: SxProps;
  readonly icon: string;
}

interface ISvgImage {
  readonly svg: string;
}

interface ISvgImages {
  readonly black: ISvgImage;
  readonly color: ISvgImage;
}

interface IOpenMoji {
  readonly emoji: string;
  readonly hexcode: string;
  readonly group: string;
  readonly subgroups: string;
  readonly annotation: string;
  readonly tags: string;
  readonly openmoji_tags: string;
  readonly openmoji_author: string;
  readonly openmoji_date: string;
  readonly skintone: string;
  readonly skintone_combination: string;
  readonly skintone_base_emoji: string;
  readonly skintone_base_hexcode: string;
  readonly unicode: number;
  readonly order: number;
  readonly openmoji_images: ISvgImages;
}

const getMoji = (s: string): IOpenMoji | null =>
  openmoji.openmojis.find(
    (o: IOpenMoji) => o.emoji === s || o.hexcode === s || o.annotation === s
  );

export default function OpenMoji({
  color,
  sx,
  variant = "black",
  icon,
}: IOpenMojiComponent) {
  const iconData = getMoji(icon);
  if (!iconData)
    return (
      <span>
        icon not found: <code>{icon}</code>
      </span>
    );
  return (
    <AspectRatio variant="plain" ratio="1/1" sx={sx}>
      <img
        src={`./openmoji/${variant}/svg/${iconData.hexcode}.svg`}
        width="100"
        height="100"
      />
    </AspectRatio>
  );
}
