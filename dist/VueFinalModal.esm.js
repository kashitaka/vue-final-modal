import{ref as e,inject as t,reactive as n,computed as o,watch as a,onMounted as r,onBeforeUnmount as l,nextTick as i,withScopeId as u,withDirectives as f,openBlock as d,createBlock as c,createVNode as s,Transition as v,createCommentVNode as p,withModifiers as y,renderSlot as m,vShow as b}from"vue";function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var C,A,x=function(e){return function(e,t){return k(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},B=function(e){return e==document.activeElement},M=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var t,n,o;return t=e,(n=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||B(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;B(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=x(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&g(t.prototype,n),o&&g(t,o),e}(),j=[],I=function(e,t){if(e){if(!j.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};j=[].concat(k(j),[n]),function(e){if(void 0===A){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);A=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}void 0===C&&(C=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},T=function(e){e?(j=j.filter((function(t){return t.targetElement!==e}))).length||(void 0!==A&&(document.body.style.paddingRight=A,A=void 0),void 0!==C&&(document.body.style.overflow=C,C=void 0)):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},L="enter",V="entering",P="leave",D="leavng",_={name:"VueFinalModal",props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[String,Object,Array],default:""},overlayStyle:{type:[String,Object,Array],default:""},contentStyle:{type:[String,Object,Array],default:""},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=h(e);return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed"],setup:function(u,f){var d=f.emit,c=Symbol("vfm"),s=e(null),v=e(null),p=e(null),y=t(u.options.key),m=e(null),b=new M,h=e(!1),g=n({modal:!1,overlay:!1}),E=e(null),S=e(null),k=e(!1),w=e({}),C=o((function(){return(u.hideOverlay||E.value===P)&&S.value===P})),A=o((function(){return!1===u.zIndex?!!u.zIndexAuto&&+u.zIndexBase+2*(m.value||0):u.zIndex})),x=o((function(){return O({},!1!==A.value&&{zIndex:A.value})}));function B(){return{uid:c,props:u,emit:d,vfmContainer:p,vfmContent:v,getAttachElement:z,modalStackIndex:m,visibility:g,handleLockScroll:N,$focusTrap:b,toggle:F,params:w}}function j(){if(u.modelValue){if(R("before-open",!1))return;var e=z();if(e||!1===u.attach){!1!==u.attach&&e.appendChild(s.value);var t=y.openedModals.findIndex((function(e){return e.uid===c}));-1!==t&&y.openedModals.splice(t,1),y.openedModals.push(B()),m.value=y.openedModals.length-1,N(),y.openedModals.filter((function(e){return e.uid!==c})).forEach((function(t,n){t.getAttachElement()===e&&(t.modalStackIndex.value=n,t.visibility.overlay=!1)})),h.value=!0,i((function(){g.overlay=!0,g.modal=!0}))}else!1!==e&&console.warn("Unable to locate target ".concat(u.attach))}}function _(){var e=y.openedModals.findIndex((function(e){return e.uid===c}));if(-1!==e&&y.openedModals.splice(e,1),y.openedModals.length>0){var t=y.openedModals[y.openedModals.length-1];t.props.focusTrap&&t.$focusTrap.firstElement().focus(),(t.props.focusRetain||t.props.focusTrap)&&t.vfmContainer.value.focus(),!t.props.hideOverlay&&(t.visibility.overlay=!0)}g.overlay=!1,g.modal=!1}function N(){u.modelValue&&(u.lockScroll?I(v,{reserveScrollBarGap:!0}):T(v))}function z(){return!1!==u.attach&&("string"==typeof u.attach?!!window&&window.document.querySelector(u.attach):u.attach)}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return O({ref:B()},e)}function R(e,t){var n=!1,o=K({type:e,stop:function(){n=!0}});return d(e,o),!!n&&(k.value=!0,i((function(){d("update:modelValue",t)})),!0)}function F(e,t){var n="boolean"==typeof e?e:!u.modelValue;n&&2===arguments.length&&(w.value=t),d("update:modelValue",n)}return a((function(){return u.modelValue}),(function(e){if(k.value)k.value=!1;else if(j(),!e){if(R("before-close",!0))return;_()}})),a((function(){return u.lockScroll}),N),a((function(){return u.hideOverlay}),(function(e){u.modelValue&&!e&&(g.overlay=!0)})),a((function(){return u.attach}),j),a(C,(function(e){e&&(h.value=!1)}),{flush:"post"}),y.modals.push(B()),r((function(){j()})),l((function(){var e;_(),u.lockScroll&&T(v),null==s||null===(e=s.value)||void 0===e||e.remove();var t=y.modals.findIndex((function(e){return e.uid===c}));y.modals.splice(t,1)})),{root:s,vfmContent:v,vfmContainer:p,visible:h,visibility:g,params:w,calculateZIndex:A,bindStyle:x,beforeOverlayEnter:function(){E.value=V},afterOverlayEnter:function(){E.value=L},beforeOverlayLeave:function(){E.value=D},afterOverlayLeave:function(){E.value=P},beforeModalEnter:function(){S.value=V},afterModalEnter:function(){S.value=L,(u.focusRetain||u.focusTrap)&&p.value.focus(),u.focusTrap&&b.enable(p.value),d("opened",K({type:"opened"}))},beforeModalLeave:function(){S.value=D,b.enabled()&&b.disable()},afterModalLeave:function(){S.value=P,m.value=null,u.lockScroll&&T(v);var e=!1,t=K({type:"closed",stop:function(){e=!0}});d("closed",t),e||(w.value={})},onClickContainer:function(){d("click-outside",K({type:"click-outside"})),u.clickToClose&&d("update:modelValue",!1)},onEsc:function(e){27===e.keyCode&&h.value&&u.escToClose&&d("update:modelValue",!1)}}}},N=u("data-v-2836fdb5"),z=N((function(e,t,n,o,a,r){return n.ssr||o.visible?f((d(),c("div",{key:0,ref:"root",style:o.bindStyle,class:["vfm vfm--inset",[!1===n.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":n.preventClick}]],onKeydown:t[2]||(t[2]=function(){return o.onEsc&&o.onEsc.apply(o,arguments)})},[s(v,{name:n.overlayTransition,onBeforeEnter:o.beforeOverlayEnter,onAfterEnter:o.afterOverlayEnter,onBeforeLeave:o.beforeOverlayLeave,onAfterLeave:o.afterOverlayLeave},{default:N((function(){return[!n.hideOverlay&&o.visibility.overlay?(d(),c("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",n.overlayClass],style:n.overlayStyle},null,6)):p("v-if",!0)]})),_:1},8,["name","onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),s(v,{name:n.transition,onBeforeEnter:o.beforeModalEnter,onAfterEnter:o.afterModalEnter,onBeforeLeave:o.beforeModalLeave,onAfterLeave:o.afterModalLeave},{default:N((function(){return[f(s("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",n.classes],style:n.styles,"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onClick:t[1]||(t[1]=y((function(){return o.onClickContainer&&o.onClickContainer.apply(o,arguments)}),["self"]))},[s("div",{ref:"vfmContent",class:["vfm__content",[n.contentClass,{"vfm--prevent-auto":n.preventClick}]],style:n.contentStyle},[m(e.$slots,"default",{params:o.params})],6)],14,["aria-expanded"]),[[b,o.visibility.modal]])]})),_:3},8,["name","onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[b,!n.ssr||o.visible]]):p("v-if",!0)}));function K(e,t){var n={show:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];this.toggle.apply(this,[e,!0].concat(n))},hide:function(e){this.toggle(e,!1)},hideAll:function(){this.openedModals.forEach((function(e){e.emit("update:modelValue",!1)}))},toggle:function(e){var t=this.get(e);if(void 0!==t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];t.toggle.apply(t,o)}},get:function(e){return this.modals.find((function(t){return t.props.name===e}))},openedModals:[],modals:[]};Object.defineProperty(e.config.globalProperties,t.key,{get:function(){return n}}),e.provide(t.key,n)}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n"),_.render=z,_.__scopeId="data-v-2836fdb5",_.__file="lib/VueFinalModal.vue";var R={componentName:"VueFinalModal",key:"$vfm"};export default function(){return{install:function(e,t){var n=Object.assign({},R,t),o=e.config.globalProperties[n.key];e._context.components[n.componentName]?"undefined"!=typeof window&&console.warn(o?"[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal.":"[vue-final-modal] Duplicate registration componentName of VueFinalModal."):(o||K(e,n),function(e,t){e.component(t.componentName,O(O({},_),{},{props:O(O({},_.props),{},{options:{type:Object,default:function(){return t}}})}))}(e,n))}}}
//# sourceMappingURL=VueFinalModal.esm.js.map
