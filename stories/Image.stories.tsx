import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/joy/Box";
import Image from "../src/components/Image";

const meta = {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box sx={{ width: "400px", display: "block" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "./img/infra.jpg",
  },
};

export const OpenMoji: Story = {
  args: {
    variant: "plain",
    ratio: "1/1",
    src: "./mojis/person-trump.svg",
  },
};

export const SXProps: Story = {
  args: {
    variant: "plain",
    ratio: "1/1",
    src: "./mojis/person-trump.svg",
    sx: { padding: 10 },
  },
};
