#### Advanced

Renders a shell with leading and trailing floating panels, action pad, block, flow.

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
</calcite-shell>
```
