import React from "react";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import type { Preview } from "@storybook/react";
import theme from "../src/theme";
import { BackgroundsStyles } from '../src/components/BackgroundsStyles';

const preview: Preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
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
        <BackgroundsStyles />
        <Story />
      </CssVarsProvider>
    ),
  ],
};

export default preview;
