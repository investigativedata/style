import type { Meta, StoryObj } from "@storybook/react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";

const ListItems = [1, 2, 3, 4, 5, 6].map((i) => (
  <ListItem>{`I am list item ${i}`}</ListItem>
));

const meta = {
  title: "List",
  component: List,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    marker: "disc",
    children: ListItems,
  },
};

export const OrderedList: Story = {
  args: {
    component: "ol",
    marker: "decimal",
    children: ListItems,
  },
};
