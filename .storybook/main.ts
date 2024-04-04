import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../static"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  docs: {
    autodocs: "tag",
  },
  // typescript: {
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     // Speeds up Storybook build time
  //     compilerOptions: {
  //       allowSyntheticDefaultImports: false,
  //       esModuleInterop: false,
  //     },
  //     // Makes union prop types like variant and size appear as select controls
  //     shouldExtractLiteralValuesFromEnum: true,
  //     // Makes string and boolean types that can be undefined appear as inputs and switches
  //     shouldRemoveUndefinedFromOptional: true,
  //     // Filter out third-party props from node_modules except @mui packages
  //     // propFilter: (prop) =>
  //     //   prop.parent
  //     //     ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
  //     //     : true,
  //   },
  // },
};
export default config;
