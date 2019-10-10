# Changelog

This document maintains a list of released versions and changes introduced by those versions.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

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
