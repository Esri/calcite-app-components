# calcite-shell

The `calcite-shell` component is used for application layout management. It is a container for the view as well as other calcite app components like `calcite-shell-panel`, `calcite-shell-floating-panel` and `calcite-tip-manager`.

See the [calcite-shell demo](https://esri.github.io/calcite-app-components/demos/calcite-shell.html).

<!-- Auto Generated Below -->

## Properties

| Property | Attribute | Description                               | Type                | Default     |
| -------- | --------- | ----------------------------------------- | ------------------- | ----------- |
| `theme`  | `theme`   | Used to set the component's color scheme. | `"dark" \| "light"` | `undefined` |

## Slots

| Slot                 | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `"contextual-panel"` | A slot for adding the trailing `calcite-shell-panel`.                                         |
| `"primary-panel"`    | A slot for adding the leading `calcite-shell-panel`.                                          |
| `"shell-footer"`     | A slot for adding footer content. This content will be positioned at the bottom of the shell. |
| `"shell-header"`     | A slot for adding header content. This content will be positioned at the top of the shell.    |
| `"tip-manager"`      | A slot for adding a `calcite-tip-manager`. This component will be absolutely positioned.      |

---

_Built with [StencilJS](https://stenciljs.com/)_
