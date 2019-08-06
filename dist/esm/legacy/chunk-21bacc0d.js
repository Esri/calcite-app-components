// turn a domNodeList into an array
function nodeListToArray(domNodeList) {
    if (Array.isArray(domNodeList)) {
        return domNodeList;
    }
    else {
        return Array.prototype.slice.call(domNodeList);
    }
}
function getElementDir(el) {
    return (el.closest("[dir='rtl']") && "rtl") || "ltr";
}
export { getElementDir as g, nodeListToArray as n };
