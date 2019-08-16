import CalciteIcon from "./CalciteIcon";
import { JSXBase } from "@stencil/core/internal";
import SVGAttributes = JSXBase.SVGAttributes;
import { VNode } from "@stencil/core/dist/declarations";

interface ExpectedAttrs {
  path: string;
  size: string;
}

function assertBaseIconVNode(svgVNode: VNode, { path, size }: ExpectedAttrs): void {
  expect(svgVNode.$tag$).toBe("svg");
  expect(svgVNode.$attrs$.xmlns).toBe("http://www.w3.org/2000/svg");
  expect(svgVNode.$attrs$.height).toBe(size);
  expect(svgVNode.$attrs$.width).toBe(size);
  expect(svgVNode.$attrs$.viewBox).toBe(`0 0 ${size} ${size}`);
  expect(svgVNode.$children$).toHaveLength(1);

  const [pathVNode] = svgVNode.$children$;

  expect(pathVNode.$tag$).toBe("path");
  expect(pathVNode.$attrs$.d).toBe(path);
}

const iconProps = {
  path: "test-path",
  size: "16"
};

it("creates SVG icons based on calcite UI icon path data", () =>
  assertBaseIconVNode(CalciteIcon(iconProps, [], null) as VNode, iconProps));

it("allows passing additional SVG attributes", () => {
  const extraSVGAttrs: SVGAttributes = { preserveAspectRatio: "xMinYMid meet" };
  const svgVNode = CalciteIcon({ ...iconProps, svgAttributes: extraSVGAttrs }, [], null) as VNode;

  assertBaseIconVNode(svgVNode, { ...iconProps });
  expect(svgVNode.$attrs$.preserveAspectRatio).toBe(extraSVGAttrs.preserveAspectRatio);
});
