import React from "react";
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
  title: "Page/Screens",
  component: Screens,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Screens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
