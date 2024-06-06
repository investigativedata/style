import type { Meta, StoryObj } from "@storybook/react";
import Burger from "../src/components/Burger";

const meta = {
  title: "Atoms/Burger",
  component: Burger,
  tags: ["autodocs"],
} satisfies Meta<typeof Burger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
