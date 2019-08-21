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
import { CSS, ICON_TYPES } from "./resources";

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

  /**
   * When true, the rows will be sortable via drag and drop.
   * Only applies when mode is configuration
   */
  @Prop({ reflect: true }) dragEnabled = false;

  @Prop({ reflect: true }) editEnabled = false; /* ignored unless mode is configuration */

  /**
   * Mode controls the presentation of the rows in their selected and deselected states.
   * Selection mode shows either radio buttons or checkboxes depending on the value of multiple
   * Configuration mode relies on a color highlight on the edge of the row for selected
   * Mode must be set to configuration for drag and drop behavior to work.
   */
  @Prop({ reflect: true }) mode: "selection" | "configuration" = "selection";

  /**
   * Multpile Works similar to standard radio buttons and checkboxes.
   * It also affects the presented icon when in Selection mode.
   * When true, a user can select multiple rows at a time.
   * When false, only a single row can be selected at a time,
   * When false, selecting a new row will deselect any other selected rows.
   */
  @Prop({ reflect: true }) multiple = false;

  /**
   * The heading label for the entire Picker.
   * Not to be confused with the heading for an individual row or for a sub-group of rows.
   */
  @Prop({ reflect: true }) textHeading: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @State() selectedValues = {};

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

  observer = new MutationObserver(() => this.setupRows());

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
    this.setupRows();
  }

  componentDidLoad() {
    this.observer.observe(this.el, { childList: true, subtree: true });
  }

  componentDidUnload() {
    this.observer.disconnect();
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
    const { row, value, selected, shiftPressed } = event.detail;
    if (selected) {
      if (this.multiple && shiftPressed && this.lastSelectedRow) {
        const start = this.rows.indexOf(this.lastSelectedRow);
        const end = this.rows.indexOf(row);
        this.rows.slice(Math.min(start, end), Math.max(start, end)).forEach((currentRow) => {
          currentRow.setAttribute("selected", "");
          this.selectedValues[currentRow.value] = currentRow;
        });
      } else {
        this.selectedValues[value] = row;
      }
    } else {
      delete this.selectedValues[value];
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
    this.rows = Array.from(this.el.querySelectorAll("calcite-picker-row"));
    rows.forEach((row) => {
      const iconType = this.getIconType();
      if (iconType) {
        row.setAttribute("icon", iconType);
      } else {
        row.removeAttribute("icon");
      }
    });
    if (this.dragEnabled && this.mode === "configuration") {
      this.setUpDragAndDrop();
    }
  }

  setUpDragAndDrop(): void {
    const sortGroups = [this.el, ...Array.from(this.el.querySelectorAll("calcite-picker-group"))];
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
    if (item.value in this.selectedValues) {
      delete this.selectedValues[item.value];
    }
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
      if (row.value in this.selectedValues) {
        delete this.selectedValues[row.value];
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

  getIconType(): ICON_TYPES | null {
    let type = null;
    if (this.mode === "configuration" && this.dragEnabled) {
      type = ICON_TYPES.grip;
    } else if (this.mode === "selection" && this.multiple) {
      type = ICON_TYPES.square;
    } else if (this.mode === "selection" && !this.multiple) {
      type = ICON_TYPES.circle;
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
