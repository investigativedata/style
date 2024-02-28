import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { ColorPaletteProp } from "@mui/joy/styles";
import Logo, { TLogoColor, TLogoVariant } from "./Logo";
import ArrowDown from "./ArrowDown";
import { BACKGROUND_VARS } from "../theme/colors";

interface IHeaderProps {
  readonly homepage?: string;
  readonly color?: ColorPaletteProp;
  readonly logoColor?: TLogoColor;
  readonly logoVariant?: TLogoVariant;
}

interface IStackItem {
  readonly justifyContent: "left" | "right" | "center";
}

const StackItem = ({
  children,
  justifyContent,
}: React.PropsWithChildren<IStackItem>) => (
  <Box sx={{ width: "33.3%", display: "flex", justifyContent }}>{children}</Box>
);

export default function Header({
  color = "neutral",
  logoColor,
  logoVariant,
  homepage = "investigativedata.io",
}: IHeaderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        pt: "1.25rem",
        pb: "1.25rem",
        backgroundColor: BACKGROUND_VARS[color],
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <StackItem justifyContent="left">
            <Typography level="h3" sx={{ fs: "1.3125rem", p: 0 }}>
              <Link
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "none" },
                }}
                href="/"
              >
                {homepage}
              </Link>
            </Typography>
          </StackItem>
          <StackItem justifyContent="center">
            <Logo color={logoColor} variant={logoVariant} />
          </StackItem>
          <StackItem justifyContent="right">
            <ArrowDown color={color} />
          </StackItem>
        </Stack>
      </Container>
    </Box>
  );
}
