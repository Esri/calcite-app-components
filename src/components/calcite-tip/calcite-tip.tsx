import { Component, Element, Host, Prop, State, h } from "@stencil/core";
import { x16 } from "@esri/calcite-ui-icons";
import { getItem, setItem } from "../../utils/localStorage";

const CSS = {
  title: "title",
  close: "close",
  imageFrame: "image-frame",
  content: "content",
  info: "info",
  link: "link"
};

@Component({
  tag: "calcite-tip",
  styleUrl: "./calcite-tip.scss",
  shadow: true
})
export class CalciteTip {
  @Element() el: HTMLElement;

  @Prop() storageId: string;
  @Prop() dismissible = true;

  @Prop() heading: string;
  @Prop() thumbnail: string;

  @State() dismissed = getItem(`${this.el.tagName.toLowerCase()}-${this.storageId}`) !== null;

  hideTip() {
    this.dismissed = true;
    if (this.storageId) {
      setItem(`${this.el.tagName.toLowerCase()}-${this.storageId}`, "dismissed");
    }
  }

  render() {
    return (
      <Host hidden={this.dismissed}>
        {/* <slot name="heading" /> */}
        <header>
          <h2 class={CSS.title}>{this.heading}</h2>
          {this.dismissible ? (
            <div class={CSS.close} onClick={() => this.hideTip()}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d={x16} />
              </svg>
            </div>
          ) : null}
        </header>
        <div class={CSS.content}>
          {this.thumbnail ? (
            <div class={CSS.imageFrame}>
              <img src={this.thumbnail} alt="" />
            </div>
          ) : null}

          <div class={CSS.info}>
            {this.el.querySelector("[slot=info]") ? <slot name="info" /> : null}

            {this.el.querySelector("[slot=link]") ? (
              <p class={CSS.link}>
                <slot name="link" />
              </p>
            ) : null}
          </div>
        </div>
      </Host>
    );
  }
}
