# calcite-fab



<!-- Auto Generated Below -->


## Usage

### Basic

#### Without text

Renders a `calcite-fab` that displays only an icon and a tooltip label.

```html
<calcite-fab label="Performs my custom action"></calcite-fab>
```

#### With text

Renders a `calcite-fab` that displays text along side an icon and a tooltip label.

```html
<calcite-fab label="Performs my custom action" text="Perform Action!" text-enabled></calcite-fab>
```

#### Loading and disabled

Renders a `calcite-fab` that is loading and disabled.

```html
<calcite-fab loading disabled></calcite-fab>
```



## Properties

| Property      | Attribute      | Description                                                                                                          | Type                | Default     |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| `disabled`    | `disabled`     | When true, disabled prevents interaction. This state shows items with lower opacity/grayed.                          | `boolean`           | `false`     |
| `label`       | `label`        | Label of the fab, exposed on hover. If no label is provided, the label inherits what's provided for the `text` prop. | `string`            | `undefined` |
| `loading`     | `loading`      | When true, content is waiting to be loaded. This state shows a busy indicator.                                       | `boolean`           | `false`     |
| `text`        | `text`         | Text that accompanies the fab icon.                                                                                  | `string`            | `undefined` |
| `textEnabled` | `text-enabled` | Indicates whether the text is displayed.                                                                             | `boolean`           | `false`     |
| `theme`       | `theme`        | Used to set the component's color scheme.                                                                            | `"dark" or "light"` | `undefined` |


## Methods

### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
