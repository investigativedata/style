import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "@mui/joy/Button";
import Container from "@mui/joy/Container";
import AspectRatio from "@mui/joy/AspectRatio";

import { MediaHero } from "../src/sections/Hero";

const meta = {
  title: "Components/MediaHero",
  component: MediaHero,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container maxWidth="xl">
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof MediaHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    topMark: "A small top mark",
    title: "A big headline for this hero",
    teaser:
      "Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae.",
    mediaComponent: (
      <AspectRatio>
        <img src="./img/infra.jpg" />
      </AspectRatio>
    ),
    action: <Button>Click here</Button>,
  },
};

export const MediaRight: Story = {
  args: {
    title: "Media on the right side",
    teaser:
      "Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae.",
    mediaComponent: (
      <AspectRatio>
        <img src="./img/infra.jpg" />
      </AspectRatio>
    ),
    mediaRight: true,
  },
};
