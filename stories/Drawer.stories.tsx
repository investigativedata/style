import type { Meta, StoryObj } from "@storybook/react";

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
    children: "Drawer content",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Drawer title",
    children: "Drawer content",
  },
};

export const WithLeftMenu: Story = {
  args: {
    anchor: "left",
    children: [1, 2, 3].map((i) => (
      <DrawerMenuItem key={i} href="#">
        Link {i}
      </DrawerMenuItem>
    )),
  },
};
