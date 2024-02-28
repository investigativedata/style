import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/joy/Box";

import OpenMoji from "../src/components/OpenMoji";

const meta = {
  title: "Atoms/OpenMoji",
  component: OpenMoji,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box sx={{ width: "200px", display: "block" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof OpenMoji>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "woman raising hand",
  },
};

export const SXProps: Story = {
  args: {
    icon: "woman raising hand",
    sx: { padding: 10 },
  },
};
