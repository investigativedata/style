import type { Meta, StoryObj } from "@storybook/react";
import MenuIcon from "@mui/icons-material/Menu";

import Drawer, { DrawerMenuItem } from "../src/components/Drawer";

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonContent: "open",
    children: "Drawer content",
  },
};

export const WithTitle: Story = {
  args: {
    buttonContent: "open",
    title: "Drawer title",
    children: "Drawer content",
  },
};

export const ButtonCustomization: Story = {
  args: {
    openIcon: <MenuIcon />,
    anchor: "right",
  },
};

export const WithMenu: Story = {
  args: {
    openIcon: <MenuIcon />,
    anchor: "right",
    children: [1, 2, 3].map((i) => (
      <DrawerMenuItem key={i} href="#">
        Link {i}
      </DrawerMenuItem>
    )),
  },
};
