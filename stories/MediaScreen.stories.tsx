import type { Meta, StoryObj } from "@storybook/react";
import Link from "@mui/joy/Link";
import MediaScreen from "../src/sections/MediaScreen";

const meta = {
  title: "Sections/MediaScreen",
  component: MediaScreen,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof MediaScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <img src="./img/infra.jpg" />,
  },
};
