# calcite-tip

The `calcite-tip` component can comprise of an image, text and hyperlink to give helpful hints to a user about using the platform.

<!-- Auto Generated Below -->

## Properties

| Property         | Attribute         | Description                                         | Type                | Default     |
| ---------------- | ----------------- | --------------------------------------------------- | ------------------- | ----------- |
| `heading`        | `heading`         | The heading of the tip.                             | `string`            | `undefined` |
| `nonDismissible` | `non-dismissible` | Indicates whether the tip can be dismissed.         | `boolean`           | `false`     |
| `storageId`      | `storage-id`      | The local storage id used for an instance of a tip. | `string`            | `undefined` |
| `textThumbnail`  | `text-thumbnail`  | Alternate text for description of the thumbnail.    | `string`            | `undefined` |
| `theme`          | `theme`           | Used to set the component's color scheme.           | `"dark" \| "light"` | `undefined` |
| `thumbnail`      | `thumbnail`       | A string of the path to the thumbnail.              | `string`            | `undefined` |

## Dependencies

### Depends on

- [calcite-action](../calcite-action)

### Graph

```mermaid
graph TD;
  calcite-tip --> calcite-action
  style calcite-tip fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
