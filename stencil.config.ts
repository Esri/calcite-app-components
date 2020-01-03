import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import { sass } from "@stencil/sass";
import autoprefixer from "autoprefixer";

const DEFAULT_EXCLUDE_SRC = ["**/*.stories.ts", "**/tests/**"];

export const create: () => Config = () => ({
  namespace: "calcite-app",
  bundles: [
    {
      components: ["calcite-action", "calcite-action-group", "calcite-action-bar", "calcite-action-pad"]
    },
    {
      components: ["calcite-block", "calcite-block-section"]
    },
    {
      components: ["calcite-panel", "calcite-flow", "calcite-flow-item"]
    },
    {
      components: ["calcite-shell", "calcite-shell-panel"]
    },
    {
      components: ["calcite-tip", "calcite-tip-group", "calcite-tip-manager"]
    }
  ],
  outputTargets: [
    { type: "dist" },
    { type: "docs-readme" },
    {
      type: "www",
      copy: [
        { src: "../demos", dest: "demos" },
        {
          src: "../../node_modules/@esri/calcite-components/dist/calcite",
          dest: "vendor/@esri/calcite-components"
        }
      ],
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
  ],
  testing: {
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"]
  },
  srcDir: "src/components",
  excludeSrc: DEFAULT_EXCLUDE_SRC,
  srcIndexHtml: "src/index.html"
});

export const config = create();
