(self.webpackChunkrestaurant_catalogue=self.webpackChunkrestaurant_catalogue||[]).push([[642],{314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},417:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},354:t=>{"use strict";t.exports=function(t){var e=t[1],r=t[3];if(!r)return e;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},879:t=>{!function(e){var r=function(t,e,r){"use strict";var n,a;if(function(){var e,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in a=t.lazySizesConfig||t.lazysizesConfig||{},r)e in a||(a[e]=r[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var o,i,s,c,u,l,f,d,h,p,v,y,g,m,b,w,z,E,C,x,L,A,_,N,M,S,T,F,j,O,k,P,R,I,W,B,G,H,$,D,U,q,Q,J,Y=e.documentElement,K=t.HTMLPictureElement,V="addEventListener",X="getAttribute",Z=t[V].bind(t),tt=t.setTimeout,et=t.requestAnimationFrame||tt,rt=t.requestIdleCallback,nt=/^picture$/i,at=["load","error","lazyincluded","_lazyloaded"],ot={},it=Array.prototype.forEach,st=function(t,e){return ot[e]||(ot[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),ot[e].test(t[X]("class")||"")&&ot[e]},ct=function(t,e){st(t,e)||t.setAttribute("class",(t[X]("class")||"").trim()+" "+e)},ut=function(t,e){var r;(r=st(t,e))&&t.setAttribute("class",(t[X]("class")||"").replace(r," "))},lt=function(t,e,r){var n=r?V:"removeEventListener";r&&lt(t,e),at.forEach((function(r){t[n](r,e)}))},ft=function(t,r,a,o,i){var s=e.createEvent("Event");return a||(a={}),a.instance=n,s.initEvent(r,!o,!i),s.detail=a,t.dispatchEvent(s),s},dt=function(e,r){var n;!K&&(n=t.picturefill||a.pf)?(r&&r.src&&!e[X]("srcset")&&e.setAttribute("srcset",r.src),n({reevaluate:!0,elements:[e]})):r&&r.src&&(e.src=r.src)},ht=function(t,e){return(getComputedStyle(t,null)||{})[e]},pt=function(t,e,r){for(r=r||t.offsetWidth;r<a.minSize&&e&&!t._lazysizesWidth;)r=e.offsetWidth,e=e.parentNode;return r},vt=(U=[],q=D=[],J=function(t,r){H&&!r?t.apply(this,arguments):(q.push(t),$||($=!0,(e.hidden?tt:et)(Q)))},J._lsFlush=Q=function(){var t=q;for(q=D.length?U:D,H=!0,$=!1;t.length;)t.shift()();H=!1},J),yt=function(t,e){return e?function(){vt(t)}:function(){var e=this,r=arguments;vt((function(){t.apply(e,r)}))}},gt=function(t){var e,n,a=function(){e=null,t()},o=function(){var t=r.now()-n;t<99?tt(o,99-t):(rt||a)(a)};return function(){n=r.now(),e||(e=tt(o,99))}},mt=(z=/^img$/i,E=/^iframe$/i,C="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),x=0,L=0,A=-1,_=function(t){L--,(!t||L<0||!t.target)&&(L=0)},N=function(t){return null==w&&(w="hidden"==ht(e.body,"visibility")),w||!("hidden"==ht(t.parentNode,"visibility")&&"hidden"==ht(t,"visibility"))},M=function(t,r){var n,a=t,o=N(t);for(y-=r,b+=r,g-=r,m+=r;o&&(a=a.offsetParent)&&a!=e.body&&a!=Y;)(o=(ht(a,"opacity")||1)>0)&&"visible"!=ht(a,"overflow")&&(n=a.getBoundingClientRect(),o=m>n.left&&g<n.right&&b>n.top-1&&y<n.bottom+1);return o},T=function(t){var e,n=0,o=a.throttleDelay,i=a.ricTimeout,s=function(){e=!1,n=r.now(),t()},c=rt&&i>49?function(){rt(s,{timeout:i}),i!==a.ricTimeout&&(i=a.ricTimeout)}:yt((function(){tt(s)}),!0);return function(t){var a;(t=!0===t)&&(i=33),e||(e=!0,(a=o-(r.now()-n))<0&&(a=0),t||a<9?c():tt(c,a))}}(S=function(){var t,r,o,i,s,c,f,h,z,E,_,S,T=n.elements;if((d=a.loadMode)&&L<8&&(t=T.length)){for(r=0,A++;r<t;r++)if(T[r]&&!T[r]._lazyRace)if(!C||n.prematureUnveil&&n.prematureUnveil(T[r]))I(T[r]);else if((h=T[r][X]("data-expand"))&&(c=1*h)||(c=x),E||(E=!a.expand||a.expand<1?Y.clientHeight>500&&Y.clientWidth>500?500:370:a.expand,n._defEx=E,_=E*a.expFactor,S=a.hFac,w=null,x<_&&L<1&&A>2&&d>2&&!e.hidden?(x=_,A=0):x=d>1&&A>1&&L<6?E:0),z!==c&&(p=innerWidth+c*S,v=innerHeight+c,f=-1*c,z=c),o=T[r].getBoundingClientRect(),(b=o.bottom)>=f&&(y=o.top)<=v&&(m=o.right)>=f*S&&(g=o.left)<=p&&(b||m||g||y)&&(a.loadHidden||N(T[r]))&&(l&&L<3&&!h&&(d<3||A<4)||M(T[r],c))){if(I(T[r]),s=!0,L>9)break}else!s&&l&&!i&&L<4&&A<4&&d>2&&(u[0]||a.preloadAfterLoad)&&(u[0]||!h&&(b||m||g||y||"auto"!=T[r][X](a.sizesAttr)))&&(i=u[0]||T[r]);i&&!s&&I(i)}}),j=yt(F=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(_(t),ct(e,a.loadedClass),ut(e,a.loadingClass),lt(e,O),ft(e,"lazyloaded"))}),O=function(t){j({target:t.target})},k=function(t,e){var r=t.getAttribute("data-load-mode")||a.iframeLoadMode;0==r?t.contentWindow.location.replace(e):1==r&&(t.src=e)},P=function(t){var e,r=t[X](a.srcsetAttr);(e=a.customMedia[t[X]("data-media")||t[X]("media")])&&t.setAttribute("media",e),r&&t.setAttribute("srcset",r)},R=yt((function(t,e,r,n,o){var i,s,c,u,l,d;(l=ft(t,"lazybeforeunveil",e)).defaultPrevented||(n&&(r?ct(t,a.autosizesClass):t.setAttribute("sizes",n)),s=t[X](a.srcsetAttr),i=t[X](a.srcAttr),o&&(u=(c=t.parentNode)&&nt.test(c.nodeName||"")),d=e.firesLoad||"src"in t&&(s||i||u),l={target:t},ct(t,a.loadingClass),d&&(clearTimeout(f),f=tt(_,2500),lt(t,O,!0)),u&&it.call(c.getElementsByTagName("source"),P),s?t.setAttribute("srcset",s):i&&!u&&(E.test(t.nodeName)?k(t,i):t.src=i),o&&(s||u)&&dt(t,{src:i})),t._lazyRace&&delete t._lazyRace,ut(t,a.lazyClass),vt((function(){var e=t.complete&&t.naturalWidth>1;d&&!e||(e&&ct(t,a.fastLoadedClass),F(l),t._lazyCache=!0,tt((function(){"_lazyCache"in t&&delete t._lazyCache}),9)),"lazy"==t.loading&&L--}),!0)})),I=function(t){if(!t._lazyRace){var e,r=z.test(t.nodeName),n=r&&(t[X](a.sizesAttr)||t[X]("sizes")),o="auto"==n;(!o&&l||!r||!t[X]("src")&&!t.srcset||t.complete||st(t,a.errorClass)||!st(t,a.lazyClass))&&(e=ft(t,"lazyunveilread").detail,o&&bt.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,L++,R(t,e,o,n,r))}},W=gt((function(){a.loadMode=3,T()})),G=function(){l||(r.now()-h<999?tt(G,999):(l=!0,a.loadMode=3,T(),Z("scroll",B,!0)))},{_:function(){h=r.now(),n.elements=e.getElementsByClassName(a.lazyClass),u=e.getElementsByClassName(a.lazyClass+" "+a.preloadClass),Z("scroll",T,!0),Z("resize",T,!0),Z("pageshow",(function(t){if(t.persisted){var r=e.querySelectorAll("."+a.loadingClass);r.length&&r.forEach&&et((function(){r.forEach((function(t){t.complete&&I(t)}))}))}})),t.MutationObserver?new MutationObserver(T).observe(Y,{childList:!0,subtree:!0,attributes:!0}):(Y[V]("DOMNodeInserted",T,!0),Y[V]("DOMAttrModified",T,!0),setInterval(T,999)),Z("hashchange",T,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){e[V](t,T,!0)})),/d$|^c/.test(e.readyState)?G():(Z("load",G),e[V]("DOMContentLoaded",T),tt(G,2e4)),n.elements.length?(S(),vt._lsFlush()):T()},checkElems:T,unveil:I,_aLSL:B=function(){3==a.loadMode&&(a.loadMode=2),W()}}),bt=(i=yt((function(t,e,r,n){var a,o,i;if(t._lazysizesWidth=n,n+="px",t.setAttribute("sizes",n),nt.test(e.nodeName||""))for(o=0,i=(a=e.getElementsByTagName("source")).length;o<i;o++)a[o].setAttribute("sizes",n);r.detail.dataAttr||dt(t,r.detail)})),s=function(t,e,r){var n,a=t.parentNode;a&&(r=pt(t,a,r),(n=ft(t,"lazybeforesizes",{width:r,dataAttr:!!e})).defaultPrevented||(r=n.detail.width)&&r!==t._lazysizesWidth&&i(t,a,n,r))},{_:function(){o=e.getElementsByClassName(a.autosizesClass),Z("resize",c)},checkElems:c=gt((function(){var t,e=o.length;if(e)for(t=0;t<e;t++)s(o[t])})),updateElem:s}),wt=function(){!wt.i&&e.getElementsByClassName&&(wt.i=!0,bt._(),mt._())};return tt((function(){a.init&&wt()})),n={cfg:a,autoSizer:bt,loader:mt,init:wt,uP:dt,aC:ct,rC:ut,hC:st,fire:ft,gW:pt,rAF:vt}}(e,e.document,Date);e.lazySizes=r,t.exports&&(t.exports=r)}("undefined"!=typeof window?window:{})},552:(t,e,r)=>{var n,a,o;!function(i,s){i&&(s=s.bind(null,i,i.document),t.exports?s(r(879)):(a=[r(879)],void 0===(o="function"==typeof(n=s)?n.apply(e,a):n)||(t.exports=o)))}("undefined"!=typeof window?window:0,(function(t,e,r){"use strict";if(t.addEventListener){var n=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,a=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,o=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,i=/^picture$/i,s=r.cfg,c={getParent:function(e,r){var n=e,a=e.parentNode;return r&&"prev"!=r||!a||!i.test(a.nodeName||"")||(a=a.parentNode),"self"!=r&&(n="prev"==r?e.previousElementSibling:r&&(a.closest||t.jQuery)&&(a.closest?a.closest(r):jQuery(a).closest(r)[0])||a),n},getFit:function(t){var e,r,n=getComputedStyle(t,null)||{},i=n.content||n.fontFamily,s={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!s.fit&&i&&(e=i.match(a))&&(s.fit=e[1]),s.fit?(!(r=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&i&&(e=i.match(o))&&(r=e[1]),s.parent=c.getParent(t,r)):s.fit=n.objectFit,s},getImageRatio:function(e){var r,a,o,c,u,l,f,d=e.parentNode,h=d&&i.test(d.nodeName||"")?d.querySelectorAll("source, img"):[e];for(r=0;r<h.length;r++)if(a=(e=h[r]).getAttribute(s.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",o=e._lsMedia||e.getAttribute("media"),o=s.customMedia[e.getAttribute("data-media")||o]||o,a&&(!o||(t.matchMedia&&matchMedia(o)||{}).matches)){(c=parseFloat(e.getAttribute("data-aspectratio")))||((u=a.match(n))?"w"==u[2]?(l=u[1],f=u[3]):(l=u[3],f=u[1]):(l=e.getAttribute("width"),f=e.getAttribute("height")),c=l/f);break}return c},calculateSize:function(t,e){var r,n,a,o=this.getFit(t),i=o.fit,s=o.parent;return"width"==i||("contain"==i||"cover"==i)&&(n=this.getImageRatio(t))?(s?e=s.clientWidth:s=t,a=e,"width"==i?a=e:(r=e/s.clientHeight)&&("cover"==i&&r<n||"contain"==i&&r>n)&&(a=e*(n/r)),a):e}};r.parentFit=c,e.addEventListener("lazybeforesizes",(function(t){if(!t.defaultPrevented&&t.detail.instance==r){var e=t.target;t.detail.width=c.calculateSize(e,t.detail.width)}}))}}))},452:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),s=new S(n||[]);return a(i,"_invoke",{value:A(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function g(){}function m(){}function b(){}var w={};u(w,i,(function(){return this}));var z=Object.getPrototypeOf,E=z&&z(z(T([])));E&&E!==r&&n.call(E,i)&&(w=E);var C=b.prototype=g.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,o,i,s){var c=f(t[a],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function A(t,r,n){var a=d;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var c=_(s,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===d)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var u=f(t,r,n);if("normal"===u.type){if(a=n.done?v:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=v,n.method="throw",n.arg=u.arg)}}}function _(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=f(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function T(t){if(null!=t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return m.prototype=b,a(C,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:m,configurable:!0}),m.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},x(L.prototype),u(L.prototype,s,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new L(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(C),u(C,c,"Generator"),u(C,i,(function(){return this})),u(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;M(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},72:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=n.base?c[0]+n.base:c[0],l=o[u]||0,f="".concat(u," ").concat(l);o[u]=l+1;var d=r(f),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(h);else{var p=a(h,n);n.byIndex=s,e.splice(s,0,{identifier:f,updater:p,references:1})}i.push(f)}return i}function a(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,a){var o=n(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=r(o[i]);e[s].references--}for(var c=n(t,a),u=0;u<o.length;u++){var l=r(o[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},659:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}}]);
//# sourceMappingURL=642.bundle.js.map