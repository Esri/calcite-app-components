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

  render() {
    return (
      <Host>
        <slot name="header" />
        <div class="close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d={x24}/>
          </svg>
        </div>
        <div class="media">
          { this.thumbnail ? <img src={this.thumbnail} class="media-image" /> : null }
          <div class="media-content">
            <slot />
          </div>
        </div>
        { !!this.el.querySelector('[slot=link]') ? <p class="link">
          <slot name="link" />
        </p> : null }
      </Host>
    );
  }
}
