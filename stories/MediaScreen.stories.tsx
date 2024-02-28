import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import MediaScreen from "../src/sections/MediaScreen";
import Link from "@mui/joy/Link";

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
    credits: (
      <>
        Foto: <Link href="https://vicharster.com">Vic Harster</Link>
      </>
    ),
    children: <img src="/img/infra.jpg" />,
  },
};
