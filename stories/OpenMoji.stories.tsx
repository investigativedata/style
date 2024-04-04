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
    icon: "person-trump",
  },
};

export const SXProps: Story = {
  args: {
    icon: "person-trump",
    sx: { padding: 10 },
  },
};
