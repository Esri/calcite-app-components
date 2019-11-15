import { FunctionalComponent, h } from "@stencil/core";
const scrimDivStyle = {
  alignItems: "center",
  animation:
    "calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function)",
  backgroundColor: "var(--calcite-app-scrim)",
  bottom: "0",
  display: "flex",
  justifyContent: "center",
  left: "0",
  position: "absolute",
  right: "0",
  top: "0",
  zIndex: "2"
};

interface ScrimProps {
  loading: boolean;
  disabled: boolean;
}

const containerDivStyle = {
  position: "relative",
  zIndex: "1"
};

export const CalciteScrim: FunctionalComponent<ScrimProps> = ({ loading, disabled }, children) =>
  disabled || loading
    ? [
        <div style={scrimDivStyle}>
          {loading ? <calcite-loader is-active></calcite-loader> : null}
        </div>,
        children?.length ? <div style={containerDivStyle}>{children}</div> : null
      ]
    : children;

export default CalciteScrim;
