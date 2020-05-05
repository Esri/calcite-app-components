import { Host, h } from "@stencil/core";
import { VNode } from "@stencil/core/internal";
import { CSS } from "./resources";

const renderScrim = (loading, disabled): VNode => {
  return loading || disabled ? <calcite-scrim loading={loading} /> : null;
};

export const List = ({ props, ...rest }): VNode => {
  const {
    disabled,
    loading,
    filterEnabled,
    dataForFilter,
    handleFilter,
    textFilterPlaceholder
  } = props;
  return (
    <Host role="menu" aria-disabled={disabled.toString()} aria-busy={loading.toString()} {...rest}>
      <header class={{ [CSS.sticky]: true }}>
        {filterEnabled ? (
          <calcite-filter
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
