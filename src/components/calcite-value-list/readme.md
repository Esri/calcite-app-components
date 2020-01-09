# calcite-value-list

`calcite-value-list` is housed in a panel and contains `calcite-value-list-item`s. The value list has options for drag and drop, label editing, and single or multi select of items which can be done through shift+click.

<!-- Auto Generated Below -->

## Usage

### Basic

#### Basic

Renders a value list with multiple items able to be selected and a filter.

```html
<calcite-value-list multiple="true" filter-enabled>
  <calcite-value-list-item text-label="Dogs" text-description="Man's best friend" value="dogs">
    <calcite-action slot="secondary-action">
      <calcite-icon scale="s" icon="plus"></calcite-icon>
    </calcite-action>
  </calcite-value-list-item>
  <calcite-value-list-item text-label="Cats" text-description="Independent and fluffy" value="cats">
    <calcite-action slot="secondary-action">
      <calcite-icon scale="s" icon="plus"></calcite-icon>
    </calcite-action>
  </calcite-value-list-item>
  <calcite-value-list-item
    text-label="Fish. But not just any fish, a tiger fish caught live in the Atlantic Ocean while on vacation."
    text-description="Easy to care for."
    value="fish"
  >
    <calcite-action slot="secondary-action">
      <calcite-icon scale="s" icon="plus"></calcite-icon>
    </calcite-action>
  </calcite-value-list-item>
</calcite-value-list>
```

#### Drag and drop

Renders a compact value list (no text descriptions) with drag and drop capability between the items.

```html
<calcite-value-list drag-enabled compact>
  <calcite-value-list-item text-label="Rent" text-description="Mortgage + housing costs" value="rent">
  </calcite-value-list-item>
  <calcite-value-list-item text-label="Food" text-description="its what you eat." value="food">
  </calcite-value-list-item>
  <calcite-value-list-item text-label="Utilities" value="utilities"> </calcite-value-list-item>
  <calcite-value-list-item text-label="Entertainment" text-description="Toys and leisure" value="entertainment">
  </calcite-value-list-item>
</calcite-value-list>
```

#### Label editing and single select

Renders a value list with label editing and single select.

```html
<calcite-value-list label-editing-enabled="true">
  <calcite-value-list-item
    text-label="2018 Generation Alpha Population (Born 2017 or Later) [updated 2019-09-18]"
    text-description="GENALPHACY"
    value="GENALPHACY"
  >
  </calcite-value-list-item>
  <calcite-value-list-item
    text-label="2010-2018 Households: Annual Growth Rate (Esri)"
    text-description="HHGRW10CY-2019-09-18.001ZZYLKJ"
    value="HHGRW10CY"
  >
  </calcite-value-list-item>
  <calcite-value-list-item
    text-label="2010-2018 Households: Annual Growth Rate (Esri)"
    text-description="HHGRW10CY-2019-09-18.001ZZYYZLKJ"
    value="HHGRW10CY2"
  >
  </calcite-value-list-item>
</calcite-value-list>
```

## Properties

| Property                | Attribute                 | Description                                                                                                                                                                                                                                       | Type      | Default                  |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------ |
| `compact`               | `compact`                 | Compact reduces the size of all items in the list.                                                                                                                                                                                                | `boolean` | `false`                  |
| `disabled`              | `disabled`                | When true, disabled prevents interaction. This state shows items with lower opacity/grayed.                                                                                                                                                       | `boolean` | `false`                  |
| `dragEnabled`           | `drag-enabled`            | When true, the items will be sortable via drag and drop.                                                                                                                                                                                          | `boolean` | `false`                  |
| `filterEnabled`         | `filter-enabled`          | When true, an input appears at the top of the list that can be used by end users to filter items in the list.                                                                                                                                     | `boolean` | `false`                  |
| `loading`               | `loading`                 | When true, content is waiting to be loaded. This state shows a busy indicator.                                                                                                                                                                    | `boolean` | `false`                  |
| `multiple`              | `multiple`                | Multiple Works similar to standard radio buttons and checkboxes. When true, a user can select multiple items at a time. When false, only a single item can be selected at a time and selecting a new item will deselect any other selected items. | `boolean` | `false`                  |
| `textFilterPlaceholder` | `text-filter-placeholder` | Placeholder text for the filter input field.                                                                                                                                                                                                      | `string`  | `TEXT.filterPlaceholder` |

## Events

| Event                    | Description                                           | Type               |
| ------------------------ | ----------------------------------------------------- | ------------------ |
| `calciteListChange`      | Emitted when any of the item selections have changed. | `CustomEvent<any>` |
| `calciteListOrderChange` | Emmitted when the order of the list has changed.      | `CustomEvent<any>` |

## Methods

### `getSelectedItems() => Promise<Map<string, object>>`

#### Returns

Type: `Promise<Map<string, object>>`

## Slots

| Slot             | Description                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
|                  | A slot for adding `calcite-pick-list-item` elements or `calcite-pick-list-group` elements. Items are displayed as a vertical list. |
| `"menu-actions"` | A slot for adding a button + menu combo for performing actions like sorting.                                                       |

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
