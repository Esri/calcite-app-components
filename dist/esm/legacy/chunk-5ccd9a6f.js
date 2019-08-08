import { h } from './chunk-f176fce8.js';
var CalciteIcon = function (_a) {
    var path = _a.path, size = _a.size, svgAttributes = _a.svgAttributes, title = _a.title;
    return (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", height: size, width: size, viewBox: "0 0 " + size + " " + size }, svgAttributes), title ? h("title", null, title) : null, h("path", { d: path })));
};
export { CalciteIcon as C };
