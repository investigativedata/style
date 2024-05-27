import AspectRatio, { AspectRatioProps } from "@mui/joy/AspectRatio";

export interface IImage extends AspectRatioProps {
  readonly src: string;
  readonly alt?: string;
}

export default function Image(props: IImage) {
  return (
    <AspectRatio {...props}>
      <img src={props.src} alt={props.alt || ""} />
    </AspectRatio>
  );
}
