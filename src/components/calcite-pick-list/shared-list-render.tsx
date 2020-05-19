import { Host, h } from "@stencil/core";
import { VNode } from "@stencil/core/internal";
import { CSS } from "./resources";
import { getElementDir } from "../utils/dom";

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
      <section>
        <header class={{ [CSS.sticky]: true }}>
          {filterEnabled ? (
            <calcite-filter
              data={dataForFilter}
              dir={getElementDir(el)}
              placeholder={textFilterPlaceholder}
              aria-label={textFilterPlaceholder}
              onCalciteFilterChange={handleFilter}
            />
          ) : null}
          <slot name="menu-actions" />
        </header>
        <slot />
        {loading || disabled ? <calcite-scrim loading={loading} /> : null}
      </section>
    </Host>
  );
};

export default List;
