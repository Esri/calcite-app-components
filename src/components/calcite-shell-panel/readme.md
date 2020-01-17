# calcite-shell-panel

The `calcite-shell-panel` is a child component of `calcite-shell` used as a container to display other components like `calcite-block` and `calcite-flow`.

<!-- Auto Generated Below -->

## Usage

### Basic

#### Basic

Renders a basic shell panel with text content.

```html
<calcite-shell-panel>
  <p>Primary Content</p>
</calcite-shell-panel>
```

#### With action bar

Renders a panel with an action bar.

```html
<calcite-shell-panel>
  <calcite-action-bar slot="action-bar">
    <calcite-action text="Add">
      <calcite-icon scale="s" icon="plus"></calcite-icon>
    </calcite-action>
    <calcite-action text="Save">
      <calcite-icon scale="s" icon="save"></calcite-icon>
    </calcite-action>
    <calcite-action text="Layers">
      <calcite-icon scale="s" icon="layers"></calcite-icon>
    </calcite-action>
  </calcite-action-bar>
</calcite-shell-panel>
```

## Properties

| Property        | Attribute        | Description                                                                             | Type                      | Default     |
| --------------- | ---------------- | --------------------------------------------------------------------------------------- | ------------------------- | ----------- |
| `collapsed`     | `collapsed`      | Hide the content panel.                                                                 | `boolean`                 | `false`     |
| `detached`      | `detached`       | This property makes the content area appear like a "floating" panel.                    | `boolean`                 | `false`     |
| `detachedScale` | `detached-scale` | This sets limits the height of the content area. It only applies when detached is true. | `"l" or "m" or "s"`       | `"m"`       |
| `layout`        | `layout`         | Arrangement of the component.                                                           | `"leading" or "trailing"` | `"leading"` |

## Events

| Event                     | Description                             | Type               |
| ------------------------- | --------------------------------------- | ------------------ |
| `calciteShellPanelToggle` | Emitted when collapse has been toggled. | `CustomEvent<any>` |

## Slots

| Slot           | Description                                            |
| -------------- | ------------------------------------------------------ |
|                | A slot for adding content to the shell panel.          |
| `"action-bar"` | A slot for adding a `calcite-action-bar` to the panel. |

---

_Built with [StencilJS](https://stenciljs.com/)_
