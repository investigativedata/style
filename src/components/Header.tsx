import React, { useContext } from "react";
import { SxProps } from "@mui/joy/styles/types";
import Box, { BoxProps } from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { ColorPaletteProp } from "@mui/joy/styles";
import { BACKGROUND_VARS } from "../theme/colors";
import AnimatedLogo from "./AnimatedLogo";
import Burger from "./Burger";
import { PageContext } from "./PageContext";
import PageMenu, { IPageMenuItem } from "./PageMenu";

interface IHeaderProps {
  readonly homepage?: string;
  readonly color?: ColorPaletteProp | "inherit";
  readonly fixed?: boolean;
  readonly section?: string;
  readonly drawer?: React.ReactNode;
  readonly pageMenu?: IPageMenuItem[];
  readonly sx?: SxProps;
  readonly collapsed?: boolean;
}

interface IStackItem extends BoxProps {
  readonly hide?: boolean;
}

const HIDE_MOBILE = { display: { xs: "none", md: "inherit" } };

const StackItem = ({
  children,
  justifyContent,
  hide,
  ...props
}: React.PropsWithChildren<IStackItem>) => (
  <Box
    sx={{ display: hide ? "none" : "flex", justifyContent }}
    alignItems="center"
    {...props}
  >
    {children}
  </Box>
);

export default function Header({
  color = "neutral",
  homepage = "investigativedata.io",
  fixed = false,
  section,
  drawer,
  pageMenu,
  collapsed = false,
  sx = {},
}: IHeaderProps) {
  const usePageMenu = pageMenu && pageMenu.length > 0;
  const { headerCollapsed } = useContext(PageContext);
  const isCollapsed = collapsed || headerCollapsed;

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        pt: { xs: "0.8rem", md: isCollapsed ? "0.8rem" : "1rem" },
        pb: { xs: "0.8rem", md: 0 },
        backgroundColor: BACKGROUND_VARS[color] || "inherit",
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
          flexWrap={{ xs: "wrap", sm: "nowrap" }}
          spacing={2}
          height={{ xs: "auto", md: isCollapsed ? "auto" : "90px" }}
        >
          <StackItem
            justifyContent="left"
            width={{ xs: isCollapsed ? "50%" : "100%", sm: "auto" }}
          >
            <Typography
              level="h3"
              sx={{
                fontSize: "1rem",
                p: 0,
                m: 0,
                ...HIDE_MOBILE,
              }}
              fontWeight={section ? 500 : 700}
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
              {section && (
                <Typography
                  component="strong"
                  fontWeight={700}
                  display={{ xs: "block", sm: "inline" }}
                  marginLeft={{ md: "0.3rem" }}
                >
                  {section}
                </Typography>
              )}
            </Typography>
          </StackItem>
          <StackItem
            justifyContent="center"
            hide={isCollapsed}
            width={{ xs: "50%", sm: "auto" }}
            margin={{ xs: "0 !important", sm: "0 0 0 1rem !important" }}
          >
            <AnimatedLogo />
          </StackItem>
          <StackItem
            justifyContent="right"
            width={{ xs: 45, sm: 65 }}
            height={{ xs: 25, sm: 35 }}
          >
            {drawer || <Burger />}
          </StackItem>
        </Stack>
      </Container>
      <Box sx={HIDE_MOBILE}>{usePageMenu && <PageMenu items={pageMenu} />}</Box>
    </Box>
  );
}
