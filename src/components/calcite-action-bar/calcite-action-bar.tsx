import {
  Component,
  Element,
  // Event,
  // EventEmitter,
  h,
  Host
  //Prop
} from "@stencil/core";

// const CSS = {

// };

// todo: create calcite-action-group for containing the section of actions.
// todo: calcite-action-bar should take calcite-action-group custom elements
// todo: expandEnabled: boolean; property

@Component({
  tag: "calcite-action-bar",
  styleUrl: "calcite-action-bar.scss",
  shadow: true
})
export class CalciteAction {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  el
  //----------------------------------

  @Element() el: HTMLElement;

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
    return <Host />;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
}
