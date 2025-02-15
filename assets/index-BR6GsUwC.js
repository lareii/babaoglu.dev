(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yr(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const J={},ke=[],xt=()=>{},cs=()=>!1,Hn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vr=t=>t.startsWith("onUpdate:"),it=Object.assign,Kr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},us=Object.prototype.hasOwnProperty,H=(t,e)=>us.call(t,e),R=Array.isArray,Ae=t=>Bn(t)==="[object Map]",ji=t=>Bn(t)==="[object Set]",F=t=>typeof t=="function",nt=t=>typeof t=="string",Te=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",$i=t=>(Z(t)||F(t))&&F(t.then)&&F(t.catch),zi=Object.prototype.toString,Bn=t=>zi.call(t),ds=t=>Bn(t).slice(8,-1),Di=t=>Bn(t)==="[object Object]",Gr=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,De=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ms=/-(\w)/g,Ft=Wn(t=>t.replace(ms,(e,n)=>n?n.toUpperCase():"")),hs=/\B([A-Z])/g,Ne=Wn(t=>t.replace(hs,"-$1").toLowerCase()),Yn=Wn(t=>t.charAt(0).toUpperCase()+t.slice(1)),or=Wn(t=>t?`on${Yn(t)}`:""),Qt=(t,e)=>!Object.is(t,e),sr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ps=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ma;const Ui=()=>Ma||(Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=nt(r)?ys(r):Xr(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(nt(t)||Z(t))return t}const gs=/;(?![^(]*\))/g,vs=/:([^]+)/,bs=/\/\*[^]*?\*\//g;function ys(t){const e={};return t.replace(bs,"").split(gs).forEach(n=>{if(n){const r=n.split(vs);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function en(t){let e="";if(nt(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=en(t[n]);r&&(e+=r+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xs=Yr(_s);function Hi(t){return!!t||t===""}const At=t=>nt(t)?t:t==null?"":R(t)||Z(t)&&(t.toString===zi||!F(t.toString))?JSON.stringify(t,Bi,2):String(t),Bi=(t,e)=>e&&e.__v_isRef?Bi(t,e.value):Ae(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a],i)=>(n[lr(r,i)+" =>"]=a,n),{})}:ji(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>lr(n))}:Te(e)?lr(e):Z(e)&&!R(e)&&!Di(e)?String(e):e,lr=(t,e="")=>{var n;return Te(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class ws{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ks(t,e=kt){e&&e.active&&e.effects.push(t)}function As(){return kt}let ue;class qr{constructor(e,n,r,a){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ks(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ge();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Os(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ve()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Jt,n=ue;try{return Jt=!0,ue=this,this._runnings++,Ra(this),this.fn()}finally{La(this),this._runnings--,ue=n,Jt=e}}stop(){var e;this.active&&(Ra(this),La(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Os(t){return t.value}function Ra(t){t._trackId++,t._depsLength=0}function La(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Wi(t.deps[e],t);t.deps.length=t._depsLength}}function Wi(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Jt=!0,_r=0;const Yi=[];function ge(){Yi.push(Jt),Jt=!1}function ve(){const t=Yi.pop();Jt=t===void 0?!0:t}function Jr(){_r++}function Zr(){for(_r--;!_r&&xr.length;)xr.shift()()}function Vi(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Wi(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const xr=[];function Ki(t,e,n){Jr();for(const r of t.keys()){let a;r._dirtyLevel<e&&(a??(a=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(a??(a=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&xr.push(r.scheduler)))}Zr()}const Gi=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},wr=new WeakMap,de=Symbol(""),kr=Symbol("");function pt(t,e,n){if(Jt&&ue){let r=wr.get(t);r||wr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Gi(()=>r.delete(n))),Vi(ue,a)}}function Dt(t,e,n,r,a,i){const o=wr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&R(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Te(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":R(t)?Gr(n)&&s.push(o.get("length")):(s.push(o.get(de)),Ae(t)&&s.push(o.get(kr)));break;case"delete":R(t)||(s.push(o.get(de)),Ae(t)&&s.push(o.get(kr)));break;case"set":Ae(t)&&s.push(o.get(de));break}Jr();for(const l of s)l&&Ki(l,4);Zr()}const Ss=Yr("__proto__,__v_isRef,__isVue"),Xi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Te)),Fa=Es();function Es(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)pt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(W)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ge(),Jr();const r=W(this)[e].apply(this,n);return Zr(),ve(),r}}),t}function Cs(t){const e=W(this);return pt(e,"has",t),e.hasOwnProperty(t)}class qi{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Us:to:i?Qi:Zi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=R(e);if(!a){if(o&&H(Fa,n))return Reflect.get(Fa,n,r);if(n==="hasOwnProperty")return Cs}const s=Reflect.get(e,n,r);return(Te(n)?Xi.has(n):Ss(n))||(a||pt(e,"get",n),i)?s:gt(s)?o&&Gr(n)?s:s.value:Z(s)?a?eo(s):ea(s):s}}class Ji extends qi{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(!this._shallow){const l=Ce(i);if(!Rn(r)&&!Ce(r)&&(i=W(i),r=W(r)),!R(e)&&gt(i)&&!gt(r))return l?!1:(i.value=r,!0)}const o=R(e)&&Gr(n)?Number(n)<e.length:H(e,n),s=Reflect.set(e,n,r,a);return e===W(a)&&(o?Qt(r,i)&&Dt(e,"set",n,r):Dt(e,"add",n,r)),s}deleteProperty(e,n){const r=H(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&Dt(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Te(n)||!Xi.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",R(e)?"length":de),Reflect.ownKeys(e)}}class Ps extends qi{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Is=new Ji,Ts=new Ps,Ns=new Ji(!0),Qr=t=>t,Vn=t=>Reflect.getPrototypeOf(t);function un(t,e,n=!1,r=!1){t=t.__v_raw;const a=W(t),i=W(e);n||(Qt(e,i)&&pt(a,"get",e),pt(a,"get",i));const{has:o}=Vn(a),s=r?Qr:n?ra:Ve;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function dn(t,e=!1){const n=this.__v_raw,r=W(n),a=W(t);return e||(Qt(t,a)&&pt(r,"has",t),pt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function mn(t,e=!1){return t=t.__v_raw,!e&&pt(W(t),"iterate",de),Reflect.get(t,"size",t)}function ja(t){t=W(t);const e=W(this);return Vn(e).has.call(e,t)||(e.add(t),Dt(e,"add",t,t)),this}function $a(t,e){e=W(e);const n=W(this),{has:r,get:a}=Vn(n);let i=r.call(n,t);i||(t=W(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Qt(e,o)&&Dt(n,"set",t,e):Dt(n,"add",t,e),this}function za(t){const e=W(this),{has:n,get:r}=Vn(e);let a=n.call(e,t);a||(t=W(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Dt(e,"delete",t,void 0),i}function Da(){const t=W(this),e=t.size!==0,n=t.clear();return e&&Dt(t,"clear",void 0,void 0),n}function hn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=W(o),l=e?Qr:t?ra:Ve;return!t&&pt(s,"iterate",de),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function pn(t,e,n){return function(...r){const a=this.__v_raw,i=W(a),o=Ae(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),u=n?Qr:e?ra:Ve;return!e&&pt(i,"iterate",l?kr:de),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function Vt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ms(){const t={get(i){return un(this,i)},get size(){return mn(this)},has:dn,add:ja,set:$a,delete:za,clear:Da,forEach:hn(!1,!1)},e={get(i){return un(this,i,!1,!0)},get size(){return mn(this)},has:dn,add:ja,set:$a,delete:za,clear:Da,forEach:hn(!1,!0)},n={get(i){return un(this,i,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:hn(!0,!1)},r={get(i){return un(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=pn(i,!1,!1),n[i]=pn(i,!0,!1),e[i]=pn(i,!1,!0),r[i]=pn(i,!0,!0)}),[t,n,e,r]}const[Rs,Ls,Fs,js]=Ms();function ta(t,e){const n=e?t?js:Fs:t?Ls:Rs;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const $s={get:ta(!1,!1)},zs={get:ta(!1,!0)},Ds={get:ta(!0,!1)},Zi=new WeakMap,Qi=new WeakMap,to=new WeakMap,Us=new WeakMap;function Hs(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bs(t){return t.__v_skip||!Object.isExtensible(t)?0:Hs(ds(t))}function ea(t){return Ce(t)?t:na(t,!1,Is,$s,Zi)}function Ws(t){return na(t,!1,Ns,zs,Qi)}function eo(t){return na(t,!0,Ts,Ds,to)}function na(t,e,n,r,a){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Bs(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function Oe(t){return Ce(t)?Oe(t.__v_raw):!!(t&&t.__v_isReactive)}function Ce(t){return!!(t&&t.__v_isReadonly)}function Rn(t){return!!(t&&t.__v_isShallow)}function no(t){return Oe(t)||Ce(t)}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function ro(t){return Object.isExtensible(t)&&Mn(t,"__v_skip",!0),t}const Ve=t=>Z(t)?ea(t):t,ra=t=>Z(t)?eo(t):t;class ao{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new qr(()=>e(this._value),()=>Sn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=W(this);return(!e._cacheable||e.effect.dirty)&&Qt(e._value,e._value=e.effect.run())&&Sn(e,4),io(e),e.effect._dirtyLevel>=2&&Sn(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ys(t,e,n=!1){let r,a;const i=F(t);return i?(r=t,a=xt):(r=t.get,a=t.set),new ao(r,a,i||!a,n)}function io(t){var e;Jt&&ue&&(t=W(t),Vi(ue,(e=t.dep)!=null?e:t.dep=Gi(()=>t.dep=void 0,t instanceof ao?t:void 0)))}function Sn(t,e=4,n){t=W(t);const r=t.dep;r&&Ki(r,e)}function gt(t){return!!(t&&t.__v_isRef===!0)}function ye(t){return Vs(t,!1)}function Vs(t,e){return gt(t)?t:new Ks(t,e)}class Ks{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:W(e),this._value=n?e:Ve(e)}get value(){return io(this),this._value}set value(e){const n=this.__v_isShallow||Rn(e)||Ce(e);e=n?e:W(e),Qt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ve(e),Sn(this,4))}}function Gs(t){return gt(t)?t.value:t}const Xs={get:(t,e,n)=>Gs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return gt(a)&&!gt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function oo(t){return Oe(t)?t:new Proxy(t,Xs)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zt(t,e,n,r){try{return r?t(...r):t()}catch(a){Kn(a,e,n)}}function Pt(t,e,n,r){if(F(t)){const i=Zt(t,e,n,r);return i&&$i(i)&&i.catch(o=>{Kn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Pt(t[i],e,n,r));return a}function Kn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Zt(l,null,10,[t,o,s]);return}}qs(t,n,a,r)}function qs(t,e,n,r=!0){console.error(t)}let Ke=!1,Ar=!1;const st=[];let Rt=0;const Se=[];let Gt=null,le=0;const so=Promise.resolve();let aa=null;function Js(t){const e=aa||so;return t?e.then(this?t.bind(this):t):e}function Zs(t){let e=Rt+1,n=st.length;for(;e<n;){const r=e+n>>>1,a=st[r],i=Ge(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function ia(t){(!st.length||!st.includes(t,Ke&&t.allowRecurse?Rt+1:Rt))&&(t.id==null?st.push(t):st.splice(Zs(t.id),0,t),lo())}function lo(){!Ke&&!Ar&&(Ar=!0,aa=so.then(co))}function Qs(t){const e=st.indexOf(t);e>Rt&&st.splice(e,1)}function tl(t){R(t)?Se.push(...t):(!Gt||!Gt.includes(t,t.allowRecurse?le+1:le))&&Se.push(t),lo()}function Ua(t,e,n=Ke?Rt+1:0){for(;n<st.length;n++){const r=st[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;st.splice(n,1),n--,r()}}}function fo(t){if(Se.length){const e=[...new Set(Se)].sort((n,r)=>Ge(n)-Ge(r));if(Se.length=0,Gt){Gt.push(...e);return}for(Gt=e,le=0;le<Gt.length;le++)Gt[le]();Gt=null,le=0}}const Ge=t=>t.id==null?1/0:t.id,el=(t,e)=>{const n=Ge(t)-Ge(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function co(t){Ar=!1,Ke=!0,st.sort(el);try{for(Rt=0;Rt<st.length;Rt++){const e=st[Rt];e&&e.active!==!1&&Zt(e,null,14)}}finally{Rt=0,st.length=0,fo(),Ke=!1,aa=null,(st.length||Se.length)&&co()}}function nl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||J;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[u]||J;v&&(a=n.map(k=>nt(k)?k.trim():k)),m&&(a=n.map(ps))}let s,l=r[s=or(e)]||r[s=or(Ft(e))];!l&&i&&(l=r[s=or(Ne(e))]),l&&Pt(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Pt(c,t,6,a)}}function uo(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!F(t)){const l=c=>{const u=uo(c,e,!0);u&&(s=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(Z(t)&&r.set(t,null),null):(R(i)?i.forEach(l=>o[l]=null):it(o,i),Z(t)&&r.set(t,o),o)}function Gn(t,e){return!t||!Hn(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,Ne(e))||H(t,e))}let St=null,mo=null;function Ln(t){const e=St;return St=t,mo=t&&t.type.__scopeId||null,e}function rl(t,e=St,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&Za(-1);const i=Ln(e);let o;try{o=t(...a)}finally{Ln(i),r._d&&Za(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:v,setupState:k,ctx:j,inheritAttrs:N}=t;let U,w;const E=Ln(t);try{if(n.shapeFlag&4){const $=a||r,B=$;U=Mt(u.call(B,$,m,i,k,v,j)),w=l}else{const $=e;U=Mt($.length>1?$(i,{attrs:l,slots:s,emit:c}):$(i,null)),w=e.props?l:al(l)}}catch($){Be.length=0,Kn($,t,1),U=G(me)}let P=U;if(w&&N!==!1){const $=Object.keys(w),{shapeFlag:B}=P;$.length&&B&7&&(o&&$.some(Vr)&&(w=il(w,o)),P=Pe(P,w))}return n.dirs&&(P=Pe(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),U=P,Ln(E),U}const al=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hn(n))&&((e||(e={}))[n]=t[n]);return e},il=(t,e)=>{const n={};for(const r in t)(!Vr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ol(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ha(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(o[v]!==r[v]&&!Gn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ha(r,o,c):!0:!!o;return!1}function Ha(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Gn(n,i))return!0}return!1}function sl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ll="components";function oa(t,e){return cl(ll,t,!0,e)||t}const fl=Symbol.for("v-ndc");function cl(t,e,n=!0,r=!1){const a=St||lt;if(a){const i=a.type;{const s=sf(i,!1);if(s&&(s===e||s===Ft(e)||s===Yn(Ft(e))))return i}const o=Ba(a[t]||i[t],e)||Ba(a.appContext[t],e);return!o&&r?i:o}}function Ba(t,e){return t&&(t[e]||t[Ft(e)]||t[Yn(Ft(e))])}const ul=t=>t.__isSuspense;function dl(t,e){e&&e.pendingBranch?R(t)?e.effects.push(...t):e.effects.push(t):tl(t)}const ml=Symbol.for("v-scx"),hl=()=>Pn(ml),gn={};function En(t,e,n){return ho(t,e,n)}function ho(t,e,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=J){if(e&&i){const L=e;e=(...et)=>{L(...et),B()}}const l=lt,c=L=>r===!0?L:_e(L,r===!1?1:void 0);let u,m=!1,v=!1;if(gt(t)?(u=()=>t.value,m=Rn(t)):Oe(t)?(u=()=>c(t),m=!0):R(t)?(v=!0,m=t.some(L=>Oe(L)||Rn(L)),u=()=>t.map(L=>{if(gt(L))return L.value;if(Oe(L))return c(L);if(F(L))return Zt(L,l,2)})):F(t)?e?u=()=>Zt(t,l,2):u=()=>(k&&k(),Pt(t,l,3,[j])):u=xt,e&&r){const L=u;u=()=>_e(L())}let k,j=L=>{k=P.onStop=()=>{Zt(L,l,4),k=P.onStop=void 0}},N;if(Qn)if(j=xt,e?n&&Pt(e,l,3,[u(),v?[]:void 0,j]):u(),a==="sync"){const L=hl();N=L.__watcherHandles||(L.__watcherHandles=[])}else return xt;let U=v?new Array(t.length).fill(gn):gn;const w=()=>{if(!(!P.active||!P.dirty))if(e){const L=P.run();(r||m||(v?L.some((et,dt)=>Qt(et,U[dt])):Qt(L,U)))&&(k&&k(),Pt(e,l,3,[L,U===gn?void 0:v&&U[0]===gn?[]:U,j]),U=L)}else P.run()};w.allowRecurse=!!e;let E;a==="sync"?E=w:a==="post"?E=()=>ht(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),E=()=>ia(w));const P=new qr(u,xt,E),$=As(),B=()=>{P.stop(),$&&Kr($.effects,P)};return e?n?w():U=P.run():a==="post"?ht(P.run.bind(P),l&&l.suspense):P.run(),N&&N.push(B),B}function pl(t,e,n){const r=this.proxy,a=nt(t)?t.includes(".")?po(r,t):()=>r[t]:t.bind(r,r);let i;F(e)?i=e:(i=e.handler,n=e);const o=nn(this),s=ho(a,i.bind(r),n);return o(),s}function po(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function _e(t,e,n=0,r){if(!Z(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),gt(t))_e(t.value,e,n,r);else if(R(t))for(let a=0;a<t.length;a++)_e(t[a],e,n,r);else if(ji(t)||Ae(t))t.forEach(a=>{_e(a,e,n,r)});else if(Di(t))for(const a in t)_e(t[a],e,n,r);return t}function ie(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(ge(),Pt(l,n,8,[t.el,s,t,e]),ve())}}/*! #__NO_SIDE_EFFECTS__ */function gl(t,e){return F(t)?it({name:t.name},e,{setup:t}):t}const Cn=t=>!!t.type.__asyncLoader,go=t=>t.type.__isKeepAlive;function vl(t,e){vo(t,"a",e)}function bl(t,e){vo(t,"da",e)}function vo(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Xn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)go(a.parent.vnode)&&yl(r,e,n,a),a=a.parent}}function yl(t,e,n,r){const a=Xn(e,t,r,!0);sa(()=>{Kr(r[e],a)},n)}function Xn(t,e,n=lt,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ge();const s=nn(n),l=Pt(e,n,t,o);return s(),ve(),l});return r?a.unshift(i):a.push(i),i}}const Wt=t=>(e,n=lt)=>(!Qn||t==="sp")&&Xn(t,(...r)=>e(...r),n),_l=Wt("bm"),qn=Wt("m"),xl=Wt("bu"),wl=Wt("u"),kl=Wt("bum"),sa=Wt("um"),Al=Wt("sp"),Ol=Wt("rtg"),Sl=Wt("rtc");function El(t,e=lt){Xn("ec",t,e)}function Cl(t,e,n,r){let a;const i=n;if(R(t)||nt(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i)}else if(Z(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i)}}else a=[];return a}const Or=t=>t?Io(t)?ua(t)||t.proxy:Or(t.parent):null,Ue=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$emit:t=>t.emit,$options:t=>la(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ia(t.update)}),$nextTick:t=>t.n||(t.n=Js.bind(t.proxy)),$watch:t=>pl.bind(t)}),cr=(t,e)=>t!==J&&!t.__isScriptSetup&&H(t,e),Pl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const k=o[e];if(k!==void 0)switch(k){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(cr(r,e))return o[e]=1,r[e];if(a!==J&&H(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&H(c,e))return o[e]=3,i[e];if(n!==J&&H(n,e))return o[e]=4,n[e];Sr&&(o[e]=0)}}const u=Ue[e];let m,v;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==J&&H(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,H(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return cr(a,e)?(a[e]=n,!0):r!==J&&H(r,e)?(r[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==J&&H(t,o)||cr(e,o)||(s=i[0])&&H(s,o)||H(r,o)||H(Ue,o)||H(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wa(t){return R(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sr=!0;function Il(t){const e=la(t),n=t.proxy,r=t.ctx;Sr=!1,e.beforeCreate&&Ya(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:k,updated:j,activated:N,deactivated:U,beforeDestroy:w,beforeUnmount:E,destroyed:P,unmounted:$,render:B,renderTracked:L,renderTriggered:et,errorCaptured:dt,serverPrefetch:_t,expose:jt,inheritAttrs:Re,components:sn,directives:ln,filters:ar}=e;if(c&&Tl(c,r,null),o)for(const Q in o){const V=o[Q];F(V)&&(r[Q]=V.bind(n))}if(a){const Q=a.call(n,n);Z(Q)&&(t.data=ea(Q))}if(Sr=!0,i)for(const Q in i){const V=i[Q],re=F(V)?V.bind(n,n):F(V.get)?V.get.bind(n,n):xt,fn=!F(V)&&F(V.set)?V.set.bind(n):xt,ae=se({get:re,set:fn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>ae.value,set:It=>ae.value=It})}if(s)for(const Q in s)bo(s[Q],r,n,Q);if(l){const Q=F(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(V=>{jl(V,Q[V])})}u&&Ya(u,t,"c");function ft(Q,V){R(V)?V.forEach(re=>Q(re.bind(n))):V&&Q(V.bind(n))}if(ft(_l,m),ft(qn,v),ft(xl,k),ft(wl,j),ft(vl,N),ft(bl,U),ft(El,dt),ft(Sl,L),ft(Ol,et),ft(kl,E),ft(sa,$),ft(Al,_t),R(jt))if(jt.length){const Q=t.exposed||(t.exposed={});jt.forEach(V=>{Object.defineProperty(Q,V,{get:()=>n[V],set:re=>n[V]=re})})}else t.exposed||(t.exposed={});B&&t.render===xt&&(t.render=B),Re!=null&&(t.inheritAttrs=Re),sn&&(t.components=sn),ln&&(t.directives=ln)}function Tl(t,e,n=xt){R(t)&&(t=Er(t));for(const r in t){const a=t[r];let i;Z(a)?"default"in a?i=Pn(a.from||r,a.default,!0):i=Pn(a.from||r):i=Pn(a),gt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ya(t,e,n){Pt(R(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bo(t,e,n,r){const a=r.includes(".")?po(n,r):()=>n[r];if(nt(t)){const i=e[t];F(i)&&En(a,i)}else if(F(t))En(a,t.bind(n));else if(Z(t))if(R(t))t.forEach(i=>bo(i,e,n,r));else{const i=F(t.handler)?t.handler.bind(n):e[t.handler];F(i)&&En(a,i,t)}}function la(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>Fn(l,c,o,!0)),Fn(l,e,o)),Z(e)&&i.set(e,l),l}function Fn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Fn(t,i,n,!0),a&&a.forEach(o=>Fn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Nl[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Nl={data:Va,props:Ka,emits:Ka,methods:$e,computed:$e,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:$e,directives:$e,watch:Rl,provide:Va,inject:Ml};function Va(t,e){return e?t?function(){return it(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Ml(t,e){return $e(Er(t),Er(e))}function Er(t){if(R(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ct(t,e){return t?[...new Set([].concat(t,e))]:e}function $e(t,e){return t?it(Object.create(null),t,e):e}function Ka(t,e){return t?R(t)&&R(e)?[...new Set([...t,...e])]:it(Object.create(null),Wa(t),Wa(e??{})):e}function Rl(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=ct(t[r],e[r]);return n}function yo(){return{app:null,config:{isNativeTag:cs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ll=0;function Fl(t,e){return function(r,a=null){F(r)||(r=it({},r)),a!=null&&!Z(a)&&(a=null);const i=yo(),o=new WeakSet;let s=!1;const l=i.app={_uid:Ll++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:cf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&F(c.install)?(o.add(c),c.install(l,...u)):F(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const v=G(r,a);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),u&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ua(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=He;He=l;try{return c()}finally{He=u}}};return l}}let He=null;function jl(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function Pn(t,e,n=!1){const r=lt||St;if(r||He){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:He._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&F(e)?e.call(r&&r.proxy):e}}function $l(t,e,n,r=!1){const a={},i={};Mn(i,Zn,1),t.propsDefaults=Object.create(null),_o(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Ws(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function zl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=W(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(Gn(t.emitsOptions,v))continue;const k=e[v];if(l)if(H(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const j=Ft(v);a[j]=Cr(l,s,j,k,t,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{_o(t,e,a,i)&&(c=!0);let u;for(const m in s)(!e||!H(e,m)&&((u=Ne(m))===m||!H(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Cr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!H(e,m))&&(delete i[m],c=!0)}c&&Dt(t,"set","$attrs")}function _o(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(De(l))continue;const c=e[l];let u;a&&H(a,u=Ft(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:Gn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=W(n),c=s||J;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Cr(a,l,m,c[m],t,!H(c,m))}}return o}function Cr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&F(l)){const{propsDefaults:c}=a;if(n in c)r=c[n];else{const u=nn(a);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ne(n))&&(r=!0))}return r}function xo(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!F(t)){const u=m=>{l=!0;const[v,k]=xo(m,e,!0);it(o,v),k&&s.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Z(t)&&r.set(t,ke),ke;if(R(i))for(let u=0;u<i.length;u++){const m=Ft(i[u]);Ga(m)&&(o[m]=J)}else if(i)for(const u in i){const m=Ft(u);if(Ga(m)){const v=i[u],k=o[m]=R(v)||F(v)?{type:v}:it({},v);if(k){const j=Ja(Boolean,k.type),N=Ja(String,k.type);k[0]=j>-1,k[1]=N<0||j<N,(j>-1||H(k,"default"))&&s.push(m)}}}const c=[o,s];return Z(t)&&r.set(t,c),c}function Ga(t){return t[0]!=="$"&&!De(t)}function Xa(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function qa(t,e){return Xa(t)===Xa(e)}function Ja(t,e){return R(e)?e.findIndex(n=>qa(n,t)):F(e)&&qa(e,t)?0:-1}const wo=t=>t[0]==="_"||t==="$stable",fa=t=>R(t)?t.map(Mt):[Mt(t)],Dl=(t,e,n)=>{if(e._n)return e;const r=rl((...a)=>fa(e(...a)),n);return r._c=!1,r},ko=(t,e,n)=>{const r=t._ctx;for(const a in t){if(wo(a))continue;const i=t[a];if(F(i))e[a]=Dl(a,i,r);else if(i!=null){const o=fa(i);e[a]=()=>o}}},Ao=(t,e)=>{const n=fa(e);t.slots.default=()=>n},Ul=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=W(e),Mn(e,"_",n)):ko(e,t.slots={})}else t.slots={},e&&Ao(t,e);Mn(t.slots,Zn,1)},Hl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=J;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(it(a,e),!n&&s===1&&delete a._):(i=!e.$stable,ko(e,a)),o=e}else e&&(Ao(t,e),o={default:1});if(i)for(const s in a)!wo(s)&&o[s]==null&&delete a[s]};function Pr(t,e,n,r,a=!1){if(R(t)){t.forEach((v,k)=>Pr(v,e&&(R(e)?e[k]:e),n,r,a));return}if(Cn(r)&&!a)return;const i=r.shapeFlag&4?ua(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,u=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(nt(c)?(u[c]=null,H(m,c)&&(m[c]=null)):gt(c)&&(c.value=null)),F(l))Zt(l,s,12,[o,u]);else{const v=nt(l),k=gt(l);if(v||k){const j=()=>{if(t.f){const N=v?H(m,l)?m[l]:u[l]:l.value;a?R(N)&&Kr(N,i):R(N)?N.includes(i)||N.push(i):v?(u[l]=[i],H(m,l)&&(m[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,H(m,l)&&(m[l]=o)):k&&(l.value=o,t.k&&(u[t.k]=o))};o?(j.id=-1,ht(j,n)):j()}}}const ht=dl;function Bl(t){return Wl(t)}function Wl(t,e){const n=Ui();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:k=xt,insertStaticContent:j}=t,N=(f,d,h,p=null,g=null,_=null,A=void 0,y=null,x=!!d.dynamicChildren)=>{if(f===d)return;f&&!je(f,d)&&(p=cn(f),It(f,g,_,!0),f=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:b,ref:S,shapeFlag:T}=d;switch(b){case Jn:U(f,d,h,p);break;case me:w(f,d,h,p);break;case dr:f==null&&E(d,h,p,A);break;case bt:sn(f,d,h,p,g,_,A,y,x);break;default:T&1?B(f,d,h,p,g,_,A,y,x):T&6?ln(f,d,h,p,g,_,A,y,x):(T&64||T&128)&&b.process(f,d,h,p,g,_,A,y,x,Le)}S!=null&&g&&Pr(S,f&&f.ref,_,d||f,!d)},U=(f,d,h,p)=>{if(f==null)r(d.el=s(d.children),h,p);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},w=(f,d,h,p)=>{f==null?r(d.el=l(d.children||""),h,p):d.el=f.el},E=(f,d,h,p)=>{[f.el,f.anchor]=j(f.children,d,h,p,f.el,f.anchor)},P=({el:f,anchor:d},h,p)=>{let g;for(;f&&f!==d;)g=v(f),r(f,h,p),f=g;r(d,h,p)},$=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=v(f),a(f),f=h;a(d)},B=(f,d,h,p,g,_,A,y,x)=>{d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),f==null?L(d,h,p,g,_,A,y,x):_t(f,d,g,_,A,y,x)},L=(f,d,h,p,g,_,A,y)=>{let x,b;const{props:S,shapeFlag:T,transition:I,dirs:M}=f;if(x=f.el=o(f.type,_,S&&S.is,S),T&8?u(x,f.children):T&16&&dt(f.children,x,null,p,g,ur(f,_),A,y),M&&ie(f,null,p,"created"),et(x,f,f.scopeId,A,p),S){for(const Y in S)Y!=="value"&&!De(Y)&&i(x,Y,null,S[Y],_,f.children,p,g,$t);"value"in S&&i(x,"value",null,S.value,_),(b=S.onVnodeBeforeMount)&&Nt(b,p,f)}M&&ie(f,null,p,"beforeMount");const z=Yl(g,I);z&&I.beforeEnter(x),r(x,d,h),((b=S&&S.onVnodeMounted)||z||M)&&ht(()=>{b&&Nt(b,p,f),z&&I.enter(x),M&&ie(f,null,p,"mounted")},g)},et=(f,d,h,p,g)=>{if(h&&k(f,h),p)for(let _=0;_<p.length;_++)k(f,p[_]);if(g){let _=g.subTree;if(d===_){const A=g.vnode;et(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},dt=(f,d,h,p,g,_,A,y,x=0)=>{for(let b=x;b<f.length;b++){const S=f[b]=y?Xt(f[b]):Mt(f[b]);N(null,S,d,h,p,g,_,A,y)}},_t=(f,d,h,p,g,_,A)=>{const y=d.el=f.el;let{patchFlag:x,dynamicChildren:b,dirs:S}=d;x|=f.patchFlag&16;const T=f.props||J,I=d.props||J;let M;if(h&&oe(h,!1),(M=I.onVnodeBeforeUpdate)&&Nt(M,h,d,f),S&&ie(d,f,h,"beforeUpdate"),h&&oe(h,!0),b?jt(f.dynamicChildren,b,y,h,p,ur(d,g),_):A||V(f,d,y,null,h,p,ur(d,g),_,!1),x>0){if(x&16)Re(y,d,T,I,h,p,g);else if(x&2&&T.class!==I.class&&i(y,"class",null,I.class,g),x&4&&i(y,"style",T.style,I.style,g),x&8){const z=d.dynamicProps;for(let Y=0;Y<z.length;Y++){const q=z[Y],at=T[q],wt=I[q];(wt!==at||q==="value")&&i(y,q,at,wt,g,f.children,h,p,$t)}}x&1&&f.children!==d.children&&u(y,d.children)}else!A&&b==null&&Re(y,d,T,I,h,p,g);((M=I.onVnodeUpdated)||S)&&ht(()=>{M&&Nt(M,h,d,f),S&&ie(d,f,h,"updated")},p)},jt=(f,d,h,p,g,_,A)=>{for(let y=0;y<d.length;y++){const x=f[y],b=d[y],S=x.el&&(x.type===bt||!je(x,b)||x.shapeFlag&70)?m(x.el):h;N(x,b,S,null,p,g,_,A,!0)}},Re=(f,d,h,p,g,_,A)=>{if(h!==p){if(h!==J)for(const y in h)!De(y)&&!(y in p)&&i(f,y,h[y],null,A,d.children,g,_,$t);for(const y in p){if(De(y))continue;const x=p[y],b=h[y];x!==b&&y!=="value"&&i(f,y,b,x,A,d.children,g,_,$t)}"value"in p&&i(f,"value",h.value,p.value,A)}},sn=(f,d,h,p,g,_,A,y,x)=>{const b=d.el=f?f.el:s(""),S=d.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:M}=d;M&&(y=y?y.concat(M):M),f==null?(r(b,h,p),r(S,h,p),dt(d.children||[],h,S,g,_,A,y,x)):T>0&&T&64&&I&&f.dynamicChildren?(jt(f.dynamicChildren,I,h,g,_,A,y),(d.key!=null||g&&d===g.subTree)&&Oo(f,d,!0)):V(f,d,h,S,g,_,A,y,x)},ln=(f,d,h,p,g,_,A,y,x)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,h,p,A,x):ar(d,h,p,g,_,A,x):Oa(f,d,x)},ar=(f,d,h,p,g,_,A)=>{const y=f.component=ef(f,p,g);if(go(f)&&(y.ctx.renderer=Le),nf(y),y.asyncDep){if(g&&g.registerDep(y,ft),!f.el){const x=y.subTree=G(me);w(null,x,d,h)}}else ft(y,f,d,h,g,_,A)},Oa=(f,d,h)=>{const p=d.component=f.component;if(ol(f,d,h))if(p.asyncDep&&!p.asyncResolved){Q(p,d,h);return}else p.next=d,Qs(p.update),p.effect.dirty=!0,p.update();else d.el=f.el,p.vnode=d},ft=(f,d,h,p,g,_,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:T,u:I,parent:M,vnode:z}=f;{const be=So(f);if(be){S&&(S.el=z.el,Q(f,S,A)),be.asyncDep.then(()=>{f.isUnmounted||y()});return}}let Y=S,q;oe(f,!1),S?(S.el=z.el,Q(f,S,A)):S=z,T&&sr(T),(q=S.props&&S.props.onVnodeBeforeUpdate)&&Nt(q,M,S,z),oe(f,!0);const at=fr(f),wt=f.subTree;f.subTree=at,N(wt,at,m(wt.el),cn(wt),f,g,_),S.el=at.el,Y===null&&sl(f,at.el),I&&ht(I,g),(q=S.props&&S.props.onVnodeUpdated)&&ht(()=>Nt(q,M,S,z),g)}else{let S;const{el:T,props:I}=d,{bm:M,m:z,parent:Y}=f,q=Cn(d);if(oe(f,!1),M&&sr(M),!q&&(S=I&&I.onVnodeBeforeMount)&&Nt(S,Y,d),oe(f,!0),T&&Pa){const at=()=>{f.subTree=fr(f),Pa(T,f.subTree,f,g,null)};q?d.type.__asyncLoader().then(()=>!f.isUnmounted&&at()):at()}else{const at=f.subTree=fr(f);N(null,at,h,p,f,g,_),d.el=at.el}if(z&&ht(z,g),!q&&(S=I&&I.onVnodeMounted)){const at=d;ht(()=>Nt(S,Y,at),g)}(d.shapeFlag&256||Y&&Cn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&ht(f.a,g),f.isMounted=!0,d=h=p=null}},x=f.effect=new qr(y,xt,()=>ia(b),f.scope),b=f.update=()=>{x.dirty&&x.run()};b.id=f.uid,oe(f,!0),b()},Q=(f,d,h)=>{d.component=f;const p=f.vnode.props;f.vnode=d,f.next=null,zl(f,d.props,p,h),Hl(f,d.children,h),ge(),Ua(f),ve()},V=(f,d,h,p,g,_,A,y,x=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,T=d.children,{patchFlag:I,shapeFlag:M}=d;if(I>0){if(I&128){fn(b,T,h,p,g,_,A,y,x);return}else if(I&256){re(b,T,h,p,g,_,A,y,x);return}}M&8?(S&16&&$t(b,g,_),T!==b&&u(h,T)):S&16?M&16?fn(b,T,h,p,g,_,A,y,x):$t(b,g,_,!0):(S&8&&u(h,""),M&16&&dt(T,h,p,g,_,A,y,x))},re=(f,d,h,p,g,_,A,y,x)=>{f=f||ke,d=d||ke;const b=f.length,S=d.length,T=Math.min(b,S);let I;for(I=0;I<T;I++){const M=d[I]=x?Xt(d[I]):Mt(d[I]);N(f[I],M,h,null,g,_,A,y,x)}b>S?$t(f,g,_,!0,!1,T):dt(d,h,p,g,_,A,y,x,T)},fn=(f,d,h,p,g,_,A,y,x)=>{let b=0;const S=d.length;let T=f.length-1,I=S-1;for(;b<=T&&b<=I;){const M=f[b],z=d[b]=x?Xt(d[b]):Mt(d[b]);if(je(M,z))N(M,z,h,null,g,_,A,y,x);else break;b++}for(;b<=T&&b<=I;){const M=f[T],z=d[I]=x?Xt(d[I]):Mt(d[I]);if(je(M,z))N(M,z,h,null,g,_,A,y,x);else break;T--,I--}if(b>T){if(b<=I){const M=I+1,z=M<S?d[M].el:p;for(;b<=I;)N(null,d[b]=x?Xt(d[b]):Mt(d[b]),h,z,g,_,A,y,x),b++}}else if(b>I)for(;b<=T;)It(f[b],g,_,!0),b++;else{const M=b,z=b,Y=new Map;for(b=z;b<=I;b++){const vt=d[b]=x?Xt(d[b]):Mt(d[b]);vt.key!=null&&Y.set(vt.key,b)}let q,at=0;const wt=I-z+1;let be=!1,Ia=0;const Fe=new Array(wt);for(b=0;b<wt;b++)Fe[b]=0;for(b=M;b<=T;b++){const vt=f[b];if(at>=wt){It(vt,g,_,!0);continue}let Tt;if(vt.key!=null)Tt=Y.get(vt.key);else for(q=z;q<=I;q++)if(Fe[q-z]===0&&je(vt,d[q])){Tt=q;break}Tt===void 0?It(vt,g,_,!0):(Fe[Tt-z]=b+1,Tt>=Ia?Ia=Tt:be=!0,N(vt,d[Tt],h,null,g,_,A,y,x),at++)}const Ta=be?Vl(Fe):ke;for(q=Ta.length-1,b=wt-1;b>=0;b--){const vt=z+b,Tt=d[vt],Na=vt+1<S?d[vt+1].el:p;Fe[b]===0?N(null,Tt,h,Na,g,_,A,y,x):be&&(q<0||b!==Ta[q]?ae(Tt,h,Na,2):q--)}}},ae=(f,d,h,p,g=null)=>{const{el:_,type:A,transition:y,children:x,shapeFlag:b}=f;if(b&6){ae(f.component.subTree,d,h,p);return}if(b&128){f.suspense.move(d,h,p);return}if(b&64){A.move(f,d,h,Le);return}if(A===bt){r(_,d,h);for(let T=0;T<x.length;T++)ae(x[T],d,h,p);r(f.anchor,d,h);return}if(A===dr){P(f,d,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(_),r(_,d,h),ht(()=>y.enter(_),g);else{const{leave:T,delayLeave:I,afterLeave:M}=y,z=()=>r(_,d,h),Y=()=>{T(_,()=>{z(),M&&M()})};I?I(_,z,Y):Y()}else r(_,d,h)},It=(f,d,h,p=!1,g=!1)=>{const{type:_,props:A,ref:y,children:x,dynamicChildren:b,shapeFlag:S,patchFlag:T,dirs:I}=f;if(y!=null&&Pr(y,null,h,f,!0),S&256){d.ctx.deactivate(f);return}const M=S&1&&I,z=!Cn(f);let Y;if(z&&(Y=A&&A.onVnodeBeforeUnmount)&&Nt(Y,d,f),S&6)fs(f.component,h,p);else{if(S&128){f.suspense.unmount(h,p);return}M&&ie(f,null,d,"beforeUnmount"),S&64?f.type.remove(f,d,h,g,Le,p):b&&(_!==bt||T>0&&T&64)?$t(b,d,h,!1,!0):(_===bt&&T&384||!g&&S&16)&&$t(x,d,h),p&&Sa(f)}(z&&(Y=A&&A.onVnodeUnmounted)||M)&&ht(()=>{Y&&Nt(Y,d,f),M&&ie(f,null,d,"unmounted")},h)},Sa=f=>{const{type:d,el:h,anchor:p,transition:g}=f;if(d===bt){ls(h,p);return}if(d===dr){$(f);return}const _=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,x=()=>A(h,_);y?y(f.el,_,x):x()}else _()},ls=(f,d)=>{let h;for(;f!==d;)h=v(f),a(f),f=h;a(d)},fs=(f,d,h)=>{const{bum:p,scope:g,update:_,subTree:A,um:y}=f;p&&sr(p),g.stop(),_&&(_.active=!1,It(A,f,d,h)),y&&ht(y,d),ht(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},$t=(f,d,h,p=!1,g=!1,_=0)=>{for(let A=_;A<f.length;A++)It(f[A],d,h,p,g)},cn=f=>f.shapeFlag&6?cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el);let ir=!1;const Ea=(f,d,h)=>{f==null?d._vnode&&It(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,h),ir||(ir=!0,Ua(),fo(),ir=!1),d._vnode=f},Le={p:N,um:It,m:ae,r:Sa,mt:ar,mc:dt,pc:V,pbc:jt,n:cn,o:t};let Ca,Pa;return{render:Ea,hydrate:Ca,createApp:Fl(Ea,Ca)}}function ur({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function oe({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Yl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Oo(t,e,n=!1){const r=t.children,a=e.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xt(a[i]),s.el=o.el),n||Oo(o,s)),s.type===Jn&&(s.el=o.el)}}function Vl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function So(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:So(e)}const Kl=t=>t.__isTeleport,bt=Symbol.for("v-fgt"),Jn=Symbol.for("v-txt"),me=Symbol.for("v-cmt"),dr=Symbol.for("v-stc"),Be=[];let Et=null;function ot(t=!1){Be.push(Et=t?null:[])}function Gl(){Be.pop(),Et=Be[Be.length-1]||null}let Xe=1;function Za(t){Xe+=t}function Eo(t){return t.dynamicChildren=Xe>0?Et||ke:null,Gl(),Xe>0&&Et&&Et.push(t),t}function ut(t,e,n,r,a,i){return Eo(D(t,e,n,r,a,i,!0))}function Xl(t,e,n,r,a){return Eo(G(t,e,n,r,a,!0))}function Ir(t){return t?t.__v_isVNode===!0:!1}function je(t,e){return t.type===e.type&&t.key===e.key}const Zn="__vInternal",Co=({key:t})=>t??null,In=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||gt(t)||F(t)?{i:St,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,a=null,i=t===bt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Co(e),ref:e&&In(e),scopeId:mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:St};return s?(ca(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Xe>0&&!o&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const G=ql;function ql(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===fl)&&(t=me),Ir(t)){const s=Pe(t,e,!0);return n&&ca(s,n),Xe>0&&!i&&Et&&(s.shapeFlag&6?Et[Et.indexOf(t)]=s:Et.push(s)),s.patchFlag|=-2,s}if(lf(t)&&(t=t.__vccOpts),e){e=Jl(e);let{class:s,style:l}=e;s&&!nt(s)&&(e.class=en(s)),Z(l)&&(no(l)&&!R(l)&&(l=it({},l)),e.style=Xr(l))}const o=nt(t)?1:ul(t)?128:Kl(t)?64:Z(t)?4:F(t)?2:0;return D(t,e,n,r,a,o,i,!0)}function Jl(t){return t?no(t)||Zn in t?it({},t):t:null}function Pe(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?Zl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Co(s),ref:e&&e.ref?n&&a?R(a)?a.concat(In(e)):[a,In(e)]:In(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pe(t.ssContent),ssFallback:t.ssFallback&&Pe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ot(t=" ",e=0){return G(Jn,null,t,e)}function Po(t="",e=!1){return e?(ot(),Xl(me,null,t)):G(me,null,t)}function Mt(t){return t==null||typeof t=="boolean"?G(me):R(t)?G(bt,null,t.slice()):typeof t=="object"?Xt(t):G(Jn,null,String(t))}function Xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pe(t)}function ca(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(R(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),ca(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Zn in e)?e._ctx=St:a===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[Ot(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=en([e.class,r.class]));else if(a==="style")e.style=Xr([e.style,r.style]);else if(Hn(a)){const i=e[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Nt(t,e,n,r=null){Pt(t,e,7,[n,r])}const Ql=yo();let tf=0;function ef(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Ql,i={uid:tf++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xo(r,a),emitsOptions:uo(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nl.bind(null,i),t.ce&&t.ce(i),i}let lt=null,jn,Tr;{const t=Ui(),e=(n,r)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};jn=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),Tr=e("__VUE_SSR_SETTERS__",n=>Qn=n)}const nn=t=>{const e=lt;return jn(t),t.scope.on(),()=>{t.scope.off(),jn(e)}},Qa=()=>{lt&&lt.scope.off(),jn(null)};function Io(t){return t.vnode.shapeFlag&4}let Qn=!1;function nf(t,e=!1){e&&Tr(e);const{props:n,children:r}=t.vnode,a=Io(t);$l(t,n,a,e),Ul(t,r);const i=a?rf(t,e):void 0;return e&&Tr(!1),i}function rf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ro(new Proxy(t.ctx,Pl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?of(t):null,i=nn(t);ge();const o=Zt(r,t,0,[t.props,a]);if(ve(),i(),$i(o)){if(o.then(Qa,Qa),e)return o.then(s=>{ti(t,s,e)}).catch(s=>{Kn(s,t,0)});t.asyncDep=o}else ti(t,o,e)}else To(t,e)}function ti(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=oo(e)),To(t,n)}let ei;function To(t,e,n){const r=t.type;if(!t.render){if(!e&&ei&&!r.render){const a=r.template||la(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=it(it({isCustomElement:i,delimiters:s},o),l);r.render=ei(a,c)}}t.render=r.render||xt}{const a=nn(t);ge();try{Il(t)}finally{ve(),a()}}}function af(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}}))}function of(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return af(t)},slots:t.slots,emit:t.emit,expose:e}}function ua(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(oo(ro(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ue)return Ue[n](t)},has(e,n){return n in e||n in Ue}}))}function sf(t,e=!0){return F(t)?t.displayName||t.name:t.name||e&&t.__name}function lf(t){return F(t)&&"__vccOpts"in t}const se=(t,e)=>Ys(t,e,Qn);function ff(t,e,n){const r=arguments.length;return r===2?Z(e)&&!R(e)?Ir(e)?G(t,null,[e]):G(t,e):G(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),G(t,e,n))}const cf="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const uf="http://www.w3.org/2000/svg",df="http://www.w3.org/1998/Math/MathML",qt=typeof document<"u"?document:null,ni=qt&&qt.createElement("template"),mf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e==="svg"?qt.createElementNS(uf,t):e==="mathml"?qt.createElementNS(df,t):qt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>qt.createTextNode(t),createComment:t=>qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ni.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=ni.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hf=Symbol("_vtc");function pf(t,e,n){const r=t[hf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ri=Symbol("_vod"),gf=Symbol(""),vf=/(^|;)\s*display\s*:/;function bf(t,e,n){const r=t.style,a=nt(n),i=r.display;let o=!1;if(n&&!a){if(e&&!nt(e))for(const s in e)n[s]==null&&Nr(r,s,"");for(const s in n)s==="display"&&(o=!0),Nr(r,s,n[s])}else if(a){if(e!==n){const s=r[gf];s&&(n+=";"+s),r.cssText=n,o=vf.test(n)}}else e&&t.removeAttribute("style");ri in t&&(t[ri]=o?r.display:"",r.display=i)}const ai=/\s*!important$/;function Nr(t,e,n){if(R(n))n.forEach(r=>Nr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yf(t,e);ai.test(n)?t.setProperty(Ne(r),n.replace(ai,""),"important"):t[r]=n}}const ii=["Webkit","Moz","ms"],mr={};function yf(t,e){const n=mr[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return mr[e]=r;r=Yn(r);for(let a=0;a<ii.length;a++){const i=ii[a]+r;if(i in t)return mr[e]=i}return e}const oi="http://www.w3.org/1999/xlink";function _f(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(oi,e.slice(6,e.length)):t.setAttributeNS(oi,e,n);else{const i=xs(e);n==null||i&&!Hi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Hi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function wf(t,e,n,r){t.addEventListener(e,n,r)}function kf(t,e,n,r){t.removeEventListener(e,n,r)}const si=Symbol("_vei");function Af(t,e,n,r,a=null){const i=t[si]||(t[si]={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Of(e);if(r){const c=i[e]=Cf(r,a);wf(t,s,c,l)}else o&&(kf(t,s,o,l),i[e]=void 0)}}const li=/(?:Once|Passive|Capture)$/;function Of(t){let e;if(li.test(t)){e={};let r;for(;r=t.match(li);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ne(t.slice(2)),e]}let hr=0;const Sf=Promise.resolve(),Ef=()=>hr||(Sf.then(()=>hr=0),hr=Date.now());function Cf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(Pf(r,n.value),e,5,[r])};return n.value=t,n.attached=Ef(),n}function Pf(t,e){if(R(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const fi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,If=(t,e,n,r,a,i,o,s,l)=>{const c=a==="svg";e==="class"?pf(t,r,c):e==="style"?bf(t,n,r):Hn(e)?Vr(e)||Af(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tf(t,e,r,c))?xf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_f(t,e,r,c))};function Tf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&fi(e)&&F(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return fi(e)&&nt(n)?!1:e in t}const Nf=it({patchProp:If},mf);let ci;function Mf(){return ci||(ci=Bl(Nf))}const Rf=(...t)=>{const e=Mf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Ff(r);if(!a)return;const i=e._component;!F(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,Lf(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function Lf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ff(t){return nt(t)?document.querySelector(t):t}const jf={class:"font-sans font-black text-5xl"},$f=D("div",null,[Ot(" emirhan (aka larei), self-taught developer, "),D("a",{href:"https://www.youtube.com/watch?v=9sJUDx7iEJw",target:"_blank",class:"underline"},"free software"),Ot(" enthusiast. programming, music, math. ")],-1),zf={class:"flex items-center gap-2 text-sm text-gruvbox-gray"},Df={key:0},Uf=["href"],Hf={key:1},Bf={class:"flex items-center gap-2 text-sm text-gruvbox-gray"},Wf={key:0},Yf={class:"font-black"},Vf={key:0},Kf={class:"font-black"},Gf={key:1},Xf={class:"flex gap-10 mt-5 text-xl"},qf={href:"https://github.com/lareii/",target:"_blank"},Jf={href:"https://www.linkedin.com/in/larei/",target:"_blank"},Zf={href:"https://discord.com/users/748539900793716887",target:"_blank"},Qf={__name:"Header",setup(t){const e=ye(null),n=ye("text-gruvbox-gray"),r=ye(null),a=ye(null),i=()=>{e.value=new WebSocket("wss://api.lanyard.rest/socket"),e.value.onopen=()=>{console.log("WebSocket connection established."),e.value.send(JSON.stringify({op:2,d:{subscribe_to_id:"748539900793716887"}}))},e.value.onmessage=o=>{const s=JSON.parse(o.data);if(s.t==="INIT_STATE"||s.t==="PRESENCE_UPDATE"){const l=s.d;switch(a.value=l.spotify,r.value=l.activities.find(c=>c.name==="Visual Studio Code"),l.discord_status){case"online":n.value="text-gruvbox-green";break;case"idle":n.value="text-gruvbox-yellow";break;case"dnd":n.value="text-gruvbox-red";break;case"offline":n.value="text-gruvbox-gray";break}e.value.onerror=c=>{console.error("WebSocket error: ",c)},e.value.onclose=()=>{console.log("WebSocket connection closed.")}}}};return qn(async()=>{i()}),sa(()=>{e.value&&e.value.close()}),(o,s)=>{const l=oa("font-awesome-icon");return ot(),ut(bt,null,[D("div",jf,[Ot(" babaoglu"),D("span",{class:en(["text-2xl",n.value])},".dev",2)]),$f,D("div",zf,[G(l,{icon:["fab","spotify"],class:"w-4 h-4 mr-0.5"}),a.value?(ot(),ut("div",Df,[Ot(" i'm currently listening to "),D("a",{href:`https://open.spotify.com/track/${a.value.track_id}`,target:"_blank",class:"font-black underline"},At(a.value.song)+" - "+At(a.value.artist),9,Uf),Ot(". ")])):(ot(),ut("div",Hf,"i'm not listening to anything right now."))]),D("div",Bf,[G(l,{icon:["fas","code"],class:"w-4 h-4 mr-0.5"}),r.value?(ot(),ut("div",Wf,[Ot(" i'm currently working on "),D("span",Yf,At(r.value.details),1),r.value.state?(ot(),ut("span",Vf,[Ot(" in "),D("span",Kf,At(r.value.state),1)])):Po("",!0)])):(ot(),ut("div",Gf,"i'm not working on anything right now."))]),D("div",Xf,[D("a",qf,[G(l,{icon:["fab","github"]})]),D("a",Jf,[G(l,{icon:["fab","linkedin"]})]),D("a",Zf,[G(l,{icon:["fab","discord"]})])])],64)}}},tc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},ec={},nc=D("div",{class:"mb-2 font-black text-2xl"},"uses/",-1),rc=D("img",{src:"https://skillicons.dev/icons?i=linux,git,docker,vscode,github,mongodb",class:"select-none mb-2"},null,-1),ac=D("img",{src:"https://skillicons.dev/icons?i=c,python,go,js,tailwind,react,vuejs,nextjs",class:"select-none"},null,-1);function ic(t,e){return ot(),ut(bt,null,[nc,rc,ac],64)}const oc=tc(ec,[["render",ic]]),sc=D("div",{class:"mb-2 font-black text-2xl"},"projects/",-1),lc={class:"grid md:grid-cols-2 gap-2"},fc={key:0},cc=["href"],uc={class:"flex items-center gap-1 text-gruvbox-gray"},dc=["src"],mc={class:"flex mt-2 gap-5"},hc={__name:"Projects",setup(t){const e=["copl.uk","lareii.github.io","ytm-discord-rpc"],n=ye([]);return qn(async()=>{await fetch("https://api.github.com/users/lareii/repos").then(r=>r.json()).then(r=>{r.sort((a,i)=>i.stargazers_count-a.stargazers_count),r.forEach(a=>{e.includes(a.name)&&n.value.push(a)})}).catch(()=>{})}),(r,a)=>{const i=oa("font-awesome-icon");return ot(),ut(bt,null,[sc,D("div",lc,[n.value.length?Po("",!0):(ot(),ut("div",fc,"projects could not be retrieved.")),(ot(!0),ut(bt,null,Cl(n.value,o=>(ot(),ut("a",{href:o.html_url,target:"_blank",class:"flex flex-col justify-between px-5 py-3 bg-[#202020]/[.3] border-[#504945] border-[0.5px] rounded-lg text-sm"},[D("div",null,[D("div",uc,[D("img",{src:o.owner.avatar_url,class:"rounded-full w-4"},null,8,dc),Ot(" "+At(o.owner.login),1)]),D("div",{class:en(["font-bold","text-lg",o.archived?"line-through":""])},At(o.name),3),D("div",null,At(o.description),1)]),D("div",mc,[D("div",null,[G(i,{icon:["fas","star"]}),Ot(" "+At(o.stargazers_count),1)]),D("div",null,[G(i,{icon:["fas","code-branch"]}),Ot(" "+At(o.forks_count),1)])])],8,cc))),256))])],64)}}},pc={class:"flex justify-between mt-10 gap-5 text-sm text-gruvbox-gray"},gc={class:"flex gap-2"},vc={key:0},bc={key:1},yc=D("a",{href:"https://github.com/lareii/lareii.github.io",target:"_blank",class:"whitespace-nowrap underline"},"gimme a ⭐",-1),_c={__name:"Footer",setup(t){const e=ye(null);return qn(async()=>{await fetch("https://api.github.com/repos/lareii/lareii.github.io/commits").then(n=>n.json()).then(n=>{e.value=n[0]}).catch(()=>{})}),(n,r)=>{const a=oa("font-awesome-icon");return ot(),ut("div",pc,[D("div",gc,[G(a,{icon:["fas","code-branch"],class:"mt-[3px]"}),e.value?(ot(),ut("div",vc,At(e.value.sha.slice(0,7))+" — "+At(e.value.commit.message),1)):(ot(),ut("div",bc,"latest commit could not be retrieved."))]),yc])}}},xc={class:"sm:pt-20 max-w-screen-lg mx-auto p-5 relative"},wc=D("div",{class:"z-0 absolute -mt-10 right-0 text-[10rem] opacity-10 select-none"},"✨",-1),kc={class:"relative mb-10"},Ac={class:"mb-10"},Oc=D("div",{class:"z-0 absolute mt-10 text-[10rem] opacity-10 select-none"},"👨‍💻",-1),Sc={class:"relative mb-10"},Ec={__name:"App",setup(t){return(e,n)=>(ot(),ut("div",xc,[wc,D("div",kc,[G(Qf)]),D("div",Ac,[G(oc)]),Oc,D("div",Sc,[G(hc)]),G(_c)]))}};function ui(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ui(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ui(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $n(t){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$n(t)}function Cc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pc(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ic(t,e,n){return e&&Pc(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function da(t,e){return Nc(t)||Rc(t,e)||No(t,e)||Fc()}function rn(t){return Tc(t)||Mc(t)||No(t)||Lc()}function Tc(t){if(Array.isArray(t))return Mr(t)}function Nc(t){if(Array.isArray(t))return t}function Mc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Rc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function No(t,e){if(t){if(typeof t=="string")return Mr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(t,e)}}function Mr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Lc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var di=function(){},ma={},Mo={},Ro=null,Lo={mark:di,measure:di};try{typeof window<"u"&&(ma=window),typeof document<"u"&&(Mo=document),typeof MutationObserver<"u"&&(Ro=MutationObserver),typeof performance<"u"&&(Lo=performance)}catch{}var jc=ma.navigator||{},mi=jc.userAgent,hi=mi===void 0?"":mi,te=ma,X=Mo,pi=Ro,vn=Lo;te.document;var Yt=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Fo=~hi.indexOf("MSIE")||~hi.indexOf("Trident/"),bn,yn,_n,xn,wn,Ut="___FONT_AWESOME___",Rr=16,jo="fa",$o="svg-inline--fa",he="data-fa-i2svg",Lr="data-fa-pseudo-element",$c="data-fa-pseudo-element-pending",ha="data-prefix",pa="data-icon",gi="fontawesome-i2svg",zc="async",Dc=["HTML","HEAD","STYLE","SCRIPT"],zo=function(){try{return!0}catch{return!1}}(),K="classic",tt="sharp",ga=[K,tt];function an(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[K]}})}var qe=an((bn={},rt(bn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(bn,tt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bn)),Je=an((yn={},rt(yn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(yn,tt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),yn)),Ze=an((_n={},rt(_n,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(_n,tt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_n)),Uc=an((xn={},rt(xn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(xn,tt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),xn)),Hc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Do="fa-layers-text",Bc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Wc=an((wn={},rt(wn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(wn,tt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),wn)),Uo=[1,2,3,4,5,6,7,8,9,10],Yc=Uo.concat([11,12,13,14,15,16,17,18,19,20]),Vc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qe=new Set;Object.keys(Je[K]).map(Qe.add.bind(Qe));Object.keys(Je[tt]).map(Qe.add.bind(Qe));var Kc=[].concat(ga,rn(Qe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY]).concat(Uo.map(function(t){return"".concat(t,"x")})).concat(Yc.map(function(t){return"w-".concat(t)})),We=te.FontAwesomeConfig||{};function Gc(t){var e=X.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Xc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(X&&typeof X.querySelector=="function"){var qc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qc.forEach(function(t){var e=da(t,2),n=e[0],r=e[1],a=Xc(Gc(n));a!=null&&(We[r]=a)})}var Ho={styleDefault:"solid",familyDefault:"classic",cssPrefix:jo,replacementClass:$o,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};We.familyPrefix&&(We.cssPrefix=We.familyPrefix);var Ie=O(O({},Ho),We);Ie.autoReplaceSvg||(Ie.observeMutations=!1);var C={};Object.keys(Ho).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(n){Ie[t]=n,Ye.forEach(function(r){return r(C)})},get:function(){return Ie[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(e){Ie.cssPrefix=e,Ye.forEach(function(n){return n(C)})},get:function(){return Ie.cssPrefix}});te.FontAwesomeConfig=C;var Ye=[];function Jc(t){return Ye.push(t),function(){Ye.splice(Ye.indexOf(t),1)}}var Kt=Rr,Lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zc(t){if(!(!t||!Yt)){var e=X.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(e,r),t}}var Qc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var t=12,e="";t-- >0;)e+=Qc[Math.random()*62|0];return e}function Me(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function va(t){return t.classList?Me(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Bo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Bo(t[n]),'" ')},"").trim()}function tr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ba(t){return t.size!==Lt.size||t.x!==Lt.x||t.y!==Lt.y||t.rotate!==Lt.rotate||t.flipX||t.flipY}function eu(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function nu(t){var e=t.transform,n=t.width,r=n===void 0?Rr:n,a=t.height,i=a===void 0?Rr:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Fo?l+="translate(".concat(e.x/Kt-r/2,"em, ").concat(e.y/Kt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Kt,"em), calc(-50% + ").concat(e.y/Kt,"em)) "):l+="translate(".concat(e.x/Kt,"em, ").concat(e.y/Kt,"em) "),l+="scale(".concat(e.size/Kt*(e.flipX?-1:1),", ").concat(e.size/Kt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ru=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Wo(){var t=jo,e=$o,n=C.cssPrefix,r=C.replacementClass,a=ru;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var vi=!1;function pr(){C.autoAddCss&&!vi&&(Zc(Wo()),vi=!0)}var au={mixout:function(){return{dom:{css:Wo,insertCss:pr}}},hooks:function(){return{beforeDOMElementCreation:function(){pr()},beforeI2svg:function(){pr()}}}},Ht=te||{};Ht[Ut]||(Ht[Ut]={});Ht[Ut].styles||(Ht[Ut].styles={});Ht[Ut].hooks||(Ht[Ut].hooks={});Ht[Ut].shims||(Ht[Ut].shims=[]);var Ct=Ht[Ut],Yo=[],iu=function t(){X.removeEventListener("DOMContentLoaded",t),zn=1,Yo.map(function(e){return e()})},zn=!1;Yt&&(zn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),zn||X.addEventListener("DOMContentLoaded",iu));function ou(t){Yt&&(zn?setTimeout(t,0):Yo.push(t))}function on(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Bo(t):"<".concat(e," ").concat(tu(r),">").concat(i.map(on).join(""),"</").concat(e,">")}function bi(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var gr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=n,l,c,u;for(r===void 0?(l=1,u=e[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function su(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Fr(t){var e=su(t);return e.length===1?e[0].toString(16):null}function lu(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function jr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=yi(e);typeof Ct.hooks.addPack=="function"&&!a?Ct.hooks.addPack(t,yi(e)):Ct.styles[t]=O(O({},Ct.styles[t]||{}),i),t==="fas"&&jr("fa",e)}var kn,An,On,xe=Ct.styles,fu=Ct.shims,cu=(kn={},rt(kn,K,Object.values(Ze[K])),rt(kn,tt,Object.values(Ze[tt])),kn),ya=null,Vo={},Ko={},Go={},Xo={},qo={},uu=(An={},rt(An,K,Object.keys(qe[K])),rt(An,tt,Object.keys(qe[tt])),An);function du(t){return~Kc.indexOf(t)}function mu(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!du(a)?a:null}var Jo=function(){var e=function(i){return gr(xe,function(o,s,l){return o[l]=gr(s,i,{}),o},{})};Vo=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ko=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),qo=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in xe||C.autoFetchSvg,r=gr(fu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Go=r.names,Xo=r.unicodes,ya=er(C.styleDefault,{family:C.familyDefault})};Jc(function(t){ya=er(t.styleDefault,{family:C.familyDefault})});Jo();function _a(t,e){return(Vo[t]||{})[e]}function hu(t,e){return(Ko[t]||{})[e]}function ce(t,e){return(qo[t]||{})[e]}function Zo(t){return Go[t]||{prefix:null,iconName:null}}function pu(t){var e=Xo[t],n=_a("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ee(){return ya}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function er(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?K:n,a=qe[r][t],i=Je[r][t]||Je[r][a],o=t in Ct.styles?t:null;return i||o||null}var _i=(On={},rt(On,K,Object.keys(Ze[K])),rt(On,tt,Object.keys(Ze[tt])),On);function nr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},rt(e,K,"".concat(C.cssPrefix,"-").concat(K)),rt(e,tt,"".concat(C.cssPrefix,"-").concat(tt)),e),o=null,s=K;(t.includes(i[K])||t.some(function(c){return _i[K].includes(c)}))&&(s=K),(t.includes(i[tt])||t.some(function(c){return _i[tt].includes(c)}))&&(s=tt);var l=t.reduce(function(c,u){var m=mu(C.cssPrefix,u);if(xe[u]?(u=cu[s].includes(u)?Uc[s][u]:u,o=u,c.prefix=u):uu[s].indexOf(u)>-1?(o=u,c.prefix=er(u,{family:s})):m?c.iconName=m:u!==C.replacementClass&&u!==i[K]&&u!==i[tt]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var v=o==="fa"?Zo(c.iconName):{},k=ce(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!xe.far&&xe.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===tt&&(xe.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ce(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ee()||"fas"),l}var gu=function(){function t(){Cc(this,t),this.definitions={}}return Ic(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),jr(s,o[s]);var l=Ze[K][s];l&&jr(l,o[s]),Jo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),xi=[],we={},Ee={},vu=Object.keys(Ee);function bu(t,e){var n=e.mixoutsTo;return xi=t,we={},Object.keys(Ee).forEach(function(r){vu.indexOf(r)===-1&&delete Ee[r]}),xi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),$n(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){we[o]||(we[o]=[]),we[o].push(i[o])})}r.provides&&r.provides(Ee)}),n}function $r(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=we[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function pe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=we[t]||[];a.forEach(function(i){i.apply(null,n)})}function Bt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ee[t]?Ee[t].apply(null,e):void 0}function zr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ee();if(e)return e=ce(n,e)||e,bi(Qo.definitions,n,e)||bi(Ct.styles,n,e)}var Qo=new gu,yu=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,pe("noAuto")},_u={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yt?(pe("beforeI2svg",e),Bt("pseudoElements2svg",e),Bt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,ou(function(){wu({autoReplaceSvgRoot:n}),pe("watch",e)})}},xu={icon:function(e){if(e===null)return null;if($n(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ce(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=er(e[0]);return{prefix:r,iconName:ce(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(C.cssPrefix,"-"))>-1||e.match(Hc))){var a=nr(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||ee(),iconName:ce(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=ee();return{prefix:i,iconName:ce(i,e)||e}}}},yt={noAuto:yu,config:C,dom:_u,parse:xu,library:Qo,findIconDefinition:zr,toHtml:on},wu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ct.styles).length>0||C.autoFetchSvg)&&Yt&&C.autoReplaceSvg&&yt.dom.i2svg({node:r})};function rr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return on(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Yt){var r=X.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function ku(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(ba(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=tr(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Au(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function wa(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,m=t.extra,v=t.watchable,k=v===void 0?!1:v,j=r.found?r:n,N=j.width,U=j.height,w=a==="fak",E=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(_t){return m.classes.indexOf(_t)===-1}).filter(function(_t){return _t!==""||!!_t}).concat(m.classes).join(" "),P={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(U)})},$=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/U*16*.0625,"em")}:{};k&&(P.attributes[he]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||tn())},children:[l]}),delete P.attributes.title);var B=O(O({},P),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},$),m.styles)}),L=r.found&&n.found?Bt("generateAbstractMask",B)||{children:[],attributes:{}}:Bt("generateAbstractIcon",B)||{children:[],attributes:{}},et=L.children,dt=L.attributes;return B.children=et,B.attributes=dt,s?Au(B):ku(B)}function wi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[he]="");var u=O({},o.styles);ba(a)&&(u.transform=nu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=tr(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Ou(t){var e=t.content,n=t.title,r=t.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vr=Ct.styles;function Dr(t){var e=t[0],n=t[1],r=t.slice(4),a=da(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(fe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Su={found:!1,width:512,height:512};function Eu(t,e){!zo&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ur(t,e){var n=e;return e==="fa"&&C.styleDefault!==null&&(e=ee()),new Promise(function(r,a){if(Bt("missingIconAbstract"),n==="fa"){var i=Zo(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&vr[e]&&vr[e][t]){var o=vr[e][t];return r(Dr(o))}Eu(t,e),r(O(O({},Su),{},{icon:C.showMissingIcons&&t?Bt("missingIconAbstract")||{}:{}}))})}var ki=function(){},Hr=C.measurePerformance&&vn&&vn.mark&&vn.measure?vn:{mark:ki,measure:ki},ze='FA "6.5.1"',Cu=function(e){return Hr.mark("".concat(ze," ").concat(e," begins")),function(){return ts(e)}},ts=function(e){Hr.mark("".concat(ze," ").concat(e," ends")),Hr.measure("".concat(ze," ").concat(e),"".concat(ze," ").concat(e," begins"),"".concat(ze," ").concat(e," ends"))},ka={begin:Cu,end:ts},Tn=function(){};function Ai(t){var e=t.getAttribute?t.getAttribute(he):null;return typeof e=="string"}function Pu(t){var e=t.getAttribute?t.getAttribute(ha):null,n=t.getAttribute?t.getAttribute(pa):null;return e&&n}function Iu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function Tu(){if(C.autoReplaceSvg===!0)return Nn.replace;var t=Nn[C.autoReplaceSvg];return t||Nn.replace}function Nu(t){return X.createElementNS("http://www.w3.org/2000/svg",t)}function Mu(t){return X.createElement(t)}function es(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Nu:Mu:n;if(typeof t=="string")return X.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(es(o,{ceFn:r}))}),a}function Ru(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Nn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(es(a),n)}),n.getAttribute(he)===null&&C.keepOriginalSource){var r=X.createComment(Ru(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~va(n).indexOf(C.replacementClass))return Nn.replace(e);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(he,""),n.innerHTML=o}};function Oi(t){t()}function ns(t,e){var n=typeof e=="function"?e:Tn;if(t.length===0)n();else{var r=Oi;C.mutateApproach===zc&&(r=te.requestAnimationFrame||Oi),r(function(){var a=Tu(),i=ka.begin("mutate");t.map(a),i(),n()})}}var Aa=!1;function rs(){Aa=!0}function Br(){Aa=!1}var Dn=null;function Si(t){if(pi&&C.observeMutations){var e=t.treeCallback,n=e===void 0?Tn:e,r=t.nodeCallback,a=r===void 0?Tn:r,i=t.pseudoElementsCallback,o=i===void 0?Tn:i,s=t.observeMutationsRoot,l=s===void 0?X:s;Dn=new pi(function(c){if(!Aa){var u=ee();Me(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ai(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ai(m.target)&&~Vc.indexOf(m.attributeName))if(m.attributeName==="class"&&Pu(m.target)){var v=nr(va(m.target)),k=v.prefix,j=v.iconName;m.target.setAttribute(ha,k||u),j&&m.target.setAttribute(pa,j)}else Iu(m.target)&&a(m.target)})}}),Yt&&Dn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Lu(){Dn&&Dn.disconnect()}function Fu(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ju(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=nr(va(t));return a.prefix||(a.prefix=ee()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=hu(a.prefix,t.innerText)||_a(a.prefix,Fr(t.innerText))),!a.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function $u(t){var e=Me(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||tn()):(e["aria-hidden"]="true",e.focusable="false")),e}function zu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ei(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ju(t),r=n.iconName,a=n.prefix,i=n.rest,o=$u(t),s=$r("parseNodeAttributes",{},t),l=e.styleParser?Fu(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Du=Ct.styles;function as(t){var e=C.autoReplaceSvg==="nest"?Ei(t,{styleParser:!1}):Ei(t);return~e.extra.classes.indexOf(Do)?Bt("generateLayersText",t,e):Bt("generateSvgReplacementMutation",t,e)}var ne=new Set;ga.map(function(t){ne.add("fa-".concat(t))});Object.keys(qe[K]).map(ne.add.bind(ne));Object.keys(qe[tt]).map(ne.add.bind(ne));ne=rn(ne);function Ci(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yt)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(gi,"-").concat(m))},a=function(m){return n.remove("".concat(gi,"-").concat(m))},i=C.autoFetchSvg?ne:ga.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Du));i.includes("fa")||i.push("fa");var o=[".".concat(Do,":not([").concat(he,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(he,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Me(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ka.begin("onTree"),c=s.reduce(function(u,m){try{var v=as(m);v&&u.push(v)}catch(k){zo||k.name==="MissingIcon"&&console.error(k)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){ns(v,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(v){l(),m(v)})})}function Uu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;as(t).then(function(n){n&&ns([n],e)})}function Hu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:zr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:zr(a||{})),t(r,O(O({},n),{},{mask:a}))}}var Bu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Lt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,j=k===void 0?null:k,N=n.classes,U=N===void 0?[]:N,w=n.attributes,E=w===void 0?{}:w,P=n.styles,$=P===void 0?{}:P;if(e){var B=e.prefix,L=e.iconName,et=e.icon;return rr(O({type:"icon"},e),function(){return pe("beforeDOMElementCreation",{iconDefinition:e,params:n}),C.autoA11y&&(v?E["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||tn()):(E["aria-hidden"]="true",E.focusable="false")),wa({icons:{main:Dr(et),mask:l?Dr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:L,transform:O(O({},Lt),a),symbol:o,title:v,maskId:u,titleId:j,extra:{attributes:E,styles:$,classes:U}})})}},Wu={mixout:function(){return{icon:Hu(Bu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ci,n.nodeCallback=Uu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Ci(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,j){Promise.all([Ur(a,s),u.iconName?Ur(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var U=da(N,2),w=U[0],E=U[1];k([n,wa({icons:{main:w,mask:E},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=tr(s);l.length>0&&(a.style=l);var c;return ba(o)&&(c=Bt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Yu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return rr({type:"layer"},function(){pe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(rn(i)).join(" ")},children:o}]})}}}},Vu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return rr({type:"counter",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),Ou({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(rn(s))}})})}}}},Ku={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Lt:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,k=v===void 0?{}:v;return rr({type:"text",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:r}),wi({content:n,transform:O(O({},Lt),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(C.cssPrefix,"-layers-text")].concat(rn(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Fo){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Gu=new RegExp('"',"ug"),Pi=[1105920,1112319];function Xu(t){var e=t.replace(Gu,""),n=lu(e,0),r=n>=Pi[0]&&n<=Pi[1],a=e.length===2?e[0]===e[1]:!1;return{value:Fr(a?e[0]:e),isSecondary:r||a}}function Ii(t,e){var n="".concat($c).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Me(t.children),o=i.filter(function(et){return et.getAttribute(Lr)===e})[0],s=te.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Bc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?tt:K,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Je[v][l[2].toLowerCase()]:Wc[v][c],j=Xu(m),N=j.value,U=j.isSecondary,w=l[0].startsWith("FontAwesome"),E=_a(k,N),P=E;if(w){var $=pu(N);$.iconName&&$.prefix&&(E=$.iconName,k=$.prefix)}if(E&&!U&&(!o||o.getAttribute(ha)!==k||o.getAttribute(pa)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);var B=zu(),L=B.extra;L.attributes[Lr]=e,Ur(E,k).then(function(et){var dt=wa(O(O({},B),{},{icons:{main:et,mask:xa()},prefix:k,iconName:P,extra:L,watchable:!0})),_t=X.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_t,t.firstChild):t.appendChild(_t),_t.outerHTML=dt.map(function(jt){return on(jt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function qu(t){return Promise.all([Ii(t,"::before"),Ii(t,"::after")])}function Ju(t){return t.parentNode!==document.head&&!~Dc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Lr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ti(t){if(Yt)return new Promise(function(e,n){var r=Me(t.querySelectorAll("*")).filter(Ju).map(qu),a=ka.begin("searchPseudoElements");rs(),Promise.all(r).then(function(){a(),Br(),e()}).catch(function(){a(),Br(),n()})})}var Zu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ti,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;C.searchPseudoElements&&Ti(a)}}},Ni=!1,Qu={mixout:function(){return{dom:{unwatch:function(){rs(),Ni=!0}}}},hooks:function(){return{bootstrap:function(){Si($r("mutationObserverCallbacks",{}))},noAuto:function(){Lu()},watch:function(n){var r=n.observeMutationsRoot;Ni?Br():Si($r("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mi=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},td={mixout:function(){return{parse:{transform:function(n){return Mi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Mi(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},br={x:0,y:0,width:"100%",height:"100%"};function Ri(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ed(t){return t.tag==="g"?t.children:[t]}var nd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?nr(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=ee()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,v=o.icon,k=eu({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:O(O({},br),{},{fill:"white"})},N=u.children?{children:u.children.map(Ri)}:{},U={tag:"g",attributes:O({},k.inner),children:[Ri(O({tag:u.tag,attributes:O(O({},u.attributes),k.path)},N))]},w={tag:"g",attributes:O({},k.outer),children:[U]},E="mask-".concat(s||tn()),P="clip-".concat(s||tn()),$={tag:"mask",attributes:O(O({},br),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,w]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:ed(v)},$]};return r.push(B,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(E,")")},br)}),{children:r,attributes:a}}}},rd={provides:function(e){var n=!1;te.matchMedia&&(n=te.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ad={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},id=[au,Wu,Yu,Vu,Ku,Zu,Qu,td,nd,rd,ad];bu(id,{mixoutsTo:yt});yt.noAuto;yt.config;var od=yt.library;yt.dom;var Wr=yt.parse;yt.findIconDefinition;yt.toHtml;var sd=yt.icon;yt.layer;yt.text;yt.counter;function Li(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function zt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Li(Object(n),!0).forEach(function(r){mt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Li(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Un(t){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Un(t)}function mt(t,e,n){return e=ud(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ld(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function fd(t,e){if(t==null)return{};var n=ld(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function cd(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ud(t){var e=cd(t,"string");return typeof e=="symbol"?e:String(e)}var dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},is={exports:{}};(function(t){(function(e){var n=function(w,E,P){if(!c(E)||m(E)||v(E)||k(E)||l(E))return E;var $,B=0,L=0;if(u(E))for($=[],L=E.length;B<L;B++)$.push(n(w,E[B],P));else{$={};for(var et in E)Object.prototype.hasOwnProperty.call(E,et)&&($[w(et,P)]=n(w,E[et],P))}return $},r=function(w,E){E=E||{};var P=E.separator||"_",$=E.split||/(?=[A-Z])/;return w.split($).join(P)},a=function(w){return j(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(E,P){return P?P.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var E=a(w);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(w,E){return r(w,E).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},k=function(w){return s.call(w)=="[object Boolean]"},j=function(w){return w=w-0,w===w},N=function(w,E){var P=E&&"process"in E?E.process:E;return typeof P!="function"?w:function($,B){return P($,w,B)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,E){return n(N(a,E),w)},decamelizeKeys:function(w,E){return n(N(o,E),w,E)},pascalizeKeys:function(w,E){return n(N(i,E),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=U:e.humps=U})(dd)})(is);var md=is.exports,hd=["class","style"];function pd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=md.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function gd(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function os(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return os(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=gd(u);break;case"style":l.style=pd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=fd(n,hd);return ff(t.tag,zt(zt(zt({},e),{},{class:a.class,style:zt(zt({},a.style),o)},a.attrs),s),r)}var ss=!1;try{ss=!0}catch{}function vd(){if(!ss&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function yr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?mt({},t,e):{}}function bd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},mt(e,"fa-".concat(t.size),t.size!==null),mt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),mt(e,"fa-pull-".concat(t.pull),t.pull!==null),mt(e,"fa-swap-opacity",t.swapOpacity),mt(e,"fa-bounce",t.bounce),mt(e,"fa-shake",t.shake),mt(e,"fa-beat",t.beat),mt(e,"fa-fade",t.fade),mt(e,"fa-beat-fade",t.beatFade),mt(e,"fa-flash",t.flash),mt(e,"fa-spin-pulse",t.spinPulse),mt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fi(t){if(t&&Un(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wr.icon)return Wr.icon(t);if(t===null)return null;if(Un(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var yd=gl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=se(function(){return Fi(e.icon)}),i=se(function(){return yr("classes",bd(e))}),o=se(function(){return yr("transform",typeof e.transform=="string"?Wr.transform(e.transform):e.transform)}),s=se(function(){return yr("mask",Fi(e.mask))}),l=se(function(){return sd(a.value,zt(zt(zt(zt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});En(l,function(u){if(!u)return vd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=se(function(){return l.value?os(l.value.abstract[0],{},r):null});return function(){return c.value}}}),_d={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},xd={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},wd={prefix:"fas",iconName:"code-branch",icon:[448,512,[],"f126","M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},kd={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},Ad={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},Od={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Sd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Ed={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]};od.add(Sd,Od,kd,Ad,Ed,_d,wd,xd);Rf(Ec).component("font-awesome-icon",yd).mount("#app");
