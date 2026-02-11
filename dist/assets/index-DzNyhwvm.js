(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="172",nd=0,Bc=1,id=2,Bh=1,Oh=2,$n=3,vi=0,Ge=1,Ye=2,fi=0,hs=1,Oc=2,zc=3,kc=4,sd=5,Pi=100,rd=101,od=102,ad=103,cd=104,ld=200,hd=201,ud=202,dd=203,fa=204,pa=205,fd=206,pd=207,md=208,gd=209,vd=210,_d=211,yd=212,xd=213,Md=214,ma=0,ga=1,va=2,ms=3,_a=4,ya=5,xa=6,Ma=7,zh=0,wd=1,Sd=2,pi=0,Ed=1,bd=2,Td=3,kh=4,Ad=5,Cd=6,Rd=7,Gh=300,gs=301,vs=302,wa=303,Sa=304,uo=306,Ni=1e3,jn=1001,Ea=1002,Tn=1003,Pd=1004,ar=1005,wn=1006,Mo=1007,Di=1008,Ld=1008,ei=1009,Vh=1010,Hh=1011,tr=1012,cc=1013,Ui=1014,Kn=1015,ir=1016,lc=1017,hc=1018,_s=1020,Wh=35902,Xh=1021,qh=1022,Sn=1023,Yh=1024,$h=1025,us=1026,ys=1027,Zh=1028,uc=1029,jh=1030,dc=1031,fc=1033,Xr=33776,qr=33777,Yr=33778,$r=33779,ba=35840,Ta=35841,Aa=35842,Ca=35843,Ra=36196,Pa=37492,La=37496,Ia=37808,Na=37809,Da=37810,Ua=37811,Fa=37812,Ba=37813,Oa=37814,za=37815,ka=37816,Ga=37817,Va=37818,Ha=37819,Wa=37820,Xa=37821,Zr=36492,qa=36494,Ya=36495,Kh=36283,$a=36284,Za=36285,ja=36286,Id=3200,Nd=3201,Jh=0,Dd=1,hi="",_e="srgb",xs="srgb-linear",to="linear",oe="srgb",Gi=7680,Gc=519,Ud=512,Fd=513,Bd=514,Qh=515,Od=516,zd=517,kd=518,Gd=519,Ka=35044,Vc="300 es",Jn=2e3,eo=2001;class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hc=1234567;const Ys=Math.PI/180,Ms=180/Math.PI;function Qn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[r&255]+Fe[r>>8&255]+Fe[r>>16&255]+Fe[r>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ht(r,t,e){return Math.max(t,Math.min(e,r))}function pc(r,t){return(r%t+t)%t}function Vd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Hd(r,t,e){return r!==t?(e-r)/(t-r):0}function $s(r,t,e){return(1-e)*r+e*t}function Wd(r,t,e,n){return $s(r,t,1-Math.exp(-e*n))}function Xd(r,t=1){return t-Math.abs(pc(r,t*2)-t)}function qd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Yd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function $d(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Zd(r,t){return r+Math.random()*(t-r)}function jd(r){return r*(.5-Math.random())}function Kd(r){r!==void 0&&(Hc=r);let t=Hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jd(r){return r*Ys}function Qd(r){return r*Ms}function tf(r){return(r&r-1)===0&&r!==0}function ef(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function nf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sf(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*d,c*u,a*l);break;case"YZY":r.set(c*u,a*h,c*d,a*l);break;case"ZXZ":r.set(c*d,c*u,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Lt={DEG2RAD:Ys,RAD2DEG:Ms,generateUUID:Qn,clamp:Ht,euclideanModulo:pc,mapLinear:Vd,inverseLerp:Hd,lerp:$s,damp:Wd,pingpong:Xd,smoothstep:qd,smootherstep:Yd,randInt:$d,randFloat:Zd,randFloatSpread:jd,seededRandom:Kd,degToRad:Jd,radToDeg:Qd,isPowerOfTwo:tf,ceilPowerOfTwo:ef,floorPowerOfTwo:nf,setQuaternionFromProperEuler:sf,normalize:re,denormalize:xn};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,s,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],x=i[4],y=i[7],A=i[2],b=i[5],C=i[8];return s[0]=o*v+a*_+c*A,s[3]=o*m+a*x+c*b,s[6]=o*p+a*y+c*C,s[1]=l*v+h*_+d*A,s[4]=l*m+h*x+d*b,s[7]=l*p+h*y+d*C,s[2]=u*v+f*_+g*A,s[5]=u*m+f*x+g*b,s[8]=u*p+f*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,f=l*s-o*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new Bt;function tu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function no(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rf(){const r=no("canvas");return r.style.display="block",r}const Wc={};function cs(r){r in Wc||(Wc[r]=!0,console.warn(r))}function of(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function af(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cf(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){const r={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===oe&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?to:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[xs]:{primaries:t,whitePoint:n,transfer:to,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_e},outputColorSpaceConfig:{drawingBufferColorSpace:_e}},[_e]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_e}}}),r}const Qt=lf();function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vi;class hf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=no("canvas")),Vi.width=t.width,Vi.height=t.height;const n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=no("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uf=0;class eu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(So(i[o].image)):s.push(So(i[o]))}else s=So(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function So(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let df=0;class Ve extends Es{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=jn,i=jn,s=wn,o=Di,a=Sn,c=ei,l=Ve.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Qn(),this.name="",this.source=new eu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ni:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ni:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Gh;Ve.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,i=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,y=(f+1)/2,A=(p+1)/2,b=(h+u)/4,C=(d+v)/4,R=(g+m)/4;return x>y&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=C/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=C/s,i=R/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ff extends Es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new eu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends ff{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nu extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Bi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||l!==f||h!==g){let m=1-a;const p=c*u+l*f+h*g+d*v,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),b=Math.atan2(A,p*_);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}const y=a*_;if(c=c*m+u*y,l=l*m+f*y,h=h*m+g*y,d=d*m+v*y,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=i+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new D,Yc=new Bi;class Oi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),lr.subVectors(this.max,Ps),Hi.subVectors(t.a,Ps),Wi.subVectors(t.b,Ps),Xi.subVectors(t.c,Ps),ii.subVectors(Wi,Hi),si.subVectors(Xi,Wi),Mi.subVectors(Hi,Xi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ii.z,0,-ii.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ii.y,ii.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!bo(e,Hi,Wi,Xi,lr)||(e=[1,0,0,0,1,0,0,0,1],!bo(e,Hi,Wi,Xi,lr))?!1:(hr.crossVectors(ii,si),e=[hr.x,hr.y,hr.z],bo(e,Hi,Wi,Xi,lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new D,new D,new D,new D,new D,new D,new D,new D],pn=new D,cr=new Oi,Hi=new D,Wi=new D,Xi=new D,ii=new D,si=new D,Mi=new D,Ps=new D,lr=new D,hr=new D,wi=new D;function bo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){wi.fromArray(r,s);const a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),c=t.dot(wi),l=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mf=new Oi,Ls=new D,To=new D;let fo=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(To)),this.expandByPoint(Ls.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const zn=new D,Ao=new D,ur=new D,ri=new D,Co=new D,dr=new D,Ro=new D;let iu=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ao.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Ao);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ur),a=ri.dot(this.direction),c=-ri.dot(ur),l=ri.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ao).addScaledVector(ur,u),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,i,s){Co.subVectors(e,t),dr.subVectors(n,t),Ro.crossVectors(Co,dr);let o=this.direction.dot(Ro),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);const c=a*this.direction.dot(dr.crossVectors(ri,dr));if(c<0)return null;const l=a*this.direction.dot(Co.cross(ri));if(l<0||c+l>o)return null;const h=-a*ri.dot(Ro);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class de{constructor(t,e,n,i,s,o,a,c,l,h,d,u,f,g,v,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,d,u,f,g,v,m)}set(t,e,n,i,s,o,a,c,l,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/qi.setFromMatrixColumn(t,0).length(),s=1/qi.setFromMatrixColumn(t,1).length(),o=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-v*l,e[9]=-a*c,e[2]=v-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gf,t,vf)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),oi.crossVectors(n,Ke),oi.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),oi.crossVectors(n,Ke)),oi.normalize(),fr.crossVectors(Ke,oi),i[0]=oi.x,i[4]=fr.x,i[8]=Ke.x,i[1]=oi.y,i[5]=fr.y,i[9]=Ke.y,i[2]=oi.z,i[6]=fr.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],x=n[7],y=n[11],A=n[15],b=i[0],C=i[4],R=i[8],S=i[12],M=i[1],L=i[5],k=i[9],I=i[13],U=i[2],O=i[6],N=i[10],$=i[14],z=i[3],K=i[7],F=i[11],W=i[15];return s[0]=o*b+a*M+c*U+l*z,s[4]=o*C+a*L+c*O+l*K,s[8]=o*R+a*k+c*N+l*F,s[12]=o*S+a*I+c*$+l*W,s[1]=h*b+d*M+u*U+f*z,s[5]=h*C+d*L+u*O+f*K,s[9]=h*R+d*k+u*N+f*F,s[13]=h*S+d*I+u*$+f*W,s[2]=g*b+v*M+m*U+p*z,s[6]=g*C+v*L+m*O+p*K,s[10]=g*R+v*k+m*N+p*F,s[14]=g*S+v*I+m*$+p*W,s[3]=_*b+x*M+y*U+A*z,s[7]=_*C+x*L+y*O+A*K,s[11]=_*R+x*k+y*N+A*F,s[15]=_*S+x*I+y*$+A*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*f-n*c*f)+v*(+e*c*f-e*l*u+s*o*u-i*o*f+i*l*h-s*c*h)+m*(+e*l*d-e*a*f-s*o*d+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=d*m*l-v*u*l+v*c*f-a*m*f-d*c*p+a*u*p,x=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,y=h*v*l-g*d*l+g*a*f-o*v*f-h*a*p+o*d*p,A=g*d*c-h*v*c-g*a*u+o*v*u+h*a*m-o*d*m,b=e*_+n*x+i*y+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=_*C,t[1]=(v*u*s-d*m*s-v*i*f+n*m*f+d*i*p-n*u*p)*C,t[2]=(a*m*s-v*c*s+v*i*l-n*m*l-a*i*p+n*c*p)*C,t[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*f-n*c*f)*C,t[4]=x*C,t[5]=(h*m*s-g*u*s+g*i*f-e*m*f-h*i*p+e*u*p)*C,t[6]=(g*c*s-o*m*s-g*i*l+e*m*l+o*i*p-e*c*p)*C,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*f+e*c*f)*C,t[8]=y*C,t[9]=(g*d*s-h*v*s-g*n*f+e*v*f+h*n*p-e*d*p)*C,t[10]=(o*v*s-g*a*s+g*n*l-e*v*l-o*n*p+e*a*p)*C,t[11]=(h*a*s-o*d*s-h*n*l+e*d*l+o*n*f-e*a*f)*C,t[12]=A*C,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*m+e*d*m)*C,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*C,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,f=s*h,g=s*d,v=o*h,m=o*d,p=a*d,_=c*l,x=c*h,y=c*d,A=n.x,b=n.y,C=n.z;return i[0]=(1-(v+p))*A,i[1]=(f+y)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+p))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(g+x)*C,i[9]=(m-_)*C,i[10]=(1-(u+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=qi.set(i[0],i[1],i[2]).length();const o=qi.set(i[4],i[5],i[6]).length(),a=qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],mn.copy(this);const l=1/s,h=1/o,d=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,e.setFromRotationMatrix(mn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Jn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===Jn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===eo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Jn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,f=(n+i)*h;let g,v;if(a===Jn)g=(o+s)*d,v=-2*d;else if(a===eo)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qi=new D,mn=new de,gf=new D(0,0,0),vf=new D(1,1,1),oi=new D,fr=new D,Ke=new D,$c=new de,Zc=new Bi;class Un{constructor(t=0,e=0,n=0,i=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $c.makeRotationFromQuaternion(t),this.setFromRotationMatrix($c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class su{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _f=0;const jc=new D,Yi=new Bi,kn=new de,pr=new D,Is=new D,yf=new D,xf=new Bi,Kc=new D(1,0,0),Jc=new D(0,1,0),Qc=new D(0,0,1),tl={type:"added"},Mf={type:"removed"},$i={type:"childadded",child:null},Po={type:"childremoved",child:null};class xe extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new D,e=new Un,n=new Bi,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Bt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Kc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(Qc,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(Qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Is,pr,this.up):kn.lookAt(pr,Is,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(kn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tl),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mf),Po.child=t,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tl),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new D(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new D,Gn=new D,Lo=new D,Vn=new D,Zi=new D,ji=new D,el=new D,Io=new D,No=new D,Do=new D,Uo=new ye,Fo=new ye,Bo=new ye;class ln{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),gn.subVectors(t,e),i.cross(gn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){gn.subVectors(i,e),Gn.subVectors(n,e),Lo.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(Gn),c=gn.dot(Lo),l=Gn.dot(Gn),h=Gn.dot(Lo),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return Uo.setScalar(0),Fo.setScalar(0),Bo.setScalar(0),Uo.fromBufferAttribute(t,e),Fo.fromBufferAttribute(t,n),Bo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Uo,s.x),o.addScaledVector(Fo,s.y),o.addScaledVector(Bo,s.z),o}static isFrontFacing(t,e,n,i){return gn.subVectors(n,e),Gn.subVectors(t,e),gn.cross(Gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),gn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Zi.subVectors(i,n),ji.subVectors(s,n),Io.subVectors(t,n);const c=Zi.dot(Io),l=ji.dot(Io);if(c<=0&&l<=0)return e.copy(n);No.subVectors(t,i);const h=Zi.dot(No),d=ji.dot(No);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Zi,o);Do.subVectors(t,s);const f=Zi.dot(Do),g=ji.dot(Do);if(g>=0&&f<=g)return e.copy(s);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ji,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return el.subVectors(s,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(el,a);const p=1/(m+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(Zi,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Oo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=pc(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Oo(o,s,t+1/3),this.g=Oo(o,s,t),this.b=Oo(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=_e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){const n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return Qt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ht(Be.r*255,0,255))*65536+Math.round(Ht(Be.g*255,0,255))*256+Math.round(Ht(Be.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,s=Be.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=_e){Qt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(mr);const n=$s(ai.h,mr.h,e),i=$s(ai.s,mr.s,e),s=$s(ai.l,mr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Wt;Wt.NAMES=ru;let wf=0,zi=class extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=hs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class an extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new D,gr=new St;class An{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class ou extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class au extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sf=0;const rn=new de,zo=new xe,Ki=new D,Je=new Oi,Ns=new Oi,Ie=new D;class He extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?au:ou)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(Je.min,Ns.min),Je.expandByPoint(Ie),Ie.addVectors(Je.max,Ns.max),Je.expandByPoint(Ie)):(Je.expandByPoint(Ns.min),Je.expandByPoint(Ns.max))}Je.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ie.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(Ki.fromBufferAttribute(t,l),Ie.add(Ki)),i=Math.max(i,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new D,c[R]=new D;const l=new D,h=new D,d=new D,u=new St,f=new St,g=new St,v=new D,m=new D;function p(R,S,M){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),u.fromBufferAttribute(s,R),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[R].add(v),a[S].add(v),a[M].add(v),c[R].add(m),c[S].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,S=_.length;R<S;++R){const M=_[R],L=M.start,k=M.count;for(let I=L,U=L+k;I<U;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new D,y=new D,A=new D,b=new D;function C(R){A.fromBufferAttribute(i,R),b.copy(A);const S=a[R];x.copy(S),x.sub(A.multiplyScalar(A.dot(S))).normalize(),y.crossVectors(b,S);const L=y.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,S=_.length;R<S;++R){const M=_[R],L=M.start,k=M.count;for(let I=L,U=L+k;I<U;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new An(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new de,Si=new iu,vr=new fo,il=new D,_r=new D,yr=new D,xr=new D,ko=new D,Mr=new D,sl=new D,wr=new D;class ct extends xe{constructor(t=new He,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Mr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(ko.fromBufferAttribute(d,t),o?Mr.addScaledVector(ko,h):Mr.addScaledVector(ko.sub(e),h))}e.add(Mr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),Si.copy(t.ray).recast(t.near),!(vr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(vr,il)===null||Si.origin.distanceToSquared(il)>(t.far-t.near)**2))&&(nl.copy(s).invert(),Si.copy(t.ray).applyMatrix4(nl),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,A=x;y<A;y+=3){const b=a.getX(y),C=a.getX(y+1),R=a.getX(y+2);i=Sr(this,p,t,n,l,h,d,b,C,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=Sr(this,o,t,n,l,h,d,_,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,A=x;y<A;y+=3){const b=y,C=y+1,R=y+2;i=Sr(this,p,t,n,l,h,d,b,C,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,x=m+1,y=m+2;i=Sr(this,o,t,n,l,h,d,_,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ef(r,t,e,n,i,s,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===vi,a),c===null)return null;wr.copy(a),wr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(wr);return l<e.near||l>e.far?null:{distance:l,point:wr.clone(),object:r}}function Sr(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,_r),r.getVertexPosition(c,yr),r.getVertexPosition(l,xr);const h=Ef(r,t,e,n,_r,yr,xr,sl);if(h){const d=new D;ln.getBarycoord(sl,_r,yr,xr,d),i&&(h.uv=ln.getInterpolatedAttribute(i,a,c,l,d,new St)),s&&(h.uv1=ln.getInterpolatedAttribute(s,a,c,l,d,new St)),o&&(h.normal=ln.getInterpolatedAttribute(o,a,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};ln.getNormal(_r,yr,xr,u.normal),h.face=u,h.barycoord=d}return h}class Se extends He{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2));function g(v,m,p,_,x,y,A,b,C,R,S){const M=y/C,L=A/R,k=y/2,I=A/2,U=b/2,O=C+1,N=R+1;let $=0,z=0;const K=new D;for(let F=0;F<N;F++){const W=F*L-I;for(let j=0;j<O;j++){const ot=j*M-k;K[v]=ot*_,K[m]=W*x,K[p]=U,l.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=b>0?1:-1,h.push(K.x,K.y,K.z),d.push(j/C),d.push(1-F/R),$+=1}}for(let F=0;F<R;F++)for(let W=0;W<C;W++){const j=u+W+O*F,ot=u+W+O*(F+1),Z=u+(W+1)+O*(F+1),nt=u+(W+1)+O*F;c.push(j,ot,nt),c.push(ot,Z,nt),z+=6}a.addGroup(f,z,S),f+=z,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ke(r){const t={};for(let e=0;e<r.length;e++){const n=ws(r[e]);for(const i in n)t[i]=n[i]}return t}function bf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function cu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Tf={clone:ws,merge:ke};var Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=bf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lu extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new D,rl=new St,ol=new St;class Qe extends lu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,rl,ol),e.subVectors(ol,rl)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Rf extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qe(Ji,Qi,t,e);i.layers=this.layers,this.add(i);const s=new Qe(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const o=new Qe(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const c=new Qe(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Qe(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hu extends Ve{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pf extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Se(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:fi});s.uniforms.tEquirect.value=e;const o=new ct(i,s),a=e.minFilter;return e.minFilter===Di&&(e.minFilter=wn),new Rf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class Zs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new Zs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lf extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class If{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new D;class io{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new An(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new io(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class er extends zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ts;const Ds=new D,es=new D,ns=new D,is=new St,Us=new St,uu=new de,Er=new D,Fs=new D,br=new D,al=new St,Go=new St,cl=new St;class so extends xe{constructor(t=new er){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new If(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new io(n,3,0,!1)),ts.setAttribute("uv",new io(n,2,3,!1))}this.geometry=ts,this.material=t,this.center=new St(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Tr(Er.set(-.5,-.5,0),ns,o,es,i,s),Tr(Fs.set(.5,-.5,0),ns,o,es,i,s),Tr(br.set(.5,.5,0),ns,o,es,i,s),al.set(0,0),Go.set(1,0),cl.set(1,1);let a=t.ray.intersectTriangle(Er,Fs,br,!1,Ds);if(a===null&&(Tr(Fs.set(-.5,.5,0),ns,o,es,i,s),Go.set(0,1),a=t.ray.intersectTriangle(Er,br,Fs,!1,Ds),a===null))return;const c=t.ray.origin.distanceTo(Ds);c<t.near||c>t.far||e.push({distance:c,point:Ds.clone(),uv:ln.getInterpolation(Ds,Er,Fs,br,al,Go,cl,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Tr(r,t,e,n,i,s){is.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Us.x=s*is.x-i*is.y,Us.y=i*is.x+s*is.y):Us.copy(is),r.copy(t),r.x+=Us.x,r.y+=Us.y,r.applyMatrix4(uu)}const Vo=new D,Nf=new D,Df=new Bt;let Ci=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vo.subVectors(n,e).cross(Nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Df.getNormalMatrix(t),i=this.coplanarPoint(Vo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ei=new fo,Ar=new D;class mc{constructor(t=new Ci,e=new Ci,n=new Ci,i=new Ci,s=new Ci,o=new Ci){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-s,u-l,m-f,y-p).normalize(),n[1].setComponents(c+s,u+l,m+f,y+p).normalize(),n[2].setComponents(c+o,u+h,m+g,y+_).normalize(),n[3].setComponents(c-o,u-h,m-g,y-_).normalize(),n[4].setComponents(c-a,u-d,m-v,y-x).normalize(),e===Jn)n[5].setComponents(c+a,u+d,m+v,y+x).normalize();else if(e===eo)n[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ar.x=i.normal.x>0?t.max.x:t.min.x,Ar.y=i.normal.y>0?t.max.y:t.min.y,Ar.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class du extends zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ro=new D,oo=new D,ll=new de,Bs=new iu,Cr=new fo,Ho=new D,hl=new D;class Uf extends xe{constructor(t=new He,e=new du){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ro.fromBufferAttribute(e,i-1),oo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ro.distanceTo(oo);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=s,t.ray.intersectsSphere(Cr)===!1)return;ll.copy(i).invert(),Bs.copy(t.ray).applyMatrix4(ll);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),_=h.getX(v+1),x=Rr(this,t,Bs,c,p,_);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Rr(this,t,Bs,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=Rr(this,t,Bs,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Rr(this,t,Bs,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rr(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(ro.fromBufferAttribute(o,i),oo.fromBufferAttribute(o,s),e.distanceSqToSegment(ro,oo,Ho,hl)>n)return;Ho.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ho);if(!(c<t.near||c>t.far))return{distance:c,point:hl.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const ul=new D,dl=new D;class Ff extends Uf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)ul.fromBufferAttribute(e,i),dl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ul.distanceTo(dl);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ae extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class hn extends Ve{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fu extends Ve{constructor(t,e,n,i,s,o,a,c,l,h=us){if(h!==us&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===us&&(n=Ui),n===void 0&&h===ys&&(n=_s),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new St:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],s=[],o=[],a=new D,c=new de;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ht(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ht(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pu extends ni{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new St){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bf extends pu{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function gc(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,d){let u=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Pr=new D,Wo=new gc,Xo=new gc,qo=new gc;class mu extends ni{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Pr.subVectors(i[0],i[1]).add(i[0]),l=Pr);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Pr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Wo.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,m),Xo.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,m),qo.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Wo.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Xo.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),qo.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Wo.calc(c),Xo.calc(c),qo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fl(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function Of(r,t){const e=1-r;return e*e*t}function zf(r,t){return 2*(1-r)*r*t}function kf(r,t){return r*r*t}function js(r,t,e,n){return Of(r,t)+zf(r,e)+kf(r,n)}function Gf(r,t){const e=1-r;return e*e*e*t}function Vf(r,t){const e=1-r;return 3*e*e*r*t}function Hf(r,t){return 3*(1-r)*r*r*t}function Wf(r,t){return r*r*r*t}function Ks(r,t,e,n,i){return Gf(r,t)+Vf(r,e)+Hf(r,n)+Wf(r,i)}class Xf extends ni{constructor(t=new St,e=new St,n=new St,i=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new St){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ks(t,i.x,s.x,o.x,a.x),Ks(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qf extends ni{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ks(t,i.x,s.x,o.x,a.x),Ks(t,i.y,s.y,o.y,a.y),Ks(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yf extends ni{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $f extends ni{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zf extends ni{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(js(t,i.x,s.x,o.x),js(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gu extends ni{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(js(t,i.x,s.x,o.x),js(t,i.y,s.y,o.y),js(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jf extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(fl(a,c.x,l.x,h.x,d.x),fl(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new St().fromArray(i))}return this}}var Kf=Object.freeze({__proto__:null,ArcCurve:Bf,CatmullRomCurve3:mu,CubicBezierCurve:Xf,CubicBezierCurve3:qf,EllipseCurve:pu,LineCurve:Yf,LineCurve3:$f,QuadraticBezierCurve:Zf,QuadraticBezierCurve3:gu,SplineCurve:jf});class vc extends He{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new D,h=new St;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ze extends He{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2));function _(){const y=new D,A=new D;let b=0;const C=(e-t)/n;for(let R=0;R<=s;R++){const S=[],M=R/s,L=M*(e-t)+t;for(let k=0;k<=i;k++){const I=k/i,U=I*c+a,O=Math.sin(U),N=Math.cos(U);A.x=L*O,A.y=-M*n+m,A.z=L*N,d.push(A.x,A.y,A.z),y.set(O,C,N).normalize(),u.push(y.x,y.y,y.z),f.push(I,1-M),S.push(g++)}v.push(S)}for(let R=0;R<i;R++)for(let S=0;S<s;S++){const M=v[S][R],L=v[S+1][R],k=v[S+1][R+1],I=v[S][R+1];(t>0||S!==0)&&(h.push(M,L,I),b+=3),(e>0||S!==s-1)&&(h.push(L,k,I),b+=3)}l.addGroup(p,b,0),p+=b}function x(y){const A=g,b=new St,C=new D;let R=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let k=0;k<=i;k++){const U=k/i*c+a,O=Math.cos(U),N=Math.sin(U);C.x=S*N,C.y=m*M,C.z=S*O,d.push(C.x,C.y,C.z),u.push(0,M,0),b.x=O*.5+.5,b.y=N*.5*M+.5,f.push(b.x,b.y),g++}for(let k=0;k<i;k++){const I=A+k,U=L+k;y===!0?h.push(U,U+1,I):h.push(U+1,U,I),R+=3}l.addGroup(p,R,y===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class De extends He{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*u-o;for(let x=0;x<l;x++){const y=x*d-s;g.push(y,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const x=_+l*p,y=_+l*(p+1),A=_+1+l*(p+1),b=_+1+l*p;f.push(x,y,b),f.push(y,A,b)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.widthSegments,t.heightSegments)}}class ao extends He{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/i,f=new D,g=new St;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const _=p+m,x=_,y=_+n+1,A=_+n+2,b=_+1;a.push(x,y,b),a.push(y,A,b)}}this.setIndex(a),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nn extends He{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new D,u=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],x=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const b=A/e;d.x=-t*Math.cos(i+b*s)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(i+b*s)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(b+y,1-x),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const x=h[p][_+1],y=h[p][_],A=h[p+1][_],b=h[p+1][_+1];(p!==0||o>0)&&f.push(x,y,b),(p!==n-1||c<Math.PI)&&f.push(y,A,b)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _c extends He{constructor(t=new gu(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new St;let h=new D;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(f,2));function v(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),_(),p()}function m(x){h=t.getPointAt(x/e,h);const y=o.normals[x],A=o.binormals[x];for(let b=0;b<=i;b++){const C=b/i*Math.PI*2,R=Math.sin(C),S=-Math.cos(C);c.x=S*y.x+R*A.x,c.y=S*y.y+R*A.y,c.z=S*y.z+R*A.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let y=1;y<=i;y++){const A=(i+1)*(x-1)+(y-1),b=(i+1)*x+(y-1),C=(i+1)*x+y,R=(i+1)*(x-1)+y;g.push(A,b,R),g.push(b,C,R)}}function _(){for(let x=0;x<=e;x++)for(let y=0;y<=i;y++)l.x=x/e,l.y=y/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _c(new Kf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Jf extends He{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new D,s=new D;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const d=c[l],u=d.start,f=d.count;for(let g=u,v=u+f;g<v;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),_=a.getX(g+(m+1)%3);i.fromBufferAttribute(o,p),s.fromBufferAttribute(o,_),pl(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,d=3*a+(l+1)%3;i.fromBufferAttribute(o,h),s.fromBufferAttribute(o,d),pl(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new fe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function pl(r,t,e){const n=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class Xt extends zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qf extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tp extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class po extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vu extends po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yo=new de,ml=new D,gl=new D;class _u{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(ml),gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gl),e.updateMatrixWorld(),Yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ep extends _u{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ms*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class np extends po{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ep}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yu extends lu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ip extends _u{constructor(){super(new yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class co extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new ip}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sp extends po{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rp extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function vl(r,t,e,n){const i=op(n);switch(e){case Xh:return r*t;case Yh:return r*t;case $h:return r*t*2;case Zh:return r*t/i.components*i.byteLength;case uc:return r*t/i.components*i.byteLength;case jh:return r*t*2/i.components*i.byteLength;case dc:return r*t*2/i.components*i.byteLength;case qh:return r*t*3/i.components*i.byteLength;case Sn:return r*t*4/i.components*i.byteLength;case fc:return r*t*4/i.components*i.byteLength;case Xr:case qr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yr:case $r:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Ca:return Math.max(r,16)*Math.max(t,8)/4;case ba:case Aa:return Math.max(r,8)*Math.max(t,8)/2;case Ra:case Pa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case La:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Zr:case qa:case Ya:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kh:case $a:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Za:case ja:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function op(r){switch(r){case ei:case Vh:return{byteLength:1,components:1};case tr:case Hh:case ir:return{byteLength:2,components:1};case lc:case hc:return{byteLength:2,components:4};case Ui:case cc:case Kn:return{byteLength:4,components:1};case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ap(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(r.bindBuffer(l,a),d.length===0)r.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
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
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
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
#endif`,wp=`#ifdef USE_BUMPMAP
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Np=`vec3 transformedNormal = objectNormal;
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
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
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
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
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
#endif`,om=`struct PhysicalMaterial {
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
}`,am=`
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vm=`#if defined( USE_POINTS_UV )
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
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qm=`float getShadowMask() {
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
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`#include <common>
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
}`,pg=`#if DEPTH_PACKING == 3200
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
}`,mg=`#define DISTANCE
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
}`,gg=`#define DISTANCE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,xg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,wg=`uniform vec3 diffuse;
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
}`,Sg=`#define LAMBERT
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
}`,Eg=`#define LAMBERT
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
}`,bg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Rg=`#define PHONG
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
}`,Pg=`#define PHONG
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
}`,Lg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Ng=`#define TOON
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
}`,Dg=`#define TOON
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
}`,Ug=`uniform float size;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,Og=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,kg=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:cp,alphahash_pars_fragment:lp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:vp,begin_vertex:_p,beginnormal_vertex:yp,bsdfs:xp,iridescence_fragment:Mp,bumpmap_pars_fragment:wp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:Cp,color_pars_vertex:Rp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Np,displacementmap_pars_vertex:Dp,displacementmap_vertex:Up,emissivemap_fragment:Fp,emissivemap_pars_fragment:Bp,colorspace_fragment:Op,colorspace_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Vp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:tm,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:$p,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:jp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Qp,lights_toon_fragment:em,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:om,lights_fragment_begin:am,lights_fragment_maps:cm,lights_fragment_end:lm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:vm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:ym,morphinstance_vertex:xm,morphcolor_vertex:Mm,morphnormal_vertex:wm,morphtarget_pars_vertex:Sm,morphtarget_vertex:Em,normal_fragment_begin:bm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Cm,normal_vertex:Rm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Dm,opaque_fragment:Um,packing:Fm,premultiplied_alpha_fragment:Bm,project_vertex:Om,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Gm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:$m,skinning_vertex:Zm,skinnormal_vertex:jm,specularmap_fragment:Km,specularmap_pars_fragment:Jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:tg,transmission_fragment:eg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:sg,uv_vertex:rg,worldpos_vertex:og,background_vert:ag,background_frag:cg,backgroundCube_vert:lg,backgroundCube_frag:hg,cube_vert:ug,cube_frag:dg,depth_vert:fg,depth_frag:pg,distanceRGBA_vert:mg,distanceRGBA_frag:gg,equirect_vert:vg,equirect_frag:_g,linedashed_vert:yg,linedashed_frag:xg,meshbasic_vert:Mg,meshbasic_frag:wg,meshlambert_vert:Sg,meshlambert_frag:Eg,meshmatcap_vert:bg,meshmatcap_frag:Tg,meshnormal_vert:Ag,meshnormal_frag:Cg,meshphong_vert:Rg,meshphong_frag:Pg,meshphysical_vert:Lg,meshphysical_frag:Ig,meshtoon_vert:Ng,meshtoon_frag:Dg,points_vert:Ug,points_frag:Fg,shadow_vert:Bg,shadow_frag:Og,sprite_vert:zg,sprite_frag:kg},lt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},In={basic:{uniforms:ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ke([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ke([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ke([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ke([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ke([lt.points,lt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ke([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ke([lt.common,lt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ke([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ke([lt.sprite,lt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ke([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ke([lt.lights,lt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};In.physical={uniforms:ke([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Lr={r:0,b:0,g:0},bi=new Un,Gg=new de;function Vg(r,t,e,n,i,s,o){const a=new Wt(0);let c=s===!0?0:1,l,h,d=null,u=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function v(x){let y=!1;const A=g(x);A===null?p(a,c):A&&A.isColor&&(p(A,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===uo)?(h===void 0&&(h=new ct(new Se(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ws(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),bi.copy(y.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(bi)),h.material.toneMapped=Qt.getTransfer(A.colorSpace)!==oe,(d!==A||u!==A.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ct(new De(2,2),new _i({name:"BackgroundMaterial",uniforms:ws(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(A.colorSpace)!==oe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,d=A,u=A.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Lr,cu(r)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,y,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:m,dispose:_}}function Hg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(M,L,k,I,U){let O=!1;const N=d(I,k,L);s!==N&&(s=N,l(s.object)),O=f(M,I,k,U),O&&g(M,I,k,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(M,L,k,I),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function d(M,L,k){const I=k.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let O=U[L.id];O===void 0&&(O={},U[L.id]=O);let N=O[I];return N===void 0&&(N=u(c()),O[I]=N),N}function u(M){const L=[],k=[],I=[];for(let U=0;U<e;U++)L[U]=0,k[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:I,object:M,attributes:{},index:null}}function f(M,L,k,I){const U=s.attributes,O=L.attributes;let N=0;const $=k.getAttributes();for(const z in $)if($[z].location>=0){const F=U[z];let W=O[z];if(W===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),F===void 0||F.attribute!==W||W&&F.data!==W.data)return!0;N++}return s.attributesNum!==N||s.index!==I}function g(M,L,k,I){const U={},O=L.attributes;let N=0;const $=k.getAttributes();for(const z in $)if($[z].location>=0){let F=O[z];F===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(F=M.instanceColor));const W={};W.attribute=F,F&&F.data&&(W.data=F.data),U[z]=W,N++}s.attributes=U,s.attributesNum=N,s.index=I}function v(){const M=s.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const k=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;k[M]=1,I[M]===0&&(r.enableVertexAttribArray(M),I[M]=1),U[M]!==L&&(r.vertexAttribDivisor(M,L),U[M]=L)}function _(){const M=s.newAttributes,L=s.enabledAttributes;for(let k=0,I=L.length;k<I;k++)L[k]!==M[k]&&(r.disableVertexAttribArray(k),L[k]=0)}function x(M,L,k,I,U,O,N){N===!0?r.vertexAttribIPointer(M,L,k,U,O):r.vertexAttribPointer(M,L,k,I,U,O)}function y(M,L,k,I){v();const U=I.attributes,O=k.getAttributes(),N=L.defaultAttributeValues;for(const $ in O){const z=O[$];if(z.location>=0){let K=U[$];if(K===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const F=K.normalized,W=K.itemSize,j=t.get(K);if(j===void 0)continue;const ot=j.buffer,Z=j.type,nt=j.bytesPerElement,ht=Z===r.INT||Z===r.UNSIGNED_INT||K.gpuType===cc;if(K.isInterleavedBufferAttribute){const at=K.data,Rt=at.stride,It=K.offset;if(at.isInstancedInterleavedBuffer){for(let Gt=0;Gt<z.locationSize;Gt++)p(z.location+Gt,at.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Gt=0;Gt<z.locationSize;Gt++)m(z.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let Gt=0;Gt<z.locationSize;Gt++)x(z.location+Gt,W/z.locationSize,Z,F,Rt*nt,(It+W/z.locationSize*Gt)*nt,ht)}else{if(K.isInstancedBufferAttribute){for(let at=0;at<z.locationSize;at++)p(z.location+at,K.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let at=0;at<z.locationSize;at++)m(z.location+at);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let at=0;at<z.locationSize;at++)x(z.location+at,W/z.locationSize,Z,F,W*nt,W/z.locationSize*at*nt,ht)}}else if(N!==void 0){const F=N[$];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(z.location,F);break;case 3:r.vertexAttrib3fv(z.location,F);break;case 4:r.vertexAttrib4fv(z.location,F);break;default:r.vertexAttrib1fv(z.location,F)}}}}_()}function A(){R();for(const M in n){const L=n[M];for(const k in L){const I=L[k];for(const U in I)h(I[U].object),delete I[U];delete L[k]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const k in L){const I=L[k];for(const U in I)h(I[U].object),delete I[U];delete L[k]}delete n[M.id]}function C(M){for(const L in n){const k=n[L];if(k[M.id]===void 0)continue;const I=k[M.id];for(const U in I)h(I[U].object),delete I[U];delete k[M.id]}}function R(){S(),o=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Wg(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(r.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Xg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Sn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ei&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Kn&&!R)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:b}}function qg(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ci,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const _=s?0:n,x=_*4;let y=p.clippingState||null;c.value=y,y=h(g,u,x,f);for(let A=0;A!==x;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==v;++x,y+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Yg(r){let t=new WeakMap;function e(o,a){return a===wa?o.mapping=gs:a===Sa&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wa||a===Sa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Pf(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const ls=4,_l=[.125,.215,.35,.446,.526,.582],Li=20,$o=new yu,yl=new Wt;let Zo=null,jo=0,Ko=0,Jo=!1;const Ri=(1+Math.sqrt(5))/2,ss=1/Ri,xl=[new D(-Ri,ss,0),new D(Ri,ss,0),new D(-ss,0,Ri),new D(ss,0,Ri),new D(0,Ri,-ss),new D(0,Ri,ss),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,jo,Ko),this._renderer.xr.enabled=Jo,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ir,format:Sn,colorSpace:xs,depthBuffer:!1},i=wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$g(s)),this._blurMaterial=Zg(s,t,e)}return i}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,i){const a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(yl),h.toneMapping=pi,h.autoClear=!1;const f=new an({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new ct(new Se,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(yl),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Ir(i,_*x,p>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gs||t.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ir(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,$o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xl[(i-s-1)%xl.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ct(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Li-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let _=0;for(let C=0;C<Li;++C){const R=C/v,S=Math.exp(-R*R/2);p.push(S),C===0?_+=S:C<m&&(_+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const y=this._sizeLods[i],A=3*y*(i>x-ls?i-x+ls:0),b=4*(this._cubeSize-y);Ir(e,A,b,3*y,2*y),c.setRenderTarget(e),c.render(d,$o)}}function $g(r){const t=[],e=[],n=[];let i=r;const s=r-ls+1+_l.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-ls?c=_l[o-r+ls-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const C=b%3*2/3-1,R=b>2?0:-1,S=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];_.set(S,v*g*b),x.set(u,m*g*b);const M=[b,b,b,b,b,b];y.set(M,p*g*b)}const A=new He;A.setAttribute("position",new An(_,v)),A.setAttribute("uv",new An(x,m)),A.setAttribute("faceIndex",new An(y,p)),t.push(A),i>ls&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wl(r,t,e){const n=new Fi(r,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Zg(r,t,e){const n=new Float32Array(Li),i=new D(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Sl(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function El(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function jg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===wa||c===Sa,h=c===gs||c===vs;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ml(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ml(r)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Kg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jg(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],r.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let x=0,y=_.length;x<y;x+=3){const A=_[x+0],b=_[x+1],C=_[x+2];u.push(A,b,b,C,C,A)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const A=x+0,b=x+1,C=x+2;u.push(A,b,b,C,C,A)}}else return;const m=new(tu(u)?au:ou)(u,1);m.version=v;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Qg(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,f){r.drawElements(n,f,s,u*o),e.update(f,n,1)}function l(u,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function t0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function e0(r,t,e){const n=new WeakMap,i=new ye;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=a.attributes.position.count*x,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const b=new Float32Array(y*A*4*d),C=new nu(b,y,A,d);C.type=Kn,C.needsUpdate=!0;const R=x*4;for(let M=0;M<d;M++){const L=m[M],k=p[M],I=_[M],U=y*A*4*M;for(let O=0;O<L.count;O++){const N=O*R;f===!0&&(i.fromBufferAttribute(L,O),b[U+N+0]=i.x,b[U+N+1]=i.y,b[U+N+2]=i.z,b[U+N+3]=0),g===!0&&(i.fromBufferAttribute(k,O),b[U+N+4]=i.x,b[U+N+5]=i.y,b[U+N+6]=i.z,b[U+N+7]=0),v===!0&&(i.fromBufferAttribute(I,O),b[U+N+8]=i.x,b[U+N+9]=i.y,b[U+N+10]=i.z,b[U+N+11]=I.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new St(y,A)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function n0(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Mu=new Ve,bl=new fu(1,1),wu=new nu,Su=new pf,Eu=new hu,Tl=[],Al=[],Cl=new Float32Array(16),Rl=new Float32Array(9),Pl=new Float32Array(4);function bs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Tl[i];if(s===void 0&&(s=new Float32Array(i),Tl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Pe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Le(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function mo(r,t){let e=Al[t];e===void 0&&(e=new Int32Array(t),Al[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function i0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function s0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2fv(this.addr,t),Le(e,t)}}function r0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;r.uniform3fv(this.addr,t),Le(e,t)}}function o0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4fv(this.addr,t),Le(e,t)}}function a0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Pl.set(n),r.uniformMatrix2fv(this.addr,!1,Pl),Le(e,n)}}function c0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Rl.set(n),r.uniformMatrix3fv(this.addr,!1,Rl),Le(e,n)}}function l0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Cl.set(n),r.uniformMatrix4fv(this.addr,!1,Cl),Le(e,n)}}function h0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function u0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2iv(this.addr,t),Le(e,t)}}function d0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3iv(this.addr,t),Le(e,t)}}function f0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4iv(this.addr,t),Le(e,t)}}function p0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function m0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2uiv(this.addr,t),Le(e,t)}}function g0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3uiv(this.addr,t),Le(e,t)}}function v0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4uiv(this.addr,t),Le(e,t)}}function _0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(bl.compareFunction=Qh,s=bl):s=Mu,e.setTexture2D(t||s,i)}function y0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Su,i)}function x0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Eu,i)}function M0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wu,i)}function w0(r){switch(r){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return c0;case 35676:return l0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return M0}}function S0(r,t){r.uniform1fv(this.addr,t)}function E0(r,t){const e=bs(t,this.size,2);r.uniform2fv(this.addr,e)}function b0(r,t){const e=bs(t,this.size,3);r.uniform3fv(this.addr,e)}function T0(r,t){const e=bs(t,this.size,4);r.uniform4fv(this.addr,e)}function A0(r,t){const e=bs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function C0(r,t){const e=bs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function R0(r,t){const e=bs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function P0(r,t){r.uniform1iv(this.addr,t)}function L0(r,t){r.uniform2iv(this.addr,t)}function I0(r,t){r.uniform3iv(this.addr,t)}function N0(r,t){r.uniform4iv(this.addr,t)}function D0(r,t){r.uniform1uiv(this.addr,t)}function U0(r,t){r.uniform2uiv(this.addr,t)}function F0(r,t){r.uniform3uiv(this.addr,t)}function B0(r,t){r.uniform4uiv(this.addr,t)}function O0(r,t,e){const n=this.cache,i=t.length,s=mo(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Mu,s[o])}function z0(r,t,e){const n=this.cache,i=t.length,s=mo(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Su,s[o])}function k0(r,t,e){const n=this.cache,i=t.length,s=mo(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Eu,s[o])}function G0(r,t,e){const n=this.cache,i=t.length,s=mo(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||wu,s[o])}function V0(r){switch(r){case 5126:return S0;case 35664:return E0;case 35665:return b0;case 35666:return T0;case 35674:return A0;case 35675:return C0;case 35676:return R0;case 5124:case 35670:return P0;case 35667:case 35671:return L0;case 35668:case 35672:return I0;case 35669:case 35673:return N0;case 5125:return D0;case 36294:return U0;case 36295:return F0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return G0}}class H0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=w0(e.type)}}class W0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V0(e.type)}}class X0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function Ll(r,t){r.seq.push(t),r.map[t.id]=t}function q0(r,t,e){const n=r.name,i=n.length;for(Qo.lastIndex=0;;){const s=Qo.exec(n),o=Qo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ll(e,l===void 0?new H0(a,r,t):new W0(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new X0(a),Ll(e,d)),e=d}}}class jr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);q0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Il(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Y0=37297;let $0=0;function Z0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Nl=new Bt;function j0(r){Qt._getMatrix(Nl,Qt.workingColorSpace,r);const t=`mat3( ${Nl.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(r)){case to:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Dl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Z0(r.getShaderSource(t),o)}else return i}function K0(r,t){const e=j0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function J0(r,t){let e;switch(t){case Ed:e="Linear";break;case bd:e="Reinhard";break;case Td:e="Cineon";break;case kh:e="ACESFilmic";break;case Cd:e="AgX";break;case Rd:e="Neutral";break;case Ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new D;function Q0(){Qt.getLuminanceCoefficients(Nr);const r=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function ev(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ws(r){return r!==""}function Ul(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(r){return r.replace(iv,rv)}const sv=new Map;function rv(r,t){let e=zt[t];if(e===void 0){const n=sv.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}const ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(r){return r.replace(ov,av)}function av(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ol(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function lv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gs:case vs:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function uv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zh:t="ENVMAP_BLENDING_MULTIPLY";break;case wd:t="ENVMAP_BLENDING_MIX";break;case Sd:t="ENVMAP_BLENDING_ADD";break}return t}function dv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fv(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=cv(e),l=lv(e),h=hv(e),d=uv(e),u=dv(e),f=tv(e),g=ev(s),v=i.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(m=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?zt.tonemapping_pars_fragment:"",e.toneMapping!==pi?J0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,K0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Ja(o),o=Ul(o,e),o=Fl(o,e),a=Ja(a),a=Ul(a,e),a=Fl(a,e),o=Bl(o),a=Bl(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+m+o,y=_+p+a,A=Il(i,i.VERTEX_SHADER,x),b=Il(i,i.FRAGMENT_SHADER,y);i.attachShader(v,A),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(L){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(v).trim(),I=i.getShaderInfoLog(A).trim(),U=i.getShaderInfoLog(b).trim();let O=!0,N=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,A,b);else{const $=Dl(i,A,"vertex"),z=Dl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+$+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(I===""||U==="")&&(N=!1);N&&(L.diagnostics={runnable:O,programLog:k,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:p}})}i.deleteShader(A),i.deleteShader(b),R=new jr(i,v),S=nv(i,v)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,Y0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=b,this}let pv=0;class mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gv(t),e.set(t,n)),n}}class gv{constructor(t){this.id=pv++,this.code=t,this.usedTimes=0}}function vv(r,t,e,n,i,s,o){const a=new su,c=new mv,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,k,I){const U=k.fog,O=I.geometry,N=S.isMeshStandardMaterial?k.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||N),z=$&&$.mapping===uo?$.image.height:null,K=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const F=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,W=F!==void 0?F.length:0;let j=0;O.morphAttributes.position!==void 0&&(j=1),O.morphAttributes.normal!==void 0&&(j=2),O.morphAttributes.color!==void 0&&(j=3);let ot,Z,nt,ht;if(K){const ie=In[K];ot=ie.vertexShader,Z=ie.fragmentShader}else ot=S.vertexShader,Z=S.fragmentShader,c.update(S),nt=c.getVertexShaderID(S),ht=c.getFragmentShaderID(S);const at=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),It=I.isInstancedMesh===!0,Gt=I.isBatchedMesh===!0,le=!!S.map,Zt=!!S.matcap,Me=!!$,B=!!S.aoMap,en=!!S.lightMap,qt=!!S.bumpMap,Yt=!!S.normalMap,Tt=!!S.displacementMap,he=!!S.emissiveMap,bt=!!S.metalnessMap,P=!!S.roughnessMap,E=S.anisotropy>0,X=S.clearcoat>0,tt=S.dispersion>0,it=S.iridescence>0,Q=S.sheen>0,Et=S.transmission>0,ft=E&&!!S.anisotropyMap,yt=X&&!!S.clearcoatMap,jt=X&&!!S.clearcoatNormalMap,rt=X&&!!S.clearcoatRoughnessMap,xt=it&&!!S.iridescenceMap,Pt=it&&!!S.iridescenceThicknessMap,Nt=Q&&!!S.sheenColorMap,Mt=Q&&!!S.sheenRoughnessMap,$t=!!S.specularMap,Ot=!!S.specularColorMap,ce=!!S.specularIntensityMap,G=Et&&!!S.transmissionMap,ut=Et&&!!S.thicknessMap,J=!!S.gradientMap,et=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,Ft=!!S.extensions;let ge=pi;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ge=r.toneMapping);const Ue={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:ot,fragmentShader:Z,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:ht,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Gt,batchingColor:Gt&&I._colorsTexture!==null,instancing:It,instancingColor:It&&I.instanceColor!==null,instancingMorph:It&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?r.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:xs,alphaToCoverage:!!S.alphaToCoverage,map:le,matcap:Zt,envMap:Me,envMapMode:Me&&$.mapping,envMapCubeUVHeight:z,aoMap:B,lightMap:en,bumpMap:qt,normalMap:Yt,displacementMap:u&&Tt,emissiveMap:he,normalMapObjectSpace:Yt&&S.normalMapType===Dd,normalMapTangentSpace:Yt&&S.normalMapType===Jh,metalnessMap:bt,roughnessMap:P,anisotropy:E,anisotropyMap:ft,clearcoat:X,clearcoatMap:yt,clearcoatNormalMap:jt,clearcoatRoughnessMap:rt,dispersion:tt,iridescence:it,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:Q,sheenColorMap:Nt,sheenRoughnessMap:Mt,specularMap:$t,specularColorMap:Ot,specularIntensityMap:ce,transmission:Et,transmissionMap:G,thicknessMap:ut,gradientMap:J,opaque:S.transparent===!1&&S.blending===hs&&S.alphaToCoverage===!1,alphaMap:et,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:le&&v(S.map.channel),aoMapUv:B&&v(S.aoMap.channel),lightMapUv:en&&v(S.lightMap.channel),bumpMapUv:qt&&v(S.bumpMap.channel),normalMapUv:Yt&&v(S.normalMap.channel),displacementMapUv:Tt&&v(S.displacementMap.channel),emissiveMapUv:he&&v(S.emissiveMap.channel),metalnessMapUv:bt&&v(S.metalnessMap.channel),roughnessMapUv:P&&v(S.roughnessMap.channel),anisotropyMapUv:ft&&v(S.anisotropyMap.channel),clearcoatMapUv:yt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(S.sheenRoughnessMap.channel),specularMapUv:$t&&v(S.specularMap.channel),specularColorMapUv:Ot&&v(S.specularColorMap.channel),specularIntensityMapUv:ce&&v(S.specularIntensityMap.channel),transmissionMapUv:G&&v(S.transmissionMap.channel),thicknessMapUv:ut&&v(S.thicknessMap.channel),alphaMapUv:et&&v(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Yt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(le||et),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:j,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===oe,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ye,flipSided:S.side===Ge,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(_(M,S),x(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=g[S.type];let L;if(M){const k=In[M];L=Tf.clone(k.uniforms)}else L=S.uniforms;return L}function A(S,M){let L;for(let k=0,I=h.length;k<I;k++){const U=h[k];if(U.cacheKey===M){L=U,++L.usedTimes;break}}return L===void 0&&(L=new fv(r,M,S,s),h.push(L)),L}function b(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:R}}function _v(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function yv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function zl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function kl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,v,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||yv),n.length>1&&n.sort(u||zl),i.length>1&&i.sort(u||zl)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function xv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new kl,r.set(n,[o])):i>=s.length?(o=new kl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Mv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Wt};break;case"SpotLight":e={position:new D,direction:new D,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function wv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Sv=0;function Ev(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function bv(r){const t=new Mv,e=wv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,s=new de,o=new de;function a(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,x=0,y=0,A=0,b=0,C=0;l.sort(Ev);for(let S=0,M=l.length;S<M;S++){const L=l[S],k=L.color,I=L.intensity,U=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*I,d+=k.g*I,u+=k.b*I;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],I);C++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,z=e.get(L);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=L.shadow.matrix,_++}n.directional[f]=N,f++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(k).multiplyScalar(I),N.distance=U,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[v]=N;const $=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,$.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[v]=$.matrix,L.castShadow){const z=e.get(L);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=O,y++}v++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(k).multiplyScalar(I),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=N,m++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const $=L.shadow,z=e.get(L);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,z.shadowCameraNear=$.camera.near,z.shadowCameraFar=$.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=N,g++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(I),N.groundColor.copy(L.groundColor).multiplyScalar(I),n.hemi[p]=N,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==A||R.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=A,R.numLightProbes=C,n.version=Sv++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Gl(r){const t=new bv(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Tv(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Gl(r),t.set(i,[a])):s>=o.length?(a=new Gl(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cv=`uniform sampler2D shadow_pass;
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
}`;function Rv(r,t,e){let n=new mc;const i=new St,s=new St,o=new ye,a=new Qf({depthPacking:Nd}),c=new tp,l={},h=e.maxTextureSize,d={[vi]:Ge,[Ge]:vi,[Ye]:Ye},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Av,fragmentShader:Cv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ct(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let p=this.type;this.render=function(b,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),k=r.state;k.setBlending(fi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=p!==$n&&this.type===$n,U=p===$n&&this.type!==$n;for(let O=0,N=b.length;O<N;O++){const $=b[O],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const K=z.getFrameExtents();if(i.multiply(K),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,z.mapSize.y=s.y)),z.map===null||I===!0||U===!0){const W=this.type!==$n?{minFilter:Tn,magFilter:Tn}:{};z.map!==null&&z.map.dispose(),z.map=new Fi(i.x,i.y,W),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const F=z.getViewportCount();for(let W=0;W<F;W++){const j=z.getViewport(W);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),k.viewport(o),z.updateMatrices($,W),n=z.getFrustum(),y(C,R,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===$n&&_(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,M,L)};function _(b,C){const R=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fi(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(C,null,R,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(C,null,R,f,v,null)}function x(b,C,R,S){let M=null;const L=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=M.uuid,I=C.uuid;let U=l[k];U===void 0&&(U={},l[k]=U);let O=U[I];O===void 0&&(O=M.clone(),U[I]=O,C.addEventListener("dispose",A)),M=O}if(M.visible=C.visible,M.wireframe=C.wireframe,S===$n?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=r.properties.get(M);k.light=R}return M}function y(b,C,R,S,M){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===$n)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const I=t.update(b),U=b.material;if(Array.isArray(U)){const O=I.groups;for(let N=0,$=O.length;N<$;N++){const z=O[N],K=U[z.materialIndex];if(K&&K.visible){const F=x(b,K,S,M);b.onBeforeShadow(r,b,C,R,I,F,z),r.renderBufferDirect(R,null,I,F,b,z),b.onAfterShadow(r,b,C,R,I,F,z)}}}else if(U.visible){const O=x(b,U,S,M);b.onBeforeShadow(r,b,C,R,I,O,null),r.renderBufferDirect(R,null,I,O,b,null),b.onAfterShadow(r,b,C,R,I,O,null)}}const k=b.children;for(let I=0,U=k.length;I<U;I++)y(k[I],C,R,S,M)}function A(b){b.target.removeEventListener("dispose",A);for(const R in l){const S=l[R],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Pv={[ma]:ga,[va]:xa,[_a]:Ma,[ms]:ya,[ga]:ma,[xa]:va,[Ma]:_a,[ya]:ms};function Lv(r,t){function e(){let G=!1;const ut=new ye;let J=null;const et=new ye(0,0,0,0);return{setMask:function(gt){J!==gt&&!G&&(r.colorMask(gt,gt,gt,gt),J=gt)},setLocked:function(gt){G=gt},setClear:function(gt,pt,Ft,ge,Ue){Ue===!0&&(gt*=ge,pt*=ge,Ft*=ge),ut.set(gt,pt,Ft,ge),et.equals(ut)===!1&&(r.clearColor(gt,pt,Ft,ge),et.copy(ut))},reset:function(){G=!1,J=null,et.set(-1,0,0,0)}}}function n(){let G=!1,ut=!1,J=null,et=null,gt=null;return{setReversed:function(pt){if(ut!==pt){const Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const ge=gt;gt=null,this.setClear(ge)}ut=pt},getReversed:function(){return ut},setTest:function(pt){pt?at(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(pt){J!==pt&&!G&&(r.depthMask(pt),J=pt)},setFunc:function(pt){if(ut&&(pt=Pv[pt]),et!==pt){switch(pt){case ma:r.depthFunc(r.NEVER);break;case ga:r.depthFunc(r.ALWAYS);break;case va:r.depthFunc(r.LESS);break;case ms:r.depthFunc(r.LEQUAL);break;case _a:r.depthFunc(r.EQUAL);break;case ya:r.depthFunc(r.GEQUAL);break;case xa:r.depthFunc(r.GREATER);break;case Ma:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}et=pt}},setLocked:function(pt){G=pt},setClear:function(pt){gt!==pt&&(ut&&(pt=1-pt),r.clearDepth(pt),gt=pt)},reset:function(){G=!1,J=null,et=null,gt=null,ut=!1}}}function i(){let G=!1,ut=null,J=null,et=null,gt=null,pt=null,Ft=null,ge=null,Ue=null;return{setTest:function(ie){G||(ie?at(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(ie){ut!==ie&&!G&&(r.stencilMask(ie),ut=ie)},setFunc:function(ie,dn,Bn){(J!==ie||et!==dn||gt!==Bn)&&(r.stencilFunc(ie,dn,Bn),J=ie,et=dn,gt=Bn)},setOp:function(ie,dn,Bn){(pt!==ie||Ft!==dn||ge!==Bn)&&(r.stencilOp(ie,dn,Bn),pt=ie,Ft=dn,ge=Bn)},setLocked:function(ie){G=ie},setClear:function(ie){Ue!==ie&&(r.clearStencil(ie),Ue=ie)},reset:function(){G=!1,ut=null,J=null,et=null,gt=null,pt=null,Ft=null,ge=null,Ue=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,x=null,y=null,A=null,b=null,C=new Wt(0,0,0),R=0,S=!1,M=null,L=null,k=null,I=null,U=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,$=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=$>=2);let K=null,F={};const W=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),ot=new ye().fromArray(W),Z=new ye().fromArray(j);function nt(G,ut,J,et){const gt=new Uint8Array(4),pt=r.createTexture();r.bindTexture(G,pt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<J;Ft++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,et,0,r.RGBA,r.UNSIGNED_BYTE,gt):r.texImage2D(ut+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,gt);return pt}const ht={};ht[r.TEXTURE_2D]=nt(r.TEXTURE_2D,r.TEXTURE_2D,1),ht[r.TEXTURE_CUBE_MAP]=nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[r.TEXTURE_2D_ARRAY]=nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ht[r.TEXTURE_3D]=nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(r.DEPTH_TEST),o.setFunc(ms),qt(!1),Yt(Bc),at(r.CULL_FACE),B(fi);function at(G){h[G]!==!0&&(r.enable(G),h[G]=!0)}function Rt(G){h[G]!==!1&&(r.disable(G),h[G]=!1)}function It(G,ut){return d[G]!==ut?(r.bindFramebuffer(G,ut),d[G]=ut,G===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ut),G===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function Gt(G,ut){let J=f,et=!1;if(G){J=u.get(ut),J===void 0&&(J=[],u.set(ut,J));const gt=G.textures;if(J.length!==gt.length||J[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Ft=gt.length;pt<Ft;pt++)J[pt]=r.COLOR_ATTACHMENT0+pt;J.length=gt.length,et=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,et=!0);et&&r.drawBuffers(J)}function le(G){return g!==G?(r.useProgram(G),g=G,!0):!1}const Zt={[Pi]:r.FUNC_ADD,[rd]:r.FUNC_SUBTRACT,[od]:r.FUNC_REVERSE_SUBTRACT};Zt[ad]=r.MIN,Zt[cd]=r.MAX;const Me={[ld]:r.ZERO,[hd]:r.ONE,[ud]:r.SRC_COLOR,[fa]:r.SRC_ALPHA,[vd]:r.SRC_ALPHA_SATURATE,[md]:r.DST_COLOR,[fd]:r.DST_ALPHA,[dd]:r.ONE_MINUS_SRC_COLOR,[pa]:r.ONE_MINUS_SRC_ALPHA,[gd]:r.ONE_MINUS_DST_COLOR,[pd]:r.ONE_MINUS_DST_ALPHA,[_d]:r.CONSTANT_COLOR,[yd]:r.ONE_MINUS_CONSTANT_COLOR,[xd]:r.CONSTANT_ALPHA,[Md]:r.ONE_MINUS_CONSTANT_ALPHA};function B(G,ut,J,et,gt,pt,Ft,ge,Ue,ie){if(G===fi){v===!0&&(Rt(r.BLEND),v=!1);return}if(v===!1&&(at(r.BLEND),v=!0),G!==sd){if(G!==m||ie!==S){if((p!==Pi||y!==Pi)&&(r.blendEquation(r.FUNC_ADD),p=Pi,y=Pi),ie)switch(G){case hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oc:r.blendFunc(r.ONE,r.ONE);break;case zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,x=null,A=null,b=null,C.set(0,0,0),R=0,m=G,S=ie}return}gt=gt||ut,pt=pt||J,Ft=Ft||et,(ut!==p||gt!==y)&&(r.blendEquationSeparate(Zt[ut],Zt[gt]),p=ut,y=gt),(J!==_||et!==x||pt!==A||Ft!==b)&&(r.blendFuncSeparate(Me[J],Me[et],Me[pt],Me[Ft]),_=J,x=et,A=pt,b=Ft),(ge.equals(C)===!1||Ue!==R)&&(r.blendColor(ge.r,ge.g,ge.b,Ue),C.copy(ge),R=Ue),m=G,S=!1}function en(G,ut){G.side===Ye?Rt(r.CULL_FACE):at(r.CULL_FACE);let J=G.side===Ge;ut&&(J=!J),qt(J),G.blending===hs&&G.transparent===!1?B(fi):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);const et=G.stencilWrite;a.setTest(et),et&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),he(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?at(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function qt(G){M!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),M=G)}function Yt(G){G!==nd?(at(r.CULL_FACE),G!==L&&(G===Bc?r.cullFace(r.BACK):G===id?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),L=G}function Tt(G){G!==k&&(N&&r.lineWidth(G),k=G)}function he(G,ut,J){G?(at(r.POLYGON_OFFSET_FILL),(I!==ut||U!==J)&&(r.polygonOffset(ut,J),I=ut,U=J)):Rt(r.POLYGON_OFFSET_FILL)}function bt(G){G?at(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function P(G){G===void 0&&(G=r.TEXTURE0+O-1),K!==G&&(r.activeTexture(G),K=G)}function E(G,ut,J){J===void 0&&(K===null?J=r.TEXTURE0+O-1:J=K);let et=F[J];et===void 0&&(et={type:void 0,texture:void 0},F[J]=et),(et.type!==G||et.texture!==ut)&&(K!==J&&(r.activeTexture(J),K=J),r.bindTexture(G,ut||ht[G]),et.type=G,et.texture=ut)}function X(){const G=F[K];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function tt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(G){ot.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),ot.copy(G))}function Mt(G){Z.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function $t(G,ut){let J=l.get(ut);J===void 0&&(J=new WeakMap,l.set(ut,J));let et=J.get(G);et===void 0&&(et=r.getUniformBlockIndex(ut,G.name),J.set(G,et))}function Ot(G,ut){const et=l.get(ut).get(G);c.get(ut)!==et&&(r.uniformBlockBinding(ut,et,G.__bindingPointIndex),c.set(ut,et))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},K=null,F={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,x=null,y=null,A=null,b=null,C=new Wt(0,0,0),R=0,S=!1,M=null,L=null,k=null,I=null,U=null,ot.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:at,disable:Rt,bindFramebuffer:It,drawBuffers:Gt,useProgram:le,setBlending:B,setMaterial:en,setFlipSided:qt,setCullFace:Yt,setLineWidth:Tt,setPolygonOffset:he,setScissorTest:bt,activeTexture:P,bindTexture:E,unbindTexture:X,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:xt,texImage3D:Pt,updateUBOMapping:$t,uniformBlockBinding:Ot,texStorage2D:jt,texStorage3D:rt,texSubImage2D:Q,texSubImage3D:Et,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:Nt,viewport:Mt,reset:ce}}function Iv(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return f?new OffscreenCanvas(P,E):no("canvas")}function v(P,E,X){let tt=1;const it=bt(P);if((it.width>X||it.height>X)&&(tt=X/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(tt*it.width),Et=Math.floor(tt*it.height);d===void 0&&(d=g(Q,Et));const ft=E?g(Q,Et):d;return ft.width=Q,ft.height=Et,ft.getContext("2d").drawImage(P,0,0,Q,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+Et+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(P,E,X,tt,it=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=E;if(E===r.RED&&(X===r.FLOAT&&(Q=r.R32F),X===r.HALF_FLOAT&&(Q=r.R16F),X===r.UNSIGNED_BYTE&&(Q=r.R8)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.R8UI),X===r.UNSIGNED_SHORT&&(Q=r.R16UI),X===r.UNSIGNED_INT&&(Q=r.R32UI),X===r.BYTE&&(Q=r.R8I),X===r.SHORT&&(Q=r.R16I),X===r.INT&&(Q=r.R32I)),E===r.RG&&(X===r.FLOAT&&(Q=r.RG32F),X===r.HALF_FLOAT&&(Q=r.RG16F),X===r.UNSIGNED_BYTE&&(Q=r.RG8)),E===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RG8UI),X===r.UNSIGNED_SHORT&&(Q=r.RG16UI),X===r.UNSIGNED_INT&&(Q=r.RG32UI),X===r.BYTE&&(Q=r.RG8I),X===r.SHORT&&(Q=r.RG16I),X===r.INT&&(Q=r.RG32I)),E===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),X===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),X===r.UNSIGNED_INT&&(Q=r.RGB32UI),X===r.BYTE&&(Q=r.RGB8I),X===r.SHORT&&(Q=r.RGB16I),X===r.INT&&(Q=r.RGB32I)),E===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),X===r.UNSIGNED_INT&&(Q=r.RGBA32UI),X===r.BYTE&&(Q=r.RGBA8I),X===r.SHORT&&(Q=r.RGBA16I),X===r.INT&&(Q=r.RGBA32I)),E===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),E===r.RGBA){const Et=it?to:Qt.getTransfer(tt);X===r.FLOAT&&(Q=r.RGBA32F),X===r.HALF_FLOAT&&(Q=r.RGBA16F),X===r.UNSIGNED_BYTE&&(Q=Et===oe?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function y(P,E){let X;return P?E===null||E===Ui||E===_s?X=r.DEPTH24_STENCIL8:E===Kn?X=r.DEPTH32F_STENCIL8:E===tr&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ui||E===_s?X=r.DEPTH_COMPONENT24:E===Kn?X=r.DEPTH_COMPONENT32F:E===tr&&(X=r.DEPTH_COMPONENT16),X}function A(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function b(P){const E=P.target;E.removeEventListener("dispose",b),R(E),E.isVideoTexture&&h.delete(E)}function C(P){const E=P.target;E.removeEventListener("dispose",C),M(E)}function R(P){const E=n.get(P);if(E.__webglInit===void 0)return;const X=P.source,tt=u.get(X);if(tt){const it=tt[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(P),Object.keys(tt).length===0&&u.delete(X)}n.remove(P)}function S(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const X=P.source,tt=u.get(X);delete tt[E.__cacheKey],o.memory.textures--}function M(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(E.__webglFramebuffer[tt]))for(let it=0;it<E.__webglFramebuffer[tt].length;it++)r.deleteFramebuffer(E.__webglFramebuffer[tt][it]);else r.deleteFramebuffer(E.__webglFramebuffer[tt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let tt=0;tt<E.__webglFramebuffer.length;tt++)r.deleteFramebuffer(E.__webglFramebuffer[tt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let tt=0;tt<E.__webglColorRenderbuffer.length;tt++)E.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[tt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=P.textures;for(let tt=0,it=X.length;tt<it;tt++){const Q=n.get(X[tt]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(X[tt])}n.remove(P)}let L=0;function k(){L=0}function I(){const P=L;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function U(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function O(P,E){const X=n.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(X,P,E);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function N(P,E){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Z(X,P,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function $(P,E){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Z(X,P,E);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function z(P,E){const X=n.get(P);if(P.version>0&&X.__version!==P.version){nt(X,P,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const K={[Ni]:r.REPEAT,[jn]:r.CLAMP_TO_EDGE,[Ea]:r.MIRRORED_REPEAT},F={[Tn]:r.NEAREST,[Pd]:r.NEAREST_MIPMAP_NEAREST,[ar]:r.NEAREST_MIPMAP_LINEAR,[wn]:r.LINEAR,[Mo]:r.LINEAR_MIPMAP_NEAREST,[Di]:r.LINEAR_MIPMAP_LINEAR},W={[Ud]:r.NEVER,[Gd]:r.ALWAYS,[Fd]:r.LESS,[Qh]:r.LEQUAL,[Bd]:r.EQUAL,[kd]:r.GEQUAL,[Od]:r.GREATER,[zd]:r.NOTEQUAL};function j(P,E){if(E.type===Kn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===Mo||E.magFilter===ar||E.magFilter===Di||E.minFilter===wn||E.minFilter===Mo||E.minFilter===ar||E.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,K[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,K[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,K[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,F[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,F[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,W[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==ar&&E.minFilter!==Di||E.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ot(P,E){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",b));const tt=E.source;let it=u.get(tt);it===void 0&&(it={},u.set(tt,it));const Q=U(E);if(Q!==P.__cacheKey){it[Q]===void 0&&(it[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),it[Q].usedTimes++;const Et=it[P.__cacheKey];Et!==void 0&&(it[P.__cacheKey].usedTimes--,Et.usedTimes===0&&S(E)),P.__cacheKey=Q,P.__webglTexture=it[Q].texture}return X}function Z(P,E,X){let tt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=r.TEXTURE_3D);const it=ot(P,E),Q=E.source;e.bindTexture(tt,P.__webglTexture,r.TEXTURE0+X);const Et=n.get(Q);if(Q.version!==Et.__version||it===!0){e.activeTexture(r.TEXTURE0+X);const ft=Qt.getPrimaries(Qt.workingColorSpace),yt=E.colorSpace===hi?null:Qt.getPrimaries(E.colorSpace),jt=E.colorSpace===hi||ft===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let rt=v(E.image,!1,i.maxTextureSize);rt=he(E,rt);const xt=s.convert(E.format,E.colorSpace),Pt=s.convert(E.type);let Nt=x(E.internalFormat,xt,Pt,E.colorSpace,E.isVideoTexture);j(tt,E);let Mt;const $t=E.mipmaps,Ot=E.isVideoTexture!==!0,ce=Et.__version===void 0||it===!0,G=Q.dataReady,ut=A(E,rt);if(E.isDepthTexture)Nt=y(E.format===ys,E.type),ce&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Nt,rt.width,rt.height,0,xt,Pt,null));else if(E.isDataTexture)if($t.length>0){Ot&&ce&&e.texStorage2D(r.TEXTURE_2D,ut,Nt,$t[0].width,$t[0].height);for(let J=0,et=$t.length;J<et;J++)Mt=$t[J],Ot?G&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,Mt.width,Mt.height,xt,Pt,Mt.data):e.texImage2D(r.TEXTURE_2D,J,Nt,Mt.width,Mt.height,0,xt,Pt,Mt.data);E.generateMipmaps=!1}else Ot?(ce&&e.texStorage2D(r.TEXTURE_2D,ut,Nt,rt.width,rt.height),G&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,xt,Pt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Nt,rt.width,rt.height,0,xt,Pt,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Nt,$t[0].width,$t[0].height,rt.depth);for(let J=0,et=$t.length;J<et;J++)if(Mt=$t[J],E.format!==Sn)if(xt!==null)if(Ot){if(G)if(E.layerUpdates.size>0){const gt=vl(Mt.width,Mt.height,E.format,E.type);for(const pt of E.layerUpdates){const Ft=Mt.data.subarray(pt*gt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,pt,Mt.width,Mt.height,1,xt,Ft)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Mt.width,Mt.height,rt.depth,xt,Mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Nt,Mt.width,Mt.height,rt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?G&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Mt.width,Mt.height,rt.depth,xt,Pt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,J,Nt,Mt.width,Mt.height,rt.depth,0,xt,Pt,Mt.data)}else{Ot&&ce&&e.texStorage2D(r.TEXTURE_2D,ut,Nt,$t[0].width,$t[0].height);for(let J=0,et=$t.length;J<et;J++)Mt=$t[J],E.format!==Sn?xt!==null?Ot?G&&e.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,J,Nt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?G&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,Mt.width,Mt.height,xt,Pt,Mt.data):e.texImage2D(r.TEXTURE_2D,J,Nt,Mt.width,Mt.height,0,xt,Pt,Mt.data)}else if(E.isDataArrayTexture)if(Ot){if(ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Nt,rt.width,rt.height,rt.depth),G)if(E.layerUpdates.size>0){const J=vl(rt.width,rt.height,E.format,E.type);for(const et of E.layerUpdates){const gt=rt.data.subarray(et*J/rt.data.BYTES_PER_ELEMENT,(et+1)*J/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,et,rt.width,rt.height,1,xt,Pt,gt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,Pt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,xt,Pt,rt.data);else if(E.isData3DTexture)Ot?(ce&&e.texStorage3D(r.TEXTURE_3D,ut,Nt,rt.width,rt.height,rt.depth),G&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,Pt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,xt,Pt,rt.data);else if(E.isFramebufferTexture){if(ce)if(Ot)e.texStorage2D(r.TEXTURE_2D,ut,Nt,rt.width,rt.height);else{let J=rt.width,et=rt.height;for(let gt=0;gt<ut;gt++)e.texImage2D(r.TEXTURE_2D,gt,Nt,J,et,0,xt,Pt,null),J>>=1,et>>=1}}else if($t.length>0){if(Ot&&ce){const J=bt($t[0]);e.texStorage2D(r.TEXTURE_2D,ut,Nt,J.width,J.height)}for(let J=0,et=$t.length;J<et;J++)Mt=$t[J],Ot?G&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,xt,Pt,Mt):e.texImage2D(r.TEXTURE_2D,J,Nt,xt,Pt,Mt);E.generateMipmaps=!1}else if(Ot){if(ce){const J=bt(rt);e.texStorage2D(r.TEXTURE_2D,ut,Nt,J.width,J.height)}G&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,Pt,rt)}else e.texImage2D(r.TEXTURE_2D,0,Nt,xt,Pt,rt);m(E)&&p(tt),Et.__version=Q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function nt(P,E,X){if(E.image.length!==6)return;const tt=ot(P,E),it=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+X);const Q=n.get(it);if(it.version!==Q.__version||tt===!0){e.activeTexture(r.TEXTURE0+X);const Et=Qt.getPrimaries(Qt.workingColorSpace),ft=E.colorSpace===hi?null:Qt.getPrimaries(E.colorSpace),yt=E.colorSpace===hi||Et===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const jt=E.isCompressedTexture||E.image[0].isCompressedTexture,rt=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let et=0;et<6;et++)!jt&&!rt?xt[et]=v(E.image[et],!0,i.maxCubemapSize):xt[et]=rt?E.image[et].image:E.image[et],xt[et]=he(E,xt[et]);const Pt=xt[0],Nt=s.convert(E.format,E.colorSpace),Mt=s.convert(E.type),$t=x(E.internalFormat,Nt,Mt,E.colorSpace),Ot=E.isVideoTexture!==!0,ce=Q.__version===void 0||tt===!0,G=it.dataReady;let ut=A(E,Pt);j(r.TEXTURE_CUBE_MAP,E);let J;if(jt){Ot&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,$t,Pt.width,Pt.height);for(let et=0;et<6;et++){J=xt[et].mipmaps;for(let gt=0;gt<J.length;gt++){const pt=J[gt];E.format!==Sn?Nt!==null?Ot?G&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Nt,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,$t,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?G&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,pt.width,pt.height,Nt,Mt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,$t,pt.width,pt.height,0,Nt,Mt,pt.data)}}}else{if(J=E.mipmaps,Ot&&ce){J.length>0&&ut++;const et=bt(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,$t,et.width,et.height)}for(let et=0;et<6;et++)if(rt){Ot?G&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,xt[et].width,xt[et].height,Nt,Mt,xt[et].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,xt[et].width,xt[et].height,0,Nt,Mt,xt[et].data);for(let gt=0;gt<J.length;gt++){const Ft=J[gt].image[et].image;Ot?G&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Ft.width,Ft.height,Nt,Mt,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,$t,Ft.width,Ft.height,0,Nt,Mt,Ft.data)}}else{Ot?G&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Nt,Mt,xt[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,Nt,Mt,xt[et]);for(let gt=0;gt<J.length;gt++){const pt=J[gt];Ot?G&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,Nt,Mt,pt.image[et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,$t,Nt,Mt,pt.image[et])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),Q.__version=it.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ht(P,E,X,tt,it,Q){const Et=s.convert(X.format,X.colorSpace),ft=s.convert(X.type),yt=x(X.internalFormat,Et,ft,X.colorSpace),jt=n.get(E),rt=n.get(X);if(rt.__renderTarget=E,!jt.__hasExternalTextures){const xt=Math.max(1,E.width>>Q),Pt=Math.max(1,E.height>>Q);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,yt,xt,Pt,E.depth,0,Et,ft,null):e.texImage2D(it,Q,yt,xt,Pt,0,Et,ft,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),Yt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,it,rt.__webglTexture,0,qt(E)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,it,rt.__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(P,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const tt=E.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,Q=y(E.stencilBuffer,it),Et=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=qt(E);Yt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,Q,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,Q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Q,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,P)}else{const tt=E.textures;for(let it=0;it<tt.length;it++){const Q=tt[it],Et=s.convert(Q.format,Q.colorSpace),ft=s.convert(Q.type),yt=x(Q.internalFormat,Et,ft,Q.colorSpace),jt=qt(E);X&&Yt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,yt,E.width,E.height):Yt(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,yt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,yt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(E.depthTexture);tt.__renderTarget=E,(!tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const it=tt.__webglTexture,Q=qt(E);if(E.depthTexture.format===us)Yt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0);else if(E.depthTexture.format===ys)Yt(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function It(P){const E=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),tt){const it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=tt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,P)}else if(X){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]===void 0)E.__webglDepthbuffer[tt]=r.createRenderbuffer(),at(E.__webglDepthbuffer[tt],P,!1);else{const it=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[tt];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),at(E.__webglDepthbuffer,P,!1);else{const tt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,it),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,it)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(P,E,X){const tt=n.get(P);E!==void 0&&ht(tt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&It(P)}function le(P){const E=P.texture,X=n.get(P),tt=n.get(E);P.addEventListener("dispose",C);const it=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=E.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let yt=0;yt<E.mipmaps.length;yt++)X.__webglFramebuffer[ft][yt]=r.createFramebuffer()}else X.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<E.mipmaps.length;ft++)X.__webglFramebuffer[ft]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Et)for(let ft=0,yt=it.length;ft<yt;ft++){const jt=n.get(it[ft]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&Yt(P)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ft=0;ft<it.length;ft++){const yt=it[ft];X.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);const jt=s.convert(yt.format,yt.colorSpace),rt=s.convert(yt.type),xt=x(yt.internalFormat,jt,rt,yt.colorSpace,P.isXRRenderTarget===!0),Pt=qt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,xt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,X.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),at(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),j(r.TEXTURE_CUBE_MAP,E);for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)ht(X.__webglFramebuffer[ft][yt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else ht(X.__webglFramebuffer[ft],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(E)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ft=0,yt=it.length;ft<yt;ft++){const jt=it[ft],rt=n.get(jt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),j(r.TEXTURE_2D,jt),ht(X.__webglFramebuffer,P,jt,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,0),m(jt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ft=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ft,tt.__webglTexture),j(ft,E),E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)ht(X.__webglFramebuffer[yt],P,E,r.COLOR_ATTACHMENT0,ft,yt);else ht(X.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,ft,0);m(E)&&p(ft),e.unbindTexture()}P.depthBuffer&&It(P)}function Zt(P){const E=P.textures;for(let X=0,tt=E.length;X<tt;X++){const it=E[X];if(m(it)){const Q=_(P),Et=n.get(it).__webglTexture;e.bindTexture(Q,Et),p(Q),e.unbindTexture()}}}const Me=[],B=[];function en(P){if(P.samples>0){if(Yt(P)===!1){const E=P.textures,X=P.width,tt=P.height;let it=r.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=n.get(P),ft=E.length>1;if(ft)for(let yt=0;yt<E.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let yt=0;yt<E.length;yt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);const jt=n.get(E[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,jt,0)}r.blitFramebuffer(0,0,X,tt,0,0,X,tt,it,r.NEAREST),c===!0&&(Me.length=0,B.length=0,Me.push(r.COLOR_ATTACHMENT0+yt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Me.push(Q),B.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<E.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);const jt=n.get(E[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,jt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function qt(P){return Math.min(i.maxSamples,P.samples)}function Yt(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function he(P,E){const X=P.colorSpace,tt=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==xs&&X!==hi&&(Qt.getTransfer(X)===oe?(tt!==Sn||it!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=N,this.setTexture3D=$,this.setTextureCube=z,this.rebindTextures=Gt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Yt}function Nv(r,t){function e(n,i=hi){let s;const o=Qt.getTransfer(i);if(n===ei)return r.UNSIGNED_BYTE;if(n===lc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return r.BYTE;if(n===Hh)return r.SHORT;if(n===tr)return r.UNSIGNED_SHORT;if(n===cc)return r.INT;if(n===Ui)return r.UNSIGNED_INT;if(n===Kn)return r.FLOAT;if(n===ir)return r.HALF_FLOAT;if(n===Xh)return r.ALPHA;if(n===qh)return r.RGB;if(n===Sn)return r.RGBA;if(n===Yh)return r.LUMINANCE;if(n===$h)return r.LUMINANCE_ALPHA;if(n===us)return r.DEPTH_COMPONENT;if(n===ys)return r.DEPTH_STENCIL;if(n===Zh)return r.RED;if(n===uc)return r.RED_INTEGER;if(n===jh)return r.RG;if(n===dc)return r.RG_INTEGER;if(n===fc)return r.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===$r)if(o===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Ta||n===Aa||n===Ca)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ba)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Pa||n===La)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ra||n===Pa)return o===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===La)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Na||n===Da||n===Ua||n===Fa||n===Ba||n===Oa||n===za||n===ka||n===Ga||n===Va||n===Ha||n===Wa||n===Xa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ia)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr||n===qa||n===Ya)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Zr)return o===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kh||n===$a||n===Za||n===ja)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const Dv={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fv=`
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

}`;class Bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ve,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _i({vertexShader:Uv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new De(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ov extends Es{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const v=new Bv,m=e.getContextAttributes();let p=null,_=null;const x=[],y=[],A=new St;let b=null;const C=new Qe;C.viewport=new ye;const R=new Qe;R.viewport=new ye;const S=[C,R],M=new rp;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=x[Z];return nt===void 0&&(nt=new ta,x[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=x[Z];return nt===void 0&&(nt=new ta,x[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=x[Z];return nt===void 0&&(nt=new ta,x[Z]=nt),nt.getHandSpace()};function I(Z){const nt=y.indexOf(Z.inputSource);if(nt===-1)return;const ht=x[nt];ht!==void 0&&(ht.update(Z.inputSource,Z.frame,l||o),ht.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",O);for(let Z=0;Z<x.length;Z++){const nt=y[Z];nt!==null&&(y[Z]=null,x[Z].disconnect(nt))}L=null,k=null,v.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,_=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",U),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ht=null,at=null,Rt=null;m.depth&&(Rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?ys:us,at=m.stencil?_s:Ui);const It={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(It),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Fi(u.textureWidth,u.textureHeight,{format:Sn,type:ei,depthTexture:new fu(u.textureWidth,u.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Fi(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(Z){for(let nt=0;nt<Z.removed.length;nt++){const ht=Z.removed[nt],at=y.indexOf(ht);at>=0&&(y[at]=null,x[at].disconnect(ht))}for(let nt=0;nt<Z.added.length;nt++){const ht=Z.added[nt];let at=y.indexOf(ht);if(at===-1){for(let It=0;It<x.length;It++)if(It>=y.length){y.push(ht),at=It;break}else if(y[It]===null){y[It]=ht,at=It;break}if(at===-1)break}const Rt=x[at];Rt&&Rt.connect(ht)}}const N=new D,$=new D;function z(Z,nt,ht){N.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(ht.matrixWorld);const at=N.distanceTo($),Rt=nt.projectionMatrix.elements,It=ht.projectionMatrix.elements,Gt=Rt[14]/(Rt[10]-1),le=Rt[14]/(Rt[10]+1),Zt=(Rt[9]+1)/Rt[5],Me=(Rt[9]-1)/Rt[5],B=(Rt[8]-1)/Rt[0],en=(It[8]+1)/It[0],qt=Gt*B,Yt=Gt*en,Tt=at/(-B+en),he=Tt*-B;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(he),Z.translateZ(Tt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Rt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const bt=Gt+Tt,P=le+Tt,E=qt-he,X=Yt+(at-he),tt=Zt*le/P*bt,it=Me*le/P*bt;Z.projectionMatrix.makePerspective(E,X,tt,it,bt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function K(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let nt=Z.near,ht=Z.far;v.texture!==null&&(v.depthNear>0&&(nt=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),M.near=R.near=C.near=nt,M.far=R.far=C.far=ht,(L!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),C.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,M.layers.mask=C.layers.mask|R.layers.mask;const at=Z.parent,Rt=M.cameras;K(M,at);for(let It=0;It<Rt.length;It++)K(Rt[It],at);Rt.length===2?z(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),F(Z,M,at)};function F(Z,nt,ht){ht===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(ht.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ms*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let W=null;function j(Z,nt){if(h=nt.getViewerPose(l||o),g=nt,h!==null){const ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let at=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let It=0;It<ht.length;It++){const Gt=ht[It];let le=null;if(f!==null)le=f.getViewport(Gt);else{const Me=d.getViewSubImage(u,Gt);le=Me.viewport,It===0&&(t.setRenderTargetTextures(_,Me.colorTexture,u.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(_))}let Zt=S[It];Zt===void 0&&(Zt=new Qe,Zt.layers.enable(It),Zt.viewport=new ye,S[It]=Zt),Zt.matrix.fromArray(Gt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Gt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(le.x,le.y,le.width,le.height),It===0&&(M.matrix.copy(Zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(Zt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const It=d.getDepthInformation(ht[0]);It&&It.isValid&&It.texture&&v.init(t,It,i.renderState)}}for(let ht=0;ht<x.length;ht++){const at=y[ht],Rt=x[ht];at!==null&&Rt!==void 0&&Rt.update(at,nt,l||o)}W&&W(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ot=new xu;ot.setAnimationLoop(j),this.setAnimationLoop=function(Z){W=Z},this.dispose=function(){}}}const Ti=new Un,zv=new de;function kv(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,Ti.copy(y),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(zv.makeRotationFromEuler(Ti)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gv(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function l(_,x){let y=i[_.id];y===void 0&&(g(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(_,A);const b=t.render.frame;s[_.id]!==b&&(u(_),s[_.id]=b)}function h(_){const x=d();_.__bindingPointIndex=x;const y=r.createBuffer(),A=_.__size,b=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const x=i[_.id],y=_.uniforms,A=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,C=y.length;b<C;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,M=R.length;S<M;S++){const L=R[S];if(f(L,b,S,A)===!0){const k=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let O=0;O<I.length;O++){const N=I[O],$=v(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,k+U,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,x,y,A){const b=_.value,C=x+"_"+y;if(A[C]===void 0)return typeof b=="number"||typeof b=="boolean"?A[C]=b:A[C]=b.clone(),!0;{const R=A[C];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return A[C]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(_){const x=_.uniforms;let y=0;const A=16;for(let C=0,R=x.length;C<R;C++){const S=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,L=S.length;M<L;M++){const k=S[M],I=Array.isArray(k.value)?k.value:[k.value];for(let U=0,O=I.length;U<O;U++){const N=I[U],$=v(N),z=y%A,K=z%$.boundary,F=z+K;y+=K,F!==0&&A-F<$.storage&&(y+=A-F),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=$.storage}}}const b=y%A;return b>0&&(y+=A-b),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Vv{constructor(t={}){const{canvas:e=rf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this.toneMapping=pi,this.toneMappingExposure=1;const y=this;let A=!1,b=0,C=0,R=null,S=-1,M=null;const L=new ye,k=new ye;let I=null;const U=new Wt(0);let O=0,N=e.width,$=e.height,z=1,K=null,F=null;const W=new ye(0,0,N,$),j=new ye(0,0,N,$);let ot=!1;const Z=new mc;let nt=!1,ht=!1;this.transmissionResolutionScale=1;const at=new de,Rt=new de,It=new D,Gt=new ye,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Me(){return R===null?z:1}let B=n;function en(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),B===null){const V="webgl2";if(B=en(V,T),B===null)throw en(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let qt,Yt,Tt,he,bt,P,E,X,tt,it,Q,Et,ft,yt,jt,rt,xt,Pt,Nt,Mt,$t,Ot,ce,G;function ut(){qt=new Kg(B),qt.init(),Ot=new Nv(B,qt),Yt=new Xg(B,qt,t,Ot),Tt=new Lv(B,qt),Yt.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),he=new t0(B),bt=new _v,P=new Iv(B,qt,Tt,bt,Yt,Ot,he),E=new Yg(y),X=new jg(y),tt=new ap(B),ce=new Hg(B,tt),it=new Jg(B,tt,he,ce),Q=new n0(B,it,tt,he),Nt=new e0(B,Yt,P),rt=new qg(bt),Et=new vv(y,E,X,qt,Yt,ce,rt),ft=new kv(y,bt),yt=new xv,jt=new Tv(qt),Pt=new Vg(y,E,X,Tt,Q,f,c),xt=new Rv(y,Q,Yt),G=new Gv(B,he,Yt,Tt),Mt=new Wg(B,qt,he),$t=new Qg(B,qt,he),he.programs=Et.programs,y.capabilities=Yt,y.extensions=qt,y.properties=bt,y.renderLists=yt,y.shadowMap=xt,y.state=Tt,y.info=he}ut();const J=new Ov(y,B);this.xr=J,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=qt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=qt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(N,$,!1))},this.getSize=function(T){return T.set(N,$)},this.setSize=function(T,V,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,$=V,e.width=Math.floor(T*z),e.height=Math.floor(V*z),q===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(N*z,$*z).floor()},this.setDrawingBufferSize=function(T,V,q){N=T,$=V,z=q,e.width=Math.floor(T*q),e.height=Math.floor(V*q),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(W)},this.setViewport=function(T,V,q,Y){T.isVector4?W.set(T.x,T.y,T.z,T.w):W.set(T,V,q,Y),Tt.viewport(L.copy(W).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,V,q,Y){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,V,q,Y),Tt.scissor(k.copy(j).multiplyScalar(z).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){Tt.setScissorTest(ot=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(T=!0,V=!0,q=!0){let Y=0;if(T){let H=!1;if(R!==null){const st=R.texture.format;H=st===fc||st===dc||st===uc}if(H){const st=R.texture.type,dt=st===ei||st===Ui||st===tr||st===_s||st===lc||st===hc,_t=Pt.getClearColor(),wt=Pt.getClearAlpha(),Dt=_t.r,Ut=_t.g,At=_t.b;dt?(g[0]=Dt,g[1]=Ut,g[2]=At,g[3]=wt,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=Dt,v[1]=Ut,v[2]=At,v[3]=wt,B.clearBufferiv(B.COLOR,0,v))}else Y|=B.COLOR_BUFFER_BIT}V&&(Y|=B.DEPTH_BUFFER_BIT),q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Pt.dispose(),yt.dispose(),jt.dispose(),bt.dispose(),E.dispose(),X.dispose(),Q.dispose(),ce.dispose(),G.dispose(),Et.dispose(),J.dispose(),J.removeEventListener("sessionstart",Pc),J.removeEventListener("sessionend",Lc),yi.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=he.autoReset,V=xt.enabled,q=xt.autoUpdate,Y=xt.needsUpdate,H=xt.type;ut(),he.autoReset=T,xt.enabled=V,xt.autoUpdate=q,xt.needsUpdate=Y,xt.type=H}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ft(T){const V=T.target;V.removeEventListener("dispose",Ft),ge(V)}function ge(T){Ue(T),bt.remove(T)}function Ue(T){const V=bt.get(T).programs;V!==void 0&&(V.forEach(function(q){Et.releaseProgram(q)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,q,Y,H,st){V===null&&(V=le);const dt=H.isMesh&&H.matrixWorld.determinant()<0,_t=ju(T,V,q,Y,H);Tt.setMaterial(Y,dt);let wt=q.index,Dt=1;if(Y.wireframe===!0){if(wt=it.getWireframeAttribute(q),wt===void 0)return;Dt=2}const Ut=q.drawRange,At=q.attributes.position;let Kt=Ut.start*Dt,ee=(Ut.start+Ut.count)*Dt;st!==null&&(Kt=Math.max(Kt,st.start*Dt),ee=Math.min(ee,(st.start+st.count)*Dt)),wt!==null?(Kt=Math.max(Kt,0),ee=Math.min(ee,wt.count)):At!=null&&(Kt=Math.max(Kt,0),ee=Math.min(ee,At.count));const Ee=ee-Kt;if(Ee<0||Ee===1/0)return;ce.setup(H,Y,_t,q,wt);let ve,Jt=Mt;if(wt!==null&&(ve=tt.get(wt),Jt=$t,Jt.setIndex(ve)),H.isMesh)Y.wireframe===!0?(Tt.setLineWidth(Y.wireframeLinewidth*Me()),Jt.setMode(B.LINES)):Jt.setMode(B.TRIANGLES);else if(H.isLine){let Ct=Y.linewidth;Ct===void 0&&(Ct=1),Tt.setLineWidth(Ct*Me()),H.isLineSegments?Jt.setMode(B.LINES):H.isLineLoop?Jt.setMode(B.LINE_LOOP):Jt.setMode(B.LINE_STRIP)}else H.isPoints?Jt.setMode(B.POINTS):H.isSprite&&Jt.setMode(B.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Jt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ct=H._multiDrawStarts,Ne=H._multiDrawCounts,ne=H._multiDrawCount,fn=wt?tt.get(wt).bytesPerElement:1,ki=bt.get(Y).currentProgram.getUniforms();for(let je=0;je<ne;je++)ki.setValue(B,"_gl_DrawID",je),Jt.render(Ct[je]/fn,Ne[je])}else if(H.isInstancedMesh)Jt.renderInstances(Kt,Ee,H.count);else if(q.isInstancedBufferGeometry){const Ct=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ne=Math.min(q.instanceCount,Ct);Jt.renderInstances(Kt,Ee,Ne)}else Jt.render(Kt,Ee)};function ie(T,V,q){T.transparent===!0&&T.side===Ye&&T.forceSinglePass===!1?(T.side=Ge,T.needsUpdate=!0,or(T,V,q),T.side=vi,T.needsUpdate=!0,or(T,V,q),T.side=Ye):or(T,V,q)}this.compile=function(T,V,q=null){q===null&&(q=T),p=jt.get(q),p.init(V),x.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==q&&T.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Y=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const st=H.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const _t=st[dt];ie(_t,q,H),Y.add(_t)}else ie(st,q,H),Y.add(st)}),x.pop(),p=null,Y},this.compileAsync=function(T,V,q=null){const Y=this.compile(T,V,q);return new Promise(H=>{function st(){if(Y.forEach(function(dt){bt.get(dt).currentProgram.isReady()&&Y.delete(dt)}),Y.size===0){H(T);return}setTimeout(st,10)}qt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let dn=null;function Bn(T){dn&&dn(T)}function Pc(){yi.stop()}function Lc(){yi.start()}const yi=new xu;yi.setAnimationLoop(Bn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(T){dn=T,J.setAnimationLoop(T),T===null?yi.stop():yi.start()},J.addEventListener("sessionstart",Pc),J.addEventListener("sessionend",Lc),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(V),V=J.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,V,R),p=jt.get(T,x.length),p.init(V),x.push(p),Rt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix(Rt),ht=this.localClippingEnabled,nt=rt.init(this.clippingPlanes,ht),m=yt.get(T,_.length),m.init(),_.push(m),J.enabled===!0&&J.isPresenting===!0){const st=y.xr.getDepthSensingMesh();st!==null&&yo(st,V,-1/0,y.sortObjects)}yo(T,V,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,F),Zt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Zt&&Pt.addToRenderList(m,T),this.info.render.frame++,nt===!0&&rt.beginShadows();const q=p.state.shadowsArray;xt.render(q,T,V),nt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,H=m.transmissive;if(p.setupLights(),V.isArrayCamera){const st=V.cameras;if(H.length>0)for(let dt=0,_t=st.length;dt<_t;dt++){const wt=st[dt];Nc(Y,H,T,wt)}Zt&&Pt.render(T);for(let dt=0,_t=st.length;dt<_t;dt++){const wt=st[dt];Ic(m,T,wt,wt.viewport)}}else H.length>0&&Nc(Y,H,T,V),Zt&&Pt.render(T),Ic(m,T,V);R!==null&&C===0&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,V),ce.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],nt===!0&&rt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function yo(T,V,q,Y){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){Y&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Rt);const dt=Q.update(T),_t=T.material;_t.visible&&m.push(T,dt,_t,q,Gt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const dt=Q.update(T),_t=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Gt.copy(dt.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(Rt)),Array.isArray(_t)){const wt=dt.groups;for(let Dt=0,Ut=wt.length;Dt<Ut;Dt++){const At=wt[Dt],Kt=_t[At.materialIndex];Kt&&Kt.visible&&m.push(T,dt,Kt,q,Gt.z,At)}}else _t.visible&&m.push(T,dt,_t,q,Gt.z,null)}}const st=T.children;for(let dt=0,_t=st.length;dt<_t;dt++)yo(st[dt],V,q,Y)}function Ic(T,V,q,Y){const H=T.opaque,st=T.transmissive,dt=T.transparent;p.setupLightsView(q),nt===!0&&rt.setGlobalState(y.clippingPlanes,q),Y&&Tt.viewport(L.copy(Y)),H.length>0&&rr(H,V,q),st.length>0&&rr(st,V,q),dt.length>0&&rr(dt,V,q),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Nc(T,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Fi(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?ir:ei,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const st=p.state.transmissionRenderTarget[Y.id],dt=Y.viewport||L;st.setSize(dt.z*y.transmissionResolutionScale,dt.w*y.transmissionResolutionScale);const _t=y.getRenderTarget();y.setRenderTarget(st),y.getClearColor(U),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Zt&&Pt.render(q);const wt=y.toneMapping;y.toneMapping=pi;const Dt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),nt===!0&&rt.setGlobalState(y.clippingPlanes,Y),rr(T,q,Y),P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let At=0,Kt=V.length;At<Kt;At++){const ee=V[At],Ee=ee.object,ve=ee.geometry,Jt=ee.material,Ct=ee.group;if(Jt.side===Ye&&Ee.layers.test(Y.layers)){const Ne=Jt.side;Jt.side=Ge,Jt.needsUpdate=!0,Dc(Ee,q,Y,ve,Jt,Ct),Jt.side=Ne,Jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st))}y.setRenderTarget(_t),y.setClearColor(U,O),Dt!==void 0&&(Y.viewport=Dt),y.toneMapping=wt}function rr(T,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let H=0,st=T.length;H<st;H++){const dt=T[H],_t=dt.object,wt=dt.geometry,Dt=Y===null?dt.material:Y,Ut=dt.group;_t.layers.test(q.layers)&&Dc(_t,V,q,wt,Dt,Ut)}}function Dc(T,V,q,Y,H,st){T.onBeforeRender(y,V,q,Y,H,st),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(y,V,q,Y,T,st),H.transparent===!0&&H.side===Ye&&H.forceSinglePass===!1?(H.side=Ge,H.needsUpdate=!0,y.renderBufferDirect(q,V,Y,H,T,st),H.side=vi,H.needsUpdate=!0,y.renderBufferDirect(q,V,Y,H,T,st),H.side=Ye):y.renderBufferDirect(q,V,Y,H,T,st),T.onAfterRender(y,V,q,Y,H,st)}function or(T,V,q){V.isScene!==!0&&(V=le);const Y=bt.get(T),H=p.state.lights,st=p.state.shadowsArray,dt=H.state.version,_t=Et.getParameters(T,H.state,st,V,q),wt=Et.getProgramCacheKey(_t);let Dt=Y.programs;Y.environment=T.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(T.isMeshStandardMaterial?X:E).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",Ft),Dt=new Map,Y.programs=Dt);let Ut=Dt.get(wt);if(Ut!==void 0){if(Y.currentProgram===Ut&&Y.lightsStateVersion===dt)return Fc(T,_t),Ut}else _t.uniforms=Et.getUniforms(T),T.onBeforeCompile(_t,y),Ut=Et.acquireProgram(_t,wt),Dt.set(wt,Ut),Y.uniforms=_t.uniforms;const At=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(At.clippingPlanes=rt.uniform),Fc(T,_t),Y.needsLights=Ju(T),Y.lightsStateVersion=dt,Y.needsLights&&(At.ambientLightColor.value=H.state.ambient,At.lightProbe.value=H.state.probe,At.directionalLights.value=H.state.directional,At.directionalLightShadows.value=H.state.directionalShadow,At.spotLights.value=H.state.spot,At.spotLightShadows.value=H.state.spotShadow,At.rectAreaLights.value=H.state.rectArea,At.ltc_1.value=H.state.rectAreaLTC1,At.ltc_2.value=H.state.rectAreaLTC2,At.pointLights.value=H.state.point,At.pointLightShadows.value=H.state.pointShadow,At.hemisphereLights.value=H.state.hemi,At.directionalShadowMap.value=H.state.directionalShadowMap,At.directionalShadowMatrix.value=H.state.directionalShadowMatrix,At.spotShadowMap.value=H.state.spotShadowMap,At.spotLightMatrix.value=H.state.spotLightMatrix,At.spotLightMap.value=H.state.spotLightMap,At.pointShadowMap.value=H.state.pointShadowMap,At.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Ut,Y.uniformsList=null,Ut}function Uc(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=jr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Fc(T,V){const q=bt.get(T);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function ju(T,V,q,Y,H){V.isScene!==!0&&(V=le),P.resetTextureUnits();const st=V.fog,dt=Y.isMeshStandardMaterial?V.environment:null,_t=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xs,wt=(Y.isMeshStandardMaterial?X:E).get(Y.envMap||dt),Dt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ut=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),At=!!q.morphAttributes.position,Kt=!!q.morphAttributes.normal,ee=!!q.morphAttributes.color;let Ee=pi;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ee=y.toneMapping);const ve=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Jt=ve!==void 0?ve.length:0,Ct=bt.get(Y),Ne=p.state.lights;if(nt===!0&&(ht===!0||T!==M)){const Oe=T===M&&Y.id===S;rt.setState(Y,T,Oe)}let ne=!1;Y.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ne.state.version||Ct.outputColorSpace!==_t||H.isBatchedMesh&&Ct.batching===!1||!H.isBatchedMesh&&Ct.batching===!0||H.isBatchedMesh&&Ct.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ct.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ct.instancing===!1||!H.isInstancedMesh&&Ct.instancing===!0||H.isSkinnedMesh&&Ct.skinning===!1||!H.isSkinnedMesh&&Ct.skinning===!0||H.isInstancedMesh&&Ct.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ct.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ct.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ct.instancingMorph===!1&&H.morphTexture!==null||Ct.envMap!==wt||Y.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==rt.numPlanes||Ct.numIntersection!==rt.numIntersection)||Ct.vertexAlphas!==Dt||Ct.vertexTangents!==Ut||Ct.morphTargets!==At||Ct.morphNormals!==Kt||Ct.morphColors!==ee||Ct.toneMapping!==Ee||Ct.morphTargetsCount!==Jt)&&(ne=!0):(ne=!0,Ct.__version=Y.version);let fn=Ct.currentProgram;ne===!0&&(fn=or(Y,V,H));let ki=!1,je=!1,Rs=!1;const pe=fn.getUniforms(),nn=Ct.uniforms;if(Tt.useProgram(fn.program)&&(ki=!0,je=!0,Rs=!0),Y.id!==S&&(S=Y.id,je=!0),ki||M!==T){Tt.buffers.depth.getReversed()?(at.copy(T.projectionMatrix),af(at),cf(at),pe.setValue(B,"projectionMatrix",at)):pe.setValue(B,"projectionMatrix",T.projectionMatrix),pe.setValue(B,"viewMatrix",T.matrixWorldInverse);const We=pe.map.cameraPosition;We!==void 0&&We.setValue(B,It.setFromMatrixPosition(T.matrixWorld)),Yt.logarithmicDepthBuffer&&pe.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pe.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,je=!0,Rs=!0)}if(H.isSkinnedMesh){pe.setOptional(B,H,"bindMatrix"),pe.setOptional(B,H,"bindMatrixInverse");const Oe=H.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),pe.setValue(B,"boneTexture",Oe.boneTexture,P))}H.isBatchedMesh&&(pe.setOptional(B,H,"batchingTexture"),pe.setValue(B,"batchingTexture",H._matricesTexture,P),pe.setOptional(B,H,"batchingIdTexture"),pe.setValue(B,"batchingIdTexture",H._indirectTexture,P),pe.setOptional(B,H,"batchingColorTexture"),H._colorsTexture!==null&&pe.setValue(B,"batchingColorTexture",H._colorsTexture,P));const sn=q.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Nt.update(H,q,fn),(je||Ct.receiveShadow!==H.receiveShadow)&&(Ct.receiveShadow=H.receiveShadow,pe.setValue(B,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(nn.envMap.value=wt,nn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(nn.envMapIntensity.value=V.environmentIntensity),je&&(pe.setValue(B,"toneMappingExposure",y.toneMappingExposure),Ct.needsLights&&Ku(nn,Rs),st&&Y.fog===!0&&ft.refreshFogUniforms(nn,st),ft.refreshMaterialUniforms(nn,Y,z,$,p.state.transmissionRenderTarget[T.id]),jr.upload(B,Uc(Ct),nn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(jr.upload(B,Uc(Ct),nn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pe.setValue(B,"center",H.center),pe.setValue(B,"modelViewMatrix",H.modelViewMatrix),pe.setValue(B,"normalMatrix",H.normalMatrix),pe.setValue(B,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Oe=Y.uniformsGroups;for(let We=0,xo=Oe.length;We<xo;We++){const xi=Oe[We];G.update(xi,fn),G.bind(xi,fn)}}return fn}function Ku(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Ju(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,V,q){bt.get(T.texture).__webglTexture=V,bt.get(T.depthTexture).__webglTexture=q;const Y=bt.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const q=bt.get(T);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const Qu=B.createFramebuffer();this.setRenderTarget=function(T,V=0,q=0){R=T,b=V,C=q;let Y=!0,H=null,st=!1,dt=!1;if(T){const wt=bt.get(T);if(wt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(B.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(wt.__hasExternalTextures)P.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const At=T.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&bt.has(At)&&(T.width!==At.image.width||T.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Dt=T.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(dt=!0);const Ut=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[V])?H=Ut[V][q]:H=Ut[V],st=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?H=bt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?H=Ut[q]:H=Ut,L.copy(T.viewport),k.copy(T.scissor),I=T.scissorTest}else L.copy(W).multiplyScalar(z).floor(),k.copy(j).multiplyScalar(z).floor(),I=ot;if(q!==0&&(H=Qu),Tt.bindFramebuffer(B.FRAMEBUFFER,H)&&Y&&Tt.drawBuffers(T,H),Tt.viewport(L),Tt.scissor(k),Tt.setScissorTest(I),st){const wt=bt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,wt.__webglTexture,q)}else if(dt){const wt=bt.get(T.texture),Dt=V;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,wt.__webglTexture,q,Dt)}else if(T!==null&&q!==0){const wt=bt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,wt.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(T,V,q,Y,H,st,dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){Tt.bindFramebuffer(B.FRAMEBUFFER,_t);try{const wt=T.texture,Dt=wt.format,Ut=wt.type;if(!Yt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Y&&q>=0&&q<=T.height-H&&B.readPixels(V,q,Y,H,Ot.convert(Dt),Ot.convert(Ut),st)}finally{const wt=R!==null?bt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(T,V,q,Y,H,st,dt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){const wt=T.texture,Dt=wt.format,Ut=wt.type;if(!Yt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-Y&&q>=0&&q<=T.height-H){Tt.bindFramebuffer(B.FRAMEBUFFER,_t);const At=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.bufferData(B.PIXEL_PACK_BUFFER,st.byteLength,B.STREAM_READ),B.readPixels(V,q,Y,H,Ot.convert(Dt),Ot.convert(Ut),0);const Kt=R!==null?bt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,Kt);const ee=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await of(B,ee,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,st),B.deleteBuffer(At),B.deleteSync(ee),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,q=0){T.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-q),H=Math.floor(T.image.width*Y),st=Math.floor(T.image.height*Y),dt=V!==null?V.x:0,_t=V!==null?V.y:0;P.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,dt,_t,H,st),Tt.unbindTexture()};const td=B.createFramebuffer(),ed=B.createFramebuffer();this.copyTextureToTexture=function(T,V,q=null,Y=null,H=0,st=null){T.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],V=arguments[2],st=arguments[3]||0,q=null),st===null&&(H!==0?(cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=H,H=0):st=0);let dt,_t,wt,Dt,Ut,At,Kt,ee,Ee;const ve=T.isCompressedTexture?T.mipmaps[st]:T.image;if(q!==null)dt=q.max.x-q.min.x,_t=q.max.y-q.min.y,wt=q.isBox3?q.max.z-q.min.z:1,Dt=q.min.x,Ut=q.min.y,At=q.isBox3?q.min.z:0;else{const sn=Math.pow(2,-H);dt=Math.floor(ve.width*sn),_t=Math.floor(ve.height*sn),T.isDataArrayTexture?wt=ve.depth:T.isData3DTexture?wt=Math.floor(ve.depth*sn):wt=1,Dt=0,Ut=0,At=0}Y!==null?(Kt=Y.x,ee=Y.y,Ee=Y.z):(Kt=0,ee=0,Ee=0);const Jt=Ot.convert(V.format),Ct=Ot.convert(V.type);let Ne;V.isData3DTexture?(P.setTexture3D(V,0),Ne=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(P.setTexture2DArray(V,0),Ne=B.TEXTURE_2D_ARRAY):(P.setTexture2D(V,0),Ne=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const ne=B.getParameter(B.UNPACK_ROW_LENGTH),fn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ki=B.getParameter(B.UNPACK_SKIP_PIXELS),je=B.getParameter(B.UNPACK_SKIP_ROWS),Rs=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ve.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ve.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ut),B.pixelStorei(B.UNPACK_SKIP_IMAGES,At);const pe=T.isDataArrayTexture||T.isData3DTexture,nn=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const sn=bt.get(T),Oe=bt.get(V),We=bt.get(sn.__renderTarget),xo=bt.get(Oe.__renderTarget);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,We.__webglFramebuffer),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,xo.__webglFramebuffer);for(let xi=0;xi<wt;xi++)pe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bt.get(T).__webglTexture,H,At+xi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bt.get(V).__webglTexture,st,Ee+xi)),B.blitFramebuffer(Dt,Ut,dt,_t,Kt,ee,dt,_t,B.DEPTH_BUFFER_BIT,B.NEAREST);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||bt.has(T)){const sn=bt.get(T),Oe=bt.get(V);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,td),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ed);for(let We=0;We<wt;We++)pe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,sn.__webglTexture,H,At+We):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,sn.__webglTexture,H),nn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,st,Ee+We):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,st),H!==0?B.blitFramebuffer(Dt,Ut,dt,_t,Kt,ee,dt,_t,B.COLOR_BUFFER_BIT,B.NEAREST):nn?B.copyTexSubImage3D(Ne,st,Kt,ee,Ee+We,Dt,Ut,dt,_t):B.copyTexSubImage2D(Ne,st,Kt,ee,Dt,Ut,dt,_t);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else nn?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ne,st,Kt,ee,Ee,dt,_t,wt,Jt,Ct,ve.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Ne,st,Kt,ee,Ee,dt,_t,wt,Jt,ve.data):B.texSubImage3D(Ne,st,Kt,ee,Ee,dt,_t,wt,Jt,Ct,ve):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,st,Kt,ee,dt,_t,Jt,Ct,ve.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,st,Kt,ee,ve.width,ve.height,Jt,ve.data):B.texSubImage2D(B.TEXTURE_2D,st,Kt,ee,dt,_t,Jt,Ct,ve);B.pixelStorei(B.UNPACK_ROW_LENGTH,ne),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ki),B.pixelStorei(B.UNPACK_SKIP_ROWS,je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Rs),st===0&&V.generateMipmaps&&B.generateMipmap(Ne),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,V,q=null,Y=null,H=0){return T.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],V=arguments[3],H=arguments[4]||0),cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,q,Y,H)},this.initRenderTarget=function(T){bt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){b=0,C=0,R=null,Tt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class En{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new En);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],v=i[0],m=i[1],p=i[2],_=i[3],x=i[4],y=i[5],A=i[6],b=i[7],C=i[8];return s[0]=o*v+a*_+c*A,s[1]=o*m+a*x+c*b,s[2]=o*p+a*y+c*C,s[3]=l*v+h*_+d*A,s[4]=l*m+h*x+d*b,s[5]=l*p+h*y+d*C,s[6]=u*v+f*_+g*A,s[7]=u*m+f*x+g*b,s[8]=u*p+f*y+g*C,e}scale(t,e){e===void 0&&(e=new En);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new w);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new En);const e=3,n=6,i=Hv;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const c=a;let l;const h=n;let d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,g=i*c,v=s*o,m=s*a,p=s*c,_=this.elements;return _[0]=1-(u+g),_[1]=h-p,_[2]=d+m,_[3]=h+p,_[4]=1-(l+g),_[5]=f-v,_[6]=d-m,_[7]=f+v,_[8]=1-(l+u),this}transpose(t){t===void 0&&(t=new En);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Hv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new w(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new w(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new En([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new w);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new w);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new w),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new w),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new w),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Wv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Xv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Vl),Vl.almostEquals(t,e)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const Wv=new w,Xv=new w,Vl=new w;class tn{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Hl),l=Hl),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new tn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=Wl,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Wl,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||f>g)}}const Hl=new w,Wl=[new w,new w,new w,new w,new w,new w,new w,new w];class Xl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class bu{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Ae{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=qv,i=Yv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ae);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new Ae);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ae),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-a*n,f=-o*n-a*i-c*s;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new Ae(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ae);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,d=t.w,u,f,g,v,m;return f=i*c+s*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),v=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(v=1-e,m=e),n.x=v*i+m*c,n.y=v*s+m*l,n.z=v*o+m*h,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new Ae);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*l),i.y+=u*(o*d+a*c-s*h),i.z+=u*(a*d+s*l-o*c),i.w+=u*(-s*c-o*l-a*h),i}}const qv=new w,Yv=new w,$v={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class vt{constructor(t){t===void 0&&(t={}),this.id=vt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}vt.idCounter=0;vt.types=$v;class te{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new Ae,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return te.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return te.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),n.vsub(t,i),e.conjugate(ql),ql.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new w),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new w),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const ql=new Ae;class Js extends vt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:vt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Js.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new w,o=new w;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const v=h.dot(o);v>u&&(u=v,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const v=n.vertices[n.faces[d][g]],m=new w;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new w,h=new w,d=new w,u=new w,f=new w,g=new w;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],l);const _=m.testSepAxis(l,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(l))}else{const p=a?a.length:m.faces.length;for(let _=0;_<p;_++){const x=a?a[_]:_;l.copy(m.faceNormals[x]),n.vmult(l,l);const y=m.testSepAxis(l,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const _=m.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const p=c?c.length:t.faces.length;for(let _=0;_<p;_++){const x=c?c[_]:_;h.copy(t.faceNormals[x]),s.vmult(h,h);const y=m.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],f),u.cross(f,g),!g.almostZero()){g.normalize();const x=m.testSepAxis(g,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;Js.project(a,t,n,i,ea),Js.project(e,t,s,o,na);const c=ea[0],l=ea[1],h=na[0],d=na[1];if(c<d||h<l)return!1;const u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(t,e){const n=new w,i=new w;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new w,l=new w,h=new w,d=new w,u=new w,f=new w,g=new w,v=new w,m=this,p=[],_=i,x=p;let y=-1,A=Number.MAX_VALUE;for(let M=0;M<m.faces.length;M++){c.copy(m.faceNormals[M]),n.vmult(c,c);const L=c.dot(t);L<A&&(A=L,y=M)}if(y<0)return;const b=m.faces[y];b.connectedFaces=[];for(let M=0;M<m.faces.length;M++)for(let L=0;L<m.faces[M].length;L++)b.indexOf(m.faces[M][L])!==-1&&M!==y&&b.connectedFaces.indexOf(M)===-1&&b.connectedFaces.push(M);const C=b.length;for(let M=0;M<C;M++){const L=m.vertices[b[M]],k=m.vertices[b[(M+1)%C]];L.vsub(k,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(L),n.vmult(f,f),e.vadd(f,f);const I=b.connectedFaces[M];g.copy(this.faceNormals[I]);const U=this.getPlaneConstantOfFace(I);v.copy(g),n.vmult(v,v);const O=U-v.dot(e);for(this.clipFaceAgainstPlane(_,x,v,O);_.length;)_.shift();for(;x.length;)_.push(x.shift())}g.copy(this.faceNormals[y]);const R=this.getPlaneConstantOfFace(y);v.copy(g),n.vmult(v,v);const S=R-v.dot(e);for(let M=0;M<_.length;M++){let L=v.dot(_[M])+S;if(L<=s&&(console.log(`clamped: depth=${L} to minDist=${s}`),L=s),L<=o){const k=_[M];if(L<=1e-6){const I={point:k,normal:v,depth:L};a.push(I)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const d=new w;d.copy(l),e.push(d)}else{const d=new w;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new w;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,h,d,u=new w;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new w;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new w;t.vsub(c,l);const h=a.dot(l),d=new w;s.vsub(c,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=Zv;let c=0,l=0;const h=jv,d=t.vertices;h.setZero(),te.vectorToLocalFrame(n,i,e,a),te.pointToLocalFrame(n,i,h,h);const u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const ea=[],na=[];new w;const Zv=new w,jv=new w;class Ss extends vt{constructor(t){super({type:vt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Js({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),Ss.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)li.set(s[o][0],s[o][1],s[o][2]),e.vmult(li,li),t.vadd(li,li),n(li.x,li.y,li.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Cn[0].set(s.x,s.y,s.z),Cn[1].set(-s.x,s.y,s.z),Cn[2].set(-s.x,-s.y,s.z),Cn[3].set(-s.x,-s.y,-s.z),Cn[4].set(s.x,-s.y,-s.z),Cn[5].set(s.x,s.y,-s.z),Cn[6].set(-s.x,s.y,-s.z),Cn[7].set(s.x,-s.y,s.z);const o=Cn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=Cn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const li=new w,Cn=[new w,new w,new w,new w,new w,new w,new w,new w],xc={DYNAMIC:1,STATIC:2,KINEMATIC:4},Mc={AWAKE:0,SLEEPY:1,SLEEPING:2};class mt extends bu{constructor(t){t===void 0&&(t={}),super(),this.id=mt.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?mt.STATIC:mt.DYNAMIC,typeof t.type==typeof mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=mt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Ae,this.initQuaternion=new Ae,this.previousQuaternion=new Ae,this.interpolatedQuaternion=new Ae,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new En,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new En,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new tn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=mt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===mt.SLEEPING&&this.dispatchEvent(mt.wakeupEvent)}sleep(){this.sleepState=mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===mt.AWAKE&&n<i?(this.sleepState=mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(mt.sleepyEvent)):e===mt.SLEEPY&&n>i?this.wakeUp():e===mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===mt.SLEEPING||this.type===mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new w,s=new Ae;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Kv,o=Jv,a=this.quaternion,c=this.aabb,l=Qv;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=t_,i=e_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=n_;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==mt.DYNAMIC)return;const n=i_,i=s_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===mt.DYNAMIC&&(this.sleepState===mt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=e,i=r_;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=o_;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==mt.DYNAMIC)return;const n=a_,i=c_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=l_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ss.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===mt.DYNAMIC||this.type===mt.KINEMATIC)||this.sleepState===mt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const g=d.elements,v=this.angularFactor,m=c.x*v.x,p=c.y*v.y,_=c.z*v.z;s.x+=t*(g[0]*m+g[1]*p+g[2]*_),s.y+=t*(g[3]*m+g[4]*p+g[5]*_),s.z+=t*(g[6]*m+g[7]*p+g[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}mt.idCounter=0;mt.COLLIDE_EVENT_NAME="collide";mt.DYNAMIC=xc.DYNAMIC;mt.STATIC=xc.STATIC;mt.KINEMATIC=xc.KINEMATIC;mt.AWAKE=Mc.AWAKE;mt.SLEEPY=Mc.SLEEPY;mt.SLEEPING=Mc.SLEEPING;mt.wakeupEvent={type:"wakeup"};mt.sleepyEvent={type:"sleepy"};mt.sleepEvent={type:"sleep"};const Kv=new w,Jv=new Ae,Qv=new tn,t_=new En,e_=new En;new En;const n_=new w,i_=new w,s_=new w,r_=new w,o_=new w,a_=new w,c_=new w,l_=new w;class h_{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&mt.STATIC)!==0||t.sleepState===mt.SLEEPING)&&((e.type&mt.STATIC)!==0||e.sleepState===mt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=u_;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=d_,i=f_,s=p_,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new w;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const u_=new w;new w;new Ae;new w;const d_={keys:[]},f_=[],p_=[];new w;new w;new w;class m_ extends h_{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class lo{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Tu,Au,Cu,Ru,Pu,Lu,Iu;const wc={CLOSEST:1,ANY:2,ALL:4};Tu=vt.types.SPHERE;Au=vt.types.PLANE;Cu=vt.types.BOX;Ru=vt.types.CYLINDER;Pu=vt.types.CONVEXPOLYHEDRON;Lu=vt.types.HEIGHTFIELD;Iu=vt.types.TRIMESH;class Te{get[Tu](){return this._intersectSphere}get[Au](){return this._intersectPlane}get[Cu](){return this._intersectBox}get[Ru](){return this._intersectConvex}get[Pu](){return this._intersectConvex}get[Lu](){return this._intersectHeightfield}get[Iu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Te.ANY,this.result=new lo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Te.ANY,this.result=e.result||new lo,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Yl),ia.length=0,t.broadphase.aabbQuery(t,Yl,ia),this.intersectBodies(ia),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=g_,s=v_;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(L_(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new w(0,0,1);e.vmult(l,l);const h=new w;o.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const g=new w,v=new w,m=new w;o.vsub(n,g);const p=-l.dot(g)/f;c.scale(p,v),o.vadd(v,m),this.reportIntersection(l,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=__;o.from.copy(this.from),o.to.copy(this.to),te.pointToLocalFrame(n,e,o.from,o.from),te.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=y_;let c,l,h,d;c=l=0,h=d=t.data.length-1;const u=new tn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),te.pointToWorldFrame(n,e,t.pillarOffset,Dr),this._intersectConvex(t.pillarConvex,e,Dr,i,s,$l),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),te.pointToWorldFrame(n,e,t.pillarOffset,Dr),this._intersectConvex(t.pillarConvex,e,Dr,i,s,$l)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=x_,g=M_;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const v=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=w_,c=Zl,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=l?l.length:h.length,_=this.result;for(let x=0;!_.shouldStop&&x<p;x++){const y=l?l[x]:x,A=h[y],b=u[y],C=e,R=n;c.copy(d[A[0]]),C.vmult(c,c),c.vadd(R,c),c.vsub(g,c),C.vmult(b,a);const S=f.dot(a);if(Math.abs(S)<this.precision)continue;const M=a.dot(c)/S;if(!(M<0)){f.scale(M,Xe),Xe.vadd(g,Xe),vn.copy(d[A[0]]),C.vmult(vn,vn),R.vadd(vn,vn);for(let L=1;!_.shouldStop&&L<A.length-1;L++){Rn.copy(d[A[L]]),Pn.copy(d[A[L+1]]),C.vmult(Rn,Rn),C.vmult(Pn,Pn),R.vadd(Rn,Rn),R.vadd(Pn,Pn);const k=Xe.distanceTo(g);!(Te.pointInTriangle(Xe,vn,Rn,Pn)||Te.pointInTriangle(Xe,Rn,vn,Pn))||k>m||this.reportIntersection(a,Xe,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=S_,c=R_,l=P_,h=Zl,d=E_,u=b_,f=T_,g=C_,v=A_,m=t.indices;t.vertices;const p=this.from,_=this.to,x=this.direction;l.position.copy(n),l.quaternion.copy(e),te.vectorToLocalFrame(n,e,x,d),te.pointToLocalFrame(n,e,p,u),te.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const y=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let A=0,b=c.length;!this.result.shouldStop&&A!==b;A++){const C=c[A];t.getNormal(C,a),t.getVertex(m[C*3],vn),vn.vsub(u,h);const R=d.dot(a),S=a.dot(h)/R;if(S<0)continue;d.scale(S,Xe),Xe.vadd(u,Xe),t.getVertex(m[C*3+1],Rn),t.getVertex(m[C*3+2],Pn);const M=Xe.distanceSquared(u);!(Te.pointInTriangle(Xe,Rn,vn,Pn)||Te.pointInTriangle(Xe,vn,Rn,Pn))||M>y||(te.vectorToWorldFrame(e,a,v),te.pointToWorldFrame(n,e,Xe,g),this.reportIntersection(v,g,s,i,C))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Te.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case Te.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case Te.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Ii),n.vsub(e,Os),t.vsub(e,sa);const s=Ii.dot(Ii),o=Ii.dot(Os),a=Ii.dot(sa),c=Os.dot(Os),l=Os.dot(sa);let h,d;return(h=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&h+d<s*c-o*o}}Te.CLOSEST=wc.CLOSEST;Te.ANY=wc.ANY;Te.ALL=wc.ALL;const Yl=new tn,ia=[],Os=new w,sa=new w,g_=new w,v_=new Ae,Xe=new w,vn=new w,Rn=new w,Pn=new w;new w;new lo;const $l={faceList:[0]},Dr=new w,__=new Te,y_=[],x_=new w,M_=new w,w_=new w;new w;new w;const Zl=new w,S_=new w,E_=new w,b_=new w,T_=new w,A_=new w,C_=new w;new tn;const R_=[],P_=new te,Ii=new w,Ur=new w;function L_(r,t,e){e.vsub(r,Ii);const n=Ii.dot(t);return t.scale(n,Ur),Ur.vadd(r,Ur),e.distanceTo(Ur)}class I_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class jl{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class sr{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=sr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new jl,this.jacobianElementB=new jl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,Kl),a.scale(h,Jl),n.invInertiaWorldSolve.vmult(o,Ql),i.invInertiaWorldSolve.vmult(c,th),t.multiplyVectors(Kl,Ql)+e.multiplyVectors(Jl,th)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,Fr),l+=Fr.dot(t.rotational),c.vmult(e.rotational,Fr),l+=Fr.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=N_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}sr.idCounter=0;const Kl=new w,Jl=new w,Ql=new w,th=new w,Fr=new w,N_=new w;class D_ extends sr{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=U_,l=F_,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=B_,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(v.spatial),c.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const _=p.dot(g),x=this.restitution+1,y=x*u.dot(p)-x*h.dot(p)+f.dot(l)-d.dot(c),A=this.computeGiMf();return-_*e-y*n-t*A}getImpactVelocityAlongNormal(){const t=O_,e=z_,n=k_,i=G_,s=V_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const U_=new w,F_=new w,B_=new w,O_=new w,z_=new w,k_=new w,G_=new w,V_=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class eh extends sr{constructor(t,e,n){super(t,e,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=H_,o=W_,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const H_=new w,W_=new w;class Ts{constructor(t,e,n){n=I_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ts.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ts.idCounter=0;class As{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=As.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}As.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Te;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Nu extends vt{constructor(t){if(super({type:vt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new w);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=t[c]-s,i[c]=t[c]+s}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;class X_ extends vt{constructor(){super({type:vt.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new w),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Hn.set(0,0,1),e.vmult(Hn,Hn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Hn.x===1?i.x=t.x:Hn.x===-1&&(n.x=t.x),Hn.y===1?i.y=t.y:Hn.y===-1&&(n.y=t.y),Hn.z===1?i.z=t.z:Hn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Hn=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new tn;new w;new tn;new w;new w;new w;new w;new w;new w;new w;new tn;new w;new te;new tn;class q_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Y_ extends q_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let d,u,f,g,v,m;if(a!==0)for(let y=0;y!==l;y++)c[y].updateSolveMassProperties();const p=Z_,_=j_,x=$_;p.length=a,_.length=a,x.length=a;for(let y=0;y!==a;y++){const A=o[y];x[y]=0,_[y]=A.computeB(h),p[y]=1/A.computeC()}if(a!==0){for(let b=0;b!==l;b++){const C=c[b],R=C.vlambda,S=C.wlambda;R.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let b=0;b!==a;b++){const C=o[b];d=_[b],u=p[b],m=x[b],v=C.computeGWlambda(),f=u*(d-v-C.eps*m),m+f<C.minForce?f=C.minForce-m:m+f>C.maxForce&&(f=C.maxForce-m),x[b]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<s)break}for(let b=0;b!==l;b++){const C=c[b],R=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),R.vadd(C.vlambda,R),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let y=o.length;const A=1/h;for(;y--;)o[y].multiplier=x[y]*A}return n}}const $_=[],Z_=[],j_=[];class K_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class J_ extends K_{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const ue={sphereSphere:vt.types.SPHERE,spherePlane:vt.types.SPHERE|vt.types.PLANE,boxBox:vt.types.BOX|vt.types.BOX,sphereBox:vt.types.SPHERE|vt.types.BOX,planeBox:vt.types.PLANE|vt.types.BOX,convexConvex:vt.types.CONVEXPOLYHEDRON,sphereConvex:vt.types.SPHERE|vt.types.CONVEXPOLYHEDRON,planeConvex:vt.types.PLANE|vt.types.CONVEXPOLYHEDRON,boxConvex:vt.types.BOX|vt.types.CONVEXPOLYHEDRON,sphereHeightfield:vt.types.SPHERE|vt.types.HEIGHTFIELD,boxHeightfield:vt.types.BOX|vt.types.HEIGHTFIELD,convexHeightfield:vt.types.CONVEXPOLYHEDRON|vt.types.HEIGHTFIELD,sphereParticle:vt.types.PARTICLE|vt.types.SPHERE,planeParticle:vt.types.PLANE|vt.types.PARTICLE,boxParticle:vt.types.BOX|vt.types.PARTICLE,convexParticle:vt.types.PARTICLE|vt.types.CONVEXPOLYHEDRON,cylinderCylinder:vt.types.CYLINDER,sphereCylinder:vt.types.SPHERE|vt.types.CYLINDER,planeCylinder:vt.types.PLANE|vt.types.CYLINDER,boxCylinder:vt.types.BOX|vt.types.CYLINDER,convexCylinder:vt.types.CONVEXPOLYHEDRON|vt.types.CYLINDER,heightfieldCylinder:vt.types.HEIGHTFIELD|vt.types.CYLINDER,particleCylinder:vt.types.PARTICLE|vt.types.CYLINDER,sphereTrimesh:vt.types.SPHERE|vt.types.TRIMESH,planeTrimesh:vt.types.PLANE|vt.types.TRIMESH};class Q_{get[ue.sphereSphere](){return this.sphereSphere}get[ue.spherePlane](){return this.spherePlane}get[ue.boxBox](){return this.boxBox}get[ue.sphereBox](){return this.sphereBox}get[ue.planeBox](){return this.planeBox}get[ue.convexConvex](){return this.convexConvex}get[ue.sphereConvex](){return this.sphereConvex}get[ue.planeConvex](){return this.planeConvex}get[ue.boxConvex](){return this.boxConvex}get[ue.sphereHeightfield](){return this.sphereHeightfield}get[ue.boxHeightfield](){return this.boxHeightfield}get[ue.convexHeightfield](){return this.convexHeightfield}get[ue.sphereParticle](){return this.sphereParticle}get[ue.planeParticle](){return this.planeParticle}get[ue.boxParticle](){return this.boxParticle}get[ue.convexParticle](){return this.convexParticle}get[ue.cylinderCylinder](){return this.convexConvex}get[ue.sphereCylinder](){return this.sphereConvex}get[ue.planeCylinder](){return this.planeConvex}get[ue.boxCylinder](){return this.boxConvex}get[ue.convexCylinder](){return this.convexConvex}get[ue.heightfieldCylinder](){return this.heightfieldCylinder}get[ue.particleCylinder](){return this.particleCylinder}get[ue.sphereTrimesh](){return this.sphereTrimesh}get[ue.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new J_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new D_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new eh(n,i,u*f),m=g.length?g.pop():new eh(n,i,u*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-u*f,v.maxForce=m.maxForce=u*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ai.setZero(),rs.setZero(),os.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Ai.vadd(e.ni,Ai),rs.vadd(e.ri,rs),os.vadd(e.rj,os)):(Ai.vsub(e.ni,Ai),rs.vadd(e.rj,rs),os.vadd(e.ri,os));const o=1/t;rs.scale(o,n.ri),os.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ai.normalize(),Ai.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=ny,l=iy,h=ty,d=ey;for(let u=0,f=t.length;u!==f;u++){const g=t[u],v=e[u];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const p=g.type&mt.KINEMATIC&&v.type&mt.STATIC||g.type&mt.STATIC&&v.type&mt.KINEMATIC||g.type&mt.KINEMATIC&&v.type&mt.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],c),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const x=g.shapes[_];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],l),v.quaternion.vmult(v.shapeOffsets[y],d),d.vadd(v.position,d);const A=v.shapes[y];if(!(x.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+A.boundingSphereRadius)continue;let b=null;x.material&&A.material&&(b=n.getContactMaterial(x.material,A.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const C=x.type|A.type,R=this[C];if(R){let S=!1;x.type<A.type?S=R.call(this,x,A,h,d,c,l,g,v,x,A,p):S=R.call(this,A,x,d,h,l,c,v,g,x,A,p),S&&p&&(n.shapeOverlapKeeper.set(x.id,A.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,d){const u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Br),u.ni.scale(u.ni.dot(Br),nh),Br.vsub(nh,u.rj),-Br.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool,f=Ry;n.vsub(i,Or),e.getSideNormals(f,o);const g=t.radius;let v=!1;const m=Ly,p=Iy,_=Ny;let x=null,y=0,A=0,b=0,C=null;for(let N=0,$=f.length;N!==$&&v===!1;N++){const z=Ty;z.copy(f[N]);const K=z.length();z.normalize();const F=Or.dot(z);if(F<K+g&&F>0){const W=Ay,j=Cy;W.copy(f[(N+1)%3]),j.copy(f[(N+2)%3]);const ot=W.length(),Z=j.length();W.normalize(),j.normalize();const nt=Or.dot(W),ht=Or.dot(j);if(nt<ot&&nt>-ot&&ht<Z&&ht>-Z){const at=Math.abs(F-K-g);if((C===null||at<C)&&(C=at,A=nt,b=ht,x=K,m.copy(z),p.copy(W),_.copy(j),y++,d))return!0}}}if(y){v=!0;const N=this.createContactEquation(a,c,t,e,l,h);m.scale(-g,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(x,m),p.scale(A,p),m.vadd(p,m),_.scale(b,_),m.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let R=u.get();const S=Py;for(let N=0;N!==2&&!v;N++)for(let $=0;$!==2&&!v;$++)for(let z=0;z!==2&&!v;z++)if(R.set(0,0,0),N?R.vadd(f[0],R):R.vsub(f[0],R),$?R.vadd(f[1],R):R.vsub(f[1],R),z?R.vadd(f[2],R):R.vsub(f[2],R),i.vadd(R,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;v=!0;const K=this.createContactEquation(a,c,t,e,l,h);K.ri.copy(S),K.ri.normalize(),K.ni.copy(K.ri),K.ri.scale(g,K.ri),K.rj.copy(R),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(c.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}u.release(R),R=null;const M=u.get(),L=u.get(),k=u.get(),I=u.get(),U=u.get(),O=f.length;for(let N=0;N!==O&&!v;N++)for(let $=0;$!==O&&!v;$++)if(N%3!==$%3){f[$].cross(f[N],M),M.normalize(),f[N].vadd(f[$],L),k.copy(n),k.vsub(L,k),k.vsub(i,k);const z=k.dot(M);M.scale(z,I);let K=0;for(;K===N%3||K===$%3;)K++;U.copy(n),U.vsub(I,U),U.vsub(L,U),U.vsub(i,U);const F=Math.abs(z),W=U.length();if(F<f[K].length()&&W<g){if(d)return!0;v=!0;const j=this.createContactEquation(a,c,t,e,l,h);L.vadd(I,j.rj),j.rj.copy(j.rj),U.negate(j.ni),j.ni.normalize(),j.ri.copy(j.rj),j.ri.vadd(i,j.ri),j.ri.vsub(n,j.ri),j.ri.normalize(),j.ri.scale(g,j.ri),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(c.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}u.release(M,L,k,I,U)}planeBox(t,e,n,i,s,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,h,d,u,f){const g=$y;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,f)){const v=[],m=Zy;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let p=0;for(let _=0;_!==v.length;_++){if(d)return!0;const x=this.createContactEquation(a,c,t,e,l,h),y=x.ri,A=x.rj;g.negate(x.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,y),A.copy(v[_].point),y.vsub(n,y),A.vsub(i,A),y.vadd(n,y),y.vsub(a.position,y),A.vadd(i,A),A.vsub(c.position,A),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool;n.vsub(i,Dy);const f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let p=!1;for(let _=0;_!==v.length;_++){const x=v[_],y=Oy;o.vmult(x,y),i.vadd(y,y);const A=By;if(y.vsub(n,A),A.lengthSquared()<m*m){if(d)return!0;p=!0;const b=this.createContactEquation(a,c,t,e,l,h);b.ri.copy(A),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),y.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(c.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let _=0,x=g.length;_!==x&&p===!1;_++){const y=f[_],A=g[_],b=zy;o.vmult(y,b);const C=ky;o.vmult(v[A[0]],C),C.vadd(i,C);const R=Gy;b.scale(-m,R),n.vadd(R,R);const S=Vy;R.vsub(C,S);const M=S.dot(b),L=Hy;if(n.vsub(C,L),M<0&&L.dot(b)>0){const k=[];for(let I=0,U=A.length;I!==U;I++){const O=u.get();o.vmult(v[A[I]],O),i.vadd(O,O),k.push(O)}if(by(k,b,n)){if(d)return!0;p=!0;const I=this.createContactEquation(a,c,t,e,l,h);b.scale(-m,I.ri),b.negate(I.ni);const U=u.get();b.scale(-M,U);const O=u.get();b.scale(-m,O),n.vsub(i,I.rj),I.rj.vadd(O,I.rj),I.rj.vadd(U,I.rj),I.rj.vadd(i,I.rj),I.rj.vsub(c.position,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),u.release(U),u.release(O),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let N=0,$=k.length;N!==$;N++)u.release(k[N]);return}else for(let I=0;I!==A.length;I++){const U=u.get(),O=u.get();o.vmult(v[A[(I+1)%A.length]],U),o.vmult(v[A[(I+2)%A.length]],O),i.vadd(U,U),i.vadd(O,O);const N=Uy;O.vsub(U,N);const $=Fy;N.unit($);const z=u.get(),K=u.get();n.vsub(U,K);const F=K.dot($);$.scale(F,z),z.vadd(U,z);const W=u.get();if(z.vsub(n,W),F>0&&F*F<N.lengthSquared()&&W.lengthSquared()<m*m){if(d)return!0;const j=this.createContactEquation(a,c,t,e,l,h);z.vsub(i,j.rj),z.vsub(n,j.ni),j.ni.normalize(),j.ni.scale(m,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(c.position,j.rj),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult);for(let ot=0,Z=k.length;ot!==Z;ot++)u.release(k[ot]);u.release(U),u.release(O),u.release(z),u.release(W),u.release(K);return}u.release(U),u.release(O),u.release(z),u.release(W),u.release(K)}for(let I=0,U=k.length;I!==U;I++)u.release(k[I])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,d){const u=Wy,f=Xy;f.set(0,0,1),s.vmult(f,f);let g=0;const v=qy;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h),x=Yy;f.scale(f.dot(v),x),u.vsub(x,x),x.vsub(n,_.ri),_.ni.copy(f),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,f=t.radius,g=e.elementSize,v=ax,m=ox;te.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,_=Math.ceil((m.x+f)/g)+1,x=Math.floor((m.y-f)/g)-1,y=Math.ceil((m.y+f)/g)+1;if(_<0||y<0||p>u.length||x>u[0].length)return;p<0&&(p=0),_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),p>=u.length&&(p=u.length-1),_>=u.length&&(_=u.length-1),y>=u[0].length&&(y=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const A=[];e.getRectMinMax(p,x,_,y,A);const b=A[0],C=A[1];if(m.z-f>C||m.z+f<b)return;const R=this.result;for(let S=p;S<_;S++)for(let M=x;M<y;M++){const L=R.length;let k=!1;if(e.getConvexTrianglePillar(S,M,!1),te.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&k||(e.getConvexTrianglePillar(S,M,!0),te.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&k))return!0;if(R.length-L>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=sx,m=rx,p=ix;te.pointToLocalFrame(i,o,n,p);let _=Math.floor((p.x-g)/f)-1,x=Math.ceil((p.x+g)/f)+1,y=Math.floor((p.y-g)/f)-1,A=Math.ceil((p.y+g)/f)+1;if(x<0||A<0||_>u.length||y>u[0].length)return;_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),A<0&&(A=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),A>=u[0].length&&(A=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const b=[];e.getRectMinMax(_,y,x,A,b);const C=b[0],R=b[1];if(!(p.z-g>R||p.z+g<C))for(let S=_;S<x;S++)for(let M=y;M<A;M++){let L=!1;if(e.getConvexTrianglePillar(S,M,!1),te.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,m,null)),d&&L||(e.getConvexTrianglePillar(S,M,!0),te.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,m,null)),d&&L))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,d){const u=Qy;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,d){const u=jy;u.set(0,0,1),a.quaternion.vmult(u,u);const f=Ky;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(c,a,e,t,l,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=Jy;u.scale(u.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,h,d){let u=-1;const f=ex,g=nx;let v=null;const m=tx;if(m.copy(i),m.vsub(n,m),s.conjugate(ih),ih.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,_=t.faces.length;p!==_;p++){const x=[t.worldVertices[t.faces[p][0]]],y=t.worldFaceNormals[p];i.vsub(x[0],sh);const A=-y.dot(sh);if(v===null||Math.abs(A)<Math.abs(v)){if(d)return!0;v=A,u=p,f.copy(y)}}if(u!==-1){const p=this.createContactEquation(c,a,e,t,l,h);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const _=p.ri,x=p.rj;_.vadd(i,_),_.vsub(c.position,_),x.vadd(n,x),x.vsub(a.position,x),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,d)}particleCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=uy,f=dy,g=fy,v=py,m=my,p=gy,_=xy,x=hy,y=cy,A=My;te.pointToLocalFrame(i,o,n,m);const b=t.radius;_.lowerBound.set(m.x-b,m.y-b,m.z-b),_.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(_,A);const C=ly,R=t.radius*t.radius;for(let I=0;I<A.length;I++)for(let U=0;U<3;U++)if(e.getVertex(e.indices[A[I]*3+U],C),C.vsub(m,y),y.lengthSquared()<=R){if(x.copy(C),te.pointToWorldFrame(i,o,x,C),C.vsub(n,y),d)return!0;let O=this.createContactEquation(a,c,t,e,l,h);O.ni.copy(y),O.ni.normalize(),O.ri.copy(O.ni),O.ri.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.copy(C),O.rj.vsub(c.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}for(let I=0;I<A.length;I++)for(let U=0;U<3;U++){e.getVertex(e.indices[A[I]*3+U],u),e.getVertex(e.indices[A[I]*3+(U+1)%3],f),f.vsub(u,g),m.vsub(f,p);const O=p.dot(g);m.vsub(u,p);let N=p.dot(g);if(N>0&&O<0&&(m.vsub(u,p),v.copy(g),v.normalize(),N=p.dot(v),v.scale(N,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;const z=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),te.pointToWorldFrame(i,o,p,p),p.vsub(c.position,z.rj),te.vectorToWorldFrame(o,z.ni,z.ni),te.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}const S=vy,M=_y,L=yy,k=ay;for(let I=0,U=A.length;I!==U;I++){e.getTriangleVertices(A[I],S,M,L),e.getNormal(A[I],k),m.vsub(S,p);let O=p.dot(k);if(k.scale(O,p),m.vsub(p,p),O=p.distanceTo(m),Te.pointInTriangle(p,S,M,L)&&O<t.radius){if(d)return!0;let N=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),te.pointToWorldFrame(i,o,p,p),p.vsub(c.position,N.rj),te.vectorToWorldFrame(o,N.ni,N.ni),te.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}A.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=new w,f=sy;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const v=new w;v.copy(u),te.pointToWorldFrame(i,o,v,u);const m=ry;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h);_.ni.copy(f);const x=oy;f.scale(m.dot(f),x),u.vsub(x,x),_.ri.copy(x),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Ai=new w,rs=new w,os=new w,ty=new w,ey=new w,ny=new Ae,iy=new Ae,sy=new w,ry=new w,oy=new w,ay=new w,cy=new w;new w;const ly=new w,hy=new w,uy=new w,dy=new w,fy=new w,py=new w,my=new w,gy=new w,vy=new w,_y=new w,yy=new w,xy=new tn,My=[],Br=new w,nh=new w,wy=new w,Sy=new w,Ey=new w;function by(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=wy;r[(s+1)%i].vsub(o,a);const c=Sy;a.cross(t,c);const l=Ey;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Or=new w,Ty=new w,Ay=new w,Cy=new w,Ry=[new w,new w,new w,new w,new w,new w],Py=new w,Ly=new w,Iy=new w,Ny=new w,Dy=new w,Uy=new w,Fy=new w,By=new w,Oy=new w,zy=new w,ky=new w,Gy=new w,Vy=new w,Hy=new w;new w;new w;const Wy=new w,Xy=new w,qy=new w,Yy=new w,$y=new w,Zy=new w,jy=new w,Ky=new w,Jy=new w,Qy=new w,ih=new Ae,tx=new w;new w;const ex=new w,sh=new w,nx=new w,ix=new w,sx=new w,rx=[0],ox=new w,ax=new w;class rh{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||oh(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||oh(e,h)}}}function oh(r,t){r.push((t&4294901760)>>16,t&65535)}const ra=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class cx{constructor(){this.data={keys:[]}}get(t,e){const n=ra(t,e);return this.data[n]}set(t,e,n){const i=ra(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=ra(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}let lx=class extends bu{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new m_,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Y_,this.constraints=[],this.narrowphase=new Q_(this),this.collisionMatrix=new Xl,this.collisionMatrixPrevious=new Xl,this.bodyOverlapKeeper=new rh,this.shapeOverlapKeeper=new rh,this.contactmaterials=[],this.contactMaterialTable=new cx,this.defaultMaterial=new As("default"),this.defaultContactMaterial=new Ts(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof lo?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Te.ALL,n.from=t,n.to=e,n.callback=i,oa.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Te.ANY,n.from=t,n.to=e,n.result=i,oa.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Te.CLOSEST,n.from=t,n.to=e,n.result=i,oa.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Re.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Re.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Re.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=px,i=mx,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=mt.DYNAMIC;let u=-1/0;const f=this.constraints,g=fx;c.length();const v=c.x,m=c.y,p=c.z;let _=0;for(l&&(u=Re.now()),_=0;_!==s;_++){const I=o[_];if(I.type===d){const U=I.force,O=I.mass;U.x+=O*v,U.y+=O*m,U.z+=O*p}}for(let I=0,U=this.subsystems.length;I!==U;I++)this.subsystems[I].update();l&&(u=Re.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Re.now()-u);let x=f.length;for(_=0;_!==x;_++){const I=f[_];if(!I.collideConnected)for(let U=n.length-1;U>=0;U-=1)(I.bodyA===n[U]&&I.bodyB===i[U]||I.bodyB===n[U]&&I.bodyA===i[U])&&(n.splice(U,1),i.splice(U,1))}this.collisionMatrixTick(),l&&(u=Re.now());const y=dx,A=e.length;for(_=0;_!==A;_++)y.push(e[_]);e.length=0;const b=this.frictionEquations.length;for(_=0;_!==b;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),l&&(h.narrowphase=Re.now()-u),l&&(u=Re.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=e.length;for(let I=0;I!==C;I++){const U=e[I],O=U.bi,N=U.bj,$=U.si,z=U.sj;let K;if(O.material&&N.material?K=this.getContactMaterial(O.material,N.material)||this.defaultContactMaterial:K=this.defaultContactMaterial,K.friction,O.material&&N.material&&(O.material.friction>=0&&N.material.friction>=0&&O.material.friction*N.material.friction,O.material.restitution>=0&&N.material.restitution>=0&&(U.restitution=O.material.restitution*N.material.restitution)),a.addEquation(U),O.allowSleep&&O.type===mt.DYNAMIC&&O.sleepState===mt.SLEEPING&&N.sleepState===mt.AWAKE&&N.type!==mt.STATIC){const F=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),W=N.sleepSpeedLimit**2;F>=W*2&&(O.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===mt.DYNAMIC&&N.sleepState===mt.SLEEPING&&O.sleepState===mt.AWAKE&&O.type!==mt.STATIC){const F=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),W=O.sleepSpeedLimit**2;F>=W*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,N,!0),this.collisionMatrixPrevious.get(O,N)||(zs.body=N,zs.contact=U,O.dispatchEvent(zs),zs.body=O,N.dispatchEvent(zs)),this.bodyOverlapKeeper.set(O.id,N.id),this.shapeOverlapKeeper.set($.id,z.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Re.now()-u,u=Re.now()),_=0;_!==s;_++){const I=o[_];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(x=f.length,_=0;_!==x;_++){const I=f[_];I.update();for(let U=0,O=I.equations.length;U!==O;U++){const N=I.equations[U];a.addEquation(N)}}a.solve(t,this),l&&(h.solve=Re.now()-u),a.removeAllEquations();const R=Math.pow;for(_=0;_!==s;_++){const I=o[_];if(I.type&d){const U=R(1-I.linearDamping,t),O=I.velocity;O.scale(U,O);const N=I.angularVelocity;if(N){const $=R(1-I.angularDamping,t);N.scale($,N)}}}this.dispatchEvent(ux),l&&(u=Re.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,M,L);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Re.now()-u),this.stepnumber+=1,this.dispatchEvent(hx);let k=!0;if(this.allowSleep)for(k=!1,_=0;_!==s;_++){const I=o[_];I.sleepTick(this.time),I.sleepState!==mt.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Wn,Xn),t){for(let s=0,o=Wn.length;s<o;s+=2)ks.bodyA=this.getBodyById(Wn[s]),ks.bodyB=this.getBodyById(Wn[s+1]),this.dispatchEvent(ks);ks.bodyA=ks.bodyB=null}if(e){for(let s=0,o=Xn.length;s<o;s+=2)Gs.bodyA=this.getBodyById(Xn[s]),Gs.bodyB=this.getBodyById(Xn[s+1]),this.dispatchEvent(Gs);Gs.bodyA=Gs.bodyB=null}Wn.length=Xn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Wn,Xn),n){for(let s=0,o=Wn.length;s<o;s+=2){const a=this.getShapeById(Wn[s]),c=this.getShapeById(Wn[s+1]);qn.shapeA=a,qn.shapeB=c,a&&(qn.bodyA=a.body),c&&(qn.bodyB=c.body),this.dispatchEvent(qn)}qn.bodyA=qn.bodyB=qn.shapeA=qn.shapeB=null}if(i){for(let s=0,o=Xn.length;s<o;s+=2){const a=this.getShapeById(Xn[s]),c=this.getShapeById(Xn[s+1]);Yn.shapeA=a,Yn.shapeB=c,a&&(Yn.bodyA=a.body),c&&(Yn.bodyB=c.body),this.dispatchEvent(Yn)}Yn.bodyA=Yn.bodyB=Yn.shapeA=Yn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new tn;const oa=new Te,Re=globalThis.performance||{};if(!Re.now){let r=Date.now();Re.timing&&Re.timing.navigationStart&&(r=Re.timing.navigationStart),Re.now=()=>Date.now()-r}new w;const hx={type:"postStep"},ux={type:"preStep"},zs={type:mt.COLLIDE_EVENT_NAME,body:null,contact:null},dx=[],fx=[],px=[],mx=[],Wn=[],Xn=[],ks={type:"beginContact",bodyA:null,bodyB:null},Gs={type:"endContact",bodyA:null,bodyB:null},qn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Yn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class ah{constructor(t,e,n=0,i=null){this.world=t,this.position=e,this.rotation=n,this.parent=i,this.bodies=[],this.initVisuals(),this.initPhysics()}initVisuals(){const t=new ae,e=10,n=2.35,i=2.4,s=new Ze(.09,.09,n,16),o=new Xt({color:16777215,roughness:.4,metalness:.3}),a=new ct(s,o);a.position.set(-e/2,n/2,0),a.castShadow=!0,t.add(a);const c=new ct(s,o);c.position.set(e/2,n/2,0),c.castShadow=!0,t.add(c);const l=new Ze(.09,.09,e+.25,16),h=new ct(l,o);h.position.set(0,n,0),h.rotation.z=Math.PI/2,h.castShadow=!0,t.add(h);const d=new du({color:14606046,transparent:!0,opacity:.55}),u=(S,M,L,k,I,U,O)=>{const N=new Jf(S),$=new Ff(N,d);$.position.set(M,L,k),$.rotation.set(I,U,O),t.add($)};u(new De(e,n,12,10),0,n/2,-i,0,0,0),u(new De(e,i,12,6),0,n,-i/2,Math.PI/2,0,0),u(new De(i,n,6,10),-e/2,n/2,-i/2,0,Math.PI/2,0),u(new De(i,n,6,10),e/2,n/2,-i/2,0,Math.PI/2,0);const f=new De(e,n),g=new an({color:16777215,wireframe:!0,transparent:!0,opacity:.4}),v=new ct(f,g);v.position.set(0,n/2,-i/2-.05),t.add(v);const m=new De(i,n),p=new ct(m,g);p.position.set(-e/2,n/2,-i/2),p.rotation.y=Math.PI/2,t.add(p);const _=new ct(m,g);_.position.set(e/2,n/2,-i/2),_.rotation.y=-Math.PI/2,t.add(_);const x=new De(e,i),y=new ct(x,g);y.position.set(0,n,-i/2),y.rotation.x=Math.PI/2,t.add(y);const A=new Ze(.04,.04,Math.sqrt(i*i+n*n),8),b=new Xt({color:16777215}),C=new ct(A,b);C.position.set(-e/2,n/2,-i/2),C.rotation.x=Math.atan2(i,n),t.add(C);const R=new ct(A,b);R.position.set(e/2,n/2,-i/2),R.rotation.x=Math.atan2(i,n),t.add(R),t.position.set(this.position.x,this.position.y,this.position.z),t.rotation.y=this.rotation,this.mesh=t,this.parent?this.parent.add(this.mesh):this.world.scene.add(this.mesh)}initPhysics(){const n=(i,s)=>{const o=new mt({mass:0});o.addShape(new Ss(i));const a=new D(s.x,s.y,s.z);a.applyAxisAngle(new D(0,1,0),this.rotation),o.position.set(this.position.x+a.x,this.position.y+a.y,this.position.z+a.z),o.quaternion.setFromAxisAngle(new w(0,1,0),this.rotation),this.world.physicsWorld.addBody(o),this.bodies.push(o)};n(new w(.1,2.35/2,.1),{x:-10/2,y:2.35/2,z:0}),n(new w(.1,2.35/2,.1),{x:10/2,y:2.35/2,z:0}),n(new w(10/2,.1,.1),{x:0,y:2.35,z:0})}update(){}dispose(){var t,e;if(this.mesh){const n=this.mesh.parent||this.parent||this.world.scene;(t=n==null?void 0:n.remove)==null||t.call(n,this.mesh),this.mesh.traverse(i=>{var s,o,a,c,l;if(!(!i||!i.isMesh))if((o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s),Array.isArray(i.material))for(const h of i.material)(a=h==null?void 0:h.dispose)==null||a.call(h);else(l=(c=i.material)==null?void 0:c.dispose)==null||l.call(c)}),this.mesh=null}if((e=this.bodies)!=null&&e.length)for(const n of this.bodies)try{this.world.physicsWorld.removeBody(n)}catch{}this.bodies=[]}}function ch(r){if(!r)return;const t=["map","roughnessMap","metalnessMap","normalMap","emissiveMap","alphaMap"];for(const e of t){const n=r[e];n&&typeof n.dispose=="function"&&n.dispose()}typeof r.dispose=="function"&&r.dispose()}function gx(r){r&&r.traverse(t=>{if(t&&t.isMesh){t.geometry&&typeof t.geometry.dispose=="function"&&t.geometry.dispose();const e=t.material;if(Array.isArray(e))for(const n of e)ch(n);else ch(e)}})}class vx{constructor(t,e=null){this.world=t,this.clouds=[],this.cloudsInitialized=!1,this.cloudTime=0,this.cloudUpdateAccumulator=0,this.weatherMode="day",this.nightLights=[],this.nightLightTargets=[],this.atmoLights=null,this.atmoDefaults=null,this.spectatorSeats=[],this.adBoards=[],this.skyDome=null,this.skyTexDay=null,this.skyTexNight=null,this.fieldMaterial=null,this.fieldMesh=null,this.goal1=null,this.goal2=null,this.root=new ae,this.world.scene.add(this.root),this.physicsBodies=[],this.pitch=this.normalizePitchConfig(e),this.pitchScale=Math.max(1,this.pitch.halfWidth/24),this.fieldWidth=this.pitch.halfWidth*2,this.fieldLength=this.pitch.halfDepth*2,this.featureGates={stabilizationMode:!1,cloudsEnabled:!0,atmosphereEnabled:!0},this.applyFeatureGates(window.__perfFlags||null),this.rebuild(this.pitch)}normalizePitchConfig(t){const e=Number.isFinite(t==null?void 0:t.halfWidth)?Number(t.halfWidth):24,n=Number.isFinite(t==null?void 0:t.halfDepth)?Number(t.halfDepth):39,i=Number.isFinite(t==null?void 0:t.goalHalfWidth)?Number(t.goalHalfWidth):5,s=Number.isFinite(t==null?void 0:t.goalHeight)?Number(t.goalHeight):2.44;return{halfWidth:e,halfDepth:n,goalHalfWidth:i,goalHeight:s}}clear(){var t,e;(t=this.goal1)!=null&&t.dispose&&this.goal1.dispose(),(e=this.goal2)!=null&&e.dispose&&this.goal2.dispose(),this.goal1=null,this.goal2=null;for(const n of this.physicsBodies)try{this.world.physicsWorld.removeBody(n)}catch{}this.physicsBodies=[];for(const n of[...this.root.children])this.root.remove(n),gx(n);this.clouds=[],this.cloudsInitialized=!1,this.spectatorSeats=[],this.adBoards=[],this.skyDome=null,this.skyTexDay=null,this.skyTexNight=null,this.fieldMaterial=null,this.fieldMesh=null,this.cloudUpdateAccumulator=0,this.nightLights=[],this.nightLightTargets=[],this.atmoLights=null,this.atmoDefaults=null}rebuild(t=null){var i;const e=this.normalizePitchConfig(t);!(!this.pitch||e.halfWidth!==this.pitch.halfWidth||e.halfDepth!==this.pitch.halfDepth||e.goalHalfWidth!==this.pitch.goalHalfWidth||e.goalHeight!==this.pitch.goalHeight)&&this.fieldMesh||(this.clear(),this.pitch=e,this.pitchScale=Math.max(1,this.pitch.halfWidth/24),this.fieldWidth=this.pitch.halfWidth*2,this.fieldLength=this.pitch.halfDepth*2,this.initSurroundings(),this.initOuterDetail(),this.initSkyDome(),this.initField(),this.initGoals(),this.initFencing(),this.initAdBoards(),this.initCornerFlags(),this.initFloodlights(),this.initCeiling(),this.featureGates.cloudsEnabled&&(this.initClouds(),this.cloudsInitialized=!0),this.initSpectatorSeats(),this.setWeatherMode(((i=this.world)==null?void 0:i.weatherMode)||this.weatherMode||"day"))}setWeatherMode(t="day"){var n;const e=`${t||""}`.trim().toLowerCase()==="night"?"night":"day";if(this.weatherMode=e,(n=this.skyDome)!=null&&n.material&&this.skyTexDay&&this.skyTexNight&&(this.skyDome.material.map=this.weatherMode==="night"?this.skyTexNight:this.skyTexDay,this.skyDome.material.needsUpdate=!0),this.atmoLights&&this.atmoDefaults){const i=this.atmoLights.sun,s=this.atmoLights.hemi,o=this.atmoLights.haze;this.weatherMode==="night"?(i&&(i.intensity=.12),s&&(s.intensity=.08),o&&(o.intensity=.06)):(i&&(i.intensity=this.atmoDefaults.sun),s&&(s.intensity=this.atmoDefaults.hemi),o&&(o.intensity=this.atmoDefaults.haze))}if(this.weatherMode==="night"){if(!this.nightLights.length){const i=(l,h,d,u)=>{const f=new np(16777215,1.65,260,Math.PI/5.5,.35,1.05);f.position.set(l,28,h),f.castShadow=!1;const g=new xe;g.position.set(d,.5,u),this.root.add(g),f.target=g,this.root.add(f),this.nightLights.push(f),this.nightLightTargets.push(g)},s=this.pitch.halfWidth,o=this.pitch.halfDepth,a=s+26,c=o+26;i(a,c,0,0),i(-a,c,0,0),i(a,-c,0,0),i(-a,-c,0,0)}for(const i of this.nightLights)i.visible=!0}else for(const i of this.nightLights)i.visible=!1}applyFeatureGates(t){if(!t||typeof t!="object")return;const e=t.featureGates&&typeof t.featureGates=="object"?t.featureGates:null;if(this.featureGates.stabilizationMode=!!t.stabilizationMode,typeof t.cloudsEnabled=="boolean"?this.featureGates.cloudsEnabled=t.cloudsEnabled:e&&typeof e.clouds=="boolean"?this.featureGates.cloudsEnabled=e.clouds:this.featureGates.stabilizationMode&&(this.featureGates.cloudsEnabled=!1),typeof t.atmosphereEnabled=="boolean"?this.featureGates.atmosphereEnabled=t.atmosphereEnabled:e&&typeof e.atmosphere=="boolean"?this.featureGates.atmosphereEnabled=e.atmosphere:this.featureGates.stabilizationMode&&(this.featureGates.atmosphereEnabled=!1),this.cloudsInitialized&&!this.featureGates.cloudsEnabled)for(const n of this.clouds)n.group.visible=!1;else if(this.cloudsInitialized&&this.featureGates.cloudsEnabled)for(const n of this.clouds)n.group.visible=!0}initSurroundings(){const t=new De(300,300),e=new Xt({color:1382943,roughness:.94,metalness:.02}),n=new ct(t,e);n.rotation.x=-Math.PI/2,n.position.y=-.55,n.receiveShadow=!0,this.root.add(n);const i=this.pitch.halfDepth+13,s=i+14,o=new ao(i,s,96),a=new Xt({color:2764598,roughness:.86,metalness:.08,side:Ye}),c=new ct(o,a);c.rotation.x=-Math.PI/2,c.position.y=-.49,c.receiveShadow=!0,this.root.add(c)}initOuterDetail(){const t=new ae,e=new Xt({color:3094080,roughness:.92}),n=new Xt({color:3686732,roughness:.9}),i=(s,o,a,c,l,h)=>{const d=new ct(new Se(a,c,l),h);d.position.set(s,c*.5-.55,o),d.castShadow=!1,d.receiveShadow=!1,t.add(d)};for(let s=0;s<24;s+=1){const o=s%2===0?86:102,a=s%4<2?1:-1,c=-120+s*10+(Math.random()-.5)*2.5,l=a*o+(Math.random()-.5)*5,h=6+Math.random()*5,d=10+Math.random()*32,u=6+Math.random()*5;i(c,l,h,d,u,s%3===0?n:e)}for(let s=0;s<18;s+=1){const o=s%2===0?84:108,a=s%3===0?1:-1,c=-90+s*10+(Math.random()-.5)*3,l=a*o+(Math.random()-.5)*4,h=7+Math.random()*5,d=12+Math.random()*26,u=7+Math.random()*6;i(l,c,h,d,u,s%2===0?e:n)}this.root.add(t)}initSkyDome(){const t=()=>{const s=document.createElement("canvas");s.width=1024,s.height=512;const o=s.getContext("2d"),a=o.createLinearGradient(0,0,0,512);return a.addColorStop(0,"#80cfff"),a.addColorStop(.55,"#a2dcff"),a.addColorStop(1,"#f7fbff"),o.fillStyle=a,o.fillRect(0,0,1024,512),s},e=()=>{const s=document.createElement("canvas");s.width=1024,s.height=512;const o=s.getContext("2d"),a=o.createLinearGradient(0,0,0,512);a.addColorStop(0,"#081427"),a.addColorStop(.55,"#050a12"),a.addColorStop(1,"#020409"),o.fillStyle=a,o.fillRect(0,0,1024,512);for(let c=0;c<420;c+=1){const l=Math.random()*1024,h=Math.random()*380,d=Math.random()<.9?.8:1.4,u=.18+Math.random()*.65;o.fillStyle=`rgba(255,255,255,${u.toFixed(3)})`,o.beginPath(),o.arc(l,h,d,0,Math.PI*2),o.fill()}return s};this.skyTexDay=new hn(t()),this.skyTexDay.colorSpace=_e,this.skyTexDay.needsUpdate=!0,this.skyTexNight=new hn(e()),this.skyTexNight.colorSpace=_e,this.skyTexNight.needsUpdate=!0;const n=new Nn(260,40,24),i=new an({map:this.skyTexDay,side:Ge});this.skyDome=new ct(n,i),this.skyDome.position.y=15,this.root.add(this.skyDome)}createGrassTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#2f7a2f",e.fillRect(0,0,512,512);for(let s=0;s<38e3;s++){const o=Math.random()*512,a=Math.random()*512,c=1+Math.random()*1.6,l=1.4+Math.random()*3.2;e.fillStyle=Math.random()>.5?"#2a652b":"#4cae4f",e.fillRect(o,a,c,l)}const n=512/12;for(let s=0;s<12;s+=1){const o=s%2===0?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.055)";e.fillStyle=o,e.fillRect(0,s*n,512,n)}for(let s=0;s<70;s+=1){const o=Math.random()*512,a=Math.random()*512,c=6+Math.random()*22,l=Math.floor(110+Math.random()*45);e.fillStyle=`rgba(${l-20},${l},${l-25},0.16)`,e.beginPath(),e.ellipse(o,a,c,c*(.45+Math.random()*.65),Math.random()*Math.PI,0,Math.PI*2),e.fill()}const i=new hn(t);return i.wrapS=Ni,i.wrapT=Ni,i.repeat.set(4,6),i.anisotropy=4,i}createGrassRoughnessTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#d0d0d0",e.fillRect(0,0,512,512);for(let s=0;s<24e3;s+=1){const o=Math.random()*512,a=Math.random()*512,c=165+Math.floor(Math.random()*60);e.fillStyle=`rgb(${c},${c},${c})`,e.fillRect(o,a,1,1)}const n=512/12;for(let s=0;s<12;s+=1){const o=s%2===0?"rgba(12,12,12,0.07)":"rgba(255,255,255,0.055)";e.fillStyle=o,e.fillRect(0,s*n,512,n)}const i=new hn(t);return i.wrapS=Ni,i.wrapT=Ni,i.repeat.set(4,6),i.anisotropy=4,i}initField(){const t=this.fieldWidth,e=this.fieldLength,n=new Se(t,.8,e),i=this.createGrassTexture(),s=this.createGrassRoughnessTexture(),o=new Xt({map:i,roughnessMap:s,roughness:.82,metalness:.01});this.fieldMaterial=o,this.fieldMesh=new ct(n,o),this.fieldMesh.position.y=-.4,this.fieldMesh.receiveShadow=!0,this.root.add(this.fieldMesh);const a=.2,c=Math.max(1,t-.4),l=Math.max(1,e-.4);this.createLine(0,l/2,c,a),this.createLine(0,-l/2,c,a),this.createLine(c/2,0,a,l),this.createLine(-c/2,0,a,l),this.createLine(0,0,c,a);const h=new ao(6,6.2,64),d=new an({color:16777215,side:Ye}),u=new ct(h,d);u.rotation.x=-Math.PI/2,u.position.y=.02,this.root.add(u);const f=new vc(2.5,32),g=new an({color:16766287,opacity:.95,transparent:!0}),v=new ct(f,g);v.rotation.x=-Math.PI/2,v.position.y=.015,this.root.add(v);const m=new Ss(new w(this.pitch.halfWidth,.4,this.pitch.halfDepth)),p=new mt({mass:0});p.addShape(m),p.position.set(0,-.4,0),this.world.physicsWorld.addBody(p),this.physicsBodies.push(p)}createLine(t,e,n,i){const s=new De(n,i),o=new an({color:16777215}),a=new ct(s,o);a.rotation.x=-Math.PI/2,a.position.set(t,.01,e),a.receiveShadow=!0,this.root.add(a)}initGoals(){const t=this.pitch.halfDepth;this.goal1=new ah(this.world,{x:0,y:0,z:-(t+.1)},0,this.root),this.goal2=new ah(this.world,{x:0,y:0,z:t+.1},Math.PI,this.root);const e=14,n=6,i=new De(e,n),s=new an({color:16729156,transparent:!0,opacity:.12,side:Ye}),o=new an({color:4491519,transparent:!0,opacity:.12,side:Ye}),a=new ct(i,s);a.rotation.x=-Math.PI/2,a.position.set(0,.015,-t+n/2),this.root.add(a);const c=new ct(i,o);c.rotation.x=-Math.PI/2,c.position.set(0,.015,t-n/2),this.root.add(c)}initFencing(){const t=this.fieldWidth,e=this.fieldLength,n=t/2,i=e/2,s=2,o=1.2,a=new Xt({color:15658734,roughness:.5}),c=(x,y,A,b)=>{const C=new Se(x,o,.2),R=new ct(C,a);R.position.set(y,o/2,A),R.rotation.y=b,R.castShadow=!0,R.receiveShadow=!0,this.root.add(R)};c(e,n+.2,0,Math.PI/2),c(e,-n-.2,0,Math.PI/2);const l=10.5,h=(t-l)/2,d=l/2+h/2;c(h,d,i+.2,0),c(h,-d,i+.2,0),c(h,d,-i-.2,0),c(h,-d,-i-.2,0);const u=new As,f=new Ts(u,u,{friction:0,restitution:.5});this.world.physicsWorld.addContactMaterial(f);const g=(x,y,A,b,C,R)=>{const S=new Ss(new w(x/2,y/2,A/2)),M=new mt({mass:0,material:u});M.addShape(S),M.position.set(b,y/2,C),M.quaternion.setFromEuler(0,R,0),this.world.physicsWorld.addBody(M),this.physicsBodies.push(M)},v=10,m=1.2;g(s,v,e+6,n+m,0,0),g(s,v,e+6,-n-m,0,0);const p=(t-l)/2,_=l/2+p/2;g(p,v,s,_,i+m,0),g(p,v,s,-_,i+m,0),g(p,v,s,_,-i-m,0),g(p,v,s,-_,-i-m,0),this.initTribunes()}initTribunes(){const t=(a,c,l,h)=>{const d=new ae,u=h?70:30,f=10,g=.8,v=1.2,m=new Xt({color:10066329}),p=[13369344,1668818,16771899];for(let S=0;S<f;S++){const M=new Se(u,g,v),L=new ct(M,m);L.position.set(0,S*g,-S*v),L.receiveShadow=!1,d.add(L);const k=new Se(u-1,.4,.4),I=p[S%p.length],U=new Xt({color:I,emissive:1118481,emissiveIntensity:.15}),O=new ct(k,U);O.position.set(0,S*g+.6,-S*v),O.receiveShadow=!1,d.add(O)}const _=new Se(u,.5,f*v+5),x=new Xt({color:16777215}),y=new ct(_,x);y.position.set(0,f*g+10,-6),y.castShadow=!1,y.receiveShadow=!0,d.add(y);const A=new Ze(.5,.5,f*g+10),b=new Xt({color:6710886}),C=new ct(A,b);C.position.set(u/2-2,(f*g+10)/2,-f*v-2),C.castShadow=!1,C.receiveShadow=!1,d.add(C);const R=new ct(A,b);R.position.set(-u/2+2,(f*g+10)/2,-f*v-2),R.castShadow=!1,R.receiveShadow=!1,d.add(R),d.position.set(a,2,c),d.rotation.y=l,this.root.add(d)},e=this.fieldWidth,n=this.fieldLength,i=e/2,s=n/2,o=12+(this.pitchScale-1)*12;t(-i-o,0,Math.PI/2,!0),t(i+o,0,-Math.PI/2,!0),t(0,-s-o,0,!1),t(0,s+o,Math.PI,!1)}initAdBoards(){const t=this.fieldWidth/2,e=this.fieldLength/2,n=new Xt({color:10428191,emissive:4853776,emissiveIntensity:.35}),i=new Xt({color:1720717,emissive:1058388,emissiveIntensity:.35}),s=(h,d,u,f,g,v,m,p)=>{const _=new ct(new Se(h,d,u),p);_.position.set(f,g,v),_.rotation.y=m,_.castShadow=!1,_.receiveShadow=!0,this.root.add(_),this.adBoards.push(_)},o=e+2.2,a=t*.5;s(24,2.2,.35,-a,2,-o,0,n),s(24,2.2,.35,a,2,-o,0,i),s(24,2.2,.35,-a,2,o,0,i),s(24,2.2,.35,a,2,o,0,n);const c=t+1.5,l=e*.41;s(28,2.2,.35,-c,2,-l,Math.PI/2,i),s(28,2.2,.35,-c,2,l,Math.PI/2,n),s(28,2.2,.35,c,2,-l,Math.PI/2,n),s(28,2.2,.35,c,2,l,Math.PI/2,i)}initCornerFlags(){const t=(i,s,o)=>{const a=new ct(new Ze(.03,.03,2,10),new Xt({color:16777215,roughness:.45,metalness:.2}));a.position.set(i,1,s),this.root.add(a);const c=new ct(new De(.6,.35),new Xt({color:o,side:Ye,roughness:.7}));c.position.set(i+Math.sign(i||1)*.28,1.7,s),c.rotation.y=i>0?Math.PI/2:-Math.PI/2,this.root.add(c)},e=Math.max(1,this.pitch.halfWidth-.5),n=Math.max(1,this.pitch.halfDepth-.5);t(-e,-n,16726586),t(e,-n,2981375),t(-e,n,2981375),t(e,n,16726586)}initFloodlights(){const t=new co(16777198,.75);t.position.set(-50,100,-50),t.castShadow=!1,this.root.add(t);const e=new vu(8900331,9139029,.32);this.root.add(e);const n=new co(8900331,.18);n.position.set(100,50,100),n.castShadow=!1,this.root.add(n),this.atmoLights={sun:t,hemi:e,haze:n},this.atmoDefaults={sun:t.intensity,hemi:e.intensity,haze:n.intensity};const i=(a,c)=>{const l=new Ze(.3,.6,25),h=new Xt({color:4473924,roughness:.8,metalness:.2}),d=new ct(l,h);d.position.set(a,12.5,c),d.castShadow=!1,d.receiveShadow=!0,this.root.add(d);const u=new Se(4,2,1),f=new Xt({color:3355443,roughness:.9,metalness:.1}),g=new ct(u,f);g.position.set(a,25,c),g.lookAt(0,0,0),g.castShadow=!1,this.root.add(g)},s=this.pitch.halfWidth+6,o=Math.max(30,this.pitch.halfDepth-9);i(s,o),i(-s,o),i(s,-o),i(-s,-o)}initCeiling(){const t=new X_,e=new mt({mass:0});e.addShape(t),e.position.set(0,15,0),e.quaternion.setFromEuler(Math.PI/2,0,0),this.world.physicsWorld.addBody(e),this.physicsBodies.push(e)}initClouds(){this.createCloudLayer(80,.002,.8,.9,8),this.createCloudLayer(60,.005,.7,.8,6),this.createCloudLayer(40,.008,.6,.7,4)}createCloudLayer(t,e,n,i,s){const o=new ae;for(let a=0;a<s;a++){const c=this.createCloud();c.position.set((Math.random()-.5)*200,t+Math.random()*10-5,(Math.random()-.5)*200),c.scale.setScalar(.5+Math.random()*1.5),c.userData={speed:e*(.8+Math.random()*.4),baseX:c.position.x,baseZ:c.position.z},o.add(c)}this.clouds.push({group:o,height:t,speed:e}),this.root.add(o)}createCloud(){const t=new ae,e=new Xt({color:16777215,transparent:!0,opacity:.8,roughness:1}),n=5+Math.floor(Math.random()*3);for(let i=0;i<n;i++){const s=new Nn(3+Math.random()*2,6,4),o=new ct(s,e),a=i/n*Math.PI*2,c=2+Math.random()*3;o.position.set(Math.cos(a)*c,Math.random()*2-1,Math.sin(a)*c),t.add(o)}return t}updateClouds(t){this.cloudTime+=t,this.clouds.forEach(e=>{e.group.children.forEach(n=>{n.position.x=n.userData.baseX+Math.sin(this.cloudTime*n.userData.speed)*30,n.position.z=n.userData.baseZ+this.cloudTime*n.userData.speed*10,n.position.z>100&&(n.position.z=-100,n.userData.baseZ=n.position.z),n.position.y=e.height+Math.sin(this.cloudTime*.5+n.userData.baseX)*2})})}initSpectatorSeats(){const t=[];let e=0;const n=(l,h,d,u=0,f=2.5,g=0)=>{t.push({id:e,position:new D(l,h,d),lookAt:new D(u,f,g)}),e+=1},i=8,s=this.pitch.halfDepth+13,o=Math.max(20,this.pitch.halfWidth*.85);for(let l=-o;l<=o;l+=4)n(l,i,-s),n(l,i,s);const a=Math.max(30,this.pitch.halfDepth*.75),c=this.pitch.halfWidth+10;for(let l=-a;l<=a;l+=4)n(-c,i-1,l),n(c,i-1,l);this.spectatorSeats=t}getSpectatorSeat(t=0){if(!this.spectatorSeats.length)return null;const e=(Math.floor(t)%this.spectatorSeats.length+this.spectatorSeats.length)%this.spectatorSeats.length;return this.spectatorSeats[e]}updateAtmosphere(){const t=.65+.35*Math.sin(this.cloudTime*.6);for(let e=0;e<this.adBoards.length;e+=1){const n=this.adBoards[e];!n.material||!n.material.emissive||(n.material.emissiveIntensity=.2+t*.35)}this.skyDome&&(this.skyDome.rotation.y+=25e-5)}update(t=.016){if(this.featureGates.cloudsEnabled){this.cloudUpdateAccumulator+=t;const e=this.featureGates.stabilizationMode?.12:.05;this.cloudUpdateAccumulator>=e&&(this.updateClouds(this.cloudUpdateAccumulator),this.cloudUpdateAccumulator=0)}this.featureGates.atmosphereEnabled&&this.updateAtmosphere()}}const Xs=.35;function _x(r){return(r==null?void 0:r.pos)||(r==null?void 0:r.position)||{x:0,y:Xs,z:0}}function yx(r){return(r==null?void 0:r.vel)||(r==null?void 0:r.velocity)||{x:0,y:0,z:0}}function xx(r){return r!=null&&r.spin?r.spin:r!=null&&r.angularVelocity?r.angularVelocity:{x:0,y:0,z:0}}class Mx{constructor(t,e={x:0,y:2,z:0}){this.world=t,this.serverPosition=new D(e.x,e.y,e.z),this.serverVelocity=new D(0,0,0),this.predictedPosition=new D(e.x,e.y,e.z),this.tmpOwnedPos=new D(e.x,e.y,e.z),this.controlledBy=null,this.initVisuals(),this.initPhysics(e)}initVisuals(){const t=new Nn(.35,32,32),e=new Xt({color:16777215,roughness:.62,metalness:.1}),n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,512,512),i.fillStyle="#000000";for(let o=0;o<12;o+=1){const a=o/12*Math.PI*2,c=256+Math.cos(a)*150,l=256+Math.sin(a)*150;i.beginPath(),i.arc(c,l,30,0,Math.PI*2),i.fill()}const s=new hn(n);e.map=s,this.mesh=new ct(t,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.world.scene.add(this.mesh)}initPhysics(t){const e=new Nu(.35);this.body=new mt({mass:0,type:mt.KINEMATIC,shape:e,position:new w(t.x,t.y,t.z)}),this.body.collisionResponse=!1,this.world.physicsWorld.addBody(this.body)}updateFromServer(t){if(!t)return;const e=_x(t),n=yx(t);this.controlledBy=t.ownerId||t.controlledBy||null,this.serverPosition.set(e.x,e.y,e.z),this.serverVelocity.set(n.x,n.y,n.z),this.body.position.set(e.x,e.y,e.z),this.body.velocity.set(n.x,n.y,n.z);const i=xx(t);this.body.angularVelocity.set(i.x||0,i.y||0,i.z||0)}update(){var o,a,c,l,h,d,u,f;if(window.isReplayActive){this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z);return}const t=!!((o=window.__perfFlags)!=null&&o.stabilizationMode),e=((a=window.network)==null?void 0:a.myId)||null,n=!!(e&&this.controlledBy===e),i=this.controlledBy&&this.controlledBy!==e&&((l=(c=window.network)==null?void 0:c.remotePlayers)==null?void 0:l[this.controlledBy])||null;if(n&&((d=(h=this.world)==null?void 0:h.player)!=null&&d.body)&&!window.isReplayActive){const g=this.world.player.body.position,v=this.world.player.bodyYaw||0,m=Math.sin(v),p=Math.cos(v),_=.74;this.mesh.position.set(g.x+m*_,Xs,g.z+p*_),this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z)}else if(i!=null&&i.mesh){const g=i.mesh.position,v=Number.isFinite(i.currentYaw)?i.currentYaw:0,m=Math.sin(v),p=Math.cos(v),_=.72,x=Number(((u=i.targetVelocity)==null?void 0:u.x)||0),y=Number(((f=i.targetVelocity)==null?void 0:f.z)||0);this.tmpOwnedPos.set(g.x+m*_+x*.012,Xs,g.z+p*_+y*.012),t?this.mesh.position.copy(this.tmpOwnedPos):this.mesh.position.lerp(this.tmpOwnedPos,.72),this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z)}else{this.predictedPosition.copy(this.serverPosition),this.predictedPosition.addScaledVector(this.serverVelocity,t?.03:.05),this.predictedPosition.y<Xs&&(this.predictedPosition.y=Xs);const g=this.mesh.position.distanceTo(this.predictedPosition);if(g>2.5)this.mesh.position.copy(this.predictedPosition);else{const v=g>.25?this.controlledBy?.52:.36:this.controlledBy?.4:.22;this.mesh.position.lerp(this.predictedPosition,v)}this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z)}const s=this.body.velocity;this.mesh.rotation.x+=s.z*.018,this.mesh.rotation.z-=s.x*.018}applyForce(t,e=1,n=0){var i;(i=window.network)!=null&&i.sendActionRequest&&window.network.sendActionRequest({type:"shoot",charge:e,curve:n})}}const lh="1.0.0",we=Object.freeze({serverHello:"serverHello",hello:"hello",join:"join",joinDenied:"joinDenied",inputFrame:"inputFrame",actionRequest:"actionRequest",chatSend:"chatSend",quickCommand:"quickCommand",spectatorRequest:"spectatorRequest",adminCommand:"adminCommand",roomCreate:"roomCreate",roomJoin:"roomJoin",roomLeave:"roomLeave",roomOwnerCommand:"roomOwnerCommand",initSnapshot:"initSnapshot",snapshot:"snapshot",roomsList:"roomsList",roomJoined:"roomJoined",roomClosed:"roomClosed",roomKicked:"roomKicked",roomLeft:"roomLeft",matchEvent:"matchEvent",replayClip:"replayClip",adminState:"adminState",spectatorQueueState:"spectatorQueueState",playerLeft:"playerLeft"}),yn=Object.freeze({pass:"pass",shoot:"shoot",cross:"cross",through:"through",slide:"slide",keeperCatch:"keeperCatch"}),Ln=Object.freeze({live:"live",goalFreeze:"goal_freeze",replay:"replay",kickoffCountdown:"kickoff_countdown",matchEnd:"match_end"}),di=Object.freeze({passMe:"pass_me",imOpen:"im_open",fallBack:"fall_back",shoot:"shoot"}),wx=Object.freeze({[di.passMe]:"Pas ver!",[di.imOpen]:"Bostayim!",[di.fallBack]:"Geri don!",[di.shoot]:"Sut cek!"});function as(r,t,e){return Number.isFinite(r)?Math.max(t,Math.min(e,r)):t}function se(r,t=0){return Number.isFinite(r)?r:t}function hh(r,t){const e=Math.hypot(r,t);return e<=1e-6?{x:0,z:0,len:0}:{x:r/e,z:t/e,len:e}}const Qa=1e-6;function Mn(r){let t=se(r,0);for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function Sc(r,t){const e=Mn(r);let i=Mn(t)-e;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}function Sx(r,t,e,n){const i=Math.max(.01,se(e,16)),s=1-Math.exp(-i*Math.max(0,n));return Mn(r+Sc(r,t)*s)}function Ex(r,t,e){const n=Math.sin(e),i=Math.cos(e),s=i,o=-n,a=n,c=i;return{x:r*s+t*a,z:r*o+t*c}}function bx(r,t,e){const n=Math.hypot(r,t);if(n<=e||n<=Qa)return{x:r,z:t,speed:n};const i=e/n;return{x:r*i,z:t*i,speed:e}}function uh(r,t,e,n){const i=Math.max(0,se(n,0)),s={posX:se(r==null?void 0:r.posX,0),posZ:se(r==null?void 0:r.posZ,0),velX:se(r==null?void 0:r.velX,0),velZ:se(r==null?void 0:r.velZ,0),yaw:Mn(r==null?void 0:r.yaw),stamina:as(se(r==null?void 0:r.stamina,1),0,1),slideActive:!!(r!=null&&r.slideActive),slideDirX:se(r==null?void 0:r.slideDirX,0),slideDirZ:se(r==null?void 0:r.slideDirZ,1),slideSpeed:Math.max(0,se(r==null?void 0:r.slideSpeed,0))},o=Math.max(0,se(e==null?void 0:e.walkSpeed,17)),a=Math.max(o,se(e==null?void 0:e.sprintSpeed,24)),c=Math.max(0,se(e==null?void 0:e.accelGround,22)),l=Math.max(0,se(e==null?void 0:e.friction,12)),h=Math.max(0,se(e==null?void 0:e.sprintDrain,.34)),d=Math.max(0,se(e==null?void 0:e.staminaRefill,.12)),u=as(se(e==null?void 0:e.staminaMinSprint,.08),0,1),f=Math.max(.1,se(e==null?void 0:e.maxPlayerSpeed,25)),g=Math.max(0,se(e==null?void 0:e.slideDecel,28)),v=Math.max(.05,se(e==null?void 0:e.slideStopSpeed,.25)),m=Math.max(.01,se(e==null?void 0:e.rotationSmoothing,16));if(s.slideActive){const x=hh(s.slideDirX,s.slideDirZ),y=x.len>Qa?x.x:Math.sin(s.yaw),A=x.len>Qa?x.z:Math.cos(s.yaw);s.slideDirX=y,s.slideDirZ=A,s.slideSpeed=Math.max(0,s.slideSpeed-g*i),s.velX=y*s.slideSpeed,s.velZ=A*s.slideSpeed,s.yaw=Math.atan2(y,A),s.stamina=Math.min(1,s.stamina+d*i*.5),s.slideSpeed<=v&&(s.slideActive=!1,s.slideSpeed=0,s.velX=0,s.velZ=0)}else{const x=hh(as(se(t==null?void 0:t.moveX,0),-1,1),as(se(t==null?void 0:t.moveZ,0),-1,1)),A=(typeof(t==null?void 0:t.movementMode)=="string"?t.movementMode:"basis_yaw")==="locked_heading",b=Mn(se(t==null?void 0:t.headingYaw,s.yaw)),C=se(t==null?void 0:t.basisYaw,s.yaw),R=A?b:C,S=Ex(x.x,x.z,R),M=!!(t!=null&&t.sprint)&&x.len>.01&&s.stamina>u,L=M?a:o;M?s.stamina=Math.max(0,s.stamina-h*i):s.stamina=Math.min(1,s.stamina+d*i);const k=as(c*i,0,1),I=as(l*i,0,1);if(x.len>.01){const O=S.x*L,N=S.z*L;s.velX+=(O-s.velX)*k,s.velZ+=(N-s.velZ)*k}else s.velX+=(0-s.velX)*I,s.velZ+=(0-s.velZ)*I;const U=bx(s.velX,s.velZ,f);if(s.velX=U.x,s.velZ=U.z,A)s.yaw=b;else if(x.len>.01&&U.speed>.05){const N=Math.max(.1,se(e==null?void 0:e.maxTurnRateRad,7.5))*i,$=Math.atan2(S.x,S.z),z=Sx(s.yaw,$,m,i),K=Sc(s.yaw,z);Math.abs(K)>N?s.yaw=Mn(s.yaw+Math.sign(K)*N):s.yaw=z}}s.posX+=s.velX*i,s.posZ+=s.velZ*i;const p=se(e==null?void 0:e.xLimit,Number.NaN);Number.isFinite(p)&&(s.posX>p?(s.posX=p,s.velX=0):s.posX<-p&&(s.posX=-p,s.velX=0));const _=se(e==null?void 0:e.zLimit,Number.NaN);return Number.isFinite(_)&&(s.posZ>_?(s.posZ=_,s.velZ=0):s.posZ<-_&&(s.posZ=-_,s.velZ=0)),s}const Vs=10,Tx=600,zr=2;let kr=null;function Ax(r){return new Promise((t,e)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=i=>e(i),n.src=r})}function Cx(r,t,e){const n=r.data,i=new Uint8Array(t*e),s=[],o=[];for(let a=0;a<e;a+=1){const c=a*t;for(let l=0;l<t;l+=1){const h=c+l;if(i[h]||n[h*4+3]<=Vs)continue;let u=l,f=l,g=a,v=a,m=0;for(i[h]=1,o.length=0,o.push(h);o.length;){const A=o.pop(),b=A%t,C=A/t|0;if(m+=1,b<u&&(u=b),b>f&&(f=b),C<g&&(g=C),C>v&&(v=C),b>0){const R=A-1;!i[R]&&n[R*4+3]>Vs&&(i[R]=1,o.push(R))}if(b+1<t){const R=A+1;!i[R]&&n[R*4+3]>Vs&&(i[R]=1,o.push(R))}if(C>0){const R=A-t;!i[R]&&n[R*4+3]>Vs&&(i[R]=1,o.push(R))}if(C+1<e){const R=A+t;!i[R]&&n[R*4+3]>Vs&&(i[R]=1,o.push(R))}}if(m<Tx)continue;const p=Math.max(0,u-zr),_=Math.max(0,g-zr),x=Math.min(t-1,f+zr),y=Math.min(e-1,v+zr);s.push({minX:p,minY:_,maxX:x,maxY:y,area:m})}}return s.sort((a,c)=>a.minY-c.minY||a.minX-c.minX),s}async function Du(){if(kr)return kr;const r=new URL("/assets/Y%C3%BCzler-ByMiYByk.png",import.meta.url).href,t=await Ax(r),e=document.createElement("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,e.width,e.height),n.drawImage(t,0,0);const i=n.getImageData(0,0,e.width,e.height),s=Cx(i,e.width,e.height),o=new hn(e);return o.flipY=!0,o.wrapS=jn,o.wrapT=jn,o.colorSpace=_e,o.minFilter=Ld,o.magFilter=wn,o.generateMipmaps=!0,o.anisotropy=8,o.needsUpdate=!0,kr={url:r,width:e.width,height:e.height,boxes:s,baseTexture:o,getUVForSeed(a){const c=Number.isFinite(a)?Math.floor(a):0,l=s.length||1,h=(c%l+l)%l,d=s[h]||{minX:0,minY:0,maxX:e.width-1,maxY:e.height-1},u=d.minX/e.width,f=(d.maxX+1)/e.width,g=d.minY/e.height,m=1-(d.maxY+1)/e.height,p=1-g;return{index:h,offsetU:u,offsetV:m,repeatU:Math.max(1e-6,f-u),repeatV:Math.max(1e-6,p-m)}},makeTextureForSeed(a){const c=o.clone(),l=this.getUVForSeed(a);return c.offset.set(l.offsetU,l.offsetV),c.repeat.set(l.repeatU,l.repeatV),c.needsUpdate=!0,c}},kr}const dh=.92;function fh(r,t,e){const n=Math.atan2(Math.sin(t-r),Math.cos(t-r));return r+n*e}function Rx(r){return r?r.pos?r.pos:r.position?r.position:null:null}function Px(r){return r?Number.isFinite(r.yaw)?r.yaw:Number.isFinite(r.rotation)?r.rotation:0:0}class Lx{constructor(t,e={x:0,y:dh,z:5}){this.world=t,this.maxSpeed=17,this.sprintSpeed=24,this.accelRate=18,this.frictionRate=10.5,this.rotationSmoothing=13.5,this.maxTurnRateRad=6.5,this.lookSensitivity=.0026,this.cameraAngle={x:-.2,y:0},this.defaultCameraPitch=-.2,this.modelYawOffset=0,this.bodyYaw=0,this.simBasisYaw=this.cameraAngle.y,this.movementMode="basis_yaw",this.planarVelocity={x:0,z:0},this.activeGroundY=dh,this.fixedStep=1/60,this.moveAccumulator=0,this.networkAccumulator=0,this.tmpTargetPos=new D,this.tmpQuat=new Bi,this.upAxis=new D(0,1,0),this.tmpCamOffset=new D,this.tmpCamTarget=new D,this.tmpLookTarget=new D,this.renderPos=new D,this.slideDir={x:0,z:1},this.slideSpeed=0,this.physicsHalfHeight=.9,this.visualOffsetY=0,this.extraFootLift=-.02,this.stamina=1,this.canSprint=!0,this.shotChargeTime=0,this.maxChargeTime=1,this.chargeRatio=0,this.isCharging=!1,this.curveCharge=0,this.maxCurve=.9,this.curveRate=2.6,this.keys={},this.keyEdge={},this.walkCycle=0,this.isSliding=!1,this.slideTime=0,this.slideCooldown=0,this.isGoalkeeper=!1,this.role="active",this.isSpectator=!1,this.seatId=null,this.lastInputSeq=0,this.lastAckSeq=0,this.localTick=0,this.pendingInputs=[],this.maxPendingInputs=240,this.hardSnapDist=1.2,this.softMinDist=.1,this.correctionSamples=[],this.maxCorrectionSamples=180,this.lastCorrectionP95=0,this.lastServerSnapshot=0,this.wasSpectatorMode=!1,this.lastMouseMoveAt=performance.now(),this.rearLockDelayMs=250,this.rearLockDurationSec=.6,this.rearLockActive=!0,this.faceSeed=null,this.faceAtlas=null,this.facePlane=null,this.faceMat=null,this.faceTex=null,this.nick="",this.nameTagSprite=null,this.emoteSprite=null,this.emoteUntilMs=0,this.mobileMoveX=0,this.mobileMoveZ=0,this.initVisuals(),this.initPhysics(e),this.initControls(),this.initCurveArrow(),this.renderPos.set(e.x,this.activeGroundY,e.z)}getLockedHeadingYaw(t=this.team){return t==="blue"?Math.PI:0}setServerState(t,e=null){var s;if(!t)return;if(Number.isFinite(e)){if(e<this.lastAckSeq)return;for(this.lastAckSeq=Math.max(this.lastAckSeq,e);this.pendingInputs.length&&this.pendingInputs[0].seq<=e;)this.pendingInputs.shift()}this.lastServerSnapshot=performance.now();const n=!!this.keys.w||!!this.keys.arrowup||!!this.keys.s||!!this.keys.arrowdown||!!this.keys.a||!!this.keys.arrowleft||!!this.keys.d||!!this.keys.arrowright;if(this.role=t.role||this.role,this.isSpectator=this.role==="spectator"||!!t.isSpectator,this.seatId=Number.isInteger(t.seatId)?t.seatId:null,this.isGoalkeeper=!!t.isGoalkeeper,this.isSpectator&&(this.pendingInputs.length=0),Number.isFinite(t.stamina)&&(this.stamina=Math.max(0,Math.min(1,t.stamina)),this.canSprint=this.stamina>.08),t.team&&t.team!==this.team){this.team=t.team;const o=this.team==="red"?16724016:this.team==="blue"?3180799:8947848;this.bodyMat.color.setHex(o),this.armMat.color.setHex(o)}if(`${t.nick||""}`&&t.nick!==this.nick&&(this.nick=t.nick,this.redrawNameTag()),(s=t.actionState)!=null&&s.isSliding){this.isSliding=!0;const o=Number(t.actionState.slideDirX),a=Number(t.actionState.slideDirZ);if(Number.isFinite(o)&&Number.isFinite(a)){const l=Math.hypot(o,a);l>1e-5&&(this.slideDir.x=o/l,this.slideDir.z=a/l)}const c=Number(t.actionState.slideSpeed);Number.isFinite(c)&&c>0&&(this.slideSpeed=c),this.slideTime=Math.max(this.slideTime,.08)}else this.slideTime<=0&&(this.isSliding=!1,this.slideSpeed=0);const i=Rx(t);if(i&&this.body){const o=t.vel||t.velocity;let a={posX:Number(i.x)||0,posZ:Number(i.z)||0,velX:Number(o==null?void 0:o.x)||0,velZ:Number(o==null?void 0:o.z)||0,yaw:Px(t),stamina:this.stamina,slideActive:this.isSliding&&this.slideTime>0,slideDirX:this.slideDir.x,slideDirZ:this.slideDir.z,slideSpeed:this.slideSpeed};if(!this.isSpectator&&this.pendingInputs.length>0){const g=this.getMovementConfig();for(const v of this.pendingInputs)a=uh(a,v.input,g,v.dt)}const c=a.posX-this.body.position.x,l=a.posZ-this.body.position.z,h=Math.hypot(c,l),d=this.isSpectator?i.y:this.activeGroundY;if(this.isSpectator||h>this.hardSnapDist)this.body.position.set(a.posX,d,a.posZ),this.planarVelocity.x=a.velX,this.planarVelocity.z=a.velZ,this.bodyYaw=Mn(a.yaw),this.recordCorrectionSample(h);else if(h>=this.softMinDist){const g=Math.min(1,Math.max(0,(h-this.softMinDist)/(this.hardSnapDist-this.softMinDist)));let v=n?Lt.lerp(.035,.14,g):Lt.lerp(.14,.3,g);this.body.position.x+=c*v,this.body.position.z+=l*v,this.body.position.y=d,this.recordCorrectionSample(h)}else this.body.position.y=d;const u=n?.16:.28;this.planarVelocity.x=Lt.lerp(this.planarVelocity.x,a.velX,u),this.planarVelocity.z=Lt.lerp(this.planarVelocity.z,a.velZ,u);const f=n?.14:.3;this.bodyYaw=Mn(fh(this.bodyYaw,a.yaw,f)),this.stamina=a.stamina}Number.isFinite(t.faceSeed)&&this.applyFaceSeed(t.faceSeed)}initVisuals(){const t=new ae;this.mesh=t,t.scale.set(1.18,1.18,1.18),this.torsoGroup=new ae,t.add(this.torsoGroup),this.addNameTag(),this.addEmoteBubble();const e=new Se(.6,.7,.35);this.bodyMat=new Xt({color:3180799,roughness:.6,metalness:.08}),this.chest=new ct(e,this.bodyMat),this.chest.position.y=.45,this.torsoGroup.add(this.chest);const n=new Se(.5,.2,.3),i=new Xt({color:1052688,roughness:.8});this.pelvis=new ct(n,i),this.pelvis.position.y=.05,this.torsoGroup.add(this.pelvis);const s=new Nn(.22,20,20),o=new Xt({color:16767916,roughness:.45});this.head=new ct(s,o),this.head.position.y=.9,this.torsoGroup.add(this.head);const a=new De(.62,.62);this.faceMat=new an({color:16777215,transparent:!0,alphaTest:.12,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.faceMat.toneMapped=!1,this.facePlane=new ct(a,this.faceMat),this.facePlane.position.set(0,.9,.28),this.facePlane.castShadow=!1,this.facePlane.receiveShadow=!1,this.torsoGroup.add(this.facePlane);const c=new Nn(.225,18,14),l=new Xt({color:2825232,roughness:.85}),h=new ct(c,l);h.position.y=1.02,h.scale.set(1,.58,1),this.torsoGroup.add(h);const d=new Nn(.02,8,8),u=new Xt({color:2042938,roughness:.2,metalness:.2}),f=new ct(d,u);f.position.set(-.06,.9,.2),this.torsoGroup.add(f);const g=new ct(d,u);g.position.set(.06,.9,.2),this.torsoGroup.add(g);const v=new Se(.06,.7,.02),m=new Xt({color:16777215,roughness:.5}),p=new ct(v,m);p.position.set(-.1,.45,.18),this.torsoGroup.add(p);const _=new ct(v,m);_.position.set(.1,.45,.18),this.torsoGroup.add(_);const x=new Xt({color:1118481,roughness:.75}),y=new Ze(.08,.07,.45,10),A=new Ze(.07,.06,.45,10),b=new Se(.3,.1,.3),C=new Xt({color:15856113,roughness:.7});this.leftThigh=new ae,this.leftThigh.position.set(-.18,.05,0);const R=new ct(y,x);R.position.y=-.225,this.leftThigh.add(R),this.torsoGroup.add(this.leftThigh),this.leftCalf=new ae,this.leftCalf.position.y=-.45;const S=new ct(A,x);S.position.y=-.225,this.leftCalf.add(S),this.leftThigh.add(this.leftCalf),this.leftFoot=new ct(b,C),this.leftFoot.position.set(0,-.45,.05),this.leftCalf.add(this.leftFoot),this.rightThigh=new ae,this.rightThigh.position.set(.18,.05,0);const M=new ct(y,x);M.position.y=-.225,this.rightThigh.add(M),this.torsoGroup.add(this.rightThigh),this.rightCalf=new ae,this.rightCalf.position.y=-.45;const L=new ct(A,x);L.position.y=-.225,this.rightCalf.add(L),this.rightThigh.add(this.rightCalf),this.rightFoot=new ct(b,C),this.rightFoot.position.set(0,-.45,.05),this.rightCalf.add(this.rightFoot);const k=new Ze(.07,.06,.4,10);this.armMat=new Xt({color:3180799,roughness:.65}),this.leftUpperArm=new ae,this.leftUpperArm.position.set(-.35,.7,0);const I=new ct(k,this.armMat);I.position.y=-.2,this.leftUpperArm.add(I),this.torsoGroup.add(this.leftUpperArm),this.leftForearm=new ae,this.leftForearm.position.y=-.4;const U=new ct(k,this.armMat);U.position.y=-.2,this.leftForearm.add(U),this.leftUpperArm.add(this.leftForearm),this.rightUpperArm=new ae,this.rightUpperArm.position.set(.35,.7,0);const O=new ct(k,this.armMat);O.position.y=-.2,this.rightUpperArm.add(O),this.torsoGroup.add(this.rightUpperArm),this.rightForearm=new ae,this.rightForearm.position.y=-.4;const N=new ct(k,this.armMat);N.position.y=-.2,this.rightForearm.add(N),this.rightUpperArm.add(this.rightForearm),t.updateMatrixWorld(!0);const $=new Oi().setFromObject(t);Number.isFinite($.min.y)&&(this.visualOffsetY=-this.physicsHalfHeight-$.min.y+this.extraFootLift),t.traverse(z=>{z&&z.isMesh&&(z.castShadow=!0,z.receiveShadow=!0)}),this.world.scene.add(t)}addNameTag(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=256,t.height=64,e.font="bold 38px Arial",e.fillStyle="white",e.textAlign="center",e.fillText("",128,46);const n=new hn(t);n.colorSpace=_e;const i=new er({map:n,depthTest:!1,transparent:!0});this.nameTagSprite=new so(i),this.nameTagSprite.position.y=1.35,this.nameTagSprite.scale.set(2,.5,1),this.nameTagSprite.renderOrder=999,this.mesh.add(this.nameTagSprite)}redrawNameTag(){var s,o;if(!this.nameTagSprite)return;const t=document.createElement("canvas"),e=t.getContext("2d");t.width=256,t.height=64,e.font="bold 38px Arial",e.fillStyle="white",e.textAlign="center",e.fillText(this.nick||"",128,46);const n=new hn(t);n.colorSpace=_e;const i=this.nameTagSprite.material;i&&i.map&&((o=(s=i.map).dispose)==null||o.call(s)),i.map=n,i.needsUpdate=!0}addEmoteBubble(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=384,t.height=96,e.clearRect(0,0,t.width,t.height);const n=new hn(t);n.colorSpace=_e;const i=new er({map:n,depthTest:!1,transparent:!0});this.emoteSprite=new so(i),this.emoteSprite.position.y=1.75,this.emoteSprite.scale.set(2.4,.6,1),this.emoteSprite.visible=!1,this.emoteSprite.renderOrder=999,this.mesh.add(this.emoteSprite)}showEmote(t,e=3e3){if(!this.emoteSprite)return;const n=`${t||""}`.trim();if(!n)return;this.emoteUntilMs=performance.now()+Math.max(200,Number(e)||3e3);const i=this.emoteSprite.material,s=i==null?void 0:i.map,o=s==null?void 0:s.image;if(!o){this.emoteSprite.visible=!0;return}const a=o.getContext("2d");a.clearRect(0,0,o.width,o.height),a.fillStyle="rgba(0,0,0,0.55)",a.strokeStyle="rgba(255,255,255,0.25)",a.lineWidth=3;const c=10,l=18,h=o.width-c*2,d=o.height-c*2;a.beginPath(),a.moveTo(c+l,c),a.lineTo(c+h-l,c),a.quadraticCurveTo(c+h,c,c+h,c+l),a.lineTo(c+h,c+d-l),a.quadraticCurveTo(c+h,c+d,c+h-l,c+d),a.lineTo(c+l,c+d),a.quadraticCurveTo(c,c+d,c,c+d-l),a.lineTo(c,c+l),a.quadraticCurveTo(c,c,c+l,c),a.closePath(),a.fill(),a.stroke(),a.font="bold 44px Arial",a.fillStyle="#ffffff",a.textAlign="center",a.textBaseline="middle",a.fillText(n.slice(0,18),o.width/2,o.height/2),s.needsUpdate=!0,this.emoteSprite.visible=!0}applyFaceSeed(t){const e=Number.isFinite(t)?Math.floor(t):0;this.faceSeed!==e&&(this.faceSeed=e,Du().then(n=>{var i,s;this.faceAtlas=n,this.faceMat&&(this.faceTex&&((s=(i=this.faceTex).dispose)==null||s.call(i),this.faceTex=null),this.faceTex=n.makeTextureForSeed(e),this.faceMat.map=this.faceTex,this.faceMat.needsUpdate=!0)}).catch(()=>{}))}initPhysics(t){const e=new Nu(.55);this.body=new mt({mass:0,type:mt.KINEMATIC,position:new w(t.x,t.y,t.z),fixedRotation:!0}),this.body.addShape(e),this.body.collisionResponse=!1,this.world.physicsWorld.addBody(this.body)}initControls(){window.addEventListener("keydown",e=>{this.keys[e.key.toLowerCase()]=!0}),window.addEventListener("keyup",e=>{this.keys[e.key.toLowerCase()]=!1});const t=(()=>{try{if(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches)return!0}catch{}return"ontouchstart"in window||navigator.maxTouchPoints>0})();this.world.renderer.domElement.addEventListener("click",()=>{var e,n;t||(n=(e=this.world.renderer.domElement).requestPointerLock)==null||n.call(e)}),window.addEventListener("mousemove",e=>{document.pointerLockElement===this.world.renderer.domElement&&!this.isSpectator&&this.applyLookDelta(e.movementX,e.movementY,1)})}setMobileMove(t,e){this.mobileMoveX=Number.isFinite(t)?Math.max(-1,Math.min(1,t)):0,this.mobileMoveZ=Number.isFinite(e)?Math.max(-1,Math.min(1,e)):0}applyLookDelta(t,e,n=1){if(this.isSpectator)return;const i=Math.max(.1,Number(n)||1),s=Number(t)||0,o=Number(e)||0;this.cameraAngle.y-=s*this.lookSensitivity*i,this.cameraAngle.x-=o*this.lookSensitivity*i;const a=Lt.degToRad(-35),c=Lt.degToRad(20);this.cameraAngle.x=Math.max(a,Math.min(c,this.cameraAngle.x)),this.lastMouseMoveAt=performance.now(),this.rearLockActive=!1}initCurveArrow(){const t=new mu([new D(0,0,0),new D(0,0,2),new D(0,0,4)]),e=new _c(t,10,.05,8,!1),n=new an({color:16776960,transparent:!0,opacity:0});this.curveArrow=new ct(e,n),this.curveArrow.position.y=.5,this.world.scene.add(this.curveArrow)}wasPressed(t){const e=!!this.keys[t],n=!!this.keyEdge[t];return this.keyEdge[t]=e,e&&!n}updateStaminaUI(){var e;const t=(e=this.world.ui)==null?void 0:e.staminaBar;t&&(t.style.width=`${this.stamina*100}%`,t.style.background=this.canSprint?"linear-gradient(90deg, #0099ff, #00ffff)":"#4d4d4d")}getMovementConfig(){var i,s;const t=(s=(i=window.network)==null?void 0:i.matchConfig)==null?void 0:s.pitch,e=((t==null?void 0:t.halfWidth)??24)-.6,n=((t==null?void 0:t.halfDepth)??39)-.6;return{walkSpeed:this.maxSpeed,sprintSpeed:this.sprintSpeed,accelGround:this.accelRate,friction:this.frictionRate,rotationSmoothing:this.rotationSmoothing,maxTurnRateRad:this.maxTurnRateRad,sprintDrain:.34,staminaRefill:.12,staminaMinSprint:.08,maxPlayerSpeed:25,slideDecel:28,slideStopSpeed:.25,xLimit:e,zLimit:n}}advanceSimBasisYaw(t){const e=Math.max(0,Number(t)||0);if(e<=0)return;const n=.35*(e/this.fixedStep),i=Sc(this.simBasisYaw,this.cameraAngle.y);Math.abs(i)>n?this.simBasisYaw=Mn(this.simBasisYaw+Math.sign(i)*n):this.simBasisYaw=Mn(this.cameraAngle.y)}recordCorrectionSample(t){!Number.isFinite(t)||t<=0||(this.correctionSamples.push(t),this.correctionSamples.length>this.maxCorrectionSamples&&this.correctionSamples.shift())}consumeCorrectionP95(){if(!this.correctionSamples.length)return this.lastCorrectionP95;const t=[...this.correctionSamples].sort((n,i)=>n-i),e=Math.min(t.length-1,Math.floor(t.length*.95));return this.lastCorrectionP95=t[e],this.correctionSamples.length=0,this.lastCorrectionP95}startLocalSlide(){const t=Math.hypot(this.planarVelocity.x,this.planarVelocity.z);t>.2?(this.slideDir.x=this.planarVelocity.x/t,this.slideDir.z=this.planarVelocity.z/t):(this.slideDir.x=Math.sin(this.bodyYaw),this.slideDir.z=Math.cos(this.bodyYaw)),this.slideSpeed=Math.max(9,t+6.2),this.slideTime=.65,this.isSliding=!0}stepMovement(t,e,n,i){this.slideTime>0&&(this.slideTime=Math.max(0,this.slideTime-i)),this.advanceSimBasisYaw(i);const s=uh({posX:this.body.position.x,posZ:this.body.position.z,velX:this.planarVelocity.x,velZ:this.planarVelocity.z,yaw:this.bodyYaw,stamina:this.stamina,slideActive:this.isSliding&&this.slideTime>0,slideDirX:this.slideDir.x,slideDirZ:this.slideDir.z,slideSpeed:this.slideSpeed},{moveX:t,moveZ:e,sprint:n,basisYaw:this.simBasisYaw,headingYaw:0,movementMode:this.movementMode,lookYaw:this.cameraAngle.y},this.getMovementConfig(),i);this.body.position.x=s.posX,this.body.position.z=s.posZ,this.body.position.y=this.activeGroundY,this.planarVelocity.x=s.velX,this.planarVelocity.z=s.velZ,this.bodyYaw=Mn(s.yaw),this.stamina=s.stamina,this.slideDir.x=s.slideDirX,this.slideDir.z=s.slideDirZ,this.slideSpeed=s.slideSpeed,this.isSliding=s.slideActive&&this.slideTime>0,!this.isSliding&&this.slideTime<=0&&(this.slideSpeed=0),this.canSprint=this.stamina>.08}update(t){var p,_,x;if(this.emoteSprite&&performance.now()>=this.emoteUntilMs&&(this.emoteSprite.visible=!1),this.isSpectator){this.body.velocity.set(0,0,0),this.planarVelocity.x=0,this.planarVelocity.z=0,this.moveAccumulator=0,this.networkAccumulator=0,this.renderPos.copy(this.body.position),this.mesh.position.copy(this.body.position),this.mesh.position.y+=this.visualOffsetY,this.mesh.visible=!1,this.curveArrow.material.opacity=0,window.isReplayActive||this.updateSpectatorCamera(t);return}if(this.mesh.visible=!0,window.isReplayActive){this.body.quaternion.set(0,0,0,1),this.body.angularVelocity.set(0,0,0),this.body.velocity.set(0,0,0),this.planarVelocity.x=0,this.planarVelocity.z=0,this.moveAccumulator=0,this.networkAccumulator=0,this.renderPos.copy(this.body.position),this.mesh.position.copy(this.body.position),this.mesh.position.y=this.body.position.y+this.visualOffsetY,this.curveArrow.material.opacity=0;return}this.body.quaternion.set(0,0,0,1),this.body.angularVelocity.set(0,0,0),this.body.velocity.set(0,0,0),this.body.position.y=this.activeGroundY,this.slideCooldown>0&&(this.slideCooldown=Math.max(0,this.slideCooldown-t));const e=!!(this.keys.w||this.keys.arrowup),n=!!(this.keys.s||this.keys.arrowdown),i=!!(this.keys.a||this.keys.arrowleft),s=!!(this.keys.d||this.keys.arrowright);let o=(e?1:0)-(n?1:0),a=(s?1:0)-(i?1:0);Math.abs(this.mobileMoveX)+Math.abs(this.mobileMoveZ)>.01&&(a=this.mobileMoveX,o=this.mobileMoveZ);const c=a!==0||o!==0,l=!!this.keys.shift&&c&&this.canSprint,h=(window.matchFlowState||"live")!=="live";if(performance.now()-this.lastMouseMoveAt>=this.rearLockDelayMs&&(this.rearLockActive=!0),h){this.body.velocity.set(0,0,0),this.planarVelocity.x=0,this.planarVelocity.z=0,this.slideTime=0,this.slideSpeed=0,this.isSliding=!1,this.moveAccumulator=0,this.networkAccumulator+=t,this.networkAccumulator>=.1&&(this.sendInputFrame(a,o,l,!1),this.networkAccumulator=0),this.updateStaminaUI(),this.renderPos.copy(this.body.position),this.tmpQuat.setFromAxisAngle(this.upAxis,this.bodyYaw+this.modelYawOffset),this.mesh.quaternion.slerp(this.tmpQuat,1-Math.exp(-14*t)),this.tmpTargetPos.set(this.body.position.x,this.body.position.y+this.visualOffsetY,this.body.position.z),this.mesh.position.copy(this.tmpTargetPos),this.curveArrow.material.opacity=0,window.isReplayActive||this.updateCamera(t);return}const d=((p=window.network)==null?void 0:p.myId)||null,u=!!(d&&((x=(_=this.world)==null?void 0:_.ball)==null?void 0:x.controlledBy)===d);this.wasPressed("x")&&this.slideCooldown===0&&!u&&(this.slideCooldown=.9,this.startLocalSlide(),this.sendAction(yn.slide)),this.wasPressed("z")&&this.sendAction(yn.pass,.45,this.curveCharge),this.wasPressed("c")&&this.sendAction(yn.through,.58,this.curveCharge),this.wasPressed("v")&&this.sendAction(yn.cross,.62,this.curveCharge),this.wasPressed("g")&&this.sendAction(yn.keeperCatch,0,0),this.keys.q?this.curveCharge=Math.max(-this.maxCurve,this.curveCharge-this.curveRate*t):this.keys.e?this.curveCharge=Math.min(this.maxCurve,this.curveCharge+this.curveRate*t):this.isCharging||(Math.abs(this.curveCharge)<.08?this.curveCharge=0:this.curveCharge-=Math.sign(this.curveCharge)*this.curveRate*t),this.keys[" "]?(this.isCharging||(this.isCharging=!0,this.shotChargeTime=0),this.shotChargeTime=Math.min(this.maxChargeTime,this.shotChargeTime+t),this.chargeRatio=this.shotChargeTime/this.maxChargeTime):this.isCharging&&(this.sendAction(yn.shoot,this.chargeRatio,this.curveCharge),this.isCharging=!1,this.shotChargeTime=0,this.chargeRatio=0,this.curveCharge=0),this.moveAccumulator+=t,this.moveAccumulator>this.fixedStep*3&&(this.moveAccumulator=this.fixedStep*3);let f=0;for(;this.moveAccumulator>=this.fixedStep;)if(this.stepMovement(a,o,l,this.fixedStep),this.moveAccumulator-=this.fixedStep,f+=1,f>=3){this.moveAccumulator=0;break}this.networkAccumulator+=t,this.networkAccumulator>this.fixedStep*3&&(this.networkAccumulator=this.fixedStep*3);let g=0;for(;this.networkAccumulator>=this.fixedStep&&g<3;)this.sendInputFrame(a,o,l,!0),this.networkAccumulator-=this.fixedStep,g+=1;this.updateStaminaUI(),this.tmpTargetPos.set(this.body.position.x,this.body.position.y,this.body.position.z);const v=1-Math.exp(-20*t);this.renderPos.lerp(this.tmpTargetPos,v),this.renderPos.distanceToSquared(this.tmpTargetPos)>16&&this.renderPos.copy(this.tmpTargetPos),this.tmpQuat.setFromAxisAngle(this.upAxis,this.bodyYaw+this.modelYawOffset),this.mesh.quaternion.slerp(this.tmpQuat,1-Math.exp(-14*t));const m=Math.hypot(this.planarVelocity.x,this.planarVelocity.z);this.updateAnimation(t,m),this.mesh.position.set(this.renderPos.x,this.renderPos.y+this.visualOffsetY,this.renderPos.z),this.isCharging||Math.abs(this.curveCharge)>.1?(this.curveArrow.material.opacity=.8,this.curveArrow.position.copy(this.renderPos),this.curveArrow.position.y=.12,this.curveArrow.rotation.y=this.bodyYaw):this.curveArrow.material.opacity=0,window.isReplayActive||this.updateCamera(t)}sendInputFrame(t,e,n,i=!0){var s;(s=window.network)!=null&&s.sendInputFrame&&(this.lastInputSeq+=1,this.localTick+=1,i&&!this.isSpectator&&!window.isReplayActive&&(this.pendingInputs.push({seq:this.lastInputSeq,tick:this.localTick,dt:this.fixedStep,input:{moveX:t,moveZ:e,sprint:!!n,basisYaw:this.simBasisYaw,headingYaw:0,movementMode:this.movementMode,lookYaw:this.cameraAngle.y}}),this.pendingInputs.length>this.maxPendingInputs&&this.pendingInputs.splice(0,this.pendingInputs.length-this.maxPendingInputs)),window.network.sendInputFrame({seq:this.lastInputSeq,tick:this.localTick,moveX:t,moveZ:e,sprint:n,dtMs:Math.round(this.fixedStep*1e3),basisYaw:this.simBasisYaw,headingYaw:0,movementMode:this.movementMode,lookYaw:this.cameraAngle.y,facingYaw:this.bodyYaw,lookPitch:this.cameraAngle.x}))}sendAction(t,e=0,n=0){var i;(i=window.network)!=null&&i.sendActionRequest&&window.network.sendActionRequest({type:t,charge:e,curve:n})}updateAnimation(t,e){if(this.isSliding){const n=14*t;this.torsoGroup.rotation.x=Lt.lerp(this.torsoGroup.rotation.x,.05,n),this.leftThigh.rotation.x=Lt.lerp(this.leftThigh.rotation.x,-.62,n),this.leftCalf.rotation.x=Lt.lerp(this.leftCalf.rotation.x,.2,n),this.rightThigh.rotation.x=Lt.lerp(this.rightThigh.rotation.x,.16,n),this.rightCalf.rotation.x=Lt.lerp(this.rightCalf.rotation.x,-.72,n),this.leftUpperArm.rotation.x=Lt.lerp(this.leftUpperArm.rotation.x,-.15,n),this.rightUpperArm.rotation.x=Lt.lerp(this.rightUpperArm.rotation.x,.22,n);return}if(e>.45){const n=Math.min(1,e/this.sprintSpeed),i=.74+n*.36,s=4.3+n*4.6;this.walkCycle+=t*s;const o=Math.sin(this.walkCycle),a=o*i,c=Math.max(0,-o)*(.3+n*.34);this.leftThigh.rotation.x=a,this.rightThigh.rotation.x=-a,this.leftCalf.rotation.x=o<0?-c:0,this.rightCalf.rotation.x=o>0?-c:0,this.leftUpperArm.rotation.x=-a*.5,this.rightUpperArm.rotation.x=a*.5,this.torsoGroup.rotation.x=Lt.lerp(this.torsoGroup.rotation.x,-.06*n,10*t)}else{const n=6*t;this.torsoGroup.rotation.x=Lt.lerp(this.torsoGroup.rotation.x,0,n),this.leftThigh.rotation.x=Lt.lerp(this.leftThigh.rotation.x,0,n),this.rightThigh.rotation.x=Lt.lerp(this.rightThigh.rotation.x,0,n),this.leftCalf.rotation.x=Lt.lerp(this.leftCalf.rotation.x,0,n),this.rightCalf.rotation.x=Lt.lerp(this.rightCalf.rotation.x,0,n),this.leftUpperArm.rotation.x=Lt.lerp(this.leftUpperArm.rotation.x,0,n),this.rightUpperArm.rotation.x=Lt.lerp(this.rightUpperArm.rotation.x,0,n)}}updateCamera(t){if(performance.now()-this.lastMouseMoveAt>=this.rearLockDelayMs&&(this.rearLockActive=!0),this.rearLockActive){const s=6/Math.max(.1,this.rearLockDurationSec);this.cameraAngle.y=fh(this.cameraAngle.y,this.bodyYaw,1-Math.exp(-s*t)),this.cameraAngle.x=Lt.lerp(this.cameraAngle.x,this.defaultCameraPitch,1-Math.exp(-4*t))}const n=8;this.tmpCamOffset.set(-Math.sin(this.cameraAngle.y)*Math.cos(this.cameraAngle.x)*n,Math.sin(-this.cameraAngle.x)*n+4,-Math.cos(this.cameraAngle.y)*Math.cos(this.cameraAngle.x)*n),this.tmpCamTarget.copy(this.renderPos).add(this.tmpCamOffset),this.world.camera.position.lerp(this.tmpCamTarget,1-Math.exp(-12*t)),this.tmpLookTarget.copy(this.renderPos),this.tmpLookTarget.y+=1.45,this.world.camera.lookAt(this.tmpLookTarget)}updateSpectatorCamera(t){var i;const e=(i=this.world.stadium)==null?void 0:i.getSpectatorSeat(this.seatId??0);if(e){this.body.position.set(e.position.x,e.position.y,e.position.z),this.tmpCamTarget.set(e.position.x,e.position.y+.9,e.position.z),this.world.camera.position.lerp(this.tmpCamTarget,1-Math.exp(-8*t)),this.world.camera.lookAt(e.lookAt);return}const n=this.body.position;this.tmpCamTarget.set(n.x,n.y+.8,n.z),this.world.camera.position.lerp(this.tmpCamTarget,1-Math.exp(-8*t)),this.world.camera.lookAt(0,2.5,0)}shoot(){}}class Ix{constructor(t){this.container=t,this.clientPhysicsEnabled=!1,this.matchConfig=null,this.weatherMode="day",this.isMobile=(()=>{try{if(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches)return!0}catch{}return"ontouchstart"in window||navigator.maxTouchPoints>0})(),this.frameCount=0,this.fpsTimer=performance.now(),this.fpsAccum=0,this.fpsSampleCount=0,this.fpsAvg=0,this.maxFrameSamples=300,this.frameMsRing=new Float32Array(this.maxFrameSamples),this.frameMsRingCount=0,this.frameMsRingIndex=0,this.frameP95=0,this.shadowUpdateAccumulator=0,this.shadowUpdateInterval=1/20,this.lastCameraPos=new D,this.cameraMotion=0,this.perfFlags={stabilizationMode:!1,replayEnabled:!0,cloudsEnabled:!0,atmosphereEnabled:!0},this.initScene(),this.initPhysics(),this.initLights(),this.initCamera(),this.initRenderer(),this.initUI(),this.stadium=new vx(this),this.ball=new Mx(this,{x:0,y:2,z:0}),this.player=new Lx(this,{x:0,y:.92,z:5}),window.addEventListener("resize",()=>this.onWindowResize(),!1),this.applyPerfFlags(window.__perfFlags||null)}setMatchConfig(t){var i,s,o,a,c,l;this.matchConfig=t||null;const e=(t==null?void 0:t.pitch)||null,n=`${((i=t==null?void 0:t.weather)==null?void 0:i.mode)||""}`.toLowerCase();if((n==="day"||n==="night")&&this.applyWeatherMode(n),e&&((o=(s=this.sunLight)==null?void 0:s.shadow)!=null&&o.camera)){const h=Math.max(85,Math.max(Number(e.halfWidth)||24,Number(e.halfDepth)||39)*2.6);this.sunLight.shadow.camera.left=-h,this.sunLight.shadow.camera.right=h,this.sunLight.shadow.camera.top=h,this.sunLight.shadow.camera.bottom=-h,(c=(a=this.sunLight.shadow.camera).updateProjectionMatrix)==null||c.call(a),this.renderer.shadowMap.needsUpdate=!0}e&&((l=this.stadium)!=null&&l.rebuild)&&this.stadium.rebuild(e)}initUI(){this.ui={powerBarContainer:document.getElementById("power-bar-container"),powerBar:document.getElementById("power-bar"),staminaBar:document.getElementById("stamina-bar"),fpsLabel:document.getElementById("fps-label")}}initScene(){this.scene=new Lf,this.scene.background=new Wt(9356256),this.scene.fog=new Zs(9356256,95,330)}initPhysics(){this.physicsWorld=new lx({gravity:new w(0,-9.82,0)});const t=new As("default"),e=new Ts(t,t,{friction:.32,restitution:.2});this.physicsWorld.addContactMaterial(e)}initLights(){const t=new sp(4147802,.72);this.ambientLight=t,this.scene.add(t);const e=new vu(9425151,5599306,.52);this.hemisphereLight=e,this.scene.add(e);const n=new co(16774367,1.28);n.position.set(52,95,38),this.sunLight=n,n.castShadow=!0,n.shadow.bias=-18e-5,n.shadow.normalBias=.025,n.shadow.radius=2.5,n.shadow.mapSize.width=this.isMobile?1024:2048,n.shadow.mapSize.height=this.isMobile?1024:2048,n.shadow.camera.near=.5,n.shadow.camera.far=260,n.shadow.camera.left=-85,n.shadow.camera.right=85,n.shadow.camera.top=85,n.shadow.camera.bottom=-85,this.scene.add(n);const i=new co(12376319,.24);i.position.set(-40,32,-28),i.castShadow=!1,this.rimLight=i,this.scene.add(i)}applyWeatherMode(t){var n,i,s,o;const e=`${t||""}`.toLowerCase()==="night"?"night":"day";if(this.weatherMode===e){(i=(n=this.stadium)==null?void 0:n.setWeatherMode)==null||i.call(n,this.weatherMode);return}this.weatherMode=e,this.weatherMode==="night"?(this.scene.background=new Wt(461586),this.scene.fog=new Zs(461586,70,260),this.sunLight&&(this.sunLight.color.setHex(11192319),this.sunLight.intensity=.42),this.ambientLight&&(this.ambientLight.color.setHex(2240584),this.ambientLight.intensity=.38),this.hemisphereLight&&(this.hemisphereLight.color.setHex(2640752),this.hemisphereLight.groundColor.setHex(724754),this.hemisphereLight.intensity=.36),this.rimLight&&(this.rimLight.color.setHex(8368383),this.rimLight.intensity=.14),this.renderer&&(this.renderer.toneMappingExposure=.95,this.renderer.shadowMap.needsUpdate=!0)):(this.scene.background=new Wt(9356256),this.scene.fog=new Zs(9356256,95,330),this.sunLight&&(this.sunLight.color.setHex(16774367),this.sunLight.intensity=1.28),this.ambientLight&&(this.ambientLight.color.setHex(4147802),this.ambientLight.intensity=.72),this.hemisphereLight&&(this.hemisphereLight.color.setHex(9425151),this.hemisphereLight.groundColor.setHex(5599306),this.hemisphereLight.intensity=.52),this.rimLight&&(this.rimLight.color.setHex(12376319),this.rimLight.intensity=.24),this.renderer&&(this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.needsUpdate=!0)),(o=(s=this.stadium)==null?void 0:s.setWeatherMode)==null||o.call(s,this.weatherMode)}initCamera(){this.camera=new Qe(75,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.set(0,18,34),this.camera.lookAt(0,0,0),this.lastCameraPos.copy(this.camera.position)}initRenderer(){this.renderer=new Vv({antialias:!0,powerPreference:"high-performance"});const t=this.isMobile?.85:1;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oh,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.toneMapping=kh,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=_e,this.container.appendChild(this.renderer.domElement)}applyPerfFlags(t){var o,a,c;if(!t||typeof t!="object")return;this.perfFlags={...this.perfFlags,...t};const e=!!this.perfFlags.stabilizationMode;this.shadowUpdateInterval=e?.22:1/20;const n=e?.9:1,i=this.isMobile?.85:1,s=Math.min(window.devicePixelRatio,n*i);(o=this.renderer)==null||o.setPixelRatio(s),(c=(a=this.stadium)==null?void 0:a.applyFeatureGates)==null||c.call(a,this.perfFlags)}getPerfMetrics(){return{fpsAvg:this.fpsAvg,frameP95:this.frameP95}}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}update(t){var s,o;this.clientPhysicsEnabled&&this.physicsWorld.step(1/60,t,1);const e=Math.max(.1,t*1e3);this.frameMsRing[this.frameMsRingIndex]=e,this.frameMsRingIndex=(this.frameMsRingIndex+1)%this.maxFrameSamples,this.frameMsRingCount=Math.min(this.maxFrameSamples,this.frameMsRingCount+1),(s=this.stadium)==null||s.update(t),(o=this.ball)==null||o.update(),this.player&&(this.player.update(t),this.ui.powerBarContainer&&(this.player.isCharging?(this.ui.powerBarContainer.style.display="block",this.ui.powerBar.style.width=`${this.player.chargeRatio*100}%`):this.ui.powerBarContainer.style.display="none"));const n=this.camera.position.distanceTo(this.lastCameraPos);this.cameraMotion=Lt.lerp(this.cameraMotion,n,1-Math.exp(-10*t)),this.lastCameraPos.copy(this.camera.position),this.shadowUpdateAccumulator+=t;let i=this.shadowUpdateInterval;this.cameraMotion>.16?i*=2.2:this.cameraMotion>.08&&(i*=1.5),this.shadowUpdateAccumulator>=i&&(this.shadowUpdateAccumulator=0,this.renderer.shadowMap.needsUpdate=!0),this.renderer.render(this.scene,this.camera),this.updateFpsLabel()}updateFpsLabel(){if(!this.ui.fpsLabel)return;this.frameCount+=1;const t=performance.now();if(t-this.fpsTimer<500)return;const e=Math.round(this.frameCount*1e3/(t-this.fpsTimer));if(this.ui.fpsLabel.textContent=`FPS: ${e}`,this.fpsAccum+=e,this.fpsSampleCount+=1,this.fpsAvg=this.fpsSampleCount>0?this.fpsAccum/this.fpsSampleCount:e,this.fpsSampleCount>80&&(this.fpsAccum*=.5,this.fpsSampleCount=Math.ceil(this.fpsSampleCount*.5)),this.frameMsRingCount>10){const n=Array.from(this.frameMsRing.subarray(0,this.frameMsRingCount)).sort((s,o)=>s-o),i=Math.min(n.length-1,Math.floor(n.length*.95));this.frameP95=n[i]}this.frameCount=0,this.fpsTimer=t}}const Fn=Object.create(null);Fn.open="0";Fn.close="1";Fn.ping="2";Fn.pong="3";Fn.message="4";Fn.upgrade="5";Fn.noop="6";const Kr=Object.create(null);Object.keys(Fn).forEach(r=>{Kr[Fn[r]]=r});const tc={type:"error",data:"parser error"},Uu=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Fu=typeof ArrayBuffer=="function",Bu=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,Ec=({type:r,data:t},e,n)=>Uu&&t instanceof Blob?e?n(t):ph(t,n):Fu&&(t instanceof ArrayBuffer||Bu(t))?e?n(t):ph(new Blob([t]),n):n(Fn[r]+(t||"")),ph=(r,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(r)};function mh(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let aa;function Nx(r,t){if(Uu&&r.data instanceof Blob)return r.data.arrayBuffer().then(mh).then(t);if(Fu&&(r.data instanceof ArrayBuffer||Bu(r.data)))return t(mh(r.data));Ec(r,!1,e=>{aa||(aa=new TextEncoder),t(aa.encode(e))})}const gh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",qs=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<gh.length;r++)qs[gh.charCodeAt(r)]=r;const Dx=r=>{let t=r.length*.75,e=r.length,n,i=0,s,o,a,c;r[r.length-1]==="="&&(t--,r[r.length-2]==="="&&t--);const l=new ArrayBuffer(t),h=new Uint8Array(l);for(n=0;n<e;n+=4)s=qs[r.charCodeAt(n)],o=qs[r.charCodeAt(n+1)],a=qs[r.charCodeAt(n+2)],c=qs[r.charCodeAt(n+3)],h[i++]=s<<2|o>>4,h[i++]=(o&15)<<4|a>>2,h[i++]=(a&3)<<6|c&63;return l},Ux=typeof ArrayBuffer=="function",bc=(r,t)=>{if(typeof r!="string")return{type:"message",data:Ou(r,t)};const e=r.charAt(0);return e==="b"?{type:"message",data:Fx(r.substring(1),t)}:Kr[e]?r.length>1?{type:Kr[e],data:r.substring(1)}:{type:Kr[e]}:tc},Fx=(r,t)=>{if(Ux){const e=Dx(r);return Ou(e,t)}else return{base64:!0,data:r}},Ou=(r,t)=>{switch(t){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},zu="",Bx=(r,t)=>{const e=r.length,n=new Array(e);let i=0;r.forEach((s,o)=>{Ec(s,!1,a=>{n[o]=a,++i===e&&t(n.join(zu))})})},Ox=(r,t)=>{const e=r.split(zu),n=[];for(let i=0;i<e.length;i++){const s=bc(e[i],t);if(n.push(s),s.type==="error")break}return n};function zx(){return new TransformStream({transform(r,t){Nx(r,e=>{const n=e.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}r.data&&typeof r.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(e)})}})}let ca;function Gr(r){return r.reduce((t,e)=>t+e.length,0)}function Vr(r,t){if(r[0].length===t)return r.shift();const e=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)e[i]=r[0][n++],n===r[0].length&&(r.shift(),n=0);return r.length&&n<r[0].length&&(r[0]=r[0].slice(n)),e}function kx(r,t){ca||(ca=new TextDecoder);const e=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(n===0){if(Gr(e)<1)break;const c=Vr(e,1);s=(c[0]&128)===128,i=c[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Gr(e)<2)break;const c=Vr(e,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(Gr(e)<8)break;const c=Vr(e,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(tc);break}i=h*Math.pow(2,32)+l.getUint32(4),n=3}else{if(Gr(e)<i)break;const c=Vr(e,i);a.enqueue(bc(s?c:ca.decode(c),t)),n=0}if(i===0||i>r){a.enqueue(tc);break}}}})}const ku=4;function Ce(r){if(r)return Gx(r)}function Gx(r){for(var t in Ce.prototype)r[t]=Ce.prototype[t];return r}Ce.prototype.on=Ce.prototype.addEventListener=function(r,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(t),this};Ce.prototype.once=function(r,t){function e(){this.off(r,e),t.apply(this,arguments)}return e.fn=t,this.on(r,e),this};Ce.prototype.off=Ce.prototype.removeListener=Ce.prototype.removeAllListeners=Ce.prototype.removeEventListener=function(r,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+r];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var n,i=0;i<e.length;i++)if(n=e[i],n===t||n.fn===t){e.splice(i,1);break}return e.length===0&&delete this._callbacks["$"+r],this};Ce.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+r],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,i=e.length;n<i;++n)e[n].apply(this,t)}return this};Ce.prototype.emitReserved=Ce.prototype.emit;Ce.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};Ce.prototype.hasListeners=function(r){return!!this.listeners(r).length};const go=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),cn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Vx="arraybuffer";function Gu(r,...t){return t.reduce((e,n)=>(r.hasOwnProperty(n)&&(e[n]=r[n]),e),{})}const Hx=cn.setTimeout,Wx=cn.clearTimeout;function vo(r,t){t.useNativeTimers?(r.setTimeoutFn=Hx.bind(cn),r.clearTimeoutFn=Wx.bind(cn)):(r.setTimeoutFn=cn.setTimeout.bind(cn),r.clearTimeoutFn=cn.clearTimeout.bind(cn))}const Xx=1.33;function qx(r){return typeof r=="string"?Yx(r):Math.ceil((r.byteLength||r.size)*Xx)}function Yx(r){let t=0,e=0;for(let n=0,i=r.length;n<i;n++)t=r.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Vu(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function $x(r){let t="";for(let e in r)r.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(r[e]));return t}function Zx(r){let t={},e=r.split("&");for(let n=0,i=e.length;n<i;n++){let s=e[n].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class jx extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class Tc extends Ce{constructor(t){super(),this.writable=!1,vo(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new jx(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=bc(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=$x(t);return e.length?"?"+e:""}}class Kx extends Tc{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Ox(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Bx(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=Vu()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let Hu=!1;try{Hu=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Jx=Hu;function Qx(){}class tM extends Kx{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class Dn extends Ce{constructor(t,e,n){super(),this.createRequest=t,vo(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=Gu(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=Dn.requestsCount++,Dn.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Qx,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Dn.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Dn.requestsCount=0;Dn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",vh);else if(typeof addEventListener=="function"){const r="onpagehide"in cn?"pagehide":"unload";addEventListener(r,vh,!1)}}function vh(){for(let r in Dn.requests)Dn.requests.hasOwnProperty(r)&&Dn.requests[r].abort()}const eM=(function(){const r=Wu({xdomain:!1});return r&&r.responseType!==null})();class nM extends tM{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=eM&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Dn(Wu,this.uri(),t)}}function Wu(r){const t=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Jx))return new XMLHttpRequest}catch{}if(!t)try{return new cn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Xu=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class iM extends Tc{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=Xu?{}:Gu(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],i=e===t.length-1;Ec(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&go(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=Vu()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const la=cn.WebSocket||cn.MozWebSocket;class sM extends iM{createSocket(t,e,n){return Xu?new la(t,e,n):e?new la(t,e):new la(t)}doWrite(t,e){this.ws.send(e)}}class rM extends Tc{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=kx(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),i=zx();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:a,value:c})=>{a||(this.onPacket(c),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],i=e===t.length-1;this._writer.write(n).then(()=>{i&&go(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const oM={websocket:sM,webtransport:rM,polling:nM},aM=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,cM=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ec(r){if(r.length>8e3)throw"URI too long";const t=r,e=r.indexOf("["),n=r.indexOf("]");e!=-1&&n!=-1&&(r=r.substring(0,e)+r.substring(e,n).replace(/:/g,";")+r.substring(n,r.length));let i=aM.exec(r||""),s={},o=14;for(;o--;)s[cM[o]]=i[o]||"";return e!=-1&&n!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=lM(s,s.path),s.queryKey=hM(s,s.query),s}function lM(r,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function hM(r,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(e[i]=s)}),e}const nc=typeof addEventListener=="function"&&typeof removeEventListener=="function",Jr=[];nc&&addEventListener("offline",()=>{Jr.forEach(r=>r())},!1);class mi extends Ce{constructor(t,e){if(super(),this.binaryType=Vx,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const n=ec(t);e.hostname=n.host,e.secure=n.protocol==="https"||n.protocol==="wss",e.port=n.port,n.query&&(e.query=n.query)}else e.host&&(e.hostname=ec(e.host).host);vo(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Zx(this.opts.query)),nc&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Jr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=ku,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&mi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",mi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(e+=qx(i)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,go(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,i){if(typeof e=="function"&&(i=e,e=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:t,data:e,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(mi.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),nc&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Jr.indexOf(this._offlineEventListener);n!==-1&&Jr.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}mi.protocol=ku;class uM extends mi{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),n=!1;mi.priorWebsocketSuccess=!1;const i=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;mi.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const u=new Error("probe error");u.transport=e.name,this.emitReserved("upgradeError",u)}}))};function s(){n||(n=!0,h(),e.close(),e=null)}const o=d=>{const u=new Error("probe error: "+d);u.transport=e.name,s(),this.emitReserved("upgradeError",u)};function a(){o("transport closed")}function c(){o("socket closed")}function l(d){e&&d.name!==e.name&&s()}const h=()=>{e.removeListener("open",i),e.removeListener("error",o),e.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};e.once("open",i),e.once("error",o),e.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}let dM=class extends uM{constructor(t,e={}){const n=typeof t=="object"?t:e;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>oM[i]).filter(i=>!!i)),super(t,n)}};function fM(r,t="",e){let n=r;e=e||typeof location<"u"&&location,r==null&&(r=e.protocol+"//"+e.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=e.protocol+r:r=e.host+r),/^(https?|wss?):\/\//.test(r)||(typeof e<"u"?r=e.protocol+"//"+r:r="https://"+r),n=ec(r)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+t,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}const pM=typeof ArrayBuffer=="function",mM=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,qu=Object.prototype.toString,gM=typeof Blob=="function"||typeof Blob<"u"&&qu.call(Blob)==="[object BlobConstructor]",vM=typeof File=="function"||typeof File<"u"&&qu.call(File)==="[object FileConstructor]";function Ac(r){return pM&&(r instanceof ArrayBuffer||mM(r))||gM&&r instanceof Blob||vM&&r instanceof File}function Qr(r,t){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let e=0,n=r.length;e<n;e++)if(Qr(r[e]))return!0;return!1}if(Ac(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return Qr(r.toJSON(),!0);for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e)&&Qr(r[e]))return!0;return!1}function _M(r){const t=[],e=r.data,n=r;return n.data=ic(e,t),n.attachments=t.length,{packet:n,buffers:t}}function ic(r,t){if(!r)return r;if(Ac(r)){const e={_placeholder:!0,num:t.length};return t.push(r),e}else if(Array.isArray(r)){const e=new Array(r.length);for(let n=0;n<r.length;n++)e[n]=ic(r[n],t);return e}else if(typeof r=="object"&&!(r instanceof Date)){const e={};for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=ic(r[n],t));return e}return r}function yM(r,t){return r.data=sc(r.data,t),delete r.attachments,r}function sc(r,t){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<t.length)return t[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let e=0;e<r.length;e++)r[e]=sc(r[e],t);else if(typeof r=="object")for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&(r[e]=sc(r[e],t));return r}const Yu=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],xM=5;var kt;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(kt||(kt={}));class MM{constructor(t){this.replacer=t}encode(t){return(t.type===kt.EVENT||t.type===kt.ACK)&&Qr(t)?this.encodeAsBinary({type:t.type===kt.EVENT?kt.BINARY_EVENT:kt.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===kt.BINARY_EVENT||t.type===kt.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=_M(t),n=this.encodeAsString(e.packet),i=e.buffers;return i.unshift(n),i}}class Cc extends Ce{constructor(t){super(),this.reviver=t}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===kt.BINARY_EVENT;n||e.type===kt.BINARY_ACK?(e.type=n?kt.EVENT:kt.ACK,this.reconstructor=new wM(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(Ac(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(kt[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===kt.BINARY_EVENT||n.type===kt.BINARY_ACK){const s=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(s,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(t.charAt(e+1)==="/"){const s=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(s,e)}else n.nsp="/";const i=t.charAt(e+1);if(i!==""&&Number(i)==i){const s=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(s,e+1))}if(t.charAt(++e)){const s=this.tryParse(t.substr(e));if(Cc.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case kt.CONNECT:return ho(e);case kt.DISCONNECT:return e===void 0;case kt.CONNECT_ERROR:return typeof e=="string"||ho(e);case kt.EVENT:case kt.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Yu.indexOf(e[0])===-1);case kt.ACK:case kt.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class wM{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=yM(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function SM(r){return typeof r=="string"}const EM=Number.isInteger||function(r){return typeof r=="number"&&isFinite(r)&&Math.floor(r)===r};function bM(r){return r===void 0||EM(r)}function ho(r){return Object.prototype.toString.call(r)==="[object Object]"}function TM(r,t){switch(r){case kt.CONNECT:return t===void 0||ho(t);case kt.DISCONNECT:return t===void 0;case kt.EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Yu.indexOf(t[0])===-1);case kt.ACK:return Array.isArray(t);case kt.CONNECT_ERROR:return typeof t=="string"||ho(t);default:return!1}}function AM(r){return SM(r.nsp)&&bM(r.id)&&TM(r.type,r.data)}const CM=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Cc,Encoder:MM,get PacketType(){return kt},isPacketValid:AM,protocol:xM},Symbol.toStringTag,{value:"Module"}));function _n(r,t,e){return r.on(t,e),function(){r.off(t,e)}}const RM=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class $u extends Ce{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[_n(t,"open",this.onopen.bind(this)),_n(t,"packet",this.onpacket.bind(this)),_n(t,"error",this.onerror.bind(this)),_n(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,i,s;if(RM.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:kt.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const h=this.ids++,d=e.pop();this._registerAckCallback(h,d),o.id=h}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,c=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=e;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((n,i)=>{const s=(o,a)=>o?i(o):n(a);s.withError=!0,e.push(s),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(i)):(this._queue.shift(),e&&e(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:kt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case kt.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case kt.EVENT:case kt.BINARY_EVENT:this.onevent(t);break;case kt.ACK:case kt.BINARY_ACK:this.onack(t);break;case kt.DISCONNECT:this.ondisconnect();break;case kt.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...i){n||(n=!0,e.packet({type:kt.ACK,id:t,data:i}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:kt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function Cs(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}Cs.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*r);r=(Math.floor(t*10)&1)==0?r-e:r+e}return Math.min(r,this.max)|0};Cs.prototype.reset=function(){this.attempts=0};Cs.prototype.setMin=function(r){this.ms=r};Cs.prototype.setMax=function(r){this.max=r};Cs.prototype.setJitter=function(r){this.jitter=r};class rc extends Ce{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,vo(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Cs({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const i=e.parser||CM;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new dM(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=_n(e,"open",function(){n.onopen(),t&&t()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=_n(e,"error",s);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),e.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(_n(t,"ping",this.onping.bind(this)),_n(t,"data",this.ondata.bind(this)),_n(t,"error",this.onerror.bind(this)),_n(t,"close",this.onclose.bind(this)),_n(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){go(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new $u(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Hs={};function Qs(r,t){typeof r=="object"&&(t=r,r=void 0),t=t||{};const e=fM(r,t.path||"/socket.io"),n=e.source,i=e.id,s=e.path,o=Hs[i]&&s in Hs[i].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let c;return a?c=new rc(n,t):(Hs[i]||(Hs[i]=new rc(n,t)),c=Hs[i]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(Qs,{Manager:rc,Socket:$u,io:Qs,connect:Qs});const oc=.92;function PM(r,t,e){const n=Math.atan2(Math.sin(t-r),Math.cos(t-r));return r+n*e}function LM(r){return r?r.pos||r.position||{x:0,y:oc,z:0}:{x:0,y:oc,z:0}}function _h(r){return r?Number.isFinite(r.yaw)?r.yaw:Number.isFinite(r.rotation)?r.rotation:0:0}class yh{constructor(t,e,n){this.world=t,this.id=e,this.nick=n.nick,this.team=n.team,this.role=n.role||"active",this.physicsHalfHeight=.9,this.visualOffsetY=0,this.extraFootLift=-.02,this.tmpTargetPos=new D,this.tmpQuat=new Bi,this.upAxis=new D(0,1,0),this.modelYawOffset=0,this.currentYaw=_h(n),this.targetYaw=this.currentYaw,this.lastMeshPos=new D,this.predictedPos=new D,this.targetVelocity={x:0,z:0},this.renderSpeed=0,this.remoteIsSliding=!1,this.lastServerUpdateAt=performance.now(),this.snapshotDeltaSec=1/30,this.walkCycle=0,this.faceSeed=null,this.faceAtlas=null,this.facePlane=null,this.faceMat=null,this.faceTex=null,this.emoteSprite=null,this.emoteUntilMs=0,this.initVisuals(n),this.updateVisuals(n,!0),this.lastMeshPos.copy(this.mesh.position)}teleport(t){this.updateVisuals(t,!0)}initVisuals(t){const e=new ae;this.mesh=e,e.scale.set(1.18,1.18,1.18),this.torsoGroup=new ae,e.add(this.torsoGroup),this.addNameTag(),this.addEmoteBubble();const n=new Se(.6,.7,.35),i=this.team==="red"?16724016:this.team==="blue"?3180799:9474192;this.bodyMat=new Xt({color:i,roughness:.68,metalness:.08}),this.chest=new ct(n,this.bodyMat),this.chest.position.y=.45,this.torsoGroup.add(this.chest);const s=new Se(.5,.2,.3),o=new Xt({color:1052688});this.pelvis=new ct(s,o),this.pelvis.position.y=.05,this.torsoGroup.add(this.pelvis);const a=new Nn(.22,16,16),c=new Xt({color:16767916,roughness:.5});this.head=new ct(a,c),this.head.position.y=.9,this.torsoGroup.add(this.head);const l=new De(.62,.62);this.faceMat=new an({color:16777215,transparent:!0,alphaTest:.12,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),this.faceMat.toneMapped=!1,this.facePlane=new ct(l,this.faceMat),this.facePlane.position.set(0,.9,.28),this.facePlane.castShadow=!1,this.facePlane.receiveShadow=!1,this.torsoGroup.add(this.facePlane);const h=new Nn(.225,16,12),d=new Xt({color:2825232,roughness:.85}),u=new ct(h,d);u.position.y=1.02,u.scale.set(1,.58,1),this.torsoGroup.add(u);const f=new Se(.06,.7,.02),g=new Xt({color:16777215,roughness:.5}),v=new ct(f,g);v.position.set(-.1,.45,.18),this.torsoGroup.add(v);const m=new ct(f,g);m.position.set(.1,.45,.18),this.torsoGroup.add(m);const p=new Xt({color:1118481}),_=new Ze(.08,.07,.45,8),x=new Ze(.07,.06,.45,8),y=new Se(.3,.1,.3),A=new Xt({color:15790320});this.leftThigh=new ae,this.leftThigh.position.set(-.18,.05,0);const b=new ct(_,p);b.position.y=-.225,this.leftThigh.add(b),this.torsoGroup.add(this.leftThigh),this.leftCalf=new ae,this.leftCalf.position.y=-.45;const C=new ct(x,p);C.position.y=-.225,this.leftCalf.add(C),this.leftThigh.add(this.leftCalf),this.leftFoot=new ct(y,A),this.leftFoot.position.set(0,-.45,.05),this.leftCalf.add(this.leftFoot),this.rightThigh=new ae,this.rightThigh.position.set(.18,.05,0);const R=new ct(_,p);R.position.y=-.225,this.rightThigh.add(R),this.torsoGroup.add(this.rightThigh),this.rightCalf=new ae,this.rightCalf.position.y=-.45;const S=new ct(x,p);S.position.y=-.225,this.rightCalf.add(S),this.rightThigh.add(this.rightCalf),this.rightFoot=new ct(y,A),this.rightFoot.position.set(0,-.45,.05),this.rightCalf.add(this.rightFoot);const M=new Ze(.07,.06,.4,8);this.armMat=new Xt({color:i}),this.leftUpperArm=new ae,this.leftUpperArm.position.set(-.35,.7,0);const L=new ct(M,this.armMat);L.position.y=-.2,this.leftUpperArm.add(L),this.torsoGroup.add(this.leftUpperArm),this.rightUpperArm=new ae,this.rightUpperArm.position.set(.35,.7,0);const k=new ct(M,this.armMat);k.position.y=-.2,this.rightUpperArm.add(k),this.torsoGroup.add(this.rightUpperArm),this.world.scene.add(e),e.updateMatrixWorld(!0);const I=new Oi().setFromObject(e);Number.isFinite(I.min.y)&&(this.visualOffsetY=-this.physicsHalfHeight-I.min.y+this.extraFootLift),e.traverse(U=>{U&&U.isMesh&&(U.castShadow=!0,U.receiveShadow=!0)})}addNameTag(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=256,t.height=64,e.font="bold 38px Arial",e.fillStyle="white",e.textAlign="center",e.fillText(this.nick,128,46);const n=new hn(t);n.colorSpace=_e;const i=new er({map:n,depthTest:!1,transparent:!0});this.nameTagSprite=new so(i),this.nameTagSprite.position.y=1.35,this.nameTagSprite.scale.set(2,.5,1),this.nameTagSprite.renderOrder=999,this.mesh.add(this.nameTagSprite)}redrawNameTag(){var s,o;if(!this.nameTagSprite)return;const t=document.createElement("canvas"),e=t.getContext("2d");t.width=256,t.height=64,e.font="bold 38px Arial",e.fillStyle="white",e.textAlign="center",e.fillText(this.nick,128,46);const n=new hn(t);n.colorSpace=_e;const i=this.nameTagSprite.material;i&&i.map&&((o=(s=i.map).dispose)==null||o.call(s)),i.map=n,i.needsUpdate=!0}addEmoteBubble(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=384,t.height=96,e.clearRect(0,0,t.width,t.height);const n=new hn(t);n.colorSpace=_e;const i=new er({map:n,depthTest:!1,transparent:!0});this.emoteSprite=new so(i),this.emoteSprite.position.y=1.75,this.emoteSprite.scale.set(2.4,.6,1),this.emoteSprite.visible=!1,this.emoteSprite.renderOrder=999,this.mesh.add(this.emoteSprite)}showEmote(t,e=3e3){if(!this.emoteSprite)return;const n=`${t||""}`.trim();if(!n)return;this.emoteUntilMs=performance.now()+Math.max(200,Number(e)||3e3);const i=this.emoteSprite.material,s=i==null?void 0:i.map,o=s==null?void 0:s.image;if(!o){this.emoteSprite.visible=!0;return}const a=o.getContext("2d");a.clearRect(0,0,o.width,o.height),a.fillStyle="rgba(0,0,0,0.55)",a.strokeStyle="rgba(255,255,255,0.25)",a.lineWidth=3;const c=10,l=18,h=o.width-c*2,d=o.height-c*2;a.beginPath(),a.moveTo(c+l,c),a.lineTo(c+h-l,c),a.quadraticCurveTo(c+h,c,c+h,c+l),a.lineTo(c+h,c+d-l),a.quadraticCurveTo(c+h,c+d,c+h-l,c+d),a.lineTo(c+l,c+d),a.quadraticCurveTo(c,c+d,c,c+d-l),a.lineTo(c,c+l),a.quadraticCurveTo(c,c,c+l,c),a.closePath(),a.fill(),a.stroke(),a.font="bold 44px Arial",a.fillStyle="#ffffff",a.textAlign="center",a.textBaseline="middle",a.fillText(n.slice(0,18),o.width/2,o.height/2),s.needsUpdate=!0,this.emoteSprite.visible=!0}applyFaceSeed(t){const e=Number.isFinite(t)?Math.floor(t):0;this.faceSeed!==e&&(this.faceSeed=e,Du().then(n=>{var i,s;this.faceAtlas=n,this.faceMat&&(this.faceTex&&((s=(i=this.faceTex).dispose)==null||s.call(i),this.faceTex=null),this.faceTex=n.makeTextureForSeed(e),this.faceMat.map=this.faceTex,this.faceMat.needsUpdate=!0)}).catch(()=>{}))}updateVisuals(t,e=!1,n=null){var d;if(!t)return;const i=performance.now(),s=Math.max(.01,Math.min(.2,(i-this.lastServerUpdateAt)/1e3)),o=Number.isFinite(n)?Math.max(.01,Math.min(.2,n)):s;this.snapshotDeltaSec=o,this.lastServerUpdateAt=i,this.role=t.role||this.role,`${t.nick||""}`&&t.nick!==this.nick&&(this.nick=t.nick,this.redrawNameTag()),Number.isFinite(t.faceSeed)&&this.applyFaceSeed(t.faceSeed);const a=LM(t),c=_h(t),l=t.vel||t.velocity||{x:0,z:0};this.mesh.visible=!0;const h=this.role==="spectator"?a.y:oc;if(this.tmpTargetPos.set(a.x,h+this.visualOffsetY,a.z),this.targetYaw=c,this.targetVelocity.x=l.x||0,this.targetVelocity.z=l.z||0,this.remoteIsSliding=!!((d=t.actionState)!=null&&d.isSliding||t.isSliding),e&&(this.mesh.position.copy(this.tmpTargetPos),this.currentYaw=this.targetYaw,this.tmpQuat.setFromAxisAngle(this.upAxis,this.currentYaw+this.modelYawOffset),this.mesh.quaternion.copy(this.tmpQuat),this.applyPose(.016,Math.hypot(this.targetVelocity.x,this.targetVelocity.z),this.remoteIsSliding,!0,this.role==="spectator"),this.lastMeshPos.copy(this.mesh.position),this.renderSpeed=0),this.team!==t.team){this.team=t.team;const u=this.team==="red"?16724016:this.team==="blue"?3180799:9474192;this.bodyMat.color.setHex(u),this.armMat.color.setHex(u)}}tick(t){if(!this.mesh.visible)return;this.emoteSprite&&performance.now()>=this.emoteUntilMs&&(this.emoteSprite.visible=!1);const e=Math.min(.04,this.snapshotDeltaSec*.25);this.predictedPos.copy(this.tmpTargetPos),this.predictedPos.x+=this.targetVelocity.x*e,this.predictedPos.z+=this.targetVelocity.z*e;const n=this.mesh.position.distanceTo(this.predictedPos);if(n>3)this.mesh.position.copy(this.predictedPos);else{const s=n>.4?1-Math.exp(-11*t):1-Math.exp(-7*t);this.mesh.position.lerp(this.predictedPos,s)}this.currentYaw=PM(this.currentYaw,this.targetYaw,1-Math.exp(-14*t)),this.tmpQuat.setFromAxisAngle(this.upAxis,this.currentYaw+this.modelYawOffset),this.mesh.quaternion.slerp(this.tmpQuat,1-Math.exp(-16*t));const i=Math.hypot(this.targetVelocity.x,this.targetVelocity.z);this.renderSpeed=Lt.lerp(this.renderSpeed,i,1-Math.exp(-10*t)),this.lastMeshPos.copy(this.mesh.position),this.applyPose(t,this.renderSpeed,this.remoteIsSliding,!1,this.role==="spectator")}applyPose(t,e,n,i,s=!1){if(s){const a=i?1:12*t;this.torsoGroup.position.y=Lt.lerp(this.torsoGroup.position.y,-.38,a),this.torsoGroup.rotation.x=Lt.lerp(this.torsoGroup.rotation.x,.1,a),this.leftThigh.rotation.x=Lt.lerp(this.leftThigh.rotation.x,1.18,a),this.leftCalf.rotation.x=Lt.lerp(this.leftCalf.rotation.x,-1.28,a),this.rightThigh.rotation.x=Lt.lerp(this.rightThigh.rotation.x,1.18,a),this.rightCalf.rotation.x=Lt.lerp(this.rightCalf.rotation.x,-1.28,a),this.leftUpperArm.rotation.x=Lt.lerp(this.leftUpperArm.rotation.x,-.25,a),this.rightUpperArm.rotation.x=Lt.lerp(this.rightUpperArm.rotation.x,-.25,a);return}if(this.torsoGroup.position.y=Lt.lerp(this.torsoGroup.position.y,0,i?1:10*t),n){const a=i?1:12*t;this.torsoGroup.rotation.x=Lt.lerp(this.torsoGroup.rotation.x,.05,a),this.leftThigh.rotation.x=Lt.lerp(this.leftThigh.rotation.x,-.62,a),this.leftCalf.rotation.x=Lt.lerp(this.leftCalf.rotation.x,.2,a),this.rightThigh.rotation.x=Lt.lerp(this.rightThigh.rotation.x,.16,a),this.rightCalf.rotation.x=Lt.lerp(this.rightCalf.rotation.x,-.72,a),this.leftUpperArm.rotation.x=Lt.lerp(this.leftUpperArm.rotation.x,-.15,a),this.rightUpperArm.rotation.x=Lt.lerp(this.rightUpperArm.rotation.x,.22,a);return}if(e>.35){const a=Math.min(1,e/24),c=.72+a*.32,l=4.2+a*4.4;this.walkCycle+=l*t;const h=Math.sin(this.walkCycle),d=h*c,u=Math.max(0,-h)*(.28+a*.32);this.leftThigh.rotation.x=d,this.rightThigh.rotation.x=-d,this.leftCalf.rotation.x=h<0?-u:0,this.rightCalf.rotation.x=h>0?-u:0,this.leftUpperArm.rotation.x=-d*.5,this.rightUpperArm.rotation.x=d*.5,this.torsoGroup.rotation.x=Lt.lerp(this.torsoGroup.rotation.x,-.05*a,10*t);return}const o=i?1:.25;this.torsoGroup.rotation.x=Lt.lerp(this.torsoGroup.rotation.x,0,o),this.leftThigh.rotation.x=Lt.lerp(this.leftThigh.rotation.x,0,o),this.rightThigh.rotation.x=Lt.lerp(this.rightThigh.rotation.x,0,o),this.leftCalf.rotation.x=Lt.lerp(this.leftCalf.rotation.x,0,o),this.rightCalf.rotation.x=Lt.lerp(this.rightCalf.rotation.x,0,o),this.leftUpperArm.rotation.x=Lt.lerp(this.leftUpperArm.rotation.x,0,o),this.rightUpperArm.rotation.x=Lt.lerp(this.rightUpperArm.rotation.x,0,o)}remove(){var t,e,n,i,s,o,a,c,l,h;this.faceTex&&((e=(t=this.faceTex).dispose)==null||e.call(t),this.faceTex=null),this.faceMat&&this.faceMat.map&&(this.faceMat.map=null),(i=(n=this.emoteSprite)==null?void 0:n.material)!=null&&i.map&&((o=(s=this.emoteSprite.material.map).dispose)==null||o.call(s),this.emoteSprite.material.map=null),(c=(a=this.nameTagSprite)==null?void 0:a.material)!=null&&c.map&&((h=(l=this.nameTagSprite.material.map).dispose)==null||h.call(l),this.nameTagSprite.material.map=null),this.world.scene.remove(this.mesh)}}function qe(r,t,e){return r+(t-r)*e}function xh(r,t,e){const n=Math.atan2(Math.sin(t-r),Math.cos(t-r));return r+n*e}function Mh(r){var t;return((t=r==null?void 0:r.ball)==null?void 0:t.pos)||{x:0,y:.35,z:0}}class IM{constructor(t){var l,h;this.world=t,this.upAxis=new D(0,1,0);const n=`${new URLSearchParams(window.location.search||"").get("socket")||""}`.trim()||`${localStorage.getItem("SOCKET_URL")||""}`.trim(),i=`${window.location.protocol}//${window.location.hostname}:3000`,s=window.location.protocol==="file:",o=`${window.location.port||""}`,c=n||(s?"http://localhost:3000":!!o&&o!=="3000"&&!s?i:"");this.socket=c?Qs(c):Qs(),this.socketUrl=c||"",this.socketConnected=!1,this.pendingRoomAction=null,this.serverHello=null,this.myId=null,this.roomId=null,this.nickname=null,this.matchConfig=null,this.remotePlayers={},this.adminState=null,this.rooms=[],this.lastPlayersData={},this.myRole="active",this.flowState=Ln.live,this.flowEndsAt=0,this.matchClockMs=0,this.matchDurationMs=0,this.matchClockLocalAt=performance.now(),this.lastSnapshotAt=performance.now(),this.lastServerTick=-1,this.serverNowMs=0,this.lastServerNowMs=0,this.simVersion="unknown",this.snapshotCount=0,this.seenEventKeys=[],this.seenEventSet=new Set,this.statsAccumulator=0,this.lastCorrectionP95=0,this.lastFrameP95=0,this.lastFpsAvg=0,this.lastLobbySignature="",this.lastReplayEndedAt=0,this.lastReplayGoalSeq=0,this.lastReplayClipId=null,this.matchEndHideTimer=null,this.featureGates={replay:!0,clouds:!0,atmosphere:!0},this.perfFlags={stabilizationMode:!1,replayEnabled:!0,cloudsEnabled:!0,atmosphereEnabled:!0},this.spectatorQueueState={queued:!1,position:null,reason:""},this.replayCameraPos=new D,this.replayLookAt=new D,this.upAxis=new D(0,1,0),this.flowStatusText="",this.replay={active:!1,goalSeq:0,clipId:null,startedAt:0,durationMs:0,cursor:0,keyframes:[],pendingSnapshot:null},this.ui={redList:document.getElementById("red-list"),blueList:document.getElementById("blue-list"),spectatorList:document.getElementById("spectator-list"),chatMessages:document.getElementById("chat-messages"),flowStatus:document.getElementById("flow-status"),serverStats:document.getElementById("server-stats"),matchTimer:document.getElementById("match-timer"),adminPanel:document.getElementById("admin-panel"),spectatorPanel:document.getElementById("spectator-panel"),seatSelect:document.getElementById("seat-select"),replayOverlay:document.getElementById("replay-overlay"),replayText:document.getElementById("replay-text"),matchEndOverlay:document.getElementById("match-end-overlay"),matchEndWinner:document.getElementById("match-end-winner"),matchEndTopScorer:document.getElementById("match-end-topscorer"),lobbySpectatorToggle:document.getElementById("lobby-spectator-toggle")},window.matchFlowState=Ln.live,window.matchFlowEndsAt=0,window.__perfFlags={...this.perfFlags,featureGates:{...this.featureGates}},(h=(l=this.world)==null?void 0:l.applyPerfFlags)==null||h.call(l,window.__perfFlags),this.setupEvents()}setupEvents(){this.socket.on("connect",()=>{this.myId=this.socket.id,this.socketConnected=!0,window.dispatchEvent(new CustomEvent("socket:state",{detail:{connected:!0,url:this.socketUrl||window.location.origin}})),this.updateStats()}),this.socket.on("disconnect",()=>{this.socketConnected=!1,window.dispatchEvent(new CustomEvent("socket:state",{detail:{connected:!1,url:this.socketUrl||window.location.origin}}))}),this.socket.on("connect_error",t=>{this.socketConnected=!1,window.dispatchEvent(new CustomEvent("socket:error",{detail:{message:(t==null?void 0:t.message)||"connect_error"}}))}),this.socket.on(we.serverHello,t=>{this.serverHello=t||null,window.dispatchEvent(new CustomEvent("server:hello",{detail:{hello:this.serverHello}}))}),this.socket.on(we.initSnapshot,t=>{var e;this.myId=t.myId,this.roomId=`${t.roomId||""}`||null,this.matchConfig=t.matchConfig,(e=this.world)!=null&&e.setMatchConfig&&t.matchConfig&&this.world.setMatchConfig(t.matchConfig),this.applySnapshot(t,!0,!0),t.adminState&&this.updateAdminState(t.adminState),window.dispatchEvent(new CustomEvent("join:accepted",{detail:{myId:this.myId}}))}),this.socket.on(we.snapshot,t=>{this.lastSnapshotAt=performance.now(),typeof(t==null?void 0:t.roomId)=="string"&&t.roomId&&(this.roomId=t.roomId),this.applySnapshot(t,!1,!1)}),this.socket.on(we.matchEvent,t=>{this.handleMatchEvent(t)}),this.socket.on(we.replayClip,t=>{this.handleReplayClip(t)}),this.socket.on(we.adminState,t=>{this.updateAdminState(t)}),this.socket.on(we.spectatorQueueState,t=>{this.handleSpectatorQueueState(t)}),this.socket.on(we.playerLeft,t=>{this.remotePlayers[t]&&(this.remotePlayers[t].remove(),delete this.remotePlayers[t])}),this.socket.on(we.joinDenied,t=>{window.dispatchEvent(new CustomEvent("join:denied",{detail:t||{}}))})}update(t,e){if(this.statsAccumulator+=e,this.updateFlowStatus(),this.updateMatchTimer(t),this.statsAccumulator>=.5&&(this.updateStats(),this.statsAccumulator=0),this.replay.active){this.stepReplay(t);return}for(const n in this.remotePlayers)this.remotePlayers[n].tick(e)}joinGame(t,e=null){this.nickname=`${t||""}`.trim(),this.socket.emit(we.join,{nickname:this.nickname,clientVersion:lh,adminPassword:e?`${e}`:void 0})}hello(t){this.nickname=`${t||""}`.trim(),this.socket.emit(we.hello,{nickname:this.nickname,clientVersion:lh})}leaveToLogin(){this.resetForLobby("leaveToLogin","");try{this.socket.disconnect()}catch{}setTimeout(()=>{try{this.socket.connect()}catch{}},200)}roomCreate(t){if(!this.socketConnected){window.dispatchEvent(new CustomEvent("room:error",{detail:{message:"Socket bagli degil. Server calisiyor mu?"}}));return}this.pendingRoomAction&&(clearTimeout(this.pendingRoomAction.timer),this.pendingRoomAction=null),this.pendingRoomAction={kind:"create",startedAt:performance.now(),timer:setTimeout(()=>{var i;this.pendingRoomAction=null;const e=this.socketUrl||window.location.origin,n=(i=this.serverHello)!=null&&i.app?`${this.serverHello.app}/${this.serverHello.protocol||""}`:"yok";window.dispatchEvent(new CustomEvent("room:error",{detail:{message:`Oda olusturma yaniti gelmedi. Baglanti URL: ${e} | serverHello: ${n} | PORT/socket URL kontrol et.`}}))},2500)},this.socket.emit(we.roomCreate,{...t||{},nickname:this.nickname||void 0},e=>{!e||typeof e!="object"||e.ok===!1&&(this.pendingRoomAction&&(clearTimeout(this.pendingRoomAction.timer),this.pendingRoomAction=null),window.dispatchEvent(new CustomEvent("room:error",{detail:{message:`${e.error||"Oda olusturulamadi."}`}})))})}roomJoin(t){if(!this.socketConnected){window.dispatchEvent(new CustomEvent("room:error",{detail:{message:"Socket bagli degil. Server calisiyor mu?"}}));return}this.pendingRoomAction&&(clearTimeout(this.pendingRoomAction.timer),this.pendingRoomAction=null),this.pendingRoomAction={kind:"join",startedAt:performance.now(),timer:setTimeout(()=>{var i;this.pendingRoomAction=null;const e=this.socketUrl||window.location.origin,n=(i=this.serverHello)!=null&&i.app?`${this.serverHello.app}/${this.serverHello.protocol||""}`:"yok";window.dispatchEvent(new CustomEvent("room:error",{detail:{message:`Odaya giris yaniti gelmedi. Baglanti URL: ${e} | serverHello: ${n} | Oda var mi / server stabil mi kontrol et.`}}))},2500)},this.socket.emit(we.roomJoin,{roomId:t,nickname:this.nickname||void 0},e=>{!e||typeof e!="object"||e.ok===!1&&(this.pendingRoomAction&&(clearTimeout(this.pendingRoomAction.timer),this.pendingRoomAction=null),window.dispatchEvent(new CustomEvent("room:error",{detail:{message:`${e.error||"Odaya girilemedi."}`}})))})}roomLeave(){this.socket.emit(we.roomLeave,{}),this.resetForLobby("roomLeave","left")}sendRoomOwnerCommand(t,e={}){this.socket.emit(we.roomOwnerCommand,{cmd:t,args:e})}sendInputFrame(t){this.socket.emit(we.inputFrame,t)}sendActionRequest(t){this.socket.emit(we.actionRequest,t)}sendChat(t){this.socket.emit(we.chatSend,{text:t})}sendQuickCommand(t){this.socket.emit(we.quickCommand,{code:t})}sendSpectatorRequest(t,e=null){this.socket.emit(we.spectatorRequest,{mode:t,seatId:e})}sendAdminCommand(t,e={}){this.socket.emit(we.adminCommand,{cmd:t,args:e})}sendAdminMove(t,e){this.sendAdminCommand("forceTeam",{targetNick:t,team:e})}setActiveCap(t){this.sendAdminCommand("setCap",{cap:t})}addBot(t=null){this.sendAdminCommand("addBot",{team:t})}removeBot(){this.sendAdminCommand("removeBot",{})}setFlowState(t,e=0){const n=Object.values(Ln).includes(t)?t:Ln.live;this.flowState=n,this.flowEndsAt=Number.isFinite(e)?e:0,window.matchFlowState=this.flowState,window.matchFlowEndsAt=this.flowEndsAt,this.updateFlowStatus()}updateFlowStatus(){const t=this.ui.flowStatus;if(!t)return;if(this.flowState===Ln.live){this.flowStatusText!==""&&(this.flowStatusText="",t.classList.remove("active"),t.textContent="");return}const e=Date.now(),n=Math.max(0,(Number(this.flowEndsAt)||0)-e),i=Math.max(0,Math.ceil(n/1e3));let s="REPLAY";this.flowState===Ln.kickoffCountdown?s=`BASLANGIC ${i}`:this.flowState===Ln.matchEnd?s=`MAC BITTI ${i}`:this.flowState!==Ln.replay&&(s=`DURAKLAMA ${i}`),s!==this.flowStatusText&&(this.flowStatusText=s,t.textContent=s),t.classList.add("active")}updateMatchTimer(t=performance.now()){const e=this.ui.matchTimer;if(!e)return;if(!window.inRoom){e.classList.contains("hidden")||e.classList.add("hidden");return}const n=Number(this.matchDurationMs||0);if(!Number.isFinite(n)||n<=0){e.classList.contains("hidden")||e.classList.add("hidden");return}const i=this.flowState===Ln.live;let s=Number(this.matchClockMs||0);if(i){const h=Math.max(0,Number(t)-Number(this.matchClockLocalAt||0));s+=h}s=Math.max(0,Math.min(n,s));const o=Math.max(0,n-s),a=Math.max(0,Math.ceil(o/1e3)),c=Math.floor(a/60),l=a%60;e.textContent=`${String(c).padStart(2,"0")}:${String(l).padStart(2,"0")}`,e.classList.remove("hidden")}applyFeatureGates(t){!t||typeof t!="object"||(this.featureGates={...this.featureGates,...t},this.applyPerfFlags({replayEnabled:this.featureGates.replay!==!1,cloudsEnabled:this.featureGates.clouds!==!1,atmosphereEnabled:this.featureGates.atmosphere!==!1}))}applyPerfFlags(t){var e,n;!t||typeof t!="object"||(this.perfFlags={...this.perfFlags,...t},window.__perfFlags={...this.perfFlags,featureGates:{...this.featureGates}},(n=(e=this.world)==null?void 0:e.applyPerfFlags)==null||n.call(e,window.__perfFlags))}buildEventKey(t){const e=(t==null?void 0:t.type)||"unknown",n=Number((t==null?void 0:t.ts)||0),i=(t==null?void 0:t.data)||{},s=JSON.stringify(i).slice(0,180);return`${e}|${n}|${s}`}rememberEventKey(t){if(this.seenEventSet.has(t))return!1;for(this.seenEventSet.add(t),this.seenEventKeys.push(t);this.seenEventKeys.length>300;){const e=this.seenEventKeys.shift();e&&this.seenEventSet.delete(e)}return!0}applySnapshot(t,e=!1,n=!1){var f;const i=Number(t==null?void 0:t.serverTick);if(Number.isFinite(i)){if(!e&&i<=this.lastServerTick)return;this.lastServerTick=Math.max(this.lastServerTick,i)}let s=null;const o=Number(t==null?void 0:t.serverNowMs);if(Number.isFinite(o)&&o>0){if(!e&&this.lastServerNowMs>0&&o<this.lastServerNowMs-2)return;this.lastServerNowMs>0&&(s=Math.max(.01,Math.min(.25,(o-this.lastServerNowMs)/1e3))),this.lastServerNowMs=o,this.serverNowMs=o}typeof(t==null?void 0:t.simVersion)=="string"&&t.simVersion.length&&(this.simVersion=t.simVersion),this.setFlowState(t==null?void 0:t.flowState,t==null?void 0:t.flowEndsAt),this.applyPerfFlags(t==null?void 0:t.perfFlags),this.applyFeatureGates(t==null?void 0:t.featureGates);const a=Number(t==null?void 0:t.matchClockMs);Number.isFinite(a)&&(this.matchClockMs=Math.max(0,a),this.matchClockLocalAt=performance.now());const c=Number(t==null?void 0:t.matchDurationMs);if(Number.isFinite(c)&&(this.matchDurationMs=Math.max(0,c)),this.snapshotCount+=1,!n&&this.replay.active&&!e){this.replay.pendingSnapshot=t,t.score&&this.updateScoreboard(t.score),t.adminState&&this.updateAdminState(t.adminState);return}const l=t.players||{};this.lastPlayersData=l,this.world.ball&&t.ball&&this.world.ball.updateFromServer(t.ball),t.score&&this.updateScoreboard(t.score);const h=l[this.myId];h&&((f=this.world.player)!=null&&f.setServerState)&&(this.world.player.setServerState(h,t.ackSeq??null),this.applyLocalRoleState(h));const d=new Set;for(const g of Object.keys(l))g!==this.myId&&(d.add(g),this.remotePlayers[g]||(this.remotePlayers[g]=new yh(this.world,g,l[g])),this.remotePlayers[g].updateVisuals(l[g],e,s));for(const g of Object.keys(this.remotePlayers))d.has(g)||(this.remotePlayers[g].remove(),delete this.remotePlayers[g]);const u=this.buildLobbySignature(l);if((e||u!==this.lastLobbySignature)&&(this.lastLobbySignature=u,this.updateLobbyUI(l)),t.adminState&&this.updateAdminState(t.adminState),Array.isArray(t.events))for(const g of t.events)this.handleMatchEvent(g,!0)}applyLocalRoleState(t){var i,s,o,a;this.myRole=t.role||"active",window.isAdmin=!!t.isAdmin,window.isSpectator=this.myRole==="spectator"||!!t.isSpectator;const e=document.getElementById("nick-status-banner"),n=`${t.nickStatus||""}`;e&&(!window.isAdmin&&n==="pending"?e.classList.remove("hidden"):e.classList.add("hidden")),!window.isSpectator&&this.spectatorQueueState.queued&&(this.spectatorQueueState={queued:!1,position:null,reason:"joined"}),window.isAdmin?(i=this.ui.adminPanel)==null||i.classList.remove("hidden"):(s=this.ui.adminPanel)==null||s.classList.add("hidden"),window.isSpectator?(o=this.ui.spectatorPanel)==null||o.classList.remove("hidden"):(a=this.ui.spectatorPanel)==null||a.classList.add("hidden"),this.ui.lobbySpectatorToggle&&(this.ui.lobbySpectatorToggle.textContent=window.isSpectator?"Takima Don":"Izleyici Moduna Gec")}buildLobbySignature(t){const e=[],n=Object.keys(t).sort();for(const i of n){const s=t[i];e.push(`${i}:${s.nick}:${s.team}:${s.role}:${s.isBot?1:0}:${s.isAdmin?1:0}`)}return e.join("|")}updateLobbyUI(t){const e=this.ui.redList,n=this.ui.blueList,i=this.ui.spectatorList;if(!e||!n||!i)return;e.innerHTML="",n.innerHTML="",i.innerHTML="";const s=window.isAdmin===!0;for(const o of Object.keys(t)){const a=t[o],c=document.createElement("li");c.className="player-item";const l=o===this.myId,h=a.role==="spectator"?"IZLEYICI":a.team.toUpperCase(),d=`${l?"(SEN) ":""}${a.nick} - ${h}${a.isBot?" [BOT]":""}`,u=document.createElement("span");u.textContent=d,l&&(u.style.fontWeight="700",u.style.color="#8bff8b"),c.appendChild(u),s&&!a.isAdmin&&!a.isBot&&c.appendChild(this.createAdminControls(a.nick)),a.role==="spectator"?i.appendChild(c):a.team==="red"?e.appendChild(c):a.team==="blue"?n.appendChild(c):i.appendChild(c)}}createAdminControls(t){const e=document.createElement("div");e.className="admin-controls";const n=(o,a,c)=>{const l=document.createElement("button");return l.className=`admin-btn ${a}`,l.textContent=o,l.addEventListener("click",()=>{this.sendAdminMove(t,c)}),l};e.appendChild(n("R","btn-to-red","red")),e.appendChild(n("B","btn-to-blue","blue"));const i=document.createElement("button");i.className="admin-btn btn-to-spec",i.textContent="S",i.addEventListener("click",()=>{this.sendAdminCommand("makeSpectator",{targetNick:t})}),e.appendChild(i);const s=document.createElement("button");return s.className="admin-btn btn-kick",s.textContent="K",s.title="Kick",s.addEventListener("click",()=>{this.sendAdminCommand("kickPlayer",{targetNick:t})}),e.appendChild(s),e}updateScoreboard(t){const e=document.getElementById("score-red"),n=document.getElementById("score-blue");e&&(e.textContent=`${t.red}`),n&&(n.textContent=`${t.blue}`)}updateAdminState(t){this.adminState=t,t!=null&&t.featureGates&&this.applyFeatureGates(t.featureGates),typeof(t==null?void 0:t.stabilizationMode)=="boolean"&&this.applyPerfFlags({stabilizationMode:t.stabilizationMode});const e=document.getElementById("admin-cap-info");if(e){const c=Number.isFinite(t==null?void 0:t.spectatorReturnQueue)?t.spectatorReturnQueue:0,l=Number.isFinite(t==null?void 0:t.matchDurationMin)?Math.max(0,Math.floor(t.matchDurationMin)):0,h=l>0?`${l}dk`:"Suresiz",u=(`${(t==null?void 0:t.weatherMode)||"day"}`.toLowerCase()==="night"?"night":"day")==="night"?"Gece":"Gunduz";e.textContent=`Aktif: ${t.activeCount}/${t.activeCap} | Izleyici: ${t.spectatorCount} | Bot: ${t.botCount} | Donus Kuyrugu: ${c} | Sure: ${h} | Hava: ${u}`}const n=document.getElementById("admin-cap-input");n&&document.activeElement!==n&&(n.value=`${t.activeCap}`);const i=document.getElementById("admin-duration-select");if(i&&document.activeElement!==i){const c=Number.isFinite(t==null?void 0:t.matchDurationMin)?Math.max(0,Math.floor(t.matchDurationMin)):0;i.value=`${c}`}const s=document.getElementById("admin-weather-select");if(s&&document.activeElement!==s){const c=`${(t==null?void 0:t.weatherMode)||"day"}`.toLowerCase()==="night"?"night":"day";s.value=c}const o=document.getElementById("nick-approval-list"),a=document.getElementById("nick-approval-empty");if(o&&a){const c=Array.isArray(t==null?void 0:t.pendingNickApprovals)?t.pendingNickApprovals:[];if(o.innerHTML="",!c.length)a.style.display="block";else{a.style.display="none";for(const l of c){const h=`${(l==null?void 0:l.id)||""}`,d=`${(l==null?void 0:l.requestedNick)||""}`;if(!h)continue;const u=document.createElement("div");u.className="nick-approval-item";const f=document.createElement("div");f.innerHTML=`ID: <b>${h.slice(0,6)}</b> | Nick: <b>${d||"-"}</b>`,u.appendChild(f);const g=document.createElement("div");g.className="nick-approval-actions";const v=document.createElement("button");v.className="btn-approve",v.textContent="Approve",v.addEventListener("click",()=>{this.sendAdminCommand("approveNick",{targetId:h})});const m=document.createElement("button");m.className="btn-reject",m.textContent="Reject",m.addEventListener("click",()=>{this.sendAdminCommand("rejectNick",{targetId:h})}),g.appendChild(v),g.appendChild(m),u.appendChild(g),o.appendChild(u)}}}}resetForLobby(t="unknown",e=""){var o,a,c;this.roomId=null,this.matchConfig=null,this.myRole="active",this.setFlowState(Ln.live,0),this.matchClockMs=0,this.matchDurationMs=0,this.matchClockLocalAt=performance.now(),window.inRoom=!1,window.isReplayActive=!1,window.isSpectator=!1,this.lastReplayEndedAt=0,this.lastReplayGoalSeq=0,this.lastReplayClipId=null,this.ui.matchEndOverlay&&this.ui.matchEndOverlay.classList.remove("active"),this.matchEndHideTimer&&(clearTimeout(this.matchEndHideTimer),this.matchEndHideTimer=null);for(const l of Object.keys(this.remotePlayers))(a=(o=this.remotePlayers[l])==null?void 0:o.remove)==null||a.call(o),delete this.remotePlayers[l];(c=this.world)!=null&&c.player&&(this.world.player.pendingInputs.length=0,this.world.player.isSpectator=!0,this.world.player.role="spectator");const n=document.getElementById("score-red"),i=document.getElementById("score-blue");n&&(n.textContent="0"),i&&(i.textContent="0"),this.ui.matchTimer&&(this.ui.matchTimer.classList.add("hidden"),this.ui.matchTimer.textContent="--:--");const s=document.getElementById("nick-status-banner");s&&s.classList.add("hidden"),this.pushChatLine(`[SISTEM] Ana menuye donuldu (${t}${e?`: ${e}`:""}).`,"system")}pushChatLine(t,e="system"){const n=this.ui.chatMessages;if(!n)return;const i=document.createElement("div");for(i.className=`chat-line chat-${e}`,i.textContent=t,n.appendChild(i);n.children.length>80;)n.removeChild(n.firstChild);n.scrollTop=n.scrollHeight}handleMatchEvent(t,e=!1){var c,l,h,d,u,f,g;if(!t||!t.type)return;const n=this.buildEventKey(t);if(!this.rememberEventKey(n))return;const{type:i,data:s}=t,o=this.lastPlayersData||{},a=v=>{const m=o==null?void 0:o[v];return(m==null?void 0:m.nick)||""};if(i==="goal"){const v=(s==null?void 0:s.scorer)||(s!=null&&s.scorerId?a(s.scorerId):"");this.showGoalCelebration(s.team,v),this.updateScoreboard(s.score),e||this.pushChatLine(`GOOL! ${s.team.toUpperCase()} - Gol: ${v||"-"}`,"system");return}if(i==="matchEnd"){if(this.showMatchEndOverlay(s),!e){const v=`${s.winner||"draw"}`.toUpperCase(),m=s.score?`${s.score.red}-${s.score.blue}`:"--";this.pushChatLine(`[MAC] Bitti (${v}) Skor: ${m}`,"system")}return}if(i==="ballOut"){this.showBallOut(s);return}if(i==="weather"){const v=`${(s==null?void 0:s.mode)||"day"}`.toLowerCase()==="night"?"night":"day";(l=(c=this.world)==null?void 0:c.applyWeatherMode)==null||l.call(c,v),this.pushChatLine(`[SISTEM] Hava modu: ${v==="night"?"Gece":"Gunduz"}`,"system");return}if(i==="chat"){const v=(s==null?void 0:s.from)||(s!=null&&s.fromId?a(s.fromId):"-");this.pushChatLine(`[${s.team}] ${v}: ${s.text}`,"chat");return}if(i==="quickCommand"){const v=s.text||wx[s.code]||s.code,m=(s==null?void 0:s.from)||(s!=null&&s.fromId?a(s.fromId):"-");this.pushChatLine(`[KOMUT] ${m}: ${v}`,"quick");const p=(s==null?void 0:s.fromId)||null;p&&this.world&&(p===this.myId?(d=(h=this.world.player)==null?void 0:h.showEmote)==null||d.call(h,v,3e3):(g=(f=(u=this.remotePlayers)==null?void 0:u[p])==null?void 0:f.showEmote)==null||g.call(f,v,3e3));return}if(i==="system"){if(s!=null&&s.text){this.pushChatLine(`[SISTEM] ${s.text}`,"system");return}const v=`${(s==null?void 0:s.kind)||""}`;if(v==="playerJoined"){const m=(s==null?void 0:s.nick)||(s!=null&&s.playerId?a(s.playerId):"");this.pushChatLine(`[SISTEM] ${m||"Bir oyuncu"} katildi.`,"system");return}if(v==="playerLeft"){const m=(s==null?void 0:s.nick)||(s!=null&&s.playerId?a(s.playerId):"");this.pushChatLine(`[SISTEM] ${m||"Bir oyuncu"} ayrildi.`,"system");return}this.pushChatLine("[SISTEM] ...","system");return}i==="restart"&&this.pushChatLine(`[OYUN] ${s.kind.toUpperCase()} yeniden basladi.`,"system")}showMatchEndOverlay(t){var h,d;const e=this.ui.matchEndOverlay;if(!e)return;const n=`${(t==null?void 0:t.winner)||"draw"}`,i=(t==null?void 0:t.score)||{red:0,blue:0},s=this.ui.matchEndWinner,o=this.ui.matchEndTopScorer;s&&(n==="red"?s.textContent=`KIRMIZI KAZANDI (${i.red}-${i.blue})`:n==="blue"?s.textContent=`MAVI KAZANDI (${i.red}-${i.blue})`:s.textContent=`BERABERE (${i.red}-${i.blue})`);const a=t!=null&&t.topScorerId&&((d=(h=this.lastPlayersData)==null?void 0:h[t.topScorerId])==null?void 0:d.nick)||"",c=`${(t==null?void 0:t.topScorerNick)||a||""}`.trim(),l=Number((t==null?void 0:t.topScorerGoals)||0);o&&(o.textContent=c?`Gol Krali: ${c} (${l})`:"Gol Krali: -"),e.classList.add("active"),this.matchEndHideTimer&&clearTimeout(this.matchEndHideTimer),this.matchEndHideTimer=setTimeout(()=>{e.classList.remove("active"),this.matchEndHideTimer=null},6e3)}handleReplayClip(t){if(this.featureGates.replay===!1||this.perfFlags.replayEnabled===!1||this.replay.active||performance.now()-this.lastReplayEndedAt<500)return;const e=Number((t==null?void 0:t.goalSeq)||0),n=(t==null?void 0:t.clipId)||null;if(e&&e<=this.lastReplayGoalSeq||n&&n===this.lastReplayClipId)return;const s=(Array.isArray(t==null?void 0:t.keyframes)?t.keyframes:[]).filter(d=>!!d);if(s.length<2)return;const o=Number(s[0].ts||0),a=s.map(d=>({...d,_rt:Math.max(0,Number(d.ts||0)-o)})),c=a[a.length-1]._rt;this.replay.active=!0,this.replay.goalSeq=e,this.replay.clipId=n,this.replay.startedAt=performance.now(),this.replay.durationMs=Math.max(1200,(t==null?void 0:t.durationMs)||c||5e3),this.replay.cursor=0,this.replay.keyframes=a,this.replay.pendingSnapshot=null,window.isReplayActive=!0;const l=this.ui.replayOverlay,h=this.ui.replayText;l&&h&&(h.textContent="REPLAY",l.classList.add("active"))}stepReplay(t){var M,L,k,I,U,O,N;if(!this.replay.active)return;const e=t-this.replay.startedAt,n=this.replay.keyframes,i=Math.min(this.replay.durationMs,e);for(;this.replay.cursor<n.length-2&&n[this.replay.cursor+1]._rt<=i;)this.replay.cursor+=1;const s=this.replay.cursor,o=Math.min(n.length-1,s+1),a=n[s],c=n[o];if(!a||!c){this.finishReplay();return}const l=Math.max(1,c._rt-a._rt),h=Math.min(1,Math.max(0,(i-a._rt)/l)),d=Mh(a),u=Mh(c),f=qe(d.x,u.x,h),g=qe(d.y,u.y,h),v=qe(d.z,u.z,h);(L=(M=this.world)==null?void 0:M.ball)!=null&&L.mesh&&(this.world.ball.mesh.position.set(f,g,v),this.world.ball.body.position.set(f,g,v));const m={},p={};for(const $ of a.players||[])m[$.id]=$;for(const $ of c.players||[])p[$.id]=$;const _=new Set([...Object.keys(m),...Object.keys(p)]);for(const $ of _){const z=m[$]||p[$],K=p[$]||m[$];if(!z||!K)continue;const F=qe(z.pos.x,K.pos.x,h),W=qe(z.pos.y,K.pos.y,h),j=qe(z.pos.z,K.pos.z,h),ot=xh(z.yaw||0,K.yaw||0,h);$===this.myId&&((k=this.world)!=null&&k.player)?(this.world.player.body.position.set(F,W,j),this.world.player.bodyYaw=ot,this.world.player.mesh.position.set(F,W+this.world.player.visualOffsetY,j),this.world.player.mesh.quaternion.setFromAxisAngle(this.upAxis,ot+(this.world.player.modelYawOffset||0))):(this.remotePlayers[$]||(this.remotePlayers[$]=new yh(this.world,$,{id:$,nick:K.nick||z.nick||"Player",team:K.team||z.team||"red",role:K.role||z.role||"active",pos:{x:F,y:W,z:j},yaw:ot,vel:{x:0,y:0,z:0}})),this.remotePlayers[$].updateVisuals({id:$,nick:K.nick||z.nick||"Player",team:K.team||z.team||"red",role:K.role||z.role||"active",pos:{x:F,y:W,z:j},yaw:ot,vel:{x:0,y:0,z:0},actionState:{isSliding:!1}},!0))}const x=this.world.camera,y=((U=(I=c==null?void 0:c.ball)==null?void 0:I.lastTouch)==null?void 0:U.id)||((N=(O=a==null?void 0:a.ball)==null?void 0:O.lastTouch)==null?void 0:N.id)||null,A=y?m[y]||p[y]:null,b=y?p[y]||m[y]:null,C=Math.min(1,Math.max(0,i/Math.max(1,this.replay.durationMs))),R=2.2/6,S=4.8/6;if(A&&b){const $=qe(A.pos.x,b.pos.x,h),z=qe(A.pos.y,b.pos.y,h),K=qe(A.pos.z,b.pos.z,h),F=xh(A.yaw||0,b.yaw||0,h),W=Math.sin(F),j=Math.cos(F);if(C<=R){const ot=-W*4.9,Z=-j*4.9,nt=Math.cos(F)*1.6,ht=-Math.sin(F)*1.6;this.replayCameraPos.set($+ot+nt,z+2.2,K+Z+ht),this.replayLookAt.set(qe($,f,.62),qe(z+.9,g+.25,.62),qe(K,v,.62))}else if(C<=S){const ot=u.x-d.x,Z=u.z-d.z,nt=Math.hypot(ot,Z),ht=nt>1e-4?ot/nt:W,at=nt>1e-4?Z/nt:j;this.replayCameraPos.set(f-ht*3.4,g+1.8,v-at*3.4),this.replayLookAt.set(f+ht*1.2,g+.25,v+at*1.2)}else{const ot=A.team==="red"?39:-39;this.replayCameraPos.set(0,18.5,ot*.35),this.replayLookAt.set(qe(f,0,.45),1.5,qe(v,ot,.45))}}else this.replayCameraPos.set(f+7.2,g+3.4,v+7.2),this.replayLookAt.set(f,g+.3,v);x.position.lerp(this.replayCameraPos,.26),x.lookAt(this.replayLookAt),(e>=this.replay.durationMs||o>=n.length-1)&&this.finishReplay()}finishReplay(){if(this.replay.active&&(this.replay.goalSeq&&(this.lastReplayGoalSeq=Math.max(this.lastReplayGoalSeq,this.replay.goalSeq)),this.replay.clipId&&(this.lastReplayClipId=this.replay.clipId),this.replay.active=!1,window.isReplayActive=!1,this.lastReplayEndedAt=performance.now(),this.ui.replayOverlay&&this.ui.replayOverlay.classList.remove("active"),this.replay.cursor=0,this.replay.goalSeq=0,this.replay.clipId=null,this.replay.keyframes=[],this.replay.pendingSnapshot)){const t=this.replay.pendingSnapshot;this.replay.pendingSnapshot=null,this.applySnapshot(t,!1,!0)}}showGoalCelebration(t,e){const n=document.getElementById("goal-overlay"),i=document.getElementById("goal-subtext"),s=document.getElementById("goal-player-name");!n||!i||(n.style.color=t==="red"?"#ff4444":"#4488ff",i.textContent=t==="red"?"KIRMIZI TAKIM GOLU!":"MAVI TAKIM GOLU!",s&&(s.textContent=e?`Gol: ${e}`:""),n.classList.add("active"),setTimeout(()=>{n.classList.remove("active")},2400))}showBallOut(t){const e=document.getElementById("ball-out-overlay"),n=document.getElementById("ball-out-text");if(!e||!n)return;const i=(t==null?void 0:t.reason)||"DISARI";n.textContent=`TOP DISARI: ${i.toUpperCase()}`,e.classList.add("active"),setTimeout(()=>e.classList.remove("active"),1300)}handleSpectatorQueueState(t){if(!t||typeof t!="object")return;const e=!!t.queued,n=Number.isFinite(t.position)?Math.max(1,Math.floor(t.position)):null,i=`${t.reason||""}`,s=this.spectatorQueueState||{queued:!1,position:null,reason:""},o=s.queued!==e||s.position!==n||s.reason!==i;if(this.spectatorQueueState={queued:e,position:n,reason:i},!!o){if(e){const a=n?`#${n}`:"-";this.pushChatLine(`[SISTEM] Takima donus sirasina alindin. Sira: ${a}`,"system");return}i==="joined"&&this.pushChatLine("[SISTEM] Takima geri dondun.","system")}}updateStats(){var d,u,f,g,v,m;const t=this.ui.serverStats;if(!t)return;const e=(f=(u=(d=this.world)==null?void 0:d.player)==null?void 0:u.consumeCorrectionP95)==null?void 0:f.call(u);Number.isFinite(e)&&(this.lastCorrectionP95=e);const n=Math.max(0,performance.now()-this.lastSnapshotAt),i=Math.round(((g=this.socket.io.engine)==null?void 0:g.ping)||0),s=((m=(v=this.world)==null?void 0:v.getPerfMetrics)==null?void 0:m.call(v))||{};Number.isFinite(s.frameP95)&&(this.lastFrameP95=s.frameP95),Number.isFinite(s.fpsAvg)&&(this.lastFpsAvg=s.fpsAvg);const o=i<=60&&n<=120?"Iyi":i<=120&&n<=220?"Orta":"Dusuk",a=this.lastCorrectionP95.toFixed(2),c=Number.isFinite(this.lastFrameP95)?this.lastFrameP95.toFixed(1):"--",l=Number.isFinite(this.lastFpsAvg)?this.lastFpsAvg.toFixed(0):"--",h=this.perfFlags.stabilizationMode?"Aciq":"Qapali";t.textContent=`Ping: ${i}ms | Snapshot gecikmesi: ${Math.round(n)}ms | Corr p95: ${a}m | FPS: ${l} | Frame p95: ${c}ms | Snap: ${this.snapshotCount} | Stab: ${h} | Sim: ${this.simVersion} | Ag: ${o}`}}class NM{constructor(t,e={}){this.url=`${t||""}`,this.opts={intervalMinMs:9e3,intervalMaxMs:13e3,snippetMinMs:6e3,snippetMaxMs:9e3,fadeMs:50,volume:.9,maxPeaks:60,minSeparationSec:2.5,...e},this.ctx=null,this.master=null,this.buffer=null,this.peaks=[],this.running=!1,this.timer=null,this.initialized=!1,this.initPromise=null}getCacheKey(){return`loudDjPeaks:v2:${this.url}`}unlock(){var t,e;try{this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=Math.max(0,Math.min(1,Number(this.opts.volume)||.9)),this.master.connect(this.ctx.destination)),this.ctx.state==="suspended"&&((e=(t=this.ctx).resume)==null||e.call(t))}catch{}}async init(){return this.initialized?!0:this.initPromise?this.initPromise:(this.initPromise=(async()=>{if(!this.url||(this.unlock(),!this.ctx))return!1;const t=await fetch(this.url);if(!t.ok)return!1;const e=await t.arrayBuffer(),n=await this.ctx.decodeAudioData(e);this.buffer=n;let i=null;try{const s=localStorage.getItem(this.getCacheKey());if(s){const o=JSON.parse(s);o&&o.v===1&&Math.abs(Number(o.duration||0)-Number(n.duration||0))<.5&&Array.isArray(o.peaks)&&o.peaks.length>=8&&(i=o.peaks)}}catch{}if(i)this.peaks=i;else{this.peaks=await this.computePeaks(n);try{localStorage.setItem(this.getCacheKey(),JSON.stringify({v:1,duration:n.duration,peaks:this.peaks}))}catch{}}return this.initialized=!0,!0})(),this.initPromise)}stop(){this.running=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)}start(){this.running=!0,this.scheduleNext()}scheduleNext(){if(!this.running)return;const t=Math.max(500,Number(this.opts.intervalMinMs)||15e3),e=Math.max(t,Number(this.opts.intervalMaxMs)||2e4),n=t+Math.random()*(e-t);this.timer=setTimeout(()=>{this.timer=null,this.playRandomSnippet(),this.scheduleNext()},n)}playRandomSnippet(){var v,m;if(!this.running||!this.ctx||!this.buffer||!this.peaks||this.peaks.length===0||this.ctx.state==="suspended")return;let t=0;for(let p=0;p<this.peaks.length;p+=1){const _=Number(((v=this.peaks[p])==null?void 0:v.score)??((m=this.peaks[p])==null?void 0:m.rms)??0);t+=_*_}let e=null;if(t>0){let p=Math.random()*t;for(let _=0;_<this.peaks.length;_+=1){const x=this.peaks[_],y=Number((x==null?void 0:x.score)??(x==null?void 0:x.rms)??0);if(p-=y*y,p<=0){e=x;break}}}e||(e=this.peaks[Math.floor(Math.random()*this.peaks.length)]);const n=Number(e==null?void 0:e.t)||0,i=this.opts.snippetMinMs+Math.random()*(this.opts.snippetMaxMs-this.opts.snippetMinMs),s=Math.max(.25,i/1e3),o=.22,a=Math.max(0,this.buffer.duration-s-.02),c=Math.max(0,Math.min(a,n-o)),l=this.ctx.createBufferSource();l.buffer=this.buffer;const h=this.ctx.createGain();h.gain.value=0,l.connect(h),h.connect(this.master||this.ctx.destination);const d=this.ctx.currentTime+.02,u=d+s,f=Math.max(.01,(Number(this.opts.fadeMs)||50)/1e3),g=Math.max(0,Math.min(1,Number(this.opts.volume)||.9));h.gain.setValueAtTime(0,d),h.gain.linearRampToValueAtTime(g,d+f),h.gain.setValueAtTime(g,Math.max(d+f,u-f)),h.gain.linearRampToValueAtTime(0,u);try{l.start(d,c,s)}catch{}try{l.stop(u+.05)}catch{}}async computePeaks(t){const e=t.getChannelData(0),n=t.sampleRate||48e3,i=.15,s=.07,o=Math.max(32,Math.floor(i*n)),a=Math.max(16,Math.floor(s*n)),c=8,l=[];let h=0;for(let g=0;g+o<e.length;g+=a){let v=0,m=0,p=0,_=e[g]||0;for(let b=0;b<o;b+=c){const C=e[g+b]||0;v+=C*C;const R=C-_;m+=R*R,_=C,p+=1}const x=Math.sqrt(v/Math.max(1,p)),y=Math.sqrt(m/Math.max(1,p)),A=Math.pow(Math.max(0,x),.85)*Math.pow(Math.max(0,y),.75);l.push({t:g/n,rms:x}),l[l.length-1].score=A,h+=1,h%180===0&&await new Promise(b=>setTimeout(b,0))}l.sort((g,v)=>(v.score??v.rms)-(g.score??g.rms));const d=Math.max(8,Math.floor(this.opts.maxPeaks)||60),u=Math.max(.6,Number(this.opts.minSeparationSec)||2.5),f=[];for(let g=0;g<l.length&&f.length<d;g+=1){const v=l[g];let m=!0;for(let p=0;p<f.length;p+=1)if(Math.abs(f[p].t-v.t)<u){m=!1;break}m&&f.push({t:v.t,rms:v.rms,score:Number(v.score||0)})}return f}}function DM(){try{if(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches)return!0}catch{}return"ontouchstart"in window||navigator.maxTouchPoints>0}function Hr(r,t,e){return Math.max(t,Math.min(e,r))}function on(r,t,e){!r||!r.keys||(r.keys[t]=!!e)}function UM({world:r,network:t}){if(!DM())return{enabled:!1,cleanup(){}};const e=document.getElementById("mobile-controls"),n=document.getElementById("mobile-joystick"),i=document.getElementById("mj-stick"),s=document.getElementById("mobile-lookpad"),o=document.getElementById("m-btn-shoot"),a=document.getElementById("m-btn-pass"),c=document.getElementById("m-btn-through"),l=document.getElementById("m-btn-cross"),h=document.getElementById("m-btn-slide"),d=document.getElementById("m-btn-sprint"),u=document.getElementById("m-btn-curve-left"),f=document.getElementById("m-btn-curve-right"),g=document.getElementById("m-btn-keeper"),v=document.getElementById("m-btn-menu"),m=document.getElementById("m-btn-chat"),p=F=>{e&&(F?e.classList.remove("hidden"):e.classList.add("hidden"))};p(!1);const _={joyPointerId:null,joyCx:0,joyCy:0,joyRadius:52,lookPointerId:null,lastLookX:0,lastLookY:0};function x(){return(r==null?void 0:r.player)||null}function y(F,W){var ot;const j=x();(ot=j==null?void 0:j.setMobileMove)==null||ot.call(j,F,W)}function A(){y(0,0),i&&(i.style.transform="translate(-50%, -50%)")}function b(F){var ot;if(!n)return;const W=x();if(!W||W.isSpectator||window.isReplayActive)return;_.joyPointerId=F.pointerId;try{n.setPointerCapture(F.pointerId)}catch{}const j=n.getBoundingClientRect();_.joyCx=j.left+j.width/2,_.joyCy=j.top+j.height/2,_.joyRadius=Math.max(34,Math.min(70,j.width*.36)),(ot=F.preventDefault)==null||ot.call(F)}function C(F){var It;if(_.joyPointerId===null||F.pointerId!==_.joyPointerId)return;const W=F.clientX-_.joyCx,j=F.clientY-_.joyCy,ot=Math.hypot(W,j),Z=ot>1e-6?Math.min(1,ot/_.joyRadius):0,nt=ot>1e-6?W/ot:0,ht=ot>1e-6?j/ot:0,at=Hr(nt*Z,-1,1),Rt=Hr(-ht*Z,-1,1);if(y(at,Rt),i){const Gt=Hr(W,-_.joyRadius,_.joyRadius),le=Hr(j,-_.joyRadius,_.joyRadius);i.style.transform=`translate(calc(-50% + ${Gt}px), calc(-50% + ${le}px))`}(It=F.preventDefault)==null||It.call(F)}function R(F){var W,j;if(!(_.joyPointerId===null||F.pointerId!==_.joyPointerId)){try{(W=n==null?void 0:n.releasePointerCapture)==null||W.call(n,F.pointerId)}catch{}_.joyPointerId=null,A(),(j=F.preventDefault)==null||j.call(F)}}function S(F){var j,ot;const W=x();if(!(!W||W.isSpectator||window.isReplayActive)){_.lookPointerId=F.pointerId,_.lastLookX=F.clientX,_.lastLookY=F.clientY;try{(j=s==null?void 0:s.setPointerCapture)==null||j.call(s,F.pointerId)}catch{}(ot=F.preventDefault)==null||ot.call(F)}}function M(F){var Z,nt;if(_.lookPointerId===null||F.pointerId!==_.lookPointerId)return;const W=F.clientX-_.lastLookX,j=F.clientY-_.lastLookY;_.lastLookX=F.clientX,_.lastLookY=F.clientY;const ot=x();(Z=ot==null?void 0:ot.applyLookDelta)==null||Z.call(ot,W,j,.8),(nt=F.preventDefault)==null||nt.call(F)}function L(F){var W,j;if(!(_.lookPointerId===null||F.pointerId!==_.lookPointerId)){try{(W=s==null?void 0:s.releasePointerCapture)==null||W.call(s,F.pointerId)}catch{}_.lookPointerId=null,(j=F.preventDefault)==null||j.call(F)}}function k(F,W=.55,j=0){var Z;const ot=x();!ot||ot.isSpectator||window.isReplayActive||(ot.sendAction?ot.sendAction(F,W,j):(Z=t==null?void 0:t.sendActionRequest)==null||Z.call(t,{type:F,charge:W,curve:j}))}function I(){var ot,Z,nt,ht;const F=x();if(!F||F.isSpectator||window.isReplayActive)return;const W=((ot=window.network)==null?void 0:ot.myId)||null;W&&((Z=r==null?void 0:r.ball)==null?void 0:Z.controlledBy)===W||F.slideCooldown>0||(F.slideCooldown=.9,(nt=F.startLocalSlide)==null||nt.call(F),(ht=F.sendAction)==null||ht.call(F,yn.slide))}function U(){const F=document.getElementById("login-screen"),W=document.getElementById("lobby-screen");if(!W||!F||!F.classList.contains("hidden")||!window.inRoom)return;W.style.display==="flex"?W.style.display="none":W.style.display="flex"}function O(){var ot,Z;const F=document.getElementById("chat-panel"),W=document.getElementById("chat-input");if(!F)return;F.classList.contains("mobile-open")?(F.classList.remove("mobile-open"),(ot=W==null?void 0:W.blur)==null||ot.call(W)):(F.classList.add("mobile-open"),(Z=W==null?void 0:W.focus)==null||Z.call(W))}n==null||n.addEventListener("pointerdown",b,{passive:!1}),n==null||n.addEventListener("pointermove",C,{passive:!1}),n==null||n.addEventListener("pointerup",R,{passive:!1}),n==null||n.addEventListener("pointercancel",R,{passive:!1}),s==null||s.addEventListener("pointerdown",S,{passive:!1}),s==null||s.addEventListener("pointermove",M,{passive:!1}),s==null||s.addEventListener("pointerup",L,{passive:!1}),s==null||s.addEventListener("pointercancel",L,{passive:!1}),o==null||o.addEventListener("pointerdown",F=>{var W;on(x()," ",!0),(W=F.preventDefault)==null||W.call(F)},{passive:!1}),o==null||o.addEventListener("pointerup",F=>{var W;on(x()," ",!1),(W=F.preventDefault)==null||W.call(F)},{passive:!1}),o==null||o.addEventListener("pointercancel",F=>{var W;on(x()," ",!1),(W=F.preventDefault)==null||W.call(F)},{passive:!1}),d==null||d.addEventListener("pointerdown",F=>{var W;on(x(),"shift",!0),(W=F.preventDefault)==null||W.call(F)},{passive:!1}),d==null||d.addEventListener("pointerup",F=>{var W;on(x(),"shift",!1),(W=F.preventDefault)==null||W.call(F)},{passive:!1}),d==null||d.addEventListener("pointercancel",F=>{var W;on(x(),"shift",!1),(W=F.preventDefault)==null||W.call(F)},{passive:!1});const N=(F,W)=>{F==null||F.addEventListener("pointerup",j=>{var ot;W(),(ot=j.preventDefault)==null||ot.call(j)},{passive:!1})};N(a,()=>k(yn.pass,.45,0)),N(c,()=>k(yn.through,.58,0)),N(l,()=>k(yn.cross,.62,0)),N(h,()=>I()),N(g,()=>k(yn.keeperCatch,0,0)),N(v,()=>U()),N(m,()=>O()),u==null||u.addEventListener("pointerdown",F=>{var W;on(x(),"q",!0),(W=F.preventDefault)==null||W.call(F)},{passive:!1}),u==null||u.addEventListener("pointerup",F=>{var W;on(x(),"q",!1),(W=F.preventDefault)==null||W.call(F)},{passive:!1}),u==null||u.addEventListener("pointercancel",F=>{var W;on(x(),"q",!1),(W=F.preventDefault)==null||W.call(F)},{passive:!1}),f==null||f.addEventListener("pointerdown",F=>{var W;on(x(),"e",!0),(W=F.preventDefault)==null||W.call(F)},{passive:!1}),f==null||f.addEventListener("pointerup",F=>{var W;on(x(),"e",!1),(W=F.preventDefault)==null||W.call(F)},{passive:!1}),f==null||f.addEventListener("pointercancel",F=>{var W;on(x(),"e",!1),(W=F.preventDefault)==null||W.call(F)},{passive:!1});const $=()=>p(!0),z=()=>p(!1),K=F=>{var W;((W=F==null?void 0:F.detail)==null?void 0:W.connected)===!1&&p(!1)};return window.addEventListener("join:accepted",$),window.addEventListener("join:denied",z),window.addEventListener("socket:state",K),A(),{enabled:!0,setVisible:p,cleanup(){n==null||n.removeEventListener("pointerdown",b),n==null||n.removeEventListener("pointermove",C),n==null||n.removeEventListener("pointerup",R),n==null||n.removeEventListener("pointercancel",R),s==null||s.removeEventListener("pointerdown",S),s==null||s.removeEventListener("pointermove",M),s==null||s.removeEventListener("pointerup",L),s==null||s.removeEventListener("pointercancel",L),window.removeEventListener("join:accepted",$),window.removeEventListener("join:denied",z),window.removeEventListener("socket:state",K),p(!1),A()}}}let Zn,me,Vt,ui;var Uh,Wr,Fh;try{let t=function(e){requestAnimationFrame(t);const n=Math.min(.05,(e-r)/1e3);r=e,me.update(e,n),Zn.update(n)};document.querySelector("#app").innerHTML='<div id="game-container"></div>',Zn=new Ix(document.querySelector("#game-container")),window.world=Zn,me=new IM(Zn),window.network=me;try{ui=UM({world:Zn,network:me}),window.mobileControls=ui}catch{ui=null}try{const e=new URL("/assets/O%C4%9Fuz%20Sasinin%20Ball3Dde%20sinir%20krizi%20ge%C3%A7irdi%C4%9Fi%20anlar-CEYrpLIO.mp3",import.meta.url).href;Vt=new NM(e,{volume:.92,intervalMinMs:9e3,intervalMaxMs:13e3,snippetMinMs:6e3,snippetMaxMs:9e3}),window.loudDj=Vt,(Fh=(Wr=(Uh=Zn.renderer)==null?void 0:Uh.domElement)==null?void 0:Wr.addEventListener)==null||Fh.call(Wr,"click",()=>{var n;return(n=Vt==null?void 0:Vt.unlock)==null?void 0:n.call(Vt)},{passive:!0}),window.addEventListener("pointerdown",()=>{var n;return(n=Vt==null?void 0:Vt.unlock)==null?void 0:n.call(Vt)},{passive:!0})}catch{Vt=null}let r=performance.now();requestAnimationFrame(t)}catch(r){console.error("Critical Game Error:",r),alert("Game Error: "+r.message)}const nr=document.getElementById("login-screen"),gi=document.getElementById("login-btn"),fs=document.getElementById("nickname-input"),bn=document.getElementById("admin-pass-input"),ps=document.getElementById("lobby-screen"),$e=document.getElementById("chat-input"),wh=document.getElementById("chat-send-btn");document.getElementById("admin-panel");document.getElementById("spectator-panel");const Sh=document.getElementById("lobby-spectator-toggle"),Eh=document.getElementById("lobby-leave-room");window.isAdmin=!1;window.isReplayActive=!1;window.inRoom=!1;function _o(){var r,t,e;(e=(t=(r=Zn==null?void 0:Zn.renderer)==null?void 0:r.domElement)==null?void 0:t.requestPointerLock)==null||e.call(t)}function Zu(){var t,e,n;const r=(t=$e==null?void 0:$e.value)==null?void 0:t.trim();if(r){me.sendChat(r),$e.value="";try{if(window.matchMedia&&window.matchMedia("(pointer: coarse)").matches){const i=document.getElementById("chat-panel");(n=(e=i==null?void 0:i.classList)==null?void 0:e.remove)==null||n.call(e,"mobile-open")}}catch{}}}function Rc(){if(!bn||!fs)return;`${fs.value||""}`.trim().toLowerCase()==="rawlins"?bn.classList.remove("hidden"):(bn.classList.add("hidden"),bn.value="")}gi&&gi.addEventListener("click",()=>{var e,n;const r=fs.value.trim();if(r.length<1){alert("Nick en az 1 karakter olmali.");return}(e=Vt==null?void 0:Vt.unlock)==null||e.call(Vt),(n=Vt==null?void 0:Vt.init)==null||n.call(Vt).catch(()=>{}),window.isAdmin=!1,window.inRoom=!1;const t=bn&&!bn.classList.contains("hidden")?bn.value:null;me.joinGame(r,t)});fs&&(fs.addEventListener("keydown",r=>{r.key==="Enter"&&(gi==null||gi.click())}),fs.addEventListener("input",()=>{Rc()}));bn&&bn.addEventListener("keydown",r=>{r.key==="Enter"&&(gi==null||gi.click())});Rc();wh&&wh.addEventListener("click",()=>{var r;Zu(),(r=$e==null?void 0:$e.blur)==null||r.call($e),_o()});$e&&$e.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),Zu(),$e.blur(),_o())});window.addEventListener("keydown",r=>{var n;if(r.key==="Escape"){if(!nr.classList.contains("hidden")||!window.inRoom)return;ps.style.display==="flex"?(ps.style.display="none",_o()):(ps.style.display="flex",document.exitPointerLock());return}const t=(n=document.activeElement)==null?void 0:n.tagName;if(!(t==="INPUT"||t==="TEXTAREA")){if(r.key==="Enter"){if(!nr.classList.contains("hidden")||!window.inRoom||!$e)return;r.preventDefault(),$e.focus(),document.exitPointerLock();return}r.key==="1"&&me.sendQuickCommand(di.passMe),r.key==="2"&&me.sendQuickCommand(di.imOpen),r.key==="3"&&me.sendQuickCommand(di.fallBack),r.key==="4"&&me.sendQuickCommand(di.shoot)}});for(const r of document.querySelectorAll("[data-quick-command]"))r.addEventListener("click",()=>{const t=r.getAttribute("data-quick-command");t&&me.sendQuickCommand(t)});const bh=document.getElementById("admin-cap-apply"),ha=document.getElementById("admin-cap-input"),Th=document.getElementById("admin-add-bot"),Ah=document.getElementById("admin-remove-bot"),Ch=document.getElementById("admin-restart-match"),ua=document.getElementById("admin-duration-select"),Rh=document.getElementById("admin-duration-apply"),da=document.getElementById("admin-weather-select"),Ph=document.getElementById("admin-weather-apply");bh&&bh.addEventListener("click",()=>{const r=Number.parseInt((ha==null?void 0:ha.value)??"24",10);Number.isFinite(r)&&me.setActiveCap(r)});Th&&Th.addEventListener("click",()=>{me.addBot()});Ah&&Ah.addEventListener("click",()=>{me.removeBot()});Ch&&Ch.addEventListener("click",()=>{me.sendAdminCommand("restartMatch",{})});Rh&&Rh.addEventListener("click",()=>{const r=Number.parseInt((ua==null?void 0:ua.value)??"0",10);Number.isFinite(r)&&me.sendAdminCommand("setMatchDuration",{durationMin:r})});Ph&&Ph.addEventListener("click",()=>{const r=`${(da==null?void 0:da.value)||"day"}`.trim();me.sendAdminCommand("setWeatherMode",{mode:r})});const Lh=document.getElementById("spec-join-btn"),Ih=document.getElementById("spec-return-btn"),un=document.getElementById("seat-select"),Nh=document.getElementById("seat-apply-btn"),Dh=document.getElementById("spec-freecam-btn");if(un&&un.options.length===0)for(let r=0;r<60;r+=1){const t=document.createElement("option");t.value=`${r}`,t.textContent=`Tribun Koltuk ${r+1}`,un.appendChild(t)}Sh&&Sh.addEventListener("click",()=>{window.isSpectator?me.sendSpectatorRequest("return"):me.sendSpectatorRequest("join",Number.parseInt((un==null?void 0:un.value)??"0",10))});Eh&&Eh.addEventListener("click",()=>{var r,t;ps.style.display="none",me.leaveToLogin(),window.inRoom=!1,nr.classList.remove("hidden"),document.exitPointerLock(),(r=Vt==null?void 0:Vt.stop)==null||r.call(Vt),(t=ui==null?void 0:ui.setVisible)==null||t.call(ui,!1)});Lh&&Lh.addEventListener("click",()=>{me.sendSpectatorRequest("join",Number.parseInt((un==null?void 0:un.value)??"0",10))});Ih&&Ih.addEventListener("click",()=>{me.sendSpectatorRequest("return")});Nh&&Nh.addEventListener("click",()=>{me.sendSpectatorRequest("seat",Number.parseInt((un==null?void 0:un.value)??"0",10))});Dh&&Dh.addEventListener("click",()=>{me.sendSpectatorRequest("freecam")});window.addEventListener("room:error",r=>{var e;const t=`${((e=r==null?void 0:r.detail)==null?void 0:e.message)||"error"}`;alert(t)});window.addEventListener("join:accepted",()=>{nr.classList.add("hidden"),window.inRoom=!0,ps.style.display="none",_o(),Vt&&(Vt.stop(),Vt.unlock(),Vt.init().then(r=>{r&&Vt.start()}).catch(()=>{}))});window.addEventListener("join:denied",r=>{var n,i,s;const t=`${((n=r==null?void 0:r.detail)==null?void 0:n.reason)||""}`,e=`${((i=r==null?void 0:r.detail)==null?void 0:i.message)||"Giris reddedildi."}`;window.inRoom=!1,nr.classList.remove("hidden"),ps.style.display="none",document.exitPointerLock(),(t==="bad_password"||t==="admin_taken")&&(Rc(),bn&&(bn.value="")),(s=Vt==null?void 0:Vt.stop)==null||s.call(Vt),alert(e)});
