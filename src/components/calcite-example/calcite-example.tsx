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

import { CSS, MY_STRING_DEFAULT_TEXT } from "./resources";

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
  textMyString = MY_STRING_DEFAULT_TEXT;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element()
  el: HTMLElement;

  internalProp: string;

  @State()
  internalRenderableProp = 0;

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

  @Watch("someProp")
  handleSomeProp(): void {
    // ...
  }

  @Watch("internalRenderableProp")
  handleInternalSomeProp(): void {
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
