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
import CalciteIcon from "../utils/CalciteIcon";
import guid from "../utils/guid";
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

  @Prop({ reflect: true }) dragEnabled = false; /* ignored unless mode is configuration */

  @Prop({ reflect: true }) editEnabled = false; /* ignored unless mode is configuration */

  @Prop({ reflect: true }) mode: "selection" | "configuration" = "selection";

  @Prop({ reflect: true }) multiple = false;

  @Prop({ reflect: true }) textHeading: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @State() selectedValues: Set<object> = new Set();

  @State() editing = false;

  @Watch("editing")
  editingChangeHandler() {
    this.rows.forEach((item) => {
      this.editing ? item.setAttribute("editing", "") : item.removeAttribute("editing");
    });
  }

  deletedRows = new Set();
  rows: any;
  lastSelectedRow = null;
  guid = `calcite-picker-${guid()}`;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    const rows = this.el.querySelectorAll("calcite-picker-row");
    rows.forEach((row) => {
      row.setAttribute("icon", this.getIconType());
    });
  }

  componentDidLoad() {
    this.rows = Array.from(this.el.querySelectorAll("calcite-picker-row"));
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

  @Event() calcitePickerRowsDeleted: EventEmitter;

  @Listen("calcitePickerRowToggled") calcitePickerRowToggledHandler(event): void {
    event.stopPropagation(); // private event
    const { row, selected, shiftPressed } = event.detail;
    if (selected) {
      if (this.multiple && shiftPressed && this.lastSelectedRow) {
        const start = this.rows.indexOf(this.lastSelectedRow);
        const end = this.rows.indexOf(row);
        this.rows.slice(Math.min(start, end), Math.max(start, end)).forEach((currentRow) => {
          currentRow.setAttribute("selected", "");
          this.selectedValues.add(currentRow);
        });
      } else {
        this.selectedValues.add(row);
      }
    } else {
      this.selectedValues.delete(row);
    }
    if (!this.multiple && selected) {
      this.rows.forEach((item) => {
        if (item !== row) {
          this.deselectRow(item);
        }
      });
    }
    this.lastSelectedRow = row;
    this.calcitePickerSelectionChange.emit(this.selectedValues);
  }

  @Listen("calcitePickerRowDeleted")
  calcitePickerRowDeletedHandler(event): void {
    event.stopPropagation(); // private event
    const { row } = event.detail;
    row.setAttribute("hidden", "");
    this.deletedRows.add(row);
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setupRows(): void {
    return;
  }

  setUpDragAndDrop(): void {
    const sortGroups = [this.el, ...Array.from(this.el.querySelectorAll("calcite-picker-group"))];
    console.log(sortGroups);
    sortGroups.forEach((sortGroup) => {
      Sortable.create(sortGroup, {
        group: this.el.id,
        handle: `.${CSS.dragHandle}`,
        draggable: "calcite-picker-row"
      });
    });
  }

  deselectRow(item: HTMLCalcitePickerRowElement): void {
    item.removeAttribute("selected");
    this.selectedValues.delete(item);
  }

  startEdit(): void {
    this.editing = true;
  }

  cancelDelete(): void {
    this.deletedRows.forEach((row: HTMLCalcitePickerRowElement) => {
      row.removeAttribute("hidden");
    });
    this.deletedRows = new Set();
    this.editing = false;
  }

  confirmDelete(): void {
    let selectedChanged = false;
    this.deletedRows.forEach((row: HTMLCalcitePickerRowElement) => {
      if (this.selectedValues.has(row)) {
        this.selectedValues.delete(row);
        selectedChanged = true;
      }
      row.remove();
    });
    if (selectedChanged) {
      this.calcitePickerSelectionChange.emit(this.selectedValues);
    }
    this.calcitePickerRowsDeleted.emit(this.deletedRows);
    this.deletedRows = new Set();
    this.editing = false;
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async getSelectedRows(): Promise<Set<object>> {
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
    const id = this.el.id || this.guid;
    return (
      <Host id={id}>
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
