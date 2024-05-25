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
      <Hero
        tagLine="A small top mark"
        title="A very big hero headline"
        teaser="Sunt aut aspernatur ut eum quae dolore quidem. Id ipsam temporibus recusandae."
        mediaSrc="./img/infra.jpg"
        mediaBorder={true}
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
