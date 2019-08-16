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
  tag: "calcite-picker-item",
  styleUrl: "./calcite-picker-item.scss",
  shadow: true
})
export class CalcitePickerItem {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop({ reflect: true }) textHeading: string;

  @Prop({ reflect: true }) textDescription: string;

  @Prop({ reflect: true }) value: string;

  @Prop({ reflect: true, mutable: true }) selected = false;

  @Prop({ reflect: true }) icon: "square" | "circle" | "grip" | null = null;

  @Prop({ reflect: true }) editing = false;

  @Prop() metadata: object;

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

  @Event() calcitePickerItemToggled: EventEmitter;
  @Event() calcitePickerItemDeleted: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async toggle(shiftPressed) {
    this.selected = !this.selected;
    this.calcitePickerItemToggled.emit({
      item: this.el,
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

  deleteItem() {
    this.calcitePickerItemDeleted.emit({ item: this.el, value: this.value });
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderIcon() {
    if (!this.icon) {
      return null;
    }
    if (this.icon === "grip") {
      return (
        <span class="handle">
          <CalciteIcon size="24" path={handleVertical24} />
        </span>
      );
    } else {
      /* tslint:disable */
      let path;
      if (this.icon === "square") {
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
          this.deleteItem();
        }}
      >
        <CalciteIcon size="16" path={trash16} />
      </calcite-action>
    ) : (
      <slot name="secondaryAction" />
    );
  }

  render() {
    return (
      <Host
        class={this.icon !== "square" && this.icon !== "circle" ? "highlight" : null}
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
