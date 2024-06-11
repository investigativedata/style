import { useContext } from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { FONT_SIZES, STROKE_WIDTH_INT } from "../theme/vars";
import { PageContext } from "./PageContext";

export interface IPageMenuItem {
  readonly label: string;
  readonly href: string;
}

type E = React.BaseSyntheticEvent<
  MouseEvent,
  EventTarget & HTMLAnchorElement,
  EventTarget
>;

const jumpTo = (e: E, id: string, scrollOffset: number) => {
  if (typeof window !== "undefined") {
    e.preventDefault();
    const el = document.getElementById(id);
    history.replaceState(null, "", `#${id}`);
    el &&
      window.scroll({
        top: el.getBoundingClientRect().top + window.scrollY - scrollOffset,
        behavior: "smooth",
      });
  }
};

export default function PageMenu({
  items,
  scrollOffset = 200,
}: {
  items: IPageMenuItem[];
  scrollOffset?: number;
}) {
  const { currentAnchorId } = useContext(PageContext);

  return (
    <Box
      component="nav"
      aria-label="Page menu"
      sx={{ flexGrow: 1 }}
      borderTop={STROKE_WIDTH_INT}
      borderBottom={STROKE_WIDTH_INT}
      borderColor="text.primary"
      overflow="auto"
    >
      <Container maxWidth="lg">
        <List
          role="menubar"
          orientation="horizontal"
          sx={{ justifyContent: "space-evenly" }}
        >
          {items.map(({ label, href }) => (
            <ListItem key={href} role="none" sx={{ p: "0.8rem 1rem" }}>
              <ListItemButton
                role="menuitem"
                component="a"
                href={href}
                onClick={(e) => jumpTo(e, href.substring(1), scrollOffset)}
                sx={{
                  "--joy-palette-neutral-plainHoverBg": "transparent",
                  "--joy-palette-neutral-plainActiveBg": "transparent",
                  "--joy-palette-primary-plainHoverBg": "transparent",
                  "--joy-palette-primary-plainActiveBg": "transparent",
                  color: "text.primary",
                  lineHeight: "130%",
                  fontSize: FONT_SIZES.md,
                  transition: "font-weight 0.2s",
                  fontWeight:
                    href.substring(1) === currentAnchorId ? "bold" : 500,
                  "&:hover": {
                    fontWeight: "bold",
                  },
                }}
              >
                {label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
}
