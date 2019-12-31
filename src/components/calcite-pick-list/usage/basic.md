#### Basic

Renders a basic pick list with radio buttons and actions on the right side.

```html
<calcite-pick-list>
  <calcite-pick-list-item text-label="T. Rex" text-description="Arm strength impaired" value="trex">
    <calcite-action slot="secondaryAction">
      <!-- icon -->
    </calcite-action>
  </calcite-pick-list-item>
  <calcite-pick-list-item text-label="Triceratops" text-description="3 horn" value="triceratops" selected>
    <calcite-action slot="secondaryAction">
      <!-- icon -->
    </calcite-action>
  </calcite-pick-list-item>
  <calcite-pick-list-item text-label="Velociraptor" text-description="Swift seizer" value="velociraptor">
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

#### Sub groups

Renders groups of pick list items that are visually separated.

```html
<calcite-pick-list>
  <calcite-pick-list-group text-group-title="numbers">
    <calcite-pick-list-item text-heading="one" text-description="fish" value="one" icon="grip">
      <calcite-action slot="secondaryAction">
        <!-- icon -->
      </calcite-action>
    </calcite-pick-list-item>
    <calcite-pick-list-item text-heading="two" text-description="fish" value="two" icon="grip">
      <calcite-action slot="secondaryAction">
        <!-- icon -->
      </calcite-action>
    </calcite-pick-list-item>
  </calcite-pick-list-group>
  <calcite-pick-list-group text-group-title="colors">
    <calcite-pick-list-item text-heading="red" text-description="fish" value="red" icon="grip">
      <calcite-action slot="secondaryAction">
        <!-- icon -->
      </calcite-action>
    </calcite-pick-list-item>
    <calcite-pick-list-item text-heading="blue" text-description="fish" value="blue" icon="grip">
      <calcite-action slot="secondaryAction">
        <!-- icon -->
      </calcite-action>
    </calcite-pick-list-item>
  </calcite-pick-list-group>
</calcite-pick-list>
```

#### Compact

Renders compact list items with the text description and a bit of padding removed from the card.

```html
<calcite-pick-list compact>
  <calcite-pick-list-item
    text-label="ID"
    text-description="This is an id for this field and people use it for things."
    value="ID"
  >
    <calcite-action slot="secondaryAction" id="action-test">
      <!-- icon -->
    </calcite-action>
  </calcite-pick-list-item>
  <calcite-pick-list-item text-label="OBJECTID" value="OBJECTID">
    <calcite-action slot="secondaryAction" id="action-test">
      <!-- icon -->
    </calcite-action>
  </calcite-pick-list-item>
</calcite-pick-list>
```
