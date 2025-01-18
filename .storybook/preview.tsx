import React from "react";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import type { Preview } from "@storybook/react";
import theme from "../src/theme";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      // expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <Story />
      </CssVarsProvider>
    ),
  ],
};

export default preview;
