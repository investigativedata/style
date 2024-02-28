import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Typography from "@mui/joy/Typography";

const Headlines = [1, 2, 3, 4, 5, 6].map(
  (i) => `This is a headline level ${i}`
);

const Paragraph = `
    Doloribus voluptas qui quisquam vel laudantium est. Possimus iste
    repellendus quis excepturi voluptas ab. Autem facilis dolor quia nemo. Sequi
    ut est reprehenderit sed dolorum. Saepe labore aliquid perferendis in.
`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Typography",
  component: Typography,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: Paragraph,
  },
};

export const H1: Story = {
  args: {
    level: "h1",
    children: Headlines[0],
  },
};

export const H2: Story = {
  args: {
    level: "h2",
    children: Headlines[1],
  },
};

export const H3: Story = {
  args: {
    level: "h3",
    children: Headlines[2],
  },
};

export const Teaser: Story = {
  args: {
    level: "body-lg",
    children: Paragraph,
  },
};

export const BodyMD: Story = {
  args: {
    level: "body-md",
    children: Paragraph,
  },
};

export const BodySM: Story = {
  args: {
    level: "body-sm",
    children: Paragraph,
  },
};
