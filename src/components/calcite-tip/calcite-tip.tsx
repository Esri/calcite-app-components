import { Component, h, Host, Element, Prop, State, Watch } from "@stencil/core";
import { x24 } from "@esri/calcite-ui-icons";
import { getItem, setItem } from "../../utils/localStorage";

@Component({
  tag: "calcite-tip",
  styleUrl: "./calcite-tip.scss",
  shadow: true
})
export class CalciteTip {
  @Element() el: HTMLElement;

  @Prop() storageId = "";
  @Prop() dismissed = false;

  @State() isHidden = this.dismissed || getItem(`calcite-tip-${this.storageId}`) !== null;

  @Watch("dismissed")
  dismissedHandler(newValue: boolean) {
    this.isHidden = newValue;
  }

  hideTip() {
    this.isHidden = true;
    if (this.storageId) {
      setItem(`calcite-tip-${this.storageId}`, "dismissed");
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
