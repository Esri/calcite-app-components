# calcite-shell-panel

The `calcite-shell-panel` is a child component of `calcite-shell` used to house and display other components like `calcite-block`, `calcite-flow` and `calcite-shell-floating-panel`.

See the [calcite-shell-panel demo](https://esri.github.io/calcite-app-components/demos/calcite-shell-panel.html).

## Slots

| Name                   | Description                                                                                                                                      | Type                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| `action-bar`           | A slot for adding a `calcite-action-bar` to the panel.                                                                                           | `HTMLCalciteActionBar`          |
| `shell-floating-panel` | A slot for adding `calcite-shell-floating-panel` to the panel. The floating panel will be positioned relative to the shell panel when displayed. | `HTMLCalciteShellFloatingPanel` |
| `action-pad`           | A slot for adding a `calcite-action-pad` to the panel. The action pad will be positioned relative to the shell panel when displayed.             | `HTMLCalciteActionPad`          |

<!-- Auto Generated Below -->

## Properties

| Property    | Attribute   | Description                   | Type                      | Default     |
| ----------- | ----------- | ----------------------------- | ------------------------- | ----------- |
| `collapsed` | `collapsed` | Hide the content panel.       | `boolean`                 | `false`     |
| `layout`    | `layout`    | Arrangement of the component. | `"leading" \| "trailing"` | `"leading"` |

## Events

| Event                     | Description                             | Type               |
| ------------------------- | --------------------------------------- | ------------------ |
| `calciteShellPanelToggle` | Emitted when collapse has been toggled. | `CustomEvent<any>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
