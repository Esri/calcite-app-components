System.register([],(function(t){"use strict";return{execute:function(){t({a:i,f:e,g:r});function r(t){return n(t,"dir","ltr")}function n(t,r,n){var e=t.closest("["+r+"]");return e?e.getAttribute(r):n}function e(t){if(!t){return}"setFocus"in t&&typeof t.setFocus==="function"?t.setFocus():t.focus()}function i(t,r){if(t){return t}if(r){return r==="trailing"?"end":"start"}return"start"}function u(t,r){return r={exports:{}},t(r,r.exports),r.exports}var s=u((function(t){
/*!
                  Copyright (c) 2017 Jed Watson.
                  Licensed under the MIT License (MIT), see
                  http://jedwatson.github.io/classnames
                */
(function(){var r={}.hasOwnProperty;function n(){var t=[];for(var e=0;e<arguments.length;e++){var i=arguments[e];if(!i)continue;var u=typeof i;if(u==="string"||u==="number"){t.push(i)}else if(Array.isArray(i)&&i.length){var s=n.apply(null,i);if(s){t.push(s)}}else if(u==="object"){for(var o in i){if(r.call(i,o)&&i[o]){t.push(o)}}}}return t.join(" ")}if(t.exports){n.default=n;t.exports=n}else{window.classNames=n}})()}));t("c",s)}}}));