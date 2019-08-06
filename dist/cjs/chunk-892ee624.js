'use strict';

const __chunk_1 = require('./chunk-4028ab75.js');

const CalciteIcon = ({ path, size, svgAttributes, title }) => (__chunk_1.h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", height: size, width: size, viewBox: `0 0 ${size} ${size}` }, svgAttributes),
    title ? __chunk_1.h("title", null, title) : null,
    __chunk_1.h("path", { d: path })));

exports.CalciteIcon = CalciteIcon;
