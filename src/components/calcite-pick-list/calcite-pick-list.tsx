import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  h
} from "@stencil/core";
import { ICON_TYPES, TEXT } from "./resources";
import sharedListMethods from "./shared-list-logic";
import { VNode } from "@stencil/core/dist/declarations";
import CalciteScrim from "../utils/CalciteScrim";

/**
 * @slot menu-actions - A slot for adding a button + menu combo for performing actions like sorting.
 */
@Component({
  tag: "calcite-pick-list",
  styleUrl: "./calcite-pick-list.scss",
  shadow: true
})
export class CalcitePickList {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * @deprecated Prop is ignored. Prop will be removed in a future release.
   */
  @Prop({ reflect: true }) dragEnabled = false;

  /**
   * When true, an input appears at the top of the list that can be used by end users to filter items in the list.
   */
  @Prop({ reflect: true }) filterEnabled = false;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * @deprecated Prop is ignored. Prop will be removed in a future release.
   */
  @Prop({ reflect: true }) mode: "selection" | "configuration" = "selection";
  /**
   * Multiple Works similar to standard radio buttons and checkboxes.
   * When true, a user can select multiple items at a time.
   * When false, only a single item can be selected at a time
   * and selecting a new item will deselect any other selected items.
   */
  @Prop({ reflect: true }) multiple = false;

  /**
   * Compact removes the selection icon (radio or checkbox) and adds a compact attribute.
   * This allows for a more compact version of the pick-list-item.
   */
  @Prop({ reflect: true }) compact = false;

  /**
   * @deprecated No longer rendered. Prop will be removed in a future release.
   */
  @Prop({ reflect: true }) textHeading: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @State() selectedValues: Map<string, HTMLCalcitePickListItemElement> = new Map();

  @State() dataForFilter: object[] = [];

  items: HTMLCalcitePickListItemElement[];

  lastSelectedItem: HTMLCalcitePickListItemElement = null;

  observer = new MutationObserver(() => {
    this.setUpItems();
    this.setUpFilter();
  });

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalcitePickListElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    sharedListMethods.initialize.call(this);
  }

  componentDidLoad() {
    sharedListMethods.initializeObserver.call(this);
  }

  componentDidUnload() {
    sharedListMethods.cleanUpObserver.call(this);
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when any of the item selections have changed.
   * @event calciteListChange
   */
  @Event() calciteListChange: EventEmitter;

  /**
   * @event calcitePickListSelectionChange
   * @deprecated use calciteListChange instead.
   */
  @Event() calcitePickListSelectionChange: EventEmitter;

  @Listen("calciteListItemChange") calciteListItemChangeHandler(event) {
    sharedListMethods.calciteListItemChangeHandler.call(this, event);
  }

  @Listen("calciteListItemPropsUpdated") calciteListItemPropsUpdatedHandler() {
    this.setUpFilter();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpItems(): void {
    sharedListMethods.setUpItems.call(this, "calcite-pick-list-item");
  }

  setUpFilter(): void {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }

  deselectSiblingItems = sharedListMethods.deselectSiblingItems.bind(this);

  selectSiblings = sharedListMethods.selectSiblings.bind(this);

  handleFilter = sharedListMethods.handleFilter.bind(this);

  getItemData = sharedListMethods.getItemData.bind(this);

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async getSelectedItems(): Promise<Map<string, object>> {
    return this.selectedValues;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  getIconType(): ICON_TYPES | null {
    let type = ICON_TYPES.circle;
    if (this.multiple) {
      type = ICON_TYPES.square;
    }
    return type;
  }

  renderScrim(): VNode {
    return this.loading || this.disabled ? (
      <CalciteScrim loading={this.loading}></CalciteScrim>
    ) : null;
  }

  render() {
    const { disabled, loading } = this;
    return (
      <Host aria-disabled={disabled} aria-busy={loading}>
        <header>
          {this.filterEnabled ? (
            <calcite-filter
              data={this.dataForFilter}
              textPlaceholder={TEXT.filterPlaceholder}
              aria-label={TEXT.filterPlaceholder}
              onCalciteFilterChange={this.handleFilter}
            />
          ) : null}
          <slot name="menu-actions" />
        </header>
        <slot />
        {this.renderScrim()}
      </Host>
    );
  }
}
