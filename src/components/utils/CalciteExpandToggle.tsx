import { FunctionalComponent, h } from "@stencil/core";
import { getElementDir } from "./dom";
import { CalcitePosition } from "../interfaces";

interface CalciteExpandToggleProps {
  expanded: boolean;
  intlExpand: string;
  intlCollapse: string;
  el: HTMLElement;
  position: CalcitePosition;
  expandTooltip?: HTMLCalciteTooltipElement;
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
  if (shellNode.position) {
    return shellNode.position;
  }
  if (shellNode.layout) {
    return shellNode.layout === "trailing" ? "end" : "start";
  }
}

function getCalcitePosition(position: CalcitePosition, el: HTMLElement): CalcitePosition {
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

const setTooltipReference = (
  tooltip: HTMLCalciteTooltipElement,
  referenceElement: HTMLCalciteActionElement,
  expanded: boolean
): HTMLCalciteActionElement => {
  if (tooltip) {
    tooltip.referenceElement = !expanded && referenceElement;
  }

  return referenceElement;
};

export const CalciteExpandToggle: FunctionalComponent<CalciteExpandToggleProps> = ({
  expanded,
  intlExpand,
  intlCollapse,
  toggleExpand,
  el,
  position,
  expandTooltip
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

  const actionNode = (
    <calcite-action
      ref={(referenceElement): HTMLCalciteActionElement =>
        setTooltipReference(expandTooltip, referenceElement, expanded)
      }
      onClick={toggleExpand}
      textEnabled={expanded}
      text={expandText}
    >
      <calcite-icon scale="s" icon={expanded ? expandIcon : collapseIcon} />
    </calcite-action>
  );

  return expandTooltip ? (
    <calcite-tooltip-manager>{actionNode}</calcite-tooltip-manager>
  ) : (
    actionNode
  );
};
