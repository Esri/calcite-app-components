# calcite-tip-manager

The `calcite-tip-manager` component contains multiple [calcite-tips](../calcite-tip) that a user can click through via clickable arrows to go back and forth through the tips in the deck.

<!-- Auto Generated Below -->

## Properties

| Property              | Attribute               | Description                                     | Type                | Default                       |
| --------------------- | ----------------------- | ----------------------------------------------- | ------------------- | ----------------------------- |
| `textDefaultTitle`    | `text-default-title`    | The default group title for the Tip Manager.    | `string`            | `TEXT.defaultGroupTitle`      |
| `textPaginationLabel` | `text-pagination-label` | Label that appears on hover of pagination icon. | `string`            | `TEXT.defaultPaginationLabel` |
| `theme`               | `theme`                 | Element styling                                 | `"dark" \| "light"` | `undefined`                   |

## Methods

### `nextTip() => Promise<void>`

#### Returns

Type: `Promise<void>`

### `previousTip() => Promise<void>`

#### Returns

Type: `Promise<void>`

## Dependencies

### Depends on

- [calcite-action](../calcite-action)

### Graph

```mermaid
graph TD;
  calcite-tip-manager --> calcite-action
  style calcite-tip-manager fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
