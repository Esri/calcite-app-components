import { Config } from "@stencil/core";
import { config as baseConfig } from "./stencil.config";
import { OutputTargetWww } from "@stencil/core/dist/declarations";

export const config: Config = baseConfig;

const wwwOutputTarget = config.outputTargets.find((element) => element.type === "www") as OutputTargetWww;
wwwOutputTarget.dir = "docs";
config.outputTargets = [wwwOutputTarget];
config.excludeSrc = ["**/tests/**", "**/*example*/**"];
