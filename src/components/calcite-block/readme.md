# calcite-block

The `calcite-block` component is intended for displaying content on it's own as well as in stacked, collapsible `calcite-block-sections` in a panel.

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute       | Description                                       | Type                | Default         |
| -------------- | --------------- | ------------------------------------------------- | ------------------- | --------------- |
| `collapsible`  | `collapsible`   | When true, this block will be collapsible.        | `boolean`           | `false`         |
| `heading`      | `heading`       | Block heading.                                    | `string`            | `undefined`     |
| `open`         | `open`          | When true, the block's content will be displayed. | `boolean`           | `false`         |
| `summary`      | `summary`       | Block summary.                                    | `string`            | `undefined`     |
| `textCollapse` | `text-collapse` | Tooltip used for the toggle when expanded.        | `string`            | `TEXT.collapse` |
| `textExpand`   | `text-expand`   | Tooltip used for the toggle when collapsed.       | `string`            | `TEXT.expand`   |
| `theme`        | `theme`         | Used to set the component's color scheme.         | `"dark" \| "light"` | `undefined`     |

## Events

| Event                | Description                                              | Type               |
| -------------------- | -------------------------------------------------------- | ------------------ |
| `calciteBlockToggle` | Emitted when the header has been toggled open or closed. | `CustomEvent<any>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
