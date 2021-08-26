"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1772],{3905:(t,e,I)=>{I.d(e,{Zo:()=>N,kt:()=>C});var n=I(7294);function a(t,e,I){return e in t?Object.defineProperty(t,e,{value:I,enumerable:!0,configurable:!0,writable:!0}):t[e]=I,t}function i(t,e){var I=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),I.push.apply(I,n)}return I}function g(t){for(var e=1;e<arguments.length;e++){var I=null!=arguments[e]?arguments[e]:{};e%2?i(Object(I),!0).forEach((function(e){a(t,e,I[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(I)):i(Object(I)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(I,e))}))}return t}function r(t,e){if(null==t)return{};var I,n,a=function(t,e){if(null==t)return{};var I,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)I=i[n],e.indexOf(I)>=0||(a[I]=t[I]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)I=i[n],e.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(t,I)&&(a[I]=t[I])}return a}var l=n.createContext({}),o=function(t){var e=n.useContext(l),I=e;return t&&(I="function"==typeof t?t(e):g(g({},e),t)),I},N=function(t){var e=o(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},M=n.forwardRef((function(t,e){var I=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,N=r(t,["components","mdxType","originalType","parentName"]),M=o(I),C=a,s=M["".concat(l,".").concat(C)]||M[C]||c[C]||i;return I?n.createElement(s,g(g({ref:e},N),{},{components:I})):n.createElement(s,g({ref:e},N))}));function C(t,e){var I=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=I.length,g=new Array(i);g[0]=M;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:a,g[1]=r;for(var o=2;o<i;o++)g[o]=I[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,I)}M.displayName="MDXCreateElement"},6687:(t,e,I)=>{I.r(e),I.d(e,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>o,toc:()=>N,default:()=>M});var n=I(7462),a=I(3366),i=(I(7294),I(3905)),g=["components"],r={id:"ble_magnetic_sensor",title:"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc",sidebar_label:"\ud83d\udd04 \u78c1\u6c17\u30bb\u30f3\u30b5\u30fc",original_id:"ble_magnetic_sensor"},l=void 0,o={unversionedId:"ble_magnetic_sensor",id:"version-2.3.0/ble_magnetic_sensor",isDocsHomePage:!1,title:"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc",description:"\u30ad\u30e5\u30fc\u30d6\u306f\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u306b\u3088\u3063\u3066\u30ad\u30e5\u30fc\u30d6\u306e\u5929\u9762\u306b\u88c5\u7740\u3055\u308c\u305f\u78c1\u77f3\u306e\u7a2e\u985e\uff08\u5b9a\u7fa9\u6e08\u307f\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u30d1\u30bf\u30fc\u30f3\uff09\u307e\u305f\u306f\u78c1\u529b\u3092\u691c\u51fa\u3067\u304d\u307e\u3059\u3002\u78c1\u77f3\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4ed5\u69d8\u306b\u3064\u3044\u3066\u306f\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4ed5\u69d8 - \u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/versioned_docs/version-2.3.0/magnetic_sensor.md",sourceDirName:".",slug:"/ble_magnetic_sensor",permalink:"/toio-spec/docs/ble_magnetic_sensor",version:"2.3.0",frontMatter:{id:"ble_magnetic_sensor",title:"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc",sidebar_label:"\ud83d\udd04 \u78c1\u6c17\u30bb\u30f3\u30b5\u30fc",original_id:"ble_magnetic_sensor"},sidebar:"version-2.3.0/docs",previous:{title:"\ud83d\udd04 \u59ff\u52e2\u89d2\u691c\u51fa",permalink:"/toio-spec/docs/ble_high_precision_tilt_sensor"},next:{title:"\u30dc\u30bf\u30f3",permalink:"/toio-spec/docs/ble_button"}},N=[{value:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c",id:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c",children:[{value:"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u306e\u8981\u6c42",id:"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u306e\u8981\u6c42",children:[]}]},{value:'\u8aad\u307f\u51fa\u3057\u64cd\u4f5c / \u901a\u77e5 <span class="update"/>',id:"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c--\u901a\u77e5-",children:[{value:'\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u306e\u53d6\u5f97 <span class="update"/>',id:"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u306e\u53d6\u5f97-",children:[]}]}],c={toc:N};function M(t){var e=t.components,r=(0,a.Z)(t,g);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306f\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u306b\u3088\u3063\u3066\u30ad\u30e5\u30fc\u30d6\u306e\u5929\u9762\u306b\u88c5\u7740\u3055\u308c\u305f\u78c1\u77f3\u306e\u7a2e\u985e\uff08\u5b9a\u7fa9\u6e08\u307f\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u30d1\u30bf\u30fc\u30f3\uff09\u307e\u305f\u306f\u78c1\u529b\u3092\u691c\u51fa\u3067\u304d\u307e\u3059\u3002\u78c1\u77f3\u306e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4ed5\u69d8\u306b\u3064\u3044\u3066\u306f",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/hardware_magnet"},"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4ed5\u69d8 - \u78c1\u6c17\u30bb\u30f3\u30b5\u30fc"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u3053\u306e\u6a5f\u80fd\u306f",(0,i.kt)("strong",{parentName:"p"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u7121\u52b9"),"\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/ble_configuration#_%E7%A3%81%E6%B0%97%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC%E3%81%AE%E8%A8%AD%E5%AE%9A_"},"\u8a2d\u5b9a - \u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u306e\u8a2d\u5b9a"),"\u3067\u6709\u52b9\u5316\u3059\u308b\u3053\u3068\u3067\u306f\u3058\u3081\u3066\u5229\u7528\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"))),(0,i.kt)("p",null,"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u306e\u60c5\u5831\u306f\u4ee5\u4e0b\u306e\u7279\u6027\uff08characteristic\uff09\u3092\u4f7f\u3046\u3053\u3068\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u7279\u6027\u306f",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/ble_sensor"},"\u30e2\u30fc\u30b7\u30e7\u30f3\u691c\u51fa"),"\u304a\u3088\u3073",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/ble_high_precision_tilt_sensor"},"\u59ff\u52e2\u89d2\u691c\u51fa"),"\u3068\u540c\u3058\u3067\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5024"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Characteristic UUID"),(0,i.kt)("td",{parentName:"tr",align:null},"10B20106-5B3B-4571-9508-CF3EFCD7BBAE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Properties"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#%E6%9B%B8%E3%81%8D%E8%BE%BC%E3%81%BF%E6%93%8D%E4%BD%9C"},"Write"),", ",(0,i.kt)("a",{parentName:"td",href:"#%E8%AA%AD%E3%81%BF%E5%87%BA%E3%81%97%E6%93%8D%E4%BD%9C--%E9%80%9A%E7%9F%A5"},"Read"),", ",(0,i.kt)("a",{parentName:"td",href:"#%E8%AA%AD%E3%81%BF%E5%87%BA%E3%81%97%E6%93%8D%E4%BD%9C--%E9%80%9A%E7%9F%A5"},"Notify"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Descriptor"),(0,i.kt)("td",{parentName:"tr",align:null},"Sensor Information")))),(0,i.kt)("h2",{id:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c"},"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c"),(0,i.kt)("h3",{id:"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u306e\u8981\u6c42"},"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u306e\u8981\u6c42"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u3092\u8981\u6c42\u3067\u304d\u307e\u3059\u3002\u30ad\u30e5\u30fc\u30d6\u306f\u8981\u6c42\u3092\u53d7\u3051\u53d6\u308b\u3068\u3001\u5fc5\u305a 1 \u56de\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u306e\u901a\u77e5\u3092\u884c\u3044\u307e\u3059\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,i.kt)("td",{parentName:"tr",align:null},"\u60c5\u5831\u306e\u7a2e\u985e"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"fixed"},(0,i.kt)("inlineCode",{parentName:"td"},"0x82"))," (\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u306e\u8981\u6c42\uff09")))),(0,i.kt)("h2",{id:"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c--\u901a\u77e5-"},"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c / \u901a\u77e5 ",(0,i.kt)("span",{class:"update"})),(0,i.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u306e\u60c5\u5831\u304c\u5909\u5316\u3059\u308b\u3068\u3001\u3053\u306e\u7279\u6027\u306f BLE \u30bb\u30f3\u30c8\u30e9\u30eb\u306b\u60c5\u5831\u3092\u901a\u77e5\u3057\u307e\u3059\u3002\n\u901a\u77e5\u3055\u308c\u308b\u60c5\u5831\u306f\u8aad\u307f\u51fa\u3057\u64cd\u4f5c\u3067\u3082\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7279\u6027\u306f",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/ble_sensor"},"\u30e2\u30fc\u30b7\u30e7\u30f3\u691c\u51fa"),"\u304a\u3088\u3073",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/ble_high_precision_tilt_sensor"},"\u59ff\u52e2\u89d2\u691c\u51fa"),"\u3068\u5171\u901a\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u60c5\u5831\u3082\u53d6\u5f97\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u5229\u7528\u306e\u969b\u306b\u306f",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/ble_sensor#%E8%AA%AD%E3%81%BF%E5%87%BA%E3%81%97%E6%93%8D%E4%BD%9C--%E9%80%9A%E7%9F%A5"},"\u30e2\u30fc\u30b7\u30e7\u30f3\u691c\u51fa - \u8aad\u307f\u51fa\u3057\u64cd\u4f5c / \u901a\u77e5"),"\u304a\u3088\u3073",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/ble_high_precision_tilt_sensor#%E8%AA%AD%E3%81%BF%E5%87%BA%E3%81%97%E6%93%8D%E4%BD%9C--%E9%80%9A%E7%9F%A5"},"\u59ff\u52e2\u89d2\u691c\u51fa - \u8aad\u307f\u51fa\u3057\u64cd\u4f5c / \u901a\u77e5"),"\u3082\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,i.kt)("h3",{id:"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u306e\u53d6\u5f97-"},"\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\u306e\u53d6\u5f97 ",(0,i.kt)("span",{class:"update"})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,i.kt)("td",{parentName:"tr",align:null},"\u60c5\u5831\u306e\u7a2e\u985e"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{class:"fixed"},(0,i.kt)("inlineCode",{parentName:"td"},"0x02")),"\uff08\u78c1\u6c17\u30bb\u30f3\u30b5\u30fc\u60c5\u5831\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,i.kt)("td",{parentName:"tr",align:null},"\u78c1\u77f3\u306e\u72b6\u614b"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x00"),"\uff08\u672a\u88c5\u7740\u307e\u305f\u306f\u6a5f\u80fd\u7121\u52b9\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,i.kt)("td",{parentName:"tr",align:null},"\u78c1\u529b\u306e\u5f37\u5ea6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x00"),"\uff08\u691c\u51fa\u306a\u3057\u307e\u305f\u306f\u6a5f\u80fd\u7121\u52b9\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"Int8"),(0,i.kt)("td",{parentName:"tr",align:null},"\u78c1\u529b\u306e\u65b9\u5411\uff08X \u8ef8\uff09"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x00"),"\uff08\u691c\u51fa\u306a\u3057\u307e\u305f\u306f\u6a5f\u80fd\u7121\u52b9\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"Int8"),(0,i.kt)("td",{parentName:"tr",align:null},"\u78c1\u529b\u306e\u65b9\u5411\uff08Y \u8ef8\uff09"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x00"),"\uff08\u691c\u51fa\u306a\u3057\u307e\u305f\u306f\u6a5f\u80fd\u7121\u52b9\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"Int8"),(0,i.kt)("td",{parentName:"tr",align:null},"\u78c1\u529b\u306e\u65b9\u5411\uff08Z \u8ef8\uff09"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x00"),"\uff08\u691c\u51fa\u306a\u3057\u307e\u305f\u306f\u6a5f\u80fd\u7121\u52b9\uff09")))),(0,i.kt)("h4",{id:"\u78c1\u77f3\u306e\u72b6\u614b"},"\u78c1\u77f3\u306e\u72b6\u614b"),(0,i.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u5929\u9762\u306b\u88c5\u7740\u3055\u308c\u305f\u78c1\u77f3\u306e\u72b6\u614b\uff08\u672a\u88c5\u7740\u3082\u3057\u304f\u306f\u5b9a\u7fa9\u6e08\u307f\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u30d1\u30bf\u30fc\u30f3\uff09\u306e ID \u3067\u3059\u3002\u672a\u88c5\u7740\u6642\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"0x00"),"\u306b\u306a\u308a\u3001\u88c5\u7740\u6642\u306f",(0,i.kt)("inlineCode",{parentName:"p"},"0x01"),"\u304b\u3089",(0,i.kt)("inlineCode",{parentName:"p"},"0x06"),"\u306e 6 \u3064\u306e\u30d1\u30bf\u30fc\u30f3\u306e\u3044\u305a\u308c\u304b\u306b\u306a\u308a\u307e\u3059\u3002\u30ec\u30a4\u30a2\u30a6\u30c8\u30d1\u30bf\u30fc\u30f3\u306e\u4ed5\u69d8\u306b\u3064\u3044\u3066\u306f",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/hardware_magnet"},"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4ed5\u69d8 - \u78c1\u6c17\u30bb\u30f3\u30b5\u30fc"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u672a\u88c5\u7740\u3082\u3057\u304f\u306f",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/hardware_magnet"},"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4ed5\u69d8 - \u78c1\u6c17\u30bb\u30f3\u30b5\u30fc"),"\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b 6 \u3064\u306e\u30d1\u30bf\u30fc\u30f3\u3001\u5408\u308f\u305b\u3066 7 \u3064\u306e\u30d1\u30bf\u30fc\u30f3\u4ee5\u5916\u306e\u78c1\u529b\u3092\u691c\u51fa\u3057\u305f\u5834\u5408\u306f\u60c5\u5831\u3092\u66f4\u65b0\u3057\u307e\u305b\u3093\u3002"),(0,i.kt)("h4",{id:"\u78c1\u529b\u306e\u691c\u51fa-"},"\u78c1\u529b\u306e\u691c\u51fa ",(0,i.kt)("span",{class:"new"})),(0,i.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306b\u78c1\u77f3\u3092\u8fd1\u3065\u3051\u308b\u3068\u3001\u30ad\u30e5\u30fc\u30d6\u306f\u78c1\u529b\u3092\u691c\u51fa\u3057\u3066\u5fdc\u7b54\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,i.kt)("h5",{id:"\u78c1\u529b\u306e\u5f37\u5ea6"},"\u78c1\u529b\u306e\u5f37\u5ea6"),(0,i.kt)("p",null,"\u78c1\u529b\u306e\u5f37\u5ea6\u306f\u3001\u30ad\u30e5\u30fc\u30d6\u304c\u691c\u51fa\u3057\u305f\u78c1\u529b\u306e\u5f37\u3055\u3092\u8868\u3057\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5f37\u5ea6\u306e\u5024\u306e\u7bc4\u56f2\u306f 0 \u304b\u3089 255 \u3067\u3059\u3002\u5024\u304c\u5927\u304d\u3044\u307b\u3069\u78c1\u529b\u304c\u5f37\u3044\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("h5",{id:"\u78c1\u529b\u306e\u65b9\u5411"},"\u78c1\u529b\u306e\u65b9\u5411"),(0,i.kt)("p",null,"\u78c1\u529b\u306e\u65b9\u5411\u306f\u3001\u30ad\u30e5\u30fc\u30d6\u306b\u5bfe\u3059\u308b\u78c1\u529b\u7dda\u306e\u5411\u304d\u3092\u76f8\u5bfe\u7684\u306b\u793a\u3057\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5404\u8ef8\u306e\u5024\u306e\u7bc4\u56f2\u306f -10 \u304b\u3089 10 \u3067\u3059\u3002\u78c1\u529b\u3092\u691c\u51fa\u3057\u3066\u3044\u306a\u3044\u3068\u304d\u306f 0 \u3067\u3059\u3002\n\u78c1\u529b\u306e\u65b9\u5411\u306e 3 \u6b21\u5143\u30d9\u30af\u30c8\u30eb\u3068\u3057\u3066\u306e\u9577\u3055\u306f\u3001\u78c1\u529b\u306e\u5f37\u5ea6\u306b\u6bd4\u4f8b\u3057\u307e\u305b\u3093\u3002\n\u78c1\u529b\u3092\u691c\u51fa\u3057\u305f\u3068\u304d\u306e\u30d9\u30af\u30c8\u30eb\u306e\u9577\u3055\u306f\u307b\u307c\u4e00\u5b9a\uff08\u304a\u3088\u305d 10\uff09\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"vector composition",src:I(9531).Z})),(0,i.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u65b9\u5411\u3068\u78c1\u529b\u7dda\u306e\u65b9\u5411\u306e\u95a2\u4fc2\u306f",(0,i.kt)("a",{parentName:"p",href:"/toio-spec/docs/hardware_magnet#%E7%A3%81%E5%8A%9B%E3%81%AE%E6%A4%9C%E5%87%BA"},"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4ed5\u69d8 - \u78c1\u6c17\u30bb\u30f3\u30b5\u30fc"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}M.isMDXComponent=!0},9531:(t,e,I)=>{I.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyBpZD0i44Os44Kk44Ok44O8XzEiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDU1NSAyMDgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEsIC5jbHMtMTEsIC5jbHMtMTIsIC5jbHMtMywgLmNscy00LCAuY2xzLTUsIC5jbHMtNiwgLmNscy03LCAuY2xzLTgsIC5jbHMtOSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMTEsIC5jbHMtMTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlOiAjNjY2OwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMTEsIC5jbHMtMTIsIC5jbHMtMywgLmNscy00LCAuY2xzLTUsIC5jbHMtNiwgLmNscy03LCAuY2xzLTggewogICAgICAgIHN0cm9rZS13aWR0aDogMS41cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMTMsIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzY2NjsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA1LjA1NiA1LjA1NjsKICAgICAgfQoKICAgICAgLmNscy00LCAuY2xzLTUsIC5jbHMtNiwgLmNscy03LCAuY2xzLTgsIC5jbHMtOSB7CiAgICAgICAgc3Ryb2tlOiAjYmZkODMzOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDQuOTkyIDQuOTkyOwogICAgICB9CgogICAgICAuY2xzLTYgewogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDUuNDEyIDUuNDEyOwogICAgICB9CgogICAgICAuY2xzLTcgewogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDQuNDU5IDQuNDU5OwogICAgICB9CgogICAgICAuY2xzLTggewogICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDUuMjQ0IDUuMjQ0OwogICAgICB9CgogICAgICAuY2xzLTkgewogICAgICAgIHN0cm9rZS13aWR0aDogMnB4OwogICAgICB9CgogICAgICAuY2xzLTEwIHsKICAgICAgICBmaWxsOiAjYmZkODMzOwogICAgICB9CgogICAgICAuY2xzLTExIHsKICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA1LjI4MSA1LjI4MTsKICAgICAgfQoKICAgICAgLmNscy0xMiB7CiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNC42NDYgNC42NDY7CiAgICAgIH0KCiAgICAgIC5jbHMtMTMgewogICAgICAgIGZvbnQtc2l6ZTogOS45OHB4OwogICAgICAgIGZvbnQtZmFtaWx5OiBTU1QtUm9tYW4sIFNTVDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGc+CiAgICA8bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIyNTAuNzg5IiB5MT0iMTE1LjY1OCIgeDI9IjI1MC43ODkiIHkyPSIxOS41MzUiLz4KICAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIyNTYuMDI0IDIxLjA2NiAyNTAuNzg5IDEyIDI0NS41NTMgMjEuMDY2IDI1Ni4wMjQgMjEuMDY2Ii8+CiAgPC9nPgogIDxnPgogICAgPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjUwLjc4OSIgeTE9IjExNS42NTgiIHgyPSIxNzkuMTUiIHkyPSIxNzguODY5Ii8+CiAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTc2LjgzNCAxNzMuOTI5IDE3My41IDE4My44NTMgMTgzLjc2MiAxODEuNzggMTc2LjgzNCAxNzMuOTI5Ii8+CiAgPC9nPgogIDxnPgogICAgPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjc0LjQzIiB5MT0iOTQuNzQ0IiB4Mj0iMjcyLjU1MyIgeTI9Ijk2LjM5NiIvPgogICAgPGxpbmUgY2xhc3M9ImNscy0zIiB4MT0iMjY4Ljc1NyIgeTE9Ijk5LjczNiIgeDI9IjI1NS40NzMiIHkyPSIxMTEuNDI3Ii8+CiAgICA8bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIyNTMuNTc1IiB5MT0iMTEzLjA5NyIgeDI9IjI1MS42OTgiIHkyPSIxMTQuNzQ4Ii8+CiAgPC9nPgogIDxnPgogICAgPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjUwLjc4OSIgeTE9IjExNS42NTgiIHgyPSIzNjkuMjM2IiB5Mj0iMTQ4LjMxMyIvPgogICAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjM2Ni4zNjggMTUyLjk1MyAzNzYuNSAxNTAuMzE2IDM2OS4xNTEgMTQyLjg1OSAzNjYuMzY4IDE1Mi45NTMiLz4KICA8L2c+CiAgPGc+CiAgICA8bGluZSBjbGFzcz0iY2xzLTQiIHgxPSIzMDMuMDc1IiB5MT0iMTMxLjU3MSIgeDI9IjMwMS4xOTciIHkyPSIxMzMuMjIxIi8+CiAgICA8bGluZSBjbGFzcz0iY2xzLTUiIHgxPSIyOTcuNDQ3IiB5MT0iMTM2LjUxNyIgeDI9IjI3Ni44MjIiIHkyPSIxNTQuNjQyIi8+CiAgICA8bGluZSBjbGFzcz0iY2xzLTQiIHgxPSIyNzQuOTQ3IiB5MT0iMTU2LjI5IiB4Mj0iMjczLjA2OSIgeTI9IjE1Ny45NCIvPgogIDwvZz4KICA8Zz4KICAgIDxsaW5lIGNsYXNzPSJjbHMtNCIgeDE9IjIyMS42OTIiIHkxPSIxNDMuODQ1IiB4Mj0iMjI0LjEwMyIgeTI9IjE0NC41MDQiLz4KICAgIDxsaW5lIGNsYXNzPSJjbHMtNiIgeDE9IjIyOS4zMjQiIHkxPSIxNDUuOTMxIiB4Mj0iMjY4LjQ3OCIgeTI9IjE1Ni42MjgiLz4KICAgIDxsaW5lIGNsYXNzPSJjbHMtNCIgeDE9IjI3MS4wODgiIHkxPSIxNTcuMzQxIiB4Mj0iMjczLjUiIHkyPSIxNTgiLz4KICA8L2c+CiAgPGc+CiAgICA8bGluZSBjbGFzcz0iY2xzLTQiIHgxPSIyNTAuNzg5IiB5MT0iMzIuMDA0IiB4Mj0iMjUyLjA0NyIgeTI9IjM0LjE2NCIvPgogICAgPGxpbmUgY2xhc3M9ImNscy03IiB4MT0iMjU0LjI5MSIgeTE9IjM4LjAxNyIgeDI9IjI3MS4xMiIgeTI9IjY2LjkxMyIvPgogICAgPGxpbmUgY2xhc3M9ImNscy00IiB4MT0iMjcyLjI0MiIgeTE9IjY4Ljg0IiB4Mj0iMjczLjUiIHkyPSI3MSIvPgogIDwvZz4KICA8Zz4KICAgIDxsaW5lIGNsYXNzPSJjbHMtNCIgeDE9IjI3My4wNjkiIHkxPSIxNTcuMTIyIiB4Mj0iMjczLjA2OSIgeTI9IjE1NC42MjIiLz4KICAgIDxsaW5lIGNsYXNzPSJjbHMtOCIgeDE9IjI3My4wNjkiIHkxPSIxNDkuMzc4IiB4Mj0iMjczLjA2OSIgeTI9Ijc4LjU5Ii8+CiAgICA8bGluZSBjbGFzcz0iY2xzLTQiIHgxPSIyNzMuMDY5IiB5MT0iNzUuOTY4IiB4Mj0iMjczLjA2OSIgeTI9IjczLjQ2OCIvPgogIDwvZz4KICA8Zz4KICAgIDxsaW5lIGNsYXNzPSJjbHMtOSIgeDE9IjI1MS41IiB5MT0iMTE1IiB4Mj0iMjY4Ljg4MyIgeTI9Ijc5LjM2NSIvPgogICAgPHBvbHlnb24gY2xhc3M9ImNscy0xMCIgcG9pbnRzPSIyNzAuOTggODMuNTEzIDI2OC4zNDEgODAuNDc2IDI2NC4zMjMgODAuMjY2IDI3MS41IDc0IDI3MC45OCA4My41MTMiLz4KICA8L2c+CiAgPGc+CiAgICA8bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIyNTAuNzg5IiB5MT0iMTkxLjEyOCIgeDI9IjI1MC43ODkiIHkyPSIxODguNjI4Ii8+CiAgICA8bGluZSBjbGFzcz0iY2xzLTExIiB4MT0iMjUwLjc4OSIgeTE9IjE4My4zNDciIHgyPSIyNTAuNzg5IiB5Mj0iMTIyLjYxNyIvPgogICAgPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjUwLjc4OSIgeTE9IjExOS45NzYiIHgyPSIyNTAuNzg5IiB5Mj0iMTE3LjQ3NiIvPgogIDwvZz4KICA8Zz4KICAgIDxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjIyMC43ODIiIHkxPSIxMDcuNDc0IiB4Mj0iMjIzLjE5OCIgeTI9IjEwOC4xMTgiLz4KICAgIDxsaW5lIGNsYXNzPSJjbHMtMTIiIHgxPSIyMjcuNjg3IiB5MT0iMTA5LjMxNiIgeDI9IjI0My40IiB5Mj0iMTEzLjUwNiIvPgogICAgPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjQ1LjY0NSIgeTE9IjExNC4xMDQiIHgyPSIyNDguMDYxIiB5Mj0iMTE0Ljc0OCIvPgogIDwvZz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMiIgY3g9IjI3My4wNjkiIGN5PSI3MS40NjgiIHI9IjIuNzI4Ii8+CiAgPHRleHQgY2xhc3M9ImNscy0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjA3LjcwNCAxNDAuODczKSI+WDwvdGV4dD4KICA8dGV4dCBjbGFzcz0iY2xzLTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDUuMTQ1IDEyNC42MTcpIj5ZPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJjbHMtMTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNy41MyAzMi42NjMpIj5aPC90ZXh0PgogIDx0ZXh0IGNsYXNzPSJjbHMtMTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3NS42ODMgNjQuNDY0KSI+KCBYLCBZLCBaICk8L3RleHQ+Cjwvc3ZnPgo="}}]);