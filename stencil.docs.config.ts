import { create as baseConfigCreator } from "./stencil.config";
import { OutputTargetWww } from "@stencil/core/dist/declarations";

export const create: typeof baseConfigCreator = () => {
  const docsConfig = baseConfigCreator();

  const wwwOutputTarget = docsConfig.outputTargets.find((element) => element.type === "www") as OutputTargetWww;
  wwwOutputTarget.dir = "docs";
  docsConfig.outputTargets = [wwwOutputTarget];

  docsConfig.excludeSrc = ["**/*.stories.ts", "**/tests/**"];

  return docsConfig;
};

export const config = create();
