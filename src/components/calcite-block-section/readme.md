# calcite-block-section

The `calcite-block-section` component is a child element of `calcite-block`. Sections can have their own header and content and can be toggled open or closed.

<!-- Auto Generated Below -->

## Properties

| Property        | Attribute        | Description                                                                                                                                                                      | Type                   | Default         |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------- |
| `open`          | `open`           | When true, the block's section content will be displayed.                                                                                                                        | `boolean`              | `false`         |
| `text`          | `text`           | Text displayed in the button.                                                                                                                                                    | `string`               | `undefined`     |
| `textCollapse`  | `text-collapse`  | Tooltip used for the toggle when expanded.                                                                                                                                       | `string`               | `TEXT.collapse` |
| `textExpand`    | `text-expand`    | Tooltip used for the toggle when collapsed.                                                                                                                                      | `string`               | `TEXT.expand`   |
| `toggleDisplay` | `toggle-display` | This property determines the look of the section toggle. If the value is "switch", a toggle-switch will be displayed. If the value is "button", a clickable header is displayed. | `"button" or "switch"` | `"button"`      |

## Events

| Event                       | Description                               | Type               |
| --------------------------- | ----------------------------------------- | ------------------ |
| `calciteBlockSectionToggle` | Emitted when the header has been clicked. | `CustomEvent<any>` |

## Slots

| Slot | Description                                     |
| ---- | ----------------------------------------------- |
|      | A slot for adding content to the block section. |

## Dependencies

### Depends on

- [calcite-action](../calcite-action)

### Graph

```mermaid
graph TD;
  calcite-block-section --> calcite-action
  style calcite-block-section fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
