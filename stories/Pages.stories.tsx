import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import Card from "../src/components/Card";
import CurrentColorProvider from "../src/components/CurrentColorContext";
import Header from "../src/components/Header";
import ScrollContextProvider from "../src/components/ScrollContext";
import Hero from "../src/sections/Hero";
import MediaScreen from "../src/sections/MediaScreen";
import Screen from "../src/sections/Screen";
import { MARGINS } from "../src/theme/vars";

const Page = () => (
  <ScrollContextProvider>
    <CurrentColorProvider>
      <Header
        fixed
        section="Section"
        pageMenu={[1, 2, 3].map((i) => ({
          label: `Anchor ${i}`,
          href: `#a${i}`,
        }))}
      />
      <main style={{ paddingTop: "150px" }}>
        <Screen background="primary" changeBackgroundOnScroll>
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
        <Screen background="warning" changeBackgroundOnScroll>
          <Typography level="h1" marginBottom={MARGINS.md}>
            A big section title
          </Typography>
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
        <Screen background="success" changeBackgroundOnScroll>
          <Typography level="h1">Lorem ipsum</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sed
            quisquam quae, velit neque laborum, alias inventore in molestiae
            architecto suscipit facere debitis aspernatur quod? Assumenda
            voluptatibus nam consectetur omnis!
          </Typography>
        </Screen>
        <Screen background="danger" changeBackgroundOnScroll />
      </main>
    </CurrentColorProvider>
  </ScrollContextProvider>
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
