import type { Meta, StoryObj } from "@storybook/react";

import AnimatedLogo from "../src/components/AnimatedLogo";

const meta = {
  title: "Atoms/AnimatedLogo",
  component: AnimatedLogo,
  tags: ["autodocs"],
} satisfies Meta<typeof AnimatedLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
