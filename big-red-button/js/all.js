"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();!function(){var e=(document.getElementsByClassName("modal"),function(){function e(n){_classCallCheck(this,e),this.el=document.getElementById(n)}return _createClass(e,[{key:"open",value:function(){this.el.classList.add("modal_visible")}},{key:"close",value:function(){this.el.classList.remove("modal_visible")}}]),e}()),n=new e("modal__loading"),t=new e("modal__ok"),o=document.getElementById("run"),l=document.getElementById("ok"),a=document.getElementById("loading");l.addEventListener("click",function(){t.close()}),o.addEventListener("click",function(){a.classList.add("loading_run"),n.open(),setTimeout(function(){setTimeout(function(){t.open()},300),n.close(),a.classList.remove("loading_run")},5090)})}();