"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[282],{47481:(e,t,a)=>{a.d(t,{Q:()=>p});var r=a(78478),o=a(67806),n=a(12187),l=a(60707),i=a(9655),c=a(83968),s=a(78113),d=a(96540),m=a(42658),p=function(){var e=.025;return d.createElement(r.A,{fallback:null},(function(){var t=window.navigator.userAgent.toLowerCase(),a=-1!==t.indexOf("iphone")||-1!==t.indexOf("ipad");return d.createElement(s.Hl,{shadows:!0,resize:{polyfill:o.tb}},d.createElement("color",{attach:"background",args:["#999"]}),d.createElement(d.Suspense,{fallback:null},d.createElement(m.j,null),d.createElement(n._,{opacity:.2,scale:.05,blur:2,far:.01}),d.createElement(l.OH,{preset:"city"})),d.createElement(i.u,{makeDefault:!0,position:[0,.03,.06],near:.01}),d.createElement("ambientLight",{intensity:.8/3}),d.createElement("spotLight",{penumbra:1,position:[e,.05,e],intensity:1.6,castShadow:!0}),d.createElement("pointLight",{position:[-.05,-.0125,-.05],intensity:.8}),d.createElement(c.N,{enablePan:!1,enableZoom:!a,enableRotate:!a,autoRotate:!a,minDistance:.035,maxDistance:.5,target:[0,.01,0]}))}))}},42658:(e,t,a)=>{a.d(t,{j:()=>i});var r=a(58168),o=a(86025),n=a(6293),l=a(96540),i=function(e){var t=e.props,a=(0,l.useRef)(),i=(0,o.A)("/model/toiocorecube_v003.gltf"),c=(0,n.p)(i),s=c.nodes,d=c.materials;return l.createElement("group",(0,r.A)({ref:a,rotation:[Math.PI/2,0,Math.PI/2]},t,{dispose:null}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_1.geometry,material:d.base}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_2.geometry,material:d.camera}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_3.geometry,material:d.tire}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_4.geometry,material:d.button}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_5.geometry,material:d.pin}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:s.toiocorecube_v003_6.geometry,material:d.logo}))}},79352:(e,t,a)=>{a.d(t,{L:()=>b});var r,o,n=a(86025),l=a(96540),i=["title","titleId"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const d=function(e){var t=e.title,a=e.titleId,n=s(e,i);return l.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":a},n),t?l.createElement("title",{id:a},t):null,r||(r=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),o||(o=l.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})))};var m={button:"button button--outline button--primary",dropdown:"dropdown__link"},p=function(e){var t=e.type,a=void 0===t?"button":t,r=e.label,o=e.fileUrl,n="button"===a;return l.createElement("a",{className:m[a],style:n?{display:"flex",justifyContent:"center",alignItems:"center"}:{},href:o,download:!0,onClick:function(){"function"==typeof gtag&&gtag("event","download",{download_label:r,download_file_url:o,download_from:location.href})}},r,n&&l.createElement(d,{fill:"currentColor",style:{marginLeft:8,width:"1.5em",height:"1.5em"}}))};const u="buttonGroupSimple_tA6n",h="buttonGroupDropdown__sEl";var g=[{label:"FBX",path:"/model/toiocorecube_v003.fbx"},{label:"OBJ",path:"/model/toiocorecube_v003.obj.zip"},{label:"GLTF",path:"/model/toiocorecube_v003.gltf"},{label:"STL",path:"/model/toiocorecube_v001.stl"},{label:"STP",path:"/model/toiocorecube_v001.stp"}],b=function(){return l.createElement(l.Fragment,null,l.createElement("div",{className:h},l.createElement(y,null)),l.createElement("div",{className:u},l.createElement(v,null)))},v=function(){return l.createElement("div",{className:"button-group--block",style:{gap:8,flexWrap:"wrap"}},g.map((function(e){var t=e.label,a=e.path;return l.createElement(p,{key:"key-button-"+t,label:t,fileUrl:(0,n.A)(a)})})))},y=function(){return l.createElement("div",{className:"dropdown dropdown--hoverable"},l.createElement("button",{className:"button button--primary"},"Select Type"),l.createElement("ul",{className:"dropdown__menu"},g.map((function(e){var t=e.label,a=e.path;return l.createElement("li",{key:"key-dropdown-"+t},l.createElement(p,{type:"dropdown",label:t,fileUrl:(0,n.A)(a)}))}))))}},74221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var r=a(58168),o=a(98587),n=(a(96540),a(15680)),l=a(79352),i=a(47481),c=["components"],s={id:"hardware_shape",title:"\u5f62\u72b6\u30fb\u30b5\u30a4\u30ba",sidebar_label:"\ud83d\udd04 \u5f62\u72b6\u30fb\u30b5\u30a4\u30ba",original_id:"hardware_shape"},d=void 0,m={unversionedId:"hardware_shape",id:"version-2.3.0/hardware_shape",title:"\u5f62\u72b6\u30fb\u30b5\u30a4\u30ba",description:"\u30ad\u30e5\u30fc\u30d6\u306e\u5f62\u72b6\u304a\u3088\u3073\u30b5\u30a4\u30ba\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002\u5358\u4f4d\u306f\u5168\u3066\u30df\u30ea\u30e1\u30fc\u30c8\u30eb\u3067\u3059\u3002",source:"@site/versioned_docs/version-2.3.0/hardware_shape.mdx",sourceDirName:".",slug:"/hardware_shape",permalink:"/toio-spec/docs/2.3.0/hardware_shape",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"hardware_shape",title:"\u5f62\u72b6\u30fb\u30b5\u30a4\u30ba",sidebar_label:"\ud83d\udd04 \u5f62\u72b6\u30fb\u30b5\u30a4\u30ba",original_id:"hardware_shape"},sidebar:"version-2.3.0/docs",previous:{title:"\u5404\u90e8\u306e\u540d\u524d",permalink:"/toio-spec/docs/2.3.0/hardware_components"},next:{title:"\ud83d\udd04 \u5404\u7a2e\u6027\u80fd",permalink:"/toio-spec/docs/2.3.0/hardware_other"}},p={},u=[{value:'3D \u30c7\u30fc\u30bf <span class="new"/>',id:"3d-\u30c7\u30fc\u30bf-",level:2},{value:'\u30de\u30a6\u30f3\u30c8\u5f62\u72b6 <span class="update"/>',id:"\u30de\u30a6\u30f3\u30c8\u5f62\u72b6-",level:2},{value:"\u5074\u9762",id:"\u5074\u9762",level:2},{value:"\u5e95\u9762",id:"\u5e95\u9762",level:2}],h={toc:u},g="wrapper";function b(e){var t=e.components,s=(0,o.A)(e,c);return(0,n.yg)(g,(0,r.A)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u5f62\u72b6\u304a\u3088\u3073\u30b5\u30a4\u30ba\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002\u5358\u4f4d\u306f\u5168\u3066\u30df\u30ea\u30e1\u30fc\u30c8\u30eb\u3067\u3059\u3002"),(0,n.yg)("h2",{id:"3d-\u30c7\u30fc\u30bf-"},"3D \u30c7\u30fc\u30bf ",(0,n.yg)("span",{class:"new"})),(0,n.yg)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u5916\u5f62\u5f62\u72b6\u306f\u4ee5\u4e0b\u3088\u308a\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u53ef\u80fd\u3067\u3059\u3002"),(0,n.yg)(l.L,{mdxType:"ModelDownloadButtonGroup"}),(0,n.yg)("div",{style:{aspectRatio:"4 / 2",margin:"1rem 0"}},(0,n.yg)(i.Q,{mdxType:"Cube3DView"})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"\u30ad\u30e5\u30fc\u30d6\u306e 3D \u30c7\u30fc\u30bf\u306f",(0,n.yg)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nd/4.0/"},"\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u30fb\u30b3\u30e2\u30f3\u30ba \u8868\u793a-\u6539\u5909\u7981\u6b62 4.0 \u56fd\u969b \u30d1\u30d6\u30ea\u30c3\u30af\u30fb\u30e9\u30a4\u30bb\u30f3\u30b9"),"\u3067\u30e9\u30a4\u30bb\u30f3\u30b9\u3055\u308c\u307e\u3059\u3002\u8a73\u3057\u304f\u306f",(0,n.yg)("a",{parentName:"p",href:"/toio-spec/docs/2.3.0/about#%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9"},"\u3053\u3061\u3089"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,n.yg)("h2",{id:"\u30de\u30a6\u30f3\u30c8\u5f62\u72b6-"},"\u30de\u30a6\u30f3\u30c8\u5f62\u72b6 ",(0,n.yg)("span",{class:"update"})),(0,n.yg)("p",null,"\u30ad\u30e5\u30fc\u30d6\u306e\u4e0a\u9762\u306e\u7a81\u8d77\u306f\u4e00\u822c\u7684\u306a\u30d6\u30ed\u30c3\u30af\u304c\u63a5\u7d9a\u53ef\u80fd\u3067\u3059\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Hardware size of the mount",src:a(23254).A,width:"287",height:"147"})),(0,n.yg)("h2",{id:"\u5074\u9762"},"\u5074\u9762"),(0,n.yg)("p",null,"\u30ad\u30e5\u30fc\u30d6\u672c\u4f53\u304a\u3088\u3073\u30c8\u30c3\u30d7\u30d7\u30ec\u30fc\u30c8\u3092\u4ed8\u3051\u305f\u5834\u5408\u306e\u5074\u9762\u304b\u3089\u898b\u305f\u30b5\u30a4\u30ba\u306f\u4ee5\u4e0b\u306e\u56f3\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Hardware size in side view",src:a(37938).A,width:"555",height:"203"})),(0,n.yg)("h2",{id:"\u5e95\u9762"},"\u5e95\u9762"),(0,n.yg)("p",null,"\u30ad\u30e5\u30fc\u30d6\u5e95\u9762\u306e\u5404\u90e8\u306e\u914d\u7f6e\u306f\u4ee5\u4e0b\u306e\u56f3\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Hardware size in bottom view",src:a(11702).A,width:"555",height:"301"})))}b.isMDXComponent=!0},11702:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/hardware_size_bottom_view-86afd5cac0407d7d60c599ea1411a8ef.svg"},23254:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/hardware_size_mount-3cf1b1bb2f8c5fcef15e1a1b5b9f7462.svg"},37938:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/hardware_size_side_view-871afc7e9cfa79169f5d2b15f8f36a0f.svg"}}]);