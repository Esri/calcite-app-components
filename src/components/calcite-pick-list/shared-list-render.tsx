import { Host, h } from "@stencil/core";
import { VNode } from "@stencil/core/internal";
import { CSS } from "./resources";
import { getElementDir, getElementTheme } from "../utils/dom";

export const List = ({ props, ...rest }): VNode => {
  const {
    disabled,
    loading,
    filterEnabled,
    dataForFilter,
    handleFilter,
    filterPlaceholder,
    textFilterPlaceholder,
    el
  } = props;
  const defaultSlot = <slot />;
  const placeholder = filterPlaceholder || textFilterPlaceholder;

  return (
    <Host role="menu" aria-disabled={disabled.toString()} aria-busy={loading.toString()} {...rest}>
      <section>
        <header class={{ [CSS.sticky]: true }}>
          {filterEnabled ? (
            <calcite-filter
              data={dataForFilter}
              dir={getElementDir(el)}
              placeholder={placeholder}
              aria-label={placeholder}
              onCalciteFilterChange={handleFilter}
            />
          ) : null}
          <slot name="menu-actions" />
        </header>
        {loading || disabled ? (
          <calcite-scrim theme={getElementTheme(el)} loading={loading}>
            {defaultSlot}
          </calcite-scrim>
        ) : (
          defaultSlot
        )}
      </section>
    </Host>
  );
};

export default List;
