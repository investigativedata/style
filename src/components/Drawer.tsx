import React from "react";
import MuiDrawer from "@mui/joy/Drawer";
import DialogContent from "@mui/joy/DialogContent";
import DialogTitle from "@mui/joy/DialogTitle";
import ModalClose from "@mui/joy/ModalClose";
import Link, { LinkProps } from "@mui/joy/Link";
import { BLACK } from "../theme/colors";
import { SxProps } from "@mui/joy/styles/types";
import Burger from "./Burger";
import { FONT_SIZES } from "../theme/components";

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
  mb: "3rem",
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
