# calcite-panel

The `calcite-panel` component is a container for a header, content and optional footer. The header will have centered content as well as optional leading and trailing content. The panel can also be setup to be dismissible which allows it to be closed by a user.

<!-- Auto Generated Below -->

## Usage

### Basic

#### Basic

Renders a basic panel with a header.

```html
<calcite-panel>
  <div slot="header-content">Header!</div>
  <p>Slotted content!</p>
</calcite-panel>
```

#### With footer

Renders a panel with a header and a footer.

```html
<calcite-panel>
  <div slot="header-content">Header!</div>
  <p>I have a footer.</p>
  <div slot="footer">Footer!</div>
</calcite-panel>
```

#### Header with actions

Renders a panel with leading and trailing `calcite-action`s.

```html
<calcite-panel>
  <div slot="header-leading-content">
    <calcite-action label="Performs my custom action" text="Perform Action!" text-enabled>
      <calcite-icon scale="s" icon="home"></calcite-icon>
    </calcite-action>
  </div>
  <div slot="header-content">Header!</div>
  <div slot="header-trailing-content">
    <calcite-action label="Performs another custom action" text="Perform Another Action!" text-enabled>
      <calcite-icon scale="s" icon="blog"></calcite-icon>
    </calcite-action>
  </div>
  <p>Actions are in the top left and right.</p>
</calcite-panel>
```

#### Dismissible panel

Renders a panel that is dismissible with a click of the "x".

```html
<calcite-panel dismissible id="dismissible-panel">
  <div slot="header-content">Dismissible Header</div>
  <p>Click the X and I go away!</p>
</calcite-panel>
```

## Properties

| Property      | Attribute      | Description                                                                                               | Type                | Default      |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------- | ------------------- | ------------ |
| `disabled`    | `disabled`     | When true, disabled prevents interaction. This state shows items with lower opacity/grayed.               | `boolean`           | `false`      |
| `dismissed`   | `dismissed`    | Hides the panel.                                                                                          | `boolean`           | `false`      |
| `dismissible` | `dismissible`  | Displays a close button in the trailing side of the header.                                               | `boolean`           | `false`      |
| `heightScale` | `height-scale` | Specifies the maxiumum height of the panel.                                                               | `"l" or "m" or "s"` | `undefined`  |
| `loading`     | `loading`      | When true, content is waiting to be loaded. This state shows a busy indicator.                            | `boolean`           | `false`      |
| `textClose`   | `text-close`   | 'Close' text string for the close button. The close button will only be shown when 'dismissible' is true. | `string`            | `TEXT.close` |
| `theme`       | `theme`        | Used to set the component's color scheme.                                                                 | `"dark" or "light"` | `undefined`  |

## Events

| Event                         | Description                                     | Type               |
| ----------------------------- | ----------------------------------------------- | ------------------ |
| `calcitePanelDismissedChange` | Emitted when the close button has been clicked. | `CustomEvent<any>` |

## Slots

| Slot                        | Description                                                              |
| --------------------------- | ------------------------------------------------------------------------ |
|                             | A slot for adding content to the panel.                                  |
| `"footer"`                  | A slot for adding `calcite-button`s to the footer.                       |
| `"header-content"`          | A slot for adding content in the center of the header.                   |
| `"header-leading-content"`  | A slot for adding a `calcite-action` on the leading side of the header.  |
| `"header-trailing-content"` | A slot for adding a `calcite-action` on the trailing side of the header. |

## Dependencies

### Used by

- [calcite-flow-item](../calcite-flow-item)

### Depends on

- [calcite-action](../calcite-action)

### Graph

```mermaid
graph TD;
  calcite-panel --> calcite-action
  calcite-flow-item --> calcite-panel
  style calcite-panel fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
