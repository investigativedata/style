import type { Meta, StoryObj } from "@storybook/react";

import PageMenu from "../src/components/PageMenu";

const meta = {
  title: "Components/PageMenu",
  component: PageMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof PageMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Anchor 1", href: "#anchor1" },
      { label: "Anchor 2", href: "#anchor2" },
      { label: "Anchor 3", href: "#anchor3" },
    ],
  },
};
