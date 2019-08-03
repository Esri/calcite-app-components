import { r as registerInstance, h } from './chunk-f176fce8.js';
import { D as DEFAULT_GROUP_TITLE } from './chunk-49dd4957.js';

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
        this.textGroupTitle = DEFAULT_GROUP_TITLE;
    }
    render() {
        return h("slot", null);
    }
}

export { CalciteTipGroup as calcite_tip_group };
