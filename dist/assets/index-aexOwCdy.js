(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Th(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Pe={},Ri=[],dn=()=>{},_E=()=>!1,wc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ah=t=>t.startsWith("onUpdate:"),ot=Object.assign,Rh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yE=Object.prototype.hasOwnProperty,de=(t,e)=>yE.call(t,e),G=Array.isArray,Si=t=>To(t)==="[object Map]",Yi=t=>To(t)==="[object Set]",Nd=t=>To(t)==="[object Date]",ne=t=>typeof t=="function",He=t=>typeof t=="string",ur=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",zg=t=>(Se(t)||ne(t))&&ne(t.then)&&ne(t.catch),qg=Object.prototype.toString,To=t=>qg.call(t),vE=t=>To(t).slice(8,-1),Hg=t=>To(t)==="[object Object]",Sh=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ta=Th(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ec=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wE=/-(\w)/g,vn=Ec(t=>t.replace(wE,(e,n)=>n?n.toUpperCase():"")),EE=/\B([A-Z])/g,Xi=Ec(t=>t.replace(EE,"-$1").toLowerCase()),Ic=Ec(t=>t.charAt(0).toUpperCase()+t.slice(1)),Al=Ec(t=>t?`on${Ic(t)}`:""),qr=(t,e)=>!Object.is(t,e),Aa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},$a=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ja=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Dd;const fu=()=>Dd||(Dd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ao(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=He(r)?AE(r):Ao(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(He(t)||Se(t))return t}const IE=/;(?![^(]*\))/g,bE=/:([^]+)/,TE=/\/\*[^]*?\*\//g;function AE(t){const e={};return t.replace(TE,"").split(IE).forEach(n=>{if(n){const r=n.split(bE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ph(t){let e="";if(He(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=Ph(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const RE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",SE=Th(RE);function Wg(t){return!!t||t===""}function PE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Hr(t[r],e[r]);return n}function Hr(t,e){if(t===e)return!0;let n=Nd(t),r=Nd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=ur(t),r=ur(e),n||r)return t===e;if(n=G(t),r=G(e),n||r)return n&&r?PE(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Hr(t[o],e[o]))return!1}}return String(t)===String(e)}function Ch(t,e){return t.findIndex(n=>Hr(n,e))}const Ne=t=>He(t)?t:t==null?"":G(t)||Se(t)&&(t.toString===qg||!ne(t.toString))?JSON.stringify(t,Kg,2):String(t),Kg=(t,e)=>e&&e.__v_isRef?Kg(t,e.value):Si(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Rl(r,s)+" =>"]=i,n),{})}:Yi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rl(n))}:ur(e)?Rl(e):Se(e)&&!G(e)&&!Hg(e)?String(e):e,Rl=(t,e="")=>{var n;return ur(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ct;class Gg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Qg(t){return new Gg(t)}function CE(t,e=Ct){e&&e.active&&e.effects.push(t)}function kh(){return Ct}function Yg(t){Ct&&Ct.cleanups.push(t)}const xh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xg=t=>(t.w&hr)>0,Jg=t=>(t.n&hr)>0,kE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=hr},xE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Xg(i)&&!Jg(i)?i.delete(t):e[n++]=i,i.w&=~hr,i.n&=~hr}e.length=n}},Ba=new WeakMap;let ys=0,hr=1;const du=30;let Ht;const Ur=Symbol(""),pu=Symbol("");class Oh{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,CE(this,r)}run(){if(!this.active)return this.fn();let e=Ht,n=nr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ht,Ht=this,nr=!0,hr=1<<++ys,ys<=du?kE(this):Md(this),this.fn()}finally{ys<=du&&xE(this),hr=1<<--ys,Ht=this.parent,nr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ht===this?this.deferStop=!0:this.active&&(Md(this),this.onStop&&this.onStop(),this.active=!1)}}function Md(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let nr=!0;const Zg=[];function Ji(){Zg.push(nr),nr=!1}function Zi(){const t=Zg.pop();nr=t===void 0?!0:t}function Rt(t,e,n){if(nr&&Ht){let r=Ba.get(t);r||Ba.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=xh()),e_(i)}}function e_(t,e){let n=!1;ys<=du?Jg(t)||(t.n|=hr,n=!Xg(t)):n=!t.has(Ht),n&&(t.add(Ht),Ht.deps.push(t))}function xn(t,e,n,r,i,s){const o=Ba.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!ur(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Sh(n)&&a.push(o.get("length")):(a.push(o.get(Ur)),Si(t)&&a.push(o.get(pu)));break;case"delete":G(t)||(a.push(o.get(Ur)),Si(t)&&a.push(o.get(pu)));break;case"set":Si(t)&&a.push(o.get(Ur));break}if(a.length===1)a[0]&&mu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);mu(xh(c))}}function mu(t,e){const n=G(t)?t:[...t];for(const r of n)r.computed&&Vd(r);for(const r of n)r.computed||Vd(r)}function Vd(t,e){(t!==Ht||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function OE(t,e){var n;return(n=Ba.get(t))==null?void 0:n.get(e)}const NE=Th("__proto__,__v_isRef,__isVue"),t_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ur)),Ld=DE();function DE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=pe(this);for(let s=0,o=this.length;s<o;s++)Rt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(pe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ji();const r=pe(this)[e].apply(this,n);return Zi(),r}}),t}function ME(t){const e=pe(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class n_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?GE:o_:s?s_:i_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=G(e);if(!i){if(o&&de(Ld,n))return Reflect.get(Ld,n,r);if(n==="hasOwnProperty")return ME}const a=Reflect.get(e,n,r);return(ur(n)?t_.has(n):NE(n))||(i||Rt(e,"get",n),s)?a:Fe(a)?o&&Sh(n)?a:a.value:Se(a)?i?c_(a):Ro(a):a}}class r_ extends n_{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(Mi(s)&&Fe(s)&&!Fe(r))return!1;if(!this._shallow&&(!za(r)&&!Mi(r)&&(s=pe(s),r=pe(r)),!G(e)&&Fe(s)&&!Fe(r)))return s.value=r,!0;const o=G(e)&&Sh(n)?Number(n)<e.length:de(e,n),a=Reflect.set(e,n,r,i);return e===pe(i)&&(o?qr(r,s)&&xn(e,"set",n,r):xn(e,"add",n,r)),a}deleteProperty(e,n){const r=de(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&xn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!ur(n)||!t_.has(n))&&Rt(e,"has",n),r}ownKeys(e){return Rt(e,"iterate",G(e)?"length":Ur),Reflect.ownKeys(e)}}class VE extends n_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const LE=new r_,FE=new VE,UE=new r_(!0),Nh=t=>t,bc=t=>Reflect.getPrototypeOf(t);function Zo(t,e,n=!1,r=!1){t=t.__v_raw;const i=pe(t),s=pe(e);n||(qr(e,s)&&Rt(i,"get",e),Rt(i,"get",s));const{has:o}=bc(i),a=r?Nh:n?Vh:qs;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function ea(t,e=!1){const n=this.__v_raw,r=pe(n),i=pe(t);return e||(qr(t,i)&&Rt(r,"has",t),Rt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ta(t,e=!1){return t=t.__v_raw,!e&&Rt(pe(t),"iterate",Ur),Reflect.get(t,"size",t)}function Fd(t){t=pe(t);const e=pe(this);return bc(e).has.call(e,t)||(e.add(t),xn(e,"add",t,t)),this}function Ud(t,e){e=pe(e);const n=pe(this),{has:r,get:i}=bc(n);let s=r.call(n,t);s||(t=pe(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?qr(e,o)&&xn(n,"set",t,e):xn(n,"add",t,e),this}function $d(t){const e=pe(this),{has:n,get:r}=bc(e);let i=n.call(e,t);i||(t=pe(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&xn(e,"delete",t,void 0),s}function jd(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&xn(t,"clear",void 0,void 0),n}function na(t,e){return function(r,i){const s=this,o=s.__v_raw,a=pe(o),c=e?Nh:t?Vh:qs;return!t&&Rt(a,"iterate",Ur),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function ra(t,e,n){return function(...r){const i=this.__v_raw,s=pe(i),o=Si(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?Nh:e?Vh:qs;return!e&&Rt(s,"iterate",c?pu:Ur),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function qn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $E(){const t={get(s){return Zo(this,s)},get size(){return ta(this)},has:ea,add:Fd,set:Ud,delete:$d,clear:jd,forEach:na(!1,!1)},e={get(s){return Zo(this,s,!1,!0)},get size(){return ta(this)},has:ea,add:Fd,set:Ud,delete:$d,clear:jd,forEach:na(!1,!0)},n={get(s){return Zo(this,s,!0)},get size(){return ta(this,!0)},has(s){return ea.call(this,s,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:na(!0,!1)},r={get(s){return Zo(this,s,!0,!0)},get size(){return ta(this,!0)},has(s){return ea.call(this,s,!0)},add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear"),forEach:na(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ra(s,!1,!1),n[s]=ra(s,!0,!1),e[s]=ra(s,!1,!0),r[s]=ra(s,!0,!0)}),[t,n,e,r]}const[jE,BE,zE,qE]=$E();function Dh(t,e){const n=e?t?qE:zE:t?BE:jE;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(de(n,i)&&i in r?n:r,i,s)}const HE={get:Dh(!1,!1)},WE={get:Dh(!1,!0)},KE={get:Dh(!0,!1)},i_=new WeakMap,s_=new WeakMap,o_=new WeakMap,GE=new WeakMap;function QE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function YE(t){return t.__v_skip||!Object.isExtensible(t)?0:QE(vE(t))}function Ro(t){return Mi(t)?t:Mh(t,!1,LE,HE,i_)}function a_(t){return Mh(t,!1,UE,WE,s_)}function c_(t){return Mh(t,!0,FE,KE,o_)}function Mh(t,e,n,r,i){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=YE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function rr(t){return Mi(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function Mi(t){return!!(t&&t.__v_isReadonly)}function za(t){return!!(t&&t.__v_isShallow)}function l_(t){return rr(t)||Mi(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Tc(t){return $a(t,"__v_skip",!0),t}const qs=t=>Se(t)?Ro(t):t,Vh=t=>Se(t)?c_(t):t;function u_(t){nr&&Ht&&(t=pe(t),e_(t.dep||(t.dep=xh())))}function h_(t,e){t=pe(t);const n=t.dep;n&&mu(n)}function Fe(t){return!!(t&&t.__v_isRef===!0)}function se(t){return f_(t,!1)}function XE(t){return f_(t,!0)}function f_(t,e){return Fe(t)?t:new JE(t,e)}class JE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:qs(e)}get value(){return u_(this),this._value}set value(e){const n=this.__v_isShallow||za(e)||Mi(e);e=n?e:pe(e),qr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:qs(e),h_(this))}}function Ve(t){return Fe(t)?t.value:t}const ZE={get:(t,e,n)=>Ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function d_(t){return rr(t)?t:new Proxy(t,ZE)}function e1(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=n1(t,n);return e}class t1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return OE(pe(this._object),this._key)}}function n1(t,e,n){const r=t[e];return Fe(r)?r:new t1(t,e,n)}class r1{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Oh(e,()=>{this._dirty||(this._dirty=!0,h_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=pe(this);return u_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function i1(t,e,n=!1){let r,i;const s=ne(t);return s?(r=t,i=dn):(r=t.get,i=t.set),new r1(r,i,s||!i,n)}function ir(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Ac(s,e,n)}return i}function Qt(t,e,n,r){if(ne(t)){const s=ir(t,e,n,r);return s&&zg(s)&&s.catch(o=>{Ac(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Qt(t[s],e,n,r));return i}function Ac(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){ir(c,null,10,[t,o,a]);return}}s1(t,n,i,r)}function s1(t,e,n,r=!0){console.error(t)}let Hs=!1,gu=!1;const ft=[];let cn=0;const Pi=[];let An=null,kr=0;const p_=Promise.resolve();let Lh=null;function Fh(t){const e=Lh||p_;return t?e.then(this?t.bind(this):t):e}function o1(t){let e=cn+1,n=ft.length;for(;e<n;){const r=e+n>>>1,i=ft[r],s=Ws(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function Uh(t){(!ft.length||!ft.includes(t,Hs&&t.allowRecurse?cn+1:cn))&&(t.id==null?ft.push(t):ft.splice(o1(t.id),0,t),m_())}function m_(){!Hs&&!gu&&(gu=!0,Lh=p_.then(__))}function a1(t){const e=ft.indexOf(t);e>cn&&ft.splice(e,1)}function c1(t){G(t)?Pi.push(...t):(!An||!An.includes(t,t.allowRecurse?kr+1:kr))&&Pi.push(t),m_()}function Bd(t,e,n=Hs?cn+1:0){for(;n<ft.length;n++){const r=ft[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ft.splice(n,1),n--,r()}}}function g_(t){if(Pi.length){const e=[...new Set(Pi)];if(Pi.length=0,An){An.push(...e);return}for(An=e,An.sort((n,r)=>Ws(n)-Ws(r)),kr=0;kr<An.length;kr++)An[kr]();An=null,kr=0}}const Ws=t=>t.id==null?1/0:t.id,l1=(t,e)=>{const n=Ws(t)-Ws(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function __(t){gu=!1,Hs=!0,ft.sort(l1);try{for(cn=0;cn<ft.length;cn++){const e=ft[cn];e&&e.active!==!1&&ir(e,null,14)}}finally{cn=0,ft.length=0,g_(),Hs=!1,Lh=null,(ft.length||Pi.length)&&__()}}function u1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Pe;f&&(i=n.map(d=>He(d)?d.trim():d)),h&&(i=n.map(ja))}let a,c=r[a=Al(e)]||r[a=Al(vn(e))];!c&&s&&(c=r[a=Al(Xi(e))]),c&&Qt(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qt(l,t,6,i)}}function y_(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ne(t)){const c=l=>{const u=y_(l,e,!0);u&&(a=!0,ot(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Se(t)&&r.set(t,null),null):(G(s)?s.forEach(c=>o[c]=null):ot(o,s),Se(t)&&r.set(t,o),o)}function Rc(t,e){return!t||!wc(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Xi(e))||de(t,e))}let kt=null,Sc=null;function qa(t){const e=kt;return kt=t,Sc=t&&t.type.__scopeId||null,e}function es(t){Sc=t}function ts(){Sc=null}function On(t,e=kt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Zd(-1);const s=qa(e);let o;try{o=t(...i)}finally{qa(s),r._d&&Zd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sl(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:v}=t;let b,y;const w=qa(t);try{if(n.shapeFlag&4){const k=i||r,z=k;b=an(u.call(z,k,h,s,d,f,g)),y=c}else{const k=e;b=an(k.length>1?k(s,{attrs:c,slots:a,emit:l}):k(s,null)),y=e.props?c:h1(c)}}catch(k){ks.length=0,Ac(k,t,1),b=ce(Wr)}let O=b;if(y&&v!==!1){const k=Object.keys(y),{shapeFlag:z}=O;k.length&&z&7&&(o&&k.some(Ah)&&(y=f1(y,o)),O=Vi(O,y))}return n.dirs&&(O=Vi(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),b=O,qa(w),b}const h1=t=>{let e;for(const n in t)(n==="class"||n==="style"||wc(n))&&((e||(e={}))[n]=t[n]);return e},f1=(t,e)=>{const n={};for(const r in t)(!Ah(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function d1(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?zd(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Rc(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?zd(r,o,l):!0:!!o;return!1}function zd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Rc(n,s))return!0}return!1}function p1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const v_="components";function wr(t,e){return g1(v_,t,!0,e)||t}const m1=Symbol.for("v-ndc");function g1(t,e,n=!0,r=!1){const i=kt||Ye;if(i){const s=i.type;if(t===v_){const a=aI(s,!1);if(a&&(a===e||a===vn(e)||a===Ic(vn(e))))return s}const o=qd(i[t]||s[t],e)||qd(i.appContext[t],e);return!o&&r?s:o}}function qd(t,e){return t&&(t[e]||t[vn(e)]||t[Ic(vn(e))])}const _1=t=>t.__isSuspense;function y1(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):c1(t)}const ia={};function sr(t,e,n){return w_(t,e,n)}function w_(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Pe){var a;const c=kh()===((a=Ye)==null?void 0:a.scope)?Ye:null;let l,u=!1,h=!1;if(Fe(t)?(l=()=>t.value,u=za(t)):rr(t)?(l=()=>t,r=!0):G(t)?(h=!0,u=t.some(k=>rr(k)||za(k)),l=()=>t.map(k=>{if(Fe(k))return k.value;if(rr(k))return Or(k);if(ne(k))return ir(k,c,2)})):ne(t)?e?l=()=>ir(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Qt(t,c,3,[d])}:l=dn,e&&r){const k=l;l=()=>Or(k())}let f,d=k=>{f=w.onStop=()=>{ir(k,c,4),f=w.onStop=void 0}},g;if(Ys)if(d=dn,e?n&&Qt(e,c,3,[l(),h?[]:void 0,d]):l(),i==="sync"){const k=uI();g=k.__watcherHandles||(k.__watcherHandles=[])}else return dn;let v=h?new Array(t.length).fill(ia):ia;const b=()=>{if(w.active)if(e){const k=w.run();(r||u||(h?k.some((z,oe)=>qr(z,v[oe])):qr(k,v)))&&(f&&f(),Qt(e,c,3,[k,v===ia?void 0:h&&v[0]===ia?[]:v,d]),v=k)}else w.run()};b.allowRecurse=!!e;let y;i==="sync"?y=b:i==="post"?y=()=>It(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),y=()=>Uh(b));const w=new Oh(l,y);e?n?b():v=w.run():i==="post"?It(w.run.bind(w),c&&c.suspense):w.run();const O=()=>{w.stop(),c&&c.scope&&Rh(c.scope.effects,w)};return g&&g.push(O),O}function v1(t,e,n){const r=this.proxy,i=He(t)?t.includes(".")?E_(r,t):()=>r[t]:t.bind(r,r);let s;ne(e)?s=e:(s=e.handler,n=e);const o=Ye;Li(this);const a=w_(i,s.bind(r),n);return o?Li(o):$r(),a}function E_(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Or(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Fe(t))Or(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Or(t[n],e);else if(Yi(t)||Si(t))t.forEach(n=>{Or(n,e)});else if(Hg(t))for(const n in t)Or(t[n],e);return t}function Tt(t,e){const n=kt;if(n===null)return t;const r=xc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Pe]=e[s];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&Or(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Sr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Ji(),Qt(c,n,8,[t.el,a,t,e]),Zi())}}/*! #__NO_SIDE_EFFECTS__ */function $h(t,e){return ne(t)?ot({name:t.name},e,{setup:t}):t}const Ra=t=>!!t.type.__asyncLoader,I_=t=>t.type.__isKeepAlive;function w1(t,e){b_(t,"a",e)}function E1(t,e){b_(t,"da",e)}function b_(t,e,n=Ye){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Pc(e,r,n),n){let i=n.parent;for(;i&&i.parent;)I_(i.parent.vnode)&&I1(r,e,n,i),i=i.parent}}function I1(t,e,n,r){const i=Pc(e,t,r,!0);T_(()=>{Rh(r[e],i)},n)}function Pc(t,e,n=Ye,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ji(),Li(n);const a=Qt(e,n,t,o);return $r(),Zi(),a});return r?i.unshift(s):i.push(s),s}}const jn=t=>(e,n=Ye)=>(!Ys||t==="sp")&&Pc(t,(...r)=>e(...r),n),b1=jn("bm"),jh=jn("m"),T1=jn("bu"),A1=jn("u"),R1=jn("bum"),T_=jn("um"),S1=jn("sp"),P1=jn("rtg"),C1=jn("rtc");function k1(t,e=Ye){Pc("ec",t,e)}function Ks(t,e,n,r){let i;const s=n&&n[r];if(G(t)||He(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Se(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const _u=t=>t?M_(t)?xc(t)||t.proxy:_u(t.parent):null,Cs=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_u(t.parent),$root:t=>_u(t.root),$emit:t=>t.emit,$options:t=>Bh(t),$forceUpdate:t=>t.f||(t.f=()=>Uh(t.update)),$nextTick:t=>t.n||(t.n=Fh.bind(t.proxy)),$watch:t=>v1.bind(t)}),Pl=(t,e)=>t!==Pe&&!t.__isScriptSetup&&de(t,e),x1={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Pl(r,e))return o[e]=1,r[e];if(i!==Pe&&de(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,s[e];if(n!==Pe&&de(n,e))return o[e]=4,n[e];yu&&(o[e]=0)}}const u=Cs[e];let h,f;if(u)return e==="$attrs"&&Rt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&de(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Pl(i,e)?(i[e]=n,!0):r!==Pe&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Pe&&de(t,o)||Pl(e,o)||(a=s[0])&&de(a,o)||de(r,o)||de(Cs,o)||de(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Hd(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yu=!0;function O1(t){const e=Bh(t),n=t.proxy,r=t.ctx;yu=!1,e.beforeCreate&&Wd(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:b,beforeDestroy:y,beforeUnmount:w,destroyed:O,unmounted:k,render:z,renderTracked:oe,renderTriggered:ae,errorCaptured:ie,serverPrefetch:Q,expose:Ie,inheritAttrs:at,components:St,directives:Vt,filters:Rr}=e;if(l&&N1(l,r,null),o)for(const Te in o){const ye=o[Te];ne(ye)&&(r[Te]=ye.bind(n))}if(i){const Te=i.call(n,n);Se(Te)&&(t.data=Ro(Te))}if(yu=!0,s)for(const Te in s){const ye=s[Te],bn=ne(ye)?ye.bind(n,n):ne(ye.get)?ye.get.bind(n,n):dn,zn=!ne(ye)&&ne(ye.set)?ye.set.bind(n):dn,rn=Qe({get:bn,set:zn});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>rn.value,set:wt=>rn.value=wt})}if(a)for(const Te in a)A_(a[Te],r,n,Te);if(c){const Te=ne(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(ye=>{Sa(ye,Te[ye])})}u&&Wd(u,t,"c");function me(Te,ye){G(ye)?ye.forEach(bn=>Te(bn.bind(n))):ye&&Te(ye.bind(n))}if(me(b1,h),me(jh,f),me(T1,d),me(A1,g),me(w1,v),me(E1,b),me(k1,ie),me(C1,oe),me(P1,ae),me(R1,w),me(T_,k),me(S1,Q),G(Ie))if(Ie.length){const Te=t.exposed||(t.exposed={});Ie.forEach(ye=>{Object.defineProperty(Te,ye,{get:()=>n[ye],set:bn=>n[ye]=bn})})}else t.exposed||(t.exposed={});z&&t.render===dn&&(t.render=z),at!=null&&(t.inheritAttrs=at),St&&(t.components=St),Vt&&(t.directives=Vt)}function N1(t,e,n=dn){G(t)&&(t=vu(t));for(const r in t){const i=t[r];let s;Se(i)?"default"in i?s=Ut(i.from||r,i.default,!0):s=Ut(i.from||r):s=Ut(i),Fe(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Wd(t,e,n){Qt(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function A_(t,e,n,r){const i=r.includes(".")?E_(n,r):()=>n[r];if(He(t)){const s=e[t];ne(s)&&sr(i,s)}else if(ne(t))sr(i,t.bind(n));else if(Se(t))if(G(t))t.forEach(s=>A_(s,e,n,r));else{const s=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(s)&&sr(i,s,t)}}function Bh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Ha(c,l,o,!0)),Ha(c,e,o)),Se(e)&&s.set(e,c),c}function Ha(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ha(t,s,n,!0),i&&i.forEach(o=>Ha(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=D1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const D1={data:Kd,props:Gd,emits:Gd,methods:vs,computed:vs,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:vs,directives:vs,watch:V1,provide:Kd,inject:M1};function Kd(t,e){return e?t?function(){return ot(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function M1(t,e){return vs(vu(t),vu(e))}function vu(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function vs(t,e){return t?ot(Object.create(null),t,e):e}function Gd(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:ot(Object.create(null),Hd(t),Hd(e??{})):e}function V1(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function R_(){return{app:null,config:{isNativeTag:_E,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let L1=0;function F1(t,e){return function(r,i=null){ne(r)||(r=ot({},r)),i!=null&&!Se(i)&&(i=null);const s=R_(),o=new WeakSet;let a=!1;const c=s.app={_uid:L1++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:hI,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(c,...u)):ne(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const f=ce(r,i);return f.appContext=s,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,xc(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){Gs=c;try{return l()}finally{Gs=null}}};return c}}let Gs=null;function Sa(t,e){if(Ye){let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[t]=e}}function Ut(t,e,n=!1){const r=Ye||kt;if(r||Gs){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Gs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(r&&r.proxy):e}}function U1(){return!!(Ye||kt||Gs)}function $1(t,e,n,r=!1){const i={},s={};$a(s,kc,1),t.propsDefaults=Object.create(null),S_(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:a_(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function j1(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=pe(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Rc(t.emitsOptions,f))continue;const d=e[f];if(c)if(de(s,f))d!==s[f]&&(s[f]=d,l=!0);else{const g=vn(f);i[g]=wu(c,a,g,d,t,!1)}else d!==s[f]&&(s[f]=d,l=!0)}}}else{S_(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=Xi(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=wu(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!de(e,h))&&(delete s[h],l=!0)}l&&xn(t,"set","$attrs")}function S_(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ta(c))continue;const l=e[c];let u;i&&de(i,u=vn(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Rc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=pe(n),l=a||Pe;for(let u=0;u<s.length;u++){const h=s[u];n[h]=wu(i,c,h,l[h],t,!de(l,h))}}return o}function wu(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ne(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Li(i),r=l[n]=c.call(null,e),$r())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Xi(n))&&(r=!0))}return r}function P_(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ne(t)){const u=h=>{c=!0;const[f,d]=P_(h,e,!0);ot(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return Se(t)&&r.set(t,Ri),Ri;if(G(s))for(let u=0;u<s.length;u++){const h=vn(s[u]);Qd(h)&&(o[h]=Pe)}else if(s)for(const u in s){const h=vn(u);if(Qd(h)){const f=s[u],d=o[h]=G(f)||ne(f)?{type:f}:ot({},f);if(d){const g=Jd(Boolean,d.type),v=Jd(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||de(d,"default"))&&a.push(h)}}}const l=[o,a];return Se(t)&&r.set(t,l),l}function Qd(t){return t[0]!=="$"}function Yd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Xd(t,e){return Yd(t)===Yd(e)}function Jd(t,e){return G(e)?e.findIndex(n=>Xd(n,t)):ne(e)&&Xd(e,t)?0:-1}const C_=t=>t[0]==="_"||t==="$stable",zh=t=>G(t)?t.map(an):[an(t)],B1=(t,e,n)=>{if(e._n)return e;const r=On((...i)=>zh(e(...i)),n);return r._c=!1,r},k_=(t,e,n)=>{const r=t._ctx;for(const i in t){if(C_(i))continue;const s=t[i];if(ne(s))e[i]=B1(i,s,r);else if(s!=null){const o=zh(s);e[i]=()=>o}}},x_=(t,e)=>{const n=zh(e);t.slots.default=()=>n},z1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),$a(e,"_",n)):k_(e,t.slots={})}else t.slots={},e&&x_(t,e);$a(t.slots,kc,1)},q1=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Pe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(ot(i,e),!n&&a===1&&delete i._):(s=!e.$stable,k_(e,i)),o=e}else e&&(x_(t,e),o={default:1});if(s)for(const a in i)!C_(a)&&o[a]==null&&delete i[a]};function Eu(t,e,n,r,i=!1){if(G(t)){t.forEach((f,d)=>Eu(f,e&&(G(e)?e[d]:e),n,r,i));return}if(Ra(r)&&!i)return;const s=r.shapeFlag&4?xc(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(He(l)?(u[l]=null,de(h,l)&&(h[l]=null)):Fe(l)&&(l.value=null)),ne(c))ir(c,a,12,[o,u]);else{const f=He(c),d=Fe(c);if(f||d){const g=()=>{if(t.f){const v=f?de(h,c)?h[c]:u[c]:c.value;i?G(v)&&Rh(v,s):G(v)?v.includes(s)||v.push(s):f?(u[c]=[s],de(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,de(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,It(g,n)):g()}}}const It=y1;function H1(t){return W1(t)}function W1(t,e){const n=fu();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=dn,insertStaticContent:g}=t,v=(p,m,_,I=null,A=null,S=null,V=!1,x=null,N=!!m.dynamicChildren)=>{if(p===m)return;p&&!ds(p,m)&&(I=T(p),wt(p,A,S,!0),p=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:C,ref:W,shapeFlag:j}=m;switch(C){case Cc:b(p,m,_,I);break;case Wr:y(p,m,_,I);break;case Cl:p==null&&w(m,_,I,V);break;case Ge:St(p,m,_,I,A,S,V,x,N);break;default:j&1?z(p,m,_,I,A,S,V,x,N):j&6?Vt(p,m,_,I,A,S,V,x,N):(j&64||j&128)&&C.process(p,m,_,I,A,S,V,x,N,D)}W!=null&&A&&Eu(W,p&&p.ref,S,m||p,!m)},b=(p,m,_,I)=>{if(p==null)r(m.el=a(m.children),_,I);else{const A=m.el=p.el;m.children!==p.children&&l(A,m.children)}},y=(p,m,_,I)=>{p==null?r(m.el=c(m.children||""),_,I):m.el=p.el},w=(p,m,_,I)=>{[p.el,p.anchor]=g(p.children,m,_,I,p.el,p.anchor)},O=({el:p,anchor:m},_,I)=>{let A;for(;p&&p!==m;)A=f(p),r(p,_,I),p=A;r(m,_,I)},k=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=f(p),i(p),p=_;i(m)},z=(p,m,_,I,A,S,V,x,N)=>{V=V||m.type==="svg",p==null?oe(m,_,I,A,S,V,x,N):Q(p,m,A,S,V,x,N)},oe=(p,m,_,I,A,S,V,x)=>{let N,C;const{type:W,props:j,shapeFlag:K,transition:ee,dirs:le}=p;if(N=p.el=o(p.type,S,j&&j.is,j),K&8?u(N,p.children):K&16&&ie(p.children,N,null,I,A,S&&W!=="foreignObject",V,x),le&&Sr(p,null,I,"created"),ae(N,p,p.scopeId,V,I),j){for(const be in j)be!=="value"&&!Ta(be)&&s(N,be,null,j[be],S,p.children,I,A,ct);"value"in j&&s(N,"value",null,j.value),(C=j.onVnodeBeforeMount)&&on(C,I,p)}le&&Sr(p,null,I,"beforeMount");const Ae=K1(A,ee);Ae&&ee.beforeEnter(N),r(N,m,_),((C=j&&j.onVnodeMounted)||Ae||le)&&It(()=>{C&&on(C,I,p),Ae&&ee.enter(N),le&&Sr(p,null,I,"mounted")},A)},ae=(p,m,_,I,A)=>{if(_&&d(p,_),I)for(let S=0;S<I.length;S++)d(p,I[S]);if(A){let S=A.subTree;if(m===S){const V=A.vnode;ae(p,V,V.scopeId,V.slotScopeIds,A.parent)}}},ie=(p,m,_,I,A,S,V,x,N=0)=>{for(let C=N;C<p.length;C++){const W=p[C]=x?Qn(p[C]):an(p[C]);v(null,W,m,_,I,A,S,V,x)}},Q=(p,m,_,I,A,S,V)=>{const x=m.el=p.el;let{patchFlag:N,dynamicChildren:C,dirs:W}=m;N|=p.patchFlag&16;const j=p.props||Pe,K=m.props||Pe;let ee;_&&Pr(_,!1),(ee=K.onVnodeBeforeUpdate)&&on(ee,_,m,p),W&&Sr(m,p,_,"beforeUpdate"),_&&Pr(_,!0);const le=A&&m.type!=="foreignObject";if(C?Ie(p.dynamicChildren,C,x,_,I,le,S):V||ye(p,m,x,null,_,I,le,S,!1),N>0){if(N&16)at(x,m,j,K,_,I,A);else if(N&2&&j.class!==K.class&&s(x,"class",null,K.class,A),N&4&&s(x,"style",j.style,K.style,A),N&8){const Ae=m.dynamicProps;for(let be=0;be<Ae.length;be++){const $e=Ae[be],qt=j[$e],pi=K[$e];(pi!==qt||$e==="value")&&s(x,$e,qt,pi,A,p.children,_,I,ct)}}N&1&&p.children!==m.children&&u(x,m.children)}else!V&&C==null&&at(x,m,j,K,_,I,A);((ee=K.onVnodeUpdated)||W)&&It(()=>{ee&&on(ee,_,m,p),W&&Sr(m,p,_,"updated")},I)},Ie=(p,m,_,I,A,S,V)=>{for(let x=0;x<m.length;x++){const N=p[x],C=m[x],W=N.el&&(N.type===Ge||!ds(N,C)||N.shapeFlag&70)?h(N.el):_;v(N,C,W,null,I,A,S,V,!0)}},at=(p,m,_,I,A,S,V)=>{if(_!==I){if(_!==Pe)for(const x in _)!Ta(x)&&!(x in I)&&s(p,x,_[x],null,V,m.children,A,S,ct);for(const x in I){if(Ta(x))continue;const N=I[x],C=_[x];N!==C&&x!=="value"&&s(p,x,C,N,V,m.children,A,S,ct)}"value"in I&&s(p,"value",_.value,I.value)}},St=(p,m,_,I,A,S,V,x,N)=>{const C=m.el=p?p.el:a(""),W=m.anchor=p?p.anchor:a("");let{patchFlag:j,dynamicChildren:K,slotScopeIds:ee}=m;ee&&(x=x?x.concat(ee):ee),p==null?(r(C,_,I),r(W,_,I),ie(m.children,_,W,A,S,V,x,N)):j>0&&j&64&&K&&p.dynamicChildren?(Ie(p.dynamicChildren,K,_,A,S,V,x),(m.key!=null||A&&m===A.subTree)&&O_(p,m,!0)):ye(p,m,_,W,A,S,V,x,N)},Vt=(p,m,_,I,A,S,V,x,N)=>{m.slotScopeIds=x,p==null?m.shapeFlag&512?A.ctx.activate(m,_,I,V,N):Rr(m,_,I,A,S,V,N):Lt(p,m,N)},Rr=(p,m,_,I,A,S,V)=>{const x=p.component=nI(p,I,A);if(I_(p)&&(x.ctx.renderer=D),rI(x),x.asyncDep){if(A&&A.registerDep(x,me),!p.el){const N=x.subTree=ce(Wr);y(null,N,m,_)}return}me(x,p,m,_,A,S,V)},Lt=(p,m,_)=>{const I=m.component=p.component;if(d1(p,m,_))if(I.asyncDep&&!I.asyncResolved){Te(I,m,_);return}else I.next=m,a1(I.update),I.update();else m.el=p.el,I.vnode=m},me=(p,m,_,I,A,S,V)=>{const x=()=>{if(p.isMounted){let{next:W,bu:j,u:K,parent:ee,vnode:le}=p,Ae=W,be;Pr(p,!1),W?(W.el=le.el,Te(p,W,V)):W=le,j&&Aa(j),(be=W.props&&W.props.onVnodeBeforeUpdate)&&on(be,ee,W,le),Pr(p,!0);const $e=Sl(p),qt=p.subTree;p.subTree=$e,v(qt,$e,h(qt.el),T(qt),p,A,S),W.el=$e.el,Ae===null&&p1(p,$e.el),K&&It(K,A),(be=W.props&&W.props.onVnodeUpdated)&&It(()=>on(be,ee,W,le),A)}else{let W;const{el:j,props:K}=m,{bm:ee,m:le,parent:Ae}=p,be=Ra(m);if(Pr(p,!1),ee&&Aa(ee),!be&&(W=K&&K.onVnodeBeforeMount)&&on(W,Ae,m),Pr(p,!0),j&&ve){const $e=()=>{p.subTree=Sl(p),ve(j,p.subTree,p,A,null)};be?m.type.__asyncLoader().then(()=>!p.isUnmounted&&$e()):$e()}else{const $e=p.subTree=Sl(p);v(null,$e,_,I,p,A,S),m.el=$e.el}if(le&&It(le,A),!be&&(W=K&&K.onVnodeMounted)){const $e=m;It(()=>on(W,Ae,$e),A)}(m.shapeFlag&256||Ae&&Ra(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&It(p.a,A),p.isMounted=!0,m=_=I=null}},N=p.effect=new Oh(x,()=>Uh(C),p.scope),C=p.update=()=>N.run();C.id=p.uid,Pr(p,!0),C()},Te=(p,m,_)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,j1(p,m.props,I,_),q1(p,m.children,_),Ji(),Bd(p),Zi()},ye=(p,m,_,I,A,S,V,x,N=!1)=>{const C=p&&p.children,W=p?p.shapeFlag:0,j=m.children,{patchFlag:K,shapeFlag:ee}=m;if(K>0){if(K&128){zn(C,j,_,I,A,S,V,x,N);return}else if(K&256){bn(C,j,_,I,A,S,V,x,N);return}}ee&8?(W&16&&ct(C,A,S),j!==C&&u(_,j)):W&16?ee&16?zn(C,j,_,I,A,S,V,x,N):ct(C,A,S,!0):(W&8&&u(_,""),ee&16&&ie(j,_,I,A,S,V,x,N))},bn=(p,m,_,I,A,S,V,x,N)=>{p=p||Ri,m=m||Ri;const C=p.length,W=m.length,j=Math.min(C,W);let K;for(K=0;K<j;K++){const ee=m[K]=N?Qn(m[K]):an(m[K]);v(p[K],ee,_,null,A,S,V,x,N)}C>W?ct(p,A,S,!0,!1,j):ie(m,_,I,A,S,V,x,N,j)},zn=(p,m,_,I,A,S,V,x,N)=>{let C=0;const W=m.length;let j=p.length-1,K=W-1;for(;C<=j&&C<=K;){const ee=p[C],le=m[C]=N?Qn(m[C]):an(m[C]);if(ds(ee,le))v(ee,le,_,null,A,S,V,x,N);else break;C++}for(;C<=j&&C<=K;){const ee=p[j],le=m[K]=N?Qn(m[K]):an(m[K]);if(ds(ee,le))v(ee,le,_,null,A,S,V,x,N);else break;j--,K--}if(C>j){if(C<=K){const ee=K+1,le=ee<W?m[ee].el:I;for(;C<=K;)v(null,m[C]=N?Qn(m[C]):an(m[C]),_,le,A,S,V,x,N),C++}}else if(C>K)for(;C<=j;)wt(p[C],A,S,!0),C++;else{const ee=C,le=C,Ae=new Map;for(C=le;C<=K;C++){const Pt=m[C]=N?Qn(m[C]):an(m[C]);Pt.key!=null&&Ae.set(Pt.key,C)}let be,$e=0;const qt=K-le+1;let pi=!1,kd=0;const fs=new Array(qt);for(C=0;C<qt;C++)fs[C]=0;for(C=ee;C<=j;C++){const Pt=p[C];if($e>=qt){wt(Pt,A,S,!0);continue}let sn;if(Pt.key!=null)sn=Ae.get(Pt.key);else for(be=le;be<=K;be++)if(fs[be-le]===0&&ds(Pt,m[be])){sn=be;break}sn===void 0?wt(Pt,A,S,!0):(fs[sn-le]=C+1,sn>=kd?kd=sn:pi=!0,v(Pt,m[sn],_,null,A,S,V,x,N),$e++)}const xd=pi?G1(fs):Ri;for(be=xd.length-1,C=qt-1;C>=0;C--){const Pt=le+C,sn=m[Pt],Od=Pt+1<W?m[Pt+1].el:I;fs[C]===0?v(null,sn,_,Od,A,S,V,x,N):pi&&(be<0||C!==xd[be]?rn(sn,_,Od,2):be--)}}},rn=(p,m,_,I,A=null)=>{const{el:S,type:V,transition:x,children:N,shapeFlag:C}=p;if(C&6){rn(p.component.subTree,m,_,I);return}if(C&128){p.suspense.move(m,_,I);return}if(C&64){V.move(p,m,_,D);return}if(V===Ge){r(S,m,_);for(let j=0;j<N.length;j++)rn(N[j],m,_,I);r(p.anchor,m,_);return}if(V===Cl){O(p,m,_);return}if(I!==2&&C&1&&x)if(I===0)x.beforeEnter(S),r(S,m,_),It(()=>x.enter(S),A);else{const{leave:j,delayLeave:K,afterLeave:ee}=x,le=()=>r(S,m,_),Ae=()=>{j(S,()=>{le(),ee&&ee()})};K?K(S,le,Ae):Ae()}else r(S,m,_)},wt=(p,m,_,I=!1,A=!1)=>{const{type:S,props:V,ref:x,children:N,dynamicChildren:C,shapeFlag:W,patchFlag:j,dirs:K}=p;if(x!=null&&Eu(x,null,_,p,!0),W&256){m.ctx.deactivate(p);return}const ee=W&1&&K,le=!Ra(p);let Ae;if(le&&(Ae=V&&V.onVnodeBeforeUnmount)&&on(Ae,m,p),W&6)Jo(p.component,_,I);else{if(W&128){p.suspense.unmount(_,I);return}ee&&Sr(p,null,m,"beforeUnmount"),W&64?p.type.remove(p,m,_,A,D,I):C&&(S!==Ge||j>0&&j&64)?ct(C,m,_,!1,!0):(S===Ge&&j&384||!A&&W&16)&&ct(N,m,_),I&&fi(p)}(le&&(Ae=V&&V.onVnodeUnmounted)||ee)&&It(()=>{Ae&&on(Ae,m,p),ee&&Sr(p,null,m,"unmounted")},_)},fi=p=>{const{type:m,el:_,anchor:I,transition:A}=p;if(m===Ge){di(_,I);return}if(m===Cl){k(p);return}const S=()=>{i(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:V,delayLeave:x}=A,N=()=>V(_,S);x?x(p.el,S,N):N()}else S()},di=(p,m)=>{let _;for(;p!==m;)_=f(p),i(p),p=_;i(m)},Jo=(p,m,_)=>{const{bum:I,scope:A,update:S,subTree:V,um:x}=p;I&&Aa(I),A.stop(),S&&(S.active=!1,wt(V,p,m,_)),x&&It(x,m),It(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ct=(p,m,_,I=!1,A=!1,S=0)=>{for(let V=S;V<p.length;V++)wt(p[V],m,_,I,A)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),F=(p,m,_)=>{p==null?m._vnode&&wt(m._vnode,null,null,!0):v(m._vnode||null,p,m,null,null,null,_),Bd(),g_(),m._vnode=p},D={p:v,um:wt,m:rn,r:fi,mt:Rr,mc:ie,pc:ye,pbc:Ie,n:T,o:t};let q,ve;return e&&([q,ve]=e(D)),{render:F,hydrate:q,createApp:F1(F,q)}}function Pr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function K1(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function O_(t,e,n=!1){const r=t.children,i=e.children;if(G(r)&&G(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Qn(i[s]),a.el=o.el),n||O_(o,a)),a.type===Cc&&(a.el=o.el)}}function G1(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Q1=t=>t.__isTeleport,Ge=Symbol.for("v-fgt"),Cc=Symbol.for("v-txt"),Wr=Symbol.for("v-cmt"),Cl=Symbol.for("v-stc"),ks=[];let Wt=null;function te(t=!1){ks.push(Wt=t?null:[])}function Y1(){ks.pop(),Wt=ks[ks.length-1]||null}let Qs=1;function Zd(t){Qs+=t}function N_(t){return t.dynamicChildren=Qs>0?Wt||Ri:null,Y1(),Qs>0&&Wt&&Wt.push(t),t}function _e(t,e,n,r,i,s){return N_(E(t,e,n,r,i,s,!0))}function Kt(t,e,n,r,i){return N_(ce(t,e,n,r,i,!0))}function Iu(t){return t?t.__v_isVNode===!0:!1}function ds(t,e){return t.type===e.type&&t.key===e.key}const kc="__vInternal",D_=({key:t})=>t??null,Pa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Fe(t)||ne(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function E(t,e=null,n=null,r=0,i=null,s=t===Ge?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&D_(e),ref:e&&Pa(e),scopeId:Sc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kt};return a?(qh(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Qs>0&&!o&&Wt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Wt.push(c),c}const ce=X1;function X1(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===m1)&&(t=Wr),Iu(t)){const a=Vi(t,e,!0);return n&&qh(a,n),Qs>0&&!s&&Wt&&(a.shapeFlag&6?Wt[Wt.indexOf(t)]=a:Wt.push(a)),a.patchFlag|=-2,a}if(cI(t)&&(t=t.__vccOpts),e){e=J1(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=Ph(a)),Se(c)&&(l_(c)&&!G(c)&&(c=ot({},c)),e.style=Ao(c))}const o=He(t)?1:_1(t)?128:Q1(t)?64:Se(t)?4:ne(t)?2:0;return E(t,e,n,r,i,o,s,!0)}function J1(t){return t?l_(t)||kc in t?ot({},t):t:null}function Vi(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Z1(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&D_(a),ref:e&&e.ref?n&&i?G(i)?i.concat(Pa(e)):[i,Pa(e)]:Pa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vi(t.ssContent),ssFallback:t.ssFallback&&Vi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function $t(t=" ",e=0){return ce(Cc,null,t,e)}function rt(t="",e=!1){return e?(te(),Kt(Wr,null,t)):ce(Wr,null,t)}function an(t){return t==null||typeof t=="boolean"?ce(Wr):G(t)?ce(Ge,null,t.slice()):typeof t=="object"?Qn(t):ce(Cc,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vi(t)}function qh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),qh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(kc in e)?e._ctx=kt:i===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[$t(e)]):n=8);t.children=e,t.shapeFlag|=n}function Z1(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Ph([e.class,r.class]));else if(i==="style")e.style=Ao([e.style,r.style]);else if(wc(i)){const s=e[i],o=r[i];o&&s!==o&&!(G(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function on(t,e,n,r=null){Qt(t,e,7,[n,r])}const eI=R_();let tI=0;function nI(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||eI,s={uid:tI++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P_(r,i),emitsOptions:y_(r,i),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=u1.bind(null,s),t.ce&&t.ce(s),s}let Ye=null,Hh,mi,ep="__VUE_INSTANCE_SETTERS__";(mi=fu()[ep])||(mi=fu()[ep]=[]),mi.push(t=>Ye=t),Hh=t=>{mi.length>1?mi.forEach(e=>e(t)):mi[0](t)};const Li=t=>{Hh(t),t.scope.on()},$r=()=>{Ye&&Ye.scope.off(),Hh(null)};function M_(t){return t.vnode.shapeFlag&4}let Ys=!1;function rI(t,e=!1){Ys=e;const{props:n,children:r}=t.vnode,i=M_(t);$1(t,n,i,e),z1(t,r);const s=i?iI(t,e):void 0;return Ys=!1,s}function iI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Tc(new Proxy(t.ctx,x1));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?oI(t):null;Li(t),Ji();const s=ir(r,t,0,[t.props,i]);if(Zi(),$r(),zg(s)){if(s.then($r,$r),e)return s.then(o=>{tp(t,o,e)}).catch(o=>{Ac(o,t,0)});t.asyncDep=s}else tp(t,s,e)}else V_(t,e)}function tp(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=d_(e)),V_(t,n)}let np;function V_(t,e,n){const r=t.type;if(!t.render){if(!e&&np&&!r.render){const i=r.template||Bh(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ot(ot({isCustomElement:s,delimiters:a},o),c);r.render=np(i,l)}}t.render=r.render||dn}{Li(t),Ji();try{O1(t)}finally{Zi(),$r()}}}function sI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}}))}function oI(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return sI(t)},slots:t.slots,emit:t.emit,expose:e}}function xc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(d_(Tc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cs)return Cs[n](t)},has(e,n){return n in e||n in Cs}}))}function aI(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function cI(t){return ne(t)&&"__vccOpts"in t}const Qe=(t,e)=>i1(t,e,Ys);function Wh(t,e,n){const r=arguments.length;return r===2?Se(e)&&!G(e)?Iu(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Iu(n)&&(n=[n]),ce(t,e,n))}const lI=Symbol.for("v-scx"),uI=()=>Ut(lI),hI="3.3.11",fI="http://www.w3.org/2000/svg",xr=typeof document<"u"?document:null,rp=xr&&xr.createElement("template"),dI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?xr.createElementNS(fI,t):xr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>xr.createTextNode(t),createComment:t=>xr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{rp.innerHTML=r?`<svg>${t}</svg>`:t;const a=rp.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pI=Symbol("_vtc");function mI(t,e,n){const r=t[pI];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gI=Symbol("_vod");function _I(t,e,n){const r=t.style,i=He(n);if(n&&!i){if(e&&!He(e))for(const s in e)n[s]==null&&bu(r,s,"");for(const s in n)bu(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),gI in t&&(r.display=s)}}const ip=/\s*!important$/;function bu(t,e,n){if(G(n))n.forEach(r=>bu(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yI(t,e);ip.test(n)?t.setProperty(Xi(r),n.replace(ip,""),"important"):t[r]=n}}const sp=["Webkit","Moz","ms"],kl={};function yI(t,e){const n=kl[e];if(n)return n;let r=vn(e);if(r!=="filter"&&r in t)return kl[e]=r;r=Ic(r);for(let i=0;i<sp.length;i++){const s=sp[i]+r;if(s in t)return kl[e]=s}return e}const op="http://www.w3.org/1999/xlink";function vI(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(op,e.slice(6,e.length)):t.setAttributeNS(op,e,n);else{const s=SE(e);n==null||s&&!Wg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function wI(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Wg(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Rn(t,e,n,r){t.addEventListener(e,n,r)}function EI(t,e,n,r){t.removeEventListener(e,n,r)}const ap=Symbol("_vei");function II(t,e,n,r,i=null){const s=t[ap]||(t[ap]={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=bI(e);if(r){const l=s[e]=RI(r,i);Rn(t,a,l,c)}else o&&(EI(t,a,o,c),s[e]=void 0)}}const cp=/(?:Once|Passive|Capture)$/;function bI(t){let e;if(cp.test(t)){e={};let r;for(;r=t.match(cp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xi(t.slice(2)),e]}let xl=0;const TI=Promise.resolve(),AI=()=>xl||(TI.then(()=>xl=0),xl=Date.now());function RI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt(SI(r,n.value),e,5,[r])};return n.value=t,n.attached=AI(),n}function SI(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const lp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,PI=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?mI(t,r,i):e==="style"?_I(t,n,r):wc(e)?Ah(e)||II(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):CI(t,e,r,i))?wI(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),vI(t,e,r,i))};function CI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&lp(e)&&ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return lp(e)&&He(n)?!1:e in t}const fr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Aa(e,n):e};function kI(t){t.target.composing=!0}function up(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jt=Symbol("_assign"),wn={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[jt]=fr(i);const s=r||i.props&&i.props.type==="number";Rn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=ja(a)),t[jt](a)}),n&&Rn(t,"change",()=>{t.value=t.value.trim()}),e||(Rn(t,"compositionstart",kI),Rn(t,"compositionend",up),Rn(t,"change",up))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t[jt]=fr(s),t.composing)return;const o=i||t.type==="number"?ja(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Kh={deep:!0,created(t,e,n){t[jt]=fr(n),Rn(t,"change",()=>{const r=t._modelValue,i=Fi(t),s=t.checked,o=t[jt];if(G(r)){const a=Ch(r,i),c=a!==-1;if(s&&!c)o(r.concat(i));else if(!s&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Yi(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(F_(t,s))})},mounted:hp,beforeUpdate(t,e,n){t[jt]=fr(n),hp(t,e,n)}};function hp(t,{value:e,oldValue:n},r){t._modelValue=e,G(e)?t.checked=Ch(e,r.props.value)>-1:Yi(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Hr(e,F_(t,!0)))}const xI={created(t,{value:e},n){t.checked=Hr(e,n.props.value),t[jt]=fr(n),Rn(t,"change",()=>{t[jt](Fi(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[jt]=fr(r),e!==n&&(t.checked=Hr(e,r.props.value))}},L_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Yi(e);Rn(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ja(Fi(o)):Fi(o));t[jt](t.multiple?i?new Set(s):s:s[0])}),t[jt]=fr(r)},mounted(t,{value:e}){fp(t,e)},beforeUpdate(t,e,n){t[jt]=fr(n)},updated(t,{value:e}){fp(t,e)}};function fp(t,e){const n=t.multiple;if(!(n&&!G(e)&&!Yi(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=Fi(s);if(n)G(e)?s.selected=Ch(e,o)>-1:s.selected=e.has(o);else if(Hr(Fi(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fi(t){return"_value"in t?t._value:t.value}function F_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Tu={created(t,e,n){sa(t,e,n,null,"created")},mounted(t,e,n){sa(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){sa(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){sa(t,e,n,r,"updated")}};function OI(t,e){switch(t){case"SELECT":return L_;case"TEXTAREA":return wn;default:switch(e){case"checkbox":return Kh;case"radio":return xI;default:return wn}}}function sa(t,e,n,r,i){const o=OI(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,r)}const NI=["ctrl","shift","alt","meta"],DI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>NI.some(n=>t[`${n}Key`]&&!e.includes(n))},U_=(t,e)=>t._withMods||(t._withMods=(n,...r)=>{for(let i=0;i<e.length;i++){const s=DI[e[i]];if(s&&s(n,e))return}return t(n,...r)}),MI=ot({patchProp:PI},dI);let dp;function VI(){return dp||(dp=H1(MI))}const LI=(...t)=>{const e=VI().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=FI(r);if(!i)return;const s=e._component;!ne(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function FI(t){return He(t)?document.querySelector(t):t}var UI=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let $_;const Oc=t=>$_=t,j_=Symbol();function Au(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xs||(xs={}));function $I(){const t=Qg(!0),e=t.run(()=>se({}));let n=[],r=[];const i=Tc({install(s){Oc(i),i._a=s,s.provide(j_,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!UI?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const B_=()=>{};function pp(t,e,n,r=B_){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&kh()&&Yg(i),i}function gi(t,...e){t.slice().forEach(n=>{n(...e)})}const jI=t=>t();function Ru(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Au(i)&&Au(r)&&t.hasOwnProperty(n)&&!Fe(r)&&!rr(r)?t[n]=Ru(i,r):t[n]=r}return t}const BI=Symbol();function zI(t){return!Au(t)||!t.hasOwnProperty(BI)}const{assign:Gn}=Object;function qI(t){return!!(Fe(t)&&t.effect)}function HI(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=i?i():{});const u=e1(n.state.value[t]);return Gn(u,s,Object.keys(o||{}).reduce((h,f)=>(h[f]=Tc(Qe(()=>{Oc(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=z_(t,l,e,n,r,!0),c}function z_(t,e,n={},r,i,s){let o;const a=Gn({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],d;const g=r.state.value[t];!s&&!g&&(r.state.value[t]={}),se({});let v;function b(ie){let Q;l=u=!1,typeof ie=="function"?(ie(r.state.value[t]),Q={type:xs.patchFunction,storeId:t,events:d}):(Ru(r.state.value[t],ie),Q={type:xs.patchObject,payload:ie,storeId:t,events:d});const Ie=v=Symbol();Fh().then(()=>{v===Ie&&(l=!0)}),u=!0,gi(h,Q,r.state.value[t])}const y=s?function(){const{state:Q}=n,Ie=Q?Q():{};this.$patch(at=>{Gn(at,Ie)})}:B_;function w(){o.stop(),h=[],f=[],r._s.delete(t)}function O(ie,Q){return function(){Oc(r);const Ie=Array.from(arguments),at=[],St=[];function Vt(me){at.push(me)}function Rr(me){St.push(me)}gi(f,{args:Ie,name:ie,store:z,after:Vt,onError:Rr});let Lt;try{Lt=Q.apply(this&&this.$id===t?this:z,Ie)}catch(me){throw gi(St,me),me}return Lt instanceof Promise?Lt.then(me=>(gi(at,me),me)).catch(me=>(gi(St,me),Promise.reject(me))):(gi(at,Lt),Lt)}}const k={_p:r,$id:t,$onAction:pp.bind(null,f),$patch:b,$reset:y,$subscribe(ie,Q={}){const Ie=pp(h,ie,Q.detached,()=>at()),at=o.run(()=>sr(()=>r.state.value[t],St=>{(Q.flush==="sync"?u:l)&&ie({storeId:t,type:xs.direct,events:d},St)},Gn({},c,Q)));return Ie},$dispose:w},z=Ro(k);r._s.set(t,z);const ae=(r._a&&r._a.runWithContext||jI)(()=>r._e.run(()=>(o=Qg()).run(e)));for(const ie in ae){const Q=ae[ie];if(Fe(Q)&&!qI(Q)||rr(Q))s||(g&&zI(Q)&&(Fe(Q)?Q.value=g[ie]:Ru(Q,g[ie])),r.state.value[t][ie]=Q);else if(typeof Q=="function"){const Ie=O(ie,Q);ae[ie]=Ie,a.actions[ie]=Q}}return Gn(z,ae),Gn(pe(z),ae),Object.defineProperty(z,"$state",{get:()=>r.state.value[t],set:ie=>{b(Q=>{Gn(Q,ie)})}}),r._p.forEach(ie=>{Gn(z,o.run(()=>ie({store:z,app:r._a,pinia:r,options:a})))}),g&&s&&n.hydrate&&n.hydrate(z.$state,g),l=!0,u=!0,z}function WI(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const l=U1();return a=a||(l?Ut(j_,null):null),a&&Oc(a),a=$_,a._s.has(r)||(s?z_(r,e,i,a):HI(r,i,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const yi=typeof window<"u";function KI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Ol(t,e){const n={};for(const r in e){const i=e[r];n[r]=Xt(i)?i.map(t):t(i)}return n}const Os=()=>{},Xt=Array.isArray,GI=/\/$/,QI=t=>t.replace(GI,"");function Nl(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ZI(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function YI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function XI(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ui(e.matched[r],n.matched[i])&&q_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ui(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function q_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!JI(t[n],e[n]))return!1;return!0}function JI(t,e){return Xt(t)?gp(t,e):Xt(e)?gp(e,t):t===e}function gp(t,e){return Xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ZI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Xs;(function(t){t.pop="pop",t.push="push"})(Xs||(Xs={}));var Ns;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ns||(Ns={}));function eb(t){if(!t)if(yi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QI(t)}const tb=/^[^#]+#/;function nb(t,e){return t.replace(tb,"#")+e}function rb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Nc=()=>({left:window.pageXOffset,top:window.pageYOffset});function ib(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=rb(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _p(t,e){return(history.state?history.state.position-e:-1)+t}const Su=new Map;function sb(t,e){Su.set(t,e)}function ob(t){const e=Su.get(t);return Su.delete(t),e}let ab=()=>location.protocol+"//"+location.host;function H_(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),mp(c,"")}return mp(n,t)+r+i}function cb(t,e,n,r){let i=[],s=[],o=null;const a=({state:f})=>{const d=H_(t,location),g=n.value,v=e.value;let b=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}b=v?f.position-v.position:0}else r(d);i.forEach(y=>{y(n.value,g,{delta:b,type:Xs.pop,direction:b?b>0?Ns.forward:Ns.back:Ns.unknown})})};function c(){o=n.value}function l(f){i.push(f);const d=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(we({},f.state,{scroll:Nc()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function yp(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Nc():null}}function lb(t){const{history:e,location:n}=window,r={value:H_(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:ab()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=we({},e.state,yp(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=we({},i.value,e.state,{forward:c,scroll:Nc()});s(u.current,u,!0);const h=we({},yp(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function ub(t){t=eb(t);const e=lb(t),n=cb(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=we({location:"",base:t,go:r,createHref:nb.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function hb(t){return typeof t=="string"||t&&typeof t=="object"}function W_(t){return typeof t=="string"||typeof t=="symbol"}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K_=Symbol("");var vp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vp||(vp={}));function $i(t,e){return we(new Error,{type:t,[K_]:!0},e)}function Tn(t,e){return t instanceof Error&&K_ in t&&(e==null||!!(t.type&e))}const wp="[^/]+?",fb={sensitive:!1,strict:!1,start:!0,end:!0},db=/[.+*?^${}()[\]/\\]/g;function pb(t,e){const n=we({},fb,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(db,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:v,optional:b,regexp:y}=f;s.push({name:g,repeatable:v,optional:b});const w=y||wp;if(w!==wp){d+=10;try{new RegExp(`(${w})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+k.message)}}let O=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(O=b&&l.length<2?`(?:/${O})`:"/"+O),b&&(O+="?"),i+=O,d+=20,b&&(d+=-8),v&&(d+=-20),w===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=s[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:b}=d,y=g in l?l[g]:"";if(Xt(y)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Xt(y)?y.join("/"):y;if(!w)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function mb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gb(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=mb(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Ep(r))return 1;if(Ep(i))return-1}return i.length-r.length}function Ep(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _b={type:0,value:""},yb=/[a-zA-Z0-9_]/;function vb(t){if(!t)return[[]];if(t==="/")return[[_b]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:yb.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function wb(t,e,n){const r=pb(vb(t.path),n),i=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Eb(t,e){const n=[],r=new Map;e=Tp({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,f){const d=!f,g=Ib(u);g.aliasOf=f&&f.record;const v=Tp(e,u),b=[g];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of O)b.push(we({},g,{components:f?f.record.components:g.components,path:k,aliasOf:f?f.record:g}))}let y,w;for(const O of b){const{path:k}=O;if(h&&k[0]!=="/"){const z=h.record.path,oe=z[z.length-1]==="/"?"":"/";O.path=h.record.path+(k&&oe+k)}if(y=wb(O,h,v),f?f.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),d&&u.name&&!bp(y)&&o(u.name)),g.children){const z=g.children;for(let oe=0;oe<z.length;oe++)s(z[oe],y,f&&f.children[oe])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return w?()=>{o(w)}:Os}function o(u){if(W_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&gb(u,n[h])>=0&&(u.record.path!==n[h].record.path||!G_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!bp(u)&&r.set(u.record.name,u)}function l(u,h){let f,d={},g,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw $i(1,{location:u});v=f.record.name,d=we(Ip(h.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&Ip(u.params,f.keys.map(w=>w.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=n.find(w=>w.re.test(g)),f&&(d=f.parse(g),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!f)throw $i(1,{location:u,currentLocation:h});v=f.record.name,d=we({},h.params,u.params),g=f.stringify(d)}const b=[];let y=f;for(;y;)b.unshift(y.record),y=y.parent;return{name:v,path:g,params:d,matched:b,meta:Tb(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ip(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ib(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function bp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Tb(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Tp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function G_(t,e){return e.children.some(n=>n===t||G_(t,n))}const Q_=/#/g,Ab=/&/g,Rb=/\//g,Sb=/=/g,Pb=/\?/g,Y_=/\+/g,Cb=/%5B/g,kb=/%5D/g,X_=/%5E/g,xb=/%60/g,J_=/%7B/g,Ob=/%7C/g,Z_=/%7D/g,Nb=/%20/g;function Gh(t){return encodeURI(""+t).replace(Ob,"|").replace(Cb,"[").replace(kb,"]")}function Db(t){return Gh(t).replace(J_,"{").replace(Z_,"}").replace(X_,"^")}function Pu(t){return Gh(t).replace(Y_,"%2B").replace(Nb,"+").replace(Q_,"%23").replace(Ab,"%26").replace(xb,"`").replace(J_,"{").replace(Z_,"}").replace(X_,"^")}function Mb(t){return Pu(t).replace(Sb,"%3D")}function Vb(t){return Gh(t).replace(Q_,"%23").replace(Pb,"%3F")}function Lb(t){return t==null?"":Vb(t).replace(Rb,"%2F")}function Wa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Fb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Y_," "),o=s.indexOf("="),a=Wa(o<0?s:s.slice(0,o)),c=o<0?null:Wa(s.slice(o+1));if(a in e){let l=e[a];Xt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ap(t){let e="";for(let n in t){const r=t[n];if(n=Mb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xt(r)?r.map(s=>s&&Pu(s)):[r&&Pu(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Ub(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const $b=Symbol(""),Rp=Symbol(""),Dc=Symbol(""),Qh=Symbol(""),Cu=Symbol("");function ps(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Yn(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a($i(4,{from:n,to:e})):h instanceof Error?a(h):hb(h)?a($i(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Dl(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(jb(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Yn(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=KI(l)?l.default:l;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Yn(f,n,r,s,o)()}))}}return i}function jb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sp(t){const e=Ut(Dc),n=Ut(Qh),r=Qe(()=>e.resolve(Ve(t.to))),i=Qe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ui.bind(null,u));if(f>-1)return f;const d=Pp(c[l-2]);return l>1&&Pp(u)===d&&h[h.length-1].path!==d?h.findIndex(Ui.bind(null,c[l-2])):f}),s=Qe(()=>i.value>-1&&qb(n.params,r.value.params)),o=Qe(()=>i.value>-1&&i.value===n.matched.length-1&&q_(n.params,r.value.params));function a(c={}){return zb(c)?e[Ve(t.replace)?"replace":"push"](Ve(t.to)).catch(Os):Promise.resolve()}return{route:r,href:Qe(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const Bb=$h({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sp,setup(t,{slots:e}){const n=Ro(Sp(t)),{options:r}=Ut(Dc),i=Qe(()=>({[Cp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Wh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),dr=Bb;function zb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qb(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Xt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Pp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cp=(t,e,n)=>t??e??n,Hb=$h({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ut(Cu),i=Qe(()=>t.route||r.value),s=Ut(Rp,0),o=Qe(()=>{let l=Ve(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Qe(()=>i.value.matched[o.value]);Sa(Rp,Qe(()=>o.value+1)),Sa($b,a),Sa(Cu,i);const c=se();return sr(()=>[c.value,a.value,t.name],([l,u,h],[f,d,g])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Ui(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return kp(n.default,{Component:f,route:l});const d=h.props[u],g=d?d===!0?l.params:typeof d=="function"?d(l):d:null,b=Wh(f,we({},g,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return kp(n.default,{Component:b,route:l})||b}}});function kp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ey=Hb;function Wb(t){const e=Eb(t.routes,t),n=t.parseQuery||Fb,r=t.stringifyQuery||Ap,i=t.history,s=ps(),o=ps(),a=ps(),c=XE(Hn);let l=Hn;yi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ol.bind(null,T=>""+T),h=Ol.bind(null,Lb),f=Ol.bind(null,Wa);function d(T,F){let D,q;return W_(T)?(D=e.getRecordMatcher(T),q=F):q=T,e.addRoute(q,D)}function g(T){const F=e.getRecordMatcher(T);F&&e.removeRoute(F)}function v(){return e.getRoutes().map(T=>T.record)}function b(T){return!!e.getRecordMatcher(T)}function y(T,F){if(F=we({},F||c.value),typeof T=="string"){const _=Nl(n,T,F.path),I=e.resolve({path:_.path},F),A=i.createHref(_.fullPath);return we(_,I,{params:f(I.params),hash:Wa(_.hash),redirectedFrom:void 0,href:A})}let D;if("path"in T)D=we({},T,{path:Nl(n,T.path,F.path).path});else{const _=we({},T.params);for(const I in _)_[I]==null&&delete _[I];D=we({},T,{params:h(_)}),F.params=h(F.params)}const q=e.resolve(D,F),ve=T.hash||"";q.params=u(f(q.params));const p=YI(r,we({},T,{hash:Db(ve),path:q.path})),m=i.createHref(p);return we({fullPath:p,hash:ve,query:r===Ap?Ub(T.query):T.query||{}},q,{redirectedFrom:void 0,href:m})}function w(T){return typeof T=="string"?Nl(n,T,c.value.path):we({},T)}function O(T,F){if(l!==T)return $i(8,{from:F,to:T})}function k(T){return ae(T)}function z(T){return k(we(w(T),{replace:!0}))}function oe(T){const F=T.matched[T.matched.length-1];if(F&&F.redirect){const{redirect:D}=F;let q=typeof D=="function"?D(T):D;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=w(q):{path:q},q.params={}),we({query:T.query,hash:T.hash,params:"path"in q?{}:T.params},q)}}function ae(T,F){const D=l=y(T),q=c.value,ve=T.state,p=T.force,m=T.replace===!0,_=oe(D);if(_)return ae(we(w(_),{state:typeof _=="object"?we({},ve,_.state):ve,force:p,replace:m}),F||D);const I=D;I.redirectedFrom=F;let A;return!p&&XI(r,q,D)&&(A=$i(16,{to:I,from:q}),rn(q,q,!0,!1)),(A?Promise.resolve(A):Ie(I,q)).catch(S=>Tn(S)?Tn(S,2)?S:zn(S):ye(S,I,q)).then(S=>{if(S){if(Tn(S,2))return ae(we({replace:m},w(S.to),{state:typeof S.to=="object"?we({},ve,S.to.state):ve,force:p}),F||I)}else S=St(I,q,!0,m,ve);return at(I,q,S),S})}function ie(T,F){const D=O(T,F);return D?Promise.reject(D):Promise.resolve()}function Q(T){const F=di.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(T):T()}function Ie(T,F){let D;const[q,ve,p]=Kb(T,F);D=Dl(q.reverse(),"beforeRouteLeave",T,F);for(const _ of q)_.leaveGuards.forEach(I=>{D.push(Yn(I,T,F))});const m=ie.bind(null,T,F);return D.push(m),ct(D).then(()=>{D=[];for(const _ of s.list())D.push(Yn(_,T,F));return D.push(m),ct(D)}).then(()=>{D=Dl(ve,"beforeRouteUpdate",T,F);for(const _ of ve)_.updateGuards.forEach(I=>{D.push(Yn(I,T,F))});return D.push(m),ct(D)}).then(()=>{D=[];for(const _ of p)if(_.beforeEnter)if(Xt(_.beforeEnter))for(const I of _.beforeEnter)D.push(Yn(I,T,F));else D.push(Yn(_.beforeEnter,T,F));return D.push(m),ct(D)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),D=Dl(p,"beforeRouteEnter",T,F),D.push(m),ct(D))).then(()=>{D=[];for(const _ of o.list())D.push(Yn(_,T,F));return D.push(m),ct(D)}).catch(_=>Tn(_,8)?_:Promise.reject(_))}function at(T,F,D){a.list().forEach(q=>Q(()=>q(T,F,D)))}function St(T,F,D,q,ve){const p=O(T,F);if(p)return p;const m=F===Hn,_=yi?history.state:{};D&&(q||m?i.replace(T.fullPath,we({scroll:m&&_&&_.scroll},ve)):i.push(T.fullPath,ve)),c.value=T,rn(T,F,D,m),zn()}let Vt;function Rr(){Vt||(Vt=i.listen((T,F,D)=>{if(!Jo.listening)return;const q=y(T),ve=oe(q);if(ve){ae(we(ve,{replace:!0}),q).catch(Os);return}l=q;const p=c.value;yi&&sb(_p(p.fullPath,D.delta),Nc()),Ie(q,p).catch(m=>Tn(m,12)?m:Tn(m,2)?(ae(m.to,q).then(_=>{Tn(_,20)&&!D.delta&&D.type===Xs.pop&&i.go(-1,!1)}).catch(Os),Promise.reject()):(D.delta&&i.go(-D.delta,!1),ye(m,q,p))).then(m=>{m=m||St(q,p,!1),m&&(D.delta&&!Tn(m,8)?i.go(-D.delta,!1):D.type===Xs.pop&&Tn(m,20)&&i.go(-1,!1)),at(q,p,m)}).catch(Os)}))}let Lt=ps(),me=ps(),Te;function ye(T,F,D){zn(T);const q=me.list();return q.length?q.forEach(ve=>ve(T,F,D)):console.error(T),Promise.reject(T)}function bn(){return Te&&c.value!==Hn?Promise.resolve():new Promise((T,F)=>{Lt.add([T,F])})}function zn(T){return Te||(Te=!T,Rr(),Lt.list().forEach(([F,D])=>T?D(T):F()),Lt.reset()),T}function rn(T,F,D,q){const{scrollBehavior:ve}=t;if(!yi||!ve)return Promise.resolve();const p=!D&&ob(_p(T.fullPath,0))||(q||!D)&&history.state&&history.state.scroll||null;return Fh().then(()=>ve(T,F,p)).then(m=>m&&ib(m)).catch(m=>ye(m,T,F))}const wt=T=>i.go(T);let fi;const di=new Set,Jo={currentRoute:c,listening:!0,addRoute:d,removeRoute:g,hasRoute:b,getRoutes:v,resolve:y,options:t,push:k,replace:z,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:bn,install(T){const F=this;T.component("RouterLink",dr),T.component("RouterView",ey),T.config.globalProperties.$router=F,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(c)}),yi&&!fi&&c.value===Hn&&(fi=!0,k(i.location).catch(ve=>{}));const D={};for(const ve in Hn)Object.defineProperty(D,ve,{get:()=>c.value[ve],enumerable:!0});T.provide(Dc,F),T.provide(Qh,a_(D)),T.provide(Cu,c);const q=T.unmount;di.add(T),T.unmount=function(){di.delete(T),di.size<1&&(l=Hn,Vt&&Vt(),Vt=null,c.value=Hn,fi=!1,Te=!1),q()}}};function ct(T){return T.reduce((F,D)=>F.then(()=>Q(D)),Promise.resolve())}return Jo}function Kb(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ui(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ui(l,c))||i.push(c))}return[n,r,i]}function Gb(){return Ut(Dc)}function ty(){return Ut(Qh)}var xp={};/**
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
 */const ny=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ry={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ny(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new Yb;const f=s<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xb=function(t){const e=ny(t);return ry.encodeByteArray(e,!0)},Ka=function(t){return Xb(t).replace(/\./g,"")},iy=function(t){try{return ry.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Jb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zb=()=>Jb().__FIREBASE_DEFAULTS__,eT=()=>{if(typeof process>"u"||typeof xp>"u")return;const t=xp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&iy(t[1]);return e&&JSON.parse(e)},Yh=()=>{try{return Zb()||eT()||tT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sy=t=>{var e,n;return(n=(e=Yh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nT=t=>{const e=sy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},oy=()=>{var t;return(t=Yh())===null||t===void 0?void 0:t.config},ay=t=>{var e;return(e=Yh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function iT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ka(JSON.stringify(n)),Ka(JSON.stringify(o)),a].join(".")}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function cy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aT(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ly(){try{return typeof indexedDB=="object"}catch{return!1}}function uy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function cT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const lT="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lT,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function uT(t,e){return t.replace(hT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hT=/\{\$([^}]+)}/g;function fT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Js(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Op(s)&&Op(o)){if(!Js(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Op(t){return t!==null&&typeof t=="object"}/**
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
 */function So(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Es(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dT(t,e){const n=new pT(t,e);return n.subscribe.bind(n)}class pT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ml),i.error===void 0&&(i.error=Ml),i.complete===void 0&&(i.complete=Ml);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ml(){}/**
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
 */const gT=1e3,_T=2,yT=4*60*60*1e3,vT=.5;function Np(t,e=gT,n=_T){const r=e*Math.pow(n,t),i=Math.round(vT*r*(Math.random()-.5)*2);return Math.min(yT,r+i)}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cr="[DEFAULT]";/**
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
 */class wT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IT(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ET(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ET(t){return t===Cr?void 0:t}function IT(t){return t.instantiationMode==="EAGER"}/**
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
 */class bT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const TT={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},AT=he.INFO,RT={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},ST=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=AT,this._logHandler=ST,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const PT=(t,e)=>e.some(n=>t instanceof n);let Dp,Mp;function CT(){return Dp||(Dp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kT(){return Mp||(Mp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hy=new WeakMap,ku=new WeakMap,fy=new WeakMap,Vl=new WeakMap,Xh=new WeakMap;function xT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hy.set(n,t)}).catch(()=>{}),Xh.set(e,t),e}function OT(t){if(ku.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ku.set(t,e)}let xu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ku.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NT(t){xu=t(xu)}function DT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ll(this),e,...n);return fy.set(r,e.sort?e.sort():[e]),or(r)}:kT().includes(t)?function(...e){return t.apply(Ll(this),e),or(hy.get(this))}:function(...e){return or(t.apply(Ll(this),e))}}function MT(t){return typeof t=="function"?DT(t):(t instanceof IDBTransaction&&OT(t),PT(t,CT())?new Proxy(t,xu):t)}function or(t){if(t instanceof IDBRequest)return xT(t);if(Vl.has(t))return Vl.get(t);const e=MT(t);return e!==t&&(Vl.set(t,e),Xh.set(e,t)),e}const Ll=t=>Xh.get(t);function VT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",c=>{r(or(o.result),c.oldVersion,c.newVersion,or(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const LT=["get","getKey","getAll","getAllKeys","count"],FT=["put","add","delete","clear"],Fl=new Map;function Vp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fl.get(e))return Fl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LT.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Fl.set(e,s),s}NT(t=>({...t,get:(e,n,r)=>Vp(e,n)||t.get(e,n,r),has:(e,n)=>!!Vp(e,n)||t.has(e,n)}));/**
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
 */class UT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($T(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $T(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ou="@firebase/app",Lp="0.9.25";/**
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
 */const Kr=new Mc("@firebase/app"),jT="@firebase/app-compat",BT="@firebase/analytics-compat",zT="@firebase/analytics",qT="@firebase/app-check-compat",HT="@firebase/app-check",WT="@firebase/auth",KT="@firebase/auth-compat",GT="@firebase/database",QT="@firebase/database-compat",YT="@firebase/functions",XT="@firebase/functions-compat",JT="@firebase/installations",ZT="@firebase/installations-compat",eA="@firebase/messaging",tA="@firebase/messaging-compat",nA="@firebase/performance",rA="@firebase/performance-compat",iA="@firebase/remote-config",sA="@firebase/remote-config-compat",oA="@firebase/storage",aA="@firebase/storage-compat",cA="@firebase/firestore",lA="@firebase/firestore-compat",uA="firebase",hA="10.7.1";/**
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
 */const Nu="[DEFAULT]",fA={[Ou]:"fire-core",[jT]:"fire-core-compat",[zT]:"fire-analytics",[BT]:"fire-analytics-compat",[HT]:"fire-app-check",[qT]:"fire-app-check-compat",[WT]:"fire-auth",[KT]:"fire-auth-compat",[GT]:"fire-rtdb",[QT]:"fire-rtdb-compat",[YT]:"fire-fn",[XT]:"fire-fn-compat",[JT]:"fire-iid",[ZT]:"fire-iid-compat",[eA]:"fire-fcm",[tA]:"fire-fcm-compat",[nA]:"fire-perf",[rA]:"fire-perf-compat",[iA]:"fire-rc",[sA]:"fire-rc-compat",[oA]:"fire-gcs",[aA]:"fire-gcs-compat",[cA]:"fire-fst",[lA]:"fire-fst-compat","fire-js":"fire-js",[uA]:"fire-js-all"};/**
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
 */const Ga=new Map,Du=new Map;function dA(t,e){try{t.container.addComponent(e)}catch(n){Kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(Du.has(e))return Kr.debug(`There were multiple attempts to register component ${e}.`),!1;Du.set(e,t);for(const n of Ga.values())dA(n,t);return!0}function ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ar=new oi("app","Firebase",pA);/**
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
 */class mA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const ns=hA;function dy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=oy()),!n)throw ar.create("no-options");const s=Ga.get(i);if(s){if(Js(n,s.options)&&Js(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new bT(i);for(const c of Du.values())o.addComponent(c);const a=new mA(n,r,o);return Ga.set(i,a),a}function Jh(t=Nu){const e=Ga.get(t);if(!e&&t===Nu&&oy())return dy();if(!e)throw ar.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let i=(r=fA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kr.warn(a.join(" "));return}En(new Jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gA="firebase-heartbeat-database",_A=1,Zs="firebase-heartbeat-store";let Ul=null;function py(){return Ul||(Ul=VT(gA,_A,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zs)}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),Ul}async function yA(t){try{return await(await py()).transaction(Zs).objectStore(Zs).get(my(t))}catch(e){if(e instanceof nn)Kr.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kr.warn(n.message)}}}async function Fp(t,e){try{const r=(await py()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,my(t)),await r.done}catch(n){if(n instanceof nn)Kr.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kr.warn(r.message)}}}function my(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vA=1024,wA=30*24*60*60*1e3;class EA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Up();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Up(),{heartbeatsToSend:r,unsentEntries:i}=IA(this._heartbeatsCache.heartbeats),s=Ka(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Up(){return new Date().toISOString().substring(0,10)}function IA(t,e=vA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$p(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$p(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ly()?uy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $p(t){return Ka(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TA(t){En(new Jt("platform-logger",e=>new UT(e),"PRIVATE")),En(new Jt("heartbeat",e=>new EA(e),"PRIVATE")),Bt(Ou,Lp,t),Bt(Ou,Lp,"esm2017"),Bt("fire-js","")}TA("");var AA="firebase",RA="10.7.1";/**
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
 */Bt(AA,RA,"app");const SA=(t,e)=>e.some(n=>t instanceof n);let jp,Bp;function PA(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CA(){return Bp||(Bp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gy=new WeakMap,Mu=new WeakMap,_y=new WeakMap,$l=new WeakMap,Zh=new WeakMap;function kA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gy.set(n,t)}).catch(()=>{}),Zh.set(e,t),e}function xA(t){if(Mu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mu.set(t,e)}let Vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_y.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OA(t){Vu=t(Vu)}function NA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jl(this),e,...n);return _y.set(r,e.sort?e.sort():[e]),cr(r)}:CA().includes(t)?function(...e){return t.apply(jl(this),e),cr(gy.get(this))}:function(...e){return cr(t.apply(jl(this),e))}}function DA(t){return typeof t=="function"?NA(t):(t instanceof IDBTransaction&&xA(t),SA(t,PA())?new Proxy(t,Vu):t)}function cr(t){if(t instanceof IDBRequest)return kA(t);if($l.has(t))return $l.get(t);const e=DA(t);return e!==t&&($l.set(t,e),Zh.set(e,t)),e}const jl=t=>Zh.get(t);function MA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(cr(o.result),c.oldVersion,c.newVersion,cr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const VA=["get","getKey","getAll","getAllKeys","count"],LA=["put","add","delete","clear"],Bl=new Map;function zp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bl.get(e))return Bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=LA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||VA.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Bl.set(e,s),s}OA(t=>({...t,get:(e,n,r)=>zp(e,n)||t.get(e,n,r),has:(e,n)=>!!zp(e,n)||t.has(e,n)}));const yy="@firebase/installations",ef="0.6.4";/**
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
 */const vy=1e4,wy=`w:${ef}`,Ey="FIS_v2",FA="https://firebaseinstallations.googleapis.com/v1",UA=60*60*1e3,$A="installations",jA="Installations";/**
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
 */const BA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Gr=new oi($A,jA,BA);function Iy(t){return t instanceof nn&&t.code.includes("request-failed")}/**
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
 */function by({projectId:t}){return`${FA}/projects/${t}/installations`}function Ty(t){return{token:t.token,requestStatus:2,expiresIn:qA(t.expiresIn),creationTime:Date.now()}}async function Ay(t,e){const r=(await e.json()).error;return Gr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ry({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zA(t,{refreshToken:e}){const n=Ry(t);return n.append("Authorization",HA(e)),n}async function Sy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function qA(t){return Number(t.replace("s","000"))}function HA(t){return`${Ey} ${t}`}/**
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
 */async function WA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=by(t),i=Ry(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Ey,appId:t.appId,sdkVersion:wy},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Sy(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ty(l.authToken)}}else throw await Ay("Create Installation",c)}/**
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
 */function Py(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function KA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const GA=/^[cdef][\w-]{21}$/,Lu="";function QA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=YA(t);return GA.test(n)?n:Lu}catch{return Lu}}function YA(t){return KA(t).substr(0,22)}/**
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
 */function Vc(t){return`${t.appName}!${t.appId}`}/**
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
 */const Cy=new Map;function ky(t,e){const n=Vc(t);xy(n,e),XA(n,e)}function xy(t,e){const n=Cy.get(t);if(n)for(const r of n)r(e)}function XA(t,e){const n=JA();n&&n.postMessage({key:t,fid:e}),ZA()}let Nr=null;function JA(){return!Nr&&"BroadcastChannel"in self&&(Nr=new BroadcastChannel("[Firebase] FID Change"),Nr.onmessage=t=>{xy(t.data.key,t.data.fid)}),Nr}function ZA(){Cy.size===0&&Nr&&(Nr.close(),Nr=null)}/**
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
 */const eR="firebase-installations-database",tR=1,Qr="firebase-installations-store";let zl=null;function tf(){return zl||(zl=MA(eR,tR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qr)}}})),zl}async function Qa(t,e){const n=Vc(t),i=(await tf()).transaction(Qr,"readwrite"),s=i.objectStore(Qr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ky(t,e.fid),e}async function Oy(t){const e=Vc(t),r=(await tf()).transaction(Qr,"readwrite");await r.objectStore(Qr).delete(e),await r.done}async function Lc(t,e){const n=Vc(t),i=(await tf()).transaction(Qr,"readwrite"),s=i.objectStore(Qr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ky(t,a.fid),a}/**
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
 */async function nf(t){let e;const n=await Lc(t.appConfig,r=>{const i=nR(r),s=rR(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Lu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function nR(t){const e=t||{fid:QA(),registrationStatus:0};return Ny(e)}function rR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Gr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=iR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sR(t)}:{installationEntry:e}}async function iR(t,e){try{const n=await WA(t,e);return Qa(t.appConfig,n)}catch(n){throw Iy(n)&&n.customData.serverCode===409?await Oy(t.appConfig):await Qa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sR(t){let e=await qp(t.appConfig);for(;e.registrationStatus===1;)await Py(100),e=await qp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await nf(t);return r||n}return e}function qp(t){return Lc(t,e=>{if(!e)throw Gr.create("installation-not-found");return Ny(e)})}function Ny(t){return oR(t)?{fid:t.fid,registrationStatus:0}:t}function oR(t){return t.registrationStatus===1&&t.registrationTime+vy<Date.now()}/**
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
 */async function aR({appConfig:t,heartbeatServiceProvider:e},n){const r=cR(t,n),i=zA(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:wy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Sy(()=>fetch(r,a));if(c.ok){const l=await c.json();return Ty(l)}else throw await Ay("Generate Auth Token",c)}function cR(t,{fid:e}){return`${by(t)}/${e}/authTokens:generate`}/**
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
 */async function rf(t,e=!1){let n;const r=await Lc(t.appConfig,s=>{if(!Dy(s))throw Gr.create("not-registered");const o=s.authToken;if(!e&&hR(o))return s;if(o.requestStatus===1)return n=lR(t,e),s;{if(!navigator.onLine)throw Gr.create("app-offline");const a=dR(s);return n=uR(t,a),a}});return n?await n:r.authToken}async function lR(t,e){let n=await Hp(t.appConfig);for(;n.authToken.requestStatus===1;)await Py(100),n=await Hp(t.appConfig);const r=n.authToken;return r.requestStatus===0?rf(t,e):r}function Hp(t){return Lc(t,e=>{if(!Dy(e))throw Gr.create("not-registered");const n=e.authToken;return pR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function uR(t,e){try{const n=await aR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Qa(t.appConfig,r),n}catch(n){if(Iy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Oy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qa(t.appConfig,r)}throw n}}function Dy(t){return t!==void 0&&t.registrationStatus===2}function hR(t){return t.requestStatus===2&&!fR(t)}function fR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+UA}function dR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function pR(t){return t.requestStatus===1&&t.requestTime+vy<Date.now()}/**
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
 */async function mR(t){const e=t,{installationEntry:n,registrationPromise:r}=await nf(e);return r?r.catch(console.error):rf(e).catch(console.error),n.fid}/**
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
 */async function gR(t,e=!1){const n=t;return await _R(n),(await rf(n,e)).token}async function _R(t){const{registrationPromise:e}=await nf(t);e&&await e}/**
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
 */function yR(t){if(!t||!t.options)throw ql("App Configuration");if(!t.name)throw ql("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ql(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ql(t){return Gr.create("missing-app-config-values",{valueName:t})}/**
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
 */const My="installations",vR="installations-internal",wR=t=>{const e=t.getProvider("app").getImmediate(),n=yR(e),r=ai(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ER=t=>{const e=t.getProvider("app").getImmediate(),n=ai(e,My).getImmediate();return{getId:()=>mR(n),getToken:i=>gR(n,i)}};function IR(){En(new Jt(My,wR,"PUBLIC")),En(new Jt(vR,ER,"PRIVATE"))}IR();Bt(yy,ef);Bt(yy,ef,"esm2017");/**
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
 */const Ya="analytics",bR="firebase_id",TR="origin",AR=60*1e3,RR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",sf="https://www.googletagmanager.com/gtag/js";/**
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
 */const At=new Mc("@firebase/analytics");/**
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
 */const SR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new oi("analytics","Analytics",SR);/**
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
 */function PR(t){if(!t.startsWith(sf)){const e=Nt.create("invalid-gtag-resource",{gtagURL:t});return At.warn(e.message),""}return t}function Vy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function CR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function kR(t,e){const n=CR("firebase-js-sdk-policy",{createScriptURL:PR}),r=document.createElement("script"),i=`${sf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function xR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function OR(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await Vy(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){At.error(a)}t("config",i,s)}async function NR(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Vy(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){At.error(s)}}function DR(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await NR(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await OR(t,e,n,r,a,c)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){At.error(a)}}return i}function MR(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=DR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function VR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(sf)&&n.src.includes(t))return n;return null}/**
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
 */const LR=30,FR=1e3;class UR{constructor(e={},n=FR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ly=new UR;function $R(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function jR(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:$R(r)},s=RR.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function BR(t,e=Ly,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new HR;return setTimeout(async()=>{a.abort()},n!==void 0?n:AR),Fy({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Fy(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Ly){var s;const{appId:o,measurementId:a}=t;try{await zR(r,e)}catch(c){if(a)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await jR(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!qR(l)){if(i.deleteThrottleMetadata(o),a)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Np(n,i.intervalMillis,LR):Np(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),At.debug(`Calling attemptFetch again in ${u} millis`),Fy(t,h,r,i)}}function zR(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function qR(t){if(!(t instanceof nn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class HR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function WR(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function KR(){if(ly())try{await uy()}catch(t){return At.warn(Nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return At.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GR(t,e,n,r,i,s,o){var a;const c=BR(t);c.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>At.error(d)),e.push(c);const l=KR().then(d=>{if(d)return r.getId()}),[u,h]=await Promise.all([c,l]);VR(s)||kR(s,u.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[TR]="firebase",f.update=!0,h!=null&&(f[bR]=h),i("config",u.measurementId,f),u.measurementId}/**
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
 */class QR{constructor(e){this.app=e}_delete(){return delete Ds[this.app.options.appId],Promise.resolve()}}let Ds={},Wp=[];const Kp={};let Hl="dataLayer",YR="gtag",Gp,Uy,Qp=!1;function XR(){const t=[];if(cy()&&t.push("This is a browser extension environment."),cT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Nt.create("invalid-analytics-context",{errorInfo:e});At.warn(n.message)}}function JR(t,e,n){XR();const r=t.options.appId;if(!r)throw Nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(Ds[r]!=null)throw Nt.create("already-exists",{id:r});if(!Qp){xR(Hl);const{wrappedGtag:s,gtagCore:o}=MR(Ds,Wp,Kp,Hl,YR);Uy=s,Gp=o,Qp=!0}return Ds[r]=GR(t,Wp,Kp,e,Gp,Hl,n),new QR(t)}function ZR(t=Jh()){t=Ue(t);const e=ai(t,Ya);return e.isInitialized()?e.getImmediate():eS(t)}function eS(t,e={}){const n=ai(t,Ya);if(n.isInitialized()){const i=n.getImmediate();if(Js(e,n.getOptions()))return i;throw Nt.create("already-initialized")}return n.initialize({options:e})}function tS(t,e,n,r){t=Ue(t),WR(Uy,Ds[t.app.options.appId],e,n,r).catch(i=>At.error(i))}const Yp="@firebase/analytics",Xp="0.10.0";function nS(){En(new Jt(Ya,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return JR(r,i,n)},"PUBLIC")),En(new Jt("analytics-internal",t,"PRIVATE")),Bt(Yp,Xp),Bt(Yp,Xp,"esm2017");function t(e){try{const n=e.getProvider(Ya).getImmediate();return{logEvent:(r,i,s)=>tS(n,r,i,s)}}catch(n){throw Nt.create("interop-component-reg-failed",{reason:n})}}}nS();function of(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $y(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rS=$y,jy=new oi("auth","Firebase",$y());/**
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
 */const Xa=new Mc("@firebase/auth");function iS(t,...e){Xa.logLevel<=he.WARN&&Xa.warn(`Auth (${ns}): ${t}`,...e)}function Ca(t,...e){Xa.logLevel<=he.ERROR&&Xa.error(`Auth (${ns}): ${t}`,...e)}/**
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
 */function Zt(t,...e){throw af(t,...e)}function pn(t,...e){return af(t,...e)}function sS(t,e,n){const r=Object.assign(Object.assign({},rS()),{[e]:n});return new oi("auth","Firebase",r).create(e,{appName:t.name})}function af(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jy.create(t,...e)}function Y(t,e,...n){if(!t)throw af(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ca(e),new Error(e)}function Nn(t,e){t||Pn(e)}/**
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
 */function Fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oS(){return Jp()==="http:"||Jp()==="https:"}function Jp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oS()||cy()||"connection"in navigator)?navigator.onLine:!0}function cS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=sT()||oT()}get(){return aS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cf(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class By{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uS=new Po(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,r,i={}){return zy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=So(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),By.fetch()(qy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function zy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lS),e);try{const i=new fS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw oa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw oa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw oa(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw sS(t,u,l);Zt(t,u)}}catch(i){if(i instanceof nn)throw i;Zt(t,"network-request-failed",{message:String(i)})}}async function Co(t,e,n,r,i={}){const s=await Ir(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?cf(t.config,i):`${t.config.apiScheme}://${i}`}function hS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),uS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pn(t,e,r);return i.customData._tokenResponse=n,i}function Zp(t){return t!==void 0&&t.enterprise!==void 0}class dS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pS(t,e){return Ir(t,"GET","/v2/recaptchaConfig",Er(t,e))}/**
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
 */async function mS(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function gS(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _S(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=lf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ms(Wl(i.auth_time)),issuedAtTime:Ms(Wl(i.iat)),expirationTime:Ms(Wl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wl(t){return Number(t)*1e3}function lf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ca("JWT malformed, contained fewer than 3 sections"),null;try{const i=iy(n);return i?JSON.parse(i):(Ca("Failed to decode base64 JWT payload"),null)}catch(i){return Ca("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yS(t){const e=lf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&vS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ja(t){var e;const n=t.auth,r=await t.getIdToken(),i=await eo(t,gS(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bS(s.providerUserInfo):[],a=IS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hy(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ES(t){const e=Ue(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bS(t){return t.map(e=>{var{providerId:n}=e,r=of(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function TS(t,e){const n=await zy(t,{},async()=>{const r=So({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",By.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AS(t,e){return Ir(t,"POST","/v2/accounts:revokeToken",Er(t,e))}/**
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
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new to;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Wn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=of(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await eo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _S(this,e)}reload(){return ES(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await eo(this,mS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:k,isAnonymous:z,providerData:oe,stsTokenManager:ae}=n;Y(O&&ae,e,"internal-error");const ie=to.fromJSON(this.name,ae);Y(typeof O=="string",e,"internal-error"),Wn(h,e.name),Wn(f,e.name),Y(typeof k=="boolean",e,"internal-error"),Y(typeof z=="boolean",e,"internal-error"),Wn(d,e.name),Wn(g,e.name),Wn(v,e.name),Wn(b,e.name),Wn(y,e.name),Wn(w,e.name);const Q=new jr({uid:O,auth:e,email:f,emailVerified:k,displayName:h,isAnonymous:z,photoURL:g,phoneNumber:d,tenantId:v,stsTokenManager:ie,createdAt:y,lastLoginAt:w});return oe&&Array.isArray(oe)&&(Q.providerData=oe.map(Ie=>Object.assign({},Ie))),b&&(Q._redirectEventId=b),Q}static async _fromIdTokenResponse(e,n,r=!1){const i=new to;i.updateFromServerResponse(n);const s=new jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ja(s),s}}/**
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
 */const em=new Map;function Cn(t){Nn(t instanceof Function,"Expected a class definition");let e=em.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,em.set(t,e),e)}/**
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
 */class Wy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wy.type="NONE";const tm=Wy;/**
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
 */function ka(t,e,n){return`firebase:${t}:${e}:${n}`}class Ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ci(Cn(tm),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Cn(tm);const o=ka(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=jr._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ci(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ci(s,e,r))}}/**
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
 */function nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ky(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xy(e))return"Blackberry";if(Jy(e))return"Webos";if(uf(e))return"Safari";if((e.includes("chrome/")||Gy(e))&&!e.includes("edge/"))return"Chrome";if(Yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ky(t=mt()){return/firefox\//i.test(t)}function uf(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gy(t=mt()){return/crios\//i.test(t)}function Qy(t=mt()){return/iemobile/i.test(t)}function Yy(t=mt()){return/android/i.test(t)}function Xy(t=mt()){return/blackberry/i.test(t)}function Jy(t=mt()){return/webos/i.test(t)}function Fc(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RS(t=mt()){var e;return Fc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SS(){return aT()&&document.documentMode===10}function Zy(t=mt()){return Fc(t)||Yy(t)||Jy(t)||Xy(t)||/windows phone/i.test(t)||Qy(t)}function PS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ev(t,e=[]){let n;switch(t){case"Browser":n=nm(mt());break;case"Worker":n=`${nm(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
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
 */class CS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function kS(t,e={}){return Ir(t,"GET","/v2/passwordPolicy",Er(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const xS=6;class OS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class NS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rm(this),this.idTokenSubscription=new rm(this),this.beforeStateQueue=new CS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kS(this),n=new OS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Ci.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ci(t){return Ue(t)}class rm{constructor(e){this.auth=e,this.observer=null,this.addObserver=dT(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function DS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DS().appendChild(r)})}function MS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const VS="https://www.google.com/recaptcha/enterprise.js?render=",LS="recaptcha-enterprise",FS="NO_RECAPTCHA";class US{constructor(e){this.type=LS,this.auth=ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{pS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new dS(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Zp(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(FS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Zp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}tv(VS+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function im(t,e,n,r=!1){const i=new US(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Uu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await im(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await im(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function $S(t,e){const n=ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Js(s,e??{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function jS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BS(t,e,n){const r=ci(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=nv(e),{host:o,port:a}=zS(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qS()}function nv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zS(t){const e=nv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sm(o)}}}function sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function HS(t,e){return Ir(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function WS(t,e){return Co(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}/**
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
 */async function KS(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}async function GS(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}/**
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
 */class no extends hf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new no(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new no(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uu(e,n,"signInWithPassword",WS);case"emailLink":return KS(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uu(e,r,"signUpPassword",HS);case"emailLink":return GS(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ki(t,e){return Co(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
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
 */const QS="http://localhost";class Yr extends hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=of(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ki(e,n)}buildRequest(){const e={requestUri:QS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=So(n)}return e}}/**
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
 */function YS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XS(t){const e=ws(Es(t)).link,n=e?ws(Es(e)).deep_link_id:null,r=ws(Es(t)).deep_link_id;return(r?ws(Es(r)).link:null)||r||n||e||t}class ff{constructor(e){var n,r,i,s,o,a;const c=ws(Es(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=YS((i=c.mode)!==null&&i!==void 0?i:null);Y(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XS(e);try{return new ff(n)}catch{return null}}}/**
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
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,n){return no._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ff.parseLink(n);return Y(r,"argument-error"),no._fromEmailAndCode(e,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ko extends rv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xn extends ko{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Zn extends ko{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class er extends ko{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function JS(t,e){return Co(t,"POST","/v1/accounts:signUp",Er(t,e))}/**
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
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jr._fromIdTokenResponse(e,r,i),o=om(r);return new Xr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=om(r);return new Xr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Za extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Za.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Za(e,n,r,i)}}function iv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Za._fromErrorAndOperation(t,s,e,r):s})}async function ZS(t,e,n=!1){const r=await eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
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
 */async function eP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await eo(t,iv(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=lf(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Xr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
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
 */async function sv(t,e,n=!1){const r="signIn",i=await iv(t,r,e),s=await Xr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function tP(t,e){return sv(ci(t),e)}/**
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
 */async function ov(t){const e=ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nP(t,e,n){const r=ci(t),o=await Uu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ov(t),c}),a=await Xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function rP(t,e,n){return tP(Ue(t),rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ov(t),r})}function iP(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function sP(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function oP(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function aP(t){return Ue(t).signOut()}const ec="__sak";/**
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
 */class av{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cP(){const t=mt();return uf(t)||Fc(t)}const lP=1e3,uP=10;class cv extends av{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cP()&&PS(),this.fallbackToPolling=Zy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cv.type="LOCAL";const hP=cv;/**
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
 */class lv extends av{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lv.type="SESSION";const uv=lv;/**
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
 */function fP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await fP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
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
 */function df(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=df("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function pP(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function hv(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function mP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _P(){return hv()?self:null}/**
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
 */const fv="firebaseLocalStorageDb",yP=1,tc="firebaseLocalStorage",dv="fbase_key";class xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $c(t,e){return t.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function vP(){const t=indexedDB.deleteDatabase(fv);return new xo(t).toPromise()}function $u(){const t=indexedDB.open(fv,yP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tc,{keyPath:dv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tc)?e(r):(r.close(),await vP(),e(await $u()))})})}async function am(t,e,n){const r=$c(t,!0).put({[dv]:e,value:n});return new xo(r).toPromise()}async function wP(t,e){const n=$c(t,!1).get(e),r=await new xo(n).toPromise();return r===void 0?null:r.value}function cm(t,e){const n=$c(t,!0).delete(e);return new xo(n).toPromise()}const EP=800,IP=3;class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $u(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(_P()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mP(),!this.activeServiceWorker)return;this.sender=new dP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $u();return await am(e,ec,"1"),await cm(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>am(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$c(i,!1).getAll();return new xo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pv.type="LOCAL";const bP=pv;new Po(3e4,6e4);/**
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
 */function TP(t,e){return e?Cn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pf extends hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AP(t){return sv(t.auth,new pf(t),t.bypassAuthState)}function RP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),eP(n,new pf(t),t.bypassAuthState)}async function SP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),ZS(n,new pf(t),t.bypassAuthState)}/**
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
 */class mv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AP;case"linkViaPopup":case"linkViaRedirect":return SP;case"reauthViaPopup":case"reauthViaRedirect":return RP;default:Zt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PP=new Po(2e3,1e4);class Ii extends mv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ii.currentPopupAction&&Ii.currentPopupAction.cancel(),Ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PP.get())};e()}}Ii.currentPopupAction=null;/**
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
 */const CP="pendingRedirect",xa=new Map;class kP extends mv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xa.get(this.auth._key());if(!e){try{const r=await xP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xa.set(this.auth._key(),e)}return this.bypassAuthState||xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xP(t,e){const n=DP(e),r=NP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OP(t,e){xa.set(t._key(),e)}function NP(t){return Cn(t._redirectPersistence)}function DP(t){return ka(CP,t.config.apiKey,t.name)}async function MP(t,e,n=!1){const r=ci(t),i=TP(r,e),o=await new kP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const VP=10*60*1e3;class LP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VP&&this.cachedEventUids.clear(),this.cachedEventUids.has(lm(e))}saveEventToCache(e){this.cachedEventUids.add(lm(e)),this.lastProcessedEventTime=Date.now()}}function lm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gv(t);default:return!1}}/**
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
 */async function UP(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
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
 */const $P=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jP=/^https?/;async function BP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UP(t);for(const n of e)try{if(zP(n))return}catch{}Zt(t,"unauthorized-domain")}function zP(t){const e=Fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jP.test(n))return!1;if($P.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const qP=new Po(3e4,6e4);function um(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HP(t){return new Promise((e,n)=>{var r,i,s;function o(){um(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{um(),n(pn(t,"network-request-failed"))},timeout:qP.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const a=MS("iframefcb");return mn()[a]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},tv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Oa=null,e})}let Oa=null;function WP(t){return Oa=Oa||HP(t),Oa}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const KP=new Po(5e3,15e3),GP="__/auth/iframe",QP="emulator/auth/iframe",YP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JP(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cf(e,QP):`https://${t.config.authDomain}/${GP}`,r={apiKey:e.apiKey,appName:t.name,v:ns},i=XP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${So(r).slice(1)}`}async function ZP(t){const e=await WP(t),n=mn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:JP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},KP.get());function c(){mn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const eC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tC=500,nC=600,rC="_blank",iC="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sC(t,e,n,r=tC,i=nC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},eC),{width:r.toString(),height:i.toString(),top:s,left:o}),l=mt().toLowerCase();n&&(a=Gy(l)?rC:n),Ky(l)&&(e=e||iC,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,g])=>`${f}${d}=${g},`,"");if(RS(l)&&a!=="_self")return oC(e||"",a),new hm(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new hm(h)}function oC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aC="__/auth/handler",cC="emulator/auth/handler",lC=encodeURIComponent("fac");async function fm(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:i};if(e instanceof rv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof ko){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${lC}=${encodeURIComponent(c)}`:"";return`${uC(t)}?${So(a).slice(1)}${l}`}function uC({config:t}){return t.emulator?cf(t,cC):`https://${t.authDomain}/${aC}`}/**
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
 */const Kl="webStorageSupport";class hC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uv,this._completeRedirectFn=MP,this._overrideRedirectResult=OP}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await fm(e,n,r,Fu(),i);return sC(e,o,df())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await fm(e,n,r,Fu(),i);return pP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZP(e),r=new LP(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kl,{type:Kl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Kl];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zy()||uf()||Fc()}}const fC=hC;var dm="@firebase/auth",pm="1.5.1";/**
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
 */class dC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mC(t){En(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ev(t)},l=new NS(r,i,s,c);return jS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new Jt("auth-internal",e=>{const n=ci(e.getProvider("auth").getImmediate());return(r=>new dC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(dm,pm,pC(t)),Bt(dm,pm,"esm2017")}/**
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
 */const gC=5*60,_C=ay("authIdTokenMaxAge")||gC;let mm=null;const yC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_C)return;const i=n==null?void 0:n.token;mm!==i&&(mm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vC(t=Jh()){const e=ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$S(t,{popupRedirectResolver:fC,persistence:[bP,hP,uv]}),r=ay("authTokenSyncURL");if(r){const s=yC(r);sP(n,s,()=>s(n.currentUser)),iP(n,o=>s(o))}const i=sy("auth");return i&&BS(n,`http://${i}`),n}mC("Browser");var wC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,mf=mf||{},J=wC||self;function jc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Oo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function EC(t){return Object.prototype.hasOwnProperty.call(t,Gl)&&t[Gl]||(t[Gl]=++IC)}var Gl="closure_uid_"+(1e9*Math.random()>>>0),IC=0;function bC(t,e,n){return t.call.apply(t.bind,arguments)}function TC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=bC:dt=TC,dt.apply(null,arguments)}function aa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function br(){this.s=this.s,this.o=this.o}var AC=0;br.prototype.s=!1;br.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),AC!=0)&&EC(this)};br.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _v=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function gm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(jc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var RC=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};J.addEventListener("test",n,e),J.removeEventListener("test",n,e)}catch{}return t}();function ro(t){return/^[\s\xa0]*$/.test(t)}function Bc(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function ln(t){return Bc().indexOf(t)!=-1}function _f(t){return _f[" "](t),t}_f[" "]=function(){};function SC(t,e){var n=vk;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var PC=ln("Opera"),ji=ln("Trident")||ln("MSIE"),yv=ln("Edge"),ju=yv||ji,vv=ln("Gecko")&&!(Bc().toLowerCase().indexOf("webkit")!=-1&&!ln("Edge"))&&!(ln("Trident")||ln("MSIE"))&&!ln("Edge"),CC=Bc().toLowerCase().indexOf("webkit")!=-1&&!ln("Edge");function wv(){var t=J.document;return t?t.documentMode:void 0}var Bu;e:{var Ql="",Yl=function(){var t=Bc();if(vv)return/rv:([^\);]+)(\)|;)/.exec(t);if(yv)return/Edge\/([\d\.]+)/.exec(t);if(ji)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CC)return/WebKit\/(\S+)/.exec(t);if(PC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yl&&(Ql=Yl?Yl[1]:""),ji){var Xl=wv();if(Xl!=null&&Xl>parseFloat(Ql)){Bu=String(Xl);break e}}Bu=Ql}var zu;if(J.document&&ji){var _m=wv();zu=_m||parseInt(Bu,10)||void 0}else zu=void 0;var kC=zu;function io(t,e){if(pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vv){e:{try{_f(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&io.$.h.call(this)}}Ze(io,pt);var xC={2:"touch",3:"pen",4:"mouse"};io.prototype.h=function(){io.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var No="closure_listenable_"+(1e6*Math.random()|0),OC=0;function NC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++OC,this.fa=this.ia=!1}function zc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function yf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function DC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Ev(t){const e={};for(const n in t)e[n]=t[n];return e}const ym="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Iv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ym.length;s++)n=ym[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function qc(t){this.src=t,this.g={},this.h=0}qc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Hu(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new NC(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function qu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=_v(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(zc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hu(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var vf="closure_lm_"+(1e6*Math.random()|0),Jl={};function bv(t,e,n,r,i){if(r&&r.once)return Av(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)bv(t,e[s],n,r,i);return null}return n=If(n),t&&t[No]?t.O(e,n,Oo(r)?!!r.capture:!!r,i):Tv(t,e,n,!1,r,i)}function Tv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Oo(i)?!!i.capture:!!i,a=Ef(t);if(a||(t[vf]=a=new qc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=MC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Sv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function MC(){function t(n){return e.call(t.src,t.listener,n)}const e=VC;return t}function Av(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Av(t,e[s],n,r,i);return null}return n=If(n),t&&t[No]?t.P(e,n,Oo(r)?!!r.capture:!!r,i):Tv(t,e,n,!0,r,i)}function Rv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Rv(t,e[s],n,r,i);else r=Oo(r)?!!r.capture:!!r,n=If(n),t&&t[No]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Hu(s,n,r,i),-1<n&&(zc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ef(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hu(e,n,r,i)),(n=-1<t?e[t]:null)&&wf(n))}function wf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[No])qu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Sv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ef(e))?(qu(n,t),n.h==0&&(n.src=null,e[vf]=null)):zc(t)}}}function Sv(t){return t in Jl?Jl[t]:Jl[t]="on"+t}function VC(t,e){if(t.fa)t=!0;else{e=new io(e,this);var n=t.listener,r=t.la||t.src;t.ia&&wf(t),t=n.call(r,e)}return t}function Ef(t){return t=t[vf],t instanceof qc?t:null}var Zl="__closure_events_fn_"+(1e9*Math.random()>>>0);function If(t){return typeof t=="function"?t:(t[Zl]||(t[Zl]=function(e){return t.handleEvent(e)}),t[Zl])}function Je(){br.call(this),this.i=new qc(this),this.S=this,this.J=null}Ze(Je,br);Je.prototype[No]=!0;Je.prototype.removeEventListener=function(t,e,n,r){Rv(this,t,e,n,r)};function it(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new pt(e,t);else if(e instanceof pt)e.target=e.target||t;else{var i=e;e=new pt(r,t),Iv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ca(o,r,!0,e)&&i}if(o=e.g=t,i=ca(o,r,!0,e)&&i,i=ca(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ca(o,r,!1,e)&&i}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)zc(n[r]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ca(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&qu(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var bf=J.JSON.stringify;class LC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function FC(){var t=Tf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class UC{constructor(){this.h=this.g=null}add(e,n){const r=Pv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Pv=new LC(()=>new $C,t=>t.reset());class $C{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function BC(t){J.setTimeout(()=>{throw t},0)}let so,oo=!1,Tf=new UC,Cv=()=>{const t=J.Promise.resolve(void 0);so=()=>{t.then(zC)}};var zC=()=>{for(var t;t=FC();){try{t.h.call(t.g)}catch(n){BC(n)}var e=Pv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oo=!1};function Hc(t,e){Je.call(this),this.h=t||1,this.g=e||J,this.j=dt(this.qb,this),this.l=Date.now()}Ze(Hc,Je);M=Hc.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),it(this,"tick"),this.ga&&(Af(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Af(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Hc.$.N.call(this),Af(this),delete this.g};function Rf(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function kv(t){t.g=Rf(()=>{t.g=null,t.i&&(t.i=!1,kv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class qC extends br{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:kv(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ao(t){br.call(this),this.h=t,this.g={}}Ze(ao,br);var vm=[];function xv(t,e,n,r){Array.isArray(n)||(n&&(vm[0]=n.toString()),n=vm);for(var i=0;i<n.length;i++){var s=bv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ov(t){yf(t.g,function(e,n){this.g.hasOwnProperty(n)&&wf(e)},t),t.g={}}ao.prototype.N=function(){ao.$.N.call(this),Ov(this)};ao.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wc(){this.g=!0}Wc.prototype.Ea=function(){this.g=!1};function HC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function WC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function bi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+GC(t,n)+(r?" "+r:"")})}function KC(t,e){t.info(function(){return"TIMEOUT: "+e})}Wc.prototype.info=function(){};function GC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return bf(n)}catch{return e}}var li={},wm=null;function Kc(){return wm=wm||new Je}li.Ta="serverreachability";function Nv(t){pt.call(this,li.Ta,t)}Ze(Nv,pt);function co(t){const e=Kc();it(e,new Nv(e))}li.STAT_EVENT="statevent";function Dv(t,e){pt.call(this,li.STAT_EVENT,t),this.stat=e}Ze(Dv,pt);function yt(t){const e=Kc();it(e,new Dv(e,t))}li.Ua="timingevent";function Mv(t,e){pt.call(this,li.Ua,t),this.size=e}Ze(Mv,pt);function Do(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Gc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Vv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sf(){}Sf.prototype.h=null;function Em(t){return t.h||(t.h=t.i())}function Lv(){}var Mo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Pf(){pt.call(this,"d")}Ze(Pf,pt);function Cf(){pt.call(this,"c")}Ze(Cf,pt);var Wu;function Qc(){}Ze(Qc,Sf);Qc.prototype.g=function(){return new XMLHttpRequest};Qc.prototype.i=function(){return{}};Wu=new Qc;function Vo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ao(this),this.P=QC,t=ju?125:void 0,this.V=new Hc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Fv}function Fv(){this.i=null,this.g="",this.h=!1}var QC=45e3,Uv={},Ku={};M=Vo.prototype;M.setTimeout=function(t){this.P=t};function Gu(t,e,n){t.L=1,t.A=Xc(Dn(e)),t.u=n,t.S=!0,$v(t,null)}function $v(t,e){t.G=Date.now(),Lo(t),t.B=Dn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Gv(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Fv,t.g=m0(t.l,n?e:null,!t.u),0<t.O&&(t.M=new qC(dt(t.Pa,t,t.g),t.O)),xv(t.U,t.g,"readystatechange",t.nb),e=t.I?Ev(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),co(),HC(t.j,t.v,t.B,t.m,t.W,t.u)}M.nb=function(t){t=t.target;const e=this.M;e&&un(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=un(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ju||this.g&&(this.h.h||this.g.ja()||Am(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?co(3):co(2)),Yc(this);var n=this.g.da();this.ca=n;t:if(jv(this)){var r=Am(this.g);t="";var i=r.length,s=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),Vs(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,WC(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ro(a)){var l=a;break t}}l=null}if(n=l)bi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qu(this,n);else{this.i=!1,this.s=3,yt(12),Dr(this),Vs(this);break e}}this.S?(Bv(this,u,o),ju&&this.i&&u==3&&(xv(this.U,this.V,"tick",this.mb),this.V.start())):(bi(this.j,this.m,o,null),Qu(this,o)),u==4&&Dr(this),this.i&&!this.J&&(u==4?h0(this.l,this):(this.i=!1,Lo(this)))}else gk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Dr(this),Vs(this)}}}catch{}finally{}};function jv(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Bv(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=YC(t,n),i==Ku){e==4&&(t.s=4,yt(14),r=!1),bi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Uv){t.s=4,yt(15),bi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else bi(t.j,t.m,i,null),Qu(t,i);jv(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mf(e),e.M=!0,yt(11))):(bi(t.j,t.m,n,"[Invalid Chunked Response]"),Dr(t),Vs(t))}M.mb=function(){if(this.g){var t=un(this.g),e=this.g.ja();this.o<e.length&&(Yc(this),Bv(this,t,e),this.i&&t!=4&&Lo(this))}};function YC(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ku:(n=Number(e.substring(n,r)),isNaN(n)?Uv:(r+=1,r+n>e.length?Ku:(e=e.slice(r,r+n),t.o=r+n,e)))}M.cancel=function(){this.J=!0,Dr(this)};function Lo(t){t.Y=Date.now()+t.P,zv(t,t.P)}function zv(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Do(dt(t.lb,t),e)}function Yc(t){t.C&&(J.clearTimeout(t.C),t.C=null)}M.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(KC(this.j,this.B),this.L!=2&&(co(),yt(17)),Dr(this),this.s=2,Vs(this)):zv(this,this.Y-t)};function Vs(t){t.l.H==0||t.J||h0(t.l,t)}function Dr(t){Yc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Af(t.V),Ov(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Qu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Yu(n.i,t))){if(!t.K&&Yu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ic(n),tl(n);else break e;Df(n),yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Do(dt(n.ib,n),6e3));if(1>=Xv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mr(n,11)}else if((t.K||n.g==t)&&ic(n),!ro(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(kf(s,s.h),s.h=null))}if(r.F){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ke(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=p0(r,r.J?r.pa:null,r.Y),o.K){Jv(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Yc(a),Lo(a)),r.g=o}else l0(r);0<n.j.length&&nl(n)}else l[0]!="stop"&&l[0]!="close"||Mr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mr(n,7):Nf(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}co(4)}catch{}}function XC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(jc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function JC(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(jc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function qv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(jc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=JC(t),r=XC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Hv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Br(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Br){this.h=t.h,nc(this,t.j),this.s=t.s,this.g=t.g,rc(this,t.m),this.l=t.l;var e=t.i,n=new lo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Im(this,n),this.o=t.o}else t&&(e=String(t).match(Hv))?(this.h=!1,nc(this,e[1]||"",!0),this.s=Is(e[2]||""),this.g=Is(e[3]||"",!0),rc(this,e[4]),this.l=Is(e[5]||"",!0),Im(this,e[6]||"",!0),this.o=Is(e[7]||"")):(this.h=!1,this.i=new lo(null,this.h))}Br.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bs(e,bm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(bs(e,bm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(bs(n,n.charAt(0)=="/"?nk:tk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bs(n,ik)),t.join("")};function Dn(t){return new Br(t)}function nc(t,e,n){t.j=n?Is(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function rc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Im(t,e,n){e instanceof lo?(t.i=e,sk(t.i,t.h)):(n||(e=bs(e,rk)),t.i=new lo(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function Xc(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Is(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ek),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ek(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bm=/[#\/\?@]/g,tk=/[#\?:]/g,nk=/[#\?]/g,rk=/[#\?@]/g,ik=/#/g;function lo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tr(t){t.g||(t.g=new Map,t.h=0,t.i&&ZC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=lo.prototype;M.add=function(t,e){Tr(this),this.i=null,t=is(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wv(t,e){Tr(t),e=is(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Kv(t,e){return Tr(t),e=is(t,e),t.g.has(e)}M.forEach=function(t,e){Tr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};M.ta=function(){Tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};M.Z=function(t){Tr(this);let e=[];if(typeof t=="string")Kv(this,t)&&(e=e.concat(this.g.get(is(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Tr(this),this.i=null,t=is(this,t),Kv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Gv(t,e,n){Wv(t,e),0<n.length&&(t.i=null,t.g.set(is(t,e),gf(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function is(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sk(t,e){e&&!t.j&&(Tr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Wv(this,r),Gv(this,i,n))},t)),t.j=e}var ok=class{constructor(t,e){this.g=t,this.map=e}};function Qv(t){this.l=t||ak,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ak=10;function Yv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xv(t){return t.h?1:t.g?t.g.size:0}function Yu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kf(t,e){t.g?t.g.add(e):t.h=e}function Jv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Qv.prototype.cancel=function(){if(this.i=Zv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zv(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return gf(t.i)}var ck=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function lk(){this.g=new ck}function uk(t,e,n){const r=n||"";try{qv(t,function(i,s){let o=i;Oo(i)&&(o=bf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function hk(t,e){const n=new Wc;if(J.Image){const r=new Image;r.onload=aa(la,n,r,"TestLoadImage: loaded",!0,e),r.onerror=aa(la,n,r,"TestLoadImage: error",!1,e),r.onabort=aa(la,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=aa(la,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function la(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Jc(t){this.l=t.ec||null,this.j=t.ob||!1}Ze(Jc,Sf);Jc.prototype.g=function(){return new Zc(this.l,this.j)};Jc.prototype.i=function(t){return function(){return t}}({});function Zc(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=xf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Zc,Je);var xf=0;M=Zc.prototype;M.open=function(t,e){if(this.readyState!=xf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,uo(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=xf};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,uo(this)),this.g&&(this.readyState=3,uo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;e0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function e0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fo(this):uo(this),this.readyState==3&&e0(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Fo(this))};M.Ya=function(t){this.g&&(this.response=t,Fo(this))};M.ka=function(){this.g&&Fo(this)};function Fo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,uo(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function uo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fk=J.JSON.parse;function Le(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=t0,this.L=this.M=!1}Ze(Le,Je);var t0="",dk=/^https?$/i,pk=["POST","PUT"];M=Le.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wu.g(),this.C=this.u?Em(this.u):Em(Wu),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Tm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=J.FormData&&t instanceof J.FormData,!(0<=_v(pk,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{i0(this),0<this.B&&((this.L=mk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=Rf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Tm(this,s)}};function mk(t){return ji&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof mf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,it(this,"timeout"),this.abort(8))};function Tm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,n0(t),el(t)}function n0(t){t.F||(t.F=!0,it(t,"complete"),it(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,it(this,"complete"),it(this,"abort"),el(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),el(this,!0)),Le.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?r0(this):this.kb())};M.kb=function(){r0(this)};function r0(t){if(t.h&&typeof mf<"u"&&(!t.C[1]||un(t)!=4||t.da()!=2)){if(t.v&&un(t)==4)Rf(t.La,0,t);else if(it(t,"readystatechange"),un(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Hv)[1]||null;!i&&J.self&&J.self.location&&(i=J.self.location.protocol.slice(0,-1)),r=!dk.test(i?i.toLowerCase():"")}n=r}if(n)it(t,"complete"),it(t,"success");else{t.m=6;try{var s=2<un(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",n0(t)}}finally{el(t)}}}}function el(t,e){if(t.g){i0(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||it(t,"ready");try{n.onreadystatechange=r}catch{}}}function i0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function un(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fk(e)}};function Am(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case t0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function gk(t){const e={};t=(t.g&&2<=un(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ro(t[r]))continue;var n=jC(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}DC(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function s0(t){let e="";return yf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Of(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=s0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function o0(t){this.Ga=0,this.j=[],this.l=new Wc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ms("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ms("baseRetryDelayMs",5e3,t),this.hb=ms("retryDelaySeedMs",1e4,t),this.eb=ms("forwardChannelMaxRetries",2,t),this.xa=ms("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Qv(t&&t.concurrentRequestLimit),this.Ja=new lk,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=o0.prototype;M.ra=8;M.H=1;function Nf(t){if(a0(t),t.H==3){var e=t.W++,n=Dn(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),Uo(t,n),e=new Vo(t,t.l,e),e.L=2,e.A=Xc(Dn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.A,n=!0),n||(e.g=m0(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Lo(e)}d0(t)}function tl(t){t.g&&(Mf(t),t.g.cancel(),t.g=null)}function a0(t){tl(t),t.u&&(J.clearTimeout(t.u),t.u=null),ic(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function nl(t){if(!Yv(t.i)&&!t.m){t.m=!0;var e=t.Na;so||Cv(),oo||(so(),oo=!0),Tf.add(e,t),t.C=0}}function _k(t,e){return Xv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Do(dt(t.Na,t,e),f0(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Vo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Ev(s),Iv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=c0(this,i,e),n=Dn(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),Uo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(s0(s)))+"&"+e:this.o&&Of(n,this.o,s)),kf(this.i,i),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),i.aa=!0,Gu(i,n,null)):Gu(i,n,e),this.H=2}}else this.H==3&&(t?Rm(this,t):this.j.length==0||Yv(this.i)||Rm(this))};function Rm(t,e){var n;e?n=e.m:n=t.W++;const r=Dn(t.I);ke(r,"SID",t.K),ke(r,"RID",n),ke(r,"AID",t.V),Uo(t,r),t.o&&t.s&&Of(r,t.o,t.s),n=new Vo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=c0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),kf(t.i,n),Gu(n,r,e)}function Uo(t,e){t.na&&yf(t.na,function(n,r){ke(e,r,n)}),t.h&&qv({},function(n,r){ke(e,r,n)})}function c0(t,e,n){n=Math.min(t.j.length,n);var r=t.h?dt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{uk(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function l0(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;so||Cv(),oo||(so(),oo=!0),Tf.add(e,t),t.A=0}}function Df(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Do(dt(t.Ma,t),f0(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,u0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Do(dt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yt(10),tl(this),u0(this))};function Mf(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function u0(t){t.g=new Vo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Dn(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),Uo(t,e),t.o&&t.s&&Of(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Xc(Dn(e)),n.u=null,n.S=!0,$v(n,t)}M.ib=function(){this.v!=null&&(this.v=null,tl(this),Df(this),yt(19))};function ic(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function h0(t,e){var n=null;if(t.g==e){ic(t),Mf(t),t.g=null;var r=2}else if(Yu(t.i,e))n=e.F,Jv(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Kc(),it(r,new Mv(r,n)),nl(t)}else l0(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&_k(t,e)||r==2&&Df(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Mr(t,5);break;case 4:Mr(t,10);break;case 3:Mr(t,6);break;default:Mr(t,2)}}}function f0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Mr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=dt(t.pb,t);n||(n=new Br("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||nc(n,"https"),Xc(n)),hk(n.toString(),r)}else yt(2);t.H=0,t.h&&t.h.za(e),d0(t),a0(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),yt(2)):(this.l.info("Failed to ping google.com"),yt(1))};function d0(t){if(t.H=0,t.ma=[],t.h){const e=Zv(t.i);(e.length!=0||t.j.length!=0)&&(gm(t.ma,e),gm(t.ma,t.j),t.i.i.length=0,gf(t.j),t.j.length=0),t.h.ya()}}function p0(t,e,n){var r=n instanceof Br?Dn(n):new Br(n);if(r.g!="")e&&(r.g=e+"."+r.g),rc(r,r.m);else{var i=J.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Br(null);r&&nc(s,r),e&&(s.g=e),i&&rc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ke(r,n,e),ke(r,"VER",t.ra),Uo(t,r),r}function m0(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Le(new Jc({ob:n})):new Le(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function g0(){}M=g0.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function sc(){if(ji&&!(10<=Number(kC)))throw Error("Environmental error: no available transport.")}sc.prototype.g=function(t,e){return new Dt(t,e)};function Dt(t,e){Je.call(this),this.g=new o0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ro(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ro(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ss(this)}Ze(Dt,Je);Dt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;yt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=p0(t,null,t.Y),nl(t)};Dt.prototype.close=function(){Nf(this.g)};Dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bf(t),t=n);e.j.push(new ok(e.fb++,t)),e.H==3&&nl(e)};Dt.prototype.N=function(){this.g.h=null,delete this.j,Nf(this.g),delete this.g,Dt.$.N.call(this)};function _0(t){Pf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(_0,Pf);function y0(){Cf.call(this),this.status=1}Ze(y0,Cf);function ss(t){this.g=t}Ze(ss,g0);ss.prototype.Ba=function(){it(this.g,"a")};ss.prototype.Aa=function(t){it(this.g,new _0(t))};ss.prototype.za=function(t){it(this.g,new y0)};ss.prototype.ya=function(){it(this.g,"b")};function yk(){this.blockSize=-1}function en(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(en,yk);en.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function eu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}en.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)eu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){eu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){eu(this,r),i=0;break}}this.h=i,this.i+=e};en.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var vk={};function Vf(t){return-128<=t&&128>t?SC(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function hn(t){if(isNaN(t)||!isFinite(t))return xi;if(0>t)return tt(hn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Xu;return new Ee(e,0)}function v0(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return tt(v0(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=hn(Math.pow(e,8)),r=xi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=hn(Math.pow(e,s)),r=r.R(s).add(hn(o))):(r=r.R(n),r=r.add(hn(o)))}return r}var Xu=4294967296,xi=Vf(0),Ju=Vf(1),Sm=Vf(16777216);M=Ee.prototype;M.ea=function(){if(Ft(this))return-tt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Xu+r)*e,e*=Xu}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kn(this))return"0";if(Ft(this))return"-"+tt(this).toString(t);for(var e=hn(Math.pow(t,6)),n=this,r="";;){var i=ac(n,e).g;n=oc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}M.X=function(t){return t=oc(this,t),Ft(t)?-1:kn(t)?0:1};function tt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(Ju)}M.abs=function(){return Ft(this)?tt(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function oc(t,e){return t.add(tt(e))}M.R=function(t){if(kn(this)||kn(t))return xi;if(Ft(this))return Ft(t)?tt(this).R(tt(t)):tt(tt(this).R(t));if(Ft(t))return tt(this.R(tt(t)));if(0>this.X(Sm)&&0>t.X(Sm))return hn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,ua(n,2*r+2*i),n[2*r+2*i+1]+=s*c,ua(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ua(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ua(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function ua(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function gs(t,e){this.g=t,this.h=e}function ac(t,e){if(kn(e))throw Error("division by zero");if(kn(t))return new gs(xi,xi);if(Ft(t))return e=ac(tt(t),e),new gs(tt(e.g),tt(e.h));if(Ft(e))return e=ac(t,tt(e)),new gs(tt(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ju,r=e;0>=r.X(t);)n=Pm(n),r=Pm(r);var i=_i(n,1),s=_i(r,1);for(r=_i(r,2),n=_i(n,2);!kn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=_i(r,1),n=_i(n,1)}return e=oc(t,i.R(e)),new gs(i,e)}for(i=xi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=hn(n),o=s.R(e);Ft(o)||0<o.X(t);)n-=r,s=hn(n),o=s.R(e);kn(s)&&(s=Ju),i=i.add(s),t=oc(t,o)}return new gs(i,t)}M.gb=function(t){return ac(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function Pm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function _i(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ee(i,t.h)}sc.prototype.createWebChannel=sc.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;Gc.NO_ERROR=0;Gc.TIMEOUT=8;Gc.HTTP_ERROR=6;Vv.COMPLETE="complete";Lv.EventType=Mo;Mo.OPEN="a";Mo.CLOSE="b";Mo.ERROR="c";Mo.MESSAGE="d";Je.prototype.listen=Je.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;en.prototype.digest=en.prototype.l;en.prototype.reset=en.prototype.reset;en.prototype.update=en.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=hn;Ee.fromString=v0;var wk=function(){return new sc},Ek=function(){return Kc()},tu=Gc,Ik=Vv,bk=li,Cm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ha=Lv,Tk=Le,Ak=en,Oi=Ee;const km="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let os="10.7.0";/**
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
 */const Jr=new Mc("@firebase/firestore");function _s(){return Jr.logLevel}function U(t,...e){if(Jr.logLevel<=he.DEBUG){const n=e.map(Lf);Jr.debug(`Firestore (${os}): ${t}`,...n)}}function Mn(t,...e){if(Jr.logLevel<=he.ERROR){const n=e.map(Lf);Jr.error(`Firestore (${os}): ${t}`,...n)}}function Bi(t,...e){if(Jr.logLevel<=he.WARN){const n=e.map(Lf);Jr.warn(`Firestore (${os}): ${t}`,...n)}}function Lf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function Re(t,e){t||X()}function re(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class w0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class Sk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Pk{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new w0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new ut(e)}}class Ck{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ck(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ok{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new xk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Nk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class E0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Nk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new qe(0,0))}static max(){return new Z(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ho{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ho.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ho?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends ho{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const Dk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends ho{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return Dk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(xe.fromString(e))}static fromName(e){return new H(xe.fromString(e).popFirst(5))}static empty(){return new H(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new xe(e.slice()))}}function Mk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new pr(i,H.empty(),e)}function Vk(t){return new pr(t.readTime,t.key,-1)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(Z.min(),H.empty(),-1)}static max(){return new pr(Z.max(),H.empty(),-1)}}function Lk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const Fk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $o(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==Fk)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new P((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function jo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ff{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ff._e=-1;function rl(t){return t==null}function cc(t){return t===0&&1/t==-1/0}function $k(t){return typeof t=="number"&&Number.isInteger(t)&&!cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function xm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function I0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fa(this.root,e,this.comparator,!0)}}class fa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??et.EMPTY,this.right=s??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Om(this.data.getIterator())}getIteratorFrom(e){return new Om(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class Om{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new xt([])}unionWith(e){let n=new st(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class b0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new b0("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const jk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(Re(!!t),typeof t=="string"){let e=0;const n=jk.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function Uf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $f(t){const e=t.mapValue.fields.__previous_value__;return Uf(e)?$f(e):e}function fo(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class Bk{constructor(e,n,r,i,s,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof po&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const da={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uf(t)?4:zk(t)?9007199254740991:10:X()}function In(t,e){if(t===e)return!0;const n=ei(t);if(n!==ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fo(t).isEqual(fo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mr(i.timestampValue),a=mr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zr(i.bytesValue).isEqual(Zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?cc(o)===cc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return zi(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(xm(o)!==xm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!In(o[c],a[c])))return!1;return!0}(t,e);default:return X()}}function mo(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=ei(t),r=ei(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),c=Be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Nm(t.timestampValue,e.timestampValue);case 4:return Nm(fo(t),fo(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Zr(s),c=Zr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ge(a[l],c[l]);if(u!==0)return u}return ge(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ge(Be(s.latitude),Be(o.latitude));return a!==0?a:ge(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=qi(a[l],c[l]);if(u)return u}return ge(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===da.mapValue&&o===da.mapValue)return 0;if(s===da.mapValue)return 1;if(o===da.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ge(c[h],u[h]);if(f!==0)return f;const d=qi(a[c[h]],l[u[h]]);if(d!==0)return d}return ge(c.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function Nm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=mr(t),r=mr(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function Hi(t){return Zu(t)}function Zu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Zu(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zu(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function Dm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function eh(t){return!!t&&"integerValue"in t}function jf(t){return!!t&&"arrayValue"in t}function Mm(t){return!!t&&"nullValue"in t}function Vm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Na(t){return!!t&&"mapValue"in t}function Ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ls(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ls(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Na(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new bt(Ls(this.value))}}function T0(t){const e=[];return ui(t.fields,(n,r)=>{const i=new nt([n]);if(Na(r)){const s=T0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new xt(e)}/**
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
 */class ht{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,Z.min(),Z.min(),Z.min(),bt.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,Z.min(),Z.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,Z.min(),Z.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lc{constructor(e,n){this.position=e,this.inclusive=n}}function Lm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uc{constructor(e,n="asc"){this.field=e,this.dir=n}}function qk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class A0{}class ze extends A0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Wk(e,n,r):n==="array-contains"?new Qk(e,r):n==="in"?new Yk(e,r):n==="not-in"?new Xk(e,r):n==="array-contains-any"?new Jk(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Kk(e,r):new Gk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qi(n,this.value)):n!==null&&ei(this.value)===ei(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends A0{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new tn(e,n)}matches(e){return R0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function R0(t){return t.op==="and"}function S0(t){return Hk(t)&&R0(t)}function Hk(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function th(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Hi(t.value);if(S0(t))return t.filters.map(e=>th(e)).join(",");{const e=t.filters.map(n=>th(n)).join(",");return`${t.op}(${e})`}}function P0(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof tn?function(r,i){return i instanceof tn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&P0(o,i.filters[a]),!0):!1}(t,e):void X()}function C0(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Hi(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(C0).join(" ,")+"}"}(t):"Filter"}class Wk extends ze{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kk extends ze{constructor(e,n){super(e,"in",n),this.keys=k0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Gk extends ze{constructor(e,n){super(e,"not-in",n),this.keys=k0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function k0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Qk extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jf(n)&&mo(n.arrayValue,this.value)}}class Yk extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mo(this.value.arrayValue,n)}}class Xk extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mo(this.value.arrayValue,n)}}class Jk extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mo(this.value.arrayValue,r))}}/**
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
 */class Zk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Um(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Zk(t,e,n,r,i,s,o)}function Bf(t){const e=re(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>th(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),e.ce=n}return e.ce}function zf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!P0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fm(t.startAt,e.startAt)&&Fm(t.endAt,e.endAt)}function nh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function e2(t,e,n,r,i,s,o,a){return new Bo(t,e,n,r,i,s,o,a)}function qf(t){return new Bo(t)}function $m(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function x0(t){return t.collectionGroup!==null}function Fs(t){const e=re(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new st(nt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new uc(s,r))}),n.has(nt.keyField().canonicalString())||e.le.push(new uc(nt.keyField(),r))}return e.le}function gn(t){const e=re(t);return e.he||(e.he=t2(e,Fs(t))),e.he}function t2(t,e){if(t.limitType==="F")return Um(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new uc(i.field,s)});const n=t.endAt?new lc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new lc(t.startAt.position,t.startAt.inclusive):null;return Um(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rh(t,e){const n=t.filters.concat([e]);return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ih(t,e,n){return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function il(t,e){return zf(gn(t),gn(e))&&t.limitType===e.limitType}function O0(t){return`${Bf(gn(t))}|lt:${t.limitType}`}function vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>C0(i)).join(", ")}]`),rl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Hi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Hi(i)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function sl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=Lm(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Fs(r),i)||r.endAt&&!function(o,a,c){const l=Lm(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Fs(r),i))}(t,e)}function n2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function N0(t){return(e,n)=>{let r=!1;for(const i of Fs(t)){const s=r2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function r2(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?qi(c,l):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return I0(this.inner)}size(){return this.innerSize}}/**
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
 */const i2=new De(H.comparator);function Vn(){return i2}const D0=new De(H.comparator);function Ts(...t){let e=D0;for(const n of t)e=e.insert(n.key,n);return e}function M0(t){let e=D0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return Us()}function V0(){return Us()}function Us(){return new as(t=>t.toString(),(t,e)=>t.isEqual(e))}const s2=new De(H.comparator),o2=new st(H.comparator);function ue(...t){let e=o2;for(const n of t)e=e.add(n);return e}const a2=new st(ge);function c2(){return a2}/**
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
 */function L0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function F0(t){return{integerValue:""+t}}function l2(t,e){return $k(e)?F0(e):L0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ol{constructor(){this._=void 0}}function u2(t,e,n){return t instanceof hc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Uf(s)&&(s=$f(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof go?$0(t,e):t instanceof _o?j0(t,e):function(i,s){const o=U0(i,s),a=jm(o)+jm(i.Ie);return eh(o)&&eh(i.Ie)?F0(a):L0(i.serializer,a)}(t,e)}function h2(t,e,n){return t instanceof go?$0(t,e):t instanceof _o?j0(t,e):n}function U0(t,e){return t instanceof fc?function(r){return eh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class hc extends ol{}class go extends ol{constructor(e){super(),this.elements=e}}function $0(t,e){const n=B0(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends ol{constructor(e){super(),this.elements=e}}function j0(t,e){let n=B0(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class fc extends ol{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function jm(t){return Be(t.integerValue||t.doubleValue)}function B0(t){return jf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function f2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof go&&i instanceof go||r instanceof _o&&i instanceof _o?zi(r.elements,i.elements,In):r instanceof fc&&i instanceof fc?In(r.Ie,i.Ie):r instanceof hc&&i instanceof hc}(t.transform,e.transform)}class d2{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class al{}function z0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hf(t.key,zt.none()):new zo(t.key,t.data,zt.none());{const n=t.data,r=bt.empty();let i=new st(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ar(t.key,r,new xt(i.toArray()),zt.none())}}function p2(t,e,n){t instanceof zo?function(i,s,o){const a=i.value.clone(),c=zm(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(i,s,o){if(!Da(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=zm(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(q0(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function $s(t,e,n,r){return t instanceof zo?function(s,o,a,c){if(!Da(s.precondition,o))return a;const l=s.value.clone(),u=qm(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(s,o,a,c){if(!Da(s.precondition,o))return a;const l=qm(s.fieldTransforms,c,o),u=o.data;return u.setAll(q0(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Da(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function m2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=U0(r.transform,i||null);s!=null&&(n===null&&(n=bt.empty()),n.set(r.field,s))}return n||null}function Bm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zi(r,i,(s,o)=>f2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends al{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends al{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function q0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zm(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,h2(o,a,n[i]))}return r}function qm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,u2(s,o,e))}return r}class Hf extends al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class g2 extends al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&p2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=V0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=z0(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&zi(this.mutations,e.mutations,(n,r)=>Bm(n,r))&&zi(this.baseMutations,e.baseMutations,(n,r)=>Bm(n,r))}}class Wf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=function(){return s2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wf(e,n,r,i)}}/**
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
 */class y2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class v2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,fe;function w2(t){switch(t){default:return X();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function H0(t){if(t===void 0)return Mn("GRPC error has no .code"),R.UNKNOWN;switch(t){case je.OK:return R.OK;case je.CANCELLED:return R.CANCELLED;case je.UNKNOWN:return R.UNKNOWN;case je.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case je.INTERNAL:return R.INTERNAL;case je.UNAVAILABLE:return R.UNAVAILABLE;case je.UNAUTHENTICATED:return R.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case je.NOT_FOUND:return R.NOT_FOUND;case je.ALREADY_EXISTS:return R.ALREADY_EXISTS;case je.PERMISSION_DENIED:return R.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case je.ABORTED:return R.ABORTED;case je.OUT_OF_RANGE:return R.OUT_OF_RANGE;case je.UNIMPLEMENTED:return R.UNIMPLEMENTED;case je.DATA_LOSS:return R.DATA_LOSS;default:return X()}}(fe=je||(je={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function E2(){return new TextEncoder}/**
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
 */const I2=new Oi([4294967295,4294967295],0);function Hm(t){const e=E2().encode(t),n=new Ak;return n.update(e),new Uint8Array(n.digest())}function Wm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Oi([n,r],0),new Oi([i,s],0)]}class Kf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new As(`Invalid padding: ${n}`);if(r<0)throw new As(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new As(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new As(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Oi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Oi.fromNumber(r)));return i.compare(I2)===1&&(i=new Oi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Hm(e),[r,i]=Wm(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Kf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Hm(e),[r,i]=Wm(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class As extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,qo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cl(Z.min(),i,new De(ge),Vn(),ue())}}class qo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qo(r,n,ue(),ue(),ue())}}/**
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
 */class Ma{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class W0{constructor(e,n){this.targetId=e,this.fe=n}}class K0{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Km{constructor(){this.ge=0,this.pe=Qm(),this.ye=gt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ue(),n=ue(),r=ue();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new qo(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Qm()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Re(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class b2{constructor(e){this.Le=e,this.ke=new Map,this.qe=Vn(),this.Qe=Gm(),this.Ke=new De(ge)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(nh(s))if(r===0){const o=new H(s.path);this.We(n,o,ht.newNoDocument(o,Z.min()))}else Re(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Zr(r).toUint8Array()}catch(c){if(c instanceof b0)return Bi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Kf(o,i,s)}catch(c){return Bi(c instanceof As?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&nh(a.target)){const c=new H(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,ht.newNoDocument(c,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ue();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new cl(e,n,this.Ke,this.qe,r);return this.qe=Vn(),this.Qe=Gm(),this.Ke=new De(ge),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Km,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new st(ge),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Km),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Gm(){return new De(H.comparator)}function Qm(){return new De(H.comparator)}const T2={asc:"ASCENDING",desc:"DESCENDING"},A2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R2={and:"AND",or:"OR"};class S2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sh(t,e){return t.useProto3Json||rl(e)?e:{value:e}}function dc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function G0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function P2(t,e){return dc(t,e.toTimestamp())}function _n(t){return Re(!!t),Z.fromTimestamp(function(n){const r=mr(n);return new qe(r.seconds,r.nanos)}(t))}function Gf(t,e){return function(r){return new xe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Q0(t){const e=xe.fromString(t);return Re(Z0(e)),e}function oh(t,e){return Gf(t.databaseId,e.path)}function nu(t,e){const n=Q0(e);if(n.get(1)!==t.databaseId.projectId)throw new $(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Y0(n))}function ah(t,e){return Gf(t.databaseId,e)}function C2(t){const e=Q0(t);return e.length===4?xe.emptyPath():Y0(e)}function ch(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Y0(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ym(t,e,n){return{name:oh(t,e),fields:n.value.mapValue.fields}}function k2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Re(u===void 0||typeof u=="string"),gt.fromBase64String(u||"")):(Re(u===void 0||u instanceof Uint8Array),gt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:H0(l.code);return new $(u,l.message||"")}(o);n=new K0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nu(t,r.document.name),s=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):Z.min(),a=new bt({mapValue:{fields:r.document.fields}}),c=ht.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ma(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nu(t,r.document),s=r.readTime?_n(r.readTime):Z.min(),o=ht.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ma([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nu(t,r.document),s=r.removedTargetIds||[];n=new Ma([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new v2(i,s),a=r.targetId;n=new W0(a,o)}}return n}function x2(t,e){let n;if(e instanceof zo)n={update:Ym(t,e.key,e.value)};else if(e instanceof Hf)n={delete:oh(t,e.key)};else if(e instanceof Ar)n={update:Ym(t,e.key,e.data),updateMask:$2(e.fieldMask)};else{if(!(e instanceof g2))return X();n={verify:oh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof hc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:P2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function O2(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?_n(i.updateTime):_n(s);return o.isEqual(Z.min())&&(o=_n(s)),new d2(o,i.transformResults||[])}(n,e))):[]}function N2(t,e){return{documents:[ah(t,e.path)]}}function D2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ah(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ah(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return J0(tn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:wi(h.field),direction:L2(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=sh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function M2(t){let e=C2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const f=X0(h);return f instanceof tn&&S0(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(g){return new uc(Ei(g.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,rl(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,d=h.values||[];return new lc(d,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,d=h.values||[];return new lc(d,f)}(n.endAt)),e2(e,i,o,s,a,"F",c,l)}function V2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function X0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ei(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ei(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ei(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ei(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Ei(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>X0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function L2(t){return T2[t]}function F2(t){return A2[t]}function U2(t){return R2[t]}function wi(t){return{fieldPath:t.canonicalString()}}function Ei(t){return nt.fromServerFormat(t.fieldPath)}function J0(t){return t instanceof ze?function(n){if(n.op==="=="){if(Vm(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NAN"}};if(Mm(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vm(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NAN"}};if(Mm(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(n.field),op:F2(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(i=>J0(i));return r.length===1?r[0]:{compositeFilter:{op:U2(n.op),filters:r}}}(t):X()}function $2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Z0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class j2{constructor(e){this.ut=e}}function B2(t){const e=M2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ih(e,e.limit,"L"):e}/**
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
 */class z2{constructor(){this.on=new q2}addToCollectionParentIndex(e,n){return this.on.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(pr.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class q2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new st(xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new st(xe.comparator)).toArray()}}/**
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
 */class Wi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Wi(0)}static Nn(){return new Wi(-1)}}/**
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
 */class H2{constructor(){this.changes=new as(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class W2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class K2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&$s(r.mutation,i,xt.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=Vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ts();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Vn();const o=Us(),a=function(){return Us()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Ar)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),$s(u.mutation,l,u.mutation.getFieldMask(),qe.now())):o.set(l.key,xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new W2(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Us();let i=new De((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||xt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||ue()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=V0();u.forEach(f=>{if(!s.has(f)){const d=z0(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):x0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):P.resolve(Vr());let a=-1,c=s;return o.next(l=>P.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:M0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Ts();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ts();return this.indexManager.getCollectionParents(e,s).next(a=>P.forEach(a,c=>{const l=function(h,f){return new Bo(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,ht.newInvalidDocument(u)))});let a=Ts();return o.forEach((c,l)=>{const u=s.get(c);u!==void 0&&$s(u.mutation,l,xt.empty(),qe.now()),sl(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class G2{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:_n(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:B2(i.bundledQuery),readTime:_n(i.readTime)}}(n)),P.resolve()}}/**
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
 */class Q2{constructor(){this.overlays=new De(H.comparator),this.lr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return P.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=Vr(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=Vr(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Vr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return P.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new y2(n,r));let s=this.lr.get(n);s===void 0&&(s=ue(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class Qf{constructor(){this.hr=new st(Ke.Pr),this.Ir=new st(Ke.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ke(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new H(new xe([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new H(new xe([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=ue();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return H.comparator(e.key,n.key)||ge(e.gr,n.gr)}static Tr(e,n){return ge(e.gr,n.gr)||H.comparator(e.key,n.key)}}/**
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
 */class Y2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new st(Ke.Pr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(ge);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),P.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new H(s),0);let a=new st(ge);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gr)),!0)},o),P.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return P.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ke(n,0),i=this.yr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class X2{constructor(e){this.Cr=e,this.docs=function(){return new De(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Lk(Vk(u),r)<=0||(i.has(u.key)||sl(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}vr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new J2(this)}getSize(e){return P.resolve(this.size)}}class J2 extends H2{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class Z2{constructor(e){this.persistence=e,this.Fr=new as(n=>Bf(n),zf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Qf,this.targetCount=0,this.Nr=Wi.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),P.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Wi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.kn(n),P.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Or.containsKey(n))}}/**
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
 */class ex{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ff(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Z2(this),this.indexManager=new z2,this.remoteDocumentCache=function(i){return new X2(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new j2(n),this.Kr=new G2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Q2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Y2(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new tx(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class tx extends Uk{constructor(e){super(),this.currentSequenceNumber=e}}class Yf{constructor(e){this.persistence=e,this.Gr=new Qf,this.zr=null}static jr(e){return new Yf(e)}get Hr(){if(this.zr)return this.zr;throw X()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,r=>{const i=H.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class Xf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class nx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rx{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nx;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(_s()<=he.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(_s()<=he.DEBUG&&U("QueryEngine","Query:",vi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(_s()<=he.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):P.resolve())}zi(e,n){if($m(n))return P.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ih(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,ih(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,i){return $m(n)||i.isEqual(Z.min())?P.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?P.resolve(null):(_s()<=he.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vi(n)),this.Xi(e,o,n,Mk(i,-1)).next(a=>a))})}Yi(e,n){let r=new st(N0(e));return n.forEach((i,s)=>{sl(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return _s()<=he.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",vi(n)),this.Gi.getDocumentsMatchingQuery(e,n,pr.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class ix{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new De(ge),this.ns=new as(s=>Bf(s),zf),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K2(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function sx(t,e,n,r){return new ix(t,e,n,r)}async function ew(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ue();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function ox(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let d=P.resolve();return f.forEach(g=>{d=d.next(()=>u.getEntry(c,g)).next(v=>{const b=l.docVersions.get(g);Re(b!==null),v.version.compareTo(b)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ue();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tw(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function ax(t,e){const n=re(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(gt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(h,d),function(v,b,y){return v.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.qr.updateTargetData(s,d))});let c=Vn(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(cx(s,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(Z.min())){const u=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.ts=i,s))}function cx(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:i}})}function lx(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ux(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function lh(t,e,n){const r=re(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!jo(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Xm(t,e,n){const r=re(t);let i=Z.min(),s=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=re(c),f=h.ns.get(u);return f!==void 0?P.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(r,o,gn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ue())).next(a=>(hx(r,n2(e),a),{documents:a,ls:s})))}function hx(t,e,n){let r=t.rs.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class Jm{constructor(){this.activeTargetIds=c2()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fx{constructor(){this.eo=new Jm,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Jm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dx{ro(e){}shutdown(){}}/**
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
 */class Zm{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let pa=null;function ru(){return pa===null?pa=function(){return 268435456+Math.round(2147483648*Math.random())}():pa++,"0x"+pa.toString(16)}/**
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
 */const px={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class mx{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const lt="WebChannelConnection";class gx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=ru(),c=this.So(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,s,o),this.Do(n,c,l,i).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Bi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=px[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=ru();return new Promise((o,a)=>{const c=new Tk;c.setWithCredentials(!0),c.listenOnce(Ik.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case tu.NO_ERROR:const u=c.getResponseJson();U(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case tu.TIMEOUT:U(lt,`RPC '${e}' ${s} timed out`),a(new $(R.DEADLINE_EXCEEDED,"Request time out"));break;case tu.HTTP_ERROR:const h=c.getStatus();if(U(lt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(b){const y=b.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(y)>=0?y:R.UNKNOWN}(d.status);a(new $(g,d.message))}else a(new $(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(R.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{U(lt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);U(lt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}vo(e,n,r){const i=ru(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wk(),a=Ek(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");U(lt,`Creating RPC '${e}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,d=!1;const g=new mx({co:b=>{d?U(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(f||(U(lt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),U(lt,`RPC '${e}' stream ${i} sending:`,b),h.send(b))},lo:()=>h.close()}),v=(b,y,w)=>{b.listen(y,O=>{try{w(O)}catch(k){setTimeout(()=>{throw k},0)}})};return v(h,ha.EventType.OPEN,()=>{d||U(lt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,ha.EventType.CLOSE,()=>{d||(d=!0,U(lt,`RPC '${e}' stream ${i} transport closed`),g.Ro())}),v(h,ha.EventType.ERROR,b=>{d||(d=!0,Bi(lt,`RPC '${e}' stream ${i} transport errored:`,b),g.Ro(new $(R.UNAVAILABLE,"The operation could not be completed")))}),v(h,ha.EventType.MESSAGE,b=>{var y;if(!d){const w=b.data[0];Re(!!w);const O=w,k=O.error||((y=O[0])===null||y===void 0?void 0:y.error);if(k){U(lt,`RPC '${e}' stream ${i} received error:`,k);const z=k.status;let oe=function(Q){const Ie=je[Q];if(Ie!==void 0)return H0(Ie)}(z),ae=k.message;oe===void 0&&(oe=R.INTERNAL,ae="Unknown error status: "+z+" with message "+k.message),d=!0,g.Ro(new $(oe,ae)),h.close()}else U(lt,`RPC '${e}' stream ${i} received:`,w),g.Vo(w)}}),v(a,bk.STAT_EVENT,b=>{b.stat===Cm.PROXY?U(lt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Cm.NOPROXY&&U(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ao()},0),g}}function iu(){return typeof document<"u"?document:null}/**
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
 */function ll(t){return new S2(t,!0)}/**
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
 */class nw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class rw{constructor(e,n,r,i,s,o,a,c){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new nw(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new $(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _x extends rw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=k2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?_n(o.readTime):Z.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=ch(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=nh(c)?{documents:N2(s,c)}:{query:D2(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=G0(s,o.resumeToken);const l=sh(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=dc(s,o.snapshotVersion.toTimestamp());const l=sh(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=V2(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=ch(this.serializer),n.removeTarget=e,this.e_(n)}}class yx extends rw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=O2(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.I_(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=ch(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>x2(this.serializer,r))};this.e_(n)}}/**
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
 */class vx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new $(R.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(R.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(R.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class wx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Mn(n),this.f_=!1):U("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class Ex{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{hi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=re(c);l.C_.add(4),await Ho(l),l.M_.set("Unknown"),l.C_.delete(4),await ul(l)}(this))})}),this.M_=new wx(r,i)}}async function ul(t){if(hi(t))for(const e of t.v_)await e(!0)}async function Ho(t){for(const e of t.v_)await e(!1)}function iw(t,e){const n=re(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),ed(n)?Zf(n):cs(n).Ho()&&Jf(n,e))}function sw(t,e){const n=re(t),r=cs(n);n.D_.delete(e),r.Ho()&&ow(n,e),n.D_.size===0&&(r.Ho()?r.Zo():hi(n)&&n.M_.set("Unknown"))}function Jf(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}cs(t).u_(e)}function ow(t,e){t.x_.Oe(e),cs(t).c_(e)}function Zf(t){t.x_=new b2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),cs(t).start(),t.M_.g_()}function ed(t){return hi(t)&&!cs(t).jo()&&t.D_.size>0}function hi(t){return re(t).C_.size===0}function aw(t){t.x_=void 0}async function Ix(t){t.D_.forEach((e,n)=>{Jf(t,e)})}async function bx(t,e){aw(t),ed(t)?(t.M_.w_(e),Zf(t)):t.M_.set("Unknown")}async function Tx(t,e,n){if(t.M_.set("Online"),e instanceof K0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pc(t,r)}else if(e instanceof Ma?t.x_.$e(e):e instanceof W0?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(Z.min()))try{const r=await tw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.D_.get(l);u&&s.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.D_.get(c);if(!u)return;s.D_.set(c,u.withResumeToken(gt.EMPTY_BYTE_STRING,u.snapshotVersion)),ow(s,c);const h=new tr(u.target,c,l,u.sequenceNumber);Jf(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await pc(t,r)}}async function pc(t,e,n){if(!jo(e))throw e;t.C_.add(1),await Ho(t),t.M_.set("Offline"),n||(n=()=>tw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await ul(t)})}function cw(t,e){return e().catch(n=>pc(t,n,e))}async function hl(t){const e=re(t),n=gr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Ax(e);)try{const i=await lx(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,Rx(e,i)}catch(i){await pc(e,i)}lw(e)&&uw(e)}function Ax(t){return hi(t)&&t.b_.length<10}function Rx(t,e){t.b_.push(e);const n=gr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function lw(t){return hi(t)&&!gr(t).jo()&&t.b_.length>0}function uw(t){gr(t).start()}async function Sx(t){gr(t).E_()}async function Px(t){const e=gr(t);for(const n of t.b_)e.P_(n.mutations)}async function Cx(t,e,n){const r=t.b_.shift(),i=Wf.from(r,e,n);await cw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hl(t)}async function kx(t,e){e&&gr(t).h_&&await async function(r,i){if(function(o){return w2(o)&&o!==R.ABORTED}(i.code)){const s=r.b_.shift();gr(r).Yo(),await cw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await hl(r)}}(t,e),lw(t)&&uw(t)}async function eg(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=hi(n);n.C_.add(3),await Ho(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await ul(n)}async function xx(t,e){const n=re(t);e?(n.C_.delete(2),await ul(n)):e||(n.C_.add(2),await Ho(n),n.M_.set("Unknown"))}function cs(t){return t.O_||(t.O_=function(n,r,i){const s=re(n);return s.A_(),new _x(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:Ix.bind(null,t),Io:bx.bind(null,t),a_:Tx.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),ed(t)?Zf(t):t.M_.set("Unknown")):(await t.O_.stop(),aw(t))})),t.O_}function gr(t){return t.N_||(t.N_=function(n,r,i){const s=re(n);return s.A_(),new yx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:Sx.bind(null,t),Io:kx.bind(null,t),T_:Px.bind(null,t),I_:Cx.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await hl(t)):(await t.N_.stop(),t.b_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class td{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new td(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nd(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),jo(t))return new $(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ni{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ts(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Ni(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ni)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ni;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class tg{constructor(){this.B_=new De(H.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):X():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ki{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ki(e,n,Ni.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&il(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Ox{constructor(){this.k_=void 0,this.listeners=[]}}class Nx{constructor(){this.queries=new as(e=>O0(e),il),this.onlineState="Unknown",this.q_=new Set}}async function Dx(t,e){const n=re(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ox),i)try{s.k_=await n.onListen(r)}catch(o){const a=nd(o,`Initialization of query '${vi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&rd(n)}async function Mx(t,e){const n=re(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Vx(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&rd(n)}function Lx(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function rd(t){t.q_.forEach(e=>{e.next()})}class Fx{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class hw{constructor(e){this.key=e}}class fw{constructor(e){this.key=e}}class Ux{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ue(),this.mutatedKeys=ue(),this._a=N0(e),this.aa=new Ni(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new tg,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=sl(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let b=!1;f&&d?f.data.isEqual(d.data)?g!==v&&(r.track({type:3,doc:d}),b=!0):this.ha(f,d)||(r.track({type:2,doc:d}),b=!0,(c&&this._a(d,c)>0||l&&this._a(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),b=!0):f&&!d&&(r.track({type:1,doc:f}),b=!0,(c||l)&&(a=!0)),b&&(d?(o=o.add(d),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(d,g){const v=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return v(d)-v(g)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],c=this.oa.size===0&&this.current&&!i?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new Ki(this.query,e.aa,s,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new tg,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ue(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new fw(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new hw(r))}),n}da(e){this.ia=e.ls,this.oa=ue();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Ki.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class $x{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jx{constructor(e){this.key=e,this.Ra=!1}}class Bx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new as(a=>O0(a),il),this.fa=new Map,this.ga=new Set,this.pa=new De(H.comparator),this.ya=new Map,this.wa=new Qf,this.Sa={},this.ba=new Map,this.Da=Wi.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function zx(t,e){const n=Zx(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await ux(n.localStore,gn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await qx(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&iw(n.remoteStore,o)}return i}async function qx(t,e,n,r,i){t.va=(h,f,d)=>async function(v,b,y,w){let O=b.view.ca(y);O.Zi&&(O=await Xm(v.localStore,b.query,!1).then(({documents:ae})=>b.view.ca(ae,O)));const k=w&&w.targetChanges.get(b.targetId),z=w&&w.targetMismatches.get(b.targetId)!=null,oe=b.view.applyChanges(O,v.isPrimaryClient,k,z);return rg(v,b.targetId,oe.Ta),oe.snapshot}(t,h,f,d);const s=await Xm(t.localStore,e,!0),o=new Ux(e,s.ls),a=o.ca(s.documents),c=qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);rg(t,n,l.Ta);const u=new $x(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function Hx(t,e){const n=re(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!il(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await lh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sw(n.remoteStore,r.targetId),uh(n,r.targetId)}).catch($o)):(uh(n,r.targetId),await lh(n.localStore,r.targetId,!0))}async function Wx(t,e,n){const r=eO(t);try{const i=await function(o,a){const c=re(o),l=qe.now(),u=a.reduce((d,g)=>d.add(g.key),ue());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Vn(),v=ue();return c.ss.getEntries(d,u).next(b=>{g=b,g.forEach((y,w)=>{w.isValidDocument()||(v=v.add(y))})}).next(()=>c.localDocuments.getOverlayedDocuments(d,g)).next(b=>{h=b;const y=[];for(const w of a){const O=m2(w,h.get(w.key).overlayedDocument);O!=null&&y.push(new Ar(w.key,O,T0(O.value.mapValue),zt.exists(!0)))}return c.mutationQueue.addMutationBatch(d,l,y,a)}).next(b=>{f=b;const y=b.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(d,b.batchId,y)})}).then(()=>({batchId:f.batchId,changes:M0(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new De(ge)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,i.batchId,n),await Wo(r,i.changes),await hl(r.remoteStore)}catch(i){const s=nd(i,"Failed to persist write");n.reject(s)}}async function dw(t,e){const n=re(t);try{const r=await ax(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?Re(o.Ra):i.removedDocuments.size>0&&(Re(o.Ra),o.Ra=!1))}),await Wo(n,r,e)}catch(r){await $o(r)}}function ng(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=re(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(l=!0)}),l&&rd(c)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Kx(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new De(H.comparator);o=o.insert(s,ht.newNoDocument(s,Z.min()));const a=ue().add(s),c=new cl(Z.min(),new Map,new De(ge),o,a);await dw(r,c),r.pa=r.pa.remove(s),r.ya.delete(e),id(r)}else await lh(r.localStore,e,!1).then(()=>uh(r,e,n)).catch($o)}async function Gx(t,e){const n=re(t),r=e.batch.batchId;try{const i=await ox(n.localStore,e);mw(n,r,null),pw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wo(n,i)}catch(i){await $o(i)}}async function Qx(t,e,n){const r=re(t);try{const i=await function(o,a){const c=re(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Re(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);mw(r,e,n),pw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wo(r,i)}catch(i){await $o(i)}}function pw(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function mw(t,e,n){const r=re(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function uh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||gw(t,r)})}function gw(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(sw(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),id(t))}function rg(t,e,n){for(const r of n)r instanceof hw?(t.wa.addReference(r.key,e),Yx(t,r)):r instanceof fw?(U("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||gw(t,r.key)):X()}function Yx(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(U("SyncEngine","New document in limbo: "+n),t.ga.add(r),id(t))}function id(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new H(xe.fromString(e)),r=t.Da.next();t.ya.set(r,new jx(n)),t.pa=t.pa.insert(n,r),iw(t.remoteStore,new tr(gn(qf(n.path)),r,"TargetPurposeLimboResolution",Ff._e))}}async function Wo(t,e,n){const r=re(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Xf.Qi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Va.a_(i),await async function(c,l){const u=re(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(l,f=>P.forEach(f.ki,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>P.forEach(f.qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!jo(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=u.ts.get(f),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.ts=u.ts.insert(f,v)}}}(r.localStore,s))}async function Xx(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await ew(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(c=>{c.reject(new $(R.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wo(n,r._s)}}function Jx(t,e){const n=re(t),r=n.ya.get(e);if(r&&r.Ra)return ue().add(r.key);{let i=ue();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function Zx(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kx.bind(null,e),e.Va.a_=Vx.bind(null,e.eventManager),e.Va.Fa=Lx.bind(null,e.eventManager),e}function eO(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qx.bind(null,e),e}class ig{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ll(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sx(this.persistence,new rx,e.initialUser,this.serializer)}createPersistence(e){return new ex(Yf.jr,this.serializer)}createSharedClientState(e){return new fx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ng(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xx.bind(null,this.syncEngine),await xx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nx}()}createDatastore(e){const n=ll(e.databaseInfo.databaseId),r=function(s){return new gx(s)}(e.databaseInfo);return function(s,o,a,c){return new vx(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Ex(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ng(this.syncEngine,n,0),function(){return Zm.D()?new Zm:new dx}())}createSyncEngine(e,n){return function(i,s,o,a,c,l,u){const h=new Bx(i,s,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=re(n);U("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ho(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class nO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class rO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=E0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function su(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ew(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sO(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>eg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>eg(e.remoteStore,s)),t._onlineComponents=e}function iO(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function sO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await su(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!iO(n))throw n;Bi("Error using user provided cache. Falling back to memory cache: "+n),await su(t,new ig)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await su(t,new ig);return t._offlineComponents}async function _w(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await sg(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await sg(t,new tO))),t._onlineComponents}function oO(t){return _w(t).then(e=>e.syncEngine)}async function og(t){const e=await _w(t),n=e.eventManager;return n.onListen=zx.bind(null,e.syncEngine),n.onUnlisten=Hx.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function yw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ag=new Map;/**
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
 */function vw(t,e,n){if(!n)throw new $(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aO(t,e,n,r){if(e===!0&&r===!0)throw new $(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cg(t){if(!H.isDocumentKey(t))throw new $(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lg(t){if(H.isDocumentKey(t))throw new $(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fl(t);throw new $(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ug{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ug({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ug(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Rk;switch(r.type){case"firstParty":return new kk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ag.get(n);r&&(U("ComponentProvider","Removing Datastore"),ag.delete(n),r.terminate())}(this),Promise.resolve()}}function cO(t,e,n,r={}){var i;const s=(t=yn(t,dl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ut.MOCK_USER;else{a=iT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ut(l)}t._authCredentials=new Sk(new w0(a,c))}}/**
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
 */class ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class lr extends ls{constructor(e,n,r){super(e,n,qf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new H(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function Ln(t,e,...n){if(t=Ue(t),vw("collection","path",e),t instanceof dl){const r=xe.fromString(e,...n);return lg(r),new lr(t,null,r)}{if(!(t instanceof vt||t instanceof lr))throw new $(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return lg(r),new lr(t.firestore,null,r)}}function Yt(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=E0.newId()),vw("doc","path",e),t instanceof dl){const r=xe.fromString(e,...n);return cg(r),new vt(t,null,new H(r))}{if(!(t instanceof vt||t instanceof lr))throw new $(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return cg(r),new vt(t.firestore,t instanceof lr?t.converter:null,new H(r))}}/**
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
 */class lO{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new nw(this,"async_queue_retry"),this.iu=()=>{const n=iu();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=iu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=iu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new zr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!jo(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=td.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&X()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function hg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ti extends dl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new lO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ew(this),this._firestoreClient.terminate()}}function uO(t,e){const n=typeof t=="object"?t:Jh(),r=typeof t=="string"?t:e||"(default)",i=ai(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nT("firestore");s&&cO(i,...s)}return i}function ww(t){return t._firestoreClient||Ew(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ew(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,l,u){return new Bk(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,yw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new rO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gi(gt.fromBase64String(e))}catch(n){throw new $(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gi(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sd{constructor(e){this._methodName=e}}/**
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
 */class od{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const hO=/^__.*__$/;class fO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}class Iw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class ad{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new ad(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return mc(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(bw(this.Iu)&&hO.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class dO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ll(e)}pu(e,n,r,i=!1){return new ad({Iu:e,methodName:n,gu:r,path:nt.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ml(t){const e=t._freezeSettings(),n=ll(t._databaseId);return new dO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tw(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);cd("Data must be an object, but it was:",o,r);const a=Aw(r,o);let c,l;if(s.merge)c=new xt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=hh(e,h,n);if(!o.contains(f))throw new $(R.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Sw(u,f)||u.push(f)}c=new xt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new fO(new bt(a),c,l)}class gl extends sd{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gl}}function pO(t,e,n,r){const i=t.pu(1,e,n);cd("Data must be an object, but it was:",i,r);const s=[],o=bt.empty();ui(r,(c,l)=>{const u=ld(e,c,n);l=Ue(l);const h=i.Ru(u);if(l instanceof gl)s.push(u);else{const f=Ko(l,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new xt(s);return new Iw(o,a,i.fieldTransforms)}function mO(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[hh(e,r,n)],c=[i];if(s.length%2!=0)throw new $(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(hh(e,s[f])),c.push(s[f+1]);const l=[],u=bt.empty();for(let f=a.length-1;f>=0;--f)if(!Sw(l,a[f])){const d=a[f];let g=c[f];g=Ue(g);const v=o.Ru(d);if(g instanceof gl)l.push(d);else{const b=Ko(g,v);b!=null&&(l.push(d),u.set(d,b))}}const h=new xt(l);return new Iw(u,h,o.fieldTransforms)}function gO(t,e,n,r=!1){return Ko(n,t.pu(r?4:3,e))}function Ko(t,e){if(Rw(t=Ue(t)))return cd("Unsupported field value:",e,t),Aw(t,e);if(t instanceof sd)return function(r,i){if(!bw(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Ko(a,i.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return l2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:dc(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:dc(i.serializer,s)}}if(r instanceof od)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gi)return{bytesValue:G0(i.serializer,r._byteString)};if(r instanceof vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gf(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${fl(r)}`)}(t,e)}function Aw(t,e){const n={};return I0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(r,i)=>{const s=Ko(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Rw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof od||t instanceof Gi||t instanceof vt||t instanceof sd)}function cd(t,e,n){if(!Rw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=fl(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function hh(t,e,n){if((e=Ue(e))instanceof pl)return e._internalPath;if(typeof e=="string")return ld(t,e);throw mc("Field path arguments must be of type string or ",t,!1,void 0,n)}const _O=new RegExp("[~\\*/\\[\\]]");function ld(t,e,n){if(e.search(_O)>=0)throw mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pl(...e.split("."))._internalPath}catch{throw mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new $(R.INVALID_ARGUMENT,a+t+c)}function Sw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Pw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ud("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yO extends Pw{data(){return super.data()}}function ud(t,e){return typeof e=="string"?ld(t,e):e instanceof pl?e._internalPath:e._delegate._internalPath}/**
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
 */function vO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hd{}class wO extends hd{}function ni(t,e,...n){let r=[];e instanceof hd&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof fd).length,a=s.filter(c=>c instanceof _l).length;if(o>1||o>0&&a>0)throw new $(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class _l extends wO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _l(e,n,r)}_apply(e){const n=this._parse(e);return Cw(e._query,n),new ls(e.firestore,e.converter,rh(e._query,n))}_parse(e){const n=ml(e.firestore);return function(s,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){dg(h,u);const d=[];for(const g of h)d.push(fg(c,s,g));f={arrayValue:{values:d}}}else f=fg(c,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||dg(h,u),f=gO(a,o,h,u==="in"||u==="not-in");return ze.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function yo(t,e,n){const r=e,i=ud("where",t);return _l._create(i,r,n)}class fd extends hd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Cw(o,c),o=rh(o,c)}(e._query,n),new ls(e.firestore,e.converter,rh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fg(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new $(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!x0(e)&&n.indexOf("/")!==-1)throw new $(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!H.isDocumentKey(r))throw new $(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dm(t,new H(r))}if(n instanceof vt)return Dm(t,n._key);throw new $(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fl(n)}.`)}function dg(t,e){if(!Array.isArray(t)||t.length===0)throw new $(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Cw(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class EO{convertValue(e,n="none"){switch(ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new od(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$f(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fo(e));default:return null}}convertTimestamp(e){const n=mr(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Re(Z0(r));const i=new po(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function kw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Rs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xw extends Pw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ud("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Va extends xw{data(e={}){return super.data(e)}}class IO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Rs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Va(this._firestore,this._userDataWriter,r.key,r,new Rs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Va(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Rs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Va(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Rs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:bO(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class Ow extends EO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function TO(t,e,n){t=yn(t,vt);const r=yn(t.firestore,ti),i=kw(t.converter,e,n);return yl(r,[Tw(ml(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zt.none())])}function Nw(t,e,n,...r){t=yn(t,vt);const i=yn(t.firestore,ti),s=ml(i);let o;return o=typeof(e=Ue(e))=="string"||e instanceof pl?mO(s,"updateDoc",t._key,e,n,r):pO(s,"updateDoc",t._key,e),yl(i,[o.toMutation(t._key,zt.exists(!0))])}function js(t){return yl(yn(t.firestore,ti),[new Hf(t._key,zt.none())])}function dd(t,e){const n=yn(t.firestore,ti),r=Yt(t),i=kw(t.converter,e);return yl(n,[Tw(ml(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function ri(t,...e){var n,r,i;t=Ue(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||hg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(hg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof vt)l=yn(t.firestore,ti),u=qf(t._key.path),c={next:h=>{e[o]&&e[o](AO(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=yn(t,ls);l=yn(h.firestore,ti),u=h._query;const f=new Ow(l);c={next:d=>{e[o]&&e[o](new IO(l,f,h,d))},error:e[o+1],complete:e[o+2]},vO(t._query)}return function(f,d,g,v){const b=new nO(v),y=new Fx(d,b,g);return f.asyncQueue.enqueueAndForget(async()=>Dx(await og(f),y)),()=>{b.Na(),f.asyncQueue.enqueueAndForget(async()=>Mx(await og(f),y))}}(ww(l),u,a,c)}function yl(t,e){return function(r,i){const s=new zr;return r.asyncQueue.enqueueAndForget(async()=>Wx(await oO(r),i,s)),s.promise}(ww(t),e)}function AO(t,e,n){const r=n.docs.get(e._key),i=new Ow(t);return new xw(t,i,e._key,r,new Rs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){os=i})(ns),En(new Jt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ti(new Pk(r.getProvider("auth-internal")),new Ok(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new po(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Bt(km,"4.4.0",e),Bt(km,"4.4.0","esm2017")})();const RO={apiKey:"AIzaSyBOOh2SgVKUfB9py_Bk-ONWsoHgAZuEgIE",authDomain:"novaforge-bb5b4.firebaseapp.com",projectId:"novaforge-bb5b4",storageBucket:"novaforge-bb5b4.appspot.com",messagingSenderId:"947172484435",appId:"1:947172484435:web:7dd3344801c947e90f6da6",measurementId:"G-L400S2DMWP"},SO=dy(RO),Xe=uO();ZR(SO);const Ot=vC(),PO=(t,e)=>TO(Yt(Ln(Xe,"config"),t),e),CO=(t,e)=>ri(ni(Yt(Xe,"config",t)),e),kO=t=>dd(Ln(Xe,"spaces"),t),xO=(t,e)=>ri(ni(Ln(Xe,"spaces"),yo("uid","==",t)),e),OO=(t,e)=>ri(ni(Yt(Xe,"spaces",t)),e),NO=t=>{js(Yt(Xe,"spaces",t)),ri(ni(Ln(Xe,"executors"),yo("space","==",t)),e=>e.forEach(n=>js(Yt(Xe,"executors",n.id)))),ri(ni(Ln(Xe,"sensors"),yo("space","==",t)),e=>e.forEach(n=>js(Yt(Xe,"sensors",n.id))))},DO=t=>dd(Ln(Xe,"executors"),t),MO=(t,e)=>ri(ni(Ln(Xe,"executors"),yo("space","==",t)),e),pg=(t,e)=>Nw(Yt(Xe,"executors",t),e),VO=t=>js(Yt(Xe,"executors",t)),LO=t=>dd(Ln(Xe,"sensors"),t),FO=(t,e)=>ri(ni(Ln(Xe,"sensors"),yo("space","==",t)),e),UO=(t,e)=>Nw(Yt(Xe,"sensors",t),e),$O=t=>js(Yt(Xe,"sensors",t)),pd=WI("user",()=>{const t=se(""),e=se("");return{uid:t,username:e,getDate:()=>{const i=new Date,s=i.getDate(),o=i.getMonth()+1,a=i.getFullYear();return s+"/"+o+"/"+a},showUser:()=>{console.log({uid:t.value,username:e.value})}}}),jO="/NovaForge/assets/overlayLogin-QAwjxNhV.jpg",BO={class:""},zO=["href"],qO={__name:"BtnSocialMedia",props:["link","name","icon","bgColor","txtColor"],setup(t){const e=t;return(n,r)=>{const i=wr("font-awesome-icon");return te(),_e("div",BO,[E("a",{class:"flex items-center gap-2 w-fit py-2 px-3 text-xl rounded-lg",href:e.link,target:"_blank",rel:"noopener noreferrer",style:Ao({color:e.txtColor,"background-color":e.bgColor})},[ce(i,{icon:e.icon},null,8,["icon"]),E("p",null,Ne(e.name),1)],12,zO)])}}},us=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Dw=t=>(es("data-v-b20c0994"),t=t(),ts(),t),HO=Dw(()=>E("img",{class:"imgOverlay fixed w-full h-full top-0 left-0 bg-center bg-cover z-[-2]",src:jO,alt:"background"},null,-1)),WO=Dw(()=>E("div",{class:"fixed w-full h-full top-0 left-0 bg-darkBlack opacity-80 z-[-1]"},null,-1)),KO={__name:"OverlayComp",setup(t){return(e,n)=>(te(),_e(Ge,null,[ce(qO,{class:"absolute top-0 right-0 m-5 hover:scale-[1.03] transition duration-300 ease-in-out",link:"https://github.com/Marioby9/NovaForge",name:"Ver Proyecto",txtColor:"black",bgColor:"white",icon:"fa-brands fa-github"}),HO,WO],64))}},GO=us(KO,[["__scopeId","data-v-b20c0994"]]),QO={class:"view"},YO={__name:"App",setup(t){const e=Gb(),n=pd();return oP(Ot,()=>{Ot.currentUser&&(CO(Ot.currentUser.uid,r=>{n.uid=Ot.currentUser.uid,n.username=r.data().username}),e.push({path:"myspaces"}))}),(r,i)=>(te(),_e(Ge,null,[E("div",QO,[ce(Ve(ey))]),ce(GO)],64))}},vl="/NovaForge/assets/whiteLogo-UBAK3FfV.png",Mw=t=>(es("data-v-7db99e1d"),t=t(),ts(),t),XO={class:"flex items-center justify-center w-full h-full"},JO={class:"flex flex-col gap-10 items-center w-2/5"},ZO=Mw(()=>E("img",{src:vl,alt:"logo"},null,-1)),eN=Mw(()=>E("p",{class:"text-lg"},"Descubre NovaForge. Donde la tecnología y el comfort se encuentran. ",-1)),tN={class:"flex flex-col gap-3 justify-center items-center"},nN={__name:"HomeView",setup(t){return(e,n)=>(te(),_e("div",XO,[E("div",JO,[ZO,eN,E("div",tN,[ce(Ve(dr),{class:"text-center w-fit px-14 py-2 rounded-3xl text-lg bg-orange text-darkBlack font-bold hover:scale-[1.03] hover:bg-lightOrange transition duration-300 ease-in-out",to:"/login"},{default:On(()=>[$t("Iniciar Sesión ")]),_:1}),E("p",null,[$t("¿Aún no tienes una cuenta?. "),ce(Ve(dr),{class:"font-bold hover:underline",to:"/signup"},{default:On(()=>[$t("Regístrate")]),_:1})])])])]))}},rN=us(nN,[["__scopeId","data-v-7db99e1d"]]),Vw=t=>(es("data-v-b331491c"),t=t(),ts(),t),iN={class:"flex justify-center items-center gap-10 h-full"},sN=Vw(()=>E("img",{src:vl,alt:"logo",class:"w-[40%]"},null,-1)),oN={class:"flex flex-col p-5 gap-10 justify-center items-center w-[32%] h-[90%] bg-darkBlue rounded-2xl opacity-80"},aN=Vw(()=>E("div",{class:"font-bold text-center mb-10"},[E("p",{class:"text-4xl"},"¡Bienvenido!"),E("p",{class:"text-xl"},"Inicia sesión para empezar a usar NovaForge")],-1)),cN={class:"flex flex-col gap-3 text-darkBlack"},lN={class:"flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl"},uN={class:"flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl"},hN=["type"],fN={key:0,class:"text-bone"},dN={__name:"LoginView",setup(t){const e=se(""),n=se(""),r=se(!1),i=se(!1),s=se(""),o=async()=>{if(e.value!=""&&n.value!="")try{await rP(Ot,e.value,n.value),console.log(Ot.currentUser.email),i.value=!1,Go.push({path:"/myspaces"})}catch{s.value="Error. Datos incorrectos",i.value=!0}else s.value="Error. No puede haber campos vacíos",i.value=!0};return(a,c)=>{const l=wr("font-awesome-icon");return te(),_e(Ge,null,[E("div",iN,[sN,E("div",oN,[aN,E("div",cN,[E("div",lN,[Tt(E("input",{type:"text",placeholder:"email","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u)},null,512),[[wn,e.value]])]),E("div",uN,[Tt(E("input",{type:r.value?"text":"password",placeholder:"password","onUpdate:modelValue":c[1]||(c[1]=u=>n.value=u)},null,8,hN),[[Tu,n.value]]),ce(l,{class:"cursor-pointer",icon:r.value?"eye-slash":"eye",onClick:c[2]||(c[2]=u=>r.value=!r.value)},null,8,["icon"])])]),i.value?(te(),_e("p",fN,Ne(s.value),1)):rt("",!0),E("button",{class:"text-center w-fit px-14 py-2 rounded-xl text-lg bg-orange text-darkBlack font-bold hover:scale-[1.03] hover:bg-lightOrange transition duration-300 ease-in-out",onClick:c[3]||(c[3]=U_(u=>o(),["prevent"]))}," Iniciar Sesión "),E("p",null,[$t("¿Aún no tienes una cuenta?. "),ce(Ve(dr),{class:"font-bold hover:underline",to:"/signup"},{default:On(()=>[$t("Regístrate")]),_:1})])])]),ce(Ve(dr),{to:"/"},{default:On(()=>[ce(l,{icon:"arrow-left",class:"fixed top-0 left-0 m-10 text-white text-2xl"})]),_:1})],64)}}},pN=us(dN,[["__scopeId","data-v-b331491c"]]),Lw=t=>(es("data-v-463e707c"),t=t(),ts(),t),mN={class:"flex justify-center items-center gap-10 h-full"},gN={class:"flex flex-col p-5 gap-10 justify-center items-center w-[32%] h-[90%] bg-darkBlue rounded-2xl opacity-80"},_N=Lw(()=>E("div",{class:"font-bold text-center mb-10"},[E("p",{class:"text-4xl"},"¡Bienvenido!"),E("p",{class:"text-xl"},"Regístrate para empezar a usar NovaForge")],-1)),yN={class:"flex flex-col gap-3 text-darkBlack"},vN={class:"flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl"},wN={class:"flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl"},EN={class:"flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl"},IN=["type"],bN={class:"flex items-center gap-2 w-full py-1 px-2 bg-white rounded-3xl"},TN=["type"],AN={key:0,class:"text-bone"},RN=Lw(()=>E("img",{src:vl,alt:"logo",class:"w-[40%]"},null,-1)),SN={__name:"SignupView",setup(t){const e=se(""),n=se(""),r=se(""),i=se(""),s=se(!1),o=se(!1),a=se(""),c=async()=>{if(e.value!=""&&n.value!=""&&r.value!="")if(r.value==i.value)try{await nP(Ot,n.value,r.value),PO(Ot.currentUser.uid,{username:e.value}),o.value=!1,Go.push({path:"/myspaces"})}catch{a.value="Error. El usuario ya tiene una cuenta",o.value=!0}else a.value="Error. Las contraseñas no coinciden",o.value=!0,r.value="",i.value="";else a.value="Error. No puede haber campos vacíos",o.value=!0};return(l,u)=>{const h=wr("font-awesome-icon");return te(),_e(Ge,null,[E("div",mN,[E("div",gN,[_N,E("div",yN,[E("div",vN,[Tt(E("input",{type:"text",placeholder:"username","onUpdate:modelValue":u[0]||(u[0]=f=>e.value=f)},null,512),[[wn,e.value]])]),E("div",wN,[Tt(E("input",{type:"email",placeholder:"email","onUpdate:modelValue":u[1]||(u[1]=f=>n.value=f)},null,512),[[wn,n.value]])]),E("div",EN,[Tt(E("input",{type:s.value?"text":"password",placeholder:"password","onUpdate:modelValue":u[2]||(u[2]=f=>r.value=f)},null,8,IN),[[Tu,r.value]]),ce(h,{class:"cursor-pointer",icon:s.value?"eye-slash":"eye",onClick:u[3]||(u[3]=f=>s.value=!s.value)},null,8,["icon"])]),E("div",bN,[Tt(E("input",{type:s.value?"text":"password",placeholder:"confirm password","onUpdate:modelValue":u[4]||(u[4]=f=>i.value=f)},null,8,TN),[[Tu,i.value]])])]),o.value?(te(),_e("p",AN,Ne(a.value),1)):rt("",!0),E("button",{class:"text-center w-fit px-14 py-2 rounded-xl text-lg bg-orange text-darkBlack font-bold hover:scale-[1.03] hover:bg-lightOrange transition duration-300 ease-in-out",onClick:u[5]||(u[5]=U_(f=>c(),["prevent"]))}," Registrarme "),E("p",null,[$t("¿Ya tienes una cuenta?. "),ce(Ve(dr),{class:"font-bold hover:underline",to:"/login"},{default:On(()=>[$t("Inicia sesión")]),_:1})])]),RN]),ce(Ve(dr),{to:"/"},{default:On(()=>[ce(h,{icon:"arrow-left",class:"fixed top-0 left-0 m-10 text-white text-2xl"})]),_:1})],64)}}},PN=us(SN,[["__scopeId","data-v-463e707c"]]),CN={class:"w-full p-10 flex flex-col gap-5 justify-center items-center mb-4"},kN=E("img",{class:"w-auto h-20",src:vl,alt:"logo"},null,-1),xN={class:"flex gap-10 text-xl"},md={__name:"MenuComp",setup(t){const e=ty(),n=[{name:"Mis espacios",route:"/myspaces"},{name:"Perfil",route:"/user"}];return(r,i)=>{const s=wr("RouterLink");return te(),_e("header",CN,[kN,E("nav",xN,[(te(),_e(Ge,null,Ks(n,(o,a)=>ce(s,{key:a,class:"font-bold hover:underline",style:Ao({color:Ve(e).path==o.route?"orange":"white",textDecoration:Ve(e).path==o.route?"underline":"none"}),to:o.route},{default:On(()=>[$t(Ne(o.name),1)]),_:2},1032,["style","to"])),64))])])}}};function ON(t){return kh()?(Yg(t),!0):!1}function Fw(t){return typeof t=="function"?t():Ve(t)}const Uw=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const NN=Object.prototype.toString,DN=t=>NN.call(t)==="[object Object]",La=()=>{},MN=VN();function VN(){var t,e;return Uw&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Ss(t){var e;const n=Fw(t);return(e=n==null?void 0:n.$el)!=null?e:n}const $w=Uw?window:void 0;function ou(...t){let e,n,r,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,i]=t,e=$w):[e,n,r,i]=t,!e)return La;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,h,f,d)=>(u.addEventListener(h,f,d),()=>u.removeEventListener(h,f,d)),c=sr(()=>[Ss(e),Fw(i)],([u,h])=>{if(o(),!u)return;const f=DN(h)?{...h}:h;s.push(...n.flatMap(d=>r.map(g=>a(u,d,g,f))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return ON(l),l}let mg=!1;function gd(t,e,n={}){const{window:r=$w,ignore:i=[],capture:s=!0,detectIframe:o=!1}=n;if(!r)return La;MN&&!mg&&(mg=!0,Array.from(r.document.body.children).forEach(f=>f.addEventListener("click",La)),r.document.documentElement.addEventListener("click",La));let a=!0;const c=f=>i.some(d=>{if(typeof d=="string")return Array.from(r.document.querySelectorAll(d)).some(g=>g===f.target||f.composedPath().includes(g));{const g=Ss(d);return g&&(f.target===g||f.composedPath().includes(g))}}),u=[ou(r,"click",f=>{const d=Ss(t);if(!(!d||d===f.target||f.composedPath().includes(d))){if(f.detail===0&&(a=!c(f)),!a){a=!0;return}e(f)}},{passive:!0,capture:s}),ou(r,"pointerdown",f=>{const d=Ss(t);a=!c(f)&&!!(d&&!f.composedPath().includes(d))},{passive:!0}),o&&ou(r,"blur",f=>{setTimeout(()=>{var d;const g=Ss(t);((d=r.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(g!=null&&g.contains(r.document.activeElement))&&e(f)},0)})].filter(Boolean);return()=>u.forEach(f=>f())}const LN={class:"modal-bg"},FN=E("h1",{class:"text-2xl"},"Añade un espacio nuevo",-1),UN={class:"flex gap-8 items-center"},$N=E("label",{for:"nombre"},"Nombre: ",-1),jN={key:0,class:"text-bone"},BN={class:"mt-4 flex gap-8"},zN={__name:"AddSpace",emits:["close","add"],setup(t,{emit:e}){const n=se(""),r=se(!1),i=e,s=se(null),o=()=>{n.value!=""?i("add",n.value):r.value=!0};return gd(s,()=>i("close")),(a,c)=>(te(),_e("div",LN,[E("div",{class:"modal",ref_key:"spaceModal",ref:s},[FN,E("div",UN,[$N,Tt(E("input",{type:"text",id:"nombre",placeholder:"Ej: Salón",class:"p-2 rounded-md text-darkBlack","onUpdate:modelValue":c[0]||(c[0]=l=>n.value=l)},null,512),[[wn,n.value]])]),r.value?(te(),_e("p",jN,"Error. Debes introducir algún valor")):rt("",!0),E("div",BN,[E("p",{class:"p-2 rounded-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer",onClick:c[1]||(c[1]=l=>i("close"))},"cancelar "),E("p",{class:"text-orange p-2 rounded-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer",onClick:o},"añadir ")])],512)]))}},qN={class:"flex items-center justify-between w-[99%] rounded-md bg-grayBlue font-bold p-5"},HN={class:"flex items-center gap-6"},WN={class:"text-xl"},KN={class:"text-sm"},GN={class:"flex items-center gap-10"},QN={class:"flex gap-5 text-xl items-center"},YN={__name:"SpaceCard",props:["name","id","date"],setup(t){const e=t;return(n,r)=>{const i=wr("font-awesome-icon");return te(),_e("div",qN,[E("div",HN,[E("h1",WN,Ne(e.name),1),E("h2",KN,Ne(e.id),1)]),E("div",GN,[E("h1",null,Ne(e.date),1),E("div",QN,[ce(Ve(dr),{to:"/editSpace/"+e.id},{default:On(()=>[ce(i,{class:"cursor-pointer",icon:"pen-to-square"})]),_:1},8,["to"]),ce(i,{class:"cursor-pointer",icon:"trash",onClick:r[0]||(r[0]=s=>Ve(NO)(e.id))})])])])}}},XN=t=>(es("data-v-71b0001c"),t=t(),ts(),t),JN={class:"page"},ZN={class:"main"},eD={class:"text-4xl font-bold mb-8"},tD={id:"mySpaces",class:"flex flex-col gap-6"},nD=XN(()=>E("h1",{class:"sectionTitle"},"Mis espacios",-1)),rD={class:"flex flex-col gap-4 spaces overflow-y-scroll max-h-60"},iD={class:"flex justify-center"},sD={__name:"MySpacesView",setup(t){const e=pd(),n=se(!1),r=se([]),i=o=>{kO({uid:Ot.currentUser.uid,name:o,date:e.getDate()}),n.value=!1},s=()=>{xO(Ot.currentUser.uid,o=>{r.value=[],o.forEach(a=>{r.value.push({id:a.id,...a.data()})})})};return jh(()=>{s()}),(o,a)=>(te(),_e("div",JN,[E("div",ZN,[ce(md),E("h1",eD,"Bienvenido "+Ne(Ve(e).username),1),E("section",tD,[nD,E("div",rD,[(te(!0),_e(Ge,null,Ks(r.value,c=>(te(),Kt(YN,{key:c.id,id:c.id,name:c.name,date:c.date},null,8,["id","name","date"]))),128))]),E("div",iD,[E("button",{onClick:a[0]||(a[0]=c=>n.value=!0),class:"w-fit"},"+ añadir espacio")])]),n.value?(te(),Kt(zN,{key:0,onAdd:i,onClose:a[1]||(a[1]=c=>n.value=!1)})):rt("",!0)])]))}},oD=us(sD,[["__scopeId","data-v-71b0001c"]]),aD={class:"modal-bg"},cD={class:"text-2xl"},lD={class:"flex gap-8 items-center"},uD=E("label",{for:"nombre"},"Nombre: ",-1),hD={class:"flex gap-8 items-center"},fD={class:"relative inline-flex items-center cursor-pointer"},dD=E("div",{class:"w-11 h-6 bg-lightBlue peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"},null,-1),pD={key:0,class:"text-bone"},mD={class:"mt-4 flex gap-8"},gD={__name:"AddExecutor",props:["space"],emits:["close","add"],setup(t,{emit:e}){const n=t,r=e,i=se(""),s=se(!1),o=se(null),a=se(!1),c=()=>{i.value!=""?r("add",{name:i.value,on:a.value}):s.value=!0};return gd(o,()=>r("close")),(l,u)=>(te(),_e("div",aD,[E("div",{class:"modal",ref_key:"executorModal",ref:o},[E("h1",cD,"Añade un ejecutor para "+Ne(n.space),1),E("div",lD,[uD,Tt(E("input",{type:"text",id:"nombre",placeholder:"Ej: Persianas",class:"p-2 rounded-md text-darkBlack","onUpdate:modelValue":u[0]||(u[0]=h=>i.value=h)},null,512),[[wn,i.value]])]),E("div",hD,[E("label",fD,[Tt(E("input",{type:"checkbox","onUpdate:modelValue":u[1]||(u[1]=h=>a.value=h),class:"sr-only peer"},null,512),[[Kh,a.value]]),dD]),E("p",null,Ne(a.value?"Encendido":"Apagado"),1)]),s.value?(te(),_e("p",pD,"Error. Debes introducir algún valor")):rt("",!0),E("div",mD,[E("p",{class:"p-2 rounded-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer",onClick:u[2]||(u[2]=h=>r("close"))}," cancelar "),E("p",{class:"text-orange p-2 rounded-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer",onClick:c}," añadir ")])],512)]))}},_D={class:"modal-bg"},yD={class:"text-2xl"},vD={class:"flex gap-8 items-center w-full"},wD=E("label",{for:"nombre"},"Nombre: ",-1),ED={class:"flex gap-8 items-center w-full"},ID={class:"flex items-center gap-3"},bD=E("label",null,"Unidad: ",-1),TD=["value"],AD={class:"flex items-center gap-3"},RD=E("label",null,"Medida: ",-1),SD={key:0,class:"text-bone"},PD={class:"mt-4 flex gap-8"},CD={__name:"AddSensor",props:["space"],emits:["close","add"],setup(t,{emit:e}){const n=t,r=e,i=se(!1),s=se(null),o=[{name:"Temperatura",unitMessure:"ºC",icon:"temperature-three-quarters"},{name:"Humedad",unitMessure:"%",icon:"droplet"},{name:"CO2",unitMessure:"ppm",icon:"wind"},{name:"Luminosidad",unitMessure:"Lx",icon:"lightbulb"},{name:"Sonido",unitMessure:"dB",icon:"volume-high"},{name:"Presión",unitMessure:"Pa",icon:"gauge"}],a=se(o[0]),c=se(""),l=()=>{c.value!=""?(r("add",{name:c.value,unit:a.value.name,value:0}),i.value=!1):i.value=!0};return gd(s,()=>r("close")),(u,h)=>{const f=wr("font-awesome-icon");return te(),_e("div",_D,[E("div",{class:"modal",ref_key:"sensorModal",ref:s},[E("h1",yD,"Añade un sensor para "+Ne(n.space),1),E("div",vD,[wD,Tt(E("input",{type:"text",id:"nombre",placeholder:"Ej: Termómetro",class:"p-2 rounded-md w-full text-darkBlack","onUpdate:modelValue":h[0]||(h[0]=d=>c.value=d)},null,512),[[wn,c.value]])]),E("div",ED,[E("div",ID,[bD,Tt(E("select",{class:"text-darkBlack px-3 py-2 rounded-md cursor-pointer","onUpdate:modelValue":h[1]||(h[1]=d=>a.value=d)},[(te(),_e(Ge,null,Ks(o,(d,g)=>E("option",{key:g,value:d},Ne(d.name),9,TD)),64))],512),[[L_,a.value]])]),E("div",AD,[RD,E("p",null,Ne(a.value.unitMessure),1),ce(f,{class:"w-20",icon:a.value.icon,onClick:h[2]||(h[2]=d=>u.deleteSpace(n.id))},null,8,["icon"])])]),i.value?(te(),_e("p",SD,"Error. Debes introducir algún valor")):rt("",!0),E("div",PD,[E("p",{class:"p-2 rounded-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer",onClick:h[3]||(h[3]=d=>r("close"))}," cancelar "),E("p",{class:"text-orange p-2 rounded-md hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer",onClick:l}," añadir ")])],512)])}}},kD={class:"flex gap-5 text-lg border-l-4 h-16 border-solid border-darkBlack p-3 items-center"},xD=["placeholder"],OD={key:1,class:"w-[25%]"},ND={class:"w-[30%]"},DD={class:"w-[20%] flex items-center gap-2"},MD={class:"relative inline-flex items-center cursor-pointer"},VD=E("div",{class:"w-11 h-6 bg-gray peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-darkBlack after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"},null,-1),LD={class:"w-[20%] h-full flex gap-6 items-center justify-end"},FD={__name:"ExecutorCard",props:["executor"],setup(t){const{executor:e}=t,n=se(!1),r=se(e.on),i=se(e.name);sr(r,o=>{pg(e.id,{name:e.name,on:o,space:e.space})});const s=()=>{i.value!=""&&(e.name=i.value,pg(e.id,{name:i.value,on:r.value,space:e.space}),n.value=!1)};return(o,a)=>{const c=wr("font-awesome-icon");return te(),_e("div",kD,[n.value?Tt((te(),_e("input",{key:0,type:"text",class:"w-[25%] p-1 rounded-md",placeholder:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l)},null,8,xD)),[[wn,i.value]]):rt("",!0),n.value?rt("",!0):(te(),_e("p",OD,Ne(t.executor.name),1)),E("p",ND,Ne(t.executor.id),1),E("div",DD,[E("label",MD,[Tt(E("input",{type:"checkbox","onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),class:"sr-only peer"},null,512),[[Kh,r.value]]),VD]),E("p",null,Ne(t.executor.on?"Encendido":"Apagado"),1)]),E("div",LD,[n.value?rt("",!0):(te(),Kt(c,{key:0,class:"cursor-pointer",icon:"pen-to-square",onClick:a[2]||(a[2]=l=>n.value=!0)})),n.value?(te(),Kt(c,{key:1,class:"cursor-pointer",icon:"check",onClick:s})):rt("",!0),ce(c,{class:"cursor-pointer",icon:"trash",onClick:a[3]||(a[3]=l=>Ve(VO)(t.executor.id))})])])}}},UD={class:"flex gap-5 text-lg border-l-4 h-16 border-solid border-darkBlack p-3 items-center"},$D=["placeholder"],jD={key:1,class:"w-[25%]"},BD={class:"w-[30%]"},zD={class:"w-[20%] flex items-center gap-2"},qD={class:"w-[20%] h-full flex gap-6 items-center justify-end"},HD={__name:"SensorCard",props:["sensor"],setup(t){const{sensor:e}=t,n=se(!1),r=se(e.name),i=()=>{r.value!=""&&(e.name=r.value,UO(e.id,{name:r.value,unit:e.unit,value:e.value,space:e.space}),n.value=!1)};return(s,o)=>{const a=wr("font-awesome-icon");return te(),_e("div",UD,[n.value?Tt((te(),_e("input",{key:0,type:"text",class:"w-[25%] p-1 rounded-md",placeholder:r.value,"onUpdate:modelValue":o[0]||(o[0]=c=>r.value=c)},null,8,$D)),[[wn,r.value]]):rt("",!0),n.value?rt("",!0):(te(),_e("p",jD,Ne(t.sensor.name),1)),E("p",BD,Ne(t.sensor.id),1),E("div",zD,[E("p",null,Ne(t.sensor.unit)+": ",1),E("p",null,Ne(t.sensor.value),1)]),E("div",qD,[n.value?rt("",!0):(te(),Kt(a,{key:0,class:"cursor-pointer",icon:"pen-to-square",onClick:o[1]||(o[1]=c=>n.value=!0)})),n.value?(te(),Kt(a,{key:1,class:"cursor-pointer",icon:"check",onClick:i})):rt("",!0),ce(a,{class:"cursor-pointer",icon:"trash",onClick:o[2]||(o[2]=c=>Ve($O)(t.sensor.id))})])])}}},WD=t=>(es("data-v-a194dac9"),t=t(),ts(),t),KD={class:"page"},GD={class:"main"},QD=WD(()=>E("h1",{class:"text-4xl font-bold mb-6"},"Gestiona tu espacio:",-1)),YD={class:"flex justify-between bg-grayBlue p-5 rounded-md"},XD={class:"text-xl"},JD={class:"ml-2"},ZD={class:"text-xl"},e4={class:"ml-2"},t4={class:"text-xl"},n4={class:"ml-2"},r4={key:0,class:"devices flex flex-col gap-5 w-full h-60 p-5 text-darkBlack font-semibold bg-lightBlue rounded-md mt-2 overflow-y-scroll max-h-60"},i4={class:"flex justify-center items-center gap-20 mt-10"},s4={__name:"EditSpaceView",setup(t){const e=pd(),n=se({}),r=ty(),i=se(!1),s=se(!1),o=se([]),a=se([]),c=d=>{DO({space:n.value.id,...d}),i.value=!1},l=d=>{LO({space:n.value.id,...d}),s.value=!1},u=()=>{OO(r.params.id,d=>{n.value={id:d.id,...d.data()},h(),f()})},h=()=>{MO(n.value.id,d=>{o.value=[],d.forEach(g=>o.value.push({id:g.id,...g.data()}))})},f=()=>{FO(n.value.id,d=>{a.value=[],d.forEach(g=>a.value.push({id:g.id,...g.data()}))})};return jh(()=>{u()}),(d,g)=>(te(),_e("div",KD,[E("div",GD,[ce(md),QD,E("div",YD,[E("h2",XD,[$t(" Nombre: "),E("span",JD,Ne(n.value.name),1)]),E("h2",ZD,[$t(" Fecha de creación: "),E("span",e4,Ne(n.value.date),1)]),E("h2",t4,[$t(" Creador: "),E("span",n4,Ne(Ve(e).username),1)])]),a.value[0]||o.value[0]?(te(),_e("div",r4,[(te(!0),_e(Ge,null,Ks(o.value,v=>(te(),Kt(FD,{key:v.id,executor:v},null,8,["executor"]))),128)),(te(!0),_e(Ge,null,Ks(a.value,v=>(te(),Kt(HD,{key:v.id,sensor:v},null,8,["sensor"]))),128))])):rt("",!0),E("div",i4,[E("button",{onClick:g[0]||(g[0]=v=>s.value=!0)},"+ añadir sensor"),E("button",{onClick:g[1]||(g[1]=v=>i.value=!0)},"+ añadir ejecutor")]),i.value?(te(),Kt(gD,{key:1,onAdd:c,onClose:g[2]||(g[2]=v=>i.value=!1),space:n.value.name},null,8,["space"])):rt("",!0),s.value?(te(),Kt(CD,{key:2,onAdd:l,onClose:g[3]||(g[3]=v=>s.value=!1),space:n.value.name},null,8,["space"])):rt("",!0)])]))}},o4=us(s4,[["__scopeId","data-v-a194dac9"]]),a4={class:"page"},c4={class:"main"},l4=E("h1",{class:"text-3xl mb-8"},"UserView Works",-1),u4={__name:"UserView",setup(t){const e=()=>{aP(Ot),Go.push({path:"/"})};return(n,r)=>(te(),_e("div",a4,[E("div",c4,[ce(md),l4,E("button",{class:"w-fit p-5 bg-orange text-darkBlack rounded-md font-semibold",onClick:e},"Cerrar sesión")])]))}},Go=Wb({history:ub("/NovaForge/"),routes:[{path:"/",name:"home",component:rN,meta:{requiresAuth:!1}},{path:"/login",name:"login",component:pN,meta:{requiresAuth:!1}},{path:"/signup",name:"signup",component:PN,meta:{requiresAuth:!1}},{path:"/myspaces",name:"myspaces",component:oD,meta:{requiresAuth:!0}},{path:"/editSpace/:id",name:"editSpace",component:o4,meta:{requiresAuth:!0}},{path:"/user",name:"user",component:u4,meta:{requiresAuth:!0}}]});Go.beforeEach((t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?Ot.currentUser?n():n("/"):Ot.currentUser?n({name:"myspaces"}):n()});function gg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gg(Object(n),!0).forEach(function(r){We(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function gc(t){"@babel/helpers - typeof";return gc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gc(t)}function h4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f4(t,e,n){return e&&_g(t.prototype,e),n&&_g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _d(t,e){return p4(t)||g4(t,e)||jw(t,e)||y4()}function Qo(t){return d4(t)||m4(t)||jw(t)||_4()}function d4(t){if(Array.isArray(t))return fh(t)}function p4(t){if(Array.isArray(t))return t}function m4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function g4(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function jw(t,e){if(t){if(typeof t=="string")return fh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fh(t,e)}}function fh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yg=function(){},yd={},Bw={},zw=null,qw={mark:yg,measure:yg};try{typeof window<"u"&&(yd=window),typeof document<"u"&&(Bw=document),typeof MutationObserver<"u"&&(zw=MutationObserver),typeof performance<"u"&&(qw=performance)}catch{}var v4=yd.navigator||{},vg=v4.userAgent,wg=vg===void 0?"":vg,_r=yd,Oe=Bw,Eg=zw,ma=qw;_r.document;var Bn=!!Oe.documentElement&&!!Oe.head&&typeof Oe.addEventListener=="function"&&typeof Oe.createElement=="function",Hw=~wg.indexOf("MSIE")||~wg.indexOf("Trident/"),ga,_a,ya,va,wa,Fn="___FONT_AWESOME___",dh=16,Ww="fa",Kw="svg-inline--fa",ii="data-fa-i2svg",ph="data-fa-pseudo-element",w4="data-fa-pseudo-element-pending",vd="data-prefix",wd="data-icon",Ig="fontawesome-i2svg",E4="async",I4=["HTML","HEAD","STYLE","SCRIPT"],Gw=function(){try{return!0}catch{return!1}}(),Ce="classic",Me="sharp",Ed=[Ce,Me];function Yo(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ce]}})}var vo=Yo((ga={},We(ga,Ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),We(ga,Me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ga)),wo=Yo((_a={},We(_a,Ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),We(_a,Me,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),_a)),Eo=Yo((ya={},We(ya,Ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),We(ya,Me,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ya)),b4=Yo((va={},We(va,Ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),We(va,Me,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),va)),T4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Qw="fa-layers-text",A4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,R4=Yo((wa={},We(wa,Ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),We(wa,Me,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),wa)),Yw=[1,2,3,4,5,6,7,8,9,10],S4=Yw.concat([11,12,13,14,15,16,17,18,19,20]),P4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Lr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Io=new Set;Object.keys(wo[Ce]).map(Io.add.bind(Io));Object.keys(wo[Me]).map(Io.add.bind(Io));var C4=[].concat(Ed,Qo(Io),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Lr.GROUP,Lr.SWAP_OPACITY,Lr.PRIMARY,Lr.SECONDARY]).concat(Yw.map(function(t){return"".concat(t,"x")})).concat(S4.map(function(t){return"w-".concat(t)})),Bs=_r.FontAwesomeConfig||{};function k4(t){var e=Oe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function x4(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Oe&&typeof Oe.querySelector=="function"){var O4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];O4.forEach(function(t){var e=_d(t,2),n=e[0],r=e[1],i=x4(k4(n));i!=null&&(Bs[r]=i)})}var Xw={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ww,replacementClass:Kw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bs.familyPrefix&&(Bs.cssPrefix=Bs.familyPrefix);var Qi=L(L({},Xw),Bs);Qi.autoReplaceSvg||(Qi.observeMutations=!1);var B={};Object.keys(Xw).forEach(function(t){Object.defineProperty(B,t,{enumerable:!0,set:function(n){Qi[t]=n,zs.forEach(function(r){return r(B)})},get:function(){return Qi[t]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){Qi.cssPrefix=e,zs.forEach(function(n){return n(B)})},get:function(){return Qi.cssPrefix}});_r.FontAwesomeConfig=B;var zs=[];function N4(t){return zs.push(t),function(){zs.splice(zs.indexOf(t),1)}}var Kn=dh,fn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function D4(t){if(!(!t||!Bn)){var e=Oe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Oe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Oe.head.insertBefore(e,r),t}}var M4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bo(){for(var t=12,e="";t-- >0;)e+=M4[Math.random()*62|0];return e}function hs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Id(t){return t.classList?hs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Jw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function V4(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Jw(t[n]),'" ')},"").trim()}function wl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function bd(t){return t.size!==fn.size||t.x!==fn.x||t.y!==fn.y||t.rotate!==fn.rotate||t.flipX||t.flipY}function L4(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function F4(t){var e=t.transform,n=t.width,r=n===void 0?dh:n,i=t.height,s=i===void 0?dh:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&Hw?c+="translate(".concat(e.x/Kn-r/2,"em, ").concat(e.y/Kn-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Kn,"em), calc(-50% + ").concat(e.y/Kn,"em)) "):c+="translate(".concat(e.x/Kn,"em, ").concat(e.y/Kn,"em) "),c+="scale(".concat(e.size/Kn*(e.flipX?-1:1),", ").concat(e.size/Kn*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var U4=`:root, :host {
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
}`;function Zw(){var t=Ww,e=Kw,n=B.cssPrefix,r=B.replacementClass,i=U4;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var bg=!1;function au(){B.autoAddCss&&!bg&&(D4(Zw()),bg=!0)}var $4={mixout:function(){return{dom:{css:Zw,insertCss:au}}},hooks:function(){return{beforeDOMElementCreation:function(){au()},beforeI2svg:function(){au()}}}},Un=_r||{};Un[Fn]||(Un[Fn]={});Un[Fn].styles||(Un[Fn].styles={});Un[Fn].hooks||(Un[Fn].hooks={});Un[Fn].shims||(Un[Fn].shims=[]);var Gt=Un[Fn],eE=[],j4=function t(){Oe.removeEventListener("DOMContentLoaded",t),_c=1,eE.map(function(e){return e()})},_c=!1;Bn&&(_c=(Oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Oe.readyState),_c||Oe.addEventListener("DOMContentLoaded",j4));function B4(t){Bn&&(_c?setTimeout(t,0):eE.push(t))}function Xo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Jw(t):"<".concat(e," ").concat(V4(r),">").concat(s.map(Xo).join(""),"</").concat(e,">")}function Tg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var z4=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},cu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?z4(n,i):n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function q4(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function mh(t){var e=q4(t);return e.length===1?e[0].toString(16):null}function H4(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ag(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function gh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Ag(e);typeof Gt.hooks.addPack=="function"&&!i?Gt.hooks.addPack(t,Ag(e)):Gt.styles[t]=L(L({},Gt.styles[t]||{}),s),t==="fas"&&gh("fa",e)}var Ea,Ia,ba,Ti=Gt.styles,W4=Gt.shims,K4=(Ea={},We(Ea,Ce,Object.values(Eo[Ce])),We(Ea,Me,Object.values(Eo[Me])),Ea),Td=null,tE={},nE={},rE={},iE={},sE={},G4=(Ia={},We(Ia,Ce,Object.keys(vo[Ce])),We(Ia,Me,Object.keys(vo[Me])),Ia);function Q4(t){return~C4.indexOf(t)}function Y4(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Q4(i)?i:null}var oE=function(){var e=function(s){return cu(Ti,function(o,a,c){return o[c]=cu(a,s,{}),o},{})};tE=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),nE=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),sE=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in Ti||B.autoFetchSvg,r=cu(W4,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});rE=r.names,iE=r.unicodes,Td=El(B.styleDefault,{family:B.familyDefault})};N4(function(t){Td=El(t.styleDefault,{family:B.familyDefault})});oE();function Ad(t,e){return(tE[t]||{})[e]}function X4(t,e){return(nE[t]||{})[e]}function Fr(t,e){return(sE[t]||{})[e]}function aE(t){return rE[t]||{prefix:null,iconName:null}}function J4(t){var e=iE[t],n=Ad("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yr(){return Td}var Rd=function(){return{prefix:null,iconName:null,rest:[]}};function El(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ce:n,i=vo[r][t],s=wo[r][t]||wo[r][i],o=t in Gt.styles?t:null;return s||o||null}var Rg=(ba={},We(ba,Ce,Object.keys(Eo[Ce])),We(ba,Me,Object.keys(Eo[Me])),ba);function Il(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},We(e,Ce,"".concat(B.cssPrefix,"-").concat(Ce)),We(e,Me,"".concat(B.cssPrefix,"-").concat(Me)),e),o=null,a=Ce;(t.includes(s[Ce])||t.some(function(l){return Rg[Ce].includes(l)}))&&(a=Ce),(t.includes(s[Me])||t.some(function(l){return Rg[Me].includes(l)}))&&(a=Me);var c=t.reduce(function(l,u){var h=Y4(B.cssPrefix,u);if(Ti[u]?(u=K4[a].includes(u)?b4[a][u]:u,o=u,l.prefix=u):G4[a].indexOf(u)>-1?(o=u,l.prefix=El(u,{family:a})):h?l.iconName=h:u!==B.replacementClass&&u!==s[Ce]&&u!==s[Me]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var f=o==="fa"?aE(l.iconName):{},d=Fr(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Ti.far&&Ti.fas&&!B.autoFetchSvg&&(l.prefix="fas")}return l},Rd());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Me&&(Ti.fass||B.autoFetchSvg)&&(c.prefix="fass",c.iconName=Fr(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=yr()||"fas"),c}var Z4=function(){function t(){h4(this,t),this.definitions={}}return f4(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),gh(a,o[a]);var c=Eo[Ce][a];c&&gh(c,o[a]),oE()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),Sg=[],Ai={},Di={},eM=Object.keys(Di);function tM(t,e){var n=e.mixoutsTo;return Sg=t,Ai={},Object.keys(Di).forEach(function(r){eM.indexOf(r)===-1&&delete Di[r]}),Sg.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),gc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Ai[o]||(Ai[o]=[]),Ai[o].push(s[o])})}r.provides&&r.provides(Di)}),n}function _h(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ai[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function si(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ai[t]||[];i.forEach(function(s){s.apply(null,n)})}function $n(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Di[t]?Di[t].apply(null,e):void 0}function yh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||yr();if(e)return e=Fr(n,e)||e,Tg(cE.definitions,n,e)||Tg(Gt.styles,n,e)}var cE=new Z4,nM=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,si("noAuto")},rM={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bn?(si("beforeI2svg",e),$n("pseudoElements2svg",e),$n("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,B4(function(){sM({autoReplaceSvgRoot:n}),si("watch",e)})}},iM={icon:function(e){if(e===null)return null;if(gc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Fr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=El(e[0]);return{prefix:r,iconName:Fr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(T4))){var i=Il(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||yr(),iconName:Fr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=yr();return{prefix:s,iconName:Fr(s,e)||e}}}},Mt={noAuto:nM,config:B,dom:rM,parse:iM,library:cE,findIconDefinition:yh,toHtml:Xo},sM=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Oe:n;(Object.keys(Gt.styles).length>0||B.autoFetchSvg)&&Bn&&B.autoReplaceSvg&&Mt.dom.i2svg({node:r})};function bl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Xo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Bn){var r=Oe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function oM(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(bd(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=wl(L(L({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function aM(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function Sd(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,g=r.found?r:n,v=g.width,b=g.height,y=i==="fak",w=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(Q){return h.classes.indexOf(Q)===-1}).filter(function(Q){return Q!==""||!!Q}).concat(h.classes).join(" "),O={children:[],attributes:L(L({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:w,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(b)})},k=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/b*16*.0625,"em")}:{};d&&(O.attributes[ii]=""),c&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||bo())},children:[c]}),delete O.attributes.title);var z=L(L({},O),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:L(L({},k),h.styles)}),oe=r.found&&n.found?$n("generateAbstractMask",z)||{children:[],attributes:{}}:$n("generateAbstractIcon",z)||{children:[],attributes:{}},ae=oe.children,ie=oe.attributes;return z.children=ae,z.attributes=ie,a?aM(z):oM(z)}function Pg(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[ii]="");var u=L({},o.styles);bd(i)&&(u.transform=F4({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=wl(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function cM(t){var e=t.content,n=t.title,r=t.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=wl(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var lu=Gt.styles;function vh(t){var e=t[0],n=t[1],r=t.slice(4),i=_d(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(Lr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(Lr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(Lr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var lM={found:!1,width:512,height:512};function uM(t,e){!Gw&&!B.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function wh(t,e){var n=e;return e==="fa"&&B.styleDefault!==null&&(e=yr()),new Promise(function(r,i){if($n("missingIconAbstract"),n==="fa"){var s=aE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&lu[e]&&lu[e][t]){var o=lu[e][t];return r(vh(o))}uM(t,e),r(L(L({},lM),{},{icon:B.showMissingIcons&&t?$n("missingIconAbstract")||{}:{}}))})}var Cg=function(){},Eh=B.measurePerformance&&ma&&ma.mark&&ma.measure?ma:{mark:Cg,measure:Cg},Ps='FA "6.5.1"',hM=function(e){return Eh.mark("".concat(Ps," ").concat(e," begins")),function(){return lE(e)}},lE=function(e){Eh.mark("".concat(Ps," ").concat(e," ends")),Eh.measure("".concat(Ps," ").concat(e),"".concat(Ps," ").concat(e," begins"),"".concat(Ps," ").concat(e," ends"))},Pd={begin:hM,end:lE},Fa=function(){};function kg(t){var e=t.getAttribute?t.getAttribute(ii):null;return typeof e=="string"}function fM(t){var e=t.getAttribute?t.getAttribute(vd):null,n=t.getAttribute?t.getAttribute(wd):null;return e&&n}function dM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(B.replacementClass)}function pM(){if(B.autoReplaceSvg===!0)return Ua.replace;var t=Ua[B.autoReplaceSvg];return t||Ua.replace}function mM(t){return Oe.createElementNS("http://www.w3.org/2000/svg",t)}function gM(t){return Oe.createElement(t)}function uE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?mM:gM:n;if(typeof t=="string")return Oe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(uE(o,{ceFn:r}))}),i}function _M(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ua={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(uE(i),n)}),n.getAttribute(ii)===null&&B.keepOriginalSource){var r=Oe.createComment(_M(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Id(n).indexOf(B.replacementClass))return Ua.replace(e);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===B.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Xo(a)}).join(`
`);n.setAttribute(ii,""),n.innerHTML=o}};function xg(t){t()}function hE(t,e){var n=typeof e=="function"?e:Fa;if(t.length===0)n();else{var r=xg;B.mutateApproach===E4&&(r=_r.requestAnimationFrame||xg),r(function(){var i=pM(),s=Pd.begin("mutate");t.map(i),s(),n()})}}var Cd=!1;function fE(){Cd=!0}function Ih(){Cd=!1}var yc=null;function Og(t){if(Eg&&B.observeMutations){var e=t.treeCallback,n=e===void 0?Fa:e,r=t.nodeCallback,i=r===void 0?Fa:r,s=t.pseudoElementsCallback,o=s===void 0?Fa:s,a=t.observeMutationsRoot,c=a===void 0?Oe:a;yc=new Eg(function(l){if(!Cd){var u=yr();hs(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!kg(h.addedNodes[0])&&(B.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&B.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&kg(h.target)&&~P4.indexOf(h.attributeName))if(h.attributeName==="class"&&fM(h.target)){var f=Il(Id(h.target)),d=f.prefix,g=f.iconName;h.target.setAttribute(vd,d||u),g&&h.target.setAttribute(wd,g)}else dM(h.target)&&i(h.target)})}}),Bn&&yc.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yM(){yc&&yc.disconnect()}function vM(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function wM(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Il(Id(t));return i.prefix||(i.prefix=yr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=X4(i.prefix,t.innerText)||Ad(i.prefix,mh(t.innerText))),!i.iconName&&B.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function EM(t){var e=hs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return B.autoA11y&&(n?e["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||bo()):(e["aria-hidden"]="true",e.focusable="false")),e}function IM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:fn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ng(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wM(t),r=n.iconName,i=n.prefix,s=n.rest,o=EM(t),a=_h("parseNodeAttributes",{},t),c=e.styleParser?vM(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:fn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var bM=Gt.styles;function dE(t){var e=B.autoReplaceSvg==="nest"?Ng(t,{styleParser:!1}):Ng(t);return~e.extra.classes.indexOf(Qw)?$n("generateLayersText",t,e):$n("generateSvgReplacementMutation",t,e)}var vr=new Set;Ed.map(function(t){vr.add("fa-".concat(t))});Object.keys(vo[Ce]).map(vr.add.bind(vr));Object.keys(vo[Me]).map(vr.add.bind(vr));vr=Qo(vr);function Dg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bn)return Promise.resolve();var n=Oe.documentElement.classList,r=function(h){return n.add("".concat(Ig,"-").concat(h))},i=function(h){return n.remove("".concat(Ig,"-").concat(h))},s=B.autoFetchSvg?vr:Ed.map(function(u){return"fa-".concat(u)}).concat(Object.keys(bM));s.includes("fa")||s.push("fa");var o=[".".concat(Qw,":not([").concat(ii,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(ii,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=hs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Pd.begin("onTree"),l=a.reduce(function(u,h){try{var f=dE(h);f&&u.push(f)}catch(d){Gw||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){hE(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function TM(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dE(t).then(function(n){n&&hE([n],e)})}function AM(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:yh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:yh(i||{})),t(r,L(L({},n),{},{mask:i}))}}var RM=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?fn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,d=n.titleId,g=d===void 0?null:d,v=n.classes,b=v===void 0?[]:v,y=n.attributes,w=y===void 0?{}:y,O=n.styles,k=O===void 0?{}:O;if(e){var z=e.prefix,oe=e.iconName,ae=e.icon;return bl(L({type:"icon"},e),function(){return si("beforeDOMElementCreation",{iconDefinition:e,params:n}),B.autoA11y&&(f?w["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(g||bo()):(w["aria-hidden"]="true",w.focusable="false")),Sd({icons:{main:vh(ae),mask:c?vh(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:oe,transform:L(L({},fn),i),symbol:o,title:f,maskId:u,titleId:g,extra:{attributes:w,styles:k,classes:b}})})}},SM={mixout:function(){return{icon:AM(RM)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Dg,n.nodeCallback=TM,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Oe:r,s=n.callback,o=s===void 0?function(){}:s;return Dg(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(d,g){Promise.all([wh(i,a),u.iconName?wh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var b=_d(v,2),y=b[0],w=b[1];d([n,Sd({icons:{main:y,mask:w},prefix:a,iconName:i,transform:c,symbol:l,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=wl(a);c.length>0&&(i.style=c);var l;return bd(o)&&(l=$n("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},PM={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return bl({type:"layer"},function(){si("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(Qo(s)).join(" ")},children:o}]})}}}},CM={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,h=u===void 0?{}:u;return bl({type:"counter",content:n},function(){return si("beforeDOMElementCreation",{content:n,params:r}),cM({content:n.toString(),title:s,extra:{attributes:l,styles:h,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(Qo(a))}})})}}}},kM={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?fn:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,h=u===void 0?{}:u,f=r.styles,d=f===void 0?{}:f;return bl({type:"text",content:n},function(){return si("beforeDOMElementCreation",{content:n,params:r}),Pg({content:n,transform:L(L({},fn),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(B.cssPrefix,"-layers-text")].concat(Qo(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(Hw){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return B.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pg({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},xM=new RegExp('"',"ug"),Mg=[1105920,1112319];function OM(t){var e=t.replace(xM,""),n=H4(e,0),r=n>=Mg[0]&&n<=Mg[1],i=e.length===2?e[0]===e[1]:!1;return{value:mh(i?e[0]:e),isSecondary:r||i}}function Vg(t,e){var n="".concat(w4).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=hs(t.children),o=s.filter(function(ae){return ae.getAttribute(ph)===e})[0],a=_r.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(A4),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(c[2])?Me:Ce,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?wo[f][c[2].toLowerCase()]:R4[f][l],g=OM(h),v=g.value,b=g.isSecondary,y=c[0].startsWith("FontAwesome"),w=Ad(d,v),O=w;if(y){var k=J4(v);k.iconName&&k.prefix&&(w=k.iconName,d=k.prefix)}if(w&&!b&&(!o||o.getAttribute(vd)!==d||o.getAttribute(wd)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var z=IM(),oe=z.extra;oe.attributes[ph]=e,wh(w,d).then(function(ae){var ie=Sd(L(L({},z),{},{icons:{main:ae,mask:Rd()},prefix:d,iconName:O,extra:oe,watchable:!0})),Q=Oe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Q,t.firstChild):t.appendChild(Q),Q.outerHTML=ie.map(function(Ie){return Xo(Ie)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function NM(t){return Promise.all([Vg(t,"::before"),Vg(t,"::after")])}function DM(t){return t.parentNode!==document.head&&!~I4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ph)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Lg(t){if(Bn)return new Promise(function(e,n){var r=hs(t.querySelectorAll("*")).filter(DM).map(NM),i=Pd.begin("searchPseudoElements");fE(),Promise.all(r).then(function(){i(),Ih(),e()}).catch(function(){i(),Ih(),n()})})}var MM={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Lg,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Oe:r;B.searchPseudoElements&&Lg(i)}}},Fg=!1,VM={mixout:function(){return{dom:{unwatch:function(){fE(),Fg=!0}}}},hooks:function(){return{bootstrap:function(){Og(_h("mutationObserverCallbacks",{}))},noAuto:function(){yM()},watch:function(n){var r=n.observeMutationsRoot;Fg?Ih():Og(_h("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ug=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},LM={mixout:function(){return{parse:{transform:function(n){return Ug(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ug(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:L({},d.outer),children:[{tag:"g",attributes:L({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),d.path)}]}]}}}},uu={x:0,y:0,width:"100%",height:"100%"};function $g(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function FM(t){return t.tag==="g"?t.children:[t]}var UM={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Il(i.split(" ").map(function(o){return o.trim()})):Rd();return s.prefix||(s.prefix=yr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,h=o.width,f=o.icon,d=L4({transform:c,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:L(L({},uu),{},{fill:"white"})},v=u.children?{children:u.children.map($g)}:{},b={tag:"g",attributes:L({},d.inner),children:[$g(L({tag:u.tag,attributes:L(L({},u.attributes),d.path)},v))]},y={tag:"g",attributes:L({},d.outer),children:[b]},w="mask-".concat(a||bo()),O="clip-".concat(a||bo()),k={tag:"mask",attributes:L(L({},uu),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,y]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:FM(f)},k]};return r.push(z,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},uu)}),{children:r,attributes:i}}}},$M={provides:function(e){var n=!1;_r.matchMedia&&(n=_r.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jM={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},BM=[$4,SM,PM,CM,kM,MM,VM,LM,UM,$M,jM];tM(BM,{mixoutsTo:Mt});Mt.noAuto;Mt.config;var zM=Mt.library;Mt.dom;var bh=Mt.parse;Mt.findIconDefinition;Mt.toHtml;var qM=Mt.icon;Mt.layer;Mt.text;Mt.counter;function jg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Sn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jg(Object(n),!0).forEach(function(r){Et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function vc(t){"@babel/helpers - typeof";return vc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vc(t)}function Et(t,e,n){return e=GM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function HM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function WM(t,e){if(t==null)return{};var n=HM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function KM(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function GM(t){var e=KM(t,"string");return typeof e=="symbol"?e:String(e)}var QM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pE={exports:{}};(function(t){(function(e){var n=function(y,w,O){if(!l(w)||h(w)||f(w)||d(w)||c(w))return w;var k,z=0,oe=0;if(u(w))for(k=[],oe=w.length;z<oe;z++)k.push(n(y,w[z],O));else{k={};for(var ae in w)Object.prototype.hasOwnProperty.call(w,ae)&&(k[y(ae,O)]=n(y,w[ae],O))}return k},r=function(y,w){w=w||{};var O=w.separator||"_",k=w.split||/(?=[A-Z])/;return y.split(k).join(O)},i=function(y){return g(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,O){return O?O.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},s=function(y){var w=i(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},a=Object.prototype.toString,c=function(y){return typeof y=="function"},l=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},h=function(y){return a.call(y)=="[object Date]"},f=function(y){return a.call(y)=="[object RegExp]"},d=function(y){return a.call(y)=="[object Boolean]"},g=function(y){return y=y-0,y===y},v=function(y,w){var O=w&&"process"in w?w.process:w;return typeof O!="function"?y:function(k,z){return O(k,y,z)}},b={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(y,w){return n(v(i,w),y)},decamelizeKeys:function(y,w){return n(v(o,w),y,w)},pascalizeKeys:function(y,w){return n(v(s,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(QM)})(pE);var YM=pE.exports,XM=["class","style"];function JM(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=YM.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function ZM(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function mE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return mE(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=ZM(u);break;case"style":c.style=JM(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=WM(n,XM);return Wh(t.tag,Sn(Sn(Sn({},e),{},{class:i.class,style:Sn(Sn({},i.style),o)},i.attrs),a),r)}var gE=!1;try{gE=!0}catch{}function e3(){if(!gE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function hu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Et({},t,e):{}}function t3(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Et(e,"fa-".concat(t.size),t.size!==null),Et(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Et(e,"fa-pull-".concat(t.pull),t.pull!==null),Et(e,"fa-swap-opacity",t.swapOpacity),Et(e,"fa-bounce",t.bounce),Et(e,"fa-shake",t.shake),Et(e,"fa-beat",t.beat),Et(e,"fa-fade",t.fade),Et(e,"fa-beat-fade",t.beatFade),Et(e,"fa-flash",t.flash),Et(e,"fa-spin-pulse",t.spinPulse),Et(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Bg(t){if(t&&vc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(bh.icon)return bh.icon(t);if(t===null)return null;if(vc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var n3=$h({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=Qe(function(){return Bg(e.icon)}),s=Qe(function(){return hu("classes",t3(e))}),o=Qe(function(){return hu("transform",typeof e.transform=="string"?bh.transform(e.transform):e.transform)}),a=Qe(function(){return hu("mask",Bg(e.mask))}),c=Qe(function(){return qM(i.value,Sn(Sn(Sn(Sn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});sr(c,function(u){if(!u)return e3("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=Qe(function(){return c.value?mE(c.value.abstract[0],{},r):null});return function(){return l.value}}}),r3={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},i3={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},s3={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},o3={prefix:"fas",iconName:"gauge",icon:[512,512,["dashboard","gauge-med","tachometer-alt-average"],"f624","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},a3={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},c3={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},l3={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},u3={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},h3={prefix:"fas",iconName:"temperature-three-quarters",icon:[320,512,["temperature-3","thermometer-3","thermometer-three-quarters"],"f2c8","M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"]},f3={prefix:"fas",iconName:"droplet",icon:[384,512,[128167,"tint"],"f043","M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"]},d3={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"]},p3={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},m3={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};zM.add(c3,s3,m3,u3,l3,i3,h3,f3,r3,d3,a3,o3,p3);const Tl=LI(YO);Tl.component("font-awesome-icon",n3);Tl.use($I());Tl.use(Go);Tl.mount("#app");
