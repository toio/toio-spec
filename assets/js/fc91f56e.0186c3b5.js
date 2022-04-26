"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7279],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(r),b=a,s=m["".concat(p,".").concat(b)]||m[b]||d[b]||l;return r?n.createElement(s,o(o({ref:e},u),{},{components:r})):n.createElement(s,o({ref:e},u))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9722:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={id:"ble_battery",title:"\u30d0\u30c3\u30c6\u30ea\u30fc",sidebar_label:"\u30d0\u30c3\u30c6\u30ea\u30fc",original_id:"ble_battery"},p=void 0,c={unversionedId:"ble_battery",id:"version-2.2.0/ble_battery",isDocsHomePage:!1,title:"\u30d0\u30c3\u30c6\u30ea\u30fc",description:"\u30ad\u30e5\u30fc\u30d6\u306e\u30d0\u30c3\u30c6\u30ea\u30fc\u6b8b\u91cf\u306f\u4ee5\u4e0b\u306e\u7279\u6027\uff08characteristic\uff09\u3092\u4f7f\u3046\u3053\u3068\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002",source:"@site/versioned_docs/version-2.2.0/battery.md",sourceDirName:".",slug:"/ble_battery",permalink:"/toio-spec/docs/2.2.0/ble_battery",tags:[],version:"2.2.0",frontMatter:{id:"ble_battery",title:"\u30d0\u30c3\u30c6\u30ea\u30fc",sidebar_label:"\u30d0\u30c3\u30c6\u30ea\u30fc",original_id:"ble_battery"},sidebar:"version-2.2.0/docs",previous:{title:"\u30dc\u30bf\u30f3",permalink:"/toio-spec/docs/2.2.0/ble_button"},next:{title:"\ud83d\udd04 \u30e2\u30fc\u30bf\u30fc",permalink:"/toio-spec/docs/2.2.0/ble_motor"}},u=[{value:"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c",id:"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c",children:[]},{value:"\u901a\u77e5",id:"\u901a\u77e5",children:[]}],d={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u30d0\u30c3\u30c6\u30ea\u30fc\u6b8b\u91cf\u306f\u4ee5\u4e0b\u306e\u7279\u6027\uff08characteristic\uff09\u3092\u4f7f\u3046\u3053\u3068\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5024"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Characteristic UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"10B20108-5B3B-4571-9508-CF3EFCD7BBAE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#%E8%AA%AD%E3%81%BF%E5%87%BA%E3%81%97%E6%93%8D%E4%BD%9C"},"Read"),", ",(0,l.kt)("a",{parentName:"td",href:"#%E9%80%9A%E7%9F%A5"},"Notify"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Descriptor"),(0,l.kt)("td",{parentName:"tr",align:null},"Battery Information")))),(0,l.kt)("h2",{id:"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c"},"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c"),(0,l.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u30d0\u30c3\u30c6\u30ea\u30fc\u6b8b\u91cf\u3092\u4ee5\u4e0b\u306b\u793a\u3059\u69cb\u6210\u306e\u30c7\u30fc\u30bf\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30d0\u30c3\u30c6\u30ea\u30fc\u6b8b\u91cf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x50"),"\uff0880 \u30d1\u30fc\u30bb\u30f3\u30c8\uff09")))),(0,l.kt)("h4",{id:"\u30d0\u30c3\u30c6\u30ea\u30fc\u6b8b\u91cf"},"\u30d0\u30c3\u30c6\u30ea\u30fc\u6b8b\u91cf"),(0,l.kt)("p",null,"\u30d0\u30c3\u30c6\u30ea\u30fc\u6b8b\u91cf\u306f 0 \u304b\u3089 100 \u307e\u3067\u306e\u7bc4\u56f2\u3092 10 \u523b\u307f\u3067\u53d6\u5f97\u53ef\u80fd\u3067\u3059\u3002\u5358\u4f4d\u306f\u30d1\u30fc\u30bb\u30f3\u30c8\u3067\u3059\u3002"),(0,l.kt)("h2",{id:"\u901a\u77e5"},"\u901a\u77e5"),(0,l.kt)("p",null,"\u7d04 5 \u79d2\u9593\u9694\u3067\u3001\u3053\u306e\u7279\u6027\u306f BLE \u30bb\u30f3\u30c8\u30e9\u30eb\u306b\u60c5\u5831\u3092\u901a\u77e5\u3057\u307e\u3059\u3002\n\u901a\u77e5\u3055\u308c\u308b\u60c5\u5831\u306e\u5185\u5bb9\u3068\u30c7\u30fc\u30bf\u306e\u69cb\u9020\u306f",(0,l.kt)("a",{parentName:"p",href:"#%E8%AA%AD%E3%81%BF%E5%87%BA%E3%81%97%E6%93%8D%E4%BD%9C"},"\u8aad\u307f\u51fa\u3057\u64cd\u4f5c"),"\u3067\u5f97\u3089\u308c\u308b\u3082\u306e\u3068\u540c\u3058\u3067\u3059\u3002"))}m.isMDXComponent=!0}}]);