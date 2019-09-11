# calcite-shell-floating-panel

The `calcite-shell-floating-panel` component is a positioned container that appears relative to a `calcite-shell-panel` and is used to house temporary content.

<!-- Auto Generated Below -->

## Properties

| Property          | Attribute   | Description                                                                                                                                                                                                                                                                                    | Type                           | Default     |
| ----------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ----------- |
| `heading`         | `heading`   | Panel heading                                                                                                                                                                                                                                                                                  | `string`                       | `undefined` |
| `placement`       | `placement` | Determines where the element will be displayed. side: dynamically left or right based on whether we're in a leading or trailing shell-panel. over: centered on top of trigger and covers trigger. anchor: dynamically above or below based on how close trigger is to top or bottom of window. | `"anchor" \| "over" \| "side"` | `undefined` |
| `positionElement` | --          | HTMLElement used to position this element according to the placement.                                                                                                                                                                                                                          | `HTMLElement`                  | `undefined` |

## Events

| Event                            | Description                                 | Type               |
| -------------------------------- | ------------------------------------------- | ------------------ |
| `calciteShellFloatingPanelClose` | Emitted when the component has been closed. | `CustomEvent<any>` |

## Dependencies

### Depends on

- [calcite-action](..\calcite-action)

### Graph

```mermaid
graph TD;
  calcite-shell-floating-panel --> calcite-action
  style calcite-shell-floating-panel fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
