"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5598],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),k=r,s=c["".concat(d,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1810:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"ble_light",title:"Indicator",sidebar_label:"Indicator"},d=void 0,p={unversionedId:"ble_light",id:"version-2.3.0/ble_light",isDocsHomePage:!1,title:"Indicator",description:"Indicator of cube",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.3.0/light.md",sourceDirName:".",slug:"/ble_light",permalink:"/toio-spec/en/docs/ble_light",tags:[],version:"2.3.0",frontMatter:{id:"ble_light",title:"Indicator",sidebar_label:"Indicator"},sidebar:"version-2.3.0/docs",previous:{title:"Motor",permalink:"/toio-spec/en/docs/ble_motor"},next:{title:"Sound",permalink:"/toio-spec/en/docs/ble_sound"}},u=[{value:"Write operations",id:"write-operations",children:[{value:"Turning the indicator on and off",id:"turning-the-indicator-on-and-off",children:[]},{value:"Repeated turning on and off of indicator",id:"repeated-turning-on-and-off-of-indicator",children:[]},{value:"Turn off all indicators.",id:"turn-off-all-indicators",children:[]},{value:"Turn off a specific indicator.",id:"turn-off-a-specific-indicator",children:[]}]}],m={toc:u};function c(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Indicator of cube",src:n(1695).Z})),(0,l.kt)("p",null,"The cube has one indicator on the bottom (see ",(0,l.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/hardware_components"},"Parts"),").\nThe color for this indicator can be specified and the indicator can be turned on and off using the following characteristics."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Characteristic UUID"),(0,l.kt)("td",{parentName:"tr",align:null},"10B20103-5B3B-4571-9508-CF3EFCD7BBAE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#write-operations"},"Write"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Descriptor"),(0,l.kt)("td",{parentName:"tr",align:null},"Light Control")))),(0,l.kt)("h2",{id:"write-operations"},"Write operations"),(0,l.kt)("h3",{id:"turning-the-indicator-on-and-off"},"Turning the indicator on and off"),(0,l.kt)("p",null,"The indicator can be turned on and off by writing the following configuration data.\nFor the example, the indicator is turned on in red for 160 milliseconds then turned off."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data location"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Control type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x03"))," (indicator on, indicator off)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration indicator is controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x10")," (160 milliseconds)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of indicators controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of the indicator controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Value for red indicator"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xFF"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Value for green indicator"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Value for blue indicator"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x00"))))),(0,l.kt)("h4",{id:"duration-indicator-is-controlled"},"Duration indicator is controlled"),(0,l.kt)("p",null,"The duration in which the indicator is controlled is specified with a value range between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"255"),". A value of ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," creates no time limit, so the indicator stays on or off until the next write operation is performed. For values ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"255"),", the indicator turns on or off for 10 times the specified value in milliseconds, then turns off."),(0,l.kt)("h4",{id:"number-of-indicators-controlled-id-of-indicator-controlled"},"Number of indicators controlled ID of indicator controlled"),(0,l.kt)("p",null,"Specifies the number or ID of the indicators being controlled. Only one indicator can be controlled, and both are set to ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,l.kt)("h4",{id:"redgreenblue-values-for-the-indicator"},"Red/Green/Blue values for the indicator"),(0,l.kt)("p",null,"Each indicator color can be specified with a value range between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"255"),". If all of them are set to ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),", the indicator is turned off."),(0,l.kt)("h3",{id:"repeated-turning-on-and-off-of-indicator"},"Repeated turning on and off of indicator"),(0,l.kt)("p",null,"The indicator can be turned on and off repeatedly by writing the following configuration data.\nThe indicator is blinking repeatedly in green and blue every 300 milliseconds in the example."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data location"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Control type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x04"))," (Repeatedly turns on and off)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of repetitions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x00")," (Infinite)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of operations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x02")," (Two operations)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration indicator is controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x1E")," (300 milliseconds)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of indicators controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of the indicator controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Value for red indicator"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Value for green indicator"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xFF"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Value for blue indicator"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration indicator is controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x1E")," (300 milliseconds)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of indicators controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of the indicator controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Value for red indicator"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Value for green indicator"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0x00"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Value for blue indicator"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0xFF"))))),(0,l.kt)("h4",{id:"data-structure-and-operation"},"Data Structure and Operation"),(0,l.kt)("p",null,"The data for this write operation has a structure with a variable length as shown in the figure below."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Indicator Scenario Data Structure",src:n(4570).Z})),(0,l.kt)("p",null,"Operation is made up of the following six items written with the ",(0,l.kt)("a",{parentName:"p",href:"#turning-the-indicator-on-and-off"},"Turning the indicator on and off")," data."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Duration indicator is controlled"),(0,l.kt)("li",{parentName:"ul"},"Number of indicators controlled"),(0,l.kt)("li",{parentName:"ul"},"ID of indicator controlled"),(0,l.kt)("li",{parentName:"ul"},"Value for red indicator"),(0,l.kt)("li",{parentName:"ul"},"Value for green indicator"),(0,l.kt)("li",{parentName:"ul"},"Value for blue indicator")),(0,l.kt)("h4",{id:"number-of-repetitions"},"Number of repetitions"),(0,l.kt)("p",null,"The number of times operations are repeated is specified with a value ranging between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"255"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," repeats operations for an infinite number of times, meaning that the repetition of operations does not end until the next write operation is performed. For values ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"255"),", the indicator turns off after finishing the specified number of repetitions."),(0,l.kt)("h4",{id:"number-of-operations"},"Number of Operations"),(0,l.kt)("p",null,"The number of operations is specified with a value range of ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"29"),". If the value specified is smaller than the number of operations that follow, only the number of operations specified are repeated. If the value specified is greater than the number of operations that follow, an error occurs and the write operation is discarded."),(0,l.kt)("h4",{id:"duration-indicator-is-controlled-1"},"Duration indicator is controlled"),(0,l.kt)("p",null,"The duration the indicator is controlled is specified with a value range of ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"255"),". In the range between ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"255"),", the indicator turns on and off for 10 times the value specified in milliseconds."),(0,l.kt)("h3",{id:"turn-off-all-indicators"},"Turn off all indicators."),(0,l.kt)("p",null,"All indicators are turned off by writing the following configuration data."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data location"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Control type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x01"))," (Turn off all indicators)")))),(0,l.kt)("h3",{id:"turn-off-a-specific-indicator"},"Turn off a specific indicator."),(0,l.kt)("p",null,"A specific indicator can be turned off by writing the following configuration data."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data location"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Control type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x02"))," (Turn off a specific indicator)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of indicators controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x01")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of indicator controlled"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"fixed"},(0,l.kt)("inlineCode",{parentName:"td"},"0x01")))))))}c.isMDXComponent=!0},1695:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/cube_basics_light-326e8d870ef61886f4c0e89d49da3272.svg"},4570:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sequential_operation-a90b4e3607ee02640fb586bf907f0d88.svg"}}]);