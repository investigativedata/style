import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { ColorPaletteProp } from "@mui/joy/styles";
import { BACKGROUND_VARS } from "../theme/colors";
import AnimatedLogo from "./AnimatedLogo";
import Burger from "./Burger";

interface IHeaderProps {
  readonly homepage?: string;
  readonly color?: ColorPaletteProp;
  readonly section?: string;
  readonly drawer?: React.ReactNode;
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
  homepage = "investigativedata.io",
  section,
  drawer,
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
          height="110px"
        >
          <StackItem justifyContent="left">
            <Typography
              level="h3"
              sx={{
                fs: "1.3125rem",
                p: 0,
              }}
              fontWeight={section ? 400 : 700}
            >
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
              {section && <strong> {section}</strong>}
            </Typography>
          </StackItem>
          <StackItem justifyContent="center">
            <AnimatedLogo />
          </StackItem>
          <StackItem justifyContent="right">{drawer || <Burger />}</StackItem>
        </Stack>
      </Container>
    </Box>
  );
}
