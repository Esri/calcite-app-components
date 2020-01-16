import { FunctionalComponent, h } from "@stencil/core";
import { getElementDir } from "./dom";
import { CalciteLayout } from "../interfaces";

interface CalciteExpandToggleProps {
  expanded: boolean;
  textExpand: string;
  textCollapse: string;
  el: HTMLElement;
  layout: CalciteLayout;
  toggleExpand: () => void;
}

const ICONS = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right"
};

function getClosestShellLayout(el: HTMLElement): CalciteLayout | null {
  const shellNode = el.closest("calcite-shell-panel");

  if (!shellNode) {
    return;
  }

  return shellNode.layout;
}

export function toggleChildActionText({
  parent,
  expand,
  expanded
}: {
  parent: HTMLElement;
  expand: boolean;
  expanded: boolean;
}): void {
  expand &&
    parent.querySelectorAll("calcite-action").forEach((action) => (action.textEnabled = expanded));
}

export const CalciteExpandToggle: FunctionalComponent<CalciteExpandToggleProps> = ({
  expanded,
  textExpand,
  textCollapse,
  toggleExpand,
  el,
  layout
}) => {
  const rtl = getElementDir(el) === "rtl";

  const expandText = expanded ? textCollapse : textExpand;
  const icons = [ICONS.chevronsLeft, ICONS.chevronsRight];

  if (rtl) {
    icons.reverse();
  }

  const layoutFallback = layout || getClosestShellLayout(el) || "leading";

  const trailing = layoutFallback === "trailing";
  const expandIcon = trailing ? icons[1] : icons[0];
  const collapseIcon = trailing ? icons[0] : icons[1];

  return (
    <calcite-action onClick={toggleExpand} textEnabled={expanded} text={expandText}>
      <calcite-icon scale="s" icon={expanded ? expandIcon : collapseIcon} />
    </calcite-action>
  );
};
