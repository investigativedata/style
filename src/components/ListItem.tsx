import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { BLACK } from "../theme/colors";

const Checkmark = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M61.4999 23.3001L53.4869 15.2871L27.7769 40.9971L18.5169 31.7371L10.5039 39.7501L27.9239 57.1901L61.4999 23.3001Z"
      fill="white"
    />
    <path
      d="M10.5 39.7599L27.92 57.1999L61.5 23.3099L53.487 15.2969L27.777 41.0069L18.517 31.7469L10.5 39.7599Z"
      stroke="#1A1A1A"
      strokeWidth="4"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface IOrderedListItemProps {
  readonly ix: number;
}

const CircleNumber = ({ ix }: { ix: number }) => (
  <span
    style={{
      border: `3px solid ${BLACK}`,
      borderRadius: "100%",
      width: "2.8rem",
      height: "2.8rem",
      // width: "clamp(2rem, 7vw, 2.8rem)",
      // height: "clamp(2rem, 7vw, 2.8rem)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    {ix}
  </span>
);

export function UnorderedListItem(props: React.PropsWithChildren) {
  return (
    <ListItem {...props} sx={{ gap: "1.6rem" }}>
      <ListItemDecorator sx={{ flex: "0 0 3.2rem", alignContent: "center" }}>
        <Checkmark />
      </ListItemDecorator>
      <ListItemContent>{props.children}</ListItemContent>
    </ListItem>
  );
}

export function OrderedListItem(
  props: React.PropsWithChildren<IOrderedListItemProps>,
) {
  return (
    <ListItem {...props} sx={{ gap: "1.6rem" }}>
      <ListItemDecorator sx={{ flex: "0 0 3.2rem" }}>
        <CircleNumber ix={props.ix} />
      </ListItemDecorator>
      <ListItemContent>{props.children}</ListItemContent>
    </ListItem>
  );
}
