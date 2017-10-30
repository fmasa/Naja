/*!
 * Naja.ja
 * v1.1.0
 * 
 * by Jiří Pudil <https://jiripudil.cz>
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.naja=t():e.naja=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";var r=e.exports.createUniqueKey="undefined"!=typeof Symbol?Symbol:function(e){return"[["+e+"_"+Math.random().toFixed(8).slice(2)+"]]"},i=e.exports.isObject=function(e){return"object"==typeof e&&null!==e};e.exports.LISTENERS=r("listeners"),e.exports.CAPTURE=1,e.exports.BUBBLE=2,e.exports.ATTRIBUTE=3,e.exports.newNode=function(e,t,n){var r=i(n);return{listener:e,kind:t,once:r&&Boolean(n.once),passive:r&&Boolean(n.passive),next:null}}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){v&&d&&(v=!1,d.length?h=d.concat(h):y=-1,h.length&&u())}function u(){if(!v){var e=i(a);v=!0;for(var t=h.length;t;){for(d=h,h=[];++y<t;)d&&d[y].run();y=-1,t=h.length}d=null,v=!1,o(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var c,f,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],v=!1,y=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||v||i(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=r(i),a=n(21),u=r(a),s=n(22),l=r(s),c=new o.default;c.registerExtension(u.default),c.registerExtension(l.default),t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),f=r(c),p=n(11),d=r(p),h=n(12),v=r(h),y=n(15),m=r(y),b=n(16),w=r(b),g=n(17),T=r(g),E=n(18),x=r(E),j=n(19),O=r(j),k=n(20),L=r(k),S=function(e){function t(e,n,r,i,u,s){o(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return l.initialized=!1,l.uiHandler=null,l.redirectHandler=null,l.snippetHandler=null,l.formsHandler=null,l.historyHandler=null,l.scriptLoader=null,l.extensions=[],l.uiHandler=e?new e(l):new m.default(l),l.redirectHandler=n?new n(l):new T.default(l),l.snippetHandler=r?new r(l):new x.default(l),l.formsHandler=i?new i(l):new w.default(l),l.historyHandler=u?new u(l):new O.default(l),l.scriptLoader=s?new s(l):new L.default(l),l}return u(t,e),l(t,[{key:"registerExtension",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.extensions.push([e,n])}},{key:"initialize",value:function(){var e=this;if(this.initialized)throw new Error("Cannot initialize Naja, it is already initialized.");this.extensions=this.extensions.map(function(t){var n=s(t,2),r=n[0],o=n[1];return new(Function.prototype.bind.apply(r,[null].concat([e],i(o))))}),this.fireEvent("init"),this.initialized=!0,this.load()}},{key:"load",value:function(){this.fireEvent("load")}},{key:"fireEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,d.default)(t,{type:e,cancelable:!0});return this.dispatchEvent(n)}},{key:"makeRequest",value:function(e,t,n,r){var i=this,o={dataType:"post",responseType:"auto"};r=(0,d.default)({},o,r||{});var a=void 0,u=function(o){a=o,i.fireEvent("before",{xhr:o,method:e,url:t,data:n,options:r})||o.abort(),o.addEventListener("abort",function(){i.fireEvent("abort",{xhr:o}),i.fireEvent("complete",{error:new Error("Request aborted"),xhr:o,response:null})})},s=f.default.map(e,t,n,r,u).then(function(e,t){return i.fireEvent("success",{xhr:e,response:t}),i.fireEvent("complete",{error:null,xhr:e,response:t}),i.load(),t}).catch(function(e,t,n){throw i.fireEvent("error",{error:e,xhr:t,response:n}),i.fireEvent("complete",{error:e,xhr:t,response:n}),i.load(),e});return this.fireEvent("start",{request:s,xhr:a}),s}}]),t}(v.default);t.default=S},function(e,t,n){e.exports=function(){var e="undefined"!=typeof window?window:self,t=n(6),r=n(10),i={},o="json",a="post",u=null,s=0,l=[],c=e.XMLHttpRequest?function(){return new e.XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")},f=""===c().responseType,p=function(n,p,d,h,v){n=n.toUpperCase(),d=void 0===d?null:d,h=h||{};for(var y in i)if(!(y in h))if("object"==typeof i[y]&&"object"==typeof h[y])for(var m in i[y])h[y][m]=i[y][m];else h[y]=i[y];var b,w,g,T,E,x=!1,j=!1,O=!1,k=0,L={},S={text:"*/*",xml:"text/xml",json:"application/json",post:"application/x-www-form-urlencoded",document:"text/html"},_={text:"*/*",xml:"application/xml; q=1.0, text/xml; q=0.8, */*; q=0.1",json:"application/json; q=1.0, text/*; q=0.8, */*; q=0.1"},P=!1,A=t(function(t){return t.abort=function(){O||(w&&4!=w.readyState&&w.abort(),P&&(--s,P=!1),O=!0)},t.send=function(){if(!P){if(s==u)return void l.push(t);if(O)return void(l.length&&l.shift().send());if(++s,P=!0,w=c(),b&&("withCredentials"in w||!e.XDomainRequest||(w=new XDomainRequest,j=!0,"GET"!=n&&"POST"!=n&&(n="POST"))),j?w.open(n,p):(w.open(n,p,h.async,h.user,h.password),f&&h.async&&(w.withCredentials=h.withCredentials)),!j)for(var r in L)L[r]&&w.setRequestHeader(r,L[r]);if(f&&"auto"!=h.responseType)try{w.responseType=h.responseType,x=w.responseType==h.responseType}catch(e){}f||j?(w.onload=M,w.onerror=C,j&&(w.onprogress=function(){})):w.onreadystatechange=function(){4==w.readyState&&M()},h.async?"timeout"in w?(w.timeout=h.timeout,w.ontimeout=I):g=setTimeout(I,h.timeout):j&&(w.ontimeout=function(){}),"auto"!=h.responseType&&"overrideMimeType"in w&&w.overrideMimeType(S[h.responseType]),v&&v(w),j?setTimeout(function(){w.send("GET"!=n?d:null)},0):w.send("GET"!=n?d:null)}},t}),M=function(){var t;if(P=!1,clearTimeout(g),l.length&&l.shift().send(),!O){--s;try{if(x){if("response"in w&&null===w.response)throw"The request response is empty";E=w.response}else{if("auto"==(t=h.responseType))if(j)t=o;else{var n=w.getResponseHeader("Content-Type")||"";t=n.indexOf(S.json)>-1?"json":n.indexOf(S.xml)>-1?"xml":"text"}switch(t){case"json":if(w.responseText.length)try{E="JSON"in e?JSON.parse(w.responseText):new Function("return ("+w.responseText+")")()}catch(e){throw"Error while parsing JSON body : "+e}break;case"xml":try{e.DOMParser?E=(new DOMParser).parseFromString(w.responseText,"text/xml"):(E=new ActiveXObject("Microsoft.XMLDOM"),E.async="false",E.loadXML(w.responseText))}catch(e){E=void 0}if(!E||!E.documentElement||E.getElementsByTagName("parsererror").length)throw"Invalid XML";break;default:E=w.responseText}}if("status"in w&&!/^2|1223/.test(w.status))throw w.status+" ("+w.statusText+")";A(!0,[w,E])}catch(e){A(!1,[e,w,E])}}},C=function(e){O||(e="string"==typeof e?e:"Connection aborted",A.abort(),A(!1,[new Error(e),w,null]))},I=function(){O||(h.attempts&&++k==h.attempts?C("Timeout ("+p+")"):(w.abort(),P=!1,A.send()))};if(h.async=!("async"in h)||!!h.async,h.cache="cache"in h&&!!h.cache,h.dataType="dataType"in h?h.dataType.toLowerCase():a,h.responseType="responseType"in h?h.responseType.toLowerCase():"auto",h.user=h.user||"",h.password=h.password||"",h.withCredentials=!!h.withCredentials,h.timeout="timeout"in h?parseInt(h.timeout,10):3e4,h.attempts="attempts"in h?parseInt(h.attempts,10):1,T=p.match(/\/\/(.+?)\//),b=T&&!!T[1]&&T[1]!=location.host,"ArrayBuffer"in e&&d instanceof ArrayBuffer?h.dataType="arraybuffer":"Blob"in e&&d instanceof Blob?h.dataType="blob":"Document"in e&&d instanceof Document?h.dataType="document":"FormData"in e&&d instanceof FormData&&(h.dataType="formdata"),null!==d)switch(h.dataType){case"json":d=JSON.stringify(d);break;case"post":case"queryString":d=r(d)}if(h.headers){var q=function(e,t,n){return t+n.toUpperCase()};for(T in h.headers)L[T.replace(/(^|-)([^-])/g,q)]=h.headers[T]}return"Content-Type"in L||"GET"==n||h.dataType in S&&S[h.dataType]&&(L["Content-Type"]=S[h.dataType]),L.Accept||(L.Accept=h.responseType in _?_[h.responseType]:"*/*"),b||"X-Requested-With"in L||(L["X-Requested-With"]="XMLHttpRequest"),h.cache||"Cache-Control"in L||(L["Cache-Control"]="no-cache"),"GET"!=n&&"queryString"!=h.dataType||!d||"string"!=typeof d||(p+=(/\?/.test(p)?"&":"?")+d),h.async&&A.send(),A},d=function(e){var n=[],r=0,i=[];return t(function(t){var o=-1,a=function(e){return function(a,u,s,l){var c=++o;return++r,n.push(p(e,t.base+a,u,s,l).then(function(e,n){i[c]=arguments,--r||t(!0,1==i.length?i[0]:[i])},function(){t(!1,arguments)})),t}};t.get=a("GET"),t.post=a("POST"),t.put=a("PUT"),t.delete=a("DELETE"),t.catch=function(e){return t.then(null,e)},t.complete=function(e){var n=function(){e()};return t.then(n,n)},t.map=function(e,t,n,r,i){return a(e.toUpperCase()).call(this,t,n,r,i)};for(var u in e)u in t||(t[u]=e[u]);return t.send=function(){for(var e=0,r=n.length;e<r;++e)n[e].send();return t},t.abort=function(){for(var e=0,r=n.length;e<r;++e)n[e].abort();return t},t})},h={base:"",get:function(){return d(h).get.apply(this,arguments)},post:function(){return d(h).post.apply(this,arguments)},put:function(){return d(h).put.apply(this,arguments)},delete:function(){return d(h).delete.apply(this,arguments)},map:function(){return d(h).map.apply(this,arguments)},xhr2:f,limit:function(e){return u=e,h},setDefaultOptions:function(e){return i=e,h},setDefaultXdrResponseType:function(e){return o=e.toLowerCase(),h},setDefaultDataType:function(e){return a=e.toLowerCase(),h},getOpenRequests:function(){return s}};return h}()},function(e,t,n){(function(n,r){var i,o,a;!function(n,r){o=[],i=r,void 0!==(a="function"==typeof i?i.apply(t,o):i)&&(e.exports=a)}(0,function(){function e(e){return"function"==typeof e}function t(e){return"object"==typeof e}function i(e){void 0!==n?n(e):void 0!==r&&r.nextTick?r.nextTick(e):setTimeout(e,0)}var o;return function n(r){var a,u=[],s=[],l=function(e,t){return null==a&&null!=e&&(a=e,u=t,s.length&&i(function(){for(var e=0;e<s.length;e++)s[e]()})),a};return l.then=function(l,c){var f=n(r),p=function(){function n(r){var i,a=0;try{if(r&&(t(r)||e(r))&&e(i=r.then)){if(r===f)throw new TypeError;i.call(r,function(){a++||n.apply(o,arguments)},function(e){a++||f(!1,[e])})}else f(!0,arguments)}catch(e){a++||f(!1,[e])}}try{var r=a?l:c;e(r)?n(r.apply(o,u||[])):f(a,u)}catch(e){f(!1,[e])}};return null!=a?i(p):s.push(p),f},r&&(l=r(l)),l}})}).call(t,n(7).setImmediate,n(1))},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(8),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return l[s]=r,u(s),s++}function i(e){delete l[e]}function o(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(c)setTimeout(a,0,e);else{var t=l[e];if(t){c=!0;try{o(t)}finally{i(e),c=!1}}}}if(!e.setImmediate){var u,s=1,l={},c=!1,f=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?function(){u=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),u=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},u=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;u=function(t){var n=f.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){u=function(e){setTimeout(a,0,e)}}(),p.setImmediate=r,p.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(9),n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r,i;!function(n){"use strict";var o=function(e){var t=function(e,t,n){n="function"==typeof n?n():null===n?"":void 0===n?"":n,e[e.length]=encodeURIComponent(t)+"="+encodeURIComponent(n)},n=function(e,r,i){var o,a,u;if("[object Array]"===Object.prototype.toString.call(r))for(o=0,a=r.length;o<a;o++)n(e+"["+("object"==typeof r[o]?o:"")+"]",r[o],i);else if(r&&"[object Object]"===r.toString())for(u in r)r.hasOwnProperty(u)&&(e?n(e+"["+u+"]",r[u],i,t):n(u,r[u],i,t));else if(e)t(i,e,r);else for(u in r)t(i,u,r[u]);return i};return n("",e,[]).join("&").replace(/%20/g,"+")};"object"==typeof e&&"object"==typeof e.exports?e.exports=o:(r=[],void 0!==(i=function(){return o}.apply(t,r))&&(e.exports=i))}()},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,s=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var c in n)o.call(n,c)&&(s[c]=n[c]);if(i){u=i(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(s[u[f]]=n[u[f]])}}return s}},function(e,t,n){"use strict";var r=n(0),i=n(13),o=n(14),a=r.isObject,u=r.LISTENERS,s=r.CAPTURE,l=r.BUBBLE,c=r.ATTRIBUTE,f=r.newNode,p=i.defineCustomEventTarget,d=o.createEventWrapper,h=o.STOP_IMMEDIATE_PROPAGATION_FLAG,v=o.PASSIVE_LISTENER_FLAG,y="undefined"!=typeof window&&void 0!==window.EventTarget,m=e.exports=function e(){if(!(this instanceof e)){if(1===arguments.length&&Array.isArray(arguments[0]))return p(e,arguments[0]);if(arguments.length>0){for(var t=Array(arguments.length),n=0;n<arguments.length;++n)t[n]=arguments[n];return p(e,t)}throw new TypeError("Cannot call a class as a function")}Object.defineProperty(this,u,{value:Object.create(null)})};m.prototype=Object.create((y?window.EventTarget:Object).prototype,{constructor:{value:m,writable:!0,configurable:!0},addEventListener:{value:function(e,t,n){if(null==t)return!1;if("function"!=typeof t&&"object"!=typeof t)throw new TypeError('"listener" is not an object.');var r=a(n)?Boolean(n.capture):Boolean(n),i=r?s:l,o=this[u][e];if(null==o)return this[u][e]=f(t,i,n),!0;for(var c=null;null!=o;){if(o.listener===t&&o.kind===i)return!1;c=o,o=o.next}return c.next=f(t,i,n),!0},configurable:!0,writable:!0},removeEventListener:{value:function(e,t,n){if(null==t)return!1;for(var r=a(n)?Boolean(n.capture):Boolean(n),i=r?s:l,o=null,c=this[u][e];null!=c;){if(c.listener===t&&c.kind===i)return null==o?this[u][e]=c.next:o.next=c.next,!0;o=c,c=c.next}return!1},configurable:!0,writable:!0},dispatchEvent:{value:function(e){var t=e.type,n=this[u][t];if(null==n)return!0;for(var r=d(e,this),i=null;null!=n&&(n.once?null==i?this[u][t]=n.next:i.next=n.next:i=n,r[v]=n.passive,"function"==typeof n.listener?n.listener.call(this,r):n.kind!==c&&"function"==typeof n.listener.handleEvent&&n.listener.handleEvent(r),!r[h]);)n=n.next;return!r.defaultPrevented},configurable:!0,writable:!0}})},function(e,t,n){"use strict";function r(e,t){for(var n=e[a][t];null!=n;){if(n.kind===u)return n.listener;n=n.next}return null}function i(e,t,n){"function"!=typeof n&&"object"!=typeof n&&(n=null);for(var r=null,i=e[a][t];null!=i;)i.kind===u?null==r?e[a][t]=i.next:r.next=i.next:r=i,i=i.next;null!=n&&(null==r?e[a][t]=s(n,u):r.next=s(n,u))}var o=n(0),a=o.LISTENERS,u=o.ATTRIBUTE,s=o.newNode;e.exports.defineCustomEventTarget=function(e,t){function n(){e.call(this)}var o={constructor:{value:n,configurable:!0,writable:!0}};return t.forEach(function(e){o["on"+e]={get:function(){return r(this,e)},set:function(t){i(this,e,t)},configurable:!0,enumerable:!0}}),n.prototype=Object.create(e.prototype,o),n}},function(e,t,n){"use strict";var r=n(0).createUniqueKey,i=r("stop_immediate_propagation_flag"),o=r("canceled_flag"),a=r("passive_listener_flag"),u=r("original_event"),s=Object.freeze({stopPropagation:Object.freeze({value:function(){var e=this[u];"function"==typeof e.stopPropagation&&e.stopPropagation()},writable:!0,configurable:!0}),stopImmediatePropagation:Object.freeze({value:function(){this[i]=!0;var e=this[u];"function"==typeof e.stopImmediatePropagation&&e.stopImmediatePropagation()},writable:!0,configurable:!0}),preventDefault:Object.freeze({value:function(){if(!this[a]){!0===this.cancelable&&(this[o]=!0);var e=this[u];"function"==typeof e.preventDefault&&e.preventDefault()}},writable:!0,configurable:!0}),defaultPrevented:Object.freeze({get:function(){return this[o]},enumerable:!0,configurable:!0})});e.exports.STOP_IMMEDIATE_PROPAGATION_FLAG=i,e.exports.PASSIVE_LISTENER_FLAG=a,e.exports.createEventWrapper=function(e,t){var n="number"==typeof e.timeStamp?e.timeStamp:Date.now(),r={type:{value:e.type,enumerable:!0},target:{value:t,enumerable:!0},currentTarget:{value:t,enumerable:!0},eventPhase:{value:2,enumerable:!0},bubbles:{value:Boolean(e.bubbles),enumerable:!0},cancelable:{value:Boolean(e.cancelable),enumerable:!0},timeStamp:{value:n,enumerable:!0},isTrusted:{value:!1,enumerable:!0}};return r[i]={value:!1,writable:!0},r[o]={value:!1,writable:!0},r[a]={value:!1,writable:!0},r[u]={value:e},void 0!==e.detail&&(r.detail={value:e.detail,enumerable:!0}),Object.create(Object.create(e,s),r)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.selector=".ajax",this.allowedOrigins=[],this.naja=t;var n=this.handleUI.bind(this);t.addEventListener("load",this.bindUI.bind(this,n));var i=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");this.allowedOrigins.push(i)}return i(e,[{key:"bindUI",value:function(e){for(var t=["a"+this.selector,'input[type="submit"]'+this.selector,'input[type="image"]'+this.selector,'button[type="submit"]'+this.selector,"form"+this.selector+' input[type="submit"]',"form"+this.selector+' input[type="image"]',"form"+this.selector+' button[type="submit"]'].join(", "),n=document.querySelectorAll(t),r=0;r<n.length;r++){var i=n.item(r);i.removeEventListener("click",e),i.addEventListener("click",e)}for(var o=document.querySelectorAll("form"+this.selector),a=0;a<o.length;a++){var u=o.item(a);u.removeEventListener("submit",e),u.addEventListener("submit",e)}}},{key:"handleUI",value:function(e){if(!(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey||e.button)){var t=e.currentTarget,n={},r=void 0,i=void 0,o=void 0;if(!this.naja.fireEvent("interaction",{element:t,originalEvent:e,options:n}))return void e.preventDefault();if("submit"===e.type)r=t.method?t.method.toUpperCase():"GET",i=t.action||window.location.pathname+window.location.search,o=new FormData(t);else if("click"===e.type)if("a"===t.tagName.toLowerCase())r="GET",i=t.href,o=null;else if("input"===t.tagName.toLowerCase()||"button"===t.tagName.toLowerCase()){var a=t.form;if(r=a.method?a.method.toUpperCase():"GET",i=a.action||window.location.pathname+window.location.search,o=new FormData(a),"submit"===t.type||"button"===t.tagName.toLowerCase())o.append(t.name,t.value||"");else if("image"===t.type){var u=t.getBoundingClientRect();o.append(t.name+".x",Math.max(0,Math.floor(e.pageX-u.left))),o.append(t.name+".y",Math.max(0,Math.floor(e.pageY-u.top)))}}/^(?!https?)[^:\/?#]+:/i.test(i)||/^https?/i.test(i)&&!this.allowedOrigins.some(function(e){return new RegExp("^"+e,"i").test(i)})||(e.preventDefault(),this.naja.makeRequest(r,i,o,n))}}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),t.addEventListener("load",e.initForms),t.addEventListener("interaction",e.processForm)}return i(e,null,[{key:"initForms",value:function(){if(window.Nette)for(var e=window.document.querySelectorAll("form"),t=0;t<e.length;t++)window.Nette.initForm(e.item(t))}},{key:"processForm",value:function(e){var t=e.element,n=e.originalEvent;t.form&&(t.form["nette-submittedBy"]=t),"form"!==t.tagName&&!t.form||!window.Nette||window.Nette.validateForm(t)||(n.stopImmediatePropagation(),n.preventDefault(),e.preventDefault())}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){var n=this;r(this,e),this.naja=t,t.addEventListener("success",function(e){var t=e.response;t.redirect&&(n.makeRedirect(t.redirect,t.forceRedirect),e.stopImmediatePropagation())}),this.locationAdapter={assign:function(e){return window.location.assign(e)}}}return i(e,[{key:"makeRedirect",value:function(e,t){var n=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),r=/^https?/i.test(e)&&!new RegExp("^"+n,"i").test(e);t||r?this.locationAdapter.assign(e):this.naja.makeRequest("GET",e)}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){var n=this;r(this,e),t.addEventListener("success",function(e){var t=e.response;t.snippets&&n.updateSnippets(t.snippets)})}return i(e,[{key:"updateSnippets",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object.keys(e).forEach(function(r){var i=document.getElementById(r);i&&t.updateSnippet(i,e[r],n)})}},{key:"updateSnippet",value:function(e,t,n){"title"===e.tagName.toLowerCase()?document.title=t:!e.getAttribute("data-naja-snippet-prepend")&&!e.getAttribute("data-ajax-prepend")||n?!e.getAttribute("data-naja-snippet-append")&&!e.getAttribute("data-ajax-append")||n?e.innerHTML=t:e.innerHTML=e.innerHTML+t:e.innerHTML=t+e.innerHTML}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.mode=!0,this.popped=!1,this.href=null,this.initialUrl=null,this.initialState=null,this.naja=t,t.addEventListener("init",this.initialize.bind(this)),t.addEventListener("interaction",this.configureMode.bind(this)),t.addEventListener("before",this.configureMode.bind(this)),t.addEventListener("before",this.saveUrl.bind(this)),t.addEventListener("success",this.pushNewState.bind(this)),this.popStateHandler=this.handlePopState.bind(this),this.historyAdapter={replaceState:function(e,t,n){return window.history.replaceState(e,t,n)},pushState:function(e,t,n){return window.history.pushState(e,t,n)}}}return i(e,[{key:"initialize",value:function(){this.popped=!!window.history.state,this.initialUrl=window.location.href,window.addEventListener("popstate",this.popStateHandler),this.historyAdapter.replaceState(this.initialState={href:window.location.href,title:window.document.title,ui:this.findSnippets()},window.document.title,window.location.href)}},{key:"handlePopState",value:function(e){var t=e.state||this.initialState,n=!this.popped&&this.initialUrl===t.href;this.popped=!0,n||t.ui&&(this.handleSnippets(t.ui),this.handleTitle(t.title))}},{key:"saveUrl",value:function(e){var t=e.url;this.href=t}},{key:"configureMode",value:function(e){var t=e.element,n=e.options;this.mode=t?this.constructor.normalizeMode(t.getAttribute("data-naja-history")):this.constructor.normalizeMode(n.history),n.history=this.mode}},{key:"pushNewState",value:function(e){var t=e.response;if(!1!==this.mode){t.postGet&&t.url&&(this.href=t.url);var n=t.replaceHistory||"replace"===this.mode?"replaceState":"pushState";this.historyAdapter[n]({href:this.href,title:window.document.title,ui:this.findSnippets()},window.document.title,this.href),this.href=null,this.popped=!0}}},{key:"findSnippets",value:function(){for(var e={},t=window.document.querySelectorAll('[id^="snippet-"]'),n=0;n<t.length;n++){var r=t.item(n);r.getAttribute("data-naja-history-nocache")||r.getAttribute("data-history-nocache")||(e[r.id]=r.innerHTML)}return e}},{key:"handleSnippets",value:function(e){this.naja.snippetHandler.updateSnippets(e,!0),this.naja.scriptLoader.loadScripts(e),this.naja.load()}},{key:"handleTitle",value:function(e){window.document.title=e}}],[{key:"normalizeMode",value:function(e){return"off"!==e&&!1!==e&&("replace"!==e||"replace")}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){var n=this;r(this,e),t.addEventListener("success",function(e){var t=e.response;t.snippets&&n.loadScripts(t.snippets)})}return i(e,[{key:"loadScripts",value:function(e){Object.keys(e).forEach(function(t){var n=e[t];if(/<script/i.test(n)){var r=window.document.createElement("div");r.innerHTML=n;for(var i=r.querySelectorAll("script"),o=0;o<i.length;o++){var a=i.item(o),u=window.document.createElement("script");if(u.innerHTML=a.innerHTML,a.hasAttributes())for(var s=a.attributes,l=0;l<s.length;l++){var c=s[l].name;u[c]=s[l].value}window.document.head.appendChild(u).parentNode.removeChild(u)}}})}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.abortable=!0,this.xhr=null,t.addEventListener("init",this.initialize.bind(this)),t.addEventListener("interaction",this.checkAbortable.bind(this)),t.addEventListener("before",this.checkAbortable.bind(this)),t.addEventListener("start",this.saveXhr.bind(this)),t.addEventListener("complete",this.clearXhr.bind(this))}return i(e,[{key:"initialize",value:function(){var e=this;document.addEventListener("keydown",function(t){e.xhr&&("key"in t?"Escape"===t.key:27===t.keyCode)&&!(t.ctrlKey||t.shiftKey||t.altKey||t.metaKey)&&e.abortable&&(e.xhr.abort(),e.xhr=null)})}},{key:"checkAbortable",value:function(e){var t=e.element,n=e.options;this.abortable=t?"off"!==t.getAttribute("data-naja-abort"):!1!==n.abort,n.abort=this.abortable}},{key:"saveXhr",value:function(e){var t=e.xhr;this.xhr=t}},{key:"clearXhr",value:function(){this.xhr=null,this.abortable=!0}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.xhr=null,t.addEventListener("interaction",this.checkUniqueness.bind(this)),t.addEventListener("before",this.abortPreviousRequest.bind(this)),t.addEventListener("complete",this.clearRequest.bind(this))}return i(e,[{key:"checkUniqueness",value:function(e){var t=e.element;e.options.unique="off"!==t.getAttribute("data-naja-unique")}},{key:"abortPreviousRequest",value:function(e){var t=e.xhr,n=e.options;this.xhr&&!1!==n.unique&&this.xhr.abort(),this.xhr=t}},{key:"clearRequest",value:function(){this.xhr=null}}]),e}();t.default=o}]).default});
//# sourceMappingURL=Naja.js.map