import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

import Screen from "../src/sections/Screen";
import MediaScreen from "../src/sections/MediaScreen";
import Header from "../src/components/Header";
import Card from "../src/components/Card";
import Hero from "../src/sections/Hero";

const Page = () => (
  <>
    <Header />
    <Screen background="primary">
      <Typography level="h1">Lorem ipsum</Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sed
        quisquam quae, velit neque laborum, alias inventore in molestiae
        architecto suscipit facere debitis aspernatur quod? Assumenda
        voluptatibus nam consectetur omnis!
      </Typography>
      <Grid container spacing={6} alignItems="stretch">
        <Grid md={4}>
          <Card
            color="danger"
            icon="woman teacher"
            title="Card title"
            sx={{ height: "100%" }}
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card
            color="danger"
            icon="code editor"
            title="Short text"
            sx={{ height: "100%" }}
            action={<Button color="danger">Click here</Button>}
          >
            <Typography>Lorem ipsum dolor sit amet.</Typography>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card
            color="danger"
            icon="forward"
            title="Long text"
            sx={{ height: "100%" }}
          >
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores voluptates, labore repellendus qui reiciendis.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Screen>
    <Screen background="warning">
      <Hero
        topMark="A small top mark"
        title="A very big hero headline"
        teaser="Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae."
        icon="spaghetti"
        action={<Button color="warning">Click here</Button>}
      />
    </Screen>
    <MediaScreen
      credits={
        <>
          Foto: <Link href="https://vicharster.com">Vic Harster</Link>
        </>
      }
    >
      <img src="/img/infra.jpg" />,
    </MediaScreen>
    <Screen background="success">
      <Typography level="h1">Lorem ipsum</Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sed
        quisquam quae, velit neque laborum, alias inventore in molestiae
        architecto suscipit facere debitis aspernatur quod? Assumenda
        voluptatibus nam consectetur omnis!
      </Typography>
    </Screen>
    <Screen background="danger" />
  </>
);

const meta = {
  title: "Examples/Page",
  component: Page,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
