# calcite-flow-item

A flow item lives in a panel with a heading and content.

<!-- Auto Generated Below -->

## Properties

| Property         | Attribute          | Description                        | Type      | Default      |
| ---------------- | ------------------ | ---------------------------------- | --------- | ------------ |
| `heading`        | `heading`          | Heading text.                      | `string`  | `undefined`  |
| `menuOpen`       | `menu-open`        | Opens the action menu.             | `boolean` | `false`      |
| `showBackButton` | `show-back-button` | Shows a back button in the header. | `boolean` | `false`      |
| `textBack`       | `text-back`        | 'Back' text string.                | `string`  | `TEXT.back`  |
| `textClose`      | `text-close`       | 'Close' text string.               | `string`  | `TEXT.close` |
| `textOpen`       | `text-open`        | 'Open' text string.                | `string`  | `TEXT.open`  |

## Events

| Event                      | Description                          | Type               |
| -------------------------- | ------------------------------------ | ------------------ |
| `calciteFlowItemBackClick` | Takes the user to the previous flow. | `CustomEvent<any>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
