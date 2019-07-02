import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import { sass } from "@stencil/sass";
import autoprefixer from "autoprefixer";
import minimist from "minimist";

const headlessMode = process.env.PUPPETEER_HEADLESS !== "false";
console.log("headlessMode", headlessMode);
const argv = minimist(process.argv.slice(2));
console.dir(argv);

export const config: Config = {
  namespace: "calcite",
  bundles: [
    {
      components: ["calcite-action", "calcite-action-group", "calcite-action-bar", "calcite-action-pad"]
    }
  ],
  outputTargets: [
    { type: "dist" },
    { type: "docs-readme" },
    {
      type: "www",
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
  ],
  testing: {
    setupFilesAfterEnv: ["<rootDir>/src/tests/setup.js"],
    browserHeadless: headlessMode,
    browserDevtools: !headlessMode,
    browserSlowMo: argv.browserSlowMo || 500,
    browserArgs: argv.browserArgs || []
  }
};
