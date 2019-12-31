#### Basic

Renders a value list with multiple items able to be selected and a filter.

```html
<calcite-value-list id="one" multiple="true" filter-enabled>
  <calcite-value-list-item text-label="Dogs" text-description="Man's best friend" value="dogs">
    <calcite-action slot="secondaryAction"></calcite-action>
  </calcite-value-list-item>
  <calcite-value-list-item text-label="Cats" text-description="Independent and fluffy" value="cats">
    <calcite-action slot="secondaryAction"></calcite-action>
  </calcite-value-list-item>
  <calcite-value-list-item
    text-label="Fish. But not just any fish, a tiger fish caught live in the Atlantic Ocean while on vacation."
    text-description="Easy to care for."
    value="fish"
  >
    <calcite-action slot="secondaryAction"></calcite-action>
  </calcite-value-list-item>
</calcite-value-list>
```
