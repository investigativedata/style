// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    typescript(),
    getBabelOutputPlugin({
      presets: ["@babel/preset-env"],
    }),
  ],
};
