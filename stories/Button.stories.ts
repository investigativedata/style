import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "@mui/joy/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<ButtonProps> = {
  title: "Atoms/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Button text",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Button text",
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
    children: "Button text",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    children: "Button text",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    children: "Button text",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    children: "Button text",
  },
};
