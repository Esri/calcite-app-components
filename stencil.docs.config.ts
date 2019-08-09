import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import { sass } from "@stencil/sass";
import autoprefixer from "autoprefixer";

export const config: Config = {
  namespace: "calcite",
  outputTargets: [
    {
      type: "www",
      dir: "docs",
      copy: [{ src: "demos" }],
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: "src/assets/styles/includes.scss",
  plugins: [
    sass({
      injectGlobalPaths: ["src/assets/styles/includes.scss"]
    }),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};
