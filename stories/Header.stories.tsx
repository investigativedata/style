import type { Meta, StoryObj } from "@storybook/react";

import Header from "../src/components/Header";
import Drawer, { DrawerMenuItem } from "../src/components/Drawer";

const meta = {
  title: "Components/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const WithBreadcrump: Story = { args: { section: "My page" } };

export const WithMenu: Story = {
  args: {
    drawer: (
      <Drawer
        children={[1, 2, 3].map((i) => (
          <DrawerMenuItem key={i} href="#">
            Link {i}
          </DrawerMenuItem>
        ))}
      />
    ),
  },
};

export const WithAnchorMenu: Story = {
  args: {
    pageMenu: [1, 2, 3].map((i) => ({ label: `Anchor ${i}`, href: `#a${i}` })),
  },
};
