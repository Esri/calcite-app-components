# Changelog

This document maintains a list of released versions and changes introduced by those versions.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

### [5.7.3](https://github.com/Esri/calcite-app-components/compare/v5.7.2...v5.7.3) (2020-04-08)

### Bug Fixes

- **pick-list-item:** update filled circle icon setup ([#922](https://github.com/Esri/calcite-app-components/issues/922)) ([dbbb8ef](https://github.com/Esri/calcite-app-components/commit/dbbb8ef21393c7c6d217820ee44927f21c6b636c))

### [5.7.2](https://github.com/Esri/calcite-app-components/compare/v5.7.1...v5.7.2) (2020-04-07)

### Bug Fixes

- **value-list:** restore DND setup ([#921](https://github.com/Esri/calcite-app-components/issues/921)) ([9f81684](https://github.com/Esri/calcite-app-components/commit/9f816846ea5e741b15731bec3d6d615418794f2f))

### [5.7.1](https://github.com/Esri/calcite-app-components/compare/v5.7.0...v5.7.1) (2020-04-07)

### Bug Fixes

- **action, flow, pick-list, sortable-list, tip-manager, value-list:** react to DOM mutations earlier to avoid stagnant renders ([#920](https://github.com/Esri/calcite-app-components/issues/920)) ([700d9f8](https://github.com/Esri/calcite-app-components/commit/700d9f8901abb1a29e5ee01850f920e0ea73d320)), closes [#919](https://github.com/Esri/calcite-app-components/issues/919)

## [5.7.0](https://github.com/Esri/calcite-app-components/compare/v5.6.1...v5.7.0) (2020-04-03)

### Features

- **action-bar,action-pad:** Add tooltipExpand property ([#904](https://github.com/Esri/calcite-app-components/issues/904)) ([94476e9](https://github.com/Esri/calcite-app-components/commit/94476e9080ac04a6f54d766dddc4d3975ad8bc4e))

### Bug Fixes

- **action:** Support slotting icon after initialization ([#913](https://github.com/Esri/calcite-app-components/issues/913)) ([faddbc3](https://github.com/Esri/calcite-app-components/commit/faddbc3834ff95db5adecb87cd3f8c1c47a703c2))
- **pick-list, value-list:** Fix icon for selected circle [#911](https://github.com/Esri/calcite-app-components/issues/911) ([167e729](https://github.com/Esri/calcite-app-components/commit/167e7291c9ab8dc3fc61cf58eaa566fccae1616b))

### [5.6.1](https://github.com/Esri/calcite-app-components/compare/v5.6.0...v5.6.1) (2020-04-01)

### Bug Fixes

- **flow-item, pick-list, value-list:** fix icons not showing up ([#903](https://github.com/Esri/calcite-app-components/issues/903)) ([5290dff](https://github.com/Esri/calcite-app-components/commit/5290dffa981ad0dbffcb1500c882ba3a5164dc97))

## [5.6.0](https://github.com/Esri/calcite-app-components/compare/v5.5.1...v5.6.0) (2020-03-31)

### Features

- **action-pad,action-bar:** Add intl string properties. ([#823](https://github.com/Esri/calcite-app-components/issues/823)) ([a261c0a](https://github.com/Esri/calcite-app-components/commit/a261c0a19c0163a2cd1117a85522c0bb265b71f0)), closes [#818](https://github.com/Esri/calcite-app-components/issues/818)
- **block:** drop open/close icon ([#897](https://github.com/Esri/calcite-app-components/issues/897)) ([38e5b4a](https://github.com/Esri/calcite-app-components/commit/38e5b4ad4122b6d1b32d730b8f4533b0391bbfa3))
- **flow-item:** Fix count for menu-actions ([#883](https://github.com/Esri/calcite-app-components/issues/883)) ([ace82b5](https://github.com/Esri/calcite-app-components/commit/ace82b5bfbe2b9fad63280a9d49f9d2a46075be3))
- **flow-item,panel:** Add intl string properties. ([#843](https://github.com/Esri/calcite-app-components/issues/843)) ([fed34b7](https://github.com/Esri/calcite-app-components/commit/fed34b7574cbf2048efce292fe767d801c3cd065))
- **tip,tip-manager:** Add intl string properties. ([#844](https://github.com/Esri/calcite-app-components/issues/844)) ([dbc8561](https://github.com/Esri/calcite-app-components/commit/dbc8561409daadb5960ebbe4c667257d725bc2ae))
- **value-list, pick-list:** support ↑↓ arrow keys for navigation and value selection when multiple mode is disabled ([#887](https://github.com/Esri/calcite-app-components/issues/887)) ([28cc424](https://github.com/Esri/calcite-app-components/commit/28cc424d9c756389205db1ad9e05428c484e2786))

### Bug Fixes

- **action:** Add slotChildNodesFix to stencil config extras ([#890](https://github.com/Esri/calcite-app-components/issues/890)) ([99717d3](https://github.com/Esri/calcite-app-components/commit/99717d3d126da7088c70c657e9f7149d9af7a799))
- **block:** use CSS grid to improve header layout ([#895](https://github.com/Esri/calcite-app-components/issues/895)) ([2250249](https://github.com/Esri/calcite-app-components/commit/2250249345fe2a17047507e2a5d2bb5fc87df64c)), closes [#849](https://github.com/Esri/calcite-app-components/issues/849)

### [5.5.1](https://github.com/Esri/calcite-app-components/compare/v5.5.0...v5.5.1) (2020-03-03)

### Bug Fixes

- **action:** When using tooltips with an action, browsers title popup shows up ([#872](https://github.com/Esri/calcite-app-components/issues/872)) ([0c1fa41](https://github.com/Esri/calcite-app-components/commit/0c1fa413a1dbfa80555214d98438689c79124137)), closes [#871](https://github.com/Esri/calcite-app-components/issues/871)

## [5.5.0](https://github.com/Esri/calcite-app-components/compare/v5.4.0...v5.5.0) (2020-03-03)

### Features

- **pick-list:** add removable prop for easier item removal ([#820](https://github.com/Esri/calcite-app-components/issues/820)) ([e41e460](https://github.com/Esri/calcite-app-components/commit/e41e460d3340d17a07b66dab9c648f783a638d1d)), closes [#753](https://github.com/Esri/calcite-app-components/issues/753)

### Bug Fixes

- **block-section:** increased top and bottom margins on block-section label to fix focus ring overlap ([#862](https://github.com/Esri/calcite-app-components/issues/862)) ([#863](https://github.com/Esri/calcite-app-components/issues/863)) ([3b00652](https://github.com/Esri/calcite-app-components/commit/3b006529abae911f3879127b087bf9ff3613bddb))
- **flow-item:** update to only show fab-container when fab slot is used ([004019f](https://github.com/Esri/calcite-app-components/commit/004019f8042cb5a2fc9928b241e4da17b3fe4118))

## [5.4.0](https://github.com/Esri/calcite-app-components/compare/v5.3.2...v5.4.0) (2020-02-28)

### Features

- **action:** Add icon property to display calcite-icon. ([#837](https://github.com/Esri/calcite-app-components/issues/837)) ([9de7724](https://github.com/Esri/calcite-app-components/commit/9de772472d58a1fce452ff2050e97f2cb1929f57))
- **block, block-section, filter:** add intl props ([#852](https://github.com/Esri/calcite-app-components/issues/852)) ([8384fca](https://github.com/Esri/calcite-app-components/commit/8384fcafe74dbfd364a178e14482e3f1bb1f633b)), closes [#818](https://github.com/Esri/calcite-app-components/issues/818)
- **fab:** Floating Action Button (FAB) aka FABULOUS!!! component. ([#824](https://github.com/Esri/calcite-app-components/issues/824)) ([fc8de45](https://github.com/Esri/calcite-app-components/commit/fc8de457f50c56b455495b99b33a8d94d084f9b3))
- **filter:** add placeholder property ([#854](https://github.com/Esri/calcite-app-components/issues/854)) ([dec10b1](https://github.com/Esri/calcite-app-components/commit/dec10b1f8814caedf71536842f226a899d59e521))
- **flow-item,panel:** Add an onscroll event for FlowItem and Panel [#842](https://github.com/Esri/calcite-app-components/issues/842) ([356e399](https://github.com/Esri/calcite-app-components/commit/356e3996610cd4f638fff5534f06cbf179719a1c))

### Bug Fixes

- **action-bar:** removed default return from getCalcitePosition ([5a1fa28](https://github.com/Esri/calcite-app-components/commit/5a1fa28a08b0d11347eb0560e3df0fc32dd21a00))
- **shell-panel:** style for deprecated leading and trailing attributes ([1643621](https://github.com/Esri/calcite-app-components/commit/16436219d780af4db75f9b9b83d0ae239068c15e)), closes [#846](https://github.com/Esri/calcite-app-components/issues/846)

### [5.3.2](https://github.com/Esri/calcite-app-components/compare/v5.3.1...v5.3.2) (2020-02-19)

### Bug Fixes

- **Action:** Allow SVGs to be slotted into the calcite-action. ([#836](https://github.com/Esri/calcite-app-components/issues/836)) ([6a661e1](https://github.com/Esri/calcite-app-components/commit/6a661e15f389cb809b53c1dd84b7fb23861d20eb))

### [5.3.1](https://github.com/Esri/calcite-app-components/compare/v5.3.0...v5.3.1) (2020-02-18)

### Features

- styles for a tighter calcite-filter and related styles in pick-list and value-list ([9ec3b82](https://github.com/Esri/calcite-app-components/commit/9ec3b820a0d4d87ea0774e13b9f02a3dd0113f29)), closes [#781](https://github.com/Esri/calcite-app-components/issues/781) [#795](https://github.com/Esri/calcite-app-components/issues/795)

## [5.3.0](https://github.com/Esri/calcite-app-components/compare/v5.2.1...v5.3.0) (2020-02-11)

### Features

- deprecate layout in favor of position ([#812](https://github.com/Esri/calcite-app-components/issues/812)) ([5e11467](https://github.com/Esri/calcite-app-components/commit/5e11467d14ce96a430ef2b2408dbce76d30034c6))
- **Panel, FlowItem:** better header layout and header retains summary when panel is short ([3f3b1e3](https://github.com/Esri/calcite-app-components/commit/3f3b1e3051efe0b8d2953f04bea12fe6e0569199)), closes [#807](https://github.com/Esri/calcite-app-components/issues/807) [#764](https://github.com/Esri/calcite-app-components/issues/764)

### Bug Fixes

- Action - Remove padding when used without an icon ([#810](https://github.com/Esri/calcite-app-components/issues/810)) ([30d3510](https://github.com/Esri/calcite-app-components/commit/30d3510b41cde34d7cec627b345420d644056e59))
- **block-section:** toggle section (with toggleDisplay=switch) when Enter or Space key is pressed ([#809](https://github.com/Esri/calcite-app-components/issues/809)) ([5fa12ec](https://github.com/Esri/calcite-app-components/commit/5fa12eca1e8e70103079bbb7588ad89ea7db6122)), closes [#801](https://github.com/Esri/calcite-app-components/issues/801)

### [5.2.1](https://github.com/Esri/calcite-app-components/compare/v5.2.0...v5.2.1) (2020-02-05)

### Features

- multiple actions appear side-by-side ([#798](https://github.com/Esri/calcite-app-components/issues/798)) ([591deaf](https://github.com/Esri/calcite-app-components/commit/591deaf0aada884e24fc8fb6f76322753b8fbe8a))

### Bug Fixes

- Replace shadowroot querying with textInput reference. ([#799](https://github.com/Esri/calcite-app-components/issues/799)) ([5ee3f08](https://github.com/Esri/calcite-app-components/commit/5ee3f085c4f0067850c47db6d912f345b7e88485))

## [5.2.0](https://github.com/Esri/calcite-app-components/compare/v5.1.1...v5.2.0) (2020-01-31)

### Features

- Add nesting support to picklist groups ([#770](https://github.com/Esri/calcite-app-components/issues/770)) ([602264b](https://github.com/Esri/calcite-app-components/commit/602264b86de7a18d6b7e222f0b4bfd0d7b0d9acd)), closes [#783](https://github.com/Esri/calcite-app-components/issues/783) [#767](https://github.com/Esri/calcite-app-components/issues/767) [#767](https://github.com/Esri/calcite-app-components/issues/767) [#767](https://github.com/Esri/calcite-app-components/issues/767) [#767](https://github.com/Esri/calcite-app-components/issues/767) [#767](https://github.com/Esri/calcite-app-components/issues/767) [#767](https://github.com/Esri/calcite-app-components/issues/767)
- drag n drop component 483 ([#747](https://github.com/Esri/calcite-app-components/issues/747)) ([71d5897](https://github.com/Esri/calcite-app-components/commit/71d589749039cd17aa37fa57a505ded86d3cce0a))
- **action:** add scales to Action ([c5948cb](https://github.com/Esri/calcite-app-components/commit/c5948cb7ad93d864c1b7788876aa29bf869e91a0)), closes [#759](https://github.com/Esri/calcite-app-components/issues/759) [#759](https://github.com/Esri/calcite-app-components/issues/759) [#759](https://github.com/Esri/calcite-app-components/issues/759) [#759](https://github.com/Esri/calcite-app-components/issues/759) [#759](https://github.com/Esri/calcite-app-components/issues/759)

### Bug Fixes

- **action:** style updates for compact mode ([bc345ce](https://github.com/Esri/calcite-app-components/commit/bc345ce6eb271a2a75e31d35447d517c710cd1f8)), closes [#759](https://github.com/Esri/calcite-app-components/issues/759)
- **block:** Remove extra padding applied to slotted icon content ([#793](https://github.com/Esri/calcite-app-components/issues/793)) ([9911d3a](https://github.com/Esri/calcite-app-components/commit/9911d3a6796fe599b4a0f96e0ea231af89493627))
- Calcite-shell-panel remove position relative [#782](https://github.com/Esri/calcite-app-components/issues/782) ([fdc74b5](https://github.com/Esri/calcite-app-components/commit/fdc74b537360f9d13085127c67305333f5fc5f99))

### [5.1.1](https://github.com/Esri/calcite-app-components/compare/v5.1.0...v5.1.1) (2020-01-28)

### Bug Fixes

- **block:** fix block toggling in Edge. ([#785](https://github.com/Esri/calcite-app-components/issues/785)) ([6e9ad73](https://github.com/Esri/calcite-app-components/commit/6e9ad730bb4beb97adc4290617b8e3a31852d6f1)), closes [#763](https://github.com/Esri/calcite-app-components/issues/763)

## [5.1.0](https://github.com/Esri/calcite-app-components/compare/v5.0.0...v5.1.0) (2020-01-21)

### Features

- lists react to value prop changes in items ([#750](https://github.com/Esri/calcite-app-components/issues/750)) ([837d85d](https://github.com/Esri/calcite-app-components/commit/837d85dde8694886f36d0afff7f86ef72537f892))

### Bug Fixes

- **value-list-item:** focus state fix ([7838d80](https://github.com/Esri/calcite-app-components/commit/7838d80652d7c804d44988462194bb2471066aa4)), closes [#543](https://github.com/Esri/calcite-app-components/issues/543)
- nesting and height issues. ([2111987](https://github.com/Esri/calcite-app-components/commit/2111987741da68b26cd649d78adb386ff321c7c4)), closes [#772](https://github.com/Esri/calcite-app-components/issues/772)
- only modify textEnabled when expand functionality is enabled ([#766](https://github.com/Esri/calcite-app-components/issues/766)) ([6fd3aea](https://github.com/Esri/calcite-app-components/commit/6fd3aea9e5b0ff8b664ac7bfc2c640c9c7eec9e7))
- **block:** prevent unintentional toggling when interacting with a slotted control ([#762](https://github.com/Esri/calcite-app-components/issues/762)) ([217203a](https://github.com/Esri/calcite-app-components/commit/217203a9a2da1df4775dc23a37d28964bada47ed)), closes [#751](https://github.com/Esri/calcite-app-components/issues/751)

## [5.0.0](https://github.com/Esri/calcite-app-components/compare/v4.11.1...v5.0.0) (2020-01-15)

### ⚠ BREAKING CHANGES

- Modify Tip API & remove unused utilities (#720)
- BREAKING CHANGE rename secondary-action slot
- **block:** disabled blocks are no longer interactive
- **block-section:** @esri/calcite-components@1.0.0-beta.14 introduced breaking changes (see https://github.com/Esri/calcite-components/blob/c365346de6866fc46e468985dd19d6beb4624483/CHANGELOG.md#v100-beta14---nov-18th-2019 for more info).
- Flow - Remove current panel automatically when back is clicked #586 (#608)

### Features

- ActionPad. Add same expand/collapse behavior as ActionBar ([#690](https://github.com/Esri/calcite-app-components/issues/690)) ([9f02abe](https://github.com/Esri/calcite-app-components/commit/9f02abe53f0ce530b90a2b8a5adeb1a290653085))
- BREAKING CHANGE rename secondary-action slot ([4569a57](https://github.com/Esri/calcite-app-components/commit/4569a57ea317eb8c8b0bc6a72452aea7af1caf53))
- setFocus on dismiss button method [#740](https://github.com/Esri/calcite-app-components/issues/740) ([#742](https://github.com/Esri/calcite-app-components/issues/742)) ([ec3cfff](https://github.com/Esri/calcite-app-components/commit/ec3cfffe54f9650c04d65e730f505507d77e27c3))
- **block:** prevent disabled block content from being tabbed into ([#652](https://github.com/Esri/calcite-app-components/issues/652)) ([6ef11c4](https://github.com/Esri/calcite-app-components/commit/6ef11c44d39ad0aaa48f0b07c599f2ab1b1dd7ef))
- **flow-item, panel:** add summary and related styles ([#583](https://github.com/Esri/calcite-app-components/issues/583)) ([8d1a1b4](https://github.com/Esri/calcite-app-components/commit/8d1a1b423e62dfa7b71a6509c6124c90004aef3f))
- **shell-panel, action:** Add content-detached property to ShellPanel ([8296e3b](https://github.com/Esri/calcite-app-components/commit/8296e3b725d3b68be10441535617709498bbdb65)), closes [#591](https://github.com/Esri/calcite-app-components/issues/591) [#590](https://github.com/Esri/calcite-app-components/issues/590) [#590](https://github.com/Esri/calcite-app-components/issues/590) [#590](https://github.com/Esri/calcite-app-components/issues/590) [#590](https://github.com/Esri/calcite-app-components/issues/590) [#590](https://github.com/Esri/calcite-app-components/issues/590) [#590](https://github.com/Esri/calcite-app-components/issues/590) [#590](https://github.com/Esri/calcite-app-components/issues/590)
- Setting focus to a calcite-action & Flow Menu keyboard navigation ([#651](https://github.com/Esri/calcite-app-components/issues/651)) ([12754d4](https://github.com/Esri/calcite-app-components/commit/12754d46e0454b8f34fcdc5189894209fabdf38e))

### Bug Fixes

- [#524](https://github.com/Esri/calcite-app-components/issues/524) updated action appearance ([#678](https://github.com/Esri/calcite-app-components/issues/678)) ([b471baa](https://github.com/Esri/calcite-app-components/commit/b471baa8e1f2ff4a6b2a7291db69028522984784))
- A shell with only a contextual panel displays on the incorrect side ([#709](https://github.com/Esri/calcite-app-components/issues/709)) ([d869513](https://github.com/Esri/calcite-app-components/commit/d8695131cc75972951c23ba544fcea7bc82e5d34)), closes [#259](https://github.com/Esri/calcite-app-components/issues/259)
- action display on edge. [#725](https://github.com/Esri/calcite-app-components/issues/725) ([811e76c](https://github.com/Esri/calcite-app-components/commit/811e76c3aba3784b3f1cf590e86c987317fa6a6f))
- addresses safari bugs with pick-list and value-list ([da46c72](https://github.com/Esri/calcite-app-components/commit/da46c72e5b240597ac606012f071052ed53f307e)), closes [#565](https://github.com/Esri/calcite-app-components/issues/565) [#727](https://github.com/Esri/calcite-app-components/issues/727)
- Flow - Remove current panel automatically when back is clicked [#586](https://github.com/Esri/calcite-app-components/issues/586) ([#608](https://github.com/Esri/calcite-app-components/issues/608)) ([4237810](https://github.com/Esri/calcite-app-components/commit/4237810cc97b494d8fec81f70dfde9be26b53637))
- FlowItem RTL trailing icon isn't on the far side [#721](https://github.com/Esri/calcite-app-components/issues/721) ([f0d27be](https://github.com/Esri/calcite-app-components/commit/f0d27be64956e425cfc1a394b7e311cd9c468309))
- focus button styles [#713](https://github.com/Esri/calcite-app-components/issues/713) ([8a32670](https://github.com/Esri/calcite-app-components/commit/8a326704f72f0fa98750876c0b3727d2be62e1a3))
- **panel, shell-panel:** flex-flow fix ([3963c1a](https://github.com/Esri/calcite-app-components/commit/3963c1a27c4b0abceeff3f76990b6302b1990358)), closes [#692](https://github.com/Esri/calcite-app-components/issues/692)

* Modify Tip API & remove unused utilities ([#720](https://github.com/Esri/calcite-app-components/issues/720)) ([5cd8777](https://github.com/Esri/calcite-app-components/commit/5cd8777139103038970a9348bc54ef1198262486))
* **block-section:** add a11y tests ([#580](https://github.com/Esri/calcite-app-components/issues/580)) ([173aa21](https://github.com/Esri/calcite-app-components/commit/173aa21b47f92a180569eb858dc0989fd2b86eb2)), closes [#552](https://github.com/Esri/calcite-app-components/issues/552) [#552](https://github.com/Esri/calcite-app-components/issues/552) [#552](https://github.com/Esri/calcite-app-components/issues/552) [#552](https://github.com/Esri/calcite-app-components/issues/552)

### [4.11.1](https://github.com/Esri/calcite-app-components/compare/v4.11.0...v4.11.1) (2019-12-18)

### Bug Fixes

- **flow:** remove height rule for frame ([dda4e4b](https://github.com/Esri/calcite-app-components/commit/dda4e4be2dfa5ef662d3d7ff511695c114948032)), closes [#565](https://github.com/Esri/calcite-app-components/issues/565)

## [4.11.0](https://github.com/Esri/calcite-app-components/compare/v4.10.1...v4.11.0) (2019-12-18)

### Features

- clear button only shows when not empty ([#599](https://github.com/Esri/calcite-app-components/issues/599)) ([#634](https://github.com/Esri/calcite-app-components/issues/634)) ([e03487a](https://github.com/Esri/calcite-app-components/commit/e03487ac773bdfd4365d4f5ad3d44dc09b753435)), closes [#597](https://github.com/Esri/calcite-app-components/issues/597)

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
