import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";

import Hero from "../src/sections/Hero";
import Link from "@mui/joy/Link";

const meta = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container maxWidth="xl">
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    topMark: "A small top mark",
    title: "A big headline for this hero",
    teaser:
      "Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae.",
    icon: "gear",
    action: <Button>Click here</Button>,
  },
};

export const IconRight: Story = {
  args: {
    title: "Icon on the right side",
    teaser:
      "Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae.",
    icon: "gear",
    iconRight: true,
  },
};

export const NoTeaser: Story = {
  args: {
    title: "This is a hero with only a headline and an OpenMoji logo.",
    icon: "teacher",
  },
};

export const NoTitle: Story = {
  args: {
    teaser: (
      <>
        This is a hero with <strong>only</strong> a teaser description that
        accepts <em>formatting</em> or even a <Link href="">link</Link> and an
        OpenMoji logo.
      </>
    ),
    icon: "teacher",
  },
};

export const NoIcon: Story = {
  args: {
    title: "No icon here",
    teaser: (
      <>
        This is a hero <strong>without an icon</strong> but a teaser description
        that accepts <em>formatting</em> or even a <Link href="">link</Link>.
      </>
    ),
  },
};
