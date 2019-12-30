#### Advanced

Renders a shell with leading and trailing floating panels, action bar/pad, block, flow, tip manager, footer.
note: calcite-icon is pulled in from [calcite-components](https://esri.github.io/calcite-components/).\_

```html
<calcite-shell>
  <calcite-shell-panel slot="primary-panel" layout="leading" detached>
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

   <calcite-shell-panel slot="contextual-panel" layout="trailing" detached detached-scale="l">
      <calcite-action-bar slot="action-bar">
        <calcite-action-group>
          <calcite-action text="Add" active>
            <calcite-icon scale="s" icon="plus">
          </calcite-action>
          <calcite-action text="Save" disabled>
            <calcite-icon scale="s" icon="save">
          </calcite-action>
          <calcite-action text="Layers">
            <calcite-icon scale="s" icon="layers">
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Add">
            <calcite-icon scale="s" icon="plus">
          </calcite-action>
          <calcite-action text="Save" disabled>
            <calcite-icon scale="s" icon="save">
          </calcite-action>
          <calcite-action text="Layers">
            <calcite-icon scale="s" icon="layers">
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="bottom-actions">
          <calcite-action text="Tips">
            <calcite-icon scale="s" icon="lightbulb">
          </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-flow>
        <calcite-flow-item heading="Layer settings">
          <calcite-block collapsible open heading="Contextual Content" summary="Select goodness">
            <calcite-value-list multiple filter-enabled>
              <calcite-value-list-item text-label="2018 Population Density (Esri)" text-description="{POPDENS_CY}" value="POPDENS_CY">
                <calcite-action slot="secondaryAction">
                  <calcite-icon scale="s" icon="camera-flash-on">
                </calcite-action>
              </calcite-value-list-item>
              <calcite-value-list-item text-label="2018 Population Density [Updated]" text-description="{POPDENS_CY}" value="POPDENS_CY2">
                <calcite-action slot="secondaryAction">
                  <calcite-icon scale="s" icon="banana">
                </calcite-action>
              </calcite-value-list-item>
              <calcite-value-list-item text-label="2018 Total Households (Esri)" text-description="{TOTHH_CY}" value="TOTHH_CY">
                <calcite-action slot="secondaryAction">
                  <calcite-icon scale="s" icon="person2">
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
