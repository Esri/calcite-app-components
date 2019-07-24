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
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop() storageId: string;

  @Prop({ reflect: true }) nonDismissible = false;

  @Prop() heading: string;

  @Prop() thumbnail: string;

  @Prop() textThumbnail: string;

  @Element() el: HTMLElement;

  @State() dismissed = getItem(`${this.el.tagName.toLowerCase()}-${this.storageId}`) !== null;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  hideTip = () => {
    this.dismissed = true;

    const { storageId } = this;

    if (storageId) {
      setItem(`${this.el.tagName.toLowerCase()}-${storageId}`, "dismissed");
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host hidden={this.dismissed}>
        <header>
          <h2 class={CSS.title}>{this.heading}</h2>
          {!this.nonDismissible ? (
            <calcite-action onCalciteActionClick={this.hideTip}>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
                <path d={x16} />
              </svg>
            </calcite-action>
          ) : null}
        </header>
        <div class={CSS.content}>
          {this.thumbnail ? (
            <div class={CSS.imageFrame}>
              <img src={this.thumbnail} alt={this.textThumbnail} />
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
