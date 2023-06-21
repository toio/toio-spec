"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3015],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=o(n),N=r,g=k["".concat(d,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},9866:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>o,toc:()=>k});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={id:"ble_motor",title:"\u30e2\u30fc\u30bf\u30fc",sidebar_label:"\u30e2\u30fc\u30bf\u30fc",original_id:"ble_motor"},d=void 0,o={unversionedId:"ble_motor",id:"version-2.0.0/ble_motor",title:"\u30e2\u30fc\u30bf\u30fc",description:"Cube Direction",source:"@site/versioned_docs/version-2.0.0/motor.md",sourceDirName:".",slug:"/ble_motor",permalink:"/toio-spec/en/docs/2.0.0/ble_motor",draft:!1,tags:[],version:"2.0.0",frontMatter:{id:"ble_motor",title:"\u30e2\u30fc\u30bf\u30fc",sidebar_label:"\u30e2\u30fc\u30bf\u30fc",original_id:"ble_motor"},sidebar:"version-2.0.0/docs",previous:{title:"\u30d0\u30c3\u30c6\u30ea\u30fc",permalink:"/toio-spec/en/docs/2.0.0/ble_battery"},next:{title:"\u30e9\u30f3\u30d7",permalink:"/toio-spec/en/docs/2.0.0/ble_light"}},m={},k=[{value:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c",id:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c",level:2},{value:"\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1",id:"\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1",level:3},{value:"\u5236\u5fa1\u3059\u308b\u30e2\u30fc\u30bf\u30fc\u306e ID",id:"\u5236\u5fa1\u3059\u308b\u30e2\u30fc\u30bf\u30fc\u306e-id",level:4},{value:"\u30e2\u30fc\u30bf\u30fc\u306e\u56de\u8ee2\u65b9\u5411",id:"\u30e2\u30fc\u30bf\u30fc\u306e\u56de\u8ee2\u65b9\u5411",level:4},{value:"\u30e2\u30fc\u30bf\u30fc\u306e\u901f\u5ea6\u6307\u793a\u5024",id:"\u30e2\u30fc\u30bf\u30fc\u306e\u901f\u5ea6\u6307\u793a\u5024",level:4},{value:"\u6642\u9593\u6307\u5b9a\u4ed8\u304d\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1",id:"\u6642\u9593\u6307\u5b9a\u4ed8\u304d\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1",level:3},{value:"\u30e2\u30fc\u30bf\u30fc\u306e\u5236\u5fa1\u6642\u9593",id:"\u30e2\u30fc\u30bf\u30fc\u306e\u5236\u5fa1\u6642\u9593",level:4}],u={toc:k},N="wrapper";function g(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)(N,(0,a.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Cube Direction",src:n(1932).Z,width:"563",height:"185"})),(0,l.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306f 2 \u3064\u306e\u30e2\u30fc\u30bf\u30fc\u3092\u6301\u3061\u3001\u305d\u308c\u305e\u308c\u304c\u5de6\u53f3\u306e\u8eca\u8f2a\u306b\u3064\u306a\u304c\u3063\u3066\u3044\u307e\u3059\uff08\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/2.0.0/hardware_components"},"\u5404\u90e8\u306e\u540d\u524d"),"\uff09\u3002\n\u3053\u308c\u3089\u306e\u30e2\u30fc\u30bf\u30fc\u306f\u4ee5\u4e0b\u306e\u7279\u6027\uff08characteristic\uff09\u3092\u4f7f\u3046\u3053\u3068\u3067\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5024"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Characteristic UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"10B20102-5B3B-4571-9508-CF3EFCD7BBAE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#%E6%9B%B8%E3%81%8D%E8%BE%BC%E3%81%BF%E6%93%8D%E4%BD%9C"},"Write without response"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Descriptor"),(0,l.kt)("td",{parentName:"tr",align:null},"Motor Control")))),(0,l.kt)("h2",{id:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c"},"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c"),(0,l.kt)("h3",{id:"\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1"},"\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306b\u793a\u3059\u69cb\u6210\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u30e2\u30fc\u30bf\u30fc\u3092\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002 \u6b21\u306e\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u304c\u884c\u308f\u308c\u308b\u307e\u3067\u3001\u30e2\u30fc\u30bf\u30fc\u306f\u6307\u5b9a\u3057\u305f\u901f\u5ea6\u3067\u52d5\u304d\u3065\u3065\u3051\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u306e\u7a2e\u985e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x01")),"\uff08\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e2\u30fc\u30bf\u30fc\u306e ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x01"),"\uff08\u5de6\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e2\u30fc\u30bf\u30fc\u306e\u56de\u8ee2\u65b9\u5411"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x01"),"\uff08\u524d\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e2\u30fc\u30bf\u30fc\u306e\u901f\u5ea6\u6307\u793a\u5024"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x64"),"\uff08100\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e2\u30fc\u30bf\u30fc\u306e ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x02"),"\uff08\u53f3\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e2\u30fc\u30bf\u30fc\u306e\u56de\u8ee2\u65b9\u5411"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x02"),"\uff08\u5f8c\u308d\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e2\u30fc\u30bf\u30fc\u306e\u901f\u5ea6\u6307\u793a\u5024"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x14"),"\uff0820\uff09")))),(0,l.kt)("h4",{id:"\u5236\u5fa1\u3059\u308b\u30e2\u30fc\u30bf\u30fc\u306e-id"},"\u5236\u5fa1\u3059\u308b\u30e2\u30fc\u30bf\u30fc\u306e ID"),(0,l.kt)("p",null,"\u5236\u5fa1\u3059\u308b\u30e2\u30fc\u30bf\u30fc\u306e ID \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u5de6\u306e\u30e2\u30fc\u30bf\u30fc\u306e ID \u304c",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\u3067\u53f3\u306e\u30e2\u30fc\u30bf\u30fc\u306e ID \u304c",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"\u3067\u3059\u3002\n\u30e2\u30fc\u30bf\u30fc\u306e ID \u3092\u6307\u5b9a\u3059\u308b\u5834\u6240\u306f\u4e8c\u7b87\u6240\u3042\u308a\u307e\u3059\u304c\u3001\u4e21\u65b9\u3067\u540c\u3058 ID \u3092\u6307\u5b9a\u3059\u308b\u3068\u30a8\u30e9\u30fc\u306b\u306a\u308a\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"\u30e2\u30fc\u30bf\u30fc\u306e\u56de\u8ee2\u65b9\u5411"},"\u30e2\u30fc\u30bf\u30fc\u306e\u56de\u8ee2\u65b9\u5411"),(0,l.kt)("p",null,"\u76f4\u524d\u3067\u6307\u5b9a\u3057\u305f ID \u306e\u30e2\u30fc\u30bf\u30fc\u306b\u5bfe\u3057\u3066\u56de\u8ee2\u65b9\u5411\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u30ad\u30e5\u30fc\u30d6\u306e\u524d\u9032\u3059\u308b\u65b9\u5411\u304c",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\u3067\u5f8c\u9000\u3059\u308b\u65b9\u5411\u304c",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"\u3067\u3059\u3002"),(0,l.kt)("h4",{id:"\u30e2\u30fc\u30bf\u30fc\u306e\u901f\u5ea6\u6307\u793a\u5024"},"\u30e2\u30fc\u30bf\u30fc\u306e\u901f\u5ea6\u6307\u793a\u5024"),(0,l.kt)("p",null,"\u76f4\u524d\u3067\u6307\u5b9a\u3057\u305f ID \u306e\u30e2\u30fc\u30bf\u30fc\u306b\u5bfe\u3057\u3066\u56de\u8ee2\u306e\u901f\u5ea6\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u30e2\u30fc\u30bf\u30fc\u306e\u901f\u5ea6\u6307\u793a\u5024\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\u4ee5\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"255"),"\u4ee5\u4e0b\u306e\u7bc4\u56f2\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u304c\u3001\u30e2\u30fc\u30bf\u30fc\u306e\u901f\u5ea6\u6307\u793a\u5024\u3068\u5b9f\u969b\u306e\u30bf\u30a4\u30e4\u306e\u56de\u8ee2\u901f\u5ea6\u306e\u95a2\u4fc2\u306f\u4ee5\u4e0b\u306e\u30b0\u30e9\u30d5\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Input Speed and Wheel Speed",src:n(1995).Z,width:"555",height:"410"})),(0,l.kt)("h3",{id:"\u6642\u9593\u6307\u5b9a\u4ed8\u304d\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1"},"\u6642\u9593\u6307\u5b9a\u4ed8\u304d\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306b\u793a\u3059\u69cb\u6210\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u52d5\u304b\u3059\u6642\u9593\u3092\u6307\u5b9a\u3057\u3066\u30e2\u30fc\u30bf\u30fc\u3092\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002\n\u6307\u5b9a\u3057\u305f\u6642\u9593\u3092\u7d4c\u904e\u3059\u308b\u3068\u30e2\u30fc\u30bf\u30fc\u306f\u505c\u6b62\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u306e\u7a2e\u985e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x02")),"\uff08\u6642\u9593\u6307\u5b9a\u4ed8\u304d\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e2\u30fc\u30bf\u30fc\u306e ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x01"),"\uff08\u5de6\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e2\u30fc\u30bf\u30fc\u306e\u56de\u8ee2\u65b9\u5411"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x01"),"\uff08\u524d\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e2\u30fc\u30bf\u30fc\u306e\u901f\u5ea6\u6307\u793a\u5024"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x64"),"\uff08100\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e2\u30fc\u30bf\u30fc\u306e ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x02"),"\uff08\u53f3\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e2\u30fc\u30bf\u30fc\u306e\u56de\u8ee2\u65b9\u5411"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x02"),"\uff08\u5f8c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e2\u30fc\u30bf\u30fc\u306e\u901f\u5ea6\u6307\u793a\u5024"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x14"),"\uff0820\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30e2\u30fc\u30bf\u30fc\u306e\u5236\u5fa1\u6642\u9593"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x0A"),"\uff08100 \u30df\u30ea\u79d2\uff09")))),(0,l.kt)("h4",{id:"\u30e2\u30fc\u30bf\u30fc\u306e\u5236\u5fa1\u6642\u9593"},"\u30e2\u30fc\u30bf\u30fc\u306e\u5236\u5fa1\u6642\u9593"),(0,l.kt)("p",null,"\u30e2\u30fc\u30bf\u30fc\u3092\u52d5\u304b\u3059\u6642\u9593\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\u4ee5\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"255"),"\u4ee5\u4e0b\u306e\u7bc4\u56f2\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\u306f\u300c\u6642\u9593\u5236\u9650\u7121\u3057\u300d\u3092\u610f\u5473\u3057\u3001",(0,l.kt)("a",{parentName:"p",href:"#%E3%83%A2%E3%83%BC%E3%82%BF%E3%83%BC%E5%88%B6%E5%BE%A1"},"\u30e2\u30fc\u30bf\u30fc\u5236\u5fa1"),"\u3068\u540c\u69d8\u306b\u6b21\u306e\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u304c\u884c\u308f\u308c\u308b\u307e\u3067\u3001\u30e2\u30fc\u30bf\u30fc\u306f\u6307\u5b9a\u3057\u305f\u901f\u5ea6\u3067\u52d5\u304d\u3065\u3065\u3051\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\u4ee5\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"255"),"\u4ee5\u4e0b\u306e\u7bc4\u56f2\u3067\u306f x10 \u30df\u30ea\u79d2\u30e2\u30fc\u30bf\u30fc\u306f\u52d5\u3044\u305f\u3042\u3068\u505c\u6b62\u3057\u307e\u3059\u3002"))}g.isMDXComponent=!0},1932:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/motor_cube_direction-f9ff866351a3f642a12ca99d7d15b302.svg"},1995:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/motor_wheel_speed_v2.0.0-2ce8f77577b5f709b9fc9de5351b9fe6.svg"}}]);