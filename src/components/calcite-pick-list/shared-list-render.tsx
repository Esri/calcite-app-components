import { Host, h } from "@stencil/core";
import CalciteScrim from "../utils/CalciteScrim";
import { VNode } from "@stencil/core/internal";
import { CSS } from "./resources";
import { getElementDir } from "../utils/dom";

const renderScrim = (loading, disabled): VNode => {
  return <CalciteScrim loading={loading} disabled={disabled} />;
};

export const List = ({ props, ...rest }): VNode => {
  const {
    disabled,
    loading,
    filterEnabled,
    dataForFilter,
    handleFilter,
    textFilterPlaceholder,
    el
  } = props;
  return (
    <Host role="menu" aria-disabled={disabled.toString()} aria-busy={loading.toString()} {...rest}>
      <header class={{ [CSS.sticky]: true }}>
        {filterEnabled ? (
          <calcite-filter
            dir={getElementDir(el)}
            data={dataForFilter}
            textPlaceholder={textFilterPlaceholder}
            aria-label={textFilterPlaceholder}
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
