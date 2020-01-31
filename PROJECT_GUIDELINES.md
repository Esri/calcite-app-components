# Project Guidelines

Hey there and thanks for stopping by! We welcome all feedback and contributions to Calcite App Components. If you are interested in getting involved, we ask that you give our guidelines a quick read through. Below is a list of things we've found work well for us as we continue developing our components.

## TOC

- [Code of Conduct](https://github.com/Esri/contributing/blob/master/CODE_OF_CONDUCT.md)
- [Contibution Guidelines](https://github.com/esri/contributing)

- [Conventions](#conventions)
  - [Issues](#issues)
  - [Commits](#commits)
  - [Pull Requests](#pull-requests)
- [Code Base](#code-base)
  - [Boilerplate Component](#boilerplate-component)
  - [Styling](#styling)
  - [Testing](#testing)
  - [Browser Support](#browser-support)
- [Report a Bug](#report-a-bug)

## Conventions

### Issues

There are [templates](https://github.com/Esri/calcite-app-components/issues/new/choose) for new issues that should be followed for consistency.

### Commits

We ask that commits have informative headers and if necessary, a detailed body- squash-merge commit messages go straight into the changelog. Please follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)! If the contribution will cause a breaking change, be sure to add sufficient information about it. 


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

We use Github issues to keep track of bugs. Please follow our [bug issue template](https://github.com/Esri/calcite-app-components/issues/new?assignees=&labels=bug%2C+0+-+new&template=bug.md&title=Bug%3A+) and explain the problem clearly for us maintainers to understand and reproduce. The more details the better!
Things to consider:

- Use a clear and descriptive title
- What is happening now vs what should happen?
- Tell us how to reproduce the issue (eg. is it happening in a specific browser?)
- Can it be reliably reproduced? If not, tell us how often it happens and under what circumstances.
- Screenshots and gifs are our friends!
- Did this problem start happening after a recent release or was it always a bug?
