import AspectRatio, { AspectRatioProps } from "@mui/joy/AspectRatio";

interface IImageComponent extends AspectRatioProps {
  readonly src: string;
}

export default function Image(props: IImageComponent) {
  return (
    <AspectRatio {...props}>
      <img src={props.src} />
    </AspectRatio>
  );
}
