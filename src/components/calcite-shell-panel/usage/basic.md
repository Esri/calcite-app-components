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
