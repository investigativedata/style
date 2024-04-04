import AspectRatio from "@mui/joy/AspectRatio";
import { SxProps } from "@mui/joy/styles/types";

interface IOpenMojiComponent {
  readonly variant?: "black" | "color";
  readonly sx?: SxProps;
  readonly icon: string;
}

export default function OpenMoji({
  sx,
  variant = "black",
  icon,
}: IOpenMojiComponent) {
  const modifier = variant === "color" ? "-c" : "";
  return (
    <AspectRatio variant="plain" ratio="1/1" sx={sx}>
      <img src={`./mojis/${icon}${modifier}.svg`} width="100" height="100" />
    </AspectRatio>
  );
}
