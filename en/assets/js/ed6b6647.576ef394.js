"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:(e,t,n)=>{function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{Z:()=>a,b:()=>o})},4996:(e,t,n)=>{n.d(t,{C:()=>r,Z:()=>i});var o=n(2263),a=n(3919);function r(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,c=void 0!==i&&i,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},2389:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),a=n(9913);function r(){return(0,o.useContext)(a._)}},4243:(e,t,n)=>{n.d(t,{E:()=>c});var o=n(7462),a=n(4996),r=n(6882),i=n(7294),c=function(e){var t=e.props,n=(0,i.useRef)(),c=(0,a.Z)("/model/toiocorecube_v003.gltf"),s=(0,r.L)(c),l=s.nodes,d=s.materials;return i.createElement("group",(0,o.Z)({ref:n,rotation:[Math.PI/2,0,Math.PI/2]},t,{dispose:null}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:l.toiocorecube_v003_1.geometry,material:d.base}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:l.toiocorecube_v003_2.geometry,material:d.camera}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:l.toiocorecube_v003_3.geometry,material:d.tire}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:l.toiocorecube_v003_4.geometry,material:d.button}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:l.toiocorecube_v003_5.geometry,material:d.pin}),i.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:l.toiocorecube_v003_6.geometry,material:d.logo}))}},1756:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>z,default:()=>Y,frontMatter:()=>I,metadata:()=>R,toc:()=>H});var o,a,r=n(7462),i=n(3366),c=n(7294),s=n(3905),l=n(4996),d=["title","titleId"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p=function(e){var t=e.title,n=e.titleId,r=u(e,d);return c.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":n},r),t?c.createElement("title",{id:n},t):null,o||(o=c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),a||(a=c.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})))};var h={button:"button button--outline button--primary",dropdown:"dropdown__link"},b=function(e){var t=e.type,n=void 0===t?"button":t,o=e.label,a=e.fileUrl,r="button"===n;return c.createElement("a",{className:h[n],style:r?{display:"flex",justifyContent:"center",alignItems:"center"}:{},href:a,download:!0,onClick:function(){"function"==typeof gtag&&gtag("event","download",{download_label:o,download_file_url:a,download_from:location.href})}},o,r&&c.createElement(p,{fill:"currentColor",style:{marginLeft:8,width:"1.5em",height:"1.5em"}}))};const f="buttonGroupSimple_8dRK",v="buttonGroupDropdown_PcG8";var g=[{label:"FBX",path:"/model/toiocorecube_v003.fbx"},{label:"OBJ",path:"/model/toiocorecube_v003.obj.zip"},{label:"GLTF",path:"/model/toiocorecube_v003.gltf"},{label:"STL",path:"/model/toiocorecube_v001.stl"},{label:"STP",path:"/model/toiocorecube_v001.stp"}],y=function(){return c.createElement(c.Fragment,null,c.createElement("div",{className:v},c.createElement(w,null)),c.createElement("div",{className:f},c.createElement(E,null)))},E=function(){return c.createElement("div",{className:"button-group--block",style:{gap:8,flexWrap:"wrap"}},g.map((function(e){var t=e.label,n=e.path;return c.createElement(b,{key:"key-button-"+t,label:t,fileUrl:(0,l.Z)(n)})})))},w=function(){return c.createElement("div",{className:"dropdown dropdown--hoverable"},c.createElement("button",{className:"button button--primary"},"Select Type"),c.createElement("ul",{className:"dropdown__menu"},g.map((function(e){var t=e.label,n=e.path;return c.createElement("li",{key:"key-dropdown-"+t},c.createElement(b,{type:"dropdown",label:t,fileUrl:(0,l.Z)(n)}))}))))},O=n(1262),P=n(6254),k=n(2109),T=n(52),j=n(7433),M=n(1764);function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=n(9477);const S=(e,t)=>(e%t+t)%t;class A extends _.EventDispatcher{constructor(e,t){super(),N(this,"object",void 0),N(this,"domElement",void 0),N(this,"enabled",!0),N(this,"target",new _.Vector3),N(this,"minDistance",0),N(this,"maxDistance",1/0),N(this,"minZoom",0),N(this,"maxZoom",1/0),N(this,"minPolarAngle",0),N(this,"maxPolarAngle",Math.PI),N(this,"minAzimuthAngle",-1/0),N(this,"maxAzimuthAngle",1/0),N(this,"enableDamping",!1),N(this,"dampingFactor",.05),N(this,"enableZoom",!0),N(this,"zoomSpeed",1),N(this,"enableRotate",!0),N(this,"rotateSpeed",1),N(this,"enablePan",!0),N(this,"panSpeed",1),N(this,"screenSpacePanning",!0),N(this,"keyPanSpeed",7),N(this,"autoRotate",!1),N(this,"autoRotateSpeed",2),N(this,"reverseOrbit",!1),N(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),N(this,"mouseButtons",{LEFT:_.MOUSE.ROTATE,MIDDLE:_.MOUSE.DOLLY,RIGHT:_.MOUSE.PAN}),N(this,"touches",{ONE:_.TOUCH.ROTATE,TWO:_.TOUCH.DOLLY_PAN}),N(this,"target0",void 0),N(this,"position0",void 0),N(this,"zoom0",void 0),N(this,"_domElementKeyEvents",null),N(this,"getPolarAngle",void 0),N(this,"getAzimuthalAngle",void 0),N(this,"setPolarAngle",void 0),N(this,"setAzimuthalAngle",void 0),N(this,"getDistance",void 0),N(this,"listenToKeyEvents",void 0),N(this,"saveState",void 0),N(this,"reset",void 0),N(this,"update",void 0),N(this,"connect",void 0),N(this,"dispose",void 0),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object instanceof _.PerspectiveCamera?this.object.zoom:1,this.getPolarAngle=()=>l.phi,this.getAzimuthalAngle=()=>l.theta,this.setPolarAngle=e=>{let t=S(e,2*Math.PI),o=l.phi;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),d.phi=t-o,n.update()},this.setAzimuthalAngle=e=>{let t=S(e,2*Math.PI),o=l.theta;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),d.theta=t-o,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",W),this._domElementKeyEvents=e},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object instanceof _.PerspectiveCamera?n.object.zoom:1},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object instanceof _.PerspectiveCamera&&(n.object.zoom=n.zoom0,n.object.updateProjectionMatrix()),n.dispatchEvent(o),n.update(),c=i.NONE},this.update=(()=>{const t=new _.Vector3,a=(new _.Quaternion).setFromUnitVectors(e.up,new _.Vector3(0,1,0)),r=a.clone().invert(),h=new _.Vector3,b=new _.Quaternion,f=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(a),l.setFromVector3(t),n.autoRotate&&c===i.NONE&&j(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(l.theta+=d.theta*n.dampingFactor,l.phi+=d.phi*n.dampingFactor):(l.theta+=d.theta,l.phi+=d.phi);let v=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(v)&&isFinite(g)&&(v<-Math.PI?v+=f:v>Math.PI&&(v-=f),g<-Math.PI?g+=f:g>Math.PI&&(g-=f),l.theta=v<=g?Math.max(v,Math.min(g,l.theta)):l.theta>(v+g)/2?Math.max(v,l.theta):Math.min(g,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=m,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),!0===n.enableDamping?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),t.setFromSpherical(l),t.applyQuaternion(r),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),u.set(0,0,0)),m=1,!!(p||h.distanceToSquared(n.object.position)>s||8*(1-b.dot(n.object.quaternion))>s)&&(n.dispatchEvent(o),h.copy(n.object.position),b.copy(n.object.quaternion),p=!1,!0)}})(),this.connect=e=>{e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",X),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",G)},this.dispose=()=>{var e,t,o,a,r,i;null===(e=n.domElement)||void 0===e||e.removeEventListener("contextmenu",q),null===(t=n.domElement)||void 0===t||t.removeEventListener("pointerdown",X),null===(o=n.domElement)||void 0===o||o.removeEventListener("pointercancel",B),null===(a=n.domElement)||void 0===a||a.removeEventListener("wheel",G),null===(r=n.domElement)||void 0===r||r.ownerDocument.removeEventListener("pointermove",F),null===(i=n.domElement)||void 0===i||i.ownerDocument.removeEventListener("pointerup",K),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",W)};const n=this,o={type:"change"},a={type:"start"},r={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=i.NONE;const s=1e-6,l=new _.Spherical,d=new _.Spherical;let m=1;const u=new _.Vector3;let p=!1;const h=new _.Vector2,b=new _.Vector2,f=new _.Vector2,v=new _.Vector2,g=new _.Vector2,y=new _.Vector2,E=new _.Vector2,w=new _.Vector2,O=new _.Vector2,P=[],k={};function T(){return Math.pow(.95,n.zoomSpeed)}function j(e){n.reverseOrbit?d.theta+=e:d.theta-=e}function M(e){n.reverseOrbit?d.phi+=e:d.phi-=e}const A=(()=>{const e=new _.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),u.add(e)}})(),L=(()=>{const e=new _.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),u.add(e)}})(),D=(()=>{const e=new _.Vector3;return function(t,o){const a=n.domElement;if(a&&n.object instanceof _.PerspectiveCamera&&n.object.isPerspectiveCamera){const r=n.object.position;e.copy(r).sub(n.target);let i=e.length();i*=Math.tan(n.object.fov/2*Math.PI/180),A(2*t*i/a.clientHeight,n.object.matrix),L(2*o*i/a.clientHeight,n.object.matrix)}else a&&n.object instanceof _.OrthographicCamera&&n.object.isOrthographicCamera?(A(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),L(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function x(e){n.object instanceof _.PerspectiveCamera&&n.object.isPerspectiveCamera?m/=e:n.object instanceof _.OrthographicCamera&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(e){n.object instanceof _.PerspectiveCamera&&n.object.isPerspectiveCamera?m*=e:n.object instanceof _.OrthographicCamera&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(e){h.set(e.clientX,e.clientY)}function z(e){v.set(e.clientX,e.clientY)}function R(){if(1==P.length)h.set(P[0].pageX,P[0].pageY);else{const e=.5*(P[0].pageX+P[1].pageX),t=.5*(P[0].pageY+P[1].pageY);h.set(e,t)}}function H(){if(1==P.length)v.set(P[0].pageX,P[0].pageY);else{const e=.5*(P[0].pageX+P[1].pageX),t=.5*(P[0].pageY+P[1].pageY);v.set(e,t)}}function Z(){const e=P[0].pageX-P[1].pageX,t=P[0].pageY-P[1].pageY,n=Math.sqrt(e*e+t*t);E.set(0,n)}function Y(e){if(1==P.length)b.set(e.pageX,e.pageY);else{const t=$(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);b.set(n,o)}f.subVectors(b,h).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(j(2*Math.PI*f.x/t.clientHeight),M(2*Math.PI*f.y/t.clientHeight)),h.copy(b)}function U(e){if(1==P.length)g.set(e.pageX,e.pageY);else{const t=$(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);g.set(n,o)}y.subVectors(g,v).multiplyScalar(n.panSpeed),D(y.x,y.y),v.copy(g)}function V(e){const t=$(e),o=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(o*o+a*a);w.set(0,r),O.set(0,Math.pow(w.y/E.y,n.zoomSpeed)),x(O.y),E.copy(w)}function X(e){if(!1!==n.enabled){var t,o;if(0===P.length)null===(t=n.domElement)||void 0===t||t.ownerDocument.addEventListener("pointermove",F),null===(o=n.domElement)||void 0===o||o.ownerDocument.addEventListener("pointerup",K);!function(e){P.push(e)}(e),"touch"===e.pointerType?function(e){switch(J(e),P.length){case 1:switch(n.touches.ONE){case _.TOUCH.ROTATE:if(!1===n.enableRotate)return;R(),c=i.TOUCH_ROTATE;break;case _.TOUCH.PAN:if(!1===n.enablePan)return;H(),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(n.touches.TWO){case _.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&Z(),n.enablePan&&H(),c=i.TOUCH_DOLLY_PAN;break;case _.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&Z(),n.enableRotate&&R(),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&n.dispatchEvent(a)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){E.set(e.clientX,e.clientY)}(e),c=i.DOLLY;break;case _.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;z(e),c=i.PAN}else{if(!1===n.enableRotate)return;I(e),c=i.ROTATE}break;case _.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;I(e),c=i.ROTATE}else{if(!1===n.enablePan)return;z(e),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&n.dispatchEvent(a)}(e)}}function F(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(J(e),c){case i.TOUCH_ROTATE:if(!1===n.enableRotate)return;Y(e),n.update();break;case i.TOUCH_PAN:if(!1===n.enablePan)return;U(e),n.update();break;case i.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&V(e),n.enablePan&&U(e)}(e),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&V(e),n.enableRotate&&Y(e)}(e),n.update();break;default:c=i.NONE}}(e):function(e){if(!1===n.enabled)return;switch(c){case i.ROTATE:if(!1===n.enableRotate)return;!function(e){b.set(e.clientX,e.clientY),f.subVectors(b,h).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(j(2*Math.PI*f.x/t.clientHeight),M(2*Math.PI*f.y/t.clientHeight)),h.copy(b),n.update()}(e);break;case i.DOLLY:if(!1===n.enableZoom)return;!function(e){w.set(e.clientX,e.clientY),O.subVectors(w,E),O.y>0?x(T()):O.y<0&&C(T()),E.copy(w),n.update()}(e);break;case i.PAN:if(!1===n.enablePan)return;!function(e){g.set(e.clientX,e.clientY),y.subVectors(g,v).multiplyScalar(n.panSpeed),D(y.x,y.y),v.copy(g),n.update()}(e)}}(e))}function K(e){var t,o,a;(Q(e),0===P.length)&&(null===(t=n.domElement)||void 0===t||t.releasePointerCapture(e.pointerId),null===(o=n.domElement)||void 0===o||o.ownerDocument.removeEventListener("pointermove",F),null===(a=n.domElement)||void 0===a||a.ownerDocument.removeEventListener("pointerup",K));n.dispatchEvent(r),c=i.NONE}function B(e){Q(e)}function G(e){!1===n.enabled||!1===n.enableZoom||c!==i.NONE&&c!==i.ROTATE||(e.preventDefault(),n.dispatchEvent(a),function(e){e.deltaY<0?C(T()):e.deltaY>0&&x(T()),n.update()}(e),n.dispatchEvent(r))}function W(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:D(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:D(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:D(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:D(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function q(e){!1!==n.enabled&&e.preventDefault()}function Q(e){delete k[e.pointerId];for(let t=0;t<P.length;t++)if(P[t].pointerId==e.pointerId)return void P.splice(t,1)}function J(e){let t=k[e.pointerId];void 0===t&&(t=new _.Vector2,k[e.pointerId]=t),t.set(e.pageX,e.pageY)}function $(e){const t=e.pointerId===P[0].pointerId?P[1]:P[0];return k[t.pointerId]}void 0!==t&&this.connect(t),this.update()}}const L=c.forwardRef((({makeDefault:e,camera:t,regress:n,domElement:o,enableDamping:a=!0,onChange:i,onStart:s,onEnd:l,...d},m)=>{const u=(0,M.Ky)((e=>e.invalidate)),p=(0,M.Ky)((e=>e.camera)),h=(0,M.Ky)((e=>e.gl)),b=(0,M.Ky)((e=>e.events)),f=(0,M.Ky)((e=>e.set)),v=(0,M.Ky)((e=>e.get)),g=(0,M.Ky)((e=>e.performance)),y=t||p,E=o||b.connected||h.domElement,w=c.useMemo((()=>new A(y)),[y]);return(0,M.xQ)((()=>{w.enabled&&w.update()})),c.useEffect((()=>(w.connect(E),()=>{w.dispose()})),[E,n,w,u]),c.useEffect((()=>{const e=e=>{u(),n&&g.regress(),i&&i(e)};return w.addEventListener("change",e),s&&w.addEventListener("start",s),l&&w.addEventListener("end",l),()=>{s&&w.removeEventListener("start",s),l&&w.removeEventListener("end",l),w.removeEventListener("change",e)}}),[i,s,l]),c.useEffect((()=>{if(e){const e=v().controls;return f({controls:w}),()=>f({controls:e})}}),[e,w]),c.createElement("primitive",(0,r.Z)({ref:m,object:w,enableDamping:a},d))}));var D=n(4243),x=function(){var e=.025;return c.createElement(O.Z,{fallback:null},(function(){return c.createElement(M.Xz,{shadows:!0,resize:{polyfill:P.do}},c.createElement("color",{attach:"background",args:["#999"]}),c.createElement(c.Suspense,{fallback:null},c.createElement(D.E,null),c.createElement(k.j,{opacity:.2,scale:.05,blur:2,far:.01}),c.createElement(T.qA,{preset:"city"})),c.createElement(j.c,{makeDefault:!0,position:[0,.03,.06],near:.01}),c.createElement("ambientLight",{intensity:.8/3}),c.createElement("spotLight",{penumbra:1,position:[e,.05,e],intensity:1.6,castShadow:!0}),c.createElement("pointLight",{position:[-.05,-.0125,-.05],intensity:.8}),c.createElement(L,{enablePan:!1,enableZoom:!0,enableRotate:!0,autoRotate:!0,minDistance:.035,maxDistance:.5,target:[0,.01,0]}))}))},C=["components"],I={id:"hardware_shape",title:"Shape and size",sidebar_label:"Shape and size"},z=void 0,R={unversionedId:"hardware_shape",id:"version-2.3.0/hardware_shape",isDocsHomePage:!1,title:"Shape and size",description:"This section introduces the shape and size of the cube. All measurements are in millimeters.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.3.0/hardware_shape.mdx",sourceDirName:".",slug:"/hardware_shape",permalink:"/toio-spec/en/docs/hardware_shape",tags:[],version:"2.3.0",frontMatter:{id:"hardware_shape",title:"Shape and size",sidebar_label:"Shape and size"},sidebar:"version-2.3.0/docs",previous:{title:"Name of each part",permalink:"/toio-spec/en/docs/hardware_components"},next:{title:"Mobility performance",permalink:"/toio-spec/en/docs/hardware_other"}},H=[{value:'3D Model <span class="new"/>',id:"3d-model-",children:[]},{value:'Protruding shapes for block attachment <span class="update"/>',id:"protruding-shapes-for-block-attachment-",children:[]},{value:"Sides",id:"sides",children:[]},{value:"Bottom",id:"bottom",children:[]}],Z={toc:H};function Y(e){var t=e.components,o=(0,i.Z)(e,C);return(0,s.kt)("wrapper",(0,r.Z)({},Z,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section introduces the shape and size of the cube. All measurements are in millimeters."),(0,s.kt)("h2",{id:"3d-model-"},"3D Model ",(0,s.kt)("span",{class:"new"})),(0,s.kt)("p",null,"The 3D model data of the cube is available for download below."),(0,s.kt)(y,{mdxType:"ModelDownloadButtonGroup"}),(0,s.kt)("div",{style:{aspectRatio:"4 / 2",margin:"1rem 0"}},(0,s.kt)(x,{mdxType:"Cube3DView"})),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The 3D model data are licensed under the ",(0,s.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nd/4.0/"},"Creative Commons Attribution-ShareAlike 4.0 International Public License"),". Please check ",(0,s.kt)("a",{parentName:"p",href:"/toio-spec/en/docs/about#license"},"here")," for details."))),(0,s.kt)("h2",{id:"protruding-shapes-for-block-attachment-"},"Protruding shapes for block attachment ",(0,s.kt)("span",{class:"update"})),(0,s.kt)("p",null,"The protrusions on the top of the cube can be used to attach standard toy blocks."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hardware size of the mount",src:n(872).Z})),(0,s.kt)("h2",{id:"sides"},"Sides"),(0,s.kt)("p",null,"The following figure indicates the size of the cube body as seen from the side, including when the top plate is attached."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hardware size in side view",src:n(444).Z})),(0,s.kt)("h2",{id:"bottom"},"Bottom"),(0,s.kt)("p",null,"The layout of the parts on the bottom of the cube is indicated in the figure below."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hardware size in bottom view",src:n(8774).Z})))}Y.isMDXComponent=!0},8774:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hardware_size_bottom_view-86afd5cac0407d7d60c599ea1411a8ef.svg"},872:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hardware_size_mount-3cf1b1bb2f8c5fcef15e1a1b5b9f7462.svg"},444:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hardware_size_side_view-871afc7e9cfa79169f5d2b15f8f36a0f.svg"}}]);