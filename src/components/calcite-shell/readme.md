# calcite-shell

The `calcite-shell` component is used for application layout management. It is a container for the view as well as other calcite app components like `calcite-shell-panel` and `calcite-tip-manager`.

_note: calcite-shell supports tablet as the smallest screen size_

<!-- Auto Generated Below -->


## Usage

### Advanced

#### Advanced

Renders a shell with leading and trailing floating panels, action bar/pad, block, flow, tip manager, footer.
note: calcite-icon is pulled in from [calcite-components](https://esri.github.io/calcite-components/).\_

```html
<calcite-shell>
  <calcite-shell-panel slot="primary-panel" position="start" detached>
    <calcite-action-bar slot="action-bar" theme="dark">
      <calcite-action-group>
        <calcite-action text="Add">
          <calcite-icon scale="s" icon="plus">
        </calcite-action>
        <calcite-action text="Save" disabled>
          <calcite-icon scale="s" icon="save">
        </calcite-action>
        <calcite-action text="Layers" active indicator>
          <calcite-icon scale="s" icon="layers">
        </calcite-action>
      </calcite-action-group>
      <calcite-action-group>
        <calcite-action text="Add">
          <calcite-icon scale="s" icon="plus">
        </calcite-action>
        <calcite-action text="Layers" indicator>
          <calcite-icon scale="s" icon="layers">
        </calcite-action>
      </calcite-action-group>
    </calcite-action-bar>
    <calcite-block collapsible  heading="Primary Content" summary="This is the primary.">
      <calcite-block-content>
        <calcite-action text="Puppies" text-enabled indicator>
          <calcite-icon scale="s" icon="plus">
        </calcite-action>
        <calcite-action text="Kittens" text-enabled>
          <calcite-icon scale="s" icon="save">
        </calcite-action>
        <calcite-action text="Birds?" text-enabled>
          <calcite-icon scale="s" icon="banana">
        </calcite-action>
      </calcite-block-content>
    </calcite-block>
    <calcite-block collapsible  heading="Additional Block" summary="Baby shark doo doo doo doo.">
      <calcite-block-content>
          <p>Cool thing.</p>
      </calcite-block-content>
    </calcite-block>
  </calcite-shell-panel>

   <calcite-shell-panel slot="contextual-panel" position="end" detached detached-scale="l">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Add" active>
            <calcite-icon scale="s" icon="plus"></calcite-icon>
          </calcite-action>
          <calcite-action text="Save" disabled>
            <calcite-icon scale="s" icon="save"></calcite-icon>
          </calcite-action>
          <calcite-action text="Layers">
            <calcite-icon scale="s" icon="layers"></calcite-icon>
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Add">
            <calcite-icon scale="s" icon="plus"></calcite-icon>
          </calcite-action>
          <calcite-action text="Save" disabled>
            <calcite-icon scale="s" icon="save"></calcite-icon>
          </calcite-action>
          <calcite-action text="Layers">
            <calcite-icon scale="s" icon="layers"></calcite-icon>
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="bottom-actions">
          <calcite-action text="Tips">
            <calcite-icon scale="s" icon="lightbulb"></calcite-icon>
          </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-flow>
        <calcite-flow-item heading="Layer settings">
          <calcite-block collapsible open heading="Contextual Content" summary="Select goodness">
            <calcite-value-list multiple filter-enabled>
              <calcite-value-list-item text-label="2018 Population Density (Esri)" text-description="{POPDENS_CY}" value="POPDENS_CY">
                <calcite-action slot="secondary-action">
                  <calcite-icon scale="s" icon="camera-flash-on"></calcite-icon>
                </calcite-action>
              </calcite-value-list-item>
              <calcite-value-list-item text-label="2018 Population Density [Updated]" text-description="{POPDENS_CY}" value="POPDENS_CY2">
                <calcite-action slot="secondary-action">
                  <calcite-icon scale="s" icon="banana"></calcite-icon>
                </calcite-action>
              </calcite-value-list-item>
              <calcite-value-list-item text-label="2018 Total Households (Esri)" text-description="{TOTHH_CY}" value="TOTHH_CY">
                <calcite-action slot="secondary-action">
                  <calcite-icon scale="s" icon="person2"></calcite-icon>
                </calcite-action>
              </calcite-value-list-item>
            </calcite-value-list>
          </calcite-block>
        </calcite-flow-item>
      </calcite-flow>
  </calcite-shell-panel>
  <calcite-tip-manager slot="tip-manager">
    <calcite-tip heading="The Red Rocks and Blue Water" thumbnail="https://placeimg.com/1000/600" text-thumbnail="This is an image of nature.">
    <calcite-tip heading="The Long Trees" thumbnail="https://placeimg.com/1000/600" text-thumbnail="This is an image of trees.">
  </calcite-tip-manager>
  <footer slot="shell-footer">Footer</footer>
</calcite-shell>
```


### Basic

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
  <calcite-shell-panel slot="primary-panel" position="start">
    Leading panel! (on the left side, since this is a LTR app)
  </calcite-shell-panel>
  <calcite-shell-panel slot="contextual-panel" position="end">
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
  <calcite-shell-panel slot="primary-panel" position="start">
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



## Properties

| Property | Attribute | Description                               | Type                | Default     |
| -------- | --------- | ----------------------------------------- | ------------------- | ----------- |
| `theme`  | `theme`   | Used to set the component's color scheme. | `"dark" \| "light"` | `undefined` |


## Slots

| Slot                 | Description                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
|                      | A slot for adding content to the shell. This content will appear between any leading and trailing panels added to the shell. (eg. a map) |
| `"contextual-panel"` | A slot for adding the trailing `calcite-shell-panel`.                                                                                    |
| `"primary-panel"`    | A slot for adding the leading `calcite-shell-panel`.                                                                                     |
| `"shell-footer"`     | A slot for adding footer content. This content will be positioned at the bottom of the shell.                                            |
| `"shell-header"`     | A slot for adding header content. This content will be positioned at the top of the shell.                                               |
| `"tip-manager"`      | A slot for adding a `calcite-tip-manager`. This component will be absolutely positioned.                                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
