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
  h
} from "@stencil/core";
import { CSS } from "./resources";
import CalciteIcon from "../_support/CalciteIcon";

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

  @Prop({ reflect: false }) data = [];

  @State() selectedValues = new Set();

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

  componentDidLoad() {
    if (this.dragEnabled && this.mode === "configuration") {
      this.setupDragAndDrop();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() pickerSelectionChange: EventEmitter;

  @Listen("rowToggled")
  rowToggledHandler(event) {
    const { row, value, selected } = event.detail;
    if (selected) {
      this.selectedValues.add(value);
    } else {
      this.selectedValues.delete(value);
    }
    if (!this.multiple && selected) {
      const rows = Array.from(this.el.shadowRoot.querySelectorAll("calcite-picker-row"));
      rows.forEach((item) => {
        if (item !== row) {
          this.deselectRow(item);
        }
      });
    }
    this.pickerSelectionChange.emit(this.selectedValues);
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
        draggable: "calcite-picker-row"
      });
    });
  }

  deselectRow(item) {
    item.toggleAttribute("selected", false);
    this.selectedValues.delete(item.value);
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async getSelectedRows() {
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

  render() {
    return (
      <Host>
        <section class={CSS.container}>
          <header>
            <h2>{this.textHeading}</h2>
            {/* <filter /> */}
          </header>
          {this.data.map((item) => {
            const { heading, description, value, selected } = item;
            return (
              <calcite-picker-row
                textHeading={heading}
                textDescription={description}
                value={value}
                selected={selected}
                icon={this.getIconType()}
              >
                {this.renderSecondaryAction(item.secondaryAction)}
              </calcite-picker-row>
            );
          })}
          <slot />
        </section>
      </Host>
    );
  }
}
