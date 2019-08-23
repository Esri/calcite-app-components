function getAnchorPosition(params) {
    var positionElement = params.positionElement;
    var positionElementTop = positionElement.offsetTop;
    var positionElementHeight = positionElement.getBoundingClientRect().height;
    return positionElementTop + positionElementHeight;
}
function getOverPosition(params) {
    var positionElement = params.positionElement, floatingElement = params.floatingElement;
    var positionElementTop = positionElement.offsetTop;
    var floatingElementHeight = floatingElement.offsetHeight;
    return positionElementTop - floatingElementHeight / 2;
}
function getSidePosition(params) {
    var positionElement = params.positionElement;
    var positionElementTop = positionElement.offsetTop;
    return positionElementTop;
}
function getOffsetTop(params) {
    var placement = params.placement;
    return placement === "anchor"
        ? getAnchorPosition(params)
        : placement === "over"
            ? getOverPosition(params)
            : getSidePosition(params);
}
export { getOffsetTop as g };
