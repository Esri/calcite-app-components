function n(n){return function(n){const r=n.closest("[dir]");return r?r.getAttribute("dir"):"ltr"}(n)}function r(n){n&&("setFocus"in n&&"function"==typeof n.setFocus?n.setFocus():n.focus())}var t,i=(function(n){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var r={}.hasOwnProperty;function t(){for(var n=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var f=typeof o;if("string"===f||"number"===f)n.push(o);else if(Array.isArray(o)&&o.length){var e=t.apply(null,o);e&&n.push(e)}else if("object"===f)for(var u in o)r.call(o,u)&&o[u]&&n.push(u)}}return n.join(" ")}n.exports?(t.default=t,n.exports=t):window.classNames=t}()}(t={exports:{}}),t.exports);export{i as c,r as f,n as g};