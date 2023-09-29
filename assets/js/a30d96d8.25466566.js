"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[185],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4243:(e,t,r)=>{r.d(t,{E:()=>i});var n=r(7462),a=r(4996),o=r(6227),l=r(7294),i=function(e){var t=e.props,r=(0,l.useRef)(),i=(0,a.Z)("/model/toiocorecube_v003.gltf"),c=(0,o.L)(i),s=c.nodes,d=c.materials;return l.createElement("group",(0,n.Z)({ref:r,rotation:[Math.PI/2,0,Math.PI/2]},t,{dispose:null}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_1.geometry,material:d.base}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_2.geometry,material:d.camera}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_3.geometry,material:d.tire}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_4.geometry,material:d.button}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_5.geometry,material:d.pin}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_6.geometry,material:d.logo}))}},5304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>B,contentTitle:()=>C,default:()=>R,frontMatter:()=>N,metadata:()=>M,toc:()=>I});var n,a,o=r(7462),l=r(3366),i=r(7294),c=r(3905),s=r(4996),d=["title","titleId"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u=function(e){var t=e.title,r=e.titleId,o=m(e,d);return i.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":r},o),t?i.createElement("title",{id:r},t):null,n||(n=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),a||(a=i.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})))};var f={button:"button button--outline button--primary",dropdown:"dropdown__link"},v=function(e){var t=e.type,r=void 0===t?"button":t,n=e.label,a=e.fileUrl,o="button"===r;return i.createElement("a",{className:f[r],style:o?{display:"flex",justifyContent:"center",alignItems:"center"}:{},href:a,download:!0,onClick:function(){"function"==typeof gtag&&gtag("event","download",{download_label:n,download_file_url:a,download_from:location.href})}},n,o&&i.createElement(u,{fill:"currentColor",style:{marginLeft:8,width:"1.5em",height:"1.5em"}}))};const b="buttonGroupSimple_tA6n",h="buttonGroupDropdown__sEl";var g=[{label:"FBX",path:"/model/toiocorecube_v003.fbx"},{label:"OBJ",path:"/model/toiocorecube_v003.obj.zip"},{label:"GLTF",path:"/model/toiocorecube_v003.gltf"},{label:"STL",path:"/model/toiocorecube_v001.stl"},{label:"STP",path:"/model/toiocorecube_v001.stp"}],w=function(){return i.createElement(i.Fragment,null,i.createElement("div",{className:h},i.createElement(E,null)),i.createElement("div",{className:b},i.createElement(y,null)))},y=function(){return i.createElement("div",{className:"button-group--block",style:{gap:8,flexWrap:"wrap"}},g.map((function(e){var t=e.label,r=e.path;return i.createElement(v,{key:"key-button-"+t,label:t,fileUrl:(0,s.Z)(r)})})))},E=function(){return i.createElement("div",{className:"dropdown dropdown--hoverable"},i.createElement("button",{className:"button button--primary"},"Select Type"),i.createElement("ul",{className:"dropdown__menu"},g.map((function(e){var t=e.label,r=e.path;return i.createElement("li",{key:"key-dropdown-"+t},i.createElement(v,{type:"dropdown",label:t,fileUrl:(0,s.Z)(r)}))}))))},_=r(1262),k=r(8354),O=r(8274),j=r(6170),S=r(5495),x=r(3602),z=r(819);const D=i.forwardRef((({makeDefault:e,camera:t,regress:r,domElement:n,enableDamping:a=!0,keyEvents:l=!1,onChange:c,onStart:s,onEnd:d,...p},m)=>{const u=(0,x.z)((e=>e.invalidate)),f=(0,x.z)((e=>e.camera)),v=(0,x.z)((e=>e.gl)),b=(0,x.z)((e=>e.events)),h=(0,x.z)((e=>e.setEvents)),g=(0,x.z)((e=>e.set)),w=(0,x.z)((e=>e.get)),y=(0,x.z)((e=>e.performance)),E=t||f,_=n||b.connected||v.domElement,k=i.useMemo((()=>new z.zxs(E)),[E]);return(0,x.A)((()=>{k.enabled&&k.update()}),-1),i.useEffect((()=>(l&&k.connect(!0===l?_:l),k.connect(_),()=>{k.dispose()})),[l,_,r,k,u]),i.useEffect((()=>{const e=e=>{u(),r&&y.regress(),c&&c(e)},t=e=>{s&&s(e)},n=e=>{d&&d(e)};return k.addEventListener("change",e),k.addEventListener("start",t),k.addEventListener("end",n),()=>{k.removeEventListener("start",t),k.removeEventListener("end",n),k.removeEventListener("change",e)}}),[c,s,d,k,u,h]),i.useEffect((()=>{if(e){const e=w().controls;return g({controls:k}),()=>g({controls:e})}}),[e,k]),i.createElement("primitive",(0,o.Z)({ref:m,object:k,enableDamping:a},p))}));var P=r(5029),Z=r(4243),L=function(){var e=.025;return i.createElement(_.Z,{fallback:null},(function(){var t=window.navigator.userAgent.toLowerCase(),r=-1!==t.indexOf("iphone")||-1!==t.indexOf("ipad");return i.createElement(P.Xz,{shadows:!0,resize:{polyfill:k.do}},i.createElement("color",{attach:"background",args:["#999"]}),i.createElement(i.Suspense,{fallback:null},i.createElement(Z.E,null),i.createElement(O.j,{opacity:.2,scale:.05,blur:2,far:.01}),i.createElement(j.qA,{preset:"city"})),i.createElement(S.c,{makeDefault:!0,position:[0,.03,.06],near:.01}),i.createElement("ambientLight",{intensity:.8/3}),i.createElement("spotLight",{penumbra:1,position:[e,.05,e],intensity:1.6,castShadow:!0}),i.createElement("pointLight",{position:[-.05,-.0125,-.05],intensity:.8}),i.createElement(D,{enablePan:!1,enableZoom:!r,enableRotate:!r,autoRotate:!r,minDistance:.035,maxDistance:.5,target:[0,.01,0]}))}))},T=["components"],N={id:"hardware_shape",title:"\u5f62\u72b6\u30fb\u30b5\u30a4\u30ba",sidebar_label:"\ud83d\udd04 \u5f62\u72b6\u30fb\u30b5\u30a4\u30ba",original_id:"hardware_shape"},C=void 0,M={unversionedId:"hardware_shape",id:"version-2.3.0/hardware_shape",title:"\u5f62\u72b6\u30fb\u30b5\u30a4\u30ba",description:"\u30ad\u30e5\u30fc\u30d6\u306e\u5f62\u72b6\u304a\u3088\u3073\u30b5\u30a4\u30ba\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002\u5358\u4f4d\u306f\u5168\u3066\u30df\u30ea\u30e1\u30fc\u30c8\u30eb\u3067\u3059\u3002",source:"@site/versioned_docs/version-2.3.0/hardware_shape.mdx",sourceDirName:".",slug:"/hardware_shape",permalink:"/toio-spec/docs/hardware_shape",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"hardware_shape",title:"\u5f62\u72b6\u30fb\u30b5\u30a4\u30ba",sidebar_label:"\ud83d\udd04 \u5f62\u72b6\u30fb\u30b5\u30a4\u30ba",original_id:"hardware_shape"},sidebar:"version-2.3.0/docs",previous:{title:"\u5404\u90e8\u306e\u540d\u524d",permalink:"/toio-spec/docs/hardware_components"},next:{title:"\ud83d\udd04 \u5404\u7a2e\u6027\u80fd",permalink:"/toio-spec/docs/hardware_other"}},B={},I=[{value:'3D \u30c7\u30fc\u30bf <span class="new"/>',id:"3d-\u30c7\u30fc\u30bf-",level:2},{value:'\u30de\u30a6\u30f3\u30c8\u5f62\u72b6 <span class="update"/>',id:"\u30de\u30a6\u30f3\u30c8\u5f62\u72b6-",level:2},{value:"\u5074\u9762",id:"\u5074\u9762",level:2},{value:"\u5e95\u9762",id:"\u5e95\u9762",level:2}],A={toc:I},H="wrapper";function R(e){var t=e.components,n=(0,l.Z)(e,T);return(0,c.kt)(H,(0,o.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u5f62\u72b6\u304a\u3088\u3073\u30b5\u30a4\u30ba\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002\u5358\u4f4d\u306f\u5168\u3066\u30df\u30ea\u30e1\u30fc\u30c8\u30eb\u3067\u3059\u3002"),(0,c.kt)("h2",{id:"3d-\u30c7\u30fc\u30bf-"},"3D \u30c7\u30fc\u30bf ",(0,c.kt)("span",{class:"new"})),(0,c.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u5916\u5f62\u5f62\u72b6\u306f\u4ee5\u4e0b\u3088\u308a\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u53ef\u80fd\u3067\u3059\u3002"),(0,c.kt)(w,{mdxType:"ModelDownloadButtonGroup"}),(0,c.kt)("div",{style:{aspectRatio:"4 / 2",margin:"1rem 0"}},(0,c.kt)(L,{mdxType:"Cube3DView"})),(0,c.kt)("admonition",{type:"note"},(0,c.kt)("p",{parentName:"admonition"},"\u30ad\u30e5\u30fc\u30d6\u306e 3D \u30c7\u30fc\u30bf\u306f",(0,c.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nd/4.0/"},"\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u30fb\u30b3\u30e2\u30f3\u30ba \u8868\u793a-\u6539\u5909\u7981\u6b62 4.0 \u56fd\u969b \u30d1\u30d6\u30ea\u30c3\u30af\u30fb\u30e9\u30a4\u30bb\u30f3\u30b9"),"\u3067\u30e9\u30a4\u30bb\u30f3\u30b9\u3055\u308c\u307e\u3059\u3002\u8a73\u3057\u304f\u306f",(0,c.kt)("a",{parentName:"p",href:"/toio-spec/docs/about#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9"},"\u3053\u3061\u3089"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,c.kt)("h2",{id:"\u30de\u30a6\u30f3\u30c8\u5f62\u72b6-"},"\u30de\u30a6\u30f3\u30c8\u5f62\u72b6 ",(0,c.kt)("span",{class:"update"})),(0,c.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u4e0a\u9762\u306e\u7a81\u8d77\u306f\u4e00\u822c\u7684\u306a\u30d6\u30ed\u30c3\u30af\u304c\u63a5\u7d9a\u53ef\u80fd\u3067\u3059\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Hardware size of the mount",src:r(7661).Z,width:"287",height:"147"})),(0,c.kt)("h2",{id:"\u5074\u9762"},"\u5074\u9762"),(0,c.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u672c\u4f53\u304a\u3088\u3073\u30c8\u30c3\u30d7\u30d7\u30ec\u30fc\u30c8\u3092\u4ed8\u3051\u305f\u5834\u5408\u306e\u5074\u9762\u304b\u3089\u898b\u305f\u30b5\u30a4\u30ba\u306f\u4ee5\u4e0b\u306e\u56f3\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Hardware size in side view",src:r(5108).Z,width:"555",height:"203"})),(0,c.kt)("h2",{id:"\u5e95\u9762"},"\u5e95\u9762"),(0,c.kt)("p",null,"\u30ad\u30e5\u30fc\u30d6\u5e95\u9762\u306e\u5404\u90e8\u306e\u914d\u7f6e\u306f\u4ee5\u4e0b\u306e\u56f3\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Hardware size in bottom view",src:r(7027).Z,width:"555",height:"301"})))}R.isMDXComponent=!0},7027:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardware_size_bottom_view-86afd5cac0407d7d60c599ea1411a8ef.svg"},7661:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardware_size_mount-3cf1b1bb2f8c5fcef15e1a1b5b9f7462.svg"},5108:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hardware_size_side_view-871afc7e9cfa79169f5d2b15f8f36a0f.svg"}}]);