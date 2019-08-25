import { newE2EPage } from "@stencil/core/testing";
import * as pd from "@stencil/core/dist/testing/puppeteer/puppeteer-declarations";

async function simplePageSetup(componentTag: string): Promise<pd.E2EPage> {
  const page = await newE2EPage();
  await page.setContent(`<${componentTag}><${componentTag}/>`);
  return page;
}

export async function renders(componentTag: string): Promise<void> {
  const page = await simplePageSetup(componentTag);
  const element = await page.find(componentTag);

  expect(element).toHaveClass("hydrated");
  expect(await element.isVisible()).toBe(true);
}

export async function reflects(
  componentTag: string,
  propsToTest: {
    propertyName: string;
    value: any;
  }[]
): Promise<void> {
  const page = await simplePageSetup(componentTag);
  const element = await page.find(componentTag);

  for (const propAndValue of propsToTest) {
    const { propertyName, value } = propAndValue;
    const componentAttributeSelector = `${componentTag}[${propertyName}]`;

    element.setProperty(propertyName, value);
    await page.waitForChanges();

    expect(await page.find(componentAttributeSelector)).toBeTruthy();

    if (typeof value === "boolean") {
      element.setProperty(propertyName, !value);
      await page.waitForChanges();

      expect(await page.find(componentAttributeSelector)).toBeNull();

      element.setProperty(propertyName, value);
      await page.waitForChanges();

      expect(await page.find(componentAttributeSelector)).toBeTruthy();
    }
  }
}

export async function defaults(
  componentTag: string,
  propsToTest: {
    propertyName: string;
    defaultValue: any;
  }[]
): Promise<void> {
  const page = await simplePageSetup(componentTag);
  const element = await page.find(componentTag);

  for (const propAndValue of propsToTest) {
    const { propertyName, defaultValue } = propAndValue;
    const prop = await element.getProperty(propertyName);
    expect(prop).toBe(defaultValue);
  }
}

export async function hidden(componentTag: string): Promise<void> {
  const page = await simplePageSetup(componentTag);
  const element = await page.find(componentTag);

  element.setAttribute("hidden", "");
  await page.waitForChanges();

  expect(await element.isVisible()).toBe(false);
}
