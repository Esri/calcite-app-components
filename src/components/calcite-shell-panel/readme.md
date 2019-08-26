# calcite-shell-panel

The `calcite-shell-panel` is a child component of `calcite-shell` used to house and display other components like `calcite-block`, `calcite-flow` and `calcite-shell-floating-panel`.

See the [calcite-shell-panel demo](https://esri.github.io/calcite-app-components/demos/calcite-shell-panel.html).

## Slots

| Name         | Description                                            | Type                   |
| ------------ | ------------------------------------------------------ | ---------------------- |
| `action-bar` | A slot for adding a `calcite-action-bar` to the panel. | `HTMLCalciteActionBar` |

<!-- Auto Generated Below -->

## Properties

| Property    | Attribute   | Description                   | Type                      | Default     |
| ----------- | ----------- | ----------------------------- | ------------------------- | ----------- |
| `collapsed` | `collapsed` | Hide the content panel.       | `boolean`                 | `false`     |
| `layout`    | `layout`    | Arrangement of the component. | `"leading" \| "trailing"` | `"leading"` |

---

_Built with [StencilJS](https://stenciljs.com/)_
