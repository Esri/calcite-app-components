'use strict';

// copied over from https://github.com/Esri/calcite-components/blob/master/src/utils/dom.ts
function getElementDir(el) {
    return getElementProp(el, "dir", "ltr");
}
function getElementProp(el, prop, value) {
    const closestWithProp = el.closest(`[${prop}]`);
    return closestWithProp ? closestWithProp.getAttribute(prop) : value;
}

exports.getElementDir = getElementDir;
