import type { Meta, StoryObj } from "@storybook/react";

import Screen from "../src/sections/Screen";
import Typography from "@mui/joy/Typography";

const meta = {
  title: "Sections/Screen",
  component: Screen,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Screen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    background: "neutral",
  },
};

export const WithContent: Story = {
  args: {
    children: (
      <Typography>
        Accusamus eaque nostrum et perferendis non totam dolorem ratione. Facere
        voluptas expedita totam nihil. Placeat dolorem molestiae et molestias ut
        suscipit libero esse. Incidunt id harum sunt sit quis autem officiis
        aut. Et consequatur dolores quod sit corrupti.
      </Typography>
    ),
  },
};
