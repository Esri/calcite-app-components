#### Basic Action Pad

Renders a basic action pad with `calcite-action`s.

```html
<calcite-action-pad>
  <calcite-action text="Undo">
    <calcite-icon scale="s" icon="undo"></calcite-icon>
  </calcite-action>
  <calcite-action text="Redo">
    <calcite-icon scale="s" icon="redo"></calcite-icon>
  </calcite-action>
</calcite-action-pad>
```

#### With Grouping

Renders a group of `calcite-action`s contained in a `calcite-action-group`. Actions in a group are visually separated from other groups or actions in the pad.

```html
<calcite-action-pad>
  <calcite-action-group>
    <calcite-action text="Home">
      <calcite-icon scale="s" icon="home"></calcite-icon>
    </calcite-action>
    <calcite-action text="Styles">
      <calcite-icon scale="s" icon="add-in-edit"></calcite-icon>
    </calcite-action>
  </calcite-action-group>

  <calcite-action text="Tips">
    <calcite-icon scale="s" icon="lightbulb"></calcite-icon>
  </calcite-action>
</calcite-action-pad>
```
