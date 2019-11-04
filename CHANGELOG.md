# Changelog

This document maintains a list of released versions and changes introduced by those versions.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [4.4.0](https://github.com/Esri/calcite-app-components/compare/v4.3.1...v4.4.0) (2019-10-29)

### Bug Fixes

- **block:** fixed caret resizing ([#453](https://github.com/Esri/calcite-app-components/issues/453)) ([8716e56](https://github.com/Esri/calcite-app-components/commit/8716e56))
- **pick-list-item:** fix text wrapping and not wrapping. Reset unrelated change. ([#430](https://github.com/Esri/calcite-app-components/issues/430) [#439](https://github.com/Esri/calcite-app-components/issues/439)) ([8a80c44](https://github.com/Esri/calcite-app-components/commit/8a80c44))
- **pick-list-item:** revert word-break. clean up. demo with long strings. ([#430](https://github.com/Esri/calcite-app-components/issues/430) [#439](https://github.com/Esri/calcite-app-components/issues/439)) ([b38d83e](https://github.com/Esri/calcite-app-components/commit/b38d83e))
- **pick-list-item:** summary text overflow fix ([#439](https://github.com/Esri/calcite-app-components/issues/439)) ([abbc672](https://github.com/Esri/calcite-app-components/commit/abbc672))
- **value-list-item:** removed redundant padding. ([#456](https://github.com/Esri/calcite-app-components/issues/456)). ([58fe3c0](https://github.com/Esri/calcite-app-components/commit/58fe3c0))

### Features

- **block:** add slot for header icon ([33dc43d](https://github.com/Esri/calcite-app-components/commit/33dc43d))
- **block:** hide collapsible icon when a control is provided. ([57b22f0](https://github.com/Esri/calcite-app-components/commit/57b22f0))
- **pick-list-item:** Exclude text-description in compact mode. ([#447](https://github.com/Esri/calcite-app-components/issues/447)) ([4d7c652](https://github.com/Esri/calcite-app-components/commit/4d7c652))

### [4.3.1](https://github.com/Esri/calcite-app-components/compare/v4.2.1...v4.3.1) (2019-10-23)

### Bug Fixes

- **panel:** moved position:relative to :host ([e2d65fc](https://github.com/Esri/calcite-app-components/commit/e2d65fc))
- filter items not working with maquette ([37a074c](https://github.com/Esri/calcite-app-components/commit/37a074c))
- spacebar on secondaryAction ([0b83c2c](https://github.com/Esri/calcite-app-components/commit/0b83c2c))

### Features

- **all:** blocking scrim + pick-list loading and disabled. TODO clean-up ([#361](https://github.com/Esri/calcite-app-components/issues/361) [#357](https://github.com/Esri/calcite-app-components/issues/357) [#358](https://github.com/Esri/calcite-app-components/issues/358) [#359](https://github.com/Esri/calcite-app-components/issues/359) [#361](https://github.com/Esri/calcite-app-components/issues/361) [#362](https://github.com/Esri/calcite-app-components/issues/362)) ([25d846e](https://github.com/Esri/calcite-app-components/commit/25d846e))
- **all:** blocking scrim. added option to turn off aria attibutes. ([a7d784a](https://github.com/Esri/calcite-app-components/commit/a7d784a))
- **all:** converted Scrim to FunctionalComponent. ([56f9dd2](https://github.com/Esri/calcite-app-components/commit/56f9dd2))
- **all:** Scrim as functional component. Added styles inline. ([2e77018](https://github.com/Esri/calcite-app-components/commit/2e77018))
- **all:** Scrim destructure. ([fffaa6e](https://github.com/Esri/calcite-app-components/commit/fffaa6e))
- **block:** a11y aria labels for disabled and loading ([#358](https://github.com/Esri/calcite-app-components/issues/358)) ([9a23101](https://github.com/Esri/calcite-app-components/commit/9a23101))
- **block:** added calcite-loader and associated styles. Updated demo. ([#358](https://github.com/Esri/calcite-app-components/issues/358)) ([a5b87c0](https://github.com/Esri/calcite-app-components/commit/a5b87c0))
- **block:** added disabled style. updated demo with way to toggle disabled property. ([#358](https://github.com/Esri/calcite-app-components/issues/358)) ([20e5ccd](https://github.com/Esri/calcite-app-components/commit/20e5ccd))
- **block:** added loading and disabled to destructuring. ([3f1e8dc](https://github.com/Esri/calcite-app-components/commit/3f1e8dc))
- **block:** added relative to .content ([#358](https://github.com/Esri/calcite-app-components/issues/358)) ([333ee89](https://github.com/Esri/calcite-app-components/commit/333ee89))
- **block:** demo tweak ([6978d8c](https://github.com/Esri/calcite-app-components/commit/6978d8c))
- **block:** moved attr out of Host. Removed aria-disabled. ([4394bf1](https://github.com/Esri/calcite-app-components/commit/4394bf1))
- **block:** removed unused method and associated import. ([a104f5e](https://github.com/Esri/calcite-app-components/commit/a104f5e))
- **block:** simplified loader insertion. Thanks [@jcfranco](https://github.com/jcfranco)! ([2e9f6c2](https://github.com/Esri/calcite-app-components/commit/2e9f6c2))
- **block:** updated prop description. ([5ebb2d3](https://github.com/Esri/calcite-app-components/commit/5ebb2d3))
- **block:** updated VNode import updated. ([eb04e7f](https://github.com/Esri/calcite-app-components/commit/eb04e7f))
- **block:** use Scrim for loading & disabled. ([9ddab6a](https://github.com/Esri/calcite-app-components/commit/9ddab6a))
- **flow-item, panel:** added loading and disabled props, nodes, and styles. ([#359](https://github.com/Esri/calcite-app-components/issues/359)) ([d4caeca](https://github.com/Esri/calcite-app-components/commit/d4caeca))
- **panel:** cleanup. ([323f6dc](https://github.com/Esri/calcite-app-components/commit/323f6dc))
- **panel:** cleanup. ([b12078c](https://github.com/Esri/calcite-app-components/commit/b12078c))
- **panel:** moved attr out of Host ([f5dd2a6](https://github.com/Esri/calcite-app-components/commit/f5dd2a6))
- **panel:** use Scrim for loading & disabled. ([1f69c9f](https://github.com/Esri/calcite-app-components/commit/1f69c9f))
- **value-list:** added container. move attr out of host ([046393a](https://github.com/Esri/calcite-app-components/commit/046393a))
- **value-list:** Added disabled and loading props. Destructuring and added aria. ([#362](https://github.com/Esri/calcite-app-components/issues/362)) ([4e59c5a](https://github.com/Esri/calcite-app-components/commit/4e59c5a))
- **value-list:** removed aria-disabled. ([22c711d](https://github.com/Esri/calcite-app-components/commit/22c711d))
- **value-list:** stub for Scrim. Waiting on [#381](https://github.com/Esri/calcite-app-components/issues/381). ([#362](https://github.com/Esri/calcite-app-components/issues/362)) ([abe254c](https://github.com/Esri/calcite-app-components/commit/abe254c))
- **value-list:** using Scrim for loading and disabled. ([26027e2](https://github.com/Esri/calcite-app-components/commit/26027e2))

## [4.3.0](https://github.com/Esri/calcite-app-components/compare/v4.2.1...v4.3.0) (2019-10-22)

### Bug Fixes

- **pick-list-item** spacebar on secondaryAction no longer toggles selection. #326
- **panel:** moved position:relative to :host. ([e2d65fc](https://github.com/Esri/calcite-app-components/commit/e2d65fc))
- **block** Set CalciteBlock color variables for dark theme. #427
- **pick-list** action slot styling. #417
- **calcite-flow-item** header text being cut off. #414
- **shell** remove shell min-width. #393
- **pick-list-item** Remove rtl utility class from CalcitePickListItem host. #298
- **tip** Tip background color overlapping shadow. #398
- **panel** CalcitePanel: always render slot containers. #354
- **calcite-flow-item** shows header-trailing-content without having menu-actions. #409
- Update README.md with latest first-class components.
- Fix `calciteListChange` event name in demo file.

### Features

- **all:** blocking scrim + pick-list loading and disabled.([#361](https://github.com/Esri/calcite-app-components/issues/361) [#357](https://github.com/Esri/calcite-app-components/issues/357) [#358](https://github.com/Esri/calcite-app-components/issues/358) [#359](https://github.com/Esri/calcite-app-components/issues/359) [#361](https://github.com/Esri/calcite-app-components/issues/361) [#362](https://github.com/Esri/calcite-app-components/issues/362)) ([25d846e](https://github.com/Esri/calcite-app-components/commit/25d846e))
- **block:** a11y aria labels for disabled and loading ([#358](https://github.com/Esri/calcite-app-components/issues/358)) ([9a23101](https://github.com/Esri/calcite-app-components/commit/9a23101))
- **block:** added calcite-loader and associated styles. Updated demo. ([#358](https://github.com/Esri/calcite-app-components/issues/358)) ([a5b87c0](https://github.com/Esri/calcite-app-components/commit/a5b87c0))
- **block:** added disabled style. updated demo with way to toggle disabled property. ([#358](https://github.com/Esri/calcite-app-components/issues/358)) ([20e5ccd](https://github.com/Esri/calcite-app-components/commit/20e5ccd))
- **block:** added loading and disabled to destructuring. ([3f1e8dc](https://github.com/Esri/calcite-app-components/commit/3f1e8dc))
- **flow-item, panel:** added loading and disabled props, nodes, and styles. ([#359](https://github.com/Esri/calcite-app-components/issues/359)) ([d4caeca](https://github.com/Esri/calcite-app-components/commit/d4caeca))
- **panel:** use Scrim for loading & disabled. ([1f69c9f](https://github.com/Esri/calcite-app-components/commit/1f69c9f))
- **value-list:** Added disabled and loading props. Destructuring and added aria. ([#362](https://github.com/Esri/calcite-app-components/issues/362)) ([4e59c5a](https://github.com/Esri/calcite-app-components/commit/4e59c5a))
- **panel** Remove padding from panel content-container. #418
- **action** style(action): added animations for interactive. #391
- Update calcite components to 1.0.0-beta.11

### [4.2.1](https://github.com/Esri/calcite-app-components/compare/v4.2.0...v4.2.1) (2019-10-17)

### Bug Fixes

- **pick-list:** selectedValues no longer drops selected items. ([a9e3a02](https://github.com/Esri/calcite-app-components/commit/a9e3a02))

## [4.2.0](https://github.com/Esri/calcite-app-components/compare/v4.1.1...v4.2.0) (2019-10-17)

### Bug Fixes

- **block:** add padding to block > header > .toggle when closed ([6e33c45](https://github.com/Esri/calcite-app-components/commit/6e33c45))
- **demos:** updated ids ([#318](https://github.com/Esri/calcite-app-components/issues/318)). ([acad593](https://github.com/Esri/calcite-app-components/commit/acad593))
- **docs:** improve type assertion for docs build ([fb53c73](https://github.com/Esri/calcite-app-components/commit/fb53c73))
- **lists:** added bg-color rules. ([#364](https://github.com/Esri/calcite-app-components/issues/364)) ([20ef306](https://github.com/Esri/calcite-app-components/commit/20ef306))
- **panel, flow-item:** added min-height. ([a16d390](https://github.com/Esri/calcite-app-components/commit/a16d390))
- **pick-list demo:** fixed incorrect ids in the demo. ([e2d8e89](https://github.com/Esri/calcite-app-components/commit/e2d8e89))

### Features

- **action:** a11y aria labels for disabled and loading ([#357](https://github.com/Esri/calcite-app-components/issues/357)) ([f519384](https://github.com/Esri/calcite-app-components/commit/f519384))
- **action:** added calcite-loader and associated styles ([#357](https://github.com/Esri/calcite-app-components/issues/357)) ([3b25f47](https://github.com/Esri/calcite-app-components/commit/3b25f47))
- **action:** removed this. ([#357](https://github.com/Esri/calcite-app-components/issues/357)) ([1ff2543](https://github.com/Esri/calcite-app-components/commit/1ff2543))
- **action:** updated disabled styles. updated demo. ([aed0cad](https://github.com/Esri/calcite-app-components/commit/aed0cad))
- **pick-list:** adding compact mode ([3b6e7a9](https://github.com/Esri/calcite-app-components/commit/3b6e7a9))
- **testing:** add a11y test helper ([5a2dc82](https://github.com/Esri/calcite-app-components/commit/5a2dc82))

## [4.1.1](https://github.com/Esri/calcite-app-components/compare/v4.1.0...v4.1.1) (2019-10-08)

### Bug Fixes

- Fixed: Corrected slot name in PickList. Now named `menu-actions`
- Fixed: Clicking Edit on a Flow component no longer re-triggers animations #343

## [4.1.0](https://github.com/Esri/calcite-app-components/compare/v4.0.0...v4.1.0) (2019-10-08)

### Features

- New Component: `calcite-value-list` and `calcite-value-list-item`. #279
- Added `toggleDisplay` property to `calcite-block-section` to handle a "switch" mode. #205
- Added `calcite-components` as a peer dependency. #205
- Added Travis CI integration for testing. #152
- Added `filterEnabled` prop to PickList. Filter is now disabled by default.
- PickListItem `calciteListItemChange` event now properly bubbles up beyond the PickList.

### Bug Fixes

- Fixed: VDOM rendering by updating Stencil.js to 1.6.1.
- Fixed: Collapsible Block needs full focus outline. #308

### Deprecations

- PickListItem `textHeading` prop replaced with `textLabel`.
- PickList `dragEnabled` and `mode` props have been deprecated with the release of `ValueList`
- PickList `textHeading` has been deprecated as the heading has been removed from render.
- PickLIst `calcitePickListSelectionChange` has been replaced with `calciteListChange`

## [4.0.0](https://github.com/Esri/calcite-app-components/compare/v3.1.0...v4.0.0) (2019-10-01)

### Features

- New component: `calcite-panel` component for generic application panel layout with an option to be dismissable.
- CalcitePickList: Introduces a generic filter component. Internally, it uses an text input for interaction.
- CalciteAction: New property `textDisplay` for configuring how text is displayed within a `calcite-action` that replaces and deprecates `textEnabled`. #313
- Added `calcite-shell` full window demo.
- Update Stencil.js to 1.5.3.
- Update dependencies `calcite-base`, `calcite-ui-icons` and `calcite-colors`.

### Bug Fixes

- PickList: Clicking the picklist secondary action icon should focus the surrounding button. #310
- PickList: add pre-select logic on componentDidLoad. #305
- Block: Collapsible Block needs full focus outline. #308
- CalciteActionBar: `calcite-action-bar` should be responsive in some manner. #286
- CalciteTipManager: User should not be able to use arrow keys on tip manager navigation buttons. #307
- CalciteTipManager: Keyboard Users should be able to scroll content inside of a tip manager. #306
- CalciteAction & CalciteActionPad: Make sure host elements have a display set if they are not inline components.
- CalciteTip: Fixed dismissed tip still showing padding.

### BREAKING CHANGES

- Removed Component: `calcite-shell-floating-panel` has been removed. `calcite-panel` should be used instead.

## [3.1.0](https://github.com/Esri/calcite-app-components/compare/v3.0.0...v3.1.0) (2019-09-24)

### Features

- Tip now uses the hidden attribute in place of dismissed
- Pick-List-Item now supports the disabled attribute
- Pick-List-Item now supports keyboard accessibility

### Bug Fixes

- tabindex on Tip Manager is no longer listed as a custom API prop.

## [3.0.0](https://github.com/Esri/calcite-app-components/compare/v2.3.0...v3.0.0) (2019-09-20)

### Features

- PickList styling updated.
- Documentation referring to a each components slots are now auto generated.
- Small documentation and demo updates.

### BREAKING CHANGES

- Removed Component: Moved `calcite-popover` component to the 'calcite-components' project.

### Bug Fixes

- Pick-List now properly shows pre-selected items in change event selection map.

## [2.3.0](https://github.com/Esri/calcite-app-components/compare/v2.2.0...v2.3.0) (2019-09-12)

### Features

- New Component: `calcite-popover` component to handle positioning a component in reference to another element.
- Updated `calcite-ui-icons` dependency to version 2.5.0.

## [2.2.0](https://github.com/Esri/calcite-app-components/compare/v2.1.0...v2.2.0) (2019-09-10)

### Features

- Tip manager pagination supports arrow keys
- New Component: [PickList](./src/components/calcite-pick-list/readme.md)

## [2.1.0](https://github.com/Esri/calcite-app-components/compare/v2.0.2...v2.1.0) (2019-09-10)

### Features

- `calciteActionBarToggle` event added to `calcite-action-bar`. Event triggers when bar expands/collapses.
- `calciteShellPanelToggle` event added to `calcite-shell-panel`. Event triggers when panel expands/collapses.
- `calcite-action` - Collapse button width when not text-enabled.
- `calcite-shell` `primary panel slot` now renders above `default slot`.

### Bug Fixes

- `calcite-action` inddicator now vertically centers properly when there's no text.
- `calcite-tip-manager` pagination buttons now display properly in right-to-left environments.
- `calcite-tip-manager` hides pagination when there are 0 or 1 tip(s).
- `calcite-tip-manager` min-height set for when there are 0 tips.

## [2.0.2](https://github.com/Esri/calcite-app-components/compare/v2.0.1...v2.0.2) (2019-08-23)

### Bug Fixes

- Fixed Edge bug with `calcite-flow` demo
- All components will honor the `hidden` attribute now and not display.
- Fix bug with `calcite-action-pad` and `calcite-shell-floating-panel` requiring `position-type` instead of `placement`.

## [2.0.1](https://github.com/Esri/calcite-app-components/compare/v2.0.0...v2.0.1) (2019-08-23)

### Bug Fixes

- Enhance demos with RTL examples
- Fix reference to utils
- Fixed `calcite-floating-shell-panel` positioning
- RTL support for `calcite-flow-item`, `calcite-shell-floating-panel` and `calcite-action-pad`

## [2.0.0](https://github.com/Esri/calcite-app-components/compare/v1.0.0...v2.0.0) (2019-08-21)

### BREAKING CHANGES

- Renamed built files from `calcite-components` to `calcite-app-components`
  This changes the implementation reference files. [See the README for details](https://github.com/Esri/calcite-app-components/blob/v2.0.0/README.md#installation).
- Renamed `calcite-floating-panel` to `calcite-shell-floating-panel`

### Features

- Add events to close/dismissed events to `calcilte-shell-floating-panel`, `calcite-tip-manager`, `calcite-tip`.

### Performance Improvements

- Remove `calcite-components` from distributable.

## [1.0.0](https://github.com/Esri/calcite-app-components/tree/v1.0.0) (2019-08-20)

### Features

Add the following components:

- `calcite-action`
- `calcite-action-bar`
- `calcite-action-pad`
- `calcite-block`
- `calcite-flow`
- `calcite-flow-item`
- `calcite-shell`
- `calcite-shell-panel`
- `calcite-tip`
- `calcite-tip-manager`
