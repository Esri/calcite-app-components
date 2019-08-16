# calcite-shell-panel

The `calcite-shell-panel` is a child component of `calcite-shell` used to house and display other components like `calcite-block`, `calcite-flow` and `floating-panel`.

See the [calcite-shell-panel demo](https://esri.github.io/calcite-app-components/demos/calcite-shell-panel.html).

| Name             | Description                                                                                                                                | Type                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `action-bar`     | A slot for adding a `calcite-action-bar` to the panel.                                                                                     | `HTMLCalciteActionBar`     |
| `floating-panel` | A slot for adding `calcite-floating-panel` to the panel. The floating panel will be positioned relative to the shell panel when displayed. | `HTMLCalciteFloatingPanel` |
| `action-pad`     | A slot for adding a `calcite-action-pad` to the panel. The action pad will be positioned relative to the panel when displayed.             | `HTMLCalciteActionPad`     |

<!-- Auto Generated Below -->

## Properties

| Property | Attribute | Description                   | Type                      | Default     |
| -------- | --------- | ----------------------------- | ------------------------- | ----------- |
| `layout` | `layout`  | Arrangement of the component. | `"leading" \| "trailing"` | `"leading"` |

---

_Built with [StencilJS](https://stenciljs.com/)_
