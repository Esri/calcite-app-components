import { Host, h } from "@stencil/core";
import CalciteScrim from "../utils/CalciteScrim";
import { VNode } from "@esri/calcite-components/dist/types/stencil.core";
import { CSS } from "./resources";

const renderScrim = (loading, disabled): VNode => {
  return <CalciteScrim loading={loading} disabled={disabled}></CalciteScrim>;
};

export const List = ({ props, text, ...rest }): VNode => {
  const { disabled, loading, filterEnabled, dataForFilter, handleFilter } = props;
  const { filterPlaceholder } = text;
  return (
    <Host aria-disabled={disabled} aria-busy={loading} {...rest}>
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
      <slot />
      {renderScrim(loading, disabled)}
    </Host>
  );
};

export default List;
