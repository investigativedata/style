import AspectRatio from "@mui/joy/AspectRatio";

export default function Burger({
  onClick,
}: {
  onClick?: React.MouseEventHandler;
}) {
  return (
    <AspectRatio
      ratio="65/35"
      style={{ width: "113px", height: "35px" }}
      sx={{
        p: "0 24px",
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
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M2.22217 17.5H62.7777"
            stroke="#1A1A1A"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M2.22217 2.36111H62.7777"
            stroke="#1A1A1A"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </AspectRatio>
  );
}
