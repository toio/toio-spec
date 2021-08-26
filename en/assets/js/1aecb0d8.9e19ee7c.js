"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5707:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>c,toc:()=>s,default:()=>p});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"how_to_use_cube",title:"How to use the cube",sidebar_label:"How to use the cube"},u=void 0,c={unversionedId:"how_to_use_cube",id:"version-2.3.0/how_to_use_cube",isDocsHomePage:!1,title:"How to use the cube",description:"How to charge",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.3.0/how_to_use_cube.md",sourceDirName:".",slug:"/how_to_use_cube",permalink:"/toio-spec/en/docs/how_to_use_cube",version:"2.3.0",frontMatter:{id:"how_to_use_cube",title:"How to use the cube",sidebar_label:"How to use the cube"},sidebar:"version-2.3.0/docs",previous:{title:"About this site",permalink:"/toio-spec/en/docs/about"},next:{title:"\ud83d\udd04 How to update",permalink:"/toio-spec/en/docs/how_to_update_cube"}},s=[{value:"How to charge",id:"how-to-charge",children:[]},{value:"How to power on and off",id:"how-to-power-on-and-off",children:[]},{value:"Auto power off function",id:"auto-power-off-function",children:[]},{value:"System state",id:"system-state",children:[]},{value:"Checking the remaining battery level",id:"checking-the-remaining-battery-level",children:[]}],d={toc:s};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-charge"},"How to charge"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How to charge",src:n(1030).Z})),(0,o.kt)("p",null,"The cube can be charged by placing it on the console charger. For detailed instructions and how to check the remaining battery level of the cube, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://support.toio.io/app/manual"},"toio User Guide"),"."),(0,o.kt)("h2",{id:"how-to-power-on-and-off"},"How to power on and off"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How to power on off",src:n(5139).Z})),(0,o.kt)("p",null,"There is a power button on the bottom of the cube. Press the power button to turn on the cube.\nPressing and holding the power button turns it off."),(0,o.kt)("h2",{id:"auto-power-off-function"},"Auto power off function"),(0,o.kt)("p",null,"Communication with the cube is done via Bluetooth Low Energy (BLE). If the cube is not connected to any other device via BLE for 15 minutes, it will automatically turn off. An audible alert will also sound every 3 minutes while the cube is not connected to another device via BLE."),(0,o.kt)("p",null,"For more information on communication with the cube, please see ",(0,o.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/ble_communication_overview#communication-with-the-cube"},"Communication Overview - Communication with the cube"),"."),(0,o.kt)("h2",{id:"system-state"},"System state"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Indicator of cube",src:n(1695).Z})),(0,o.kt)("p",null,"The state of the cube's system is notified through colors of the indicator and sound alerts. The different states are as follows."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"cube state"),(0,o.kt)("th",{parentName:"tr",align:null},"Indicator"),(0,o.kt)("th",{parentName:"tr",align:null},"Audible alert"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Startup"),(0,o.kt)("td",{parentName:"tr",align:null},"Flashes once in red, blue, green, then white"),(0,o.kt)("td",{parentName:"tr",align:null},"\u25cb With audible alert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Connecting"),(0,o.kt)("td",{parentName:"tr",align:null},"Flashes in blue"),(0,o.kt)("td",{parentName:"tr",align:null},"No audible alert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Connected"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicator turns off"),(0,o.kt)("td",{parentName:"tr",align:null},"\u25cb With audible alert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Disconnected"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicator turns off"),(0,o.kt)("td",{parentName:"tr",align:null},"\u25cb With audible alert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Shutdown"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicator turns off"),(0,o.kt)("td",{parentName:"tr",align:null},"\u25cb With audible alert")))),(0,o.kt)("h2",{id:"checking-the-remaining-battery-level"},"Checking the remaining battery level"),(0,o.kt)("p",null,"When the power button is pressed while the cube is on, the approximate remaining battery level is indicated through the color of the indicator and audible alerts. The remaining battery level and the corresponding condition of the indicator are shown below. Audible alerts are sounded as the indicator flashes."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Remaining battery level"),(0,o.kt)("th",{parentName:"tr",align:null},"Indicator"),(0,o.kt)("th",{parentName:"tr",align:null},"Audible alert"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Battery level is sufficient"),(0,o.kt)("td",{parentName:"tr",align:null},"Flashes in green three times"),(0,o.kt)("td",{parentName:"tr",align:null},"Sounds three times as the indicator flashes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Battery level is low"),(0,o.kt)("td",{parentName:"tr",align:null},"Flashes in yellow twice"),(0,o.kt)("td",{parentName:"tr",align:null},"Sounds twice as the indicator flashes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Almost no battery left"),(0,o.kt)("td",{parentName:"tr",align:null},"Flashes in red once"),(0,o.kt)("td",{parentName:"tr",align:null},"Sounds once with each flash of the indicator")))))}p.isMDXComponent=!0},1030:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cube_basics_charging-ee7af35b59ee1f45e4fb8f154fde1b89.svg"},1695:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cube_basics_light-326e8d870ef61886f4c0e89d49da3272.svg"},5139:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cube_basics_power_on_off-16ad212a37d733ec6cb6c5df5b1bf91c.svg"}}]);