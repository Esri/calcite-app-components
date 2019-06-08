import { Component, Element, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "calcite-flow-panel",
  styleUrl: "calcite-flow-panel.scss",
  shadow: true
})
export class CalciteFlowPanel {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  el
  //----------------------------------

  @Element() el: HTMLElement;

  //----------------------------------
  //  backButton
  //----------------------------------

  @Prop({ reflect: true }) backButton = false;

  //----------------------------------
  //  label
  //----------------------------------

  @Prop({ reflect: true }) label: string = null;

  //----------------------------------
  //  heading
  //----------------------------------

  @Prop({ reflect: true }) heading: string = null;

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  // frame
  //   header -
  //     back button (appears if more than one flow)
  //     title
  //     menu button (appears if menu exists)
  //       list of actions
  //   content
  //   footer - just takes actions inside

  render() {
    const { label, backButton, el, heading } = this;

    const labelFallback = label || heading;

    const backButtonNode = backButton ? <button>back</button> : null;

    const hasMenuActions = !!el.querySelector("[slot=menu-actions]");
    const hasFooterActions = !!el.querySelector("[slot=footer-actions]");

    console.log(hasMenuActions);

    const menuActionsSlot = <slot name="menu-actions" />;

    const menuButtonNode = hasMenuActions ? <button>menu</button> : null;

    const menuActionsContainerNode = hasMenuActions ? (
      <div>{menuActionsSlot}</div>
    ) : null;

    const footerActionsSlot = <slot name="footer-actions" />;

    const footerActionsContainerNode = hasFooterActions ? (
      <footer>{footerActionsSlot}</footer>
    ) : null;

    const contentContainerNode = (
      <section>
        <slot />
      </section>
    );

    const headerNode = (
      <header aria-label={labelFallback} title={labelFallback}>
        {backButtonNode}
        {heading}
        {menuButtonNode}
        {menuActionsContainerNode}
      </header>
    );

    return (
      <Host>
        <article>
          {headerNode}
          {contentContainerNode}
          {footerActionsContainerNode}
        </article>
      </Host>
    );
  }
}
