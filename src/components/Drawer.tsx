import React from "react";
import { SxProps } from "@mui/joy/styles/types";
import DialogContent from "@mui/joy/DialogContent";
import DialogTitle from "@mui/joy/DialogTitle";
import MuiDrawer from "@mui/joy/Drawer";
import Link, { LinkProps } from "@mui/joy/Link";
import ModalClose from "@mui/joy/ModalClose";
import { BLACK } from "../theme/colors";
import { FONT_SIZES } from "../theme/vars";
import Burger from "./Burger";

interface IDrawer {
  readonly anchor?: "bottom" | "left" | "right" | "top";
  readonly title?: string;
}

export default function Drawer({
  children,
  anchor,
  title,
}: React.PropsWithChildren<IDrawer>) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Burger onClick={() => setOpen(true)} />
      <MuiDrawer open={open} onClose={() => setOpen(false)} anchor={anchor}>
        <ModalClose />
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent sx={{ alignItems: "start" }}>{children}</DialogContent>
      </MuiDrawer>
    </>
  );
}

const LinkSX: SxProps = {
  color: BLACK,
  fontSize: FONT_SIZES.lg,
  fontWeight: 500,
  lineHeight: "130%",
  mb: "clamp(1.4rem, 7vw, 2.4rem)",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
};

export function DrawerMenuItem({
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) {
  return (
    <Link {...props} sx={LinkSX}>
      {children}
    </Link>
  );
}
