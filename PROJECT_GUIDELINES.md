# Project Guidelines

Hey there and thanks for stopping by! We welcome all feedback and contributions to Calcite App Components. If you are interested in getting involved, we ask that you give our guidelines a quick read through. Below is a list of things we've found work well for us as we continue developing our components.

## TOC

- [Code of Conduct](https://github.com/Esri/contributing/blob/master/CODE_OF_CONDUCT.md)
- [Contibution Guidelines](https://github.com/esri/contributing)

- [Conventions](#conventions)
  - [Formatting](#formatting)
  - [Github](#github)
- [Dist/Package](https://github.com/Esri/calcite-app-components/blob/master/GETTING_STARTED.md_)
- [Code Base](#code-base)
  - [A11y](#a11y)
  - [Components](#components)

## Conventions

### Formatting

There is a script that automatically formats our code for us to keep everything looking clean, but we ask that you keep in mind things like formatting and other [best practices](https://en.wikipedia.org/wiki/Best_coding_practices) when contributing to our repo.

### Github

#### Issues

There are [templates](https://github.com/Esri/calcite-app-components/issues/new/choose) for new issues that should be followed for consistency.

#### Commits

We ask that commits have informative headers and if necessary, a detailed body- squash-merge commit messages go straight into the changelog. Please follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)! If the contribution will cause a breaking change, be sure to add sufficient information about it.

#### Pull Requests

This project has an GitHub App installed to automatically perform semantic status checks on open pull requests.

The [Semantic Pull Request](https://github.com/probot/semantic-pull-requests) status check will ensure your pull requests are semantic before you merge them.

👮 Note! The default behavior of this bot is not to police all commit messages, but rather to ensure that every PR has just **enough semantic information** to be able to trigger a release when appropriate.

#### Be Semantic!

- Add a semantic [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/).
- Edit the PR title by adding a semantic prefix like `fix:` or `feat:` or any other [conventional commit type](https://github.com/commitizen/conventional-commit-types/blob/master/index.json).

#### Contributing

Please see our [contributing guidelines](https://github.com/Esri/calcite-app-components/blob/master/CONTRIBUTING.md).

## Code Base

Our code base is written in typescript.

### A11y

We generally follow the guidelines and standards in these articles:

- [Google accessibility overview](https://developers.google.com/web/fundamentals/accessibility/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)

### Components

Have an idea for a new component? Awesome! Check out our [new component checklist](https://github.com/Esri/calcite-app-components/wiki/New-Component-Checklist) and submit an [issue](https://github.com/Esri/calcite-app-components/issues/new?assignees=&labels=new+component%2C+0+-+new%2C+architecture&template=new-component.md&title=New+Component%3A+).

#### Styling

Our setup uses the shadow DOM, so most of our styles are encapsulated in our calcite design system. We like it this way because it keeps our components consistent across applications.

#### Utils

##### Unique IDs for components

Many times it is necessary for components to have a `id="something"` attribute for things like `<label>` and various `aria-*` properties. To safely generate a unique id for a component but to also allow a user supplied `id` attribute to work follow the following pattern:

```
import { guid } from "../../utils/guid";

@Component({
  tag: "calcite-example",
  styleUrl: "calcite-example.scss",
  shadow: true
})
export class CalciteExample {

  // ...

  guid: string = `calcite-example-${guid()}`;

  render() {
    const id = this.el.id || this.guid;
    return (
      <Host id={id}></Host>
    );
  }

  // ...
}
```

This will create a unique id attribute like `id="calcite-example-51af-0941-54ae-22c14d441beb"` which should have a VERY low collision change since guid() generates IDs with `window.crypto.getRandomValues`. If a user supplies an `id` this will respect the users `id`.

##### i18n

Components should require as a few text translations as possible. In general lets users supply text values via slots and attributes. The lets user handle translations with their apps.

If you component involves formatting numbers or dates use the [`Intl` APIs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) for formating the display of numbers and dates in your component.

To add RTL support to your components you should use the internal `getElementDir` helper to apply the `dir` attribute to your component. This means that your components `dir` attribute will always match the documents `dir`.

```tsx
import { Component, Host, Element, h} from "@stencil/core";
import { getElementDir } from "../../utils/dom";

@Component({
  tag: "calcite-component",
  styleUrl: "calcite-component.scss",
  shadow: true
})
export class CalciteComponent {
  @Element() el: HTMLElement;

  // ...

  render() {
    const dir = getElementDir(this.el);

    return (
      <Host dir={dir}>
        <!-- The rest of your component -->
      </Host>
    );
  }
}
```

You can then implement direction specific CSS with CSS variables:

```scss
:host {
  --calcite-tabs-tab-margin-start: 1.25rem;
  --calcite-tabs-tab-margin-end: 0;
}

:host([dir="rtl"]) {
  --calcite-tabs-tab-margin-start: 0;
  --calcite-tabs-tab-margin-end: 1.25rem;
}
```

Your component and its child components can then use `var(--calcite-tabs-tab-margin-start)` to access their proper values based on the direction of the document.

In future it will likely become necessary to provide sting translations for components. An example would be the `aria-label` for the `<calcite-modal>` close button. Initial research looks promising and we could likely implement one of these approaches and set a `lang` for each component similar to how we set `dir`.

- https://medium.com/stencil-tricks/implementing-internationalisation-i18n-with-stencil-5e6559554117 and https://codesandbox.io/s/43pmx55vo9
- https://github.com/ionic-team/ionic-stencil-conference-app/issues/69

#### Testing

#### Browser Support

Our components are best used in most modern browsers, though there have been some complications with stencil loading elements polyfills in Edge. So, some APIs that are available in Chrome and Firefox aren't available in Edge. Internet Explorer is not recommended to use with our web components.
