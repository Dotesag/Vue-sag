(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ws(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const k={},mt=[],De=()=>{},Ho=()=>!1,yn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Is=e=>e.startsWith("onUpdate:"),ee=Object.assign,Es=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},jo=Object.prototype.hasOwnProperty,B=(e,t)=>jo.call(e,t),D=Array.isArray,bt=e=>Kt(e)==="[object Map]",_n=e=>Kt(e)==="[object Set]",Xs=e=>Kt(e)==="[object Date]",M=e=>typeof e=="function",Q=e=>typeof e=="string",Oe=e=>typeof e=="symbol",z=e=>e!==null&&typeof e=="object",Gr=e=>(z(e)||M(e))&&M(e.then)&&M(e.catch),Yr=Object.prototype.toString,Kt=e=>Yr.call(e),ko=e=>Kt(e).slice(8,-1),Jr=e=>Kt(e)==="[object Object]",Ss=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Rt=ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Vo=/-(\w)/g,qe=vn(e=>e.replace(Vo,(t,n)=>n?n.toUpperCase():"")),Uo=/\B([A-Z])/g,dt=vn(e=>e.replace(Uo,"-$1").toLowerCase()),Qr=vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),$n=vn(e=>e?`on${Qr(e)}`:""),Ue=(e,t)=>!Object.is(e,t),nn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Xr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zs;const wn=()=>Zs||(Zs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ts(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=Q(s)?qo(s):Ts(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(Q(e)||z(e))return e}const Wo=/;(?![^(]*\))/g,Ko=/:([^]+)/,zo=/\/\*[^]*?\*\//g;function qo(e){const t={};return e.replace(zo,"").split(Wo).forEach(n=>{if(n){const s=n.split(Ko);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function q(e){let t="";if(Q(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const s=q(e[n]);s&&(t+=s+" ")}else if(z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Go="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yo=ws(Go);function Zr(e){return!!e||e===""}function Jo(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=In(e[s],t[s]);return n}function In(e,t){if(e===t)return!0;let n=Xs(e),s=Xs(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=Oe(e),s=Oe(t),n||s)return e===t;if(n=D(e),s=D(t),n||s)return n&&s?Jo(e,t):!1;if(n=z(e),s=z(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!In(e[o],t[o]))return!1}}return String(e)===String(t)}function ei(e,t){return e.findIndex(n=>In(n,t))}const ti=e=>!!(e&&e.__v_isRef===!0),yt=e=>Q(e)?e:e==null?"":D(e)||z(e)&&(e.toString===Yr||!M(e.toString))?ti(e)?yt(e.value):JSON.stringify(e,ni,2):String(e),ni=(e,t)=>ti(t)?ni(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Bn(s,i)+" =>"]=r,n),{})}:_n(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Bn(n))}:Oe(t)?Bn(t):z(t)&&!D(t)&&!Jr(t)?String(t):t,Bn=(e,t="")=>{var n;return Oe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pe;class Qo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=pe;try{return pe=this,t()}finally{pe=n}}}on(){pe=this}off(){pe=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Xo(){return pe}let W;const Nn=new WeakSet;class si{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pe&&pe.active&&pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nn.has(this)&&(Nn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ii(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,er(this),oi(this);const t=W,n=we;W=this,we=!0;try{return this.fn()}finally{ai(this),W=t,we=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)xs(t);this.deps=this.depsTail=void 0,er(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ns(this)&&this.run()}get dirty(){return ns(this)}}let ri=0,Mt,Pt;function ii(e,t=!1){if(e.flags|=8,t){e.next=Pt,Pt=e;return}e.next=Mt,Mt=e}function As(){ri++}function Cs(){if(--ri>0)return;if(Pt){let t=Pt;for(Pt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Mt;){let t=Mt;for(Mt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function oi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ai(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),xs(s),Zo(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function ns(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(li(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function li(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ht))return;e.globalVersion=Ht;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!ns(e)){e.flags&=-3;return}const n=W,s=we;W=e,we=!0;try{oi(e);const r=e.fn(e._value);(t.version===0||Ue(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{W=n,we=s,ai(e),e.flags&=-3}}function xs(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)xs(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zo(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let we=!0;const ci=[];function Ye(){ci.push(we),we=!1}function Je(){const e=ci.pop();we=e===void 0?!0:e}function er(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=W;W=void 0;try{t()}finally{W=n}}}let Ht=0;class ea{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ds{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!W||!we||W===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==W)n=this.activeLink=new ea(W,this),W.deps?(n.prevDep=W.depsTail,W.depsTail.nextDep=n,W.depsTail=n):W.deps=W.depsTail=n,fi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=W.depsTail,n.nextDep=void 0,W.depsTail.nextDep=n,W.depsTail=n,W.deps===n&&(W.deps=s)}return n}trigger(t){this.version++,Ht++,this.notify(t)}notify(t){As();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cs()}}}function fi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)fi(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ss=new WeakMap,ot=Symbol(""),rs=Symbol(""),jt=Symbol("");function ne(e,t,n){if(we&&W){let s=ss.get(e);s||ss.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Ds),r.map=s,r.key=n),r.track()}}function Fe(e,t,n,s,r,i){const o=ss.get(e);if(!o){Ht++;return}const a=l=>{l&&l.trigger()};if(As(),t==="clear")o.forEach(a);else{const l=D(e),u=l&&Ss(n);if(l&&n==="length"){const d=Number(s);o.forEach((p,v)=>{(v==="length"||v===jt||!Oe(v)&&v>=d)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(jt)),t){case"add":l?u&&a(o.get("length")):(a(o.get(ot)),bt(e)&&a(o.get(rs)));break;case"delete":l||(a(o.get(ot)),bt(e)&&a(o.get(rs)));break;case"set":bt(e)&&a(o.get(ot));break}}Cs()}function pt(e){const t=$(e);return t===e?t:(ne(t,"iterate",jt),ye(e)?t:t.map(se))}function En(e){return ne(e=$(e),"iterate",jt),e}const ta={__proto__:null,[Symbol.iterator](){return Ln(this,Symbol.iterator,se)},concat(...e){return pt(this).concat(...e.map(t=>D(t)?pt(t):t))},entries(){return Ln(this,"entries",e=>(e[1]=se(e[1]),e))},every(e,t){return Me(this,"every",e,t,void 0,arguments)},filter(e,t){return Me(this,"filter",e,t,n=>n.map(se),arguments)},find(e,t){return Me(this,"find",e,t,se,arguments)},findIndex(e,t){return Me(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Me(this,"findLast",e,t,se,arguments)},findLastIndex(e,t){return Me(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Me(this,"forEach",e,t,void 0,arguments)},includes(...e){return Hn(this,"includes",e)},indexOf(...e){return Hn(this,"indexOf",e)},join(e){return pt(this).join(e)},lastIndexOf(...e){return Hn(this,"lastIndexOf",e)},map(e,t){return Me(this,"map",e,t,void 0,arguments)},pop(){return xt(this,"pop")},push(...e){return xt(this,"push",e)},reduce(e,...t){return tr(this,"reduce",e,t)},reduceRight(e,...t){return tr(this,"reduceRight",e,t)},shift(){return xt(this,"shift")},some(e,t){return Me(this,"some",e,t,void 0,arguments)},splice(...e){return xt(this,"splice",e)},toReversed(){return pt(this).toReversed()},toSorted(e){return pt(this).toSorted(e)},toSpliced(...e){return pt(this).toSpliced(...e)},unshift(...e){return xt(this,"unshift",e)},values(){return Ln(this,"values",se)}};function Ln(e,t,n){const s=En(e),r=s[t]();return s!==e&&!ye(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const na=Array.prototype;function Me(e,t,n,s,r,i){const o=En(e),a=o!==e&&!ye(e),l=o[t];if(l!==na[t]){const p=l.apply(e,i);return a?se(p):p}let u=n;o!==e&&(a?u=function(p,v){return n.call(this,se(p),v,e)}:n.length>2&&(u=function(p,v){return n.call(this,p,v,e)}));const d=l.call(o,u,s);return a&&r?r(d):d}function tr(e,t,n,s){const r=En(e);let i=n;return r!==e&&(ye(e)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,e)}):i=function(o,a,l){return n.call(this,o,se(a),l,e)}),r[t](i,...s)}function Hn(e,t,n){const s=$(e);ne(s,"iterate",jt);const r=s[t](...n);return(r===-1||r===!1)&&Ps(n[0])?(n[0]=$(n[0]),s[t](...n)):r}function xt(e,t,n=[]){Ye(),As();const s=$(e)[t].apply(e,n);return Cs(),Je(),s}const sa=ws("__proto__,__v_isRef,__isVue"),ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Oe));function ra(e){Oe(e)||(e=String(e));const t=$(this);return ne(t,"has",e),t.hasOwnProperty(e)}class di{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?pa:mi:i?gi:pi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=D(t);if(!r){let l;if(o&&(l=ta[n]))return l;if(n==="hasOwnProperty")return ra}const a=Reflect.get(t,n,Z(t)?t:s);return(Oe(n)?ui.has(n):sa(n))||(r||ne(t,"get",n),i)?a:Z(a)?o&&Ss(n)?a:a.value:z(a)?r?bi(a):Rs(a):a}}class hi extends di{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const l=at(i);if(!ye(s)&&!at(s)&&(i=$(i),s=$(s)),!D(t)&&Z(i)&&!Z(s))return l?!1:(i.value=s,!0)}const o=D(t)&&Ss(n)?Number(n)<t.length:B(t,n),a=Reflect.set(t,n,s,Z(t)?t:r);return t===$(r)&&(o?Ue(s,i)&&Fe(t,"set",n,s):Fe(t,"add",n,s)),a}deleteProperty(t,n){const s=B(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Fe(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Oe(n)||!ui.has(n))&&ne(t,"has",n),s}ownKeys(t){return ne(t,"iterate",D(t)?"length":ot),Reflect.ownKeys(t)}}class ia extends di{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const oa=new hi,aa=new ia,la=new hi(!0);const is=e=>e,Zt=e=>Reflect.getPrototypeOf(e);function ca(e,t,n){return function(...s){const r=this.__v_raw,i=$(r),o=bt(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...s),d=n?is:t?os:se;return!t&&ne(i,"iterate",l?rs:ot),{next(){const{value:p,done:v}=u.next();return v?{value:p,done:v}:{value:a?[d(p[0]),d(p[1])]:d(p),done:v}},[Symbol.iterator](){return this}}}}function en(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function fa(e,t){const n={get(r){const i=this.__v_raw,o=$(i),a=$(r);e||(Ue(r,a)&&ne(o,"get",r),ne(o,"get",a));const{has:l}=Zt(o),u=t?is:e?os:se;if(l.call(o,r))return u(i.get(r));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&ne($(r),"iterate",ot),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=$(i),a=$(r);return e||(Ue(r,a)&&ne(o,"has",r),ne(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=$(a),u=t?is:e?os:se;return!e&&ne(l,"iterate",ot),a.forEach((d,p)=>r.call(i,u(d),u(p),o))}};return ee(n,e?{add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear")}:{add(r){!t&&!ye(r)&&!at(r)&&(r=$(r));const i=$(this);return Zt(i).has.call(i,r)||(i.add(r),Fe(i,"add",r,r)),this},set(r,i){!t&&!ye(i)&&!at(i)&&(i=$(i));const o=$(this),{has:a,get:l}=Zt(o);let u=a.call(o,r);u||(r=$(r),u=a.call(o,r));const d=l.call(o,r);return o.set(r,i),u?Ue(i,d)&&Fe(o,"set",r,i):Fe(o,"add",r,i),this},delete(r){const i=$(this),{has:o,get:a}=Zt(i);let l=o.call(i,r);l||(r=$(r),l=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return l&&Fe(i,"delete",r,void 0),u},clear(){const r=$(this),i=r.size!==0,o=r.clear();return i&&Fe(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ca(r,e,t)}),n}function Os(e,t){const n=fa(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(B(n,r)&&r in s?n:s,r,i)}const ua={get:Os(!1,!1)},da={get:Os(!1,!0)},ha={get:Os(!0,!1)};const pi=new WeakMap,gi=new WeakMap,mi=new WeakMap,pa=new WeakMap;function ga(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ma(e){return e.__v_skip||!Object.isExtensible(e)?0:ga(ko(e))}function Rs(e){return at(e)?e:Ms(e,!1,oa,ua,pi)}function ba(e){return Ms(e,!1,la,da,gi)}function bi(e){return Ms(e,!0,aa,ha,mi)}function Ms(e,t,n,s,r){if(!z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=ma(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function _t(e){return at(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function at(e){return!!(e&&e.__v_isReadonly)}function ye(e){return!!(e&&e.__v_isShallow)}function Ps(e){return e?!!e.__v_raw:!1}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function ya(e){return!B(e,"__v_skip")&&Object.isExtensible(e)&&Xr(e,"__v_skip",!0),e}const se=e=>z(e)?Rs(e):e,os=e=>z(e)?bi(e):e;function Z(e){return e?e.__v_isRef===!0:!1}function N(e){return _a(e,!1)}function _a(e,t){return Z(e)?e:new va(e,t)}class va{constructor(t,n){this.dep=new Ds,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:$(t),this._value=n?t:se(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||ye(t)||at(t);t=s?t:$(t),Ue(t,n)&&(this._rawValue=t,this._value=s?t:se(t),this.dep.trigger())}}function yi(e){return Z(e)?e.value:e}const wa={get:(e,t,n)=>t==="__v_raw"?e:yi(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Z(r)&&!Z(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function _i(e){return _t(e)?e:new Proxy(e,wa)}class Ia{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ds(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ht-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&W!==this)return ii(this,!0),!0}get value(){const t=this.dep.track();return li(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ea(e,t,n=!1){let s,r;return M(e)?s=e:(s=e.get,r=e.set),new Ia(s,r,n)}const tn={},ln=new WeakMap;let nt;function Sa(e,t=!1,n=nt){if(n){let s=ln.get(n);s||ln.set(n,s=[]),s.push(e)}}function Ta(e,t,n=k){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,u=O=>r?O:ye(O)||r===!1||r===0?$e(O,1):$e(O);let d,p,v,I,x=!1,A=!1;if(Z(e)?(p=()=>e.value,x=ye(e)):_t(e)?(p=()=>u(e),x=!0):D(e)?(A=!0,x=e.some(O=>_t(O)||ye(O)),p=()=>e.map(O=>{if(Z(O))return O.value;if(_t(O))return u(O);if(M(O))return l?l(O,2):O()})):M(e)?t?p=l?()=>l(e,2):e:p=()=>{if(v){Ye();try{v()}finally{Je()}}const O=nt;nt=d;try{return l?l(e,3,[I]):e(I)}finally{nt=O}}:p=De,t&&r){const O=p,X=r===!0?1/0:r;p=()=>$e(O(),X)}const j=Xo(),L=()=>{d.stop(),j&&Es(j.effects,d)};if(i&&t){const O=t;t=(...X)=>{O(...X),L()}}let Y=A?new Array(e.length).fill(tn):tn;const J=O=>{if(!(!(d.flags&1)||!d.dirty&&!O))if(t){const X=d.run();if(r||x||(A?X.some((He,Ie)=>Ue(He,Y[Ie])):Ue(X,Y))){v&&v();const He=nt;nt=d;try{const Ie=[X,Y===tn?void 0:A&&Y[0]===tn?[]:Y,I];l?l(t,3,Ie):t(...Ie),Y=X}finally{nt=He}}}else d.run()};return a&&a(J),d=new si(p),d.scheduler=o?()=>o(J,!1):J,I=O=>Sa(O,!1,d),v=d.onStop=()=>{const O=ln.get(d);if(O){if(l)l(O,4);else for(const X of O)X();ln.delete(d)}},t?s?J(!0):Y=d.run():o?o(J.bind(null,!0),!0):d.run(),L.pause=d.pause.bind(d),L.resume=d.resume.bind(d),L.stop=L,L}function $e(e,t=1/0,n){if(t<=0||!z(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Z(e))$e(e.value,t,n);else if(D(e))for(let s=0;s<e.length;s++)$e(e[s],t,n);else if(_n(e)||bt(e))e.forEach(s=>{$e(s,t,n)});else if(Jr(e)){for(const s in e)$e(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&$e(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zt(e,t,n,s){try{return s?e(...s):e()}catch(r){Sn(r,t,n)}}function Re(e,t,n,s){if(M(e)){const r=zt(e,t,n,s);return r&&Gr(r)&&r.catch(i=>{Sn(i,t,n)}),r}if(D(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Re(e[i],t,n,s));return r}}function Sn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||k;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,l,u)===!1)return}a=a.parent}if(i){Ye(),zt(i,null,10,[e,l,u]),Je();return}}Aa(e,n,r,s,o)}function Aa(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const oe=[];let Ae=-1;const vt=[];let ke=null,gt=0;const vi=Promise.resolve();let cn=null;function Ca(e){const t=cn||vi;return e?t.then(this?e.bind(this):e):t}function xa(e){let t=Ae+1,n=oe.length;for(;t<n;){const s=t+n>>>1,r=oe[s],i=kt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Fs(e){if(!(e.flags&1)){const t=kt(e),n=oe[oe.length-1];!n||!(e.flags&2)&&t>=kt(n)?oe.push(e):oe.splice(xa(t),0,e),e.flags|=1,wi()}}function wi(){cn||(cn=vi.then(Ei))}function Da(e){D(e)?vt.push(...e):ke&&e.id===-1?ke.splice(gt+1,0,e):e.flags&1||(vt.push(e),e.flags|=1),wi()}function nr(e,t,n=Ae+1){for(;n<oe.length;n++){const s=oe[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;oe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ii(e){if(vt.length){const t=[...new Set(vt)].sort((n,s)=>kt(n)-kt(s));if(vt.length=0,ke){ke.push(...t);return}for(ke=t,gt=0;gt<ke.length;gt++){const n=ke[gt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ke=null,gt=0}}const kt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ei(e){try{for(Ae=0;Ae<oe.length;Ae++){const t=oe[Ae];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),zt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ae<oe.length;Ae++){const t=oe[Ae];t&&(t.flags&=-2)}Ae=-1,oe.length=0,Ii(),cn=null,(oe.length||vt.length)&&Ei()}}let be=null,Si=null;function fn(e){const t=be;return be=e,Si=e&&e.type.__scopeId||null,t}function Oa(e,t=be,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&fr(-1);const i=fn(t);let o;try{o=e(...r)}finally{fn(i),s._d&&fr(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function sn(e,t){if(be===null)return e;const n=xn(be),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,a,l=k]=t[r];i&&(M(i)&&(i={mounted:i,updated:i}),i.deep&&$e(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function et(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Ye(),Re(l,n,8,[e.el,a,e,t]),Je())}}const Ra=Symbol("_vte"),Ma=e=>e.__isTeleport;function $s(e,t){e.shapeFlag&6&&e.component?(e.transition=t,$s(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ti(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function as(e,t,n,s,r=!1){if(D(e)){e.forEach((x,A)=>as(x,t&&(D(t)?t[A]:t),n,s,r));return}if(Ft(s)&&!r)return;const i=s.shapeFlag&4?xn(s.component):s.el,o=r?null:i,{i:a,r:l}=e,u=t&&t.r,d=a.refs===k?a.refs={}:a.refs,p=a.setupState,v=$(p),I=p===k?()=>!1:x=>B(v,x);if(u!=null&&u!==l&&(Q(u)?(d[u]=null,I(u)&&(p[u]=null)):Z(u)&&(u.value=null)),M(l))zt(l,a,12,[o,d]);else{const x=Q(l),A=Z(l);if(x||A){const j=()=>{if(e.f){const L=x?I(l)?p[l]:d[l]:l.value;r?D(L)&&Es(L,i):D(L)?L.includes(i)||L.push(i):x?(d[l]=[i],I(l)&&(p[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else x?(d[l]=o,I(l)&&(p[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,he(j,n)):j()}}}wn().requestIdleCallback;wn().cancelIdleCallback;const Ft=e=>!!e.type.__asyncLoader,Ai=e=>e.type.__isKeepAlive;function Pa(e,t){Ci(e,"a",t)}function Fa(e,t){Ci(e,"da",t)}function Ci(e,t,n=le){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Tn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ai(r.parent.vnode)&&$a(s,t,n,r),r=r.parent}}function $a(e,t,n,s){const r=Tn(t,e,s,!0);xi(()=>{Es(s[t],r)},n)}function Tn(e,t,n=le,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Ye();const a=qt(n),l=Re(t,n,e,o);return a(),Je(),l});return s?r.unshift(i):r.push(i),i}}const Le=e=>(t,n=le)=>{(!Ut||e==="sp")&&Tn(e,(...s)=>t(...s),n)},Ba=Le("bm"),Na=Le("m"),La=Le("bu"),Ha=Le("u"),ja=Le("bum"),xi=Le("um"),ka=Le("sp"),Va=Le("rtg"),Ua=Le("rtc");function Wa(e,t=le){Tn("ec",e,t)}const Ka=Symbol.for("v-ndc");function za(e,t,n,s){let r;const i=n,o=D(e);if(o||Q(e)){const a=o&&_t(e);let l=!1;a&&(l=!ye(e),e=En(e)),r=new Array(e.length);for(let u=0,d=e.length;u<d;u++)r[u]=t(l?se(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i)}else if(z(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,i));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const d=a[l];r[l]=t(e[d],d,l,i)}}else r=[];return r}const ls=e=>e?Yi(e)?xn(e):ls(e.parent):null,$t=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ls(e.parent),$root:e=>ls(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Bs(e),$forceUpdate:e=>e.f||(e.f=()=>{Fs(e.update)}),$nextTick:e=>e.n||(e.n=Ca.bind(e.proxy)),$watch:e=>pl.bind(e)}),jn=(e,t)=>e!==k&&!e.__isScriptSetup&&B(e,t),qa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const I=o[t];if(I!==void 0)switch(I){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(jn(s,t))return o[t]=1,s[t];if(r!==k&&B(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&B(u,t))return o[t]=3,i[t];if(n!==k&&B(n,t))return o[t]=4,n[t];cs&&(o[t]=0)}}const d=$t[t];let p,v;if(d)return t==="$attrs"&&ne(e.attrs,"get",""),d(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==k&&B(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,B(v,t))return v[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return jn(r,t)?(r[t]=n,!0):s!==k&&B(s,t)?(s[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==k&&B(e,o)||jn(t,o)||(a=i[0])&&B(a,o)||B(s,o)||B($t,o)||B(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function sr(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let cs=!0;function Ga(e){const t=Bs(e),n=e.proxy,s=e.ctx;cs=!1,t.beforeCreate&&rr(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:d,beforeMount:p,mounted:v,beforeUpdate:I,updated:x,activated:A,deactivated:j,beforeDestroy:L,beforeUnmount:Y,destroyed:J,unmounted:O,render:X,renderTracked:He,renderTriggered:Ie,errorCaptured:je,serverPrefetch:Gt,expose:Qe,inheritAttrs:St,components:Yt,directives:Jt,filters:Pn}=t;if(u&&Ya(u,s,null),o)for(const G in o){const V=o[G];M(V)&&(s[G]=V.bind(n))}if(r){const G=r.call(n,n);z(G)&&(e.data=Rs(G))}if(cs=!0,i)for(const G in i){const V=i[G],Xe=M(V)?V.bind(n,n):M(V.get)?V.get.bind(n,n):De,Qt=!M(V)&&M(V.set)?V.set.bind(n):De,Ze=Qi({get:Xe,set:Qt});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Ee=>Ze.value=Ee})}if(a)for(const G in a)Di(a[G],s,n,G);if(l){const G=M(l)?l.call(n):l;Reflect.ownKeys(G).forEach(V=>{tl(V,G[V])})}d&&rr(d,e,"c");function re(G,V){D(V)?V.forEach(Xe=>G(Xe.bind(n))):V&&G(V.bind(n))}if(re(Ba,p),re(Na,v),re(La,I),re(Ha,x),re(Pa,A),re(Fa,j),re(Wa,je),re(Ua,He),re(Va,Ie),re(ja,Y),re(xi,O),re(ka,Gt),D(Qe))if(Qe.length){const G=e.exposed||(e.exposed={});Qe.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:Xe=>n[V]=Xe})})}else e.exposed||(e.exposed={});X&&e.render===De&&(e.render=X),St!=null&&(e.inheritAttrs=St),Yt&&(e.components=Yt),Jt&&(e.directives=Jt),Gt&&Ti(e)}function Ya(e,t,n=De){D(e)&&(e=fs(e));for(const s in e){const r=e[s];let i;z(r)?"default"in r?i=rn(r.from||s,r.default,!0):i=rn(r.from||s):i=rn(r),Z(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function rr(e,t,n){Re(D(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Di(e,t,n,s){let r=s.includes(".")?Ui(n,s):()=>n[s];if(Q(e)){const i=t[e];M(i)&&Vn(r,i)}else if(M(e))Vn(r,e.bind(n));else if(z(e))if(D(e))e.forEach(i=>Di(i,t,n,s));else{const i=M(e.handler)?e.handler.bind(n):t[e.handler];M(i)&&Vn(r,i,e)}}function Bs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(u=>un(l,u,o,!0)),un(l,t,o)),z(t)&&i.set(t,l),l}function un(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&un(e,i,n,!0),r&&r.forEach(o=>un(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Ja[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Ja={data:ir,props:or,emits:or,methods:Ot,computed:Ot,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:Ot,directives:Ot,watch:Xa,provide:ir,inject:Qa};function ir(e,t){return t?e?function(){return ee(M(e)?e.call(this,this):e,M(t)?t.call(this,this):t)}:t:e}function Qa(e,t){return Ot(fs(e),fs(t))}function fs(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Ot(e,t){return e?ee(Object.create(null),e,t):t}function or(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:ee(Object.create(null),sr(e),sr(t??{})):t}function Xa(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const s in t)n[s]=ie(e[s],t[s]);return n}function Oi(){return{app:null,config:{isNativeTag:Ho,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Za=0;function el(e,t){return function(s,r=null){M(s)||(s=ee({},s)),r!=null&&!z(r)&&(r=null);const i=Oi(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:Za++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:$l,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&M(d.install)?(o.add(d),d.install(u,...p)):M(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,v){if(!l){const I=u._ceVNode||Be(s,r);return I.appContext=i,v===!0?v="svg":v===!1&&(v=void 0),p&&t?t(I,d):e(I,d,v),l=!0,u._container=d,d.__vue_app__=u,xn(I.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Re(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=wt;wt=u;try{return d()}finally{wt=p}}};return u}}let wt=null;function tl(e,t){if(le){let n=le.provides;const s=le.parent&&le.parent.provides;s===n&&(n=le.provides=Object.create(s)),n[e]=t}}function rn(e,t,n=!1){const s=le||be;if(s||wt){const r=wt?wt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&M(t)?t.call(s&&s.proxy):t}}const Ri={},Mi=()=>Object.create(Ri),Pi=e=>Object.getPrototypeOf(e)===Ri;function nl(e,t,n,s=!1){const r={},i=Mi();e.propsDefaults=Object.create(null),Fi(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:ba(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function sl(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=$(r),[l]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let v=d[p];if(An(e.emitsOptions,v))continue;const I=t[v];if(l)if(B(i,v))I!==i[v]&&(i[v]=I,u=!0);else{const x=qe(v);r[x]=us(l,a,x,I,e,!1)}else I!==i[v]&&(i[v]=I,u=!0)}}}else{Fi(e,t,r,i)&&(u=!0);let d;for(const p in a)(!t||!B(t,p)&&((d=dt(p))===p||!B(t,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=us(l,a,p,void 0,e,!0)):delete r[p]);if(i!==a)for(const p in i)(!t||!B(t,p))&&(delete i[p],u=!0)}u&&Fe(e.attrs,"set","")}function Fi(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Rt(l))continue;const u=t[l];let d;r&&B(r,d=qe(l))?!i||!i.includes(d)?n[d]=u:(a||(a={}))[d]=u:An(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=$(n),u=a||k;for(let d=0;d<i.length;d++){const p=i[d];n[p]=us(r,l,p,u[p],e,!B(u,p))}}return o}function us(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=B(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&M(l)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const d=qt(r);s=u[n]=l.call(null,t),d()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===dt(n))&&(s=!0))}return s}const rl=new WeakMap;function $i(e,t,n=!1){const s=n?rl:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let l=!1;if(!M(e)){const d=p=>{l=!0;const[v,I]=$i(p,t,!0);ee(o,v),I&&a.push(...I)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return z(e)&&s.set(e,mt),mt;if(D(i))for(let d=0;d<i.length;d++){const p=qe(i[d]);ar(p)&&(o[p]=k)}else if(i)for(const d in i){const p=qe(d);if(ar(p)){const v=i[d],I=o[p]=D(v)||M(v)?{type:v}:ee({},v),x=I.type;let A=!1,j=!0;if(D(x))for(let L=0;L<x.length;++L){const Y=x[L],J=M(Y)&&Y.name;if(J==="Boolean"){A=!0;break}else J==="String"&&(j=!1)}else A=M(x)&&x.name==="Boolean";I[0]=A,I[1]=j,(A||B(I,"default"))&&a.push(p)}}const u=[o,a];return z(e)&&s.set(e,u),u}function ar(e){return e[0]!=="$"&&!Rt(e)}const Bi=e=>e[0]==="_"||e==="$stable",Ns=e=>D(e)?e.map(Ce):[Ce(e)],il=(e,t,n)=>{if(t._n)return t;const s=Oa((...r)=>Ns(t(...r)),n);return s._c=!1,s},Ni=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Bi(r))continue;const i=e[r];if(M(i))t[r]=il(r,i,s);else if(i!=null){const o=Ns(i);t[r]=()=>o}}},Li=(e,t)=>{const n=Ns(t);e.slots.default=()=>n},Hi=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},ol=(e,t,n)=>{const s=e.slots=Mi();if(e.vnode.shapeFlag&32){const r=t._;r?(Hi(s,t,n),n&&Xr(s,"_",r,!0)):Ni(t,s)}else t&&Li(e,t)},al=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=k;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Hi(r,t,n):(i=!t.$stable,Ni(t,r)),o=t}else t&&(Li(e,t),o={default:1});if(i)for(const a in r)!Bi(a)&&o[a]==null&&delete r[a]},he=wl;function ll(e){return cl(e)}function cl(e,t){const n=wn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:v,setScopeId:I=De,insertStaticContent:x}=e,A=(c,f,h,b=null,g=null,m=null,E=void 0,w=null,_=!!f.dynamicChildren)=>{if(c===f)return;c&&!Dt(c,f)&&(b=Xt(c),Ee(c,g,m,!0),c=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:y,ref:C,shapeFlag:S}=f;switch(y){case Cn:j(c,f,h,b);break;case lt:L(c,f,h,b);break;case Wn:c==null&&Y(f,h,b,E);break;case ve:Yt(c,f,h,b,g,m,E,w,_);break;default:S&1?X(c,f,h,b,g,m,E,w,_):S&6?Jt(c,f,h,b,g,m,E,w,_):(S&64||S&128)&&y.process(c,f,h,b,g,m,E,w,_,At)}C!=null&&g&&as(C,c&&c.ref,m,f||c,!f)},j=(c,f,h,b)=>{if(c==null)s(f.el=a(f.children),h,b);else{const g=f.el=c.el;f.children!==c.children&&u(g,f.children)}},L=(c,f,h,b)=>{c==null?s(f.el=l(f.children||""),h,b):f.el=c.el},Y=(c,f,h,b)=>{[c.el,c.anchor]=x(c.children,f,h,b,c.el,c.anchor)},J=({el:c,anchor:f},h,b)=>{let g;for(;c&&c!==f;)g=v(c),s(c,h,b),c=g;s(f,h,b)},O=({el:c,anchor:f})=>{let h;for(;c&&c!==f;)h=v(c),r(c),c=h;r(f)},X=(c,f,h,b,g,m,E,w,_)=>{f.type==="svg"?E="svg":f.type==="math"&&(E="mathml"),c==null?He(f,h,b,g,m,E,w,_):Gt(c,f,g,m,E,w,_)},He=(c,f,h,b,g,m,E,w)=>{let _,y;const{props:C,shapeFlag:S,transition:T,dirs:R}=c;if(_=c.el=o(c.type,m,C&&C.is,C),S&8?d(_,c.children):S&16&&je(c.children,_,null,b,g,kn(c,m),E,w),R&&et(c,null,b,"created"),Ie(_,c,c.scopeId,E,b),C){for(const U in C)U!=="value"&&!Rt(U)&&i(_,U,null,C[U],m,b);"value"in C&&i(_,"value",null,C.value,m),(y=C.onVnodeBeforeMount)&&Te(y,b,c)}R&&et(c,null,b,"beforeMount");const F=fl(g,T);F&&T.beforeEnter(_),s(_,f,h),((y=C&&C.onVnodeMounted)||F||R)&&he(()=>{y&&Te(y,b,c),F&&T.enter(_),R&&et(c,null,b,"mounted")},g)},Ie=(c,f,h,b,g)=>{if(h&&I(c,h),b)for(let m=0;m<b.length;m++)I(c,b[m]);if(g){let m=g.subTree;if(f===m||Ki(m.type)&&(m.ssContent===f||m.ssFallback===f)){const E=g.vnode;Ie(c,E,E.scopeId,E.slotScopeIds,g.parent)}}},je=(c,f,h,b,g,m,E,w,_=0)=>{for(let y=_;y<c.length;y++){const C=c[y]=w?Ve(c[y]):Ce(c[y]);A(null,C,f,h,b,g,m,E,w)}},Gt=(c,f,h,b,g,m,E)=>{const w=f.el=c.el;let{patchFlag:_,dynamicChildren:y,dirs:C}=f;_|=c.patchFlag&16;const S=c.props||k,T=f.props||k;let R;if(h&&tt(h,!1),(R=T.onVnodeBeforeUpdate)&&Te(R,h,f,c),C&&et(f,c,h,"beforeUpdate"),h&&tt(h,!0),(S.innerHTML&&T.innerHTML==null||S.textContent&&T.textContent==null)&&d(w,""),y?Qe(c.dynamicChildren,y,w,h,b,kn(f,g),m):E||V(c,f,w,null,h,b,kn(f,g),m,!1),_>0){if(_&16)St(w,S,T,h,g);else if(_&2&&S.class!==T.class&&i(w,"class",null,T.class,g),_&4&&i(w,"style",S.style,T.style,g),_&8){const F=f.dynamicProps;for(let U=0;U<F.length;U++){const H=F[U],fe=S[H],te=T[H];(te!==fe||H==="value")&&i(w,H,fe,te,g,h)}}_&1&&c.children!==f.children&&d(w,f.children)}else!E&&y==null&&St(w,S,T,h,g);((R=T.onVnodeUpdated)||C)&&he(()=>{R&&Te(R,h,f,c),C&&et(f,c,h,"updated")},b)},Qe=(c,f,h,b,g,m,E)=>{for(let w=0;w<f.length;w++){const _=c[w],y=f[w],C=_.el&&(_.type===ve||!Dt(_,y)||_.shapeFlag&70)?p(_.el):h;A(_,y,C,null,b,g,m,E,!0)}},St=(c,f,h,b,g)=>{if(f!==h){if(f!==k)for(const m in f)!Rt(m)&&!(m in h)&&i(c,m,f[m],null,g,b);for(const m in h){if(Rt(m))continue;const E=h[m],w=f[m];E!==w&&m!=="value"&&i(c,m,w,E,g,b)}"value"in h&&i(c,"value",f.value,h.value,g)}},Yt=(c,f,h,b,g,m,E,w,_)=>{const y=f.el=c?c.el:a(""),C=f.anchor=c?c.anchor:a("");let{patchFlag:S,dynamicChildren:T,slotScopeIds:R}=f;R&&(w=w?w.concat(R):R),c==null?(s(y,h,b),s(C,h,b),je(f.children||[],h,C,g,m,E,w,_)):S>0&&S&64&&T&&c.dynamicChildren?(Qe(c.dynamicChildren,T,h,g,m,E,w),(f.key!=null||g&&f===g.subTree)&&ji(c,f,!0)):V(c,f,h,C,g,m,E,w,_)},Jt=(c,f,h,b,g,m,E,w,_)=>{f.slotScopeIds=w,c==null?f.shapeFlag&512?g.ctx.activate(f,h,b,E,_):Pn(f,h,b,g,m,E,_):Ks(c,f,_)},Pn=(c,f,h,b,g,m,E)=>{const w=c.component=Dl(c,b,g);if(Ai(c)&&(w.ctx.renderer=At),Ol(w,!1,E),w.asyncDep){if(g&&g.registerDep(w,re,E),!c.el){const _=w.subTree=Be(lt);L(null,_,f,h)}}else re(w,c,f,h,g,m,E)},Ks=(c,f,h)=>{const b=f.component=c.component;if(_l(c,f,h))if(b.asyncDep&&!b.asyncResolved){G(b,f,h);return}else b.next=f,b.update();else f.el=c.el,b.vnode=f},re=(c,f,h,b,g,m,E)=>{const w=()=>{if(c.isMounted){let{next:S,bu:T,u:R,parent:F,vnode:U}=c;{const ue=ki(c);if(ue){S&&(S.el=U.el,G(c,S,E)),ue.asyncDep.then(()=>{c.isUnmounted||w()});return}}let H=S,fe;tt(c,!1),S?(S.el=U.el,G(c,S,E)):S=U,T&&nn(T),(fe=S.props&&S.props.onVnodeBeforeUpdate)&&Te(fe,F,S,U),tt(c,!0);const te=Un(c),_e=c.subTree;c.subTree=te,A(_e,te,p(_e.el),Xt(_e),c,g,m),S.el=te.el,H===null&&vl(c,te.el),R&&he(R,g),(fe=S.props&&S.props.onVnodeUpdated)&&he(()=>Te(fe,F,S,U),g)}else{let S;const{el:T,props:R}=f,{bm:F,m:U,parent:H,root:fe,type:te}=c,_e=Ft(f);if(tt(c,!1),F&&nn(F),!_e&&(S=R&&R.onVnodeBeforeMount)&&Te(S,H,f),tt(c,!0),T&&Ys){const ue=()=>{c.subTree=Un(c),Ys(T,c.subTree,c,g,null)};_e&&te.__asyncHydrate?te.__asyncHydrate(T,c,ue):ue()}else{fe.ce&&fe.ce._injectChildStyle(te);const ue=c.subTree=Un(c);A(null,ue,h,b,c,g,m),f.el=ue.el}if(U&&he(U,g),!_e&&(S=R&&R.onVnodeMounted)){const ue=f;he(()=>Te(S,H,ue),g)}(f.shapeFlag&256||H&&Ft(H.vnode)&&H.vnode.shapeFlag&256)&&c.a&&he(c.a,g),c.isMounted=!0,f=h=b=null}};c.scope.on();const _=c.effect=new si(w);c.scope.off();const y=c.update=_.run.bind(_),C=c.job=_.runIfDirty.bind(_);C.i=c,C.id=c.uid,_.scheduler=()=>Fs(C),tt(c,!0),y()},G=(c,f,h)=>{f.component=c;const b=c.vnode.props;c.vnode=f,c.next=null,sl(c,f.props,b,h),al(c,f.children,h),Ye(),nr(c),Je()},V=(c,f,h,b,g,m,E,w,_=!1)=>{const y=c&&c.children,C=c?c.shapeFlag:0,S=f.children,{patchFlag:T,shapeFlag:R}=f;if(T>0){if(T&128){Qt(y,S,h,b,g,m,E,w,_);return}else if(T&256){Xe(y,S,h,b,g,m,E,w,_);return}}R&8?(C&16&&Tt(y,g,m),S!==y&&d(h,S)):C&16?R&16?Qt(y,S,h,b,g,m,E,w,_):Tt(y,g,m,!0):(C&8&&d(h,""),R&16&&je(S,h,b,g,m,E,w,_))},Xe=(c,f,h,b,g,m,E,w,_)=>{c=c||mt,f=f||mt;const y=c.length,C=f.length,S=Math.min(y,C);let T;for(T=0;T<S;T++){const R=f[T]=_?Ve(f[T]):Ce(f[T]);A(c[T],R,h,null,g,m,E,w,_)}y>C?Tt(c,g,m,!0,!1,S):je(f,h,b,g,m,E,w,_,S)},Qt=(c,f,h,b,g,m,E,w,_)=>{let y=0;const C=f.length;let S=c.length-1,T=C-1;for(;y<=S&&y<=T;){const R=c[y],F=f[y]=_?Ve(f[y]):Ce(f[y]);if(Dt(R,F))A(R,F,h,null,g,m,E,w,_);else break;y++}for(;y<=S&&y<=T;){const R=c[S],F=f[T]=_?Ve(f[T]):Ce(f[T]);if(Dt(R,F))A(R,F,h,null,g,m,E,w,_);else break;S--,T--}if(y>S){if(y<=T){const R=T+1,F=R<C?f[R].el:b;for(;y<=T;)A(null,f[y]=_?Ve(f[y]):Ce(f[y]),h,F,g,m,E,w,_),y++}}else if(y>T)for(;y<=S;)Ee(c[y],g,m,!0),y++;else{const R=y,F=y,U=new Map;for(y=F;y<=T;y++){const de=f[y]=_?Ve(f[y]):Ce(f[y]);de.key!=null&&U.set(de.key,y)}let H,fe=0;const te=T-F+1;let _e=!1,ue=0;const Ct=new Array(te);for(y=0;y<te;y++)Ct[y]=0;for(y=R;y<=S;y++){const de=c[y];if(fe>=te){Ee(de,g,m,!0);continue}let Se;if(de.key!=null)Se=U.get(de.key);else for(H=F;H<=T;H++)if(Ct[H-F]===0&&Dt(de,f[H])){Se=H;break}Se===void 0?Ee(de,g,m,!0):(Ct[Se-F]=y+1,Se>=ue?ue=Se:_e=!0,A(de,f[Se],h,null,g,m,E,w,_),fe++)}const Js=_e?ul(Ct):mt;for(H=Js.length-1,y=te-1;y>=0;y--){const de=F+y,Se=f[de],Qs=de+1<C?f[de+1].el:b;Ct[y]===0?A(null,Se,h,Qs,g,m,E,w,_):_e&&(H<0||y!==Js[H]?Ze(Se,h,Qs,2):H--)}}},Ze=(c,f,h,b,g=null)=>{const{el:m,type:E,transition:w,children:_,shapeFlag:y}=c;if(y&6){Ze(c.component.subTree,f,h,b);return}if(y&128){c.suspense.move(f,h,b);return}if(y&64){E.move(c,f,h,At);return}if(E===ve){s(m,f,h);for(let S=0;S<_.length;S++)Ze(_[S],f,h,b);s(c.anchor,f,h);return}if(E===Wn){J(c,f,h);return}if(b!==2&&y&1&&w)if(b===0)w.beforeEnter(m),s(m,f,h),he(()=>w.enter(m),g);else{const{leave:S,delayLeave:T,afterLeave:R}=w,F=()=>s(m,f,h),U=()=>{S(m,()=>{F(),R&&R()})};T?T(m,F,U):U()}else s(m,f,h)},Ee=(c,f,h,b=!1,g=!1)=>{const{type:m,props:E,ref:w,children:_,dynamicChildren:y,shapeFlag:C,patchFlag:S,dirs:T,cacheIndex:R}=c;if(S===-2&&(g=!1),w!=null&&as(w,null,h,c,!0),R!=null&&(f.renderCache[R]=void 0),C&256){f.ctx.deactivate(c);return}const F=C&1&&T,U=!Ft(c);let H;if(U&&(H=E&&E.onVnodeBeforeUnmount)&&Te(H,f,c),C&6)Lo(c.component,h,b);else{if(C&128){c.suspense.unmount(h,b);return}F&&et(c,null,f,"beforeUnmount"),C&64?c.type.remove(c,f,h,At,b):y&&!y.hasOnce&&(m!==ve||S>0&&S&64)?Tt(y,f,h,!1,!0):(m===ve&&S&384||!g&&C&16)&&Tt(_,f,h),b&&zs(c)}(U&&(H=E&&E.onVnodeUnmounted)||F)&&he(()=>{H&&Te(H,f,c),F&&et(c,null,f,"unmounted")},h)},zs=c=>{const{type:f,el:h,anchor:b,transition:g}=c;if(f===ve){No(h,b);return}if(f===Wn){O(c);return}const m=()=>{r(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:w}=g,_=()=>E(h,m);w?w(c.el,m,_):_()}else m()},No=(c,f)=>{let h;for(;c!==f;)h=v(c),r(c),c=h;r(f)},Lo=(c,f,h)=>{const{bum:b,scope:g,job:m,subTree:E,um:w,m:_,a:y}=c;lr(_),lr(y),b&&nn(b),g.stop(),m&&(m.flags|=8,Ee(E,c,f,h)),w&&he(w,f),he(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Tt=(c,f,h,b=!1,g=!1,m=0)=>{for(let E=m;E<c.length;E++)Ee(c[E],f,h,b,g)},Xt=c=>{if(c.shapeFlag&6)return Xt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=v(c.anchor||c.el),h=f&&f[Ra];return h?v(h):f};let Fn=!1;const qs=(c,f,h)=>{c==null?f._vnode&&Ee(f._vnode,null,null,!0):A(f._vnode||null,c,f,null,null,null,h),f._vnode=c,Fn||(Fn=!0,nr(),Ii(),Fn=!1)},At={p:A,um:Ee,m:Ze,r:zs,mt:Pn,mc:je,pc:V,pbc:Qe,n:Xt,o:e};let Gs,Ys;return{render:qs,hydrate:Gs,createApp:el(qs,Gs)}}function kn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function tt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function fl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ji(e,t,n=!1){const s=e.children,r=t.children;if(D(s)&&D(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ve(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ji(o,a)),a.type===Cn&&(a.el=o.el)}}function ul(e){const t=e.slice(),n=[0];let s,r,i,o,a;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function ki(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ki(t)}function lr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const dl=Symbol.for("v-scx"),hl=()=>rn(dl);function Vn(e,t,n){return Vi(e,t,n)}function Vi(e,t,n=k){const{immediate:s,deep:r,flush:i,once:o}=n,a=ee({},n),l=t&&s||!t&&i!=="post";let u;if(Ut){if(i==="sync"){const I=hl();u=I.__watcherHandles||(I.__watcherHandles=[])}else if(!l){const I=()=>{};return I.stop=De,I.resume=De,I.pause=De,I}}const d=le;a.call=(I,x,A)=>Re(I,d,x,A);let p=!1;i==="post"?a.scheduler=I=>{he(I,d&&d.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(I,x)=>{x?I():Fs(I)}),a.augmentJob=I=>{t&&(I.flags|=4),p&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const v=Ta(e,t,a);return Ut&&(u?u.push(v):l&&v()),v}function pl(e,t,n){const s=this.proxy,r=Q(e)?e.includes(".")?Ui(s,e):()=>s[e]:e.bind(s,s);let i;M(t)?i=t:(i=t.handler,n=t);const o=qt(this),a=Vi(r,i.bind(s),n);return o(),a}function Ui(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const gl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${qe(t)}Modifiers`]||e[`${dt(t)}Modifiers`];function ml(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||k;let r=n;const i=t.startsWith("update:"),o=i&&gl(s,t.slice(7));o&&(o.trim&&(r=n.map(d=>Q(d)?d.trim():d)),o.number&&(r=n.map(ts)));let a,l=s[a=$n(t)]||s[a=$n(qe(t))];!l&&i&&(l=s[a=$n(dt(t))]),l&&Re(l,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Re(u,e,6,r)}}function Wi(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!M(e)){const l=u=>{const d=Wi(u,t,!0);d&&(a=!0,ee(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(z(e)&&s.set(e,null),null):(D(i)?i.forEach(l=>o[l]=null):ee(o,i),z(e)&&s.set(e,o),o)}function An(e,t){return!e||!yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,dt(t))||B(e,t))}function Un(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:d,props:p,data:v,setupState:I,ctx:x,inheritAttrs:A}=e,j=fn(e);let L,Y;try{if(n.shapeFlag&4){const O=r||s,X=O;L=Ce(u.call(X,O,d,p,I,v,x)),Y=a}else{const O=t;L=Ce(O.length>1?O(p,{attrs:a,slots:o,emit:l}):O(p,null)),Y=t.props?a:bl(a)}}catch(O){Bt.length=0,Sn(O,e,1),L=Be(lt)}let J=L;if(Y&&A!==!1){const O=Object.keys(Y),{shapeFlag:X}=J;O.length&&X&7&&(i&&O.some(Is)&&(Y=yl(Y,i)),J=Et(J,Y,!1,!0))}return n.dirs&&(J=Et(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&$s(J,n.transition),L=J,fn(j),L}const bl=e=>{let t;for(const n in e)(n==="class"||n==="style"||yn(n))&&((t||(t={}))[n]=e[n]);return t},yl=(e,t)=>{const n={};for(const s in e)(!Is(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function _l(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?cr(s,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const v=d[p];if(o[v]!==s[v]&&!An(u,v))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?cr(s,o,u):!0:!!o;return!1}function cr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!An(n,i))return!0}return!1}function vl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ki=e=>e.__isSuspense;function wl(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Da(e)}const ve=Symbol.for("v-fgt"),Cn=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),Wn=Symbol.for("v-stc"),Bt=[];let ge=null;function ae(e=!1){Bt.push(ge=e?null:[])}function Il(){Bt.pop(),ge=Bt[Bt.length-1]||null}let Vt=1;function fr(e){Vt+=e,e<0&&ge&&(ge.hasOnce=!0)}function zi(e){return e.dynamicChildren=Vt>0?ge||mt:null,Il(),Vt>0&&ge&&ge.push(e),e}function xe(e,t,n,s,r,i){return zi(P(e,t,n,s,r,i,!0))}function Nt(e,t,n,s,r){return zi(Be(e,t,n,s,r,!0))}function qi(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const Gi=({key:e})=>e??null,on=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||Z(e)||M(e)?{i:be,r:e,k:t,f:!!n}:e:null);function P(e,t=null,n=null,s=0,r=null,i=e===ve?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gi(t),ref:t&&on(t),scopeId:Si,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:be};return a?(Ls(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Q(n)?8:16),Vt>0&&!o&&ge&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ge.push(l),l}const Be=El;function El(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Ka)&&(e=lt),qi(e)){const a=Et(e,t,!0);return n&&Ls(a,n),Vt>0&&!i&&ge&&(a.shapeFlag&6?ge[ge.indexOf(e)]=a:ge.push(a)),a.patchFlag=-2,a}if(Fl(e)&&(e=e.__vccOpts),t){t=Sl(t);let{class:a,style:l}=t;a&&!Q(a)&&(t.class=q(a)),z(l)&&(Ps(l)&&!D(l)&&(l=ee({},l)),t.style=Ts(l))}const o=Q(e)?1:Ki(e)?128:Ma(e)?64:z(e)?4:M(e)?2:0;return P(e,t,n,s,r,o,i,!0)}function Sl(e){return e?Ps(e)||Pi(e)?ee({},e):e:null}function Et(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=e,u=t?Al(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Gi(u),ref:t&&t.ref?n&&i?D(i)?i.concat(on(t)):[i,on(t)]:on(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&$s(d,l.clone(d)),d}function Tl(e=" ",t=0){return Be(Cn,null,e,t)}function Kn(e="",t=!1){return t?(ae(),Nt(lt,null,e)):Be(lt,null,e)}function Ce(e){return e==null||typeof e=="boolean"?Be(lt):D(e)?Be(ve,null,e.slice()):qi(e)?Ve(e):Be(Cn,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function Ls(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Ls(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Pi(t)?t._ctx=be:r===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else M(t)?(t={default:t,_ctx:be},n=32):(t=String(t),s&64?(n=16,t=[Tl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Al(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=q([t.class,s.class]));else if(r==="style")t.style=Ts([t.style,s.style]);else if(yn(r)){const i=t[r],o=s[r];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function Te(e,t,n,s=null){Re(e,t,7,[n,s])}const Cl=Oi();let xl=0;function Dl(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Cl,i={uid:xl++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$i(s,r),emitsOptions:Wi(s,r),emit:null,emitted:null,propsDefaults:k,inheritAttrs:s.inheritAttrs,ctx:k,data:k,props:k,attrs:k,slots:k,refs:k,setupState:k,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ml.bind(null,i),e.ce&&e.ce(i),i}let le=null,dn,ds;{const e=wn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};dn=t("__VUE_INSTANCE_SETTERS__",n=>le=n),ds=t("__VUE_SSR_SETTERS__",n=>Ut=n)}const qt=e=>{const t=le;return dn(e),e.scope.on(),()=>{e.scope.off(),dn(t)}},ur=()=>{le&&le.scope.off(),dn(null)};function Yi(e){return e.vnode.shapeFlag&4}let Ut=!1;function Ol(e,t=!1,n=!1){t&&ds(t);const{props:s,children:r}=e.vnode,i=Yi(e);nl(e,s,i,t),ol(e,r,n);const o=i?Rl(e,t):void 0;return t&&ds(!1),o}function Rl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,qa);const{setup:s}=n;if(s){Ye();const r=e.setupContext=s.length>1?Pl(e):null,i=qt(e),o=zt(s,e,0,[e.props,r]),a=Gr(o);if(Je(),i(),(a||e.sp)&&!Ft(e)&&Ti(e),a){if(o.then(ur,ur),t)return o.then(l=>{dr(e,l,t)}).catch(l=>{Sn(l,e,0)});e.asyncDep=o}else dr(e,o,t)}else Ji(e,t)}function dr(e,t,n){M(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:z(t)&&(e.setupState=_i(t)),Ji(e,n)}let hr;function Ji(e,t,n){const s=e.type;if(!e.render){if(!t&&hr&&!s.render){const r=s.template||Bs(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,u=ee(ee({isCustomElement:i,delimiters:a},o),l);s.render=hr(r,u)}}e.render=s.render||De}{const r=qt(e);Ye();try{Ga(e)}finally{Je(),r()}}}const Ml={get(e,t){return ne(e,"get",""),e[t]}};function Pl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ml),slots:e.slots,emit:e.emit,expose:t}}function xn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(_i(ya(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}})):e.proxy}function Fl(e){return M(e)&&"__vccOpts"in e}const Qi=(e,t)=>Ea(e,t,Ut),$l="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hs;const pr=typeof window<"u"&&window.trustedTypes;if(pr)try{hs=pr.createPolicy("vue",{createHTML:e=>e})}catch{}const Xi=hs?e=>hs.createHTML(e):e=>e,Bl="http://www.w3.org/2000/svg",Nl="http://www.w3.org/1998/Math/MathML",Pe=typeof document<"u"?document:null,gr=Pe&&Pe.createElement("template"),Ll={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Pe.createElementNS(Bl,e):t==="mathml"?Pe.createElementNS(Nl,e):n?Pe.createElement(e,{is:n}):Pe.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Pe.createTextNode(e),createComment:e=>Pe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{gr.innerHTML=Xi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=gr.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Hl=Symbol("_vtc");function jl(e,t,n){const s=e[Hl];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const mr=Symbol("_vod"),kl=Symbol("_vsh"),Vl=Symbol(""),Ul=/(^|;)\s*display\s*:/;function Wl(e,t,n){const s=e.style,r=Q(n);let i=!1;if(n&&!r){if(t)if(Q(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&an(s,a,"")}else for(const o in t)n[o]==null&&an(s,o,"");for(const o in n)o==="display"&&(i=!0),an(s,o,n[o])}else if(r){if(t!==n){const o=s[Vl];o&&(n+=";"+o),s.cssText=n,i=Ul.test(n)}}else t&&e.removeAttribute("style");mr in e&&(e[mr]=i?s.display:"",e[kl]&&(s.display="none"))}const br=/\s*!important$/;function an(e,t,n){if(D(n))n.forEach(s=>an(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Kl(e,t);br.test(n)?e.setProperty(dt(s),n.replace(br,""),"important"):e[s]=n}}const yr=["Webkit","Moz","ms"],zn={};function Kl(e,t){const n=zn[t];if(n)return n;let s=qe(t);if(s!=="filter"&&s in e)return zn[t]=s;s=Qr(s);for(let r=0;r<yr.length;r++){const i=yr[r]+s;if(i in e)return zn[t]=i}return t}const _r="http://www.w3.org/1999/xlink";function vr(e,t,n,s,r,i=Yo(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_r,t.slice(6,t.length)):e.setAttributeNS(_r,t,n):n==null||i&&!Zr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Oe(n)?String(n):n)}function wr(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Xi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Zr(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function rt(e,t,n,s){e.addEventListener(t,n,s)}function zl(e,t,n,s){e.removeEventListener(t,n,s)}const Ir=Symbol("_vei");function ql(e,t,n,s,r=null){const i=e[Ir]||(e[Ir]={}),o=i[t];if(s&&o)o.value=s;else{const[a,l]=Gl(t);if(s){const u=i[t]=Ql(s,r);rt(e,a,u,l)}else o&&(zl(e,a,o,l),i[t]=void 0)}}const Er=/(?:Once|Passive|Capture)$/;function Gl(e){let t;if(Er.test(e)){t={};let s;for(;s=e.match(Er);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):dt(e.slice(2)),t]}let qn=0;const Yl=Promise.resolve(),Jl=()=>qn||(Yl.then(()=>qn=0),qn=Date.now());function Ql(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Re(Xl(s,n.value),t,5,[s])};return n.value=e,n.attached=Jl(),n}function Xl(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Sr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Zl=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?jl(e,s,o):t==="style"?Wl(e,n,s):yn(t)?Is(t)||ql(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ec(e,t,s,o))?(wr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&vr(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Q(s))?wr(e,qe(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),vr(e,t,s,o))};function ec(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Sr(t)&&M(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Sr(t)&&Q(n)?!1:t in e}const hn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>nn(t,n):t};function tc(e){e.target.composing=!0}function Tr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const It=Symbol("_assign"),ps={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[It]=hn(r);const i=s||r.props&&r.props.type==="number";rt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=ts(a)),e[It](a)}),n&&rt(e,"change",()=>{e.value=e.value.trim()}),t||(rt(e,"compositionstart",tc),rt(e,"compositionend",Tr),rt(e,"change",Tr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[It]=hn(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?ts(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===l)||(e.value=l))}},nc={deep:!0,created(e,t,n){e[It]=hn(n),rt(e,"change",()=>{const s=e._modelValue,r=sc(e),i=e.checked,o=e[It];if(D(s)){const a=ei(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const u=[...s];u.splice(a,1),o(u)}}else if(_n(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Zi(e,i))})},mounted:Ar,beforeUpdate(e,t,n){e[It]=hn(n),Ar(e,t,n)}};function Ar(e,{value:t,oldValue:n},s){e._modelValue=t;let r;if(D(t))r=ei(t,s.props.value)>-1;else if(_n(t))r=t.has(s.props.value);else{if(t===n)return;r=In(t,Zi(e,!0))}e.checked!==r&&(e.checked=r)}function sc(e){return"_value"in e?e._value:e.value}function Zi(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const rc=["ctrl","shift","alt","meta"],ic={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rc.some(n=>e[`${n}Key`]&&!t.includes(n))},Cr=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<t.length;o++){const a=ic[t[o]];if(a&&a(r,t))return}return e(r,...i)})},oc=ee({patchProp:Zl},Ll);let xr;function ac(){return xr||(xr=ll(oc))}const lc=(...e)=>{const t=ac().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=fc(s);if(!r)return;const i=t._component;!M(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,cc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function cc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function fc(e){return Q(e)?document.querySelector(e):e}const uc=["onUpdate:modelValue"],dc={__name:"ListTest",setup(e){let t=0,n="";const s=N(""),r=N(!1),i=N([{id:t++,text:"Поспать",done:!1},{id:t++,text:"Поесть",done:!1},{id:t++,text:"Поспать",done:!1},{id:t++,text:"Поесть",done:!1},{id:t++,text:"Поспать",done:!1},{id:t++,text:"Поесть",done:!1},{id:t++,text:"Поспать",done:!1},{id:t++,text:"Поесть",done:!1}]);function o(){i.value.push({id:t++,text:s.value,done:!1})}function a(){i.value=i.value.filter(x=>x.id!=Number(n))}const l=Qi(()=>r.value?i.value.filter(x=>!x.done):i.value),u=N("Beleberda"),d=N("Tasks"),p=N("EditTasks");N("Done");const v=N("Statistic"),I=N("Todo");return(x,A)=>(ae(),xe("div",{class:q(u.value)},[P("div",{class:q(d.value)},[A[3]||(A[3]=P("h1",{style:{"text-align":"center"}},"Задачи на сегодня",-1)),P("ul",null,[(ae(!0),xe(ve,null,za(l.value,j=>(ae(),xe("li",{key:j.id,class:q(I.value)},[sn(P("input",{type:"checkbox","onUpdate:modelValue":L=>j.done=L},null,8,uc),[[nc,j.done]]),P("span",{class:q({Done:j.done})},yt(j.id)+" – "+yt(j.text),3)],2))),128))])],2),P("div",{class:q(p.value)},[A[6]||(A[6]=P("h1",{style:{"text-align":"center","margin-bottom":"10px"}},"Управлять задачами",-1)),P("div",{class:q(v.value)},[P("p",null,"всего задач: "+yt(i.value.length),1),P("button",{onClick:A[0]||(A[0]=j=>r.value=!r.value),style:{"font-size":"20px",margin:"0px"}},"Скрыть выполненные")],2),A[7]||(A[7]=P("p",null,"Добавить задачу",-1)),P("form",{onSubmit:Cr(o,["prevent"])},[sn(P("input",{"onUpdate:modelValue":A[1]||(A[1]=j=>s.value=j),required:"",placeholder:"Введите задачу"},null,512),[[ps,s.value]]),A[4]||(A[4]=P("button",{style:{width:"23%","font-size":"20px"}},"Добавить",-1))],32),A[8]||(A[8]=P("p",null,"Удалить задачу",-1)),P("form",{onSubmit:Cr(a,["prevent"])},[sn(P("input",{"onUpdate:modelValue":A[2]||(A[2]=j=>Z(n)?n.value=j:n=j),required:"",placeholder:"Введите id"},null,512),[[ps,yi(n)]]),A[5]||(A[5]=P("button",{style:{width:"23%","font-size":"20px"}},"Удалить",-1))],32)],2)],2))}},hc={__name:"IQ-Test",setup(e){N("head");const t=N("iqlist"),n=N("iqtest"),s=N(-1);function r(){s.value*=2}return(i,o)=>(ae(),xe("div",{class:q(n.value)},[P("button",{onClick:r,class:q(i.iqbutt)},"Повысь свой IQ!",2),P("p",{class:q(t.value)},"Ваш IQ: "+yt(s.value),3)],2))}},pc={__name:"Chat-GPT",setup(e){const t=N("chatgpt"),n=N("SendMessage"),s=N("textbox"),r=N("SendButton"),i=N("Answer");N("degenerate");const o=N("Ask"),a=N("AskForm"),l=N("AnsForm"),u=N(""),d=N(!1),p=N("");function v(){d.value=!0,p.value=u.value}return(I,x)=>(ae(),xe("div",{class:q(t.value)},[x[3]||(x[3]=P("h1",{style:{margin:"15px"}},"Обратиться к чат-гтп",-1)),P("div",{class:q(n.value)},[sn(P("input",{class:q(s.value),"onUpdate:modelValue":x[0]||(x[0]=A=>u.value=A),style:{width:"60%"}},null,2),[[ps,u.value]]),P("button",{onClick:v,class:q(r.value),style:{"margin-right":"0px","margin-left":"3px"}},"Отправить",2)],2),P("div",{class:q(a.value)},[x[1]||(x[1]=P("p",{style:{"font-size":"200%"}},"Ваш запрос:",-1)),d.value?(ae(),xe("p",{key:0,class:q(o.value),style:{"font-size":"150%"}},yt(p.value),3)):(ae(),xe("p",{key:1,class:q(o.value),style:{color:"gray"}}," ",2))],2),P("div",{class:q(l.value)},[x[2]||(x[2]=P("p",{style:{"font-size":"200%"}},"Ответ чат-гтп:",-1)),d.value?(ae(),xe("p",{key:0,class:q(i.value),style:{color:"red","font-size":"150%"}},"☠︎︎Вас убили. Вы мертвы!☠︎︎",2)):(ae(),xe("p",{key:1,class:q(I.Ans),style:{color:"gray"}}," ",2))],2)],2))}},gc={__name:"menu",setup(e){const t=N("hellotion"),n=N("HeadMessage"),s=N(!1),r=N(!1),i=N(!1);function o(){i.value=!1,s.value=!1,r.value=!0}function a(){i.value=!1,r.value=!1,s.value=!0}function l(){r.value=!1,s.value=!1,i.value=!0}return(u,d)=>(ae(),xe(ve,null,[P("header",null,[P("div",{class:q(t.value)},[P("h1",{class:q(n.value)},"Сайт для когнитивно одаренных",2),P("button",{onClick:a},"IQ-тест"),P("button",{onClick:o},"Chat-pgt"),P("button",{onClick:l},"Работа")],2)]),s.value?(ae(),Nt(hc,{key:0})):Kn("",!0),r.value?(ae(),Nt(pc,{key:1})):Kn("",!0),i.value?(ae(),Nt(dc,{key:2})):Kn("",!0)],64))}},mc={__name:"App",setup(e){return(t,n)=>(ae(),Nt(gc))}};var Dr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},bc=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},to={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,u=l?e[r+2]:0,d=i>>2,p=(i&3)<<4|a>>4;let v=(a&15)<<2|u>>6,I=u&63;l||(I=64,o||(v=64)),s.push(n[d],n[p],n[v],n[I])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(eo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):bc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const p=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||p==null)throw new yc;const v=i<<2|a>>4;if(s.push(v),u!==64){const I=a<<4&240|u>>2;if(s.push(I),p!==64){const x=u<<6&192|p;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _c=function(e){const t=eo(e);return to.encodeByteArray(t,!0)},no=function(e){return _c(e).replace(/\./g,"")},vc=function(e){try{return to.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=()=>wc().__FIREBASE_DEFAULTS__,Ec=()=>{if(typeof process>"u"||typeof Dr>"u")return;const e=Dr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Sc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&vc(e[1]);return t&&JSON.parse(t)},Tc=()=>{try{return Ic()||Ec()||Sc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},so=()=>{var e;return(e=Tc())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function Cc(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ro(){try{return typeof indexedDB=="object"}catch{return!1}}function io(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function xc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="FirebaseError";class ht extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Dc,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dn.prototype.create)}}class Dn{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Oc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ht(r,a,s)}}function Oc(e,t){return e.replace(Rc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Rc=/\{\$([^}]+)}/g;function pn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Or(i)&&Or(o)){if(!pn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Or(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=1e3,Pc=2,Fc=4*60*60*1e3,$c=.5;function Rr(e,t=Mc,n=Pc){const s=t*Math.pow(n,e),r=Math.round($c*s*(Math.random()-.5)*2);return Math.min(Fc,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e){return e&&e._delegate?e._delegate:e}class Ge{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Ac;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Lc(t))try{this.getOrInitializeService({instanceIdentifier:st})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=st){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=st){return this.instances.has(t)}getOptions(t=st){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Nc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=st){return this.component?this.component.multipleInstances?t:st:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nc(e){return e===st?void 0:e}function Lc(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Bc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const jc={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},kc=K.INFO,Vc={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Uc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Vc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ao{constructor(t){this.name=t,this._logLevel=kc,this._logHandler=Uc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Wc=(e,t)=>t.some(n=>e instanceof n);let Mr,Pr;function Kc(){return Mr||(Mr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zc(){return Pr||(Pr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lo=new WeakMap,gs=new WeakMap,co=new WeakMap,Gn=new WeakMap,Hs=new WeakMap;function qc(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(We(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&lo.set(n,e)}).catch(()=>{}),Hs.set(t,e),t}function Gc(e){if(gs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});gs.set(e,t)}let ms={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return gs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||co.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return We(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Yc(e){ms=e(ms)}function Jc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Yn(this),t,...n);return co.set(s,t.sort?t.sort():[t]),We(s)}:zc().includes(e)?function(...t){return e.apply(Yn(this),t),We(lo.get(this))}:function(...t){return We(e.apply(Yn(this),t))}}function Qc(e){return typeof e=="function"?Jc(e):(e instanceof IDBTransaction&&Gc(e),Wc(e,Kc())?new Proxy(e,ms):e)}function We(e){if(e instanceof IDBRequest)return qc(e);if(Gn.has(e))return Gn.get(e);const t=Qc(e);return t!==e&&(Gn.set(e,t),Hs.set(t,e)),t}const Yn=e=>Hs.get(e);function fo(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=We(o);return s&&o.addEventListener("upgradeneeded",l=>{s(We(o.result),l.oldVersion,l.newVersion,We(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Xc=["get","getKey","getAll","getAllKeys","count"],Zc=["put","add","delete","clear"],Jn=new Map;function Fr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Jn.get(t))return Jn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Zc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Xc.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return Jn.set(t,i),i}Yc(e=>({...e,get:(t,n,s)=>Fr(t,n)||e.get(t,n,s),has:(t,n)=>!!Fr(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tf(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const bs="@firebase/app",$r="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new ao("@firebase/app"),nf="@firebase/app-compat",sf="@firebase/analytics-compat",rf="@firebase/analytics",of="@firebase/app-check-compat",af="@firebase/app-check",lf="@firebase/auth",cf="@firebase/auth-compat",ff="@firebase/database",uf="@firebase/data-connect",df="@firebase/database-compat",hf="@firebase/functions",pf="@firebase/functions-compat",gf="@firebase/installations",mf="@firebase/installations-compat",bf="@firebase/messaging",yf="@firebase/messaging-compat",_f="@firebase/performance",vf="@firebase/performance-compat",wf="@firebase/remote-config",If="@firebase/remote-config-compat",Ef="@firebase/storage",Sf="@firebase/storage-compat",Tf="@firebase/firestore",Af="@firebase/vertexai",Cf="@firebase/firestore-compat",xf="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]",Df={[bs]:"fire-core",[nf]:"fire-core-compat",[rf]:"fire-analytics",[sf]:"fire-analytics-compat",[af]:"fire-app-check",[of]:"fire-app-check-compat",[lf]:"fire-auth",[cf]:"fire-auth-compat",[ff]:"fire-rtdb",[uf]:"fire-data-connect",[df]:"fire-rtdb-compat",[hf]:"fire-fn",[pf]:"fire-fn-compat",[gf]:"fire-iid",[mf]:"fire-iid-compat",[bf]:"fire-fcm",[yf]:"fire-fcm-compat",[_f]:"fire-perf",[vf]:"fire-perf-compat",[wf]:"fire-rc",[If]:"fire-rc-compat",[Ef]:"fire-gcs",[Sf]:"fire-gcs-compat",[Tf]:"fire-fst",[Cf]:"fire-fst-compat",[Af]:"fire-vertex","fire-js":"fire-js",[xf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new Map,Of=new Map,_s=new Map;function Br(e,t){try{e.container.addComponent(t)}catch(n){Ne.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ct(e){const t=e.name;if(_s.has(t))return Ne.debug(`There were multiple attempts to register component ${t}.`),!1;_s.set(t,e);for(const n of gn.values())Br(n,e);for(const n of Of.values())Br(n,e);return!0}function On(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new Dn("app","Firebase",Rf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}function uo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ys,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Ke.create("bad-app-name",{appName:String(r)});if(n||(n=so()),!n)throw Ke.create("no-options");const i=gn.get(r);if(i){if(pn(n,i.options)&&pn(s,i.config))return i;throw Ke.create("duplicate-app",{appName:r})}const o=new Hc(r);for(const l of _s.values())o.addComponent(l);const a=new Mf(n,s,o);return gn.set(r,a),a}function Pf(e=ys){const t=gn.get(e);if(!t&&e===ys&&so())return uo();if(!t)throw Ke.create("no-app",{appName:e});return t}function ze(e,t,n){var s;let r=(s=Df[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ne.warn(a.join(" "));return}ct(new Ge(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="firebase-heartbeat-database",$f=1,Wt="firebase-heartbeat-store";let Qn=null;function ho(){return Qn||(Qn=fo(Ff,$f,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Wt)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ke.create("idb-open",{originalErrorMessage:e.message})})),Qn}async function Bf(e){try{const n=(await ho()).transaction(Wt),s=await n.objectStore(Wt).get(po(e));return await n.done,s}catch(t){if(t instanceof ht)Ne.warn(t.message);else{const n=Ke.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ne.warn(n.message)}}}async function Nr(e,t){try{const s=(await ho()).transaction(Wt,"readwrite");await s.objectStore(Wt).put(t,po(e)),await s.done}catch(n){if(n instanceof ht)Ne.warn(n.message);else{const s=Ke.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ne.warn(s.message)}}}function po(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=1024,Lf=30*24*60*60*1e3;class Hf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lr();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Lf}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ne.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lr(),{heartbeatsToSend:s,unsentEntries:r}=jf(this._heartbeatsCache.heartbeats),i=no(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ne.warn(n),""}}}function Lr(){return new Date().toISOString().substring(0,10)}function jf(e,t=Nf){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Hr(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Hr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class kf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ro()?io().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Hr(e){return no(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e){ct(new Ge("platform-logger",t=>new ef(t),"PRIVATE")),ct(new Ge("heartbeat",t=>new Hf(t),"PRIVATE")),ze(bs,$r,e),ze(bs,$r,"esm2017"),ze("fire-js","")}Vf("");var Uf="firebase",Wf="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(Uf,Wf,"app");const go="@firebase/installations",js="0.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=1e4,bo=`w:${js}`,yo="FIS_v2",Kf="https://firebaseinstallations.googleapis.com/v1",zf=60*60*1e3,qf="installations",Gf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ft=new Dn(qf,Gf,Yf);function _o(e){return e instanceof ht&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo({projectId:e}){return`${Kf}/projects/${e}/installations`}function wo(e){return{token:e.token,requestStatus:2,expiresIn:Qf(e.expiresIn),creationTime:Date.now()}}async function Io(e,t){const s=(await t.json()).error;return ft.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Eo({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Jf(e,{refreshToken:t}){const n=Eo(e);return n.append("Authorization",Xf(t)),n}async function So(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Qf(e){return Number(e.replace("s","000"))}function Xf(e){return`${yo} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=vo(e),r=Eo(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:yo,appId:e.appId,sdkVersion:bo},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await So(()=>fetch(s,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:wo(u.authToken)}}else throw await Io("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=/^[cdef][\w-]{21}$/,vs="";function nu(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=su(e);return tu.test(n)?n:vs}catch{return vs}}function su(e){return eu(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new Map;function Co(e,t){const n=Rn(e);xo(n,t),ru(n,t)}function xo(e,t){const n=Ao.get(e);if(n)for(const s of n)s(t)}function ru(e,t){const n=iu();n&&n.postMessage({key:e,fid:t}),ou()}let it=null;function iu(){return!it&&"BroadcastChannel"in self&&(it=new BroadcastChannel("[Firebase] FID Change"),it.onmessage=e=>{xo(e.data.key,e.data.fid)}),it}function ou(){Ao.size===0&&it&&(it.close(),it=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="firebase-installations-database",lu=1,ut="firebase-installations-store";let Xn=null;function ks(){return Xn||(Xn=fo(au,lu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ut)}}})),Xn}async function mn(e,t){const n=Rn(e),r=(await ks()).transaction(ut,"readwrite"),i=r.objectStore(ut),o=await i.get(n);return await i.put(t,n),await r.done,(!o||o.fid!==t.fid)&&Co(e,t.fid),t}async function Do(e){const t=Rn(e),s=(await ks()).transaction(ut,"readwrite");await s.objectStore(ut).delete(t),await s.done}async function Mn(e,t){const n=Rn(e),r=(await ks()).transaction(ut,"readwrite"),i=r.objectStore(ut),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Co(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(e){let t;const n=await Mn(e.appConfig,s=>{const r=cu(s),i=fu(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===vs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function cu(e){const t=e||{fid:nu(),registrationStatus:0};return Oo(t)}function fu(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ft.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=uu(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:du(e)}:{installationEntry:t}}async function uu(e,t){try{const n=await Zf(e,t);return mn(e.appConfig,n)}catch(n){throw _o(n)&&n.customData.serverCode===409?await Do(e.appConfig):await mn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function du(e){let t=await jr(e.appConfig);for(;t.registrationStatus===1;)await To(100),t=await jr(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Vs(e);return s||n}return t}function jr(e){return Mn(e,t=>{if(!t)throw ft.create("installation-not-found");return Oo(t)})}function Oo(e){return hu(e)?{fid:e.fid,registrationStatus:0}:e}function hu(e){return e.registrationStatus===1&&e.registrationTime+mo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu({appConfig:e,heartbeatServiceProvider:t},n){const s=gu(e,n),r=Jf(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:bo,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await So(()=>fetch(s,a));if(l.ok){const u=await l.json();return wo(u)}else throw await Io("Generate Auth Token",l)}function gu(e,{fid:t}){return`${vo(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(e,t=!1){let n;const s=await Mn(e.appConfig,i=>{if(!Ro(i))throw ft.create("not-registered");const o=i.authToken;if(!t&&yu(o))return i;if(o.requestStatus===1)return n=mu(e,t),i;{if(!navigator.onLine)throw ft.create("app-offline");const a=vu(i);return n=bu(e,a),a}});return n?await n:s.authToken}async function mu(e,t){let n=await kr(e.appConfig);for(;n.authToken.requestStatus===1;)await To(100),n=await kr(e.appConfig);const s=n.authToken;return s.requestStatus===0?Us(e,t):s}function kr(e){return Mn(e,t=>{if(!Ro(t))throw ft.create("not-registered");const n=t.authToken;return wu(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function bu(e,t){try{const n=await pu(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await mn(e.appConfig,s),n}catch(n){if(_o(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Do(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await mn(e.appConfig,s)}throw n}}function Ro(e){return e!==void 0&&e.registrationStatus===2}function yu(e){return e.requestStatus===2&&!_u(e)}function _u(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+zf}function vu(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function wu(e){return e.requestStatus===1&&e.requestTime+mo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(e){const t=e,{installationEntry:n,registrationPromise:s}=await Vs(t);return s?s.catch(console.error):Us(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eu(e,t=!1){const n=e;return await Su(n),(await Us(n,t)).token}async function Su(e){const{registrationPromise:t}=await Vs(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(e){if(!e||!e.options)throw Zn("App Configuration");if(!e.name)throw Zn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Zn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Zn(e){return ft.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="installations",Au="installations-internal",Cu=e=>{const t=e.getProvider("app").getImmediate(),n=Tu(t),s=On(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xu=e=>{const t=e.getProvider("app").getImmediate(),n=On(t,Mo).getImmediate();return{getId:()=>Iu(n),getToken:r=>Eu(n,r)}};function Du(){ct(new Ge(Mo,Cu,"PUBLIC")),ct(new Ge(Au,xu,"PRIVATE"))}Du();ze(go,js);ze(go,js,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="analytics",Ou="firebase_id",Ru="origin",Mu=60*1e3,Pu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ws="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new ao("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},me=new Dn("analytics","Analytics",Fu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e){if(!e.startsWith(Ws)){const t=me.create("invalid-gtag-resource",{gtagURL:e});return ce.warn(t.message),""}return e}function Po(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Bu(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Nu(e,t){const n=Bu("firebase-js-sdk-policy",{createScriptURL:$u}),s=document.createElement("script"),r=`${Ws}?l=${e}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Lu(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Hu(e,t,n,s,r,i){const o=s[r];try{if(o)await t[o];else{const l=(await Po(n)).find(u=>u.measurementId===r);l&&await t[l.appId]}}catch(a){ce.error(a)}e("config",r,i)}async function ju(e,t,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Po(n);for(const l of o){const u=a.find(p=>p.measurementId===l),d=u&&t[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",s,r||{})}catch(i){ce.error(i)}}function ku(e,t,n,s){async function r(i,...o){try{if(i==="event"){const[a,l]=o;await ju(e,t,n,a,l)}else if(i==="config"){const[a,l]=o;await Hu(e,t,n,s,a,l)}else if(i==="consent"){const[a,l]=o;e("consent",a,l)}else if(i==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ce.error(a)}}return r}function Vu(e,t,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=ku(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}function Uu(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ws)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=30,Ku=1e3;class zu{constructor(t={},n=Ku){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Fo=new zu;function qu(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Gu(e){var t;const{appId:n,apiKey:s}=e,r={method:"GET",headers:qu(s)},i=Pu.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw me.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Yu(e,t=Fo,n){const{appId:s,apiKey:r,measurementId:i}=e.options;if(!s)throw me.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw me.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Xu;return setTimeout(async()=>{a.abort()},Mu),$o({appId:s,apiKey:r,measurementId:i},o,a,t)}async function $o(e,{throttleEndTimeMillis:t,backoffCount:n},s,r=Fo){var i;const{appId:o,measurementId:a}=e;try{await Ju(s,t)}catch(l){if(a)return ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Gu(e);return r.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Qu(u)){if(r.deleteThrottleMetadata(o),a)return ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Rr(n,r.intervalMillis,Wu):Rr(n,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return r.setThrottleMetadata(o,p),ce.debug(`Calling attemptFetch again in ${d} millis`),$o(e,p,s,r)}}function Ju(e,t){return new Promise((n,s)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(i),s(me.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Qu(e){if(!(e instanceof ht)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Xu{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Zu(e,t,n,s,r){if(r&&r.global){e("event",n,s);return}else{const i=await t,o=Object.assign(Object.assign({},s),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(){if(ro())try{await io()}catch(e){return ce.warn(me.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ce.warn(me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function td(e,t,n,s,r,i,o){var a;const l=Yu(e);l.then(I=>{n[I.measurementId]=I.appId,e.options.measurementId&&I.measurementId!==e.options.measurementId&&ce.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>ce.error(I)),t.push(l);const u=ed().then(I=>{if(I)return s.getId()}),[d,p]=await Promise.all([l,u]);Uu(i)||Nu(i,d.measurementId),r("js",new Date);const v=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return v[Ru]="firebase",v.update=!0,p!=null&&(v[Ou]=p),r("config",d.measurementId,v),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t){this.app=t}_delete(){return delete Lt[this.app.options.appId],Promise.resolve()}}let Lt={},Vr=[];const Ur={};let es="dataLayer",sd="gtag",Wr,Bo,Kr=!1;function rd(){const e=[];if(Cc()&&e.push("This is a browser extension environment."),xc()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=me.create("invalid-analytics-context",{errorInfo:t});ce.warn(n.message)}}function id(e,t,n){rd();const s=e.options.appId;if(!s)throw me.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw me.create("no-api-key");if(Lt[s]!=null)throw me.create("already-exists",{id:s});if(!Kr){Lu(es);const{wrappedGtag:i,gtagCore:o}=Vu(Lt,Vr,Ur,es,sd);Bo=i,Wr=o,Kr=!0}return Lt[s]=td(e,Vr,Ur,t,Wr,es,n),new nd(e)}function od(e=Pf()){e=oo(e);const t=On(e,bn);return t.isInitialized()?t.getImmediate():ad(e)}function ad(e,t={}){const n=On(e,bn);if(n.isInitialized()){const r=n.getImmediate();if(pn(t,n.getOptions()))return r;throw me.create("already-initialized")}return n.initialize({options:t})}function ld(e,t,n,s){e=oo(e),Zu(Bo,Lt[e.app.options.appId],t,n,s).catch(r=>ce.error(r))}const zr="@firebase/analytics",qr="0.10.9";function cd(){ct(new Ge(bn,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return id(s,r,n)},"PUBLIC")),ct(new Ge("analytics-internal",e,"PRIVATE")),ze(zr,qr),ze(zr,qr,"esm2017");function e(t){try{const n=t.getProvider(bn).getImmediate();return{logEvent:(s,r,i)=>ld(n,s,r,i)}}catch(n){throw me.create("interop-component-reg-failed",{reason:n})}}}cd();const fd={apiKey:"AIzaSyC8ZWRs5HMm6s26cVVTfBpu4vu2cSIHHZw",authDomain:"vue-torture.firebaseapp.com",projectId:"vue-torture",storageBucket:"vue-torture.firebasestorage.app",messagingSenderId:"804292613626",appId:"1:804292613626:web:0f17e701bb7c40769b8043",measurementId:"G-YY0FKTQKLH"},ud=uo(fd);od(ud);lc(mc).mount("#app");
