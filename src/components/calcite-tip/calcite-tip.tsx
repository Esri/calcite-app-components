import { Component, h, Host, Prop, Element, Method, State } from "@stencil/core";
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

  @State() isHidden = localStorage.getItem(this.storageId) !== null;

  @Method()
  async hideTip() {
    this.isHidden = true;
    if (this.storageId) {
      localStorage.setItem(this.storageId, "hidden");
    }
  }
  @Method()
  async showTip() {
    this.isHidden = false;
    if (this.storageId) {
      localStorage.removeItem(this.storageId);
    }
  }

  render() {
    return (
      <Host hidden={this.isHidden}>
        <slot name="heading" />
        <div class="close" onClick={() => this.hideTip()}>
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
