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

  @Prop() id:string = "";
  @Prop() header:string = "";
  @Prop() thumbnail:string = "";

  dismissed = false;

  //@ts-ignore
  closeTip(event: Event) {
    this.el.setAttribute("hidden", "");
    if(this.id) {
      localStorage.setItem(this.id, "dismissed");
    }
  }

  constructor() {
    const storageVal = localStorage.getItem(this.id);
    this.dismissed = storageVal !== null;
  }

  render() {
    return (
      <Host hidden={this.dismissed}>
        <slot name="header" />
        <div class="close" onClick={event => this.closeTip(event)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d={x24}/>
          </svg>
        </div>
        <div class="content">
            <slot name="thumbnail" />
            <div>
              <slot />
              { !!this.el.querySelector('[slot=link]') ? <p class="link">
                <slot name="link" />
              </p> : null }
              </div>
        </div>
      </Host>
    );
  }
}
