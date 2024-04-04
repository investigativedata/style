import type { Meta, StoryObj } from "@storybook/react";

import Card from "../src/components/Card";
import Typography from "@mui/joy/Typography";

const ExampleContent = () => (
  <Typography>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Typography>
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Card",
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   color: ColorPaletteProp,
  // },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card title",
    children: <ExampleContent />,
  },
};

export const WithIcon: Story = {
  args: {
    icon: "woman raising hand",
    title: "Card title",
    children: <ExampleContent />,
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    title: "Card title",
    children: <ExampleContent />,
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
    title: "Card title",
    children: <ExampleContent />,
  },
};

export const Success: Story = {
  args: {
    color: "success",
    title: "Card title",
    children: <ExampleContent />,
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    title: "Card title",
    children: <ExampleContent />,
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    title: "Card title",
    children: <ExampleContent />,
  },
};
