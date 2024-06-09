import AspectRatio, { AspectRatioProps } from "@mui/joy/AspectRatio";
import { MARGINS, TMarginSizes } from "../theme/vars";

export interface IImage extends AspectRatioProps {
  readonly src: string;
  readonly alt?: string;
  readonly margin?: TMarginSizes;
}

export default function Image(props: IImage) {
  return (
    <AspectRatio
      {...props}
      sx={{ marginBottom: MARGINS[props.margin || "sm"] }}
    >
      <img src={props.src} alt={props.alt || ""} loading="lazy" />
    </AspectRatio>
  );
}
