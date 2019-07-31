import { Component, Element, Event, EventEmitter, Host, Method, Prop, h } from "@stencil/core";
import {
  checkSquare16,
  circle16,
  circleFilled16,
  handleVertical24,
  square16
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

  @Prop({ reflect: true }) heading: string;

  @Prop({ reflect: true }) description: string;

  @Prop({ reflect: true }) value: string;

  @Prop({ reflect: true }) selected = false;

  @Prop({ reflect: true }) icon: "square" | "circle" | "grip" | null = null;

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

  @Event() rowToggled: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  @Method() async toggle() {
    this.selected = !this.selected;
    this.rowToggled.emit({ row: this.el, value: this.value, selected: this.selected });
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderIcon() {
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
    return <slot name="secondaryAction" />;
  }

  render() {
    return (
      <Host class={this.icon === "grip" ? "highlight" : null} onClick={() => this.toggle()}>
        {this.renderIcon()}
        <div class={CSS.label}>
          <h4 class={CSS.heading}>{this.heading}</h4>
          <p class={CSS.description}>{this.description}</p>
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
