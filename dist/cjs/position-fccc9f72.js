'use strict';

function getAnchorPosition(params) {
    const { positionElement } = params;
    const { offsetTop: positionElementTop } = positionElement;
    const { height: positionElementHeight } = positionElement.getBoundingClientRect();
    return positionElementTop + positionElementHeight;
}
function getOverPosition(params) {
    const { positionElement, floatingElement } = params;
    const { offsetTop: positionElementTop } = positionElement;
    const { offsetHeight: floatingElementHeight } = floatingElement;
    return positionElementTop - floatingElementHeight / 2;
}
function getSidePosition(params) {
    const { positionElement } = params;
    const { offsetTop: positionElementTop } = positionElement;
    return positionElementTop;
}
function getOffsetTop(params) {
    const { placement } = params;
    return placement === "anchor"
        ? getAnchorPosition(params)
        : placement === "over"
            ? getOverPosition(params)
            : getSidePosition(params);
}

exports.getOffsetTop = getOffsetTop;
