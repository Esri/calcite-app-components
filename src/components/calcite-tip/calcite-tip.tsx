import { Component, h, Host, Element, Prop, State } from "@stencil/core";
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
  @Prop() dismissible = true;

  @State() dismissed = getItem(`calcite-tip-${this.storageId}`) !== null;

  hideTip() {
    this.dismissed = true;
    if (this.storageId) {
      setItem(`calcite-tip-${this.storageId}`, "dismissed");
    }
  }

  render() {
    return (
      <Host hidden={this.dismissed}>
        <slot name="heading" />
        { this.dismissible ? <div class="close" onClick={() => this.hideTip()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d={x24} />
          </svg>
        </div> : null }
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
