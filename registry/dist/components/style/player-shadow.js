!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/player-shadow"]=t():e["style/player-shadow"]=t()}(self,(function(){return function(){var e,t,n={932:function(e,t,n){var o=n(645)((function(e){return e[1]}));o.push([e.id,"#bilibili-player,\n#bilibili-player.mini-player::before {\n  box-shadow: 0px 2px 8px 0px var(--theme-color-30) !important;\n}\nbody.dark #bilibili-player,\nbody.dark #bilibili-player.mini-player::before {\n  box-shadow: 0px 2px 8px 0px var(--theme-color-20) !important;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},509:function(e,t,n){var o=n(932);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return t}});var e=coreApis.utils.urls;const t={name:"playerShadow",displayName:"播放器投影",entry:none,instantStyles:[{name:"playerShadow",style:()=>Promise.resolve().then(r.t.bind(r,509,23))}],tags:[componentsTags.style,componentsTags.video],description:{"zh-CN":"为播放器添加主题色投影."},urlInclude:e.allVideoUrls,commitHash:"70a2709ba4018cd7034b9293d4abbbe0ebaeb58f",coreVersion:"2.2.1"}}(),i=i.component}()}));