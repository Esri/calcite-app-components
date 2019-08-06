import { r as registerInstance, h } from './chunk-f176fce8.js';
import { T as TEXT } from './chunk-e5f29ee9.js';
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
        this.textGroupTitle = TEXT.defaultGroupTitle;
    }
    CalciteTipGroup.prototype.render = function () {
        return h("slot", null);
    };
    return CalciteTipGroup;
}());
export { CalciteTipGroup as calcite_tip_group };
