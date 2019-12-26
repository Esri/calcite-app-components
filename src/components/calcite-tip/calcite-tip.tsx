import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from "@stencil/core";
import { getItem, setItem } from "../utils/localStorage";
import { CalciteTheme } from "../interfaces";
import { CSS, ICONS, TEXT } from "./resources";
import { VNode } from "@stencil/core/dist/declarations";

/**
 * @slot image - A slot for adding an HTML image element to the tip.
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

  @Watch("storageId")
  handleStorageId(): void {
    this.setUpStorage();
  }

  /**
   * No longer displays the tip.
   */
  @Prop({ mutable: true }) dismissed = false;

  /**
   * Indicates whether the tip can be dismissed.
   */
  @Prop({ reflect: true }) nonDismissible = false;

  /**
   * The heading of the tip.
   */
  @Prop() heading?: string;

  /**
   * The selected state of the tip if it is being used inside a `calcite-tip-manager`.
   */
  @Prop({
    reflect: true
  })
  selected?: boolean;

  /**
   * Alternate text for closing the tip.
   */
  @Prop() textClose = TEXT.close;

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

  storageUID: string;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    this.setUpStorage();
  }

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

  setUpStorage = () => {
    const { el, storageId, dismissed } = this;

    const storageUID = storageId ? `${el.tagName.toLowerCase()}-${storageId}` : null;

    this.storageUID = storageUID;

    if (getItem(storageUID) !== null && !dismissed) {
      this.dismissed = true;
    }
  };

  hideTip = () => {
    this.dismissed = true;

    setItem(this.storageUID, "dismissed");

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
        <calcite-icon scale="s" icon={ICONS.close} />
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
    const { el } = this;

    return el.querySelector("[slot=image]") ? (
      <div class={CSS.imageFrame}>
        <slot name="image" />
      </div>
    ) : null;
  }

  renderInfoNode(): VNode {
    const { el } = this;

    const linkSlotNode = el.querySelector("[slot=link]") ? (
      <p class={CSS.link}>
        <slot name="link" />
      </p>
    ) : null;

    return (
      <div class={CSS.info}>
        <slot />
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
