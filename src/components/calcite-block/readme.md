# calcite-block

The `calcite-block` component is intended for displaying content on it's own as well as in stacked, collapsible `calcite-block-sections` in a panel.

See the [calcite-block demo](https://esri.github.io/calcite-app-components/demos/calcite-block.html).

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute       | Description                                                                                 | Type                | Default         |
| -------------- | --------------- | ------------------------------------------------------------------------------------------- | ------------------- | --------------- |
| `collapsible`  | `collapsible`   | When true, this block will be collapsible.                                                  | `boolean`           | `false`         |
| `disabled`     | `disabled`      | When true, disabled prevents interaction. This state shows items with lower opacity/grayed. | `boolean`           | `false`         |
| `heading`      | `heading`       | Block heading.                                                                              | `string`            | `undefined`     |
| `loading`      | `loading`       | When true, content is waiting to be loaded. This state shows a busy indicator.              | `boolean`           | `false`         |
| `open`         | `open`          | When true, the block's content will be displayed.                                           | `boolean`           | `false`         |
| `summary`      | `summary`       | Block summary.                                                                              | `string`            | `undefined`     |
| `textCollapse` | `text-collapse` | Tooltip used for the toggle when expanded.                                                  | `string`            | `TEXT.collapse` |
| `textExpand`   | `text-expand`   | Tooltip used for the toggle when collapsed.                                                 | `string`            | `TEXT.expand`   |
| `theme`        | `theme`         | Used to set the component's color scheme.                                                   | `"dark" \| "light"` | `undefined`     |

## Events

| Event                | Description                               | Type               |
| -------------------- | ----------------------------------------- | ------------------ |
| `calciteBlockToggle` | Emitted when the header has been clicked. | `CustomEvent<any>` |

## Slots

| Slot        | Description                                                |
| ----------- | ---------------------------------------------------------- |
|             | A slot for adding content to the block.                    |
| `"control"` | A slot for adding a single HTML input element in a header. |
| `"icon"`    | A slot for adding a trailing header icon.                  |

---

_Built with [StencilJS](https://stenciljs.com/)_
