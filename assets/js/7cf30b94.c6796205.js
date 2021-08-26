"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,k=d["".concat(c,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8730:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"ble_how_to_communicate",title:"\u6a5f\u80fd\u306e\u5229\u7528",sidebar_label:"\u6a5f\u80fd\u306e\u5229\u7528",original_id:"ble_how_to_communicate"},c=void 0,p={unversionedId:"ble_how_to_communicate",id:"version-2.1.0/ble_how_to_communicate",isDocsHomePage:!1,title:"\u6a5f\u80fd\u306e\u5229\u7528",description:"\u30ad\u30e5\u30fc\u30d6\u306e\u5404\u7a2e\u6a5f\u80fd\u306f\u7279\u6027\uff08characteristic\uff09\u3092\u4f7f\u3046\u3053\u3068\u3067\u60c5\u5831\u306e\u53d6\u5f97\u3084\u5236\u5fa1\u304c\u3067\u304d\u307e\u3059\u3002\u5404\u7279\u6027\u306f\u300c\u66f8\u304d\u8fbc\u307f\uff08Write\uff09\u300d\u3084\u300c\u8aad\u307f\u51fa\u3057\uff08Read\uff09\u300d\u300c\u901a\u77e5\uff08Notify\uff09\u300d\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u3044\u305a\u308c\u304b\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u305d\u308c\u305e\u308c\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u4f7f\u3044\u5206\u3051\u307e\u3059\u3002",source:"@site/versioned_docs/version-2.1.0/how_to_communicate.md",sourceDirName:".",slug:"/ble_how_to_communicate",permalink:"/toio-spec/docs/2.1.0/ble_how_to_communicate",version:"2.1.0",frontMatter:{id:"ble_how_to_communicate",title:"\u6a5f\u80fd\u306e\u5229\u7528",sidebar_label:"\u6a5f\u80fd\u306e\u5229\u7528",original_id:"ble_how_to_communicate"},sidebar:"version-2.1.0/docs",previous:{title:"\u901a\u4fe1\u6982\u8981",permalink:"/toio-spec/docs/2.1.0/ble_communication_overview"},next:{title:"\ud83d\udd04 \u8aad\u307f\u53d6\u308a\u30bb\u30f3\u30b5\u30fc",permalink:"/toio-spec/docs/2.1.0/ble_id"}},u=[{value:"\u30c7\u30fc\u30bf\u69cb\u9020\u306e\u8868\u8a18",id:"\u30c7\u30fc\u30bf\u69cb\u9020\u306e\u8868\u8a18",children:[]},{value:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc",id:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u5404\u7a2e\u6a5f\u80fd\u306f\u7279\u6027\uff08characteristic\uff09\u3092\u4f7f\u3046\u3053\u3068\u3067\u60c5\u5831\u306e\u53d6\u5f97\u3084\u5236\u5fa1\u304c\u3067\u304d\u307e\u3059\u3002\u5404\u7279\u6027\u306f\u300c\u66f8\u304d\u8fbc\u307f\uff08Write\uff09\u300d\u3084\u300c\u8aad\u307f\u51fa\u3057\uff08Read\uff09\u300d\u300c\u901a\u77e5\uff08Notify\uff09\u300d\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u3044\u305a\u308c\u304b\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u305d\u308c\u305e\u308c\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u4f7f\u3044\u5206\u3051\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f7f\u3044\u65b9"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u66f8\u304d\u8fbc\u307f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7279\u6027\u306b\u30c7\u30fc\u30bf\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u3067\u3001\u30c7\u30fc\u30bf\u306e\u5185\u5bb9\u306b\u57fa\u3065\u3044\u3066\u30ad\u30e5\u30fc\u30d6\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8aad\u307f\u51fa\u3057"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7279\u6027\u304b\u3089\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u3060\u3059\u3053\u3068\u3067\u3001\u30c7\u30fc\u30bf\u306b\u542b\u307e\u308c\u308b\u30ad\u30e5\u30fc\u30d6\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u77e5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u300c\u8aad\u307f\u51fa\u3057\u300d\u3067\u53d6\u5f97\u3067\u304d\u308b\u60c5\u5831\u306f\u300c\u901a\u77e5\u300d\u306b\u3088\u3063\u3066\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")))),(0,l.kt)("h2",{id:"\u30c7\u30fc\u30bf\u69cb\u9020\u306e\u8868\u8a18"},"\u30c7\u30fc\u30bf\u69cb\u9020\u306e\u8868\u8a18"),(0,l.kt)("p",null,"\u300c\u66f8\u304d\u8fbc\u307f\u300d\u300c\u8aad\u307f\u51fa\u3057\u300d\u300c\u901a\u77e5\u300d\u3067\u6271\u3046\u30c7\u30fc\u30bf\u306e\u69cb\u9020\u306b\u3064\u3044\u3066\u306f\n\u6b21\u30da\u30fc\u30b8\u4ee5\u964d\u3001\u4ee5\u4e0b\u306e\u5f62\u5f0f\u3067\u500b\u5225\u306b\u89e3\u8aac\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30d7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b")))),(0,l.kt)("h4",{id:"\u30c7\u30fc\u30bf\u4f4d\u7f6e"},"\u30c7\u30fc\u30bf\u4f4d\u7f6e"),(0,l.kt)("p",null,"0 \u304b\u3089\u59cb\u307e\u308b\u30d0\u30c3\u30d5\u30a1\u30fc\u4e0a\u306e\u30c7\u30fc\u30bf\u306e\u4f4d\u7f6e\u3067\u3059\u3002"),(0,l.kt)("h4",{id:"\u30bf\u30a4\u30d7"},"\u30bf\u30a4\u30d7"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u3084",(0,l.kt)("inlineCode",{parentName:"p"},"String"),"\u7b49\u30c7\u30fc\u30bf\u306e\u30bf\u30a4\u30d7\u3067\u3059\u3002\u30d0\u30a4\u30c8\u30aa\u30fc\u30c0\u30fc\u306f\u5168\u3066\u30ea\u30c8\u30eb\u30a8\u30f3\u30c7\u30a3\u30a2\u30f3\u3067\u3059\u3002"),(0,l.kt)("h4",{id:"\u5185\u5bb9"},"\u5185\u5bb9"),(0,l.kt)("p",null,"\u30c7\u30fc\u30bf\u306e\u5185\u5bb9\u3092\u30c6\u30ad\u30b9\u30c8\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"\u4f8b"},"\u4f8b"),(0,l.kt)("p",null,"\u5177\u4f53\u7684\u306a\u4f8b\u3092\u4ee5\u4e0b\u306e\u30b9\u30bf\u30a4\u30eb\u3067\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("code",null,"0x00")),": \u56fa\u5b9a\u30c7\u30fc\u30bf\uff08\u3053\u306e\u5024\u4ee5\u5916\u306f\u7121\u52b9 or \u3053\u306e\u5024\u4ee5\u5916\u5b58\u5728\u3057\u306a\u3044\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0x00"),": \u56fa\u5b9a\u3067\u306a\u3044\u30c7\u30fc\u30bf\u306e\u4e00\u4f8b")),(0,l.kt)("h2",{id:"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc"},"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc"),(0,l.kt)("p",null,"\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306b\u304a\u3044\u3066\u3001\u6b21\u306e\u3088\u3046\u306a\u5834\u5408\u306f\u30a8\u30e9\u30fc\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002\n\u30a8\u30e9\u30fc\u306e\u5834\u5408\u3001\u66f8\u304d\u8fbc\u307f\u64cd\u4f5c\u306f\u7834\u68c4\u3055\u308c\u3066\u30ad\u30e5\u30fc\u30d6\u306e\u52d5\u4f5c\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u305b\u3093\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u5168\u4f53\u306e\u9577\u3055\u304c\u898f\u5b9a\u3057\u305f\u9577\u3055\u3068\u7570\u306a\u308b\u5834\u5408"),(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u306e\u5024\u304c\u898f\u5b9a\u3057\u305f\u7bc4\u56f2\u304b\u3089\u5916\u308c\u3066\u3044\u308b\u5834\u5408")),(0,l.kt)("p",null,"\u3053\u306e\u4ed6\u306b\u3082\u30a8\u30e9\u30fc\u30b1\u30fc\u30b9\u304c\u3042\u308b\u5834\u5408\u306f\u7279\u6027\u3054\u3068\u306b\u6ce8\u610f\u4e8b\u9805\u3068\u3057\u3066\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"))}d.isMDXComponent=!0}}]);