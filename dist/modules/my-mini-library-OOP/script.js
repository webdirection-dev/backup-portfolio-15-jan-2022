!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=72)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(33))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(12),o={}.hasOwnProperty;t.exports=function(t,e){return o.call(r(t),e)}},function(t,e,n){var r=n(4),o=n(13),i=n(20);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(0),o=n(19).f,i=n(3),c=n(24),a=n(14),u=n(40),s=n(49);t.exports=function(t,e){var n,l,f,p,d,v=t.target,h=t.global,g=t.stat;if(n=h?r:g?r[v]||a(v,{}):(r[v]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(d=o(n,l))&&d.value:n[l],!s(h?l:v+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),c(n,l,p,t)}}},function(t,e,n){var r=n(21),o=n(7);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4),o=n(23),i=n(8),c=n(22),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(3);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),o=n(14),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(39),o=n(15);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.11.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(9),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(10),o=n(29);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){var r=n(4),o=n(34),i=n(20),c=n(11),a=n(22),u=n(2),s=n(23),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=a(e,!0),s)try{return l(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(1),o=n(6),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(4),o=n(1),i=n(35);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(3),i=n(2),c=n(14),a=n(25),u=n(36),s=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,a){var u,s=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(u=l(n)).source||(u.source=f.join("string"==typeof e?e:""))),t!==r?(s?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},function(t,e,n){var r=n(15),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(42),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){"use strict";var r,o,i=n(50),c=n(51),a=n(16),u=RegExp.prototype.exec,s=a("native-string-replace",String.prototype.replace),l=u,f=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),p=c.UNSUPPORTED_Y||c.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(f||d||p)&&(l=function(t){var e,n,r,o,c=this,a=p&&c.sticky,l=i.call(c),v=c.source,h=0,g=t;return a&&(-1===(l=l.replace("y","")).indexOf("g")&&(l+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",l)),d&&(n=new RegExp("^"+v+"$(?!\\s)",l)),f&&(e=c.lastIndex),r=u.call(a?n:c,g),a?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:f&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),d&&r&&r.length>1&&s.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=l},function(t,e,n){var r=n(0),o=n(16),i=n(2),c=n(26),a=n(31),u=n(57),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||c;t.exports=function(t){return i(s,t)&&(a||"string"==typeof s[t])||(a&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},function(t,e,n){var r=n(54),o=n(55),i=n(1);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},function(t,e,n){"use strict";var r=n(63).forEach,o=n(68)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r,o,i,c=n(37),a=n(0),u=n(5),s=n(3),l=n(2),f=n(15),p=n(38),d=n(27),v=a.WeakMap;if(c){var h=f.state||(f.state=new v),g=h.get,y=h.has,x=h.set;r=function(t,e){if(y.call(h,t))throw new TypeError("Object already initialized");return e.facade=t,x.call(h,t,e),e},o=function(t){return g.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var b=p("state");d[b]=!0,r=function(t,e){if(l(t,b))throw new TypeError("Object already initialized");return e.facade=t,s(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(25),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(16),o=n(26),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(2),o=n(41),i=n(19),c=n(13);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,s=0;s<n.length;s++){var l=n[s];r(t,l)||a(t,l,u(e,l))}}},function(t,e,n){var r=n(28),o=n(43),i=n(48),c=n(8);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(44),o=n(47).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(2),o=n(11),i=n(45).indexOf,c=n(27);t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(c,n)&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(11),o=n(17),i=n(46),c=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),l=i(c,s);if(t&&n!=n){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(9),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(8);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(1);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){"use strict";var r=n(53),o=n(8),i=n(17),c=n(9),a=n(7),u=n(58),s=n(60),l=n(61),f=Math.max,p=Math.min;r("replace",2,(function(t,e,n,r){var d=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,h=d?"$":"$0";return[function(n,r){var o=a(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!d&&v||"string"==typeof r&&-1===r.indexOf(h)){var a=n(e,t,this,r);if(a.done)return a.value}var g=o(t),y=String(this),x="function"==typeof r;x||(r=String(r));var b=g.global;if(b){var m=g.unicode;g.lastIndex=0}for(var S=[];;){var E=l(g,y);if(null===E)break;if(S.push(E),!b)break;""===String(E[0])&&(g.lastIndex=u(y,i(g.lastIndex),m))}for(var w,L="",O=0,P=0;P<S.length;P++){E=S[P];for(var T=String(E[0]),j=f(p(c(E.index),y.length),0),A=[],k=1;k<E.length;k++)A.push(void 0===(w=E[k])?w:String(w));var C=E.groups;if(x){var _=[T].concat(A,j,y);void 0!==C&&_.push(C);var I=String(r.apply(void 0,_))}else I=s(T,y,j,A,C,r);j>=O&&(L+=y.slice(O,j)+I,O=j+T.length)}return L+y.slice(O)}]}))},function(t,e,n){"use strict";n(18);var r=n(24),o=n(1),i=n(30),c=n(3),a=i("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),l=i("replace"),f=!!/./[l]&&""===/./[l]("a","$0"),p=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var d=i(t),v=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=v&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!v||!h||"replace"===t&&(!u||!s||f)||"split"===t&&!p){var g=/./[d],y=n(d,""[t],(function(t,e,n,r,o){return e.exec===RegExp.prototype.exec?v&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=y[0],b=y[1];r(String.prototype,t,x),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}l&&c(RegExp.prototype[d],"sham",!0)}},function(t,e,n){var r=n(6),o=n(0);t.exports="process"==r(o.process)},function(t,e,n){var r,o,i=n(0),c=n(56),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(28);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(31);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){"use strict";var r=n(59).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(9),o=n(7),i=function(t){return function(e,n){var i,c,a=String(o(e)),u=r(n),s=a.length;return u<0||u>=s?t?"":void 0:(i=a.charCodeAt(u))<55296||i>56319||u+1===s||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var r=n(12),o=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,u,s,l){var f=n+t.length,p=u.length,d=a;return void 0!==s&&(s=r(s),d=c),i.call(l,d,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":c=s[i.slice(1,-1)];break;default:var a=+i;if(0===a)return r;if(a>p){var l=o(a/10);return 0===l?r:l<=p?void 0===u[l-1]?i.charAt(1):u[l-1]+i.charAt(1):r}c=u[a-1]}return void 0===c?"":c}))}},function(t,e,n){var r=n(6),o=n(29);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){"use strict";var r=n(10),o=n(32);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(64),o=n(21),i=n(12),c=n(17),a=n(66),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,f=6==t,p=7==t,d=5==t||f;return function(v,h,g,y){for(var x,b,m=i(v),S=o(m),E=r(h,g,3),w=c(S.length),L=0,O=y||a,P=e?O(v,w):n||p?O(v,0):void 0;w>L;L++)if((d||L in S)&&(b=E(x=S[L],L,m),t))if(e)P[L]=b;else if(b)switch(t){case 3:return!0;case 5:return x;case 6:return L;case 2:u.call(P,x)}else switch(t){case 4:return!1;case 7:u.call(P,x)}return f?-1:s||l?l:P}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},function(t,e,n){var r=n(65);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(5),o=n(67),i=n(30)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(6);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(0),o=n(70),i=n(32),c=n(3);for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(10),o=n(4);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:n(13).f})},function(t,e,n){"use strict";n.r(e);n(18),n(52),n(62),n(69),n(71);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.body=document.querySelector("body"),this.btnBlock=document.createElement("div"),this.colorPicker=document.createElement("input"),this.clear=document.createElement("div"),this.btnBlock.addEventListener("click",(function(t){return e.onScaleChange(t)})),this.colorPicker.addEventListener("input",(function(t){return e.onColorChange(t)})),this.clear.addEventListener("click",(function(){return e.reset()})),this.scale=localStorage.getItem("scale")||1,this.color=localStorage.getItem("color")||"#ffffff"}var e,n,o;return e=t,(n=[{key:"onScaleChange",value:function(t){var e=this;t&&(this.scale=+t.target.value.replace(/x/g,"")),function t(n){n.childNodes.forEach((function(n){if("#text"===n.nodeName&&n.nodeValue.replace(/\s+/g,"").length>0)if(n.parentNode.getAttribute("data-fs"))n.parentNode.style.fontSize=n.parentNode.getAttribute("data-fs")*e.scale+"px";else{var r=window.getComputedStyle(n.parentNode,null).fontSize;n.parentNode.setAttribute("data-fs",+r.replace(/px/g,"")),n.parentNode.style.fontSize=n.parentNode.getAttribute("data-fs")*e.scale+"px"}else t(n)}))}(this.body),localStorage.setItem("scale",this.scale)}},{key:"onColorChange",value:function(t){this.body.style.backgroundColor=t.target.value,localStorage.setItem("color",t.target.value)}},{key:"injectStyle",value:function(){var t=document.createElement("style");t.innerHTML="\n            .panel {\n                display: flex;\n                justify-content: space-around;\n                align-items: center;\n                position: fixed;\n                top: 10px;\n                right: 0;\n                border: 1px solid rgba(0,0,0, .2);\n                box-shadow: 0 0 20px rgba(0,0,0, .5);\n                width: 300px;\n                height: 60px;\n                background-color: #fff;\n            \n            }\n            \n            .scale {\n                display: flex;\n                justify-content: space-around;\n                align-items: center;\n                width: 100px;\n                height: 40px;\n            }\n            \n            .scale_btn {\n                display: block;\n                width: 40px;\n                height: 40px;\n                border: 1px solid rgba(0,0,0, .2);\n                border-radius: 4px;\n                font-size: 18px;\n            }\n            \n            .color {\n                width: 40px;\n                height: 40px;\n            }\n            \n            .clear {\n                font-size: 20px;\n                cursor: pointer;\n            }\n        ",document.querySelector("head").appendChild(t)}},{key:"setBgColor",value:function(){this.body.style.backgroundColor=this.color,this.colorPicker.value=this.color}},{key:"reset",value:function(){localStorage.clear(),this.scale=1,this.color="#ffffff",this.setBgColor(),this.onScaleChange()}},{key:"render",value:function(){this.injectStyle(),this.setBgColor(),this.onScaleChange();var t=document.createElement("input"),e=document.createElement("input"),n=document.createElement("div");this.clear.innerHTML="&times",this.btnBlock.classList.add("scale"),this.colorPicker.classList.add("color"),this.clear.classList.add("clear"),n.classList.add("panel"),t.classList.add("scale_btn"),e.classList.add("scale_btn"),this.colorPicker.setAttribute("type","color"),this.colorPicker.setAttribute("value","#ffffff"),t.setAttribute("type","button"),t.setAttribute("value","1x"),e.setAttribute("type","button"),e.setAttribute("value","1.5x"),document.querySelector("body").append(n),n.append(this.btnBlock,this.colorPicker,this.clear),this.btnBlock.append(t,e)}}])&&r(e.prototype,n),o&&r(e,o),t}();window.addEventListener("DOMContentLoaded",(function(){(new o).render()}))}]);