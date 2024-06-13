import React from "react";
import MuiCard, { CardProps } from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "./Image";

export interface ICard extends CardProps {
  readonly title?: string;
  readonly icon?: string;
  readonly action?: React.ReactNode;
}

export default function Card({
  children,
  title,
  icon,
  action,
  ...props
}: React.PropsWithChildren<ICard>) {
  return (
    <MuiCard {...props}>
      {icon && <Image src={icon} ratio="1/1" variant="plain" />}
      {title && (
        <Typography level="title-lg" sx={{ pb: 1 }}>
          {title}
        </Typography>
      )}
      <CardContent sx={{ width: "100%" }}>{children}</CardContent>
      {action && (
        <CardActions
          sx={{
            alignItems: "flex-start",
            "& > *": { flex: "inherit !important" },
          }}
        >
          {action}
        </CardActions>
      )}
    </MuiCard>
  );
}
