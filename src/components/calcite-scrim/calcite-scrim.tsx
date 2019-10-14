import { Component, Host, Prop, h } from "@stencil/core";
import { CSS } from "./resources";

@Component({
  tag: "calcite-scrim",
  styleUrl: "calcite-scrim.scss",
  shadow: true
})
export class CalciteScrim {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * When true, scrim adds the aria-disabled attribute
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * When true, scrim adds the aria-busy attribute
   * and calcite-loader is added to container.
   */
  @Prop({ reflect: true }) loading = false;

  /**
   * When false, overrides adding aria-busy and aria-disabled.
   */
  @Prop({ reflect: true }) showAria = true;

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const loadingProperty = this.showAria ? this.loading : null;
    const disabledProperty = this.showAria ? this.disabled : null;
    return (
      <Host>
        <div
          class={CSS.blockingContainer}
          aria-busy={loadingProperty}
          aria-disabled={disabledProperty}
        >
          {this.loading ? <calcite-loader is-active></calcite-loader> : null}
        </div>
      </Host>
    );
  }
}
