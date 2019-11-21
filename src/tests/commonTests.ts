import { E2EPage } from "@stencil/core/testing";
import { JSX } from "../components/components";
import { toHaveNoViolations } from "jest-axe";
import axe from "axe-core";
import { SetUpPageOptions, setUpPage } from "./utils";

expect.extend(toHaveNoViolations);

type CalciteComponentTag = keyof JSX.IntrinsicElements;
type AxeOwningWindow = Window & { axe: typeof axe };
type ComponentHTML = string;
type TagOrHTML = CalciteComponentTag | ComponentHTML;

function isHTML(tagOrHTML: string): boolean {
  return tagOrHTML.trim().startsWith("<");
}

function getTag(tagOrHTML: string): CalciteComponentTag {
  if (isHTML(tagOrHTML)) {
    const regex = /[>\s]/;
    const trimmedTag = tagOrHTML.trim();
    return trimmedTag.substring(1, trimmedTag.search(regex)) as CalciteComponentTag;
  }

  return tagOrHTML as CalciteComponentTag;
}

async function simplePageSetup(componentTagOrHTML: TagOrHTML, pageSetupOptions?: SetUpPageOptions): Promise<E2EPage> {
  const componentTag = getTag(componentTagOrHTML);
  return setUpPage(
    isHTML(componentTagOrHTML) ? componentTagOrHTML : `<${componentTag}><${componentTag}/>`,
    pageSetupOptions
  );
}

export async function accessible(componentTagOrHTML: TagOrHTML, pageSetupOptions?: SetUpPageOptions): Promise<void> {
  const page = await simplePageSetup(componentTagOrHTML, pageSetupOptions);
  await page.addScriptTag({ path: require.resolve("axe-core") });

  expect(
    await page.evaluate(
      async (componentTag: CalciteComponentTag) =>
        (window as AxeOwningWindow & typeof globalThis).axe.run(componentTag),
      getTag(componentTagOrHTML)
    )
  ).toHaveNoViolations();
}

export async function renders(componentTagOrHTML: TagOrHTML, pageSetupOptions?: SetUpPageOptions): Promise<void> {
  const page = await simplePageSetup(componentTagOrHTML, pageSetupOptions);
  const element = await page.find(getTag(componentTagOrHTML));

  expect(element).toHaveClass("hydrated");
  expect(await element.isVisible()).toBe(true);
}

export async function reflects(
  componentTagOrHTML: TagOrHTML,
  propsToTest: {
    propertyName: string;
    value: any;
  }[],
  pageSetupOptions?: SetUpPageOptions
): Promise<void> {
  const page = await simplePageSetup(componentTagOrHTML, pageSetupOptions);
  const componentTag = getTag(componentTagOrHTML);
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
  componentTagOrHTML: TagOrHTML,
  propsToTest: {
    propertyName: string;
    defaultValue: any;
  }[],
  pageSetupOptions?: SetUpPageOptions
): Promise<void> {
  const page = await simplePageSetup(componentTagOrHTML, pageSetupOptions);
  const element = await page.find(getTag(componentTagOrHTML));

  for (const propAndValue of propsToTest) {
    const { propertyName, defaultValue } = propAndValue;
    const prop = await element.getProperty(propertyName);
    expect(prop).toBe(defaultValue);
  }
}

export async function hidden(componentTagOrHTML: TagOrHTML, pageSetupOptions?: SetUpPageOptions): Promise<void> {
  const page = await simplePageSetup(componentTagOrHTML, pageSetupOptions);
  const element = await page.find(getTag(componentTagOrHTML));

  element.setAttribute("hidden", "");
  await page.waitForChanges();

  expect(await element.isVisible()).toBe(false);
}
