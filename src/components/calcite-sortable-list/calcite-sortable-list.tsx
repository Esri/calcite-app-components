import Sortable from "sortablejs";
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  // Listen,
  // Method,
  Prop,
  State,
  h
} from "@stencil/core";
import { CSS } from "./resources";
import { drag16 } from "@esri/calcite-ui-icons";
import CalciteIcon from "../utils/CalciteIcon";

/**
 * @slot - A slot for adding pick-list-item elements or pick-list-groups elements. Items are displayed as a vertical list.
 */
@Component({
  tag: "calcite-sortable-list",
  styleUrl: "./calcite-sortable-list.scss",
  shadow: true
})
export class CalciteSortableList {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  @Prop({ reflect: true }) loading = false;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteSortableListElement;

  @State() handleActivated = false;

  @State() items = [];

  // observer = new MutationObserver(() => { });

  sortable: Sortable;

  handle: Node = null;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback() {
    // console.log(this.el.children);
  }

  componentDidLoad() {
    // this.handle = this.el.shadowRoot.querySelector(`.${CSS.handle}`).cloneNode(true);
    // this.el.shadowRoot.querySelector(`.${CSS.handle}`).remove();
    // this.items = Array.from(this.el.children);
    // this.items.forEach(item => {
    //   const sortItem = document.createElement('calcite-sort-item');
    //   sortItem.classList.add(CSS.sortItem);
    //   const handle = this.handle.cloneNode(true);
    //   sortItem.appendChild(handle);
    //   item.parentNode.insertBefore(sortItem, item);
    //   sortItem.appendChild(item);
    // });
    this.setUpDragAndDrop();
    // this.observer.observe(this.el, { childList: true, subtree: true });
  }

  componentDidUnload() {
    // this.observer.disconnect();
    this.cleanUpDragAndDrop();
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emmitted when the order of the list has changed.
   * @event calciteListOrderChange
   */
  @Event() calciteListOrderChange: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpDragAndDrop(): void {
    this.sortable = Sortable.create(this.el, {
      handle: `.${CSS.handle}`,
      onUpdate: () => {
        this.calciteListOrderChange.emit();
      }
    });
  }

  cleanUpDragAndDrop(): void {
    this.sortable.destroy();
    this.sortable = null;
  }

  keyDownHandler = (event) => {
    console.log(event);
    // const handleElement = event.composedPath().find((item) => {
    //   return item.dataset?.jsHandle;
    // });
    // const valueListElement = event.composedPath().find((item) => {
    //   return item.tagName?.toLowerCase() === "calcite-block";
    // });
    // // Only trigger keyboard sorting when the internal drag handle is focused and activated
    // if (!handleElement || !this.handleActivated) {
    //   return;
    // }
    // const lastIndex = this.items.length - 1;
    // const value = valueListElement.value;
    // const startingIndex = this.items.findIndex((item) => {
    //   return item.value === value;
    // });
    // let appendInstead = false;
    // let buddyIndex;
    // switch (event.key) {
    //   case "ArrowUp":
    //     event.preventDefault();
    //     if (startingIndex === 0) {
    //       appendInstead = true;
    //     } else {
    //       buddyIndex = startingIndex - 1;
    //     }
    //     break;
    //   case "ArrowDown":
    //     event.preventDefault();
    //     if (startingIndex === lastIndex) {
    //       buddyIndex = 0;
    //     } else if (startingIndex === lastIndex - 1) {
    //       appendInstead = true;
    //     } else {
    //       buddyIndex = startingIndex + 2;
    //     }
    //     break;
    //   default:
    //     return;
    // }
    // if (appendInstead) {
    //   valueListElement.parentElement.appendChild(valueListElement);
    // } else {
    //   valueListElement.parentElement.insertBefore(valueListElement, this.items[buddyIndex]);
    // }

    // handleElement.focus();
    // valueListElement.handleActivated = true;
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === " ") {
      this.handleActivated = !this.handleActivated;
    }
  };

  handleBlur = () => {
    this.handleActivated = false;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderHandle() {
    return this.handle.cloneNode(true);
    // return (
    //   <span
    //       role="button"
    //       class={{ [CSS.handle]: true, [CSS.handleActivated]: this.handleActivated }}
    //       tabindex="0"
    //       data-js-handle="true"
    //       aria-pressed={this.handleActivated.toString()}
    //       onKeyDown={this.handleKeyDown}
    //       onBlur={this.handleBlur}
    //     >
    //       <CalciteIcon size="16" path={drag16} />
    //   </span>
    // );
  }

  render() {
    return (
      <Host onKeyDown={this.keyDownHandler}>
        <span
          role="button"
          class={{ [CSS.handle]: true, [CSS.handleActivated]: this.handleActivated }}
          tabindex="0"
          data-js-handle="true"
          aria-pressed={this.handleActivated.toString()}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleBlur}
        >
          <CalciteIcon size="16" path={drag16} />
        </span>
        <span>sort me</span>
        <slot />
      </Host>
    );
  }
}
