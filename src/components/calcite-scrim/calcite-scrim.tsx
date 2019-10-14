import {
  Component,
  // Element,
  // Event,
  // EventEmitter,
  Host,
  // Listen,
  // Method,
  Prop,
  // State,
  // Watch,
  h
} from "@stencil/core";

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
    return (
      <Host>
        <div class={CSS.blockingContainer} aria-busy={this.loading} aria-disabled={this.disabled}>
          {this.loading ? <calcite-loader is-active></calcite-loader> : null}
        </div>
      </Host>
    );
  }
}
