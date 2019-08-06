'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4028ab75.js');
const __chunk_10 = require('./chunk-b5c28a76.js');

class CalciteTipGroup {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * The title used for all nested tips
         */
        this.textGroupTitle = __chunk_10.TEXT.defaultGroupTitle;
    }
    render() {
        return __chunk_1.h("slot", null);
    }
}

exports.calcite_tip_group = CalciteTipGroup;
