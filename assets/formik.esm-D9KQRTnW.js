import{bc as At,r as d}from"./index-JZUUoYU5.js";var jt=function(e){return Ot(e)&&!$t(e)};function Ot(r){return!!r&&typeof r=="object"}function $t(r){var e=Object.prototype.toString.call(r);return e==="[object RegExp]"||e==="[object Date]"||Ct(r)}var It=typeof Symbol=="function"&&Symbol.for,wt=It?Symbol.for("react.element"):60103;function Ct(r){return r.$$typeof===wt}function Ft(r){return Array.isArray(r)?[]:{}}function dr(r,e){return e.clone!==!1&&e.isMergeableObject(r)?nr(Ft(r),r,e):r}function Mt(r,e,t){return r.concat(e).map(function(n){return dr(n,t)})}function Rt(r,e,t){var n={};return t.isMergeableObject(r)&&Object.keys(r).forEach(function(i){n[i]=dr(r[i],t)}),Object.keys(e).forEach(function(i){!t.isMergeableObject(e[i])||!r[i]?n[i]=dr(e[i],t):n[i]=nr(r[i],e[i],t)}),n}function nr(r,e,t){t=t||{},t.arrayMerge=t.arrayMerge||Mt,t.isMergeableObject=t.isMergeableObject||jt;var n=Array.isArray(e),i=Array.isArray(r),o=n===i;return o?n?t.arrayMerge(r,e,t):Rt(r,e,t):dr(e,t)}nr.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,i){return nr(n,i,t)},{})};var wr=nr,Pe=typeof global=="object"&&global&&global.Object===Object&&global,Pt=typeof self=="object"&&self&&self.Object===Object&&self,R=Pe||Pt||Function("return this")(),N=R.Symbol,Le=Object.prototype,Lt=Le.hasOwnProperty,Dt=Le.toString,er=N?N.toStringTag:void 0;function xt(r){var e=Lt.call(r,er),t=r[er];try{r[er]=void 0;var n=!0}catch{}var i=Dt.call(r);return n&&(e?r[er]=t:delete r[er]),i}var Ut=Object.prototype,Nt=Ut.toString;function Vt(r){return Nt.call(r)}var Bt="[object Null]",Gt="[object Undefined]",oe=N?N.toStringTag:void 0;function W(r){return r==null?r===void 0?Gt:Bt:oe&&oe in Object(r)?xt(r):Vt(r)}function De(r,e){return function(t){return r(e(t))}}var Dr=De(Object.getPrototypeOf,Object);function Y(r){return r!=null&&typeof r=="object"}var Ht="[object Object]",zt=Function.prototype,Kt=Object.prototype,xe=zt.toString,Wt=Kt.hasOwnProperty,Yt=xe.call(Object);function ue(r){if(!Y(r)||W(r)!=Ht)return!1;var e=Dr(r);if(e===null)return!0;var t=Wt.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&xe.call(t)==Yt}var ce=Array.isArray,se=Object.keys,kt=Object.prototype.hasOwnProperty,qt=typeof Element<"u";function Cr(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){var t=ce(r),n=ce(e),i,o,c;if(t&&n){if(o=r.length,o!=e.length)return!1;for(i=o;i--!==0;)if(!Cr(r[i],e[i]))return!1;return!0}if(t!=n)return!1;var p=r instanceof Date,S=e instanceof Date;if(p!=S)return!1;if(p&&S)return r.getTime()==e.getTime();var b=r instanceof RegExp,x=e instanceof RegExp;if(b!=x)return!1;if(b&&x)return r.toString()==e.toString();var I=se(r);if(o=I.length,o!==se(e).length)return!1;for(i=o;i--!==0;)if(!kt.call(e,I[i]))return!1;if(qt&&r instanceof Element&&e instanceof Element)return r===e;for(i=o;i--!==0;)if(c=I[i],!(c==="_owner"&&r.$$typeof)&&!Cr(r[c],e[c]))return!1;return!0}return r!==r&&e!==e}var Xt=function(e,t){try{return Cr(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const G=At(Xt);function Zt(){this.__data__=[],this.size=0}function Ue(r,e){return r===e||r!==r&&e!==e}function pr(r,e){for(var t=r.length;t--;)if(Ue(r[t][0],e))return t;return-1}var Jt=Array.prototype,Qt=Jt.splice;function rn(r){var e=this.__data__,t=pr(e,r);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():Qt.call(e,t,1),--this.size,!0}function en(r){var e=this.__data__,t=pr(e,r);return t<0?void 0:e[t][1]}function tn(r){return pr(this.__data__,r)>-1}function nn(r,e){var t=this.__data__,n=pr(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this}function D(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}D.prototype.clear=Zt;D.prototype.delete=rn;D.prototype.get=en;D.prototype.has=tn;D.prototype.set=nn;function an(){this.__data__=new D,this.size=0}function on(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t}function un(r){return this.__data__.get(r)}function cn(r){return this.__data__.has(r)}function or(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var sn="[object AsyncFunction]",ln="[object Function]",fn="[object GeneratorFunction]",dn="[object Proxy]";function Ne(r){if(!or(r))return!1;var e=W(r);return e==ln||e==fn||e==sn||e==dn}var jr=R["__core-js_shared__"],le=function(){var r=/[^.]+$/.exec(jr&&jr.keys&&jr.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function pn(r){return!!le&&le in r}var vn=Function.prototype,hn=vn.toString;function k(r){if(r!=null){try{return hn.call(r)}catch{}try{return r+""}catch{}}return""}var yn=/[\\^$.*+?()[\]{}|]/g,gn=/^\[object .+?Constructor\]$/,bn=Function.prototype,Tn=Object.prototype,mn=bn.toString,Sn=Tn.hasOwnProperty,En=RegExp("^"+mn.call(Sn).replace(yn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _n(r){if(!or(r)||pn(r))return!1;var e=Ne(r)?En:gn;return e.test(k(r))}function An(r,e){return r==null?void 0:r[e]}function q(r,e){var t=An(r,e);return _n(t)?t:void 0}var ar=q(R,"Map"),ir=q(Object,"create");function jn(){this.__data__=ir?ir(null):{},this.size=0}function On(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e}var $n="__lodash_hash_undefined__",In=Object.prototype,wn=In.hasOwnProperty;function Cn(r){var e=this.__data__;if(ir){var t=e[r];return t===$n?void 0:t}return wn.call(e,r)?e[r]:void 0}var Fn=Object.prototype,Mn=Fn.hasOwnProperty;function Rn(r){var e=this.__data__;return ir?e[r]!==void 0:Mn.call(e,r)}var Pn="__lodash_hash_undefined__";function Ln(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=ir&&e===void 0?Pn:e,this}function K(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}K.prototype.clear=jn;K.prototype.delete=On;K.prototype.get=Cn;K.prototype.has=Rn;K.prototype.set=Ln;function Dn(){this.size=0,this.__data__={hash:new K,map:new(ar||D),string:new K}}function xn(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null}function vr(r,e){var t=r.__data__;return xn(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Un(r){var e=vr(this,r).delete(r);return this.size-=e?1:0,e}function Nn(r){return vr(this,r).get(r)}function Vn(r){return vr(this,r).has(r)}function Bn(r,e){var t=vr(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this}function V(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}V.prototype.clear=Dn;V.prototype.delete=Un;V.prototype.get=Nn;V.prototype.has=Vn;V.prototype.set=Bn;var Gn=200;function Hn(r,e){var t=this.__data__;if(t instanceof D){var n=t.__data__;if(!ar||n.length<Gn-1)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new V(n)}return t.set(r,e),this.size=t.size,this}function Q(r){var e=this.__data__=new D(r);this.size=e.size}Q.prototype.clear=an;Q.prototype.delete=on;Q.prototype.get=un;Q.prototype.has=cn;Q.prototype.set=Hn;function zn(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}var fe=function(){try{var r=q(Object,"defineProperty");return r({},"",{}),r}catch{}}();function Ve(r,e,t){e=="__proto__"&&fe?fe(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t}var Kn=Object.prototype,Wn=Kn.hasOwnProperty;function Be(r,e,t){var n=r[e];(!(Wn.call(r,e)&&Ue(n,t))||t===void 0&&!(e in r))&&Ve(r,e,t)}function hr(r,e,t,n){var i=!t;t||(t={});for(var o=-1,c=e.length;++o<c;){var p=e[o],S=n?n(t[p],r[p],p,t,r):void 0;S===void 0&&(S=r[p]),i?Ve(t,p,S):Be(t,p,S)}return t}function Yn(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}var kn="[object Arguments]";function de(r){return Y(r)&&W(r)==kn}var Ge=Object.prototype,qn=Ge.hasOwnProperty,Xn=Ge.propertyIsEnumerable,Zn=de(function(){return arguments}())?de:function(r){return Y(r)&&qn.call(r,"callee")&&!Xn.call(r,"callee")},ur=Array.isArray;function Jn(){return!1}var He=typeof exports=="object"&&exports&&!exports.nodeType&&exports,pe=He&&typeof module=="object"&&module&&!module.nodeType&&module,Qn=pe&&pe.exports===He,ve=Qn?R.Buffer:void 0,ra=ve?ve.isBuffer:void 0,ze=ra||Jn,ea=9007199254740991,ta=/^(?:0|[1-9]\d*)$/;function na(r,e){var t=typeof r;return e=e??ea,!!e&&(t=="number"||t!="symbol"&&ta.test(r))&&r>-1&&r%1==0&&r<e}var aa=9007199254740991;function Ke(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=aa}var ia="[object Arguments]",oa="[object Array]",ua="[object Boolean]",ca="[object Date]",sa="[object Error]",la="[object Function]",fa="[object Map]",da="[object Number]",pa="[object Object]",va="[object RegExp]",ha="[object Set]",ya="[object String]",ga="[object WeakMap]",ba="[object ArrayBuffer]",Ta="[object DataView]",ma="[object Float32Array]",Sa="[object Float64Array]",Ea="[object Int8Array]",_a="[object Int16Array]",Aa="[object Int32Array]",ja="[object Uint8Array]",Oa="[object Uint8ClampedArray]",$a="[object Uint16Array]",Ia="[object Uint32Array]",m={};m[ma]=m[Sa]=m[Ea]=m[_a]=m[Aa]=m[ja]=m[Oa]=m[$a]=m[Ia]=!0;m[ia]=m[oa]=m[ba]=m[ua]=m[Ta]=m[ca]=m[sa]=m[la]=m[fa]=m[da]=m[pa]=m[va]=m[ha]=m[ya]=m[ga]=!1;function wa(r){return Y(r)&&Ke(r.length)&&!!m[W(r)]}function xr(r){return function(e){return r(e)}}var We=typeof exports=="object"&&exports&&!exports.nodeType&&exports,tr=We&&typeof module=="object"&&module&&!module.nodeType&&module,Ca=tr&&tr.exports===We,Or=Ca&&Pe.process,J=function(){try{var r=tr&&tr.require&&tr.require("util").types;return r||Or&&Or.binding&&Or.binding("util")}catch{}}(),he=J&&J.isTypedArray,Fa=he?xr(he):wa,Ma=Object.prototype,Ra=Ma.hasOwnProperty;function Ye(r,e){var t=ur(r),n=!t&&Zn(r),i=!t&&!n&&ze(r),o=!t&&!n&&!i&&Fa(r),c=t||n||i||o,p=c?Yn(r.length,String):[],S=p.length;for(var b in r)(e||Ra.call(r,b))&&!(c&&(b=="length"||i&&(b=="offset"||b=="parent")||o&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||na(b,S)))&&p.push(b);return p}var Pa=Object.prototype;function Ur(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||Pa;return r===t}var La=De(Object.keys,Object),Da=Object.prototype,xa=Da.hasOwnProperty;function Ua(r){if(!Ur(r))return La(r);var e=[];for(var t in Object(r))xa.call(r,t)&&t!="constructor"&&e.push(t);return e}function ke(r){return r!=null&&Ke(r.length)&&!Ne(r)}function Nr(r){return ke(r)?Ye(r):Ua(r)}function Na(r,e){return r&&hr(e,Nr(e),r)}function Va(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Ba=Object.prototype,Ga=Ba.hasOwnProperty;function Ha(r){if(!or(r))return Va(r);var e=Ur(r),t=[];for(var n in r)n=="constructor"&&(e||!Ga.call(r,n))||t.push(n);return t}function Vr(r){return ke(r)?Ye(r,!0):Ha(r)}function za(r,e){return r&&hr(e,Vr(e),r)}var qe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ye=qe&&typeof module=="object"&&module&&!module.nodeType&&module,Ka=ye&&ye.exports===qe,ge=Ka?R.Buffer:void 0,be=ge?ge.allocUnsafe:void 0;function Wa(r,e){if(e)return r.slice();var t=r.length,n=be?be(t):new r.constructor(t);return r.copy(n),n}function Xe(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}function Ya(r,e){for(var t=-1,n=r==null?0:r.length,i=0,o=[];++t<n;){var c=r[t];e(c,t,r)&&(o[i++]=c)}return o}function Ze(){return[]}var ka=Object.prototype,qa=ka.propertyIsEnumerable,Te=Object.getOwnPropertySymbols,Br=Te?function(r){return r==null?[]:(r=Object(r),Ya(Te(r),function(e){return qa.call(r,e)}))}:Ze;function Xa(r,e){return hr(r,Br(r),e)}function Je(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r}var Za=Object.getOwnPropertySymbols,Qe=Za?function(r){for(var e=[];r;)Je(e,Br(r)),r=Dr(r);return e}:Ze;function Ja(r,e){return hr(r,Qe(r),e)}function rt(r,e,t){var n=e(r);return ur(r)?n:Je(n,t(r))}function Qa(r){return rt(r,Nr,Br)}function ri(r){return rt(r,Vr,Qe)}var Fr=q(R,"DataView"),Mr=q(R,"Promise"),Rr=q(R,"Set"),Pr=q(R,"WeakMap"),me="[object Map]",ei="[object Object]",Se="[object Promise]",Ee="[object Set]",_e="[object WeakMap]",Ae="[object DataView]",ti=k(Fr),ni=k(ar),ai=k(Mr),ii=k(Rr),oi=k(Pr),H=W;(Fr&&H(new Fr(new ArrayBuffer(1)))!=Ae||ar&&H(new ar)!=me||Mr&&H(Mr.resolve())!=Se||Rr&&H(new Rr)!=Ee||Pr&&H(new Pr)!=_e)&&(H=function(r){var e=W(r),t=e==ei?r.constructor:void 0,n=t?k(t):"";if(n)switch(n){case ti:return Ae;case ni:return me;case ai:return Se;case ii:return Ee;case oi:return _e}return e});const Gr=H;var ui=Object.prototype,ci=ui.hasOwnProperty;function si(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&ci.call(r,"index")&&(t.index=r.index,t.input=r.input),t}var je=R.Uint8Array;function Hr(r){var e=new r.constructor(r.byteLength);return new je(e).set(new je(r)),e}function li(r,e){var t=e?Hr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var fi=/\w*$/;function di(r){var e=new r.constructor(r.source,fi.exec(r));return e.lastIndex=r.lastIndex,e}var Oe=N?N.prototype:void 0,$e=Oe?Oe.valueOf:void 0;function pi(r){return $e?Object($e.call(r)):{}}function vi(r,e){var t=e?Hr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var hi="[object Boolean]",yi="[object Date]",gi="[object Map]",bi="[object Number]",Ti="[object RegExp]",mi="[object Set]",Si="[object String]",Ei="[object Symbol]",_i="[object ArrayBuffer]",Ai="[object DataView]",ji="[object Float32Array]",Oi="[object Float64Array]",$i="[object Int8Array]",Ii="[object Int16Array]",wi="[object Int32Array]",Ci="[object Uint8Array]",Fi="[object Uint8ClampedArray]",Mi="[object Uint16Array]",Ri="[object Uint32Array]";function Pi(r,e,t){var n=r.constructor;switch(e){case _i:return Hr(r);case hi:case yi:return new n(+r);case Ai:return li(r,t);case ji:case Oi:case $i:case Ii:case wi:case Ci:case Fi:case Mi:case Ri:return vi(r,t);case gi:return new n;case bi:case Si:return new n(r);case Ti:return di(r);case mi:return new n;case Ei:return pi(r)}}var Ie=Object.create,Li=function(){function r(){}return function(e){if(!or(e))return{};if(Ie)return Ie(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}();function Di(r){return typeof r.constructor=="function"&&!Ur(r)?Li(Dr(r)):{}}var xi="[object Map]";function Ui(r){return Y(r)&&Gr(r)==xi}var we=J&&J.isMap,Ni=we?xr(we):Ui,Vi="[object Set]";function Bi(r){return Y(r)&&Gr(r)==Vi}var Ce=J&&J.isSet,Gi=Ce?xr(Ce):Bi,Hi=1,zi=2,Ki=4,et="[object Arguments]",Wi="[object Array]",Yi="[object Boolean]",ki="[object Date]",qi="[object Error]",tt="[object Function]",Xi="[object GeneratorFunction]",Zi="[object Map]",Ji="[object Number]",nt="[object Object]",Qi="[object RegExp]",ro="[object Set]",eo="[object String]",to="[object Symbol]",no="[object WeakMap]",ao="[object ArrayBuffer]",io="[object DataView]",oo="[object Float32Array]",uo="[object Float64Array]",co="[object Int8Array]",so="[object Int16Array]",lo="[object Int32Array]",fo="[object Uint8Array]",po="[object Uint8ClampedArray]",vo="[object Uint16Array]",ho="[object Uint32Array]",T={};T[et]=T[Wi]=T[ao]=T[io]=T[Yi]=T[ki]=T[oo]=T[uo]=T[co]=T[so]=T[lo]=T[Zi]=T[Ji]=T[nt]=T[Qi]=T[ro]=T[eo]=T[to]=T[fo]=T[po]=T[vo]=T[ho]=!0;T[qi]=T[tt]=T[no]=!1;function fr(r,e,t,n,i,o){var c,p=e&Hi,S=e&zi,b=e&Ki;if(t&&(c=i?t(r,n,i,o):t(r)),c!==void 0)return c;if(!or(r))return r;var x=ur(r);if(x){if(c=si(r),!p)return Xe(r,c)}else{var I=Gr(r),f=I==tt||I==Xi;if(ze(r))return Wa(r,p);if(I==nt||I==et||f&&!i){if(c=S||f?{}:Di(r),!p)return S?Ja(r,za(c,r)):Xa(r,Na(c,r))}else{if(!T[I])return i?r:{};c=Pi(r,I,p)}}o||(o=new Q);var O=o.get(r);if(O)return O;o.set(r,c),Gi(r)?r.forEach(function(j){c.add(fr(j,e,t,j,r,o))}):Ni(r)&&r.forEach(function(j,E){c.set(E,fr(j,e,t,E,r,o))});var P=b?S?ri:Qa:S?Vr:Nr,M=x?void 0:P(r);return zn(M||r,function(j,E){M&&(E=j,j=r[E]),Be(c,E,fr(j,e,t,E,r,o))}),c}var yo=4;function Fe(r){return fr(r,yo)}function at(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}var go="[object Symbol]";function zr(r){return typeof r=="symbol"||Y(r)&&W(r)==go}var bo="Expected a function";function Kr(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(bo);var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var c=r.apply(this,n);return t.cache=o.set(i,c)||o,c};return t.cache=new(Kr.Cache||V),t}Kr.Cache=V;var To=500;function mo(r){var e=Kr(r,function(n){return t.size===To&&t.clear(),n}),t=e.cache;return e}var So=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Eo=/\\(\\)?/g,_o=mo(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(So,function(t,n,i,o){e.push(i?o.replace(Eo,"$1"):n||t)}),e});const Ao=_o;var jo=1/0;function Oo(r){if(typeof r=="string"||zr(r))return r;var e=r+"";return e=="0"&&1/r==-jo?"-0":e}var $o=1/0,Me=N?N.prototype:void 0,Re=Me?Me.toString:void 0;function it(r){if(typeof r=="string")return r;if(ur(r))return at(r,it)+"";if(zr(r))return Re?Re.call(r):"";var e=r+"";return e=="0"&&1/r==-$o?"-0":e}function Io(r){return r==null?"":it(r)}function ot(r){return ur(r)?at(r,Oo):zr(r)?[r]:Xe(Ao(Io(r)))}function A(){return A=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},A.apply(this,arguments)}function ut(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}var yr=d.createContext(void 0);yr.displayName="FormikContext";yr.Provider;yr.Consumer;function wo(){var r=d.useContext(yr);return r}var F=function(e){return typeof e=="function"},gr=function(e){return e!==null&&typeof e=="object"},Co=function(e){return String(Math.floor(Number(e)))===e},$r=function(e){return Object.prototype.toString.call(e)==="[object String]"},Ir=function(e){return gr(e)&&F(e.then)};function $(r,e,t,n){n===void 0&&(n=0);for(var i=ot(e);r&&n<i.length;)r=r[i[n++]];return n!==i.length&&!r||r===void 0?t:r}function z(r,e,t){for(var n=Fe(r),i=n,o=0,c=ot(e);o<c.length-1;o++){var p=c[o],S=$(r,c.slice(0,o+1));if(S&&(gr(S)||Array.isArray(S)))i=i[p]=Fe(S);else{var b=c[o+1];i=i[p]=Co(b)&&Number(b)>=0?[]:{}}}return(o===0?r:i)[c[o]]===t?r:(t===void 0?delete i[c[o]]:i[c[o]]=t,o===0&&t===void 0&&delete n[c[o]],n)}function ct(r,e,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(r);i<o.length;i++){var c=o[i],p=r[c];gr(p)?t.get(p)||(t.set(p,!0),n[c]=Array.isArray(p)?[]:{},ct(p,e,t,n[c])):n[c]=e}return n}function Fo(r,e){switch(e.type){case"SET_VALUES":return A({},r,{values:e.payload});case"SET_TOUCHED":return A({},r,{touched:e.payload});case"SET_ERRORS":return G(r.errors,e.payload)?r:A({},r,{errors:e.payload});case"SET_STATUS":return A({},r,{status:e.payload});case"SET_ISSUBMITTING":return A({},r,{isSubmitting:e.payload});case"SET_ISVALIDATING":return A({},r,{isValidating:e.payload});case"SET_FIELD_VALUE":return A({},r,{values:z(r.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return A({},r,{touched:z(r.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return A({},r,{errors:z(r.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return A({},r,e.payload);case"SET_FORMIK_STATE":return e.payload(r);case"SUBMIT_ATTEMPT":return A({},r,{touched:ct(r.values,!0),isSubmitting:!0,submitCount:r.submitCount+1});case"SUBMIT_FAILURE":return A({},r,{isSubmitting:!1});case"SUBMIT_SUCCESS":return A({},r,{isSubmitting:!1});default:return r}}var B={},lr={};function Bo(r){var e=r.validateOnChange,t=e===void 0?!0:e,n=r.validateOnBlur,i=n===void 0?!0:n,o=r.validateOnMount,c=o===void 0?!1:o,p=r.isInitialValid,S=r.enableReinitialize,b=S===void 0?!1:S,x=r.onSubmit,I=ut(r,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=A({validateOnChange:t,validateOnBlur:i,validateOnMount:c,onSubmit:x},I),O=d.useRef(f.initialValues),P=d.useRef(f.initialErrors||B),M=d.useRef(f.initialTouched||lr),j=d.useRef(f.initialStatus),E=d.useRef(!1),U=d.useRef({});d.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var st=d.useState(0),lt=st[1],cr=d.useRef({values:f.initialValues,errors:f.initialErrors||B,touched:f.initialTouched||lr,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),g=cr.current,y=d.useCallback(function(a){var u=cr.current;cr.current=Fo(u,a),u!==cr.current&&lt(function(s){return s+1})},[]),Wr=d.useCallback(function(a,u){return new Promise(function(s,l){var v=f.validate(a,u);v==null?s(B):Ir(v)?v.then(function(h){s(h||B)},function(h){l(h)}):s(v)})},[f.validate]),br=d.useCallback(function(a,u){var s=f.validationSchema,l=F(s)?s(u):s,v=u&&l.validateAt?l.validateAt(u,a):Ro(a,l);return new Promise(function(h,_){v.then(function(){h(B)},function(L){L.name==="ValidationError"?h(Mo(L)):_(L)})})},[f.validationSchema]),Yr=d.useCallback(function(a,u){return new Promise(function(s){return s(U.current[a].validate(u))})},[]),kr=d.useCallback(function(a){var u=Object.keys(U.current).filter(function(l){return F(U.current[l].validate)}),s=u.length>0?u.map(function(l){return Yr(l,$(a,l))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(s).then(function(l){return l.reduce(function(v,h,_){return h==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||h&&(v=z(v,u[_],h)),v},{})})},[Yr]),ft=d.useCallback(function(a){return Promise.all([kr(a),f.validationSchema?br(a):{},f.validate?Wr(a):{}]).then(function(u){var s=u[0],l=u[1],v=u[2],h=wr.all([s,l,v],{arrayMerge:Po});return h})},[f.validate,f.validationSchema,kr,Wr,br]),C=w(function(a){return a===void 0&&(a=g.values),y({type:"SET_ISVALIDATING",payload:!0}),ft(a).then(function(u){return E.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:u})),u})});d.useEffect(function(){c&&E.current===!0&&G(O.current,f.initialValues)&&C(O.current)},[c,C]);var rr=d.useCallback(function(a){var u=a&&a.values?a.values:O.current,s=a&&a.errors?a.errors:P.current?P.current:f.initialErrors||{},l=a&&a.touched?a.touched:M.current?M.current:f.initialTouched||{},v=a&&a.status?a.status:j.current?j.current:f.initialStatus;O.current=u,P.current=s,M.current=l,j.current=v;var h=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:s,touched:l,status:v,values:u,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var _=f.onReset(g.values,ae);Ir(_)?_.then(h):h()}else h()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){E.current===!0&&!G(O.current,f.initialValues)&&b&&(O.current=f.initialValues,rr(),c&&C(O.current))},[b,f.initialValues,rr,c,C]),d.useEffect(function(){b&&E.current===!0&&!G(P.current,f.initialErrors)&&(P.current=f.initialErrors||B,y({type:"SET_ERRORS",payload:f.initialErrors||B}))},[b,f.initialErrors]),d.useEffect(function(){b&&E.current===!0&&!G(M.current,f.initialTouched)&&(M.current=f.initialTouched||lr,y({type:"SET_TOUCHED",payload:f.initialTouched||lr}))},[b,f.initialTouched]),d.useEffect(function(){b&&E.current===!0&&!G(j.current,f.initialStatus)&&(j.current=f.initialStatus,y({type:"SET_STATUS",payload:f.initialStatus}))},[b,f.initialStatus,f.initialTouched]);var qr=w(function(a){if(U.current[a]&&F(U.current[a].validate)){var u=$(g.values,a),s=U.current[a].validate(u);return Ir(s)?(y({type:"SET_ISVALIDATING",payload:!0}),s.then(function(l){return l}).then(function(l){y({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:a,value:s}}),Promise.resolve(s))}else if(f.validationSchema)return y({type:"SET_ISVALIDATING",payload:!0}),br(g.values,a).then(function(l){return l}).then(function(l){y({type:"SET_FIELD_ERROR",payload:{field:a,value:$(l,a)}}),y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),dt=d.useCallback(function(a,u){var s=u.validate;U.current[a]={validate:s}},[]),pt=d.useCallback(function(a){delete U.current[a]},[]),Xr=w(function(a,u){y({type:"SET_TOUCHED",payload:a});var s=u===void 0?i:u;return s?C(g.values):Promise.resolve()}),Zr=d.useCallback(function(a){y({type:"SET_ERRORS",payload:a})},[]),Jr=w(function(a,u){var s=F(a)?a(g.values):a;y({type:"SET_VALUES",payload:s});var l=u===void 0?t:u;return l?C(s):Promise.resolve()}),sr=d.useCallback(function(a,u){y({type:"SET_FIELD_ERROR",payload:{field:a,value:u}})},[]),X=w(function(a,u,s){y({type:"SET_FIELD_VALUE",payload:{field:a,value:u}});var l=s===void 0?t:s;return l?C(z(g.values,a,u)):Promise.resolve()}),Qr=d.useCallback(function(a,u){var s=u,l=a,v;if(!$r(a)){a.persist&&a.persist();var h=a.target?a.target:a.currentTarget,_=h.type,L=h.name,_r=h.id,Ar=h.value,Et=h.checked,No=h.outerHTML,ie=h.options,_t=h.multiple;s=u||L||_r,l=/number|range/.test(_)?(v=parseFloat(Ar),isNaN(v)?"":v):/checkbox/.test(_)?Do($(g.values,s),Et,Ar):ie&&_t?Lo(ie):Ar}s&&X(s,l)},[X,g.values]),Tr=w(function(a){if($r(a))return function(u){return Qr(u,a)};Qr(a)}),Z=w(function(a,u,s){u===void 0&&(u=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:a,value:u}});var l=s===void 0?i:s;return l?C(g.values):Promise.resolve()}),re=d.useCallback(function(a,u){a.persist&&a.persist();var s=a.target,l=s.name,v=s.id,h=s.outerHTML,_=u||l||v;Z(_,!0)},[Z]),mr=w(function(a){if($r(a))return function(u){return re(u,a)};re(a)}),ee=d.useCallback(function(a){F(a)?y({type:"SET_FORMIK_STATE",payload:a}):y({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),te=d.useCallback(function(a){y({type:"SET_STATUS",payload:a})},[]),ne=d.useCallback(function(a){y({type:"SET_ISSUBMITTING",payload:a})},[]),Sr=w(function(){return y({type:"SUBMIT_ATTEMPT"}),C().then(function(a){var u=a instanceof Error,s=!u&&Object.keys(a).length===0;if(s){var l;try{if(l=ht(),l===void 0)return}catch(v){throw v}return Promise.resolve(l).then(function(v){return E.current&&y({type:"SUBMIT_SUCCESS"}),v}).catch(function(v){if(E.current)throw y({type:"SUBMIT_FAILURE"}),v})}else if(E.current&&(y({type:"SUBMIT_FAILURE"}),u))throw a})}),vt=w(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),Sr().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),ae={resetForm:rr,validateForm:C,validateField:qr,setErrors:Zr,setFieldError:sr,setFieldTouched:Z,setFieldValue:X,setStatus:te,setSubmitting:ne,setTouched:Xr,setValues:Jr,setFormikState:ee,submitForm:Sr},ht=w(function(){return x(g.values,ae)}),yt=w(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),rr()}),gt=d.useCallback(function(a){return{value:$(g.values,a),error:$(g.errors,a),touched:!!$(g.touched,a),initialValue:$(O.current,a),initialTouched:!!$(M.current,a),initialError:$(P.current,a)}},[g.errors,g.touched,g.values]),bt=d.useCallback(function(a){return{setValue:function(s,l){return X(a,s,l)},setTouched:function(s,l){return Z(a,s,l)},setError:function(s){return sr(a,s)}}},[X,Z,sr]),Tt=d.useCallback(function(a){var u=gr(a),s=u?a.name:a,l=$(g.values,s),v={name:s,value:l,onChange:Tr,onBlur:mr};if(u){var h=a.type,_=a.value,L=a.as,_r=a.multiple;h==="checkbox"?_===void 0?v.checked=!!l:(v.checked=!!(Array.isArray(l)&&~l.indexOf(_)),v.value=_):h==="radio"?(v.checked=l===_,v.value=_):L==="select"&&_r&&(v.value=v.value||[],v.multiple=!0)}return v},[mr,Tr,g.values]),Er=d.useMemo(function(){return!G(O.current,g.values)},[O.current,g.values]),mt=d.useMemo(function(){return typeof p<"u"?Er?g.errors&&Object.keys(g.errors).length===0:p!==!1&&F(p)?p(f):p:g.errors&&Object.keys(g.errors).length===0},[p,Er,g.errors,f]),St=A({},g,{initialValues:O.current,initialErrors:P.current,initialTouched:M.current,initialStatus:j.current,handleBlur:mr,handleChange:Tr,handleReset:yt,handleSubmit:vt,resetForm:rr,setErrors:Zr,setFormikState:ee,setFieldTouched:Z,setFieldValue:X,setFieldError:sr,setStatus:te,setSubmitting:ne,setTouched:Xr,setValues:Jr,submitForm:Sr,validateForm:C,validateField:qr,isValid:mt,dirty:Er,unregisterField:pt,registerField:dt,getFieldProps:Tt,getFieldMeta:gt,getFieldHelpers:bt,validateOnBlur:i,validateOnChange:t,validateOnMount:c});return St}function Mo(r){var e={};if(r.inner){if(r.inner.length===0)return z(e,r.path,r.message);for(var i=r.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var c=o;$(e,c.path)||(e=z(e,c.path,c.message))}}return e}function Ro(r,e,t,n){t===void 0&&(t=!1);var i=Lr(r);return e[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Lr(r){var e=Array.isArray(r)?[]:{};for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t)){var n=String(t);Array.isArray(r[n])===!0?e[n]=r[n].map(function(i){return Array.isArray(i)===!0||ue(i)?Lr(i):i!==""?i:void 0}):ue(r[n])?e[n]=Lr(r[n]):e[n]=r[n]!==""?r[n]:void 0}return e}function Po(r,e,t){var n=r.slice();return e.forEach(function(o,c){if(typeof n[c]>"u"){var p=t.clone!==!1,S=p&&t.isMergeableObject(o);n[c]=S?wr(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[c]=wr(r[c],o,t):r.indexOf(o)===-1&&n.push(o)}),n}function Lo(r){return Array.from(r).filter(function(e){return e.selected}).map(function(e){return e.value})}function Do(r,e,t){if(typeof r=="boolean")return!!e;var n=[],i=!1,o=-1;if(Array.isArray(r))n=r,o=r.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!e;return e&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var xo=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function w(r){var e=d.useRef(r);return xo(function(){e.current=r}),d.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)},[])}var Uo=d.forwardRef(function(r,e){var t=r.action,n=ut(r,["action"]),i=t??"#",o=wo(),c=o.handleReset,p=o.handleSubmit;return d.createElement("form",A({onSubmit:p,ref:e,onReset:c,action:i},n))});Uo.displayName="Form";export{Bo as u};
