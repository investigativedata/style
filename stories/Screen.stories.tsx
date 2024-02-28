import type { Meta, StoryObj } from "@storybook/react";

import Screen from "../src/sections/Screen";

const meta = {
  title: "Page/Screen",
  component: Screen,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
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

export const Primary: Story = {
  args: {
    background: "primary",
  },
};
