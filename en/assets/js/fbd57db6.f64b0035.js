"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6243],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>N});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):M(M({},t),e)),n},g=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},s="mdxType",j={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},L=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),s=c(n),L=a,N=s["".concat(u,".").concat(L)]||s[L]||j[L]||o;return n?i.createElement(N,M(M({ref:t},g),{},{components:n})):i.createElement(N,M({ref:t},g))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,M=new Array(o);M[0]=L;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[s]="string"==typeof e?e:a,M[1]=r;for(var c=2;c<o;c++)M[c]=n[c];return i.createElement.apply(null,M)}return i.createElement.apply(null,n)}L.displayName="MDXCreateElement"},42867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>N,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=n(58168),a=n(98587),o=(n(96540),n(15680)),M=["components"],r={id:"hardware_magnet",title:"Magnetic sensor",sidebar_label:"Magnetic sensor"},u=void 0,c={unversionedId:"hardware_magnet",id:"version-2.4.0/hardware_magnet",title:"Magnetic sensor",description:'Two functions are available using the cube\'s 3-axis magnetic sensor: "magnet state detection" and "magnetic force detection".',source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.4.0/hardware_magnet.md",sourceDirName:".",slug:"/hardware_magnet",permalink:"/toio-spec/en/docs/hardware_magnet",draft:!1,tags:[],version:"2.4.0",frontMatter:{id:"hardware_magnet",title:"Magnetic sensor",sidebar_label:"Magnetic sensor"},sidebar:"docs",previous:{title:"Standard ID",permalink:"/toio-spec/en/docs/hardware_standard_id"},next:{title:"\ud83d\udd04 Communication Overview",permalink:"/toio-spec/en/docs/ble_communication_overview"}},g={},s=[{value:"1. Magnet status detection",id:"1-magnet-status-detection",level:2},{value:"Magnet specifications",id:"magnet-specifications",level:3},{value:"Magnet layout specifications",id:"magnet-layout-specifications",level:3},{value:"2. Magnetic force detection",id:"2-magnetic-force-detection",level:2}],j={toc:s},L="wrapper";function N(e){var t=e.components,r=(0,a.A)(e,M);return(0,o.yg)(L,(0,i.A)({},j,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,'Two functions are available using the cube\'s 3-axis magnetic sensor: "magnet state detection" and "magnetic force detection".'),(0,o.yg)("p",null,'"Magnet state detection" is available with version v02.0004 (BLE protocol version v2.2.0) of the cube system software.\nWith version v02.0005 (BLE protocol version v2.3.0) of the cube system software, "Magnetic force detection" is also available.'),(0,o.yg)("p",null,"For information on the system software versions and how to update your software, please see ",(0,o.yg)("a",{parentName:"p",href:"/toio-spec/en/docs/how_to_update_cube"},"About - How to update"),"."),(0,o.yg)("p",null,"For the communication specifications, see ",(0,o.yg)("a",{parentName:"p",href:"/toio-spec/en/docs/ble_magnetic_sensor"},"Communication specifications - Magnetic sensors"),"."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"The use of strong magnets may prevent the cube from operating normally or lead to malfunction. Please be careful when using strong magnets around the cube."),(0,o.yg)("li",{parentName:"ul"},"When handling magnets, please read the magnet manufacturer's instruction manual carefully, follow the safety instructions, and have a knowledgeable person handle the magnets responsibly."))),(0,o.yg)("h2",{id:"1-magnet-status-detection"},"1. Magnet status detection"),(0,o.yg)("p",null,"Magnets placed in preestablished positions and magnetic force can detect six different conditions.\nBecause the detection of magnetic flux density is limited to a certain range, these conditions will not be detected correctly once outside of this range. Before using the cube, please be sure to test the magnets on the cube in the actual environment where the cube will be used."),(0,o.yg)("h3",{id:"magnet-specifications"},"Magnet specifications"),(0,o.yg)("p",null,"The specifications of the magnets are as follows"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Magnet specifications",src:n(70332).A,width:"563",height:"162"})),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Item"),(0,o.yg)("th",{parentName:"tr",align:null},"Content"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Size"),(0,o.yg)("td",{parentName:"tr",align:null},"4 x 4 x 2 ","[mm]")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Material"),(0,o.yg)("td",{parentName:"tr",align:null},"Sintered neodymium magnet N40")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Direction of magnetic force"),(0,o.yg)("td",{parentName:"tr",align:null},"2mm in the perpendicular direction")))),(0,o.yg)("h3",{id:"magnet-layout-specifications"},"Magnet layout specifications"),(0,o.yg)("p",null,"The following six conditions can be detected due to the positioning of the magnets and the direction of the magnetic forces."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Magnet layout specifications",src:n(95777).A,width:"563",height:"302"})),(0,o.yg)("h2",{id:"2-magnetic-force-detection"},"2. Magnetic force detection"),(0,o.yg)("p",null,"The strength and direction of the magnetic force can be detected."),(0,o.yg)("p",null,"The strength of the magnetic force is always expressed as a positive value, regardless of the polarity of the magnet."),(0,o.yg)("p",null,"The direction of the magnetic force is the direction in which the magnetic flux pass through the cube, expressed as a three-dimensional vector with X, Y, and Z components.\nThe length of this 3D vector remains the same (approximately 10), regardless of the strength of the magnetic force."),(0,o.yg)("p",null,"The magnetic coordinate system for the cube is shown in the figure below, with the direction of the arrow being the positive direction."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Magnetic coordinate system",src:n(59646).A,width:"563",height:"185"})))}N.isMDXComponent=!0},70332:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjIuOTcgMTYyLjEyIj48c3R5bGU+LnN0OHtmaWxsOiM2NjZ9LnN0MTJ7ZmlsbDojZmZmZGZkfS5zdDEzLC5zdDE0LC5zdDE3e2ZpbGw6bm9uZTtzdHJva2U6I2NmZTI2NjtzdHJva2Utd2lkdGg6Ljc1O3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDE0LC5zdDE3e3N0cm9rZTojYmZkODMzfS5zdDE3e3N0cm9rZS1saW5lY2FwOnJvdW5kfS5zdDE4e2ZpbGw6I2JmZDgzM308L3N0eWxlPjxnIGlkPSLjg6zjgqTjg6Tjg7xfMSI+PHBhdGggY2xhc3M9InN0MTMiIGQ9Ik0xMjguOSAzMC4zOFYxNC40MyIvPjxwYXRoIGNsYXNzPSJzdDE0IiBkPSJNMzcxLjE2IDMwLjM4VjE0LjQzTTI0Mi4yOCAzMC4zOFYxNC40M000MjcuODUgMzAuMzhWMTQuNDNNMTEyLjk0IDMwLjM4aDE1Ljk2Ii8+PHBhdGggY2xhc3M9InN0MTMiIGQ9Ik0xMTIuOTQgMTQzLjc3aDE1Ljk2Ii8+PHBhdGggZmlsbD0iI2U4NDcyMCIgZD0iTTM3MS4xNiAzMC4zOGgyOC4zNXYxMTMuMzloLTI4LjM1eiIvPjxwYXRoIGZpbGw9IiMwMDViYWIiIGQ9Ik0zOTkuNTEgMzAuMzhoMjguMzV2MTEzLjM5aC0yOC4zNXoiLz48cGF0aCBmaWxsPSIjZTg0NzIwIiBzdHJva2U9IiMyMzE4MTUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMjguOSAzMC4zOGgxMTMuMzl2MTEzLjM5SDEyOC45eiIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIzMTgxNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTM3MS4xNiAzMC4zOGg1Ni42OXYxMTMuMzloLTU2LjY5eiIvPjxwYXRoIGNsYXNzPSJzdDEyIiBkPSJNMzc4LjkxIDc5LjE1aDMuNDdsNi4yOSAxMS4wNVY3OS4xNWgzLjA5Vjk1aC0zLjMxTDM4MiA4My43NlY5NWgtMy4wOVY3OS4xNXpNMTc5LjE3IDc5LjE1aDMuNDdsNi4yOSAxMS4wNVY3OS4xNWgzLjA5Vjk1aC0zLjMxbC02LjQ1LTExLjI0Vjk1aC0zLjA5Vjc5LjE1ek00MTAuMjcgOTAuMTNjLjEuNzIuMyAxLjI3LjYgMS42Mi41NS42NSAxLjQ5Ljk4IDIuODIuOTguOCAwIDEuNDQtLjA5IDEuOTQtLjI2Ljk0LS4zMyAxLjQyLS45NCAxLjQyLTEuODQgMC0uNTItLjIzLS45My0uNjktMS4yMS0uNDYtLjI4LTEuMi0uNTMtMi4yLS43NGwtMS43Mi0uMzhjLTEuNjktLjM3LTIuODQtLjc4LTMuNDgtMS4yMS0xLjA3LS43My0xLjYtMS44Ny0xLjYtMy40MyAwLTEuNDIuNTItMi42IDEuNTctMy41NCAxLjA0LS45NCAyLjU4LTEuNDEgNC42LTEuNDEgMS42OSAwIDMuMTMuNDQgNC4zMyAxLjMzIDEuMTkuODkgMS44MiAyLjE3IDEuODggMy44NWgtMy4xOGMtLjA2LS45NS0uNDktMS42My0xLjI4LTIuMDMtLjUzLS4yNi0xLjE5LS40LTEuOTctLjQtLjg3IDAtMS41Ny4xNy0yLjA5LjUycy0uNzguODItLjc4IDEuNDRjMCAuNTcuMjYuOTkuNzcgMS4yNy4zMy4xOSAxLjAzLjQgMi4xMS42NmwyLjc4LjY2YzEuMjIuMjkgMi4xMy42NyAyLjc0IDEuMTUuOTQuNzUgMS40MiAxLjgyIDEuNDIgMy4yNCAwIDEuNDUtLjU2IDIuNjUtMS42OCAzLjYxLTEuMTIuOTYtMi43IDEuNDQtNC43NCAxLjQ0LTIuMDkgMC0zLjczLS40Ny00LjkyLTEuNDEtMS4yLS45NC0xLjc5LTIuMjQtMS43OS0zLjg5aDMuMTR6Ii8+PHBhdGggY2xhc3M9InN0OCIgZD0iTTE4Ny4xNSA5LjkzaC45NnYuNzNoLS45NnYxLjcxaC0uODZ2LTEuNzFoLTMuNDF2LS44OWwyLjkzLTQuNTNoMS4zNHY0LjY5em0tLjg2LTMuOThoLS4wMmwtMi41NiAzLjk4aDIuNThWNS45NXpNNDMzLjg5IDE0OC43N2gtLjkydjguOGguOTJ2LjU1aC0xLjY1di05LjloMS42NXYuNTV6TTQzNi4zNSAxNTAuOTF2LjgxaC4wMWMuMjYtLjU3Ljg4LS45MyAxLjU5LS45My44IDAgMS4zMi4zMSAxLjU3Ljg2aC4wM2MuMzctLjYzLjk5LS44NiAxLjY3LS44NiAxLjIzIDAgMS44NC44IDEuODQgMS45MnYzLjQ3aC0uODV2LTMuMTVjMC0uOTMtLjI1LTEuNTctMS4xOS0xLjU3LS42NSAwLTEuMjkuNDMtMS4yOSAxLjQ4djMuMjRoLS44NXYtMy4yNGMwLS45My0uMjEtMS40OC0xLjE1LTEuNDgtLjcgMC0xLjM1LjUxLTEuMzUgMS42NHYzLjA4aC0uODV2LTUuMjdoLjgyek00NDUuNDYgMTUwLjkxdi44MWguMDFjLjI2LS41Ny44OC0uOTMgMS41OS0uOTMuOCAwIDEuMzIuMzEgMS41Ny44NmguMDNjLjM3LS42My45OS0uODYgMS42Ny0uODYgMS4yMyAwIDEuODQuOCAxLjg0IDEuOTJ2My40N2gtLjg1di0zLjE1YzAtLjkzLS4yNS0xLjU3LTEuMTktMS41Ny0uNjUgMC0xLjI5LjQzLTEuMjkgMS40OHYzLjI0aC0uODV2LTMuMjRjMC0uOTMtLjIxLTEuNDgtMS4xNS0xLjQ4LS43IDAtMS4zNS41MS0xLjM1IDEuNjR2My4wOGgtLjg1di01LjI3aC44MnpNNDUzLjczIDE1Ny41N2guOTJ2LTguOGgtLjkydi0uNTVoMS42NXY5LjloLTEuNjV2LS41NXpNNDAxLjY5IDEyLjM3aC00LjQ4di0uNzdjMi45NC0yLjY5IDMuNTUtMy41MSAzLjU1LTQuNTIgMC0uNzctLjY1LTEuMjQtMS40My0xLjI0LS42IDAtMS4xNC4yNi0xLjYzLjY2bC0uMzctLjYyYy41Mi0uNDYgMS4yNC0uNzYgMi0uNzYgMS4zIDAgMi4zLjY2IDIuMyAxLjk0IDAgMS4zNS0uNjkgMi4xMy0zLjM2IDQuNThoMy40MnYuNzN6TTEwNy40NCA4NS41MXYtLjk2aC43M3YuOTZoMS43MXYuODZoLTEuNzF2My40MWgtLjg5bC00LjUzLTIuOTN2LTEuMzRoNC42OXptLTMuOTguODZ2LjAybDMuOTggMi41NnYtMi41OGgtMy45OHoiLz48Zz48cGF0aCBjbGFzcz0ic3QxNyIgZD0iTTEzMS4wMSAxNi4yMWgxMDkuMTUiLz48cGF0aCBjbGFzcz0ic3QxOCIgZD0iTTEzNS40NSAxOC41OWwuMjUtLjctNC42MS0xLjY4IDQuNjEtMS42OC0uMjUtLjcxLTYuNTUgMi4zOXpNMjM1LjczIDE4LjU5bC0uMjYtLjcgNC42Mi0xLjY4LTQuNjItMS42OC4yNi0uNzEgNi41NSAyLjM5eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QxNyIgZD0iTTM3My4yOCAxNi4yMWg1Mi40NSIvPjxwYXRoIGNsYXNzPSJzdDE4IiBkPSJNMzc3LjcxIDE4LjU5bC4yNi0uNy00LjYyLTEuNjggNC42Mi0xLjY4LS4yNi0uNzEtNi41NSAyLjM5ek00MjEuMyAxOC41OWwtLjI2LS43IDQuNjItMS42OC00LjYyLTEuNjguMjYtLjcxIDYuNTUgMi4zOXoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MTciIGQ9Ik0xMTQuNzIgMzIuNXYxMDkuMTUiLz48cGF0aCBjbGFzcz0ic3QxOCIgZD0iTTExMi4zNCAzNi45M2wuNy4yNiAxLjY4LTQuNjIgMS42OCA0LjYyLjcxLS4yNi0yLjM5LTYuNTV6TTExMi4zNCAxMzcuMjFsLjctLjI1IDEuNjggNC42MSAxLjY4LTQuNjEuNzEuMjUtMi4zOSA2LjU2eiIvPjwvZz48L2c+PC9zdmc+"},95777:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/hardware_magnet_layout-ac1caf140ead5100158687ddda0fd937.svg"},59646:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/magnet_coordinate_system-0c1c1953ea80ff23a47e8e8bc7ee7981.svg"}}]);