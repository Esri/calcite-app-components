import { FunctionalComponent, h } from "@stencil/core";
import { getElementDir } from "./dom";
import { CalciteLayout } from "../interfaces";

interface ExpandToggleProps {
  expanded: boolean;
  textExpand: string;
  textCollapse: string;
  el: HTMLElement;
  layout: CalciteLayout;
}

const ICONS = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right"
};

function getClosestShellLayout(el: HTMLElement): CalciteLayout {
  const shellNode = el.closest("calcite-shell-panel"); // todo

  if (!shellNode) {
    return;
  }

  return shellNode.layout;
}

export const ExpandToggle: FunctionalComponent<ExpandToggleProps> = ({
  expanded,
  textExpand,
  textCollapse,
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
    <calcite-action onClick={this.toggleExpand} textEnabled={expanded} text={expandText}>
      <calcite-icon scale="s" icon={expanded ? expandIcon : collapseIcon} />
    </calcite-action>
  );
};
