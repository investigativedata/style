import React from "react";
import { SxProps } from "@mui/joy/styles/types";
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
  readonly sx?: SxProps;
}

// FIXME find right type for responsive style object
interface IStackItem {
  readonly width?: any;
  readonly margin?: any;
  readonly height?: any;
  readonly justifyContent: "left" | "right" | "center";
}

const StackItem = ({
  children,
  justifyContent,
  ...props
}: React.PropsWithChildren<IStackItem>) => (
  <Box sx={{ display: "flex", justifyContent }} {...props}>{children}</Box>
);

export default function Header({
  color = "neutral",
  homepage = "investigativedata.io",
  fixed = false,
  section,
  drawer,
  pageMenu,
  sx = {},
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
        ...sx,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
          spacing={2}
          height="110px"
        >
          <StackItem
            justifyContent="left"
            width={{ xs: '100%', sm: 'auto' }}
            margin={{ xs: '0 0 1rem 0 !important', sm: '0 1rem 0 0 !important' }}
          >
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
          <StackItem
            justifyContent="center"
            width={{ xs: '50%', sm: 'auto' }}
            margin={{ xs: '0 !important', sm: '0 0 0 1rem !important' }}
          >
            <AnimatedLogo />
          </StackItem>
          <StackItem
            justifyContent="right"
            width={{ xs: 45, sm: 65 }}
            height={{ xs: 25, sm: 35 }}
          >{drawer || <Burger />}</StackItem>
        </Stack>
      </Container>
      {usePageMenu && <PageMenu items={pageMenu} />}
    </Box>
  );
}
