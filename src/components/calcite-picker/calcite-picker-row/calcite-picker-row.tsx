import { Component, Element, Event, EventEmitter, Host, Method, Prop, h } from "@stencil/core";
import {
  checkSquare16,
  circle16,
  circleFilled16,
  handleVertical24,
  square16,
  trash16
} from "@esri/calcite-ui-icons";
import { CSS } from "./resources";
import CalciteIcon from "../../_support/CalciteIcon";

@Component({
  tag: "calcite-picker-row",
  styleUrl: "./calcite-picker-row.scss",
  shadow: true
})
export class CalcitePickerRow {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) editing = false;

  @Prop({ reflect: true }) icon: "square" | "circle" | "grip" | null = null;

  @Prop() metadata: object;

  @Prop({ reflect: true, mutable: true }) selected = false;

  @Prop({ reflect: true }) textHeading: string;

  @Prop({ reflect: true }) textDescription: string;

  @Prop({ reflect: true }) value: string;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event() calcitePickerRowToggled: EventEmitter;
  @Event() calcitePickerRowDeleted: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async toggle(shiftPressed: boolean) {
    this.selected = !this.selected;
    this.calcitePickerRowToggled.emit({
      row: this.el,
      value: this.value,
      selected: this.selected,
      shiftPressed
    });
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  deleteRow() {
    this.calcitePickerRowDeleted.emit({ row: this.el, value: this.value });
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderIcon() {
    const { icon } = this;
    if (!icon) {
      return null;
    }
    if (icon === "grip") {
      return (
        <span class="handle">
          <CalciteIcon size="24" path={handleVertical24} />
        </span>
      );
    } else {
      /* tslint:disable */
      let path;
      if (icon === "square") {
        path = this.selected ? checkSquare16 : square16;
      } else {
        path = this.selected ? circleFilled16 : circle16;
      }
      /* tslint:enable */
      return (
        <span class="icon">
          <CalciteIcon size="16" path={path} />
        </span>
      );
    }
  }

  renderSecondaryAction() {
    return this.editing ? (
      <calcite-action
        onClick={() => {
          this.deleteRow();
        }}
      >
        <CalciteIcon size="16" path={trash16} />
      </calcite-action>
    ) : (
      <slot name="secondaryAction" />
    );
  }

  render() {
    const { icon } = this;
    return (
      <Host
        class={icon !== "square" && icon !== "circle" ? "highlight" : null}
        onClick={(e) => this.toggle(e.shiftKey)}
      >
        {this.renderIcon()}
        <div class={CSS.label}>
          <h4 class={CSS.heading}>{this.textHeading}</h4>
          <p class={CSS.description}>{this.textDescription}</p>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {this.renderSecondaryAction()}
        </div>
      </Host>
    );
  }
}
