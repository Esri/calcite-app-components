#### Default (non-collapsible)

```html
<calcite-block heading="Fruit" summary="It's nature's candy"> </calcite-block>
```

#### Header + control

The block has a header and a slot for adding a single HTML element (in the header).

```html
<calcite-block heading="This header" summary="it has an input">
  <div slot="control"><input placeholder="I am in control">
</calcite-block>
```
