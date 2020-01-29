# Project Guidelines

Hey there and thanks for stopping by! We welcome all feedback and contributions to Calcite App Components. If you are interested in getting involved, we ask that you give our guidelines a quick read through. Below is a list of things we've found work well for us as we continue developing our components.

## TOC

- [Code of Conduct](https://github.com/Esri/contributing/blob/master/CODE_OF_CONDUCT.md)
- [Contibution Guidelines](https://github.com/esri/contributing)

- [Getting Started](#getting-started)
- [Github Workflow](#github-workflow)
  - [Issues](#issues)
  - [Commits](#commits)
  - [Pull Requests](#pull-requests)
- [Code Base](#code-base)
  - [Boilerplate Component](#boilerplate-component)
  - [Styling](#styling)
  - [Testing](#testing)
  - [Browswer Support](#browser-support)
- [Report a Bug](#report-a-bug)

## Getting Started

### Installation

```
npm install --save @esri/calcite-app-components
```

This will load all the dependencies for the project.

#### Script tag

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

#### Webpack

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

### TypeScript

Stencil provides a full set of typings for all the components in this repo. To make TypeScript aware of these components, just import the library:

```
import '@esri/calcite-app-components';
```

This will provide autocomplete of component names/properties, as well as additional HTML element types.

### Local Dev

#### Instructions

1. npm install
2. npm start
3. npm test

#### Requirements

- Notepad or your favorite HTML editor
- Web browser with access to the Internet

#### Deployment

1. Checkout the master branch. Your git working directory must be clean (no pending un-staged changes). You will also need to have setup a [github release token](https://github.com/medikoo/github-release-from-cc-changelog#prerequisites).
1. Run `npm version <patch | minor | major>`.
   Follow semantic versioning. Patch for bug fixes only. Major for breaking changes. Minor for the rest.
1. This will prepare everything for publishing as well as automatically update `CHANGELOG.md`.
1. Once `CHANGELOG.md` is reviewed and everything looks OK, you can publish to NPM by running `npm run release`.

### Updating Github Pages Docs

**NOTE:** This will happen automatically whenever there's a release. Follow steps below for manual docs update.

1. You'll need to generate a new stencil build for the docs by running `$ npm run docs`.
1. The docs will need to be committed or merged in the `master` branch before they take effect.

## Github Workflow

### Issues

There are [templates](https://github.com/Esri/calcite-app-components/issues/new/choose) for new issues that should be followed for consistency.

### Commits

We ask that commits have informative headers and if necessary, a detailed body. Please follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)! If the contribution will cause a breaking change, be sure to add sufficient information about it.

### Pull Requests

This project has an GitHub App installed to automatically perform semantic status checks on open pull requests.

The [Semantic Pull Request](https://github.com/probot/semantic-pull-requests) status check will ensure your pull requests are semantic before you merge them.

👮 Note! The default behavior of this bot is not to police all commit messages, but rather to ensure that every PR has just **enough semantic information** to be able to trigger a release when appropriate.

#### How it works

The PR title OR at least one commit messsage needs to have semantic prefix.

| Scenario                                                                                               | Status | Status Check Message                |
| ------------------------------------------------------------------------------------------------------ | ------ | ----------------------------------- |
| PR title is [semantic](https://github.com/commitizen/conventional-commit-types/blob/master/index.json) | 💚     | `ready to be squashed`              |
| any commit is semantic                                                                                 | 💚     | `ready to be merged or rebased`     |
| nothing is semantic                                                                                    | 💛     | `add a semantic commit or PR title` |

#### Be Semantic!

- Add a semantic [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/).
- Edit the PR title by adding a semantic prefix like `fix:` or `feat:` or any other [conventional commit type](https://github.com/commitizen/conventional-commit-types/blob/master/index.json).

#### Merging

We have configured GitHub to `Squash and Merge` to keep the `master` branch history clean.

## Code Base

Our code base is written in typescript and we love that it keeps our code type safe. There is a script that automatically formats our code for us to keep everything looking clean, but we ask that you keep in mind things like formatting and other [best practices](https://en.wikipedia.org/wiki/Best_coding_practices) when contributing to our repo.

### Boilerplate Component

See the [boilerplate example](https://github.com/Esri/calcite-app-components/blob/master/BOILERPLATE_COMPONENT.md) on how to create a new Calcite App Component!

### Styling

Our setup uses the shadow DOM, so most of our styles are encapsulated in our calcite design system. We like it this way because it keeps our components consistent across applications.

### Testing

### Browser Support

Our components are best used in most modern browsers, though there have been some complications with stencil loading elements polyfills in Edge. So, some APIs that are available in Chrome and Firefox aren't available in Edge. Internet Explorer is not recommended to use with our web components.

## Report a Bug

We use Github issues to keep track of bugs. Please follow our [bug issue template](https://github.com/Esri/calcite-app-components/issues/new?assignees=&labels=bug%2C+0+-+new&template=bug.md&title=Bug%3A+) and explain the problem clearly for us maintainers to understand and reproduce. The more details the better! Things to consider:

- Use a clear and descriptive title
- What is happening now vs what is expected to happen?
- Tell us how to reproduce the issue (eg. is it happening in a specific browser?)
- Screenshots and gifs are our friends!
- Did this problem start happening after a recent release or was it always a bug?
