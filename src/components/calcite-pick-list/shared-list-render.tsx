import { Host, h } from "@stencil/core";
import CalciteScrim from "../utils/CalciteScrim";
import { VNode } from "@esri/calcite-components/dist/types/stencil.core";

const renderScrim = (loading, disabled): VNode => {
  return loading || disabled ? <CalciteScrim loading={loading}></CalciteScrim> : null;
};

export const List = ({ props, text, ...rest }): VNode => {
  const { disabled, loading, filterEnabled, dataForFilter, handleFilter } = props;
  const { filterPlaceholder } = text;
  return (
    <Host aria-disabled={disabled} aria-busy={loading} {...rest}>
      <header>
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
