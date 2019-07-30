# calcite-block

The `block` component is intended for displaying information in stacked, collapsible sections in a panel.

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute     | Description                                       | Type      | Default |
| ------------- | ------------- | ------------------------------------------------- | --------- | ------- |
| `collapsible` | `collapsible` | When true, this block will be collapsible.        | `boolean` | `false` |
| `open`        | `open`        | When true, the block's content will be displayed. | `boolean` | `false` |

## Events

| Event                | Description                               | Type               |
| -------------------- | ----------------------------------------- | ------------------ |
| `calciteBlockToggle` | Emitted when the header has been clicked. | `CustomEvent<any>` |

## Dependencies

### Depends on

- [calcite-block-content](../calcite-block-content)
- [calcite-block-header](../calcite-block-header)
- [calcite-block-section](../calcite-block-section)

---

_Built with [StencilJS](https://stenciljs.com/)_
