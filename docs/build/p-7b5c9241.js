function r(r){return function(r){const n=r.closest("[dir]");return n?n.getAttribute("dir"):"ltr"}(r)}var n,t=(function(r){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var n={}.hasOwnProperty;function t(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var e=typeof o;if("string"===e||"number"===e)r.push(o);else if(Array.isArray(o)&&o.length){var f=t.apply(null,o);f&&r.push(f)}else if("object"===e)for(var a in o)n.call(o,a)&&o[a]&&r.push(a)}}return r.join(" ")}r.exports?(t.default=t,r.exports=t):window.classNames=t}()}(n={exports:{}}),n.exports);export{t as c,r as g};