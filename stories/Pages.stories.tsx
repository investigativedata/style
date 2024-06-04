import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Card from "../src/components/Card";
import Header from "../src/components/Header";
import HeaderContext from "../src/components/HeaderContext";
import Hero from "../src/sections/Hero";
import MediaScreen from "../src/sections/MediaScreen";
import Screen from "../src/sections/Screen";

const Page = () => (
  <>
    <HeaderContext>
      <Header
        fixed
        pageMenu={[1, 2, 3].map((i) => ({
          label: `Anchor ${i}`,
          href: `#a${i}`,
        }))}
      />
    </HeaderContext>
    <main style={{ paddingTop: "150px" }}>
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
              icon="./mojis/person-trump.svg"
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
              icon="./mojis/person-trump.svg"
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
              icon="./mojis/person-trump.svg"
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
        <Typography level="h1">A big section title</Typography>
        <Hero
          tagLine="A small top mark"
          title="A very big hero headline"
          teaser="Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae."
          mediaSrc="./img/infra.jpg"
          mediaBorder={true}
          mediaRight={true}
          action={<Button color="warning">Click here</Button>}
        />
        <Hero
          tagLine="A small top mark"
          title="A very big hero headline"
          teaser="Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae."
          mediaSrc="./img/infra.jpg"
          mediaBorder={true}
          action={<Button color="warning">Click here</Button>}
        />
      </Screen>
      <MediaScreen>
        <img src="./img/infra.jpg" />,
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
    </main>
  </>
);

const meta = {
  title: "Examples/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
