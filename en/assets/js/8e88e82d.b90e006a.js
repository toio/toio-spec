"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5023],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(b,l(l({ref:e},c),{},{components:n})):a.createElement(b,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8852:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"ble_button",title:"Button",sidebar_label:"Button"},p=void 0,u={unversionedId:"ble_button",id:"version-2.3.0/ble_button",isDocsHomePage:!1,title:"Button",description:"There is one function button located at the bottom of the cube (see Parts).",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.3.0/button.md",sourceDirName:".",slug:"/ble_button",permalink:"/toio-spec/en/docs/ble_button",tags:[],version:"2.3.0",frontMatter:{id:"ble_button",title:"Button",sidebar_label:"Button"},sidebar:"version-2.3.0/docs",previous:{title:"\ud83d\udd04 Magnetic sensor",permalink:"/toio-spec/en/docs/ble_magnetic_sensor"},next:{title:"Battery",permalink:"/toio-spec/en/docs/ble_battery"}},c=[{value:"Read operations",id:"read-operations",children:[]},{value:"Notifications",id:"notifications",children:[]}],s={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There is one function button located at the bottom of the cube (see ",(0,o.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/hardware_components"},"Parts"),")."),(0,o.kt)("p",null,"The state of the button can be obtained using the following characteristics."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Characteristic UUID"),(0,o.kt)("td",{parentName:"tr",align:null},"10B20107-5B3B-4571-9508-CF3EFCD7BBAE")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Properties"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#read-operations"},"Read"),", ",(0,o.kt)("a",{parentName:"td",href:"#notifications"},"Notify"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Descriptor"),(0,o.kt)("td",{parentName:"tr",align:null},"Button Information")))),(0,o.kt)("h2",{id:"read-operations"},"Read operations"),(0,o.kt)("p",null,"The configuration data below can be used to obtain the state of the button."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data location"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Content"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,o.kt)("td",{parentName:"tr",align:null},"Button ID"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{fixed:!0},(0,o.kt)("inlineCode",{parentName:"td"},"0x01"))," (Function button)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"UInt8"),(0,o.kt)("td",{parentName:"tr",align:null},"State of button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0x80")," (Pressed)")))),(0,o.kt)("p",null,"Button ID"),(0,o.kt)("p",null,"The ID and corresponding button are as follows (see: ",(0,o.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/hardware_components"},"Parts"),")."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Button ID"),(0,o.kt)("th",{parentName:"tr",align:null},"Button"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0x01")),(0,o.kt)("td",{parentName:"tr",align:null},"Function button")))),(0,o.kt)("h4",{id:"state-of-button"},"State of button"),(0,o.kt)("p",null,"The value for the state of the button is ",(0,o.kt)("inlineCode",{parentName:"p"},"0x80")," when pressed and ",(0,o.kt)("inlineCode",{parentName:"p"},"0x00")," when released."),(0,o.kt)("h2",{id:"notifications"},"Notifications"),(0,o.kt)("p",null,"When the state of the button changes, this characteristic notifies the BLE central of this.\nThe type of information and structure of data being sent are the same as for the ",(0,o.kt)("a",{parentName:"p",href:"#read-operations"},"Read operations"),"."))}d.isMDXComponent=!0}}]);