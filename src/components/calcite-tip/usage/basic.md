#### Basic

Renders a tip with a heading, thumbnail, info and a link.

```html
<calcite-tip
  heading="Celestial Bodies!"
  thumbnail="https://placeimg.com/1000/600"
  text-thumbnail="This is an image of nature."
>
  <p slot="info">
    Normal tip with a landscape or square image and a small amount of text in the "info" slot.
  </p>
  <a slot="link" href="http://www.esri.com">Put a link hurr!</a>
</calcite-tip>
```
