#### Basic Action Bar (Top Actions)

Renders `calcite-action`s that stick to the top of the bar.

```html
<calcite-action-bar>
  <calcite-action text="Add">
    <calcite-icon scale="s" icon="plus"></calcite-icon>
  </calcite-action>
  <calcite-action text="Save">
    <calcite-icon scale="s" icon="save"></calcite-icon>
  </calcite-action>
</calcite-action-bar>
```

#### With grouping

Renders a group of `calcite-action`s contained in a `calcite-action-group`. Actions in a group are visually separated from other groups or actions in the bar.

```html
<calcite-action-bar>
  <calcite-action-group>
    <calcite-action text="Add">
      <calcite-icon scale="s" icon="plus"></calcite-icon>
    </calcite-action>
    <calcite-action text="Save">
      <calcite-icon scale="s" icon="save"></calcite-icon>
    </calcite-action>
  </calcite-action-group>

  <calcite-action-group>
    <calcite-action text="Layers">
      <calcite-icon scale="s" icon="layers"></calcite-icon>
    </calcite-action>
    <calcite-action text="Basemaps">
      <calcite-icon scale="s" icon="layer-basemap"></calcite-icon>
    </calcite-action>
  </calcite-action-group>
</calcite-action-bar>
```

#### Bottom Actions

The bottom-actions slot renders `calcite-action`s that stick to the bottom of the bar above the expand/collapse icon.

```html
<calcite-action-bar>
  <calcite-action text="Information">
    <calcite-icon scale="s" icon="information"></calcite-icon>
  </calcite-action>
  <calcite-action text="Feedback" slot="bottom-actions" icon="mega-phone"></calcite-action>
</calcite-action-bar>
```
