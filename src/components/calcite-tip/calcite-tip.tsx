import { Component, Element, Host, Prop, State, h } from "@stencil/core";
import { x16 } from "@esri/calcite-ui-icons";
import { getItem, setItem } from "../../utils/localStorage";
import CalciteIcon from "../_support/CalciteIcon";

const CSS = {
  header: "header",
  heading: "heading",
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
  /**
   * The local storage id used for an instance of a tip.
   */
  @Prop() storageId: string;
  /**
   * Indicates whether the tip can be dismissed.
   */
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
        <header class={CSS.header}>
          <h3 class={CSS.heading}>{this.heading}</h3>
          {!this.nonDismissible ? (
            <calcite-action onCalciteActionClick={this.hideTip} class={CSS.close}>
              <CalciteIcon size="16" path={x16} />
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
