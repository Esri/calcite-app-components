# Changelog

This document maintains a list of released versions and changes introduced by those versions.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

### [4.10.1](https://github.com/Esri/calcite-app-components/compare/v4.10.0...v4.10.1) (2019-12-12)

### Bug Fixes

- **panel:** flex grow, shrink, basis for panel headers and footers ([8c41414](https://github.com/Esri/calcite-app-components/commit/8c414140d4246a42e1cdcb0cd6c66dc1f8386b69)), closes [#642](https://github.com/Esri/calcite-app-components/issues/642)

## [4.10.0](https://github.com/Esri/calcite-app-components/compare/v4.9.0...v4.10.0) (2019-12-11)

### Bug Fixes

- **panel:** adding min-heights for panel header and footer ([facc4c7](https://github.com/Esri/calcite-app-components/commit/facc4c7988e876244792b86fe832c64c64900693)), closes [#565](https://github.com/Esri/calcite-app-components/issues/565)
- **flow:** Fix animation being removed when the subtree of a flow changes during the animation. ([876b8963](https://github.com/Esri/calcite-app-components/commit/876b89639961688a69abded9160b09cf4d99431d)), closes [#626](https://github.com/Esri/calcite-app-components/issues/626)

## [4.9.0](https://github.com/Esri/calcite-app-components/compare/v4.8.0...v4.9.0) (2019-12-10)

### Features

- add mixin for interim focus style ([a13cebf](https://github.com/Esri/calcite-app-components/commit/a13cebf85e81c1af8f8e8b036033fbb14627eefb)), closes [#573](https://github.com/Esri/calcite-app-components/issues/573)

### Bug Fixes

- added default slots documentation [#561](https://github.com/Esri/calcite-app-components/issues/561)" ([#622](https://github.com/Esri/calcite-app-components/issues/622)) ([9ed8d74](https://github.com/Esri/calcite-app-components/commit/9ed8d74f25a583c2f1c3d22470528d403d1c8f71))
- demo pages in IE11 ([#610](https://github.com/Esri/calcite-app-components/issues/610)) ([56c7100](https://github.com/Esri/calcite-app-components/commit/56c7100ddd65e992e225ee101dbad489ee0e027e))
- JS error in flow demo by removing unnecessary script. [#617](https://github.com/Esri/calcite-app-components/issues/617) ([f2f81d5](https://github.com/Esri/calcite-app-components/commit/f2f81d5e33051fd938c085c6917b719850e2df2f))
- keep value-list-item selected in sync with pick-list-item ([#623](https://github.com/Esri/calcite-app-components/issues/623)) ([100eaf0](https://github.com/Esri/calcite-app-components/commit/100eaf0e9a2f47e39dd6f55f7464b443b2a30573))
- **value-list-item:** focus inset ([e461ea9](https://github.com/Esri/calcite-app-components/commit/e461ea9835d086455a5374208a89790e8ceeddd0)), closes [#573](https://github.com/Esri/calcite-app-components/issues/573)
- Only render header when a heading exists or the dismiss button. [#566](https://github.com/Esri/calcite-app-components/issues/566) ([#613](https://github.com/Esri/calcite-app-components/issues/613)) ([3aaadec](https://github.com/Esri/calcite-app-components/commit/3aaadec2968348198fc34c4f1ce21c2b810f60fc))
- PickList and ValueList shift deselect list items now working 551 ([#581](https://github.com/Esri/calcite-app-components/issues/581)) ([be6f594](https://github.com/Esri/calcite-app-components/commit/be6f59492586cc6bccfa9b32d66ace676e73eb63))

## [4.8.0](https://github.com/Esri/calcite-app-components/compare/v4.7.1...v4.8.0) (2019-11-27)

### Features

- add clear button to filter ([#575](https://github.com/Esri/calcite-app-components/issues/575)) ([302a13d](https://github.com/Esri/calcite-app-components/commit/302a13dc3e91fd04c8048af3baca97c8d077443d))
- removed text node from filter label. ([#574](https://github.com/Esri/calcite-app-components/issues/574)) ([d53be8d](https://github.com/Esri/calcite-app-components/commit/d53be8d2b53e3856947ce8527687d4096ff9cd07))
- value list drag drop keyboard support 356 ([#559](https://github.com/Esri/calcite-app-components/issues/559)) ([630b813](https://github.com/Esri/calcite-app-components/commit/630b81393c7be7b86c969d27efc1e1b29edd2e15))

### Bug Fixes

- Convert js files from es6 to es5 ([#589](https://github.com/Esri/calcite-app-components/issues/589)) ([789554f](https://github.com/Esri/calcite-app-components/commit/789554f2ff7788bcbe0350249f5989d63344bb1e))
- prevent deselection for single-select lists ([#585](https://github.com/Esri/calcite-app-components/issues/585)) ([c04bdb7](https://github.com/Esri/calcite-app-components/commit/c04bdb75a5ef6ddace10776805b9b1bcf5494a1f))
- **block:** hide collapse icon when a control is provided in Edge ([#582](https://github.com/Esri/calcite-app-components/issues/582)) ([6d9f0e3](https://github.com/Esri/calcite-app-components/commit/6d9f0e3c51267a0738ff92491e78cd321d07f764)), closes [#540](https://github.com/Esri/calcite-app-components/issues/540) [#540](https://github.com/Esri/calcite-app-components/issues/540)

### [4.7.1](https://github.com/Esri/calcite-app-components/compare/v4.7.0...v4.7.1) (2019-11-20)

### Bug Fixes

- **Action:** focus outline ([a6431a5](https://github.com/Esri/calcite-app-components/commit/a6431a5)), closes [#569](https://github.com/Esri/calcite-app-components/issues/569)
- calcite-block disabled state doesn't 'hide' slider handle [#560](https://github.com/Esri/calcite-app-components/issues/560) ([#567](https://github.com/Esri/calcite-app-components/issues/567)) ([8d823db](https://github.com/Esri/calcite-app-components/commit/8d823db))

## [4.7.0](https://github.com/Esri/calcite-app-components/compare/v4.6.0...v4.7.0) (2019-11-14)

### Bug Fixes

- **panel:** header-content layout when leading slot is empty ([#547](https://github.com/Esri/calcite-app-components/issues/547)) ([2bff76a](https://github.com/Esri/calcite-app-components/commit/2bff76a)), closes [#556](https://github.com/Esri/calcite-app-components/issues/556)
- Stencil build warnings ([#537](https://github.com/Esri/calcite-app-components/issues/537)) ([d2e1721](https://github.com/Esri/calcite-app-components/commit/d2e1721))

### Features

- **action:** add ability to set appearance to clear ([a4994a9](https://github.com/Esri/calcite-app-components/commit/a4994a9)), closes [#557](https://github.com/Esri/calcite-app-components/issues/557)

## [4.6.0](https://github.com/Esri/calcite-app-components/compare/v4.5.1...v4.6.0) (2019-11-13)

### Bug Fixes

- **value-list-item:** last child selection ([158b3e6](https://github.com/Esri/calcite-app-components/commit/158b3e6)), closes [#542](https://github.com/Esri/calcite-app-components/issues/542)
- remove Edge's non-standard broken clear btn from filter ([#522](https://github.com/Esri/calcite-app-components/issues/522)) ([233acd6](https://github.com/Esri/calcite-app-components/commit/233acd6))
- Shell styling for TipManager ([#514](https://github.com/Esri/calcite-app-components/issues/514)) ([e080f74](https://github.com/Esri/calcite-app-components/commit/e080f74)), closes [#477](https://github.com/Esri/calcite-app-components/issues/477)

### Features

- Add property & event for toggling the opening or closing of the TipManager ([#533](https://github.com/Esri/calcite-app-components/issues/533)) ([7d5533e](https://github.com/Esri/calcite-app-components/commit/7d5533e))
- CalcitePanel - Add scale property to set dynamic height [#513](https://github.com/Esri/calcite-app-components/issues/513) ([#541](https://github.com/Esri/calcite-app-components/issues/541)) ([d33e22c](https://github.com/Esri/calcite-app-components/commit/d33e22c))
- picklist sticky filter 503 ([#509](https://github.com/Esri/calcite-app-components/issues/509)) ([f6efd78](https://github.com/Esri/calcite-app-components/commit/f6efd78))

### [4.5.1](https://github.com/Esri/calcite-app-components/compare/v4.5.0...v4.5.1) (2019-11-06)

### Bug Fixes

- Set the property of the component instead of the attribute ([#502](https://github.com/Esri/calcite-app-components/issues/502)) ([b0f554d](https://github.com/Esri/calcite-app-components/commit/b0f554d))

### Style Fixes

- block-section: missed style for switch mode ([#507](https://github.com/Esri/calcite-app-components/issues/507))
- action-pad: added missing styles ([#502](https://github.com/Esri/calcite-app-components/issues/502))

## [4.5.0](https://github.com/Esri/calcite-app-components/compare/v4.4.0...v4.5.0) (2019-11-06)

### Bug Fixes

- **flow-item:** - Fix conflict between `menu-actions` own slot and slot defined in the `calcite-pick-list` and `calcite-value-list`. [#497](https://github.com/Esri/calcite-app-components/issues/497) ([6764d6c](https://github.com/Esri/calcite-app-components/commit/6764d6c))
- **flow-item and panel:** footer buttons width corrected [#367](https://github.com/Esri/calcite-app-components/issues/367) ([f4a69f9](https://github.com/Esri/calcite-app-components/commit/f4a69f9))
- **pick-list and value-list:** filter now works if props have been modified after first-render ([#400](https://github.com/Esri/calcite-app-components/issues/400)) ([79f8146](https://github.com/Esri/calcite-app-components/commit/79f8146)), closes [#484](https://github.com/Esri/calcite-app-components/issues/484) [#488](https://github.com/Esri/calcite-app-components/issues/488)

### Features

- **pick-list and value-list:** filter now only filters on text, value and metadata props ([#461](https://github.com/Esri/calcite-app-components/issues/461)) ([51fd559](https://github.com/Esri/calcite-app-components/commit/51fd559)), closes [#484](https://github.com/Esri/calcite-app-components/issues/484) [#488](https://github.com/Esri/calcite-app-components/issues/488)

## [4.4.0](https://github.com/Esri/calcite-app-components/compare/v4.3.1...v4.4.0) (2019-10-29)

### Bug Fixes

- **block:** fixed caret resizing ([#453](https://github.com/Esri/calcite-app-components/issues/453)) ([8716e56](https://github.com/Esri/calcite-app-components/commit/8716e56))
- **pick-list-item:** fix text wrapping and overflowing. ([#430](https://github.com/Esri/calcite-app-components/issues/430) [#439](https://github.com/Esri/calcite-app-components/issues/439)) ([8a80c44](https://github.com/Esri/calcite-app-components/commit/8a80c44))
- **pick-list-item:** summary text overflow fix ([#439](https://github.com/Esri/calcite-app-components/issues/439)) ([abbc672](https://github.com/Esri/calcite-app-components/commit/abbc672))
- **value-list-item:** removed redundant padding. ([#456](https://github.com/Esri/calcite-app-components/issues/456)). ([58fe3c0](https://github.com/Esri/calcite-app-components/commit/58fe3c0))

### Features

- **block:** add `icon` slot for header icon ([33dc43d](https://github.com/Esri/calcite-app-components/commit/33dc43d))
- **block:** hide collapsible icon when a control is provided. ([57b22f0](https://github.com/Esri/calcite-app-components/commit/57b22f0))
- **pick-list-item:** Exclude text-description in compact mode. ([#447](https://github.com/Esri/calcite-app-components/issues/447)) ([4d7c652](https://github.com/Esri/calcite-app-components/commit/4d7c652))

### [4.3.1](https://github.com/Esri/calcite-app-components/compare/v4.2.1...v4.3.1) (2019-10-23)

### Bug Fixes

- **pick-list:** filter not working with Maquette ([#400](https://github.com/Esri/calcite-app-components/issues/391)) ([#461](https://github.com/Esri/calcite-app-components/issues/391)) ([37a074c](https://github.com/Esri/calcite-app-components/commit/37a074c))
- **pick-list, value-list:** spacebar on secondaryAction no longer triggers selection/deselection ([#309](https://github.com/Esri/calcite-app-components/issues/309)) ([0b83c2c](https://github.com/Esri/calcite-app-components/commit/0b83c2c))

## [4.3.0](https://github.com/Esri/calcite-app-components/compare/v4.2.1...v4.3.0) (2019-10-22)

### Bug Fixes

- **pick-list-item** spacebar on secondaryAction no longer toggles selection. ([#326](https://github.com/Esri/calcite-app-components/issues/326))
- **block** Set CalciteBlock color variables for dark theme. ([#427](https://github.com/Esri/calcite-app-components/issues/427))
- **pick-list** menu-actions slot styling. ([#417](https://github.com/Esri/calcite-app-components/issues/417))
- **calcite-flow-item** fix header text being cut off. ([#414](https://github.com/Esri/calcite-app-components/issues/414))
- **shell** Prevent vertical scrollbar from appearing when using action bar.
- **tip** Tip background color overlapping shadow. ([#398](https://github.com/Esri/calcite-app-components/issues/398))
- **panel** CalcitePanel: always render slot containers. ([#354](https://github.com/Esri/calcite-app-components/issues/354))
- **calcite-flow-item** No longer shows header-trailing-content without having menu-actions. ([#409](https://github.com/Esri/calcite-app-components/issues/409))

### Features

- **block:** Added loading and disabled props. Scrim overlay applies when either is true. ([#358](https://github.com/Esri/calcite-app-components/issues/358)) ([9ddab6a](https://github.com/Esri/calcite-app-components/commit/9ddab6a))
- **flow-item:** Added loading and disabled props. Scrim overlay applies when either is true. ([#359](https://github.com/Esri/calcite-app-components/issues/359)) ([d4caeca](https://github.com/Esri/calcite-app-components/commit/d4caeca))
- **panel:** Added loading and disabled props. Scrim overlay applies when either is true. ([#407](https://github.com/Esri/calcite-app-components/issues/407)) ([1f69c9f](https://github.com/Esri/calcite-app-components/commit/1f69c9f))
- **value-list:** Added loading and disabled props. Scrim overlay applies when either is true. ([#339](https://github.com/Esri/calcite-app-components/issues/339)) ([26027e2](https://github.com/Esri/calcite-app-components/commit/26027e2))
- **panel** Remove padding from panel content-container. ([#418](https://github.com/Esri/calcite-app-components/issues/418))
- **action** Added animations for interactive. ([#391](https://github.com/Esri/calcite-app-components/issues/391))

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
