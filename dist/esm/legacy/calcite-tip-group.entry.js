import { r as registerInstance, h } from './chunk-f176fce8.js';
import { D as DEFAULT_GROUP_TITLE } from './chunk-49dd4957.js';
var CalciteTipGroup = /** @class */ (function () {
    function CalciteTipGroup(hostRef) {
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
    CalciteTipGroup.prototype.render = function () {
        return h("slot", null);
    };
    return CalciteTipGroup;
}());
export { CalciteTipGroup as calcite_tip_group };
