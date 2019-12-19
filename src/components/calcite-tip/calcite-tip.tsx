import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from "@stencil/core";
import { getItem, setItem } from "../utils/localStorage";
import { CalciteTheme } from "../interfaces";
import { CSS, TEXT } from "./resources";
import { VNode } from "@stencil/core/dist/declarations";

/**
 * @slot info - A slot for adding an HTML element to the body of the tip.
 * @slot link - A slot for adding an HTML anchor element to the body of the tip.
 */
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

  /**
   * The heading of the tip.
   */
  @Prop() heading: string;

  /**
   * The selected state of the tip if it is being used inside a CalciteTipManager
   */
  @Prop({
    reflect: true
  })
  selected: boolean;

  /**
   * Alternate text for closing the tip.
   */
  @Prop() textClose = TEXT.close;

  /**
   * Alternate text for description of the thumbnail.
   */
  @Prop() textThumbnail: string;

  /**
   * A string of the path to the thumbnail.
   */
  @Prop() thumbnail: string;

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteTipElement;

  @State() dismissed = getItem(`${this.el.tagName.toLowerCase()}-${this.storageId}`) !== null;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the component has been dismissed.
   */
  @Event() calciteTipDismiss: EventEmitter;

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

    this.calciteTipDismiss.emit();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderHeader(): VNode {
    const { nonDismissible, hideTip, textClose, heading } = this;

    const dismissButtonNode = !nonDismissible ? (
      <calcite-action text={textClose} onClick={hideTip} class={CSS.close}>
        <calcite-icon icon="x" />
      </calcite-action>
    ) : null;

    const headingNode = heading ? <h3 class={CSS.heading}>{heading}</h3> : null;

    return dismissButtonNode || headingNode ? (
      <header class={CSS.header}>
        {headingNode}
        {dismissButtonNode}
      </header>
    ) : null;
  }

  renderImageFrame(): VNode {
    const { thumbnail, textThumbnail } = this;

    return thumbnail ? (
      <div class={CSS.imageFrame}>
        <img src={thumbnail} alt={textThumbnail} />
      </div>
    ) : null;
  }

  renderInfoNode(): VNode {
    const { el } = this;

    const infoSlotNode = el.querySelector("[slot=info]") ? <slot name="info" /> : null;

    const linkSlotNode = el.querySelector("[slot=link]") ? (
      <p class={CSS.link}>
        <slot name="link" />
      </p>
    ) : null;

    return (
      <div class={CSS.info}>
        {infoSlotNode}
        {linkSlotNode}
      </div>
    );
  }

  renderContent() {
    return (
      <div class={CSS.content}>
        {this.renderImageFrame()}
        {this.renderInfoNode()}
      </div>
    );
  }

  render() {
    return (
      <Host>
        <article class={CSS.container} hidden={this.dismissed}>
          {this.renderHeader()}
          {this.renderContent()}
        </article>
      </Host>
    );
  }
}
