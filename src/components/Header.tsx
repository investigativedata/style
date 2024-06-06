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
import { HeaderScrollContext } from "./HeaderContext";
import PageMenu, { IPageMenuItem } from "./PageMenu";

interface IHeaderProps {
  readonly homepage?: string;
  readonly color?: ColorPaletteProp;
  readonly fixed?: boolean;
  readonly section?: string;
  readonly drawer?: React.ReactNode;
  readonly pageMenu?: IPageMenuItem[];
  readonly sx?: SxProps;
  readonly collapsed?: boolean;
}

// FIXME find right type for responsive style object
interface IStackItem extends BoxProps {
  readonly hide?: boolean;
}

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
  const isCollapsed = collapsed || useContext(HeaderScrollContext);
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        pt: isCollapsed ? "0.8rem" : "1rem",
        pb: usePageMenu ? 0 : isCollapsed ? "0.8rem" : "1rem",
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
          flexWrap={{ xs: "wrap", sm: "nowrap" }}
          spacing={2}
          height={isCollapsed ? "auto" : "90px"}
        >
          <StackItem
            justifyContent="left"
            width={{ xs: isCollapsed ? "50%" : "100%", sm: "auto" }}
            // margin={{
            //   xs: "0 0 1rem 0 !important",
            //   sm: "0 1rem 0 0 !important",
            // }}
          >
            <Typography
              level="h3"
              sx={{
                fs: "1rem",
                p: 0,
                m: 0,
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
              {section && (
                <Typography
                  component="strong"
                  fontWeight={700}
                  display={{ xs: "block", sm: "inline" }}
                >
                  {" "}
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
      {usePageMenu && <PageMenu items={pageMenu} />}
    </Box>
  );
}
