# Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Pull Requests

This project has an GitHub App installed to automatically perform semantic status checks on open pull requests.

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

One of the following should be present for the PR to be semantic:

- Add a semantic [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/).
- Edit the PR title by adding a semantic prefix like `fix:` or `feat:` or any other [conventional commit type](https://github.com/commitizen/conventional-commit-types/blob/master/index.json).

### Merging

We have configured GitHub to `Squash and Merge` to keep the `master` branch history clean.
