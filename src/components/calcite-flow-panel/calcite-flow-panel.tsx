import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "calcite-flow-panel",
  styleUrl: "calcite-flow-panel.scss",
  shadow: true
})
export class CalciteFlowPanel {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

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

  // frame
  //   header - need component (calcite-flow-header)
  //     back button (appears if more than one flow)
  //     title button
  //     menu button (appears if menu exists)
  //       list of actions (calcite-action-menu). just takes actions inside
  //   content
  //   footer - need component (calcite-flow-footer). just takes actions inside

  render() {
    return (
      <Host>
        <div>
          <header />
          <div>
            <slot />
          </div>
          <footer />
        </div>
      </Host>
    );
  }
}
