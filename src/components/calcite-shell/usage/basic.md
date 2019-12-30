#### Basic

Renders a basic shell with a header and a footer.

```html
<calcite-shell>
  <div slot="shell-header">
    <header>
      <h2>Shell Header: My App</h2>
    </header>
  </div>
  <p>Shell Content</p>
  <!-- insert map or fillable content here -->
  <footer slot="shell-footer">Footer</footer>
</calcite-shell>
```

#### With panels

Renders a shell with a header and panels on the left and right sides of the app.

```html
<calcite-shell>
  <calcite-shell-panel slot="primary-panel" layout="leading">
    Leading panel! (on the left side, since this is a LTR app)
  </calcite-shell-panel>
  <calcite-shell-panel slot="contextual-panel" layout="trailing">
    Trailing panel! (right side)
  </calcite-shell-panel>
  <div slot="shell-header">
    <header>
      <h2>Shell Header: My App</h2>
    </header>
  </div>
  <p>Shell Content</p>
  <!-- insert map or fillable content here -->
</calcite-shell>
```

#### Panel with action bar

Renders a single panel with actions in an action bar.

```html
<calcite-shell>
  <calcite-shell-panel slot="primary-panel" layout="leading">
    <img src="https://via.placeholder.com/300x200" alt="placeholder" />
    <calcite-action-bar slot="action-bar">
      <calcite-action text="Add" active>
        <calcite-icon scale="s" icon="plus"></calcite-icon>
      </calcite-action>
      <calcite-action text="Save" disabled>
        <calcite-icon scale="s" icon="save"></calcite-icon>
      </calcite-action>
      <calcite-action text="Layers">
        <calcite-icon scale="s" icon="layers"></calcite-icon>
      </calcite-action>
    </calcite-action-bar>
  </calcite-shell-panel>
</calcite-shell>
```
