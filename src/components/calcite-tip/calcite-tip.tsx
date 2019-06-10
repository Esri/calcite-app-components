import { Component, h, Host, Prop, Element } from "@stencil/core";
import { x24 } from "@esri/calcite-ui-icons";

@Component({
  tag: "calcite-tip",
  styleUrl: "./calcite-tip.scss",
  shadow: true
})
export class CalciteTip {

  @Element() el: HTMLElement;

  @Prop() header:string = "";
  @Prop() thumbnail:string = "";

  //@ts-ignore
  closeTip(event) {
    this.el.setAttribute("hidden", "");
  }

  render() {
    return (
      <Host>
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
