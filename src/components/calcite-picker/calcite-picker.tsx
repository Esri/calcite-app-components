import Sortable from "sortablejs";
import { Component, Element, Host, Prop, h } from "@stencil/core";
import { CSS } from "./resources";

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

  @Prop({ reflect: true }) heading: string;

  @Prop({ reflect: true }) multiple = false;

  // @Prop({reflect:true}) draggable = false; /* ignored unless mode is configuration */

  @Prop({ reflect: true }) mode: "selection" | "configuration" = "selection";

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  observer = new MutationObserver(() => this.setUpLists());

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentWillLoad() {
    this.setUpLists();
  }

  componentDidLoad() {
    this.observer.observe(this.el, { childList: true });
  }

  componentDidUnload() {
    this.observer.disconnect();
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpLists(): void {
    return;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <section class={CSS.container}>
          <header>
            <h2>{this.heading}</h2>
            {/* <filter /> */}
          </header>
          <div>{}</div>
        </section>
      </Host>
    );
  }
}
