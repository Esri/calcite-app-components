# calcite-shell-panel

The `calcite-shell-panel` is a child component of `calcite-shell` used to house and display other components like `calcite-block`, `calcite-flow` and `calcite-shell-floating-panel`.

See the [calcite-shell-panel demo](https://esri.github.io/calcite-app-components/demos/calcite-shell-panel.html).

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
