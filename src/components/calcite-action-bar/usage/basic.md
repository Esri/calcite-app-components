#### Basic Action Bar (Top Actions)

Renders `calcite-actions` just on the top half of the bar.

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

Renders a group of `calcite-actions` contained in a `calcite-action-group`.

```html
<calcite-action-bar>
  <calcite-action-group>
    <calcite-action text="Add">
      <!-- icon -->
    </calcite-action>
    <calcite-action text="Save">
      <!-- icon -->
    </calcite-action>
    <calcite-action text="Layers">
      <!-- icon -->
    </calcite-action>
  </calcite-action-group>
</calcite-action-bar>
```

#### Bottom Actions

Renders `calcite-actions` that stick to the bottom of the action bar.

```html
<calcite-action-bar>
  <div slot="bottom actions">
    <calcite-action text="Information">
      <!-- icon -->
    </calcite-action>

    <calcite-action text="Feedback">
      <!-- icon -->
    </calcite-action>
  </div>
</calcite-action-bar>
```
