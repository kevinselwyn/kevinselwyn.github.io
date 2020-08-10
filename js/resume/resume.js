!function(e){var t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=10)}({0:function(e,t){e.exports=React},1:function(e,t){e.exports=PropTypes},10:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),c=a.n(r);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,l=!1,r=void 0;try{for(var c,m=e[Symbol.iterator]();!(n=(c=m.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{n||null==m.return||m.return()}finally{if(l)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var s=function(e){var t=e.info,a=e.social;return l.a.createElement("section",{id:"intro"},l.a.createElement("div",{className:"title"},l.a.createElement("img",{src:"/img/kevin.jpg",alt:t.name,title:t.name})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,t.name),l.a.createElement("h2",null,t.title),l.a.createElement("p",null,l.a.createElement("span",null,"(Full resume at "),l.a.createElement("a",{href:"".concat(t.website,"/resume")},"".concat(t.website,"/resume")),l.a.createElement("span",null,")")),l.a.createElement("ul",{className:"social"},a.map((function(e){return l.a.createElement("li",{key:e.network,className:e.network},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.network))})))),l.a.createElement("div",{className:"clearfix"}))};s.propTypes={info:c.a.object.isRequired,social:c.a.arrayOf(c.a.object).isRequired};var o=function(e){var t=e.info;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Contact")),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,"Email: "),l.a.createElement("a",{href:"mailto:".concat(t.email)},t.email),l.a.createElement("br",null),l.a.createElement("strong",null,"Website: "),l.a.createElement("a",{href:t.website},t.website),l.a.createElement("br",null),l.a.createElement("span",{className:"download-pdf"},l.a.createElement("strong",null,"↳ "),l.a.createElement("a",{href:"/data/resume.pdf",target:"_blank",rel:"noopener noreferrer",download:"Kevin Selwyn - Resume.pdf"},"Download resume as PDF")))),l.a.createElement("div",{className:"clearfix"}))};o.propTypes={info:c.a.object.isRequired};var u=function(e){var t=e.info;return l.a.createElement("section",{id:"profile"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Profile")),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,t.profile)),l.a.createElement("div",{className:"clearfix"}))};u.propTypes={info:c.a.object.isRequired};var E=function(e){var t=e.projects;return l.a.createElement("section",{id:"projects"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Personal Projects")),l.a.createElement("div",{className:"content"},t.map((function(e){return l.a.createElement("div",{key:e.name,className:"project"},l.a.createElement("div",{className:"info"},l.a.createElement("p",null,l.a.createElement("strong",null,e.name),l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.url))),l.a.createElement(n.Fragment,null,e.description.map((function(e){return l.a.createElement("p",{key:e},e)})))),l.a.createElement("div",{className:"meta"},l.a.createElement("div",{className:"meta__item"},l.a.createElement("small",null,"Language(s):"),l.a.createElement("div",{className:"languages"},e.languages.map((function(e){return l.a.createElement("small",{key:e,className:"chip"},e)})))),l.a.createElement("div",{className:"meta__item"},l.a.createElement("small",null,"Tech:"),l.a.createElement("div",{className:"tech"},e.tech.map((function(e){return l.a.createElement("small",{key:e,className:"chip"},e)})))),l.a.createElement("div",{className:"clearfix"})),l.a.createElement("div",{className:"clearfix"}))}))),l.a.createElement("div",{className:"clearfix"}))};E.propTypes={projects:c.a.arrayOf(c.a.object).isRequired};var f=function(e){var t=e.employment;return l.a.createElement("section",{id:"employment"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Employment")),l.a.createElement("div",{className:"content"},t.map((function(e){return l.a.createElement("div",{key:e.employer,className:"employment"},l.a.createElement("div",{className:"info"},l.a.createElement("p",null,l.a.createElement("strong",null,1!==e.links.length?e.employer:l.a.createElement("a",{href:e.links[0].url,target:"_blank",rel:"noopener noreferrer"},e.employer)),l.a.createElement("span",null," "),l.a.createElement("em",null,"".concat(e.start," - ").concat(e.end)),l.a.createElement("br",null),e.links.length<=1?null:l.a.createElement(n.Fragment,null,l.a.createElement("small",null,l.a.createElement("span",null,"↳ "),e.links.map((function(e,t,a){return l.a.createElement(n.Fragment,{key:e.url},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name),t===a.length-1?null:l.a.createElement("span",null,", "))}))),l.a.createElement("br",null)),l.a.createElement("small",null,e.title)),e.description.map((function(e){return l.a.createElement("p",{key:e},e)}))),l.a.createElement("div",{className:"meta"},e.languages?l.a.createElement("div",{className:"meta__item"},l.a.createElement("small",null,"Language(s):"),l.a.createElement("div",{className:"languages"},e.languages.map((function(e){return l.a.createElement("small",{key:e,className:"chip"},e)})))):null,e.tech?l.a.createElement("div",{className:"meta__item"},l.a.createElement("small",null,"Tech:"),l.a.createElement("div",{className:"tech"},e.tech.map((function(e){return l.a.createElement("small",{key:e,className:"chip"},e)})))):null),l.a.createElement("div",{className:"clearfix"}))}))),l.a.createElement("div",{className:"clearfix"}))};f.propTypes={employment:c.a.arrayOf(c.a.object).isRequired};var p=function(e){var t=e.education;return l.a.createElement("section",{id:"eduation"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Education")),l.a.createElement("div",{className:"content"},t.map((function(e){return l.a.createElement("div",{key:e.school,className:"education"},l.a.createElement("p",null,l.a.createElement("strong",null,e.school),l.a.createElement("span",null," "),l.a.createElement("em",null,"".concat(e.start," - ").concat(e.end)),l.a.createElement("br",null),l.a.createElement("em",null,e.degree)))}))),l.a.createElement("div",{className:"clearfix"}))};p.propTypes={education:c.a.arrayOf(c.a.object).isRequired};var d=function(e){var t=e.skills;return l.a.createElement("section",{id:"skills"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Skills")),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"Language(s):"),(t.language||[]).map((function(e){return l.a.createElement("small",{key:e,className:"chip"},e)})),l.a.createElement("p",null,"Tech:"),(t.tech||[]).map((function(e){return l.a.createElement("small",{key:e,className:"chip"},e)}))),l.a.createElement("div",{className:"clearfix"}))};d.propTypes={skills:c.a.object.isRequired};var v=function(e){var t=e.info;return l.a.createElement("section",{id:"interests"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Interests")),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,t.interests)),l.a.createElement("div",{className:"clearfix"}))};v.propTypes={info:c.a.object.isRequired};var y=function(e){var t=m(Object(n.useState)(e.data),2),a=t[0],r=t[1],c=function(e){r(e.target.response.data)};return Object(n.useEffect)((function(){if(e.url){var t=new XMLHttpRequest;return t.addEventListener("load",c,!0),t.open("GET",e.url,!0),t.responseType="json",t.send(null),function(){t.removeEventListener("load",c,!0)}}}),[]),l.a.createElement(n.Fragment,null,l.a.createElement(s,{info:a.info,social:a.social}),l.a.createElement(o,{info:a.info}),l.a.createElement(u,{info:a.info}),l.a.createElement(E,{projects:a.projects}),l.a.createElement(f,{employment:a.employment}),l.a.createElement(p,{education:a.education}),l.a.createElement(d,{skills:a.skills}),l.a.createElement(v,{info:a.info}))};y.propTypes={url:c.a.string,data:c.a.object},y.defaultProps={data:{info:{},social:[],projects:[],employment:[],education:[],skills:[]}},t.default=y}});