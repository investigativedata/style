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
import PageMenu, { IPageMenuItem } from "./PageMenu";

interface IHeaderProps {
  readonly homepage?: string;
  readonly color?: ColorPaletteProp;
  readonly fixed?: boolean;
  readonly section?: string;
  readonly drawer?: React.ReactNode;
  readonly pageMenu?: IPageMenuItem[];
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
  fixed = false,
  section,
  drawer,
  pageMenu,
}: IHeaderProps) {
  const usePageMenu = pageMenu && pageMenu.length > 0;
  return (
    <Box
      sx={{
        width: "100%",
        pt: "1.25rem",
        pb: usePageMenu ? 0 : "1.25rem",
        backgroundColor: BACKGROUND_VARS[color],
        position: fixed ? "fixed" : "relative",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: 2,
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
      {usePageMenu && <PageMenu items={pageMenu} />}
    </Box>
  );
}
