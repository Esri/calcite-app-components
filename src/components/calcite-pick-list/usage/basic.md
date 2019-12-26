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

#### Multi-select & filter-enabled

Renders a pick list with a sticky filter and checkboxes for multiple selection of items.

```html
<calcite-pick-list multiple filter-enabled>
  <calcite-pick-list-item text-label="Chocolate" value="chocolate">
    <calcite-action slot="secondaryAction">
      <!-- icon -->
    </calcite-action>
  </calcite-pick-list-item>
  <calcite-pick-list-item text-label="Vanilla" text-description="Oldie but goodie" value="vanilla">
    <calcite-action slot="secondaryAction">
      <!-- icon -->
    </calcite-action>
  </calcite-pick-list-item>
  <calcite-pick-list-item text-label="Strawberry" text-description="no metadata on this one" value="strawberry">
    <calcite-action slot="secondaryAction">
      <!-- icon -->
    </calcite-action>
  </calcite-pick-list-item>
</calcite-pick-list>
```
