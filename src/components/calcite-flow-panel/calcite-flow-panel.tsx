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
  //  label
  //----------------------------------

  @Prop() label: string = null;

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
    const { label, el } = this;

    const { title } = el;

    const labelFallback = label || title;

    return (
      <Host>
        <article>
          <header aria-label={labelFallback} title={labelFallback}>
            {title}
            <slot name="menu-actions" />
          </header>
          <section>
            <slot />
          </section>
          <footer>
            <slot name="footer-actions" />
          </footer>
        </article>
      </Host>
    );
  }
}
