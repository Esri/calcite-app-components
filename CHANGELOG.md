# Changelog

This document maintains a list of released versions and changes introduced by those versions.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [UNRELEASED]

### Features

- Tip manager pagination supports arrow keys
- New Component: PickList

## [v2.1.0]

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

## [v2.0.2](https://github.com/Esri/calcite-app-components/tree/v2.0.2) (2019-08-23)

### Bug Fixes

- Fixed Edge bug with `calcite-flow` demo
- All components will honor the `hidden` attribute now and not display.
- Fix bug with `calcite-action-pad` and `calcite-shell-floating-panel` requiring `position-type` instead of `placement`.

## [v2.0.1](https://github.com/Esri/calcite-app-components/tree/v2.0.1) (2019-08-23)

### Bug Fixes

- Enhance demos with RTL examples
- Fix reference to utils
- Fixed `calcite-floating-shell-panel` positioning
- RTL support for `calcite-flow-item`, `calcite-shell-floating-panel` and `calcite-action-pad`

## [v2.0.0](https://github.com/Esri/calcite-app-components/tree/v2.0.0) (2019-08-21)

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
