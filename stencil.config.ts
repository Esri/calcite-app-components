import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "calcite",
  bundles: [
    {
      components: [
        "calcite-action",
        "calcite-action-group",
        "calcite-action-bar",
        "calcite-action-pad",
        "calcite-flow-control",
        "calcite-flow-panel"
      ]
    }
  ],
  outputTargets: [
    { type: "dist" },
    // { type: "docs-readme" },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: "src/assets/styles/includes.scss",
  plugins: [
    sass({
      injectGlobalPaths: ["src/assets/styles/includes.scss"]
    })
  ]
};
