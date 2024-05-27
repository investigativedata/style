import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Animation from "../src/components/Animation";

const meta = {
  title: "Components/Animation",
  component: Animation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Box minWidth="600px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Animation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "./animations/investigraph-01.riv",
    height: 800,
    width: 1436,
  },
};

export const WithContent: Story = {
  args: {
    src: "./animations/investigraph-01.riv",
    height: 800,
    width: 1436,
    children: (
      <Typography level="h1" sx={{ textAlign: "center" }}>
        Build and manage
        <br />
        your structured data
        <br />
        for investigative
        <br />
        research projects
      </Typography>
    ),
  },
};
