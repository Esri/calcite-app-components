# calcite-pick-list

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute      | Description                                                                                                                                                                                                                                                                                                                               | Type                             | Default       |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------- |
| `dragEnabled` | `drag-enabled` | When true, the items will be sortable via drag and drop. Only applies when mode is configuration                                                                                                                                                                                                                                          | `boolean`                        | `false`       |
| `mode`        | `mode`         | Mode controls the presentation of the items in their selected and deselected states. Selection mode shows either radio buttons or checkboxes depending on the value of multiple Configuration mode relies on a color highlight on the edge of the item for selected Mode must be set to configuration for drag and drop behavior to work. | `"configuration" \| "selection"` | `"selection"` |
| `multiple`    | `multiple`     | Multpile Works similar to standard radio buttons and checkboxes. It also affects the presented icon when in Selection mode. When true, a user can select multiple items at a time. When false, only a single item can be selected at a time, When false, selecting a new item will deselect any other selected items.                     | `boolean`                        | `false`       |
| `textHeading` | `text-heading` | The heading label for the entire Pick List. Not to be confused with the heading for an individual item or for a sub-group of items.                                                                                                                                                                                                       | `string`                         | `undefined`   |

## Events

| Event                            | Description | Type               |
| -------------------------------- | ----------- | ------------------ |
| `calcitePickListSelectionChange` |             | `CustomEvent<any>` |

## Methods

### `getSelectedItems() => Promise<object>`

#### Returns

Type: `Promise<object>`

---

_Built with [StencilJS](https://stenciljs.com/)_
