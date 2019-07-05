# calcite-app-components

A collection of calcite components for building single page applications.

## Features

### [Demos](https://arcgis.github.io/calcite-app-components/)

## Local Dev

### Instructions

1. npm install
2. npm start
3. npm test

### Requirements

- Notepad or your favorite HTML editor
- Web browser with access to the Internet

### Testing

#### Gotchas

Disabling headless mode and enabling devtools causes calls to `page.setContent(<html>)` to fail in end to end tests.
A workaround is manually modifying the waitUntil option in `<projectDir>\node_modules\@stencil\core\dist\testing\index.js` Line 39000 to 'load'.

## Updating Github Pages Docs

1. You'll need to generate a new stencil build for the docs by running `$ npm run docs`.
1. The docs will need to be committed or merged in the `master` branch before they take effect.

## Resources

- [ArcGIS for JavaScript API Resource Center](http://help.arcgis.com/en/webapi/javascript/arcgis/index.html)
- [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
- [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.github.com/Esri/quickstart-map-js/master/license.txt) file.

[](Esri Tags: JavaScript Calcite Components UI Typescript)
[](Esri Language: TypeScript)​
