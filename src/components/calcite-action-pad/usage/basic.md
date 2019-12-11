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
