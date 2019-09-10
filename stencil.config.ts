import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import { sass } from "@stencil/sass";
import autoprefixer from "autoprefixer";

// Exclude demo components for production build
const isDevBuild = process.argv.includes("--dev");
const DEFAULT_EXCLUDE_SRC = ["**/tests/**", "**/*example*/**"];
if (!isDevBuild) {
  DEFAULT_EXCLUDE_SRC.push("**/*demo*/**");
}

export const config: Config = {
  namespace: "calcite-app",
  bundles: [
    {
      components: ["calcite-action", "calcite-action-group", "calcite-action-bar", "calcite-action-pad"]
    },
    {
      components: ["calcite-block", "calcite-block-section"]
    },
    {
      components: ["calcite-flow", "calcite-flow-item"]
    },
    {
      components: ["calcite-shell", "calcite-shell-panel", "calcite-shell-floating-panel"]
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
      copy: [{ src: "../demos", dest: "demos" }],
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
    setupFilesAfterEnv: ["<rootDir>/src/tests/setup.js"]
  },
  srcDir: "src/components",
  excludeSrc: DEFAULT_EXCLUDE_SRC,
  srcIndexHtml: "src/index.html"
};
