# calcite-action-pad

The `calcite-action-pad` component is made up of `calcite-action`s in the form of clickable icons. This does not have an expandable option and is a smaller and simpler component than `calcite-action-bar`.

<!-- Auto Generated Below -->

## Usage

### Basic

#### Basic Action Pad

Renders a basic action pad with `calcite-action`s.

```html
<calcite-action-pad>
  <calcite-action text="Undo">
    <!-- icon -->
  </calcite-action>
  <calcite-action text="Redo">
    <!-- icon -->
  </calcite-action>
</calcite-action-pad>
```

#### With Grouping

Renders a group of `calcite-action`s contained in a `calcite-action-group`. Actions in a group are visually separated from other groups or actions in the pad.

```html
<calcite-action-pad>
  <calcite-action-group>
    <calcite-action text="Home">
      <!-- icon -->
    </calcite-action>
    <calcite-action text="Styles">
      <!-- icon -->
    </calcite-action>
  </calcite-action-group>

  <calcite-action text="Tips">
    <!-- icon -->
  </calcite-action>
</calcite-action-pad>
```

## Properties

| Property | Attribute | Description                               | Type                | Default     |
| -------- | --------- | ----------------------------------------- | ------------------- | ----------- |
| `theme`  | `theme`   | Used to set the component's color scheme. | `"dark" \| "light"` | `undefined` |

## Slots

| Slot | Description                                            |
| ---- | ------------------------------------------------------ |
|      | A slot for adding `calcite-actions` to the action pad. |

---

_Built with [StencilJS](https://stenciljs.com/)_
