(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="169",b0=0,Il=1,S0=2,yh=1,w0=2,$i=3,xn=0,ri=1,Ji=2,mn=0,xs=1,ds=2,Ul=3,Nl=4,E0=5,Dn=100,T0=101,A0=102,R0=103,C0=104,k0=200,P0=201,z0=202,L0=203,_a=204,Ma=205,D0=206,I0=207,U0=208,N0=209,F0=210,O0=211,B0=212,H0=213,G0=214,ya=0,ba=1,Sa=2,ys=3,wa=4,Ea=5,Ta=6,Aa=7,bh=0,V0=1,W0=2,gn=0,X0=1,Y0=2,q0=3,Z0=4,K0=5,$0=6,J0=7,Sh=300,bs=301,Ss=302,Ra=303,Ca=304,_r=306,ka=1e3,Un=1001,Pa=1002,oi=1003,j0=1004,ho=1005,ki=1006,Rr=1007,Nn=1008,Qi=1009,wh=1010,Eh=1011,js=1012,cl=1013,On=1014,Bi=1015,so=1016,hl=1017,fl=1018,ws=1020,Th=35902,Ah=1021,Rh=1022,zi=1023,Ch=1024,kh=1025,vs=1026,Es=1027,ul=1028,dl=1029,Ph=1030,pl=1031,ml=1033,jo=33776,Qo=33777,tr=33778,er=33779,za=35840,La=35841,Da=35842,Ia=35843,Ua=36196,Na=37492,Fa=37496,Oa=37808,Ba=37809,Ha=37810,Ga=37811,Va=37812,Wa=37813,Xa=37814,Ya=37815,qa=37816,Za=37817,Ka=37818,$a=37819,Ja=37820,ja=37821,ir=36492,Qa=36494,tl=36495,zh=36283,el=36284,il=36285,nl=36286,Q0=3200,tf=3201,ef=0,nf=1,dn="",Ui="srgb",_n="srgb-linear",gl="display-p3",Mr="display-p3-linear",cr="linear",me="srgb",hr="rec709",fr="p3",Yn=7680,Fl=519,sf=512,of=513,rf=514,Lh=515,af=516,lf=517,cf=518,hf=519,Ol=35044,ur=35048,Bl="300 es",ji=2e3,dr=2001;class Rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const o=n.indexOf(e);o!==-1&&n.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let o=0,r=n.length;o<r;o++)n[o].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const Ws=Math.PI/180,Qs=180/Math.PI;function Vn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Be(s,t,e){return Math.max(t,Math.min(e,s))}function xl(s,t){return(s%t+t)%t}function ff(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function uf(s,t,e){return s!==t?(e-s)/(t-s):0}function Xs(s,t,e){return(1-e)*s+e*t}function df(s,t,e,i){return Xs(s,t,1-Math.exp(-e*i))}function pf(s,t=1){return t-Math.abs(xl(s,t*2)-t)}function mf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function gf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function xf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function vf(s,t){return s+Math.random()*(t-s)}function _f(s){return s*(.5-Math.random())}function Mf(s){s!==void 0&&(Hl=s);let t=Hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yf(s){return s*Ws}function bf(s){return s*Qs}function Sf(s){return(s&s-1)===0&&s!==0}function wf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ef(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tf(s,t,e,i,n){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+i)/2),h=r((t+i)/2),f=o((t-i)/2),u=r((t-i)/2),d=o((i-t)/2),g=r((i-t)/2);switch(n){case"XYX":s.set(a*h,l*f,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function us(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const pi={DEG2RAD:Ws,RAD2DEG:Qs,generateUUID:Vn,clamp:Be,euclideanModulo:xl,mapLinear:ff,inverseLerp:uf,lerp:Xs,damp:df,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:xf,randFloat:vf,randFloatSpread:_f,seededRandom:Mf,degToRad:yf,radToDeg:bf,isPowerOfTwo:Sf,ceilPowerOfTwo:wf,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:Tf,normalize:Ke,denormalize:us};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*n+t.x,this.y=o*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,n,o,r,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,o,r,a,l,c)}set(t,e,i,n,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],x=n[0],p=n[3],m=n[6],w=n[1],M=n[4],S=n[7],I=n[2],R=n[5],A=n[8];return o[0]=r*x+a*w+l*I,o[3]=r*p+a*M+l*R,o[6]=r*m+a*S+l*A,o[1]=c*x+h*w+f*I,o[4]=c*p+h*M+f*R,o[7]=c*m+h*S+f*A,o[2]=u*x+d*w+g*I,o[5]=u*p+d*M+g*R,o[8]=u*m+d*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*o*h+i*a*l+n*o*c-n*r*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,u=a*l-h*o,d=c*o-r*l,g=e*f+i*u+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*r)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*o-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-n*c,n*l,-n*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cr.makeScale(t,e)),this}rotate(t){return this.premultiply(Cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new Vt;function Dh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Af(){const s=pr("canvas");return s.style.display="block",s}const Gl={};function nr(s){s in Gl||(Gl[s]=!0,console.warn(s))}function Rf(s,t,e){return new Promise(function(i,n){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Cf(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kf(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vl=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ks={[_n]:{transfer:cr,primaries:hr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Ui]:{transfer:me,primaries:hr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Mr]:{transfer:cr,primaries:fr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Wl),fromReference:s=>s.applyMatrix3(Vl)},[gl]:{transfer:me,primaries:fr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Wl),fromReference:s=>s.applyMatrix3(Vl).convertLinearToSRGB()}},Pf=new Set([_n,Mr]),le={enabled:!0,_workingColorSpace:_n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Pf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=ks[t].toReference,n=ks[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ks[s].primaries},getTransfer:function(s){return s===dn?cr:ks[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(ks[t].luminanceCoefficients)}};function _s(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function kr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qn;class zf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=pr("canvas")),qn.width=t.width,qn.height=t.height;const i=qn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),o=n.data;for(let r=0;r<o.length;r++)o[r]=_s(o[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_s(e[i]/255)*255):e[i]=_s(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lf=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let o;if(Array.isArray(n)){o=[];for(let r=0,a=n.length;r<a;r++)n[r].isDataTexture?o.push(Pr(n[r].image)):o.push(Pr(n[r]))}else o=Pr(n);i.url=o}return e||(t.images[this.uuid]=i),i}}function Pr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;class ti extends Rs{constructor(t=ti.DEFAULT_IMAGE,e=ti.DEFAULT_MAPPING,i=Un,n=Un,o=ki,r=Nn,a=zi,l=Qi,c=ti.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Vn(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ka:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ka:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Sh;ti.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,n=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,o;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(d+1)/2,I=(m+1)/2,R=(h+u)/4,A=(f+x)/4,L=(g+p)/4;return M>S&&M>I?M<.01?(i=0,n=.707106781,o=.707106781):(i=Math.sqrt(M),n=R/i,o=A/i):S>I?S<.01?(i=.707106781,n=0,o=.707106781):(n=Math.sqrt(S),i=R/n,o=L/n):I<.01?(i=.707106781,n=.707106781,o=0):(o=Math.sqrt(I),i=A/o,n=L/o),this.set(i,n,o,e),this}let w=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(f-x)/w,this.z=(u-h)/w,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends Rs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new ti(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,o=this.textures.length;n<o;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ih(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends If{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Uh extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=oi,this.minFilter=oi,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uf extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=oi,this.minFilter=oi,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oo{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,o,r,a){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3];const u=o[r+0],d=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==u||c!==d||h!==g){let p=1-a;const m=l*u+c*d+h*g+f*x,w=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const I=Math.sqrt(M),R=Math.atan2(I,m*w);p=Math.sin(p*R)/I,a=Math.sin(a*R)/I}const S=a*w;if(l=l*p+u*S,c=c*p+d*S,h=h*p+g*S,f=f*p+x*S,p===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=I,c*=I,h*=I,f*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,o,r){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=o[r],u=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),f=a(o/2),u=l(i/2),d=l(n/2),g=l(o/2);switch(r){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-n)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(n+r)/d,this._z=(o+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(o-c)/d,this._x=(n+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(r-n)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+n*c-o*l,this._y=n*h+r*l+o*a-i*c,this._z=o*h+r*c+i*l-n*a,this._w=r*h-i*a-n*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+n*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=n,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*f+this._w*u,this._x=i*f+this._x*u,this._y=n*f+this._y*u,this._z=o*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*n,this.y=o[1]*e+o[4]*i+o[7]*n,this.z=o[2]*e+o[5]*i+o[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*n+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*n+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*n+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*n+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*n-a*i),h=2*(a*e-o*n),f=2*(o*i-r*e);return this.x=e+l*c+r*f-a*h,this.y=i+l*h+a*c-o*f,this.z=n+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n,this.y=o[1]*e+o[5]*i+o[9]*n,this.z=o[2]*e+o[6]*i+o[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=n*l-o*a,this.y=o*r-i*l,this.z=i*a-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new P,Xl=new oo;class Wn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,bi):bi.fromBufferAttribute(o,r),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}const n=t.children;for(let o=0,r=n.length;o<r;o++)this.expandByObject(n[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),uo.subVectors(this.max,Ps),Zn.subVectors(t.a,Ps),Kn.subVectors(t.b,Ps),$n.subVectors(t.c,Ps),nn.subVectors(Kn,Zn),sn.subVectors($n,Kn),yn.subVectors(Zn,$n);let e=[0,-nn.z,nn.y,0,-sn.z,sn.y,0,-yn.z,yn.y,nn.z,0,-nn.x,sn.z,0,-sn.x,yn.z,0,-yn.x,-nn.y,nn.x,0,-sn.y,sn.x,0,-yn.y,yn.x,0];return!Lr(e,Zn,Kn,$n,uo)||(e=[1,0,0,0,1,0,0,0,1],!Lr(e,Zn,Kn,$n,uo))?!1:(po.crossVectors(nn,sn),e=[po.x,po.y,po.z],Lr(e,Zn,Kn,$n,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vi=[new P,new P,new P,new P,new P,new P,new P,new P],bi=new P,fo=new Wn,Zn=new P,Kn=new P,$n=new P,nn=new P,sn=new P,yn=new P,Ps=new P,uo=new P,po=new P,bn=new P;function Lr(s,t,e,i,n){for(let o=0,r=s.length-3;o<=r;o+=3){bn.fromArray(s,o);const a=n.x*Math.abs(bn.x)+n.y*Math.abs(bn.y)+n.z*Math.abs(bn.z),l=t.dot(bn),c=e.dot(bn),h=i.dot(bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Nf=new Wn,zs=new P,Dr=new P;class ro{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Nf.setFromPoints(t).getCenter(i);let n=0;for(let o=0,r=t.length;o<r;o++)n=Math.max(n,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(zs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Dr)),this.expandByPoint(zs.copy(t.center).sub(Dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new P,Ir=new P,mo=new P,on=new P,Ur=new P,go=new P,Nr=new P;class Ff{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ir.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),on.copy(this.origin).sub(Ir);const o=t.distanceTo(e)*.5,r=-this.direction.dot(mo),a=on.dot(this.direction),l=-on.dot(mo),c=on.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*l-a,u=r*a-l,g=o*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,d=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-o,-l),o),d=u*(u+2*l)+c):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Ir).addScaledVector(mo,u),d}intersectSphere(t,e){Wi.subVectors(t.center,this.origin);const i=Wi.dot(this.direction),n=Wi.dot(Wi)-i*i,o=t.radius*t.radius;if(n>o)return null;const r=Math.sqrt(o-n),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||o>n||((o>i||isNaN(i))&&(i=o),(r<n||isNaN(n))&&(n=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,n,o){Ur.subVectors(e,t),go.subVectors(i,t),Nr.crossVectors(Ur,go);let r=this.direction.dot(Nr),a;if(r>0){if(n)return null;a=1}else if(r<0)a=-1,r=-r;else return null;on.subVectors(this.origin,t);const l=a*this.direction.dot(go.crossVectors(on,go));if(l<0)return null;const c=a*this.direction.dot(Ur.cross(on));if(c<0||l+c>r)return null;const h=-a*on.dot(Nr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,n,o,r,a,l,c,h,f,u,d,g,x,p){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,o,r,a,l,c,h,f,u,d,g,x,p)}set(t,e,i,n,o,r,a,l,c,h,f,u,d,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Jn.setFromMatrixColumn(t,0).length(),o=1/Jn.setFromMatrixColumn(t,1).length(),r=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,g=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u+x*a,e[4]=g*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=x+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u-x*a,e[4]=-r*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=x-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,g=a*h,x=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=r*l,d=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=r*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Of,t,Bf)}lookAt(t,e,i){const n=this.elements;return ci.subVectors(t,e),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),rn.crossVectors(i,ci),rn.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),rn.crossVectors(i,ci)),rn.normalize(),xo.crossVectors(ci,rn),n[0]=rn.x,n[4]=xo.x,n[8]=ci.x,n[1]=rn.y,n[5]=xo.y,n[9]=ci.y,n[2]=rn.z,n[6]=xo.z,n[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],x=i[6],p=i[10],m=i[14],w=i[3],M=i[7],S=i[11],I=i[15],R=n[0],A=n[4],L=n[8],J=n[12],v=n[1],b=n[5],G=n[9],F=n[13],X=n[2],j=n[6],H=n[10],K=n[14],B=n[3],ft=n[7],pt=n[11],St=n[15];return o[0]=r*R+a*v+l*X+c*B,o[4]=r*A+a*b+l*j+c*ft,o[8]=r*L+a*G+l*H+c*pt,o[12]=r*J+a*F+l*K+c*St,o[1]=h*R+f*v+u*X+d*B,o[5]=h*A+f*b+u*j+d*ft,o[9]=h*L+f*G+u*H+d*pt,o[13]=h*J+f*F+u*K+d*St,o[2]=g*R+x*v+p*X+m*B,o[6]=g*A+x*b+p*j+m*ft,o[10]=g*L+x*G+p*H+m*pt,o[14]=g*J+x*F+p*K+m*St,o[3]=w*R+M*v+S*X+I*B,o[7]=w*A+M*b+S*j+I*ft,o[11]=w*L+M*G+S*H+I*pt,o[15]=w*J+M*F+S*K+I*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+o*l*f-n*c*f-o*a*u+i*c*u+n*a*d-i*l*d)+x*(+e*l*d-e*c*u+o*r*u-n*r*d+n*c*h-o*l*h)+p*(+e*c*f-e*a*d-o*r*f+i*r*d+o*a*h-i*c*h)+m*(-n*a*h-e*l*f+e*a*u+n*r*f-i*r*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],w=f*p*c-x*u*c+x*l*d-a*p*d-f*l*m+a*u*m,M=g*u*c-h*p*c-g*l*d+r*p*d+h*l*m-r*u*m,S=h*x*c-g*f*c+g*a*d-r*x*d-h*a*m+r*f*m,I=g*f*l-h*x*l-g*a*u+r*x*u+h*a*p-r*f*p,R=e*w+i*M+n*S+o*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=w*A,t[1]=(x*u*o-f*p*o-x*n*d+i*p*d+f*n*m-i*u*m)*A,t[2]=(a*p*o-x*l*o+x*n*c-i*p*c-a*n*m+i*l*m)*A,t[3]=(f*l*o-a*u*o-f*n*c+i*u*c+a*n*d-i*l*d)*A,t[4]=M*A,t[5]=(h*p*o-g*u*o+g*n*d-e*p*d-h*n*m+e*u*m)*A,t[6]=(g*l*o-r*p*o-g*n*c+e*p*c+r*n*m-e*l*m)*A,t[7]=(r*u*o-h*l*o+h*n*c-e*u*c-r*n*d+e*l*d)*A,t[8]=S*A,t[9]=(g*f*o-h*x*o-g*i*d+e*x*d+h*i*m-e*f*m)*A,t[10]=(r*x*o-g*a*o+g*i*c-e*x*c-r*i*m+e*a*m)*A,t[11]=(h*a*o-r*f*o-h*i*c+e*f*c+r*i*d-e*a*d)*A,t[12]=I*A,t[13]=(h*x*n-g*f*n+g*i*u-e*x*u-h*i*p+e*f*p)*A,t[14]=(g*a*n-r*x*n-g*i*l+e*x*l+r*i*p-e*a*p)*A,t[15]=(r*f*n-h*a*n+h*i*l-e*f*l-r*i*u+e*a*u)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,o=t.z;return e[0]*=i,e[4]*=n,e[8]*=o,e[1]*=i,e[5]*=n,e[9]*=o,e[2]*=i,e[6]*=n,e[10]*=o,e[3]*=i,e[7]*=n,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*r,0,c*l-n*a,h*l+n*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,o,r){return this.set(1,i,o,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,u=o*c,d=o*h,g=o*f,x=r*h,p=r*f,m=a*f,w=l*c,M=l*h,S=l*f,I=i.x,R=i.y,A=i.z;return n[0]=(1-(x+m))*I,n[1]=(d+S)*I,n[2]=(g-M)*I,n[3]=0,n[4]=(d-S)*R,n[5]=(1-(u+m))*R,n[6]=(p+w)*R,n[7]=0,n[8]=(g+M)*A,n[9]=(p-w)*A,n[10]=(1-(u+x))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let o=Jn.set(n[0],n[1],n[2]).length();const r=Jn.set(n[4],n[5],n[6]).length(),a=Jn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(o=-o),t.x=n[12],t.y=n[13],t.z=n[14],Si.copy(this);const c=1/o,h=1/r,f=1/a;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=f,Si.elements[9]*=f,Si.elements[10]*=f,e.setFromRotationMatrix(Si),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,n,o,r,a=ji){const l=this.elements,c=2*o/(e-t),h=2*o/(i-n),f=(e+t)/(e-t),u=(i+n)/(i-n);let d,g;if(a===ji)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===dr)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,o,r,a=ji){const l=this.elements,c=1/(e-t),h=1/(i-n),f=1/(r-o),u=(e+t)*c,d=(i+n)*h;let g,x;if(a===ji)g=(r+o)*f,x=-2*f;else if(a===dr)g=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Jn=new P,Si=new de,Of=new P(0,0,0),Bf=new P(1,1,1),rn=new P,xo=new P,ci=new P,Yl=new de,ql=new oo;class tn{constructor(t=0,e=0,i=0,n=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,o=n[0],r=n[4],a=n[8],l=n[1],c=n[5],h=n[9],f=n[2],u=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class Nh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hf=0;const Zl=new P,jn=new oo,Xi=new de,vo=new P,Ls=new P,Gf=new P,Vf=new oo,Kl=new P(1,0,0),$l=new P(0,1,0),Jl=new P(0,0,1),jl={type:"added"},Wf={type:"removed"},Qn={type:"childadded",child:null},Fr={type:"childremoved",child:null};class He extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new P,e=new tn,i=new oo,n=new P(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new de},normalMatrix:{value:new Vt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return Zl.copy(t).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vo.copy(t):vo.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ls,vo,this.up):Xi.lookAt(vo,Ls,this.up),this.quaternion.setFromRotationMatrix(Xi),n&&(Xi.extractRotation(n.matrixWorld),jn.setFromRotationMatrix(Xi),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jl),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wf),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jl),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let o=0,r=n.length;o<r;o++)n[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,Gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let o=0,r=n.length;o<r;o++)n[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));n.material=a}else n.material=o(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}He.DEFAULT_UP=new P(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new P,Yi=new P,Or=new P,qi=new P,ts=new P,es=new P,Ql=new P,Br=new P,Hr=new P,Gr=new P,Vr=new Ae,Wr=new Ae,Xr=new Ae;class Pi{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),wi.subVectors(t,e),n.cross(wi);const o=n.lengthSq();return o>0?n.multiplyScalar(1/Math.sqrt(o)):n.set(0,0,0)}static getBarycoord(t,e,i,n,o){wi.subVectors(n,e),Yi.subVectors(i,e),Or.subVectors(t,e);const r=wi.dot(wi),a=wi.dot(Yi),l=wi.dot(Or),c=Yi.dot(Yi),h=Yi.dot(Or),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(r*h-a*l)*u;return o.set(1-d-g,g,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,i,n,o,r,a,l){return this.getBarycoord(t,e,i,n,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,qi.x),l.addScaledVector(r,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(t,e,i,n,o,r){return Vr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),Vr.fromBufferAttribute(t,e),Wr.fromBufferAttribute(t,i),Xr.fromBufferAttribute(t,n),r.setScalar(0),r.addScaledVector(Vr,o.x),r.addScaledVector(Wr,o.y),r.addScaledVector(Xr,o.z),r}static isFrontFacing(t,e,i,n){return wi.subVectors(i,e),Yi.subVectors(t,e),wi.cross(Yi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),wi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,o){return Pi.getInterpolation(t,this.a,this.b,this.c,e,i,n,o)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,o=this.c;let r,a;ts.subVectors(n,i),es.subVectors(o,i),Br.subVectors(t,i);const l=ts.dot(Br),c=es.dot(Br);if(l<=0&&c<=0)return e.copy(i);Hr.subVectors(t,n);const h=ts.dot(Hr),f=es.dot(Hr);if(h>=0&&f<=h)return e.copy(n);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(ts,r);Gr.subVectors(t,o);const d=ts.dot(Gr),g=es.dot(Gr);if(g>=0&&d<=g)return e.copy(o);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(es,a);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return Ql.subVectors(o,n),a=(f-h)/(f-h+(d-g)),e.copy(n).addScaledVector(Ql,a);const m=1/(p+x+u);return r=x*m,a=u*m,e.copy(i).addScaledVector(ts,r).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Yr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=le.workingColorSpace){if(t=xl(t,1),e=Be(e,0,1),i=Be(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Yr(r,o,t+1/3),this.g=Yr(r,o,t),this.b=Yr(r,o,t-1/3)}return le.toWorkingColorSpace(this,n),this}setStyle(t,e=Ui){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=n[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ui){const i=Fh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ui){return le.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Be(Ve.r*255,0,255))*65536+Math.round(Be(Ve.g*255,0,255))*256+Math.round(Be(Ve.b*255,0,255))}getHexString(t=Ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ve.copy(this),e);const i=Ve.r,n=Ve.g,o=Ve.b,r=Math.max(i,n,o),a=Math.min(i,n,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case i:l=(n-o)/f+(n<o?6:0);break;case n:l=(o-i)/f+2;break;case o:l=(i-n)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ui){le.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,i=Ve.g,n=Ve.b;return t!==Ui?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(an),this.setHSL(an.h+t,an.s+e,an.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(an),t.getHSL(_o);const i=Xs(an.h,_o.h,e),n=Xs(an.s,_o.s,e),o=Xs(an.l,_o.l,e);return this.setHSL(i,n,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*n,this.g=o[1]*e+o[4]*i+o[7]*n,this.b=o[2]*e+o[5]*i+o[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Ht;Ht.NAMES=Fh;let Xf=0;class yr extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=xs,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=Ma,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_a&&(i.blendSrc=this.blendSrc),this.blendDst!==Ma&&(i.blendDst=this.blendDst),this.blendEquation!==Dn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=n(t.textures),r=n(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let o=0;o!==n;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yt extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new P,Mo=new Rt;class ei{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ol,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,o=this.itemSize;n<o;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=us(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,o){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),n=Ke(n,this.array),o=Ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ol&&(t.usage=this.usage),t}}class Oh extends ei{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bh extends ei{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class qe extends ei{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Yf=0;const gi=new de,qr=new He,is=new P,hi=new Wn,Ds=new Wn,De=new P;class Mi extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dh(t)?Bh:Oh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Vt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,i){return gi.makeTranslation(t,e,i),this.applyMatrix4(gi),this}scale(t,e,i){return gi.makeScale(t,e,i),this.applyMatrix4(gi),this}lookAt(t){return qr.lookAt(t),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const o=e[i];hi.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(hi.min,Ds.min),hi.expandByPoint(De),De.addVectors(hi.max,Ds.max),hi.expandByPoint(De)):(hi.expandByPoint(Ds.min),hi.expandByPoint(Ds.max))}hi.getCenter(i);let n=0;for(let o=0,r=t.count;o<r;o++)De.fromBufferAttribute(t,o),n=Math.max(n,i.distanceToSquared(De));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(t,c),De.add(is)),n=Math.max(n,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new P,l[L]=new P;const c=new P,h=new P,f=new P,u=new Rt,d=new Rt,g=new Rt,x=new P,p=new P;function m(L,J,v){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,J),f.fromBufferAttribute(i,v),u.fromBufferAttribute(o,L),d.fromBufferAttribute(o,J),g.fromBufferAttribute(o,v),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const b=1/(d.x*g.y-g.x*d.y);isFinite(b)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(b),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(b),a[L].add(x),a[J].add(x),a[v].add(x),l[L].add(p),l[J].add(p),l[v].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,J=w.length;L<J;++L){const v=w[L],b=v.start,G=v.count;for(let F=b,X=b+G;F<X;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new P,S=new P,I=new P,R=new P;function A(L){I.fromBufferAttribute(n,L),R.copy(I);const J=a[L];M.copy(J),M.sub(I.multiplyScalar(I.dot(J))).normalize(),S.crossVectors(R,J);const b=S.dot(l[L])<0?-1:1;r.setXYZW(L,M.x,M.y,M.z,b)}for(let L=0,J=w.length;L<J;++L){const v=w[L],b=v.start,G=v.count;for(let F=b,X=b+G;F<X;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const n=new P,o=new P,r=new P,a=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),h.subVectors(r,o),f.subVectors(n,o),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)n.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(n,o),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new ei(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Mi,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,o=!0)}o&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new de,Sn=new Ff,yo=new ro,ec=new P,bo=new P,So=new P,wo=new P,Zr=new P,Eo=new P,ic=new P,To=new P;class lt extends He{constructor(t=new Mi,e=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=n.length;o<r;o++){const a=n[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(o&&a){Eo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(Zr.fromBufferAttribute(f,t),r?Eo.addScaledVector(Zr,h):Eo.addScaledVector(Zr.sub(e),h))}e.add(Eo)}return e}raycast(t,e){const i=this.geometry,n=this.material,o=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(o),Sn.copy(t.ray).recast(t.near),!(yo.containsPoint(Sn.origin)===!1&&(Sn.intersectSphere(yo,ec)===null||Sn.origin.distanceToSquared(ec)>(t.far-t.near)**2))&&(tc.copy(o).invert(),Sn.copy(t.ray).applyMatrix4(tc),!(i.boundingBox!==null&&Sn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Sn)))}_computeIntersections(t,e,i){let n;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=r[p.materialIndex],w=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=w,I=M;S<I;S+=3){const R=a.getX(S),A=a.getX(S+1),L=a.getX(S+2);n=Ao(this,m,t,i,c,h,f,R,A,L),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const w=a.getX(p),M=a.getX(p+1),S=a.getX(p+2);n=Ao(this,r,t,i,c,h,f,w,M,S),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const p=u[g],m=r[p.materialIndex],w=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=w,I=M;S<I;S+=3){const R=S,A=S+1,L=S+2;n=Ao(this,m,t,i,c,h,f,R,A,L),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const w=p,M=p+1,S=p+2;n=Ao(this,r,t,i,c,h,f,w,M,S),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function qf(s,t,e,i,n,o,r,a){let l;if(t.side===ri?l=i.intersectTriangle(r,o,n,!0,a):l=i.intersectTriangle(n,o,r,t.side===xn,a),l===null)return null;To.copy(a),To.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(To);return c<e.near||c>e.far?null:{distance:c,point:To.clone(),object:s}}function Ao(s,t,e,i,n,o,r,a,l,c){s.getVertexPosition(a,bo),s.getVertexPosition(l,So),s.getVertexPosition(c,wo);const h=qf(s,t,e,i,bo,So,wo,ic);if(h){const f=new P;Pi.getBarycoord(ic,bo,So,wo,f),n&&(h.uv=Pi.getInterpolatedAttribute(n,a,l,c,f,new Rt)),o&&(h.uv1=Pi.getInterpolatedAttribute(o,a,l,c,f,new Rt)),r&&(h.normal=Pi.getInterpolatedAttribute(r,a,l,c,f,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};Pi.getNormal(bo,So,wo,u.normal),h.face=u,h.barycoord=f}return h}class Pe extends Mi{constructor(t=1,e=1,i=1,n=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:o,depthSegments:r};const a=this;n=Math.floor(n),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,o,4),g("x","y","z",-1,-1,t,e,-i,n,o,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2));function g(x,p,m,w,M,S,I,R,A,L,J){const v=S/A,b=I/L,G=S/2,F=I/2,X=R/2,j=A+1,H=L+1;let K=0,B=0;const ft=new P;for(let pt=0;pt<H;pt++){const St=pt*b-F;for(let jt=0;jt<j;jt++){const Qt=jt*v-G;ft[x]=Qt*w,ft[p]=St*M,ft[m]=X,c.push(ft.x,ft.y,ft.z),ft[x]=0,ft[p]=0,ft[m]=R>0?1:-1,h.push(ft.x,ft.y,ft.z),f.push(jt/A),f.push(1-pt/L),K+=1}}for(let pt=0;pt<L;pt++)for(let St=0;St<A;St++){const jt=u+St+j*pt,Qt=u+St+j*(pt+1),Y=u+(St+1)+j*(pt+1),et=u+(St+1)+j*pt;l.push(jt,Qt,et),l.push(Qt,Y,et),B+=6}a.addGroup(d,B,J),d+=B,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function je(s){const t={};for(let e=0;e<s.length;e++){const i=Ts(s[e]);for(const n in i)t[n]=i[n]}return t}function Zf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Hh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Kf={clone:Ts,merge:je};var $f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gh extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=ji}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ln=new P,nc=new Rt,sc=new Rt;class Ci extends Gh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ln.x,ln.y).multiplyScalar(-t/ln.z),ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ln.x,ln.y).multiplyScalar(-t/ln.z)}getViewSize(t,e){return this.getViewBounds(t,nc,sc),e.subVectors(sc,nc)}setViewOffset(t,e,i,n,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,o=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*n/l,e-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ns=-90,ss=1;class jf extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ci(ns,ss,t,e);n.layers=this.layers,this.add(n);const o=new Ci(ns,ss,t,e);o.layers=this.layers,this.add(o);const r=new Ci(ns,ss,t,e);r.layers=this.layers,this.add(r);const a=new Ci(ns,ss,t,e);a.layers=this.layers,this.add(a);const l=new Ci(ns,ss,t,e);l.layers=this.layers,this.add(l);const c=new Ci(ns,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===ji)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,o),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vh extends ti{constructor(t,e,i,n,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,i,n,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qf extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Vh(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ki}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Pe(5,5,5),o=new vn({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:mn});o.uniforms.tEquirect.value=e;const r=new lt(n,o),a=e.minFilter;return e.minFilter===Nn&&(e.minFilter=ki),new jf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(o)}}const Kr=new P,tu=new P,eu=new Vt;class Pn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Kr.subVectors(i,e).cross(tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Kr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/n;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||eu.getNormalMatrix(t),n=this.coplanarPoint(Kr).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new ro,Ro=new P;class Wh{constructor(t=new Pn,e=new Pn,i=new Pn,n=new Pn,o=new Pn,r=new Pn){this.planes=[t,e,i,n,o,r]}set(t,e,i,n,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ji){const i=this.planes,n=t.elements,o=n[0],r=n[1],a=n[2],l=n[3],c=n[4],h=n[5],f=n[6],u=n[7],d=n[8],g=n[9],x=n[10],p=n[11],m=n[12],w=n[13],M=n[14],S=n[15];if(i[0].setComponents(l-o,u-c,p-d,S-m).normalize(),i[1].setComponents(l+o,u+c,p+d,S+m).normalize(),i[2].setComponents(l+r,u+h,p+g,S+w).normalize(),i[3].setComponents(l-r,u-h,p-g,S-w).normalize(),i[4].setComponents(l-a,u-f,p-x,S-M).normalize(),e===ji)i[5].setComponents(l+a,u+f,p+x,S+M).normalize();else if(e===dr)i[5].setComponents(a,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(t){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Ro.x=n.normal.x>0?t.max.x:t.min.x,Ro.y=n.normal.y>0?t.max.y:t.min.y,Ro.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let s=null,t=!1,e=null,i=null;function n(o,r){e(o,r),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function iu(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:o,update:r}}class ao extends Mi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const w=m*u-r;for(let M=0;M<c;M++){const S=M*f-o;g.push(S,-w,0),x.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const M=w+c*m,S=w+c*(m+1),I=w+1+c*(m+1),R=w+1+c*m;d.push(M,S,R),d.push(S,I,R)}this.setIndex(d),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.width,t.height,t.widthSegments,t.heightSegments)}}var nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,su=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ru=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ed=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,id=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ud=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:nu,alphahash_pars_fragment:su,alphamap_fragment:ou,alphamap_pars_fragment:ru,alphatest_fragment:au,alphatest_pars_fragment:lu,aomap_fragment:cu,aomap_pars_fragment:hu,batching_pars_vertex:fu,batching_vertex:uu,begin_vertex:du,beginnormal_vertex:pu,bsdfs:mu,iridescence_fragment:gu,bumpmap_pars_fragment:xu,clipping_planes_fragment:vu,clipping_planes_pars_fragment:_u,clipping_planes_pars_vertex:Mu,clipping_planes_vertex:yu,color_fragment:bu,color_pars_fragment:Su,color_pars_vertex:wu,color_vertex:Eu,common:Tu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:Ru,displacementmap_pars_vertex:Cu,displacementmap_vertex:ku,emissivemap_fragment:Pu,emissivemap_pars_fragment:zu,colorspace_fragment:Lu,colorspace_pars_fragment:Du,envmap_fragment:Iu,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Nu,envmap_pars_vertex:Fu,envmap_physical_pars_fragment:Ku,envmap_vertex:Ou,fog_vertex:Bu,fog_pars_vertex:Hu,fog_fragment:Gu,fog_pars_fragment:Vu,gradientmap_pars_fragment:Wu,lightmap_pars_fragment:Xu,lights_lambert_fragment:Yu,lights_lambert_pars_fragment:qu,lights_pars_begin:Zu,lights_toon_fragment:$u,lights_toon_pars_fragment:Ju,lights_phong_fragment:ju,lights_phong_pars_fragment:Qu,lights_physical_fragment:td,lights_physical_pars_fragment:ed,lights_fragment_begin:id,lights_fragment_maps:nd,lights_fragment_end:sd,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:rd,logdepthbuf_pars_vertex:ad,logdepthbuf_vertex:ld,map_fragment:cd,map_pars_fragment:hd,map_particle_fragment:fd,map_particle_pars_fragment:ud,metalnessmap_fragment:dd,metalnessmap_pars_fragment:pd,morphinstance_vertex:md,morphcolor_vertex:gd,morphnormal_vertex:xd,morphtarget_pars_vertex:vd,morphtarget_vertex:_d,normal_fragment_begin:Md,normal_fragment_maps:yd,normal_pars_fragment:bd,normal_pars_vertex:Sd,normal_vertex:wd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Cd,opaque_fragment:kd,packing:Pd,premultiplied_alpha_fragment:zd,project_vertex:Ld,dithering_fragment:Dd,dithering_pars_fragment:Id,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Od,shadowmap_vertex:Bd,shadowmask_pars_fragment:Hd,skinbase_vertex:Gd,skinning_pars_vertex:Vd,skinning_vertex:Wd,skinnormal_vertex:Xd,specularmap_fragment:Yd,specularmap_pars_fragment:qd,tonemapping_fragment:Zd,tonemapping_pars_fragment:Kd,transmission_fragment:$d,transmission_pars_fragment:Jd,uv_pars_fragment:jd,uv_pars_vertex:Qd,uv_vertex:tp,worldpos_vertex:ep,background_vert:ip,background_frag:np,backgroundCube_vert:sp,backgroundCube_frag:op,cube_vert:rp,cube_frag:ap,depth_vert:lp,depth_frag:cp,distanceRGBA_vert:hp,distanceRGBA_frag:fp,equirect_vert:up,equirect_frag:dp,linedashed_vert:pp,linedashed_frag:mp,meshbasic_vert:gp,meshbasic_frag:xp,meshlambert_vert:vp,meshlambert_frag:_p,meshmatcap_vert:Mp,meshmatcap_frag:yp,meshnormal_vert:bp,meshnormal_frag:Sp,meshphong_vert:wp,meshphong_frag:Ep,meshphysical_vert:Tp,meshphysical_frag:Ap,meshtoon_vert:Rp,meshtoon_frag:Cp,points_vert:kp,points_frag:Pp,shadow_vert:zp,shadow_frag:Lp,sprite_vert:Dp,sprite_frag:Ip},ot={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Ni={basic:{uniforms:je([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:je([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:je([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:je([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:je([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:je([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:je([ot.points,ot.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:je([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:je([ot.common,ot.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:je([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:je([ot.sprite,ot.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:je([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:je([ot.lights,ot.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ni.physical={uniforms:je([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Co={r:0,b:0,g:0},En=new tn,Up=new de;function Np(s,t,e,i,n,o,r){const a=new Ht(0);let l=o===!0?0:1,c,h,f=null,u=0,d=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function x(w){let M=!1;const S=g(w);S===null?m(a,l):S&&S.isColor&&(m(S,1),M=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(w,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===_r)?(h===void 0&&(h=new lt(new Pe(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Ts(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),En.copy(M.backgroundRotation),En.x*=-1,En.y*=-1,En.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Up.makeRotationFromEuler(En)),h.material.toneMapped=le.getTransfer(S.colorSpace)!==me,(f!==S||u!==S.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,f=S,u=S.version,d=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new lt(new ao(2,2),new vn({name:"BackgroundMaterial",uniforms:Ts(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=le.getTransfer(S.colorSpace)!==me,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||u!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,f=S,u=S.version,d=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,M){w.getRGB(Co,Hh(s)),i.buffers.color.setClear(Co.r,Co.g,Co.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:x,addToRenderList:p}}function Fp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let o=n,r=!1;function a(v,b,G,F,X){let j=!1;const H=f(F,G,b);o!==H&&(o=H,c(o.object)),j=d(v,F,G,X),j&&g(v,F,G,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,S(v,b,G,F),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function f(v,b,G){const F=G.wireframe===!0;let X=i[v.id];X===void 0&&(X={},i[v.id]=X);let j=X[b.id];j===void 0&&(j={},X[b.id]=j);let H=j[F];return H===void 0&&(H=u(l()),j[F]=H),H}function u(v){const b=[],G=[],F=[];for(let X=0;X<e;X++)b[X]=0,G[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:G,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,b,G,F){const X=o.attributes,j=b.attributes;let H=0;const K=G.getAttributes();for(const B in K)if(K[B].location>=0){const pt=X[B];let St=j[B];if(St===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(St=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(St=v.instanceColor)),pt===void 0||pt.attribute!==St||St&&pt.data!==St.data)return!0;H++}return o.attributesNum!==H||o.index!==F}function g(v,b,G,F){const X={},j=b.attributes;let H=0;const K=G.getAttributes();for(const B in K)if(K[B].location>=0){let pt=j[B];pt===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const St={};St.attribute=pt,pt&&pt.data&&(St.data=pt.data),X[B]=St,H++}o.attributes=X,o.attributesNum=H,o.index=F}function x(){const v=o.newAttributes;for(let b=0,G=v.length;b<G;b++)v[b]=0}function p(v){m(v,0)}function m(v,b){const G=o.newAttributes,F=o.enabledAttributes,X=o.attributeDivisors;G[v]=1,F[v]===0&&(s.enableVertexAttribArray(v),F[v]=1),X[v]!==b&&(s.vertexAttribDivisor(v,b),X[v]=b)}function w(){const v=o.newAttributes,b=o.enabledAttributes;for(let G=0,F=b.length;G<F;G++)b[G]!==v[G]&&(s.disableVertexAttribArray(G),b[G]=0)}function M(v,b,G,F,X,j,H){H===!0?s.vertexAttribIPointer(v,b,G,X,j):s.vertexAttribPointer(v,b,G,F,X,j)}function S(v,b,G,F){x();const X=F.attributes,j=G.getAttributes(),H=b.defaultAttributeValues;for(const K in j){const B=j[K];if(B.location>=0){let ft=X[K];if(ft===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor)),ft!==void 0){const pt=ft.normalized,St=ft.itemSize,jt=t.get(ft);if(jt===void 0)continue;const Qt=jt.buffer,Y=jt.type,et=jt.bytesPerElement,xt=Y===s.INT||Y===s.UNSIGNED_INT||ft.gpuType===cl;if(ft.isInterleavedBufferAttribute){const st=ft.data,Ft=st.stride,zt=ft.offset;if(st.isInstancedInterleavedBuffer){for(let Zt=0;Zt<B.locationSize;Zt++)m(B.location+Zt,st.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Zt=0;Zt<B.locationSize;Zt++)p(B.location+Zt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Zt=0;Zt<B.locationSize;Zt++)M(B.location+Zt,St/B.locationSize,Y,pt,Ft*et,(zt+St/B.locationSize*Zt)*et,xt)}else{if(ft.isInstancedBufferAttribute){for(let st=0;st<B.locationSize;st++)m(B.location+st,ft.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let st=0;st<B.locationSize;st++)p(B.location+st);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let st=0;st<B.locationSize;st++)M(B.location+st,St/B.locationSize,Y,pt,St*et,St/B.locationSize*st*et,xt)}}else if(H!==void 0){const pt=H[K];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(B.location,pt);break;case 3:s.vertexAttrib3fv(B.location,pt);break;case 4:s.vertexAttrib4fv(B.location,pt);break;default:s.vertexAttrib1fv(B.location,pt)}}}}w()}function I(){L();for(const v in i){const b=i[v];for(const G in b){const F=b[G];for(const X in F)h(F[X].object),delete F[X];delete b[G]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const b=i[v.id];for(const G in b){const F=b[G];for(const X in F)h(F[X].object),delete F[X];delete b[G]}delete i[v.id]}function A(v){for(const b in i){const G=i[b];if(G[v.id]===void 0)continue;const F=G[v.id];for(const X in F)h(F[X].object),delete F[X];delete G[v.id]}}function L(){J(),r=!0,o!==n&&(o=n,c(o.object))}function J(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:L,resetDefaultState:J,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:w}}function Op(s,t,e){let i;function n(c){i=c}function o(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,f){f!==0&&(s.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,i,u[x])}}this.setMode=n,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bp(s,t,e,i){let n;function o(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){return!(A!==zi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===so&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Qi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bi&&!L)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:I,maxSamples:R}}function Hp(s){const t=this;let e=null,i=0,n=!1,o=!1;const r=new Pn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||n;return n=u,i=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=s.get(f);if(!n||g===null||g.length===0||o&&!p)o?h(null):c();else{const w=o?0:i,M=w*4;let S=m.clippingState||null;l.value=S,S=h(g,u,M,d);for(let I=0;I!==M;++I)S[I]=e[I];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=d+x*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,S=d;M!==x;++M,S+=4)r.copy(f[M]).applyMatrix4(w,a),r.normal.toArray(p,S),p[S+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Gp(s){let t=new WeakMap;function e(r,a){return a===Ra?r.mapping=bs:a===Ca&&(r.mapping=Ss),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ra||a===Ca)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Qf(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){const a=r.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Yh extends Gh{constructor(t=-1,e=1,i=1,n=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,oc=[.125,.215,.35,.446,.526,.582],In=20,$r=new Yh,rc=new Ht;let Jr=null,jr=0,Qr=0,ta=!1;const zn=(1+Math.sqrt(5))/2,os=1/zn,ac=[new P(-zn,os,0),new P(zn,os,0),new P(-os,0,zn),new P(os,0,zn),new P(0,zn,-os),new P(0,zn,os),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Jr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,n,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jr,jr,Qr),this._renderer.xr.enabled=ta,t.scissorTest=!1,ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ki,minFilter:ki,generateMipmaps:!1,type:so,format:zi,colorSpace:_n,depthBuffer:!1},n=cc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cc(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vp(o)),this._blurMaterial=Wp(o,t,e)}return n}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,i,n){const a=new Ci(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(rc),h.toneMapping=gn,h.autoClear=!1;const d=new Yt({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),g=new lt(new Pe,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(rc),x=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;ko(n,w*M,m>2?M:0,M,M),h.setRenderTarget(n),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===bs||t.mapping===Ss;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const o=n?this._cubemapMaterial:this._equirectMaterial,r=new lt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;ko(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,$r)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let o=1;o<n;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ac[(n-o-1)%ac.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,n,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",o),this._halfBlur(r,t,i,i,n,"longitudinal",o)}_halfBlur(t,e,i,n,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new lt(this._lodPlanes[n],c),u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*In-1),x=o/g,p=isFinite(o)?1+Math.floor(h*x):In;p>In&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${In}`);const m=[];let w=0;for(let A=0;A<In;++A){const L=A/x,J=Math.exp(-L*L/2);m.push(J),A===0?w+=J:A<p&&(w+=2*J)}for(let A=0;A<m.length;A++)m[A]=m[A]/w;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;const S=this._sizeLods[n],I=3*S*(n>M-ps?n-M+ps:0),R=4*(this._cubeSize-S);ko(e,I,R,3*S,2*S),l.setRenderTarget(e),l.render(f,$r)}}function Vp(s){const t=[],e=[],i=[];let n=s;const o=s-ps+1+oc.length;for(let r=0;r<o;r++){const a=Math.pow(2,n);e.push(a);let l=1/a;r>s-ps?l=oc[r-s+ps-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,p=2,m=1,w=new Float32Array(x*g*d),M=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let R=0;R<d;R++){const A=R%3*2/3-1,L=R>2?0:-1,J=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];w.set(J,x*g*R),M.set(u,p*g*R);const v=[R,R,R,R,R,R];S.set(v,m*g*R)}const I=new Mi;I.setAttribute("position",new ei(w,x)),I.setAttribute("uv",new ei(M,p)),I.setAttribute("faceIndex",new ei(S,m)),t.push(I),n>ps&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function cc(s,t,e){const i=new Bn(s,t,e);return i.texture.mapping=_r,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Wp(s,t,e){const i=new Float32Array(In),n=new P(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function hc(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function fc(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xp(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ra||l===Ca,h=l===bs||l===Ss;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new lc(s)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&n(d)?(e===null&&(e=new lc(s)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Yp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&nr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function qp(s,t,e,i){const n={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}u.removeEventListener("dispose",r),delete n[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return n[u.id]===!0||(u.addEventListener("dispose",r),n[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const x=d[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],s.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,g=f.attributes.position;let x=0;if(d!==null){const w=d.array;x=d.version;for(let M=0,S=w.length;M<S;M+=3){const I=w[M+0],R=w[M+1],A=w[M+2];u.push(I,R,R,A,A,I)}}else if(g!==void 0){const w=g.array;x=g.version;for(let M=0,S=w.length/3-1;M<S;M+=3){const I=M+0,R=M+1,A=M+2;u.push(I,R,R,A,A,I)}}else return;const p=new(Dh(u)?Bh:Oh)(u,1);p.version=x;const m=o.get(f);m&&t.remove(m),o.set(f,p)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Zp(s,t,e){let i;function n(u){i=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,d){s.drawElements(i,d,o,u*r),e.update(d,i,1)}function c(u,d,g){g!==0&&(s.drawElementsInstanced(i,d,o,u*r,g),e.update(d,i,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,o,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,i,1)}function f(u,d,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/r,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,o,u,0,x,0,g);let m=0;for(let w=0;w<g;w++)m+=d[w];for(let w=0;w<x.length;w++)e.update(m,i,x[w])}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Kp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function $p(s,t,e){const i=new WeakMap,n=new Ae;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let v=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var d=v;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let I=a.attributes.position.count*S,R=1;I>t.maxTextureSize&&(R=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const A=new Float32Array(I*R*4*f),L=new Uh(A,I,R,f);L.type=Bi,L.needsUpdate=!0;const J=S*4;for(let b=0;b<f;b++){const G=m[b],F=w[b],X=M[b],j=I*R*4*b;for(let H=0;H<G.count;H++){const K=H*J;g===!0&&(n.fromBufferAttribute(G,H),A[j+K+0]=n.x,A[j+K+1]=n.y,A[j+K+2]=n.z,A[j+K+3]=0),x===!0&&(n.fromBufferAttribute(F,H),A[j+K+4]=n.x,A[j+K+5]=n.y,A[j+K+6]=n.z,A[j+K+7]=0),p===!0&&(n.fromBufferAttribute(X,H),A[j+K+8]=n.x,A[j+K+9]=n.y,A[j+K+10]=n.z,A[j+K+11]=X.itemSize===4?n.w:1)}}u={count:f,texture:L,size:new Rt(I,R)},i.set(a,u),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function Jp(s,t,e,i){let n=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,f=t.get(l,h);if(n.get(f)!==c&&(t.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return f}function r(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class qh extends ti{constructor(t,e,i,n,o,r,a,l,c,h=vs){if(h!==vs&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===vs&&(i=On),i===void 0&&h===Es&&(i=ws),super(null,n,o,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:oi,this.minFilter=l!==void 0?l:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zh=new ti,uc=new qh(1,1),Kh=new Uh,$h=new Uf,Jh=new Vh,dc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),xc=new Float32Array(4);function Cs(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let o=dc[n];if(o===void 0&&(o=new Float32Array(n),dc[n]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function ze(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Le(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function br(s,t){let e=pc[t];e===void 0&&(e=new Int32Array(t),pc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function jp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2fv(this.addr,t),Le(e,t)}}function tm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;s.uniform3fv(this.addr,t),Le(e,t)}}function em(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4fv(this.addr,t),Le(e,t)}}function im(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(ze(e,i))return;xc.set(i),s.uniformMatrix2fv(this.addr,!1,xc),Le(e,i)}}function nm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(ze(e,i))return;gc.set(i),s.uniformMatrix3fv(this.addr,!1,gc),Le(e,i)}}function sm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(ze(e,i))return;mc.set(i),s.uniformMatrix4fv(this.addr,!1,mc),Le(e,i)}}function om(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2iv(this.addr,t),Le(e,t)}}function am(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3iv(this.addr,t),Le(e,t)}}function lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4iv(this.addr,t),Le(e,t)}}function cm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2uiv(this.addr,t),Le(e,t)}}function fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3uiv(this.addr,t),Le(e,t)}}function um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4uiv(this.addr,t),Le(e,t)}}function dm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let o;this.type===s.SAMPLER_2D_SHADOW?(uc.compareFunction=Lh,o=uc):o=Zh,e.setTexture2D(t||o,n)}function pm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||$h,n)}function mm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Jh,n)}function gm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Kh,n)}function xm(s){switch(s){case 5126:return jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return im;case 35675:return nm;case 35676:return sm;case 5124:case 35670:return om;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return fm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function vm(s,t){s.uniform1fv(this.addr,t)}function _m(s,t){const e=Cs(t,this.size,2);s.uniform2fv(this.addr,e)}function Mm(s,t){const e=Cs(t,this.size,3);s.uniform3fv(this.addr,e)}function ym(s,t){const e=Cs(t,this.size,4);s.uniform4fv(this.addr,e)}function bm(s,t){const e=Cs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sm(s,t){const e=Cs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function wm(s,t){const e=Cs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Em(s,t){s.uniform1iv(this.addr,t)}function Tm(s,t){s.uniform2iv(this.addr,t)}function Am(s,t){s.uniform3iv(this.addr,t)}function Rm(s,t){s.uniform4iv(this.addr,t)}function Cm(s,t){s.uniform1uiv(this.addr,t)}function km(s,t){s.uniform2uiv(this.addr,t)}function Pm(s,t){s.uniform3uiv(this.addr,t)}function zm(s,t){s.uniform4uiv(this.addr,t)}function Lm(s,t,e){const i=this.cache,n=t.length,o=br(e,n);ze(i,o)||(s.uniform1iv(this.addr,o),Le(i,o));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Zh,o[r])}function Dm(s,t,e){const i=this.cache,n=t.length,o=br(e,n);ze(i,o)||(s.uniform1iv(this.addr,o),Le(i,o));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||$h,o[r])}function Im(s,t,e){const i=this.cache,n=t.length,o=br(e,n);ze(i,o)||(s.uniform1iv(this.addr,o),Le(i,o));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Jh,o[r])}function Um(s,t,e){const i=this.cache,n=t.length,o=br(e,n);ze(i,o)||(s.uniform1iv(this.addr,o),Le(i,o));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Kh,o[r])}function Nm(s){switch(s){case 5126:return vm;case 35664:return _m;case 35665:return Mm;case 35666:return ym;case 35674:return bm;case 35675:return Sm;case 35676:return wm;case 5124:case 35670:return Em;case 35667:case 35671:return Tm;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return Cm;case 36294:return km;case 36295:return Pm;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Um}}class Fm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xm(e.type)}}class Om{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nm(e.type)}}class Bm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let o=0,r=n.length;o!==r;++o){const a=n[o];a.setValue(t,e[a.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function vc(s,t){s.seq.push(t),s.map[t.id]=t}function Hm(s,t,e){const i=s.name,n=i.length;for(ea.lastIndex=0;;){const o=ea.exec(i),r=ea.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===n){vc(e,c===void 0?new Fm(a,s,t):new Om(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Bm(a),vc(e,f)),e=f}}}class sr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const o=t.getActiveUniform(e,n),r=t.getUniformLocation(e,o.name);Hm(o,r,this)}}setValue(t,e,i,n){const o=this.map[e];o!==void 0&&o.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,o=t.length;n!==o;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function _c(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Gm=37297;let Vm=0;function Wm(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=n;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function Xm(s){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(s);let i;switch(t===e?i="":t===fr&&e===hr?i="LinearDisplayP3ToLinearSRGB":t===hr&&e===fr&&(i="LinearSRGBToLinearDisplayP3"),s){case _n:case Mr:return[i,"LinearTransferOETF"];case Ui:case gl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Mc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const o=/ERROR: 0:(\d+)/.exec(n);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+n+`

`+Wm(s.getShaderSource(t),r)}else return n}function Ym(s,t){const e=Xm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qm(s,t){let e;switch(t){case X0:e="Linear";break;case Y0:e="Reinhard";break;case q0:e="Cineon";break;case Z0:e="ACESFilmic";break;case $0:e="AgX";break;case J0:e="Neutral";break;case K0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Po=new P;function Zm(){le.getLuminanceCoefficients(Po);const s=Po.x.toFixed(4),t=Po.y.toFixed(4),e=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function $m(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Jm(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const o=s.getActiveAttrib(t,n),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Vs(s){return s!==""}function yc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(s){return s.replace(jm,tg)}const Qm=new Map;function tg(s,t){let e=Gt[t];if(e===void 0){const i=Qm.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}const eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(s){return s.replace(eg,ig)}function ig(s,t,e,i){let n="";for(let o=parseInt(t);o<parseInt(e);o++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return n}function wc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ng(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===w0?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function sg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case Ss:t="ENVMAP_TYPE_CUBE";break;case _r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function og(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function rg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bh:t="ENVMAP_BLENDING_MULTIPLY";break;case V0:t="ENVMAP_BLENDING_MIX";break;case W0:t="ENVMAP_BLENDING_ADD";break}return t}function ag(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function lg(s,t,e,i){const n=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=ng(e),c=sg(e),h=og(e),f=rg(e),u=ag(e),d=Km(e),g=$m(o),x=n.createProgram();let p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),m.length>0&&(m+=`
`)):(p=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),m=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==gn?qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),Zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),r=sl(r),r=yc(r,e),r=bc(r,e),a=sl(a),a=yc(a,e),a=bc(a,e),r=Sc(r),a=Sc(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=w+p+r,S=w+m+a,I=_c(n,n.VERTEX_SHADER,M),R=_c(n,n.FRAGMENT_SHADER,S);n.attachShader(x,I),n.attachShader(x,R),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(b){if(s.debug.checkShaderErrors){const G=n.getProgramInfoLog(x).trim(),F=n.getShaderInfoLog(I).trim(),X=n.getShaderInfoLog(R).trim();let j=!0,H=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,I,R);else{const K=Mc(n,I,"vertex"),B=Mc(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+G+`
`+K+`
`+B)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||X==="")&&(H=!1);H&&(b.diagnostics={runnable:j,programLog:G,vertexShader:{log:F,prefix:p},fragmentShader:{log:X,prefix:m}})}n.deleteShader(I),n.deleteShader(R),L=new sr(n,x),J=Jm(n,x)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let J;this.getAttributes=function(){return J===void 0&&A(this),J};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(x,Gm)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=R,this}let cg=0;class hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new fg(t),e.set(t,i)),i}}class fg{constructor(t){this.id=cg++,this.code=t,this.usedTimes=0}}function ug(s,t,e,i,n,o,r){const a=new Nh,l=new hg,c=new Set,h=[],f=n.logarithmicDepthBuffer,u=n.reverseDepthBuffer,d=n.vertexTextures;let g=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,b,G,F,X){const j=F.fog,H=X.geometry,K=v.isMeshStandardMaterial?F.environment:null,B=(v.isMeshStandardMaterial?e:t).get(v.envMap||K),ft=B&&B.mapping===_r?B.image.height:null,pt=x[v.type];v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const St=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,jt=St!==void 0?St.length:0;let Qt=0;H.morphAttributes.position!==void 0&&(Qt=1),H.morphAttributes.normal!==void 0&&(Qt=2),H.morphAttributes.color!==void 0&&(Qt=3);let Y,et,xt,st;if(pt){const ni=Ni[pt];Y=ni.vertexShader,et=ni.fragmentShader}else Y=v.vertexShader,et=v.fragmentShader,l.update(v),xt=l.getVertexShaderID(v),st=l.getFragmentShaderID(v);const Ft=s.getRenderTarget(),zt=X.isInstancedMesh===!0,Zt=X.isBatchedMesh===!0,ie=!!v.map,V=!!v.matcap,T=!!B,kt=!!v.aoMap,rt=!!v.lightMap,Et=!!v.bumpMap,yt=!!v.normalMap,qt=!!v.displacementMap,Ot=!!v.emissiveMap,E=!!v.metalnessMap,_=!!v.roughnessMap,D=v.anisotropy>0,Z=v.clearcoat>0,tt=v.dispersion>0,q=v.iridescence>0,Tt=v.sheen>0,at=v.transmission>0,gt=D&&!!v.anisotropyMap,ee=Z&&!!v.clearcoatMap,it=Z&&!!v.clearcoatNormalMap,vt=Z&&!!v.clearcoatRoughnessMap,Ut=q&&!!v.iridescenceMap,Nt=q&&!!v.iridescenceThicknessMap,_t=Tt&&!!v.sheenColorMap,$t=Tt&&!!v.sheenRoughnessMap,Bt=!!v.specularMap,fe=!!v.specularColorMap,C=!!v.specularIntensityMap,ut=at&&!!v.transmissionMap,O=at&&!!v.thicknessMap,$=!!v.gradientMap,ct=!!v.alphaMap,dt=v.alphaTest>0,te=!!v.alphaHash,Re=!!v.extensions;let ii=gn;v.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(ii=s.toneMapping);const ne={shaderID:pt,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:et,defines:v.defines,customVertexShaderID:xt,customFragmentShaderID:st,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&X._colorsTexture!==null,instancing:zt,instancingColor:zt&&X.instanceColor!==null,instancingMorph:zt&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ft===null?s.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:_n,alphaToCoverage:!!v.alphaToCoverage,map:ie,matcap:V,envMap:T,envMapMode:T&&B.mapping,envMapCubeUVHeight:ft,aoMap:kt,lightMap:rt,bumpMap:Et,normalMap:yt,displacementMap:d&&qt,emissiveMap:Ot,normalMapObjectSpace:yt&&v.normalMapType===nf,normalMapTangentSpace:yt&&v.normalMapType===ef,metalnessMap:E,roughnessMap:_,anisotropy:D,anisotropyMap:gt,clearcoat:Z,clearcoatMap:ee,clearcoatNormalMap:it,clearcoatRoughnessMap:vt,dispersion:tt,iridescence:q,iridescenceMap:Ut,iridescenceThicknessMap:Nt,sheen:Tt,sheenColorMap:_t,sheenRoughnessMap:$t,specularMap:Bt,specularColorMap:fe,specularIntensityMap:C,transmission:at,transmissionMap:ut,thicknessMap:O,gradientMap:$,opaque:v.transparent===!1&&v.blending===xs&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:dt,alphaHash:te,combine:v.combine,mapUv:ie&&p(v.map.channel),aoMapUv:kt&&p(v.aoMap.channel),lightMapUv:rt&&p(v.lightMap.channel),bumpMapUv:Et&&p(v.bumpMap.channel),normalMapUv:yt&&p(v.normalMap.channel),displacementMapUv:qt&&p(v.displacementMap.channel),emissiveMapUv:Ot&&p(v.emissiveMap.channel),metalnessMapUv:E&&p(v.metalnessMap.channel),roughnessMapUv:_&&p(v.roughnessMap.channel),anisotropyMapUv:gt&&p(v.anisotropyMap.channel),clearcoatMapUv:ee&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:$t&&p(v.sheenRoughnessMap.channel),specularMapUv:Bt&&p(v.specularMap.channel),specularColorMapUv:fe&&p(v.specularColorMap.channel),specularIntensityMapUv:C&&p(v.specularIntensityMap.channel),transmissionMapUv:ut&&p(v.transmissionMap.channel),thicknessMapUv:O&&p(v.thicknessMap.channel),alphaMapUv:ct&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(yt||D),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(ie||ct),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:jt,morphTextureStride:Qt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ii,decodeVideoTexture:ie&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ji,flipSided:v.side===ri,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Re&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&v.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function w(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const G in v.defines)b.push(G),b.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(M(b,v),S(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function S(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),v.push(a.mask)}function I(v){const b=x[v.type];let G;if(b){const F=Ni[b];G=Kf.clone(F.uniforms)}else G=v.uniforms;return G}function R(v,b){let G;for(let F=0,X=h.length;F<X;F++){const j=h[F];if(j.cacheKey===b){G=j,++G.usedTimes;break}}return G===void 0&&(G=new lg(s,b,v,o),h.push(G)),G}function A(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function L(v){l.remove(v)}function J(){l.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:I,acquireProgram:R,releaseProgram:A,releaseShaderCache:L,programs:h,dispose:J}}function dg(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function i(r){s.delete(r)}function n(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:o}}function pg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ec(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Tc(){const s=[];let t=0;const e=[],i=[],n=[];function o(){t=0,e.length=0,i.length=0,n.length=0}function r(f,u,d,g,x,p){let m=s[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},s[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=x,m.group=p),t++,m}function a(f,u,d,g,x,p){const m=r(f,u,d,g,x,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):e.push(m)}function l(f,u,d,g,x,p){const m=r(f,u,d,g,x,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):e.unshift(m)}function c(f,u){e.length>1&&e.sort(f||pg),i.length>1&&i.sort(u||Ec),n.length>1&&n.sort(u||Ec)}function h(){for(let f=t,u=s.length;f<u;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:o,push:a,unshift:l,finish:h,sort:c}}function mg(){let s=new WeakMap;function t(i,n){const o=s.get(i);let r;return o===void 0?(r=new Tc,s.set(i,[r])):n>=o.length?(r=new Tc,o.push(r)):r=o[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function gg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ht};break;case"SpotLight":e={position:new P,direction:new P,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function xg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let vg=0;function _g(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Mg(s){const t=new gg,e=xg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const n=new P,o=new de,r=new de;function a(c){let h=0,f=0,u=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,w=0,M=0,S=0,I=0,R=0,A=0;c.sort(_g);for(let J=0,v=c.length;J<v;J++){const b=c[J],G=b.color,F=b.intensity,X=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=G.r*F,f+=G.g*F,u+=G.b*F;else if(b.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(b.sh.coefficients[H],F);A++}else if(b.isDirectionalLight){const H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const K=b.shadow,B=e.get(b);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=b.shadow.matrix,w++}i.directional[d]=H,d++}else if(b.isSpotLight){const H=t.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(G).multiplyScalar(F),H.distance=X,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,i.spot[x]=H;const K=b.shadow;if(b.map&&(i.spotLightMap[I]=b.map,I++,K.updateMatrices(b),b.castShadow&&R++),i.spotLightMatrix[x]=K.matrix,b.castShadow){const B=e.get(b);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=j,S++}x++}else if(b.isRectAreaLight){const H=t.get(b);H.color.copy(G).multiplyScalar(F),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),i.rectArea[p]=H,p++}else if(b.isPointLight){const H=t.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),H.distance=b.distance,H.decay=b.decay,b.castShadow){const K=b.shadow,B=e.get(b);B.shadowIntensity=K.intensity,B.shadowBias=K.bias,B.shadowNormalBias=K.normalBias,B.shadowRadius=K.radius,B.shadowMapSize=K.mapSize,B.shadowCameraNear=K.camera.near,B.shadowCameraFar=K.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=b.shadow.matrix,M++}i.point[g]=H,g++}else if(b.isHemisphereLight){const H=t.get(b);H.skyColor.copy(b.color).multiplyScalar(F),H.groundColor.copy(b.groundColor).multiplyScalar(F),i.hemi[m]=H,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==w||L.numPointShadows!==M||L.numSpotShadows!==S||L.numSpotMaps!==I||L.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,L.directionalLength=d,L.pointLength=g,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=w,L.numPointShadows=M,L.numSpotShadows=S,L.numSpotMaps=I,L.numLightProbes=A,i.version=vg++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0;const p=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const M=c[m];if(M.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),f++}else if(M.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),r.identity(),o.copy(M.matrixWorld),o.premultiply(p),r.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Ac(s){const t=new Mg(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function yg(s){let t=new WeakMap;function e(n,o=0){const r=t.get(n);let a;return r===void 0?(a=new Ac(s),t.set(n,[a])):o>=r.length?(a=new Ac(s),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class bg extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sg extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tg(s,t,e){let i=new Wh;const n=new Rt,o=new Rt,r=new Ae,a=new bg({depthPacking:tf}),l=new Sg,c={},h=e.maxTextureSize,f={[xn]:ri,[ri]:xn,[Ji]:Ji},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:wg,fragmentShader:Eg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Mi;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new lt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let m=this.type;this.render=function(R,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const J=s.getRenderTarget(),v=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),G=s.state;G.setBlending(mn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const F=m!==$i&&this.type===$i,X=m===$i&&this.type!==$i;for(let j=0,H=R.length;j<H;j++){const K=R[j],B=K.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);const ft=B.getFrameExtents();if(n.multiply(ft),o.copy(B.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(o.x=Math.floor(h/ft.x),n.x=o.x*ft.x,B.mapSize.x=o.x),n.y>h&&(o.y=Math.floor(h/ft.y),n.y=o.y*ft.y,B.mapSize.y=o.y)),B.map===null||F===!0||X===!0){const St=this.type!==$i?{minFilter:oi,magFilter:oi}:{};B.map!==null&&B.map.dispose(),B.map=new Bn(n.x,n.y,St),B.map.texture.name=K.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const pt=B.getViewportCount();for(let St=0;St<pt;St++){const jt=B.getViewport(St);r.set(o.x*jt.x,o.y*jt.y,o.x*jt.z,o.y*jt.w),G.viewport(r),B.updateMatrices(K,St),i=B.getFrustum(),S(A,L,B.camera,K,this.type)}B.isPointLightShadow!==!0&&this.type===$i&&w(B,L),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(J,v,b)};function w(R,A){const L=t.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Bn(n.x,n.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,L,u,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,L,d,x,null)}function M(R,A,L,J){let v=null;const b=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)v=b;else if(v=L.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=v.uuid,F=A.uuid;let X=c[G];X===void 0&&(X={},c[G]=X);let j=X[F];j===void 0&&(j=v.clone(),X[F]=j,A.addEventListener("dispose",I)),v=j}if(v.visible=A.visible,v.wireframe=A.wireframe,J===$i?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:f[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=s.properties.get(v);G.light=L}return v}function S(R,A,L,J,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===$i)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const F=t.update(R),X=R.material;if(Array.isArray(X)){const j=F.groups;for(let H=0,K=j.length;H<K;H++){const B=j[H],ft=X[B.materialIndex];if(ft&&ft.visible){const pt=M(R,ft,J,v);R.onBeforeShadow(s,R,A,L,F,pt,B),s.renderBufferDirect(L,null,F,pt,R,B),R.onAfterShadow(s,R,A,L,F,pt,B)}}}else if(X.visible){const j=M(R,X,J,v);R.onBeforeShadow(s,R,A,L,F,j,null),s.renderBufferDirect(L,null,F,j,R,null),R.onAfterShadow(s,R,A,L,F,j,null)}}const G=R.children;for(let F=0,X=G.length;F<X;F++)S(G[F],A,L,J,v)}function I(R){R.target.removeEventListener("dispose",I);for(const L in c){const J=c[L],v=R.target.uuid;v in J&&(J[v].dispose(),delete J[v])}}}const Ag={[ya]:ba,[Sa]:Ta,[wa]:Aa,[ys]:Ea,[ba]:ya,[Ta]:Sa,[Aa]:wa,[Ea]:ys};function Rg(s){function t(){let C=!1;const ut=new Ae;let O=null;const $=new Ae(0,0,0,0);return{setMask:function(ct){O!==ct&&!C&&(s.colorMask(ct,ct,ct,ct),O=ct)},setLocked:function(ct){C=ct},setClear:function(ct,dt,te,Re,ii){ii===!0&&(ct*=Re,dt*=Re,te*=Re),ut.set(ct,dt,te,Re),$.equals(ut)===!1&&(s.clearColor(ct,dt,te,Re),$.copy(ut))},reset:function(){C=!1,O=null,$.set(-1,0,0,0)}}}function e(){let C=!1,ut=!1,O=null,$=null,ct=null;return{setReversed:function(dt){ut=dt},setTest:function(dt){dt?xt(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(dt){O!==dt&&!C&&(s.depthMask(dt),O=dt)},setFunc:function(dt){if(ut&&(dt=Ag[dt]),$!==dt){switch(dt){case ya:s.depthFunc(s.NEVER);break;case ba:s.depthFunc(s.ALWAYS);break;case Sa:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case wa:s.depthFunc(s.EQUAL);break;case Ea:s.depthFunc(s.GEQUAL);break;case Ta:s.depthFunc(s.GREATER);break;case Aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=dt}},setLocked:function(dt){C=dt},setClear:function(dt){ct!==dt&&(s.clearDepth(dt),ct=dt)},reset:function(){C=!1,O=null,$=null,ct=null}}}function i(){let C=!1,ut=null,O=null,$=null,ct=null,dt=null,te=null,Re=null,ii=null;return{setTest:function(ne){C||(ne?xt(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(ne){ut!==ne&&!C&&(s.stencilMask(ne),ut=ne)},setFunc:function(ne,ni,Gi){(O!==ne||$!==ni||ct!==Gi)&&(s.stencilFunc(ne,ni,Gi),O=ne,$=ni,ct=Gi)},setOp:function(ne,ni,Gi){(dt!==ne||te!==ni||Re!==Gi)&&(s.stencilOp(ne,ni,Gi),dt=ne,te=ni,Re=Gi)},setLocked:function(ne){C=ne},setClear:function(ne){ii!==ne&&(s.clearStencil(ne),ii=ne)},reset:function(){C=!1,ut=null,O=null,$=null,ct=null,dt=null,te=null,Re=null,ii=null}}}const n=new t,o=new e,r=new i,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,g=!1,x=null,p=null,m=null,w=null,M=null,S=null,I=null,R=new Ht(0,0,0),A=0,L=!1,J=null,v=null,b=null,G=null,F=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,H=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=H>=2);let B=null,ft={};const pt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),jt=new Ae().fromArray(pt),Qt=new Ae().fromArray(St);function Y(C,ut,O,$){const ct=new Uint8Array(4),dt=s.createTexture();s.bindTexture(C,dt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let te=0;te<O;te++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(ut+te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return dt}const et={};et[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),o.setClear(1),r.setClear(0),xt(s.DEPTH_TEST),o.setFunc(ys),rt(!1),Et(Il),xt(s.CULL_FACE),T(mn);function xt(C){c[C]!==!0&&(s.enable(C),c[C]=!0)}function st(C){c[C]!==!1&&(s.disable(C),c[C]=!1)}function Ft(C,ut){return h[C]!==ut?(s.bindFramebuffer(C,ut),h[C]=ut,C===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ut),C===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function zt(C,ut){let O=u,$=!1;if(C){O=f.get(ut),O===void 0&&(O=[],f.set(ut,O));const ct=C.textures;if(O.length!==ct.length||O[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,te=ct.length;dt<te;dt++)O[dt]=s.COLOR_ATTACHMENT0+dt;O.length=ct.length,$=!0}}else O[0]!==s.BACK&&(O[0]=s.BACK,$=!0);$&&s.drawBuffers(O)}function Zt(C){return d!==C?(s.useProgram(C),d=C,!0):!1}const ie={[Dn]:s.FUNC_ADD,[T0]:s.FUNC_SUBTRACT,[A0]:s.FUNC_REVERSE_SUBTRACT};ie[R0]=s.MIN,ie[C0]=s.MAX;const V={[k0]:s.ZERO,[P0]:s.ONE,[z0]:s.SRC_COLOR,[_a]:s.SRC_ALPHA,[F0]:s.SRC_ALPHA_SATURATE,[U0]:s.DST_COLOR,[D0]:s.DST_ALPHA,[L0]:s.ONE_MINUS_SRC_COLOR,[Ma]:s.ONE_MINUS_SRC_ALPHA,[N0]:s.ONE_MINUS_DST_COLOR,[I0]:s.ONE_MINUS_DST_ALPHA,[O0]:s.CONSTANT_COLOR,[B0]:s.ONE_MINUS_CONSTANT_COLOR,[H0]:s.CONSTANT_ALPHA,[G0]:s.ONE_MINUS_CONSTANT_ALPHA};function T(C,ut,O,$,ct,dt,te,Re,ii,ne){if(C===mn){g===!0&&(st(s.BLEND),g=!1);return}if(g===!1&&(xt(s.BLEND),g=!0),C!==E0){if(C!==x||ne!==L){if((p!==Dn||M!==Dn)&&(s.blendEquation(s.FUNC_ADD),p=Dn,M=Dn),ne)switch(C){case xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ds:s.blendFunc(s.ONE,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ds:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}m=null,w=null,S=null,I=null,R.set(0,0,0),A=0,x=C,L=ne}return}ct=ct||ut,dt=dt||O,te=te||$,(ut!==p||ct!==M)&&(s.blendEquationSeparate(ie[ut],ie[ct]),p=ut,M=ct),(O!==m||$!==w||dt!==S||te!==I)&&(s.blendFuncSeparate(V[O],V[$],V[dt],V[te]),m=O,w=$,S=dt,I=te),(Re.equals(R)===!1||ii!==A)&&(s.blendColor(Re.r,Re.g,Re.b,ii),R.copy(Re),A=ii),x=C,L=!1}function kt(C,ut){C.side===Ji?st(s.CULL_FACE):xt(s.CULL_FACE);let O=C.side===ri;ut&&(O=!O),rt(O),C.blending===xs&&C.transparent===!1?T(mn):T(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),n.setMask(C.colorWrite);const $=C.stencilWrite;r.setTest($),$&&(r.setMask(C.stencilWriteMask),r.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),r.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),qt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(C){J!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),J=C)}function Et(C){C!==b0?(xt(s.CULL_FACE),C!==v&&(C===Il?s.cullFace(s.BACK):C===S0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),v=C}function yt(C){C!==b&&(j&&s.lineWidth(C),b=C)}function qt(C,ut,O){C?(xt(s.POLYGON_OFFSET_FILL),(G!==ut||F!==O)&&(s.polygonOffset(ut,O),G=ut,F=O)):st(s.POLYGON_OFFSET_FILL)}function Ot(C){C?xt(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function E(C){C===void 0&&(C=s.TEXTURE0+X-1),B!==C&&(s.activeTexture(C),B=C)}function _(C,ut,O){O===void 0&&(B===null?O=s.TEXTURE0+X-1:O=B);let $=ft[O];$===void 0&&($={type:void 0,texture:void 0},ft[O]=$),($.type!==C||$.texture!==ut)&&(B!==O&&(s.activeTexture(O),B=O),s.bindTexture(C,ut||et[C]),$.type=C,$.texture=ut)}function D(){const C=ft[B];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(C){jt.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),jt.copy(C))}function _t(C){Qt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),Qt.copy(C))}function $t(C,ut){let O=l.get(ut);O===void 0&&(O=new WeakMap,l.set(ut,O));let $=O.get(C);$===void 0&&($=s.getUniformBlockIndex(ut,C.name),O.set(C,$))}function Bt(C,ut){const $=l.get(ut).get(C);a.get(ut)!==$&&(s.uniformBlockBinding(ut,$,C.__bindingPointIndex),a.set(ut,$))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},B=null,ft={},h={},f=new WeakMap,u=[],d=null,g=!1,x=null,p=null,m=null,w=null,M=null,S=null,I=null,R=new Ht(0,0,0),A=0,L=!1,J=null,v=null,b=null,G=null,F=null,jt.set(0,0,s.canvas.width,s.canvas.height),Qt.set(0,0,s.canvas.width,s.canvas.height),n.reset(),o.reset(),r.reset()}return{buffers:{color:n,depth:o,stencil:r},enable:xt,disable:st,bindFramebuffer:Ft,drawBuffers:zt,useProgram:Zt,setBlending:T,setMaterial:kt,setFlipSided:rt,setCullFace:Et,setLineWidth:yt,setPolygonOffset:qt,setScissorTest:Ot,activeTexture:E,bindTexture:_,unbindTexture:D,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:vt,texImage3D:Ut,updateUBOMapping:$t,uniformBlockBinding:Bt,texStorage2D:ee,texStorage3D:it,texSubImage2D:q,texSubImage3D:Tt,compressedTexSubImage2D:at,compressedTexSubImage3D:gt,scissor:Nt,viewport:_t,reset:fe}}function Rc(s,t,e,i){const n=Cg(i);switch(e){case Ah:return s*t;case Ch:return s*t;case kh:return s*t*2;case ul:return s*t/n.components*n.byteLength;case dl:return s*t/n.components*n.byteLength;case Ph:return s*t*2/n.components*n.byteLength;case pl:return s*t*2/n.components*n.byteLength;case Rh:return s*t*3/n.components*n.byteLength;case zi:return s*t*4/n.components*n.byteLength;case ml:return s*t*4/n.components*n.byteLength;case jo:case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case La:case Ia:return Math.max(s,16)*Math.max(t,8)/4;case za:case Da:return Math.max(s,8)*Math.max(t,8)/2;case Ua:case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Za:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ir:case Qa:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zh:case el:return Math.ceil(s/4)*Math.ceil(t/4)*8;case il:case nl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cg(s){switch(s){case Qi:case wh:return{byteLength:1,components:1};case js:case Eh:case so:return{byteLength:2,components:1};case hl:case fl:return{byteLength:2,components:4};case On:case cl:case Bi:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function kg(s,t,e,i,n,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return d?new OffscreenCanvas(E,_):pr("canvas")}function x(E,_,D){let Z=1;const tt=Ot(E);if((tt.width>D||tt.height>D)&&(Z=D/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(Z*tt.width),Tt=Math.floor(Z*tt.height);f===void 0&&(f=g(q,Tt));const at=_?g(q,Tt):f;return at.width=q,at.height=Tt,at.getContext("2d").drawImage(E,0,0,q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+q+"x"+Tt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function p(E){return E.generateMipmaps&&E.minFilter!==oi&&E.minFilter!==ki}function m(E){s.generateMipmap(E)}function w(E,_,D,Z,tt=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=_;if(_===s.RED&&(D===s.FLOAT&&(q=s.R32F),D===s.HALF_FLOAT&&(q=s.R16F),D===s.UNSIGNED_BYTE&&(q=s.R8)),_===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(q=s.R8UI),D===s.UNSIGNED_SHORT&&(q=s.R16UI),D===s.UNSIGNED_INT&&(q=s.R32UI),D===s.BYTE&&(q=s.R8I),D===s.SHORT&&(q=s.R16I),D===s.INT&&(q=s.R32I)),_===s.RG&&(D===s.FLOAT&&(q=s.RG32F),D===s.HALF_FLOAT&&(q=s.RG16F),D===s.UNSIGNED_BYTE&&(q=s.RG8)),_===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(q=s.RG8UI),D===s.UNSIGNED_SHORT&&(q=s.RG16UI),D===s.UNSIGNED_INT&&(q=s.RG32UI),D===s.BYTE&&(q=s.RG8I),D===s.SHORT&&(q=s.RG16I),D===s.INT&&(q=s.RG32I)),_===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(q=s.RGB8UI),D===s.UNSIGNED_SHORT&&(q=s.RGB16UI),D===s.UNSIGNED_INT&&(q=s.RGB32UI),D===s.BYTE&&(q=s.RGB8I),D===s.SHORT&&(q=s.RGB16I),D===s.INT&&(q=s.RGB32I)),_===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),D===s.UNSIGNED_INT&&(q=s.RGBA32UI),D===s.BYTE&&(q=s.RGBA8I),D===s.SHORT&&(q=s.RGBA16I),D===s.INT&&(q=s.RGBA32I)),_===s.RGB&&D===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),_===s.RGBA){const Tt=tt?cr:le.getTransfer(Z);D===s.FLOAT&&(q=s.RGBA32F),D===s.HALF_FLOAT&&(q=s.RGBA16F),D===s.UNSIGNED_BYTE&&(q=Tt===me?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(E,_){let D;return E?_===null||_===On||_===ws?D=s.DEPTH24_STENCIL8:_===Bi?D=s.DEPTH32F_STENCIL8:_===js&&(D=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===On||_===ws?D=s.DEPTH_COMPONENT24:_===Bi?D=s.DEPTH_COMPONENT32F:_===js&&(D=s.DEPTH_COMPONENT16),D}function S(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==oi&&E.minFilter!==ki?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function I(E){const _=E.target;_.removeEventListener("dispose",I),A(_),_.isVideoTexture&&h.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),J(_)}function A(E){const _=i.get(E);if(_.__webglInit===void 0)return;const D=E.source,Z=u.get(D);if(Z){const tt=Z[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(E),Object.keys(Z).length===0&&u.delete(D)}i.remove(E)}function L(E){const _=i.get(E);s.deleteTexture(_.__webglTexture);const D=E.source,Z=u.get(D);delete Z[_.__cacheKey],r.memory.textures--}function J(E){const _=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let tt=0;tt<_.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(_.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)s.deleteFramebuffer(_.__webglFramebuffer[Z]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=E.textures;for(let Z=0,tt=D.length;Z<tt;Z++){const q=i.get(D[Z]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),r.memory.textures--),i.remove(D[Z])}i.remove(E)}let v=0;function b(){v=0}function G(){const E=v;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),v+=1,E}function F(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function X(E,_){const D=i.get(E);if(E.isVideoTexture&&yt(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(D,E,_);return}}e.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+_)}function j(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){Qt(D,E,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+_)}function H(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){Qt(D,E,_);return}e.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+_)}function K(E,_){const D=i.get(E);if(E.version>0&&D.__version!==E.version){Y(D,E,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+_)}const B={[ka]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[Pa]:s.MIRRORED_REPEAT},ft={[oi]:s.NEAREST,[j0]:s.NEAREST_MIPMAP_NEAREST,[ho]:s.NEAREST_MIPMAP_LINEAR,[ki]:s.LINEAR,[Rr]:s.LINEAR_MIPMAP_NEAREST,[Nn]:s.LINEAR_MIPMAP_LINEAR},pt={[sf]:s.NEVER,[hf]:s.ALWAYS,[of]:s.LESS,[Lh]:s.LEQUAL,[rf]:s.EQUAL,[cf]:s.GEQUAL,[af]:s.GREATER,[lf]:s.NOTEQUAL};function St(E,_){if(_.type===Bi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ki||_.magFilter===Rr||_.magFilter===ho||_.magFilter===Nn||_.minFilter===ki||_.minFilter===Rr||_.minFilter===ho||_.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,B[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,B[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,B[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ft[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ft[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===oi||_.minFilter!==ho&&_.minFilter!==Nn||_.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function jt(E,_){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",I));const Z=_.source;let tt=u.get(Z);tt===void 0&&(tt={},u.set(Z,tt));const q=F(_);if(q!==E.__cacheKey){tt[q]===void 0&&(tt[q]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,D=!0),tt[q].usedTimes++;const Tt=tt[E.__cacheKey];Tt!==void 0&&(tt[E.__cacheKey].usedTimes--,Tt.usedTimes===0&&L(_)),E.__cacheKey=q,E.__webglTexture=tt[q].texture}return D}function Qt(E,_,D){let Z=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=s.TEXTURE_3D);const tt=jt(E,_),q=_.source;e.bindTexture(Z,E.__webglTexture,s.TEXTURE0+D);const Tt=i.get(q);if(q.version!==Tt.__version||tt===!0){e.activeTexture(s.TEXTURE0+D);const at=le.getPrimaries(le.workingColorSpace),gt=_.colorSpace===dn?null:le.getPrimaries(_.colorSpace),ee=_.colorSpace===dn||at===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let it=x(_.image,!1,n.maxTextureSize);it=qt(_,it);const vt=o.convert(_.format,_.colorSpace),Ut=o.convert(_.type);let Nt=w(_.internalFormat,vt,Ut,_.colorSpace,_.isVideoTexture);St(Z,_);let _t;const $t=_.mipmaps,Bt=_.isVideoTexture!==!0,fe=Tt.__version===void 0||tt===!0,C=q.dataReady,ut=S(_,it);if(_.isDepthTexture)Nt=M(_.format===Es,_.type),fe&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,Nt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Nt,it.width,it.height,0,vt,Ut,null));else if(_.isDataTexture)if($t.length>0){Bt&&fe&&e.texStorage2D(s.TEXTURE_2D,ut,Nt,$t[0].width,$t[0].height);for(let O=0,$=$t.length;O<$;O++)_t=$t[O],Bt?C&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,_t.width,_t.height,vt,Ut,_t.data):e.texImage2D(s.TEXTURE_2D,O,Nt,_t.width,_t.height,0,vt,Ut,_t.data);_.generateMipmaps=!1}else Bt?(fe&&e.texStorage2D(s.TEXTURE_2D,ut,Nt,it.width,it.height),C&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,vt,Ut,it.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,it.width,it.height,0,vt,Ut,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Bt&&fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Nt,$t[0].width,$t[0].height,it.depth);for(let O=0,$=$t.length;O<$;O++)if(_t=$t[O],_.format!==zi)if(vt!==null)if(Bt){if(C)if(_.layerUpdates.size>0){const ct=Rc(_t.width,_t.height,_.format,_.type);for(const dt of _.layerUpdates){const te=_t.data.subarray(dt*ct/_t.data.BYTES_PER_ELEMENT,(dt+1)*ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,dt,_t.width,_t.height,1,vt,te,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,_t.width,_t.height,it.depth,vt,_t.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,O,Nt,_t.width,_t.height,it.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?C&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,_t.width,_t.height,it.depth,vt,Ut,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,O,Nt,_t.width,_t.height,it.depth,0,vt,Ut,_t.data)}else{Bt&&fe&&e.texStorage2D(s.TEXTURE_2D,ut,Nt,$t[0].width,$t[0].height);for(let O=0,$=$t.length;O<$;O++)_t=$t[O],_.format!==zi?vt!==null?Bt?C&&e.compressedTexSubImage2D(s.TEXTURE_2D,O,0,0,_t.width,_t.height,vt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,O,Nt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?C&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,_t.width,_t.height,vt,Ut,_t.data):e.texImage2D(s.TEXTURE_2D,O,Nt,_t.width,_t.height,0,vt,Ut,_t.data)}else if(_.isDataArrayTexture)if(Bt){if(fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Nt,it.width,it.height,it.depth),C)if(_.layerUpdates.size>0){const O=Rc(it.width,it.height,_.format,_.type);for(const $ of _.layerUpdates){const ct=it.data.subarray($*O/it.data.BYTES_PER_ELEMENT,($+1)*O/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,it.width,it.height,1,vt,Ut,ct)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,Ut,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,it.width,it.height,it.depth,0,vt,Ut,it.data);else if(_.isData3DTexture)Bt?(fe&&e.texStorage3D(s.TEXTURE_3D,ut,Nt,it.width,it.height,it.depth),C&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,Ut,it.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,it.width,it.height,it.depth,0,vt,Ut,it.data);else if(_.isFramebufferTexture){if(fe)if(Bt)e.texStorage2D(s.TEXTURE_2D,ut,Nt,it.width,it.height);else{let O=it.width,$=it.height;for(let ct=0;ct<ut;ct++)e.texImage2D(s.TEXTURE_2D,ct,Nt,O,$,0,vt,Ut,null),O>>=1,$>>=1}}else if($t.length>0){if(Bt&&fe){const O=Ot($t[0]);e.texStorage2D(s.TEXTURE_2D,ut,Nt,O.width,O.height)}for(let O=0,$=$t.length;O<$;O++)_t=$t[O],Bt?C&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,vt,Ut,_t):e.texImage2D(s.TEXTURE_2D,O,Nt,vt,Ut,_t);_.generateMipmaps=!1}else if(Bt){if(fe){const O=Ot(it);e.texStorage2D(s.TEXTURE_2D,ut,Nt,O.width,O.height)}C&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Ut,it)}else e.texImage2D(s.TEXTURE_2D,0,Nt,vt,Ut,it);p(_)&&m(Z),Tt.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Y(E,_,D){if(_.image.length!==6)return;const Z=jt(E,_),tt=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+D);const q=i.get(tt);if(tt.version!==q.__version||Z===!0){e.activeTexture(s.TEXTURE0+D);const Tt=le.getPrimaries(le.workingColorSpace),at=_.colorSpace===dn?null:le.getPrimaries(_.colorSpace),gt=_.colorSpace===dn||Tt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const ee=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,vt=[];for(let $=0;$<6;$++)!ee&&!it?vt[$]=x(_.image[$],!0,n.maxCubemapSize):vt[$]=it?_.image[$].image:_.image[$],vt[$]=qt(_,vt[$]);const Ut=vt[0],Nt=o.convert(_.format,_.colorSpace),_t=o.convert(_.type),$t=w(_.internalFormat,Nt,_t,_.colorSpace),Bt=_.isVideoTexture!==!0,fe=q.__version===void 0||Z===!0,C=tt.dataReady;let ut=S(_,Ut);St(s.TEXTURE_CUBE_MAP,_);let O;if(ee){Bt&&fe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,$t,Ut.width,Ut.height);for(let $=0;$<6;$++){O=vt[$].mipmaps;for(let ct=0;ct<O.length;ct++){const dt=O[ct];_.format!==zi?Nt!==null?Bt?C&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,$t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,dt.width,dt.height,Nt,_t,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,$t,dt.width,dt.height,0,Nt,_t,dt.data)}}}else{if(O=_.mipmaps,Bt&&fe){O.length>0&&ut++;const $=Ot(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,$t,$.width,$.height)}for(let $=0;$<6;$++)if(it){Bt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,vt[$].width,vt[$].height,Nt,_t,vt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$t,vt[$].width,vt[$].height,0,Nt,_t,vt[$].data);for(let ct=0;ct<O.length;ct++){const te=O[ct].image[$].image;Bt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,te.width,te.height,Nt,_t,te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,$t,te.width,te.height,0,Nt,_t,te.data)}}else{Bt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Nt,_t,vt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$t,Nt,_t,vt[$]);for(let ct=0;ct<O.length;ct++){const dt=O[ct];Bt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Nt,_t,dt.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,$t,Nt,_t,dt.image[$])}}}p(_)&&m(s.TEXTURE_CUBE_MAP),q.__version=tt.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function et(E,_,D,Z,tt,q){const Tt=o.convert(D.format,D.colorSpace),at=o.convert(D.type),gt=w(D.internalFormat,Tt,at,D.colorSpace);if(!i.get(_).__hasExternalTextures){const it=Math.max(1,_.width>>q),vt=Math.max(1,_.height>>q);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,q,gt,it,vt,_.depth,0,Tt,at,null):e.texImage2D(tt,q,gt,it,vt,0,Tt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Et(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,tt,i.get(D).__webglTexture,0,rt(_)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,tt,i.get(D).__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(E,_,D){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){const Z=_.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,q=M(_.stencilBuffer,tt),Tt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=rt(_);Et(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,q,_.width,_.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,q,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,q,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,E)}else{const Z=_.textures;for(let tt=0;tt<Z.length;tt++){const q=Z[tt],Tt=o.convert(q.format,q.colorSpace),at=o.convert(q.type),gt=w(q.internalFormat,Tt,at,q.colorSpace),ee=rt(_);D&&Et(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,gt,_.width,_.height):Et(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,gt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,gt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const Z=i.get(_.depthTexture).__webglTexture,tt=rt(_);if(_.depthTexture.format===vs)Et(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Es)Et(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ft(E){const _=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=Z}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");st(_.__webglFramebuffer,E)}else if(D){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=s.createRenderbuffer(),xt(_.__webglDepthbuffer[Z],E,!1);else{const tt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),xt(_.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(E,_,D){const Z=i.get(E);_!==void 0&&et(Z.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&Ft(E)}function Zt(E){const _=E.texture,D=i.get(E),Z=i.get(_);E.addEventListener("dispose",R);const tt=E.textures,q=E.isWebGLCubeRenderTarget===!0,Tt=tt.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=_.version,r.memory.textures++),q){D.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[at]=[];for(let gt=0;gt<_.mipmaps.length;gt++)D.__webglFramebuffer[at][gt]=s.createFramebuffer()}else D.__webglFramebuffer[at]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)D.__webglFramebuffer[at]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let at=0,gt=tt.length;at<gt;at++){const ee=i.get(tt[at]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),r.memory.textures++)}if(E.samples>0&&Et(E)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const gt=tt[at];D.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[at]);const ee=o.convert(gt.format,gt.colorSpace),it=o.convert(gt.type),vt=w(gt.internalFormat,ee,it,gt.colorSpace,E.isXRRenderTarget===!0),Ut=rt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,vt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,D.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),xt(D.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),St(s.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)et(D.__webglFramebuffer[at][gt],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,gt);else et(D.__webglFramebuffer[at],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(_)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let at=0,gt=tt.length;at<gt;at++){const ee=tt[at],it=i.get(ee);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),St(s.TEXTURE_2D,ee),et(D.__webglFramebuffer,E,ee,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),p(ee)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),St(at,_),_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)et(D.__webglFramebuffer[gt],E,_,s.COLOR_ATTACHMENT0,at,gt);else et(D.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,at,0);p(_)&&m(at),e.unbindTexture()}E.depthBuffer&&Ft(E)}function ie(E){const _=E.textures;for(let D=0,Z=_.length;D<Z;D++){const tt=_[D];if(p(tt)){const q=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Tt=i.get(tt).__webglTexture;e.bindTexture(q,Tt),m(q),e.unbindTexture()}}}const V=[],T=[];function kt(E){if(E.samples>0){if(Et(E)===!1){const _=E.textures,D=E.width,Z=E.height;let tt=s.COLOR_BUFFER_BIT;const q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=i.get(E),at=_.length>1;if(at)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[gt]);const ee=i.get(_[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,D,Z,0,0,D,Z,tt,s.NEAREST),l===!0&&(V.length=0,T.length=0,V.push(s.COLOR_ATTACHMENT0+gt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(V.push(q),T.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,T)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,V))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[gt]);const ee=i.get(_[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function rt(E){return Math.min(n.maxSamples,E.samples)}function Et(E){const _=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function yt(E){const _=r.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function qt(E,_){const D=E.colorSpace,Z=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==_n&&D!==dn&&(le.getTransfer(D)===me?(Z!==zi||tt!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function Ot(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=b,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=zt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Et}function Pg(s,t){function e(i,n=dn){let o;const r=le.getTransfer(n);if(i===Qi)return s.UNSIGNED_BYTE;if(i===hl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===fl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Th)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===wh)return s.BYTE;if(i===Eh)return s.SHORT;if(i===js)return s.UNSIGNED_SHORT;if(i===cl)return s.INT;if(i===On)return s.UNSIGNED_INT;if(i===Bi)return s.FLOAT;if(i===so)return s.HALF_FLOAT;if(i===Ah)return s.ALPHA;if(i===Rh)return s.RGB;if(i===zi)return s.RGBA;if(i===Ch)return s.LUMINANCE;if(i===kh)return s.LUMINANCE_ALPHA;if(i===vs)return s.DEPTH_COMPONENT;if(i===Es)return s.DEPTH_STENCIL;if(i===ul)return s.RED;if(i===dl)return s.RED_INTEGER;if(i===Ph)return s.RG;if(i===pl)return s.RG_INTEGER;if(i===ml)return s.RGBA_INTEGER;if(i===jo||i===Qo||i===tr||i===er)if(r===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===jo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===jo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===er)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===za||i===La||i===Da||i===Ia)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===za)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===La)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ia)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ua||i===Na||i===Fa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Ua||i===Na)return r===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Fa)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oa||i===Ba||i===Ha||i===Ga||i===Va||i===Wa||i===Xa||i===Ya||i===qa||i===Za||i===Ka||i===$a||i===Ja||i===ja)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Oa)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ba)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ha)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ga)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Va)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wa)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xa)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ya)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qa)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Za)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ka)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$a)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ja)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ja)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ir||i===Qa||i===tl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===ir)return r===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zh||i===el||i===il||i===nl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===ir)return o.COMPRESSED_RED_RGTC1_EXT;if(i===el)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===il)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class zg extends Ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ue extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lg={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&o!==null&&(n=o),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new ti,o=t.properties.get(n);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new vn({vertexShader:Dg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ng extends Rs{constructor(t,e){super();const i=this;let n=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const x=new Ug,p=e.getContextAttributes();let m=null,w=null;const M=[],S=[],I=new Rt;let R=null;const A=new Ci;A.layers.enable(1),A.viewport=new Ae;const L=new Ci;L.layers.enable(2),L.viewport=new Ae;const J=[A,L],v=new zg;v.layers.enable(1),v.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=M[Y];return et===void 0&&(et=new ia,M[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=M[Y];return et===void 0&&(et=new ia,M[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=M[Y];return et===void 0&&(et=new ia,M[Y]=et),et.getHandSpace()};function F(Y){const et=S.indexOf(Y.inputSource);if(et===-1)return;const xt=M[et];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||r),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",j);for(let Y=0;Y<M.length;Y++){const et=S[Y];et!==null&&(S[Y]=null,M[Y].disconnect(et))}b=null,G=null,x.reset(),t.setRenderTarget(m),d=null,u=null,f=null,n=null,w=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",X),n.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),n.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(n,e,et),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Bn(d.framebufferWidth,d.framebufferHeight,{format:zi,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,xt=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Es:vs,xt=p.stencil?ws:On);const Ft={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:o};f=new XRWebGLBinding(n,e),u=f.createProjectionLayer(Ft),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Bn(u.textureWidth,u.textureHeight,{format:zi,type:Qi,depthTexture:new qh(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(a),Qt.setContext(n),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(Y){for(let et=0;et<Y.removed.length;et++){const xt=Y.removed[et],st=S.indexOf(xt);st>=0&&(S[st]=null,M[st].disconnect(xt))}for(let et=0;et<Y.added.length;et++){const xt=Y.added[et];let st=S.indexOf(xt);if(st===-1){for(let zt=0;zt<M.length;zt++)if(zt>=S.length){S.push(xt),st=zt;break}else if(S[zt]===null){S[zt]=xt,st=zt;break}if(st===-1)break}const Ft=M[st];Ft&&Ft.connect(xt)}}const H=new P,K=new P;function B(Y,et,xt){H.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(xt.matrixWorld);const st=H.distanceTo(K),Ft=et.projectionMatrix.elements,zt=xt.projectionMatrix.elements,Zt=Ft[14]/(Ft[10]-1),ie=Ft[14]/(Ft[10]+1),V=(Ft[9]+1)/Ft[5],T=(Ft[9]-1)/Ft[5],kt=(Ft[8]-1)/Ft[0],rt=(zt[8]+1)/zt[0],Et=Zt*kt,yt=Zt*rt,qt=st/(-kt+rt),Ot=qt*-kt;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ot),Y.translateZ(qt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ft[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const E=Zt+qt,_=ie+qt,D=Et-Ot,Z=yt+(st-Ot),tt=V*ie/_*E,q=T*ie/_*E;Y.projectionMatrix.makePerspective(D,Z,tt,q,E,_),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ft(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let et=Y.near,xt=Y.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),v.near=L.near=A.near=et,v.far=L.far=A.far=xt,(b!==v.near||G!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,G=v.far);const st=Y.parent,Ft=v.cameras;ft(v,st);for(let zt=0;zt<Ft.length;zt++)ft(Ft[zt],st);Ft.length===2?B(v,A,L):v.projectionMatrix.copy(A.projectionMatrix),pt(Y,v,st)};function pt(Y,et,xt){xt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let St=null;function jt(Y,et){if(h=et.getViewerPose(c||r),g=et,h!==null){const xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let st=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,st=!0);for(let zt=0;zt<xt.length;zt++){const Zt=xt[zt];let ie=null;if(d!==null)ie=d.getViewport(Zt);else{const T=f.getViewSubImage(u,Zt);ie=T.viewport,zt===0&&(t.setRenderTargetTextures(w,T.colorTexture,u.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(w))}let V=J[zt];V===void 0&&(V=new Ci,V.layers.enable(zt),V.viewport=new Ae,J[zt]=V),V.matrix.fromArray(Zt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Zt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(ie.x,ie.y,ie.width,ie.height),zt===0&&(v.matrix.copy(V.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),st===!0&&v.cameras.push(V)}const Ft=n.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const zt=f.getDepthInformation(xt[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,n.renderState)}}for(let xt=0;xt<M.length;xt++){const st=S[xt],Ft=M[xt];st!==null&&Ft!==void 0&&Ft.update(st,et,c||r)}St&&St(Y,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const Qt=new Xh;Qt.setAnimationLoop(jt),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}}const Tn=new tn,Fg=new de;function Og(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Hh(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,w,M,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),f(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m)):m.isMeshStandardMaterial?(o(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),x(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,w,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ri&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ri&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=t.get(m),M=w.envMap,S=w.envMapRotation;M&&(p.envMap.value=M,Tn.copy(S),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),p.envMapRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(Tn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,w,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ri&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Bg(s,t,e,i){let n={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){const S=M.program;i.uniformBlockBinding(w,S)}function c(w,M){let S=n[w.id];S===void 0&&(g(w),S=h(w),n[w.id]=S,w.addEventListener("dispose",p));const I=M.program;i.updateUBOMapping(w,I);const R=t.render.frame;o[w.id]!==R&&(u(w),o[w.id]=R)}function h(w){const M=f();w.__bindingPointIndex=M;const S=s.createBuffer(),I=w.__size,R=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,I,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,S),S}function f(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const M=n[w.id],S=w.uniforms,I=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let R=0,A=S.length;R<A;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let J=0,v=L.length;J<v;J++){const b=L[J];if(d(b,R,J,I)===!0){const G=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let j=0;j<F.length;j++){const H=F[j],K=x(H);typeof H=="number"||typeof H=="boolean"?(b.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+X,b.__data)):H.isMatrix3?(b.__data[0]=H.elements[0],b.__data[1]=H.elements[1],b.__data[2]=H.elements[2],b.__data[3]=0,b.__data[4]=H.elements[3],b.__data[5]=H.elements[4],b.__data[6]=H.elements[5],b.__data[7]=0,b.__data[8]=H.elements[6],b.__data[9]=H.elements[7],b.__data[10]=H.elements[8],b.__data[11]=0):(H.toArray(b.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(w,M,S,I){const R=w.value,A=M+"_"+S;if(I[A]===void 0)return typeof R=="number"||typeof R=="boolean"?I[A]=R:I[A]=R.clone(),!0;{const L=I[A];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return I[A]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(w){const M=w.uniforms;let S=0;const I=16;for(let A=0,L=M.length;A<L;A++){const J=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,b=J.length;v<b;v++){const G=J[v],F=Array.isArray(G.value)?G.value:[G.value];for(let X=0,j=F.length;X<j;X++){const H=F[X],K=x(H),B=S%I,ft=B%K.boundary,pt=B+ft;S+=ft,pt!==0&&I-pt<K.storage&&(S+=I-pt),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=K.storage}}}const R=S%I;return R>0&&(S+=I-R),w.__size=S,w.__cache={},this}function x(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function p(w){const M=w.target;M.removeEventListener("dispose",p);const S=r.indexOf(M.__bindingPointIndex);r.splice(S,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete o[M.id]}function m(){for(const w in n)s.deleteBuffer(n[w]);r=[],n={},o={}}return{bind:l,update:c,dispose:m}}class Hg{constructor(t={}){const{canvas:e=Af(),context:i=null,depth:n=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=r;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ui,this.toneMapping=gn,this.toneMappingExposure=1;const M=this;let S=!1,I=0,R=0,A=null,L=-1,J=null;const v=new Ae,b=new Ae;let G=null;const F=new Ht(0);let X=0,j=e.width,H=e.height,K=1,B=null,ft=null;const pt=new Ae(0,0,j,H),St=new Ae(0,0,j,H);let jt=!1;const Qt=new Wh;let Y=!1,et=!1;const xt=new de,st=new de,Ft=new P,zt=new Ae,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function V(){return A===null?K:1}let T=i;function kt(y,k){return e.getContext(y,k)}try{const y={alpha:!0,depth:n,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",dt,!1),T===null){const k="webgl2";if(T=kt(k,y),T===null)throw kt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let rt,Et,yt,qt,Ot,E,_,D,Z,tt,q,Tt,at,gt,ee,it,vt,Ut,Nt,_t,$t,Bt,fe,C;function ut(){rt=new Yp(T),rt.init(),Bt=new Pg(T,rt),Et=new Bp(T,rt,t,Bt),yt=new Rg(T),Et.reverseDepthBuffer&&yt.buffers.depth.setReversed(!0),qt=new Kp(T),Ot=new dg,E=new kg(T,rt,yt,Ot,Et,Bt,qt),_=new Gp(M),D=new Xp(M),Z=new iu(T),fe=new Fp(T,Z),tt=new qp(T,Z,qt,fe),q=new Jp(T,tt,Z,qt),Nt=new $p(T,Et,E),it=new Hp(Ot),Tt=new ug(M,_,D,rt,Et,fe,it),at=new Og(M,Ot),gt=new mg,ee=new yg(rt),Ut=new Np(M,_,D,yt,q,u,l),vt=new Tg(M,q,Et),C=new Bg(T,qt,Et,yt),_t=new Op(T,rt,qt),$t=new Zp(T,rt,qt),qt.programs=Tt.programs,M.capabilities=Et,M.extensions=rt,M.properties=Ot,M.renderLists=gt,M.shadowMap=vt,M.state=yt,M.info=qt}ut();const O=new Ng(M,T);this.xr=O,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=rt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=rt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(j,H,!1))},this.getSize=function(y){return y.set(j,H)},this.setSize=function(y,k,U=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,H=k,e.width=Math.floor(y*K),e.height=Math.floor(k*K),U===!0&&(e.style.width=y+"px",e.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(j*K,H*K).floor()},this.setDrawingBufferSize=function(y,k,U){j=y,H=k,K=U,e.width=Math.floor(y*U),e.height=Math.floor(k*U),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(v)},this.getViewport=function(y){return y.copy(pt)},this.setViewport=function(y,k,U,N){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,k,U,N),yt.viewport(v.copy(pt).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(St)},this.setScissor=function(y,k,U,N){y.isVector4?St.set(y.x,y.y,y.z,y.w):St.set(y,k,U,N),yt.scissor(b.copy(St).multiplyScalar(K).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(y){yt.setScissorTest(jt=y)},this.setOpaqueSort=function(y){B=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(y=!0,k=!0,U=!0){let N=0;if(y){let z=!1;if(A!==null){const nt=A.texture.format;z=nt===ml||nt===pl||nt===dl}if(z){const nt=A.texture.type,ht=nt===Qi||nt===On||nt===js||nt===ws||nt===hl||nt===fl,bt=Ut.getClearColor(),wt=Ut.getClearAlpha(),Lt=bt.r,Dt=bt.g,At=bt.b;ht?(d[0]=Lt,d[1]=Dt,d[2]=At,d[3]=wt,T.clearBufferuiv(T.COLOR,0,d)):(g[0]=Lt,g[1]=Dt,g[2]=At,g[3]=wt,T.clearBufferiv(T.COLOR,0,g))}else N|=T.COLOR_BUFFER_BIT}k&&(N|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),U&&(N|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),ee.dispose(),Ot.dispose(),_.dispose(),D.dispose(),q.dispose(),fe.dispose(),C.dispose(),Tt.dispose(),O.dispose(),O.removeEventListener("sessionstart",Al),O.removeEventListener("sessionend",Rl),Mn.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const y=qt.autoReset,k=vt.enabled,U=vt.autoUpdate,N=vt.needsUpdate,z=vt.type;ut(),qt.autoReset=y,vt.enabled=k,vt.autoUpdate=U,vt.needsUpdate=N,vt.type=z}function dt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function te(y){const k=y.target;k.removeEventListener("dispose",te),Re(k)}function Re(y){ii(y),Ot.remove(y)}function ii(y){const k=Ot.get(y).programs;k!==void 0&&(k.forEach(function(U){Tt.releaseProgram(U)}),y.isShaderMaterial&&Tt.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,U,N,z,nt){k===null&&(k=Zt);const ht=z.isMesh&&z.matrixWorld.determinant()<0,bt=v0(y,k,U,N,z);yt.setMaterial(N,ht);let wt=U.index,Lt=1;if(N.wireframe===!0){if(wt=tt.getWireframeAttribute(U),wt===void 0)return;Lt=2}const Dt=U.drawRange,At=U.attributes.position;let ce=Dt.start*Lt,pe=(Dt.start+Dt.count)*Lt;nt!==null&&(ce=Math.max(ce,nt.start*Lt),pe=Math.min(pe,(nt.start+nt.count)*Lt)),wt!==null?(ce=Math.max(ce,0),pe=Math.min(pe,wt.count)):At!=null&&(ce=Math.max(ce,0),pe=Math.min(pe,At.count));const ye=pe-ce;if(ye<0||ye===1/0)return;fe.setup(z,N,bt,U,wt);let ai,se=_t;if(wt!==null&&(ai=Z.get(wt),se=$t,se.setIndex(ai)),z.isMesh)N.wireframe===!0?(yt.setLineWidth(N.wireframeLinewidth*V()),se.setMode(T.LINES)):se.setMode(T.TRIANGLES);else if(z.isLine){let Ct=N.linewidth;Ct===void 0&&(Ct=1),yt.setLineWidth(Ct*V()),z.isLineSegments?se.setMode(T.LINES):z.isLineLoop?se.setMode(T.LINE_LOOP):se.setMode(T.LINE_STRIP)}else z.isPoints?se.setMode(T.POINTS):z.isSprite&&se.setMode(T.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)se.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ct=z._multiDrawStarts,Ne=z._multiDrawCounts,oe=z._multiDrawCount,yi=wt?Z.get(wt).bytesPerElement:1,Xn=Ot.get(N).currentProgram.getUniforms();for(let li=0;li<oe;li++)Xn.setValue(T,"_gl_DrawID",li),se.render(Ct[li]/yi,Ne[li])}else if(z.isInstancedMesh)se.renderInstances(ce,ye,z.count);else if(U.isInstancedBufferGeometry){const Ct=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Ne=Math.min(U.instanceCount,Ct);se.renderInstances(ce,ye,Ne)}else se.render(ce,ye)};function ne(y,k,U){y.transparent===!0&&y.side===Ji&&y.forceSinglePass===!1?(y.side=ri,y.needsUpdate=!0,co(y,k,U),y.side=xn,y.needsUpdate=!0,co(y,k,U),y.side=Ji):co(y,k,U)}this.compile=function(y,k,U=null){U===null&&(U=y),p=ee.get(U),p.init(k),w.push(p),U.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),y!==U&&y.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const N=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const nt=z.material;if(nt)if(Array.isArray(nt))for(let ht=0;ht<nt.length;ht++){const bt=nt[ht];ne(bt,U,z),N.add(bt)}else ne(nt,U,z),N.add(nt)}),w.pop(),p=null,N},this.compileAsync=function(y,k,U=null){const N=this.compile(y,k,U);return new Promise(z=>{function nt(){if(N.forEach(function(ht){Ot.get(ht).currentProgram.isReady()&&N.delete(ht)}),N.size===0){z(y);return}setTimeout(nt,10)}rt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ni=null;function Gi(y){ni&&ni(y)}function Al(){Mn.stop()}function Rl(){Mn.start()}const Mn=new Xh;Mn.setAnimationLoop(Gi),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(y){ni=y,O.setAnimationLoop(y),y===null?Mn.stop():Mn.start()},O.addEventListener("sessionstart",Al),O.addEventListener("sessionend",Rl),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(k),k=O.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,k,A),p=ee.get(y,w.length),p.init(k),w.push(p),st.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Qt.setFromProjectionMatrix(st),et=this.localClippingEnabled,Y=it.init(this.clippingPlanes,et),x=gt.get(y,m.length),x.init(),m.push(x),O.enabled===!0&&O.isPresenting===!0){const nt=M.xr.getDepthSensingMesh();nt!==null&&wr(nt,k,-1/0,M.sortObjects)}wr(y,k,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(B,ft),ie=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,ie&&Ut.addToRenderList(x,y),this.info.render.frame++,Y===!0&&it.beginShadows();const U=p.state.shadowsArray;vt.render(U,y,k),Y===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=x.opaque,z=x.transmissive;if(p.setupLights(),k.isArrayCamera){const nt=k.cameras;if(z.length>0)for(let ht=0,bt=nt.length;ht<bt;ht++){const wt=nt[ht];kl(N,z,y,wt)}ie&&Ut.render(y);for(let ht=0,bt=nt.length;ht<bt;ht++){const wt=nt[ht];Cl(x,y,wt,wt.viewport)}}else z.length>0&&kl(N,z,y,k),ie&&Ut.render(y),Cl(x,y,k);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(M,y,k),fe.resetDefaultState(),L=-1,J=null,w.pop(),w.length>0?(p=w[w.length-1],Y===!0&&it.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function wr(y,k,U,N){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)U=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Qt.intersectsSprite(y)){N&&zt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(st);const ht=q.update(y),bt=y.material;bt.visible&&x.push(y,ht,bt,U,zt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Qt.intersectsObject(y))){const ht=q.update(y),bt=y.material;if(N&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),zt.copy(y.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),zt.copy(ht.boundingSphere.center)),zt.applyMatrix4(y.matrixWorld).applyMatrix4(st)),Array.isArray(bt)){const wt=ht.groups;for(let Lt=0,Dt=wt.length;Lt<Dt;Lt++){const At=wt[Lt],ce=bt[At.materialIndex];ce&&ce.visible&&x.push(y,ht,ce,U,zt.z,At)}}else bt.visible&&x.push(y,ht,bt,U,zt.z,null)}}const nt=y.children;for(let ht=0,bt=nt.length;ht<bt;ht++)wr(nt[ht],k,U,N)}function Cl(y,k,U,N){const z=y.opaque,nt=y.transmissive,ht=y.transparent;p.setupLightsView(U),Y===!0&&it.setGlobalState(M.clippingPlanes,U),N&&yt.viewport(v.copy(N)),z.length>0&&lo(z,k,U),nt.length>0&&lo(nt,k,U),ht.length>0&&lo(ht,k,U),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function kl(y,k,U,N){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[N.id]===void 0&&(p.state.transmissionRenderTarget[N.id]=new Bn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?so:Qi,minFilter:Nn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const nt=p.state.transmissionRenderTarget[N.id],ht=N.viewport||v;nt.setSize(ht.z,ht.w);const bt=M.getRenderTarget();M.setRenderTarget(nt),M.getClearColor(F),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),ie&&Ut.render(U);const wt=M.toneMapping;M.toneMapping=gn;const Lt=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),p.setupLightsView(N),Y===!0&&it.setGlobalState(M.clippingPlanes,N),lo(y,U,N),E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let At=0,ce=k.length;At<ce;At++){const pe=k[At],ye=pe.object,ai=pe.geometry,se=pe.material,Ct=pe.group;if(se.side===Ji&&ye.layers.test(N.layers)){const Ne=se.side;se.side=ri,se.needsUpdate=!0,Pl(ye,U,N,ai,se,Ct),se.side=Ne,se.needsUpdate=!0,Dt=!0}}Dt===!0&&(E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt))}M.setRenderTarget(bt),M.setClearColor(F,X),Lt!==void 0&&(N.viewport=Lt),M.toneMapping=wt}function lo(y,k,U){const N=k.isScene===!0?k.overrideMaterial:null;for(let z=0,nt=y.length;z<nt;z++){const ht=y[z],bt=ht.object,wt=ht.geometry,Lt=N===null?ht.material:N,Dt=ht.group;bt.layers.test(U.layers)&&Pl(bt,k,U,wt,Lt,Dt)}}function Pl(y,k,U,N,z,nt){y.onBeforeRender(M,k,U,N,z,nt),y.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(M,k,U,N,y,nt),z.transparent===!0&&z.side===Ji&&z.forceSinglePass===!1?(z.side=ri,z.needsUpdate=!0,M.renderBufferDirect(U,k,N,z,y,nt),z.side=xn,z.needsUpdate=!0,M.renderBufferDirect(U,k,N,z,y,nt),z.side=Ji):M.renderBufferDirect(U,k,N,z,y,nt),y.onAfterRender(M,k,U,N,z,nt)}function co(y,k,U){k.isScene!==!0&&(k=Zt);const N=Ot.get(y),z=p.state.lights,nt=p.state.shadowsArray,ht=z.state.version,bt=Tt.getParameters(y,z.state,nt,k,U),wt=Tt.getProgramCacheKey(bt);let Lt=N.programs;N.environment=y.isMeshStandardMaterial?k.environment:null,N.fog=k.fog,N.envMap=(y.isMeshStandardMaterial?D:_).get(y.envMap||N.environment),N.envMapRotation=N.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Lt===void 0&&(y.addEventListener("dispose",te),Lt=new Map,N.programs=Lt);let Dt=Lt.get(wt);if(Dt!==void 0){if(N.currentProgram===Dt&&N.lightsStateVersion===ht)return Ll(y,bt),Dt}else bt.uniforms=Tt.getUniforms(y),y.onBeforeCompile(bt,M),Dt=Tt.acquireProgram(bt,wt),Lt.set(wt,Dt),N.uniforms=bt.uniforms;const At=N.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=it.uniform),Ll(y,bt),N.needsLights=M0(y),N.lightsStateVersion=ht,N.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.directionalShadowMap.value=z.state.directionalShadowMap,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotShadowMap.value=z.state.spotShadowMap,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMap.value=z.state.pointShadowMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),N.currentProgram=Dt,N.uniformsList=null,Dt}function zl(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=sr.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function Ll(y,k){const U=Ot.get(y);U.outputColorSpace=k.outputColorSpace,U.batching=k.batching,U.batchingColor=k.batchingColor,U.instancing=k.instancing,U.instancingColor=k.instancingColor,U.instancingMorph=k.instancingMorph,U.skinning=k.skinning,U.morphTargets=k.morphTargets,U.morphNormals=k.morphNormals,U.morphColors=k.morphColors,U.morphTargetsCount=k.morphTargetsCount,U.numClippingPlanes=k.numClippingPlanes,U.numIntersection=k.numClipIntersection,U.vertexAlphas=k.vertexAlphas,U.vertexTangents=k.vertexTangents,U.toneMapping=k.toneMapping}function v0(y,k,U,N,z){k.isScene!==!0&&(k=Zt),E.resetTextureUnits();const nt=k.fog,ht=N.isMeshStandardMaterial?k.environment:null,bt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_n,wt=(N.isMeshStandardMaterial?D:_).get(N.envMap||ht),Lt=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Dt=!!U.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),At=!!U.morphAttributes.position,ce=!!U.morphAttributes.normal,pe=!!U.morphAttributes.color;let ye=gn;N.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ye=M.toneMapping);const ai=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,se=ai!==void 0?ai.length:0,Ct=Ot.get(N),Ne=p.state.lights;if(Y===!0&&(et===!0||y!==J)){const mi=y===J&&N.id===L;it.setState(N,y,mi)}let oe=!1;N.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ne.state.version||Ct.outputColorSpace!==bt||z.isBatchedMesh&&Ct.batching===!1||!z.isBatchedMesh&&Ct.batching===!0||z.isBatchedMesh&&Ct.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ct.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ct.instancing===!1||!z.isInstancedMesh&&Ct.instancing===!0||z.isSkinnedMesh&&Ct.skinning===!1||!z.isSkinnedMesh&&Ct.skinning===!0||z.isInstancedMesh&&Ct.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ct.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ct.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ct.instancingMorph===!1&&z.morphTexture!==null||Ct.envMap!==wt||N.fog===!0&&Ct.fog!==nt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==it.numPlanes||Ct.numIntersection!==it.numIntersection)||Ct.vertexAlphas!==Lt||Ct.vertexTangents!==Dt||Ct.morphTargets!==At||Ct.morphNormals!==ce||Ct.morphColors!==pe||Ct.toneMapping!==ye||Ct.morphTargetsCount!==se)&&(oe=!0):(oe=!0,Ct.__version=N.version);let yi=Ct.currentProgram;oe===!0&&(yi=co(N,k,z));let Xn=!1,li=!1,Er=!1;const be=yi.getUniforms(),en=Ct.uniforms;if(yt.useProgram(yi.program)&&(Xn=!0,li=!0,Er=!0),N.id!==L&&(L=N.id,li=!0),Xn||J!==y){Et.reverseDepthBuffer?(xt.copy(y.projectionMatrix),Cf(xt),kf(xt),be.setValue(T,"projectionMatrix",xt)):be.setValue(T,"projectionMatrix",y.projectionMatrix),be.setValue(T,"viewMatrix",y.matrixWorldInverse);const mi=be.map.cameraPosition;mi!==void 0&&mi.setValue(T,Ft.setFromMatrixPosition(y.matrixWorld)),Et.logarithmicDepthBuffer&&be.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&be.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),J!==y&&(J=y,li=!0,Er=!0)}if(z.isSkinnedMesh){be.setOptional(T,z,"bindMatrix"),be.setOptional(T,z,"bindMatrixInverse");const mi=z.skeleton;mi&&(mi.boneTexture===null&&mi.computeBoneTexture(),be.setValue(T,"boneTexture",mi.boneTexture,E))}z.isBatchedMesh&&(be.setOptional(T,z,"batchingTexture"),be.setValue(T,"batchingTexture",z._matricesTexture,E),be.setOptional(T,z,"batchingIdTexture"),be.setValue(T,"batchingIdTexture",z._indirectTexture,E),be.setOptional(T,z,"batchingColorTexture"),z._colorsTexture!==null&&be.setValue(T,"batchingColorTexture",z._colorsTexture,E));const Tr=U.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&Nt.update(z,U,yi),(li||Ct.receiveShadow!==z.receiveShadow)&&(Ct.receiveShadow=z.receiveShadow,be.setValue(T,"receiveShadow",z.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(en.envMap.value=wt,en.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&k.environment!==null&&(en.envMapIntensity.value=k.environmentIntensity),li&&(be.setValue(T,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&_0(en,Er),nt&&N.fog===!0&&at.refreshFogUniforms(en,nt),at.refreshMaterialUniforms(en,N,K,H,p.state.transmissionRenderTarget[y.id]),sr.upload(T,zl(Ct),en,E)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(sr.upload(T,zl(Ct),en,E),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&be.setValue(T,"center",z.center),be.setValue(T,"modelViewMatrix",z.modelViewMatrix),be.setValue(T,"normalMatrix",z.normalMatrix),be.setValue(T,"modelMatrix",z.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const mi=N.uniformsGroups;for(let Ar=0,y0=mi.length;Ar<y0;Ar++){const Dl=mi[Ar];C.update(Dl,yi),C.bind(Dl,yi)}}return yi}function _0(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function M0(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,k,U){Ot.get(y.texture).__webglTexture=k,Ot.get(y.depthTexture).__webglTexture=U;const N=Ot.get(y);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,k){const U=Ot.get(y);U.__webglFramebuffer=k,U.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,U=0){A=y,I=k,R=U;let N=!0,z=null,nt=!1,ht=!1;if(y){const wt=Ot.get(y);if(wt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(T.FRAMEBUFFER,null),N=!1;else if(wt.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(wt.__hasExternalTextures)E.rebindTextures(y,Ot.get(y.texture).__webglTexture,Ot.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const At=y.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&Ot.has(At)&&(y.width!==At.image.width||y.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Lt=y.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);const Dt=Ot.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[k])?z=Dt[k][U]:z=Dt[k],nt=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?z=Ot.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?z=Dt[U]:z=Dt,v.copy(y.viewport),b.copy(y.scissor),G=y.scissorTest}else v.copy(pt).multiplyScalar(K).floor(),b.copy(St).multiplyScalar(K).floor(),G=jt;if(yt.bindFramebuffer(T.FRAMEBUFFER,z)&&N&&yt.drawBuffers(y,z),yt.viewport(v),yt.scissor(b),yt.setScissorTest(G),nt){const wt=Ot.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,U)}else if(ht){const wt=Ot.get(y.texture),Lt=k||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,wt.__webglTexture,U||0,Lt)}L=-1},this.readRenderTargetPixels=function(y,k,U,N,z,nt,ht){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(bt=bt[ht]),bt){yt.bindFramebuffer(T.FRAMEBUFFER,bt);try{const wt=y.texture,Lt=wt.format,Dt=wt.type;if(!Et.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-N&&U>=0&&U<=y.height-z&&T.readPixels(k,U,N,z,Bt.convert(Lt),Bt.convert(Dt),nt)}finally{const wt=A!==null?Ot.get(A).__webglFramebuffer:null;yt.bindFramebuffer(T.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,k,U,N,z,nt,ht){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(bt=bt[ht]),bt){const wt=y.texture,Lt=wt.format,Dt=wt.type;if(!Et.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=y.width-N&&U>=0&&U<=y.height-z){yt.bindFramebuffer(T.FRAMEBUFFER,bt);const At=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,At),T.bufferData(T.PIXEL_PACK_BUFFER,nt.byteLength,T.STREAM_READ),T.readPixels(k,U,N,z,Bt.convert(Lt),Bt.convert(Dt),0);const ce=A!==null?Ot.get(A).__webglFramebuffer:null;yt.bindFramebuffer(T.FRAMEBUFFER,ce);const pe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Rf(T,pe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,At),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,nt),T.deleteBuffer(At),T.deleteSync(pe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,k=null,U=0){y.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1]);const N=Math.pow(2,-U),z=Math.floor(y.image.width*N),nt=Math.floor(y.image.height*N),ht=k!==null?k.x:0,bt=k!==null?k.y:0;E.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,U,0,0,ht,bt,z,nt),yt.unbindTexture()},this.copyTextureToTexture=function(y,k,U=null,N=null,z=0){y.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,y=arguments[1],k=arguments[2],z=arguments[3]||0,U=null);let nt,ht,bt,wt,Lt,Dt;U!==null?(nt=U.max.x-U.min.x,ht=U.max.y-U.min.y,bt=U.min.x,wt=U.min.y):(nt=y.image.width,ht=y.image.height,bt=0,wt=0),N!==null?(Lt=N.x,Dt=N.y):(Lt=0,Dt=0);const At=Bt.convert(k.format),ce=Bt.convert(k.type);E.setTexture2D(k,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,k.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,k.unpackAlignment);const pe=T.getParameter(T.UNPACK_ROW_LENGTH),ye=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ai=T.getParameter(T.UNPACK_SKIP_PIXELS),se=T.getParameter(T.UNPACK_SKIP_ROWS),Ct=T.getParameter(T.UNPACK_SKIP_IMAGES),Ne=y.isCompressedTexture?y.mipmaps[z]:y.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Ne.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ne.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,bt),T.pixelStorei(T.UNPACK_SKIP_ROWS,wt),y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,z,Lt,Dt,nt,ht,At,ce,Ne.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,z,Lt,Dt,Ne.width,Ne.height,At,Ne.data):T.texSubImage2D(T.TEXTURE_2D,z,Lt,Dt,nt,ht,At,ce,Ne),T.pixelStorei(T.UNPACK_ROW_LENGTH,pe),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ye),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ai),T.pixelStorei(T.UNPACK_SKIP_ROWS,se),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ct),z===0&&k.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(y,k,U=null,N=null,z=0){y.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,N=arguments[1]||null,y=arguments[2],k=arguments[3],z=arguments[4]||0);let nt,ht,bt,wt,Lt,Dt,At,ce,pe;const ye=y.isCompressedTexture?y.mipmaps[z]:y.image;U!==null?(nt=U.max.x-U.min.x,ht=U.max.y-U.min.y,bt=U.max.z-U.min.z,wt=U.min.x,Lt=U.min.y,Dt=U.min.z):(nt=ye.width,ht=ye.height,bt=ye.depth,wt=0,Lt=0,Dt=0),N!==null?(At=N.x,ce=N.y,pe=N.z):(At=0,ce=0,pe=0);const ai=Bt.convert(k.format),se=Bt.convert(k.type);let Ct;if(k.isData3DTexture)E.setTexture3D(k,0),Ct=T.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)E.setTexture2DArray(k,0),Ct=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,k.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,k.unpackAlignment);const Ne=T.getParameter(T.UNPACK_ROW_LENGTH),oe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),yi=T.getParameter(T.UNPACK_SKIP_PIXELS),Xn=T.getParameter(T.UNPACK_SKIP_ROWS),li=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ye.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ye.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,wt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Lt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Dt),y.isDataTexture||y.isData3DTexture?T.texSubImage3D(Ct,z,At,ce,pe,nt,ht,bt,ai,se,ye.data):k.isCompressedArrayTexture?T.compressedTexSubImage3D(Ct,z,At,ce,pe,nt,ht,bt,ai,ye.data):T.texSubImage3D(Ct,z,At,ce,pe,nt,ht,bt,ai,se,ye),T.pixelStorei(T.UNPACK_ROW_LENGTH,Ne),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,oe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,yi),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,li),z===0&&k.generateMipmaps&&T.generateMipmap(Ct),yt.unbindTexture()},this.initRenderTarget=function(y){Ot.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),yt.unbindTexture()},this.resetState=function(){I=0,R=0,A=null,yt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===gl?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===Mr?"display-p3":"srgb"}}class _l{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=i}clone(){return new _l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gg extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vg extends ti{constructor(t=null,e=1,i=1,n,o,r,a,l,c=oi,h=oi,f,u){super(null,r,a,l,c,h,n,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends ei{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const rs=new de,kc=new de,zo=[],Pc=new Wn,Wg=new de,Is=new lt,Us=new ro;class mr extends lt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Wg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rs),Pc.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(Pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ro),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rs),Us.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,o=i.length+1,r=t*o+1;for(let a=0;a<i.length;a++)i[a]=n[r+a]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(i),t.ray.intersectsSphere(Us)!==!1))for(let o=0;o<n;o++){this.getMatrixAt(o,rs),kc.multiplyMatrices(i,rs),Is.matrixWorld=kc,Is.raycast(t,zo);for(let r=0,a=zo.length;r<a;r++){const l=zo[r];l.instanceId=o,l.object=this,e.push(l)}zo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vg(new Float32Array(n*this.count),n,this.count,ul,Bi));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=n*t;o[l]=a,o.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(n),e.push(o),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-r,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===r)return n/(o-1);const h=i[n],u=i[n+1]-h,d=(r-h)/u;return(n+d)/(o-1)}getTangent(t,e){let n=t-1e-4,o=t+1e-4;n<0&&(n=0),o>1&&(o=1);const r=this.getPoint(n),a=this.getPoint(o),l=e||(r.isVector2?new Rt:new P);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,n=[],o=[],r=[],a=new P,l=new de;for(let d=0;d<=t;d++){const g=d/t;n[d]=this.getTangentAt(g,new P)}o[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),f=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),o[0].crossVectors(n[0],a),r[0].crossVectors(n[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Be(n[d-1].dot(n[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(n[d],o[d])}if(e===!0){let d=Math.acos(Be(o[0].dot(o[t]),-1,1));d/=t,n[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),r[g].crossVectors(n[g],o[g])}return{tangents:n,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ml extends Hi{constructor(t=0,e=0,i=1,n=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Rt){const i=e,n=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=n;for(;o>n;)o-=n;o<Number.EPSILON&&(r?o=0:o=n),this.aClockwise===!0&&!r&&(o===n?o=-n:o=o-n);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xg extends Ml{constructor(t,e,i,n,o,r){super(t,e,i,i,n,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let s=0,t=0,e=0,i=0;function n(o,r,a,l){s=o,t=a,e=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){n(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;u*=h,d*=h,n(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+i*a}}}const Lo=new P,na=new yl,sa=new yl,oa=new yl;class Yg extends Hi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new P){const i=e,n=this.points,o=n.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%o]:(Lo.subVectors(n[0],n[1]).add(n[0]),c=Lo);const f=n[a%o],u=n[(a+1)%o];if(this.closed||a+2<o?h=n[(a+2)%o]:(Lo.subVectors(n[o-1],n[o-2]).add(n[o-1]),h=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),na.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,p),sa.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,p),oa.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(na.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),sa.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),oa.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(na.calc(l),sa.calc(l),oa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new P().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zc(s,t,e,i,n){const o=(i-t)*.5,r=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+o+r)*l+(-3*e+3*i-2*o-r)*a+o*s+e}function qg(s,t){const e=1-s;return e*e*t}function Zg(s,t){return 2*(1-s)*s*t}function Kg(s,t){return s*s*t}function Ys(s,t,e,i){return qg(s,t)+Zg(s,e)+Kg(s,i)}function $g(s,t){const e=1-s;return e*e*e*t}function Jg(s,t){const e=1-s;return 3*e*e*s*t}function jg(s,t){return 3*(1-s)*s*s*t}function Qg(s,t){return s*s*s*t}function qs(s,t,e,i,n){return $g(s,t)+Jg(s,e)+jg(s,i)+Qg(s,n)}class jh extends Hi{constructor(t=new Rt,e=new Rt,i=new Rt,n=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new Rt){const i=e,n=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(qs(t,n.x,o.x,r.x,a.x),qs(t,n.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tx extends Hi{constructor(t=new P,e=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new P){const i=e,n=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(qs(t,n.x,o.x,r.x,a.x),qs(t,n.y,o.y,r.y,a.y),qs(t,n.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qh extends Hi{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ex extends Hi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class t0 extends Hi{constructor(t=new Rt,e=new Rt,i=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Rt){const i=e,n=this.v0,o=this.v1,r=this.v2;return i.set(Ys(t,n.x,o.x,r.x),Ys(t,n.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ix extends Hi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,n=this.v0,o=this.v1,r=this.v2;return i.set(Ys(t,n.x,o.x,r.x),Ys(t,n.y,o.y,r.y),Ys(t,n.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class e0 extends Hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){const i=e,n=this.points,o=(n.length-1)*t,r=Math.floor(o),a=o-r,l=n[r===0?r:r-1],c=n[r],h=n[r>n.length-2?n.length-1:r+1],f=n[r>n.length-3?n.length-1:r+2];return i.set(zc(a,l.x,c.x,h.x,f.x),zc(a,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new Rt().fromArray(n))}return this}}var Lc=Object.freeze({__proto__:null,ArcCurve:Xg,CatmullRomCurve3:Yg,CubicBezierCurve:jh,CubicBezierCurve3:tx,EllipseCurve:Ml,LineCurve:Qh,LineCurve3:ex,QuadraticBezierCurve:t0,QuadraticBezierCurve3:ix,SplineCurve:e0});class nx extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let o=0;for(;o<n.length;){if(n[o]>=i){const r=n[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,o=this.curves;n<o.length;n++){const r=o[n],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Lc[n.type]().fromJSON(n))}return this}}class Dc extends nx{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Qh(this.currentPoint.clone(),new Rt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const o=new t0(this.currentPoint.clone(),new Rt(t,e),new Rt(i,n));return this.curves.push(o),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,o,r){const a=new jh(this.currentPoint.clone(),new Rt(t,e),new Rt(i,n),new Rt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new e0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,o,r),this}absarc(t,e,i,n,o,r){return this.absellipse(t,e,i,i,n,o,r),this}ellipse(t,e,i,n,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,o,r,a,l),this}absellipse(t,e,i,n,o,r,a,l){const c=new Ml(t,e,i,n,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hn extends Mi{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new P,h=new Rt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*n;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(a,3)),this.setAttribute("uv",new qe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class i0 extends Dc{constructor(t){super(t),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Dc().fromJSON(n))}return this}}const sx={triangulate:function(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let o=n0(s,0,n,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,f,u,d;if(i&&(o=cx(s,t,o,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<n;g+=e)f=s[g],u=s[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return to(o,r,e,a,l,d,0),r}};function n0(s,t,e,i,n){let o,r;if(n===Mx(s,t,e,i)>0)for(o=t;o<e;o+=i)r=Ic(o,s[o],s[o+1],r);else for(o=e-i;o>=t;o-=i)r=Ic(o,s[o],s[o+1],r);return r&&Sr(r,r.next)&&(io(r),r=r.next),r}function Gn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Sr(e,e.next)||Me(e.prev,e,e.next)===0)){if(io(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function to(s,t,e,i,n,o,r){if(!s)return;!r&&o&&px(s,i,n,o);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,o?rx(s,i,n,o):ox(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),io(s),s=c.next,a=c.next;continue}if(s=c,s===a){r?r===1?(s=ax(Gn(s),t,e),to(s,t,e,i,n,o,2)):r===2&&lx(s,t,e,i,n,o):to(Gn(s),t,e,i,n,o,1);break}}}function ox(s){const t=s.prev,e=s,i=s.next;if(Me(t,e,i)>=0)return!1;const n=t.x,o=e.x,r=i.x,a=t.y,l=e.y,c=i.y,h=n<o?n<r?n:r:o<r?o:r,f=a<l?a<c?a:c:l<c?l:c,u=n>o?n>r?n:r:o>r?o:r,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&ms(n,a,o,l,r,c,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rx(s,t,e,i){const n=s.prev,o=s,r=s.next;if(Me(n,o,r)>=0)return!1;const a=n.x,l=o.x,c=r.x,h=n.y,f=o.y,u=r.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,x=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,m=ol(d,g,t,e,i),w=ol(x,p,t,e,i);let M=s.prevZ,S=s.nextZ;for(;M&&M.z>=m&&S&&S.z<=w;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=p&&M!==n&&M!==r&&ms(a,h,l,f,c,u,M.x,M.y)&&Me(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=d&&S.x<=x&&S.y>=g&&S.y<=p&&S!==n&&S!==r&&ms(a,h,l,f,c,u,S.x,S.y)&&Me(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=p&&M!==n&&M!==r&&ms(a,h,l,f,c,u,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=w;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=p&&S!==n&&S!==r&&ms(a,h,l,f,c,u,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function ax(s,t,e){let i=s;do{const n=i.prev,o=i.next.next;!Sr(n,o)&&s0(n,i,i.next,o)&&eo(n,o)&&eo(o,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),io(i),io(i.next),i=s=o),i=i.next}while(i!==s);return Gn(i)}function lx(s,t,e,i,n,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&xx(r,a)){let l=o0(r,a);r=Gn(r,r.next),l=Gn(l,l.next),to(r,t,e,i,n,o,0),to(l,t,e,i,n,o,0);return}a=a.next}r=r.next}while(r!==s)}function cx(s,t,e,i){const n=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*i,l=o<r-1?t[o+1]*i:s.length,c=n0(s,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(gx(c));for(n.sort(hx),o=0;o<n.length;o++)e=fx(n[o],e);return e}function hx(s,t){return s.x-t.x}function fx(s,t){const e=ux(s,t);if(!e)return t;const i=o0(e,s);return Gn(i,i.next),Gn(e,e.next)}function ux(s,t){let e=t,i=-1/0,n;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=o&&u>i&&(i=u,n=e.x<e.next.x?e:e.next,u===o))return n}e=e.next}while(e!==t);if(!n)return null;const a=n,l=n.x,c=n.y;let h=1/0,f;e=n;do o>=e.x&&e.x>=l&&o!==e.x&&ms(r<c?o:i,r,l,c,r<c?i:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),eo(e,s)&&(f<h||f===h&&(e.x>n.x||e.x===n.x&&dx(n,e)))&&(n=e,h=f)),e=e.next;while(e!==a);return n}function dx(s,t){return Me(s.prev,s,t.prev)<0&&Me(t.next,s,s.next)<0}function px(s,t,e,i){let n=s;do n.z===0&&(n.z=ol(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,mx(n)}function mx(s){let t,e,i,n,o,r,a,l,c=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),o?o.nextZ=n:s=n,n.prevZ=o,o=n;e=i}o.nextZ=null,c*=2}while(r>1);return s}function ol(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function gx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ms(s,t,e,i,n,o,r,a){return(n-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(n-r)*(i-a)}function xx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!vx(s,t)&&(eo(s,t)&&eo(t,s)&&_x(s,t)&&(Me(s.prev,s,t.prev)||Me(s,t.prev,t))||Sr(s,t)&&Me(s.prev,s,s.next)>0&&Me(t.prev,t,t.next)>0)}function Me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Sr(s,t){return s.x===t.x&&s.y===t.y}function s0(s,t,e,i){const n=Io(Me(s,t,e)),o=Io(Me(s,t,i)),r=Io(Me(e,i,s)),a=Io(Me(e,i,t));return!!(n!==o&&r!==a||n===0&&Do(s,e,t)||o===0&&Do(s,i,t)||r===0&&Do(e,s,i)||a===0&&Do(e,t,i))}function Do(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Io(s){return s>0?1:s<0?-1:0}function vx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&s0(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function eo(s,t){return Me(s.prev,s,s.next)<0?Me(s,t,s.next)>=0&&Me(s,s.prev,t)>=0:Me(s,t,s.prev)<0||Me(s,s.next,t)<0}function _x(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&n<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function o0(s,t){const e=new rl(s.i,s.x,s.y),i=new rl(t.i,t.x,t.y),n=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function Ic(s,t,e,i){const n=new rl(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function io(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function rl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mx(s,t,e,i){let n=0;for(let o=t,r=e-i;o<e;o+=i)n+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return n}class Zs{static area(t){const e=t.length;let i=0;for(let n=e-1,o=0;o<e;n=o++)i+=t[n].x*t[o].y-t[o].x*t[n].y;return i*.5}static isClockWise(t){return Zs.area(t)<0}static triangulateShape(t,e){const i=[],n=[],o=[];Uc(t),Nc(i,t);let r=t.length;e.forEach(Uc);for(let l=0;l<e.length;l++)n.push(r),r+=e[l].length,Nc(i,e[l]);const a=sx.triangulate(i,n);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Uc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Nc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class As extends Mi{constructor(t=.5,e=1,i=32,n=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:o,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],c=[],h=[];let f=t;const u=(e-t)/n,d=new P,g=new Rt;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){const m=o+p/i*r;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let x=0;x<n;x++){const p=x*(i+1);for(let m=0;m<i;m++){const w=m+p,M=w,S=w+i+1,I=w+i+2,R=w+1;a.push(M,S,R),a.push(S,I,R)}}this.setIndex(a),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class bl extends Mi{constructor(t=new i0([new Rt(0,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new qe(n,3)),this.setAttribute("normal",new qe(o,3)),this.setAttribute("uv",new qe(r,2));function c(h){const f=n.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;Zs.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const w=g[p];Zs.isClockWise(w)===!0&&(g[p]=w.reverse())}const x=Zs.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const w=g[p];d=d.concat(w)}for(let p=0,m=d.length;p<m;p++){const w=d[p];n.push(w.x,w.y,0),o.push(0,0,1),r.push(w.x,w.y)}for(let p=0,m=x.length;p<m;p++){const w=x[p],M=w[0]+f,S=w[1]+f,I=w[2]+f;i.push(M,S,I),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return yx(e,t)}static fromJSON(t,e){const i=[];for(let n=0,o=t.shapes.length;n<o;n++){const r=e[t.shapes[n]];i.push(r)}return new bl(i,t.curveSegments)}}function yx(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){const n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);const r0=new Pe(1,1,1),ke=new Yt({vertexColors:!0}),bx=[.7,.82,1,.56,.9,.66],or=r0.attributes.position.array,a0=r0.index.array,Ns=or.length/3,Uo=a0.length,Fc=new Ht,Fs=new de,ra=new de;function Ye(s){const t=s.length,e=new Float32Array(t*Ns*3),i=new Float32Array(t*Ns*3),o=t*Ns>65535?new Uint32Array(t*Uo):new Uint16Array(t*Uo);for(let a=0;a<t;a++){const l=s[a],[c,h,f]=l.size,[u,d,g]=l.pos,x=l.rotX||l.rotY||l.rotZ;let p=null;x&&(Fs.makeScale(c,h,f),l.rotX&&Fs.premultiply(ra.makeRotationX(l.rotX)),l.rotY&&Fs.premultiply(ra.makeRotationY(l.rotY)),l.rotZ&&Fs.premultiply(ra.makeRotationZ(l.rotZ)),p=Fs.elements),Fc.set(l.color);const{r:m,g:w,b:M}=Fc,S=a*Ns;for(let R=0;R<Ns;R++){const A=or[R*3],L=or[R*3+1],J=or[R*3+2],v=(S+R)*3;p?(e[v]=p[0]*A+p[4]*L+p[8]*J+u,e[v+1]=p[1]*A+p[5]*L+p[9]*J+d,e[v+2]=p[2]*A+p[6]*L+p[10]*J+g):(e[v]=A*c+u,e[v+1]=L*h+d,e[v+2]=J*f+g);const b=l.flat?1:bx[Math.floor(R/4)%6];i[v]=m*b,i[v+1]=w*b,i[v+2]=M*b}const I=a*Uo;for(let R=0;R<Uo;R++)o[I+R]=a0[R]+S}const r=new Mi;return r.setAttribute("position",new ei(e,3)),r.setAttribute("color",new ei(i,3)),r.setIndex(new ei(o,1)),r.computeBoundingSphere(),r.computeBoundingBox(),r}function l0(s,t=ke){return new lt(Ye(s),t)}function Sl(s){const t=new Map;return{get(e,i="",n=0){const o=`${e}:${i}:${n}`;let r=t.get(o);if(!r){const a=s[e];if(!a)throw new Error(`Unknown voxel model: ${e}`);r=Ye(a(i,n)),t.set(o,r)}return r},has(e){return!!s[e]},dispose(){for(const e of t.values())e.dispose();t.clear()}}}const Oc=new Ht,Bc=new Ht;function he(s,t,e){return Oc.set(s),Bc.set(t),Oc.lerp(Bc,e).getHex()}const Ie=2763827,Ai=5998248,as=14673388,xi=11056063,ve=[16734797,3051488,16761395,16250092,4177778,10186710,16748484,3818064],Hc=[16734858,5883888,16765503,8315009,12615408],Sx=[3051488,16740185,16761395,4177778,10186710,16748484,16052712,2831696,2205088,15230527,7323455,14241658],wx=[16769996,16242614,16108976,15647643,15910820,15251603],Ex=[15916448,9067059,3812130,14262363,1907488,12172482,12865580],Tx=[3356735,3099258,7032634,4869975,8208220,2580543],Ax=["crop","afro","mullet","bald","bun","long","cap"],Rx=["none","none","none","stubble","full","tash"];function ls(s,t,e){let i=Math.imul(t^Math.imul(e,2654435761),2246822507);return i^=i>>>13,i=Math.imul(i,3266489909),i^=i>>>16,s[(i>>>0)%s.length]}function Li(s){const t=Math.abs(Math.floor(Number(s)||0)),e=ls(Ax,t,1),i=e==="long"||e==="bun",n=ls(wx,t,2);return{skin:n,limb:c0(n,-8),hair:ls(Ex,t,3),style:e,beard:i?"none":ls(Rx,t,4),shirt:ls(Sx,t,5),legs:ls(Tx,t,6)}}function c0(s,t){const e=i=>Math.max(0,Math.min(255,(s>>i&255)+t));return e(16)<<16|e(8)<<8|e(0)}function Ks(s,t,e,i){const n=[{size:[.25*i,.24*i,.24*i],pos:[t,e,0],color:s.skin}];for(const a of[-1,1])n.push({size:[.05*i,.05*i,.05*i],pos:[t+.11*i,e+.02*i,.08*a*i],color:3158062});const o=s.hair,r=()=>n.push({size:[.27*i,.09*i,.26*i],pos:[t,e+.12*i,0],color:o});return s.style==="crop"?r():s.style==="bald"?n.push({size:[.2*i,.05*i,.26*i],pos:[t-.05*i,e+.07*i,0],color:o}):s.style==="afro"?(n.push({size:[.31*i,.15*i,.3*i],pos:[t-.02*i,e+.14*i,0],color:o}),n.push({size:[.29*i,.09*i,.28*i],pos:[t-.03*i,e+.06*i,0],color:o})):s.style==="mullet"?(r(),n.push({size:[.08*i,.19*i,.24*i],pos:[t-.13*i,e-.01*i,0],color:o})):s.style==="bun"?(r(),n.push({size:[.12*i,.12*i,.12*i],pos:[t-.16*i,e+.13*i,0],color:o})):s.style==="long"?(r(),n.push({size:[.24*i,.22*i,.07*i],pos:[t-.02*i,e-.05*i,.13*i],color:o}),n.push({size:[.24*i,.22*i,.07*i],pos:[t-.02*i,e-.05*i,-.13*i],color:o}),n.push({size:[.08*i,.24*i,.26*i],pos:[t-.12*i,e-.06*i,0],color:o})):s.style==="cap"&&(n.push({size:[.27*i,.1*i,.26*i],pos:[t,e+.13*i,0],color:s.shirt}),n.push({size:[.14*i,.04*i,.22*i],pos:[t+.18*i,e+.1*i,0],color:s.shirt})),s.beard==="stubble"?n.push({size:[.04*i,.09*i,.2*i],pos:[t+.12*i,e-.07*i,0],color:c0(o,18)}):s.beard==="full"?(n.push({size:[.07*i,.14*i,.22*i],pos:[t+.12*i,e-.09*i,0],color:o}),n.push({size:[.05*i,.04*i,.13*i],pos:[t+.13*i,e-.03*i,0],color:o})):s.beard==="tash"&&n.push({size:[.05*i,.04*i,.14*i],pos:[t+.13*i,e-.04*i,0],color:o}),n}function cs(s,t=38){const e=Math.min(255,(s>>16&255)+t),i=Math.min(255,(s>>8&255)+t),n=Math.min(255,(s&255)+t);return e<<16|i<<8|n}function $s(s,t,{r:e=.15,inset:i=.28}={}){const n=s/2-i,o=t/2,r=[];for(const a of[-n,n])for(const l of[-o,o])r.push({size:[e*2.2,e*1.5,.14],pos:[a,e*.75,l],color:Ie});return r}const Cx=new Set(["runner","walker","footykid","bike","kidbike","pram","tricycle","scooter","escooter","skateboard"]),Ln=6,kx={runner:{rate:1.15},footykid:{rate:1.35},walker:{rate:.85},bike:{rate:.75},kidbike:{rate:.9},pram:{rate:.85},scooter:{rate:.7},escooter:{rate:.5},skateboard:{rate:.5}};function Di(s){return((Number(s)||0)+.5)/Ln}function No(s,t={}){const{s:e=1,x:i=0,y:n=0,phase:o=0,stride:r=1,lean:a=0,arms:l="swing"}=t,{shirt:c,limb:h,legs:f}=s,u=o*Math.PI*2,d=Math.sin(u),g=Math.abs(Math.cos(u))*.03*r,x=Math.cos(u)*.022*r,p=[];for(const m of[1,-1]){const w=d*m*r,M=Math.max(0,w)*.05,S=.07*m;p.push({size:[.13*e,.22*e,.13*e],pos:[i+.08*w*e,n+(.3+g)*e,S*e],color:f}),p.push({size:[.12*e,.2*e,.12*e],pos:[i+.18*w*e,n+(.14+M+g)*e,S*e],color:h}),p.push({size:[.17*e,.07*e,.13*e],pos:[i+.24*w*e,n+(.035+M+g)*e,S*e],color:3356735})}p.push({size:[.27*e,.3*e,.26*e],pos:[i+(a+x)*e,n+(.56+g)*e,0],color:c});for(const m of[1,-1])if(l==="push")p.push({size:[.22*e,.09*e,.09*e],pos:[i+(.2+a)*e,n+(.56+g)*e,.14*m*e],color:h});else{const w=-d*m*r;p.push({size:[.1*e,.22*e,.1*e],pos:[i+(.13*w+a)*e,n+(.58+g)*e,.16*m*e],color:h})}return p.push(...Ks(s,i+(a*1.6+x*1.3)*e,n+(.83+g)*e,e)),p}function aa(s,t={}){const{s:e=1,x:i=0,y:n=0,phase:o=0,crank:r=.11,lean:a=.05}=t,{shirt:l,limb:c,legs:h}=s,f=o*Math.PI*2,u=[];for(const d of[1,-1]){const g=f+(d>0?0:Math.PI),x=Math.cos(g)*r,p=Math.sin(g)*r,m=.09*d;u.push({size:[.12*e,.16*e,.11*e],pos:[i+(.02+x*.45)*e,n+(.2+p*.35)*e,m*e],color:h}),u.push({size:[.11*e,.14*e,.1*e],pos:[i+(.04+x)*e,n+(.08+p)*e,m*e],color:c})}u.push({size:[.26*e,.26*e,.24*e],pos:[i+a*e,n+.36*e,0],color:l});for(const d of[1,-1])u.push({size:[.24*e,.09*e,.09*e],pos:[i+(.18+a)*e,n+.4*e,.12*d*e],color:c});return u.push(...Ks(s,i+a*1.4*e,n+.6*e,e*.95)),u}function Fo(s,{length:t=2.2,cabin:e=1.15,roof:i=.3,trim:n=null}={}){return[{size:[t,.32,.86],pos:[0,.3,0],color:s},{size:[e,i,.78],pos:[-.12,.3+i/2+.14,0],color:s},{size:[e*.9,i*.66,.82],pos:[-.12,.3+i/2+.16,0],color:Ai},{size:[t+.1,.1,.8],pos:[0,.2,0],color:3093306},...n?[{size:[t,.07,.88],pos:[0,.42,0],color:n}]:[],{size:[.1,.13,.2],pos:[t/2+.02,.34,-.28],color:16774863},{size:[.1,.13,.2],pos:[t/2+.02,.34,.28],color:16774863},{size:[.1,.11,.18],pos:[-t/2-.02,.34,-.28],color:16734797},{size:[.1,.11,.18],pos:[-t/2-.02,.34,.28],color:16734797},...$s(t-.2,.86,{r:.16,inset:.24})]}function Gc(s,{length:t=3.9,roof:e=15791352,stripe:i=null}={}){return[{size:[t,.64,.88],pos:[0,.5,0],color:s},{size:[t-.35,.26,.9],pos:[0,.74,0],color:Ai},...i?[{size:[t,.1,.9],pos:[0,.4,0],color:i}]:[],{size:[t,.12,.9],pos:[0,.3,0],color:3093306},{size:[t-.1,.16,.86],pos:[0,.92,0],color:e},{size:[.1,.16,.24],pos:[t/2+.02,.52,-.28],color:16774863},{size:[.1,.16,.24],pos:[t/2+.02,.52,.28],color:16774863},...$s(t-.5,.9,{r:.19,inset:.4})]}function la({body:s,belly:t,wing:e,beak:i,eye:n=16765503,tail:o}){return[{size:[.52,.3,.34],pos:[0,0,0],color:s},{size:[.3,.17,.36],pos:[-.1,.06,0],color:t},{size:[.25,.23,.23],pos:[.3,.1,0],color:s},{size:[.2,.08,.09],pos:[.47,.08,0],color:i},{size:[.05,.05,.05],pos:[.34,.17,-.1],color:n},{size:[.05,.05,.05],pos:[.34,.17,.1],color:n},{size:[.34,.07,.3],pos:[0,.07,-.3],color:e},{size:[.26,.06,.3],pos:[-.08,.13,-.58],color:e},{size:[.34,.07,.3],pos:[0,.07,.3],color:e},{size:[.26,.06,.3],pos:[-.08,.13,.58],color:e},{size:[.36,.07,.18],pos:[-.4,.02,0],color:o},{size:[.16,.06,.13],pos:[-.62,.02,0],color:o}]}const h0={runner:(s,t)=>{const e=Number(s)||0;return No(Li(e),{phase:Di(t),stride:1,lean:.04})},footykid:(s,t)=>{const e=Number(s)||0;return No(Li(e),{s:.82,phase:Di(t),stride:1.1,lean:.05})},walker:(s,t)=>{const e=Number(s)||0;return No(Li(e),{phase:Di(t),stride:.55})},bike:(s,t)=>{const e=Number(s)||0,i=ve[e%ve.length];return[{size:[.44,.44,.09],pos:[.42,.22,0],color:Ie},{size:[.3,.3,.06],pos:[.42,.22,0],color:xi},{size:[.44,.44,.09],pos:[-.42,.22,0],color:Ie},{size:[.3,.3,.06],pos:[-.42,.22,0],color:xi},{size:[.8,.07,.08],pos:[0,.44,0],color:i},{size:[.07,.24,.07],pos:[.36,.5,0],color:i},{size:[.07,.24,.07],pos:[-.28,.5,0],color:i},{size:[.09,.07,.38],pos:[.38,.64,0],color:3356735},{size:[.22,.08,.14],pos:[-.28,.65,0],color:3356735},...aa(Li(e+1),{s:1,x:-.08,y:.54,phase:Di(t),crank:.12})]},kidbike:(s,t)=>{const e=Number(s)||0,i=ve[e%ve.length];return[{size:[.34,.34,.08],pos:[.34,.17,0],color:Ie},{size:[.34,.34,.08],pos:[-.34,.17,0],color:Ie},{size:[.66,.07,.08],pos:[0,.34,0],color:i},{size:[.07,.2,.07],pos:[.3,.42,0],color:i},{size:[.08,.06,.32],pos:[.3,.53,0],color:3356735},{size:[.2,.08,.13],pos:[-.24,.42,0],color:3356735},...aa(Li(e+3),{s:.82,x:-.05,y:.42,phase:Di(t),crank:.1})]},scooter:(s,t)=>{const e=Number(s)||0,i=Math.sin(Di(t)*Math.PI*2),n=Li(e),{shirt:o,limb:r,legs:a}=n;return[{size:[.62,.06,.18],pos:[0,.14,0],color:ve[e%ve.length]},{size:[.07,.44,.07],pos:[.28,.35,0],color:as},{size:[.08,.06,.34],pos:[.28,.56,0],color:3356735},{size:[.22,.22,.08],pos:[.28,.11,0],color:Ie},{size:[.22,.22,.08],pos:[-.28,.11,0],color:Ie},{size:[.1,.3,.1],pos:[-.02,.33,.07],color:a},{size:[.14,.06,.11],pos:[-.02,.19,.07],color:3356735},{size:[.1,.26,.1],pos:[-.06+i*.12,.3,-.12],color:a},{size:[.14,.06,.11],pos:[-.08+i*.2,.15+Math.max(0,i)*.06,-.12],color:3356735},{size:[.24,.26,.22],pos:[.02,.6,0],color:o},{size:[.2,.08,.08],pos:[.18,.62,-.1],color:r},{size:[.2,.08,.08],pos:[.18,.62,.1],color:r},...Ks(n,.03,.83,.92)]},escooter:(s,t)=>{const e=Number(s)||0,i=Di(t)*Math.PI*2,n=Math.abs(Math.sin(i))*.03,o=Math.cos(i)*.03,r=Li(e+2),{shirt:a,limb:l,legs:c}=r;return[{size:[.66,.08,.2],pos:[0,.16,0],color:3356735},{size:[.07,.5,.07],pos:[.3,.41,0],color:xi},{size:[.08,.07,.38],pos:[.3,.64,0],color:2237996},{size:[.24,.24,.09],pos:[.3,.12,0],color:Ie},{size:[.24,.24,.09],pos:[-.3,.12,0],color:Ie},{size:[.11,.24,.11],pos:[.08,.32+n,.08],color:c},{size:[.11,.24,.11],pos:[-.08,.32+n,-.08],color:c},{size:[.15,.06,.12],pos:[.08,.23,.08],color:3356735},{size:[.15,.06,.12],pos:[-.08,.23,-.08],color:3356735},{size:[.26,.28,.24],pos:[.02+o,.58+n,0],color:a},{size:[.24,.08,.08],pos:[.2,.62+n,-.11],color:l},{size:[.24,.08,.08],pos:[.2,.62+n,.11],color:l},...Ks(r,.03+o*1.4,.83+n,.96)]},skateboard:(s,t)=>{const e=Number(s)||0,i=Math.sin(Di(t)*Math.PI*2)*.035,n=Li(e+1),{shirt:o,limb:r,legs:a}=n;return[{size:[.74,.06,.24],pos:[0,.16,0],color:ve[(e+4)%ve.length]},{size:[.1,.06,.2],pos:[.3,.09,0],color:xi},{size:[.1,.06,.2],pos:[-.3,.09,0],color:xi},{size:[.12,.12,.06],pos:[.3,.06,-.12],color:16761395},{size:[.12,.12,.06],pos:[.3,.06,.12],color:16761395},{size:[.12,.12,.06],pos:[-.3,.06,-.12],color:16761395},{size:[.12,.12,.06],pos:[-.3,.06,.12],color:16761395},{size:[.12,.22-i,.11],pos:[.16,.3-i,.08],color:a},{size:[.12,.22-i,.11],pos:[-.16,.3-i,-.08],color:a},{size:[.16,.06,.13],pos:[.18,.21,.08],color:3356735},{size:[.16,.06,.13],pos:[-.18,.21,-.08],color:3356735},{size:[.26,.26,.24],pos:[.02,.56-i*2,0],color:o},{size:[.26,.08,.08],pos:[.16,.6-i*2,-.16],color:r},{size:[.26,.08,.08],pos:[-.12,.6-i*2,.16],color:r},...Ks(n,.04,.8-i*2,.96)]},pram:(s,t)=>{const e=Number(s)||0;return[{size:[.9,.34,.6],pos:[.28,.4,0],color:ve[(e+1)%ve.length]},{size:[.52,.3,.56],pos:[.06,.66,0],color:3818064},{size:[.3,.2,.34],pos:[.48,.62,0],color:16773600},{size:[.34,.09,.3],pos:[.48,.74,0],color:16247236},{size:[.06,.34,.5],pos:[-.34,.62,0],color:as},...$s(1.3,.56,{r:.13,inset:.18}).map(i=>({...i,pos:[i.pos[0]+.28,i.pos[1],i.pos[2]]})),...No(Li(e+4),{x:-.72,phase:Di(t),stride:.5,arms:"push"})]},tricycle:(s,t)=>{const e=Number(s)||0,i=ve[e%ve.length];return[{size:[.62,.1,.16],pos:[0,.22,0],color:i},{size:[.22,.12,.26],pos:[-.16,.32,0],color:16773600},{size:[.07,.3,.07],pos:[.26,.34,0],color:as},{size:[.08,.06,.34],pos:[.26,.48,0],color:16734797},{size:[.3,.3,.12],pos:[.3,.15,0],color:Ie},{size:[.22,.22,.1],pos:[-.26,.11,-.2],color:Ie},{size:[.22,.22,.1],pos:[-.26,.11,.2],color:Ie},...aa(Li(e+2),{s:.7,x:-.1,y:.24,phase:Di(t),crank:.09})]},car:s=>Fo(ve[Number(s)%ve.length]),hatchback:s=>Fo(ve[(Number(s)+2)%ve.length],{length:2,cabin:1.3,roof:.34}),taxi:()=>[...Fo(16761395,{trim:3093306}),{size:[.34,.12,.2],pos:[-.1,.79,0],color:16250092}],bmw:()=>[...Fo(2041136,{length:2.4,cabin:1.2,roof:.26,trim:as}),{size:[.14,.12,.3],pos:[1.24,.34,0],color:as}],van:s=>{const t=[16250092,3051488,16734797][Number(s)%3];return[{size:[3.2,.72,.88],pos:[0,.52,0],color:t},{size:[1,.3,.84],pos:[1.1,.74,0],color:Ai},{size:[3.2,.12,.9],pos:[0,.2,0],color:3093306},{size:[1.7,.14,.82],pos:[-.7,.93,0],color:cs(t,24)},{size:[.1,.14,.22],pos:[1.62,.4,-.28],color:16774863},{size:[.1,.14,.22],pos:[1.62,.4,.28],color:16774863},...$s(2.9,.9,{r:.18,inset:.35})]},schoolbus:()=>Gc(16761395,{stripe:3093306,roof:16773583}),bus:s=>Gc([3051488,16734797,16250092][Number(s)%3],{length:4.2,stripe:16761395}),luggagecart:s=>[{size:[.9,.3,.7],pos:[.5,.3,0],color:4177778},{size:[1.2,.5,.74],pos:[-.5,.42,0],color:14275524},{size:[1,.36,.6],pos:[-.5,.78,0],color:ve[Number(s)%ve.length]},{size:[.08,.3,.5],pos:[1,.55,0],color:xi},...$s(1.9,.7,{r:.13,inset:.2})],train:()=>{const s=[{size:[11.4,.9,.94],pos:[0,.72,0],color:15790837},{size:[11.4,.26,.96],pos:[0,.98,0],color:Ai},{size:[11.4,.2,.96],pos:[0,.42,0],color:16761395},{size:[11,.18,.9],pos:[0,1.22,0],color:14673388},{size:[.5,.6,.86],pos:[5.8,.6,0],color:3051488},{size:[.12,.18,.26],pos:[5.98,.5,-.3],color:16774863},{size:[.12,.18,.26],pos:[5.98,.5,.3],color:16774863}];for(let t=-5;t<=5;t+=2.5)s.push({size:[.5,.26,1],pos:[t,.2,0],color:Ie});return s},plane:()=>[{size:[9,1,1],pos:[0,1.1,0],color:16250092},{size:[9,.22,1.02],pos:[0,1.32,0],color:3051488},{size:[1.6,.8,.9],pos:[4.6,1.1,0],color:16250092},{size:[.6,.3,.4],pos:[5.3,1.1,0],color:2041136},{size:[3,.16,3.2],pos:[-.4,1,0],color:15265010},{size:[1.2,.5,.5],pos:[-.6,.7,-1],color:14673388},{size:[1.2,.5,.5],pos:[-.6,.7,1],color:14673388},{size:[1.4,1.5,.16],pos:[-4,1.9,0],color:16734797},{size:[1.6,.14,1.5],pos:[-4.2,1.2,0],color:15265010},{size:[.3,.7,.3],pos:[3.4,.35,0],color:Ie},{size:[.4,.7,.3],pos:[-.6,.35,-1.2],color:Ie},{size:[.4,.7,.3],pos:[-.6,.35,1.2],color:Ie}],lilypad:()=>[{size:[1.9,.08,.78],pos:[0,.04,0],color:5221962},{size:[1.5,.05,.6],pos:[0,.09,0],color:6734933},{size:[.24,.1,.24],pos:[.5,.14,.14],color:16748484},{size:[.12,.14,.12],pos:[.5,.2,.14],color:16765503}],log:()=>[{size:[2.9,.34,.5],pos:[0,.18,0],color:9069632},{size:[2.9,.22,.6],pos:[0,.18,0],color:10253129},{size:[.1,.26,.4],pos:[1.46,.18,0],color:12884588},{size:[.1,.26,.4],pos:[-1.46,.18,0],color:12884588},{size:[.5,.06,.1],pos:[.3,.33,.1],color:7623471}],citycat:()=>[{size:[4.4,.3,.86],pos:[0,.16,0],color:15791352},{size:[4.6,.14,.7],pos:[0,.3,0],color:16250092},{size:[4.4,.1,.88],pos:[0,.06,0],color:3051488},{size:[1.8,.38,.72],pos:[-.3,.55,0],color:15791352},{size:[1.5,.2,.76],pos:[-.3,.6,0],color:Ai},{size:[1.9,.1,.78],pos:[-.3,.78,0],color:3051488},{size:[.5,.26,.5],pos:[1.5,.48,0],color:16761395},{size:[.1,.4,.1],pos:[-1.1,1,0],color:xi}],rowboat:s=>{const t=[3051488,15222330,4177778,15921126][Number(s)%4],e=9067058,i=13210973;return[{size:[1.9,.14,.7],pos:[-.05,.07,0],color:6044192},{size:[1.8,.04,.56],pos:[-.05,.16,0],color:10251071},{size:[2,.3,.1],pos:[0,.27,.36],color:e},{size:[2,.3,.1],pos:[0,.27,-.36],color:e},{size:[2.02,.1,.12],pos:[0,.21,.37],color:t},{size:[2.02,.1,.12],pos:[0,.21,-.37],color:t},{size:[.1,.32,.8],pos:[-1.02,.26,0],color:e},{size:[.32,.3,.52],pos:[1.08,.27,0],color:e},{size:[.22,.26,.28],pos:[1.3,.3,0],color:t},{size:[2.04,.06,.14],pos:[0,.44,.37],color:i},{size:[2.04,.06,.14],pos:[0,.44,-.37],color:i},{size:[.2,.06,.66],pos:[-.45,.32,0],color:i},{size:[.2,.06,.66],pos:[.4,.32,0],color:i},{size:[1.3,.05,.07],pos:[-.05,.4,.2],color:i,rotY:.12},{size:[.32,.03,.15],pos:[-.72,.4,.28],color:i,rotY:.12},{size:[1.3,.05,.07],pos:[-.05,.4,-.2],color:i,rotY:-.12},{size:[.32,.03,.15],pos:[-.72,.4,-.28],color:i,rotY:-.12},{size:[.05,.7,.05],pos:[.85,.62,0],color:5913122},{size:[.34,.18,.03],pos:[.66,.88,0],color:16734797},{size:[.16,.1,.035],pos:[.52,.88,0],color:16765503}]},treasuremap:()=>[{size:[.86,.04,.62],pos:[0,.02,0],color:15852477},{size:[.12,.12,.66],pos:[.46,.05,0],color:14072966},{size:[.12,.12,.66],pos:[-.46,.05,0],color:14072966},{size:[.34,.02,.26],pos:[-.14,.045,.1],color:8175840},{size:[.2,.025,.16],pos:[.12,.05,-.08],color:7319114},{size:[.06,.03,.06],pos:[-.2,.05,-.16],color:9067059},{size:[.06,.03,.06],pos:[-.08,.05,-.2],color:9067059},{size:[.06,.03,.06],pos:[.04,.05,-.18],color:9067059},{size:[.24,.035,.06],pos:[.2,.06,.12],color:13643818,rotY:.785},{size:[.24,.035,.06],pos:[.2,.06,.12],color:13643818,rotY:-.785}],boat:()=>[{size:[2.9,.34,.8],pos:[0,.18,0],color:16250092},{size:[3.05,.12,.62],pos:[0,.33,0],color:15265010},{size:[2.9,.1,.82],pos:[0,.06,0],color:3051488},{size:[1,.36,.6],pos:[-.35,.55,0],color:15791352},{size:[.84,.18,.64],pos:[-.35,.6,0],color:Ai},{size:[.1,.7,.1],pos:[.5,.85,0],color:xi}],tree:s=>{const t=.7+Number(s)%3*.42,e=[4629316,5748815,3904576][Number(s)%3];return[{size:[.26,t,.26],pos:[0,t/2,0],color:9069632},{size:[.78,.5,.78],pos:[0,t+.2,0],color:e},{size:[.6,.42,.6],pos:[0,t+.58,0],color:cs(e,14)},{size:[.36,.3,.36],pos:[0,t+.88,0],color:e}]},palm:s=>{const t=1.2+Number(s)%3*.3;return[{size:[.22,t,.22],pos:[0,t/2,0],color:11043418},{size:[.9,.09,.24],pos:[0,t+.08,0],color:5748815},{size:[.24,.09,.9],pos:[0,t+.08,0],color:4629316},{size:[.6,.09,.6],pos:[0,t+.16,0],color:5748815},{size:[.18,.14,.18],pos:[0,t+.26,0],color:9069632}]},boulder:s=>{const t=Number(s)%3,e=.44+t*.14;return[{size:[.78-t*.08,e,.7],pos:[0,e/2,0],color:9076594},{size:[.56,e*.55,.8],pos:[.06,e*.8,0],color:10984589},{size:[.3,.18,.28],pos:[-.3,e*.55,.22],color:7037528}]},pine:s=>{const t=Number(s)%3,e=.32+t*.12,i=[3107658,3832405,2645569][t],n=16251902;return[{size:[.22,e,.22],pos:[0,e/2,0],color:7229238},{size:[.86,.34,.86],pos:[0,e+.17,0],color:i},{size:[.9,.08,.9],pos:[0,e+.36,0],color:n},{size:[.62,.32,.62],pos:[0,e+.56,0],color:cs(i,10)},{size:[.66,.08,.66],pos:[0,e+.74,0],color:n},{size:[.36,.3,.36],pos:[0,e+.92,0],color:i},{size:[.4,.1,.4],pos:[0,e+1.1,0],color:n}]},snowman:s=>{const t=[14241615,3051488,16761395][Number(s)%3];return[{size:[.66,.5,.66],pos:[0,.25,0],color:16054523},{size:[.48,.4,.48],pos:[0,.68,0],color:16448767},{size:[.52,.1,.52],pos:[0,.9,0],color:t},{size:[.38,.32,.38],pos:[0,1.1,0],color:16448767},{size:[.08,.08,.2],pos:[0,1.1,.26],color:16747051},{size:[.06,.06,.04],pos:[-.09,1.18,.2],color:1907488},{size:[.06,.06,.04],pos:[.09,1.18,.2],color:1907488},{size:[.3,.06,.3],pos:[0,1.29,0],color:1907488},{size:[.2,.18,.2],pos:[0,1.4,0],color:1907488}]},snowrock:s=>{const t=Number(s)%3,e=.4+t*.12;return[{size:[.78-t*.06,e,.7],pos:[0,e/2,0],color:8226704},{size:[.56,e*.5,.78],pos:[.06,e*.75,0],color:9937322},{size:[.7-t*.06,.1,.64],pos:[0,e+.04,0],color:16054523}]},iceblock:s=>{const e=.5+Number(s)%3*.14;return[{size:[.82,e,.8],pos:[0,e/2,0],color:10474478},{size:[.6,e*.6,.6],pos:[-.06,e*.72,.04],color:13167611},{size:[.2,e*.7,.06],pos:[.2,e*.5,.41],color:15399167},{size:[.84,.06,.82],pos:[0,e+.02,0],color:15399167}]},umbrella:s=>{const t=[16734797,3051488,16761395][Number(s)%3];return[{size:[.09,1.05,.09],pos:[0,.52,0],color:16250092},{size:[1.22,.1,1.22],pos:[0,1.02,0],color:16776695},{size:[1.28,.09,.4],pos:[0,1.02,0],color:t},{size:[.4,.09,1.28],pos:[0,1.02,0],color:t},{size:[.74,.09,.74],pos:[0,1.1,0],color:16776695},{size:[.11,.1,.11],pos:[0,1.18,0],color:t}]},surfboard:s=>{const t=[16748484,4177778,16761395][Number(s)%3];return[{size:[.3,1.3,.11],pos:[0,.65,0],color:t},{size:[.2,.26,.12],pos:[0,1.36,0],color:t},{size:[.2,.2,.12],pos:[0,.06,0],color:t},{size:[.08,1,.13],pos:[0,.7,0],color:16776695}]},bush:s=>{const t=[5748815,4629316][Number(s)%2];return[{size:[.7,.34,.66],pos:[0,.17,0],color:t},{size:[.46,.26,.46],pos:[.08,.4,-.04],color:cs(t,16)}]},bin:()=>[{size:[.5,.6,.46],pos:[0,.3,0],color:4161359},{size:[.54,.09,.5],pos:[0,.64,0],color:16761395},{size:[.16,.16,.08],pos:[0,.1,-.26],color:Ie},{size:[.16,.16,.08],pos:[0,.1,.26],color:Ie}],lightpole:()=>[{size:[.14,2,.14],pos:[0,1,0],color:xi},{size:[.4,.1,.14],pos:[.16,2,0],color:xi},{size:[.3,.12,.2],pos:[.32,1.92,0],color:16774863}],bench:()=>[{size:[.8,.08,.34],pos:[0,.32,0],color:11043418},{size:[.8,.3,.08],pos:[0,.48,.14],color:11043418},{size:[.09,.32,.32],pos:[-.3,.16,0],color:3818064},{size:[.09,.32,.32],pos:[.3,.16,0],color:3818064}],planter:()=>[{size:[.6,.34,.6],pos:[0,.17,0],color:14275524},{size:[.5,.3,.5],pos:[0,.45,0],color:5748815},{size:[.22,.16,.22],pos:[.1,.62,-.06],color:16748484}],buildingsmall:s=>{const t=1.8+Number(s)%3*.9,e=[14275524,12897236,14731688][Number(s)%3],i=[{size:[.86,t,.86],pos:[0,t/2,0],color:e}];for(let n=.4;n<t-.2;n+=.45)i.push({size:[.9,.2,.6],pos:[0,n,0],color:Ai}),i.push({size:[.6,.2,.9],pos:[0,n,0],color:Ai});return i.push({size:[.94,.12,.94],pos:[0,t,0],color:3818064}),i},buildingtall:s=>{const t=Number(s)%3,e=3.6+t*1.7,i=.92-t*.06,n=[11122372,13484976,9674928][t],o=[{size:[i,e,i],pos:[0,e/2,0],color:n}];for(let r=.5;r<e-.35;r+=.52)o.push({size:[i+.04,.26,i-.24],pos:[0,r,0],color:Ai}),o.push({size:[i-.24,.26,i+.04],pos:[0,r,0],color:Ai});return o.push({size:[i+.08,.14,i+.08],pos:[0,e,0],color:3818064}),o.push({size:[.3,.26,.3],pos:[.16,e+.2,-.1],color:9147811}),o.push({size:[.06,.5+t*.34,.06],pos:[-.2,e+.35,.12],color:xi}),o},trafficlight:()=>[{size:[.3,.12,.3],pos:[0,.06,0],color:5857644},{size:[.12,1.5,.12],pos:[0,.75,0],color:3818064},{size:[.24,.62,.22],pos:[0,1.52,0],color:2896700},{size:[.1,.1,.06],pos:[0,1.7,.13],color:16734797},{size:[.1,.1,.06],pos:[0,1.54,.13],color:16761395},{size:[.1,.1,.06],pos:[0,1.38,.13],color:4177778}],hydrant:()=>[{size:[.34,.07,.34],pos:[0,.035,0],color:14695987},{size:[.26,.42,.26],pos:[0,.23,0],color:16734797},{size:[.42,.09,.16],pos:[0,.32,0],color:14695987},{size:[.18,.12,.18],pos:[0,.5,0],color:16761395}],bollard:s=>{const t=[[-.24,.24],[-.3,0,.3],[0]][Number(s)%3],e=[];for(const i of t)e.push({size:[.12,.6,.12],pos:[i,.3,0],color:3818064}),e.push({size:[.16,.08,.16],pos:[i,.62,0],color:16761395});return t.length>1&&e.push({size:[.64,.05,.05],pos:[0,.46,0],color:5857644}),e},postbox:()=>[{size:[.2,.08,.2],pos:[0,.04,0],color:5857644},{size:[.42,.7,.4],pos:[0,.38,0],color:16734797},{size:[.46,.1,.44],pos:[0,.75,0],color:14695987},{size:[.24,.05,.06],pos:[0,.6,.21],color:2896700}],roadsign:s=>{const t=[3051488,4177778,16761395][Number(s)%3];return[{size:[.09,1.25,.09],pos:[0,.62,0],color:xi},{size:[.7,.24,.06],pos:[.1,1.18,0],color:t},{size:[.58,.06,.08],pos:[.1,1.18,0],color:16250092}]},kiosk:s=>{const t=[16734797,3051488,4177778][Number(s)%3];return[{size:[.82,.78,.6],pos:[0,.39,0],color:15131350},{size:[.62,.34,.66],pos:[0,.52,0],color:Ai},{size:[.86,.16,.66],pos:[0,.84,0],color:t},{size:[.9,.07,.3],pos:[0,.74,.28],color:t},{size:[.5,.2,.08],pos:[0,.22,.31],color:16761395}]},magpie:()=>la({body:2040359,belly:16250092,wing:2764341,beak:14673388,tail:2040359}),ibis:()=>la({body:15921126,belly:16250092,wing:14999764,beak:3356735,eye:3356735,tail:3356735}),seagull:()=>la({body:16250092,belly:16777215,wing:12897236,beak:16761395,tail:14673388}),sweet:s=>{const t=Hc[Number(s)%Hc.length];return[{size:[.3,.28,.28],pos:[0,0,0],color:t},{size:[.32,.1,.3],pos:[0,0,0],color:16776695},{size:[.12,.2,.2],pos:[.19,0,0],color:cs(t,30)},{size:[.09,.26,.26],pos:[.27,0,0],color:t},{size:[.12,.2,.2],pos:[-.19,0,0],color:cs(t,30)},{size:[.09,.26,.26],pos:[-.27,0,0],color:t}]},cake:()=>[{size:[.36,.16,.36],pos:[0,-.06,0],color:16773600},{size:[.38,.06,.38],pos:[0,.03,0],color:16748484},{size:[.28,.1,.28],pos:[0,.1,0],color:16773600},{size:[.05,.13,.05],pos:[0,.21,0],color:16250092},{size:[.06,.08,.06],pos:[0,.31,0],color:16765503}],grenade:()=>[{size:[.26,.26,.26],pos:[0,-.02,0],color:4877114},{size:[.3,.07,.3],pos:[0,-.02,0],color:4020784},{size:[.1,.12,.1],pos:[0,.14,0],color:7041664},{size:[.16,.04,.05],pos:[.08,.2,0],color:13225684},{size:[.05,.04,.12],pos:[.15,.2,0],color:13225684}],bazooka:()=>[{size:[.72,.16,.16],pos:[0,0,0],color:4147765},{size:[.14,.2,.2],pos:[-.38,0,0],color:2896671},{size:[.1,.22,.22],pos:[.38,0,0],color:7031347},{size:[.16,.12,.1],pos:[-.06,-.13,0],color:2896671},{size:[.1,.1,.06],pos:[.1,.14,0],color:16761395},{size:[.3,.05,.05],pos:[.02,.12,0],color:7041664}],nuke:()=>[{size:[.5,.26,.26],pos:[0,0,0],color:14212578},{size:[.34,.3,.3],pos:[-.02,0,0],color:15265008},{size:[.14,.2,.2],pos:[.28,0,0],color:10134702},{size:[.36,.1,.32],pos:[-.02,0,0],color:16765503},{size:[.1,.32,.06],pos:[-.24,0,0],color:3818064},{size:[.1,.06,.32],pos:[-.24,0,0],color:3818064},{size:[.12,.12,.12],pos:[.02,.16,0],color:2895667}],gradcap:()=>[{size:[.26,.12,.26],pos:[0,-.08,0],color:2040359},{size:[.46,.05,.46],pos:[0,.01,0],color:2040359},{size:[.07,.07,.07],pos:[0,.06,0],color:16765503},{size:[.05,.05,.24],pos:[.02,.04,.16],color:16765503}],coffee:()=>[{size:[.24,.3,.24],pos:[0,-.02,0],color:16776695},{size:[.26,.1,.26],pos:[0,-.04,0],color:11043418},{size:[.27,.07,.27],pos:[0,.15,0],color:3356735},{size:[.1,.06,.1],pos:[0,.2,0],color:3356735}],money:()=>[{size:[.4,.07,.24],pos:[0,-.1,0],color:4177778},{size:[.4,.07,.24],pos:[.02,-.02,0],color:5755271},{size:[.4,.07,.24],pos:[-.01,.06,0],color:4177778},{size:[.14,.09,.14],pos:[0,.07,0],color:16765503}],passport:()=>[{size:[.3,.09,.4],pos:[0,-.04,0],color:2051978},{size:[.28,.06,.38],pos:[.01,.03,0],color:16776695},{size:[.3,.06,.4],pos:[0,.07,0],color:2051978},{size:[.14,.04,.16],pos:[0,.11,0],color:16765503}],stopsign:()=>[{size:[.14,.62,.14],pos:[0,.31,0],color:9147811},{size:[.62,.62,.07],pos:[0,.86,0],color:14689055},{size:[.82,.4,.07],pos:[0,.86,0],color:14689055},{size:[.4,.82,.07],pos:[0,.86,0],color:14689055},{size:[.5,.11,.09],pos:[0,.86,0],color:16645110}],mushroom:()=>[{size:[.34,.3,.34],pos:[0,.16,0],color:16643036},{size:[.24,.1,.1],pos:[-.08,.2,.19],color:3812130},{size:[.86,.16,.86],pos:[0,.4,0],color:14689055},{size:[.7,.16,.7],pos:[0,.54,0],color:14689055},{size:[.4,.14,.4],pos:[0,.66,0],color:14689055},{size:[.24,.2,.24],pos:[0,.58,0],color:16643036},{size:[.2,.12,.14],pos:[-.36,.44,.16],color:16643036},{size:[.2,.12,.14],pos:[.36,.44,-.12],color:16643036},{size:[.14,.12,.2],pos:[.1,.44,.38],color:16643036}],heart:()=>[{size:[.22,.26,.24],pos:[-.15,.36,0],color:16731501},{size:[.22,.26,.24],pos:[.15,.36,0],color:16731501},{size:[.52,.2,.24],pos:[0,.2,0],color:15741781},{size:[.34,.16,.24],pos:[0,.05,0],color:15741781},{size:[.16,.14,.22],pos:[0,-.07,0],color:14232398},{size:[.1,.1,.06],pos:[-.14,.42,.13],color:16765144}],gun:()=>[{size:[.62,.13,.13],pos:[.08,.3,0],color:3818064},{size:[.22,.26,.17],pos:[-.18,.24,0],color:2896700},{size:[.14,.26,.14],pos:[-.22,.03,0],color:9069632},{size:[.15,.08,.11],pos:[.3,.39,0],color:as},{size:[.1,.11,.1],pos:[-.04,.15,0],color:5857644}],ring:()=>[{size:[.36,.08,.09],pos:[0,.36,0],color:16765503},{size:[.36,.08,.09],pos:[0,.06,0],color:15247649},{size:[.09,.38,.09],pos:[-.135,.21,0],color:16765503},{size:[.09,.38,.09],pos:[.135,.21,0],color:15247649},{size:[.16,.16,.16],pos:[0,.48,0],color:10479871}],bible:()=>[{size:[.32,.14,.42],pos:[0,-.02,0],color:7028527},{size:[.29,.1,.4],pos:[.02,0,0],color:16776695},{size:[.32,.05,.42],pos:[0,.07,0],color:7028527},{size:[.05,.03,.18],pos:[0,.11,0],color:16765503},{size:[.12,.03,.05],pos:[0,.11,.02],color:16765503}]},_e=Sl(h0);function Px(s,t="0",e=0){const i=h0[s];if(!i)throw new Error(`Unknown voxel model: ${s}`);return i(t,e)}function zx(s){let t=s>>>0,e=0;const i=()=>{e++,t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return i.int=n=>Math.floor(i()*n),i.range=(n,o)=>n+i()*(o-n),i.pick=n=>n[Math.floor(i()*n.length)],i.chance=n=>i()<n,i.sign=()=>i()<.5?-1:1,i.calls=()=>e,i.skip=n=>{for(let o=0;o<n;o++)i()},i.weighted=n=>{let o=0;for(const a of n)o+=a.weight??1;let r=i()*o;for(const a of n)if(r-=a.weight??1,r<=0)return a;return n[n.length-1]},i}function cn(s,t){let e=(s^Math.imul(t+2654435769,2246822507))>>>0;return e=Math.imul(e^e>>>13,3266489909)>>>0,zx(e)}function Lx(){return Math.random()*4294967295>>>0}function Dx(s,t){let e=0;for(const n in t)e+=t[n];let i=s()*e;for(const n in t)if(i-=t[n],i<=0)return n;return Object.keys(t)[0]}const Ix=6,Wt={tile:1,columnLimit:12,columnLimitLeft:19,laneExtent:30,generateAhead:26,keepBehind:11},Pt={mooring:{first:5,chance:.07,fromRow:12,minGap:30,points:25,label:"Treasure map",mapSize:.78},apron:6,verge:10261380,vergeRocks:{prop:.22,scatter:.15},sandColumns:5,sand:15784870,sandWet:14468239,foam:16776695,surf:{width:1.4,wobble:1.1,wavelength:22},underpass:{depth:1.5,ramp:2.5,shades:8,wall:9407104,collar:11906978,dark:723216},blend:6,bays:{chance:.02},platform:{deck:13222580,edge:16765503,height:.3},decor:{verge:["boulder"],beach:["palm"]},waves:{count:4,length:26,width:.55,speed:.55,from:13,color:16777215},rock:9076594,rockLight:10984589,rockDark:7037528,scrub:6126149,scrubAlt:7244880,ridge:{rise:.92,power:1.06,wobble:2.4,wobbleFrom:3.5,base:.5,floor:.95,hides:3.4,treeline:4,solidFrom:4.5},portal:{height:2.1,rim:.42,shadow:.15,dark:1183766,collar:14275526}},Ii={window:22,people:{density:22,speed:{min:.5,max:1.15},legSeconds:{min:1.4,max:4.2},turnRate:2.6,joggerChance:.22,joggerSpeed:2.3,models:["walker","runner","footykid"],variants:10,hitRadius:.3}},It={yawDeg:-20,pitchDeg:49,viewWidthTiles:10.4,minViewHeightTiles:13,maxViewHeightTiles:21,rowAhead:4.4,southLook:.75,openWorldSlack:3,recentreLerp:1.1,seaViewScale:1.15,bossViewScale:1.6,seaLead:3.4,bossLead:4.2,followLerp:7.5,followLerpX:4.5,distance:60,shakeAmount:.85,shakeDecay:2.6,fogNear:9,fogFar:24},Ux={countdown:3},Oo={boat:{after:5,text:"Hop in a boat for a new adventure"},tunnel:{after:10,text:"Hop into a tunnel for a new adventure"},pan:1.2,hold:2.6,back:1},Ri={hopDuration:.155,hopHeight:.6,bumpDuration:.11,bumpDistance:.22,squash:{crouch:.32,stretch:.26,land:.38},hitHalfWidth:.34},Xt={warmupRows:24,warmupSpeedScale:.58,warmupGapScale:1.7,warmupHazardScale:.5,safeStartRows:2,decorPerRow:{start:1,end:3,jitter:2},waterFromRow:14,riverWidth:{start:1,end:2,wideFromRow:50},speed:{base:2.1,perRow:.0055,max:8},gap:{base:5,perRow:-.0065,min:2.1},gapJitter:{base:4,perRow:-.0065,min:1.1},floatGap:{base:3.6,perRow:-.004,min:2},floatGapJitter:{base:2.8,perRow:-.004,min:1},hazardChance:{base:.42,perRow:8e-4,max:.78},maxHazardRun:{base:1.8,perRow:.005,max:5},maxRestRun:4,rail:{warnSeconds:2.2,gapSeconds:{min:2.6,max:6.5},flashesPerSecond:3,dwellSeconds:3.2,brakeTiles:7,acceleration:5.5},drift:{base:.22,perRow:.001,max:1.6,behindLimit:11,pull:1.8,idleMultiplier:2.6,idleWarnAfter:7,warnWithin:3.5}},Nx={perRow:1},mt={commitFrom:-9,lanes:5,laneLerp:15,reach:820,speed:{start:3.6,end:7.2,overTiles:650},surge:{amount:.1,hz:.19},brakeTiles:18,castOffSeconds:1.6,sea:{size:420,drop:.03,swell:26,swellColor:16777215,patch:{x:38,z:30}},markFrom:-31,waves:{gap:{start:2.5,end:1.15},arriveSeconds:{start:4.2,end:2.5}},signAt:7.6,legs:[{at:0,banner:"OUT TO SEA",tone:"calm",patterns:{shark:3,mine:2}},{at:.16,banner:"SHARK WATERS",patterns:{shark:2,sharks:3,stagger:2,mine:1,mines:1}},{at:.4,banner:"PIRATES!",patterns:{pirate:3,pirateShark:2,shark:1,sharks:2,stagger:2,mines:1}},{at:.68,banner:"THE DEEP",storm:.4,patterns:{wall:3,pirate:2,pirateShark:2,stagger:2,sharks:1,minefield:2}}],sharks:{vx:{start:1.5,end:3.4},halfLen:.85,breachAt:3.4},pirates:{vx:.5,halfLen:1.95,fireFrom:10,flight:1.15},mines:{halfLen:.45},heart:{first:160,every:{min:220,max:300},halfLen:.5,size:1.6},boatReach:1.15,cannon:{reloadSeconds:.34,speed:17,lift:2.4,gravity:6.5},kraken:{points:400,health:30,distance:11.5,hitHalfWidth:1.4,riseSeconds:2.4,gap:[2.3,1.75,1.3],warn:[1.15,.95,.8],wallWarn:1.3,strikeSeconds:.18,holdSeconds:.55,rockFlight:1.15,eruptWarn:.85,deathSeconds:3.4,shiftEvery:3.6},home:{turnSeconds:1.1,runSeconds:4.2,rowsUp:[3,4,2,5,6,7,8],clearRows:5}},Q={tracks:3,trackGap:1.6,switchLerp:18,trackReach:.72,cartHalf:.45,reach:1e3,speed:{start:5.4,end:11,overTiles:820},launchSeconds:1.4,jump:{v:7.4,gravity:22},chunk:8,buildAhead:64,keepBehind:18,planAhead:96,spacing:{start:1.5,end:.92},legs:[{at:0,banner:"THE DEEP MINE",tone:"calm",theme:"mine",patterns:{barricade:3,orecart:3,gap:2,orecarts:1.5,barricade2:1}},{at:.2,banner:"BAT CAVES",theme:"bats",patterns:{bats:3,bats2:2,barricade2:2,barricade:1,orecarts:2,gap:1.5}},{at:.45,banner:"CRYSTAL CAVERNS",theme:"crystal",patterns:{stalactite:3,stalactite2:2,crystal:2,crystal2:1.5,gap2:2,gap:1.5,bats:1}},{at:.7,banner:"THE MAGMA VEINS",theme:"magma",patterns:{geyser:3,geyser2:2,lava:2,lava2:1.5,orecarts:1.5,jumpwall:2}}],themes:{mine:{sky:1182471,floor:5127214,floorAlt:4601384,ledge:5916214,rock:5389873,rockDark:3812129,rockLight:6836543,sleeper:7227948,rail:10989240,pool:16752704},bats:{sky:460815,floor:3026745,floorAlt:2697779,ledge:3684935,rock:3553350,rockDark:2237228,rockLight:4606297,sleeper:5126698,rail:10133936,pool:4124872},crystal:{sky:919321,floor:3155270,floorAlt:2826560,ledge:3878229,rock:3812436,rockDark:2366008,rockLight:5193328,sleeper:5126698,rail:12109024,pool:10119935},magma:{sky:2361349,floor:3089444,floorAlt:2760736,ledge:3811882,rock:3811882,rockDark:2102806,rockLight:5521466,sleeper:3811870,rail:12624016,pool:16734740,lava:!0},lair:{sky:1837068,floor:4863028,floorAlt:4337712,ledge:5913150,rock:5913150,rockDark:3809830,rockLight:7622746,sleeper:5126698,rail:11576484,pool:16738858,lava:!0}},fog:{near:-4.5,far:8.5},clear:{barricade:.44,crystal:.5,rubble:.4,sweep:.62},bats:{speed:3.4,wakeAt:17,height:1.25},stalactite:{dropLead:.95,fall:.5},geyser:{lead:.9,lasts:1.6},gold:{points:1,gem:10,trailChance:.28,trail:4,arcChance:.4,gemChance:.12},heart:{first:230,every:{min:300,max:400}},view:{scale:1.08,ahead:4.2,bossScale:1.14,bossAhead:5.6},boss:{points:500,health:16,speed:7,distance:10.5,hitHalfWidth:1.05,riseSeconds:1.8,gap:[2.1,1.6,1.2],lungeWarn:[1.05,.9,.78],lungeSeconds:.16,rockLead:1.2,sweepLead:1.35,eruptLead:1,shiftEvery:3.2,crateEvery:2.6,crateSticks:2,maxSticks:6,throwSeconds:.5,throwCooldown:.32,deathSeconds:3.2},exit:{seconds:2.2,speed:16,rowsUp:[4,5,3,6,7,8,9]}},Zi={chance:.08,targetSize:.62,spinSpeed:2.4,bobHeight:.12,bobSpeed:2.6,hoverHeight:.62,types:{sweet:{label:"Lolly",points:10},cake:{label:"Birthday cake",points:15},gradcap:{label:"Graduation cap",points:20},coffee:{label:"Coffee",points:15},money:{label:"Cash",points:20},passport:{label:"Passport",points:25},ring:{label:"Wedding ring",points:35}}},Fx={slots:3},Fn={chance:.12,targetSize:.75,types:{grenade:{kind:"blast",label:"Grenade",points:10,weight:1,fromRow:6,rows:2,size:.6},stopsign:{kind:"freeze",label:"Stop",points:20,weight:.9,fromRow:14,seconds:5,rows:4,size:.66},gun:{kind:"gun",label:"Gun",points:20,weight:.55,fromRow:20,shots:15},bazooka:{kind:"blast",label:"Bazooka",points:20,weight:.4,fromRow:45,rows:7,razeSeconds:12},nuke:{kind:"blast",label:"Nuke",points:35,weight:.75,fromRow:50,rows:20,razeSeconds:25}}},di={spreadDeg:30,range:10,speed:24,hitRadius:.45,hits:{person:1,vehicle:2,prop:2},cooldown:.11,tracer:{color:16765503,length:.4,width:.09,height:.42}},Xe={chance:.09,targetSize:.68,maxLives:5,reviveGrace:1.6,reviveSearchRows:8,types:{heart:{kind:"life",label:"Extra life",points:15,weight:1,fromRow:10},bible:{kind:"water",label:"Walk on water",points:25,weight:.55,fromRow:30,seconds:15},mushroom:{kind:"mega",label:"Mega",points:35,weight:.45,fromRow:35,seconds:6}}},no={light:16723245,pulseHz:2.2,opacity:{min:.28,max:.52}},gs={scale:3,hopScale:2.8,shake:.8,reach:1.25},Ki={ground:9074790,rubble:7035982,scorch:5129018,debrisPerLane:12,restoreSeconds:3,restorePerRow:.35,restoreGrace:.35},Js=[{id:"baby",name:"Baby & Toddler",startRow:0,blendRows:0,speedMul:.85,hazardMul:.8,palette:{sky:12576511,fog:15267583,grass:8316487,grassAlt:7395899,path:16772804,pathLine:15915418,water:4182271,waterDeep:1619182,rail:13081190},laneWeights:{grass:1,road:1.35,water:.55},vehicles:[{model:"runner",length:.75,speedMul:.9,weight:1.2},{model:"walker",length:.75,speedMul:.5,weight:.9},{model:"bike",length:1.35,speedMul:1.15,weight:1},{model:"pram",length:1.3,speedMul:.72,weight:1},{model:"tricycle",length:.9,speedMul:.85,weight:.9}],floats:[{model:"lilypad",length:1.85,weight:1},{model:"log",length:2.95,weight:1}],decor:["tree","bush"],collectibles:["sweet"],chaser:{model:"magpie",label:"Magpie!"}},{id:"kid",name:"Primary School",startRow:30,blendRows:6,speedMul:1,hazardMul:1,palette:{sky:11920127,fog:14873855,grass:7659583,grassAlt:6870068,path:13620958,pathLine:16776160,water:3590394,waterDeep:1354214,rail:13081190},laneWeights:{grass:1,road:1.5,water:.3,field:.5},vehicles:[{model:"schoolbus",length:4,speedMul:.9,weight:1},{model:"scooter",length:.85,speedMul:1.3,weight:1},{model:"kidbike",length:1.1,speedMul:1.12,weight:1},{model:"car",length:2.4,speedMul:1,weight:1.1},{model:"footykid",length:.6,speedMul:1.2,weight:.7}],floats:[{model:"lilypad",length:1.85,weight:.6},{model:"log",length:2.95,weight:1}],runners:[{model:"footykid",length:.6,speedMul:1.15,weight:1}],decor:["tree","bush","bin"],collectibles:["cake"],chaser:{model:"magpie",label:"Magpie!"}},{id:"teen",name:"High School",startRow:70,blendRows:7,speedMul:1.14,hazardMul:1.12,palette:{sky:11197695,fog:14479615,grass:7330874,grassAlt:6541359,path:13028822,pathLine:16776160,water:3195637,waterDeep:1090272,rail:12291934},laneWeights:{grass:1,road:1.6,water:.25,rail:.45},vehicles:[{model:"bus",length:4.3,speedMul:.95,weight:1},{model:"skateboard",length:.85,speedMul:1.45,weight:1},{model:"car",length:2.4,speedMul:1.08,weight:1.2},{model:"hatchback",length:2.2,speedMul:1.15,weight:1}],floats:[{model:"log",length:2.95,weight:1}],trains:[{model:"train",length:11.8,speedMul:2.6,weight:1}],decor:["tree","bush","bin","lightpole"],collectibles:["money"],chaser:{model:"magpie",label:"Magpie!"}},{id:"uni",name:"Uni & The City",startRow:95,blendRows:8,speedMul:1.28,hazardMul:1.2,paved:!0,palette:{sky:10475263,fog:14085375,grass:14341832,grassAlt:13025971,path:10134446,pathLine:16774868,water:2537710,waterDeep:693974,rail:9409950},laneWeights:{grass:.85,road:1.7,water:.7,rail:.4},vehicles:[{model:"bus",length:4.3,speedMul:1,weight:1},{model:"bike",length:1.35,speedMul:1.25,weight:1},{model:"escooter",length:.9,speedMul:1.5,weight:1},{model:"car",length:2.4,speedMul:1.12,weight:1}],floats:[{model:"citycat",length:4.5,weight:1}],trains:[{model:"train",length:11.8,speedMul:2.8,weight:1}],decor:["buildingsmall","bench","lightpole","bollard","roadsign","bin"],scenery:["buildingtall","buildingsmall","buildingtall","lightpole"],collectibles:["gradcap","coffee"],chaser:{model:"ibis",label:"Bin chicken!"}},{id:"career",name:"The CBD",startRow:140,blendRows:8,speedMul:1.42,hazardMul:1.3,paved:!0,palette:{sky:10276847,fog:13691128,grass:13881282,grassAlt:12565422,path:9278623,pathLine:16773836,water:2076902,waterDeep:429772,rail:8094348},laneWeights:{grass:.6,road:2.2,water:.25,rail:.3},vehicles:[{model:"taxi",length:2.4,speedMul:1.2,weight:1.2},{model:"van",length:3.3,speedMul:1,weight:1},{model:"car",length:2.4,speedMul:1.15,weight:1.4},{model:"bmw",length:2.6,speedMul:1.45,weight:.35}],floats:[{model:"citycat",length:4.5,weight:1}],trains:[{model:"train",length:11.8,speedMul:3,weight:1}],decor:["buildingsmall","trafficlight","kiosk","lightpole","bollard","hydrant","postbox","bin"],scenery:["buildingtall","buildingtall","buildingsmall","lightpole"],collectibles:["money"],chaser:{model:"ibis",label:"Bin chicken!"}},{id:"beyond",name:"Everything After",startRow:200,blendRows:10,speedMul:1.5,hazardMul:1.35,railStyle:"runway",palette:{sky:13430783,fog:15661823,grass:9236054,grassAlt:8446539,path:13818080,pathLine:16776168,water:4643583,waterDeep:2081008,rail:12173512},laneWeights:{grass:1,road:1.6,water:.55,rail:.5},vehicles:[{model:"car",length:2.4,speedMul:1.15,weight:1},{model:"van",length:3.3,speedMul:1.05,weight:.8},{model:"luggagecart",length:2.15,speedMul:1.3,weight:.7},{model:"bus",length:4.3,speedMul:1,weight:.6}],floats:[{model:"boat",length:3,weight:1}],trains:[{model:"plane",length:10.5,speedMul:3.4,weight:1}],decor:["palm","bench","planter"],collectibles:["passport","ring"],chaser:{model:"seagull",label:"Seagull!"}}],hs={vehicleDelay:1.5,waterDelay:1.6,chaserDelay:1.7,seaDelay:2.6,headlines:{vehicle:"Squashed",water:"Soggy",chaser:"Caught",shark:"Bitten",kraken:"Dragged under",pirate:"Blown out of the water",mine:"Kaboom",crash:"Derailed",pit:"Bottomless",lava:"Toasted",bats:"Gone batty",rockfall:"Flattened",worm:"Wormfood",ice:"Thin ice"}},ue={name:"The Deep Freeze",openingRows:3,blendRows:4,turnRow:-3,slideDuration:.085,rest:{min:1,max:3},decor:{min:1,max:4},lake:{rows:{base:2,perRow:.03,max:6},holes:{base:1,perRow:.05,max:6},blocks:{base:3,perRow:.03,max:7},moves:{base:1,perRow:.04,max:5},plugBlocks:.65,attempts:24},palette:{sky:14216439,fog:15923452,grass:16054523,grassAlt:15134453,path:14674159,pathLine:16777215,water:3112888,waterDeep:1859474,rail:12173512,ice:12575733,iceLine:15333375,hole:1195875,sand:15331058,sandWet:12899292,foam:16777215,verge:13226971,scrub:16054523,scrubAlt:14542831,peak:16448767,crag:11977420,foot:9410979},scenery:["pine","pine","snowrock"],props:["pine","pine","snowman","snowrock"],collectibles:["sweet","cake"]},rr={id:"frozen",name:ue.name,startRow:-1/0,blendRows:ue.blendRows,speedMul:1,hazardMul:1,palette:ue.palette,laneWeights:{grass:1},vehicles:[],decor:ue.props,scenery:ue.scenery,collectibles:ue.collectibles,chaser:{model:"magpie",label:""}};function Fi(s){const t=Math.min(Ix,Js.length);let e=0;for(let i=0;i<t;i++)s>=Js[i].startRow&&(e=i);return{index:e,stage:Js[e]}}function Vc(s){const{index:t,stage:e}=Fi(s);if(t===0||!e.blendRows)return{index:t,t:1};const i=s-e.startRow;return{index:t,t:Math.min(1,Math.max(0,i/e.blendRows))}}function $e(s,t){const e=s.base+s.perRow*t;return typeof s.max=="number"?Math.min(s.max,e):typeof s.min=="number"?Math.max(s.min,e):e}const re=Wt.columnLimit+.5,ar=Pt.apron,Bo=Wt.laneExtent,Ms=-19.5,Wc=re-Ms,Ox=(re+Ms)/2,Oe=Ms+Pt.sandColumns,Os=Oe+Pt.blend,we=Oe,Je=we+Pt.underpass.ramp,Ho=Je,ca=re-ar,Go=Oe,Xc=Oe+.35,fi=re+Pt.ridge.solidFrom;let Vo=null;function Bx(){return Vo||(Vo=new ao(Wt.columnLimit*2+1,1),Vo.rotateX(-Math.PI/2)),Vo}let ha=null;function Hx(){if(!ha){const s=Wt.columnLimit*2+1;ha=Ye([{size:[s,.08,.14],pos:[0,.06,.43],color:no.light,flat:!0},{size:[s,.08,.14],pos:[0,.06,-.43],color:no.light,flat:!0}])}return ha}const Yc=new Yt({vertexColors:!0,transparent:!0,opacity:.34,depthWrite:!1}),qc=new Yt({color:no.light,transparent:!0,opacity:.3,depthWrite:!1}),Zc=new Yt({vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1}),Fe=Wt.columnLimit,Ei=Wt.columnLimitLeft,si=-.14,Gx=1718775674,Vx=1936617335,Wx={...Js[0].palette,ice:ue.palette.ice,iceLine:ue.palette.iceLine,hole:ue.palette.hole,sand:Pt.sand,sandWet:Pt.sandWet,foam:Pt.foam,verge:Pt.verge,scrub:Pt.scrub,scrubAlt:Pt.scrubAlt,peak:Pt.rockDark,crag:Pt.rock,foot:Pt.rockLight},Xx=["road","water","field","rail"],Yx=["water","rail"],gr=["road","field","rail"];function Wo(s){return s==="road"||s==="field"}function Xo(s){return gr.includes(s)||s==="water"}function fa(s){return(s==="water"?si:0)+Pt.portal.height}let ua=null;function Kc(){return ua||(ua=Ye([{size:[.18,.18,.18],pos:[0,0,0],color:16777215,flat:!0}])),ua}function qx(){return Math.floor(Math.random()*ve.length)}function Zx(s,t,e){if(s==="water"){const{start:i,end:n,wideFromRow:o}=Xt.riverWidth,r=Math.min(1,Math.max(0,e/o)),a=Math.round(i+(n-i)*r);return 1+t.int(Math.max(1,a))}return s==="road"?e<Xt.warmupRows?1:1+t.int(3):s==="field"?1+t.int(2):1}class Kx{constructor(t){this.scene=t,this.group=new Ue,t.add(this.group),this.lanes=new Map,this.meshPool=new Map,this.seed=1,this.nextRow=0,this.hazardRun=0,this.restRun=0,this.pending=null,this.lastGroupKind=null,this.lastWaterDir=0,this.activeCollectibles=[],this.roamers=[],this.waves=[],this.focusRow=0,this.openWorld=!1,this.plans=new Map,this.takenRows=new Set,this.frozenNext=-1}reset(t){for(const e of[...this.lanes.keys()])this.retireLane(e);this.seed=t>>>0,this.nextRow=this.openWorld?0:-11,this.plans.clear(),this.takenRows.clear(),this.frozenNext=-1,this.hazardRun=0,this.restRun=0,this.pending=null,this.lastGroupKind=null,this.lastWaterDir=0,this.activeCollectibles=[],this.lastMooringRow=-1/0;for(const e of this.roamers)this.release(e.entity);this.roamers.length=0,this.beachSeeded=!1,this.quiet=null,this.focusRow=0,this.ensureAhead(0)}laneAt(t){return this.lanes.get(t)}ensureAhead(t){const e=t+Wt.generateAhead;let i=0;for(;this.nextRow<=e&&i++<4e3;)this.generateNext();this.openWorld&&this.fillRows(t-Wt.keepBehind,e)}fillRows(t,e){for(let i=t;i<=e;i++)this.lanes.has(i)||(i<0?this.buildFrozenRow(i):i<this.nextRow&&this.rebuildRow(i))}recycleAround(t){const e=t-Wt.keepBehind-2,i=t+Wt.generateAhead+4;for(const n of[...this.lanes.values()])(n.row<e||n.row>i)&&this.retireLane(n.row)}kindAt(t){return this.lanes.get(t)?.kind??this.plans.get(t)?.kind}rebuildRow(t){const e=this.plans.get(t);if(!e)return;const i=cn(this.seed,t);i.skip(e.skip);const{stage:n}=Fi(Math.max(0,t)),o=this.lastWaterDir;this.lastWaterDir=e.waterPrev,this.rebuilding=!0;const r=this.buildLane(t,e.kind,i,n,e.groupIndex,e.groupSize,e);this.rebuilding=!1,this.lastWaterDir=o,this.dropTaken(r)}dropTaken(t){if(!t.collectible||!this.takenRows.has(t.row))return;const e=this.activeCollectibles.indexOf(t.collectible);e>=0&&this.activeCollectibles.splice(e,1),t.collectible.mesh.parent?.remove(t.collectible.mesh),t.mooring&&(t.mooring.map=null),t.collectible=null}recycleBehind(t){const e=t-Wt.keepBehind;for(const i of this.lanes.values())i.row<e&&this.retireLane(i.row)}landShore(t){return-Ei-this.shoreWidth(t)}buildFrozenRow(t){this.planFrozenTo(t);const e=this.plans.get(t);if(!e)return;const i=cn(this.seed^Vx,t),n=this.buildLane(t,e.kind,i,rr,0,1,e);this.dropTaken(n)}planFrozenTo(t){let e=0;for(;this.frozenNext>=t&&e++<1e3;)this.planFrozenStretch()}planFrozenStretch(){const t=this.frozenNext;if(t===-1){for(let a=0;a<ue.openingRows;a++)this.plans.set(-1-a,{kind:"snow",props:[]});this.frozenNext=-1-ue.openingRows;return}const e=cn(this.seed^Gx,t),i=-t,n=Math.max(1,Math.round($e(ue.lake.rows,i))+e.int(2));this.planLake(t,n,i,e).forEach((a,l)=>{this.plans.set(t-l,{kind:"ice",...a})});let o=t-n;this.plans.set(o--,{kind:"snow",props:[]});const r=ue.rest.min+e.int(ue.rest.max-ue.rest.min+1);for(let a=0;a<r;a++)this.plans.set(o--,{kind:"snow",props:this.planProps(e)});r>0&&this.plans.set(o--,{kind:"snow",props:[]}),this.frozenNext=o}planProps(t){const e=ue.props.filter(r=>_e.has(r)),i=ue.decor.min+t.int(ue.decor.max-ue.decor.min+1),n=[],o=new Set;for(let r=0;r<i;r++){const a=t.int(Fe+Ei+1)-Ei;o.has(a)||(o.add(a),n.push({name:t.pick(e),variant:String(t.int(3)),col:a}))}return n}planLake(t,e,i,n){const o=ue.lake,r=Math.round($e(o.holes,i)),a=Math.round($e(o.blocks,i)),l=Math.round($e(o.moves,i));let c=null,h=null;for(let u=0;u<o.attempts;u++){const d=Math.max(0,r-Math.floor(u/6));h=[];for(let x=0;x<e;x++){const p=this.landShore(t-x),m=new Set,w=M=>{const S=[];for(let I=0;I<M*4&&S.length<M;I++){const R=p+n.int(Fe-p+1);m.has(R)||(m.add(R),S.push(R))}return S};h.push({blocks:w(a),holes:w(d)})}l>=2&&this.plugChannels(t,h,n);const g=this.lakeMoves(t,h);if(g!==1/0&&((!c||g>c.moves)&&(c={lake:h,moves:g}),g>=l))break}if(c)return c.lake;const f=n.int(Fe);for(const u of h)u.blocks=u.blocks.filter(d=>d!==f),u.holes=u.holes.filter(d=>d!==f);return h}plugChannels(t,e,i){let n=this.landShore(t+1);for(let o=0;o<=e.length;o++)n=Math.max(n,this.landShore(t-o));for(let o=n;o<=Fe;o++){if(e.some(a=>a.blocks.includes(o)||a.holes.includes(o)))continue;const r=e[i.int(e.length)];i.chance(ue.lake.plugBlocks)?r.blocks.push(o):r.holes.push(o)}}lakeMoves(t,e){const i=t-e.length+1,n=e.map(h=>({blocks:new Set(h.blocks),holes:new Set(h.holes)})),o=(h,f,u,d)=>{let g=!1;for(let x=0;x<64;x++){const p=h+u,m=f+d,w=this.landShore(p);if(m>Fe||m<w-2)return g?[h,f]:null;if(m<w)return"dead";if(p>t||p<i)return[p,m];const M=n[t-p];if(M.blocks.has(m))return g?[h,f]:null;if(M.holes.has(m))return"dead";h=p,f=m,g=!0}return[h,f]},r=t+1,a=[[-1,0],[1,0],[0,-1],[0,1]];let l=[];for(let h=this.landShore(r);h<=Fe;h++)l.push([r,h]);const c=new Set;for(let h=1;l.length&&h<=40;h++){const f=[];for(const[u,d]of l)for(const[g,x]of u===r?[[-1,0]]:a){const p=o(u,d,g,x);if(!p||p==="dead")continue;const[m,w]=p;if(m<i)return h;if(m>t)continue;const M=`${m},${w}`;c.has(M)||(c.add(M),f.push(p))}l=f}return 1/0}buildSnow(t,e,i,n,o){this.slab(e,t.ground),t.blocked=new Set;for(const r of o.props)t.blocked.add(r.col),t.props.push({...r,hits:0});this.addScenery(e,i,n,t.row),t.baseParts=e.slice();for(const r of t.props)e.push(...this.decorParts(r.name,r.variant,r.x??r.col));o.props.length&&this.maybeCollectible(t,i,n)}buildIce(t,e,i,n,o){const r=t.palette,a=-19.5-this.shoreWidth(t.row);this.strip(e,a,re,0,.5,r.ice);for(let l=a+1;l<re;l+=2+i.int(3))e.push({size:[.5+i()*.9,.012,.05],pos:[l,.006,(i()-.5)*.7],color:r.iceLine,rotY:(i()-.5)*.8,flat:!0});t.holes=new Set(o.holes);for(const l of o.holes)e.push({size:[.96,.014,.96],pos:[l,.007,0],color:r.iceLine,flat:!0}),e.push({size:[.78,.02,.78],pos:[l,.012,0],color:r.hole,flat:!0});t.blocked=new Set;for(const l of o.blocks)t.blocked.add(l),t.props.push({name:"iceblock",variant:String(i.int(3)),col:l,hits:0});this.addScenery(e,i,n,t.row),t.baseParts=e.slice();for(const l of t.props)e.push(...this.decorParts(l.name,l.variant,l.x??l.col))}generateNext(){const t=this.nextRow,e=cn(this.seed,t),{stage:i}=Fi(Math.max(0,t)),n=Math.min(1,Math.max(0,t)/Xt.warmupRows),o=pi.lerp(Xt.warmupHazardScale,1,n);let r;if(t<=Xt.safeStartRows)r="grass";else if(this.pending&&this.pending.left>0)r=this.pending.kind;else{const f=$e(Xt.hazardChance,Math.max(0,t))*i.hazardMul*o,u=$e(Xt.maxHazardRun,Math.max(0,t));let d=e.chance(f);if(this.hazardRun>=u&&(d=!1),this.restRun>=Xt.maxRestRun&&(d=!0),d){const g={};for(const m in i.laneWeights)Xx.includes(m)&&(m==="water"&&t<Xt.waterFromRow||Yx.includes(m)&&this.lastGroupKind===m||(g[m]=i.laneWeights[m]));r=Object.keys(g).length?Dx(e,g):"road";const x=Math.max(1,Math.ceil(u)-this.hazardRun),p=Math.min(Zx(r,e,t),x);this.pending={kind:r,left:p,index:0,size:p},this.lastGroupKind=r}else r="grass",this.pending={kind:r,left:1,index:0,size:1},this.lastGroupKind=r}const a=this.pending?this.pending.index:0,l=this.pending?this.pending.size:1;this.pending&&(this.pending.left-=1,this.pending.index+=1,this.pending.left<=0&&(this.pending=null)),r==="grass"?(this.hazardRun=0,this.restRun+=1):(this.restRun=0,this.hazardRun+=1);const c={kind:r,groupIndex:a,groupSize:l,skip:e.calls(),waterPrev:this.lastWaterDir},h=this.buildLane(t,r,e,i,a,l);c.mooring=h.gen.mooring,this.plans.set(t,c),this.nextRow=t+1}buildLane(t,e,i,n,o,r,a=null){const l=this.paletteFor(t,n),c={row:t,kind:e,palette:l,z:-t*Wt.tile,blocked:null,props:[],baseParts:null,frozen:0,restoreIn:0,freezeMesh:null,vehicles:[],floats:[],stream:null,collectible:null,surfaceY:e==="water"?si:0,group:new Ue};c.group.position.z=c.z,c.gen={kind:e,groupIndex:o,groupSize:r},this.group.add(c.group),c.ground=e==="water"?l.water:e==="road"?l.path:e==="rail"?l.rail:e==="field"?he(l.grass,0,.06):e==="ice"?l.ice:this.isPaved(t,n)||t%2===0?l.grass:l.grassAlt;const h=[];switch(this.buildRange(c,h,i,n,t,e),this.buildShore(c,h,i,n,t,e),e){case"road":this.buildRoad(c,h,i,n,o,r);break;case"water":this.buildWater(c,h,i,n);break;case"field":this.buildField(c,h,i,n);break;case"rail":this.buildRail(c,h,i,n);break;case"snow":this.buildSnow(c,h,i,n,a);break;case"ice":this.buildIce(c,h,i,n,a);break;case"grass":default:this.buildGrass(c,h,i,n,t);break}const f=a?!!a.mooring:e==="grass"&&this.wantsMooring(t);return c.gen.mooring=f,f&&this.addMooring(c,h),c.terrainGeometry=Ye(h),c.terrain=new lt(c.terrainGeometry,ke),c.terrain.frustumCulled=!1,c.group.add(c.terrain),this.lanes.set(t,c),c}paletteFor(t,e){if(e===rr){const a=Math.min(1,-t/ue.blendRows);if(a>=1)return e.palette;const l={};for(const c in e.palette)l[c]=he(Wx[c],e.palette[c],a);return l}const{index:i,t:n}=Vc(Math.max(0,t));if(n>=1||i===0)return e.palette;const o=Js[i-1].palette,r={};for(const a in e.palette)r[a]=he(o[a]??e.palette[a],e.palette[a],n);return r}slab(t,e,i=0,n=.5,o=Ms){this.strip(t,o,re,i,n,e)}strip(t,e,i,n,o,r,a=1,l=0){i<=e||t.push({size:[i-e,o,a],pos:[(e+i)/2,n-o/2,l],color:r})}buildGrass(t,e,i,n,o){const r=t.palette;if(this.isPaved(o,n)){this.slab(e,t.ground);for(let f=Os;f<=re;f+=1)e.push({size:[.05,.03,1],pos:[f+.5,.01,0],color:r.grassAlt});for(const f of[-.47,.47])this.strip(e,Os,re,.02,.06,r.grassAlt,.06,f)}else this.slab(e,t.ground);t.blocked=new Set;const a=Math.min(1,Math.max(0,o)/Xt.warmupRows),l=Xt.decorPerRow,c=o<=Xt.safeStartRows?0:Math.round(pi.lerp(l.start,l.end,a)+i.int(l.jitter)),h=n.decor.filter(f=>_e.has(f));for(let f=0;f<c;f++){const u=i.int(Fe+Ei+1)-Ei;if(t.blocked.size>=Fe+Ei-1)break;if(t.blocked.has(u))continue;const d=u>Fe-ar;if(d&&!i.chance(Pt.vergeRocks.prop))continue;const g=u<Oe,x=d?Pt.decor.verge.filter(m=>_e.has(m)):g?Pt.decor.beach.filter(m=>_e.has(m)):h,p=x.length?i.pick(x):"bush";t.blocked.add(u),t.props.push({name:p,variant:String(i.int(3)),col:u,hits:0})}this.addScenery(e,i,n,t.row),t.baseParts=e.slice();for(const f of t.props)e.push(...this.decorParts(f.name,f.variant,f.x??f.col));this.addBayCar(t,e,i),this.maybeCollectible(t,i,n)}addBayCar(t,e,i){if(!i.chance(Pt.bays.chance))return;const n=[Math.round(Oe-2.5),Math.round(Oe-1.5)];if(n.some(a=>t.blocked.has(a)))return;const o=String(i.int(ve.length)),r=Oe-2;for(const a of n)t.blocked.add(a);t.props.push({name:"car",variant:o,col:n[1],x:r,cols:n,hits:0}),e.push(...this.decorParts("car",o,r))}rebuildTerrain(t){const e=t.baseParts?t.baseParts.slice():[];for(const i of t.props)e.push(...this.decorParts(i.name,i.variant,i.x??i.col));t.terrainGeometry.dispose(),t.terrainGeometry=Ye(e),t.terrain.geometry=t.terrainGeometry}isPaved(t,e){return e.paved?Vc(Math.max(0,t)).t>=.5:!1}addScenery(t,e,i,n){const o=(i.scenery??i.decor).filter(r=>_e.has(r));if(o.length)for(let r=0;r<2;r++){if(!e.chance(.55))continue;const a=re+1.5+e.int(10)+.5,l=this.rangeHeight(a,n);l>Pt.ridge.treeline||t.push(...this.decorParts(e.pick(o),String(e.int(3)),a,l))}}rangeHeight(t,e){const i=Pt.ridge,n=Math.max(0,t-re),o=Math.max(0,e),r=i.wobble*Math.min(1,n/i.wobbleFrom),a=Math.sin(n*.29+o*.21)*r+Math.sin(n*.11-o*.073+2.1)*r*.8+Math.sin(o*.041+1.3)*r*.5,l=Math.min(i.hides,i.floor+n*.62);return Math.max(l,Math.pow(n,i.power)*i.rise+i.base+a)}buildRange(t,e,i,n,o,r){const a=Xo(r),l=r==="water"?si:0,c=fa(r);if(!a){const u=this.kindAt(o-1);Xo(u)&&this.wingWall(e,.56,fa(u));const d=this.rebuilding?null:this.lanes.get(o+1);Xo(d?.kind)&&this.wingWall(e,-.56,fa(d.kind))}const h=n.paved||n.id==="beyond";let f=!1;for(let u=re+.5;u<Bo;u+=1){const d=this.rangeHeight(u,o),g=t.palette,x=d>8.5?g.peak??Pt.rockDark:d>3.5?g.crag??Pt.rock:g.foot??Pt.rockLight;if(a&&u<fi){const p=Math.max(d,c+.55);this.strip(e,u-.5,u+.5,p,p-c,x),f||(f=!0,this.strip(e,re-.35,u+.5,c+Pt.portal.rim,Pt.portal.rim+.5,Pt.portal.collar),Xo(this.kindAt(o-1))||this.wingWall(e,.44,c));continue}if(this.strip(e,u-.5,u+.5,d,d+.6,x),!h&&d>1.4&&d<Pt.ridge.treeline&&i.chance(.5)){const p=i.chance(.5)?g.scrub??Pt.scrub:g.scrubAlt??Pt.scrubAlt;this.strip(e,u-.5,u+.5,d+.13,.16,p)}}if(a){const u=r==="water"?t.palette.water:r==="rail"?t.palette.rail:t.palette.path;this.strip(e,re,fi,l,.5,u),this.strip(e,re+Pt.portal.shadow,fi,l+.012,.1,Pt.portal.dark)}if((r==="grass"||r==="field"||r==="snow")&&(this.gradient(e,re-ar,re,t.ground,t.palette.verge??Pt.verge,i),i.chance(Pt.vergeRocks.scatter))){const u=.5+i()*.5,d=.12+i()*.22;e.push({size:[d,d*.7,d],pos:[re-u*ar,d*.35,(i()-.5)*.7],color:i.chance(.5)?Pt.rock:Pt.rockDark})}}wantsMooring(t){const e=Pt.mooring;return this.lastMooringRow===-1/0&&t>=e.first?(this.lastMooringRow=t,!0):t<e.fromRow||t-this.lastMooringRow<e.minGap||!cn(this.seed^1836019570,t).chance(e.chance)?!1:(this.lastMooringRow=t,!0)}addMooring(t,e){const i=Pt.mooring,n=cn(this.seed^7168368,t.row),o=this.waterlineAt(t.row),r=this.shoreCol(t.row),a=2.3,l=new lt(_e.get("rowboat",String(n.int(4))),ke),c={mesh:l,x:o-a/2+.05,len:a,halfLen:a/2,model:"rowboat"};l.position.set(c.x,si,0),l.frustumCulled=!1,t.group.add(l);const h=[{size:[.16,.5,.16],pos:[o+.45,.25,-.34],color:5913122},{size:[.22,.06,.22],pos:[o+.45,.52,-.34],color:3877402}];e.push(...h),t.baseParts?.push(...h);const f=l0([{size:[.56,.035,.035],pos:[0,0,0],color:14272931,rotY:.7}]);if(f.position.set(o+.25,.4,-.17),t.group.add(f),t.collectible){const x=this.activeCollectibles.indexOf(t.collectible);x>=0&&this.activeCollectibles.splice(x,1),t.group.remove(t.collectible.mesh)}const u=_e.get("treasuremap"),d=new lt(u,ke),g=u.boundingBox;d.scale.setScalar(i.mapSize/Math.max(g.max.x-g.min.x,g.max.z-g.min.z)),d.position.set(r,Zi.hoverHeight,0),t.group.add(d),t.collectible={mesh:d,col:r,type:"treasuremap",voyage:!0,points:i.points,label:i.label,taken:!1,phase:n()*Math.PI*2},this.activeCollectibles.push(t.collectible),t.mooring={boat:c,rope:f,map:t.collectible,gone:!1}}wingWall(t,e,i){t.push({size:[1.55+.35,i+Pt.portal.rim,.13],pos:[re+.6,(i+Pt.portal.rim)/2,e],color:Pt.portal.collar})}shoreWidth(t){const{width:e,wobble:i,wavelength:n}=Pt.surf,o=this.openWorld?Math.abs(Math.round(t)):Math.max(0,Math.round(t)),r=e+Math.sin(o/n*Math.PI*2)*i*.6+Math.sin((o/(n*.37)+1.1)*Math.PI*2)*i*.4;return Math.max(1,Math.round(r))}shoreCol(t){return this.lanes.get(t)?.kind==="water"?-Ei:-Ei-this.shoreWidth(t)}buildShore(t,e,i,n,o,r,{under:a=Wo(r),cutting:l=a}={}){const c=t.palette,h=-19.5-this.shoreWidth(o);if(this.closeCutting(t,e,o,r),this.strip(e,-Bo,h,si-.06,.6,c.waterDeep),this.strip(e,-Bo,h-.3,si-.02,.08,c.water),r==="water"){this.strip(e,h-.3,Os,si-.03,.56,c.waterDeep),this.strip(e,h-.3,Os,si,.06,c.water);return}if(r==="ice"){this.strip(e,h-.12,h+.1,.02,.08,c.foam??Pt.foam);return}if(this.strip(e,h,-19.5,-.015,.5,c.sandWet??Pt.sandWet),this.strip(e,h,h+.4,.02,.07,c.foam??Pt.foam),this.strip(e,-19.5,Oe,.008,.1,c.sand??Pt.sand),a){l&&this.buildUnderpass(t,e);return}this.gradient(e,Oe,Os,c.sand??Pt.sand,t.ground,i)}buildUnderpass(t,e){const i=Pt.underpass,n=Je-we,o=Math.atan2(i.depth,n),r=Math.hypot(n,i.depth),a=.5,l=Math.sin(o)*a*.5,c=-Math.cos(o)*a*.5,h=r/i.shades+.14;for(let f=0;f<i.shades;f++){const u=(f+.5)/i.shades,d=f/(i.shades-1);e.push({size:[h,a,1],pos:[Je-u*n+l,-u*i.depth+c,0],rotZ:o,color:he(t.ground,i.dark,Math.pow(d,1.7))})}this.strip(e,-19.5,we+.02,-.02,i.depth+.3,i.dark),this.strip(e,we,we+.14,-.03,.12,i.collar)}closeCutting(t,e,i,n){if(Wo(n)||!Wo(this.kindAt(i-1)))return;const o=Pt.underpass,r=Je-we,a=t.surfaceY,l=-1.5-.3,c=r/o.shades;for(let h=0;h<o.shades;h++)e.push({size:[c+.04,a-l,.08],pos:[Je-(h+.5)*c,(a+l)/2,.54],color:he(o.wall,o.dark,Math.pow(h/(o.shades-1),1.7))});e.push({size:[r,.1,.08],pos:[(we+Je)/2,a-.05,.56],color:o.collar})}buildPlatform(t,e,i){const{deck:n,edge:o,height:r}=Pt.platform,a=Oe-2.5;this.strip(e,a,Oe,r,r+.2,n);for(const l of[-.42,.42])e.push({size:[Oe-a,.05,.14],pos:[(a+Oe)/2,r+.02,l],color:o});e.push({size:[.26,.5,.8],pos:[Xc-.3,.25,0],color:9147811})}gradient(t,e,i,n,o,r){const a=i-e;if(a<=0)return;const l=Math.max(2,Math.round(a*3));for(let c=0;c<l;c++){const h=e+c*a/l,f=e+(c+1)*a/l,u=(c+.5)/l,d=u*u*(3-2*u),g=Math.min(1,Math.max(0,d+(r()-.5)*.12));this.strip(t,h,f+.02,.011,.1,he(n,o,g))}}decorParts(t,e,i,n=0){return Px(t,e).map(o=>({...o,pos:[o.pos[0]+i,o.pos[1]+n,o.pos[2]]}))}buildRoad(t,e,i,n,o,r){const a=t.palette;if(this.slab(e,t.ground,0,.5,Je),o<r-1)for(let l=Ho;l<=re;l+=2)e.push({size:[1.1,.03,.09],pos:[l,.01,-.5],color:a.pathLine});o===0&&this.strip(e,Ho,re,.01,.03,a.pathLine,.08,.46),o===r-1&&this.strip(e,Ho,re,.01,.03,a.pathLine,.08,-.46),this.addScenery(e,i,n,t.row),this.fillStream(t,i,n,n.vehicles)}buildField(t,e,i,n){this.slab(e,t.ground,0,.5,Je);for(let r=Ho;r<=re;r+=3)e.push({size:[.12,.03,.9],pos:[r,.01,0],color:15921384});const o=n.runners??n.vehicles;this.fillStream(t,i,n,o,{gapScale:1.25})}buildRail(t,e,i,n){const o=t.palette;if(n.railStyle==="runway"){this.slab(e,t.ground);for(let u=Go;u<=re;u+=2.4)e.push({size:[1.3,.03,.12],pos:[u,.01,0],color:o.pathLine});for(const u of[-.44,.44])this.strip(e,Go,re,.01,.03,o.pathLine,.08,u)}else{this.slab(e,t.ground);const u=he(o.rail,0,.3);for(let d=Go;d<=re;d+=.6)e.push({size:[.26,.08,.86],pos:[d,.04,0],color:u});for(const d of[-.22,.22])this.strip(e,Go,re,.1,.09,11844806,.1,d)}const a=Fe+.7;for(const u of[-a,a])e.push({size:[.12,1.5,.12],pos:[u,.75,0],color:15265010}),e.push({size:[.34,.16,.16],pos:[u,1.42,0],color:3356735}),e.push({size:[.1,.5,.1],pos:[u,.3,0],color:16734797});this.addScenery(e,i,n,t.row);const l=new lt(Kc(),new Yt({color:5906982}));l.frustumCulled=!1,t.group.add(l);const c=new lt(Kc(),l.material);c.position.set(-a*2,0,0),c.frustumCulled=!1,l.add(c),l.position.set(a,1.42,0),t.lights=l;const h=i.weighted(n.trains??[{model:"train",length:12,speedMul:2.6}]),f=Math.max(0,t.row);t.rail={state:"idle",timer:i.range(Xt.rail.gapSeconds.min,Xt.rail.gapSeconds.max),dir:i.sign(),speed:$e(Xt.speed,f)*n.speedMul*(h.speedMul??2.6),spec:h,train:null,flash:0}}buildWater(t,e,i,n){const o=t.palette;this.slab(e,o.waterDeep,si-.06,.5),e.push({size:[Wc,.06,1],pos:[Ox,si-.03,0],color:o.water});for(let l=Ms;l<=re;l+=4)e.push({size:[.8,.02,.1],pos:[l+(i()-.5),si+.01,(i()-.5)*.6],color:he(o.water,16777215,.25)});const r=this.lastWaterDir?-this.lastWaterDir:i.sign();this.lastWaterDir=r;const a=n.floats??[{model:"log",length:3.2,weight:1}];this.fillTraffic(t,i,n,a,{y:si,floats:!0,gapScale:.85,dir:r})}fillStream(t,e,i,n,{gapScale:o=1}={}){const r=Math.max(0,t.row),a=e.weighted(n),l=e.sign(),c=Math.min(1,r/Xt.warmupRows),h=pi.lerp(Xt.warmupSpeedScale,1,c),f=$e(Xt.speed,r)*i.speedMul*(a.speedMul??1)*h*e.range(.9,1.1),u=pi.lerp(Xt.warmupGapScale,1,c),d=$e(Xt.gap,r)*u*o,g=$e(Xt.gapJitter,r)*u*o,x=a.length,p=x+d+e()*g;t.dir=l,t.speed=f,t.spec=a,t.isFloat=!1,t.span=0,t.stream={pitch:p,period:p/f,timer:e()*(p/f),len:x};const m=l<0?fi:we,w=l<0?we:fi,M=Math.sign(w-m);for(let S=e()*p;S<Math.abs(w-m);S+=p)this.addStreetCar(t,m+M*S,String(e.int(ve.length)))}streetY(t){return t>=Je?0:t<=we?-1.5:-1.5*((Je-t)/(Je-we))}addStreetCar(t,e,i){const n=t.spec.length,o=this.acquire(t.spec.model,i);return o.mesh.position.set(e,this.streetY(e),0),o.mesh.rotation.y=t.dir>0?0:Math.PI,t.group.add(o.mesh),o.x=e,o.len=n,o.halfLen=n/2,t.vehicles.push(o),o}updateStream(t,e){const i=t.stream,n=t.dir*t.speed*e,o=we;for(let a=t.vehicles.length-1;a>=0;a--){const l=t.vehicles[a];l.x+=n,l.mesh.position.x=l.x,l.mesh.position.y=this.streetY(l.x),this.stepAnim(l,e,t.speed),(t.dir<0?l.x+l.halfLen<o:l.x-l.halfLen>fi)&&(this.release(l),t.vehicles.splice(a,1))}if(i.timer-=e,i.timer>0)return;i.timer+=i.period;const r=String(qx());this.addStreetCar(t,t.dir<0?fi+i.len/2:o-i.len/2,r)}fillTraffic(t,e,i,n,{y:o=0,floats:r=!1,gapScale:a=1,dir:l=null}={}){const c=Math.max(0,t.row),h=e.weighted(n),f=l??e.sign(),u=Math.min(1,c/Xt.warmupRows),d=pi.lerp(Xt.warmupSpeedScale,1,u),g=r?$e(Xt.speed,c)*.42*i.speedMul*d*e.range(.85,1.15):$e(Xt.speed,c)*i.speedMul*(h.speedMul??1)*d*e.range(.9,1.1),x=pi.lerp(Xt.warmupGapScale,1,u),p=r?Xt.floatGap:Xt.gap,m=r?Xt.floatGapJitter:Xt.gapJitter,w=$e(p,c)*x*a,M=$e(m,c)*x*a,S=h.length,I=Wc+(fi-re)+S*2+2;t.dir=f,t.speed=g,t.reenterX=Math.min(Bo-S/2-.5,fi+S/2+2),t.spec=h,t.isFloat=r;const R=[];let A=Ms-S,L=0,J=0;for(;L<I&&J++<60;){const b=w+e()*M;R.push({x:A,len:S,gap:b});const G=S+b;A+=G,L+=G}t.span=L;const v=e()*L;for(const b of R){const G=String(e.int(ve.length)),F=b.x+v-(b.x+v>fi+S?L:0),X=this.acquire(h.model,G);X.mesh.position.set(F,o,0),X.mesh.rotation.y=f>0?0:Math.PI,t.group.add(X.mesh),X.x=F,X.len=S,X.halfLen=S/2,(r?t.floats:t.vehicles).push(X)}}maybeCollectible(t,e,i){const n=this.openWorld?Math.abs(t.row):Math.max(0,t.row);let o=null,r=null,a=null;const l=M=>Object.entries(M).filter(([,S])=>n>=S.fromRow).map(([S,I])=>({id:S,weight:I.weight})),c=l(Fn.types),h=l(Xe.types);if(c.length&&e.chance(Fn.chance))r=e.weighted(c).id,o=r;else if(h.length&&e.chance(Xe.chance))a=e.weighted(h).id,o=a;else{const M=i.collectibles.filter(S=>_e.has(S));M.length&&e.chance(Zi.chance)&&(o=e.pick(M))}if(!o)return;const f=[];for(let M=-Ei;M<=Fe;M++)(!t.blocked||!t.blocked.has(M))&&f.push(M);if(!f.length)return;const u=e.pick(f),d=r?Fn.types[r]:a?Xe.types[a]:Zi.types[o],g=_e.get(o,String(e.int(5))),x=new lt(g,ke);x.position.set(u,Zi.hoverHeight,0);const p=g.boundingBox,m=Math.max(p.max.x-p.min.x,p.max.y-p.min.y,p.max.z-p.min.z),w=d?.size??(r?Fn.targetSize:a?Xe.targetSize:Zi.targetSize);x.scale.setScalar(m>0?w/m:1),t.group.add(x),t.collectible={mesh:x,col:u,type:o,weapon:r,perk:a,points:d?.points??10,label:d?.label??"",taken:!1,phase:e()*Math.PI*2},this.activeCollectibles.push(t.collectible)}warmUp(){this.buildWaves();const t=Ii.people;for(const e of t.models)if(_e.has(e))for(let i=0;i<t.variants;i++)for(let n=0;n<Ln;n++)_e.get(e,String(i),n);for(let e=0;e<ve.length;e++)_e.get("car",String(e))}addRoamer(t,e,i,n,o){if(!_e.has(t))return null;const r=this.acquire(t,e);r.mesh.position.set(i,0,-n*Wt.tile),r.mesh.rotation.y=0,this.group.add(r.mesh);const a={entity:r,x:i,z:-n*Wt.tile,heading:0,speed:0,...o};return this.roamers.push(a),a}releaseRoamer(t){this.release(this.roamers[t].entity),this.roamers.splice(t,1)}buildWaves(){const t=Pt.waves;if(this.waves.length)return;const e=Ye([{size:[t.width,.05,t.length],pos:[0,0,0],color:t.color,flat:!0}]);for(let i=0;i<t.count;i++){const n=new lt(e,Yc);n.frustumCulled=!1,this.group.add(n),this.waves.push({mesh:n,offset:i/t.count*t.from,drift:i*7%5})}}updateWaves(t){const e=Pt.waves,i=this.waterlineAt(this.focusRow);for(const n of this.waves){n.offset-=e.speed*t,n.offset<=0&&(n.offset+=e.from);const o=n.offset/e.from;n.mesh.position.set(i-n.offset,si+.03,-(this.focusRow+n.drift)*Wt.tile),n.mesh.scale.z=1,n.mesh.visible=o>.06}Yc.opacity=.34}waterlineAt(t){return-19.5-this.shoreWidth(t)}spawnPerson(t){const e=Ii.people;if(this.lanes.get(Math.round(t))?.kind==="water"||this.isQuiet(t)||this.openWorld&&t<0)return null;const i=e.models.filter(c=>_e.has(c));if(!i.length)return null;const n=Math.random()<e.joggerChance,o=this.waterlineAt(t)+.3,r=Oe-.35,a=o+Math.random()*Math.max(.4,r-o),l=n?Math.random()<.5?Math.PI/2:-Math.PI/2:Math.random()*Math.PI*2;return this.addRoamer(i[Math.floor(Math.random()*i.length)],String(Math.floor(Math.random()*e.variants)),a,t,{kind:"person",heading:l,target:l,jogger:n,speed:n?e.joggerSpeed:e.speed.min+Math.random()*(e.speed.max-e.speed.min),legLeft:e.legSeconds.min+Math.random()*(e.legSeconds.max-e.legSeconds.min)})}updateRoamers(t){const e=Ii.people,i=this.focusRow;for(let n=this.roamers.length-1;n>=0;n--){const o=this.roamers[n],r=-o.z/Wt.tile;if(Math.abs(r-i)>Ii.window+3){this.releaseRoamer(n);continue}if(o.kind==="person"){o.legLeft-=t,o.legLeft<=0&&(o.legLeft=e.legSeconds.min+Math.random()*(e.legSeconds.max-e.legSeconds.min),o.jogger||(o.target=Math.random()*Math.PI*2));const a=this.waterlineAt(r)+.25,l=Oe-.25;o.x<a?o.target=0:o.x>l&&(o.target=Math.PI);const c=Math.round(r);if(this.lanes.get(c)?.kind==="water"){const g=this.lanes.get(c-1)?.kind==="water"?1:-1;o.heading=Math.PI/2*g,o.target=o.heading}let h=(o.target-o.heading)%(Math.PI*2);h>Math.PI&&(h-=Math.PI*2),h<-Math.PI&&(h+=Math.PI*2),o.heading+=Math.max(-2.6*t,Math.min(e.turnRate*t,h)),o.x=Math.min(l,Math.max(a,o.x+Math.cos(o.heading)*o.speed*t));const f=Math.sin(o.heading)*o.speed*t,u=Math.round(-(o.z+f)/Wt.tile),d=this.openWorld&&u<0;u!==c&&(d||this.lanes.get(u)?.kind==="water"||this.isQuiet(u)&&!this.isQuiet(c))?(o.heading=-o.heading,o.target=o.heading):o.z+=f,o.entity.mesh.position.set(o.x,0,o.z),o.entity.mesh.rotation.y=-o.heading,this.stepAnim(o.entity,t,o.speed);continue}}this.stockBeach(t)}stockBeach(t){const e=Math.round(Ii.people.density*Ii.window*2/20);let i=0;for(const n of this.roamers)n.kind==="person"&&i++;if(this.beachSeeded){if(i<e){const n=Math.random()<.75;this.spawnPerson(this.focusRow+(n?Ii.window:-22))}}else{this.beachSeeded=!0;for(let n=i;n<e;n++)this.spawnPerson(this.focusRow-Ii.window+Math.random()*Ii.window*2)}}clearBeach(t,e){this.quiet={from:t-e,to:t+e};for(let i=this.roamers.length-1;i>=0;i--){const n=this.roamers[i];n.kind==="person"&&this.isQuiet(-n.z/Wt.tile)&&this.releaseRoamer(i)}}isQuiet(t){const e=this.quiet;return!!e&&t>=e.from-.5&&t<=e.to+.5}roamerAt(t,e,i){const n=i+Ii.people.hitRadius;for(const o of this.roamers)if(Math.hypot(o.x-t,o.z-e)<n)return o;return null}clearRoamers(t,e,i,n=i){const o=[];for(let r=this.roamers.length-1;r>=0;r--){const a=this.roamers[r];Math.abs(a.x-t)>i||Math.abs(a.z-e)>n||(o.push({x:a.x,z:a.z,kind:"person"}),this.releaseRoamer(r))}return o}stepAnim(t,e,i){if(!t.animRate)return;t.framePos+=e*Math.max(.6,i)*t.animRate*Ln;const n=Math.floor(t.framePos)%Ln;n!==t.frame&&(t.frame=n,t.mesh.geometry=_e.get(t.model,t.variant,n))}acquire(t,e){const i=`${t}:${e}`,n=kx[t]??null,o=this.meshPool.get(i);let r=o&&o.length?o.pop():null;return r?(r.mesh.visible=!0,r.damage=0):r={mesh:new lt(_e.get(t,e,0),ke),key:i,model:t,variant:e,x:0,len:1,halfLen:.5,damage:0},r.animRate=n?n.rate:0,r.frame=n?Math.floor(Math.random()*Ln):0,r.framePos=r.frame,n&&(r.mesh.geometry=_e.get(t,e,r.frame)),r}release(t){t.mesh.parent?.remove(t.mesh);let e=this.meshPool.get(t.key);e||(e=[],this.meshPool.set(t.key,e)),e.length<24&&e.push(t)}retireLane(t){const e=this.lanes.get(t);if(e){e.collectible?.taken&&this.takenRows.add(t),e.freezeMesh&&this.thaw(e);for(const i of e.vehicles)this.release(i);for(const i of e.floats)this.release(i);if(e.collectible){const i=this.activeCollectibles.indexOf(e.collectible);i>=0&&this.activeCollectibles.splice(i,1),e.collectible.mesh.parent?.remove(e.collectible.mesh)}e.lights&&(e.lights.material.dispose(),e.lights=null),e.mooring?.rope.geometry.dispose(),e.terrainGeometry.dispose(),this.group.remove(e.group),this.lanes.delete(t)}}update(t,e){const i=.5+.5*Math.sin(e*Math.PI*2*no.pulseHz),{min:n,max:o}=no.opacity;qc.opacity=n+(o-n)*i,Zc.opacity=.75+.25*i;const r=Math.floor(e*12)%2===0;for(const a of[...this.lanes.values()]){if(a.restoreIn>0&&(a.restoreIn-=t,a.restoreIn<=0&&a.row!==this.focusRow)){this.restoreLane(a.row);continue}if(a.frozen>0){if(a.frozen-=t,a.frozen<=0)this.thaw(a);else{const h=a.frozen>=1||r;a.freezeMesh&&(a.freezeMesh.visible=h),a.freezeBars&&(a.freezeBars.visible=h)}continue}if(a.rail&&this.updateRail(a,t),a.stream){this.updateStream(a,t);continue}if(!a.span)continue;const l=a.dir*a.speed*t,c=Math.max(.6,a.speed);for(const h of[a.vehicles,a.floats])for(const f of h)if(f.x+=l,a.dir>0&&f.x-f.halfLen>fi?f.x-=a.span:a.dir<0&&f.x<a.reenterX-a.span&&(f.x+=a.span),f.mesh.position.x=f.x,f.animRate){f.framePos+=t*c*f.animRate*Ln;const u=Math.floor(f.framePos)%Ln;u!==f.frame&&(f.frame=u,f.mesh.geometry=_e.get(f.model,f.variant,u))}}this.updateRoamers(t),this.updateWaves(t);for(const a of this.lanes.values()){const l=a.mooring;!l||l.gone||(l.boat.mesh.position.y=si+Math.sin(e*1.8+a.row)*.03,l.boat.mesh.rotation.x=Math.sin(e*1.3+a.row)*.05,l.boat.mesh.rotation.y=Math.sin(e*.7+a.row)*.05)}for(const a of this.activeCollectibles)a.taken||(a.mesh.rotation.y=e*Zi.spinSpeed+a.phase,a.mesh.position.y=Zi.hoverHeight+Math.sin(e*Zi.bobSpeed+a.phase)*Zi.bobHeight)}updateRail(t,e){const i=t.rail,n=Xt.rail;if(i.timer-=e,i.state==="idle"){t.lights.material.color.setHex(5906982),i.timer<=0&&(i.state="warn",i.timer=n.warnSeconds,Math.abs(-t.z/Wt.tile-this.focusRow)<7&&this.onSound?.("bell"));return}if(i.state!=="idle"&&(i.flash+=e*n.flashesPerSecond,t.lights.material.color.setHex(Math.floor(i.flash)%2?16726832:5906982)),i.state==="warn"){if(i.timer<=0){const o=i.spec.length,r=this.acquire(i.spec.model,"0");r.len=o,r.halfLen=o/2,r.x=fi+o,r.mesh.position.set(r.x,0,0),r.mesh.rotation.y=Math.PI,t.group.add(r.mesh),i.train=r,i.vel=i.speed,t.vehicles.push(r),i.state="arriving"}return}if(i.state==="arriving"){const o=i.train,r=Xc+o.halfLen,a=Math.max(0,o.x-r),l=i.speed*Math.max(.14,Math.min(1,a/n.brakeTiles));o.x=Math.max(r,o.x-l*e),o.mesh.position.x=o.x,o.x-r<.02&&(i.state="dwell",i.timer=n.dwellSeconds);return}if(i.state==="dwell"){i.timer<=0&&(i.state="departing",i.vel=0,i.train.mesh.rotation.y=0);return}if(i.state==="departing"){const o=i.train;i.vel=Math.min(i.speed,i.vel+n.acceleration*e),o.x+=i.vel*e,o.mesh.position.x=o.x,o.x-o.halfLen>fi&&(this.release(o),t.vehicles.length=0,i.train=null,i.state="idle",i.timer=n.gapSeconds.min+Math.random()*(n.gapSeconds.max-n.gapSeconds.min))}}detonate(t,e,i=Ki.restoreSeconds){const n=[];for(let o=t;o<t+e;o++){const r=this.lanes.get(o);!r||r.kind==="cleared"||(this.flattenLane(r),r.restoreIn=i+(o-t)*Ki.restorePerRow,n.push(o))}if(n.length){const o=-(t+(e-1)/2)*Wt.tile;this.clearRoamers(Oe-3,o,12,e/2+.5)}return n}flattenLane(t){for(const o of t.vehicles)this.release(o);for(const o of t.floats)this.release(o);t.vehicles=[],t.floats=[],t.span=0,t.blocked=new Set,t.props=[],t.baseParts=null,t.freezeMesh&&this.thaw(t),t.kind="cleared",t.surfaceY=0,t.holes=null,t.stream=null,t.rail&&(t.rail=null,t.lights&&(t.lights.parent?.remove(t.lights),t.lights.material.dispose(),t.lights=null));const e=[],i=cn(this.seed,t.row),n=this.openWorld&&t.row<0?rr:Fi(Math.max(0,t.row)).stage;t.ground=Ki.ground,this.buildRange(t,e,i,n,t.row,"grass"),this.buildShore(t,e,i,n,t.row,"grass",{under:!0,cutting:!1}),this.strip(e,we,ca,0,.5,Ki.ground);for(let o=0;o<Ki.debrisPerLane;o++){const r=we+Math.random()*(ca-we),a=.16+Math.random()*.34;e.push({size:[a,.06+Math.random()*.08,a*(.5+Math.random())],pos:[r,.04,(Math.random()-.5)*.7],color:Math.random()<.45?Ki.scorch:Ki.rubble,rotY:Math.random()*Math.PI})}for(let o=0;o<3;o++)e.push({size:[1.2+Math.random()*2.4,.03,.8],pos:[we+Math.random()*(ca-we),.015,(Math.random()-.5)*.3],color:Ki.scorch,rotY:Math.random()*.4,flat:!0});t.terrainGeometry.dispose(),t.terrainGeometry=Ye(e),t.terrain.geometry=t.terrainGeometry}nearestMooring(t){let e=null;for(const i of this.lanes.values()){const n=i.mooring;!n||n.gone||(!e||Math.abs(i.row-t)<Math.abs(e.row-t))&&(e={row:i.row,x:n.boat.x})}return e}nearestTunnel(t){let e=null;for(const i of this.lanes.values())i.row<1||!this.tunnelAt(i.row,Fe+1)||(!e||Math.abs(i.row-t)<Math.abs(e.row-t))&&(e={row:i.row,x:Fe-.2});return e}isBlocked(t,e){if(e<this.shoreCol(t)||e>Fe||e>we&&e<Je&&this.lanes.get(t)?.stream)return!0;const i=this.lanes.get(t);return i?!!(i.blocked&&i.blocked.has(e)):!1}holeAt(t,e){return!!this.lanes.get(t)?.holes?.has(e)}tunnelAt(t,e){const i=this.lanes.get(t);if(!i)return null;if(e===Fe+1&&gr.includes(i.kind))return{side:"range",y:0};if(e>we&&e<Je&&i.stream&&Wo(i.kind)){const n=Pt.underpass;return{side:"beach",y:-((Je-e)/(Je-we))*n.depth}}return null}mooringAt(t,e){const i=this.lanes.get(t)?.mooring;return!i||i.gone?null:Math.abs(e-i.boat.x)<=i.boat.halfLen?i:null}onMooring(t,e){const i=t?.mooring;return!!(i&&!i.gone&&Math.abs(e-i.boat.x)<i.boat.halfLen+.15)}castOff(t){const e=t.mooring;return!e||e.gone?null:(e.gone=!0,t.group.remove(e.rope),t.collectible===e.map&&!e.map.taken&&(e.map.taken=!0,e.map.mesh.visible=!1),e.boat)}detachFloat(t,e){const i=t.floats.indexOf(e);return i>=0&&t.floats.splice(i,1),e.mesh.parent?.remove(e.mesh),e}floatAt(t,e){if(!t||t.kind!=="water")return null;for(const i of t.floats)if(Math.abs(e-i.x)<=i.halfLen-.08)return i;return null}freeze(t,e,i){const n=[];for(let o=t;o<t+e;o++){const r=this.lanes.get(o);if(r){if(r.frozen=Math.max(r.frozen,i),!r.freezeMesh){const a=new lt(Bx(),qc);a.position.set(0,.03,0),a.frustumCulled=!1,r.group.add(a),r.freezeMesh=a;const l=new lt(Hx(),Zc);l.frustumCulled=!1,r.group.add(l),r.freezeBars=l}n.push(o)}}return n}thaw(t){t.frozen=0;for(const e of["freezeMesh","freezeBars"])t[e]?.parent?.remove(t[e]),t[e]=null}shatter(t,e,i){const n=[];for(const o of[...t.vehicles])Math.abs(e-o.x)>o.halfLen+i||t.kind!=="rail"&&(n.push({x:o.x,kind:"vehicle"}),this.killVehicle(t,o));if(t.props?.length){for(const o of[...t.props]){const r=o.x??o.col;if(!(Math.abs(e-r)>i)){n.push({x:r,kind:"prop"}),t.props.splice(t.props.indexOf(o),1);for(const a of o.cols??[o.col])t.blocked?.delete(a)}}n.some(o=>o.kind==="prop")&&this.rebuildTerrain(t)}return n}bulletTarget(t,e,i,n=-t*Wt.tile){const o=this.roamerAt(e,n,i);if(o)return{roamer:o};const r=this.lanes.get(t);if(!r||r.kind==="rail")return null;for(const a of r.vehicles)if(!(r.stream&&(a.x<we-.4||a.x>re+.6))&&Math.abs(e-a.x)<a.halfLen+i)return{lane:r,vehicle:a};if(r.props?.length){const a=Math.round(e);if(Math.abs(e-a)<.5+i&&r.blocked?.has(a))return{lane:r,col:a}}return null}restoreLane(t){const e=this.lanes.get(t);if(!e||!e.gen)return;const{kind:i,groupIndex:n,groupSize:o}=e.gen,{stage:r}=Fi(Math.max(0,t));this.retireLane(t),this.openWorld&&t<0?this.buildFrozenRow(t):this.openWorld&&this.plans.has(t)?this.rebuildRow(t):this.buildLane(t,i,cn(this.seed,t),r,n,o);const a=this.lanes.get(t);a&&(a.frozen=Math.max(a.frozen,Ki.restoreGrace))}killVehicle(t,e){const i=t.vehicles.indexOf(e);return i<0?!1:(t.vehicles.splice(i,1),this.release(e),!0)}damageProp(t,e,i=1){const n=t.props?.find(o=>o.col===e||o.cols?.includes(e));if(!n)return null;if(n.hits+=i,n.hits<di.hits.prop)return{prop:n,destroyed:!1};t.props.splice(t.props.indexOf(n),1);for(const o of n.cols??[n.col])t.blocked?.delete(o);return this.rebuildTerrain(t),{prop:n,destroyed:!0}}safeSpotNear(t,e,i){for(let n=t;n>=t-i;n--){const o=this.lanes.get(n);if(o&&!(o.kind==="water"||o.kind==="ice"||gr.includes(o.kind))){for(let r=0;r<=Fe+Ei;r++)for(const a of r===0?[e]:[e-r,e+r])if(!(a<-Ei||a>Fe)&&!o.blocked?.has(a))return{row:n,col:a}}}return{row:Math.max(0,t-1),col:0}}vehicleAt(t,e,i){if(!t||!t.vehicles.length)return null;for(const n of t.vehicles)if(Math.abs(e-n.x)<n.halfLen+i)return n;return null}dispose(){for(const t of[...this.lanes.keys()])this.retireLane(t);this.scene.remove(this.group)}}function xr(s,t){const e=i=>Math.max(0,Math.min(255,(s>>i&255)+t));return e(16)<<16|e(8)<<8|e(0)}const ae={back:5664133,backDark:4215399,belly:15397108,fin:4873844,finEdge:7901352,eye:855828,gill:3359311,gums:13645902,throat:6032416,tooth:16645364};function f0(s,t,e=1){return[{size:[.56*e,.14*e,.09*e],pos:[s+.04*e,t+.07*e,0],color:ae.fin},{size:[.42*e,.18*e,.085*e],pos:[s-.03*e,t+.23*e,0],color:ae.fin},{size:[.28*e,.16*e,.08*e],pos:[s-.1*e,t+.39*e,0],color:ae.fin},{size:[.14*e,.12*e,.07*e],pos:[s-.17*e,t+.52*e,0],color:ae.fin},{size:[.08*e,.44*e,.1*e],pos:[s+.22*e,t+.2*e,0],color:ae.finEdge,rotZ:.42}]}function $x(s){const t=[{size:[1.2,.44,.54],pos:[0,0,0],color:ae.back},{size:[1.36,.16,.48],pos:[.04,-.21,0],color:ae.belly},{size:[.5,.38,.46],pos:[.8,.03,0],color:ae.back},{size:[.36,.26,.34],pos:[1.18,.08,0],color:ae.back},{size:[.14,.18,.22],pos:[1.4,.08,0],color:ae.backDark},{size:[1.6,.06,.2],pos:[.2,.23,0],color:ae.backDark},{size:[.09,.09,.05],pos:[1.08,.14,.22],color:ae.eye},{size:[.09,.09,.05],pos:[1.08,.14,-.22],color:ae.eye},...[.52,.6,.68].flatMap(e=>[{size:[.03,.22,.02],pos:[e,0,.275],color:ae.gill},{size:[.03,.22,.02],pos:[e,0,-.275],color:ae.gill}]),...f0(.05,.2),{size:[.16,.14,.06],pos:[-.6,.24,0],color:ae.fin},{size:[.42,.05,.34],pos:[.42,-.14,.38],color:ae.fin,rotY:.45},{size:[.42,.05,.34],pos:[.42,-.14,-.38],color:ae.fin,rotY:-.45},{size:[.5,.28,.3],pos:[-.82,.02,0],color:ae.back},{size:[.3,.2,.2],pos:[-1.16,.03,0],color:ae.backDark},{size:[.18,.62,.08],pos:[-1.38,.34,0],color:ae.fin,rotZ:.55},{size:[.16,.36,.08],pos:[-1.35,-.2,0],color:ae.fin,rotZ:-.6}];if(s){t.push({size:[.4,.22,.36],pos:[1.06,-.14,0],color:ae.throat},{size:[.44,.05,.38],pos:[1.1,-.04,0],color:ae.gums},{size:[.48,.1,.4],pos:[.98,-.36,0],color:ae.belly,rotZ:-.42},{size:[.42,.04,.36],pos:[.98,-.3,0],color:ae.gums,rotZ:-.42});for(let e=0;e<5;e++){const i=.9+e*.1;for(const n of[.14,-.14])t.push({size:[.05,.1,.05],pos:[i,-.1,n],color:ae.tooth}),t.push({size:[.05,.09,.05],pos:[i-.05,-.27-(i-.9)*.4,n],color:ae.tooth})}}else t.push({size:[.5,.1,.36],pos:[.98,-.17,0],color:ae.belly});return t}const Kt={hull:4926747,hullLight:7226921,keel:2759184,trim:14723388,deck:9067058,mast:5913122,rope:3877402,port:1182728,gun:2830133,window:16764762,lantern:16769146,bone:16052712},pn=-.95;function wl(s,t){const e=Math.cos(pn),i=Math.sin(pn);return[s*e+t*i,-s*i+t*e]}function Yo(s,t,e,i,n){const o=t-e/2,r=(a,l,c=0)=>{const[h,f]=wl(a,c);return[s+h,l,f]};return[{size:[.08,.08,i+.2],pos:r(0,t+.02),color:Kt.mast,rotY:pn},{size:[.05,e,i],pos:r(.03,o),color:n,rotY:pn},{size:[.05,e*.7,i*.72],pos:r(.08,o-e*.04),color:xr(n,14),rotY:pn},{size:[.05,e*.1,i],pos:r(.04,t-e+.03),color:xr(n,-26),rotY:pn}]}function $c(s,t,e=1,i=Kt.bone){const n=(r,a,l)=>{const[c,h]=wl(r,l);return[s+c,a,h]},o=pn;return[{size:[.03,.2*e,.24*e],pos:n(.11,t+.05*e,0),color:i,rotY:o},{size:[.03,.08*e,.14*e],pos:n(.11,t-.08*e,0),color:i,rotY:o},{size:[.035,.07*e,.07*e],pos:n(.12,t+.06*e,.06*e),color:1381655,rotY:o},{size:[.035,.07*e,.07*e],pos:n(.12,t+.06*e,-.06*e),color:1381655,rotY:o},{size:[.03,.05*e,.46*e],pos:n(.11,t-.24*e,0),color:i,rotX:.62,rotY:o},{size:[.03,.05*e,.46*e],pos:n(.11,t-.24*e,0),color:i,rotX:-.62,rotY:o}]}function Jx(s){const t=Number(s)%2===0,e=t?2500140:15656139,i=[{size:[3.1,.3,.78],pos:[0,0,0],color:Kt.keel},{size:[3.3,.44,.98],pos:[0,.32,0],color:Kt.hull},{size:[.5,.42,.74],pos:[1.86,.36,0],color:Kt.hull},{size:[.32,.36,.44],pos:[2.2,.42,0],color:Kt.hull},{size:[.4,.56,.98],pos:[-1.82,.4,0],color:Kt.hull},{size:[3.34,.06,1],pos:[0,.44,0],color:Kt.trim},{size:[3.3,.06,.9],pos:[0,.56,0],color:Kt.deck},{size:[3.3,.14,.08],pos:[0,.62,.47],color:Kt.hullLight},{size:[3.3,.14,.08],pos:[0,.62,-.47],color:Kt.hullLight},...[-.95,-.35,.25,.85].flatMap(n=>[{size:[.2,.15,1],pos:[n,.28,0],color:Kt.port},{size:[.09,.09,1.2],pos:[n,.28,0],color:Kt.gun}]),{size:[1,.5,.96],pos:[-1.42,.86,0],color:Kt.hullLight},{size:[1.04,.07,1],pos:[-1.42,1.13,0],color:Kt.trim},{size:[.9,.05,.86],pos:[-1.42,1.1,0],color:Kt.deck},...[-.28,0,.28].map(n=>({size:[.04,.16,.15],pos:[-1.93,.86,n],color:Kt.window})),{size:[.04,.06,.8],pos:[-1.93,1,0],color:Kt.trim},{size:[.6,.24,.84],pos:[1.5,.74,0],color:Kt.hullLight},{size:[.62,.05,.86],pos:[1.5,.87,0],color:Kt.trim},{size:[1,.07,.07],pos:[2.66,.86,0],color:Kt.mast,rotZ:.32},{size:[.16,.22,.14],pos:[2.32,.58,0],color:Kt.trim},{size:[.11,2.5,.11],pos:[.05,1.85,0],color:Kt.mast},{size:[.1,1.95,.1],pos:[1.05,1.55,0],color:Kt.mast},{size:[.34,.14,.34],pos:[.05,2.62,0],color:Kt.hullLight},{size:[.36,.04,.36],pos:[.05,2.7,0],color:Kt.trim},{size:[.03,1.9,.03],pos:[.05,1.6,.3],color:Kt.rope,rotX:-.3},{size:[.03,1.9,.03],pos:[.05,1.6,-.3],color:Kt.rope,rotX:.3},{size:[1.9,.03,.03],pos:[1.9,1.65,0],color:Kt.rope,rotZ:-.62},{size:[.11,.15,.11],pos:[-1.9,1.25,.42],color:Kt.lantern},{size:[.11,.15,.11],pos:[-1.9,1.25,-.42],color:Kt.lantern},...Yo(.1,1.6,.72,1.4,e),...Yo(.1,2.5,.78,1.14,e),...Yo(1.1,1.46,.62,1.16,e),...Yo(1.1,2.3,.66,.96,e),{size:[.05,.5,.05],pos:[1.8,1.25,0],color:Kt.rope},{size:[.4,.34,.04],pos:[1.72,1.12,0],color:e,rotZ:-.5}];if(t)i.push(...$c(.1,2.14,1.3)),i.push(...$c(.1,1.24,.9));else for(const[n,o,r,a]of[[.1,1.6,.72,1.4],[.1,2.5,.78,1.14],[1.1,1.46,.62,1.16],[1.1,2.3,.66,.96]]){const[l,c]=wl(.11,0);i.push({size:[.04,r*.2,a],pos:[n+l,o-r*.5,c],color:12068922,rotY:pn})}return i}const El={base:8077224,light:10247371,spot:13012968,dark:5186672,sucker:16173532,eye:16774084,iris:16758062,pupil:1181720,brow:3479113,throat:7999262},vr=2759698,al=7227946,Jc=11041874;function jx(){const s=El,t=[{size:[3.45,.3,3.25],pos:[0,-.2,0],color:s.dark},{size:[3.2,1.2,3],pos:[0,.5,0],color:s.base},{size:[3,1,2.85],pos:[-.15,1.55,0],color:s.base},{size:[2.7,1,2.5],pos:[-.45,2.5,0],color:s.light},{size:[2.3,.9,2.1],pos:[-.8,3.4,0],color:s.light},{size:[1.8,.8,1.6],pos:[-1.15,4.2,0],color:s.light},{size:[1.1,.5,1],pos:[-1.45,4.8,0],color:s.spot},{size:[3.2,.14,.34],pos:[-.9,4,0],color:s.dark,rotZ:.55}],e=[[-.9,2.3,1.2],[-1.5,1.5,1.4],[.3,2.9,.95],[-.5,3.4,1],[-1.3,3.1,-.9],[.2,2.8,-1],[-.9,1.9,-1.4],[-1.6,.9,-1.45],[-1.5,.8,1.45],[-1,4.3,.6],[-1.6,3.8,-.4],[-1.9,2.3,.2]];for(const[i,n,o]of e)t.push({size:[.32,.22,.32],pos:[i,n,o],color:s.spot});for(const i of[1,-1]){const n=.9*i;t.push({size:[.34,1.05,1],pos:[1.38,1.8,n],color:s.dark},{size:[.2,.86,.84],pos:[1.5,1.8,n],color:s.eye},{size:[.08,.62,.62],pos:[1.6,1.78,n],color:s.iris},{size:[.5,.26,1.1],pos:[1.44,2.42,n*.98],color:s.brow,rotX:-.3*i},{size:[1.7,.2,.22],pos:[.55,2.55,n*1.25],color:s.dark})}t.push({size:[.45,1.3,1.9],pos:[1.66,.6,0],color:s.dark},{size:[.22,1.05,1.5],pos:[1.86,.6,0],color:s.light},{size:[.12,.7,1],pos:[1.96,.52,0],color:s.throat},{size:[.72,.56,.8],pos:[2.12,.88,0],color:vr},{size:[.56,.46,.62],pos:[2.52,.76,0],color:vr},{size:[.34,.42,.42],pos:[2.8,.5,0],color:al},{size:[.2,.28,.26],pos:[2.88,.22,0],color:al},{size:[.95,.1,.22],pos:[2.38,1.17,0],color:Jc},{size:[.1,.34,.1],pos:[2.9,.6,.1],color:Jc});for(const i of[1,-1])t.push({size:[1.5,.5,.62],pos:[1.85,.02,1.4*i],color:s.base,rotY:-.6*i},{size:[1.3,.14,.4],pos:[1.9,.29,1.42*i],color:s.light,rotY:-.6*i},{size:[.16,.08,.2],pos:[2.2,.36,1.6*i],color:s.sucker},{size:[.16,.08,.2],pos:[1.7,.36,1.3*i],color:s.sucker});for(let i=0;i<10;i++){const n=i/10*Math.PI*2+.3;Math.cos(n)>.5||t.push({size:[1,.36,.5],pos:[Math.cos(n)*1.75,-.02,Math.sin(n)*1.65],color:i%2?s.dark:s.base,rotY:-n})}return t}function Qx(){return[{size:[.6,.4,.66],pos:[.18,0,0],color:vr},{size:[.4,.3,.46],pos:[.52,.08,0],color:vr},{size:[.2,.24,.26],pos:[.7,.22,0],color:al}]}const t1={sharkbody:s=>$x(s==="open"),sharkfin:()=>[...f0(.05,-.02),{size:[.14,.34,.07],pos:[-1.3,.1,0],color:ae.fin,rotZ:.55}],sharkshadow:s=>{const t=Number(s);return[{size:[1.8,.02,.5],pos:[.1,0,0],color:t,flat:!0},{size:[.5,.02,.34],pos:[1.2,0,0],color:t,flat:!0},{size:[.5,.02,.28],pos:[-.95,0,0],color:t,flat:!0},{size:[.2,.02,.7],pos:[-1.3,0,0],color:t,flat:!0},{size:[.4,.02,1.2],pos:[.45,0,0],color:t,flat:!0,rotY:0}]},pirateship:s=>Jx(s),pirateflag:()=>[{size:[.05,.5,.05],pos:[0,.25,0],color:Kt.mast},{size:[.56,.34,.03],pos:[-.3,.4,0],color:1381655},{size:[.14,.12,.035],pos:[-.3,.44,0],color:Kt.bone},{size:[.3,.035,.035],pos:[-.3,.34,0],color:Kt.bone,rotZ:.5},{size:[.3,.035,.035],pos:[-.3,.34,0],color:Kt.bone,rotZ:-.5}],mine:()=>{const i=[{size:[.72,.08,.72],pos:[0,.02,0],color:2040616},{size:[.52,.52,.52],pos:[0,.32,0],color:2961976},{size:[.6,.32,.32],pos:[0,.32,0],color:4146509},{size:[.32,.32,.6],pos:[0,.32,0],color:4146509},{size:[.32,.6,.32],pos:[0,.32,0],color:4146509},{size:[.56,.06,.56],pos:[0,.32,0],color:12068922}];for(const[n,o,r,a,l,c]of[[.4,.32,0,.2,.09,.09],[-.4,.32,0,.2,.09,.09],[0,.32,.4,.09,.09,.2],[0,.32,-.4,.09,.09,.2],[0,.7,0,.09,.2,.09],[.26,.56,.26,.11,.11,.11],[-.26,.56,-.26,.11,.11,.11],[.26,.56,-.26,.11,.11,.11],[-.26,.56,.26,.11,.11,.11]])i.push({size:[a,l,c],pos:[n,o,r],color:13214282});return i},minelight:()=>[{size:[.14,.12,.14],pos:[0,.84,0],color:16777215,flat:!0}],cannon:()=>[{size:[.76,.18,.5],pos:[-.05,.13,0],color:8015660},{size:[.7,.16,.08],pos:[-.05,.28,.2],color:xr(8015660,16)},{size:[.7,.16,.08],pos:[-.05,.28,-.2],color:xr(8015660,16)},...[[.22,.28],[.22,-.28],[-.3,.28],[-.3,-.28]].map(([i,n])=>({size:[.2,.2,.07],pos:[i,.1,n],color:3877402})),{size:[1.04,.26,.26],pos:[.18,.4,0],color:3159357},{size:[.3,.3,.3],pos:[-.28,.4,0],color:3159357},{size:[.1,.12,.12],pos:[-.46,.4,0],color:14263361},{size:[.06,.3,.3],pos:[.02,.4,0],color:14263361},{size:[.06,.3,.3],pos:[.4,.4,0],color:14263361},{size:[.14,.34,.34],pos:[.7,.4,0],color:3159357},{size:[.03,.16,.16],pos:[.78,.4,0],color:658189,flat:!0}],cannonball:()=>[{size:[.3,.3,.3],pos:[0,0,0],color:2369324},{size:[.34,.2,.2],pos:[0,0,0],color:3027512},{size:[.2,.34,.2],pos:[0,0,0],color:3027512},{size:[.08,.08,.08],pos:[.08,.12,.08],color:6975867}],boulder:()=>[{size:[.7,.56,.62],pos:[0,0,0],color:5988198},{size:[.5,.3,.5],pos:[.1,.3,-.05],color:7106937},{size:[.3,.3,.34],pos:[-.3,-.1,.25],color:4869717},{size:[.4,.14,.3],pos:[.05,-.3,.1],color:4094546},{size:[.1,.08,.1],pos:[.22,.3,.26],color:15328210},{size:[.1,.08,.1],pos:[-.2,.2,-.3],color:15328210}],warnsign:()=>[{size:[.46,.46,.06],pos:[0,0,0],color:3803658,rotZ:Math.PI/4},{size:[.38,.38,.08],pos:[0,0,0],color:16726831,rotZ:Math.PI/4,flat:!0},{size:[.08,.22,.1],pos:[0,.05,0],color:16777215,flat:!0},{size:[.08,.07,.1],pos:[0,-.14,0],color:16777215,flat:!0}],krakenhead:()=>jx(),krakenjaw:()=>Qx(),krakenpupil:()=>[{size:[.06,.16,.48],pos:[0,0,0],color:El.pupil,flat:!0}],foamring:s=>{const t=Number(s)||2,e=[],i=Math.round(t*9);for(let n=0;n<i;n++){const o=n/i*Math.PI*2,r=.4+n*7%5*.08;e.push({size:[r,.04,.26],pos:[Math.cos(o)*t,0,Math.sin(o)*t],color:16777215,rotY:-o+Math.PI/2,flat:!0})}return e}},Ze=Sl(t1),jc=new Map;function e1(s,t){const e=`${s.toFixed(2)}:${t.toFixed(2)}`;let i=jc.get(e);if(i)return i;const n=El,o=[{size:[s+.06,t,t],pos:[s/2,0,0],color:n.base},{size:[s*.9,t*.3,t*.5],pos:[s/2,t*.45,0],color:n.dark},{size:[s*.9,t*.2,t*.8],pos:[s/2,-t*.42,0],color:n.light}];for(const r of[.28,.72])o.push({size:[Math.min(.2,s*.3),.06,t*.5],pos:[s*r,-t*.53,0],color:n.sucker});return i=Ye(o),jc.set(e,i),i}function i1(s,t=.42){return he(s,267818,t)}const Mt=-.14,hn=Wt.tile,da=Mt-mt.sea.drop,Qc=14690846,th=16742972,n1=2041664,s1=-.85,Se=(s,t)=>s+Math.random()*(t-s),fn=s=>s*s*(3-2*s),xe=pi.lerp,fs=pi.clamp;function eh(s){let t=0;for(const i in s)t+=s[i];let e=Math.random()*t;for(const i in s)if(e-=s[i],e<=0)return i;return Object.keys(s)[0]}function pa(s,t,e,i,n){const o=new Ue,r=[],a=e/t;let l=o;for(let c=0;c<t;c++){const h=new He;c>0&&(h.position.x=a),l.add(h);const f=xe(i,n,c/Math.max(1,t-1)),u=new lt(e1(a,f),s);u.frustumCulled=!1,h.add(u),r.push(h),l=h}return{root:o,joints:r,length:e}}function An(s,t){for(let e=0;e<s.joints.length;e++)s.joints[e].rotation.z=t(e)}class o1{constructor(t,e,i={}){this.view=t,this.effects=e,this.hooks=i,this.group=new Ue,this.group.visible=!1,t.add(this.group),this.active=!1,this.phase="idle",this.lanes=mt.lanes,this.mid=(this.lanes-1)/2,this.storm=0,this.stormTarget=0,this.lightning=0,this.seaMaterial=new Yt({color:1619182});const n=mt.sea.size;this.sea=new lt(new Pe(n,1,n),this.seaMaterial),this.sea.frustumCulled=!1,this.group.add(this.sea),this.swellMaterial=new Yt({color:mt.sea.swellColor,transparent:!0,opacity:.2,depthWrite:!1}),this.swell=[];const o=Ye([{size:[3.2,.05,.5],pos:[0,0,0],color:16777215,flat:!0}]);for(let r=0;r<mt.sea.swell;r++){const a=new lt(o,this.swellMaterial);a.frustumCulled=!1,this.group.add(a),this.swell.push({mesh:a,ox:Math.random(),oz:Math.random(),scale:.6+Math.random()})}this.buildLaneMarks(),this.buildFoam(),this.signs=[];for(let r=0;r<this.lanes;r++){const a=new lt(Ze.get("warnsign"),ke);a.frustumCulled=!1,a.visible=!1,this.group.add(a),this.signs.push(a)}this.mineLight=new Yt({color:16722458}),this.dangerMaterial=new Yt({color:Qc}),this.dangerFill=new Yt({color:th}),this.ringGeometry=new As(.5,.74,24).rotateX(-Math.PI/2),this.dotGeometry=new Hn(.2,12).rotateX(-Math.PI/2),this.barGeometry=new Pe(1,.03,.86),this.krakenMaterial=new Yt({vertexColors:!0}),this.foamRingMaterial=new Yt({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}),this.keys=!!window.matchMedia?.("(hover: hover) and (pointer: fine)").matches,this.vessel=null,this.cannonMesh=null,this.kraken=null,this.hazards=[],this.shells=[],this.shots=[],this.arms=[]}buildLaneMarks(){const t=new Pe(1,1,1);this.stripeMaterials=[new Yt({color:1746397}),new Yt({color:1415116})],this.stripes=[];for(let e=0;e<this.lanes;e++){const i=new lt(t,this.stripeMaterials[e%2]);i.frustumCulled=!1,this.group.add(i),this.stripes.push(i)}this.dummy=new He}buildFoam(){this.foamMax=260,this.foam=new mr(new Pe(1,.02,1),new Yt({color:16777215,transparent:!0,opacity:.6,depthWrite:!1}),this.foamMax),this.foam.instanceMatrix.setUsage(ur),this.foam.frustumCulled=!1,this.group.add(this.foam),this.flecks=[];for(let t=0;t<this.foamMax;t++)this.flecks.push({t:1,life:1,x:0,z:0,size:0,vx:0,vz:0});this.nextFleck=0}begin(t,e,i,{moored:n=!1}={}){this.active=!0,this.phase="run",this.group.visible=!0,this.x=e.x,this.centreZ=t.z,this.z=t.z,this.lane=Math.round(this.mid),this.homeX=e.x,this.travelled=0,this.clock=0,this.speed=mt.speed.start,this.legIndex=-1,this.nextWave=2.2,this.nextHeart=mt.heart.first,this.lean=0,this.wakeTimer=0,this.shown={progress:-1,reload:-1},this.storm=0,this.stormTarget=0,this.lightning=0,this.nextBolt=4,this.yaw=n?0:Math.PI,this.launch=n?0:1,this.homeward=!1,this.vessel=e,this.vessel.mesh.rotation.set(0,this.yaw,0),this.vessel.mesh.visible=!0,this.group.add(this.vessel.mesh),this.offset=(t.x-e.x)*-Math.cos(this.yaw),this.aft=Math.min(.75,(e.halfLen??1)*.35),this.deckY=e.mesh.geometry.boundingBox?.max.y??.3,this.vesselColors=this.sampleColors(e.mesh.geometry),this.hasCannon=!1,this.reload=0,this.kraken=null,this.palette=i,this.seaColor=he(i.waterDeep,10314,.12),this.seaMaterial.color.setHex(this.seaColor),this.stripeBase=[he(i.waterDeep,16777215,.18),he(i.waterDeep,0,.06)],this.stripeMaterials[0].color.setHex(this.stripeBase[0]),this.stripeMaterials[1].color.setHex(this.stripeBase[1]),this.swellMaterial.color.setHex(he(i.water,16777215,.55)),this.shadowColor=i1(i.waterDeep),t.facing="left",t.group.rotation.set(0,Math.PI/2,0),this.hooks.onItems?.(),this.hooks.onHint?.(this.controlsHint()),this.report(0)}controlsHint(){return this.keys?"↑ ↓ change lane · dodge what comes":"Swipe up or down to change lane"}finish(t){const e=this.active;this.active=!1,this.phase="idle",this.group.visible=!1,this.storm=0,this.stormTarget=0,this.lightning=0,e&&(this.hooks.onBanner?.(null),this.hooks.onVoyage?.(null),this.hooks.onBoss?.(null),this.hooks.onHint?.(null));for(const i of this.hazards)this.removeHazard(i);this.hazards.length=0;for(const i of this.shells)this.removeShell(i);this.shells.length=0;for(const i of this.shots)this.group.remove(i.mesh);this.shots.length=0;for(const i of this.arms)this.removeArm(i);this.arms.length=0,this.clearKraken();for(const i of this.signs)i.visible=!1;for(const i of this.flecks)i.t=i.life;this.hasCannon=!1,this.cannonMesh&&(this.group.remove(this.cannonMesh),this.cannonMesh=null),this.vessel&&(this.group.remove(this.vessel.mesh),this.vessel=null),t&&(t.ridingFloat=null)}clearKraken(){const t=this.kraken;t&&(this.group.remove(t.root),this.group.remove(t.ring),this.kraken=null)}sampleColors(t){const e=[],i=t.attributes.color;if(!i)return[9069632];const n=new Ht;for(let o=0;o<i.count&&e.length<6;o+=24){n.fromBufferAttribute(i,o);const r=n.getHex();e.includes(r)||e.push(r)}return e.length?e:[9069632]}items(){return!this.active||!this.hasCannon?[]:this.phase!=="boss"?[]:[{id:"cannon",label:"Cannon",action:"Fire"}]}get cameraRow(){return-(this.centreZ*.75+this.z*.25)/hn}get viewScale(){return this.fighting?It.bossViewScale:It.seaViewScale}get lead(){return this.fighting?It.bossLead:It.seaLead}get fighting(){return!!this.kraken||this.phase==="boss"}get cameraLocked(){return this.phase==="home"}laneZ(t){return this.centreZ-(t-this.mid)*hn}laneOf(t){return fs(Math.round(this.mid-(t-this.centreZ)/hn),0,this.lanes-1)}inLane(t){return Math.abs(this.z-t)<.55*hn}steer(t){if(!this.active||this.phase==="home"||this.phase==="wrecked")return!1;const e=t==="forward"?1:t==="back"?-1:0;if(!e)return!1;const i=this.lane+e;return i<0||i>=this.lanes?(this.hooks.onSound?.("bump"),this.lean+=.12*e,this.hooks.onShake?.(.08),!1):(this.lane=i,this.hooks.onSound?.("swish"),!0)}fire(){if(!this.active||!this.hasCannon||this.reload>0||this.phase!=="boss")return!1;this.reload=mt.cannon.reloadSeconds,this.hooks.onSound?.("cannon");const t=new lt(Ze.get("cannonball"),ke);t.frustumCulled=!1;const e=this.cannonX()-.72,i=Mt+this.deckY+.42;return t.position.set(e,i,this.z),this.group.add(t),this.shots.push({mesh:t,x:e,y:i,z:this.z,vy:mt.cannon.lift}),this.effects.explosion(e-.2,i-.3,this.z,.32),this.recoil=.28,this.hooks.onShake?.(.16),!0}update(t,e){if(!this.active)return;this.clock+=t,(this.phase==="run"||this.phase==="stop")&&this.advance(t),this.phase==="wrecked"&&(this.speed*=Math.pow(.1,t));const i=this.laneZ(this.lane),n=this.z;this.z+=(i-this.z)*Math.min(1,t*mt.laneLerp),this.lean+=(this.z-n)/Math.max(t,1e-4)*.018-this.lean*Math.min(1,t*6),this.lean=fs(this.lean,-.3,.3),this.placeVessel(t,e),this.updateSea(),this.updateMarks(),this.updateWake(t),this.updateFoam(t),this.phase==="run"&&(this.updateLegs(),this.updateWaves(t)),this.updateHazards(t,e),this.updateShells(t,e),this.updateSigns(),this.updateWeather(t),this.phase==="stop"&&this.speed<=.05&&this.openFight(),this.kraken&&this.updateKraken(t,e),this.updateArms(t,e),this.updateShots(t),this.updateCannon(t),this.phase==="home"&&this.updateHome(t),(this.phase==="run"||this.phase==="stop")&&this.report(Math.min(1,this.travelled/mt.reach))}report(t){Math.abs(t-this.shown.progress)<.002||(this.shown.progress=t,this.hooks.onVoyage?.(t))}advance(t){const e=mt.reach;if(this.phase==="run"){const n=Math.min(1,this.travelled/mt.speed.overTiles),o=xe(mt.speed.start,mt.speed.end,n);this.speed=o*(1+Math.sin(this.clock*Math.PI*2*mt.surge.hz)*mt.surge.amount),this.travelled>e-mt.brakeTiles&&(this.phase="stop")}else this.speed*=Math.pow(.06,t),this.speed<.2&&(this.speed=0);this.launch<1&&(this.launch=Math.min(1,this.launch+t/mt.castOffSeconds),this.yaw=xe(0,Math.PI,fn(this.launch)),this.speed*=fn(this.launch));const i=this.speed*t;this.x-=i,this.travelled+=i}placeVessel(t,e){const i=this.vessel;if(!i)return;i.x=this.x;const n=Math.sin(this.clock*1.7)*.03;i.mesh.position.set(this.x,Mt+n,this.z),i.mesh.rotation.set(this.lean+Math.sin(this.clock*1.3)*.03,this.yaw+Math.sin(this.clock*.9)*.04,Math.sin(this.clock*1.7)*.04+Math.min(.08,this.speed*.01)),!(this.phase==="wrecked"||e.dead)&&(this.offset+=(this.aft-this.offset)*Math.min(1,t*2),e.x=this.x-Math.cos(this.yaw)*this.offset,e.z=this.z+Math.sin(this.yaw)*this.offset,e.row=Math.round(-this.z/hn),e.baseY=Mt+.22+n,e.group.position.set(e.x,e.baseY,e.z),e.group.rotation.set(this.lean*.6,this.yaw-Math.PI/2,0),e.syncShadow?.())}updateSea(){this.sea.position.set(this.x,da-.5,this.z);const t=mt.sea.patch.x,e=mt.sea.patch.z;for(const i of this.swell){const n=((i.ox+this.clock*.035)%1+1)%1;i.mesh.position.set(this.x+n*t-t/2,Mt+.02,this.z+(i.oz-.5)*e),i.mesh.scale.set(i.scale,1,i.scale)}}updateMarks(){const t=this.x-44,e=Math.min(this.x+30,mt.markFrom),i=e-t,n=i>.5&&!this.homeward,o=(t+e)/2;for(let r=0;r<this.lanes;r++){const a=this.stripes[r];a.visible=n,n&&(a.scale.set(i,.02,hn*.995),a.position.set(o,da+.005,this.laneZ(r)))}}fleck(t,e,i,n,o=0,r=0){const a=this.flecks[this.nextFleck];this.nextFleck=(this.nextFleck+1)%this.foamMax,a.x=t,a.z=e,a.size=i,a.life=n,a.t=0,a.vx=o,a.vz=r,a.spin=Math.random()*Math.PI}updateFoam(t){const e=this.dummy;for(let i=0;i<this.foamMax;i++){const n=this.flecks[i];if(n.t<n.life){n.t+=t,n.x+=n.vx*t,n.z+=n.vz*t;const o=Math.min(1,n.t/n.life),r=n.size*(.6+o*1.1)*Math.sqrt(1-o);e.position.set(n.x,Mt+.025,n.z),e.rotation.set(0,n.spin,0),e.scale.set(r*1.6,1,r)}else e.position.set(0,-50,0),e.scale.setScalar(0);e.updateMatrix(),this.foam.setMatrixAt(i,e.matrix)}this.foam.instanceMatrix.needsUpdate=!0}updateWake(t){if(!this.vessel||this.phase==="wrecked"||this.speed<.4||(this.wakeTimer-=t,this.wakeTimer>0))return;this.wakeTimer=.035;const e=this.vessel.halfLen??1,i=Math.cos(this.yaw),n=-Math.sin(this.yaw);this.fleck(this.x-i*e*.9,this.z-n*e*.9+Se(-.25,.25),Se(.25,.4),1.2);const o=Math.random()<.5?-1:1;this.fleck(this.x+i*(e-.2),this.z+n*(e-.2)+o*.3,.22,.55,0,o*.9)}updateLegs(){const t=this.travelled/mt.reach;let e=0;for(let n=0;n<mt.legs.length;n++)t>=mt.legs[n].at&&(e=n);if(e===this.legIndex)return;this.legIndex=e;const i=mt.legs[e];this.hooks.onBanner?.(i.banner,i.tone??"warn"),this.stormTarget=i.storm??this.stormTarget}get difficulty(){return Math.min(1,this.travelled/(mt.reach*.85))}updateWaves(t){if(this.travelled>mt.reach-mt.brakeTiles-30||(this.nextWave-=t,this.nextWave>0))return;if(this.travelled>this.nextHeart){this.nextHeart=this.travelled+Se(mt.heart.every.min,mt.heart.every.max),this.place("heart",this.pickLane(0)),this.nextWave=mt.waves.gap.start;return}const i={...mt.legs[Math.max(0,this.legIndex)].patterns};this.lastPattern==="wall"&&delete i.wall;const n=eh(i);this.lastPattern=n;const o=this.spawnPattern(n),r=mt.waves.gap;this.nextWave=xe(r.start,r.end,this.difficulty)*Se(.9,1.15)+o}pickLane(t=.5,e=[]){if(Math.random()<t&&!e.includes(this.lane))return this.lane;const i=[];for(let n=0;n<this.lanes;n++)e.includes(n)||i.push(n);return i[Math.floor(Math.random()*i.length)]}spawnPattern(t){const e=this.lanes;switch(t){case"shark":return this.place("shark",this.pickLane(.6)),0;case"sharks":{const i=this.pickLane(.5);return this.place("shark",i),this.place("shark",this.pickLane(0,[i])),.2}case"stagger":{const i=Math.random()<.5?1:-1,n=i>0?Math.floor(Math.random()*(e-2)):2+Math.floor(Math.random()*(e-2));for(let o=0;o<3;o++)this.place("shark",n+i*o,o*.5);return .9}case"mine":return this.place("mine",this.pickLane(.6)),0;case"mines":{const i=this.pickLane(.5);return this.place("mine",i),this.place("mine",this.pickLane(0,[i])),.2}case"minefield":{const i=[];for(let n=0;n<3;n++){const o=this.pickLane(n===0?.6:0,i);i.push(o),this.place("mine",o,[0,.6,1.2][n])}return 1.1}case"pirate":return this.place("pirate",this.pickLane(.3)),.6;case"pirateShark":{const i=this.pickLane(.3);return this.place("pirate",i),this.place("shark",this.pickLane(.5,[i]),.5),.8}case"wall":{const i=[];for(let o=0;o<e;o++)Math.abs(o-this.lane)<=1&&i.push(o);const n=i[Math.floor(Math.random()*i.length)];for(let o=0;o<e;o++)o!==n&&this.place("shark",o,.5);return 1}default:return this.place("shark",this.pickLane(.5)),0}}place(t,e,i=0,{x:n,vx:o}={}){const r=this.difficulty,a=o??(t==="shark"?xe(mt.sharks.vx.start,mt.sharks.vx.end,r)*Se(.92,1.08):t==="pirate"?mt.pirates.vx:0),l=t==="shark"?mt.sharks.halfLen:t==="pirate"?mt.pirates.halfLen:t==="heart"?mt.heart.halfLen:mt.mines.halfLen,c=xe(mt.waves.arriveSeconds.start,mt.waves.arriveSeconds.end,r)+i;let h=n??this.x-(this.speed+a)*c;if(n==null){h=Math.min(h,this.x-13);for(const u of this.hazards)u.lane===e&&Math.abs(u.x-h)<u.halfLen+l+1.5&&(h=u.x-u.halfLen-l-1.5)}const f={kind:t,lane:e,x:h,z:this.laneZ(e),vx:a,halfLen:l,seed:Math.random()*10,state:"swim",spent:!1,fired:!1,trail:0};return this.buildHazard(f),this.hazards.push(f),f}buildHazard(t){const e=(i,n=ke)=>{const o=new lt(i,n);return o.frustumCulled=!1,this.group.add(o),o};t.kind==="shark"?(t.shadow=e(Ze.get("sharkshadow",String(this.shadowColor))),t.fin=e(Ze.get("sharkfin")),t.body=e(Ze.get("sharkbody","open")),t.body.visible=!1):t.kind==="pirate"?(t.ship=e(Ze.get("pirateship",String(Math.floor(Math.random()*2)))),t.flag=e(Ze.get("pirateflag"))):t.kind==="heart"?(t.heart=e(_e.get("heart")),t.heart.scale.setScalar(mt.heart.size)):(t.mine=e(Ze.get("mine")),t.light=e(Ze.get("minelight"),this.mineLight),t.mine.scale.setScalar(1.3),t.light.scale.setScalar(1.3))}removeHazard(t){for(const e of["shadow","fin","body","ship","flag","mine","light","heart"])t[e]&&this.group.remove(t[e])}updateHazards(t,e){const i=mt;for(let n=this.hazards.length-1;n>=0;n--){const o=this.hazards[n];o.x+=o.vx*t;const r=this.x-o.x;if(o.kind==="shark"?this.updateShark(o,t,r):o.kind==="pirate"?this.updatePirate(o,t,r):o.kind==="heart"?this.updateHeart(o):this.updateMine(o),r<-16||o.gone){this.removeHazard(o),this.hazards.splice(n,1);continue}if(!(o.spent||this.phase==="wrecked"||e.dead)&&this.inLane(o.z)&&!(Math.abs(o.x-this.x)>o.halfLen+i.boatReach)){if(o.spent=!0,o.kind==="heart"){o.gone=!0,this.effects.splash(o.x,Mt,o.z,16748451),this.hooks.onHeart?.();continue}if(o.kind==="mine"&&(this.effects.explosion(o.x,Mt+.3,o.z,1),o.gone=!0),this.hooks.onKill?.(o.kind),this.phase==="wrecked")return}}}updateShark(t,e,i){const n=mt.sharks.breachAt,o=Math.sin(this.clock*9+t.seed)*.14;if(t.state==="swim"&&i<n&&i>-2&&(t.state="breach",t.fin.visible=!1,t.shadow.visible=!1,t.body.visible=!0,this.effects.splash(t.x,Mt,t.z,16777215)),t.state==="breach"){const r=fs((n-i)/(n+2.8),0,1);t.body.position.set(t.x,Mt-.25+Math.sin(Math.PI*r)*1.35,t.z),t.body.rotation.set(0,o*.5,(.5-r)*1.4),r>=1&&(t.state="dived",t.body.visible=!1,t.fin.visible=!0,t.shadow.visible=!0,this.effects.splash(t.x,Mt,t.z,16777215));return}t.fin.position.set(t.x,Mt+Math.sin(this.clock*3+t.seed)*.03,t.z),t.fin.rotation.set(0,o,0),t.shadow.position.set(t.x-.1,da+.012,t.z),t.shadow.rotation.set(0,o*.6,0),t.trail-=e,t.trail<=0&&(t.trail=.06,this.fleck(t.x-.2,t.z+Se(-.12,.12),.22,.7))}updatePirate(t,e,i){const n=Math.sin(this.clock*1.3+t.seed)*.06,o=Math.sin(this.clock*.9+t.seed)*.035;if(t.ship.position.set(t.x,Mt+Math.sin(this.clock*1.1+t.seed)*.04,t.z),t.ship.rotation.set(n,0,o),t.flag.position.set(t.x+.05,Mt+2.72,t.z),t.flag.rotation.set(n,Math.sin(this.clock*5+t.seed)*.45,0),t.trail-=e,t.trail<=0){t.trail=.08;const h=Math.random()<.5?-1:1;this.fleck(t.x+2.1,t.z+h*.35,.3,.6,0,h*.8),this.fleck(t.x-1.9,t.z+Se(-.3,.3),.36,1)}const r=mt.pirates;if(t.fired||this.phase!=="run"||i>r.fireFrom||i<2.5)return;t.fired=!0;const a=[this.lane],l=()=>[this.lane-1,this.lane+1].filter(h=>h>=0&&h<this.lanes&&h!==t.lane&&!a.includes(h));if(!l().length)return;if(this.difficulty>.6&&Math.random()<.6){const h=this.lane+(Math.random()<.5?1:-1);h>=0&&h<this.lanes&&h!==t.lane&&(a.push(h),l().length||a.pop())}const c=this.z>t.z?1:-1;for(const h of a)this.lob("pirate","cannonball",new P(t.x,Mt+.45,t.z+c*.55),h,r.flight,1.6),this.effects.explosion(t.x,Mt+.25,t.z+c*.62,.35);this.hooks.onShake?.(.12)}updateHeart(t){const e=Math.sin(this.clock*2.6+t.seed)*.08;t.heart.position.set(t.x,Mt+.35+e,t.z),t.heart.rotation.set(0,this.clock*2.4+t.seed,0)}updateMine(t){const e=Math.sin(this.clock*2.4+t.seed)*.05;t.mine.position.set(t.x,Mt-.08+e,t.z),t.mine.rotation.set(Math.sin(this.clock*1.7+t.seed)*.1,t.seed,0),t.light.position.copy(t.mine.position),t.light.rotation.copy(t.mine.rotation)}updateSigns(){const t=Math.sin(this.clock*14)>-.3;this.mineLight.color.setHex(Math.sin(this.clock*7)>0?16722458:4852232);const e=mt.signAt;for(let i=0;i<this.lanes;i++){let n=!1;if(this.phase==="run"||this.phase==="stop")for(const r of this.hazards){if(r.lane!==i||r.kind==="heart")continue;const a=this.x-r.x-r.halfLen;if(a>e+1.4&&a<e+30){n=!0;break}}const o=this.signs[i];o.visible=n&&t,n&&(o.position.set(this.x-e,Mt+.75+Math.sin(this.clock*5+i)*.06,this.laneZ(i)),o.scale.setScalar(1+Math.sin(this.clock*10)*.08))}}lob(t,e,i,n,o,r){const a=new lt(Ze.get(e),ke);a.frustumCulled=!1,a.position.copy(i),e==="boulder"&&a.scale.setScalar(1.3),this.group.add(a);const l=new lt(this.ringGeometry,this.dangerMaterial),c=new lt(this.dotGeometry,this.dangerFill);for(const h of[l,c])h.frustumCulled=!1,this.group.add(h);this.shells.push({source:t,mesh:a,ring:l,dot:c,from:i.clone(),lane:n,t:0,flight:o,peak:r})}removeShell(t){this.group.remove(t.mesh),this.group.remove(t.ring),this.group.remove(t.dot)}updateShells(t,e){const i=Math.sin(this.clock*12)*.5+.5;this.dangerMaterial.color.setHex(he(Qc,th,i*.5));for(let n=this.shells.length-1;n>=0;n--){const o=this.shells[n];o.t+=t;const r=Math.min(1,o.t/o.flight),a=this.x,l=this.laneZ(o.lane);if(o.ring.position.set(a,Mt+.03,l),o.ring.scale.setScalar(xe(2,.9,r)),o.dot.position.set(a,Mt+.035,l),o.dot.scale.setScalar(xe(.4,2.2,r)),o.mesh.position.set(xe(o.from.x,a,r),xe(o.from.y,Mt+.2,r)+o.peak*4*r*(1-r),xe(o.from.z,l,r)),o.mesh.rotation.set(o.t*5,o.t*3,0),!(r<1)&&(this.removeShell(o),this.shells.splice(n,1),this.effects.explosion(a,Mt+.2,l,.9),this.effects.bigSplash(a,Mt,l,14677247,.6),this.hooks.onShake?.(.3),this.phase!=="wrecked"&&!e.dead&&this.inLane(l)&&(this.hooks.onKill?.(o.source==="pirate"?"pirate":"kraken"),this.phase==="wrecked")))return}}updateWeather(t){this.storm+=(this.stormTarget-this.storm)*Math.min(1,t*.6),this.lightning=Math.max(0,this.lightning-t*4),this.storm>.3&&this.phase!=="home"&&(this.nextBolt-=t,this.nextBolt<=0&&(this.nextBolt=Se(2.5,6.5)/this.storm,this.lightning=1,this.hooks.onShake?.(.12),this.hooks.onSound?.("thunder")));const e=this.storm*.5,i=this.lightning*.35;this.seaMaterial.color.setHex(he(he(this.seaColor,728115,e),16777215,i)),this.stripeMaterials[0].color.setHex(he(he(this.stripeBase[0],728115,e),16777215,i)),this.stripeMaterials[1].color.setHex(he(he(this.stripeBase[1],728115,e),16777215,i))}skyFor(t){const e=he(t,n1,this.storm*.85);return he(e,15397631,this.lightning*.8)}wreck(t){if(this.phase==="wrecked")return;this.phase="wrecked",this.hasCannon=!1,this.hooks.onItems?.(),this.hooks.onBoss?.(null);for(const o of this.arms)o.marker&&(o.marker.visible=!1);const e=this.x,i=this.z,n=this.palette?.water??14676218;this.effects.explosion(e,Mt+.3,i,1.4),this.effects.explosion(e+Se(-.6,.6),Mt+.4,i+Se(-.3,.3),.9,.16),this.effects.bigSplash(e,Mt,i,n,1.6),this.effects.debris(e,Mt+.3,i,this.vesselColors,{count:22,speed:5,up:7.5,size:1.2,floor:Mt,water:!0,splashColor:n}),this.effects.debris(e,Mt+.5,i,t.character.splatColors,{count:14,speed:3.2,up:9,size:.8,floor:Mt,water:!0,splashColor:n}),this.hooks.onShake?.(1.1),this.vessel&&(this.vessel.mesh.visible=!1),this.cannonMesh&&(this.cannonMesh.visible=!1),t.group.visible=!1,t.shadow.visible=!1}survive(){this.effects.explosion(this.x,Mt+.3,this.z,.8),this.effects.bigSplash(this.x,Mt,this.z,14677247,.8);for(const t of this.hazards)t.kind!=="heart"&&this.inLane(t.z)&&Math.abs(t.x-this.x)<t.halfLen+3&&(t.spent=!0)}bowOffset(){const t=this.vessel?.halfLen??1;return Math.min(1.1,Math.max(.3,t-.4))-(this.recoil??0)}cannonX(){return this.x+Math.cos(this.yaw)*this.bowOffset()}updateCannon(t){const e=this.cannonMesh;if(!e||!this.vessel)return;this.drop>0&&(this.dropV-=30*t,this.drop=Math.max(0,this.drop+this.dropV*t),this.drop===0&&!this.hasCannon&&(this.hasCannon=!0,this.effects.splash(this.cannonX(),Mt,this.z,16777215),this.effects.explosion(this.cannonX(),Mt+this.deckY,this.z,.35),this.hooks.onShake?.(.45),this.hooks.onPickup?.("CANNON READY"),this.hooks.onItems?.(),this.hooks.onHint?.(this.keys?"F to fire the cannon · aim with ↑ ↓":"Tap the cannon to fire · aim with swipes"))),this.recoil=Math.max(0,(this.recoil??0)-t*1.4);const i=Math.min(1,Math.max(.7,(this.vessel.halfLen??1.2)/1.3));if(e.scale.setScalar(i),e.position.set(this.cannonX(),Mt+this.deckY-.04+this.drop,this.z-Math.sin(this.yaw)*this.bowOffset()),e.rotation.set(this.lean,this.yaw,0),this.reload>0&&(this.reload=Math.max(0,this.reload-t)),this.hasCannon&&this.phase==="boss"){const n=1-this.reload/mt.cannon.reloadSeconds,o=Math.round(n*20)/20;o!==this.shown.reload&&(this.shown.reload=o,this.hooks.onReload?.(o))}}updateShots(t){const e=this.kraken,i=mt.cannon.gravity;for(let n=this.shots.length-1;n>=0;n--){const o=this.shots[n];if(o.x-=mt.cannon.speed*t,o.vy-=i*t,o.y+=o.vy*t,o.mesh.position.set(o.x,o.y,o.z),o.mesh.rotation.z+=t*8,e&&this.krakenHittable()&&o.x<e.x+2.4&&Math.abs(o.z-e.z)<mt.kraken.hitHalfWidth){this.hitKraken(o.x,o.y,o.z),this.group.remove(o.mesh),this.shots.splice(n,1);continue}o.y<Mt&&(this.effects.splash(o.x,Mt,o.z,16777215),this.group.remove(o.mesh),this.shots.splice(n,1))}}openFight(){this.phase="boss",this.bossClock=0,this.hooks.onVoyage?.(null),this.hooks.onBanner?.("BOSS FIGHT","boss"),this.stormTarget=.9;for(const t of this.hazards)this.effects.splash(t.x,Mt,t.z,16777215),this.removeHazard(t);this.hazards.length=0,this.cannonMesh=new lt(Ze.get("cannon"),ke),this.cannonMesh.frustumCulled=!1,this.group.add(this.cannonMesh),this.drop=4,this.dropV=0,this.recoil=0,this.buildKraken()}buildKraken(){const t=mt.kraken,e=new Ue,i=(c,h=e)=>{const f=new lt(c,this.krakenMaterial);return f.frustumCulled=!1,h.add(f),f};i(Ze.get("krakenhead"));const n=i(Ze.get("krakenjaw"));n.position.set(2,.3,0);const o=[1,-1].map(c=>{const h=i(Ze.get("krakenpupil"));return h.position.set(1.65,1.78,.9*c),h}),r=[];for(const c of[55,110,150,210,250,305]){const h=c*Math.PI/180,f=pa(this.krakenMaterial,7,3.6,.6,.16);f.root.position.set(Math.cos(h)*1.55,.1,Math.sin(h)*1.45),f.root.rotation.y=-h,f.phase=Math.random()*Math.PI*2,e.add(f.root),r.push(f)}const a=new lt(Ze.get("foamring","2.3"),this.foamRingMaterial);a.frustumCulled=!1,this.group.add(a),this.group.add(e);const l=this.laneZ(Math.round(this.mid));this.kraken={root:e,jaw:n,pupils:o,idle:r,ring:a,x:this.x-t.distance,z:l,targetZ:l,y:-6,health:t.health,stage:0,rise:0,state:"waiting",jawOpen:0,roar:0,flash:0,nextAttack:2.2,nextShift:t.shiftEvery,churn:0,lastAttack:null,dive:null,dead:0},this.krakenMaterial.color.setRGB(1,1,1),e.position.set(this.kraken.x,Mt-6,l)}krakenHittable(){const t=this.kraken;return!!(t&&t.state==="fighting"&&!t.dive&&t.y>-.6)}updateKraken(t,e){const i=this.kraken,n=mt.kraken;if(this.bossClock+=t,i.state==="waiting"&&this.bossClock>1.3&&(i.state="rising",this.effects.bigSplash(i.x,Mt,i.z,14677247,2.2),this.hooks.onShake?.(.9)),i.state==="rising"&&(i.rise=Math.min(1,i.rise+t/n.riseSeconds),i.y=xe(-6,0,fn(i.rise)),Math.random()<t*10&&this.effects.splash(i.x+Se(-2,2),Mt,i.z+Se(-2,2),16777215),i.rise>=1&&(i.state="fighting",this.roar(1.4),this.hooks.onBoss?.(1,{}))),i.state==="fighting"&&!i.dive){if(i.nextShift-=t,i.nextShift<=0){i.nextShift=n.shiftEvery*Se(.8,1.2)*(i.stage===2?.7:1);const d=[-1,0,1].map(g=>this.laneZ(Math.round(this.mid)+g)).filter(g=>Math.abs(g-i.targetZ)>.1);i.targetZ=d[Math.floor(Math.random()*d.length)]}const u=i.targetZ-i.z;i.z+=Math.sign(u)*Math.min(Math.abs(u),t*(i.stage===2?2.4:1.6))}i.state==="fighting"&&(this.updateDive(t,e),i.dive||(i.nextAttack-=t,i.nextAttack<=0&&this.attack(e))),i.state==="dying"&&this.updateKrakenDeath(t),i.roar=Math.max(0,i.roar-t),i.jawOpen+=((i.roar>0?1:.12+Math.sin(this.clock*2)*.08)-i.jawOpen)*Math.min(1,t*8),i.jaw.position.y=.3-i.jawOpen*.22,i.jaw.rotation.z=-i.jawOpen*.55;const o=fs((this.z-i.z)*.1,-.13,.13);for(const u of i.pupils)u.position.z=Math.sign(u.position.z)*.9+o;const r=Math.sin(this.clock*.7)*.06,a=i.roar>0?Math.sin(this.clock*40)*.05:0;i.root.position.set(i.x+a,Mt+i.y+Math.sin(this.clock*1.1)*.12,i.z),i.state!=="dying"&&i.root.rotation.set(r*.5,s1+r,Math.sin(this.clock*.9)*.04),i.ring.position.set(i.x,Mt+.02,i.z),i.ring.visible=i.y>-3,i.ring.scale.setScalar(1+Math.sin(this.clock*3)*.06),i.ring.rotation.y+=t*.3;const l=i.stage===2?1.6:i.stage===1?1.25:1,c=i.state==="dying"?3:i.roar>0?1.8:1;for(const u of i.idle){const d=this.clock*l*c+u.phase;An(u,g=>g===0?.7+Math.sin(d*1.2)*.25*c:-.24+Math.sin(d*2.1+g*.8)*.3*Math.min(2,c))}if(i.churn-=t,i.churn<=0&&i.y>-2){i.churn=.05;const u=Math.random()*Math.PI*2;this.fleck(i.x+Math.cos(u)*2.4,i.z+Math.sin(u)*2.2,Se(.3,.5),1,Math.cos(u)*.6,Math.sin(u)*.6)}i.flash=Math.max(0,i.flash-t*5);const h=i.stage===2?[1.35,.72,.78]:i.stage===1?[1.12,.9,.92]:[1,1,1],f=i.flash*1.6;this.krakenMaterial.color.setRGB(h[0]+f,h[1]+f,h[2]+f)}roar(t=1){this.kraken.roar=t,this.hooks.onSound?.("roar",{seconds:t}),this.hooks.onShake?.(.5)}attack(t){const e=this.kraken,i=mt.kraken,o={...[{slam:3,rock:2},{slam2:3,rock:1,barrage:2,sharks:2},{wall:3,barrage:2,dive:2,slam2:2}][e.stage]};(e.lastAttack==="dive"||e.lastAttack==="wall")&&(delete o.dive,delete o.wall);const r=eh(o);e.lastAttack=r;const a=i.gap[e.stage],l=i.warn[e.stage],c=this.lane;let h=0;if(r==="slam")this.slam(c,l);else if(r==="slam2")this.slam(c,l),this.slam(this.pickLane(0,[c]),l),h=.3;else if(r==="wall"){const f=[];for(let d=0;d<this.lanes;d++)d!==c&&Math.abs(d-c)<=2&&f.push(d);const u=f[Math.floor(Math.random()*f.length)];for(let d=0;d<this.lanes;d++)d!==u&&this.slam(d,i.wallWarn);h=1}else if(r==="rock")this.throwRock(c,0);else if(r==="barrage"){for(let f=0;f<3;f++)this.throwRock(null,f*.45);h=1}else if(r==="sharks"){this.roar(.8);const f=this.pickLane(.5),u=this.pickLane(0,[f]);for(const d of[f,u])this.place("shark",d,0,{x:e.x+2.2,vx:4.2}),this.effects.splash(e.x+2.2,Mt,this.laneZ(d),16777215);h=.6}else r==="dive"&&(e.dive={step:"down",t:0,waves:3},this.effects.bigSplash(e.x,Mt,e.z,14677247,1.8),h=0);e.nextAttack=a+h}slam(t,e){const i=this.kraken,n=this.laneZ(t),o=i.x+1.3,r=this.x-o+1.8,a=pa(this.krakenMaterial,12,r,.85,.22);a.root.position.set(o,Mt-1.4,n),this.group.add(a.root);const l=this.x+1.6-o,c=new lt(this.barGeometry,this.dangerMaterial);c.scale.set(l,1,1),c.position.set(o+l/2,Mt+.005,n);const h=new lt(this.barGeometry,this.dangerFill);h.scale.set(.001,1.2,.5),h.position.set(o,Mt+.01,n);for(const f of[c,h])f.frustumCulled=!1,this.group.add(f);this.arms.push({kind:"slam",arm:a,lane:t,z:n,rootX:o,span:l,marker:c,fill:h,state:"warn",t:0,warn:e})}erupt(t){const e=this.laneZ(t),i=this.x+Se(-.3,.3),n=pa(this.krakenMaterial,8,3.2,.72,.18);n.root.position.set(i,Mt-4,e),n.root.rotation.y=Math.random()*Math.PI*2,this.group.add(n.root);const o=new lt(this.ringGeometry,this.dangerMaterial),r=new lt(this.dotGeometry,this.dangerFill);for(const a of[o,r])a.frustumCulled=!1,a.position.set(i,Mt+.03,e),this.group.add(a);this.arms.push({kind:"erupt",arm:n,lane:t,z:e,x:i,marker:o,fill:r,state:"warn",t:0,warn:mt.kraken.eruptWarn})}throwRock(t,e){const i=this.kraken;this.pendingRocks??(this.pendingRocks=[]),this.pendingRocks.push({lane:t,delay:e,from:new P(i.x+1.4,Mt+3.8,i.z)})}removeArm(t){this.group.remove(t.arm.root),t.marker&&this.group.remove(t.marker),t.fill&&this.group.remove(t.fill)}updateArms(t,e){const i=mt.kraken,n=this.kraken;if(this.pendingRocks?.length&&n)for(let o=this.pendingRocks.length-1;o>=0;o--){const r=this.pendingRocks[o];r.delay-=t,!(r.delay>0)&&(this.pendingRocks.splice(o,1),n.state==="fighting"&&(this.roar(.35),r.from.z=n.z,this.lob("kraken","boulder",r.from,r.lane??this.lane,i.rockFlight,2.4)))}for(let o=this.arms.length-1;o>=0;o--){const r=this.arms[o];r.t+=t;const a=l=>Math.sin(this.clock*7+l*.9)*.05;if(r.state==="warn"){const l=fn(Math.min(1,r.t/r.warn));r.kind==="slam"?(r.arm.root.position.y=Mt-1.4+1.5*Math.min(1,r.t/.3),An(r.arm,c=>c===0?xe(-.1,1.25,l):xe(0,-.24,l)+a(c)),r.fill.scale.x=Math.max(.001,r.span*l),r.fill.position.x=r.rootX+r.span*l/2):(r.marker.scale.setScalar(xe(1.8,.9,l)),r.fill.scale.setScalar(xe(.4,2.6,l)),Math.random()<t*8&&this.fleck(r.x+Se(-.4,.4),r.z+Se(-.3,.3),.3,.6)),r.t>=r.warn&&(r.state="strike",r.t=0)}else if(r.state==="strike"){const l=Math.min(1,r.t/i.strikeSeconds);r.kind==="slam"?An(r.arm,c=>c===0?xe(1.25,-.06,l):xe(-.24,.004,l)):(r.arm.root.position.y=xe(Mt-4,Mt-.3,l),An(r.arm,c=>c===0?Math.PI/2:Math.sin(this.clock*9+c)*.18)),l>=1&&(r.state="hold",r.t=0,this.group.remove(r.marker),this.group.remove(r.fill),r.marker=null,r.fill=null,this.landArm(r,e))}else r.state==="hold"?(r.kind==="slam"?An(r.arm,l=>l===0?-.06:a(l)*.3):An(r.arm,l=>l===0?Math.PI/2:Math.sin(this.clock*9+l)*.22),r.t>=i.holdSeconds&&(r.state="sink",r.t=0)):r.state==="sink"&&(r.arm.root.position.y-=t*4.5,r.kind==="slam"&&An(r.arm,l=>l===0?-.06-r.t*.4:.05*l*r.t),r.t>.8&&(this.removeArm(r),this.arms.splice(o,1)))}}landArm(t,e){if(t.kind==="slam"){for(let i=0;i<=t.span;i+=2.2)this.effects.splash(t.rootX+i,Mt,t.z,16777215);this.effects.bigSplash(this.x+.3,Mt,t.z,14677247,.7),this.hooks.onShake?.(.55)}else this.effects.bigSplash(t.x,Mt,t.z,14677247,1),this.hooks.onShake?.(.4);this.phase==="boss"&&!e.dead&&this.inLane(t.z)&&this.hooks.onKill?.("kraken")}updateDive(t,e){const i=this.kraken,n=i.dive;if(n)if(n.t+=t,n.step==="down")i.y=xe(0,-6,fn(Math.min(1,n.t/.8))),n.t>=.9&&(n.step="erupt",n.t=.7);else if(n.step==="erupt"){if(n.t>=1.3){n.t=0,n.waves-=1;const o=this.lane;this.erupt(o),this.erupt(this.pickLane(0,[o])),n.waves<=0&&(n.step="wait",n.t=0)}}else if(n.step==="wait"){if(n.t>=1.4){n.step="up",n.t=0;const o=[-1,0,1].map(r=>this.laneZ(Math.round(this.mid)+r));i.z=i.targetZ=o[Math.floor(Math.random()*o.length)],this.effects.bigSplash(i.x,Mt,i.z,14677247,2),this.hooks.onShake?.(.6)}}else n.step==="up"&&(i.y=xe(-6,0,fn(Math.min(1,n.t/.9))),n.t>=.9&&(i.y=0,i.dive=null,i.nextAttack=1.2,this.roar(1)))}hitKraken(t,e,i){const n=this.kraken,o=mt.kraken;n.health-=1,n.flash=1,this.hooks.onSound?.("hit"),this.effects.explosion(n.x+1.6,e,i,.75),this.hooks.onShake?.(.22);const r=Math.max(0,n.health/o.health),a=r<=1/3?2:r<=2/3?1:0;if(this.hooks.onBoss?.(r,{hurt:!0,enraged:a===2}),n.health<=0){this.slay();return}a!==n.stage&&(n.stage=a,this.roar(1.6),this.hooks.onShake?.(.9),this.hooks.onBanner?.(a===2?"ENRAGED!":"IT’S ANGRY",a===2?"boss":"warn"),n.nextAttack=1.8,this.stormTarget=a===2?1:.95,this.lightning=1)}slay(){const t=this.kraken,e=mt.kraken;t.state="dying",t.dead=e.deathSeconds,t.dive=null,this.pendingRocks=[];for(const i of this.arms)i.marker&&this.group.remove(i.marker),i.fill&&this.group.remove(i.fill),i.marker=null,i.fill=null,i.state="sink",i.t=0;for(const i of this.shells)this.removeShell(i);this.shells.length=0;for(const i of this.hazards)i.spent=!0;this.hasCannon=!1,this.hooks.onItems?.(),this.hooks.onBoss?.(null),this.hooks.onBanner?.("KRAKEN SLAIN","win"),this.hooks.onScore?.(e.points),this.roar(e.deathSeconds),this.hooks.onShake?.(1.2)}updateKrakenDeath(t){const e=this.kraken;e.dead-=t;const i=mt.kraken.deathSeconds-e.dead;Math.random()<t*9&&(this.effects.explosion(e.x+Se(-1.6,1.6),Mt+Se(.4,3.4),e.z+Se(-1.6,1.6),Se(.6,1.1)),e.flash=1),i>1.2&&(e.y-=t*2.2,e.root.rotation.z+=t*.35,e.root.rotation.x+=t*.2),e.dead<=0&&(this.effects.bigSplash(e.x,Mt,e.z,14677247,2.6),this.effects.confetti?.(e.x,Mt,e.z),this.hooks.onShake?.(.8),this.clearKraken(),this.startHome())}startHome(){this.phase="home",this.homeward=!0,this.homeClock=0,this.stormTarget=0,this.speed=0,this.hooks.onBanner?.("HEADING HOME","calm");const t=Math.round(-this.centreZ/hn);this.landing=this.hooks.landing?.(t)??{row:t,x:this.homeX},this.homeFrom={x:this.x,z:this.z},this.homeTo={x:this.landing.x,z:-this.landing.row*hn}}updateHome(t){this.homeClock+=t;const e=mt.home.turnSeconds;if(this.homeClock<e){const h=this.homeClock/e;this.yaw=xe(Math.PI,0,fn(h)),this.lean=Math.sin(h*Math.PI)*.12,this.speed=0;return}const i=Math.min(1,(this.homeClock-e)/mt.home.runSeconds),n=i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,o=fn(fs((i-.2)/.5,0,1)),r=this.x,a=this.z;this.x=xe(this.homeFrom.x,this.homeTo.x,n),this.z=xe(this.homeFrom.z,this.homeTo.z,o);const l=this.x-r,c=this.z-a;if(this.speed=Math.hypot(l,c)/Math.max(t,1e-4),Math.abs(l)+Math.abs(c)>1e-5){const h=fs(Math.atan2(-c,Math.max(l,1e-4)),-.6,.6);this.yaw+=(h-this.yaw)*Math.min(1,t*5)}this.centreZ=this.z,this.lane=Math.round(this.mid),i>=1&&this.hooks.onAshore?.(this.landing)}}function r1(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new Mi;let c=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<s.length;++u){const d=s[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(const h in o){const f=ih(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let x=0;x<r[h].length;++x)d.push(r[h][x][u]);const g=ih(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ih(s){let t,e,i,n=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new ei(r,e,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){const x=h.getComponent(u,g);a.setComponent(u+f,g,x)}}else r.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}const ui=new Yt({vertexColors:!0,fog:!1}),Bs=9067058,vi=6175263,ma=11039807,nh=16761375,sh=1907482,a1={body:8226706,band:3949389,rim:10514495,wheel:2369324,hub:13676124,inside:3025448},l1={body:9263674,band:5124386,rim:7031347,wheel:2369324,hub:9147036,inside:3025448},Rn={skin:14723212,skinDark:12090472,band:9327944,plate:15781298,throat:3802640,deep:1180170,gum:12726858,tooth:16774880,eye:16773962,bristle:5910568};function oh(s){const t=[{size:[.84,.12,1],pos:[0,.2,0],color:s.band},{size:[.96,.08,1.16],pos:[0,.3,0],color:s.inside},{size:[.09,.52,1.24],pos:[.5,.56,0],color:s.body},{size:[.09,.52,1.24],pos:[-.5,.56,0],color:s.body},{size:[1,.52,.09],pos:[0,.56,.6],color:s.body},{size:[1,.52,.09],pos:[0,.56,-.6],color:s.body},{size:[.14,.09,1.34],pos:[.52,.85,0],color:s.rim},{size:[.14,.09,1.34],pos:[-.52,.85,0],color:s.rim},{size:[1.14,.09,.14],pos:[0,.85,.63],color:s.rim},{size:[1.14,.09,.14],pos:[0,.85,-.63],color:s.rim},{size:[.7,.1,.1],pos:[0,.26,.64],color:s.band},{size:[.7,.1,.1],pos:[0,.26,-.64],color:s.band}];for(const e of[-.34,.34])for(const i of[.52,-.52])t.push({size:[.08,.54,.09],pos:[i,.56,e],color:s.band}),t.push({size:[.09,.06,.06],pos:[i*1.03,.7,e],color:s.hub}),t.push({size:[.09,.06,.06],pos:[i*1.03,.42,e],color:s.hub});for(const e of[-.3,.3])t.push({size:[.09,.54,.08],pos:[e,.56,.62],color:s.band});for(const e of[-.46,.46])for(const i of[-.36,.36])t.push({size:[.1,.3,.3],pos:[e,.15,i],color:s.wheel}),t.push({size:[.11,.1,.1],pos:[e*1.03,.15,i],color:s.hub});return t}function ga(s,t,e,i=1){return[{size:[.2*i,.18*i,.2*i],pos:[s,t,e],color:16742938},{size:[.14*i,.18*i,.14*i],pos:[s,t+.12*i,e],color:16758832},{size:[.07*i,.14*i,.07*i],pos:[s,t+.24*i,e],color:16773536}]}function un(s,t,e,i,n,o,r=0,a=0){return[{size:[n,i,n],pos:[s,t+i/2,e],color:o,rotZ:r,rotY:a},{size:[n*.6,i*.3,n*.6],pos:[s-Math.sin(r)*i*.55,t+i*1.02,e],color:16777215,rotZ:r,rotY:a}]}const Tl={minecart:()=>oh(a1),cartlamp:()=>[{size:[.24,.2,.12],pos:[0,.64,-.7],color:16773552},{size:[.3,.05,.18],pos:[0,.77,-.7],color:16765802}],orecart:()=>{const s=oh(l1),t=[[0,.92,0,.8,.26,.9,5984328],[.22,1.06,-.2,.4,.2,.4,7102293],[-.2,1.04,.22,.42,.2,.36,4866362],[-.1,1.14,-.1,.3,.16,.3,7102293],[.2,1,.3,.2,.14,.2,15119418],[-.28,1,-.3,.16,.12,.16,15119418]];for(const[e,i,n,o,r,a,l]of t)s.push({size:[o,r,a],pos:[e,i,n],color:l});return s},orecartlamp:()=>[{size:[.18,.16,.06],pos:[.3,.66,.68],color:16726570},{size:[.18,.16,.06],pos:[-.3,.66,.68],color:16726570}],barricade:()=>{const s=[{size:[.14,.64,.14],pos:[.64,.32,0],color:vi},{size:[.14,.64,.14],pos:[-.64,.32,0],color:vi},{size:[1.46,.12,.07],pos:[0,.2,.05],color:Bs},{size:[1.3,.1,.05],pos:[0,.3,.09],color:ma,rotZ:.3},{size:[1.3,.1,.05],pos:[0,.3,.1],color:ma,rotZ:-.3}];for(let t=0;t<6;t++)s.push({size:[.25,.16,.08],pos:[-.625+t*.25,.48,.05],color:t%2?sh:nh});return s},barricadelamp:()=>[{size:[.14,.12,.14],pos:[.64,.7,0],color:16726570},{size:[.14,.12,.14],pos:[-.64,.7,0],color:16726570}],bat:()=>[{size:[.22,.18,.28],pos:[0,0,0],color:2761265},{size:[.18,.15,.16],pos:[0,.05,.18],color:3418429},{size:[.05,.1,.04],pos:[.06,.16,.18],color:2761265},{size:[.05,.1,.04],pos:[-.06,.16,.18],color:2761265},{size:[.05,.05,.02],pos:[.045,.08,.265],color:16723245,flat:!0},{size:[.05,.05,.02],pos:[-.045,.08,.265],color:16723245,flat:!0},{size:[.02,.04,.02],pos:[.025,-.02,.265],color:16777215,flat:!0},{size:[.02,.04,.02],pos:[-.025,-.02,.265],color:16777215,flat:!0}],batwing:()=>[{size:[.46,.025,.26],pos:[.24,0,-.03],color:4075849},{size:[.48,.04,.04],pos:[.24,.01,.1],color:1840674},{size:[.04,.03,.26],pos:[.3,.01,-.02],color:1840674},{size:[.04,.03,.22],pos:[.44,.01,-.02],color:1840674}],stalactite:s=>{const t=s==="crystal",e=t?8019140:7035468,i=t?10256618:8745568;return[{size:[.62,.4,.62],pos:[0,-.2,0],color:e},{size:[.48,.42,.48],pos:[0,-.58,0],color:i},{size:[.34,.4,.34],pos:[0,-.96,0],color:e},{size:[.2,.36,.2],pos:[0,-1.32,0],color:i},{size:[.09,.22,.09],pos:[0,-1.6,0],color:t?15129599:11048319}]},rubble:s=>{const t=s==="crystal",e=t?6244239:7035468,i=t?9072592:8745568,n=t?4075105:5062710;return[{size:[.62,.34,.5],pos:[-.3,.17,0],color:e,rotY:.3},{size:[.5,.42,.46],pos:[.28,.21,.05],color:i,rotY:-.4},{size:[.4,.26,.4],pos:[.02,.36,-.06],color:n,rotY:.8},{size:[.3,.2,.3],pos:[-.6,.1,.12],color:i},{size:[.28,.18,.3],pos:[.62,.09,-.1],color:e},{size:[.18,.14,.18],pos:[.1,.07,.3],color:n}]},crystalbase:()=>[{size:[1.4,.2,.6],pos:[0,.1,0],color:4075105},{size:[.9,.14,.4],pos:[.1,.24,0],color:4930155}],crystalspikes:()=>[...un(-.45,.1,0,.62,.2,6222591,.25),...un(-.1,.1,.05,.5,.24,16735968,-.1,.6),...un(.25,.1,-.05,.66,.22,6222591,-.3,.3),...un(.55,.1,.05,.4,.18,10354538,-.5)],vent:()=>[{size:[.4,.14,.9],pos:[-.5,.07,0],color:2759706},{size:[.4,.14,.9],pos:[.5,.07,0],color:2759706},{size:[.6,.14,.3],pos:[0,.07,.4],color:3548194},{size:[.6,.14,.3],pos:[0,.07,-.4],color:3548194},{size:[.2,.2,.2],pos:[.5,.18,.3],color:1839890},{size:[.18,.16,.18],pos:[-.46,.16,-.3],color:1839890}],ventglow:()=>[{size:[.62,.05,.54],pos:[0,.06,0],color:16734740},{size:[.34,.06,.3],pos:[0,.08,0],color:16765024}],lavacolumn:()=>[{size:[.8,.8,.8],pos:[0,.4,0],color:16730640},{size:[.66,.9,.66],pos:[0,1.2,0],color:16742938},{size:[.54,.8,.54],pos:[0,2,0],color:16753182},{size:[.4,.6,.4],pos:[0,2.7,0],color:16765024},{size:[.24,.4,.24],pos:[0,3.2,0],color:16773536},{size:[.3,.3,.3],pos:[.4,1.6,.1],color:16742938},{size:[.24,.24,.24],pos:[-.36,2.3,-.1],color:16753182}],nugget:()=>[{size:[.24,.18,.22],pos:[0,0,0],color:16763194,rotY:.4},{size:[.16,.14,.16],pos:[.1,.08,.04],color:16769146,rotY:-.3},{size:[.12,.1,.12],pos:[-.09,.07,-.05],color:15114782},{size:[.06,.06,.06],pos:[.04,.14,.06],color:16776160}],gem:s=>[{size:[.3,.3,.3],pos:[0,0,0],color:s==="1"?16735968:6222591,rotY:Math.PI/4,rotX:Math.PI/4},{size:[.16,.16,.16],pos:[0,.08,.06],color:16777215,rotY:Math.PI/4,rotX:Math.PI/4}],crate:()=>[{size:[.72,.56,.62],pos:[0,.28,0],color:10119738},{size:[.76,.08,.66],pos:[0,.04,0],color:vi},{size:[.76,.08,.66],pos:[0,.54,0],color:vi},{size:[.08,.56,.66],pos:[.34,.28,0],color:vi},{size:[.08,.56,.66],pos:[-.34,.28,0],color:vi},{size:[.74,.16,.64],pos:[0,.3,0],color:13903902},{size:[.14,.14,.5],pos:[-.16,.66,0],color:13903902},{size:[.14,.14,.5],pos:[0,.66,0],color:14826022},{size:[.14,.14,.5],pos:[.16,.66,0],color:13903902},{size:[.48,.15,.06],pos:[0,.66,0],color:15326392},{size:[.03,.14,.03],pos:[0,.8,.2],color:3811866}],dynamite:()=>[{size:[.16,.16,.46],pos:[0,0,0],color:13903902},{size:[.17,.17,.08],pos:[0,0,.12],color:15326392},{size:[.03,.03,.14],pos:[0,.04,-.29],color:3811866}],spark:()=>[{size:[.12,.12,.12],pos:[0,0,0],color:16765024},{size:[.06,.06,.06],pos:[0,0,0],color:16777215}],post:()=>[{size:[.3,2.6,.3],pos:[0,1.3,0],color:vi},{size:[.4,.14,.4],pos:[0,2.6,0],color:Bs},{size:[.06,.06,.34],pos:[0,1.5,.2],color:3949389},{size:[.08,.36,.08],pos:[0,1.62,.36],color:Bs,rotX:.3}],torchflame:()=>ga(0,1.86,.44,1),stores:()=>[{size:[.5,.62,.5],pos:[0,.31,0],color:8015660},{size:[.54,.06,.54],pos:[0,.2,0],color:3949389},{size:[.54,.06,.54],pos:[0,.48,0],color:3949389},{size:[.56,.5,.56],pos:[.1,.25,.62],color:10119738},{size:[.6,.06,.6],pos:[.1,.5,.62],color:vi},{size:[.42,.4,.42],pos:[.12,.7,.62],color:11039807,rotY:.4}],pick:()=>[{size:[.07,1,.07],pos:[0,.5,0],color:ma,rotZ:.25},{size:[.6,.1,.1],pos:[-.12,.98,0],color:9147036,rotZ:.25}],stalagmite:s=>{const t=s==="crystal"?4930155:4869212,e=s==="crystal"?6968721:6448506;return[{size:[.62,.5,.62],pos:[0,.25,0],color:t},{size:[.46,.5,.46],pos:[0,.72,0],color:e},{size:[.3,.5,.3],pos:[0,1.18,0],color:t},{size:[.14,.34,.14],pos:[0,1.58,0],color:e}]},shrooms:()=>[{size:[.05,.22,.05],pos:[0,.11,0],color:12576992},{size:[.26,.08,.26],pos:[0,.24,0],color:4124872},{size:[.04,.16,.04],pos:[.2,.08,.14],color:12576992},{size:[.18,.06,.18],pos:[.2,.17,.14],color:8060912},{size:[.04,.12,.04],pos:[-.16,.06,.1],color:12576992},{size:[.14,.05,.14],pos:[-.16,.13,.1],color:4124872}],crystals:s=>{const t=[6222591,16735968,10354538],e=t[Number(s)%3],i=t[(Number(s)+1)%3];return[...un(0,0,0,1.3,.32,e,.2),...un(.3,0,.2,.9,.24,e,-.35,.5),...un(-.3,0,-.1,.7,.22,i,.5,.2),...un(.1,0,-.3,.5,.18,e,-.1,.9)]},basalt:()=>[{size:[.46,1.4,.46],pos:[0,.7,0],color:2892838},{size:[.42,1,.42],pos:[.44,.5,.1],color:3550254},{size:[.4,1.8,.4],pos:[-.4,.9,-.1],color:2367008},{size:[.36,.7,.36],pos:[.1,.35,.44],color:4076084}],daylight:()=>[{size:[7.2,5.2,.2],pos:[0,2.2,0],color:16774872},{size:[5.4,4.2,.24],pos:[0,2,.05],color:16777215}],station:()=>{const s=[{size:[1.4,.2,.3],pos:[0,.4,0],color:Bs},{size:[.2,.5,.3],pos:[.5,.25,0],color:vi},{size:[.2,.5,.3],pos:[-.5,.25,0],color:vi}];for(let t=0;t<4;t++)s.push({size:[.35,.18,.06],pos:[-.52+t*.35,.4,.17],color:t%2?sh:nh});return s},gantry:()=>{const s=[{size:[.26,3.2,.26],pos:[2.8,1.6,0],color:vi},{size:[.26,3.2,.26],pos:[-2.8,1.6,0],color:vi},{size:[6,.24,.28],pos:[0,3.1,0],color:Bs},{size:[3.2,.8,.12],pos:[0,2.55,.1],color:3810840},{size:[3,.62,.14],pos:[0,2.55,.12],color:13214826}];return s.push({size:[1.2,.08,.04],pos:[0,2.55,.2],color:3810840,rotZ:.5}),s.push({size:[1.2,.08,.04],pos:[0,2.55,.2],color:3810840,rotZ:-.5}),s.push({size:[.36,.12,.05],pos:[-.44,2.84,.21],color:3810840,rotZ:-.5}),s.push({size:[.24,.26,.05],pos:[.48,2.84,.21],color:3810840,rotZ:.5}),s},gantrylamps:()=>[...ga(2.8,3.26,0,.9),...ga(-2.8,3.26,0,.9)],wormhead:()=>{const s=Rn,t=[{size:[2.3,2,1.6],pos:[0,0,-.2],color:s.skin},{size:[2.42,2.1,.2],pos:[0,0,-.62],color:s.band},{size:[2.38,2.06,.14],pos:[0,0,.2],color:s.skinDark},{size:[1.6,.2,.9],pos:[0,1.06,-.3],color:s.plate},{size:[1,.16,.5],pos:[0,1.2,-.4],color:s.plate},{size:[.2,1.4,.9],pos:[1.2,0,-.3],color:s.plate},{size:[.2,1.4,.9],pos:[-1.2,0,-.3],color:s.plate},{size:[1.5,1.34,.12],pos:[0,0,.58],color:s.throat},{size:[.86,.76,.1],pos:[0,0,.62],color:s.deep}];for(let e=0;e<16;e++){const i=e/16*Math.PI*2;t.push({size:[.34,.2,.14],pos:[Math.cos(i)*.82,Math.sin(i)*.76,.62],color:s.gum,rotZ:i+Math.PI/2})}for(const[e,i,n,o]of[[14,.66,.3,.7],[10,.4,.22,.66]])for(let r=0;r<e;r++){const a=r/e*Math.PI*2+(e===10?.3:0);t.push({size:[.12,n,.12],pos:[Math.cos(a)*i,Math.sin(a)*i*.94,o],color:s.tooth,rotZ:a-Math.PI/2})}for(const e of[1,-1])for(let i=0;i<4;i++)t.push({size:[.34,.06,.06],pos:[e*1.32,-.6+i*.4,-.2],color:s.bristle,rotZ:e*.4});return t},wormeyes:()=>{const s=[];for(const[t,e,i]of[[.5,.82,.54],[.86,.5,.44],[.26,1,.36]])for(const n of[1,-1])s.push({size:[.16,.14,.1],pos:[n*t,e,i],color:Rn.eye});return s},wormpetal:()=>{const s=[{size:[1,.56,.2],pos:[0,-.28,.06],color:Rn.skinDark},{size:[1.06,.12,.24],pos:[0,-.02,.06],color:Rn.band},{size:[.7,.3,.06],pos:[0,-.3,.17],color:Rn.skin}];for(let t=0;t<4;t++)s.push({size:[.1,.2,.1],pos:[-.33+t*.22,-.64,.08],color:Rn.tooth});return s},wormseg:()=>{const s=Rn,t=[{size:[1.9,1.7,1.2],pos:[0,0,0],color:s.skin},{size:[2,1.8,.22],pos:[0,0,.45],color:s.band},{size:[1.3,.16,.86],pos:[0,.9,-.05],color:s.plate},{size:[1.2,.14,.8],pos:[0,-.9,-.05],color:s.skinDark}];for(const e of[1,-1])t.push({size:[.34,.06,.06],pos:[e*1.08,.2,-.1],color:s.bristle,rotZ:e*.4}),t.push({size:[.34,.06,.06],pos:[e*1.08,-.3,.1],color:s.bristle,rotZ:e*-.3});return t},burrow:()=>{const s=[];for(let t=0;t<12;t++){const e=t/12*Math.PI*2,i=1.35+t%3*.18;s.push({size:[.6,.3+t%2*.16,.44],pos:[Math.cos(e)*i,.1,Math.sin(e)*i*.8],color:t%2?5916214:4601386,rotY:-e,rotZ:.35})}return s},boulder:()=>[{size:[.72,.62,.66],pos:[0,0,0],color:7035468},{size:[.52,.34,.52],pos:[.1,.3,-.05],color:8745568},{size:[.34,.32,.36],pos:[-.3,-.1,.25],color:5062710},{size:[.3,.26,.3],pos:[.28,-.14,.26],color:6048832}]};Tl.railend=()=>[{size:[.12,.12,.08],pos:[.42,.24,0],color:16726570},{size:[.12,.12,.08],pos:[-.42,.24,0],color:16726570}];const Cn=Sl(Tl);function _i(s,t,e,i,n,o=1){return Tl[s](t).map(r=>({...r,size:r.size.map(a=>a*o),pos:[e+r.pos[0]*o,i+r.pos[1]*o,n+r.pos[2]*o]}))}const We=.16,xa=.34,rh=14690846,ah=16742972,lh=[14723212,12090472,9327944,12726858],va=1.3,W=(s,t)=>s+Math.random()*(t-s),qo=s=>s*s*(3-2*s),ge=pi.lerp,Ti=pi.clamp;function ch(s){let t=0;for(const i in s)t+=s[i];let e=Math.random()*t;for(const i in s)if(e-=s[i],e<=0)return i;return Object.keys(s)[0]}function c1(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function hh(s){const t=[...s];for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}class fh{constructor(t,e,i){this.max=e,this.mesh=new mr(new Pe(1,1,1),i,e),this.mesh.instanceMatrix.setUsage(ur),this.mesh.frustumCulled=!1,this.items=[],this.color=new Ht,this.dummy=new He;for(let n=0;n<e;n++)this.items.push({t:1,life:1}),this.mesh.setColorAt(n,this.color.setHex(16777215));this.next=0,t.add(this.mesh)}emit(t,e,i,{vx:n=0,vy:o=0,vz:r=0,life:a=.6,size:l=.1,gravity:c=0,color:h=16777215,drag:f=0}={}){const u=this.next;this.next=(this.next+1)%this.max;const d=this.items[u];d.x=t,d.y=e,d.z=i,d.vx=n,d.vy=o,d.vz=r,d.life=a,d.t=0,d.size=l,d.gravity=c,d.drag=f,d.spin=Math.random()*3,this.mesh.setColorAt(u,this.color.setHex(h)),this.mesh.instanceColor.needsUpdate=!0}update(t){const e=this.dummy;for(let i=0;i<this.max;i++){const n=this.items[i];if(n.t<n.life){if(n.t+=t,n.vy-=n.gravity*t,n.drag){const a=Math.max(0,1-n.drag*t);n.vx*=a,n.vz*=a}n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t;const o=Math.min(1,n.t/n.life),r=n.size*(1-o*o);e.position.set(n.x,n.y,n.z),e.rotation.set(n.spin*n.t,n.spin,0),e.scale.setScalar(Math.max(1e-4,r))}else e.position.set(0,-80,0),e.scale.setScalar(1e-4);e.updateMatrix(),this.mesh.setMatrixAt(i,e.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}clear(){for(const t of this.items)t.t=t.life}}class h1{constructor(t,e,i={}){this.view=t,this.effects=e,this.hooks=i,this.group=new Ue,this.group.visible=!1,t.add(this.group),this.active=!1,this.phase="idle",this.tracks=Q.tracks,this.mid=(this.tracks-1)/2,this.sky=new Ht(Q.themes.mine.sky),this.skyTarget=new Ht,this.cart=new Ue,this.cart.add(this.mesh("minecart")),this.cart.add(this.mesh("cartlamp","",ui)),this.lampMaterial=new Yt({color:16769696,transparent:!0,opacity:.16,blending:ds,depthWrite:!1,fog:!1});const n=new i0;n.moveTo(-.35,0),n.lineTo(.35,0),n.lineTo(1.5,8),n.lineTo(-1.5,8),n.closePath();const o=new bl(n).rotateX(Math.PI/2);this.lamp=new lt(o,this.lampMaterial),this.lamp.frustumCulled=!1,this.group.add(this.lamp),this.group.add(this.cart),this.sparks=new fh(this.group,320,new Yt({color:16777215,blending:ds,transparent:!0,depthWrite:!1,fog:!1})),this.dust=new fh(this.group,200,new Yt({color:16777215})),this.dangerMaterial=new Yt({color:rh,fog:!1}),this.dangerFill=new Yt({color:ah,fog:!1}),this.ringGeometry=new As(.5,.72,24).rotateX(-Math.PI/2),this.dotGeometry=new Hn(.2,12).rotateX(-Math.PI/2),this.barGeometry=new Pe(1,.03,1),this.poolMaterials={},this.poolGeometry=new Hn(1,18).rotateX(-Math.PI/2),this.wormMaterial=new Yt({vertexColors:!0}),this.eyeMaterial=new Yt({vertexColors:!0,fog:!1}),this.chunks=new Map,this.plan=[],this.live=[],this.gaps=[],this.pickups=[],this.rocks=[],this.crates=[],this.throws=[],this.worm=null,this.extras=[],this.keys=!!window.matchMedia?.("(hover: hover) and (pointer: fine)").matches}mesh(t,e="",i=ke){const n=new lt(Cn.get(t,e),i);return n.frustumCulled=!1,n}add(t){return this.group.add(t),t}begin(t,{entryRow:e=0}={}){this.active=!0,this.phase="station",this.group.visible=!0,this.entryRow=e,this.seed=Math.floor(Math.random()*1e9),this.x=0,this.z=0,this.y=0,this.vy=0,this.air=!1,this.track=Math.round(this.mid),this.lean=0,this.pitch=0,this.speed=0,this.launch=0,this.travelled=0,this.clock=0,this.phaseClock=0,this.legIndex=-1,this.falling=null,this.jumpBuffer=0,this.drop=2.6,this.dropV=0,this.sparkTimer=0,this.ambientTimer=0,this.shown={progress:-1,reload:-1},this.planZ=-34,this.planDone=!1,this.lastPattern=null,this.sticks=0,this.throwCooldown=0,this.nextCrate=0,this.cratesDropped=0,this.surfaced=!1,this.nextHeart=Q.heart.first,this.invuln=0,this.flockTimer=3,this.flocks=[],this.sky.setHex(Q.themes.mine.sky),this.flash=0,t.facing="forward",t.shadow.visible=!1,t.group.rotation.set(0,0,0),this.cart.visible=!0,this.buildStation(),this.update(0,t),this.hooks.onItems?.(),this.hooks.onHint?.(this.controlsHint()),this.report(0)}controlsHint(){return this.keys?"↑ jump · ← → switch track":"Swipe up to jump · sideways to switch track"}finish(t){const e=this.active;this.active=!1,this.phase="idle",this.group.visible=!1,e&&(this.hooks.onBanner?.(null),this.hooks.onVoyage?.(null),this.hooks.onBoss?.(null),this.hooks.onHint?.(null));for(const i of[...this.chunks.keys()])this.dropChunk(i);for(const i of this.live)this.clearMeshes(i);this.live.length=0,this.plan.length=0,this.gaps.length=0;for(const i of this.pickups)i.mesh&&this.group.remove(i.mesh);this.pickups.length=0;for(const i of this.rocks)this.clearMeshes(i);this.rocks.length=0;for(const i of this.crates)this.clearMeshes(i);this.crates.length=0;for(const i of this.throws)this.clearMeshes(i);this.throws.length=0;for(const i of this.extras)this.group.remove(i),i.userData.own&&i.geometry.dispose();this.extras.length=0,this.clearWorm();for(const i of this.flocks??[])for(const n of i.bats)this.group.remove(n.group);this.flocks=[],this.sparks.clear(),this.dust.clear(),this.sticks=0,t&&(t.ridingFloat=null)}clearMeshes(t){for(const e of t.meshes??[])this.group.remove(e);t.meshes=[]}items(){return!this.active||this.phase!=="boss"||!this.worm||this.worm.state==="dying"?[]:[{id:"dynamite",label:"Dynamite",action:this.sticks?`×${this.sticks}`:"None",empty:!this.sticks}]}get cameraRow(){return-this.z}get cameraX(){return 0}get fighting(){return this.phase==="rumble"||this.phase==="boss"||this.phase==="victory"}get viewScale(){return this.fighting?Q.view.bossScale:Q.view.scale}get rowAhead(){return this.fighting?Q.view.bossAhead:Q.view.ahead}trackX(t){return(t-this.mid)*Q.trackGap}onTrack(t){return Math.abs(this.x-this.trackX(t))<Q.trackReach}nearestTrack(){return Ti(Math.round(this.x/Q.trackGap+this.mid),0,this.tracks-1)}overlaps(t,e,i=0){return this.z-Q.cartHalf<t+i&&this.z+Q.cartHalf>t-e-i}speedAt(t){const e=Q.speed;return ge(e.start,e.end,Ti(t/e.overTiles,0,1))}legAt(t){let e=Q.legs[0];for(const i of Q.legs)t>=i.at&&(e=i);return e}themeAt(t){return t>=Q.reach?"lair":this.legAt(t/Q.reach).theme}get theme(){return Q.themes[this.themeAt(Math.max(0,this.travelled))]}steer(t){if(!this.active||this.phase==="wrecked"||this.phase==="station"||this.phase==="exit"||this.falling)return!1;if(t==="forward")return this.jump();if(t==="back")return!1;const e=t==="right"?1:t==="left"?-1:0,i=this.track+e;if(i<0||i>=this.tracks){this.hooks.onSound?.("bump"),this.lean+=.1*e,this.hooks.onShake?.(.08);for(let n=0;n<6;n++)this.sparkAt(this.x+e*.55,We+this.y+.3,this.z+W(-.4,.4),e);return!1}return this.track=i,this.hooks.onSound?.("clack"),!0}jump(){if(this.air||this.y>.02)return this.jumpBuffer=.16,!1;this.vy=Q.jump.v,this.air=!0,this.hooks.onSound?.("jump");for(let t=0;t<8;t++)this.sparkAt(this.x+W(-.45,.45),We+.05,this.z+W(-.4,.4),0);return!0}fire(){const t=this.worm;if(!this.active||this.phase!=="boss"||!t||t.state!=="fight"||this.sticks<=0||this.throwCooldown>0)return!1;this.sticks-=1,this.throwCooldown=Q.boss.throwCooldown,this.hooks.onSound?.("throw");const e=this.add(this.mesh("dynamite")),i=this.add(this.mesh("spark","",ui));return this.throws.push({meshes:[e,i],stick:e,spark:i,x:this.x,y0:We+this.y+xa+.9,t:0}),this.hooks.onItems?.(),this.hooks.onShake?.(.06),!0}update(t,e){if(this.active&&(this.player=e,this.clock+=t,this.invuln=Math.max(0,this.invuln-t),this.phaseClock+=t,this.flash=Math.max(0,this.flash-t*3),this.phase==="station"&&this.updateStation(t,e),this.advance(t),this.updateSteer(t),this.updateJump(t),this.planAhead(),this.ensureChunks(),this.spawnAhead(),this.updateObstacles(t),this.updatePickups(t),this.updateRocks(t),this.worm&&this.updateWorm(t),this.updateCrates(t),this.updateThrows(t),this.updateAmbient(t),this.sparks.update(t),this.dust.update(t),this.placeCart(t,e),this.phase==="wrecked"&&this.updateWreck(t,e),this.updateLegs(),this.updateSky(t),(this.phase==="run"||this.phase==="rumble")&&this.report(Math.min(1,this.travelled/Q.reach)),this.phase==="exit"&&!this.surfaced&&this.phaseClock>Q.exit.seconds&&(this.surfaced=!0,this.hooks.onSurface?.()),this.throwCooldown>0&&(this.throwCooldown=Math.max(0,this.throwCooldown-t)),this.phase==="boss"&&this.sticks>0)){const i=1-this.throwCooldown/Q.boss.throwCooldown,n=Math.round(i*20)/20;n!==this.shown.reload&&(this.shown.reload=n,this.hooks.onReload?.(n))}}report(t){Math.abs(t-this.shown.progress)<.002||(this.shown.progress=t,this.hooks.onVoyage?.(t,"mine"))}setPhase(t){this.phase=t,this.phaseClock=0}updateStation(t){if(this.drop>0&&(this.dropV-=26*t,this.drop=Math.max(0,this.drop+this.dropV*t),this.drop===0)){this.hooks.onShake?.(.3);for(let e=0;e<14;e++)this.dust.emit(this.x+W(-.7,.7),.2,this.z+W(-.7,.7),{vx:W(-1.4,1.4),vy:W(.6,2),vz:W(-1,1),life:.8,size:W(.12,.22),gravity:3,color:9074790,drag:2});this.dropV=0}Math.random()<.4&&this.dust.emit(this.trackX(this.track)+W(-.6,.6),W(3,6),W(-.6,.6),{vy:-W(1,3),life:1.2,size:W(.04,.09),gravity:4,color:13219994}),this.phaseClock>1.05&&(this.setPhase("run"),this.hooks.onBanner?.("THE DEEP MINE","calm"))}advance(t){let e=this.speed;const i=Q.boss;switch(this.phase){case"station":e=0;break;case"run":{this.launch=Math.min(1,this.launch+t/Q.launchSeconds),e=this.speedAt(this.travelled)*qo(this.launch),this.speed=e,this.travelled>=Q.reach&&this.startRumble();break}case"rumble":e=i.speed,this.updateRumble(t);break;case"boss":case"victory":e=i.speed;break;case"exit":e=Q.exit.speed;break;case"wrecked":e=0;break}if(this.phase!=="run"){const o=this.phase==="wrecked"?1.6:this.phase==="exit"?1.2:2.2;this.speed+=(e-this.speed)*Math.min(1,t*o)}this.falling&&(this.speed*=Math.pow(.4,t));const n=this.speed*t;this.z-=n,this.travelled+=n}updateSteer(t){const e=this.trackX(this.track),i=this.x;this.x+=(e-this.x)*Math.min(1,t*Q.switchLerp);const n=(this.x-i)/Math.max(t,1e-4);if(this.lean+=(Ti(-n*.035,-.32,.32)-this.lean)*Math.min(1,t*10),Math.abs(n)>3&&!this.air){const o=Math.sign(n);Math.random()<t*40&&this.sparkAt(this.x-o*.5,We+.05,this.z+W(-.4,.4),-o)}}updateJump(t){this.jumpBuffer=Math.max(0,this.jumpBuffer-t);const e=Q.jump.gravity;if(this.falling){this.falling.t+=t,this.vy-=e*t,this.y+=this.vy*t,this.falling.lava&&Math.random()<t*30&&this.sparkAt(this.x+W(-.6,.6),-1,this.z+W(-.6,.6),0,16742938),this.falling.t>.42&&!this.falling.reported&&this.phase!=="wrecked"&&(this.falling.reported=!0,this.hit(this.falling.lava?"lava":"pit"));return}if(!this.air&&this.y<=0){this.y=0,this.vy=0;return}if(this.vy-=e*t,this.y+=this.vy*t,this.pitch=Ti(this.vy*.03,-.25,.25),this.y<=0){const i=this.vy<-9;this.y=0,this.vy=0,this.air=!1,this.pitch=0,this.hooks.onShake?.(i?.18:.1),this.hooks.onSound?.("land");for(let n=0;n<(i?14:8);n++)this.sparkAt(this.x+W(-.5,.5),We,this.z+W(-.5,.5),0);this.jumpBuffer>0&&(this.jumpBuffer=0,this.jump())}}ensureChunks(){const t=Q.chunk,e=Math.floor((-this.z-Q.keepBehind)/t),i=Math.floor((-this.z+Q.buildAhead)/t);for(let n=Math.max(-1,e);n<=i;n++)this.chunks.has(n)||this.buildChunk(n);for(const n of this.chunks.keys())n<e-1&&this.dropChunk(n)}dropChunk(t){const e=this.chunks.get(t);if(e){for(const i of e.meshes)this.group.remove(i),i.geometry.dispose();this.chunks.delete(t)}}poolMaterial(t){let e=this.poolMaterials[t];return e||(e=new Yt({color:t,transparent:!0,opacity:.16,blending:ds,depthWrite:!1,fog:!1}),this.poolMaterials[t]=e),e}wallHeight(t,e){const i=Math.abs(t)-3,n=t>0?1.7:.3,o=Math.sin(e*.37+n)*.55+Math.sin(e*.13-t*.5)*.9+Math.sin(e*.71+t*1.3)*.25;return Math.max(.7,1.4+i*.8+o)}gapAt(t,e){for(const i of this.gaps)if(i.track===t&&e<i.z&&e>i.z-i.len)return i;return null}buildChunk(t){const e=Q.chunk,i=-t*e,n=this.themeAt(Math.max(0,t*e)),o=Q.themes[n],r=c1(this.seed+t*7919),a=[],l=[],c=[];for(let u=0;u<e;u++){const d=i-u-.5,g=(t*e+u)%2===0;for(let x=0;x<this.tracks;x++){const p=this.trackX(x),m=this.gapAt(x,d);if(m){m.lava&&(l.push({size:[1.62,.2,1.02],pos:[p,-1.1,d],color:g?16734740:16738842}),r()<.6&&l.push({size:[.3,.06,.3],pos:[p+W(-.5,.5),-.98,d+W(-.3,.3)],color:16765024}),r()<.5&&a.push({size:[.5,.1,.4],pos:[p+W(-.4,.4),-.97,d],color:2365464}));continue}a.push({size:[Q.trackGap,3,1],pos:[p,-1.5,d],color:g?o.floor:o.floorAlt}),a.push({size:[1.3,.07,.24],pos:[p,.035,d],color:o.sleeper})}for(const x of[-1,1]){o.lava?(l.push({size:[.52,.1,1.02],pos:[x*2.66,-.32,d],color:g?16734740:16738842}),a.push({size:[.52,2.6,1],pos:[x*2.66,-1.67,d],color:o.rockDark}),u%3===0&&n!=="lair"&&c.push([x*2.62,d,.62])):a.push({size:[.56,3,1],pos:[x*2.68,-1.44,d],color:o.ledge});for(let p=0;p<6;p++){const m=x*(3.44+p),w=this.wallHeight(m,d);a.push({size:[1,w+3,1],pos:[m,(w-3)/2,d],color:w>4.6?o.rockDark:w>2.4?o.rock:o.rockLight})}}}for(let u=0;u<this.tracks;u++){const d=this.trackX(u);let g=null;const x=p=>{if(g==null)return;const m=g-p;for(const w of[-.42,.42])a.push({size:[.08,.09,m],pos:[d+w,.115,(g+p)/2],color:o.rail});g=null};for(let p=0;p<e;p++){const m=i-p-.5;this.gapAt(u,m)?x(i-p):g==null&&(g=i-p)}x(i-e)}this.decorate(t,n,o,r,a,l,c),t>0&&this.themeAt((t-1)*e)!==n&&this.gate(i-1.5,n,o,a,l,c);const h=[],f=new lt(Ye(a),ke);if(h.push(f),l.length&&h.push(new lt(Ye(l),ui)),c.length){const u=c.map(([g,x,p])=>this.poolGeometry.clone().scale(p,1,p).translate(g,.02,x)),d=r1(u,!1);for(const g of u)g.dispose();h.push(new lt(d,this.poolMaterial(o.pool)))}for(const u of h)u.frustumCulled=!1,this.group.add(u);this.chunks.set(t,{meshes:h,theme:n})}decorate(t,e,i,n,o,r,a){const l=Q.chunk,c=-t*l;for(let h=0;h<l;h++){const f=t*l+h,u=c-h-.5;if(!(f<-2))for(const d of[-1,1]){const g=d*2.72,x=(f+(d>0?3:0))%6===0;if(e==="mine")x?(o.push(..._i("post","",g,0,u)),r.push(..._i("torchflame","",g,0,u)),a.push([d*2.1,u+.3,1.05])):n()<.08?o.push(..._i("stores","",d*2.9,0,u,.8)):n()<.06&&o.push(..._i("pick","",g,0,u));else if(e==="bats")n()<.16?o.push(..._i("stalagmite","",d*2.85,0,u,W(.7,1.3))):n()<.14&&(r.push(..._i("shrooms","",g,0,u)),a.push([d*2.3,u,.9]));else if(e==="crystal"){if((x||n()<.08)&&(r.push(..._i("crystals",String(Math.floor(n()*3)),d*3.1,0,u,W(.7,1.2))),a.push([d*2.2,u,1.3])),n()<.1){const p=d*(3.44+Math.floor(n()*2));r.push(..._i("crystals",String(Math.floor(n()*3)),p,this.wallHeight(p,u),u,W(.8,1.4)))}}else e==="magma"&&n()<.18&&o.push(..._i("basalt","",d*3.44,this.wallHeight(d*3.44,u),u,W(.7,1.2)))}}}gate(t,e,i,n,o,r){for(const a of[-1,1])for(let l=0;l<7;l++){const c=1.15-l*.05+l*37%5*.03;n.push({size:[c,.72,1.1],pos:[a*(3.1-Math.max(0,l-3)*.2),.36+l*.68,t],color:l%2?i.rock:i.rockLight})}if(e==="bats")for(const a of[-1,1]){for(const l of[2.2,3.4,4.3])n.push({size:[.2,.46,.2],pos:[a*2.55,l,t+.4],color:i.rockLight});o.push(..._i("shrooms","",a*2.6,0,t+.6,1.4)),o.push(..._i("shrooms","",a*2.9,2,t+.6,1.1)),r.push([a*2.3,t+.6,1.2])}else if(e==="crystal"){const a=[6222591,16735968,10354538];for(const l of[-1,1]){for(const[c,h,f,u,d]of[[.1,4.8,1.8,.25,0],[-.35,4.3,1.2,.6,1],[.45,3.6,1,-.1,2],[-.3,2.2,.9,.7,0],[-.2,.2,1.1,.4,1]]){const g=l*(3+c);o.push({size:[.36,f,.36],pos:[g,h+f/2,t+.3],color:a[d],rotZ:-l*u},{size:[.2,f*.3,.2],pos:[g+l*Math.sin(u)*f*.55,h+f*1.02,t+.3],color:16777215,rotZ:-l*u})}r.push([l*2.2,t+.5,1.6])}}else if(e==="magma")for(const a of[-1,1]){for(const l of[-.3,.25]){const c=1.6+Math.abs(Math.sin(l*9+a))*2;o.push({size:[.16,c,.08],pos:[a*(3+l),4.6-c/2,t+.58],color:l>0?16742938:16734740})}o.push(..._i("torchflame","",a*2.85,3,t+.5,1.8)),r.push([a*2.2,t+.6,1.4])}}buildStation(){const t=[];for(let l=-9;l<=9;l++){const c=3.2+Math.abs(Math.sin(l*1.7))*1.2;t.push({size:[1,c+3,9],pos:[l,(c-3)/2,10.5],color:l%2?4863787:7033152}),t.push({size:[1,.3,.3],pos:[l,c+.1,6.1],color:8808527})}const e=new lt(Ye(t),ke),i=this.mesh("station");i.position.set(this.trackX(this.track),0,1.2);const n=this.mesh("gantry");n.position.set(0,0,-2.2);const o=this.mesh("gantrylamps","",ui);o.position.copy(n.position),this.shaftMaterial??(this.shaftMaterial=new Yt({color:16773576,transparent:!0,opacity:.2,blending:ds,depthWrite:!1,fog:!1})),this.shaftMaterial.opacity=.2;const r=new lt(new Pe(1.5,9,1.5),this.shaftMaterial);e.userData.own=!0,r.userData.own=!0,r.position.set(this.trackX(this.track),4.5,0);const a=new lt(this.poolGeometry,this.poolMaterial(16773576));a.scale.setScalar(1.2),a.position.set(this.trackX(this.track),.03,0);for(const l of[e,i,n,o,r,a])l.frustumCulled=!1,this.add(l),this.extras.push(l)}planAhead(){if(this.planDone)return;const t=this.z-Q.planAhead;for(;this.planZ>t;){const e=-this.planZ;if(e>Q.reach-30){this.planDone=!0;return}const n={...this.legAt(e/Q.reach).patterns};if(["gap","gap2","lava","lava2"].includes(this.lastPattern))for(const f of["gap","gap2","lava","lava2"])delete n[f];const o=ch(n);this.lastPattern=o;const r=this.speedAt(e),a=this.placePattern(o,this.planZ,r),l=Q.spacing,c=ge(l.start,l.end,Ti(e/(Q.reach*.85),0,1))*W(1,1.3),h=Math.floor(this.planZ-a-Math.max(5.5,r*c));e>this.nextHeart?(this.nextHeart=e+W(Q.heart.every.min,Q.heart.every.max),this.pickups.push({kind:"heart",track:Math.floor(Math.random()*this.tracks),z:(this.planZ-a+h)/2,lift:0})):this.plantGold(this.planZ-a-1.4,h+1.6),this.planZ=h}}addPlan(t,e,i,n,o={}){const r={kind:t,track:e,z:i,len:n,spawned:!1,gone:!1,spent:!1,meshes:[],state:"idle",t:0,...o};return this.plan.push(r),t==="gap"&&this.gaps.push(r),r}placePattern(t,e,i){const n=[0,1,2],o=()=>Math.floor(Math.random()*this.tracks),r=()=>hh(n).slice(0,2),a=this.themeAt(-e);switch(t){case"barricade":return this.addPlan("barricade",o(),e,.4),.4;case"barricade2":for(const l of r())this.addPlan("barricade",l,e,.4);return .4;case"orecart":return this.addPlan("orecart",o(),e,1.4),1.4;case"orecarts":for(const l of r())this.addPlan("orecart",l,e,1.4);return 1.4;case"jumpwall":{const l=hh(n);return this.addPlan("orecart",l[0],e,1.4),this.addPlan("orecart",l[1],e,1.4),this.addPlan("barricade",l[2],e-.5,.4),1.4}case"gap":case"lava":case"gap2":case"lava2":{const l=t.startsWith("lava"),c=t.endsWith("2")?r():n,h=Ti(Math.round(i*.24),2,3),f=Math.floor(e);for(const u of c)this.addPlan("gap",u,f,h,{lava:l});return Math.random()<Q.gold.arcChance&&this.plantArc(c[Math.floor(Math.random()*c.length)],f-h/2,i),h}case"bats":case"bats2":{const l=Q.bats.speed*Q.bats.wakeAt/(i+Q.bats.speed),c=t==="bats2"?r():[o()];for(const h of c)this.addPlan("bats",h,e-l,.8);return .8}case"stalactite":case"stalactite2":{const l=t==="stalactite2"?r():[o()];for(const c of l)this.addPlan("stalactite",c,e,.9,{theme:a});return .9}case"crystal":case"crystal2":{const l=t==="crystal2"?r():[o()];for(const c of l)this.addPlan("crystal",c,e,.5);return .5}case"geyser":case"geyser2":{const l=t==="geyser2"?r():[o()];for(const c of l)this.addPlan("geyser",c,e,1);return 1}default:return this.addPlan("barricade",o(),e,.4),.4}}plantGold(t,e){if(Math.random()>Q.gold.trailChance)return;const i=Math.floor(Math.random()*this.tracks),n=Math.min(Q.gold.trail,Math.floor((t-e)/1.2));for(let o=0;o<n;o++){const r=o===n-1&&Math.random()<Q.gold.gemChance;this.pickups.push({kind:r?"gem":"nugget",track:i,z:t-o*1.2,lift:0})}}plantArc(t,e,i){const{v:n,gravity:o}=Q.jump,r=2*n/o,a=i*r;for(let l=1;l<=3;l++){const c=l/4,h=c*r;this.pickups.push({kind:l===2?"gem":"nugget",track:t,z:e+a/2-c*a,lift:n*h-o*h*h/2})}}spawnAhead(){const t=this.z-Q.buildAhead;for(const e of this.plan)e.spawned||e.z<t||(e.spawned=!0,this.spawn(e),this.live.push(e));this.plan.length>40&&(this.plan=this.plan.filter(e=>!e.spawned));for(const e of this.pickups)e.mesh||e.taken||e.z<t||(e.kind==="heart"?(e.mesh=this.add(new lt(_e.get("heart"),ui)),e.mesh.frustumCulled=!1,e.mesh.scale.setScalar(1.3)):e.mesh=this.add(this.mesh(e.kind,e.kind==="gem"?String(Math.floor(Math.random()*2)):"",ui)),e.mesh.position.set(this.trackX(e.track),We+.5+e.lift,e.z),e.phase=Math.random()*Math.PI*2)}spawn(t){const e=t.track>=0?this.trackX(t.track):0,i=t.z-t.len/2,n=(o,r="",a=ke,l=0)=>{const c=this.add(this.mesh(o,r,a));return c.position.set(e,l,i),t.meshes.push(c),c};switch(t.kind){case"barricade":n("barricade"),n("barricadelamp","",ui);break;case"orecart":n("orecart","",ke,We),n("orecartlamp","",ui,We);break;case"crystal":n("crystalbase"),n("crystalspikes","",ui);break;case"gap":n("railend","",ui).position.z=t.z-.02;break;case"stalactite":{t.hang=n("stalactite",t.theme==="crystal"?"crystal":"",ke,6),t.ring=this.addRing(e,i),t.meshes.push(t.ring.ring,t.ring.dot),t.y=6;break}case"geyser":n("vent"),t.glow=n("ventglow","",ui),t.column=n("lavacolumn","",ui),t.column.visible=!1,t.ring=this.addRing(e,i),t.meshes.push(t.ring.ring,t.ring.dot);break;case"bats":this.spawnBats(t,e,i);break}}spawnBats(t,e,i){t.bats=[];for(let n=0;n<5;n++){const o=new Ue,r=this.mesh("bat"),a=this.mesh("batwing"),l=this.mesh("batwing");a.scale.x=-1,o.add(r,a,l),o.scale.setScalar(W(1.1,1.5)),this.add(o),t.meshes.push(o),t.bats.push({group:o,left:a,right:l,ox:W(-.55,.55),oy:W(-.25,.3),oz:W(-.5,.5),seed:Math.random()*10})}t.x=e,t.zc=i,t.awake=t.awake??!1,t.vz=t.vz??Q.bats.speed}addRing(t,e){const i=this.add(new lt(this.ringGeometry,this.dangerMaterial)),n=this.add(new lt(this.dotGeometry,this.dangerFill));for(const o of[i,n])o.frustumCulled=!1,o.position.set(t,.05,e),o.visible=!1;return{ring:i,dot:n}}updateObstacles(t){const e=this.phase!=="wrecked"&&this.phase!=="station",i=Math.sin(this.clock*12)*.5+.5;this.dangerMaterial.color.setHex(he(rh,ah,i*.5));for(let n=this.live.length-1;n>=0;n--){const o=this.live[n],r=this.z-o.z,a=o.track>=0?this.trackX(o.track):0;switch(o.kind){case"bats":this.updateBats(o,t);break;case"stalactite":this.updateStalactite(o,t,a,r);break;case"geyser":this.updateGeyser(o,t,a,r);break}if((o.kind==="bats"?o.zc:o.z-o.len)-this.z>Q.keepBehind||o.gone){if(this.clearMeshes(o),this.live.splice(n,1),o.kind==="gap"){const c=this.gaps.indexOf(o);c>=0&&this.gaps.splice(c,1)}continue}if(!(!e||o.spent)&&(this.collide(o),this.phase==="wrecked"))return}}collide(t){const e=Q.clear;switch(t.kind){case"barricade":case"crystal":case"rubble":this.onTrack(t.track)&&this.overlaps(t.z,t.len)&&this.y<e[t.kind]&&(this.smash(t),this.hit("crash"));break;case"orecart":this.onTrack(t.track)&&this.overlaps(t.z,t.len)&&this.y<1.3&&(this.smash(t),this.hit("crash"));break;case"bats":t.awake&&this.onTrack(t.track)&&this.overlaps(t.zc+.4,.8)&&this.y<1.8&&(t.spent=!0,this.scatterBats(t),this.hit("bats"));break;case"stalactite":t.state==="down"&&this.onTrack(t.track)&&this.overlaps(t.z,t.len)&&this.y<e.rubble&&(this.smash(t),this.hit("crash"));break;case"geyser":t.state==="erupt"&&t.t<Q.geyser.lasts&&this.onTrack(t.track)&&this.overlaps(t.z,t.len,.05)&&(t.spent=!0,this.hit("lava"));break;case"gap":{if(this.falling||this.y>.001||this.nearestTrack()!==t.track)break;this.z<t.z-.28&&this.z>t.z-t.len+.28&&(this.falling={t:0,lava:t.lava,gap:t},this.air=!0,this.vy=-1,this.hooks.onShake?.(.25));break}}}smash(t){t.spent=!0;const e=t.track>=0?this.trackX(t.track):0,i=t.z-t.len/2,n=t.kind==="orecart"?[9263674,5984328,15119418,5124386]:t.kind==="crystal"?[6222591,16735968,10354538]:t.kind==="barricade"?[9067058,16761375,6175263]:[7035468,8745568,5062710];this.effects.debris(e,.4,i,n,{count:14,speed:4,up:5,size:.9,floor:0}),this.effects.explosion(e,.4,i,.5),this.clearMeshes(t)}hit(t){if(this.invuln>0){this.shrugOff();return}this.hooks.onKill?.(t)}updateBats(t,e){const i=this.z-t.zc;!t.awake&&i<Q.bats.wakeAt&&(t.awake=!0,this.hooks.onShake?.(.05),this.hooks.onSound?.("bats")),t.awake&&!t.fled&&(t.zc+=t.vz*e),t.fled&&(t.zc-=e*2);for(const n of t.bats){const o=Math.sin(this.clock*26+n.seed)*.9;n.left.rotation.z=-o,n.right.rotation.z=o;const r=We+Q.bats.height+n.oy+Math.sin(this.clock*7+n.seed)*.12+(n.up??0),a=t.awake?Math.sin(this.clock*5+n.seed)*.2:Math.sin(this.clock*2+n.seed)*.08;n.group.position.set(t.x+n.ox+a+(n.dx??0),r,t.zc+n.oz),t.fled&&(n.up=(n.up??0)+e*3,n.dx=(n.dx??0)+e*Math.sign(n.ox||1)*3)}}scatterBats(t){t.fled=!0;for(let e=0;e<10;e++)this.dust.emit(t.x+W(-.5,.5),We+1.2,t.zc,{vx:W(-2,2),vy:W(0,2),vz:W(-1,1),life:.6,size:.1,color:2761265})}updateStalactite(t,e,i,n){const o=Q.stalactite,r=t.z-t.len/2;if(t.state==="idle"){const a=n<30;t.ring.ring.visible=a,t.ring.dot.visible=a;const l=Ti(1-n/30,0,1);t.ring.ring.scale.setScalar(ge(1.8,1,l)),t.ring.dot.scale.setScalar(ge(.4,2.4,l)),t.hang.position.y=6+Math.sin(this.clock*30)*(l>.6?.04:0),n<this.speed*o.dropLead+.5&&(t.state="fall",t.t=0,this.hooks.onSound?.("crack"))}else if(t.state==="fall"){t.t+=e;const a=Math.min(1,t.t/o.fall);if(t.hang.position.y=6*(1-a*a),t.hang.rotation.y+=e*3,a>=1){t.state="down",this.group.remove(t.hang),this.group.remove(t.ring.ring),this.group.remove(t.ring.dot),t.meshes=[];const l=this.add(this.mesh("rubble",t.theme==="crystal"?"crystal":""));l.position.set(i,0,r),l.rotation.y=W(-.3,.3),t.meshes.push(l),this.effects.explosion(i,.3,r,.45);for(let c=0;c<10;c++)this.dust.emit(i+W(-.5,.5),.2,r+W(-.4,.4),{vx:W(-2,2),vy:W(1,3),vz:W(-1.5,1.5),life:.7,size:W(.1,.2),gravity:6,color:t.theme==="crystal"?9072592:8745568});this.hooks.onShake?.(.15),this.phase!=="wrecked"&&this.onTrack(t.track)&&this.overlaps(t.z,t.len)&&(t.spent=!0,this.hit("rockfall"))}}}updateGeyser(t,e,i,n){const o=Q.geyser,r=t.z-t.len/2,a=n<26;if(t.ring.ring.visible=a&&t.state==="idle",t.ring.dot.visible=a&&t.state==="idle",t.state==="idle"){const l=Ti(1-n/26,0,1);t.ring.ring.scale.setScalar(ge(1.6,.9,l)),t.ring.dot.scale.setScalar(ge(.4,2.2,l)),t.glow.scale.setScalar(1+Math.sin(this.clock*14)*.15*l),a&&Math.random()<.3&&this.sparks.emit(i+W(-.2,.2),.15,r+W(-.2,.2),{vy:W(1,3),life:.5,size:.08,gravity:4,color:16742938}),n<this.speed*o.lead+.6&&(t.state="erupt",t.t=0,t.column.visible=!0,this.hooks.onSound?.("hiss"),this.hooks.onShake?.(.12))}else if(t.state==="erupt"){t.t+=e;const l=Math.min(1,t.t/.14),c=t.t>o.lasts?Math.max(0,1-(t.t-o.lasts)/.3):1;t.column.scale.set(1+Math.sin(this.clock*30)*.08,Math.max(.001,l*c),1+Math.cos(this.clock*27)*.08),c<=0&&(t.column.visible=!1),c>0&&Math.random()<.8&&this.sparks.emit(i+W(-.3,.3),W(.5,3),r+W(-.3,.3),{vx:W(-1.5,1.5),vy:W(1,4),vz:W(-1.5,1.5),life:.6,size:W(.08,.16),gravity:5,color:Math.random()<.5?16742938:16765024})}}updatePickups(t){for(let e=this.pickups.length-1;e>=0;e--){const i=this.pickups[e];if(i.z-this.z>Q.keepBehind){i.mesh&&this.group.remove(i.mesh),this.pickups.splice(e,1);continue}if(!i.mesh||i.taken||(i.mesh.rotation.y+=t*3,i.mesh.position.y=We+.5+i.lift+Math.sin(this.clock*4+i.phase)*.06,this.phase==="wrecked"||this.falling)||!this.onTrack(i.track)||Math.abs(this.z-i.z)>.6||Math.abs(this.y-i.lift)>.6)continue;if(i.taken=!0,this.group.remove(i.mesh),i.kind==="heart"){for(let r=0;r<16;r++)this.sparks.emit(i.mesh.position.x,i.mesh.position.y,i.z,{vx:W(-2,2),vy:W(1,3),vz:W(-2,2),life:.5,size:.1,gravity:5,color:16731501});this.hooks.onHeart?.();continue}const n=i.kind==="gem",o=n?10155775:16765514;for(let r=0;r<(n?14:6);r++)this.sparks.emit(i.mesh.position.x,i.mesh.position.y,i.z,{vx:W(-2,2),vy:W(.5,3),vz:W(-2,2),life:.45,size:W(.06,.12),gravity:5,color:o});this.hooks.onGold?.(n?Q.gold.gem:Q.gold.points,n)}}updateAmbient(t){this.ambientTimer-=t;const e=this.themeAt(Math.max(0,this.travelled));if(this.updateFlocks(t,e),!this.air&&!this.falling&&this.speed>7&&this.phase!=="wrecked"&&Math.random()<t*(this.speed-6)*2&&this.sparkAt(this.x+(Math.random()<.5?-.46:.46),We+.05,this.z+.4,0),this.ambientTimer>0)return;this.ambientTimer=.05;const i=this.z-W(-4,14),n=W(-5,5);if(e==="magma"||e==="lair"){const o=Math.random()<.5?-1:1;this.sparks.emit(o*W(2.4,2.9),-.2,i,{vy:W(1.2,2.6),vx:W(-.3,.3),life:W(1,1.8),size:W(.05,.1),color:Math.random()<.6?16742938:16760896})}else e==="crystal"?Math.random()<.5&&this.sparks.emit(n,W(.4,2.5),i,{vy:W(-.2,.3),life:W(.8,1.4),size:W(.04,.08),color:[6222591,16735968,10354538][Math.floor(Math.random()*3)]}):e==="mine"&&Math.random()<.3&&this.dust.emit(n,W(.5,2.5),i,{vy:W(-.2,.1),vx:W(-.2,.2),life:2,size:.05,color:9074790})}updateFlocks(t,e){if(this.flockTimer-=t,e==="bats"&&this.phase==="run"&&this.flockTimer<=0){this.flockTimer=W(2.5,5);const i=Math.random()<.5?1:-1,n=this.z-W(3,13),o=W(3.2,4.6),r=[];for(let a=0;a<7;a++){const l=new Ue,c=this.mesh("batwing"),h=this.mesh("batwing");c.scale.x=-1,l.add(this.mesh("bat"),c,h),l.scale.setScalar(W(.9,1.3)),l.rotation.y=i*Math.PI/2,this.add(l),r.push({group:l,left:c,right:h,ox:-i*W(0,3),oy:W(-.6,.6),oz:W(-1.2,1.2),seed:Math.random()*10})}this.flocks.push({bats:r,x:-i*7,dir:i,y:o,z:n,speed:W(5,7)})}for(let i=this.flocks.length-1;i>=0;i--){const n=this.flocks[i];n.x+=n.dir*n.speed*t;for(const o of n.bats){const r=Math.sin(this.clock*24+o.seed)*.9;o.left.rotation.z=-r,o.right.rotation.z=r,o.group.position.set(n.x+o.ox,n.y+o.oy+Math.sin(this.clock*6+o.seed)*.15,n.z+o.oz)}if(Math.abs(n.x)>12||n.z-this.z>Q.keepBehind){for(const o of n.bats)this.group.remove(o.group);this.flocks.splice(i,1)}}}sparkAt(t,e,i,n,o){this.sparks.emit(t,e,i,{vx:n*W(1,3)+W(-1,1),vy:W(1,3.5),vz:W(.5,3.5),life:W(.25,.5),size:W(.05,.1),gravity:9,color:o??(Math.random()<.5?16765024:16752688)})}placeCart(t,e){const i=this.air||this.falling?0:Math.abs(Math.sin(this.clock*this.speed*1.6))*.02*Math.min(1,this.speed/6),n=We+this.y+i;this.cart.position.set(this.x,n,this.z),this.cart.rotation.set(-this.pitch,0,this.lean),this.lamp.position.set(this.x,.03+Math.max(0,this.y)*.2,this.z-.7),this.lamp.visible=!this.falling&&this.phase!=="wrecked",this.lampMaterial.opacity=.2+Math.sin(this.clock*23)*.015,this.shaftMaterial&&(this.shaftMaterial.opacity=this.phase==="station"?.2:Math.max(0,this.shaftMaterial.opacity-t*.1)),!(this.phase==="wrecked"||e.dead)&&(e.group.position.set(this.x,n+xa+this.drop,this.z+.05),e.group.rotation.set(-this.pitch*.6,0,this.lean*.8),e.x=this.x)}updateLegs(){if(this.phase!=="run")return;const t=Q.chunk,e=Math.floor(this.travelled/t)*t/Q.reach;let i=0;for(let r=0;r<Q.legs.length;r++)e>=Q.legs[r].at&&(i=r);if(i===this.legIndex)return;const n=this.legIndex<0;if(this.legIndex=i,n)return;const o=Q.legs[i];this.hooks.onBanner?.(o.banner,o.tone??"warn")}updateSky(t){const e=Q.themes[this.phase==="rumble"||this.fighting?"lair":this.themeAt(Math.max(0,this.travelled))];let i=e.sky;this.phase==="exit"&&(i=he(e.sky,16774880,Ti(this.phaseClock/Q.exit.seconds,0,1)*.9));const n=Math.min(1,t*1.5);this.sky.lerp(this.skyTarget.setHex(i),n)}get skyColor(){return he(this.sky.getHex(),16738874,this.flash*.35)}startRumble(){this.setPhase("rumble"),this.hooks.onVoyage?.(null),this.hooks.onBanner?.("SOMETHING STIRS","warn")}updateRumble(t){if(this.hooks.onShake?.(t*(.4+this.phaseClock*.3)),Math.random()<t*14&&this.dust.emit(W(-3,3),5,this.z-W(-2,12),{vy:-W(1,3),life:1.4,size:W(.08,.18),gravity:8,color:8745568}),this.phaseClock>1){const e=this.z-Q.boss.distance,i=(this.phaseClock-1)/1.4;Math.random()<t*40*i&&this.debrisAt(W(-1.2,1.2),e,W(.2,1.6)),Math.random()<t*30*i&&this.sparks.emit(W(-1.4,1.4),.1,e+W(-1,1),{vy:W(1,3),life:.6,size:W(.06,.12),gravity:4,color:16742938})}this.phaseClock>2.4&&this.wormBurst()}wormBurst(){this.setPhase("boss"),this.buildWorm();const t=this.worm,e=this.z-t.dist;this.effects.explosion(t.hx,.4,e,1.6),this.effects.debris(t.hx,.4,e,[4863028,5913150,7622746,3809830],{count:26,speed:6,up:9,size:1.3,floor:0}),this.hooks.onShake?.(1.1),this.hooks.onBanner?.("BOSS FIGHT","boss"),this.hooks.onItems?.(),this.nextCrate=1.3}buildWorm(){const t=Q.boss,e=new Ue,i=new lt(Cn.get("wormhead"),this.wormMaterial),n=new lt(Cn.get("wormeyes"),this.eyeMaterial);e.add(i,n);const o=[];for(const c of[Math.PI/2,0,-Math.PI/2,Math.PI]){const h=new Ue;h.position.set(Math.cos(c)*1,Math.sin(c)*.94,.66),h.rotation.z=c-Math.PI/2;const f=new Ue;f.add(new lt(Cn.get("wormpetal"),this.wormMaterial)),h.add(f),e.add(h),o.push(f)}e.traverse(c=>c.frustumCulled=!1),e.scale.setScalar(va),this.add(e);const r=[];for(let c=0;c<7;c++){const h=new lt(Cn.get("wormseg"),this.wormMaterial);h.frustumCulled=!1,h.rotation.order="YXZ",this.add(h),r.push(h)}const a=this.add(this.mesh("burrow"));this.reticleMaterial??(this.reticleMaterial=new Yt({color:16765514,transparent:!0,opacity:.9,depthTest:!1,fog:!1})),this.reticleGeometry??(this.reticleGeometry=new As(.9,1.08,28));const l=this.add(new lt(this.reticleGeometry,this.reticleMaterial));l.frustumCulled=!1,l.rotation.x=-.86,l.renderOrder=5,l.visible=!1,this.worm={reticle:l,head:e,eyes:n,petals:o,segs:r,ring:a,track:Math.round(this.mid),targetTrack:Math.round(this.mid),hx:this.trackX(Math.round(this.mid)),hy:-3,baseX:this.trackX(Math.round(this.mid)),dist:t.distance,knock:0,lunge:0,rear:0,health:t.health,stage:0,state:"rising",rise:0,open:0,roar:0,hurt:0,nextAttack:2.2,nextShift:t.shiftEvery,attack:null,lastAttack:null,churn:0,under:0,dead:0},this.wormMaterial.color.setRGB(1,1,1),this.eyeMaterial.color.setRGB(1,1,1)}clearWorm(){const t=this.worm;if(t){this.group.remove(t.head);for(const e of t.segs)this.group.remove(e);this.group.remove(t.ring),this.group.remove(t.reticle),this.worm=null}}wormHittable(){const t=this.worm;return!!(t&&t.state==="fight"&&t.under<.3&&t.hy>.4)}headZ(){const t=this.worm;return this.z-(t.dist+t.knock-t.lunge)}roar(t=1){if(this.worm){this.worm.roar=t,this.hooks.onSound?.("roar",{seconds:t}),this.hooks.onShake?.(.45);for(let e=0;e<22;e++)this.dust.emit(W(-3.5,3.5),W(4,6),this.z-W(-3,12),{vy:-W(.5,2),life:1.6,size:W(.06,.16),gravity:6,color:Math.random()<.5?7622746:5913150})}}updateWorm(t){const e=this.worm,i=Q.boss;if(e.knock=Math.max(0,e.knock-t*2.2),e.roar=Math.max(0,e.roar-t),e.hurt=Math.max(0,e.hurt-t*4),e.state==="rising")e.rise=Math.min(1,e.rise+t/i.riseSeconds),e.hy=ge(-3,1.35,qo(e.rise)),Math.random()<t*20&&this.debrisAt(e.hx,this.headZ(),1.4),e.rise>=1&&(e.state="fight",this.roar(1.4),this.hooks.onBanner?.(null),this.hooks.onBoss?.(1,{name:"Deepworm"}),this.hooks.onHint?.("Grab the dynamite · line up · throw!"));else if(e.state==="fight"){if(!e.attack){if(e.nextShift-=t,e.nextShift<=0){e.nextShift=i.shiftEvery*W(.7,1.2)*(e.stage===2?.7:1);const r=[0,1,2].filter(a=>a!==e.targetTrack);e.targetTrack=r[Math.floor(Math.random()*r.length)]}e.nextAttack-=t,e.nextAttack<=0&&this.startAttack()}e.attack&&this.updateAttack(t),e.hy+=(1.35+e.rear-e.under*4.6-e.hy)*Math.min(1,t*9)}else if(e.state==="dying"&&(this.updateWormDeath(t),!this.worm))return;const n=this.trackX(e.targetTrack),o=e.stage===2?3.6:2.6;e.hx+=Ti(n-e.hx,-o*t,o*t),e.baseX+=(e.hx-e.baseX)*Math.min(1,t*1.6),this.poseWorm(t)}poseWorm(t){const e=this.worm,i=this.headZ(),n=e.state==="dying"?0:Math.sin(this.clock*2.2)*.14,o=e.hy+n,r=e.roar>0?Math.sin(this.clock*50)*.06:0,a=e.state==="dying"||e.roar>0?1:e.attack?.open??.25+Math.sin(this.clock*3)*.1;e.open+=(a-e.open)*Math.min(1,t*10);for(const R of e.petals)R.rotation.x=e.open*1.05;e.head.position.set(e.hx+r,o,i);const l=Ti((this.x-e.hx)*.12,-.3,.3);e.state!=="dying"&&e.head.rotation.set(-e.rear*.4+(e.attack?.pitch??0),l,Math.sin(this.clock*1.7)*.06);const c=va,h=new P(e.baseX,-1.6*c,i-3.6*c-e.lunge*.3),f=new P(e.hx*.7+e.baseX*.3,o-.6*c,i-2.6*c),u=new P(e.hx,o,i-.9*c),d=new P,g=new P,x=(R,A)=>{const L=(1-R)*(1-R),J=2*(1-R)*R,v=R*R;return A.set(L*h.x+J*f.x+v*u.x,L*h.y+J*f.y+v*u.y,L*h.z+J*f.z+v*u.z)},p=e.segs.length;for(let R=0;R<p;R++){const A=R/(p-1);x(A,d),x(Math.min(1,A+.05),g);const L=g.x-d.x,J=g.y-d.y,v=g.z-d.z,b=e.segs[R];b.position.copy(d),b.rotation.set(-Math.atan2(J,Math.hypot(L,v)),Math.atan2(L,v),0),b.scale.setScalar(ge(1.08,.94,A)*va),b.visible=d.y>-2.6}e.ring.position.set(e.baseX,.02,i-3.6*c-e.lunge*.3),e.ring.scale.setScalar(c),e.churn-=t,e.churn<=0&&e.state!=="dying"&&(e.churn=.05,this.debrisAt(e.baseX,i-3.6*c,1.6*c));const m=this.sticks>0&&this.throwCooldown<=0&&this.wormHittable()&&Math.abs(e.hx-this.x)<Q.boss.hitHalfWidth;e.reticle.visible=m&&this.phase==="boss",e.reticle.visible&&(e.reticle.position.set(e.hx,o,i+1.2*c),e.reticle.scale.setScalar(1+Math.sin(this.clock*10)*.08));const w=e.stage===2?[1.3,.78,.8]:e.stage===1?[1.12,.92,.92]:[1,1,1],M=e.hurt*1.6;this.wormMaterial.color.setRGB(w[0]+M,w[1]+M,w[2]+M);const S=e.stage===2?1:e.stage===1?.6:.3,I=.75+Math.sin(this.clock*(4+S*8))*.25;this.eyeMaterial.color.setRGB(1,ge(1,.35,S)*I+.2,ge(1,.2,S)*I)}debrisAt(t,e,i){const n=Math.random()*Math.PI*2;this.dust.emit(t+Math.cos(n)*i,.1,e+Math.sin(n)*i*.8,{vx:Math.cos(n)*W(.5,2),vy:W(1.5,4),vz:Math.sin(n)*W(.5,2),life:.7,size:W(.1,.22),gravity:9,color:Math.random()<.5?5913150:7622746})}startAttack(){const t=this.worm,i={...[{lunge:3,rockfall:2},{lunge:2.5,rockfall:2,sweep:2,bats:1.5},{lunge:2,rockfall:2,sweep:2,burrow:3,bats:1}][t.stage]};t.lastAttack&&i[t.lastAttack]&&Object.keys(i).length>1&&delete i[t.lastAttack];const n=ch(i);t.lastAttack=n;const o=this.nearestTrack(),r=[0,1,2].filter(l=>l!==o)[Math.floor(Math.random()*2)],a=Q.boss;if(n==="lunge"){t.targetTrack=o,t.attack={kind:n,t:0,step:"aim",track:o,warn:a.lungeWarn[t.stage],bar:this.addBar(),open:.6};return}if(n==="rockfall"){this.roar(.7);const l=this.z-this.speed*a.rockLead;for(const c of[o,r])this.dropRock(c,l,a.rockLead);this.endAttack(.4);return}if(n==="sweep"){this.roar(.4);const l=this.z-this.speed*a.sweepLead;this.startSweep(l,a.sweepLead),this.endAttack(.8);return}if(n==="bats"){this.roar(.9);for(const l of[o,r]){const c={kind:"bats",track:l,z:this.headZ()+1,len:.8,spawned:!0,meshes:[],state:"idle",t:0,awake:!0,vz:3.2};this.spawnBats(c,this.trackX(l),this.headZ()+1.2),this.live.push(c)}this.endAttack(.6);return}n==="burrow"&&(t.attack={kind:n,t:0,step:"down",waves:3,open:.8},this.hooks.onShake?.(.5))}endAttack(t=0){const e=this.worm;e.attack=null,e.nextAttack=Q.boss.gap[e.stage]+t}addBar(){const t=this.add(new lt(this.barGeometry,this.dangerMaterial)),e=this.add(new lt(this.barGeometry,this.dangerFill));return t.frustumCulled=!1,e.frustumCulled=!1,{bar:t,fill:e}}removeBar(t){t&&(this.group.remove(t.bar),this.group.remove(t.fill))}updateAttack(t){const e=this.worm,i=e.attack;i.t+=t;const n=Q.boss;if(i.kind==="lunge"){const o=this.trackX(i.track);if(i.step==="aim"){const r=qo(Math.min(1,i.t/i.warn));e.rear=r*.7,e.lunge=-r*1.2,i.pitch=0;const a=this.z+1.2,l=this.headZ()+.8,c=a-l;i.bar.bar.scale.set(1.3,1,c),i.bar.bar.position.set(o,.04,(a+l)/2),i.bar.fill.scale.set(.6,1.3,Math.max(.001,c*r)),i.bar.fill.position.set(o,.05,l+c*r/2),i.t>=i.warn&&(i.step="strike",i.t=0,i.open=1,this.roar(.3))}else if(i.step==="strike"){const r=Math.min(1,i.t/n.lungeSeconds);if(e.rear=ge(.7,-.3,r),e.lunge=ge(-1.2,e.dist-1.1,r*r),i.pitch=r*.3,r>=1){i.step="hold",i.t=0,this.removeBar(i.bar),i.bar=null,this.hooks.onShake?.(.6);for(let a=0;a<12;a++)this.debrisAt(o,this.z-.4,.8);this.phase==="boss"&&this.onTrack(i.track)&&this.hit("worm")}}else if(i.step==="hold")i.t>.3&&(i.step="back",i.t=0);else if(i.step==="back"){const r=Math.min(1,i.t/.55);e.lunge=ge(e.dist-1.1,0,qo(r)),e.rear=ge(-.3,0,r),i.pitch=ge(.3,0,r),i.open=.4,r>=1&&(e.lunge=0,e.rear=0,this.endAttack())}return}if(i.kind==="burrow")if(i.step==="down")e.under=Math.min(1,i.t/.6),Math.random()<t*30&&this.debrisAt(e.hx,this.headZ(),1.3),i.t>=.8&&(i.step="erupt",i.t=.6);else if(i.step==="erupt"){if(i.t>=1.05){i.t=0,i.waves-=1;const o=this.nearestTrack(),r=[0,1,2].filter(l=>l!==o)[Math.floor(Math.random()*2)],a=this.z-this.speed*n.eruptLead;for(const l of[o,r])this.addEruption(l,a,n.eruptLead);i.waves<=0&&(i.step="wait",i.t=0)}}else i.step==="wait"?i.t>=1.3&&(i.step="up",i.t=0,e.targetTrack=Math.floor(Math.random()*3),e.hx=this.trackX(e.targetTrack),e.baseX=e.hx,this.effects.explosion(e.hx,.4,this.headZ(),1.3),this.hooks.onShake?.(.7)):i.step==="up"&&(e.under=Math.max(0,1-i.t/.7),Math.random()<t*30&&this.debrisAt(e.hx,this.headZ(),1.3),i.t>=.8&&(e.under=0,this.roar(1),this.endAttack(.2)))}dropRock(t,e,i){const n=this.add(this.mesh("boulder"));n.scale.setScalar(1.4);const o=this.addRing(this.trackX(t),e);o.ring.visible=!0,o.dot.visible=!0,this.rocks.push({kind:"drop",meshes:[n,o.ring,o.dot],mesh:n,ring:o,track:t,z:e,lead:i,t:0})}startSweep(t,e){const i=this.addBar(),n=[];for(let o=0;o<8;o++){const r=new lt(Cn.get("wormseg"),this.wormMaterial);r.frustumCulled=!1;const a=.62-Math.abs(o-3.5)*.025;r.scale.set(a,a,.95),r.rotation.order="YXZ",r.visible=!1,this.add(r),n.push(r)}this.rocks.push({kind:"sweep",meshes:[i.bar,i.fill,...n],bar:i,segs:n,z:t,lead:e,t:0})}addEruption(t,e,i){const n=this.addRing(this.trackX(t),e);n.ring.visible=!0,n.dot.visible=!0;const o=new lt(Cn.get("wormhead"),this.wormMaterial);o.frustumCulled=!1,o.scale.setScalar(.55),o.rotation.x=-Math.PI/2,o.visible=!1,this.add(o),this.rocks.push({kind:"erupt",meshes:[n.ring,n.dot,o],ring:n,head:o,track:t,z:e,lead:i,t:0})}updateRocks(t){const e=this.phase==="boss";for(let i=this.rocks.length-1;i>=0;i--){const n=this.rocks[i];n.t+=t;let o=!1;const r=n.track!=null?this.trackX(n.track):0;if(n.kind==="drop"){const a=Math.min(1,n.t/n.lead);if(n.mesh.position.set(r,.5+8*(1-a*a),n.z),n.mesh.rotation.set(n.t*4,n.t*3,0),n.ring.ring.scale.setScalar(ge(1.8,1,a)),n.ring.dot.scale.setScalar(ge(.4,2.4,a)),a>=1){this.effects.explosion(r,.4,n.z,.7);for(let l=0;l<10;l++)this.debrisAt(r,n.z,.5);if(this.hooks.onShake?.(.35),this.clearMeshes(n),o=!0,e&&this.onTrack(n.track)&&Math.abs(this.z-n.z)<.95)this.hit("rockfall");else if(e){const l={kind:"rubble",track:n.track,z:n.z+.45,len:.9,spawned:!0,meshes:[],state:"down",t:0},c=this.add(this.mesh("rubble"));c.position.set(r,0,n.z),l.meshes.push(c),this.live.push(l)}}}else if(n.kind==="sweep"){const a=n.lead-.4,l=Math.min(1,n.t/a);n.bar.bar.scale.set(5.2,1,.9),n.bar.bar.position.set(0,.04,n.z),n.bar.fill.scale.set(Math.max(.001,5.2*l),1.3,.5),n.bar.fill.position.set(0,.05,n.z),n.bar.bar.visible=n.t<a,n.bar.fill.visible=n.t<a;const c=n.t<a?0:n.t<a+.18?(n.t-a)/.18:n.t<a+.85?1:Math.max(0,1-(n.t-a-.85)/.3),h=n.segs.length,f=u=>ge(-1.4,-.55+Math.sin(u*Math.PI)*.95,c)+Math.sin(this.clock*9+u*6)*.05;for(let u=0;u<h;u++){const d=u/(h-1),g=n.segs[u];g.visible=c>0;const x=ge(-3.3,3.3,d),p=f(d),m=(f(Math.min(1,d+.02))-f(Math.max(0,d-.02)))/(.04*6.6);g.position.set(x,p,n.z),g.rotation.set(-Math.atan(m),Math.PI/2,0)}c>0&&n.t<a+.2&&Math.random()<.6&&this.debrisAt(W(-2.8,2.8),n.z,.2),e&&!n.spent&&c>.6&&Math.abs(this.z-n.z)<.75&&this.y<Q.clear.sweep&&(n.spent=!0,this.hit("worm")),n.t>a+1.3&&(this.clearMeshes(n),o=!0)}else if(n.kind==="erupt"){const a=Math.min(1,n.t/n.lead);if(n.ring.ring.scale.setScalar(ge(1.8,1,a)),n.ring.dot.scale.setScalar(ge(.4,2.4,a)),n.t<n.lead&&Math.random()<t*20&&this.debrisAt(r,n.z,.4),n.t>=n.lead){const l=n.t-n.lead;n.burst||(n.burst=!0,n.ring.ring.visible=!1,n.ring.dot.visible=!1,n.head.visible=!0,this.effects.explosion(r,.3,n.z,.8),this.hooks.onShake?.(.4),e&&this.onTrack(n.track)&&Math.abs(this.z-n.z)<.95&&this.hit("worm"));const c=l<.14?l/.14:l<.5?1:Math.max(0,1-(l-.5)/.35);n.head.position.set(r,ge(-1.6,.5,c),n.z),n.head.rotation.z=l*2,l>.9&&(this.clearMeshes(n),o=!0)}}o&&this.rocks.splice(i,1)}}updateCrates(t){const e=this.worm;if(this.phase==="boss"&&e&&e.state==="fight"){this.nextCrate-=t;const i=this.crates.filter(n=>!n.taken).length;if(this.nextCrate<=0&&this.sticks+i*Q.boss.crateSticks<Q.boss.maxSticks){this.nextCrate=Q.boss.crateEvery*W(.85,1.15);const n=e.attack?.kind==="lunge"?e.attack.track:-1,o=[0,1,2].filter(h=>h!==n),r=this.cratesDropped===0?this.nearestTrack():o[Math.floor(Math.random()*o.length)];this.cratesDropped+=1;const a=this.z-this.speed*1.2,l=this.add(this.mesh("crate")),c=this.addRing(this.trackX(r),a);c.ring.visible=!0,this.crates.push({meshes:[l,c.ring,c.dot],mesh:l,ring:c,track:r,z:a,y:5,vy:0,landed:!1})}}for(let i=this.crates.length-1;i>=0;i--){const n=this.crates[i],o=this.trackX(n.track);if(!n.landed&&(n.vy-=30*t,n.y=Math.max(0,n.y+n.vy*t),n.y===0)){n.landed=!0,this.group.remove(n.ring.ring);for(let r=0;r<6;r++)this.debrisAt(o,n.z,.4)}if(n.mesh.position.set(o,n.y,n.z),n.mesh.rotation.y=Math.sin(this.clock*2+i)*.1,!n.taken&&this.phase==="boss"&&this.onTrack(n.track)&&Math.abs(this.z-n.z)<.8&&this.y<1){n.taken=!0,this.sticks=Math.min(Q.boss.maxSticks,this.sticks+Q.boss.crateSticks);for(let r=0;r<12;r++)this.sparks.emit(o,.6,n.z,{vx:W(-2,2),vy:W(1,3),vz:W(-2,2),life:.45,size:.1,gravity:5,color:16765024});this.clearMeshes(n),this.hooks.onItems?.(),this.hooks.onPickup?.(`+${Q.boss.crateSticks} DYNAMITE`),this.hooks.onSound?.("item")}(n.z-this.z>6||n.taken)&&(this.clearMeshes(n),this.crates.splice(i,1))}}updateThrows(t){const e=this.worm;for(let i=this.throws.length-1;i>=0;i--){const n=this.throws[i];n.t+=t;const o=Math.min(1,n.t/Q.boss.throwSeconds),r=e?this.headZ()+.7:this.z-Q.boss.distance,a=e?e.hy:1,l=ge(this.z-.6,r,o),c=ge(n.y0,a,o)+2.2*4*o*(1-o);n.stick.position.set(n.x,c,l),n.stick.rotation.set(n.t*14,0,0),n.spark.position.set(n.x,c+Math.cos(n.t*14)*.25,l-Math.sin(n.t*14)*.25),n.spark.scale.setScalar(.8+Math.random()*.6),Math.random()<.7&&this.sparks.emit(n.spark.position.x,n.spark.position.y,n.spark.position.z,{vy:W(0,1),life:.25,size:.06,color:16765024}),!(o<1)&&(this.clearMeshes(n),this.throws.splice(i,1),e&&this.wormHittable()&&Math.abs(e.hx-n.x)<Q.boss.hitHalfWidth?this.hitWorm(n.x,c,l):(this.effects.explosion(n.x,.3,l-.4,.6,0,{tight:!0}),this.hooks.onShake?.(.15)))}}hitWorm(t,e,i){const n=this.worm,o=Q.boss;n.health-=1,n.hurt=1,this.hooks.onSound?.("hit"),n.knock=1.4,this.flash=1,this.effects.explosion(t,e,i-.6,.9,0,{tight:!0}),this.effects.debris(t,e,i-.6,lh,{count:8,speed:2.5,up:5,size:.7,floor:0}),this.hooks.onShake?.(.4);const r=Math.max(0,n.health/o.health),a=r<=1/3?2:r<=2/3?1:0;if(this.hooks.onBoss?.(r,{hurt:!0,enraged:a===2,name:"Deepworm"}),n.health<=0){this.slay();return}a!==n.stage&&(n.stage=a,this.roar(1.6),this.hooks.onShake?.(.9),this.hooks.onBanner?.(a===2?"ENRAGED!":"IT’S ANGRY",a===2?"boss":"warn"),n.attack||(n.nextAttack=1.6))}slay(){const t=this.worm,e=Q.boss;t.attack?.bar&&this.removeBar(t.attack.bar),t.attack=null,t.state="dying",t.dead=e.deathSeconds,t.lunge=0,t.under=0;for(const i of this.rocks)this.clearMeshes(i);this.rocks.length=0,this.setPhase("victory"),this.hooks.onItems?.(),this.hooks.onBoss?.(null),this.hooks.onHint?.(null),this.hooks.onBanner?.("DEEPWORM SLAIN","win"),this.hooks.onScore?.(e.points),this.roar(e.deathSeconds),this.hooks.onShake?.(1.2)}updateWormDeath(t){const e=this.worm;e.dead-=t;const i=Q.boss.deathSeconds-e.dead;if(Math.random()<t*10){const n=e.segs[Math.floor(Math.random()*e.segs.length)],o=Math.random()<.4?e.head.position:n.position;this.effects.explosion(o.x+W(-.8,.8),o.y+W(-.4,.6),o.z+W(-.5,.5),W(.6,1.1)),e.hurt=1}e.head.rotation.z=Math.sin(i*9)*.3,e.head.rotation.x=Math.sin(i*7)*.2-Math.min(1,i/3)*.6,i>1.3&&(e.hy-=t*2.2),e.dead<=0&&(this.effects.explosion(e.hx,.5,this.headZ(),1.8),this.effects.debris(e.hx,.5,this.headZ(),lh,{count:26,speed:6,up:9,size:1.3,floor:0}),this.effects.confetti?.(e.hx,.5,this.headZ()),this.hooks.onShake?.(.9),this.clearWorm(),this.startExit())}startExit(){this.setPhase("exit"),this.hooks.onBanner?.("DAYLIGHT!","calm");const t=this.add(this.mesh("daylight","",ui));t.position.set(0,0,this.z-36),this.extras.push(t);const e=this.add(new lt(new Pe(5.4,.02,30),this.poolMaterial(16773568)));e.position.set(0,.03,this.z-36+15),e.frustumCulled=!1,e.userData.own=!0,this.extras.push(e)}wreck(t,e){if(this.phase==="wrecked")return;const i=!!this.falling;this.setPhase("wrecked"),this.hooks.onItems?.(),this.hooks.onBoss?.(null),this.hooks.onHint?.(null),this.worm?.attack?.bar&&this.removeBar(this.worm.attack.bar);const n=this.x,o=We+this.y,r=this.z,a=[8226706,3949389,10514495,2369324];if(i){if(e==="lava"){this.effects.explosion(n,-.9,r,1.3);for(let l=0;l<40;l++)this.sparks.emit(n+W(-.8,.8),-.9,r+W(-.8,.8),{vx:W(-2,2),vy:W(2,6),vz:W(-2,2),life:.9,size:W(.08,.18),gravity:8,color:Math.random()<.5?16742938:16765024})}this.falling.dying=!0,this.hooks.onShake?.(.5)}else this.effects.explosion(n,o+.4,r,1.3),this.effects.debris(n,o+.4,r,a,{count:22,speed:5,up:7.5,size:1.1,floor:0}),this.effects.debris(n,o+.6,r,t.character.splatColors,{count:14,speed:3.2,up:8,size:.8,floor:0}),this.cart.visible=!1,this.lamp.visible=!1,this.hooks.onShake?.(1.1);t.group.visible=i?t.group.visible:!1,i||(t.shadow.visible=!1),this.deathClock=0}updateWreck(t,e){this.falling?.dying&&(this.deathClock+=t,e.group.position.y=We+this.y+xa,this.deathClock>.8&&(this.cart.visible=!1,e.group.visible=!1))}survive(){this.effects.explosion(this.x,We+Math.max(0,this.y)+.4,this.z,.8);for(const t of this.live)Math.abs(t.z-t.len/2-this.z)<3&&(t.spent=!0);this.shrugOff()}shrugOff(){if(!this.falling)return;const t=this.falling.gap;this.falling=null,this.air=!0,this.vy=11,this.y=Math.max(this.y,-.6),t&&(t.spent=!0);for(const e of this.gaps)Math.abs(e.z-(t?.z??this.z))<1&&(e.spent=!0);this.hooks.onShake?.(.3)}}const lr={scale:1.3,headScale:1},Oi={base:16767412,limb:16240036},Hs={eye:3025962,eyeSize:.09,mouth:14256760,eyeDrop:.42,eyeSpread:.5},Gs=[{row:0,label:"baby",pose:"crawl",height:.52,headW:.3,headH:.25,headD:.28,bodyW:.34,bodyH:.24,bodyD:.26,legH:.14,legW:.11,armL:.16,armW:.095,hair:16242803,hairStyle:"mop",hairH:.07,outfit:{top:16738908,bottom:16775920,shoes:16775920,accent:16777215},glasses:!1,backpack:!1,briefcase:!1},{row:11,label:"toddler",pose:"stand",height:.74,headW:.29,headH:.18,headD:.27,bodyW:.32,bodyH:.24,bodyD:.24,legH:.3,legW:.11,armL:.22,armW:.085,hair:16113802,hairStyle:"mop",hairH:.06,outfit:{top:16761395,bottom:4891616,shoes:16775920,accent:16777215},glasses:!1,backpack:!1,briefcase:!1},{row:30,label:"kid",pose:"stand",height:.92,headW:.26,headH:.19,headD:.24,bodyW:.3,bodyH:.28,bodyD:.22,legH:.38,legW:.105,armL:.28,armW:.08,hair:15785378,hairStyle:"mop",hairH:.055,outfit:{top:4168416,bottom:3494010,shoes:3093304,accent:16777215},glasses:!1,backpack:!0,briefcase:!1},{row:70,label:"teen",pose:"stand",height:1.06,headW:.25,headH:.185,headD:.23,bodyW:.32,bodyH:.33,bodyD:.21,legH:.46,legW:.11,armL:.33,armW:.075,hair:15258252,hairStyle:"buzz",hairH:.045,outfit:{top:16513780,bottom:3096678,shoes:2764081,accent:12068922},glasses:!1,backpack:!0,briefcase:!1},{row:95,label:"uni",pose:"stand",height:1.13,headW:.25,headH:.185,headD:.23,bodyW:.33,bodyH:.35,bodyD:.22,legH:.5,legW:.115,armL:.35,armW:.08,hair:14467458,hairStyle:"swept",hairH:.055,outfit:{top:3290170,bottom:4877200,shoes:15920868,accent:16750144},glasses:!1,backpack:!0,briefcase:!1},{row:140,label:"career",pose:"stand",height:1.17,headW:.255,headH:.185,headD:.235,bodyW:.34,bodyH:.36,bodyD:.23,legH:.52,legW:.12,armL:.37,armW:.085,hair:13808241,hairStyle:"short",hairH:.05,outfit:{top:16513780,bottom:3095122,shoes:4600618,accent:10234938},glasses:!1,backpack:!1,briefcase:!0},{row:200,label:"beyond",pose:"stand",height:1.15,headW:.26,headH:.19,headD:.24,bodyW:.36,bodyH:.37,bodyD:.25,legH:.5,legW:.125,armL:.37,armW:.09,hair:14605524,hairStyle:"short",hairH:.05,outfit:{top:16773334,bottom:11047535,shoes:8809298,accent:6727876},glasses:!1,backpack:!1,briefcase:!0},{row:285,label:"older",pose:"stand",height:1.12,headW:.26,headH:.19,headD:.24,bodyW:.37,bodyH:.36,bodyD:.26,legH:.47,legW:.13,armL:.35,armW:.09,hair:15724266,hairStyle:"thin",hairH:.045,outfit:{top:15397623,bottom:9800829,shoes:7297605,accent:11057344},glasses:!0,backpack:!1,briefcase:!0}],Zo={frame:3026478,lens:15004408},Ko={body:5915698,trim:4009248,clasp:13805902},f1=3,u1=["height","headW","headH","headD","bodyW","bodyH","bodyD","legH","legW","armL","armW","hairH"],d1=["top","bottom","shoes","accent"];function p1(s,t,e){return s+(t-s)*e}function uh(s){let t=0;for(;t<Gs.length-1&&s>=Gs[t+1].row;)t++;const e=Gs[t],i=Gs[Math.min(t+1,Gs.length-1)],n=i.row-e.row,o=n>0?Math.min(1,Math.max(0,(s-e.row)/n)):0,r=o*o*(3-2*o),a=Math.min(1,Math.max(0,(r-.38)/.28)),l=r>=.75,c={label:r<.5?e.label:i.label,t:r};for(const h of u1)c[h]=p1(e[h],i[h],r);c.headW*=lr.headScale,c.headH*=lr.headScale,c.headD*=lr.headScale,c.hair=he(e.hair,i.hair,r),c.hairStyle=l?i.hairStyle:e.hairStyle,c.outfit={};for(const h of d1)c.outfit[h]=he(e.outfit[h],i.outfit[h],a);return c.pose=l?i.pose:e.pose,c.glasses=l?i.glasses:e.glasses,c.backpack=l?i.backpack:e.backpack,c.briefcase=l?i.briefcase:e.briefcase,c}function m1(s,t){const{headW:e,headD:i,hairH:n,hair:o,hairStyle:r}=s,a=[],l=t+n/2;switch(r){case"mop":a.push({size:[e*1.08,n,i*1.08],pos:[0,l,0],color:o}),a.push({size:[e*1.08,n*1.3,i*.18],pos:[0,l-n*.5,-i*.5],color:o}),a.push({size:[e*.2,n*.9,i*.7],pos:[-e*.56,l-n*.35,0],color:o}),a.push({size:[e*.2,n*.9,i*.7],pos:[e*.56,l-n*.35,0],color:o}),a.push({size:[e*.3,n*.7,i*.2],pos:[e*.18,l+n*.6,i*.1],color:o});break;case"buzz":a.push({size:[e*1.02,n,i*1.02],pos:[0,l,0],color:o}),a.push({size:[e*1.02,n*1.6,i*.14],pos:[0,l-n*.9,i*.48],color:o});break;case"swept":a.push({size:[e*1.04,n,i*1.04],pos:[0,l,0],color:o}),a.push({size:[e*.9,n*1.1,i*.24],pos:[0,l+n*.5,-i*.34],color:o}),a.push({size:[e*.16,n*1.4,i*.8],pos:[-e*.54,l-n*.2,0],color:o}),a.push({size:[e*.16,n*1.4,i*.8],pos:[e*.54,l-n*.2,0],color:o});break;case"thin":a.push({size:[e*1.04,n,i*.6],pos:[0,l,i*.22],color:o}),a.push({size:[e*.16,n*1.6,i*.9],pos:[-e*.54,l-n*.4,0],color:o}),a.push({size:[e*.16,n*1.6,i*.9],pos:[e*.54,l-n*.4,0],color:o});break;case"short":default:a.push({size:[e*1.04,n,i*1.04],pos:[0,l,0],color:o}),a.push({size:[e*1.04,n*1.2,i*.16],pos:[0,l-n*.7,-i*.48],color:o}),a.push({size:[e*.14,n*1.5,i*.9],pos:[-e*.55,l-n*.45,0],color:o}),a.push({size:[e*.14,n*1.5,i*.9],pos:[e*.55,l-n*.45,0],color:o});break}return a}function u0(s,t,e=0){const i=[],n=t+s.headH/2,o=e-s.headD/2;i.push({size:[s.headW,s.headH,s.headD],pos:[0,t,e],color:Oi.base});const r=n-s.headH*Hs.eyeDrop,a=s.headW*Hs.eyeSpread/2,l=Hs.eyeSize*(s.headW/.42);for(const c of[-a,a])i.push({size:[l,l,.03],pos:[c,r,o-.012],color:Hs.eye,flat:!0});if(i.push({size:[s.headW*.28,l*.5,.03],pos:[0,r-s.headH*.28,o-.012],color:Hs.mouth,flat:!0}),s.glasses){for(const c of[-a,a])i.push({size:[l*2.1,l*1.7,.02],pos:[c,r,o-.03],color:Zo.lens,flat:!0}),i.push({size:[l*2.4,.02,.03],pos:[c,r+l*.9,o-.032],color:Zo.frame,flat:!0}),i.push({size:[l*2.4,.02,.03],pos:[c,r-l*.9,o-.032],color:Zo.frame,flat:!0});i.push({size:[a*.8,.02,.03],pos:[0,r+l*.3,o-.032],color:Zo.frame,flat:!0})}for(const c of m1(s,n))i.push({...c,pos:[c.pos[0],c.pos[1],c.pos[2]+e]});return{parts:i,top:n+s.hairH}}function g1(s){const t=[],e=s.legH,i=e+s.bodyH,n=s.bodyW*.24,o=Math.min(.07,s.legH*.42);for(const l of[-n,n])t.push({size:[s.legW,s.legH-o,s.legW*.85],pos:[l,o+(s.legH-o)/2,0],color:s.outfit.bottom}),t.push({size:[s.legW*1.1,o,s.legW*1.25],pos:[l,o/2,-s.legW*.1],color:s.outfit.shoes});t.push({size:[s.bodyW,s.bodyH,s.bodyD],pos:[0,e+s.bodyH/2,0],color:s.outfit.top}),t.push({size:[s.bodyW*.55,s.bodyH*.14,s.bodyD*1.02],pos:[0,i-s.bodyH*.08,0],color:s.outfit.accent});const r=s.bodyW/2+s.armW/2;for(const l of[-r,r])t.push({size:[s.armW,s.armL*.62,s.armW],pos:[l,i-s.armL*.31,0],color:s.outfit.top}),t.push({size:[s.armW,s.armL*.38,s.armW],pos:[l,i-s.armL*.81,0],color:Oi.limb});if(s.backpack&&t.push({size:[s.bodyW*.72,s.bodyH*.8,s.bodyD*.45],pos:[0,e+s.bodyH*.55,s.bodyD*.6],color:s.outfit.accent}),s.briefcase){const l=i-s.armL,c=s.bodyW*.42,h=s.bodyH*.5;t.push({size:[c*.3,s.armL*.18,c*.3],pos:[r,l-s.armL*.06,0],color:Ko.trim}),t.push({size:[c,h,s.bodyD*.34],pos:[r,l-h*.55,0],color:Ko.body}),t.push({size:[c*1.04,h*.16,s.bodyD*.36],pos:[r,l-h*.55,0],color:Ko.trim}),t.push({size:[c*.22,h*.16,s.bodyD*.38],pos:[r,l-h*.55,0],color:Ko.clasp})}t.push({size:[s.headW*.34,.04,s.headD*.34],pos:[0,i+.02,0],color:Oi.limb});const a=u0(s,i+s.headH/2);return t.push(...a.parts),{parts:t,height:a.top}}function x1(s){const t=[],e=s.bodyD*1.7,i=s.bodyH*.95,n=s.legH*1.35,o=n+i/2,r=-e*.4,a=e*.32,l=s.bodyW*.33;for(const u of[-l,l])t.push({size:[s.armW*1.1,n,s.armW*1.1],pos:[u,n/2,r],color:Oi.limb}),t.push({size:[s.armW*1.3,n*.22,s.armW*1.5],pos:[u,n*.11,r-s.armW*.2],color:Oi.limb}),t.push({size:[s.legW*1.1,n,s.legW*1.1],pos:[u,n/2,a],color:Oi.limb}),t.push({size:[s.legW*1.2,n*.22,s.legW*1.4],pos:[u,n*.11,a+s.legW*.2],color:Oi.limb});t.push({size:[s.bodyW,i,e],pos:[0,o,e*.06],color:s.outfit.top}),t.push({size:[s.bodyW*1.08,i*1.05,e*.42],pos:[0,o-i*.06,a+e*.08],color:s.outfit.bottom});const c=o+i*.45+s.headH*.3,h=r-s.headD*.38;t.push({size:[s.headW*.36,i*.5,s.headD*.36],pos:[0,o+i*.2,r-s.headD*.1],color:Oi.limb});const f=u0(s,c,h);return t.push(...f.parts),{parts:t,height:f.top}}function dh(s){const t=s.pose==="crawl"?x1(s):g1(s),e=t.parts,i=s.height*lr.scale/t.height;if(Math.abs(i-1)>.001)for(const n of e)n.size=[n.size[0]*i,n.size[1]*i,n.size[2]*i],n.pos=[n.pos[0]*i,n.pos[1]*i,n.pos[2]*i];return e}class v1{constructor(){this.params=uh(0),this.geometry=Ye(dh(this.params)),this.mesh=new lt(this.geometry,ke),this.mesh.frustumCulled=!1,this.builtAtRow=0}setRow(t){if(Math.abs(t-this.builtAtRow)<f1)return;this.builtAtRow=t,this.params=uh(t);const e=Ye(dh(this.params));this.geometry.dispose(),this.geometry=e,this.mesh.geometry=e}reset(){this.builtAtRow=-999,this.setRow(0)}get height(){return this.params.height}get splatColors(){const t=this.params.outfit;return[t.top,t.top,t.bottom,t.accent,this.params.hair,Oi.base,Oi.limb]}dispose(){this.geometry.dispose()}}const _1=.3,ph=-.14,M1={forward:0,back:Math.PI,left:Math.PI/2,right:-Math.PI/2};class y1{constructor(t){this.character=new v1,this.group=new Ue,this.group.add(this.character.mesh),t.add(this.group);const e=new Hn(.34,12);e.rotateX(-Math.PI/2),this.shadow=new lt(e,new Yt({color:0,transparent:!0,opacity:.22,depthWrite:!1})),t.add(this.shadow),this.reset()}reset(){this.row=0,this.seaZ=null,this.col=0,this.x=0,this.y=0,this.baseY=0,this.maxRow=0,this.minRow=0,this.hop=null,this.bump=null,this.landTimer=0,this.justLanded=!1,this.ridingFloat=null,this.floatOffset=0,this.dead=!1,this.deathCause=null,this.deathTime=0,this.facing="forward",this.waterWalk=!1,this.mega=!1,this.setMega(!1),this.character.reset(),this.group.position.set(0,0,0),this.group.rotation.y=0,this.group.scale.set(1,1,1),this.group.visible=!0,this.shadow.visible=!0,this.character.mesh.rotation.set(0,0,0)}get z(){return this.seaZ??-this.row*Wt.tile}set z(t){this.seaZ=t}get busy(){return!!this.hop}move(t,e,{slide:i=!1}={}){if(this.dead||this.hop)return!1;const n=e.laneAt(this.row),o=n&&n.kind==="water"&&this.ridingFloat,r=t==="left"||t==="right",a=o&&r;let l=this.row,c,h=this.floatOffset;if(t==="forward"?l=this.row+1:t==="back"&&(l=this.row-1),r){const M=t==="left"?-1:1;if(a){const S=Math.max(0,this.ridingFloat.halfLen-_1);if(h=Math.min(S,Math.max(-S,this.floatOffset+M)),Math.abs(h-this.floatOffset)<.05)return this.startBump(t),!1;c=this.ridingFloat.x+h}else c=Math.round(this.x)+M}else c=o?this.x:Math.round(this.x);this.facing=t,this.group.rotation.y=M1[t];const f=Math.round(c),u=e.shoreCol?e.shoreCol(l):-19,d=e.mooringAt?.(l,f),g=!d&&f<u&&f>=u-2,x=r&&!a?e.tunnelAt?.(l,f):null;if(!x&&(f<u&&!g&&!d||f>Wt.columnLimit))return this.startBump(t),!1;if(!this.mega&&!g&&!d&&!x&&e.isBlocked(l,f))return this.startBump(t),!1;const p=e.laneAt(l),m=this.baseY,w=x?x.y:d?ph+.22:g?ph+(this.waterWalk||this.mega?.07:0):p?this.surfaceFor(p):0;return this.hop={t:0,fromX:this.x,toX:c,fromRow:this.row,toRow:l,fromY:m,toY:w,float:a?this.ridingFloat:null,fromOffset:this.floatOffset,toOffset:h,slide:i},this.row=l,this.col=f,a||(this.ridingFloat=null),this.maxRow=Math.max(this.maxRow,this.row),this.minRow=Math.min(this.minRow,this.row),!0}setMega(t){this.mega=t;const e=t?gs.scale:1;this.character.mesh.scale.setScalar(e),this.shadow.scale.setScalar(e),this.shadowScale=e}surfaceFor(t){return t.kind==="water"&&(this.waterWalk||this.mega)?t.surfaceY+.07:t.surfaceY}startBump(t){this.bump||(this.bump={t:0,dir:t})}update(t,e){if(this.dead){this.updateDeath(t);return}let i=0;if(this.hop){const o=this.hop,r=o.slide?ue.slideDuration:Ri.hopDuration*(this.mega?gs.hopScale:1);o.t+=t/r;const a=o.float&&o.float.mesh.parent;if(o.t>=1)this.x=a?o.float.x+o.toOffset:o.toX,this.floatOffset=o.toOffset,this.baseY=o.toY,this.hop=null,this.landTimer=o.slide?0:Ri.hopDuration*.55,this.justLanded=!0,a&&Math.abs(o.toOffset)>o.float.halfLen-.08&&(this.ridingFloat=null);else{const l=o.t;if(this.x=a?o.float.x+(o.fromOffset+(o.toOffset-o.fromOffset)*l):o.fromX+(o.toX-o.fromX)*l,this.baseY=o.fromY+(o.toY-o.fromY)*l,o.slide)this.group.scale.set(1,1,1);else{i=Math.sin(Math.PI*l)*Ri.hopHeight;const c=1+Ri.squash.stretch*Math.sin(Math.PI*l),h=l<.18?1-Ri.squash.crouch*(1-l/.18):1,f=c*h;this.group.scale.set(1/Math.sqrt(f),f,1/Math.sqrt(f))}}}else if(this.landTimer>0){this.landTimer=Math.max(0,this.landTimer-t);const o=this.landTimer/(Ri.hopDuration*.55),r=1-Ri.squash.land*o*o;this.group.scale.set(1/Math.sqrt(r),r,1/Math.sqrt(r))}else this.group.scale.set(1,1,1);const n=e.laneAt(this.row);if(!this.hop&&n&&n.kind==="water"){if(!this.ridingFloat){const o=e.floatAt(n,this.x);o&&(this.ridingFloat=o,this.floatOffset=this.x-o.x)}this.ridingFloat?this.ridingFloat.mesh.parent?(this.x=this.ridingFloat.x+this.floatOffset,this.baseY=n.surfaceY+.22):this.ridingFloat=null:(this.waterWalk||this.mega)&&(this.baseY=this.surfaceFor(n))}else(!n||n.kind!=="water")&&(this.ridingFloat=null);if(this.bump)if(this.bump.t+=t/Ri.bumpDuration,this.bump.t>=1)this.bump=null;else{const o=Math.sin(Math.PI*this.bump.t)*Ri.bumpDistance,r=this.bump.dir;this.group.position.x=this.x+(r==="left"?-o:r==="right"?o:0),this.group.position.z=this.z+(r==="forward"?-o:r==="back"?o:0),this.group.position.y=this.baseY,this.syncShadow(),this.character.setRow(this.maxRow);return}this.group.position.set(this.x,this.baseY+i,this.hopZ()),this.character.setRow(this.maxRow),this.syncShadow()}hopZ(){if(!this.hop)return this.z;const t=this.hop,e=-t.fromRow*Wt.tile,i=-t.toRow*Wt.tile;return e+(i-e)*t.t}syncShadow(){this.shadow.position.set(this.group.position.x,this.baseY+.03,this.group.position.z);const t=Math.max(0,this.group.position.y-this.baseY),e=Math.max(.45,1-t*.8),i=(this.shadowScale??1)*e;this.shadow.scale.set(i,1,i),this.shadow.material.opacity=.22*e}respawn(t,e,i){this.hop=null,this.bump=null,this.ridingFloat=null,this.seaZ=null,this.landTimer=0,this.row=t,this.col=e,this.x=e;const n=i.laneAt(t);this.baseY=n?this.surfaceFor(n):0,this.facing="forward",this.group.rotation.set(0,0,0),this.group.scale.set(1,1,1),this.group.visible=!0,this.shadow.visible=!0,this.group.position.set(this.x,this.baseY,this.z),this.syncShadow()}kill(t){this.dead||(this.dead=!0,this.deathCause=t,this.deathTime=0,this.hop=null,this.bump=null,this.ridingFloat=null)}updateDeath(t){this.deathTime+=t;const e=this.deathTime;if(this.deathCause==="vehicle"){const i=Math.min(1,e/.12),n=1-.9*i,o=1+.6*i;this.group.scale.set(o,Math.max(.08,n),o*1.1),this.group.position.y=this.baseY+.02,this.shadow.visible=!1,e>.2&&(this.group.visible=!1)}else if(this.deathCause==="water"||this.deathCause==="ice"){const i=Math.min(1,e/.7);this.group.position.y=this.baseY-.9*i*i,this.group.scale.set(1-.1*i,1-.1*i,1-.1*i),this.group.rotation.z=Math.sin(e*6)*.12*(1-i),this.shadow.visible=!1}else if(this.deathCause==="chaser"){const i=Math.min(1,e/.9);this.group.position.y=this.baseY+7*i*i,this.group.position.x=this.x+Math.sin(e*9)*.12,this.group.rotation.z=Math.sin(e*11)*.3,this.group.scale.setScalar(Math.max(.2,1-.6*i)),this.shadow.visible=!1}}dispose(){this.character.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}}const b1=.0016,mh=2.6;function gh(s,t,e){let i=(t-s)%(Math.PI*2);return i>Math.PI&&(i-=Math.PI*2),i<-Math.PI&&(i+=Math.PI*2),s+i*e}class xh{constructor(t){this.scene=t,this.mesh=new lt(_e.get("magpie"),ke),this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh),this.model="magpie",this.target=new P,this.position=new P,this.previous=new P,this.heading=0,this.bank=0,this.presence=0,this.swooping=null,this.time=0}setModel(t){t===this.model||!_e.has(t)||(this.model=t,this.mesh.geometry=_e.get(t))}hide(){this.grounded=!0,this.mesh.visible=!1}show(){this.grounded=!1}reset(){this.grounded=!1,this.mesh.visible=!1,this.swooping=null,this.time=0,this.presence=0,this.heading=0,this.bank=0,this.mesh.scale.setScalar(1),this.mesh.rotation.set(0,0,0),this.position.set(0,4,0),this.previous.copy(this.position)}update(t,e,i,n){if(this.grounded){this.mesh.visible=!1;return}if(this.time+=t,this.swooping){this.updateSwoop(t);return}const o=n>0?1:0;if(this.presence+=(o-this.presence)*Math.min(1,t*3.5),this.presence<.02){this.mesh.visible=!1;return}this.mesh.visible=!0;const r=this.time*.85,a=3.2-n*1.7;this.target.set(i+Math.cos(r)*a,3.7-n*1.3+Math.sin(this.time*1.4)*.16,-(e-.6)*Wt.tile+Math.sin(r*2)*a*.42);const l=1-Math.pow(b1,t);this.previous.copy(this.position),this.position.lerp(this.target,l),this.mesh.position.copy(this.position);const c=this.position.x-this.previous.x,h=this.position.z-this.previous.z;if(c*c+h*h>1e-7){const u=Math.atan2(-h,c),d=gh(this.heading,u,Math.min(1,t*6))-this.heading;this.heading+=d;const g=pi.clamp(-d/Math.max(t,1e-4)*.16,-.5,.5);this.bank+=(g-this.bank)*Math.min(1,t*5)}const f=Math.sin(this.time*Math.PI*2*mh);this.mesh.rotation.set(this.bank,this.heading,0),this.mesh.scale.set(this.presence,this.presence*(1-f*.07),this.presence*(1+f*.11))}swoop(t,e){this.mesh.visible=!0,this.swooping={t:0,from:this.position.clone().setY(Math.max(this.position.y,3.4)),to:new P(t,.55,e)}}updateSwoop(t){const e=this.swooping;e.t=Math.min(1.7,e.t+t/.5);const i=Math.min(1,e.t),n=i*i*(3-2*i)*i;this.position.lerpVectors(e.from,e.to,Math.min(1,n)),e.t>1&&(this.position.y=e.to.y+(e.t-1)*11),this.mesh.position.copy(this.position);const o=e.to.x-e.from.x,r=e.to.z-e.from.z;this.heading=gh(this.heading,Math.atan2(-r,o),Math.min(1,t*8)),this.bank*=Math.max(0,1-t*4);const a=Math.sin(this.time*Math.PI*2*(mh*2.2));this.mesh.rotation.set(this.bank,this.heading,0),this.mesh.scale.set(1,1-a*.12,1+a*.16)}static proximity(t,e){const i=Xt.drift.warnWithin,n=t-e;return n>i?0:Math.min(1,Math.max(0,1-n/i))}}const $o=140,Jo=11,vh=40,S1=12,_h=[19865,3051488,15247649,16765503,16740185,16734858,4177778,10186710,16776695,5883888];class w1{constructor(t){this.scene=t,this.active=[];const e=new As(.28,.42,16);e.rotateX(-Math.PI/2),this.ringGeometry=e,this.dropGeometry=new Pe(.1,.1,.1),this.blastGeometry=new Pe(1,1,1),this.confettiGeometry=new Pe(.15,.05,.1),this.confettiMesh=new mr(this.confettiGeometry,new Yt,$o),this.confettiMesh.instanceMatrix.setUsage(ur),this.confettiMesh.frustumCulled=!1,this.confettiMesh.count=0;const i=new Ht;for(let n=0;n<$o;n++)this.confettiMesh.setColorAt(n,i.set(16777215));t.add(this.confettiMesh),this.bursts=[];for(let n=0;n<S1;n++){const o=new mr(this.blastGeometry,new Yt({transparent:!0,opacity:1,depthWrite:!1}),vh);o.instanceMatrix.setUsage(ur),o.frustumCulled=!1,o.count=0,o.visible=!1;const r=new Ht(16777215);for(let a=0;a<vh;a++)o.setColorAt(a,r);t.add(o),this.bursts.push({mesh:o,particles:[],t:0,life:0,busy:!1})}this.pieces=[],this.dummy=new He,this.colour=new Ht}warmUp(t,e){const i=o=>{o.count=1,this.dummy.position.set(0,-500,0),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(.001),this.dummy.updateMatrix(),o.setMatrixAt(0,this.dummy.matrix),o.instanceMatrix.needsUpdate=!0,o.visible=!0},n=[this.confettiMesh,...this.bursts.map(o=>o.mesh)];for(const o of n)i(o);t.compile(this.scene,e);for(const o of n)o.visible=!1,o.count=0}confetti(t,e,i,n=$o){this.pieces.length=0;const o=Math.min(n,$o);for(let r=0;r<o;r++){const a=r/o*Math.PI*2+Math.random()*.5,l=1.8+Math.random()*4.6,c=4.2+Math.random()*4.4;this.pieces.push({x:t,y:e+.35,z:i,vx:Math.cos(a)*l,vy:c,vz:Math.sin(a)*l*.7,rx:Math.random()*Math.PI,ry:Math.random()*Math.PI,rz:Math.random()*Math.PI,spinX:(Math.random()-.5)*18,spinY:(Math.random()-.5)*18,spinZ:(Math.random()-.5)*18,scale:.7+Math.random()*.9,groundY:e+.03+Math.random()*.02,settled:!1}),this.confettiMesh.setColorAt(r,this.colour.set(_h[r%_h.length]))}this.confettiMesh.count=o,this.confettiMesh.instanceColor.needsUpdate=!0,this.writeConfetti()}writeConfetti(){for(let t=0;t<this.pieces.length;t++){const e=this.pieces[t];this.dummy.position.set(e.x,e.y,e.z),this.dummy.rotation.set(e.rx,e.ry,e.rz),this.dummy.scale.setScalar(e.scale),this.dummy.updateMatrix(),this.confettiMesh.setMatrixAt(t,this.dummy.matrix)}this.confettiMesh.instanceMatrix.needsUpdate=!0}updateConfetti(t){if(!this.pieces.length)return;let e=!1;for(const i of this.pieces)i.settled||(e=!0,i.vy-=Jo*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.rx+=i.spinX*t,i.ry+=i.spinY*t,i.rz+=i.spinZ*t,i.vx*=1-2.4*t,i.vz*=1-2.4*t,i.y<=i.groundY&&(i.y=i.groundY,i.settled=!0,i.rx=0,i.rz=0));e&&this.writeConfetti()}splat(t,e,i,n){const o=n.length?n:[16734797],r=()=>o[Math.floor(Math.random()*o.length)],a=[];for(let c=0;c<28;c++){const h=Math.random()*Math.PI*2,f=Math.pow(Math.random(),.55)*.85,u=.16+Math.random()*.34;a.push({size:[u,.03+Math.random()*.025,u*(.45+Math.random()*.8)],pos:[Math.cos(h)*f,.018+Math.random()*.012,Math.sin(h)*f],color:r(),rotY:Math.random()*Math.PI,flat:!0})}for(let c=0;c<16;c++){const h=Math.random()*Math.PI*2,f=.75+Math.random()*.8,u=.05+Math.random()*.1;a.push({size:[u,.025,u*(.6+Math.random()*.8)],pos:[Math.cos(h)*f,.016,Math.sin(h)*f],color:r(),rotY:Math.random()*Math.PI,flat:!0})}const l=new lt(Ye(a),ke);l.position.set(t,e,i),l.scale.set(.15,1,.15),l.frustumCulled=!1,this.scene.add(l),this.active.push({mesh:l,t:0,life:.18,kind:"splat",owned:!0})}explosion(t,e,i,n=1,o=0,{tight:r=!1}={}){this.sound?.play("boom",{size:n});const l=this.bursts.find(d=>!d.busy)??this.bursts.reduce((d,g)=>d.t>g.t?d:g);l.busy=!0,l.t=-o,l.life=1.7,l.particles.length=0;const c=d=>l.particles.push(d);c({kind:"core",x:t,y:e+.5*n,z:i,vx:0,vy:0,vz:0,from:.3*n,to:1.5*n,birth:0,life:.14,color:16776688}),c({kind:"core",x:t,y:e+.45*n,z:i,vx:0,vy:0,vz:0,from:.4*n,to:1.25*n,birth:.02,life:.3,color:16769130});const h=d=>r?Math.PI+(d%(Math.PI*2)+Math.PI*2)%(Math.PI*2)/2:d,f=r?.45:1;for(let d=0;d<8;d++){const g=h(d/8*Math.PI*2+Math.random()*.5),x=(1.6+Math.random()*2.2)*f;c({kind:"fire",x:t,y:e+.3*n+Math.random()*.7*n,z:i,vx:Math.cos(g)*x*n,vy:.8+Math.random()*2.2,vz:Math.sin(g)*x*.65*n,from:.4*n,to:1.05*n,birth:Math.random()*.05,life:(.45+Math.random()*.3)*(r?.6:1),spin:(Math.random()-.5)*6,color:[16730644,16747039,16761395][d%3]})}for(let d=0;d<(r?2:9);d++){const g=h(Math.random()*Math.PI*2);c({kind:"smoke",x:t+Math.cos(g)*.6*n,y:e+.3+Math.random()*.4,z:i+Math.sin(g)*.4*n,vx:Math.cos(g)*(.5+Math.random())*n,vy:1.6+Math.random()*1.3,vz:Math.sin(g)*.6*n,from:.4*n,to:1.4*n,birth:.04+Math.random()*.14,life:(.9+Math.random()*.5)*(r?.4:1),spin:(Math.random()-.5)*1.6,color:[10722192,7564902,4867906][d%3]})}for(let d=0;d<(r?5:10);d++){const g=h(Math.random()*Math.PI*2);c({kind:"debris",x:t,y:e+.2,z:i,vx:Math.cos(g)*5.5*n*f,vy:4.6+Math.random()*3.4,vz:Math.sin(g)*3.6*n,from:.14+Math.random()*.16,to:.14+Math.random()*.16,birth:0,life:1+Math.random()*.4,spin:(Math.random()-.5)*14,color:d%2?7035982:3814703})}l.mesh.count=l.particles.length;for(let d=0;d<l.particles.length;d++)l.mesh.setColorAt(d,this.colour.set(l.particles[d].color));if(l.mesh.instanceColor.needsUpdate=!0,l.mesh.visible=!1,this.writeBurst(l),r)return;const u=new lt(this.ringGeometry,new Yt({color:16765503,transparent:!0,opacity:.9,depthWrite:!1}));u.position.set(t,e+.05,i),u.scale.setScalar(.4),this.scene.add(u),this.active.push({mesh:u,t:-o,life:.55,kind:"ring",to:7*n})}writeBurst(t){let e=!1;for(let i=0;i<t.particles.length;i++){const n=t.particles[i],o=t.t-n.birth;if(o<0||o>n.life)this.dummy.scale.setScalar(0),this.dummy.position.set(n.x,-50,n.z),this.dummy.rotation.set(0,0,0);else{e=!0;const r=o/n.life,a=n.kind==="debris"?1:1-r*.75,l=n.x+n.vx*o*a,c=n.z+n.vz*o*a;let h=n.y+n.vy*o*a;n.kind==="debris"&&(h=n.y+n.vy*o-.5*Jo*o*o);const f=r<.35?r/.35:1-(r-.35)/.65,u=n.from+(n.to-n.from)*Math.min(1,r*2);this.dummy.position.set(l,Math.max(n.y*.2,h),c),this.dummy.rotation.set(n.spin?n.spin*o:0,n.spin?n.spin*o*.7:0,0),this.dummy.scale.setScalar(Math.max(0,u*(.35+.65*f)))}this.dummy.updateMatrix(),t.mesh.setMatrixAt(i,this.dummy.matrix)}t.mesh.instanceMatrix.needsUpdate=!0,t.mesh.visible=e}updateBursts(t){for(const e of this.bursts){if(!e.busy)continue;if(e.t+=t,e.t>e.life){e.busy=!1,e.mesh.visible=!1,e.mesh.count=0;continue}const i=Math.max(0,1-Math.max(0,e.t-.9)/.7);e.mesh.material.opacity=i,this.writeBurst(e)}}splash(t,e,i,n=14676218){this.sound?.play("splash");for(let o=0;o<2;o++){const r=new lt(this.ringGeometry,new Yt({color:n,transparent:!0,opacity:.85,depthWrite:!1}));r.position.set(t,e+.03,i),r.scale.setScalar(.4),this.scene.add(r),this.active.push({mesh:r,t:-o*.16,life:.7,kind:"ring"})}for(let o=0;o<9;o++){const r=new lt(this.dropGeometry,new Yt({color:n,transparent:!0,opacity:.95,depthWrite:!1}));r.position.set(t,e+.1,i),this.scene.add(r);const a=o/9*Math.PI*2+Math.random();this.active.push({mesh:r,t:0,life:.6,kind:"drop",vx:Math.cos(a)*1.8,vz:Math.sin(a)*1.8,vy:2.4+Math.random()})}}bigSplash(t,e,i,n=14676218,o=1){this.sound?.play("splash",{big:!0});for(let l=0;l<4;l++){const c=new lt(this.ringGeometry,new Yt({color:l%2?16777215:n,transparent:!0,opacity:.85,depthWrite:!1}));c.position.set(t,e+.03+l*.005,i),c.scale.setScalar(.4),this.scene.add(c),this.active.push({mesh:c,t:-l*.14,life:.9+l*.12,kind:"ring",to:(4+l*1.6)*o})}const r=new lt(this.discGeometry??(this.discGeometry=new Hn(1,18).rotateX(-Math.PI/2)),new Yt({color:16777215,transparent:!0,opacity:.6,depthWrite:!1}));r.position.set(t,e+.02,i),r.scale.setScalar(.3),this.scene.add(r),this.active.push({mesh:r,t:0,life:1.6,kind:"slick",to:1.6*o});const a=Math.round(34*Math.min(1.6,o));for(let l=0;l<a;l++){const c=l<a*.45,h=new lt(this.dropGeometry,new Yt({color:l%3===0?16777215:n,transparent:!0,opacity:.95,depthWrite:!1})),f=Math.random()*Math.PI*2,u=c?Math.random()*.8:2.2+Math.random()*2.6;h.position.set(t+Math.cos(f)*(c?.25:.5)*o,e+.1,i+Math.sin(f)*(c?.25:.5)*o),h.scale.setScalar((1.4+Math.random()*2.2)*Math.sqrt(o)),this.scene.add(h),this.active.push({mesh:h,t:-Math.random()*.12,life:c?1.1+Math.random()*.4:.8+Math.random()*.3,kind:"drop",vx:Math.cos(f)*u*o,vz:Math.sin(f)*u*o*.8,vy:(c?7+Math.random()*4.5:3+Math.random()*2.2)*Math.sqrt(o)})}}debris(t,e,i,n,{count:o=18,speed:r=4,up:a=6,size:l=1,floor:c=0,water:h=!1,splashColor:f}={}){const u=n?.length?n:[9069632];for(let d=0;d<o;d++){const g=new lt(this.chunkGeometry??(this.chunkGeometry=new Pe(1,1,1)),new Yt({color:u[d%u.length]})),x=(.14+Math.random()*.26)*l;d%3===0?g.scale.set(x*2.6,x*.5,x*.8):g.scale.set(x,x*(.6+Math.random()*.6),x),g.position.set(t+(Math.random()-.5)*.4,e+.2,i+(Math.random()-.5)*.4),this.scene.add(g);const p=Math.random()*Math.PI*2,m=r*(.4+Math.random()*.8);this.active.push({mesh:g,t:0,life:3.2,kind:"chunk",vx:Math.cos(p)*m,vz:Math.sin(p)*m*.75,vy:a*(.6+Math.random()*.7),spin:[(Math.random()-.5)*16,(Math.random()-.5)*12,(Math.random()-.5)*16],floor:c,water:h,splashColor:f,landed:!1})}}pop(t){t.userData.popFrom=t.scale.x,this.active.push({mesh:t,t:0,life:.26,kind:"pop"})}update(t){this.updateConfetti(t),this.updateBursts(t);for(let e=this.active.length-1;e>=0;e--){const i=this.active[e];if(i.t+=t,i.t<0)continue;const n=i.t/i.life;if(n>=1){if(i.kind==="splat"){i.mesh.scale.set(1,1,1),this.active.splice(e,1),this.settled??(this.settled=[]),this.settled.push(i);continue}this.retire(i),this.active.splice(e,1);continue}if(i.kind==="ring")i.mesh.scale.setScalar(.4+n*((i.to??3.6)-.4)),i.mesh.material.opacity=.85*(1-n);else if(i.kind==="drop")i.vy-=Jo*t,i.mesh.position.x+=i.vx*t,i.mesh.position.z+=i.vz*t,i.mesh.position.y+=i.vy*t,i.mesh.material.opacity=1-n*n,i.mesh.rotation.x+=t*6,i.mesh.rotation.y+=t*4;else if(i.kind==="slick")i.mesh.scale.setScalar(.3+(i.to-.3)*Math.sqrt(n)),i.mesh.material.opacity=.6*(1-n);else if(i.kind==="chunk")i.landed?i.water?(i.mesh.position.y-=t*.5,i.mesh.rotation.z+=t*.8):(i.mesh.rotation.x=0,i.mesh.rotation.z=0):(i.vy-=Jo*t,i.mesh.position.x+=i.vx*t,i.mesh.position.y+=i.vy*t,i.mesh.position.z+=i.vz*t,i.mesh.rotation.x+=i.spin[0]*t,i.mesh.rotation.y+=i.spin[1]*t,i.mesh.rotation.z+=i.spin[2]*t,i.vy<0&&i.mesh.position.y<=i.floor&&(i.landed=!0,i.mesh.position.y=i.floor,i.water&&this.splash(i.mesh.position.x,i.floor,i.mesh.position.z,i.splashColor)));else if(i.kind==="splat"){const o=n<.7?n/.7*1.12:1.12-(n-.7)/.3*.12;i.mesh.scale.set(o,1,o)}else if(i.kind==="pop"){const o=i.mesh.userData.popFrom??1,r=n<.4?o*(1+n*1.6):o*(1.64-(n-.4)*2.7);i.mesh.scale.setScalar(Math.max(.001,r)),i.mesh.rotation.y+=t*12,i.mesh.position.y+=t*1.2}}}retire(t){if(t.kind==="pop"){t.mesh.visible=!1,t.mesh.scale.setScalar(1);return}this.scene.remove(t.mesh),t.owned?t.mesh.geometry.dispose():t.mesh.material.dispose()}clear(){for(const t of this.bursts)t.busy=!1,t.t=0,t.mesh.visible=!1,t.mesh.count=0;for(const t of this.active)this.retire(t);this.active.length=0;for(const t of this.settled??[])this.retire(t);this.settled&&(this.settled.length=0),this.pieces.length=0,this.confettiMesh.count=0}dispose(){this.clear(),this.scene.remove(this.confettiMesh),this.confettiMesh.material.dispose();for(const t of this.bursts)this.scene.remove(t.mesh),t.mesh.material.dispose();this.confettiGeometry.dispose(),this.ringGeometry.dispose(),this.dropGeometry.dispose(),this.blastGeometry.dispose(),this.chunkGeometry?.dispose(),this.discGeometry?.dispose()}}const d0="andy.sound",E1=.12,T1=25,Ee=s=>440*Math.pow(2,(s-69)/12),A1={land:{bpm:124,steps:16,swing:.08,chords:[[48,52,55,60],[45,48,52,57],[41,45,48,53],[43,47,50,55]],bass:[0,null,null,0,null,null,7,null,0,null,null,0,null,7,null,5],rhythm:[1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0],contour:[2,3,4,3,2,1,2,3,4,5,4,3,2,3,1,0],octave:12,lead:"square",leadGain:.05,kick:[1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0],snare:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],hat:[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1]},sea:{bpm:112,steps:12,swing:0,chords:[[45,48,52,57],[43,47,50,55],[41,45,48,53],[40,44,47,52]],bass:[0,null,null,7,null,null,0,null,null,7,null,null],rhythm:[1,0,1,1,0,1,1,0,1,1,1,0],contour:[4,3,2,3,2,1,2,3,4,5,4,3],octave:12,lead:"triangle",leadGain:.09,kick:[1,0,0,0,0,0,1,0,0,0,0,0],snare:[0,0,0,1,0,0,0,0,0,1,0,0],hat:[0,0,1,0,0,1,0,0,1,0,0,1]},mine:{bpm:96,steps:16,swing:0,chords:[[38,41,45,50],[38,41,45,50],[34,38,41,46],[36,40,43,48]],bass:[0,null,null,null,null,null,null,null,0,null,null,null,7,null,null,null],rhythm:[1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0],contour:[4,3,2,5,4,3,2,1,2,3,4,3,6,5,4,3],octave:24,lead:"triangle",leadGain:.07,kick:[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],snare:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hat:[0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],drone:!0},boss:{bpm:152,steps:16,swing:0,chords:[[40,43,47,52],[40,43,47,52],[36,40,43,48],[38,42,45,50]],bass:[0,0,12,0,0,0,12,0,0,0,12,0,0,12,0,7],rhythm:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],contour:[0,2,4,2,1,3,5,3,2,4,6,4,3,5,7,5],octave:12,lead:"sawtooth",leadGain:.035,kick:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0],snare:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],hat:[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1]}};class R1{constructor(){this.ctx=null,this.muted=C1(),this.theme=null,this.wanted=null,this.duck=1,this.voices=new Map,this.timer=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&!this.held&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:.8;const i=e.createDynamicsCompressor();i.threshold.value=-10,i.knee.value=8,i.ratio.value=6,i.attack.value=.003,i.release.value=.2,this.master.connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=.55,this.music.connect(this.master);const n=e.sampleRate;this.noise=e.createBuffer(1,n,e.sampleRate);const o=this.noise.getChannelData(0);for(let r=0;r<n;r++)o[r]=Math.random()*2-1;this.wanted&&this.setMusic(this.wanted,!0)}get ready(){return!!this.ctx&&!this.muted}setMuted(t){this.muted=t;try{localStorage.setItem(d0,t?"off":"on")}catch{}this.master&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}toggleMuted(){return this.setMuted(!this.muted),this.muted}hold(t){this.held=t,this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}tone({type:t="square",from:e,to:i=e,length:n=.12,gain:o=.2,at:r=0,attack:a=.005,bus:l,filter:c}){const h=this.ctx,f=h.currentTime+r,u=h.createOscillator();u.type=t,u.frequency.setValueAtTime(e,f),i!==e&&u.frequency.exponentialRampToValueAtTime(Math.max(20,i),f+n);const d=h.createGain();d.gain.setValueAtTime(1e-4,f),d.gain.exponentialRampToValueAtTime(o,f+a),d.gain.exponentialRampToValueAtTime(1e-4,f+n);let g=u;if(c){const x=h.createBiquadFilter();x.type="lowpass",x.frequency.value=c,u.connect(x),g=x}g.connect(d).connect(l??this.sfx),u.start(f),u.stop(f+n+.05)}hiss({type:t="lowpass",from:e=2e3,to:i=e,q:n=1,length:o=.3,gain:r=.3,at:a=0,attack:l=.004,bus:c}){const h=this.ctx,f=h.currentTime+a,u=h.createBufferSource();u.buffer=this.noise,u.loop=!0;const d=h.createBiquadFilter();d.type=t,d.Q.value=n,d.frequency.setValueAtTime(e,f),i!==e&&d.frequency.exponentialRampToValueAtTime(Math.max(30,i),f+o);const g=h.createGain();g.gain.setValueAtTime(1e-4,f),g.gain.exponentialRampToValueAtTime(r,f+l),g.gain.exponentialRampToValueAtTime(1e-4,f+o),u.connect(d).connect(g).connect(c??this.sfx),u.start(f,Math.random()*.5),u.stop(f+o+.05)}gate(t,e){const i=this.ctx.currentTime,n=this.voices.get(t)??-1;return i-n<e?!1:(this.voices.set(t,i),!0)}play(t,e={}){if(!this.ready||this.held)return;const i=k1[t];if(i)try{i.call(this,e)}catch{}}setMusic(t,e=!1){if(this.wanted=t,!this.ctx||t===this.theme&&!e)return;const i=this.ctx,n=i.currentTime;if(this.track){const l=this.track;l.gain.gain.setTargetAtTime(1e-4,n,.25),setTimeout(()=>l.gain.disconnect(),1500),l.drone&&l.drone.forEach(c=>c.stop(n+1.4))}if(this.theme=t,this.track=null,clearInterval(this.timer),!t)return;const o=A1[t],r=i.createGain();r.gain.setValueAtTime(1e-4,n),r.gain.setTargetAtTime(1,n+.05,.3),r.connect(this.music);const a={theme:o,gain:r,step:0,next:n+.08};o.drone&&(a.drone=this.startDrone(o,r)),this.track=a,this.timer=setInterval(()=>this.schedule(),T1)}startDrone(t,e){const i=this.ctx,n=Ee(t.chords[0][0]-12),o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=220;const r=i.createGain();return r.gain.value=.05,o.connect(r).connect(e),[0,7].map(l=>{const c=i.createOscillator();return c.type="sawtooth",c.frequency.value=n,c.detune.value=l,c.connect(o),c.start(),c})}schedule(){const t=this.track;if(!t||!this.ctx||this.ctx.state!=="running")return;const e=t.theme,i=60/e.bpm/4;for(;t.next<this.ctx.currentTime+E1;){const n=t.step%e.steps,o=Math.floor(t.step/e.steps)%e.chords.length,r=n%2?i*e.swing:0;this.playStep(e,o,n,t.next+r,i,t.gain),t.next+=i,t.step+=1}}playStep(t,e,i,n,o,r){const a=n-this.ctx.currentTime,l=t.chords[e],c=t.bass[i];if(c!=null&&this.tone({type:"triangle",from:Ee(l[0]-12+c),length:o*1.8,gain:.16,at:a,bus:r}),t.rhythm[i]){const h=t.contour[i],f=l[h%l.length]+12*Math.floor(h/l.length)+t.octave;this.tone({type:t.lead,from:Ee(f),length:o*1.5,gain:t.leadGain,at:a,bus:r,filter:2600})}t.kick[i]&&this.tone({type:"sine",from:140,to:45,length:.16,gain:.3,at:a,bus:r}),t.snare[i]&&this.hiss({type:"bandpass",from:1800,q:.8,length:.12,gain:.12,at:a,bus:r}),t.hat[i]&&this.hiss({type:"highpass",from:7e3,length:.035,gain:.05,at:a,bus:r})}}function C1(){try{return localStorage.getItem(d0)==="off"}catch{return!1}}const k1={hop(){if(!this.gate("hop",.05))return;const s=380+Math.random()*40;this.tone({type:"square",from:s,to:s*1.9,length:.07,gain:.07,filter:3e3})},bump(){this.tone({type:"square",from:140,to:90,length:.08,gain:.08,filter:900})},pickup(){this.tone({type:"square",from:Ee(84),length:.07,gain:.07,filter:4e3}),this.tone({type:"square",from:Ee(91),length:.14,gain:.07,at:.06,filter:4e3})},coin(){this.gate("coin",.04)&&(this.tone({type:"triangle",from:Ee(88),length:.05,gain:.12}),this.tone({type:"triangle",from:Ee(95),length:.12,gain:.12,at:.045}))},gem(){[84,88,91,96].forEach((s,t)=>this.tone({type:"triangle",from:Ee(s),length:.12,gain:.12,at:t*.05}))},item(){this.tone({type:"square",from:220,to:880,length:.22,gain:.07,filter:2500}),this.tone({type:"square",from:Ee(81),length:.12,gain:.06,at:.2,filter:3e3})},life(){[72,76,79,84].forEach((s,t)=>this.tone({type:"square",from:Ee(s),length:.14,gain:.07,at:t*.07,filter:3500}))},hurt(){this.tone({type:"square",from:Ee(67),length:.12,gain:.09,filter:2e3}),this.tone({type:"square",from:Ee(60),to:Ee(55),length:.25,gain:.09,at:.11,filter:2e3})},mega(){[60,64,67,72,76,79,84].forEach((s,t)=>this.tone({type:"square",from:Ee(s),length:.09,gain:.06,at:t*.045,filter:3e3}))},shrink(){[79,72,67,60].forEach((s,t)=>this.tone({type:"square",from:Ee(s),length:.09,gain:.06,at:t*.05,filter:3e3}))},whistle(){this.tone({type:"sine",from:2100,to:2300,length:.18,gain:.08}),this.tone({type:"sine",from:2100,to:2300,length:.3,gain:.08,at:.22})},shot(){this.gate("shot",.03)&&(this.hiss({type:"highpass",from:2500,length:.06,gain:.18}),this.tone({type:"square",from:900,to:200,length:.06,gain:.05}))},boom({size:s=1}={}){if(!this.gate("boom",.045))return;const t=Math.min(2,Math.max(.15,s)),e=Math.min(.55,.12+t*.22);this.hiss({from:1400+t*600,to:90,length:.25+t*.35,gain:e}),this.tone({type:"sine",from:120,to:32,length:.2+t*.3,gain:e*.9})},splash({big:s=!1}={}){this.gate("splash",.06)&&this.hiss({type:"bandpass",from:s?1600:2600,to:500,q:.7,length:s?.6:.3,gain:s?.3:.16})},splat(){this.hiss({from:900,to:120,length:.3,gain:.35}),this.tone({type:"square",from:200,to:50,length:.3,gain:.12,filter:800})},crash(){this.hiss({from:3e3,to:200,length:.45,gain:.35}),this.tone({type:"square",from:160,to:40,length:.4,gain:.12,filter:700})},gameover(){[67,63,60,55].forEach((s,t)=>this.tone({type:"triangle",from:Ee(s),length:t===3?.6:.2,gain:.14,at:.25+t*.2}))},caught(){this.tone({type:"sawtooth",from:1400,to:500,length:.35,gain:.07,filter:3e3})},banner({tone:s="warn"}={}){const t={calm:[72,76,79],warn:[69,72,76],boss:[52,55,58,52],win:[72,76,79,84]},e=t[s]??t.warn,i=s==="boss"?"sawtooth":"triangle";e.forEach((n,o)=>this.tone({type:i,from:Ee(n),length:.18,gain:s==="boss"?.08:.12,at:o*.09,filter:2400}))},fanfare(){const s=[[72,0],[76,.12],[79,.24],[84,.36],[79,.56],[84,.68]];for(const[t,e]of s)this.tone({type:"square",from:Ee(t),length:.22,gain:.07,at:e,filter:3500}),this.tone({type:"triangle",from:Ee(t-12),length:.22,gain:.1,at:e})},stage(){[67,72,76].forEach((s,t)=>this.tone({type:"triangle",from:Ee(s),length:.25,gain:.1,at:t*.1}))},bell(){if(this.gate("bell",.5))for(let s=0;s<4;s++)this.tone({type:"square",from:1320,length:.12,gain:.035,at:s*.28,filter:3e3}),this.tone({type:"sine",from:2640,length:.2,gain:.03,at:s*.28})},alarm(){this.gate("alarm",1.2)&&(this.tone({type:"square",from:880,length:.1,gain:.05,filter:2500}),this.tone({type:"square",from:660,length:.1,gain:.05,at:.13,filter:2500}))},swish(){this.gate("swish",.05)&&this.hiss({type:"bandpass",from:700,to:2400,q:1.2,length:.12,gain:.08})},jump(){this.tone({type:"square",from:260,to:620,length:.14,gain:.07,filter:2500})},land(){this.gate("land",.1)&&(this.tone({type:"square",from:120,to:70,length:.07,gain:.08,filter:600}),this.hiss({type:"highpass",from:5e3,length:.05,gain:.05}))},clack(){this.gate("clack",.05)&&(this.tone({type:"square",from:700,to:400,length:.03,gain:.05,filter:2e3}),this.tone({type:"square",from:500,to:300,length:.03,gain:.05,at:.05,filter:2e3}))},bats(){if(this.gate("bats",.4))for(let s=0;s<6;s++){const t=2400+Math.random()*1400;this.tone({type:"sine",from:t,to:t*1.3,length:.05,gain:.03,at:s*.06})}},crack(){this.hiss({type:"highpass",from:1500,length:.12,gain:.18})},hiss(){this.gate("vent",.3)&&this.hiss({type:"bandpass",from:1200,to:3e3,q:.6,length:.7,gain:.12,attack:.08})},roar({seconds:s=1}={}){if(!this.gate("roar",.5))return;const t=Math.min(1.8,.5+s*.6);this.tone({type:"sawtooth",from:95,to:55,length:t,gain:.16,attack:.08,filter:500}),this.tone({type:"sawtooth",from:101,to:58,length:t,gain:.12,attack:.1,filter:420}),this.hiss({from:700,to:200,length:t,gain:.14,attack:.1})},thunder(){this.hiss({from:500,to:60,length:1.6,gain:.3,attack:.02})},hit(){this.tone({type:"square",from:300,to:80,length:.18,gain:.12,filter:1500})},cannon(){this.tone({type:"sine",from:160,to:40,length:.25,gain:.3}),this.hiss({from:1200,to:150,length:.25,gain:.2})},throw(){this.hiss({type:"bandpass",from:500,to:1800,q:1,length:.3,gain:.08}),this.tone({type:"sine",from:3e3,to:3400,length:.3,gain:.015})},horn(){this.tone({type:"sawtooth",from:147,length:.7,gain:.08,attack:.05,filter:700}),this.tone({type:"sawtooth",from:220,length:.7,gain:.06,attack:.05,filter:700})},whoosh({up:s=!1}={}){this.hiss({type:"bandpass",from:s?300:2500,to:s?2500:250,q:.9,length:.5,gain:.18,attack:.05})},showcase(){[79,84,88].forEach((s,t)=>this.tone({type:"triangle",from:Ee(s),length:.3,gain:.08,at:t*.12}))},beep({go:s=!1}={}){this.tone({type:"square",from:s?1320:660,length:s?.25:.12,gain:.08,filter:3e3})},click(){this.tone({type:"square",from:1e3,length:.03,gain:.04,filter:3e3})}},P1=26,z1=500;class L1{constructor(t,e,i=()=>{}){this.target=t,this.onMove=e,this.onFire=i,this.enabled=!1,this.start=null,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.blockGesture=this.blockGesture.bind(this),t.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),t.addEventListener("pointerup",this.onPointerUp,{passive:!0}),t.addEventListener("pointercancel",()=>this.start=null,{passive:!0}),window.addEventListener("keydown",this.onKeyDown),document.addEventListener("touchmove",this.blockGesture,{passive:!1}),document.addEventListener("gesturestart",this.blockGesture,{passive:!1}),document.addEventListener("dblclick",this.blockGesture,{passive:!1})}blockGesture(t){t.cancelable&&t.preventDefault()}setEnabled(t){this.enabled=t,this.start=null}onPointerDown(t){this.enabled&&(this.start={x:t.clientX,y:t.clientY,time:performance.now()})}onPointerUp(t){if(!this.enabled||!this.start)return;const e=t.clientX-this.start.x,i=t.clientY-this.start.y,n=performance.now()-this.start.time;if(this.start=null,Math.hypot(e,i)<P1){n<=z1&&this.onMove("forward");return}Math.abs(e)>Math.abs(i)?this.onMove(e>0?"left":"right"):this.onMove(i>0?"back":"forward")}onKeyDown(t){if(!this.enabled)return;const e=t.key.toLowerCase();let i=null;if(e==="arrowup"||e==="w")i="forward";else if(e==="arrowdown"||e==="s")i="back";else if(e==="arrowleft"||e==="a")i="right";else if(e==="arrowright"||e==="d")i="left";else if(e===" ")i="forward";else if(e==="f"||e==="enter"){t.preventDefault(),this.onFire(0);return}else if(e==="1"||e==="2"||e==="3"){t.preventDefault(),this.onFire(Number(e)-1);return}i&&(t.preventDefault(),this.onMove(i))}dispose(){this.target.removeEventListener("pointerdown",this.onPointerDown),this.target.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("touchmove",this.blockGesture),document.removeEventListener("gesturestart",this.blockGesture),document.removeEventListener("dblclick",this.blockGesture)}}const kn=Math.PI/180,D1=new Pe(di.tracer.width,di.tracer.width,di.tracer.length),I1=new Yt({color:di.tracer.color}),U1={forward:0,right:Math.PI/2,back:Math.PI,left:-Math.PI/2},Mh="andy.runs",p0="andy.showcased";function N1(){try{const s=Number(localStorage.getItem(Mh))||0;return localStorage.setItem(Mh,String(s+1)),s}catch{return 0}}function F1(){try{return new Set(JSON.parse(localStorage.getItem(p0)??"[]"))}catch{return new Set}}function O1(s){try{localStorage.setItem(p0,JSON.stringify([...s]))}catch{}}class B1{constructor(t,e={},i={}){this.canvas=t,this.hooks=e,this.state="idle",this.openWorld=!!i.openWorld,this.renderer=new Hg({canvas:t,antialias:window.devicePixelRatio<2,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene=new Gg,this.skyColor=new Ht(10475759),this.fogColor=new Ht(13166836),this.scene.background=this.skyColor,this.scene.fog=new _l(this.fogColor,It.distance+It.fogNear,It.distance+It.fogFar),this.scene.fog.color=this.fogColor,this.view=new Ue,this.view.scale.x=-1,this.scene.add(this.view),this.camera=new Yh(-1,1,1,-1,1,It.distance*2+40),this.cameraOffset=new P(-Math.sin(It.yawDeg*kn)*Math.cos(It.pitchDeg*kn),Math.sin(It.pitchDeg*kn),Math.cos(It.yawDeg*kn)*Math.cos(It.pitchDeg*kn)).multiplyScalar(It.distance),this.cameraTarget=new P,this.lookAheadSkew=-Math.tan(It.yawDeg*kn),this.world=new Kx(this.view),this.world.openWorld=this.openWorld,this.player=new y1(this.view),this.chaser=new xh(this.view),this.effects=new w1(this.view),this.sound=new R1,this.effects.sound=this.sound,this.world.onSound=(r,a)=>{this.state==="playing"&&this.sound.play(r,a)},this.paused=!1,this.resumeIn=0;const n=(r,a)=>{this.hooks.onBanner?.(r,a),r&&this.sound.play("banner",{tone:a})},o=(r,a)=>this.sound.play(r,a);this.voyage=new o1(this.view,this.effects,{onBanner:n,onSound:o,onKill:r=>this.kill(r),onShake:r=>this.addShake(r),onScore:r=>this.awardBonus(r,"KRAKEN"),onPickup:r=>this.announce(r),onHeart:()=>this.gainLife(),onAshore:r=>this.comeAshore(r),landing:r=>this.findLanding(r),onItems:()=>this.emitItems(),onVoyage:r=>this.hooks.onVoyage?.(r),onBoss:(r,a)=>this.hooks.onBoss?.(r,a),onReload:r=>this.hooks.onReload?.(r),onHint:r=>this.hooks.onHint?.(r)}),this.mine=new h1(this.view,this.effects,{onBanner:n,onSound:o,onKill:r=>this.kill(r),onShake:r=>this.addShake(r),onScore:r=>this.awardBonus(r,"DEEPWORM"),onGold:(r,a)=>this.takeGold(r,a),onPickup:r=>this.announce(r),onHeart:()=>this.gainLife(),onSurface:()=>this.leaveMine(),onItems:()=>this.emitItems(),onVoyage:(r,a)=>this.hooks.onVoyage?.(r,a),onBoss:(r,a)=>this.hooks.onBoss?.(r,a),onReload:r=>this.hooks.onReload?.(r),onHint:r=>this.hooks.onHint?.(r)}),this.input=new L1(t,r=>this.handleMove(r),r=>this.useItem(r)),this.projection=new P,this.viewScale=1,this.clock=0,this.lastFrame=0,this.frame=this.frame.bind(this),this.resize(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),120)),this.resetRunState(),this.showIdleScene(),this.effects.warmUp(this.renderer,this.camera),this.world.warmUp(),requestAnimationFrame(this.frame)}resetRunState(){this.score=0,this.bonus=0,this.seed=Lx(),this.deathRow=-16,this.cameraRow=0,this.cameraX=0,this.viewRow=0,this.slideDir=null,this.frozenAnnounced=!1,this.cameraAhead=It.rowAhead,this.voyage?.finish(this.player),this.mine?.finish(this.player),this.transition=null,this.hooks.onFade?.(null),this.endShowcase?.(),this.hooks.onCave?.(!1),this.mineHinted=!1,this.world&&(this.world.group.visible=!0),this.scene.fog.near=It.distance+It.fogNear,this.scene.fog.far=It.distance+It.fogFar,this.idleTime=0,this.shake=0,this.queued=null,this.hasMoved=!1,this.carried=[],this.gunCooldown=0,this.bullets=[],this.lives=0,this.graceLeft=0,this.perkLeft={bible:0,mushroom:0,stopsign:0},this.perkShown="",this.stageIndex=-1,this.deathDelay=0,this.clock=0}start(){this.paused=!1,this.resumeIn=0,this.hooks.onPause?.(null),this.sound.hold(!1),this.clearBullets(),this.player.setMega(!1),this.resetRunState(),this.world.reset(this.seed),this.player.reset(),this.chaser.reset(),this.effects.clear();const{stage:t}=Fi(0);this.skyColor.set(t.palette.sky),this.fogColor.set(t.palette.fog),this.cameraRow=0,this.cameraX=0,this.updateCamera(1),this.state="playing",this.input.setEnabled(!0),this.updateStage(),this.hooks.onScore?.(0),this.emitItems(),this.hooks.onLives?.(0),this.hooks.onPerk?.(null),this.hooks.onCoach?.(!0),this.beginShowcase(N1())}beginShowcase(t){const e=F1();let i=null;if(t>=Oo.boat.after&&!e.has("boat")?i="boat":t>=Oo.tunnel.after&&!e.has("tunnel")&&(i="tunnel"),!i)return;const n=i==="boat"?this.world.nearestMooring(0):this.world.nearestTunnel(0);n&&(e.add(i),O1(e),this.showcaseMarker??(this.showcaseMarker=l0([{size:[.16,.5,.16],pos:[0,.55,0],color:16765514,flat:!0},{size:[.56,.12,.2],pos:[0,.26,0],color:16765514,flat:!0},{size:[.36,.12,.2],pos:[0,.14,0],color:16761375,flat:!0},{size:[.16,.12,.2],pos:[0,.02,0],color:15247649,flat:!0}])),this.showcaseMarker.scale.setScalar(1.6),this.view.add(this.showcaseMarker),this.showcase={kind:i,spot:n,t:0,said:!1,row:this.cameraRow,x:this.cameraX},this.hooks.onCoach?.(!1))}updateShowcase(t){const e=this.showcase;e.t+=t;const{pan:i,hold:n,back:o}=Oo,r=h=>h*h*(3-2*h),a=e.t<i?r(e.t/i):e.t<i+n?1:1-r(Math.min(1,(e.t-i-n)/o)),l=e.spot.row-this.cameraAhead,c=e.spot.x-this.lookAheadSkew*this.cameraAhead;e.row=pi.lerp(this.player.maxRow,l,a),e.x=pi.lerp(this.player.x,c,a),this.showcaseMarker.position.set(e.spot.x,1.3+Math.abs(Math.sin(this.clock*4))*.4,-e.spot.row*Wt.tile),this.showcaseMarker.visible=a>.5,!e.said&&e.t>=i*.8&&(e.said=!0,this.hooks.onHint?.(Oo[e.kind].text),this.sound.play("showcase")),e.t>=i+n+o&&this.endShowcase()}endShowcase(){this.showcase&&(this.showcase=null,this.showcaseMarker?.parent?.remove(this.showcaseMarker),this.hooks.onHint?.(null),this.state==="playing"&&!this.hasMoved&&this.hooks.onCoach?.(!0))}stop(){this.state="idle",this.input.setEnabled(!1)}showIdleScene(){this.world.reset(this.seed),this.player.reset(),this.chaser.reset();const{stage:t}=Fi(0);this.skyColor.set(t.palette.sky),this.fogColor.set(t.palette.fog),this.currentStage=t,this.cameraRow=0,this.cameraX=0,this.updateCamera(1)}handleMove(t){if(!(this.state!=="playing"||this.player.dead||this.transition||this.showcase||this.paused)&&!(this.slideDir||this.player.hop?.slide)){if(this.mine.active){this.mine.steer(t);return}if(this.voyage.active){this.voyage.steer(t);return}if(this.player.busy){this.queued=t;return}this.applyMove(t)}}applyMove(t){const e=this.progressScore(),i=this.player.move(t,this.world);this.sound.play(i?"hop":"bump"),i&&(this.player.mega&&this.addShake(gs.shake),this.hasMoved||this.hooks.onCoach?.(!1),this.hasMoved=!0,this.idleTime=0),this.progressScore()>e&&this.setScore(this.progressScore())}progressScore(){const t=this.openWorld?-this.player.minRow:0;return(this.player.maxRow+t)*Nx.perRow+this.bonus}ensureWorld(t,e=this.player.row){this.world.ensureAhead(this.openWorld?e:t)}emitItems(){if(this.mine?.active){this.hooks.onItems?.(this.mine.items());return}if(this.voyage?.active){this.hooks.onItems?.(this.voyage.items());return}this.hooks.onItems?.(this.carried.map(t=>({id:t.id,label:t.label,shots:t.shots})))}addItem(t){const e=Fn.types[t];e&&(this.carried.length>=Fx.slots&&this.carried.shift(),this.carried.push({id:t,label:e.label,shots:e.kind==="gun"?e.shots:0}),this.emitItems())}useItem(t=0){if(this.state!=="playing"||this.player.dead||this.paused)return;if(this.voyage.active){this.voyage.fire();return}if(this.mine.active){this.mine.fire();return}if(this.transition||this.showcase)return;const e=this.carried[t];if(!e)return;const i=Fn.types[e.id];if(i){if(i.kind==="gun"){this.fireGun(i,e,t);return}i.kind==="freeze"?this.deployStopSign(i):this.fireBlast(i),this.carried.splice(t,1),this.emitItems()}}deployStopSign(t){this.world.freeze(this.player.row,t.rows,t.seconds).length&&(this.perkLeft.stopsign=Math.max(this.perkLeft.stopsign,t.seconds),this.perkShown="",this.addShake(.25),this.sound.play("whistle"))}fireGun(t,e,i){if(e.shots<=0||this.gunCooldown>0)return;e.shots-=1,this.gunCooldown=di.cooldown;const o=(U1[this.player.facing]??0)+(Math.random()*2-1)*di.spreadDeg*kn,r=Math.sin(o),a=-Math.cos(o),l=this.bulletPool?.pop()??new lt(D1,I1);l.rotation.set(0,-o,0),l.visible=!0,this.view.add(l);const c=this.player.group.position;this.bullets.push({mesh:l,x:c.x+r*.45,y:this.player.baseY+di.tracer.height,z:c.z+a*.45,dx:r,dz:a,travelled:0}),e.shots<=0&&this.carried.splice(i,1),this.emitItems(),this.addShake(.1),this.sound.play("shot")}fireBlast(t){const e=this.world.detonate(this.player.row+1,t.rows,t.razeSeconds);if(!e.length)return;const i=t.rows>12?1.5:t.rows>4?1.25:1,n=Math.min(e.length,8);for(let o=0;o<n;o++){const r=e[Math.floor(o/n*e.length)];this.effects.explosion(this.player.x+(Math.random()-.5)*3.5,0,-r*Wt.tile,i,o*.06)}this.addShake(.5+i*.22)}updateBullets(t){if(this.gunCooldown>0&&(this.gunCooldown-=t),!!this.bullets.length)for(let e=this.bullets.length-1;e>=0;e--){const i=this.bullets[e],n=di.speed*t;i.x+=i.dx*n,i.z+=i.dz*n,i.travelled+=n,i.mesh.position.set(i.x,i.y,i.z);let o=i.travelled>=di.range;if(!o){const r=Math.round(-i.z/Wt.tile),a=this.world.bulletTarget(r,i.x,di.hitRadius,i.z);a&&(this.resolveHit(a,i),o=!0)}o&&(this.retireBullet(i),this.bullets.splice(e,1))}}resolveHit(t,e){if(t.roamer){const o=this.world.clearRoamers(t.roamer.x,t.roamer.z,.1);for(const r of o)this.effects.explosion(r.x,.35,r.z,r.kind==="vehicle"?.7:.5);this.addShake(.12);return}if(t.vehicle){const o=t.vehicle;o.damage=(o.damage??0)+1;const r=Cx.has(o.model)?di.hits.person:di.hits.vehicle;o.damage>=r?(this.effects.explosion(o.x,.35,t.lane.z,.5),this.world.killVehicle(t.lane,o)):this.effects.explosion(e.x,.35,e.z,.18);return}this.world.damageProp(t.lane,t.col,1)?.destroyed?this.effects.explosion(t.col,.35,t.lane.z,.55):this.effects.explosion(e.x,.35,e.z,.18)}retireBullet(t){this.view.remove(t.mesh),t.mesh.visible=!1,this.bulletPool??(this.bulletPool=[]),this.bulletPool.length<24&&this.bulletPool.push(t.mesh)}clearBullets(){for(const t of this.bullets??[])this.retireBullet(t);this.bullets&&(this.bullets.length=0)}addShake(t){this.shake=Math.min(1.4,this.shake+t)}setScore(t){t!==this.score&&(this.score=t,this.hooks.onScore?.(t))}frame(t){requestAnimationFrame(this.frame);const e=t/1e3,i=Math.min(.05,this.lastFrame?e-this.lastFrame:.016);this.lastFrame=e,this.paused?this.updatePause(i):this.state==="playing"||this.state==="dying"?this.update(i):this.idleUpdate(i),this.updateMusic(),this.renderer.render(this.scene,this.camera)}pause(){this.state!=="playing"||this.paused||(this.paused=!0,this.resumeIn=0,this.queued=null,this.input.setEnabled(!1),this.hooks.onPause?.("paused"),this.sound.hold(!0))}resume(){!this.paused||this.resumeIn>0||(this.resumeIn=Ux.countdown,this.sound.hold(!1),this.sound.play("beep"),this.hooks.onPause?.("count",Math.ceil(this.resumeIn)))}togglePause(){this.paused?this.resume():this.pause()}updatePause(t){if(this.resumeIn<=0)return;const e=Math.ceil(this.resumeIn);if(this.resumeIn-=t,this.resumeIn<=0){this.paused=!1,this.resumeIn=0,this.input.setEnabled(!0),this.hooks.onPause?.(null),this.sound.play("beep",{go:!0});return}const i=Math.ceil(this.resumeIn);i!==e&&(this.hooks.onPause?.("count",i),this.sound.play("beep"))}updateMusic(){let t=null;if(this.state==="playing")if(this.mine.active){const e=this.mine.phase;t=e==="rumble"||e==="boss"?"boss":e==="wrecked"?null:"mine"}else if(this.voyage.active){const e=this.voyage.phase;t=e==="boss"||e==="stop"?"boss":e==="wrecked"?null:"sea"}else t="land";t!==this.sound.wanted&&this.sound.setMusic(t)}idleUpdate(t){this.clock+=t,this.world.update(t,this.clock),this.effects.update(t),this.updateCamera(t),this.updateSky(t)}update(t){this.clock+=t;const e=this.player;if(this.transition&&this.updateTransition(t),this.showcase&&this.updateShowcase(t),this.mine.active){this.effects.update(t),this.updatePerks(t),this.mine.update(t,e),this.updateCamera(t),this.updateSky(t),this.state==="dying"&&(this.deathDelay-=t,this.deathDelay<=0&&this.finishRun());return}if(this.transition?.kind==="in"){this.world.update(t,this.clock),this.effects.update(t),this.updateCamera(t),this.updateSky(t);return}if(this.voyage.active){this.world.update(t,this.clock),this.effects.update(t),this.updatePerks(t),this.voyage.update(t,e),e.dead&&e.updateDeath(t),this.updateCamera(t),this.updateSky(t),this.state==="dying"&&(this.deathDelay-=t,this.deathDelay<=0&&this.finishRun());return}if(e.waterWalk=this.perkLeft.bible>0,this.world.focusRow=e.row,this.world.update(t,this.clock),e.update(t,this.world),this.effects.update(t),this.updateBullets(t),this.updatePerks(t),this.state==="playing"){if(this.idleTime+=t,this.openWorld||this.updateDeathLine(t),this.checkCollisions(),e.justLanded=!1,this.checkCollectibles(),this.hintTunnel(),this.state==="playing"&&!e.busy&&this.slideDir&&this.continueSlide(),this.state==="playing"&&!e.busy&&this.queued){const i=this.queued;this.queued=null,this.applyMove(i)}this.updateStage()}if(!this.openWorld){const i=xh.proximity(e.row,this.deathRow);if(this.chaser.update(t,this.deathRow,e.group.position.x,i),this.state==="playing"){const n=i>.35;this.hooks.onWarning?.(n?this.currentStage?.chaser.label??"Look out!":null),n&&!this.warned&&this.sound.play("alarm"),this.warned=n}}this.openWorld?(this.world.ensureAhead(e.row),this.world.recycleAround(e.row)):(this.world.ensureAhead(e.maxRow),this.world.recycleBehind(e.row)),this.updateCamera(t),this.updateSky(t),this.state==="dying"&&(this.deathDelay-=t,this.deathDelay<=0&&this.finishRun())}updatePerks(t){if(this.graceLeft>0){this.graceLeft=Math.max(0,this.graceLeft-t);const n=this.player.mega||this.graceLeft<=0?!0:Math.floor(this.graceLeft*10)%2===0;this.player.dead||(this.player.group.visible=n)}const e=[];for(const n of Object.keys(this.perkLeft)){if(this.perkLeft[n]<=0)continue;this.perkLeft[n]=Math.max(0,this.perkLeft[n]-t),n==="mushroom"&&this.perkLeft[n]<=0&&this.endMega();const o=Xe.types[n]??Fn.types[n];this.perkLeft[n]>0&&o&&e.push({id:n,label:o.label,seconds:Math.ceil(this.perkLeft[n])})}const i=e.map(n=>`${n.id}:${n.seconds}`).join("|");i!==this.perkShown&&(this.perkShown=i,this.hooks.onPerk?.(e))}endMega(){this.player.setMega(!1),this.sound.play("shrink"),this.addShake(.4)}headingOut(){const t=this.player;if(!t.ridingFloat||t.x>mt.commitFrom)return!1;const e=this.world.laneAt(t.row);return!!(e&&e.kind==="water"&&e.dir<0)}continueSlide(){const t=this.slideDir;this.slideDir=null,this.queued=null;const e=this.progressScore();this.player.move(t,this.world,{slide:!0})?(this.sound.play("swish"),this.progressScore()>e&&this.setScore(this.progressScore())):this.sound.play("bump")}updateDeathLine(t){if(!this.hasMoved)return;if(this.headingOut()){this.idleTime=0;return}const e=this.player,i=Math.max(0,e.maxRow);let n=$e(Xt.drift,i);this.idleTime>Xt.drift.idleWarnAfter&&(n*=Xt.drift.idleMultiplier),this.deathRow+=n*t;const o=e.maxRow-Xt.drift.behindLimit;this.deathRow<o&&(this.deathRow+=(o-this.deathRow)*Xt.drift.pull*t),e.row<=this.deathRow&&this.kill("chaser")}checkCollisions(){const t=this.player,e=this.world.laneAt(t.row);if(!e)return;if(!t.busy||t.justLanded){const n=this.world.tunnelAt(t.row,Math.round(t.x));if(n){this.enterMine(n);return}}if((!t.busy||t.justLanded)&&this.world.onMooring(e,t.x)){this.boardMooring(e);return}if(t.mega){this.crushUnderfoot(e);return}if(e.kind==="water"&&t.ridingFloat&&t.x<-19-.5){this.putToSea(e);return}const i=e.kind==="water"?-19:this.world.shoreCol(t.row);if(t.x<i-.5&&(!t.busy||t.justLanded)){t.waterWalk||this.kill("water");return}if(e.kind==="ice"&&(!t.busy||t.justLanded)){if(!t.waterWalk&&this.world.holeAt(t.row,Math.round(t.x))){this.kill("ice");return}t.justLanded&&(this.slideDir=t.facing);return}if(!t.ridingFloat&&this.world.roamerAt(t.x,t.group.position.z,Ri.hitHalfWidth)){this.kill("vehicle");return}if(gr.includes(e.kind)){this.world.vehicleAt(e,t.x,Ri.hitHalfWidth)&&this.kill("vehicle");return}if(e.kind==="water"&&(!t.busy||t.justLanded)){if(t.waterWalk)return;if(!t.ridingFloat){this.kill("water");return}(t.x>Wt.columnLimit+1.2||t.x<-19-1.2)&&this.kill("water")}}putToSea(t){const e=this.player.ridingFloat;e&&(this.world.detachFloat(t,e),this.setSail(e,t.palette))}boardMooring(t){const e=this.world.castOff(t);e&&(this.queued=null,this.player.ridingFloat=e,this.effects.splash(e.x,-.14,t.z,16777215),this.setSail(e,t.palette,{moored:!0}))}setSail(t,e,i){this.voyage.begin(this.player,t,e,i),this.sound.play("horn"),this.hooks.onCoach?.(!1),this.chaser.hide?.(),this.hooks.onWarning?.(null)}findLanding(t){this.ensureWorld(Math.max(this.player.maxRow,t),t);let e=null;for(const o of mt.home.rowsUp){const r=this.world.laneAt(t+o);if(r?.kind==="grass"&&!r.mooring){e=t+o;break}}e==null&&(e=this.world.safeSpotNear(t+4,0,8).row),this.world.clearBeach(e,mt.home.clearRows);const i=this.world.shoreCol(e),n=this.voyage.vessel?.halfLen??1;return{row:e,col:i,x:i-.5-n}}comeAshore(t){const e=this.player;this.voyage.finish(e),this.emitItems(),this.chaser.show?.(),this.ensureWorld(e.maxRow);const i=t&&!this.world.isBlocked(t.row,t.col)?{row:t.row,col:t.col}:this.world.safeSpotNear(e.row,-17,8);this.effects.splash(e.x,-.14,e.group.position.z,16777215),e.respawn(i.row,i.col,this.world),this.graceLeft=Math.max(this.graceLeft,Xe.reviveGrace),this.idleTime=0}hintTunnel(){const t=this.player;if(this.mineHinted||t.busy||this.state!=="playing")return;const e=Math.round(t.x),i=e>=Wt.columnLimit-2,n=e<=-10;if(!i&&!n)return;let o=!1;for(let r=t.row-1;r<=t.row+1&&!o;r++)i?o=!!this.world.tunnelAt(r,Wt.columnLimit+1):o=!!this.world.tunnelAt(r,-13);o&&(this.mineHinted=!0,this.hooks.onHint?.(i?"← Hop into a tunnel for a new adventure":"Hop into a tunnel for a new adventure →"))}enterMine(t){const e=this.player;this.queued=null,this.hooks.onCoach?.(!1),this.hooks.onWarning?.(null),this.startTransition("in","black",()=>this.beginMine()),this.sound.play("whoosh"),this.transition.tunnel=t,this.transition.from={x:e.group.position.x,y:e.group.position.y}}beginMine(){const t=this.player;this.world.group.visible=!1,this.chaser.hide?.(),this.clearBullets(),t.group.visible=!0,t.group.scale.set(1,1,1),this.mine.begin(t,{entryRow:t.row}),this.hooks.onCave?.(!0),this.mineHinted=!0,this.emitItems(),this.cameraRow=this.mine.cameraRow,this.cameraX=this.mine.cameraX,this.cameraAhead=this.mine.rowAhead,this.viewScale=this.mine.viewScale,this.applyView(),this.skyColor.set(this.mine.skyColor),this.fogColor.set(this.mine.skyColor),this.scene.fog.near=It.distance+Q.fog.near,this.scene.fog.far=It.distance+Q.fog.far}leaveMine(){this.startTransition("out","white",()=>this.surfaceFromMine()),this.sound.play("whoosh",{up:!0})}surfaceFromMine(){const t=this.player,e=this.mine.entryRow??t.row;this.mine.finish(t),this.hooks.onCave?.(!1),this.world.group.visible=!0,this.chaser.show?.(),this.ensureWorld(Math.max(t.maxRow,e+12),e+12);let i=null;for(const o of Q.exit.rowsUp){const r=e+o;if(this.world.laneAt(r)?.kind==="grass"){for(let l=Wt.columnLimit;l>Wt.columnLimit-4;l--)if(!this.world.isBlocked(r,l)){i={row:r,col:l};break}if(i)break}}i??(i=this.world.safeSpotNear(e+4,Wt.columnLimit-1,8)),t.respawn(i.row,i.col,this.world),i.row>t.maxRow&&(t.maxRow=i.row,this.setScore(this.progressScore())),this.deathRow=Math.min(this.deathRow,i.row-Xt.drift.behindLimit),this.effects.explosion(Wt.columnLimit+.6,.6,-i.row*Wt.tile,.9),this.addShake(.5),this.graceLeft=Math.max(this.graceLeft,Xe.reviveGrace),this.idleTime=0,this.emitItems(),this.updateStage(),this.cameraRow=this.openWorld?t.row:t.maxRow,this.viewRow=t.row,this.cameraX=t.x,this.cameraAhead=It.rowAhead,this.viewScale=1,this.applyView();const{stage:n}=Fi(t.maxRow);this.skyColor.set(n.palette.sky),this.fogColor.set(n.palette.fog),this.scene.fog.near=It.distance+It.fogNear,this.scene.fog.far=It.distance+It.fogFar}takeGold(t,e){this.bonus+=t,this.setScore(this.progressScore()),e&&this.announce(`GEM +${t}`),this.sound.play(e?"gem":"coin")}startTransition(t,e,i){this.hooks.onFade?.(e),this.transition={kind:t,t:0,then:i,done:!1}}updateTransition(t){const e=this.transition;if(e.t+=t,e.kind==="in"&&e.tunnel){const i=this.player,n=e.tunnel.side==="range"?1:-1,o=Math.min(1,e.t/.4);i.group.position.x=e.from.x+n*o*1.4,i.group.position.y=e.from.y-(e.tunnel.side==="beach"?o*.9:0)+Math.abs(Math.sin(o*Math.PI*3))*.12,i.group.rotation.y=n>0?-Math.PI/2:Math.PI/2,i.syncShadow()}!e.done&&e.t>=.42&&(e.done=!0,e.then(),this.hooks.onFade?.(null)),e.done&&e.t>=.5&&(this.transition=null)}awardBonus(t,e){this.bonus+=t,this.setScore(this.progressScore()),this.announce(`${e} +${t}`),this.sound.play("fanfare")}announce(t){const e=this.toScreen(this.player.group.position);this.hooks.onPopup?.(t,e.x,e.y)}crushUnderfoot(t){const e=this.player,i=this.world.shatter(t,e.x,gs.reach);for(const n of this.world.clearRoamers(e.x,e.group.position.z,gs.reach))this.effects.explosion(n.x,.35,n.z,n.kind==="vehicle"?.75:.6);for(const n of i)this.effects.explosion(n.x,.35,t.z,n.kind==="vehicle"?.75:.6);i.length&&this.addShake(.3)}checkCollectibles(){const t=this.player,e=this.world.laneAt(t.row),i=e?.collectible;if(!i||i.taken||Math.abs(t.x-i.col)>.55)return;i.taken=!0,this.bonus+=i.points,this.setScore(this.progressScore()),this.effects.pop(i.mesh),i.weapon&&this.addItem(i.weapon),i.perk&&this.takePerk(i.perk),i.weapon?this.sound.play("item"):i.perk||this.sound.play("pickup"),i.voyage&&(this.queued="left");const n=new P(i.col,1.1,e.z),o=this.toScreen(n),r=i.weapon||i.perk?i.label.toUpperCase():`+${i.points}`;this.hooks.onPopup?.(r,o.x,o.y)}takePerk(t){const e=Xe.types[t];if(e){if(e.kind==="life"){this.lives=Math.min(Xe.maxLives,this.lives+1),this.hooks.onLives?.(this.lives),this.sound.play("life");return}if(this.sound.play(e.kind==="mega"?"mega":"item"),e.kind==="mega"){this.player.setMega(!0),this.addShake(gs.shake);const i=this.world.laneAt(this.player.row);i&&this.crushUnderfoot(i)}this.perkLeft[t]=Math.max(this.perkLeft[t]??0,e.seconds),this.perkShown=""}}gainLife(){const t=Xe.types.heart;if(this.lives>=Xe.maxLives){this.bonus+=t.points,this.setScore(this.progressScore()),this.announce(`+${t.points}`),this.sound.play("pickup");return}this.lives+=1,this.hooks.onLives?.(this.lives),this.announce("EXTRA LIFE"),this.sound.play("life")}spendLife(){const t=this.player;this.sound.play("hurt"),this.lives-=1,this.hooks.onLives?.(this.lives);const e=t.group.position;this.effects.explosion(e.x,.35,e.z,.7),this.addShake(.45);const i=this.toScreen(new P(e.x,1.3,e.z));this.hooks.onPopup?.("-1 LIFE",i.x,i.y);const n=this.world.safeSpotNear(t.row,Math.round(t.x),Xe.reviveSearchRows);t.respawn(n.row,n.col,this.world);const o=Math.min(Xt.drift.behindLimit,Xe.reviveSearchRows);this.deathRow=Math.min(this.deathRow,n.row-o),this.graceLeft=Xe.reviveGrace,this.idleTime=0}spendLifeInMine(){this.sound.play("hurt"),this.lives-=1,this.hooks.onLives?.(this.lives),this.mine.survive(),this.addShake(.5),this.announce("-1 LIFE"),this.graceLeft=Xe.reviveGrace}spendLifeAtSea(){this.sound.play("hurt"),this.lives-=1,this.hooks.onLives?.(this.lives),this.voyage.survive(),this.addShake(.5),this.announce("-1 LIFE"),this.graceLeft=Xe.reviveGrace}kill(t){if(this.state!=="playing")return;if(this.player.mega||this.graceLeft>0){this.mine.active&&this.mine.shrugOff();return}if(this.lives>0){this.mine.active?this.spendLifeInMine():this.voyage.active?this.spendLifeAtSea():this.spendLife();return}const e=this.player;e.kill(t),this.state="dying",this.hooks.onCoach?.(!1),this.input.setEnabled(!1),this.hooks.onWarning?.(null),this.hooks.onPerk?.(null),this.carried=[],this.emitItems(),this.clearBullets();const i=e.group.position,n=this.world.laneAt(e.row),o=this.voyage.active,r=this.mine.active,a=o?-.14:r?i.y:n?n.surfaceY:0;this.effects.confetti(i.x,a,i.z),this.sound.play(r||o?"crash":t==="ice"?"crack":t==="water"||t==="vehicle"?"splat":"caught"),this.sound.setMusic(null),this.sound.play("gameover"),r?(this.mine.wreck(e,t),this.deathDelay=hs.seaDelay):o?(this.voyage.wreck(e,t),this.deathDelay=hs.seaDelay):t==="water"||t==="ice"?(this.effects.splash(i.x,a,i.z,n?.palette.water??14676218),this.deathDelay=hs.waterDelay):t==="vehicle"?(this.effects.splat(i.x,a,i.z,e.character.splatColors),this.deathDelay=hs.vehicleDelay):(this.chaser.swoop(i.x,i.z),this.deathDelay=hs.chaserDelay)}finishRun(){this.state="over",this.hooks.onGameOver?.({score:this.score,rows:this.player.maxRow,bonus:this.bonus,cause:this.player.deathCause,headline:hs.headlines[this.player.deathCause]??"Game Over",seed:this.seed})}updateStage(){if(this.openWorld&&this.player.row<ue.turnRow){this.currentStage=rr,this.announceFrozen();return}const{index:t,stage:e}=Fi(this.openWorld?Math.max(0,this.player.row):this.player.maxRow);this.currentStage=e,t!==this.stageIndex&&(this.stageIndex>=0&&t>this.stageIndex&&this.state==="playing"&&this.sound.play("stage"),this.stageIndex=t,this.chaser.setModel(e.chaser.model))}announceFrozen(){this.frozenAnnounced||this.state!=="playing"||(this.frozenAnnounced=!0,this.hooks.onBanner?.(ue.name,"calm"),this.sound.play("banner",{tone:"calm"}),this.hooks.onHint?.("Ice is slippery. Mind the holes!"))}followRow(t){const e=this.player.row,i=It.openWorldSlack;return t?e<this.viewRow?this.viewRow=e:e>this.viewRow+i&&(this.viewRow=e-i):e>this.viewRow?this.viewRow=e:e<this.viewRow-i&&(this.viewRow=e+i),this.viewRow}updateCamera(t){const e=Math.min(1,t*It.followLerp),i=this.mine.active,n=this.openWorld&&!i&&!this.voyage.active&&this.player.row<ue.turnRow,o=this.voyage.active?0:i?this.mine.rowAhead:n?-4.4*It.southLook:It.rowAhead;this.cameraAhead+=(o-this.cameraAhead)*Math.min(1,t*It.recentreLerp);const r=this.voyage.active?this.voyage.viewScale:i?this.mine.viewScale:1;Math.abs(r-this.viewScale)>.001&&(this.viewScale+=(r-this.viewScale)*Math.min(1,t*It.recentreLerp),this.applyView());const a=this.voyage.active,l=a?this.voyage.cameraRow:i?this.mine.cameraRow:this.openWorld?this.followRow(n):this.player.maxRow;this.cameraRow=i?l:this.cameraRow+(l-this.cameraRow)*e;const c=a?this.voyage.lead:0,h=a&&this.voyage.cameraLocked||i?1:Math.min(1,t*(a?10:It.followLerpX)),f=i?this.mine.cameraX:this.player.x-c;if(this.cameraX+=(f-this.cameraX)*h,this.showcase&&(this.cameraRow=this.showcase.row,this.cameraX=this.showcase.x),this.cameraTarget.set(-(this.cameraX+this.lookAheadSkew*this.cameraAhead*Wt.tile),.4,-(this.cameraRow+this.cameraAhead)*Wt.tile),this.shake>0){this.shake=Math.max(0,this.shake-t*It.shakeDecay);const u=this.shake*this.shake*It.shakeAmount;this.cameraTarget.x+=(Math.random()-.5)*u,this.cameraTarget.y+=(Math.random()-.5)*u,this.cameraTarget.z+=(Math.random()-.5)*u*.6}this.camera.position.copy(this.cameraTarget).add(this.cameraOffset),this.camera.lookAt(this.cameraTarget)}updateSky(t){const e=this.currentStage??Fi(this.player.maxRow).stage,i=Math.min(1,t*1.6),n=this.voyage.active?this.voyage:null,o=this.mine.active?this.mine:null,r=o?o.skyColor:n?n.skyFor(e.palette.sky):e.palette.sky,a=o?o.skyColor:n?n.skyFor(e.palette.fog):e.palette.fog,l=n&&n.lightning>.5||o,c=It.distance+(o?Q.fog.near:It.fogNear),h=It.distance+(o?Q.fog.far:It.fogFar);this.scene.fog.near+=(c-this.scene.fog.near)*Math.min(1,t*4),this.scene.fog.far+=(h-this.scene.fog.far)*Math.min(1,t*4),this.skyColor.set(l?r:he(this.skyColor.getHex(),r,i)),this.fogColor.set(l?a:he(this.fogColor.getHex(),a,i))}toScreen(t){this.projection.copy(t),this.projection.x*=-1,this.projection.project(this.camera);const e=this.canvas.getBoundingClientRect();return{x:e.left+(this.projection.x+1)/2*e.width,y:e.top+(1-this.projection.y)/2*e.height}}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.applyView()}applyView(){const t=window.innerWidth/window.innerHeight;let e=It.viewWidthTiles,i=e/t;i<It.minViewHeightTiles?(i=It.minViewHeightTiles,e=i*t):i>It.maxViewHeightTiles&&(i=It.maxViewHeightTiles,e=Math.max(e,i*t)),e*=this.viewScale,i*=this.viewScale,this.camera.left=-e/2,this.camera.right=e/2,this.camera.top=i/2,this.camera.bottom=-i/2,this.camera.updateProjectionMatrix()}dispose(){this.input.dispose(),this.world.dispose(),this.player.dispose(),this.effects.dispose(),this.renderer.dispose()}}const Jt=s=>document.getElementById(s);function H1({onPlay:s,onNameSubmit:t,onUseItem:e,onPause:i,onResume:n,onToggleSound:o}){const r=Jt("hud"),a=Jt("score"),l=Jt("warning"),c=Jt("banner");let h=0;const f=Jt("items"),u=Jt("lives"),d=Jt("perk"),g=Jt("popups"),x=Jt("coach"),p=Jt("coach-sub");let m=0;const w=Jt("voyage"),M=Jt("voyage-fill"),S=w.querySelector(".voyage-boat"),I=w.querySelector(".voyage-goal"),R=Jt("boss"),A=Jt("boss-fill"),L=R.querySelector(".boss-name"),J=Jt("tip");let v=0;const b=Jt("fade"),G=Jt("cave");let F=-1;window.matchMedia?.("(hover: hover) and (pointer: fine)").matches&&(p.textContent="Or use the arrow keys");const X=Jt("screen-start"),j=Jt("screen-over"),H=Jt("start-identity"),K=Jt("over-identity"),B=Jt("start-leaderboard"),ft=Jt("over-leaderboard"),pt=Jt("over-score"),St=Jt("over-best"),jt=Jt("over-headline"),Qt=Jt("screen-pause"),Y=Jt("pause-count"),et=Jt("btn-sound"),xt=Jt("btn-pause-sound");for(const V of["btn-pause","btn-sound"])Jt(V).addEventListener("pointerdown",T=>T.stopPropagation());Jt("btn-pause").addEventListener("click",()=>i?.()),et.addEventListener("click",()=>o?.()),xt.addEventListener("click",V=>{V.stopPropagation(),o?.()}),Qt.addEventListener("click",()=>n?.()),Jt("btn-play").addEventListener("click",()=>s()),Jt("btn-again").addEventListener("click",()=>s()),f.addEventListener("pointerdown",V=>V.stopPropagation()),f.addEventListener("click",V=>{V.stopPropagation();const T=V.target.closest(".item");T&&e?.(Number(T.dataset.slot))});function st(V,T){V.classList.toggle("hidden",!T)}function Ft(V,T){if(V.innerHTML="",T?.name){const kt=document.createElement("p");kt.className="greeting",kt.textContent=`G'day, ${T.name}`,V.appendChild(kt);const rt=document.createElement("p");rt.className="greeting-best",rt.textContent=T.best?`Your best: ${T.best}`:"No runs yet",V.appendChild(rt);const Et=document.createElement("button");Et.className="link-btn",Et.textContent="Not you?",Et.addEventListener("click",()=>zt(V)),V.appendChild(Et);return}zt(V)}function zt(V,T){if(V.innerHTML="",T){const yt=document.createElement("p");yt.className="greeting-best",yt.textContent=T,V.appendChild(yt)}const kt=document.createElement("form");kt.className="name-form";const rt=document.createElement("input");rt.className="name-input",rt.type="text",rt.placeholder="Your name",rt.maxLength=20,rt.autocomplete="off";const Et=document.createElement("button");Et.className="btn btn-secondary",Et.type="submit",Et.textContent="Save",kt.appendChild(rt),kt.appendChild(Et),kt.addEventListener("submit",yt=>{yt.preventDefault();const qt=rt.value.trim();qt&&t(qt)}),V.appendChild(kt)}function Zt(V,T,kt){if(V.innerHTML="",!T||!T.top?.length){V.classList.add("hidden");return}V.classList.remove("hidden");const rt=document.createElement("h3");rt.textContent="Leaderboard",V.appendChild(rt);const Et=[...T.top],yt=Et.some(qt=>qt.code===kt);for(const qt of Et)V.appendChild(ie(qt,qt.code===kt));if(!yt&&T.me){const qt=document.createElement("div");qt.className="lb-gap",qt.textContent="...",V.appendChild(qt),V.appendChild(ie(T.me,!0))}}function ie(V,T){const kt=document.createElement("div");kt.className=`lb-row${T?" me":""}`;const rt=document.createElement("span");rt.className="lb-rank",rt.textContent=`${V.rank}.`;const Et=document.createElement("span");Et.className="lb-name",Et.textContent=V.name;const yt=document.createElement("span");return yt.className="lb-score",yt.textContent=V.score,kt.append(rt,Et,yt),kt}return{showStart(V,T){st(X,!0),st(j,!1),st(r,!1),H&&Ft(H,V),B&&Zt(B,T,V?.code)},showGame(){st(X,!1),st(j,!1),st(r,!0),l.classList.add("hidden"),c.classList.add("hidden"),w.classList.add("hidden"),R.classList.add("hidden"),J.classList.add("hidden"),b.className="fade",f.innerHTML="",u.classList.add("hidden"),d.classList.add("hidden"),g.innerHTML=""},setItems(V){f.innerHTML="";for(const[T,kt]of(V??[]).entries()){const rt=document.createElement("button");rt.type="button",rt.className=`item item-${kt.id}${kt.empty?" empty":""}`,rt.dataset.slot=String(T);const Et=document.createElement("span");Et.className="item-name",Et.textContent=kt.label;const yt=document.createElement("span");yt.className="item-action",yt.textContent=kt.action??(kt.shots?`${kt.shots}`:"Use"),rt.append(Et,yt),f.appendChild(rt)}},setReload(V){const T=f.querySelector(".item-cannon, .item-dynamite");if(!T)return;const kt=Math.max(0,Math.min(1,V));T.style.setProperty("--reload",`${Math.round(kt*360)}deg`),T.classList.toggle("loading",kt<1)},setCoach(V){if(clearTimeout(m),V){x.classList.remove("hidden","leaving");return}x.classList.contains("hidden")||(x.classList.add("leaving"),m=setTimeout(()=>x.classList.add("hidden"),300))},setVoyage(V,T){if(V==null){w.classList.add("hidden");return}w.classList.remove("hidden"),w.classList.toggle("mine",T==="mine"),I.textContent="☠";const kt=Math.max(0,Math.min(1,V));M.style.width=`${kt*100}%`,S.style.left=`${kt*92}%`},setBoss(V,{hurt:T=!1,enraged:kt=!1,name:rt="Kraken"}={}){if(V==null){R.classList.add("hidden"),F=-1;return}R.classList.remove("hidden"),L.textContent!==rt&&(L.textContent=rt),R.classList.toggle("enraged",kt),V!==F&&(F=V,A.style.width=`${Math.max(0,V)*100}%`),T&&(R.classList.remove("hurt"),R.offsetWidth,R.classList.add("hurt"))},setHint(V){clearTimeout(v),J.className="tip hidden",V&&(J.offsetWidth,J.textContent=V,J.className="tip",v=setTimeout(()=>J.classList.add("hidden"),4200))},setCave(V){G.classList.toggle("hidden",!V)},setFade(V){V?b.className=`fade on ${V}`:b.classList.remove("on")},setLives(V){if(!V){u.classList.add("hidden");return}u.textContent="♥".repeat(V),u.classList.remove("hidden")},setPerk(V){const T=Array.isArray(V)?V:V?[V]:[];if(!T.length){d.classList.add("hidden"),d.innerHTML="";return}d.innerHTML="";for(const kt of T){const rt=document.createElement("div");rt.className=`perk-chip perk-${kt.id}`,rt.append(kt.label," ");const Et=document.createElement("span");Et.className="perk-seconds",Et.textContent=`${kt.seconds}s`,rt.appendChild(Et),d.appendChild(rt)}d.classList.remove("hidden")},setPause(V,T){st(Qt,V==="paused"||V==="count"),Qt.classList.toggle("counting",V==="count"),st(Y,V==="count"),V==="count"&&(Y.textContent="",Y.offsetWidth,Y.textContent=String(T))},setSound(V){et.classList.toggle("muted",V),et.setAttribute("aria-label",V?"Sound on":"Sound off"),xt.textContent=V?"Sound: off":"Sound: on"},showGameOver(V,T,kt){st(X,!1),st(j,!0),st(r,!1),jt.textContent=V.headline,pt.textContent=V.score,St.textContent=Math.max(V.score,T?.best??0),K&&T?.name?(K.innerHTML="",K.classList.add("hidden")):K&&(K.classList.remove("hidden"),zt(K,"Add your name to get on the board")),ft&&Zt(ft,kt,T?.code)},setScore(V){a.textContent=V},setWarning(V){if(!V){l.classList.add("hidden");return}l.textContent=V,l.classList.remove("hidden")},setBanner(V,T){c.className="banner hidden",c.textContent="",V&&(c.offsetWidth,c.textContent=V,c.className=`banner${T?` banner-${T}`:""}`,(T==="calm"||T==="win"||T==="warn")&&(clearTimeout(h),h=setTimeout(()=>c.classList.add("hidden"),1900)))},popup(V,T,kt){const rt=document.createElement("div");rt.className="popup",rt.textContent=V,rt.style.left=`${T}px`,rt.style.top=`${kt}px`,g.appendChild(rt),setTimeout(()=>rt.remove(),950)}}}const m0="crossy.best",G1=document.getElementById("scene"),V1=document.getElementById("start-best");function g0(){return Number(localStorage.getItem(m0))||0}function W1(s){const t=Math.max(s,g0());return localStorage.setItem(m0,String(t)),t}const Te=H1({onPlay:()=>X1(),onUseItem:s=>Qe.useItem(s),onPause:()=>Qe.togglePause(),onResume:()=>Qe.resume(),onToggleSound:()=>{Qe.sound.unlock(),Te.setSound(Qe.sound.toggleMuted())}}),Qe=new B1(G1,{onScore:s=>Te.setScore(s),onWarning:s=>Te.setWarning(s),onBanner:(s,t)=>Te.setBanner(s,t),onItems:s=>Te.setItems(s),onLives:s=>Te.setLives(s),onPerk:s=>Te.setPerk(s),onPopup:(s,t,e)=>Te.popup(s,t,e),onCoach:s=>Te.setCoach(s),onVoyage:(s,t)=>Te.setVoyage(s,t),onBoss:(s,t)=>Te.setBoss(s,t),onReload:s=>Te.setReload(s),onHint:s=>Te.setHint(s),onFade:s=>Te.setFade(s),onCave:s=>Te.setCave(s),onPause:(s,t)=>Te.setPause(s,t),onGameOver:s=>Y1(s)},{openWorld:!0});function X1(){Te.showGame(),Qe.start()}function Y1(s){const t=W1(s.score);Te.showGameOver(s,{best:t})}function q1(){const s=g0();V1.textContent=s?`Your best: ${s}`:"No runs yet",Te.showStart()}Te.setSound(Qe.sound.muted);const x0=()=>Qe.sound.unlock();window.addEventListener("pointerdown",x0,{capture:!0});window.addEventListener("keydown",x0,{capture:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&Qe.pause()});window.addEventListener("pagehide",()=>Qe.pause());const Z1=document.getElementById("rotate");window.addEventListener("resize",()=>{getComputedStyle(Z1).display!=="none"&&Qe.pause()});window.addEventListener("keydown",s=>{const t=s.key.toLowerCase();t==="m"?Te.setSound(Qe.sound.toggleMuted()):t==="p"||t==="escape"?Qe.togglePause():Qe.paused&&(t===" "||t==="enter")&&(s.preventDefault(),Qe.resume())});screen.orientation?.lock&&screen.orientation.lock("portrait").catch(()=>{});q1();
