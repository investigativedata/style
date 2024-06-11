import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PageContextProvider from "../src/components/PageContext";
import Screen from "../src/sections/Screen";

const ScreenBorder = ({ children }: React.PropsWithChildren) => {
  return <div style={{ border: "3px solid black" }}>{children}</div>;
};

const Screens = ({
  changeBackgroundOnScroll = false,
}: {
  changeBackgroundOnScroll?: boolean;
}) => (
  <PageContextProvider>
    <ScreenBorder>
      <Screen
        changeBackgroundOnScroll={changeBackgroundOnScroll}
        background="primary"
      >
        primary
      </Screen>
    </ScreenBorder>
    <ScreenBorder>
      <Screen
        changeBackgroundOnScroll={changeBackgroundOnScroll}
        fullHeight={false}
        background="warning"
      >
        warning
      </Screen>
    </ScreenBorder>
    <ScreenBorder>
      <Screen
        changeBackgroundOnScroll={changeBackgroundOnScroll}
        sx={{ height: "200vw" }}
        background="danger"
      >
        danger
      </Screen>
    </ScreenBorder>
    <ScreenBorder>
      <Screen
        changeBackgroundOnScroll={changeBackgroundOnScroll}
        background="success"
      >
        success
      </Screen>
    </ScreenBorder>
  </PageContextProvider>
);

const meta = {
  title: "Examples/Screens",
  component: Screens,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Screens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ScrollBackground: Story = {
  args: { changeBackgroundOnScroll: true },
};
