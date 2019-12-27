#### Basic

Renders a basic shell with a header and a footer.

```html
<calcite-shell>
  <div slot="shell-header">
    <header class="header">
      <h2 class="heading">Shell Header: My App</h2>
    </header>
  </div>
  <p>Shell Content</p>
  <!-- insert map or image here -->
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
    <header class="header">
      <h2 class="heading">Shell Header: My App</h2>
    </header>
  </div>
  <p>Shell Content</p>
  <!-- insert map or image here -->
</calcite-shell>
```
