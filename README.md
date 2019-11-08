[![Build Status](https://travis-ci.com/Esri/calcite-app-components.svg?branch=master)](https://travis-ci.com/Esri/calcite-app-components)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# calcite-app-components

A collection of calcite components for building single page applications.

[![App](src/assets/view-it-live.png)​](https://esri.github.io/calcite-app-components/)

​[View it live](https://esri.github.io/calcite-app-components/)

## Components

- [calcite-action](/src/components/calcite-action/readme.md)
- [calcite-action-bar](/src/components/calcite-action-bar/readme.md)
- [calcite-action-pad](/src/components/calcite-action-pad/readme.md)
- [calcite-block](/src/components/calcite-block/readme.md)
- [calcite-flow](/src/components/calcite-flow/readme.md)
- [calcite-panel](/src/components/calcite-panel/readme.md)
- [calcite-pick-list](/src/components/calcite-pick-list/readme.md)
- [calcite-shell](/src/components/calcite-shell/readme.md)
- [calcite-tip](/src/components/calcite-tip/readme.md)
- [calcite-tip-manager](/src/components/calcite-tip-manager/readme.md)
- [calcite-value-list](/src/components/calcite-value-list/readme.md)

## Installation

```
npm install --save @esri/calcite-app-components
```

### Script tag

`calcite-app-components` can be loaded via two `<script>` tags in the head of your HTML document:

```html
<script type="module" src="<path-to-calcite-app-components-package>/dist/calcite-app/calcite-app.esm.js"></script>
<script nomodule="" src="<path-to-calcite-app-components-package>/dist/calcite-app/calcite-app.js"></script>
```

Browsers that support modules will load the first, while older browsers will load the second, bundled version. It's worth noting that only components that are actually used will be loaded.

You will also need to add a `<link>` tag for the shared component styles:

```html
<link rel="stylesheet" href="<path-to-calcite-app-components-package>/dist/calcite-app/calcite-app.css" />
```

Once these tags are added, components can be used just like any other HTML element.

### Webpack

If you already have a webpack build for your project, you can simply use [@stencil/webpack](https://github.com/ionic-team/stencil-webpack) to add `calcite-app-components` to your bundle.

After installing `calcite-app-components`, install the plugin as a dev dependency:

```
npm install --save-dev @stencil/webpack
```

Then import and add the plugin in `webpack.config.js`:

```
const stencil = require('@stencil/webpack');

module.exports = {
  ...
  plugins: [
    new stencil.StencilPlugin()
  ]
}
```

Lastly, add the import in your main bundle js (or ts) file:

```
import '@esri/calcite-app-components/dist/calcite-app.js';
```

This will add the initial Stencil loader to your bundle, and copy over the actual component code to the output directory you've configured for Webpack. Components will still be lazy-loaded as they are needed. _Note:_ you must use the `.js` file path for the Webpack plugin to work correctly, even if your bundle file is a TypeScript file.

## TypeScript

Stencil provides a full set of typings for all the components in this repo. To make TypeScript aware of these components, just import the library:

```
import '@esri/calcite-app-components';
```

This will provide autocomplete of component names/properties, as well as additional HTML element types.

## Local Dev

### Instructions

1. npm install
2. npm start
3. npm test

### Requirements

- Notepad or your favorite HTML editor
- Web browser with access to the Internet

### Deployment

1. Checkout the master branch. Your git working directory must be clean (no pending un-staged changes).
1. Run `npm version <patch | minor | major>`.
   Follow semantic versioning. Patch for bug fixes only. Major for breaking changes. Minor for the rest.
1. This will prepare everything for publishing as well as automatically update `CHANGELOG.md`.
1. Once `CHANGELOG.md` is reviewed and everything looks OK, you can publish to NPM by running `npm run release`.

**\*Aside:** It will also update the docs for GitHub Pages and the READMEs for each component.

## Pull Requests

This project has an installed GitHub App to perform status checks on open pull requests.

The [Semantic Pull Request](https://github.com/probot/semantic-pull-requests) status check will ensure your pull requests are semantic before you merge them.

👮 Note! The default behavior of this bot is not to police all commit messages, but rather to ensure that every PR has just **enough semantic information** to be able to trigger a release when appropriate.

### How it works

The PR title OR at least one commit messsage needs to have semantic prefix.

| Scenario                                                                                               | Status | Status Check Message                |
| ------------------------------------------------------------------------------------------------------ | ------ | ----------------------------------- |
| PR title is [semantic](https://github.com/commitizen/conventional-commit-types/blob/master/index.json) | 💚     | `ready to be squashed`              |
| any commit is semantic                                                                                 | 💚     | `ready to be merged or rebased`     |
| nothing is semantic                                                                                    | 💛     | `add a semantic commit or PR title` |

### How to be semantic

- Add a semantic [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/).
- Edit the PR title by adding a semantic prefix like `fix:` or `feat:` or any other [conventional commit type](https://github.com/commitizen/conventional-commit-types/blob/master/index.json).

### Merging

We have configured GitHub to `Squash and Merge` to keep the `master` branch history clean.

## Updating Github Pages Docs

**NOTE:** This will happen automatically whenever there's a release. Follow steps below for manual docs update.

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
