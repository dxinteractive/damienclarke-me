var bA=Object.defineProperty;var TA=(f,g,s)=>g in f?bA(f,g,{enumerable:!0,configurable:!0,writable:!0,value:s}):f[g]=s;var on=(f,g,s)=>(TA(f,typeof g!="symbol"?g+"":g,s),s);function _mergeNamespaces(f,g){for(var s=0;s<g.length;s++){const T=g[s];if(typeof T!="string"&&!Array.isArray(T)){for(const O in T)if(O!=="default"&&!(O in f)){const M=Object.getOwnPropertyDescriptor(T,O);M&&Object.defineProperty(f,O,M.get?M:{enumerable:!0,get:()=>T[O]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))T(O);new MutationObserver(O=>{for(const M of O)if(M.type==="childList")for(const p of M.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&T(p)}).observe(document,{childList:!0,subtree:!0});function s(O){const M={};return O.integrity&&(M.integrity=O.integrity),O.referrerpolicy&&(M.referrerPolicy=O.referrerpolicy),O.crossorigin==="use-credentials"?M.credentials="include":O.crossorigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function T(O){if(O.ep)return;O.ep=!0;const M=s(O);fetch(O.href,M)}})();function getDefaultExportFromCjs(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var react={exports:{}},react_development={exports:{}};/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(f,g){(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var s="18.2.0",T=Symbol.for("react.element"),O=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),X=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),ke=Symbol.iterator,Oe="@@iterator";function We(b){if(b===null||typeof b!="object")return null;var k=ke&&b[ke]||b[Oe];return typeof k=="function"?k:null}var Pe={current:null},ot={transition:null},Ie={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},It={current:null},Ge={},sr=null;function Un(b){sr=b}Ge.setExtraStackFrame=function(b){sr=b},Ge.getCurrentStack=null,Ge.getStackAddendum=function(){var b="";sr&&(b+=sr);var k=Ge.getCurrentStack;return k&&(b+=k()||""),b};var F=!1,Ht=!1,Sr=!1,it=!1,yt=!1,en={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ot,ReactCurrentOwner:It};en.ReactDebugCurrentFrame=Ge,en.ReactCurrentActQueue=Ie;function tn(b){{for(var k=arguments.length,V=new Array(k>1?k-1:0),q=1;q<k;q++)V[q-1]=arguments[q];mn("warn",b,V)}}function tt(b){{for(var k=arguments.length,V=new Array(k>1?k-1:0),q=1;q<k;q++)V[q-1]=arguments[q];mn("error",b,V)}}function mn(b,k,V){{var q=en.ReactDebugCurrentFrame,pe=q.getStackAddendum();pe!==""&&(k+="%s",V=V.concat([pe]));var Be=V.map(function(Me){return String(Me)});Be.unshift("Warning: "+k),Function.prototype.apply.call(console[b],console,Be)}}var Qn={};function hn(b,k){{var V=b.constructor,q=V&&(V.displayName||V.name)||"ReactClass",pe=q+"."+k;if(Qn[pe])return;tt("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",k,q),Qn[pe]=!0}}var ur={isMounted:function(b){return!1},enqueueForceUpdate:function(b,k,V){hn(b,"forceUpdate")},enqueueReplaceState:function(b,k,V,q){hn(b,"replaceState")},enqueueSetState:function(b,k,V,q){hn(b,"setState")}},$t=Object.assign,sn={};Object.freeze(sn);function lr(b,k,V){this.props=b,this.context=k,this.refs=sn,this.updater=V||ur}lr.prototype.isReactComponent={},lr.prototype.setState=function(b,k){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,k,"setState")},lr.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};{var ha={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Yr=function(b,k){Object.defineProperty(lr.prototype,b,{get:function(){tn("%s(...) is deprecated in plain JavaScript React classes. %s",k[0],k[1])}})};for(var Gr in ha)ha.hasOwnProperty(Gr)&&Yr(Gr,ha[Gr])}function kr(){}kr.prototype=lr.prototype;function bn(b,k,V){this.props=b,this.context=k,this.refs=sn,this.updater=V||ur}var cr=bn.prototype=new kr;cr.constructor=bn,$t(cr,lr.prototype),cr.isPureReactComponent=!0;function dr(){var b={current:null};return Object.seal(b),b}var fr=Array.isArray;function un(b){return fr(b)}function Tn(b){{var k=typeof Symbol=="function"&&Symbol.toStringTag,V=k&&b[Symbol.toStringTag]||b.constructor.name||"Object";return V}}function vn(b){try{return Vt(b),!1}catch{return!0}}function Vt(b){return""+b}function nt(b){if(vn(b))return tt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Tn(b)),Vt(b)}function vt(b,k,V){var q=b.displayName;if(q)return q;var pe=k.displayName||k.name||"";return pe!==""?V+"("+pe+")":V}function Wt(b){return b.displayName||"Context"}function wn(b){if(b==null)return null;if(typeof b.tag=="number"&&tt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof b=="function")return b.displayName||b.name||null;if(typeof b=="string")return b;switch(b){case M:return"Fragment";case O:return"Portal";case H:return"Profiler";case p:return"StrictMode";case Z:return"Suspense";case oe:return"SuspenseList"}if(typeof b=="object")switch(b.$$typeof){case X:var k=b;return Wt(k)+".Consumer";case P:var V=b;return Wt(V._context)+".Provider";case G:return vt(b,b.render,"ForwardRef");case ae:var q=b.displayName||null;return q!==null?q:wn(b.type)||"Memo";case fe:{var pe=b,Be=pe._payload,Me=pe._init;try{return wn(Me(Be))}catch{return null}}}return null}var $=Object.prototype.hasOwnProperty,Qt={key:!0,ref:!0,__self:!0,__source:!0},Sn,Yn,Rn;Rn={};function Rr(b){if($.call(b,"ref")){var k=Object.getOwnPropertyDescriptor(b,"ref").get;if(k&&k.isReactWarning)return!1}return b.ref!==void 0}function Lt(b){if($.call(b,"key")){var k=Object.getOwnPropertyDescriptor(b,"key").get;if(k&&k.isReactWarning)return!1}return b.key!==void 0}function Or(b,k){var V=function(){Sn||(Sn=!0,tt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};V.isReactWarning=!0,Object.defineProperty(b,"key",{get:V,configurable:!0})}function Ir(b,k){var V=function(){Yn||(Yn=!0,tt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",k))};V.isReactWarning=!0,Object.defineProperty(b,"ref",{get:V,configurable:!0})}function qr(b){if(typeof b.ref=="string"&&It.current&&b.__self&&It.current.stateNode!==b.__self){var k=wn(It.current.type);Rn[k]||(tt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',k,b.ref),Rn[k]=!0)}}var ve=function(b,k,V,q,pe,Be,Me){var Xe={$$typeof:T,type:b,key:k,ref:V,props:Me,_owner:Be};return Xe._store={},Object.defineProperty(Xe._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(Xe,"_self",{configurable:!1,enumerable:!1,writable:!1,value:q}),Object.defineProperty(Xe,"_source",{configurable:!1,enumerable:!1,writable:!1,value:pe}),Object.freeze&&(Object.freeze(Xe.props),Object.freeze(Xe)),Xe};function xe(b,k,V){var q,pe={},Be=null,Me=null,Xe=null,dt=null;if(k!=null){Rr(k)&&(Me=k.ref,qr(k)),Lt(k)&&(nt(k.key),Be=""+k.key),Xe=k.__self===void 0?null:k.__self,dt=k.__source===void 0?null:k.__source;for(q in k)$.call(k,q)&&!Qt.hasOwnProperty(q)&&(pe[q]=k[q])}var Dt=arguments.length-2;if(Dt===1)pe.children=V;else if(Dt>1){for(var Ut=Array(Dt),Rt=0;Rt<Dt;Rt++)Ut[Rt]=arguments[Rt+2];Object.freeze&&Object.freeze(Ut),pe.children=Ut}if(b&&b.defaultProps){var Pt=b.defaultProps;for(q in Pt)pe[q]===void 0&&(pe[q]=Pt[q])}if(Be||Me){var Yt=typeof b=="function"?b.displayName||b.name||"Unknown":b;Be&&Or(pe,Yt),Me&&Ir(pe,Yt)}return ve(b,Be,Me,Xe,dt,It.current,pe)}function Je(b,k){var V=ve(b.type,k,b.ref,b._self,b._source,b._owner,b.props);return V}function Ot(b,k,V){if(b==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var q,pe=$t({},b.props),Be=b.key,Me=b.ref,Xe=b._self,dt=b._source,Dt=b._owner;if(k!=null){Rr(k)&&(Me=k.ref,Dt=It.current),Lt(k)&&(nt(k.key),Be=""+k.key);var Ut;b.type&&b.type.defaultProps&&(Ut=b.type.defaultProps);for(q in k)$.call(k,q)&&!Qt.hasOwnProperty(q)&&(k[q]===void 0&&Ut!==void 0?pe[q]=Ut[q]:pe[q]=k[q])}var Rt=arguments.length-2;if(Rt===1)pe.children=V;else if(Rt>1){for(var Pt=Array(Rt),Yt=0;Yt<Rt;Yt++)Pt[Yt]=arguments[Yt+2];pe.children=Pt}return ve(b.type,Be,Me,Xe,dt,Dt,pe)}function gt(b){return typeof b=="object"&&b!==null&&b.$$typeof===T}var ln=".",Zt=":";function pr(b){var k=/[=:]/g,V={"=":"=0",":":"=2"},q=b.replace(k,function(pe){return V[pe]});return"$"+q}var xt=!1,me=/\/+/g;function ce(b){return b.replace(me,"$&/")}function Xt(b,k){return typeof b=="object"&&b!==null&&b.key!=null?(nt(b.key),pr(""+b.key)):k.toString(36)}function va(b,k,V,q,pe){var Be=typeof b;(Be==="undefined"||Be==="boolean")&&(b=null);var Me=!1;if(b===null)Me=!0;else switch(Be){case"string":case"number":Me=!0;break;case"object":switch(b.$$typeof){case T:case O:Me=!0}}if(Me){var Xe=b,dt=pe(Xe),Dt=q===""?ln+Xt(Xe,0):q;if(un(dt)){var Ut="";Dt!=null&&(Ut=ce(Dt)+"/"),va(dt,k,Ut,"",function(Au){return Au})}else dt!=null&&(gt(dt)&&(dt.key&&(!Xe||Xe.key!==dt.key)&&nt(dt.key),dt=Je(dt,V+(dt.key&&(!Xe||Xe.key!==dt.key)?ce(""+dt.key)+"/":"")+Dt)),k.push(dt));return 1}var Rt,Pt,Yt=0,Tt=q===""?ln:q+Zt;if(un(b))for(var Za=0;Za<b.length;Za++)Rt=b[Za],Pt=Tt+Xt(Rt,Za),Yt+=va(Rt,k,V,Pt,pe);else{var Ar=We(b);if(typeof Ar=="function"){var Qo=b;Ar===Qo.entries&&(xt||tn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),xt=!0);for(var Fi=Ar.call(Qo),ba,Ni=0;!(ba=Fi.next()).done;)Rt=ba.value,Pt=Tt+Xt(Rt,Ni++),Yt+=va(Rt,k,V,Pt,pe)}else if(Be==="object"){var wo=String(b);throw new Error("Objects are not valid as a React child (found: "+(wo==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":wo)+"). If you meant to render a collection of children, use an array instead.")}}return Yt}function Kr(b,k,V){if(b==null)return b;var q=[],pe=0;return va(b,q,"","",function(Be){return k.call(V,Be,pe++)}),q}function yo(b){var k=0;return Kr(b,function(){k++}),k}function Bo(b,k,V){Kr(b,function(){k.apply(this,arguments)},V)}function wi(b){return Kr(b,function(k){return k})||[]}function ya(b){if(!gt(b))throw new Error("React.Children.only expected to receive a single React element child.");return b}function ga(b){var k={$$typeof:X,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};k.Provider={$$typeof:P,_context:k};var V=!1,q=!1,pe=!1;{var Be={$$typeof:X,_context:k};Object.defineProperties(Be,{Provider:{get:function(){return q||(q=!0,tt("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),k.Provider},set:function(Me){k.Provider=Me}},_currentValue:{get:function(){return k._currentValue},set:function(Me){k._currentValue=Me}},_currentValue2:{get:function(){return k._currentValue2},set:function(Me){k._currentValue2=Me}},_threadCount:{get:function(){return k._threadCount},set:function(Me){k._threadCount=Me}},Consumer:{get:function(){return V||(V=!0,tt("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),k.Consumer}},displayName:{get:function(){return k.displayName},set:function(Me){pe||(tn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",Me),pe=!0)}}}),k.Consumer=Be}return k._currentRenderer=null,k._currentRenderer2=null,k}var Ur=-1,Jr=0,mr=1,Hn=2;function N(b){if(b._status===Ur){var k=b._result,V=k();if(V.then(function(Be){if(b._status===Jr||b._status===Ur){var Me=b;Me._status=mr,Me._result=Be}},function(Be){if(b._status===Jr||b._status===Ur){var Me=b;Me._status=Hn,Me._result=Be}}),b._status===Ur){var q=b;q._status=Jr,q._result=V}}if(b._status===mr){var pe=b._result;return pe===void 0&&tt(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,pe),"default"in pe||tt(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,pe),pe.default}else throw b._result}function ie(b){var k={_status:Ur,_result:b},V={$$typeof:fe,_payload:k,_init:N};{var q,pe;Object.defineProperties(V,{defaultProps:{configurable:!0,get:function(){return q},set:function(Be){tt("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),q=Be,Object.defineProperty(V,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return pe},set:function(Be){tt("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),pe=Be,Object.defineProperty(V,"propTypes",{enumerable:!0})}}})}return V}function _e(b){b!=null&&b.$$typeof===ae?tt("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof b!="function"?tt("forwardRef requires a render function but was given %s.",b===null?"null":typeof b):b.length!==0&&b.length!==2&&tt("forwardRef render functions accept exactly two parameters: props and ref. %s",b.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),b!=null&&(b.defaultProps!=null||b.propTypes!=null)&&tt("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var k={$$typeof:G,render:b};{var V;Object.defineProperty(k,"displayName",{enumerable:!1,configurable:!0,get:function(){return V},set:function(q){V=q,!b.name&&!b.displayName&&(b.displayName=q)}})}return k}var He;He=Symbol.for("react.module.reference");function rt(b){return!!(typeof b=="string"||typeof b=="function"||b===M||b===H||yt||b===p||b===Z||b===oe||it||b===Ne||F||Ht||Sr||typeof b=="object"&&b!==null&&(b.$$typeof===fe||b.$$typeof===ae||b.$$typeof===P||b.$$typeof===X||b.$$typeof===G||b.$$typeof===He||b.getModuleId!==void 0))}function C(b,k){rt(b)||tt("memo: The first argument must be a component. Instead received: %s",b===null?"null":typeof b);var V={$$typeof:ae,type:b,compare:k===void 0?null:k};{var q;Object.defineProperty(V,"displayName",{enumerable:!1,configurable:!0,get:function(){return q},set:function(pe){q=pe,!b.name&&!b.displayName&&(b.displayName=pe)}})}return V}function Fe(){var b=Pe.current;return b===null&&tt(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),b}function Ze(b){var k=Fe();if(b._context!==void 0){var V=b._context;V.Consumer===b?tt("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):V.Provider===b&&tt("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return k.useContext(b)}function Ct(b){var k=Fe();return k.useState(b)}function Mt(b,k,V){var q=Fe();return q.useReducer(b,k,V)}function lt(b){var k=Fe();return k.useRef(b)}function Ln(b,k){var V=Fe();return V.useEffect(b,k)}function _t(b,k){var V=Fe();return V.useInsertionEffect(b,k)}function yn(b,k){var V=Fe();return V.useLayoutEffect(b,k)}function Mr(b,k){var V=Fe();return V.useCallback(b,k)}function Ou(b,k){var V=Fe();return V.useMemo(b,k)}function Mu(b,k,V){var q=Fe();return q.useImperativeHandle(b,k,V)}function bs(b,k){{var V=Fe();return V.useDebugValue(b,k)}}function Ts(){var b=Fe();return b.useTransition()}function Ca(b){var k=Fe();return k.useDeferredValue(b)}function st(){var b=Fe();return b.useId()}function go(b,k,V){var q=Fe();return q.useSyncExternalStore(b,k,V)}var Zr=0,Si,Ri,Pa,Oi,ct,hr,ea;function qe(){}qe.__reactDisabledLog=!0;function Du(){{if(Zr===0){Si=console.log,Ri=console.info,Pa=console.warn,Oi=console.error,ct=console.group,hr=console.groupCollapsed,ea=console.groupEnd;var b={configurable:!0,enumerable:!0,value:qe,writable:!0};Object.defineProperties(console,{info:b,log:b,warn:b,error:b,group:b,groupCollapsed:b,groupEnd:b})}Zr++}}function jt(){{if(Zr--,Zr===0){var b={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:$t({},b,{value:Si}),info:$t({},b,{value:Ri}),warn:$t({},b,{value:Pa}),error:$t({},b,{value:Oi}),group:$t({},b,{value:ct}),groupCollapsed:$t({},b,{value:hr}),groupEnd:$t({},b,{value:ea})})}Zr<0&&tt("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var v=en.ReactCurrentDispatcher,Et;function _a(b,k,V){{if(Et===void 0)try{throw Error()}catch(pe){var q=pe.stack.trim().match(/\n( *(at )?)/);Et=q&&q[1]||""}return`
`+Et+b}}var ta=!1,_o;{var dn=typeof WeakMap=="function"?WeakMap:Map;_o=new dn}function Mi(b,k){if(!b||ta)return"";{var V=_o.get(b);if(V!==void 0)return V}var q;ta=!0;var pe=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var Be;Be=v.current,v.current=null,Du();try{if(k){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(Tt){q=Tt}Reflect.construct(b,[],Me)}else{try{Me.call()}catch(Tt){q=Tt}b.call(Me.prototype)}}else{try{throw Error()}catch(Tt){q=Tt}b()}}catch(Tt){if(Tt&&q&&typeof Tt.stack=="string"){for(var Xe=Tt.stack.split(`
`),dt=q.stack.split(`
`),Dt=Xe.length-1,Ut=dt.length-1;Dt>=1&&Ut>=0&&Xe[Dt]!==dt[Ut];)Ut--;for(;Dt>=1&&Ut>=0;Dt--,Ut--)if(Xe[Dt]!==dt[Ut]){if(Dt!==1||Ut!==1)do if(Dt--,Ut--,Ut<0||Xe[Dt]!==dt[Ut]){var Rt=`
`+Xe[Dt].replace(" at new "," at ");return b.displayName&&Rt.includes("<anonymous>")&&(Rt=Rt.replace("<anonymous>",b.displayName)),typeof b=="function"&&_o.set(b,Rt),Rt}while(Dt>=1&&Ut>=0);break}}}finally{ta=!1,v.current=Be,jt(),Error.prepareStackTrace=pe}var Pt=b?b.displayName||b.name:"",Yt=Pt?_a(Pt):"";return typeof b=="function"&&_o.set(b,Yt),Yt}function Di(b,k,V){return Mi(b,!1)}function ws(b){var k=b.prototype;return!!(k&&k.isReactComponent)}function Hr(b,k,V){if(b==null)return"";if(typeof b=="function")return Mi(b,ws(b));if(typeof b=="string")return _a(b);switch(b){case Z:return _a("Suspense");case oe:return _a("SuspenseList")}if(typeof b=="object")switch(b.$$typeof){case G:return Di(b.render);case ae:return Hr(b.type,k,V);case fe:{var q=b,pe=q._payload,Be=q._init;try{return Hr(Be(pe),k,V)}catch{}}}return""}var we={},Ai=en.ReactDebugCurrentFrame;function $o(b){if(b){var k=b._owner,V=Hr(b.type,b._source,k?k.type:null);Ai.setExtraStackFrame(V)}else Ai.setExtraStackFrame(null)}function Ss(b,k,V,q,pe){{var Be=Function.call.bind($);for(var Me in b)if(Be(b,Me)){var Xe=void 0;try{if(typeof b[Me]!="function"){var dt=Error((q||"React class")+": "+V+" type `"+Me+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof b[Me]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw dt.name="Invariant Violation",dt}Xe=b[Me](k,Me,q,V,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Dt){Xe=Dt}Xe&&!(Xe instanceof Error)&&($o(pe),tt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",q||"React class",V,Me,typeof Xe),$o(null)),Xe instanceof Error&&!(Xe.message in we)&&(we[Xe.message]=!0,$o(pe),tt("Failed %s type: %s",V,Xe.message),$o(null))}}}function bt(b){if(b){var k=b._owner,V=Hr(b.type,b._source,k?k.type:null);Un(V)}else Un(null)}var Ci;Ci=!1;function Pi(){if(It.current){var b=wn(It.current.type);if(b)return`

Check the render method of \``+b+"`."}return""}function et(b){if(b!==void 0){var k=b.fileName.replace(/^.*[\\\/]/,""),V=b.lineNumber;return`

Check your code at `+k+":"+V+"."}return""}function Rs(b){return b!=null?et(b.__source):""}var jn={};function Eo(b){var k=Pi();if(!k){var V=typeof b=="string"?b:b.displayName||b.name;V&&(k=`

Check the top-level render call using <`+V+">.")}return k}function qa(b,k){if(!(!b._store||b._store.validated||b.key!=null)){b._store.validated=!0;var V=Eo(k);if(!jn[V]){jn[V]=!0;var q="";b&&b._owner&&b._owner!==It.current&&(q=" It was passed a child from "+wn(b._owner.type)+"."),bt(b),tt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',V,q),bt(null)}}}function Os(b,k){if(typeof b=="object"){if(un(b))for(var V=0;V<b.length;V++){var q=b[V];gt(q)&&qa(q,k)}else if(gt(b))b._store&&(b._store.validated=!0);else if(b){var pe=We(b);if(typeof pe=="function"&&pe!==b.entries)for(var Be=pe.call(b),Me;!(Me=Be.next()).done;)gt(Me.value)&&qa(Me.value,k)}}}function gn(b){{var k=b.type;if(k==null||typeof k=="string")return;var V;if(typeof k=="function")V=k.propTypes;else if(typeof k=="object"&&(k.$$typeof===G||k.$$typeof===ae))V=k.propTypes;else return;if(V){var q=wn(k);Ss(V,b.props,"prop",q,b)}else if(k.PropTypes!==void 0&&!Ci){Ci=!0;var pe=wn(k);tt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",pe||"Unknown")}typeof k.getDefaultProps=="function"&&!k.getDefaultProps.isReactClassApproved&&tt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function qt(b){{for(var k=Object.keys(b.props),V=0;V<k.length;V++){var q=k[V];if(q!=="children"&&q!=="key"){bt(b),tt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",q),bt(null);break}}b.ref!==null&&(bt(b),tt("Invalid attribute `ref` supplied to `React.Fragment`."),bt(null))}}function Vo(b,k,V){var q=rt(b);if(!q){var pe="";(b===void 0||typeof b=="object"&&b!==null&&Object.keys(b).length===0)&&(pe+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Be=Rs(k);Be?pe+=Be:pe+=Pi();var Me;b===null?Me="null":un(b)?Me="array":b!==void 0&&b.$$typeof===T?(Me="<"+(wn(b.type)||"Unknown")+" />",pe=" Did you accidentally export a JSX literal instead of a component?"):Me=typeof b,tt("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",Me,pe)}var Xe=xe.apply(this,arguments);if(Xe==null)return Xe;if(q)for(var dt=2;dt<arguments.length;dt++)Os(arguments[dt],b);return b===M?qt(Xe):gn(Xe),Xe}var Dr=!1;function Gn(b){var k=Vo.bind(null,b);return k.type=b,Dr||(Dr=!0,tn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(k,"type",{enumerable:!1,get:function(){return tn("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:b}),b}}),k}function Kt(b,k,V){for(var q=Ot.apply(this,arguments),pe=2;pe<arguments.length;pe++)Os(arguments[pe],q.type);return gn(q),q}function Ka(b,k){var V=ot.transition;ot.transition={};var q=ot.transition;ot.transition._updatedFibers=new Set;try{b()}finally{if(ot.transition=V,V===null&&q._updatedFibers){var pe=q._updatedFibers.size;pe>10&&tn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),q._updatedFibers.clear()}}}var Lr=!1,Ea=null;function Ms(b){if(Ea===null)try{var k=("require"+Math.random()).slice(0,7),V=f&&f[k];Ea=V.call(f,"timers").setImmediate}catch{Ea=function(pe){Lr===!1&&(Lr=!0,typeof MessageChannel>"u"&&tt("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var Be=new MessageChannel;Be.port1.onmessage=pe,Be.port2.postMessage(void 0)}}return Ea(b)}var Ja=0,Wo=!1;function xi(b){{var k=Ja;Ja++,Ie.current===null&&(Ie.current=[]);var V=Ie.isBatchingLegacy,q;try{if(Ie.isBatchingLegacy=!0,q=b(),!V&&Ie.didScheduleLegacyUpdate){var pe=Ie.current;pe!==null&&(Ie.didScheduleLegacyUpdate=!1,bo(pe))}}catch(Pt){throw na(k),Pt}finally{Ie.isBatchingLegacy=V}if(q!==null&&typeof q=="object"&&typeof q.then=="function"){var Be=q,Me=!1,Xe={then:function(Pt,Yt){Me=!0,Be.then(function(Tt){na(k),Ja===0?ra(Tt,Pt,Yt):Pt(Tt)},function(Tt){na(k),Yt(Tt)})}};return!Wo&&typeof Promise<"u"&&Promise.resolve().then(function(){}).then(function(){Me||(Wo=!0,tt("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),Xe}else{var dt=q;if(na(k),Ja===0){var Dt=Ie.current;Dt!==null&&(bo(Dt),Ie.current=null);var Ut={then:function(Pt,Yt){Ie.current===null?(Ie.current=[],ra(dt,Pt,Yt)):Pt(dt)}};return Ut}else{var Rt={then:function(Pt,Yt){Pt(dt)}};return Rt}}}}function na(b){b!==Ja-1&&tt("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Ja=b}function ra(b,k,V){{var q=Ie.current;if(q!==null)try{bo(q),Ms(function(){q.length===0?(Ie.current=null,k(b)):ra(b,k,V)})}catch(pe){V(pe)}else k(b)}}var ut=!1;function bo(b){if(!ut){ut=!0;var k=0;try{for(;k<b.length;k++){var V=b[k];do V=V(!0);while(V!==null)}b.length=0}catch(q){throw b=b.slice(k+1),q}finally{ut=!1}}}var To=Vo,aa=Kt,jr=Gn,Ds={map:Kr,forEach:Bo,count:yo,toArray:wi,only:ya};g.Children=Ds,g.Component=lr,g.Fragment=M,g.Profiler=H,g.PureComponent=bn,g.StrictMode=p,g.Suspense=Z,g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=en,g.cloneElement=aa,g.createContext=ga,g.createElement=To,g.createFactory=jr,g.createRef=dr,g.forwardRef=_e,g.isValidElement=gt,g.lazy=ie,g.memo=C,g.startTransition=Ka,g.unstable_act=xi,g.useCallback=Mr,g.useContext=Ze,g.useDebugValue=bs,g.useDeferredValue=Ca,g.useEffect=Ln,g.useId=st,g.useImperativeHandle=Mu,g.useInsertionEffect=_t,g.useLayoutEffect=yn,g.useMemo=Ou,g.useReducer=Mt,g.useRef=lt,g.useState=Ct,g.useSyncExternalStore=go,g.useTransition=Ts,g.version=s,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()})(react_development,react_development.exports);(function(f){f.exports=react_development.exports})(react);const React=getDefaultExportFromCjs(react.exports),React$1=_mergeNamespaces({__proto__:null,default:React},[react.exports]);var client={},reactDom={exports:{}},reactDom_development={},scheduler={exports:{}},scheduler_development={};/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(f){(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var g=!1,s=!1,T=5;function O(ve,xe){var Je=ve.length;ve.push(xe),H(ve,xe,Je)}function M(ve){return ve.length===0?null:ve[0]}function p(ve){if(ve.length===0)return null;var xe=ve[0],Je=ve.pop();return Je!==xe&&(ve[0]=Je,P(ve,Je,0)),xe}function H(ve,xe,Je){for(var Ot=Je;Ot>0;){var gt=Ot-1>>>1,ln=ve[gt];if(X(ln,xe)>0)ve[gt]=xe,ve[Ot]=ln,Ot=gt;else return}}function P(ve,xe,Je){for(var Ot=Je,gt=ve.length,ln=gt>>>1;Ot<ln;){var Zt=(Ot+1)*2-1,pr=ve[Zt],xt=Zt+1,me=ve[xt];if(X(pr,xe)<0)xt<gt&&X(me,pr)<0?(ve[Ot]=me,ve[xt]=xe,Ot=xt):(ve[Ot]=pr,ve[Zt]=xe,Ot=Zt);else if(xt<gt&&X(me,xe)<0)ve[Ot]=me,ve[xt]=xe,Ot=xt;else return}}function X(ve,xe){var Je=ve.sortIndex-xe.sortIndex;return Je!==0?Je:ve.id-xe.id}var G=1,Z=2,oe=3,ae=4,fe=5;function Ne(ve,xe){}var ke=typeof performance=="object"&&typeof performance.now=="function";if(ke){var Oe=performance;f.unstable_now=function(){return Oe.now()}}else{var We=Date,Pe=We.now();f.unstable_now=function(){return We.now()-Pe}}var ot=1073741823,Ie=-1,It=250,Ge=5e3,sr=1e4,Un=ot,F=[],Ht=[],Sr=1,it=null,yt=oe,en=!1,tn=!1,tt=!1,mn=typeof setTimeout=="function"?setTimeout:null,Qn=typeof clearTimeout=="function"?clearTimeout:null,hn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ur(ve){for(var xe=M(Ht);xe!==null;){if(xe.callback===null)p(Ht);else if(xe.startTime<=ve)p(Ht),xe.sortIndex=xe.expirationTime,O(F,xe);else return;xe=M(Ht)}}function $t(ve){if(tt=!1,ur(ve),!tn)if(M(F)!==null)tn=!0,Rr(sn);else{var xe=M(Ht);xe!==null&&Lt($t,xe.startTime-ve)}}function sn(ve,xe){tn=!1,tt&&(tt=!1,Or()),en=!0;var Je=yt;try{var Ot;if(!s)return lr(ve,xe)}finally{it=null,yt=Je,en=!1}}function lr(ve,xe){var Je=xe;for(ur(Je),it=M(F);it!==null&&!g&&!(it.expirationTime>Je&&(!ve||Wt()));){var Ot=it.callback;if(typeof Ot=="function"){it.callback=null,yt=it.priorityLevel;var gt=it.expirationTime<=Je,ln=Ot(gt);Je=f.unstable_now(),typeof ln=="function"?it.callback=ln:it===M(F)&&p(F),ur(Je)}else p(F);it=M(F)}if(it!==null)return!0;var Zt=M(Ht);return Zt!==null&&Lt($t,Zt.startTime-Je),!1}function ha(ve,xe){switch(ve){case G:case Z:case oe:case ae:case fe:break;default:ve=oe}var Je=yt;yt=ve;try{return xe()}finally{yt=Je}}function Yr(ve){var xe;switch(yt){case G:case Z:case oe:xe=oe;break;default:xe=yt;break}var Je=yt;yt=xe;try{return ve()}finally{yt=Je}}function Gr(ve){var xe=yt;return function(){var Je=yt;yt=xe;try{return ve.apply(this,arguments)}finally{yt=Je}}}function kr(ve,xe,Je){var Ot=f.unstable_now(),gt;if(typeof Je=="object"&&Je!==null){var ln=Je.delay;typeof ln=="number"&&ln>0?gt=Ot+ln:gt=Ot}else gt=Ot;var Zt;switch(ve){case G:Zt=Ie;break;case Z:Zt=It;break;case fe:Zt=Un;break;case ae:Zt=sr;break;case oe:default:Zt=Ge;break}var pr=gt+Zt,xt={id:Sr++,callback:xe,priorityLevel:ve,startTime:gt,expirationTime:pr,sortIndex:-1};return gt>Ot?(xt.sortIndex=gt,O(Ht,xt),M(F)===null&&xt===M(Ht)&&(tt?Or():tt=!0,Lt($t,gt-Ot))):(xt.sortIndex=pr,O(F,xt),!tn&&!en&&(tn=!0,Rr(sn))),xt}function bn(){}function cr(){!tn&&!en&&(tn=!0,Rr(sn))}function dr(){return M(F)}function fr(ve){ve.callback=null}function un(){return yt}var Tn=!1,vn=null,Vt=-1,nt=T,vt=-1;function Wt(){var ve=f.unstable_now()-vt;return!(ve<nt)}function wn(){}function $(ve){if(ve<0||ve>125){console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");return}ve>0?nt=Math.floor(1e3/ve):nt=T}var Qt=function(){if(vn!==null){var ve=f.unstable_now();vt=ve;var xe=!0,Je=!0;try{Je=vn(xe,ve)}finally{Je?Sn():(Tn=!1,vn=null)}}else Tn=!1},Sn;if(typeof hn=="function")Sn=function(){hn(Qt)};else if(typeof MessageChannel<"u"){var Yn=new MessageChannel,Rn=Yn.port2;Yn.port1.onmessage=Qt,Sn=function(){Rn.postMessage(null)}}else Sn=function(){mn(Qt,0)};function Rr(ve){vn=ve,Tn||(Tn=!0,Sn())}function Lt(ve,xe){Vt=mn(function(){ve(f.unstable_now())},xe)}function Or(){Qn(Vt),Vt=-1}var Ir=wn,qr=null;f.unstable_IdlePriority=fe,f.unstable_ImmediatePriority=G,f.unstable_LowPriority=ae,f.unstable_NormalPriority=oe,f.unstable_Profiling=qr,f.unstable_UserBlockingPriority=Z,f.unstable_cancelCallback=fr,f.unstable_continueExecution=cr,f.unstable_forceFrameRate=$,f.unstable_getCurrentPriorityLevel=un,f.unstable_getFirstCallbackNode=dr,f.unstable_next=Yr,f.unstable_pauseExecution=bn,f.unstable_requestPaint=Ir,f.unstable_runWithPriority=ha,f.unstable_scheduleCallback=kr,f.unstable_shouldYield=Wt,f.unstable_wrapCallback=Gr,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()})(scheduler_development);(function(f){f.exports=scheduler_development})(scheduler);/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var f=react.exports,g=scheduler.exports,s=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,T=!1;function O(e){T=e}function M(e){if(!T){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];H("warn",e,n)}}function p(e){if(!T){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];H("error",e,n)}}function H(e,t,n){{var r=s.ReactDebugCurrentFrame,o=r.getStackAddendum();o!==""&&(t+="%s",n=n.concat([o]));var c=n.map(function(d){return String(d)});c.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,c)}}var P=0,X=1,G=2,Z=3,oe=4,ae=5,fe=6,Ne=7,ke=8,Oe=9,We=10,Pe=11,ot=12,Ie=13,It=14,Ge=15,sr=16,Un=17,F=18,Ht=19,Sr=21,it=22,yt=23,en=24,tn=25,tt=!0,mn=!1,Qn=!1,hn=!1,ur=!1,$t=!0,sn=!1,lr=!1,ha=!0,Yr=!0,Gr=!0,kr=new Set,bn={},cr={};function dr(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){bn[e]&&p("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),bn[e]=t;{var n=e.toLowerCase();cr[n]=e,e==="onDoubleClick"&&(cr.ondblclick=e)}for(var r=0;r<t.length;r++)kr.add(t[r])}var un=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tn=Object.prototype.hasOwnProperty;function vn(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function Vt(e){try{return nt(e),!1}catch{return!0}}function nt(e){return""+e}function vt(e,t){if(Vt(e))return p("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",t,vn(e)),nt(e)}function Wt(e){if(Vt(e))return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",vn(e)),nt(e)}function wn(e,t){if(Vt(e))return p("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",t,vn(e)),nt(e)}function $(e,t){if(Vt(e))return p("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",t,vn(e)),nt(e)}function Qt(e){if(Vt(e))return p("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",vn(e)),nt(e)}function Sn(e){if(Vt(e))return p("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",vn(e)),nt(e)}var Yn=0,Rn=1,Rr=2,Lt=3,Or=4,Ir=5,qr=6,ve=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",xe=ve+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",Je=new RegExp("^["+ve+"]["+xe+"]*$"),Ot={},gt={};function ln(e){return Tn.call(gt,e)?!0:Tn.call(Ot,e)?!1:Je.test(e)?(gt[e]=!0,!0):(Ot[e]=!0,p("Invalid attribute name: `%s`",e),!1)}function Zt(e,t,n){return t!==null?t.type===Yn:n?!1:e.length>2&&(e[0]==="o"||e[0]==="O")&&(e[1]==="n"||e[1]==="N")}function pr(e,t,n,r){if(n!==null&&n.type===Yn)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":{if(r)return!1;if(n!==null)return!n.acceptsBooleans;var o=e.toLowerCase().slice(0,5);return o!=="data-"&&o!=="aria-"}default:return!1}}function xt(e,t,n,r){if(t===null||typeof t>"u"||pr(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case Lt:return!t;case Or:return t===!1;case Ir:return isNaN(t);case qr:return isNaN(t)||t<1}return!1}function me(e){return Xt.hasOwnProperty(e)?Xt[e]:null}function ce(e,t,n,r,o,c,d){this.acceptsBooleans=t===Rr||t===Lt||t===Or,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=d}var Xt={},va=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];va.forEach(function(e){Xt[e]=new ce(e,Yn,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0],n=e[1];Xt[t]=new ce(t,Rn,!1,n,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Xt[e]=new ce(e,Rr,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Xt[e]=new ce(e,Rr,!1,e,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(e){Xt[e]=new ce(e,Lt,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Xt[e]=new ce(e,Lt,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Xt[e]=new ce(e,Or,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Xt[e]=new ce(e,qr,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Xt[e]=new ce(e,Ir,!1,e.toLowerCase(),null,!1,!1)});var Kr=/[\-\:]([a-z])/g,yo=function(e){return e[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace(Kr,yo);Xt[t]=new ce(t,Rn,!1,e,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace(Kr,yo);Xt[t]=new ce(t,Rn,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kr,yo);Xt[t]=new ce(t,Rn,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Xt[e]=new ce(e,Rn,!1,e.toLowerCase(),null,!1,!1)});var Bo="xlinkHref";Xt[Bo]=new ce("xlinkHref",Rn,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Xt[e]=new ce(e,Rn,!1,e.toLowerCase(),null,!0,!0)});var wi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,ya=!1;function ga(e){!ya&&wi.test(e)&&(ya=!0,p("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(e)))}function Ur(e,t,n,r){if(r.mustUseProperty){var o=r.propertyName;return e[o]}else{vt(n,t),r.sanitizeURL&&ga(""+n);var c=r.attributeName,d=null;if(r.type===Or){if(e.hasAttribute(c)){var y=e.getAttribute(c);return y===""?!0:xt(t,n,r,!1)?y:y===""+n?n:y}}else if(e.hasAttribute(c)){if(xt(t,n,r,!1))return e.getAttribute(c);if(r.type===Lt)return n;d=e.getAttribute(c)}return xt(t,n,r,!1)?d===null?n:d:d===""+n?n:d}}function Jr(e,t,n,r){{if(!ln(t))return;if(!e.hasAttribute(t))return n===void 0?void 0:null;var o=e.getAttribute(t);return vt(n,t),o===""+n?n:o}}function mr(e,t,n,r){var o=me(t);if(!Zt(t,o,r)){if(xt(t,n,o,r)&&(n=null),r||o===null){if(ln(t)){var c=t;n===null?e.removeAttribute(c):(vt(n,t),e.setAttribute(c,""+n))}return}var d=o.mustUseProperty;if(d){var y=o.propertyName;if(n===null){var E=o.type;e[y]=E===Lt?!1:""}else e[y]=n;return}var S=o.attributeName,A=o.attributeNamespace;if(n===null)e.removeAttribute(S);else{var U=o.type,I;U===Lt||U===Or&&n===!0?I="":(vt(n,S),I=""+n,o.sanitizeURL&&ga(I.toString())),A?e.setAttributeNS(A,S,I):e.setAttribute(S,I)}}}var Hn=Symbol.for("react.element"),N=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),rt=Symbol.for("react.provider"),C=Symbol.for("react.context"),Fe=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),Ct=Symbol.for("react.suspense_list"),Mt=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),Ln=Symbol.for("react.scope"),_t=Symbol.for("react.debug_trace_mode"),yn=Symbol.for("react.offscreen"),Mr=Symbol.for("react.legacy_hidden"),Ou=Symbol.for("react.cache"),Mu=Symbol.for("react.tracing_marker"),bs=Symbol.iterator,Ts="@@iterator";function Ca(e){if(e===null||typeof e!="object")return null;var t=bs&&e[bs]||e[Ts];return typeof t=="function"?t:null}var st=Object.assign,go=0,Zr,Si,Ri,Pa,Oi,ct,hr;function ea(){}ea.__reactDisabledLog=!0;function qe(){{if(go===0){Zr=console.log,Si=console.info,Ri=console.warn,Pa=console.error,Oi=console.group,ct=console.groupCollapsed,hr=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ea,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}go++}}function Du(){{if(go--,go===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:st({},e,{value:Zr}),info:st({},e,{value:Si}),warn:st({},e,{value:Ri}),error:st({},e,{value:Pa}),group:st({},e,{value:Oi}),groupCollapsed:st({},e,{value:ct}),groupEnd:st({},e,{value:hr})})}go<0&&p("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var jt=s.ReactCurrentDispatcher,v;function Et(e,t,n){{if(v===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);v=r&&r[1]||""}return`
`+v+e}}var _a=!1,ta;{var _o=typeof WeakMap=="function"?WeakMap:Map;ta=new _o}function dn(e,t){if(!e||_a)return"";{var n=ta.get(e);if(n!==void 0)return n}var r;_a=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var c;c=jt.current,jt.current=null,qe();try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(Q){r=Q}Reflect.construct(e,[],d)}else{try{d.call()}catch(Q){r=Q}e.call(d.prototype)}}else{try{throw Error()}catch(Q){r=Q}e()}}catch(Q){if(Q&&r&&typeof Q.stack=="string"){for(var y=Q.stack.split(`
`),E=r.stack.split(`
`),S=y.length-1,A=E.length-1;S>=1&&A>=0&&y[S]!==E[A];)A--;for(;S>=1&&A>=0;S--,A--)if(y[S]!==E[A]){if(S!==1||A!==1)do if(S--,A--,A<0||y[S]!==E[A]){var U=`
`+y[S].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),typeof e=="function"&&ta.set(e,U),U}while(S>=1&&A>=0);break}}}finally{_a=!1,jt.current=c,Du(),Error.prepareStackTrace=o}var I=e?e.displayName||e.name:"",W=I?Et(I):"";return typeof e=="function"&&ta.set(e,W),W}function Mi(e,t,n){return dn(e,!0)}function Di(e,t,n){return dn(e,!1)}function ws(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function Hr(e,t,n){if(e==null)return"";if(typeof e=="function")return dn(e,ws(e));if(typeof e=="string")return Et(e);switch(e){case Ze:return Et("Suspense");case Ct:return Et("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case Fe:return Di(e.render);case Mt:return Hr(e.type,t,n);case lt:{var r=e,o=r._payload,c=r._init;try{return Hr(c(o),t,n)}catch{}}}return""}function we(e){switch(e._debugOwner&&e._debugOwner.type,e._debugSource,e.tag){case ae:return Et(e.type);case sr:return Et("Lazy");case Ie:return Et("Suspense");case Ht:return Et("SuspenseList");case P:case G:case Ge:return Di(e.type);case Pe:return Di(e.type.render);case X:return Mi(e.type);default:return""}}function Ai(e){try{var t="",n=e;do t+=we(n),n=n.return;while(n);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function $o(e,t,n){var r=e.displayName;if(r)return r;var o=t.displayName||t.name||"";return o!==""?n+"("+o+")":n}function Ss(e){return e.displayName||"Context"}function bt(e){if(e==null)return null;if(typeof e.tag=="number"&&p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ie:return"Fragment";case N:return"Portal";case He:return"Profiler";case _e:return"StrictMode";case Ze:return"Suspense";case Ct:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case C:var t=e;return Ss(t)+".Consumer";case rt:var n=e;return Ss(n._context)+".Provider";case Fe:return $o(e,e.render,"ForwardRef");case Mt:var r=e.displayName||null;return r!==null?r:bt(e.type)||"Memo";case lt:{var o=e,c=o._payload,d=o._init;try{return bt(d(c))}catch{return null}}}return null}function Ci(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(r!==""?n+"("+r+")":n)}function Pi(e){return e.displayName||"Context"}function et(e){var t=e.tag,n=e.type;switch(t){case en:return"Cache";case Oe:var r=n;return Pi(r)+".Consumer";case We:var o=n;return Pi(o._context)+".Provider";case F:return"DehydratedFragment";case Pe:return Ci(n,n.render,"ForwardRef");case Ne:return"Fragment";case ae:return n;case oe:return"Portal";case Z:return"Root";case fe:return"Text";case sr:return bt(n);case ke:return n===_e?"StrictMode":"Mode";case it:return"Offscreen";case ot:return"Profiler";case Sr:return"Scope";case Ie:return"Suspense";case Ht:return"SuspenseList";case tn:return"TracingMarker";case X:case P:case Un:case G:case It:case Ge:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;break}return null}var Rs=s.ReactDebugCurrentFrame,jn=null,Eo=!1;function qa(){{if(jn===null)return null;var e=jn._debugOwner;if(e!==null&&typeof e<"u")return et(e)}return null}function Os(){return jn===null?"":Ai(jn)}function gn(){Rs.getCurrentStack=null,jn=null,Eo=!1}function qt(e){Rs.getCurrentStack=e===null?null:Os,jn=e,Eo=!1}function Vo(){return jn}function Dr(e){Eo=e}function Gn(e){return""+e}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return Sn(e),e;default:return""}}var Ka={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0};function Lr(e,t){Ka[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||t.value==null||p("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||t.checked==null||p("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function Ea(e){var t=e.type,n=e.nodeName;return n&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ms(e){return e._valueTracker}function Ja(e){e._valueTracker=null}function Wo(e){var t="";return e&&(Ea(e)?t=e.checked?"true":"false":t=e.value),t}function xi(e){var t=Ea(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);Sn(e[t]);var r=""+e[t];if(!(e.hasOwnProperty(t)||typeof n>"u"||typeof n.get!="function"||typeof n.set!="function")){var o=n.get,c=n.set;Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(y){Sn(y),r=""+y,c.call(this,y)}}),Object.defineProperty(e,t,{enumerable:n.enumerable});var d={getValue:function(){return r},setValue:function(y){Sn(y),r=""+y},stopTracking:function(){Ja(e),delete e[t]}};return d}}function na(e){Ms(e)||(e._valueTracker=xi(e))}function ra(e){if(!e)return!1;var t=Ms(e);if(!t)return!0;var n=t.getValue(),r=Wo(e);return r!==n?(t.setValue(r),!0):!1}function ut(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bo=!1,To=!1,aa=!1,jr=!1;function Ds(e){var t=e.type==="checkbox"||e.type==="radio";return t?e.checked!=null:e.value!=null}function b(e,t){var n=e,r=t.checked,o=st({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:n._wrapperState.initialChecked});return o}function k(e,t){Lr("input",t),t.checked!==void 0&&t.defaultChecked!==void 0&&!To&&(p("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",qa()||"A component",t.type),To=!0),t.value!==void 0&&t.defaultValue!==void 0&&!bo&&(p("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",qa()||"A component",t.type),bo=!0);var n=e,r=t.defaultValue==null?"":t.defaultValue;n._wrapperState={initialChecked:t.checked!=null?t.checked:t.defaultChecked,initialValue:Kt(t.value!=null?t.value:r),controlled:Ds(t)}}function V(e,t){var n=e,r=t.checked;r!=null&&mr(n,"checked",r,!1)}function q(e,t){var n=e;{var r=Ds(t);!n._wrapperState.controlled&&r&&!jr&&(p("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),jr=!0),n._wrapperState.controlled&&!r&&!aa&&(p("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),aa=!0)}V(e,t);var o=Kt(t.value),c=t.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=Gn(o)):n.value!==Gn(o)&&(n.value=Gn(o));else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}t.hasOwnProperty("value")?Xe(n,t.type,o):t.hasOwnProperty("defaultValue")&&Xe(n,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(n.defaultChecked=!!t.defaultChecked)}function pe(e,t,n){var r=e;if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type,c=o==="submit"||o==="reset";if(c&&(t.value===void 0||t.value===null))return;var d=Gn(r._wrapperState.initialValue);n||d!==r.value&&(r.value=d),r.defaultValue=d}var y=r.name;y!==""&&(r.name=""),r.defaultChecked=!r.defaultChecked,r.defaultChecked=!!r._wrapperState.initialChecked,y!==""&&(r.name=y)}function Be(e,t){var n=e;q(n,t),Me(n,t)}function Me(e,t){var n=t.name;if(t.type==="radio"&&n!=null){for(var r=e;r.parentNode;)r=r.parentNode;vt(n,"name");for(var o=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),c=0;c<o.length;c++){var d=o[c];if(!(d===e||d.form!==e.form)){var y=nd(d);if(!y)throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");ra(d),q(d,y)}}}}function Xe(e,t,n){(t!=="number"||ut(e.ownerDocument)!==e)&&(n==null?e.defaultValue=Gn(e._wrapperState.initialValue):e.defaultValue!==Gn(n)&&(e.defaultValue=Gn(n)))}var dt=!1,Dt=!1,Ut=!1;function Rt(e,t){t.value==null&&(typeof t.children=="object"&&t.children!==null?f.Children.forEach(t.children,function(n){n!=null&&(typeof n=="string"||typeof n=="number"||Dt||(Dt=!0,p("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")))}):t.dangerouslySetInnerHTML!=null&&(Ut||(Ut=!0,p("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))),t.selected!=null&&!dt&&(p("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),dt=!0)}function Pt(e,t){t.value!=null&&e.setAttribute("value",Gn(Kt(t.value)))}var Yt=Array.isArray;function Tt(e){return Yt(e)}var Za;Za=!1;function Ar(){var e=qa();return e?`

Check the render method of \``+e+"`.":""}var Qo=["value","defaultValue"];function Fi(e){{Lr("select",e);for(var t=0;t<Qo.length;t++){var n=Qo[t];if(e[n]!=null){var r=Tt(e[n]);e.multiple&&!r?p("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,Ar()):!e.multiple&&r&&p("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,Ar())}}}}function ba(e,t,n,r){var o=e.options;if(t){for(var c=n,d={},y=0;y<c.length;y++)d["$"+c[y]]=!0;for(var E=0;E<o.length;E++){var S=d.hasOwnProperty("$"+o[E].value);o[E].selected!==S&&(o[E].selected=S),S&&r&&(o[E].defaultSelected=!0)}}else{for(var A=Gn(Kt(n)),U=null,I=0;I<o.length;I++){if(o[I].value===A){o[I].selected=!0,r&&(o[I].defaultSelected=!0);return}U===null&&!o[I].disabled&&(U=o[I])}U!==null&&(U.selected=!0)}}function Ni(e,t){return st({},t,{value:void 0})}function wo(e,t){var n=e;Fi(t),n._wrapperState={wasMultiple:!!t.multiple},t.value!==void 0&&t.defaultValue!==void 0&&!Za&&(p("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"),Za=!0)}function Au(e,t){var n=e;n.multiple=!!t.multiple;var r=t.value;r!=null?ba(n,!!t.multiple,r,!1):t.defaultValue!=null&&ba(n,!!t.multiple,t.defaultValue,!0)}function yf(e,t){var n=e,r=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!t.multiple;var o=t.value;o!=null?ba(n,!!t.multiple,o,!1):r!==!!t.multiple&&(t.defaultValue!=null?ba(n,!!t.multiple,t.defaultValue,!0):ba(n,!!t.multiple,t.multiple?[]:"",!1))}function gf(e,t){var n=e,r=t.value;r!=null&&ba(n,!!t.multiple,r,!1)}var ki=!1;function Cu(e,t){var n=e;if(t.dangerouslySetInnerHTML!=null)throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");var r=st({},t,{value:void 0,defaultValue:void 0,children:Gn(n._wrapperState.initialValue)});return r}function sc(e,t){var n=e;Lr("textarea",t),t.value!==void 0&&t.defaultValue!==void 0&&!ki&&(p("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",qa()||"A component"),ki=!0);var r=t.value;if(r==null){var o=t.children,c=t.defaultValue;if(o!=null){p("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");{if(c!=null)throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Tt(o)){if(o.length>1)throw new Error("<textarea> can only have at most one child.");o=o[0]}c=o}}c==null&&(c=""),r=c}n._wrapperState={initialValue:Kt(r)}}function uc(e,t){var n=e,r=Kt(t.value),o=Kt(t.defaultValue);if(r!=null){var c=Gn(r);c!==n.value&&(n.value=c),t.defaultValue==null&&n.defaultValue!==c&&(n.defaultValue=c)}o!=null&&(n.defaultValue=Gn(o))}function Pu(e,t){var n=e,r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function _f(e,t){uc(e,t)}var xa="http://www.w3.org/1999/xhtml",Ef="http://www.w3.org/1998/Math/MathML",xu="http://www.w3.org/2000/svg";function So(e){switch(e){case"svg":return xu;case"math":return Ef;default:return xa}}function Fu(e,t){return e==null||e===xa?So(t):e===xu&&t==="foreignObject"?xa:e}var bf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e},Ro,lc=bf(function(e,t){if(e.namespaceURI===xu&&!("innerHTML"in e)){Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>";for(var n=Ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild);return}e.innerHTML=t}),vr=1,On=3,nn=8,zn=9,As=11,Ii=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===On){n.nodeValue=t;return}}e.textContent=t},Ui={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};function Tf(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var cc=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(e){cc.forEach(function(t){Hi[Tf(t,e)]=Hi[e]})});function Li(e,t,n){var r=t==null||typeof t=="boolean"||t==="";return r?"":!n&&typeof t=="number"&&t!==0&&!(Hi.hasOwnProperty(e)&&Hi[e])?t+"px":($(t,e),(""+t).trim())}var Cs=/([A-Z])/g,wf=/^ms-/;function Sf(e){return e.replace(Cs,"-$1").toLowerCase().replace(wf,"-ms-")}var dc=function(){};{var Nu=/^(?:webkit|moz|o)[A-Z]/,oa=/^-ms-/,fc=/-(.)/g,pc=/;\s*$/,Yo={},ku={},Ps=!1,mc=!1,Go=function(e){return e.replace(fc,function(t,n){return n.toUpperCase()})},Rf=function(e){Yo.hasOwnProperty(e)&&Yo[e]||(Yo[e]=!0,p("Unsupported style property %s. Did you mean %s?",e,Go(e.replace(oa,"ms-"))))},Of=function(e){Yo.hasOwnProperty(e)&&Yo[e]||(Yo[e]=!0,p("Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))},Mf=function(e,t){ku.hasOwnProperty(t)&&ku[t]||(ku[t]=!0,p(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,e,t.replace(pc,"")))},Df=function(e,t){Ps||(Ps=!0,p("`NaN` is an invalid value for the `%s` css style property.",e))},Af=function(e,t){mc||(mc=!0,p("`Infinity` is an invalid value for the `%s` css style property.",e))};dc=function(e,t){e.indexOf("-")>-1?Rf(e):Nu.test(e)?Of(e):pc.test(t)&&Mf(e,t),typeof t=="number"&&(isNaN(t)?Df(e,t):isFinite(t)||Af(e,t))}}var Cf=dc;function Pf(e){{var t="",n="";for(var r in e)if(!!e.hasOwnProperty(r)){var o=e[r];if(o!=null){var c=r.indexOf("--")===0;t+=n+(c?r:Sf(r))+":",t+=Li(r,o,c),n=";"}}return t||null}}function hc(e,t){var n=e.style;for(var r in t)if(!!t.hasOwnProperty(r)){var o=r.indexOf("--")===0;o||Cf(r,t[r]);var c=Li(r,t[r],o);r==="float"&&(r="cssFloat"),o?n.setProperty(r,c):n[r]=c}}function xf(e){return e==null||typeof e=="boolean"||e===""}function vc(e){var t={};for(var n in e)for(var r=Ui[n]||[n],o=0;o<r.length;o++)t[r[o]]=n;return t}function Ff(e,t){{if(!t)return;var n=vc(e),r=vc(t),o={};for(var c in n){var d=n[c],y=r[c];if(y&&d!==y){var E=d+","+y;if(o[E])continue;o[E]=!0,p("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",xf(e[d])?"Removing":"Updating",d,y)}}}}var Nf={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},kf=st({menuitem:!0},Nf),If="__html";function Iu(e,t){if(!!t){if(kf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw new Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if(typeof t.dangerouslySetInnerHTML!="object"||!(If in t.dangerouslySetInnerHTML))throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.")}if(!t.suppressContentEditableWarning&&t.contentEditable&&t.children!=null&&p("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),t.style!=null&&typeof t.style!="object")throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.")}}function Oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xs={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},Uu={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},qo={},ji=new RegExp("^(aria)-["+xe+"]*$"),Uf=new RegExp("^(aria)[A-Z]["+xe+"]*$");function Hf(e,t){{if(Tn.call(qo,t)&&qo[t])return!0;if(Uf.test(t)){var n="aria-"+t.slice(4).toLowerCase(),r=Uu.hasOwnProperty(n)?n:null;if(r==null)return p("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),qo[t]=!0,!0;if(t!==r)return p("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,r),qo[t]=!0,!0}if(ji.test(t)){var o=t.toLowerCase(),c=Uu.hasOwnProperty(o)?o:null;if(c==null)return qo[t]=!0,!1;if(t!==c)return p("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,c),qo[t]=!0,!0}}return!0}function Lf(e,t){{var n=[];for(var r in t){var o=Hf(e,r);o||n.push(r)}var c=n.map(function(d){return"`"+d+"`"}).join(", ");n.length===1?p("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",c,e):n.length>1&&p("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",c,e)}}function jf(e,t){Oo(e,t)||Lf(e,t)}var yc=!1;function zf(e,t){{if(e!=="input"&&e!=="textarea"&&e!=="select")return;t!=null&&t.value===null&&!yc&&(yc=!0,e==="select"&&t.multiple?p("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):p("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e))}}var gc=function(){};{var qn={},_c=/^on./,Xf=/^on[^A-Z]/,Hu=new RegExp("^(aria)-["+xe+"]*$"),Bf=new RegExp("^(aria)[A-Z]["+xe+"]*$");gc=function(e,t,n,r){if(Tn.call(qn,t)&&qn[t])return!0;var o=t.toLowerCase();if(o==="onfocusin"||o==="onfocusout")return p("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),qn[t]=!0,!0;if(r!=null){var c=r.registrationNameDependencies,d=r.possibleRegistrationNames;if(c.hasOwnProperty(t))return!0;var y=d.hasOwnProperty(o)?d[o]:null;if(y!=null)return p("Invalid event handler property `%s`. Did you mean `%s`?",t,y),qn[t]=!0,!0;if(_c.test(t))return p("Unknown event handler property `%s`. It will be ignored.",t),qn[t]=!0,!0}else if(_c.test(t))return Xf.test(t)&&p("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),qn[t]=!0,!0;if(Hu.test(t)||Bf.test(t))return!0;if(o==="innerhtml")return p("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),qn[t]=!0,!0;if(o==="aria")return p("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),qn[t]=!0,!0;if(o==="is"&&n!==null&&n!==void 0&&typeof n!="string")return p("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),qn[t]=!0,!0;if(typeof n=="number"&&isNaN(n))return p("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),qn[t]=!0,!0;var E=me(t),S=E!==null&&E.type===Yn;if(xs.hasOwnProperty(o)){var A=xs[o];if(A!==t)return p("Invalid DOM property `%s`. Did you mean `%s`?",t,A),qn[t]=!0,!0}else if(!S&&t!==o)return p("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,o),qn[t]=!0,!0;return typeof n=="boolean"&&pr(t,n,E,!1)?(n?p('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):p('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',n,t,t,n,t,t,t),qn[t]=!0,!0):S?!0:pr(t,n,E,!1)?(qn[t]=!0,!1):((n==="false"||n==="true")&&E!==null&&E.type===Lt&&(p("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,n==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,n),qn[t]=!0),!0)}}var $f=function(e,t,n){{var r=[];for(var o in t){var c=gc(e,o,t[o],n);c||r.push(o)}var d=r.map(function(y){return"`"+y+"`"}).join(", ");r.length===1?p("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",d,e):r.length>1&&p("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",d,e)}};function Vf(e,t,n){Oo(e,t)||$f(e,t,n)}var zi=1,Xi=1<<1,eo=1<<2,Fs=zi|Xi|eo,to=null;function Ec(e){to!==null&&p("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),to=e}function Wf(){to===null&&p("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),to=null}function Qf(e){return e===to}function Ko(e){var t=e.target||e.srcElement||window;return t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===On?t.parentNode:t}var Ns=null,Fa=null,Na=null;function Jo(e){var t=si(e);if(!!t){if(typeof Ns!="function")throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var n=t.stateNode;if(n){var r=nd(n);Ns(t.stateNode,t.type,r)}}}function bc(e){Ns=e}function Lu(e){Fa?Na?Na.push(e):Na=[e]:Fa=e}function Yf(){return Fa!==null||Na!==null}function Ta(){if(!!Fa){var e=Fa,t=Na;if(Fa=null,Na=null,Jo(e),t)for(var n=0;n<t.length;n++)Jo(t[n])}}var zr=function(e,t){return e(t)},ks=function(){},Is=!1;function Bi(){var e=Yf();e&&(ks(),Ta())}function Tc(e,t,n){if(Is)return e(t,n);Is=!0;try{return zr(e,t,n)}finally{Is=!1,Bi()}}function Gf(e,t,n){zr=e,ks=n}function qf(e){return e==="button"||e==="input"||e==="select"||e==="textarea"}function Us(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":return!!(n.disabled&&qf(t));default:return!1}}function ka(e,t){var n=e.stateNode;if(n===null)return null;var r=nd(n);if(r===null)return null;var o=r[t];if(Us(t,e.type,r))return null;if(o&&typeof o!="function")throw new Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}var $i=!1;if(un)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){$i=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{$i=!1}function wc(e,t,n,r,o,c,d,y,E){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch(A){this.onError(A)}}var Hs=wc;if(typeof window<"u"&&typeof window.dispatchEvent=="function"&&typeof document<"u"&&typeof document.createEvent=="function"){var a=document.createElement("react");Hs=function(t,n,r,o,c,d,y,E,S){if(typeof document>"u"||document===null)throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var A=document.createEvent("Event"),U=!1,I=!0,W=window.event,Q=Object.getOwnPropertyDescriptor(window,"event");function K(){a.removeEventListener(J,ze,!1),typeof window.event<"u"&&window.hasOwnProperty("event")&&(window.event=W)}var Se=Array.prototype.slice.call(arguments,3);function ze(){U=!0,K(),n.apply(r,Se),I=!1}var Ce,ht=!1,ft=!1;function j(z){if(Ce=z.error,ht=!0,Ce===null&&z.colno===0&&z.lineno===0&&(ft=!0),z.defaultPrevented&&Ce!=null&&typeof Ce=="object")try{Ce._suppressLogging=!0}catch{}}var J="react-"+(t||"invokeguardedcallback");if(window.addEventListener("error",j),a.addEventListener(J,ze,!1),A.initEvent(J,!1,!1),a.dispatchEvent(A),Q&&Object.defineProperty(window,"event",Q),U&&I&&(ht?ft&&(Ce=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")):Ce=new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`),this.onError(Ce)),window.removeEventListener("error",j),!U)return K(),wc.apply(this,arguments)}}var u=Hs,l=!1,h=null,_=!1,w=null,D={onError:function(e){l=!0,h=e}};function R(e,t,n,r,o,c,d,y,E){l=!1,h=null,u.apply(D,arguments)}function x(e,t,n,r,o,c,d,y,E){if(R.apply(this,arguments),l){var S=se();_||(_=!0,w=S)}}function L(){if(_){var e=w;throw _=!1,w=null,e}}function B(){return l}function se(){if(l){var e=h;return l=!1,h=null,e}else throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}function ee(e){return e._reactInternals}function re(e){return e._reactInternals!==void 0}function le(e,t){e._reactInternals=t}var te=0,Le=1,Ae=2,Y=4,he=16,Ue=32,je=64,ye=128,zt=256,rn=512,fn=1024,Mn=2048,Xr=4096,yr=8192,Ls=16384,Zo=Mn|Y|je|rn|fn|Ls,Dn=32767,ei=32768,Kn=65536,Vi=131072,Wi=1048576,Qi=2097152,ia=4194304,Yi=8388608,Xn=16777216,Gi=33554432,ju=Y|fn|0,no=Ae|Y|he|Ue|rn|Xr|yr,zu=Y|je|rn|yr,js=Mn|he,Mo=ia|Yi|Qi,lb=s.ReactCurrentOwner;function qi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{var r=t;do t=r,(t.flags&(Ae|Xr))!==te&&(n=t.return),r=t.return;while(r)}return t.tag===Z?n:null}function Dv(e){if(e.tag===Ie){var t=e.memoizedState;if(t===null){var n=e.alternate;n!==null&&(t=n.memoizedState)}if(t!==null)return t.dehydrated}return null}function Av(e){return e.tag===Z?e.stateNode.containerInfo:null}function cb(e){return qi(e)===e}function db(e){{var t=lb.current;if(t!==null&&t.tag===X){var n=t,r=n.stateNode;r._warnedAboutRefsInRender||p("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",et(n)||"A component"),r._warnedAboutRefsInRender=!0}}var o=ee(e);return o?qi(o)===o:!1}function Cv(e){if(qi(e)!==e)throw new Error("Unable to find node on an unmounted component.")}function Pv(e){var t=e.alternate;if(!t){var n=qi(e);if(n===null)throw new Error("Unable to find node on an unmounted component.");return n!==e?null:e}for(var r=e,o=t;;){var c=r.return;if(c===null)break;var d=c.alternate;if(d===null){var y=c.return;if(y!==null){r=o=y;continue}break}if(c.child===d.child){for(var E=c.child;E;){if(E===r)return Cv(c),e;if(E===o)return Cv(c),t;E=E.sibling}throw new Error("Unable to find node on an unmounted component.")}if(r.return!==o.return)r=c,o=d;else{for(var S=!1,A=c.child;A;){if(A===r){S=!0,r=c,o=d;break}if(A===o){S=!0,o=c,r=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===r){S=!0,r=d,o=c;break}if(A===o){S=!0,o=d,r=c;break}A=A.sibling}if(!S)throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(r.alternate!==o)throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(r.tag!==Z)throw new Error("Unable to find node on an unmounted component.");return r.stateNode.current===r?e:t}function xv(e){var t=Pv(e);return t!==null?Fv(t):null}function Fv(e){if(e.tag===ae||e.tag===fe)return e;for(var t=e.child;t!==null;){var n=Fv(t);if(n!==null)return n;t=t.sibling}return null}function fb(e){var t=Pv(e);return t!==null?Nv(t):null}function Nv(e){if(e.tag===ae||e.tag===fe)return e;for(var t=e.child;t!==null;){if(t.tag!==oe){var n=Nv(t);if(n!==null)return n}t=t.sibling}return null}var kv=g.unstable_scheduleCallback,pb=g.unstable_cancelCallback,mb=g.unstable_shouldYield,hb=g.unstable_requestPaint,Bn=g.unstable_now,vb=g.unstable_getCurrentPriorityLevel,Sc=g.unstable_ImmediatePriority,Kf=g.unstable_UserBlockingPriority,Ki=g.unstable_NormalPriority,yb=g.unstable_LowPriority,Jf=g.unstable_IdlePriority,gb=g.unstable_yieldValue,_b=g.unstable_setDisableYieldValue,zs=null,gr=null,be=null,ro=!1,Ua=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u";function Eb(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return p("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"),!0;try{ha&&(e=st({},e,{getLaneLabelMap:Ob,injectProfilingHooks:Rb})),zs=t.inject(e),gr=t}catch(n){p("React instrumentation encountered an error: %s.",n)}return!!t.checkDCE}function bb(e,t){if(gr&&typeof gr.onScheduleFiberRoot=="function")try{gr.onScheduleFiberRoot(zs,e,t)}catch(n){ro||(ro=!0,p("React instrumentation encountered an error: %s",n))}}function Tb(e,t){if(gr&&typeof gr.onCommitFiberRoot=="function")try{var n=(e.current.flags&ye)===ye;if(Yr){var r;switch(t){case la:r=Sc;break;case Ao:r=Kf;break;case Co:r=Ki;break;case Pc:r=Jf;break;default:r=Ki;break}gr.onCommitFiberRoot(zs,e,r,n)}}catch(o){ro||(ro=!0,p("React instrumentation encountered an error: %s",o))}}function wb(e){if(gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(zs,e)}catch(t){ro||(ro=!0,p("React instrumentation encountered an error: %s",t))}}function Sb(e){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(zs,e)}catch(t){ro||(ro=!0,p("React instrumentation encountered an error: %s",t))}}function $n(e){if(typeof gb=="function"&&(_b(e),O(e)),gr&&typeof gr.setStrictMode=="function")try{gr.setStrictMode(zs,e)}catch(t){ro||(ro=!0,p("React instrumentation encountered an error: %s",t))}}function Rb(e){be=e}function Ob(){{for(var e=new Map,t=1,n=0;n<ep;n++){var r=Wb(t);e.set(t,r),t*=2}return e}}function Mb(e){be!==null&&typeof be.markCommitStarted=="function"&&be.markCommitStarted(e)}function Iv(){be!==null&&typeof be.markCommitStopped=="function"&&be.markCommitStopped()}function Xu(e){be!==null&&typeof be.markComponentRenderStarted=="function"&&be.markComponentRenderStarted(e)}function Xs(){be!==null&&typeof be.markComponentRenderStopped=="function"&&be.markComponentRenderStopped()}function Db(e){be!==null&&typeof be.markComponentPassiveEffectMountStarted=="function"&&be.markComponentPassiveEffectMountStarted(e)}function Ab(){be!==null&&typeof be.markComponentPassiveEffectMountStopped=="function"&&be.markComponentPassiveEffectMountStopped()}function Cb(e){be!==null&&typeof be.markComponentPassiveEffectUnmountStarted=="function"&&be.markComponentPassiveEffectUnmountStarted(e)}function Pb(){be!==null&&typeof be.markComponentPassiveEffectUnmountStopped=="function"&&be.markComponentPassiveEffectUnmountStopped()}function xb(e){be!==null&&typeof be.markComponentLayoutEffectMountStarted=="function"&&be.markComponentLayoutEffectMountStarted(e)}function Fb(){be!==null&&typeof be.markComponentLayoutEffectMountStopped=="function"&&be.markComponentLayoutEffectMountStopped()}function Uv(e){be!==null&&typeof be.markComponentLayoutEffectUnmountStarted=="function"&&be.markComponentLayoutEffectUnmountStarted(e)}function Hv(){be!==null&&typeof be.markComponentLayoutEffectUnmountStopped=="function"&&be.markComponentLayoutEffectUnmountStopped()}function Nb(e,t,n){be!==null&&typeof be.markComponentErrored=="function"&&be.markComponentErrored(e,t,n)}function kb(e,t,n){be!==null&&typeof be.markComponentSuspended=="function"&&be.markComponentSuspended(e,t,n)}function Ib(e){be!==null&&typeof be.markLayoutEffectsStarted=="function"&&be.markLayoutEffectsStarted(e)}function Ub(){be!==null&&typeof be.markLayoutEffectsStopped=="function"&&be.markLayoutEffectsStopped()}function Hb(e){be!==null&&typeof be.markPassiveEffectsStarted=="function"&&be.markPassiveEffectsStarted(e)}function Lb(){be!==null&&typeof be.markPassiveEffectsStopped=="function"&&be.markPassiveEffectsStopped()}function Lv(e){be!==null&&typeof be.markRenderStarted=="function"&&be.markRenderStarted(e)}function jb(){be!==null&&typeof be.markRenderYielded=="function"&&be.markRenderYielded()}function jv(){be!==null&&typeof be.markRenderStopped=="function"&&be.markRenderStopped()}function zb(e){be!==null&&typeof be.markRenderScheduled=="function"&&be.markRenderScheduled(e)}function Xb(e,t){be!==null&&typeof be.markForceUpdateScheduled=="function"&&be.markForceUpdateScheduled(e,t)}function Zf(e,t){be!==null&&typeof be.markStateUpdateScheduled=="function"&&be.markStateUpdateScheduled(e,t)}var $e=0,pt=1,Ft=2,_n=8,ao=16,zv=Math.clz32?Math.clz32:Vb,Bb=Math.log,$b=Math.LN2;function Vb(e){var t=e>>>0;return t===0?32:31-(Bb(t)/$b|0)|0}var ep=31,ue=0,Vn=0,Qe=1,Bs=2,Do=4,Ji=8,oo=16,Bu=32,$s=4194240,$u=64,tp=128,np=256,rp=512,ap=1024,op=2048,ip=4096,sp=8192,up=16384,lp=32768,cp=65536,dp=131072,fp=262144,pp=524288,mp=1048576,hp=2097152,Rc=130023424,Vs=4194304,vp=8388608,yp=16777216,gp=33554432,_p=67108864,Xv=Vs,Vu=134217728,Bv=268435455,Wu=268435456,Zi=536870912,sa=1073741824;function Wb(e){{if(e&Qe)return"Sync";if(e&Bs)return"InputContinuousHydration";if(e&Do)return"InputContinuous";if(e&Ji)return"DefaultHydration";if(e&oo)return"Default";if(e&Bu)return"TransitionHydration";if(e&$s)return"Transition";if(e&Rc)return"Retry";if(e&Vu)return"SelectiveHydration";if(e&Wu)return"IdleHydration";if(e&Zi)return"Idle";if(e&sa)return"Offscreen"}}var Gt=-1,Oc=$u,Mc=Vs;function Qu(e){switch(es(e)){case Qe:return Qe;case Bs:return Bs;case Do:return Do;case Ji:return Ji;case oo:return oo;case Bu:return Bu;case $u:case tp:case np:case rp:case ap:case op:case ip:case sp:case up:case lp:case cp:case dp:case fp:case pp:case mp:case hp:return e&$s;case Vs:case vp:case yp:case gp:case _p:return e&Rc;case Vu:return Vu;case Wu:return Wu;case Zi:return Zi;case sa:return sa;default:return p("Should have found matching lanes. This is a bug in React."),e}}function Dc(e,t){var n=e.pendingLanes;if(n===ue)return ue;var r=ue,o=e.suspendedLanes,c=e.pingedLanes,d=n&Bv;if(d!==ue){var y=d&~o;if(y!==ue)r=Qu(y);else{var E=d&c;E!==ue&&(r=Qu(E))}}else{var S=n&~o;S!==ue?r=Qu(S):c!==ue&&(r=Qu(c))}if(r===ue)return ue;if(t!==ue&&t!==r&&(t&o)===ue){var A=es(r),U=es(t);if(A>=U||A===oo&&(U&$s)!==ue)return t}(r&Do)!==ue&&(r|=n&oo);var I=e.entangledLanes;if(I!==ue)for(var W=e.entanglements,Q=r&I;Q>0;){var K=ts(Q),Se=1<<K;r|=W[K],Q&=~Se}return r}function Qb(e,t){for(var n=e.eventTimes,r=Gt;t>0;){var o=ts(t),c=1<<o,d=n[o];d>r&&(r=d),t&=~c}return r}function Yb(e,t){switch(e){case Qe:case Bs:case Do:return t+250;case Ji:case oo:case Bu:case $u:case tp:case np:case rp:case ap:case op:case ip:case sp:case up:case lp:case cp:case dp:case fp:case pp:case mp:case hp:return t+5e3;case Vs:case vp:case yp:case gp:case _p:return Gt;case Vu:case Wu:case Zi:case sa:return Gt;default:return p("Should have found matching lanes. This is a bug in React."),Gt}}function Gb(e,t){for(var n=e.pendingLanes,r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=n;d>0;){var y=ts(d),E=1<<y,S=c[y];S===Gt?((E&r)===ue||(E&o)!==ue)&&(c[y]=Yb(E,t)):S<=t&&(e.expiredLanes|=E),d&=~E}}function qb(e){return Qu(e.pendingLanes)}function Ep(e){var t=e.pendingLanes&~sa;return t!==ue?t:t&sa?sa:ue}function Kb(e){return(e&Qe)!==ue}function bp(e){return(e&Bv)!==ue}function $v(e){return(e&Rc)===e}function Jb(e){var t=Qe|Do|oo;return(e&t)===ue}function Zb(e){return(e&$s)===e}function Ac(e,t){var n=Bs|Do|Ji|oo;return(t&n)!==ue}function eT(e,t){return(t&e.expiredLanes)!==ue}function Vv(e){return(e&$s)!==ue}function Wv(){var e=Oc;return Oc<<=1,(Oc&$s)===ue&&(Oc=$u),e}function tT(){var e=Mc;return Mc<<=1,(Mc&Rc)===ue&&(Mc=Vs),e}function es(e){return e&-e}function Yu(e){return es(e)}function ts(e){return 31-zv(e)}function Tp(e){return ts(e)}function ua(e,t){return(e&t)!==ue}function Ws(e,t){return(e&t)===t}function at(e,t){return e|t}function Cc(e,t){return e&~t}function Qv(e,t){return e&t}function wA(e){return e}function nT(e,t){return e!==Vn&&e<t?e:t}function wp(e){for(var t=[],n=0;n<ep;n++)t.push(e);return t}function Gu(e,t,n){e.pendingLanes|=t,t!==Zi&&(e.suspendedLanes=ue,e.pingedLanes=ue);var r=e.eventTimes,o=Tp(t);r[o]=n}function rT(e,t){e.suspendedLanes|=t,e.pingedLanes&=~t;for(var n=e.expirationTimes,r=t;r>0;){var o=ts(r),c=1<<o;n[o]=Gt,r&=~c}}function Yv(e,t,n){e.pingedLanes|=e.suspendedLanes&t}function aT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=ue,e.pingedLanes=ue,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t;for(var r=e.entanglements,o=e.eventTimes,c=e.expirationTimes,d=n;d>0;){var y=ts(d),E=1<<y;r[y]=ue,o[y]=Gt,c[y]=Gt,d&=~E}}function Sp(e,t){for(var n=e.entangledLanes|=t,r=e.entanglements,o=n;o;){var c=ts(o),d=1<<c;d&t|r[c]&t&&(r[c]|=t),o&=~d}}function oT(e,t){var n=es(t),r;switch(n){case Do:r=Bs;break;case oo:r=Ji;break;case $u:case tp:case np:case rp:case ap:case op:case ip:case sp:case up:case lp:case cp:case dp:case fp:case pp:case mp:case hp:case Vs:case vp:case yp:case gp:case _p:r=Bu;break;case Zi:r=Wu;break;default:r=Vn;break}return(r&(e.suspendedLanes|t))!==Vn?Vn:r}function Gv(e,t,n){if(!!Ua)for(var r=e.pendingUpdatersLaneMap;n>0;){var o=Tp(n),c=1<<o,d=r[o];d.add(t),n&=~c}}function qv(e,t){if(!!Ua)for(var n=e.pendingUpdatersLaneMap,r=e.memoizedUpdaters;t>0;){var o=Tp(t),c=1<<o,d=n[o];d.size>0&&(d.forEach(function(y){var E=y.alternate;(E===null||!r.has(E))&&r.add(y)}),d.clear()),t&=~c}}function Kv(e,t){return null}var la=Qe,Ao=Do,Co=oo,Pc=Zi,qu=Vn;function Ha(){return qu}function Wn(e){qu=e}function iT(e,t){var n=qu;try{return qu=e,t()}finally{qu=n}}function sT(e,t){return e!==0&&e<t?e:t}function uT(e,t){return e===0||e>t?e:t}function Rp(e,t){return e!==0&&e<t}function Jv(e){var t=es(e);return Rp(la,t)?Rp(Ao,t)?bp(t)?Co:Pc:Ao:la}function xc(e){var t=e.current.memoizedState;return t.isDehydrated}var Zv;function lT(e){Zv=e}function cT(e){Zv(e)}var Op;function dT(e){Op=e}var ey;function fT(e){ey=e}var ty;function pT(e){ty=e}var ny;function mT(e){ny=e}var Mp=!1,Fc=[],ti=null,ni=null,ri=null,Ku=new Map,Ju=new Map,ai=[],hT=["mousedown","mouseup","touchcancel","touchend","touchstart","auxclick","dblclick","pointercancel","pointerdown","pointerup","dragend","dragstart","drop","compositionend","compositionstart","keydown","keypress","keyup","input","textInput","copy","cut","paste","click","change","contextmenu","reset","submit"];function vT(e){return hT.indexOf(e)>-1}function yT(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]}}function ry(e,t){switch(e){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ni=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":{var n=t.pointerId;Ku.delete(n);break}case"gotpointercapture":case"lostpointercapture":{var r=t.pointerId;Ju.delete(r);break}}}function Zu(e,t,n,r,o,c){if(e===null||e.nativeEvent!==c){var d=yT(t,n,r,o,c);if(t!==null){var y=si(t);y!==null&&Op(y)}return d}e.eventSystemFlags|=r;var E=e.targetContainers;return o!==null&&E.indexOf(o)===-1&&E.push(o),e}function gT(e,t,n,r,o){switch(t){case"focusin":{var c=o;return ti=Zu(ti,e,t,n,r,c),!0}case"dragenter":{var d=o;return ni=Zu(ni,e,t,n,r,d),!0}case"mouseover":{var y=o;return ri=Zu(ri,e,t,n,r,y),!0}case"pointerover":{var E=o,S=E.pointerId;return Ku.set(S,Zu(Ku.get(S)||null,e,t,n,r,E)),!0}case"gotpointercapture":{var A=o,U=A.pointerId;return Ju.set(U,Zu(Ju.get(U)||null,e,t,n,r,A)),!0}}return!1}function ay(e){var t=as(e.target);if(t!==null){var n=qi(t);if(n!==null){var r=n.tag;if(r===Ie){var o=Dv(n);if(o!==null){e.blockedOn=o,ny(e.priority,function(){ey(n)});return}}else if(r===Z){var c=n.stateNode;if(xc(c)){e.blockedOn=Av(n);return}}}}e.blockedOn=null}function _T(e){for(var t=ty(),n={blockedOn:null,target:e,priority:t},r=0;r<ai.length&&Rp(t,ai[r].priority);r++);ai.splice(r,0,n),r===0&&ay(n)}function Nc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;t.length>0;){var n=t[0],r=Cp(e.domEventName,e.eventSystemFlags,n,e.nativeEvent);if(r===null){var o=e.nativeEvent,c=new o.constructor(o.type,o);Ec(c),o.target.dispatchEvent(c),Wf()}else{var d=si(r);return d!==null&&Op(d),e.blockedOn=r,!1}t.shift()}return!0}function oy(e,t,n){Nc(e)&&n.delete(t)}function ET(){Mp=!1,ti!==null&&Nc(ti)&&(ti=null),ni!==null&&Nc(ni)&&(ni=null),ri!==null&&Nc(ri)&&(ri=null),Ku.forEach(oy),Ju.forEach(oy)}function el(e,t){e.blockedOn===t&&(e.blockedOn=null,Mp||(Mp=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,ET)))}function tl(e){if(Fc.length>0){el(Fc[0],e);for(var t=1;t<Fc.length;t++){var n=Fc[t];n.blockedOn===e&&(n.blockedOn=null)}}ti!==null&&el(ti,e),ni!==null&&el(ni,e),ri!==null&&el(ri,e);var r=function(y){return el(y,e)};Ku.forEach(r),Ju.forEach(r);for(var o=0;o<ai.length;o++){var c=ai[o];c.blockedOn===e&&(c.blockedOn=null)}for(;ai.length>0;){var d=ai[0];if(d.blockedOn!==null)break;ay(d),d.blockedOn===null&&ai.shift()}}var Qs=s.ReactCurrentBatchConfig,Dp=!0;function iy(e){Dp=!!e}function bT(){return Dp}function TT(e,t,n){var r=sy(t),o;switch(r){case la:o=wT;break;case Ao:o=ST;break;case Co:default:o=Ap;break}return o.bind(null,t,n,e)}function wT(e,t,n,r){var o=Ha(),c=Qs.transition;Qs.transition=null;try{Wn(la),Ap(e,t,n,r)}finally{Wn(o),Qs.transition=c}}function ST(e,t,n,r){var o=Ha(),c=Qs.transition;Qs.transition=null;try{Wn(Ao),Ap(e,t,n,r)}finally{Wn(o),Qs.transition=c}}function Ap(e,t,n,r){!Dp||RT(e,t,n,r)}function RT(e,t,n,r){var o=Cp(e,t,n,r);if(o===null){$p(e,t,r,kc,n),ry(e,r);return}if(gT(o,e,t,n,r)){r.stopPropagation();return}if(ry(e,r),t&eo&&vT(e)){for(;o!==null;){var c=si(o);c!==null&&cT(c);var d=Cp(e,t,n,r);if(d===null&&$p(e,t,r,kc,n),d===o)break;o=d}o!==null&&r.stopPropagation();return}$p(e,t,r,null,n)}var kc=null;function Cp(e,t,n,r){kc=null;var o=Ko(r),c=as(o);if(c!==null){var d=qi(c);if(d===null)c=null;else{var y=d.tag;if(y===Ie){var E=Dv(d);if(E!==null)return E;c=null}else if(y===Z){var S=d.stateNode;if(xc(S))return Av(d);c=null}else d!==c&&(c=null)}}return kc=c,null}function sy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return la;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return Ao;case"message":{var t=vb();switch(t){case Sc:return la;case Kf:return Ao;case Ki:case yb:return Co;case Jf:return Pc;default:return Co}}default:return Co}}function OT(e,t,n){return e.addEventListener(t,n,!1),n}function MT(e,t,n){return e.addEventListener(t,n,!0),n}function DT(e,t,n,r){return e.addEventListener(t,n,{capture:!0,passive:r}),n}function AT(e,t,n,r){return e.addEventListener(t,n,{passive:r}),n}var nl=null,Pp=null,rl=null;function CT(e){return nl=e,Pp=ly(),!0}function PT(){nl=null,Pp=null,rl=null}function uy(){if(rl)return rl;var e,t=Pp,n=t.length,r,o=ly(),c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===o[c-r];r++);var y=r>1?1-r:void 0;return rl=o.slice(e,y),rl}function ly(){return"value"in nl?nl.value:nl.textContent}function Ic(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),t>=32||t===13?t:0}function Uc(){return!0}function cy(){return!1}function ca(e){function t(n,r,o,c,d){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var y in e)if(!!e.hasOwnProperty(y)){var E=e[y];E?this[y]=E(c):this[y]=c[y]}var S=c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1;return S?this.isDefaultPrevented=Uc:this.isDefaultPrevented=cy,this.isPropagationStopped=cy,this}return st(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;!n||(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uc)},stopPropagation:function(){var n=this.nativeEvent;!n||(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uc)},persist:function(){},isPersistent:Uc}),t}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xp=ca(Ys),al=st({},Ys,{view:0,detail:0}),xT=ca(al),Fp,Np,ol;function FT(e){e!==ol&&(ol&&e.type==="mousemove"?(Fp=e.screenX-ol.screenX,Np=e.screenY-ol.screenY):(Fp=0,Np=0),ol=e)}var Hc=st({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ip,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(FT(e),Fp)},movementY:function(e){return"movementY"in e?e.movementY:Np}}),dy=ca(Hc),NT=st({},Hc,{dataTransfer:0}),kT=ca(NT),IT=st({},al,{relatedTarget:0}),kp=ca(IT),UT=st({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),HT=ca(UT),LT=st({},Ys,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jT=ca(LT),zT=st({},Ys,{data:0}),fy=ca(zT),XT=fy,BT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$T={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function VT(e){if(e.key){var t=BT[e.key]||e.key;if(t!=="Unidentified")return t}if(e.type==="keypress"){var n=Ic(e);return n===13?"Enter":String.fromCharCode(n)}return e.type==="keydown"||e.type==="keyup"?$T[e.keyCode]||"Unidentified":""}var WT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QT(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=WT[e];return r?!!n[r]:!1}function Ip(e){return QT}var YT=st({},al,{key:VT,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ip,charCode:function(e){return e.type==="keypress"?Ic(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ic(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),GT=ca(YT),qT=st({},Hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),py=ca(qT),KT=st({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ip}),JT=ca(KT),ZT=st({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),ew=ca(ZT),tw=st({},Hc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nw=ca(tw),rw=[9,13,27,32],my=229,Up=un&&"CompositionEvent"in window,il=null;un&&"documentMode"in document&&(il=document.documentMode);var aw=un&&"TextEvent"in window&&!il,hy=un&&(!Up||il&&il>8&&il<=11),vy=32,yy=String.fromCharCode(vy);function ow(){dr("onBeforeInput",["compositionend","keypress","textInput","paste"]),dr("onCompositionEnd",["compositionend","focusout","keydown","keypress","keyup","mousedown"]),dr("onCompositionStart",["compositionstart","focusout","keydown","keypress","keyup","mousedown"]),dr("onCompositionUpdate",["compositionupdate","focusout","keydown","keypress","keyup","mousedown"])}var gy=!1;function iw(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function sw(e){switch(e){case"compositionstart":return"onCompositionStart";case"compositionend":return"onCompositionEnd";case"compositionupdate":return"onCompositionUpdate"}}function uw(e,t){return e==="keydown"&&t.keyCode===my}function _y(e,t){switch(e){case"keyup":return rw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==my;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ey(e){var t=e.detail;return typeof t=="object"&&"data"in t?t.data:null}function by(e){return e.locale==="ko"}var Gs=!1;function lw(e,t,n,r,o){var c,d;if(Up?c=sw(t):Gs?_y(t,r)&&(c="onCompositionEnd"):uw(t,r)&&(c="onCompositionStart"),!c)return null;hy&&!by(r)&&(!Gs&&c==="onCompositionStart"?Gs=CT(o):c==="onCompositionEnd"&&Gs&&(d=uy()));var y=Bc(n,c);if(y.length>0){var E=new fy(c,t,null,r,o);if(e.push({event:E,listeners:y}),d)E.data=d;else{var S=Ey(r);S!==null&&(E.data=S)}}}function cw(e,t){switch(e){case"compositionend":return Ey(t);case"keypress":var n=t.which;return n!==vy?null:(gy=!0,yy);case"textInput":var r=t.data;return r===yy&&gy?null:r;default:return null}}function dw(e,t){if(Gs){if(e==="compositionend"||!Up&&_y(e,t)){var n=uy();return PT(),Gs=!1,n}return null}switch(e){case"paste":return null;case"keypress":if(!iw(t)){if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hy&&!by(t)?null:t.data;default:return null}}function fw(e,t,n,r,o){var c;if(aw?c=cw(t,r):c=dw(t,r),!c)return null;var d=Bc(n,"onBeforeInput");if(d.length>0){var y=new XT("onBeforeInput","beforeinput",null,r,o);e.push({event:y,listeners:d}),y.data=c}}function pw(e,t,n,r,o,c,d){lw(e,t,n,r,o),fw(e,t,n,r,o)}var mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ty(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mw[e.type]:t==="textarea"}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function hw(e){if(!un)return!1;var t="on"+e,n=t in document;if(!n){var r=document.createElement("div");r.setAttribute(t,"return;"),n=typeof r[t]=="function"}return n}function vw(){dr("onChange",["change","click","focusin","focusout","input","keydown","keyup","selectionchange"])}function wy(e,t,n,r){Lu(r);var o=Bc(t,"onChange");if(o.length>0){var c=new xp("onChange","change",null,n,r);e.push({event:c,listeners:o})}}var sl=null,ul=null;function yw(e){var t=e.nodeName&&e.nodeName.toLowerCase();return t==="select"||t==="input"&&e.type==="file"}function gw(e){var t=[];wy(t,ul,e,Ko(e)),Tc(_w,t)}function _w(e){zy(e,0)}function Lc(e){var t=tu(e);if(ra(t))return e}function Ew(e,t){if(e==="change")return t}var Sy=!1;un&&(Sy=hw("input")&&(!document.documentMode||document.documentMode>9));function bw(e,t){sl=e,ul=t,sl.attachEvent("onpropertychange",Oy)}function Ry(){!sl||(sl.detachEvent("onpropertychange",Oy),sl=null,ul=null)}function Oy(e){e.propertyName==="value"&&Lc(ul)&&gw(e)}function Tw(e,t,n){e==="focusin"?(Ry(),bw(t,n)):e==="focusout"&&Ry()}function ww(e,t){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lc(ul)}function Sw(e){var t=e.nodeName;return t&&t.toLowerCase()==="input"&&(e.type==="checkbox"||e.type==="radio")}function Rw(e,t){if(e==="click")return Lc(t)}function Ow(e,t){if(e==="input"||e==="change")return Lc(t)}function Mw(e){var t=e._wrapperState;!t||!t.controlled||e.type!=="number"||Xe(e,"number",e.value)}function Dw(e,t,n,r,o,c,d){var y=n?tu(n):window,E,S;if(yw(y)?E=Ew:Ty(y)?Sy?E=Ow:(E=ww,S=Tw):Sw(y)&&(E=Rw),E){var A=E(t,n);if(A){wy(e,A,r,o);return}}S&&S(t,y,n),t==="focusout"&&Mw(y)}function Aw(){fr("onMouseEnter",["mouseout","mouseover"]),fr("onMouseLeave",["mouseout","mouseover"]),fr("onPointerEnter",["pointerout","pointerover"]),fr("onPointerLeave",["pointerout","pointerover"])}function Cw(e,t,n,r,o,c,d){var y=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout";if(y&&!Qf(r)){var S=r.relatedTarget||r.fromElement;if(S&&(as(S)||wl(S)))return}if(!(!E&&!y)){var A;if(o.window===o)A=o;else{var U=o.ownerDocument;U?A=U.defaultView||U.parentWindow:A=window}var I,W;if(E){var Q=r.relatedTarget||r.toElement;if(I=n,W=Q?as(Q):null,W!==null){var K=qi(W);(W!==K||W.tag!==ae&&W.tag!==fe)&&(W=null)}}else I=null,W=n;if(I!==W){var Se=dy,ze="onMouseLeave",Ce="onMouseEnter",ht="mouse";(t==="pointerout"||t==="pointerover")&&(Se=py,ze="onPointerLeave",Ce="onPointerEnter",ht="pointer");var ft=I==null?A:tu(I),j=W==null?A:tu(W),J=new Se(ze,ht+"leave",I,r,o);J.target=ft,J.relatedTarget=j;var z=null,de=as(o);if(de===n){var Re=new Se(Ce,ht+"enter",W,r,o);Re.target=j,Re.relatedTarget=ft,z=Re}eS(e,J,z,I,W)}}}function Pw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var da=typeof Object.is=="function"?Object.is:Pw;function ll(e,t){if(da(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++){var c=n[o];if(!Tn.call(t,c)||!da(e[c],t[c]))return!1}return!0}function My(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xw(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function Dy(e,t){for(var n=My(e),r=0,o=0;n;){if(n.nodeType===On){if(o=r+n.textContent.length,r<=t&&o>=t)return{node:n,offset:t-r};r=o}n=My(xw(n))}}function Fw(e){var t=e.ownerDocument,n=t&&t.defaultView||window,r=n.getSelection&&n.getSelection();if(!r||r.rangeCount===0)return null;var o=r.anchorNode,c=r.anchorOffset,d=r.focusNode,y=r.focusOffset;try{o.nodeType,d.nodeType}catch{return null}return Nw(e,o,c,d,y)}function Nw(e,t,n,r,o){var c=0,d=-1,y=-1,E=0,S=0,A=e,U=null;e:for(;;){for(var I=null;A===t&&(n===0||A.nodeType===On)&&(d=c+n),A===r&&(o===0||A.nodeType===On)&&(y=c+o),A.nodeType===On&&(c+=A.nodeValue.length),(I=A.firstChild)!==null;)U=A,A=I;for(;;){if(A===e)break e;if(U===t&&++E===n&&(d=c),U===r&&++S===o&&(y=c),(I=A.nextSibling)!==null)break;A=U,U=A.parentNode}A=I}return d===-1||y===-1?null:{start:d,end:y}}function kw(e,t){var n=e.ownerDocument||document,r=n&&n.defaultView||window;if(!!r.getSelection){var o=r.getSelection(),c=e.textContent.length,d=Math.min(t.start,c),y=t.end===void 0?d:Math.min(t.end,c);if(!o.extend&&d>y){var E=y;y=d,d=E}var S=Dy(e,d),A=Dy(e,y);if(S&&A){if(o.rangeCount===1&&o.anchorNode===S.node&&o.anchorOffset===S.offset&&o.focusNode===A.node&&o.focusOffset===A.offset)return;var U=n.createRange();U.setStart(S.node,S.offset),o.removeAllRanges(),d>y?(o.addRange(U),o.extend(A.node,A.offset)):(U.setEnd(A.node,A.offset),o.addRange(U))}}}function Ay(e){return e&&e.nodeType===On}function Cy(e,t){return!e||!t?!1:e===t?!0:Ay(e)?!1:Ay(t)?Cy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1}function Iw(e){return e&&e.ownerDocument&&Cy(e.ownerDocument.documentElement,e)}function Uw(e){try{return typeof e.contentWindow.location.href=="string"}catch{return!1}}function Py(){for(var e=window,t=ut();t instanceof e.HTMLIFrameElement;){if(Uw(t))e=t.contentWindow;else return t;t=ut(e.document)}return t}function Hp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hw(){var e=Py();return{focusedElem:e,selectionRange:Hp(e)?jw(e):null}}function Lw(e){var t=Py(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&Iw(n)){r!==null&&Hp(n)&&zw(n,r);for(var o=[],c=n;c=c.parentNode;)c.nodeType===vr&&o.push({element:c,left:c.scrollLeft,top:c.scrollTop});typeof n.focus=="function"&&n.focus();for(var d=0;d<o.length;d++){var y=o[d];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}}function jw(e){var t;return"selectionStart"in e?t={start:e.selectionStart,end:e.selectionEnd}:t=Fw(e),t||{start:0,end:0}}function zw(e,t){var n=t.start,r=t.end;r===void 0&&(r=n),"selectionStart"in e?(e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length)):kw(e,t)}var Xw=un&&"documentMode"in document&&document.documentMode<=11;function Bw(){dr("onSelect",["focusout","contextmenu","dragend","focusin","keydown","keyup","mousedown","mouseup","selectionchange"])}var qs=null,Lp=null,cl=null,jp=!1;function $w(e){if("selectionStart"in e&&Hp(e))return{start:e.selectionStart,end:e.selectionEnd};var t=e.ownerDocument&&e.ownerDocument.defaultView||window,n=t.getSelection();return{anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}}function Vw(e){return e.window===e?e.document:e.nodeType===zn?e:e.ownerDocument}function xy(e,t,n){var r=Vw(n);if(!(jp||qs==null||qs!==ut(r))){var o=$w(qs);if(!cl||!ll(cl,o)){cl=o;var c=Bc(Lp,"onSelect");if(c.length>0){var d=new xp("onSelect","select",null,t,n);e.push({event:d,listeners:c}),d.target=qs}}}}function Ww(e,t,n,r,o,c,d){var y=n?tu(n):window;switch(t){case"focusin":(Ty(y)||y.contentEditable==="true")&&(qs=y,Lp=n,cl=null);break;case"focusout":qs=null,Lp=null,cl=null;break;case"mousedown":jp=!0;break;case"contextmenu":case"mouseup":case"dragend":jp=!1,xy(e,r,o);break;case"selectionchange":if(Xw)break;case"keydown":case"keyup":xy(e,r,o)}}function jc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ks={animationend:jc("Animation","AnimationEnd"),animationiteration:jc("Animation","AnimationIteration"),animationstart:jc("Animation","AnimationStart"),transitionend:jc("Transition","TransitionEnd")},zp={},Fy={};un&&(Fy=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function zc(e){if(zp[e])return zp[e];if(!Ks[e])return e;var t=Ks[e];for(var n in t)if(t.hasOwnProperty(n)&&n in Fy)return zp[e]=t[n];return e}var Ny=zc("animationend"),ky=zc("animationiteration"),Iy=zc("animationstart"),Uy=zc("transitionend"),Hy=new Map,Ly=["abort","auxClick","cancel","canPlay","canPlayThrough","click","close","contextMenu","copy","cut","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","gotPointerCapture","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","lostPointerCapture","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","pointerCancel","pointerDown","pointerMove","pointerOut","pointerOver","pointerUp","progress","rateChange","reset","resize","seeked","seeking","stalled","submit","suspend","timeUpdate","touchCancel","touchEnd","touchStart","volumeChange","scroll","toggle","touchMove","waiting","wheel"];function oi(e,t){Hy.set(e,t),dr(t,[e])}function Qw(){for(var e=0;e<Ly.length;e++){var t=Ly[e],n=t.toLowerCase(),r=t[0].toUpperCase()+t.slice(1);oi(n,"on"+r)}oi(Ny,"onAnimationEnd"),oi(ky,"onAnimationIteration"),oi(Iy,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(Uy,"onTransitionEnd")}function Yw(e,t,n,r,o,c,d){var y=Hy.get(t);if(y!==void 0){var E=xp,S=t;switch(t){case"keypress":if(Ic(r)===0)return;case"keydown":case"keyup":E=GT;break;case"focusin":S="focus",E=kp;break;case"focusout":S="blur",E=kp;break;case"beforeblur":case"afterblur":E=kp;break;case"click":if(r.button===2)return;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=dy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=kT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=JT;break;case Ny:case ky:case Iy:E=HT;break;case Uy:E=ew;break;case"scroll":E=xT;break;case"wheel":E=nw;break;case"copy":case"cut":case"paste":E=jT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=py;break}var A=(c&eo)!==0;{var U=!A&&t==="scroll",I=Jw(n,y,r.type,A,U);if(I.length>0){var W=new E(y,S,null,r,o);e.push({event:W,listeners:I})}}}}Qw(),Aw(),vw(),Bw(),ow();function Gw(e,t,n,r,o,c,d){Yw(e,t,n,r,o,c);var y=(c&Fs)===0;y&&(Cw(e,t,n,r,o),Dw(e,t,n,r,o),Ww(e,t,n,r,o),pw(e,t,n,r,o))}var dl=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","resize","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],Xp=new Set(["cancel","close","invalid","load","scroll","toggle"].concat(dl));function jy(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,x(r,t,void 0,e),e.currentTarget=null}function qw(e,t,n){var r;if(n)for(var o=t.length-1;o>=0;o--){var c=t[o],d=c.instance,y=c.currentTarget,E=c.listener;if(d!==r&&e.isPropagationStopped())return;jy(e,E,y),r=d}else for(var S=0;S<t.length;S++){var A=t[S],U=A.instance,I=A.currentTarget,W=A.listener;if(U!==r&&e.isPropagationStopped())return;jy(e,W,I),r=U}}function zy(e,t){for(var n=(t&eo)!==0,r=0;r<e.length;r++){var o=e[r],c=o.event,d=o.listeners;qw(c,d,n)}L()}function Kw(e,t,n,r,o){var c=Ko(n),d=[];Gw(d,e,r,n,c,t),zy(d,t)}function Jt(e,t){Xp.has(e)||p('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',e);var n=!1,r=MR(t),o=tS(e,n);r.has(o)||(Xy(t,e,Xi,n),r.add(o))}function Bp(e,t,n){Xp.has(e)&&!t&&p('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',e);var r=0;t&&(r|=eo),Xy(n,e,r,t)}var Xc="_reactListening"+Math.random().toString(36).slice(2);function fl(e){if(!e[Xc]){e[Xc]=!0,kr.forEach(function(n){n!=="selectionchange"&&(Xp.has(n)||Bp(n,!1,e),Bp(n,!0,e))});var t=e.nodeType===zn?e:e.ownerDocument;t!==null&&(t[Xc]||(t[Xc]=!0,Bp("selectionchange",!1,t)))}}function Xy(e,t,n,r,o){var c=TT(e,t,n),d=void 0;$i&&(t==="touchstart"||t==="touchmove"||t==="wheel")&&(d=!0),e=e,r?d!==void 0?DT(e,t,c,d):MT(e,t,c):d!==void 0?AT(e,t,c,d):OT(e,t,c)}function By(e,t){return e===t||e.nodeType===nn&&e.parentNode===t}function $p(e,t,n,r,o){var c=r;if((t&zi)===0&&(t&Xi)===0){var d=o;if(r!==null){var y=r;e:for(;;){if(y===null)return;var E=y.tag;if(E===Z||E===oe){var S=y.stateNode.containerInfo;if(By(S,d))break;if(E===oe)for(var A=y.return;A!==null;){var U=A.tag;if(U===Z||U===oe){var I=A.stateNode.containerInfo;if(By(I,d))return}A=A.return}for(;S!==null;){var W=as(S);if(W===null)return;var Q=W.tag;if(Q===ae||Q===fe){y=c=W;continue e}S=S.parentNode}}y=y.return}}}Tc(function(){return Kw(e,t,n,c)})}function pl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jw(e,t,n,r,o,c){for(var d=t!==null?t+"Capture":null,y=r?d:t,E=[],S=e,A=null;S!==null;){var U=S,I=U.stateNode,W=U.tag;if(W===ae&&I!==null&&(A=I,y!==null)){var Q=ka(S,y);Q!=null&&E.push(pl(S,Q,A))}if(o)break;S=S.return}return E}function Bc(e,t){for(var n=t+"Capture",r=[],o=e;o!==null;){var c=o,d=c.stateNode,y=c.tag;if(y===ae&&d!==null){var E=d,S=ka(o,n);S!=null&&r.unshift(pl(o,S,E));var A=ka(o,t);A!=null&&r.push(pl(o,A,E))}o=o.return}return r}function Js(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==ae);return e||null}function Zw(e,t){for(var n=e,r=t,o=0,c=n;c;c=Js(c))o++;for(var d=0,y=r;y;y=Js(y))d++;for(;o-d>0;)n=Js(n),o--;for(;d-o>0;)r=Js(r),d--;for(var E=o;E--;){if(n===r||r!==null&&n===r.alternate)return n;n=Js(n),r=Js(r)}return null}function $y(e,t,n,r,o){for(var c=t._reactName,d=[],y=n;y!==null&&y!==r;){var E=y,S=E.alternate,A=E.stateNode,U=E.tag;if(S!==null&&S===r)break;if(U===ae&&A!==null){var I=A;if(o){var W=ka(y,c);W!=null&&d.unshift(pl(y,W,I))}else if(!o){var Q=ka(y,c);Q!=null&&d.push(pl(y,Q,I))}}y=y.return}d.length!==0&&e.push({event:t,listeners:d})}function eS(e,t,n,r,o){var c=r&&o?Zw(r,o):null;r!==null&&$y(e,t,r,c,!1),o!==null&&n!==null&&$y(e,n,o,c,!0)}function tS(e,t){return e+"__"+(t?"capture":"bubble")}var Br=!1,ml="dangerouslySetInnerHTML",$c="suppressContentEditableWarning",ii="suppressHydrationWarning",Vy="autoFocus",ns="children",rs="style",Vc="__html",Vp,Wc,hl,Wy,Qc,Qy,Yy;Vp={dialog:!0,webview:!0},Wc=function(e,t){jf(e,t),zf(e,t),Vf(e,t,{registrationNameDependencies:bn,possibleRegistrationNames:cr})},Qy=un&&!document.documentMode,hl=function(e,t,n){if(!Br){var r=Yc(n),o=Yc(t);o!==r&&(Br=!0,p("Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(o),JSON.stringify(r)))}},Wy=function(e){if(!Br){Br=!0;var t=[];e.forEach(function(n){t.push(n)}),p("Extra attributes from the server: %s",t)}},Qc=function(e,t){t===!1?p("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):p("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)},Yy=function(e,t){var n=e.namespaceURI===xa?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return n.innerHTML=t,n.innerHTML};var nS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function Yc(e){Qt(e);var t=typeof e=="string"?e:""+e;return t.replace(nS,`
`).replace(rS,"")}function Gc(e,t,n,r){var o=Yc(t),c=Yc(e);if(c!==o&&(r&&(Br||(Br=!0,p('Text content did not match. Server: "%s" Client: "%s"',c,o))),n&&tt))throw new Error("Text content does not match server-rendered HTML.")}function Gy(e){return e.nodeType===zn?e:e.ownerDocument}function aS(){}function qc(e){e.onclick=aS}function oS(e,t,n,r,o){for(var c in r)if(!!r.hasOwnProperty(c)){var d=r[c];if(c===rs)d&&Object.freeze(d),hc(t,d);else if(c===ml){var y=d?d[Vc]:void 0;y!=null&&lc(t,y)}else if(c===ns)if(typeof d=="string"){var E=e!=="textarea"||d!=="";E&&Ii(t,d)}else typeof d=="number"&&Ii(t,""+d);else c===$c||c===ii||c===Vy||(bn.hasOwnProperty(c)?d!=null&&(typeof d!="function"&&Qc(c,d),c==="onScroll"&&Jt("scroll",t)):d!=null&&mr(t,c,d,o))}}function iS(e,t,n,r){for(var o=0;o<t.length;o+=2){var c=t[o],d=t[o+1];c===rs?hc(e,d):c===ml?lc(e,d):c===ns?Ii(e,d):mr(e,c,d,r)}}function sS(e,t,n,r){var o,c=Gy(n),d,y=r;if(y===xa&&(y=So(e)),y===xa){if(o=Oo(e,t),!o&&e!==e.toLowerCase()&&p("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e),e==="script"){var E=c.createElement("div");E.innerHTML="<script><\/script>";var S=E.firstChild;d=E.removeChild(S)}else if(typeof t.is=="string")d=c.createElement(e,{is:t.is});else if(d=c.createElement(e),e==="select"){var A=d;t.multiple?A.multiple=!0:t.size&&(A.size=t.size)}}else d=c.createElementNS(y,e);return y===xa&&!o&&Object.prototype.toString.call(d)==="[object HTMLUnknownElement]"&&!Tn.call(Vp,e)&&(Vp[e]=!0,p("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e)),d}function uS(e,t){return Gy(t).createTextNode(e)}function lS(e,t,n,r){var o=Oo(t,n);Wc(t,n);var c;switch(t){case"dialog":Jt("cancel",e),Jt("close",e),c=n;break;case"iframe":case"object":case"embed":Jt("load",e),c=n;break;case"video":case"audio":for(var d=0;d<dl.length;d++)Jt(dl[d],e);c=n;break;case"source":Jt("error",e),c=n;break;case"img":case"image":case"link":Jt("error",e),Jt("load",e),c=n;break;case"details":Jt("toggle",e),c=n;break;case"input":k(e,n),c=b(e,n),Jt("invalid",e);break;case"option":Rt(e,n),c=n;break;case"select":wo(e,n),c=Ni(e,n),Jt("invalid",e);break;case"textarea":sc(e,n),c=Cu(e,n),Jt("invalid",e);break;default:c=n}switch(Iu(t,c),oS(t,e,r,c,o),t){case"input":na(e),pe(e,n,!1);break;case"textarea":na(e),Pu(e);break;case"option":Pt(e,n);break;case"select":Au(e,n);break;default:typeof c.onClick=="function"&&qc(e);break}}function cS(e,t,n,r,o){Wc(t,r);var c=null,d,y;switch(t){case"input":d=b(e,n),y=b(e,r),c=[];break;case"select":d=Ni(e,n),y=Ni(e,r),c=[];break;case"textarea":d=Cu(e,n),y=Cu(e,r),c=[];break;default:d=n,y=r,typeof d.onClick!="function"&&typeof y.onClick=="function"&&qc(e);break}Iu(t,y);var E,S,A=null;for(E in d)if(!(y.hasOwnProperty(E)||!d.hasOwnProperty(E)||d[E]==null))if(E===rs){var U=d[E];for(S in U)U.hasOwnProperty(S)&&(A||(A={}),A[S]="")}else E===ml||E===ns||E===$c||E===ii||E===Vy||(bn.hasOwnProperty(E)?c||(c=[]):(c=c||[]).push(E,null));for(E in y){var I=y[E],W=d!=null?d[E]:void 0;if(!(!y.hasOwnProperty(E)||I===W||I==null&&W==null))if(E===rs)if(I&&Object.freeze(I),W){for(S in W)W.hasOwnProperty(S)&&(!I||!I.hasOwnProperty(S))&&(A||(A={}),A[S]="");for(S in I)I.hasOwnProperty(S)&&W[S]!==I[S]&&(A||(A={}),A[S]=I[S])}else A||(c||(c=[]),c.push(E,A)),A=I;else if(E===ml){var Q=I?I[Vc]:void 0,K=W?W[Vc]:void 0;Q!=null&&K!==Q&&(c=c||[]).push(E,Q)}else E===ns?(typeof I=="string"||typeof I=="number")&&(c=c||[]).push(E,""+I):E===$c||E===ii||(bn.hasOwnProperty(E)?(I!=null&&(typeof I!="function"&&Qc(E,I),E==="onScroll"&&Jt("scroll",e)),!c&&W!==I&&(c=[])):(c=c||[]).push(E,I))}return A&&(Ff(A,y[rs]),(c=c||[]).push(rs,A)),c}function dS(e,t,n,r,o){n==="input"&&o.type==="radio"&&o.name!=null&&V(e,o);var c=Oo(n,r),d=Oo(n,o);switch(iS(e,t,c,d),n){case"input":q(e,o);break;case"textarea":uc(e,o);break;case"select":yf(e,o);break}}function fS(e){{var t=e.toLowerCase();return xs.hasOwnProperty(t)&&xs[t]||null}}function pS(e,t,n,r,o,c,d){var y,E;switch(y=Oo(t,n),Wc(t,n),t){case"dialog":Jt("cancel",e),Jt("close",e);break;case"iframe":case"object":case"embed":Jt("load",e);break;case"video":case"audio":for(var S=0;S<dl.length;S++)Jt(dl[S],e);break;case"source":Jt("error",e);break;case"img":case"image":case"link":Jt("error",e),Jt("load",e);break;case"details":Jt("toggle",e);break;case"input":k(e,n),Jt("invalid",e);break;case"option":Rt(e,n);break;case"select":wo(e,n),Jt("invalid",e);break;case"textarea":sc(e,n),Jt("invalid",e);break}Iu(t,n);{E=new Set;for(var A=e.attributes,U=0;U<A.length;U++){var I=A[U].name.toLowerCase();switch(I){case"value":break;case"checked":break;case"selected":break;default:E.add(A[U].name)}}}var W=null;for(var Q in n)if(!!n.hasOwnProperty(Q)){var K=n[Q];if(Q===ns)typeof K=="string"?e.textContent!==K&&(n[ii]!==!0&&Gc(e.textContent,K,c,d),W=[ns,K]):typeof K=="number"&&e.textContent!==""+K&&(n[ii]!==!0&&Gc(e.textContent,K,c,d),W=[ns,""+K]);else if(bn.hasOwnProperty(Q))K!=null&&(typeof K!="function"&&Qc(Q,K),Q==="onScroll"&&Jt("scroll",e));else if(d&&!0&&typeof y=="boolean"){var Se=void 0,ze=y&&sn?null:me(Q);if(n[ii]!==!0){if(!(Q===$c||Q===ii||Q==="value"||Q==="checked"||Q==="selected")){if(Q===ml){var Ce=e.innerHTML,ht=K?K[Vc]:void 0;if(ht!=null){var ft=Yy(e,ht);ft!==Ce&&hl(Q,Ce,ft)}}else if(Q===rs){if(E.delete(Q),Qy){var j=Pf(K);Se=e.getAttribute("style"),j!==Se&&hl(Q,Se,j)}}else if(y&&!sn)E.delete(Q.toLowerCase()),Se=Jr(e,Q,K),K!==Se&&hl(Q,Se,K);else if(!Zt(Q,ze,y)&&!xt(Q,K,ze,y)){var J=!1;if(ze!==null)E.delete(ze.attributeName),Se=Ur(e,Q,K,ze);else{var z=r;if(z===xa&&(z=So(t)),z===xa)E.delete(Q.toLowerCase());else{var de=fS(Q);de!==null&&de!==Q&&(J=!0,E.delete(de)),E.delete(Q)}Se=Jr(e,Q,K)}var Re=sn;!Re&&K!==Se&&!J&&hl(Q,Se,K)}}}}}switch(d&&E.size>0&&n[ii]!==!0&&Wy(E),t){case"input":na(e),pe(e,n,!0);break;case"textarea":na(e),Pu(e);break;case"select":case"option":break;default:typeof n.onClick=="function"&&qc(e);break}return W}function mS(e,t,n){var r=e.nodeValue!==t;return r}function Wp(e,t){{if(Br)return;Br=!0,p("Did not expect server HTML to contain a <%s> in <%s>.",t.nodeName.toLowerCase(),e.nodeName.toLowerCase())}}function Qp(e,t){{if(Br)return;Br=!0,p('Did not expect server HTML to contain the text node "%s" in <%s>.',t.nodeValue,e.nodeName.toLowerCase())}}function Yp(e,t,n){{if(Br)return;Br=!0,p("Expected server HTML to contain a matching <%s> in <%s>.",t,e.nodeName.toLowerCase())}}function Gp(e,t){{if(t===""||Br)return;Br=!0,p('Expected server HTML to contain a matching text node for "%s" in <%s>.',t,e.nodeName.toLowerCase())}}function hS(e,t,n){switch(t){case"input":Be(e,n);return;case"textarea":_f(e,n);return;case"select":gf(e,n);return}}var vl=function(){},yl=function(){};{var vS=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],qy=["applet","caption","html","table","td","th","marquee","object","template","foreignObject","desc","title"],yS=qy.concat(["button"]),gS=["dd","dt","li","option","optgroup","p","rp","rt"],Ky={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};yl=function(e,t){var n=st({},e||Ky),r={tag:t};return qy.indexOf(t)!==-1&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),yS.indexOf(t)!==-1&&(n.pTagInButtonScope=null),vS.indexOf(t)!==-1&&t!=="address"&&t!=="div"&&t!=="p"&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=r,t==="form"&&(n.formTag=r),t==="a"&&(n.aTagInScope=r),t==="button"&&(n.buttonTagInScope=r),t==="nobr"&&(n.nobrTagInScope=r),t==="p"&&(n.pTagInButtonScope=r),t==="li"&&(n.listItemTagAutoclosing=r),(t==="dd"||t==="dt")&&(n.dlItemTagAutoclosing=r),n};var _S=function(e,t){switch(t){case"select":return e==="option"||e==="optgroup"||e==="#text";case"optgroup":return e==="option"||e==="#text";case"option":return e==="#text";case"tr":return e==="th"||e==="td"||e==="style"||e==="script"||e==="template";case"tbody":case"thead":case"tfoot":return e==="tr"||e==="style"||e==="script"||e==="template";case"colgroup":return e==="col"||e==="template";case"table":return e==="caption"||e==="colgroup"||e==="tbody"||e==="tfoot"||e==="thead"||e==="style"||e==="script"||e==="template";case"head":return e==="base"||e==="basefont"||e==="bgsound"||e==="link"||e==="meta"||e==="title"||e==="noscript"||e==="noframes"||e==="style"||e==="script"||e==="template";case"html":return e==="head"||e==="body"||e==="frameset";case"frameset":return e==="frame";case"#document":return e==="html"}switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t!=="h1"&&t!=="h2"&&t!=="h3"&&t!=="h4"&&t!=="h5"&&t!=="h6";case"rp":case"rt":return gS.indexOf(t)===-1;case"body":case"caption":case"col":case"colgroup":case"frameset":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return t==null}return!0},ES=function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null},Jy={};vl=function(e,t,n){n=n||Ky;var r=n.current,o=r&&r.tag;t!=null&&(e!=null&&p("validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var c=_S(e,o)?null:r,d=c?null:ES(e,n),y=c||d;if(!!y){var E=y.tag,S=!!c+"|"+e+"|"+E;if(!Jy[S]){Jy[S]=!0;var A=e,U="";if(e==="#text"?/\S/.test(t)?A="Text nodes":(A="Whitespace text nodes",U=" Make sure you don't have any extra whitespace between tags on each line of your source code."):A="<"+e+">",c){var I="";E==="table"&&e==="tr"&&(I+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),p("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",A,E,U,I)}else p("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",A,E)}}}}var Kc="suppressHydrationWarning",Jc="$",Zc="/$",gl="$?",_l="$!",bS="style",qp=null,Kp=null;function TS(e){var t,n,r=e.nodeType;switch(r){case zn:case As:{t=r===zn?"#document":"#fragment";var o=e.documentElement;n=o?o.namespaceURI:Fu(null,"");break}default:{var c=r===nn?e.parentNode:e,d=c.namespaceURI||null;t=c.tagName,n=Fu(d,t);break}}{var y=t.toLowerCase(),E=yl(null,y);return{namespace:n,ancestorInfo:E}}}function wS(e,t,n){{var r=e,o=Fu(r.namespace,t),c=yl(r.ancestorInfo,t);return{namespace:o,ancestorInfo:c}}}function SA(e){return e}function SS(e){qp=bT(),Kp=Hw();var t=null;return iy(!1),t}function RS(e){Lw(Kp),iy(qp),qp=null,Kp=null}function OS(e,t,n,r,o){var c;{var d=r;if(vl(e,null,d.ancestorInfo),typeof t.children=="string"||typeof t.children=="number"){var y=""+t.children,E=yl(d.ancestorInfo,e);vl(null,y,E)}c=d.namespace}var S=sS(e,t,n,c);return Tl(o,S),om(S,t),S}function MS(e,t){e.appendChild(t)}function DS(e,t,n,r,o){switch(lS(e,t,n,r),t){case"button":case"input":case"select":case"textarea":return!!n.autoFocus;case"img":return!0;default:return!1}}function AS(e,t,n,r,o,c){{var d=c;if(typeof r.children!=typeof n.children&&(typeof r.children=="string"||typeof r.children=="number")){var y=""+r.children,E=yl(d.ancestorInfo,t);vl(null,y,E)}}return cS(e,t,n,r)}function Jp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function CS(e,t,n,r){{var o=n;vl(null,e,o.ancestorInfo)}var c=uS(e,t);return Tl(r,c),c}function PS(){var e=window.event;return e===void 0?Co:sy(e.type)}var Zp=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,em=-1,Zy=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof Zy<"u"?function(e){return Zy.resolve(null).then(e).catch(NS)}:Zp;function NS(e){setTimeout(function(){throw e})}function kS(e,t,n,r){switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&e.focus();return;case"img":{n.src&&(e.src=n.src);return}}}function IS(e,t,n,r,o,c){dS(e,t,n,r,o),om(e,o)}function eg(e){Ii(e,"")}function US(e,t,n){e.nodeValue=n}function HS(e,t){e.appendChild(t)}function LS(e,t){var n;e.nodeType===nn?(n=e.parentNode,n.insertBefore(t,e)):(n=e,n.appendChild(t));var r=e._reactRootContainer;r==null&&n.onclick===null&&qc(n)}function jS(e,t,n){e.insertBefore(t,n)}function zS(e,t,n){e.nodeType===nn?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)}function XS(e,t){e.removeChild(t)}function BS(e,t){e.nodeType===nn?e.parentNode.removeChild(t):e.removeChild(t)}function tm(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===nn){var c=o.data;if(c===Zc)if(r===0){e.removeChild(o),tl(t);return}else r--;else(c===Jc||c===gl||c===_l)&&r++}n=o}while(n);tl(t)}function $S(e,t){e.nodeType===nn?tm(e.parentNode,t):e.nodeType===vr&&tm(e,t),tl(e)}function VS(e){e=e;var t=e.style;typeof t.setProperty=="function"?t.setProperty("display","none","important"):t.display="none"}function WS(e){e.nodeValue=""}function QS(e,t){e=e;var n=t[bS],r=n!=null&&n.hasOwnProperty("display")?n.display:null;e.style.display=Li("display",r)}function YS(e,t){e.nodeValue=t}function GS(e){e.nodeType===vr?e.textContent="":e.nodeType===zn&&e.documentElement&&e.removeChild(e.documentElement)}function qS(e,t,n){return e.nodeType!==vr||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e}function KS(e,t){return t===""||e.nodeType!==On?null:e}function JS(e){return e.nodeType!==nn?null:e}function tg(e){return e.data===gl}function nm(e){return e.data===_l}function ZS(e){var t=e.nextSibling&&e.nextSibling.dataset,n,r,o;return t&&(n=t.dgst,r=t.msg,o=t.stck),{message:r,digest:n,stack:o}}function eR(e,t){e._reactRetry=t}function ed(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===vr||t===On)break;if(t===nn){var n=e.data;if(n===Jc||n===_l||n===gl)break;if(n===Zc)return null}}return e}function El(e){return ed(e.nextSibling)}function tR(e){return ed(e.firstChild)}function nR(e){return ed(e.firstChild)}function rR(e){return ed(e.nextSibling)}function aR(e,t,n,r,o,c,d){Tl(c,e),om(e,n);var y;{var E=o;y=E.namespace}var S=(c.mode&pt)!==$e;return pS(e,t,n,y,r,S,d)}function oR(e,t,n,r){return Tl(n,e),n.mode&pt,mS(e,t)}function iR(e,t){Tl(t,e)}function sR(e){for(var t=e.nextSibling,n=0;t;){if(t.nodeType===nn){var r=t.data;if(r===Zc){if(n===0)return El(t);n--}else(r===Jc||r===_l||r===gl)&&n++}t=t.nextSibling}return null}function ng(e){for(var t=e.previousSibling,n=0;t;){if(t.nodeType===nn){var r=t.data;if(r===Jc||r===_l||r===gl){if(n===0)return t;n--}else r===Zc&&n++}t=t.previousSibling}return null}function uR(e){tl(e)}function lR(e){tl(e)}function cR(e){return e!=="head"&&e!=="body"}function dR(e,t,n,r){var o=!0;Gc(t.nodeValue,n,r,o)}function fR(e,t,n,r,o,c){if(t[Kc]!==!0){var d=!0;Gc(r.nodeValue,o,c,d)}}function pR(e,t){t.nodeType===vr?Wp(e,t):t.nodeType===nn||Qp(e,t)}function mR(e,t){{var n=e.parentNode;n!==null&&(t.nodeType===vr?Wp(n,t):t.nodeType===nn||Qp(n,t))}}function hR(e,t,n,r,o){(o||t[Kc]!==!0)&&(r.nodeType===vr?Wp(n,r):r.nodeType===nn||Qp(n,r))}function vR(e,t,n){Yp(e,t)}function yR(e,t){Gp(e,t)}function gR(e,t,n){{var r=e.parentNode;r!==null&&Yp(r,t)}}function _R(e,t){{var n=e.parentNode;n!==null&&Gp(n,t)}}function ER(e,t,n,r,o,c){(c||t[Kc]!==!0)&&Yp(n,r)}function bR(e,t,n,r,o){(o||t[Kc]!==!0)&&Gp(n,r)}function TR(e){p("An error occurred during hydration. The server HTML was replaced with client content in <%s>.",e.nodeName.toLowerCase())}function wR(e){fl(e)}var Zs=Math.random().toString(36).slice(2),eu="__reactFiber$"+Zs,rm="__reactProps$"+Zs,bl="__reactContainer$"+Zs,am="__reactEvents$"+Zs,SR="__reactListeners$"+Zs,RR="__reactHandles$"+Zs;function OR(e){delete e[eu],delete e[rm],delete e[am],delete e[SR],delete e[RR]}function Tl(e,t){t[eu]=e}function td(e,t){t[bl]=e}function rg(e){e[bl]=null}function wl(e){return!!e[bl]}function as(e){var t=e[eu];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bl]||n[eu],t){var r=t.alternate;if(t.child!==null||r!==null&&r.child!==null)for(var o=ng(e);o!==null;){var c=o[eu];if(c)return c;o=ng(o)}return t}e=n,n=e.parentNode}return null}function si(e){var t=e[eu]||e[bl];return t&&(t.tag===ae||t.tag===fe||t.tag===Ie||t.tag===Z)?t:null}function tu(e){if(e.tag===ae||e.tag===fe)return e.stateNode;throw new Error("getNodeFromInstance: Invalid argument.")}function nd(e){return e[rm]||null}function om(e,t){e[rm]=t}function MR(e){var t=e[am];return t===void 0&&(t=e[am]=new Set),t}var ag={},og=s.ReactDebugCurrentFrame;function rd(e){if(e){var t=e._owner,n=Hr(e.type,e._source,t?t.type:null);og.setExtraStackFrame(n)}else og.setExtraStackFrame(null)}function La(e,t,n,r,o){{var c=Function.call.bind(Tn);for(var d in e)if(c(e,d)){var y=void 0;try{if(typeof e[d]!="function"){var E=Error((r||"React class")+": "+n+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}y=e[d](t,d,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(S){y=S}y&&!(y instanceof Error)&&(rd(o),p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,d,typeof y),rd(null)),y instanceof Error&&!(y.message in ag)&&(ag[y.message]=!0,rd(o),p("Failed %s type: %s",n,y.message),rd(null))}}}var im=[],ad;ad=[];var Po=-1;function ui(e){return{current:e}}function _r(e,t){if(Po<0){p("Unexpected pop.");return}t!==ad[Po]&&p("Unexpected Fiber popped."),e.current=im[Po],im[Po]=null,ad[Po]=null,Po--}function Er(e,t,n){Po++,im[Po]=e.current,ad[Po]=n,e.current=t}var sm;sm={};var fa={};Object.freeze(fa);var xo=ui(fa),io=ui(!1),um=fa;function nu(e,t,n){return n&&so(t)?um:xo.current}function ig(e,t,n){{var r=e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n}}function ru(e,t){{var n=e.type,r=n.contextTypes;if(!r)return fa;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var c={};for(var d in r)c[d]=t[d];{var y=et(e)||"Unknown";La(r,c,"context",y)}return o&&ig(e,t,c),c}}function od(){return io.current}function so(e){{var t=e.childContextTypes;return t!=null}}function id(e){_r(io,e),_r(xo,e)}function lm(e){_r(io,e),_r(xo,e)}function sg(e,t,n){{if(xo.current!==fa)throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");Er(xo,t,e),Er(io,n,e)}}function ug(e,t,n){{var r=e.stateNode,o=t.childContextTypes;if(typeof r.getChildContext!="function"){{var c=et(e)||"Unknown";sm[c]||(sm[c]=!0,p("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",c,c))}return n}var d=r.getChildContext();for(var y in d)if(!(y in o))throw new Error((et(e)||"Unknown")+'.getChildContext(): key "'+y+'" is not defined in childContextTypes.');{var E=et(e)||"Unknown";La(o,d,"child context",E)}return st({},n,d)}}function sd(e){{var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||fa;return um=xo.current,Er(xo,n,e),Er(io,io.current,e),!0}}function lg(e,t,n){{var r=e.stateNode;if(!r)throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(n){var o=ug(e,t,um);r.__reactInternalMemoizedMergedChildContext=o,_r(io,e),_r(xo,e),Er(xo,o,e),Er(io,n,e)}else _r(io,e),Er(io,n,e)}}function DR(e){{if(!cb(e)||e.tag!==X)throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var t=e;do{switch(t.tag){case Z:return t.stateNode.context;case X:{var n=t.type;if(so(n))return t.stateNode.__reactInternalMemoizedMergedChildContext;break}}t=t.return}while(t!==null);throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}}var li=0,ud=1,Fo=null,cm=!1,dm=!1;function cg(e){Fo===null?Fo=[e]:Fo.push(e)}function AR(e){cm=!0,cg(e)}function dg(){cm&&ci()}function ci(){if(!dm&&Fo!==null){dm=!0;var e=0,t=Ha();try{var n=!0,r=Fo;for(Wn(la);e<r.length;e++){var o=r[e];do o=o(n);while(o!==null)}Fo=null,cm=!1}catch(c){throw Fo!==null&&(Fo=Fo.slice(e+1)),kv(Sc,ci),c}finally{Wn(t),dm=!1}}return null}var au=[],ou=0,ld=null,cd=0,wa=[],Sa=0,os=null,No=1,ko="";function CR(e){return us(),(e.flags&Wi)!==te}function PR(e){return us(),cd}function xR(){var e=ko,t=No,n=t&~FR(t);return n.toString(32)+e}function ss(e,t){us(),au[ou++]=cd,au[ou++]=ld,ld=e,cd=t}function fg(e,t,n){us(),wa[Sa++]=No,wa[Sa++]=ko,wa[Sa++]=os,os=e;var r=No,o=ko,c=dd(r)-1,d=r&~(1<<c),y=n+1,E=dd(t)+c;if(E>30){var S=c-c%5,A=(1<<S)-1,U=(d&A).toString(32),I=d>>S,W=c-S,Q=dd(t)+W,K=y<<W,Se=K|I,ze=U+o;No=1<<Q|Se,ko=ze}else{var Ce=y<<c,ht=Ce|d,ft=o;No=1<<E|ht,ko=ft}}function fm(e){us();var t=e.return;if(t!==null){var n=1,r=0;ss(e,n),fg(e,n,r)}}function dd(e){return 32-zv(e)}function FR(e){return 1<<dd(e)-1}function pm(e){for(;e===ld;)ld=au[--ou],au[ou]=null,cd=au[--ou],au[ou]=null;for(;e===os;)os=wa[--Sa],wa[Sa]=null,ko=wa[--Sa],wa[Sa]=null,No=wa[--Sa],wa[Sa]=null}function NR(){return us(),os!==null?{id:No,overflow:ko}:null}function kR(e,t){us(),wa[Sa++]=No,wa[Sa++]=ko,wa[Sa++]=os,No=t.id,ko=t.overflow,os=e}function us(){Zn()||p("Expected to be hydrating. This is a bug in React. Please file an issue.")}var Jn=null,Ra=null,ja=!1,ls=!1,di=null;function IR(){ja&&p("We should not be hydrating here. This is a bug in React. Please file a bug.")}function pg(){ls=!0}function UR(){return ls}function HR(e){var t=e.stateNode.containerInfo;return Ra=nR(t),Jn=e,ja=!0,di=null,ls=!1,!0}function LR(e,t,n){return Ra=rR(t),Jn=e,ja=!0,di=null,ls=!1,n!==null&&kR(e,n),!0}function mg(e,t){switch(e.tag){case Z:{pR(e.stateNode.containerInfo,t);break}case ae:{var n=(e.mode&pt)!==$e;hR(e.type,e.memoizedProps,e.stateNode,t,n);break}case Ie:{var r=e.memoizedState;r.dehydrated!==null&&mR(r.dehydrated,t);break}}}function hg(e,t){mg(e,t);var n=XD();n.stateNode=t,n.return=e;var r=e.deletions;r===null?(e.deletions=[n],e.flags|=he):r.push(n)}function mm(e,t){{if(ls)return;switch(e.tag){case Z:{var n=e.stateNode.containerInfo;switch(t.tag){case ae:var r=t.type;t.pendingProps,vR(n,r);break;case fe:var o=t.pendingProps;yR(n,o);break}break}case ae:{var c=e.type,d=e.memoizedProps,y=e.stateNode;switch(t.tag){case ae:{var E=t.type,S=t.pendingProps,A=(e.mode&pt)!==$e;ER(c,d,y,E,S,A);break}case fe:{var U=t.pendingProps,I=(e.mode&pt)!==$e;bR(c,d,y,U,I);break}}break}case Ie:{var W=e.memoizedState,Q=W.dehydrated;if(Q!==null)switch(t.tag){case ae:var K=t.type;t.pendingProps,gR(Q,K);break;case fe:var Se=t.pendingProps;_R(Q,Se);break}break}default:return}}}function vg(e,t){t.flags=t.flags&~Xr|Ae,mm(e,t)}function yg(e,t){switch(e.tag){case ae:{var n=e.type;e.pendingProps;var r=qS(t,n);return r!==null?(e.stateNode=r,Jn=e,Ra=tR(r),!0):!1}case fe:{var o=e.pendingProps,c=KS(t,o);return c!==null?(e.stateNode=c,Jn=e,Ra=null,!0):!1}case Ie:{var d=JS(t);if(d!==null){var y={dehydrated:d,treeContext:NR(),retryLane:sa};e.memoizedState=y;var E=BD(d);return E.return=e,e.child=E,Jn=e,Ra=null,!0}return!1}default:return!1}}function hm(e){return(e.mode&pt)!==$e&&(e.flags&ye)===te}function vm(e){throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.")}function ym(e){if(!!ja){var t=Ra;if(!t){hm(e)&&(mm(Jn,e),vm()),vg(Jn,e),ja=!1,Jn=e;return}var n=t;if(!yg(e,t)){hm(e)&&(mm(Jn,e),vm()),t=El(n);var r=Jn;if(!t||!yg(e,t)){vg(Jn,e),ja=!1,Jn=e;return}hg(r,n)}}}function jR(e,t,n){var r=e.stateNode,o=!ls,c=aR(r,e.type,e.memoizedProps,t,n,e,o);return e.updateQueue=c,c!==null}function zR(e){var t=e.stateNode,n=e.memoizedProps,r=oR(t,n,e);if(r){var o=Jn;if(o!==null)switch(o.tag){case Z:{var c=o.stateNode.containerInfo,d=(o.mode&pt)!==$e;dR(c,t,n,d);break}case ae:{var y=o.type,E=o.memoizedProps,S=o.stateNode,A=(o.mode&pt)!==$e;fR(y,E,S,t,n,A);break}}}return r}function XR(e){var t=e.memoizedState,n=t!==null?t.dehydrated:null;if(!n)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");iR(n,e)}function BR(e){var t=e.memoizedState,n=t!==null?t.dehydrated:null;if(!n)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return sR(n)}function gg(e){for(var t=e.return;t!==null&&t.tag!==ae&&t.tag!==Z&&t.tag!==Ie;)t=t.return;Jn=t}function fd(e){if(e!==Jn)return!1;if(!ja)return gg(e),ja=!0,!1;if(e.tag!==Z&&(e.tag!==ae||cR(e.type)&&!Jp(e.type,e.memoizedProps))){var t=Ra;if(t)if(hm(e))_g(e),vm();else for(;t;)hg(e,t),t=El(t)}return gg(e),e.tag===Ie?Ra=BR(e):Ra=Jn?El(e.stateNode):null,!0}function $R(){return ja&&Ra!==null}function _g(e){for(var t=Ra;t;)mg(e,t),t=El(t)}function iu(){Jn=null,Ra=null,ja=!1,ls=!1}function Eg(){di!==null&&(mE(di),di=null)}function Zn(){return ja}function gm(e){di===null?di=[e]:di.push(e)}var VR=s.ReactCurrentBatchConfig,WR=null;function QR(){return VR.transition}var za={recordUnsafeLifecycleWarnings:function(e,t){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(e,t){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}};{var YR=function(e){for(var t=null,n=e;n!==null;)n.mode&_n&&(t=n),n=n.return;return t},cs=function(e){var t=[];return e.forEach(function(n){t.push(n)}),t.sort().join(", ")},Sl=[],Rl=[],Ol=[],Ml=[],Dl=[],Al=[],ds=new Set;za.recordUnsafeLifecycleWarnings=function(e,t){ds.has(e.type)||(typeof t.componentWillMount=="function"&&t.componentWillMount.__suppressDeprecationWarning!==!0&&Sl.push(e),e.mode&_n&&typeof t.UNSAFE_componentWillMount=="function"&&Rl.push(e),typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&Ol.push(e),e.mode&_n&&typeof t.UNSAFE_componentWillReceiveProps=="function"&&Ml.push(e),typeof t.componentWillUpdate=="function"&&t.componentWillUpdate.__suppressDeprecationWarning!==!0&&Dl.push(e),e.mode&_n&&typeof t.UNSAFE_componentWillUpdate=="function"&&Al.push(e))},za.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;Sl.length>0&&(Sl.forEach(function(I){e.add(et(I)||"Component"),ds.add(I.type)}),Sl=[]);var t=new Set;Rl.length>0&&(Rl.forEach(function(I){t.add(et(I)||"Component"),ds.add(I.type)}),Rl=[]);var n=new Set;Ol.length>0&&(Ol.forEach(function(I){n.add(et(I)||"Component"),ds.add(I.type)}),Ol=[]);var r=new Set;Ml.length>0&&(Ml.forEach(function(I){r.add(et(I)||"Component"),ds.add(I.type)}),Ml=[]);var o=new Set;Dl.length>0&&(Dl.forEach(function(I){o.add(et(I)||"Component"),ds.add(I.type)}),Dl=[]);var c=new Set;if(Al.length>0&&(Al.forEach(function(I){c.add(et(I)||"Component"),ds.add(I.type)}),Al=[]),t.size>0){var d=cs(t);p(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,d)}if(r.size>0){var y=cs(r);p(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,y)}if(c.size>0){var E=cs(c);p(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,E)}if(e.size>0){var S=cs(e);M(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,S)}if(n.size>0){var A=cs(n);M(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,A)}if(o.size>0){var U=cs(o);M(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,U)}};var pd=new Map,bg=new Set;za.recordLegacyContextWarning=function(e,t){var n=YR(e);if(n===null){p("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");return}if(!bg.has(e.type)){var r=pd.get(n);(e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext=="function")&&(r===void 0&&(r=[],pd.set(n,r)),r.push(e))}},za.flushLegacyContextWarning=function(){pd.forEach(function(e,t){if(e.length!==0){var n=e[0],r=new Set;e.forEach(function(c){r.add(et(c)||"Component"),bg.add(c.type)});var o=cs(r);try{qt(n),p(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,o)}finally{gn()}}})},za.discardPendingWarnings=function(){Sl=[],Rl=[],Ol=[],Ml=[],Dl=[],Al=[],pd=new Map}}function Xa(e,t){if(e&&e.defaultProps){var n=st({},t),r=e.defaultProps;for(var o in r)n[o]===void 0&&(n[o]=r[o]);return n}return t}var _m=ui(null),Em;Em={};var md=null,su=null,bm=null,hd=!1;function vd(){md=null,su=null,bm=null,hd=!1}function Tg(){hd=!0}function wg(){hd=!1}function Sg(e,t,n){Er(_m,t._currentValue,e),t._currentValue=n,t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==Em&&p("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),t._currentRenderer=Em}function Tm(e,t){var n=_m.current;_r(_m,t),e._currentValue=n}function wm(e,t,n){for(var r=e;r!==null;){var o=r.alternate;if(Ws(r.childLanes,t)?o!==null&&!Ws(o.childLanes,t)&&(o.childLanes=at(o.childLanes,t)):(r.childLanes=at(r.childLanes,t),o!==null&&(o.childLanes=at(o.childLanes,t))),r===n)break;r=r.return}r!==n&&p("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function GR(e,t,n){qR(e,t,n)}function qR(e,t,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=void 0,c=r.dependencies;if(c!==null){o=r.child;for(var d=c.firstContext;d!==null;){if(d.context===t){if(r.tag===X){var y=Yu(n),E=Io(Gt,y);E.tag=gd;var S=r.updateQueue;if(S!==null){var A=S.shared,U=A.pending;U===null?E.next=E:(E.next=U.next,U.next=E),A.pending=E}}r.lanes=at(r.lanes,n);var I=r.alternate;I!==null&&(I.lanes=at(I.lanes,n)),wm(r.return,n,e),c.lanes=at(c.lanes,n);break}d=d.next}}else if(r.tag===We)o=r.type===e.type?null:r.child;else if(r.tag===F){var W=r.return;if(W===null)throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");W.lanes=at(W.lanes,n);var Q=W.alternate;Q!==null&&(Q.lanes=at(Q.lanes,n)),wm(W,n,e),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}var K=o.sibling;if(K!==null){K.return=o.return,o=K;break}o=o.return}r=o}}function uu(e,t){md=e,su=null,bm=null;var n=e.dependencies;if(n!==null){var r=n.firstContext;r!==null&&(ua(n.lanes,t)&&Bl(),n.firstContext=null)}}function En(e){hd&&p("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");var t=e._currentValue;if(bm!==e){var n={context:e,memoizedValue:t,next:null};if(su===null){if(md===null)throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");su=n,md.dependencies={lanes:ue,firstContext:n}}else su=su.next=n}return t}var fs=null;function Sm(e){fs===null?fs=[e]:fs.push(e)}function KR(){if(fs!==null){for(var e=0;e<fs.length;e++){var t=fs[e],n=t.interleaved;if(n!==null){t.interleaved=null;var r=n.next,o=t.pending;if(o!==null){var c=o.next;o.next=r,n.next=c}t.pending=n}}fs=null}}function Rg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Sm(t)):(n.next=o.next,o.next=n),t.interleaved=n,yd(e,r)}function JR(e,t,n,r){var o=t.interleaved;o===null?(n.next=n,Sm(t)):(n.next=o.next,o.next=n),t.interleaved=n}function ZR(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Sm(t)):(n.next=o.next,o.next=n),t.interleaved=n,yd(e,r)}function $r(e,t){return yd(e,t)}var eO=yd;function yd(e,t){e.lanes=at(e.lanes,t);var n=e.alternate;n!==null&&(n.lanes=at(n.lanes,t)),n===null&&(e.flags&(Ae|Xr))!==te&&OE(e);for(var r=e,o=e.return;o!==null;)o.childLanes=at(o.childLanes,t),n=o.alternate,n!==null?n.childLanes=at(n.childLanes,t):(o.flags&(Ae|Xr))!==te&&OE(e),r=o,o=o.return;if(r.tag===Z){var c=r.stateNode;return c}else return null}var Og=0,Mg=1,gd=2,Rm=3,_d=!1,Om,Ed;Om=!1,Ed=null;function Mm(e){var t={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:ue},effects:null};e.updateQueue=t}function Dg(e,t){var n=t.updateQueue,r=e.updateQueue;if(n===r){var o={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects};t.updateQueue=o}}function Io(e,t){var n={eventTime:e,lane:t,tag:Og,payload:null,callback:null,next:null};return n}function fi(e,t,n){var r=e.updateQueue;if(r===null)return null;var o=r.shared;if(Ed===o&&!Om&&(p("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),Om=!0),eD()){var c=o.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t,eO(e,n)}else return ZR(e,o,t,n)}function bd(e,t,n){var r=t.updateQueue;if(r!==null){var o=r.shared;if(Vv(n)){var c=o.lanes;c=Qv(c,e.pendingLanes);var d=at(c,n);o.lanes=d,Sp(e,d)}}}function Dm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null){var o=r.updateQueue;if(n===o){var c=null,d=null,y=n.firstBaseUpdate;if(y!==null){var E=y;do{var S={eventTime:E.eventTime,lane:E.lane,tag:E.tag,payload:E.payload,callback:E.callback,next:null};d===null?c=d=S:(d.next=S,d=S),E=E.next}while(E!==null);d===null?c=d=t:(d.next=t,d=t)}else c=d=t;n={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,effects:o.effects},e.updateQueue=n;return}}var A=n.lastBaseUpdate;A===null?n.firstBaseUpdate=t:A.next=t,n.lastBaseUpdate=t}function tO(e,t,n,r,o,c){switch(n.tag){case Mg:{var d=n.payload;if(typeof d=="function"){Tg();var y=d.call(c,r,o);{if(e.mode&_n){$n(!0);try{d.call(c,r,o)}finally{$n(!1)}}wg()}return y}return d}case Rm:e.flags=e.flags&~Kn|ye;case Og:{var E=n.payload,S;if(typeof E=="function"){Tg(),S=E.call(c,r,o);{if(e.mode&_n){$n(!0);try{E.call(c,r,o)}finally{$n(!1)}}wg()}}else S=E;return S==null?r:st({},r,S)}case gd:return _d=!0,r}return r}function Td(e,t,n,r){var o=e.updateQueue;_d=!1,Ed=o.shared;var c=o.firstBaseUpdate,d=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var E=y,S=E.next;E.next=null,d===null?c=S:d.next=S,d=E;var A=e.alternate;if(A!==null){var U=A.updateQueue,I=U.lastBaseUpdate;I!==d&&(I===null?U.firstBaseUpdate=S:I.next=S,U.lastBaseUpdate=E)}}if(c!==null){var W=o.baseState,Q=ue,K=null,Se=null,ze=null,Ce=c;do{var ht=Ce.lane,ft=Ce.eventTime;if(Ws(r,ht)){if(ze!==null){var J={eventTime:ft,lane:Vn,tag:Ce.tag,payload:Ce.payload,callback:Ce.callback,next:null};ze=ze.next=J}W=tO(e,o,Ce,W,t,n);var z=Ce.callback;if(z!==null&&Ce.lane!==Vn){e.flags|=je;var de=o.effects;de===null?o.effects=[Ce]:de.push(Ce)}}else{var j={eventTime:ft,lane:ht,tag:Ce.tag,payload:Ce.payload,callback:Ce.callback,next:null};ze===null?(Se=ze=j,K=W):ze=ze.next=j,Q=at(Q,ht)}if(Ce=Ce.next,Ce===null){if(y=o.shared.pending,y===null)break;var Re=y,Ee=Re.next;Re.next=null,Ce=Ee,o.lastBaseUpdate=Re,o.shared.pending=null}}while(!0);ze===null&&(K=W),o.baseState=K,o.firstBaseUpdate=Se,o.lastBaseUpdate=ze;var Ve=o.shared.interleaved;if(Ve!==null){var Ke=Ve;do Q=at(Q,Ke.lane),Ke=Ke.next;while(Ke!==Ve)}else c===null&&(o.shared.lanes=ue);tc(Q),e.lanes=Q,e.memoizedState=W}Ed=null}function nO(e,t){if(typeof e!="function")throw new Error("Invalid argument passed as callback. Expected a function. Instead "+("received: "+e));e.call(t)}function Ag(){_d=!1}function wd(){return _d}function Cg(e,t,n){var r=t.effects;if(t.effects=null,r!==null)for(var o=0;o<r.length;o++){var c=r[o],d=c.callback;d!==null&&(c.callback=null,nO(d,n))}}var Am={},Pg=new f.Component().refs,Cm,Pm,xm,Fm,Nm,xg,Sd,km,Im,Um;{Cm=new Set,Pm=new Set,xm=new Set,Fm=new Set,km=new Set,Nm=new Set,Im=new Set,Um=new Set;var Fg=new Set;Sd=function(e,t){if(!(e===null||typeof e=="function")){var n=t+"_"+e;Fg.has(n)||(Fg.add(n),p("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e))}},xg=function(e,t){if(t===void 0){var n=bt(e)||"Component";Nm.has(n)||(Nm.add(n),p("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",n))}},Object.defineProperty(Am,"_processChildContext",{enumerable:!1,value:function(){throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(Am)}function Hm(e,t,n,r){var o=e.memoizedState,c=n(r,o);{if(e.mode&_n){$n(!0);try{c=n(r,o)}finally{$n(!1)}}xg(t,c)}var d=c==null?o:st({},o,c);if(e.memoizedState=d,e.lanes===ue){var y=e.updateQueue;y.baseState=d}}var Lm={isMounted:db,enqueueSetState:function(e,t,n){var r=ee(e),o=xr(),c=Ei(r),d=Io(o,c);d.payload=t,n!=null&&(Sd(n,"setState"),d.callback=n);var y=fi(r,d,c);y!==null&&(In(y,r,c,o),bd(y,r,c)),Zf(r,c)},enqueueReplaceState:function(e,t,n){var r=ee(e),o=xr(),c=Ei(r),d=Io(o,c);d.tag=Mg,d.payload=t,n!=null&&(Sd(n,"replaceState"),d.callback=n);var y=fi(r,d,c);y!==null&&(In(y,r,c,o),bd(y,r,c)),Zf(r,c)},enqueueForceUpdate:function(e,t){var n=ee(e),r=xr(),o=Ei(n),c=Io(r,o);c.tag=gd,t!=null&&(Sd(t,"forceUpdate"),c.callback=t);var d=fi(n,c,o);d!==null&&(In(d,n,o,r),bd(d,n,o)),Xb(n,o)}};function Ng(e,t,n,r,o,c,d){var y=e.stateNode;if(typeof y.shouldComponentUpdate=="function"){var E=y.shouldComponentUpdate(r,c,d);{if(e.mode&_n){$n(!0);try{E=y.shouldComponentUpdate(r,c,d)}finally{$n(!1)}}E===void 0&&p("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",bt(t)||"Component")}return E}return t.prototype&&t.prototype.isPureReactComponent?!ll(n,r)||!ll(o,c):!0}function rO(e,t,n){var r=e.stateNode;{var o=bt(t)||"Component",c=r.render;c||(t.prototype&&typeof t.prototype.render=="function"?p("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",o):p("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",o)),r.getInitialState&&!r.getInitialState.isReactClassApproved&&!r.state&&p("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",o),r.getDefaultProps&&!r.getDefaultProps.isReactClassApproved&&p("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",o),r.propTypes&&p("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",o),r.contextType&&p("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",o),r.contextTypes&&p("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",o),t.contextType&&t.contextTypes&&!Im.has(t)&&(Im.add(t),p("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",o)),typeof r.componentShouldUpdate=="function"&&p("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",o),t.prototype&&t.prototype.isPureReactComponent&&typeof r.shouldComponentUpdate<"u"&&p("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",bt(t)||"A pure component"),typeof r.componentDidUnmount=="function"&&p("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",o),typeof r.componentDidReceiveProps=="function"&&p("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",o),typeof r.componentWillRecieveProps=="function"&&p("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",o),typeof r.UNSAFE_componentWillRecieveProps=="function"&&p("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",o);var d=r.props!==n;r.props!==void 0&&d&&p("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o,o),r.defaultProps&&p("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",o,o),typeof r.getSnapshotBeforeUpdate=="function"&&typeof r.componentDidUpdate!="function"&&!xm.has(t)&&(xm.add(t),p("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",bt(t))),typeof r.getDerivedStateFromProps=="function"&&p("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),typeof r.getDerivedStateFromError=="function"&&p("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),typeof t.getSnapshotBeforeUpdate=="function"&&p("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",o);var y=r.state;y&&(typeof y!="object"||Tt(y))&&p("%s.state: must be set to an object or null",o),typeof r.getChildContext=="function"&&typeof t.childContextTypes!="object"&&p("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",o)}}function kg(e,t){t.updater=Lm,e.stateNode=t,le(t,e),t._reactInternalInstance=Am}function Ig(e,t,n){var r=!1,o=fa,c=fa,d=t.contextType;if("contextType"in t){var y=d===null||d!==void 0&&d.$$typeof===C&&d._context===void 0;if(!y&&!Um.has(t)){Um.add(t);var E="";d===void 0?E=" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof d!="object"?E=" However, it is set to a "+typeof d+".":d.$$typeof===rt?E=" Did you accidentally pass the Context.Provider instead?":d._context!==void 0?E=" Did you accidentally pass the Context.Consumer instead?":E=" However, it is set to an object with keys {"+Object.keys(d).join(", ")+"}.",p("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",bt(t)||"Component",E)}}if(typeof d=="object"&&d!==null)c=En(d);else{o=nu(e,t,!0);var S=t.contextTypes;r=S!=null,c=r?ru(e,o):fa}var A=new t(n,c);if(e.mode&_n){$n(!0);try{A=new t(n,c)}finally{$n(!1)}}var U=e.memoizedState=A.state!==null&&A.state!==void 0?A.state:null;kg(e,A);{if(typeof t.getDerivedStateFromProps=="function"&&U===null){var I=bt(t)||"Component";Pm.has(I)||(Pm.add(I),p("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",I,A.state===null?"null":"undefined",I))}if(typeof t.getDerivedStateFromProps=="function"||typeof A.getSnapshotBeforeUpdate=="function"){var W=null,Q=null,K=null;if(typeof A.componentWillMount=="function"&&A.componentWillMount.__suppressDeprecationWarning!==!0?W="componentWillMount":typeof A.UNSAFE_componentWillMount=="function"&&(W="UNSAFE_componentWillMount"),typeof A.componentWillReceiveProps=="function"&&A.componentWillReceiveProps.__suppressDeprecationWarning!==!0?Q="componentWillReceiveProps":typeof A.UNSAFE_componentWillReceiveProps=="function"&&(Q="UNSAFE_componentWillReceiveProps"),typeof A.componentWillUpdate=="function"&&A.componentWillUpdate.__suppressDeprecationWarning!==!0?K="componentWillUpdate":typeof A.UNSAFE_componentWillUpdate=="function"&&(K="UNSAFE_componentWillUpdate"),W!==null||Q!==null||K!==null){var Se=bt(t)||"Component",ze=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";Fm.has(Se)||(Fm.add(Se),p(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,Se,ze,W!==null?`
  `+W:"",Q!==null?`
  `+Q:"",K!==null?`
  `+K:""))}}}return r&&ig(e,o,c),A}function aO(e,t){var n=t.state;typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&(p("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",et(e)||"Component"),Lm.enqueueReplaceState(t,t.state,null))}function Ug(e,t,n,r){var o=t.state;if(typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==o){{var c=et(e)||"Component";Cm.has(c)||(Cm.add(c),p("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",c))}Lm.enqueueReplaceState(t,t.state,null)}}function jm(e,t,n,r){rO(e,t,n);var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Pg,Mm(e);var c=t.contextType;if(typeof c=="object"&&c!==null)o.context=En(c);else{var d=nu(e,t,!0);o.context=ru(e,d)}{if(o.state===n){var y=bt(t)||"Component";km.has(y)||(km.add(y),p("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",y))}e.mode&_n&&za.recordLegacyContextWarning(e,o),za.recordUnsafeLifecycleWarnings(e,o)}o.state=e.memoizedState;var E=t.getDerivedStateFromProps;if(typeof E=="function"&&(Hm(e,t,E,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps!="function"&&typeof o.getSnapshotBeforeUpdate!="function"&&(typeof o.UNSAFE_componentWillMount=="function"||typeof o.componentWillMount=="function")&&(aO(e,o),Td(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"){var S=Y;S|=ia,(e.mode&ao)!==$e&&(S|=Xn),e.flags|=S}}function oO(e,t,n,r){var o=e.stateNode,c=e.memoizedProps;o.props=c;var d=o.context,y=t.contextType,E=fa;if(typeof y=="object"&&y!==null)E=En(y);else{var S=nu(e,t,!0);E=ru(e,S)}var A=t.getDerivedStateFromProps,U=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function";!U&&(typeof o.UNSAFE_componentWillReceiveProps=="function"||typeof o.componentWillReceiveProps=="function")&&(c!==n||d!==E)&&Ug(e,o,n,E),Ag();var I=e.memoizedState,W=o.state=I;if(Td(e,n,o,r),W=e.memoizedState,c===n&&I===W&&!od()&&!wd()){if(typeof o.componentDidMount=="function"){var Q=Y;Q|=ia,(e.mode&ao)!==$e&&(Q|=Xn),e.flags|=Q}return!1}typeof A=="function"&&(Hm(e,t,A,n),W=e.memoizedState);var K=wd()||Ng(e,t,c,n,I,W,E);if(K){if(!U&&(typeof o.UNSAFE_componentWillMount=="function"||typeof o.componentWillMount=="function")&&(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"){var Se=Y;Se|=ia,(e.mode&ao)!==$e&&(Se|=Xn),e.flags|=Se}}else{if(typeof o.componentDidMount=="function"){var ze=Y;ze|=ia,(e.mode&ao)!==$e&&(ze|=Xn),e.flags|=ze}e.memoizedProps=n,e.memoizedState=W}return o.props=n,o.state=W,o.context=E,K}function iO(e,t,n,r,o){var c=t.stateNode;Dg(e,t);var d=t.memoizedProps,y=t.type===t.elementType?d:Xa(t.type,d);c.props=y;var E=t.pendingProps,S=c.context,A=n.contextType,U=fa;if(typeof A=="object"&&A!==null)U=En(A);else{var I=nu(t,n,!0);U=ru(t,I)}var W=n.getDerivedStateFromProps,Q=typeof W=="function"||typeof c.getSnapshotBeforeUpdate=="function";!Q&&(typeof c.UNSAFE_componentWillReceiveProps=="function"||typeof c.componentWillReceiveProps=="function")&&(d!==E||S!==U)&&Ug(t,c,r,U),Ag();var K=t.memoizedState,Se=c.state=K;if(Td(t,r,c,o),Se=t.memoizedState,d===E&&K===Se&&!od()&&!wd()&&!Qn)return typeof c.componentDidUpdate=="function"&&(d!==e.memoizedProps||K!==e.memoizedState)&&(t.flags|=Y),typeof c.getSnapshotBeforeUpdate=="function"&&(d!==e.memoizedProps||K!==e.memoizedState)&&(t.flags|=fn),!1;typeof W=="function"&&(Hm(t,n,W,r),Se=t.memoizedState);var ze=wd()||Ng(t,n,y,r,K,Se,U)||Qn;return ze?(!Q&&(typeof c.UNSAFE_componentWillUpdate=="function"||typeof c.componentWillUpdate=="function")&&(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,Se,U),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,Se,U)),typeof c.componentDidUpdate=="function"&&(t.flags|=Y),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=fn)):(typeof c.componentDidUpdate=="function"&&(d!==e.memoizedProps||K!==e.memoizedState)&&(t.flags|=Y),typeof c.getSnapshotBeforeUpdate=="function"&&(d!==e.memoizedProps||K!==e.memoizedState)&&(t.flags|=fn),t.memoizedProps=r,t.memoizedState=Se),c.props=r,c.state=Se,c.context=U,ze}var zm,Xm,Bm,$m,Vm,Hg=function(e,t){};zm=!1,Xm=!1,Bm={},$m={},Vm={},Hg=function(e,t){if(!(e===null||typeof e!="object")&&!(!e._store||e._store.validated||e.key!=null)){if(typeof e._store!="object")throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=!0;var n=et(t)||"Component";$m[n]||($m[n]=!0,p('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'))}};function Cl(e,t,n){var r=n.ref;if(r!==null&&typeof r!="function"&&typeof r!="object"){if((e.mode&_n||lr)&&!(n._owner&&n._self&&n._owner.stateNode!==n._self)){var o=et(e)||"Component";Bm[o]||(p('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',r),Bm[o]=!0)}if(n._owner){var c=n._owner,d;if(c){var y=c;if(y.tag!==X)throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");d=y.stateNode}if(!d)throw new Error("Missing owner for string ref "+r+". This error is likely caused by a bug in React. Please file an issue.");var E=d;wn(r,"ref");var S=""+r;if(t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===S)return t.ref;var A=function(U){var I=E.refs;I===Pg&&(I=E.refs={}),U===null?delete I[S]:I[S]=U};return A._stringRef=S,A}else{if(typeof r!="string")throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!n._owner)throw new Error("Element ref was specified as a string ("+r+`) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`)}}return r}function Rd(e,t){var n=Object.prototype.toString.call(t);throw new Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}function Od(e){{var t=et(e)||"Component";if(Vm[t])return;Vm[t]=!0,p("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.")}}function Lg(e){var t=e._payload,n=e._init;return n(t)}function jg(e){function t(j,J){if(!!e){var z=j.deletions;z===null?(j.deletions=[J],j.flags|=he):z.push(J)}}function n(j,J){if(!e)return null;for(var z=J;z!==null;)t(j,z),z=z.sibling;return null}function r(j,J){for(var z=new Map,de=J;de!==null;)de.key!==null?z.set(de.key,de):z.set(de.index,de),de=de.sibling;return z}function o(j,J){var z=Es(j,J);return z.index=0,z.sibling=null,z}function c(j,J,z){if(j.index=z,!e)return j.flags|=Wi,J;var de=j.alternate;if(de!==null){var Re=de.index;return Re<J?(j.flags|=Ae,J):Re}else return j.flags|=Ae,J}function d(j){return e&&j.alternate===null&&(j.flags|=Ae),j}function y(j,J,z,de){if(J===null||J.tag!==fe){var Re=gv(z,j.mode,de);return Re.return=j,Re}else{var Ee=o(J,z);return Ee.return=j,Ee}}function E(j,J,z,de){var Re=z.type;if(Re===ie)return A(j,J,z.props.children,de,z.key);if(J!==null&&(J.elementType===Re||CE(J,z)||typeof Re=="object"&&Re!==null&&Re.$$typeof===lt&&Lg(Re)===J.type)){var Ee=o(J,z.props);return Ee.ref=Cl(j,J,z),Ee.return=j,Ee._debugSource=z._source,Ee._debugOwner=z._owner,Ee}var Ve=yv(z,j.mode,de);return Ve.ref=Cl(j,J,z),Ve.return=j,Ve}function S(j,J,z,de){if(J===null||J.tag!==oe||J.stateNode.containerInfo!==z.containerInfo||J.stateNode.implementation!==z.implementation){var Re=_v(z,j.mode,de);return Re.return=j,Re}else{var Ee=o(J,z.children||[]);return Ee.return=j,Ee}}function A(j,J,z,de,Re){if(J===null||J.tag!==Ne){var Ee=Ti(z,j.mode,de,Re);return Ee.return=j,Ee}else{var Ve=o(J,z);return Ve.return=j,Ve}}function U(j,J,z){if(typeof J=="string"&&J!==""||typeof J=="number"){var de=gv(""+J,j.mode,z);return de.return=j,de}if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Hn:{var Re=yv(J,j.mode,z);return Re.ref=Cl(j,null,J),Re.return=j,Re}case N:{var Ee=_v(J,j.mode,z);return Ee.return=j,Ee}case lt:{var Ve=J._payload,Ke=J._init;return U(j,Ke(Ve),z)}}if(Tt(J)||Ca(J)){var kt=Ti(J,j.mode,z,null);return kt.return=j,kt}Rd(j,J)}return typeof J=="function"&&Od(j),null}function I(j,J,z,de){var Re=J!==null?J.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return Re!==null?null:y(j,J,""+z,de);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Hn:return z.key===Re?E(j,J,z,de):null;case N:return z.key===Re?S(j,J,z,de):null;case lt:{var Ee=z._payload,Ve=z._init;return I(j,J,Ve(Ee),de)}}if(Tt(z)||Ca(z))return Re!==null?null:A(j,J,z,de,null);Rd(j,z)}return typeof z=="function"&&Od(j),null}function W(j,J,z,de,Re){if(typeof de=="string"&&de!==""||typeof de=="number"){var Ee=j.get(z)||null;return y(J,Ee,""+de,Re)}if(typeof de=="object"&&de!==null){switch(de.$$typeof){case Hn:{var Ve=j.get(de.key===null?z:de.key)||null;return E(J,Ve,de,Re)}case N:{var Ke=j.get(de.key===null?z:de.key)||null;return S(J,Ke,de,Re)}case lt:var kt=de._payload,wt=de._init;return W(j,J,z,wt(kt),Re)}if(Tt(de)||Ca(de)){var pn=j.get(z)||null;return A(J,pn,de,Re,null)}Rd(J,de)}return typeof de=="function"&&Od(J),null}function Q(j,J,z){{if(typeof j!="object"||j===null)return J;switch(j.$$typeof){case Hn:case N:Hg(j,z);var de=j.key;if(typeof de!="string")break;if(J===null){J=new Set,J.add(de);break}if(!J.has(de)){J.add(de);break}p("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",de);break;case lt:var Re=j._payload,Ee=j._init;Q(Ee(Re),J,z);break}}return J}function K(j,J,z,de){for(var Re=null,Ee=0;Ee<z.length;Ee++){var Ve=z[Ee];Re=Q(Ve,Re,j)}for(var Ke=null,kt=null,wt=J,pn=0,St=0,cn=null;wt!==null&&St<z.length;St++){wt.index>St?(cn=wt,wt=null):cn=wt.sibling;var Tr=I(j,wt,z[St],de);if(Tr===null){wt===null&&(wt=cn);break}e&&wt&&Tr.alternate===null&&t(j,wt),pn=c(Tr,pn,St),kt===null?Ke=Tr:kt.sibling=Tr,kt=Tr,wt=cn}if(St===z.length){if(n(j,wt),Zn()){var ir=St;ss(j,ir)}return Ke}if(wt===null){for(;St<z.length;St++){var ma=U(j,z[St],de);ma!==null&&(pn=c(ma,pn,St),kt===null?Ke=ma:kt.sibling=ma,kt=ma)}if(Zn()){var Fr=St;ss(j,Fr)}return Ke}for(var Nr=r(j,wt);St<z.length;St++){var wr=W(Nr,j,St,z[St],de);wr!==null&&(e&&wr.alternate!==null&&Nr.delete(wr.key===null?St:wr.key),pn=c(wr,pn,St),kt===null?Ke=wr:kt.sibling=wr,kt=wr)}if(e&&Nr.forEach(function(Ru){return t(j,Ru)}),Zn()){var Xo=St;ss(j,Xo)}return Ke}function Se(j,J,z,de){var Re=Ca(z);if(typeof Re!="function")throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");{typeof Symbol=="function"&&z[Symbol.toStringTag]==="Generator"&&(Xm||p("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),Xm=!0),z.entries===Re&&(zm||p("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),zm=!0);var Ee=Re.call(z);if(Ee)for(var Ve=null,Ke=Ee.next();!Ke.done;Ke=Ee.next()){var kt=Ke.value;Ve=Q(kt,Ve,j)}}var wt=Re.call(z);if(wt==null)throw new Error("An iterable object provided no iterator.");for(var pn=null,St=null,cn=J,Tr=0,ir=0,ma=null,Fr=wt.next();cn!==null&&!Fr.done;ir++,Fr=wt.next()){cn.index>ir?(ma=cn,cn=null):ma=cn.sibling;var Nr=I(j,cn,Fr.value,de);if(Nr===null){cn===null&&(cn=ma);break}e&&cn&&Nr.alternate===null&&t(j,cn),Tr=c(Nr,Tr,ir),St===null?pn=Nr:St.sibling=Nr,St=Nr,cn=ma}if(Fr.done){if(n(j,cn),Zn()){var wr=ir;ss(j,wr)}return pn}if(cn===null){for(;!Fr.done;ir++,Fr=wt.next()){var Xo=U(j,Fr.value,de);Xo!==null&&(Tr=c(Xo,Tr,ir),St===null?pn=Xo:St.sibling=Xo,St=Xo)}if(Zn()){var Ru=ir;ss(j,Ru)}return pn}for(var ic=r(j,cn);!Fr.done;ir++,Fr=wt.next()){var vo=W(ic,j,ir,Fr.value,de);vo!==null&&(e&&vo.alternate!==null&&ic.delete(vo.key===null?ir:vo.key),Tr=c(vo,Tr,ir),St===null?pn=vo:St.sibling=vo,St=vo)}if(e&&ic.forEach(function(EA){return t(j,EA)}),Zn()){var _A=ir;ss(j,_A)}return pn}function ze(j,J,z,de){if(J!==null&&J.tag===fe){n(j,J.sibling);var Re=o(J,z);return Re.return=j,Re}n(j,J);var Ee=gv(z,j.mode,de);return Ee.return=j,Ee}function Ce(j,J,z,de){for(var Re=z.key,Ee=J;Ee!==null;){if(Ee.key===Re){var Ve=z.type;if(Ve===ie){if(Ee.tag===Ne){n(j,Ee.sibling);var Ke=o(Ee,z.props.children);return Ke.return=j,Ke._debugSource=z._source,Ke._debugOwner=z._owner,Ke}}else if(Ee.elementType===Ve||CE(Ee,z)||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===lt&&Lg(Ve)===Ee.type){n(j,Ee.sibling);var kt=o(Ee,z.props);return kt.ref=Cl(j,Ee,z),kt.return=j,kt._debugSource=z._source,kt._debugOwner=z._owner,kt}n(j,Ee);break}else t(j,Ee);Ee=Ee.sibling}if(z.type===ie){var wt=Ti(z.props.children,j.mode,de,z.key);return wt.return=j,wt}else{var pn=yv(z,j.mode,de);return pn.ref=Cl(j,J,z),pn.return=j,pn}}function ht(j,J,z,de){for(var Re=z.key,Ee=J;Ee!==null;){if(Ee.key===Re)if(Ee.tag===oe&&Ee.stateNode.containerInfo===z.containerInfo&&Ee.stateNode.implementation===z.implementation){n(j,Ee.sibling);var Ve=o(Ee,z.children||[]);return Ve.return=j,Ve}else{n(j,Ee);break}else t(j,Ee);Ee=Ee.sibling}var Ke=_v(z,j.mode,de);return Ke.return=j,Ke}function ft(j,J,z,de){var Re=typeof z=="object"&&z!==null&&z.type===ie&&z.key===null;if(Re&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Hn:return d(Ce(j,J,z,de));case N:return d(ht(j,J,z,de));case lt:var Ee=z._payload,Ve=z._init;return ft(j,J,Ve(Ee),de)}if(Tt(z))return K(j,J,z,de);if(Ca(z))return Se(j,J,z,de);Rd(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"?d(ze(j,J,""+z,de)):(typeof z=="function"&&Od(j),n(j,J))}return ft}var lu=jg(!0),zg=jg(!1);function sO(e,t){if(e!==null&&t.child!==e.child)throw new Error("Resuming work not yet implemented.");if(t.child!==null){var n=t.child,r=Es(n,n.pendingProps);for(t.child=r,r.return=t;n.sibling!==null;)n=n.sibling,r=r.sibling=Es(n,n.pendingProps),r.return=t;r.sibling=null}}function uO(e,t){for(var n=e.child;n!==null;)UD(n,t),n=n.sibling}var Pl={},pi=ui(Pl),xl=ui(Pl),Md=ui(Pl);function Dd(e){if(e===Pl)throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return e}function Xg(){var e=Dd(Md.current);return e}function Wm(e,t){Er(Md,t,e),Er(xl,e,e),Er(pi,Pl,e);var n=TS(t);_r(pi,e),Er(pi,n,e)}function cu(e){_r(pi,e),_r(xl,e),_r(Md,e)}function Qm(){var e=Dd(pi.current);return e}function Bg(e){Dd(Md.current);var t=Dd(pi.current),n=wS(t,e.type);t!==n&&(Er(xl,e,e),Er(pi,n,e))}function Ym(e){xl.current===e&&(_r(pi,e),_r(xl,e))}var lO=0,$g=1,Vg=1,Fl=2,Ba=ui(lO);function Gm(e,t){return(e&t)!==0}function du(e){return e&$g}function qm(e,t){return e&$g|t}function cO(e,t){return e|t}function mi(e,t){Er(Ba,t,e)}function fu(e){_r(Ba,e)}function dO(e,t){var n=e.memoizedState;return n!==null?n.dehydrated!==null:(e.memoizedProps,!0)}function Ad(e){for(var t=e;t!==null;){if(t.tag===Ie){var n=t.memoizedState;if(n!==null){var r=n.dehydrated;if(r===null||tg(r)||nm(r))return t}}else if(t.tag===Ht&&t.memoizedProps.revealOrder!==void 0){var o=(t.flags&ye)!==te;if(o)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)return null;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vr=0,An=1,uo=2,Cn=4,er=8,Km=[];function Jm(){for(var e=0;e<Km.length;e++){var t=Km[e];t._workInProgressVersionPrimary=null}Km.length=0}function fO(e,t){var n=t._getVersion,r=n(t._source);e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r)}var Te=s.ReactCurrentDispatcher,Nl=s.ReactCurrentBatchConfig,Zm,pu;Zm=new Set;var ps=ue,Nt=null,Pn=null,xn=null,Cd=!1,kl=!1,Il=0,pO=0,mO=25,ne=null,Oa=null,hi=-1,eh=!1;function At(){{var e=ne;Oa===null?Oa=[e]:Oa.push(e)}}function ge(){{var e=ne;Oa!==null&&(hi++,Oa[hi]!==e&&hO(e))}}function mu(e){e!=null&&!Tt(e)&&p("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",ne,typeof e)}function hO(e){{var t=et(Nt);if(!Zm.has(t)&&(Zm.add(t),Oa!==null)){for(var n="",r=30,o=0;o<=hi;o++){for(var c=Oa[o],d=o===hi?e:c,y=o+1+". "+c;y.length<r;)y+=" ";y+=d+`
`,n+=y}p(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,n)}}}function br(){throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function th(e,t){if(eh)return!1;if(t===null)return p("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",ne),!1;e.length!==t.length&&p(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,ne,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!da(e[n],t[n]))return!1;return!0}function hu(e,t,n,r,o,c){ps=c,Nt=t,Oa=e!==null?e._debugHookTypes:null,hi=-1,eh=e!==null&&e.type!==t.type,t.memoizedState=null,t.updateQueue=null,t.lanes=ue,e!==null&&e.memoizedState!==null?Te.current=p_:Oa!==null?Te.current=f_:Te.current=d_;var d=n(r,o);if(kl){var y=0;do{if(kl=!1,Il=0,y>=mO)throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");y+=1,eh=!1,Pn=null,xn=null,t.updateQueue=null,hi=-1,Te.current=m_,d=n(r,o)}while(kl)}Te.current=Bd,t._debugHookTypes=Oa;var E=Pn!==null&&Pn.next!==null;if(ps=ue,Nt=null,Pn=null,xn=null,ne=null,Oa=null,hi=-1,e!==null&&(e.flags&Mo)!==(t.flags&Mo)&&(e.mode&pt)!==$e&&p("Internal React error: Expected static flag was missing. Please notify the React team."),Cd=!1,E)throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return d}function vu(){var e=Il!==0;return Il=0,e}function Wg(e,t,n){t.updateQueue=e.updateQueue,(t.mode&ao)!==$e?t.flags&=~(Gi|Xn|Mn|Y):t.flags&=~(Mn|Y),e.lanes=Cc(e.lanes,n)}function Qg(){if(Te.current=Bd,Cd){for(var e=Nt.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Cd=!1}ps=ue,Nt=null,Pn=null,xn=null,Oa=null,hi=-1,ne=null,i_=!1,kl=!1,Il=0}function lo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Nt.memoizedState=xn=e:xn=xn.next=e,xn}function Ma(){var e;if(Pn===null){var t=Nt.alternate;t!==null?e=t.memoizedState:e=null}else e=Pn.next;var n;if(xn===null?n=Nt.memoizedState:n=xn.next,n!==null)xn=n,n=xn.next,Pn=e;else{if(e===null)throw new Error("Rendered more hooks than during the previous render.");Pn=e;var r={memoizedState:Pn.memoizedState,baseState:Pn.baseState,baseQueue:Pn.baseQueue,queue:Pn.queue,next:null};xn===null?Nt.memoizedState=xn=r:xn=xn.next=r}return xn}function Yg(){return{lastEffect:null,stores:null}}function nh(e,t){return typeof t=="function"?t(e):t}function rh(e,t,n){var r=lo(),o;n!==void 0?o=n(t):o=t,r.memoizedState=r.baseState=o;var c={pending:null,interleaved:null,lanes:ue,dispatch:null,lastRenderedReducer:e,lastRenderedState:o};r.queue=c;var d=c.dispatch=_O.bind(null,Nt,c);return[r.memoizedState,d]}function ah(e,t,n){var r=Ma(),o=r.queue;if(o===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");o.lastRenderedReducer=e;var c=Pn,d=c.baseQueue,y=o.pending;if(y!==null){if(d!==null){var E=d.next,S=y.next;d.next=S,y.next=E}c.baseQueue!==d&&p("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),c.baseQueue=d=y,o.pending=null}if(d!==null){var A=d.next,U=c.baseState,I=null,W=null,Q=null,K=A;do{var Se=K.lane;if(Ws(ps,Se)){if(Q!==null){var Ce={lane:Vn,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null};Q=Q.next=Ce}if(K.hasEagerState)U=K.eagerState;else{var ht=K.action;U=e(U,ht)}}else{var ze={lane:Se,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null};Q===null?(W=Q=ze,I=U):Q=Q.next=ze,Nt.lanes=at(Nt.lanes,Se),tc(Se)}K=K.next}while(K!==null&&K!==A);Q===null?I=U:Q.next=W,da(U,r.memoizedState)||Bl(),r.memoizedState=U,r.baseState=I,r.baseQueue=Q,o.lastRenderedState=U}var ft=o.interleaved;if(ft!==null){var j=ft;do{var J=j.lane;Nt.lanes=at(Nt.lanes,J),tc(J),j=j.next}while(j!==ft)}else d===null&&(o.lanes=ue);var z=o.dispatch;return[r.memoizedState,z]}function oh(e,t,n){var r=Ma(),o=r.queue;if(o===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");o.lastRenderedReducer=e;var c=o.dispatch,d=o.pending,y=r.memoizedState;if(d!==null){o.pending=null;var E=d.next,S=E;do{var A=S.action;y=e(y,A),S=S.next}while(S!==E);da(y,r.memoizedState)||Bl(),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),o.lastRenderedState=y}return[y,c]}function RA(e,t,n){}function OA(e,t,n){}function ih(e,t,n){var r=Nt,o=lo(),c,d=Zn();if(d){if(n===void 0)throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");c=n(),pu||c!==n()&&(p("The result of getServerSnapshot should be cached to avoid an infinite loop"),pu=!0)}else{if(c=t(),!pu){var y=t();da(c,y)||(p("The result of getSnapshot should be cached to avoid an infinite loop"),pu=!0)}var E=uf();if(E===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");Ac(E,ps)||Gg(r,t,c)}o.memoizedState=c;var S={value:c,getSnapshot:t};return o.queue=S,kd(Kg.bind(null,r,S,e),[e]),r.flags|=Mn,Ul(An|er,qg.bind(null,r,S,c,t),void 0,null),c}function Pd(e,t,n){var r=Nt,o=Ma(),c=t();if(!pu){var d=t();da(c,d)||(p("The result of getSnapshot should be cached to avoid an infinite loop"),pu=!0)}var y=o.memoizedState,E=!da(y,c);E&&(o.memoizedState=c,Bl());var S=o.queue;if(Ll(Kg.bind(null,r,S,e),[e]),S.getSnapshot!==t||E||xn!==null&&xn.memoizedState.tag&An){r.flags|=Mn,Ul(An|er,qg.bind(null,r,S,c,t),void 0,null);var A=uf();if(A===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");Ac(A,ps)||Gg(r,t,c)}return c}function Gg(e,t,n){e.flags|=Ls;var r={getSnapshot:t,value:n},o=Nt.updateQueue;if(o===null)o=Yg(),Nt.updateQueue=o,o.stores=[r];else{var c=o.stores;c===null?o.stores=[r]:c.push(r)}}function qg(e,t,n,r){t.value=n,t.getSnapshot=r,Jg(t)&&Zg(e)}function Kg(e,t,n){var r=function(){Jg(t)&&Zg(e)};return n(r)}function Jg(e){var t=e.getSnapshot,n=e.value;try{var r=t();return!da(n,r)}catch{return!0}}function Zg(e){var t=$r(e,Qe);t!==null&&In(t,e,Qe,Gt)}function xd(e){var t=lo();typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e;var n={pending:null,interleaved:null,lanes:ue,dispatch:null,lastRenderedReducer:nh,lastRenderedState:e};t.queue=n;var r=n.dispatch=EO.bind(null,Nt,n);return[t.memoizedState,r]}function sh(e){return ah(nh)}function uh(e){return oh(nh)}function Ul(e,t,n,r){var o={tag:e,create:t,destroy:n,deps:r,next:null},c=Nt.updateQueue;if(c===null)c=Yg(),Nt.updateQueue=c,c.lastEffect=o.next=o;else{var d=c.lastEffect;if(d===null)c.lastEffect=o.next=o;else{var y=d.next;d.next=o,o.next=y,c.lastEffect=o}}return o}function lh(e){var t=lo();{var n={current:e};return t.memoizedState=n,n}}function Fd(e){var t=Ma();return t.memoizedState}function Hl(e,t,n,r){var o=lo(),c=r===void 0?null:r;Nt.flags|=e,o.memoizedState=Ul(An|t,n,void 0,c)}function Nd(e,t,n,r){var o=Ma(),c=r===void 0?null:r,d=void 0;if(Pn!==null){var y=Pn.memoizedState;if(d=y.destroy,c!==null){var E=y.deps;if(th(c,E)){o.memoizedState=Ul(t,n,d,c);return}}}Nt.flags|=e,o.memoizedState=Ul(An|t,n,d,c)}function kd(e,t){return(Nt.mode&ao)!==$e?Hl(Gi|Mn|Yi,er,e,t):Hl(Mn|Yi,er,e,t)}function Ll(e,t){return Nd(Mn,er,e,t)}function ch(e,t){return Hl(Y,uo,e,t)}function Id(e,t){return Nd(Y,uo,e,t)}function dh(e,t){var n=Y;return n|=ia,(Nt.mode&ao)!==$e&&(n|=Xn),Hl(n,Cn,e,t)}function Ud(e,t){return Nd(Y,Cn,e,t)}function e_(e,t){if(typeof t=="function"){var n=t,r=e();return n(r),function(){n(null)}}else if(t!=null){var o=t;o.hasOwnProperty("current")||p("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(o).join(", ")+"}");var c=e();return o.current=c,function(){o.current=null}}}function fh(e,t,n){typeof t!="function"&&p("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var r=n!=null?n.concat([e]):null,o=Y;return o|=ia,(Nt.mode&ao)!==$e&&(o|=Xn),Hl(o,Cn,e_.bind(null,t,e),r)}function Hd(e,t,n){typeof t!="function"&&p("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var r=n!=null?n.concat([e]):null;return Nd(Y,Cn,e_.bind(null,t,e),r)}function vO(e,t){}var Ld=vO;function ph(e,t){var n=lo(),r=t===void 0?null:t;return n.memoizedState=[e,r],e}function jd(e,t){var n=Ma(),r=t===void 0?null:t,o=n.memoizedState;if(o!==null&&r!==null){var c=o[1];if(th(r,c))return o[0]}return n.memoizedState=[e,r],e}function mh(e,t){var n=lo(),r=t===void 0?null:t,o=e();return n.memoizedState=[o,r],o}function zd(e,t){var n=Ma(),r=t===void 0?null:t,o=n.memoizedState;if(o!==null&&r!==null){var c=o[1];if(th(r,c))return o[0]}var d=e();return n.memoizedState=[d,r],d}function hh(e){var t=lo();return t.memoizedState=e,e}function t_(e){var t=Ma(),n=Pn,r=n.memoizedState;return r_(t,r,e)}function n_(e){var t=Ma();if(Pn===null)return t.memoizedState=e,e;var n=Pn.memoizedState;return r_(t,n,e)}function r_(e,t,n){var r=!Jb(ps);if(r){if(!da(n,t)){var o=Wv();Nt.lanes=at(Nt.lanes,o),tc(o),e.baseState=!0}return t}else return e.baseState&&(e.baseState=!1,Bl()),e.memoizedState=n,n}function yO(e,t,n){var r=Ha();Wn(sT(r,Ao)),e(!0);var o=Nl.transition;Nl.transition={};var c=Nl.transition;Nl.transition._updatedFibers=new Set;try{e(!1),t()}finally{if(Wn(r),Nl.transition=o,o===null&&c._updatedFibers){var d=c._updatedFibers.size;d>10&&M("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),c._updatedFibers.clear()}}}function vh(){var e=xd(!1),t=e[0],n=e[1],r=yO.bind(null,n),o=lo();return o.memoizedState=r,[t,r]}function a_(){var e=sh(),t=e[0],n=Ma(),r=n.memoizedState;return[t,r]}function o_(){var e=uh(),t=e[0],n=Ma(),r=n.memoizedState;return[t,r]}var i_=!1;function gO(){return i_}function yh(){var e=lo(),t=uf(),n=t.identifierPrefix,r;if(Zn()){var o=xR();r=":"+n+"R"+o;var c=Il++;c>0&&(r+="H"+c.toString(32)),r+=":"}else{var d=pO++;r=":"+n+"r"+d.toString(32)+":"}return e.memoizedState=r,r}function Xd(){var e=Ma(),t=e.memoizedState;return t}function _O(e,t,n){typeof arguments[3]=="function"&&p("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=Ei(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(s_(e))u_(t,o);else{var c=Rg(e,t,o,r);if(c!==null){var d=xr();In(c,e,r,d),l_(c,t,r)}}c_(e,r)}function EO(e,t,n){typeof arguments[3]=="function"&&p("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=Ei(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(s_(e))u_(t,o);else{var c=e.alternate;if(e.lanes===ue&&(c===null||c.lanes===ue)){var d=t.lastRenderedReducer;if(d!==null){var y;y=Te.current,Te.current=$a;try{var E=t.lastRenderedState,S=d(E,n);if(o.hasEagerState=!0,o.eagerState=S,da(S,E)){JR(e,t,o,r);return}}catch{}finally{Te.current=y}}}var A=Rg(e,t,o,r);if(A!==null){var U=xr();In(A,e,r,U),l_(A,t,r)}}c_(e,r)}function s_(e){var t=e.alternate;return e===Nt||t!==null&&t===Nt}function u_(e,t){kl=Cd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function l_(e,t,n){if(Vv(n)){var r=t.lanes;r=Qv(r,e.pendingLanes);var o=at(r,n);t.lanes=o,Sp(e,o)}}function c_(e,t,n){Zf(e,t)}var Bd={readContext:En,useCallback:br,useContext:br,useEffect:br,useImperativeHandle:br,useInsertionEffect:br,useLayoutEffect:br,useMemo:br,useReducer:br,useRef:br,useState:br,useDebugValue:br,useDeferredValue:br,useTransition:br,useMutableSource:br,useSyncExternalStore:br,useId:br,unstable_isNewReconciler:mn},d_=null,f_=null,p_=null,m_=null,co=null,$a=null,$d=null;{var gh=function(){p("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},Ye=function(){p("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks")};d_={readContext:function(e){return En(e)},useCallback:function(e,t){return ne="useCallback",At(),mu(t),ph(e,t)},useContext:function(e){return ne="useContext",At(),En(e)},useEffect:function(e,t){return ne="useEffect",At(),mu(t),kd(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",At(),mu(n),fh(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",At(),mu(t),ch(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",At(),mu(t),dh(e,t)},useMemo:function(e,t){ne="useMemo",At(),mu(t);var n=Te.current;Te.current=co;try{return mh(e,t)}finally{Te.current=n}},useReducer:function(e,t,n){ne="useReducer",At();var r=Te.current;Te.current=co;try{return rh(e,t,n)}finally{Te.current=r}},useRef:function(e){return ne="useRef",At(),lh(e)},useState:function(e){ne="useState",At();var t=Te.current;Te.current=co;try{return xd(e)}finally{Te.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",At(),void 0},useDeferredValue:function(e){return ne="useDeferredValue",At(),hh(e)},useTransition:function(){return ne="useTransition",At(),vh()},useMutableSource:function(e,t,n){return ne="useMutableSource",At(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",At(),ih(e,t,n)},useId:function(){return ne="useId",At(),yh()},unstable_isNewReconciler:mn},f_={readContext:function(e){return En(e)},useCallback:function(e,t){return ne="useCallback",ge(),ph(e,t)},useContext:function(e){return ne="useContext",ge(),En(e)},useEffect:function(e,t){return ne="useEffect",ge(),kd(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",ge(),fh(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",ge(),ch(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",ge(),dh(e,t)},useMemo:function(e,t){ne="useMemo",ge();var n=Te.current;Te.current=co;try{return mh(e,t)}finally{Te.current=n}},useReducer:function(e,t,n){ne="useReducer",ge();var r=Te.current;Te.current=co;try{return rh(e,t,n)}finally{Te.current=r}},useRef:function(e){return ne="useRef",ge(),lh(e)},useState:function(e){ne="useState",ge();var t=Te.current;Te.current=co;try{return xd(e)}finally{Te.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",ge(),void 0},useDeferredValue:function(e){return ne="useDeferredValue",ge(),hh(e)},useTransition:function(){return ne="useTransition",ge(),vh()},useMutableSource:function(e,t,n){return ne="useMutableSource",ge(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",ge(),ih(e,t,n)},useId:function(){return ne="useId",ge(),yh()},unstable_isNewReconciler:mn},p_={readContext:function(e){return En(e)},useCallback:function(e,t){return ne="useCallback",ge(),jd(e,t)},useContext:function(e){return ne="useContext",ge(),En(e)},useEffect:function(e,t){return ne="useEffect",ge(),Ll(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",ge(),Hd(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",ge(),Id(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",ge(),Ud(e,t)},useMemo:function(e,t){ne="useMemo",ge();var n=Te.current;Te.current=$a;try{return zd(e,t)}finally{Te.current=n}},useReducer:function(e,t,n){ne="useReducer",ge();var r=Te.current;Te.current=$a;try{return ah(e,t,n)}finally{Te.current=r}},useRef:function(e){return ne="useRef",ge(),Fd()},useState:function(e){ne="useState",ge();var t=Te.current;Te.current=$a;try{return sh(e)}finally{Te.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",ge(),Ld()},useDeferredValue:function(e){return ne="useDeferredValue",ge(),t_(e)},useTransition:function(){return ne="useTransition",ge(),a_()},useMutableSource:function(e,t,n){return ne="useMutableSource",ge(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",ge(),Pd(e,t)},useId:function(){return ne="useId",ge(),Xd()},unstable_isNewReconciler:mn},m_={readContext:function(e){return En(e)},useCallback:function(e,t){return ne="useCallback",ge(),jd(e,t)},useContext:function(e){return ne="useContext",ge(),En(e)},useEffect:function(e,t){return ne="useEffect",ge(),Ll(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",ge(),Hd(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",ge(),Id(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",ge(),Ud(e,t)},useMemo:function(e,t){ne="useMemo",ge();var n=Te.current;Te.current=$d;try{return zd(e,t)}finally{Te.current=n}},useReducer:function(e,t,n){ne="useReducer",ge();var r=Te.current;Te.current=$d;try{return oh(e,t,n)}finally{Te.current=r}},useRef:function(e){return ne="useRef",ge(),Fd()},useState:function(e){ne="useState",ge();var t=Te.current;Te.current=$d;try{return uh(e)}finally{Te.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",ge(),Ld()},useDeferredValue:function(e){return ne="useDeferredValue",ge(),n_(e)},useTransition:function(){return ne="useTransition",ge(),o_()},useMutableSource:function(e,t,n){return ne="useMutableSource",ge(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",ge(),Pd(e,t)},useId:function(){return ne="useId",ge(),Xd()},unstable_isNewReconciler:mn},co={readContext:function(e){return gh(),En(e)},useCallback:function(e,t){return ne="useCallback",Ye(),At(),ph(e,t)},useContext:function(e){return ne="useContext",Ye(),At(),En(e)},useEffect:function(e,t){return ne="useEffect",Ye(),At(),kd(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",Ye(),At(),fh(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",Ye(),At(),ch(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",Ye(),At(),dh(e,t)},useMemo:function(e,t){ne="useMemo",Ye(),At();var n=Te.current;Te.current=co;try{return mh(e,t)}finally{Te.current=n}},useReducer:function(e,t,n){ne="useReducer",Ye(),At();var r=Te.current;Te.current=co;try{return rh(e,t,n)}finally{Te.current=r}},useRef:function(e){return ne="useRef",Ye(),At(),lh(e)},useState:function(e){ne="useState",Ye(),At();var t=Te.current;Te.current=co;try{return xd(e)}finally{Te.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",Ye(),At(),void 0},useDeferredValue:function(e){return ne="useDeferredValue",Ye(),At(),hh(e)},useTransition:function(){return ne="useTransition",Ye(),At(),vh()},useMutableSource:function(e,t,n){return ne="useMutableSource",Ye(),At(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",Ye(),At(),ih(e,t,n)},useId:function(){return ne="useId",Ye(),At(),yh()},unstable_isNewReconciler:mn},$a={readContext:function(e){return gh(),En(e)},useCallback:function(e,t){return ne="useCallback",Ye(),ge(),jd(e,t)},useContext:function(e){return ne="useContext",Ye(),ge(),En(e)},useEffect:function(e,t){return ne="useEffect",Ye(),ge(),Ll(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",Ye(),ge(),Hd(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",Ye(),ge(),Id(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",Ye(),ge(),Ud(e,t)},useMemo:function(e,t){ne="useMemo",Ye(),ge();var n=Te.current;Te.current=$a;try{return zd(e,t)}finally{Te.current=n}},useReducer:function(e,t,n){ne="useReducer",Ye(),ge();var r=Te.current;Te.current=$a;try{return ah(e,t,n)}finally{Te.current=r}},useRef:function(e){return ne="useRef",Ye(),ge(),Fd()},useState:function(e){ne="useState",Ye(),ge();var t=Te.current;Te.current=$a;try{return sh(e)}finally{Te.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",Ye(),ge(),Ld()},useDeferredValue:function(e){return ne="useDeferredValue",Ye(),ge(),t_(e)},useTransition:function(){return ne="useTransition",Ye(),ge(),a_()},useMutableSource:function(e,t,n){return ne="useMutableSource",Ye(),ge(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",Ye(),ge(),Pd(e,t)},useId:function(){return ne="useId",Ye(),ge(),Xd()},unstable_isNewReconciler:mn},$d={readContext:function(e){return gh(),En(e)},useCallback:function(e,t){return ne="useCallback",Ye(),ge(),jd(e,t)},useContext:function(e){return ne="useContext",Ye(),ge(),En(e)},useEffect:function(e,t){return ne="useEffect",Ye(),ge(),Ll(e,t)},useImperativeHandle:function(e,t,n){return ne="useImperativeHandle",Ye(),ge(),Hd(e,t,n)},useInsertionEffect:function(e,t){return ne="useInsertionEffect",Ye(),ge(),Id(e,t)},useLayoutEffect:function(e,t){return ne="useLayoutEffect",Ye(),ge(),Ud(e,t)},useMemo:function(e,t){ne="useMemo",Ye(),ge();var n=Te.current;Te.current=$a;try{return zd(e,t)}finally{Te.current=n}},useReducer:function(e,t,n){ne="useReducer",Ye(),ge();var r=Te.current;Te.current=$a;try{return oh(e,t,n)}finally{Te.current=r}},useRef:function(e){return ne="useRef",Ye(),ge(),Fd()},useState:function(e){ne="useState",Ye(),ge();var t=Te.current;Te.current=$a;try{return uh(e)}finally{Te.current=t}},useDebugValue:function(e,t){return ne="useDebugValue",Ye(),ge(),Ld()},useDeferredValue:function(e){return ne="useDeferredValue",Ye(),ge(),n_(e)},useTransition:function(){return ne="useTransition",Ye(),ge(),o_()},useMutableSource:function(e,t,n){return ne="useMutableSource",Ye(),ge(),void 0},useSyncExternalStore:function(e,t,n){return ne="useSyncExternalStore",Ye(),ge(),Pd(e,t)},useId:function(){return ne="useId",Ye(),ge(),Xd()},unstable_isNewReconciler:mn}}var vi=g.unstable_now,h_=0,Vd=-1,jl=-1,Wd=-1,_h=!1,Qd=!1;function v_(){return _h}function bO(){Qd=!0}function TO(){_h=!1,Qd=!1}function wO(){_h=Qd,Qd=!1}function y_(){return h_}function g_(){h_=vi()}function Eh(e){jl=vi(),e.actualStartTime<0&&(e.actualStartTime=vi())}function __(e){jl=-1}function Yd(e,t){if(jl>=0){var n=vi()-jl;e.actualDuration+=n,t&&(e.selfBaseDuration=n),jl=-1}}function fo(e){if(Vd>=0){var t=vi()-Vd;Vd=-1;for(var n=e.return;n!==null;){switch(n.tag){case Z:var r=n.stateNode;r.effectDuration+=t;return;case ot:var o=n.stateNode;o.effectDuration+=t;return}n=n.return}}}function bh(e){if(Wd>=0){var t=vi()-Wd;Wd=-1;for(var n=e.return;n!==null;){switch(n.tag){case Z:var r=n.stateNode;r!==null&&(r.passiveEffectDuration+=t);return;case ot:var o=n.stateNode;o!==null&&(o.passiveEffectDuration+=t);return}n=n.return}}}function po(){Vd=vi()}function Th(){Wd=vi()}function wh(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function ms(e,t){return{value:e,source:t,stack:Ai(t),digest:null}}function Sh(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function SO(e,t){return!0}function Rh(e,t){try{var n=SO(e,t);if(n===!1)return;var r=t.value,o=t.source,c=t.stack,d=c!==null?c:"";if(r!=null&&r._suppressLogging){if(e.tag===X)return;console.error(r)}var y=o?et(o):null,E=y?"The above error occurred in the <"+y+"> component:":"The above error occurred in one of your React components:",S;if(e.tag===Z)S=`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;else{var A=et(e)||"Anonymous";S="React will try to recreate this component tree from scratch "+("using the error boundary you provided, "+A+".")}var U=E+`
`+d+`

`+(""+S);console.error(U)}catch(I){setTimeout(function(){throw I})}}var RO=typeof WeakMap=="function"?WeakMap:Map;function E_(e,t,n){var r=Io(Gt,n);r.tag=Rm,r.payload={element:null};var o=t.value;return r.callback=function(){yD(o),Rh(e,t)},r}function Oh(e,t,n){var r=Io(Gt,n);r.tag=Rm;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var c=t.value;r.payload=function(){return o(c)},r.callback=function(){PE(e),Rh(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){PE(e),Rh(e,t),typeof o!="function"&&hD(this);var E=t.value,S=t.stack;this.componentDidCatch(E,{componentStack:S!==null?S:""}),typeof o!="function"&&(ua(e.lanes,Qe)||p("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",et(e)||"Unknown"))}),r}function b_(e,t,n){var r=e.pingCache,o;if(r===null?(r=e.pingCache=new RO,o=new Set,r.set(t,o)):(o=r.get(t),o===void 0&&(o=new Set,r.set(t,o))),!o.has(n)){o.add(n);var c=gD.bind(null,e,t,n);Ua&&nc(e,n),t.then(c,c)}}function OO(e,t,n,r){var o=e.updateQueue;if(o===null){var c=new Set;c.add(n),e.updateQueue=c}else o.add(n)}function MO(e,t){var n=e.tag;if((e.mode&pt)===$e&&(n===P||n===Pe||n===Ge)){var r=e.alternate;r?(e.updateQueue=r.updateQueue,e.memoizedState=r.memoizedState,e.lanes=r.lanes):(e.updateQueue=null,e.memoizedState=null)}}function T_(e){var t=e;do{if(t.tag===Ie&&dO(t))return t;t=t.return}while(t!==null);return null}function w_(e,t,n,r,o){if((e.mode&pt)===$e){if(e===t)e.flags|=Kn;else{if(e.flags|=ye,n.flags|=Vi,n.flags&=~(Zo|ei),n.tag===X){var c=n.alternate;if(c===null)n.tag=Un;else{var d=Io(Gt,Qe);d.tag=gd,fi(n,d,Qe)}}n.lanes=at(n.lanes,Qe)}return e}return e.flags|=Kn,e.lanes=o,e}function DO(e,t,n,r,o){if(n.flags|=ei,Ua&&nc(e,o),r!==null&&typeof r=="object"&&typeof r.then=="function"){var c=r;MO(n),Zn()&&n.mode&pt&&pg();var d=T_(t);if(d!==null){d.flags&=~zt,w_(d,t,n,e,o),d.mode&pt&&b_(e,c,o),OO(d,e,c);return}else{if(!Kb(o)){b_(e,c,o),ov();return}var y=new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");r=y}}else if(Zn()&&n.mode&pt){pg();var E=T_(t);if(E!==null){(E.flags&Kn)===te&&(E.flags|=zt),w_(E,t,n,e,o),gm(ms(r,n));return}}r=ms(r,n),sD(r);var S=t;do{switch(S.tag){case Z:{var A=r;S.flags|=Kn;var U=Yu(o);S.lanes=at(S.lanes,U);var I=E_(S,A,U);Dm(S,I);return}case X:var W=r,Q=S.type,K=S.stateNode;if((S.flags&ye)===te&&(typeof Q.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&!TE(K))){S.flags|=Kn;var Se=Yu(o);S.lanes=at(S.lanes,Se);var ze=Oh(S,W,Se);Dm(S,ze);return}break}S=S.return}while(S!==null)}function AO(){return null}var zl=s.ReactCurrentOwner,Va=!1,Mh,Xl,Dh,Ah,Ch,hs,Ph,Gd;Mh={},Xl={},Dh={},Ah={},Ch={},hs=!1,Ph={},Gd={};function Cr(e,t,n,r){e===null?t.child=zg(t,null,n,r):t.child=lu(t,e.child,n,r)}function CO(e,t,n,r){t.child=lu(t,e.child,null,r),t.child=lu(t,null,n,r)}function S_(e,t,n,r,o){if(t.type!==t.elementType){var c=n.propTypes;c&&La(c,r,"prop",bt(n))}var d=n.render,y=t.ref,E,S;uu(t,o),Xu(t);{if(zl.current=t,Dr(!0),E=hu(e,t,d,r,y,o),S=vu(),t.mode&_n){$n(!0);try{E=hu(e,t,d,r,y,o),S=vu()}finally{$n(!1)}}Dr(!1)}return Xs(),e!==null&&!Va?(Wg(e,t,o),Uo(e,t,o)):(Zn()&&S&&fm(t),t.flags|=Le,Cr(e,t,E,o),t.child)}function R_(e,t,n,r,o){if(e===null){var c=n.type;if(kD(c)&&n.compare===null&&n.defaultProps===void 0){var d=c;return d=Su(c),t.tag=Ge,t.type=d,Nh(t,c),O_(e,t,d,r,o)}{var y=c.propTypes;y&&La(y,r,"prop",bt(c))}var E=vv(n.type,null,r,t,t.mode,o);return E.ref=t.ref,E.return=t,t.child=E,E}{var S=n.type,A=S.propTypes;A&&La(A,r,"prop",bt(S))}var U=e.child,I=jh(e,o);if(!I){var W=U.memoizedProps,Q=n.compare;if(Q=Q!==null?Q:ll,Q(W,r)&&e.ref===t.ref)return Uo(e,t,o)}t.flags|=Le;var K=Es(U,r);return K.ref=t.ref,K.return=t,t.child=K,K}function O_(e,t,n,r,o){if(t.type!==t.elementType){var c=t.elementType;if(c.$$typeof===lt){var d=c,y=d._payload,E=d._init;try{c=E(y)}catch{c=null}var S=c&&c.propTypes;S&&La(S,r,"prop",bt(c))}}if(e!==null){var A=e.memoizedProps;if(ll(A,r)&&e.ref===t.ref&&t.type===e.type)if(Va=!1,t.pendingProps=r=A,jh(e,o))(e.flags&Vi)!==te&&(Va=!0);else return t.lanes=e.lanes,Uo(e,t,o)}return xh(e,t,n,r,o)}function M_(e,t,n){var r=t.pendingProps,o=r.children,c=e!==null?e.memoizedState:null;if(r.mode==="hidden"||hn)if((t.mode&pt)===$e){var d={baseLanes:ue,cachePool:null,transitions:null};t.memoizedState=d,lf(t,n)}else if(ua(n,sa)){var U={baseLanes:ue,cachePool:null,transitions:null};t.memoizedState=U;var I=c!==null?c.baseLanes:n;lf(t,I)}else{var y=null,E;if(c!==null){var S=c.baseLanes;E=at(S,n)}else E=n;t.lanes=t.childLanes=sa;var A={baseLanes:E,cachePool:y,transitions:null};return t.memoizedState=A,t.updateQueue=null,lf(t,E),null}else{var W;c!==null?(W=at(c.baseLanes,n),t.memoizedState=null):W=n,lf(t,W)}return Cr(e,t,o,n),t.child}function PO(e,t,n){var r=t.pendingProps;return Cr(e,t,r,n),t.child}function xO(e,t,n){var r=t.pendingProps.children;return Cr(e,t,r,n),t.child}function FO(e,t,n){{t.flags|=Y;{var r=t.stateNode;r.effectDuration=0,r.passiveEffectDuration=0}}var o=t.pendingProps,c=o.children;return Cr(e,t,c,n),t.child}function D_(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=rn,t.flags|=Qi)}function xh(e,t,n,r,o){if(t.type!==t.elementType){var c=n.propTypes;c&&La(c,r,"prop",bt(n))}var d;{var y=nu(t,n,!0);d=ru(t,y)}var E,S;uu(t,o),Xu(t);{if(zl.current=t,Dr(!0),E=hu(e,t,n,r,d,o),S=vu(),t.mode&_n){$n(!0);try{E=hu(e,t,n,r,d,o),S=vu()}finally{$n(!1)}}Dr(!1)}return Xs(),e!==null&&!Va?(Wg(e,t,o),Uo(e,t,o)):(Zn()&&S&&fm(t),t.flags|=Le,Cr(e,t,E,o),t.child)}function A_(e,t,n,r,o){{switch(qD(t)){case!1:{var c=t.stateNode,d=t.type,y=new d(t.memoizedProps,c.context),E=y.state;c.updater.enqueueSetState(c,E,null);break}case!0:{t.flags|=ye,t.flags|=Kn;var S=new Error("Simulated error coming from DevTools"),A=Yu(o);t.lanes=at(t.lanes,A);var U=Oh(t,ms(S,t),A);Dm(t,U);break}}if(t.type!==t.elementType){var I=n.propTypes;I&&La(I,r,"prop",bt(n))}}var W;so(n)?(W=!0,sd(t)):W=!1,uu(t,o);var Q=t.stateNode,K;Q===null?(Kd(e,t),Ig(t,n,r),jm(t,n,r,o),K=!0):e===null?K=oO(t,n,r,o):K=iO(e,t,n,r,o);var Se=Fh(e,t,n,K,W,o);{var ze=t.stateNode;K&&ze.props!==r&&(hs||p("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",et(t)||"a component"),hs=!0)}return Se}function Fh(e,t,n,r,o,c){D_(e,t);var d=(t.flags&ye)!==te;if(!r&&!d)return o&&lg(t,n,!1),Uo(e,t,c);var y=t.stateNode;zl.current=t;var E;if(d&&typeof n.getDerivedStateFromError!="function")E=null,__();else{Xu(t);{if(Dr(!0),E=y.render(),t.mode&_n){$n(!0);try{y.render()}finally{$n(!1)}}Dr(!1)}Xs()}return t.flags|=Le,e!==null&&d?CO(e,t,E,c):Cr(e,t,E,c),t.memoizedState=y.state,o&&lg(t,n,!0),t.child}function C_(e){var t=e.stateNode;t.pendingContext?sg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sg(e,t.context,!1),Wm(e,t.containerInfo)}function NO(e,t,n){if(C_(t),e===null)throw new Error("Should have a current fiber. This is a bug in React.");var r=t.pendingProps,o=t.memoizedState,c=o.element;Dg(e,t),Td(t,r,null,n);var d=t.memoizedState;t.stateNode;var y=d.element;if(o.isDehydrated){var E={element:y,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},S=t.updateQueue;if(S.baseState=E,t.memoizedState=E,t.flags&zt){var A=ms(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."),t);return P_(e,t,y,n,A)}else if(y!==c){var U=ms(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),t);return P_(e,t,y,n,U)}else{HR(t);var I=zg(t,null,y,n);t.child=I;for(var W=I;W;)W.flags=W.flags&~Ae|Xr,W=W.sibling}}else{if(iu(),y===c)return Uo(e,t,n);Cr(e,t,y,n)}return t.child}function P_(e,t,n,r,o){return iu(),gm(o),t.flags|=zt,Cr(e,t,n,r),t.child}function kO(e,t,n){Bg(t),e===null&&ym(t);var r=t.type,o=t.pendingProps,c=e!==null?e.memoizedProps:null,d=o.children,y=Jp(r,o);return y?d=null:c!==null&&Jp(r,c)&&(t.flags|=Ue),D_(e,t),Cr(e,t,d,n),t.child}function IO(e,t){return e===null&&ym(t),null}function UO(e,t,n,r){Kd(e,t);var o=t.pendingProps,c=n,d=c._payload,y=c._init,E=y(d);t.type=E;var S=t.tag=ID(E),A=Xa(E,o),U;switch(S){case P:return Nh(t,E),t.type=E=Su(E),U=xh(null,t,E,A,r),U;case X:return t.type=E=cv(E),U=A_(null,t,E,A,r),U;case Pe:return t.type=E=dv(E),U=S_(null,t,E,A,r),U;case It:{if(t.type!==t.elementType){var I=E.propTypes;I&&La(I,A,"prop",bt(E))}return U=R_(null,t,E,Xa(E.type,A),r),U}}var W="";throw E!==null&&typeof E=="object"&&E.$$typeof===lt&&(W=" Did you wrap a component in React.lazy() more than once?"),new Error("Element type is invalid. Received a promise that resolves to: "+E+". "+("Lazy element type must resolve to a class or function."+W))}function HO(e,t,n,r,o){Kd(e,t),t.tag=X;var c;return so(n)?(c=!0,sd(t)):c=!1,uu(t,o),Ig(t,n,r),jm(t,n,r,o),Fh(null,t,n,!0,c,o)}function LO(e,t,n,r){Kd(e,t);var o=t.pendingProps,c;{var d=nu(t,n,!1);c=ru(t,d)}uu(t,r);var y,E;Xu(t);{if(n.prototype&&typeof n.prototype.render=="function"){var S=bt(n)||"Unknown";Mh[S]||(p("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",S,S),Mh[S]=!0)}t.mode&_n&&za.recordLegacyContextWarning(t,null),Dr(!0),zl.current=t,y=hu(null,t,n,o,c,r),E=vu(),Dr(!1)}if(Xs(),t.flags|=Le,typeof y=="object"&&y!==null&&typeof y.render=="function"&&y.$$typeof===void 0){var A=bt(n)||"Unknown";Xl[A]||(p("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",A,A,A),Xl[A]=!0)}if(typeof y=="object"&&y!==null&&typeof y.render=="function"&&y.$$typeof===void 0){{var U=bt(n)||"Unknown";Xl[U]||(p("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",U,U,U),Xl[U]=!0)}t.tag=X,t.memoizedState=null,t.updateQueue=null;var I=!1;return so(n)?(I=!0,sd(t)):I=!1,t.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,Mm(t),kg(t,y),jm(t,n,o,r),Fh(null,t,n,!0,I,r)}else{if(t.tag=P,t.mode&_n){$n(!0);try{y=hu(null,t,n,o,c,r),E=vu()}finally{$n(!1)}}return Zn()&&E&&fm(t),Cr(null,t,y,r),Nh(t,n),t.child}}function Nh(e,t){{if(t&&t.childContextTypes&&p("%s(...): childContextTypes cannot be defined on a function component.",t.displayName||t.name||"Component"),e.ref!==null){var n="",r=qa();r&&(n+=`

Check the render method of \``+r+"`.");var o=r||"",c=e._debugSource;c&&(o=c.fileName+":"+c.lineNumber),Ch[o]||(Ch[o]=!0,p("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",n))}if(typeof t.getDerivedStateFromProps=="function"){var d=bt(t)||"Unknown";Ah[d]||(p("%s: Function components do not support getDerivedStateFromProps.",d),Ah[d]=!0)}if(typeof t.contextType=="object"&&t.contextType!==null){var y=bt(t)||"Unknown";Dh[y]||(p("%s: Function components do not support contextType.",y),Dh[y]=!0)}}}var kh={dehydrated:null,treeContext:null,retryLane:Vn};function Ih(e){return{baseLanes:e,cachePool:AO(),transitions:null}}function jO(e,t){var n=null;return{baseLanes:at(e.baseLanes,t),cachePool:n,transitions:e.transitions}}function zO(e,t,n,r){if(t!==null){var o=t.memoizedState;if(o===null)return!1}return Gm(e,Fl)}function XO(e,t){return Cc(e.childLanes,t)}function x_(e,t,n){var r=t.pendingProps;KD(t)&&(t.flags|=ye);var o=Ba.current,c=!1,d=(t.flags&ye)!==te;if(d||zO(o,e)?(c=!0,t.flags&=~ye):(e===null||e.memoizedState!==null)&&(o=cO(o,Vg)),o=du(o),mi(t,o),e===null){ym(t);var y=t.memoizedState;if(y!==null){var E=y.dehydrated;if(E!==null)return QO(t,E)}var S=r.children,A=r.fallback;if(c){var U=BO(t,S,A,n),I=t.child;return I.memoizedState=Ih(n),t.memoizedState=kh,U}else return Uh(t,S)}else{var W=e.memoizedState;if(W!==null){var Q=W.dehydrated;if(Q!==null)return YO(e,t,d,r,Q,W,n)}if(c){var K=r.fallback,Se=r.children,ze=VO(e,t,Se,K,n),Ce=t.child,ht=e.child.memoizedState;return Ce.memoizedState=ht===null?Ih(n):jO(ht,n),Ce.childLanes=XO(e,n),t.memoizedState=kh,ze}else{var ft=r.children,j=$O(e,t,ft,n);return t.memoizedState=null,j}}}function Uh(e,t,n){var r=e.mode,o={mode:"visible",children:t},c=Hh(o,r);return c.return=e,e.child=c,c}function BO(e,t,n,r){var o=e.mode,c=e.child,d={mode:"hidden",children:t},y,E;return(o&pt)===$e&&c!==null?(y=c,y.childLanes=ue,y.pendingProps=d,e.mode&Ft&&(y.actualDuration=0,y.actualStartTime=-1,y.selfBaseDuration=0,y.treeBaseDuration=0),E=Ti(n,o,r,null)):(y=Hh(d,o),E=Ti(n,o,r,null)),y.return=e,E.return=e,y.sibling=E,e.child=y,E}function Hh(e,t,n){return FE(e,t,ue,null)}function F_(e,t){return Es(e,t)}function $O(e,t,n,r){var o=e.child,c=o.sibling,d=F_(o,{mode:"visible",children:n});if((t.mode&pt)===$e&&(d.lanes=r),d.return=t,d.sibling=null,c!==null){var y=t.deletions;y===null?(t.deletions=[c],t.flags|=he):y.push(c)}return t.child=d,d}function VO(e,t,n,r,o){var c=t.mode,d=e.child,y=d.sibling,E={mode:"hidden",children:n},S;if((c&pt)===$e&&t.child!==d){var A=t.child;S=A,S.childLanes=ue,S.pendingProps=E,t.mode&Ft&&(S.actualDuration=0,S.actualStartTime=-1,S.selfBaseDuration=d.selfBaseDuration,S.treeBaseDuration=d.treeBaseDuration),t.deletions=null}else S=F_(d,E),S.subtreeFlags=d.subtreeFlags&Mo;var U;return y!==null?U=Es(y,r):(U=Ti(r,c,o,null),U.flags|=Ae),U.return=t,S.return=t,S.sibling=U,t.child=S,U}function qd(e,t,n,r){r!==null&&gm(r),lu(t,e.child,null,n);var o=t.pendingProps,c=o.children,d=Uh(t,c);return d.flags|=Ae,t.memoizedState=null,d}function WO(e,t,n,r,o){var c=t.mode,d={mode:"visible",children:n},y=Hh(d,c),E=Ti(r,c,o,null);return E.flags|=Ae,y.return=t,E.return=t,y.sibling=E,t.child=y,(t.mode&pt)!==$e&&lu(t,e.child,null,o),E}function QO(e,t,n){return(e.mode&pt)===$e?(p("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."),e.lanes=Qe):nm(t)?e.lanes=Ji:e.lanes=sa,null}function YO(e,t,n,r,o,c,d){if(n)if(t.flags&zt){t.flags&=~zt;var j=Sh(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));return qd(e,t,d,j)}else{if(t.memoizedState!==null)return t.child=e.child,t.flags|=ye,null;var J=r.children,z=r.fallback,de=WO(e,t,J,z,d),Re=t.child;return Re.memoizedState=Ih(d),t.memoizedState=kh,de}else{if(IR(),(t.mode&pt)===$e)return qd(e,t,d,null);if(nm(o)){var y,E,S;{var A=ZS(o);y=A.digest,E=A.message,S=A.stack}var U;E?U=new Error(E):U=new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");var I=Sh(U,y,S);return qd(e,t,d,I)}var W=ua(d,e.childLanes);if(Va||W){var Q=uf();if(Q!==null){var K=oT(Q,d);if(K!==Vn&&K!==c.retryLane){c.retryLane=K;var Se=Gt;$r(e,K),In(Q,e,K,Se)}}ov();var ze=Sh(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));return qd(e,t,d,ze)}else if(tg(o)){t.flags|=ye,t.child=e.child;var Ce=_D.bind(null,e);return eR(o,Ce),null}else{LR(t,o,c.treeContext);var ht=r.children,ft=Uh(t,ht);return ft.flags|=Xr,ft}}}function N_(e,t,n){e.lanes=at(e.lanes,t);var r=e.alternate;r!==null&&(r.lanes=at(r.lanes,t)),wm(e.return,t,n)}function GO(e,t,n){for(var r=t;r!==null;){if(r.tag===Ie){var o=r.memoizedState;o!==null&&N_(r,n,e)}else if(r.tag===Ht)N_(r,n,e);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)return;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function qO(e){for(var t=e,n=null;t!==null;){var r=t.alternate;r!==null&&Ad(r)===null&&(n=t),t=t.sibling}return n}function KO(e){if(e!==void 0&&e!=="forwards"&&e!=="backwards"&&e!=="together"&&!Ph[e])if(Ph[e]=!0,typeof e=="string")switch(e.toLowerCase()){case"together":case"forwards":case"backwards":{p('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',e,e.toLowerCase());break}case"forward":case"backward":{p('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',e,e.toLowerCase());break}default:p('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e);break}else p('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}function JO(e,t){e!==void 0&&!Gd[e]&&(e!=="collapsed"&&e!=="hidden"?(Gd[e]=!0,p('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',e)):t!=="forwards"&&t!=="backwards"&&(Gd[e]=!0,p('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',e)))}function k_(e,t){{var n=Tt(e),r=!n&&typeof Ca(e)=="function";if(n||r){var o=n?"array":"iterable";return p("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,t,o),!1}}return!0}function ZO(e,t){if((t==="forwards"||t==="backwards")&&e!==void 0&&e!==null&&e!==!1)if(Tt(e)){for(var n=0;n<e.length;n++)if(!k_(e[n],n))return}else{var r=Ca(e);if(typeof r=="function"){var o=r.call(e);if(o)for(var c=o.next(),d=0;!c.done;c=o.next()){if(!k_(c.value,d))return;d++}}else p('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',t)}}function Lh(e,t,n,r,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=n,c.tailMode=o)}function I_(e,t,n){var r=t.pendingProps,o=r.revealOrder,c=r.tail,d=r.children;KO(o),JO(c,o),ZO(d,o),Cr(e,t,d,n);var y=Ba.current,E=Gm(y,Fl);if(E)y=qm(y,Fl),t.flags|=ye;else{var S=e!==null&&(e.flags&ye)!==te;S&&GO(t,t.child,n),y=du(y)}if(mi(t,y),(t.mode&pt)===$e)t.memoizedState=null;else switch(o){case"forwards":{var A=qO(t.child),U;A===null?(U=t.child,t.child=null):(U=A.sibling,A.sibling=null),Lh(t,!1,U,A,c);break}case"backwards":{var I=null,W=t.child;for(t.child=null;W!==null;){var Q=W.alternate;if(Q!==null&&Ad(Q)===null){t.child=W;break}var K=W.sibling;W.sibling=I,I=W,W=K}Lh(t,!0,I,null,c);break}case"together":{Lh(t,!1,null,null,void 0);break}default:t.memoizedState=null}return t.child}function eM(e,t,n){Wm(t,t.stateNode.containerInfo);var r=t.pendingProps;return e===null?t.child=lu(t,null,r,n):Cr(e,t,r,n),t.child}var U_=!1;function tM(e,t,n){var r=t.type,o=r._context,c=t.pendingProps,d=t.memoizedProps,y=c.value;{"value"in c||U_||(U_=!0,p("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));var E=t.type.propTypes;E&&La(E,c,"prop","Context.Provider")}if(Sg(t,o,y),d!==null){var S=d.value;if(da(S,y)){if(d.children===c.children&&!od())return Uo(e,t,n)}else GR(t,o,n)}var A=c.children;return Cr(e,t,A,n),t.child}var H_=!1;function nM(e,t,n){var r=t.type;r._context===void 0?r!==r.Consumer&&(H_||(H_=!0,p("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))):r=r._context;var o=t.pendingProps,c=o.children;typeof c!="function"&&p("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),uu(t,n);var d=En(r);Xu(t);var y;return zl.current=t,Dr(!0),y=c(d),Dr(!1),Xs(),t.flags|=Le,Cr(e,t,y,n),t.child}function Bl(){Va=!0}function Kd(e,t){(t.mode&pt)===$e&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=Ae)}function Uo(e,t,n){return e!==null&&(t.dependencies=e.dependencies),__(),tc(t.lanes),ua(n,t.childLanes)?(sO(e,t),t.child):null}function rM(e,t,n){{var r=t.return;if(r===null)throw new Error("Cannot swap the root fiber.");if(e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,t===r.child)r.child=n;else{var o=r.child;if(o===null)throw new Error("Expected parent to have a child.");for(;o.sibling!==t;)if(o=o.sibling,o===null)throw new Error("Expected to find the previous sibling.");o.sibling=n}var c=r.deletions;return c===null?(r.deletions=[e],r.flags|=he):c.push(e),n.flags|=Ae,n}}function jh(e,t){var n=e.lanes;return!!ua(n,t)}function aM(e,t,n){switch(t.tag){case Z:C_(t),t.stateNode,iu();break;case ae:Bg(t);break;case X:{var r=t.type;so(r)&&sd(t);break}case oe:Wm(t,t.stateNode.containerInfo);break;case We:{var o=t.memoizedProps.value,c=t.type._context;Sg(t,c,o);break}case ot:{var d=ua(n,t.childLanes);d&&(t.flags|=Y);{var y=t.stateNode;y.effectDuration=0,y.passiveEffectDuration=0}}break;case Ie:{var E=t.memoizedState;if(E!==null){if(E.dehydrated!==null)return mi(t,du(Ba.current)),t.flags|=ye,null;var S=t.child,A=S.childLanes;if(ua(n,A))return x_(e,t,n);mi(t,du(Ba.current));var U=Uo(e,t,n);return U!==null?U.sibling:null}else mi(t,du(Ba.current));break}case Ht:{var I=(e.flags&ye)!==te,W=ua(n,t.childLanes);if(I){if(W)return I_(e,t,n);t.flags|=ye}var Q=t.memoizedState;if(Q!==null&&(Q.rendering=null,Q.tail=null,Q.lastEffect=null),mi(t,Ba.current),W)break;return null}case it:case yt:return t.lanes=ue,M_(e,t,n)}return Uo(e,t,n)}function L_(e,t,n){if(t._debugNeedsRemount&&e!==null)return rM(e,t,vv(t.type,t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes));if(e!==null){var r=e.memoizedProps,o=t.pendingProps;if(r!==o||od()||t.type!==e.type)Va=!0;else{var c=jh(e,n);if(!c&&(t.flags&ye)===te)return Va=!1,aM(e,t,n);(e.flags&Vi)!==te?Va=!0:Va=!1}}else if(Va=!1,Zn()&&CR(t)){var d=t.index,y=PR();fg(t,y,d)}switch(t.lanes=ue,t.tag){case G:return LO(e,t,t.type,n);case sr:{var E=t.elementType;return UO(e,t,E,n)}case P:{var S=t.type,A=t.pendingProps,U=t.elementType===S?A:Xa(S,A);return xh(e,t,S,U,n)}case X:{var I=t.type,W=t.pendingProps,Q=t.elementType===I?W:Xa(I,W);return A_(e,t,I,Q,n)}case Z:return NO(e,t,n);case ae:return kO(e,t,n);case fe:return IO(e,t);case Ie:return x_(e,t,n);case oe:return eM(e,t,n);case Pe:{var K=t.type,Se=t.pendingProps,ze=t.elementType===K?Se:Xa(K,Se);return S_(e,t,K,ze,n)}case Ne:return PO(e,t,n);case ke:return xO(e,t,n);case ot:return FO(e,t,n);case We:return tM(e,t,n);case Oe:return nM(e,t,n);case It:{var Ce=t.type,ht=t.pendingProps,ft=Xa(Ce,ht);if(t.type!==t.elementType){var j=Ce.propTypes;j&&La(j,ft,"prop",bt(Ce))}return ft=Xa(Ce.type,ft),R_(e,t,Ce,ft,n)}case Ge:return O_(e,t,t.type,t.pendingProps,n);case Un:{var J=t.type,z=t.pendingProps,de=t.elementType===J?z:Xa(J,z);return HO(e,t,J,de,n)}case Ht:return I_(e,t,n);case Sr:break;case it:return M_(e,t,n)}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function yu(e){e.flags|=Y}function j_(e){e.flags|=rn,e.flags|=Qi}var z_,zh,X_,B_;z_=function(e,t,n,r){for(var o=t.child;o!==null;){if(o.tag===ae||o.tag===fe)MS(e,o.stateNode);else if(o.tag!==oe){if(o.child!==null){o.child.return=o,o=o.child;continue}}if(o===t)return;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},zh=function(e,t){},X_=function(e,t,n,r,o){var c=e.memoizedProps;if(c!==r){var d=t.stateNode,y=Qm(),E=AS(d,n,c,r,o,y);t.updateQueue=E,E&&yu(t)}},B_=function(e,t,n,r){n!==r&&yu(t)};function $l(e,t){if(!Zn())switch(e.tailMode){case"hidden":{for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break}case"collapsed":{for(var o=e.tail,c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?!t&&e.tail!==null?e.tail.sibling=null:e.tail=null:c.sibling=null;break}}}function tr(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=ue,r=te;if(t){if((e.mode&Ft)!==$e){for(var E=e.selfBaseDuration,S=e.child;S!==null;)n=at(n,at(S.lanes,S.childLanes)),r|=S.subtreeFlags&Mo,r|=S.flags&Mo,E+=S.treeBaseDuration,S=S.sibling;e.treeBaseDuration=E}else for(var A=e.child;A!==null;)n=at(n,at(A.lanes,A.childLanes)),r|=A.subtreeFlags&Mo,r|=A.flags&Mo,A.return=e,A=A.sibling;e.subtreeFlags|=r}else{if((e.mode&Ft)!==$e){for(var o=e.actualDuration,c=e.selfBaseDuration,d=e.child;d!==null;)n=at(n,at(d.lanes,d.childLanes)),r|=d.subtreeFlags,r|=d.flags,o+=d.actualDuration,c+=d.treeBaseDuration,d=d.sibling;e.actualDuration=o,e.treeBaseDuration=c}else for(var y=e.child;y!==null;)n=at(n,at(y.lanes,y.childLanes)),r|=y.subtreeFlags,r|=y.flags,y.return=e,y=y.sibling;e.subtreeFlags|=r}return e.childLanes=n,t}function oM(e,t,n){if($R()&&(t.mode&pt)!==$e&&(t.flags&ye)===te)return _g(t),iu(),t.flags|=zt|ei|Kn,!1;var r=fd(t);if(n!==null&&n.dehydrated!==null)if(e===null){if(!r)throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(XR(t),tr(t),(t.mode&Ft)!==$e){var o=n!==null;if(o){var c=t.child;c!==null&&(t.treeBaseDuration-=c.treeBaseDuration)}}return!1}else{if(iu(),(t.flags&ye)===te&&(t.memoizedState=null),t.flags|=Y,tr(t),(t.mode&Ft)!==$e){var d=n!==null;if(d){var y=t.child;y!==null&&(t.treeBaseDuration-=y.treeBaseDuration)}}return!1}else return Eg(),!0}function $_(e,t,n){var r=t.pendingProps;switch(pm(t),t.tag){case G:case sr:case Ge:case P:case Pe:case Ne:case ke:case ot:case Oe:case It:return tr(t),null;case X:{var o=t.type;return so(o)&&id(t),tr(t),null}case Z:{var c=t.stateNode;if(cu(t),lm(t),Jm(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),e===null||e.child===null){var d=fd(t);if(d)yu(t);else if(e!==null){var y=e.memoizedState;(!y.isDehydrated||(t.flags&zt)!==te)&&(t.flags|=fn,Eg())}}return zh(e,t),tr(t),null}case ae:{Ym(t);var E=Xg(),S=t.type;if(e!==null&&t.stateNode!=null)X_(e,t,S,r,E),e.ref!==t.ref&&j_(t);else{if(!r){if(t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return tr(t),null}var A=Qm(),U=fd(t);if(U)jR(t,E,A)&&yu(t);else{var I=OS(S,r,E,A,t);z_(I,t,!1,!1),t.stateNode=I,DS(I,S,r,E)&&yu(t)}t.ref!==null&&j_(t)}return tr(t),null}case fe:{var W=r;if(e&&t.stateNode!=null){var Q=e.memoizedProps;B_(e,t,Q,W)}else{if(typeof W!="string"&&t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var K=Xg(),Se=Qm(),ze=fd(t);ze?zR(t)&&yu(t):t.stateNode=CS(W,K,Se,t)}return tr(t),null}case Ie:{fu(t);var Ce=t.memoizedState;if(e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){var ht=oM(e,t,Ce);if(!ht)return t.flags&Kn?t:null}if((t.flags&ye)!==te)return t.lanes=n,(t.mode&Ft)!==$e&&wh(t),t;var ft=Ce!==null,j=e!==null&&e.memoizedState!==null;if(ft!==j&&ft){var J=t.child;if(J.flags|=yr,(t.mode&pt)!==$e){var z=e===null&&(t.memoizedProps.unstable_avoidThisFallback!==!0||!ur);z||Gm(Ba.current,Vg)?iD():ov()}}var de=t.updateQueue;if(de!==null&&(t.flags|=Y),tr(t),(t.mode&Ft)!==$e&&ft){var Re=t.child;Re!==null&&(t.treeBaseDuration-=Re.treeBaseDuration)}return null}case oe:return cu(t),zh(e,t),e===null&&wR(t.stateNode.containerInfo),tr(t),null;case We:var Ee=t.type._context;return Tm(Ee,t),tr(t),null;case Un:{var Ve=t.type;return so(Ve)&&id(t),tr(t),null}case Ht:{fu(t);var Ke=t.memoizedState;if(Ke===null)return tr(t),null;var kt=(t.flags&ye)!==te,wt=Ke.rendering;if(wt===null)if(kt)$l(Ke,!1);else{var pn=uD()&&(e===null||(e.flags&ye)===te);if(!pn)for(var St=t.child;St!==null;){var cn=Ad(St);if(cn!==null){kt=!0,t.flags|=ye,$l(Ke,!1);var Tr=cn.updateQueue;return Tr!==null&&(t.updateQueue=Tr,t.flags|=Y),t.subtreeFlags=te,uO(t,n),mi(t,qm(Ba.current,Fl)),t.child}St=St.sibling}Ke.tail!==null&&Bn()>dE()&&(t.flags|=ye,kt=!0,$l(Ke,!1),t.lanes=Xv)}else{if(!kt){var ir=Ad(wt);if(ir!==null){t.flags|=ye,kt=!0;var ma=ir.updateQueue;if(ma!==null&&(t.updateQueue=ma,t.flags|=Y),$l(Ke,!0),Ke.tail===null&&Ke.tailMode==="hidden"&&!wt.alternate&&!Zn())return tr(t),null}else Bn()*2-Ke.renderingStartTime>dE()&&n!==sa&&(t.flags|=ye,kt=!0,$l(Ke,!1),t.lanes=Xv)}if(Ke.isBackwards)wt.sibling=t.child,t.child=wt;else{var Fr=Ke.last;Fr!==null?Fr.sibling=wt:t.child=wt,Ke.last=wt}}if(Ke.tail!==null){var Nr=Ke.tail;Ke.rendering=Nr,Ke.tail=Nr.sibling,Ke.renderingStartTime=Bn(),Nr.sibling=null;var wr=Ba.current;return kt?wr=qm(wr,Fl):wr=du(wr),mi(t,wr),Nr}return tr(t),null}case Sr:break;case it:case yt:{av(t);var Xo=t.memoizedState,Ru=Xo!==null;if(e!==null){var ic=e.memoizedState,vo=ic!==null;vo!==Ru&&!hn&&(t.flags|=yr)}return!Ru||(t.mode&pt)===$e?tr(t):ua(ho,sa)&&(tr(t),t.subtreeFlags&(Ae|Y)&&(t.flags|=yr)),null}case en:return null;case tn:return null}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function iM(e,t,n){switch(pm(t),t.tag){case X:{var r=t.type;so(r)&&id(t);var o=t.flags;return o&Kn?(t.flags=o&~Kn|ye,(t.mode&Ft)!==$e&&wh(t),t):null}case Z:{t.stateNode,cu(t),lm(t),Jm();var c=t.flags;return(c&Kn)!==te&&(c&ye)===te?(t.flags=c&~Kn|ye,t):null}case ae:return Ym(t),null;case Ie:{fu(t);var d=t.memoizedState;if(d!==null&&d.dehydrated!==null){if(t.alternate===null)throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");iu()}var y=t.flags;return y&Kn?(t.flags=y&~Kn|ye,(t.mode&Ft)!==$e&&wh(t),t):null}case Ht:return fu(t),null;case oe:return cu(t),null;case We:var E=t.type._context;return Tm(E,t),null;case it:case yt:return av(t),null;case en:return null;default:return null}}function V_(e,t,n){switch(pm(t),t.tag){case X:{var r=t.type.childContextTypes;r!=null&&id(t);break}case Z:{t.stateNode,cu(t),lm(t),Jm();break}case ae:{Ym(t);break}case oe:cu(t);break;case Ie:fu(t);break;case Ht:fu(t);break;case We:var o=t.type._context;Tm(o,t);break;case it:case yt:av(t);break}}var W_=null;W_=new Set;var Jd=!1,nr=!1,sM=typeof WeakSet=="function"?WeakSet:Set,De=null,gu=null,_u=null;function uM(e){R(null,function(){throw e}),se()}var lM=function(e,t){if(t.props=e.memoizedProps,t.state=e.memoizedState,e.mode&Ft)try{po(),t.componentWillUnmount()}finally{fo(e)}else t.componentWillUnmount()};function Q_(e,t){try{yi(Cn,e)}catch(n){Bt(e,t,n)}}function Xh(e,t,n){try{lM(e,n)}catch(r){Bt(e,t,r)}}function cM(e,t,n){try{n.componentDidMount()}catch(r){Bt(e,t,r)}}function Y_(e,t){try{q_(e)}catch(n){Bt(e,t,n)}}function Eu(e,t){var n=e.ref;if(n!==null)if(typeof n=="function"){var r;try{if(Yr&&Gr&&e.mode&Ft)try{po(),r=n(null)}finally{fo(e)}else r=n(null)}catch(o){Bt(e,t,o)}typeof r=="function"&&p("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",et(e))}else n.current=null}function Zd(e,t,n){try{n()}catch(r){Bt(e,t,r)}}var G_=!1;function dM(e,t){SS(e.containerInfo),De=t,fM();var n=G_;return G_=!1,n}function fM(){for(;De!==null;){var e=De,t=e.child;(e.subtreeFlags&ju)!==te&&t!==null?(t.return=e,De=t):pM()}}function pM(){for(;De!==null;){var e=De;qt(e);try{mM(e)}catch(n){Bt(e,e.return,n)}gn();var t=e.sibling;if(t!==null){t.return=e.return,De=t;return}De=e.return}}function mM(e){var t=e.alternate,n=e.flags;if((n&fn)!==te){switch(qt(e),e.tag){case P:case Pe:case Ge:break;case X:{if(t!==null){var r=t.memoizedProps,o=t.memoizedState,c=e.stateNode;e.type===e.elementType&&!hs&&(c.props!==e.memoizedProps&&p("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",et(e)||"instance"),c.state!==e.memoizedState&&p("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",et(e)||"instance"));var d=c.getSnapshotBeforeUpdate(e.elementType===e.type?r:Xa(e.type,r),o);{var y=W_;d===void 0&&!y.has(e.type)&&(y.add(e.type),p("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",et(e)))}c.__reactInternalSnapshotBeforeUpdate=d}break}case Z:{{var E=e.stateNode;GS(E.containerInfo)}break}case ae:case fe:case oe:case Un:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}gn()}}function Wa(e,t,n){var r=t.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next,d=c;do{if((d.tag&e)===e){var y=d.destroy;d.destroy=void 0,y!==void 0&&((e&er)!==Vr?Cb(t):(e&Cn)!==Vr&&Uv(t),(e&uo)!==Vr&&rc(!0),Zd(t,n,y),(e&uo)!==Vr&&rc(!1),(e&er)!==Vr?Pb():(e&Cn)!==Vr&&Hv())}d=d.next}while(d!==c)}}function yi(e,t){var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next,c=o;do{if((c.tag&e)===e){(e&er)!==Vr?Db(t):(e&Cn)!==Vr&&xb(t);var d=c.create;(e&uo)!==Vr&&rc(!0),c.destroy=d(),(e&uo)!==Vr&&rc(!1),(e&er)!==Vr?Ab():(e&Cn)!==Vr&&Fb();{var y=c.destroy;if(y!==void 0&&typeof y!="function"){var E=void 0;(c.tag&Cn)!==te?E="useLayoutEffect":(c.tag&uo)!==te?E="useInsertionEffect":E="useEffect";var S=void 0;y===null?S=" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof y.then=="function"?S=`

It looks like you wrote `+E+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+E+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`:S=" You returned: "+y,p("%s must not return anything besides a function, which is used for clean-up.%s",E,S)}}}c=c.next}while(c!==o)}}function hM(e,t){if((t.flags&Y)!==te)switch(t.tag){case ot:{var n=t.stateNode.passiveEffectDuration,r=t.memoizedProps,o=r.id,c=r.onPostCommit,d=y_(),y=t.alternate===null?"mount":"update";v_()&&(y="nested-update"),typeof c=="function"&&c(o,y,n,d);var E=t.return;e:for(;E!==null;){switch(E.tag){case Z:var S=E.stateNode;S.passiveEffectDuration+=n;break e;case ot:var A=E.stateNode;A.passiveEffectDuration+=n;break e}E=E.return}break}}}function vM(e,t,n,r){if((n.flags&zu)!==te)switch(n.tag){case P:case Pe:case Ge:{if(!nr)if(n.mode&Ft)try{po(),yi(Cn|An,n)}finally{fo(n)}else yi(Cn|An,n);break}case X:{var o=n.stateNode;if(n.flags&Y&&!nr)if(t===null)if(n.type===n.elementType&&!hs&&(o.props!==n.memoizedProps&&p("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",et(n)||"instance"),o.state!==n.memoizedState&&p("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",et(n)||"instance")),n.mode&Ft)try{po(),o.componentDidMount()}finally{fo(n)}else o.componentDidMount();else{var c=n.elementType===n.type?t.memoizedProps:Xa(n.type,t.memoizedProps),d=t.memoizedState;if(n.type===n.elementType&&!hs&&(o.props!==n.memoizedProps&&p("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",et(n)||"instance"),o.state!==n.memoizedState&&p("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",et(n)||"instance")),n.mode&Ft)try{po(),o.componentDidUpdate(c,d,o.__reactInternalSnapshotBeforeUpdate)}finally{fo(n)}else o.componentDidUpdate(c,d,o.__reactInternalSnapshotBeforeUpdate)}var y=n.updateQueue;y!==null&&(n.type===n.elementType&&!hs&&(o.props!==n.memoizedProps&&p("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",et(n)||"instance"),o.state!==n.memoizedState&&p("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",et(n)||"instance")),Cg(n,y,o));break}case Z:{var E=n.updateQueue;if(E!==null){var S=null;if(n.child!==null)switch(n.child.tag){case ae:S=n.child.stateNode;break;case X:S=n.child.stateNode;break}Cg(n,E,S)}break}case ae:{var A=n.stateNode;if(t===null&&n.flags&Y){var U=n.type,I=n.memoizedProps;kS(A,U,I)}break}case fe:break;case oe:break;case ot:{{var W=n.memoizedProps,Q=W.onCommit,K=W.onRender,Se=n.stateNode.effectDuration,ze=y_(),Ce=t===null?"mount":"update";v_()&&(Ce="nested-update"),typeof K=="function"&&K(n.memoizedProps.id,Ce,n.actualDuration,n.treeBaseDuration,n.actualStartTime,ze);{typeof Q=="function"&&Q(n.memoizedProps.id,Ce,Se,ze),pD(n);var ht=n.return;e:for(;ht!==null;){switch(ht.tag){case Z:var ft=ht.stateNode;ft.effectDuration+=Se;break e;case ot:var j=ht.stateNode;j.effectDuration+=Se;break e}ht=ht.return}}}break}case Ie:{SM(e,n);break}case Ht:case Un:case Sr:case it:case yt:case tn:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}nr||n.flags&rn&&q_(n)}function yM(e){switch(e.tag){case P:case Pe:case Ge:{if(e.mode&Ft)try{po(),Q_(e,e.return)}finally{fo(e)}else Q_(e,e.return);break}case X:{var t=e.stateNode;typeof t.componentDidMount=="function"&&cM(e,e.return,t),Y_(e,e.return);break}case ae:{Y_(e,e.return);break}}}function gM(e,t){for(var n=null,r=e;;){if(r.tag===ae){if(n===null){n=r;try{var o=r.stateNode;t?VS(o):QS(r.stateNode,r.memoizedProps)}catch(d){Bt(e,e.return,d)}}}else if(r.tag===fe){if(n===null)try{var c=r.stateNode;t?WS(c):YS(c,r.memoizedProps)}catch(d){Bt(e,e.return,d)}}else if(!((r.tag===it||r.tag===yt)&&r.memoizedState!==null&&r!==e)){if(r.child!==null){r.child.return=r,r=r.child;continue}}if(r===e)return;for(;r.sibling===null;){if(r.return===null||r.return===e)return;n===r&&(n=null),r=r.return}n===r&&(n=null),r.sibling.return=r.return,r=r.sibling}}function q_(e){var t=e.ref;if(t!==null){var n=e.stateNode,r;switch(e.tag){case ae:r=n;break;default:r=n}if(typeof t=="function"){var o;if(e.mode&Ft)try{po(),o=t(r)}finally{fo(e)}else o=t(r);typeof o=="function"&&p("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",et(e))}else t.hasOwnProperty("current")||p("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",et(e)),t.current=r}}function _M(e){var t=e.alternate;t!==null&&(t.return=null),e.return=null}function K_(e){var t=e.alternate;t!==null&&(e.alternate=null,K_(t));{if(e.child=null,e.deletions=null,e.sibling=null,e.tag===ae){var n=e.stateNode;n!==null&&OR(n)}e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}}function EM(e){for(var t=e.return;t!==null;){if(J_(t))return t;t=t.return}throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}function J_(e){return e.tag===ae||e.tag===Z||e.tag===oe}function Z_(e){var t=e;e:for(;;){for(;t.sibling===null;){if(t.return===null||J_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==ae&&t.tag!==fe&&t.tag!==F;){if(t.flags&Ae||t.child===null||t.tag===oe)continue e;t.child.return=t,t=t.child}if(!(t.flags&Ae))return t.stateNode}}function bM(e){var t=EM(e);switch(t.tag){case ae:{var n=t.stateNode;t.flags&Ue&&(eg(n),t.flags&=~Ue);var r=Z_(e);$h(e,r,n);break}case Z:case oe:{var o=t.stateNode.containerInfo,c=Z_(e);Bh(e,c,o);break}default:throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function Bh(e,t,n){var r=e.tag,o=r===ae||r===fe;if(o){var c=e.stateNode;t?zS(n,c,t):LS(n,c)}else if(r!==oe){var d=e.child;if(d!==null){Bh(d,t,n);for(var y=d.sibling;y!==null;)Bh(y,t,n),y=y.sibling}}}function $h(e,t,n){var r=e.tag,o=r===ae||r===fe;if(o){var c=e.stateNode;t?jS(n,c,t):HS(n,c)}else if(r!==oe){var d=e.child;if(d!==null){$h(d,t,n);for(var y=d.sibling;y!==null;)$h(y,t,n),y=y.sibling}}}var rr=null,Qa=!1;function TM(e,t,n){{var r=t;e:for(;r!==null;){switch(r.tag){case ae:{rr=r.stateNode,Qa=!1;break e}case Z:{rr=r.stateNode.containerInfo,Qa=!0;break e}case oe:{rr=r.stateNode.containerInfo,Qa=!0;break e}}r=r.return}if(rr===null)throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");eE(e,t,n),rr=null,Qa=!1}_M(n)}function gi(e,t,n){for(var r=n.child;r!==null;)eE(e,t,r),r=r.sibling}function eE(e,t,n){switch(Sb(n),n.tag){case ae:nr||Eu(n,t);case fe:{{var r=rr,o=Qa;rr=null,gi(e,t,n),rr=r,Qa=o,rr!==null&&(Qa?BS(rr,n.stateNode):XS(rr,n.stateNode))}return}case F:{rr!==null&&(Qa?$S(rr,n.stateNode):tm(rr,n.stateNode));return}case oe:{{var c=rr,d=Qa;rr=n.stateNode.containerInfo,Qa=!0,gi(e,t,n),rr=c,Qa=d}return}case P:case Pe:case It:case Ge:{if(!nr){var y=n.updateQueue;if(y!==null){var E=y.lastEffect;if(E!==null){var S=E.next,A=S;do{var U=A,I=U.destroy,W=U.tag;I!==void 0&&((W&uo)!==Vr?Zd(n,t,I):(W&Cn)!==Vr&&(Uv(n),n.mode&Ft?(po(),Zd(n,t,I),fo(n)):Zd(n,t,I),Hv())),A=A.next}while(A!==S)}}}gi(e,t,n);return}case X:{if(!nr){Eu(n,t);var Q=n.stateNode;typeof Q.componentWillUnmount=="function"&&Xh(n,t,Q)}gi(e,t,n);return}case Sr:{gi(e,t,n);return}case it:{if(n.mode&pt){var K=nr;nr=K||n.memoizedState!==null,gi(e,t,n),nr=K}else gi(e,t,n);break}default:{gi(e,t,n);return}}}function wM(e){e.memoizedState}function SM(e,t){var n=t.memoizedState;if(n===null){var r=t.alternate;if(r!==null){var o=r.memoizedState;if(o!==null){var c=o.dehydrated;c!==null&&lR(c)}}}}function tE(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sM),t.forEach(function(r){var o=ED.bind(null,e,r);if(!n.has(r)){if(n.add(r),Ua)if(gu!==null&&_u!==null)nc(_u,gu);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");r.then(o,o)}})}}function RM(e,t,n){gu=n,_u=e,qt(t),nE(t,e),qt(t),gu=null,_u=null}function Ya(e,t,n){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];try{TM(e,t,c)}catch(E){Bt(c,t,E)}}var d=Vo();if(t.subtreeFlags&no)for(var y=t.child;y!==null;)qt(y),nE(y,e),y=y.sibling;qt(d)}function nE(e,t,n){var r=e.alternate,o=e.flags;switch(e.tag){case P:case Pe:case It:case Ge:{if(Ya(t,e),mo(e),o&Y){try{Wa(uo|An,e,e.return),yi(uo|An,e)}catch(Ve){Bt(e,e.return,Ve)}if(e.mode&Ft){try{po(),Wa(Cn|An,e,e.return)}catch(Ve){Bt(e,e.return,Ve)}fo(e)}else try{Wa(Cn|An,e,e.return)}catch(Ve){Bt(e,e.return,Ve)}}return}case X:{Ya(t,e),mo(e),o&rn&&r!==null&&Eu(r,r.return);return}case ae:{Ya(t,e),mo(e),o&rn&&r!==null&&Eu(r,r.return);{if(e.flags&Ue){var c=e.stateNode;try{eg(c)}catch(Ve){Bt(e,e.return,Ve)}}if(o&Y){var d=e.stateNode;if(d!=null){var y=e.memoizedProps,E=r!==null?r.memoizedProps:y,S=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{IS(d,A,S,E,y,e)}catch(Ve){Bt(e,e.return,Ve)}}}}return}case fe:{if(Ya(t,e),mo(e),o&Y){if(e.stateNode===null)throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var U=e.stateNode,I=e.memoizedProps,W=r!==null?r.memoizedProps:I;try{US(U,W,I)}catch(Ve){Bt(e,e.return,Ve)}}return}case Z:{if(Ya(t,e),mo(e),o&Y&&r!==null){var Q=r.memoizedState;if(Q.isDehydrated)try{uR(t.containerInfo)}catch(Ve){Bt(e,e.return,Ve)}}return}case oe:{Ya(t,e),mo(e);return}case Ie:{Ya(t,e),mo(e);var K=e.child;if(K.flags&yr){var Se=K.stateNode,ze=K.memoizedState,Ce=ze!==null;if(Se.isHidden=Ce,Ce){var ht=K.alternate!==null&&K.alternate.memoizedState!==null;ht||oD()}}if(o&Y){try{wM(e)}catch(Ve){Bt(e,e.return,Ve)}tE(e)}return}case it:{var ft=r!==null&&r.memoizedState!==null;if(e.mode&pt){var j=nr;nr=j||ft,Ya(t,e),nr=j}else Ya(t,e);if(mo(e),o&yr){var J=e.stateNode,z=e.memoizedState,de=z!==null,Re=e;if(J.isHidden=de,de&&!ft&&(Re.mode&pt)!==$e){De=Re;for(var Ee=Re.child;Ee!==null;)De=Ee,MM(Ee),Ee=Ee.sibling}gM(Re,de)}return}case Ht:{Ya(t,e),mo(e),o&Y&&tE(e);return}case Sr:return;default:{Ya(t,e),mo(e);return}}}function mo(e){var t=e.flags;if(t&Ae){try{bM(e)}catch(n){Bt(e,e.return,n)}e.flags&=~Ae}t&Xr&&(e.flags&=~Xr)}function OM(e,t,n){gu=n,_u=t,De=e,rE(e,t,n),gu=null,_u=null}function rE(e,t,n){for(var r=(e.mode&pt)!==$e;De!==null;){var o=De,c=o.child;if(o.tag===it&&r){var d=o.memoizedState!==null,y=d||Jd;if(y){Vh(e,t,n);continue}else{var E=o.alternate,S=E!==null&&E.memoizedState!==null,A=S||nr,U=Jd,I=nr;Jd=y,nr=A,nr&&!I&&(De=o,DM(o));for(var W=c;W!==null;)De=W,rE(W,t,n),W=W.sibling;De=o,Jd=U,nr=I,Vh(e,t,n);continue}}(o.subtreeFlags&zu)!==te&&c!==null?(c.return=o,De=c):Vh(e,t,n)}}function Vh(e,t,n){for(;De!==null;){var r=De;if((r.flags&zu)!==te){var o=r.alternate;qt(r);try{vM(t,o,r,n)}catch(d){Bt(r,r.return,d)}gn()}if(r===e){De=null;return}var c=r.sibling;if(c!==null){c.return=r.return,De=c;return}De=r.return}}function MM(e){for(;De!==null;){var t=De,n=t.child;switch(t.tag){case P:case Pe:case It:case Ge:{if(t.mode&Ft)try{po(),Wa(Cn,t,t.return)}finally{fo(t)}else Wa(Cn,t,t.return);break}case X:{Eu(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&Xh(t,t.return,r);break}case ae:{Eu(t,t.return);break}case it:{var o=t.memoizedState!==null;if(o){aE(e);continue}break}}n!==null?(n.return=t,De=n):aE(e)}}function aE(e){for(;De!==null;){var t=De;if(t===e){De=null;return}var n=t.sibling;if(n!==null){n.return=t.return,De=n;return}De=t.return}}function DM(e){for(;De!==null;){var t=De,n=t.child;if(t.tag===it){var r=t.memoizedState!==null;if(r){oE(e);continue}}n!==null?(n.return=t,De=n):oE(e)}}function oE(e){for(;De!==null;){var t=De;qt(t);try{yM(t)}catch(r){Bt(t,t.return,r)}if(gn(),t===e){De=null;return}var n=t.sibling;if(n!==null){n.return=t.return,De=n;return}De=t.return}}function AM(e,t,n,r){De=t,CM(t,e,n,r)}function CM(e,t,n,r){for(;De!==null;){var o=De,c=o.child;(o.subtreeFlags&js)!==te&&c!==null?(c.return=o,De=c):PM(e,t,n,r)}}function PM(e,t,n,r){for(;De!==null;){var o=De;if((o.flags&Mn)!==te){qt(o);try{xM(t,o,n,r)}catch(d){Bt(o,o.return,d)}gn()}if(o===e){De=null;return}var c=o.sibling;if(c!==null){c.return=o.return,De=c;return}De=o.return}}function xM(e,t,n,r){switch(t.tag){case P:case Pe:case Ge:{if(t.mode&Ft){Th();try{yi(er|An,t)}finally{bh(t)}}else yi(er|An,t);break}}}function FM(e){De=e,NM()}function NM(){for(;De!==null;){var e=De,t=e.child;if((De.flags&he)!==te){var n=e.deletions;if(n!==null){for(var r=0;r<n.length;r++){var o=n[r];De=o,UM(o,e)}{var c=e.alternate;if(c!==null){var d=c.child;if(d!==null){c.child=null;do{var y=d.sibling;d.sibling=null,d=y}while(d!==null)}}}De=e}}(e.subtreeFlags&js)!==te&&t!==null?(t.return=e,De=t):kM()}}function kM(){for(;De!==null;){var e=De;(e.flags&Mn)!==te&&(qt(e),IM(e),gn());var t=e.sibling;if(t!==null){t.return=e.return,De=t;return}De=e.return}}function IM(e){switch(e.tag){case P:case Pe:case Ge:{e.mode&Ft?(Th(),Wa(er|An,e,e.return),bh(e)):Wa(er|An,e,e.return);break}}}function UM(e,t){for(;De!==null;){var n=De;qt(n),LM(n,t),gn();var r=n.child;r!==null?(r.return=n,De=r):HM(e)}}function HM(e){for(;De!==null;){var t=De,n=t.sibling,r=t.return;if(K_(t),t===e){De=null;return}if(n!==null){n.return=r,De=n;return}De=r}}function LM(e,t){switch(e.tag){case P:case Pe:case Ge:{e.mode&Ft?(Th(),Wa(er,e,t),bh(e)):Wa(er,e,t);break}}}function jM(e){switch(e.tag){case P:case Pe:case Ge:{try{yi(Cn|An,e)}catch(n){Bt(e,e.return,n)}break}case X:{var t=e.stateNode;try{t.componentDidMount()}catch(n){Bt(e,e.return,n)}break}}}function zM(e){switch(e.tag){case P:case Pe:case Ge:{try{yi(er|An,e)}catch(t){Bt(e,e.return,t)}break}}}function XM(e){switch(e.tag){case P:case Pe:case Ge:{try{Wa(Cn|An,e,e.return)}catch(n){Bt(e,e.return,n)}break}case X:{var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Xh(e,e.return,t);break}}}function BM(e){switch(e.tag){case P:case Pe:case Ge:try{Wa(er|An,e,e.return)}catch(t){Bt(e,e.return,t)}}}if(typeof Symbol=="function"&&Symbol.for){var Vl=Symbol.for;Vl("selector.component"),Vl("selector.has_pseudo_class"),Vl("selector.role"),Vl("selector.test_id"),Vl("selector.text")}var $M=[];function VM(){$M.forEach(function(e){return e()})}var WM=s.ReactCurrentActQueue;function QM(e){{var t=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0,n=typeof jest<"u";return n&&t!==!1}}function iE(){{var e=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return!e&&WM.current!==null&&p("The current testing environment is not configured to support act(...)"),e}}var YM=Math.ceil,Wh=s.ReactCurrentDispatcher,Qh=s.ReactCurrentOwner,ar=s.ReactCurrentBatchConfig,Ga=s.ReactCurrentActQueue,Fn=0,sE=1,or=2,Da=4,Ho=0,Wl=1,vs=2,ef=3,Ql=4,uE=5,Yh=6,mt=Fn,Pr=null,an=null,Nn=ue,ho=ue,Gh=ui(ue),kn=Ho,Yl=null,tf=ue,Gl=ue,nf=ue,ql=null,Wr=null,qh=0,lE=500,cE=1/0,GM=500,Lo=null;function Kl(){cE=Bn()+GM}function dE(){return cE}var rf=!1,Kh=null,bu=null,ys=!1,_i=null,Jl=ue,Jh=[],Zh=null,qM=50,Zl=0,ev=null,tv=!1,af=!1,KM=50,Tu=0,of=null,ec=Gt,sf=ue,fE=!1;function uf(){return Pr}function xr(){return(mt&(or|Da))!==Fn?Bn():(ec!==Gt||(ec=Bn()),ec)}function Ei(e){var t=e.mode;if((t&pt)===$e)return Qe;if((mt&or)!==Fn&&Nn!==ue)return Yu(Nn);var n=QR()!==WR;if(n){if(ar.transition!==null){var r=ar.transition;r._updatedFibers||(r._updatedFibers=new Set),r._updatedFibers.add(e)}return sf===Vn&&(sf=Wv()),sf}var o=Ha();if(o!==Vn)return o;var c=PS();return c}function JM(e){var t=e.mode;return(t&pt)===$e?Qe:tT()}function In(e,t,n,r){TD(),fE&&p("useInsertionEffect must not schedule updates."),tv&&(af=!0),Gu(e,n,r),(mt&or)!==ue&&e===Pr?RD(t):(Ua&&Gv(e,t,n),OD(t),e===Pr&&((mt&or)===Fn&&(Gl=at(Gl,n)),kn===Ql&&bi(e,Nn)),Qr(e,r),n===Qe&&mt===Fn&&(t.mode&pt)===$e&&!Ga.isBatchingLegacy&&(Kl(),dg()))}function ZM(e,t,n){var r=e.current;r.lanes=t,Gu(e,t,n),Qr(e,n)}function eD(e){return(mt&or)!==Fn}function Qr(e,t){var n=e.callbackNode;Gb(e,t);var r=Dc(e,e===Pr?Nn:ue);if(r===ue){n!==null&&DE(n),e.callbackNode=null,e.callbackPriority=Vn;return}var o=es(r),c=e.callbackPriority;if(c===o&&!(Ga.current!==null&&n!==uv)){n==null&&c!==Qe&&p("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");return}n!=null&&DE(n);var d;if(o===Qe)e.tag===li?(Ga.isBatchingLegacy!==null&&(Ga.didScheduleLegacyUpdate=!0),AR(hE.bind(null,e))):cg(hE.bind(null,e)),Ga.current!==null?Ga.current.push(ci):FS(function(){(mt&(or|Da))===Fn&&ci()}),d=null;else{var y;switch(Jv(r)){case la:y=Sc;break;case Ao:y=Kf;break;case Co:y=Ki;break;case Pc:y=Jf;break;default:y=Ki;break}d=lv(y,pE.bind(null,e))}e.callbackPriority=o,e.callbackNode=d}function pE(e,t){if(TO(),ec=Gt,sf=ue,(mt&(or|Da))!==Fn)throw new Error("Should not already be working.");var n=e.callbackNode,r=zo();if(r&&e.callbackNode!==n)return null;var o=Dc(e,e===Pr?Nn:ue);if(o===ue)return null;var c=!Ac(e,o)&&!eT(e,o)&&!t,d=c?cD(e,o):cf(e,o);if(d!==Ho){if(d===vs){var y=Ep(e);y!==ue&&(o=y,d=nv(e,y))}if(d===Wl){var E=Yl;throw gs(e,ue),bi(e,o),Qr(e,Bn()),E}if(d===Yh)bi(e,o);else{var S=!Ac(e,o),A=e.current.alternate;if(S&&!nD(A)){if(d=cf(e,o),d===vs){var U=Ep(e);U!==ue&&(o=U,d=nv(e,U))}if(d===Wl){var I=Yl;throw gs(e,ue),bi(e,o),Qr(e,Bn()),I}}e.finishedWork=A,e.finishedLanes=o,tD(e,d,o)}}return Qr(e,Bn()),e.callbackNode===n?pE.bind(null,e):null}function nv(e,t){var n=ql;if(xc(e)){var r=gs(e,t);r.flags|=zt,TR(e.containerInfo)}var o=cf(e,t);if(o!==vs){var c=Wr;Wr=n,c!==null&&mE(c)}return o}function mE(e){Wr===null?Wr=e:Wr.push.apply(Wr,e)}function tD(e,t,n){switch(t){case Ho:case Wl:throw new Error("Root did not complete. This is a bug in React.");case vs:{_s(e,Wr,Lo);break}case ef:{if(bi(e,n),$v(n)&&!AE()){var r=qh+lE-Bn();if(r>10){var o=Dc(e,ue);if(o!==ue)break;var c=e.suspendedLanes;if(!Ws(c,n)){xr(),Yv(e,c);break}e.timeoutHandle=Zp(_s.bind(null,e,Wr,Lo),r);break}}_s(e,Wr,Lo);break}case Ql:{if(bi(e,n),Zb(n))break;if(!AE()){var d=Qb(e,n),y=d,E=Bn()-y,S=bD(E)-E;if(S>10){e.timeoutHandle=Zp(_s.bind(null,e,Wr,Lo),S);break}}_s(e,Wr,Lo);break}case uE:{_s(e,Wr,Lo);break}default:throw new Error("Unknown root exit status.")}}function nD(e){for(var t=e;;){if(t.flags&Ls){var n=t.updateQueue;if(n!==null){var r=n.stores;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],d=c.getSnapshot,y=c.value;try{if(!da(d(),y))return!1}catch{return!1}}}}var E=t.child;if(t.subtreeFlags&Ls&&E!==null){E.return=t,t=E;continue}if(t===e)return!0;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}return!0}function bi(e,t){t=Cc(t,nf),t=Cc(t,Gl),rT(e,t)}function hE(e){if(wO(),(mt&(or|Da))!==Fn)throw new Error("Should not already be working.");zo();var t=Dc(e,ue);if(!ua(t,Qe))return Qr(e,Bn()),null;var n=cf(e,t);if(e.tag!==li&&n===vs){var r=Ep(e);r!==ue&&(t=r,n=nv(e,r))}if(n===Wl){var o=Yl;throw gs(e,ue),bi(e,t),Qr(e,Bn()),o}if(n===Yh)throw new Error("Root did not complete. This is a bug in React.");var c=e.current.alternate;return e.finishedWork=c,e.finishedLanes=t,_s(e,Wr,Lo),Qr(e,Bn()),null}function rD(e,t){t!==ue&&(Sp(e,at(t,Qe)),Qr(e,Bn()),(mt&(or|Da))===Fn&&(Kl(),ci()))}function rv(e,t){var n=mt;mt|=sE;try{return e(t)}finally{mt=n,mt===Fn&&!Ga.isBatchingLegacy&&(Kl(),dg())}}function aD(e,t,n,r,o){var c=Ha(),d=ar.transition;try{return ar.transition=null,Wn(la),e(t,n,r,o)}finally{Wn(c),ar.transition=d,mt===Fn&&Kl()}}function jo(e){_i!==null&&_i.tag===li&&(mt&(or|Da))===Fn&&zo();var t=mt;mt|=sE;var n=ar.transition,r=Ha();try{return ar.transition=null,Wn(la),e?e():void 0}finally{Wn(r),ar.transition=n,mt=t,(mt&(or|Da))===Fn&&ci()}}function vE(){return(mt&(or|Da))!==Fn}function lf(e,t){Er(Gh,ho,e),ho=at(ho,t)}function av(e){ho=Gh.current,_r(Gh,e)}function gs(e,t){e.finishedWork=null,e.finishedLanes=ue;var n=e.timeoutHandle;if(n!==em&&(e.timeoutHandle=em,xS(n)),an!==null)for(var r=an.return;r!==null;){var o=r.alternate;V_(o,r),r=r.return}Pr=e;var c=Es(e.current,null);return an=c,Nn=ho=t,kn=Ho,Yl=null,tf=ue,Gl=ue,nf=ue,ql=null,Wr=null,KR(),za.discardPendingWarnings(),c}function yE(e,t){do{var n=an;try{if(vd(),Qg(),gn(),Qh.current=null,n===null||n.return===null){kn=Wl,Yl=t,an=null;return}if(Yr&&n.mode&Ft&&Yd(n,!0),ha)if(Xs(),t!==null&&typeof t=="object"&&typeof t.then=="function"){var r=t;kb(n,r,Nn)}else Nb(n,t,Nn);DO(e,n.return,n,t,Nn),bE(n)}catch(o){t=o,an===n&&n!==null?(n=n.return,an=n):n=an;continue}return}while(!0)}function gE(){var e=Wh.current;return Wh.current=Bd,e===null?Bd:e}function _E(e){Wh.current=e}function oD(){qh=Bn()}function tc(e){tf=at(e,tf)}function iD(){kn===Ho&&(kn=ef)}function ov(){(kn===Ho||kn===ef||kn===vs)&&(kn=Ql),Pr!==null&&(bp(tf)||bp(Gl))&&bi(Pr,Nn)}function sD(e){kn!==Ql&&(kn=vs),ql===null?ql=[e]:ql.push(e)}function uD(){return kn===Ho}function cf(e,t){var n=mt;mt|=or;var r=gE();if(Pr!==e||Nn!==t){if(Ua){var o=e.memoizedUpdaters;o.size>0&&(nc(e,Nn),o.clear()),qv(e,t)}Lo=Kv(),gs(e,t)}Lv(t);do try{lD();break}catch(c){yE(e,c)}while(!0);if(vd(),mt=n,_E(r),an!==null)throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");return jv(),Pr=null,Nn=ue,kn}function lD(){for(;an!==null;)EE(an)}function cD(e,t){var n=mt;mt|=or;var r=gE();if(Pr!==e||Nn!==t){if(Ua){var o=e.memoizedUpdaters;o.size>0&&(nc(e,Nn),o.clear()),qv(e,t)}Lo=Kv(),Kl(),gs(e,t)}Lv(t);do try{dD();break}catch(c){yE(e,c)}while(!0);return vd(),_E(r),mt=n,an!==null?(jb(),Ho):(jv(),Pr=null,Nn=ue,kn)}function dD(){for(;an!==null&&!mb();)EE(an)}function EE(e){var t=e.alternate;qt(e);var n;(e.mode&Ft)!==$e?(Eh(e),n=iv(t,e,ho),Yd(e,!0)):n=iv(t,e,ho),gn(),e.memoizedProps=e.pendingProps,n===null?bE(e):an=n,Qh.current=null}function bE(e){var t=e;do{var n=t.alternate,r=t.return;if((t.flags&ei)===te){qt(t);var o=void 0;if((t.mode&Ft)===$e?o=$_(n,t,ho):(Eh(t),o=$_(n,t,ho),Yd(t,!1)),gn(),o!==null){an=o;return}}else{var c=iM(n,t);if(c!==null){c.flags&=Dn,an=c;return}if((t.mode&Ft)!==$e){Yd(t,!1);for(var d=t.actualDuration,y=t.child;y!==null;)d+=y.actualDuration,y=y.sibling;t.actualDuration=d}if(r!==null)r.flags|=ei,r.subtreeFlags=te,r.deletions=null;else{kn=Yh,an=null;return}}var E=t.sibling;if(E!==null){an=E;return}t=r,an=t}while(t!==null);kn===Ho&&(kn=uE)}function _s(e,t,n){var r=Ha(),o=ar.transition;try{ar.transition=null,Wn(la),fD(e,t,n,r)}finally{ar.transition=o,Wn(r)}return null}function fD(e,t,n,r){do zo();while(_i!==null);if(wD(),(mt&(or|Da))!==Fn)throw new Error("Should not already be working.");var o=e.finishedWork,c=e.finishedLanes;if(Mb(c),o===null)return Iv(),null;if(c===ue&&p("root.finishedLanes should not be empty during a commit. This is a bug in React."),e.finishedWork=null,e.finishedLanes=ue,o===e.current)throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");e.callbackNode=null,e.callbackPriority=Vn;var d=at(o.lanes,o.childLanes);aT(e,d),e===Pr&&(Pr=null,an=null,Nn=ue),((o.subtreeFlags&js)!==te||(o.flags&js)!==te)&&(ys||(ys=!0,Zh=n,lv(Ki,function(){return zo(),null})));var y=(o.subtreeFlags&(ju|no|zu|js))!==te,E=(o.flags&(ju|no|zu|js))!==te;if(y||E){var S=ar.transition;ar.transition=null;var A=Ha();Wn(la);var U=mt;mt|=Da,Qh.current=null,dM(e,o),g_(),RM(e,o,c),RS(e.containerInfo),e.current=o,Ib(c),OM(o,e,c),Ub(),hb(),mt=U,Wn(A),ar.transition=S}else e.current=o,g_();var I=ys;if(ys?(ys=!1,_i=e,Jl=c):(Tu=0,of=null),d=e.pendingLanes,d===ue&&(bu=null),I||RE(e.current,!1),Tb(o.stateNode,r),Ua&&e.memoizedUpdaters.clear(),VM(),Qr(e,Bn()),t!==null)for(var W=e.onRecoverableError,Q=0;Q<t.length;Q++){var K=t[Q],Se=K.stack,ze=K.digest;W(K.value,{componentStack:Se,digest:ze})}if(rf){rf=!1;var Ce=Kh;throw Kh=null,Ce}return ua(Jl,Qe)&&e.tag!==li&&zo(),d=e.pendingLanes,ua(d,Qe)?(bO(),e===ev?Zl++:(Zl=0,ev=e)):Zl=0,ci(),Iv(),null}function zo(){if(_i!==null){var e=Jv(Jl),t=uT(Co,e),n=ar.transition,r=Ha();try{return ar.transition=null,Wn(t),mD()}finally{Wn(r),ar.transition=n}}return!1}function pD(e){Jh.push(e),ys||(ys=!0,lv(Ki,function(){return zo(),null}))}function mD(){if(_i===null)return!1;var e=Zh;Zh=null;var t=_i,n=Jl;if(_i=null,Jl=ue,(mt&(or|Da))!==Fn)throw new Error("Cannot flush passive effects while already rendering.");tv=!0,af=!1,Hb(n);var r=mt;mt|=Da,FM(t.current),AM(t,t.current,n,e);{var o=Jh;Jh=[];for(var c=0;c<o.length;c++){var d=o[c];hM(t,d)}}Lb(),RE(t.current,!0),mt=r,ci(),af?t===of?Tu++:(Tu=0,of=t):Tu=0,tv=!1,af=!1,wb(t);{var y=t.current.stateNode;y.effectDuration=0,y.passiveEffectDuration=0}return!0}function TE(e){return bu!==null&&bu.has(e)}function hD(e){bu===null?bu=new Set([e]):bu.add(e)}function vD(e){rf||(rf=!0,Kh=e)}var yD=vD;function wE(e,t,n){var r=ms(n,t),o=E_(e,r,Qe),c=fi(e,o,Qe),d=xr();c!==null&&(Gu(c,Qe,d),Qr(c,d))}function Bt(e,t,n){if(uM(n),rc(!1),e.tag===Z){wE(e,e,n);return}var r=null;for(r=t;r!==null;){if(r.tag===Z){wE(r,e,n);return}else if(r.tag===X){var o=r.type,c=r.stateNode;if(typeof o.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&!TE(c)){var d=ms(n,e),y=Oh(r,d,Qe),E=fi(r,y,Qe),S=xr();E!==null&&(Gu(E,Qe,S),Qr(E,S));return}}r=r.return}p(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,n)}function gD(e,t,n){var r=e.pingCache;r!==null&&r.delete(t);var o=xr();Yv(e,n),MD(e),Pr===e&&Ws(Nn,n)&&(kn===Ql||kn===ef&&$v(Nn)&&Bn()-qh<lE?gs(e,ue):nf=at(nf,n)),Qr(e,o)}function SE(e,t){t===Vn&&(t=JM(e));var n=xr(),r=$r(e,t);r!==null&&(Gu(r,t,n),Qr(r,n))}function _D(e){var t=e.memoizedState,n=Vn;t!==null&&(n=t.retryLane),SE(e,n)}function ED(e,t){var n=Vn,r;switch(e.tag){case Ie:r=e.stateNode;var o=e.memoizedState;o!==null&&(n=o.retryLane);break;case Ht:r=e.stateNode;break;default:throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}r!==null&&r.delete(t),SE(e,n)}function bD(e){return e<120?120:e<480?480:e<1080?1080:e<1920?1920:e<3e3?3e3:e<4320?4320:YM(e/1960)*1960}function TD(){if(Zl>qM)throw Zl=0,ev=null,new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Tu>KM&&(Tu=0,of=null,p("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))}function wD(){za.flushLegacyContextWarning(),za.flushPendingUnsafeLifecycleWarnings()}function RE(e,t){qt(e),df(e,Xn,XM),t&&df(e,Gi,BM),df(e,Xn,jM),t&&df(e,Gi,zM),gn()}function df(e,t,n){for(var r=e,o=null;r!==null;){var c=r.subtreeFlags&t;r!==o&&r.child!==null&&c!==te?r=r.child:((r.flags&t)!==te&&n(r),r.sibling!==null?r=r.sibling:r=o=r.return)}}var ff=null;function OE(e){{if((mt&or)!==Fn||!(e.mode&pt))return;var t=e.tag;if(t!==G&&t!==Z&&t!==X&&t!==P&&t!==Pe&&t!==It&&t!==Ge)return;var n=et(e)||"ReactComponent";if(ff!==null){if(ff.has(n))return;ff.add(n)}else ff=new Set([n]);var r=jn;try{qt(e),p("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.")}finally{r?qt(e):gn()}}}var iv;{var SD=null;iv=function(e,t,n){var r=NE(SD,t);try{return L_(e,t,n)}catch(c){if(UR()||c!==null&&typeof c=="object"&&typeof c.then=="function")throw c;if(vd(),Qg(),V_(e,t),NE(t,r),t.mode&Ft&&Eh(t),R(null,L_,null,e,t,n),B()){var o=se();typeof o=="object"&&o!==null&&o._suppressLogging&&typeof c=="object"&&c!==null&&!c._suppressLogging&&(c._suppressLogging=!0)}throw c}}}var ME=!1,sv;sv=new Set;function RD(e){if(Eo&&!gO())switch(e.tag){case P:case Pe:case Ge:{var t=an&&et(an)||"Unknown",n=t;if(!sv.has(n)){sv.add(n);var r=et(e)||"Unknown";p("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",r,t,t)}break}case X:{ME||(p("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),ME=!0);break}}}function nc(e,t){if(Ua){var n=e.memoizedUpdaters;n.forEach(function(r){Gv(e,r,t)})}}var uv={};function lv(e,t){{var n=Ga.current;return n!==null?(n.push(t),uv):kv(e,t)}}function DE(e){if(e!==uv)return pb(e)}function AE(){return Ga.current!==null}function OD(e){{if(e.mode&pt){if(!iE())return}else if(!QM()||mt!==Fn||e.tag!==P&&e.tag!==Pe&&e.tag!==Ge)return;if(Ga.current===null){var t=jn;try{qt(e),p(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,et(e))}finally{t?qt(e):gn()}}}}function MD(e){e.tag!==li&&iE()&&Ga.current===null&&p(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`)}function rc(e){fE=e}var Aa=null,wu=null,DD=function(e){Aa=e};function Su(e){{if(Aa===null)return e;var t=Aa(e);return t===void 0?e:t.current}}function cv(e){return Su(e)}function dv(e){{if(Aa===null)return e;var t=Aa(e);if(t===void 0){if(e!=null&&typeof e.render=="function"){var n=Su(e.render);if(e.render!==n){var r={$$typeof:Fe,render:n};return e.displayName!==void 0&&(r.displayName=e.displayName),r}}return e}return t.current}}function CE(e,t){{if(Aa===null)return!1;var n=e.elementType,r=t.type,o=!1,c=typeof r=="object"&&r!==null?r.$$typeof:null;switch(e.tag){case X:{typeof r=="function"&&(o=!0);break}case P:{(typeof r=="function"||c===lt)&&(o=!0);break}case Pe:{(c===Fe||c===lt)&&(o=!0);break}case It:case Ge:{(c===Mt||c===lt)&&(o=!0);break}default:return!1}if(o){var d=Aa(n);if(d!==void 0&&d===Aa(r))return!0}return!1}}function PE(e){{if(Aa===null||typeof WeakSet!="function")return;wu===null&&(wu=new WeakSet),wu.add(e)}}var AD=function(e,t){{if(Aa===null)return;var n=t.staleFamilies,r=t.updatedFamilies;zo(),jo(function(){fv(e.current,r,n)})}},CD=function(e,t){{if(e.context!==fa)return;zo(),jo(function(){ac(t,e,null,null)})}};function fv(e,t,n){{var r=e.alternate,o=e.child,c=e.sibling,d=e.tag,y=e.type,E=null;switch(d){case P:case Ge:case X:E=y;break;case Pe:E=y.render;break}if(Aa===null)throw new Error("Expected resolveFamily to be set during hot reload.");var S=!1,A=!1;if(E!==null){var U=Aa(E);U!==void 0&&(n.has(U)?A=!0:t.has(U)&&(d===X?A=!0:S=!0))}if(wu!==null&&(wu.has(e)||r!==null&&wu.has(r))&&(A=!0),A&&(e._debugNeedsRemount=!0),A||S){var I=$r(e,Qe);I!==null&&In(I,e,Qe,Gt)}o!==null&&!A&&fv(o,t,n),c!==null&&fv(c,t,n)}}var PD=function(e,t){{var n=new Set,r=new Set(t.map(function(o){return o.current}));return pv(e.current,r,n),n}};function pv(e,t,n){{var r=e.child,o=e.sibling,c=e.tag,d=e.type,y=null;switch(c){case P:case Ge:case X:y=d;break;case Pe:y=d.render;break}var E=!1;y!==null&&t.has(y)&&(E=!0),E?xD(e,n):r!==null&&pv(r,t,n),o!==null&&pv(o,t,n)}}function xD(e,t){{var n=FD(e,t);if(n)return;for(var r=e;;){switch(r.tag){case ae:t.add(r.stateNode);return;case oe:t.add(r.stateNode.containerInfo);return;case Z:t.add(r.stateNode.containerInfo);return}if(r.return===null)throw new Error("Expected to reach root first.");r=r.return}}}function FD(e,t){for(var n=e,r=!1;;){if(n.tag===ae)r=!0,t.add(n.stateNode);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)return r;for(;n.sibling===null;){if(n.return===null||n.return===e)return r;n=n.return}n.sibling.return=n.return,n=n.sibling}return!1}var mv;{mv=!1;try{var xE=Object.preventExtensions({})}catch{mv=!0}}function ND(e,t,n,r){this.tag=e,this.key=n,this.elementType=null,this.type=null,this.stateNode=null,this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=r,this.flags=te,this.subtreeFlags=te,this.deletions=null,this.lanes=ue,this.childLanes=ue,this.alternate=null,this.actualDuration=Number.NaN,this.actualStartTime=Number.NaN,this.selfBaseDuration=Number.NaN,this.treeBaseDuration=Number.NaN,this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0,this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,!mv&&typeof Object.preventExtensions=="function"&&Object.preventExtensions(this)}var pa=function(e,t,n,r){return new ND(e,t,n,r)};function hv(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function kD(e){return typeof e=="function"&&!hv(e)&&e.defaultProps===void 0}function ID(e){if(typeof e=="function")return hv(e)?X:P;if(e!=null){var t=e.$$typeof;if(t===Fe)return Pe;if(t===Mt)return It}return G}function Es(e,t){var n=e.alternate;n===null?(n=pa(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n._debugSource=e._debugSource,n._debugOwner=e._debugOwner,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=te,n.subtreeFlags=te,n.deletions=null,n.actualDuration=0,n.actualStartTime=-1),n.flags=e.flags&Mo,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue;var r=e.dependencies;switch(n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case G:case P:case Ge:n.type=Su(e.type);break;case X:n.type=cv(e.type);break;case Pe:n.type=dv(e.type);break}return n}function UD(e,t){e.flags&=Mo|Ae;var n=e.alternate;if(n===null)e.childLanes=ue,e.lanes=t,e.child=null,e.subtreeFlags=te,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0;else{e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=te,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type;var r=n.dependencies;e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration}return e}function HD(e,t,n){var r;return e===ud?(r=pt,t===!0&&(r|=_n,r|=ao)):r=$e,Ua&&(r|=Ft),pa(Z,null,null,r)}function vv(e,t,n,r,o,c){var d=G,y=e;if(typeof e=="function")hv(e)?(d=X,y=cv(y)):y=Su(y);else if(typeof e=="string")d=ae;else{e:switch(e){case ie:return Ti(n.children,o,c,t);case _e:d=ke,o|=_n,(o&pt)!==$e&&(o|=ao);break;case He:return LD(n,o,c,t);case Ze:return jD(n,o,c,t);case Ct:return zD(n,o,c,t);case yn:return FE(n,o,c,t);case Mr:case Ln:case Ou:case Mu:case _t:default:{if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rt:d=We;break e;case C:d=Oe;break e;case Fe:d=Pe,y=dv(y);break e;case Mt:d=It;break e;case lt:d=sr,y=null;break e}var E="";{(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(E+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var S=r?et(r):null;S&&(E+=`

Check the render method of \``+S+"`.")}throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) "+("but got: "+(e==null?e:typeof e)+"."+E))}}}var A=pa(d,n,t,o);return A.elementType=e,A.type=y,A.lanes=c,A._debugOwner=r,A}function yv(e,t,n){var r=null;r=e._owner;var o=e.type,c=e.key,d=e.props,y=vv(o,c,d,r,t,n);return y._debugSource=e._source,y._debugOwner=e._owner,y}function Ti(e,t,n,r){var o=pa(Ne,e,r,t);return o.lanes=n,o}function LD(e,t,n,r){typeof e.id!="string"&&p('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id);var o=pa(ot,e,r,t|Ft);return o.elementType=He,o.lanes=n,o.stateNode={effectDuration:0,passiveEffectDuration:0},o}function jD(e,t,n,r){var o=pa(Ie,e,r,t);return o.elementType=Ze,o.lanes=n,o}function zD(e,t,n,r){var o=pa(Ht,e,r,t);return o.elementType=Ct,o.lanes=n,o}function FE(e,t,n,r){var o=pa(it,e,r,t);o.elementType=yn,o.lanes=n;var c={isHidden:!1};return o.stateNode=c,o}function gv(e,t,n){var r=pa(fe,e,null,t);return r.lanes=n,r}function XD(){var e=pa(ae,null,null,$e);return e.elementType="DELETED",e}function BD(e){var t=pa(F,null,null,$e);return t.stateNode=e,t}function _v(e,t,n){var r=e.children!==null?e.children:[],o=pa(oe,r,e.key,t);return o.lanes=n,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},o}function NE(e,t){return e===null&&(e=pa(G,null,null,$e)),e.tag=t.tag,e.key=t.key,e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.return=t.return,e.child=t.child,e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.pendingProps=t.pendingProps,e.memoizedProps=t.memoizedProps,e.updateQueue=t.updateQueue,e.memoizedState=t.memoizedState,e.dependencies=t.dependencies,e.mode=t.mode,e.flags=t.flags,e.subtreeFlags=t.subtreeFlags,e.deletions=t.deletions,e.lanes=t.lanes,e.childLanes=t.childLanes,e.alternate=t.alternate,e.actualDuration=t.actualDuration,e.actualStartTime=t.actualStartTime,e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration,e._debugSource=t._debugSource,e._debugOwner=t._debugOwner,e._debugNeedsRemount=t._debugNeedsRemount,e._debugHookTypes=t._debugHookTypes,e}function $D(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.pendingChildren=null,this.current=null,this.pingCache=null,this.finishedWork=null,this.timeoutHandle=em,this.context=null,this.pendingContext=null,this.callbackNode=null,this.callbackPriority=Vn,this.eventTimes=wp(ue),this.expirationTimes=wp(Gt),this.pendingLanes=ue,this.suspendedLanes=ue,this.pingedLanes=ue,this.expiredLanes=ue,this.mutableReadLanes=ue,this.finishedLanes=ue,this.entangledLanes=ue,this.entanglements=wp(ue),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null,this.effectDuration=0,this.passiveEffectDuration=0;{this.memoizedUpdaters=new Set;for(var c=this.pendingUpdatersLaneMap=[],d=0;d<ep;d++)c.push(new Set)}switch(t){case ud:this._debugRootType=n?"hydrateRoot()":"createRoot()";break;case li:this._debugRootType=n?"hydrate()":"render()";break}}function kE(e,t,n,r,o,c,d,y,E,S){var A=new $D(e,t,n,y,E),U=HD(t,c);A.current=U,U.stateNode=A;{var I={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null};U.memoizedState=I}return Mm(U),A}var Ev="18.2.0";function VD(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return Wt(r),{$$typeof:N,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}var bv,Tv;bv=!1,Tv={};function IE(e){if(!e)return fa;var t=ee(e),n=DR(t);if(t.tag===X){var r=t.type;if(so(r))return ug(t,r,n)}return n}function WD(e,t){{var n=ee(e);if(n===void 0){if(typeof e.render=="function")throw new Error("Unable to find node on an unmounted component.");var r=Object.keys(e).join(",");throw new Error("Argument appears to not be a ReactComponent. Keys: "+r)}var o=xv(n);if(o===null)return null;if(o.mode&_n){var c=et(n)||"Component";if(!Tv[c]){Tv[c]=!0;var d=jn;try{qt(o),n.mode&_n?p("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,c):p("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,c)}finally{d?qt(d):gn()}}}return o.stateNode}}function UE(e,t,n,r,o,c,d,y){var E=!1,S=null;return kE(e,t,E,S,n,r,o,c,d)}function HE(e,t,n,r,o,c,d,y,E,S){var A=!0,U=kE(n,r,A,e,o,c,d,y,E);U.context=IE(null);var I=U.current,W=xr(),Q=Ei(I),K=Io(W,Q);return K.callback=t!=null?t:null,fi(I,K,Q),ZM(U,Q,W),U}function ac(e,t,n,r){bb(t,e);var o=t.current,c=xr(),d=Ei(o);zb(d);var y=IE(n);t.context===null?t.context=y:t.pendingContext=y,Eo&&jn!==null&&!bv&&(bv=!0,p(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,et(jn)||"Unknown"));var E=Io(c,d);E.payload={element:e},r=r===void 0?null:r,r!==null&&(typeof r!="function"&&p("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",r),E.callback=r);var S=fi(o,E,d);return S!==null&&(In(S,o,d,c),bd(S,o,d)),d}function pf(e){var t=e.current;if(!t.child)return null;switch(t.child.tag){case ae:return t.child.stateNode;default:return t.child.stateNode}}function QD(e){switch(e.tag){case Z:{var t=e.stateNode;if(xc(t)){var n=qb(t);rD(t,n)}break}case Ie:{jo(function(){var o=$r(e,Qe);if(o!==null){var c=xr();In(o,e,Qe,c)}});var r=Qe;wv(e,r);break}}}function LE(e,t){var n=e.memoizedState;n!==null&&n.dehydrated!==null&&(n.retryLane=nT(n.retryLane,t))}function wv(e,t){LE(e,t);var n=e.alternate;n&&LE(n,t)}function YD(e){if(e.tag===Ie){var t=Vu,n=$r(e,t);if(n!==null){var r=xr();In(n,e,t,r)}wv(e,t)}}function GD(e){if(e.tag===Ie){var t=Ei(e),n=$r(e,t);if(n!==null){var r=xr();In(n,e,t,r)}wv(e,t)}}function jE(e){var t=fb(e);return t===null?null:t.stateNode}var zE=function(e){return null};function qD(e){return zE(e)}var XE=function(e){return!1};function KD(e){return XE(e)}var BE=null,$E=null,VE=null,WE=null,QE=null,YE=null,GE=null,qE=null,KE=null;{var JE=function(e,t,n){var r=t[n],o=Tt(e)?e.slice():st({},e);return n+1===t.length?(Tt(o)?o.splice(r,1):delete o[r],o):(o[r]=JE(e[r],t,n+1),o)},ZE=function(e,t){return JE(e,t,0)},eb=function(e,t,n,r){var o=t[r],c=Tt(e)?e.slice():st({},e);if(r+1===t.length){var d=n[r];c[d]=c[o],Tt(c)?c.splice(o,1):delete c[o]}else c[o]=eb(e[o],t,n,r+1);return c},tb=function(e,t,n){if(t.length!==n.length){M("copyWithRename() expects paths of the same length");return}else for(var r=0;r<n.length-1;r++)if(t[r]!==n[r]){M("copyWithRename() expects paths to be the same except for the deepest key");return}return eb(e,t,n,0)},nb=function(e,t,n,r){if(n>=t.length)return r;var o=t[n],c=Tt(e)?e.slice():st({},e);return c[o]=nb(e[o],t,n+1,r),c},rb=function(e,t,n){return nb(e,t,0,n)},Sv=function(e,t){for(var n=e.memoizedState;n!==null&&t>0;)n=n.next,t--;return n};BE=function(e,t,n,r){var o=Sv(e,t);if(o!==null){var c=rb(o.memoizedState,n,r);o.memoizedState=c,o.baseState=c,e.memoizedProps=st({},e.memoizedProps);var d=$r(e,Qe);d!==null&&In(d,e,Qe,Gt)}},$E=function(e,t,n){var r=Sv(e,t);if(r!==null){var o=ZE(r.memoizedState,n);r.memoizedState=o,r.baseState=o,e.memoizedProps=st({},e.memoizedProps);var c=$r(e,Qe);c!==null&&In(c,e,Qe,Gt)}},VE=function(e,t,n,r){var o=Sv(e,t);if(o!==null){var c=tb(o.memoizedState,n,r);o.memoizedState=c,o.baseState=c,e.memoizedProps=st({},e.memoizedProps);var d=$r(e,Qe);d!==null&&In(d,e,Qe,Gt)}},WE=function(e,t,n){e.pendingProps=rb(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var r=$r(e,Qe);r!==null&&In(r,e,Qe,Gt)},QE=function(e,t){e.pendingProps=ZE(e.memoizedProps,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var n=$r(e,Qe);n!==null&&In(n,e,Qe,Gt)},YE=function(e,t,n){e.pendingProps=tb(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var r=$r(e,Qe);r!==null&&In(r,e,Qe,Gt)},GE=function(e){var t=$r(e,Qe);t!==null&&In(t,e,Qe,Gt)},qE=function(e){zE=e},KE=function(e){XE=e}}function JD(e){var t=xv(e);return t===null?null:t.stateNode}function ZD(e){return null}function eA(){return jn}function tA(e){var t=e.findFiberByHostInstance,n=s.ReactCurrentDispatcher;return Eb({bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:BE,overrideHookStateDeletePath:$E,overrideHookStateRenamePath:VE,overrideProps:WE,overridePropsDeletePath:QE,overridePropsRenamePath:YE,setErrorHandler:qE,setSuspenseHandler:KE,scheduleUpdate:GE,currentDispatcherRef:n,findHostInstanceByFiber:JD,findFiberByHostInstance:t||ZD,findHostInstancesForRefresh:PD,scheduleRefresh:AD,scheduleRoot:CD,setRefreshHandler:DD,getCurrentFiber:eA,reconcilerVersion:Ev})}var ab=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rv(e){this._internalRoot=e}mf.prototype.render=Rv.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw new Error("Cannot update an unmounted root.");{typeof arguments[1]=="function"?p("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):hf(arguments[1])?p("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof arguments[1]<"u"&&p("You passed a second argument to root.render(...) but it only accepts one argument.");var n=t.containerInfo;if(n.nodeType!==nn){var r=jE(t.current);r&&r.parentNode!==n&&p("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.")}}ac(e,t,null,null)},mf.prototype.unmount=Rv.prototype.unmount=function(){typeof arguments[0]=="function"&&p("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vE()&&p("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),jo(function(){ac(null,e,null,null)}),rg(t)}};function nA(e,t){if(!hf(e))throw new Error("createRoot(...): Target container is not a DOM element.");ob(e);var n=!1,r=!1,o="",c=ab;t!=null&&(t.hydrate?M("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof t=="object"&&t!==null&&t.$$typeof===Hn&&p(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.transitionCallbacks!==void 0&&t.transitionCallbacks);var d=UE(e,ud,null,n,r,o,c);td(d.current,e);var y=e.nodeType===nn?e.parentNode:e;return fl(y),new Rv(d)}function mf(e){this._internalRoot=e}function rA(e){e&&_T(e)}mf.prototype.unstable_scheduleHydration=rA;function aA(e,t,n){if(!hf(e))throw new Error("hydrateRoot(...): Target container is not a DOM element.");ob(e),t===void 0&&p("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var r=n!=null?n:null,o=n!=null&&n.hydratedSources||null,c=!1,d=!1,y="",E=ab;n!=null&&(n.unstable_strictMode===!0&&(c=!0),n.identifierPrefix!==void 0&&(y=n.identifierPrefix),n.onRecoverableError!==void 0&&(E=n.onRecoverableError));var S=HE(t,null,e,ud,r,c,d,y,E);if(td(S.current,e),fl(e),o)for(var A=0;A<o.length;A++){var U=o[A];fO(S,U)}return new mf(S)}function hf(e){return!!(e&&(e.nodeType===vr||e.nodeType===zn||e.nodeType===As||!$t))}function oc(e){return!!(e&&(e.nodeType===vr||e.nodeType===zn||e.nodeType===As||e.nodeType===nn&&e.nodeValue===" react-mount-point-unstable "))}function ob(e){e.nodeType===vr&&e.tagName&&e.tagName.toUpperCase()==="BODY"&&p("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."),wl(e)&&(e._reactRootContainer?p("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):p("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}var oA=s.ReactCurrentOwner,ib;ib=function(e){if(e._reactRootContainer&&e.nodeType!==nn){var t=jE(e._reactRootContainer.current);t&&t.parentNode!==e&&p("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var n=!!e._reactRootContainer,r=Ov(e),o=!!(r&&si(r));o&&!n&&p("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),e.nodeType===vr&&e.tagName&&e.tagName.toUpperCase()==="BODY"&&p("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")};function Ov(e){return e?e.nodeType===zn?e.documentElement:e.firstChild:null}function sb(){}function iA(e,t,n,r,o){if(o){if(typeof r=="function"){var c=r;r=function(){var I=pf(d);c.call(I)}}var d=HE(t,r,e,li,null,!1,!1,"",sb);e._reactRootContainer=d,td(d.current,e);var y=e.nodeType===nn?e.parentNode:e;return fl(y),jo(),d}else{for(var E;E=e.lastChild;)e.removeChild(E);if(typeof r=="function"){var S=r;r=function(){var I=pf(A);S.call(I)}}var A=UE(e,li,null,!1,!1,"",sb);e._reactRootContainer=A,td(A.current,e);var U=e.nodeType===nn?e.parentNode:e;return fl(U),jo(function(){ac(t,A,n,r)}),A}}function sA(e,t){e!==null&&typeof e!="function"&&p("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e)}function vf(e,t,n,r,o){ib(n),sA(o===void 0?null:o,"render");var c=n._reactRootContainer,d;if(!c)d=iA(n,t,e,o,r);else{if(d=c,typeof o=="function"){var y=o;o=function(){var E=pf(d);y.call(E)}}ac(t,d,e,o)}return pf(d)}function uA(e){{var t=oA.current;if(t!==null&&t.stateNode!==null){var n=t.stateNode._warnedAboutRefsInRender;n||p("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",bt(t.type)||"A component"),t.stateNode._warnedAboutRefsInRender=!0}}return e==null?null:e.nodeType===vr?e:WD(e,"findDOMNode")}function lA(e,t,n){if(p("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!oc(t))throw new Error("Target container is not a DOM element.");{var r=wl(t)&&t._reactRootContainer===void 0;r&&p("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?")}return vf(null,e,t,!0,n)}function cA(e,t,n){if(p("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!oc(t))throw new Error("Target container is not a DOM element.");{var r=wl(t)&&t._reactRootContainer===void 0;r&&p("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?")}return vf(null,e,t,!1,n)}function dA(e,t,n,r){if(p("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!oc(n))throw new Error("Target container is not a DOM element.");if(e==null||!re(e))throw new Error("parentComponent must be a valid React Component");return vf(e,t,n,!1,r)}function fA(e){if(!oc(e))throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");{var t=wl(e)&&e._reactRootContainer===void 0;t&&p("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?")}if(e._reactRootContainer){{var n=Ov(e),r=n&&!si(n);r&&p("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.")}return jo(function(){vf(null,null,e,!1,function(){e._reactRootContainer=null,rg(e)})}),!0}else{{var o=Ov(e),c=!!(o&&si(o)),d=e.nodeType===vr&&oc(e.parentNode)&&!!e.parentNode._reactRootContainer;c&&p("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",d?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component.")}return!1}}lT(QD),dT(YD),fT(GD),pT(Ha),mT(iT),(typeof Map!="function"||Map.prototype==null||typeof Map.prototype.forEach!="function"||typeof Set!="function"||Set.prototype==null||typeof Set.prototype.clear!="function"||typeof Set.prototype.forEach!="function")&&p("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),bc(hS),Gf(rv,aD,jo);function pA(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!hf(t))throw new Error("Target container is not a DOM element.");return VD(e,t,null,n)}function mA(e,t,n,r){return dA(e,t,n,r)}var Mv={usingClientEntryPoint:!1,Events:[si,tu,nd,Lu,Ta,rv]};function hA(e,t){return Mv.usingClientEntryPoint||p('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),nA(e,t)}function vA(e,t,n){return Mv.usingClientEntryPoint||p('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),aA(e,t,n)}function yA(e){return vE()&&p("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."),jo(e)}var gA=tA({findFiberByHostInstance:as,bundleType:1,version:Ev,rendererPackageName:"react-dom"});if(!gA&&un&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&navigator.userAgent.indexOf("Edge")===-1||navigator.userAgent.indexOf("Firefox")>-1)){var ub=window.location.protocol;/^(https?|file):$/.test(ub)&&console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"+(ub==="file:"?`
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`:""),"font-weight:bold")}reactDom_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv,reactDom_development.createPortal=pA,reactDom_development.createRoot=hA,reactDom_development.findDOMNode=uA,reactDom_development.flushSync=yA,reactDom_development.hydrate=lA,reactDom_development.hydrateRoot=vA,reactDom_development.render=cA,reactDom_development.unmountComponentAtNode=fA,reactDom_development.unstable_batchedUpdates=rv,reactDom_development.unstable_renderSubtreeIntoContainer=mA,reactDom_development.version=Ev,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})();(function(f){f.exports=reactDom_development})(reactDom);var m=reactDom.exports;{var i=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;client.createRoot=function(f,g){i.usingClientEntryPoint=!0;try{return m.createRoot(f,g)}finally{i.usingClientEntryPoint=!1}},client.hydrateRoot=function(f,g,s){i.usingClientEntryPoint=!0;try{return m.hydrateRoot(f,g,s)}finally{i.usingClientEntryPoint=!1}}}const base="",main="_main_v788y_1",classes={main};/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends$2(){return _extends$2=Object.assign?Object.assign.bind():function(f){for(var g=1;g<arguments.length;g++){var s=arguments[g];for(var T in s)Object.prototype.hasOwnProperty.call(s,T)&&(f[T]=s[T])}return f},_extends$2.apply(this,arguments)}var Action;(function(f){f.Pop="POP",f.Push="PUSH",f.Replace="REPLACE"})(Action||(Action={}));const PopStateEventType="popstate";function createHashHistory(f){f===void 0&&(f={});function g(O,M){let{pathname:p="/",search:H="",hash:P=""}=parsePath(O.location.hash.substr(1));return createLocation("",{pathname:p,search:H,hash:P},M.state&&M.state.usr||null,M.state&&M.state.key||"default")}function s(O,M){let p=O.document.querySelector("base"),H="";if(p&&p.getAttribute("href")){let P=O.location.href,X=P.indexOf("#");H=X===-1?P:P.slice(0,X)}return H+"#"+(typeof M=="string"?M:createPath(M))}function T(O,M){warning$1(O.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(M)+")")}return getUrlBasedHistory(g,s,T,f)}function warning$1(f,g){if(!f){typeof console<"u"&&console.warn(g);try{throw new Error(g)}catch{}}}function createKey(){return Math.random().toString(36).substr(2,8)}function getHistoryState(f){return{usr:f.state,key:f.key}}function createLocation(f,g,s,T){return s===void 0&&(s=null),_extends$2({pathname:typeof f=="string"?f:f.pathname,search:"",hash:""},typeof g=="string"?parsePath(g):g,{state:s,key:g&&g.key||T||createKey()})}function createPath(f){let{pathname:g="/",search:s="",hash:T=""}=f;return s&&s!=="?"&&(g+=s.charAt(0)==="?"?s:"?"+s),T&&T!=="#"&&(g+=T.charAt(0)==="#"?T:"#"+T),g}function parsePath(f){let g={};if(f){let s=f.indexOf("#");s>=0&&(g.hash=f.substr(s),f=f.substr(0,s));let T=f.indexOf("?");T>=0&&(g.search=f.substr(T),f=f.substr(0,T)),f&&(g.pathname=f)}return g}function createURL(f){let g=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",s=typeof f=="string"?f:createPath(f);return new URL(s,g)}function getUrlBasedHistory(f,g,s,T){T===void 0&&(T={});let{window:O=document.defaultView,v5Compat:M=!1}=T,p=O.history,H=Action.Pop,P=null;function X(){H=Action.Pop,P&&P({action:H,location:oe.location})}function G(ae,fe){H=Action.Push;let Ne=createLocation(oe.location,ae,fe);s&&s(Ne,ae);let ke=getHistoryState(Ne),Oe=oe.createHref(Ne);try{p.pushState(ke,"",Oe)}catch{O.location.assign(Oe)}M&&P&&P({action:H,location:oe.location})}function Z(ae,fe){H=Action.Replace;let Ne=createLocation(oe.location,ae,fe);s&&s(Ne,ae);let ke=getHistoryState(Ne),Oe=oe.createHref(Ne);p.replaceState(ke,"",Oe),M&&P&&P({action:H,location:oe.location})}let oe={get action(){return H},get location(){return f(O,p)},listen(ae){if(P)throw new Error("A history only accepts one active listener");return O.addEventListener(PopStateEventType,X),P=ae,()=>{O.removeEventListener(PopStateEventType,X),P=null}},createHref(ae){return g(O,ae)},encodeLocation(ae){let fe=createURL(createPath(ae));return _extends$2({},ae,{pathname:fe.pathname,search:fe.search,hash:fe.hash})},push:G,replace:Z,go(ae){return p.go(ae)}};return oe}var ResultType;(function(f){f.data="data",f.deferred="deferred",f.redirect="redirect",f.error="error"})(ResultType||(ResultType={}));function matchRoutes(f,g,s){s===void 0&&(s="/");let T=typeof g=="string"?parsePath(g):g,O=stripBasename(T.pathname||"/",s);if(O==null)return null;let M=flattenRoutes(f);rankRouteBranches(M);let p=null;for(let H=0;p==null&&H<M.length;++H)p=matchRouteBranch(M[H],safelyDecodeURI(O));return p}function flattenRoutes(f,g,s,T){return g===void 0&&(g=[]),s===void 0&&(s=[]),T===void 0&&(T=""),f.forEach((O,M)=>{let p={relativePath:O.path||"",caseSensitive:O.caseSensitive===!0,childrenIndex:M,route:O};p.relativePath.startsWith("/")&&(invariant(p.relativePath.startsWith(T),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+T+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(T.length));let H=joinPaths([T,p.relativePath]),P=s.concat(p);O.children&&O.children.length>0&&(invariant(O.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+H+'".')),flattenRoutes(O.children,g,P,H)),!(O.path==null&&!O.index)&&g.push({path:H,score:computeScore(H,O.index),routesMeta:P})}),g}function rankRouteBranches(f){f.sort((g,s)=>g.score!==s.score?s.score-g.score:compareIndexes(g.routesMeta.map(T=>T.childrenIndex),s.routesMeta.map(T=>T.childrenIndex)))}const paramRe=/^:\w+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=f=>f==="*";function computeScore(f,g){let s=f.split("/"),T=s.length;return s.some(isSplat)&&(T+=splatPenalty),g&&(T+=indexRouteValue),s.filter(O=>!isSplat(O)).reduce((O,M)=>O+(paramRe.test(M)?dynamicSegmentValue:M===""?emptySegmentValue:staticSegmentValue),T)}function compareIndexes(f,g){return f.length===g.length&&f.slice(0,-1).every((T,O)=>T===g[O])?f[f.length-1]-g[g.length-1]:0}function matchRouteBranch(f,g){let{routesMeta:s}=f,T={},O="/",M=[];for(let p=0;p<s.length;++p){let H=s[p],P=p===s.length-1,X=O==="/"?g:g.slice(O.length)||"/",G=matchPath({path:H.relativePath,caseSensitive:H.caseSensitive,end:P},X);if(!G)return null;Object.assign(T,G.params);let Z=H.route;M.push({params:T,pathname:joinPaths([O,G.pathname]),pathnameBase:normalizePathname(joinPaths([O,G.pathnameBase])),route:Z}),G.pathnameBase!=="/"&&(O=joinPaths([O,G.pathnameBase]))}return M}function matchPath(f,g){typeof f=="string"&&(f={path:f,caseSensitive:!1,end:!0});let[s,T]=compilePath(f.path,f.caseSensitive,f.end),O=g.match(s);if(!O)return null;let M=O[0],p=M.replace(/(.)\/+$/,"$1"),H=O.slice(1);return{params:T.reduce((X,G,Z)=>{if(G==="*"){let oe=H[Z]||"";p=M.slice(0,M.length-oe.length).replace(/(.)\/+$/,"$1")}return X[G]=safelyDecodeURIComponent(H[Z]||"",G),X},{}),pathname:M,pathnameBase:p,pattern:f}}function compilePath(f,g,s){g===void 0&&(g=!1),s===void 0&&(s=!0),warning(f==="*"||!f.endsWith("*")||f.endsWith("/*"),'Route path "'+f+'" will be treated as if it were '+('"'+f.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+f.replace(/\*$/,"/*")+'".'));let T=[],O="^"+f.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(p,H)=>(T.push(H),"([^\\/]+)"));return f.endsWith("*")?(T.push("*"),O+=f==="*"||f==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?O+="\\/*$":f!==""&&f!=="/"&&(O+="(?:(?=\\/|$))"),[new RegExp(O,g?void 0:"i"),T]}function safelyDecodeURI(f){try{return decodeURI(f)}catch(g){return warning(!1,'The URL path "'+f+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+g+").")),f}}function safelyDecodeURIComponent(f,g){try{return decodeURIComponent(f)}catch(s){return warning(!1,'The value for the URL param "'+g+'" will not be decoded because'+(' the string "'+f+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+s+").")),f}}function stripBasename(f,g){if(g==="/")return f;if(!f.toLowerCase().startsWith(g.toLowerCase()))return null;let s=g.endsWith("/")?g.length-1:g.length,T=f.charAt(s);return T&&T!=="/"?null:f.slice(s)||"/"}function invariant(f,g){if(f===!1||f===null||typeof f>"u")throw new Error(g)}function warning(f,g){if(!f){typeof console<"u"&&console.warn(g);try{throw new Error(g)}catch{}}}function resolvePath(f,g){g===void 0&&(g="/");let{pathname:s,search:T="",hash:O=""}=typeof f=="string"?parsePath(f):f;return{pathname:s?s.startsWith("/")?s:resolvePathname(s,g):g,search:normalizeSearch(T),hash:normalizeHash(O)}}function resolvePathname(f,g){let s=g.replace(/\/+$/,"").split("/");return f.split("/").forEach(O=>{O===".."?s.length>1&&s.pop():O!=="."&&s.push(O)}),s.length>1?s.join("/"):"/"}function getInvalidPathError(f,g,s,T){return"Cannot include a '"+f+"' character in a manually specified "+("`to."+g+"` field ["+JSON.stringify(T)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(f){return f.filter((g,s)=>s===0||g.route.path&&g.route.path.length>0)}function resolveTo(f,g,s,T){T===void 0&&(T=!1);let O;typeof f=="string"?O=parsePath(f):(O=_extends$2({},f),invariant(!O.pathname||!O.pathname.includes("?"),getInvalidPathError("?","pathname","search",O)),invariant(!O.pathname||!O.pathname.includes("#"),getInvalidPathError("#","pathname","hash",O)),invariant(!O.search||!O.search.includes("#"),getInvalidPathError("#","search","hash",O)));let M=f===""||O.pathname==="",p=M?"/":O.pathname,H;if(T||p==null)H=s;else{let Z=g.length-1;if(p.startsWith("..")){let oe=p.split("/");for(;oe[0]==="..";)oe.shift(),Z-=1;O.pathname=oe.join("/")}H=Z>=0?g[Z]:"/"}let P=resolvePath(O,H),X=p&&p!=="/"&&p.endsWith("/"),G=(M||p===".")&&s.endsWith("/");return!P.pathname.endsWith("/")&&(X||G)&&(P.pathname+="/"),P}const joinPaths=f=>f.join("/").replace(/\/\/+/g,"/"),normalizePathname=f=>f.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=f=>!f||f==="?"?"":f.startsWith("?")?f:"?"+f,normalizeHash=f=>!f||f==="#"?"":f.startsWith("#")?f:"#"+f;class ErrorResponse{constructor(g,s,T){this.status=g,this.statusText=s||"",this.data=T}}function isRouteErrorResponse(f){return f instanceof ErrorResponse}const validActionMethods=new Set(["POST","PUT","PATCH","DELETE"]);[...validActionMethods];var jsxDevRuntime={exports:{}},reactJsxDevRuntime_development={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var f=react.exports,g=Symbol.for("react.element"),s=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),H=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),fe=Symbol.iterator,Ne="@@iterator";function ke(N){if(N===null||typeof N!="object")return null;var ie=fe&&N[fe]||N[Ne];return typeof ie=="function"?ie:null}var Oe=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function We(N){{for(var ie=arguments.length,_e=new Array(ie>1?ie-1:0),He=1;He<ie;He++)_e[He-1]=arguments[He];Pe("error",N,_e)}}function Pe(N,ie,_e){{var He=Oe.ReactDebugCurrentFrame,rt=He.getStackAddendum();rt!==""&&(ie+="%s",_e=_e.concat([rt]));var C=_e.map(function(Fe){return String(Fe)});C.unshift("Warning: "+ie),Function.prototype.apply.call(console[N],console,C)}}var ot=!1,Ie=!1,It=!1,Ge=!1,sr=!1,Un;Un=Symbol.for("react.module.reference");function F(N){return!!(typeof N=="string"||typeof N=="function"||N===T||N===M||sr||N===O||N===X||N===G||Ge||N===ae||ot||Ie||It||typeof N=="object"&&N!==null&&(N.$$typeof===oe||N.$$typeof===Z||N.$$typeof===p||N.$$typeof===H||N.$$typeof===P||N.$$typeof===Un||N.getModuleId!==void 0))}function Ht(N,ie,_e){var He=N.displayName;if(He)return He;var rt=ie.displayName||ie.name||"";return rt!==""?_e+"("+rt+")":_e}function Sr(N){return N.displayName||"Context"}function it(N){if(N==null)return null;if(typeof N.tag=="number"&&We("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof N=="function")return N.displayName||N.name||null;if(typeof N=="string")return N;switch(N){case T:return"Fragment";case s:return"Portal";case M:return"Profiler";case O:return"StrictMode";case X:return"Suspense";case G:return"SuspenseList"}if(typeof N=="object")switch(N.$$typeof){case H:var ie=N;return Sr(ie)+".Consumer";case p:var _e=N;return Sr(_e._context)+".Provider";case P:return Ht(N,N.render,"ForwardRef");case Z:var He=N.displayName||null;return He!==null?He:it(N.type)||"Memo";case oe:{var rt=N,C=rt._payload,Fe=rt._init;try{return it(Fe(C))}catch{return null}}}return null}var yt=Object.assign,en=0,tn,tt,mn,Qn,hn,ur,$t;function sn(){}sn.__reactDisabledLog=!0;function lr(){{if(en===0){tn=console.log,tt=console.info,mn=console.warn,Qn=console.error,hn=console.group,ur=console.groupCollapsed,$t=console.groupEnd;var N={configurable:!0,enumerable:!0,value:sn,writable:!0};Object.defineProperties(console,{info:N,log:N,warn:N,error:N,group:N,groupCollapsed:N,groupEnd:N})}en++}}function ha(){{if(en--,en===0){var N={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:yt({},N,{value:tn}),info:yt({},N,{value:tt}),warn:yt({},N,{value:mn}),error:yt({},N,{value:Qn}),group:yt({},N,{value:hn}),groupCollapsed:yt({},N,{value:ur}),groupEnd:yt({},N,{value:$t})})}en<0&&We("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Yr=Oe.ReactCurrentDispatcher,Gr;function kr(N,ie,_e){{if(Gr===void 0)try{throw Error()}catch(rt){var He=rt.stack.trim().match(/\n( *(at )?)/);Gr=He&&He[1]||""}return`
`+Gr+N}}var bn=!1,cr;{var dr=typeof WeakMap=="function"?WeakMap:Map;cr=new dr}function fr(N,ie){if(!N||bn)return"";{var _e=cr.get(N);if(_e!==void 0)return _e}var He;bn=!0;var rt=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var C;C=Yr.current,Yr.current=null,lr();try{if(ie){var Fe=function(){throw Error()};if(Object.defineProperty(Fe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Fe,[])}catch(Mr){He=Mr}Reflect.construct(N,[],Fe)}else{try{Fe.call()}catch(Mr){He=Mr}N.call(Fe.prototype)}}else{try{throw Error()}catch(Mr){He=Mr}N()}}catch(Mr){if(Mr&&He&&typeof Mr.stack=="string"){for(var Ze=Mr.stack.split(`
`),Ct=He.stack.split(`
`),Mt=Ze.length-1,lt=Ct.length-1;Mt>=1&&lt>=0&&Ze[Mt]!==Ct[lt];)lt--;for(;Mt>=1&&lt>=0;Mt--,lt--)if(Ze[Mt]!==Ct[lt]){if(Mt!==1||lt!==1)do if(Mt--,lt--,lt<0||Ze[Mt]!==Ct[lt]){var Ln=`
`+Ze[Mt].replace(" at new "," at ");return N.displayName&&Ln.includes("<anonymous>")&&(Ln=Ln.replace("<anonymous>",N.displayName)),typeof N=="function"&&cr.set(N,Ln),Ln}while(Mt>=1&&lt>=0);break}}}finally{bn=!1,Yr.current=C,ha(),Error.prepareStackTrace=rt}var _t=N?N.displayName||N.name:"",yn=_t?kr(_t):"";return typeof N=="function"&&cr.set(N,yn),yn}function un(N,ie,_e){return fr(N,!1)}function Tn(N){var ie=N.prototype;return!!(ie&&ie.isReactComponent)}function vn(N,ie,_e){if(N==null)return"";if(typeof N=="function")return fr(N,Tn(N));if(typeof N=="string")return kr(N);switch(N){case X:return kr("Suspense");case G:return kr("SuspenseList")}if(typeof N=="object")switch(N.$$typeof){case P:return un(N.render);case Z:return vn(N.type,ie,_e);case oe:{var He=N,rt=He._payload,C=He._init;try{return vn(C(rt),ie,_e)}catch{}}}return""}var Vt=Object.prototype.hasOwnProperty,nt={},vt=Oe.ReactDebugCurrentFrame;function Wt(N){if(N){var ie=N._owner,_e=vn(N.type,N._source,ie?ie.type:null);vt.setExtraStackFrame(_e)}else vt.setExtraStackFrame(null)}function wn(N,ie,_e,He,rt){{var C=Function.call.bind(Vt);for(var Fe in N)if(C(N,Fe)){var Ze=void 0;try{if(typeof N[Fe]!="function"){var Ct=Error((He||"React class")+": "+_e+" type `"+Fe+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof N[Fe]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Ct.name="Invariant Violation",Ct}Ze=N[Fe](ie,Fe,He,_e,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Mt){Ze=Mt}Ze&&!(Ze instanceof Error)&&(Wt(rt),We("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",He||"React class",_e,Fe,typeof Ze),Wt(null)),Ze instanceof Error&&!(Ze.message in nt)&&(nt[Ze.message]=!0,Wt(rt),We("Failed %s type: %s",_e,Ze.message),Wt(null))}}}var $=Array.isArray;function Qt(N){return $(N)}function Sn(N){{var ie=typeof Symbol=="function"&&Symbol.toStringTag,_e=ie&&N[Symbol.toStringTag]||N.constructor.name||"Object";return _e}}function Yn(N){try{return Rn(N),!1}catch{return!0}}function Rn(N){return""+N}function Rr(N){if(Yn(N))return We("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Sn(N)),Rn(N)}var Lt=Oe.ReactCurrentOwner,Or={key:!0,ref:!0,__self:!0,__source:!0},Ir,qr,ve;ve={};function xe(N){if(Vt.call(N,"ref")){var ie=Object.getOwnPropertyDescriptor(N,"ref").get;if(ie&&ie.isReactWarning)return!1}return N.ref!==void 0}function Je(N){if(Vt.call(N,"key")){var ie=Object.getOwnPropertyDescriptor(N,"key").get;if(ie&&ie.isReactWarning)return!1}return N.key!==void 0}function Ot(N,ie){if(typeof N.ref=="string"&&Lt.current&&ie&&Lt.current.stateNode!==ie){var _e=it(Lt.current.type);ve[_e]||(We('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',it(Lt.current.type),N.ref),ve[_e]=!0)}}function gt(N,ie){{var _e=function(){Ir||(Ir=!0,We("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",ie))};_e.isReactWarning=!0,Object.defineProperty(N,"key",{get:_e,configurable:!0})}}function ln(N,ie){{var _e=function(){qr||(qr=!0,We("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",ie))};_e.isReactWarning=!0,Object.defineProperty(N,"ref",{get:_e,configurable:!0})}}var Zt=function(N,ie,_e,He,rt,C,Fe){var Ze={$$typeof:g,type:N,key:ie,ref:_e,props:Fe,_owner:C};return Ze._store={},Object.defineProperty(Ze._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(Ze,"_self",{configurable:!1,enumerable:!1,writable:!1,value:He}),Object.defineProperty(Ze,"_source",{configurable:!1,enumerable:!1,writable:!1,value:rt}),Object.freeze&&(Object.freeze(Ze.props),Object.freeze(Ze)),Ze};function pr(N,ie,_e,He,rt){{var C,Fe={},Ze=null,Ct=null;_e!==void 0&&(Rr(_e),Ze=""+_e),Je(ie)&&(Rr(ie.key),Ze=""+ie.key),xe(ie)&&(Ct=ie.ref,Ot(ie,rt));for(C in ie)Vt.call(ie,C)&&!Or.hasOwnProperty(C)&&(Fe[C]=ie[C]);if(N&&N.defaultProps){var Mt=N.defaultProps;for(C in Mt)Fe[C]===void 0&&(Fe[C]=Mt[C])}if(Ze||Ct){var lt=typeof N=="function"?N.displayName||N.name||"Unknown":N;Ze&&gt(Fe,lt),Ct&&ln(Fe,lt)}return Zt(N,Ze,Ct,rt,He,Lt.current,Fe)}}var xt=Oe.ReactCurrentOwner,me=Oe.ReactDebugCurrentFrame;function ce(N){if(N){var ie=N._owner,_e=vn(N.type,N._source,ie?ie.type:null);me.setExtraStackFrame(_e)}else me.setExtraStackFrame(null)}var Xt;Xt=!1;function va(N){return typeof N=="object"&&N!==null&&N.$$typeof===g}function Kr(){{if(xt.current){var N=it(xt.current.type);if(N)return`

Check the render method of \``+N+"`."}return""}}function yo(N){{if(N!==void 0){var ie=N.fileName.replace(/^.*[\\\/]/,""),_e=N.lineNumber;return`

Check your code at `+ie+":"+_e+"."}return""}}var Bo={};function wi(N){{var ie=Kr();if(!ie){var _e=typeof N=="string"?N:N.displayName||N.name;_e&&(ie=`

Check the top-level render call using <`+_e+">.")}return ie}}function ya(N,ie){{if(!N._store||N._store.validated||N.key!=null)return;N._store.validated=!0;var _e=wi(ie);if(Bo[_e])return;Bo[_e]=!0;var He="";N&&N._owner&&N._owner!==xt.current&&(He=" It was passed a child from "+it(N._owner.type)+"."),ce(N),We('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',_e,He),ce(null)}}function ga(N,ie){{if(typeof N!="object")return;if(Qt(N))for(var _e=0;_e<N.length;_e++){var He=N[_e];va(He)&&ya(He,ie)}else if(va(N))N._store&&(N._store.validated=!0);else if(N){var rt=ke(N);if(typeof rt=="function"&&rt!==N.entries)for(var C=rt.call(N),Fe;!(Fe=C.next()).done;)va(Fe.value)&&ya(Fe.value,ie)}}}function Ur(N){{var ie=N.type;if(ie==null||typeof ie=="string")return;var _e;if(typeof ie=="function")_e=ie.propTypes;else if(typeof ie=="object"&&(ie.$$typeof===P||ie.$$typeof===Z))_e=ie.propTypes;else return;if(_e){var He=it(ie);wn(_e,N.props,"prop",He,N)}else if(ie.PropTypes!==void 0&&!Xt){Xt=!0;var rt=it(ie);We("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",rt||"Unknown")}typeof ie.getDefaultProps=="function"&&!ie.getDefaultProps.isReactClassApproved&&We("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Jr(N){{for(var ie=Object.keys(N.props),_e=0;_e<ie.length;_e++){var He=ie[_e];if(He!=="children"&&He!=="key"){ce(N),We("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",He),ce(null);break}}N.ref!==null&&(ce(N),We("Invalid attribute `ref` supplied to `React.Fragment`."),ce(null))}}function mr(N,ie,_e,He,rt,C){{var Fe=F(N);if(!Fe){var Ze="";(N===void 0||typeof N=="object"&&N!==null&&Object.keys(N).length===0)&&(Ze+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Ct=yo(rt);Ct?Ze+=Ct:Ze+=Kr();var Mt;N===null?Mt="null":Qt(N)?Mt="array":N!==void 0&&N.$$typeof===g?(Mt="<"+(it(N.type)||"Unknown")+" />",Ze=" Did you accidentally export a JSX literal instead of a component?"):Mt=typeof N,We("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",Mt,Ze)}var lt=pr(N,ie,_e,rt,C);if(lt==null)return lt;if(Fe){var Ln=ie.children;if(Ln!==void 0)if(He)if(Qt(Ln)){for(var _t=0;_t<Ln.length;_t++)ga(Ln[_t],N);Object.freeze&&Object.freeze(Ln)}else We("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ga(Ln,N)}return N===T?Jr(lt):Ur(lt),lt}}var Hn=mr;reactJsxDevRuntime_development.Fragment=T,reactJsxDevRuntime_development.jsxDEV=Hn})();(function(f){f.exports=reactJsxDevRuntime_development})(jsxDevRuntime);const Fragment=jsxDevRuntime.exports.Fragment,jsxDEV=jsxDevRuntime.exports.jsxDEV;var _jsxFileName$2="/home/runner/work/damienclarke.me/damienclarke.me/node_modules/react-router/dist/index.js";function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(f){for(var g=1;g<arguments.length;g++){var s=arguments[g];for(var T in s)Object.prototype.hasOwnProperty.call(s,T)&&(f[T]=s[T])}return f},_extends$1.apply(this,arguments)}function isPolyfill(f,g){return f===g&&(f!==0||1/f===1/g)||f!==f&&g!==g}const is=typeof Object.is=="function"?Object.is:isPolyfill,{useState,useEffect,useLayoutEffect,useDebugValue}=React$1;let didWarnOld18Alpha=!1,didWarnUncachedGetSnapshot=!1;function useSyncExternalStore$2(f,g,s){didWarnOld18Alpha||"startTransition"in React$1&&(didWarnOld18Alpha=!0,console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));const T=g();if(!didWarnUncachedGetSnapshot){const p=g();is(T,p)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),didWarnUncachedGetSnapshot=!0)}const[{inst:O},M]=useState({inst:{value:T,getSnapshot:g}});return useLayoutEffect(()=>{O.value=T,O.getSnapshot=g,checkIfSnapshotChanged(O)&&M({inst:O})},[f,T,g]),useEffect(()=>(checkIfSnapshotChanged(O)&&M({inst:O}),f(()=>{checkIfSnapshotChanged(O)&&M({inst:O})})),[f]),useDebugValue(T),T}function checkIfSnapshotChanged(f){const g=f.getSnapshot,s=f.value;try{const T=g();return!is(s,T)}catch{return!0}}function useSyncExternalStore$1(f,g,s){return g()}const canUseDOM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",isServerEnvironment=!canUseDOM,shim=isServerEnvironment?useSyncExternalStore$1:useSyncExternalStore$2;"useSyncExternalStore"in React$1&&(f=>f.useSyncExternalStore)(React$1);const DataStaticRouterContext=react.exports.createContext(null);DataStaticRouterContext.displayName="DataStaticRouterContext";const DataRouterContext=react.exports.createContext(null);DataRouterContext.displayName="DataRouter";const DataRouterStateContext=react.exports.createContext(null);DataRouterStateContext.displayName="DataRouterState";const AwaitContext=react.exports.createContext(null);AwaitContext.displayName="Await";const NavigationContext=react.exports.createContext(null);NavigationContext.displayName="Navigation";const LocationContext=react.exports.createContext(null);LocationContext.displayName="Location";const RouteContext=react.exports.createContext({outlet:null,matches:[]});RouteContext.displayName="Route";const RouteErrorContext=react.exports.createContext(null);RouteErrorContext.displayName="RouteError";function useHref(f,g){let{relative:s}=g===void 0?{}:g;useInRouterContext()||invariant(!1,"useHref() may be used only in the context of a <Router> component.");let{basename:T,navigator:O}=react.exports.useContext(NavigationContext),{hash:M,pathname:p,search:H}=useResolvedPath(f,{relative:s}),P=p;return T!=="/"&&(P=p==="/"?T:joinPaths([T,p])),O.createHref({pathname:P,search:H,hash:M})}function useInRouterContext(){return react.exports.useContext(LocationContext)!=null}function useLocation(){return useInRouterContext()||invariant(!1,"useLocation() may be used only in the context of a <Router> component."),react.exports.useContext(LocationContext).location}function useNavigate(){useInRouterContext()||invariant(!1,"useNavigate() may be used only in the context of a <Router> component.");let{basename:f,navigator:g}=react.exports.useContext(NavigationContext),{matches:s}=react.exports.useContext(RouteContext),{pathname:T}=useLocation(),O=JSON.stringify(getPathContributingMatches(s).map(H=>H.pathnameBase)),M=react.exports.useRef(!1);return react.exports.useEffect(()=>{M.current=!0}),react.exports.useCallback(function(H,P){if(P===void 0&&(P={}),warning(M.current,"You should call navigate() in a React.useEffect(), not when your component is first rendered."),!M.current)return;if(typeof H=="number"){g.go(H);return}let X=resolveTo(H,JSON.parse(O),T,P.relative==="path");f!=="/"&&(X.pathname=X.pathname==="/"?f:joinPaths([f,X.pathname])),(P.replace?g.replace:g.push)(X,P.state,P)},[f,g,O,T])}function useResolvedPath(f,g){let{relative:s}=g===void 0?{}:g,{matches:T}=react.exports.useContext(RouteContext),{pathname:O}=useLocation(),M=JSON.stringify(getPathContributingMatches(T).map(p=>p.pathnameBase));return react.exports.useMemo(()=>resolveTo(f,JSON.parse(M),O,s==="path"),[f,M,O,s])}function useRoutes(f,g){useInRouterContext()||invariant(!1,"useRoutes() may be used only in the context of a <Router> component.");let s=react.exports.useContext(DataRouterStateContext),{matches:T}=react.exports.useContext(RouteContext),O=T[T.length-1],M=O?O.params:{},p=O?O.pathname:"/",H=O?O.pathnameBase:"/",P=O&&O.route;{let ke=P&&P.path||"";warningOnce(p,!P||ke.endsWith("*"),"You rendered descendant <Routes> (or called `useRoutes()`) at "+('"'+p+'" (under <Route path="'+ke+'">) but the ')+`parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

`+('Please change the parent <Route path="'+ke+'"> to <Route ')+('path="'+(ke==="/"?"*":ke+"/*")+'">.'))}let X=useLocation(),G;if(g){var Z;let ke=typeof g=="string"?parsePath(g):g;H==="/"||((Z=ke.pathname)==null?void 0:Z.startsWith(H))||invariant(!1,"When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was "+('matched by all parent routes. The current pathname base is "'+H+'" ')+('but pathname "'+ke.pathname+'" was given in the `location` prop.')),G=ke}else G=X;let oe=G.pathname||"/",ae=H==="/"?oe:oe.slice(H.length)||"/",fe=matchRoutes(f,{pathname:ae});warning(P||fe!=null,'No routes matched location "'+G.pathname+G.search+G.hash+'" '),warning(fe==null||fe[fe.length-1].route.element!==void 0,'Matched leaf route at location "'+G.pathname+G.search+G.hash+'" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');let Ne=_renderMatches(fe&&fe.map(ke=>Object.assign({},ke,{params:Object.assign({},M,ke.params),pathname:joinPaths([H,ke.pathname]),pathnameBase:ke.pathnameBase==="/"?H:joinPaths([H,ke.pathnameBase])})),T,s||void 0);return g&&Ne?jsxDEV(LocationContext.Provider,{value:{location:_extends$1({pathname:"/",search:"",hash:"",state:null,key:"default"},G),navigationType:Action.Pop},children:Ne},void 0,!1,{fileName:_jsxFileName$2,lineNumber:553,columnNumber:25},this):Ne}function DefaultErrorElement(){let f=useRouteError(),g=isRouteErrorResponse(f)?f.status+" "+f.statusText:f instanceof Error?f.message:JSON.stringify(f),s=f instanceof Error?f.stack:null,T="rgba(200,200,200, 0.5)",O={padding:"0.5rem",backgroundColor:T},M={padding:"2px 4px",backgroundColor:T};return jsxDEV(Fragment,{children:[jsxDEV("h2",{children:"Unhandled Thrown Error!"},void 0,!1,{fileName:_jsxFileName$2,lineNumber:583,columnNumber:78},this),jsxDEV("h3",{style:{fontStyle:"italic"},children:g},void 0,!1,{fileName:_jsxFileName$2,lineNumber:583,columnNumber:151},this),s?jsxDEV("pre",{style:O,children:s},void 0,!1,{fileName:_jsxFileName$2,lineNumber:587,columnNumber:37},this):null,jsxDEV("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"},void 0,!1,{fileName:_jsxFileName$2,lineNumber:589,columnNumber:34},this),jsxDEV("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",jsxDEV("code",{style:M,children:"errorElement"},void 0,!1,{fileName:_jsxFileName$2,lineNumber:589,columnNumber:265},this)," props on\xA0",jsxDEV("code",{style:M,children:"<Route>"},void 0,!1,{fileName:_jsxFileName$2,lineNumber:591,columnNumber:53},this)]},void 0,!0,{fileName:_jsxFileName$2,lineNumber:589,columnNumber:122},this)]},void 0,!0)}class RenderErrorBoundary extends react.exports.Component{constructor(g){super(g),this.state={location:g.location,error:g.error}}static getDerivedStateFromError(g){return{error:g}}static getDerivedStateFromProps(g,s){return s.location!==g.location?{error:g.error,location:g.location}:{error:g.error||s.error,location:s.location}}componentDidCatch(g,s){console.error("React Router caught the following error during render",g,s)}render(){return this.state.error?jsxDEV(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component},void 0,!1,{fileName:_jsxFileName$2,lineNumber:642,columnNumber:44},this):this.props.children}}function RenderedRoute(f){let{routeContext:g,match:s,children:T}=f,O=react.exports.useContext(DataStaticRouterContext);return O&&s.route.errorElement&&(O._deepestRenderedBoundaryId=s.route.id),jsxDEV(RouteContext.Provider,{value:g,children:T},void 0,!1,{fileName:_jsxFileName$2,lineNumber:663,columnNumber:23},this)}function _renderMatches(f,g,s){if(g===void 0&&(g=[]),f==null)if(s!=null&&s.errors)f=s.matches;else return null;let T=f,O=s==null?void 0:s.errors;if(O!=null){let M=T.findIndex(p=>p.route.id&&(O==null?void 0:O[p.route.id]));M>=0||invariant(!1,"Could not find a matching route for the current errors: "+O),T=T.slice(0,Math.min(T.length,M+1))}return T.reduceRight((M,p,H)=>{let P=p.route.id?O==null?void 0:O[p.route.id]:null,X=s?p.route.errorElement||jsxDEV(DefaultErrorElement,{},void 0,!1,{fileName:_jsxFileName$2,lineNumber:696,columnNumber:83},this):null,G=()=>jsxDEV(RenderedRoute,{match:p,routeContext:{outlet:M,matches:g.concat(T.slice(0,H+1))},children:P?X:p.route.element!==void 0?p.route.element:M},void 0,!1,{fileName:_jsxFileName$2,lineNumber:698,columnNumber:42},this);return s&&(p.route.errorElement||H===0)?jsxDEV(RenderErrorBoundary,{location:s.location,component:X,error:P,children:G()},void 0,!1,{fileName:_jsxFileName$2,lineNumber:709,columnNumber:88},this):G()},null)}var DataRouterHook$1;(function(f){f.UseRevalidator="useRevalidator"})(DataRouterHook$1||(DataRouterHook$1={}));var DataRouterStateHook$1;(function(f){f.UseLoaderData="useLoaderData",f.UseActionData="useActionData",f.UseRouteError="useRouteError",f.UseNavigation="useNavigation",f.UseRouteLoaderData="useRouteLoaderData",f.UseMatches="useMatches",f.UseRevalidator="useRevalidator"})(DataRouterStateHook$1||(DataRouterStateHook$1={}));function getDataRouterConsoleError$1(f){return f+" must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router."}function useDataRouterState(f){let g=react.exports.useContext(DataRouterStateContext);return g||invariant(!1,getDataRouterConsoleError$1(f)),g}function useRouteError(){var f;let g=react.exports.useContext(RouteErrorContext),s=useDataRouterState(DataRouterStateHook$1.UseRouteError),T=react.exports.useContext(RouteContext),O=T.matches[T.matches.length-1];return g||(T||invariant(!1,"useRouteError must be used inside a RouteContext"),O.route.id||invariant(!1,'useRouteError can only be used on routes that contain a unique "id"'),(f=s.errors)==null?void 0:f[O.route.id])}const alreadyWarned={};function warningOnce(f,g,s){!g&&!alreadyWarned[f]&&(alreadyWarned[f]=!0,warning(!1,s))}function Route(f){invariant(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Router(f){let{basename:g="/",children:s=null,location:T,navigationType:O=Action.Pop,navigator:M,static:p=!1}=f;useInRouterContext()&&invariant(!1,"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let H=g.replace(/^\/*/,"/"),P=react.exports.useMemo(()=>({basename:H,navigator:M,static:p}),[H,M,p]);typeof T=="string"&&(T=parsePath(T));let{pathname:X="/",search:G="",hash:Z="",state:oe=null,key:ae="default"}=T,fe=react.exports.useMemo(()=>{let Ne=stripBasename(X,H);return Ne==null?null:{pathname:Ne,search:G,hash:Z,state:oe,key:ae}},[H,X,G,Z,oe,ae]);return warning(fe!=null,'<Router basename="'+H+'"> is not able to match the URL '+('"'+X+G+Z+'" because it does not start with the ')+"basename, so the <Router> won't render anything."),fe==null?null:jsxDEV(NavigationContext.Provider,{value:P,children:jsxDEV(LocationContext.Provider,{children:s,value:{location:fe,navigationType:O}},void 0,!1,{fileName:_jsxFileName$2,lineNumber:1082,columnNumber:19},this)},void 0,!1,{fileName:_jsxFileName$2,lineNumber:1080,columnNumber:23},this)}function Routes(f){let{children:g,location:s}=f,T=react.exports.useContext(DataRouterContext),O=T&&!g?T.router.routes:createRoutesFromChildren(g);return useRoutes(O,s)}var AwaitRenderStatus;(function(f){f[f.pending=0]="pending",f[f.success=1]="success",f[f.error=2]="error"})(AwaitRenderStatus||(AwaitRenderStatus={}));new Promise(()=>{});function createRoutesFromChildren(f,g){g===void 0&&(g=[]);let s=[];return react.exports.Children.forEach(f,(T,O)=>{if(!react.exports.isValidElement(T))return;if(T.type===react.exports.Fragment){s.push.apply(s,createRoutesFromChildren(T.props.children,g));return}T.type!==Route&&invariant(!1,"["+(typeof T.type=="string"?T.type:T.type.name)+"] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"),!T.props.index||!T.props.children||invariant(!1,"An index route cannot have child routes.");let M=[...g,O],p={id:T.props.id||M.join("-"),caseSensitive:T.props.caseSensitive,element:T.props.element,index:T.props.index,path:T.props.path,loader:T.props.loader,action:T.props.action,errorElement:T.props.errorElement,hasErrorBoundary:T.props.errorElement!=null,shouldRevalidate:T.props.shouldRevalidate,handle:T.props.handle};T.props.children&&(p.children=createRoutesFromChildren(T.props.children,M)),s.push(p)}),s}var _jsxFileName$1="/home/runner/work/damienclarke.me/damienclarke.me/node_modules/react-router-dom/dist/index.js";function _extends(){return _extends=Object.assign?Object.assign.bind():function(f){for(var g=1;g<arguments.length;g++){var s=arguments[g];for(var T in s)Object.prototype.hasOwnProperty.call(s,T)&&(f[T]=s[T])}return f},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(f,g){if(f==null)return{};var s={},T=Object.keys(f),O,M;for(M=0;M<T.length;M++)O=T[M],!(g.indexOf(O)>=0)&&(s[O]=f[O]);return s}const defaultMethod="get",defaultEncType="application/x-www-form-urlencoded";function isHtmlElement(f){return f!=null&&typeof f.tagName=="string"}function isButtonElement(f){return isHtmlElement(f)&&f.tagName.toLowerCase()==="button"}function isFormElement(f){return isHtmlElement(f)&&f.tagName.toLowerCase()==="form"}function isInputElement(f){return isHtmlElement(f)&&f.tagName.toLowerCase()==="input"}function isModifiedEvent(f){return!!(f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)}function shouldProcessLinkClick(f,g){return f.button===0&&(!g||g==="_self")&&!isModifiedEvent(f)}function getFormSubmissionInfo(f,g,s){let T,O,M,p;if(isFormElement(f)){let G=s.submissionTrigger;T=s.method||f.getAttribute("method")||defaultMethod,O=s.action||f.getAttribute("action")||g,M=s.encType||f.getAttribute("enctype")||defaultEncType,p=new FormData(f),G&&G.name&&p.append(G.name,G.value)}else if(isButtonElement(f)||isInputElement(f)&&(f.type==="submit"||f.type==="image")){let G=f.form;if(G==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');T=s.method||f.getAttribute("formmethod")||G.getAttribute("method")||defaultMethod,O=s.action||f.getAttribute("formaction")||G.getAttribute("action")||g,M=s.encType||f.getAttribute("formenctype")||G.getAttribute("enctype")||defaultEncType,p=new FormData(G),f.name&&p.append(f.name,f.value)}else{if(isHtmlElement(f))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(T=s.method||defaultMethod,O=s.action||g,M=s.encType||defaultEncType,f instanceof FormData)p=f;else if(p=new FormData,f instanceof URLSearchParams)for(let[G,Z]of f)p.append(G,Z);else if(f!=null)for(let G of Object.keys(f))p.append(G,f[G])}let{protocol:H,host:P}=window.location;return{url:new URL(O,H+"//"+P),method:T,encType:M,formData:p}}const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],_excluded2=["aria-current","caseSensitive","className","end","style","to","children"],_excluded3=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative"];function HashRouter(f){let{basename:g,children:s,window:T}=f,O=react.exports.useRef();O.current==null&&(O.current=createHashHistory({window:T,v5Compat:!0}));let M=O.current,[p,H]=react.exports.useState({action:M.action,location:M.location});return react.exports.useLayoutEffect(()=>M.listen(H),[M]),jsxDEV(Router,{basename:g,children:s,location:p.location,navigationType:p.action,navigator:M},void 0,!1,{fileName:_jsxFileName$1,lineNumber:277,columnNumber:23},this)}const Link=react.exports.forwardRef(function(g,s){let{onClick:T,relative:O,reloadDocument:M,replace:p,state:H,target:P,to:X,preventScrollReset:G}=g,Z=_objectWithoutPropertiesLoose(g,_excluded),oe=useHref(X,{relative:O}),ae=useLinkClickHandler(X,{replace:p,state:H,target:P,preventScrollReset:G,relative:O});function fe(Ne){T&&T(Ne),Ne.defaultPrevented||ae(Ne)}return jsxDEV("a",{...Z,href:oe,onClick:M?T:fe,ref:s,target:P},void 0,!1,{fileName:_jsxFileName$1,lineNumber:354,columnNumber:5},this)});Link.displayName="Link";const NavLink=react.exports.forwardRef(function(g,s){let{"aria-current":T="page",caseSensitive:O=!1,className:M="",end:p=!1,style:H,to:P,children:X}=g,G=_objectWithoutPropertiesLoose(g,_excluded2),Z=useResolvedPath(P,{relative:G.relative}),oe=useLocation(),ae=react.exports.useContext(DataRouterStateContext),fe=Z.pathname,Ne=oe.pathname,ke=ae&&ae.navigation&&ae.navigation.location?ae.navigation.location.pathname:null;O||(Ne=Ne.toLowerCase(),ke=ke?ke.toLowerCase():null,fe=fe.toLowerCase());let Oe=Ne===fe||!p&&Ne.startsWith(fe)&&Ne.charAt(fe.length)==="/",We=ke!=null&&(ke===fe||!p&&ke.startsWith(fe)&&ke.charAt(fe.length)==="/"),Pe=Oe?T:void 0,ot;typeof M=="function"?ot=M({isActive:Oe,isPending:We}):ot=[M,Oe?"active":null,We?"pending":null].filter(Boolean).join(" ");let Ie=typeof H=="function"?H({isActive:Oe,isPending:We}):H;return jsxDEV(Link,{...G,"aria-current":Pe,className:ot,ref:s,style:Ie,to:P,children:typeof X=="function"?X({isActive:Oe,isPending:We}):X},void 0,!1,{fileName:_jsxFileName$1,lineNumber:421,columnNumber:23},this)});NavLink.displayName="NavLink";const Form=react.exports.forwardRef((f,g)=>jsxDEV(FormImpl,{...f,ref:g},void 0,!1,{fileName:_jsxFileName$1,lineNumber:445,columnNumber:23},globalThis));Form.displayName="Form";const FormImpl=react.exports.forwardRef((f,g)=>{let{reloadDocument:s,replace:T,method:O=defaultMethod,action:M,onSubmit:p,fetcherKey:H,routeId:P,relative:X}=f,G=_objectWithoutPropertiesLoose(f,_excluded3),Z=useSubmitImpl(H,P),oe=O.toLowerCase()==="get"?"get":"post",ae=useFormAction(M,{relative:X});return jsxDEV("form",{ref:g,method:oe,action:ae,onSubmit:s?p:Ne=>{if(p&&p(Ne),Ne.defaultPrevented)return;Ne.preventDefault();let ke=Ne.nativeEvent.submitter;Z(ke||Ne.currentTarget,{method:O,replace:T,relative:X})},...G},void 0,!1,{fileName:_jsxFileName$1,lineNumber:485,columnNumber:23},globalThis)});Form.displayName="Form";var DataRouterHook;(function(f){f.UseScrollRestoration="useScrollRestoration",f.UseSubmitImpl="useSubmitImpl",f.UseFetcher="useFetcher"})(DataRouterHook||(DataRouterHook={}));var DataRouterStateHook;(function(f){f.UseFetchers="useFetchers",f.UseScrollRestoration="useScrollRestoration"})(DataRouterStateHook||(DataRouterStateHook={}));function getDataRouterConsoleError(f){return f+" must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router."}function useDataRouterContext(f){let g=react.exports.useContext(DataRouterContext);return g||invariant(!1,getDataRouterConsoleError(f)),g}function useLinkClickHandler(f,g){let{target:s,replace:T,state:O,preventScrollReset:M,relative:p}=g===void 0?{}:g,H=useNavigate(),P=useLocation(),X=useResolvedPath(f,{relative:p});return react.exports.useCallback(G=>{if(shouldProcessLinkClick(G,s)){G.preventDefault();let Z=T!==void 0?T:createPath(P)===createPath(X);H(f,{replace:Z,state:O,preventScrollReset:M,relative:p})}},[P,H,X,T,O,s,f,M,p])}function useSubmitImpl(f,g){let{router:s}=useDataRouterContext(DataRouterHook.UseSubmitImpl),T=useFormAction();return react.exports.useCallback(function(O,M){if(M===void 0&&(M={}),typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{method:p,encType:H,formData:P,url:X}=getFormSubmissionInfo(O,T,M),G=X.pathname+X.search,Z={replace:M.replace,formData:P,formMethod:p,formEncType:H};f?(g==null&&invariant(!1,"No routeId available for useFetcher()"),s.fetch(f,g,G,Z)):s.navigate(G,Z)},[T,s,f,g])}function useFormAction(f,g){let{relative:s}=g===void 0?{}:g,{basename:T}=react.exports.useContext(NavigationContext),O=react.exports.useContext(RouteContext);O||invariant(!1,"useFormAction must be used inside a RouteContext");let[M]=O.matches.slice(-1),p=f!=null?f:".",H=_extends({},useResolvedPath(p,{relative:s})),P=useLocation();if(f==null&&(H.search=P.search,H.hash=P.hash,M.route.index)){let X=new URLSearchParams(H.search);X.delete("index"),H.search=X.toString()?"?"+X.toString():""}return(!f||f===".")&&M.route.index&&(H.search=H.search?H.search.replace(/^\?/,"?index&"):"?index"),T!=="/"&&(H.pathname=H.pathname==="/"?T:joinPaths([T,H.pathname])),createPath(H)}function createAudioCtx$1(f){return typeof f=="number"?new AudioContext({sampleRate:f}):f}function isObjectType$1(f,g){return Object.prototype.toString.call(g)===`[object ${f}]`}function isAudioArray$1(f){return Array.isArray(f)&&f.length>0&&Array.isArray(f[0])}function isFloat32AudioArray$1(f){return Array.isArray(f)&&f.length>0&&isObjectType$1("Float32Array",f[0])}function isAudioBuffer$1(f){return isObjectType$1("AudioBuffer",f)}function isArrayBuffer$1(f){return isObjectType$1("ArrayBuffer",f)}function audioArrayToAudioBuffer$1(f,g){const s=g.createBuffer(f.length,f[0].length,g.sampleRate);for(let T=0;T<s.numberOfChannels;T++){const O=s.getChannelData(T);for(let M=0;M<s.length;M++)O[M]=f[T][M]}return s}async function arrayBufferToAudioBuffer$1(f,g){return await new Promise(s=>g.decodeAudioData(f,s))}async function toAudioBuffer$1(f,g){if(isAudioBuffer$1(f))return f;const s=createAudioCtx$1(g);if(isArrayBuffer$1(f))return arrayBufferToAudioBuffer$1(f,s);if(isAudioArray$1(f)||isFloat32AudioArray$1(f))return audioArrayToAudioBuffer$1(f,s);throw new Error(`toAudioBuffer: unconvertible input type: ${f}`)}function playBuffer(f,g){const s=g.createBufferSource();s.buffer=f,s.connect(g.destination),s.addEventListener("ended",()=>{s.disconnect(g.destination)}),s.start()}var FaustModule=function(){var f=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(f=f||__filename),function(g){g=g||{};var s=typeof g<"u"?g:{};s.expectedDataFileDownloads||(s.expectedDataFileDownloads=0,s.finishedDataFileDownloads=0),s.expectedDataFileDownloads++,function(){var a=function(u){if(typeof window=="object")window.encodeURIComponent(window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/");else if(typeof location<"u")encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/");else throw"using preloaded data can only be done on a web page or in a web worker";var l="../../lib/libfaust-wasm.data",h="libfaust-wasm.data";typeof s.locateFilePackage=="function"&&!s.locateFile&&(s.locateFile=s.locateFilePackage,Oe("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));var _=s.locateFile?s.locateFile(h,""):h,w=u.remote_package_size;u.package_uuid;function D(B,se,ee,re){var le=new XMLHttpRequest;le.open("GET",B,!0),le.responseType="arraybuffer",le.onprogress=function(te){var Le=B,Ae=se;if(te.total&&(Ae=te.total),te.loaded){le.addedTotal?s.dataFileDownloads[Le].loaded=te.loaded:(le.addedTotal=!0,s.dataFileDownloads||(s.dataFileDownloads={}),s.dataFileDownloads[Le]={loaded:te.loaded,total:Ae});var Y=0,he=0,Ue=0;for(var je in s.dataFileDownloads){var ye=s.dataFileDownloads[je];Y+=ye.total,he+=ye.loaded,Ue++}Y=Math.ceil(Y*s.expectedDataFileDownloads/Ue),s.setStatus&&s.setStatus("Downloading data... ("+he+"/"+Y+")")}else s.dataFileDownloads||s.setStatus&&s.setStatus("Downloading data...")},le.onerror=function(te){throw new Error("NetworkError for: "+B)},le.onload=function(te){if(le.status==200||le.status==304||le.status==206||le.status==0&&le.response){var Le=le.response;ee(Le)}else throw new Error(le.statusText+" : "+le.responseURL)},le.send(null)}var R=null,x=s.getPreloadedPackage?s.getPreloadedPackage(_,w):null;x||D(_,w,function(B){R?(R(B),R=null):x=B});function L(){function B(te,Le){if(!te)throw Le+new Error().stack}s.FS_createPath("/","libraries",!0,!0);function se(te,Le,Ae){this.start=te,this.end=Le,this.audio=Ae}se.prototype={requests:{},open:function(te,Le){this.name=Le,this.requests[Le]=this,s.addRunDependency("fp "+this.name)},send:function(){},onload:function(){var te=this.byteArray.subarray(this.start,this.end);this.finish(te)},finish:function(te){var Le=this;s.FS_createDataFile(this.name,null,te,!0,!0,!0),s.removeRunDependency("fp "+Le.name),this.requests[this.name]=null}};for(var ee=u.files,re=0;re<ee.length;++re)new se(ee[re].start,ee[re].end,ee[re].audio).open("GET",ee[re].filename);function le(te){s.finishedDataFileDownloads++,B(te,"Loading data file failed."),B(te instanceof ArrayBuffer,"bad input to processPackageData");var Le=new Uint8Array(te);se.prototype.byteArray=Le;for(var Ae=u.files,Y=0;Y<Ae.length;++Y)se.prototype.requests[Ae[Y].filename].onload();s.removeRunDependency("datafile_../../lib/libfaust-wasm.data")}s.addRunDependency("datafile_../../lib/libfaust-wasm.data"),s.preloadResults||(s.preloadResults={}),s.preloadResults[l]={fromCache:!1},x?(le(x),x=null):R=le}s.calledRun?L():(s.preRun||(s.preRun=[]),s.preRun.push(L))};a({files:[{filename:"/libraries/hoa.lib",start:0,end:13105,audio:0},{filename:"/libraries/compressors.lib",start:13105,end:58859,audio:0},{filename:"/libraries/basics.lib",start:58859,end:110385,audio:0},{filename:"/libraries/dx7.lib",start:110385,end:179488,audio:0},{filename:"/libraries/analyzers.lib",start:179488,end:212357,audio:0},{filename:"/libraries/spats.lib",start:212357,end:217531,audio:0},{filename:"/libraries/envelopes.lib",start:217531,end:228127,audio:0},{filename:"/libraries/oscillators.lib",start:228127,end:275738,audio:0},{filename:"/libraries/mi.lib",start:275738,end:293026,audio:0},{filename:"/libraries/misceffects.lib",start:293026,end:314755,audio:0},{filename:"/libraries/version.lib",start:314755,end:315662,audio:0},{filename:"/libraries/webaudio.lib",start:315662,end:327785,audio:0},{filename:"/libraries/math.lib",start:327785,end:349263,audio:0},{filename:"/libraries/stdfaust.lib",start:349263,end:350533,audio:0},{filename:"/libraries/filter.lib",start:350533,end:415919,audio:0},{filename:"/libraries/delays.lib",start:415919,end:430403,audio:0},{filename:"/libraries/routes.lib",start:430403,end:437029,audio:0},{filename:"/libraries/soundfiles.lib",start:437029,end:446390,audio:0},{filename:"/libraries/tonestacks.lib",start:446390,end:458744,audio:0},{filename:"/libraries/aanl.lib",start:458744,end:484841,audio:0},{filename:"/libraries/wdmodels.lib",start:484841,end:574662,audio:0},{filename:"/libraries/all.lib",start:574662,end:575678,audio:0},{filename:"/libraries/music.lib",start:575678,end:594112,audio:0},{filename:"/libraries/tubes.lib",start:594112,end:943901,audio:0},{filename:"/libraries/effect.lib",start:943901,end:1012931,audio:0},{filename:"/libraries/vaeffects.lib",start:1012931,end:1048800,audio:0},{filename:"/libraries/maxmsp.lib",start:1048800,end:1056659,audio:0},{filename:"/libraries/platform.lib",start:1056659,end:1059739,audio:0},{filename:"/libraries/synths.lib",start:1059739,end:1070990,audio:0},{filename:"/libraries/sf.lib",start:1070990,end:1072056,audio:0},{filename:"/libraries/fds.lib",start:1072056,end:1092602,audio:0},{filename:"/libraries/reducemaps.lib",start:1092602,end:1097438,audio:0},{filename:"/libraries/phaflangers.lib",start:1097438,end:1107359,audio:0},{filename:"/libraries/filters.lib",start:1107359,end:1212987,audio:0},{filename:"/libraries/signals.lib",start:1212987,end:1224932,audio:0},{filename:"/libraries/instruments.lib",start:1224932,end:1234327,audio:0},{filename:"/libraries/quantizers.lib",start:1234327,end:1244180,audio:0},{filename:"/libraries/noises.lib",start:1244180,end:1258842,audio:0},{filename:"/libraries/oscillator.lib",start:1258842,end:1278693,audio:0},{filename:"/libraries/interpolators.lib",start:1278693,end:1301737,audio:0},{filename:"/libraries/demos.lib",start:1301737,end:1364872,audio:0},{filename:"/libraries/reverbs.lib",start:1364872,end:1402697,audio:0},{filename:"/libraries/physmodels.lib",start:1402697,end:1573680,audio:0},{filename:"/libraries/maths.lib",start:1573680,end:1595081,audio:0}],remote_package_size:1595081,package_uuid:"04ea3dc2-3649-4af3-b126-173b06afc41a"})}();var T={},O;for(O in s)s.hasOwnProperty(O)&&(T[O]=s[O]);var M="./this.program",p=!1,H=!1,P=!1,X=!1;if(p=typeof window=="object",H=typeof importScripts=="function",P=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",X=!p&&!P&&!H,s.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");var G="";function Z(a){return s.locateFile?s.locateFile(a,G):G+a}var oe,ae,fe,Ne;if(P)H?G=require("path").dirname(G)+"/":G=__dirname+"/",oe=function(u,l){return fe||(fe=require("fs")),Ne||(Ne=require("path")),u=Ne.normalize(u),fe.readFileSync(u,l?null:"utf8")},ae=function(u){var l=oe(u,!0);return l.buffer||(l=new Uint8Array(l)),F(l.buffer),l},process.argv.length>1&&(M=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(a){if(!(a instanceof wc))throw a}),process.on("unhandledRejection",C),s.inspect=function(){return"[Emscripten Module object]"};else if(X)typeof read<"u"&&(oe=function(u){return read(u)}),ae=function(u){var l;return typeof readbuffer=="function"?new Uint8Array(readbuffer(u)):(l=read(u,"binary"),F(typeof l=="object"),l)},typeof scriptArgs<"u"&&scriptArgs,typeof print<"u"&&(typeof console>"u"&&(console={}),console.log=print,console.warn=console.error=typeof printErr<"u"?printErr:print);else if(p||H)H?G=self.location.href:document.currentScript&&(G=document.currentScript.src),f&&(G=f),G.indexOf("blob:")!==0?G=G.substr(0,G.lastIndexOf("/")+1):G="",oe=function(u){var l=new XMLHttpRequest;return l.open("GET",u,!1),l.send(null),l.responseText},H&&(ae=function(u){var l=new XMLHttpRequest;return l.open("GET",u,!1),l.responseType="arraybuffer",l.send(null),new Uint8Array(l.response)});else throw new Error("environment detection error");var ke=s.print||console.log.bind(console),Oe=s.printErr||console.warn.bind(console);for(O in T)T.hasOwnProperty(O)&&(s[O]=T[O]);T=null,s.arguments&&s.arguments,Object.getOwnPropertyDescriptor(s,"arguments")||Object.defineProperty(s,"arguments",{configurable:!0,get:function(){C("Module.arguments has been replaced with plain arguments_")}}),s.thisProgram&&(M=s.thisProgram),Object.getOwnPropertyDescriptor(s,"thisProgram")||Object.defineProperty(s,"thisProgram",{configurable:!0,get:function(){C("Module.thisProgram has been replaced with plain thisProgram")}}),s.quit&&s.quit,Object.getOwnPropertyDescriptor(s,"quit")||Object.defineProperty(s,"quit",{configurable:!0,get:function(){C("Module.quit has been replaced with plain quit_")}}),F(typeof s.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),F(typeof s.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),F(typeof s.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),F(typeof s.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),F(typeof s.read>"u","Module.read option was removed (modify read_ in JS)"),F(typeof s.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),F(typeof s.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),F(typeof s.setWindowTitle>"u","Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),F(typeof s.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),Object.getOwnPropertyDescriptor(s,"read")||Object.defineProperty(s,"read",{configurable:!0,get:function(){C("Module.read has been replaced with plain read_")}}),Object.getOwnPropertyDescriptor(s,"readAsync")||Object.defineProperty(s,"readAsync",{configurable:!0,get:function(){C("Module.readAsync has been replaced with plain readAsync")}}),Object.getOwnPropertyDescriptor(s,"readBinary")||Object.defineProperty(s,"readBinary",{configurable:!0,get:function(){C("Module.readBinary has been replaced with plain readBinary")}});var Us,$i,ka;Us=$i=ka=function(){C("cannot use the stack before compiled code is ready to run, and has provided stack access")};function We(a){F(Ir);var u=$[Ir>>2],l=u+a+15&-16;return F(l<=nt.length,"failure to dynamicAlloc - memory growth etc. is not supported there, call malloc/sbrk directly"),$[Ir>>2]=l,u}function Pe(a){switch(a){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(a[a.length-1]==="*")return 4;if(a[0]==="i"){var u=Number(a.substr(1));return F(u%8===0,"getNativeTypeSize invalid bits "+u+", type "+a),u/8}else return 0}}}function ot(a){ot.shown||(ot.shown={}),ot.shown[a]||(ot.shown[a]=1,Oe(a))}var Ie;s.wasmBinary&&(Ie=s.wasmBinary),Object.getOwnPropertyDescriptor(s,"wasmBinary")||Object.defineProperty(s,"wasmBinary",{configurable:!0,get:function(){C("Module.wasmBinary has been replaced with plain wasmBinary")}}),s.noExitRuntime&&s.noExitRuntime,Object.getOwnPropertyDescriptor(s,"noExitRuntime")||Object.defineProperty(s,"noExitRuntime",{configurable:!0,get:function(){C("Module.noExitRuntime has been replaced with plain noExitRuntime")}}),typeof WebAssembly!="object"&&C("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");function It(a,u,l,h){switch(l=l||"i8",l.charAt(l.length-1)==="*"&&(l="i32"),l){case"i1":nt[a>>0]=u;break;case"i8":nt[a>>0]=u;break;case"i16":Wt[a>>1]=u;break;case"i32":$[a>>2]=u;break;case"i64":yn=[u>>>0,(_t=u,+ya(_t)>=1?_t>0?(Jr(+Ur(_t/4294967296),4294967295)|0)>>>0:~~+ga((_t-+(~~_t>>>0))/4294967296)>>>0:0)],$[a>>2]=yn[0],$[a+4>>2]=yn[1];break;case"float":Sn[a>>2]=u;break;case"double":Yn[a>>3]=u;break;default:C("invalid type for setValue: "+l)}}var Ge,sr=new WebAssembly.Table({initial:2176,maximum:2176+0,element:"anyfunc"}),Un=!1;function F(a,u){a||C("Assertion failed: "+u)}function Ht(a){var u=s["_"+a];return F(u,"Cannot call unknown function "+a+", make sure it is exported"),u}function Sr(a,u,l,h,_){var w={string:function(re){var le=0;if(re!=null&&re!==0){var te=(re.length<<2)+1;le=ka(te),$t(re,le,te)}return le},array:function(re){var le=ka(re.length);return fr(re,le),le}};function D(re){return u==="string"?hn(re):u==="boolean"?Boolean(re):re}var R=Ht(a),x=[],L=0;if(F(u!=="array",'Return type should not be "array".'),h)for(var B=0;B<h.length;B++){var se=w[l[B]];se?(L===0&&(L=Us()),x[B]=se(h[B])):x[B]=h[B]}var ee=R.apply(null,x);return ee=D(ee),L!==0&&$i(L),ee}function it(a,u,l,h){return function(){return Sr(a,u,l,arguments)}}var yt=1,en=3;function tn(a,u,l,h){var _,w;typeof a=="number"?(_=!0,w=a):(_=!1,w=a.length);var D=typeof u=="string"?u:null,R;if(l==en?R=h:R=[zr,ka,We][l](Math.max(w,D?1:u.length)),_){var x;for(h=R,F((R&3)==0),x=R+(w&-4);h<x;h+=4)$[h>>2]=0;for(x=R+w;h<x;)nt[h++>>0]=0;return R}if(D==="i8")return a.subarray||a.slice?vt.set(a,R):vt.set(new Uint8Array(a),R),R;for(var L=0,B,se,ee;L<w;){var re=a[L];if(B=D||u[L],B===0){L++;continue}F(B,"Must know what type to store in allocate!"),B=="i64"&&(B="i32"),It(R+L,re,B),ee!==B&&(se=Pe(B),ee=B),L+=se}return R}function tt(a){return me?zr(a):We(a)}var mn=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Qn(a,u,l){for(var h=u+l,_=u;a[_]&&!(_>=h);)++_;if(_-u>16&&a.subarray&&mn)return mn.decode(a.subarray(u,_));for(var w="";u<_;){var D=a[u++];if(!(D&128)){w+=String.fromCharCode(D);continue}var R=a[u++]&63;if((D&224)==192){w+=String.fromCharCode((D&31)<<6|R);continue}var x=a[u++]&63;if((D&240)==224?D=(D&15)<<12|R<<6|x:((D&248)!=240&&ot("Invalid UTF-8 leading byte 0x"+D.toString(16)+" encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"),D=(D&7)<<18|R<<12|x<<6|a[u++]&63),D<65536)w+=String.fromCharCode(D);else{var L=D-65536;w+=String.fromCharCode(55296|L>>10,56320|L&1023)}}return w}function hn(a,u){return a?Qn(vt,a,u):""}function ur(a,u,l,h){if(!(h>0))return 0;for(var _=l,w=l+h-1,D=0;D<a.length;++D){var R=a.charCodeAt(D);if(R>=55296&&R<=57343){var x=a.charCodeAt(++D);R=65536+((R&1023)<<10)|x&1023}if(R<=127){if(l>=w)break;u[l++]=R}else if(R<=2047){if(l+1>=w)break;u[l++]=192|R>>6,u[l++]=128|R&63}else if(R<=65535){if(l+2>=w)break;u[l++]=224|R>>12,u[l++]=128|R>>6&63,u[l++]=128|R&63}else{if(l+3>=w)break;R>=2097152&&ot("Invalid Unicode code point 0x"+R.toString(16)+" encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF)."),u[l++]=240|R>>18,u[l++]=128|R>>12&63,u[l++]=128|R>>6&63,u[l++]=128|R&63}}return u[l]=0,l-_}function $t(a,u,l){return F(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),ur(a,vt,u,l)}function sn(a){for(var u=0,l=0;l<a.length;++l){var h=a.charCodeAt(l);h>=55296&&h<=57343&&(h=65536+((h&1023)<<10)|a.charCodeAt(++l)&1023),h<=127?++u:h<=2047?u+=2:h<=65535?u+=3:u+=4}return u}var lr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function ha(a){F(a%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=a,l=u>>1;Wt[l];)++l;if(u=l<<1,u-a>32&&lr)return lr.decode(vt.subarray(a,u));for(var h=0,_="";;){var w=Wt[a+h*2>>1];if(w==0)return _;++h,_+=String.fromCharCode(w)}}function Yr(a,u,l){if(F(u%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),F(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l===void 0&&(l=2147483647),l<2)return 0;l-=2;for(var h=u,_=l<a.length*2?l/2:a.length,w=0;w<_;++w){var D=a.charCodeAt(w);Wt[u>>1]=D,u+=2}return Wt[u>>1]=0,u-h}function Gr(a){return a.length*2}function kr(a){F(a%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u=0,l="";;){var h=$[a+u*4>>2];if(h==0)return l;if(++u,h>=65536){var _=h-65536;l+=String.fromCharCode(55296|_>>10,56320|_&1023)}else l+=String.fromCharCode(h)}}function bn(a,u,l){if(F(u%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),F(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l===void 0&&(l=2147483647),l<4)return 0;for(var h=u,_=h+l-4,w=0;w<a.length;++w){var D=a.charCodeAt(w);if(D>=55296&&D<=57343){var R=a.charCodeAt(++w);D=65536+((D&1023)<<10)|R&1023}if($[u>>2]=D,u+=4,u+4>_)break}return $[u>>2]=0,u-h}function cr(a){for(var u=0,l=0;l<a.length;++l){var h=a.charCodeAt(l);h>=55296&&h<=57343&&++l,u+=4}return u}function dr(a){var u=sn(a)+1,l=zr(u);return l&&ur(a,nt,l,u),l}function fr(a,u){F(a.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),nt.set(a,u)}function un(a,u,l){for(var h=0;h<a.length;++h)F(a.charCodeAt(h)===a.charCodeAt(h)&255),nt[u++>>0]=a.charCodeAt(h);l||(nt[u>>0]=0)}var Tn=65536;function vn(a,u){return a%u>0&&(a+=u-a%u),a}var Vt,nt,vt,Wt,wn,$,Qt,Sn,Yn;function Rn(a){Vt=a,s.HEAP8=nt=new Int8Array(a),s.HEAP16=Wt=new Int16Array(a),s.HEAP32=$=new Int32Array(a),s.HEAPU8=vt=new Uint8Array(a),s.HEAPU16=wn=new Uint16Array(a),s.HEAPU32=Qt=new Uint32Array(a),s.HEAPF32=Sn=new Float32Array(a),s.HEAPF64=Yn=new Float64Array(a)}var Rr=7643408,Lt=2400528,Or=7643408,Ir=2400368;F(Rr%16===0,"stack must start aligned"),F(Or%16===0,"heap must start aligned");var qr=5242880;s.TOTAL_STACK&&F(qr===s.TOTAL_STACK,"the stack size can no longer be determined at runtime");var ve=s.INITIAL_MEMORY||16777216;Object.getOwnPropertyDescriptor(s,"INITIAL_MEMORY")||Object.defineProperty(s,"INITIAL_MEMORY",{configurable:!0,get:function(){C("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY")}}),F(ve>=qr,"INITIAL_MEMORY should be larger than TOTAL_STACK, was "+ve+"! (TOTAL_STACK="+qr+")"),F(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!==void 0&&Int32Array.prototype.set!==void 0,"JS engine does not provide full typed array support"),s.wasmMemory?Ge=s.wasmMemory:Ge=new WebAssembly.Memory({initial:ve/Tn}),Ge&&(Vt=Ge.buffer),ve=Vt.byteLength,F(ve%Tn===0),Rn(Vt),$[Ir>>2]=Or;function xe(){F((Lt&3)==0),Qt[(Lt>>2)+1]=34821223,Qt[(Lt>>2)+2]=2310721022,$[0]=1668509029}function Je(){var a=Qt[(Lt>>2)+1],u=Qt[(Lt>>2)+2];(a!=34821223||u!=2310721022)&&C("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x"+u.toString(16)+" "+a.toString(16)),$[0]!==1668509029&&C("Runtime error: The application has corrupted its heap memory area (address zero)!")}function Ot(a){C("Stack overflow! Attempted to allocate "+a+" bytes on the stack, but stack has only "+(Lt-Us()+a)+" bytes available!")}(function(){var a=new Int16Array(1),u=new Int8Array(a.buffer);if(a[0]=25459,u[0]!==115||u[1]!==99)throw"Runtime error: expected the system to be little-endian!"})();function gt(a){for(;a.length>0;){var u=a.shift();if(typeof u=="function"){u();continue}var l=u.func;typeof l=="number"?u.arg===void 0?s.dynCall_v(l):s.dynCall_vi(l,u.arg):l(u.arg===void 0?null:u.arg)}}var ln=[],Zt=[],pr=[],xt=[],me=!1,ce=!1;function Xt(){if(s.preRun)for(typeof s.preRun=="function"&&(s.preRun=[s.preRun]);s.preRun.length;)Bo(s.preRun.shift());gt(ln)}function va(){Je(),F(!me),me=!0,Et.root=v.mount(Et,{},null),!s.noFSInit&&!v.init.initialized&&v.init(),gt(Zt)}function Kr(){Je(),v.ignorePermissions=!1,gt(pr)}function yo(){if(Je(),s.postRun)for(typeof s.postRun=="function"&&(s.postRun=[s.postRun]);s.postRun.length;)wi(s.postRun.shift());gt(xt)}function Bo(a){ln.unshift(a)}function wi(a){xt.unshift(a)}F(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),F(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),F(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),F(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var ya=Math.abs,ga=Math.ceil,Ur=Math.floor,Jr=Math.min,mr=0,Hn=null,N=null,ie={};function _e(a){for(var u=a;;){if(!ie[a])return a;a=u+Math.random()}}function He(a){mr++,s.monitorRunDependencies&&s.monitorRunDependencies(mr),a?(F(!ie[a]),ie[a]=1,Hn===null&&typeof setInterval<"u"&&(Hn=setInterval(function(){if(Un){clearInterval(Hn),Hn=null;return}var u=!1;for(var l in ie)u||(u=!0,Oe("still waiting on run dependencies:")),Oe("dependency: "+l);u&&Oe("(end of list)")},1e4))):Oe("warning: run dependency added without ID")}function rt(a){if(mr--,s.monitorRunDependencies&&s.monitorRunDependencies(mr),a?(F(ie[a]),delete ie[a]):Oe("warning: run dependency removed without ID"),mr==0&&(Hn!==null&&(clearInterval(Hn),Hn=null),N)){var u=N;N=null,u()}}s.preloadedImages={},s.preloadedAudios={};function C(a){s.onAbort&&s.onAbort(a),a+="",ke(a),Oe(a),Un=!0;var u="abort("+a+") at "+st();throw a=u,new WebAssembly.RuntimeError(a)}var Fe="data:application/octet-stream;base64,";function Ze(a){return String.prototype.startsWith?a.startsWith(Fe):a.indexOf(Fe)===0}var Ct="libfaust-wasm.wasm";Ze(Ct)||(Ct=Z(Ct));function Mt(){try{if(Ie)return new Uint8Array(Ie);if(ae)return ae(Ct);throw"both async and sync fetching of the wasm failed"}catch(a){C(a)}}function lt(){return!Ie&&(p||H)&&typeof fetch=="function"?fetch(Ct,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+Ct+"'";return a.arrayBuffer()}).catch(function(){return Mt()}):new Promise(function(a,u){a(Mt())})}function Ln(){var a={env:bc,wasi_snapshot_preview1:bc};function u(R,x){var L=R.exports;s.asm=L,rt("wasm-instantiate")}He("wasm-instantiate");var l=s;function h(R){F(s===l,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),l=null,u(R.instance)}function _(R){return lt().then(function(x){return WebAssembly.instantiate(x,a)}).then(R,function(x){Oe("failed to asynchronously prepare wasm: "+x),C(x)})}function w(){if(!Ie&&typeof WebAssembly.instantiateStreaming=="function"&&!Ze(Ct)&&typeof fetch=="function")fetch(Ct,{credentials:"same-origin"}).then(function(R){var x=WebAssembly.instantiateStreaming(R,a);return x.then(h,function(L){Oe("wasm streaming compile failed: "+L),Oe("falling back to ArrayBuffer instantiation"),_(h)})});else return _(h)}if(s.instantiateWasm)try{var D=s.instantiateWasm(a,u);return D}catch(R){return Oe("Module.instantiateWasm callback failed with error: "+R),!1}return w(),{}}var _t,yn,Mr={299792:function(a){var u="";try{var l=new XMLHttpRequest;l.open("GET",s.UTF8ToString(a),!1),l.send(),l.status==200&&(u=l.responseText)}catch(h){console.log(h)}return tn(Jo(u),"i8",yt)},420260:function(a){faust_module.faust.wasm_instance[a]=null},420588:function(a){return faust_module._malloc(a)},420625:function(a){faust_module._free(a)},420653:function(a,u){return faust_module.faust.wasm_instance[a].exports.getNumInputs(u)},420730:function(a,u){return faust_module.faust.wasm_instance[a].exports.getNumOutputs(u)},420805:function(a,u){return faust_module.faust.wasm_instance[a].exports.getSampleRate(u)},420880:function(a,u,l){faust_module.faust.wasm_instance[a].exports.init(u,l)},420947:function(a,u,l){faust_module.faust.wasm_instance[a].exports.instanceInit(u,l)},421018:function(a,u,l){faust_module.faust.wasm_instance[a].exports.instanceConstants(u,l)},421094:function(a,u){faust_module.faust.wasm_instance[a].exports.instanceResetUserInterface(u)},421175:function(a,u){faust_module.faust.wasm_instance[a].exports.instanceClear(u)},421243:function(a,u,l,h,_){faust_module.faust.wasm_instance[a].exports.compute(u,l,h,_)}};function Ou(a,u,l){var h=Ko(u,l);return Mr[a].apply(null,h)}function Mu(){faust_module.faust=faust_module.faust||{},faust_module.faust.memory=faust_module.faust.memory||Ge}Zt.push({func:function(){Yf()}});function bs(a){return ot("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"),a}function Ts(a){var u=/\b_Z[\w\d_]+/g;return a.replace(u,function(l){var h=bs(l);return l===h?l:h+" ["+l+"]"})}function Ca(){var a=new Error;if(!a.stack){try{throw new Error}catch(u){a=u}if(!a.stack)return"(no stack trace available)"}return a.stack.toString()}function st(){var a=Ca();return s.extraStackTrace&&(a+=`
`+s.extraStackTrace()),Ts(a)}function go(a){return zr(a)}function Zr(){return Zr.uncaught_exceptions>0}function Si(a,u,l){throw"uncaught_exception"in Zr?Zr.uncaught_exceptions++:Zr.uncaught_exceptions=1,a+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}function Ri(){C("stack overflow")}function Pa(a){return s.___errno_location?$[s.___errno_location()>>2]=a:Oe("failed to set errno from JS"),a}function Oi(a,u){return Pa(63),-1}var ct={splitPath:function(a){var u=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return u.exec(a).slice(1)},normalizeArray:function(a,u){for(var l=0,h=a.length-1;h>=0;h--){var _=a[h];_==="."?a.splice(h,1):_===".."?(a.splice(h,1),l++):l&&(a.splice(h,1),l--)}if(u)for(;l;l--)a.unshift("..");return a},normalize:function(a){var u=a.charAt(0)==="/",l=a.substr(-1)==="/";return a=ct.normalizeArray(a.split("/").filter(function(h){return!!h}),!u).join("/"),!a&&!u&&(a="."),a&&l&&(a+="/"),(u?"/":"")+a},dirname:function(a){var u=ct.splitPath(a),l=u[0],h=u[1];return!l&&!h?".":(h&&(h=h.substr(0,h.length-1)),l+h)},basename:function(a){if(a==="/")return"/";var u=a.lastIndexOf("/");return u===-1?a:a.substr(u+1)},extname:function(a){return ct.splitPath(a)[3]},join:function(){var a=Array.prototype.slice.call(arguments,0);return ct.normalize(a.join("/"))},join2:function(a,u){return ct.normalize(a+"/"+u)}},hr={resolve:function(){for(var a="",u=!1,l=arguments.length-1;l>=-1&&!u;l--){var h=l>=0?arguments[l]:v.cwd();if(typeof h!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!h)return"";a=h+"/"+a,u=h.charAt(0)==="/"}return a=ct.normalizeArray(a.split("/").filter(function(_){return!!_}),!u).join("/"),(u?"/":"")+a||"."},relative:function(a,u){a=hr.resolve(a).substr(1),u=hr.resolve(u).substr(1);function l(L){for(var B=0;B<L.length&&L[B]==="";B++);for(var se=L.length-1;se>=0&&L[se]==="";se--);return B>se?[]:L.slice(B,se-B+1)}for(var h=l(a.split("/")),_=l(u.split("/")),w=Math.min(h.length,_.length),D=w,R=0;R<w;R++)if(h[R]!==_[R]){D=R;break}for(var x=[],R=D;R<h.length;R++)x.push("..");return x=x.concat(_.slice(D)),x.join("/")}},ea={ttys:[],init:function(){},shutdown:function(){},register:function(a,u){ea.ttys[a]={input:[],output:[],ops:u},v.registerDevice(a,ea.stream_ops)},stream_ops:{open:function(a){var u=ea.ttys[a.node.rdev];if(!u)throw new v.ErrnoError(43);a.tty=u,a.seekable=!1},close:function(a){a.tty.ops.flush(a.tty)},flush:function(a){a.tty.ops.flush(a.tty)},read:function(a,u,l,h,_){if(!a.tty||!a.tty.ops.get_char)throw new v.ErrnoError(60);for(var w=0,D=0;D<h;D++){var R;try{R=a.tty.ops.get_char(a.tty)}catch{throw new v.ErrnoError(29)}if(R===void 0&&w===0)throw new v.ErrnoError(6);if(R==null)break;w++,u[l+D]=R}return w&&(a.node.timestamp=Date.now()),w},write:function(a,u,l,h,_){if(!a.tty||!a.tty.ops.put_char)throw new v.ErrnoError(60);try{for(var w=0;w<h;w++)a.tty.ops.put_char(a.tty,u[l+w])}catch{throw new v.ErrnoError(29)}return h&&(a.node.timestamp=Date.now()),w}},default_tty_ops:{get_char:function(a){if(!a.input.length){var u=null;if(P){var l=256,h=Buffer.alloc?Buffer.alloc(l):new Buffer(l),_=0;try{_=fe.readSync(process.stdin.fd,h,0,l,null)}catch(w){if(w.toString().indexOf("EOF")!=-1)_=0;else throw w}_>0?u=h.slice(0,_).toString("utf-8"):u=null}else typeof window<"u"&&typeof window.prompt=="function"?(u=window.prompt("Input: "),u!==null&&(u+=`
`)):typeof readline=="function"&&(u=readline(),u!==null&&(u+=`
`));if(!u)return null;a.input=Jo(u,!0)}return a.input.shift()},put_char:function(a,u){u===null||u===10?(ke(Qn(a.output,0)),a.output=[]):u!=0&&a.output.push(u)},flush:function(a){a.output&&a.output.length>0&&(ke(Qn(a.output,0)),a.output=[])}},default_tty1_ops:{put_char:function(a,u){u===null||u===10?(Oe(Qn(a.output,0)),a.output=[]):u!=0&&a.output.push(u)},flush:function(a){a.output&&a.output.length>0&&(Oe(Qn(a.output,0)),a.output=[])}}},qe={ops_table:null,mount:function(a){return qe.createNode(null,"/",16895,0)},createNode:function(a,u,l,h){if(v.isBlkdev(l)||v.isFIFO(l))throw new v.ErrnoError(63);qe.ops_table||(qe.ops_table={dir:{node:{getattr:qe.node_ops.getattr,setattr:qe.node_ops.setattr,lookup:qe.node_ops.lookup,mknod:qe.node_ops.mknod,rename:qe.node_ops.rename,unlink:qe.node_ops.unlink,rmdir:qe.node_ops.rmdir,readdir:qe.node_ops.readdir,symlink:qe.node_ops.symlink},stream:{llseek:qe.stream_ops.llseek}},file:{node:{getattr:qe.node_ops.getattr,setattr:qe.node_ops.setattr},stream:{llseek:qe.stream_ops.llseek,read:qe.stream_ops.read,write:qe.stream_ops.write,allocate:qe.stream_ops.allocate,mmap:qe.stream_ops.mmap,msync:qe.stream_ops.msync}},link:{node:{getattr:qe.node_ops.getattr,setattr:qe.node_ops.setattr,readlink:qe.node_ops.readlink},stream:{}},chrdev:{node:{getattr:qe.node_ops.getattr,setattr:qe.node_ops.setattr},stream:v.chrdev_stream_ops}});var _=v.createNode(a,u,l,h);return v.isDir(_.mode)?(_.node_ops=qe.ops_table.dir.node,_.stream_ops=qe.ops_table.dir.stream,_.contents={}):v.isFile(_.mode)?(_.node_ops=qe.ops_table.file.node,_.stream_ops=qe.ops_table.file.stream,_.usedBytes=0,_.contents=null):v.isLink(_.mode)?(_.node_ops=qe.ops_table.link.node,_.stream_ops=qe.ops_table.link.stream):v.isChrdev(_.mode)&&(_.node_ops=qe.ops_table.chrdev.node,_.stream_ops=qe.ops_table.chrdev.stream),_.timestamp=Date.now(),a&&(a.contents[u]=_),_},getFileDataAsRegularArray:function(a){if(a.contents&&a.contents.subarray){for(var u=[],l=0;l<a.usedBytes;++l)u.push(a.contents[l]);return u}return a.contents},getFileDataAsTypedArray:function(a){return a.contents?a.contents.subarray?a.contents.subarray(0,a.usedBytes):new Uint8Array(a.contents):new Uint8Array(0)},expandFileStorage:function(a,u){var l=a.contents?a.contents.length:0;if(!(l>=u)){var h=1024*1024;u=Math.max(u,l*(l<h?2:1.125)|0),l!=0&&(u=Math.max(u,256));var _=a.contents;a.contents=new Uint8Array(u),a.usedBytes>0&&a.contents.set(_.subarray(0,a.usedBytes),0)}},resizeFileStorage:function(a,u){if(a.usedBytes!=u){if(u==0){a.contents=null,a.usedBytes=0;return}if(!a.contents||a.contents.subarray){var l=a.contents;a.contents=new Uint8Array(u),l&&a.contents.set(l.subarray(0,Math.min(u,a.usedBytes))),a.usedBytes=u;return}if(a.contents||(a.contents=[]),a.contents.length>u)a.contents.length=u;else for(;a.contents.length<u;)a.contents.push(0);a.usedBytes=u}},node_ops:{getattr:function(a){var u={};return u.dev=v.isChrdev(a.mode)?a.id:1,u.ino=a.id,u.mode=a.mode,u.nlink=1,u.uid=0,u.gid=0,u.rdev=a.rdev,v.isDir(a.mode)?u.size=4096:v.isFile(a.mode)?u.size=a.usedBytes:v.isLink(a.mode)?u.size=a.link.length:u.size=0,u.atime=new Date(a.timestamp),u.mtime=new Date(a.timestamp),u.ctime=new Date(a.timestamp),u.blksize=4096,u.blocks=Math.ceil(u.size/u.blksize),u},setattr:function(a,u){u.mode!==void 0&&(a.mode=u.mode),u.timestamp!==void 0&&(a.timestamp=u.timestamp),u.size!==void 0&&qe.resizeFileStorage(a,u.size)},lookup:function(a,u){throw v.genericErrors[44]},mknod:function(a,u,l,h){return qe.createNode(a,u,l,h)},rename:function(a,u,l){if(v.isDir(a.mode)){var h;try{h=v.lookupNode(u,l)}catch{}if(h)for(var _ in h.contents)throw new v.ErrnoError(55)}delete a.parent.contents[a.name],a.name=l,u.contents[l]=a,a.parent=u},unlink:function(a,u){delete a.contents[u]},rmdir:function(a,u){var l=v.lookupNode(a,u);for(var h in l.contents)throw new v.ErrnoError(55);delete a.contents[u]},readdir:function(a){var u=[".",".."];for(var l in a.contents)!a.contents.hasOwnProperty(l)||u.push(l);return u},symlink:function(a,u,l){var h=qe.createNode(a,u,41471,0);return h.link=l,h},readlink:function(a){if(!v.isLink(a.mode))throw new v.ErrnoError(28);return a.link}},stream_ops:{read:function(a,u,l,h,_){var w=a.node.contents;if(_>=a.node.usedBytes)return 0;var D=Math.min(a.node.usedBytes-_,h);if(F(D>=0),D>8&&w.subarray)u.set(w.subarray(_,_+D),l);else for(var R=0;R<D;R++)u[l+R]=w[_+R];return D},write:function(a,u,l,h,_,w){if(F(!(u instanceof ArrayBuffer)),u.buffer===nt.buffer&&(w&&ot("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)"),w=!1),!h)return 0;var D=a.node;if(D.timestamp=Date.now(),u.subarray&&(!D.contents||D.contents.subarray)){if(w)return F(_===0,"canOwn must imply no weird position inside the file"),D.contents=u.subarray(l,l+h),D.usedBytes=h,h;if(D.usedBytes===0&&_===0)return D.contents=u.slice(l,l+h),D.usedBytes=h,h;if(_+h<=D.usedBytes)return D.contents.set(u.subarray(l,l+h),_),h}if(qe.expandFileStorage(D,_+h),D.contents.subarray&&u.subarray)D.contents.set(u.subarray(l,l+h),_);else for(var R=0;R<h;R++)D.contents[_+R]=u[l+R];return D.usedBytes=Math.max(D.usedBytes,_+h),h},llseek:function(a,u,l){var h=u;if(l===1?h+=a.position:l===2&&v.isFile(a.node.mode)&&(h+=a.node.usedBytes),h<0)throw new v.ErrnoError(28);return h},allocate:function(a,u,l){qe.expandFileStorage(a.node,u+l),a.node.usedBytes=Math.max(a.node.usedBytes,u+l)},mmap:function(a,u,l,h,_,w,D){if(F(!(u instanceof ArrayBuffer)),!v.isFile(a.node.mode))throw new v.ErrnoError(43);var R,x,L=a.node.contents;if(!(D&2)&&L.buffer===u.buffer)x=!1,R=L.byteOffset;else{(_>0||_+h<L.length)&&(L.subarray?L=L.subarray(_,_+h):L=Array.prototype.slice.call(L,_,_+h)),x=!0;var B=u.buffer==nt.buffer;if(R=zr(h),!R)throw new v.ErrnoError(48);(B?nt:u).set(L,R)}return{ptr:R,allocated:x}},msync:function(a,u,l,h,_){if(!v.isFile(a.node.mode))throw new v.ErrnoError(43);return _&2||qe.stream_ops.write(a,u,0,h,l,!1),0}}},Du={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},jt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},v={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(a){if(!(a instanceof v.ErrnoError))throw a+" : "+st();return Pa(a.errno)},lookupPath:function(a,u){if(a=hr.resolve(v.cwd(),a),u=u||{},!a)return{path:"",node:null};var l={follow_mount:!0,recurse_count:0};for(var h in l)u[h]===void 0&&(u[h]=l[h]);if(u.recurse_count>8)throw new v.ErrnoError(32);for(var _=ct.normalizeArray(a.split("/").filter(function(ee){return!!ee}),!1),w=v.root,D="/",R=0;R<_.length;R++){var x=R===_.length-1;if(x&&u.parent)break;if(w=v.lookupNode(w,_[R]),D=ct.join2(D,_[R]),v.isMountpoint(w)&&(!x||x&&u.follow_mount)&&(w=w.mounted.root),!x||u.follow)for(var L=0;v.isLink(w.mode);){var B=v.readlink(D);D=hr.resolve(ct.dirname(D),B);var se=v.lookupPath(D,{recurse_count:u.recurse_count});if(w=se.node,L++>40)throw new v.ErrnoError(32)}}return{path:D,node:w}},getPath:function(a){for(var u;;){if(v.isRoot(a)){var l=a.mount.mountpoint;return u?l[l.length-1]!=="/"?l+"/"+u:l+u:l}u=u?a.name+"/"+u:a.name,a=a.parent}},hashName:function(a,u){for(var l=0,h=0;h<u.length;h++)l=(l<<5)-l+u.charCodeAt(h)|0;return(a+l>>>0)%v.nameTable.length},hashAddNode:function(a){var u=v.hashName(a.parent.id,a.name);a.name_next=v.nameTable[u],v.nameTable[u]=a},hashRemoveNode:function(a){var u=v.hashName(a.parent.id,a.name);if(v.nameTable[u]===a)v.nameTable[u]=a.name_next;else for(var l=v.nameTable[u];l;){if(l.name_next===a){l.name_next=a.name_next;break}l=l.name_next}},lookupNode:function(a,u){var l=v.mayLookup(a);if(l)throw new v.ErrnoError(l,a);for(var h=v.hashName(a.id,u),_=v.nameTable[h];_;_=_.name_next){var w=_.name;if(_.parent.id===a.id&&w===u)return _}return v.lookup(a,u)},createNode:function(a,u,l,h){var _=new v.FSNode(a,u,l,h);return v.hashAddNode(_),_},destroyNode:function(a){v.hashRemoveNode(a)},isRoot:function(a){return a===a.parent},isMountpoint:function(a){return!!a.mounted},isFile:function(a){return(a&61440)===32768},isDir:function(a){return(a&61440)===16384},isLink:function(a){return(a&61440)===40960},isChrdev:function(a){return(a&61440)===8192},isBlkdev:function(a){return(a&61440)===24576},isFIFO:function(a){return(a&61440)===4096},isSocket:function(a){return(a&49152)===49152},flagModes:{r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(a){var u=v.flagModes[a];if(typeof u>"u")throw new Error("Unknown file open mode: "+a);return u},flagsToPermissionString:function(a){var u=["r","w","rw"][a&3];return a&512&&(u+="w"),u},nodePermissions:function(a,u){return v.ignorePermissions?0:u.indexOf("r")!==-1&&!(a.mode&292)||u.indexOf("w")!==-1&&!(a.mode&146)||u.indexOf("x")!==-1&&!(a.mode&73)?2:0},mayLookup:function(a){var u=v.nodePermissions(a,"x");return u||(a.node_ops.lookup?0:2)},mayCreate:function(a,u){try{var l=v.lookupNode(a,u);return 20}catch{}return v.nodePermissions(a,"wx")},mayDelete:function(a,u,l){var h;try{h=v.lookupNode(a,u)}catch(w){return w.errno}var _=v.nodePermissions(a,"wx");if(_)return _;if(l){if(!v.isDir(h.mode))return 54;if(v.isRoot(h)||v.getPath(h)===v.cwd())return 10}else if(v.isDir(h.mode))return 31;return 0},mayOpen:function(a,u){return a?v.isLink(a.mode)?32:v.isDir(a.mode)&&(v.flagsToPermissionString(u)!=="r"||u&512)?31:v.nodePermissions(a,v.flagsToPermissionString(u)):44},MAX_OPEN_FDS:4096,nextfd:function(a,u){a=a||0,u=u||v.MAX_OPEN_FDS;for(var l=a;l<=u;l++)if(!v.streams[l])return l;throw new v.ErrnoError(33)},getStream:function(a){return v.streams[a]},createStream:function(a,u,l){v.FSStream||(v.FSStream=function(){},v.FSStream.prototype={object:{get:function(){return this.node},set:function(D){this.node=D}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}}});var h=new v.FSStream;for(var _ in a)h[_]=a[_];a=h;var w=v.nextfd(u,l);return a.fd=w,v.streams[w]=a,a},closeStream:function(a){v.streams[a]=null},chrdev_stream_ops:{open:function(a){var u=v.getDevice(a.node.rdev);a.stream_ops=u.stream_ops,a.stream_ops.open&&a.stream_ops.open(a)},llseek:function(){throw new v.ErrnoError(70)}},major:function(a){return a>>8},minor:function(a){return a&255},makedev:function(a,u){return a<<8|u},registerDevice:function(a,u){v.devices[a]={stream_ops:u}},getDevice:function(a){return v.devices[a]},getMounts:function(a){for(var u=[],l=[a];l.length;){var h=l.pop();u.push(h),l.push.apply(l,h.mounts)}return u},syncfs:function(a,u){typeof a=="function"&&(u=a,a=!1),v.syncFSRequests++,v.syncFSRequests>1&&Oe("warning: "+v.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var l=v.getMounts(v.root.mount),h=0;function _(D){return F(v.syncFSRequests>0),v.syncFSRequests--,u(D)}function w(D){if(D)return w.errored?void 0:(w.errored=!0,_(D));++h>=l.length&&_(null)}l.forEach(function(D){if(!D.type.syncfs)return w(null);D.type.syncfs(D,a,w)})},mount:function(a,u,l){if(typeof a=="string")throw a;var h=l==="/",_=!l,w;if(h&&v.root)throw new v.ErrnoError(10);if(!h&&!_){var D=v.lookupPath(l,{follow_mount:!1});if(l=D.path,w=D.node,v.isMountpoint(w))throw new v.ErrnoError(10);if(!v.isDir(w.mode))throw new v.ErrnoError(54)}var R={type:a,opts:u,mountpoint:l,mounts:[]},x=a.mount(R);return x.mount=R,R.root=x,h?v.root=x:w&&(w.mounted=R,w.mount&&w.mount.mounts.push(R)),x},unmount:function(a){var u=v.lookupPath(a,{follow_mount:!1});if(!v.isMountpoint(u.node))throw new v.ErrnoError(28);var l=u.node,h=l.mounted,_=v.getMounts(h);Object.keys(v.nameTable).forEach(function(D){for(var R=v.nameTable[D];R;){var x=R.name_next;_.indexOf(R.mount)!==-1&&v.destroyNode(R),R=x}}),l.mounted=null;var w=l.mount.mounts.indexOf(h);F(w!==-1),l.mount.mounts.splice(w,1)},lookup:function(a,u){return a.node_ops.lookup(a,u)},mknod:function(a,u,l){var h=v.lookupPath(a,{parent:!0}),_=h.node,w=ct.basename(a);if(!w||w==="."||w==="..")throw new v.ErrnoError(28);var D=v.mayCreate(_,w);if(D)throw new v.ErrnoError(D);if(!_.node_ops.mknod)throw new v.ErrnoError(63);return _.node_ops.mknod(_,w,u,l)},create:function(a,u){return u=u!==void 0?u:438,u&=4095,u|=32768,v.mknod(a,u,0)},mkdir:function(a,u){return u=u!==void 0?u:511,u&=1023,u|=16384,v.mknod(a,u,0)},mkdirTree:function(a,u){for(var l=a.split("/"),h="",_=0;_<l.length;++_)if(!!l[_]){h+="/"+l[_];try{v.mkdir(h,u)}catch(w){if(w.errno!=20)throw w}}},mkdev:function(a,u,l){return typeof l>"u"&&(l=u,u=438),u|=8192,v.mknod(a,u,l)},symlink:function(a,u){if(!hr.resolve(a))throw new v.ErrnoError(44);var l=v.lookupPath(u,{parent:!0}),h=l.node;if(!h)throw new v.ErrnoError(44);var _=ct.basename(u),w=v.mayCreate(h,_);if(w)throw new v.ErrnoError(w);if(!h.node_ops.symlink)throw new v.ErrnoError(63);return h.node_ops.symlink(h,_,a)},rename:function(a,u){var l=ct.dirname(a),h=ct.dirname(u),_=ct.basename(a),w=ct.basename(u),D,R,x;try{D=v.lookupPath(a,{parent:!0}),R=D.node,D=v.lookupPath(u,{parent:!0}),x=D.node}catch{throw new v.ErrnoError(10)}if(!R||!x)throw new v.ErrnoError(44);if(R.mount!==x.mount)throw new v.ErrnoError(75);var L=v.lookupNode(R,_),B=hr.relative(a,h);if(B.charAt(0)!==".")throw new v.ErrnoError(28);if(B=hr.relative(u,l),B.charAt(0)!==".")throw new v.ErrnoError(55);var se;try{se=v.lookupNode(x,w)}catch{}if(L!==se){var ee=v.isDir(L.mode),re=v.mayDelete(R,_,ee);if(re)throw new v.ErrnoError(re);if(re=se?v.mayDelete(x,w,ee):v.mayCreate(x,w),re)throw new v.ErrnoError(re);if(!R.node_ops.rename)throw new v.ErrnoError(63);if(v.isMountpoint(L)||se&&v.isMountpoint(se))throw new v.ErrnoError(10);if(x!==R&&(re=v.nodePermissions(R,"w"),re))throw new v.ErrnoError(re);try{v.trackingDelegate.willMovePath&&v.trackingDelegate.willMovePath(a,u)}catch(le){Oe("FS.trackingDelegate['willMovePath']('"+a+"', '"+u+"') threw an exception: "+le.message)}v.hashRemoveNode(L);try{R.node_ops.rename(L,x,w)}catch(le){throw le}finally{v.hashAddNode(L)}try{v.trackingDelegate.onMovePath&&v.trackingDelegate.onMovePath(a,u)}catch(le){Oe("FS.trackingDelegate['onMovePath']('"+a+"', '"+u+"') threw an exception: "+le.message)}}},rmdir:function(a){var u=v.lookupPath(a,{parent:!0}),l=u.node,h=ct.basename(a),_=v.lookupNode(l,h),w=v.mayDelete(l,h,!0);if(w)throw new v.ErrnoError(w);if(!l.node_ops.rmdir)throw new v.ErrnoError(63);if(v.isMountpoint(_))throw new v.ErrnoError(10);try{v.trackingDelegate.willDeletePath&&v.trackingDelegate.willDeletePath(a)}catch(D){Oe("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+D.message)}l.node_ops.rmdir(l,h),v.destroyNode(_);try{v.trackingDelegate.onDeletePath&&v.trackingDelegate.onDeletePath(a)}catch(D){Oe("FS.trackingDelegate['onDeletePath']('"+a+"') threw an exception: "+D.message)}},readdir:function(a){var u=v.lookupPath(a,{follow:!0}),l=u.node;if(!l.node_ops.readdir)throw new v.ErrnoError(54);return l.node_ops.readdir(l)},unlink:function(a){var u=v.lookupPath(a,{parent:!0}),l=u.node,h=ct.basename(a),_=v.lookupNode(l,h),w=v.mayDelete(l,h,!1);if(w)throw new v.ErrnoError(w);if(!l.node_ops.unlink)throw new v.ErrnoError(63);if(v.isMountpoint(_))throw new v.ErrnoError(10);try{v.trackingDelegate.willDeletePath&&v.trackingDelegate.willDeletePath(a)}catch(D){Oe("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+D.message)}l.node_ops.unlink(l,h),v.destroyNode(_);try{v.trackingDelegate.onDeletePath&&v.trackingDelegate.onDeletePath(a)}catch(D){Oe("FS.trackingDelegate['onDeletePath']('"+a+"') threw an exception: "+D.message)}},readlink:function(a){var u=v.lookupPath(a),l=u.node;if(!l)throw new v.ErrnoError(44);if(!l.node_ops.readlink)throw new v.ErrnoError(28);return hr.resolve(v.getPath(l.parent),l.node_ops.readlink(l))},stat:function(a,u){var l=v.lookupPath(a,{follow:!u}),h=l.node;if(!h)throw new v.ErrnoError(44);if(!h.node_ops.getattr)throw new v.ErrnoError(63);return h.node_ops.getattr(h)},lstat:function(a){return v.stat(a,!0)},chmod:function(a,u,l){var h;if(typeof a=="string"){var _=v.lookupPath(a,{follow:!l});h=_.node}else h=a;if(!h.node_ops.setattr)throw new v.ErrnoError(63);h.node_ops.setattr(h,{mode:u&4095|h.mode&-4096,timestamp:Date.now()})},lchmod:function(a,u){v.chmod(a,u,!0)},fchmod:function(a,u){var l=v.getStream(a);if(!l)throw new v.ErrnoError(8);v.chmod(l.node,u)},chown:function(a,u,l,h){var _;if(typeof a=="string"){var w=v.lookupPath(a,{follow:!h});_=w.node}else _=a;if(!_.node_ops.setattr)throw new v.ErrnoError(63);_.node_ops.setattr(_,{timestamp:Date.now()})},lchown:function(a,u,l){v.chown(a,u,l,!0)},fchown:function(a,u,l){var h=v.getStream(a);if(!h)throw new v.ErrnoError(8);v.chown(h.node,u,l)},truncate:function(a,u){if(u<0)throw new v.ErrnoError(28);var l;if(typeof a=="string"){var h=v.lookupPath(a,{follow:!0});l=h.node}else l=a;if(!l.node_ops.setattr)throw new v.ErrnoError(63);if(v.isDir(l.mode))throw new v.ErrnoError(31);if(!v.isFile(l.mode))throw new v.ErrnoError(28);var _=v.nodePermissions(l,"w");if(_)throw new v.ErrnoError(_);l.node_ops.setattr(l,{size:u,timestamp:Date.now()})},ftruncate:function(a,u){var l=v.getStream(a);if(!l)throw new v.ErrnoError(8);if((l.flags&2097155)===0)throw new v.ErrnoError(28);v.truncate(l.node,u)},utime:function(a,u,l){var h=v.lookupPath(a,{follow:!0}),_=h.node;_.node_ops.setattr(_,{timestamp:Math.max(u,l)})},open:function(a,u,l,h,_){if(a==="")throw new v.ErrnoError(44);u=typeof u=="string"?v.modeStringToFlags(u):u,l=typeof l>"u"?438:l,u&64?l=l&4095|32768:l=0;var w;if(typeof a=="object")w=a;else{a=ct.normalize(a);try{var D=v.lookupPath(a,{follow:!(u&131072)});w=D.node}catch{}}var R=!1;if(u&64)if(w){if(u&128)throw new v.ErrnoError(20)}else w=v.mknod(a,l,0),R=!0;if(!w)throw new v.ErrnoError(44);if(v.isChrdev(w.mode)&&(u&=-513),u&65536&&!v.isDir(w.mode))throw new v.ErrnoError(54);if(!R){var x=v.mayOpen(w,u);if(x)throw new v.ErrnoError(x)}u&512&&v.truncate(w,0),u&=-641;var L=v.createStream({node:w,path:v.getPath(w),flags:u,seekable:!0,position:0,stream_ops:w.stream_ops,ungotten:[],error:!1},h,_);L.stream_ops.open&&L.stream_ops.open(L),s.logReadFiles&&!(u&1)&&(v.readFiles||(v.readFiles={}),a in v.readFiles||(v.readFiles[a]=1,Oe("FS.trackingDelegate error on read file: "+a)));try{if(v.trackingDelegate.onOpenFile){var B=0;(u&2097155)!==1&&(B|=v.tracking.openFlags.READ),(u&2097155)!==0&&(B|=v.tracking.openFlags.WRITE),v.trackingDelegate.onOpenFile(a,B)}}catch(se){Oe("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+se.message)}return L},close:function(a){if(v.isClosed(a))throw new v.ErrnoError(8);a.getdents&&(a.getdents=null);try{a.stream_ops.close&&a.stream_ops.close(a)}catch(u){throw u}finally{v.closeStream(a.fd)}a.fd=null},isClosed:function(a){return a.fd===null},llseek:function(a,u,l){if(v.isClosed(a))throw new v.ErrnoError(8);if(!a.seekable||!a.stream_ops.llseek)throw new v.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new v.ErrnoError(28);return a.position=a.stream_ops.llseek(a,u,l),a.ungotten=[],a.position},read:function(a,u,l,h,_){if(h<0||_<0)throw new v.ErrnoError(28);if(v.isClosed(a))throw new v.ErrnoError(8);if((a.flags&2097155)===1)throw new v.ErrnoError(8);if(v.isDir(a.node.mode))throw new v.ErrnoError(31);if(!a.stream_ops.read)throw new v.ErrnoError(28);var w=typeof _<"u";if(!w)_=a.position;else if(!a.seekable)throw new v.ErrnoError(70);var D=a.stream_ops.read(a,u,l,h,_);return w||(a.position+=D),D},write:function(a,u,l,h,_,w){if(h<0||_<0)throw new v.ErrnoError(28);if(v.isClosed(a))throw new v.ErrnoError(8);if((a.flags&2097155)===0)throw new v.ErrnoError(8);if(v.isDir(a.node.mode))throw new v.ErrnoError(31);if(!a.stream_ops.write)throw new v.ErrnoError(28);a.flags&1024&&v.llseek(a,0,2);var D=typeof _<"u";if(!D)_=a.position;else if(!a.seekable)throw new v.ErrnoError(70);var R=a.stream_ops.write(a,u,l,h,_,w);D||(a.position+=R);try{a.path&&v.trackingDelegate.onWriteToFile&&v.trackingDelegate.onWriteToFile(a.path)}catch(x){Oe("FS.trackingDelegate['onWriteToFile']('"+a.path+"') threw an exception: "+x.message)}return R},allocate:function(a,u,l){if(v.isClosed(a))throw new v.ErrnoError(8);if(u<0||l<=0)throw new v.ErrnoError(28);if((a.flags&2097155)===0)throw new v.ErrnoError(8);if(!v.isFile(a.node.mode)&&!v.isDir(a.node.mode))throw new v.ErrnoError(43);if(!a.stream_ops.allocate)throw new v.ErrnoError(138);a.stream_ops.allocate(a,u,l)},mmap:function(a,u,l,h,_,w,D){if((w&2)!==0&&(D&2)===0&&(a.flags&2097155)!==2)throw new v.ErrnoError(2);if((a.flags&2097155)===1)throw new v.ErrnoError(2);if(!a.stream_ops.mmap)throw new v.ErrnoError(43);return a.stream_ops.mmap(a,u,l,h,_,w,D)},msync:function(a,u,l,h,_){return!a||!a.stream_ops.msync?0:a.stream_ops.msync(a,u,l,h,_)},munmap:function(a){return 0},ioctl:function(a,u,l){if(!a.stream_ops.ioctl)throw new v.ErrnoError(59);return a.stream_ops.ioctl(a,u,l)},readFile:function(a,u){if(u=u||{},u.flags=u.flags||"r",u.encoding=u.encoding||"binary",u.encoding!=="utf8"&&u.encoding!=="binary")throw new Error('Invalid encoding type "'+u.encoding+'"');var l,h=v.open(a,u.flags),_=v.stat(a),w=_.size,D=new Uint8Array(w);return v.read(h,D,0,w,0),u.encoding==="utf8"?l=Qn(D,0):u.encoding==="binary"&&(l=D),v.close(h),l},writeFile:function(a,u,l){l=l||{},l.flags=l.flags||"w";var h=v.open(a,l.flags,l.mode);if(typeof u=="string"){var _=new Uint8Array(sn(u)+1),w=ur(u,_,0,_.length);v.write(h,_,0,w,void 0,l.canOwn)}else if(ArrayBuffer.isView(u))v.write(h,u,0,u.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");v.close(h)},cwd:function(){return v.currentPath},chdir:function(a){var u=v.lookupPath(a,{follow:!0});if(u.node===null)throw new v.ErrnoError(44);if(!v.isDir(u.node.mode))throw new v.ErrnoError(54);var l=v.nodePermissions(u.node,"x");if(l)throw new v.ErrnoError(l);v.currentPath=u.path},createDefaultDirectories:function(){v.mkdir("/tmp"),v.mkdir("/home"),v.mkdir("/home/web_user")},createDefaultDevices:function(){v.mkdir("/dev"),v.registerDevice(v.makedev(1,3),{read:function(){return 0},write:function(h,_,w,D,R){return D}}),v.mkdev("/dev/null",v.makedev(1,3)),ea.register(v.makedev(5,0),ea.default_tty_ops),ea.register(v.makedev(6,0),ea.default_tty1_ops),v.mkdev("/dev/tty",v.makedev(5,0)),v.mkdev("/dev/tty1",v.makedev(6,0));var a;if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var u=new Uint8Array(1);a=function(){return crypto.getRandomValues(u),u[0]}}else if(P)try{var l=require("crypto");a=function(){return l.randomBytes(1)[0]}}catch{}a||(a=function(){C("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")}),v.createDevice("/dev","random",a),v.createDevice("/dev","urandom",a),v.mkdir("/dev/shm"),v.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){v.mkdir("/proc"),v.mkdir("/proc/self"),v.mkdir("/proc/self/fd"),v.mount({mount:function(){var a=v.createNode("/proc/self","fd",16895,73);return a.node_ops={lookup:function(u,l){var h=+l,_=v.getStream(h);if(!_)throw new v.ErrnoError(8);var w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return _.path}}};return w.parent=w,w}},a}},{},"/proc/self/fd")},createStandardStreams:function(){s.stdin?v.createDevice("/dev","stdin",s.stdin):v.symlink("/dev/tty","/dev/stdin"),s.stdout?v.createDevice("/dev","stdout",null,s.stdout):v.symlink("/dev/tty","/dev/stdout"),s.stderr?v.createDevice("/dev","stderr",null,s.stderr):v.symlink("/dev/tty1","/dev/stderr");var a=v.open("/dev/stdin","r"),u=v.open("/dev/stdout","w"),l=v.open("/dev/stderr","w");F(a.fd===0,"invalid handle for stdin ("+a.fd+")"),F(u.fd===1,"invalid handle for stdout ("+u.fd+")"),F(l.fd===2,"invalid handle for stderr ("+l.fd+")")},ensureErrnoError:function(){v.ErrnoError||(v.ErrnoError=function(u,l){this.node=l,this.setErrno=function(h){this.errno=h;for(var _ in jt)if(jt[_]===h){this.code=_;break}},this.setErrno(u),this.message=Du[u],this.stack&&(Object.defineProperty(this,"stack",{value:new Error().stack,writable:!0}),this.stack=Ts(this.stack))},v.ErrnoError.prototype=new Error,v.ErrnoError.prototype.constructor=v.ErrnoError,[44].forEach(function(a){v.genericErrors[a]=new v.ErrnoError(a),v.genericErrors[a].stack="<generic error, no stack>"}))},staticInit:function(){v.ensureErrnoError(),v.nameTable=new Array(4096),v.mount(qe,{},"/"),v.createDefaultDirectories(),v.createDefaultDevices(),v.createSpecialDirectories(),v.filesystems={MEMFS:qe}},init:function(a,u,l){F(!v.init.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),v.init.initialized=!0,v.ensureErrnoError(),s.stdin=a||s.stdin,s.stdout=u||s.stdout,s.stderr=l||s.stderr,v.createStandardStreams()},quit:function(){v.init.initialized=!1;var a=s._fflush;a&&a(0);for(var u=0;u<v.streams.length;u++){var l=v.streams[u];!l||v.close(l)}},getMode:function(a,u){var l=0;return a&&(l|=365),u&&(l|=146),l},joinPath:function(a,u){var l=ct.join.apply(null,a);return u&&l[0]=="/"&&(l=l.substr(1)),l},absolutePath:function(a,u){return hr.resolve(u,a)},standardizePath:function(a){return ct.normalize(a)},findObject:function(a,u){var l=v.analyzePath(a,u);return l.exists?l.object:(Pa(l.error),null)},analyzePath:function(a,u){try{var l=v.lookupPath(a,{follow:!u});a=l.path}catch{}var h={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=v.lookupPath(a,{parent:!0});h.parentExists=!0,h.parentPath=l.path,h.parentObject=l.node,h.name=ct.basename(a),l=v.lookupPath(a,{follow:!u}),h.exists=!0,h.path=l.path,h.object=l.node,h.name=l.node.name,h.isRoot=l.path==="/"}catch(_){h.error=_.errno}return h},createFolder:function(a,u,l,h){var _=ct.join2(typeof a=="string"?a:v.getPath(a),u),w=v.getMode(l,h);return v.mkdir(_,w)},createPath:function(a,u,l,h){a=typeof a=="string"?a:v.getPath(a);for(var _=u.split("/").reverse();_.length;){var w=_.pop();if(!!w){var D=ct.join2(a,w);try{v.mkdir(D)}catch{}a=D}}return D},createFile:function(a,u,l,h,_){var w=ct.join2(typeof a=="string"?a:v.getPath(a),u),D=v.getMode(h,_);return v.create(w,D)},createDataFile:function(a,u,l,h,_,w){var D=u?ct.join2(typeof a=="string"?a:v.getPath(a),u):a,R=v.getMode(h,_),x=v.create(D,R);if(l){if(typeof l=="string"){for(var L=new Array(l.length),B=0,se=l.length;B<se;++B)L[B]=l.charCodeAt(B);l=L}v.chmod(x,R|146);var ee=v.open(x,"w");v.write(ee,l,0,l.length,0,w),v.close(ee),v.chmod(x,R)}return x},createDevice:function(a,u,l,h){var _=ct.join2(typeof a=="string"?a:v.getPath(a),u),w=v.getMode(!!l,!!h);v.createDevice.major||(v.createDevice.major=64);var D=v.makedev(v.createDevice.major++,0);return v.registerDevice(D,{open:function(R){R.seekable=!1},close:function(R){h&&h.buffer&&h.buffer.length&&h(10)},read:function(R,x,L,B,se){for(var ee=0,re=0;re<B;re++){var le;try{le=l()}catch{throw new v.ErrnoError(29)}if(le===void 0&&ee===0)throw new v.ErrnoError(6);if(le==null)break;ee++,x[L+re]=le}return ee&&(R.node.timestamp=Date.now()),ee},write:function(R,x,L,B,se){for(var ee=0;ee<B;ee++)try{h(x[L+ee])}catch{throw new v.ErrnoError(29)}return B&&(R.node.timestamp=Date.now()),ee}}),v.mkdev(_,w,D)},createLink:function(a,u,l,h,_){var w=ct.join2(typeof a=="string"?a:v.getPath(a),u);return v.symlink(l,w)},forceLoadFile:function(a){if(a.isDevice||a.isFolder||a.link||a.contents)return!0;var u=!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(oe)try{a.contents=Jo(oe(a.url),!0),a.usedBytes=a.contents.length}catch{u=!1}else throw new Error("Cannot load without read() or XMLHttpRequest.");return u||Pa(29),u},createLazyFile:function(a,u,l,h,_){function w(){this.lengthKnown=!1,this.chunks=[]}if(w.prototype.get=function(ee){if(!(ee>this.length-1||ee<0)){var re=ee%this.chunkSize,le=ee/this.chunkSize|0;return this.getter(le)[re]}},w.prototype.setDataGetter=function(ee){this.getter=ee},w.prototype.cacheLength=function(){var ee=new XMLHttpRequest;if(ee.open("HEAD",l,!1),ee.send(null),!(ee.status>=200&&ee.status<300||ee.status===304))throw new Error("Couldn't load "+l+". Status: "+ee.status);var re=Number(ee.getResponseHeader("Content-length")),le,te=(le=ee.getResponseHeader("Accept-Ranges"))&&le==="bytes",Le=(le=ee.getResponseHeader("Content-Encoding"))&&le==="gzip",Ae=1024*1024;te||(Ae=re);var Y=function(Ue,je){if(Ue>je)throw new Error("invalid range ("+Ue+", "+je+") or no bytes requested!");if(je>re-1)throw new Error("only "+re+" bytes available! programmer error!");var ye=new XMLHttpRequest;if(ye.open("GET",l,!1),re!==Ae&&ye.setRequestHeader("Range","bytes="+Ue+"-"+je),typeof Uint8Array<"u"&&(ye.responseType="arraybuffer"),ye.overrideMimeType&&ye.overrideMimeType("text/plain; charset=x-user-defined"),ye.send(null),!(ye.status>=200&&ye.status<300||ye.status===304))throw new Error("Couldn't load "+l+". Status: "+ye.status);return ye.response!==void 0?new Uint8Array(ye.response||[]):Jo(ye.responseText||"",!0)},he=this;he.setDataGetter(function(Ue){var je=Ue*Ae,ye=(Ue+1)*Ae-1;if(ye=Math.min(ye,re-1),typeof he.chunks[Ue]>"u"&&(he.chunks[Ue]=Y(je,ye)),typeof he.chunks[Ue]>"u")throw new Error("doXHR failed!");return he.chunks[Ue]}),(Le||!re)&&(Ae=re=1,re=this.getter(0).length,Ae=re,ke("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=re,this._chunkSize=Ae,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!H)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var D=new w;Object.defineProperties(D,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var R={isDevice:!1,contents:D}}else var R={isDevice:!1,url:l};var x=v.createFile(a,u,R,h,_);R.contents?x.contents=R.contents:R.url&&(x.contents=null,x.url=R.url),Object.defineProperties(x,{usedBytes:{get:function(){return this.contents.length}}});var L={},B=Object.keys(x.stream_ops);return B.forEach(function(se){var ee=x.stream_ops[se];L[se]=function(){if(!v.forceLoadFile(x))throw new v.ErrnoError(29);return ee.apply(null,arguments)}}),L.read=function(ee,re,le,te,Le){if(!v.forceLoadFile(x))throw new v.ErrnoError(29);var Ae=ee.node.contents;if(Le>=Ae.length)return 0;var Y=Math.min(Ae.length-Le,te);if(F(Y>=0),Ae.slice)for(var he=0;he<Y;he++)re[le+he]=Ae[Le+he];else for(var he=0;he<Y;he++)re[le+he]=Ae.get(Le+he);return Y},x.stream_ops=L,x},createPreloadedFile:function(a,u,l,h,_,w,D,R,x,L){Browser.init();var B=u?hr.resolve(ct.join2(a,u)):a,se=_e("cp "+B);function ee(re){function le(Le){L&&L(),R||v.createDataFile(a,u,Le,h,_,x),w&&w(),rt(se)}var te=!1;s.preloadPlugins.forEach(function(Le){te||Le.canHandle(B)&&(Le.handle(re,B,le,function(){D&&D(),rt(se)}),te=!0)}),te||le(re)}He(se),typeof l=="string"?Browser.asyncLoad(l,function(re){ee(re)},D):ee(l)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(a,u,l){u=u||function(){},l=l||function(){};var h=v.indexedDB();try{var _=h.open(v.DB_NAME(),v.DB_VERSION)}catch(w){return l(w)}_.onupgradeneeded=function(){ke("creating db");var D=_.result;D.createObjectStore(v.DB_STORE_NAME)},_.onsuccess=function(){var D=_.result,R=D.transaction([v.DB_STORE_NAME],"readwrite"),x=R.objectStore(v.DB_STORE_NAME),L=0,B=0,se=a.length;function ee(){B==0?u():l()}a.forEach(function(re){var le=x.put(v.analyzePath(re).object.contents,re);le.onsuccess=function(){L++,L+B==se&&ee()},le.onerror=function(){B++,L+B==se&&ee()}}),R.onerror=l},_.onerror=l},loadFilesFromDB:function(a,u,l){u=u||function(){},l=l||function(){};var h=v.indexedDB();try{var _=h.open(v.DB_NAME(),v.DB_VERSION)}catch(w){return l(w)}_.onupgradeneeded=l,_.onsuccess=function(){var D=_.result;try{var R=D.transaction([v.DB_STORE_NAME],"readonly")}catch(re){l(re);return}var x=R.objectStore(v.DB_STORE_NAME),L=0,B=0,se=a.length;function ee(){B==0?u():l()}a.forEach(function(re){var le=x.get(re);le.onsuccess=function(){v.analyzePath(re).exists&&v.unlink(re),v.createDataFile(ct.dirname(re),ct.basename(re),le.result,!0,!0,!0),L++,L+B==se&&ee()},le.onerror=function(){B++,L+B==se&&ee()}}),R.onerror=l},_.onerror=l}},Et={mount:function(a){return s.websocket=s.websocket&&typeof s.websocket=="object"?s.websocket:{},s.websocket._callbacks={},s.websocket.on=function(u,l){return typeof l=="function"&&(this._callbacks[u]=l),this},s.websocket.emit=function(u,l){typeof this._callbacks[u]=="function"&&this._callbacks[u].call(this,l)},v.createNode(null,"/",16895,0)},createSocket:function(a,u,l){var h=u==1;l&&F(h==(l==6));var _={family:a,type:u,protocol:l,server:null,error:null,peers:{},pending:[],recv_queue:[],sock_ops:Et.websocket_sock_ops},w=Et.nextname(),D=v.createNode(Et.root,w,49152,0);D.sock=_;var R=v.createStream({path:w,node:D,flags:v.modeStringToFlags("r+"),seekable:!1,stream_ops:Et.stream_ops});return _.stream=R,_},getSocket:function(a){var u=v.getStream(a);return!u||!v.isSocket(u.node.mode)?null:u.node.sock},stream_ops:{poll:function(a){var u=a.node.sock;return u.sock_ops.poll(u)},ioctl:function(a,u,l){var h=a.node.sock;return h.sock_ops.ioctl(h,u,l)},read:function(a,u,l,h,_){var w=a.node.sock,D=w.sock_ops.recvmsg(w,h);return D?(u.set(D.buffer,l),D.buffer.length):0},write:function(a,u,l,h,_){var w=a.node.sock;return w.sock_ops.sendmsg(w,u,l,h)},close:function(a){var u=a.node.sock;u.sock_ops.close(u)}},nextname:function(){return Et.nextname.current||(Et.nextname.current=0),"socket["+Et.nextname.current+++"]"},websocket_sock_ops:{createPeer:function(a,u,l){var h;if(typeof u=="object"&&(h=u,u=null,l=null),h)if(h._socket)u=h._socket.remoteAddress,l=h._socket.remotePort;else{var _=/ws[s]?:\/\/([^:]+):(\d+)/.exec(h.url);if(!_)throw new Error("WebSocket URL must be in the format ws(s)://address:port");u=_[1],l=parseInt(_[2],10)}else try{var w=s.websocket&&typeof s.websocket=="object",D="ws:#".replace("#","//");if(w&&typeof s.websocket.url=="string"&&(D=s.websocket.url),D==="ws://"||D==="wss://"){var R=u.split("/");D=D+R[0]+":"+l+"/"+R.slice(1).join("/")}var x="binary";w&&typeof s.websocket.subprotocol=="string"&&(x=s.websocket.subprotocol);var L=void 0;x!=="null"&&(x=x.replace(/^ +| +$/g,"").split(/ *, */),L=P?{protocol:x.toString()}:x),w&&s.websocket.subprotocol===null&&(x="null",L=void 0);var B;P||(B=WebSocket),h=new B(D,L),h.binaryType="arraybuffer"}catch{throw new v.ErrnoError(jt.EHOSTUNREACH)}var se={addr:u,port:l,socket:h,dgram_send_queue:[]};return Et.websocket_sock_ops.addPeer(a,se),Et.websocket_sock_ops.handlePeerEvents(a,se),a.type===2&&typeof a.sport<"u"&&se.dgram_send_queue.push(new Uint8Array([255,255,255,255,"p".charCodeAt(0),"o".charCodeAt(0),"r".charCodeAt(0),"t".charCodeAt(0),(a.sport&65280)>>8,a.sport&255])),se},getPeer:function(a,u,l){return a.peers[u+":"+l]},addPeer:function(a,u){a.peers[u.addr+":"+u.port]=u},removePeer:function(a,u){delete a.peers[u.addr+":"+u.port]},handlePeerEvents:function(a,u){var l=!0,h=function(){s.websocket.emit("open",a.stream.fd);try{for(var w=u.dgram_send_queue.shift();w;)u.socket.send(w),w=u.dgram_send_queue.shift()}catch{u.socket.close()}};function _(w){if(typeof w=="string"){var D=new TextEncoder;w=D.encode(w)}else{if(F(w.byteLength!==void 0),w.byteLength==0)return;w=new Uint8Array(w)}var R=l;if(l=!1,R&&w.length===10&&w[0]===255&&w[1]===255&&w[2]===255&&w[3]===255&&w[4]==="p".charCodeAt(0)&&w[5]==="o".charCodeAt(0)&&w[6]==="r".charCodeAt(0)&&w[7]==="t".charCodeAt(0)){var x=w[8]<<8|w[9];Et.websocket_sock_ops.removePeer(a,u),u.port=x,Et.websocket_sock_ops.addPeer(a,u);return}a.recv_queue.push({addr:u.addr,port:u.port,data:w}),s.websocket.emit("message",a.stream.fd)}P?(u.socket.on("open",h),u.socket.on("message",function(w,D){!D.binary||_(new Uint8Array(w).buffer)}),u.socket.on("close",function(){s.websocket.emit("close",a.stream.fd)}),u.socket.on("error",function(w){a.error=jt.ECONNREFUSED,s.websocket.emit("error",[a.stream.fd,a.error,"ECONNREFUSED: Connection refused"])})):(u.socket.onopen=h,u.socket.onclose=function(){s.websocket.emit("close",a.stream.fd)},u.socket.onmessage=function(D){_(D.data)},u.socket.onerror=function(w){a.error=jt.ECONNREFUSED,s.websocket.emit("error",[a.stream.fd,a.error,"ECONNREFUSED: Connection refused"])})},poll:function(a){if(a.type===1&&a.server)return a.pending.length?65:0;var u=0,l=a.type===1?Et.websocket_sock_ops.getPeer(a,a.daddr,a.dport):null;return(a.recv_queue.length||!l||l&&l.socket.readyState===l.socket.CLOSING||l&&l.socket.readyState===l.socket.CLOSED)&&(u|=65),(!l||l&&l.socket.readyState===l.socket.OPEN)&&(u|=4),(l&&l.socket.readyState===l.socket.CLOSING||l&&l.socket.readyState===l.socket.CLOSED)&&(u|=16),u},ioctl:function(a,u,l){switch(u){case 21531:var h=0;return a.recv_queue.length&&(h=a.recv_queue[0].data.length),$[l>>2]=h,0;default:return jt.EINVAL}},close:function(a){if(a.server){try{a.server.close()}catch{}a.server=null}for(var u=Object.keys(a.peers),l=0;l<u.length;l++){var h=a.peers[u[l]];try{h.socket.close()}catch{}Et.websocket_sock_ops.removePeer(a,h)}return 0},bind:function(a,u,l){if(typeof a.saddr<"u"||typeof a.sport<"u")throw new v.ErrnoError(jt.EINVAL);if(a.saddr=u,a.sport=l,a.type===2){a.server&&(a.server.close(),a.server=null);try{a.sock_ops.listen(a,0)}catch(h){if(!(h instanceof v.ErrnoError)||h.errno!==jt.EOPNOTSUPP)throw h}}},connect:function(a,u,l){if(a.server)throw new v.ErrnoError(jt.EOPNOTSUPP);if(typeof a.daddr<"u"&&typeof a.dport<"u"){var h=Et.websocket_sock_ops.getPeer(a,a.daddr,a.dport);if(h)throw h.socket.readyState===h.socket.CONNECTING?new v.ErrnoError(jt.EALREADY):new v.ErrnoError(jt.EISCONN)}var _=Et.websocket_sock_ops.createPeer(a,u,l);throw a.daddr=_.addr,a.dport=_.port,new v.ErrnoError(jt.EINPROGRESS)},listen:function(a,u){},accept:function(a){if(!a.server)throw new v.ErrnoError(jt.EINVAL);var u=a.pending.shift();return u.stream.flags=a.stream.flags,u},getname:function(a,u){var l,h;if(u){if(a.daddr===void 0||a.dport===void 0)throw new v.ErrnoError(jt.ENOTCONN);l=a.daddr,h=a.dport}else l=a.saddr||0,h=a.sport||0;return{addr:l,port:h}},sendmsg:function(a,u,l,h,_,w){if(a.type===2){if((_===void 0||w===void 0)&&(_=a.daddr,w=a.dport),_===void 0||w===void 0)throw new v.ErrnoError(jt.EDESTADDRREQ)}else _=a.daddr,w=a.dport;var D=Et.websocket_sock_ops.getPeer(a,_,w);if(a.type===1){if(!D||D.socket.readyState===D.socket.CLOSING||D.socket.readyState===D.socket.CLOSED)throw new v.ErrnoError(jt.ENOTCONN);if(D.socket.readyState===D.socket.CONNECTING)throw new v.ErrnoError(jt.EAGAIN)}ArrayBuffer.isView(u)&&(l+=u.byteOffset,u=u.buffer);var R;if(R=u.slice(l,l+h),a.type===2&&(!D||D.socket.readyState!==D.socket.OPEN))return(!D||D.socket.readyState===D.socket.CLOSING||D.socket.readyState===D.socket.CLOSED)&&(D=Et.websocket_sock_ops.createPeer(a,_,w)),D.dgram_send_queue.push(R),h;try{return D.socket.send(R),h}catch{throw new v.ErrnoError(jt.EINVAL)}},recvmsg:function(a,u){if(a.type===1&&a.server)throw new v.ErrnoError(jt.ENOTCONN);var l=a.recv_queue.shift();if(!l)if(a.type===1){var h=Et.websocket_sock_ops.getPeer(a,a.daddr,a.dport);if(h){if(h.socket.readyState===h.socket.CLOSING||h.socket.readyState===h.socket.CLOSED)return null;throw new v.ErrnoError(jt.EAGAIN)}else throw new v.ErrnoError(jt.ENOTCONN)}else throw new v.ErrnoError(jt.EAGAIN);var _=l.data.byteLength||l.data.length,w=l.data.byteOffset||0,D=l.data.buffer||l.data,R=Math.min(u,_),x={buffer:new Uint8Array(D,w,R),addr:l.addr,port:l.port};if(a.type===1&&R<_){var L=_-R;l.data=new Uint8Array(D,w+R,L),a.recv_queue.unshift(l)}return x}}};function _a(a){for(var u=a.split("."),l=0;l<4;l++){var h=Number(u[l]);if(isNaN(h))return null;u[l]=h}return(u[0]|u[1]<<8|u[2]<<16|u[3]<<24)>>>0}function ta(a){return parseInt(a,void 0)}function _o(a){var u,l,h,_,w=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,D=[];if(!w.test(a))return null;if(a==="::")return[0,0,0,0,0,0,0,0];for(a.indexOf("::")===0?a=a.replace("::","Z:"):a=a.replace("::",":Z:"),a.indexOf(".")>0?(a=a.replace(new RegExp("[.]","g"),":"),u=a.split(":"),u[u.length-4]=ta(u[u.length-4])+ta(u[u.length-3])*256,u[u.length-3]=ta(u[u.length-2])+ta(u[u.length-1])*256,u=u.slice(0,u.length-2)):u=a.split(":"),h=0,_=0,l=0;l<u.length;l++)if(typeof u[l]=="string")if(u[l]==="Z"){for(_=0;_<8-u.length+1;_++)D[l+_]=0;h=_-1}else D[l+h]=ks(parseInt(u[l],16));else D[l+h]=u[l];return[D[1]<<16|D[0],D[3]<<16|D[2],D[5]<<16|D[4],D[7]<<16|D[6]]}var dn={address_map:{id:1,addrs:{},names:{}},lookup_name:function(a){var u=_a(a);if(u!==null||(u=_o(a),u!==null))return a;var l;if(dn.address_map.addrs[a])l=dn.address_map.addrs[a];else{var h=dn.address_map.id++;F(h<65535,"exceeded max address mappings of 65535"),l="172.29."+(h&255)+"."+(h&65280),dn.address_map.names[l]=a,dn.address_map.addrs[a]=l}return l},lookup_addr:function(a){return dn.address_map.names[a]?dn.address_map.names[a]:null}};function Mi(a){return(a&255)+"."+(a>>8&255)+"."+(a>>16&255)+"."+(a>>24&255)}function Di(a){var u="",l=0,h=0,_=0,w=0,D=0,R=0,x=[a[0]&65535,a[0]>>16,a[1]&65535,a[1]>>16,a[2]&65535,a[2]>>16,a[3]&65535,a[3]>>16],L=!0,B="";for(R=0;R<5;R++)if(x[R]!==0){L=!1;break}if(L){if(B=Mi(x[6]|x[7]<<16),x[5]===-1)return u="::ffff:",u+=B,u;if(x[5]===0)return u="::",B==="0.0.0.0"&&(B=""),B==="0.0.0.1"&&(B="1"),u+=B,u}for(l=0;l<8;l++)x[l]===0&&(l-_>1&&(D=0),_=l,D++),D>h&&(h=D,w=l-h+1);for(l=0;l<8;l++){if(h>1&&x[l]===0&&l>=w&&l<w+h){l===w&&(u+=":",w===0&&(u+=":"));continue}u+=Number(Is(x[l]&65535)).toString(16),u+=l<7?":":""}return u}function ws(a,u){var l=Wt[a>>1],h=Is(wn[a+2>>1]),_;switch(l){case 2:if(u!==16)return{errno:28};_=$[a+4>>2],_=Mi(_);break;case 10:if(u!==28)return{errno:28};_=[$[a+8>>2],$[a+12>>2],$[a+16>>2],$[a+20>>2]],_=Di(_);break;default:return{errno:5}}return{family:l,addr:_,port:h}}function Hr(a,u,l,h){switch(u){case 2:l=_a(l),Wt[a>>1]=u,$[a+4>>2]=l,Wt[a+2>>1]=ks(h);break;case 10:l=_o(l),$[a>>2]=u,$[a+8>>2]=l[0],$[a+12>>2]=l[1],$[a+16>>2]=l[2],$[a+20>>2]=l[3],Wt[a+2>>1]=ks(h),$[a+4>>2]=0,$[a+24>>2]=0;break;default:return{errno:5}}return{}}var we={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(a,u){if(u[0]!=="/"){var l;if(a===-100)l=v.cwd();else{var h=v.getStream(a);if(!h)throw new v.ErrnoError(8);l=h.path}u=ct.join2(l,u)}return u},doStat:function(a,u,l){try{var h=a(u)}catch(_){if(_&&_.node&&ct.normalize(u)!==ct.normalize(v.getPath(_.node)))return-54;throw _}return $[l>>2]=h.dev,$[l+4>>2]=0,$[l+8>>2]=h.ino,$[l+12>>2]=h.mode,$[l+16>>2]=h.nlink,$[l+20>>2]=h.uid,$[l+24>>2]=h.gid,$[l+28>>2]=h.rdev,$[l+32>>2]=0,yn=[h.size>>>0,(_t=h.size,+ya(_t)>=1?_t>0?(Jr(+Ur(_t/4294967296),4294967295)|0)>>>0:~~+ga((_t-+(~~_t>>>0))/4294967296)>>>0:0)],$[l+40>>2]=yn[0],$[l+44>>2]=yn[1],$[l+48>>2]=4096,$[l+52>>2]=h.blocks,$[l+56>>2]=h.atime.getTime()/1e3|0,$[l+60>>2]=0,$[l+64>>2]=h.mtime.getTime()/1e3|0,$[l+68>>2]=0,$[l+72>>2]=h.ctime.getTime()/1e3|0,$[l+76>>2]=0,yn=[h.ino>>>0,(_t=h.ino,+ya(_t)>=1?_t>0?(Jr(+Ur(_t/4294967296),4294967295)|0)>>>0:~~+ga((_t-+(~~_t>>>0))/4294967296)>>>0:0)],$[l+80>>2]=yn[0],$[l+84>>2]=yn[1],0},doMsync:function(a,u,l,h,_){var w=vt.slice(a,a+l);v.msync(u,w,_,l,h)},doMkdir:function(a,u){return a=ct.normalize(a),a[a.length-1]==="/"&&(a=a.substr(0,a.length-1)),v.mkdir(a,u,0),0},doMknod:function(a,u,l){switch(u&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return v.mknod(a,u,l),0},doReadlink:function(a,u,l){if(l<=0)return-28;var h=v.readlink(a),_=Math.min(l,sn(h)),w=nt[u+_];return $t(h,u,l+1),nt[u+_]=w,_},doAccess:function(a,u){if(u&-8)return-28;var l,h=v.lookupPath(a,{follow:!0});if(l=h.node,!l)return-44;var _="";return u&4&&(_+="r"),u&2&&(_+="w"),u&1&&(_+="x"),_&&v.nodePermissions(l,_)?-2:0},doDup:function(a,u,l){var h=v.getStream(l);return h&&v.close(h),v.open(a,u,0,l,l).fd},doReadv:function(a,u,l,h){for(var _=0,w=0;w<l;w++){var D=$[u+w*8>>2],R=$[u+(w*8+4)>>2],x=v.read(a,nt,D,R,h);if(x<0)return-1;if(_+=x,x<R)break}return _},doWritev:function(a,u,l,h){for(var _=0,w=0;w<l;w++){var D=$[u+w*8>>2],R=$[u+(w*8+4)>>2],x=v.write(a,nt,D,R,h);if(x<0)return-1;_+=x}return _},varargs:void 0,get:function(){F(we.varargs!=null),we.varargs+=4;var a=$[we.varargs-4>>2];return a},getStr:function(a){var u=hn(a);return u},getStreamFromFD:function(a){var u=v.getStream(a);if(!u)throw new v.ErrnoError(8);return u},get64:function(a,u){return a>=0?F(u===0):F(u===-1),a}};function Ai(a,u){try{we.varargs=u;var l=function(){var Xn=Et.getSocket(we.get());if(!Xn)throw new v.ErrnoError(8);return Xn},h=function(Xn){var Gi=we.get(),ju=we.get();if(Xn&&Gi===0)return null;var no=ws(Gi,ju);if(no.errno)throw new v.ErrnoError(no.errno);return no.addr=dn.lookup_addr(no.addr)||no.addr,no};switch(a){case 1:{var _=we.get(),w=we.get(),D=we.get(),R=Et.createSocket(_,w,D);return F(R.stream.fd<64),R.stream.fd}case 2:{var R=l(),x=h();return R.sock_ops.bind(R,x.addr,x.port),0}case 3:{var R=l(),x=h();return R.sock_ops.connect(R,x.addr,x.port),0}case 4:{var R=l(),L=we.get();return R.sock_ops.listen(R,L),0}case 5:{var R=l(),B=we.get(),se=we.get(),ee=R.sock_ops.accept(R);if(B){var re=Hr(B,ee.family,dn.lookup_name(ee.daddr),ee.dport);F(!re.errno)}return ee.stream.fd}case 6:{var R=l(),B=we.get(),se=we.get(),re=Hr(B,R.family,dn.lookup_name(R.saddr||"0.0.0.0"),R.sport);return F(!re.errno),0}case 7:{var R=l(),B=we.get(),se=we.get();if(!R.daddr)return-53;var re=Hr(B,R.family,dn.lookup_name(R.daddr),R.dport);return F(!re.errno),0}case 11:{var R=l(),le=we.get(),te=we.get(),Le=we.get(),Ae=h(!0);return Ae?R.sock_ops.sendmsg(R,nt,le,te,Ae.addr,Ae.port):v.write(R.stream,nt,le,te)}case 12:{var R=l(),Y=we.get(),he=we.get(),Le=we.get(),B=we.get(),se=we.get(),Ue=R.sock_ops.recvmsg(R,he);if(!Ue)return 0;if(B){var re=Hr(B,R.family,dn.lookup_name(Ue.addr),Ue.port);F(!re.errno)}return vt.set(Ue.buffer,Y),Ue.buffer.byteLength}case 14:return-50;case 15:{var R=l(),je=we.get(),ye=we.get(),zt=we.get(),rn=we.get();return je===1&&ye===4?($[zt>>2]=R.error,$[rn>>2]=4,R.error=null,0):-50}case 16:{var R=l(),le=we.get(),Le=we.get(),fn=$[le+8>>2],Mn=$[le+12>>2],B,Xr,yr=$[le>>2],Ls=$[le+4>>2];if(yr){var x=ws(yr,Ls);if(x.errno)return-x.errno;Xr=x.port,B=dn.lookup_addr(x.addr)||x.addr}for(var Zo=0,Dn=0;Dn<Mn;Dn++)Zo+=$[fn+(8*Dn+4)>>2];for(var ei=new Uint8Array(Zo),Kn=0,Dn=0;Dn<Mn;Dn++)for(var Vi=$[fn+(8*Dn+0)>>2],Wi=$[fn+(8*Dn+4)>>2],Qi=0;Qi<Wi;Qi++)ei[Kn++]=nt[Vi+Qi>>0];return R.sock_ops.sendmsg(R,ei,0,Zo,B,Xr)}case 17:{for(var R=l(),le=we.get(),Le=we.get(),fn=$[le+8>>2],Mn=$[le+12>>2],Zo=0,Dn=0;Dn<Mn;Dn++)Zo+=$[fn+(8*Dn+4)>>2];var Ue=R.sock_ops.recvmsg(R,Zo);if(!Ue)return 0;var yr=$[le>>2];if(yr){var re=Hr(yr,R.family,dn.lookup_name(Ue.addr),Ue.port);F(!re.errno)}for(var ia=0,Yi=Ue.buffer.byteLength,Dn=0;Yi>0&&Dn<Mn;Dn++){var Vi=$[fn+(8*Dn+0)>>2],Wi=$[fn+(8*Dn+4)>>2];if(!!Wi){var te=Math.min(Wi,Yi),Y=Ue.buffer.subarray(ia,ia+te);vt.set(Y,Vi+ia),ia+=te,Yi-=te}}return ia}default:return-52}}catch(Xn){return(typeof v>"u"||!(Xn instanceof v.ErrnoError))&&C(Xn),-Xn.errno}}function $o(a){try{return a=we.getStr(a),v.chdir(a),0}catch(u){return(typeof v>"u"||!(u instanceof v.ErrnoError))&&C(u),-u.errno}}function Ss(a,u,l,h,_){try{F(a<=64,"nfds must be less than or equal to 64"),F(!h,"exceptfds not supported");for(var w=0,D=u?$[u>>2]:0,R=u?$[u+4>>2]:0,x=l?$[l>>2]:0,L=l?$[l+4>>2]:0,B=h?$[h>>2]:0,se=h?$[h+4>>2]:0,ee=0,re=0,le=0,te=0,Le=0,Ae=0,Y=(u?$[u>>2]:0)|(l?$[l>>2]:0)|(h?$[h>>2]:0),he=(u?$[u+4>>2]:0)|(l?$[l+4>>2]:0)|(h?$[h+4>>2]:0),Ue=function(fn,Mn,Xr,yr){return fn<32?Mn&yr:Xr&yr},je=0;je<a;je++){var ye=1<<je%32;if(!!Ue(je,Y,he,ye)){var zt=v.getStream(je);if(!zt)throw new v.ErrnoError(8);var rn=we.DEFAULT_POLLMASK;zt.stream_ops.poll&&(rn=zt.stream_ops.poll(zt)),rn&1&&Ue(je,D,R,ye)&&(je<32?ee=ee|ye:re=re|ye,w++),rn&4&&Ue(je,x,L,ye)&&(je<32?le=le|ye:te=te|ye,w++),rn&2&&Ue(je,B,se,ye)&&(je<32?Le=Le|ye:Ae=Ae|ye,w++)}}return u&&($[u>>2]=ee,$[u+4>>2]=re),l&&($[l>>2]=le,$[l+4>>2]=te),h&&($[h>>2]=Le,$[h+4>>2]=Ae),w}catch(fn){return(typeof v>"u"||!(fn instanceof v.ErrnoError))&&C(fn),-fn.errno}}function bt(a,u){try{if(u===0)return-28;var l=v.cwd(),h=sn(l);return u<h+1?-68:($t(l,a,u),a)}catch(_){return(typeof v>"u"||!(_ instanceof v.ErrnoError))&&C(_),-_.errno}}function Ci(a,u){try{return a=we.getStr(a),we.doStat(v.stat,a,u)}catch(l){return(typeof v>"u"||!(l instanceof v.ErrnoError))&&C(l),-l.errno}}function Pi(a,u){try{var l=we.getStreamFromFD(a);return we.doStat(v.stat,l.path,u)}catch(h){return(typeof v>"u"||!(h instanceof v.ErrnoError))&&C(h),-h.errno}}function et(a,u,l){we.varargs=l;try{var h=we.getStreamFromFD(a);switch(u){case 0:{var _=we.get();if(_<0)return-28;var w;return w=v.open(h.path,h.flags,0,_),w.fd}case 1:case 2:return 0;case 3:return h.flags;case 4:{var _=we.get();return h.flags|=_,0}case 12:{var _=we.get(),D=0;return Wt[_+D>>1]=2,0}case 13:case 14:return 0;case 16:case 8:return-28;case 9:return Pa(28),-1;default:return-28}}catch(R){return(typeof v>"u"||!(R instanceof v.ErrnoError))&&C(R),-R.errno}}function Rs(a,u,l){try{var h=we.getStreamFromFD(a);return v.read(h,nt,u,l)}catch(_){return(typeof v>"u"||!(_ instanceof v.ErrnoError))&&C(_),-_.errno}}function jn(a,u){try{return a=we.getStr(a),we.doMkdir(a,u)}catch(l){return(typeof v>"u"||!(l instanceof v.ErrnoError))&&C(l),-l.errno}}function Eo(a,u,l){we.varargs=l;try{var h=we.getStr(a),_=we.get(),w=v.open(h,u,_);return w.fd}catch(D){return(typeof v>"u"||!(D instanceof v.ErrnoError))&&C(D),-D.errno}}function qa(a,u,l){we.varargs=l;try{var h=we.getStreamFromFD(a);switch(u){case 21509:case 21505:return h.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return h.tty?0:-59;case 21519:{if(!h.tty)return-59;var _=we.get();return $[_>>2]=0,0}case 21520:return h.tty?-28:-59;case 21531:{var _=we.get();return v.ioctl(h,u,_)}case 21523:return h.tty?0:-59;case 21524:return h.tty?0:-59;default:C("bad ioctl syscall "+u)}}catch(w){return(typeof v>"u"||!(w instanceof v.ErrnoError))&&C(w),-w.errno}}function Os(a,u,l){try{return a=we.getStr(a),we.doReadlink(a,u,l)}catch(h){return(typeof v>"u"||!(h instanceof v.ErrnoError))&&C(h),-h.errno}}function gn(a,u){if(a===-1||u===0)return-28;var l=we.mappings[a];if(!l)return 0;if(u===l.len){var h=v.getStream(l.fd);we.doMsync(a,h,u,l.flags,l.offset),v.munmap(h),we.mappings[a]=null,l.allocated&&Ta(l.malloc)}return 0}function qt(a,u){try{return gn(a,u)}catch(l){return(typeof v>"u"||!(l instanceof v.ErrnoError))&&C(l),-l.errno}}function Vo(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a)}}function Dr(){for(var a=new Array(256),u=0;u<256;++u)a[u]=String.fromCharCode(u);Gn=a}var Gn=void 0;function Kt(a){for(var u="",l=a;vt[l];)u+=Gn[vt[l++]];return u}var Ka={},Lr={},Ea={},Ms=48,Ja=57;function Wo(a){if(a===void 0)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var u=a.charCodeAt(0);return u>=Ms&&u<=Ja?"_"+a:a}function xi(a,u){return a=Wo(a),new Function("body","return function "+a+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(u)}function na(a,u){var l=xi(u,function(h){this.name=u,this.message=h;var _=new Error(h).stack;_!==void 0&&(this.stack=this.toString()+`
`+_.replace(/^Error(:[^\n]*)?\n/,""))});return l.prototype=Object.create(a.prototype),l.prototype.constructor=l,l.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},l}var ra=void 0;function ut(a){throw new ra(a)}var bo=void 0;function To(a){throw new bo(a)}function aa(a,u,l){a.forEach(function(R){Ea[R]=u});function h(R){var x=l(R);x.length!==a.length&&To("Mismatched type converter count");for(var L=0;L<a.length;++L)jr(a[L],x[L])}var _=new Array(u.length),w=[],D=0;u.forEach(function(R,x){Lr.hasOwnProperty(R)?_[x]=Lr[R]:(w.push(R),Ka.hasOwnProperty(R)||(Ka[R]=[]),Ka[R].push(function(){_[x]=Lr[R],++D,D===w.length&&h(_)}))}),w.length===0&&h(_)}function jr(a,u,l){if(l=l||{},!("argPackAdvance"in u))throw new TypeError("registerType registeredInstance requires argPackAdvance");var h=u.name;if(a||ut('type "'+h+'" must have a positive integer typeid pointer'),Lr.hasOwnProperty(a)){if(l.ignoreDuplicateRegistrations)return;ut("Cannot register type '"+h+"' twice")}if(Lr[a]=u,delete Ea[a],Ka.hasOwnProperty(a)){var _=Ka[a];delete Ka[a],_.forEach(function(w){w()})}}function Ds(a,u,l,h,_){var w=Vo(l);u=Kt(u),jr(a,{name:u,fromWireType:function(D){return!!D},toWireType:function(D,R){return R?h:_},argPackAdvance:8,readValueFromPointer:function(D){var R;if(l===1)R=nt;else if(l===2)R=Wt;else if(l===4)R=$;else throw new TypeError("Unknown boolean type size: "+u);return this.fromWireType(R[D>>w])},destructorFunction:null})}function b(a){if(!(this instanceof Ar)||!(a instanceof Ar))return!1;for(var u=this.$$.ptrType.registeredClass,l=this.$$.ptr,h=a.$$.ptrType.registeredClass,_=a.$$.ptr;u.baseClass;)l=u.upcast(l),u=u.baseClass;for(;h.baseClass;)_=h.upcast(_),h=h.baseClass;return u===h&&l===_}function k(a){return{count:a.count,deleteScheduled:a.deleteScheduled,preservePointerOnDelete:a.preservePointerOnDelete,ptr:a.ptr,ptrType:a.ptrType,smartPtr:a.smartPtr,smartPtrType:a.smartPtrType}}function V(a){function u(l){return l.$$.ptrType.registeredClass.name}ut(u(a)+" instance already deleted")}var q=!1;function pe(a){}function Be(a){a.smartPtr?a.smartPtrType.rawDestructor(a.smartPtr):a.ptrType.registeredClass.rawDestructor(a.ptr)}function Me(a){a.count.value-=1;var u=a.count.value===0;u&&Be(a)}function Xe(a){return typeof FinalizationGroup>"u"?(Xe=function(u){return u},a):(q=new FinalizationGroup(function(u){for(var l=u.next();!l.done;l=u.next()){var h=l.value;h.ptr?Me(h):console.warn("object already deleted: "+h.ptr)}}),Xe=function(u){return q.register(u,u.$$,u.$$),u},pe=function(u){q.unregister(u.$$)},Xe(a))}function dt(){if(this.$$.ptr||V(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var a=Xe(Object.create(Object.getPrototypeOf(this),{$$:{value:k(this.$$)}}));return a.$$.count.value+=1,a.$$.deleteScheduled=!1,a}function Dt(){this.$$.ptr||V(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ut("Object already scheduled for deletion"),pe(this),Me(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Ut(){return!this.$$.ptr}var Rt=void 0,Pt=[];function Yt(){for(;Pt.length;){var a=Pt.pop();a.$$.deleteScheduled=!1,a.delete()}}function Tt(){return this.$$.ptr||V(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ut("Object already scheduled for deletion"),Pt.push(this),Pt.length===1&&Rt&&Rt(Yt),this.$$.deleteScheduled=!0,this}function Za(){Ar.prototype.isAliasOf=b,Ar.prototype.clone=dt,Ar.prototype.delete=Dt,Ar.prototype.isDeleted=Ut,Ar.prototype.deleteLater=Tt}function Ar(){}var Qo={};function Fi(a,u,l){if(a[u].overloadTable===void 0){var h=a[u];a[u]=function(){return a[u].overloadTable.hasOwnProperty(arguments.length)||ut("Function '"+l+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[u].overloadTable+")!"),a[u].overloadTable[arguments.length].apply(this,arguments)},a[u].overloadTable=[],a[u].overloadTable[h.argCount]=h}}function ba(a,u,l){s.hasOwnProperty(a)?((l===void 0||s[a].overloadTable!==void 0&&s[a].overloadTable[l]!==void 0)&&ut("Cannot register public name '"+a+"' twice"),Fi(s,a,a),s.hasOwnProperty(l)&&ut("Cannot register multiple overloads of a function with the same number of arguments ("+l+")!"),s[a].overloadTable[l]=u):(s[a]=u,l!==void 0&&(s[a].numArguments=l))}function Ni(a,u,l,h,_,w,D,R){this.name=a,this.constructor=u,this.instancePrototype=l,this.rawDestructor=h,this.baseClass=_,this.getActualType=w,this.upcast=D,this.downcast=R,this.pureVirtualFunctions=[]}function wo(a,u,l){for(;u!==l;)u.upcast||ut("Expected null or instance of "+l.name+", got an instance of "+u.name),a=u.upcast(a),u=u.baseClass;return a}function Au(a,u){if(u===null)return this.isReference&&ut("null is not a valid "+this.name),0;u.$$||ut('Cannot pass "'+Go(u)+'" as a '+this.name),u.$$.ptr||ut("Cannot pass deleted object as a pointer of type "+this.name);var l=u.$$.ptrType.registeredClass,h=wo(u.$$.ptr,l,this.registeredClass);return h}function yf(a,u){var l;if(u===null)return this.isReference&&ut("null is not a valid "+this.name),this.isSmartPointer?(l=this.rawConstructor(),a!==null&&a.push(this.rawDestructor,l),l):0;u.$$||ut('Cannot pass "'+Go(u)+'" as a '+this.name),u.$$.ptr||ut("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&u.$$.ptrType.isConst&&ut("Cannot convert argument of type "+(u.$$.smartPtrType?u.$$.smartPtrType.name:u.$$.ptrType.name)+" to parameter type "+this.name);var h=u.$$.ptrType.registeredClass;if(l=wo(u.$$.ptr,h,this.registeredClass),this.isSmartPointer)switch(u.$$.smartPtr===void 0&&ut("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:u.$$.smartPtrType===this?l=u.$$.smartPtr:ut("Cannot convert argument of type "+(u.$$.smartPtrType?u.$$.smartPtrType.name:u.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:l=u.$$.smartPtr;break;case 2:if(u.$$.smartPtrType===this)l=u.$$.smartPtr;else{var _=u.clone();l=this.rawShare(l,Ps(function(){_.delete()})),a!==null&&a.push(this.rawDestructor,l)}break;default:ut("Unsupporting sharing policy")}return l}function gf(a,u){if(u===null)return this.isReference&&ut("null is not a valid "+this.name),0;u.$$||ut('Cannot pass "'+Go(u)+'" as a '+this.name),u.$$.ptr||ut("Cannot pass deleted object as a pointer of type "+this.name),u.$$.ptrType.isConst&&ut("Cannot convert argument of type "+u.$$.ptrType.name+" to parameter type "+this.name);var l=u.$$.ptrType.registeredClass,h=wo(u.$$.ptr,l,this.registeredClass);return h}function ki(a){return this.fromWireType(Qt[a>>2])}function Cu(a){return this.rawGetPointee&&(a=this.rawGetPointee(a)),a}function sc(a){this.rawDestructor&&this.rawDestructor(a)}function uc(a){a!==null&&a.delete()}function Pu(a,u,l){if(u===l)return a;if(l.baseClass===void 0)return null;var h=Pu(a,u,l.baseClass);return h===null?null:l.downcast(h)}function _f(){return Object.keys(So).length}function xa(){var a=[];for(var u in So)So.hasOwnProperty(u)&&a.push(So[u]);return a}function Ef(a){Rt=a,Pt.length&&Rt&&Rt(Yt)}function xu(){s.getInheritedInstanceCount=_f,s.getLiveInheritedInstances=xa,s.flushPendingDeletes=Yt,s.setDelayFunction=Ef}var So={};function Fu(a,u){for(u===void 0&&ut("ptr should not be undefined");a.baseClass;)u=a.upcast(u),a=a.baseClass;return u}function bf(a,u){return u=Fu(a,u),So[u]}function Ro(a,u){(!u.ptrType||!u.ptr)&&To("makeClassHandle requires ptr and ptrType");var l=!!u.smartPtrType,h=!!u.smartPtr;return l!==h&&To("Both smartPtrType and smartPtr must be specified"),u.count={value:1},Xe(Object.create(a,{$$:{value:u}}))}function lc(a){var u=this.getPointee(a);if(!u)return this.destructor(a),null;var l=bf(this.registeredClass,u);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=u,l.$$.smartPtr=a,l.clone();var h=l.clone();return this.destructor(a),h}function _(){return this.isSmartPointer?Ro(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:u,smartPtrType:this,smartPtr:a}):Ro(this.registeredClass.instancePrototype,{ptrType:this,ptr:a})}var w=this.registeredClass.getActualType(u),D=Qo[w];if(!D)return _.call(this);var R;this.isConst?R=D.constPointerType:R=D.pointerType;var x=Pu(u,this.registeredClass,R.registeredClass);return x===null?_.call(this):this.isSmartPointer?Ro(R.registeredClass.instancePrototype,{ptrType:R,ptr:x,smartPtrType:this,smartPtr:a}):Ro(R.registeredClass.instancePrototype,{ptrType:R,ptr:x})}function vr(){On.prototype.getPointee=Cu,On.prototype.destructor=sc,On.prototype.argPackAdvance=8,On.prototype.readValueFromPointer=ki,On.prototype.deleteObject=uc,On.prototype.fromWireType=lc}function On(a,u,l,h,_,w,D,R,x,L,B){this.name=a,this.registeredClass=u,this.isReference=l,this.isConst=h,this.isSmartPointer=_,this.pointeeType=w,this.sharingPolicy=D,this.rawGetPointee=R,this.rawConstructor=x,this.rawShare=L,this.rawDestructor=B,!_&&u.baseClass===void 0?h?(this.toWireType=Au,this.destructorFunction=null):(this.toWireType=gf,this.destructorFunction=null):this.toWireType=yf}function nn(a,u,l){s.hasOwnProperty(a)||To("Replacing nonexistant public symbol"),s[a].overloadTable!==void 0&&l!==void 0?s[a].overloadTable[l]=u:(s[a]=u,s[a].argCount=l)}function zn(a,u){a=Kt(a);function l(w){for(var D=[],R=1;R<a.length;++R)D.push("a"+R);var x="dynCall_"+a+"_"+u,L="return function "+x+"("+D.join(", ")+`) {
`;return L+="    return dynCall(rawFunction"+(D.length?", ":"")+D.join(", ")+`);
`,L+=`};
`,new Function("dynCall","rawFunction",L)(w,u)}var h=s["dynCall_"+a],_=l(h);return typeof _!="function"&&ut("unknown function pointer with signature "+a+": "+u),_}var As=void 0;function Ii(a){var u=qf(a),l=Kt(u);return Ta(u),l}function Ui(a,u){var l=[],h={};function _(w){if(!h[w]&&!Lr[w]){if(Ea[w]){Ea[w].forEach(_);return}l.push(w),h[w]=!0}}throw u.forEach(_),new As(a+": "+l.map(Ii).join([", "]))}function Hi(a,u,l,h,_,w,D,R,x,L,B,se,ee){B=Kt(B),w=zn(_,w),R&&(R=zn(D,R)),L&&(L=zn(x,L)),ee=zn(se,ee);var re=Wo(B);ba(re,function(){Ui("Cannot construct "+B+" due to unbound types",[h])}),aa([a,u,l],h?[h]:[],function(le){le=le[0];var te,Le;h?(te=le.registeredClass,Le=te.instancePrototype):Le=Ar.prototype;var Ae=xi(re,function(){if(Object.getPrototypeOf(this)!==Y)throw new ra("Use 'new' to construct "+B);if(he.constructor_body===void 0)throw new ra(B+" has no accessible constructor");var zt=he.constructor_body[arguments.length];if(zt===void 0)throw new ra("Tried to invoke ctor of "+B+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(he.constructor_body).toString()+") parameters instead!");return zt.apply(this,arguments)}),Y=Object.create(Le,{constructor:{value:Ae}});Ae.prototype=Y;var he=new Ni(B,Ae,Y,ee,te,w,R,L),Ue=new On(B,he,!0,!1,!1),je=new On(B+"*",he,!1,!1,!1),ye=new On(B+" const*",he,!1,!0,!1);return Qo[a]={pointerType:je,constPointerType:ye},nn(re,Ae),[Ue,je,ye]})}function Tf(a,u){if(!(a instanceof Function))throw new TypeError("new_ called with constructor type "+typeof a+" which is not a function");var l=xi(a.name||"unknownFunctionName",function(){});l.prototype=a.prototype;var h=new l,_=a.apply(h,u);return _ instanceof Object?_:h}function cc(a){for(;a.length;){var u=a.pop(),l=a.pop();l(u)}}function Li(a,u,l,h,_){var w=u.length;w<2&&ut("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var D=u[1]!==null&&l!==null,R=!1,x=1;x<u.length;++x)if(u[x]!==null&&u[x].destructorFunction===void 0){R=!0;break}for(var L=u[0].name!=="void",B="",se="",x=0;x<w-2;++x)B+=(x!==0?", ":"")+"arg"+x,se+=(x!==0?", ":"")+"arg"+x+"Wired";var ee="return function "+Wo(a)+"("+B+`) {
if (arguments.length !== `+(w-2)+`) {
throwBindingError('function `+a+" called with ' + arguments.length + ' arguments, expected "+(w-2)+` args!');
}
`;R&&(ee+=`var destructors = [];
`);var re=R?"destructors":"null",le=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],te=[ut,h,_,cc,u[0],u[1]];D&&(ee+="var thisWired = classParam.toWireType("+re+`, this);
`);for(var x=0;x<w-2;++x)ee+="var arg"+x+"Wired = argType"+x+".toWireType("+re+", arg"+x+"); // "+u[x+2].name+`
`,le.push("argType"+x),te.push(u[x+2]);if(D&&(se="thisWired"+(se.length>0?", ":"")+se),ee+=(L?"var rv = ":"")+"invoker(fn"+(se.length>0?", ":"")+se+`);
`,R)ee+=`runDestructors(destructors);
`;else for(var x=D?1:2;x<u.length;++x){var Le=x===1?"thisWired":"arg"+(x-2)+"Wired";u[x].destructorFunction!==null&&(ee+=Le+"_dtor("+Le+"); // "+u[x].name+`
`,le.push(Le+"_dtor"),te.push(u[x].destructorFunction))}L&&(ee+=`var ret = retType.fromWireType(rv);
return ret;
`),ee+=`}
`,le.push(ee);var Ae=Tf(Function,le).apply(null,te);return Ae}function Cs(a,u){for(var l=[],h=0;h<a;h++)l.push($[(u>>2)+h]);return l}function wf(a,u,l,h,_,w,D){var R=Cs(l,h);u=Kt(u),w=zn(_,w),aa([],[a],function(x){x=x[0];var L=x.name+"."+u;function B(){Ui("Cannot call "+L+" due to unbound types",R)}var se=x.registeredClass.constructor;return se[u]===void 0?(B.argCount=l-1,se[u]=B):(Fi(se,u,L),se[u].overloadTable[l-1]=B),aa([],R,function(ee){var re=[ee[0],null].concat(ee.slice(1)),le=Li(L,re,null,w,D);return se[u].overloadTable===void 0?(le.argCount=l-1,se[u]=le):se[u].overloadTable[l-1]=le,[]}),[]})}function Sf(a,u,l,h,_,w){F(u>0);var D=Cs(u,l);_=zn(h,_);var R=[w],x=[];aa([],[a],function(L){L=L[0];var B="constructor "+L.name;if(L.registeredClass.constructor_body===void 0&&(L.registeredClass.constructor_body=[]),L.registeredClass.constructor_body[u-1]!==void 0)throw new ra("Cannot register multiple constructors with identical number of parameters ("+(u-1)+") for class '"+L.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return L.registeredClass.constructor_body[u-1]=function(){Ui("Cannot construct "+L.name+" due to unbound types",D)},aa([],D,function(se){return L.registeredClass.constructor_body[u-1]=function(){arguments.length!==u-1&&ut(B+" called with "+arguments.length+" arguments, expected "+(u-1)),x.length=0,R.length=u;for(var re=1;re<u;++re)R[re]=se[re].toWireType(x,arguments[re-1]);var le=_.apply(null,R);return cc(x),se[0].fromWireType(le)},[]}),[]})}function dc(a,u,l,h,_,w,D,R){var x=Cs(l,h);u=Kt(u),w=zn(_,w),aa([],[a],function(L){L=L[0];var B=L.name+"."+u;R&&L.registeredClass.pureVirtualFunctions.push(u);function se(){Ui("Cannot call "+B+" due to unbound types",x)}var ee=L.registeredClass.instancePrototype,re=ee[u];return re===void 0||re.overloadTable===void 0&&re.className!==L.name&&re.argCount===l-2?(se.argCount=l-2,se.className=L.name,ee[u]=se):(Fi(ee,u,B),ee[u].overloadTable[l-2]=se),aa([],x,function(le){var te=Li(B,le,L,w,D);return ee[u].overloadTable===void 0?(te.argCount=l-2,ee[u]=te):ee[u].overloadTable[l-2]=te,[]}),[]})}var Nu=[],oa=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function fc(a){a>4&&--oa[a].refcount===0&&(oa[a]=void 0,Nu.push(a))}function pc(){for(var a=0,u=5;u<oa.length;++u)oa[u]!==void 0&&++a;return a}function Yo(){for(var a=5;a<oa.length;++a)if(oa[a]!==void 0)return oa[a];return null}function ku(){s.count_emval_handles=pc,s.get_first_emval=Yo}function Ps(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var u=Nu.length?Nu.pop():oa.length;return oa[u]={refcount:1,value:a},u}}}function mc(a,u){u=Kt(u),jr(a,{name:u,fromWireType:function(l){var h=oa[l].value;return fc(l),h},toWireType:function(l,h){return Ps(h)},argPackAdvance:8,readValueFromPointer:ki,destructorFunction:null})}function Go(a){if(a===null)return"null";var u=typeof a;return u==="object"||u==="array"||u==="function"?a.toString():""+a}function Rf(a,u){switch(u){case 2:return function(l){return this.fromWireType(Sn[l>>2])};case 3:return function(l){return this.fromWireType(Yn[l>>3])};default:throw new TypeError("Unknown float type: "+a)}}function Of(a,u,l){var h=Vo(l);u=Kt(u),jr(a,{name:u,fromWireType:function(_){return _},toWireType:function(_,w){if(typeof w!="number"&&typeof w!="boolean")throw new TypeError('Cannot convert "'+Go(w)+'" to '+this.name);return w},argPackAdvance:8,readValueFromPointer:Rf(u,h),destructorFunction:null})}function Mf(a,u,l,h,_,w){var D=Cs(u,l);a=Kt(a),_=zn(h,_),ba(a,function(){Ui("Cannot call "+a+" due to unbound types",D)},u-1),aa([],D,function(R){var x=[R[0],null].concat(R.slice(1));return nn(a,Li(a,x,null,_,w),u-1),[]})}function Df(a,u,l){switch(u){case 0:return l?function(_){return nt[_]}:function(_){return vt[_]};case 1:return l?function(_){return Wt[_>>1]}:function(_){return wn[_>>1]};case 2:return l?function(_){return $[_>>2]}:function(_){return Qt[_>>2]};default:throw new TypeError("Unknown integer type: "+a)}}function Af(a,u,l,h,_){u=Kt(u),_===-1&&(_=4294967295);var w=Vo(l),D=function(L){return L};if(h===0){var R=32-8*l;D=function(L){return L<<R>>>R}}var x=u.indexOf("unsigned")!=-1;jr(a,{name:u,fromWireType:D,toWireType:function(L,B){if(typeof B!="number"&&typeof B!="boolean")throw new TypeError('Cannot convert "'+Go(B)+'" to '+this.name);if(B<h||B>_)throw new TypeError('Passing a number "'+Go(B)+'" from JS side to C/C++ side to an argument of type "'+u+'", which is outside the valid range ['+h+", "+_+"]!");return x?B>>>0:B|0},argPackAdvance:8,readValueFromPointer:Df(u,w,h!==0),destructorFunction:null})}function Cf(a,u,l){var h=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],_=h[u];function w(D){D=D>>2;var R=Qt,x=R[D],L=R[D+1];return new _(Vt,L,x)}l=Kt(l),jr(a,{name:l,fromWireType:w,argPackAdvance:8,readValueFromPointer:w},{ignoreDuplicateRegistrations:!0})}function Pf(a,u){u=Kt(u);var l=u==="std::string";jr(a,{name:u,fromWireType:function(h){var _=Qt[h>>2],w;if(l){var D=vt[h+4+_],R=0;D!=0&&(R=D,vt[h+4+_]=0);for(var x=h+4,L=0;L<=_;++L){var B=h+4+L;if(vt[B]==0){var se=hn(x);w===void 0?w=se:(w+=String.fromCharCode(0),w+=se),x=B+1}}R!=0&&(vt[h+4+_]=R)}else{for(var ee=new Array(_),L=0;L<_;++L)ee[L]=String.fromCharCode(vt[h+4+L]);w=ee.join("")}return Ta(h),w},toWireType:function(h,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var w,D=typeof _=="string";D||_ instanceof Uint8Array||_ instanceof Uint8ClampedArray||_ instanceof Int8Array||ut("Cannot pass non-string to std::string"),l&&D?w=function(){return sn(_)}:w=function(){return _.length};var R=w(),x=zr(4+R+1);if(Qt[x>>2]=R,l&&D)$t(_,x+4,R+1);else if(D)for(var L=0;L<R;++L){var B=_.charCodeAt(L);B>255&&(Ta(x),ut("String has UTF-16 code units that do not fit in 8 bits")),vt[x+4+L]=B}else for(var L=0;L<R;++L)vt[x+4+L]=_[L];return h!==null&&h.push(Ta,x),x},argPackAdvance:8,readValueFromPointer:ki,destructorFunction:function(h){Ta(h)}})}function hc(a,u,l){l=Kt(l);var h,_,w,D,R;u===2?(h=ha,_=Yr,D=Gr,w=function(){return wn},R=1):u===4&&(h=kr,_=bn,D=cr,w=function(){return Qt},R=2),jr(a,{name:l,fromWireType:function(x){var L=Qt[x>>2],B=w(),se,ee=B[x+4+L*u>>R],re=0;ee!=0&&(re=ee,B[x+4+L*u>>R]=0);for(var le=x+4,te=0;te<=L;++te){var Le=x+4+te*u;if(B[Le>>R]==0){var Ae=h(le);se===void 0?se=Ae:(se+=String.fromCharCode(0),se+=Ae),le=Le+u}}return re!=0&&(B[x+4+L*u>>R]=re),Ta(x),se},toWireType:function(x,L){typeof L!="string"&&ut("Cannot pass non-string to C++ string type "+l);var B=D(L),se=zr(4+B+u);return Qt[se>>2]=B>>R,_(L,se+4,B+u),x!==null&&x.push(Ta,se),se},argPackAdvance:8,readValueFromPointer:ki,destructorFunction:function(x){Ta(x)}})}function xf(a,u){u=Kt(u),jr(a,{isVoid:!0,name:u,argPackAdvance:0,fromWireType:function(){},toWireType:function(l,h){}})}function vc(a){a>4&&(oa[a].refcount+=1)}function Ff(a,u){var l=Lr[a];return l===void 0&&ut(u+" has unknown type "+Ii(a)),l}function Nf(a,u){a=Ff(a,"_emval_take_value");var l=a.readValueFromPointer(u);return Ps(l)}function kf(){C()}function If(a,u,l){vt.copyWithin(a,u,u+l)}function Iu(){return vt.length}function Oo(a){try{return Ge.grow(a-Vt.byteLength+65535>>16),Rn(Ge.buffer),1}catch(u){console.error("emscripten_realloc_buffer: Attempted to grow heap from "+Vt.byteLength+" bytes to "+a+" bytes, but got error: "+u)}}function xs(a){var u=Iu();F(a>u);var l=65536,h=2147483648-l;if(a>h)return Oe("Cannot enlarge memory, asked to go up to "+a+" bytes, but the limit is "+h+" bytes!"),!1;for(var _=16777216,w=1;w<=4;w*=2){var D=u*(1+.2/w);D=Math.min(D,a+100663296);var R=Math.min(h,vn(Math.max(_,a,D),l)),x=Oo(R);if(x)return!0}return Oe("Failed to grow the heap from "+u+" bytes to "+R+" bytes, not enough memory!"),!1}var Uu={};function qo(){return M||"./this.program"}function ji(){if(!ji.strings){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:qo()};for(var u in Uu)a[u]=Uu[u];var l=[];for(var u in a)l.push(u+"="+a[u]);ji.strings=l}return ji.strings}function Uf(a,u){var l=ji(),h=0;return l.forEach(function(_,w){var D=u+h;$[a+w*4>>2]=D,un(_,D),h+=_.length+1}),0}function Hf(a,u){var l=ji();$[a>>2]=l.length;var h=0;return l.forEach(function(_){h+=_.length+1}),$[u>>2]=h,0}function Lf(a){try{var u=we.getStreamFromFD(a);return v.close(u),0}catch(l){return(typeof v>"u"||!(l instanceof v.ErrnoError))&&C(l),l.errno}}function jf(a,u){try{var l=we.getStreamFromFD(a),h=l.tty?2:v.isDir(l.mode)?3:v.isLink(l.mode)?7:4;return nt[u>>0]=h,0}catch(_){return(typeof v>"u"||!(_ instanceof v.ErrnoError))&&C(_),_.errno}}function yc(a,u,l,h){try{var _=we.getStreamFromFD(a),w=we.doReadv(_,u,l);return $[h>>2]=w,0}catch(D){return(typeof v>"u"||!(D instanceof v.ErrnoError))&&C(D),D.errno}}function zf(a,u,l,h,_){try{var w=we.getStreamFromFD(a),D=4294967296,R=l*D+(u>>>0),x=9007199254740992;return R<=-x||R>=x?-61:(v.llseek(w,R,h),yn=[w.position>>>0,(_t=w.position,+ya(_t)>=1?_t>0?(Jr(+Ur(_t/4294967296),4294967295)|0)>>>0:~~+ga((_t-+(~~_t>>>0))/4294967296)>>>0:0)],$[_>>2]=yn[0],$[_+4>>2]=yn[1],w.getdents&&R===0&&h===0&&(w.getdents=null),0)}catch(L){return(typeof v>"u"||!(L instanceof v.ErrnoError))&&C(L),L.errno}}function gc(a,u,l,h){try{var _=we.getStreamFromFD(a),w=we.doWritev(_,u,l);return $[h>>2]=w,0}catch(D){return(typeof v>"u"||!(D instanceof v.ErrnoError))&&C(D),D.errno}}function qn(a){a=hn(a);var u=zr(20),l=zr(a.length+1);$t(a,l,a.length+1),$[u>>2]=l;var h=zr(4);$[h>>2]=0,$[u+4>>2]=h;var _=2;$[u+8>>2]=_,$[u+12>>2]=4;var w=zr(12);return $[w>>2]=w+8,$[w+4>>2]=0,$[w+8>>2]=_a(dn.lookup_name(a)),$[u+16>>2]=w,u}function _c(a){var u=Date.now();return $[a>>2]=u/1e3|0,$[a+4>>2]=u%1e3*1e3|0,0}var Xf=2400384;$t("GMT",2400432,4);function Hu(){if(Hu.called)return;Hu.called=!0,$[Gf()>>2]=new Date().getTimezoneOffset()*60;var a=new Date().getFullYear(),u=new Date(a,0,1),l=new Date(a,6,1);$[Tc()>>2]=Number(u.getTimezoneOffset()!=l.getTimezoneOffset());function h(x){var L=x.toTimeString().match(/\(([A-Za-z ]+)\)$/);return L?L[1]:"GMT"}var _=h(u),w=h(l),D=dr(_),R=dr(w);l.getTimezoneOffset()<u.getTimezoneOffset()?($[Bi()>>2]=D,$[Bi()+4>>2]=R):($[Bi()>>2]=R,$[Bi()+4>>2]=D)}function Bf(a,u){Hu();var l=new Date($[a>>2]*1e3);$[u>>2]=l.getSeconds(),$[u+4>>2]=l.getMinutes(),$[u+8>>2]=l.getHours(),$[u+12>>2]=l.getDate(),$[u+16>>2]=l.getMonth(),$[u+20>>2]=l.getFullYear()-1900,$[u+24>>2]=l.getDay();var h=new Date(l.getFullYear(),0,1),_=(l.getTime()-h.getTime())/(1e3*60*60*24)|0;$[u+28>>2]=_,$[u+36>>2]=-(l.getTimezoneOffset()*60);var w=new Date(l.getFullYear(),6,1).getTimezoneOffset(),D=h.getTimezoneOffset(),R=(w!=D&&l.getTimezoneOffset()==Math.min(D,w))|0;$[u+32>>2]=R;var x=$[Bi()+(R?4:0)>>2];return $[u+40>>2]=x,u}function $f(a){return Bf(a,Xf)}function Vf(a){}function zi(a){return a%4===0&&(a%100!==0||a%400===0)}function Xi(a,u){for(var l=0,h=0;h<=u;l+=a[h++]);return l}var eo=[31,29,31,30,31,30,31,31,30,31,30,31],Fs=[31,28,31,30,31,30,31,31,30,31,30,31];function to(a,u){for(var l=new Date(a.getTime());u>0;){var h=zi(l.getFullYear()),_=l.getMonth(),w=(h?eo:Fs)[_];if(u>w-l.getDate())u-=w-l.getDate()+1,l.setDate(1),_<11?l.setMonth(_+1):(l.setMonth(0),l.setFullYear(l.getFullYear()+1));else return l.setDate(l.getDate()+u),l}return l}function Ec(a,u,l,h){var _=$[h+40>>2],w={tm_sec:$[h>>2],tm_min:$[h+4>>2],tm_hour:$[h+8>>2],tm_mday:$[h+12>>2],tm_mon:$[h+16>>2],tm_year:$[h+20>>2],tm_wday:$[h+24>>2],tm_yday:$[h+28>>2],tm_isdst:$[h+32>>2],tm_gmtoff:$[h+36>>2],tm_zone:_?hn(_):""},D=hn(l),R={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var x in R)D=D.replace(new RegExp(x,"g"),R[x]);var L=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],B=["January","February","March","April","May","June","July","August","September","October","November","December"];function se(Y,he,Ue){for(var je=typeof Y=="number"?Y.toString():Y||"";je.length<he;)je=Ue[0]+je;return je}function ee(Y,he){return se(Y,he,"0")}function re(Y,he){function Ue(ye){return ye<0?-1:ye>0?1:0}var je;return(je=Ue(Y.getFullYear()-he.getFullYear()))===0&&(je=Ue(Y.getMonth()-he.getMonth()))===0&&(je=Ue(Y.getDate()-he.getDate())),je}function le(Y){switch(Y.getDay()){case 0:return new Date(Y.getFullYear()-1,11,29);case 1:return Y;case 2:return new Date(Y.getFullYear(),0,3);case 3:return new Date(Y.getFullYear(),0,2);case 4:return new Date(Y.getFullYear(),0,1);case 5:return new Date(Y.getFullYear()-1,11,31);case 6:return new Date(Y.getFullYear()-1,11,30)}}function te(Y){var he=to(new Date(Y.tm_year+1900,0,1),Y.tm_yday),Ue=new Date(he.getFullYear(),0,4),je=new Date(he.getFullYear()+1,0,4),ye=le(Ue),zt=le(je);return re(ye,he)<=0?re(zt,he)<=0?he.getFullYear()+1:he.getFullYear():he.getFullYear()-1}var Le={"%a":function(Y){return L[Y.tm_wday].substring(0,3)},"%A":function(Y){return L[Y.tm_wday]},"%b":function(Y){return B[Y.tm_mon].substring(0,3)},"%B":function(Y){return B[Y.tm_mon]},"%C":function(Y){var he=Y.tm_year+1900;return ee(he/100|0,2)},"%d":function(Y){return ee(Y.tm_mday,2)},"%e":function(Y){return se(Y.tm_mday,2," ")},"%g":function(Y){return te(Y).toString().substring(2)},"%G":function(Y){return te(Y)},"%H":function(Y){return ee(Y.tm_hour,2)},"%I":function(Y){var he=Y.tm_hour;return he==0?he=12:he>12&&(he-=12),ee(he,2)},"%j":function(Y){return ee(Y.tm_mday+Xi(zi(Y.tm_year+1900)?eo:Fs,Y.tm_mon-1),3)},"%m":function(Y){return ee(Y.tm_mon+1,2)},"%M":function(Y){return ee(Y.tm_min,2)},"%n":function(){return`
`},"%p":function(Y){return Y.tm_hour>=0&&Y.tm_hour<12?"AM":"PM"},"%S":function(Y){return ee(Y.tm_sec,2)},"%t":function(){return"	"},"%u":function(Y){return Y.tm_wday||7},"%U":function(Y){var he=new Date(Y.tm_year+1900,0,1),Ue=he.getDay()===0?he:to(he,7-he.getDay()),je=new Date(Y.tm_year+1900,Y.tm_mon,Y.tm_mday);if(re(Ue,je)<0){var ye=Xi(zi(je.getFullYear())?eo:Fs,je.getMonth()-1)-31,zt=31-Ue.getDate(),rn=zt+ye+je.getDate();return ee(Math.ceil(rn/7),2)}return re(Ue,he)===0?"01":"00"},"%V":function(Y){var he=new Date(Y.tm_year+1900,0,4),Ue=new Date(Y.tm_year+1901,0,4),je=le(he),ye=le(Ue),zt=to(new Date(Y.tm_year+1900,0,1),Y.tm_yday);if(re(zt,je)<0)return"53";if(re(ye,zt)<=0)return"01";var rn;return je.getFullYear()<Y.tm_year+1900?rn=Y.tm_yday+32-je.getDate():rn=Y.tm_yday+1-je.getDate(),ee(Math.ceil(rn/7),2)},"%w":function(Y){return Y.tm_wday},"%W":function(Y){var he=new Date(Y.tm_year,0,1),Ue=he.getDay()===1?he:to(he,he.getDay()===0?1:7-he.getDay()+1),je=new Date(Y.tm_year+1900,Y.tm_mon,Y.tm_mday);if(re(Ue,je)<0){var ye=Xi(zi(je.getFullYear())?eo:Fs,je.getMonth()-1)-31,zt=31-Ue.getDate(),rn=zt+ye+je.getDate();return ee(Math.ceil(rn/7),2)}return re(Ue,he)===0?"01":"00"},"%y":function(Y){return(Y.tm_year+1900).toString().substring(2)},"%Y":function(Y){return Y.tm_year+1900},"%z":function(Y){var he=Y.tm_gmtoff,Ue=he>=0;return he=Math.abs(he)/60,he=he/60*100+he%60,(Ue?"+":"-")+String("0000"+he).slice(-4)},"%Z":function(Y){return Y.tm_zone},"%%":function(){return"%"}};for(var x in Le)D.indexOf(x)>=0&&(D=D.replace(new RegExp(x,"g"),Le[x](w)));var Ae=Jo(D,!1);return Ae.length>u?0:(fr(Ae,a),Ae.length-1)}function Wf(a,u,l,h){return Ec(a,u,l,h)}function Qf(a){var u=Date.now()/1e3|0;return a&&($[a>>2]=u),u}function Ko(a,u){Ko.array||(Ko.array=[]);var l=Ko.array;l.length=0;for(var h;h=vt[a++];)h===100||h===102?(u=u+7&-8,l.push(Yn[u>>3]),u+=8):h===105?(u=u+3&-4,l.push($[u>>2]),u+=4):C("unexpected char in asm const signature "+h);return l}var Ns=function(a,u,l,h){a||(a=this),this.parent=a,this.mount=a.mount,this.mounted=null,this.id=v.nextInode++,this.name=u,this.mode=l,this.node_ops={},this.stream_ops={},this.rdev=h},Fa=365,Na=146;Object.defineProperties(Ns.prototype,{read:{get:function(){return(this.mode&Fa)===Fa},set:function(a){a?this.mode|=Fa:this.mode&=~Fa}},write:{get:function(){return(this.mode&Na)===Na},set:function(a){a?this.mode|=Na:this.mode&=~Na}},isFolder:{get:function(){return v.isDir(this.mode)}},isDevice:{get:function(){return v.isChrdev(this.mode)}}}),v.FSNode=Ns,v.staticInit(),s.FS_createFolder=v.createFolder,s.FS_createPath=v.createPath,s.FS_createDataFile=v.createDataFile,s.FS_createPreloadedFile=v.createPreloadedFile,s.FS_createLazyFile=v.createLazyFile,s.FS_createLink=v.createLink,s.FS_createDevice=v.createDevice,s.FS_unlink=v.unlink,Dr(),ra=s.BindingError=na(Error,"BindingError"),bo=s.InternalError=na(Error,"InternalError"),Za(),vr(),xu(),As=s.UnboundTypeError=na(Error,"UnboundTypeError"),ku();function Jo(a,u,l){var h=l>0?l:sn(a)+1,_=new Array(h),w=ur(a,_,0,_.length);return u&&(_.length=w),_}var bc={__cxa_allocate_exception:go,__cxa_throw:Si,__handle_stack_overflow:Ri,__map_file:Oi,__syscall102:Ai,__syscall12:$o,__syscall142:Ss,__syscall183:bt,__syscall195:Ci,__syscall197:Pi,__syscall221:et,__syscall3:Rs,__syscall39:jn,__syscall5:Eo,__syscall54:qa,__syscall85:Os,__syscall91:qt,_embind_register_bool:Ds,_embind_register_class:Hi,_embind_register_class_class_function:wf,_embind_register_class_constructor:Sf,_embind_register_class_function:dc,_embind_register_emval:mc,_embind_register_float:Of,_embind_register_function:Mf,_embind_register_integer:Af,_embind_register_memory_view:Cf,_embind_register_std_string:Pf,_embind_register_std_wstring:hc,_embind_register_void:xf,_emval_decref:fc,_emval_incref:vc,_emval_take_value:Nf,abort:kf,connectMemory:Mu,emscripten_asm_const_iii:Ou,emscripten_memcpy_big:If,emscripten_resize_heap:xs,environ_get:Uf,environ_sizes_get:Hf,fd_close:Lf,fd_fdstat_get:jf,fd_read:yc,fd_seek:zf,fd_write:gc,gethostbyname:qn,gettimeofday:_c,localtime:$f,memory:Ge,setTempRet0:Vf,strftime:Ec,strftime_l:Wf,table:sr,time:Qf},Lu=Ln();s.asm=Lu;var Yf=s.___wasm_call_ctors=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__wasm_call_ctors.apply(null,arguments)};s._fflush=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.fflush.apply(null,arguments)},s._expandCDSPFromString=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.expandCDSPFromString.apply(null,arguments)},s._generateCAuxFilesFromString=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.generateCAuxFilesFromString.apply(null,arguments)},s._freeCMemory=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.freeCMemory.apply(null,arguments)};var Ta=s._free=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.free.apply(null,arguments)};s._getCLibFaustVersion=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.getCLibFaustVersion.apply(null,arguments)},s._getErrorAfterException=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.getErrorAfterException.apply(null,arguments)},s._cleanupAfterException=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.cleanupAfterException.apply(null,arguments)};var zr=s._malloc=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.malloc.apply(null,arguments)};s.___errno_location=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__errno_location.apply(null,arguments)};var ks=s._htons=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.htons.apply(null,arguments)};s.___em_js__connectMemory=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__em_js__connectMemory.apply(null,arguments)},s._deleteAllWasmCDSPFactories=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.deleteAllWasmCDSPFactories.apply(null,arguments)},s._createWasmCDSPFactoryFromString=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.createWasmCDSPFactoryFromString.apply(null,arguments)},s._getWasmCModule=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.getWasmCModule.apply(null,arguments)},s._getWasmCModuleSize=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.getWasmCModuleSize.apply(null,arguments)},s._getWasmCHelpers=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.getWasmCHelpers.apply(null,arguments)},s._freeWasmCModule=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.freeWasmCModule.apply(null,arguments)};var Is=s._ntohs=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.ntohs.apply(null,arguments)},Bi=s.__get_tzname=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm._get_tzname.apply(null,arguments)},Tc=s.__get_daylight=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm._get_daylight.apply(null,arguments)},Gf=s.__get_timezone=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm._get_timezone.apply(null,arguments)},qf=s.___getTypeName=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__getTypeName.apply(null,arguments)};s.___embind_register_native_and_builtin_types=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__embind_register_native_and_builtin_types.apply(null,arguments)},s.___set_stack_limit=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.__set_stack_limit.apply(null,arguments)};var Us=s.stackSave=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.stackSave.apply(null,arguments)},ka=s.stackAlloc=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.stackAlloc.apply(null,arguments)},$i=s.stackRestore=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.stackRestore.apply(null,arguments)};s.dynCall_ii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_ii.apply(null,arguments)},s.dynCall_vi=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vi.apply(null,arguments)},s.dynCall_vii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vii.apply(null,arguments)},s.dynCall_iiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiii.apply(null,arguments)},s.dynCall_viijii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viijii.apply(null,arguments)},s.dynCall_viiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiii.apply(null,arguments)},s.dynCall_iii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iii.apply(null,arguments)},s.dynCall_iiiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiii.apply(null,arguments)},s.dynCall_iiiiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiii.apply(null,arguments)},s.dynCall_viddddii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viddddii.apply(null,arguments)},s.dynCall_viddddiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viddddiii.apply(null,arguments)},s.dynCall_viddd=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viddd.apply(null,arguments)},s.dynCall_vidddi=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vidddi.apply(null,arguments)},s.dynCall_vidddd=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vidddd.apply(null,arguments)},s.dynCall_viddii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viddii.apply(null,arguments)},s.dynCall_viddi=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viddi.apply(null,arguments)},s.dynCall_viiiiddd=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiiiddd.apply(null,arguments)},s.dynCall_viii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viii.apply(null,arguments)},s.dynCall_v=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_v.apply(null,arguments)},s.dynCall_viiiffff=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiiffff.apply(null,arguments)},s.dynCall_viiiff=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiiff.apply(null,arguments)},s.dynCall_iiiiiiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiiiii.apply(null,arguments)},s.dynCall_iiiiiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiiii.apply(null,arguments)},s.dynCall_iiid=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiid.apply(null,arguments)},s.dynCall_viiidddd=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiidddd.apply(null,arguments)},s.dynCall_viiidd=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiidd.apply(null,arguments)},s.dynCall_viiiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiiii.apply(null,arguments)},s.dynCall_di=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_di.apply(null,arguments)},s.dynCall_vid=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vid.apply(null,arguments)},s.dynCall_i=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_i.apply(null,arguments)},s.dynCall_viiif=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiif.apply(null,arguments)},s.dynCall_fiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_fiii.apply(null,arguments)},s.dynCall_vidiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_vidiii.apply(null,arguments)},s.dynCall_viif=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viif.apply(null,arguments)},s.dynCall_fii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_fii.apply(null,arguments)},s.dynCall_jiji=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_jiji.apply(null,arguments)},s.dynCall_iidiiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iidiiii.apply(null,arguments)},s.dynCall_iiiiiiiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiiiiii.apply(null,arguments)},s.dynCall_iiiiij=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiij.apply(null,arguments)},s.dynCall_iiiiid=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiid.apply(null,arguments)},s.dynCall_iiiiijj=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiijj.apply(null,arguments)},s.dynCall_iiiiiijj=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_iiiiiijj.apply(null,arguments)},s.dynCall_viiiiii=function(){return F(me,"you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),F(!ce,"the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"),s.asm.dynCall_viiiiii.apply(null,arguments)},s.asm=Lu,Object.getOwnPropertyDescriptor(s,"intArrayFromString")||(s.intArrayFromString=function(){C("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"intArrayToString")||(s.intArrayToString=function(){C("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ccall")||(s.ccall=function(){C("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.cwrap=it,Object.getOwnPropertyDescriptor(s,"setValue")||(s.setValue=function(){C("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getValue")||(s.getValue=function(){C("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"allocate")||(s.allocate=function(){C("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.getMemory=tt,Object.getOwnPropertyDescriptor(s,"UTF8ArrayToString")||(s.UTF8ArrayToString=function(){C("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.UTF8ToString=hn,Object.getOwnPropertyDescriptor(s,"stringToUTF8Array")||(s.stringToUTF8Array=function(){C("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.stringToUTF8=$t,s.lengthBytesUTF8=sn,Object.getOwnPropertyDescriptor(s,"stackTrace")||(s.stackTrace=function(){C("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addOnPreRun")||(s.addOnPreRun=function(){C("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addOnInit")||(s.addOnInit=function(){C("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addOnPreMain")||(s.addOnPreMain=function(){C("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addOnExit")||(s.addOnExit=function(){C("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addOnPostRun")||(s.addOnPostRun=function(){C("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeStringToMemory")||(s.writeStringToMemory=function(){C("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeArrayToMemory")||(s.writeArrayToMemory=function(){C("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeAsciiToMemory")||(s.writeAsciiToMemory=function(){C("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.addRunDependency=He,s.removeRunDependency=rt,s.FS_createFolder=v.createFolder,s.FS_createPath=v.createPath,s.FS_createDataFile=v.createDataFile,s.FS_createPreloadedFile=v.createPreloadedFile,s.FS_createLazyFile=v.createLazyFile,s.FS_createLink=v.createLink,s.FS_createDevice=v.createDevice,s.FS_unlink=v.unlink,Object.getOwnPropertyDescriptor(s,"dynamicAlloc")||(s.dynamicAlloc=function(){C("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"loadDynamicLibrary")||(s.loadDynamicLibrary=function(){C("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"loadWebAssemblyModule")||(s.loadWebAssemblyModule=function(){C("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getLEB")||(s.getLEB=function(){C("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getFunctionTables")||(s.getFunctionTables=function(){C("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"alignFunctionTables")||(s.alignFunctionTables=function(){C("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registerFunctions")||(s.registerFunctions=function(){C("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"addFunction")||(s.addFunction=function(){C("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"removeFunction")||(s.removeFunction=function(){C("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getFuncWrapper")||(s.getFuncWrapper=function(){C("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"prettyPrint")||(s.prettyPrint=function(){C("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"makeBigInt")||(s.makeBigInt=function(){C("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"dynCall")||(s.dynCall=function(){C("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getCompilerSetting")||(s.getCompilerSetting=function(){C("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"print")||(s.print=function(){C("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"printErr")||(s.printErr=function(){C("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getTempRet0")||(s.getTempRet0=function(){C("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"setTempRet0")||(s.setTempRet0=function(){C("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"callMain")||(s.callMain=function(){C("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"abort")||(s.abort=function(){C("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stringToNewUTF8")||(s.stringToNewUTF8=function(){C("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emscripten_realloc_buffer")||(s.emscripten_realloc_buffer=function(){C("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ENV")||(s.ENV=function(){C("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"setjmpId")||(s.setjmpId=function(){C("'setjmpId' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ERRNO_CODES")||(s.ERRNO_CODES=function(){C("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ERRNO_MESSAGES")||(s.ERRNO_MESSAGES=function(){C("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"DNS")||(s.DNS=function(){C("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GAI_ERRNO_MESSAGES")||(s.GAI_ERRNO_MESSAGES=function(){C("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"Protocols")||(s.Protocols=function(){C("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"Sockets")||(s.Sockets=function(){C("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"UNWIND_CACHE")||(s.UNWIND_CACHE=function(){C("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"readAsmConstArgs")||(s.readAsmConstArgs=function(){C("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"jstoi_q")||(s.jstoi_q=function(){C("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"jstoi_s")||(s.jstoi_s=function(){C("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"PATH")||(s.PATH=function(){C("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"PATH_FS")||(s.PATH_FS=function(){C("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"SYSCALLS")||(s.SYSCALLS=function(){C("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"syscallMmap2")||(s.syscallMmap2=function(){C("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"syscallMunmap")||(s.syscallMunmap=function(){C("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"JSEvents")||(s.JSEvents=function(){C("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"demangle")||(s.demangle=function(){C("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"demangleAll")||(s.demangleAll=function(){C("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"jsStackTrace")||(s.jsStackTrace=function(){C("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stackTrace")||(s.stackTrace=function(){C("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeI53ToI64")||(s.writeI53ToI64=function(){C("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeI53ToI64Clamped")||(s.writeI53ToI64Clamped=function(){C("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeI53ToI64Signaling")||(s.writeI53ToI64Signaling=function(){C("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeI53ToU64Clamped")||(s.writeI53ToU64Clamped=function(){C("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"writeI53ToU64Signaling")||(s.writeI53ToU64Signaling=function(){C("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"readI53FromI64")||(s.readI53FromI64=function(){C("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"readI53FromU64")||(s.readI53FromU64=function(){C("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"convertI32PairToI53")||(s.convertI32PairToI53=function(){C("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"convertU32PairToI53")||(s.convertU32PairToI53=function(){C("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"Browser")||(s.Browser=function(){C("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.FS=v,Object.getOwnPropertyDescriptor(s,"MEMFS")||(s.MEMFS=function(){C("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"TTY")||(s.TTY=function(){C("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"PIPEFS")||(s.PIPEFS=function(){C("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"SOCKFS")||(s.SOCKFS=function(){C("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GL")||(s.GL=function(){C("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emscriptenWebGLGet")||(s.emscriptenWebGLGet=function(){C("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emscriptenWebGLGetTexPixelData")||(s.emscriptenWebGLGetTexPixelData=function(){C("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emscriptenWebGLGetUniform")||(s.emscriptenWebGLGetUniform=function(){C("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emscriptenWebGLGetVertexAttrib")||(s.emscriptenWebGLGetVertexAttrib=function(){C("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"AL")||(s.AL=function(){C("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"SDL")||(s.SDL=function(){C("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"SDL_gfx")||(s.SDL_gfx=function(){C("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GLUT")||(s.GLUT=function(){C("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"EGL")||(s.EGL=function(){C("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GLFW_Window")||(s.GLFW_Window=function(){C("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GLFW")||(s.GLFW=function(){C("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"GLEW")||(s.GLEW=function(){C("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"IDBStore")||(s.IDBStore=function(){C("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"runAndAbortIfError")||(s.runAndAbortIfError=function(){C("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_handle_array")||(s.emval_handle_array=function(){C("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_free_list")||(s.emval_free_list=function(){C("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_symbols")||(s.emval_symbols=function(){C("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"init_emval")||(s.init_emval=function(){C("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"count_emval_handles")||(s.count_emval_handles=function(){C("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"get_first_emval")||(s.get_first_emval=function(){C("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getStringOrSymbol")||(s.getStringOrSymbol=function(){C("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"requireHandle")||(s.requireHandle=function(){C("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_newers")||(s.emval_newers=function(){C("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"craftEmvalAllocator")||(s.craftEmvalAllocator=function(){C("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_get_global")||(s.emval_get_global=function(){C("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"emval_methodCallers")||(s.emval_methodCallers=function(){C("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"InternalError")||(s.InternalError=function(){C("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"BindingError")||(s.BindingError=function(){C("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"UnboundTypeError")||(s.UnboundTypeError=function(){C("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"PureVirtualError")||(s.PureVirtualError=function(){C("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"init_embind")||(s.init_embind=function(){C("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"throwInternalError")||(s.throwInternalError=function(){C("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"throwBindingError")||(s.throwBindingError=function(){C("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"throwUnboundTypeError")||(s.throwUnboundTypeError=function(){C("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ensureOverloadTable")||(s.ensureOverloadTable=function(){C("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"exposePublicSymbol")||(s.exposePublicSymbol=function(){C("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"replacePublicSymbol")||(s.replacePublicSymbol=function(){C("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"extendError")||(s.extendError=function(){C("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"createNamedFunction")||(s.createNamedFunction=function(){C("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registeredInstances")||(s.registeredInstances=function(){C("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getBasestPointer")||(s.getBasestPointer=function(){C("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registerInheritedInstance")||(s.registerInheritedInstance=function(){C("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"unregisterInheritedInstance")||(s.unregisterInheritedInstance=function(){C("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getInheritedInstance")||(s.getInheritedInstance=function(){C("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getInheritedInstanceCount")||(s.getInheritedInstanceCount=function(){C("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getLiveInheritedInstances")||(s.getLiveInheritedInstances=function(){C("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registeredTypes")||(s.registeredTypes=function(){C("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"awaitingDependencies")||(s.awaitingDependencies=function(){C("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"typeDependencies")||(s.typeDependencies=function(){C("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registeredPointers")||(s.registeredPointers=function(){C("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"registerType")||(s.registerType=function(){C("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"whenDependentTypesAreResolved")||(s.whenDependentTypesAreResolved=function(){C("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"embind_charCodes")||(s.embind_charCodes=function(){C("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"embind_init_charCodes")||(s.embind_init_charCodes=function(){C("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"readLatin1String")||(s.readLatin1String=function(){C("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getTypeName")||(s.getTypeName=function(){C("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"heap32VectorToArray")||(s.heap32VectorToArray=function(){C("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"requireRegisteredType")||(s.requireRegisteredType=function(){C("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"getShiftFromSize")||(s.getShiftFromSize=function(){C("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"integerReadValueFromPointer")||(s.integerReadValueFromPointer=function(){C("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"enumReadValueFromPointer")||(s.enumReadValueFromPointer=function(){C("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"floatReadValueFromPointer")||(s.floatReadValueFromPointer=function(){C("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"simpleReadValueFromPointer")||(s.simpleReadValueFromPointer=function(){C("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"runDestructors")||(s.runDestructors=function(){C("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"new_")||(s.new_=function(){C("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"craftInvokerFunction")||(s.craftInvokerFunction=function(){C("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"embind__requireFunction")||(s.embind__requireFunction=function(){C("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"tupleRegistrations")||(s.tupleRegistrations=function(){C("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"structRegistrations")||(s.structRegistrations=function(){C("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"genericPointerToWireType")||(s.genericPointerToWireType=function(){C("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"constNoSmartPtrRawPointerToWireType")||(s.constNoSmartPtrRawPointerToWireType=function(){C("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"nonConstNoSmartPtrRawPointerToWireType")||(s.nonConstNoSmartPtrRawPointerToWireType=function(){C("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"init_RegisteredPointer")||(s.init_RegisteredPointer=function(){C("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredPointer")||(s.RegisteredPointer=function(){C("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredPointer_getPointee")||(s.RegisteredPointer_getPointee=function(){C("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredPointer_destructor")||(s.RegisteredPointer_destructor=function(){C("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredPointer_deleteObject")||(s.RegisteredPointer_deleteObject=function(){C("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredPointer_fromWireType")||(s.RegisteredPointer_fromWireType=function(){C("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"runDestructor")||(s.runDestructor=function(){C("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"releaseClassHandle")||(s.releaseClassHandle=function(){C("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"finalizationGroup")||(s.finalizationGroup=function(){C("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"detachFinalizer_deps")||(s.detachFinalizer_deps=function(){C("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"detachFinalizer")||(s.detachFinalizer=function(){C("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"attachFinalizer")||(s.attachFinalizer=function(){C("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"makeClassHandle")||(s.makeClassHandle=function(){C("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"init_ClassHandle")||(s.init_ClassHandle=function(){C("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle")||(s.ClassHandle=function(){C("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle_isAliasOf")||(s.ClassHandle_isAliasOf=function(){C("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"throwInstanceAlreadyDeleted")||(s.throwInstanceAlreadyDeleted=function(){C("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle_clone")||(s.ClassHandle_clone=function(){C("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle_delete")||(s.ClassHandle_delete=function(){C("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"deletionQueue")||(s.deletionQueue=function(){C("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle_isDeleted")||(s.ClassHandle_isDeleted=function(){C("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"ClassHandle_deleteLater")||(s.ClassHandle_deleteLater=function(){C("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"flushPendingDeletes")||(s.flushPendingDeletes=function(){C("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"delayFunction")||(s.delayFunction=function(){C("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"setDelayFunction")||(s.setDelayFunction=function(){C("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"RegisteredClass")||(s.RegisteredClass=function(){C("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"shallowCopyInternalPointer")||(s.shallowCopyInternalPointer=function(){C("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"downcastPointer")||(s.downcastPointer=function(){C("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"upcastPointer")||(s.upcastPointer=function(){C("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"validateThis")||(s.validateThis=function(){C("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"char_0")||(s.char_0=function(){C("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"char_9")||(s.char_9=function(){C("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"makeLegalFunctionName")||(s.makeLegalFunctionName=function(){C("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"warnOnce")||(s.warnOnce=function(){C("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stackSave")||(s.stackSave=function(){C("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stackRestore")||(s.stackRestore=function(){C("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stackAlloc")||(s.stackAlloc=function(){C("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"AsciiToString")||(s.AsciiToString=function(){C("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stringToAscii")||(s.stringToAscii=function(){C("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"UTF16ToString")||(s.UTF16ToString=function(){C("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stringToUTF16")||(s.stringToUTF16=function(){C("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"lengthBytesUTF16")||(s.lengthBytesUTF16=function(){C("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"UTF32ToString")||(s.UTF32ToString=function(){C("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"stringToUTF32")||(s.stringToUTF32=function(){C("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"lengthBytesUTF32")||(s.lengthBytesUTF32=function(){C("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"allocateUTF8")||(s.allocateUTF8=function(){C("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),Object.getOwnPropertyDescriptor(s,"allocateUTF8OnStack")||(s.allocateUTF8OnStack=function(){C("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}),s.writeStackCookie=xe,s.checkStackCookie=Je,s.abortStackOverflow=Ot,Object.getOwnPropertyDescriptor(s,"ALLOC_NORMAL")||Object.defineProperty(s,"ALLOC_NORMAL",{configurable:!0,get:function(){C("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(s,"ALLOC_STACK")||Object.defineProperty(s,"ALLOC_STACK",{configurable:!0,get:function(){C("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(s,"ALLOC_DYNAMIC")||Object.defineProperty(s,"ALLOC_DYNAMIC",{configurable:!0,get:function(){C("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}}),Object.getOwnPropertyDescriptor(s,"ALLOC_NONE")||Object.defineProperty(s,"ALLOC_NONE",{configurable:!0,get:function(){C("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")}});var Ia;s.then=function(a){if(Ia)a(s);else{var u=s.onRuntimeInitialized;s.onRuntimeInitialized=function(){u&&u(),a(s)}}return s};function wc(a){this.name="ExitStatus",this.message="Program terminated with exit("+a+")",this.status=a}N=function a(){Ia||Hs(),Ia||(N=a)};function Hs(a){if(mr>0||(xe(),Xt(),mr>0))return;function u(){Ia||(Ia=!0,s.calledRun=!0,!Un&&(va(),Kr(),s.onRuntimeInitialized&&s.onRuntimeInitialized(),F(!s._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),yo()))}s.setStatus?(s.setStatus("Running..."),setTimeout(function(){setTimeout(function(){s.setStatus("")},1),u()},1)):u(),Je()}if(s.run=Hs,s.preInit)for(typeof s.preInit=="function"&&(s.preInit=[s.preInit]);s.preInit.length>0;)s.preInit.pop()();return Hs(),g}}(),Sha1={};Sha1.hash=function(f,g){g=typeof g>"u"?!0:g,g&&(f=Utf8.encode(f));var s=[1518500249,1859775393,2400959708,3395469782];f+=String.fromCharCode(128);for(var T=f.length/4+2,O=Math.ceil(T/16),M=new Array(O),p=0;p<O;p++){M[p]=new Array(16);for(var H=0;H<16;H++)M[p][H]=f.charCodeAt(p*64+H*4)<<24|f.charCodeAt(p*64+H*4+1)<<16|f.charCodeAt(p*64+H*4+2)<<8|f.charCodeAt(p*64+H*4+3)}M[O-1][14]=(f.length-1)*8/Math.pow(2,32),M[O-1][14]=Math.floor(M[O-1][14]),M[O-1][15]=(f.length-1)*8&4294967295;for(var P=1732584193,X=4023233417,G=2562383102,Z=271733878,oe=3285377520,ae=new Array(80),fe,Ne,ke,Oe,We,p=0;p<O;p++){for(var Pe=0;Pe<16;Pe++)ae[Pe]=M[p][Pe];for(var Pe=16;Pe<80;Pe++)ae[Pe]=Sha1.ROTL(ae[Pe-3]^ae[Pe-8]^ae[Pe-14]^ae[Pe-16],1);fe=P,Ne=X,ke=G,Oe=Z,We=oe;for(var Pe=0;Pe<80;Pe++){var ot=Math.floor(Pe/20),Ie=Sha1.ROTL(fe,5)+Sha1.f(ot,Ne,ke,Oe)+We+s[ot]+ae[Pe]&4294967295;We=Oe,Oe=ke,ke=Sha1.ROTL(Ne,30),Ne=fe,fe=Ie}P=P+fe&4294967295,X=X+Ne&4294967295,G=G+ke&4294967295,Z=Z+Oe&4294967295,oe=oe+We&4294967295}return Sha1.toHexStr(P)+Sha1.toHexStr(X)+Sha1.toHexStr(G)+Sha1.toHexStr(Z)+Sha1.toHexStr(oe)};Sha1.f=function(f,g,s,T){switch(f){case 0:return g&s^~g&T;case 1:return g^s^T;case 2:return g&s^g&T^s&T;case 3:return g^s^T}};Sha1.ROTL=function(f,g){return f<<g|f>>>32-g};Sha1.toHexStr=function(f){for(var g="",s,T=7;T>=0;T--)s=f>>>T*4&15,g+=s.toString(16);return g};var Utf8={};Utf8.encode=function(f){var g=f.replace(/[\u0080-\u07ff]/g,function(s){var T=s.charCodeAt(0);return String.fromCharCode(192|T>>6,128|T&63)});return g=g.replace(/[\u0800-\uffff]/g,function(s){var T=s.charCodeAt(0);return String.fromCharCode(224|T>>12,128|T>>6&63,128|T&63)}),g};Utf8.decode=function(f){var g=f.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(s){var T=(s.charCodeAt(0)&15)<<12|(s.charCodeAt(1)&63)<<6|s.charCodeAt(2)&63;return String.fromCharCode(T)});return g=g.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(s){var T=(s.charCodeAt(0)&31)<<6|s.charCodeAt(1)&63;return String.fromCharCode(T)}),g};var readyResolver={current:void 0},readyPromise=new Promise(f=>{readyResolver.current=f}),faust_module$1=FaustModule({onRuntimeInitialized:readyResolver.current});faust_module$1.lengthBytesUTF8=function(f){for(var g=0,s=0;s<f.length;++s){var T=f.charCodeAt(s);T>=55296&&T<=57343&&(T=65536+((T&1023)<<10)|f.charCodeAt(++s)&1023),T<=127?++g:T<=2047?g+=2:T<=65535?g+=3:T<=2097151?g+=4:T<=67108863?g+=5:g+=6}return g};var faust$1=faust$1||{};faust$1.remap=function(f,g,s,T,O){return 1*(f-g)/(s-g)*(O-T)+T};faust$1.debug=!1;faust$1.createWasmCDSPFactoryFromString=faust_module$1.cwrap("createWasmCDSPFactoryFromString","number",["number","number","number","number","number","number"]);faust$1.deleteAllWasmCDSPFactories=faust_module$1.cwrap("deleteAllWasmCDSPFactories",null,[]);faust$1.expandCDSPFromString=faust_module$1.cwrap("expandCDSPFromString","number",["number","number","number","number","number","number"]);faust$1.getCLibFaustVersion=faust_module$1.cwrap("getCLibFaustVersion","number",[]);faust$1.getWasmCModule=faust_module$1.cwrap("getWasmCModule","number",["number"]);faust$1.getWasmCModuleSize=faust_module$1.cwrap("getWasmCModuleSize","number",["number"]);faust$1.getWasmCHelpers=faust_module$1.cwrap("getWasmCHelpers","number",["number"]);faust$1.freeWasmCModule=faust_module$1.cwrap("freeWasmCModule",null,["number"]);faust$1.freeCMemory=faust_module$1.cwrap("freeCMemory",null,["number"]);faust$1.cleanupAfterException=faust_module$1.cwrap("cleanupAfterException",null,[]);faust$1.getErrorAfterException=faust_module$1.cwrap("getErrorAfterException","number",[]);faust$1.error_msg=null;faust$1.factory_number=0;faust$1.factory_table=[];faust$1.getErrorMessage=function(){return faust$1.error_msg};faust$1.getLibFaustVersion=function(){return faust_module$1.UTF8ToString(faust$1.getCLibFaustVersion())};faust$1.ab2str=function(f){return f?String.fromCharCode.apply(null,new Uint8Array(f)):null};faust$1.str2ab=function(f){if(f){for(var g=new ArrayBuffer(f.length),s=new Uint8Array(g),T=0,O=f.length;T<O;T++)s[T]=f.charCodeAt(T);return g}else return null};faust$1.compileCode=function(f,g,s,T){var O=faust_module$1.lengthBytesUTF8(g)+1,M=faust_module$1._malloc(O),p="FaustDSP",H=faust_module$1.lengthBytesUTF8(p)+1,P=faust_module$1._malloc(H),X=faust_module$1._malloc(4096);faust_module$1.stringToUTF8(p,P,H),faust_module$1.stringToUTF8(g,M,O);var G=s===void 0?new Array:s;G.push("-cn",f);for(var Z=4,oe=faust_module$1._malloc(G.length*Z),ae=new Int32Array(faust_module$1.HEAP32.buffer,oe,G.length),fe=0;fe<G.length;fe++){var Ne=faust_module$1.lengthBytesUTF8(G[fe])+1,ke=faust_module$1._malloc(Ne);faust_module$1.stringToUTF8(G[fe],ke,Ne),ae[fe]=ke}try{var Oe=faust$1.createWasmCDSPFactoryFromString(P,M,G.length,oe,X,T);if(faust$1.error_msg=faust_module$1.UTF8ToString(X),Oe===0)return null;for(var We=faust$1.getWasmCModule(Oe),Pe=faust$1.getWasmCModuleSize(Oe),ot=new Uint8Array(Pe),fe=0;fe<Pe;fe++)ot[fe]=faust_module$1.HEAP8[We+fe];var Ie=faust$1.getWasmCHelpers(Oe),It=faust_module$1.UTF8ToString(Ie);faust_module$1._free(M),faust_module$1._free(P),faust_module$1._free(X),faust$1.freeWasmCModule(Oe),ae=new Int32Array(faust_module$1.HEAP32.buffer,oe,G.length);for(var fe=0;fe<G.length;fe++)faust_module$1._free(ae[fe]);return faust_module$1._free(oe),{code:ot,code_source:g,helpers:It}}catch(Ge){return faust$1.error_msg=faust_module$1.UTF8ToString(faust$1.getErrorAfterException()),faust$1.error_msg===""&&(faust$1.error_msg=Ge),faust$1.cleanupAfterException(),null}};faust$1.createDSPFactoryAux=function(f,g,s,T){for(var O="",M=0;M<g.length;M++)O+=g[M];var p=Sha1.hash(f+(s?"internal_memory":"external_memory")+O,!0),H=faust$1.factory_table[p];if(H){T(H);return}var P="mydsp"+faust$1.factory_number,X="effect"+faust$1.factory_number++,G="adapt(1,1) = _; adapt(2,2) = _,_; adapt(1,2) = _ <: _,_; adapt(2,1) = _,_ :> _; adaptor(F,G) = adapt(outputs(F),inputs(G)); dsp_code = environment{";G=G.concat(f),G=G.concat("};"),G=G.concat("process = adaptor(dsp_code.process, dsp_code.effect) : dsp_code.effect;");var Z=faust$1.compileCode(P,f,g,s);if(Z){var oe=faust$1.compileCode(X,G,g,s);oe?faust$1.readDSPFactoryFromMachineAux(P,Z.code,Z.code_source,Z.helpers,X,oe.code,oe.code_source,oe.helpers,p,T):faust$1.readDSPFactoryFromMachineAux(P,Z.code,Z.code_source,Z.helpers,null,null,null,null,p,T)}else T(null)};faust$1.createDSPFactory=function(f,g,s){readyPromise.then(()=>{faust$1.createDSPFactoryAux(f,g,!0,s)})};faust$1.ready=readyPromise;faust$1.expandDSP=function(f,g){g.push("-lang"),g.push("wasm");var s=faust_module$1.lengthBytesUTF8(f)+1,T=faust_module$1._malloc(s),O="FaustDSP",M=faust_module$1.lengthBytesUTF8(O)+1,p=faust_module$1._malloc(M),H=faust_module$1._malloc(64),P=faust_module$1._malloc(4096);faust_module$1.stringToUTF8(O,p,M),faust_module$1.stringToUTF8(f,T,s),g=g===void 0?new Array:g;for(var X=4,G=faust_module$1._malloc(g.length*X),Z=new Int32Array(faust_module$1.HEAP32.buffer,G,g.length),oe=0;oe<g.length;oe++){var ae=faust_module$1.lengthBytesUTF8(g[oe])+1,fe=faust_module$1._malloc(ae);faust_module$1.stringToUTF8(g[oe],fe,ae),Z[oe]=fe}try{var Ne=faust$1.expandCDSPFromString(p,T,g.length,G,H,P),ke=faust_module$1.UTF8ToString(Ne),Oe=faust_module$1.UTF8ToString(H);faust$1.error_msg=faust_module$1.UTF8ToString(P),faust_module$1._free(T),faust_module$1._free(p),faust_module$1._free(H),faust_module$1._free(P),faust$1.freeCMemory(Ne),Z=new Int32Array(faust_module$1.HEAP32.buffer,G,g.length);for(var oe=0;oe<g.length;oe++)faust_module$1._free(Z[oe]);return faust_module$1._free(G),ke}catch(We){return faust$1.error_msg=faust_module$1.UTF8ToString(faust$1.getErrorAfterException()),faust$1.error_msg===""&&(faust$1.error_msg=We),faust$1.cleanupAfterException(),null}};faust$1.writeDSPFactoryToMachine=function(f){return{name:f.name,code:faust$1.ab2str(f.code),code_source:f.code_source,helpers:f.helpers,name_effect:f.name_effect,code_effect:faust$1.ab2str(f.code_effect),code_source_effect:f.code_source_effect,helpers_effect:f.helpers_effect}};faust$1.readDSPFactoryFromMachine=function(f,g){var s=Sha1.hash(f.code_source,!0),T=faust$1.factory_table[s];T?g(T):faust$1.readDSPFactoryFromMachineAux(f.name,faust$1.str2ab(f.code),f.code_source,f.helpers,f.name_effect,faust$1.str2ab(f.code_effect),f.code_source_effect,f.helpers_effect,s,g)};faust$1.readDSPFactoryFromMachineAux=function(factory_name1,factory_code1,factory_code_source1,helpers_code1,factory_name2,factory_code2,factory_code_source2,helpers_code2,sha_key,callback){WebAssembly.compile(factory_code1).then(module=>{var factory={};factory.polyphony=[],factory.code=factory_code1,factory.code_source=factory_code_source1,factory.helpers=helpers_code1,factory.module=module;var jsToEval=helpers_code1+`
return [getJSON`+factory_name1+", getBase64Code"+factory_name1+"];",evalResult=new Function(jsToEval)();factory.getJSON=evalResult[0],factory.getBase64Code=evalResult[1];try{factory.json_object=JSON.parse(factory.getJSON())}catch(f){throw faust$1.error_msg="Error in JSON.parse: "+f,callback(null),!0}factory.name=factory_name1,factory.sha_key=sha_key,faust$1.factory_table[sha_key]=factory,factory_name2?WebAssembly.compile(factory_code2).then(module_effect=>{factory.code_effect=factory_code2,factory.code_source_effect=factory_code_source2,factory.helpers_effect=helpers_code2,factory.module_effect=module_effect,eval(helpers_code2),factory.getJSONeffect=eval("getJSON"+factory_name2),factory.getBase64Codeeffect=eval("getBase64Code"+factory_name2);try{factory.effect_json_object=JSON.parse(factory.getJSONeffect())}catch(f){throw faust$1.error_msg="Error in JSON.parse: "+f,callback(null),!0}factory.name_effect=factory_name2,callback(factory)}).catch(function(f){faust$1.error_msg="Faust DSP factory cannot be compiled",callback(null)}):callback(factory)}).catch(function(f){faust$1.error_msg="Faust DSP factory cannot be compiled",callback(null)})};faust$1.deleteDSPFactory=function(f){faust$1.factory_table[f.sha_key]=null};faust$1.createDSPInstance=function(f,g,s,T){g.resume();var O={env:{memoryBase:0,tableBase:0,_abs:Math.abs,_acosf:Math.acos,_asinf:Math.asin,_atanf:Math.atan,_atan2f:Math.atan2,_ceilf:Math.ceil,_cosf:Math.cos,_expf:Math.exp,_floorf:Math.floor,_fmodf:function(M,p){return M%p},_logf:Math.log,_log10f:Math.log10,_max_f:Math.max,_min_f:Math.min,_remainderf:function(M,p){return M-Math.round(M/p)*p},_powf:Math.pow,_roundf:Math.fround,_sinf:Math.sin,_sqrtf:Math.sqrt,_tanf:Math.tan,_acoshf:Math.acosh,_asinhf:Math.asinh,_atanhf:Math.atanh,_coshf:Math.cosh,_sinhf:Math.sinh,_tanhf:Math.tanh,_isnanf:Number.isNaN,_isinff:function(M){return!isFinite(M)},_copysignf:function(M,p){return Math.sign(M)===Math.sign(p)?M:-M},_acos:Math.acos,_asin:Math.asin,_atan:Math.atan,_atan2:Math.atan2,_ceil:Math.ceil,_cos:Math.cos,_exp:Math.exp,_floor:Math.floor,_fmod:function(M,p){return M%p},_log:Math.log,_log10:Math.log10,_max_:Math.max,_min_:Math.min,_remainder:function(M,p){return M-Math.round(M/p)*p},_pow:Math.pow,_round:Math.fround,_sin:Math.sin,_sqrt:Math.sqrt,_tan:Math.tan,_acosh:Math.acosh,_asinh:Math.asinh,_atanh:Math.atanh,_cosh:Math.cosh,_sinh:Math.sinh,_tanh:Math.tanh,_isnan:Number.isNaN,_isinf:function(M){return!isFinite(M)},_copysign:function(M,p){return Math.sign(M)===Math.sign(p)?M:-M},table:new WebAssembly.Table({initial:0,element:"anyfunc"})}};performance.now(),WebAssembly.instantiate(f.module,O).then(M=>{performance.now();var p;try{p=g.createScriptProcessor(s,M.exports.getNumInputs(0),M.exports.getNumOutputs(0))}catch(P){faust$1.error_msg="Error in createScriptProcessor: "+P,T(null);return}p.output_handler=null,p.ins=null,p.outs=null,p.compute_handler=null,p.dspInChannnels=[],p.dspOutChannnels=[],p.fPitchwheelLabel=[],p.fCtrlLabel=new Array(128);for(var H=0;H<p.fCtrlLabel.length;H++)p.fCtrlLabel[H]=[];p.outputs_timer=5,p.outputs_items=[],p.inputs_items=[],p.ptr_size=4,p.sample_size=4,p.dsp=0,p.pathTable=[],p.factory=M.exports,p.HEAP=M.exports.memory.buffer,p.HEAP32=new Int32Array(p.HEAP),p.HEAPF32=new Float32Array(p.HEAP),p.numIn=p.factory.getNumInputs(p.dsp),p.numOut=p.factory.getNumOutputs(p.dsp),p.audio_heap_ptr=parseInt(f.json_object.size),p.audio_heap_ptr_inputs=p.audio_heap_ptr,p.audio_heap_ptr_outputs=p.audio_heap_ptr_inputs+p.numIn*p.ptr_size,p.audio_heap_inputs=p.audio_heap_ptr_outputs+p.numOut*p.ptr_size,p.audio_heap_outputs=p.audio_heap_inputs+p.numIn*s*p.sample_size,p.update_outputs=function(){if(p.outputs_items.length>0&&p.output_handler&&p.outputs_timer--===0){p.outputs_timer=5;for(var P=0;P<p.outputs_items.length;P++)p.output_handler(p.outputs_items[P],p.factory.getParamValue(p.dsp,p.pathTable[p.outputs_items[P]]))}},p.compute=function(P){var X;for(X=0;X<p.numIn;X++){var G=P.inputBuffer.getChannelData(X),Z=p.dspInChannnels[X];Z.set(G)}for(p.compute_handler&&p.compute_handler(s),p.factory.compute(p.dsp,s,p.ins,p.outs),p.update_outputs(),X=0;X<p.numOut;X++){var oe=P.outputBuffer.getChannelData(X),ae=p.dspOutChannnels[X];oe.set(ae)}},p.parse_ui=function(P){for(var X=0;X<P.length;X++)p.parse_group(P[X])},p.parse_group=function(P){P.items&&p.parse_items(P.items)},p.parse_items=function(P){for(var X=0;X<P.length;X++)p.parse_item(P[X])},p.parse_item=function(P){if(P.type==="vgroup"||P.type==="hgroup"||P.type==="tgroup")p.parse_items(P.items);else if(P.type==="hbargraph"||P.type==="vbargraph")p.outputs_items.push(P.address),p.pathTable[P.address]=parseInt(P.index);else if((P.type==="vslider"||P.type==="hslider"||P.type==="button"||P.type==="checkbox"||P.type==="nentry")&&(p.inputs_items.push(P.address),p.pathTable[P.address]=parseInt(P.index),P.meta!==void 0))for(var X=0;X<P.meta.length;X++)P.meta[X].midi!==void 0&&(P.meta[X].midi.trim()==="pitchwheel"?p.fPitchwheelLabel.push({path:P.address,min:parseFloat(P.min),max:parseFloat(P.max)}):P.meta[X].midi.trim().split(" ")[0]==="ctrl"&&p.fCtrlLabel[parseInt(P.meta[X].midi.trim().split(" ")[1])].push({path:P.address,min:parseFloat(P.min),max:parseFloat(P.max)}))},p.initAux=function(){var P;if(p.onaudioprocess=p.compute,p.numIn>0){for(p.ins=p.audio_heap_ptr_inputs,P=0;P<p.numIn;P++)p.HEAP32[(p.ins>>2)+P]=p.audio_heap_inputs+s*p.sample_size*P;var X=p.HEAP32.subarray(p.ins>>2,p.ins+p.numIn*p.ptr_size>>2);for(P=0;P<p.numIn;P++)p.dspInChannnels[P]=p.HEAPF32.subarray(X[P]>>2,X[P]+s*p.sample_size>>2)}if(p.numOut>0){for(p.outs=p.audio_heap_ptr_outputs,P=0;P<p.numOut;P++)p.HEAP32[(p.outs>>2)+P]=p.audio_heap_outputs+s*p.sample_size*P;var G=p.HEAP32.subarray(p.outs>>2,p.outs+p.numOut*p.ptr_size>>2);for(P=0;P<p.numOut;P++)p.dspOutChannnels[P]=p.HEAPF32.subarray(G[P]>>2,G[P]+s*p.sample_size>>2)}p.parse_ui(f.json_object.ui),p.factory.init(p.dsp,g.sampleRate)},p.destroy=function(){},p.getSampleRate=function(){return g.sampleRate},p.getNumInputs=function(){return p.factory.getNumInputs(p.dsp)},p.getNumOutputs=function(){return p.factory.getNumOutputs(p.dsp)},p.init=function(P){p.factory.init(p.dsp,P)},p.instanceInit=function(P){p.factory.instanceInit(p.dsp,P)},p.instanceConstants=function(P){p.factory.instanceConstants(p.dsp,P)},p.instanceResetUserInterface=function(){p.factory.instanceResetUserInterface(p.dsp)},p.instanceClear=function(){p.factory.instanceClear(p.dsp)},p.metadata=function(P){f.json_object.meta&&f.json_object.meta.forEach(function(X){P.declare(Object.keys(X)[0],Object.values(X)[0])})},p.setOutputParamHandler=function(P){p.output_handler=P},p.getOutputParamHandler=function(){return p.output_handler},p.ctrlChange=function(P,X,G){for(var Z=0;Z<p.fCtrlLabel[X].length;Z++){var oe=p.fCtrlLabel[X][Z].path;p.setParamValue(oe,faust$1.remap(G,0,127,p.fCtrlLabel[X][Z].min,p.fCtrlLabel[X][Z].max)),p.output_handler&&p.output_handler(oe,p.getParamValue(oe))}},p.pitchWheel=function(P,X){for(var G=0;G<p.fPitchwheelLabel.length;G++){var Z=p.fPitchwheelLabel[G];p.setParamValue(Z.path,faust$1.remap(X,0,16383,Z.min,Z.max)),p.output_handler&&p.output_handler(Z.path,p.getParamValue(Z.path))}},p.setParamValue=function(P,X){return p.factory.setParamValue(p.dsp,p.pathTable[P],X)},p.getParamValue=function(P){return p.factory.getParamValue(p.dsp,p.pathTable[P])},p.getParams=function(){return p.inputs_items},p.getJSON=function(){return f.getJSON()},p.initAux(),T(p)}).catch(function(M){faust$1.error_msg="Faust DSP cannot be instantiated",T(null)})};faust$1.deleteDSPInstance=function(f){};var mydspProcessorString=`

    'use strict';

    function getJSONmydsp() { return \`GETJSON\`; }
    function getBase64Codemydsp() { return \`GETBASE64CODE\`; }

    // Monophonic Faust DSP
    class mydspProcessor extends AudioWorkletProcessor {

        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                mydspProcessor.parse_group(ui[i], obj, callback);
            }
        }

        static parse_group(group, obj, callback)
        {
            if (group.items) {
                mydspProcessor.parse_items(group.items, obj, callback);
            }
        }

        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }

        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
            // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }

        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }

        static b64ToUint6(nChr)
        {
            return nChr > 64 && nChr < 91 ?
            nChr - 65
            : nChr > 96 && nChr < 123 ?
            nChr - 71
            : nChr > 47 && nChr < 58 ?
            nChr + 4
            : nChr === 43 ?
            62
            : nChr === 47 ?
            63
            :
            0;
        }

        static atob(sBase64, nBlocksSize)
        {
            if (typeof atob === 'function') {
                return atob(sBase64);
            } else {

                var sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
                var nInLen = sB64Enc.length;
                var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
                var taBytes = new Uint8Array(nOutLen);

                for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                    nMod4 = nInIdx & 3;
                    nUint24 |= mydspProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                    if (nMod4 === 3 || nInLen - nInIdx === 1) {
                        for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                            taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                        }
                        nUint24 = 0;
                    }
                }
                return taBytes.buffer;
            }
        }

        static remap(v, mn0, mx0, mn1, mx1)
        {
            return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
        }

        static get parameterDescriptors ()
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            mydspProcessor.parse_ui(JSON.parse(getJSONmydsp()).ui, params, mydspProcessor.parse_item1);
            return params;
        }

        constructor(options)
        {
            super(options);
            this.running = true;

            this.json_object = JSON.parse(getJSONmydsp());

            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };

            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;

            // Create the WASM instance
            var wasm_instance = new WebAssembly.Instance(mydspProcessor.wasm_module, mydspProcessor.importObject);
            this.factory = wasm_instance.exports;
            this.HEAP = wasm_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];

            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * mydspProcessor.buffer_size * this.sample_size);

            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];

            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }

            this.initAux = function ()
            {
                var i;

                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                // Parse UI
                mydspProcessor.parse_ui(this.json_object.ui, this, mydspProcessor.parse_item2);

                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }

        process(inputs, outputs, parameters)
        {
            var input = inputs[0];
            var output = outputs[0];

            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }

            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */

            // Update controls (possibly needed for sample accurate control)
            for (const path in parameters) {
            	const paramArray = parameters[path];
            	this.setParamValue(path, paramArray[0]);
            }

           // Compute
            try {
                this.factory.compute(this.dsp, mydspProcessor.buffer_size, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();

            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }

            return this.running;
        }
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals

    mydspProcessor.buffer_size = 128;

    mydspProcessor.importObject = {
        env: {
            memoryBase: 0,
            tableBase: 0,

            // Integer version
            _abs: Math.abs,

            // Float version
            _acosf: Math.acos,
            _asinf: Math.asin,
            _atanf: Math.atan,
            _atan2f: Math.atan2,
            _ceilf: Math.ceil,
            _cosf: Math.cos,
            _expf: Math.exp,
            _floorf: Math.floor,
            _fmodf: function(x, y) { return x % y; },
            _logf: Math.log,
            _log10f: Math.log10,
            _max_f: Math.max,
            _min_f: Math.min,
            _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
            _powf: Math.pow,
            _roundf: Math.fround,
            _sinf: Math.sin,
            _sqrtf: Math.sqrt,
            _tanf: Math.tan,
            _acoshf: Math.acosh,
            _asinhf: Math.asinh,
            _atanhf: Math.atanh,
            _coshf: Math.cosh,
            _sinhf: Math.sinh,
            _tanhf: Math.tanh,
            _isnanf: Number.isNaN,
            _isinff: function (x) { return !isFinite(x); },
            _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            // Double version
            _acos: Math.acos,
            _asin: Math.asin,
            _atan: Math.atan,
            _atan2: Math.atan2,
            _ceil: Math.ceil,
            _cos: Math.cos,
            _exp: Math.exp,
            _floor: Math.floor,
            _fmod: function(x, y) { return x % y; },
            _log: Math.log,
            _log10: Math.log10,
            _max_: Math.max,
            _min_: Math.min,
            _remainder:function(x, y) { return x - Math.round(x/y) * y; },
            _pow: Math.pow,
            _round: Math.fround,
            _sin: Math.sin,
            _sqrt: Math.sqrt,
            _tan: Math.tan,
            _acosh: Math.acosh,
            _asinh: Math.asinh,
            _atanh: Math.atanh,
            _cosh: Math.cosh,
            _sinh: Math.sinh,
            _tanh: Math.tanh,
            _isnan: Number.isNaN,
            _isinf: function (x) { return !isFinite(x); },
            _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
        }
    };

    // Synchronously compile and instantiate the WASM module
    try {
        mydspProcessor.wasm_module = new WebAssembly.Module(mydspProcessor.atob(getBase64Codemydsp()));
        registerProcessor('mydsp', mydspProcessor);
    } catch (e) {
        // REMOVED: console log noise that doesnt affect output
        // I assume if it were serious this error would not be caught and not rethrown
        // console.log(e); console.log("Faust mydsp cannot be loaded or compiled");
    }
`;faust$1.createDSPWorkletInstanceAux=function(f,g,s){g.resume().catch(()=>{});var T=new AudioWorkletNode(g,f.name,{numberOfInputs:parseInt(f.json_object.inputs)>0?1:0,numberOfOutputs:parseInt(f.json_object.outputs)>0?1:0,channelCount:Math.max(1,parseInt(f.json_object.inputs)),outputChannelCount:[parseInt(f.json_object.outputs)],channelCountMode:"explicit",channelInterpretation:"speakers"});T.onprocessorerror=()=>{console.log("An error from mydspProcessor was detected.")},T.handleMessage=function(O){var M=O.data;this.output_handler&&this.output_handler(M.path,M.value)},T.init=function(){this.parse_ui=function(M,p){for(var H=0;H<M.length;H++)this.parse_group(M[H],p)},this.parse_group=function(M,p){M.items&&this.parse_items(M.items,p)},this.parse_items=function(M,p){for(var H=0;H<M.length;H++)this.parse_item(M[H],p)},this.parse_item=function(M,p){if(M.type==="vgroup"||M.type==="hgroup"||M.type==="tgroup")this.parse_items(M.items,p);else if(M.type==="hbargraph"||M.type==="vbargraph")p.outputs_items.push(M.address);else if((M.type==="vslider"||M.type==="hslider"||M.type==="button"||M.type==="checkbox"||M.type==="nentry")&&(p.inputs_items.push(M.address),M.meta!==void 0))for(var H=0;H<M.meta.length;H++)M.meta[H].midi!==void 0&&(M.meta[H].midi.trim()==="pitchwheel"?p.fPitchwheelLabel.push({path:M.address,min:parseFloat(M.min),max:parseFloat(M.max)}):M.meta[H].midi.trim().split(" ")[0]==="ctrl"&&p.fCtrlLabel[parseInt(M.meta[H].midi.trim().split(" ")[1])].push({path:M.address,min:parseFloat(M.min),max:parseFloat(M.max)}))},this.output_handler=null,this.json_object=f.json_object,this.inputs_items=[],this.outputs_items=[],this.fPitchwheelLabel=[],this.fCtrlLabel=new Array(128);for(var O=0;O<this.fCtrlLabel.length;O++)this.fCtrlLabel[O]=[];this.parse_ui(this.json_object.ui,this),this.port.onmessage=this.handleMessage.bind(this)},T.init(),T.destroy=function(){this.port.postMessage({type:"destroy"}),this.port.close()},T.getJSON=function(){return f.getJSON()},T.setParamValue=function(O,M){this.parameters.get(O).setValueAtTime(M,0)},T.getParamValue=function(O){return this.parameters.get(O).value},T.setOutputParamHandler=function(O){this.output_handler=O},T.getOutputParamHandler=function(){return this.output_handler},T.getNumInputs=function(){return parseInt(f.json_object.inputs)},T.getNumOutputs=function(){return parseInt(f.json_object.outputs)},T.inputChannelCount=function(){return parseInt(f.json_object.inputs)},T.outputChannelCount=function(){return parseInt(f.json_object.outputs)},T.getParams=function(){return this.inputs_items},T.getDescriptor=function(){return this.inputs_items},T.ctrlChange=function(O,M,p){for(var H=0;H<this.fCtrlLabel[M].length;H++){var P=this.fCtrlLabel[M][H].path;this.setParamValue(P,T.remap(p,0,127,this.fCtrlLabel[M][H].min,this.fCtrlLabel[M][H].max)),this.output_handler&&this.output_handler(P,this.getParamValue(P))}},T.pitchWheel=function(O,M){for(var p=0;p<this.fPitchwheelLabel.length;p++){var H=this.fPitchwheelLabel[p];this.setParamValue(H.path,T.remap(M,0,16383,H.min,H.max)),this.output_handler&&this.output_handler(H.path,this.getParamValue(H.path))}},T.midiMessage=function(O){var M=O[0]>>4,p=O[0]&15,H=O[1],P=O[2];p!==9&&(M===11?this.ctrlChange(p,H,P):M===14&&this.pitchWheel(p,P*128+H))},T.onMidi=function(O){this.midiMessage(O)},T.getState=async function(){var O=new Object;for(let M=0;M<this.getDescriptor().length;M++)Object.assign(O,{[this.getDescriptor()[M]]:`${this.getParam(this.getDescriptor()[M])}`});return new Promise(M=>{M(O)})},T.setState=async function(O){return new Promise(M=>{for(const p in O)O.hasOwnProperty(p)&&this.setParam(p,O[p]);try{this.gui.setAttribute("state",JSON.stringify(O))}catch(p){console.warn("Plugin without gui or GUI not defined",p)}M(O)})},T.setPatch=function(O){this.setState(this.presets[O])},T.metadata=function(O){},T.remap=function(O,M,p,H,P){return 1*(O-M)/(p-M)*(P-H)+H},s(T)};faust$1.createDSPWorkletInstance=function(f,g,s){var T=/mydsp/g,O=/GETJSON/g,M=/GETBASE64CODE/g,p=mydspProcessorString.replace(T,f.name),H=p.replace(O,f.getJSON()),P=H.replace(M,f.getBase64Code()),X=window.URL.createObjectURL(new Blob([P],{type:"text/javascript"}));g.audioWorklet.addModule(X).then(function(){faust$1.createDSPWorkletInstanceAux(f,g,s)}).catch(function(G){alert(G)})};faust$1.deleteDSPWorkletInstance=function(f){};faust$1.ready;const factoryCache=new Map;async function compile(f,g){const s=["-ftz","2","-I","http://127.0.0.1:8000/../../libraries/"];let T=factoryCache.get(g);T||(T=new Promise(H=>faust$1.createDSPFactory(g,s,H)),factoryCache.set(g,T));const O=await T;if(!O)throw new Error(faust$1.error_msg);const M=await new Promise(H=>faust$1.createDSPWorkletInstance(O,f,H));if(!M)throw new Error(faust$1.error_msg);M.ui=JSON.parse(M.getJSON()).ui;const p=new Map;return M.setOutputParamHandler((H,P)=>{p.set(H,P)}),M.getOutputValue=H=>{var P;return(P=p.get(H))!=null?P:0},M}function validateParamDefinition$1(f,g){if(!isConstant$1(g)&&!isVariable$1(g))throw new Error(`param "${f}" must be a constant number or a string referring to a param name, but got ${g}`);return g}function validateParamDefinitionObject(f){for(const g in f)validateParamDefinition$1(g,f[g]);return f}function isConstant$1(f){return typeof f=="number"}function isVariable$1(f){return typeof f=="string"}class DspNode$1{constructor(g){on(this,"type");this.type=g.type}static isFaustDspNode(g){return g.type==="faust"}static isPolyDspNode(g){return g.type==="poly"}static isFaustDspNodeSerialized(g){return g.type==="faust"}static isPolyDspNodeSerialized(g){return g.type==="poly"}serialize(){throw new Error(".serialize() can only be called on subclasses")}}class DspNodeFaust extends DspNode$1{constructor(s){var T;super({type:"faust"});on(this,"dsp");on(this,"inputs");on(this,"paramDefs");on(this,"dependencies");this.dsp=s.dsp,this.inputs=(T=s.inputs)!=null?T:[],this.paramDefs=validateParamDefinitionObject(s.paramDefs),this.dependencies=s.dependencies}serialize(){const{dsp:s,paramDefs:T}=this,O=this.inputs.map(M=>M.serialize());return{type:"faust",dsp:s,inputs:O,paramDefs:T}}}function faust(f,g){const{inputs:s,...T}=g;return new DspNodeFaust({dsp:f,inputs:s,paramDefs:T,dependencies:{compile}})}function validateParamDefinition(f,g){if(!isConstant(g)&&!isVariable(g))throw new Error(`param "${f}" must be a constant number or a string referring to a param name, but got ${g}`);return g}function isConstant(f){return typeof f=="number"}function isVariable(f){return typeof f=="string"}class DspNode{constructor(g){on(this,"type");this.type=g.type}static isFaustDspNode(g){return g.type==="faust"}static isPolyDspNode(g){return g.type==="poly"}static isFaustDspNodeSerialized(g){return g.type==="faust"}static isPolyDspNodeSerialized(g){return g.type==="poly"}serialize(){throw new Error(".serialize() can only be called on subclasses")}}class DspNodePoly extends DspNode{constructor(s){super({type:"poly"});on(this,"input");on(this,"polyphony");on(this,"paramCacheSize");on(this,"release");on(this,"gate");on(this,"dependencies");this.input=s.input,this.polyphony=s.polyphony,this.paramCacheSize=s.paramCacheSize,this.release=validateParamDefinition("release",s.release),this.gate=validateParamDefinition("gate",s.gate),this.dependencies=s.dependencies}serialize(){const{polyphony:s,paramCacheSize:T,release:O,gate:M}=this;return{type:"poly",input:this.input.serialize(),polyphony:s,paramCacheSize:T,release:O,gate:M}}}function findOldestVoiceIndex(f){var s;if(f.length===0)return-1;const g=f.reduce((T,O)=>!O||T&&T.time<O.time?T:O);return(s=g==null?void 0:g.voice)!=null?s:-1}class VoiceAllocator{constructor(g){on(this,"_time",0);on(this,"_voices",[]);this._voices.length=g}_startVoice(g,s){const T=this._voices[g];return(T==null?void 0:T.released)!==void 0&&clearTimeout(T.released),this._voices[g]={id:s,voice:g,time:this._time++},g}_stopVoice(g){this._voices[g]=void 0}_findStarted(g){return this._voices.findIndex(s=>s&&s.id===g&&s.released===void 0)}_findReleased(g){return this._voices.findIndex(s=>s&&s.id===g&&s.released!==void 0)}get voices(){return this._voices.map(g=>g==null?void 0:g.id)}get(g){return this._voices.findIndex(s=>s&&s.id===g)}start(g){const s=this._findStarted(g);if(s!==-1)return[s,!1];const T=this._findReleased(g);if(T!==-1)return[this._startVoice(T,g),!1];const O=this._voices.findIndex(P=>!P);if(O!==-1)return[this._startVoice(O,g),!0];const M=this._voices.filter(P=>(P==null?void 0:P.released)!==void 0),p=findOldestVoiceIndex(M);if(p!==-1)return[this._startVoice(p,g),!0];const H=findOldestVoiceIndex(this._voices);if(H!==-1)return[this._startVoice(H,g),!0];throw new Error("unable to find oldest active voice")}stop(g){const s=this._findStarted(g);return s!==-1&&this._stopVoice(s),[s,!1]}release(g,s){const T=this._findStarted(g),O=this._voices[T];return O&&(O.released=setTimeout(()=>{this._stopVoice(T)},s)),[T,!1]}}class VoiceController{constructor(g){on(this,"_polyphony");on(this,"_resolveGate");on(this,"_release",2e3);on(this,"_paramCacheSize");on(this,"_allocator");on(this,"_allParams",{});on(this,"_perVoiceParamsStore",new Map);on(this,"_recentlyAccessedIds",new Set);const{polyphony:s,paramCacheSize:T,resolveGate:O}=g;this._polyphony=s,this._paramCacheSize=T,this._resolveGate=O,this._allocator=new VoiceAllocator(s)}_accessId(g){const s=this._recentlyAccessedIds;for(s.delete(g),s.add(g);s.size>this._paramCacheSize;){const T=s.keys().next().value;s.delete(T),this._deleteParamsForId(T)}}_getParamsForVoice(g){this._accessId(g);const s={};return this._perVoiceParamsStore.forEach((T,O)=>{const M=T.get(g);M!==void 0&&(s[O]=M)}),s}_addParamForVoice(g,s,T){var M;const O=(M=this._perVoiceParamsStore.get(g))!=null?M:new Map;O.set(s,T),this._perVoiceParamsStore.set(g,O)}_addParamsForVoice(g,s){this._accessId(g);for(const T in s){const O=s[T];O!==void 0&&this._addParamForVoice(T,g,O)}}_deleteParamsForId(g){this._perVoiceParamsStore.forEach(s=>{s.delete(g)})}setRelease(g){this._release=g}set({voice:g,...s}){return g===void 0?this.setAll(s):this.setWithId(`${g}`,s)}setWithId(g,s){const T=this._resolveGate(s),{_allocator:O,_allParams:M}=this;let p=-1;if(T!==void 0?[p]=T>0?O.start(g):O.release(g,this._release):p=O.get(g),p===-1)return[];const H=this._getParamsForVoice(g),P={...M,...H,...s};return this._addParamsForVoice(g,P),[{index:p,params:P}]}setAll(g){this._allParams={...this._allParams,...g};for(const T in g)this._perVoiceParamsStore.set(T,new Map);const s=[];for(let T=0;T<this._polyphony;T++)s.push({index:T,params:g});return s}}function poly(f){const{input:g,polyphony:s,paramCacheSize:T,release:O,gate:M}=f;return new DspNodePoly({input:g,polyphony:s,paramCacheSize:T,release:O,gate:M,dependencies:{VoiceController}})}var offlineRenderInnerStringified=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function audioBufferToWav(buffer, opt) {
  opt = opt || {};
  var numChannels = buffer.numberOfChannels;
  var sampleRate = buffer.sampleRate;
  var format = opt.float32 ? 3 : 1;
  var bitDepth = format === 3 ? 32 : 16;
  var result;
  if (numChannels === 2) {
    result = interleave(buffer.getChannelData(0), buffer.getChannelData(1));
  } else {
    result = buffer.getChannelData(0);
  }
  return encodeWAV(result, format, sampleRate, numChannels, bitDepth);
}
function encodeWAV(samples, format, sampleRate, numChannels, bitDepth) {
  var bytesPerSample = bitDepth / 8;
  var blockAlign = numChannels * bytesPerSample;
  var buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
  var view = new DataView(buffer);
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * bytesPerSample, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(view, 36, "data");
  view.setUint32(40, samples.length * bytesPerSample, true);
  if (format === 1) {
    floatTo16BitPCM(view, 44, samples);
  } else {
    writeFloat32(view, 44, samples);
  }
  return buffer;
}
function interleave(inputL, inputR) {
  var length = inputL.length + inputR.length;
  var result = new Float32Array(length);
  var index = 0;
  var inputIndex = 0;
  while (index < length) {
    result[index++] = inputL[inputIndex];
    result[index++] = inputR[inputIndex];
    inputIndex++;
  }
  return result;
}
function writeFloat32(output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 4) {
    output.setFloat32(offset, input[i], true);
  }
}
function floatTo16BitPCM(output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 2) {
    var s = Math.max(-1, Math.min(1, input[i]));
    output.setInt16(offset, s < 0 ? s * 32768 : s * 32767, true);
  }
}
function writeString(view, offset, string) {
  for (var i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
function createAudioCtx(audioCtxOrSampleRate) {
  if (typeof audioCtxOrSampleRate === "number") {
    return new AudioContext({ sampleRate: audioCtxOrSampleRate });
  }
  return audioCtxOrSampleRate;
}
function isObjectType(type, value) {
  return Object.prototype.toString.call(value) === \`[object \${type}]\`;
}
function isAudioArray(value) {
  return Array.isArray(value) && value.length > 0 && Array.isArray(value[0]);
}
function isFloat32AudioArray(value) {
  return Array.isArray(value) && value.length > 0 && isObjectType("Float32Array", value[0]);
}
function isAudioBuffer(value) {
  return isObjectType("AudioBuffer", value);
}
function isArrayBuffer(value) {
  return isObjectType("ArrayBuffer", value);
}
function audioArrayToAudioBuffer(channels, audioCtx) {
  const buffer = audioCtx.createBuffer(channels.length, channels[0].length, audioCtx.sampleRate);
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const nowBuffering = buffer.getChannelData(channel);
    for (let i = 0; i < buffer.length; i++) {
      nowBuffering[i] = channels[channel][i];
    }
  }
  return buffer;
}
async function arrayBufferToAudioBuffer(arrayBuffer, audioCtx) {
  return await new Promise((resolve) => audioCtx.decodeAudioData(arrayBuffer, resolve));
}
async function toAudioBuffer(input, audioCtxOrSampleRate) {
  if (isAudioBuffer(input)) {
    return input;
  }
  const audioCtx = createAudioCtx(audioCtxOrSampleRate);
  if (isArrayBuffer(input)) {
    return arrayBufferToAudioBuffer(input, audioCtx);
  }
  if (isAudioArray(input) || isFloat32AudioArray(input)) {
    return audioArrayToAudioBuffer(input, audioCtx);
  }
  throw new Error(\`toAudioBuffer: unconvertible input type: \${input}\`);
}
async function toArrayBuffer(input, audioCtxOrSampleRate) {
  if (isArrayBuffer(input)) {
    return input;
  }
  const audioCtx = createAudioCtx(audioCtxOrSampleRate);
  const buffer = await toAudioBuffer(input, audioCtx);
  return audioBufferToWav(buffer, { float32: true });
}
function offlineRenderInner(callback) {
  return async (params) => {
    const { channels, length, sampleRate, inputArrayBuffer, props } = params;
    const offlineContext = new OfflineAudioContext(channels, length, sampleRate);
    let source;
    if (inputArrayBuffer) {
      source = offlineContext.createBufferSource();
      source.buffer = await toAudioBuffer(inputArrayBuffer, sampleRate);
    }
    if (typeof callback !== "function") {
      throw new Error(\`functionString must set exports.buildContext\`);
    }
    await callback(offlineContext, source, props);
    source?.start();
    const audioBuffer = await offlineContext.startRendering();
    const arrayBuffer = await toArrayBuffer(audioBuffer, sampleRate);
    return [arrayBuffer, [arrayBuffer]];
  };
}
exports.offlineRenderInner = offlineRenderInner;
`;function audioBufferToWav(f,g){g=g||{};var s=f.numberOfChannels,T=f.sampleRate,O=g.float32?3:1,M=O===3?32:16,p;return s===2?p=interleave(f.getChannelData(0),f.getChannelData(1)):p=f.getChannelData(0),encodeWAV(p,O,T,s,M)}function encodeWAV(f,g,s,T,O){var M=O/8,p=T*M,H=new ArrayBuffer(44+f.length*M),P=new DataView(H);return writeString(P,0,"RIFF"),P.setUint32(4,36+f.length*M,!0),writeString(P,8,"WAVE"),writeString(P,12,"fmt "),P.setUint32(16,16,!0),P.setUint16(20,g,!0),P.setUint16(22,T,!0),P.setUint32(24,s,!0),P.setUint32(28,s*p,!0),P.setUint16(32,p,!0),P.setUint16(34,O,!0),writeString(P,36,"data"),P.setUint32(40,f.length*M,!0),g===1?floatTo16BitPCM(P,44,f):writeFloat32(P,44,f),H}function interleave(f,g){for(var s=f.length+g.length,T=new Float32Array(s),O=0,M=0;O<s;)T[O++]=f[M],T[O++]=g[M],M++;return T}function writeFloat32(f,g,s){for(var T=0;T<s.length;T++,g+=4)f.setFloat32(g,s[T],!0)}function floatTo16BitPCM(f,g,s){for(var T=0;T<s.length;T++,g+=2){var O=Math.max(-1,Math.min(1,s[T]));f.setInt16(g,O<0?O*32768:O*32767,!0)}}function writeString(f,g,s){for(var T=0;T<s.length;T++)f.setUint8(g+T,s.charCodeAt(T))}function createAudioCtx(f){return typeof f=="number"?new AudioContext({sampleRate:f}):f}function isObjectType(f,g){return Object.prototype.toString.call(g)===`[object ${f}]`}function isAudioArray(f){return Array.isArray(f)&&f.length>0&&Array.isArray(f[0])}function isFloat32AudioArray(f){return Array.isArray(f)&&f.length>0&&isObjectType("Float32Array",f[0])}function isAudioBuffer(f){return isObjectType("AudioBuffer",f)}function isArrayBuffer(f){return isObjectType("ArrayBuffer",f)}function audioArrayToAudioBuffer(f,g){const s=g.createBuffer(f.length,f[0].length,g.sampleRate);for(let T=0;T<s.numberOfChannels;T++){const O=s.getChannelData(T);for(let M=0;M<s.length;M++)O[M]=f[T][M]}return s}function audioBufferToFloat32AudioArray(f){const g=[];for(let s=0;s<f.numberOfChannels;s++)g.push(f.getChannelData(s));return g}function arrayToFloat32AudioArray(f){return f.map(g=>new Float32Array(g))}async function arrayBufferToAudioBuffer(f,g){return await new Promise(s=>g.decodeAudioData(f,s))}function toFloat32AudioArray(f){if(isFloat32AudioArray(f))return f;if(isAudioArray(f))return arrayToFloat32AudioArray(f);if(isAudioBuffer(f))return audioBufferToFloat32AudioArray(f);throw new Error(`toFloat32AudioArray: unconvertible input type: ${f}`)}async function toAudioBuffer(f,g){if(isAudioBuffer(f))return f;const s=createAudioCtx(g);if(isArrayBuffer(f))return arrayBufferToAudioBuffer(f,s);if(isAudioArray(f)||isFloat32AudioArray(f))return audioArrayToAudioBuffer(f,s);throw new Error(`toAudioBuffer: unconvertible input type: ${f}`)}async function toArrayBuffer(f,g){if(isArrayBuffer(f))return f;const s=createAudioCtx(g),T=await toAudioBuffer(f,s);return audioBufferToWav(T,{float32:!0})}var runInIframeInnerStringified=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function receiveParams() {
  return new Promise((resolve) => {
    const messageListener = (message) => {
      if (message.source !== window.parent || message.origin !== window.location.origin) {
        return;
      }
      window.removeEventListener("message", messageListener);
      resolve(message.data);
    };
    window.addEventListener("message", messageListener);
  });
}
async function sendResult(result, transferrables) {
  window.parent.postMessage(result, window.location.origin, transferrables);
}
async function runInIframeInner(callback) {
  const params = await receiveParams();
  const [result, transferrables = []] = await callback(params);
  sendResult(result, transferrables);
}
exports.runInIframeInner = runInIframeInner;
`;async function runInIframe(f){const{functionString:g,params:s,transferrables:T=[]}=f,O=document.createElement("iframe");O.style.display="none",document.body.append(O);const{contentWindow:M}=O;if(!M)throw new Error("contentWindow not available on iframe");return M.document.write(`<script>
      var exports = {};
      ${g}
      ${runInIframeInnerStringified}
      exports.runInIframeInner(exports.run);
    <\/script>`),new Promise(p=>{const H=P=>{P.source===M&&(window.removeEventListener("message",H),O.remove(),p(P.data))};window.addEventListener("message",H),M.postMessage(s,window.location.origin,T)})}async function offlineRender$1(f){var Z,oe;const{functionString:g="",channels:s,sampleRate:T,input:O,props:M}=f;let{length:p}=f,H,P=[];O&&(H=await toArrayBuffer(O,T),P=[H],p===void 0&&(p=(oe=(Z=toFloat32AudioArray(O)[0])==null?void 0:Z.length)!=null?oe:0));const X=await runInIframe({functionString:`
      ${offlineRenderInnerStringified}
      ${g}
      exports.run = exports.offlineRenderInner(exports.buildContext);
    `,params:{channels:s,sampleRate:T,inputArrayBuffer:H,length:p!=null?p:0,props:M},transferrables:P}),G=await toAudioBuffer(X,T);return toFloat32AudioArray(G)}var offlineRenderSynthInnerStringified=`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateParamDefinition(name, paramDef) {
  if (!isConstant(paramDef) && !isVariable(paramDef)) {
    throw new Error(\`param "\${name}" must be a constant number or a string referring to a param name, but got \${paramDef}\`);
  }
  return paramDef;
}
function validateParamDefinitionObject(paramDefs) {
  for (const name in paramDefs) {
    validateParamDefinition(name, paramDefs[name]);
  }
  return paramDefs;
}
function isConstant(paramDef) {
  return typeof paramDef === "number";
}
function isVariable(paramDef) {
  return typeof paramDef === "string";
}
function resolveParam(params, paramDef) {
  if (isConstant(paramDef)) {
    return paramDef;
  } else if (isVariable(paramDef)) {
    return params[paramDef];
  }
  return void 0;
}
class DspNode {
  type;
  constructor(config) {
    this.type = config.type;
  }
  static isFaustDspNode(DspNode2) {
    return DspNode2.type === "faust";
  }
  static isPolyDspNode(DspNode2) {
    return DspNode2.type === "poly";
  }
  static isFaustDspNodeSerialized(serialized) {
    return serialized.type === "faust";
  }
  static isPolyDspNodeSerialized(serialized) {
    return serialized.type === "poly";
  }
  serialize() {
    throw new Error(".serialize() can only be called on subclasses");
  }
}
class DspNodeFaust extends DspNode {
  dsp;
  inputs;
  paramDefs;
  dependencies;
  constructor(config) {
    super({
      type: "faust"
    });
    this.dsp = config.dsp;
    this.inputs = config.inputs ?? [];
    this.paramDefs = validateParamDefinitionObject(config.paramDefs);
    this.dependencies = config.dependencies;
  }
  serialize() {
    const { dsp, paramDefs } = this;
    const inputs = this.inputs.map((input) => input.serialize());
    return {
      type: "faust",
      dsp,
      inputs,
      paramDefs
    };
  }
}
class DspNodePoly extends DspNode {
  input;
  polyphony;
  paramCacheSize;
  release;
  gate;
  dependencies;
  constructor(config) {
    super({
      type: "poly"
    });
    this.input = config.input;
    this.polyphony = config.polyphony;
    this.paramCacheSize = config.paramCacheSize;
    this.release = validateParamDefinition("release", config.release);
    this.gate = validateParamDefinition("gate", config.gate);
    this.dependencies = config.dependencies;
  }
  serialize() {
    const { polyphony, paramCacheSize, release, gate } = this;
    const input = this.input.serialize();
    return {
      type: "poly",
      input,
      polyphony,
      paramCacheSize,
      release,
      gate
    };
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
var FaustModule = function() {
  var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
  if (typeof __filename !== "undefined")
    _scriptDir = _scriptDir || __filename;
  return function(FaustModule2) {
    FaustModule2 = FaustModule2 || {};
    var Module = typeof FaustModule2 !== "undefined" ? FaustModule2 : {};
    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;
    (function() {
      var loadPackage = function(metadata) {
        if (typeof window === "object") {
          window["encodeURIComponent"](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/");
        } else if (typeof location !== "undefined") {
          encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
        } else {
          throw "using preloaded data can only be done on a web page or in a web worker";
        }
        var PACKAGE_NAME = "../../lib/libfaust-wasm.data";
        var REMOTE_PACKAGE_BASE = "libfaust-wasm.data";
        if (typeof Module["locateFilePackage"] === "function" && !Module["locateFile"]) {
          Module["locateFile"] = Module["locateFilePackage"];
          err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)");
        }
        var REMOTE_PACKAGE_NAME = Module["locateFile"] ? Module["locateFile"](REMOTE_PACKAGE_BASE, "") : REMOTE_PACKAGE_BASE;
        var REMOTE_PACKAGE_SIZE = metadata["remote_package_size"];
        metadata["package_uuid"];
        function fetchRemotePackage(packageName, packageSize, callback2, errback) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", packageName, true);
          xhr.responseType = "arraybuffer";
          xhr.onprogress = function(event) {
            var url = packageName;
            var size = packageSize;
            if (event.total)
              size = event.total;
            if (event.loaded) {
              if (!xhr.addedTotal) {
                xhr.addedTotal = true;
                if (!Module.dataFileDownloads)
                  Module.dataFileDownloads = {};
                Module.dataFileDownloads[url] = {
                  loaded: event.loaded,
                  total: size
                };
              } else {
                Module.dataFileDownloads[url].loaded = event.loaded;
              }
              var total = 0;
              var loaded = 0;
              var num = 0;
              for (var download in Module.dataFileDownloads) {
                var data = Module.dataFileDownloads[download];
                total += data.total;
                loaded += data.loaded;
                num++;
              }
              total = Math.ceil(total * Module.expectedDataFileDownloads / num);
              if (Module["setStatus"])
                Module["setStatus"]("Downloading data... (" + loaded + "/" + total + ")");
            } else if (!Module.dataFileDownloads) {
              if (Module["setStatus"])
                Module["setStatus"]("Downloading data...");
            }
          };
          xhr.onerror = function(event) {
            throw new Error("NetworkError for: " + packageName);
          };
          xhr.onload = function(event) {
            if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || xhr.status == 0 && xhr.response) {
              var packageData = xhr.response;
              callback2(packageData);
            } else {
              throw new Error(xhr.statusText + " : " + xhr.responseURL);
            }
          };
          xhr.send(null);
        }
        var fetchedCallback = null;
        var fetched = Module["getPreloadedPackage"] ? Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;
        if (!fetched)
          fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
            if (fetchedCallback) {
              fetchedCallback(data);
              fetchedCallback = null;
            } else {
              fetched = data;
            }
          });
        function runWithFS() {
          function assert2(check, msg) {
            if (!check)
              throw msg + new Error().stack;
          }
          Module["FS_createPath"]("/", "libraries", true, true);
          function DataRequest(start, end, audio) {
            this.start = start;
            this.end = end;
            this.audio = audio;
          }
          DataRequest.prototype = {
            requests: {},
            open: function(mode, name) {
              this.name = name;
              this.requests[name] = this;
              Module["addRunDependency"]("fp " + this.name);
            },
            send: function() {
            },
            onload: function() {
              var byteArray = this.byteArray.subarray(this.start, this.end);
              this.finish(byteArray);
            },
            finish: function(byteArray) {
              var that = this;
              Module["FS_createDataFile"](this.name, null, byteArray, true, true, true);
              Module["removeRunDependency"]("fp " + that.name);
              this.requests[this.name] = null;
            }
          };
          var files = metadata["files"];
          for (var i = 0; i < files.length; ++i) {
            new DataRequest(files[i]["start"], files[i]["end"], files[i]["audio"]).open("GET", files[i]["filename"]);
          }
          function processPackageData(arrayBuffer) {
            Module.finishedDataFileDownloads++;
            assert2(arrayBuffer, "Loading data file failed.");
            assert2(arrayBuffer instanceof ArrayBuffer, "bad input to processPackageData");
            var byteArray = new Uint8Array(arrayBuffer);
            DataRequest.prototype.byteArray = byteArray;
            var files2 = metadata["files"];
            for (var i2 = 0; i2 < files2.length; ++i2) {
              DataRequest.prototype.requests[files2[i2].filename].onload();
            }
            Module["removeRunDependency"]("datafile_../../lib/libfaust-wasm.data");
          }
          Module["addRunDependency"]("datafile_../../lib/libfaust-wasm.data");
          if (!Module.preloadResults)
            Module.preloadResults = {};
          Module.preloadResults[PACKAGE_NAME] = { fromCache: false };
          if (fetched) {
            processPackageData(fetched);
            fetched = null;
          } else {
            fetchedCallback = processPackageData;
          }
        }
        if (Module["calledRun"]) {
          runWithFS();
        } else {
          if (!Module["preRun"])
            Module["preRun"] = [];
          Module["preRun"].push(runWithFS);
        }
      };
      loadPackage({
        files: [
          { filename: "/libraries/hoa.lib", start: 0, end: 13105, audio: 0 },
          {
            filename: "/libraries/compressors.lib",
            start: 13105,
            end: 58859,
            audio: 0
          },
          {
            filename: "/libraries/basics.lib",
            start: 58859,
            end: 110385,
            audio: 0
          },
          {
            filename: "/libraries/dx7.lib",
            start: 110385,
            end: 179488,
            audio: 0
          },
          {
            filename: "/libraries/analyzers.lib",
            start: 179488,
            end: 212357,
            audio: 0
          },
          {
            filename: "/libraries/spats.lib",
            start: 212357,
            end: 217531,
            audio: 0
          },
          {
            filename: "/libraries/envelopes.lib",
            start: 217531,
            end: 228127,
            audio: 0
          },
          {
            filename: "/libraries/oscillators.lib",
            start: 228127,
            end: 275738,
            audio: 0
          },
          {
            filename: "/libraries/mi.lib",
            start: 275738,
            end: 293026,
            audio: 0
          },
          {
            filename: "/libraries/misceffects.lib",
            start: 293026,
            end: 314755,
            audio: 0
          },
          {
            filename: "/libraries/version.lib",
            start: 314755,
            end: 315662,
            audio: 0
          },
          {
            filename: "/libraries/webaudio.lib",
            start: 315662,
            end: 327785,
            audio: 0
          },
          {
            filename: "/libraries/math.lib",
            start: 327785,
            end: 349263,
            audio: 0
          },
          {
            filename: "/libraries/stdfaust.lib",
            start: 349263,
            end: 350533,
            audio: 0
          },
          {
            filename: "/libraries/filter.lib",
            start: 350533,
            end: 415919,
            audio: 0
          },
          {
            filename: "/libraries/delays.lib",
            start: 415919,
            end: 430403,
            audio: 0
          },
          {
            filename: "/libraries/routes.lib",
            start: 430403,
            end: 437029,
            audio: 0
          },
          {
            filename: "/libraries/soundfiles.lib",
            start: 437029,
            end: 446390,
            audio: 0
          },
          {
            filename: "/libraries/tonestacks.lib",
            start: 446390,
            end: 458744,
            audio: 0
          },
          {
            filename: "/libraries/aanl.lib",
            start: 458744,
            end: 484841,
            audio: 0
          },
          {
            filename: "/libraries/wdmodels.lib",
            start: 484841,
            end: 574662,
            audio: 0
          },
          {
            filename: "/libraries/all.lib",
            start: 574662,
            end: 575678,
            audio: 0
          },
          {
            filename: "/libraries/music.lib",
            start: 575678,
            end: 594112,
            audio: 0
          },
          {
            filename: "/libraries/tubes.lib",
            start: 594112,
            end: 943901,
            audio: 0
          },
          {
            filename: "/libraries/effect.lib",
            start: 943901,
            end: 1012931,
            audio: 0
          },
          {
            filename: "/libraries/vaeffects.lib",
            start: 1012931,
            end: 1048800,
            audio: 0
          },
          {
            filename: "/libraries/maxmsp.lib",
            start: 1048800,
            end: 1056659,
            audio: 0
          },
          {
            filename: "/libraries/platform.lib",
            start: 1056659,
            end: 1059739,
            audio: 0
          },
          {
            filename: "/libraries/synths.lib",
            start: 1059739,
            end: 1070990,
            audio: 0
          },
          {
            filename: "/libraries/sf.lib",
            start: 1070990,
            end: 1072056,
            audio: 0
          },
          {
            filename: "/libraries/fds.lib",
            start: 1072056,
            end: 1092602,
            audio: 0
          },
          {
            filename: "/libraries/reducemaps.lib",
            start: 1092602,
            end: 1097438,
            audio: 0
          },
          {
            filename: "/libraries/phaflangers.lib",
            start: 1097438,
            end: 1107359,
            audio: 0
          },
          {
            filename: "/libraries/filters.lib",
            start: 1107359,
            end: 1212987,
            audio: 0
          },
          {
            filename: "/libraries/signals.lib",
            start: 1212987,
            end: 1224932,
            audio: 0
          },
          {
            filename: "/libraries/instruments.lib",
            start: 1224932,
            end: 1234327,
            audio: 0
          },
          {
            filename: "/libraries/quantizers.lib",
            start: 1234327,
            end: 1244180,
            audio: 0
          },
          {
            filename: "/libraries/noises.lib",
            start: 1244180,
            end: 1258842,
            audio: 0
          },
          {
            filename: "/libraries/oscillator.lib",
            start: 1258842,
            end: 1278693,
            audio: 0
          },
          {
            filename: "/libraries/interpolators.lib",
            start: 1278693,
            end: 1301737,
            audio: 0
          },
          {
            filename: "/libraries/demos.lib",
            start: 1301737,
            end: 1364872,
            audio: 0
          },
          {
            filename: "/libraries/reverbs.lib",
            start: 1364872,
            end: 1402697,
            audio: 0
          },
          {
            filename: "/libraries/physmodels.lib",
            start: 1402697,
            end: 1573680,
            audio: 0
          },
          {
            filename: "/libraries/maths.lib",
            start: 1573680,
            end: 1595081,
            audio: 0
          }
        ],
        remote_package_size: 1595081,
        package_uuid: "04ea3dc2-3649-4af3-b126-173b06afc41a"
      });
    })();
    var moduleOverrides = {};
    var key;
    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }
    var thisProgram = "./this.program";
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    if (Module["ENVIRONMENT"]) {
      throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
    }
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readBinary;
    var nodeFS;
    var nodePath;
    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = require("path").dirname(scriptDirectory) + "/";
      } else {
        scriptDirectory = __dirname + "/";
      }
      read_ = function shell_read(filename, binary) {
        if (!nodeFS)
          nodeFS = require("fs");
        if (!nodePath)
          nodePath = require("path");
        filename = nodePath["normalize"](filename);
        return nodeFS["readFileSync"](filename, binary ? null : "utf8");
      };
      readBinary = function readBinary2(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        assert(ret.buffer);
        return ret;
      };
      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\\\/g, "/");
      }
      process["argv"].slice(2);
      process["on"]("uncaughtException", function(ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", abort);
      Module["inspect"] = function() {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          return read(f);
        };
      }
      readBinary = function readBinary2(f) {
        var data;
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };
      if (typeof scriptArgs != "undefined") {
        scriptArgs;
      }
      if (typeof print !== "undefined") {
        if (typeof console === "undefined")
          console = {};
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }
      {
        read_ = function shell_read(url) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function readBinary2(url) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
      }
    } else {
      throw new Error("environment detection error");
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }
    moduleOverrides = null;
    if (Module["arguments"])
      Module["arguments"];
    if (!Object.getOwnPropertyDescriptor(Module, "arguments"))
      Object.defineProperty(Module, "arguments", {
        configurable: true,
        get: function() {
          abort("Module.arguments has been replaced with plain arguments_");
        }
      });
    if (Module["thisProgram"])
      thisProgram = Module["thisProgram"];
    if (!Object.getOwnPropertyDescriptor(Module, "thisProgram"))
      Object.defineProperty(Module, "thisProgram", {
        configurable: true,
        get: function() {
          abort("Module.thisProgram has been replaced with plain thisProgram");
        }
      });
    if (Module["quit"])
      Module["quit"];
    if (!Object.getOwnPropertyDescriptor(Module, "quit"))
      Object.defineProperty(Module, "quit", {
        configurable: true,
        get: function() {
          abort("Module.quit has been replaced with plain quit_");
        }
      });
    assert(typeof Module["memoryInitializerPrefixURL"] === "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["pthreadMainPrefixURL"] === "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["cdInitializerPrefixURL"] === "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["filePackagePrefixURL"] === "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
    assert(typeof Module["read"] === "undefined", "Module.read option was removed (modify read_ in JS)");
    assert(typeof Module["readAsync"] === "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
    assert(typeof Module["readBinary"] === "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
    assert(typeof Module["setWindowTitle"] === "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
    assert(typeof Module["TOTAL_MEMORY"] === "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
    if (!Object.getOwnPropertyDescriptor(Module, "read"))
      Object.defineProperty(Module, "read", {
        configurable: true,
        get: function() {
          abort("Module.read has been replaced with plain read_");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "readAsync"))
      Object.defineProperty(Module, "readAsync", {
        configurable: true,
        get: function() {
          abort("Module.readAsync has been replaced with plain readAsync");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "readBinary"))
      Object.defineProperty(Module, "readBinary", {
        configurable: true,
        get: function() {
          abort("Module.readBinary has been replaced with plain readBinary");
        }
      });
    var stackSave;
    var stackRestore;
    var stackAlloc;
    stackSave = stackRestore = stackAlloc = function() {
      abort("cannot use the stack before compiled code is ready to run, and has provided stack access");
    };
    function dynamicAlloc(size) {
      assert(DYNAMICTOP_PTR);
      var ret = HEAP32[DYNAMICTOP_PTR >> 2];
      var end = ret + size + 15 & -16;
      assert(end <= HEAP8.length, "failure to dynamicAlloc - memory growth etc. is not supported there, call malloc/sbrk directly");
      HEAP32[DYNAMICTOP_PTR >> 2] = end;
      return ret;
    }
    function getNativeTypeSize(type) {
      switch (type) {
        case "i1":
        case "i8":
          return 1;
        case "i16":
          return 2;
        case "i32":
          return 4;
        case "i64":
          return 8;
        case "float":
          return 4;
        case "double":
          return 8;
        default: {
          if (type[type.length - 1] === "*") {
            return 4;
          } else if (type[0] === "i") {
            var bits = Number(type.substr(1));
            assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
            return bits / 8;
          } else {
            return 0;
          }
        }
      }
    }
    function warnOnce(text) {
      if (!warnOnce.shown)
        warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    }
    var wasmBinary;
    if (Module["wasmBinary"])
      wasmBinary = Module["wasmBinary"];
    if (!Object.getOwnPropertyDescriptor(Module, "wasmBinary"))
      Object.defineProperty(Module, "wasmBinary", {
        configurable: true,
        get: function() {
          abort("Module.wasmBinary has been replaced with plain wasmBinary");
        }
      });
    if (Module["noExitRuntime"])
      Module["noExitRuntime"];
    if (!Object.getOwnPropertyDescriptor(Module, "noExitRuntime"))
      Object.defineProperty(Module, "noExitRuntime", {
        configurable: true,
        get: function() {
          abort("Module.noExitRuntime has been replaced with plain noExitRuntime");
        }
      });
    if (typeof WebAssembly !== "object") {
      abort("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");
    }
    function setValue(ptr, value, type, noSafe) {
      type = type || "i8";
      if (type.charAt(type.length - 1) === "*")
        type = "i32";
      switch (type) {
        case "i1":
          HEAP8[ptr >> 0] = value;
          break;
        case "i8":
          HEAP8[ptr >> 0] = value;
          break;
        case "i16":
          HEAP16[ptr >> 1] = value;
          break;
        case "i32":
          HEAP32[ptr >> 2] = value;
          break;
        case "i64":
          tempI64 = [
            value >>> 0,
            (tempDouble = value, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
          ], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
          break;
        case "float":
          HEAPF32[ptr >> 2] = value;
          break;
        case "double":
          HEAPF64[ptr >> 3] = value;
          break;
        default:
          abort("invalid type for setValue: " + type);
      }
    }
    var wasmMemory;
    var wasmTable = new WebAssembly.Table({
      initial: 2176,
      maximum: 2176 + 0,
      element: "anyfunc"
    });
    var ABORT = false;
    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }
    function getCFunc(ident) {
      var func = Module["_" + ident];
      assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
      return func;
    }
    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = {
        string: function(str) {
          var ret2 = 0;
          if (str !== null && str !== void 0 && str !== 0) {
            var len = (str.length << 2) + 1;
            ret2 = stackAlloc(len);
            stringToUTF8(str, ret2, len);
          }
          return ret2;
        },
        array: function(arr) {
          var ret2 = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret2);
          return ret2;
        }
      };
      function convertReturnValue(ret2) {
        if (returnType === "string")
          return UTF8ToString(ret2);
        if (returnType === "boolean")
          return Boolean(ret2);
        return ret2;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      assert(returnType !== "array", 'Return type should not be "array".');
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0)
              stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      ret = convertReturnValue(ret);
      if (stack !== 0)
        stackRestore(stack);
      return ret;
    }
    function cwrap(ident, returnType, argTypes, opts) {
      return function() {
        return ccall(ident, returnType, argTypes, arguments);
      };
    }
    var ALLOC_STACK = 1;
    var ALLOC_NONE = 3;
    function allocate(slab, types, allocator, ptr) {
      var zeroinit, size;
      if (typeof slab === "number") {
        zeroinit = true;
        size = slab;
      } else {
        zeroinit = false;
        size = slab.length;
      }
      var singleType = typeof types === "string" ? types : null;
      var ret;
      if (allocator == ALLOC_NONE) {
        ret = ptr;
      } else {
        ret = [_malloc, stackAlloc, dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length));
      }
      if (zeroinit) {
        var stop;
        ptr = ret;
        assert((ret & 3) == 0);
        stop = ret + (size & ~3);
        for (; ptr < stop; ptr += 4) {
          HEAP32[ptr >> 2] = 0;
        }
        stop = ret + size;
        while (ptr < stop) {
          HEAP8[ptr++ >> 0] = 0;
        }
        return ret;
      }
      if (singleType === "i8") {
        if (slab.subarray || slab.slice) {
          HEAPU8.set(slab, ret);
        } else {
          HEAPU8.set(new Uint8Array(slab), ret);
        }
        return ret;
      }
      var i = 0, type, typeSize, previousType;
      while (i < size) {
        var curr = slab[i];
        type = singleType || types[i];
        if (type === 0) {
          i++;
          continue;
        }
        assert(type, "Must know what type to store in allocate!");
        if (type == "i64")
          type = "i32";
        setValue(ret + i, curr, type);
        if (previousType !== type) {
          typeSize = getNativeTypeSize(type);
          previousType = type;
        }
        i += typeSize;
      }
      return ret;
    }
    function getMemory(size) {
      if (!runtimeInitialized)
        return dynamicAlloc(size);
      return _malloc(size);
    }
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (u8Array[endPtr] && !(endPtr >= endIdx))
        ++endPtr;
      if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
      } else {
        var str = "";
        while (idx < endPtr) {
          var u0 = u8Array[idx++];
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }
          var u1 = u8Array[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }
          var u2 = u8Array[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            if ((u0 & 248) != 240)
              warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!");
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63;
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }
    function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
      if (!(maxBytesToWrite > 0))
        return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx)
            break;
          outU8Array[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx)
            break;
          outU8Array[outIdx++] = 192 | u >> 6;
          outU8Array[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx)
            break;
          outU8Array[outIdx++] = 224 | u >> 12;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx)
            break;
          if (u >= 2097152)
            warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
          outU8Array[outIdx++] = 240 | u >> 18;
          outU8Array[outIdx++] = 128 | u >> 12 & 63;
          outU8Array[outIdx++] = 128 | u >> 6 & 63;
          outU8Array[outIdx++] = 128 | u & 63;
        }
      }
      outU8Array[outIdx] = 0;
      return outIdx - startIdx;
    }
    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    }
    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343)
          u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127)
          ++len;
        else if (u <= 2047)
          len += 2;
        else if (u <= 65535)
          len += 3;
        else
          len += 4;
      }
      return len;
    }
    var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : void 0;
    function UTF16ToString(ptr) {
      assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
      var endPtr = ptr;
      var idx = endPtr >> 1;
      while (HEAP16[idx])
        ++idx;
      endPtr = idx << 1;
      if (endPtr - ptr > 32 && UTF16Decoder) {
        return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
      } else {
        var i = 0;
        var str = "";
        while (1) {
          var codeUnit = HEAP16[ptr + i * 2 >> 1];
          if (codeUnit == 0)
            return str;
          ++i;
          str += String.fromCharCode(codeUnit);
        }
      }
    }
    function stringToUTF16(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
      assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      if (maxBytesToWrite === void 0) {
        maxBytesToWrite = 2147483647;
      }
      if (maxBytesToWrite < 2)
        return 0;
      maxBytesToWrite -= 2;
      var startPtr = outPtr;
      var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2;
      }
      HEAP16[outPtr >> 1] = 0;
      return outPtr - startPtr;
    }
    function lengthBytesUTF16(str) {
      return str.length * 2;
    }
    function UTF32ToString(ptr) {
      assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
      var i = 0;
      var str = "";
      while (1) {
        var utf32 = HEAP32[ptr + i * 4 >> 2];
        if (utf32 == 0)
          return str;
        ++i;
        if (utf32 >= 65536) {
          var ch = utf32 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        } else {
          str += String.fromCharCode(utf32);
        }
      }
    }
    function stringToUTF32(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
      assert(typeof maxBytesToWrite == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
      if (maxBytesToWrite === void 0) {
        maxBytesToWrite = 2147483647;
      }
      if (maxBytesToWrite < 4)
        return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
        }
        HEAP32[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr)
          break;
      }
      HEAP32[outPtr >> 2] = 0;
      return outPtr - startPtr;
    }
    function lengthBytesUTF32(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343)
          ++i;
        len += 4;
      }
      return len;
    }
    function allocateUTF8(str) {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret)
        stringToUTF8Array(str, HEAP8, ret, size);
      return ret;
    }
    function writeArrayToMemory(array, buffer2) {
      assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
      HEAP8.set(array, buffer2);
    }
    function writeAsciiToMemory(str, buffer2, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        assert(str.charCodeAt(i) === str.charCodeAt(i) & 255);
        HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull)
        HEAP8[buffer2 >> 0] = 0;
    }
    var WASM_PAGE_SIZE = 65536;
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }
      return x;
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }
    var STACK_BASE = 7643408, STACK_MAX = 2400528, DYNAMIC_BASE = 7643408, DYNAMICTOP_PTR = 2400368;
    assert(STACK_BASE % 16 === 0, "stack must start aligned");
    assert(DYNAMIC_BASE % 16 === 0, "heap must start aligned");
    var TOTAL_STACK = 5242880;
    if (Module["TOTAL_STACK"])
      assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");
    var INITIAL_INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    if (!Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY"))
      Object.defineProperty(Module, "INITIAL_MEMORY", {
        configurable: true,
        get: function() {
          abort("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY");
        }
      });
    assert(INITIAL_INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");
    assert(typeof Int32Array !== "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray !== void 0 && Int32Array.prototype.set !== void 0, "JS engine does not provide full typed array support");
    if (Module["wasmMemory"]) {
      wasmMemory = Module["wasmMemory"];
    } else {
      wasmMemory = new WebAssembly.Memory({
        initial: INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
      });
    }
    if (wasmMemory) {
      buffer = wasmMemory.buffer;
    }
    INITIAL_INITIAL_MEMORY = buffer.byteLength;
    assert(INITIAL_INITIAL_MEMORY % WASM_PAGE_SIZE === 0);
    updateGlobalBufferAndViews(buffer);
    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
    function writeStackCookie() {
      assert((STACK_MAX & 3) == 0);
      HEAPU32[(STACK_MAX >> 2) + 1] = 34821223;
      HEAPU32[(STACK_MAX >> 2) + 2] = 2310721022;
      HEAP32[0] = 1668509029;
    }
    function checkStackCookie() {
      var cookie1 = HEAPU32[(STACK_MAX >> 2) + 1];
      var cookie2 = HEAPU32[(STACK_MAX >> 2) + 2];
      if (cookie1 != 34821223 || cookie2 != 2310721022) {
        abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " " + cookie1.toString(16));
      }
      if (HEAP32[0] !== 1668509029)
        abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
    }
    function abortStackOverflow(allocSize) {
      abort("Stack overflow! Attempted to allocate " + allocSize + " bytes on the stack, but stack has only " + (STACK_MAX - stackSave() + allocSize) + " bytes available!");
    }
    (function() {
      var h16 = new Int16Array(1);
      var h8 = new Int8Array(h16.buffer);
      h16[0] = 25459;
      if (h8[0] !== 115 || h8[1] !== 99)
        throw "Runtime error: expected the system to be little-endian!";
    })();
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback2 = callbacks.shift();
        if (typeof callback2 == "function") {
          callback2();
          continue;
        }
        var func = callback2.func;
        if (typeof func === "number") {
          if (callback2.arg === void 0) {
            Module["dynCall_v"](func);
          } else {
            Module["dynCall_vi"](func, callback2.arg);
          }
        } else {
          func(callback2.arg === void 0 ? null : callback2.arg);
        }
      }
    }
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
          Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      checkStackCookie();
      assert(!runtimeInitialized);
      runtimeInitialized = true;
      SOCKFS.root = FS.mount(SOCKFS, {}, null);
      if (!Module["noFSInit"] && !FS.init.initialized)
        FS.init();
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      checkStackCookie();
      FS.ignorePermissions = false;
      callRuntimeCallbacks(__ATMAIN__);
    }
    function postRun() {
      checkStackCookie();
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
          Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
    var Math_abs = Math.abs;
    var Math_ceil = Math.ceil;
    var Math_floor = Math.floor;
    var Math_min = Math.min;
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    var runDependencyTracking = {};
    function getUniqueRunDependency(id) {
      var orig = id;
      while (1) {
        if (!runDependencyTracking[id])
          return id;
        id = orig + Math.random();
      }
    }
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (id) {
        assert(!runDependencyTracking[id]);
        runDependencyTracking[id] = 1;
        if (runDependencyWatcher === null && typeof setInterval !== "undefined") {
          runDependencyWatcher = setInterval(function() {
            if (ABORT) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
              return;
            }
            var shown = false;
            for (var dep in runDependencyTracking) {
              if (!shown) {
                shown = true;
                err("still waiting on run dependencies:");
              }
              err("dependency: " + dep);
            }
            if (shown) {
              err("(end of list)");
            }
          }, 1e4);
        }
      } else {
        err("warning: run dependency added without ID");
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (id) {
        assert(runDependencyTracking[id]);
        delete runDependencyTracking[id];
      } else {
        err("warning: run dependency removed without ID");
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback2 = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback2();
        }
      }
    }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
      what += "";
      out(what);
      err(what);
      ABORT = true;
      var output = "abort(" + what + ") at " + stackTrace();
      what = output;
      throw new WebAssembly.RuntimeError(what);
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
    }
    var wasmBinaryFile = "libfaust-wasm.wasm";
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }
    function getBinary() {
      try {
        if (wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(wasmBinaryFile);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (err2) {
        abort(err2);
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
        return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
          if (!response["ok"]) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }
          return response["arrayBuffer"]();
        }).catch(function() {
          return getBinary();
        });
      }
      return new Promise(function(resolve, reject) {
        resolve(getBinary());
      });
    }
    function createWasm() {
      var info = { env: asmLibraryArg, wasi_snapshot_preview1: asmLibraryArg };
      function receiveInstance(instance, module2) {
        var exports22 = instance.exports;
        Module["asm"] = exports22;
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      var trueModule = Module;
      function receiveInstantiatedSource(output) {
        assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
        trueModule = null;
        receiveInstance(output["instance"]);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(receiver, function(reason) {
          err("failed to asynchronously prepare wasm: " + reason);
          abort(reason);
        });
      }
      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
          fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiatedSource, function(reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              instantiateArrayBuffer(receiveInstantiatedSource);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiatedSource);
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports2 = Module["instantiateWasm"](info, receiveInstance);
          return exports2;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          return false;
        }
      }
      instantiateAsync();
      return {};
    }
    var tempDouble;
    var tempI64;
    var ASM_CONSTS = {
      299792: function($0) {
        var dsp_code = "";
        try {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET", Module.UTF8ToString($0), false);
          xmlhttp.send();
          if (xmlhttp.status == 200) {
            dsp_code = xmlhttp.responseText;
          }
        } catch (e) {
          console.log(e);
        }
        return allocate(intArrayFromString(dsp_code), "i8", ALLOC_STACK);
      },
      420260: function($0) {
        faust_module.faust.wasm_instance[$0] = null;
      },
      420588: function($0) {
        return faust_module._malloc($0);
      },
      420625: function($0) {
        faust_module._free($0);
      },
      420653: function($0, $1) {
        return faust_module.faust.wasm_instance[$0].exports.getNumInputs($1);
      },
      420730: function($0, $1) {
        return faust_module.faust.wasm_instance[$0].exports.getNumOutputs($1);
      },
      420805: function($0, $1) {
        return faust_module.faust.wasm_instance[$0].exports.getSampleRate($1);
      },
      420880: function($0, $1, $2) {
        faust_module.faust.wasm_instance[$0].exports.init($1, $2);
      },
      420947: function($0, $1, $2) {
        faust_module.faust.wasm_instance[$0].exports.instanceInit($1, $2);
      },
      421018: function($0, $1, $2) {
        faust_module.faust.wasm_instance[$0].exports.instanceConstants($1, $2);
      },
      421094: function($0, $1) {
        faust_module.faust.wasm_instance[$0].exports.instanceResetUserInterface($1);
      },
      421175: function($0, $1) {
        faust_module.faust.wasm_instance[$0].exports.instanceClear($1);
      },
      421243: function($0, $1, $2, $3, $4) {
        faust_module.faust.wasm_instance[$0].exports.compute($1, $2, $3, $4);
      }
    };
    function _emscripten_asm_const_iii(code, sigPtr, argbuf) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }
    function connectMemory() {
      faust_module.faust = faust_module.faust || {};
      faust_module.faust.memory = faust_module.faust.memory || wasmMemory;
    }
    __ATINIT__.push({
      func: function() {
        ___wasm_call_ctors();
      }
    });
    function demangle(func) {
      warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
      return func;
    }
    function demangleAll(text) {
      var regex = /\\b_Z[\\w\\d_]+/g;
      return text.replace(regex, function(x) {
        var y = demangle(x);
        return x === y ? x : y + " [" + x + "]";
      });
    }
    function jsStackTrace() {
      var err2 = new Error();
      if (!err2.stack) {
        try {
          throw new Error();
        } catch (e) {
          err2 = e;
        }
        if (!err2.stack) {
          return "(no stack trace available)";
        }
      }
      return err2.stack.toString();
    }
    function stackTrace() {
      var js = jsStackTrace();
      if (Module["extraStackTrace"])
        js += "\\n" + Module["extraStackTrace"]();
      return demangleAll(js);
    }
    function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }
    function ___cxa_throw(ptr, type, destructor) {
      throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
    }
    function ___handle_stack_overflow() {
      abort("stack overflow");
    }
    function ___setErrNo(value) {
      if (Module["___errno_location"])
        HEAP32[Module["___errno_location"]() >> 2] = value;
      else
        err("failed to set errno from JS");
      return value;
    }
    function ___map_file(pathname, size) {
      ___setErrNo(63);
      return -1;
    }
    var PATH = {
      splitPath: function(filename) {
        var splitPathRe = /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
      normalizeArray: function(parts, allowAboveRoot) {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === ".") {
            parts.splice(i, 1);
          } else if (last === "..") {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift("..");
          }
        }
        return parts;
      },
      normalize: function(path) {
        var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(path.split("/").filter(function(p) {
          return !!p;
        }), !isAbsolute).join("/");
        if (!path && !isAbsolute) {
          path = ".";
        }
        if (path && trailingSlash) {
          path += "/";
        }
        return (isAbsolute ? "/" : "") + path;
      },
      dirname: function(path) {
        var result = PATH.splitPath(path), root = result[0], dir = result[1];
        if (!root && !dir) {
          return ".";
        }
        if (dir) {
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
      basename: function(path) {
        if (path === "/")
          return "/";
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1)
          return path;
        return path.substr(lastSlash + 1);
      },
      extname: function(path) {
        return PATH.splitPath(path)[3];
      },
      join: function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join("/"));
      },
      join2: function(l, r) {
        return PATH.normalize(l + "/" + r);
      }
    };
    var PATH_FS = {
      resolve: function() {
        var resolvedPath = "", resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = i >= 0 ? arguments[i] : FS.cwd();
          if (typeof path !== "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else if (!path) {
            return "";
          }
          resolvedPath = path + "/" + resolvedPath;
          resolvedAbsolute = path.charAt(0) === "/";
        }
        resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join("/");
        return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
      },
      relative: function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== "")
              break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== "")
              break;
          }
          if (start > end)
            return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split("/"));
        var toParts = trim(to.split("/"));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push("..");
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join("/");
      }
    };
    var TTY = {
      ttys: [],
      init: function() {
      },
      shutdown: function() {
      },
      register: function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
      stream_ops: {
        open: function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
        close: function(stream) {
          stream.tty.ops.flush(stream.tty);
        },
        flush: function(stream) {
          stream.tty.ops.flush(stream.tty);
        },
        read: function(stream, buffer2, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === void 0 && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === void 0)
              break;
            bytesRead++;
            buffer2[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },
        write: function(stream, buffer2, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer2[offset + i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }
      },
      default_tty_ops: {
        get_char: function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              var BUFSIZE = 256;
              var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
              var bytesRead = 0;
              try {
                bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
              } catch (e) {
                if (e.toString().indexOf("EOF") != -1)
                  bytesRead = 0;
                else
                  throw e;
              }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString("utf-8");
              } else {
                result = null;
              }
            } else if (typeof window != "undefined" && typeof window.prompt == "function") {
              result = window.prompt("Input: ");
              if (result !== null) {
                result += "\\n";
              }
            } else if (typeof readline == "function") {
              result = readline();
              if (result !== null) {
                result += "\\n";
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },
        put_char: function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0)
              tty.output.push(val);
          }
        },
        flush: function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }
      },
      default_tty1_ops: {
        put_char: function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0)
              tty.output.push(val);
          }
        },
        flush: function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }
      }
    };
    var MEMFS = {
      ops_table: null,
      mount: function(mount) {
        return MEMFS.createNode(null, "/", 16384 | 511, 0);
      },
      createNode: function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: { llseek: MEMFS.stream_ops.llseek }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0;
          node.contents = null;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },
      getFileDataAsRegularArray: function(node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i)
            arr.push(node.contents[i]);
          return arr;
        }
        return node.contents;
      },
      getFileDataAsTypedArray: function(node) {
        if (!node.contents)
          return new Uint8Array(0);
        if (node.contents.subarray)
          return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents);
      },
      expandFileStorage: function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity)
          return;
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) | 0);
        if (prevCapacity != 0)
          newCapacity = Math.max(newCapacity, 256);
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        if (node.usedBytes > 0)
          node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
        return;
      },
      resizeFileStorage: function(node, newSize) {
        if (node.usedBytes == newSize)
          return;
        if (newSize == 0) {
          node.contents = null;
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize);
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
          }
          node.usedBytes = newSize;
          return;
        }
        if (!node.contents)
          node.contents = [];
        if (node.contents.length > newSize)
          node.contents.length = newSize;
        else
          while (node.contents.length < newSize)
            node.contents.push(0);
        node.usedBytes = newSize;
      },
      node_ops: {
        getattr: function(node) {
          var attr = {};
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
        setattr: function(node, attr) {
          if (attr.mode !== void 0) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== void 0) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== void 0) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
        lookup: function(parent, name) {
          throw FS.genericErrors[44];
        },
        mknod: function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
        rename: function(old_node, new_dir, new_name) {
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },
        unlink: function(parent, name) {
          delete parent.contents[name];
        },
        rmdir: function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        },
        readdir: function(node) {
          var entries = [".", ".."];
          for (var key2 in node.contents) {
            if (!node.contents.hasOwnProperty(key2)) {
              continue;
            }
            entries.push(key2);
          }
          return entries;
        },
        symlink: function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        },
        readlink: function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }
      },
      stream_ops: {
        read: function(stream, buffer2, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes)
            return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) {
            buffer2.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++)
              buffer2[offset + i] = contents[position + i];
          }
          return size;
        },
        write: function(stream, buffer2, offset, length, position, canOwn) {
          assert(!(buffer2 instanceof ArrayBuffer));
          if (buffer2.buffer === HEAP8.buffer) {
            if (canOwn) {
              warnOnce("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)");
            }
            canOwn = false;
          }
          if (!length)
            return 0;
          var node = stream.node;
          node.timestamp = Date.now();
          if (buffer2.subarray && (!node.contents || node.contents.subarray)) {
            if (canOwn) {
              assert(position === 0, "canOwn must imply no weird position inside the file");
              node.contents = buffer2.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              node.contents = buffer2.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              node.contents.set(buffer2.subarray(offset, offset + length), position);
              return length;
            }
          }
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer2.subarray)
            node.contents.set(buffer2.subarray(offset, offset + length), position);
          else {
            for (var i = 0; i < length; i++) {
              node.contents[position + i] = buffer2[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
        llseek: function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
        allocate: function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },
        mmap: function(stream, buffer2, offset, length, position, prot, flags) {
          assert(!(buffer2 instanceof ArrayBuffer));
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags & 2) && contents.buffer === buffer2.buffer) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            var fromHeap = buffer2.buffer == HEAP8.buffer;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            (fromHeap ? HEAP8 : buffer2).set(contents, ptr);
          }
          return { ptr, allocated };
        },
        msync: function(stream, buffer2, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            return 0;
          }
          MEMFS.stream_ops.write(stream, buffer2, 0, length, offset, false);
          return 0;
        }
      }
    };
    var ERRNO_MESSAGES = {
      0: "Success",
      1: "Arg list too long",
      2: "Permission denied",
      3: "Address already in use",
      4: "Address not available",
      5: "Address family not supported by protocol family",
      6: "No more processes",
      7: "Socket already connected",
      8: "Bad file number",
      9: "Trying to read unreadable message",
      10: "Mount device busy",
      11: "Operation canceled",
      12: "No children",
      13: "Connection aborted",
      14: "Connection refused",
      15: "Connection reset by peer",
      16: "File locking deadlock error",
      17: "Destination address required",
      18: "Math arg out of domain of func",
      19: "Quota exceeded",
      20: "File exists",
      21: "Bad address",
      22: "File too large",
      23: "Host is unreachable",
      24: "Identifier removed",
      25: "Illegal byte sequence",
      26: "Connection already in progress",
      27: "Interrupted system call",
      28: "Invalid argument",
      29: "I/O error",
      30: "Socket is already connected",
      31: "Is a directory",
      32: "Too many symbolic links",
      33: "Too many open files",
      34: "Too many links",
      35: "Message too long",
      36: "Multihop attempted",
      37: "File or path name too long",
      38: "Network interface is not configured",
      39: "Connection reset by network",
      40: "Network is unreachable",
      41: "Too many open files in system",
      42: "No buffer space available",
      43: "No such device",
      44: "No such file or directory",
      45: "Exec format error",
      46: "No record locks available",
      47: "The link has been severed",
      48: "Not enough core",
      49: "No message of desired type",
      50: "Protocol not available",
      51: "No space left on device",
      52: "Function not implemented",
      53: "Socket is not connected",
      54: "Not a directory",
      55: "Directory not empty",
      56: "State not recoverable",
      57: "Socket operation on non-socket",
      59: "Not a typewriter",
      60: "No such device or address",
      61: "Value too large for defined data type",
      62: "Previous owner died",
      63: "Not super-user",
      64: "Broken pipe",
      65: "Protocol error",
      66: "Unknown protocol",
      67: "Protocol wrong type for socket",
      68: "Math result not representable",
      69: "Read only file system",
      70: "Illegal seek",
      71: "No such process",
      72: "Stale file handle",
      73: "Connection timed out",
      74: "Text file busy",
      75: "Cross-device link",
      100: "Device not a stream",
      101: "Bad font file fmt",
      102: "Invalid slot",
      103: "Invalid request code",
      104: "No anode",
      105: "Block device required",
      106: "Channel number out of range",
      107: "Level 3 halted",
      108: "Level 3 reset",
      109: "Link number out of range",
      110: "Protocol driver not attached",
      111: "No CSI structure available",
      112: "Level 2 halted",
      113: "Invalid exchange",
      114: "Invalid request descriptor",
      115: "Exchange full",
      116: "No data (for no delay io)",
      117: "Timer expired",
      118: "Out of streams resources",
      119: "Machine is not on the network",
      120: "Package not installed",
      121: "The object is remote",
      122: "Advertise error",
      123: "Srmount error",
      124: "Communication error on send",
      125: "Cross mount point (not really error)",
      126: "Given log. name not unique",
      127: "f.d. invalid for this operation",
      128: "Remote address changed",
      129: "Can   access a needed shared lib",
      130: "Accessing a corrupted shared lib",
      131: ".lib section in a.out corrupted",
      132: "Attempting to link in too many libs",
      133: "Attempting to exec a shared library",
      135: "Streams pipe error",
      136: "Too many users",
      137: "Socket type not supported",
      138: "Not supported",
      139: "Protocol family not supported",
      140: "Can't send after socket shutdown",
      141: "Too many references",
      142: "Host is down",
      148: "No medium (in tape drive)",
      156: "Level 2 not synchronized"
    };
    var ERRNO_CODES = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135
    };
    var FS = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      trackingDelegate: {},
      tracking: { openFlags: { READ: 1, WRITE: 2 } },
      ErrnoError: null,
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      handleFSError: function(e) {
        if (!(e instanceof FS.ErrnoError))
          throw e + " : " + stackTrace();
        return ___setErrNo(e.errno);
      },
      lookupPath: function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
        if (!path)
          return { path: "", node: null };
        var defaults = { follow_mount: true, recurse_count: 0 };
        for (var key2 in defaults) {
          if (opts[key2] === void 0) {
            opts[key2] = defaults[key2];
          }
        }
        if (opts.recurse_count > 8) {
          throw new FS.ErrnoError(32);
        }
        var parts = PATH.normalizeArray(path.split("/").filter(function(p) {
          return !!p;
        }), false);
        var current = FS.root;
        var current_path = "/";
        for (var i = 0; i < parts.length; i++) {
          var islast = i === parts.length - 1;
          if (islast && opts.parent) {
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          if (FS.isMountpoint(current)) {
            if (!islast || islast && opts.follow_mount) {
              current = current.mounted.root;
            }
          }
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
              var lookup = FS.lookupPath(current_path, {
                recurse_count: opts.recurse_count
              });
              current = lookup.node;
              if (count++ > 40) {
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
        return { path: current_path, node: current };
      },
      getPath: function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path)
              return mount;
            return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
          }
          path = path ? node.name + "/" + path : node.name;
          node = node.parent;
        }
      },
      hashName: function(parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
        }
        return (parentid + hash >>> 0) % FS.nameTable.length;
      },
      hashAddNode: function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
      hashRemoveNode: function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
      lookupNode: function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        return FS.lookup(parent, name);
      },
      createNode: function(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node;
      },
      destroyNode: function(node) {
        FS.hashRemoveNode(node);
      },
      isRoot: function(node) {
        return node === node.parent;
      },
      isMountpoint: function(node) {
        return !!node.mounted;
      },
      isFile: function(mode) {
        return (mode & 61440) === 32768;
      },
      isDir: function(mode) {
        return (mode & 61440) === 16384;
      },
      isLink: function(mode) {
        return (mode & 61440) === 40960;
      },
      isChrdev: function(mode) {
        return (mode & 61440) === 8192;
      },
      isBlkdev: function(mode) {
        return (mode & 61440) === 24576;
      },
      isFIFO: function(mode) {
        return (mode & 61440) === 4096;
      },
      isSocket: function(mode) {
        return (mode & 49152) === 49152;
      },
      flagModes: {
        r: 0,
        rs: 1052672,
        "r+": 2,
        w: 577,
        wx: 705,
        xw: 705,
        "w+": 578,
        "wx+": 706,
        "xw+": 706,
        a: 1089,
        ax: 1217,
        xa: 1217,
        "a+": 1090,
        "ax+": 1218,
        "xa+": 1218
      },
      modeStringToFlags: function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === "undefined") {
          throw new Error("Unknown file open mode: " + str);
        }
        return flags;
      },
      flagsToPermissionString: function(flag) {
        var perms = ["r", "w", "rw"][flag & 3];
        if (flag & 512) {
          perms += "w";
        }
        return perms;
      },
      nodePermissions: function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        if (perms.indexOf("r") !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf("w") !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf("x") !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
      mayLookup: function(dir) {
        var errCode = FS.nodePermissions(dir, "x");
        if (errCode)
          return errCode;
        if (!dir.node_ops.lookup)
          return 2;
        return 0;
      },
      mayCreate: function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, "wx");
      },
      mayDelete: function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, "wx");
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
      mayOpen: function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
      MAX_OPEN_FDS: 4096,
      nextfd: function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
      getStream: function(fd) {
        return FS.streams[fd];
      },
      createStream: function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function() {
          };
          FS.FSStream.prototype = {
            object: {
              get: function() {
                return this.node;
              },
              set: function(val) {
                this.node = val;
              }
            },
            isRead: {
              get: function() {
                return (this.flags & 2097155) !== 1;
              }
            },
            isWrite: {
              get: function() {
                return (this.flags & 2097155) !== 0;
              }
            },
            isAppend: {
              get: function() {
                return this.flags & 1024;
              }
            }
          };
        }
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
      closeStream: function(fd) {
        FS.streams[fd] = null;
      },
      chrdev_stream_ops: {
        open: function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },
        llseek: function() {
          throw new FS.ErrnoError(70);
        }
      },
      major: function(dev) {
        return dev >> 8;
      },
      minor: function(dev) {
        return dev & 255;
      },
      makedev: function(ma, mi) {
        return ma << 8 | mi;
      },
      registerDevice: function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
      getDevice: function(dev) {
        return FS.devices[dev];
      },
      getMounts: function(mount) {
        var mounts = [];
        var check = [mount];
        while (check.length) {
          var m = check.pop();
          mounts.push(m);
          check.push.apply(check, m.mounts);
        }
        return mounts;
      },
      syncfs: function(populate, callback2) {
        if (typeof populate === "function") {
          callback2 = populate;
          populate = false;
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
          err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback2(errCode);
        }
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        }
        mounts.forEach(function(mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
      mount: function(type, opts, mountpoint) {
        if (typeof type === "string") {
          throw type;
        }
        var root = mountpoint === "/";
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
          mountpoint = lookup.path;
          node = lookup.node;
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          node.mounted = mount;
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
        return mountRoot;
      },
      unmount: function(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach(function(hash) {
          var current = FS.nameTable[hash];
          while (current) {
            var next = current.name_next;
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
            current = next;
          }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },
      lookup: function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
      mknod: function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === "." || name === "..") {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
      create: function(path, mode) {
        mode = mode !== void 0 ? mode : 438;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
      mkdir: function(path, mode) {
        mode = mode !== void 0 ? mode : 511;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
      mkdirTree: function(path, mode) {
        var dirs = path.split("/");
        var d = "";
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i])
            continue;
          d += "/" + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch (e) {
            if (e.errno != 20)
              throw e;
          }
        }
      },
      mkdev: function(path, mode, dev) {
        if (typeof dev === "undefined") {
          dev = mode;
          mode = 438;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
      symlink: function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
      rename: function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(10);
        }
        if (!old_dir || !new_dir)
          throw new FS.ErrnoError(44);
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(28);
        }
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== ".") {
          throw new FS.ErrnoError(55);
        }
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
        }
        if (old_node === new_node) {
          return;
        }
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
          throw new FS.ErrnoError(10);
        }
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, "w");
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate["willMovePath"]) {
            FS.trackingDelegate["willMovePath"](old_path, new_path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
        }
        FS.hashRemoveNode(old_node);
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate["onMovePath"])
            FS.trackingDelegate["onMovePath"](old_path, new_path);
        } catch (e) {
          err("FS.trackingDelegate['onMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
        }
      },
      rmdir: function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate["willDeletePath"]) {
            FS.trackingDelegate["willDeletePath"](path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate["onDeletePath"])
            FS.trackingDelegate["onDeletePath"](path);
        } catch (e) {
          err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
        }
      },
      readdir: function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },
      unlink: function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate["willDeletePath"]) {
            FS.trackingDelegate["willDeletePath"](path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate["onDeletePath"])
            FS.trackingDelegate["onDeletePath"](path);
        } catch (e) {
          err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
        }
      },
      readlink: function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },
      stat: function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },
      lstat: function(path) {
        return FS.stat(path, true);
      },
      chmod: function(path, mode, dontFollow) {
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: mode & 4095 | node.mode & ~4095,
          timestamp: Date.now()
        });
      },
      lchmod: function(path, mode) {
        FS.chmod(path, mode, true);
      },
      fchmod: function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },
      chown: function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, { timestamp: Date.now() });
      },
      lchown: function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
      fchown: function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },
      truncate: function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === "string") {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, "w");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
      },
      ftruncate: function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },
      utime: function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
      },
      open: function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === "undefined" ? 438 : mode;
        if (flags & 64) {
          mode = mode & 4095 | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === "object") {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
            node = lookup.node;
          } catch (e) {
          }
        }
        var created = false;
        if (flags & 64) {
          if (node) {
            if (flags & 128) {
              throw new FS.ErrnoError(20);
            }
          } else {
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        if (flags & 512) {
          FS.truncate(node, 0);
        }
        flags &= ~(128 | 512);
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module["logReadFiles"] && !(flags & 1)) {
          if (!FS.readFiles)
            FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate["onOpenFile"]) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate["onOpenFile"](path, trackingFlags);
          }
        } catch (e) {
          err("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message);
        }
        return stream;
      },
      close: function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents)
          stream.getdents = null;
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
      isClosed: function(stream) {
        return stream.fd === null;
      },
      llseek: function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
      read: function(stream, buffer2, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer2, offset, length, position);
        if (!seeking)
          stream.position += bytesRead;
        return bytesRead;
      },
      write: function(stream, buffer2, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.flags & 1024) {
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== "undefined";
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer2, offset, length, position, canOwn);
        if (!seeking)
          stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate["onWriteToFile"])
            FS.trackingDelegate["onWriteToFile"](stream.path);
        } catch (e) {
          err("FS.trackingDelegate['onWriteToFile']('" + stream.path + "') threw an exception: " + e.message);
        }
        return bytesWritten;
      },
      allocate: function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
      mmap: function(stream, buffer2, offset, length, position, prot, flags) {
        if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, buffer2, offset, length, position, prot, flags);
      },
      msync: function(stream, buffer2, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer2, offset, length, mmapFlags);
      },
      munmap: function(stream) {
        return 0;
      },
      ioctl: function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
      readFile: function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || "r";
        opts.encoding = opts.encoding || "binary";
        if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === "utf8") {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === "binary") {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
      writeFile: function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || "w";
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === "string") {
          var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
        } else {
          throw new Error("Unsupported data type");
        }
        FS.close(stream);
      },
      cwd: function() {
        return FS.currentPath;
      },
      chdir: function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, "x");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
      createDefaultDirectories: function() {
        FS.mkdir("/tmp");
        FS.mkdir("/home");
        FS.mkdir("/home/web_user");
      },
      createDefaultDevices: function() {
        FS.mkdir("/dev");
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() {
            return 0;
          },
          write: function(stream, buffer2, offset, length, pos) {
            return length;
          }
        });
        FS.mkdev("/dev/null", FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev("/dev/tty", FS.makedev(5, 0));
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var random_device;
        if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
          var randomBuffer = new Uint8Array(1);
          random_device = function() {
            crypto.getRandomValues(randomBuffer);
            return randomBuffer[0];
          };
        } else if (ENVIRONMENT_IS_NODE) {
          try {
            var crypto_module = require("crypto");
            random_device = function() {
              return crypto_module["randomBytes"](1)[0];
            };
          } catch (e) {
          }
        } else
          ;
        if (!random_device) {
          random_device = function() {
            abort("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
          };
        }
        FS.createDevice("/dev", "random", random_device);
        FS.createDevice("/dev", "urandom", random_device);
        FS.mkdir("/dev/shm");
        FS.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories: function() {
        FS.mkdir("/proc");
        FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd");
        FS.mount({
          mount: function() {
            var node = FS.createNode("/proc/self", "fd", 16384 | 511, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream)
                  throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: "fake" },
                  node_ops: {
                    readlink: function() {
                      return stream.path;
                    }
                  }
                };
                ret.parent = ret;
                return ret;
              }
            };
            return node;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams: function() {
        if (Module["stdin"]) {
          FS.createDevice("/dev", "stdin", Module["stdin"]);
        } else {
          FS.symlink("/dev/tty", "/dev/stdin");
        }
        if (Module["stdout"]) {
          FS.createDevice("/dev", "stdout", null, Module["stdout"]);
        } else {
          FS.symlink("/dev/tty", "/dev/stdout");
        }
        if (Module["stderr"]) {
          FS.createDevice("/dev", "stderr", null, Module["stderr"]);
        } else {
          FS.symlink("/dev/tty1", "/dev/stderr");
        }
        var stdin = FS.open("/dev/stdin", "r");
        var stdout = FS.open("/dev/stdout", "w");
        var stderr = FS.open("/dev/stderr", "w");
        assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
        assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
        assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")");
      },
      ensureErrnoError: function() {
        if (FS.ErrnoError)
          return;
        FS.ErrnoError = function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = function(errno2) {
            this.errno = errno2;
            for (var key2 in ERRNO_CODES) {
              if (ERRNO_CODES[key2] === errno2) {
                this.code = key2;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
          if (this.stack) {
            Object.defineProperty(this, "stack", {
              value: new Error().stack,
              writable: true
            });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = "<generic error, no stack>";
        });
      },
      staticInit: function() {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, "/");
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = { MEMFS };
      },
      init: function(input, output, error) {
        assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        FS.init.initialized = true;
        FS.ensureErrnoError();
        Module["stdin"] = input || Module["stdin"];
        Module["stdout"] = output || Module["stdout"];
        Module["stderr"] = error || Module["stderr"];
        FS.createStandardStreams();
      },
      quit: function() {
        FS.init.initialized = false;
        var fflush = Module["_fflush"];
        if (fflush)
          fflush(0);
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
      getMode: function(canRead, canWrite) {
        var mode = 0;
        if (canRead)
          mode |= 292 | 73;
        if (canWrite)
          mode |= 146;
        return mode;
      },
      joinPath: function(parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == "/")
          path = path.substr(1);
        return path;
      },
      absolutePath: function(relative, base) {
        return PATH_FS.resolve(base, relative);
      },
      standardizePath: function(path) {
        return PATH.normalize(path);
      },
      findObject: function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },
      analyzePath: function(path, dontResolveLastLink) {
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === "/";
        } catch (e) {
          ret.error = e.errno;
        }
        return ret;
      },
      createFolder: function(parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },
      createPath: function(parent, path, canRead, canWrite) {
        parent = typeof parent === "string" ? parent : FS.getPath(parent);
        var parts = path.split("/").reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part)
            continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
          }
          parent = current;
        }
        return current;
      },
      createFile: function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
      createDataFile: function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === "string") {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i)
              arr[i] = data.charCodeAt(i);
            data = arr;
          }
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, "w");
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },
      createDevice: function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major)
          FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer2, offset, length, pos) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === void 0 && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === void 0)
                break;
              bytesRead++;
              buffer2[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer2, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer2[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
      createLink: function(parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },
      forceLoadFile: function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
          return true;
        var success = true;
        if (typeof XMLHttpRequest !== "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          try {
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error("Cannot load without read() or XMLHttpRequest.");
        }
        if (!success)
          ___setErrNo(29);
        return success;
      },
      createLazyFile: function(parent, name, url, canRead, canWrite) {
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
          if (idx > this.length - 1 || idx < 0) {
            return void 0;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = idx / this.chunkSize | 0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          var xhr = new XMLHttpRequest();
          xhr.open("HEAD", url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
            throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
          var chunkSize = 1024 * 1024;
          if (!hasByteServing)
            chunkSize = datalength;
          var doXHR = function(from, to) {
            if (from > to)
              throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength - 1)
              throw new Error("only " + datalength + " bytes available! programmer error!");
            var xhr2 = new XMLHttpRequest();
            xhr2.open("GET", url, false);
            if (datalength !== chunkSize)
              xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
            if (typeof Uint8Array != "undefined")
              xhr2.responseType = "arraybuffer";
            if (xhr2.overrideMimeType) {
              xhr2.overrideMimeType("text/plain; charset=x-user-defined");
            }
            xhr2.send(null);
            if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304))
              throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
            if (xhr2.response !== void 0) {
              return new Uint8Array(xhr2.response || []);
            } else {
              return intArrayFromString(xhr2.responseText || "", true);
            }
          };
          var lazyArray2 = this;
          lazyArray2.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum + 1) * chunkSize - 1;
            end = Math.min(end, datalength - 1);
            if (typeof lazyArray2.chunks[chunkNum] === "undefined") {
              lazyArray2.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray2.chunks[chunkNum] === "undefined")
              throw new Error("doXHR failed!");
            return lazyArray2.chunks[chunkNum];
          });
          if (usesGzip || !datalength) {
            chunkSize = datalength = 1;
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== "undefined") {
          if (!ENVIRONMENT_IS_WORKER)
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        Object.defineProperties(node, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key2) {
          var fn = node.stream_ops[key2];
          stream_ops[key2] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(29);
            }
            return fn.apply(null, arguments);
          };
        });
        stream_ops.read = function stream_ops_read(stream, buffer2, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(29);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) {
            for (var i = 0; i < size; i++) {
              buffer2[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) {
              buffer2[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },
      createPreloadedFile: function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init();
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency("cp " + fullname);
        function processData(byteArray) {
          function finish(byteArray2) {
            if (preFinish)
              preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
            }
            if (onload)
              onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module["preloadPlugins"].forEach(function(plugin) {
            if (handled)
              return;
            if (plugin["canHandle"](fullname)) {
              plugin["handle"](byteArray, fullname, finish, function() {
                if (onerror)
                  onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled)
            finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == "string") {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },
      indexedDB: function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      DB_NAME: function() {
        return "EM_FS_" + window.location.pathname;
      },
      DB_VERSION: 20,
      DB_STORE_NAME: "FILE_DATA",
      saveFilesToDB: function(paths, onload, onerror) {
        onload = onload || function() {
        };
        onerror = onerror || function() {
        };
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out("creating db");
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0)
              onload();
            else
              onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() {
              ok++;
              if (ok + fail == total)
                finish();
            };
            putRequest.onerror = function putRequest_onerror() {
              fail++;
              if (ok + fail == total)
                finish();
            };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },
      loadFilesFromDB: function(paths, onload, onerror) {
        onload = onload || function() {
        };
        onerror = onerror || function() {
        };
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror;
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], "readonly");
          } catch (e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0)
              onload();
            else
              onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total)
                finish();
            };
            getRequest.onerror = function getRequest_onerror() {
              fail++;
              if (ok + fail == total)
                finish();
            };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }
    };
    var SOCKFS = {
      mount: function(mount) {
        Module["websocket"] = Module["websocket"] && typeof Module["websocket"] === "object" ? Module["websocket"] : {};
        Module["websocket"]._callbacks = {};
        Module["websocket"]["on"] = function(event, callback2) {
          if (typeof callback2 === "function") {
            this._callbacks[event] = callback2;
          }
          return this;
        };
        Module["websocket"].emit = function(event, param) {
          if (typeof this._callbacks[event] === "function") {
            this._callbacks[event].call(this, param);
          }
        };
        return FS.createNode(null, "/", 16384 | 511, 0);
      },
      createSocket: function(family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6));
        }
        var sock = {
          family,
          type,
          protocol,
          server: null,
          error: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
        var stream = FS.createStream({
          path: name,
          node,
          flags: FS.modeStringToFlags("r+"),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
        sock.stream = stream;
        return sock;
      },
      getSocket: function(fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },
      stream_ops: {
        poll: function(stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },
        ioctl: function(stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },
        read: function(stream, buffer2, offset, length, position) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            return 0;
          }
          buffer2.set(msg.buffer, offset);
          return msg.buffer.length;
        },
        write: function(stream, buffer2, offset, length, position) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer2, offset, length);
        },
        close: function(stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }
      },
      nextname: function() {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return "socket[" + SOCKFS.nextname.current++ + "]";
      },
      websocket_sock_ops: {
        createPeer: function(sock, addr, port) {
          var ws;
          if (typeof addr === "object") {
            ws = addr;
            addr = null;
            port = null;
          }
          if (ws) {
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            } else {
              var result = /ws[s]?:\\/\\/([^:]+):(\\d+)/.exec(ws.url);
              if (!result) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            try {
              var runtimeConfig = Module["websocket"] && typeof Module["websocket"] === "object";
              var url = "ws:#".replace("#", "//");
              if (runtimeConfig) {
                if (typeof Module["websocket"]["url"] === "string") {
                  url = Module["websocket"]["url"];
                }
              }
              if (url === "ws://" || url === "wss://") {
                var parts = addr.split("/");
                url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
              }
              var subProtocols = "binary";
              if (runtimeConfig) {
                if (typeof Module["websocket"]["subprotocol"] === "string") {
                  subProtocols = Module["websocket"]["subprotocol"];
                }
              }
              var opts = void 0;
              if (subProtocols !== "null") {
                subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
                opts = ENVIRONMENT_IS_NODE ? { protocol: subProtocols.toString() } : subProtocols;
              }
              if (runtimeConfig && Module["websocket"]["subprotocol"] === null) {
                subProtocols = "null";
                opts = void 0;
              }
              var WebSocketConstructor;
              if (ENVIRONMENT_IS_NODE) {
              } else {
                WebSocketConstructor = WebSocket;
              }
              ws = new WebSocketConstructor(url, opts);
              ws.binaryType = "arraybuffer";
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
          var peer = {
            addr,
            port,
            socket: ws,
            dgram_send_queue: []
          };
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
          if (sock.type === 2 && typeof sock.sport !== "undefined") {
            peer.dgram_send_queue.push(new Uint8Array([
              255,
              255,
              255,
              255,
              "p".charCodeAt(0),
              "o".charCodeAt(0),
              "r".charCodeAt(0),
              "t".charCodeAt(0),
              (sock.sport & 65280) >> 8,
              sock.sport & 255
            ]));
          }
          return peer;
        },
        getPeer: function(sock, addr, port) {
          return sock.peers[addr + ":" + port];
        },
        addPeer: function(sock, peer) {
          sock.peers[peer.addr + ":" + peer.port] = peer;
        },
        removePeer: function(sock, peer) {
          delete sock.peers[peer.addr + ":" + peer.port];
        },
        handlePeerEvents: function(sock, peer) {
          var first = true;
          var handleOpen = function() {
            Module["websocket"].emit("open", sock.stream.fd);
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              peer.socket.close();
            }
          };
          function handleMessage(data) {
            if (typeof data === "string") {
              var encoder = new TextEncoder();
              data = encoder.encode(data);
            } else {
              assert(data.byteLength !== void 0);
              if (data.byteLength == 0) {
                return;
              } else {
                data = new Uint8Array(data);
              }
            }
            var wasfirst = first;
            first = false;
            if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
              var newport = data[8] << 8 | data[9];
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
            sock.recv_queue.push({
              addr: peer.addr,
              port: peer.port,
              data
            });
            Module["websocket"].emit("message", sock.stream.fd);
          }
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on("open", handleOpen);
            peer.socket.on("message", function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage(new Uint8Array(data).buffer);
            });
            peer.socket.on("close", function() {
              Module["websocket"].emit("close", sock.stream.fd);
            });
            peer.socket.on("error", function(error) {
              sock.error = ERRNO_CODES.ECONNREFUSED;
              Module["websocket"].emit("error", [
                sock.stream.fd,
                sock.error,
                "ECONNREFUSED: Connection refused"
              ]);
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onclose = function() {
              Module["websocket"].emit("close", sock.stream.fd);
            };
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
            peer.socket.onerror = function(error) {
              sock.error = ERRNO_CODES.ECONNREFUSED;
              Module["websocket"].emit("error", [
                sock.stream.fd,
                sock.error,
                "ECONNREFUSED: Connection refused"
              ]);
            };
          }
        },
        poll: function(sock) {
          if (sock.type === 1 && sock.server) {
            return sock.pending.length ? 64 | 1 : 0;
          }
          var mask = 0;
          var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
          if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
            mask |= 64 | 1;
          }
          if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
            mask |= 4;
          }
          if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
            mask |= 16;
          }
          return mask;
        },
        ioctl: function(sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[arg >> 2] = bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },
        close: function(sock) {
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },
        bind: function(sock, addr, port) {
          if (typeof sock.saddr !== "undefined" || typeof sock.sport !== "undefined") {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          sock.saddr = addr;
          sock.sport = port;
          if (sock.type === 2) {
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError))
                throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP)
                throw e;
            }
          }
        },
        connect: function(sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (typeof sock.daddr !== "undefined" && typeof sock.dport !== "undefined") {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },
        listen: function(sock, backlog) {
        },
        accept: function(listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },
        getname: function(sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === void 0 || sock.dport === void 0) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr, port };
        },
        sendmsg: function(sock, buffer2, offset, length, addr, port) {
          if (sock.type === 2) {
            if (addr === void 0 || port === void 0) {
              addr = sock.daddr;
              port = sock.dport;
            }
            if (addr === void 0 || port === void 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            addr = sock.daddr;
            port = sock.dport;
          }
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          if (ArrayBuffer.isView(buffer2)) {
            offset += buffer2.byteOffset;
            buffer2 = buffer2.buffer;
          }
          var data;
          data = buffer2.slice(offset, offset + length);
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
          try {
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },
        recvmsg: function(sock, length) {
          if (sock.type === 1 && sock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
              if (!dest) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              } else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                return null;
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
          return res;
        }
      }
    };
    function __inet_pton4_raw(str) {
      var b = str.split(".");
      for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp))
          return null;
        b[i] = tmp;
      }
      return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
    }
    function jstoi_q(str) {
      return parseInt(str, void 0);
    }
    function __inet_pton6_raw(str) {
      var words;
      var w, offset, z;
      var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\\dA-F]{1,4}:(:|\\b)|){5}|([\\dA-F]{1,4}:){6})((([\\dA-F]{1,4}((?!\\3)::|:\\b|$))|(?!\\2\\3)){2}|(((2[0-4]|1\\d|[1-9])?\\d|25[0-5])\\.?\\b){4})$/i;
      var parts = [];
      if (!valid6regx.test(str)) {
        return null;
      }
      if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0];
      }
      if (str.indexOf("::") === 0) {
        str = str.replace("::", "Z:");
      } else {
        str = str.replace("::", ":Z:");
      }
      if (str.indexOf(".") > 0) {
        str = str.replace(new RegExp("[.]", "g"), ":");
        words = str.split(":");
        words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
        words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
        words = words.slice(0, words.length - 2);
      } else {
        words = str.split(":");
      }
      offset = 0;
      z = 0;
      for (w = 0; w < words.length; w++) {
        if (typeof words[w] === "string") {
          if (words[w] === "Z") {
            for (z = 0; z < 8 - words.length + 1; z++) {
              parts[w + z] = 0;
            }
            offset = z - 1;
          } else {
            parts[w + offset] = _htons(parseInt(words[w], 16));
          }
        } else {
          parts[w + offset] = words[w];
        }
      }
      return [
        parts[1] << 16 | parts[0],
        parts[3] << 16 | parts[2],
        parts[5] << 16 | parts[4],
        parts[7] << 16 | parts[6]
      ];
    }
    var DNS = {
      address_map: { id: 1, addrs: {}, names: {} },
      lookup_name: function(name) {
        var res = __inet_pton4_raw(name);
        if (res !== null) {
          return name;
        }
        res = __inet_pton6_raw(name);
        if (res !== null) {
          return name;
        }
        var addr;
        if (DNS.address_map.addrs[name]) {
          addr = DNS.address_map.addrs[name];
        } else {
          var id = DNS.address_map.id++;
          assert(id < 65535, "exceeded max address mappings of 65535");
          addr = "172.29." + (id & 255) + "." + (id & 65280);
          DNS.address_map.names[addr] = name;
          DNS.address_map.addrs[name] = addr;
        }
        return addr;
      },
      lookup_addr: function(addr) {
        if (DNS.address_map.names[addr]) {
          return DNS.address_map.names[addr];
        }
        return null;
      }
    };
    function __inet_ntop4_raw(addr) {
      return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
    }
    function __inet_ntop6_raw(ints) {
      var str = "";
      var word = 0;
      var longest = 0;
      var lastzero = 0;
      var zstart = 0;
      var len = 0;
      var i = 0;
      var parts = [
        ints[0] & 65535,
        ints[0] >> 16,
        ints[1] & 65535,
        ints[1] >> 16,
        ints[2] & 65535,
        ints[2] >> 16,
        ints[3] & 65535,
        ints[3] >> 16
      ];
      var hasipv4 = true;
      var v4part = "";
      for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) {
          hasipv4 = false;
          break;
        }
      }
      if (hasipv4) {
        v4part = __inet_ntop4_raw(parts[6] | parts[7] << 16);
        if (parts[5] === -1) {
          str = "::ffff:";
          str += v4part;
          return str;
        }
        if (parts[5] === 0) {
          str = "::";
          if (v4part === "0.0.0.0")
            v4part = "";
          if (v4part === "0.0.0.1")
            v4part = "1";
          str += v4part;
          return str;
        }
      }
      for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
          if (word - lastzero > 1) {
            len = 0;
          }
          lastzero = word;
          len++;
        }
        if (len > longest) {
          longest = len;
          zstart = word - longest + 1;
        }
      }
      for (word = 0; word < 8; word++) {
        if (longest > 1) {
          if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
            if (word === zstart) {
              str += ":";
              if (zstart === 0)
                str += ":";
            }
            continue;
          }
        }
        str += Number(_ntohs(parts[word] & 65535)).toString(16);
        str += word < 7 ? ":" : "";
      }
      return str;
    }
    function __read_sockaddr(sa, salen) {
      var family = HEAP16[sa >> 1];
      var port = _ntohs(HEAPU16[sa + 2 >> 1]);
      var addr;
      switch (family) {
        case 2:
          if (salen !== 16) {
            return { errno: 28 };
          }
          addr = HEAP32[sa + 4 >> 2];
          addr = __inet_ntop4_raw(addr);
          break;
        case 10:
          if (salen !== 28) {
            return { errno: 28 };
          }
          addr = [
            HEAP32[sa + 8 >> 2],
            HEAP32[sa + 12 >> 2],
            HEAP32[sa + 16 >> 2],
            HEAP32[sa + 20 >> 2]
          ];
          addr = __inet_ntop6_raw(addr);
          break;
        default:
          return { errno: 5 };
      }
      return { family, addr, port };
    }
    function __write_sockaddr(sa, family, addr, port) {
      switch (family) {
        case 2:
          addr = __inet_pton4_raw(addr);
          HEAP16[sa >> 1] = family;
          HEAP32[sa + 4 >> 2] = addr;
          HEAP16[sa + 2 >> 1] = _htons(port);
          break;
        case 10:
          addr = __inet_pton6_raw(addr);
          HEAP32[sa >> 2] = family;
          HEAP32[sa + 8 >> 2] = addr[0];
          HEAP32[sa + 12 >> 2] = addr[1];
          HEAP32[sa + 16 >> 2] = addr[2];
          HEAP32[sa + 20 >> 2] = addr[3];
          HEAP16[sa + 2 >> 1] = _htons(port);
          HEAP32[sa + 4 >> 2] = 0;
          HEAP32[sa + 24 >> 2] = 0;
          break;
        default:
          return { errno: 5 };
      }
      return {};
    }
    var SYSCALLS = {
      mappings: {},
      DEFAULT_POLLMASK: 5,
      umask: 511,
      calculateAt: function(dirfd, path) {
        if (path[0] !== "/") {
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream)
              throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },
      doStat: function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            return -54;
          }
          throw e;
        }
        HEAP32[buf >> 2] = stat.dev;
        HEAP32[buf + 4 >> 2] = 0;
        HEAP32[buf + 8 >> 2] = stat.ino;
        HEAP32[buf + 12 >> 2] = stat.mode;
        HEAP32[buf + 16 >> 2] = stat.nlink;
        HEAP32[buf + 20 >> 2] = stat.uid;
        HEAP32[buf + 24 >> 2] = stat.gid;
        HEAP32[buf + 28 >> 2] = stat.rdev;
        HEAP32[buf + 32 >> 2] = 0;
        tempI64 = [
          stat.size >>> 0,
          (tempDouble = stat.size, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
        ], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
        HEAP32[buf + 48 >> 2] = 4096;
        HEAP32[buf + 52 >> 2] = stat.blocks;
        HEAP32[buf + 56 >> 2] = stat.atime.getTime() / 1e3 | 0;
        HEAP32[buf + 60 >> 2] = 0;
        HEAP32[buf + 64 >> 2] = stat.mtime.getTime() / 1e3 | 0;
        HEAP32[buf + 68 >> 2] = 0;
        HEAP32[buf + 72 >> 2] = stat.ctime.getTime() / 1e3 | 0;
        HEAP32[buf + 76 >> 2] = 0;
        tempI64 = [
          stat.ino >>> 0,
          (tempDouble = stat.ino, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
        ], HEAP32[buf + 80 >> 2] = tempI64[0], HEAP32[buf + 84 >> 2] = tempI64[1];
        return 0;
      },
      doMsync: function(addr, stream, len, flags, offset) {
        var buffer2 = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer2, offset, len, flags);
      },
      doMkdir: function(path, mode) {
        path = PATH.normalize(path);
        if (path[path.length - 1] === "/")
          path = path.substr(0, path.length - 1);
        FS.mkdir(path, mode, 0);
        return 0;
      },
      doMknod: function(path, mode, dev) {
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },
      doReadlink: function(path, buf, bufsize) {
        if (bufsize <= 0)
          return -28;
        var ret = FS.readlink(path);
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf + len];
        stringToUTF8(ret, buf, bufsize + 1);
        HEAP8[buf + len] = endChar;
        return len;
      },
      doAccess: function(path, amode) {
        if (amode & ~7) {
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = "";
        if (amode & 4)
          perms += "r";
        if (amode & 2)
          perms += "w";
        if (amode & 1)
          perms += "x";
        if (perms && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },
      doDup: function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest)
          FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },
      doReadv: function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[iov + i * 8 >> 2];
          var len = HEAP32[iov + (i * 8 + 4) >> 2];
          var curr = FS.read(stream, HEAP8, ptr, len, offset);
          if (curr < 0)
            return -1;
          ret += curr;
          if (curr < len)
            break;
        }
        return ret;
      },
      doWritev: function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[iov + i * 8 >> 2];
          var len = HEAP32[iov + (i * 8 + 4) >> 2];
          var curr = FS.write(stream, HEAP8, ptr, len, offset);
          if (curr < 0)
            return -1;
          ret += curr;
        }
        return ret;
      },
      varargs: void 0,
      get: function() {
        assert(SYSCALLS.varargs != void 0);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
        return ret;
      },
      getStr: function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
      getStreamFromFD: function(fd) {
        var stream = FS.getStream(fd);
        if (!stream)
          throw new FS.ErrnoError(8);
        return stream;
      },
      get64: function(low, high) {
        if (low >= 0)
          assert(high === 0);
        else
          assert(high === -1);
        return low;
      }
    };
    function ___syscall102(call, socketvararg) {
      try {
        SYSCALLS.varargs = socketvararg;
        var getSocketFromFD = function() {
          var socket = SOCKFS.getSocket(SYSCALLS.get());
          if (!socket)
            throw new FS.ErrnoError(8);
          return socket;
        };
        var getSocketAddress = function(allowNull) {
          var addrp = SYSCALLS.get(), addrlen2 = SYSCALLS.get();
          if (allowNull && addrp === 0)
            return null;
          var info2 = __read_sockaddr(addrp, addrlen2);
          if (info2.errno)
            throw new FS.ErrnoError(info2.errno);
          info2.addr = DNS.lookup_addr(info2.addr) || info2.addr;
          return info2;
        };
        switch (call) {
          case 1: {
            var domain = SYSCALLS.get(), type = SYSCALLS.get(), protocol = SYSCALLS.get();
            var sock = SOCKFS.createSocket(domain, type, protocol);
            assert(sock.stream.fd < 64);
            return sock.stream.fd;
          }
          case 2: {
            var sock = getSocketFromFD(), info = getSocketAddress();
            sock.sock_ops.bind(sock, info.addr, info.port);
            return 0;
          }
          case 3: {
            var sock = getSocketFromFD(), info = getSocketAddress();
            sock.sock_ops.connect(sock, info.addr, info.port);
            return 0;
          }
          case 4: {
            var sock = getSocketFromFD(), backlog = SYSCALLS.get();
            sock.sock_ops.listen(sock, backlog);
            return 0;
          }
          case 5: {
            var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            var newsock = sock.sock_ops.accept(sock);
            if (addr) {
              var res = __write_sockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport);
              assert(!res.errno);
            }
            return newsock.stream.fd;
          }
          case 6: {
            var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport);
            assert(!res.errno);
            return 0;
          }
          case 7: {
            var sock = getSocketFromFD(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            if (!sock.daddr) {
              return -53;
            }
            var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport);
            assert(!res.errno);
            return 0;
          }
          case 11: {
            var sock = getSocketFromFD(), message = SYSCALLS.get(), length = SYSCALLS.get(), flags = SYSCALLS.get(), dest = getSocketAddress(true);
            if (!dest) {
              return FS.write(sock.stream, HEAP8, message, length);
            } else {
              return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port);
            }
          }
          case 12: {
            var sock = getSocketFromFD(), buf = SYSCALLS.get(), len = SYSCALLS.get(), flags = SYSCALLS.get(), addr = SYSCALLS.get(), addrlen = SYSCALLS.get();
            var msg = sock.sock_ops.recvmsg(sock, len);
            if (!msg)
              return 0;
            if (addr) {
              var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port);
              assert(!res.errno);
            }
            HEAPU8.set(msg.buffer, buf);
            return msg.buffer.byteLength;
          }
          case 14: {
            return -50;
          }
          case 15: {
            var sock = getSocketFromFD(), level = SYSCALLS.get(), optname = SYSCALLS.get(), optval = SYSCALLS.get(), optlen = SYSCALLS.get();
            if (level === 1) {
              if (optname === 4) {
                HEAP32[optval >> 2] = sock.error;
                HEAP32[optlen >> 2] = 4;
                sock.error = null;
                return 0;
              }
            }
            return -50;
          }
          case 16: {
            var sock = getSocketFromFD(), message = SYSCALLS.get(), flags = SYSCALLS.get();
            var iov = HEAP32[message + 8 >> 2];
            var num = HEAP32[message + 12 >> 2];
            var addr, port;
            var name = HEAP32[message >> 2];
            var namelen = HEAP32[message + 4 >> 2];
            if (name) {
              var info = __read_sockaddr(name, namelen);
              if (info.errno)
                return -info.errno;
              port = info.port;
              addr = DNS.lookup_addr(info.addr) || info.addr;
            }
            var total = 0;
            for (var i = 0; i < num; i++) {
              total += HEAP32[iov + (8 * i + 4) >> 2];
            }
            var view = new Uint8Array(total);
            var offset = 0;
            for (var i = 0; i < num; i++) {
              var iovbase = HEAP32[iov + (8 * i + 0) >> 2];
              var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
              for (var j = 0; j < iovlen; j++) {
                view[offset++] = HEAP8[iovbase + j >> 0];
              }
            }
            return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port);
          }
          case 17: {
            var sock = getSocketFromFD(), message = SYSCALLS.get(), flags = SYSCALLS.get();
            var iov = HEAP32[message + 8 >> 2];
            var num = HEAP32[message + 12 >> 2];
            var total = 0;
            for (var i = 0; i < num; i++) {
              total += HEAP32[iov + (8 * i + 4) >> 2];
            }
            var msg = sock.sock_ops.recvmsg(sock, total);
            if (!msg)
              return 0;
            var name = HEAP32[message >> 2];
            if (name) {
              var res = __write_sockaddr(name, sock.family, DNS.lookup_name(msg.addr), msg.port);
              assert(!res.errno);
            }
            var bytesRead = 0;
            var bytesRemaining = msg.buffer.byteLength;
            for (var i = 0; bytesRemaining > 0 && i < num; i++) {
              var iovbase = HEAP32[iov + (8 * i + 0) >> 2];
              var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
              if (!iovlen) {
                continue;
              }
              var length = Math.min(iovlen, bytesRemaining);
              var buf = msg.buffer.subarray(bytesRead, bytesRead + length);
              HEAPU8.set(buf, iovbase + bytesRead);
              bytesRead += length;
              bytesRemaining -= length;
            }
            return bytesRead;
          }
          default: {
            return -52;
          }
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall12(path) {
      try {
        path = SYSCALLS.getStr(path);
        FS.chdir(path);
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall142(nfds, readfds, writefds, exceptfds, timeout) {
      try {
        assert(nfds <= 64, "nfds must be less than or equal to 64");
        assert(!exceptfds, "exceptfds not supported");
        var total = 0;
        var srcReadLow = readfds ? HEAP32[readfds >> 2] : 0, srcReadHigh = readfds ? HEAP32[readfds + 4 >> 2] : 0;
        var srcWriteLow = writefds ? HEAP32[writefds >> 2] : 0, srcWriteHigh = writefds ? HEAP32[writefds + 4 >> 2] : 0;
        var srcExceptLow = exceptfds ? HEAP32[exceptfds >> 2] : 0, srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0;
        var dstReadLow = 0, dstReadHigh = 0;
        var dstWriteLow = 0, dstWriteHigh = 0;
        var dstExceptLow = 0, dstExceptHigh = 0;
        var allLow = (readfds ? HEAP32[readfds >> 2] : 0) | (writefds ? HEAP32[writefds >> 2] : 0) | (exceptfds ? HEAP32[exceptfds >> 2] : 0);
        var allHigh = (readfds ? HEAP32[readfds + 4 >> 2] : 0) | (writefds ? HEAP32[writefds + 4 >> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0);
        var check = function(fd2, low, high, val) {
          return fd2 < 32 ? low & val : high & val;
        };
        for (var fd = 0; fd < nfds; fd++) {
          var mask = 1 << fd % 32;
          if (!check(fd, allLow, allHigh, mask)) {
            continue;
          }
          var stream = FS.getStream(fd);
          if (!stream)
            throw new FS.ErrnoError(8);
          var flags = SYSCALLS.DEFAULT_POLLMASK;
          if (stream.stream_ops.poll) {
            flags = stream.stream_ops.poll(stream);
          }
          if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
            fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
            total++;
          }
          if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
            fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
            total++;
          }
          if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
            fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
            total++;
          }
        }
        if (readfds) {
          HEAP32[readfds >> 2] = dstReadLow;
          HEAP32[readfds + 4 >> 2] = dstReadHigh;
        }
        if (writefds) {
          HEAP32[writefds >> 2] = dstWriteLow;
          HEAP32[writefds + 4 >> 2] = dstWriteHigh;
        }
        if (exceptfds) {
          HEAP32[exceptfds >> 2] = dstExceptLow;
          HEAP32[exceptfds + 4 >> 2] = dstExceptHigh;
        }
        return total;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall183(buf, size) {
      try {
        if (size === 0)
          return -28;
        var cwd = FS.cwd();
        var cwdLengthInBytes = lengthBytesUTF8(cwd);
        if (size < cwdLengthInBytes + 1)
          return -68;
        stringToUTF8(cwd, buf, size);
        return buf;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall195(path, buf) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.stat, path, buf);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall197(fd, buf) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return SYSCALLS.doStat(FS.stat, stream.path, buf);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall221(fd, cmd, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
          case 0: {
            var arg = SYSCALLS.get();
            if (arg < 0) {
              return -28;
            }
            var newStream;
            newStream = FS.open(stream.path, stream.flags, 0, arg);
            return newStream.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return stream.flags;
          case 4: {
            var arg = SYSCALLS.get();
            stream.flags |= arg;
            return 0;
          }
          case 12: {
            var arg = SYSCALLS.get();
            var offset = 0;
            HEAP16[arg + offset >> 1] = 2;
            return 0;
          }
          case 13:
          case 14:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            ___setErrNo(28);
            return -1;
          default: {
            return -28;
          }
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall3(fd, buf, count) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return FS.read(stream, HEAP8, buf, count);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall39(path, mode) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doMkdir(path, mode);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall5(path, flags, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var pathname = SYSCALLS.getStr(path);
        var mode = SYSCALLS.get();
        var stream = FS.open(pathname, flags, mode);
        return stream.fd;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall54(fd, op, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
          case 21509:
          case 21505: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          case 21519: {
            if (!stream.tty)
              return -59;
            var argp = SYSCALLS.get();
            HEAP32[argp >> 2] = 0;
            return 0;
          }
          case 21520: {
            if (!stream.tty)
              return -59;
            return -28;
          }
          case 21531: {
            var argp = SYSCALLS.get();
            return FS.ioctl(stream, op, argp);
          }
          case 21523: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          case 21524: {
            if (!stream.tty)
              return -59;
            return 0;
          }
          default:
            abort("bad ioctl syscall " + op);
        }
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function ___syscall85(path, buf, bufsize) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doReadlink(path, buf, bufsize);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function syscallMunmap(addr, len) {
      if (addr === -1 || len === 0) {
        return -28;
      }
      var info = SYSCALLS.mappings[addr];
      if (!info)
        return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }
    function ___syscall91(addr, len) {
      try {
        return syscallMunmap(addr, len);
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return -e.errno;
      }
    }
    function getShiftFromSize(size) {
      switch (size) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + size);
      }
    }
    function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }
    var embind_charCodes = void 0;
    function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
        ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
    var awaitingDependencies = {};
    var registeredTypes = {};
    var typeDependencies = {};
    var char_0 = 48;
    var char_9 = 57;
    function makeLegalFunctionName(name) {
      if (name === void 0) {
        return "_unknown";
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
        return "_" + name;
      } else {
        return name;
      }
    }
    function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      return new Function("body", "return function " + name + '() {\\n    "use strict";    return body.apply(this, arguments);\\n};\\n')(body);
    }
    function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function(message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;
        if (stack !== void 0) {
          this.stack = this.toString() + "\\n" + stack.replace(/^Error(:[^\\n]*)?\\n/, "");
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
        if (this.message === void 0) {
          return this.name;
        } else {
          return this.name + ": " + this.message;
        }
      };
      return errorClass;
    }
    var BindingError = void 0;
    function throwBindingError(message) {
      throw new BindingError(message);
    }
    var InternalError = void 0;
    function throwInternalError(message) {
      throw new InternalError(message);
    }
    function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function(type) {
        typeDependencies[type] = dependentTypes;
      });
      function onComplete(typeConverters2) {
        var myTypeConverters = getTypeConverters(typeConverters2);
        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError("Mismatched type converter count");
        }
        for (var i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i]);
        }
      }
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function(dt, i) {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);
          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
          }
          awaitingDependencies[dt].push(function() {
            typeConverters[i] = registeredTypes[dt];
            ++registered;
            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });
      if (unregisteredTypes.length === 0) {
        onComplete(typeConverters);
      }
    }
    function registerType(rawType, registeredInstance, options) {
      options = options || {};
      if (!("argPackAdvance" in registeredInstance)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      }
      var name = registeredInstance.name;
      if (!rawType) {
        throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError("Cannot register type '" + name + "' twice");
        }
      }
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
      if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach(function(cb) {
          cb();
        });
      }
    }
    function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function(wt) {
          return !!wt;
        },
        toWireType: function(destructors, o) {
          return o ? trueValue : falseValue;
        },
        argPackAdvance: 8,
        readValueFromPointer: function(pointer) {
          var heap;
          if (size === 1) {
            heap = HEAP8;
          } else if (size === 2) {
            heap = HEAP16;
          } else if (size === 4) {
            heap = HEAP32;
          } else {
            throw new TypeError("Unknown boolean type size: " + name);
          }
          return this["fromWireType"](heap[pointer >> shift]);
        },
        destructorFunction: null
      });
    }
    function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
        return false;
      }
      if (!(other instanceof ClassHandle)) {
        return false;
      }
      var leftClass = this.$$.ptrType.registeredClass;
      var left = this.$$.ptr;
      var rightClass = other.$$.ptrType.registeredClass;
      var right = other.$$.ptr;
      while (leftClass.baseClass) {
        left = leftClass.upcast(left);
        leftClass = leftClass.baseClass;
      }
      while (rightClass.baseClass) {
        right = rightClass.upcast(right);
        rightClass = rightClass.baseClass;
      }
      return leftClass === rightClass && left === right;
    }
    function shallowCopyInternalPointer(o) {
      return {
        count: o.count,
        deleteScheduled: o.deleteScheduled,
        preservePointerOnDelete: o.preservePointerOnDelete,
        ptr: o.ptr,
        ptrType: o.ptrType,
        smartPtr: o.smartPtr,
        smartPtrType: o.smartPtrType
      };
    }
    function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
    }
    var finalizationGroup = false;
    function detachFinalizer(handle) {
    }
    function runDestructor($$) {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    }
    function releaseClassHandle($$) {
      $$.count.value -= 1;
      var toDelete = $$.count.value === 0;
      if (toDelete) {
        runDestructor($$);
      }
    }
    function attachFinalizer(handle) {
      if (typeof FinalizationGroup === "undefined") {
        attachFinalizer = function(handle2) {
          return handle2;
        };
        return handle;
      }
      finalizationGroup = new FinalizationGroup(function(iter) {
        for (var result = iter.next(); !result.done; result = iter.next()) {
          var $$ = result.value;
          if (!$$.ptr) {
            console.warn("object already deleted: " + $$.ptr);
          } else {
            releaseClassHandle($$);
          }
        }
      });
      attachFinalizer = function(handle2) {
        finalizationGroup.register(handle2, handle2.$$, handle2.$$);
        return handle2;
      };
      detachFinalizer = function(handle2) {
        finalizationGroup.unregister(handle2.$$);
      };
      return attachFinalizer(handle);
    }
    function ClassHandle_clone() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.preservePointerOnDelete) {
        this.$$.count.value += 1;
        return this;
      } else {
        var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
          $$: { value: shallowCopyInternalPointer(this.$$) }
        }));
        clone.$$.count.value += 1;
        clone.$$.deleteScheduled = false;
        return clone;
      }
    }
    function ClassHandle_delete() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion");
      }
      detachFinalizer(this);
      releaseClassHandle(this.$$);
      if (!this.$$.preservePointerOnDelete) {
        this.$$.smartPtr = void 0;
        this.$$.ptr = void 0;
      }
    }
    function ClassHandle_isDeleted() {
      return !this.$$.ptr;
    }
    var delayFunction = void 0;
    var deletionQueue = [];
    function flushPendingDeletes() {
      while (deletionQueue.length) {
        var obj = deletionQueue.pop();
        obj.$$.deleteScheduled = false;
        obj["delete"]();
      }
    }
    function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError("Object already scheduled for deletion");
      }
      deletionQueue.push(this);
      if (deletionQueue.length === 1 && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
      this.$$.deleteScheduled = true;
      return this;
    }
    function init_ClassHandle() {
      ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
      ClassHandle.prototype["clone"] = ClassHandle_clone;
      ClassHandle.prototype["delete"] = ClassHandle_delete;
      ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
      ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
    }
    function ClassHandle() {
    }
    var registeredPointers = {};
    function ensureOverloadTable(proto, methodName, humanName) {
      if (proto[methodName].overloadTable === void 0) {
        var prevFunc = proto[methodName];
        proto[methodName] = function() {
          if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
            throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
          }
          return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
        };
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    }
    function exposePublicSymbol(name, value, numArguments) {
      if (Module.hasOwnProperty(name)) {
        if (numArguments === void 0 || Module[name].overloadTable !== void 0 && Module[name].overloadTable[numArguments] !== void 0) {
          throwBindingError("Cannot register public name '" + name + "' twice");
        }
        ensureOverloadTable(Module, name, name);
        if (Module.hasOwnProperty(numArguments)) {
          throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
        }
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        if (numArguments !== void 0) {
          Module[name].numArguments = numArguments;
        }
      }
    }
    function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }
    function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
        }
        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass;
      }
      return ptr;
    }
    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
    function genericPointerToWireType(destructors, handle) {
      var ptr;
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }
        if (this.isSmartPointer) {
          ptr = this.rawConstructor();
          if (destructors !== null) {
            destructors.push(this.rawDestructor, ptr);
          }
          return ptr;
        } else {
          return 0;
        }
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
        throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      if (this.isSmartPointer) {
        if (handle.$$.smartPtr === void 0) {
          throwBindingError("Passing raw pointer to smart pointer is illegal");
        }
        switch (this.sharingPolicy) {
          case 0:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
            }
            break;
          case 1:
            ptr = handle.$$.smartPtr;
            break;
          case 2:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              var clonedHandle = handle["clone"]();
              ptr = this.rawShare(ptr, __emval_register(function() {
                clonedHandle["delete"]();
              }));
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
            }
            break;
          default:
            throwBindingError("Unsupporting sharing policy");
        }
      }
      return ptr;
    }
    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError("null is not a valid " + this.name);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
      }
      if (handle.$$.ptrType.isConst) {
        throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
    function simpleReadValueFromPointer(pointer) {
      return this["fromWireType"](HEAPU32[pointer >> 2]);
    }
    function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
        ptr = this.rawGetPointee(ptr);
      }
      return ptr;
    }
    function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
        this.rawDestructor(ptr);
      }
    }
    function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
        handle["delete"]();
      }
    }
    function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
        return ptr;
      }
      if (desiredClass.baseClass === void 0) {
        return null;
      }
      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
        return null;
      }
      return desiredClass.downcast(rv);
    }
    function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length;
    }
    function getLiveInheritedInstances() {
      var rv = [];
      for (var k in registeredInstances) {
        if (registeredInstances.hasOwnProperty(k)) {
          rv.push(registeredInstances[k]);
        }
      }
      return rv;
    }
    function setDelayFunction(fn) {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
    }
    function init_embind() {
      Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
      Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
      Module["flushPendingDeletes"] = flushPendingDeletes;
      Module["setDelayFunction"] = setDelayFunction;
    }
    var registeredInstances = {};
    function getBasestPointer(class_, ptr) {
      if (ptr === void 0) {
        throwBindingError("ptr should not be undefined");
      }
      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass;
      }
      return ptr;
    }
    function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    }
    function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
        throwInternalError("makeClassHandle requires ptr and ptrType");
      }
      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError("Both smartPtrType and smartPtr must be specified");
      }
      record.count = { value: 1 };
      return attachFinalizer(Object.create(prototype, { $$: { value: record } }));
    }
    function RegisteredPointer_fromWireType(ptr) {
      var rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
        this.destructor(ptr);
        return null;
      }
      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
      if (registeredInstance !== void 0) {
        if (registeredInstance.$$.count.value === 0) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance["clone"]();
        } else {
          var rv = registeredInstance["clone"]();
          this.destructor(ptr);
          return rv;
        }
      }
      function makeDefaultHandle() {
        if (this.isSmartPointer) {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: rawPointer,
            smartPtrType: this,
            smartPtr: ptr
          });
        } else {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this,
            ptr
          });
        }
      }
      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
        return makeDefaultHandle.call(this);
      }
      var toType;
      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType;
      } else {
        toType = registeredPointerRecord.pointerType;
      }
      var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
      if (dp === null) {
        return makeDefaultHandle.call(this);
      }
      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
          smartPtrType: this,
          smartPtr: ptr
        });
      } else {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp
        });
      }
    }
    function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype["argPackAdvance"] = 8;
      RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
      RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
    }
    function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
      if (!isSmartPointer && registeredClass.baseClass === void 0) {
        if (isConst) {
          this["toWireType"] = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        } else {
          this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        }
      } else {
        this["toWireType"] = genericPointerToWireType;
      }
    }
    function replacePublicSymbol(name, value, numArguments) {
      if (!Module.hasOwnProperty(name)) {
        throwInternalError("Replacing nonexistant public symbol");
      }
      if (Module[name].overloadTable !== void 0 && numArguments !== void 0) {
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        Module[name].argCount = numArguments;
      }
    }
    function embind__requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);
      function makeDynCaller(dynCall) {
        var args = [];
        for (var i = 1; i < signature.length; ++i) {
          args.push("a" + i);
        }
        var name = "dynCall_" + signature + "_" + rawFunction;
        var body = "return function " + name + "(" + args.join(", ") + ") {\\n";
        body += "    return dynCall(rawFunction" + (args.length ? ", " : "") + args.join(", ") + ");\\n";
        body += "};\\n";
        return new Function("dynCall", "rawFunction", body)(dynCall, rawFunction);
      }
      var dc = Module["dynCall_" + signature];
      var fp = makeDynCaller(dc);
      if (typeof fp !== "function") {
        throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
      }
      return fp;
    }
    var UnboundTypeError = void 0;
    function getTypeName(type) {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    }
    function throwUnboundTypeError(message, types) {
      var unboundTypes = [];
      var seen = {};
      function visit(type) {
        if (seen[type]) {
          return;
        }
        if (registeredTypes[type]) {
          return;
        }
        if (typeDependencies[type]) {
          typeDependencies[type].forEach(visit);
          return;
        }
        unboundTypes.push(type);
        seen[type] = true;
      }
      types.forEach(visit);
      throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
    }
    function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
      if (upcast) {
        upcast = embind__requireFunction(upcastSignature, upcast);
      }
      if (downcast) {
        downcast = embind__requireFunction(downcastSignature, downcast);
      }
      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, function() {
        throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
      });
      whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function(base) {
        base = base[0];
        var baseClass;
        var basePrototype;
        if (baseClassRawType) {
          baseClass = base.registeredClass;
          basePrototype = baseClass.instancePrototype;
        } else {
          basePrototype = ClassHandle.prototype;
        }
        var constructor = createNamedFunction(legalFunctionName, function() {
          if (Object.getPrototypeOf(this) !== instancePrototype) {
            throw new BindingError("Use 'new' to construct " + name);
          }
          if (registeredClass.constructor_body === void 0) {
            throw new BindingError(name + " has no accessible constructor");
          }
          var body = registeredClass.constructor_body[arguments.length];
          if (body === void 0) {
            throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
          }
          return body.apply(this, arguments);
        });
        var instancePrototype = Object.create(basePrototype, {
          constructor: { value: constructor }
        });
        constructor.prototype = instancePrototype;
        var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
        var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
        var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
        var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
        registeredPointers[rawType] = {
          pointerType: pointerConverter,
          constPointerType: constPointerConverter
        };
        replacePublicSymbol(legalFunctionName, constructor);
        return [referenceConverter, pointerConverter, constPointerConverter];
      });
    }
    function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
        throw new TypeError("new_ called with constructor type " + typeof constructor + " which is not a function");
      }
      var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function() {
      });
      dummy.prototype = constructor.prototype;
      var obj = new dummy();
      var r = constructor.apply(obj, argumentList);
      return r instanceof Object ? r : obj;
    }
    function runDestructors(destructors) {
      while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr);
      }
    }
    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      var argCount = argTypes.length;
      if (argCount < 2) {
        throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
      }
      var isClassMethodFunc = argTypes[1] !== null && classType !== null;
      var needsDestructorStack = false;
      for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
          needsDestructorStack = true;
          break;
        }
      }
      var returns = argTypes[0].name !== "void";
      var argsList = "";
      var argsListWired = "";
      for (var i = 0; i < argCount - 2; ++i) {
        argsList += (i !== 0 ? ", " : "") + "arg" + i;
        argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
      }
      var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\\nif (arguments.length !== " + (argCount - 2) + ") {\\nthrowBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\\n}\\n";
      if (needsDestructorStack) {
        invokerFnBody += "var destructors = [];\\n";
      }
      var dtorStack = needsDestructorStack ? "destructors" : "null";
      var args1 = [
        "throwBindingError",
        "invoker",
        "fn",
        "runDestructors",
        "retType",
        "classParam"
      ];
      var args2 = [
        throwBindingError,
        cppInvokerFunc,
        cppTargetFunc,
        runDestructors,
        argTypes[0],
        argTypes[1]
      ];
      if (isClassMethodFunc) {
        invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\\n";
      }
      for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\\n";
        args1.push("argType" + i);
        args2.push(argTypes[i + 2]);
      }
      if (isClassMethodFunc) {
        argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
      }
      invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\\n";
      if (needsDestructorStack) {
        invokerFnBody += "runDestructors(destructors);\\n";
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
          if (argTypes[i].destructorFunction !== null) {
            invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\\n";
            args1.push(paramName + "_dtor");
            args2.push(argTypes[i].destructorFunction);
          }
        }
      }
      if (returns) {
        invokerFnBody += "var ret = retType.fromWireType(rv);\\nreturn ret;\\n";
      }
      invokerFnBody += "}\\n";
      args1.push(invokerFnBody);
      var invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction;
    }
    function heap32VectorToArray(count, firstElement) {
      var array = [];
      for (var i = 0; i < count; i++) {
        array.push(HEAP32[(firstElement >> 2) + i]);
      }
      return array;
    }
    function __embind_register_class_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, fn) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
        classType = classType[0];
        var humanName = classType.name + "." + methodName;
        function unboundTypesHandler() {
          throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
        }
        var proto = classType.registeredClass.constructor;
        if (proto[methodName] === void 0) {
          unboundTypesHandler.argCount = argCount - 1;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 1] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
          var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
          var func = craftInvokerFunction(humanName, invokerArgsArray, null, rawInvoker, fn);
          if (proto[methodName].overloadTable === void 0) {
            func.argCount = argCount - 1;
            proto[methodName] = func;
          } else {
            proto[methodName].overloadTable[argCount - 1] = func;
          }
          return [];
        });
        return [];
      });
    }
    function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
      assert(argCount > 0);
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      var args = [rawConstructor];
      var destructors = [];
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
        classType = classType[0];
        var humanName = "constructor " + classType.name;
        if (classType.registeredClass.constructor_body === void 0) {
          classType.registeredClass.constructor_body = [];
        }
        if (classType.registeredClass.constructor_body[argCount - 1] !== void 0) {
          throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        }
        classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
          throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
        };
        whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
          classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
            if (arguments.length !== argCount - 1) {
              throwBindingError(humanName + " called with " + arguments.length + " arguments, expected " + (argCount - 1));
            }
            destructors.length = 0;
            args.length = argCount;
            for (var i = 1; i < argCount; ++i) {
              args[i] = argTypes[i]["toWireType"](destructors, arguments[i - 1]);
            }
            var ptr = invoker.apply(null, args);
            runDestructors(destructors);
            return argTypes[0]["fromWireType"](ptr);
          };
          return [];
        });
        return [];
      });
    }
    function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
        classType = classType[0];
        var humanName = classType.name + "." + methodName;
        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName);
        }
        function unboundTypesHandler() {
          throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
        }
        var proto = classType.registeredClass.instancePrototype;
        var method = proto[methodName];
        if (method === void 0 || method.overloadTable === void 0 && method.className !== classType.name && method.argCount === argCount - 2) {
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
          var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
          if (proto[methodName].overloadTable === void 0) {
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
          }
          return [];
        });
        return [];
      });
    }
    var emval_free_list = [];
    var emval_handle_array = [
      {},
      { value: void 0 },
      { value: null },
      { value: true },
      { value: false }
    ];
    function __emval_decref(handle) {
      if (handle > 4 && --emval_handle_array[handle].refcount === 0) {
        emval_handle_array[handle] = void 0;
        emval_free_list.push(handle);
      }
    }
    function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== void 0) {
          ++count;
        }
      }
      return count;
    }
    function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== void 0) {
          return emval_handle_array[i];
        }
      }
      return null;
    }
    function init_emval() {
      Module["count_emval_handles"] = count_emval_handles;
      Module["get_first_emval"] = get_first_emval;
    }
    function __emval_register(value) {
      switch (value) {
        case void 0: {
          return 1;
        }
        case null: {
          return 2;
        }
        case true: {
          return 3;
        }
        case false: {
          return 4;
        }
        default: {
          var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
          emval_handle_array[handle] = { refcount: 1, value };
          return handle;
        }
      }
    }
    function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function(handle) {
          var rv = emval_handle_array[handle].value;
          __emval_decref(handle);
          return rv;
        },
        toWireType: function(destructors, value) {
          return __emval_register(value);
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: null
      });
    }
    function _embind_repr(v) {
      if (v === null) {
        return "null";
      }
      var t = typeof v;
      if (t === "object" || t === "array" || t === "function") {
        return v.toString();
      } else {
        return "" + v;
      }
    }
    function floatReadValueFromPointer(name, shift) {
      switch (shift) {
        case 2:
          return function(pointer) {
            return this["fromWireType"](HEAPF32[pointer >> 2]);
          };
        case 3:
          return function(pointer) {
            return this["fromWireType"](HEAPF64[pointer >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + name);
      }
    }
    function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: function(value) {
          return value;
        },
        toWireType: function(destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          }
          return value;
        },
        argPackAdvance: 8,
        readValueFromPointer: floatReadValueFromPointer(name, shift),
        destructorFunction: null
      });
    }
    function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
      var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      name = readLatin1String(name);
      rawInvoker = embind__requireFunction(signature, rawInvoker);
      exposePublicSymbol(name, function() {
        throwUnboundTypeError("Cannot call " + name + " due to unbound types", argTypes);
      }, argCount - 1);
      whenDependentTypesAreResolved([], argTypes, function(argTypes2) {
        var invokerArgsArray = [argTypes2[0], null].concat(argTypes2.slice(1));
        replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1);
        return [];
      });
    }
    function integerReadValueFromPointer(name, shift, signed) {
      switch (shift) {
        case 0:
          return signed ? function readS8FromPointer(pointer) {
            return HEAP8[pointer];
          } : function readU8FromPointer(pointer) {
            return HEAPU8[pointer];
          };
        case 1:
          return signed ? function readS16FromPointer(pointer) {
            return HEAP16[pointer >> 1];
          } : function readU16FromPointer(pointer) {
            return HEAPU16[pointer >> 1];
          };
        case 2:
          return signed ? function readS32FromPointer(pointer) {
            return HEAP32[pointer >> 2];
          } : function readU32FromPointer(pointer) {
            return HEAPU32[pointer >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + name);
      }
    }
    function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) {
        maxRange = 4294967295;
      }
      var shift = getShiftFromSize(size);
      var fromWireType = function(value) {
        return value;
      };
      if (minRange === 0) {
        var bitshift = 32 - 8 * size;
        fromWireType = function(value) {
          return value << bitshift >>> bitshift;
        };
      }
      var isUnsignedType = name.indexOf("unsigned") != -1;
      registerType(primitiveType, {
        name,
        fromWireType,
        toWireType: function(destructors, value) {
          if (typeof value !== "number" && typeof value !== "boolean") {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          }
          if (value < minRange || value > maxRange) {
            throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!");
          }
          return isUnsignedType ? value >>> 0 : value | 0;
        },
        argPackAdvance: 8,
        readValueFromPointer: integerReadValueFromPointer(name, shift, minRange !== 0),
        destructorFunction: null
      });
    }
    function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
      ];
      var TA = typeMapping[dataTypeIndex];
      function decodeMemoryView(handle) {
        handle = handle >> 2;
        var heap = HEAPU32;
        var size = heap[handle];
        var data = heap[handle + 1];
        return new TA(buffer, data, size);
      }
      name = readLatin1String(name);
      registerType(rawType, {
        name,
        fromWireType: decodeMemoryView,
        argPackAdvance: 8,
        readValueFromPointer: decodeMemoryView
      }, { ignoreDuplicateRegistrations: true });
    }
    function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8 = name === "std::string";
      registerType(rawType, {
        name,
        fromWireType: function(value) {
          var length = HEAPU32[value >> 2];
          var str;
          if (stdStringIsUTF8) {
            var endChar = HEAPU8[value + 4 + length];
            var endCharSwap = 0;
            if (endChar != 0) {
              endCharSwap = endChar;
              HEAPU8[value + 4 + length] = 0;
            }
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i;
              if (HEAPU8[currentBytePtr] == 0) {
                var stringSegment = UTF8ToString(decodeStartPtr);
                if (str === void 0) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + 1;
              }
            }
            if (endCharSwap != 0) {
              HEAPU8[value + 4 + length] = endCharSwap;
            }
          } else {
            var a = new Array(length);
            for (var i = 0; i < length; ++i) {
              a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
            }
            str = a.join("");
          }
          _free(value);
          return str;
        },
        toWireType: function(destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
          }
          var getLength;
          var valueIsOfTypeString = typeof value === "string";
          if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
            throwBindingError("Cannot pass non-string to std::string");
          }
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            getLength = function() {
              return lengthBytesUTF8(value);
            };
          } else {
            getLength = function() {
              return value.length;
            };
          }
          var length = getLength();
          var ptr = _malloc(4 + length + 1);
          HEAPU32[ptr >> 2] = length;
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr + 4, length + 1);
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                var charCode = value.charCodeAt(i);
                if (charCode > 255) {
                  _free(ptr);
                  throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                }
                HEAPU8[ptr + 4 + i] = charCode;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                HEAPU8[ptr + 4 + i] = value[i];
              }
            }
          }
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: function(ptr) {
          _free(ptr);
        }
      });
    }
    function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        getHeap = function() {
          return HEAPU16;
        };
        shift = 1;
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        getHeap = function() {
          return HEAPU32;
        };
        shift = 2;
      }
      registerType(rawType, {
        name,
        fromWireType: function(value) {
          var length = HEAPU32[value >> 2];
          var HEAP = getHeap();
          var str;
          var endChar = HEAP[value + 4 + length * charSize >> shift];
          var endCharSwap = 0;
          if (endChar != 0) {
            endCharSwap = endChar;
            HEAP[value + 4 + length * charSize >> shift] = 0;
          }
          var decodeStartPtr = value + 4;
          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;
            if (HEAP[currentBytePtr >> shift] == 0) {
              var stringSegment = decodeString(decodeStartPtr);
              if (str === void 0) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }
              decodeStartPtr = currentBytePtr + charSize;
            }
          }
          if (endCharSwap != 0) {
            HEAP[value + 4 + length * charSize >> shift] = endCharSwap;
          }
          _free(value);
          return str;
        },
        toWireType: function(destructors, value) {
          if (!(typeof value === "string")) {
            throwBindingError("Cannot pass non-string to C++ string type " + name);
          }
          var length = lengthBytesUTF(value);
          var ptr = _malloc(4 + length + charSize);
          HEAPU32[ptr >> 2] = length >> shift;
          encodeString(value, ptr + 4, length + charSize);
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: function(ptr) {
          _free(ptr);
        }
      });
    }
    function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name,
        argPackAdvance: 0,
        fromWireType: function() {
          return void 0;
        },
        toWireType: function(destructors, o) {
          return void 0;
        }
      });
    }
    function __emval_incref(handle) {
      if (handle > 4) {
        emval_handle_array[handle].refcount += 1;
      }
    }
    function requireRegisteredType(rawType, humanName) {
      var impl = registeredTypes[rawType];
      if (impl === void 0) {
        throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
      }
      return impl;
    }
    function __emval_take_value(type, argv) {
      type = requireRegisteredType(type, "_emval_take_value");
      var v = type["readValueFromPointer"](argv);
      return __emval_register(v);
    }
    function _abort() {
      abort();
    }
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }
    function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {
        console.error("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      var oldSize = _emscripten_get_heap_size();
      assert(requestedSize > oldSize);
      var PAGE_MULTIPLE = 65536;
      var maxHeapSize = 2147483648 - PAGE_MULTIPLE;
      if (requestedSize > maxHeapSize) {
        err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
        return false;
      }
      var minHeapSize = 16777216;
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), PAGE_MULTIPLE));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }
      err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
      return false;
    }
    var ENV = {};
    function __getExecutableName() {
      return thisProgram || "./this.program";
    }
    function _emscripten_get_environ() {
      if (!_emscripten_get_environ.strings) {
        var env2 = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
          _: __getExecutableName()
        };
        for (var x in ENV) {
          env2[x] = ENV[x];
        }
        var strings = [];
        for (var x in env2) {
          strings.push(x + "=" + env2[x]);
        }
        _emscripten_get_environ.strings = strings;
      }
      return _emscripten_get_environ.strings;
    }
    function _environ_get(__environ, environ_buf) {
      var strings = _emscripten_get_environ();
      var bufSize = 0;
      strings.forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = _emscripten_get_environ();
      HEAP32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[penviron_buf_size >> 2] = bufSize;
      return 0;
    }
    function _fd_close(fd) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_fdstat_get(fd, pbuf) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
        HEAP8[pbuf >> 0] = type;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_read(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doReadv(stream, iov, iovcnt);
        HEAP32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var HIGH_OFFSET = 4294967296;
        var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
        var DOUBLE_LIMIT = 9007199254740992;
        if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
          return -61;
        }
        FS.llseek(stream, offset, whence);
        tempI64 = [
          stream.position >>> 0,
          (tempDouble = stream.position, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)
        ], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
        if (stream.getdents && offset === 0 && whence === 0)
          stream.getdents = null;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doWritev(stream, iov, iovcnt);
        HEAP32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
          abort(e);
        return e.errno;
      }
    }
    function _gethostbyname(name) {
      name = UTF8ToString(name);
      var ret = _malloc(20);
      var nameBuf = _malloc(name.length + 1);
      stringToUTF8(name, nameBuf, name.length + 1);
      HEAP32[ret >> 2] = nameBuf;
      var aliasesBuf = _malloc(4);
      HEAP32[aliasesBuf >> 2] = 0;
      HEAP32[ret + 4 >> 2] = aliasesBuf;
      var afinet = 2;
      HEAP32[ret + 8 >> 2] = afinet;
      HEAP32[ret + 12 >> 2] = 4;
      var addrListBuf = _malloc(12);
      HEAP32[addrListBuf >> 2] = addrListBuf + 8;
      HEAP32[addrListBuf + 4 >> 2] = 0;
      HEAP32[addrListBuf + 8 >> 2] = __inet_pton4_raw(DNS.lookup_name(name));
      HEAP32[ret + 16 >> 2] = addrListBuf;
      return ret;
    }
    function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[ptr >> 2] = now / 1e3 | 0;
      HEAP32[ptr + 4 >> 2] = now % 1e3 * 1e3 | 0;
      return 0;
    }
    var ___tm_current = 2400384;
    stringToUTF8("GMT", 2400432, 4);
    function _tzset() {
      if (_tzset.called)
        return;
      _tzset.called = true;
      HEAP32[__get_timezone() >> 2] = new Date().getTimezoneOffset() * 60;
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      HEAP32[__get_daylight() >> 2] = Number(winter.getTimezoneOffset() != summer.getTimezoneOffset());
      function extractZone(date) {
        var match = date.toTimeString().match(/\\(([A-Za-z ]+)\\)$/);
        return match ? match[1] : "GMT";
      }
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = allocateUTF8(winterName);
      var summerNamePtr = allocateUTF8(summerName);
      if (summer.getTimezoneOffset() < winter.getTimezoneOffset()) {
        HEAP32[__get_tzname() >> 2] = winterNamePtr;
        HEAP32[__get_tzname() + 4 >> 2] = summerNamePtr;
      } else {
        HEAP32[__get_tzname() >> 2] = summerNamePtr;
        HEAP32[__get_tzname() + 4 >> 2] = winterNamePtr;
      }
    }
    function _localtime_r(time, tmPtr) {
      _tzset();
      var date = new Date(HEAP32[time >> 2] * 1e3);
      HEAP32[tmPtr >> 2] = date.getSeconds();
      HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
      HEAP32[tmPtr + 8 >> 2] = date.getHours();
      HEAP32[tmPtr + 12 >> 2] = date.getDate();
      HEAP32[tmPtr + 16 >> 2] = date.getMonth();
      HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
      HEAP32[tmPtr + 24 >> 2] = date.getDay();
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
      HEAP32[tmPtr + 28 >> 2] = yday;
      HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
      HEAP32[tmPtr + 32 >> 2] = dst;
      var zonePtr = HEAP32[__get_tzname() + (dst ? 4 : 0) >> 2];
      HEAP32[tmPtr + 40 >> 2] = zonePtr;
      return tmPtr;
    }
    function _localtime(time) {
      return _localtime_r(time, ___tm_current);
    }
    function _setTempRet0($i) {
    }
    function __isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
      }
      return sum;
    }
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1);
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate;
        }
      }
      return newDate;
    }
    function _strftime(s, maxsize, format, tm) {
      var tm_zone = HEAP32[tm + 40 >> 2];
      var date = {
        tm_sec: HEAP32[tm >> 2],
        tm_min: HEAP32[tm + 4 >> 2],
        tm_hour: HEAP32[tm + 8 >> 2],
        tm_mday: HEAP32[tm + 12 >> 2],
        tm_mon: HEAP32[tm + 16 >> 2],
        tm_year: HEAP32[tm + 20 >> 2],
        tm_wday: HEAP32[tm + 24 >> 2],
        tm_yday: HEAP32[tm + 28 >> 2],
        tm_isdst: HEAP32[tm + 32 >> 2],
        tm_gmtoff: HEAP32[tm + 36 >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
      };
      var pattern = UTF8ToString(format);
      var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
      }
      var WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      function leadingSomething(value, digits, character) {
        var str = typeof value === "number" ? value.toString() : value || "";
        while (str.length < digits) {
          str = character[0] + str;
        }
        return str;
      }
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0");
      }
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0;
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate());
          }
        }
        return compare;
      }
      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30);
        }
      }
      function getWeekBasedYear(date2) {
        var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1;
          } else {
            return thisDate.getFullYear();
          }
        } else {
          return thisDate.getFullYear() - 1;
        }
      }
      var EXPANSION_RULES_2 = {
        "%a": function(date2) {
          return WEEKDAYS[date2.tm_wday].substring(0, 3);
        },
        "%A": function(date2) {
          return WEEKDAYS[date2.tm_wday];
        },
        "%b": function(date2) {
          return MONTHS[date2.tm_mon].substring(0, 3);
        },
        "%B": function(date2) {
          return MONTHS[date2.tm_mon];
        },
        "%C": function(date2) {
          var year = date2.tm_year + 1900;
          return leadingNulls(year / 100 | 0, 2);
        },
        "%d": function(date2) {
          return leadingNulls(date2.tm_mday, 2);
        },
        "%e": function(date2) {
          return leadingSomething(date2.tm_mday, 2, " ");
        },
        "%g": function(date2) {
          return getWeekBasedYear(date2).toString().substring(2);
        },
        "%G": function(date2) {
          return getWeekBasedYear(date2);
        },
        "%H": function(date2) {
          return leadingNulls(date2.tm_hour, 2);
        },
        "%I": function(date2) {
          var twelveHour = date2.tm_hour;
          if (twelveHour == 0)
            twelveHour = 12;
          else if (twelveHour > 12)
            twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        "%j": function(date2) {
          return leadingNulls(date2.tm_mday + __arraySum(__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
        },
        "%m": function(date2) {
          return leadingNulls(date2.tm_mon + 1, 2);
        },
        "%M": function(date2) {
          return leadingNulls(date2.tm_min, 2);
        },
        "%n": function() {
          return "\\n";
        },
        "%p": function(date2) {
          if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
            return "AM";
          } else {
            return "PM";
          }
        },
        "%S": function(date2) {
          return leadingNulls(date2.tm_sec, 2);
        },
        "%t": function() {
          return "	";
        },
        "%u": function(date2) {
          return date2.tm_wday || 7;
        },
        "%U": function(date2) {
          var janFirst = new Date(date2.tm_year + 1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
          var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
          if (compareByDay(firstSunday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
            var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
            var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
        },
        "%V": function(date2) {
          var janFourthThisYear = new Date(date2.tm_year + 1900, 0, 4);
          var janFourthNextYear = new Date(date2.tm_year + 1901, 0, 4);
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
          var endDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            return "53";
          }
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            return "01";
          }
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date2.tm_year + 1900) {
            daysDifference = date2.tm_yday + 32 - firstWeekStartThisYear.getDate();
          } else {
            daysDifference = date2.tm_yday + 1 - firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference / 7), 2);
        },
        "%w": function(date2) {
          return date2.tm_wday;
        },
        "%W": function(date2) {
          var janFirst = new Date(date2.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
          var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
            var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
            var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
        },
        "%y": function(date2) {
          return (date2.tm_year + 1900).toString().substring(2);
        },
        "%Y": function(date2) {
          return date2.tm_year + 1900;
        },
        "%z": function(date2) {
          var off = date2.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          off = off / 60 * 100 + off % 60;
          return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
        },
        "%Z": function(date2) {
          return date2.tm_zone;
        },
        "%%": function() {
          return "%";
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
        }
      }
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1;
    }
    function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm);
    }
    function _time(ptr) {
      var ret = Date.now() / 1e3 | 0;
      if (ptr) {
        HEAP32[ptr >> 2] = ret;
      }
      return ret;
    }
    function readAsmConstArgs(sigPtr, buf) {
      if (!readAsmConstArgs.array) {
        readAsmConstArgs.array = [];
      }
      var args = readAsmConstArgs.array;
      args.length = 0;
      var ch;
      while (ch = HEAPU8[sigPtr++]) {
        if (ch === 100 || ch === 102) {
          buf = buf + 7 & ~7;
          args.push(HEAPF64[buf >> 3]);
          buf += 8;
        } else if (ch === 105) {
          buf = buf + 3 & ~3;
          args.push(HEAP32[buf >> 2]);
          buf += 4;
        } else
          abort("unexpected char in asm const signature " + ch);
      }
      return args;
    }
    var FSNode = function(parent, name, mode, rdev) {
      if (!parent) {
        parent = this;
      }
      this.parent = parent;
      this.mount = parent.mount;
      this.mounted = null;
      this.id = FS.nextInode++;
      this.name = name;
      this.mode = mode;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = rdev;
    };
    var readMode = 292 | 73;
    var writeMode = 146;
    Object.defineProperties(FSNode.prototype, {
      read: {
        get: function() {
          return (this.mode & readMode) === readMode;
        },
        set: function(val) {
          val ? this.mode |= readMode : this.mode &= ~readMode;
        }
      },
      write: {
        get: function() {
          return (this.mode & writeMode) === writeMode;
        },
        set: function(val) {
          val ? this.mode |= writeMode : this.mode &= ~writeMode;
        }
      },
      isFolder: {
        get: function() {
          return FS.isDir(this.mode);
        }
      },
      isDevice: {
        get: function() {
          return FS.isChrdev(this.mode);
        }
      }
    });
    FS.FSNode = FSNode;
    FS.staticInit();
    Module["FS_createFolder"] = FS.createFolder;
    Module["FS_createPath"] = FS.createPath;
    Module["FS_createDataFile"] = FS.createDataFile;
    Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
    Module["FS_createLazyFile"] = FS.createLazyFile;
    Module["FS_createLink"] = FS.createLink;
    Module["FS_createDevice"] = FS.createDevice;
    Module["FS_unlink"] = FS.unlink;
    embind_init_charCodes();
    BindingError = Module["BindingError"] = extendError(Error, "BindingError");
    InternalError = Module["InternalError"] = extendError(Error, "InternalError");
    init_ClassHandle();
    init_RegisteredPointer();
    init_embind();
    UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
    init_emval();
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull)
        u8array.length = numBytesWritten;
      return u8array;
    }
    var asmLibraryArg = {
      __cxa_allocate_exception: ___cxa_allocate_exception,
      __cxa_throw: ___cxa_throw,
      __handle_stack_overflow: ___handle_stack_overflow,
      __map_file: ___map_file,
      __syscall102: ___syscall102,
      __syscall12: ___syscall12,
      __syscall142: ___syscall142,
      __syscall183: ___syscall183,
      __syscall195: ___syscall195,
      __syscall197: ___syscall197,
      __syscall221: ___syscall221,
      __syscall3: ___syscall3,
      __syscall39: ___syscall39,
      __syscall5: ___syscall5,
      __syscall54: ___syscall54,
      __syscall85: ___syscall85,
      __syscall91: ___syscall91,
      _embind_register_bool: __embind_register_bool,
      _embind_register_class: __embind_register_class,
      _embind_register_class_class_function: __embind_register_class_class_function,
      _embind_register_class_constructor: __embind_register_class_constructor,
      _embind_register_class_function: __embind_register_class_function,
      _embind_register_emval: __embind_register_emval,
      _embind_register_float: __embind_register_float,
      _embind_register_function: __embind_register_function,
      _embind_register_integer: __embind_register_integer,
      _embind_register_memory_view: __embind_register_memory_view,
      _embind_register_std_string: __embind_register_std_string,
      _embind_register_std_wstring: __embind_register_std_wstring,
      _embind_register_void: __embind_register_void,
      _emval_decref: __emval_decref,
      _emval_incref: __emval_incref,
      _emval_take_value: __emval_take_value,
      abort: _abort,
      connectMemory,
      emscripten_asm_const_iii: _emscripten_asm_const_iii,
      emscripten_memcpy_big: _emscripten_memcpy_big,
      emscripten_resize_heap: _emscripten_resize_heap,
      environ_get: _environ_get,
      environ_sizes_get: _environ_sizes_get,
      fd_close: _fd_close,
      fd_fdstat_get: _fd_fdstat_get,
      fd_read: _fd_read,
      fd_seek: _fd_seek,
      fd_write: _fd_write,
      gethostbyname: _gethostbyname,
      gettimeofday: _gettimeofday,
      localtime: _localtime,
      memory: wasmMemory,
      setTempRet0: _setTempRet0,
      strftime: _strftime,
      strftime_l: _strftime_l,
      table: wasmTable,
      time: _time
    };
    var asm = createWasm();
    Module["asm"] = asm;
    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__wasm_call_ctors"].apply(null, arguments);
    };
    Module["_fflush"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["fflush"].apply(null, arguments);
    };
    Module["_expandCDSPFromString"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["expandCDSPFromString"].apply(null, arguments);
    };
    Module["_generateCAuxFilesFromString"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["generateCAuxFilesFromString"].apply(null, arguments);
    };
    Module["_freeCMemory"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["freeCMemory"].apply(null, arguments);
    };
    var _free = Module["_free"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["free"].apply(null, arguments);
    };
    Module["_getCLibFaustVersion"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getCLibFaustVersion"].apply(null, arguments);
    };
    Module["_getErrorAfterException"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getErrorAfterException"].apply(null, arguments);
    };
    Module["_cleanupAfterException"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["cleanupAfterException"].apply(null, arguments);
    };
    var _malloc = Module["_malloc"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["malloc"].apply(null, arguments);
    };
    Module["___errno_location"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__errno_location"].apply(null, arguments);
    };
    var _htons = Module["_htons"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["htons"].apply(null, arguments);
    };
    Module["___em_js__connectMemory"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__em_js__connectMemory"].apply(null, arguments);
    };
    Module["_deleteAllWasmCDSPFactories"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["deleteAllWasmCDSPFactories"].apply(null, arguments);
    };
    Module["_createWasmCDSPFactoryFromString"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["createWasmCDSPFactoryFromString"].apply(null, arguments);
    };
    Module["_getWasmCModule"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getWasmCModule"].apply(null, arguments);
    };
    Module["_getWasmCModuleSize"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getWasmCModuleSize"].apply(null, arguments);
    };
    Module["_getWasmCHelpers"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["getWasmCHelpers"].apply(null, arguments);
    };
    Module["_freeWasmCModule"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["freeWasmCModule"].apply(null, arguments);
    };
    var _ntohs = Module["_ntohs"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["ntohs"].apply(null, arguments);
    };
    var __get_tzname = Module["__get_tzname"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["_get_tzname"].apply(null, arguments);
    };
    var __get_daylight = Module["__get_daylight"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["_get_daylight"].apply(null, arguments);
    };
    var __get_timezone = Module["__get_timezone"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["_get_timezone"].apply(null, arguments);
    };
    var ___getTypeName = Module["___getTypeName"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__getTypeName"].apply(null, arguments);
    };
    Module["___embind_register_native_and_builtin_types"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__embind_register_native_and_builtin_types"].apply(null, arguments);
    };
    Module["___set_stack_limit"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["__set_stack_limit"].apply(null, arguments);
    };
    var stackSave = Module["stackSave"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["stackSave"].apply(null, arguments);
    };
    var stackAlloc = Module["stackAlloc"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["stackAlloc"].apply(null, arguments);
    };
    var stackRestore = Module["stackRestore"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["stackRestore"].apply(null, arguments);
    };
    Module["dynCall_ii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_ii"].apply(null, arguments);
    };
    Module["dynCall_vi"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vi"].apply(null, arguments);
    };
    Module["dynCall_vii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vii"].apply(null, arguments);
    };
    Module["dynCall_iiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiii"].apply(null, arguments);
    };
    Module["dynCall_viijii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viijii"].apply(null, arguments);
    };
    Module["dynCall_viiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiii"].apply(null, arguments);
    };
    Module["dynCall_iii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iii"].apply(null, arguments);
    };
    Module["dynCall_iiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiii"].apply(null, arguments);
    };
    Module["dynCall_viddddii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddddii"].apply(null, arguments);
    };
    Module["dynCall_viddddiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddddiii"].apply(null, arguments);
    };
    Module["dynCall_viddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddd"].apply(null, arguments);
    };
    Module["dynCall_vidddi"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vidddi"].apply(null, arguments);
    };
    Module["dynCall_vidddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vidddd"].apply(null, arguments);
    };
    Module["dynCall_viddii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddii"].apply(null, arguments);
    };
    Module["dynCall_viddi"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viddi"].apply(null, arguments);
    };
    Module["dynCall_viiiiddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiiddd"].apply(null, arguments);
    };
    Module["dynCall_viii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viii"].apply(null, arguments);
    };
    Module["dynCall_v"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_v"].apply(null, arguments);
    };
    Module["dynCall_viiiffff"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiffff"].apply(null, arguments);
    };
    Module["dynCall_viiiff"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiff"].apply(null, arguments);
    };
    Module["dynCall_iiiiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiii"].apply(null, arguments);
    };
    Module["dynCall_iiid"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiid"].apply(null, arguments);
    };
    Module["dynCall_viiidddd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiidddd"].apply(null, arguments);
    };
    Module["dynCall_viiidd"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiidd"].apply(null, arguments);
    };
    Module["dynCall_viiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiii"].apply(null, arguments);
    };
    Module["dynCall_di"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_di"].apply(null, arguments);
    };
    Module["dynCall_vid"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vid"].apply(null, arguments);
    };
    Module["dynCall_i"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_i"].apply(null, arguments);
    };
    Module["dynCall_viiif"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiif"].apply(null, arguments);
    };
    Module["dynCall_fiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_fiii"].apply(null, arguments);
    };
    Module["dynCall_vidiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_vidiii"].apply(null, arguments);
    };
    Module["dynCall_viif"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viif"].apply(null, arguments);
    };
    Module["dynCall_fii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_fii"].apply(null, arguments);
    };
    Module["dynCall_jiji"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_jiji"].apply(null, arguments);
    };
    Module["dynCall_iidiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iidiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiiiii"].apply(null, arguments);
    };
    Module["dynCall_iiiiij"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiij"].apply(null, arguments);
    };
    Module["dynCall_iiiiid"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiid"].apply(null, arguments);
    };
    Module["dynCall_iiiiijj"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiijj"].apply(null, arguments);
    };
    Module["dynCall_iiiiiijj"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_iiiiiijj"].apply(null, arguments);
    };
    Module["dynCall_viiiiii"] = function() {
      assert(runtimeInitialized, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
      assert(!runtimeExited, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
      return Module["asm"]["dynCall_viiiiii"].apply(null, arguments);
    };
    Module["asm"] = asm;
    if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString"))
      Module["intArrayFromString"] = function() {
        abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString"))
      Module["intArrayToString"] = function() {
        abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ccall"))
      Module["ccall"] = function() {
        abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["cwrap"] = cwrap;
    if (!Object.getOwnPropertyDescriptor(Module, "setValue"))
      Module["setValue"] = function() {
        abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getValue"))
      Module["getValue"] = function() {
        abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "allocate"))
      Module["allocate"] = function() {
        abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["getMemory"] = getMemory;
    if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString"))
      Module["UTF8ArrayToString"] = function() {
        abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["UTF8ToString"] = UTF8ToString;
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array"))
      Module["stringToUTF8Array"] = function() {
        abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["stringToUTF8"] = stringToUTF8;
    Module["lengthBytesUTF8"] = lengthBytesUTF8;
    if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
      Module["stackTrace"] = function() {
        abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun"))
      Module["addOnPreRun"] = function() {
        abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnInit"))
      Module["addOnInit"] = function() {
        abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain"))
      Module["addOnPreMain"] = function() {
        abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnExit"))
      Module["addOnExit"] = function() {
        abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun"))
      Module["addOnPostRun"] = function() {
        abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory"))
      Module["writeStringToMemory"] = function() {
        abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory"))
      Module["writeArrayToMemory"] = function() {
        abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory"))
      Module["writeAsciiToMemory"] = function() {
        abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["addRunDependency"] = addRunDependency;
    Module["removeRunDependency"] = removeRunDependency;
    Module["FS_createFolder"] = FS.createFolder;
    Module["FS_createPath"] = FS.createPath;
    Module["FS_createDataFile"] = FS.createDataFile;
    Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
    Module["FS_createLazyFile"] = FS.createLazyFile;
    Module["FS_createLink"] = FS.createLink;
    Module["FS_createDevice"] = FS.createDevice;
    Module["FS_unlink"] = FS.unlink;
    if (!Object.getOwnPropertyDescriptor(Module, "dynamicAlloc"))
      Module["dynamicAlloc"] = function() {
        abort("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "loadDynamicLibrary"))
      Module["loadDynamicLibrary"] = function() {
        abort("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "loadWebAssemblyModule"))
      Module["loadWebAssemblyModule"] = function() {
        abort("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getLEB"))
      Module["getLEB"] = function() {
        abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables"))
      Module["getFunctionTables"] = function() {
        abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables"))
      Module["alignFunctionTables"] = function() {
        abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions"))
      Module["registerFunctions"] = function() {
        abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "addFunction"))
      Module["addFunction"] = function() {
        abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "removeFunction"))
      Module["removeFunction"] = function() {
        abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper"))
      Module["getFuncWrapper"] = function() {
        abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint"))
      Module["prettyPrint"] = function() {
        abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt"))
      Module["makeBigInt"] = function() {
        abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "dynCall"))
      Module["dynCall"] = function() {
        abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting"))
      Module["getCompilerSetting"] = function() {
        abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "print"))
      Module["print"] = function() {
        abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "printErr"))
      Module["printErr"] = function() {
        abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0"))
      Module["getTempRet0"] = function() {
        abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0"))
      Module["setTempRet0"] = function() {
        abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "callMain"))
      Module["callMain"] = function() {
        abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "abort"))
      Module["abort"] = function() {
        abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8"))
      Module["stringToNewUTF8"] = function() {
        abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer"))
      Module["emscripten_realloc_buffer"] = function() {
        abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ENV"))
      Module["ENV"] = function() {
        abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "setjmpId"))
      Module["setjmpId"] = function() {
        abort("'setjmpId' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES"))
      Module["ERRNO_CODES"] = function() {
        abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES"))
      Module["ERRNO_MESSAGES"] = function() {
        abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "DNS"))
      Module["DNS"] = function() {
        abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES"))
      Module["GAI_ERRNO_MESSAGES"] = function() {
        abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "Protocols"))
      Module["Protocols"] = function() {
        abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "Sockets"))
      Module["Sockets"] = function() {
        abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE"))
      Module["UNWIND_CACHE"] = function() {
        abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs"))
      Module["readAsmConstArgs"] = function() {
        abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q"))
      Module["jstoi_q"] = function() {
        abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s"))
      Module["jstoi_s"] = function() {
        abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PATH"))
      Module["PATH"] = function() {
        abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS"))
      Module["PATH_FS"] = function() {
        abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS"))
      Module["SYSCALLS"] = function() {
        abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2"))
      Module["syscallMmap2"] = function() {
        abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap"))
      Module["syscallMunmap"] = function() {
        abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "JSEvents"))
      Module["JSEvents"] = function() {
        abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "demangle"))
      Module["demangle"] = function() {
        abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "demangleAll"))
      Module["demangleAll"] = function() {
        abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace"))
      Module["jsStackTrace"] = function() {
        abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackTrace"))
      Module["stackTrace"] = function() {
        abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64"))
      Module["writeI53ToI64"] = function() {
        abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped"))
      Module["writeI53ToI64Clamped"] = function() {
        abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling"))
      Module["writeI53ToI64Signaling"] = function() {
        abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped"))
      Module["writeI53ToU64Clamped"] = function() {
        abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling"))
      Module["writeI53ToU64Signaling"] = function() {
        abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64"))
      Module["readI53FromI64"] = function() {
        abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64"))
      Module["readI53FromU64"] = function() {
        abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53"))
      Module["convertI32PairToI53"] = function() {
        abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53"))
      Module["convertU32PairToI53"] = function() {
        abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "Browser"))
      Module["Browser"] = function() {
        abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["FS"] = FS;
    if (!Object.getOwnPropertyDescriptor(Module, "MEMFS"))
      Module["MEMFS"] = function() {
        abort("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "TTY"))
      Module["TTY"] = function() {
        abort("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS"))
      Module["PIPEFS"] = function() {
        abort("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS"))
      Module["SOCKFS"] = function() {
        abort("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GL"))
      Module["GL"] = function() {
        abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet"))
      Module["emscriptenWebGLGet"] = function() {
        abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData"))
      Module["emscriptenWebGLGetTexPixelData"] = function() {
        abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform"))
      Module["emscriptenWebGLGetUniform"] = function() {
        abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib"))
      Module["emscriptenWebGLGetVertexAttrib"] = function() {
        abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "AL"))
      Module["AL"] = function() {
        abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SDL"))
      Module["SDL"] = function() {
        abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx"))
      Module["SDL_gfx"] = function() {
        abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLUT"))
      Module["GLUT"] = function() {
        abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "EGL"))
      Module["EGL"] = function() {
        abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window"))
      Module["GLFW_Window"] = function() {
        abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLFW"))
      Module["GLFW"] = function() {
        abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "GLEW"))
      Module["GLEW"] = function() {
        abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "IDBStore"))
      Module["IDBStore"] = function() {
        abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError"))
      Module["runAndAbortIfError"] = function() {
        abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_handle_array"))
      Module["emval_handle_array"] = function() {
        abort("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_free_list"))
      Module["emval_free_list"] = function() {
        abort("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_symbols"))
      Module["emval_symbols"] = function() {
        abort("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_emval"))
      Module["init_emval"] = function() {
        abort("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "count_emval_handles"))
      Module["count_emval_handles"] = function() {
        abort("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "get_first_emval"))
      Module["get_first_emval"] = function() {
        abort("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getStringOrSymbol"))
      Module["getStringOrSymbol"] = function() {
        abort("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "requireHandle"))
      Module["requireHandle"] = function() {
        abort("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_newers"))
      Module["emval_newers"] = function() {
        abort("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "craftEmvalAllocator"))
      Module["craftEmvalAllocator"] = function() {
        abort("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_get_global"))
      Module["emval_get_global"] = function() {
        abort("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "emval_methodCallers"))
      Module["emval_methodCallers"] = function() {
        abort("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "InternalError"))
      Module["InternalError"] = function() {
        abort("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "BindingError"))
      Module["BindingError"] = function() {
        abort("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UnboundTypeError"))
      Module["UnboundTypeError"] = function() {
        abort("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "PureVirtualError"))
      Module["PureVirtualError"] = function() {
        abort("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_embind"))
      Module["init_embind"] = function() {
        abort("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwInternalError"))
      Module["throwInternalError"] = function() {
        abort("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwBindingError"))
      Module["throwBindingError"] = function() {
        abort("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwUnboundTypeError"))
      Module["throwUnboundTypeError"] = function() {
        abort("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ensureOverloadTable"))
      Module["ensureOverloadTable"] = function() {
        abort("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "exposePublicSymbol"))
      Module["exposePublicSymbol"] = function() {
        abort("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "replacePublicSymbol"))
      Module["replacePublicSymbol"] = function() {
        abort("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "extendError"))
      Module["extendError"] = function() {
        abort("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "createNamedFunction"))
      Module["createNamedFunction"] = function() {
        abort("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registeredInstances"))
      Module["registeredInstances"] = function() {
        abort("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getBasestPointer"))
      Module["getBasestPointer"] = function() {
        abort("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registerInheritedInstance"))
      Module["registerInheritedInstance"] = function() {
        abort("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "unregisterInheritedInstance"))
      Module["unregisterInheritedInstance"] = function() {
        abort("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstance"))
      Module["getInheritedInstance"] = function() {
        abort("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getInheritedInstanceCount"))
      Module["getInheritedInstanceCount"] = function() {
        abort("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getLiveInheritedInstances"))
      Module["getLiveInheritedInstances"] = function() {
        abort("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registeredTypes"))
      Module["registeredTypes"] = function() {
        abort("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "awaitingDependencies"))
      Module["awaitingDependencies"] = function() {
        abort("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "typeDependencies"))
      Module["typeDependencies"] = function() {
        abort("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registeredPointers"))
      Module["registeredPointers"] = function() {
        abort("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "registerType"))
      Module["registerType"] = function() {
        abort("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "whenDependentTypesAreResolved"))
      Module["whenDependentTypesAreResolved"] = function() {
        abort("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "embind_charCodes"))
      Module["embind_charCodes"] = function() {
        abort("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "embind_init_charCodes"))
      Module["embind_init_charCodes"] = function() {
        abort("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "readLatin1String"))
      Module["readLatin1String"] = function() {
        abort("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getTypeName"))
      Module["getTypeName"] = function() {
        abort("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "heap32VectorToArray"))
      Module["heap32VectorToArray"] = function() {
        abort("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "requireRegisteredType"))
      Module["requireRegisteredType"] = function() {
        abort("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "getShiftFromSize"))
      Module["getShiftFromSize"] = function() {
        abort("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "integerReadValueFromPointer"))
      Module["integerReadValueFromPointer"] = function() {
        abort("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "enumReadValueFromPointer"))
      Module["enumReadValueFromPointer"] = function() {
        abort("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "floatReadValueFromPointer"))
      Module["floatReadValueFromPointer"] = function() {
        abort("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "simpleReadValueFromPointer"))
      Module["simpleReadValueFromPointer"] = function() {
        abort("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "runDestructors"))
      Module["runDestructors"] = function() {
        abort("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "new_"))
      Module["new_"] = function() {
        abort("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "craftInvokerFunction"))
      Module["craftInvokerFunction"] = function() {
        abort("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "embind__requireFunction"))
      Module["embind__requireFunction"] = function() {
        abort("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "tupleRegistrations"))
      Module["tupleRegistrations"] = function() {
        abort("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "structRegistrations"))
      Module["structRegistrations"] = function() {
        abort("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "genericPointerToWireType"))
      Module["genericPointerToWireType"] = function() {
        abort("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "constNoSmartPtrRawPointerToWireType"))
      Module["constNoSmartPtrRawPointerToWireType"] = function() {
        abort("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "nonConstNoSmartPtrRawPointerToWireType"))
      Module["nonConstNoSmartPtrRawPointerToWireType"] = function() {
        abort("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_RegisteredPointer"))
      Module["init_RegisteredPointer"] = function() {
        abort("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer"))
      Module["RegisteredPointer"] = function() {
        abort("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_getPointee"))
      Module["RegisteredPointer_getPointee"] = function() {
        abort("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_destructor"))
      Module["RegisteredPointer_destructor"] = function() {
        abort("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_deleteObject"))
      Module["RegisteredPointer_deleteObject"] = function() {
        abort("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredPointer_fromWireType"))
      Module["RegisteredPointer_fromWireType"] = function() {
        abort("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "runDestructor"))
      Module["runDestructor"] = function() {
        abort("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "releaseClassHandle"))
      Module["releaseClassHandle"] = function() {
        abort("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "finalizationGroup"))
      Module["finalizationGroup"] = function() {
        abort("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer_deps"))
      Module["detachFinalizer_deps"] = function() {
        abort("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "detachFinalizer"))
      Module["detachFinalizer"] = function() {
        abort("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "attachFinalizer"))
      Module["attachFinalizer"] = function() {
        abort("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "makeClassHandle"))
      Module["makeClassHandle"] = function() {
        abort("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "init_ClassHandle"))
      Module["init_ClassHandle"] = function() {
        abort("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle"))
      Module["ClassHandle"] = function() {
        abort("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isAliasOf"))
      Module["ClassHandle_isAliasOf"] = function() {
        abort("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "throwInstanceAlreadyDeleted"))
      Module["throwInstanceAlreadyDeleted"] = function() {
        abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_clone"))
      Module["ClassHandle_clone"] = function() {
        abort("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_delete"))
      Module["ClassHandle_delete"] = function() {
        abort("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "deletionQueue"))
      Module["deletionQueue"] = function() {
        abort("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_isDeleted"))
      Module["ClassHandle_isDeleted"] = function() {
        abort("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "ClassHandle_deleteLater"))
      Module["ClassHandle_deleteLater"] = function() {
        abort("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "flushPendingDeletes"))
      Module["flushPendingDeletes"] = function() {
        abort("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "delayFunction"))
      Module["delayFunction"] = function() {
        abort("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "setDelayFunction"))
      Module["setDelayFunction"] = function() {
        abort("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "RegisteredClass"))
      Module["RegisteredClass"] = function() {
        abort("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "shallowCopyInternalPointer"))
      Module["shallowCopyInternalPointer"] = function() {
        abort("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "downcastPointer"))
      Module["downcastPointer"] = function() {
        abort("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "upcastPointer"))
      Module["upcastPointer"] = function() {
        abort("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "validateThis"))
      Module["validateThis"] = function() {
        abort("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "char_0"))
      Module["char_0"] = function() {
        abort("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "char_9"))
      Module["char_9"] = function() {
        abort("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "makeLegalFunctionName"))
      Module["makeLegalFunctionName"] = function() {
        abort("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "warnOnce"))
      Module["warnOnce"] = function() {
        abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackSave"))
      Module["stackSave"] = function() {
        abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackRestore"))
      Module["stackRestore"] = function() {
        abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc"))
      Module["stackAlloc"] = function() {
        abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString"))
      Module["AsciiToString"] = function() {
        abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii"))
      Module["stringToAscii"] = function() {
        abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString"))
      Module["UTF16ToString"] = function() {
        abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16"))
      Module["stringToUTF16"] = function() {
        abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16"))
      Module["lengthBytesUTF16"] = function() {
        abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString"))
      Module["UTF32ToString"] = function() {
        abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32"))
      Module["stringToUTF32"] = function() {
        abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32"))
      Module["lengthBytesUTF32"] = function() {
        abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8"))
      Module["allocateUTF8"] = function() {
        abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack"))
      Module["allocateUTF8OnStack"] = function() {
        abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module["writeStackCookie"] = writeStackCookie;
    Module["checkStackCookie"] = checkStackCookie;
    Module["abortStackOverflow"] = abortStackOverflow;
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL"))
      Object.defineProperty(Module, "ALLOC_NORMAL", {
        configurable: true,
        get: function() {
          abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK"))
      Object.defineProperty(Module, "ALLOC_STACK", {
        configurable: true,
        get: function() {
          abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_DYNAMIC"))
      Object.defineProperty(Module, "ALLOC_DYNAMIC", {
        configurable: true,
        get: function() {
          abort("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NONE"))
      Object.defineProperty(Module, "ALLOC_NONE", {
        configurable: true,
        get: function() {
          abort("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        }
      });
    var calledRun;
    Module["then"] = function(func) {
      if (calledRun) {
        func(Module);
      } else {
        var old = Module["onRuntimeInitialized"];
        Module["onRuntimeInitialized"] = function() {
          if (old)
            old();
          func(Module);
        };
      }
      return Module;
    };
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    dependenciesFulfilled = function runCaller() {
      if (!calledRun)
        run();
      if (!calledRun)
        dependenciesFulfilled = runCaller;
    };
    function run(args) {
      if (runDependencies > 0) {
        return;
      }
      writeStackCookie();
      preRun();
      if (runDependencies > 0)
        return;
      function doRun() {
        if (calledRun)
          return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT)
          return;
        initRuntime();
        preMain();
        if (Module["onRuntimeInitialized"])
          Module["onRuntimeInitialized"]();
        assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
          setTimeout(function() {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
      checkStackCookie();
    }
    Module["run"] = run;
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    run();
    return FaustModule2;
  };
}();
var Sha1 = {};
Sha1.hash = function(msg, utf8encode) {
  utf8encode = typeof utf8encode == "undefined" ? true : utf8encode;
  if (utf8encode)
    msg = Utf8.encode(msg);
  var K = [1518500249, 1859775393, 2400959708, 3395469782];
  msg += String.fromCharCode(128);
  var l = msg.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);
  for (var i = 0; i < N; i++) {
    M[i] = new Array(16);
    for (var j = 0; j < 16; j++) {
      M[i][j] = msg.charCodeAt(i * 64 + j * 4) << 24 | msg.charCodeAt(i * 64 + j * 4 + 1) << 16 | msg.charCodeAt(i * 64 + j * 4 + 2) << 8 | msg.charCodeAt(i * 64 + j * 4 + 3);
    }
  }
  M[N - 1][14] = (msg.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (msg.length - 1) * 8 & 4294967295;
  var H0 = 1732584193;
  var H1 = 4023233417;
  var H2 = 2562383102;
  var H3 = 271733878;
  var H4 = 3285377520;
  var W = new Array(80);
  var a, b, c, d, e;
  for (var i = 0; i < N; i++) {
    for (var t = 0; t < 16; t++)
      W[t] = M[i][t];
    for (var t = 16; t < 80; t++)
      W[t] = Sha1.ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    a = H0;
    b = H1;
    c = H2;
    d = H3;
    e = H4;
    for (var t = 0; t < 80; t++) {
      var s = Math.floor(t / 20);
      var T = Sha1.ROTL(a, 5) + Sha1.f(s, b, c, d) + e + K[s] + W[t] & 4294967295;
      e = d;
      d = c;
      c = Sha1.ROTL(b, 30);
      b = a;
      a = T;
    }
    H0 = H0 + a & 4294967295;
    H1 = H1 + b & 4294967295;
    H2 = H2 + c & 4294967295;
    H3 = H3 + d & 4294967295;
    H4 = H4 + e & 4294967295;
  }
  return Sha1.toHexStr(H0) + Sha1.toHexStr(H1) + Sha1.toHexStr(H2) + Sha1.toHexStr(H3) + Sha1.toHexStr(H4);
};
Sha1.f = function(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
};
Sha1.ROTL = function(x, n) {
  return x << n | x >>> 32 - n;
};
Sha1.toHexStr = function(n) {
  var s = "", v;
  for (var i = 7; i >= 0; i--) {
    v = n >>> i * 4 & 15;
    s += v.toString(16);
  }
  return s;
};
var Utf8 = {};
Utf8.encode = function(strUni) {
  var strUtf = strUni.replace(/[\\u0080-\\u07ff]/g, function(c) {
    var cc = c.charCodeAt(0);
    return String.fromCharCode(192 | cc >> 6, 128 | cc & 63);
  });
  strUtf = strUtf.replace(/[\\u0800-\\uffff]/g, function(c) {
    var cc = c.charCodeAt(0);
    return String.fromCharCode(224 | cc >> 12, 128 | cc >> 6 & 63, 128 | cc & 63);
  });
  return strUtf;
};
Utf8.decode = function(strUtf) {
  var strUni = strUtf.replace(/[\\u00e0-\\u00ef][\\u0080-\\u00bf][\\u0080-\\u00bf]/g, function(c) {
    var cc = (c.charCodeAt(0) & 15) << 12 | (c.charCodeAt(1) & 63) << 6 | c.charCodeAt(2) & 63;
    return String.fromCharCode(cc);
  });
  strUni = strUni.replace(/[\\u00c0-\\u00df][\\u0080-\\u00bf]/g, function(c) {
    var cc = (c.charCodeAt(0) & 31) << 6 | c.charCodeAt(1) & 63;
    return String.fromCharCode(cc);
  });
  return strUni;
};
var readyResolver = {
  current: void 0
};
var readyPromise = new Promise((resolve) => {
  readyResolver.current = resolve;
});
var faust_module$1 = FaustModule({
  onRuntimeInitialized: readyResolver.current
});
faust_module$1.lengthBytesUTF8 = function(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var u = str.charCodeAt(i);
    if (u >= 55296 && u <= 57343)
      u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
    if (u <= 127) {
      ++len;
    } else if (u <= 2047) {
      len += 2;
    } else if (u <= 65535) {
      len += 3;
    } else if (u <= 2097151) {
      len += 4;
    } else if (u <= 67108863) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
};
var faust = faust || {};
faust.remap = function(v, mn0, mx0, mn1, mx1) {
  return 1 * (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;
};
faust.debug = false;
faust.createWasmCDSPFactoryFromString = faust_module$1.cwrap("createWasmCDSPFactoryFromString", "number", ["number", "number", "number", "number", "number", "number"]);
faust.deleteAllWasmCDSPFactories = faust_module$1.cwrap("deleteAllWasmCDSPFactories", null, []);
faust.expandCDSPFromString = faust_module$1.cwrap("expandCDSPFromString", "number", ["number", "number", "number", "number", "number", "number"]);
faust.getCLibFaustVersion = faust_module$1.cwrap("getCLibFaustVersion", "number", []);
faust.getWasmCModule = faust_module$1.cwrap("getWasmCModule", "number", [
  "number"
]);
faust.getWasmCModuleSize = faust_module$1.cwrap("getWasmCModuleSize", "number", [
  "number"
]);
faust.getWasmCHelpers = faust_module$1.cwrap("getWasmCHelpers", "number", [
  "number"
]);
faust.freeWasmCModule = faust_module$1.cwrap("freeWasmCModule", null, ["number"]);
faust.freeCMemory = faust_module$1.cwrap("freeCMemory", null, ["number"]);
faust.cleanupAfterException = faust_module$1.cwrap("cleanupAfterException", null, []);
faust.getErrorAfterException = faust_module$1.cwrap("getErrorAfterException", "number", []);
faust.error_msg = null;
faust.factory_number = 0;
faust.factory_table = [];
faust.getErrorMessage = function() {
  return faust.error_msg;
};
faust.getLibFaustVersion = function() {
  return faust_module$1.UTF8ToString(faust.getCLibFaustVersion());
};
faust.ab2str = function(buf) {
  if (buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  } else {
    return null;
  }
};
faust.str2ab = function(str) {
  if (str) {
    var buf = new ArrayBuffer(str.length);
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  } else {
    return null;
  }
};
faust.compileCode = function(factory_name, code, argv, internal_memory) {
  var code_size = faust_module$1.lengthBytesUTF8(code) + 1;
  var code_ptr = faust_module$1._malloc(code_size);
  var name = "FaustDSP";
  var name_size = faust_module$1.lengthBytesUTF8(name) + 1;
  var name_ptr = faust_module$1._malloc(name_size);
  var error_msg_ptr = faust_module$1._malloc(4096);
  faust_module$1.stringToUTF8(name, name_ptr, name_size);
  faust_module$1.stringToUTF8(code, code_ptr, code_size);
  var argv_aux = argv === void 0 ? new Array() : argv;
  argv_aux.push("-cn", factory_name);
  var ptr_size = 4;
  var argv_ptr = faust_module$1._malloc(argv_aux.length * ptr_size);
  var argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv_aux.length);
  for (var i = 0; i < argv_aux.length; i++) {
    var arg_ptr_size = faust_module$1.lengthBytesUTF8(argv_aux[i]) + 1;
    var arg_ptr = faust_module$1._malloc(arg_ptr_size);
    faust_module$1.stringToUTF8(argv_aux[i], arg_ptr, arg_ptr_size);
    argv_ptr_buffer[i] = arg_ptr;
  }
  try {
    var module_code_ptr = faust.createWasmCDSPFactoryFromString(name_ptr, code_ptr, argv_aux.length, argv_ptr, error_msg_ptr, internal_memory);
    faust.error_msg = faust_module$1.UTF8ToString(error_msg_ptr);
    if (module_code_ptr === 0) {
      return null;
    } else {
      var factory_code_ptr = faust.getWasmCModule(module_code_ptr);
      var factory_code_size = faust.getWasmCModuleSize(module_code_ptr);
      var factory_code = new Uint8Array(factory_code_size);
      for (var i = 0; i < factory_code_size; i++) {
        factory_code[i] = faust_module$1.HEAP8[factory_code_ptr + i];
      }
      var helpers_code_ptr = faust.getWasmCHelpers(module_code_ptr);
      var helpers_code = faust_module$1.UTF8ToString(helpers_code_ptr);
      faust_module$1._free(code_ptr);
      faust_module$1._free(name_ptr);
      faust_module$1._free(error_msg_ptr);
      faust.freeWasmCModule(module_code_ptr);
      argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv_aux.length);
      for (var i = 0; i < argv_aux.length; i++) {
        faust_module$1._free(argv_ptr_buffer[i]);
      }
      faust_module$1._free(argv_ptr);
      return { code: factory_code, code_source: code, helpers: helpers_code };
    }
  } catch (e) {
    faust.error_msg = faust_module$1.UTF8ToString(faust.getErrorAfterException());
    if (faust.error_msg === "") {
      faust.error_msg = e;
    }
    faust.cleanupAfterException();
    return null;
  }
};
faust.createDSPFactoryAux = function(code, argv, internal_memory, callback2) {
  var argv_str = "";
  for (var i = 0; i < argv.length; i++) {
    argv_str += argv[i];
  }
  var sha_key2 = Sha1.hash(code + (internal_memory ? "internal_memory" : "external_memory") + argv_str, true);
  var factory2 = faust.factory_table[sha_key2];
  if (factory2) {
    callback2(factory2);
    return;
  }
  var factory_name12 = "mydsp" + faust.factory_number;
  var factory_name22 = "effect" + faust.factory_number++;
  var code_effect = "adapt(1,1) = _; adapt(2,2) = _,_; adapt(1,2) = _ <: _,_; adapt(2,1) = _,_ :> _; adaptor(F,G) = adapt(outputs(F),inputs(G)); dsp_code = environment{";
  code_effect = code_effect.concat(code);
  code_effect = code_effect.concat("};");
  code_effect = code_effect.concat("process = adaptor(dsp_code.process, dsp_code.effect) : dsp_code.effect;");
  var res1 = faust.compileCode(factory_name12, code, argv, internal_memory);
  if (res1) {
    var res2 = faust.compileCode(factory_name22, code_effect, argv, internal_memory);
    if (res2) {
      faust.readDSPFactoryFromMachineAux(factory_name12, res1.code, res1.code_source, res1.helpers, factory_name22, res2.code, res2.code_source, res2.helpers, sha_key2, callback2);
    } else {
      faust.readDSPFactoryFromMachineAux(factory_name12, res1.code, res1.code_source, res1.helpers, null, null, null, null, sha_key2, callback2);
    }
  } else {
    callback2(null);
  }
};
faust.createDSPFactory = function(code, argv, callback2) {
  readyPromise.then(() => {
    faust.createDSPFactoryAux(code, argv, true, callback2);
  });
};
faust.ready = readyPromise;
faust.expandDSP = function(code, argv) {
  argv.push("-lang");
  argv.push("wasm");
  var code_size = faust_module$1.lengthBytesUTF8(code) + 1;
  var code_ptr = faust_module$1._malloc(code_size);
  var name = "FaustDSP";
  var name_size = faust_module$1.lengthBytesUTF8(name) + 1;
  var name_ptr = faust_module$1._malloc(name_size);
  var sha_key_ptr = faust_module$1._malloc(64);
  var error_msg_ptr = faust_module$1._malloc(4096);
  faust_module$1.stringToUTF8(name, name_ptr, name_size);
  faust_module$1.stringToUTF8(code, code_ptr, code_size);
  argv = argv === void 0 ? new Array() : argv;
  var ptr_size = 4;
  var argv_ptr = faust_module$1._malloc(argv.length * ptr_size);
  var argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv.length);
  for (var i = 0; i < argv.length; i++) {
    var arg_ptr_size = faust_module$1.lengthBytesUTF8(argv[i]) + 1;
    var arg_ptr = faust_module$1._malloc(arg_ptr_size);
    faust_module$1.stringToUTF8(argv[i], arg_ptr, arg_ptr_size);
    argv_ptr_buffer[i] = arg_ptr;
  }
  try {
    var expand_dsp_ptr = faust.expandCDSPFromString(name_ptr, code_ptr, argv.length, argv_ptr, sha_key_ptr, error_msg_ptr);
    var expand_dsp = faust_module$1.UTF8ToString(expand_dsp_ptr);
    var sha_key2 = faust_module$1.UTF8ToString(sha_key_ptr);
    faust.error_msg = faust_module$1.UTF8ToString(error_msg_ptr);
    faust_module$1._free(code_ptr);
    faust_module$1._free(name_ptr);
    faust_module$1._free(sha_key_ptr);
    faust_module$1._free(error_msg_ptr);
    faust.freeCMemory(expand_dsp_ptr);
    argv_ptr_buffer = new Int32Array(faust_module$1.HEAP32.buffer, argv_ptr, argv.length);
    for (var i = 0; i < argv.length; i++) {
      faust_module$1._free(argv_ptr_buffer[i]);
    }
    faust_module$1._free(argv_ptr);
    return expand_dsp;
  } catch (e) {
    faust.error_msg = faust_module$1.UTF8ToString(faust.getErrorAfterException());
    if (faust.error_msg === "") {
      faust.error_msg = e;
    }
    faust.cleanupAfterException();
    return null;
  }
};
faust.writeDSPFactoryToMachine = function(factory2) {
  return {
    name: factory2.name,
    code: faust.ab2str(factory2.code),
    code_source: factory2.code_source,
    helpers: factory2.helpers,
    name_effect: factory2.name_effect,
    code_effect: faust.ab2str(factory2.code_effect),
    code_source_effect: factory2.code_source_effect,
    helpers_effect: factory2.helpers_effect
  };
};
faust.readDSPFactoryFromMachine = function(machine, callback2) {
  var sha_key2 = Sha1.hash(machine.code_source, true);
  var factory2 = faust.factory_table[sha_key2];
  if (factory2) {
    callback2(factory2);
  } else {
    faust.readDSPFactoryFromMachineAux(machine.name, faust.str2ab(machine.code), machine.code_source, machine.helpers, machine.name_effect, faust.str2ab(machine.code_effect), machine.code_source_effect, machine.helpers_effect, sha_key2, callback2);
  }
};
faust.readDSPFactoryFromMachineAux = function(factory_name1, factory_code1, factory_code_source1, helpers_code1, factory_name2, factory_code2, factory_code_source2, helpers_code2, sha_key, callback) {
  WebAssembly.compile(factory_code1).then((module) => {
    var factory = {};
    factory.polyphony = [];
    factory.code = factory_code1;
    factory.code_source = factory_code_source1;
    factory.helpers = helpers_code1;
    factory.module = module;
    var jsToEval = helpers_code1 + "\\nreturn [getJSON" + factory_name1 + ", getBase64Code" + factory_name1 + "];";
    var evalResult = new Function(jsToEval)();
    factory.getJSON = evalResult[0];
    factory.getBase64Code = evalResult[1];
    try {
      factory.json_object = JSON.parse(factory.getJSON());
    } catch (e) {
      faust.error_msg = "Error in JSON.parse: " + e;
      callback(null);
      throw true;
    }
    factory.name = factory_name1;
    factory.sha_key = sha_key;
    faust.factory_table[sha_key] = factory;
    if (factory_name2) {
      WebAssembly.compile(factory_code2).then((module_effect) => {
        factory.code_effect = factory_code2;
        factory.code_source_effect = factory_code_source2;
        factory.helpers_effect = helpers_code2;
        factory.module_effect = module_effect;
        eval(helpers_code2);
        factory.getJSONeffect = eval("getJSON" + factory_name2);
        factory.getBase64Codeeffect = eval("getBase64Code" + factory_name2);
        try {
          factory.effect_json_object = JSON.parse(factory.getJSONeffect());
        } catch (e) {
          faust.error_msg = "Error in JSON.parse: " + e;
          callback(null);
          throw true;
        }
        factory.name_effect = factory_name2;
        callback(factory);
      }).catch(function(error) {
        faust.error_msg = "Faust DSP factory cannot be compiled";
        callback(null);
      });
    } else {
      callback(factory);
    }
  }).catch(function(error) {
    faust.error_msg = "Faust DSP factory cannot be compiled";
    callback(null);
  });
};
faust.deleteDSPFactory = function(factory2) {
  faust.factory_table[factory2.sha_key] = null;
};
faust.createDSPInstance = function(factory2, context, buffer_size, callback2) {
  context.resume();
  var importObject = {
    env: {
      memoryBase: 0,
      tableBase: 0,
      _abs: Math.abs,
      _acosf: Math.acos,
      _asinf: Math.asin,
      _atanf: Math.atan,
      _atan2f: Math.atan2,
      _ceilf: Math.ceil,
      _cosf: Math.cos,
      _expf: Math.exp,
      _floorf: Math.floor,
      _fmodf: function(x, y) {
        return x % y;
      },
      _logf: Math.log,
      _log10f: Math.log10,
      _max_f: Math.max,
      _min_f: Math.min,
      _remainderf: function(x, y) {
        return x - Math.round(x / y) * y;
      },
      _powf: Math.pow,
      _roundf: Math.fround,
      _sinf: Math.sin,
      _sqrtf: Math.sqrt,
      _tanf: Math.tan,
      _acoshf: Math.acosh,
      _asinhf: Math.asinh,
      _atanhf: Math.atanh,
      _coshf: Math.cosh,
      _sinhf: Math.sinh,
      _tanhf: Math.tanh,
      _isnanf: Number.isNaN,
      _isinff: function(x) {
        return !isFinite(x);
      },
      _copysignf: function(x, y) {
        return Math.sign(x) === Math.sign(y) ? x : -x;
      },
      _acos: Math.acos,
      _asin: Math.asin,
      _atan: Math.atan,
      _atan2: Math.atan2,
      _ceil: Math.ceil,
      _cos: Math.cos,
      _exp: Math.exp,
      _floor: Math.floor,
      _fmod: function(x, y) {
        return x % y;
      },
      _log: Math.log,
      _log10: Math.log10,
      _max_: Math.max,
      _min_: Math.min,
      _remainder: function(x, y) {
        return x - Math.round(x / y) * y;
      },
      _pow: Math.pow,
      _round: Math.fround,
      _sin: Math.sin,
      _sqrt: Math.sqrt,
      _tan: Math.tan,
      _acosh: Math.acosh,
      _asinh: Math.asinh,
      _atanh: Math.atanh,
      _cosh: Math.cosh,
      _sinh: Math.sinh,
      _tanh: Math.tanh,
      _isnan: Number.isNaN,
      _isinf: function(x) {
        return !isFinite(x);
      },
      _copysign: function(x, y) {
        return Math.sign(x) === Math.sign(y) ? x : -x;
      },
      table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
    }
  };
  performance.now();
  WebAssembly.instantiate(factory2.module, importObject).then((dsp_instance) => {
    performance.now();
    var sp;
    try {
      sp = context.createScriptProcessor(buffer_size, dsp_instance.exports.getNumInputs(0), dsp_instance.exports.getNumOutputs(0));
    } catch (e) {
      faust.error_msg = "Error in createScriptProcessor: " + e;
      callback2(null);
      return;
    }
    sp.output_handler = null;
    sp.ins = null;
    sp.outs = null;
    sp.compute_handler = null;
    sp.dspInChannnels = [];
    sp.dspOutChannnels = [];
    sp.fPitchwheelLabel = [];
    sp.fCtrlLabel = new Array(128);
    for (var i = 0; i < sp.fCtrlLabel.length; i++) {
      sp.fCtrlLabel[i] = [];
    }
    sp.outputs_timer = 5;
    sp.outputs_items = [];
    sp.inputs_items = [];
    sp.ptr_size = 4;
    sp.sample_size = 4;
    sp.dsp = 0;
    sp.pathTable = [];
    sp.factory = dsp_instance.exports;
    sp.HEAP = dsp_instance.exports.memory.buffer;
    sp.HEAP32 = new Int32Array(sp.HEAP);
    sp.HEAPF32 = new Float32Array(sp.HEAP);
    sp.numIn = sp.factory.getNumInputs(sp.dsp);
    sp.numOut = sp.factory.getNumOutputs(sp.dsp);
    sp.audio_heap_ptr = parseInt(factory2.json_object.size);
    sp.audio_heap_ptr_inputs = sp.audio_heap_ptr;
    sp.audio_heap_ptr_outputs = sp.audio_heap_ptr_inputs + sp.numIn * sp.ptr_size;
    sp.audio_heap_inputs = sp.audio_heap_ptr_outputs + sp.numOut * sp.ptr_size;
    sp.audio_heap_outputs = sp.audio_heap_inputs + sp.numIn * buffer_size * sp.sample_size;
    sp.update_outputs = function() {
      if (sp.outputs_items.length > 0 && sp.output_handler && sp.outputs_timer-- === 0) {
        sp.outputs_timer = 5;
        for (var i2 = 0; i2 < sp.outputs_items.length; i2++) {
          sp.output_handler(sp.outputs_items[i2], sp.factory.getParamValue(sp.dsp, sp.pathTable[sp.outputs_items[i2]]));
        }
      }
    };
    sp.compute = function(e) {
      var i2;
      for (i2 = 0; i2 < sp.numIn; i2++) {
        var input = e.inputBuffer.getChannelData(i2);
        var dspInput = sp.dspInChannnels[i2];
        dspInput.set(input);
      }
      if (sp.compute_handler) {
        sp.compute_handler(buffer_size);
      }
      sp.factory.compute(sp.dsp, buffer_size, sp.ins, sp.outs);
      sp.update_outputs();
      for (i2 = 0; i2 < sp.numOut; i2++) {
        var output = e.outputBuffer.getChannelData(i2);
        var dspOutput = sp.dspOutChannnels[i2];
        output.set(dspOutput);
      }
    };
    sp.parse_ui = function(ui) {
      for (var i2 = 0; i2 < ui.length; i2++) {
        sp.parse_group(ui[i2]);
      }
    };
    sp.parse_group = function(group) {
      if (group.items) {
        sp.parse_items(group.items);
      }
    };
    sp.parse_items = function(items) {
      for (var i2 = 0; i2 < items.length; i2++) {
        sp.parse_item(items[i2]);
      }
    };
    sp.parse_item = function(item) {
      if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
        sp.parse_items(item.items);
      } else if (item.type === "hbargraph" || item.type === "vbargraph") {
        sp.outputs_items.push(item.address);
        sp.pathTable[item.address] = parseInt(item.index);
      } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
        sp.inputs_items.push(item.address);
        sp.pathTable[item.address] = parseInt(item.index);
        if (item.meta !== void 0) {
          for (var i2 = 0; i2 < item.meta.length; i2++) {
            if (item.meta[i2].midi !== void 0) {
              if (item.meta[i2].midi.trim() === "pitchwheel") {
                sp.fPitchwheelLabel.push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              } else if (item.meta[i2].midi.trim().split(" ")[0] === "ctrl") {
                sp.fCtrlLabel[parseInt(item.meta[i2].midi.trim().split(" ")[1])].push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              }
            }
          }
        }
      }
    };
    sp.initAux = function() {
      var i2;
      sp.onaudioprocess = sp.compute;
      if (sp.numIn > 0) {
        sp.ins = sp.audio_heap_ptr_inputs;
        for (i2 = 0; i2 < sp.numIn; i2++) {
          sp.HEAP32[(sp.ins >> 2) + i2] = sp.audio_heap_inputs + buffer_size * sp.sample_size * i2;
        }
        var dspInChans = sp.HEAP32.subarray(sp.ins >> 2, sp.ins + sp.numIn * sp.ptr_size >> 2);
        for (i2 = 0; i2 < sp.numIn; i2++) {
          sp.dspInChannnels[i2] = sp.HEAPF32.subarray(dspInChans[i2] >> 2, dspInChans[i2] + buffer_size * sp.sample_size >> 2);
        }
      }
      if (sp.numOut > 0) {
        sp.outs = sp.audio_heap_ptr_outputs;
        for (i2 = 0; i2 < sp.numOut; i2++) {
          sp.HEAP32[(sp.outs >> 2) + i2] = sp.audio_heap_outputs + buffer_size * sp.sample_size * i2;
        }
        var dspOutChans = sp.HEAP32.subarray(sp.outs >> 2, sp.outs + sp.numOut * sp.ptr_size >> 2);
        for (i2 = 0; i2 < sp.numOut; i2++) {
          sp.dspOutChannnels[i2] = sp.HEAPF32.subarray(dspOutChans[i2] >> 2, dspOutChans[i2] + buffer_size * sp.sample_size >> 2);
        }
      }
      sp.parse_ui(factory2.json_object.ui);
      sp.factory.init(sp.dsp, context.sampleRate);
    };
    sp.destroy = function() {
    };
    sp.getSampleRate = function() {
      return context.sampleRate;
    };
    sp.getNumInputs = function() {
      return sp.factory.getNumInputs(sp.dsp);
    };
    sp.getNumOutputs = function() {
      return sp.factory.getNumOutputs(sp.dsp);
    };
    sp.init = function(sample_rate) {
      sp.factory.init(sp.dsp, sample_rate);
    };
    sp.instanceInit = function(sample_rate) {
      sp.factory.instanceInit(sp.dsp, sample_rate);
    };
    sp.instanceConstants = function(sample_rate) {
      sp.factory.instanceConstants(sp.dsp, sample_rate);
    };
    sp.instanceResetUserInterface = function() {
      sp.factory.instanceResetUserInterface(sp.dsp);
    };
    sp.instanceClear = function() {
      sp.factory.instanceClear(sp.dsp);
    };
    sp.metadata = function(handler) {
      if (factory2.json_object.meta) {
        factory2.json_object.meta.forEach(function(meta) {
          handler.declare(Object.keys(meta)[0], Object.values(meta)[0]);
        });
      }
    };
    sp.setOutputParamHandler = function(handler) {
      sp.output_handler = handler;
    };
    sp.getOutputParamHandler = function() {
      return sp.output_handler;
    };
    sp.ctrlChange = function(channel, ctrl, value) {
      for (var i2 = 0; i2 < sp.fCtrlLabel[ctrl].length; i2++) {
        var path = sp.fCtrlLabel[ctrl][i2].path;
        sp.setParamValue(path, faust.remap(value, 0, 127, sp.fCtrlLabel[ctrl][i2].min, sp.fCtrlLabel[ctrl][i2].max));
        if (sp.output_handler) {
          sp.output_handler(path, sp.getParamValue(path));
        }
      }
    };
    sp.pitchWheel = function(channel, wheel) {
      for (var i2 = 0; i2 < sp.fPitchwheelLabel.length; i2++) {
        var pw = sp.fPitchwheelLabel[i2];
        sp.setParamValue(pw.path, faust.remap(wheel, 0, 16383, pw.min, pw.max));
        if (sp.output_handler) {
          sp.output_handler(pw.path, sp.getParamValue(pw.path));
        }
      }
    };
    sp.setParamValue = function(path, val) {
      return sp.factory.setParamValue(sp.dsp, sp.pathTable[path], val);
    };
    sp.getParamValue = function(path) {
      return sp.factory.getParamValue(sp.dsp, sp.pathTable[path]);
    };
    sp.getParams = function() {
      return sp.inputs_items;
    };
    sp.getJSON = function() {
      return factory2.getJSON();
    };
    sp.initAux();
    callback2(sp);
  }).catch(function(error) {
    faust.error_msg = "Faust DSP cannot be instantiated";
    callback2(null);
  });
};
faust.deleteDSPInstance = function(dsp) {
};
var mydspProcessorString = \`

    'use strict';

    function getJSONmydsp() { return \\\`GETJSON\\\`; }
    function getBase64Codemydsp() { return \\\`GETBASE64CODE\\\`; }

    // Monophonic Faust DSP
    class mydspProcessor extends AudioWorkletProcessor {

        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                mydspProcessor.parse_group(ui[i], obj, callback);
            }
        }

        static parse_group(group, obj, callback)
        {
            if (group.items) {
                mydspProcessor.parse_items(group.items, obj, callback);
            }
        }

        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }

        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
            // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }

        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                mydspProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }

        static b64ToUint6(nChr)
        {
            return nChr > 64 && nChr < 91 ?
            nChr - 65
            : nChr > 96 && nChr < 123 ?
            nChr - 71
            : nChr > 47 && nChr < 58 ?
            nChr + 4
            : nChr === 43 ?
            62
            : nChr === 47 ?
            63
            :
            0;
        }

        static atob(sBase64, nBlocksSize)
        {
            if (typeof atob === 'function') {
                return atob(sBase64);
            } else {

                var sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, "");
                var nInLen = sB64Enc.length;
                var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
                var taBytes = new Uint8Array(nOutLen);

                for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                    nMod4 = nInIdx & 3;
                    nUint24 |= mydspProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                    if (nMod4 === 3 || nInLen - nInIdx === 1) {
                        for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                            taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                        }
                        nUint24 = 0;
                    }
                }
                return taBytes.buffer;
            }
        }

        static remap(v, mn0, mx0, mn1, mx1)
        {
            return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
        }

        static get parameterDescriptors ()
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            mydspProcessor.parse_ui(JSON.parse(getJSONmydsp()).ui, params, mydspProcessor.parse_item1);
            return params;
        }

        constructor(options)
        {
            super(options);
            this.running = true;

            this.json_object = JSON.parse(getJSONmydsp());

            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };

            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;

            // Create the WASM instance
            var wasm_instance = new WebAssembly.Instance(mydspProcessor.wasm_module, mydspProcessor.importObject);
            this.factory = wasm_instance.exports;
            this.HEAP = wasm_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];

            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * mydspProcessor.buffer_size * this.sample_size);

            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];

            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }

            this.initAux = function ()
            {
                var i;

                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((mydspProcessor.buffer_size * this.sample_size) * i);
                    }

                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + mydspProcessor.buffer_size * this.sample_size) >> 2);
                    }
                }

                // Parse UI
                mydspProcessor.parse_ui(this.json_object.ui, this, mydspProcessor.parse_item2);

                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }

        process(inputs, outputs, parameters)
        {
            var input = inputs[0];
            var output = outputs[0];

            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }

            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */

            // Update controls (possibly needed for sample accurate control)
            for (const path in parameters) {
            	const paramArray = parameters[path];
            	this.setParamValue(path, paramArray[0]);
            }

           // Compute
            try {
                this.factory.compute(this.dsp, mydspProcessor.buffer_size, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();

            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }

            return this.running;
        }
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals

    mydspProcessor.buffer_size = 128;

    mydspProcessor.importObject = {
        env: {
            memoryBase: 0,
            tableBase: 0,

            // Integer version
            _abs: Math.abs,

            // Float version
            _acosf: Math.acos,
            _asinf: Math.asin,
            _atanf: Math.atan,
            _atan2f: Math.atan2,
            _ceilf: Math.ceil,
            _cosf: Math.cos,
            _expf: Math.exp,
            _floorf: Math.floor,
            _fmodf: function(x, y) { return x % y; },
            _logf: Math.log,
            _log10f: Math.log10,
            _max_f: Math.max,
            _min_f: Math.min,
            _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
            _powf: Math.pow,
            _roundf: Math.fround,
            _sinf: Math.sin,
            _sqrtf: Math.sqrt,
            _tanf: Math.tan,
            _acoshf: Math.acosh,
            _asinhf: Math.asinh,
            _atanhf: Math.atanh,
            _coshf: Math.cosh,
            _sinhf: Math.sinh,
            _tanhf: Math.tanh,
            _isnanf: Number.isNaN,
            _isinff: function (x) { return !isFinite(x); },
            _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            // Double version
            _acos: Math.acos,
            _asin: Math.asin,
            _atan: Math.atan,
            _atan2: Math.atan2,
            _ceil: Math.ceil,
            _cos: Math.cos,
            _exp: Math.exp,
            _floor: Math.floor,
            _fmod: function(x, y) { return x % y; },
            _log: Math.log,
            _log10: Math.log10,
            _max_: Math.max,
            _min_: Math.min,
            _remainder:function(x, y) { return x - Math.round(x/y) * y; },
            _pow: Math.pow,
            _round: Math.fround,
            _sin: Math.sin,
            _sqrt: Math.sqrt,
            _tan: Math.tan,
            _acosh: Math.acosh,
            _asinh: Math.asinh,
            _atanh: Math.atanh,
            _cosh: Math.cosh,
            _sinh: Math.sinh,
            _tanh: Math.tanh,
            _isnan: Number.isNaN,
            _isinf: function (x) { return !isFinite(x); },
            _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },    

            table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
        }
    };

    // Synchronously compile and instantiate the WASM module
    try {
        mydspProcessor.wasm_module = new WebAssembly.Module(mydspProcessor.atob(getBase64Codemydsp()));
        registerProcessor('mydsp', mydspProcessor);
    } catch (e) {
        // REMOVED: console log noise that doesnt affect output
        // I assume if it were serious this error would not be caught and not rethrown
        // console.log(e); console.log("Faust mydsp cannot be loaded or compiled");
    }
\`;
faust.createDSPWorkletInstanceAux = function(factory2, context, callback2) {
  context.resume().catch(() => {
  });
  var audio_node = new AudioWorkletNode(context, factory2.name, {
    numberOfInputs: parseInt(factory2.json_object.inputs) > 0 ? 1 : 0,
    numberOfOutputs: parseInt(factory2.json_object.outputs) > 0 ? 1 : 0,
    channelCount: Math.max(1, parseInt(factory2.json_object.inputs)),
    outputChannelCount: [parseInt(factory2.json_object.outputs)],
    channelCountMode: "explicit",
    channelInterpretation: "speakers"
  });
  audio_node.onprocessorerror = () => {
    console.log("An error from mydspProcessor was detected.");
  };
  audio_node.handleMessage = function(event) {
    var msg = event.data;
    if (this.output_handler) {
      this.output_handler(msg.path, msg.value);
    }
  };
  audio_node.init = function() {
    this.parse_ui = function(ui, obj) {
      for (var i2 = 0; i2 < ui.length; i2++) {
        this.parse_group(ui[i2], obj);
      }
    };
    this.parse_group = function(group, obj) {
      if (group.items) {
        this.parse_items(group.items, obj);
      }
    };
    this.parse_items = function(items, obj) {
      for (var i2 = 0; i2 < items.length; i2++) {
        this.parse_item(items[i2], obj);
      }
    };
    this.parse_item = function(item, obj) {
      if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
        this.parse_items(item.items, obj);
      } else if (item.type === "hbargraph" || item.type === "vbargraph") {
        obj.outputs_items.push(item.address);
      } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
        obj.inputs_items.push(item.address);
        if (item.meta !== void 0) {
          for (var i2 = 0; i2 < item.meta.length; i2++) {
            if (item.meta[i2].midi !== void 0) {
              if (item.meta[i2].midi.trim() === "pitchwheel") {
                obj.fPitchwheelLabel.push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              } else if (item.meta[i2].midi.trim().split(" ")[0] === "ctrl") {
                obj.fCtrlLabel[parseInt(item.meta[i2].midi.trim().split(" ")[1])].push({
                  path: item.address,
                  min: parseFloat(item.min),
                  max: parseFloat(item.max)
                });
              }
            }
          }
        }
      }
    };
    this.output_handler = null;
    this.json_object = factory2.json_object;
    this.inputs_items = [];
    this.outputs_items = [];
    this.fPitchwheelLabel = [];
    this.fCtrlLabel = new Array(128);
    for (var i = 0; i < this.fCtrlLabel.length; i++) {
      this.fCtrlLabel[i] = [];
    }
    this.parse_ui(this.json_object.ui, this);
    this.port.onmessage = this.handleMessage.bind(this);
  };
  audio_node.init();
  audio_node.destroy = function() {
    this.port.postMessage({ type: "destroy" });
    this.port.close();
  };
  audio_node.getJSON = function() {
    return factory2.getJSON();
  };
  audio_node.setParamValue = function(path, val) {
    this.parameters.get(path).setValueAtTime(val, 0);
  };
  audio_node.getParamValue = function(path) {
    return this.parameters.get(path).value;
  };
  audio_node.setOutputParamHandler = function(handler) {
    this.output_handler = handler;
  };
  audio_node.getOutputParamHandler = function() {
    return this.output_handler;
  };
  audio_node.getNumInputs = function() {
    return parseInt(factory2.json_object.inputs);
  };
  audio_node.getNumOutputs = function() {
    return parseInt(factory2.json_object.outputs);
  };
  audio_node.inputChannelCount = function() {
    return parseInt(factory2.json_object.inputs);
  };
  audio_node.outputChannelCount = function() {
    return parseInt(factory2.json_object.outputs);
  };
  audio_node.getParams = function() {
    return this.inputs_items;
  };
  audio_node.getDescriptor = function() {
    return this.inputs_items;
  };
  audio_node.ctrlChange = function(channel, ctrl, value) {
    for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
      var path = this.fCtrlLabel[ctrl][i].path;
      this.setParamValue(path, audio_node.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
      if (this.output_handler) {
        this.output_handler(path, this.getParamValue(path));
      }
    }
  };
  audio_node.pitchWheel = function(channel, wheel) {
    for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
      var pw = this.fPitchwheelLabel[i];
      this.setParamValue(pw.path, audio_node.remap(wheel, 0, 16383, pw.min, pw.max));
      if (this.output_handler) {
        this.output_handler(pw.path, this.getParamValue(pw.path));
      }
    }
  };
  audio_node.midiMessage = function(data) {
    var cmd = data[0] >> 4;
    var channel = data[0] & 15;
    var data1 = data[1];
    var data2 = data[2];
    if (channel === 9) {
      return;
    } else if (cmd === 11) {
      this.ctrlChange(channel, data1, data2);
    } else if (cmd === 14) {
      this.pitchWheel(channel, data2 * 128 + data1);
    }
  };
  audio_node.onMidi = function(data) {
    this.midiMessage(data);
  };
  audio_node.getState = async function() {
    var params = new Object();
    for (let i = 0; i < this.getDescriptor().length; i++) {
      Object.assign(params, {
        [this.getDescriptor()[i]]: \`\${this.getParam(this.getDescriptor()[i])}\`
      });
    }
    return new Promise((resolve) => {
      resolve(params);
    });
  };
  audio_node.setState = async function(state) {
    return new Promise((resolve) => {
      for (const param in state) {
        if (state.hasOwnProperty(param))
          this.setParam(param, state[param]);
      }
      try {
        this.gui.setAttribute("state", JSON.stringify(state));
      } catch (error) {
        console.warn("Plugin without gui or GUI not defined", error);
      }
      resolve(state);
    });
  };
  audio_node.setPatch = function(patch) {
    this.setState(this.presets[patch]);
  };
  audio_node.metadata = function(handler) {
  };
  audio_node.remap = function(v, mn0, mx0, mn1, mx1) {
    return 1 * (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;
  };
  callback2(audio_node);
};
faust.createDSPWorkletInstance = function(factory2, context, callback2) {
  var re1 = /mydsp/g;
  var re2 = /GETJSON/g;
  var re3 = /GETBASE64CODE/g;
  var mydspProcessorString1 = mydspProcessorString.replace(re1, factory2.name);
  var mydspProcessorString2 = mydspProcessorString1.replace(re2, factory2.getJSON());
  var mydspProcessorString3 = mydspProcessorString2.replace(re3, factory2.getBase64Code());
  var url = window.URL.createObjectURL(new Blob([mydspProcessorString3], { type: "text/javascript" }));
  context.audioWorklet.addModule(url).then(function() {
    faust.createDSPWorkletInstanceAux(factory2, context, callback2);
  }).catch(function(error) {
    alert(error);
  });
};
faust.deleteDSPWorkletInstance = function(dsp) {
};
const ready = faust.ready;
const internalFaustWrapper = faust;
function isUItemGroup(item) {
  return ["hgroup", "vgroup", "tgroup"].includes(item.type);
}
function isUItemNumber(item) {
  return ["hslider", "vslider", "nentry"].includes(item.type);
}
function isUItemBoolean(item) {
  return ["button", "checkbox"].includes(item.type);
}
function isUItemBarGraph(item) {
  return ["vbargraph", "hbargraph"].includes(item.type);
}
const factoryCache = /* @__PURE__ */ new Map();
async function compile(audioContext, dsp) {
  const argv = ["-ftz", "2", "-I", "http://127.0.0.1:8000/../../libraries/"];
  let factoryPromise = factoryCache.get(dsp);
  if (!factoryPromise) {
    factoryPromise = new Promise((resolve) => faust.createDSPFactory(dsp, argv, resolve));
    factoryCache.set(dsp, factoryPromise);
  }
  const factory2 = await factoryPromise;
  if (!factory2) {
    throw new Error(faust.error_msg);
  }
  const node = await new Promise((resolve) => faust.createDSPWorkletInstance(factory2, audioContext, resolve));
  if (!node) {
    throw new Error(faust.error_msg);
  }
  node.ui = JSON.parse(node.getJSON()).ui;
  const outputValues = /* @__PURE__ */ new Map();
  node.setOutputParamHandler((path, value) => {
    outputValues.set(path, value);
  });
  node.getOutputValue = (path) => {
    return outputValues.get(path) ?? 0;
  };
  return node;
}
exports.compile = compile;
exports.internalFaustWrapper = internalFaustWrapper;
exports.isUItemBarGraph = isUItemBarGraph;
exports.isUItemBoolean = isUItemBoolean;
exports.isUItemGroup = isUItemGroup;
exports.isUItemNumber = isUItemNumber;
exports.ready = ready;
function findOldestVoiceIndex(voices) {
  if (voices.length === 0)
    return -1;
  const oldest = voices.reduce((prev, current) => {
    const usePrev = !current || prev && prev.time < current.time;
    return usePrev ? prev : current;
  });
  return oldest?.voice ?? -1;
}
class VoiceAllocator {
  _time = 0;
  _voices = [];
  constructor(total) {
    this._voices.length = total;
  }
  _startVoice(voice, id) {
    const existing = this._voices[voice];
    if (existing?.released !== void 0) {
      clearTimeout(existing.released);
    }
    this._voices[voice] = {
      id,
      voice,
      time: this._time++
    };
    return voice;
  }
  _stopVoice(voice) {
    this._voices[voice] = void 0;
  }
  _findStarted(id) {
    return this._voices.findIndex((v) => v && v.id === id && v.released === void 0);
  }
  _findReleased(id) {
    return this._voices.findIndex((v) => v && v.id === id && v.released !== void 0);
  }
  get voices() {
    return this._voices.map((voice) => voice?.id);
  }
  get(id) {
    return this._voices.findIndex((v) => v && v.id === id);
  }
  start(id) {
    const started = this._findStarted(id);
    if (started !== -1) {
      return [started, false];
    }
    const released = this._findReleased(id);
    if (released !== -1) {
      return [this._startVoice(released, id), false];
    }
    const stopped = this._voices.findIndex((v) => !v);
    if (stopped !== -1) {
      return [this._startVoice(stopped, id), true];
    }
    const releasedVoices = this._voices.filter((v) => v?.released !== void 0);
    const oldestReleased = findOldestVoiceIndex(releasedVoices);
    if (oldestReleased !== -1) {
      return [this._startVoice(oldestReleased, id), true];
    }
    const oldestActive = findOldestVoiceIndex(this._voices);
    if (oldestActive !== -1) {
      return [this._startVoice(oldestActive, id), true];
    }
    throw new Error("unable to find oldest active voice");
  }
  stop(id) {
    const started = this._findStarted(id);
    if (started !== -1) {
      this._stopVoice(started);
    }
    return [started, false];
  }
  release(id, ms) {
    const started = this._findStarted(id);
    const voiceObject = this._voices[started];
    if (voiceObject) {
      voiceObject.released = setTimeout(() => {
        this._stopVoice(started);
      }, ms);
    }
    return [started, false];
  }
}
class VoiceController {
  _polyphony;
  _resolveGate;
  _release = 2e3;
  _paramCacheSize;
  _allocator;
  _allParams = {};
  _perVoiceParamsStore = /* @__PURE__ */ new Map();
  _recentlyAccessedIds = /* @__PURE__ */ new Set();
  constructor(config) {
    const { polyphony, paramCacheSize, resolveGate } = config;
    this._polyphony = polyphony;
    this._paramCacheSize = paramCacheSize;
    this._resolveGate = resolveGate;
    this._allocator = new VoiceAllocator(polyphony);
  }
  _accessId(id) {
    const set = this._recentlyAccessedIds;
    set.delete(id);
    set.add(id);
    while (set.size > this._paramCacheSize) {
      const id2 = set.keys().next().value;
      set.delete(id2);
      this._deleteParamsForId(id2);
    }
  }
  _getParamsForVoice(id) {
    this._accessId(id);
    const out = {};
    this._perVoiceParamsStore.forEach((subMap, key) => {
      const value = subMap.get(id);
      if (value !== void 0) {
        out[key] = value;
      }
    });
    return out;
  }
  _addParamForVoice(paramKey, id, paramValue) {
    const subMap = this._perVoiceParamsStore.get(paramKey) ?? /* @__PURE__ */ new Map();
    subMap.set(id, paramValue);
    this._perVoiceParamsStore.set(paramKey, subMap);
  }
  _addParamsForVoice(id, params) {
    this._accessId(id);
    for (const key in params) {
      const value = params[key];
      if (value !== void 0) {
        this._addParamForVoice(key, id, value);
      }
    }
  }
  _deleteParamsForId(id) {
    this._perVoiceParamsStore.forEach((subMap) => {
      subMap.delete(id);
    });
  }
  setRelease(release) {
    this._release = release;
  }
  set({ voice, ...params }) {
    if (voice === void 0) {
      return this.setAll(params);
    }
    return this.setWithId(\`\${voice}\`, params);
  }
  setWithId(id, params) {
    const gate = this._resolveGate(params);
    const { _allocator, _allParams } = this;
    let index = -1;
    if (gate !== void 0) {
      [index] = gate > 0 ? _allocator.start(id) : _allocator.release(id, this._release);
    } else {
      index = _allocator.get(id);
    }
    if (index === -1)
      return [];
    const perVoiceParams = this._getParamsForVoice(id);
    const mergedParams = {
      ..._allParams,
      ...perVoiceParams,
      ...params
    };
    this._addParamsForVoice(id, mergedParams);
    return [
      {
        index,
        params: mergedParams
      }
    ];
  }
  setAll(params) {
    this._allParams = {
      ...this._allParams,
      ...params
    };
    for (const paramName in params) {
      this._perVoiceParamsStore.set(paramName, /* @__PURE__ */ new Map());
    }
    const out = [];
    for (let i = 0; i < this._polyphony; i++) {
      out.push({
        index: i,
        params
      });
    }
    return out;
  }
}
function deserializeInIframe(serialized) {
  if (DspNode.isFaustDspNodeSerialized(serialized)) {
    return deserializeFaust(serialized);
  }
  if (DspNode.isPolyDspNodeSerialized(serialized)) {
    return deserializePoly(serialized);
  }
  throw new Error(\`serialized has invalid type "\${serialized.type}"\`);
}
function deserializeFaust(serialized) {
  const { dsp, inputs, paramDefs } = serialized;
  return new DspNodeFaust({
    dsp,
    inputs: inputs.map((input) => deserializeInIframe(input)),
    paramDefs,
    dependencies: {
      compile
    }
  });
}
function deserializePoly(serialized) {
  const { input, ...rest } = serialized;
  return new DspNodePoly({
    input: deserializeInIframe(input),
    ...rest,
    dependencies: {
      VoiceController
    }
  });
}
function lines(lines2) {
  return lines2.join("\\n");
}
function series(arr, joiner, callback2) {
  return arr.map(callback2).join(joiner);
}
function env(name, dsp) {
  return \`\${name} = environment { 
  \${dsp.replace(/\\n/g, "\\n  ")} 
};
\`;
}
async function constructNodeFaust(audioContext, dspNode, constructNode2) {
  const { inputs = [], paramDefs, dependencies } = dspNode;
  const inputNodes = await Promise.all(inputs.map((input) => constructNode2(audioContext, input)));
  const dspToCompile = lines([
    'import("stdfaust.lib");',
    constructFaustDsp(dspNode)
  ]);
  const faustNode = await dependencies.compile(audioContext, dspToCompile);
  const faustNodeDestroy = faustNode.destroy.bind(faustNode);
  const node = faustNode;
  node.destroy = () => {
    faustNodeDestroy();
    inputNodes.forEach((node2) => node2?.destroy());
  };
  const paramsUsed = faustNode.getParams();
  node.set = (params) => {
    paramsUsed.forEach((name) => {
      const paramKey = name.replace(/^\\/FaustDSP\\//g, "");
      const paramDef = paramDefs[paramKey];
      if (paramDef !== void 0) {
        const value = resolveParam(params, paramDef);
        if (typeof value === "number") {
          faustNode.setParamValue(name, value);
        }
      }
    });
    inputNodes.forEach((node2) => node2?.set(params));
  };
  for (let i = 0; i < inputNodes.length; i++) {
    inputNodes[i].connect(node, 0, i);
  }
  return node;
}
function constructFaustDsp(dspNode) {
  const { paramDefs, dsp } = dspNode;
  const paramsDsp = env("params", lines([
    series(Object.entries(paramDefs), "\\n", ([name, value]) => {
      if (typeof value === "number") {
        return \`\${name} = \${value};
\`;
      }
      return \`\${name} = hslider("\${name}",0.0,-9999999.0,9999999.0,0.0000001);\`;
    })
  ]));
  return lines([paramsDsp, dsp]);
}
async function constructNodePoly(audioContext, dspNode, constructNode2) {
  const {
    input,
    polyphony,
    paramCacheSize = 1e4,
    release,
    gate,
    dependencies
  } = dspNode;
  const releaseIsVariable = isVariable(release);
  const { VoiceController: VoiceController2 } = dependencies;
  const controller = new VoiceController2({
    polyphony,
    resolveGate: (params) => resolveParam(params, gate),
    paramCacheSize
  });
  const setRelease = (r) => controller.setRelease(r * 1e3);
  if (!releaseIsVariable) {
    setRelease(release);
  }
  const voiceNodes = await Promise.all(Array(polyphony).fill(0).map(() => constructNode2(audioContext, input)));
  const gainNode = new GainNode(audioContext);
  voiceNodes.forEach((node) => node.connect(gainNode));
  gainNode.destroy = () => {
    voiceNodes.forEach((node) => node?.destroy());
  };
  gainNode.set = (params) => {
    if (releaseIsVariable) {
      const value = params[release];
      if (typeof value === "number") {
        setRelease(value);
      }
    }
    const paramsToSet = controller.set(params);
    paramsToSet.forEach(({ index, params: params2 }) => {
      voiceNodes[index].set(params2);
    });
  };
  return gainNode;
}
async function constructNode(audioContext, dspNode) {
  if (DspNode.isFaustDspNode(dspNode)) {
    return await constructNodeFaust(audioContext, dspNode, constructNode);
  }
  if (DspNode.isPolyDspNode(dspNode)) {
    return await constructNodePoly(audioContext, dspNode, constructNode);
  }
  throw new Error(\`dspNode has invalid type "\${dspNode.type}"\`);
}
function isInputSetEvent(e) {
  return e.type === "set";
}
class InputEventRecorder {
  recording = false;
  recordingStartTime = Date.now();
  events = [];
  record() {
    this.recording = true;
    this.recordingStartTime = Date.now();
  }
  stop() {
    const time = (Date.now() - this.recordingStartTime) * 1e-3;
    this.events.push({
      type: "stop",
      time
    });
    const result = this.events;
    this.events = [];
    this.recording = false;
    return result;
  }
  addSetEvent(params) {
    const time = (Date.now() - this.recordingStartTime) * 1e-3;
    this.events.push({
      type: "set",
      time,
      params
    });
  }
}
class Synth {
  audioContext;
  initialParams;
  node;
  connection;
  constructor(config) {
    this.audioContext = config.audioContext;
    this.initialParams = config.params;
  }
  async build(dspNode) {
    const newNode = await constructNode(this.audioContext, dspNode);
    this.node?.disconnect();
    this.node?.destroy();
    this.node = newNode;
    this.tryConnectNode();
  }
  connect(audio, output, input) {
    this.connection = [audio, output, input];
    this.tryConnectNode();
    return audio;
  }
  tryConnectNode() {
    if (this.node && this.connection) {
      this.node.disconnect();
      this.node.connect(...this.connection);
      if (this.initialParams) {
        this.set(this.initialParams);
      }
    }
  }
  disconnect(outputOrDestinationNode, output, input) {
    if (this.node) {
      this.node.disconnect(outputOrDestinationNode, output, input);
    }
  }
  set(params) {
    if (this.inputEvents.recording) {
      this.inputEvents.addSetEvent(params);
    }
    if (this.node) {
      this.node.set(params);
    }
  }
  destroy() {
    this.node?.destroy();
    this.node = void 0;
  }
  inputEvents = new InputEventRecorder();
}
async function offlineRenderSynthInner(offlineCtx, _source, props) {
  const { initialParams, dspNodeSerialized, events } = props;
  const synthDspNode = deserializeInIframe(dspNodeSerialized);
  const synth = new Synth({
    audioContext: offlineCtx,
    params: initialParams
  });
  await synth.build(synthDspNode);
  synth.connect(offlineCtx.destination);
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    if (isInputSetEvent(event)) {
      offlineCtx.suspend(event.time).then(() => {
        synth.set(event.params);
        offlineCtx.resume();
      });
    }
  }
}
exports.offlineRenderSynthInner = offlineRenderSynthInner;
`;async function offlineRender(f){const{initialParams:g,dspNode:s,events:T,...O}=f,M=s.serialize();return offlineRender$1({functionString:`
      ${offlineRenderSynthInnerStringified}
      exports.buildContext = exports.offlineRenderSynthInner;
    `,props:{initialParams:g,dspNodeSerialized:M,events:T},...O})}function touchStart(f){if(f.state!=="suspended")return;const g=document.body,s=["touchstart","touchend","mousedown","keydown"],T=()=>s.forEach(M=>g.removeEventListener(M,O)),O=()=>f.resume().then(T);s.forEach(M=>g.addEventListener(M,O,!1))}function isInputStopEvent(f){return f.type==="stop"}const liveAudioContext=new window.AudioContext;touchStart(liveAudioContext);const initialParams={pitch:70,envelopeAttack:.002,envelopeDecay:.1,envelopeSustain:.3,envelopeRelease:2,pan:.5};function buildSynthDsp(){const f=faust("process = os.triangle(params.pitch : si.polySmooth(params.gate, 0.999, 1) : ba.midikey2hz) : *(params.volume);",{pitch:"pitch",gate:"gate",volume:.3}),g=faust(`
  a = params.envelopeAttack;
  d = params.envelopeDecay;
  s = params.envelopeSustain;
  r = params.envelopeRelease;
  process = *(en.adsr(a,d,s,r,params.gate));
  `,{inputs:[f],gate:"gate",force:"force",envelopeAttack:"envelopeAttack",envelopeDecay:"envelopeDecay",envelopeSustain:"envelopeSustain",envelopeRelease:"envelopeRelease"}),s=faust("process = *(os.osc(params.speed) * 0.4 + 0.5);",{inputs:[g],speed:"speed"}),T=faust("process = sp.panner(params.pan);",{inputs:[s],pan:"pan"});return poly({input:T,polyphony:4,gate:"gate",release:"envelopeRelease"})}const synthDsp=buildSynthDsp();async function play(){console.log("rendering");const f=[{type:"set",time:.595,params:{voice:"-2,2",gate:1,force:1,pitch:60,pan:.3664352229389347,speed:9.799338737192862}},{type:"set",time:.657,params:{voice:"-2,2",gate:0,force:0}},{type:"set",time:.857,params:{voice:"-1,2",gate:1,force:1,pitch:61,pan:.37903270702987524,speed:1.5853899460626244}},{type:"set",time:.864,params:{voice:"-1,2",force:1,pitch:61}},{type:"set",time:.912,params:{voice:"-1,2",gate:0,force:0}},{type:"set",time:1.145,params:{voice:"-1,1",gate:1,force:1,pitch:66,pan:.2747280151288386,speed:7.69904668429024}},{type:"set",time:1.17,params:{voice:"-1,1",force:1,pitch:66}},{type:"set",time:1.217,params:{voice:"-1,1",gate:0,force:0}},{type:"set",time:1.443,params:{voice:"1,1",gate:1,force:1,pitch:68,pan:.6213349760002562,speed:1.8454334771870697}},{type:"set",time:1.457,params:{voice:"1,1",force:1,pitch:68}},{type:"set",time:1.514,params:{voice:"1,1",gate:0,force:0}},{type:"stop",time:5}],g=f.find(isInputStopEvent);if(!g){console.log("no stop event found");return}const{sampleRate:s}=liveAudioContext,T=await offlineRender({channels:1,sampleRate:s,length:g.time*s,initialParams,dspNode:synthDsp,events:f}),O=await toAudioBuffer$1(T,liveAudioContext);console.log("playing"),playBuffer(O,liveAudioContext)}var _jsxFileName="/home/runner/work/damienclarke.me/damienclarke.me/packages/site/src/main.tsx";function playTestSound(f){f.preventDefault(),play()}client.createRoot(document.getElementById("root")).render(jsxDEV(React.StrictMode,{children:jsxDEV(HashRouter,{children:jsxDEV(Routes,{children:jsxDEV(Route,{path:"/",element:jsxDEV(Main,{},void 0,!1,{fileName:_jsxFileName,lineNumber:20,columnNumber:34},globalThis)},void 0,!1,{fileName:_jsxFileName,lineNumber:20,columnNumber:9},globalThis)},void 0,!1,{fileName:_jsxFileName,lineNumber:19,columnNumber:7},globalThis)},void 0,!1,{fileName:_jsxFileName,lineNumber:18,columnNumber:5},globalThis)},void 0,!1,{fileName:_jsxFileName,lineNumber:17,columnNumber:3},globalThis));function Main(){return jsxDEV("div",{className:classes.main,children:["xenpaper-v2 development site -"," ",jsxDEV("a",{href:"#",onClick:playTestSound,children:"click to play a test sound but not on firefox"},void 0,!1,{fileName:_jsxFileName,lineNumber:30,columnNumber:7},this)]},void 0,!0,{fileName:_jsxFileName,lineNumber:28,columnNumber:5},this)}
