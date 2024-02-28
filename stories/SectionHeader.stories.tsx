import type { Meta, StoryObj } from "@storybook/react";

import SectionHeader from "../src/components/SectionHeader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/SectionHeader",
  component: SectionHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: "Headline of the section",
    topMark: "A small top mark"
  },
};

export const WithoutTop: Story = {
  args: {
    title: "Headline of the section",
  },
};
