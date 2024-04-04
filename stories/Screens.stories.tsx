import type { Meta, StoryObj } from "@storybook/react";

import Screen from "../src/sections/Screen";

const Screens = () => (
  <>
    <Screen background="primary" />
    <Screen background="warning" />
    <Screen background="success" />
  </>
);

const meta = {
  title: "Examples/Screens",
  component: Screens,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Screens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
