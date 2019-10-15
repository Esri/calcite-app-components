import { FunctionalComponent, h } from "@stencil/core";
import { CSS } from "./resources";
interface ScrimProps {
  loading: boolean;
}

export const CalciteScrim: FunctionalComponent<ScrimProps> = ({ loading }) => (
  <div class={CSS.blockingContainer}>
    {loading ? <calcite-loader is-active></calcite-loader> : null}
  </div>
);
