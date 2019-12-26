#### Basic

Renders a basic pick list with radio buttons and actions on the right side.

```html
<calcite-pick-list>
  <calcite-pick-list-item text-heading="T. Rex" text-description="Arm strength impaired" value="trex">
    <calcite-action slot="secondaryAction">
      <!-- icon -->
    </calcite-action>
  </calcite-pick-list-item>
  <calcite-pick-list-item text-heading="Triceratops" text-description="3 horn" value="triceratops" selected>
    <calcite-action slot="secondaryAction">
      <!-- icon -->
    </calcite-action>
  </calcite-pick-list-item>
  <calcite-pick-list-item text-heading="Velociraptor" text-description="Swift seizer" value="velociraptor">
    <calcite-action slot="secondaryAction">
      <!-- icon -->
    </calcite-action>
  </calcite-pick-list-item>
</calcite-pick-list>
```
