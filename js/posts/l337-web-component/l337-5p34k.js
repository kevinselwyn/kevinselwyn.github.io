!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}({7:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return c(t,arguments,f(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a(o,t)})(t)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e,n){return(c=i()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&a(r,n.prototype),r}).apply(null,arguments)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l={a:4,e:3,g:6,o:0,s:5,t:7},s=function(t){function e(){var t,o,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,u=f(e).call(this),(t=!u||"object"!==n(u)&&"function"!=typeof u?r(o):u).shadowTextNode=document.createTextNode(""),t.textNode=null,t.observer=new MutationObserver((function(e){var n=e[0].addedNodes[0].textContent;t._onTranslate(n)})),t.observer.observe(r(t),{childList:!0}),t.attachShadow({mode:"open"}).appendChild(t.shadowTextNode),t._onLoad=t._onLoad.bind(r(t)),t}var u,i,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,t),u=e,(i=[{key:"connectedCallback",value:function(){document.addEventListener("readystatechange",this._onLoad,!0),this._onLoad()}},{key:"adoptedCallback",value:function(){this._onLoad()}},{key:"disconnectedCallback",value:function(){document.removeEventListener("readystatechange",this._onLoad,!0),this.observer.disconnect()}},{key:"_onLoad",value:function(){"complete"===document.readyState&&(this.textNode=Array.prototype.slice.call(this.childNodes).filter((function(t){return 3===t.nodeType})).shift(),this.textNode||(this.textNode=document.createTextNode(""),this.appendChild(this.textNode)),this._onTranslate())}},{key:"_onTranslate",value:function(t){var e=(t||(this.textNode||{}).textContent||"").trim().toLowerCase().split("").map((function(t){return void 0!==l[t]?l[t]:t})).join("");this.shadowTextNode.textContent=e}}])&&o(u.prototype,i),c&&o(u,c),e}(u(HTMLElement));window.customElements&&customElements.define("l337-5p34k",s)}});