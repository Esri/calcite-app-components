import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";
import { x24 } from "@esri/calcite-ui-icons";
import { getItem, setItem } from "../../utils/localStorage";

const CSS = {
  close: "close",
  content: "content",
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

  @Watch("storageId")
  storageIdHandler(newValue: string) {
    this.storageUID = `${this.el.tagName.toLowerCase()}-${newValue}`;
  }

  @Prop({ reflect: true }) dismissible = true;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  storageUID: string;

  @Element() el: HTMLElement;

  @State() dismissed = getItem(this.storageUID) !== null;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  hideTip(): void {
    const { storageId } = this;

    this.dismissed = true;

    if (storageId) {
      setItem(this.storageUID, "dismissed");
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host hidden={this.dismissed}>
        <slot name="heading" />
        {this.dismissible ? (
          <div class={CSS.close} onClick={() => this.hideTip()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d={x24} />
            </svg>
          </div>
        ) : null}
        <div class={CSS.content}>
          <slot name="thumbnail" />
          <div>
            <slot />
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
