#### Advanced

Renders a shell with leading and trailing floating panels, action bar/pad, block, flow, tip manager, footer

```html
<calcite-shell>
  <calcite-shell-panel slot="primary-panel" layout="leading" detached>
    <calcite-action-pad id="action-pad" placement="side" slot="action-pad" hidden>
      <calcite-action-group>
        <calcite-action text="Add">
          <!-- icon -->
        </calcite-action>
      </calcite-action-group>
    </calcite-action-pad>
    <calcite-action-bar slot="action-bar" theme="dark">
      <calcite-action-group>
        <calcite-action text="Add">
          <!-- icon -->
        </calcite-action>
        <calcite-action text="Save" disabled>
          <!-- icon -->
        </calcite-action>
        <calcite-action text="Layers" active indicator>
          <!-- icon -->
        </calcite-action>
      </calcite-action-group>
      <calcite-action-group>
        <calcite-action text="Add">
          <!-- icon -->
        </calcite-action>
        <calcite-action text="Layers" indicator>
          <!-- icon -->
        </calcite-action>
      </calcite-action-group>
    </calcite-action-bar>
    <calcite-block collapsible  heading="Primary Content" summary="This is the primary.">
      <calcite-block-content>
        <calcite-action text="Side ActionPad" text-enabled id="action-pad-button" indicator>
          <!-- icon -->
        </calcite-action>
        <calcite-action text="Anchored Shell Floating Panel" text-enabled id="shell-floating-panel-button">
          <!-- icon -->
        </calcite-action>
        <calcite-action text="Over Shell Floating Panel" text-enabled id="shell-floating-panel-over-button">
          <!-- icon -->
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
            <!-- icon -->
          </calcite-action>
          <calcite-action text="Save" disabled>
            <!-- icon -->
          </calcite-action>
          <calcite-action text="Layers">
            <!-- icon -->
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group>
          <calcite-action text="Add">
            <!-- icon -->
          </calcite-action>
          <calcite-action text="Save" disabled>
            <!-- icon -->
          </calcite-action>
          <calcite-action text="Layers">
            <!-- icon -->
          </calcite-action>
        </calcite-action-group>
        <calcite-action-group slot="bottom-actions">
          <calcite-action text="Tips" id="tip-manager-button">
            <!-- icon -->
          </calcite-action>
        </calcite-action-group>
      </calcite-action-bar>
      <calcite-flow>
        <calcite-flow-item heading="Layer settings">
          <calcite-block collapsible open heading="Contextual Content" summary="Select goodness">
            <calcite-value-list id="one" multiple filter-enabled>
              <calcite-value-list-item text-label="2018 Population Density (Esri)" text-description="{POPDENS_CY}" value="POPDENS_CY">
                <calcite-action slot="secondaryAction" id="action-test">
                  <!-- icon -->
                </calcite-action>
              </calcite-value-list-item>
              <calcite-value-list-item text-label="2018 Population Density [Updated]" text-description="{POPDENS_CY}" value="POPDENS_CY2">
                <calcite-action slot="secondaryAction" id="action-test">
                  <!-- icon -->
                </calcite-action>
              </calcite-value-list-item>
              <calcite-value-list-item text-label="2018 Total Households (Esri)" text-description="{TOTHH_CY}" value="TOTHH_CY">
                <calcite-action slot="secondaryAction" id="action-test">
                </calcite-action>
              </calcite-value-list-item>
            </calcite-value-list>
          </calcite-block>
        </calcite-flow-item>
      </calcite-flow>
  </calcite-shell-panel>
  <calcite-tip-manager slot="tip-manager" id="tip-manager">
    <calcite-tip heading="The Red Rocks and Blue Water" text-thumbnail="This is an image of nature.">
    <calcite-tip heading="The Long Trees" text-thumbnail="This is an image of trees.">
  </calcite-tip-manager>
  <footer slot="shell-footer">Footer</footer>
</calcite-shell>
```
