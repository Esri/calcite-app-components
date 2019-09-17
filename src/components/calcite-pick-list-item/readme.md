# calcite-pick-list-item

The `calcite-pick-list-item` is a child element of `calcite-pick-list`. Items are displayed and can be selected or deselected to be shown on the view.

<!-- Auto Generated Below -->

## Properties

| Property          | Attribute          | Description | Type                                                        | Default     |
| ----------------- | ------------------ | ----------- | ----------------------------------------------------------- | ----------- |
| `editing`         | `editing`          |             | `boolean`                                                   | `false`     |
| `icon`            | `icon`             |             | `ICON_TYPES.circle \| ICON_TYPES.grip \| ICON_TYPES.square` | `null`      |
| `selected`        | `selected`         |             | `boolean`                                                   | `false`     |
| `textDescription` | `text-description` |             | `string`                                                    | `undefined` |
| `textHeading`     | `text-heading`     |             | `string`                                                    | `undefined` |
| `value`           | `value`            |             | `string`                                                    | `undefined` |

## Events

| Event                               | Description | Type               |
| ----------------------------------- | ----------- | ------------------ |
| `calcitePickListItemSelectedChange` |             | `CustomEvent<any>` |

## Methods

### `toggleSelected(coerce?: boolean, emit?: boolean) => Promise<void>`

#### Returns

Type: `Promise<void>`

---

_Built with [StencilJS](https://stenciljs.com/)_
