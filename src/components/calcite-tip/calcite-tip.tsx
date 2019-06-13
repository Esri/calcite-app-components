import { Component, h, Host, Prop, Element } from "@stencil/core";
import { x24 } from "@esri/calcite-ui-icons";
import localStorage from "../../utils/localStorage";

@Component({
  tag: "calcite-tip",
  styleUrl: "./calcite-tip.scss",
  shadow: true
})
export class CalciteTip {
  @Element() el: HTMLElement;

  @Prop() storageId = "";

  dismissed = false;

  closeTip() {
    this.el.setAttribute("hidden", "");
    if (this.storageId) {
      localStorage.setItem(this.storageId, "dismissed");
    }
  }

  constructor() {
    const storageVal = localStorage.getItem(this.storageId);
    this.dismissed = storageVal !== null;
  }

  render() {
    return (
      <Host hidden={this.dismissed}>
        <slot name="heading" />
        <div class="close" onClick={() => this.closeTip()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d={x24} />
          </svg>
        </div>
        <div class="content">
          <slot name="thumbnail" />
          <div>
            <slot />
            {!!this.el.querySelector("[slot=link]") ? (
              <p class="link">
                <slot name="link" />
              </p>
            ) : null}
          </div>
        </div>
      </Host>
    );
  }
}
