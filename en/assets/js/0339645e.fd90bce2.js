"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3529],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),k=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=k(t.components);return a.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=k(n),N=l,g=u["".concat(d,".").concat(N)]||u[N]||o[N]||r;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6414:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>d,default:()=>u,frontMatter:()=>p,metadata:()=>k,toc:()=>m});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],p={id:"ble_configuration",title:"\u8a2d\u5b9a",sidebar_label:"\ud83d\udd04 \u8a2d\u5b9a",original_id:"ble_configuration"},d=void 0,k={unversionedId:"ble_configuration",id:"version-2.1.0/ble_configuration",isDocsHomePage:!1,title:"\u8a2d\u5b9a",description:"\u30ad\u30e5\u30fc\u30d6\u306f\u81ea\u8eab\u306e\u901a\u4fe1\u4ed5\u69d8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u3084\u5404\u7a2e\u8a2d\u5b9a\u60c5\u5831\u3092\u5185\u90e8\u306b\u4fdd\u5b58\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/versioned_docs/version-2.1.0/configuration.md",sourceDirName:".",slug:"/ble_configuration",permalink:"/toio-spec/en/docs/2.1.0/ble_configuration",tags:[],version:"2.1.0",frontMatter:{id:"ble_configuration",title:"\u8a2d\u5b9a",sidebar_label:"\ud83d\udd04 \u8a2d\u5b9a",original_id:"ble_configuration"},sidebar:"version-2.1.0/docs",previous:{title:"\u30b5\u30a6\u30f3\u30c9",permalink:"/toio-spec/en/docs/2.1.0/ble_sound"},next:{title:"\ud83d\udd04 Position ID \u4e00\u89a7",permalink:"/toio-spec/en/docs/2.1.0/info_position_id"}},m=[{value:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c",id:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c",children:[{value:"BLE \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u8981\u6c42",id:"ble-\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u8981\u6c42",children:[]},{value:"\u6c34\u5e73\u691c\u51fa\u306e\u3057\u304d\u3044\u5024\u8a2d\u5b9a",id:"\u6c34\u5e73\u691c\u51fa\u306e\u3057\u304d\u3044\u5024\u8a2d\u5b9a",children:[]},{value:"\u885d\u7a81\u691c\u51fa\u306e\u3057\u304d\u3044\u5024\u8a2d\u5b9a",id:"\u885d\u7a81\u691c\u51fa\u306e\u3057\u304d\u3044\u5024\u8a2d\u5b9a",children:[]},{value:'\u30c0\u30d6\u30eb\u30bf\u30c3\u30d7\u691c\u51fa\u306e\u6642\u9593\u9593\u9694\u306e\u8a2d\u5b9a <span class="new"/>',id:"\u30c0\u30d6\u30eb\u30bf\u30c3\u30d7\u691c\u51fa\u306e\u6642\u9593\u9593\u9694\u306e\u8a2d\u5b9a-",children:[]}]},{value:"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c",id:"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c",children:[{value:"BLE \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u53d6\u5f97",id:"ble-\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u53d6\u5f97",children:[]}]},{value:"\u901a\u77e5",id:"\u901a\u77e5",children:[]}],o={toc:m};function u(t){var e=t.components,p=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},o,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306f\u81ea\u8eab\u306e\u901a\u4fe1\u4ed5\u69d8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u3084\u5404\u7a2e\u8a2d\u5b9a\u60c5\u5831\u3092\u5185\u90e8\u306b\u4fdd\u5b58\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u3089\u306e\u60c5\u5831\u306f\u4ee5\u4e0b\u306e\u7279\u6027\uff08characteristic\uff09\u3092\u4f7f\u3046\u3053\u3068\u3067\u53d6\u5f97\u3084\u5909\u66f4\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Characteristic UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"10B201FF-5B3B-4571-9508-CF3EFCD7BBAE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Properties"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#%E6%9B%B8%E3%81%8D%E8%BE%BC%E3%81%BF%E6%93%8D%E4%BD%9C"},"Write"),", ",(0,r.kt)("a",{parentName:"td",href:"#%E8%AA%AD%E3%81%BF%E5%87%BA%E3%81%97%E6%93%8D%E4%BD%9C"},"Read"),", ",(0,r.kt)("a",{parentName:"td",href:"#%E9%80%9A%E7%9F%A5"},"Notify"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Descriptor"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration")))),(0,r.kt)("h2",{id:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c"},"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c"),(0,r.kt)("h3",{id:"ble-\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u8981\u6c42"},"BLE \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u8981\u6c42"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u30ad\u30e5\u30fc\u30d6\u306e BLE \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u8981\u6c42\u3067\u304d\u307e\u3059\u3002\u7d50\u679c\u306e\u53d6\u5f97\u65b9\u6cd5\u306f ",(0,r.kt)("a",{parentName:"p",href:"#ble-%E3%83%97%E3%83%AD%E3%83%88%E3%82%B3%E3%83%AB%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%AE%E5%8F%96%E5%BE%97"},"BLE \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u53d6\u5f97"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u5b9a\u306e\u7a2e\u985e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),"\uff08BLE \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u8981\u6c42\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))))),(0,r.kt)("h3",{id:"\u6c34\u5e73\u691c\u51fa\u306e\u3057\u304d\u3044\u5024\u8a2d\u5b9a"},"\u6c34\u5e73\u691c\u51fa\u306e\u3057\u304d\u3044\u5024\u8a2d\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/2.1.0/ble_sensor"},"\u30e2\u30fc\u30b7\u30e7\u30f3\u30bb\u30f3\u30b5\u30fc"),"\u3067\u53d6\u5f97\u3067\u304d\u308b\u6c34\u5e73\u691c\u51fa\u306f\u30ad\u30e5\u30fc\u30d6\u306e\u5e95\u9762\u3068\u6c34\u5e73\u9762\u306e\u306a\u3059\u89d2\u5ea6\uff08\u4e0b\u306e\u56f3\u306e \u03b8\uff09\u304c\u3057\u304d\u3044\u5024\u3092\u8d85\u3048\u308b\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"0x00"),"\uff08\u6c34\u5e73\u3067\u306a\u3044\uff09\u3068\u306a\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u3053\u306e\u3057\u304d\u3044\u5024\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u5b9a\u306e\u7a2e\u985e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x05")),"\uff08\u6c34\u5e73\u691c\u51fa\u306e\u3057\u304d\u3044\u5024\u8a2d\u5b9a\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u3057\u304d\u3044\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x0A")," (10 \u5ea6\uff09")))),(0,r.kt)("p",null,"\u3057\u304d\u3044\u5024\u306f\u30ed\u30fc\u30eb\u65b9\u5411\u3068\u30d4\u30c3\u30c1\u65b9\u5411\u306e\u56de\u8ee2\u306e\u4e21\u65b9\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5024\u306f 45 \u5ea6\u3068\u306a\u3063\u3066\u304a\u308a\u3001\u30ad\u30e5\u30fc\u30d6\u306e\u63a5\u7d9a\u304c\u5207\u308c\u308b\u3068\u8a2d\u5b9a\u306f\u7834\u68c4\u3055\u308c\u30c7\u30d5\u30a9\u30eb\u30c8\u306b\u623b\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30ed\u30fc\u30eb\u65b9\u5411"),"\n",(0,r.kt)("img",{alt:"Flat Status Threshold - Roll",src:n(1292).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u30d4\u30c3\u30c1\u65b9\u5411"),"\n",(0,r.kt)("img",{alt:"Flat Status Threshold - Pitch",src:n(4272).Z})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5024\u306e\u7bc4\u56f2"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Threshold angle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," - ",(0,r.kt)("inlineCode",{parentName:"td"},"45")," (\u5ea6\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"45")," (\u5ea6\uff09")))),(0,r.kt)("h3",{id:"\u885d\u7a81\u691c\u51fa\u306e\u3057\u304d\u3044\u5024\u8a2d\u5b9a"},"\u885d\u7a81\u691c\u51fa\u306e\u3057\u304d\u3044\u5024\u8a2d\u5b9a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/2.1.0/ble_sensor"},"\u30e2\u30fc\u30b7\u30e7\u30f3\u30bb\u30f3\u30b5\u30fc"),"\u3067\u53d6\u5f97\u3067\u304d\u308b\u885d\u7a81\u691c\u51fa\u306f\u30ad\u30e5\u30fc\u30d6\u306e\u53d7\u3051\u308b\u885d\u7a81\u306e\u5f37\u3055\u304c\u3057\u304d\u3044\u5024\u3092\u8d85\u3048\u308b\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"0x01"),"\uff08\u885d\u7a81\u3042\u308a\uff09\u3068\u306a\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u3053\u306e\u3057\u304d\u3044\u5024\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u5b9a\u306e\u7a2e\u985e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x06")),"\uff08\u885d\u7a81\u691c\u51fa\u306e\u3057\u304d\u3044\u5024\u8a2d\u5b9a\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u3057\u304d\u3044\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x0A")," (level 10)")))),(0,r.kt)("p",null,"\u3057\u304d\u3044\u5024\u306e\u8a2d\u5b9a\u53ef\u80fd\u7bc4\u56f2\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002\u5024\u306e\u5927\u304d\u306f\u885d\u7a81\u306e\u5927\u304d\u3055\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30ad\u30e5\u30fc\u30d6\u306e\u63a5\u7d9a\u304c\u5207\u308c\u308b\u3068\u8a2d\u5b9a\u306f\u7834\u68c4\u3055\u308c\u30c7\u30d5\u30a9\u30eb\u30c8\u306b\u623b\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5024\u306e\u7bc4\u56f2"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u3057\u304d\u3044\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," - ",(0,r.kt)("inlineCode",{parentName:"td"},"10")," (level)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"7")," (level)")))),(0,r.kt)("h3",{id:"\u30c0\u30d6\u30eb\u30bf\u30c3\u30d7\u691c\u51fa\u306e\u6642\u9593\u9593\u9694\u306e\u8a2d\u5b9a-"},"\u30c0\u30d6\u30eb\u30bf\u30c3\u30d7\u691c\u51fa\u306e\u6642\u9593\u9593\u9694\u306e\u8a2d\u5b9a ",(0,r.kt)("span",{class:"new"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/2.1.0/ble_sensor"},"\u30e2\u30fc\u30b7\u30e7\u30f3\u30bb\u30f3\u30b5\u30fc"),"\u3067\u53d6\u5f97\u3067\u304d\u308b\u30c0\u30d6\u30eb\u30bf\u30c3\u30d7\u691c\u51fa\u306f\u30ad\u30e5\u30fc\u30d6\u304c\u4e00\u5ea6\u30bf\u30c3\u30d7\u3055\u308c\u3066\u304b\u3089\u4e00\u5b9a\u6642\u9593\u5185\u306b\u518d\u5ea6\u30bf\u30c3\u30d7\u3055\u308c\u308b\u3068\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff08\u30c0\u30d6\u30eb\u30bf\u30c3\u30d7\u3042\u308a\uff09\u3068\u306a\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u3053\u306e\u30bf\u30c3\u30d7\u306e\u6642\u9593\u9593\u9694\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u5b9a\u306e\u7a2e\u985e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x17")),"\uff08\u30c0\u30d6\u30eb\u30bf\u30c3\u30d7\u691c\u51fa\u306e\u6642\u9593\u9593\u9694\u306e\u8a2d\u5b9a\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6642\u9593\u9593\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x07")," (level 7)")))),(0,r.kt)("p",null,"\u6642\u9593\u9593\u9694\u306e\u8a2d\u5b9a\u53ef\u80fd\u7bc4\u56f2\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002\u5024\u304c\u5927\u304d\u304f\u306a\u308b\u3068\u3001\u6642\u9593\u9593\u9694\u3082\u9577\u304f\u306a\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u30ad\u30e5\u30fc\u30d6\u306e\u63a5\u7d9a\u304c\u5207\u308c\u308b\u3068\u8a2d\u5b9a\u306f\u7834\u68c4\u3055\u308c\u30c7\u30d5\u30a9\u30eb\u30c8\u306b\u623b\u308a\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5024\u306e\u7bc4\u56f2"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u3057\u304d\u3044\u5024"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," - ",(0,r.kt)("inlineCode",{parentName:"td"},"7")," (level)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5")," (level)")))),(0,r.kt)("h2",{id:"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c"},"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c"),(0,r.kt)("h3",{id:"ble-\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u53d6\u5f97"},"BLE \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u53d6\u5f97"),(0,r.kt)("p",null,"\u8981\u6c42\u65b9\u6cd5\u306b\u95a2\u3057\u3066\u306f ",(0,r.kt)("a",{parentName:"p",href:"#ble-%E3%83%97%E3%83%AD%E3%83%88%E3%82%B3%E3%83%AB%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%AE%E8%A6%81%E6%B1%82"},"BLE \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u8981\u6c42"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a2d\u5b9a\u306e\u7a2e\u985e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"fixed"},(0,r.kt)("inlineCode",{parentName:"td"},"0x81")),"\uff08BLE \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u53d6\u5f97\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"BLE \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\uff085 bytes utf-8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0")))),(0,r.kt)("h2",{id:"\u901a\u77e5"},"\u901a\u77e5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#%E8%AA%AD%E3%81%BF%E5%87%BA%E3%81%97%E6%93%8D%E4%BD%9C"},"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c"),"\u3067\u5f97\u3089\u308c\u308b\u30c7\u30fc\u30bf\u306f\u901a\u77e5\u3067\u3082\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"))}u.isMDXComponent=!0},4272:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/configuration_flat_status_threshold_pitch-3e291d4fbd99e0b25088791d925b1f49.svg"},1292:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/configuration_flat_status_threshold_roll-743b293b5e6d89a36e00640cdfa43be4.svg"}}]);