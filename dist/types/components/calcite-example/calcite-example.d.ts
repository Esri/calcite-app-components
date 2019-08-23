import { EventEmitter } from "../../stencil.core";
export declare class CalciteExample {
    someProp: boolean;
    textMyString: string;
    el: HTMLElement;
    internalProp: string;
    handleSomeProp(): void;
    internalRenderableProp: number;
    handleInternalSomeProp(): void;
    componentWillLoad(): void;
    calciteExampleEvent: EventEmitter;
    publicMethod(): Promise<void>;
    internalMethod(): void;
    handleSomeEvent(): void;
    render(): any;
}
