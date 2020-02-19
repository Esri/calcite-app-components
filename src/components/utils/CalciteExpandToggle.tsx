import { FunctionalComponent, h } from "@stencil/core";
import { getElementDir } from "./dom";
import { CalcitePosition } from "../interfaces";

interface CalciteExpandToggleProps {
  expanded: boolean;
  intlExpand: string;
  intlCollapse: string;
  el: HTMLElement;
  position: CalcitePosition;
  toggleExpand: () => void;
}

const ICONS = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right"
};

function getClosestShellPosition(el: HTMLElement): CalcitePosition | null {
  const shellNode = el.closest("calcite-shell-panel");

  if (!shellNode) {
    return;
  }

  return shellNode.position;
}

function getCalcitePosition(position: CalcitePosition, el: HTMLElement) {
  return position || getClosestShellPosition(el) || "start";
}

export function toggleChildActionText({
  parent,
  expanded
}: {
  parent: HTMLElement;
  expanded: boolean;
}): void {
  parent.querySelectorAll("calcite-action").forEach((action) => (action.textEnabled = expanded));
}

export const CalciteExpandToggle: FunctionalComponent<CalciteExpandToggleProps> = ({
  expanded,
  intlExpand,
  intlCollapse,
  toggleExpand,
  el,
  position
}) => {
  const rtl = getElementDir(el) === "rtl";

  const expandText = expanded ? intlCollapse : intlExpand;
  const icons = [ICONS.chevronsLeft, ICONS.chevronsRight];

  if (rtl) {
    icons.reverse();
  }

  const end = getCalcitePosition(position, el) === "end";
  const expandIcon = end ? icons[1] : icons[0];
  const collapseIcon = end ? icons[0] : icons[1];

  return (
    <calcite-action onClick={toggleExpand} textEnabled={expanded} text={expandText}>
      <calcite-icon scale="s" icon={expanded ? expandIcon : collapseIcon} />
    </calcite-action>
  );
};
