import { Component, h, Host, Prop } from "@stencil/core";

const CSS = {
  base: "calcite-action-group"
};

@Component({
  tag: "calcite-action-group",
  styleUrl: "calcite-action-group.scss",
  shadow: true
})
export class CalciteActionGroup {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  end
  //----------------------------------

  @Prop({ reflect: true }) end = false;

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
