import type { Meta, StoryObj } from "@storybook/react";

import Screen from "../src/sections/Screen";

const meta = {
  title: "Sections/Screen",
  component: Screen,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Screen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    background: "neutral",
  },
};
