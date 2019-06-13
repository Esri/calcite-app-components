import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import { sass } from "@stencil/sass";
import autoprefixer from "autoprefixer";

export const config: Config = {
  namespace: "calcite",
  bundles: [
    {
      components: [
        "calcite-action",
        "calcite-action-group",
        "calcite-action-bar",
        "calcite-action-pad",
        "calcite-flow",
        "calcite-flow-panel"
      ]
    }
  ],
  outputTargets: [
    { type: "dist" },
    { type: "docs-readme" },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: "src/assets/styles/includes.scss",
  plugins: [
    sass({
      injectGlobalPaths: ["src/assets/styles/includes.scss"]
    }),

    // drop any type when https://github.com/ionic-team/stencil-postcss/pull/16 lands
    (postcss as any)({
      plugins: [autoprefixer()]
    })
  ]
};
