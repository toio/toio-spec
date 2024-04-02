"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3891],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(n),p=r,h=g["".concat(u,".").concat(p)]||g[p]||d[p]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var a=n(58168),r=n(98587),o=(n(96540),n(15680)),l=["components"],i={id:"how_to_use_cube",title:"How to use the cube",sidebar_label:"How to use the cube"},u=void 0,c={unversionedId:"how_to_use_cube",id:"version-2.3.0/how_to_use_cube",title:"How to use the cube",description:"How to charge",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.3.0/how_to_use_cube.md",sourceDirName:".",slug:"/how_to_use_cube",permalink:"/toio-spec/en/docs/2.3.0/how_to_use_cube",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"how_to_use_cube",title:"How to use the cube",sidebar_label:"How to use the cube"},sidebar:"version-2.3.0/docs",previous:{title:"About this site",permalink:"/toio-spec/en/docs/2.3.0/about"},next:{title:"\ud83d\udd04 How to update",permalink:"/toio-spec/en/docs/2.3.0/how_to_update_cube"}},s={},g=[{value:"How to charge",id:"how-to-charge",level:2},{value:"How to power on and off",id:"how-to-power-on-and-off",level:2},{value:"Auto power off function",id:"auto-power-off-function",level:2},{value:"System state",id:"system-state",level:2},{value:"Checking the remaining battery level",id:"checking-the-remaining-battery-level",level:2}],d={toc:g},p="wrapper";function h(e){var t=e.components,i=(0,r.A)(e,l);return(0,o.yg)(p,(0,a.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"how-to-charge"},"How to charge"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"How to charge",src:n(18667).A,width:"555",height:"314"})),(0,o.yg)("p",null,"The cube can be charged by placing it on the console charger or the charger for toio Core Cube. For detailed instructions and how to check the remaining battery level of the cube, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://toio.io/manual"},"manuals"),"."),(0,o.yg)("h2",{id:"how-to-power-on-and-off"},"How to power on and off"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"How to power on off",src:n(27221).A,width:"555",height:"275"})),(0,o.yg)("p",null,"There is a power button on the bottom of the cube. Press the power button to turn on the cube.\nPressing and holding the power button turns it off."),(0,o.yg)("h2",{id:"auto-power-off-function"},"Auto power off function"),(0,o.yg)("p",null,"Communication with the cube is done via Bluetooth Low Energy (BLE). If the cube is not connected to any other device via BLE for 15 minutes, it will automatically turn off. An audible alert will also sound every 3 minutes while the cube is not connected to another device via BLE."),(0,o.yg)("p",null,"For more information on communication with the cube, please see ",(0,o.yg)("a",{parentName:"p",href:"/toio-spec/en/docs/2.3.0/ble_communication_overview#communication-with-the-cube"},"Communication Overview - Communication with the cube"),"."),(0,o.yg)("h2",{id:"system-state"},"System state"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Indicator of cube",src:n(83446).A,width:"555",height:"174"})),(0,o.yg)("p",null,"The state of the cube's system is notified through colors of the indicator and sound alerts. The different states are as follows."),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"cube state"),(0,o.yg)("th",{parentName:"tr",align:null},"Indicator"),(0,o.yg)("th",{parentName:"tr",align:null},"Audible alert"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Startup"),(0,o.yg)("td",{parentName:"tr",align:null},"Flashes once in red, blue, green, then white"),(0,o.yg)("td",{parentName:"tr",align:null},"\u25cb With audible alert")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Connecting"),(0,o.yg)("td",{parentName:"tr",align:null},"Flashes in blue"),(0,o.yg)("td",{parentName:"tr",align:null},"No audible alert")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Connected"),(0,o.yg)("td",{parentName:"tr",align:null},"Indicator turns off"),(0,o.yg)("td",{parentName:"tr",align:null},"\u25cb With audible alert")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Disconnected"),(0,o.yg)("td",{parentName:"tr",align:null},"Indicator turns off"),(0,o.yg)("td",{parentName:"tr",align:null},"\u25cb With audible alert")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Shutdown"),(0,o.yg)("td",{parentName:"tr",align:null},"Indicator turns off"),(0,o.yg)("td",{parentName:"tr",align:null},"\u25cb With audible alert")))),(0,o.yg)("h2",{id:"checking-the-remaining-battery-level"},"Checking the remaining battery level"),(0,o.yg)("p",null,"When the power button is pressed while the cube is on, the approximate remaining battery level is indicated through the color of the indicator and audible alerts. The remaining battery level and the corresponding condition of the indicator are shown below. Audible alerts are sounded as the indicator flashes."),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Remaining battery level"),(0,o.yg)("th",{parentName:"tr",align:null},"Indicator"),(0,o.yg)("th",{parentName:"tr",align:null},"Audible alert"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Battery level is sufficient"),(0,o.yg)("td",{parentName:"tr",align:null},"Flashes in green three times"),(0,o.yg)("td",{parentName:"tr",align:null},"Sounds three times as the indicator flashes")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Battery level is low"),(0,o.yg)("td",{parentName:"tr",align:null},"Flashes in yellow twice"),(0,o.yg)("td",{parentName:"tr",align:null},"Sounds twice as the indicator flashes")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Almost no battery left"),(0,o.yg)("td",{parentName:"tr",align:null},"Flashes in red once"),(0,o.yg)("td",{parentName:"tr",align:null},"Sounds once with each flash of the indicator")))))}h.isMDXComponent=!0},18667:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cube_basics_charging-ee7af35b59ee1f45e4fb8f154fde1b89.svg"},83446:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cube_basics_light-326e8d870ef61886f4c0e89d49da3272.svg"},27221:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cube_basics_power_on_off-16ad212a37d733ec6cb6c5df5b1bf91c.svg"}}]);