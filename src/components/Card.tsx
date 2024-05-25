import React from "react";
import MuiCard, { CardProps } from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import Image from "./Image";

interface ICardProps extends CardProps {
  readonly title: string;
  readonly icon?: string;
  readonly action?: React.ReactNode;
}

export default function Card({
  children,
  title,
  icon,
  action,
  ...props
}: React.PropsWithChildren<ICardProps>) {
  return (
    <MuiCard {...props}>
      {icon && <Image src={icon} ratio="1/1" variant="plain" />}
      <Typography level="title-lg" sx={{ pb: 1 }}>
        {title}
      </Typography>
      <CardContent>{children}</CardContent>
      {action && <CardActions>{action}</CardActions>}
    </MuiCard>
  );
}
