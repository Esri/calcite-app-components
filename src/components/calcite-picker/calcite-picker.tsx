import Sortable from "sortablejs";
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
  Watch,
  h
} from "@stencil/core";
import { pencil16 } from "@esri/calcite-ui-icons";
import CalciteIcon from "../_support/CalciteIcon";
import { CSS } from "./resources";

@Component({
  tag: "calcite-picker",
  styleUrl: "./calcite-picker.scss",
  shadow: true
})
export class CalcitePicker {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) textHeading: string;

  @Prop({ reflect: true }) mode: "selection" | "configuration" = "selection";

  @Prop({ reflect: true }) multiple = false;

  @Prop({ reflect: true }) dragEnabled = false; /* ignored unless mode is configuration */

  @Prop({ reflect: true }) editEnabled = false; /* ignored unless mode is configuration */

  @State() selectedValues = new Set();

  @State() editing = false;

  @Watch("editing")
  editingChangeHandler() {
    this.items.forEach((item) => {
      this.editing ? item.setAttribute("editing", "") : item.removeAttribute("editing");
    });
  }

  deletedItems = new Set();
  items: any;
  lastSelectedItem = null;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  sortable = null;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    const items = this.el.querySelectorAll("calcite-picker-item");
    items.forEach((item) => {
      item.setAttribute("icon", this.getIconType());
    });
  }

  componentDidLoad() {
    this.items = Array.from(this.el.querySelectorAll("calcite-picker-item"));
    if (this.dragEnabled && this.mode === "configuration") {
      this.setupDragAndDrop();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calcitePickerSelectionChange: EventEmitter;

  @Event() calcitePickerItemsDeleted: EventEmitter;

  @Listen("calcitePickerItemToggled") calcitePickerItemToggledHandler(event) {
    event.stopPropagation(); // private event
    const { item, selected, shiftPressed } = event.detail;
    if (selected) {
      if (this.multiple && shiftPressed && this.lastSelectedItem) {
        const start = this.items.indexOf(this.lastSelectedItem);
        const end = this.items.indexOf(item);
        this.items.slice(Math.min(start, end), Math.max(start, end)).forEach((currentItem) => {
          currentItem.setAttribute("selected", "");
          this.selectedValues.add(currentItem);
        });
      } else {
        this.selectedValues.add(item);
      }
    } else {
      this.selectedValues.delete(item);
    }
    if (!this.multiple && selected) {
      this.items.forEach((currentItem) => {
        if (currentItem !== item) {
          this.deselectItem(currentItem);
        }
      });
    }
    this.lastSelectedItem = item;
    this.calcitePickerSelectionChange.emit(this.selectedValues);
  }

  @Listen("calcitePickerItemDeleted")
  calcitePickerItemDeletedHandler(event) {
    event.stopPropagation(); // private event
    const { item } = event.detail;
    item.setAttribute("hidden", "");
    this.deletedItems.add(item);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setupDragAndDrop(): void {
    const sortGroups = [this.el, ...Array.from(this.el.querySelectorAll("calcite-picker-group"))];
    sortGroups.forEach((sortGroup) => {
      Sortable.create(sortGroup, {
        group: "whateva",
        handle: ".handle",
        draggable: "calcite-picker-item"
      });
    });
  }

  deselectItem(item) {
    item.removeAttribute("selected");
    this.selectedValues.delete(item);
  }

  startEdit() {
    this.editing = true;
  }

  cancelDelete() {
    this.deletedItems.forEach((item: HTMLCalcitePickerItemElement) => {
      item.removeAttribute("hidden");
    });
    this.deletedItems = new Set();
    this.editing = false;
  }

  confirmDelete() {
    let selectedChanged = false;
    this.deletedItems.forEach((item: HTMLCalcitePickerItemElement) => {
      if (this.selectedValues.has(item.value)) {
        this.selectedValues.delete(item.value);
        selectedChanged = true;
      }
      item.remove();
    });
    if (selectedChanged) {
      this.calcitePickerSelectionChange.emit(this.selectedValues);
    }
    this.calcitePickerItemsDeleted.emit(this.deletedItems);
    this.deletedItems = new Set();
    this.editing = false;
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async getSelectedItems() {
    return this.selectedValues;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  getIconType() {
    let type = null;
    if (this.mode === "configuration" && this.dragEnabled) {
      type = "grip";
    } else if (this.mode === "selection" && this.multiple) {
      type = "square";
    } else if (this.mode === "selection" && !this.multiple) {
      type = "circle";
    }
    return type;
  }

  renderSecondaryAction(action) {
    return action ? (
      <calcite-action slot="secondaryAction" onClick={action.onclick || void 0}>
        <CalciteIcon size={action.icon.size} path={action.icon.path} />
      </calcite-action>
    ) : null;
  }

  renderEditButton() {
    return this.editEnabled ? (
      !this.editing ? (
        <section>
          <calcite-action onClick={() => this.startEdit()}>
            <CalciteIcon size="16" path={pencil16} />
          </calcite-action>
        </section>
      ) : (
        <section>
          <button onClick={() => this.cancelDelete()}>Cancel</button>
          <button onClick={() => this.confirmDelete()}>OK</button>
        </section>
      )
    ) : null;
  }

  render() {
    return (
      <Host>
        <section class={CSS.container}>
          <header>
            <h2>{this.textHeading}</h2>
            {/* <filter /> */}
          </header>
          {this.renderEditButton()}
          <slot />
        </section>
      </Host>
    );
  }
}
