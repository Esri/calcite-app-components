// copied over from https://github.com/Esri/calcite-components/blob/master/src/utils/dom.ts
function getElementDir(el) {
    return getElementProp(el, "dir", "ltr");
}
function getElementProp(el, prop, value) {
    var closestWithProp = el.closest("[" + prop + "]");
    return closestWithProp ? closestWithProp.getAttribute(prop) : value;
}
export { getElementDir as g };
