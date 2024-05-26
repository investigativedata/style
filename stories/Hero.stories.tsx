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
    tagLine: "A small tagline",
    title: "A big headline for this hero",
    teaser:
      "Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae.",
    mediaSrc: "./mojis/person-trump.svg",
    mediaRatio: "1/1",
    action: <Button>Click here</Button>,
  },
};

export const TitleLevelH1: Story = {
  args: {
    tagLine: "A small tagline",
    title: "A very big headline for this hero",
    titleLevel: "h1",
    teaser:
      "Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae.",
    mediaSrc: "./mojis/person-trump.svg",
    mediaRatio: "1/1",
    action: <Button>Click here</Button>,
  },
};

export const IconRight: Story = {
  args: {
    title: "Icon on the right side",
    teaser:
      "Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae.",
    mediaSrc: "./mojis/person-trump.svg",
    mediaRatio: "1/1",
    mediaRight: true,
  },
};

export const ImageRight: Story = {
  args: {
    title: "Image on the right side",
    teaser:
      "Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae.",
    mediaSrc: "./img/infra.jpg",
    mediaBorder: true,
    mediaRight: true,
  },
};

export const NoTeaser: Story = {
  args: {
    title: "This is a hero with only a headline and an OpenMoji logo.",
    mediaSrc: "./mojis/person-trump.svg",
    mediaRatio: "1/1",
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
    mediaSrc: "./mojis/person-trump.svg",
    mediaRatio: "1/1",
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
