import AspectRatio from "@mui/joy/AspectRatio";
import { ColorPaletteProp } from "@mui/joy/styles";

export default function ArrowDown({ color }: { color: ColorPaletteProp }) {
  return (
    <AspectRatio style={{ width: "40px", height: "auto" }}>
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            style={{ stroke: color }}
            d="M11.9213 20H9.77843L0.599854 7.82143L3.42128 6.14286L9.957 17.4286L9.13557 0H12.5641L11.7427 17.4286L18.2784 6.14286L21.0999 7.82143L11.9213 20Z"
          ></path>
        </g>
      </svg>
    </AspectRatio>
  );
}
