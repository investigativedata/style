import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

const meta = {
  title: "Atoms/Breadcrumb",
  component: Breadcrumbs,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Link href="#">Home</Link>,
      <Link href="#">Category</Link>,
      <Typography>Page</Typography>,
    ],
  },
};
