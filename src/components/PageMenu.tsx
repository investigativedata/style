import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { FONT_SIZES, STROKE_WIDTH_INT } from "../theme/vars";

export interface IPageMenuItem {
  readonly label: string;
  readonly href: string;
}

export default function PageMenu({ items }: { items: IPageMenuItem[] }) {
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
                sx={{
                  "--joy-palette-neutral-plainHoverBg": "transparent",
                  "--joy-palette-neutral-plainActiveBg": "transparent",
                  "--joy-palette-primary-plainHoverBg": "transparent",
                  "--joy-palette-primary-plainActiveBg": "transparent",
                  color: "text.primary",
                  lineHeight: "130%",
                  fontSize: FONT_SIZES.md,
                  "&:hover": {
                    fontWeight: "bold",
                    transition: "font-weight 0.2s",
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
