"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>L});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var M=a.createContext({}),u=function(e){var t=a.useContext(M),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(M.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,M=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),N=u(n),L=i,g=N["".concat(M,".").concat(L)]||N[L]||j[L]||o;return n?a.createElement(g,c(c({ref:t},s),{},{components:n})):a.createElement(g,c({ref:t},s))}));function L(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=N;var r={};for(var M in t)hasOwnProperty.call(t,M)&&(r[M]=t[M]);r.originalType=e,r.mdxType="string"==typeof e?e:i,c[1]=r;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},8991:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>M,default:()=>N,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),c=["components"],r={id:"hardware_magnet",title:"Magnetic sensor",sidebar_label:"\ud83d\udd04 Magnetic sensor"},M=void 0,u={unversionedId:"hardware_magnet",id:"version-2.3.0/hardware_magnet",isDocsHomePage:!1,title:"Magnetic sensor",description:'Two functions are available using the cube\'s 3-axis magnetic sensor: "magnet state detection" and "magnetic force detection".',source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.3.0/hardware_magnet.md",sourceDirName:".",slug:"/hardware_magnet",permalink:"/toio-spec/en/docs/hardware_magnet",tags:[],version:"2.3.0",frontMatter:{id:"hardware_magnet",title:"Magnetic sensor",sidebar_label:"\ud83d\udd04 Magnetic sensor"},sidebar:"version-2.3.0/docs",previous:{title:"Standard ID",permalink:"/toio-spec/en/docs/hardware_standard_id"},next:{title:"\ud83d\udd04 Communication Overview",permalink:"/toio-spec/en/docs/ble_communication_overview"}},s=[{value:"1. Magnet status detection",id:"1-magnet-status-detection",children:[{value:"Magnet specifications",id:"magnet-specifications",children:[]},{value:"Magnet layout specifications",id:"magnet-layout-specifications",children:[]}]},{value:'2. Magnetic force detection <span class="new"/>',id:"2-magnetic-force-detection-",children:[]}],j={toc:s};function N(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},j,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Two functions are available using the cube\'s 3-axis magnetic sensor: "magnet state detection" and "magnetic force detection".'),(0,o.kt)("p",null,'"Magnet state detection" is available with version v02.0004 (BLE protocol version v2.2.0) of the cube system software.\nWith version v02.0005 (BLE protocol version v2.3.0) of the cube system software, "Magnetic force detection" is also available.'),(0,o.kt)("p",null,"For information on the system software versions and how to update your software, please see ",(0,o.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/how_to_update_cube"},"About - How to update"),"."),(0,o.kt)("p",null,"For the communication specifications, see ",(0,o.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/ble_magnetic_sensor"},"Communication specifications - Magnetic sensors"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"The use of strong magnets may prevent the cube from operating normally or lead to malfunction. Please be careful when using strong magnets around the cube."),(0,o.kt)("li",{parentName:"ul"},"When handling magnets, please read the magnet manufacturer's instruction manual carefully, follow the safety instructions, and have a knowledgeable person handle the magnets responsibly.")))),(0,o.kt)("h2",{id:"1-magnet-status-detection"},"1. Magnet status detection"),(0,o.kt)("p",null,"Magnets placed in preestablished positions and magnetic force can detect six different conditions.\nBecause the detection of magnetic flux density is limited to a certain range, these conditions will not be detected correctly once outside of this range. Before using the cube, please be sure to test the magnets on the cube in the actual environment where the cube will be used."),(0,o.kt)("h3",{id:"magnet-specifications"},"Magnet specifications"),(0,o.kt)("p",null,"The specifications of the magnets are as follows"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Magnet specifications",src:n(4002).Z})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Item"),(0,o.kt)("th",{parentName:"tr",align:null},"Content"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Size"),(0,o.kt)("td",{parentName:"tr",align:null},"4 x 4 x 2 ","[mm]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Material"),(0,o.kt)("td",{parentName:"tr",align:null},"Sintered neodymium magnet N40")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Direction of magnetic force"),(0,o.kt)("td",{parentName:"tr",align:null},"2mm in the perpendicular direction")))),(0,o.kt)("h3",{id:"magnet-layout-specifications"},"Magnet layout specifications"),(0,o.kt)("p",null,"The following six conditions can be detected due to the positioning of the magnets and the direction of the magnetic forces."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Magnet layout specifications",src:n(3610).Z})),(0,o.kt)("h2",{id:"2-magnetic-force-detection-"},"2. Magnetic force detection ",(0,o.kt)("span",{class:"new"})),(0,o.kt)("p",null,"The strength and direction of the magnetic force can be detected."),(0,o.kt)("p",null,"The strength of the magnetic force is always expressed as a positive value, regardless of the polarity of the magnet."),(0,o.kt)("p",null,"The direction of the magnetic force is the direction in which the magnetic flux pass through the cube, expressed as a three-dimensional vector with X, Y, and Z components.\nThe length of this 3D vector remains the same (approximately 10), regardless of the strength of the magnetic force."),(0,o.kt)("p",null,"The magnetic coordinate system for the cube is shown in the figure below, with the direction of the arrow being the positive direction."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Magnetic coordinate system",src:n(4295).Z})))}N.isMDXComponent=!0},4002:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjIuOTcgMTYyLjEyIj48c3R5bGU+LnN0OHtmaWxsOiM2NjZ9LnN0MTJ7ZmlsbDojZmZmZGZkfS5zdDEzLC5zdDE0LC5zdDE3e2ZpbGw6bm9uZTtzdHJva2U6I2NmZTI2NjtzdHJva2Utd2lkdGg6Ljc1O3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDE0LC5zdDE3e3N0cm9rZTojYmZkODMzfS5zdDE3e3N0cm9rZS1saW5lY2FwOnJvdW5kfS5zdDE4e2ZpbGw6I2JmZDgzM308L3N0eWxlPjxnIGlkPSLjg6zjgqTjg6Tjg7xfMSI+PHBhdGggY2xhc3M9InN0MTMiIGQ9Ik0xMjguOSAzMC4zOFYxNC40MyIvPjxwYXRoIGNsYXNzPSJzdDE0IiBkPSJNMzcxLjE2IDMwLjM4VjE0LjQzTTI0Mi4yOCAzMC4zOFYxNC40M000MjcuODUgMzAuMzhWMTQuNDNNMTEyLjk0IDMwLjM4aDE1Ljk2Ii8+PHBhdGggY2xhc3M9InN0MTMiIGQ9Ik0xMTIuOTQgMTQzLjc3aDE1Ljk2Ii8+PHBhdGggZmlsbD0iI2U4NDcyMCIgZD0iTTM3MS4xNiAzMC4zOGgyOC4zNXYxMTMuMzloLTI4LjM1eiIvPjxwYXRoIGZpbGw9IiMwMDViYWIiIGQ9Ik0zOTkuNTEgMzAuMzhoMjguMzV2MTEzLjM5aC0yOC4zNXoiLz48cGF0aCBmaWxsPSIjZTg0NzIwIiBzdHJva2U9IiMyMzE4MTUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMjguOSAzMC4zOGgxMTMuMzl2MTEzLjM5SDEyOC45eiIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIzMTgxNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTM3MS4xNiAzMC4zOGg1Ni42OXYxMTMuMzloLTU2LjY5eiIvPjxwYXRoIGNsYXNzPSJzdDEyIiBkPSJNMzc4LjkxIDc5LjE1aDMuNDdsNi4yOSAxMS4wNVY3OS4xNWgzLjA5Vjk1aC0zLjMxTDM4MiA4My43NlY5NWgtMy4wOVY3OS4xNXpNMTc5LjE3IDc5LjE1aDMuNDdsNi4yOSAxMS4wNVY3OS4xNWgzLjA5Vjk1aC0zLjMxbC02LjQ1LTExLjI0Vjk1aC0zLjA5Vjc5LjE1ek00MTAuMjcgOTAuMTNjLjEuNzIuMyAxLjI3LjYgMS42Mi41NS42NSAxLjQ5Ljk4IDIuODIuOTguOCAwIDEuNDQtLjA5IDEuOTQtLjI2Ljk0LS4zMyAxLjQyLS45NCAxLjQyLTEuODQgMC0uNTItLjIzLS45My0uNjktMS4yMS0uNDYtLjI4LTEuMi0uNTMtMi4yLS43NGwtMS43Mi0uMzhjLTEuNjktLjM3LTIuODQtLjc4LTMuNDgtMS4yMS0xLjA3LS43My0xLjYtMS44Ny0xLjYtMy40MyAwLTEuNDIuNTItMi42IDEuNTctMy41NCAxLjA0LS45NCAyLjU4LTEuNDEgNC42LTEuNDEgMS42OSAwIDMuMTMuNDQgNC4zMyAxLjMzIDEuMTkuODkgMS44MiAyLjE3IDEuODggMy44NWgtMy4xOGMtLjA2LS45NS0uNDktMS42My0xLjI4LTIuMDMtLjUzLS4yNi0xLjE5LS40LTEuOTctLjQtLjg3IDAtMS41Ny4xNy0yLjA5LjUycy0uNzguODItLjc4IDEuNDRjMCAuNTcuMjYuOTkuNzcgMS4yNy4zMy4xOSAxLjAzLjQgMi4xMS42NmwyLjc4LjY2YzEuMjIuMjkgMi4xMy42NyAyLjc0IDEuMTUuOTQuNzUgMS40MiAxLjgyIDEuNDIgMy4yNCAwIDEuNDUtLjU2IDIuNjUtMS42OCAzLjYxLTEuMTIuOTYtMi43IDEuNDQtNC43NCAxLjQ0LTIuMDkgMC0zLjczLS40Ny00LjkyLTEuNDEtMS4yLS45NC0xLjc5LTIuMjQtMS43OS0zLjg5aDMuMTR6Ii8+PHBhdGggY2xhc3M9InN0OCIgZD0iTTE4Ny4xNSA5LjkzaC45NnYuNzNoLS45NnYxLjcxaC0uODZ2LTEuNzFoLTMuNDF2LS44OWwyLjkzLTQuNTNoMS4zNHY0LjY5em0tLjg2LTMuOThoLS4wMmwtMi41NiAzLjk4aDIuNThWNS45NXpNNDMzLjg5IDE0OC43N2gtLjkydjguOGguOTJ2LjU1aC0xLjY1di05LjloMS42NXYuNTV6TTQzNi4zNSAxNTAuOTF2LjgxaC4wMWMuMjYtLjU3Ljg4LS45MyAxLjU5LS45My44IDAgMS4zMi4zMSAxLjU3Ljg2aC4wM2MuMzctLjYzLjk5LS44NiAxLjY3LS44NiAxLjIzIDAgMS44NC44IDEuODQgMS45MnYzLjQ3aC0uODV2LTMuMTVjMC0uOTMtLjI1LTEuNTctMS4xOS0xLjU3LS42NSAwLTEuMjkuNDMtMS4yOSAxLjQ4djMuMjRoLS44NXYtMy4yNGMwLS45My0uMjEtMS40OC0xLjE1LTEuNDgtLjcgMC0xLjM1LjUxLTEuMzUgMS42NHYzLjA4aC0uODV2LTUuMjdoLjgyek00NDUuNDYgMTUwLjkxdi44MWguMDFjLjI2LS41Ny44OC0uOTMgMS41OS0uOTMuOCAwIDEuMzIuMzEgMS41Ny44NmguMDNjLjM3LS42My45OS0uODYgMS42Ny0uODYgMS4yMyAwIDEuODQuOCAxLjg0IDEuOTJ2My40N2gtLjg1di0zLjE1YzAtLjkzLS4yNS0xLjU3LTEuMTktMS41Ny0uNjUgMC0xLjI5LjQzLTEuMjkgMS40OHYzLjI0aC0uODV2LTMuMjRjMC0uOTMtLjIxLTEuNDgtMS4xNS0xLjQ4LS43IDAtMS4zNS41MS0xLjM1IDEuNjR2My4wOGgtLjg1di01LjI3aC44MnpNNDUzLjczIDE1Ny41N2guOTJ2LTguOGgtLjkydi0uNTVoMS42NXY5LjloLTEuNjV2LS41NXpNNDAxLjY5IDEyLjM3aC00LjQ4di0uNzdjMi45NC0yLjY5IDMuNTUtMy41MSAzLjU1LTQuNTIgMC0uNzctLjY1LTEuMjQtMS40My0xLjI0LS42IDAtMS4xNC4yNi0xLjYzLjY2bC0uMzctLjYyYy41Mi0uNDYgMS4yNC0uNzYgMi0uNzYgMS4zIDAgMi4zLjY2IDIuMyAxLjk0IDAgMS4zNS0uNjkgMi4xMy0zLjM2IDQuNThoMy40MnYuNzN6TTEwNy40NCA4NS41MXYtLjk2aC43M3YuOTZoMS43MXYuODZoLTEuNzF2My40MWgtLjg5bC00LjUzLTIuOTN2LTEuMzRoNC42OXptLTMuOTguODZ2LjAybDMuOTggMi41NnYtMi41OGgtMy45OHoiLz48Zz48cGF0aCBjbGFzcz0ic3QxNyIgZD0iTTEzMS4wMSAxNi4yMWgxMDkuMTUiLz48cGF0aCBjbGFzcz0ic3QxOCIgZD0iTTEzNS40NSAxOC41OWwuMjUtLjctNC42MS0xLjY4IDQuNjEtMS42OC0uMjUtLjcxLTYuNTUgMi4zOXpNMjM1LjczIDE4LjU5bC0uMjYtLjcgNC42Mi0xLjY4LTQuNjItMS42OC4yNi0uNzEgNi41NSAyLjM5eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxNyIgZD0iTTM3My4yOCAxNi4yMWg1Mi40NSIvPjxwYXRoIGNsYXNzPSJzdDE4IiBkPSJNMzc3LjcxIDE4LjU5bC4yNi0uNy00LjYyLTEuNjggNC42Mi0xLjY4LS4yNi0uNzEtNi41NSAyLjM5ek00MjEuMyAxOC41OWwtLjI2LS43IDQuNjItMS42OC00LjYyLTEuNjguMjYtLjcxIDYuNTUgMi4zOXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MTciIGQ9Ik0xMTQuNzIgMzIuNXYxMDkuMTUiLz48cGF0aCBjbGFzcz0ic3QxOCIgZD0iTTExMi4zNCAzNi45M2wuNy4yNiAxLjY4LTQuNjIgMS42OCA0LjYyLjcxLS4yNi0yLjM5LTYuNTV6TTExMi4zNCAxMzcuMjFsLjctLjI1IDEuNjggNC42MSAxLjY4LTQuNjEuNzEuMjUtMi4zOSA2LjU2eiIvPjwvZz48L2c+PC9zdmc+"},3610:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hardware_magnet_layout-ac1caf140ead5100158687ddda0fd937.svg"},4295:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/magnet_coordinate_system-0c1c1953ea80ff23a47e8e8bc7ee7981.svg"}}]);