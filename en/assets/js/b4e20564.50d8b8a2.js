"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1202],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),k=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=k(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=k(n),o=l,g=u["".concat(d,".").concat(o)]||u[o]||N[o]||r;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=o;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:l,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},3116:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>k,toc:()=>u});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],p={id:"ble_light",title:"\u30e9\u30f3\u30d7",sidebar_label:"\u30e9\u30f3\u30d7",original_id:"ble_light"},d=void 0,k={unversionedId:"ble_light",id:"version-2.2.0/ble_light",title:"\u30e9\u30f3\u30d7",description:"Light of cube",source:"@site/versioned_docs/version-2.2.0/light.md",sourceDirName:".",slug:"/ble_light",permalink:"/toio-spec/en/docs/2.2.0/ble_light",draft:!1,tags:[],version:"2.2.0",frontMatter:{id:"ble_light",title:"\u30e9\u30f3\u30d7",sidebar_label:"\u30e9\u30f3\u30d7",original_id:"ble_light"},sidebar:"version-2.2.0/docs",previous:{title:"\ud83d\udd04 \u30e2\u30fc\u30bf\u30fc",permalink:"/toio-spec/en/docs/2.2.0/ble_motor"},next:{title:"\u30b5\u30a6\u30f3\u30c9",permalink:"/toio-spec/en/docs/2.2.0/ble_sound"}},m={},u=[{value:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c",id:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c",level:2},{value:"\u70b9\u706f\u30fb\u6d88\u706f",id:"\u70b9\u706f\u6d88\u706f",level:3},{value:"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593",id:"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593",level:4},{value:"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e\u6570\u30fb\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e ID",id:"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e\u6570\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e-id",level:4},{value:"\u30e9\u30f3\u30d7\u306e Red/Green/Blue \u306e\u5024",id:"\u30e9\u30f3\u30d7\u306e-redgreenblue-\u306e\u5024",level:4},{value:"\u9023\u7d9a\u7684\u306a\u70b9\u706f\u30fb\u6d88\u706f",id:"\u9023\u7d9a\u7684\u306a\u70b9\u706f\u6d88\u706f",level:3},{value:"\u30c7\u30fc\u30bf\u69cb\u9020\u3068 Operation",id:"\u30c7\u30fc\u30bf\u69cb\u9020\u3068-operation",level:4},{value:"\u7e70\u308a\u8fd4\u3057\u56de\u6570",id:"\u7e70\u308a\u8fd4\u3057\u56de\u6570",level:4},{value:"Operation \u306e\u6570",id:"operation-\u306e\u6570",level:4},{value:"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593",id:"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593-1",level:4},{value:"\u5168\u3066\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f",id:"\u5168\u3066\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f",level:3},{value:"\u7279\u5b9a\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f",id:"\u7279\u5b9a\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f",level:3}],N={toc:u},o="wrapper";function g(t){var e=t.components,p=(0,l.Z)(t,i);return(0,r.kt)(o,(0,a.Z)({},N,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Light of cube",src:n(130).Z,width:"555",height:"174"})),(0,r.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306f\u5e95\u9762\u306b\u30e9\u30f3\u30d7\u3092 1 \u3064\u6301\u3063\u3066\u3044\u307e\u3059\uff08\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/2.2.0/hardware_components"},"\u5404\u90e8\u306e\u540d\u524d"),"\uff09\u3002\n\u3053\u306e\u30e9\u30f3\u30d7\u306f\u4ee5\u4e0b\u306e\u7279\u6027\uff08characteristic\uff09\u3092\u4f7f\u3046\u3053\u3068\u3067\u8272\u3092\u6307\u5b9a\u3057\u3066\u70b9\u706f\u3084\u6d88\u706f\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Characteristic UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"10B20103-5B3B-4571-9508-CF3EFCD7BBAE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Properties"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#%E6%9B%B8%E3%81%8D%E8%BE%BC%E3%81%BF%E6%93%8D%E4%BD%9C"},"Write"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Descriptor"),(0,r.kt)("td",{parentName:"tr",align:null},"Light Control")))),(0,r.kt)("h2",{id:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c"},"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c"),(0,r.kt)("h3",{id:"\u70b9\u706f\u6d88\u706f"},"\u70b9\u706f\u30fb\u6d88\u706f"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306b\u793a\u3059\u69cb\u6210\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u30e9\u30f3\u30d7\u3092\u70b9\u706f\u30fb\u6d88\u706f\u3067\u304d\u307e\u3059\u3002\n\u4f8b\u306f\u30e9\u30f3\u30d7\u3092\u8d64\u8272\u3067 160 \u30df\u30ea\u79d2\u70b9\u706f\u3057\u305f\u5f8c\u306b\u6d88\u706f\u3057\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u306e\u7a2e\u985e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x03")),"\uff08\u70b9\u706f\u30fb\u6d88\u706f\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x10"),"\uff08160 \u30df\u30ea\u79d2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u306e Red \u306e\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0xFF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u306e Green \u306e\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u306e Blue \u306e\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))))),(0,r.kt)("h4",{id:"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593"},"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593"),(0,r.kt)("p",null,"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u4ee5\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"255"),"\u4ee5\u4e0b\u306e\u7bc4\u56f2\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u306f\u300c\u6642\u9593\u5236\u9650\u7121\u3057\u300d\u3092\u610f\u5473\u3057\u3001\u6b21\u306e\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u304c\u884c\u308f\u308c\u308b\u307e\u3067\u70b9\u706f\u30fb\u6d88\u706f\u3057\u7d9a\u3051\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u4ee5\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"255"),"\u4ee5\u4e0b\u306e\u7bc4\u56f2\u3067\u306f x10 \u30df\u30ea\u79d2\u70b9\u706f\u30fb\u6d88\u706f\u3057\u305f\u5f8c\u306b\u6d88\u706f\u3057\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e\u6570\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e-id"},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e\u6570\u30fb\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e ID"),(0,r.kt)("p",null,"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e\u6570\u3084 ID \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u5236\u5fa1\u53ef\u80fd\u306a\u30e9\u30f3\u30d7\u306f 1 \u3064\u306e\u307f\u3067\u3001\u3069\u3061\u3089\u3082",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"\u30e9\u30f3\u30d7\u306e-redgreenblue-\u306e\u5024"},"\u30e9\u30f3\u30d7\u306e Red/Green/Blue \u306e\u5024"),(0,r.kt)("p",null,"\u30e9\u30f3\u30d7\u306e\u8272\u3092\u305d\u308c\u305e\u308c",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u4ee5\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"255"),"\u4ee5\u4e0b\u306e\u7bc4\u56f2\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002\u5168\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u3067\u6307\u5b9a\u3059\u308b\u3068\u6d88\u706f\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u9023\u7d9a\u7684\u306a\u70b9\u706f\u6d88\u706f"},"\u9023\u7d9a\u7684\u306a\u70b9\u706f\u30fb\u6d88\u706f"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306b\u793a\u3059\u69cb\u6210\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u30e9\u30f3\u30d7\u3092\u9023\u7d9a\u7684\u306b\u70b9\u706f\u30fb\u6d88\u706f\u3067\u304d\u307e\u3059\u3002\n\u4f8b\u306f\u30e9\u30f3\u30d7\u3092\u7dd1\u8272\u3068\u9752\u8272\u3067 300 \u30df\u30ea\u79d2\u3054\u3068\u70b9\u6ec5\u3055\u305b\u3064\u3065\u3051\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u306e\u7a2e\u985e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x04")),"\uff08\u9023\u7d9a\u7684\u306a\u70b9\u706f\u30fb\u6d88\u706f\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7e70\u308a\u8fd4\u3057\u56de\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"),"\uff08\u7121\u9650\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"Operation \u306e\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x02"),"\uff08Operation 2 \u3064\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x1E"),"\uff08300 \u30df\u30ea\u79d2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u306e Red \u306e\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u306e Green \u306e\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0xFF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u306e Blue \u306e\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x1E"),"\uff08300 \u30df\u30ea\u79d2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u306e Red \u306e\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u306e Green \u306e\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30e9\u30f3\u30d7\u306e Blue \u306e\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0xFF"))))),(0,r.kt)("h4",{id:"\u30c7\u30fc\u30bf\u69cb\u9020\u3068-operation"},"\u30c7\u30fc\u30bf\u69cb\u9020\u3068 Operation"),(0,r.kt)("p",null,"\u3053\u306e\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306e\u30c7\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u56f3\u306e\u3088\u3046\u306a\u9577\u3055\u304c\u53ef\u5909\u306a\u69cb\u9020\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Light Scenario Data Structure",src:n(5593).Z,width:"555",height:"171"})),(0,r.kt)("p",null,"Operation \u3068\u306f",(0,r.kt)("a",{parentName:"p",href:"#%E7%82%B9%E7%81%AF-%E6%B6%88%E7%81%AF"},"\u70b9\u706f\u30fb\u6d88\u706f"),"\u3067\u66f8\u304d\u8fbc\u3093\u3060\u4ee5\u4e0b\u306e 6 \u3064\u3092\u307e\u3068\u3081\u305f\u3082\u306e\u3092\u8868\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593"),(0,r.kt)("li",{parentName:"ul"},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e ID"),(0,r.kt)("li",{parentName:"ul"},"\u30e9\u30f3\u30d7\u306e Red \u306e\u5024"),(0,r.kt)("li",{parentName:"ul"},"\u30e9\u30f3\u30d7\u306e Green \u306e\u5024"),(0,r.kt)("li",{parentName:"ul"},"\u30e9\u30f3\u30d7\u306e Blue \u306e\u5024")),(0,r.kt)("h4",{id:"\u7e70\u308a\u8fd4\u3057\u56de\u6570"},"\u7e70\u308a\u8fd4\u3057\u56de\u6570"),(0,r.kt)("p",null,"Operation \u306e\u7e70\u308a\u8fd4\u3057\u56de\u6570\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u4ee5\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"255"),"\u4ee5\u4e0b\u306e\u7bc4\u56f2\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u306f\u300c\u7121\u9650\u56de\u300d\u3092\u610f\u5473\u3057\u3001\u6b21\u306e\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u304c\u884c\u308f\u308c\u308b\u307e\u3067 Operation \u306e\u7e70\u308a\u8fd4\u3057\u304c\u7d42\u308f\u308a\u307e\u305b\u3093\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u4ee5\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"255"),"\u4ee5\u4e0b\u306e\u7bc4\u56f2\u3067\u306f\u6307\u5b9a\u3057\u305f\u56de\u6570\u7e70\u308a\u8fd4\u3057\u305f\u5f8c\u306b\u6d88\u706f\u3057\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"operation-\u306e\u6570"},"Operation \u306e\u6570"),(0,r.kt)("p",null,"Operation \u306e\u6570\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u4ee5\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"29"),"\u4ee5\u4e0b\u306e\u7bc4\u56f2\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002\u3053\u3053\u3067\u6307\u5b9a\u3059\u308b\u5024\u304c\u7d9a\u304f Operation \u306e\u6570\u3088\u308a\u5c0f\u3055\u3044\u5834\u5408\u306f\u3053\u3053\u3067\u6307\u5b9a\u3057\u305f\u5024\u306e\u6570\u306e Operation \u3060\u3051\u304c\u7e70\u308a\u8fd4\u3055\u308c\u307e\u3059\u3002\u3053\u3053\u3067\u6307\u5b9a\u3059\u308b\u5024\u304c\u7d9a\u304f Operation \u306e\u6570\u3088\u308a\u5927\u304d\u3044\u5834\u5408\u306f\u30a8\u30e9\u30fc\u3068\u306a\u308a\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u304c\u7834\u68c4\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593-1"},"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593"),(0,r.kt)("p",null,"\u30e9\u30f3\u30d7\u3092\u5236\u5fa1\u3059\u308b\u6642\u9593\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u4ee5\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"255"),"\u306e\u7bc4\u56f2\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\u4ee5\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"255"),"\u4ee5\u4e0b\u306e\u7bc4\u56f2\u3067\u306f x10 \u30df\u30ea\u79d2\u70b9\u706f\u30fb\u6d88\u706f\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u5168\u3066\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f"},"\u5168\u3066\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306b\u793a\u3059\u69cb\u6210\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u5168\u3066\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u306e\u7a2e\u985e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),"\uff08\u5168\u3066\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f\uff09")))),(0,r.kt)("h3",{id:"\u7279\u5b9a\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f"},"\u7279\u5b9a\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306b\u793a\u3059\u69cb\u6210\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u7279\u5b9a\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u306e\u7a2e\u985e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x02")),"\uff08\u7279\u5b9a\u306e\u30e9\u30f3\u30d7\u3092\u6d88\u706f\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5236\u5fa1\u3059\u308b\u30e9\u30f3\u30d7\u306e ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")))))))}g.isMDXComponent=!0},130:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/cube_basics_light-326e8d870ef61886f4c0e89d49da3272.svg"},5593:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sequential_operation-a90b4e3607ee02640fb586bf907f0d88.svg"}}]);