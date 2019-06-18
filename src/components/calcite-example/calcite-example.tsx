import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  h
} from "@stencil/core";

const CSS = {
  foo: "foo"
};

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

  @Element()
  el: HTMLElement;

  @Prop()
  someProp = true;

  // --------------------------------------------------------------------------
  //
  //  State
  //
  // --------------------------------------------------------------------------

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
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async publicMethod(): Promise<void> {
    // ...
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return <div class={CSS.foo} />;
  }
}
