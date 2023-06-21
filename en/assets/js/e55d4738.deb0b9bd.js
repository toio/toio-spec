"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||n;return a?o.createElement(h,r(r({ref:t},c),{},{components:a})):o.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<n;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var o=a(7462),i=a(3366),n=(a(7294),a(3905)),r=["components"],l={id:"how_to_update_cube",title:"How to update",sidebar_label:"\ud83d\udd04 How to update"},s=void 0,p={unversionedId:"how_to_update_cube",id:"version-2.3.0/how_to_update_cube",title:"How to update",description:"Updating the cube",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.3.0/how_to_update_cube.md",sourceDirName:".",slug:"/how_to_update_cube",permalink:"/toio-spec/en/docs/how_to_update_cube",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"how_to_update_cube",title:"How to update",sidebar_label:"\ud83d\udd04 How to update"},sidebar:"version-2.3.0/docs",previous:{title:"How to use the cube",permalink:"/toio-spec/en/docs/how_to_use_cube"},next:{title:"Name of each part",permalink:"/toio-spec/en/docs/hardware_components"}},c={},d=[{value:"Updating the cube",id:"updating-the-cube",level:2},{value:"BLE protocol version",id:"ble-protocol-version",level:3},{value:'Version combinations <span class="update"/>',id:"version-combinations-",level:3},{value:"Updating the technical specifications",id:"updating-the-technical-specifications",level:2},{value:"Displaying updated items",id:"displaying-updated-items",level:3},{value:"Major updates",id:"major-updates",level:2},{value:'2022/04/27 <span class="new"/>',id:"20220427-",level:3},{value:"2021/07/19",id:"20210719",level:3},{value:"2021/04/21",id:"20210421",level:3},{value:"2020/09/30",id:"20200930",level:3},{value:"2020/04/23",id:"20200423",level:3},{value:"2019/11/13",id:"20191113",level:3}],m={toc:d},u="wrapper";function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,n.kt)(u,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"updating-the-cube"},"Updating the cube"),(0,n.kt)("p",null,"Updating the cube's system software will add new features and improve stability, primarily for the communication specifications. For details on how to update the system software, please see the ",(0,n.kt)("a",{parentName:"p",href:"https://toio.io/update"},"toio System Software Update Guide"),"."),(0,n.kt)("h3",{id:"ble-protocol-version"},"BLE protocol version"),(0,n.kt)("p",null,"The communication specifications of the cube is versioned with the BLE protocol version. The BLE protocol version of your cube can be seen in ",(0,n.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/ble_configuration#requesting-the-ble-protocol-version"},"Configuration - Requesting the BLE protocol version"),"."),(0,n.kt)("h3",{id:"version-combinations-"},"Version combinations ",(0,n.kt)("span",{class:"update"})),(0,n.kt)("p",null,"The system software version corresponds to the BLE protocol version as follows."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"System Software"),(0,n.kt)("th",{parentName:"tr",align:null},"BLE Protocol Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"v02.0000"),(0,n.kt)("td",{parentName:"tr",align:null},"v2.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"v02.0001"),(0,n.kt)("td",{parentName:"tr",align:null},"v2.1.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"v02.0003"),(0,n.kt)("td",{parentName:"tr",align:null},"v2.1.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"v02.0004"),(0,n.kt)("td",{parentName:"tr",align:null},"v2.2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"v02.0005"),(0,n.kt)("td",{parentName:"tr",align:null},"v2.3.0")))),(0,n.kt)("h2",{id:"updating-the-technical-specifications"},"Updating the technical specifications"),(0,n.kt)("p",null,"The technical specifications for each BLE protocol version can be viewed on this website. The number in the upper right corner of the page indicates the BLE protocol version that corresponds to the specifications displayed. You can change the version by clicking on this number."),(0,n.kt)("h3",{id:"displaying-updated-items"},"Displaying updated items"),(0,n.kt)("p",null,"For the version displayed, any feature that has changed since the previous version will be marked with an update symbol (\ud83d\udd04) in the sidebar. In addition, items on each page are marked with ",(0,n.kt)("span",{class:"new"})," a symbol such as an arrow ",(0,n.kt)("span",{class:"update"})," for the user's reference."),(0,n.kt)("h2",{id:"major-updates"},"Major updates"),(0,n.kt)("h3",{id:"20220427-"},"2022/04/27 ",(0,n.kt)("span",{class:"new"})),(0,n.kt)("p",null,"Added cube's ",(0,n.kt)("a",{parentName:"p",href:"hardware_shape.md#3d-model"},"3D model data")," and information about ",(0,n.kt)("a",{parentName:"p",href:"hardware_shape.md#protruding-shapes-for-block-attachment"},"shapes of block attachment"),"."),(0,n.kt)("h3",{id:"20210719"},"2021/07/19"),(0,n.kt)("p",null,'Added "',(0,n.kt)("a",{parentName:"p",href:"https://toio.io/titles/gesundroid.html"},"Papercraft Creatures - Gesundroid"),'" toio ID information.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added information on ",(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/hardware_position_id#play-mat-included-with-papercraft-creatures---gesundroid"},"Play mat included with Papercraft Creatures - Gesundroid"))),(0,n.kt)("h3",{id:"20210421"},"2021/04/21"),(0,n.kt)("p",null,"Added information on the cube's system software v02.0005 (BLE protocol version v2.3.0)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Changed advertising packet (Complete Local Name)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_communication_overview#discovering-the-cube"},"Communication overview - Discovering the cube")))),(0,n.kt)("li",{parentName:"ul"},"Added posture angle detection functions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_high_precision_tilt_sensor"},"Communication specifications for acquisition of posture angle detection")))),(0,n.kt)("li",{parentName:"ul"},"Added magnetic sensor functions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_magnetic_sensor"},"Communication specifications for acquisition of magnetic sensor information"))))),(0,n.kt)("h3",{id:"20200930"},"2020/09/30"),(0,n.kt)("p",null,"Added information about the cube's system software v02.0004 (BLE protocol version v2.2.0)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/how_to_use_cube#checking-the-remaining-battery-level"},"How to view remaining battery level")),(0,n.kt)("li",{parentName:"ul"},"Added identification sensor notification frequency settings",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_configuration#identification-sensor-id-notification-settings"},"Identification sensor ID notification settings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_configuration#identification-sensor-id-missed-notification-settings"},"Identification sensor ID missed notification settings")))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_sensor#shake-detection"},"Shake detection")),(0,n.kt)("li",{parentName:"ul"},"Added magnetic sensor functions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/hardware_magnet"},"Magnetic sensor hardware specifications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_magnetic_sensor"},"Communication specifications for magnetic sensor information acquisition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_configuration#magnetic-sensor-settings"},"Enabling magnetic sensor")))),(0,n.kt)("li",{parentName:"ul"},"Added motor speed information functions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_motor#obtaining-motor-speed-information"},"Acquisition of motor speed information")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_configuration#motor-speed-information-acquisition-settings"},"Enabling acquisition of motor speed information")))),(0,n.kt)("li",{parentName:"ul"},"toio ID information moved from communication specifications to hardware specifications.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/hardware_position_id"},"Position ID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/hardware_standard_id"},"Standard ID")))),(0,n.kt)("li",{parentName:"ul"},'Added "',(0,n.kt)("a",{parentName:"li",href:"https://toio.io/titles/toio-collection-extension.html"},"toio COLLECTION Expansion Pack"),'" and "',(0,n.kt)("a",{parentName:"li",href:"https://toio.io/titles/picotons.html"},"PICOTONS"),'" toio ID information',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/hardware_standard_id#scanning-marks-included-with-the-toio-collection-extension-pack"},"Standard ID - toio COLLECTION Expansion Pack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/hardware_position_id#mats-included-with-picotons"},"Position ID - PICOTONS"))))),(0,n.kt)("h3",{id:"20200423"},"2020/04/23"),(0,n.kt)("p",null,"Added information on the simple play mat and simple card included with the toio Core Cube (single package)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Moved toio ID information to ",(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/hardware_position_id"},"Position ID")," and ",(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/hardware_standard_id"},"Standard ID"),"."),(0,n.kt)("li",{parentName:"ul"},"Added information on the ",(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/hardware_position_id#simple-play-mat-included-with-the-toio-core-cube-single-package"},"Simple play mat")," and ",(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/hardware_standard_id#simple-card-included-with-the-toio-core-cube-single-package"},"Simple card")," included with the toio Core Cube (single package)")),(0,n.kt)("h3",{id:"20191113"},"2019/11/13"),(0,n.kt)("p",null,"The following changes and additions have been made with BLE protocol version v2.1.0."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_sensor"},"Double-tap detection/position detection")),(0,n.kt)("li",{parentName:"ul"},"Expanded valid range for ",(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_motor#motor-speed-command-values"},"Motor speed command values"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The maximum value for speed commands increased from ",(0,n.kt)("inlineCode",{parentName:"li"},"100")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"115")," to allow for faster movement."),(0,n.kt)("li",{parentName:"ul"},"The minimum value for speed commands decreased from ",(0,n.kt)("inlineCode",{parentName:"li"},"10")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"8")," to allow for slower movement."))),(0,n.kt)("li",{parentName:"ul"},"Added variations to motor controls",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_motor#motor-control-with-target-specified"},"Motor control with target specified")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_motor#motor-control-with-multiple-targets-specified"},"Motor control with multiple targets specified")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/toio-spec/en/docs/ble_motor#motor-control-with-acceleration-specified"},"Motor control with acceleration specified"))))),(0,n.kt)("p",null,"The detailed specifications are described on this website as well as partially explained on the ",(0,n.kt)("a",{parentName:"p",href:"https://toio.io/blog/"},"toio blog"),". Please also refer to the blog for the specification details."))}h.isMDXComponent=!0}}]);