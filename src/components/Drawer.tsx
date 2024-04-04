import React from "react";
import Button, { ButtonProps } from "@mui/joy/Button";
import MuiDrawer from "@mui/joy/Drawer";
import DialogContent from "@mui/joy/DialogContent";
import DialogTitle from "@mui/joy/DialogTitle";
import ModalClose from "@mui/joy/ModalClose";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import Link, { LinkProps } from "@mui/joy/Link";
import { BLACK } from "../theme/colors";
import { SxProps } from "@mui/joy/styles/types";

interface IDrawer {
  readonly anchor?: "bottom" | "left" | "right" | "top";
  readonly openIcon?: React.ReactNode;
  readonly iconButtonProps?: IconButtonProps;
  readonly buttonContent?: React.ReactNode;
  readonly buttonProps?: ButtonProps;
  readonly title?: string;
}

export default function Drawer({
  children,
  anchor = "left",
  title,
  buttonContent,
  buttonProps = {},
  iconButtonProps = {},
  openIcon,
}: React.PropsWithChildren<IDrawer>) {
  const [open, setOpen] = React.useState(false);
  buttonProps.onClick = () => setOpen(true);
  iconButtonProps.onClick = () => setOpen(true);
  const ButtonComponent = () =>
    openIcon ? (
      <IconButton {...iconButtonProps}>{openIcon}</IconButton>
    ) : (
      <Button {...buttonProps}>{buttonContent}</Button>
    );
  return (
    <>
      <ButtonComponent />
      <MuiDrawer open={open} onClose={() => setOpen(false)} anchor={anchor}>
        <ModalClose />
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>{children}</DialogContent>
      </MuiDrawer>
    </>
  );
}

const LinkSX: SxProps = {
  color: BLACK,
  fontSize: "2.5rem",
  fontWeight: 500,
  lineHeight: "130%",
  mb: "4rem",
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
