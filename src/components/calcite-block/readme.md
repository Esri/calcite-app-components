# calcite-block

The `block` component is intended for displaying information in stacked, collapsible `calcite-headers` and `calcite-sections` in a panel.

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute       | Description                                       | Type      | Default         |
| -------------- | --------------- | ------------------------------------------------- | --------- | --------------- |
| `collapsible`  | `collapsible`   | When true, this block will be collapsible.        | `boolean` | `false`         |
| `open`         | `open`          | When true, the block's content will be displayed. | `boolean` | `false`         |
| `textCollapse` | `text-collapse` | Tooltip used for the toggle when expanded.        | `string`  | `TEXT.collapse` |
| `textExpand`   | `text-expand`   | Tooltip used for the toggle when collapsed.       | `string`  | `TEXT.expand`   |

## Events

| Event                | Description                                              | Type               |
| -------------------- | -------------------------------------------------------- | ------------------ |
| `calciteBlockToggle` | Emitted when the header has been toggled open or closed. | `CustomEvent<any>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
