#### Basic Action Bar (Top Actions)

Renders `calcite-action`s that stick to the top of the bar.

```html
<calcite-action-bar>
  <calcite-action text="Add">
    <!-- icon -->
  </calcite-action>
  <calcite-action text="Save">
    <!-- icon -->
  </calcite-action>
</calcite-action-bar>
```

#### With grouping

Renders a group of `calcite-action`s contained in a `calcite-action-group`. Actions in a group are visually separated from other groups or actions in the bar.

```html
<calcite-action-bar>
  <calcite-action-group>
    <calcite-action text="Add">
      <!-- icon -->
    </calcite-action>
    <calcite-action text="Save">
      <!-- icon -->
    </calcite-action>
  </calcite-action-group>

  <calcite-action-group>
    <calcite-action text="Layers">
      <!-- icon -->
    </calcite-action>
    <calcite-action text="Basemaps">
      <!-- icon -->
    </calcite-action>
  </calcite-action-group>
</calcite-action-bar>
```

#### Bottom Actions

The bottom-actions slot renders `calcite-action`s that stick to the bottom of the bar above the expand/collapse icon.

```html
<calcite-action-bar>
  <calcite-action text="Information">
    <!-- icon -->
  </calcite-action>

  <div slot="bottom-actions">
    <calcite-action text="Feedback">
      <!-- icon -->
    </calcite-action>
  </div>
</calcite-action-bar>
```
