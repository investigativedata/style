import AspectRatio from "@mui/joy/AspectRatio";
import { STROKE_WIDTH_INT } from "../theme/vars";

export default function Burger({
  onClick,
}: {
  onClick?: React.MouseEventHandler;
}) {
  return (
    <AspectRatio
      ratio="65/35"
      style={{ padding: 0, width: "50px", height: "auto" }}
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
      }}
      variant="plain"
      onClick={onClick}
    >
      <svg
        width="65"
        height="35"
        viewBox="0 0 65 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="line">
          <path
            id="Vector"
            d="M2.22217 32.6389H62.7777"
            stroke="#1A1A1A"
            strokeWidth={STROKE_WIDTH_INT}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M2.22217 17.5H62.7777"
            stroke="#1A1A1A"
            strokeWidth={STROKE_WIDTH_INT}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_3"
            d="M2.22217 2.36111H62.7777"
            stroke="#1A1A1A"
            strokeWidth={STROKE_WIDTH_INT}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </AspectRatio>
  );
}
