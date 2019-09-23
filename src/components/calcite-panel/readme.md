# calcite-panel

The `calcite-panel` component is a positioned container that appears relative to a `calcite-shell-panel` and is used to house temporary content.

<!-- Auto Generated Below -->

## Properties

| Property | Attribute | Description                               | Type                | Default     |
| -------- | --------- | ----------------------------------------- | ------------------- | ----------- |
| `theme`  | `theme`   | Used to set the component's color scheme. | `"dark" \| "light"` | `undefined` |

## Dependencies

### Used by

- [calcite-dismissible-panel](../calcite-dismissible-panel)
- [calcite-flow-item](../calcite-flow-item)

### Graph

```mermaid
graph TD;
  calcite-dismissible-panel --> calcite-panel
  calcite-flow-item --> calcite-panel
  style calcite-panel fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
