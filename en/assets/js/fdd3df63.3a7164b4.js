"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1393],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,y=d["".concat(u,".").concat(p)]||d[p]||g[p]||r;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(58168),o=n(98587),r=(n(96540),n(15680)),l=["components"],i={id:"how_to_use_cube",title:"How to use the cube",sidebar_label:"\ud83d\udd04 How to use the cube"},u=void 0,s={unversionedId:"how_to_use_cube",id:"version-2.4.0/how_to_use_cube",title:"How to use the cube",description:"How to charge",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.4.0/how_to_use_cube.md",sourceDirName:".",slug:"/how_to_use_cube",permalink:"/toio-spec/en/docs/how_to_use_cube",draft:!1,tags:[],version:"2.4.0",frontMatter:{id:"how_to_use_cube",title:"How to use the cube",sidebar_label:"\ud83d\udd04 How to use the cube"},sidebar:"docs",previous:{title:"About this site",permalink:"/toio-spec/en/docs/about"},next:{title:"\ud83d\udd04 How to update",permalink:"/toio-spec/en/docs/how_to_update_cube"}},c={},d=[{value:"How to charge",id:"how-to-charge",level:2},{value:"How to power on and off",id:"how-to-power-on-and-off",level:2},{value:"Auto power off function",id:"auto-power-off-function",level:2},{value:'System state <span class="update"/>',id:"system-state-",level:2},{value:'toio PlayGround <span class="new"/>',id:"toio-playground-",level:3},{value:"Transition to toio PlayGround",id:"transition-to-toio-playground",level:4},{value:"Return from toio PlayGround",id:"return-from-toio-playground",level:4},{value:"Checking the remaining battery level",id:"checking-the-remaining-battery-level",level:2}],g={toc:d},p="wrapper";function y(e){var t=e.components,i=(0,o.A)(e,l);return(0,r.yg)(p,(0,a.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"how-to-charge"},"How to charge"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"How to charge",src:n(1968).A,width:"555",height:"314"})),(0,r.yg)("p",null,"The cube can be charged by placing it on the console charger or the charger for toio Core Cube. For detailed instructions and how to check the remaining battery level of the cube, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://toio.io/manual"},"manuals"),"."),(0,r.yg)("h2",{id:"how-to-power-on-and-off"},"How to power on and off"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"How to power on off",src:n(49518).A,width:"555",height:"275"})),(0,r.yg)("p",null,"There is a power button on the bottom of the cube. Press the power button to turn on the cube.\nPressing and holding the power button turns it off."),(0,r.yg)("h2",{id:"auto-power-off-function"},"Auto power off function"),(0,r.yg)("p",null,"Communication with the cube is done via Bluetooth Low Energy (BLE). If the cube is not connected to any other device via BLE for 15 minutes, it will automatically turn off. An audible alert will also sound every 3 minutes while the cube is not connected to another device via BLE."),(0,r.yg)("p",null,"For more information on communication with the cube, please see ",(0,r.yg)("a",{parentName:"p",href:"/toio-spec/en/docs/ble_communication_overview#communication-with-the-cube"},"Communication Overview - Communication with the cube"),"."),(0,r.yg)("h2",{id:"system-state-"},"System state ",(0,r.yg)("span",{class:"update"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Indicator of cube",src:n(12587).A,width:"555",height:"174"})),(0,r.yg)("p",null,"The state of the cube's system is notified through colors of the indicator and sound alerts. The different states are as follows."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"cube state"),(0,r.yg)("th",{parentName:"tr",align:null},"Indicator"),(0,r.yg)("th",{parentName:"tr",align:null},"Audible alert"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Startup"),(0,r.yg)("td",{parentName:"tr",align:null},"Flashes once in red, blue, green, then white"),(0,r.yg)("td",{parentName:"tr",align:null},"\u25cb With audible alert")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Connecting"),(0,r.yg)("td",{parentName:"tr",align:null},"Flashes in blue"),(0,r.yg)("td",{parentName:"tr",align:null},"No audible alert")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Connected"),(0,r.yg)("td",{parentName:"tr",align:null},"Indicator turns off"),(0,r.yg)("td",{parentName:"tr",align:null},"\u25cb With audible alert")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Disconnected"),(0,r.yg)("td",{parentName:"tr",align:null},"Indicator turns off"),(0,r.yg)("td",{parentName:"tr",align:null},"\u25cb With audible alert")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Shutdown"),(0,r.yg)("td",{parentName:"tr",align:null},"Indicator turns off"),(0,r.yg)("td",{parentName:"tr",align:null},"\u25cb With audible alert")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"toio PlayGround"),(0,r.yg)("td",{parentName:"tr",align:null},"Flashes in yellow"),(0,r.yg)("td",{parentName:"tr",align:null},"\u25cb With audible alert")))),(0,r.yg)("h3",{id:"toio-playground-"},"toio PlayGround ",(0,r.yg)("span",{class:"new"})),(0,r.yg)("p",null,"When flashing yellow, toio PlayGround is in operation.",(0,r.yg)("br",{parentName:"p"}),"\n","At this time, the cube does not accept external Bluetooth connections."),(0,r.yg)("h4",{id:"transition-to-toio-playground"},"Transition to toio PlayGround"),(0,r.yg)("p",null,"When the button is pressed and held while the cube is waiting for connection (blinking blue), it transitions to toio PlayGround."),(0,r.yg)("h4",{id:"return-from-toio-playground"},"Return from toio PlayGround"),(0,r.yg)("p",null,"To return to the normal connectivity state from toio PlayGround, turn the cube off and on again."),(0,r.yg)("h2",{id:"checking-the-remaining-battery-level"},"Checking the remaining battery level"),(0,r.yg)("p",null,"When the power button is pressed while the cube is on, the approximate remaining battery level is indicated through the color of the indicator and audible alerts. The remaining battery level and the corresponding condition of the indicator are shown below. Audible alerts are sounded as the indicator flashes."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Remaining battery level"),(0,r.yg)("th",{parentName:"tr",align:null},"Indicator"),(0,r.yg)("th",{parentName:"tr",align:null},"Audible alert"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Battery level is sufficient"),(0,r.yg)("td",{parentName:"tr",align:null},"Flashes in green three times"),(0,r.yg)("td",{parentName:"tr",align:null},"Sounds three times as the indicator flashes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Battery level is low"),(0,r.yg)("td",{parentName:"tr",align:null},"Flashes in yellow twice"),(0,r.yg)("td",{parentName:"tr",align:null},"Sounds twice as the indicator flashes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Almost no battery left"),(0,r.yg)("td",{parentName:"tr",align:null},"Flashes in red once"),(0,r.yg)("td",{parentName:"tr",align:null},"Sounds once with each flash of the indicator")))))}y.isMDXComponent=!0},1968:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cube_basics_charging-ee7af35b59ee1f45e4fb8f154fde1b89.svg"},12587:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cube_basics_light-326e8d870ef61886f4c0e89d49da3272.svg"},49518:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cube_basics_power_on_off-16ad212a37d733ec6cb6c5df5b1bf91c.svg"}}]);