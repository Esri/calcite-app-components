#### Basic

Renders a non-dismissible tip with a heading, thumbnail, info and a link.

```html
<calcite-tip
  non-dismissible
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

#### With storage-id

Renders a dismissable tip with storage-id. With storage-id, if the tip is closed and the page is refreshed, the tip will not reappear.

```html
<calcite-tip
  storage-id="foo"
  heading="Celestial Bodies"
  thumbnail="https://placeimg.com/100/100"
  text-thumbnail="This is an image of nature."
>
  <p slot="info">
    This tip has an image that is only 100px by 100px. The image frame sets the width but doesn't force the image to be
    larger than it's native size.
  </p>
  <a slot="link" href="http://www.esri.com">View Esri</a>
</calcite-tip>
```
