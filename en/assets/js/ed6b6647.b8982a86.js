"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3742],{4243:(e,t,a)=>{a.d(t,{E:()=>l});var o=a(7462),n=a(4996),r=a(6882),i=a(7294),l=function(e){var t=e.props,a=(0,i.useRef)(),l=(0,n.Z)("/model/toiocorecube_v003.gltf"),s=(0,r.L)(l),c=s.nodes,d=s.materials;return i.createElement("group",(0,o.Z)({ref:a,rotation:[Math.PI/2,0,Math.PI/2]},t,{dispose:null}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.toiocorecube_v003_1.geometry,material:d.base}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.toiocorecube_v003_2.geometry,material:d.camera}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.toiocorecube_v003_3.geometry,material:d.tire}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.toiocorecube_v003_4.geometry,material:d.button}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.toiocorecube_v003_5.geometry,material:d.pin}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:c.toiocorecube_v003_6.geometry,material:d.logo}))}},6461:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>D,default:()=>j,frontMatter:()=>Z,metadata:()=>O,toc:()=>P});var o,n,r=a(7462),i=a(3366),l=a(7294),s=a(3905),c=a(4996),d=a(1852),m=["title","titleId"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},u.apply(this,arguments)}function h(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p=function(e){var t=e.title,a=e.titleId,r=h(e,m);return l.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":a},r),t?l.createElement("title",{id:a},t):null,o||(o=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),n||(n=l.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})))};var b={button:"button button--outline button--primary",dropdown:"dropdown__link"},f=function(e){var t=e.type,a=void 0===t?"button":t,o=e.label,n=e.fileUrl,r="button"===a;return l.createElement("a",{className:b[a],style:r?{display:"flex",justifyContent:"center",alignItems:"center"}:{},href:n,download:!0,onClick:function(){"function"==typeof gtag&&gtag("event","download",{download_label:o,download_file_url:n,download_from:location.href})}},o,r&&l.createElement(p,{fill:"currentColor",style:{marginLeft:8,width:"1.5em",height:"1.5em"}}))},v=[{label:"FBX",path:"/model/toiocorecube_v003.fbx"},{label:"OBJ",path:"/model/toiocorecube_v003.obj.zip"},{label:"GLTF",path:"/model/toiocorecube_v003.gltf"},{label:"STL",path:"/model/toiocorecube_v001.stl"},{label:"STP",path:"/model/toiocorecube_v001.stp"}],w=function(){return(0,d.useMediaQuery)({query:"(max-width: 1130px)"})?l.createElement(k,null):l.createElement(g,null)},g=function(){return l.createElement("div",{className:"button-group--block",style:{gap:8,flexWrap:"wrap"}},v.map((function(e){var t=e.label,a=e.path;return l.createElement(f,{key:"key-button-"+t,label:t,fileUrl:(0,c.Z)(a)})})))},k=function(){return l.createElement("div",{className:"dropdown dropdown--hoverable"},l.createElement("button",{className:"button button--primary"},"Select Type"),l.createElement("ul",{className:"dropdown__menu"},v.map((function(e){var t=e.label,a=e.path;return l.createElement("li",{key:"key-dropdown-"+t},l.createElement(f,{type:"dropdown",label:t,fileUrl:(0,c.Z)(a)}))}))))},y=a(1262),_=a(2109),E=a(52),S=a(7433),z=a(6581),N=a(1764),M=a(4243),x=function(){var e=.025;return l.createElement(y.Z,{fallback:null},(function(){return l.createElement(N.Xz,{shadows:!0},l.createElement("color",{attach:"background",args:["#999"]}),l.createElement(l.Suspense,{fallback:null},l.createElement(M.E,null),l.createElement(_.j,{opacity:.2,scale:.05,blur:2,far:.01}),l.createElement(E.qA,{preset:"city"})),l.createElement(S.c,{makeDefault:!0,position:[0,.03,.06],near:.01}),l.createElement("ambientLight",{intensity:.8/3}),l.createElement("spotLight",{penumbra:1,position:[e,.05,e],intensity:1.6,castShadow:!0}),l.createElement("pointLight",{position:[-.05,-.0125,-.05],intensity:.8}),l.createElement(z.z,{enablePan:!1,enableZoom:!0,enableRotate:!0,autoRotate:!0,minDistance:.035,maxDistance:.5,target:[0,.01,0]}))}))},T=["components"],Z={id:"hardware_shape",title:"Shape and size",sidebar_label:"Shape and size"},D=void 0,O={unversionedId:"hardware_shape",id:"version-2.3.0/hardware_shape",isDocsHomePage:!1,title:"Shape and size",description:"This section introduces the shape and size of the cube. All measurements are in millimeters.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.3.0/hardware_shape.mdx",sourceDirName:".",slug:"/hardware_shape",permalink:"/toio-spec/en/docs/hardware_shape",tags:[],version:"2.3.0",frontMatter:{id:"hardware_shape",title:"Shape and size",sidebar_label:"Shape and size"},sidebar:"version-2.3.0/docs",previous:{title:"Name of each part",permalink:"/toio-spec/en/docs/hardware_components"},next:{title:"Mobility performance",permalink:"/toio-spec/en/docs/hardware_other"}},P=[{value:'3D Model <span class="new"/>',id:"3d-model-",children:[]},{value:'Protruding shapes for block attachment <span class="update"/>',id:"protruding-shapes-for-block-attachment-",children:[]},{value:"Sides",id:"sides",children:[]},{value:"Bottom",id:"bottom",children:[]}],H={toc:P};function j(e){var t=e.components,o=(0,i.Z)(e,T);return(0,s.kt)("wrapper",(0,r.Z)({},H,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section introduces the shape and size of the cube. All measurements are in millimeters."),(0,s.kt)("h2",{id:"3d-model-"},"3D Model ",(0,s.kt)("span",{class:"new"})),(0,s.kt)("p",null,"The 3D model data of the cube is available for download below."),(0,s.kt)(w,{mdxType:"ModelDownloadButtonGroup"}),(0,s.kt)("div",{style:{aspectRatio:"4 / 2",margin:"1rem 0"}},(0,s.kt)(x,{mdxType:"Cube3DView"})),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The 3D model data are licensed under the ",(0,s.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nd/4.0/"},"Creative Commons Attribution-ShareAlike 4.0 International Public License"),". Please check ",(0,s.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/about#license"},"here")," for details."))),(0,s.kt)("h2",{id:"protruding-shapes-for-block-attachment-"},"Protruding shapes for block attachment ",(0,s.kt)("span",{class:"update"})),(0,s.kt)("p",null,"The protrusions on the top of the cube can be used to attach standard toy blocks."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hardware size of the mount",src:a(872).Z})),(0,s.kt)("h2",{id:"sides"},"Sides"),(0,s.kt)("p",null,"The following figure indicates the size of the cube body as seen from the side, including when the top plate is attached."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hardware size in side view",src:a(444).Z})),(0,s.kt)("h2",{id:"bottom"},"Bottom"),(0,s.kt)("p",null,"The layout of the parts on the bottom of the cube is indicated in the figure below."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hardware size in bottom view",src:a(8774).Z})))}j.isMDXComponent=!0},8774:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/hardware_size_bottom_view-86afd5cac0407d7d60c599ea1411a8ef.svg"},872:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/hardware_size_mount-3cf1b1bb2f8c5fcef15e1a1b5b9f7462.svg"},444:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/hardware_size_side_view-871afc7e9cfa79169f5d2b15f8f36a0f.svg"}}]);