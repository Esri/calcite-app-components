import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  h
} from "@stencil/core";
import { ICON_TYPES } from "../calcite-pick-list/resources";

@Component({
  tag: "calcite-value-list-item",
  styleUrl: "./calcite-value-list-item.scss",
  shadow: true
})
export class CalciteValueListItem {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop() selected = false;

  @Prop({ reflect: true }) editable = false;

  @Prop({ reflect: true }) icon: ICON_TYPES | null = null;

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

  @Event() calciteValueListItemSelectedChange: EventEmitter;

  @Listen("calcitePickListItemSelectedChange") calcitePickListItemSelectedChangeHandler(event) {
    this.calciteValueListItemSelectedChange.emit(event.detail);
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method() async toggleSelected(coerce?: boolean, emit = false) {
    this.el.querySelector("calcite-pick-list-item").toggleSelected(coerce, emit);
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <calcite-pick-list-item
          selected={this.selected}
          editable={this.editable}
          icon={this.icon}
          textHeading={this.textHeading}
          textDescription={this.textDescription}
          value={this.value}
        >
          <slot name="secondaryAction" slot="secondaryAction" />
        </calcite-pick-list-item>
      </Host>
    );
  }
}
