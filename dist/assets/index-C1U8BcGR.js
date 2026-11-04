(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const tl="187",yu=0,Yl=1,bu=2,Yr=1,Tu=2,Os=3,Si=0,nn=1,en=2,_i=0,Hs=1,xn=2,Zl=3,Jl=4,Eu=5,Yi=100,wu=101,Au=102,Ru=103,Cu=104,Pu=200,Lu=201,Iu=202,Du=203,fh=204,dh=205,Nu=206,Uu=207,Fu=208,Ou=209,Bu=210,zu=211,ku=212,Gu=213,Hu=214,ao=0,oo=1,lo=2,Xs=3,co=4,ho=5,uo=6,fo=7,el=0,Vu=1,Wu=2,Xn=0,nl=1,il=2,sl=3,da=4,rl=5,al=6,ol=7,ph=300,ns=301,qs=302,ba=303,Ta=304,yi=1e3,Wn=1001,po=1002,Ke=1003,Xu=1004,cr=1005,un=1006,Ea=1007,ii=1008,Mn=1009,mh=1010,gh=1011,Ys=1012,ll=1013,Fn=1014,Pn=1015,dn=1016,cl=1017,hl=1018,is=1020,_h=35902,xh=35899,vh=1021,Mh=1022,Un=1023,ri=1026,si=1027,ul=1028,fl=1029,bi=1030,dl=1031,pl=1033,Zr=33776,Jr=33777,Kr=33778,$r=33779,mo=35840,go=35841,_o=35842,xo=35843,vo=36196,Mo=37492,So=37496,yo=37488,bo=37489,na=37490,To=37491,Eo=37808,wo=37809,Ao=37810,Ro=37811,Co=37812,Po=37813,Lo=37814,Io=37815,Do=37816,No=37817,Uo=37818,Fo=37819,Oo=37820,Bo=37821,zo=36492,ko=36494,Go=36495,Ho=36283,Vo=36284,ia=36285,Wo=36286,qu=3200,sa=0,Yu=1,ni="",qe="srgb",ra="srgb-linear",aa="linear",ge="srgb",wa=7680,Zu=519,Ju=512,Ku=513,$u=514,Sh=515,Qu=516,ju=517,yh=518,bh=519,Th=35044,Aa=35048,Kl="300 es",Ln=2e3,Zs=2001;function tf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ef(){const i=oa("canvas");return i.style.display="block",i}const $l={};function la(...i){const t="THREE."+i.shift();console.log(t,...i)}function Eh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=Eh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function de(...i){i=Eh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Qi(...i){const t=i.join(" ");t in $l||($l[t]=!0,Wt(...i))}function nf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const sf={[ao]:ao,[lo]:uo,[co]:co,[Xs]:ho,[oo]:oo,[uo]:lo,[fo]:fo,[ho]:Xs};class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ra=Math.PI/180,ca=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function rf(i,t){return(i%t+t)%t}function Ca(i,t,e){return(1-e)*i+e*t}function af(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pa(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wh(i,t){if(t.constructor===Float32Array)return i;const e=pa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Ah(i,t){if(t.constructor===Float32Array)return i;const e=pa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Il=class Il{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Il.prototype.isVector2=!0;let J=Il;class fs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],d=r[a+0],u=r[a+1],p=r[a+2],v=r[a+3];if(h!==v||l!==d||c!==u||f!==p){let g=l*d+c*u+f*p+h*v;g<0&&(d=-d,u=-u,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){const x=Math.acos(g),T=Math.sin(x);m=Math.sin(m*x)/T,o=Math.sin(o*x)/T,l=l*m+d*o,c=c*m+u*o,f=f*m+p*o,h=h*m+v*o}else{l=l*m+d*o,c=c*m+u*o,f=f*m+p*o,h=h*m+v*o;const x=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=x,c*=x,f*=x,h*=x}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[a],d=r[a+1],u=r[a+2],p=r[a+3];return t[e]=o*p+f*h+l*u-c*d,t[e+1]=l*p+f*d+c*h-o*u,t[e+2]=c*p+f*u+o*d-l*h,t[e+3]=f*p-o*h-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),h=o(r/2),d=l(n/2),u=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*f*h+c*u*p,this._y=c*u*h-d*f*p,this._z=c*f*p+d*u*h,this._w=c*f*h-d*u*p;break;case"YXZ":this._x=d*f*h+c*u*p,this._y=c*u*h-d*f*p,this._z=c*f*p-d*u*h,this._w=c*f*h+d*u*p;break;case"ZXY":this._x=d*f*h-c*u*p,this._y=c*u*h+d*f*p,this._z=c*f*p+d*u*h,this._w=c*f*h-d*u*p;break;case"ZYX":this._x=d*f*h-c*u*p,this._y=c*u*h+d*f*p,this._z=c*f*p-d*u*h,this._w=c*f*h+d*u*p;break;case"YZX":this._x=d*f*h+c*u*p,this._y=c*u*h+d*f*p,this._z=c*f*p-d*u*h,this._w=c*f*h-d*u*p;break;case"XZY":this._x=d*f*h-c*u*p,this._y=c*u*h-d*f*p,this._z=c*f*p+d*u*h,this._w=c*f*h+d*u*p;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],h=e[10],d=n+o+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>h){const u=2*Math.sqrt(1+n-o-h);this._w=(f-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>h){const u=2*Math.sqrt(1+o-n-h);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+f)/u}else{const u=2*Math.sqrt(1+h-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dl=class Dl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),f=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*f,this.y=n+l*f+o*c-r*h,this.z=s+l*h+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dl.prototype.isVector3=!0;let I=Dl;const Pa=new I,Ql=new fs,Nl=class Nl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],d=n[2],u=n[5],p=n[8],v=s[0],g=s[3],m=s[6],x=s[1],T=s[4],S=s[7],A=s[2],E=s[5],_=s[8];return r[0]=a*v+o*x+l*A,r[3]=a*g+o*T+l*E,r[6]=a*m+o*S+l*_,r[1]=c*v+f*x+h*A,r[4]=c*g+f*T+h*E,r[7]=c*m+f*S+h*_,r[2]=d*v+u*x+p*A,r[5]=d*g+u*T+p*E,r[8]=d*m+u*S+p*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=f*a-o*c,d=o*l-f*r,u=c*r-a*l,p=e*h+n*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=h*v,t[1]=(s*c-f*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(f*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(La.makeScale(t,e)),this}rotate(t){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(La.makeRotation(-t)),this}translate(t,e){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(La.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Nl.prototype.isMatrix3=!0;let qt=Nl;const La=new qt,jl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function of(){const i={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ge&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ge&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ra]:{primaries:t,whitePoint:n,transfer:aa,toXYZ:jl,fromXYZ:tc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:jl,fromXYZ:tc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}const he=of();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class lf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=oa("canvas")),Ri.width=t.width,Ri.height=t.height;const s=Ri.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cf=0;class ml{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ia(s[a].image)):r.push(Ia(s[a]))}else r=Ia(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let hf=0;const Da=new I;class sn extends wi{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,n=Wn,s=Wn,r=un,a=ii,o=Un,l=Mn,c=sn.DEFAULT_ANISOTROPY,f=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=ai(),this.name="",this.source=new ml(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Da).x}get height(){return this.source.getSize(Da).y}get depth(){return this.source.getSize(Da).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yi:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yi:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=ph;sn.DEFAULT_ANISOTROPY=1;const Ul=class Ul{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],f=l[4],h=l[8],d=l[1],u=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(u+1)/2,A=(m+1)/2,E=(f+d)/4,_=(h+v)/4,b=(p+g)/4;return T>S&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=_/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=b/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-p)*(g-p)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(h-v)/x,this.z=(d-f)/x,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ul.prototype.isVector4=!0;let Ce=Ul;class uf extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new sn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ml(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rh extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const fa=class fa{constructor(t,e,n,s,r,a,o,l,c,f,h,d,u,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,f,h,d,u,p,v,g)}set(t,e,n,s,r,a,o,l,c,f,h,d,u,p,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=f,m[10]=h,m[14]=d,m[3]=u,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fa().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*f,u=a*h,p=o*f,v=o*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=u+p*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=p+u*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*f,u=l*h,p=c*f,v=c*h;e[0]=d+v*o,e[4]=p*o-u,e[8]=a*c,e[1]=a*h,e[5]=a*f,e[9]=-o,e[2]=u*o-p,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*f,u=l*h,p=c*f,v=c*h;e[0]=d-v*o,e[4]=-a*h,e[8]=p+u*o,e[1]=u+p*o,e[5]=a*f,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*f,u=a*h,p=o*f,v=o*h;e[0]=l*f,e[4]=p*c-u,e[8]=d*c+v,e[1]=l*h,e[5]=v*c+d,e[9]=u*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,u=a*c,p=o*l,v=o*c;e[0]=l*f,e[4]=v-d*h,e[8]=p*h+u,e[1]=h,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=u*h+p,e[10]=d-v*h}else if(t.order==="XZY"){const d=a*l,u=a*c,p=o*l,v=o*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=d*h+v,e[5]=a*f,e[9]=u*h-p,e[2]=p*h-u,e[6]=o*f,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(df,t,pf)}lookAt(t,e,n){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Kn.crossVectors(n,mn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Kn.crossVectors(n,mn)),Kn.normalize(),hr.crossVectors(mn,Kn),s[0]=Kn.x,s[4]=hr.x,s[8]=mn.x,s[1]=Kn.y,s[5]=hr.y,s[9]=mn.y,s[2]=Kn.z,s[6]=hr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],d=n[9],u=n[13],p=n[2],v=n[6],g=n[10],m=n[14],x=n[3],T=n[7],S=n[11],A=n[15],E=s[0],_=s[4],b=s[8],C=s[12],R=s[1],D=s[5],B=s[9],W=s[13],N=s[2],V=s[6],Z=s[10],F=s[14],K=s[3],z=s[7],Q=s[11],tt=s[15];return r[0]=a*E+o*R+l*N+c*K,r[4]=a*_+o*D+l*V+c*z,r[8]=a*b+o*B+l*Z+c*Q,r[12]=a*C+o*W+l*F+c*tt,r[1]=f*E+h*R+d*N+u*K,r[5]=f*_+h*D+d*V+u*z,r[9]=f*b+h*B+d*Z+u*Q,r[13]=f*C+h*W+d*F+u*tt,r[2]=p*E+v*R+g*N+m*K,r[6]=p*_+v*D+g*V+m*z,r[10]=p*b+v*B+g*Z+m*Q,r[14]=p*C+v*W+g*F+m*tt,r[3]=x*E+T*R+S*N+A*K,r[7]=x*_+T*D+S*V+A*z,r[11]=x*b+T*B+S*Z+A*Q,r[15]=x*C+T*W+S*F+A*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],h=t[6],d=t[10],u=t[14],p=t[3],v=t[7],g=t[11],m=t[15],x=l*u-c*d,T=o*u-c*h,S=o*d-l*h,A=a*u-c*f,E=a*d-l*f,_=a*h-o*f;return e*(v*x-g*T+m*S)-n*(p*x-g*A+m*E)+s*(p*T-v*A+m*_)-r*(p*S-v*E+g*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return e*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=t[9],d=t[10],u=t[11],p=t[12],v=t[13],g=t[14],m=t[15],x=e*o-n*a,T=e*l-s*a,S=e*c-r*a,A=n*l-s*o,E=n*c-r*o,_=s*c-r*l,b=f*v-h*p,C=f*g-d*p,R=f*m-u*p,D=h*g-d*v,B=h*m-u*v,W=d*m-u*g,N=x*W-T*B+S*D+A*R-E*C+_*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/N;return t[0]=(o*W-l*B+c*D)*V,t[1]=(s*B-n*W-r*D)*V,t[2]=(v*_-g*E+m*A)*V,t[3]=(d*E-h*_-u*A)*V,t[4]=(l*R-a*W-c*C)*V,t[5]=(e*W-s*R+r*C)*V,t[6]=(g*S-p*_-m*T)*V,t[7]=(f*_-d*S+u*T)*V,t[8]=(a*B-o*R+c*b)*V,t[9]=(n*R-e*B-r*b)*V,t[10]=(p*E-v*S+m*x)*V,t[11]=(h*S-f*E-u*x)*V,t[12]=(o*C-a*D-l*b)*V,t[13]=(e*D-n*C+s*b)*V,t[14]=(v*T-p*A-g*x)*V,t[15]=(f*A-h*T+d*x)*V,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,h=o+o,d=r*c,u=r*f,p=r*h,v=a*f,g=a*h,m=o*h,x=l*c,T=l*f,S=l*h,A=n.x,E=n.y,_=n.z;return s[0]=(1-(v+m))*A,s[1]=(u+S)*A,s[2]=(p-T)*A,s[3]=0,s[4]=(u-S)*E,s[5]=(1-(d+m))*E,s[6]=(g+x)*E,s[7]=0,s[8]=(p+T)*_,s[9]=(g-x)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ci.set(s[0],s[1],s[2]).length();const o=Ci.set(s[4],s[5],s[6]).length(),l=Ci.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);const c=1/a,f=1/o,h=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=f,An.elements[5]*=f,An.elements[6]*=f,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,e.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Ln,l=!1){const c=this.elements,f=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===Ln)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Zs)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ln,l=!1){const c=this.elements,f=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s);let p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===Ln)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===Zs)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};fa.prototype.isMatrix4=!0;let ve=fa;const Ci=new I,An=new ve,df=new I(0,0,0),pf=new I(1,1,1),Kn=new I,hr=new I,mn=new I,ec=new ve,nc=new fs;class Yn{constructor(t=0,e=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],h=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nc.setFromEuler(this),this.setFromQuaternion(nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mf=0;const ic=new I,Pi=new fs,zn=new ve,ur=new I,Ss=new I,gf=new I,_f=new fs,sc=new I(1,0,0),rc=new I(0,1,0),ac=new I(0,0,1),oc={type:"added"},xf={type:"removed"},Li={type:"childadded",child:null},Na={type:"childremoved",child:null};class Te extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new I,e=new Yn,n=new fs,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new qt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(sc,t)}rotateY(t){return this.rotateOnAxis(rc,t)}rotateZ(t){return this.rotateOnAxis(ac,t)}translateOnAxis(t,e){return ic.copy(t).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sc,t)}translateY(t){return this.translateOnAxis(rc,t)}translateZ(t){return this.translateOnAxis(ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ss,ur,this.up):zn.lookAt(ur,Ss,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(zn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oc),Li.child=t,this.dispatchEvent(Li),Li.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xf),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oc),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,_f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),h=a(t.shapes),d=a(t.skeletons),u=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Te.DEFAULT_UP=new I(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ae extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vf={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=rf(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fa(a,r,t+1/3),this.g=Fa(a,r,t),this.b=Fa(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return he.workingToColorSpace(tn.copy(this),t),Math.round(ne(tn.r*255,0,255))*65536+Math.round(ne(tn.g*255,0,255))*256+Math.round(ne(tn.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(tn.copy(this),e);const n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=qe){he.workingToColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,s=tn.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(fr);const n=Ca($n.h,fr.h,e),s=Ca($n.s,fr.s,e),r=Ca($n.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ht;Ht.NAMES=Ph;class gl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new gl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lh extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Rn=new I,kn=new I,Oa=new I,Gn=new I,Ii=new I,Di=new I,lc=new I,Ba=new I,za=new I,ka=new I,Ga=new Ce,Ha=new Ce,Va=new Ce;class Tn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),kn.subVectors(n,e),Oa.subVectors(t,e);const a=Rn.dot(Rn),o=Rn.dot(kn),l=Rn.dot(Oa),c=kn.dot(kn),f=kn.dot(Oa),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,u=(c*l-o*f)*d,p=(a*f-o*l)*d;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ga.setScalar(0),Ha.setScalar(0),Va.setScalar(0),Ga.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,n),Va.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ga,r.x),a.addScaledVector(Ha,r.y),a.addScaledVector(Va,r.z),a}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),kn.subVectors(t,e),Rn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),Rn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ii.subVectors(s,n),Di.subVectors(r,n),Ba.subVectors(t,n);const l=Ii.dot(Ba),c=Di.dot(Ba);if(l<=0&&c<=0)return e.copy(n);za.subVectors(t,s);const f=Ii.dot(za),h=Di.dot(za);if(f>=0&&h<=f)return e.copy(s);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0&&l-f>0)return a=l/(l-f),e.copy(n).addScaledVector(Ii,a);ka.subVectors(t,r);const u=Ii.dot(ka),p=Di.dot(ka);if(p>=0&&u<=p)return e.copy(r);const v=u*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Di,o);const g=f*p-u*h;if(g<=0&&h-f>=0&&u-p>=0)return lc.subVectors(r,s),o=(h-f)/(h-f+(u-p)),e.copy(s).addScaledVector(lc,o);const m=1/(g+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(Ii,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ai{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),pr.subVectors(this.max,ys),Ni.subVectors(t.a,ys),Ui.subVectors(t.b,ys),Fi.subVectors(t.c,ys),Qn.subVectors(Ui,Ni),jn.subVectors(Fi,Ui),ui.subVectors(Ni,Fi);let e=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-ui.z,ui.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,ui.z,0,-ui.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-ui.y,ui.x,0];return!Wa(e,Ni,Ui,Fi,pr)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,Ni,Ui,Fi,pr))?!1:(mr.crossVectors(Qn,jn),e=[mr.x,mr.y,mr.z],Wa(e,Ni,Ui,Fi,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hn=[new I,new I,new I,new I,new I,new I,new I,new I],Cn=new I,dr=new Ai,Ni=new I,Ui=new I,Fi=new I,Qn=new I,jn=new I,ui=new I,ys=new I,pr=new I,mr=new I,fi=new I;function Wa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);const o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),f=n.dot(fi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Oe=new I,gr=new J;let Mf=0;class Ze extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=Pn,this.version=0,this._normalizationScale=t!==void 0?pa(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ah(t,this.array)}}class Ih extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dh extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Sf=new Ai,bs=new I,Xa=new I;class ds{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Xa)),this.expandByPoint(bs.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let yf=0;const Sn=new ve,qa=new Te,Oi=new I,gn=new Ai,Ts=new Ai,We=new I;class Le extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tf(t)?Dh:Ih)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return qa.lookAt(t),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(gn.min,Ts.min),gn.expandByPoint(We),We.addVectors(gn.max,Ts.max),gn.expandByPoint(We)):(gn.expandByPoint(Ts.min),gn.expandByPoint(Ts.max))}gn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)We.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(t,c),We.add(Oi)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const f=new I,h=new I,d=new I,u=new J,p=new J,v=new J,g=new I,m=new I;function x(C,R,D){c[C]=c[R]=c[D]=1,f.fromBufferAttribute(n,C),h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,C),p.fromBufferAttribute(r,R),v.fromBufferAttribute(r,D),h.sub(f),d.sub(f),p.sub(u),v.sub(u);const B=1/(p.x*v.y-v.x*p.y);isFinite(B)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(B),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(B),o[C].add(g),o[R].add(g),o[D].add(g),l[C].add(m),l[R].add(m),l[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let C=0,R=T.length;C<R;++C){const D=T[C],B=D.start,W=D.count;for(let N=B,V=B+W;N<V;N+=3)x(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new I,A=new I,E=new I,_=new I;function b(C){E.fromBufferAttribute(s,C),_.copy(E);const R=o[C];S.copy(R),S.sub(E.multiplyScalar(E.dot(R))).normalize(),A.crossVectors(_,R);const B=A.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,B)}for(let C=0,R=n.count;C<R;++C)c[C]&&b(C);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,f=new I,h=new I;if(t)for(let d=0,u=t.count;d<u;d+=3){const p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(f),l.add(f),c.add(f),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let u=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*f;for(let m=0;m<f;m++)d[p++]=c[u++]}return new Ze(d,f,h)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const u=c[h];f.push(u.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],h=r[c];for(let d=0,u=h.length;d<u;d++)f.push(h[d].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=cc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=cc(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function cc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ai()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const an=new I;class ha{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?pa(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){la("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ha(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){la("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wh(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ah(t,this.data.array)}}const Ya=new I,Tf=new I,Ef=new qt;class ei{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ya.subVectors(n,e).cross(Tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ya),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ef.getNormalMatrix(t),s=this.coplanarPoint(Ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let wf=0;class oi extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Hs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ei().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new J().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ma extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Bi;const Es=new I,zi=new I,ki=new I,Gi=new J,ws=new J,Nh=new ve,_r=new I,As=new I,xr=new I,hc=new J,Za=new J,uc=new J;class _l extends Te{constructor(t=new ma){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bf(e,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new ha(n,3,0,!1)),Bi.setAttribute("uv",new ha(n,2,3,!1))}this.geometry=Bi,this.material=t,this.center=new J(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&de('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),Nh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;vr(_r.set(-.5,-.5,0),ki,a,zi,s,r),vr(As.set(.5,-.5,0),ki,a,zi,s,r),vr(xr.set(.5,.5,0),ki,a,zi,s,r),hc.set(0,0),Za.set(1,0),uc.set(1,1);let o=t.ray.intersectTriangle(_r,As,xr,!1,Es);if(o===null&&(vr(As.set(-.5,.5,0),ki,a,zi,s,r),Za.set(0,1),o=t.ray.intersectTriangle(_r,xr,As,!1,Es),o===null))return;const l=t.ray.origin.distanceTo(Es);l<t.near||l>t.far||e.push({distance:l,point:Es.clone(),uv:Tn.getInterpolation(Es,_r,As,xr,hc,Za,uc,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function vr(i,t,e,n,s,r){Gi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ws.x=r*Gi.x-s*Gi.y,ws.y=s*Gi.x+r*Gi.y):ws.copy(Gi),i.copy(t),i.x+=ws.x,i.y+=ws.y,i.applyMatrix4(Nh)}const Vn=new I,Ja=new I,Mr=new I,Sr=new I;class Uh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ja.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),Sr.copy(this.origin).sub(Ja);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Mr),o=Sr.dot(this.direction),l=-Sr.dot(Mr),c=Sr.lengthSq(),f=Math.abs(1-a*a);let h,d,u,p;if(f>0)if(h=a*l-o,d=a*o-l,p=r*f,h>=0)if(d>=-p)if(d<=p){const v=1/f;h*=v,d*=v,u=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),u=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),u=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),u=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),u=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),u=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ja).addScaledVector(Mr,d),u}intersectSphere(t,e){if(t.radius<0)return null;Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),f>=0?(r=(t.min.y-d.y)*f,a=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,a=(t.min.y-d.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,h=t.x-a.x,d=t.y-a.y,u=t.z-a.z,p=e.x-a.x,v=e.y-a.y,g=e.z-a.z,m=n.x-a.x,x=n.y-a.y,T=n.z-a.z,S=Math.abs(l),A=Math.abs(c),E=Math.abs(f);let _,b,C,R,D,B,W,N,V,Z,F,K;if(S>=A&&S>=E?(C=l,B=h,V=p,K=m,l>=0?(_=c,b=f,R=d,D=u,W=v,N=g,Z=x,F=T):(_=f,b=c,R=u,D=d,W=g,N=v,Z=T,F=x)):A>=E?(C=c,B=d,V=v,K=x,c>=0?(_=f,b=l,R=u,D=h,W=g,N=p,Z=T,F=m):(_=l,b=f,R=h,D=u,W=p,N=g,Z=m,F=T)):(C=f,B=u,V=g,K=T,f>=0?(_=l,b=c,R=h,D=d,W=p,N=v,Z=m,F=x):(_=c,b=l,R=d,D=h,W=v,N=p,Z=x,F=m)),C===0)return null;const z=_/C,Q=b/C,tt=1/C,lt=R-z*B,Ut=D-Q*B,q=W-z*V,ht=N-Q*V,Rt=Z-z*K,Bt=F-Q*K,bt=Rt*ht-Bt*q,zt=lt*Bt-Ut*Rt,be=q*Ut-ht*lt;if(s){if(bt<0||zt<0||be<0)return null}else if((bt<0||zt<0||be<0)&&(bt>0||zt>0||be>0))return null;const Gt=bt+zt+be;if(Gt===0)return null;const ee=tt*(bt*B+zt*V+be*K);return(Gt>0?ee<0:ee>0)?null:this.at(ee/Gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fc=new ve,di=new Uh,yr=new ds,dc=new I,br=new I,Tr=new I,Er=new I,Ka=new I,wr=new I,pc=new I,Ar=new I;class Ct extends Te{constructor(t=new Le,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],h=r[l];f!==0&&(Ka.fromBufferAttribute(h,t),a?wr.addScaledVector(Ka,f):wr.addScaledVector(Ka.sub(e),f))}e.add(wr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(yr.containsPoint(di.origin)===!1&&(di.intersectSphere(yr,dc)===null||di.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(fc.copy(r).invert(),di.copy(t.ray).applyMatrix4(fc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=a[g.materialIndex],x=Math.max(g.start,u.start),T=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let S=x,A=T;S<A;S+=3){const E=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);s=Rr(this,m,t,n,c,f,h,E,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let g=p,m=v;g<m;g+=3){const x=o.getX(g),T=o.getX(g+1),S=o.getX(g+2);s=Rr(this,a,t,n,c,f,h,x,T,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=a[g.materialIndex],x=Math.max(g.start,u.start),T=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let S=x,A=T;S<A;S+=3){const E=S,_=S+1,b=S+2;s=Rr(this,m,t,n,c,f,h,E,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let g=p,m=v;g<m;g+=3){const x=g,T=g+1,S=g+2;s=Rr(this,a,t,n,c,f,h,x,T,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Af(i,t,e,n,s,r,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:i}}function Rr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,br),i.getVertexPosition(l,Tr),i.getVertexPosition(c,Er);const f=Af(i,t,e,n,br,Tr,Er,pc);if(f){const h=new I;Tn.getBarycoord(pc,br,Tr,Er,h),s&&(f.uv=Tn.getInterpolatedAttribute(s,o,l,c,h,new J)),r&&(f.uv1=Tn.getInterpolatedAttribute(r,o,l,c,h,new J)),a&&(f.normal=Tn.getInterpolatedAttribute(a,o,l,c,h,new I),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Tn.getNormal(br,Tr,Er,d.normal),f.face=d,f.barycoord=h}return f}class Fh extends sn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ke,f=Ke,h,d){super(null,a,o,l,c,f,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mc extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hi=new ve,gc=new ve,Cr=[],_c=new Ai,Rf=new ve,Rs=new Ct,Cs=new ds;class Qr extends Ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),_c.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(_c)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ds),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),Cs.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),t.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hi),gc.multiplyMatrices(n,Hi),Rs.matrixWorld=gc,Rs.raycast(t,Cr);for(let a=0,o=Cr.length;a<o;a++){const l=Cr[a];l.instanceId=r,l.object=this,e.push(l)}Cr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fh(new Float32Array(s*this.count),s,this.count,ul,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pi=new ds,Cf=new J(.5,.5),Pr=new I;class Js{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,a=new ei){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],h=r[5],d=r[6],u=r[7],p=r[8],v=r[9],g=r[10],m=r[11],x=r[12],T=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,u-f,m-p,A-x).normalize(),s[1].setComponents(c+a,u+f,m+p,A+x).normalize(),s[2].setComponents(c+o,u+h,m+v,A+T).normalize(),s[3].setComponents(c-o,u-h,m-v,A-T).normalize(),n)s[4].setComponents(l,d,g,S).normalize(),s[5].setComponents(c-l,u-d,m-g,A-S).normalize();else if(s[4].setComponents(c-l,u-d,m-g,A-S).normalize(),e===Ln)s[5].setComponents(c+l,u+d,m+g,A+S).normalize();else if(e===Zs)s[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){pi.center.set(0,0,0);const e=Cf.distanceTo(t.center);return pi.radius=.7071067811865476+e,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const xc=new ve;class xl{constructor(){this.coordinateSystem=Ln,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];xc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Js),n[s].setFromProjectionMatrix(xc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Js),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new xl().copy(this)}}class Bs extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vc=new ve,Xo=new Uh,Lr=new ds,Ir=new I;class Dr extends Te{constructor(t=new Le,e=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,t.ray.intersectsSphere(Lr)===!1)return;vc.copy(s).invert(),Xo.copy(t.ray).applyMatrix4(vc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let p=d,v=u;p<v;p++){const g=c.getX(p);Ir.fromBufferAttribute(h,g),Mc(Ir,g,l,s,t,e,this)}}else{const d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let p=d,v=u;p<v;p++)Ir.fromBufferAttribute(h,p),Mc(Ir,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Mc(i,t,e,n,s,r,a){const o=Xo.distanceSqToPoint(i);if(o<e){const l=new I;Xo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Oh extends sn{constructor(t=[],e=ns,n,s,r,a,o,l,c,f){super(t,e,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ps extends sn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ss extends sn{constructor(t,e,n=Fn,s,r,a,o=Ke,l=Ke,c,f=ri,h=1){if(f!==ri&&f!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Bh extends ss{constructor(t,e=Fn,n=ns,s,r,a=Ke,o=Ke,l,c=ri){const f={width:t,height:t,depth:1},h=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zh extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Jt extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,u=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(h,2));function p(v,g,m,x,T,S,A,E,_,b,C){const R=S/_,D=A/b,B=S/2,W=A/2,N=E/2,V=_+1,Z=b+1;let F=0,K=0;const z=new I;for(let Q=0;Q<Z;Q++){const tt=Q*D-W;for(let lt=0;lt<V;lt++){const Ut=lt*R-B;z[v]=Ut*x,z[g]=tt*T,z[m]=N,c.push(z.x,z.y,z.z),z[v]=0,z[g]=0,z[m]=E>0?1:-1,f.push(z.x,z.y,z.z),h.push(lt/_),h.push(1-Q/b),F+=1}}for(let Q=0;Q<b;Q++)for(let tt=0;tt<_;tt++){const lt=d+tt+V*Q,Ut=d+tt+V*(Q+1),q=d+(tt+1)+V*(Q+1),ht=d+(tt+1)+V*Q;l.push(lt,Ut,ht),l.push(Ut,q,ht),K+=6}o.addGroup(u,K,C),u+=K,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ks extends Le{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],f=e/2,h=Math.PI/2*t,d=e,u=2*h+d,p=n*2+r,v=s+1,g=new I,m=new I;for(let x=0;x<=p;x++){let T=0,S=0,A=0,E=0;if(x<=n){const C=x/n,R=C*Math.PI/2;S=-f-t*Math.cos(R),A=t*Math.sin(R),E=-t*Math.cos(R),T=C*h}else if(x<=n+r){const C=(x-n)/r;S=-f+C*e,A=t,E=0,T=h+C*d}else{const C=(x-n-r)/n,R=C*Math.PI/2;S=f+t*Math.sin(R),A=t*Math.cos(R),E=t*Math.sin(R),T=h+d+C*h}const _=Math.max(0,Math.min(1,T/u));let b=0;x===0?b=.5/s:x===p&&(b=-.5/s);for(let C=0;C<=s;C++){const R=C/s,D=R*Math.PI*2,B=Math.sin(D),W=Math.cos(D);m.x=-A*W,m.y=S,m.z=A*B,o.push(m.x,m.y,m.z),g.set(-A*W,E,A*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+b,_)}if(x>0){const C=(x-1)*v;for(let R=0;R<s;R++){const D=C+R,B=C+R+1,W=x*v+R,N=x*v+R+1;a.push(D,B,W),a.push(B,N,W)}}}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class xi extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,f=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const u=n+h/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[d]/t+1)/2,f.y=(a[d+1]/t+1)/2,l.push(f.x,f.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class hn extends Le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],h=[],d=[],u=[];let p=0;const v=[],g=n/2;let m=0;x(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(f),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(u,2));function x(){const S=new I,A=new I;let E=0;const _=(e-t)/n;for(let b=0;b<=r;b++){const C=[],R=b/r,D=R*(e-t)+t;for(let B=0;B<=s;B++){const W=B/s,N=W*l+o,V=Math.sin(N),Z=Math.cos(N);A.x=D*V,A.y=-R*n+g,A.z=D*Z,h.push(A.x,A.y,A.z),S.set(V,_,Z).normalize(),d.push(S.x,S.y,S.z),u.push(W,1-R),C.push(p++)}v.push(C)}for(let b=0;b<s;b++)for(let C=0;C<r;C++){const R=v[C][b],D=v[C+1][b],B=v[C+1][b+1],W=v[C][b+1];(t>0||C!==0)&&(f.push(R,D,W),E+=3),(e>0||C!==r-1)&&(f.push(D,B,W),E+=3)}c.addGroup(m,E,0),m+=E}function T(S){const A=p,E=new J,_=new I;let b=0;const C=S===!0?t:e,R=S===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,g*R,0),d.push(0,R,0),u.push(.5,.5),p++;const D=p;for(let B=0;B<=s;B++){const N=B/s*l+o,V=Math.cos(N),Z=Math.sin(N);_.x=C*Z,_.y=g*R,_.z=C*V,h.push(_.x,_.y,_.z),d.push(0,R,0),E.x=V*.5+.5,E.y=Z*.5*R+.5,u.push(E.x,E.y),p++}for(let B=0;B<s;B++){const W=A+B,N=D+B;S===!0?f.push(N,N+1,W):f.push(N+1,N,W),b+=3}c.addGroup(m,b,S===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ts extends hn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ts(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vl extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const T=new I,S=new I,A=new I;for(let E=0;E<e.length;E+=3)u(e[E+0],T),u(e[E+1],S),u(e[E+2],A),l(T,S,A,x)}function l(x,T,S,A){const E=A+1,_=[];for(let b=0;b<=E;b++){_[b]=[];const C=x.clone().lerp(S,b/E),R=T.clone().lerp(S,b/E),D=E-b;for(let B=0;B<=D;B++)B===0&&b===E?_[b][B]=C:_[b][B]=C.clone().lerp(R,B/D)}for(let b=0;b<E;b++)for(let C=0;C<2*(E-b)-1;C++){const R=Math.floor(C/2);C%2===0?(d(_[b][R+1]),d(_[b+1][R]),d(_[b][R])):(d(_[b][R+1]),d(_[b+1][R+1]),d(_[b+1][R]))}}function c(x){const T=new I;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(x),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function f(){const x=new I;for(let T=0;T<r.length;T+=3){x.x=r[T+0],x.y=r[T+1],x.z=r[T+2];const S=g(x)/2/Math.PI+.5,A=m(x)/Math.PI+.5;a.push(S,1-A)}p(),h()}function h(){for(let x=0;x<a.length;x+=6){const T=a[x+0],S=a[x+2],A=a[x+4],E=Math.max(T,S,A),_=Math.min(T,S,A);E>.9&&_<.1&&(T<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function u(x,T){const S=x*3;T.x=t[S+0],T.y=t[S+1],T.z=t[S+2]}function p(){const x=new I,T=new I,S=new I,A=new I,E=new J,_=new J,b=new J;for(let C=0,R=0;C<r.length;C+=9,R+=6){x.set(r[C+0],r[C+1],r[C+2]),T.set(r[C+3],r[C+4],r[C+5]),S.set(r[C+6],r[C+7],r[C+8]),E.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),A.copy(x).add(T).add(S).divideScalar(3);const D=g(A);v(E,R+0,x,D),v(_,R+2,T,D),v(b,R+4,S,D)}}function v(x,T,S,A){A<0&&x.x===1&&(a[T]=x.x-1),S.x===0&&S.z===0&&(a[T]=A/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.vertices,t.indices,t.radius,t.detail)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const f=n[s],d=n[s+1]-f,u=(a-f)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new J:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new ve;for(let u=0;u<=t;u++){const p=u/t;s[u]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const f=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ne(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,p))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ne(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ml extends On{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new J){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*f-u*h+this.aX,c=d*h+u*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Pf extends Ml{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,f,h){let d=(a-r)/c-(o-r)/(c+f)+(o-a)/f,u=(o-a)/f-(l-a)/(f+h)+(l-o)/h;d*=f,u*=f,s(a,o,d,u)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Sc=new I,yc=new I,$a=new Sl,Qa=new Sl,ja=new Sl;class Lf extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,f;this.closed||o>0?c=s[(o-1)%r]:(yc.subVectors(s[0],s[1]).add(s[0]),c=yc);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(Sc.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Sc),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),u),v=Math.pow(h.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(f),u);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),$a.initNonuniformCatmullRom(c.x,h.x,d.x,f.x,p,v,g),Qa.initNonuniformCatmullRom(c.y,h.y,d.y,f.y,p,v,g),ja.initNonuniformCatmullRom(c.z,h.z,d.z,f.z,p,v,g)}else this.curveType==="catmullrom"&&($a.initCatmullRom(c.x,h.x,d.x,f.x,this.tension),Qa.initCatmullRom(c.y,h.y,d.y,f.y,this.tension),ja.initCatmullRom(c.z,h.z,d.z,f.z,this.tension));return n.set($a.calc(l),Qa.calc(l),ja.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function If(i,t){const e=1-i;return e*e*t}function Df(i,t){return 2*(1-i)*i*t}function Nf(i,t){return i*i*t}function Vs(i,t,e,n){return If(i,t)+Df(i,e)+Nf(i,n)}function Uf(i,t){const e=1-i;return e*e*e*t}function Ff(i,t){const e=1-i;return 3*e*e*i*t}function Of(i,t){return 3*(1-i)*i*i*t}function Bf(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return Uf(i,t)+Ff(i,e)+Of(i,n)+Bf(i,s)}class kh extends On{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,s.x,r.x,a.x,o.x),Ws(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zf extends On{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,s.x,r.x,a.x,o.x),Ws(t,s.y,r.y,a.y,o.y),Ws(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gh extends On{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kf extends On{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends On{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Vs(t,s.x,r.x,a.x),Vs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gf extends On{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Vs(t,s.x,r.x,a.x),Vs(t,s.y,r.y,a.y),Vs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],f=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(bc(o,l.x,c.x,f.x,h.x),bc(o,l.y,c.y,f.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this}}var qo=Object.freeze({__proto__:null,ArcCurve:Pf,CatmullRomCurve3:Lf,CubicBezierCurve:kh,CubicBezierCurve3:zf,EllipseCurve:Ml,LineCurve:Gh,LineCurve3:kf,QuadraticBezierCurve:Hh,QuadraticBezierCurve3:Gf,SplineCurve:Vh});class Hf extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const f=l[c];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new qo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Tc extends Hf{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Gh(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Hh(this.currentPoint.clone(),new J(t,e),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new kh(this.currentPoint.clone(),new J(t,e),new J(n,s),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Vh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Ml(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yl extends Tc{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Tc().fromJSON(s))}return this}}function Vf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Wh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Zf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let f=o,h=l;for(let d=e;d<s;d+=e){const u=i[d],p=i[d+1];u<o&&(o=u),p<l&&(l=p),u>f&&(f=u),p>h&&(h=p)}c=Math.max(f-o,h-l),c=c!==0?32767/c:0}return $s(r,a,e,o,l,c,0),a}function Wh(i,t,e,n,s){let r;if(s===rd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ec(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ec(a/n|0,i[a],i[a+1],r);return r&&rs(r,r.next)&&(js(r),r=r.next),r}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(rs(e,e.next)||Pe(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(i,t,e,n,s,r,a){if(!i)return;!a&&r&&jf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Xf(i,n,s,r):Wf(i)){t.push(l.i,i.i,c.i),js(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=qf(Ti(i),t),$s(i,t,e,n,s,r,2)):a===2&&Yf(i,t,e,n,s,r):$s(Ti(i),t,e,n,s,r,1);break}}}function Wf(i){const t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,f=Math.min(s,r,a),h=Math.min(o,l,c),d=Math.max(s,r,a),u=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=f&&p.x<=d&&p.y>=h&&p.y<=u&&zs(s,o,r,l,a,c,p.x,p.y)&&Pe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Xf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Pe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,f=s.y,h=r.y,d=a.y,u=Math.min(o,l,c),p=Math.min(f,h,d),v=Math.max(o,l,c),g=Math.max(f,h,d),m=Yo(u,p,t,e,n),x=Yo(v,g,t,e,n);let T=i.prevZ,S=i.nextZ;for(;T&&T.z>=m&&S&&S.z<=x;){if(T.x>=u&&T.x<=v&&T.y>=p&&T.y<=g&&T!==s&&T!==a&&zs(o,f,l,h,c,d,T.x,T.y)&&Pe(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=u&&S.x<=v&&S.y>=p&&S.y<=g&&S!==s&&S!==a&&zs(o,f,l,h,c,d,S.x,S.y)&&Pe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=m;){if(T.x>=u&&T.x<=v&&T.y>=p&&T.y<=g&&T!==s&&T!==a&&zs(o,f,l,h,c,d,T.x,T.y)&&Pe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=x;){if(S.x>=u&&S.x<=v&&S.y>=p&&S.y<=g&&S!==s&&S!==a&&zs(o,f,l,h,c,d,S.x,S.y)&&Pe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function qf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!rs(n,s)&&qh(n,e,e.next,s)&&Qs(n,s)&&Qs(s,n)&&(t.push(n.i,e.i,s.i),js(e),js(e.next),e=i=s),e=e.next}while(e!==i);return Ti(e)}function Yf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&nd(a,o)){let l=Yh(a,o);a=Ti(a,a.next),l=Ti(l,l.next),$s(a,t,e,n,s,r,0),$s(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Zf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Wh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ed(c))}s.sort(Jf);for(let r=0;r<s.length;r++)e=Kf(s[r],e);return e}function Jf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Kf(i,t){const e=$f(i,t);if(!e)return t;const n=Yh(e,i);return Ti(n,n.next),Ti(e,e.next)}function $f(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(rs(i,e))return e;do{if(rs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,a=e.x<e.next.x?e:e.next,h===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let f=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Xh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const h=Math.abs(s-e.y)/(n-e.x);Qs(e,i)&&(h<f||h===f&&(e.x>a.x||e.x===a.x&&Qf(a,e)))&&(a=e,f=h)}e=e.next}while(e!==o);return a}function Qf(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function jf(i,t,e,n){let s=i;do s.z===0&&(s.z=Yo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,td(s)}function td(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Yo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ed(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function zs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Xh(i,t,e,n,s,r,a,o)}function nd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!id(i,t)&&(Qs(i,t)&&Qs(t,i)&&sd(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||rs(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function rs(i,t){return i.x===t.x&&i.y===t.y}function qh(i,t,e,n){const s=Ur(Pe(i,t,e)),r=Ur(Pe(i,t,n)),a=Ur(Pe(e,n,i)),o=Ur(Pe(e,n,t));return!!(s!==r&&a!==o||s===0&&Nr(i,e,t)||r===0&&Nr(i,n,t)||a===0&&Nr(e,i,n)||o===0&&Nr(e,t,n))}function Nr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ur(i){return i>0?1:i<0?-1:0}function id(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qs(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function sd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yh(i,t){const e=Zo(i.i,i.x,i.y),n=Zo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ec(i,t,e,n){const s=Zo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ad{static triangulate(t,e,n=2){return Vf(t,e,n)}}class Ji{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ji.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];wc(t),Ac(n,t);let a=t.length;e.forEach(wc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ac(n,e[l]);const o=ad.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function wc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ac(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ga extends Le{constructor(t=new yl([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:od;let T,S=!1,A,E,_,b;if(m){T=m.getSpacedPoints(f),S=!0,d=!1;const st=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(f,st),E=new I,_=new I,b=new I}d||(g=0,u=0,p=0,v=0);const C=o.extractPoints(c);let R=C.shape;const D=C.holes;if(!Ji.isClockWise(R)){R=R.reverse();for(let st=0,pt=D.length;st<pt;st++){const ut=D[st];Ji.isClockWise(ut)&&(D[st]=ut.reverse())}}function W(st){const ut=10000000000000001e-36;let At=st[0];for(let St=1;St<=st.length;St++){const Zt=St%st.length,Nt=st[Zt],re=Nt.x-At.x,oe=Nt.y-At.y,pe=re*re+oe*oe,O=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(At.x),Math.abs(At.y)),Ue=ut*O*O;if(pe<=Ue){st.splice(Zt,1),St--;continue}At=Nt}}W(R),D.forEach(W);const N=D.length,V=R;for(let st=0;st<N;st++){const pt=D[st];R=R.concat(pt)}function Z(st,pt,ut){return pt||de("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(pt,ut)}const F=R.length;function K(st,pt,ut){let At,St,Zt;const Nt=st.x-pt.x,re=st.y-pt.y,oe=ut.x-st.x,pe=ut.y-st.y,O=Nt*Nt+re*re,Ue=Nt*pe-re*oe;if(Math.abs(Ue)>Number.EPSILON){const ie=Math.sqrt(O),Me=Math.sqrt(oe*oe+pe*pe),xt=pt.x-re/ie,Ie=pt.y+Nt/ie,kt=ut.x-pe/Me,Xt=ut.y+oe/Me,w=((kt-xt)*pe-(Xt-Ie)*oe)/(Nt*pe-re*oe);At=xt+Nt*w-st.x,St=Ie+re*w-st.y;const M=At*At+St*St;if(M<=2)return new J(At,St);Zt=Math.sqrt(M/2)}else{let ie=!1;Nt>Number.EPSILON?oe>Number.EPSILON&&(ie=!0):Nt<-Number.EPSILON?oe<-Number.EPSILON&&(ie=!0):Math.sign(re)===Math.sign(pe)&&(ie=!0),ie?(At=-re,St=Nt,Zt=Math.sqrt(O)):(At=Nt,St=re,Zt=Math.sqrt(O/2))}return new J(At/Zt,St/Zt)}const z=[];for(let st=0,pt=V.length,ut=pt-1,At=st+1;st<pt;st++,ut++,At++)ut===pt&&(ut=0),At===pt&&(At=0),z[st]=K(V[st],V[ut],V[At]);const Q=[];let tt,lt=z.concat();for(let st=0,pt=N;st<pt;st++){const ut=D[st];tt=[];for(let At=0,St=ut.length,Zt=St-1,Nt=At+1;At<St;At++,Zt++,Nt++)Zt===St&&(Zt=0),Nt===St&&(Nt=0),tt[At]=K(ut[At],ut[Zt],ut[Nt]);Q.push(tt),lt=lt.concat(tt)}let Ut;if(g===0)Ut=Ji.triangulateShape(V,D);else{const st=[],pt=[];for(let ut=0;ut<g;ut++){const At=ut/g,St=u*Math.cos(At*Math.PI/2),Zt=p*Math.sin(At*Math.PI/2)+v;for(let Nt=0,re=V.length;Nt<re;Nt++){const oe=Z(V[Nt],z[Nt],Zt);zt(oe.x,oe.y,-St),At===0&&st.push(oe)}for(let Nt=0,re=N;Nt<re;Nt++){const oe=D[Nt];tt=Q[Nt];const pe=[];for(let O=0,Ue=oe.length;O<Ue;O++){const ie=Z(oe[O],tt[O],Zt);zt(ie.x,ie.y,-St),At===0&&pe.push(ie)}At===0&&pt.push(pe)}}Ut=Ji.triangulateShape(st,pt)}const q=Ut.length,ht=p+v;for(let st=0;st<F;st++){const pt=d?Z(R[st],lt[st],ht):R[st];S?(_.copy(A.normals[0]).multiplyScalar(pt.x),E.copy(A.binormals[0]).multiplyScalar(pt.y),b.copy(T[0]).add(_).add(E),zt(b.x,b.y,b.z)):zt(pt.x,pt.y,0)}for(let st=1;st<=f;st++)for(let pt=0;pt<F;pt++){const ut=d?Z(R[pt],lt[pt],ht):R[pt];S?(_.copy(A.normals[st]).multiplyScalar(ut.x),E.copy(A.binormals[st]).multiplyScalar(ut.y),b.copy(T[st]).add(_).add(E),zt(b.x,b.y,b.z)):zt(ut.x,ut.y,h/f*st)}for(let st=g-1;st>=0;st--){const pt=st/g,ut=u*Math.cos(pt*Math.PI/2),At=p*Math.sin(pt*Math.PI/2)+v;for(let St=0,Zt=V.length;St<Zt;St++){const Nt=Z(V[St],z[St],At);zt(Nt.x,Nt.y,h+ut)}for(let St=0,Zt=D.length;St<Zt;St++){const Nt=D[St];tt=Q[St];for(let re=0,oe=Nt.length;re<oe;re++){const pe=Z(Nt[re],tt[re],At);S?zt(pe.x,pe.y+T[f-1].y,T[f-1].x+ut):zt(pe.x,pe.y,h+ut)}}}Rt(),Bt();function Rt(){const st=s.length/3;if(d){let pt=0,ut=F*pt;for(let At=0;At<q;At++){const St=Ut[At];be(St[2]+ut,St[1]+ut,St[0]+ut)}pt=f+g*2,ut=F*pt;for(let At=0;At<q;At++){const St=Ut[At];be(St[0]+ut,St[1]+ut,St[2]+ut)}}else{for(let pt=0;pt<q;pt++){const ut=Ut[pt];be(ut[2],ut[1],ut[0])}for(let pt=0;pt<q;pt++){const ut=Ut[pt];be(ut[0]+F*f,ut[1]+F*f,ut[2]+F*f)}}n.addGroup(st,s.length/3-st,0)}function Bt(){const st=s.length/3;let pt=0;bt(V,pt),pt+=V.length;for(let ut=0,At=D.length;ut<At;ut++){const St=D[ut];bt(St,pt),pt+=St.length}n.addGroup(st,s.length/3-st,1)}function bt(st,pt){let ut=st.length;for(;--ut>=0;){const At=ut;let St=ut-1;St<0&&(St=st.length-1);for(let Zt=0,Nt=f+g*2;Zt<Nt;Zt++){const re=F*Zt,oe=F*(Zt+1),pe=pt+At+re,O=pt+St+re,Ue=pt+St+oe,ie=pt+At+oe;Gt(pe,O,Ue,ie)}}}function zt(st,pt,ut){l.push(st),l.push(pt),l.push(ut)}function be(st,pt,ut){ee(st),ee(pt),ee(ut);const At=s.length/3,St=x.generateTopUV(n,s,At-3,At-2,At-1);se(St[0]),se(St[1]),se(St[2])}function Gt(st,pt,ut,At){ee(st),ee(pt),ee(At),ee(pt),ee(ut),ee(At);const St=s.length/3,Zt=x.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);se(Zt[0]),se(Zt[1]),se(Zt[3]),se(Zt[1]),se(Zt[2]),se(Zt[3])}function ee(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function se(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ld(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new qo[s.type]().fromJSON(s)),new ga(n,t.options)}}const od={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],f=t[s*3+1];return[new J(r,a),new J(o,l),new J(c,f)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],f=t[n*3+1],h=t[n*3+2],d=t[s*3],u=t[s*3+1],p=t[s*3+2],v=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-f)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-h),new J(d,1-p),new J(v,1-m)]:[new J(o,1-l),new J(f,1-h),new J(u,1-p),new J(g,1-m)]}};function ld(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class gi extends Le{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ne(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],f=1/e,h=new I,d=new J,u=new I,p=new I,v=new I;let g=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,u.x=m*1,u.y=-g,u.z=m*0,v.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:g=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,u.x=m*1,u.y=-g,u.z=m*0,p.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),l.push(u.x,u.y,u.z),v.copy(p)}for(let x=0;x<=e;x++){const T=n+x*f*s,S=Math.sin(T),A=Math.cos(T);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*S,h.y=t[E].y,h.z=t[E].x*A,a.push(h.x,h.y,h.z),d.x=x/e,d.y=E/(t.length-1),o.push(d.x,d.y);const _=l[3*E+0]*S,b=l[3*E+1],C=l[3*E+0]*A;c.push(_,b,C)}}for(let x=0;x<e;x++)for(let T=0;T<t.length-1;T++){const S=T+x*t.length,A=S,E=S+t.length,_=S+t.length+1,b=S+1;r.push(A,E,b),r.push(_,b,E)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.points,t.segments,t.phiStart,t.phiLength)}}class ir extends vl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ir(t.radius,t.detail)}}class bn extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,h=t/o,d=e/l,u=[],p=[],v=[],g=[];for(let m=0;m<f;m++){const x=m*d-a;for(let T=0;T<c;T++){const S=T*h-r;p.push(S,-x,0),v.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const T=x+c*m,S=x+c*(m+1),A=x+1+c*(m+1),E=x+1+c*m;u.push(T,S,E),u.push(S,A,E)}this.setIndex(u),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.width,t.height,t.widthSegments,t.heightSegments)}}class _a extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],f=[];let h=t;const d=(e-t)/s,u=new I,p=new J;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const m=r+g/n*a;u.x=h*Math.cos(m),u.y=h*Math.sin(m),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,f.push(p.x,p.y)}h+=d}for(let v=0;v<s;v++){const g=v*(n+1);for(let m=0;m<n;m++){const x=m+g,T=x,S=x+n+1,A=x+n+2,E=x+1;o.push(T,S,E),o.push(S,A,E)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class we extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new I,d=new I,u=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const x=[],T=m/n,S=a+T*o,A=t*Math.cos(S),E=Math.sqrt(t*t-A*A);let _=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const C=b/e,R=s+C*r;h.x=-E*Math.cos(R),h.y=A,h.z=E*Math.sin(R),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(C+_,1-T),x.push(c++)}f.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const T=f[m][x+1],S=f[m][x],A=f[m+1][x],E=f[m+1][x+1];(m!==0||a>0)&&u.push(T,S,E),(m!==n-1||l<Math.PI)&&u.push(S,A,E)}this.setIndex(u),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class De extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],f=[],h=[],d=new I,u=new I,p=new I;for(let v=0;v<=n;v++){const g=a+v/n*o;for(let m=0;m<=s;m++){const x=m/s*r;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),c.push(u.x,u.y,u.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),p.subVectors(u,d).normalize(),f.push(p.x,p.y,p.z),h.push(m/s),h.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){const m=(s+1)*v+g-1,x=(s+1)*(v-1)+g-1,T=(s+1)*(v-1)+g,S=(s+1)*v+g;l.push(m,x,S),l.push(x,T,S)}this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function as(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Rc(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Rc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function on(i){const t={};for(let e=0;e<i.length;e++){const n=as(i[e]);for(const s in n)t[s]=n[s]}return t}function Rc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const tr={clone:as,merge:on};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new J().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Jh extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ne extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ua extends Ne{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class fd extends oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=el,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dd extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pd extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xa extends Te{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class md extends xa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const to=new ve,Cc=new I,Pc=new I;class bl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){to.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(to,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Zs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(to)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fr=new I,Or=new fs,In=new I;class Kh extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fr,Or,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,Or,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fr,Or,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,Or,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ti=new I,Lc=new J,Ic=new J;class vn extends Kh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Ic),e.subVectors(Ic,Lc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ra*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class gd extends bl{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=ca*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class _d extends xa{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new gd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class xd extends bl{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class jr extends xa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Tl extends Kh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vd extends bl{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dc extends xa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new vd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Vi=-90,Wi=1;class Jo extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Vi,Wi,t,e);s.layers=this.layers,this.add(s);const r=new vn(Vi,Wi,t,e);r.layers=this.layers,this.add(r);const a=new vn(Vi,Wi,t,e);a.layers=this.layers,this.add(a);const o=new vn(Vi,Wi,t,e);o.layers=this.layers,this.add(o);const l=new vn(Vi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new vn(Vi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(h,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Md extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Sd{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=yd.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function yd(){this._document.hidden===!1&&this.reset()}class bd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Wt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Nc(i,t,e,n){const s=Td(n);switch(e){case vh:return i*t;case ul:return i*t/s.components*s.byteLength;case fl:return i*t/s.components*s.byteLength;case bi:return i*t*2/s.components*s.byteLength;case dl:return i*t*2/s.components*s.byteLength;case Mh:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case pl:return i*t*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:case xo:return Math.max(i,16)*Math.max(t,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(t,8)/2;case vo:case Mo:case yo:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case na:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zo:case ko:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ho:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ia:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Td(i){switch(i){case Mn:case mh:return{byteLength:1,components:1};case Ys:case gh:case dn:return{byteLength:2,components:1};case cl:case hl:return{byteLength:2,components:4};case Fn:case ll:case Pn:return{byteLength:4,components:1};case _h:case xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);function $h(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ed(i){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,f),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<h.length;u++){const p=h[d],v=h[u];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,h[d]=v)}h.length=d+1;for(let u=0,p=h.length;u<p;u++){const v=h[u];i.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
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
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,kd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,_p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,bp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tp=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wm=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dm=`#define DISTANCE
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
}`,Nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,km=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Vm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
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
}`,Zm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Jm=`#define STANDARD
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
}`,Km=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,$m=`#define TOON
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
}`,Qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,jm=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,i0=`uniform float rotation;
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
}`,s0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:wd,alphahash_pars_fragment:Ad,alphamap_fragment:Rd,alphamap_pars_fragment:Cd,alphatest_fragment:Pd,alphatest_pars_fragment:Ld,aomap_fragment:Id,aomap_pars_fragment:Dd,batching_pars_vertex:Nd,batching_vertex:Ud,begin_vertex:Fd,beginnormal_vertex:Od,bsdfs:Bd,iridescence_fragment:zd,bumpmap_pars_fragment:kd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:Zd,common:Jd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:$d,displacementmap_vertex:Qd,emissivemap_fragment:jd,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:ap,envmap_physical_pars_fragment:_p,envmap_vertex:op,fog_vertex:lp,fog_pars_vertex:cp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:fp,lightmap_pars_fragment:dp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:xp,lights_toon_pars_fragment:vp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Sp,lights_physical_fragment:yp,lights_physical_pars_fragment:bp,lights_fragment_begin:Tp,lights_fragment_maps:Ep,lights_fragment_end:wp,lightprobes_pars_fragment:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Lp,map_fragment:Ip,map_pars_fragment:Dp,map_particle_fragment:Np,map_particle_pars_fragment:Up,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Op,morphinstance_vertex:Bp,morphcolor_vertex:zp,morphnormal_vertex:kp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Hp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Qp,opaque_fragment:jp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:om,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:fm,skinning_vertex:dm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:_m,tonemapping_pars_fragment:xm,transmission_fragment:vm,transmission_pars_fragment:Mm,uv_pars_fragment:Sm,uv_pars_vertex:ym,uv_vertex:bm,worldpos_vertex:Tm,background_vert:Em,background_frag:wm,backgroundCube_vert:Am,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Lm,depth_frag:Im,distance_vert:Dm,distance_frag:Nm,equirect_vert:Um,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:Bm,meshbasic_vert:zm,meshbasic_frag:km,meshlambert_vert:Gm,meshlambert_frag:Hm,meshmatcap_vert:Vm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:Zm,meshphysical_vert:Jm,meshphysical_frag:Km,meshtoon_vert:$m,meshtoon_frag:Qm,points_vert:jm,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},Et={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Nn={basic:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:on([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:on([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Ht(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:on([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:on([Et.points,Et.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:on([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:on([Et.common,Et.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:on([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:on([Et.sprite,Et.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:on([Et.common,Et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:on([Et.lights,Et.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Nn.physical={uniforms:on([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Br={r:0,b:0,g:0},r0=new ve,Qh=new qt;Qh.set(-1,0,0,0,1,0,0,0,1);function a0(i,t,e,n,s,r){const a=new Ht(0);let o=s===!0?0:1,l,c,f=null,h=0,d=null;function u(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const S=x.backgroundBlurriness>0;T=t.get(T,S)}return T}function p(x){let T=!1;const S=u(x);S===null?g(a,o):S&&S.isColor&&(g(S,1),T=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,T){const S=u(T);S&&S.isCubeTexture?(c===void 0&&(c=new Ct(new Jt(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:as(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qh),c.material.toneMapped=he.getTransfer(S.colorSpace)!==ge,(f!==S||h!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ct(new bn(2,2),new fn({name:"BackgroundMaterial",uniforms:as(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=he.getTransfer(S.colorSpace)!==ge,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,T){x.getRGB(Br,Zh(i)),e.buffers.color.setClear(Br.r,Br.g,Br.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,T=1){a.set(x),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:p,addToRenderList:v,dispose:m}}function o0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(D,B,W,N,V){let Z=!1;const F=h(D,N,W,B);r!==F&&(r=F,c(r.object)),Z=u(D,N,W,V),Z&&p(D,N,W,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(D,B,W,N),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function f(D){return i.deleteVertexArray(D)}function h(D,B,W,N){const V=N.wireframe===!0;let Z=n[B.id];Z===void 0&&(Z={},n[B.id]=Z);const F=D.isInstancedMesh===!0?D.id:0;let K=Z[F];K===void 0&&(K={},Z[F]=K);let z=K[W.id];z===void 0&&(z={},K[W.id]=z);let Q=z[V];return Q===void 0&&(Q=d(l()),z[V]=Q),Q}function d(D){const B=[],W=[],N=[];for(let V=0;V<e;V++)B[V]=0,W[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:N,object:D,attributes:{},index:null}}function u(D,B,W,N){const V=r.attributes,Z=B.attributes;let F=0;const K=W.getAttributes();for(const z in K)if(K[z].location>=0){const tt=V[z];let lt=Z[z];if(lt===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor)),tt===void 0||tt.attribute!==lt||lt&&tt.data!==lt.data)return!0;F++}return r.attributesNum!==F||r.index!==N}function p(D,B,W,N){const V={},Z=B.attributes;let F=0;const K=W.getAttributes();for(const z in K)if(K[z].location>=0){let tt=Z[z];tt===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));const lt={};lt.attribute=tt,tt&&tt.data&&(lt.data=tt.data),V[z]=lt,F++}r.attributes=V,r.attributesNum=F,r.index=N}function v(){const D=r.newAttributes;for(let B=0,W=D.length;B<W;B++)D[B]=0}function g(D){m(D,0)}function m(D,B){const W=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;W[D]=1,N[D]===0&&(i.enableVertexAttribArray(D),N[D]=1),V[D]!==B&&(i.vertexAttribDivisor(D,B),V[D]=B)}function x(){const D=r.newAttributes,B=r.enabledAttributes;for(let W=0,N=B.length;W<N;W++)B[W]!==D[W]&&(i.disableVertexAttribArray(W),B[W]=0)}function T(D,B,W,N,V,Z,F){F===!0?i.vertexAttribIPointer(D,B,W,V,Z):i.vertexAttribPointer(D,B,W,N,V,Z)}function S(D,B,W,N){v();const V=N.attributes,Z=W.getAttributes(),F=B.defaultAttributeValues;for(const K in Z){const z=Z[K];if(z.location>=0){let Q=V[K];if(Q===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const tt=Q.normalized,lt=Q.itemSize,Ut=t.get(Q);if(Ut===void 0)continue;const q=Ut.buffer,ht=Ut.type,Rt=Ut.bytesPerElement,Bt=ht===i.INT||ht===i.UNSIGNED_INT||Q.gpuType===ll;if(Q.isInterleavedBufferAttribute){const bt=Q.data,zt=bt.isInterleavedBuffer===!0?bt.stride:bt.itemSize,be=Q.offset;if(bt.isInstancedInterleavedBuffer||bt.isInstancedBufferAttribute){for(let Gt=0;Gt<z.locationSize;Gt++)m(z.location+Gt,bt.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Gt=0;Gt<z.locationSize;Gt++)g(z.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Gt=0;Gt<z.locationSize;Gt++)T(z.location+Gt,lt/z.locationSize,ht,tt,zt*Rt,(be+lt/z.locationSize*Gt)*Rt,Bt)}else{if(Q.isInstancedBufferAttribute){for(let bt=0;bt<z.locationSize;bt++)m(z.location+bt,Q.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<z.locationSize;bt++)g(z.location+bt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let bt=0;bt<z.locationSize;bt++)T(z.location+bt,lt/z.locationSize,ht,tt,lt*Rt,lt/z.locationSize*bt*Rt,Bt)}}else if(F!==void 0){const tt=F[K];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(z.location,tt);break;case 3:i.vertexAttrib3fv(z.location,tt);break;case 4:i.vertexAttrib4fv(z.location,tt);break;default:i.vertexAttrib1fv(z.location,tt)}}}}x()}function A(){C();for(const D in n){const B=n[D];for(const W in B){const N=B[W];for(const V in N){const Z=N[V];for(const F in Z)f(Z[F].object),delete Z[F];delete N[V]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const B=n[D.id];for(const W in B){const N=B[W];for(const V in N){const Z=N[V];for(const F in Z)f(Z[F].object),delete Z[F];delete N[V]}}delete n[D.id]}function _(D){for(const B in n){const W=n[B];for(const N in W){const V=W[N];if(V[D.id]===void 0)continue;const Z=V[D.id];for(const F in Z)f(Z[F].object),delete Z[F];delete V[D.id]}}}function b(D){for(const B in n){const W=n[B],N=D.isInstancedMesh===!0?D.id:0,V=W[N];if(V!==void 0){for(const Z in V){const F=V[Z];for(const K in F)f(F[K].object),delete F[K];delete V[Z]}delete W[N],Object.keys(W).length===0&&delete n[B]}}}function C(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function l0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let d=0;for(let u=0;u<f;u++)d+=c[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function c0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Un&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const b=_===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Mn&&_!==Pn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(Wt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&Wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:S,maxSamples:A,samples:E}}function h0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ei,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const u=h.length!==0||d||n!==0||s;return s=d,n=h.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=f(h,d,0)},this.setState=function(h,d,u){const p=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?f(null):c();else{const x=r?0:n,T=x*4;let S=m.clippingState||null;l.value=S,S=f(p,d,T,u);for(let A=0;A!==T;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,d,u,p){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=u+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,S=u;T!==v;++T,S+=4)a.copy(h[T]).applyMatrix4(x,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}class El extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Oh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:_i});r.uniforms.tEquirect.value=e;const a=new Ct(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=un),new Jo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Uc=256,u0=3,f0=20,jh=256,tu=16,d0=3,p0=new I,m0=new Ht;class er{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Jo(1,10,null),this._boxMesh=new Ct(new Jt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=p0}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),f=this._getSourceTarget(!0);e>0&&(f.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(m0));const g=new Jo(n,s,f);return g.position.copy(o),g.update(l,t),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=p,t.background=v,e>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Uc,af(t))}_fromTexture(t,e){t.mapping===ns||t.mapping===qs?this._setSize(t.image.length===0?Uc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Fc(t,!1,!1),n=Math.log2(t)-u0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ns||t.mapping===qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Oc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=g0(),this._integrationMaterial=_0());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/tu);for(let a=0;a<=n;a++){const o=er.lodToRoughness(a,n);if(a>n-d0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(jh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=x0());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Fc(i,t,e){return new El(i,{minFilter:ii,generateMipmaps:t,type:dn,colorSpace:ra,depthBuffer:e})}function sr(i,t,e){return new fn({name:i,uniforms:t,vertexShader:jt.cube_vert,fragmentShader:e,side:nn,blending:_i,depthTest:!1,depthWrite:!1})}function g0(){return sr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${jh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _0(){return sr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:tu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function x0(){return sr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${f0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Oc(){return sr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Bc(){return sr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function v0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===ba||u===Ta)if(t.has(d)){const p=t.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const v=new El(p.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const u=d.mapping,p=u===ba||u===Ta,v=u===ns||u===qs;if(p||v){let g=e.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new er(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return p&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new er(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,u){return u===ba?d.mapping=ns:u===Ta&&(d.mapping=qs),d}function l(d){let u=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&u++;return u===p}function c(d){const u=d.target;u.removeEventListener("dispose",c);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(d){const u=d.target;u.removeEventListener("dispose",f);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function M0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qi("WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);const v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function f(p){const v=p.attributes;for(const g in v)t.update(v[g],i.ARRAY_BUFFER)}function h(p){const v=p.index,g=p.attributes.position;let m=0;if(g===void 0)return;const x=v!==null?v.array.length:g.array.length/3-1,T=g.count>=65535?Dh:Ih,S=new T(Math.ceil(x/3)*6,1),A=S.array;if(v!==null){const _=v.array;m=v.version;for(let b=0,C=0;b<x;b+=3){const R=_[b+0],D=_[b+1],B=_[b+2];A[C++]=R,A[C++]=D,A[C++]=D,A[C++]=B,A[C++]=B,A[C++]=R}}else{m=g.version;for(let _=0,b=0;_<x;_+=3){const C=_+0,R=_+1,D=_+2;A[b++]=C,A[b++]=R,A[b++]=R,A[b++]=D,A[b++]=D,A[b++]=C}}S.version=m;const E=r.get(p);E&&t.remove(E),r.set(p,S)}function d(p){const v=r.get(p);if(v){const g=p.index;g!==null&&v.version<g.version&&h(p)}else h(p);return r.get(p)}function u(){for(const p in s){const v=s[p].deref();v!==void 0&&l(v)}}return{get:c,update:f,getWireframeAttribute:d,dispose:u}}function y0(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),e.update(d,n,1)}function c(h,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,h*a,u),e.update(d,n,u))}function f(h,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,u);let v=0;for(let g=0;g<u;g++)v+=d[g];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function b0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:de("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function T0(i,t,e){const n=new WeakMap,s=new Ce;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let R=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var u=R;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let A=o.attributes.position.count*S,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const _=new Float32Array(A*E*4*h),b=new Rh(_,A,E,h);b.type=Pn,b.needsUpdate=!0;const C=S*4;for(let D=0;D<h;D++){const B=m[D],W=x[D],N=T[D],V=A*E*4*D;for(let Z=0;Z<B.count;Z++){const F=Z*C;p===!0&&(s.fromBufferAttribute(B,Z),_[V+F+0]=s.x,_[V+F+1]=s.y,_[V+F+2]=s.z,_[V+F+3]=0),v===!0&&(s.fromBufferAttribute(W,Z),_[V+F+4]=s.x,_[V+F+5]=s.y,_[V+F+6]=s.z,_[V+F+7]=0),g===!0&&(s.fromBufferAttribute(N,Z),_[V+F+8]=s.x,_[V+F+9]=s.y,_[V+F+10]=s.z,_[V+F+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:b,size:new J(A,E)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function E0(i,t,e,n,s){let r=new WeakMap;function a(c){const f=s.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return d}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}const w0={[nl]:"LINEAR_TONE_MAPPING",[il]:"REINHARD_TONE_MAPPING",[sl]:"CINEON_TONE_MAPPING",[da]:"ACES_FILMIC_TONE_MAPPING",[al]:"AGX_TONE_MAPPING",[ol]:"NEUTRAL_TONE_MAPPING",[rl]:"CUSTOM_TONE_MAPPING"};function A0(i,t,e,n,s,r){const a=new pn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const f=new Le;f.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ae([0,2,0,0,2,0],2));const h=new Jh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ct(f,h),u=new Tl(-1,1,1,-1,0,1);let p=null,v=null,g=!1,m,x=null,T=[],S=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let _=0;_<T.length;_++){const b=T[_];b.setSize&&b.setSize(A,E)}},this.setEffects=function(A){T=A,S=T.length>0&&T[0].isRenderPass===!0;const E=a.width,_=a.height;T.length>0&&o===null&&(o=new pn(E,_,{type:dn,depthBuffer:!1,stencilBuffer:!1}),l=new pn(E,_,{type:dn,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&T.some(C=>C.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new ss(E,_),r===!0&&(c.format=si,c.type=is)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let C=0;C<T.length;C++){const R=T[C];R.setSize&&R.setSize(E,_),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,E){if(g||A.toneMapping===Xn&&T.length===0)return!1;if(x=E,E!==null){const _=E.width,b=E.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Xn,!0},this.hasRenderPass=function(){return S},this.end=function(A,E){A.toneMapping=m,g=!0;let _=a,b=o;for(let C=0;C<T.length;C++){const R=T[C];R.enabled!==!1&&(R.render(A,b,_,E),R.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(p!==A.outputColorSpace||v!==A.toneMapping){p=A.outputColorSpace,v=A.toneMapping,h.defines={},he.getTransfer(p)===ge&&(h.defines.SRGB_TRANSFER="");const C=w0[v];C&&(h.defines[C]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(x),A.render(d,u),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),h.dispose()}}const eu=new sn,nu=new ss(1,1),iu=new Bh(1),su=new Rh,ru=new ff,au=new Oh,zc=[],kc=[],Gc=new Float32Array(16),Hc=new Float32Array(9),Vc=new Float32Array(4);function ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zc[s];if(r===void 0&&(r=new Float32Array(s),zc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function va(i,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function I0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;Vc.set(n),i.uniformMatrix2fv(this.addr,!1,Vc),Ge(e,n)}}function D0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),Ge(e,n)}}function N0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),Ge(e,n)}}function U0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function z0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function Ma(i){return i.version===0&&(i.compareFunction=bh,i.needsUpdate=!0),i}function V0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ma(nu):r=eu,e.setTexture2D(t||r,s)}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ru,s)}function X0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ma(iu):r=au,e.setTextureCube(t||r,s)}function q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||su,s)}function Y0(i){switch(i){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return L0;case 35674:return I0;case 35675:return D0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return z0;case 36294:return k0;case 36295:return G0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function Z0(i,t){i.uniform1fv(this.addr,t)}function J0(i,t){const e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function K0(i,t){const e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function $0(i,t){const e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Q0(i,t){const e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function j0(i,t){const e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tg(i,t){const e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function eg(i,t){i.uniform1iv(this.addr,t)}function ng(i,t){i.uniform2iv(this.addr,t)}function ig(i,t){i.uniform3iv(this.addr,t)}function sg(i,t){i.uniform4iv(this.addr,t)}function rg(i,t){i.uniform1uiv(this.addr,t)}function ag(i,t){i.uniform2uiv(this.addr,t)}function og(i,t){i.uniform3uiv(this.addr,t)}function lg(i,t){i.uniform4uiv(this.addr,t)}function cg(i,t,e){const n=this.cache,s=t.length,r=va(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ma(nu):a=eu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function hg(i,t,e){const n=this.cache,s=t.length,r=va(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ru,r[a])}function ug(i,t,e){const n=this.cache,s=t.length,r=va(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ma(iu):a=au;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function fg(i,t,e){const n=this.cache,s=t.length,r=va(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||su,r[a])}function dg(i){switch(i){case 5126:return Z0;case 35664:return J0;case 35665:return K0;case 35666:return $0;case 35674:return Q0;case 35675:return j0;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}class pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y0(e.type)}}class mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}}class gg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function Wc(i,t){i.seq.push(t),i.map[t.id]=t}function _g(i,t,e){const n=i.name,s=n.length;for(eo.lastIndex=0;;){const r=eo.exec(n),a=eo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wc(e,c===void 0?new pg(o,i,t):new mg(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new gg(o),Wc(e,h)),e=h}}}class ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);_g(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xg=37297;let vg=0;function Mg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const qc=new qt;function Sg(i){he._getMatrix(qc,he.workingColorSpace,i);const t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case aa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Mg(i.getShaderSource(t),o)}else return r}function yg(i,t){const e=Sg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const bg={[nl]:"Linear",[il]:"Reinhard",[sl]:"Cineon",[da]:"ACESFilmic",[al]:"AgX",[ol]:"Neutral",[rl]:"Custom"};function Tg(i,t){const e=bg[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new I;function Eg(){he.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function Ag(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ks(i){return i!==""}function Zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(i){return i.replace(Cg,Pg)}function Pg(i,t){const e=jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ko(e)}const Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(i){return i.replace(Lg,Ig)}function Ig(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $c(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Dg={[Yr]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function Ng(i){return Dg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ug={[qs]:"ENVMAP_MODE_REFRACTION"};function Fg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ug[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Og={[el]:"ENVMAP_BLENDING_MULTIPLY",[Vu]:"ENVMAP_BLENDING_MIX",[Wu]:"ENVMAP_BLENDING_ADD"};function Bg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Og[i.combine]||"ENVMAP_BLENDING_NONE"}function zg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ng(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Fg(e),h=Bg(e),d=wg(e),u=Ag(r),p=s.createProgram();let v,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ks).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ks).join(`
`),g.length>0&&(g+=`
`)):(v=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),g=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,yg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),a=Ko(a),a=Zc(a,e),a=Jc(a,e),o=Ko(o),o=Zc(o,e),o=Jc(o,e),a=Kc(a),o=Kc(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=m+v+a,T=m+g+o,S=Xc(s,s.VERTEX_SHADER,x),A=Xc(s,s.FRAGMENT_SHADER,T);s.attachShader(p,S),s.attachShader(p,A),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(R){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(p)||"",B=s.getShaderInfoLog(S)||"",W=s.getShaderInfoLog(A)||"",N=D.trim(),V=B.trim(),Z=W.trim();let F=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,A);else{const z=Yc(s,S,"vertex"),Q=Yc(s,A,"fragment");de("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+z+`
`+Q)}else N!==""?Wt("WebGLProgram: Program Info Log:",N):(V===""||Z==="")&&(K=!1);K&&(R.diagnostics={runnable:F,programLog:N,vertexShader:{log:V,prefix:v},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(S),s.deleteShader(A),_=new ta(s,p),b=Rg(s,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,xg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=A,this}let kg=0;class Gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hg(t),e.set(t,n)),n}}class Hg{constructor(t){this.id=kg++,this.code=t,this.usedTimes=0}}function Vg(i){return i===bi||i===na||i===ia}function Wg(i,t,e,n,s,r){const a=new Ch,o=new Gg,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,C,R,D,B){const W=R.fog,N=D.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=t.get(_.envMap||V,Z),K=d[_.type];let z=n.precision;_.precision!==null&&(z=n.getMaxPrecision(_.precision),z!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",z,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,tt=Q!==void 0?Q.length:0;let lt=0;N.morphAttributes.position!==void 0&&(lt=1),N.morphAttributes.normal!==void 0&&(lt=2),N.morphAttributes.color!==void 0&&(lt=3);let Ut,q,ht,Rt;if(K){const Tt=Nn[K];Ut=Tt.vertexShader,q=Tt.fragmentShader}else{Ut=_.vertexShader,q=_.fragmentShader;const Tt=o.getVertexShaderStage(_),xe=o.getFragmentShaderStage(_);o.update(_,Tt,xe),ht=Tt.id,Rt=xe.id}const Bt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),zt=D.isInstancedMesh===!0,be=D.isBatchedMesh===!0,Gt=!!_.map,ee=!!_.matcap,se=!!F,st=se&&F.isPMREMTexture===!0,pt=!!_.aoMap,ut=!!_.lightMap,At=!!_.bumpMap&&_.wireframe===!1,St=!!_.normalMap,Zt=!!_.displacementMap,Nt=!!_.emissiveMap,re=!!_.metalnessMap,oe=!!_.roughnessMap,pe=_.anisotropy>0,O=_.clearcoat>0,Ue=_.diffuseRoughness>0,ie=_.dispersion>0,Me=_.retroreflectivity>0,xt=_.iridescence>0,Ie=_.sheen>0,kt=_.transmission>0,Xt=pe&&!!_.anisotropyMap,w=O&&!!_.clearcoatMap,M=O&&!!_.clearcoatNormalMap,G=O&&!!_.clearcoatRoughnessMap,at=Ue&&!!_.diffuseRoughnessMap,it=xt&&!!_.iridescenceMap,ft=xt&&!!_.iridescenceThicknessMap,vt=Ie&&!!_.sheenColorMap,$=Ie&&!!_.sheenRoughnessMap,j=!!_.specularMap,mt=!!_.specularColorMap,L=!!_.specularIntensityMap,et=kt&&!!_.transmissionMap,Y=kt&&!!_.thicknessMap,gt=!!_.gradientMap,ct=!!_.alphaMap,dt=_.alphaTest>0,Ft=!!_.alphaHash,Qt=!!_.extensions;let ot=Xn;_.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(ot=i.toneMapping);const Ot=st?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,$t={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Ut,fragmentShader:q,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:Rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:z,batching:be,batchingColor:be&&D._colorsTexture!==null,instancing:zt,instancingColor:zt&&D.instanceColor!==null,instancingMorph:zt&&D.morphTexture!==null,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:ee,envMap:se,envMapMode:se&&F.mapping,envMapPMREM:st,envMapMaxLod:st?Ot.length-1:null,envMapSize:st?Ot[0].width:null,aoMap:pt,lightMap:ut,bumpMap:At,normalMap:St,displacementMap:Zt,emissiveMap:Nt,normalMapObjectSpace:St&&_.normalMapType===Yu,normalMapTangentSpace:St&&_.normalMapType===sa,packedNormalMap:St&&_.normalMapType===sa&&Vg(_.normalMap.format),metalnessMap:re,roughnessMap:oe,anisotropy:pe,anisotropyMap:Xt,clearcoat:O,clearcoatMap:w,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:Ue,diffuseRoughnessMap:at,dispersion:ie,retroreflection:Me,iridescence:xt,iridescenceMap:it,iridescenceThicknessMap:ft,sheen:Ie,sheenColorMap:vt,sheenRoughnessMap:$,specularMap:j,specularColorMap:mt,specularIntensityMap:L,transmission:kt,transmissionMap:et,thicknessMap:Y,gradientMap:gt,opaque:_.transparent===!1&&_.blending===Hs&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:dt,alphaHash:Ft,combine:_.combine,mapUv:Gt&&u(_.map.channel),aoMapUv:pt&&u(_.aoMap.channel),lightMapUv:ut&&u(_.lightMap.channel),bumpMapUv:At&&u(_.bumpMap.channel),normalMapUv:St&&u(_.normalMap.channel),displacementMapUv:Zt&&u(_.displacementMap.channel),emissiveMapUv:Nt&&u(_.emissiveMap.channel),metalnessMapUv:re&&u(_.metalnessMap.channel),roughnessMapUv:oe&&u(_.roughnessMap.channel),anisotropyMapUv:Xt&&u(_.anisotropyMap.channel),clearcoatMapUv:w&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:it&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(_.sheenRoughnessMap.channel),specularMapUv:j&&u(_.specularMap.channel),specularColorMapUv:mt&&u(_.specularColorMap.channel),specularIntensityMapUv:L&&u(_.specularIntensityMap.channel),transmissionMapUv:et&&u(_.transmissionMap.channel),thicknessMapUv:Y&&u(_.thicknessMap.channel),alphaMapUv:ct&&u(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(St||pe),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(Gt||ct),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&St===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:bt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:lt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===ge,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&he.getTransfer(_.emissiveMap.colorSpace)===ge,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&_.extensions.multiDraw===!0||be)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function v(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)b.push(C),b.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(g(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const b=d[_.type];let C;if(b){const R=Nn[b];C=tr.clone(R.uniforms)}else C=_.uniforms;return C}function T(_,b){let C=f.get(b);return C!==void 0?++C.usedTimes:(C=new zg(i,b,_,s),c.push(C),f.set(b,C)),C}function S(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:E}}function Xg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function qg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,p,v,g,m){let x=i[t];return x===void 0?(x={id:d.id,object:d,geometry:u,material:p,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[t]=x):(x.id=d.id,x.object=d,x.geometry=u,x.material=p,x.materialVariant=a(d),x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=g,x.group=m),t++,x}function l(d,u,p,v,g,m,x){x.reversedDepth===!0&&(g=-g);const T=o(d,u,p,v,g,m);p.transmission>0?n.push(T):p.transparent===!0?s.push(T):e.push(T)}function c(d,u,p,v,g,m){const x=o(d,u,p,v,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):e.unshift(x)}function f(d,u){e.length>1&&e.sort(d||qg),n.length>1&&n.sort(u||Qc),s.length>1&&s.sort(u||Qc)}function h(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function Yg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new jc,i.set(n,[a])):s>=r.length?(a=new jc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Ht};break;case"SpotLight":e={position:new I,direction:new I,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Jg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Kg=0;function $g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qg(i){const t=new Zg,e=Jg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ve,a=new ve;function o(c){let f=0,h=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let u=0,p=0,v=0,g=0,m=0,x=0,T=0,S=0,A=0,E=0,_=0,b=0,C=0,R=0;c.sort($g);for(let B=0,W=c.length;B<W;B++){const N=c[B],V=N.color,Z=N.intensity,F=N.distance;let K=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===bi?K=N.shadow.map.texture:K=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=V.r*Z,h+=V.g*Z,d+=V.b*Z;else if(N.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(N.sh.coefficients[z],Z);R++}else if(N.isSunLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=K;const lt=Q.getViewportCount();for(let Ut=0;Ut<lt;Ut++)n.sunShadowMatrix[v+Ut]=Q.getMatrix(Ut),n.sunShadowCascade[v+Ut]=Q._cascadeData[Ut];v+=lt,p++}n.sun[u]=z,u++}else if(N.isDirectionalLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[g]=tt,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=N.shadow.matrix,A++}n.directional[g]=z,g++}else if(N.isSpotLight){const z=t.get(N);z.position.setFromMatrixPosition(N.matrixWorld),z.color.copy(V).multiplyScalar(Z),z.distance=F,z.coneCos=Math.cos(N.angle),z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),z.decay=N.decay,n.spot[x]=z;const Q=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,Q.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[x]=Q.matrix,N.castShadow){const tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[x]=tt,n.spotShadowMap[x]=K,_++}x++}else if(N.isRectAreaLight){const z=t.get(N);z.color.copy(V).multiplyScalar(Z),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=z,T++}else if(N.isPointLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),z.distance=N.distance,z.decay=N.decay,N.castShadow){const Q=N.shadow,tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=N.shadow.matrix,E++}n.point[m]=z,m++}else if(N.isHemisphereLight){const z=t.get(N);z.skyColor.copy(N.color).multiplyScalar(Z),z.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[S]=z,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.sunLength!==u||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==T||D.hemiLength!==S||D.numSunShadows!==p||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==b||D.numLightProbes!==R)&&(n.sun.length=u,n.directional.length=g,n.spot.length=x,n.rectArea.length=T,n.point.length=m,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,D.sunLength=u,D.directionalLength=g,D.pointLength=m,D.spotLength=x,D.rectAreaLength=T,D.hemiLength=S,D.numSunShadows=p,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=b,D.numLightProbes=R,n.version=Kg++)}function l(c,f){let h=0,d=0,u=0,p=0,v=0,g=0;const m=f.matrixWorldInverse;for(let x=0,T=c.length;x<T;x++){const S=c[x];if(S.isSunLight){const A=n.sun[h];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),h++}else if(S.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(S.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const A=n.point[u];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const A=n.hemi[g];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function th(i){const t=new Qg(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):e.push(h)}function o(h){n.push(h)}function l(){t.setup(e),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function jg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new th(i),t.set(s,[o])):r>=a.length?(o=new th(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const t_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,n_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],i_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],eh=new ve,Ps=new I,no=new I;function s_(i,t,e){let n=new Js;const s=new J,r=new J,a=new Ce,o=new dd,l=new pd,c={},f=e.maxTextureSize,h={[Si]:nn,[nn]:Si,[en]:en},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:t_,fragmentShader:e_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const p=new Le;p.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ct(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let m=this.type;this.render=function(E,_,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Tu&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yr);const C=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(_i),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=m!==this.type;W&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=E.length;N<V;N++){const Z=E[N],F=Z.shadow;if(F===void 0){Wt("WebGLShadowMap:",Z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const K=F.getFrameExtents();s.multiply(K),r.copy(F.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/K.x),s.x=r.x*K.x,F.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/K.y),s.y=r.y*K.y,F.mapSize.y=r.y));const z=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=z,F.map===null||W===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Os){if(Z.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new pn(s.x,s.y,{format:bi,type:dn,minFilter:un,magFilter:un,generateMipmaps:!1}),F.map.texture.name=Z.name+".shadowMap",F.map.depthTexture=new ss(s.x,s.y,Pn),F.map.depthTexture.name=Z.name+".shadowMapDepth",F.map.depthTexture.format=ri,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ke,F.map.depthTexture.magFilter=Ke}else Z.isPointLight?(F.map=new El(s.x),F.map.depthTexture=new Bh(s.x,Fn)):(F.map=new pn(s.x,s.y),F.map.depthTexture=new ss(s.x,s.y,Fn)),F.map.depthTexture.name=Z.name+".shadowMap",F.map.depthTexture.format=ri,this.type===Yr?(F.map.depthTexture.compareFunction=z?yh:Sh,F.map.depthTexture.minFilter=un,F.map.depthTexture.magFilter=un):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ke,F.map.depthTexture.magFilter=Ke);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const Q=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();Z.isPointLight!==!0&&F.updateMatrices(Z,b);const tt=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let lt=0;lt<Q;lt++){const Ut=F.getCamera(lt);if(Z.isPointLight){const q=F.camera,ht=F.matrix,Rt=Z.distance||q.far;Rt!==q.far&&(q.far=Rt,q.updateProjectionMatrix()),Ps.setFromMatrixPosition(Z.matrixWorld),q.position.copy(Ps),no.copy(q.position),no.add(n_[lt]),q.up.copy(i_[lt]),q.lookAt(no),q.updateMatrixWorld(),ht.makeTranslation(-Ps.x,-Ps.y,-Ps.z),eh.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(eh,q.coordinateSystem,q.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(F.map),i.clear());const q=F.getViewport(lt);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),B.viewport(a)}n=F.getFrustum(lt),S(_,b,Ut,Z,tt,this.type)}F.isPointLightShadow!==!0&&this.type===Os&&x(F,b),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(C,R,D)};function x(E,_){const b=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new pn(s.x,s.y,{format:bi,type:dn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,b,d,v,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,b,u,v,null)}function T(E,_,b,C){let R=null;const D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const B=R.uuid,W=_.uuid;let N=c[B];N===void 0&&(N={},c[B]=N);let V=N[W];V===void 0&&(V=R.clone(),N[W]=V,_.addEventListener("dispose",A)),R=V}if(R.visible=_.visible,R.wireframe=_.wireframe,C===Os?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:h[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const B=i.properties.get(R);B.light=b}return R}function S(E,_,b,C,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Os)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const N=t.update(E),V=E.material;if(Array.isArray(V)){const Z=N.groups;for(let F=0,K=Z.length;F<K;F++){const z=Z[F],Q=V[z.materialIndex];if(Q&&Q.visible){const tt=T(E,Q,C,D);E.onBeforeShadow(i,E,_,b,N,tt,z),i.renderBufferDirect(b,null,N,tt,E,z),E.onAfterShadow(i,E,_,b,N,tt,z)}}}else if(V.visible){const Z=T(E,V,C,D);E.onBeforeShadow(i,E,_,b,N,Z,null),i.renderBufferDirect(b,null,N,Z,E,null),E.onAfterShadow(i,E,_,b,N,Z,null)}}const W=E.children;for(let N=0,V=W.length;N<V;N++)S(W[N],_,b,C,R,D)}function A(E){E.target.removeEventListener("dispose",A);for(const b in c){const C=c[b],R=E.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function r_(i,t){function e(){let L=!1;const et=new Ce;let Y=null;const gt=new Ce(0,0,0,0);return{setMask:function(ct){Y!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),Y=ct)},setLocked:function(ct){L=ct},setClear:function(ct,dt,Ft,Qt,ot){ot===!0&&(ct*=Qt,dt*=Qt,Ft*=Qt),et.set(ct,dt,Ft,Qt),gt.equals(et)===!1&&(i.clearColor(ct,dt,Ft,Qt),gt.copy(et))},reset:function(){L=!1,Y=null,gt.set(-1,0,0,0)}}}function n(){let L=!1,et=!1,Y=null,gt=null,ct=null;return{setReversed:function(dt){if(et!==dt){const Ft=t.get("EXT_clip_control");dt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),et=dt;const Qt=ct;ct=null,this.setClear(Qt)}},getReversed:function(){return et},setTest:function(dt){dt?bt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(dt){Y!==dt&&!L&&(i.depthMask(dt),Y=dt)},setFunc:function(dt){if(et&&(dt=sf[dt]),gt!==dt){switch(dt){case ao:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case lo:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case co:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case uo:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=dt}},setLocked:function(dt){L=dt},setClear:function(dt){ct!==dt&&(ct=dt,et&&(dt=1-dt),i.clearDepth(dt))},reset:function(){L=!1,Y=null,gt=null,ct=null,et=!1}}}function s(){let L=!1,et=null,Y=null,gt=null,ct=null,dt=null,Ft=null,Qt=null,ot=null;return{setTest:function(Ot){L||(Ot?bt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Ot){et!==Ot&&!L&&(i.stencilMask(Ot),et=Ot)},setFunc:function(Ot,$t,Tt){(Y!==Ot||gt!==$t||ct!==Tt)&&(i.stencilFunc(Ot,$t,Tt),Y=Ot,gt=$t,ct=Tt)},setOp:function(Ot,$t,Tt){(dt!==Ot||Ft!==$t||Qt!==Tt)&&(i.stencilOp(Ot,$t,Tt),dt=Ot,Ft=$t,Qt=Tt)},setLocked:function(Ot){L=Ot},setClear:function(Ot){ot!==Ot&&(i.clearStencil(Ot),ot=Ot)},reset:function(){L=!1,et=null,Y=null,gt=null,ct=null,dt=null,Ft=null,Qt=null,ot=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let f={},h={},d={},u=new WeakMap,p=[],v=null,g=!1,m=null,x=null,T=null,S=null,A=null,E=null,_=null,b=new Ht(0,0,0),C=0,R=!1,D=null,B=null,W=null,N=null,V=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,K=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=K>=2);let Q=null,tt={};const lt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),q=new Ce().fromArray(lt),ht=new Ce().fromArray(Ut);function Rt(L,et,Y,gt){const ct=new Uint8Array(4),dt=i.createTexture();i.bindTexture(L,dt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<Y;Ft++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(et+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return dt}const Bt={};Bt[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),bt(i.DEPTH_TEST),a.setFunc(Xs),At(!1),St(Yl),bt(i.CULL_FACE),pt(_i);function bt(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function zt(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function be(L,et){return d[L]!==et?(i.bindFramebuffer(L,et),d[L]=et,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=et),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=et),!0):!1}function Gt(L,et){let Y=p,gt=!1;if(L){Y=u.get(et),Y===void 0&&(Y=[],u.set(et,Y));const ct=L.textures;if(Y.length!==ct.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ft=ct.length;dt<Ft;dt++)Y[dt]=i.COLOR_ATTACHMENT0+dt;Y.length=ct.length,gt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,gt=!0);gt&&i.drawBuffers(Y)}function ee(L){return v!==L?(i.useProgram(L),v=L,!0):!1}const se={[Yi]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Au]:i.FUNC_REVERSE_SUBTRACT};se[Ru]=i.MIN,se[Cu]=i.MAX;const st={[Pu]:i.ZERO,[Lu]:i.ONE,[Iu]:i.SRC_COLOR,[fh]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Nu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[dh]:i.ONE_MINUS_SRC_ALPHA,[Ou]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[zu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(L,et,Y,gt,ct,dt,Ft,Qt,ot,Ot){if(L===_i){g===!0&&(zt(i.BLEND),g=!1);return}if(g===!1&&(bt(i.BLEND),g=!0),L!==Eu){if(L!==m||Ot!==R){if((x!==Yi||A!==Yi)&&(i.blendEquation(i.FUNC_ADD),x=Yi,A=Yi),Ot)switch(L){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xn:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:de("WebGLState: Invalid blending: ",L);break}else switch(L){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",L);break}T=null,S=null,E=null,_=null,b.set(0,0,0),C=0,m=L,R=Ot}return}ct=ct||et,dt=dt||Y,Ft=Ft||gt,(et!==x||ct!==A)&&(i.blendEquationSeparate(se[et],se[ct]),x=et,A=ct),(Y!==T||gt!==S||dt!==E||Ft!==_)&&(i.blendFuncSeparate(st[Y],st[gt],st[dt],st[Ft]),T=Y,S=gt,E=dt,_=Ft),(Qt.equals(b)===!1||ot!==C)&&(i.blendColor(Qt.r,Qt.g,Qt.b,ot),b.copy(Qt),C=ot),m=L,R=!1}function ut(L,et){L.side===en?zt(i.CULL_FACE):bt(i.CULL_FACE);let Y=L.side===nn;et&&(Y=!Y),At(Y),L.blending===Hs&&L.transparent===!1?pt(_i):pt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const gt=L.stencilWrite;o.setTest(gt),gt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(L){D!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),D=L)}function St(L){L!==yu?(bt(i.CULL_FACE),L!==B&&(L===Yl?i.cullFace(i.BACK):L===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),B=L}function Zt(L){L!==W&&(F&&i.lineWidth(L),W=L)}function Nt(L,et,Y){L?(bt(i.POLYGON_OFFSET_FILL),(N!==et||V!==Y)&&(N=et,V=Y,a.getReversed()&&(et=-et,Y=-Y),i.polygonOffset(et,Y))):zt(i.POLYGON_OFFSET_FILL)}function re(L){L?bt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function oe(L){L===void 0&&(L=i.TEXTURE0+Z-1),Q!==L&&(i.activeTexture(L),Q=L)}function pe(L,et,Y){Y===void 0&&(Q===null?Y=i.TEXTURE0+Z-1:Y=Q);let gt=tt[Y];gt===void 0&&(gt={type:void 0,texture:void 0},tt[Y]=gt),(gt.type!==L||gt.texture!==et)&&(Q!==Y&&(i.activeTexture(Y),Q=Y),i.bindTexture(L,et||Bt[L]),gt.type=L,gt.texture=et)}function O(){const L=tt[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ue(){try{i.compressedTexImage2D(...arguments)}catch(L){de("WebGLState:",L)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(L){de("WebGLState:",L)}}function Me(){try{i.texSubImage2D(...arguments)}catch(L){de("WebGLState:",L)}}function xt(){try{i.texSubImage3D(...arguments)}catch(L){de("WebGLState:",L)}}function Ie(){try{i.compressedTexSubImage2D(...arguments)}catch(L){de("WebGLState:",L)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){de("WebGLState:",L)}}function Xt(){try{i.texStorage2D(...arguments)}catch(L){de("WebGLState:",L)}}function w(){try{i.texStorage3D(...arguments)}catch(L){de("WebGLState:",L)}}function M(){try{i.texImage2D(...arguments)}catch(L){de("WebGLState:",L)}}function G(){try{i.texImage3D(...arguments)}catch(L){de("WebGLState:",L)}}function at(L){return h[L]!==void 0?h[L]:i.getParameter(L)}function it(L,et){h[L]!==et&&(i.pixelStorei(L,et),h[L]=et)}function ft(L){q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function vt(L){ht.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ht.copy(L))}function $(L,et){let Y=c.get(et);Y===void 0&&(Y=new WeakMap,c.set(et,Y));let gt=Y.get(L);gt===void 0&&(gt=i.getUniformBlockIndex(et,L.name),i.uniformBlockBinding(et,gt,gt),Y.set(L,gt))}function j(L,et,Y){const ct=c.get(et).get(L);l[ct]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,ct,Y),l[ct]=Y)}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},Q=null,tt={},d={},l={},u=new WeakMap,p=[],v=null,g=!1,m=null,x=null,T=null,S=null,A=null,E=null,_=null,b=new Ht(0,0,0),C=0,R=!1,D=null,B=null,W=null,N=null,V=null,q.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:bt,disable:zt,bindFramebuffer:be,drawBuffers:Gt,useProgram:ee,setBlending:pt,setMaterial:ut,setFlipSided:At,setCullFace:St,setLineWidth:Zt,setPolygonOffset:Nt,setScissorTest:re,activeTexture:oe,bindTexture:pe,unbindTexture:O,compressedTexImage2D:Ue,compressedTexImage3D:ie,texImage2D:M,texImage3D:G,pixelStorei:it,getParameter:at,updateUBOMapping:$,uniformBlockBinding:j,texStorage2D:Xt,texStorage3D:w,texSubImage2D:Me,texSubImage3D:xt,compressedTexSubImage2D:Ie,compressedTexSubImage3D:kt,scissor:ft,viewport:vt,reset:mt}}function a_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,f=new WeakMap,h=new Set;let d;const u=new WeakMap,p=new Set,v=new FinalizationRegistry(w=>p.delete(w));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,M){return g?new OffscreenCanvas(w,M):oa("canvas")}function x(w,M,G){let at=1;const it=Xt(w);if((it.width>G||it.height>G)&&(at=G/Math.max(it.width,it.height)),at<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ft=Math.floor(at*it.width),vt=Math.floor(at*it.height);d===void 0&&(d=m(ft,vt));const $=M?m(ft,vt):d;return $.width=ft,$.height=vt,$.getContext("2d").drawImage(w,0,0,ft,vt),Wt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ft+"x"+vt+")."),$}else return"data"in w&&Wt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function T(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,M,G,at,it,ft=!1){if(w!==null){if(i[w]!==void 0)return i[w];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let vt;at&&(vt=t.get("EXT_texture_norm16"),vt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8),G===i.UNSIGNED_SHORT&&vt&&($=vt.R16_EXT),G===i.SHORT&&vt&&($=vt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),M===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8),G===i.UNSIGNED_SHORT&&vt&&($=vt.RG16_EXT),G===i.SHORT&&vt&&($=vt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_SHORT&&vt&&($=vt.RGB16_EXT),G===i.SHORT&&vt&&($=vt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){const j=ft?aa:he.getTransfer(it);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=j===ge?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&vt&&($=vt.RGBA16_EXT),G===i.SHORT&&vt&&($=vt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(w,M){let G;return w?M===null||M===Fn||M===is?G=i.DEPTH24_STENCIL8:M===Pn?G=i.DEPTH32F_STENCIL8:M===Ys&&(G=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fn||M===is?G=i.DEPTH_COMPONENT24:M===Pn?G=i.DEPTH_COMPONENT32F:M===Ys&&(G=i.DEPTH_COMPONENT16),G}function b(w,M){return T(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ke&&w.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function C(w){const M=new WeakRef(w);n.get(w).__ref=M,p.add(M),v.register(w,M,M)}function R(w){const M=n.get(w).__ref;M!==void 0&&(p.delete(M),v.unregister(M))}function D(w){W(w.target)}function B(w){N(w.target)}function W(w){w.removeEventListener("dispose",D),R(w),Z(w),w.isVideoTexture&&f.delete(w),w.isHTMLTexture&&h.delete(w)}function N(w){w.removeEventListener("dispose",B),R(w),K(w)}function V(){for(const w of p){const M=w.deref();M!==void 0&&(M.isRenderTarget===!0?N(M):W(M))}p.clear(),h.clear()}function Z(w){const M=n.get(w);if(M.__webglInit===void 0)return;const G=w.source,at=u.get(G);if(at){const it=at[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&F(w),Object.keys(at).length===0&&u.delete(G)}n.remove(w)}function F(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const G=w.source,at=u.get(G);delete at[M.__cacheKey],a.memory.textures--}function K(w){const M=n.get(w);M.__depthDisposeCallback&&M.__depthDisposeCallback();const G=w.depthTexture;if(G&&G.renderTarget===w&&W(G),w.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let ft=0;ft<M.__webglFramebuffer[it].length;ft++)i.deleteFramebuffer(M.__webglFramebuffer[it][ft]);else i.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)i.deleteFramebuffer(M.__webglFramebuffer[it]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const at=w.textures;for(let it=0,ft=at.length;it<ft;it++){const vt=n.get(at[it]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(at[it])}n.remove(w)}let z=0;function Q(){z=0}function tt(){return z}function lt(w){z=w}function Ut(){const w=z;return w>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,w}function q(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.mipmapsAutoUpdate),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ht(w,M){const G=n.get(w);if(w.isVideoTexture&&Ie(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){const at=w.image;if(at===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(G,w,M);return}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function Rt(w,M){const G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){ut(G,w,M);return}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function Bt(w,M){const G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){ut(G,w,M);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function bt(w,M){const G=n.get(w);if(w.version>0&&G.__version!==w.version){At(G,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const zt={[yi]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},be={[Ke]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},Gt={[Ju]:i.NEVER,[bh]:i.ALWAYS,[Ku]:i.LESS,[Sh]:i.LEQUAL,[$u]:i.EQUAL,[yh]:i.GEQUAL,[Qu]:i.GREATER,[ju]:i.NOTEQUAL};function ee(w,M){if(M.type===Pn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===Ea||M.magFilter===cr||M.magFilter===ii||M.minFilter===un||M.minFilter===Ea||M.minFilter===cr||M.minFilter===ii)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,zt[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,zt[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,zt[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,be[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ke||M.minFilter!==cr&&M.minFilter!==ii||M.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function se(w,M){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",D),C(M));const at=M.source;let it=u.get(at);it===void 0&&(it={},u.set(at,it));const ft=q(M);if(ft!==w.__cacheKey){it[ft]===void 0&&(it[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[ft].usedTimes++;const vt=it[w.__cacheKey];vt!==void 0&&(it[w.__cacheKey].usedTimes--,vt.usedTimes===0&&F(M)),w.__cacheKey=ft,w.__webglTexture=it[ft].texture}return G}function st(w,M,G){return Math.floor(Math.floor(w/G)/M)}function pt(w,M,G,at){const ft=w.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,at,M.data);else{ft.sort((L,et)=>L.start-et.start);let vt=0;for(let L=1;L<ft.length;L++){const et=ft[vt],Y=ft[L],gt=et.start+et.count,ct=st(Y.start,M.width,4),dt=st(et.start,M.width,4);Y.start<=gt+1&&ct===dt&&st(Y.start+Y.count-1,M.width,4)===ct?et.count=Math.max(et.count,Y.start+Y.count-et.start):(++vt,ft[vt]=Y)}ft.length=vt+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let L=0,et=ft.length;L<et;L++){const Y=ft[L],gt=Math.floor(Y.start/4),ct=Math.ceil(Y.count/4),dt=gt%M.width,Ft=Math.floor(gt/M.width),Qt=ct,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ft),e.texSubImage2D(i.TEXTURE_2D,0,dt,Ft,Qt,ot,G,at,M.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function ut(w,M,G){let at=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(at=i.TEXTURE_3D);const it=se(w,M),ft=M.source;e.bindTexture(at,w.__webglTexture,i.TEXTURE0+G);const vt=n.get(ft);if(ft.version!==vt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ot=he.getPrimaries(he.workingColorSpace),Ot=M.colorSpace===ni?null:he.getPrimaries(M.colorSpace),$t=M.colorSpace===ni||ot===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let j=x(M.image,!1,s.maxTextureSize);j=kt(M,j);const mt=r.convert(M.format,M.colorSpace),L=r.convert(M.type);let et=E(M.internalFormat,mt,L,M.normalized,M.colorSpace,M.isVideoTexture);ee(at,M);let Y;const gt=M.mipmaps,ct=M.isVideoTexture!==!0,dt=vt.__version===void 0||it===!0,Ft=ft.dataReady,Qt=b(M,j);if(M.isDepthTexture)et=_(M.format===si,M.type),dt&&(ct?e.texStorage2D(i.TEXTURE_2D,1,et,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,et,j.width,j.height,0,mt,L,null));else if(M.isDataTexture)if(gt.length>0){ct&&dt&&e.texStorage2D(i.TEXTURE_2D,Qt,et,gt[0].width,gt[0].height);for(let ot=0,Ot=gt.length;ot<Ot;ot++)Y=gt[ot],ct?Ft&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Y.width,Y.height,mt,L,Y.data):e.texImage2D(i.TEXTURE_2D,ot,et,Y.width,Y.height,0,mt,L,Y.data);M.generateMipmaps=!1}else ct?(dt&&e.texStorage2D(i.TEXTURE_2D,Qt,et,j.width,j.height),Ft&&pt(M,j,mt,L)):e.texImage2D(i.TEXTURE_2D,0,et,j.width,j.height,0,mt,L,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ct&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,et,gt[0].width,gt[0].height,j.depth);for(let ot=0,Ot=gt.length;ot<Ot;ot++)if(Y=gt[ot],M.format!==Un)if(mt!==null)if(ct){if(Ft)if(M.layerUpdates.size>0){const $t=Nc(Y.width,Y.height,M.format,M.type);for(const Tt of M.layerUpdates){const xe=Y.data.subarray(Tt*$t/Y.data.BYTES_PER_ELEMENT,(Tt+1)*$t/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Tt,Y.width,Y.height,1,mt,xe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Y.width,Y.height,j.depth,mt,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,et,Y.width,Y.height,j.depth,0,Y.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Y.width,Y.height,j.depth,mt,L,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,et,Y.width,Y.height,j.depth,0,mt,L,Y.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ct&&dt&&e.texStorage2D(i.TEXTURE_2D,Qt,et,gt[0].width,gt[0].height);for(let ot=0,Ot=gt.length;ot<Ot;ot++)Y=gt[ot],M.format!==Un?mt!==null?ct?Ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Y.width,Y.height,mt,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,et,Y.width,Y.height,0,Y.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Ft&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Y.width,Y.height,mt,L,Y.data):e.texImage2D(i.TEXTURE_2D,ot,et,Y.width,Y.height,0,mt,L,Y.data)}else if(M.isDataArrayTexture)if(ct){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,et,j.width,j.height,j.depth),Ft)if(M.layerUpdates.size>0){const ot=Nc(j.width,j.height,M.format,M.type);for(const Ot of M.layerUpdates){const $t=j.data.subarray(Ot*ot/j.data.BYTES_PER_ELEMENT,(Ot+1)*ot/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ot,j.width,j.height,1,mt,L,$t)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,mt,L,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,et,j.width,j.height,j.depth,0,mt,L,j.data);else if(M.isData3DTexture)ct?(dt&&e.texStorage3D(i.TEXTURE_3D,Qt,et,j.width,j.height,j.depth),Ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,mt,L,j.data)):e.texImage3D(i.TEXTURE_3D,0,et,j.width,j.height,j.depth,0,mt,L,j.data);else if(M.isFramebufferTexture){if(dt)if(ct)e.texStorage2D(i.TEXTURE_2D,Qt,et,j.width,j.height);else{let ot=j.width,Ot=j.height;for(let $t=0;$t<Qt;$t++)e.texImage2D(i.TEXTURE_2D,$t,et,ot,Ot,0,mt,L,null),ot>>=1,Ot>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),j.parentNode!==ot){ot.appendChild(j),h.add(M),ot.onpaint=Ot=>{const $t=Ot.changedElements;for(const Tt of h)$t.includes(Tt.image)&&(Tt.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const $t=i.RGBA,Tt=i.RGBA,xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,$t,Tt,xe,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ct&&dt){const ot=Xt(gt[0]);e.texStorage2D(i.TEXTURE_2D,Qt,et,ot.width,ot.height)}for(let ot=0,Ot=gt.length;ot<Ot;ot++)Y=gt[ot],ct?Ft&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,mt,L,Y):e.texImage2D(i.TEXTURE_2D,ot,et,mt,L,Y);M.generateMipmaps=!1}else if(ct){if(dt){const ot=Xt(j);e.texStorage2D(i.TEXTURE_2D,Qt,et,ot.width,ot.height)}Ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,L,j)}else e.texImage2D(i.TEXTURE_2D,0,et,mt,L,j);T(M)&&M.mipmapsAutoUpdate===!0&&S(at),vt.__version=ft.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function At(w,M,G){if(M.image.length!==6)return;const at=se(w,M),it=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);const ft=n.get(it);if(it.version!==ft.__version||at===!0){e.activeTexture(i.TEXTURE0+G);const vt=he.getPrimaries(he.workingColorSpace),$=M.colorSpace===ni?null:he.getPrimaries(M.colorSpace),j=M.colorSpace===ni||vt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const mt=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,et=[];for(let Tt=0;Tt<6;Tt++)!mt&&!L?et[Tt]=x(M.image[Tt],!0,s.maxCubemapSize):et[Tt]=L?M.image[Tt].image:M.image[Tt],et[Tt]=kt(M,et[Tt]);const Y=et[0],gt=r.convert(M.format,M.colorSpace),ct=r.convert(M.type);let dt=E(M.internalFormat,gt,ct,M.normalized,M.colorSpace);const Ft=M.isVideoTexture!==!0,Qt=ft.__version===void 0||at===!0,ot=it.dataReady;let Ot=b(M,Y);ee(i.TEXTURE_CUBE_MAP,M);let $t;if(M.isDepthTexture){if(dt=_(M.format===si,M.type),Qt)if(Ft)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,dt,Y.width,Y.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,dt,Y.width,Y.height,0,gt,ct,null)}else if(mt){Ft&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,dt,Y.width,Y.height);for(let Tt=0;Tt<6;Tt++){$t=et[Tt].mipmaps;for(let xe=0;xe<$t.length;xe++){const He=$t[xe];M.format!==Un?gt!==null?Ft?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,xe,0,0,He.width,He.height,gt,He.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,xe,dt,He.width,He.height,0,He.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,xe,0,0,He.width,He.height,gt,ct,He.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,xe,dt,He.width,He.height,0,gt,ct,He.data)}}}else{if($t=M.mipmaps,Ft&&Qt){$t.length>0&&Ot++;const Tt=Xt(et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,dt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(L){Ft?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,et[Tt].width,et[Tt].height,gt,ct,et[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,dt,et[Tt].width,et[Tt].height,0,gt,ct,et[Tt].data);for(let xe=0;xe<$t.length;xe++){const Zn=$t[xe].image[Tt].image;Ft?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,xe+1,0,0,Zn.width,Zn.height,gt,ct,Zn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,xe+1,dt,Zn.width,Zn.height,0,gt,ct,Zn.data)}}else{Ft?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,gt,ct,et[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,dt,gt,ct,et[Tt]);for(let xe=0;xe<$t.length;xe++){const He=$t[xe];Ft?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,xe+1,0,0,gt,ct,He.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,xe+1,dt,gt,ct,He.image[Tt])}}}T(M)&&M.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),ft.__version=it.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function St(w,M,G,at,it,ft){const vt=r.convert(G.format,G.colorSpace),$=r.convert(G.type),j=E(G.internalFormat,vt,$,G.normalized,G.colorSpace),mt=n.get(M),L=n.get(G);if(L.__renderTarget=M,!mt.__hasExternalTextures){const et=Math.max(1,M.width>>ft),Y=Math.max(1,M.height>>ft);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,ft,j,et,Y,M.depth,0,vt,$,null):e.texImage2D(it,ft,j,et,Y,0,vt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,L.__webglTexture,0,Me(M)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,it,L.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(w,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const at=M.depthTexture,it=at&&at.isDepthTexture?at.type:null,ft=_(M.stencilBuffer,it),vt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(M),ft,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(M),ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,w)}else{const at=M.textures;for(let it=0;it<at.length;it++){const ft=at[it],vt=r.convert(ft.format,ft.colorSpace),$=r.convert(ft.type),j=E(ft.internalFormat,vt,$,ft.normalized,ft.colorSpace);xt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(M),j,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(M),j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(w,M,G){const at=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const it=n.get(M.depthTexture);it.__renderTarget=M;const ft=at?M.depthTexture.image[0]:M.depthTexture.image;(!it.__webglTexture||ft.width!==M.width||ft.height!==M.height)&&(ft.width=M.width,ft.height=M.height,M.depthTexture.needsUpdate=!0),at?bt(M.depthTexture,0):ht(M.depthTexture,0);const vt=it.__webglTexture,$=Me(M),j=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,mt=M.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===ri)xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,j,vt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,mt,j,vt,0);else if(M.depthTexture.format===si)xt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,j,vt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,mt,j,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(w){const M=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const at=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),at){const it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,at.removeEventListener("dispose",it)};at.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=at}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let at=0;at<6;at++)Nt(M.__webglFramebuffer[at],w,at);else w.texture.mipmaps.length>0?Nt(M.__webglFramebuffer[0],w,0):Nt(M.__webglFramebuffer,w,0);else if(G){M.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[at]),M.__webglDepthbuffer[at]===void 0)M.__webglDepthbuffer[at]=i.createRenderbuffer(),Zt(M.__webglDepthbuffer[at],w,!1);else{const it=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,ft)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Zt(M.__webglDepthbuffer,w,!1);else{const it=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(w,M,G){const at=n.get(w);M!==void 0&&St(at.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&re(w)}function pe(w){const M=w.texture,G=n.get(w),at=n.get(M);w.addEventListener("dispose",B),C(w);const it=w.textures,ft=w.isWebGLCubeRenderTarget===!0,vt=it.length>1;if(vt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=M.version,a.memory.textures++),ft){G.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps.length>0){G.__webglFramebuffer[$]=[];for(let j=0;j<M.mipmaps.length;j++)G.__webglFramebuffer[$][j]=i.createFramebuffer()}else G.__webglFramebuffer[$]=i.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)G.__webglFramebuffer[$]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(vt)for(let $=0,j=it.length;$<j;$++){const mt=n.get(it[$]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&xt(w)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let $=0;$<it.length;$++){const j=it[$];G.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[$]);const mt=r.convert(j.format,j.colorSpace),L=r.convert(j.type),et=E(j.internalFormat,mt,L,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),Y=Me(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,et,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,G.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Zt(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),ee(i.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)St(G.__webglFramebuffer[$][j],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else St(G.__webglFramebuffer[$],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);T(M)?S(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(vt){for(let $=0,j=it.length;$<j;$++){const mt=it[$],L=n.get(mt);let et=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(et=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,L.__webglTexture),ee(et,mt),St(G.__webglFramebuffer,w,mt,i.COLOR_ATTACHMENT0+$,et,0),T(mt)&&S(et)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,at.__webglTexture),ee($,M),M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)St(G.__webglFramebuffer[j],w,M,i.COLOR_ATTACHMENT0,$,j);else St(G.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,$,0);T(M)?S($):M.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&re(w)}function O(w){const M=w.textures;for(let G=0,at=M.length;G<at;G++){const it=M[G];if(T(it)&&it.mipmapsAutoUpdate===!0){const ft=A(w),vt=n.get(it).__webglTexture;e.bindTexture(ft,vt),S(ft),e.unbindTexture()}}}const Ue=[];function ie(w){if(w.samples>0){if(xt(w)===!1){const M=w.textures,G=w.width,at=w.height;let it=i.COLOR_BUFFER_BIT;const ft=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(w),$=M.length>1;if($)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[mt]);const L=n.get(M[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,G,at,0,0,G,at,it,i.NEAREST),l===!0&&(Ue.length=0,Ue.push(i.COLOR_ATTACHMENT0+mt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Ue.push(ft),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[mt]);const L=n.get(M[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,L,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Me(w){return Math.min(s.maxSamples,w.samples)}function xt(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(w){const M=a.render.frame;f.get(w)!==M&&(f.set(w,M),w.update())}function kt(w,M){const G=w.colorSpace,at=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==ra&&G!==ni&&(he.getTransfer(G)===ge?(at!==Un||it!==Mn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",G)),M}function Xt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Ut,this.resetTextureUnits=Q,this.getTextureUnits=tt,this.setTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=Rt,this.setTexture3D=Bt,this.setTextureCube=bt,this.rebindTextures=oe,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=St,this.useMultisampledRTT=xt,this.dispose=V}function o_(i,t){function e(n,s=ni){let r;const a=he.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mh)return i.BYTE;if(n===gh)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===ll)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===vh)return i.ALPHA;if(n===Mh)return i.RGB;if(n===Un)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===ul)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===pl)return i.RGBA_INTEGER;if(n===Zr||n===Jr||n===Kr||n===$r)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===Mo||n===So||n===yo||n===bo||n===na||n===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===Mo)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yo)return r.COMPRESSED_R11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===na)return r.COMPRESSED_RG11_EAC;if(n===To)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eo||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===ko||n===Go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ho||n===Vo||n===ia||n===Wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
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

}`;class h_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new zh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fn({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u_ extends wi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,u=null,p=null;const v=typeof XRWebGLBinding<"u",g=new h_,m={},x=e.getContextAttributes();let T=null,S=null;const A=[],E=[],_=new J;let b=null,C=null;const R=new vn;R.viewport=new Ce;const D=new vn;D.viewport=new Ce;const B=[R,D],W=new Md;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ht=A[q];return ht===void 0&&(ht=new Ua,A[q]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(q){let ht=A[q];return ht===void 0&&(ht=new Ua,A[q]=ht),ht.getGripSpace()},this.getHand=function(q){let ht=A[q];return ht===void 0&&(ht=new Ua,A[q]=ht),ht.getHandSpace()};function Z(q){const ht=E.indexOf(q.inputSource);if(ht===-1)return;const Rt=A[ht];Rt!==void 0&&(Rt.update(q.inputSource,q.frame,c||a),Rt.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",K);for(let q=0;q<A.length;q++){const ht=E[q];ht!==null&&(E[q]=null,A[q].disconnect(ht))}N=null,V=null,g.reset();for(const q in m)delete m[q];if(t.setRenderTarget(T),u=null,d=null,h=null,s=null,S=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),C!==null){const q=C.camera;q.fov=C.fov,q.zoom=C.zoom,q.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Bt=null,bt=null;x.depth&&(bt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=x.stencil?si:ri,Bt=x.stencil?is:Fn);const zt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new pn(d.textureWidth,d.textureHeight,{format:Un,type:Mn,depthTexture:new ss(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new pn(u.framebufferWidth,u.framebufferHeight,{format:Un,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(q){for(let ht=0;ht<q.removed.length;ht++){const Rt=q.removed[ht],Bt=E.indexOf(Rt);Bt>=0&&(E[Bt]=null,A[Bt].disconnect(Rt))}for(let ht=0;ht<q.added.length;ht++){const Rt=q.added[ht];let Bt=E.indexOf(Rt);if(Bt===-1){for(let zt=0;zt<A.length;zt++)if(zt>=E.length){E.push(Rt),Bt=zt;break}else if(E[zt]===null){E[zt]=Rt,Bt=zt;break}if(Bt===-1)break}const bt=A[Bt];bt&&bt.connect(Rt)}}function z(q,ht){ht===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ht.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ht=q.near,Rt=q.far;g.texture!==null&&(g.depthNear>0&&(ht=g.depthNear),g.depthFar>0&&(Rt=g.depthFar)),W.near=D.near=R.near=ht,W.far=D.far=R.far=Rt,(N!==W.near||V!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),N=W.near,V=W.far),W.layers.mask=q.layers.mask|6,R.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;const Bt=q.parent,bt=W.cameras;z(W,Bt);for(let zt=0;zt<bt.length;zt++)z(bt[zt],Bt);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&q.isPerspectiveCamera&&(C={camera:q,fov:q.fov,zoom:q.zoom}),Q(q,W,Bt)};function Q(q,ht,Rt){Rt===null?q.matrix.copy(ht.matrixWorld):(q.matrix.copy(Rt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ht.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ht.projectionMatrix),q.projectionMatrixInverse.copy(ht.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ca*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(q){return m[q]};let tt=null;function lt(q,ht){if(f=ht.getViewerPose(c||a),p=ht,f!==null){const Rt=f.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let Bt=!1;Rt.length!==W.cameras.length&&(W.cameras.length=0,Bt=!0);for(let Gt=0;Gt<Rt.length;Gt++){const ee=Rt[Gt];let se=null;if(u!==null)se=u.getViewport(ee);else{const pt=h.getViewSubImage(d,ee);se=pt.viewport,Gt===0&&(t.setRenderTargetTextures(S,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(S))}let st=B[Gt];st===void 0&&(st=new vn,st.layers.enable(Gt),st.viewport=new Ce,B[Gt]=st),st.matrix.fromArray(ee.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ee.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(se.x,se.y,se.width,se.height),Gt===0&&(W.matrix.copy(st.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Bt===!0&&W.cameras.push(st)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const Gt=h.getDepthInformation(Rt[0]);Gt&&Gt.isValid&&Gt.texture&&g.init(Gt,s.renderState)}if(bt&&bt.includes("camera-access")&&v){t.state.unbindTexture(),h=n.getBinding();for(let Gt=0;Gt<Rt.length;Gt++){const ee=Rt[Gt].camera;if(ee){let se=m[ee];se||(se=new zh,m[ee]=se);const st=h.getCameraImage(ee);se.sourceTexture=st}}}}for(let Rt=0;Rt<A.length;Rt++){const Bt=E[Rt],bt=A[Rt];Bt!==null&&bt!==void 0&&bt.update(Bt,ht,c||a)}tt&&tt(q,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),p=null}const Ut=new $h;Ut.setAnimationLoop(lt),this.setAnimationLoop=function(q){tt=q},this.dispose=function(){}}}const f_=new ve,ou=new qt;ou.set(-1,0,0,0,1,0,0,0,1);function d_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Zh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,T,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),f(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&u(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,x,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=t.get(m),T=x.envMap,S=x.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ou),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,x){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,t,e,n){let s={},r={};function a(x,T){const S=T.program;n.uniformBlockBinding(x,S,s[x.id])}function o(x,T){let S=s[x.id];S===void 0&&(p(x),S=l(x),s[x.id]=S,x.addEventListener("dispose",g));const A=T.program;n.updateUBOMapping(x,A);const E=t.render.frame;r[x.id]!==E&&(c(x),r[x.id]=E)}function l(x){const T=i.createBuffer(),S=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(x){const T=s[x.id],S=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,_=S.length;E<_;E++){const b=S[E];if(Array.isArray(b))for(let C=0,R=b.length;C<R;C++)f(b[C],E,C,A);else f(b,E,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,T,S,A){if(d(x,T,S,A)===!0){const E=x.__offset,_=x.value;if(Array.isArray(_)){let b=0;for(let C=0;C<_.length;C++){const R=_[C],D=v(R,!0);h(R,x.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,x.__data)}}function h(x,T,S){typeof x=="number"||typeof x=="boolean"?T[S]=x:x.isMatrix3?(T[S]=x.elements[0],T[S+1]=x.elements[1],T[S+2]=x.elements[2],T[S+3]=0,T[S+4]=x.elements[3],T[S+5]=x.elements[4],T[S+6]=x.elements[5],T[S+7]=0,T[S+8]=x.elements[6],T[S+9]=x.elements[7],T[S+10]=x.elements[8],T[S+11]=0):ArrayBuffer.isView(x)?T.set(x.subarray(0,T.length-S),S):x.toArray(T,S)}function d(x,T,S,A){const E=x.value,_=T+"_"+S;if(Array.isArray(E)){A[_]===void 0&&(A[_]=[]);const b=A[_];let C=!1;for(let R=0;R<E.length;R++)u(E[R],b,R)===!0&&(C=!0);return C}return u(E,A,_)}function u(x,T,S){if(T[S]===void 0)return typeof x=="number"||typeof x=="boolean"?T[S]=x:ArrayBuffer.isView(x)?T[S]=x.slice():T[S]=x.clone(),!0;{const A=T[S];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return T[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function p(x){const T=x.uniforms;let S=0;const A=16;for(let _=0,b=T.length;_<b;_++){const C=Array.isArray(T[_])?T[_]:[T[_]];for(let R=0,D=C.length;R<D;R++){const B=C[R],W=Array.isArray(B.value)?B.value:[B.value],N=Array.isArray(T[_])||Array.isArray(B.value);let V=S;for(let F=0,K=W.length;F<K;F++){const z=W[F],Q=v(z,N),tt=S%A,lt=tt%Q.boundary,Ut=tt+lt;S+=lt,Ut!==0&&A-Ut<Q.storage&&(S+=A-Ut),F===0&&(V=S),S+=Q.storage}const Z=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Z((S-V)/Float32Array.BYTES_PER_ELEMENT),B.__offset=V}}const E=S%A;return E>0&&(S+=A-E),x.__size=S,x.__cache={},this}function v(x,T){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=16,S.storage=48):x.isMatrix4?(S.boundary=16,S.storage=64):x.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",x),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(x){const T=x.target;T.removeEventListener("dispose",g),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:m}}const m_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function g_(){return Dn===null&&(Dn=new Fh(m_,16,16,bi,dn),Dn.name="DFG_LUT",Dn.minFilter=un,Dn.magFilter=un,Dn.wrapS=Wn,Dn.wrapT=Wn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class __{constructor(t={}){const{canvas:e=ef(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Mn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=u,g=new Set([pl,dl,fl]),m=new Set([Mn,Fn,Ys,is,cl,hl]),x=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let A=null,E=null;const _=[],b=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,B=null,W=null,N=null,V=null;this._outputColorSpace=qe;let Z=0,F=0,K=null,z=-1,Q=null;const tt=new Ce,lt=new Ce;let Ut=null;const q=new Ht(0);let ht=0,Rt=e.width,Bt=e.height,bt=1,zt=null,be=null;const Gt=new Ce(0,0,Rt,Bt),ee=new Ce(0,0,Rt,Bt);let se=!1;const st=new Js,pt=new xl;let ut=!1,At=!1;const St=new ve,Zt=new I,Nt=new Ce,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function pe(){return K===null?bt:1}let O=n;function Ue(y,U){return e.getContext(y,U)}let ie,Me,xt,Ie,kt,Xt,w,M,G,at,it,ft,vt,$,j,mt,L,et,Y,gt,ct,dt,Ft;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tl}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),O===null){const U="webgl2";if(O=Ue(U,y),O===null)throw Ue(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(y){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),de("WebGLRenderer: "+y.message),y}function Qt(){ie=new M0(O),ie.init(),ct=new o_(O,ie),Me=new c0(O,ie,t,ct),xt=new r_(O,ie),Me.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),W=O.createFramebuffer(),N=O.createFramebuffer(),V=O.createFramebuffer(),Ie=new b0(O),kt=new Xg,Xt=new a_(O,ie,xt,kt,Me,ct,Ie),w=new v0(R),M=new Ed(O),dt=new o0(O,M),G=new S0(O,M,Ie,dt),at=new E0(O,G,M,dt,Ie),et=new T0(O,Me,Xt),j=new h0(kt),it=new Wg(R,w,ie,Me,dt,j),ft=new d_(R,kt),vt=new Yg,$=new jg(ie),L=new a0(R,w,xt,at,p,l),mt=new s_(R,at,Me),Ft=new p_(O,Ie,Me,xt),Y=new l0(O,ie,Ie),gt=new y0(O,ie,Ie),Ie.programs=it.programs,R.capabilities=Me,R.extensions=ie,R.properties=kt,R.renderLists=vt,R.shadowMap=mt,R.state=xt,R.info=Ie}v!==Mn&&(C=new A0(v,e.width,e.height,o,s,r));const ot=new u_(R,O);this.xr=ot,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(y){y!==void 0&&(bt=y,this.setSize(Rt,Bt,!1))},this.getSize=function(y){return y.set(Rt,Bt)},this.setSize=function(y,U,X=!0){if(ot.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=y,Bt=U,e.width=Math.floor(y*bt),e.height=Math.floor(U*bt),X===!0&&(e.style.width=y+"px",e.style.height=U+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Rt*bt,Bt*bt).floor()},this.setDrawingBufferSize=function(y,U,X){Rt=y,Bt=U,bt=X,e.width=Math.floor(y*X),e.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(v===Mn){de("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(tt)},this.getViewport=function(y){return y.copy(Gt)},this.setViewport=function(y,U,X,k){y.isVector4?Gt.set(y.x,y.y,y.z,y.w):Gt.set(y,U,X,k),xt.viewport(tt.copy(Gt).multiplyScalar(pe()).round())},this.getScissor=function(y){return y.copy(ee)},this.setScissor=function(y,U,X,k){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,U,X,k),xt.scissor(lt.copy(ee).multiplyScalar(pe()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(y){xt.setScissorTest(se=y)},this.setOpaqueSort=function(y){zt=y},this.setTransparentSort=function(y){be=y},this.getClearColor=function(y){return y.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,X=!0){let k=0;if(y){let H=!1;if(K!==null){const Mt=K.texture.format;H=g.has(Mt)}if(H){const Mt=K.texture.type,Pt=m.has(Mt),_t=L.getClearColor(),wt=L.getClearAlpha(),Dt=_t.r,Yt=_t.g,le=_t.b;Pt?(x[0]=Dt,x[1]=Yt,x[2]=le,x[3]=wt,O.clearBufferuiv(O.COLOR,0,x)):(T[0]=Dt,T[1]=Yt,T[2]=le,T[3]=wt,O.clearBufferiv(O.COLOR,0,T))}else k|=O.COLOR_BUFFER_BIT}U&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),L.dispose(),vt.dispose(),$.dispose(),Xt.dispose(),kt.dispose(),w.dispose(),at.dispose(),G.dispose(),dt.dispose(),Ft.dispose(),it.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Ol),ot.removeEventListener("sessionend",Bl),li.stop()};function Ot(y){y.preventDefault(),la("WebGLRenderer: Context Lost."),D=!0}function $t(){la("WebGLRenderer: Context Restored."),D=!1;const y=Ie.autoReset,U=mt.enabled,X=mt.autoUpdate,k=mt.needsUpdate,H=mt.type;Qt(),Ie.autoReset=y,mt.enabled=U,mt.autoUpdate=X,mt.needsUpdate=k,mt.type=H}function Tt(y){de("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function xe(y){const U=y.target;U.removeEventListener("dispose",xe),He(U)}function He(y){Zn(y),kt.remove(y)}function Zn(y){const U=kt.get(y).programs;U!==void 0&&(U.forEach(function(X){it.releaseProgram(X)}),y.isShaderMaterial&&it.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,X,k,H,Mt){U===null&&(U=re);const Pt=H.isMesh&&H.matrixWorld.determinantAffine()<0,_t=vu(y,U,X,k,H);xt.setMaterial(k,Pt);let wt=X.index,Dt=1;if(k.wireframe===!0){if(wt=G.getWireframeAttribute(X),wt===void 0)return;Dt=2}const Yt=X.drawRange,le=X.attributes.position;let Lt=Yt.start*Dt,ce=(Yt.start+Yt.count)*Dt;Mt!==null&&(Lt=Math.max(Lt,Mt.start*Dt),ce=Math.min(ce,(Mt.start+Mt.count)*Dt)),wt!==null?(Lt=Math.max(Lt,0),ce=Math.min(ce,wt.count)):le!=null&&(Lt=Math.max(Lt,0),ce=Math.min(ce,le.count));const Fe=ce-Lt;if(Fe<0||Fe===1/0)return;dt.setup(H,k,_t,X,wt);let ye,Se=Y;if(wt!==null&&(ye=M.get(wt),Se=gt,Se.setIndex(ye)),H.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*pe()),Se.setMode(O.LINES)):Se.setMode(O.TRIANGLES);else if(H.isLine){let $e=k.linewidth;$e===void 0&&($e=1),xt.setLineWidth($e*pe()),H.isLineSegments?Se.setMode(O.LINES):H.isLineLoop?Se.setMode(O.LINE_LOOP):Se.setMode(O.LINE_STRIP)}else H.isPoints?Se.setMode(O.POINTS):H.isSprite&&Se.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))Se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const $e=H._multiDrawStarts,It=H._multiDrawCounts,rn=H._multiDrawCount,me=wt?M.get(wt).bytesPerElement:1,ci=kt.get(k).currentProgram.getUniforms();for(let Qe=0;Qe<rn;Qe++)ci.setValue(O,"_gl_DrawID",Qe),Se.render($e[Qe]/me,It[Qe])}else if(H.isInstancedMesh)Se.renderInstances(Lt,Fe,H.count);else if(X.isInstancedBufferGeometry){const $e=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,It=Math.min(X.instanceCount,$e);Se.renderInstances(Lt,Fe,It)}else Se.render(Lt,Fe)};function Fl(y,U,X,k){B!==null&&y.isNodeMaterial&&B.setObject(k,y),ut===!0&&j.setState(y,X,!1),y.transparent===!0&&y.side===en&&y.forceSinglePass===!1?(y.side=nn,y.needsUpdate=!0,Ms(y,U,k),y.side=Si,y.needsUpdate=!0,Ms(y,U,k),y.side=en):Ms(y,U,k)}this.compile=function(y,U,X=null){X===null&&(X=y),B!==null&&B.renderStart(y,U,X),E=$.get(X),E.init(U),b.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),y!==X&&y.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),At=this.localClippingEnabled,ut=j.init(this.clippingPlanes,At),ut===!0&&j.setGlobalState(this.clippingPlanes,U),B!==null&&mt.render(E.state.shadowsArray,X,U);const k=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Mt=H.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){const _t=Mt[Pt];Fl(_t,X,U,H),k.add(_t)}else Fl(Mt,X,U,H),k.add(Mt)}),E=b.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(y,U,X=null){const k=this.compile(y,U,X);return new Promise(H=>{function Mt(){if(k.forEach(function(Pt){const wt=kt.get(Pt).currentProgram;(wt===void 0||wt.isReady())&&k.delete(Pt)}),k.size===0){H(y);return}setTimeout(Mt,10)}ie.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Sa=null;function _u(y){Sa&&Sa(y)}function Ol(){li.stop()}function Bl(){li.start()}const li=new $h;li.setAnimationLoop(_u),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(y){Sa=y,ot.setAnimationLoop(y),y===null?li.stop():li.start()},ot.addEventListener("sessionstart",Ol),ot.addEventListener("sessionend",Bl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(y,U);const X=ot.enabled===!0&&ot.isPresenting===!0,k=C!==null&&(K===null||X)&&C.begin(R,K);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(U),U=ot.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,U,K),E=$.get(y,b.length),E.init(U),E.state.textureUnits=Xt.getTextureUnits(),b.push(E),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?pt.setFromArrayCamera(U):st.setFromProjectionMatrix(St,Ln,U.reversedDepth),At=this.localClippingEnabled,ut=j.init(this.clippingPlanes,At),A=vt.get(y,_.length),A.init(),_.push(A),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){const Pt=R.xr.getDepthSensingMesh();Pt!==null&&ya(Pt,U,-1/0,R.sortObjects)}ya(y,U,0,R.sortObjects),A.finish(),B!==null&&B.updateLights(E.state.lightsArray),R.sortObjects===!0&&A.sort(zt,be),oe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,oe&&L.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),ut===!0&&j.beginShadows();const H=E.state.shadowsArray;if(mt.render(H,y,U),ut===!0&&j.endShadows(),(k&&C.hasRenderPass())===!1){const Pt=A.opaque,_t=A.transmissive;if(E.setupLights(),U.isArrayCamera){const wt=U.cameras;if(_t.length>0)for(let Dt=0,Yt=wt.length;Dt<Yt;Dt++){const le=wt[Dt];kl(Pt,_t,y,le)}oe&&L.render(y);for(let Dt=0,Yt=wt.length;Dt<Yt;Dt++){const le=wt[Dt];zl(A,y,le,le.viewport)}}else _t.length>0&&kl(Pt,_t,y,U),oe&&L.render(y),zl(A,y,U)}K!==null&&F===0&&(Xt.updateMultisampleRenderTarget(K),Xt.updateRenderTargetMipmap(K)),k&&C.end(R),y.isScene===!0&&y.onAfterRender(R,y,U),dt.resetDefaultState(),z=-1,Q=null,b.pop(),b.length>0?(E=b[b.length-1],Xt.setTextureUnits(E.state.textureUnits),ut===!0&&j.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,B!==null&&B.renderEnd()};function ya(y,U,X,k){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){const Pt=U.isArrayCamera?pt:st;if(!y.frustumCulled||y.intersectsFrustum(Pt)){k&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(St);const _t=at.update(y),wt=y.material;wt.visible&&A.push(y,_t,wt,X,Nt.z,null,U)}}else if(y.isMesh||y.isLine||y.isPoints){const Pt=U.isArrayCamera?pt:st;if(!y.frustumCulled||y.intersectsFrustum(Pt)){const _t=at.update(y),wt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Nt.copy(_t.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(St)),Array.isArray(wt)){const Dt=_t.groups;for(let Yt=0,le=Dt.length;Yt<le;Yt++){const Lt=Dt[Yt],ce=wt[Lt.materialIndex];ce&&ce.visible&&A.push(y,_t,ce,X,Nt.z,Lt,U)}}else wt.visible&&A.push(y,_t,wt,X,Nt.z,null,U)}}}const Mt=y.children;for(let Pt=0,_t=Mt.length;Pt<_t;Pt++)ya(Mt[Pt],U,X,k)}function zl(y,U,X,k){const{opaque:H,transmissive:Mt,transparent:Pt}=y;E.setupLightsView(X),ut===!0&&j.setGlobalState(R.clippingPlanes,X),k&&xt.viewport(tt.copy(k)),H.length>0&&or(H,U,X),Mt.length>0&&or(Mt,U,X),Pt.length>0&&or(Pt,U,X),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function kl(y,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const Lt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new pn(1,1,{generateMipmaps:!0,type:Lt?dn:Mn,minFilter:ii,samples:Math.max(4,Me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}const Mt=E.state.transmissionRenderTarget[k.id],Pt=k.viewport||tt;Mt.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);const _t=R.getRenderTarget(),wt=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(q),ht=R.getClearAlpha(),ht<1&&R.setClearColor(16777215,.5),R.clear(),oe&&L.render(X);const Yt=R.toneMapping;R.toneMapping=Xn;const le=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),ut===!0&&j.setGlobalState(R.clippingPlanes,k),or(y,X,k),Xt.updateMultisampleRenderTarget(Mt),Xt.updateRenderTargetMipmap(Mt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ce=0,Fe=U.length;ce<Fe;ce++){const ye=U[ce],{object:Se,geometry:$e,material:It,group:rn}=ye;if(It.side===en&&Se.layers.test(k.layers)){const me=It.side;It.side=nn,It.needsUpdate=!0,Gl(Se,X,k,$e,It,rn),It.side=me,It.needsUpdate=!0,Lt=!0}}Lt===!0&&(Xt.updateMultisampleRenderTarget(Mt),Xt.updateRenderTargetMipmap(Mt))}R.setRenderTarget(_t,wt,Dt),R.setClearColor(q,ht),le!==void 0&&(k.viewport=le),R.toneMapping=Yt}function or(y,U,X){const k=U.isScene===!0?U.overrideMaterial:null;for(let H=0,Mt=y.length;H<Mt;H++){const Pt=y[H],{object:_t,geometry:wt,group:Dt}=Pt;let Yt=Pt.material;Yt.allowOverride===!0&&k!==null&&(Yt=k),_t.layers.test(X.layers)&&Gl(_t,U,X,wt,Yt,Dt)}}function Gl(y,U,X,k,H,Mt){B!==null&&H.isNodeMaterial&&B.setObject(y,H),y.onBeforeRender(R,U,X,k,H,Mt),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(R,U,X,k,y,Mt),H.transparent===!0&&H.side===en&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,R.renderBufferDirect(X,U,k,H,y,Mt),H.side=Si,H.needsUpdate=!0,R.renderBufferDirect(X,U,k,H,y,Mt),H.side=en):R.renderBufferDirect(X,U,k,H,y,Mt),y.onAfterRender(R,U,X,k,H,Mt)}function Hl(y){let U=0;for(const X of y)X.texture!==null&&U++;return U}function Ms(y,U,X){U.isScene!==!0&&(U=re);const k=kt.get(y),H=E.state.lights,Mt=E.state.shadowsArray,Pt=H.state.version,_t=it.getParameters(y,H.state,Mt,U,X,E.state.lightProbeGridArray),wt=it.getProgramCacheKey(_t);let Dt=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const Yt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=w.get(y.envMap||k.environment,Yt),k.envMapRotation=k.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",xe),Dt=new Map,k.programs=Dt,k.programVariants=new Map);let le=Dt.get(wt);if(le!==void 0){if(k.currentProgram===le&&k.lightsStateVersion===Pt)return Wl(y,_t),le}else _t.uniforms=it.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,X,_t),y.onBeforeCompile(_t,R),le=it.acquireProgram(_t,wt),Dt.set(wt,le),k.uniforms=_t.uniforms;const Lt=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Lt.clippingPlanes=j.uniform),Wl(y,_t),k.needsLights=Su(y),k.lightsStateVersion=Pt,k.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.sunLights.value=H.state.sun,Lt.sunLightShadows.value=H.state.sunShadow,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.sunShadowMatrix.value=H.state.sunShadowMatrix,Lt.sunShadowCascade.value=H.state.sunShadowCascade,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.numLightProbeGrids=Hl(E.state.lightProbeGridArray),k.currentProgram=le,k.uniformsList=null,le}function xu(y,U,X,k,H){const Mt=kt.get(y),Pt=Mt.currentProgram.id+","+k+","+H;let _t=Mt.programVariants.get(Pt);return _t===void 0?(_t=Ms(y,U,X),Mt.programVariants.set(Pt,_t)):(Mt.currentProgram=_t,Mt.uniformsList=null,Mt.outputColorSpace=k,Mt.toneMapping=H),_t}function Vl(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=ta.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Wl(y,U){const X=kt.get(y);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function vu(y,U,X,k,H){U.isScene!==!0&&(U=re),Xt.resetTextureUnits();const Mt=U.fog,Pt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,_t=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:he.workingColorSpace,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Dt=w.get(k.envMap||Pt,wt),Yt=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,le=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Lt=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,Fe=!!X.morphAttributes.color;let ye=Xn;k.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ye=R.toneMapping);const Se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$e=Se!==void 0?Se.length:0,It=kt.get(k),rn=E.state.lights;if(ut===!0&&(At===!0||y!==Q)){const Ee=y===Q&&k.id===z;j.setState(k,y,Ee)}let me=!1,ci=!1;k.version===It.__version?It.needsLights&&It.lightsStateVersion!==rn.state.version||H.isBatchedMesh&&It.batching===!1||!H.isBatchedMesh&&It.batching===!0||H.isBatchedMesh&&It.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&It.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&It.instancing===!1||!H.isInstancedMesh&&It.instancing===!0||H.isSkinnedMesh&&It.skinning===!1||!H.isSkinnedMesh&&It.skinning===!0||H.isInstancedMesh&&It.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&It.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&It.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&It.instancingMorph===!1&&H.morphTexture!==null||It.envMap!==Dt||k.fog===!0&&It.fog!==Mt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==j.numPlanes||It.numIntersection!==j.numIntersection)||It.vertexAlphas!==Yt||It.vertexTangents!==le||It.morphTargets!==Lt||It.morphNormals!==ce||It.morphColors!==Fe||It.morphTargetsCount!==$e||It.numLightProbeGrids!==Hl(E.state.lightProbeGridArray)?me=!0:(It.outputColorSpace!==_t||It.toneMapping!==ye)&&(ci=!0):(me=!0,It.__version=k.version);let Qe=It.currentProgram;(me===!0||ci===!0)&&(Qe=ci===!0?xu(k,U,H,_t,ye):Ms(k,U,H),B&&k.isNodeMaterial&&B.onUpdateProgram(k,Qe,It));let lr=!1,Jn=!1,hi=!1;const fe=Qe.getUniforms(),Ye=It.uniforms;if(xt.useProgram(Qe.program)&&(lr=!0,Jn=!0,hi=!0),k.id!==z&&(z=k.id,Jn=!0),lr||Q!==y){xt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),fe.setValue(O,"projectionMatrix",y.projectionMatrix),fe.setValue(O,"viewMatrix",y.matrixWorldInverse);const Ve=fe.map.cameraPosition;Ve!==void 0&&Ve.setValue(O,Zt.setFromMatrixPosition(y.matrixWorld)),Me.logarithmicDepthBuffer&&fe.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Jn=!0,hi=!0)}if(It.needsLights&&(rn.state.sunShadowMap.length>0&&fe.setValue(O,"sunShadowMap",rn.state.sunShadowMap,Xt),rn.state.directionalShadowMap.length>0&&fe.setValue(O,"directionalShadowMap",rn.state.directionalShadowMap,Xt),rn.state.spotShadowMap.length>0&&fe.setValue(O,"spotShadowMap",rn.state.spotShadowMap,Xt),rn.state.pointShadowMap.length>0&&fe.setValue(O,"pointShadowMap",rn.state.pointShadowMap,Xt)),H.isSkinnedMesh){fe.setOptional(O,H,"bindMatrix"),fe.setOptional(O,H,"bindMatrixInverse");const Ee=H.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),fe.setValue(O,"boneTexture",Ee.boneTexture,Xt))}H.isBatchedMesh&&(fe.setOptional(O,H,"batchingTexture"),fe.setValue(O,"batchingTexture",H._matricesTexture,Xt),fe.setOptional(O,H,"batchingIdTexture"),fe.setValue(O,"batchingIdTexture",H._indirectTexture,Xt),fe.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&fe.setValue(O,"batchingColorTexture",H._colorsTexture,Xt));const wn=X.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&et.update(H,X,Qe),(Jn||It.receiveShadow!==H.receiveShadow)&&(It.receiveShadow=H.receiveShadow,fe.setValue(O,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Ye.envMapIntensity.value=U.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=g_()),Jn){if(fe.setValue(O,"toneMappingExposure",R.toneMappingExposure),It.needsLights&&Mu(Ye,hi),Mt&&k.fog===!0&&ft.refreshFogUniforms(Ye,Mt),ft.refreshMaterialUniforms(Ye,k,bt,Bt,E.state.transmissionRenderTarget[y.id]),It.needsLights&&It.numLightProbeGrids>0){const Ee=S;let Ve=0;for(const Bn of E.state.lightProbeGridArray)Bn.texture!==null&&(Ee.textures[Ve]=Bn.texture,Ee.min[Ve]=Bn.boundingBox.min,Ee.max[Ve]=Bn.boundingBox.max,Ee.resolution[Ve]=Bn.resolution,Ve++);for(const Bn in Ee)Ee[Bn].length=Ve;Ye.probesSH.value=Ee.textures,Ye.probesMin.value=Ee.min,Ye.probesMax.value=Ee.max,Ye.probesResolution.value=Ee.resolution}ta.upload(O,Vl(It),Ye,Xt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ta.upload(O,Vl(It),Ye,Xt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(O,"center",H.center),fe.setValue(O,"modelViewMatrix",H.modelViewMatrix),fe.setValue(O,"normalMatrix",H.normalMatrix),fe.setValue(O,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const Ee=k.uniformsGroups;for(let Ve=0,Bn=Ee.length;Ve<Bn;Ve++){const ql=Ee[Ve];Ft.update(ql,Qe),Ft.bind(ql,Qe)}}return Qe}function Mu(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Su(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(y,U,X){const k=kt.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),kt.get(y.texture).__webglTexture=U,kt.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const X=kt.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,X=0){K=y,Z=U,F=X;let k=null,H=!1,Mt=!1;if(y){const _t=kt.get(y);if(_t.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(O.FRAMEBUFFER,_t.__webglFramebuffer),tt.copy(y.viewport),lt.copy(y.scissor),Ut=y.scissorTest,xt.viewport(tt),xt.scissor(lt),xt.setScissorTest(Ut),z=-1;return}else if(_t.__webglFramebuffer===void 0)Xt.setupRenderTarget(y);else if(_t.__hasExternalTextures)Xt.rebindTextures(y,kt.get(y.texture).__webglTexture,kt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Yt=y.depthTexture;if(_t.__boundDepthTexture!==Yt){if(Yt!==null&&kt.has(Yt)&&(y.width!==Yt.image.width||y.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(y)}}const wt=y.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(Mt=!0);const Dt=kt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?k=Dt[U][X]:k=Dt[U],H=!0):y.samples>0&&Xt.useMultisampledRTT(y)===!1?k=kt.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?k=Dt[X]:k=Dt,tt.copy(y.viewport),lt.copy(y.scissor),Ut=y.scissorTest}else tt.copy(Gt).multiplyScalar(bt).floor(),lt.copy(ee).multiplyScalar(bt).floor(),Ut=se;if(X!==0&&(k=W),xt.bindFramebuffer(O.FRAMEBUFFER,k)&&xt.drawBuffers(y,k),xt.viewport(tt),xt.scissor(lt),xt.setScissorTest(Ut),H){const _t=kt.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,X)}else if(Mt){const _t=U;for(let wt=0;wt<y.textures.length;wt++){const Dt=kt.get(y.textures[wt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+wt,Dt.__webglTexture,X,_t)}}else if(y!==null&&X!==0){const _t=kt.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_t.__webglTexture,X)}z=-1};function Xl(y){const U=kt.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=Me.textureFormatReadable(y.format),U.__typeReadable=Me.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,X,k,H,Mt,Pt,_t=0){if(!(y&&y.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=kt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt){xt.bindFramebuffer(O.FRAMEBUFFER,wt);try{const Dt=y.textures[_t],Yt=Dt.format,le=Dt.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_t);const Lt=Xl(Dt);if(Lt.__formatReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-k&&X>=0&&X<=y.height-H&&O.readPixels(U,X,k,H,ct.convert(Yt),ct.convert(le),Mt)}finally{const Dt=K!==null?kt.get(K).__webglFramebuffer:null;xt.bindFramebuffer(O.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,U,X,k,H,Mt,Pt,_t=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=kt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt)if(U>=0&&U<=y.width-k&&X>=0&&X<=y.height-H){xt.bindFramebuffer(O.FRAMEBUFFER,wt);const Dt=y.textures[_t],Yt=Dt.format,le=Dt.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+_t);const Lt=Xl(Dt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ce),O.bufferData(O.PIXEL_PACK_BUFFER,Mt.byteLength,O.STREAM_READ),O.readPixels(U,X,k,H,ct.convert(Yt),ct.convert(le),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Fe=K!==null?kt.get(K).__webglFramebuffer:null;xt.bindFramebuffer(O.FRAMEBUFFER,Fe);const ye=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await nf(O,ye,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ce),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Mt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ce),O.deleteSync(ye),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,X=0){const k=Math.pow(2,-X),H=Math.floor(y.image.width*k),Mt=Math.floor(y.image.height*k),Pt=U!==null?U.x:0,_t=U!==null?U.y:0;Xt.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Pt,_t,H,Mt),xt.unbindTexture()},this.copyTextureToTexture=function(y,U,X=null,k=null,H=0,Mt=0){let Pt,_t,wt,Dt,Yt,le,Lt,ce,Fe;const ye=y.isCompressedTexture?y.mipmaps[Mt]:y.image;if(X!==null)Pt=X.max.x-X.min.x,_t=X.max.y-X.min.y,wt=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Yt=X.min.y,le=X.isBox3?X.min.z:0;else{const fe=Math.pow(2,-H);Pt=Math.floor(ye.width*fe),_t=Math.floor(ye.height*fe),y.isDataArrayTexture?wt=ye.depth:y.isData3DTexture?wt=Math.floor(ye.depth*fe):wt=1,Dt=0,Yt=0,le=0}k!==null?(Lt=k.x,ce=k.y,Fe=k.z):(Lt=0,ce=0,Fe=0);const Se=ct.convert(U.format),$e=ct.convert(U.type);let It;U.isData3DTexture?(Xt.setTexture3D(U,0),It=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Xt.setTexture2DArray(U,0),It=O.TEXTURE_2D_ARRAY):(Xt.setTexture2D(U,0),It=O.TEXTURE_2D),xt.activeTexture(O.TEXTURE0),xt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),xt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),xt.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const rn=xt.getParameter(O.UNPACK_ROW_LENGTH),me=xt.getParameter(O.UNPACK_IMAGE_HEIGHT),ci=xt.getParameter(O.UNPACK_SKIP_PIXELS),Qe=xt.getParameter(O.UNPACK_SKIP_ROWS),lr=xt.getParameter(O.UNPACK_SKIP_IMAGES);xt.pixelStorei(O.UNPACK_ROW_LENGTH,ye.width),xt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ye.height),xt.pixelStorei(O.UNPACK_SKIP_PIXELS,Dt),xt.pixelStorei(O.UNPACK_SKIP_ROWS,Yt),xt.pixelStorei(O.UNPACK_SKIP_IMAGES,le);const Jn=y.isDataArrayTexture||y.isData3DTexture,hi=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const fe=kt.get(y),Ye=kt.get(U),wn=kt.get(fe.__renderTarget),Ee=kt.get(Ye.__renderTarget);xt.bindFramebuffer(O.READ_FRAMEBUFFER,wn.__webglFramebuffer),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ve=0;Ve<wt;Ve++)Jn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,kt.get(y).__webglTexture,H,le+Ve),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,kt.get(U).__webglTexture,Mt,Fe+Ve)),O.blitFramebuffer(Dt,Yt,Dt+Pt,Yt+_t,Lt,ce,Lt+Pt,ce+_t,O.DEPTH_BUFFER_BIT,O.NEAREST);xt.bindFramebuffer(O.READ_FRAMEBUFFER,null),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||kt.has(y)){const fe=kt.get(y),Ye=kt.get(U);xt.bindFramebuffer(O.READ_FRAMEBUFFER,N),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let wn=0;wn<wt;wn++)Jn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,fe.__webglTexture,H,le+wn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,H),hi?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.__webglTexture,Mt,Fe+wn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ye.__webglTexture,Mt),H!==0?O.blitFramebuffer(Dt,Yt,Dt+Pt,Yt+_t,Lt,ce,Lt+Pt,ce+_t,O.COLOR_BUFFER_BIT,O.NEAREST):hi?O.copyTexSubImage3D(It,Mt,Lt,ce,Fe+wn,Dt,Yt,Pt,_t):O.copyTexSubImage2D(It,Mt,Lt,ce,Dt,Yt,Pt,_t);xt.bindFramebuffer(O.READ_FRAMEBUFFER,null),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else hi?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(It,Mt,Lt,ce,Fe,Pt,_t,wt,Se,$e,ye.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(It,Mt,Lt,ce,Fe,Pt,_t,wt,Se,ye.data):O.texSubImage3D(It,Mt,Lt,ce,Fe,Pt,_t,wt,Se,$e,ye):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Mt,Lt,ce,Pt,_t,Se,$e,ye.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Mt,Lt,ce,ye.width,ye.height,Se,ye.data):O.texSubImage2D(O.TEXTURE_2D,Mt,Lt,ce,Pt,_t,Se,$e,ye);xt.pixelStorei(O.UNPACK_ROW_LENGTH,rn),xt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me),xt.pixelStorei(O.UNPACK_SKIP_PIXELS,ci),xt.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),xt.pixelStorei(O.UNPACK_SKIP_IMAGES,lr),Mt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(It),xt.unbindTexture()},this.initRenderTarget=function(y){kt.get(y).__webglFramebuffer===void 0&&Xt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Xt.setTextureCube(y,0):y.isData3DTexture?Xt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Xt.setTexture2DArray(y,0):Xt.setTexture2D(y,0),xt.unbindTexture()},this.resetState=function(){Z=0,F=0,K=null,xt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const ea={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const x_=new Tl(-1,1,1,-1,0,1);class v_ extends Le{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}}const M_=new v_;class wl{constructor(t){this._mesh=new Ct(M_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,x_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class S_ extends gs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof fn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=tr.clone(t.uniforms),this.material=new fn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new wl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class nh extends gs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class y_ extends gs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class b_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new S_(ea),this.copyPass.material.blending=_i,this.timer=new Sd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}nh!==void 0&&(a instanceof nh?n=!0:a instanceof y_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class T_ extends gs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ht}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const E_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class os extends gs{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new Ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(r,a,{type:dn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new pn(r,a,{type:dn,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new pn(r,a,{type:dn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=E_;this.highPassUniforms=tr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new J(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=tr.clone(ea.uniforms),this.blendMaterial=new fn({uniforms:this.copyUniforms,vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader,premultipliedAlpha:!0,blending:xn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ht,this._oldClearAlpha=1,this._basic=new Re,this._fsQuad=new wl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const s=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new fn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new fn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}os.BlurDirectionX=new J(1,0);os.BlurDirectionY=new J(0,1);const kr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class w_ extends gs{constructor(){super(),this.isOutputPass=!0,this.uniforms=tr.clone(kr.uniforms),this.material=new Jh({name:kr.name,uniforms:this.uniforms,vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader}),this._fsQuad=new wl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===il?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===da?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===al?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===rl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class A_ extends Lh{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new Jt;t.deleteAttribute("uv");const e=new Ne({side:nn}),n=new Ne,s=new jr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ct(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Qr(t,n,6),o=new Te;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Ct(t,Xi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Ct(t,Xi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const f=new Ct(t,Xi(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);const h=new Ct(t,Xi(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new Ct(t,Xi(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const u=new Ct(t,Xi(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Xi(i){return new fd({color:0,emissive:16777215,emissiveIntensity:i})}const Ls=new I;function yn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ls.copy(t),Ls[n]=0,Ls.normalize();const c=.5*a/(a+o),f=1-Ls.angleTo(i)/l;return Math.sign(Ls[e])===1?f*c:o/(a+o)+c+c*(1-f)}class En extends Jt{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new I,c=new I,f=new I(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,v=new I,g=.5/a;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(l.fromArray(h,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[m+0]=f.x*Math.sign(l.x)+c.x*r,h[m+1]=f.y*Math.sign(l.y)+c.y*r,h[m+2]=f.z*Math.sign(l.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/p)){case 0:v.set(1,0,0),u[x+0]=yn(v,c,"z","y",r,n),u[x+1]=1-yn(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),u[x+0]=1-yn(v,c,"z","y",r,n),u[x+1]=1-yn(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),u[x+0]=1-yn(v,c,"x","z",r,t),u[x+1]=yn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),u[x+0]=1-yn(v,c,"x","z",r,t),u[x+1]=1-yn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),u[x+0]=1-yn(v,c,"x","y",r,t),u[x+1]=1-yn(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),u[x+0]=yn(v,c,"x","y",r,t),u[x+1]=1-yn(v,c,"y","x",r,e);break}}static fromJSON(t){return new En(t.width,t.height,t.depth,t.segments,t.radius)}}const Ei={mika:{id:"mika",name:"MIKA",role:"THE DAYDREAM",look:"CANDY FLASH",color:"#ff4f9d",accent:"#ffe36e",skin:"#d78c66",blush:"#f35b82",hair:"#29101d",hairHi:"#ff7fba",eye:"#2a0b1b",top:"#ff4f9d",top2:"#fff1e8",bottom:"#fff1e8",boot:"#fff1e8",sole:"#2b0922",metal:"#ffd86f",title:"You are the moment.",style:"skirt",hairStyle:"buns"},jules:{id:"jules",name:"JULES",role:"THE WILDCARD",look:"AQUA HOUR",color:"#57f4ef",accent:"#d9ff64",skin:"#8d553b",blush:"#d66b68",hair:"#d8d1c8",hairHi:"#fff8ee",eye:"#21201e",top:"#46dfe0",top2:"#162438",bottom:"#172033",boot:"#17131f",sole:"#c8ff51",metal:"#d8e6e8",title:"Rules are a suggestion.",style:"pants",hairStyle:"wolf"},ren:{id:"ren",name:"REN",role:"THE NIGHTBLOOM",look:"NIGHTBLOOM",color:"#b78cff",accent:"#ff5ca8",skin:"#efc6ad",blush:"#e68595",hair:"#241a3e",hairHi:"#8d79c7",eye:"#171022",top:"#a986f2",top2:"#1a1029",bottom:"#23152f",boot:"#1a1024",sole:"#8d6bce",metal:"#e5d5ff",title:"The afterparty is inside.",style:"skirt",hairStyle:"bob"}},Gs=(i,t,e)=>Math.min(e,Math.max(t,i)),ih=(i,t,e)=>{const n=Gs((e-i)/(t-i),0,1);return n*n*(3-2*n)};function Be(i,t=.56,e=.02,n={}){return new Ne({color:i,roughness:t,metalness:e,...n})}function Gr(i,t=.22,e=.9){return new ua({color:i,roughness:t,metalness:.12,clearcoat:e,clearcoatRoughness:.22})}function Is(i,t,e=[0,0,0],n=[0,0,0],s=[1,1,1]){return t.position.set(...e),t.rotation.set(...n),t.scale.set(...s),i.add(t),t}function yt(i,t,e,n=[0,0,0],s=[0,0,0],r=[1,1,1]){const a=new Ct(t,e);return a.position.set(...n),a.rotation.set(...s),a.scale.set(...r),i.add(a),a}function Hr(i,t,e,n=10){return new Ct(new Ks(i,t,5,n),e)}function _n(i,t){return i.scale.set(...t),i}function sh(i){return new Ne({color:i,roughness:.62,metalness:.04})}function Ds(i,t,e=.06){const n=new yl,s=5;for(let a=0;a<s*2;a++){const o=a/(s*2)*Math.PI*2-Math.PI/2,l=a%2===0?i:i*.45,c=Math.cos(o)*l,f=Math.sin(o)*l;a===0?n.moveTo(c,f):n.lineTo(c,f)}n.closePath();const r=new ga(n,{depth:e,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:e*.22,bevelThickness:e*.22});return r.center(),new Ct(r,t)}class lu{constructor(t="mika",{scale:e=1}={}){this.look=Ei[t]||Ei.mika,this.root=new Ae,this.root.scale.setScalar(e),this.time=Math.random()*10,this.walkPhase=Math.random()*Math.PI*2,this.poseTimer=0,this.hitTimer=0,this.jumpBlend=0,this.menuBlend=1,this.anim={hipsY:1.3,hipsRotX:0,hipsRotY:0,hipsRotZ:0,torsoRotX:0,torsoRotY:0,torsoRotZ:0,headRotX:0,headRotY:0,headRotZ:0,armLX:0,armLY:0,armLZ:0,armRX:0,armRY:0,armRZ:0,elbowLX:0,elbowLZ:0,elbowRX:0,elbowRZ:0,legLX:0,legLZ:0,legRX:0,legRZ:0,kneeLX:0,kneeRX:0,hairRot:0},this.build()}build(){const t=this.look,e=Be(t.skin,.68,.01),n=Be(t.skin,.8,0),s=Be(t.top,.5,.04),r=Gr(t.top,.27),a=Be(t.top2,.62,.02),o=Be(t.bottom,.58,.02),l=Gr(t.boot,.26,.75),c=Be(t.sole,.48,.1),f=Gr(t.metal,.16,1),h=sh(t.hair),d=sh(t.hairHi),u=Be(t.eye,.3,.1),p=new Re({color:"#fff8f2"}),v=Be("#7c173d",.35,0),g=new Re({color:t.blush,transparent:!0,opacity:.35,depthWrite:!1}),m=new Re({color:"#060008",transparent:!0,opacity:.34,depthWrite:!1}),x=this.root,T=new Ae;x.add(T),this.body=T;const S=new Ae;S.position.y=1.3,T.add(S),this.rig={hips:S};const A=yt(x,new xi(.37,30),m,[0,.012,0],[-Math.PI/2,0,0],[1,1,1]);A.renderOrder=-1;const E=new Ae;S.add(E),this.rig.torso=E;const _=new gi([new J(.235,0),new J(.255,.07),new J(.22,.23),new J(.255,.43),new J(.305,.58),new J(.285,.68),new J(.115,.73)],20),b=yt(E,_,a,[0,0,0],[0,0,0],[1,1,.74]);if(b.castShadow=!0,yt(E,new De(.225,.018,6,20),f,[0,.1,0],[Math.PI/2,0,0],[1,.75,1]),t.style==="pants"){const F=new gi([new J(.24,.24),new J(.245,.4),new J(.27,.58),new J(.15,.7)],16);yt(E,F,Be(t.top2,.7,0),[0,0,0],[0,0,0],[1,1,.76]);for(const K of[-1,1])yt(E,new Jt(.095,.6,.045),new Ne({color:t.top,roughness:.7,transparent:!0,opacity:.42,depthWrite:!1,side:en}),[K*.265,.46,.105],[0,0,K*-.08]),yt(E,new Jt(.07,.06,.03),Be(t.accent,.4,.1),[K*.265,.72,.115]);yt(E,new Jt(.012,.29,.012),f,[0,.34,.225]);for(const[K,z]of[[.16,.62],[.12,.57]])yt(E,new De(K,.011,5,22,Math.PI*.95),f,[0,z,.06],[Math.PI/2,0,0],[1,.72,1]);Is(E,Ds(.042,f,.025),[0,.59,.24])}else if(t.id==="ren"){const F=new gi([new J(.235,.14),new J(.25,.36),new J(.285,.57),new J(.15,.7)],16);yt(E,F,Be("#f1e8f5",.74,0),[0,0,0],[0,0,0],[1,1,.74]);const K=new gi([new J(.245,.17),new J(.25,.3),new J(.27,.47),new J(.29,.6),new J(.2,.66)],18,Math.PI*.08,Math.PI*.84);yt(E,K,r,[0,0,0],[0,0,0],[1,1,.8]);for(const z of[-.12,-.06,.06,.12])yt(E,new Jt(.008,.4,.012),f,[z,.38,.205],[0,0,z*.6]);for(let z=0;z<3;z++)yt(E,new Jt(.17-z*.025,.008,.01),f,[0,.25+z*.11,.23],[0,0,.15]),yt(E,new Jt(.17-z*.025,.008,.01),f,[0,.25+z*.11,.23],[0,0,-.15]);for(const z of[-1,1])for(let Q=0;Q<3;Q++)yt(E,new we(.085,10,8),Be("#f1e8f5",.7,0),[z*(.22+Q*.035),.6+Q*.03,-.03],[0,0,z*Q*.4],[1,.55,.9])}else{const F=new gi([new J(.255,.16),new J(.27,.28),new J(.29,.48),new J(.318,.62),new J(.3,.69)],20);yt(E,F,s,[0,0,0],[0,0,0],[1,1,.79]),yt(E,new De(.266,.022,7,22),a,[0,.17,0],[Math.PI/2,0,0],[1,.78,1]),yt(E,new Jt(.012,.5,.012),f,[0,.4,.232]),Is(E,Ds(.048,f,.02),[.16,.43,.235]),yt(E,new xi(.053,18),a,[.16,.43,.247]),Is(E,Ds(.038,s,.015),[.16,.43,.255]);for(const K of[-1,1])yt(E,new Jt(.17,.07,.035),a,[K*.11,.69,.04],[.05,0,K*.34])}yt(E,new hn(.075,.086,.16,12),e,[0,.76,0]),yt(E,new De(.085,.012,5,18),f,[0,.79,0],[Math.PI/2,0,0],[1,.82,1]),t.id==="mika"&&yt(E,new ir(.028,0),f,[0,.765,.093],[0,0,0]);const C=new Ae;C.position.y=.96,E.add(C),this.rig.head=C;const R=_n(yt(C,new we(.3,22,18),n,[0,0,0]),[.9,1.02,.93]);R.castShadow=!0;for(const F of[-1,1])_n(yt(C,new we(.07,12,10),n,[F*.27,-.005,0]),[.5,1,.5]);for(const F of[-1,1])_n(yt(C,new we(.06,14,12),u,[F*.105,.035,.253]),[1.02,.8,.28]),_n(yt(C,new we(.016,9,8),p,[F*.09,.035+.021,.272]),[1,1,.5]),yt(C,new Jt(.075,.011,.008),u,[F*.108,.035+.052,.267],[0,0,F*.08]),yt(C,new Jt(.068,.015,.01),h,[F*.105,.035+.105,.252],[0,0,F*-.12]),yt(C,new xi(.056,15),g,[F*.177,-.04,.242],[0,F*.24,0],[1,.55,1]);yt(C,new ts(.032,.055,8),n,[0,-.012,.282],[Math.PI/2,0,0],[1,1,.72]),_n(yt(C,new we(.05,14,8),v,[0,-.105,.269]),[1.15,.38,.24]),yt(C,new Jt(.018,.006,.008),Be("#3b0c20",.4),[0,-.091,.286]),yt(C,new we(.012,8,6),p,[.026,.035,.281]).material.transparent=!0;for(const F of[-1,1])t.id==="jules"?yt(C,new De(.055,.009,5,18),f,[F*.295,-.075,0],[0,Math.PI/2,0]):Is(C,Ds(.055,f,.018),[F*.295,-.1,0],[0,Math.PI/2,0]);this.buildHair(C,h,d,f);const D=F=>{const K=new Ae;K.position.set(F*.32,.6,0),E.add(K);const z=t.id==="ren",Q=z?Be("#f1e8f5",.74,0):s,tt=Hr(.077,.24,Q,10);tt.position.y=-.17,tt.castShadow=!0,K.add(tt),yt(K,new De(.078,.014,5,14),z?f:a,[0,-.37,0],[Math.PI/2,0,0]);const lt=new Ae;lt.position.y=-.38,K.add(lt);const Ut=Hr(.065,.22,z?Be("#f1e8f5",.7,0):e,10);Ut.position.y=-.15,Ut.castShadow=!0,lt.add(Ut);const q=_n(yt(lt,new we(.075,12,10),e,[0,-.33,0]),[.9,1.05,.75]);return yt(lt,new we(.028,8,6),e,[F*.05,-.32,.045],[0,0,0],[1,1.4,.8]),t.id==="jules"&&(yt(lt,new hn(.07,.075,.1,10),Be("#111722",.5,.1),[0,-.27,0]),yt(lt,new De(.073,.012,5,14),f,[0,-.31,0],[Math.PI/2,0,0])),t.id==="mika"&&yt(lt,new De(.068,.012,5,14),f,[0,-.27,0],[Math.PI/2,0,0]),t.id==="ren"&&yt(lt,new hn(.063,.068,.18,10),Be("#f1e8f5",.5,.02),[0,-.21,0]),q.castShadow=!0,{arm:K,elbow:lt}},B=D(-1),W=D(1);if(this.rig.armL=B.arm,this.rig.elbowL=B.elbow,this.rig.armR=W.arm,this.rig.elbowR=W.elbow,t.style==="skirt"){const F=new Ae;F.position.y=.02,S.add(F),this.rig.skirt=F;const K=t.id==="ren"?new Ne({color:t.bottom,roughness:.75,transparent:!0,opacity:.92,side:en}):o,z=new hn(.24,.47,t.id==="ren"?.62:.46,t.id==="ren"?24:16,1,!0),Q=yt(F,z,K,[0,-.19,0],[0,0,0],[1,1,.86]);if(Q.castShadow=!0,t.id==="ren"){const tt=yt(F,new hn(.31,.55,.55,22,1,!0),new Ne({color:"#130b1e",roughness:.8,transparent:!0,opacity:.62,side:en}),[0,-.15,.015],[0,0,0],[1,1,.92]);tt.renderOrder=2,yt(F,new De(.24,.023,6,20),f,[0,.08,0],[Math.PI/2,0,0],[1,.84,1]);const lt=Be(t.accent,.5,.05);yt(F,new Jt(.15,.06,.02),lt,[.08,.03,-.22],[0,.2,.4]),yt(F,new Jt(.15,.06,.02),lt,[-.08,.03,-.22],[0,-.2,-.4]),yt(F,new we(.045,8,6),lt,[0,.03,-.23])}else{for(let tt=0;tt<12;tt++){const lt=tt/12*Math.PI*2;yt(F,new Jt(.015,.44,.012),s,[Math.sin(lt)*.35,-.19,Math.cos(lt)*.3],[0,lt,0])}yt(F,new De(.465,.016,5,26),s,[0,-.42,0],[Math.PI/2,0,0],[1,.86,1]),yt(F,new De(.248,.025,6,20),a,[0,.055,0],[Math.PI/2,0,0],[1,.84,1])}}const N=F=>{const K=new Ae;K.position.set(F*.145,-.04,0),S.add(K);const z=t.style==="pants",tt=Hr(z?.135:.105,.35,z?o:n,10);tt.position.y=-.29,tt.castShadow=!0,K.add(tt),z?(yt(K,new Jt(.085,.11,.035),Be(t.bottom,.7,.01),[F*.085,-.36,.08]),yt(K,new Jt(.09,.016,.04),f,[F*.085,-.31,.086])):(yt(K,new hn(.113,.096,.34,12),Be(t.id==="mika"?"#f5e4eb":"#17101f",.75,.01),[0,-.4,0]),yt(K,new De(.111,.012,5,14),t.id==="mika"?s:f,[0,-.23,0],[Math.PI/2,0,0]));const lt=new Ae;lt.position.y=-.6,K.add(lt);const q=Hr(z?.11:.085,.3,z?o:n,10);q.position.y=-.21,q.castShadow=!0,lt.add(q);const ht=new Ae;ht.position.y=-.49,lt.add(ht);const Rt=yt(ht,new hn(z?.105:.09,z?.11:.095,.28,12),l,[0,-.04,0]);return Rt.castShadow=!0,yt(ht,new De(.1,.011,5,15),f,[0,.1,0],[Math.PI/2,0,0]),yt(ht,new Jt(.22,.17,.36),l,[0,-.285,.055]),yt(ht,new En(.245,.1,.4,3,.035),c,[0,-.39,.055]),yt(ht,new Jt(.2,.025,.06),f,[0,-.3,.235]),{leg:K,knee:lt}},V=N(-1),Z=N(1);this.rig.legL=V.leg,this.rig.kneeL=V.knee,this.rig.legR=Z.leg,this.rig.kneeR=Z.knee,x.traverse(F=>{F.isMesh&&(F.frustumCulled=!0)})}buildHair(t,e,n,s){const r=this.look.hairStyle,a=yt(t,new we(.318,22,16,0,Math.PI*2,0,Math.PI*.66),e,[0,.047,-.014],[0,0,0],[.96,1.02,.98]);if(a.castShadow=!0,_n(yt(t,new we(.305,20,16),e,[0,.015,-.085]),[.95,1.05,.72]),r==="buns"){for(const o of[-1,1])_n(yt(t,new we(.145,16,12),e,[o*.245,.31,-.035]),[1,1,1]),yt(t,new De(.078,.018,6,14),n,[o*.235,.25,-.025],[.2,o*.3,0]);for(let o=0;o<6;o++){const l=-.65+o*.26;_n(yt(t,new we(.085,12,10),o%2?n:e,[Math.sin(l)*.23,.18-Math.abs(l)*.055,.218],[0,0,-l*.4]),[.95,1.2,.55])}for(const o of[-1,1])_n(yt(t,new we(.095,10,10),e,[o*.26,-.12,.075],[0,0,o*.12]),[.65,1.55,.65]),yt(t,new Jt(.025,.21,.012),n,[o*.305,-.11,.11],[0,0,o*.1]);for(const o of[-1,1])Is(t,Ds(.035,s,.012),[o*.33,.19,.12])}else if(r==="wolf"){for(let o=0;o<7;o++){const l=-Math.PI*.78+o/6*Math.PI*1.56,c=l<-.4||l>.4,f=c?.34:.24,h=yt(t,new ts(.085,f,6),o%3===0?n:e,[Math.sin(l)*.255,.06-(c?.08:0),Math.cos(l)*.23-.05],[.3,l,l/Math.PI*.4]);h.scale.z=.6}for(let o=0;o<5;o++){const l=o/4;_n(yt(t,new we(.08,12,10),o===3?n:e,[-.2+l*.42,.16-l*.02,.205],[0,.2,-.3+l*.4]),[1.1,1.3-l*.25,.48])}yt(t,new Jt(.055,.17,.02),n,[.29,-.015,.04],[0,.7,.18]),this.makeShades(t,s)}else{yt(t,new we(.325,20,16),e,[0,-.015,-.03],[0,0,0],[1,1.1,.96]);for(const o of[-1,1])_n(yt(t,new we(.13,14,12),e,[o*.235,-.15,.03],[0,0,o*.12]),[.8,1.5,.75]),yt(t,new Jt(.03,.31,.012),n,[o*.286,-.13,.105],[0,0,o*.15]);for(let o=0;o<7;o++){const l=o/6;_n(yt(t,new we(.075,12,9),o%2?n:e,[-.24+l*.48,.15-Math.abs(l-.5)*.03,.235],[0,0,-.2+l*.4]),[.85,1.1,.42])}for(let o=-2;o<=2;o++){const l=o===0?.13:.075;yt(t,new ts(.022,l,5),s,[o*.055,.34,.13],[0,0,0])}yt(t,new De(.17,.009,4,20,Math.PI),s,[0,.27,.12],[0,0,0],[1,.5,1])}}makeShades(t,e){const n=Gr("#111520",.14,1),s=new Ae;s.position.set(0,.21,.12),s.rotation.x=-.14;for(const r of[-1,1])yt(s,new Jt(.13,.07,.025),n,[r*.075,0,0],[0,r*.16,0]),yt(s,new Jt(.095,.018,.012),e,[r*.075,.02,.017]);yt(s,new Jt(.035,.02,.015),n,[0,0,0]),t.add(s)}setMenu(t){this.menu=t}triggerPose(){this.poseTimer=1.2}triggerHit(){this.hitTimer=.55}resetRun(){this.poseTimer=0,this.hitTimer=0,this.jumpBlend=0,this.walkPhase=Math.random()*Math.PI*2}update(t,e="run",n={}){this.time+=t;const s=this.time,r=this.rig,a=this.anim,o=Gs(this.hitTimer/.55,0,1),l=Gs(this.poseTimer/1.2,0,1);this.poseTimer=Math.max(0,this.poseTimer-t),this.hitTimer=Math.max(0,this.hitTimer-t);const c=n.jumpY||0;this.jumpBlend+=(Gs(c/.9,0,1)-this.jumpBlend)*Math.min(1,t*12),this.menuBlend+=((e==="menu"?1:0)-this.menuBlend)*Math.min(1,t*5);const f=n.speed||1;e==="run"||e==="pose"?this.walkPhase+=t*8.2*Gs(.75+f*.08,.8,1.65):e==="menu"&&(this.walkPhase+=t*1.9);let h={hipsY:1.3,hipsRotX:0,hipsRotY:0,hipsRotZ:Math.sin(this.walkPhase*.5)*.02,torsoRotX:.035,torsoRotY:Math.sin(this.walkPhase*.5)*.055,torsoRotZ:Math.sin(this.walkPhase*.5)*.025,headRotX:-.01,headRotY:-Math.sin(this.walkPhase*.5)*.05,headRotZ:0,armLX:0,armLY:0,armLZ:-.1,armRX:0,armRY:0,armRZ:.1,elbowLX:-.14,elbowLZ:0,elbowRX:-.14,elbowRZ:0,legLX:0,legLZ:0,legRX:0,legRZ:0,kneeLX:.04,kneeRX:.04,hairRot:0};if(e==="run"||e==="pose"){const u=Math.sin(this.walkPhase),p=Math.sin(this.walkPhase+Math.PI),v=Math.abs(Math.sin(this.walkPhase))*.028;h.hipsY=1.3+v,h.hipsRotY=u*.12,h.hipsRotZ=Math.sin(this.walkPhase*.5)*.028,h.torsoRotX=.075,h.torsoRotY=-u*.1,h.torsoRotZ=-u*.03,h.headRotX=-.055,h.headRotY=u*.035,h.legLX=u*.72,h.legRX=p*.72,h.kneeLX=.06+Math.max(0,-u)*.7,h.kneeRX=.06+Math.max(0,-p)*.7,h.legLZ=.028,h.legRZ=-.028,h.armLX=-u*.55,h.armRX=-p*.55,h.armLZ=-.13,h.armRZ=.13,h.elbowLX=-.28-Math.max(0,u)*.18,h.elbowRX=-.28-Math.max(0,p)*.18,h.hairRot=-u*.03}if(e==="menu"){const u=Math.sin(s*.85),p=Math.sin(s*1.7);h.hipsRotZ=u*.025+.018,h.hipsY=1.3+p*.004,h.torsoRotX=.02,h.torsoRotY=Math.sin(s*.38)*.12,h.torsoRotZ=u*.02,h.headRotY=Math.sin(s*.38)*.22,h.headRotZ=-u*.05,h.headRotX=-.02,h.legLX=-.04,h.legRX=.09,h.kneeLX=.06,h.kneeRX=.12,h.legLZ=.035,h.legRZ=-.035,h.armLX=.05+p*.02,h.armLZ=-.16,h.armRX=-.04,h.armRZ=.2,h.elbowLX=-.25,h.elbowRX=-.13;const v=(s+1.2)%8;if(v>4.3&&v<7.2){const g=ih(4.3,4.8,v)*(1-ih(6.7,7.2,v));h.armLZ=-.16-g*2.3,h.armLX=.05+g*.18,h.elbowLX=-.25-g*.22,h.armRZ=.2+g*.16,h.armRX=-.04-g*.1,h.headRotZ+=g*.08,h.hipsRotZ+=g*.05,h.legRX+=g*.12}}if(c>.01){const u=this.jumpBlend;h.hipsY+=u*.06,h.torsoRotX=.04+u*.16,h.legLX=-.25-u*.55,h.legRX=.35+u*.4,h.kneeLX=.65+u*.7,h.kneeRX=.28+u*.28,h.armLZ=-.18-u*1.1,h.armRZ=.18+u*1.1,h.armLX=-u*.25,h.armRX=-u*.1,h.elbowLX=-.1,h.elbowRX=-.1,h.headRotX=-.06}if(l>0){const u=Math.sin(l*Math.PI)*(l>.82?.7:1);h.armRZ+=u*1.95,h.armRX+=u*.32,h.elbowRZ=u*0,h.elbowRX=-.18-u*.1,h.armLZ-=u*.38,h.armLX=.18*u,h.elbowLX=-.5-u*.9,h.elbowLZ=u*.8,h.hipsRotZ+=u*.1,h.hipsRotY-=u*.14,h.torsoRotZ-=u*.12,h.torsoRotX-=u*.05,h.headRotZ+=u*.14,h.headRotY+=u*.1,h.legLX=-.22*u,h.kneeLX=.25+u*.35,h.legRX=.08*u,h.kneeRX=.1,h.legLZ=.09*u}if(o>0){const u=Math.sin(o*Math.PI);h.torsoRotX-=u*.45,h.headRotX-=u*.22,h.armLZ-=u*.8,h.armRZ+=u*.9,h.armLX-=u*.45,h.armRX-=u*.45,h.hipsRotZ+=u*.16,h.legLX-=u*.2,h.legRX+=u*.2}const d=Math.min(1,t*(e==="menu"?7:15));for(const u of Object.keys(h))a[u]+=(h[u]-a[u])*d;r.hips.position.y=a.hipsY,r.hips.rotation.set(a.hipsRotX,a.hipsRotY,a.hipsRotZ),r.torso.rotation.set(a.torsoRotX,a.torsoRotY,a.torsoRotZ),r.head.rotation.set(a.headRotX,a.headRotY,a.headRotZ),r.armL.rotation.set(a.armLX,a.armLY,a.armLZ),r.armR.rotation.set(a.armRX,a.armRY,a.armRZ),r.elbowL.rotation.set(a.elbowLX,-.04,a.elbowLZ),r.elbowR.rotation.set(a.elbowRX,.04,a.elbowRZ),r.legL.rotation.set(a.legLX,.02,a.legLZ),r.legR.rotation.set(a.legRX,-.02,a.legRZ),r.kneeL.rotation.x=a.kneeLX,r.kneeR.rotation.x=a.kneeRX,r.skirt&&(r.skirt.rotation.z=-a.hipsRotZ*.4,r.skirt.rotation.x=-a.legLX*.035)}dispose(){this.root.traverse(t=>{t.isMesh&&(t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose())}),this.root.removeFromParent()}}const mi=[{id:"afterglow",name:"AFTERGLOW",skyTop:"#12041d",skyBottom:"#5c1859",horizon:"#ff4f93",sun:"#ff789f",sunCore:"#fff0c7",fog:"#230a2b",neonA:"#ff3f98",neonB:"#68f5ff",neonC:"#ffe36e",ground:"#1c0c22",building:"#16081f",crowd:["#ff7bb7","#8c7cff","#76f9f1","#ffd577","#f0a2ff","#ff5f8f","#c8ff78"],beamA:"#ff4f9d",beamB:"#63f3ff"},{id:"aqua",name:"AQUA HOUR",skyTop:"#020f20",skyBottom:"#07576c",horizon:"#4de7df",sun:"#6afbf5",sunCore:"#f0ffdc",fog:"#061c26",neonA:"#62f4ef",neonB:"#ffdf68",neonC:"#ff5f9d",ground:"#07171d",building:"#06121b",crowd:["#5ef8f2","#d7ff6a","#ff8fc4","#9fb1ff","#ffe694","#65d7ff","#f2ffff"],beamA:"#56f2ee",beamB:"#d4ff64"},{id:"solaris",name:"SOLARIS",skyTop:"#20071b",skyBottom:"#943848",horizon:"#ffc965",sun:"#ffcf6d",sunCore:"#fff6cc",fog:"#2a1020",neonA:"#ffb947",neonB:"#ff5d8c",neonC:"#f8f4c4",ground:"#24101d",building:"#1c0a17",crowd:["#ffc865","#ff6e93","#f9f1ca","#ff9b6b","#ffd5ec","#c2f7ff","#ffdd45"],beamA:"#ffc55d",beamB:"#ff6a97"},{id:"midnight",name:"MIDNIGHT",skyTop:"#030317",skyBottom:"#252061",horizon:"#8c9bff",sun:"#a9b5ff",sunCore:"#f3f1ff",fog:"#080a22",neonA:"#9a85ff",neonB:"#5ff5ff",neonC:"#ff77bd",ground:"#0a081b",building:"#070716",crowd:["#9e8dff","#58f5ff","#ff7ac5","#f4efff","#7dffb4","#ffdd77","#aabaff"],beamA:"#9b82ff",beamB:"#57f5ff"}],Vr=i=>new Ht(i);function $o(i=128,t="rgba(255,255,255,1)",e="rgba(255,255,255,0)"){const n=document.createElement("canvas");n.width=n.height=i;const s=n.getContext("2d"),r=s.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);r.addColorStop(0,t),r.addColorStop(.2,t),r.addColorStop(.55,"rgba(255,255,255,0.22)"),r.addColorStop(1,e),s.fillStyle=r,s.fillRect(0,0,i,i);const a=new ps(n);return a.colorSpace=qe,a}function R_(i=64){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.5,"rgba(255,255,255,0.9)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);const s=new ps(t);return s.colorSpace=qe,s}function C_(){const e=document.createElement("canvas");e.width=512,e.height=1024;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,512,0);s.addColorStop(0,"#100813"),s.addColorStop(.08,"#241029"),s.addColorStop(.5,"#1c0d22"),s.addColorStop(.92,"#241029"),s.addColorStop(1,"#100813"),n.fillStyle=s,n.fillRect(0,0,512,1024);for(let o=0;o<1400;o++){n.fillStyle=`rgba(255,255,255,${Math.random()*.055})`;const l=Math.random()*1.8+.3;n.fillRect(Math.random()*512,Math.random()*1024,l,l)}const r=n.createLinearGradient(0,0,512,0);r.addColorStop(0,"rgba(255,79,157,0)"),r.addColorStop(.035,"rgba(255,79,157,0.8)"),r.addColorStop(.08,"rgba(255,79,157,0.05)"),r.addColorStop(.5,"rgba(255,255,255,0)"),r.addColorStop(.92,"rgba(104,245,255,0.05)"),r.addColorStop(.965,"rgba(104,245,255,0.8)"),r.addColorStop(1,"rgba(104,245,255,0)"),n.fillStyle=r,n.fillRect(0,0,512,1024),n.strokeStyle="rgba(255,244,237,0.15)",n.lineWidth=2;for(const o of[512*.333,512*.667])n.beginPath(),n.moveTo(o,0),n.lineTo(o,1024),n.stroke();for(let o=0;o<1024;o+=128)n.strokeStyle=`rgba(255,244,237,${.1})`,n.lineWidth=3,n.beginPath(),n.moveTo(512*.43,o+20),n.lineTo(512*.5,o+44),n.lineTo(512*.57,o+20),n.stroke(),n.strokeStyle="rgba(255,244,237,0.2)",n.lineWidth=4,n.setLineDash([18,34]),n.beginPath(),n.moveTo(512*.5,o+66),n.lineTo(512*.5,o+112),n.stroke(),n.setLineDash([]);const a=new ps(e);return a.wrapS=yi,a.wrapT=yi,a.repeat.set(1,8),a.colorSpace=qe,a.anisotropy=8,a}function P_(i=1){const t=document.createElement("canvas");t.width=128,t.height=256;const e=t.getContext("2d");e.fillStyle="#06030b",e.fillRect(0,0,128,256);let n=i*997;const s=()=>(n=n*16807%2147483647,n/2147483647);for(let a=8;a<247;a+=13)for(let o=8;o<120;o+=13){if(!(s()>.55))continue;const c=s()>.38;e.fillStyle=c?`rgba(255,208,139,${.4+s()*.6})`:`rgba(155,209,255,${.28+s()*.45})`,e.fillRect(o,a,5+Math.floor(s()*3),5)}const r=new ps(t);return r.colorSpace=qe,r.wrapS=yi,r.wrapT=yi,r}function io(i,{sub:t="",color:e="#fff1e8",accent:n="#ff3f98",bg:s="rgba(10,3,12,0.82)",width:r=1024,height:a=256}={}){const o=document.createElement("canvas");o.width=r,o.height=a;const l=o.getContext("2d");l.fillStyle=s,l.fillRect(0,0,r,a),l.strokeStyle=n,l.lineWidth=10,l.strokeRect(9,9,r-18,a-18),l.fillStyle=e,l.textBaseline="middle",l.textAlign="center",l.font=`700 ${Math.floor(a*.6)}px "Bebas Neue", "Arial Narrow", sans-serif`,l.fillText(i,r/2,a*(t?.43:.51)),t&&(l.fillStyle=n,l.font=`800 ${Math.floor(a*.11)}px "Manrope", sans-serif`,l.fillText(t,r/2,a*.83));const c=new ps(o);return c.colorSpace=qe,c.anisotropy=8,c}class L_{constructor(t,e={}){this.scene=t,this.isMobile=e.isMobile??!1,this.paletteIndex=0,this.current=this.makePaletteColors(mi[0]),this.target=this.makePaletteColors(mi[0]),this.elapsed=0,this.distance=0,this.mode="menu",this.particleTime=0,this.arches=[],this.signs=[],this.confettiBursts=[],this.crowdData=[],this.crowdPhones=[],this.glowTex=$o(),this.dotTex=R_(),this.neonA=new Re({color:this.current.neonA,toneMapped:!1}),this.neonB=new Re({color:this.current.neonB,toneMapped:!1}),this.neonC=new Re({color:this.current.neonC,toneMapped:!1}),this.neonAGlow=new Re({color:this.current.neonA,transparent:!0,opacity:.085,side:en,depthWrite:!1,blending:xn,toneMapped:!1}),this.neonBGlow=this.neonAGlow.clone(),this.neonBGlow.color.copy(this.current.neonB),this.beamA=new Re({color:this.current.beamA,transparent:!0,opacity:.014,side:en,depthWrite:!1,blending:xn,toneMapped:!1}),this.beamB=this.beamA.clone(),this.beamB.color.copy(this.current.beamB),this.buildLights(),this.buildSky(),this.buildRunway(),this.buildCity(),this.buildArches(),this.buildCrowd(),this.buildSigns(),this.buildHeroSet(),this.buildParticles(),this.buildConfetti()}makePaletteColors(t){const e={};for(const n of["skyTop","skyBottom","horizon","sun","sunCore","fog","neonA","neonB","neonC","ground","building","beamA","beamB"])e[n]=Vr(t[n]);return e}buildLights(){const t=this.scene;this.hemi=new md(16761315,1180694,.58),t.add(this.hemi),this.key=new Dc(16767212,1.65),this.key.position.set(3.4,9,6),t.add(this.key),this.rim=new Dc(7338239,.68),this.rim.position.set(-6,4.5,-6),t.add(this.rim),this.playerSpot=new _d(16752593,27,19,.62,.75,1.25),this.playerSpot.position.set(0,8.5,3.2),this.playerSpot.target.position.set(0,.7,-1.2),t.add(this.playerSpot),t.add(this.playerSpot.target),this.pinkPoint=new jr(16727960,15,22,1.5),this.pinkPoint.position.set(-4.4,1.8,-3.5),t.add(this.pinkPoint),this.cyanPoint=new jr(6419711,12,24,1.5),this.cyanPoint.position.set(4.2,2.2,-10),t.add(this.cyanPoint),this.audienceGlow=new jr(16746171,7,26,1.5),this.audienceGlow.position.set(0,4,-9),t.add(this.audienceGlow)}buildSky(){const t=this.scene,e=new we(230,32,24);this.skyMat=new fn({side:nn,depthWrite:!1,uniforms:{uTop:{value:this.current.skyTop.clone()},uBottom:{value:this.current.skyBottom.clone()},uHorizon:{value:this.current.horizon.clone()},uTime:{value:0}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vDir;
        uniform vec3 uTop;
        uniform vec3 uBottom;
        uniform vec3 uHorizon;
        uniform float uTime;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          float h = smoothstep(-0.15, 0.92, vDir.y);
          vec3 col = mix(uBottom, uTop, h);
          float horizon = exp(-pow((vDir.y - 0.02) * 6.5, 2.0));
          col += uHorizon * horizon * 0.24;
          float glow = pow(max(0.0, 1.0 - abs(vDir.x) * 1.2), 4.0) * exp(-pow((vDir.y - 0.15) * 3.2, 2.0));
          col += uHorizon * glow * 0.15;
          gl_FragColor = vec4(col, 1.0);
        }
      `});const n=new Ct(e,this.skyMat);n.frustumCulled=!1,t.add(n),this.sky=n;const s=$o(256,"rgba(255,255,255,0.85)","rgba(255,255,255,0)"),r=new _l(new ma({map:s,color:this.current.sun,transparent:!0,opacity:.22,blending:xn,depthWrite:!1,fog:!1,toneMapped:!1}));r.scale.set(28,28,1),r.position.set(0,17,-100),t.add(r),this.halo=r;const a=new Ct(new xi(6.2,64),new Re({color:this.current.sunCore,fog:!1,toneMapped:!1}));a.position.set(0,17,-101),t.add(a),this.sunDisc=a;const o=new Ct(new _a(6.4,6.56,64),new Re({color:this.current.sun,transparent:!0,opacity:.45,side:en,blending:xn,depthWrite:!1,fog:!1,toneMapped:!1}));o.position.set(0,17,-101.1),t.add(o),this.sunRing=o;const l=this.isMobile?420:700,c=new Float32Array(l*3),f=new Float32Array(l);for(let u=0;u<l;u++){const p=Math.random()*Math.PI*2,v=.09+Math.random()*.75,g=Math.sqrt(1-v*v);c[u*3]=Math.cos(p)*g*165,c[u*3+1]=v*150-6,c[u*3+2]=Math.sin(p)*g*165-20,f[u]=Math.random()}const h=new Le;h.setAttribute("position",new Ze(c,3)),h.setAttribute("aSize",new Ze(f,1));const d=new Bs({color:"#ffe8f5",size:.7,map:this.dotTex,transparent:!0,opacity:.78,depthWrite:!1,blending:xn,sizeAttenuation:!0,fog:!1,toneMapped:!1});this.stars=new Dr(h,d),t.add(this.stars)}buildRunway(){const t=this.scene,e=new Ct(new bn(250,280),new Ne({color:this.current.ground,roughness:.38,metalness:.35}));e.rotation.x=-Math.PI/2,e.position.set(0,-.34,-70),t.add(e),this.ground=e,this.runwayTex=C_(),this.runwayMat=new ua({map:this.runwayTex,color:"#ffffff",roughness:.23,metalness:.48,clearcoat:.72,clearcoatRoughness:.18,emissiveMap:this.runwayTex,emissive:this.current.neonA,emissiveIntensity:.14});const n=new Ct(new bn(5.4,190),this.runwayMat);n.rotation.x=-Math.PI/2,n.position.set(0,0,-76),t.add(n),this.runway=n;for(const r of[-1,1]){const a=new Ct(new bn(15.5,190),new Ne({color:"#09040d",roughness:.23,metalness:.6}));a.rotation.x=-Math.PI/2,a.position.set(r*10.3,-.04,-76),t.add(a)}this.railMeshes=[];for(const r of[-1,1]){const a=new Ct(new Jt(.075,.08,190),r<0?this.neonA:this.neonB);a.position.set(r*2.72,.02,-76),t.add(a),this.railMeshes.push(a);const o=new Ct(new bn(.5,190),r<0?this.neonAGlow:this.neonBGlow);o.rotation.x=-Math.PI/2,o.position.set(r*2.9,.005,-76),t.add(o)}for(const r of[-1,1]){const a=new Ct(new En(.34,.33,190,2,.05),new Ne({color:"#160a1c",roughness:.3,metalness:.58}));a.position.set(r*2.86,-.12,-76),t.add(a)}const s=new Ne({color:"#170a1e",roughness:.32,metalness:.52});for(const r of[-1,1]){const a=new Ct(new En(2.7,.48,9,3,.11),s);a.position.set(r*4.75,-.1,1.8),t.add(a);const o=new Ct(new Jt(2.7,.03,9),r<0?this.neonA:this.neonB);o.position.set(r*4.75,.15,1.8),t.add(o)}}buildCity(){const t=[1,2,3,4].map(a=>P_(a)),e=new Ae;this.scene.add(e),this.city=e;const n=[],s=(a,o)=>a+Math.random()*(o-a);for(let a=0;a<34;a++){const o=a%2===0?-1:1,l=s(3.5,9),c=s(8,38),f=s(3,8),h=t[a%t.length].clone();h.needsUpdate=!0,h.repeat.set(Math.max(1,Math.round(l/4)),Math.max(1,Math.round(c/8)));const d=new Ne({color:this.current.building,map:h,emissiveMap:h,emissive:16761466,emissiveIntensity:.75,roughness:.58,metalness:.2}),u=new Ct(new Jt(l,c,f),d);u.position.set(o*s(19,58),c/2-.5,-s(48,108)),e.add(u),n.push({mesh:u,mat:d})}this.buildings=n;const r=[["FEMBOYS","LIVE","#ff3f98"],["SLAY","ALL NIGHT","#5ff2ff"],["♡","THE AFTERGLOW","#ffd86b"],["ICON","SEASON 01","#b58cff"]];this.billboards=[],r.forEach(([a,o,l],c)=>{const f=io(a,{sub:o,accent:l,width:512,height:160,color:"#fff1e8",bg:"rgba(5,2,9,0.84)"}),h=new Re({map:f,transparent:!0,toneMapped:!1,fog:!0}),d=new Ct(new bn(13,4.1),h),u=c%2===0?-1:1;d.position.set(u*(28+c*3.4),16+c*2.7,-64-c*10),d.rotation.y=u*-.1,this.scene.add(d),this.billboards.push(d)})}buildArches(){const t=new Ae;this.scene.add(t),this.archGroup=t;const e=24,n=this.isMobile?5:6,s=new Ne({color:"#1a0b20",roughness:.32,metalness:.72});for(let r=0;r<n;r++){const a=new Ae;a.position.z=12-r*e;const o=r%2===0?this.neonA:this.neonB,l=r%2===0?this.neonB:this.neonA;for(const d of[-1,1]){const u=new Ct(new En(.23,6.5,.23,2,.04),s);u.position.set(d*4.75,3.25,0),a.add(u);for(let g=0;g<8;g++){const m=new Ct(new Jt(.65,.035,.035),s);m.position.set(d*4.75,.35+g*.79,.08),m.rotation.z=.75,a.add(m)}const p=new Ct(new Jt(.085,6.2,.085),o);p.position.set(d*4.6,3.3,.16),a.add(p);const v=new Ct(new Jt(.03,5.8,.03),l);v.position.set(d*4.88,3.3,.2),a.add(v)}const c=new Ct(new En(9.7,.3,.3,2,.05),s);c.position.set(0,6.5,0),a.add(c);const f=new Ct(new Jt(9.3,.08,.08),o);f.position.set(0,6.35,.17),a.add(f);for(const d of[-1,1]){const u=new Ct(new hn(.18,.24,.55,10),s);u.position.set(d*3.1,6.72,.18),u.rotation.x=1.05,a.add(u);const p=new Ct(new hn(.16,.16,.05,12),d<0?this.neonA:this.neonB);p.position.set(d*3.1,6.83,.46),p.rotation.x=1.05,a.add(p)}const h=new Ct(new bn(8.8,.7),r%2===0?this.neonAGlow:this.neonBGlow);if(h.position.set(0,6.15,.02),a.add(h),r%2===1){const d=io("FEMBOYS",{sub:r===1?"SEASON 01":"RUNWAY RHYTHM",width:1024,height:256,accent:r===1?"#ff3f98":"#5ff2ff",bg:"rgba(9,2,12,0.78)"}),u=new Ct(new bn(3.2,.8),new Re({map:d,transparent:!0,toneMapped:!1}));u.position.set(0,5.7,.2),a.add(u)}for(const d of[-1,1]){const u=new Ct(new ts(.8,5.7,20,1,!0),r%2===0?this.beamA:this.beamB);u.position.set(d*3.5,3.2,.8),u.rotation.z=d*.08,a.add(u)}t.add(a),this.arches.push({group:a,i:r})}}buildCrowd(){const t=this.isMobile?16:23,e=5,n=t*e*2,s=new Ks(.1,.2,3,7),r=new we(.1,10,8),a=new Ks(.028,.15,2,5),o=new Ne({color:"#ffffff",roughness:.66,metalness:.02}),l=new Ne({color:"#ffffff",roughness:.72,metalness:0}),c=new Ne({color:"#ffffff",roughness:.62,metalness:.01});this.crowdBodies=new Qr(s,o,n),this.crowdHeads=new Qr(r,l,n),this.crowdArms=new Qr(a,c,n*2),this.crowdBodies.instanceMatrix.setUsage(Aa),this.crowdHeads.instanceMatrix.setUsage(Aa),this.crowdArms.instanceMatrix.setUsage(Aa),this.crowdBodies.frustumCulled=!1,this.crowdHeads.frustumCulled=!1,this.crowdArms.frustumCulled=!1,this.scene.add(this.crowdBodies,this.crowdHeads,this.crowdArms);const f=mi[0].crowd.map(Vr),h=new Te,d=new Ht;let u=0;for(const x of[-1,1])for(let T=0;T<e;T++)for(let S=0;S<t;S++){const A=18-S/(t-1)*136+(Math.random()-.5)*2.5,E=x*(6.1+T*1.15+Math.random()*.4),_=.55+T*.58,b=Math.random()*Math.PI*2,C=.86+Math.random()*.3,R=Math.random()>.38;this.crowdData.push({x:E,y:_,z:A,phase:b,scale:C,side:x,row:T,armUp:R}),d.copy(f[Math.floor(Math.random()*f.length)]),this.crowdBodies.setColorAt(u,d),this.crowdHeads.setColorAt(u,d.clone().multiplyScalar(1.12)),this.crowdArms.setColorAt(u*2,d.clone().multiplyScalar(1.04)),this.crowdArms.setColorAt(u*2+1,d.clone().multiplyScalar(1.04)),h.position.set(E,_,A),h.scale.setScalar(C),h.rotation.set(0,x*-.22,0),h.updateMatrix(),this.crowdBodies.setMatrixAt(u,h.matrix),h.position.y=_+.24*C,h.updateMatrix(),this.crowdHeads.setMatrixAt(u,h.matrix),u++}this.crowdBodies.instanceColor.needsUpdate=!0,this.crowdHeads.instanceColor.needsUpdate=!0,this.crowdArms.instanceColor.needsUpdate=!0;const p=new Le,v=new Float32Array(this.crowdData.length*3),g=new Float32Array(this.crowdData.length*3);this.crowdPhones=[];for(let x=0;x<this.crowdData.length;x++){const T=this.crowdData[x];v[x*3]=T.x+T.side*.1,v[x*3+1]=T.y+.45,v[x*3+2]=T.z+.1;const S=f[Math.floor(Math.random()*f.length)];g[x*3]=S.r,g[x*3+1]=S.g,g[x*3+2]=S.b,this.crowdPhones.push({i:x,phase:Math.random()*9})}p.setAttribute("position",new Ze(v,3)),p.setAttribute("color",new Ze(g,3)),this.phonePoints=new Dr(p,new Bs({size:.13,map:this.dotTex,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1,blending:xn,toneMapped:!1})),this.phonePoints.frustumCulled=!1,this.scene.add(this.phonePoints);const m=new Ne({color:"#0d0612",roughness:.46,metalness:.4});for(const x of[-1,1])for(let T=0;T<5;T++){const S=new Ct(new Jt(1.08,.5,148),m);S.position.set(x*(6.1+T*1.15),.22+T*.58,-50),this.scene.add(S)}}buildSigns(){[["SLAY","#ff3f98"],["ICON","#5ff2ff"],["YES ♡","#ffe36e"],["MIKA","#ff8ec6"],["REN","#c3a2ff"],["JULES","#7ff8f4"]].forEach(([e,n],s)=>{const r=io(e,{width:512,height:192,accent:n,bg:"rgba(9,2,12,0.76)"}),a=new Ct(new bn(1.7,.64),new Re({map:r,transparent:!0,toneMapped:!1})),o=s%2===0?-1:1;a.position.set(o*(7.6+s%3*.7),3.2+s%4*.45,4-s*19),a.rotation.y=o*.1,this.scene.add(a),this.signs.push({mesh:a,side:o})})}buildHeroSet(){const t=new Ae;this.scene.add(t),this.heroSet=t;const e=new Ct(new En(7.2,.36,5.4,4,.16),new ua({color:"#16081c",roughness:.18,metalness:.5,clearcoat:.8,clearcoatRoughness:.16}));e.position.set(0,-.18,.1),t.add(e);const n=new Ct(new De(3.28,.025,6,72),this.neonA);n.rotation.x=Math.PI/2,n.position.y=.02,n.scale.z=.76,t.add(n);const s=new Ct(new De(2.5,.014,5,64),this.neonB);s.rotation.x=Math.PI/2,s.position.y=.025,s.scale.z=.74,t.add(s);for(const[r,a,o,l]of[[3.5,this.neonAGlow,-5.4,0],[3.5,this.neonA,-5.3,0],[4.35,this.neonBGlow,-7.7,.2],[4.35,this.neonB,-7.6,.2]]){const c=new Ct(new De(r,r>4?.05:.035,8,100),a);c.position.set(0,3.2,o),c.rotation.z=l,t.add(c)}for(const r of[-1,1]){const a=new Ct(new hn(.012,.012,4.4,4),new Re({color:"#09040c"}));a.position.set(r*3.3,6.5,-2.6),t.add(a);const o=new Ct(new hn(.21,.3,.72,12),new Ne({color:"#1b0a21",roughness:.3,metalness:.75}));o.position.set(r*3.3,4.1,-2.6),o.rotation.x=.18,t.add(o);const l=new Ct(new xi(.22,18),r<0?this.neonA:this.neonB);l.position.set(r*3.3,3.74,-2.5),l.rotation.x=-Math.PI/2,t.add(l)}this.heroStars=[];for(let r=0;r<6;r++){const a=Al(.16+Math.random()*.1,r%2?this.neonC:this.neonB,.04);a.position.set((Math.random()-.5)*7.2,2.8+Math.random()*3.2,-3-Math.random()*4),a.userData={baseY:a.position.y,phase:Math.random()*8,rot:Math.random()*2},t.add(a),this.heroStars.push(a)}}buildParticles(){const t=this.isMobile?180:320,e=new Float32Array(t*3),n=new Float32Array(t);for(let a=0;a<t;a++)e[a*3]=(Math.random()-.5)*24,e[a*3+1]=.2+Math.random()*9,e[a*3+2]=16-Math.random()*130,n[a]=Math.random()*Math.PI*2;const s=new Le;s.setAttribute("position",new Ze(e,3)),s.setAttribute("aPhase",new Ze(n,1));const r=new Bs({map:this.dotTex,color:"#ffd6ea",size:.11,transparent:!0,opacity:.68,depthWrite:!1,blending:xn,toneMapped:!1});this.sparkles=new Dr(s,r),this.sparkles.frustumCulled=!1,this.scene.add(this.sparkles),this.sparklePositions=e,this.sparklePhases=n}buildConfetti(){const e=new Float32Array(720),n=new Float32Array(720),s=new Float32Array(720);for(let o=0;o<240;o++)e[o*3]=0,e[o*3+1]=-20,e[o*3+2]=0;const r=new Le;r.setAttribute("position",new Ze(e,3)),r.setAttribute("color",new Ze(s,3));const a=new Bs({size:.16,map:this.dotTex,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1});this.confetti=new Dr(r,a),this.confetti.frustumCulled=!1,this.scene.add(this.confetti),this.confettiPositions=e,this.confettiVelocities=n,this.confettiColors=s,this.confettiLife=new Float32Array(240),this.confettiCount=240,this.confettiCursor=0}setMode(t){this.mode=t;const e=t==="menu";this.heroSet.visible=e,this.podium&&(this.podium.visible=e),this.signs.forEach(n=>{n.mesh.visible=!e})}setPalette(t,e=!1){this.paletteIndex=t%mi.length;const n=mi[this.paletteIndex];if(this.target=this.makePaletteColors(n),e){for(const s of Object.keys(this.target))this.current[s].copy(this.target[s]);this.applyPalette()}}applyPalette(){this.skyMat.uniforms.uTop.value.copy(this.current.skyTop),this.skyMat.uniforms.uBottom.value.copy(this.current.skyBottom),this.skyMat.uniforms.uHorizon.value.copy(this.current.horizon),this.scene.fog?.color.copy(this.current.fog),this.halo.material.color.copy(this.current.sun),this.sunRing.material.color.copy(this.current.sun),this.sunDisc.material.color.copy(this.current.sunCore),this.runwayMat.emissive.copy(this.current.neonA),this.ground.material.color.copy(this.current.ground),this.neonA.color.copy(this.current.neonA),this.neonB.color.copy(this.current.neonB),this.neonC.color.copy(this.current.neonC),this.neonAGlow.color.copy(this.current.neonA),this.neonBGlow.color.copy(this.current.neonB),this.beamA.color.copy(this.current.beamA),this.beamB.color.copy(this.current.beamB),this.pinkPoint.color.copy(this.current.neonA),this.cyanPoint.color.copy(this.current.neonB),this.playerSpot.color.copy(this.current.neonA).lerp(new Ht("#ffffff"),.72),this.hemi.color.copy(this.current.horizon).lerp(new Ht("#ffffff"),.35),this.buildings.forEach(({mat:t})=>t.color.copy(this.current.building)),this.stars.material.color.copy(this.current.sunCore)}burstConfetti(t=90,e=null){const n=mi[this.paletteIndex].crowd.map(Vr);for(let s=0;s<t;s++){const r=this.confettiCursor;this.confettiCursor=(this.confettiCursor+1)%this.confettiCount,this.confettiPositions[r*3]=(Math.random()-.5)*5,this.confettiPositions[r*3+1]=4.2+Math.random()*3,this.confettiPositions[r*3+2]=-1+Math.random()*5,this.confettiVelocities[r*3]=(Math.random()-.5)*3.2,this.confettiVelocities[r*3+1]=1.5+Math.random()*3.5,this.confettiVelocities[r*3+2]=-1.4+Math.random()*2;const a=e?Vr(e):n[Math.floor(Math.random()*n.length)];this.confettiColors[r*3]=a.r,this.confettiColors[r*3+1]=a.g,this.confettiColors[r*3+2]=a.b,this.confettiLife[r]=1.8+Math.random()*1.2}this.confetti.geometry.attributes.color.needsUpdate=!0,this.confetti.geometry.attributes.position.needsUpdate=!0}update(t,e,n=12,s=0){this.elapsed=e,this.distance+=n*t;const r=this.distance,a=Math.min(1,t*.9);for(const p of Object.keys(this.target))this.current[p].lerp(this.target[p],a);this.applyPalette(),this.skyMat.uniforms.uTime.value=e,this.runwayTex.offset.y=-(r/23.75)%1,this.podium&&(this.podium.rotation.y+=t*.08),this.heroSet.visible&&(this.heroSet.children.forEach(p=>{p.geometry?.type==="TorusGeometry"&&p.position.z<-5&&(p.rotation.z+=t*.02)}),this.heroStars.forEach(p=>{p.position.y=p.userData.baseY+Math.sin(e*.8+p.userData.phase)*.22,p.rotation.y+=t*(.4+p.userData.rot),p.rotation.z+=t*.08}));for(const p of this.arches)p.group.position.z+=n*t,p.group.position.z>18&&(p.group.position.z-=24*this.arches.length);const o=new Te,l=Math.sin(e*2.1)*.015,c=this.phonePoints.geometry.attributes.position.array,f=154;for(let p=0;p<this.crowdData.length;p++){const v=this.crowdData[p];v.z+=n*t,v.z>21&&(v.z-=f);const g=Math.sin(e*2.2+v.phase)*.05;o.position.set(v.x+g,v.y+l*(1+p%5),v.z),o.rotation.set(0,v.side*-.22,Math.sin(e*1.4+v.phase)*.02),o.scale.setScalar(v.scale),o.updateMatrix(),this.crowdBodies.setMatrixAt(p,o.matrix),o.position.y=v.y+.24*v.scale+l*1.2,o.updateMatrix(),this.crowdHeads.setMatrixAt(p,o.matrix);for(let m=0;m<2;m++){const x=p*2+m,T=m===0?-1:1,S=v.armUp?1:.18;o.position.set(v.x+T*.15*v.scale,v.y+.17+S*.17,v.z+.02),o.rotation.set(.18*S,v.side*-.22,T*(1.1*S+.1)+Math.sin(e*2.4+v.phase+m)*.12),o.scale.setScalar(v.scale),o.updateMatrix(),this.crowdArms.setMatrixAt(x,o.matrix)}p%1===0&&(c[p*3]=v.x+Math.sin(e*2.4+v.phase)*.09,c[p*3+1]=v.y+.45+l*2,c[p*3+2]=v.z+.12)}this.crowdBodies.instanceMatrix.needsUpdate=!0,this.crowdHeads.instanceMatrix.needsUpdate=!0,this.crowdArms.instanceMatrix.needsUpdate=!0,this.phonePoints.geometry.attributes.position.needsUpdate=!0;for(const p of this.signs)p.mesh.position.z+=n*t,p.mesh.position.z>18&&(p.mesh.position.z-=114),p.mesh.position.y=3.2+Math.sin(e*1.6+p.mesh.position.z)*.08;this.billboards.forEach((p,v)=>{p.position.y+=Math.sin(e*.5+v)*8e-4});const h=this.sparklePositions;for(let p=0;p<this.sparklePhases.length;p++)h[p*3+2]+=n*t*.7,h[p*3+2]>18&&(h[p*3+2]=-120,h[p*3]=(Math.random()-.5)*24),h[p*3+1]+=Math.sin(e*1.4+this.sparklePhases[p])*t*.08;this.sparkles.geometry.attributes.position.needsUpdate=!0;const d=this.confettiPositions,u=this.confettiVelocities;for(let p=0;p<this.confettiCount;p++)this.confettiLife[p]>0?(this.confettiLife[p]-=t,u[p*3+1]-=t*3.8,u[p*3]*=.995,u[p*3+2]*=.995,d[p*3]+=u[p*3]*t,d[p*3+1]+=u[p*3+1]*t,d[p*3+2]+=u[p*3+2]*t,d[p*3+1]<-.2&&(this.confettiLife[p]=0)):d[p*3+1]=-20;this.confetti.geometry.attributes.position.needsUpdate=!0,this.playerSpot.intensity=27+s*6,this.pinkPoint.intensity=14+s*4,this.audienceGlow.intensity=7+s*2}}const I_=new ua({color:"#2a0d31",roughness:.26,metalness:.45,clearcoat:.8,clearcoatRoughness:.18}),cu=new Re({color:"#ff3f98",toneMapped:!1}),hu=new Re({color:"#ffe36e",toneMapped:!1}),rh=new Ne({color:"#17101e",roughness:.3,metalness:.72}),D_=new Re({color:"#ff3f98",toneMapped:!1}),N_=new Ne({color:"#ffe36e",emissive:"#ffb52e",emissiveIntensity:1.4,roughness:.2,metalness:.5}),U_=new Re({color:"#ffe9a2",toneMapped:!1});function Al(i,t,e){const n=new yl;for(let r=0;r<10;r++){const a=r/10*Math.PI*2-Math.PI/2,o=r%2===0?i:i*.46;r===0?n.moveTo(Math.cos(a)*o,Math.sin(a)*o):n.lineTo(Math.cos(a)*o,Math.sin(a)*o)}n.closePath();const s=new ga(n,{depth:e,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:e*.2,bevelThickness:e*.2});return s.center(),new Ct(s,t)}function F_(){const i=new Ae,t=new Ct(new En(.92,.66,.72,3,.07),I_);t.position.y=.36,i.add(t);const e=new Ct(new En(.77,.045,.58,2,.02),cu);e.position.y=.71,i.add(e);for(const r of[-1,1]){const a=new Ct(new Jt(.03,.44,.045),hu);a.position.set(r*.47,.39,.37),i.add(a)}const n=Al(.13,U_,.03);n.position.set(0,.38,.375),i.add(n);const s=new Ct(new ir(.1,0),new Re({color:"#ffe36e",toneMapped:!1}));return s.position.y=1.1,s.userData.marker=!0,i.add(s),i}function O_(){const i=new Ae;for(const n of[-1,1]){const s=new Ct(new En(.11,.72,.11,2,.03),rh);s.position.set(n*2.2,.36,0),i.add(s);const r=new Ct(new En(.45,.08,.3,2,.02),rh);r.position.set(n*2.2,.04,0),i.add(r)}const t=new Ct(new Jt(4.35,.1,.1),D_);t.position.y=.62,i.add(t);const e=new Ct(new Jt(4.35,.035,.035),cu);e.position.set(0,.5,.02),i.add(e);for(const n of[-1,1]){const s=new Ct(new ir(.065,0),hu);s.position.set(n*2.2,.85,0),i.add(s)}return i}function B_(i=!1){const t=new Ae,e=Al(i?.34:.22,N_,.09);e.rotation.x=.22,t.add(e);const n=new Ct(new De(i?.45:.32,.01,4,28),new Re({color:"#ffe36e",transparent:!0,opacity:.55,toneMapped:!1,depthWrite:!1}));n.rotation.x=Math.PI/2,t.add(n);const s=new _l(new ma({map:$o(96,"rgba(255,226,115,0.85)","rgba(255,226,115,0)"),color:"#ffe36e",transparent:!0,opacity:.55,blending:xn,depthWrite:!1,toneMapped:!1}));return s.scale.set(1.3,1.3,1),t.add(s),t.userData.spin={ring:n,star:e,glow:s},t}const so=mi.map((i,t)=>({index:t,name:i.name,at:[0,260,620,1e3][t],palette:i})),z_=128,ah=60/z_/4;function Ns(i){return 440*Math.pow(2,(i-69)/12)}class k_{constructor(){this.ctx=null,this.master=null,this.musicBus=null,this.reverb=null,this.reverbGain=null,this.noise=null,this.muted=!1,this.started=!1,this.timer=null,this.step=0,this.nextStepTime=0,this.startTime=0,this.musicPlaying=!1,this.bar=0}ensure(){if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume(),!0;const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t({latencyHint:"interactive"}),this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.78;const e=this.ctx.createDynamicsCompressor();return e.threshold.value=-15,e.knee.value=12,e.ratio.value=4,e.attack.value=.005,e.release.value=.24,this.master.connect(e),e.connect(this.ctx.destination),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=.52,this.musicBus.connect(this.master),this.reverb=this.ctx.createConvolver(),this.reverb.buffer=this.makeImpulse(2.1,3.2),this.reverbGain=this.ctx.createGain(),this.reverbGain.gain.value=.25,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this.noise=this.makeNoiseBuffer(2),this.ctx.state==="suspended"&&this.ctx.resume(),this.started=!0,!0}makeImpulse(t,e){const n=this.ctx.sampleRate,s=Math.floor(n*t),r=this.ctx.createBuffer(2,s,n);for(let a=0;a<2;a++){const o=r.getChannelData(a);for(let l=0;l<s;l++){const c=l/s;o[l]=(Math.random()*2-1)*Math.pow(1-c,e)*(1-c*.2)}}return r}makeNoiseBuffer(t){const e=this.ctx.sampleRate,n=Math.floor(e*t),s=this.ctx.createBuffer(1,n,e),r=s.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;return s}setMuted(t){if(this.muted=t,this.master){const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.linearRampToValueAtTime(t?0:.78,e+.12)}}toggleMute(){return this.setMuted(!this.muted),this.muted}blip(t=660,e=.055,n="sine",s=.045){if(!this.ensure())return;const r=this.ctx.currentTime,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=n,a.frequency.setValueAtTime(t,r),o.gain.setValueAtTime(1e-4,r),o.gain.exponentialRampToValueAtTime(s,r+.006),o.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o),o.connect(this.master),a.start(r),a.stop(r+e+.01)}click(){this.blip(720,.045,"triangle",.04)}swoosh(){if(!this.ensure())return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noise;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.Q.value=.7,n.frequency.setValueAtTime(420,t),n.frequency.exponentialRampToValueAtTime(2800,t+.25);const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.035,t+.08),s.gain.exponentialRampToValueAtTime(1e-4,t+.32),e.connect(n),n.connect(s),s.connect(this.master),e.start(t),e.stop(t+.34)}collect(t=0){if(!this.ensure())return;const e=[880,1046.5,1318.5,1568],n=e[Math.min(e.length-1,t)];this.blip(n,.09,"sine",.032),setTimeout(()=>this.blip(n*1.5,.1,"sine",.022),38)}poseResult(t){if(!this.ensure())return;(t==="perfect"?[523.25,659.25,783.99,1046.5]:t==="great"?[523.25,659.25,783.99]:[523.25,659.25]).forEach((n,s)=>{setTimeout(()=>this.blip(n,.22,"triangle",.045),s*52)})}hit(){if(!this.ensure())return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(48,t+.24);const n=this.ctx.createGain();n.gain.setValueAtTime(.11,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.3);const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=900,e.connect(s),s.connect(n),n.connect(this.master),e.start(t),e.stop(t+.32);const r=this.ctx.createBufferSource();r.buffer=this.noise;const a=this.ctx.createGain();a.gain.setValueAtTime(.06,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.18);const o=this.ctx.createBiquadFilter();o.type="highpass",o.frequency.value=500,r.connect(o),o.connect(a),a.connect(this.master),r.start(t),r.stop(t+.2)}powerUp(){if(!this.ensure())return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(1760,t+.6);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(500,t),n.frequency.exponentialRampToValueAtTime(5e3,t+.5);const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.06,t+.08),s.gain.exponentialRampToValueAtTime(1e-4,t+.72),e.connect(n),n.connect(s),s.connect(this.master),s.connect(this.reverb),e.start(t),e.stop(t+.75)}startMusic(){this.ensure()&&(this.musicPlaying&&this.stopMusic(.2),this.musicPlaying=!0,this.step=0,this.bar=0,this.nextStepTime=this.ctx.currentTime+.08,this.startTime=this.nextStepTime,this.musicBus.gain.cancelScheduledValues(this.ctx.currentTime),this.musicBus.gain.setValueAtTime(.52,this.ctx.currentTime),this.timer=setInterval(()=>this.scheduler(),25),this.scheduler())}stopMusic(t=.6){if(!this.ctx)return;this.musicPlaying=!1,this.timer&&clearInterval(this.timer),this.timer=null;const e=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setValueAtTime(this.musicBus.gain.value,e),this.musicBus.gain.linearRampToValueAtTime(1e-4,e+t)}duck(t){if(!this.ctx)return;const e=this.ctx.currentTime;this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.linearRampToValueAtTime(t?.17:.52,e+.25)}scheduler(){if(!(!this.musicPlaying||this.ctx.state!=="running"))for(;this.nextStepTime<this.ctx.currentTime+.14;)this.scheduleStep(this.step,this.nextStepTime),this.nextStepTime+=ah,this.step++,this.step%64===0&&this.bar++}scheduleStep(t,e){const n=t%16,s=Math.floor(t/16)%4;this.musicBus,(n===0||n===4||n===8||n===12||n===14)&&this.kick(e,n===14?.34:.47),(n===4||n===12)&&this.snare(e,.18),n%2===0&&this.hat(e,n%4===0?.045:.028,.04),(n===2||n===6||n===10||n===14)&&this.hat(e,.034,.11,!0);const r=[47,43,50,45],a=[[59,62,66],[55,59,62],[62,66,69],[57,61,64]],o=r[s],l=a[s];if(n%2===0){const h=n===6||n===14?12:0;this.bass(e,Ns(o+h),.24,.075)}if(n===2||n===6||n===10||n===14)for(const h of l)this.pluck(e,Ns(h),.18,.014,"triangle");if(n===0)for(const h of l)this.pad(e,Ns(h+12),ah*15.8,.019);const c=[0,1,2,1,2,0,1,2];if(n%2===0&&n>=4){const h=l[c[(n/2-2)%c.length]]+12;this.pluck(e,Ns(h),.12,.012,"sine")}const f=[[0,78],[3,81],[6,83],[10,81],[12,78]];if(s%2===0){const h=f.find(([d])=>d===n);h&&this.pluck(e,Ns(h[1]),.3,.018,"triangle")}}kick(t,e){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(155,t),n.frequency.exponentialRampToValueAtTime(41,t+.16),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(e,t+.005),s.gain.exponentialRampToValueAtTime(1e-4,t+.3),n.connect(s),s.connect(this.musicBus),n.start(t),n.stop(t+.32)}snare(t,e){const n=this.ctx.createBufferSource();n.buffer=this.noise;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=1700,s.Q.value=.7;const r=this.ctx.createGain();r.gain.setValueAtTime(e,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.16),n.connect(s),s.connect(r),r.connect(this.musicBus),r.connect(this.reverb),n.start(t),n.stop(t+.18)}hat(t,e,n,s=!1){const r=this.ctx.createBufferSource();r.buffer=this.noise;const a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.value=6800;const o=this.ctx.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(a),a.connect(o),o.connect(this.musicBus),r.start(t),r.stop(t+n+.02)}bass(t,e,n,s){const r=this.ctx.createOscillator(),a=this.ctx.createBiquadFilter(),o=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(e,t),a.type="lowpass",a.Q.value=5,a.frequency.setValueAtTime(380,t),a.frequency.exponentialRampToValueAtTime(165,t+n),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(s,t+.015),o.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(a),a.connect(o),o.connect(this.musicBus),r.start(t),r.stop(t+n+.02)}pluck(t,e,n,s,r){const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=r,a.frequency.setValueAtTime(e,t),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(s,t+.012),o.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(o),o.connect(this.musicBus),o.connect(this.reverb),a.start(t),a.stop(t+n+.02)}pad(t,e,n,s){for(const r of[-7,0,7]){const a=this.ctx.createOscillator(),o=this.ctx.createBiquadFilter(),l=this.ctx.createGain();a.type="sawtooth",a.frequency.setValueAtTime(e,t),a.detune.value=r,o.type="lowpass",o.frequency.setValueAtTime(750,t),o.frequency.linearRampToValueAtTime(1350,t+n*.5),o.frequency.linearRampToValueAtTime(620,t+n),l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(s,t+.28),l.gain.linearRampToValueAtTime(1e-4,t+n),a.connect(o),o.connect(l),l.connect(this.musicBus),l.connect(this.reverb),a.start(t),a.stop(t+n+.05)}}}const Vt=i=>document.querySelector(i),nt={menu:Vt("#menu"),hud:Vt("#hud"),score:Vt("#score"),distance:Vt("#distance"),multiplier:Vt("#multiplier"),zoneName:Vt("#zone-name"),lives:Vt("#lives"),styleFill:Vt("#style-fill"),styleValue:Vt("#style-value"),comboBadge:Vt("#combo-badge"),combo:Vt("#combo"),superBadge:Vt("#super-badge"),superTime:Vt("#super-time"),judgement:Vt("#judgement"),zoneBanner:Vt("#zone-banner"),zoneBannerTitle:Vt("#zone-banner-title"),tutorialTip:Vt("#tutorial-tip"),poseBtn:Vt(".pose-btn"),poseSub:Vt(".pose-sub"),countdown:Vt("#countdown"),countdownValue:Vt("#countdown-value"),pauseScreen:Vt("#pause-screen"),howScreen:Vt("#how-screen"),gameoverScreen:Vt("#gameover-screen"),flash:Vt("#flash"),toast:Vt("#toast"),menuBest:Vt("#menu-best"),castIndex:Vt("#cast-index"),lookName:Vt("#menu-look-name"),resultRank:Vt("#result-rank"),resultTitle:Vt("#result-title"),resultCopy:Vt("#result-copy"),finalScore:Vt("#final-score"),finalDistance:Vt("#final-distance"),finalCombo:Vt("#final-combo"),bestCallout:Vt("#best-callout"),soundBtn:Vt("#btn-menu-sound"),pauseBtn:Vt("#btn-pause"),rotateHint:Vt("#rotate-hint")},nr=[-1.55,0,1.55],G_=128,Rl=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,Zi=Rl||innerWidth<860,_s=typeof navigator.vibrate=="function",ls={get(i,t){try{return localStorage.getItem(i)??t}catch{return t}},set(i,t){try{localStorage.setItem(i,t)}catch{}}},rt={state:"menu",selected:"mika",best:Number(ls.get("femboys.best","0"))||0,time:0,menuSpin:0,menuCharX:0,shake:0,flashPulse:0,lastHud:{},countdownTimers:[],tutorialTimer:null,bannerTimer:null,toastTimer:null,gameoverTimer:null,currentZone:0,gameoverTurn:0},P={lane:1,targetLane:1,playerX:0,y:0,vy:0,onGround:!0,speed:11.5,distance:0,score:0,combo:0,bestCombo:0,multiplier:1,lives:3,style:0,superTime:0,invuln:0,runTime:0,spawnTimer:2,pose:{active:!1,start:0,target:0,next:7.5,result:""},obstacles:[],tokens:[],zone:0,jumpFlash:0,gameover:!1};let ln,Ki,ze,_e,ue,Xe,te,Je,cn,Qo,oh;const H_=new bd,cs=new I(-.4,2.8,8.5),hs=new I(0,1.55,0),vi=new I,Mi=new I,Kt=new k_;function V_(){const i=Vt("#stage");ln=new __({antialias:!Zi,powerPreference:"high-performance",alpha:!1,stencil:!1}),ln.setPixelRatio(Math.min(window.devicePixelRatio||1,Zi?1.65:2)),ln.setSize(window.innerWidth,window.innerHeight),ln.outputColorSpace=qe,ln.toneMapping=da,ln.toneMappingExposure=.98,ln.domElement.setAttribute("aria-label","FEMBOYS 3D runway"),ln.domElement.setAttribute("role","img"),i.appendChild(ln.domElement),ze=new Lh,ze.background=new Ht("#100313"),ze.fog=new gl("#230a2b",.0068),_e=new vn(46,window.innerWidth/window.innerHeight,.1,300),_e.position.copy(cs),_e.lookAt(hs);const t=new er(ln);oh=t.fromScene(new A_,.04).texture,ze.environment=oh,t.dispose(),ue=new L_(ze,{isMobile:Zi}),ue.setPalette(0,!0),ue.setMode("menu"),te=uu(rt.selected,{scale:1}),te.root.visible=!1,ze.add(te.root),fu(rt.selected,!1);const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,245,190,0.9)"),s.addColorStop(.3,"rgba(255,227,110,0.35)"),s.addColorStop(1,"rgba(255,227,110,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);const r=new ps(e);Je=new _l(new ma({map:r,color:"#ffe36e",transparent:!0,opacity:.8,blending:xn,depthWrite:!1,toneMapped:!1})),Je.scale.set(4.5,4.5,1),Je.visible=!1,ze.add(Je),cn=new Ct(new _a(1,1.08,48),new Re({color:"#ffe36e",transparent:!0,opacity:.55,side:en,blending:xn,depthWrite:!1,toneMapped:!1})),cn.rotation.x=-Math.PI/2,cn.visible=!1,ze.add(cn),Ki=new b_(ln),Ki.addPass(new T_(ze,_e)),Qo=new os(new J(window.innerWidth,window.innerHeight),Zi?.34:.45,Zi?.35:.48,.78),Ki.addPass(Qo),Ki.addPass(new w_),Cl(),rr(0,!0)}function uu(i,t={}){const e=new lu(i,t);return e.root.rotation.y=Math.PI,e.root.position.set(0,.06,0),e}function fu(i,t=!0){Xe&&(Xe.dispose(),Xe=null),Xe=new lu(i,{scale:1}),Xe.root.position.set(rt.menuCharX,.035,0),Xe.root.rotation.y=t?-Math.PI*2:0,Xe.setMenu(!0),ze.add(Xe.root),t&&(rt.menuSpin=.8)}function W_(i){te&&(te.root.visible=!1,te.dispose()),te=uu(i),te.root.visible=!1,ze.add(te.root)}function X_(){return innerHeight>innerWidth*1.06}function rr(i=0,t=!1){const e=X_(),n=e?9:window.innerHeight<700?7.5:8.2,s=e?1.86:window.innerHeight<700?1.62:1.52,r=e?2.55:2.7,a=rt.menuCharX,o=e?0:-1.05;vi.set(a+o+Math.sin(rt.time*.22)*.05,r+Math.sin(rt.time*.5)*.015,n),Mi.set(a+o,s,0);const l=e?44:43;if(t)cs.copy(vi),hs.copy(Mi),_e.fov=l,_e.updateProjectionMatrix();else{const c=1-Math.exp(-i*2.4);cs.lerp(vi,c),hs.lerp(Mi,c),_e.fov+=(l-_e.fov)*(1-Math.exp(-i*2.2)),_e.updateProjectionMatrix()}}function Cl(){ln.setPixelRatio(Math.min(window.devicePixelRatio||1,Zi?1.65:2)),ln.setSize(window.innerWidth,window.innerHeight),Ki.setSize(window.innerWidth,window.innerHeight),Qo?.setSize(window.innerWidth,window.innerHeight),_e.aspect=window.innerWidth/window.innerHeight,_e.aspect<.7?_e.fov=50:_e.aspect<1.1?_e.fov=47:_e.fov=46,_e.updateProjectionMatrix(),rt.state==="menu"&&rr(0,!0),nt.rotateHint.classList.toggle("is-hidden",!(Rl&&innerWidth>innerHeight&&innerHeight<480))}window.addEventListener("resize",()=>{ln&&Cl()});const q_=["mika","jules","ren"];function Pl(){const i=q_.indexOf(rt.selected)+1;nt.castIndex.textContent=String(i).padStart(2,"0")+" / 03",nt.lookName.textContent=`LOOK 0${i} — ${Ei[rt.selected].look}`,nt.menuBest.textContent=us(rt.best),document.querySelectorAll(".cast-card").forEach(t=>{const e=t.dataset.cast===rt.selected;t.classList.toggle("is-selected",e),t.setAttribute("aria-checked",String(e))})}function Y_(i){!Ei[i]||rt.state==="playing"||rt.state==="countdown"||(rt.selected=i,ls.set("femboys.look",i),Kt.ensure(),Kt.click(),fu(i,!0),W_(i),Pl(),rt.flashPulse=.4)}function lh(i){Kt.setMuted(i),document.body.classList.toggle("is-muted",i),nt.soundBtn.setAttribute("aria-pressed",String(i)),nt.soundBtn.setAttribute("aria-label",i?"Unmute sound":"Mute sound"),ls.set("femboys.muted",i?"1":"0")}function Ll(){for(const i of rt.countdownTimers)clearTimeout(i);rt.countdownTimers=[]}function Us(){if(rt.state==="countdown"||rt.state==="playing"||rt.state==="paused")return;Kt.ensure(),Kt.swoosh(),Ll(),J_(),rt.state="countdown",nt.menu.classList.add("is-hidden"),nt.hud.classList.remove("is-hidden"),nt.howScreen.classList.add("is-hidden"),nt.gameoverScreen.classList.add("is-hidden"),nt.pauseScreen.classList.add("is-hidden"),nt.countdown.classList.remove("is-hidden"),nt.tutorialTip.classList.remove("is-on"),Xe&&(Xe.root.visible=!1),te.root.visible=!0,te.root.rotation.y=Math.PI,te.root.position.set(0,.06,0),te.visible=!0,ue.setMode("play"),ue.setPalette(0,!0),ue.heroSet.visible=!1,ue.playerSpot.position.x=0,ue.playerSpot.target.position.x=0;let i=0;const t=["3","2","1","SHOW!"],e=()=>{const n=t[i];nt.countdownValue.textContent=n,nt.countdownValue.classList.remove("pop"),nt.countdownValue.offsetWidth,nt.countdownValue.classList.add("pop"),n!=="SHOW!"?(Kt.blip(440+i*110,.12,"triangle",.05),nt.countdown.style.setProperty("--grow","0")):Kt.poseResult("great"),i++,i<t.length&&rt.countdownTimers.push(setTimeout(e,760))};e(),rt.countdownTimers.push(setTimeout(Z_,2860))}function Z_(){Ll(),rt.state="playing",P.runTime=0,P.startedAt=performance.now(),nt.countdown.classList.add("is-hidden"),Kt.startMusic(),nt.tutorialTip.classList.add("is-on"),clearTimeout(rt.tutorialTimer),rt.tutorialTimer=setTimeout(()=>nt.tutorialTip.classList.remove("is-on"),5200)}function J_(){pu(),P.lane=1,P.targetLane=1,P.playerX=0,P.y=0,P.vy=0,P.onGround=!0,P.speed=11.5,P.distance=0,P.score=0,P.combo=0,P.bestCombo=0,P.multiplier=1,P.lives=3,P.style=0,P.superTime=0,P.invuln=0,P.runTime=0,P.spawnTimer=2.1,P.pose.active=!1,P.pose.next=7.5,P.pose.result="",P.zone=0,P.gameover=!1,P.jumpFlash=0,rt.shake=0,rt.currentZone=0,rt.lastHud={},te?.resetRun(),te.root.rotation.y=Math.PI,te.root.rotation.z=0,Je&&(Je.visible=!1),cn&&(cn.visible=!1),ue&&(ue.setPalette(0,!0),ue.setMode("play"),ue.heroSet.visible=!1,ue.playerSpot.position.x=0,ue.playerSpot.target.position.x=0),nt.score.textContent="000 000",nt.distance.textContent="000 M",nt.zoneName.textContent="AFTERGLOW",nt.styleFill.style.width="0%",nt.styleValue.textContent="0%",nt.multiplier.textContent="×1",nt.comboBadge.classList.remove("is-on"),nt.superBadge.classList.remove("is-on"),nt.poseBtn.classList.remove("is-ready","is-hit"),nt.poseBtn.style.setProperty("--p","0"),nt.poseSub.textContent="ON BEAT",nt.judgement.classList.remove("show","is-miss"),mu(),ar(!0)}function Fs(i){if(rt.state!=="playing")return;const t=Math.max(0,Math.min(2,P.targetLane+i));t!==P.targetLane&&(P.targetLane=t,Kt.blip(320+i*60,.035,"sine",.02))}function Wr(){rt.state==="playing"&&P.onGround&&(P.onGround=!1,P.vy=7,P.jumpFlash=.25,te.triggerPose(),Kt.blip(555,.08,"triangle",.028),_s&&navigator.vibrate(8))}function ch(){if(rt.state!=="playing")return;if(!P.pose.active){te.triggerPose(),$i(1.2),Kt.blip(820,.06,"sine",.025);return}const i=P.pose.target-P.runTime;if(i>.6){te.triggerPose(),xs("WAIT FOR THE BEAT"),Kt.blip(360,.05,"sine",.025);return}const t=Math.abs(i);let e="good",n=180;t<=.13?(e="perfect",n=720):t<=.29&&(e="great",n=410),P.pose.active=!1,P.pose.result=e,nt.poseBtn.classList.remove("is-ready"),nt.poseBtn.classList.add("is-hit"),setTimeout(()=>nt.poseBtn.classList.remove("is-hit"),380),e==="perfect"?(P.combo+=3,$i(16),vs(!0),ue.burstConfetti(110,Ei[rt.selected].accent),es("PERFECT",!1),Kt.poseResult("perfect"),_s&&navigator.vibrate([10,25,18])):e==="great"?(P.combo+=2,$i(10),es("GREAT",!1),Kt.poseResult("great")):(P.combo+=1,$i(5),es("GOOD",!1),Kt.poseResult("good")),P.bestCombo=Math.max(P.bestCombo,P.combo),P.score+=n*P.multiplier*(P.superTime>0?2:1),te.triggerPose(),P.combo>=8&&ue.burstConfetti(22),du(),ar()}function du(){P.pose.next=P.runTime+7.5+Math.random()*.35,P.pose.active=!1}function K_(){P.pose.active=!0,P.pose.start=P.runTime,P.pose.target=P.pose.next,P.pose.result="",nt.poseBtn.classList.add("is-ready"),nt.poseSub.textContent="GET READY",Kt.blip(1046,.06,"triangle",.025)}function $_(){P.pose.active&&(P.pose.active=!1,P.pose.result="miss",nt.poseBtn.classList.remove("is-ready"),nt.poseBtn.style.setProperty("--p","0"),nt.poseSub.textContent="ON BEAT",es("MISSED THE BEAT",!0),P.combo=0,$i(-8),Kt.blip(220,.14,"sawtooth",.03),du(),ar())}function Q_(i){P.runTime+=i;const t=Math.min(1,P.distance/900),e=P.superTime>0?1.8:0,n=11.3+t*8.8+e;P.speed+=(n-P.speed)*Math.min(1,i*1.4),P.distance+=P.speed*i,P.score+=P.speed*i*4.1*(P.superTime>0?2:1),P.invuln=Math.max(0,P.invuln-i),P.jumpFlash=Math.max(0,P.jumpFlash-i);const s=nr[P.targetLane];P.playerX+=(s-P.playerX)*Math.min(1,i*13),Math.abs(s-P.playerX)<.004&&(P.playerX=s),(P.y>0||P.vy>0)&&(P.vy-=20.5*i,P.y+=P.vy*i,P.y<=0&&(P.y=0,P.vy=0,P.onGround=!0));const r=(P.playerX-s)*.12;if(te.root.position.set(P.playerX,.06+P.y,0),te.root.rotation.z+=(r-te.root.rotation.z)*Math.min(1,i*9),P.spawnTimer-=i,P.spawnTimer<=0){sx();const a=Math.max(1.55,2.75-t*.95);P.spawnTimer=a+Math.random()*.55}rx(i),lx(i),j_(),tx(i),nx(),ue.playerSpot.position.x+=(P.playerX*.8-ue.playerSpot.position.x)*Math.min(1,i*4),ue.playerSpot.target.position.x+=(P.playerX*.55-ue.playerSpot.target.position.x)*Math.min(1,i*4),ar()}function j_(i){if(!P.pose.active&&P.runTime>=P.pose.next-1.35&&K_(),P.pose.active){const t=P.pose.target-P.runTime;if(t<-.34){$_();return}const e=Math.max(0,Math.min(1,1-t/1.35));nt.poseBtn.style.setProperty("--p",e.toFixed(3)),t<=.58&&nt.poseSub.textContent!=="TAP NOW"&&(nt.poseSub.textContent="TAP NOW")}}function tx(i){if(P.superTime<=0){Je.visible&&P.style<=.2&&(Je.visible=!1,cn.visible=!1);return}P.superTime=Math.max(0,P.superTime-i),P.style=P.superTime/8*100,Je.visible=!0,cn.visible=!0,Je.position.set(P.playerX,1.25+P.y,.45),cn.position.set(P.playerX,.09+P.y,0);const t=1+Math.sin(rt.time*8)*.08;Je.scale.set(4.7*t,5.2*t,1),Je.material.opacity=.65+Math.sin(rt.time*10)*.15,cn.scale.setScalar(1+Math.sin(rt.time*7)*.12),P.superTime<=0&&(P.style=0,Je.visible=!1,cn.visible=!1,nt.superBadge.classList.remove("is-on"),xs("THE LIGHTS FADE — KEEP SHINING"))}function ex(){P.superTime>0||(P.superTime=8,P.style=100,nt.superBadge.classList.add("is-on"),nt.superBadge.querySelector("#super-time").textContent="8.0",vs(!0),ue.burstConfetti(180,"#ffe36e"),es("SUPERSTAR",!1),xs("SUPERSTAR MODE — EVERYTHING GLOWS"),Kt.powerUp(),_s&&navigator.vibrate([15,30,25,20,30]))}function $i(i){P.superTime>0&&i>0||(P.style=Math.max(0,Math.min(100,P.style+i)),P.style>=100&&ex())}function nx(){let i=!1;for(;P.zone<so.length-1&&P.distance>=so[P.zone+1].at;)P.zone++,i=!0;if(!i)return;const t=so[P.zone];rt.currentZone=P.zone,ue.setPalette(t.index),nt.zoneName.textContent=t.name,nt.zoneBannerTitle.textContent=t.name,nt.zoneBanner.classList.add("is-on"),clearTimeout(rt.bannerTimer),rt.bannerTimer=setTimeout(()=>nt.zoneBanner.classList.remove("is-on"),2400),Kt.powerUp(),xs(`${t.name} — NEW RUNWAY, SAME ICON`),vs(!1,!0)}function pu(){for(const i of P.obstacles)i.mesh&&ze.remove(i.mesh);for(const i of P.tokens)i.mesh&&ze.remove(i.mesh);P.obstacles.length=0,P.tokens.length=0}function Xr(i,t){const e=F_();e.position.set(nr[i],.02,t),ze.add(e),P.obstacles.push({type:"crate",lane:i,x:nr[i],z:t,mesh:e,checked:!1})}function ix(i){const t=O_();t.position.set(0,.02,i),ze.add(t),P.obstacles.push({type:"hurdle",lane:1,x:0,z:i,mesh:t,checked:!1})}function jo(i,t,e=!1){const n=B_(e);n.position.set(nr[i],e?1.25:1.08,t),ze.add(n),P.tokens.push({lane:i,x:nr[i],z:t,mesh:n,big:e,collected:!1})}function qi(i,t,e=5,n=2.2){for(let s=0;s<e;s++)jo(i,t-s*n,s===2&&Math.random()>.82)}function sx(){const i=Math.min(1,P.distance/800),t=Math.random();if(P.distance<45){qi(1,-58,5,2.3);return}if(t<.22){ix(-58),Math.random()>.35&&qi(1,-44,3,2.1);return}if(t<.46){const e=Math.floor(Math.random()*3);for(let n=0;n<3;n++)n!==e&&Xr(n,-60-Math.random()*2);qi(e,-56,5,2.25);return}if(t<.66){const e=Math.floor(Math.random()*3);Xr(e,-58);let n=(e+1+Math.floor(Math.random()*2))%3;qi(n,-64,4,2.3);return}if(t<.82){(Math.random()>.5?[0,1,2,1,0]:[2,1,0,1,2]).forEach((n,s)=>jo(n,-62-s*3.1,s===2&&i>.45));return}if(i>.25&&t<.92){const e=Math.floor(Math.random()*3),n=(e+1+Math.floor(Math.random()*2))%3;Xr(e,-62),Xr(n,-45);const s=[0,1,2].find(r=>r!==e&&r!==n);s!==void 0&&qi(s,-54,3,2.1);return}qi(Math.floor(Math.random()*3),-58,4,2.4),Math.random()>.72&&jo(1,-41,!0)}function rx(i){for(let t=P.obstacles.length-1;t>=0;t--){const e=P.obstacles[t];if(e.z+=P.speed*i,e.mesh.position.z=e.z,e.type==="crate"&&e.mesh.children.forEach(n=>{n.userData.marker&&(n.rotation.y+=i*3,n.position.y=1.08+Math.sin(rt.time*4)*.06)}),!e.checked&&e.z>-.72&&e.z<.82){if(e.checked=!0,P.superTime>0&&e.type==="crate"){P.score+=160*P.multiplier,ue.burstConfetti(12,"#ffe36e"),ro(t);continue}if(ax(e)){ox(),ro(t);continue}}e.z>13&&ro(t)}}function ax(i){if(P.invuln>0)return!1;const t=Math.abs(P.playerX-i.x);return i.type==="hurdle"?P.y<.52:t<.74&&P.y<.7}function ro(i){const t=P.obstacles[i];t&&(ze.remove(t.mesh),P.obstacles.splice(i,1))}function ox(i){P.invuln>0||(P.lives--,P.combo=0,P.multiplier=1,P.invuln=1.8,P.style=Math.max(0,P.style-24),P.speed=Math.max(9.5,P.speed-1.8),rt.shake=.42,te.triggerHit(),vs(!1,!1,!0),es(P.lives>0?"STUMBLE":"SHOW STOPPER",!0),xs(P.lives>0?"KEEP YOUR HEAD UP":"THE CROWD GASPS"),Kt.hit(),_s&&navigator.vibrate([30,40,60]),mu(),ar(),P.lives<=0&&ux())}function lx(i){for(let t=P.tokens.length-1;t>=0;t--){const e=P.tokens[t];if(e.z+=P.speed*i,e.mesh.position.z=e.z,e.mesh.rotation.y+=i*(e.big?2.8:2.2),e.mesh.position.y=(e.big?1.25:1.08)+Math.sin(rt.time*3.4+t)*.08,e.mesh.userData.spin&&(e.mesh.userData.spin.ring.rotation.z+=i*1.6,e.mesh.userData.spin.glow.material.opacity=.4+Math.sin(rt.time*5+t)*.16),!e.collected&&e.z>-.7&&e.z<.85&&Math.abs(P.playerX-e.x)<.72){e.collected=!0,cx(e),ze.remove(e.mesh),P.tokens.splice(t,1);continue}e.z>13&&(ze.remove(e.mesh),P.tokens.splice(t,1))}}function cx(i){P.combo+=i.big?3:1,P.bestCombo=Math.max(P.bestCombo,P.combo),P.score+=(i.big?220:55)*P.multiplier*(P.superTime>0?2:1),$i(i.big?16:2.2),Kt.collect(Math.min(3,P.combo%4)),i.big&&(vs(!0),ue.burstConfetti(36,"#ffe36e"),xs("ICONIC ✦ +"+Math.round(220*P.multiplier))),_s&&i.big&&navigator.vibrate(12)}function ar(i=!1){const t=Math.floor(P.score),e=Math.floor(P.distance),n=Math.min(8,1+Math.floor(P.combo/10));if((i||rt.lastHud.score!==t)&&(nt.score.textContent=us(t),rt.lastHud.score=t),(i||rt.lastHud.distance!==e)&&(nt.distance.textContent=String(e).padStart(3,"0")+" M",rt.lastHud.distance=e),(i||rt.lastHud.multiplier!==n)&&(nt.multiplier.textContent=`×${n}`,n!==P.multiplier&&(nt.multiplier.classList.remove("bump"),nt.multiplier.offsetWidth,nt.multiplier.classList.add("bump")),P.multiplier=n,rt.lastHud.multiplier=n),(i||rt.lastHud.combo!==P.combo)&&(nt.combo.textContent=String(P.combo),nt.comboBadge.classList.toggle("is-on",P.combo>=3),rt.lastHud.combo=P.combo),i||rt.lastHud.style!==P.style){const s=Math.max(0,Math.min(100,P.style));nt.styleFill.style.width=s+"%",nt.styleValue.textContent=Math.round(s)+"%",nt.styleFill.style.background=P.superTime>0?"linear-gradient(90deg, #ffe36e, #ffb23f)":"linear-gradient(90deg, var(--pink), var(--gold))",nt.superTime.textContent=P.superTime.toFixed(1),rt.lastHud.style=P.style}}function mu(){nt.lives.querySelectorAll(".heart").forEach((t,e)=>{const n=e<P.lives;t.classList.toggle("is-full",n),t.classList.remove("just-lost"),n||(t.offsetWidth,t.classList.add("just-lost"))}),nt.lives.setAttribute("aria-label",`${P.lives} of 3 hearts remaining`)}function hx(i,t){return i>=6e4||t>=1600?["SUPERSTAR","THE SHOW IS YOURS.","You didn’t walk the runway. You rewrote it."]:i>=3e4||t>=1e3?["IT GIRL","YOU ATE.","The front row is still on their feet."]:i>=15e3||t>=620?["FRONT ROW","MOMENT MADE.","A run so good the cameras forgot to blink."]:i>=6e3||t>=300?["RISING STAR","BEAUTIFUL WORK.","The lights loved you. The crowd loved you more."]:["NEW FACE","A STAR IS BORN.","Every icon starts with one unforgettable step."]}function ux(){if(rt.state==="gameover")return;rt.state="gameover",P.gameover=!0,P.pose.active=!1,nt.poseBtn.classList.remove("is-ready"),nt.poseBtn.style.setProperty("--p","0"),nt.poseSub.textContent="ON BEAT",nt.tutorialTip.classList.remove("is-on"),Kt.stopMusic(.8),Kt.poseResult("great"),ue.burstConfetti(160,Ei[rt.selected].accent),rt.gameoverTurn=0;const i=Math.floor(P.score),t=i>rt.best;t&&(rt.best=i,ls.set("femboys.best",String(rt.best)));const[e,n,s]=hx(i,P.distance);nt.resultRank.textContent=e,nt.resultTitle.textContent=n,nt.resultCopy.textContent=s,nt.finalScore.textContent=us(i),nt.finalDistance.textContent=String(Math.floor(P.distance)).padStart(3,"0")+" M",nt.finalCombo.textContent=String(P.bestCombo),nt.bestCallout.textContent="NEW PERSONAL BEST";const r=document.createElement("span");r.textContent=" ✦",nt.bestCallout.appendChild(r),nt.bestCallout.classList.toggle("is-on",t),nt.menuBest.textContent=us(rt.best),clearTimeout(rt.gameoverTimer),rt.gameoverTimer=setTimeout(()=>{nt.gameoverScreen.classList.remove("is-hidden"),t&&(ue.burstConfetti(220,"#ffe36e"),vs(!1,!0))},520),_s&&navigator.vibrate([30,50,80])}function qr(i=!1){rt.state==="playing"&&(rt.state="paused",Kt.duck(!0),nt.pauseScreen.classList.remove("is-hidden"),i&&(nt.pauseScreen.querySelector(".modal-kicker").textContent="TAKE FIVE"))}function hh(){if(rt.state==="paused"&&(rt.state="playing",Kt.duck(!1),nt.pauseScreen.classList.add("is-hidden"),P.pose.active)){const i=Math.max(.35,P.pose.target-P.runTime);P.pose.target=P.runTime+i,P.pose.next=P.pose.target}}function uh(){Ll(),clearTimeout(rt.gameoverTimer),clearTimeout(rt.tutorialTimer),clearTimeout(rt.bannerTimer),Kt.stopMusic(.35),Kt.duck(!1),rt.state="menu",P.gameover=!1,P.superTime=0,pu(),nt.pauseScreen.classList.add("is-hidden"),nt.gameoverScreen.classList.add("is-hidden"),nt.howScreen.classList.add("is-hidden"),nt.countdown.classList.add("is-hidden"),nt.hud.classList.add("is-hidden"),nt.menu.classList.remove("is-hidden"),nt.zoneBanner.classList.remove("is-on"),nt.tutorialTip.classList.remove("is-on"),te&&(te.root.visible=!1),Xe&&(Xe.root.visible=!0,Xe.root.position.set(rt.menuCharX,.035,0),Xe.root.rotation.y=0),Je&&(Je.visible=!1),cn&&(cn.visible=!1),ue.setMode("menu"),ue.setPalette(0,!0),ue.heroSet.visible=!0,ue.heroSet.position.x=rt.menuCharX,ue.playerSpot.position.x=0,ue.playerSpot.target.position.x=0,nt.menuBest.textContent=us(rt.best),Pl(),rt.shake=0,rr(0,!1),nt.pauseScreen.querySelector(".modal-kicker").textContent="INTERMISSION"}function us(i){return String(Math.max(0,Math.floor(i))).padStart(6,"0").replace(/\B(?=(\d{3})+(?!\d))/g," ")}function es(i,t=!1){nt.judgement.textContent=i,nt.judgement.classList.remove("show","is-miss"),nt.judgement.offsetWidth,nt.judgement.classList.add("show"),t&&nt.judgement.classList.add("is-miss")}function xs(i,t=!1){nt.toast.textContent=i,nt.toast.classList.toggle("is-gold",t),nt.toast.classList.add("is-on"),clearTimeout(rt.toastTimer),rt.toastTimer=setTimeout(()=>nt.toast.classList.remove("is-on"),1800)}function vs(i=!1,t=!1,e=!1){nt.flash.classList.remove("flash","flash-pink"),nt.flash.offsetWidth,e||t?nt.flash.classList.add("flash-pink"):nt.flash.classList.add("flash")}function fx(i){const t=(_e.aspect<.78?56:48)+Math.max(0,P.speed-11)*.16+(P.superTime>0?2:0);vi.set(P.playerX*.22,3.35+Math.sin(rt.time*2)*.012,8.15+(P.speed-11)*.025),Mi.set(P.playerX*.32,1.3+P.y*.15,-4.4);const e=1-Math.exp(-i*2.8);cs.lerp(vi,e),hs.lerp(Mi,e),_e.fov+=(t-_e.fov)*(1-Math.exp(-i*2.2)),_e.updateProjectionMatrix()}function dx(i){if(rt.state==="menu"?rr(i,!1):rt.state==="gameover"?(vi.set(P.playerX*.1+.5,2.9,7.1),Mi.set(0,1.25,-.6),cs.lerp(vi,1-Math.exp(-i*1.4)),hs.lerp(Mi,1-Math.exp(-i*1.4)),_e.fov+=(43-_e.fov)*(1-Math.exp(-i*1.4)),_e.updateProjectionMatrix()):fx(i),_e.position.copy(cs),rt.shake>0){rt.shake=Math.max(0,rt.shake-i*1.4);const t=rt.shake*rt.shake;_e.position.x+=(Math.random()-.5)*t*.9,_e.position.y+=(Math.random()-.5)*t*.6,_e.position.z+=(Math.random()-.5)*t*.35}rt.state==="playing"&&(_e.position.y+=Math.sin(P.runTime*8)*.007),_e.lookAt(hs),_e.rotation.z+=0}function gu(){requestAnimationFrame(gu);const i=Math.min(H_.getDelta(),.045);rt.time+=i;const t=rt.time*G_/60,e=Math.max(0,1-t%1)**3;if(rt.state==="menu"){if(ue.update(i,rt.time,2.5,e),ue.heroSet.position.x=rt.menuCharX,Xe)if(Xe.update(i,"menu",{speed:0}),rt.menuSpin>0){rt.menuSpin=Math.max(0,rt.menuSpin-i);const n=1-rt.menuSpin/.8,s=1-Math.pow(1-n,3);Xe.root.rotation.y=-Math.PI*2*(1-s)}else Xe.root.rotation.y=Math.sin(rt.time*.26)*.055}else if(rt.state==="gameover"){if(ue.update(i,rt.time,.7,e),te){const n=Math.min(1,i*2.2);te.root.rotation.y+=(0-te.root.rotation.y)*n,te.update(i,"menu",{speed:0}),te.root.position.x+=(0-te.root.position.x)*Math.min(1,i*4),te.root.position.y+=(.06-te.root.position.y)*Math.min(1,i*4)}Je.visible=!1,cn.visible=!1}else if(rt.state==="paused")te&&te.update(0,"run",{speed:P.speed,jumpY:P.y});else{rt.state==="playing"?Q_(i):rt.state==="countdown"&&(P.runTime+=i,P.speed=6.5,P.playerX+=(0-P.playerX)*Math.min(1,i*8),te.root.position.set(P.playerX,.06,0),te.root.rotation.y=Math.PI);const n=rt.state==="countdown"?6.5:P.speed;ue.update(i,rt.time,n,e),te&&te.update(i,"run",{speed:P.speed,jumpY:P.y}),P.superTime>0&&(Je.position.set(P.playerX,1.25+P.y,.45),cn.position.set(P.playerX,.09+P.y,0))}dx(i),Ki.render()}function px(){document.querySelectorAll(".cast-card").forEach(r=>{r.addEventListener("click",()=>Y_(r.dataset.cast))}),Vt("#btn-start").addEventListener("click",Us),Vt("#btn-how").addEventListener("click",()=>{Kt.ensure(),Kt.click(),nt.howScreen.classList.remove("is-hidden")}),Vt("#btn-how-close").addEventListener("click",()=>{Kt.click(),nt.howScreen.classList.add("is-hidden")}),Vt("#btn-how-play").addEventListener("click",()=>{Kt.click(),nt.howScreen.classList.add("is-hidden"),Us()}),nt.soundBtn.addEventListener("click",()=>{Kt.ensure(),lh(!Kt.muted),Kt.muted||Kt.click()}),nt.pauseBtn.addEventListener("click",()=>{Kt.click(),qr()}),Vt("#btn-resume").addEventListener("click",()=>{Kt.click(),hh()}),Vt("#btn-quit").addEventListener("click",()=>{Kt.click(),uh()}),Vt("#btn-again").addEventListener("click",()=>{Kt.click(),nt.gameoverScreen.classList.add("is-hidden"),Us()}),Vt("#btn-menu").addEventListener("click",()=>{Kt.click(),uh()}),document.querySelectorAll("[data-action]").forEach(r=>{const a=r.dataset.action,o=l=>{l.preventDefault(),a==="left"?Fs(-1):a==="right"?Fs(1):a==="jump"?Wr():a==="pose"&&ch(),r.classList.add("is-pressed"),setTimeout(()=>r.classList.remove("is-pressed"),110)};r.addEventListener("pointerdown",l=>{l.stopPropagation(),o(l)}),r.addEventListener("contextmenu",l=>l.preventDefault())});const i=ln.domElement;let t=0,e=0,n=0,s=!1;i.addEventListener("pointerdown",r=>{r.pointerType==="mouse"&&r.button!==0||(s=!0,t=r.clientX,e=r.clientY,n=performance.now(),i.setPointerCapture?.(r.pointerId))}),i.addEventListener("pointerup",r=>{if(!s||(s=!1,rt.state!=="playing"))return;const a=r.clientX-t,o=r.clientY-e,l=performance.now()-n;Math.abs(a)>36&&Math.abs(a)>Math.abs(o)*1.15?Fs(a>0?1:-1):(o<-34&&Math.abs(o)>Math.abs(a)||l<280&&Math.abs(a)<24&&Math.abs(o)<24)&&Wr()}),window.addEventListener("keydown",r=>{if(r.repeat)return;const a=r.key.toLowerCase();a==="arrowleft"||a==="a"?(r.preventDefault(),Fs(-1)):a==="arrowright"||a==="d"?(r.preventDefault(),Fs(1)):a==="arrowup"||a==="w"||a===" "?(r.preventDefault(),a===" "?ch():Wr()):a==="p"||a==="escape"?(r.preventDefault(),rt.state==="playing"?qr():rt.state==="paused"&&hh()):a==="enter"?rt.state==="menu"&&nt.howScreen.classList.contains("is-hidden")?Us():rt.state==="gameover"&&(nt.gameoverScreen.classList.add("is-hidden"),Us()):a==="m"&&lh(!Kt.muted)}),document.addEventListener("visibilitychange",()=>{document.hidden&&rt.state==="playing"&&qr(!0)}),window.addEventListener("blur",()=>{rt.state==="playing"&&!Rl&&qr(!0)}),document.addEventListener("gesturestart",r=>r.preventDefault()),document.addEventListener("dblclick",r=>r.preventDefault(),{passive:!1})}function mx(){const i=ls.get("femboys.look","mika");Ei[i]&&(rt.selected=i);const t=ls.get("femboys.muted","0")==="1";Kt.setMuted(t),document.body.classList.toggle("is-muted",t),nt.soundBtn.setAttribute("aria-pressed",String(t)),nt.soundBtn.setAttribute("aria-label",t?"Unmute sound":"Mute sound"),V_(),Pl(),px(),nt.menuBest.textContent=us(rt.best),Cl(),requestAnimationFrame(()=>{rr(0,!0),document.body.classList.add("is-ready")}),gu()}mx();
