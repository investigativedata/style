import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { OrderedListItem, UnorderedListItem } from "../src/components/ListItem";

const ListItems = [1, 2, 3, 4, 5, 6].map((i) => (
  <ListItem>{`I am list item ${i}`}</ListItem>
));

const OrderedListItems = [1, 2, 3, 4, 5, 6].map((i) => (
  <OrderedListItem ix={i}>
    {`I am list item ${i}`}
    {i === 3 && " Some more long text for this multi-line list item"}
  </OrderedListItem>
));

const UnorderedListItems = [1, 2, 3, 4, 5, 6].map((i) => (
  <UnorderedListItem>
    {`I am list item ${i}`}
    {i === 3 && " Some more long text for this multi-line list item"}
  </UnorderedListItem>
));

const meta = {
  title: "Components/List",
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

export const StyledUnorderedList: Story = {
  args: {
    children: UnorderedListItems,
  },
};

export const StyledOrderedList: Story = {
  args: {
    component: "ol",
    children: OrderedListItems,
  },
};
