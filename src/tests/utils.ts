import { E2EPage, newE2EPage } from "@stencil/core/testing";

export interface SetUpPageOptions {
  withPeerDependencies: boolean;
}

export async function setUpPage(content: string, options?: SetUpPageOptions): Promise<E2EPage> {
  const page = await newE2EPage();
  await page.setContent(content);

  if (options && options.withPeerDependencies) {
    await page.addScriptTag({
      url: "https://unpkg.com/@esri/calcite-components@1.0.0-beta.10/dist/calcite/calcite.esm.js",
      type: "module"
    });

    await page.waitForChanges();
    await page.waitFor(1000);
  }

  return page;
}
