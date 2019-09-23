import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";

import { CSS, TEXT } from "./resources";

@Component({
  tag: "calcite-example",
  styleUrl: "calcite-example.scss",
  shadow: true
})
export class CalciteExample {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  @Prop()
  someProp = true;

  @Prop()
  textMyString = TEXT.myString;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element()
  el: HTMLCalciteExampleElement;

  internalProp: string;

  @Watch("someProp")
  handleSomeProp(): void {
    // ...
  }

  @State()
  internalRenderableProp = 0;

  @Watch("internalRenderableProp")
  handleInternalSomeProp(): void {
    // ...
  }

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentWillLoad() {
    // ...
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  @Event()
  calciteExampleEvent: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async publicMethod(): Promise<void> {
    // ...
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  internalMethod(): void {
    // ...
  }

  @Listen("someEvent")
  handleSomeEvent(): void {
    // ...
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <div class={CSS.foo}>{this.someProp ? this.textMyString : null}</div>
      </Host>
    );
  }
}
