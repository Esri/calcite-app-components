import { r as registerInstance, h } from './chunk-f176fce8.js';
import { T as TEXT } from './chunk-e5f29ee9.js';

class CalciteTipGroup {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * The title used for all nested tips
         */
        this.textGroupTitle = TEXT.defaultGroupTitle;
    }
    render() {
        return h("slot", null);
    }
}

export { CalciteTipGroup as calcite_tip_group };
