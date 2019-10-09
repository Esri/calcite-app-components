# calcite-pick-list

<!-- Auto Generated Below -->

## Properties

| Property        | Attribute        | Description                                                                                                                                                                                                                                                | Type                             | Default       |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------- |
| `dragEnabled`   | `drag-enabled`   | <span style="color:red">**[DEPRECATED]**</span> Prop is ignored. Prop will be removed in a future release.<br/><br/>                                                                                                                                       | `boolean`                        | `false`       |
| `filterEnabled` | `filter-enabled` | When true, an input appears at the top of the list that can be used by end users to filter items in the list.                                                                                                                                              | `boolean`                        | `false`       |
| `mode`          | `mode`           | <span style="color:red">**[DEPRECATED]**</span> Prop is ignored. Prop will be removed in a future release.<br/><br/>                                                                                                                                       | `"configuration" \| "selection"` | `"selection"` |
| `multiple`      | `multiple`       | Multiple Works similar to standard radio buttons and checkboxes. When true, a user can select multiple items at a time. When false, only a single item can be selected at a time, When false, selecting a new item will deselect any other selected items. | `boolean`                        | `false`       |
| `textHeading`   | `text-heading`   | <span style="color:red">**[DEPRECATED]**</span> No longer rendered. Prop will be removed in a future release.<br/><br/>                                                                                                                                    | `string`                         | `undefined`   |

## Events

| Event                            | Description                                                                              | Type               |
| -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------ |
| `calciteListChange`              |                                                                                          | `CustomEvent<any>` |
| `calcitePickListSelectionChange` | <span style="color:red">**[DEPRECATED]**</span> use calciteListChange instead.<br/><br/> | `CustomEvent<any>` |

## Methods

### `getSelectedItems() => Promise<object>`

#### Returns

Type: `Promise<object>`

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
