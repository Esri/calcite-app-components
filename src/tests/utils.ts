import { newE2EPage } from "@stencil/core/testing";
import { E2EPage } from "@stencil/core/dist/testing/puppeteer/puppeteer-declarations";

export async function setUpPage(
  content: string,
  options?: {
    withPeerDependencies: boolean;
  }
): Promise<E2EPage> {
  const page = await newE2EPage();
  await page.setContent(content);

  if (options && options.withPeerDependencies) {
    await page.addScriptTag({
      url: "https://unpkg.com/@esri/calcite-components@1.0.0-beta.10/dist/calcite/calcite.esm.js",
      type: "module"
    });
    await page.waitForChanges();
  }

  return page;
}
