import AspectRatio from "@mui/joy/AspectRatio";

export type TLogoColor = "light" | "dark";
export type TLogoVariant = "basic" | "eyes" | "square" | "url";

interface ILogo {
  readonly color?: TLogoColor;
  readonly variant?: TLogoVariant;
}

const DEFAULT_COLOR = "light";
const DEFAULT_VARIANT = "basic";

export default function Logo({
  color = DEFAULT_COLOR,
  variant = DEFAULT_VARIANT,
}: ILogo) {
  const src = `./logos/rgb/transparent/IDIO_${variant}_${color}.svg`;
  return (
    <AspectRatio style={{ width: "100px" }} variant="plain">
      <img src={src} />
    </AspectRatio>
  );
}
