(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ys(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const H={},gt=[],Ae=()=>{},Lo=()=>!1,mn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_s=e=>e.startsWith("onUpdate:"),Q=Object.assign,vs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ho=Object.prototype.hasOwnProperty,$=(e,t)=>Ho.call(e,t),x=Array.isArray,mt=e=>kt(e)==="[object Map]",bn=e=>kt(e)==="[object Set]",Js=e=>kt(e)==="[object Date]",R=e=>typeof e=="function",Y=e=>typeof e=="string",xe=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",qr=e=>(K(e)||R(e))&&R(e.then)&&R(e.catch),Gr=Object.prototype.toString,kt=e=>Gr.call(e),jo=e=>kt(e).slice(8,-1),Yr=e=>kt(e)==="[object Object]",ws=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dt=ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Vo=/-(\w)/g,Ke=yn(e=>e.replace(Vo,(t,n)=>n?n.toUpperCase():"")),ko=/\B([A-Z])/g,ut=yn(e=>e.replace(ko,"-$1").toLowerCase()),Jr=yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Pn=yn(e=>e?`on${Jr(e)}`:""),Ve=(e,t)=>!Object.is(e,t),Zt=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Xr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Zn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Xs;const _n=()=>Xs||(Xs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Is(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=Y(s)?zo(s):Is(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(Y(e)||K(e))return e}const Uo=/;(?![^(]*\))/g,Wo=/:([^]+)/,Ko=/\/\*[^]*?\*\//g;function zo(e){const t={};return e.replace(Ko,"").split(Uo).forEach(n=>{if(n){const s=n.split(Wo);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ye(e){let t="";if(Y(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const s=ye(e[n]);s&&(t+=s+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const qo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Go=ys(qo);function Qr(e){return!!e||e===""}function Yo(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=vn(e[s],t[s]);return n}function vn(e,t){if(e===t)return!0;let n=Js(e),s=Js(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=xe(e),s=xe(t),n||s)return e===t;if(n=x(e),s=x(t),n||s)return n&&s?Yo(e,t):!1;if(n=K(e),s=K(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!vn(e[o],t[o]))return!1}}return String(e)===String(t)}function Zr(e,t){return e.findIndex(n=>vn(n,t))}const ei=e=>!!(e&&e.__v_isRef===!0),en=e=>Y(e)?e:e==null?"":x(e)||K(e)&&(e.toString===Gr||!R(e.toString))?ei(e)?en(e.value):JSON.stringify(e,ti,2):String(e),ti=(e,t)=>ei(t)?ti(e,t.value):mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Fn(s,i)+" =>"]=r,n),{})}:bn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Fn(n))}:xe(t)?Fn(t):K(t)&&!x(t)&&!Yr(t)?String(t):t,Fn=(e,t="")=>{var n;return xe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let de;class Jo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=de,!t&&de&&(this.index=(de.scopes||(de.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=de;try{return de=this,t()}finally{de=n}}}on(){de=this}off(){de=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Xo(){return de}let U;const $n=new WeakSet;class ni{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,de&&de.active&&de.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$n.has(this)&&($n.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ri(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qs(this),ii(this);const t=U,n=ve;U=this,ve=!0;try{return this.fn()}finally{oi(this),U=t,ve=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ts(t);this.deps=this.depsTail=void 0,Qs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$n.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){es(this)&&this.run()}get dirty(){return es(this)}}let si=0,Ot,Rt;function ri(e,t=!1){if(e.flags|=8,t){e.next=Rt,Rt=e;return}e.next=Ot,Ot=e}function Es(){si++}function Ss(){if(--si>0)return;if(Rt){let t=Rt;for(Rt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ot;){let t=Ot;for(Ot=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function ii(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function oi(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Ts(s),Qo(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function es(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ai(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ai(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Nt))return;e.globalVersion=Nt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!es(e)){e.flags&=-3;return}const n=U,s=ve;U=e,ve=!0;try{ii(e);const r=e.fn(e._value);(t.version===0||Ve(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{U=n,ve=s,oi(e),e.flags&=-3}}function Ts(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ts(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Qo(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ve=!0;const li=[];function qe(){li.push(ve),ve=!1}function Ge(){const e=li.pop();ve=e===void 0?!0:e}function Qs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=U;U=void 0;try{t()}finally{U=n}}}let Nt=0;class Zo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!U||!ve||U===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==U)n=this.activeLink=new Zo(U,this),U.deps?(n.prevDep=U.depsTail,U.depsTail.nextDep=n,U.depsTail=n):U.deps=U.depsTail=n,ci(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=U.depsTail,n.nextDep=void 0,U.depsTail.nextDep=n,U.depsTail=n,U.deps===n&&(U.deps=s)}return n}trigger(t){this.version++,Nt++,this.notify(t)}notify(t){Es();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ss()}}}function ci(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)ci(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ts=new WeakMap,rt=Symbol(""),ns=Symbol(""),Bt=Symbol("");function ee(e,t,n){if(ve&&U){let s=ts.get(e);s||ts.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Cs),r.map=s,r.key=n),r.track()}}function Me(e,t,n,s,r,i){const o=ts.get(e);if(!o){Nt++;return}const a=l=>{l&&l.trigger()};if(Es(),t==="clear")o.forEach(a);else{const l=x(e),u=l&&ws(n);if(l&&n==="length"){const d=Number(s);o.forEach((p,w)=>{(w==="length"||w===Bt||!xe(w)&&w>=d)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Bt)),t){case"add":l?u&&a(o.get("length")):(a(o.get(rt)),mt(e)&&a(o.get(ns)));break;case"delete":l||(a(o.get(rt)),mt(e)&&a(o.get(ns)));break;case"set":mt(e)&&a(o.get(rt));break}}Ss()}function ht(e){const t=F(e);return t===e?t:(ee(t,"iterate",Bt),me(e)?t:t.map(te))}function wn(e){return ee(e=F(e),"iterate",Bt),e}const ea={__proto__:null,[Symbol.iterator](){return Nn(this,Symbol.iterator,te)},concat(...e){return ht(this).concat(...e.map(t=>x(t)?ht(t):t))},entries(){return Nn(this,"entries",e=>(e[1]=te(e[1]),e))},every(e,t){return Oe(this,"every",e,t,void 0,arguments)},filter(e,t){return Oe(this,"filter",e,t,n=>n.map(te),arguments)},find(e,t){return Oe(this,"find",e,t,te,arguments)},findIndex(e,t){return Oe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Oe(this,"findLast",e,t,te,arguments)},findLastIndex(e,t){return Oe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Oe(this,"forEach",e,t,void 0,arguments)},includes(...e){return Bn(this,"includes",e)},indexOf(...e){return Bn(this,"indexOf",e)},join(e){return ht(this).join(e)},lastIndexOf(...e){return Bn(this,"lastIndexOf",e)},map(e,t){return Oe(this,"map",e,t,void 0,arguments)},pop(){return Ct(this,"pop")},push(...e){return Ct(this,"push",e)},reduce(e,...t){return Zs(this,"reduce",e,t)},reduceRight(e,...t){return Zs(this,"reduceRight",e,t)},shift(){return Ct(this,"shift")},some(e,t){return Oe(this,"some",e,t,void 0,arguments)},splice(...e){return Ct(this,"splice",e)},toReversed(){return ht(this).toReversed()},toSorted(e){return ht(this).toSorted(e)},toSpliced(...e){return ht(this).toSpliced(...e)},unshift(...e){return Ct(this,"unshift",e)},values(){return Nn(this,"values",te)}};function Nn(e,t,n){const s=wn(e),r=s[t]();return s!==e&&!me(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const ta=Array.prototype;function Oe(e,t,n,s,r,i){const o=wn(e),a=o!==e&&!me(e),l=o[t];if(l!==ta[t]){const p=l.apply(e,i);return a?te(p):p}let u=n;o!==e&&(a?u=function(p,w){return n.call(this,te(p),w,e)}:n.length>2&&(u=function(p,w){return n.call(this,p,w,e)}));const d=l.call(o,u,s);return a&&r?r(d):d}function Zs(e,t,n,s){const r=wn(e);let i=n;return r!==e&&(me(e)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,e)}):i=function(o,a,l){return n.call(this,o,te(a),l,e)}),r[t](i,...s)}function Bn(e,t,n){const s=F(e);ee(s,"iterate",Bt);const r=s[t](...n);return(r===-1||r===!1)&&Os(n[0])?(n[0]=F(n[0]),s[t](...n)):r}function Ct(e,t,n=[]){qe(),Es();const s=F(e)[t].apply(e,n);return Ss(),Ge(),s}const na=ys("__proto__,__v_isRef,__isVue"),fi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xe));function sa(e){xe(e)||(e=String(e));const t=F(this);return ee(t,"has",e),t.hasOwnProperty(e)}class ui{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?ha:gi:i?pi:hi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=x(t);if(!r){let l;if(o&&(l=ea[n]))return l;if(n==="hasOwnProperty")return sa}const a=Reflect.get(t,n,X(t)?t:s);return(xe(n)?fi.has(n):na(n))||(r||ee(t,"get",n),i)?a:X(a)?o&&ws(n)?a:a.value:K(a)?r?mi(a):xs(a):a}}class di extends ui{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const l=ot(i);if(!me(s)&&!ot(s)&&(i=F(i),s=F(s)),!x(t)&&X(i)&&!X(s))return l?!1:(i.value=s,!0)}const o=x(t)&&ws(n)?Number(n)<t.length:$(t,n),a=Reflect.set(t,n,s,X(t)?t:r);return t===F(r)&&(o?Ve(s,i)&&Me(t,"set",n,s):Me(t,"add",n,s)),a}deleteProperty(t,n){const s=$(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Me(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!xe(n)||!fi.has(n))&&ee(t,"has",n),s}ownKeys(t){return ee(t,"iterate",x(t)?"length":rt),Reflect.ownKeys(t)}}class ra extends ui{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ia=new di,oa=new ra,aa=new di(!0);const ss=e=>e,Jt=e=>Reflect.getPrototypeOf(e);function la(e,t,n){return function(...s){const r=this.__v_raw,i=F(r),o=mt(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...s),d=n?ss:t?rs:te;return!t&&ee(i,"iterate",l?ns:rt),{next(){const{value:p,done:w}=u.next();return w?{value:p,done:w}:{value:a?[d(p[0]),d(p[1])]:d(p),done:w}},[Symbol.iterator](){return this}}}}function Xt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ca(e,t){const n={get(r){const i=this.__v_raw,o=F(i),a=F(r);e||(Ve(r,a)&&ee(o,"get",r),ee(o,"get",a));const{has:l}=Jt(o),u=t?ss:e?rs:te;if(l.call(o,r))return u(i.get(r));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&ee(F(r),"iterate",rt),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=F(i),a=F(r);return e||(Ve(r,a)&&ee(o,"has",r),ee(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=F(a),u=t?ss:e?rs:te;return!e&&ee(l,"iterate",rt),a.forEach((d,p)=>r.call(i,u(d),u(p),o))}};return Q(n,e?{add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear")}:{add(r){!t&&!me(r)&&!ot(r)&&(r=F(r));const i=F(this);return Jt(i).has.call(i,r)||(i.add(r),Me(i,"add",r,r)),this},set(r,i){!t&&!me(i)&&!ot(i)&&(i=F(i));const o=F(this),{has:a,get:l}=Jt(o);let u=a.call(o,r);u||(r=F(r),u=a.call(o,r));const d=l.call(o,r);return o.set(r,i),u?Ve(i,d)&&Me(o,"set",r,i):Me(o,"add",r,i),this},delete(r){const i=F(this),{has:o,get:a}=Jt(i);let l=o.call(i,r);l||(r=F(r),l=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return l&&Me(i,"delete",r,void 0),u},clear(){const r=F(this),i=r.size!==0,o=r.clear();return i&&Me(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=la(r,e,t)}),n}function As(e,t){const n=ca(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get($(n,r)&&r in s?n:s,r,i)}const fa={get:As(!1,!1)},ua={get:As(!1,!0)},da={get:As(!0,!1)};const hi=new WeakMap,pi=new WeakMap,gi=new WeakMap,ha=new WeakMap;function pa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ga(e){return e.__v_skip||!Object.isExtensible(e)?0:pa(jo(e))}function xs(e){return ot(e)?e:Ds(e,!1,ia,fa,hi)}function ma(e){return Ds(e,!1,aa,ua,pi)}function mi(e){return Ds(e,!0,oa,da,gi)}function Ds(e,t,n,s,r){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=ga(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function bt(e){return ot(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function ot(e){return!!(e&&e.__v_isReadonly)}function me(e){return!!(e&&e.__v_isShallow)}function Os(e){return e?!!e.__v_raw:!1}function F(e){const t=e&&e.__v_raw;return t?F(t):e}function ba(e){return!$(e,"__v_skip")&&Object.isExtensible(e)&&Xr(e,"__v_skip",!0),e}const te=e=>K(e)?xs(e):e,rs=e=>K(e)?mi(e):e;function X(e){return e?e.__v_isRef===!0:!1}function oe(e){return ya(e,!1)}function ya(e,t){return X(e)?e:new _a(e,t)}class _a{constructor(t,n){this.dep=new Cs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:F(t),this._value=n?t:te(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||me(t)||ot(t);t=s?t:F(t),Ve(t,n)&&(this._rawValue=t,this._value=s?t:te(t),this.dep.trigger())}}function bi(e){return X(e)?e.value:e}const va={get:(e,t,n)=>t==="__v_raw"?e:bi(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return X(r)&&!X(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function yi(e){return bt(e)?e:new Proxy(e,va)}class wa{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Cs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&U!==this)return ri(this,!0),!0}get value(){const t=this.dep.track();return ai(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ia(e,t,n=!1){let s,r;return R(e)?s=e:(s=e.get,r=e.set),new wa(s,r,n)}const Qt={},on=new WeakMap;let et;function Ea(e,t=!1,n=et){if(n){let s=on.get(n);s||on.set(n,s=[]),s.push(e)}}function Sa(e,t,n=H){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,u=D=>r?D:me(D)||r===!1||r===0?Pe(D,1):Pe(D);let d,p,w,I,M=!1,C=!1;if(X(e)?(p=()=>e.value,M=me(e)):bt(e)?(p=()=>u(e),M=!0):x(e)?(C=!0,M=e.some(D=>bt(D)||me(D)),p=()=>e.map(D=>{if(X(D))return D.value;if(bt(D))return u(D);if(R(D))return l?l(D,2):D()})):R(e)?t?p=l?()=>l(e,2):e:p=()=>{if(w){qe();try{w()}finally{Ge()}}const D=et;et=d;try{return l?l(e,3,[I]):e(I)}finally{et=D}}:p=Ae,t&&r){const D=p,J=r===!0?1/0:r;p=()=>Pe(D(),J)}const L=Xo(),N=()=>{d.stop(),L&&vs(L.effects,d)};if(i&&t){const D=t;t=(...J)=>{D(...J),N()}}let q=C?new Array(e.length).fill(Qt):Qt;const G=D=>{if(!(!(d.flags&1)||!d.dirty&&!D))if(t){const J=d.run();if(r||M||(C?J.some((Be,we)=>Ve(Be,q[we])):Ve(J,q))){w&&w();const Be=et;et=d;try{const we=[J,q===Qt?void 0:C&&q[0]===Qt?[]:q,I];l?l(t,3,we):t(...we),q=J}finally{et=Be}}}else d.run()};return a&&a(G),d=new ni(p),d.scheduler=o?()=>o(G,!1):G,I=D=>Ea(D,!1,d),w=d.onStop=()=>{const D=on.get(d);if(D){if(l)l(D,4);else for(const J of D)J();on.delete(d)}},t?s?G(!0):q=d.run():o?o(G.bind(null,!0),!0):d.run(),N.pause=d.pause.bind(d),N.resume=d.resume.bind(d),N.stop=N,N}function Pe(e,t=1/0,n){if(t<=0||!K(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,X(e))Pe(e.value,t,n);else if(x(e))for(let s=0;s<e.length;s++)Pe(e[s],t,n);else if(bn(e)||mt(e))e.forEach(s=>{Pe(s,t,n)});else if(Yr(e)){for(const s in e)Pe(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Pe(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ut(e,t,n,s){try{return s?e(...s):e()}catch(r){In(r,t,n)}}function De(e,t,n,s){if(R(e)){const r=Ut(e,t,n,s);return r&&qr(r)&&r.catch(i=>{In(i,t,n)}),r}if(x(e)){const r=[];for(let i=0;i<e.length;i++)r.push(De(e[i],t,n,s));return r}}function In(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||H;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,l,u)===!1)return}a=a.parent}if(i){qe(),Ut(i,null,10,[e,l,u]),Ge();return}}Ta(e,n,r,s,o)}function Ta(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const re=[];let Te=-1;const yt=[];let He=null,pt=0;const _i=Promise.resolve();let an=null;function Ca(e){const t=an||_i;return e?t.then(this?e.bind(this):e):t}function Aa(e){let t=Te+1,n=re.length;for(;t<n;){const s=t+n>>>1,r=re[s],i=Lt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Rs(e){if(!(e.flags&1)){const t=Lt(e),n=re[re.length-1];!n||!(e.flags&2)&&t>=Lt(n)?re.push(e):re.splice(Aa(t),0,e),e.flags|=1,vi()}}function vi(){an||(an=_i.then(Ii))}function xa(e){x(e)?yt.push(...e):He&&e.id===-1?He.splice(pt+1,0,e):e.flags&1||(yt.push(e),e.flags|=1),vi()}function er(e,t,n=Te+1){for(;n<re.length;n++){const s=re[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;re.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function wi(e){if(yt.length){const t=[...new Set(yt)].sort((n,s)=>Lt(n)-Lt(s));if(yt.length=0,He){He.push(...t);return}for(He=t,pt=0;pt<He.length;pt++){const n=He[pt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}He=null,pt=0}}const Lt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ii(e){try{for(Te=0;Te<re.length;Te++){const t=re[Te];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ut(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Te<re.length;Te++){const t=re[Te];t&&(t.flags&=-2)}Te=-1,re.length=0,wi(),an=null,(re.length||yt.length)&&Ii()}}let ge=null,Ei=null;function ln(e){const t=ge;return ge=e,Ei=e&&e.type.__scopeId||null,t}function Da(e,t=ge,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&lr(-1);const i=ln(t);let o;try{o=e(...r)}finally{ln(i),s._d&&lr(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ln(e,t){if(ge===null)return e;const n=Cn(ge),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,a,l=H]=t[r];i&&(R(i)&&(i={mounted:i,updated:i}),i.deep&&Pe(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Qe(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(qe(),De(l,n,8,[e.el,a,e,t]),Ge())}}const Oa=Symbol("_vte"),Ra=e=>e.__isTeleport;function Ms(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ms(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Si(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function is(e,t,n,s,r=!1){if(x(e)){e.forEach((M,C)=>is(M,t&&(x(t)?t[C]:t),n,s,r));return}if(Mt(s)&&!r)return;const i=s.shapeFlag&4?Cn(s.component):s.el,o=r?null:i,{i:a,r:l}=e,u=t&&t.r,d=a.refs===H?a.refs={}:a.refs,p=a.setupState,w=F(p),I=p===H?()=>!1:M=>$(w,M);if(u!=null&&u!==l&&(Y(u)?(d[u]=null,I(u)&&(p[u]=null)):X(u)&&(u.value=null)),R(l))Ut(l,a,12,[o,d]);else{const M=Y(l),C=X(l);if(M||C){const L=()=>{if(e.f){const N=M?I(l)?p[l]:d[l]:l.value;r?x(N)&&vs(N,i):x(N)?N.includes(i)||N.push(i):M?(d[l]=[i],I(l)&&(p[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else M?(d[l]=o,I(l)&&(p[l]=o)):C&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,ue(L,n)):L()}}}_n().requestIdleCallback;_n().cancelIdleCallback;const Mt=e=>!!e.type.__asyncLoader,Ti=e=>e.type.__isKeepAlive;function Ma(e,t){Ci(e,"a",t)}function Pa(e,t){Ci(e,"da",t)}function Ci(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(En(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ti(r.parent.vnode)&&Fa(s,t,n,r),r=r.parent}}function Fa(e,t,n,s){const r=En(t,e,s,!0);Ai(()=>{vs(s[t],r)},n)}function En(e,t,n=ie,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{qe();const a=Wt(n),l=De(t,n,e,o);return a(),Ge(),l});return s?r.unshift(i):r.push(i),i}}const Ne=e=>(t,n=ie)=>{(!jt||e==="sp")&&En(e,(...s)=>t(...s),n)},$a=Ne("bm"),Na=Ne("m"),Ba=Ne("bu"),La=Ne("u"),Ha=Ne("bum"),Ai=Ne("um"),ja=Ne("sp"),Va=Ne("rtg"),ka=Ne("rtc");function Ua(e,t=ie){En("ec",e,t)}const Wa=Symbol.for("v-ndc");function Ka(e,t,n,s){let r;const i=n,o=x(e);if(o||Y(e)){const a=o&&bt(e);let l=!1;a&&(l=!me(e),e=wn(e)),r=new Array(e.length);for(let u=0,d=e.length;u<d;u++)r[u]=t(l?te(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i)}else if(K(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,i));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const d=a[l];r[l]=t(e[d],d,l,i)}}else r=[];return r}const os=e=>e?Gi(e)?Cn(e):os(e.parent):null,Pt=Q(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>os(e.parent),$root:e=>os(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ps(e),$forceUpdate:e=>e.f||(e.f=()=>{Rs(e.update)}),$nextTick:e=>e.n||(e.n=Ca.bind(e.proxy)),$watch:e=>hl.bind(e)}),Hn=(e,t)=>e!==H&&!e.__isScriptSetup&&$(e,t),za={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const I=o[t];if(I!==void 0)switch(I){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Hn(s,t))return o[t]=1,s[t];if(r!==H&&$(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&$(u,t))return o[t]=3,i[t];if(n!==H&&$(n,t))return o[t]=4,n[t];as&&(o[t]=0)}}const d=Pt[t];let p,w;if(d)return t==="$attrs"&&ee(e.attrs,"get",""),d(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==H&&$(n,t))return o[t]=4,n[t];if(w=l.config.globalProperties,$(w,t))return w[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Hn(r,t)?(r[t]=n,!0):s!==H&&$(s,t)?(s[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==H&&$(e,o)||Hn(t,o)||(a=i[0])&&$(a,o)||$(s,o)||$(Pt,o)||$(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function tr(e){return x(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let as=!0;function qa(e){const t=Ps(e),n=e.proxy,s=e.ctx;as=!1,t.beforeCreate&&nr(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:d,beforeMount:p,mounted:w,beforeUpdate:I,updated:M,activated:C,deactivated:L,beforeDestroy:N,beforeUnmount:q,destroyed:G,unmounted:D,render:J,renderTracked:Be,renderTriggered:we,errorCaptured:Le,serverPrefetch:Kt,expose:Ye,inheritAttrs:It,components:zt,directives:qt,filters:Rn}=t;if(u&&Ga(u,s,null),o)for(const z in o){const j=o[z];R(j)&&(s[z]=j.bind(n))}if(r){const z=r.call(n,n);K(z)&&(e.data=xs(z))}if(as=!0,i)for(const z in i){const j=i[z],Je=R(j)?j.bind(n,n):R(j.get)?j.get.bind(n,n):Ae,Gt=!R(j)&&R(j.set)?j.set.bind(n):Ae,Xe=Ji({get:Je,set:Gt});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Ie=>Xe.value=Ie})}if(a)for(const z in a)xi(a[z],s,n,z);if(l){const z=R(l)?l.call(n):l;Reflect.ownKeys(z).forEach(j=>{el(j,z[j])})}d&&nr(d,e,"c");function ne(z,j){x(j)?j.forEach(Je=>z(Je.bind(n))):j&&z(j.bind(n))}if(ne($a,p),ne(Na,w),ne(Ba,I),ne(La,M),ne(Ma,C),ne(Pa,L),ne(Ua,Le),ne(ka,Be),ne(Va,we),ne(Ha,q),ne(Ai,D),ne(ja,Kt),x(Ye))if(Ye.length){const z=e.exposed||(e.exposed={});Ye.forEach(j=>{Object.defineProperty(z,j,{get:()=>n[j],set:Je=>n[j]=Je})})}else e.exposed||(e.exposed={});J&&e.render===Ae&&(e.render=J),It!=null&&(e.inheritAttrs=It),zt&&(e.components=zt),qt&&(e.directives=qt),Kt&&Si(e)}function Ga(e,t,n=Ae){x(e)&&(e=ls(e));for(const s in e){const r=e[s];let i;K(r)?"default"in r?i=tn(r.from||s,r.default,!0):i=tn(r.from||s):i=tn(r),X(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function nr(e,t,n){De(x(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function xi(e,t,n,s){let r=s.includes(".")?ki(n,s):()=>n[s];if(Y(e)){const i=t[e];R(i)&&Vn(r,i)}else if(R(e))Vn(r,e.bind(n));else if(K(e))if(x(e))e.forEach(i=>xi(i,t,n,s));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&Vn(r,i,e)}}function Ps(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(u=>cn(l,u,o,!0)),cn(l,t,o)),K(t)&&i.set(t,l),l}function cn(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&cn(e,i,n,!0),r&&r.forEach(o=>cn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Ya[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Ya={data:sr,props:rr,emits:rr,methods:xt,computed:xt,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:xt,directives:xt,watch:Xa,provide:sr,inject:Ja};function sr(e,t){return t?e?function(){return Q(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Ja(e,t){return xt(ls(e),ls(t))}function ls(e){if(x(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function xt(e,t){return e?Q(Object.create(null),e,t):t}function rr(e,t){return e?x(e)&&x(t)?[...new Set([...e,...t])]:Q(Object.create(null),tr(e),tr(t??{})):t}function Xa(e,t){if(!e)return t;if(!t)return e;const n=Q(Object.create(null),e);for(const s in t)n[s]=se(e[s],t[s]);return n}function Di(){return{app:null,config:{isNativeTag:Lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qa=0;function Za(e,t){return function(s,r=null){R(s)||(s=Q({},s)),r!=null&&!K(r)&&(r=null);const i=Di(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:Qa++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:$l,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&R(d.install)?(o.add(d),d.install(u,...p)):R(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,w){if(!l){const I=u._ceVNode||Fe(s,r);return I.appContext=i,w===!0?w="svg":w===!1&&(w=void 0),p&&t?t(I,d):e(I,d,w),l=!0,u._container=d,d.__vue_app__=u,Cn(I.component)}},onUnmount(d){a.push(d)},unmount(){l&&(De(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=_t;_t=u;try{return d()}finally{_t=p}}};return u}}let _t=null;function el(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function tn(e,t,n=!1){const s=ie||ge;if(s||_t){const r=_t?_t._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&R(t)?t.call(s&&s.proxy):t}}const Oi={},Ri=()=>Object.create(Oi),Mi=e=>Object.getPrototypeOf(e)===Oi;function tl(e,t,n,s=!1){const r={},i=Ri();e.propsDefaults=Object.create(null),Pi(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:ma(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function nl(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=F(r),[l]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let w=d[p];if(Sn(e.emitsOptions,w))continue;const I=t[w];if(l)if($(i,w))I!==i[w]&&(i[w]=I,u=!0);else{const M=Ke(w);r[M]=cs(l,a,M,I,e,!1)}else I!==i[w]&&(i[w]=I,u=!0)}}}else{Pi(e,t,r,i)&&(u=!0);let d;for(const p in a)(!t||!$(t,p)&&((d=ut(p))===p||!$(t,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=cs(l,a,p,void 0,e,!0)):delete r[p]);if(i!==a)for(const p in i)(!t||!$(t,p))&&(delete i[p],u=!0)}u&&Me(e.attrs,"set","")}function Pi(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Dt(l))continue;const u=t[l];let d;r&&$(r,d=Ke(l))?!i||!i.includes(d)?n[d]=u:(a||(a={}))[d]=u:Sn(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=F(n),u=a||H;for(let d=0;d<i.length;d++){const p=i[d];n[p]=cs(r,l,p,u[p],e,!$(u,p))}}return o}function cs(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=$(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&R(l)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const d=Wt(r);s=u[n]=l.call(null,t),d()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ut(n))&&(s=!0))}return s}const sl=new WeakMap;function Fi(e,t,n=!1){const s=n?sl:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let l=!1;if(!R(e)){const d=p=>{l=!0;const[w,I]=Fi(p,t,!0);Q(o,w),I&&a.push(...I)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return K(e)&&s.set(e,gt),gt;if(x(i))for(let d=0;d<i.length;d++){const p=Ke(i[d]);ir(p)&&(o[p]=H)}else if(i)for(const d in i){const p=Ke(d);if(ir(p)){const w=i[d],I=o[p]=x(w)||R(w)?{type:w}:Q({},w),M=I.type;let C=!1,L=!0;if(x(M))for(let N=0;N<M.length;++N){const q=M[N],G=R(q)&&q.name;if(G==="Boolean"){C=!0;break}else G==="String"&&(L=!1)}else C=R(M)&&M.name==="Boolean";I[0]=C,I[1]=L,(C||$(I,"default"))&&a.push(p)}}const u=[o,a];return K(e)&&s.set(e,u),u}function ir(e){return e[0]!=="$"&&!Dt(e)}const $i=e=>e[0]==="_"||e==="$stable",Fs=e=>x(e)?e.map(Ce):[Ce(e)],rl=(e,t,n)=>{if(t._n)return t;const s=Da((...r)=>Fs(t(...r)),n);return s._c=!1,s},Ni=(e,t,n)=>{const s=e._ctx;for(const r in e){if($i(r))continue;const i=e[r];if(R(i))t[r]=rl(r,i,s);else if(i!=null){const o=Fs(i);t[r]=()=>o}}},Bi=(e,t)=>{const n=Fs(t);e.slots.default=()=>n},Li=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},il=(e,t,n)=>{const s=e.slots=Ri();if(e.vnode.shapeFlag&32){const r=t._;r?(Li(s,t,n),n&&Xr(s,"_",r,!0)):Ni(t,s)}else t&&Bi(e,t)},ol=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=H;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Li(r,t,n):(i=!t.$stable,Ni(t,r)),o=t}else t&&(Bi(e,t),o={default:1});if(i)for(const a in r)!$i(a)&&o[a]==null&&delete r[a]},ue=vl;function al(e){return ll(e)}function ll(e,t){const n=_n();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:w,setScopeId:I=Ae,insertStaticContent:M}=e,C=(c,f,h,b=null,g=null,m=null,E=void 0,v=null,_=!!f.dynamicChildren)=>{if(c===f)return;c&&!At(c,f)&&(b=Yt(c),Ie(c,g,m,!0),c=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:y,ref:A,shapeFlag:S}=f;switch(y){case Tn:L(c,f,h,b);break;case at:N(c,f,h,b);break;case Un:c==null&&q(f,h,b,E);break;case _e:zt(c,f,h,b,g,m,E,v,_);break;default:S&1?J(c,f,h,b,g,m,E,v,_):S&6?qt(c,f,h,b,g,m,E,v,_):(S&64||S&128)&&y.process(c,f,h,b,g,m,E,v,_,St)}A!=null&&g&&is(A,c&&c.ref,m,f||c,!f)},L=(c,f,h,b)=>{if(c==null)s(f.el=a(f.children),h,b);else{const g=f.el=c.el;f.children!==c.children&&u(g,f.children)}},N=(c,f,h,b)=>{c==null?s(f.el=l(f.children||""),h,b):f.el=c.el},q=(c,f,h,b)=>{[c.el,c.anchor]=M(c.children,f,h,b,c.el,c.anchor)},G=({el:c,anchor:f},h,b)=>{let g;for(;c&&c!==f;)g=w(c),s(c,h,b),c=g;s(f,h,b)},D=({el:c,anchor:f})=>{let h;for(;c&&c!==f;)h=w(c),r(c),c=h;r(f)},J=(c,f,h,b,g,m,E,v,_)=>{f.type==="svg"?E="svg":f.type==="math"&&(E="mathml"),c==null?Be(f,h,b,g,m,E,v,_):Kt(c,f,g,m,E,v,_)},Be=(c,f,h,b,g,m,E,v)=>{let _,y;const{props:A,shapeFlag:S,transition:T,dirs:O}=c;if(_=c.el=o(c.type,m,A&&A.is,A),S&8?d(_,c.children):S&16&&Le(c.children,_,null,b,g,jn(c,m),E,v),O&&Qe(c,null,b,"created"),we(_,c,c.scopeId,E,b),A){for(const V in A)V!=="value"&&!Dt(V)&&i(_,V,null,A[V],m,b);"value"in A&&i(_,"value",null,A.value,m),(y=A.onVnodeBeforeMount)&&Se(y,b,c)}O&&Qe(c,null,b,"beforeMount");const P=cl(g,T);P&&T.beforeEnter(_),s(_,f,h),((y=A&&A.onVnodeMounted)||P||O)&&ue(()=>{y&&Se(y,b,c),P&&T.enter(_),O&&Qe(c,null,b,"mounted")},g)},we=(c,f,h,b,g)=>{if(h&&I(c,h),b)for(let m=0;m<b.length;m++)I(c,b[m]);if(g){let m=g.subTree;if(f===m||Wi(m.type)&&(m.ssContent===f||m.ssFallback===f)){const E=g.vnode;we(c,E,E.scopeId,E.slotScopeIds,g.parent)}}},Le=(c,f,h,b,g,m,E,v,_=0)=>{for(let y=_;y<c.length;y++){const A=c[y]=v?je(c[y]):Ce(c[y]);C(null,A,f,h,b,g,m,E,v)}},Kt=(c,f,h,b,g,m,E)=>{const v=f.el=c.el;let{patchFlag:_,dynamicChildren:y,dirs:A}=f;_|=c.patchFlag&16;const S=c.props||H,T=f.props||H;let O;if(h&&Ze(h,!1),(O=T.onVnodeBeforeUpdate)&&Se(O,h,f,c),A&&Qe(f,c,h,"beforeUpdate"),h&&Ze(h,!0),(S.innerHTML&&T.innerHTML==null||S.textContent&&T.textContent==null)&&d(v,""),y?Ye(c.dynamicChildren,y,v,h,b,jn(f,g),m):E||j(c,f,v,null,h,b,jn(f,g),m,!1),_>0){if(_&16)It(v,S,T,h,g);else if(_&2&&S.class!==T.class&&i(v,"class",null,T.class,g),_&4&&i(v,"style",S.style,T.style,g),_&8){const P=f.dynamicProps;for(let V=0;V<P.length;V++){const B=P[V],le=S[B],Z=T[B];(Z!==le||B==="value")&&i(v,B,le,Z,g,h)}}_&1&&c.children!==f.children&&d(v,f.children)}else!E&&y==null&&It(v,S,T,h,g);((O=T.onVnodeUpdated)||A)&&ue(()=>{O&&Se(O,h,f,c),A&&Qe(f,c,h,"updated")},b)},Ye=(c,f,h,b,g,m,E)=>{for(let v=0;v<f.length;v++){const _=c[v],y=f[v],A=_.el&&(_.type===_e||!At(_,y)||_.shapeFlag&70)?p(_.el):h;C(_,y,A,null,b,g,m,E,!0)}},It=(c,f,h,b,g)=>{if(f!==h){if(f!==H)for(const m in f)!Dt(m)&&!(m in h)&&i(c,m,f[m],null,g,b);for(const m in h){if(Dt(m))continue;const E=h[m],v=f[m];E!==v&&m!=="value"&&i(c,m,v,E,g,b)}"value"in h&&i(c,"value",f.value,h.value,g)}},zt=(c,f,h,b,g,m,E,v,_)=>{const y=f.el=c?c.el:a(""),A=f.anchor=c?c.anchor:a("");let{patchFlag:S,dynamicChildren:T,slotScopeIds:O}=f;O&&(v=v?v.concat(O):O),c==null?(s(y,h,b),s(A,h,b),Le(f.children||[],h,A,g,m,E,v,_)):S>0&&S&64&&T&&c.dynamicChildren?(Ye(c.dynamicChildren,T,h,g,m,E,v),(f.key!=null||g&&f===g.subTree)&&Hi(c,f,!0)):j(c,f,h,A,g,m,E,v,_)},qt=(c,f,h,b,g,m,E,v,_)=>{f.slotScopeIds=v,c==null?f.shapeFlag&512?g.ctx.activate(f,h,b,E,_):Rn(f,h,b,g,m,E,_):Us(c,f,_)},Rn=(c,f,h,b,g,m,E)=>{const v=c.component=Dl(c,b,g);if(Ti(c)&&(v.ctx.renderer=St),Ol(v,!1,E),v.asyncDep){if(g&&g.registerDep(v,ne,E),!c.el){const _=v.subTree=Fe(at);N(null,_,f,h)}}else ne(v,c,f,h,g,m,E)},Us=(c,f,h)=>{const b=f.component=c.component;if(yl(c,f,h))if(b.asyncDep&&!b.asyncResolved){z(b,f,h);return}else b.next=f,b.update();else f.el=c.el,b.vnode=f},ne=(c,f,h,b,g,m,E)=>{const v=()=>{if(c.isMounted){let{next:S,bu:T,u:O,parent:P,vnode:V}=c;{const ce=ji(c);if(ce){S&&(S.el=V.el,z(c,S,E)),ce.asyncDep.then(()=>{c.isUnmounted||v()});return}}let B=S,le;Ze(c,!1),S?(S.el=V.el,z(c,S,E)):S=V,T&&Zt(T),(le=S.props&&S.props.onVnodeBeforeUpdate)&&Se(le,P,S,V),Ze(c,!0);const Z=kn(c),be=c.subTree;c.subTree=Z,C(be,Z,p(be.el),Yt(be),c,g,m),S.el=Z.el,B===null&&_l(c,Z.el),O&&ue(O,g),(le=S.props&&S.props.onVnodeUpdated)&&ue(()=>Se(le,P,S,V),g)}else{let S;const{el:T,props:O}=f,{bm:P,m:V,parent:B,root:le,type:Z}=c,be=Mt(f);if(Ze(c,!1),P&&Zt(P),!be&&(S=O&&O.onVnodeBeforeMount)&&Se(S,B,f),Ze(c,!0),T&&qs){const ce=()=>{c.subTree=kn(c),qs(T,c.subTree,c,g,null)};be&&Z.__asyncHydrate?Z.__asyncHydrate(T,c,ce):ce()}else{le.ce&&le.ce._injectChildStyle(Z);const ce=c.subTree=kn(c);C(null,ce,h,b,c,g,m),f.el=ce.el}if(V&&ue(V,g),!be&&(S=O&&O.onVnodeMounted)){const ce=f;ue(()=>Se(S,B,ce),g)}(f.shapeFlag&256||B&&Mt(B.vnode)&&B.vnode.shapeFlag&256)&&c.a&&ue(c.a,g),c.isMounted=!0,f=h=b=null}};c.scope.on();const _=c.effect=new ni(v);c.scope.off();const y=c.update=_.run.bind(_),A=c.job=_.runIfDirty.bind(_);A.i=c,A.id=c.uid,_.scheduler=()=>Rs(A),Ze(c,!0),y()},z=(c,f,h)=>{f.component=c;const b=c.vnode.props;c.vnode=f,c.next=null,nl(c,f.props,b,h),ol(c,f.children,h),qe(),er(c),Ge()},j=(c,f,h,b,g,m,E,v,_=!1)=>{const y=c&&c.children,A=c?c.shapeFlag:0,S=f.children,{patchFlag:T,shapeFlag:O}=f;if(T>0){if(T&128){Gt(y,S,h,b,g,m,E,v,_);return}else if(T&256){Je(y,S,h,b,g,m,E,v,_);return}}O&8?(A&16&&Et(y,g,m),S!==y&&d(h,S)):A&16?O&16?Gt(y,S,h,b,g,m,E,v,_):Et(y,g,m,!0):(A&8&&d(h,""),O&16&&Le(S,h,b,g,m,E,v,_))},Je=(c,f,h,b,g,m,E,v,_)=>{c=c||gt,f=f||gt;const y=c.length,A=f.length,S=Math.min(y,A);let T;for(T=0;T<S;T++){const O=f[T]=_?je(f[T]):Ce(f[T]);C(c[T],O,h,null,g,m,E,v,_)}y>A?Et(c,g,m,!0,!1,S):Le(f,h,b,g,m,E,v,_,S)},Gt=(c,f,h,b,g,m,E,v,_)=>{let y=0;const A=f.length;let S=c.length-1,T=A-1;for(;y<=S&&y<=T;){const O=c[y],P=f[y]=_?je(f[y]):Ce(f[y]);if(At(O,P))C(O,P,h,null,g,m,E,v,_);else break;y++}for(;y<=S&&y<=T;){const O=c[S],P=f[T]=_?je(f[T]):Ce(f[T]);if(At(O,P))C(O,P,h,null,g,m,E,v,_);else break;S--,T--}if(y>S){if(y<=T){const O=T+1,P=O<A?f[O].el:b;for(;y<=T;)C(null,f[y]=_?je(f[y]):Ce(f[y]),h,P,g,m,E,v,_),y++}}else if(y>T)for(;y<=S;)Ie(c[y],g,m,!0),y++;else{const O=y,P=y,V=new Map;for(y=P;y<=T;y++){const fe=f[y]=_?je(f[y]):Ce(f[y]);fe.key!=null&&V.set(fe.key,y)}let B,le=0;const Z=T-P+1;let be=!1,ce=0;const Tt=new Array(Z);for(y=0;y<Z;y++)Tt[y]=0;for(y=O;y<=S;y++){const fe=c[y];if(le>=Z){Ie(fe,g,m,!0);continue}let Ee;if(fe.key!=null)Ee=V.get(fe.key);else for(B=P;B<=T;B++)if(Tt[B-P]===0&&At(fe,f[B])){Ee=B;break}Ee===void 0?Ie(fe,g,m,!0):(Tt[Ee-P]=y+1,Ee>=ce?ce=Ee:be=!0,C(fe,f[Ee],h,null,g,m,E,v,_),le++)}const Gs=be?fl(Tt):gt;for(B=Gs.length-1,y=Z-1;y>=0;y--){const fe=P+y,Ee=f[fe],Ys=fe+1<A?f[fe+1].el:b;Tt[y]===0?C(null,Ee,h,Ys,g,m,E,v,_):be&&(B<0||y!==Gs[B]?Xe(Ee,h,Ys,2):B--)}}},Xe=(c,f,h,b,g=null)=>{const{el:m,type:E,transition:v,children:_,shapeFlag:y}=c;if(y&6){Xe(c.component.subTree,f,h,b);return}if(y&128){c.suspense.move(f,h,b);return}if(y&64){E.move(c,f,h,St);return}if(E===_e){s(m,f,h);for(let S=0;S<_.length;S++)Xe(_[S],f,h,b);s(c.anchor,f,h);return}if(E===Un){G(c,f,h);return}if(b!==2&&y&1&&v)if(b===0)v.beforeEnter(m),s(m,f,h),ue(()=>v.enter(m),g);else{const{leave:S,delayLeave:T,afterLeave:O}=v,P=()=>s(m,f,h),V=()=>{S(m,()=>{P(),O&&O()})};T?T(m,P,V):V()}else s(m,f,h)},Ie=(c,f,h,b=!1,g=!1)=>{const{type:m,props:E,ref:v,children:_,dynamicChildren:y,shapeFlag:A,patchFlag:S,dirs:T,cacheIndex:O}=c;if(S===-2&&(g=!1),v!=null&&is(v,null,h,c,!0),O!=null&&(f.renderCache[O]=void 0),A&256){f.ctx.deactivate(c);return}const P=A&1&&T,V=!Mt(c);let B;if(V&&(B=E&&E.onVnodeBeforeUnmount)&&Se(B,f,c),A&6)Bo(c.component,h,b);else{if(A&128){c.suspense.unmount(h,b);return}P&&Qe(c,null,f,"beforeUnmount"),A&64?c.type.remove(c,f,h,St,b):y&&!y.hasOnce&&(m!==_e||S>0&&S&64)?Et(y,f,h,!1,!0):(m===_e&&S&384||!g&&A&16)&&Et(_,f,h),b&&Ws(c)}(V&&(B=E&&E.onVnodeUnmounted)||P)&&ue(()=>{B&&Se(B,f,c),P&&Qe(c,null,f,"unmounted")},h)},Ws=c=>{const{type:f,el:h,anchor:b,transition:g}=c;if(f===_e){No(h,b);return}if(f===Un){D(c);return}const m=()=>{r(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:v}=g,_=()=>E(h,m);v?v(c.el,m,_):_()}else m()},No=(c,f)=>{let h;for(;c!==f;)h=w(c),r(c),c=h;r(f)},Bo=(c,f,h)=>{const{bum:b,scope:g,job:m,subTree:E,um:v,m:_,a:y}=c;or(_),or(y),b&&Zt(b),g.stop(),m&&(m.flags|=8,Ie(E,c,f,h)),v&&ue(v,f),ue(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Et=(c,f,h,b=!1,g=!1,m=0)=>{for(let E=m;E<c.length;E++)Ie(c[E],f,h,b,g)},Yt=c=>{if(c.shapeFlag&6)return Yt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=w(c.anchor||c.el),h=f&&f[Oa];return h?w(h):f};let Mn=!1;const Ks=(c,f,h)=>{c==null?f._vnode&&Ie(f._vnode,null,null,!0):C(f._vnode||null,c,f,null,null,null,h),f._vnode=c,Mn||(Mn=!0,er(),wi(),Mn=!1)},St={p:C,um:Ie,m:Xe,r:Ws,mt:Rn,mc:Le,pc:j,pbc:Ye,n:Yt,o:e};let zs,qs;return{render:Ks,hydrate:zs,createApp:Za(Ks,zs)}}function jn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ze({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function cl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Hi(e,t,n=!1){const s=e.children,r=t.children;if(x(s)&&x(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=je(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Hi(o,a)),a.type===Tn&&(a.el=o.el)}}function fl(e){const t=e.slice(),n=[0];let s,r,i,o,a;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function ji(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ji(t)}function or(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ul=Symbol.for("v-scx"),dl=()=>tn(ul);function Vn(e,t,n){return Vi(e,t,n)}function Vi(e,t,n=H){const{immediate:s,deep:r,flush:i,once:o}=n,a=Q({},n),l=t&&s||!t&&i!=="post";let u;if(jt){if(i==="sync"){const I=dl();u=I.__watcherHandles||(I.__watcherHandles=[])}else if(!l){const I=()=>{};return I.stop=Ae,I.resume=Ae,I.pause=Ae,I}}const d=ie;a.call=(I,M,C)=>De(I,d,M,C);let p=!1;i==="post"?a.scheduler=I=>{ue(I,d&&d.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(I,M)=>{M?I():Rs(I)}),a.augmentJob=I=>{t&&(I.flags|=4),p&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const w=Sa(e,t,a);return jt&&(u?u.push(w):l&&w()),w}function hl(e,t,n){const s=this.proxy,r=Y(e)?e.includes(".")?ki(s,e):()=>s[e]:e.bind(s,s);let i;R(t)?i=t:(i=t.handler,n=t);const o=Wt(this),a=Vi(r,i.bind(s),n);return o(),a}function ki(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const pl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${ut(t)}Modifiers`];function gl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||H;let r=n;const i=t.startsWith("update:"),o=i&&pl(s,t.slice(7));o&&(o.trim&&(r=n.map(d=>Y(d)?d.trim():d)),o.number&&(r=n.map(Zn)));let a,l=s[a=Pn(t)]||s[a=Pn(Ke(t))];!l&&i&&(l=s[a=Pn(ut(t))]),l&&De(l,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,De(u,e,6,r)}}function Ui(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!R(e)){const l=u=>{const d=Ui(u,t,!0);d&&(a=!0,Q(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(K(e)&&s.set(e,null),null):(x(i)?i.forEach(l=>o[l]=null):Q(o,i),K(e)&&s.set(e,o),o)}function Sn(e,t){return!e||!mn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,ut(t))||$(e,t))}function kn(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:d,props:p,data:w,setupState:I,ctx:M,inheritAttrs:C}=e,L=ln(e);let N,q;try{if(n.shapeFlag&4){const D=r||s,J=D;N=Ce(u.call(J,D,d,p,I,w,M)),q=a}else{const D=t;N=Ce(D.length>1?D(p,{attrs:a,slots:o,emit:l}):D(p,null)),q=t.props?a:ml(a)}}catch(D){Ft.length=0,In(D,e,1),N=Fe(at)}let G=N;if(q&&C!==!1){const D=Object.keys(q),{shapeFlag:J}=G;D.length&&J&7&&(i&&D.some(_s)&&(q=bl(q,i)),G=wt(G,q,!1,!0))}return n.dirs&&(G=wt(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&Ms(G,n.transition),N=G,ln(L),N}const ml=e=>{let t;for(const n in e)(n==="class"||n==="style"||mn(n))&&((t||(t={}))[n]=e[n]);return t},bl=(e,t)=>{const n={};for(const s in e)(!_s(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function yl(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ar(s,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const w=d[p];if(o[w]!==s[w]&&!Sn(u,w))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ar(s,o,u):!0:!!o;return!1}function ar(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!Sn(n,i))return!0}return!1}function _l({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Wi=e=>e.__isSuspense;function vl(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):xa(e)}const _e=Symbol.for("v-fgt"),Tn=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),Un=Symbol.for("v-stc"),Ft=[];let he=null;function it(e=!1){Ft.push(he=e?null:[])}function wl(){Ft.pop(),he=Ft[Ft.length-1]||null}let Ht=1;function lr(e){Ht+=e,e<0&&he&&(he.hasOnce=!0)}function Ki(e){return e.dynamicChildren=Ht>0?he||gt:null,wl(),Ht>0&&he&&he.push(e),e}function nn(e,t,n,s,r,i){return Ki(k(e,t,n,s,r,i,!0))}function $s(e,t,n,s,r){return Ki(Fe(e,t,n,s,r,!0))}function zi(e){return e?e.__v_isVNode===!0:!1}function At(e,t){return e.type===t.type&&e.key===t.key}const qi=({key:e})=>e??null,sn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Y(e)||X(e)||R(e)?{i:ge,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,s=0,r=null,i=e===_e?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qi(t),ref:t&&sn(t),scopeId:Ei,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ge};return a?(Ns(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Y(n)?8:16),Ht>0&&!o&&he&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&he.push(l),l}const Fe=Il;function Il(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Wa)&&(e=at),zi(e)){const a=wt(e,t,!0);return n&&Ns(a,n),Ht>0&&!i&&he&&(a.shapeFlag&6?he[he.indexOf(e)]=a:he.push(a)),a.patchFlag=-2,a}if(Fl(e)&&(e=e.__vccOpts),t){t=El(t);let{class:a,style:l}=t;a&&!Y(a)&&(t.class=ye(a)),K(l)&&(Os(l)&&!x(l)&&(l=Q({},l)),t.style=Is(l))}const o=Y(e)?1:Wi(e)?128:Ra(e)?64:K(e)?4:R(e)?2:0;return k(e,t,n,s,r,o,i,!0)}function El(e){return e?Os(e)||Mi(e)?Q({},e):e:null}function wt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=e,u=t?Cl(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&qi(u),ref:t&&t.ref?n&&i?x(i)?i.concat(sn(t)):[i,sn(t)]:sn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&Ms(d,l.clone(d)),d}function Sl(e=" ",t=0){return Fe(Tn,null,e,t)}function Tl(e="",t=!1){return t?(it(),$s(at,null,e)):Fe(at,null,e)}function Ce(e){return e==null||typeof e=="boolean"?Fe(at):x(e)?Fe(_e,null,e.slice()):zi(e)?je(e):Fe(Tn,null,String(e))}function je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function Ns(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(x(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Ns(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Mi(t)?t._ctx=ge:r===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),s&64?(n=16,t=[Sl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=ye([t.class,s.class]));else if(r==="style")t.style=Is([t.style,s.style]);else if(mn(r)){const i=t[r],o=s[r];o&&i!==o&&!(x(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function Se(e,t,n,s=null){De(e,t,7,[n,s])}const Al=Di();let xl=0;function Dl(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Al,i={uid:xl++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fi(s,r),emitsOptions:Ui(s,r),emit:null,emitted:null,propsDefaults:H,inheritAttrs:s.inheritAttrs,ctx:H,data:H,props:H,attrs:H,slots:H,refs:H,setupState:H,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=gl.bind(null,i),e.ce&&e.ce(i),i}let ie=null,fn,fs;{const e=_n(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};fn=t("__VUE_INSTANCE_SETTERS__",n=>ie=n),fs=t("__VUE_SSR_SETTERS__",n=>jt=n)}const Wt=e=>{const t=ie;return fn(e),e.scope.on(),()=>{e.scope.off(),fn(t)}},cr=()=>{ie&&ie.scope.off(),fn(null)};function Gi(e){return e.vnode.shapeFlag&4}let jt=!1;function Ol(e,t=!1,n=!1){t&&fs(t);const{props:s,children:r}=e.vnode,i=Gi(e);tl(e,s,i,t),il(e,r,n);const o=i?Rl(e,t):void 0;return t&&fs(!1),o}function Rl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,za);const{setup:s}=n;if(s){qe();const r=e.setupContext=s.length>1?Pl(e):null,i=Wt(e),o=Ut(s,e,0,[e.props,r]),a=qr(o);if(Ge(),i(),(a||e.sp)&&!Mt(e)&&Si(e),a){if(o.then(cr,cr),t)return o.then(l=>{fr(e,l,t)}).catch(l=>{In(l,e,0)});e.asyncDep=o}else fr(e,o,t)}else Yi(e,t)}function fr(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=yi(t)),Yi(e,n)}let ur;function Yi(e,t,n){const s=e.type;if(!e.render){if(!t&&ur&&!s.render){const r=s.template||Ps(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,u=Q(Q({isCustomElement:i,delimiters:a},o),l);s.render=ur(r,u)}}e.render=s.render||Ae}{const r=Wt(e);qe();try{qa(e)}finally{Ge(),r()}}}const Ml={get(e,t){return ee(e,"get",""),e[t]}};function Pl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ml),slots:e.slots,emit:e.emit,expose:t}}function Cn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(yi(ba(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Pt)return Pt[n](e)},has(t,n){return n in t||n in Pt}})):e.proxy}function Fl(e){return R(e)&&"__vccOpts"in e}const Ji=(e,t)=>Ia(e,t,jt),$l="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let us;const dr=typeof window<"u"&&window.trustedTypes;if(dr)try{us=dr.createPolicy("vue",{createHTML:e=>e})}catch{}const Xi=us?e=>us.createHTML(e):e=>e,Nl="http://www.w3.org/2000/svg",Bl="http://www.w3.org/1998/Math/MathML",Re=typeof document<"u"?document:null,hr=Re&&Re.createElement("template"),Ll={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Re.createElementNS(Nl,e):t==="mathml"?Re.createElementNS(Bl,e):n?Re.createElement(e,{is:n}):Re.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Re.createTextNode(e),createComment:e=>Re.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Re.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{hr.innerHTML=Xi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=hr.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Hl=Symbol("_vtc");function jl(e,t,n){const s=e[Hl];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const pr=Symbol("_vod"),Vl=Symbol("_vsh"),kl=Symbol(""),Ul=/(^|;)\s*display\s*:/;function Wl(e,t,n){const s=e.style,r=Y(n);let i=!1;if(n&&!r){if(t)if(Y(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&rn(s,a,"")}else for(const o in t)n[o]==null&&rn(s,o,"");for(const o in n)o==="display"&&(i=!0),rn(s,o,n[o])}else if(r){if(t!==n){const o=s[kl];o&&(n+=";"+o),s.cssText=n,i=Ul.test(n)}}else t&&e.removeAttribute("style");pr in e&&(e[pr]=i?s.display:"",e[Vl]&&(s.display="none"))}const gr=/\s*!important$/;function rn(e,t,n){if(x(n))n.forEach(s=>rn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Kl(e,t);gr.test(n)?e.setProperty(ut(s),n.replace(gr,""),"important"):e[s]=n}}const mr=["Webkit","Moz","ms"],Wn={};function Kl(e,t){const n=Wn[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return Wn[t]=s;s=Jr(s);for(let r=0;r<mr.length;r++){const i=mr[r]+s;if(i in e)return Wn[t]=i}return t}const br="http://www.w3.org/1999/xlink";function yr(e,t,n,s,r,i=Go(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(br,t.slice(6,t.length)):e.setAttributeNS(br,t,n):n==null||i&&!Qr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":xe(n)?String(n):n)}function _r(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Xi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Qr(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function nt(e,t,n,s){e.addEventListener(t,n,s)}function zl(e,t,n,s){e.removeEventListener(t,n,s)}const vr=Symbol("_vei");function ql(e,t,n,s,r=null){const i=e[vr]||(e[vr]={}),o=i[t];if(s&&o)o.value=s;else{const[a,l]=Gl(t);if(s){const u=i[t]=Xl(s,r);nt(e,a,u,l)}else o&&(zl(e,a,o,l),i[t]=void 0)}}const wr=/(?:Once|Passive|Capture)$/;function Gl(e){let t;if(wr.test(e)){t={};let s;for(;s=e.match(wr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ut(e.slice(2)),t]}let Kn=0;const Yl=Promise.resolve(),Jl=()=>Kn||(Yl.then(()=>Kn=0),Kn=Date.now());function Xl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;De(Ql(s,n.value),t,5,[s])};return n.value=e,n.attached=Jl(),n}function Ql(e,t){if(x(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Ir=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Zl=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?jl(e,s,o):t==="style"?Wl(e,n,s):mn(t)?_s(t)||ql(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ec(e,t,s,o))?(_r(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&yr(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Y(s))?_r(e,Ke(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),yr(e,t,s,o))};function ec(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ir(t)&&R(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ir(t)&&Y(n)?!1:t in e}const un=e=>{const t=e.props["onUpdate:modelValue"]||!1;return x(t)?n=>Zt(t,n):t};function tc(e){e.target.composing=!0}function Er(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vt=Symbol("_assign"),Sr={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[vt]=un(r);const i=s||r.props&&r.props.type==="number";nt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Zn(a)),e[vt](a)}),n&&nt(e,"change",()=>{e.value=e.value.trim()}),t||(nt(e,"compositionstart",tc),nt(e,"compositionend",Er),nt(e,"change",Er))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[vt]=un(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Zn(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===l)||(e.value=l))}},nc={deep:!0,created(e,t,n){e[vt]=un(n),nt(e,"change",()=>{const s=e._modelValue,r=sc(e),i=e.checked,o=e[vt];if(x(s)){const a=Zr(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const u=[...s];u.splice(a,1),o(u)}}else if(bn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Qi(e,i))})},mounted:Tr,beforeUpdate(e,t,n){e[vt]=un(n),Tr(e,t,n)}};function Tr(e,{value:t,oldValue:n},s){e._modelValue=t;let r;if(x(t))r=Zr(t,s.props.value)>-1;else if(bn(t))r=t.has(s.props.value);else{if(t===n)return;r=vn(t,Qi(e,!0))}e.checked!==r&&(e.checked=r)}function sc(e){return"_value"in e?e._value:e.value}function Qi(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const rc=["ctrl","shift","alt","meta"],ic={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rc.some(n=>e[`${n}Key`]&&!t.includes(n))},Cr=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<t.length;o++){const a=ic[t[o]];if(a&&a(r,t))return}return e(r,...i)})},oc=Q({patchProp:Zl},Ll);let Ar;function ac(){return Ar||(Ar=al(oc))}const lc=(...e)=>{const t=ac().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=fc(s);if(!r)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,cc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function cc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function fc(e){return Y(e)?document.querySelector(e):e}const uc=["onUpdate:modelValue"],dc={__name:"ListTest",setup(e){let t=0,n="";const s=oe(""),r=oe(!1),i=oe([{id:t++,text:"Поспать",done:!1},{id:t++,text:"Поесть",done:!1},{id:t++,text:"Поспать",done:!1},{id:t++,text:"Поесть",done:!1},{id:t++,text:"Поспать",done:!1},{id:t++,text:"Поесть",done:!1},{id:t++,text:"Поспать",done:!1},{id:t++,text:"Поесть",done:!1}]);function o(){i.value.push({id:t++,text:s.value,done:!1})}function a(){i.value=i.value.filter(M=>M.id!=Number(n))}const l=Ji(()=>r.value?i.value.filter(M=>!M.done):i.value),u=oe("Beleberda"),d=oe("Tasks"),p=oe("EditTasks");oe("Done");const w=oe("Statistic"),I=oe("Todo");return(M,C)=>(it(),nn("div",{class:ye(u.value)},[k("div",{class:ye(d.value)},[C[3]||(C[3]=k("h1",{style:{"text-align":"center"}},"Задачи на сегодня",-1)),k("ul",null,[(it(!0),nn(_e,null,Ka(l.value,L=>(it(),nn("li",{key:L.id,class:ye(I.value)},[Ln(k("input",{type:"checkbox","onUpdate:modelValue":N=>L.done=N},null,8,uc),[[nc,L.done]]),k("span",{class:ye({Done:L.done})},en(L.id)+" – "+en(L.text),3)],2))),128))])],2),k("div",{class:ye(p.value)},[C[6]||(C[6]=k("h1",{style:{"text-align":"center","margin-bottom":"10px"}},"Управлять задачами",-1)),k("div",{class:ye(w.value)},[k("p",null,"всего задач: "+en(i.value.length),1),k("button",{onClick:C[0]||(C[0]=L=>r.value=!r.value),style:{"font-size":"20px",margin:"0px"}},"Скрыть выполненные")],2),C[7]||(C[7]=k("p",null,"Добавить задачу",-1)),k("form",{onSubmit:Cr(o,["prevent"])},[Ln(k("input",{"onUpdate:modelValue":C[1]||(C[1]=L=>s.value=L),required:"",placeholder:"Введите задачу"},null,512),[[Sr,s.value]]),C[4]||(C[4]=k("button",{style:{width:"23%","font-size":"20px"}},"Добавить",-1))],32),C[8]||(C[8]=k("p",null,"Удалить задачу",-1)),k("form",{onSubmit:Cr(a,["prevent"])},[Ln(k("input",{"onUpdate:modelValue":C[2]||(C[2]=L=>X(n)?n.value=L:n=L),required:"",placeholder:"Введите id"},null,512),[[Sr,bi(n)]]),C[5]||(C[5]=k("button",{style:{width:"23%","font-size":"20px"}},"Удалить",-1))],32)],2)],2))}},hc={__name:"menu",setup(e){const t=oe("hellotion"),n=oe("HeadMessage"),s=oe(!1),r=oe(!1),i=oe(!1);function o(){i.value=!1,s.value=!1,r.value=!0}function a(){i.value=!1,r.value=!1,s.value=!0}function l(){r.value=!1,s.value=!1,i.value=!0}return(u,d)=>(it(),nn(_e,null,[k("header",null,[k("div",{class:ye(t.value)},[k("h1",{class:ye(n.value)},"Сайт для когнитивно одаренных",2),k("button",{onClick:a},"IQ-тест"),k("button",{onClick:o},"Chat-pgt"),k("button",{onClick:l},"Работа")],2)]),i.value?(it(),$s(dc,{key:0})):Tl("",!0)],64))}},pc={__name:"App",setup(e){return(t,n)=>(it(),$s(hc))}};var xr={};/**
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
 */const Zi=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},gc=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,u=l?e[r+2]:0,d=i>>2,p=(i&3)<<4|a>>4;let w=(a&15)<<2|u>>6,I=u&63;l||(I=64,o||(w=64)),s.push(n[d],n[p],n[w],n[I])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Zi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const p=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||p==null)throw new mc;const w=i<<2|a>>4;if(s.push(w),u!==64){const I=a<<4&240|u>>2;if(s.push(I),p!==64){const M=u<<6&192|p;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class mc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bc=function(e){const t=Zi(e);return eo.encodeByteArray(t,!0)},to=function(e){return bc(e).replace(/\./g,"")},yc=function(e){try{return eo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function _c(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vc=()=>_c().__FIREBASE_DEFAULTS__,wc=()=>{if(typeof process>"u"||typeof xr>"u")return;const e=xr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ic=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&yc(e[1]);return t&&JSON.parse(t)},Ec=()=>{try{return vc()||wc()||Ic()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},no=()=>{var e;return(e=Ec())===null||e===void 0?void 0:e.config};/**
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
 */class Sc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function Tc(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function so(){try{return typeof indexedDB=="object"}catch{return!1}}function ro(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Cc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ac="FirebaseError";class dt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Ac,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?xc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new dt(r,a,s)}}function xc(e,t){return e.replace(Dc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Dc=/\{\$([^}]+)}/g;function dn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Dr(i)&&Dr(o)){if(!dn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Dr(e){return e!==null&&typeof e=="object"}/**
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
 */const Oc=1e3,Rc=2,Mc=4*60*60*1e3,Pc=.5;function Or(e,t=Oc,n=Rc){const s=t*Math.pow(n,e),r=Math.round(Pc*s*(Math.random()-.5)*2);return Math.min(Mc,s+r)}/**
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
 */function io(e){return e&&e._delegate?e._delegate:e}class ze{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const tt="[DEFAULT]";/**
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
 */class Fc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Sc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Nc(t))try{this.getOrInitializeService({instanceIdentifier:tt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=tt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tt){return this.instances.has(t)}getOptions(t=tt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$c(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=tt){return this.component?this.component.multipleInstances?t:tt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $c(e){return e===tt?void 0:e}function Nc(e){return e.instantiationMode==="EAGER"}/**
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
 */class Bc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(W||(W={}));const Lc={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Hc=W.INFO,jc={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Vc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=jc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class oo{constructor(t){this.name=t,this._logLevel=Hc,this._logHandler=Vc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const kc=(e,t)=>t.some(n=>e instanceof n);let Rr,Mr;function Uc(){return Rr||(Rr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wc(){return Mr||(Mr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ao=new WeakMap,ds=new WeakMap,lo=new WeakMap,zn=new WeakMap,Bs=new WeakMap;function Kc(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ke(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ao.set(n,e)}).catch(()=>{}),Bs.set(t,e),t}function zc(e){if(ds.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ds.set(e,t)}let hs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ds.get(e);if(t==="objectStoreNames")return e.objectStoreNames||lo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ke(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function qc(e){hs=e(hs)}function Gc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(qn(this),t,...n);return lo.set(s,t.sort?t.sort():[t]),ke(s)}:Wc().includes(e)?function(...t){return e.apply(qn(this),t),ke(ao.get(this))}:function(...t){return ke(e.apply(qn(this),t))}}function Yc(e){return typeof e=="function"?Gc(e):(e instanceof IDBTransaction&&zc(e),kc(e,Uc())?new Proxy(e,hs):e)}function ke(e){if(e instanceof IDBRequest)return Kc(e);if(zn.has(e))return zn.get(e);const t=Yc(e);return t!==e&&(zn.set(e,t),Bs.set(t,e)),t}const qn=e=>Bs.get(e);function co(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=ke(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ke(o.result),l.oldVersion,l.newVersion,ke(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Jc=["get","getKey","getAll","getAllKeys","count"],Xc=["put","add","delete","clear"],Gn=new Map;function Pr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Gn.get(t))return Gn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Xc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Jc.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return Gn.set(t,i),i}qc(e=>({...e,get:(t,n,s)=>Pr(t,n)||e.get(t,n,s),has:(t,n)=>!!Pr(t,n)||e.has(t,n)}));/**
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
 */class Qc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ps="@firebase/app",Fr="0.10.15";/**
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
 */const $e=new oo("@firebase/app"),ef="@firebase/app-compat",tf="@firebase/analytics-compat",nf="@firebase/analytics",sf="@firebase/app-check-compat",rf="@firebase/app-check",of="@firebase/auth",af="@firebase/auth-compat",lf="@firebase/database",cf="@firebase/data-connect",ff="@firebase/database-compat",uf="@firebase/functions",df="@firebase/functions-compat",hf="@firebase/installations",pf="@firebase/installations-compat",gf="@firebase/messaging",mf="@firebase/messaging-compat",bf="@firebase/performance",yf="@firebase/performance-compat",_f="@firebase/remote-config",vf="@firebase/remote-config-compat",wf="@firebase/storage",If="@firebase/storage-compat",Ef="@firebase/firestore",Sf="@firebase/vertexai",Tf="@firebase/firestore-compat",Cf="firebase";/**
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
 */const gs="[DEFAULT]",Af={[ps]:"fire-core",[ef]:"fire-core-compat",[nf]:"fire-analytics",[tf]:"fire-analytics-compat",[rf]:"fire-app-check",[sf]:"fire-app-check-compat",[of]:"fire-auth",[af]:"fire-auth-compat",[lf]:"fire-rtdb",[cf]:"fire-data-connect",[ff]:"fire-rtdb-compat",[uf]:"fire-fn",[df]:"fire-fn-compat",[hf]:"fire-iid",[pf]:"fire-iid-compat",[gf]:"fire-fcm",[mf]:"fire-fcm-compat",[bf]:"fire-perf",[yf]:"fire-perf-compat",[_f]:"fire-rc",[vf]:"fire-rc-compat",[wf]:"fire-gcs",[If]:"fire-gcs-compat",[Ef]:"fire-fst",[Tf]:"fire-fst-compat",[Sf]:"fire-vertex","fire-js":"fire-js",[Cf]:"fire-js-all"};/**
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
 */const hn=new Map,xf=new Map,ms=new Map;function $r(e,t){try{e.container.addComponent(t)}catch(n){$e.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function lt(e){const t=e.name;if(ms.has(t))return $e.debug(`There were multiple attempts to register component ${t}.`),!1;ms.set(t,e);for(const n of hn.values())$r(n,e);for(const n of xf.values())$r(n,e);return!0}function xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Df={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ue=new An("app","Firebase",Df);/**
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
 */class Of{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}function fo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:gs,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Ue.create("bad-app-name",{appName:String(r)});if(n||(n=no()),!n)throw Ue.create("no-options");const i=hn.get(r);if(i){if(dn(n,i.options)&&dn(s,i.config))return i;throw Ue.create("duplicate-app",{appName:r})}const o=new Bc(r);for(const l of ms.values())o.addComponent(l);const a=new Of(n,s,o);return hn.set(r,a),a}function Rf(e=gs){const t=hn.get(e);if(!t&&e===gs&&no())return fo();if(!t)throw Ue.create("no-app",{appName:e});return t}function We(e,t,n){var s;let r=(s=Af[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$e.warn(a.join(" "));return}lt(new ze(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Mf="firebase-heartbeat-database",Pf=1,Vt="firebase-heartbeat-store";let Yn=null;function uo(){return Yn||(Yn=co(Mf,Pf,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Vt)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ue.create("idb-open",{originalErrorMessage:e.message})})),Yn}async function Ff(e){try{const n=(await uo()).transaction(Vt),s=await n.objectStore(Vt).get(ho(e));return await n.done,s}catch(t){if(t instanceof dt)$e.warn(t.message);else{const n=Ue.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$e.warn(n.message)}}}async function Nr(e,t){try{const s=(await uo()).transaction(Vt,"readwrite");await s.objectStore(Vt).put(t,ho(e)),await s.done}catch(n){if(n instanceof dt)$e.warn(n.message);else{const s=Ue.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$e.warn(s.message)}}}function ho(e){return`${e.name}!${e.options.appId}`}/**
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
 */const $f=1024,Nf=30*24*60*60*1e3;class Bf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Br();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Nf}),this._storage.overwrite(this._heartbeatsCache))}catch(s){$e.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Br(),{heartbeatsToSend:s,unsentEntries:r}=Lf(this._heartbeatsCache.heartbeats),i=to(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $e.warn(n),""}}}function Br(){return new Date().toISOString().substring(0,10)}function Lf(e,t=$f){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Lr(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Lr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return so()?ro().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ff(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Lr(e){return to(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function jf(e){lt(new ze("platform-logger",t=>new Qc(t),"PRIVATE")),lt(new ze("heartbeat",t=>new Bf(t),"PRIVATE")),We(ps,Fr,e),We(ps,Fr,"esm2017"),We("fire-js","")}jf("");var Vf="firebase",kf="11.0.1";/**
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
 */We(Vf,kf,"app");const po="@firebase/installations",Ls="0.6.10";/**
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
 */const go=1e4,mo=`w:${Ls}`,bo="FIS_v2",Uf="https://firebaseinstallations.googleapis.com/v1",Wf=60*60*1e3,Kf="installations",zf="Installations";/**
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
 */const qf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ct=new An(Kf,zf,qf);function yo(e){return e instanceof dt&&e.code.includes("request-failed")}/**
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
 */function _o({projectId:e}){return`${Uf}/projects/${e}/installations`}function vo(e){return{token:e.token,requestStatus:2,expiresIn:Yf(e.expiresIn),creationTime:Date.now()}}async function wo(e,t){const s=(await t.json()).error;return ct.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Io({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Gf(e,{refreshToken:t}){const n=Io(e);return n.append("Authorization",Jf(t)),n}async function Eo(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Yf(e){return Number(e.replace("s","000"))}function Jf(e){return`${bo} ${e}`}/**
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
 */async function Xf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=_o(e),r=Io(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:bo,appId:e.appId,sdkVersion:mo},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Eo(()=>fetch(s,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:vo(u.authToken)}}else throw await wo("Create Installation",l)}/**
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
 */function So(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Qf(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Zf=/^[cdef][\w-]{21}$/,bs="";function eu(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=tu(e);return Zf.test(n)?n:bs}catch{return bs}}function tu(e){return Qf(e).substr(0,22)}/**
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
 */function Dn(e){return`${e.appName}!${e.appId}`}/**
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
 */const To=new Map;function Co(e,t){const n=Dn(e);Ao(n,t),nu(n,t)}function Ao(e,t){const n=To.get(e);if(n)for(const s of n)s(t)}function nu(e,t){const n=su();n&&n.postMessage({key:e,fid:t}),ru()}let st=null;function su(){return!st&&"BroadcastChannel"in self&&(st=new BroadcastChannel("[Firebase] FID Change"),st.onmessage=e=>{Ao(e.data.key,e.data.fid)}),st}function ru(){To.size===0&&st&&(st.close(),st=null)}/**
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
 */const iu="firebase-installations-database",ou=1,ft="firebase-installations-store";let Jn=null;function Hs(){return Jn||(Jn=co(iu,ou,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ft)}}})),Jn}async function pn(e,t){const n=Dn(e),r=(await Hs()).transaction(ft,"readwrite"),i=r.objectStore(ft),o=await i.get(n);return await i.put(t,n),await r.done,(!o||o.fid!==t.fid)&&Co(e,t.fid),t}async function xo(e){const t=Dn(e),s=(await Hs()).transaction(ft,"readwrite");await s.objectStore(ft).delete(t),await s.done}async function On(e,t){const n=Dn(e),r=(await Hs()).transaction(ft,"readwrite"),i=r.objectStore(ft),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Co(e,a.fid),a}/**
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
 */async function js(e){let t;const n=await On(e.appConfig,s=>{const r=au(s),i=lu(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===bs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function au(e){const t=e||{fid:eu(),registrationStatus:0};return Do(t)}function lu(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ct.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=cu(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:fu(e)}:{installationEntry:t}}async function cu(e,t){try{const n=await Xf(e,t);return pn(e.appConfig,n)}catch(n){throw yo(n)&&n.customData.serverCode===409?await xo(e.appConfig):await pn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function fu(e){let t=await Hr(e.appConfig);for(;t.registrationStatus===1;)await So(100),t=await Hr(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await js(e);return s||n}return t}function Hr(e){return On(e,t=>{if(!t)throw ct.create("installation-not-found");return Do(t)})}function Do(e){return uu(e)?{fid:e.fid,registrationStatus:0}:e}function uu(e){return e.registrationStatus===1&&e.registrationTime+go<Date.now()}/**
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
 */async function du({appConfig:e,heartbeatServiceProvider:t},n){const s=hu(e,n),r=Gf(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:mo,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Eo(()=>fetch(s,a));if(l.ok){const u=await l.json();return vo(u)}else throw await wo("Generate Auth Token",l)}function hu(e,{fid:t}){return`${_o(e)}/${t}/authTokens:generate`}/**
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
 */async function Vs(e,t=!1){let n;const s=await On(e.appConfig,i=>{if(!Oo(i))throw ct.create("not-registered");const o=i.authToken;if(!t&&mu(o))return i;if(o.requestStatus===1)return n=pu(e,t),i;{if(!navigator.onLine)throw ct.create("app-offline");const a=yu(i);return n=gu(e,a),a}});return n?await n:s.authToken}async function pu(e,t){let n=await jr(e.appConfig);for(;n.authToken.requestStatus===1;)await So(100),n=await jr(e.appConfig);const s=n.authToken;return s.requestStatus===0?Vs(e,t):s}function jr(e){return On(e,t=>{if(!Oo(t))throw ct.create("not-registered");const n=t.authToken;return _u(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function gu(e,t){try{const n=await du(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await pn(e.appConfig,s),n}catch(n){if(yo(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xo(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await pn(e.appConfig,s)}throw n}}function Oo(e){return e!==void 0&&e.registrationStatus===2}function mu(e){return e.requestStatus===2&&!bu(e)}function bu(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Wf}function yu(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function _u(e){return e.requestStatus===1&&e.requestTime+go<Date.now()}/**
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
 */async function vu(e){const t=e,{installationEntry:n,registrationPromise:s}=await js(t);return s?s.catch(console.error):Vs(t).catch(console.error),n.fid}/**
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
 */async function wu(e,t=!1){const n=e;return await Iu(n),(await Vs(n,t)).token}async function Iu(e){const{registrationPromise:t}=await js(e);t&&await t}/**
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
 */function Eu(e){if(!e||!e.options)throw Xn("App Configuration");if(!e.name)throw Xn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Xn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Xn(e){return ct.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ro="installations",Su="installations-internal",Tu=e=>{const t=e.getProvider("app").getImmediate(),n=Eu(t),s=xn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Cu=e=>{const t=e.getProvider("app").getImmediate(),n=xn(t,Ro).getImmediate();return{getId:()=>vu(n),getToken:r=>wu(n,r)}};function Au(){lt(new ze(Ro,Tu,"PUBLIC")),lt(new ze(Su,Cu,"PRIVATE"))}Au();We(po,Ls);We(po,Ls,"esm2017");/**
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
 */const gn="analytics",xu="firebase_id",Du="origin",Ou=60*1e3,Ru="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ks="https://www.googletagmanager.com/gtag/js";/**
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
 */const ae=new oo("@firebase/analytics");/**
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
 */const Mu={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pe=new An("analytics","Analytics",Mu);/**
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
 */function Pu(e){if(!e.startsWith(ks)){const t=pe.create("invalid-gtag-resource",{gtagURL:e});return ae.warn(t.message),""}return e}function Mo(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Fu(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function $u(e,t){const n=Fu("firebase-js-sdk-policy",{createScriptURL:Pu}),s=document.createElement("script"),r=`${ks}?l=${e}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Nu(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Bu(e,t,n,s,r,i){const o=s[r];try{if(o)await t[o];else{const l=(await Mo(n)).find(u=>u.measurementId===r);l&&await t[l.appId]}}catch(a){ae.error(a)}e("config",r,i)}async function Lu(e,t,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Mo(n);for(const l of o){const u=a.find(p=>p.measurementId===l),d=u&&t[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",s,r||{})}catch(i){ae.error(i)}}function Hu(e,t,n,s){async function r(i,...o){try{if(i==="event"){const[a,l]=o;await Lu(e,t,n,a,l)}else if(i==="config"){const[a,l]=o;await Bu(e,t,n,s,a,l)}else if(i==="consent"){const[a,l]=o;e("consent",a,l)}else if(i==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ae.error(a)}}return r}function ju(e,t,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Hu(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}function Vu(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ks)&&n.src.includes(e))return n;return null}/**
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
 */const ku=30,Uu=1e3;class Wu{constructor(t={},n=Uu){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Po=new Wu;function Ku(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function zu(e){var t;const{appId:n,apiKey:s}=e,r={method:"GET",headers:Ku(s)},i=Ru.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw pe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function qu(e,t=Po,n){const{appId:s,apiKey:r,measurementId:i}=e.options;if(!s)throw pe.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw pe.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ju;return setTimeout(async()=>{a.abort()},Ou),Fo({appId:s,apiKey:r,measurementId:i},o,a,t)}async function Fo(e,{throttleEndTimeMillis:t,backoffCount:n},s,r=Po){var i;const{appId:o,measurementId:a}=e;try{await Gu(s,t)}catch(l){if(a)return ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await zu(e);return r.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Yu(u)){if(r.deleteThrottleMetadata(o),a)return ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Or(n,r.intervalMillis,ku):Or(n,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return r.setThrottleMetadata(o,p),ae.debug(`Calling attemptFetch again in ${d} millis`),Fo(e,p,s,r)}}function Gu(e,t){return new Promise((n,s)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(i),s(pe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Yu(e){if(!(e instanceof dt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ju{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Xu(e,t,n,s,r){if(r&&r.global){e("event",n,s);return}else{const i=await t,o=Object.assign(Object.assign({},s),{send_to:i});e("event",n,o)}}/**
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
 */async function Qu(){if(so())try{await ro()}catch(e){return ae.warn(pe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ae.warn(pe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Zu(e,t,n,s,r,i,o){var a;const l=qu(e);l.then(I=>{n[I.measurementId]=I.appId,e.options.measurementId&&I.measurementId!==e.options.measurementId&&ae.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>ae.error(I)),t.push(l);const u=Qu().then(I=>{if(I)return s.getId()}),[d,p]=await Promise.all([l,u]);Vu(i)||$u(i,d.measurementId),r("js",new Date);const w=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return w[Du]="firebase",w.update=!0,p!=null&&(w[xu]=p),r("config",d.measurementId,w),d.measurementId}/**
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
 */class ed{constructor(t){this.app=t}_delete(){return delete $t[this.app.options.appId],Promise.resolve()}}let $t={},Vr=[];const kr={};let Qn="dataLayer",td="gtag",Ur,$o,Wr=!1;function nd(){const e=[];if(Tc()&&e.push("This is a browser extension environment."),Cc()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=pe.create("invalid-analytics-context",{errorInfo:t});ae.warn(n.message)}}function sd(e,t,n){nd();const s=e.options.appId;if(!s)throw pe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pe.create("no-api-key");if($t[s]!=null)throw pe.create("already-exists",{id:s});if(!Wr){Nu(Qn);const{wrappedGtag:i,gtagCore:o}=ju($t,Vr,kr,Qn,td);$o=i,Ur=o,Wr=!0}return $t[s]=Zu(e,Vr,kr,t,Ur,Qn,n),new ed(e)}function rd(e=Rf()){e=io(e);const t=xn(e,gn);return t.isInitialized()?t.getImmediate():id(e)}function id(e,t={}){const n=xn(e,gn);if(n.isInitialized()){const r=n.getImmediate();if(dn(t,n.getOptions()))return r;throw pe.create("already-initialized")}return n.initialize({options:t})}function od(e,t,n,s){e=io(e),Xu($o,$t[e.app.options.appId],t,n,s).catch(r=>ae.error(r))}const Kr="@firebase/analytics",zr="0.10.9";function ad(){lt(new ze(gn,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return sd(s,r,n)},"PUBLIC")),lt(new ze("analytics-internal",e,"PRIVATE")),We(Kr,zr),We(Kr,zr,"esm2017");function e(t){try{const n=t.getProvider(gn).getImmediate();return{logEvent:(s,r,i)=>od(n,s,r,i)}}catch(n){throw pe.create("interop-component-reg-failed",{reason:n})}}}ad();const ld={apiKey:"AIzaSyC8ZWRs5HMm6s26cVVTfBpu4vu2cSIHHZw",authDomain:"vue-torture.firebaseapp.com",projectId:"vue-torture",storageBucket:"vue-torture.firebasestorage.app",messagingSenderId:"804292613626",appId:"1:804292613626:web:0f17e701bb7c40769b8043",measurementId:"G-YY0FKTQKLH"},cd=fo(ld);rd(cd);lc(pc).mount("#app");
