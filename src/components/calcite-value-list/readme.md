# calcite-value-list

`calcite-value-list` is housed in a panel and contains `calcite-value-list-items`. The value list has options for drag and drop, label editing, and single or multi select of items.

<!-- Auto Generated Below -->

## Properties

| Property        | Attribute        | Description                                                                                                                                                                                                                                                                                                       | Type      | Default |
| --------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `dragEnabled`   | `drag-enabled`   | When true, the items will be sortable via drag and drop.                                                                                                                                                                                                                                                          | `boolean` | `false` |
| `filterEnabled` | `filter-enabled` | When true, an input appears at the top of the list that can be used by end users to filter items in the list.                                                                                                                                                                                                     | `boolean` | `false` |
| `multiple`      | `multiple`       | Multiple works like conventional checkboxes and radio buttons and visual indication of the selection will be a highlighted card. When true, a user can select multiple items at a time. When false, only a single item can be selected at a time and selecting a new item will deselect any other selected items. | `boolean` | `false` |

## Events

| Event                    | Description                                           | Type               |
| ------------------------ | ----------------------------------------------------- | ------------------ |
| `calciteListChange`      | Emitted when any of the item selections have changed. | `CustomEvent<any>` |
| `calciteListOrderChange` | Emmitted when the order of the list has changed.      | `CustomEvent<any>` |

## Methods

### `getSelectedItems() => Promise<object>`

#### Returns

Type: `Promise<object>`

## Slots

| Slot             | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `"menu-actions"` | A slot for adding a button + menu combo for performing actions like sorting. |

## Dependencies

### Depends on

- [calcite-filter](../calcite-filter)

### Graph

```mermaid
graph TD;
  calcite-value-list --> calcite-filter
  style calcite-value-list fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
