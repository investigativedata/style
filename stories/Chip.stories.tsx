import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "./MuiComponents";

const meta = {
  title: "Atoms/Chip",
  component: Chip,
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Chip text",
  },
};
