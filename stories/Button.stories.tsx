import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./MuiComponents";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button text",
  },
};
