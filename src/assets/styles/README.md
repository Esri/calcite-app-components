# Styles and Theme-compatibility

Each component stylesheet (.scss) should access the CSS variables defined in these partials:

- src/assets/styles/\_color.scss
- src/assets/styles/\_layout.scss
- src/assets/styles/\_type.scss

The CSS variable names are meant to be instructive. Note that in `_color.scss`, "foreground" generally indicates the color to be used for text and icons.

The partials use Sass variable to reference values from [calcite-colors](https://github.com/Esri/calcite-colors) and [calcite-base](https://github.com/ArcGIS/calcite-base). These are the same libraries being used by [calcite-components](https://github.com/ArcGIS/calcite-components).

## Themes

There is the default "light" theme and an opt-in "dark" theme. If you want to use the dark theme, simply add the `theme="dark"` attribute to the relevant component(s). Doing so will switch the color CSS variables. See the `_color.scss` partial for reference.
