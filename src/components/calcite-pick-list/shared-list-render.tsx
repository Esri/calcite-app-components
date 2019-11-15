import { Host, h } from "@stencil/core";
import CalciteScrim from "../utils/CalciteScrim";
import { VNode } from "@esri/calcite-components/dist/types/stencil.core";
import { CSS } from "./resources";

export const List = ({ props, text, ...rest }): VNode => {
  const { disabled, loading, filterEnabled, dataForFilter, handleFilter } = props;
  const { filterPlaceholder } = text;

  const headerNode = (
    <header class={{ [CSS.sticky]: true }}>
      {filterEnabled ? (
        <calcite-filter
          data={dataForFilter}
          textPlaceholder={filterPlaceholder}
          aria-label={filterPlaceholder}
          onCalciteFilterChange={handleFilter}
        />
      ) : null}
      <slot name="menu-actions" />
    </header>
  );

  const contentNodes = [headerNode, <slot />];

  return (
    <Host aria-disabled={disabled} aria-busy={loading} {...rest}>
      <CalciteScrim loading={loading} disabled={disabled}>
        {contentNodes}
      </CalciteScrim>
    </Host>
  );
};

export default List;
