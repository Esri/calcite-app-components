# calcite-pick-list

`calcite-pick-list` is housed in a panel and contains `calcite-pick-list-items`. Each item is able to be be selected via radio button or checkboxes (which have a multiselect and shift-click capability). There is also an option for a filter at the top of the list for searching.

<!-- Auto Generated Below -->

## Properties

| Property        | Attribute        | Description                                                                                                                                                                                                                                       | Type                             | Default       |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------- |
| `compact`       | `compact`        | Compact removes the selection icon (radio or checkbox) and adds a compact attribute. This allows for a more compact version of the pick-list-item.                                                                                                | `boolean`                        | `false`       |
| `disabled`      | `disabled`       | When true, disabled prevents interaction. This state shows items with lower opacity/grayed.                                                                                                                                                       | `boolean`                        | `false`       |
| `dragEnabled`   | `drag-enabled`   | <span style="color:red">**[DEPRECATED]**</span> Prop is ignored. Prop will be removed in a future release.<br/><br/>                                                                                                                              | `boolean`                        | `false`       |
| `filterEnabled` | `filter-enabled` | When true, an input appears at the top of the list that can be used by end users to filter items in the list.                                                                                                                                     | `boolean`                        | `false`       |
| `loading`       | `loading`        | When true, content is waiting to be loaded. This state shows a busy indicator.                                                                                                                                                                    | `boolean`                        | `false`       |
| `mode`          | `mode`           | <span style="color:red">**[DEPRECATED]**</span> Prop is ignored. Prop will be removed in a future release.<br/><br/>                                                                                                                              | `"configuration" \| "selection"` | `"selection"` |
| `multiple`      | `multiple`       | Multiple works similar to standard radio buttons and checkboxes. When true, a user can select multiple items at a time. When false, only a single item can be selected at a time and selecting a new item will deselect any other selected items. | `boolean`                        | `false`       |
| `textHeading`   | `text-heading`   | <span style="color:red">**[DEPRECATED]**</span> No longer rendered. Prop will be removed in a future release.<br/><br/>                                                                                                                           | `string`                         | `undefined`   |

## Events

| Event                            | Description                                                                              | Type               |
| -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------ |
| `calciteListChange`              | Emitted when any of the item selections have changed.                                    | `CustomEvent<any>` |
| `calcitePickListSelectionChange` | <span style="color:red">**[DEPRECATED]**</span> use calciteListChange instead.<br/><br/> | `CustomEvent<any>` |

## Methods

### `getSelectedItems() => Promise<Map<string, object>>`

#### Returns

Type: `Promise<Map<string, object>>`

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
  calcite-pick-list --> calcite-filter
  style calcite-pick-list fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
