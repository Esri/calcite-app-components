import { Component, h, Host, Prop } from "@stencil/core";

const CSS = {
  base: "calcite-action-bar"
};

// todo: create calcite-action-group for containing the section of actions.
// todo: calcite-action-bar should take calcite-action-group custom elements
// todo: expandEnabled: boolean; property

@Component({
  tag: "calcite-action-bar",
  styleUrl: "calcite-action-bar.scss",
  shadow: true
})
export class CalciteActionBar {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  expanded
  //----------------------------------

  @Prop({ reflect: true }) expanded = false;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <div class={CSS.base}>
          <slot />
        </div>
      </Host>
    );
  }
}
