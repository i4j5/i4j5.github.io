!function t(e,n,i){function r(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return r(n?n:t)},u,u.exports,t,e,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(t,e,n){"use strict";var i,r;i=t("./widget.coffee"),r=t("zeptojs"),"undefined"==typeof window.VK&&(window.VK={}),"undefined"==typeof VK.Share&&(VK.Share={}),VK.Share.count=function(t,e){var n,r;n=parseInt(localStorage.getItem("__i4j5_vk_widget.count"))||parseInt(e),r=parseInt(localStorage.getItem("__i4j5_vk_widget.show"))||0,e>n&&(n=e,r=1),localStorage.setItem("__i4j5_vk_widget.count",n),localStorage.setItem("__i4j5_vk_widget.show",r),r&&(i.show(),console.log("show"))},window.i4j5=i},{"./widget.coffee":3,zeptojs:4}],2:[function(t,e,n){var i;i='<div class="i4j5-vk-widget">\n	<div class="i4j5-vk-widget__sticker">\n		<div class="i4j5-vk-widget__icon i4j5-vk-widget__icon_on"></div>\n		<div class="i4j5-vk-widget__offer"></div>\n	</div>\n	<div class="i4j5-vk-widget__body">\n		<div class="i4j5-vk-widget__close"></div>\n		<div class="i4j5-vk-widget__title"></div>\n		<div class="i4j5-vk-widget__text"></div>\n		<div class="i4j5-vk-widget__btn"></div>\n		<div class="i4j5-vk-widget__link">Хочу такой виджет</div>\n	</div>\n</div>',e.exports=i},{}],3:[function(t,e,n){var i,r,o;i=t("./view.coffee"),o=t("zeptojs"),window.$=o,r={vals:{vk:{url:"",title:"",img:""},description:"",offer:{title:"",text:""},instruction:{title:"",text:""}},init:function(t){var e,n;return n=this,n.vals=t,e=o(i),e.children(".i4j5-vk-widget__body").children(".i4j5-vk-widget__title").text(n.vals.offer.title),e.children(".i4j5-vk-widget__body").children(".i4j5-vk-widget__text").text(n.vals.offer.text),o("body").append(e),e.ready(function(){var t;return n.runAnimation(),n.runEvents(),t=o("<script></script>"),t.attr("type","text/javascript"),t.attr("src","https://vk.com/share.php?act=count&index=0&url="+n.vals.vk.url),o("head").append(t)})},open:function(){var t,e,n;return n=this,e=window.open("https://vk.com/share.php?url="+n.vals.vk.url+"&title="+n.vals.vk.title+"&image="+n.vals.vk.img+"&description="+n.vals.vk.description+"&noparse=true","","width=600,height=400"),e.focus(),t=setInterval(function(){return e.closed?(setTimeout(function(){var t;t=o("<script></script>"),t.attr("type","text/javascript"),t.attr("src","https://vk.com/share.php?act=count&index=0&url="+n.vals.vk.url),o("head").append(t)},100),clearInterval(t)):void 0},100)},show:function(){var t,e,n;return e=this,o(".i4j5-vk-widget__title").text(e.vals.instruction.title),o(".i4j5-vk-widget__text").text(e.vals.instruction.text),o(".i4j5-vk-widget__btn").css("display","none"),console.log("@"),t=o(".i4j5-vk-widget__body"),n=o(".i4j5-vk-widget__sticker"),70!==n.height()?n.css({height:t.height()}):void 0},runAnimation:function(){var t,e;return e=this,t=4e3,setInterval(function(){return o(".i4j5-vk-widget__icon").removeClass("i4j5-vk-widget__icon_on"),o(".i4j5-vk-widget__icon").addClass("i4j5-vk-widget__icon_off"),setTimeout(function(){return o(".i4j5-vk-widget__offer").removeClass("i4j5-vk-widget__offer_off"),o(".i4j5-vk-widget__offer").addClass("i4j5-vk-widget__offer_on")},700),setTimeout(function(){return o(".i4j5-vk-widget__offer").removeClass("i4j5-vk-widget__offer_on"),o(".i4j5-vk-widget__offer").addClass("i4j5-vk-widget__offer_off"),setTimeout(function(){return o(".i4j5-vk-widget__icon").removeClass("i4j5-vk-widget__icon_off"),o(".i4j5-vk-widget__icon").addClass("i4j5-vk-widget__icon_on")},700)},t+700)},2*(t+700))},runEvents:function(){var t,e,n;return e=this,o("body").on("click",".i4j5-vk-widget__btn",function(){return e.open()}),o("body").on("click",".i4j5-vk-widget__link",function(){return window.open("http://i4j5.github.io/vk-widget","_blank")}),t=o(".i4j5-vk-widget__body"),n=o(".i4j5-vk-widget__sticker"),o("body").on("click",".i4j5-vk-widget__sticker",function(){return n.css({transition:"width .3s, height .3s, border-radius .4s, visibility 1.3s, width 1s, height 1s, opacity .2s ease-in-out 1s",height:t.height(),width:"300px",opacity:0,"border-radius":"30px",visibility:"hidden"}),t.css({transition:"visibility 1s, opacity .4s ease-in-out .8s",visibility:"visible",opacity:1})}),o("body").on("click",".i4j5-vk-widget__close",function(){return t.css({transition:"visibility .2s, opacity .1s ease-in-out",visibility:"hidden",opacity:0}),n.css({transition:"border-radius 1s, visibility .1s, width 1s, height 1s, opacity .1s ease-in-out",height:"70px",width:"70px",opacity:1,"border-radius":"70px",visibility:"visible"})})}},e.exports=r},{"./view.coffee":2,zeptojs:4}],4:[function(t,e,n){var i=function(){function t(t){return null==t?String(t):U[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return N.call(t,function(t){return null!=t})}function c(t){return t.length>0?j.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||L[u(t)]?e:e+"px"}function h(t){var e,n;return P[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),P[t]=n),P[t]}function d(t){return"children"in t?T.call(t.children):j.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,e,n){for(b in e)n&&(o(e[b])||Y(e[b]))?(o(e[b])&&!o(t[b])&&(t[b]={}),Y(e[b])&&!Y(t[b])&&(t[b]=[]),p(t[b],e[b],n)):e[b]!==x&&(t[b]=e[b])}function v(t,e){return null==e?j(t):j(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==x;return e===x?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function w(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?j.parseJSON(t):t:e):t}catch(n){return t}}function _(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)_(t.childNodes[n],e)}var x,b,j,k,E,C,S=[],T=S.slice,N=S.filter,O=window.document,P={},A={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},$=/^\s*<(\w+|!)[^>]*>/,D=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,I=/^(?:body|html)$/i,R=/([A-Z])/g,q=["val","css","html","text","data","width","height","offset"],M=["after","prepend","before","append"],F=O.createElement("table"),V=O.createElement("tr"),Z={tr:O.createElement("tbody"),tbody:F,thead:F,tfoot:F,td:V,th:V,"*":O.createElement("div")},H=/complete|loaded|interactive/,B=/^[\w-]*$/,U={},J=U.toString,X={},W=O.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=W).appendChild(t),i=~X.qsa(r,e).indexOf(t),o&&W.removeChild(t),i},E=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return N.call(t,function(e,n){return t.indexOf(e)==n})},X.fragment=function(t,e,n){var i,r,s;return D.test(t)&&(i=j(O.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(z,"<$1></$2>")),e===x&&(e=$.test(t)&&RegExp.$1),e in Z||(e="*"),s=Z[e],s.innerHTML=""+t,i=j.each(T.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(r=j(i),j.each(n,function(t,e){q.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},X.Z=function(t,e){return t=t||[],t.__proto__=j.fn,t.selector=e||"",t},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,n){var i;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&$.test(t))i=X.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return j(n).find(t);i=X.qsa(O,t)}else{if(e(t))return j(O).ready(t);if(X.isZ(t))return t;if(Y(t))i=a(t);else if(r(t))i=[t],t=null;else if($.test(t))i=X.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return j(n).find(t);i=X.qsa(O,t)}}return X.Z(i,t)},j=function(t,e){return X.init(t,e)},j.extend=function(t){var e,n=T.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){p(t,n,e)}),t},X.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],s=r||o?e.slice(1):e,a=B.test(s);return i(t)&&a&&r?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:T.call(a&&!r?o?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},j.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},j.type=t,j.isFunction=e,j.isWindow=n,j.isArray=Y,j.isPlainObject=o,j.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},j.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},j.camelCase=E,j.trim=function(t){return null==t?"":String.prototype.trim.call(t)},j.uuid=0,j.support={},j.expr={},j.map=function(t,e){var n,i,r,o=[];if(s(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return c(o)},j.each=function(t,e){var n,i;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},j.grep=function(t,e){return N.call(t,e)},window.JSON&&(j.parseJSON=JSON.parse),j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){U["[object "+e+"]"]=e.toLowerCase()}),j.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return j(j.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return j(T.apply(this,arguments))},ready:function(t){return H.test(O.readyState)&&O.body?t(j):O.addEventListener("DOMContentLoaded",function(){t(j)},!1),this},get:function(t){return t===x?T.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):j(N.call(this,function(e){return X.matches(e,t)}))},add:function(t,e){return j(C(this.concat(j(t,e))))},is:function(t){return this.length>0&&X.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&e(t.item)?T.call(t):j(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return j(n)},has:function(t){return this.filter(function(){return r(t)?j.contains(this,t):j(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:j(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:j(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?j(t).filter(function(){var t=this;return S.some.call(n,function(e){return j.contains(e,t)})}):1==this.length?j(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)}):[]},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=j(t));n&&!(r?r.indexOf(n)>=0:X.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return j(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=j.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(C(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return T.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return N.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return j.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=j(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){j(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){j(this[0]).before(t=j(t));for(var e;(e=t.children()).length;)t=e.first();j(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=j(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){j(this).replaceWith(j(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=j(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return j(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return j(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;j(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(b in t)m(this,b,t[b]);else m(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&m(this,t)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(R,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?w(i):x},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?j(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=j(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0],r=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[E(e)]||r.getPropertyValue(e);if(Y(e)){var o={};return j.each(Y(e)?e:[e],function(t,e){o[e]=i.style[E(e)]||r.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(b in e)e[b]||0===e[b]?s+=u(b)+":"+f(b,e[b])+";":this.each(function(){this.style.removeProperty(u(b))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(j(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?S.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){k=[];var n=y(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){j(this).hasClass(t)||k.push(t)},this),k.length&&y(this,n+(n?" ":"")+k.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===x?y(this,""):(k=y(this),g(this,t,e,k).split(/\s+/g).forEach(function(t){k=k.replace(l(t)," ")}),void y(this,k.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var i=j(this),r=g(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===x?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=I.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(j(t).css("margin-top"))||0,n.left-=parseFloat(j(t).css("margin-left"))||0,i.top+=parseFloat(j(e[0]).css("border-top-width"))||0,i.left+=parseFloat(j(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!I.test(t.nodeName)&&"static"==j(t).css("position");)t=t.offsetParent;return t})}},j.fn.detach=j.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});j.fn[t]=function(r){var o,s=this[0];return r===x?n(s)?s["inner"+e]:i(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=j(this),s.css(t,g(this,r,e,s[t]()))})}}),M.forEach(function(e,n){var i=n%2;j.fn[e]=function(){var e,r,o=j.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:X.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=j.contains(O.documentElement,r);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return j(t).remove();r.insertBefore(t,e),a&&_(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},j.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return j(t)[e](this),this}}),X.Z.prototype=j.fn,X.uniq=C,X.deserializeValue=w,j.zepto=X,j}();e.exports=i,function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=i(n),n.ns)var a=r(n.ns);return(g[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||a.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!s||t.sel==s)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in w||!!e}function s(t){return _[t]||y&&w[t]||t}function a(n,r,a,c,l,h,d){var p=e(n),v=g[p]||(g[p]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var r=i(e);r.fn=a,r.sel=l,r.e in _&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var p=h||a;r.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=p.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=v.length,v.push(r),"addEventListener"in n&&n.addEventListener(s(r.e),r.proxy,o(r,d))})}function c(t,i,r,a,c){var u=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,a).forEach(function(e){delete g[u][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,c))})})}function u(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(k,function(t,i){var r=n[t];e[t]=function(){return this[i]=x,r&&r.apply(n,arguments)},e[i]=b}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,d=Array.prototype.slice,p=t.isFunction,v=function(t){return"string"==typeof t},g={},m={},y="onfocusin"in window,w={focus:"focusin",blur:"focusout"},_={mouseenter:"mouseover",mouseleave:"mouseout"};m.click=m.mousedown=m.mouseup=m.mousemove="MouseEvents",t.event={add:a,remove:c},t.proxy=function(n,i){var r=2 in arguments&&d.call(arguments,2);if(p(n)){var o=function(){return n.apply(i,r?r.concat(d.call(arguments)):arguments)};return o._zid=e(n),o}if(v(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$)/,k={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var s,u,h=this;return e&&!v(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(v(n)||p(r)||r===!1||(r=i,i=n,n=f),(p(i)||i===!1)&&(r=i,i=f),r===!1&&(r=b),h.each(function(f,h){o&&(s=function(t){return c(h,t.type,r),r.apply(this,arguments)}),n&&(u=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(s||r).apply(o,[i].concat(d.call(arguments,1)))):void 0}),a(h,e,r,i,n,u||s)}))},t.fn.off=function(e,n,i){var r=this;return e&&!v(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(v(n)||p(i)||i===!1||(i=n,n=f),i===!1&&(i=b),r.each(function(){c(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=v(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(s,a){r=l(v(e)?t.Event(e):e),r._args=i,r.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){v(t)||(e=t,t=e.type);var n=document.createEvent(m[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),u(n)}}(i),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function s(t,e,i,r){var o=i.context,s="success";i.success.call(o,t,s,e),r&&r.resolveWith(o,[t,s,e]),n(i,o,"ajaxSuccess",[e,i,t]),c(s,e,i)}function a(t,e,i,r,o){var s=r.context;r.error.call(s,i,e,t),o&&o.rejectWith(s,[i,e,t]),n(r,s,"ajaxError",[i,r,t||e]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==j?"html":t==b?"json":_.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function d(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function p(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(c.name,c.value):"array"==o||!i&&"object"==o?p(e,c,i,n):e.add(n,c)})}var v,g,m=0,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,_=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,b="application/json",j="text/html",k=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++m,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},d={abort:h};return n&&n.promise(d),t(l).on("load error",function(o,c){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?s(i[0],d,e,n):a(null,c||"error",d,e,n),window[u]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(d,e)===!1?(h("abort"),d):(window[u]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:b,xml:"application/xml, text/xml",html:j,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),r=t.Deferred&&t.Deferred();for(v in t.ajaxSettings)void 0===n[v]&&(n[v]=t.ajaxSettings[v]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n);var c=n.dataType,d=/\?.+=\?/.test(n.url);if(d&&(c="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=c&&"jsonp"!=c)||(n.url=f(n.url,"_="+Date.now())),"jsonp"==c)return d||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,r);var p,m=n.accepts[c],y={},w=function(t,e){y[t.toLowerCase()]=[t,e]},_=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,x=n.xhr(),b=x.setRequestHeader;if(r&&r.promise(x),n.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",m||"*/*"),(m=n.mimeType||m)&&(m.indexOf(",")>-1&&(m=m.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(m)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&w("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(g in n.headers)w(g,n.headers[g]);if(x.setRequestHeader=w,x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=u,clearTimeout(p);var e,i=!1;if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==_){c=c||l(n.mimeType||x.getResponseHeader("content-type")),e=x.responseText;try{"script"==c?(0,eval)(e):"xml"==c?e=x.responseXML:"json"==c&&(e=k.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?a(i,"parsererror",x,n,r):s(e,x,n,r)}else a(x.statusText||null,x.status?"error":"abort",x,n,r)}},o(x,n)===!1)return x.abort(),a(null,"abort",x,n,r),x;if(n.xhrFields)for(g in n.xhrFields)x[g]=n.xhrFields[g];var j="async"in n?n.async:!0;x.open(n.type,n.url,j,n.username,n.password);for(g in y)b.apply(x,y[g]);return n.timeout>0&&(p=setTimeout(function(){x.onreadystatechange=u,x.abort(),a(null,"timeout",x,n,r)},n.timeout)),x.send(n.data?n.data:null),x},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,s=e.split(/\s/),a=d(e,n,i),c=a.success;return s.length>1&&(a.url=s[0],r=s[1]),a.success=function(e){o.html(r?t("<div>").html(e.replace(w,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(a),this};var E=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(E(t)+"="+E(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(i),function(t){t.fn.serializeArray=function(){var e,n=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(i),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(i)},{}]},{},[1]);