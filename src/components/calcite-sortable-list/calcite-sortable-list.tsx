import Sortable from "sortablejs";
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  h
} from "@stencil/core";

/**
 * @slot - A slot for adding sortable items
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
   * The class on the handle elements.
   */
  @Prop() handleSelector = ".handle";

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

  items: Element[] = [];

  observer = new MutationObserver(() => {
    this.cleanUpDragAndDrop();
    this.items = Array.from(this.el.children);
    this.setUpDragAndDrop();
  });

  sortable: Sortable;

  handle: Node = null;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentDidLoad() {
    this.items = Array.from(this.el.children);
    this.setUpDragAndDrop();
    this.observer.observe(this.el, { childList: true, subtree: true });
  }

  componentDidUnload() {
    this.observer.disconnect();
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

  @Listen("calciteHandleNudge") calciteHandleNudgeHandler(event: CustomEvent) {
    const sortItem = this.items.find((item) => {
      return item.contains(event.detail.handle) || event.composedPath().includes(item);
    });

    const lastIndex = this.items.length - 1;
    const startingIndex = this.items.indexOf(sortItem);
    let appendInstead = false;
    let buddyIndex;
    switch (event.detail.direction) {
      case "up":
        event.preventDefault();
        if (startingIndex === 0) {
          appendInstead = true;
        } else {
          buddyIndex = startingIndex - 1;
        }
        break;
      case "down":
        event.preventDefault();
        if (startingIndex === lastIndex) {
          buddyIndex = 0;
        } else if (startingIndex === lastIndex - 1) {
          appendInstead = true;
        } else {
          buddyIndex = startingIndex + 2;
        }
        break;
      default:
        return;
    }
    if (appendInstead) {
      sortItem.parentElement.appendChild(sortItem);
    } else {
      sortItem.parentElement.insertBefore(sortItem, this.items[buddyIndex]);
    }

    this.items = Array.from(this.el.children);

    event.detail.handle.activated = true;
    event.detail.handle.shadowRoot.querySelector(this.handleSelector).focus();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpDragAndDrop(): void {
    this.sortable = Sortable.create(this.el, {
      handle: this.handleSelector,
      onUpdate: () => this.calciteListOrderChange.emit()
    });
  }

  cleanUpDragAndDrop(): void {
    this.sortable.destroy();
    this.sortable = null;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
