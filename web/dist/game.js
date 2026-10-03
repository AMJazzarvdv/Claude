var oc=Object.defineProperty;var Wd=(r,t,e)=>t in r?oc(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Xd=(r,t)=>{for(var e in t)oc(r,e,{get:t[e],enumerable:!0})};var ac=(r,t,e)=>Wd(r,typeof t!="symbol"?t+"":t,e);var xh="160";var qd=0,lc=1,Yd=2;var Xu=1,vh=2,rn=3,Cn=0,Ze=1,me=2;var Yi=0,Tn=1,Li=2,hc=3,cc=4,Zd=5,Yn=100,$d=101,Jd=102,uc=103,dc=104,Kd=200,jd=201,Qd=202,tf=203,Sl=204,Tl=205,ef=206,nf=207,sf=208,rf=209,of=210,af=211,lf=212,hf=213,cf=214,uf=0,df=1,ff=2,po=3,pf=4,mf=5,gf=6,xf=7,qu=0,vf=1,yf=2,En=0,yh=1,_h=2,Mh=3,br=4,_f=5,bh=6;var Yu=300,Ds=301,Us=302,El=303,Al=304,Zo=306,fr=1e3,Bi=1001,Rl=1002,Ke=1003,fc=1004;var Oa=1005;var pi=1006,Mf=1007;var Qn=1008;var An=1009,bf=1010,wf=1011,wh=1012,Zu=1013,wn=1014,Sn=1015,wi=1016,$u=1017,Ju=1018,Jn=1020,Sf=1021,bi=1023,Tf=1024,Ef=1025,Kn=1026,Ns=1027,Af=1028,Ku=1029,Rf=1030,ju=1031,Qu=1033,Ha=33776,Ga=33777,Va=33778,Wa=33779,pc=35840,mc=35841,gc=35842,xc=35843,td=36196,vc=37492,yc=37496,_c=37808,Mc=37809,bc=37810,wc=37811,Sc=37812,Tc=37813,Ec=37814,Ac=37815,Rc=37816,Cc=37817,Pc=37818,Lc=37819,Ic=37820,Dc=37821,Xa=36492,Uc=36494,Nc=36495,Cf=36283,kc=36284,Fc=36285,zc=36286;var mo=2300,go=2301,qa=2302,Bc=2400,Oc=2401,Hc=2402;var ed=3e3,jn=3001,Pf=3200,Lf=3201,id=0,If=1,Pi="",Ee="srgb",hn="srgb-linear",Sh="display-p3",$o="display-p3-linear",xo="linear",ge="srgb",vo="rec709",yo="p3";var ls=7680;var Gc=519,Df=512,Uf=513,Nf=514,nd=515,kf=516,Ff=517,zf=518,Bf=519,Cl=35044,ss=35048;var Vc="300 es",Pl=1035,ln=2e3,_o=2001,Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ya=Math.PI/180,Ll=180/Math.PI;function Rn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(si[r&255]+si[r>>8&255]+si[r>>16&255]+si[r>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[e&63|128]+si[e>>8&255]+"-"+si[e>>16&255]+si[e>>24&255]+si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]).toLowerCase()}function je(r,t,e){return Math.max(t,Math.min(e,r))}function Of(r,t){return(r%t+t)%t}function Za(r,t,e){return(1-e)*r+e*t}function Wc(r){return(r&r-1)===0&&r!==0}function Il(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function an(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var tt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class r{constructor(t,e,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],y=n[1],v=n[4],M=n[7],C=n[2],E=n[5],T=n[8];return s[0]=a*x+o*y+l*C,s[3]=a*m+o*v+l*E,s[6]=a*p+o*M+l*T,s[1]=c*x+h*y+u*C,s[4]=c*m+h*v+u*E,s[7]=c*p+h*M+u*T,s[2]=d*x+f*y+g*C,s[5]=d*m+f*v+g*E,s[8]=d*p+f*M+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($a.makeScale(t,e)),this}rotate(t){return this.premultiply($a.makeRotation(-t)),this}translate(t,e){return this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$a=new Jt;function sd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Mo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hf(){let r=Mo("canvas");return r.style.display="block",r}var Xc={};function hr(r){r in Xc||(Xc[r]=!0,console.warn(r))}var qc=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yc=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kr={[hn]:{transfer:xo,primaries:vo,toReference:r=>r,fromReference:r=>r},[Ee]:{transfer:ge,primaries:vo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[$o]:{transfer:xo,primaries:yo,toReference:r=>r.applyMatrix3(Yc),fromReference:r=>r.applyMatrix3(qc)},[Sh]:{transfer:ge,primaries:yo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Yc),fromReference:r=>r.applyMatrix3(qc).convertLinearToSRGB()}},Gf=new Set([hn,$o]),le={enabled:!0,_workingColorSpace:hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Gf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=kr[t].toReference,n=kr[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return kr[r].primaries},getTransfer:function(r){return r===Pi?xo:kr[r].transfer}};function Ls(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ja(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var hs,bo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=Mo("canvas")),hs.width=t.width,hs.height=t.height;let i=hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Ls(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ls(e[i]/255)*255):e[i]=Ls(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vf=0,wo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Rn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Ka(n[a].image)):s.push(Ka(n[a]))}else s=Ka(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Ka(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wf=0,Si=class r extends Pn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Bi,n=Bi,s=pi,a=Qn,o=bi,l=An,c=r.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Rn(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===jn?Ee:Pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?jn:ed}set encoding(t){hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===jn?Ee:Pi}};Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=Yu;Si.DEFAULT_ANISOTROPY=1;var Ae=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,M=(f+1)/2,C=(p+1)/2,E=(h+d)/4,T=(u+x)/4,P=(g+m)/4;return v>M&&v>C?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=E/i,s=T/i):M>C?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=E/n,s=P/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=T/s,n=P/s),this.set(i,n,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dl=class extends Pn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(hr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===jn?Ee:Pi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Si(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new wo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends Dl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},So=class extends Si{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ul=class extends Si{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),E=Math.atan2(C,p*y);m=Math.sin(m*E)/C,o=Math.sin(o*E)/C}let M=o*y;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+x*M,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ja=new R,Zc=new $e,cn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ki):ki.fromBufferAttribute(s,a),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),zr.subVectors(this.max,Qs),cs.subVectors(t.a,Qs),us.subVectors(t.b,Qs),ds.subVectors(t.c,Qs),vn.subVectors(us,cs),yn.subVectors(ds,us),Gn.subVectors(cs,ds);let e=[0,-vn.z,vn.y,0,-yn.z,yn.y,0,-Gn.z,Gn.y,vn.z,0,-vn.x,yn.z,0,-yn.x,Gn.z,0,-Gn.x,-vn.y,vn.x,0,-yn.y,yn.x,0,-Gn.y,Gn.x,0];return!Qa(e,cs,us,ds,zr)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,cs,us,ds,zr))?!1:(Br.crossVectors(vn,yn),e=[Br.x,Br.y,Br.z],Qa(e,cs,us,ds,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qi=[new R,new R,new R,new R,new R,new R,new R,new R],ki=new R,Fr=new cn,cs=new R,us=new R,ds=new R,vn=new R,yn=new R,Gn=new R,Qs=new R,zr=new R,Br=new R,Vn=new R;function Qa(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Vn.fromArray(r,s);let o=n.x*Math.abs(Vn.x)+n.y*Math.abs(Vn.y)+n.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),h=i.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Xf=new cn,tr=new R,tl=new R,un=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Xf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(tr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(tl)),this.expandByPoint(tr.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},tn=new R,el=new R,Or=new R,_n=new R,il=new R,Hr=new R,nl=new R,pr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){el.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(el);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Or),o=_n.dot(this.direction),l=-_n.dot(Or),c=_n.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(el).addScaledVector(Or,d),f}intersectSphere(t,e){tn.subVectors(t.center,this.origin);let i=tn.dot(this.direction),n=tn.dot(tn)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,i,n,s){il.subVectors(e,t),Hr.subVectors(i,t),nl.crossVectors(il,Hr);let a=this.direction.dot(nl),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);let l=o*this.direction.dot(Hr.crossVectors(_n,Hr));if(l<0)return null;let c=o*this.direction.dot(il.cross(_n));if(c<0||l+c>a)return null;let h=-o*_n.dot(nl);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class r{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,g,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/fs.setFromMatrixColumn(t,0).length(),s=1/fs.setFromMatrixColumn(t,1).length(),a=1/fs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qf,t,Yf)}lookAt(t,e,i){let n=this.elements;return _i.subVectors(t,e),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Mn.crossVectors(i,_i),Mn.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Mn.crossVectors(i,_i)),Mn.normalize(),Gr.crossVectors(_i,Mn),n[0]=Mn.x,n[4]=Gr.x,n[8]=_i.x,n[1]=Mn.y,n[5]=Gr.y,n[9]=_i.y,n[2]=Mn.z,n[6]=Gr.z,n[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],v=i[7],M=i[11],C=i[15],E=n[0],T=n[4],P=n[8],_=n[12],w=n[1],U=n[5],F=n[9],Y=n[13],L=n[2],D=n[6],k=n[10],G=n[14],W=n[3],q=n[7],$=n[11],j=n[15];return s[0]=a*E+o*w+l*L+c*W,s[4]=a*T+o*U+l*D+c*q,s[8]=a*P+o*F+l*k+c*$,s[12]=a*_+o*Y+l*G+c*j,s[1]=h*E+u*w+d*L+f*W,s[5]=h*T+u*U+d*D+f*q,s[9]=h*P+u*F+d*k+f*$,s[13]=h*_+u*Y+d*G+f*j,s[2]=g*E+x*w+m*L+p*W,s[6]=g*T+x*U+m*D+p*q,s[10]=g*P+x*F+m*k+p*$,s[14]=g*_+x*Y+m*G+p*j,s[3]=y*E+v*w+M*L+C*W,s[7]=y*T+v*U+M*D+C*q,s[11]=y*P+v*F+M*k+C*$,s[15]=y*_+v*Y+M*G+C*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+x*(+e*l*f-e*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+m*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-n*o*h-e*l*u+e*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,v=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,M=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,C=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,E=e*y+i*v+n*M+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=y*T,t[1]=(x*d*s-u*m*s-x*n*f+i*m*f+u*n*p-i*d*p)*T,t[2]=(o*m*s-x*l*s+x*n*c-i*m*c-o*n*p+i*l*p)*T,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*T,t[4]=v*T,t[5]=(h*m*s-g*d*s+g*n*f-e*m*f-h*n*p+e*d*p)*T,t[6]=(g*l*s-a*m*s-g*n*c+e*m*c+a*n*p-e*l*p)*T,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*T,t[8]=M*T,t[9]=(g*u*s-h*x*s-g*i*f+e*x*f+h*i*p-e*u*p)*T,t[10]=(a*x*s-g*o*s+g*i*c-e*x*c-a*i*p+e*o*p)*T,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*T,t[12]=C*T,t[13]=(h*x*n-g*u*n+g*i*d-e*x*d-h*i*m+e*u*m)*T,t[14]=(g*o*n-a*x*n-g*i*l+e*x*l+a*i*m-e*o*m)*T,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*T,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,x=a*h,m=a*u,p=o*u,y=l*c,v=l*h,M=l*u,C=i.x,E=i.y,T=i.z;return n[0]=(1-(x+p))*C,n[1]=(f+M)*C,n[2]=(g-v)*C,n[3]=0,n[4]=(f-M)*E,n[5]=(1-(d+p))*E,n[6]=(m+y)*E,n[7]=0,n[8]=(g+v)*T,n[9]=(m-y)*T,n[10]=(1-(d+x))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=fs.set(n[0],n[1],n[2]).length(),a=fs.set(n[4],n[5],n[6]).length(),o=fs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Fi.copy(this);let c=1/s,h=1/a,u=1/o;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,e.setFromRotationMatrix(Fi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=ln){let l=this.elements,c=2*s/(e-t),h=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(o===ln)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===_o)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=ln){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-s),d=(e+t)*c,f=(i+n)*h,g,x;if(o===ln)g=(a+s)*u,x=-2*u;else if(o===_o)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},fs=new R,Fi=new jt,qf=new R(0,0,0),Yf=new R(1,1,1),Mn=new R,Gr=new R,_i=new R,$c=new jt,Jc=new $e,Ln=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $c.makeRotationFromQuaternion(t),this.setFromRotationMatrix($c,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var To=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zf=0,Kc=new R,ps=new $e,en=new jt,Vr=new R,er=new R,$f=new R,Jf=new $e,jc=new R(1,0,0),Qc=new R(0,1,0),tu=new R(0,0,1),Kf={type:"added"},jf={type:"removed"},Je=class r extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new R,e=new Ln,i=new $e,n=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new jt},normalMatrix:{value:new Jt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis(tu,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis(tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vr.copy(t):Vr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(er,Vr,this.up):en.lookAt(Vr,er,this.up),this.quaternion.setFromRotationMatrix(en),n&&(en.extractRotation(n.matrixWorld),ps.setFromRotationMatrix(en),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Kf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,$f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Je.DEFAULT_UP=new R(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=new R,nn=new R,sl=new R,sn=new R,ms=new R,gs=new R,eu=new R,rl=new R,ol=new R,al=new R,Wr=!1,$n=class r{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),zi.subVectors(t,e),n.cross(zi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){zi.subVectors(n,e),nn.subVectors(i,e),sl.subVectors(t,e);let a=zi.dot(zi),o=zi.dot(nn),l=zi.dot(sl),c=nn.dot(nn),h=nn.dot(sl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(t,e,i,n,s,a,o,l){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),this.getInterpolation(t,e,i,n,s,a,o,l)}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sn.x),l.addScaledVector(a,sn.y),l.addScaledVector(o,sn.z),l)}static isFrontFacing(t,e,i,n){return zi.subVectors(i,e),nn.subVectors(t,e),zi.cross(nn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),zi.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;ms.subVectors(n,i),gs.subVectors(s,i),rl.subVectors(t,i);let l=ms.dot(rl),c=gs.dot(rl);if(l<=0&&c<=0)return e.copy(i);ol.subVectors(t,n);let h=ms.dot(ol),u=gs.dot(ol);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ms,a);al.subVectors(t,s);let f=ms.dot(al),g=gs.dot(al);if(g>=0&&f<=g)return e.copy(s);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(gs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return eu.subVectors(s,n),o=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(eu,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function ll(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var vt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=le.workingColorSpace){if(t=Of(t,1),e=je(e,0,1),i=je(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ll(a,s,t+1/3),this.g=ll(a,s,t),this.b=ll(a,s,t-1/3)}return le.toWorkingColorSpace(this,n),this}setStyle(t,e=Ee){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let i=rd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}copyLinearToSRGB(t){return this.r=Ja(t.r),this.g=Ja(t.g),this.b=Ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return le.fromWorkingColorSpace(ri.copy(this),t),Math.round(je(ri.r*255,0,255))*65536+Math.round(je(ri.g*255,0,255))*256+Math.round(je(ri.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(ri.copy(this),e);let i=ri.r,n=ri.g,s=ri.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(ri.copy(this),e),t.r=ri.r,t.g=ri.g,t.b=ri.b,t}getStyle(t=Ee){le.fromWorkingColorSpace(ri.copy(this),t);let e=ri.r,i=ri.g,n=ri.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(Xr);let i=Za(bn.h,Xr.h,e),n=Za(bn.s,Xr.s,e),s=Za(bn.l,Xr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new vt;vt.NAMES=rd;var Qf=0,Zi=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Tn,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=Tl,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tn&&(i.blending=this.blending),this.side!==Cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==Tl&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ge=class extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new R,qr=new tt,ve=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=an(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cl&&(t.usage=this.usage),t}};var Eo=class extends ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ao=class extends ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var qt=class extends ve{constructor(t,e,i){super(new Float32Array(t),e,i)}};var tp=0,Ci=new jt,hl=new Je,xs=new R,Mi=new cn,ir=new cn,Ye=new R,ye=class r extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sd(t)?Ao:Eo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,e,i){return Ci.makeTranslation(t,e,i),this.applyMatrix4(Ci),this}scale(t,e,i){return Ci.makeScale(t,e,i),this.applyMatrix4(Ci),this}lookAt(t){return hl.lookAt(t),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Mi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(Mi.min,ir.min),Mi.expandByPoint(Ye),Ye.addVectors(Mi.max,ir.max),Mi.expandByPoint(Ye)):(Mi.expandByPoint(ir.min),Mi.expandByPoint(ir.max))}Mi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ye.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ye));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ye.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(t,c),Ye.add(xs)),n=Math.max(n,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new R,h[w]=new R;let u=new R,d=new R,f=new R,g=new tt,x=new tt,m=new tt,p=new R,y=new R;function v(w,U,F){u.fromArray(n,w*3),d.fromArray(n,U*3),f.fromArray(n,F*3),g.fromArray(a,w*2),x.fromArray(a,U*2),m.fromArray(a,F*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let Y=1/(x.x*m.y-m.x*x.y);isFinite(Y)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(Y),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(Y),c[w].add(p),c[U].add(p),c[F].add(p),h[w].add(y),h[U].add(y),h[F].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,U=M.length;w<U;++w){let F=M[w],Y=F.start,L=F.count;for(let D=Y,k=Y+L;D<k;D+=3)v(i[D+0],i[D+1],i[D+2])}let C=new R,E=new R,T=new R,P=new R;function _(w){T.fromArray(s,w*3),P.copy(T);let U=c[w];C.copy(U),C.sub(T.multiplyScalar(T.dot(U))).normalize(),E.crossVectors(P,U);let Y=E.dot(h[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=Y}for(let w=0,U=M.length;w<U;++w){let F=M[w],Y=F.start,L=F.count;for(let D=Y,k=Y+L;D<k;D+=3)_(i[D+0]),_(i[D+1]),_(i[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},iu=new jt,Wn=new pr,Yr=new un,nu=new R,vs=new R,ys=new R,_s=new R,cl=new R,Zr=new R,$r=new tt,Jr=new tt,Kr=new tt,su=new R,ru=new R,ou=new R,jr=new R,Qr=new R,ee=class extends Je{constructor(t=new ye,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(cl.fromBufferAttribute(u,t),a?Zr.addScaledVector(cl,h):Zr.addScaledVector(cl.sub(e),h))}e.add(Zr)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(s),Wn.copy(t.ray).recast(t.near),!(Yr.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Yr,nu)===null||Wn.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(iu.copy(s).invert(),Wn.copy(t.ray).applyMatrix4(iu),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,C=v;M<C;M+=3){let E=o.getX(M),T=o.getX(M+1),P=o.getX(M+2);n=to(this,p,t,i,c,h,u,E,T,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);n=to(this,a,t,i,c,h,u,y,v,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,C=v;M<C;M+=3){let E=M,T=M+1,P=M+2;n=to(this,p,t,i,c,h,u,E,T,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,M=m+2;n=to(this,a,t,i,c,h,u,y,v,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function ep(r,t,e,i,n,s,a,o){let l;if(t.side===Ze?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Cn,o),l===null)return null;Qr.copy(o),Qr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:r}}function to(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,vs),r.getVertexPosition(l,ys),r.getVertexPosition(c,_s);let h=ep(r,t,e,i,vs,ys,_s,jr);if(h){n&&($r.fromBufferAttribute(n,o),Jr.fromBufferAttribute(n,l),Kr.fromBufferAttribute(n,c),h.uv=$n.getInterpolation(jr,vs,ys,_s,$r,Jr,Kr,new tt)),s&&($r.fromBufferAttribute(s,o),Jr.fromBufferAttribute(s,l),Kr.fromBufferAttribute(s,c),h.uv1=$n.getInterpolation(jr,vs,ys,_s,$r,Jr,Kr,new tt),h.uv2=h.uv1),a&&(su.fromBufferAttribute(a,o),ru.fromBufferAttribute(a,l),ou.fromBufferAttribute(a,c),h.normal=$n.getInterpolation(jr,vs,ys,_s,su,ru,ou,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};$n.getNormal(vs,ys,_s,u.normal),h.face=u}return h}var ne=class r extends ye{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(x,m,p,y,v,M,C,E,T,P,_){let w=M/T,U=C/P,F=M/2,Y=C/2,L=E/2,D=T+1,k=P+1,G=0,W=0,q=new R;for(let $=0;$<k;$++){let j=$*U-Y;for(let rt=0;rt<D;rt++){let X=rt*w-F;q[x]=X*y,q[m]=j*v,q[p]=L,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(rt/T),u.push(1-$/P),G+=1}}for(let $=0;$<P;$++)for(let j=0;j<T;j++){let rt=d+j+D*$,X=d+j+D*($+1),K=d+(j+1)+D*($+1),ct=d+(j+1)+D*$;l.push(rt,X,ct),l.push(X,K,ct),W+=6}o.addGroup(f,W,_),f+=W,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ks(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function di(r){let t={};for(let e=0;e<r.length;e++){let i=ks(r[e]);for(let n in i)t[n]=i[n]}return t}function ip(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function od(r){return r.getRenderTarget()===null?r.outputColorSpace:le.workingColorSpace}var Nn={clone:ks,merge:di},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Re=class extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ro=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qe=class extends Ro{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ll*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ll*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ms=-90,bs=1,Nl=class extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Qe(Ms,bs,t,e);n.layers=this.layers,this.add(n);let s=new Qe(Ms,bs,t,e);s.layers=this.layers,this.add(s);let a=new Qe(Ms,bs,t,e);a.layers=this.layers,this.add(a);let o=new Qe(Ms,bs,t,e);o.layers=this.layers,this.add(o);let l=new Qe(Ms,bs,t,e);l.layers=this.layers,this.add(l);let c=new Qe(Ms,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===ln)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Co=class extends Si{constructor(t,e,i,n,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kl=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(hr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===jn?Ee:Pi),this.texture=new Co(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ne(5,5,5),s=new Re({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Yi});s.uniforms.tEquirect.value=e;let a=new ee(n,s),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=pi),new Nl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},ul=new R,rp=new R,op=new Jt,on=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=ul.subVectors(i,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(ul),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||op.getNormalMatrix(t),n=this.coplanarPoint(ul).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xn=new un,eo=new R,mr=class{constructor(t=new on,e=new on,i=new on,n=new on,s=new on,a=new on){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ln){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],x=n[10],m=n[11],p=n[12],y=n[13],v=n[14],M=n[15];if(i[0].setComponents(l-s,d-c,m-f,M-p).normalize(),i[1].setComponents(l+s,d+c,m+f,M+p).normalize(),i[2].setComponents(l+a,d+h,m+g,M+y).normalize(),i[3].setComponents(l-a,d-h,m-g,M-y).normalize(),i[4].setComponents(l-o,d-u,m-x,M-v).normalize(),e===ln)i[5].setComponents(l+o,d+u,m+x,M+v).normalize();else if(e===_o)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(eo.x=n.normal.x>0?t.max.x:t.min.x,eo.y=n.normal.y>0?t.max.y:t.min.y,eo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ad(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ap(r,t){let e=t.isWebGL2,i=new WeakMap;function n(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=r.SHORT;else if(u instanceof Uint32Array)x=r.UNSIGNED_INT;else if(u instanceof Int32Array)x=r.INT;else if(u instanceof Int8Array)x=r.BYTE;else if(u instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),f.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Oi=class r extends ye{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let v=0;v<c;v++){let M=v*u-s;g.push(M,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let v=y+c*p,M=y+c*(p+1),C=y+1+c*(p+1),E=y+1+c*p;f.push(v,M,E),f.push(M,C,E)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
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
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
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
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
#endif`,bp=`#ifdef USE_BUMPMAP
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Op=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
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
}`,Jp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,im=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
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
#endif`,am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,lm=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
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
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
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
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,p0=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,m0=`#define DISTANCE
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
}`,g0=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,w0=`#define LAMBERT
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
}`,S0=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,T0=`#define MATCAP
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
}`,E0=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,A0=`#define NORMAL
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
}`,R0=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C0=`#define PHONG
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
}`,P0=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,L0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,D0=`#define TOON
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
}`,U0=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,N0=`uniform float size;
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
}`,k0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,z0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,O0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ft={alphahash_fragment:lp,alphahash_pars_fragment:hp,alphamap_fragment:cp,alphamap_pars_fragment:up,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:xp,begin_vertex:vp,beginnormal_vertex:yp,bsdfs:_p,iridescence_fragment:Mp,bumpmap_pars_fragment:bp,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ep,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:kp,emissivemap_pars_fragment:Fp,colorspace_fragment:zp,colorspace_pars_fragment:Bp,envmap_fragment:Op,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Gp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:em,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:qp,fog_fragment:Yp,fog_pars_fragment:Zp,gradientmap_pars_fragment:$p,lightmap_fragment:Jp,lightmap_pars_fragment:Kp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:nm,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:om,lights_physical_pars_fragment:am,lights_fragment_begin:lm,lights_fragment_maps:hm,lights_fragment_end:cm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:xm,map_particle_pars_fragment:vm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:_m,morphcolor_vertex:Mm,morphnormal_vertex:bm,morphtarget_pars_vertex:wm,morphtarget_vertex:Sm,normal_fragment_begin:Tm,normal_fragment_maps:Em,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:km,premultiplied_alpha_fragment:Fm,project_vertex:zm,dithering_fragment:Bm,dithering_pars_fragment:Om,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:qm,skinbase_vertex:Ym,skinning_pars_vertex:Zm,skinning_vertex:$m,skinnormal_vertex:Jm,specularmap_fragment:Km,specularmap_pars_fragment:jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:t0,transmission_fragment:e0,transmission_pars_fragment:i0,uv_pars_fragment:n0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:o0,background_vert:a0,background_frag:l0,backgroundCube_vert:h0,backgroundCube_frag:c0,cube_vert:u0,cube_frag:d0,depth_vert:f0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:x0,equirect_frag:v0,linedashed_vert:y0,linedashed_frag:_0,meshbasic_vert:M0,meshbasic_frag:b0,meshlambert_vert:w0,meshlambert_frag:S0,meshmatcap_vert:T0,meshmatcap_frag:E0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:I0,meshtoon_vert:D0,meshtoon_frag:U0,points_vert:N0,points_frag:k0,shadow_vert:F0,shadow_frag:z0,sprite_vert:B0,sprite_frag:O0},at={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},qi={basic:{uniforms:di([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:di([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:di([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:di([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:di([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:di([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:di([at.points,at.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:di([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:di([at.common,at.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:di([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:di([at.sprite,at.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:di([at.common,at.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:di([at.lights,at.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};qi.physical={uniforms:di([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var io={r:0,b:0,g:0};function H0(r,t,e,i,n,s,a){let o=new vt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),y=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zo)?(h===void 0&&(h=new ee(new ne(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:ks(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=le.getTransfer(v.colorSpace)!==ge,(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ee(new Oi(2,2),new Re({name:"BackgroundMaterial",uniforms:ks(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(io,od(r)),i.buffers.color.setClear(io.r,io.g,io.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function G0(r,t,e,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null),c=l,h=!1;function u(L,D,k,G,W){let q=!1;if(a){let $=x(G,k,D);c!==$&&(c=$,f(c.object)),q=p(L,G,k,W),q&&y(L,G,k,W)}else{let $=D.wireframe===!0;(c.geometry!==G.id||c.program!==k.id||c.wireframe!==$)&&(c.geometry=G.id,c.program=k.id,c.wireframe=$,q=!0)}W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,P(L,D,k,G),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(L){return i.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,D,k){let G=k.wireframe===!0,W=o[L.id];W===void 0&&(W={},o[L.id]=W);let q=W[D.id];q===void 0&&(q={},W[D.id]=q);let $=q[G];return $===void 0&&($=m(d()),q[G]=$),$}function m(L){let D=[],k=[],G=[];for(let W=0;W<n;W++)D[W]=0,k[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:G,object:L,attributes:{},index:null}}function p(L,D,k,G){let W=c.attributes,q=D.attributes,$=0,j=k.getAttributes();for(let rt in j)if(j[rt].location>=0){let K=W[rt],ct=q[rt];if(ct===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(ct=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(ct=L.instanceColor)),K===void 0||K.attribute!==ct||ct&&K.data!==ct.data)return!0;$++}return c.attributesNum!==$||c.index!==G}function y(L,D,k,G){let W={},q=D.attributes,$=0,j=k.getAttributes();for(let rt in j)if(j[rt].location>=0){let K=q[rt];K===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let ct={};ct.attribute=K,K&&K.data&&(ct.data=K.data),W[rt]=ct,$++}c.attributes=W,c.attributesNum=$,c.index=G}function v(){let L=c.newAttributes;for(let D=0,k=L.length;D<k;D++)L[D]=0}function M(L){C(L,0)}function C(L,D){let k=c.newAttributes,G=c.enabledAttributes,W=c.attributeDivisors;k[L]=1,G[L]===0&&(r.enableVertexAttribArray(L),G[L]=1),W[L]!==D&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),W[L]=D)}function E(){let L=c.newAttributes,D=c.enabledAttributes;for(let k=0,G=D.length;k<G;k++)D[k]!==L[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function T(L,D,k,G,W,q,$){$===!0?r.vertexAttribIPointer(L,D,k,W,q):r.vertexAttribPointer(L,D,k,G,W,q)}function P(L,D,k,G){if(i.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let W=G.attributes,q=k.getAttributes(),$=D.defaultAttributeValues;for(let j in q){let rt=q[j];if(rt.location>=0){let X=W[j];if(X===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let K=X.normalized,ct=X.itemSize,_t=e.get(X);if(_t===void 0)continue;let yt=_t.buffer,zt=_t.type,Ht=_t.bytesPerElement,At=i.isWebGL2===!0&&(zt===r.INT||zt===r.UNSIGNED_INT||X.gpuType===Zu);if(X.isInterleavedBufferAttribute){let re=X.data,z=re.stride,li=X.offset;if(re.isInstancedInterleavedBuffer){for(let wt=0;wt<rt.locationSize;wt++)C(rt.location+wt,re.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let wt=0;wt<rt.locationSize;wt++)M(rt.location+wt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let wt=0;wt<rt.locationSize;wt++)T(rt.location+wt,ct/rt.locationSize,zt,K,z*Ht,(li+ct/rt.locationSize*wt)*Ht,At)}else{if(X.isInstancedBufferAttribute){for(let re=0;re<rt.locationSize;re++)C(rt.location+re,X.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let re=0;re<rt.locationSize;re++)M(rt.location+re);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let re=0;re<rt.locationSize;re++)T(rt.location+re,ct/rt.locationSize,zt,K,ct*Ht,ct/rt.locationSize*re*Ht,At)}}else if($!==void 0){let K=$[j];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(rt.location,K);break;case 3:r.vertexAttrib3fv(rt.location,K);break;case 4:r.vertexAttrib4fv(rt.location,K);break;default:r.vertexAttrib1fv(rt.location,K)}}}}E()}function _(){F();for(let L in o){let D=o[L];for(let k in D){let G=D[k];for(let W in G)g(G[W].object),delete G[W];delete D[k]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;let D=o[L.id];for(let k in D){let G=D[k];for(let W in G)g(G[W].object),delete G[W];delete D[k]}delete o[L.id]}function U(L){for(let D in o){let k=o[D];if(k[L.id]===void 0)continue;let G=k[L.id];for(let W in G)g(G[W].object),delete G[W];delete k[L.id]}}function F(){Y(),h=!0,c!==l&&(c=l,f(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:Y,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:M,disableUnusedAttributes:E}}function V0(r,t,e,i){let n=i.isWebGL2,s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,d){if(d===0)return;let f,g;if(n)f=r,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,h,u,d),e.update(u,s,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function W0(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=a||t.has("OES_texture_float"),C=v&&M,E=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:E}}function X0(r){let t=this,e=null,i=0,n=!1,s=!1,a=new on,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{let y=s?0:i,v=y*4,M=p.clippingState||null;l.value=M,M=h(g,d,v,f);for(let C=0;C!==v;++C)M[C]=e[C];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=f;v!==x;++v,M+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function q0(r){let t=new WeakMap;function e(a,o){return o===El?a.mapping=Ds:o===Al&&(a.mapping=Us),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===El||o===Al)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new kl(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Fs=class extends Ro{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cs=4,au=[.125,.215,.35,.446,.526,.582],Zn=20,dl=new Fs,lu=new vt,fl=null,pl=0,ml=0,qn=(1+Math.sqrt(5))/2,ws=1/qn,hu=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,qn,ws),new R(0,qn,-ws),new R(ws,0,qn),new R(-ws,0,qn),new R(qn,ws,0),new R(-qn,ws,0)],Po=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fl,pl,ml),t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:wi,format:bi,colorSpace:hn,depthBuffer:!1},n=cu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(s)),this._blurMaterial=Z0(s,t,e)}return n}_compileMaterial(t){let e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,dl)}_sceneToCubeUV(t,e,i,n){let o=new Qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lu),h.toneMapping=En,h.autoClear=!1;let f=new Ge({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new ee(new ne,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(lu),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;no(n,y*v,p>2?v:0,v,v),h.setRenderTarget(n),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Ds||t.mapping===Us;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;no(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,dl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=hu[(n-1)%hu.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ee(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zn-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Zn;m>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);let p=[],y=0;for(let T=0;T<Zn;++T){let P=T/x,_=Math.exp(-P*P/2);p.push(_),T===0?y+=_:T<m&&(y+=2*_)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let M=this._sizeLods[n],C=3*M*(n>v-Cs?n-v+Cs:0),E=4*(this._cubeSize-M);no(e,C,E,3*M,2*M),l.setRenderTarget(e),l.render(u,dl)}};function Y0(r){let t=[],e=[],i=[],n=r,s=r-Cs+1+au.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>r-Cs?l=au[a-r+Cs-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),v=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){let T=E%3*2/3-1,P=E>2?0:-1,_=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(_,x*g*E),v.set(d,m*g*E);let w=[E,E,E,E,E,E];M.set(w,p*g*E)}let C=new ye;C.setAttribute("position",new ve(y,x)),C.setAttribute("uv",new ve(v,m)),C.setAttribute("faceIndex",new ve(M,p)),t.push(C),n>Cs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function cu(r,t,e){let i=new ti(r,t,e);return i.texture.mapping=Zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function no(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Z0(r,t,e){let i=new Float32Array(Zn),n=new R(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function uu(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function du(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function $0(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===El||l===Al,h=l===Ds||l===Us;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Po(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new Po(r));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function J0(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function K0(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let v=0,M=y.length;v<M;v+=3){let C=y[v+0],E=y[v+1],T=y[v+2];d.push(C,E,E,T,T,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,M=y.length/3-1;v<M;v+=3){let C=v+0,E=v+1,T=v+2;d.push(C,E,E,T,T,C)}}else return;let m=new(sd(d)?Ao:Eo)(d,1);m.version=x;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function j0(r,t,e,i){let n=i.isWebGL2,s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){r.drawElements(s,g,o,f*l),e.update(g,s,1)}function u(f,g,x){if(x===0)return;let m,p;if(n)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,f*l,x),e.update(g,s,x)}function d(f,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,f,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Q0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function tg(r,t){return r[0]-t[0]}function eg(r,t){return Math.abs(t[1])-Math.abs(r[1])}function ig(r,t,e){let i={},n=new Float32Array(8),s=new WeakMap,a=new Ae,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=s.get(h);if(x===void 0||x.count!==g){let L=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],P=0;y===!0&&(P=1),v===!0&&(P=2),M===!0&&(P=3);let _=h.attributes.position.count*P,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let U=new Float32Array(_*w*4*g),F=new So(U,_,w,g);F.type=Sn,F.needsUpdate=!0;let Y=P*4;for(let D=0;D<g;D++){let k=C[D],G=E[D],W=T[D],q=_*w*4*D;for(let $=0;$<k.count;$++){let j=$*Y;y===!0&&(a.fromBufferAttribute(k,$),U[q+j+0]=a.x,U[q+j+1]=a.y,U[q+j+2]=a.z,U[q+j+3]=0),v===!0&&(a.fromBufferAttribute(G,$),U[q+j+4]=a.x,U[q+j+5]=a.y,U[q+j+6]=a.z,U[q+j+7]=0),M===!0&&(a.fromBufferAttribute(W,$),U[q+j+8]=a.x,U[q+j+9]=a.y,U[q+j+10]=a.z,U[q+j+11]=W.itemSize===4?a.w:1)}}x={count:g,texture:F,size:new tt(_,w)},s.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<f;v++){let M=g[v];M[0]=v,M[1]=d[v]}g.sort(eg);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(tg);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let M=o[v],C=M[0],E=M[1];C!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+v)!==x[C]&&h.setAttribute("morphTarget"+v,x[C]),m&&h.getAttribute("morphNormal"+v)!==m[C]&&h.setAttribute("morphNormal"+v,m[C]),n[v]=E,p+=E):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),n[v]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function ng(r,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Lo=class extends Si{constructor(t,e,i,n,s,a,o,l,c,h){if(h=h!==void 0?h:Kn,h!==Kn&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Kn&&(i=wn),i===void 0&&h===Ns&&(i=Jn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ld=new Si,hd=new Lo(1,1);hd.compareFunction=nd;var cd=new So,ud=new Ul,dd=new Co,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),xu=new Float32Array(4);function Gs(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=fu[n];if(s===void 0&&(s=new Float32Array(n),fu[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ve(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function We(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Jo(r,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function sg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function rg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2fv(this.addr,t),We(e,t)}}function og(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;r.uniform3fv(this.addr,t),We(e,t)}}function ag(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4fv(this.addr,t),We(e,t)}}function lg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;xu.set(i),r.uniformMatrix2fv(this.addr,!1,xu),We(e,i)}}function hg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;gu.set(i),r.uniformMatrix3fv(this.addr,!1,gu),We(e,i)}}function cg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;mu.set(i),r.uniformMatrix4fv(this.addr,!1,mu),We(e,i)}}function ug(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2iv(this.addr,t),We(e,t)}}function fg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;r.uniform3iv(this.addr,t),We(e,t)}}function pg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4iv(this.addr,t),We(e,t)}}function mg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function gg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2uiv(this.addr,t),We(e,t)}}function xg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;r.uniform3uiv(this.addr,t),We(e,t)}}function vg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4uiv(this.addr,t),We(e,t)}}function yg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?hd:ld;e.setTexture2D(t||s,n)}function _g(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ud,n)}function Mg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||dd,n)}function bg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||cd,n)}function wg(r){switch(r){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return lg;case 35675:return hg;case 35676:return cg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return bg}}function Sg(r,t){r.uniform1fv(this.addr,t)}function Tg(r,t){let e=Gs(t,this.size,2);r.uniform2fv(this.addr,e)}function Eg(r,t){let e=Gs(t,this.size,3);r.uniform3fv(this.addr,e)}function Ag(r,t){let e=Gs(t,this.size,4);r.uniform4fv(this.addr,e)}function Rg(r,t){let e=Gs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Cg(r,t){let e=Gs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Pg(r,t){let e=Gs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Lg(r,t){r.uniform1iv(this.addr,t)}function Ig(r,t){r.uniform2iv(this.addr,t)}function Dg(r,t){r.uniform3iv(this.addr,t)}function Ug(r,t){r.uniform4iv(this.addr,t)}function Ng(r,t){r.uniform1uiv(this.addr,t)}function kg(r,t){r.uniform2uiv(this.addr,t)}function Fg(r,t){r.uniform3uiv(this.addr,t)}function zg(r,t){r.uniform4uiv(this.addr,t)}function Bg(r,t,e){let i=this.cache,n=t.length,s=Jo(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),We(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||ld,s[a])}function Og(r,t,e){let i=this.cache,n=t.length,s=Jo(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),We(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||ud,s[a])}function Hg(r,t,e){let i=this.cache,n=t.length,s=Jo(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),We(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||dd,s[a])}function Gg(r,t,e){let i=this.cache,n=t.length,s=Jo(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),We(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||cd,s[a])}function Vg(r){switch(r){case 5126:return Sg;case 35664:return Tg;case 35665:return Eg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return kg;case 36295:return Fg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}var Fl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wg(e.type)}},zl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vg(e.type)}},Bl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},gl=/(\w+)(\])?(\[|\.)?/g;function vu(r,t){r.seq.push(t),r.map[t.id]=t}function Wg(r,t,e){let i=r.name,n=i.length;for(gl.lastIndex=0;;){let s=gl.exec(i),a=gl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){vu(e,c===void 0?new Fl(o,r,t):new zl(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Bl(o),vu(e,u)),e=u}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);Wg(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function yu(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Xg=37297,qg=0;function Yg(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Zg(r){let t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(r),i;switch(t===e?i="":t===yo&&e===vo?i="LinearDisplayP3ToLinearSRGB":t===vo&&e===yo&&(i="LinearSRGBToLinearDisplayP3"),r){case hn:case $o:return[i,"LinearTransferOETF"];case Ee:case Sh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function _u(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Yg(r.getShaderSource(t),a)}else return n}function $g(r,t){let e=Zg(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Jg(r,t){let e;switch(t){case yh:e="Linear";break;case _h:e="Reinhard";break;case Mh:e="OptimizedCineon";break;case br:e="ACESFilmic";break;case bh:e="AgX";break;case _f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Kg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function jg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ps).join(`
`)}function Qg(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tx(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ps(r){return r!==""}function Mu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(r){return r.replace(ex,nx)}var ix=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nx(r,t){let e=Ft[t];if(e===void 0){let i=ix.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ol(e)}var sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(r){return r.replace(sx,rx)}function rx(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Su(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ox(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function ax(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case Zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function hx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qu:t="ENVMAP_BLENDING_MULTIPLY";break;case vf:t="ENVMAP_BLENDING_MIX";break;case yf:t="ENVMAP_BLENDING_ADD";break}return t}function cx(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ux(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ox(e),c=ax(e),h=lx(e),u=hx(e),d=cx(e),f=e.isWebGL2?"":Kg(e),g=jg(e),x=Qg(s),m=n.createProgram(),p,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ps).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ps).join(`
`),y.length>0&&(y+=`
`)):(p=[Su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),y=[f,Su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Ft.tonemapping_pars_fragment:"",e.toneMapping!==En?Jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,$g("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),a=Ol(a),a=Mu(a,e),a=bu(a,e),o=Ol(o),o=Mu(o,e),o=bu(o,e),a=wu(a),o=wu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=v+p+a,C=v+y+o,E=yu(n,n.VERTEX_SHADER,M),T=yu(n,n.FRAGMENT_SHADER,C);n.attachShader(m,E),n.attachShader(m,T),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function P(F){if(r.debug.checkShaderErrors){let Y=n.getProgramInfoLog(m).trim(),L=n.getShaderInfoLog(E).trim(),D=n.getShaderInfoLog(T).trim(),k=!0,G=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,E,T);else{let W=_u(n,E,"vertex"),q=_u(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+W+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||D==="")&&(G=!1);G&&(F.diagnostics={runnable:k,programLog:Y,vertexShader:{log:L,prefix:p},fragmentShader:{log:D,prefix:y}})}n.deleteShader(E),n.deleteShader(T),_=new Is(n,m),w=tx(n,m)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=n.getProgramParameter(m,Xg)),U},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=T,this}var dx=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Gl(t),e.set(t,i)),i}},Gl=class{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}};function fx(r,t,e,i,n,s,a){let o=new To,l=new Hl,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function m(_,w,U,F,Y){let L=F.fog,D=Y.geometry,k=_.isMeshStandardMaterial?F.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||k),W=G&&G.mapping===Zo?G.image.height:null,q=g[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=$!==void 0?$.length:0,rt=0;D.morphAttributes.position!==void 0&&(rt=1),D.morphAttributes.normal!==void 0&&(rt=2),D.morphAttributes.color!==void 0&&(rt=3);let X,K,ct,_t;if(q){let hi=qi[q];X=hi.vertexShader,K=hi.fragmentShader}else X=_.vertexShader,K=_.fragmentShader,l.update(_),ct=l.getVertexShaderID(_),_t=l.getFragmentShaderID(_);let yt=r.getRenderTarget(),zt=Y.isInstancedMesh===!0,Ht=Y.isBatchedMesh===!0,At=!!_.map,re=!!_.matcap,z=!!G,li=!!_.aoMap,wt=!!_.lightMap,Nt=!!_.bumpMap,mt=!!_.normalMap,Pe=!!_.displacementMap,Vt=!!_.emissiveMap,A=!!_.metalnessMap,b=!!_.roughnessMap,O=_.anisotropy>0,it=_.clearcoat>0,et=_.iridescence>0,nt=_.sheen>0,gt=_.transmission>0,ut=O&&!!_.anisotropyMap,ft=it&&!!_.clearcoatMap,Et=it&&!!_.clearcoatNormalMap,Wt=it&&!!_.clearcoatRoughnessMap,Q=et&&!!_.iridescenceMap,pe=et&&!!_.iridescenceThicknessMap,Kt=nt&&!!_.sheenColorMap,Dt=nt&&!!_.sheenRoughnessMap,bt=!!_.specularMap,pt=!!_.specularColorMap,Gt=!!_.specularIntensityMap,ce=gt&&!!_.transmissionMap,Ie=gt&&!!_.thicknessMap,Zt=!!_.gradientMap,ot=!!_.alphaMap,I=_.alphaTest>0,lt=!!_.alphaHash,ht=!!_.extensions,Rt=!!D.attributes.uv1,St=!!D.attributes.uv2,_e=!!D.attributes.uv3,Me=En;return _.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Me=r.toneMapping),{isWebGL2:h,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:K,defines:_.defines,customVertexShaderID:ct,customFragmentShaderID:_t,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ht,instancing:zt,instancingColor:zt&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:hn,map:At,matcap:re,envMap:z,envMapMode:z&&G.mapping,envMapCubeUVHeight:W,aoMap:li,lightMap:wt,bumpMap:Nt,normalMap:mt,displacementMap:d&&Pe,emissiveMap:Vt,normalMapObjectSpace:mt&&_.normalMapType===If,normalMapTangentSpace:mt&&_.normalMapType===id,metalnessMap:A,roughnessMap:b,anisotropy:O,anisotropyMap:ut,clearcoat:it,clearcoatMap:ft,clearcoatNormalMap:Et,clearcoatRoughnessMap:Wt,iridescence:et,iridescenceMap:Q,iridescenceThicknessMap:pe,sheen:nt,sheenColorMap:Kt,sheenRoughnessMap:Dt,specularMap:bt,specularColorMap:pt,specularIntensityMap:Gt,transmission:gt,transmissionMap:ce,thicknessMap:Ie,gradientMap:Zt,opaque:_.transparent===!1&&_.blending===Tn,alphaMap:ot,alphaTest:I,alphaHash:lt,combine:_.combine,mapUv:At&&x(_.map.channel),aoMapUv:li&&x(_.aoMap.channel),lightMapUv:wt&&x(_.lightMap.channel),bumpMapUv:Nt&&x(_.bumpMap.channel),normalMapUv:mt&&x(_.normalMap.channel),displacementMapUv:Pe&&x(_.displacementMap.channel),emissiveMapUv:Vt&&x(_.emissiveMap.channel),metalnessMapUv:A&&x(_.metalnessMap.channel),roughnessMapUv:b&&x(_.roughnessMap.channel),anisotropyMapUv:ut&&x(_.anisotropyMap.channel),clearcoatMapUv:ft&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Et&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(_.sheenRoughnessMap.channel),specularMapUv:bt&&x(_.specularMap.channel),specularColorMapUv:pt&&x(_.specularColorMap.channel),specularIntensityMapUv:Gt&&x(_.specularIntensityMap.channel),transmissionMapUv:ce&&x(_.transmissionMap.channel),thicknessMapUv:Ie&&x(_.thicknessMap.channel),alphaMapUv:ot&&x(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(mt||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:St,vertexUv3s:_e,pointsUvs:Y.isPoints===!0&&!!D.attributes.uv&&(At||ot),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:rt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,useLegacyLights:r._useLegacyLights,decodeVideoTexture:At&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===ge,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===me,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ht&&_.extensions.derivatives===!0,extensionFragDepth:ht&&_.extensions.fragDepth===!0,extensionDrawBuffers:ht&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)w.push(U),w.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(y(w,_),v(w,_),w.push(r.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function y(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function v(_,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function M(_){let w=g[_.type],U;if(w){let F=qi[w];U=Nn.clone(F.uniforms)}else U=_.uniforms;return U}function C(_,w){let U;for(let F=0,Y=c.length;F<Y;F++){let L=c[F];if(L.cacheKey===w){U=L,++U.usedTimes;break}}return U===void 0&&(U=new ux(r,w,_,s),c.push(U)),U}function E(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),_.destroy()}}function T(_){l.remove(_)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:P}}function px(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function mx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Tu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Eu(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,g,x,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||mx),i.length>1&&i.sort(d||Tu),n.length>1&&n.sort(d||Tu)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function gx(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new Eu,r.set(i,[a])):n>=s.length?(a=new Eu,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function xx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new vt};break;case"SpotLight":e={position:new R,direction:new R,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function vx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var yx=0;function _x(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Mx(r,t){let e=new xx,i=vx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);let s=new R,a=new jt,o=new jt;function l(h,u){let d=0,f=0,g=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let x=0,m=0,p=0,y=0,v=0,M=0,C=0,E=0,T=0,P=0,_=0;h.sort(_x);let w=u===!0?Math.PI:1;for(let F=0,Y=h.length;F<Y;F++){let L=h[F],D=L.color,k=L.intensity,G=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=D.r*k*w,f+=D.g*k*w,g+=D.b*k*w;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],k);_++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let $=L.shadow,j=i.get(L);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.directionalShadow[x]=j,n.directionalShadowMap[x]=W,n.directionalShadowMatrix[x]=L.shadow.matrix,M++}n.directional[x]=q,x++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(D).multiplyScalar(k*w),q.distance=G,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[p]=q;let $=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,$.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[p]=$.matrix,L.castShadow){let j=i.get(L);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.spotShadow[p]=j,n.spotShadowMap[p]=W,E++}p++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(D).multiplyScalar(k),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=q,y++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*w),q.distance=L.distance,q.decay=L.decay,L.castShadow){let $=L.shadow,j=i.get(L);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=L.shadow.matrix,C++}n.point[m]=q,m++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(k*w),q.groundColor.copy(L.groundColor).multiplyScalar(k*w),n.hemi[v]=q,v++}}y>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;let U=n.hash;(U.directionalLength!==x||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==v||U.numDirectionalShadows!==M||U.numPointShadows!==C||U.numSpotShadows!==E||U.numSpotMaps!==T||U.numLightProbes!==_)&&(n.directional.length=x,n.spot.length=p,n.rectArea.length=y,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=E+T-P,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=_,U.directionalLength=x,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=v,U.numDirectionalShadows=M,U.numPointShadows=C,U.numSpotShadows=E,U.numSpotMaps=T,U.numLightProbes=_,n.version=yx++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let M=h[y];if(M.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),d++}else if(M.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let C=n.rectArea[x];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:n}}function Au(r,t){let e=new Mx(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bx(r,t){let e=new WeakMap;function i(s,a=0){let o=e.get(s),l;return o===void 0?(l=new Au(r,t),e.set(s,[l])):a>=o.length?(l=new Au(r,t),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:i,dispose:n}}var Vl=class extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wl=class extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
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
}`;function Tx(r,t,e){let i=new mr,n=new tt,s=new tt,a=new Ae,o=new Vl({depthPacking:Lf}),l=new Wl,c={},h=e.maxTextureSize,u={[Cn]:Ze,[Ze]:Cn,[me]:me},d=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:wx,fragmentShader:Sx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ye;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let p=this.type;this.render=function(E,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let _=r.getRenderTarget(),w=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Yi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Y=p!==rn&&this.type===rn,L=p===rn&&this.type!==rn;for(let D=0,k=E.length;D<k;D++){let G=E[D],W=G.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let q=W.getFrameExtents();if(n.multiply(q),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/q.x),n.x=s.x*q.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/q.y),n.y=s.y*q.y,W.mapSize.y=s.y)),W.map===null||Y===!0||L===!0){let j=this.type!==rn?{minFilter:Ke,magFilter:Ke}:{};W.map!==null&&W.map.dispose(),W.map=new ti(n.x,n.y,j),W.map.texture.name=G.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();let $=W.getViewportCount();for(let j=0;j<$;j++){let rt=W.getViewport(j);a.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),F.viewport(a),W.updateMatrices(G,j),i=W.getFrustum(),M(T,P,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===rn&&y(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(_,w,U)};function y(E,T){let P=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ti(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,P,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,P,f,x,null)}function v(E,T,P,_){let w=null,U=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)w=U;else if(w=P.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let F=w.uuid,Y=T.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let D=L[Y];D===void 0&&(D=w.clone(),L[Y]=D,T.addEventListener("dispose",C)),w=D}if(w.visible=T.visible,w.wireframe=T.wireframe,_===rn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let F=r.properties.get(w);F.light=P}return w}function M(E,T,P,_,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===rn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let Y=t.update(E),L=E.material;if(Array.isArray(L)){let D=Y.groups;for(let k=0,G=D.length;k<G;k++){let W=D[k],q=L[W.materialIndex];if(q&&q.visible){let $=v(E,q,_,w);E.onBeforeShadow(r,E,T,P,Y,$,W),r.renderBufferDirect(P,null,Y,$,E,W),E.onAfterShadow(r,E,T,P,Y,$,W)}}}else if(L.visible){let D=v(E,L,_,w);E.onBeforeShadow(r,E,T,P,Y,D,null),r.renderBufferDirect(P,null,Y,D,E,null),E.onAfterShadow(r,E,T,P,Y,D,null)}}let F=E.children;for(let Y=0,L=F.length;Y<L;Y++)M(F[Y],T,P,_,w)}function C(E){E.target.removeEventListener("dispose",C);for(let P in c){let _=c[P],w=E.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}}function Ex(r,t,e){let i=e.isWebGL2;function n(){let I=!1,lt=new Ae,ht=null,Rt=new Ae(0,0,0,0);return{setMask:function(St){ht!==St&&!I&&(r.colorMask(St,St,St,St),ht=St)},setLocked:function(St){I=St},setClear:function(St,_e,Me,Xe,hi){hi===!0&&(St*=Xe,_e*=Xe,Me*=Xe),lt.set(St,_e,Me,Xe),Rt.equals(lt)===!1&&(r.clearColor(St,_e,Me,Xe),Rt.copy(lt))},reset:function(){I=!1,ht=null,Rt.set(-1,0,0,0)}}}function s(){let I=!1,lt=null,ht=null,Rt=null;return{setTest:function(St){St?Ht(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(St){lt!==St&&!I&&(r.depthMask(St),lt=St)},setFunc:function(St){if(ht!==St){switch(St){case uf:r.depthFunc(r.NEVER);break;case df:r.depthFunc(r.ALWAYS);break;case ff:r.depthFunc(r.LESS);break;case po:r.depthFunc(r.LEQUAL);break;case pf:r.depthFunc(r.EQUAL);break;case mf:r.depthFunc(r.GEQUAL);break;case gf:r.depthFunc(r.GREATER);break;case xf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ht=St}},setLocked:function(St){I=St},setClear:function(St){Rt!==St&&(r.clearDepth(St),Rt=St)},reset:function(){I=!1,lt=null,ht=null,Rt=null}}}function a(){let I=!1,lt=null,ht=null,Rt=null,St=null,_e=null,Me=null,Xe=null,hi=null;return{setTest:function(be){I||(be?Ht(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(be){lt!==be&&!I&&(r.stencilMask(be),lt=be)},setFunc:function(be,ci,Xi){(ht!==be||Rt!==ci||St!==Xi)&&(r.stencilFunc(be,ci,Xi),ht=be,Rt=ci,St=Xi)},setOp:function(be,ci,Xi){(_e!==be||Me!==ci||Xe!==Xi)&&(r.stencilOp(be,ci,Xi),_e=be,Me=ci,Xe=Xi)},setLocked:function(be){I=be},setClear:function(be){hi!==be&&(r.clearStencil(be),hi=be)},reset:function(){I=!1,lt=null,ht=null,Rt=null,St=null,_e=null,Me=null,Xe=null,hi=null}}}let o=new n,l=new s,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,M=null,C=null,E=null,T=null,P=null,_=new vt(0,0,0),w=0,U=!1,F=null,Y=null,L=null,D=null,k=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,q=0,$=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec($)[1]),W=q>=1):$.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=q>=2);let j=null,rt={},X=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),ct=new Ae().fromArray(X),_t=new Ae().fromArray(K);function yt(I,lt,ht,Rt){let St=new Uint8Array(4),_e=r.createTexture();r.bindTexture(I,_e),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Me=0;Me<ht;Me++)i&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(lt,0,r.RGBA,1,1,Rt,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(lt+Me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return _e}let zt={};zt[r.TEXTURE_2D]=yt(r.TEXTURE_2D,r.TEXTURE_2D,1),zt[r.TEXTURE_CUBE_MAP]=yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(zt[r.TEXTURE_2D_ARRAY]=yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),zt[r.TEXTURE_3D]=yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ht(r.DEPTH_TEST),l.setFunc(po),Vt(!1),A(lc),Ht(r.CULL_FACE),mt(Yi);function Ht(I){d[I]!==!0&&(r.enable(I),d[I]=!0)}function At(I){d[I]!==!1&&(r.disable(I),d[I]=!1)}function re(I,lt){return f[I]!==lt?(r.bindFramebuffer(I,lt),f[I]=lt,i&&(I===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=lt),I===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=lt)),!0):!1}function z(I,lt){let ht=x,Rt=!1;if(I)if(ht=g.get(lt),ht===void 0&&(ht=[],g.set(lt,ht)),I.isWebGLMultipleRenderTargets){let St=I.texture;if(ht.length!==St.length||ht[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,Me=St.length;_e<Me;_e++)ht[_e]=r.COLOR_ATTACHMENT0+_e;ht.length=St.length,Rt=!0}}else ht[0]!==r.COLOR_ATTACHMENT0&&(ht[0]=r.COLOR_ATTACHMENT0,Rt=!0);else ht[0]!==r.BACK&&(ht[0]=r.BACK,Rt=!0);Rt&&(e.isWebGL2?r.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function li(I){return m!==I?(r.useProgram(I),m=I,!0):!1}let wt={[Yn]:r.FUNC_ADD,[$d]:r.FUNC_SUBTRACT,[Jd]:r.FUNC_REVERSE_SUBTRACT};if(i)wt[uc]=r.MIN,wt[dc]=r.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(wt[uc]=I.MIN_EXT,wt[dc]=I.MAX_EXT)}let Nt={[Kd]:r.ZERO,[jd]:r.ONE,[Qd]:r.SRC_COLOR,[Sl]:r.SRC_ALPHA,[of]:r.SRC_ALPHA_SATURATE,[sf]:r.DST_COLOR,[ef]:r.DST_ALPHA,[tf]:r.ONE_MINUS_SRC_COLOR,[Tl]:r.ONE_MINUS_SRC_ALPHA,[rf]:r.ONE_MINUS_DST_COLOR,[nf]:r.ONE_MINUS_DST_ALPHA,[af]:r.CONSTANT_COLOR,[lf]:r.ONE_MINUS_CONSTANT_COLOR,[hf]:r.CONSTANT_ALPHA,[cf]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(I,lt,ht,Rt,St,_e,Me,Xe,hi,be){if(I===Yi){p===!0&&(At(r.BLEND),p=!1);return}if(p===!1&&(Ht(r.BLEND),p=!0),I!==Zd){if(I!==y||be!==U){if((v!==Yn||E!==Yn)&&(r.blendEquation(r.FUNC_ADD),v=Yn,E=Yn),be)switch(I){case Tn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Li:r.blendFunc(r.ONE,r.ONE);break;case hc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Tn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Li:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case hc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,C=null,T=null,P=null,_.set(0,0,0),w=0,y=I,U=be}return}St=St||lt,_e=_e||ht,Me=Me||Rt,(lt!==v||St!==E)&&(r.blendEquationSeparate(wt[lt],wt[St]),v=lt,E=St),(ht!==M||Rt!==C||_e!==T||Me!==P)&&(r.blendFuncSeparate(Nt[ht],Nt[Rt],Nt[_e],Nt[Me]),M=ht,C=Rt,T=_e,P=Me),(Xe.equals(_)===!1||hi!==w)&&(r.blendColor(Xe.r,Xe.g,Xe.b,hi),_.copy(Xe),w=hi),y=I,U=!1}function Pe(I,lt){I.side===me?At(r.CULL_FACE):Ht(r.CULL_FACE);let ht=I.side===Ze;lt&&(ht=!ht),Vt(ht),I.blending===Tn&&I.transparent===!1?mt(Yi):mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let Rt=I.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),O(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ht(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(I){F!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),F=I)}function A(I){I!==qd?(Ht(r.CULL_FACE),I!==Y&&(I===lc?r.cullFace(r.BACK):I===Yd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),Y=I}function b(I){I!==L&&(W&&r.lineWidth(I),L=I)}function O(I,lt,ht){I?(Ht(r.POLYGON_OFFSET_FILL),(D!==lt||k!==ht)&&(r.polygonOffset(lt,ht),D=lt,k=ht)):At(r.POLYGON_OFFSET_FILL)}function it(I){I?Ht(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function et(I){I===void 0&&(I=r.TEXTURE0+G-1),j!==I&&(r.activeTexture(I),j=I)}function nt(I,lt,ht){ht===void 0&&(j===null?ht=r.TEXTURE0+G-1:ht=j);let Rt=rt[ht];Rt===void 0&&(Rt={type:void 0,texture:void 0},rt[ht]=Rt),(Rt.type!==I||Rt.texture!==lt)&&(j!==ht&&(r.activeTexture(ht),j=ht),r.bindTexture(I,lt||zt[I]),Rt.type=I,Rt.texture=lt)}function gt(){let I=rt[j];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ut(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(I){ct.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),ct.copy(I))}function ce(I){_t.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),_t.copy(I))}function Ie(I,lt){let ht=u.get(lt);ht===void 0&&(ht=new WeakMap,u.set(lt,ht));let Rt=ht.get(I);Rt===void 0&&(Rt=r.getUniformBlockIndex(lt,I.name),ht.set(I,Rt))}function Zt(I,lt){let Rt=u.get(lt).get(I);h.get(lt)!==Rt&&(r.uniformBlockBinding(lt,Rt,I.__bindingPointIndex),h.set(lt,Rt))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},j=null,rt={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,M=null,C=null,E=null,T=null,P=null,_=new vt(0,0,0),w=0,U=!1,F=null,Y=null,L=null,D=null,k=null,ct.set(0,0,r.canvas.width,r.canvas.height),_t.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ht,disable:At,bindFramebuffer:re,drawBuffers:z,useProgram:li,setBlending:mt,setMaterial:Pe,setFlipSided:Vt,setCullFace:A,setLineWidth:b,setPolygonOffset:O,setScissorTest:it,activeTexture:et,bindTexture:nt,unbindTexture:gt,compressedTexImage2D:ut,compressedTexImage3D:ft,texImage2D:bt,texImage3D:pt,updateUBOMapping:Ie,uniformBlockBinding:Zt,texStorage2D:Kt,texStorage3D:Dt,texSubImage2D:Et,texSubImage3D:Wt,compressedTexSubImage2D:Q,compressedTexSubImage3D:pe,scissor:Gt,viewport:ce,reset:ot}}function Ax(r,t,e,i,n,s,a){let o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):Mo("canvas")}function x(A,b,O,it){let et=1;if((A.width>it||A.height>it)&&(et=it/Math.max(A.width,A.height)),et<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let nt=b?Il:Math.floor,gt=nt(et*A.width),ut=nt(et*A.height);u===void 0&&(u=g(gt,ut));let ft=O?g(gt,ut):u;return ft.width=gt,ft.height=ut,ft.getContext("2d").drawImage(A,0,0,gt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+gt+"x"+ut+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Wc(A.width)&&Wc(A.height)}function p(A){return o?!1:A.wrapS!==Bi||A.wrapT!==Bi||A.minFilter!==Ke&&A.minFilter!==pi}function y(A,b){return A.generateMipmaps&&b&&A.minFilter!==Ke&&A.minFilter!==pi}function v(A){r.generateMipmap(A)}function M(A,b,O,it,et=!1){if(o===!1)return b;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let nt=b;if(b===r.RED&&(O===r.FLOAT&&(nt=r.R32F),O===r.HALF_FLOAT&&(nt=r.R16F),O===r.UNSIGNED_BYTE&&(nt=r.R8)),b===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(nt=r.R8UI),O===r.UNSIGNED_SHORT&&(nt=r.R16UI),O===r.UNSIGNED_INT&&(nt=r.R32UI),O===r.BYTE&&(nt=r.R8I),O===r.SHORT&&(nt=r.R16I),O===r.INT&&(nt=r.R32I)),b===r.RG&&(O===r.FLOAT&&(nt=r.RG32F),O===r.HALF_FLOAT&&(nt=r.RG16F),O===r.UNSIGNED_BYTE&&(nt=r.RG8)),b===r.RGBA){let gt=et?xo:le.getTransfer(it);O===r.FLOAT&&(nt=r.RGBA32F),O===r.HALF_FLOAT&&(nt=r.RGBA16F),O===r.UNSIGNED_BYTE&&(nt=gt===ge?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function C(A,b,O){return y(A,O)===!0||A.isFramebufferTexture&&A.minFilter!==Ke&&A.minFilter!==pi?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){return A===Ke||A===fc||A===Oa?r.NEAREST:r.LINEAR}function T(A){let b=A.target;b.removeEventListener("dispose",T),_(b),b.isVideoTexture&&h.delete(b)}function P(A){let b=A.target;b.removeEventListener("dispose",P),U(b)}function _(A){let b=i.get(A);if(b.__webglInit===void 0)return;let O=A.source,it=d.get(O);if(it){let et=it[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(A),Object.keys(it).length===0&&d.delete(O)}i.remove(A)}function w(A){let b=i.get(A);r.deleteTexture(b.__webglTexture);let O=A.source,it=d.get(O);delete it[b.__cacheKey],a.memory.textures--}function U(A){let b=A.texture,O=i.get(A),it=i.get(b);if(it.__webglTexture!==void 0&&(r.deleteTexture(it.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(O.__webglFramebuffer[et]))for(let nt=0;nt<O.__webglFramebuffer[et].length;nt++)r.deleteFramebuffer(O.__webglFramebuffer[et][nt]);else r.deleteFramebuffer(O.__webglFramebuffer[et]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[et])}else{if(Array.isArray(O.__webglFramebuffer))for(let et=0;et<O.__webglFramebuffer.length;et++)r.deleteFramebuffer(O.__webglFramebuffer[et]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let et=0;et<O.__webglColorRenderbuffer.length;et++)O.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[et]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let et=0,nt=b.length;et<nt;et++){let gt=i.get(b[et]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),a.memory.textures--),i.remove(b[et])}i.remove(b),i.remove(A)}let F=0;function Y(){F=0}function L(){let A=F;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),F+=1,A}function D(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function k(A,b){let O=i.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let it=A.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(O,A,b);return}}e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+b)}function G(A,b){let O=i.get(A);if(A.version>0&&O.__version!==A.version){ct(O,A,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+b)}function W(A,b){let O=i.get(A);if(A.version>0&&O.__version!==A.version){ct(O,A,b);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+b)}function q(A,b){let O=i.get(A);if(A.version>0&&O.__version!==A.version){_t(O,A,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+b)}let $={[fr]:r.REPEAT,[Bi]:r.CLAMP_TO_EDGE,[Rl]:r.MIRRORED_REPEAT},j={[Ke]:r.NEAREST,[fc]:r.NEAREST_MIPMAP_NEAREST,[Oa]:r.NEAREST_MIPMAP_LINEAR,[pi]:r.LINEAR,[Mf]:r.LINEAR_MIPMAP_NEAREST,[Qn]:r.LINEAR_MIPMAP_LINEAR},rt={[Df]:r.NEVER,[Bf]:r.ALWAYS,[Uf]:r.LESS,[nd]:r.LEQUAL,[Nf]:r.EQUAL,[zf]:r.GEQUAL,[kf]:r.GREATER,[Ff]:r.NOTEQUAL};function X(A,b,O){if(O?(r.texParameteri(A,r.TEXTURE_WRAP_S,$[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,$[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,$[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,j[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,j[b.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==Bi||b.wrapT!==Bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,E(b.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,E(b.minFilter)),b.minFilter!==Ke&&b.minFilter!==pi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let it=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ke||b.minFilter!==Oa&&b.minFilter!==Qn||b.type===Sn&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===wi&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(r.texParameterf(A,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function K(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));let it=b.source,et=d.get(it);et===void 0&&(et={},d.set(it,et));let nt=D(b);if(nt!==A.__cacheKey){et[nt]===void 0&&(et[nt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),et[nt].usedTimes++;let gt=et[A.__cacheKey];gt!==void 0&&(et[A.__cacheKey].usedTimes--,gt.usedTimes===0&&w(b)),A.__cacheKey=nt,A.__webglTexture=et[nt].texture}return O}function ct(A,b,O){let it=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=r.TEXTURE_3D);let et=K(A,b),nt=b.source;e.bindTexture(it,A.__webglTexture,r.TEXTURE0+O);let gt=i.get(nt);if(nt.version!==gt.__version||et===!0){e.activeTexture(r.TEXTURE0+O);let ut=le.getPrimaries(le.workingColorSpace),ft=b.colorSpace===Pi?null:le.getPrimaries(b.colorSpace),Et=b.colorSpace===Pi||ut===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Wt=p(b)&&m(b.image)===!1,Q=x(b.image,Wt,!1,n.maxTextureSize);Q=Vt(b,Q);let pe=m(Q)||o,Kt=s.convert(b.format,b.colorSpace),Dt=s.convert(b.type),bt=M(b.internalFormat,Kt,Dt,b.colorSpace,b.isVideoTexture);X(it,b,pe);let pt,Gt=b.mipmaps,ce=o&&b.isVideoTexture!==!0&&bt!==td,Ie=gt.__version===void 0||et===!0,Zt=C(b,Q,pe);if(b.isDepthTexture)bt=r.DEPTH_COMPONENT,o?b.type===Sn?bt=r.DEPTH_COMPONENT32F:b.type===wn?bt=r.DEPTH_COMPONENT24:b.type===Jn?bt=r.DEPTH24_STENCIL8:bt=r.DEPTH_COMPONENT16:b.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Kn&&bt===r.DEPTH_COMPONENT&&b.type!==wh&&b.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=wn,Dt=s.convert(b.type)),b.format===Ns&&bt===r.DEPTH_COMPONENT&&(bt=r.DEPTH_STENCIL,b.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Jn,Dt=s.convert(b.type))),Ie&&(ce?e.texStorage2D(r.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,bt,Q.width,Q.height,0,Kt,Dt,null));else if(b.isDataTexture)if(Gt.length>0&&pe){ce&&Ie&&e.texStorage2D(r.TEXTURE_2D,Zt,bt,Gt[0].width,Gt[0].height);for(let ot=0,I=Gt.length;ot<I;ot++)pt=Gt[ot],ce?e.texSubImage2D(r.TEXTURE_2D,ot,0,0,pt.width,pt.height,Kt,Dt,pt.data):e.texImage2D(r.TEXTURE_2D,ot,bt,pt.width,pt.height,0,Kt,Dt,pt.data);b.generateMipmaps=!1}else ce?(Ie&&e.texStorage2D(r.TEXTURE_2D,Zt,bt,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,Kt,Dt,Q.data)):e.texImage2D(r.TEXTURE_2D,0,bt,Q.width,Q.height,0,Kt,Dt,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&Ie&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,bt,Gt[0].width,Gt[0].height,Q.depth);for(let ot=0,I=Gt.length;ot<I;ot++)pt=Gt[ot],b.format!==bi?Kt!==null?ce?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,pt.width,pt.height,Q.depth,Kt,pt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ot,bt,pt.width,pt.height,Q.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,pt.width,pt.height,Q.depth,Kt,Dt,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ot,bt,pt.width,pt.height,Q.depth,0,Kt,Dt,pt.data)}else{ce&&Ie&&e.texStorage2D(r.TEXTURE_2D,Zt,bt,Gt[0].width,Gt[0].height);for(let ot=0,I=Gt.length;ot<I;ot++)pt=Gt[ot],b.format!==bi?Kt!==null?ce?e.compressedTexSubImage2D(r.TEXTURE_2D,ot,0,0,pt.width,pt.height,Kt,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,ot,bt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?e.texSubImage2D(r.TEXTURE_2D,ot,0,0,pt.width,pt.height,Kt,Dt,pt.data):e.texImage2D(r.TEXTURE_2D,ot,bt,pt.width,pt.height,0,Kt,Dt,pt.data)}else if(b.isDataArrayTexture)ce?(Ie&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,bt,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Kt,Dt,Q.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,Kt,Dt,Q.data);else if(b.isData3DTexture)ce?(Ie&&e.texStorage3D(r.TEXTURE_3D,Zt,bt,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Kt,Dt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,Kt,Dt,Q.data);else if(b.isFramebufferTexture){if(Ie)if(ce)e.texStorage2D(r.TEXTURE_2D,Zt,bt,Q.width,Q.height);else{let ot=Q.width,I=Q.height;for(let lt=0;lt<Zt;lt++)e.texImage2D(r.TEXTURE_2D,lt,bt,ot,I,0,Kt,Dt,null),ot>>=1,I>>=1}}else if(Gt.length>0&&pe){ce&&Ie&&e.texStorage2D(r.TEXTURE_2D,Zt,bt,Gt[0].width,Gt[0].height);for(let ot=0,I=Gt.length;ot<I;ot++)pt=Gt[ot],ce?e.texSubImage2D(r.TEXTURE_2D,ot,0,0,Kt,Dt,pt):e.texImage2D(r.TEXTURE_2D,ot,bt,Kt,Dt,pt);b.generateMipmaps=!1}else ce?(Ie&&e.texStorage2D(r.TEXTURE_2D,Zt,bt,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Kt,Dt,Q)):e.texImage2D(r.TEXTURE_2D,0,bt,Kt,Dt,Q);y(b,pe)&&v(it),gt.__version=nt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function _t(A,b,O){if(b.image.length!==6)return;let it=K(A,b),et=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+O);let nt=i.get(et);if(et.version!==nt.__version||it===!0){e.activeTexture(r.TEXTURE0+O);let gt=le.getPrimaries(le.workingColorSpace),ut=b.colorSpace===Pi?null:le.getPrimaries(b.colorSpace),ft=b.colorSpace===Pi||gt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Et=b.isCompressedTexture||b.image[0].isCompressedTexture,Wt=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let ot=0;ot<6;ot++)!Et&&!Wt?Q[ot]=x(b.image[ot],!1,!0,n.maxCubemapSize):Q[ot]=Wt?b.image[ot].image:b.image[ot],Q[ot]=Vt(b,Q[ot]);let pe=Q[0],Kt=m(pe)||o,Dt=s.convert(b.format,b.colorSpace),bt=s.convert(b.type),pt=M(b.internalFormat,Dt,bt,b.colorSpace),Gt=o&&b.isVideoTexture!==!0,ce=nt.__version===void 0||it===!0,Ie=C(b,pe,Kt);X(r.TEXTURE_CUBE_MAP,b,Kt);let Zt;if(Et){Gt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,pt,pe.width,pe.height);for(let ot=0;ot<6;ot++){Zt=Q[ot].mipmaps;for(let I=0;I<Zt.length;I++){let lt=Zt[I];b.format!==bi?Dt!==null?Gt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,0,0,lt.width,lt.height,Dt,lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,pt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,0,0,lt.width,lt.height,Dt,bt,lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,pt,lt.width,lt.height,0,Dt,bt,lt.data)}}}else{Zt=b.mipmaps,Gt&&ce&&(Zt.length>0&&Ie++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,pt,Q[0].width,Q[0].height));for(let ot=0;ot<6;ot++)if(Wt){Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Q[ot].width,Q[ot].height,Dt,bt,Q[ot].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,pt,Q[ot].width,Q[ot].height,0,Dt,bt,Q[ot].data);for(let I=0;I<Zt.length;I++){let ht=Zt[I].image[ot].image;Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,0,0,ht.width,ht.height,Dt,bt,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,pt,ht.width,ht.height,0,Dt,bt,ht.data)}}else{Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Dt,bt,Q[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,pt,Dt,bt,Q[ot]);for(let I=0;I<Zt.length;I++){let lt=Zt[I];Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,0,0,Dt,bt,lt.image[ot]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,pt,Dt,bt,lt.image[ot])}}}y(b,Kt)&&v(r.TEXTURE_CUBE_MAP),nt.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function yt(A,b,O,it,et,nt){let gt=s.convert(O.format,O.colorSpace),ut=s.convert(O.type),ft=M(O.internalFormat,gt,ut,O.colorSpace);if(!i.get(b).__hasExternalTextures){let Wt=Math.max(1,b.width>>nt),Q=Math.max(1,b.height>>nt);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,nt,ft,Wt,Q,b.depth,0,gt,ut,null):e.texImage2D(et,nt,ft,Wt,Q,0,gt,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),mt(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,et,i.get(O).__webglTexture,0,Nt(b)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,et,i.get(O).__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(A,b,O){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let it=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||mt(b)){let et=b.depthTexture;et&&et.isDepthTexture&&(et.type===Sn?it=r.DEPTH_COMPONENT32F:et.type===wn&&(it=r.DEPTH_COMPONENT24));let nt=Nt(b);mt(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,it,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,it,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,it,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){let it=Nt(b);O&&mt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,r.DEPTH24_STENCIL8,b.width,b.height):mt(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{let it=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let et=0;et<it.length;et++){let nt=it[et],gt=s.convert(nt.format,nt.colorSpace),ut=s.convert(nt.type),ft=M(nt.internalFormat,gt,ut,nt.colorSpace),Et=Nt(b);O&&mt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,ft,b.width,b.height):mt(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et,ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);let it=i.get(b.depthTexture).__webglTexture,et=Nt(b);if(b.depthTexture.format===Kn)mt(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,it,0);else if(b.depthTexture.format===Ns)mt(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function At(A){let b=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ht(b.__webglFramebuffer,A)}else if(O){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]=r.createRenderbuffer(),zt(b.__webglDepthbuffer[it],A,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),zt(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function re(A,b,O){let it=i.get(A);b!==void 0&&yt(it.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&At(A)}function z(A){let b=A.texture,O=i.get(A),it=i.get(b);A.addEventListener("dispose",P),A.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=b.version,a.memory.textures++);let et=A.isWebGLCubeRenderTarget===!0,nt=A.isWebGLMultipleRenderTargets===!0,gt=m(A)||o;if(et){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(o&&b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let ft=0;ft<b.mipmaps.length;ft++)O.__webglFramebuffer[ut][ft]=r.createFramebuffer()}else O.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)O.__webglFramebuffer[ut]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(nt)if(n.drawBuffers){let ut=A.texture;for(let ft=0,Et=ut.length;ft<Et;ft++){let Wt=i.get(ut[ft]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&mt(A)===!1){let ut=nt?b:[b];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ft=0;ft<ut.length;ft++){let Et=ut[ft];O.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ft]);let Wt=s.convert(Et.format,Et.colorSpace),Q=s.convert(Et.type),pe=M(Et.internalFormat,Wt,Q,Et.colorSpace,A.isXRRenderTarget===!0),Kt=Nt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,pe,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,O.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),zt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),X(r.TEXTURE_CUBE_MAP,b,gt);for(let ut=0;ut<6;ut++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)yt(O.__webglFramebuffer[ut][ft],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ft);else yt(O.__webglFramebuffer[ut],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);y(b,gt)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){let ut=A.texture;for(let ft=0,Et=ut.length;ft<Et;ft++){let Wt=ut[ft],Q=i.get(Wt);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),X(r.TEXTURE_2D,Wt,gt),yt(O.__webglFramebuffer,A,Wt,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,0),y(Wt,gt)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ut=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,it.__webglTexture),X(ut,b,gt),o&&b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)yt(O.__webglFramebuffer[ft],A,b,r.COLOR_ATTACHMENT0,ut,ft);else yt(O.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,ut,0);y(b,gt)&&v(ut),e.unbindTexture()}A.depthBuffer&&At(A)}function li(A){let b=m(A)||o,O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let it=0,et=O.length;it<et;it++){let nt=O[it];if(y(nt,b)){let gt=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ut=i.get(nt).__webglTexture;e.bindTexture(gt,ut),v(gt),e.unbindTexture()}}}function wt(A){if(o&&A.samples>0&&mt(A)===!1){let b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],O=A.width,it=A.height,et=r.COLOR_BUFFER_BIT,nt=[],gt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=i.get(A),ft=A.isWebGLMultipleRenderTargets===!0;if(ft)for(let Et=0;Et<b.length;Et++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Et=0;Et<b.length;Et++){nt.push(r.COLOR_ATTACHMENT0+Et),A.depthBuffer&&nt.push(gt);let Wt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Wt===!1&&(A.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),ft&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[Et]),Wt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[gt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[gt])),ft){let Q=i.get(b[Et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,O,it,0,0,O,it,et,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let Et=0;Et<b.length;Et++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,ut.__webglColorRenderbuffer[Et]);let Wt=i.get(b[Et]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Nt(A){return Math.min(n.maxSamples,A.samples)}function mt(A){let b=i.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pe(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Vt(A,b){let O=A.colorSpace,it=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Pl||O!==hn&&O!==Pi&&(le.getTransfer(O)===ge?o===!1?t.has("EXT_sRGB")===!0&&it===bi?(A.format=Pl,A.minFilter=pi,A.generateMipmaps=!1):b=bo.sRGBToLinear(b):(it!==bi||et!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=re,this.setupRenderTarget=z,this.updateRenderTargetMipmap=li,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=mt}function Rx(r,t,e){let i=e.isWebGL2;function n(s,a=Pi){let o,l=le.getTransfer(a);if(s===An)return r.UNSIGNED_BYTE;if(s===$u)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ju)return r.UNSIGNED_SHORT_5_5_5_1;if(s===bf)return r.BYTE;if(s===wf)return r.SHORT;if(s===wh)return r.UNSIGNED_SHORT;if(s===Zu)return r.INT;if(s===wn)return r.UNSIGNED_INT;if(s===Sn)return r.FLOAT;if(s===wi)return i?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Sf)return r.ALPHA;if(s===bi)return r.RGBA;if(s===Tf)return r.LUMINANCE;if(s===Ef)return r.LUMINANCE_ALPHA;if(s===Kn)return r.DEPTH_COMPONENT;if(s===Ns)return r.DEPTH_STENCIL;if(s===Pl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Af)return r.RED;if(s===Ku)return r.RED_INTEGER;if(s===Rf)return r.RG;if(s===ju)return r.RG_INTEGER;if(s===Qu)return r.RGBA_INTEGER;if(s===Ha||s===Ga||s===Va||s===Wa)if(l===ge)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ha)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ha)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ga)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Va)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pc||s===mc||s===gc||s===xc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===pc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===td)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vc||s===yc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===vc)return l===ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===yc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_c||s===Mc||s===bc||s===wc||s===Sc||s===Tc||s===Ec||s===Ac||s===Rc||s===Cc||s===Pc||s===Lc||s===Ic||s===Dc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===_c)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ec)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ac)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ic)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xa||s===Uc||s===Nc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Xa)return l===ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Nc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cf||s===kc||s===Fc||s===zc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Xa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===kc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jn?i?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}var Xl=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},he=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cx={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new he;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ql=class extends Pn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],v=[],M=new tt,C=null,E=new Qe;E.layers.enable(1),E.viewport=new Ae;let T=new Qe;T.layers.enable(2),T.viewport=new Ae;let P=[E,T],_=new Xl;_.layers.enable(1),_.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=y[X];return K===void 0&&(K=new cr,y[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=y[X];return K===void 0&&(K=new cr,y[X]=K),K.getGripSpace()},this.getHand=function(X){let K=y[X];return K===void 0&&(K=new cr,y[X]=K),K.getHandSpace()};function F(X){let K=v.indexOf(X.inputSource);if(K===-1)return;let ct=y[K];ct!==void 0&&(ct.update(X.inputSource,X.frame,c||a),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",L);for(let X=0;X<y.length;X++){let K=v[X];K!==null&&(v[X]=null,y[X].disconnect(K))}w=null,U=null,t.setRenderTarget(m),f=null,d=null,u=null,n=null,p=null,rt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(M),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:n.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,K),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ti(f.framebufferWidth,f.framebufferHeight,{format:bi,type:An,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,ct=null,_t=null;x.depth&&(_t=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=x.stencil?Ns:Kn,ct=x.stencil?Jn:wn);let yt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(yt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new ti(d.textureWidth,d.textureHeight,{format:bi,type:An,depthTexture:new Lo(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let zt=t.properties.get(p);zt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),rt.setContext(n),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(X){for(let K=0;K<X.removed.length;K++){let ct=X.removed[K],_t=v.indexOf(ct);_t>=0&&(v[_t]=null,y[_t].disconnect(ct))}for(let K=0;K<X.added.length;K++){let ct=X.added[K],_t=v.indexOf(ct);if(_t===-1){for(let zt=0;zt<y.length;zt++)if(zt>=v.length){v.push(ct),_t=zt;break}else if(v[zt]===null){v[zt]=ct,_t=zt;break}if(_t===-1)break}let yt=y[_t];yt&&yt.connect(ct)}}let D=new R,k=new R;function G(X,K,ct){D.setFromMatrixPosition(K.matrixWorld),k.setFromMatrixPosition(ct.matrixWorld);let _t=D.distanceTo(k),yt=K.projectionMatrix.elements,zt=ct.projectionMatrix.elements,Ht=yt[14]/(yt[10]-1),At=yt[14]/(yt[10]+1),re=(yt[9]+1)/yt[5],z=(yt[9]-1)/yt[5],li=(yt[8]-1)/yt[0],wt=(zt[8]+1)/zt[0],Nt=Ht*li,mt=Ht*wt,Pe=_t/(-li+wt),Vt=Pe*-li;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Vt),X.translateZ(Pe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let A=Ht+Pe,b=At+Pe,O=Nt-Vt,it=mt+(_t-Vt),et=re*At/b*A,nt=z*At/b*A;X.projectionMatrix.makePerspective(O,it,et,nt,A,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function W(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;_.near=T.near=E.near=X.near,_.far=T.far=E.far=X.far,(w!==_.near||U!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,U=_.far);let K=X.parent,ct=_.cameras;W(_,K);for(let _t=0;_t<ct.length;_t++)W(ct[_t],K);ct.length===2?G(_,E,T):_.projectionMatrix.copy(E.projectionMatrix),q(X,_,K)};function q(X,K,ct){ct===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ll*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let $=null;function j(X,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let _t=!1;ct.length!==_.cameras.length&&(_.cameras.length=0,_t=!0);for(let yt=0;yt<ct.length;yt++){let zt=ct[yt],Ht=null;if(f!==null)Ht=f.getViewport(zt);else{let re=u.getViewSubImage(d,zt);Ht=re.viewport,yt===0&&(t.setRenderTargetTextures(p,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(p))}let At=P[yt];At===void 0&&(At=new Qe,At.layers.enable(yt),At.viewport=new Ae,P[yt]=At),At.matrix.fromArray(zt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(zt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),yt===0&&(_.matrix.copy(At.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),_t===!0&&_.cameras.push(At)}}for(let ct=0;ct<y.length;ct++){let _t=v[ct],yt=y[ct];_t!==null&&yt!==void 0&&yt.update(_t,K,c||a)}$&&$(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let rt=new ad;rt.setAnimationLoop(j),this.setAnimationLoop=function(X){$=X},this.dispose=function(){}}};function Px(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,od(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Lx(r,t,e,i){let n={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let M=v.program;i.uniformBlockBinding(y,M)}function c(y,v){let M=n[y.id];M===void 0&&(g(y),M=h(y),n[y.id]=M,y.addEventListener("dispose",m));let C=v.program;i.updateUBOMapping(y,C);let E=t.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function h(y){let v=u();y.__bindingPointIndex=v;let M=r.createBuffer(),C=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=n[y.id],M=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,T=M.length;E<T;E++){let P=Array.isArray(M[E])?M[E]:[M[E]];for(let _=0,w=P.length;_<w;_++){let U=P[_];if(f(U,E,_,C)===!0){let F=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value],L=0;for(let D=0;D<Y.length;D++){let k=Y[D],G=x(k);typeof k=="number"||typeof k=="boolean"?(U.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,F+L,U.__data)):k.isMatrix3?(U.__data[0]=k.elements[0],U.__data[1]=k.elements[1],U.__data[2]=k.elements[2],U.__data[3]=0,U.__data[4]=k.elements[3],U.__data[5]=k.elements[4],U.__data[6]=k.elements[5],U.__data[7]=0,U.__data[8]=k.elements[6],U.__data[9]=k.elements[7],U.__data[10]=k.elements[8],U.__data[11]=0):(k.toArray(U.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,v,M,C){let E=y.value,T=v+"_"+M;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let P=C[T];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return C[T]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(y){let v=y.uniforms,M=0,C=16;for(let T=0,P=v.length;T<P;T++){let _=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,U=_.length;w<U;w++){let F=_[w],Y=Array.isArray(F.value)?F.value:[F.value];for(let L=0,D=Y.length;L<D;L++){let k=Y[L],G=x(k),W=M%C;W!==0&&C-W<G.boundary&&(M+=C-W),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=G.storage}}}let E=M%C;return E>0&&(M+=C-E),y.__size=M,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function p(){for(let y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}var gr=class{constructor(t={}){let{canvas:e=Hf(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this._useLegacyLights=!1,this.toneMapping=En,this.toneMappingExposure=1;let v=this,M=!1,C=0,E=0,T=null,P=-1,_=null,w=new Ae,U=new Ae,F=null,Y=new vt(0),L=0,D=e.width,k=e.height,G=1,W=null,q=null,$=new Ae(0,0,D,k),j=new Ae(0,0,D,k),rt=!1,X=new mr,K=!1,ct=!1,_t=null,yt=new jt,zt=new tt,Ht=new R,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return T===null?G:1}let z=i;function li(S,N){for(let H=0;H<S.length;H++){let V=S[H],B=e.getContext(V,N);if(B!==null)return B}return null}try{let S={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xh}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",lt,!1),z===null){let N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),z=li(N,S),z===null)throw li(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let wt,Nt,mt,Pe,Vt,A,b,O,it,et,nt,gt,ut,ft,Et,Wt,Q,pe,Kt,Dt,bt,pt,Gt,ce;function Ie(){wt=new J0(z),Nt=new W0(z,wt,t),wt.init(Nt),pt=new Rx(z,wt,Nt),mt=new Ex(z,wt,Nt),Pe=new Q0(z),Vt=new px,A=new Ax(z,wt,mt,Vt,Nt,pt,Pe),b=new q0(v),O=new $0(v),it=new ap(z,Nt),Gt=new G0(z,wt,it,Nt),et=new K0(z,it,Pe,Gt),nt=new ng(z,et,it,Pe),Kt=new ig(z,Nt,A),Wt=new X0(Vt),gt=new fx(v,b,O,wt,Nt,Gt,Wt),ut=new Px(v,Vt),ft=new gx,Et=new bx(wt,Nt),pe=new H0(v,b,O,mt,nt,d,l),Q=new Tx(v,nt,Nt),ce=new Lx(z,Pe,Nt,mt),Dt=new V0(z,wt,Pe,Nt),bt=new j0(z,wt,Pe,Nt),Pe.programs=gt.programs,v.capabilities=Nt,v.extensions=wt,v.properties=Vt,v.renderLists=ft,v.shadowMap=Q,v.state=mt,v.info=Pe}Ie();let Zt=new ql(v,z);this.xr=Zt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let S=wt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=wt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(D,k,!1))},this.getSize=function(S){return S.set(D,k)},this.setSize=function(S,N,H=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=S,k=N,e.width=Math.floor(S*G),e.height=Math.floor(N*G),H===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(D*G,k*G).floor()},this.setDrawingBufferSize=function(S,N,H){D=S,k=N,G=H,e.width=Math.floor(S*H),e.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,N,H,V){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,N,H,V),mt.viewport(w.copy($).multiplyScalar(G).floor())},this.getScissor=function(S){return S.copy(j)},this.setScissor=function(S,N,H,V){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,N,H,V),mt.scissor(U.copy(j).multiplyScalar(G).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(S){mt.setScissorTest(rt=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){q=S},this.getClearColor=function(S){return S.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(S=!0,N=!0,H=!0){let V=0;if(S){let B=!1;if(T!==null){let dt=T.texture.format;B=dt===Qu||dt===ju||dt===Ku}if(B){let dt=T.texture.type,xt=dt===An||dt===wn||dt===wh||dt===Jn||dt===$u||dt===Ju,Tt=pe.getClearColor(),Pt=pe.getClearAlpha(),Xt=Tt.r,kt=Tt.g,Bt=Tt.b;xt?(f[0]=Xt,f[1]=kt,f[2]=Bt,f[3]=Pt,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=Xt,g[1]=kt,g[2]=Bt,g[3]=Pt,z.clearBufferiv(z.COLOR,0,g))}else V|=z.COLOR_BUFFER_BIT}N&&(V|=z.DEPTH_BUFFER_BIT),H&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),Et.dispose(),Vt.dispose(),b.dispose(),O.dispose(),nt.dispose(),Gt.dispose(),ce.dispose(),gt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",hi),Zt.removeEventListener("sessionend",be),_t&&(_t.dispose(),_t=null),ci.stop()};function ot(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let S=Pe.autoReset,N=Q.enabled,H=Q.autoUpdate,V=Q.needsUpdate,B=Q.type;Ie(),Pe.autoReset=S,Q.enabled=N,Q.autoUpdate=H,Q.needsUpdate=V,Q.type=B}function lt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ht(S){let N=S.target;N.removeEventListener("dispose",ht),Rt(N)}function Rt(S){St(S),Vt.remove(S)}function St(S){let N=Vt.get(S).programs;N!==void 0&&(N.forEach(function(H){gt.releaseProgram(H)}),S.isShaderMaterial&&gt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,V,B,dt){N===null&&(N=At);let xt=B.isMesh&&B.matrixWorld.determinant()<0,Tt=Od(S,N,H,V,B);mt.setMaterial(V,xt);let Pt=H.index,Xt=1;if(V.wireframe===!0){if(Pt=et.getWireframeAttribute(H),Pt===void 0)return;Xt=2}let kt=H.drawRange,Bt=H.attributes.position,Ne=kt.start*Xt,yi=(kt.start+kt.count)*Xt;dt!==null&&(Ne=Math.max(Ne,dt.start*Xt),yi=Math.min(yi,(dt.start+dt.count)*Xt)),Pt!==null?(Ne=Math.max(Ne,0),yi=Math.min(yi,Pt.count)):Bt!=null&&(Ne=Math.max(Ne,0),yi=Math.min(yi,Bt.count));let qe=yi-Ne;if(qe<0||qe===1/0)return;Gt.setup(B,V,Tt,H,Pt);let ji,Le=Dt;if(Pt!==null&&(ji=it.get(Pt),Le=bt,Le.setIndex(ji)),B.isMesh)V.wireframe===!0?(mt.setLineWidth(V.wireframeLinewidth*re()),Le.setMode(z.LINES)):Le.setMode(z.TRIANGLES);else if(B.isLine){let $t=V.linewidth;$t===void 0&&($t=1),mt.setLineWidth($t*re()),B.isLineSegments?Le.setMode(z.LINES):B.isLineLoop?Le.setMode(z.LINE_LOOP):Le.setMode(z.LINE_STRIP)}else B.isPoints?Le.setMode(z.POINTS):B.isSprite&&Le.setMode(z.TRIANGLES);if(B.isBatchedMesh)Le.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Le.renderInstances(Ne,qe,B.count);else if(H.isInstancedBufferGeometry){let $t=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ka=Math.min(H.instanceCount,$t);Le.renderInstances(Ne,qe,ka)}else Le.render(Ne,qe)};function _e(S,N,H){S.transparent===!0&&S.side===me&&S.forceSinglePass===!1?(S.side=Ze,S.needsUpdate=!0,Nr(S,N,H),S.side=Cn,S.needsUpdate=!0,Nr(S,N,H),S.side=me):Nr(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),m=Et.get(H),m.init(),y.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),S!==H&&S.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);let V=new Set;return S.traverse(function(B){let dt=B.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){let Tt=dt[xt];_e(Tt,H,B),V.add(Tt)}else _e(dt,H,B),V.add(dt)}),y.pop(),m=null,V},this.compileAsync=function(S,N,H=null){let V=this.compile(S,N,H);return new Promise(B=>{function dt(){if(V.forEach(function(xt){Vt.get(xt).currentProgram.isReady()&&V.delete(xt)}),V.size===0){B(S);return}setTimeout(dt,10)}wt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Me=null;function Xe(S){Me&&Me(S)}function hi(){ci.stop()}function be(){ci.start()}let ci=new ad;ci.setAnimationLoop(Xe),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(S){Me=S,Zt.setAnimationLoop(S),S===null?ci.stop():ci.start()},Zt.addEventListener("sessionstart",hi),Zt.addEventListener("sessionend",be),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(N),N=Zt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,T),m=Et.get(S,y.length),m.init(),y.push(m),yt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(yt),ct=this.localClippingEnabled,K=Wt.init(this.clippingPlanes,ct),x=ft.get(S,p.length),x.init(),p.push(x),Xi(S,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,q),this.info.render.frame++,K===!0&&Wt.beginShadows();let H=m.state.shadowsArray;if(Q.render(H,S,N),K===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(x,S),m.setupLights(v._useLegacyLights),N.isArrayCamera){let V=N.cameras;for(let B=0,dt=V.length;B<dt;B++){let xt=V[B];tc(x,S,xt,xt.viewport)}}else tc(x,S,N);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(v,S,N),Gt.resetDefaultState(),P=-1,_=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Xi(S,N,H,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){V&&Ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4(yt);let xt=nt.update(S),Tt=S.material;Tt.visible&&x.push(S,xt,Tt,H,Ht.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){let xt=nt.update(S),Tt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ht.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ht.copy(xt.boundingSphere.center)),Ht.applyMatrix4(S.matrixWorld).applyMatrix4(yt)),Array.isArray(Tt)){let Pt=xt.groups;for(let Xt=0,kt=Pt.length;Xt<kt;Xt++){let Bt=Pt[Xt],Ne=Tt[Bt.materialIndex];Ne&&Ne.visible&&x.push(S,xt,Ne,H,Ht.z,Bt)}}else Tt.visible&&x.push(S,xt,Tt,H,Ht.z,null)}}let dt=S.children;for(let xt=0,Tt=dt.length;xt<Tt;xt++)Xi(dt[xt],N,H,V)}function tc(S,N,H,V){let B=S.opaque,dt=S.transmissive,xt=S.transparent;m.setupLightsView(H),K===!0&&Wt.setGlobalState(v.clippingPlanes,H),dt.length>0&&Bd(B,dt,N,H),V&&mt.viewport(w.copy(V)),B.length>0&&Ur(B,N,H),dt.length>0&&Ur(dt,N,H),xt.length>0&&Ur(xt,N,H),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Bd(S,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let dt=Nt.isWebGL2;_t===null&&(_t=new ti(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?wi:An,minFilter:Qn,samples:dt?4:0})),v.getDrawingBufferSize(zt),dt?_t.setSize(zt.x,zt.y):_t.setSize(Il(zt.x),Il(zt.y));let xt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(Y),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Tt=v.toneMapping;v.toneMapping=En,Ur(S,H,V),A.updateMultisampleRenderTarget(_t),A.updateRenderTargetMipmap(_t);let Pt=!1;for(let Xt=0,kt=N.length;Xt<kt;Xt++){let Bt=N[Xt],Ne=Bt.object,yi=Bt.geometry,qe=Bt.material,ji=Bt.group;if(qe.side===me&&Ne.layers.test(V.layers)){let Le=qe.side;qe.side=Ze,qe.needsUpdate=!0,ec(Ne,H,V,yi,qe,ji),qe.side=Le,qe.needsUpdate=!0,Pt=!0}}Pt===!0&&(A.updateMultisampleRenderTarget(_t),A.updateRenderTargetMipmap(_t)),v.setRenderTarget(xt),v.setClearColor(Y,L),v.toneMapping=Tt}function Ur(S,N,H){let V=N.isScene===!0?N.overrideMaterial:null;for(let B=0,dt=S.length;B<dt;B++){let xt=S[B],Tt=xt.object,Pt=xt.geometry,Xt=V===null?xt.material:V,kt=xt.group;Tt.layers.test(H.layers)&&ec(Tt,N,H,Pt,Xt,kt)}}function ec(S,N,H,V,B,dt){S.onBeforeRender(v,N,H,V,B,dt),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(v,N,H,V,S,dt),B.transparent===!0&&B.side===me&&B.forceSinglePass===!1?(B.side=Ze,B.needsUpdate=!0,v.renderBufferDirect(H,N,V,B,S,dt),B.side=Cn,B.needsUpdate=!0,v.renderBufferDirect(H,N,V,B,S,dt),B.side=me):v.renderBufferDirect(H,N,V,B,S,dt),S.onAfterRender(v,N,H,V,B,dt)}function Nr(S,N,H){N.isScene!==!0&&(N=At);let V=Vt.get(S),B=m.state.lights,dt=m.state.shadowsArray,xt=B.state.version,Tt=gt.getParameters(S,B.state,dt,N,H),Pt=gt.getProgramCacheKey(Tt),Xt=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?O:b).get(S.envMap||V.environment),Xt===void 0&&(S.addEventListener("dispose",ht),Xt=new Map,V.programs=Xt);let kt=Xt.get(Pt);if(kt!==void 0){if(V.currentProgram===kt&&V.lightsStateVersion===xt)return nc(S,Tt),kt}else Tt.uniforms=gt.getUniforms(S),S.onBuild(H,Tt,v),S.onBeforeCompile(Tt,v),kt=gt.acquireProgram(Tt,Pt),Xt.set(Pt,kt),V.uniforms=Tt.uniforms;let Bt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Bt.clippingPlanes=Wt.uniform),nc(S,Tt),V.needsLights=Gd(S),V.lightsStateVersion=xt,V.needsLights&&(Bt.ambientLightColor.value=B.state.ambient,Bt.lightProbe.value=B.state.probe,Bt.directionalLights.value=B.state.directional,Bt.directionalLightShadows.value=B.state.directionalShadow,Bt.spotLights.value=B.state.spot,Bt.spotLightShadows.value=B.state.spotShadow,Bt.rectAreaLights.value=B.state.rectArea,Bt.ltc_1.value=B.state.rectAreaLTC1,Bt.ltc_2.value=B.state.rectAreaLTC2,Bt.pointLights.value=B.state.point,Bt.pointLightShadows.value=B.state.pointShadow,Bt.hemisphereLights.value=B.state.hemi,Bt.directionalShadowMap.value=B.state.directionalShadowMap,Bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Bt.spotShadowMap.value=B.state.spotShadowMap,Bt.spotLightMatrix.value=B.state.spotLightMatrix,Bt.spotLightMap.value=B.state.spotLightMap,Bt.pointShadowMap.value=B.state.pointShadowMap,Bt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=kt,V.uniformsList=null,kt}function ic(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Is.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function nc(S,N){let H=Vt.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Od(S,N,H,V,B){N.isScene!==!0&&(N=At),A.resetTextureUnits();let dt=N.fog,xt=V.isMeshStandardMaterial?N.environment:null,Tt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:hn,Pt=(V.isMeshStandardMaterial?O:b).get(V.envMap||xt),Xt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Bt=!!H.morphAttributes.position,Ne=!!H.morphAttributes.normal,yi=!!H.morphAttributes.color,qe=En;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(qe=v.toneMapping);let ji=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Le=ji!==void 0?ji.length:0,$t=Vt.get(V),ka=m.state.lights;if(K===!0&&(ct===!0||S!==_)){let Ri=S===_&&V.id===P;Wt.setState(V,S,Ri)}let De=!1;V.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==ka.state.version||$t.outputColorSpace!==Tt||B.isBatchedMesh&&$t.batching===!1||!B.isBatchedMesh&&$t.batching===!0||B.isInstancedMesh&&$t.instancing===!1||!B.isInstancedMesh&&$t.instancing===!0||B.isSkinnedMesh&&$t.skinning===!1||!B.isSkinnedMesh&&$t.skinning===!0||B.isInstancedMesh&&$t.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&$t.instancingColor===!1&&B.instanceColor!==null||$t.envMap!==Pt||V.fog===!0&&$t.fog!==dt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Wt.numPlanes||$t.numIntersection!==Wt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==kt||$t.morphTargets!==Bt||$t.morphNormals!==Ne||$t.morphColors!==yi||$t.toneMapping!==qe||Nt.isWebGL2===!0&&$t.morphTargetsCount!==Le)&&(De=!0):(De=!0,$t.__version=V.version);let On=$t.currentProgram;De===!0&&(On=Nr(V,N,B));let sc=!1,js=!1,Fa=!1,ni=On.getUniforms(),Hn=$t.uniforms;if(mt.useProgram(On.program)&&(sc=!0,js=!0,Fa=!0),V.id!==P&&(P=V.id,js=!0),sc||_!==S){ni.setValue(z,"projectionMatrix",S.projectionMatrix),ni.setValue(z,"viewMatrix",S.matrixWorldInverse);let Ri=ni.map.cameraPosition;Ri!==void 0&&Ri.setValue(z,Ht.setFromMatrixPosition(S.matrixWorld)),Nt.logarithmicDepthBuffer&&ni.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ni.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,js=!0,Fa=!0)}if(B.isSkinnedMesh){ni.setOptional(z,B,"bindMatrix"),ni.setOptional(z,B,"bindMatrixInverse");let Ri=B.skeleton;Ri&&(Nt.floatVertexTextures?(Ri.boneTexture===null&&Ri.computeBoneTexture(),ni.setValue(z,"boneTexture",Ri.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(ni.setOptional(z,B,"batchingTexture"),ni.setValue(z,"batchingTexture",B._matricesTexture,A));let za=H.morphAttributes;if((za.position!==void 0||za.normal!==void 0||za.color!==void 0&&Nt.isWebGL2===!0)&&Kt.update(B,H,On),(js||$t.receiveShadow!==B.receiveShadow)&&($t.receiveShadow=B.receiveShadow,ni.setValue(z,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Hn.envMap.value=Pt,Hn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),js&&(ni.setValue(z,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&Hd(Hn,Fa),dt&&V.fog===!0&&ut.refreshFogUniforms(Hn,dt),ut.refreshMaterialUniforms(Hn,V,G,k,_t),Is.upload(z,ic($t),Hn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Is.upload(z,ic($t),Hn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ni.setValue(z,"center",B.center),ni.setValue(z,"modelViewMatrix",B.modelViewMatrix),ni.setValue(z,"normalMatrix",B.normalMatrix),ni.setValue(z,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ri=V.uniformsGroups;for(let Ba=0,Vd=Ri.length;Ba<Vd;Ba++)if(Nt.isWebGL2){let rc=Ri[Ba];ce.update(rc,On),ce.bind(rc,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function Hd(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Gd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,N,H){Vt.get(S.texture).__webglTexture=N,Vt.get(S.depthTexture).__webglTexture=H;let V=Vt.get(S);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){let H=Vt.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){T=S,C=N,E=H;let V=!0,B=null,dt=!1,xt=!1;if(S){let Pt=Vt.get(S);Pt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(z.FRAMEBUFFER,null),V=!1):Pt.__webglFramebuffer===void 0?A.setupRenderTarget(S):Pt.__hasExternalTextures&&A.rebindTextures(S,Vt.get(S.texture).__webglTexture,Vt.get(S.depthTexture).__webglTexture);let Xt=S.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(xt=!0);let kt=Vt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(kt[N])?B=kt[N][H]:B=kt[N],dt=!0):Nt.isWebGL2&&S.samples>0&&A.useMultisampledRTT(S)===!1?B=Vt.get(S).__webglMultisampledFramebuffer:Array.isArray(kt)?B=kt[H]:B=kt,w.copy(S.viewport),U.copy(S.scissor),F=S.scissorTest}else w.copy($).multiplyScalar(G).floor(),U.copy(j).multiplyScalar(G).floor(),F=rt;if(mt.bindFramebuffer(z.FRAMEBUFFER,B)&&Nt.drawBuffers&&V&&mt.drawBuffers(S,B),mt.viewport(w),mt.scissor(U),mt.setScissorTest(F),dt){let Pt=Vt.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pt.__webglTexture,H)}else if(xt){let Pt=Vt.get(S.texture),Xt=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pt.__webglTexture,H||0,Xt)}P=-1},this.readRenderTargetPixels=function(S,N,H,V,B,dt,xt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){mt.bindFramebuffer(z.FRAMEBUFFER,Tt);try{let Pt=S.texture,Xt=Pt.format,kt=Pt.type;if(Xt!==bi&&pt.convert(Xt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Bt=kt===wi&&(wt.has("EXT_color_buffer_half_float")||Nt.isWebGL2&&wt.has("EXT_color_buffer_float"));if(kt!==An&&pt.convert(kt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===Sn&&(Nt.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&H>=0&&H<=S.height-B&&z.readPixels(N,H,V,B,pt.convert(Xt),pt.convert(kt),dt)}finally{let Pt=T!==null?Vt.get(T).__webglFramebuffer:null;mt.bindFramebuffer(z.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(S,N,H=0){let V=Math.pow(2,-H),B=Math.floor(N.image.width*V),dt=Math.floor(N.image.height*V);A.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,S.x,S.y,B,dt),mt.unbindTexture()},this.copyTextureToTexture=function(S,N,H,V=0){let B=N.image.width,dt=N.image.height,xt=pt.convert(H.format),Tt=pt.convert(H.type);A.setTexture2D(H,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,V,S.x,S.y,B,dt,xt,Tt,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,V,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,xt,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,V,S.x,S.y,xt,Tt,N.image),V===0&&H.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,H,V,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let dt=S.max.x-S.min.x+1,xt=S.max.y-S.min.y+1,Tt=S.max.z-S.min.z+1,Pt=pt.convert(V.format),Xt=pt.convert(V.type),kt;if(V.isData3DTexture)A.setTexture3D(V,0),kt=z.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),kt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let Bt=z.getParameter(z.UNPACK_ROW_LENGTH),Ne=z.getParameter(z.UNPACK_IMAGE_HEIGHT),yi=z.getParameter(z.UNPACK_SKIP_PIXELS),qe=z.getParameter(z.UNPACK_SKIP_ROWS),ji=z.getParameter(z.UNPACK_SKIP_IMAGES),Le=H.isCompressedTexture?H.mipmaps[B]:H.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Le.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Le.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,S.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,S.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,S.min.z),H.isDataTexture||H.isData3DTexture?z.texSubImage3D(kt,B,N.x,N.y,N.z,dt,xt,Tt,Pt,Xt,Le.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(kt,B,N.x,N.y,N.z,dt,xt,Tt,Pt,Le.data)):z.texSubImage3D(kt,B,N.x,N.y,N.z,dt,xt,Tt,Pt,Xt,Le),z.pixelStorei(z.UNPACK_ROW_LENGTH,Bt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne),z.pixelStorei(z.UNPACK_SKIP_PIXELS,yi),z.pixelStorei(z.UNPACK_SKIP_ROWS,qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ji),B===0&&V.generateMipmaps&&z.generateMipmap(kt),mt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),mt.unbindTexture()},this.resetState=function(){C=0,E=0,T=null,mt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Sh?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===$o?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?jn:ed}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===jn?Ee:hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Yl=class extends gr{};Yl.prototype.isWebGL1Renderer=!0;var Io=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Do=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Uo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ui=new R,xr=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.applyMatrix4(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.applyNormalMatrix(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ui.fromBufferAttribute(this,e),ui.transformDirection(t),this.setXYZ(e,ui.x,ui.y,ui.z);return this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zs=class extends Zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,nr=new R,Ts=new R,Es=new R,As=new tt,sr=new tt,fd=new jt,so=new R,rr=new R,ro=new R,Ru=new tt,xl=new tt,Cu=new tt,mi=class extends Je{constructor(t=new zs){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Uo(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new xr(i,3,0,!1)),Ss.setAttribute("uv",new xr(i,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),fd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-Es.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;oo(so.set(-.5,-.5,0),Es,a,Ts,n,s),oo(rr.set(.5,-.5,0),Es,a,Ts,n,s),oo(ro.set(.5,.5,0),Es,a,Ts,n,s),Ru.set(0,0),xl.set(1,0),Cu.set(1,1);let o=t.ray.intersectTriangle(so,rr,ro,!1,nr);if(o===null&&(oo(rr.set(-.5,.5,0),Es,a,Ts,n,s),xl.set(0,1),o=t.ray.intersectTriangle(so,ro,rr,!1,nr),o===null))return;let l=t.ray.origin.distanceTo(nr);l<t.near||l>t.far||e.push({distance:l,point:nr.clone(),uv:$n.getInterpolation(nr,so,rr,ro,Ru,xl,Cu,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function oo(r,t,e,i,n,s){As.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(sr.x=s*As.x-n*As.y,sr.y=n*As.x+s*As.y):sr.copy(As),r.copy(t),r.x+=sr.x,r.y+=sr.y,r.applyMatrix4(fd)}var No=class extends Si{constructor(t=null,e=1,i=1,n,s,a,o,l,c=Ke,h=Ke,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends ve{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Rs=new jt,Pu=new jt,ao=[],Lu=new cn,Ix=new jt,or=new ee,ar=new un,In=class extends ee{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ix)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Rs),Lu.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Lu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Rs),ar.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(i),t.ray.intersectsSphere(ar)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Rs),Pu.multiplyMatrices(i,Rs),or.matrixWorld=Pu,or.raycast(t,ao);for(let a=0,o=ao.length;a<o;a++){let l=ao[a];l.instanceId=s,l.object=this,e.push(l)}ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var vr=class extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Iu=new R,Du=new R,Uu=new jt,vl=new pr,lo=new un,Zl=class extends Je{constructor(t=new ye,e=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Iu.fromBufferAttribute(e,n-1),Du.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Iu.distanceTo(Du);t.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(n),lo.radius+=s,t.ray.intersectsSphere(lo)===!1)return;Uu.copy(n).invert(),vl.copy(t.ray).applyMatrix4(Uu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,h=new R,u=new R,d=new R,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=p,M=y-1;v<M;v+=f){let C=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,E),vl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let P=t.ray.origin.distanceTo(d);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=p,M=y-1;v<M;v+=f){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),vl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let E=t.ray.origin.distanceTo(d);E<t.near||E>t.far||e.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Nu=new R,ku=new R,ko=class extends Zl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Nu.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Nu.distanceTo(ku);t.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $l=class extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fu=new jt,Jl=new pr,ho=new un,co=new R,Fo=class extends Je{constructor(t=new ye,e=new $l){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(n),ho.radius+=s,t.ray.intersectsSphere(ho)===!1)return;Fu.copy(n).invert(),Jl.copy(t.ray).applyMatrix4(Fu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);co.fromBufferAttribute(u,m),zu(co,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)co.fromBufferAttribute(u,g),zu(co,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function zu(r,t,e,i,n,s,a){let o=Jl.distanceSqToPoint(r);if(o<e){let l=new R;Jl.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var Bs=class extends Si{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new tt:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new R,n=[],s=[],a=[],o=new R,l=new jt;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(je(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(je(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yr=class extends Ii{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let i=e||new tt,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Kl=class extends yr{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var uo=new R,yl=new Eh,_l=new Eh,Ml=new Eh,jl=class extends Ii{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(uo.subVectors(n[0],n[1]).add(n[0]),c=uo);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(uo.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=uo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),yl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),_l.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Ml.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),_l.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ml.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(yl.calc(l),_l.calc(l),Ml.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bu(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function Dx(r,t){let e=1-r;return e*e*t}function Ux(r,t){return 2*(1-r)*r*t}function Nx(r,t){return r*r*t}function ur(r,t,e,i){return Dx(r,t)+Ux(r,e)+Nx(r,i)}function kx(r,t){let e=1-r;return e*e*e*t}function Fx(r,t){let e=1-r;return 3*e*e*r*t}function zx(r,t){return 3*(1-r)*r*r*t}function Bx(r,t){return r*r*r*t}function dr(r,t,e,i,n){return kx(r,t)+Fx(r,e)+zx(r,i)+Bx(r,n)}var zo=class extends Ii{constructor(t=new tt,e=new tt,i=new tt,n=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new tt){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(dr(t,n.x,s.x,a.x,o.x),dr(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ql=class extends Ii{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(dr(t,n.x,s.x,a.x,o.x),dr(t,n.y,s.y,a.y,o.y),dr(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends Ii{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},th=class extends Ii{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends Ii{constructor(t=new tt,e=new tt,i=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new tt){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(ur(t,n.x,s.x,a.x),ur(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eh=class extends Ii{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(ur(t,n.x,s.x,a.x),ur(t,n.y,s.y,a.y),ur(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Bu(o,l.x,c.x,h.x,u.x),Bu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new tt().fromArray(n))}return this}},Ou=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:jl,CubicBezierCurve:zo,CubicBezierCurve3:Ql,EllipseCurve:yr,LineCurve:Bo,LineCurve3:th,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:eh,SplineCurve:Ho}),ih=class extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ou[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Ou[n.type]().fromJSON(n))}return this}},nh=class extends ih{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Bo(this.currentPoint.clone(),new tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Oo(this.currentPoint.clone(),new tt(t,e),new tt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new zo(this.currentPoint.clone(),new tt(t,e),new tt(i,n),new tt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ho(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let c=new yr(t,e,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Dn=class r extends ye{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=je(n,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],h=1/e,u=new R,d=new tt,f=new R,g=new R,x=new R,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let v=i+y*h*n,M=Math.sin(v),C=Math.cos(v);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*M,u.y=t[E].y,u.z=t[E].x*C,a.push(u.x,u.y,u.z),d.x=y/e,d.y=E/(t.length-1),o.push(d.x,d.y);let T=l[3*E+0]*M,P=l[3*E+1],_=l[3*E+0]*C;c.push(T,P,_)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let M=v+y*t.length,C=M,E=M+t.length,T=M+t.length+1,P=M+1;s.push(C,E,P),s.push(T,P,E)}this.setIndex(s),this.setAttribute("position",new qt(a,3)),this.setAttribute("uv",new qt(o,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},Un=class r extends Dn{constructor(t=1,e=1,i=4,n=8){let s=new nh;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},es=class r extends ye{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new R,h=new tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qt=class r extends ye{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function y(){let M=new R,C=new R,E=0,T=(e-t)/i;for(let P=0;P<=s;P++){let _=[],w=P/s,U=w*(e-t)+t;for(let F=0;F<=n;F++){let Y=F/n,L=Y*l+o,D=Math.sin(L),k=Math.cos(L);C.x=U*D,C.y=-w*i+m,C.z=U*k,u.push(C.x,C.y,C.z),M.set(D,T,k).normalize(),d.push(M.x,M.y,M.z),f.push(Y,1-w),_.push(g++)}x.push(_)}for(let P=0;P<n;P++)for(let _=0;_<s;_++){let w=x[_][P],U=x[_+1][P],F=x[_+1][P+1],Y=x[_][P+1];h.push(w,U,Y),h.push(U,F,Y),E+=6}c.addGroup(p,E,0),p+=E}function v(M){let C=g,E=new tt,T=new R,P=0,_=M===!0?t:e,w=M===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let U=g;for(let F=0;F<=n;F++){let L=F/n*l+o,D=Math.cos(L),k=Math.sin(L);T.x=_*k,T.y=m*w,T.z=_*D,u.push(T.x,T.y,T.z),d.push(0,w,0),E.x=D*.5+.5,E.y=k*.5*w+.5,f.push(E.x,E.y),g++}for(let F=0;F<n;F++){let Y=C+F,L=U+F;M===!0?h.push(L,L+1,Y):h.push(L+1,L,Y),P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Di=class r extends Qt{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sh=class r extends ye{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new R,M=new R,C=new R;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],M),f(e[E+2],C),l(v,M,C,y)}function l(y,v,M,C){let E=C+1,T=[];for(let P=0;P<=E;P++){T[P]=[];let _=y.clone().lerp(M,P/E),w=v.clone().lerp(M,P/E),U=E-P;for(let F=0;F<=U;F++)F===0&&P===E?T[P][F]=_:T[P][F]=_.clone().lerp(w,F/U)}for(let P=0;P<E;P++)for(let _=0;_<2*(E-P)-1;_++){let w=Math.floor(_/2);_%2===0?(d(T[P][w+1]),d(T[P+1][w]),d(T[P][w])):(d(T[P][w+1]),d(T[P+1][w+1]),d(T[P+1][w]))}}function c(y){let v=new R;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(y),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function h(){let y=new R;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];let M=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;a.push(M,1-C)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],M=a[y+2],C=a[y+4],E=Math.max(v,M,C),T=Math.min(v,M,C);E>.9&&T<.1&&(v<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,v){let M=y*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){let y=new R,v=new R,M=new R,C=new R,E=new tt,T=new tt,P=new tt;for(let _=0,w=0;_<s.length;_+=9,w+=6){y.set(s[_+0],s[_+1],s[_+2]),v.set(s[_+3],s[_+4],s[_+5]),M.set(s[_+6],s[_+7],s[_+8]),E.set(a[w+0],a[w+1]),T.set(a[w+2],a[w+3]),P.set(a[w+4],a[w+5]),C.copy(y).add(v).add(M).divideScalar(3);let U=m(C);x(E,w+0,y,U),x(T,w+2,v,U),x(P,w+4,M,U)}}function x(y,v,M,C){C<0&&y.x===1&&(a[v]=y.x-1),M.x===0&&M.z===0&&(a[v]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var Go=class r extends sh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Os=class r extends ye{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new R,g=new tt;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let p=s+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<n;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,v=y,M=y+i+1,C=y+i+2,E=y+1;o.push(v,M,E),o.push(M,C,E)}}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ce=class r extends ye{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],v=p/i,M=0;p===0&&a===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){let E=C/e;u.x=-t*Math.cos(n+E*s)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(n+E*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(E+M,1-v),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let v=h[p][y+1],M=h[p][y],C=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(v,M,E),(p!==i-1||l<Math.PI)&&f.push(M,C,E)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ei=class r extends ye{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let x=g/n*s,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let x=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,y=(n+1)*f+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Vo=class extends Re{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ue=class extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function fo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ox(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Hs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let a;i:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break e}a=e.length;break i}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break e}a=i,i=0;break i}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rh=class extends Hs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oc:s=t,o=2*e-i;break;case Hc:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Oc:a=t,l=2*i-e;break;case Hc:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+y*a[c+C]+v*a[l+C]+M*a[u+C];return s}},oh=class extends Hs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},ah=class extends Hs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Hi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fo(e,this.TimeBufferType),this.values=fo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:fo(t.times,Array),values:fo(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ah(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case go:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return go;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Ox(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===qa,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=go;var is=class extends Hi{};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=mo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var lh=class extends Hi{};lh.prototype.ValueTypeName="color";var hh=class extends Hi{};hh.prototype.ValueTypeName="number";var ch=class extends Hs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)$e.slerpFlat(s,0,a,c-o,a,c,l);return s}},_r=class extends Hi{InterpolantFactoryMethodLinear(t){return new ch(this.times,this.values,this.getValueSize(),t)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.DefaultInterpolation=go;_r.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Hi{};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=mo;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var uh=class extends Hi{};uh.prototype.ValueTypeName="vector";var dh=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Hx=new dh,fh=class{constructor(t){this.manager=t!==void 0?t:Hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};fh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Wo=class extends Mr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},bl=new jt,Hu=new R,Gu=new R,Xo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vu=new jt,lr=new R,wl=new R,ph=class extends Xo{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(lr),wl.copy(i.position),wl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(wl),i.updateMatrixWorld(),n.makeTranslation(-lr.x,-lr.y,-lr.z),Vu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu)}},Gi=class extends Mr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ph}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},mh=class extends Xo{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qo=class extends Mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new mh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Yo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Wu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Wu(){return(typeof performance>"u"?Date:performance).now()}var Ah="\\[\\]\\.:\\/",Gx=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",Vx="[^"+Ah.replace("\\.","")+"]",Wx=/((?:WC+[\/:])*)/.source.replace("WC",Rh),Xx=/(WCOD+)?/.source.replace("WCOD",Vx),qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),Yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),Zx=new RegExp("^"+Wx+Xx+qx+Yx+"$"),$x=["material","materials","bones","map"],gh=class{constructor(t,e,i){let n=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gx,"")}static parseTrackName(t){let e=Zx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);$x.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=gh;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);var Ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jx=new Fs(-1,1,1,-1,0,1),Ch=class extends ye{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}},Kx=new Ch,kn=class{constructor(t){this._mesh=new ee(Kx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Jx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Vs=class extends Ei{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Nn.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new kn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var wr=class extends Ei{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},jo=class extends Ei{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Qo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new tt);this._width=i.width,this._height=i.height,e=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vs(Ko),this.copyPass.material.blending=Yi,this.clock=new Yo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wr!==void 0&&(a instanceof wr?i=!0:a instanceof jo&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ta=class extends Ei{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new vt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var pd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ws=class r extends Ei{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ti(s,a,{type:wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new ti(s,a,{type:wi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ti(s,a,{type:wi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=pd;this.highPassUniforms=Nn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ko;this.copyUniforms=Nn.clone(h.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Li,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new vt,this.oldClearAlpha=1,this.basic=new Ge,this.fsQuad=new kn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new tt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ws.BlurDirectionX=new tt(1,0);Ws.BlurDirectionY=new tt(0,1);var md={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ea=class extends Ei{constructor(){super();let t=md;this.uniforms=Nn.clone(t.uniforms),this.material=new Vo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new kn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_h?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===br?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Ai(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Vi=class{constructor(t=1){let e=Ai(t);this.perm=new Uint16Array(512),this.gx=new Float32Array(256),this.gy=new Float32Array(256);let i=[];for(let n=0;n<256;n++){i.push(n);let s=e()*Math.PI*2;this.gx[n]=Math.cos(s),this.gy[n]=Math.sin(s)}for(let n=255;n>0;n--){let s=Math.floor(e()*(n+1));[i[n],i[s]]=[i[s],i[n]]}for(let n=0;n<512;n++)this.perm[n]=i[n&255]}noise(t,e,i=0){let n=Math.floor(t),s=Math.floor(e),a=t-n,o=e-s,l=n+1,c=s+1;i>0&&(n=(n%i+i)%i,s=(s%i+i)%i,l=(l%i+i)%i,c=(c%i+i)%i);let h=this.perm,u=(M,C,E,T)=>{let P=h[h[M&255]+C&511];return this.gx[P]*E+this.gy[P]*T},d=a*a*a*(a*(a*6-15)+10),f=o*o*o*(o*(o*6-15)+10),g=u(n,s,a,o),x=u(l,s,a-1,o),m=u(n,c,a,o-1),p=u(l,c,a-1,o-1),y=g+d*(x-g),v=m+d*(p-m);return(y+f*(v-y))*1.414}fbm(t,e,i=5,n=0,s=2,a=.5){let o=0,l=1,c=0,h=1;for(let u=0;u<i;u++)o+=l*this.noise(t*h,e*h,n?n*h:0),c+=l,l*=a,h*=s;return o/c}ridged(t,e,i=5,n=0){let s=0,a=.5,o=1,l=0;for(let c=0;c<i;c++){let h=1-Math.abs(this.noise(t*o,e*o,n?n*o:0));s+=a*h*h,l+=a,a*=.5,o*=2}return s/l}worley(t,e,i,n=.9){let s=Math.floor(t),a=Math.floor(e),o=9,l=9,c=0;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){let d=s+u,f=a+h,g=(d%i+i)%i,x=(f%i+i)%i,m=this.perm[this.perm[g&255]+x&511],p=this.perm[m+71&511],y=d+.5+(m/255-.5)*n,v=f+.5+(p/255-.5)*n,M=Math.hypot(y-t,v-e);M<o?(l=o,o=M,c=m):M<l&&(l=M)}return{d1:o,d2:l,id:c}}},ie=(r,t,e)=>r<t?t:r>e?e:r,Ct=(r,t,e)=>r+(t-r)*e,we=(r,t,e)=>{let i=ie((e-r)/(t-r),0,1);return i*i*(3-2*i)};var ke=new Vi(1337),oi=new Vi(7331);function dn(r){return{size:r,col:new Float32Array(r*r*3),h:new Float32Array(r*r),rough:new Float32Array(r*r).fill(.9),metal:new Float32Array(r*r)}}function Ph(r,t,e,i=4){let n=new No(r,t,t,bi);return n.wrapS=n.wrapT=fr,n.magFilter=pi,n.minFilter=Qn,n.generateMipmaps=!0,n.anisotropy=8,e&&(n.colorSpace=Ee),n.needsUpdate=!0,n}function fn(r,t=4){let{size:e,col:i,h:n,rough:s,metal:a}=r,o=new Uint8Array(e*e*4),l=new Uint8Array(e*e*4),c=new Uint8Array(e*e*4);for(let h=0;h<e;h++)for(let u=0;u<e;u++){let d=h*e+u;o[d*4]=ie(Math.pow(i[d*3],1/2.2)*255,0,255),o[d*4+1]=ie(Math.pow(i[d*3+1],1/2.2)*255,0,255),o[d*4+2]=ie(Math.pow(i[d*3+2],1/2.2)*255,0,255),o[d*4+3]=255;let f=(u-1+e)%e,g=(u+1)%e,x=(h-1+e)%e,m=(h+1)%e,p=(n[h*e+g]-n[h*e+f])*t,y=(n[m*e+u]-n[x*e+u])*t,v=Math.hypot(p,y,1);l[d*4]=(-p/v*.5+.5)*255,l[d*4+1]=(-y/v*.5+.5)*255,l[d*4+2]=(1/v*.5+.5)*255,l[d*4+3]=255,c[d*4]=255,c[d*4+1]=ie(s[d],.04,1)*255,c[d*4+2]=ie(a[d],0,1)*255,c[d*4+3]=255}return{map:Ph(o,e,!0),normalMap:Ph(l,e,!1),ormMap:Ph(c,e,!1)}}function pn(r,t,e,i,n){r.col[t*3]=e,r.col[t*3+1]=i,r.col[t*3+2]=n}function jx(r=512){let t=dn(r);for(let e=0;e<r;e++)for(let i=0;i<r;i++){let n=i/r,s=e/r,a=e*r+i,o=ke.fbm(n*6,s*6,5,6),l=we(-.15,.3,ke.fbm(n*3+11,s*3+3,4,3)),c=oi.noise(n*96,s*96,96),h=oi.noise(n*140,s*18,140)*.5+oi.noise(n*22,s*160,22)*.5,u=ke.worley(n*24,s*24,24),d=we(.3,.2,u.d1)*(u.id%9===0?1:0),f=[.075,.058,.045],g=[.24,.215,.13],x=[.085,.11,.05],m=we(.1,.5,oi.fbm(n*5,s*5,3,5)),p=Ct(f[0],Ct(g[0],x[0],m),l),y=Ct(f[1],Ct(g[1],x[1],m),l),v=Ct(f[2],Ct(g[2],x[2],m),l),M=.75+o*.35+c*.08+h*.12*l;p*=M,y*=M,v*=M,p=Ct(p,.11,d*.6),y=Ct(y,.105,d*.6),v=Ct(v,.1,d*.6),pn(t,a,p,y,v);let C=we(-.2,-.45,o)*(1-l);t.h[a]=o*.4+c*.05+h*.12*l+d*.35,t.rough[a]=Ct(.95,.35,C)}return fn(t,6)}function gd(r=512,t=!0){let e=dn(r),i=Ai(t?42:77),n=[.3,.22,.26,.22],s=[0];for(let l of n)s.push(s[s.length-1]+l);let a=n.map(()=>{let l=2+Math.floor(i()*2),c=[],h=0;for(let f=0;f<l;f++){let g=.6+i()*.8;c.push(g),h+=g}let u=[],d=i();for(let f=0;f<l;f++)u.push(d%1),d+=c[f]/h;return u.sort((f,g)=>f-g),{cuts:u,tint:Array.from({length:l},()=>[.75+i()*.4,i()])}}),o=.01;for(let l=0;l<r;l++)for(let c=0;c<r;c++){let h=c/r,u=l/r,d=l*r+c,f=0;for(;f<a.length-1&&u>=s[f+1];)f++;let g=(u-s[f])/n[f],x=a[f],m=x.cuts.length-1;for(let X=0;X<x.cuts.length;X++)h>=x.cuts[X]&&(m=X);let p=x.cuts[m],y=x.cuts[(m+1)%x.cuts.length]+(m+1>=x.cuts.length?1:0),v=h-p;v<0&&(v+=1);let M=y-h;M>1&&(M-=1);let C=ke.fbm(h*22,u*22,3,22)*.012,E=Math.min(v,M),T=Math.min(g,1-g)*n[f],P=Math.min(E,T)+C,_=P<o,w=we(o,o+.045,P),U=ke.fbm(h*8+m*3.1,u*8+f,5,8),F=oi.noise(h*90,u*90,90),Y=we(.94,.985,ke.ridged(h*4+f*.3,u*4,4,4)),[L,D]=x.tint[m],k=_?.055:(.19+U*.06+F*.012)*L*(.7+w*.3);k*=1-Y*.6;let G=k*(1+D*.06),W=k*.98,q=k*(.94-D*.05),$=oi.fbm(h*6+3,u*6,4,6),j=t?ie(we(-.05,.4,$)*(_?1:(1-w)*.8+we(.7,1,g)*.5),0,1):0;G=Ct(G,.045,j*.85),W=Ct(W,.07,j*.85),q=Ct(q,.025,j*.85);let rt=we(.15,.7,ke.fbm(h*20,u*1.6,3,20))*.4;G*=1-rt,W*=1-rt,q*=1-rt*.9,pn(e,d,G,W,q),e.h[d]=_?0:w*.55+U*.25+F*.05-Y*.35+j*.06,e.rough[d]=_?.98:.86+j*.1-rt*.25}return fn(e,6)}function xd(r=512,t=5,e=.55){let i=dn(r),n=Ai(9),s=Array.from({length:t},()=>({tint:.75+n()*.45,off:n()*10,grey:n()}));for(let a=0;a<r;a++)for(let o=0;o<r;o++){let l=o/r,c=a/r,h=a*r+o,u=l*t,d=Math.floor(u),f=u-d,g=s[d],x=ke.fbm(l*3+g.off,c*1.5,4,3)*.6,m=Math.sin((f*3+x)*22+g.off)*.5+.5,p=oi.noise(l*220,c*8,220)*.5+.5,y=ke.worley(l*6+g.off,c*3,6),v=we(.18,.04,y.d1)*(y.id%3===0?1:0),M=we(.03,0,Math.min(f,1-f)),C=(.55+m*.25+p*.2)*g.tint;C*=1-v*.55;let E=.2*C,T=.13*C,P=.075*C,_=ie(e+oi.fbm(l*4,c*4,3,4)*.4+(g.grey-.5)*.3,0,1),w=.15*C;E=Ct(E,w,_),T=Ct(T,w*.96,_),P=Ct(P,w*.9,_),E*=1-M*.85,T*=1-M*.85,P*=1-M*.85;let U=(f-.5)*t,F=(c-.12)*1,Y=(c-.88)*1,L=Math.min(Math.hypot(U*.2,F*3),Math.hypot(U*.2,Y*3)),D=we(.018,.008,L);E=Ct(E,.09,D),T=Ct(T,.07,D),P=Ct(P,.06,D),pn(i,h,E,T,P),i.h[h]=m*.15+p*.25-M*.6-v*.2+D*.2,i.rough[h]=.75+p*.15-D*.4,i.metal[h]=D*.8}return fn(i,4)}function Qx(r=256){let t=dn(r);for(let e=0;e<r;e++)for(let i=0;i<r;i++){let n=i/r,s=e/r,a=e*r+i,o=ke.fbm(n*6,s*6,5,6),l=we(.05,.35,oi.fbm(n*4+5,s*4,4,4)+(1-s)*.15),c=ke.worley(n*30,s*30,30).d1,h=.42+o*.08,u=.27+o*.05,d=.12+o*.03;h=Ct(h,.16,l),u=Ct(u,.34,l),d=Ct(d,.28,l),pn(t,a,h,u,d),t.h[a]=c*.25+l*.2,t.rough[a]=Ct(.38+o*.1,.85,l),t.metal[a]=Ct(1,.1,l)}return fn(t,3)}function tv(r=256){let t=dn(r);for(let e=0;e<r;e++)for(let i=0;i<r;i++){let n=i/r,s=e/r,a=e*r+i,o=ke.fbm(n*8,s*8,5,8),l=we(-.05,.3,oi.fbm(n*5,s*5,5,5)),c=Ct(.13,.32,l),h=Ct(.12,.15,l),u=Ct(.115,.07,l);c*=.85+o*.3,h*=.85+o*.3,u*=.85+o*.3,pn(t,a,c,h,u),t.h[a]=l*.3+o*.2,t.rough[a]=Ct(.45,.95,l),t.metal[a]=Ct(.9,.2,l)}return fn(t,4)}function ev(r=512){let t=dn(r);for(let e=0;e<r;e++)for(let i=0;i<r;i++){let n=i/r,s=e/r,a=e*r+i,o=ke.fbm(n*5,s*5,6,5),l=oi.noise(n*120,s*120,120),c=we(.1,.6,ke.fbm(n*18,s*1.2+4,4,18))*.55+we(.2,-.4,o)*.25,h=oi.worley(n*14,s*14,14),u=we(.45,.2,h.d1)*we(.1,.4,oi.fbm(n*3,s*3,3,3)),d=h.id%4===0,f=.36+o*.06+l*.02,g=f,x=f*.98,m=f*.93;g=Ct(g,.09,c),x=Ct(x,.09,c),m=Ct(m,.08,c),d?(g=Ct(g,.3,u*.35),x=Ct(x,.2,u*.35),m=Ct(m,.1,u*.35)):(g=Ct(g,.18,u*.45),x=Ct(x,.21,u*.45),m=Ct(m,.1,u*.45)),pn(t,a,g,x,m),t.h[a]=o*.3+l*.05+u*.12,t.rough[a]=.88-c*.1}return fn(t,4)}function iv(r=256){let t=dn(r);for(let e=0;e<r;e++)for(let i=0;i<r;i++){let n=i/r,s=e/r,a=e*r+i,o=ke.fbm(n*2,s*2,3,2)*.4,l=oi.ridged(n*6+o,s*1.2,5,6),c=ke.fbm(n*16,s*16,4,16),h=.05+l*.13+c*.03,u=we(.25,.5,ke.fbm(n*6+9,s*6,4,6));pn(t,a,Ct(h*1.05,.14,u*.5),Ct(h*.95,.16,u*.5),Ct(h*.85,.1,u*.5)),t.h[a]=l*.8+c*.1,t.rough[a]=.95}return fn(t,5)}function nv(r=256){let t=dn(r);for(let e=0;e<r;e++)for(let i=0;i<r;i++){let n=i/r,s=e/r,a=e*r+i,o=Math.sin(n*Math.PI*2*64),l=Math.sin(s*Math.PI*2*64),c=o>0!=l>0?Math.abs(o):Math.abs(l),h=ke.fbm(n*5,s*5,4,5),u=we(0,.5,oi.fbm(n*3,s*3,4,3))*.4,d=(.72+c*.18+h*.12)*(1-u);pn(t,a,d,d*.97,d*.93),t.h[a]=c*.3+h*.1,t.rough[a]=.95}return fn(t,2)}function sv(r=512){let t=dn(r),e=[.25-.055,.25+.055];for(let i=0;i<r;i++)for(let n=0;n<r;n++){let s=n/r,a=i/r,o=i*r+n,l=ke.fbm(s*10,a*10,5,10),c=.42+l*.06,h=0;for(let f of e){let g=oi.noise(a*14,f*30)*.008,x=Math.abs(s-f-g),m=a<.56?we(.08,.3,.56-a)*.3+.7:0,p=.006+(.56-a)*.02;h=Math.max(h,we(p,0,x)*m*(a>.12?1:0))}let u=we(.004,0,Math.abs(s-.262-ke.fbm(a*6,1,3)*.03))*(a>.5&&a<.95?1:0),d=we(.004,0,Math.abs(a-.36-Math.sin((s-.25)*60)*.004))*we(.04,.025,Math.abs(s-.25));c=Ct(c,.04,d),c=Ct(c,.06,h*.9),c=Ct(c,.1,u),pn(t,o,c,c*.98,c*.95),t.h[o]=l*.2-u*.5+h*.05,t.rough[o]=Ct(.85,.3,h)}return fn(t,3)}function Xs(r,t){let e=document.createElement("canvas");e.width=e.height=r;let i=e.getContext("2d");t(i,r);let n=new Bs(e);return n.colorSpace=Ee,n}function rv(){return Xs(256,(r,t)=>{let e=r.createImageData(t,t);for(let i=0;i<t;i++)for(let n=0;n<t;n++){let s=n/t,a=i/t,o=Math.hypot(s-.5,a-.5)*2,l=ke.fbm(s*4,a*4,5,4)*.5+.5,c=ie((1-o)*1.4,0,1)*l,h=(i*t+n)*4;e.data[h]=e.data[h+1]=e.data[h+2]=255,e.data[h+3]=c*c*255}r.putImageData(e,0,0)})}function ov(){return Xs(128,(r,t)=>{let e=r.createRadialGradient(t/2,t*.62,2,t/2,t*.55,t*.45);e.addColorStop(0,"rgba(255,250,220,1)"),e.addColorStop(.25,"rgba(255,190,90,0.95)"),e.addColorStop(.6,"rgba(230,90,20,0.45)"),e.addColorStop(1,"rgba(120,20,0,0)"),r.fillStyle=e,r.beginPath(),r.moveTo(t/2,t*.04),r.bezierCurveTo(t*.78,t*.4,t*.82,t*.92,t/2,t*.96),r.bezierCurveTo(t*.18,t*.92,t*.22,t*.4,t/2,t*.04),r.fill()})}function av(){return Xs(128,(r,t)=>{let e=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=e,r.fillRect(0,0,t,t)})}function lv(){return Xs(128,(r,t)=>{r.clearRect(0,0,t,t);let e=Ai(5);for(let i=0;i<4;i++){r.strokeStyle=`rgba(${150+e()*60},${20+e()*20},20,${.6+e()*.4})`,r.lineWidth=2+e()*3,r.lineCap="round",r.beginPath();let n=20+i*22+e()*8;r.moveTo(n,10+e()*20),r.quadraticCurveTo(n+10,64,n-4+e()*10,108+e()*10),r.stroke()}})}function hv(){return Xs(64,(r,t)=>{let e=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(220,215,200,0.9)"),e.addColorStop(1,"rgba(200,190,170,0)"),r.fillStyle=e,r.fillRect(0,0,t,t)})}function cv(){return Xs(256,(r,t)=>{r.clearRect(0,0,t,t);let e=Ai(31);for(let i=0;i<70;i++){let n=t*(.3+e()*.4),s=(e()-.5)*t*.7,a=t*(.45+e()*.5),o=2+e()*3.5,l=e(),c=`rgb(${Math.floor(60+l*70)},${Math.floor(62+l*40)},${Math.floor(28+l*12)})`,h=r.createLinearGradient(0,t,0,t-a);h.addColorStop(0,"rgb(22,20,12)"),h.addColorStop(.5,c),h.addColorStop(1,`rgb(${Math.floor(110+l*60)},${Math.floor(100+l*40)},${Math.floor(60)})`),r.fillStyle=h,r.beginPath(),r.moveTo(n-o,t),r.quadraticCurveTo(n+s*.3-o*.5,t-a*.6,n+s,t-a),r.quadraticCurveTo(n+s*.3+o*.5,t-a*.6,n+o,t),r.closePath(),r.fill()}})}async function vd(r){let t=[["ground",()=>jx(512)],["stone",()=>gd(512,!0)],["stoneClean",()=>gd(256,!1)],["planks",()=>xd(512,5,.55)],["timber",()=>xd(256,2,.75)],["bronze",()=>Qx(256)],["iron",()=>tv(256)],["statue",()=>ev(512)],["bark",()=>iv(256)],["cloth",()=>nv(256)],["mask",()=>sv(512)],["mist",rv],["flame",ov],["glow",av],["scratch",lv],["dust",hv],["tuft",cv]],e={};for(let i=0;i<t.length;i++){let[n,s]=t[i];e[n]=s(),r?.((i+1)/t.length,n),await new Promise(a=>setTimeout(a,0))}return e}function mn(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new ye,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=yd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=yd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function yd(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new t(s),o=0;for(let c=0;c<r.length;++c)a.set(r[c].array,o),o+=r[c].array.length;let l=new ve(a,e,i);return n!==void 0&&(l.gpuType=n),l}var Lh=new Vi(99),uv=`
varying vec3 vWPos; varying vec3 vWNrm;
float wHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float wNoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(wHash(i), wHash(i+vec2(1,0)), f.x), mix(wHash(i+vec2(0,1)), wHash(i+vec2(1,1)), f.x), f.y); }
`;function rs(r,{grime:t=1.4,moss:e=.8,vary:i=.5}={}){return r.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; varying vec3 vWNrm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 wwp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wwp = instanceMatrix * wwp;
        #endif
        wwp = modelMatrix * wwp; vWPos = wwp.xyz; vWNrm = normalize(mat3(modelMatrix) * objectNormal);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+uv).replace("#include <map_fragment>",`#include <map_fragment>
        float wn = wNoise(vWPos.xz * 0.23 + vWPos.y * 0.15);
        float wn2 = wNoise(vWPos.xz * 1.3 + vec2(vWPos.y * 1.1, -vWPos.y * 0.7));
        diffuseColor.rgb *= mix(1.0 - ${i.toFixed(2)}, 1.0 + ${(i*.4).toFixed(2)}, wn) * mix(0.88, 1.06, wn2);
        float gr = 1.0 - smoothstep(0.0, ${t.toFixed(2)}, vWPos.y + (wn2 - 0.5) * 0.7);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.32, 0.3, 0.26), gr * 0.85);
        float up = smoothstep(0.5, 0.9, vWNrm.y) * smoothstep(0.3, 0.6, wn2);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.035, 0.055, 0.022), up * ${e.toFixed(2)});`)},r.customProgramCacheKey=()=>"weather"+t+e+i,r}function _d(r){let t=(i,n={})=>new ue({map:i.map,normalMap:i.normalMap,roughnessMap:i.ormMap,metalnessMap:i.ormMap,roughness:1,metalness:n.metalness??1,...n}),e={ground:new ue({map:r.ground.map,normalMap:r.ground.normalMap,roughnessMap:r.ground.ormMap,roughness:1,metalness:0,vertexColors:!0}),stone:t(r.stone),stoneClean:t(r.stoneClean),planks:t(r.planks),timber:t(r.timber,{color:12101264}),bronze:t(r.bronze),iron:t(r.iron),statue:t(r.statue),mask:t(r.mask),bark:t(r.bark),peat:new ue({color:328707,roughness:.08,metalness:.2}),peatBlock:t(r.ground,{color:4864556,metalness:0}),wax:new ue({color:14208176,roughness:.6,emissive:3809288,emissiveIntensity:.4}),black:new ue({color:197379,roughness:.35}),relic:new Ge({color:16734750}),relicDead:new ue({color:1707272,roughness:.9}),shroud:new ue({color:13617336,roughness:1,side:me,map:r.cloth.map,normalMap:r.cloth.normalMap}),tendril:new ue({color:525830,roughness:.3,metalness:.1}),lanternGlass:new Ge({color:3349520}),lanternLit:new Ge({color:16767136}),lanternRed:new Ge({color:16726564}),reed:new ue({color:4868650,roughness:.9,side:me}),aura:new Ge({color:16722464,transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1,blending:Li,fog:!1}),auraAlly:new Ge({color:16769184,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1,blending:Li,fog:!1})};return rs(e.stone,{grime:1.6,moss:.85,vary:.45}),rs(e.stoneClean,{grime:.9,moss:.6,vary:.35}),rs(e.planks,{grime:.8,moss:.3,vary:.4}),rs(e.timber,{grime:1,moss:.4,vary:.35}),rs(e.statue,{grime:.6,moss:.7,vary:.4}),rs(e.bark,{grime:1.2,moss:.5,vary:.4}),rs(e.peatBlock,{grime:.5,moss:.5,vary:.35}),e.relStone=t(r.statue,{color:13157046}),e.flame=new zs({map:r.flame,blending:Li,depthWrite:!1,transparent:!0}),e.glow=new zs({map:r.glow,color:16754784,blending:Li,depthWrite:!1,transparent:!0,fog:!1,opacity:.35}),e.cloth=i=>new ue({color:i,map:r.cloth.map,normalMap:r.cloth.normalMap,normalScale:new tt(.6,.6),roughness:.95}),e.skin=i=>new ue({color:i,roughness:.65}),e.T=r,e}function Sr(r,t=.5){let e=r.attributes.position,i=r.attributes.normal,n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++){let a=Math.abs(i.getX(s)),o=Math.abs(i.getY(s)),l=Math.abs(i.getZ(s)),c,h;o>=a&&o>=l?(c=e.getX(s),h=e.getZ(s)):a>=l?(c=e.getZ(s),h=e.getY(s)):(c=e.getX(s),h=e.getY(s)),n[s*2]=c*t,n[s*2+1]=h*t}return r.setAttribute("uv",new ve(n,2)),r}function oe(r,t,e,i,n,s,a=0,o=0,l=0){let c=new ne(r,t,e),h=new jt().compose(new R(i,n,s),new $e().setFromEuler(new Ln(o,a,l)),new R(1,1,1));return c.applyMatrix4(h),c}var $i=class{constructor(){this.lists=new Map}add(t,e,i){i&&Sr(e,i);let n=e.index?e.toNonIndexed():e;for(let s of Object.keys(n.attributes))["position","normal","uv"].includes(s)||n.deleteAttribute(s);this.lists.has(t)||this.lists.set(t,[]),this.lists.get(t).push(n)}build(t,{cast:e=!0,receive:i=!0}={}){for(let[n,s]of this.lists)for(let a=0;a<s.length;a+=400){let o=mn(s.slice(a,a+400),!1),l=new ee(o,n);l.castShadow=e,l.receiveShadow=i,t.add(l)}this.lists.clear()}};function st(r,t,e,i=0,n=0,s=0,a=!0){let o=new ee(r,t);return o.position.set(i,n,s),o.castShadow=a,o.receiveShadow=!0,e?.add(o),o}function de(r,t=0,e=0,i=0){let n=new he;return n.position.set(t,e,i),r.add(n),n}function ia(r,t,e,i,n=!1){let s=r.attributes.position;for(let a=0;a<s.count;a++){let o=s.getX(a),l=s.getY(a),c=s.getZ(a),h=Math.hypot(o,c);if(h<1e-4)continue;let u=Math.atan2(c,o),d=n?l/i+.5:l/i,f=n?d:1-d*.8,g=(Math.sin(u*t+d*3)*e+Lh.noise(u*3,l*4)*e*.8)*f,x=h+g;s.setX(a,o/h*x),s.setZ(a,c/h*x)}r.computeVertexNormals()}function Tr(r,t){let e=[];r.traverse(n=>{e.push([n,n.userData]),n.userData={}});let i=r.clone(!0);for(let[n,s]of e)n.userData=s;return i.traverse(n=>{n.isMesh&&(n.material=t,n.castShadow=!1,n.receiveShadow=!1,n.renderOrder=999)}),i}var na=[{id:"wren",short:"Wren",name:"Wren Ashdown",title:"Peat Cutter",jacket:4936242,pants:3812898,skin:14266508,hair:5913378,extra:"cap",voice:1.25,bio:"Cut turf on the moor since she was nine. Knows where the ground will hold."},{id:"ilias",short:"Ilias",name:"Father Ilias Moro",title:"Defrocked Priest",jacket:1578778,pants:1578778,skin:13081208,hair:10132120,extra:"cassock",voice:.82,bio:"He rang the parish bells the night the village sank. He has not slept since."},{id:"juno",short:"Juno",name:"Juno Okafor",title:"Lightkeeper's Daughter",jacket:12095530,pants:2501168,skin:6964784,hair:1314314,extra:"oilskin",voice:1.18,bio:"Followed a lantern inland from the drowned lighthouse. The lantern was not hers."},{id:"tey",short:"Tey",name:'Teodor "Tey" Vas',title:"Grave-Robber",jacket:3023904,pants:2829099,skin:14727318,hair:2759184,extra:"bandana",voice:.95,bio:"Dug up the wrong saint. Has been running ever since."}];function bd(r,t){let e=new he,i=de(e),n=t.cloth(r.jacket),s=t.cloth(r.pants),a=t.skin(r.skin),o=t.cloth(r.hair),l=new ue({color:1709072,roughness:.7}),c={};c.hips=de(i,0,.95,0),st(new ne(.34,.2,.21),s,c.hips,0,.02,0),c.spine=de(c.hips,0,.06,0),st(new Un(.16,.3,6,14),n,c.spine,0,.27,0).scale.set(1.18,1,.78);let u=st(new Qt(.19,.21,.16,16,1,!0),n,c.hips,0,-.02,0);u.material=n.clone(),u.material.side=me,u.scale.set(1,1,.8),st(new Qt(.185,.185,.035,16,1,!0),new ue({color:1971728,roughness:.6,side:me}),c.hips,0,.07,0).scale.set(1,1,.8),st(new ne(.04,.035,.02),t.iron,c.hips,0,.07,.15);let f=st(new ei(.075,.022,6,16),n,c.spine,0,.52,0);f.rotation.x=Math.PI/2,c.neck=de(c.spine,0,.55,0),st(new Qt(.045,.05,.08,10),a,c.neck,0,.02,0),c.head=de(c.neck,0,.07,0),st(new Ce(.105,20,16),a,c.head,0,.1,.005).scale.set(.92,1.12,1),st(new Ce(.11,18,12,0,Math.PI*2,0,Math.PI*.55),o,c.head,0,.115,-.008).scale.set(.95,1.08,1.04),st(new Ce(.108,16,12,Math.PI*1.15,Math.PI*.7,.2,Math.PI*.62),o,c.head,0,.1,-.012).scale.set(.96,1.14,1.06),st(new ne(.025,.04,.03),a,c.head,0,.085,.1);let p=t.cloth(r.hair);for(let y of[-1,1])st(new Ce(.012,6,6),t.black,c.head,y*.036,.115,.093,!1),st(new ne(.035,.008,.01),p,c.head,y*.037,.135,.097,!1).rotation.z=y*-.15,st(new Ce(.022,8,6),a,c.head,y*.097,.1,0).scale.set(.45,1,.8);st(new ne(.04,.006,.01),new ue({color:4860452,roughness:.7}),c.head,0,.055,.098,!1);for(let y of["L","R"]){let v=y==="L"?1:-1,M=c["sh"+y]=de(c.spine,v*.215,.47,0);st(new Un(.055,.2,4,10),n,M,0,-.14,0);let C=c["el"+y]=de(M,0,-.29,0);st(new Un(.047,.19,4,10),n,C,0,-.12,0),st(new Ce(.052,10,8),a,C,0,-.275,.005).scale.set(.85,1.25,.6),st(new Ce(.02,6,6),a,C,v*-.035,-.26,.02);let E=c["hip"+y]=de(c.hips,v*.1,-.02,0);st(new Un(.075,.28,4,10),s,E,0,-.21,0);let T=c["kn"+y]=de(E,0,-.43,0);st(new Un(.06,.3,4,10),s,T,0,-.2,0),st(new ne(.1,.075,.25),l,T,0,-.43,.045)}if(r.extra==="cap"){st(new Qt(.115,.115,.05,16),t.cloth(3814440),c.head,0,.19,0),st(new ne(.2,.012,.09),t.cloth(3814440),c.head,0,.17,.1);let y=st(new ei(.075,.03,8,16),t.cloth(8004640),c.neck,0,0,0);y.rotation.x=Math.PI/2}else if(r.extra==="cassock"){st(new Qt(.2,.3,.75,16,1,!0),n,c.hips,0,-.33,0).material.side=me;let y=st(new ei(.058,.014,6,16),new ue({color:15658730,roughness:.6}),c.neck,0,0,0);y.rotation.x=Math.PI/2;let v=st(new ei(.12,.006,4,20),t.bronze,c.spine,0,.32,.12);v.rotation.x=.3}else if(r.extra==="oilskin"){let y=st(new Qt(.2,.26,.4,16,1,!0),n,c.hips,0,-.14,0);y.material=n.clone(),y.material.side=me,y.material.roughness=.45;let v=st(new Ce(.12,14,10,0,Math.PI*2,0,Math.PI/2),n,c.spine,0,.52,-.08);v.rotation.x=-1.2,st(new Ce(.06,10,8),o,c.head,0,.17,-.09)}else if(r.extra==="bandana"){let y=st(new Qt(.113,.113,.04,16,1,!0),t.cloth(9051674),c.head,0,.16,0);y.material.side=me,st(new ne(.16,.2,.08),t.cloth(4864552),c.hips,-.2,-.05,.02),st(new ei(.3,.012,4,24),t.cloth(2760728),c.spine,-.03,.2,0).rotation.set(0,Math.PI/2,.7),st(new Qt(.2,.25,.45,14,1,!0),n,c.hips,0,-.18,0).material.side=me}return e.userData={j:c,body:i,pose:{},def:r},e.traverse(y=>{y.isMesh&&(y.castShadow=!0,y.receiveShadow=!0)}),e}var Md=["hips","spine","neck","head","shL","elL","shR","elR","hipL","knL","hipR","knR"];function wd(r,t,e,i,n={}){let{j:s,body:a}=r.userData,o={};for(let x of Md)o[x]=[0,0,0];let l=0,c=0,h=0,u=n.speed??0,d=Math.sin,f=Math.cos;switch(t){case"idle":case"stand":{let x=d(e*1.6);o.spine[0]=.03*x,o.shL[2]=.08,o.shR[2]=-.08,o.elL[0]=-.15,o.elR[0]=-.15,o.head[0]=n.injured?.25:.02*x,n.injured&&(o.spine[0]=.25,o.shL[0]=-.4,o.elL[0]=-1.6);break}case"walk":case"run":case"back":case"crouch":{let x=t==="run",m=t==="crouch",p=t==="back",v=e*(x?9.5:m?5.5:7.2)*(p?-1:1),M=x?.75:.45;o.hipL[0]=d(v)*M,o.hipR[0]=-d(v)*M,o.knL[0]=Math.max(0,-d(v+.6))*(x?1.4:.8),o.knR[0]=Math.max(0,d(v+.6))*(x?1.4:.8),o.shL[0]=-d(v)*(x?.9:.4),o.shR[0]=d(v)*(x?.9:.4),o.elL[0]=x?-1.3:-.3,o.elR[0]=x?-1.3:-.3,o.spine[0]=x?.28:.06,o.spine[1]=d(v)*.1,l=Math.abs(d(v))*(x?.06:.025),m&&(l=-.38,o.hipL[0]-=1.1,o.hipR[0]-=1.1,o.knL[0]+=1.7,o.knR[0]+=1.7,o.spine[0]=.55,o.head[0]=-.4,o.shL[0]=-.5,o.shR[0]=-.5),n.injured&&!m&&(o.shL[0]=-.4,o.elL[0]=-1.7,o.spine[2]=.08,o.head[0]=.1),p&&(o.spine[0]=-.05,o.head[0]=-.05);break}case"crawl":{let x=e*3*Math.min(1,u+.15);c=1.35,l=-.68,o.head[0]=-1,o.neck[0]=-.2,o.shL[0]=-2.6+d(x)*.5,o.shR[0]=-2.6-d(x)*.5,o.elL[0]=-.4,o.elR[0]=-.4,o.hipL[0]=.1+d(x)*.2,o.hipR[0]=.1-d(x)*.2,o.knL[0]=.4,o.knR[0]=.6;break}case"ring":{let x=e*2.4,m=(d(x)+1)/2;o.shL[0]=-2.7+m*1,o.shR[0]=-2.7+m*1,o.shL[2]=-.15,o.shR[2]=.15,o.elL[0]=-.2-m*.9,o.elR[0]=-.2-m*.9,o.spine[0]=.05+m*.25,o.head[0]=-.35+m*.2,o.hipL[0]=-m*.35,o.hipR[0]=-m*.35,o.knL[0]=m*.7,o.knR[0]=m*.7,l=-m*.1;break}case"work":{let x=e*4;l=-.42,o.hipL[0]=-1.5,o.knL[0]=2.2,o.hipR[0]=.25,o.knR[0]=1.65,o.spine[0]=.45,o.head[0]=.2,o.shL[0]=-1.1+d(x)*.15,o.shR[0]=-1.15+d(x+1.5)*.15,o.elL[0]=-.7,o.elR[0]=-.7;break}case"reach":{let x=e*3;o.shL[0]=-1.35+d(x)*.08,o.shR[0]=-1.4,o.elL[0]=-.4,o.elR[0]=-.5,o.spine[0]=.2;break}case"hooked":{let x=d(e*1.3)*(n.struggle?.35:.08);o.shL[0]=-2.95,o.shR[0]=-2.95,o.shL[2]=-.25,o.shR[2]=.25,o.elL[0]=-.2,o.elR[0]=-.2,o.head[0]=.55,o.spine[0]=.1+x,o.spine[1]=x,o.hipL[0]=.15+(n.struggle?d(e*9)*.5:0),o.hipR[0]=-.05-(n.struggle?d(e*9)*.5:0),o.knL[0]=.4,o.knR[0]=.3;break}case"carried":{let x=n.wiggle?d(e*12)*.35:0;c=1.5,o.shL[0]=-2.9+x,o.shR[0]=-2.9-x,o.elL[0]=-.2,o.elR[0]=-.2,o.head[0]=.4,o.hipL[0]=-.3+x,o.hipR[0]=-.3-x,o.knL[0]=1.2,o.knR[0]=1;break}case"vault":{l=.15,o.hipL[0]=-1.5,o.hipR[0]=-1.2,o.knL[0]=1.9,o.knR[0]=1.6,o.shL[0]=-1.2,o.shR[0]=-.8,o.spine[0]=.45;break}case"drop":{o.shR[0]=-1-1.4*Math.max(0,1-(n.phase??1)),o.shL[0]=-.6,o.spine[0]=.3;break}}n.lookPitch!==void 0&&(t==="idle"||t==="walk"||t==="run"||t==="back"||t==="stand")&&(o.head[0]+=n.lookPitch*.5,o.neck[0]+=n.lookPitch*.3,o.head[1]+=(n.lookYaw??0)*.6,o.neck[1]+=(n.lookYaw??0)*.3);let g=1-Math.exp(-i*(t==="vault"?25:14));for(let x of Md){let m=s[x].rotation;m.x+=(o[x][0]-m.x)*g,m.y+=(o[x][1]-m.y)*g,m.z+=(o[x][2]-m.z)*g}a.position.y+=(l-a.position.y)*g,a.rotation.x+=(c-a.rotation.x)*g,a.position.z+=(h-a.position.z)*g}var qs={pray:{lean:.05,twist:0,hx:.35,hy:0,hz:0,l:[-.95,-.55,-1.45],r:[-.95,.55,-1.45],curl:.6},reach:{lean:.38,twist:0,hx:-.15,hy:0,hz:.1,l:[-1.5,-.12,-.1],r:[-1.55,.1,-.15],curl:.05},lunge:{lean:.62,twist:.35,hx:-.25,hy:-.2,hz:.25,l:[-1.15,-.2,-.3],r:[-2.5,.25,-.7],curl:.15},claw:{lean:.15,twist:-.1,hx:-.4,hy:0,hz:-.15,l:[-2.85,-.4,-.5],r:[-2.8,.45,-.55],curl:.9},tilt:{lean:.18,twist:.1,hx:.25,hy:.3,hz:.75,l:[.08,-.08,-.15],r:[.05,.1,-.1],curl:.3},beckon:{lean:.1,twist:-.25,hx:.05,hy:.45,hz:.2,l:[-.7,-.6,-1.6],r:[-1.25,.75,-.8],curl:.45},stalk:{lean:.95,twist:.05,hx:-.75,hy:.15,hz:-.1,l:[-.55,-.15,-.25],r:[-.5,.2,-.2],curl:.7},carry:{lean:.25,twist:.2,hx:.1,hy:-.3,hz:.1,l:[-.4,-.2,-1.9],r:[-.9,.5,-.4],curl:.8},weep:{lean:.3,twist:0,hx:.75,hy:0,hz:.05,l:[-1.7,-.75,-2],r:[-1.65,.7,-2.05],curl:.5}};function Er(r,{alive:t=!0}={}){let e=new he,i=r.relStone,n=[[.5,0],[.47,.08],[.4,.45],[.32,.85],[.26,1.12],[.235,1.27],[.22,1.3]].map(([T,P])=>new tt(T,P)),s=new Dn(n,64);ia(s,11,.04,1.3);{let T=s.attributes.position;for(let P=0;P<T.count;P++)if(T.getY(P)<.01){let _=Math.atan2(T.getZ(P),T.getX(P));T.setY(P,Math.max(0,Lh.noise(_*4,3)*.08+.02))}s.computeVertexNormals()}st(s,i,e);for(let T=0;T<6;T++){let P=T/6*Math.PI*2+.3;st(new Di(.05,.22,4),i,e,Math.cos(P)*.5,.04,Math.sin(P)*.5).rotation.set(Math.PI/2+.5,0,-P)}let a=de(e,0,1.24,0),o=[[.22,0],[.26,.14],[.29,.28],[.3,.38],[.24,.48],[.1,.55],[0,.56]].map(([T,P])=>new tt(T,P)),l=new Dn(o,48);ia(l,7,.018,.56),st(l,i,a).scale.set(1.08,1,.78);for(let T of[-1,1]){let P=st(new ne(.07,.95,.02),i,a,T*.09,-.1,.24);P.rotation.x=-.12}let h=de(a,0,.27,.215);st(new ne(.13,.17,.07),r.bronze,h),st(new Di(.085,.07,4),r.bronze,h,0,.12,0).rotation.y=Math.PI/4;let u=st(new Oi(.07,.1),t?r.relic.clone():r.relicDead,h,0,0,.036,!1);for(let T of[-1,1])st(new ne(.01,.12,.015),r.bronze,h,T*.04,0,.04);let d=st(new ei(.25,.016,6,40),r.iron,e,0,1.08,0);d.rotation.x=Math.PI/2+.12,d.scale.set(1.1,.85,1);let f=de(a,0,.55,.03),g=new Ce(.2,32,24,Math.PI*.82,Math.PI*1.36,0,Math.PI*.72);{let T=g.attributes.position;for(let P=0;P<T.count;P++){let _=T.getY(P);if(_>0){let w=_/.2;T.setY(P,_*(1+.45*w*w)),T.setZ(P,T.getZ(P)-.07*w*w)}}g.computeVertexNormals()}st(g,i,f,0,.1,-.01).scale.set(1,1.12,1.2),st(g.clone(),new ue({color:131586,roughness:1,side:Ze}),f,0,.1,-.012,!1).scale.set(.985,1.1,1.18),st(new Ce(.12,28,22),r.mask,f,0,.085,.045).scale.set(.78,1.2,.6);for(let T of[-1,1])st(new Ce(.024,10,8),r.black,f,T*.04,.11,.108,!1).scale.set(1.15,.7,.6);let y=de(f,0,.2,-.22),v=st(new ei(.34,.02,8,64,Math.PI*1.45),r.bronze,y);v.rotation.z=.9;let M=st(new ei(.34,.02,8,12,.45),r.bronze,y,.03,-.05,.02);M.rotation.z=-.25;let C=Ai(17);for(let T=0;T<9;T++){let P=T/9*Math.PI*2,_=.08+C()*.18,w=st(new Di(.011,_,4),r.bronze,y,Math.cos(P)*(.36+_/2),Math.sin(P)*(.36+_/2),0);w.rotation.z=P-Math.PI/2}let E={};for(let T of["l","r"]){let P=T==="l"?1:-1,_=de(a,P*.3,.38,0),w=new Qt(.075,.15,.44,18,4,!0);ia(w,5,.012,.44,!0);let U=st(w,i,_,0,-.2,0);U.material=i.clone(),U.material.side=me;let F=de(_,0,-.38,0);st(new Qt(.036,.027,.52,10),i,F,0,-.26,0);let Y=de(F,0,-.53,0);st(new ne(.068,.1,.026),i,Y,0,-.04,0);let L=[];for(let k=0;k<4;k++){let G=de(Y,-.025+k*.017,-.088,0),W=[.19,.24,.23,.18][k],q=st(new Qt(.0075,.0065,W*.55,5),i,G,0,-W*.27,0),$=de(G,0,-W*.55,0);st(new Qt(.0065,.003,W*.5,5),i,$,0,-W*.25,0),G.userData.k2=$,L.push(G)}let D=de(Y,P*.038,-.03,.01);st(new Qt(.008,.005,.11,5),i,D,0,-.055,0),D.rotation.z=P*.7,E[T]={sh:_,el:F,hand:Y,fingers:L}}return e.traverse(T=>{T.isMesh&&(T.castShadow=!0,T.receiveShadow=!0)}),e.userData={chest:a,head:f,arms:E,relic:u,alive:t},e}function os(r,t){let e=typeof t=="string"?qs[t]:t,{chest:i,head:n,arms:s}=r.userData;i.rotation.set(e.lean,e.twist,0),n.rotation.set(e.hx,e.hy,e.hz);for(let a of["l","r"]){let o=s[a],l=e[a];o.sh.rotation.set(l[0],0,l[1]),o.el.rotation.set(l[2],0,0),o.hand.rotation.set(-e.curl*.3,0,0);for(let c of o.fingers)c.rotation.x=-e.curl*.8,c.userData.k2&&(c.userData.k2.rotation.x=-e.curl*1)}}var Fe={};Xd(Fe,{buildBell:()=>Ih,buildGate:()=>Nh,buildHatch:()=>kh,buildPallet:()=>Dh,buildPost:()=>Uh,buildShroud:()=>sa,grassBladeGeometry:()=>dv,gravestoneGeometries:()=>zh,rockGeometry:()=>Fh,treeGeometry:()=>Ys});function Ih(r){let t=new he,e=new $i;e.add(r.stoneClean,oe(1.7,.42,1.7,0,.21,0),.6),e.add(r.stoneClean,oe(1.9,.08,1.9,0,.44,0),.6);for(let x of[-1,1])e.add(r.timber,oe(.2,2.9,.2,x*.72,1.9,0),.7),e.add(r.timber,oe(.12,1.1,.12,x*.48,1,0,0,0,x*.55),.7);e.add(r.timber,oe(1.9,.22,.24,0,3.32,0),.7),e.add(r.timber,oe(.5,.18,.3,0,3.12,0),.7),e.add(r.iron,oe(.08,.2,.08,0,3,0),1),e.build(t);let i=de(t,0,3.02,0),n=[[.43,0],[.45,.025],[.42,.07],[.35,.18],[.3,.36],[.285,.52],[.26,.62],[.16,.69],[0,.71]].map(([x,m])=>new tt(x,m)),s=new Dn(n,40),a=st(s,r.bronze.clone(),i,0,-.73,0);a.material.side=me;let o=st(new ei(.44,.02,6,40),r.bronze,i,0,-.71,0);o.rotation.x=Math.PI/2;let l=de(i,0,-.1,0);st(new Qt(.012,.012,.5,6),r.iron,l,0,-.27,0),st(new Ce(.05,10,8),r.iron,l,0,-.55,0);let c=de(i,.3,-.05,0);st(new Qt(.014,.014,1.9,6),new ue({color:9075290,roughness:1}),c,0,-.95,0);let h=st(new Qt(.04,.04,.32,10),r.cloth(9054754),c,0,-1.35,0);for(let x of[-.08,.08])st(new Qt(.042,.042,.05,10),r.cloth(14209216),c,0,-1.35+x,0);let u=[];for(let[x,m]of[[.65,.65],[-.65,.6],[.6,-.65],[-.6,-.6],[.2,.75]]){let p=.12+Math.random()*.2;st(new Qt(.03,.035,p,8),r.wax,t,x,.48+p/2,m);let y=new mi(r.flame);y.scale.set(.06,.12,1),y.position.set(x,.48+p+.05,m),t.add(y),u.push(y)}let d=new Gi(16752720,1.6,9,1.6);d.position.set(0,1,0),t.add(d);let f=new mi(r.glow.clone());f.scale.set(3.5,3.5,1),f.position.set(0,1,0),t.add(f);let g=new mi(r.glow.clone());return g.material.color.set(16773320),g.material.opacity=0,g.scale.set(7,7,1),g.position.set(0,3.2,0),t.add(g),t.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),t.userData={swing:i,clap:l,rope:c,candles:u,light:d,halo:f,holy:g},t}function Dh(r){let t=new he,e=de(t),i=new $i,n=Ai(Math.floor(Math.random()*1e6));for(let s of[-.48,0,.48])i.add(r.timber,oe(.1,1.95,.08,s,.97,-.03,0,0,(n()-.5)*.02),.8);for(let s=0;s<9;s++){let a=.1+s*.215;i.add(r.planks,oe(1.18-n()*.1,.16,.035,(n()-.5)*.06,a,.03,0,0,(n()-.5)*.08),.9)}return i.build(e),t.userData={pivot:e},t}function Uh(r){let t=new he,e=new $i,i=st(new es(1.5,32),r.peat,t,0,.035,0,!1);i.rotation.x=-Math.PI/2;let n=st(new Os(1.4,1.9,32),new ue({color:854536,roughness:1,transparent:!0,opacity:.9}),t,0,.03,0,!1);n.rotation.x=-Math.PI/2;let s=-.2,a=0,o=[.21,.18,.15,.13];for(let p=0;p<4;p++){let v=(p%2?-1:1)*(.06+Math.random()*.06),M=new Qt(o[p]*.9,o[p],.95*1.06,9);M.applyMatrix4(new jt().makeRotationZ(v)),M.translate(a-Math.sin(v)*.95/2,s+.95/2,0),e.add(r.bark,M),a+=-Math.sin(v)*.95,s+=.95*Math.cos(v)}let l=s-.12,c=1.35,h=new Qt(.09,.11,c,8);h.rotateZ(Math.PI/2-.08),h.translate(a+c/2-.05,l,0),e.add(r.bark,h);let u=new Qt(.06,.07,.95,7);u.rotateZ(-.8),u.translate(a+.32,l-.33,0),e.add(r.bark,u);for(let p=0;p<5;p++){let y=p/5*Math.PI*2+.4,v=new Di(.09,.9,5);v.rotateZ(Math.PI/2-.35),v.rotateY(-y),v.translate(Math.cos(y)*.35,.05,Math.sin(y)*.35),e.add(r.bark,v)}e.build(t);let d=new R(a+c-.15,l-.05,0);for(let p=0;p<9;p++){let y=st(new ei(.035,.009,5,10),r.iron,t,d.x,d.y-.06-p*.062,0);y.rotation.y=p%2?Math.PI/2:0}let f=d.y-.62;st(new ei(.09,.018,6,16,Math.PI*1.4),r.iron,t,d.x,f-.06,0).rotation.set(0,Math.PI/2,Math.PI*.8);for(let p=0;p<30;p++){let y=Math.random()*Math.PI*2,v=1.4+Math.random()*.7,M=.5+Math.random()*.9;st(new Di(.012,M,3),r.reed,t,Math.cos(y)*v,M/2,Math.sin(y)*v,!1).rotation.set((Math.random()-.5)*.3,0,(Math.random()-.5)*.3)}let x=new ue({color:9077362,roughness:.8});for(let p=0;p<4;p++)st(new Qt(.018,.022,.32,6),x,t,(Math.random()-.5)*2,.04,(Math.random()-.5)*2).rotation.set(Math.PI/2,Math.random()*3,0);let m=de(t,d.x,0,0);for(let p=0;p<7;p++){let y=p/7*Math.PI*2;st(new Di(.07,2,6),r.tendril,m,Math.cos(y)*.55,1,Math.sin(y)*.55).rotation.set(Math.sin(y)*.35,0,-Math.cos(y)*.35)}return m.scale.set(1,.001,1),m.visible=!1,t.userData={hangPoint:new R(d.x,f,0),tendrils:m},t}function Nh(r){let t=new he,e=new $i;for(let l of[-1,1])e.add(r.stone,oe(.8,3.4,.9,l*2.25,1.7,0),.5),e.add(r.stone,oe(1,.3,1.1,l*2.25,3.5,0),.5);for(let l of[-1,1])e.add(r.planks,oe(5.8,.08,1.6,0,4.15,l*.62,0,l*.62,0),.5);e.add(r.timber,oe(5.8,.2,.2,0,4.62,0),.6),e.add(r.timber,oe(4,.25,.25,0,3.55,0),.6),e.add(r.stoneClean,oe(.5,1,.5,3.4,.5,1.2),.6),e.build(t);let i=[];for(let l of[-1,1]){let c=de(t,l*1.85,0,0),h=new $i;for(let u=0;u<8;u++)h.add(r.iron,oe(.04,2.6,.04,-l*(.12+u*.22),1.4,0),1);for(let u of[.3,1.4,2.6])h.add(r.iron,oe(1.8,.07,.06,-l*.9,u,0),1);h.add(r.iron,oe(1.6,.05,.05,-l*.9,1.4,0,0,0,l*.55),1),h.build(c),i.push(c)}let n=de(t,3.4,1,1.2);st(new Qt(.03,.03,.6,8),r.iron,n,0,.3,0),st(new Ce(.06,8,8),r.iron,n,0,.6,0),n.rotation.x=-.6;let s=[];for(let l=0;l<3;l++){let c=st(new ne(.16,.24,.16),r.lanternGlass,t,-.8+l*.8,3.25,.2,!1);st(new ne(.2,.04,.2),r.iron,t,-.8+l*.8,3.39,.2),s.push(c)}let a=new Gi(16728096,0,10,1.6);a.position.set(0,3,.8),t.add(a);let o=new mi(r.glow.clone());return o.material.color.set(14215423),o.material.opacity=0,o.scale.set(10,8,1),o.position.set(0,2,-4),t.add(o),t.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),t.userData={doors:i,lever:n,lamps:s,light:a,beyond:o},t}function kh(r){let t=new he,e=st(new Qt(.9,1,.5,20,1,!0),r.stone,t,0,.25,0);e.material=r.stone.clone(),e.material.side=me,st(new ei(.95,.12,8,24),r.stone,t,0,.5,0).rotation.x=Math.PI/2;let i=st(new es(.9,24),new Ge({color:10139864}),t,0,.3,0,!1);i.rotation.x=-Math.PI/2;let n=new mi(r.glow.clone());n.material.color.set(11061503),n.material.opacity=.7,n.scale.set(4,4,1),n.position.y=1,t.add(n);let s=new Gi(10139903,3,10,1.5);return s.position.y=1.2,t.add(s),t}function sa(r){let t=new Di(.75,2.6,18,6,!0),e=t.attributes.position;for(let s=0;s<e.count;s++){let a=e.getY(s),o=Math.atan2(e.getZ(s),e.getX(s)),l=(1.3-a)/2.6;e.setX(s,e.getX(s)*(1+Math.sin(o*7)*.08*l)),e.setZ(s,e.getZ(s)*(1+Math.sin(o*7)*.08*l))}t.computeVertexNormals();let i=new ee(t,r.shroud);i.position.y=1.3,i.castShadow=!0;let n=new he;return n.add(i),n}function Ys(r){let t=Ai(r),e=[],i=new R(0,1,0);function n(o,l,c,h,u){let f=o.clone(),g=l.clone();for(let m=0;m<3;m++){let p=c/3,y=h*(1-m/3*.45),v=h*(1-(m+1)/3*.45),M=new Qt(v,y,p*1.05,u>1?7:4,1);M.translate(0,p/2,0);let C=new $e().setFromUnitVectors(i,g.clone().normalize());M.applyQuaternion(C),M.translate(f.x,f.y,f.z),e.push(M),f=f.add(g.clone().normalize().multiplyScalar(p)),g.x+=(t()-.5)*.5,g.z+=(t()-.5)*.5,g.y+=.05,g.normalize()}if(u<=0||h<.02)return;let x=2+Math.floor(t()*2);for(let m=0;m<x;m++){let p=t()*Math.PI*2,y=.5+t()*.7,v=new R(Math.cos(p)*Math.sin(y),Math.cos(y),Math.sin(p)*Math.sin(y)).lerp(g,.3).normalize();n(f.clone(),v,c*(.55+t()*.2),h*.6,u-1)}}let s=4+t()*3;n(new R(0,-.3,0),new R((t()-.5)*.2,1,(t()-.5)*.2),s,.22+t()*.12,3);for(let o=0;o<5;o++){let l=o/5*Math.PI*2+t(),c=new Di(.12,.9,5);c.rotateZ(Math.PI/2-.25),c.rotateY(-l),c.translate(Math.cos(l)*.3,.05,Math.sin(l)*.3),e.push(c)}return mn(e.map(o=>o.index?o.toNonIndexed():o),!1)}function Fh(r,t=1,e=.7,i=1){let n=new Go(1,3),s=new Vi(r),a=n.attributes.position;for(let o=0;o<a.count;o++){let l=new R(a.getX(o),a.getY(o),a.getZ(o)),c=1+s.fbm(l.x*1.5+l.z,l.y*1.5+l.x,4)*.35;l.multiplyScalar(c),l.x*=t,l.y*=e,l.z*=i,l.y<-.1&&(l.y=-.1),a.setXYZ(o,l.x,l.y,l.z)}return n.computeVertexNormals(),n}function zh(){let r=new ne(.55,.8,.12);r.translate(0,.4,0);let t=new Qt(.275,.275,.12,16,1,!1,0,Math.PI);t.rotateX(Math.PI/2),t.rotateZ(Math.PI/2),t.translate(0,.8,0);let e=mn([r.toNonIndexed(),t.toNonIndexed()]),i=new ne(.12,1.1,.12);i.translate(0,.55,0);let n=new ne(.55,.12,.12);n.translate(0,.78,0);let s=mn([i.toNonIndexed(),n.toNonIndexed()]),a=new Qt(.08,.2,1.5,4);a.translate(0,.75,0);let o=new ne(.45,.25,.45);o.translate(0,.12,0);let l=mn([a.toNonIndexed(),o.toNonIndexed()]);return[e,s,l]}function dv(){let r=new ye,t=.045,e=1,i=[-t,0,0,t,0,0,-t*.7,e*.4,0,t*.7,e*.4,0,-t*.35,e*.75,0,t*.35,e*.75,0,0,e,0],n=[0,0,1,0,0,.4,1,.4,0,.75,1,.75,.5,1];return r.setAttribute("position",new qt(i,3)),r.setAttribute("uv",new qt(n,2)),r.setIndex([0,1,2,2,1,3,2,3,4,4,3,5,4,5,6]),r.computeVertexNormals(),r}var Ot=50,ai=.5,Lt=Math.ceil((Ot*2+4)/ai),gi=-(Ot+2),Wi=0,zn=1,Ar=2,ra=3,oa=class{constructor(t,e,i,n,s){this.scene=t,this.M=e,this.T=i,this.seed=n,this.quality=s,this.rnd=Ai(n),this.noise=new Vi(n),this.root=new he,t.add(this.root),this.boxes=[],this.circles=[],this.dynBoxes=[],this.windows=[],this.palletSpots=[],this.bellSpots=[],this.postSpots=[],this.gateSpots=[],this.chestSpots=[],this.perches=[],this.decorLights=[],this.bucket=new $i,this.occupied=[],this.grid=new Uint8Array(Lt*Lt),this.gridObj=new Int16Array(Lt*Lt).fill(-1),this.build()}dispose(){this.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&t.geometry.dispose()})}addBox(t,e,i,n,s,a,o,l="wall",c=.36,h=!0){let u={minX:t,maxX:e,minY:i,maxY:n,minZ:s,maxZ:a,kind:l,sight:l!=="nosight"};return this.boxes.push(u),h&&o&&this.bucket.add(o,oe(e-t,n-i,a-s,(t+e)/2,(i+n)/2,(s+a)/2),c),u}wall(t,e,i,n,s={}){let a=s.h??2.8,o=s.t??.55,l=s.mat??this.M.stone,c=s.ruin??.7,h=Math.abs(n-e)<1e-6,u=Math.abs(h?i-t:n-e),d=Math.sign(h?i-t:n-e),f=M=>h?[t+d*M,e]:[t,e+d*M],g=(s.openings||[]).slice().sort((M,C)=>M.at-C.at),x=[],m=0;for(let M of g)x.push([m,M.at-M.w/2]),m=M.at+M.w/2;x.push([m,u]);let p=(M,C,E,T,P="wall",_=l,w=!0)=>{if(C-M<.02)return;let[U,F]=f(M),[Y,L]=f(C);h?this.addBox(Math.min(U,Y),Math.max(U,Y),E,T,F-o/2,F+o/2,_,P,.36,!!_):this.addBox(U-o/2,U+o/2,E,T,Math.min(F,L),Math.max(F,L),_,P,.36,!!_)},y=this.rnd()*100,v=M=>{if(s.even)return a-this.rnd()*c*.15;let[C,E]=f(M),T=this.noise.noise((C+E)*.17+y,y*.3)*.5+.5,P=Math.max(0,this.noise.noise((C-E)*.09+y,7.7)-.3)*2.2;return Math.max(.9,a-c*(.1+T*.8)-P*c*.7+(this.rnd()-.5)*.18)};for(let[M,C]of x){let E=Math.max(1,Math.round((C-M)/.6));for(let T=0;T<E;T++){let P=M+(C-M)*T/E,_=M+(C-M)*(T+1)/E,w=v((P+_)/2),[U,F]=f(P),[Y,L]=f(_),D=(U+Y)/2,k=(F+L)/2,G=Math.abs(_-P)+.002;this.bucket.add(l,oe(h?G:o,w,h?o:G,D,w/2,k),.36),p(P,_,0,w,"wall",null),this.rnd()<.18&&w>1.4&&this.bucket.add(l,oe(.25+this.rnd()*.25,.18,Math.min(o,.35),D+(this.rnd()-.5)*.2,w+.06,k,this.rnd(),0,(this.rnd()-.5)*.5),.36)}if(!s.even&&C-M>1.5)for(let T=0;T<Math.floor((C-M)/2.5);T++){let P=M+this.rnd()*(C-M),_=this.rnd()<.5?-1:1,[w,U]=f(P),F=(o/2+.15+this.rnd()*.3)*_,Y=.15+this.rnd()*.25;this.bucket.add(l,oe(Y*1.4,Y,Y,w+(h?0:F),Y/2-.03,U+(h?F:0),this.rnd()*3,this.rnd()*.4,this.rnd()*.4),.36)}}for(let M of g){let[C,E]=f(M.at),T=h?0:1,P=h?1:0,_=h?1:0,w=h?0:1;if(M.type==="window"){p(M.at-M.w/2,M.at+M.w/2,0,.88,"sill"),a>2.6&&p(M.at-M.w/2-.05,M.at+M.w/2+.05,2.2,a-this.rnd()*.3);for(let U of[-1,1]){let F=C+_*U*(M.w/2-.06),Y=E+w*U*(M.w/2-.06);this.bucket.add(this.M.timber,oe(h?.1:o+.06,1.35,h?o+.06:.1,F,1.55,Y),.7)}this.windows.push({x:C,z:E,nx:T,nz:P,ax:_,az:w,halfW:M.w/2,id:this.windows.length})}else a>2.7&&M.type!=="open"&&p(M.at-M.w/2-.05,M.at+M.w/2+.05,2.35,a-this.rnd()*.2),M.type==="pallet"&&this.palletSpots.push({x:C,z:E,ax:_,az:w,nx:T,nz:P,w:M.w})}}occupy(t,e,i){this.occupied.push({x:t,z:e,r:i})}isFree(t,e,i){if(Math.abs(t)>Ot-i-1||Math.abs(e)>Ot-i-1)return!1;for(let n of this.occupied)if(Math.hypot(n.x-t,n.z-e)<n.r+i)return!1;return!0}build(){let t=this.rnd,e=this.M;this.buildGround(),this.buildBoundary(),this.buildChurch(),this.bellSpots.push({x:4.5,z:0,rot:Math.PI/2});let i=t()*Math.PI*2;for(let c=0;c<6;c++)for(let h=0;h<30;h++){let u=i+c/6*Math.PI*2+(t()-.5)*.5,d=27+t()*12,f=Math.cos(u)*d,g=Math.sin(u)*d;if(this.isFree(f,g,5)&&!this.gateSpots.some(x=>Math.hypot(x.x-f,x.z-g)<14)){this.bellSpots.push({x:f,z:g,rot:Math.floor(t()*4)*Math.PI/2}),this.occupy(f,g,4);break}}for(let c of this.bellSpots){let{x:h,z:u}=c,d=Math.round(c.rot/(Math.PI/2))%2===1;this.addBox(h-.85,h+.85,0,.5,u-.85,u+.85,null,"prop",0,!1);for(let f of[-1,1])d?this.addBox(h-.12,h+.12,0,3.4,u+f*.6-(f>0?0:.25),u+f*.6+(f>0?.25:0),null,"nosight",0,!1):this.addBox(h+f*.6-(f>0?0:.25),h+f*.6+(f>0?.25:0),0,3.4,u-.12,u+.12,null,"nosight",0,!1)}let n=t()*Math.PI*2;for(let c=0;c<6;c++)for(let h=0;h<40;h++){let u=n+c/6*Math.PI*2+(t()-.5)*.6,d=c%2?18+t()*5:38+t()*6,f=Math.cos(u)*d,g=Math.sin(u)*d;if(this.isFree(f,g,3.5)){this.postSpots.push({x:f,z:g,rot:t()*Math.PI*2}),this.occupy(f,g,3),this.circles.push({x:f,z:g,r:.2,h:3.6});break}}let s=["longWindow","lPallet","tWindow","shack","peat","corner","lPallet","longWindow","shack","peat","tWindow","corner"],a=0,o=[];for(let c=-42;c<=42;c+=12)for(let h=-42;h<=42;h+=12)o.push([c+(t()-.5)*5,h+(t()-.5)*5]);o.sort(()=>t()-.5);let l=0;for(let[c,h]of o){if(l>=22)break;this.isFree(c,h,5.5)&&(this.tile(s[a++%s.length],c,h,Math.floor(t()*4)),this.occupy(c,h,5.5),l++)}this.buildGraveyard(),this.buildDecor(),this.buildTrees(),this.buildRocks(),this.buildPools(),this.bucket.build(this.root),this.buildNav(),this.buildPerches(),this.buildGrass(),this.buildSky(),this.buildMist(),this.spawns()}buildGround(){let t=Ot*2+40,e=140,i=new Oi(t,t,e,e);i.rotateX(-Math.PI/2);let n=i.attributes.position,s=new Float32Array(n.count*3);for(let o=0;o<n.count;o++){let l=n.getX(o),c=n.getZ(o),h=this.noise.fbm(l*.03,c*.03,4),u=this.noise.fbm(l*.12+50,c*.12,3),d=Math.max(Math.abs(l),Math.abs(c))>Ot+1?.04*this.noise.noise(l*.2,c*.2)+.15:0;n.setY(o,h*.05-.035+d);let f=.72+h*.35+u*.12;s[o*3]=f,s[o*3+1]=f*(.98+u*.05),s[o*3+2]=f*.95}i.setAttribute("color",new ve(s,3)),i.computeVertexNormals(),Sr(i,1/3.2);let a=new ee(i,this.M.ground);a.receiveShadow=!0,this.root.add(a)}buildBoundary(){let t=this.rnd,e=(t()-.5)*50,i=(t()-.5)*50;this.gateSpots.push({x:e,z:Ot+.3,out:1},{x:i,z:-Ot-.3,out:-1});let n={h:3.4,t:.8,ruin:.9},s=Ot+.7;this.wall(-s,s,s,s,{...n,openings:[{at:e+s,w:3.7,type:"open"}]}),this.wall(-s,-s,s,-s,{...n,openings:[{at:i+s,w:3.7,type:"open"}]}),this.wall(s,-s,s,s,n),this.wall(-s,-s,-s,s,n);for(let a of this.gateSpots){for(let o of[-1,1])this.addBox(a.x+o*2.25-.4,a.x+o*2.25+.4,0,3.4,a.z-.45,a.z+.45,null,"wall",0,!1);this.occupy(a.x,a.z-a.out*3,6)}}buildChurch(){let t=this.M,e={h:5.2,t:.75,ruin:2.2};this.wall(-11,6.5,11,6.5,{...e,openings:[{at:6,w:1.3,type:"window"},{at:15,w:1.3,type:"window"},{at:19.5,w:1.6,type:"pallet"}]}),this.wall(-11,-6.5,11,-6.5,{...e,openings:[{at:4,w:1.3,type:"window"},{at:11,w:2.2,type:"door"},{at:17,w:1.3,type:"window"}]}),this.wall(-11,-6.5,-11,6.5,{...e,openings:[{at:6.5,w:1.6,type:"pallet"}]}),this.wall(11,-6.5,11,6.5,{...e,h:6.5,ruin:1.5}),this.wall(-15,-10.5,-11,-10.5,{h:7,t:.8,ruin:2.5}),this.wall(-15,-10.5,-15,-6.5,{h:7.5,t:.8,ruin:2.5,openings:[{at:2,w:1.3,type:"window"}]}),this.wall(-15,-6.5,-12.2,-6.5,{h:6,t:.8,ruin:2});for(let i=-10.5;i<10.5;i+=1.5)for(let n=-6;n<6;n+=1.5)this.rnd()<.12||this.bucket.add(t.stoneClean,oe(1.45,.06,1.45,i+.75,.03+this.rnd()*.02,n+.75,(this.rnd()-.5)*.05),.6);this.addBox(8.6,10.2,0,1.05,-1.4,1.4,t.stoneClean,"wall",.6),this.bucket.add(t.stoneClean,oe(1.9,.2,3.2,9.4,1.1,0),.6),this.addBox(7.6,10.6,0,.18,-2.2,2.2,t.stoneClean,"prop",.6);for(let i of[-8.5,-5.8,-3.1])for(let n of[-1,1]){if(this.rnd()<.25)continue;let s=3.2-this.rnd()*1.2,a=n>0?1.3:-1.3-s;this.addBox(i,i+.5,0,.5,a,a+s,t.planks,"nosight",.8),this.bucket.add(t.planks,oe(.08,.6,s,i+.48,.8,a+s/2,0,0,-.15),.8)}for(let i=0;i<4;i++){let n=-8+i*5+this.rnd()*2;this.bucket.add(t.timber,oe(.35,.35,13.5,n,4.9+this.rnd()*.3,0,0,0,(this.rnd()-.5)*.1),.6)}this.bucket.add(t.timber,oe(.35,.35,9,-2,1.6,-1,.5,.32,0),.6),this.altarCandles=[];for(let i=0;i<6;i++)this.altarCandles.push(new R(9.4,1.3,-1.2+i*.48));this.occupy(0,0,13),this.occupy(-13,-8.5,3.5)}tile(t,e,i,n){let s=[1,0,-1,0][n],a=[0,1,0,-1][n],o=(h,u)=>[e+h*s-u*a,i+h*a+u*s],l=(h,u,d,f,g)=>{let[x,m]=o(h,u),[p,y]=o(d,f);this.wall(x,m,p,y,g)},c=this.M;switch(t){case"longWindow":l(-4,0,4,0,{openings:[{at:4,w:1.3,type:"window"}]}),l(-4,.3,-4,2.8,{h:2.4});break;case"lPallet":l(-4,0,4,0,{openings:[{at:5.2,w:1.6,type:"pallet"}]}),l(-4,.3,-4,3.8,{});break;case"tWindow":l(-3.8,0,3.8,0,{}),l(0,.3,0,5.2,{openings:[{at:2.9,w:1.3,type:"window"}]});break;case"shack":{let h={h:2.9,t:.25,mat:c.planks,ruin:.3,even:!0};l(-3,-2.3,3,-2.3,{...h,openings:[{at:3,w:1.3,type:"window"}]}),l(3,-2.3,3,2.3,h),l(3,2.3,-3,2.3,{...h,openings:[{at:1.6,w:1.4,type:"door"}]}),l(-3,2.3,-3,-2.3,{...h,openings:[{at:2.3,w:1.6,type:"pallet"}]});for(let f=0;f<5;f++){if(this.rnd()<.35)continue;let[g,x]=o(-2.4+f*1.2,0);this.bucket.add(c.planks,oe(n%2?4.8:1.15,.06,n%2?1.15:4.8,g,3+this.rnd()*.15,x,0,(this.rnd()-.5)*.12,(this.rnd()-.5)*.12),.8)}let[u,d]=o(2.2,1.6);this.lanterns=this.lanterns||[],this.lanterns.push(new R(u,2.3,d));break}case"peat":{let h={h:1.45,t:1,mat:c.peatBlock,ruin:.25};l(-4,-1.6,4,-1.6,{...h,openings:[{at:4,w:1.6,type:"pallet"}]}),l(-4,1.6,4,1.6,{...h,openings:[{at:2.5,w:1.3,type:"door"}]}),l(-4.6,-1,-4.6,1,{...h,h:1.2});break}case"corner":l(-3.5,0,3.5,0,{h:3.6,ruin:1.6,openings:[{at:2.2,w:1.3,type:"window"}]}),l(3.5,.3,3.5,5,{h:3.6,ruin:1.6,openings:[{at:2.6,w:1.3,type:"window"}]});break}}buildGraveyard(){let t=zh(),e=[[],[],[]],i=this.rnd;for(let o of[-1,1])for(let l=0;l<3;l++)for(let c=0;c<9;c++){if(i()<.3)continue;let h=-9+c*2.2+(i()-.5)*.5,u=o*(9+l*2.2)+(i()-.5)*.4;if(!this.isFree(h,u,.3))continue;let d=Math.floor(i()*3);e[d].push({x:h,z:u,ry:(i()-.5)*.3,rx:(i()-.5)*.25,rz:(i()-.5)*.2,s:.85+i()*.35}),this.addBox(h-.3,h+.3,0,.9,u-.12,u+.12,null,"nosight",0,!1)}let n=new jt,s=new $e,a=new Ln;e.forEach((o,l)=>{if(!o.length)return;Sr(t[l],1.2);let c=new In(t[l],this.M.stoneClean,o.length);o.forEach((h,u)=>{s.setFromEuler(a.set(h.rx,h.ry,h.rz)),n.compose(new R(h.x,-.05,h.z),s,new R(h.s,h.s,h.s)),c.setMatrixAt(u,n)}),c.castShadow=!0,c.receiveShadow=!0,this.root.add(c)}),this.occupy(0,11,4),this.occupy(0,-11,4)}placeProp(t,e,i,n,...s){let a=Fe[t];if(typeof a!="function")return null;let o=a(this.M,...s);return o.position.set(e,0,i),o.rotation.y=n,this.root.add(o),o}propBox(t,e,i,n,s,a,o="wall"){let l=Math.round(i/(Math.PI/2))%2!==0,c=(l?s:n)/2,h=(l?n:s)/2;this.addBox(t-c,t+c,0,a,e-h,e+h,null,o,0,!1)}buildDecor(){let t=this.rnd,e=()=>Math.floor(t()*4)*Math.PI/2,i=(s,a,o,l)=>o.every(c=>Math.hypot(c.x-s,c.z-a)>l);for(let[s,a]of[[-9,1],[-1.5,1],[1.6,1],[6.3,1],[-9.5,-1],[-3.5,-1],[3,-1],[8.5,-1]]){let o=a*6.875;void 0?this.placeProp("buildButtress",s,o,a>0?0:Math.PI,3.6):this.bucket.add(this.M.stone,oe(.7,3.6,.9,s,1.8,o+a*.45),.36),this.addBox(s-.35,s+.35,0,3.6,Math.min(o,o+a*.9),Math.max(o,o+a*.9),null,"wall",0,!1)}for(let s=0,a=0;s<300&&a<6;s++){let o=(t()-.5)*(Ot*2-10),l=(t()-.5)*(Ot*2-10);if(!this.isFree(o,l,1.6)||!i(o,l,this.bellSpots,8)||!i(o,l,this.postSpots,6)||!i(o,l,this.chestSpots,18))continue;let c=e();this.chestSpots.push({x:o,z:l,rot:c}),this.propBox(o,l,c,.95,.6,.6,"nosight"),this.occupy(o,l,1.4),a++}let n=(s,a,o)=>{for(let l=0,c=0;l<200&&c<s;l++){let h=(t()-.5)*(Ot*2-8),u=(t()-.5)*(Ot*2-8);!this.isFree(h,u,a)||!i(h,u,this.bellSpots,6)||o(h,u)!==!1&&(this.occupy(h,u,a),c++)}};n(3,2.2,(s,a)=>{if(!void 0)return!1;let o=e();this.placeProp("buildCart",s,a,o),this.propBox(s,a,o,1.2,2,1.1)}),n(4,1.6,(s,a)=>{if(!void 0)return!1;let o=e();this.placeProp("buildCoffin",s,a,o),this.propBox(s,a,o,.7,2,.55,"nosight")}),n(4,5,(s,a)=>{if(!void 0)return!1;let o=5+Math.floor(t()*4),l=e();this.placeProp("buildFence",s,a,l,o);let c=Math.cos(l)*o,h=-Math.sin(l)*o;this.addBox(Math.min(s,s+c)-.08,Math.max(s,s+c)+.08,0,1.1,Math.min(a,a+h)-.08,Math.max(a,a+h)+.08,null,"nosight",0,!1)}),n(5,1.2,(s,a)=>{if(!void 0)return!1;let o=this.placeProp("buildLanternPost",s,a,t()*6.28);this.circles.push({x:s,z:a,r:.15,h:2.4});let l=o.userData.lampPos;l&&this.decorLights.push(l.clone().applyMatrix4(o.matrixWorld.compose(o.position,o.quaternion,o.scale)))});for(let s=0;s<9;s++){let a=-10+t()*20,o=(t()<.5?-1:1)*(7.6+t()*6.5);void 0&&this.isFree(a,o,.4)&&(this.placeProp("buildCandleCluster",a,o,t()*6.28),this.occupy(a,o,.4))}}buildPerches(){let t=this.rnd;for(let i=0;i<200&&this.perches.length<9;i++){let n=(t()-.5)*(Ot*2-8),s=(t()-.5)*(Ot*2-8),a=this.cellIndex(n,s);a>=0&&this.grid[a]===Wi&&this.perches.every(o=>Math.hypot(o.x-n,o.z-s)>12)&&this.perches.push({x:n,y:0,z:s})}let e=this.boxes.filter(i=>i.kind==="wall"&&i.maxY>1.3&&i.maxY<3.3&&i.minY<.1&&(i.maxX-i.minX)*(i.maxZ-i.minZ)>.25&&Math.abs((i.minX+i.maxX)/2)<Ot-2&&Math.abs((i.minZ+i.maxZ)/2)<Ot-2);for(let i=0;i<6&&e.length;i++){let n=e[Math.floor(t()*e.length)],s=(n.minX+n.maxX)/2,a=(n.minZ+n.maxZ)/2;this.perches.every(o=>Math.hypot(o.x-s,o.z-a)>8)&&this.perches.push({x:s,y:n.maxY,z:a,wall:!0})}}buildTrees(){let t=this.rnd,e=[Ys(11),Ys(23),Ys(37),Ys(51)],i=[[],[],[],[]],n=0;for(let o=0;o<900&&n<70;o++){let l=(t()-.5)*(Ot*2-4),c=(t()-.5)*(Ot*2-4);!this.isFree(l,c,1.6)||this.noise.fbm(l*.05,c*.05,2)<-.05&&t()<.7||(i[n%4].push({x:l,z:c,s:.8+t()*.6,r:t()*6.28}),this.circles.push({x:l,z:c,r:.3,h:6}),this.occupy(l,c,1.2),n++)}for(let o=0;o<160;o++){let l=t()*Math.PI*2,c=Math.floor(t()*4),h=(t()-.5)*(Ot*2+30),u=Ot+3+t()*14,d=c<2?h:c===2?u:-u,f=c<2?c===0?u:-u:h;this.gateSpots.some(g=>Math.hypot(g.x-d,g.z-f)<7)||i[o%4].push({x:d,z:f,s:1+t()*.9,r:l})}let s=new jt,a=new $e;i.forEach((o,l)=>{let c=new In(e[l],this.M.bark,o.length);o.forEach((h,u)=>{a.setFromAxisAngle(new R(0,1,0),h.r),s.compose(new R(h.x,0,h.z),a,new R(h.s,h.s,h.s)),c.setMatrixAt(u,s)}),c.castShadow=!0,c.receiveShadow=!0,this.root.add(c)})}buildRocks(){let t=this.rnd;for(let e=0,i=0;e<400&&i<26;e++){let n=(t()-.5)*(Ot*2-6),s=(t()-.5)*(Ot*2-6),a=.5+t()*1.3;if(!this.isFree(n,s,a+.5))continue;let o=Fh(e*13+1,a*(1+t()*.6),a*(.5+t()*.5),a);o.rotateY(t()*6.28),o.translate(n,0,s),Sr(o,.6),this.bucket.add(this.M.statue,o),a>.8&&this.circles.push({x:n,z:s,r:a*.9,h:a*.8}),this.occupy(n,s,a),i++}for(let e=0;e<12;e++){let i=(t()-.5)*90,n=(t()-.5)*90;if(!this.isFree(i,n,2))continue;let s=new Qt(.16,.2,2.5+t()*2,8);s.rotateZ(Math.PI/2),s.rotateY(t()*6.28),s.translate(i,.15,n),this.bucket.add(this.M.bark,s)}}buildPools(){let t=this.rnd;this.pools=[];for(let e=0,i=0;e<200&&i<6;e++){let n=(t()-.5)*88,s=(t()-.5)*88,a=1.5+t()*2.5;if(!this.isFree(n,s,a+1))continue;let o=new es(a,28),l=o.attributes.position;for(let h=1;h<l.count;h++){let u=Math.atan2(l.getY(h),l.getX(h)),d=1+this.noise.noise(Math.cos(u)*2+e,Math.sin(u)*2)*.25;l.setX(h,l.getX(h)*d),l.setY(h,l.getY(h)*d)}let c=new ee(o,this.M.peat);c.rotation.x=-Math.PI/2,c.position.set(n,.02,s),c.receiveShadow=!0,this.root.add(c),this.pools.push({x:n,z:s,r:a}),this.occupy(n,s,a)}}buildGrass(){let t=this.quality==="low"?5e3:14e3,e=new Oi(1,1);e.translate(0,.5,0);let i=e.clone();i.rotateY(Math.PI/2);let n=e.clone();n.rotateY(Math.PI/4);let s=mn([e,i,n]),a=s.attributes.normal;for(let g=0;g<a.count;g++)a.setXYZ(g,0,1,0);let o=new ue({map:this.T.tuft,alphaTest:.42,side:me,roughness:.95,metalness:0});this.quality!=="low"&&(o.alphaToCoverage=!0),this.grassUniforms={uTime:{value:0}},o.onBeforeCompile=g=>{g.uniforms.uTime=this.grassUniforms.uTime,g.vertexShader=`uniform float uTime;
`+g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 ip = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float sway = sin(uTime * 1.6 + ip.x * 0.31 + ip.z * 0.23) * 0.6 + sin(uTime * 3.7 + ip.x * 1.3) * 0.25;
        transformed.x += sway * uv.y * uv.y * 0.12;
        transformed.z += sway * uv.y * uv.y * 0.07;`),g.fragmentShader=g.fragmentShader.replace("#include <normal_fragment_begin>",Ft.normal_fragment_begin.replace("normal *= faceDirection;",""))};let l=new In(s,o,t),c=new jt,h=new $e,u=new vt,d=this.rnd,f=0;for(let g=0;g<t*5&&f<t;g++){let x=(d()-.5)*(Ot*2),m=(d()-.5)*(Ot*2),p=this.noise.fbm(x*.06+7,m*.06,3);if(p<-.15+d()*.3||Math.abs(x)<11&&Math.abs(m)<6.5)continue;let y=this.cellIndex(x,m);if(y<0||this.grid[y]!==Wi||this.pools.some(E=>Math.hypot(E.x-x,E.z-m)<E.r))continue;h.setFromAxisAngle(new R(0,1,0),d()*6.28);let v=.55+d()*.6,M=(.35+d()*.45)*(.75+p*.6);c.compose(new R(x,-.03,m),h,new R(v,M,v)),l.setMatrixAt(f,c);let C=.75+d()*.35;u.setRGB(C,C*(.95+d()*.1),C*.9),l.setColorAt(f,u),f++}l.count=f,l.receiveShadow=!0,this.root.add(l)}buildSky(){this.moonDir=new R(-.45,.42,-.78).normalize();let t=new Re({side:Ze,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uFlash:{value:0},uMoon:{value:this.moonDir},uFog:{value:this.scene.fog?this.scene.fog.color:new vt(2501427)}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`
        varying vec3 vDir; uniform float uTime; uniform float uFlash; uniform vec3 uMoon; uniform vec3 uFog;
        float hash(vec3 p){ p = fract(p*0.3183099+0.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
        float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(h2(i),h2(i+vec2(1,0)),f.x), mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<5;i++){ s+=a*vn(p); p*=2.03; a*=0.5; } return s; }
        void main(){
          vec3 d = normalize(vDir); float h = d.y;
          vec3 col = mix(uFog * 1.15, vec3(0.006,0.009,0.02), smoothstep(-0.02,0.5,h));
          float md = dot(d, uMoon);
          vec3 sd = d*260.0; vec3 c = floor(sd); float r = hash(c);
          float star = step(0.9965, r) * (1.0 - smoothstep(0.0,0.5,length(fract(sd)-0.5))) * smoothstep(0.05,0.4,h);
          col += vec3(0.8,0.85,1.0) * star * (0.5 + 0.5*sin(uTime*2.0 + r*90.0));
          vec2 uv = d.xz/(h+0.18);
          float cl = fbm(uv*0.9 + vec2(uTime*0.004, uTime*0.002));
          float cm = smoothstep(0.42,0.78,cl) * smoothstep(-0.02,0.25,h);
          float disc = smoothstep(0.99935,0.99955,md);
          col += vec3(0.95,0.97,1.0) * disc * 2.5 * (1.0 - cm*0.8);
          col += vec3(0.25,0.3,0.42) * pow(max(md,0.0), 300.0) * 1.2 + vec3(0.07,0.085,0.12) * pow(max(md,0.0), 10.0);
          vec3 ccol = uFog * 1.1 + vec3(0.2,0.22,0.27) * pow(max(md,0.0), 6.0);
          col = mix(col, ccol, cm*0.92);
          col = mix(col, uFog, 1.0 - smoothstep(-0.05,0.12,h));
          col += vec3(0.55, 0.6, 0.78) * uFlash * (0.4 + cm * 1.2);
          gl_FragColor = vec4(col, 1.0);
        }`});this.sky=new ee(new Ce(400,32,16),t),this.sky.frustumCulled=!1,this.sky.renderOrder=-1,this.scene.add(this.sky),this.root.userData.sky=this.sky}buildMist(){this.mistUniforms={uTime:{value:0},uCam:{value:new R}};let t=(e,i,n)=>{let s=new Re({transparent:!0,depthWrite:!1,fog:!1,uniforms:{...this.mistUniforms,uA:{value:i},uS:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`varying vec3 vW; uniform float uTime, uA, uS; uniform vec3 uCam;
          float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
          float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
            return mix(mix(h2(i),h2(i+vec2(1,0)),f.x), mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x), f.y); }
          float fbm(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<4;i++){ s+=a*vn(p); p*=2.1; a*=0.5; } return s; }
          void main(){
            vec2 p = vW.xz*uS + vec2(uTime*0.03, uTime*0.017);
            float n = fbm(p + fbm(p*0.5 - uTime*0.01)*1.5);
            float d = distance(vW.xz, uCam.xz);
            float a = smoothstep(0.35,0.85,n) * uA * smoothstep(1.5,7.0,d) * (1.0 - smoothstep(35.0,70.0,d));
            gl_FragColor = vec4(vec3(0.11,0.125,0.15), a);
          }`}),a=new ee(new Oi(Ot*2+30,Ot*2+30),s);a.rotation.x=-Math.PI/2,a.position.y=e,a.renderOrder=5,this.root.add(a)};t(.25,.55,.06),t(.7,.35,.045),t(1.3,.18,.035)}pointInBox(t,e,i){for(let n of this.boxes)if(n.maxY>.3&&n.minY<1.9&&t>n.minX-i&&t<n.maxX+i&&e>n.minZ-i&&e<n.maxZ+i)return!0;for(let n of this.circles)if(Math.hypot(n.x-t,n.z-e)<n.r+i)return!0;return!1}collide(t,e,i=null){for(let n=0;n<2;n++){for(let s=0;s<2;s++){let a=s?this.dynBoxes:this.boxes;for(let o=0;o<a.length;o++){let l=a[o];if(l.maxY<.3||l.minY>1.9||l.ghost||t.x<l.minX-e||t.x>l.maxX+e||t.z<l.minZ-e||t.z>l.maxZ+e)continue;let c=ie(t.x,l.minX,l.maxX),h=ie(t.z,l.minZ,l.maxZ),u=t.x-c,d=t.z-h,f=Math.hypot(u,d);if(f<e)if(f<1e-5){let g=t.x-l.minX,x=l.maxX-t.x,m=t.z-l.minZ,p=l.maxZ-t.z,y=Math.min(g,x,m,p);y===g?t.x=l.minX-e:y===x?t.x=l.maxX+e:y===m?t.z=l.minZ-e:t.z=l.maxZ+e}else t.x=c+u/f*e,t.z=h+d/f*e}}for(let s=0;s<2;s++){let a=s?i:this.circles;if(a)for(let o=0;o<a.length;o++){let l=a[o],c=t.x-l.x,h=t.z-l.z,u=Math.hypot(c,h),d=l.r+e;u<d&&u>1e-5&&(t.x=l.x+c/u*d,t.z=l.z+h/u*d)}}}return t.x=ie(t.x,-Ot-6,Ot+6),t.z=ie(t.z,-Ot-6,Ot+6),t}raycast(t,e,i=0){let n=e.x-t.x,s=e.y-t.y,a=e.z-t.z,o=1,l=Math.min(t.x,e.x),c=Math.max(t.x,e.x),h=Math.min(t.z,e.z),u=Math.max(t.z,e.z);for(let d of this.boxes){if(!d.sight||d.maxY<=i||d.maxX<l||d.minX>c||d.maxZ<h||d.minZ>u)continue;let f=0,g=o,x=(m,p,y,v)=>{if(Math.abs(p)<1e-9)return m>=y&&m<=v;let M=(y-m)/p,C=(v-m)/p;if(M>C){let E=M;M=C,C=E}return f=Math.max(f,M),g=Math.min(g,C),f<=g};x(t.x,n,d.minX,d.maxX)&&x(t.y,s,d.minY,d.maxY)&&x(t.z,a,d.minZ,d.maxZ)&&(o=Math.min(o,f))}for(let d of this.circles){let f=t.x-d.x,g=t.z-d.z,x=n*n+a*a;if(x<1e-9)continue;let m=2*(f*n+g*a),p=f*f+g*g-d.r*d.r,y=m*m-4*x*p;if(y<0)continue;let v=(-m-Math.sqrt(y))/(2*x);v>0&&v<o&&t.y+s*v<d.h&&(o=v)}return o}lineOfSight(t,e){return this.raycast(t,e)>=.999}cellIndex(t,e){let i=Math.floor((t-gi)/ai),n=Math.floor((e-gi)/ai);return i<0||n<0||i>=Lt||n>=Lt?-1:n*Lt+i}cellCenter(t){return{x:gi+(t%Lt+.5)*ai,z:gi+(Math.floor(t/Lt)+.5)*ai}}rasterBox(t,e,i,n=-1,s=!1){let a=Math.max(0,Math.floor((t.minX-e-gi)/ai)),o=Math.min(Lt-1,Math.floor((t.maxX+e-gi)/ai)),l=Math.max(0,Math.floor((t.minZ-e-gi)/ai)),c=Math.min(Lt-1,Math.floor((t.maxZ+e-gi)/ai));for(let h=l;h<=c;h++)for(let u=a;u<=o;u++){let d=gi+(u+.5)*ai,f=gi+(h+.5)*ai,g=ie(d,t.minX,t.maxX),x=ie(f,t.minZ,t.maxZ);if(Math.hypot(d-g,f-x)>e)continue;let m=h*Lt+u;s&&this.grid[m]!==Wi||(this.grid[m]=i,this.gridObj[m]=n)}}buildNav(){this.grid.fill(Wi),this.gridObj.fill(-1);for(let e of this.boxes)if(e.kind==="sill"){let i=this.windows.find(n=>Math.abs(n.x-(e.minX+e.maxX)/2)<.8&&Math.abs(n.z-(e.minZ+e.maxZ)/2)<.8);this.rasterBox(e,.4,Ar,i?i.id:-1)}for(let e of this.boxes)e.kind!=="sill"&&e.maxY>.3&&e.minY<1.9&&this.rasterBox(e,.4,zn);for(let e of this.circles)this.rasterBox({minX:e.x-e.r,maxX:e.x+e.r,minZ:e.z-e.r,maxZ:e.z+e.r},.4,zn);for(let e=0;e<Lt*Lt;e++){let i=this.cellCenter(e);(Math.abs(i.x)>Ot+.3||Math.abs(i.z)>Ot+.3)&&(this.grid[e]=zn)}for(let e of this.gateSpots)this.rasterBox({minX:e.x-1.6,maxX:e.x+1.6,minZ:Math.min(e.z,e.z+e.out*4),maxZ:Math.max(e.z,e.z+e.out*4)},0,Wi);this.gateBlock=this.gateSpots.map(e=>({minX:e.x-1.9,maxX:e.x+1.9,minY:0,maxY:3,minZ:e.z-.15,maxZ:e.z+.15,kind:"gate"}));for(let e of this.gateBlock)this.dynBoxes.push(e),this.rasterBox(e,.4,zn);this.heap=new Int32Array(Lt*Lt*5),this.gScore=new Float32Array(Lt*Lt),this.came=new Int32Array(Lt*Lt),this.stamp=new Uint32Array(Lt*Lt),this.closed=new Uint32Array(Lt*Lt),this.gen=1}openGateNav(t){let e=this.gateBlock[t];e.ghost=!0,this.rasterBox(e,.4,Wi);let i=this.gateSpots[t];for(let n of[-1,1])this.rasterBox({minX:i.x+n*2.25-.4,maxX:i.x+n*2.25+.4,minZ:i.z-.45,maxZ:i.z+.45},.4,zn)}setPalletNav(t,e){let i=t.box;if(e)this.rasterBox(i,.4,ra,1e3+t.id,!0);else{let n=Math.max(0,Math.floor((i.minX-.5-gi)/ai)),s=Math.min(Lt-1,Math.floor((i.maxX+.5-gi)/ai)),a=Math.max(0,Math.floor((i.minZ-.5-gi)/ai)),o=Math.min(Lt-1,Math.floor((i.maxZ+.5-gi)/ai));for(let l=a;l<=o;l++)for(let c=n;c<=s;c++){let h=l*Lt+c;this.grid[h]===ra&&this.gridObj[h]===1e3+t.id&&(this.grid[h]=Wi,this.gridObj[h]=-1)}}}nearestFree(t){if(t>=0&&this.grid[t]===Wi)return t;let e=t%Lt,i=Math.floor(t/Lt);for(let n=1;n<12;n++)for(let s=-n;s<=n;s++)for(let a=-n;a<=n;a++){if(Math.abs(a)!==n&&Math.abs(s)!==n)continue;let o=e+a,l=i+s;if(o<0||l<0||o>=Lt||l>=Lt)continue;let c=l*Lt+o;if(this.grid[c]===Wi)return c}return-1}findPath(t,e,i,n,s="survivor",a=3e4){let o=this.nearestFree(this.cellIndex(t,e)),l=this.nearestFree(this.cellIndex(i,n));if(o<0||l<0)return null;let c=++this.gen,h=this.gScore,u=this.came,d=this.stamp,f=this.closed,g=this.heap,x=this._f||(this._f=new Float32Array(Lt*Lt)),m=0,p=l%Lt,y=Math.floor(l/Lt),v=D=>{let k=Math.abs(D%Lt-p),G=Math.abs(Math.floor(D/Lt)-y);return k+G+(1.4142-2)*Math.min(k,G)},M=D=>{if(m>=g.length)return;let k=m++;for(g[k]=D;k>0;){let G=k-1>>1;if(x[g[G]]<=x[D])break;g[k]=g[G],k=G}g[k]=D},C=()=>{let D=g[0],k=g[--m],G=0;for(;;){let W=2*G+1;if(W>=m)break;let q=W+1;if(q<m&&x[g[q]]<x[g[W]]&&(W=q),x[g[W]]>=x[k])break;g[G]=g[W],G=W}return g[G]=k,D};d[o]=c,h[o]=0,u[o]=-1,x[o]=v(o),M(o);let E=s==="killer"?5:2.5,T=s==="killer"?10:2,P=!1,_=0;for(;m>0&&_++<a;){let D=C();if(D===l){P=!0;break}if(f[D]===c)continue;f[D]=c;let k=D%Lt,G=D/Lt|0;for(let W=-1;W<=1;W++)for(let q=-1;q<=1;q++){if(!q&&!W)continue;let $=k+q,j=G+W;if($<0||j<0||$>=Lt||j>=Lt)continue;let rt=j*Lt+$,X=this.grid[rt];if(X===zn||q&&W&&(this.grid[G*Lt+$]===zn||this.grid[j*Lt+k]===zn))continue;let K=q&&W?1.4142:1;if(X===Ar){if(q&&W)continue;K+=E}else if(X===ra){if(q&&W)continue;K+=T}let ct=h[D]+K;(d[rt]!==c||ct<h[rt])&&(d[rt]=c,h[rt]=ct,u[rt]=D,x[rt]=ct+v(rt),M(rt))}}if(!P)return null;let w=[];for(let D=l;D!==-1;D=u[D])w.push(D);w.reverse();let U=[],F=0;for(;F<w.length;){let D=this.grid[w[F]];if(D===Ar||D===ra){let k=this.gridObj[w[F]],G=F;for(;G<w.length&&this.grid[w[G]]===D&&this.gridObj[w[G]]===k;)G++;U.push({portal:{type:D===Ar?"window":"pallet",id:D===Ar?k:k-1e3},...this.cellCenter(w[Math.min(G,w.length-1)])}),F=G}else U.push(this.cellCenter(w[F])),F++}let Y=[],L={x:t,z:e};for(let D=0;D<U.length;D++){let k=U[D];if(k.portal){D>0&&!U[D-1].portal&&Y[Y.length-1]!==U[D-1]&&Y.push(U[D-1]),Y.push(k),L=k;continue}let G=U[D+1];(!G||G.portal||!this.walkable(L,G))&&(Y.push(k),L=k)}return Y.push({x:i,z:n,final:!0}),Y}walkable(t,e){let i=Math.hypot(e.x-t.x,e.z-t.z),n=Math.ceil(i/(ai*.5));for(let s=0;s<=n;s++){let a=t.x+(e.x-t.x)*s/n,o=t.z+(e.z-t.z)*s/n,l=this.cellIndex(a,o);if(l<0||this.grid[l]!==Wi)return!1}return!0}randomFreePoint(t=Math.random,e=0,i=Ot-3,n=0,s=0){for(let a=0;a<200;a++){let o=t()*Math.PI*2,l=e+t()*(i-e),c=n+Math.cos(o)*l,h=s+Math.sin(o)*l;if(Math.abs(c)>Ot-2||Math.abs(h)>Ot-2)continue;let u=this.cellIndex(c,h);if(u>=0&&this.grid[u]===Wi)return{x:c,z:h}}return{x:n,z:s}}spawns(){let t=this.rnd()*Math.PI*2;this.survivorSpawn=this.randomFreePoint(this.rnd,0,4,Math.cos(t)*36,Math.sin(t)*36),this.killerSpawn=this.randomFreePoint(this.rnd,0,4,-Math.cos(t)*34,-Math.sin(t)*34),this.hatchSpot=this.randomFreePoint(this.rnd,15,40)}};var se=(r,t)=>r+Math.random()*(t-r),fv=(r,t,e)=>r<t?t:r>e?e:r,aa=class{constructor(){this.ctx=null,this.enabled=!1,this.volume=.8}init(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.enabled=!0,this.master=e.createGain(),this.master.gain.value=this.volume;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.knee.value=12,i.ratio.value=4,this.master.connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.9,this.musicBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(3.2,2.6),this.reverbIn=e.createGain(),this.reverbIn.gain.value=.7,this.reverbIn.connect(this.reverb).connect(this.master),this.white=this._noiseBuffer(3,"white"),this.brown=this._noiseBuffer(4,"brown"),this.pink=this._noiseBuffer(4,"pink"),this._ambience(),this._music(),this.grinds=new Map}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_noiseBuffer(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),s=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let o=s.getChannelData(a),l=0,c=0,h=0,u=0;for(let d=0;d<n;d++){let f=Math.random()*2-1;e==="brown"?(l=(l+.02*f)/1.02,o[d]=l*3.5):e==="pink"?(c=.997*c+f*.029591,h=.985*h+f*.032534,u=.95*u+f*.048056,o[d]=(c+h+u+f*.1848)*.6):o[d]=f}}return s}_impulse(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),s=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let o=s.getChannelData(a),l=0;for(let c=0;c<n;c++){let h=c/n;l=l*.6+(Math.random()*2-1)*.4,o[c]=l*Math.pow(1-h,e)*(c<200?c/200:1)}}return s}setListener(t,e){if(!this.ctx)return;let i=this.ctx.listener,n=this.ctx.currentTime;i.positionX?(i.positionX.setTargetAtTime(t.x,n,.02),i.positionY.setTargetAtTime(t.y,n,.02),i.positionZ.setTargetAtTime(t.z,n,.02),i.forwardX.setTargetAtTime(e.x,n,.02),i.forwardY.setTargetAtTime(e.y,n,.02),i.forwardZ.setTargetAtTime(e.z,n,.02),i.upX.value=0,i.upY.value=1,i.upZ.value=0):(i.setPosition(t.x,t.y,t.z),i.setOrientation(e.x,e.y,e.z,0,1,0))}_panner(t,e=2.5,i=1.1){let n=this.ctx.createPanner();return n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=e,n.rolloffFactor=i,n.maxDistance=120,n.positionX?(n.positionX.value=t.x,n.positionY.value=t.y,n.positionZ.value=t.z):n.setPosition(t.x,t.y,t.z),n}_dest(t,e=.25,i,n){let s=this.ctx.createGain();if(t){let a=this._panner(t,i,n);s.connect(a),a.connect(this.sfx);let o=this.ctx.createGain();o.gain.value=e,a.connect(o),o.connect(this.reverbIn)}else{s.connect(this.sfx);let a=this.ctx.createGain();a.gain.value=e,s.connect(a),a.connect(this.reverbIn)}return setTimeout(()=>s.disconnect(),12e3),s}_env(t,e,i,n,s,a=1e-4){t.setValueAtTime(1e-4,e),t.exponentialRampToValueAtTime(Math.max(n,2e-4),e+i),t.exponentialRampToValueAtTime(a,e+i+s)}_osc(t,e,i,n,s,a,o=.005,l=n){let c=this.ctx.createOscillator();c.type=t,c.frequency.value=e;let h=this.ctx.createGain();return this._env(h.gain,i,o,a,l),c.connect(h).connect(s),c.start(i),c.stop(i+o+l+.05),c}_noise(t,e,i,{type:n="bandpass",f:s=1e3,q:a=1,gain:o=.5,a:l=.005,buf:c=this.white,fEnd:h}={}){let u=this.ctx.createBufferSource();u.buffer=c,u.loopStart=0,u.loop=!0;let d=this.ctx.createBiquadFilter();d.type=n,d.frequency.setValueAtTime(s,t),d.Q.value=a,h&&d.frequency.exponentialRampToValueAtTime(h,t+e);let f=this.ctx.createGain();return this._env(f.gain,t,l,o,e),u.connect(d).connect(f).connect(i),u.start(t,Math.random()*2),u.stop(t+l+e+.05),d}get now(){return this.ctx.currentTime}toll(t,e=196,i=.6,n=7){if(!this.enabled)return;let s=this.now+.01,a=this._dest(t,.9,8,.6),o=[[.5,.55,1],[1,.75,.8],[1.183,.5,.55],[1.506,.32,.5],[2,.5,.42],[2.514,.22,.3],[2.662,.2,.26],[3.011,.17,.22],[4.166,.1,.15],[5.433,.07,.1],[6.796,.04,.07]];for(let[l,c,h]of o)this._osc("sine",e*l*se(.998,1.002),s,n*h,a,c*i*.35,.004),l<=1&&this._osc("sine",e*l+.7,s,n*h,a,c*i*.18,.004);this._noise(s,.05,a,{f:3200,q:.8,gain:i*.5})}chime(t,e=880,i=.25){if(!this.enabled)return;let n=this.now,s=this._dest(t,.5);for(let[a,o]of[[1,1],[2.76,.4],[5.4,.2]])this._osc("sine",e*a,n,1.5/a,s,i*o*.4)}creak(t,e=.25){if(!this.enabled)return;let i=this.now,n=this._dest(t,.2),s=this.ctx.createOscillator();s.type="sawtooth";let a=se(38,60);s.frequency.setValueAtTime(a,i),s.frequency.linearRampToValueAtTime(a*se(1.3,1.8),i+.35);let o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=se(600,1100),o.Q.value=5;let l=this.ctx.createGain();this._env(l.gain,i,.05,e*.5,.35),s.connect(o).connect(l).connect(n),s.start(i),s.stop(i+.5)}footstep(t,e=.18,i=!1){if(!this.enabled)return;let n=this.now,s=this._dest(t,.05,1.5,1.6);this._noise(n,.07,s,{f:se(900,1700),q:.9,gain:e*(i?.4:1)}),this._noise(n,.05,s,{type:"lowpass",f:250,q:.5,gain:e*1.2*(i?.4:1),buf:this.brown})}scream(t,e=1,i=.5,n=1.1){if(!this.enabled)return;let s=this.now,a=this._dest(t,.5,3,.9),o=330*e,l=this.ctx.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(o*.8,s),l.frequency.exponentialRampToValueAtTime(o*1.45,s+.12),l.frequency.exponentialRampToValueAtTime(o*1.2,s+n*.6),l.frequency.exponentialRampToValueAtTime(o*.75,s+n);let c=this.ctx.createOscillator();c.frequency.value=6.5;let h=this.ctx.createGain();h.gain.value=o*.05,c.connect(h).connect(l.frequency);let u=this.ctx.createGain();u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(i,s+.06),u.gain.setValueAtTime(i,s+n*.7),u.gain.exponentialRampToValueAtTime(1e-4,s+n);for(let[d,f,g]of[[850,7,1],[1250,8,.7],[2700,9,.35],[3500,10,.15]]){let x=this.ctx.createBiquadFilter();x.type="bandpass",x.frequency.value=d*(e>1?1.08:1),x.Q.value=f;let m=this.ctx.createGain();m.gain.value=g*2.2,l.connect(x).connect(m).connect(u)}u.connect(a),this._noise(s,n*.9,a,{f:2e3,q:.6,gain:i*.12}),l.start(s),c.start(s),l.stop(s+n+.1),c.stop(s+n+.1)}groan(t,e=1,i=.15){if(!this.enabled)return;let n=this.now,s=this._dest(t,.2,2,1.2),a=se(.4,.7),o=this.ctx.createOscillator();o.type="sawtooth";let l=150*e;o.frequency.setValueAtTime(l*1.1,n),o.frequency.linearRampToValueAtTime(l*.85,n+a);let c=this.ctx.createGain();this._env(c.gain,n,.08,i,a);for(let[h,u]of[[500,1],[900,.5]]){let d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.value=h,d.Q.value=6;let f=this.ctx.createGain();f.gain.value=u*2,o.connect(d).connect(f).connect(c)}c.connect(s),o.start(n),o.stop(n+a+.1)}hit(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.3),n=this.ctx.createOscillator();n.frequency.setValueAtTime(130,e),n.frequency.exponentialRampToValueAtTime(38,e+.2);let s=this.ctx.createGain();this._env(s.gain,e,.003,.9,.25),n.connect(s).connect(i),n.start(e),n.stop(e+.3),this._noise(e,.14,i,{type:"lowpass",f:2200,gain:.6}),this._noise(e,.09,i,{f:5e3,q:1,gain:.3,fEnd:2e3})}palletDrop(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.45,4,.8),n=this.ctx.createOscillator();n.frequency.setValueAtTime(85,e),n.frequency.exponentialRampToValueAtTime(32,e+.35);let s=this.ctx.createGain();this._env(s.gain,e,.003,1.1,.4),n.connect(s).connect(i),n.start(e),n.stop(e+.5),this._noise(e,.09,i,{f:1500,q:.7,gain:.7});for(let a of[190,310,470,640])this._osc("sine",a*se(.95,1.05),e,.18,i,.25)}palletBreak(t){if(this.enabled)for(let e=0;e<5;e++){let i=this.now+e*se(.06,.12),n=this._dest(t,.4,4,.8);this._noise(i,se(.05,.12),n,{f:se(500,2200),q:1.2,gain:.7}),this._osc("sine",se(160,420),i,.12,n,.3)}}vault(t,e=!1){if(!this.enabled)return;let i=this.now,n=this._dest(t,.15);this._noise(i,.32,n,{f:400,fEnd:1800,q:1.2,gain:e?.45:.18,a:.12}),this._noise(i+.3,.07,n,{type:"lowpass",f:300,gain:e?.8:.3,buf:this.brown})}skillWarn(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.1);this._osc("sine",1480,t,.18,e,.22),this._osc("sine",2220,t,.12,e,.08)}skillGood(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.2);this._noise(t,.01,e,{type:"highpass",f:3e3,gain:.3}),this._osc("sine",880,t,.25,e,.12)}skillGreat(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.4);for(let i of[1320,1760,2640])this._osc("sine",i,t,.6,e,.09)}uiClick(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.05);this._osc("triangle",660,t,.06,e,.08)}crack(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.8,12,.5);for(let a of[1,1.37,2.11,2.93,3.7])this._osc("triangle",150*a*se(.98,1.02),e,1.1/Math.sqrt(a),i,.35/a);this._noise(e,.25,i,{f:1400,q:.5,gain:.9,fEnd:500});let n=this.ctx.createOscillator();n.frequency.setValueAtTime(70,e),n.frequency.exponentialRampToValueAtTime(30,e+.5);let s=this.ctx.createGain();this._env(s.gain,e,.002,1.2,.55),n.connect(s).connect(i),n.start(e),n.stop(e+.7)}chains(t,e=8){if(this.enabled)for(let i=0;i<e;i++){let n=this.now+i*se(.04,.1),s=this._dest(t,.3);for(let a of[2400,3650,5100])this._osc("sine",a*se(.9,1.15),n,se(.05,.12),s,.07)}}gurgle(t,e=10,i=1.5){if(this.enabled)for(let n=0;n<e;n++){let s=this.now+Math.random()*i,a=this._dest(t,.3,2,1.2),o=this.ctx.createOscillator();o.frequency.setValueAtTime(se(120,260),s),o.frequency.exponentialRampToValueAtTime(se(500,900),s+.04);let l=this.ctx.createGain();this._env(l.gain,s,.004,.25,.05),o.connect(l).connect(a),o.start(s),o.stop(s+.1)}}boom(t,e=48,i=1){if(!this.enabled)return;let n=this.now,s=this._dest(t,.9,10,.5),a=this.ctx.createOscillator();a.frequency.setValueAtTime(e*1.6,n),a.frequency.exponentialRampToValueAtTime(e*.6,n+2);let o=this.ctx.createGain();this._env(o.gain,n,.01,i,2.2),a.connect(o).connect(s),a.start(n),a.stop(n+2.4),this._noise(n,1.4,s,{type:"lowpass",f:200,gain:i*.8,buf:this.brown})}stoneShift(t,e=.5){if(!this.enabled)return;let i=this.now,n=this._dest(t,.6,4,.9);this._noise(i,1.2,n,{f:220,q:1.5,gain:e,a:.1,buf:this.brown,fEnd:120});let s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(42,i),s.frequency.linearRampToValueAtTime(30,i+1.4);let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=180;let o=this.ctx.createGain();this._env(o.gain,i,.2,e*.6,1.3),s.connect(a).connect(o).connect(n),s.start(i),s.stop(i+1.7)}settle(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.1,1.5,1.8);for(let n=0;n<3;n++)this._noise(e+n*.03,.02,i,{f:se(2500,4500),q:2,gain:.12})}blink(){if(!this.enabled)return;let t=this.now,e=this._dest(null,0);this._noise(t,.2,e,{type:"lowpass",f:500,gain:.08,a:.05,buf:this.pink})}ironGate(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.7,6,.6),n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(310,e),n.frequency.linearRampToValueAtTime(240,e+1.8);let s=this.ctx.createOscillator();s.frequency.value=11;let a=this.ctx.createGain();a.gain.value=9,s.connect(a).connect(n.frequency);let o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1300,o.Q.value=14;let l=this.ctx.createGain();this._env(l.gain,e,.3,.5,1.6),n.connect(o).connect(l).connect(i),n.start(e),s.start(e),n.stop(e+2.1),s.stop(e+2.1),this._noise(e,2,i,{type:"lowpass",f:160,gain:.6,buf:this.brown,a:.3})}escapeChord(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.9);for(let i of[220,277.2,329.6,440,554.4])this._osc("sine",i,t,3.5,e,.06,1.2)}crow(){if(!this.enabled||!this.listenerPos)return;let t=Math.random()*Math.PI*2,e={x:this.listenerPos.x+Math.cos(t)*30,y:12,z:this.listenerPos.z+Math.sin(t)*30},i=2+Math.floor(Math.random()*3);for(let n=0;n<i;n++){let s=this.now+n*se(.35,.5),a=this._dest(e,.6,6,.6),o=this.ctx.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(se(700,900),s),o.frequency.exponentialRampToValueAtTime(se(420,520),s+.25);let l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=1150,l.Q.value=3;let c=this.ctx.createGain();this._env(c.gain,s,.02,.18,.25),o.connect(l).connect(c).connect(a),o.start(s),o.stop(s+.35)}}choir(t,e=3,i=.4,n=0,s=110){if(!this.enabled)return;let a=this.now,o=this._dest(t,.9,6,.6),l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+Math.min(.9,e*.45)),l.gain.setValueAtTime(i,a+e*.8),l.gain.exponentialRampToValueAtTime(1e-4,a+e+.6);for(let[c,h,u]of[[800,6,1],[1150,7,.6],[2900,9,.25]]){let d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.value=c,d.Q.value=h;let f=this.ctx.createGain();f.gain.value=u*1.6,d.connect(f).connect(o),l.connect(d)}for(let c of[1,1.189,1.498,2,1.414,.5])for(let h of[-.004,.004]){let u=this.ctx.createOscillator();u.type="sawtooth";let d=s*c*(1+h);u.frequency.setValueAtTime(d,a),n&&u.frequency.exponentialRampToValueAtTime(d*(1+n),a+e);let f=this.ctx.createOscillator();f.frequency.value=4.5+Math.random()*1.5;let g=this.ctx.createGain();g.gain.value=d*.006,f.connect(g).connect(u.frequency);let x=this.ctx.createGain();x.gain.value=c===.5?.5:.22,u.connect(x).connect(l),u.start(a),f.start(a),u.stop(a+e+.8),f.stop(a+e+.8)}}ascend(t){this.enabled&&(this.choir(t,4.5,.55,0,98),this.toll(t,73,.9,9),this.boom(t,40,.7))}tollCharge(t,e){if(!this.enabled)return;this.choir(t,e,.5,.06,116.5);let i=this.now,n=this._dest(t,.6,5,.7);this._noise(i,e,n,{f:300,fEnd:2400,q:2,gain:.35,a:e*.8,buf:this.brown})}tollRelease(t){this.enabled&&(this.toll(t,61.7,1,7),this.toll(t,87.3,.6,6),this.crack(t),this.boom(t,36,1.1))}fizzle(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.3,4,.8);this._noise(e,.6,i,{f:1800,fEnd:300,q:1.5,gain:.25,a:.02})}shatter(t){if(this.enabled){for(let e=0;e<9;e++){let i=this.now+e*se(.02,.07),n=this._dest(t,.5,5,.8);this._noise(i,se(.05,.2),n,{f:se(700,3500),q:1.4,gain:.6}),this._osc("triangle",se(180,900),i,.15,n,.18)}this.boom(t,55,.6)}}splash(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.4,4,.8);for(let n of[3100,4200,5600])this._osc("sine",n*se(.9,1.1),e,.25,i,.08);this._noise(e,.35,i,{f:2500,q:.8,gain:.45,fEnd:900}),this.gurgle(t,6,.4)}thunder(t=400){if(!this.enabled)return;let e=this.now+Math.min(3,t/340),i=this._dest(null,.9),n=fv(1-t/900,.25,1);this._noise(e,.25,i,{type:"lowpass",f:3e3,fEnd:400,gain:.5*n,buf:this.white}),this._noise(e+.05,3.8,i,{type:"lowpass",f:260,fEnd:70,gain:1*n,a:.15,buf:this.brown}),this._noise(e+.6,2.6,i,{type:"lowpass",f:160,gain:.6*n,a:.4,buf:this.brown})}cawAt(t){if(this.enabled){for(let e=0;e<2;e++){let i=this.now+e*se(.15,.3),n=this._dest(t,.5,4,.8),s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(se(720,920),i),s.frequency.exponentialRampToValueAtTime(se(420,520),i+.22);let a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=1150,a.Q.value=3;let o=this.ctx.createGain();this._env(o.gain,i,.02,.22,.22),s.connect(a).connect(o).connect(n),s.start(i),s.stop(i+.3)}this.flap(t)}}flap(t){if(this.enabled)for(let e=0;e<7;e++){let i=this.now+e*.07,n=this._dest(t,.1,3,1);this._noise(i,.05,n,{f:se(500,900),q:.7,gain:.16})}}chestCreak(t){this.enabled&&this.creak(t,.5)}chestOpen(t){if(!this.enabled)return;let e=this.now,i=this._dest(t,.3,3,1);this.creak(t,.6),this._noise(e+.3,.06,i,{type:"lowpass",f:400,gain:.5,buf:this.brown});for(let n of[660,990,1320])this._osc("sine",n,e+.35,.8,i,.06)}itemUse(){if(!this.enabled)return;let t=this.now,e=this._dest(null,.3);for(let i of[523,784])this._osc("sine",i,t,.4,e,.07)}whisper(t,e,i){if(!this.enabled)return;this.whispers=this.whispers||new Map;let n=this.whispers.get(t);if(!n){let a=this._panner(e,2,1.6),o=this.ctx.createBufferSource();o.buffer=this.pink,o.loop=!0;let l=this.ctx.createGain();l.gain.value=0;let c=[700,1200,2600].map(u=>{let d=this.ctx.createBiquadFilter();return d.type="bandpass",d.frequency.value=u,d.Q.value=9,o.connect(d),d.connect(l),d});l.connect(a).connect(this.sfx);let h=this.ctx.createGain();h.gain.value=.4,a.connect(h),h.connect(this.reverbIn),o.start(),n={p:a,gain:l,fs:c,next:0},this.whispers.set(t,n)}let s=this.now;if(n.p.positionX&&(n.p.positionX.setTargetAtTime(e.x,s,.05),n.p.positionY.setTargetAtTime(e.y,s,.05),n.p.positionZ.setTargetAtTime(e.z,s,.05)),s>n.next){n.next=s+se(.08,.2);let a=[[700,1200],[400,2e3],[300,900],[600,1700],[250,2300]][Math.floor(Math.random()*5)];n.fs[0].frequency.setTargetAtTime(a[0]*se(.9,1.1),s,.02),n.fs[1].frequency.setTargetAtTime(a[1]*se(.9,1.1),s,.02);let o=Math.random()<.7?1:.1;n.gain.gain.setTargetAtTime(i*o*.5,s,.03)}i<=0&&n.gain.gain.setTargetAtTime(0,s,.05)}rain(t){if(this.enabled){if(!this.rainLoop){this.rainLoop=this._loopNoise(this.white,"highpass",1400,.5,0,this.ambBus);let e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=7e3,this.rainLoop.fl.disconnect(),this.rainLoop.fl.connect(e),e.connect(this.rainLoop.g)}this.rainLoop.g.gain.setTargetAtTime(t*.09,this.now,.8)}}_loopNoise(t,e,i,n,s,a){let o=this.ctx.createBufferSource();o.buffer=t,o.loop=!0;let l=this.ctx.createBiquadFilter();l.type=e,l.frequency.value=i,l.Q.value=n;let c=this.ctx.createGain();return c.gain.value=s,o.connect(l).connect(c).connect(a),o.start(),{s:o,fl:l,g:c}}_lfo(t,e,i,n="sine"){let s=this.ctx.createOscillator();s.type=n,s.frequency.value=t;let a=this.ctx.createGain();return a.gain.value=e,s.connect(a).connect(i),s.start(),s}_ambience(){let t=this.ctx.createGain();t.gain.value=1,t.connect(this.master),this.ambBus=t;let e=this._loopNoise(this.pink,"lowpass",420,.7,.22,t);this._lfo(.06,260,e.fl.frequency),this._lfo(.045,.1,e.g.gain);let i=this._loopNoise(this.white,"bandpass",1300,9,.012,t);this._lfo(.11,500,i.fl.frequency),this._lfo(.07,.01,i.g.gain);let n=this.ctx.createGain();n.gain.value=.03,n.connect(t);for(let s of[41.2,41.6,61.7,82.6]){let a=this.ctx.createOscillator();a.frequency.value=s,a.connect(n),a.start()}this.breath=this._loopNoise(this.pink,"bandpass",900,1.2,0,this.sfx),this.breathLfo=this._lfo(.55,0,this.breath.g.gain),this.hiss=this._loopNoise(this.white,"bandpass",4200,3,0,this.sfx),this._lfo(7,0,this.hiss.g.gain)}_music(){let t=this.ctx;this.chase=t.createGain(),this.chase.gain.value=0,this.chase.connect(this.musicBus);let e=t.createGain();e.gain.value=0;let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=320,i.Q.value=3;for(let l of[55,58.27,82.4]){let c=t.createOscillator();c.type="sawtooth",c.frequency.value=l,c.connect(i),c.start()}i.connect(e).connect(this.chase);let n=t.createOscillator();n.type="square",n.frequency.value=2.2;let s=t.createGain();s.gain.value=.11,n.connect(s).connect(e.gain),n.start(),e.gain.value=.12,this.high=t.createGain(),this.high.gain.value=0,this.high.connect(this.chase);let a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=2100,a.Q.value=1.2;let o=t.createGain();o.gain.value=.03;for(let l of[880,932.3,1396.9]){let c=t.createOscillator();c.type="sawtooth",c.frequency.value=l;let h=this._lfo(5,3,c.frequency);c.connect(a),c.start()}a.connect(o).connect(this.high),this._lfo(9,.03,o.gain,"triangle"),this.nextDrum=0}grind(t,e,i){if(!this.enabled)return;let n=this.grinds.get(t);if(!n){let o=this._panner(e,3,1.25),l=this.ctx.createBufferSource();l.buffer=this.brown,l.loop=!0;let c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=170,c.Q.value=1.1;let h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.value=900,h.Q.value=2.5;let u=this.ctx.createGain();u.gain.value=0;let d=this.ctx.createGain();d.gain.value=.45,l.connect(c).connect(u),l.connect(h).connect(d).connect(u),u.connect(o).connect(this.sfx),l.start(),n={p:o,gain:u,f1:c},this.grinds.set(t,n)}let s=this.now;n.p.positionX&&(n.p.positionX.setTargetAtTime(e.x,s,.05),n.p.positionY.setTargetAtTime(e.y,s,.05),n.p.positionZ.setTargetAtTime(e.z,s,.05));let a=.6+Math.random()*.8;n.gain.gain.setTargetAtTime(i*a*1.6,s,.04),n.f1.frequency.setTargetAtTime(140+Math.random()*90,s,.05)}update(t,e){if(!this.enabled)return;this.listenerPos=e.listener;let i=this.now;if(this.chase.gain.setTargetAtTime(e.chase*.9,i,.6),this.high.gain.setTargetAtTime(e.chase>.6?(e.chase-.6)*2.2:0,i,.4),this.breath.g.gain.setTargetAtTime(e.breath*.05,i,.3),this.hiss.g.gain.setTargetAtTime(e.lament*.05,i,.3),this.ambBus.gain.setTargetAtTime(e.ambient??1,i,.5),e.chase>.3&&i>this.nextDrum){this.nextDrum=i+(e.chase>.7?.9:1.8);let n=this._dest(null,.5),s=this.ctx.createOscillator();s.frequency.setValueAtTime(90,i),s.frequency.exponentialRampToValueAtTime(40,i+.4);let a=this.ctx.createGain();this._env(a.gain,i,.004,.5*e.chase,.5),s.connect(a).connect(n),s.start(i),s.stop(i+.6)}this.crowT=(this.crowT??12)-t,this.crowT<0&&(this.crowT=se(18,45),this.crow())}silenceGrind(t){if(!this.grinds)return;let e=this.grinds.get(t);e&&e.gain.gain.setTargetAtTime(0,this.now,.05);let i=this.whispers?.get(t);i&&i.gain.gain.setTargetAtTime(0,this.now,.05)}};var Z=(r=0,t=0,e=0)=>new R(r,t,e),xi=(r,t)=>{let e=t-r;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},He=(r,t)=>Math.atan2(t.x-r.x,t.z-r.z),J=(r,t)=>Math.hypot(r.x-t.x,r.z-t.z),Bh=Z(0,1,0),la=class{constructor(t,e,i){this.G=t,this.id=i,this.pos=Z(e.x,0,e.z),this.model=Ih(t.M),this.model.position.copy(this.pos),this.model.rotation.y=e.rot,t.world.root.add(this.model),this.progress=0,this.ringers=new Set,this.done=!1,this.regress=!1,this.milestone=0,this.creakT=0,this.doneSwing=0,this.slots=[[0,1.3],[0,-1.3],[1.35,0],[-1.35,0]].map(([n,s])=>Z(n,0,s).applyAxisAngle(Bh,e.rot).add(this.pos))}slotBlocked(t){let e=this.G;return e.sentinels.some(i=>J(i.pos,t)<1)||e.memorials.some(i=>J(i.pos,t)<.9)?!0:!!(e.killer&&J(e.killer.pos,t)<1)}freeSlot(t,e=null){let i=null,n=1e9;for(let s of this.slots){if(s===e||this.slotBlocked(s)||[...this.ringers].some(o=>J(o.pos,s)<.6))continue;let a=J(s,t);a<n&&(n=a,i=s)}return i}update(t){let e=this.G,i=this.ringers.size,n=this.model.userData,s=e.time;if(!this.done){if(i>0){let h=[0,1,1.65,2.1,2.45][Math.min(i,4)]/(e.diff?.bellTime??72)*e.bellRateMult();if(i===1){let u=[...this.ringers][0];u.hasPerk("ropeburn")&&(h*=1.15),u.isPlayer||(h*=.92)}this.progress+=h*t,this.regress=!1,this.creakT-=t,this.creakT<0&&(this.creakT=1.3,e.audio.creak(this.pos.clone().setY(2),.35)),Math.random()<t*.4&&e.noise(this.pos,26,"bell")}else this.regress&&(this.progress=Math.max(0,this.progress-.0035*t),this.progress<=0&&(this.regress=!1));let l=Math.floor(this.progress*4);l>this.milestone&&l<4&&(this.milestone=l,e.audio.chime(this.pos.clone().setY(3),520+l*110,.3)),l<this.milestone&&(this.milestone=l),this.progress>=1&&this.complete()}this.done&&(this.doneSwing=Math.max(.04,this.doneSwing-t*.06));let a=this.done?this.doneSwing:(i>0?.13+this.progress*.08:0)+(this.regress?.02:0);n.swing.rotation.z=Math.sin(s*2.6)*a,n.clap.rotation.z=Math.sin(s*2.6-.7)*a*1.5,n.rope.position.y=-.05+(i>0?Math.sin(s*2.4)*.12:0);let o=.85+Math.sin(s*13+this.id)*.07+Math.sin(s*23.7+this.id*3)*.05+(Math.random()-.5)*.08;n.light.intensity=(this.done?7:1.4+this.progress*1.8)*o,n.light.distance=this.done?16:9,n.light.color.setHex(this.done?16767392:16752720);for(let l of n.candles)l.scale.set(.06*(this.done?1.7:1),(.12+Math.random()*.02)*(this.done?1.9:1),1);n.halo.material.opacity=(this.done?.55:.25)*o,this.done&&(n.holy.material.opacity=.22+Math.sin(s*1.5)*.05)}complete(){this.done=!0,this.progress=1,this.doneSwing=.7,this.ringers.has(this.G.player)&&this.G.addScore("objectives",300,"Bell rung");for(let t of[...this.ringers])t.cancelAction();this.ringers.clear(),this.G.audio.toll(this.pos.clone().setY(3),196*(.9+this.id*.04),.9,8),this.G.onBellRung(this)}},ha=class{constructor(t,e,i){this.G=t,this.id=i,this.state="up",this.a=Z(e.ax,0,e.az),this.n=Z(e.nx,0,e.nz),this.w=e.w,this.center=Z(e.x,0,e.z),this.model=Dh(t.M),this.model.position.copy(this.center).addScaledVector(this.a,-(e.w/2-.06)),this.model.rotation.y=Math.atan2(this.a.x,this.a.z),this.angle=-.1,this.target=-.1,this.model.userData.pivot.rotation.x=this.angle,t.world.root.add(this.model);let n=Math.abs(this.a.x)*e.w/2+Math.abs(this.n.x)*.6,s=Math.abs(this.a.z)*e.w/2+Math.abs(this.n.z)*.6;this.box={minX:e.x-n,maxX:e.x+n,minY:0,maxY:.9,minZ:e.z-s,maxZ:e.z+s,kind:"pallet",sight:!1}}side(t){return Math.sign((t.x-this.center.x)*this.n.x+(t.z-this.center.z)*this.n.z)||1}lateral(t){return Math.abs((t.x-this.center.x)*this.a.x+(t.z-this.center.z)*this.a.z)}normalDist(t){return Math.abs((t.x-this.center.x)*this.n.x+(t.z-this.center.z)*this.n.z)}drop(t){if(this.state!=="up")return;let e=this.G;this.state="down",this.target=1.13,e.world.dynBoxes.push(this.box),e.world.setPalletNav(this,!0),e.audio.palletDrop(this.center.clone().setY(.5)),e.noise(this.center,35,"pallet");let i=e.killer;i&&this.lateral(i.pos)<this.w/2+.7&&this.normalDist(i.pos)<1.3&&(i.stun(2.4,"pallet"),t?.isPlayer&&e.addScore("boldness",1e3,"Pallet stun"));for(let n of e.survivors)n!==t&&n.alive&&this.lateral(n.pos)<this.w/2&&this.normalDist(n.pos)<.7&&n.pos.addScaledVector(this.n,this.side(n.pos)*.8);t&&this.lateral(t.pos)<this.w/2+.3&&this.normalDist(t.pos)<.75&&t.pos.addScaledVector(this.n,this.side(t.pos)*(.8-this.normalDist(t.pos)))}break(){if(this.state!=="down")return;let t=this.G;this.state="broken";let e=t.world.dynBoxes.indexOf(this.box);e>=0&&t.world.dynBoxes.splice(e,1),t.world.setPalletNav(this,!1),t.audio.palletBreak(this.center.clone().setY(.5)),t.fx.splinters(this.center.clone().setY(.5)),t.world.root.remove(this.model)}update(t){this.angle+=(this.target-this.angle)*Math.min(1,t*16),this.model.userData.pivot.rotation.x=this.angle}},ca=class{constructor(t,e,i){this.G=t,this.id=i,this.pos=Z(e.x,0,e.z),this.model=Uh(t.M),this.model.position.copy(this.pos),this.model.rotation.y=e.rot,t.world.root.add(this.model),this.hang=this.model.userData.hangPoint.clone().applyAxisAngle(Bh,e.rot).add(this.pos),this.occupant=null,this.tend=0}update(t){let e=this.model.userData,i=this.occupant,n=i&&i.hookPhase===2?1:0;this.tend+=(n-this.tend)*Math.min(1,t*.8),e.tendrils.visible=this.tend>.01,e.tendrils.scale.y=Math.max(.001,this.tend*(1+Math.sin(this.G.time*2)*.05)),e.tendrils.rotation.y+=t*.1}},ua=class{constructor(t,e,i){this.G=t,this.id=i,this.spot=e,this.pos=Z(e.x,0,e.z),this.model=Nh(t.M),this.model.position.copy(this.pos),this.model.rotation.y=e.out>0?Math.PI:0,t.world.root.add(this.model),this.lever=Z(3.4,0,1.2).applyAxisAngle(Bh,this.model.rotation.y).add(this.pos),this.inward=Z(0,0,-e.out),this.progress=0,this.open=!1,this.openers=new Set,this.doorA=0}update(t){let e=this.G,i=this.model.userData;!this.open&&e.gatesPowered&&this.openers.size>0&&(this.progress+=t/18,this.progress>=1&&this.doOpen());let n=this.open?3:Math.floor(this.progress*3.0001);i.lamps.forEach((s,a)=>{s.material=a<n?this.open?this.G.M.lanternLit:this.G.M.lanternRed:this.G.M.lanternGlass}),i.light.intensity=e.gatesPowered?this.open?4:1+this.progress*2:0,i.light.color.setHex(this.open?14215423:16728096),i.lever.rotation.x=-.6+(this.open?1.2:this.progress*1.2),this.open&&(this.doorA=Math.min(1.75,this.doorA+t*.9),i.doors[0].rotation.y=-this.doorA,i.doors[1].rotation.y=this.doorA,i.beyond.material.opacity=Math.min(.9,i.beyond.material.opacity+t*.3))}doOpen(){this.open=!0,this.progress=1;for(let t of[...this.openers])t.cancelAction();this.G.world.openGateNav(this.id),this.G.audio.ironGate(this.pos.clone().setY(1.5)),this.G.onGateOpened(this)}},da=class{constructor(t,e){this.G=t,this.pos=Z(e.x,0,e.z),this.model=kh(t.M),this.model.position.copy(this.pos);let i=[];this.model.traverse(n=>{n.isPointLight&&i.push(n)});for(let n of i)t.borrowLight(n.color.getHex(),n.distance,n.intensity).position.copy(n.position).add(this.pos),n.parent.remove(n);t.world.root.add(this.model),t.audio.boom(this.pos,70,.4)}},pv=0,pa=class pa{constructor(t,e,i,n=[]){this.G=t,this.def=e,this.isPlayer=i,this.id=pv++,this.name=e.name,this.perks=new Set(n),this.model=bd(e,t.M),t.scene.add(this.model),this.aura=Tr(this.model,t.M.auraAlly),this.aura.visible=!1,t.scene.add(this.aura),this.pos=Z(),this.yaw=0,this.vel=Z(),this.health="healthy",this.hookCount=0,this.hookPhase=0,this.hookTimer=0,this.post=null,this.bleed=240,this.healProg=0,this.healers=new Set,this.maxResolve=this.hasPerk("unblinking")?140:100,this.resolve=this.maxResolve,this.blinkT=0,this.blinkDur=0,this.watching=!1,this.watchedFor=0,this.action=null,this.vault=null,this.boost=0,this.immune=0,this.exhausted=0,this.crouch=!1,this.anim="idle",this.animT=Math.random()*10,this.stepT=0,this.scratchT=0,this.groanT=3,this.wiggle=0,this.speed=0,this.moveDir=Z(),this.secondWakeUsed=!1,this.noBlink=0,this.escapeAttempts=3,this.ai={state:"bell",t:0,path:null,pathT:0,goal:null,stuckT:0,lastPos:Z(),glanceT:2+Math.random()*3,aware:!1,bell:null,claim:null,fleeT:0}}hasPerk(t){return this.perks.has(t)}get alive(){return this.health!=="dead"&&this.health!=="escaped"}get standing(){return this.health==="healthy"||this.health==="injured"}get free(){return this.standing&&!this.vault}get blinking(){return this.blinkT>0}get eyeY(){return this.health==="downed"?.35:this.crouch?1:1.6}eye(){return Z(this.pos.x,this.pos.y+this.eyeY,this.pos.z)}chest(){return Z(this.pos.x,this.pos.y+(this.health==="downed"?.25:this.crouch?.6:1.15),this.pos.z)}forward(){return Z(Math.sin(this.yaw),0,Math.cos(this.yaw))}place(t){this.pos.set(t.x,0,t.z)}cancelAction(){let t=this.action;t&&(t.type==="ring"&&t.bell.ringers.delete(this),t.type==="gate"&&t.gate.openers.delete(this),t.type==="heal"&&t.target&&t.target.healers.delete(this),t.type==="selfheal"&&this.healers.delete(this),this.action=null,this.isPlayer&&this.G.ui.skill.cancel())}startAction(t,e={}){this.cancelAction(),this.action={type:t,t:0,...e},t==="ring"&&e.bell.ringers.add(this),t==="gate"&&e.gate.openers.add(this),t==="heal"&&e.target.healers.add(this),t==="selfheal"&&this.healers.add(this)}forceBlink(t){!this.alive||this.noBlink>0||(this.blinkT<=0?(this.blinkDur=t,this.blinkT=t,this.isPlayer&&(this.G.audio.blink(),this.G.onPlayerBlink())):this.blinkT=Math.max(this.blinkT,t))}hit(){let t=this.G;return this.immune>0?(this.immune=0,this.boost=2,t.audio.hit(this.chest()),t.audio.scream(this.chest(),this.def.voice,.4,.6),"immune"):(this.cancelAction(),this.health==="healthy"?this.health="injured":this.health==="injured"&&(this.health="downed",this.bleed=240,this.healProg=0,this.crouch=!1),this.boost=this.health==="injured"?2:0,t.audio.hit(this.chest()),t.audio.scream(this.chest(),this.def.voice,.6,1),t.noise(this.pos,40,"scream"),t.fx.blood(this.chest()),t.onHit(this),this.health)}update(t){let e=this.G;if(this.animT+=t,!!this.alive){if(this.blinkT>0&&(this.blinkT-=t),this.boost=Math.max(0,this.boost-t),this.immune=Math.max(0,this.immune-t),this.exhausted=Math.max(0,this.exhausted-t),this.noBlink=Math.max(0,this.noBlink-t),this.throwT=Math.max(0,(this.throwT||0)-t),this.watching)this.watchedFor+=t;else{let i=16*(this.hasPerk("tallow")?2:1);e.killer&&J(e.killer.pos,this.pos)<16&&(i*=.85),e.nearCandle(this.pos)&&(i*=2),this.resolve=Math.min(this.maxResolve,this.resolve+i*t),this.watchedFor=0}if(this.health==="downed"&&(this.bleed-=t*(this.healers.size?0:1),this.bleed<=0)){this.die("bled");return}if(!(this.health==="hooked"&&(this.updateHooked(t),!this.alive))){if(this.health==="injured"&&!this.hasPerk("hymn")&&(this.groanT-=t,this.groanT<0&&(this.groanT=4+Math.random()*5,e.audio.groan(this.chest(),this.def.voice),e.noise(this.pos,9,"groan"))),this.healers.size&&(this.health==="injured"||this.health==="downed")){let i=0;for(let n of this.healers){let a=n===this?1/32:this.health==="downed"?1/12:1/16;n.hasPerk("hymn")&&(a*=1.5),i+=a}if(this.healProg+=i*t,this.healProg>=1){this.healProg=0;let n=this.health;this.health=n==="downed"?"injured":"healthy";for(let s of[...this.healers])s.isPlayer&&s!==this&&e.addScore("altruism",800,n==="downed"?"Revived":"Healed"),s.cancelAction();this.healers.clear(),this.healClaim=null}}this.vault?this.updateVault(t):this.health==="carried"?this.updateCarried(t):this.isPlayer?e.playerControl(this,t):this.updateAI(t),this.action&&this.updateAction(t),this.speed>3.2&&(this.scratchT-=t,this.scratchT<0&&(this.scratchT=.35,e.scratches.push({x:this.pos.x,z:this.pos.z,t:e.time,s:this}))),this.speed>.5&&(this.standing||this.health==="downed")&&(this.stepT-=t*this.speed,this.stepT<0&&(this.stepT=1.25,e.audio.footstep(this.pos.clone().setY(.1),this.speed>3?.2:.1,this.crouch))),this.syncModel(t)}}}updateAction(t){let e=this.action,i=this.G;if(e.t+=t,e.type==="ring")(e.bell.done||e.bell.locked)&&this.cancelAction();else if(e.type==="heal"){let n=e.target;(!n.alive||J(n.pos,this.pos)>2.2||n.health!=="injured"&&n.health!=="downed")&&this.cancelAction()}else if(e.type==="selfheal")this.health!=="injured"&&this.cancelAction();else if(e.type==="unhook"){let n=e.target;if(n.health!=="hooked"){this.cancelAction();return}e.t>=1.2&&(this.cancelAction(),n.unhook(this))}else if(e.type==="gate")e.gate.open&&this.cancelAction();else if(e.type==="shroud"){if(e.t>=2.2){let n=e.target;this.cancelAction(),n===i.killer?(i.killer.veil(),this.isPlayer&&i.addScore("boldness",2e3,"Veiled the Reliquary")):(n.setShroud(45),this.isPlayer&&i.addScore("boldness",400,"Shrouded a Sentinel"))}}else if(e.type==="bandage"){if(this.health!=="injured"){this.cancelAction();return}this.healProg=Math.min(.999,Math.max(this.healProg,e.t/6)),e.t>=6&&(this.cancelAction(),this.healProg=0,this.health="healthy",i.consumeItem(this),i.toast("Your wounds are bound","good"))}else if(e.type==="search"){let n=e.chest;if(n.opened){this.cancelAction();return}n.progress=Math.min(1,n.progress+t/6),Math.random()<t*.7&&(i.audio.chestCreak(n.pos.clone().setY(.5)),i.noise(n.pos,14,"chest")),n.progress>=1&&(this.cancelAction(),n.open(this))}else e.type==="drop"?e.t>=.25&&(this.action=null):e.type==="hatch"&&e.t>=.8&&(this.cancelAction(),this.escape("hatch"))}updateHooked(t){let e=this.G,i=(this.hookPhase===2&&this.isPlayer,1);if(this.hookTimer-=t*i,this.hookTimer<=0)if(this.hookPhase===1)this.hookPhase=2,this.hookTimer=50,e.toast(`${this.name} is struggling against the moor`,"warn"),e.audio.gurgle(this.post.hang,14,2);else{this.die("sacrificed");return}this.hookPhase===2&&Math.random()<t*.6&&e.audio.gurgle(this.post.pos.clone().setY(.2),2,.4);let n=this.hookPhase===2?.25+(1-this.hookTimer/50)*.55:(1-this.hookTimer/55)*.25;this.pos.set(this.post.hang.x,this.post.hang.y-2.15-n,this.post.hang.z),this.yaw=this.post.model.rotation.y+Math.PI/2,this.speed=0}updateCarried(t){let e=this.G.killer,i=Z(Math.cos(e.yaw),0,-Math.sin(e.yaw));this.pos.copy(e.pos).addScaledVector(i,-.32).add(Z(0,1.85,0)).addScaledVector(e.forward(),.05),this.yaw=e.yaw+Math.PI/2,this.speed=0,this.isPlayer||(this.wiggle+=t*.055),this.wiggle>=1&&e.dropCarried(!0)}updateVault(t){let e=this.vault;e.t+=t;let i=Math.min(1,e.t/e.dur);this.pos.lerpVectors(e.from,e.to,i),this.pos.y=Math.sin(i*Math.PI)*(e.kind==="window"?.75:.5),this.yaw=e.yaw,this.speed=0,i>=1&&(this.pos.y=0,this.vault=null,this.hasPerk("hare")&&this.exhausted<=0&&this.G.killer&&J(this.G.killer.pos,this.pos)<12&&(this.boost=3,this.exhausted=40,this.hareBoost=!0))}startVault(t,e,i){let n=t==="window"?Z(e.x,0,e.z):e.center,s=t==="window"?Z(e.nx,0,e.nz):e.n,a=Math.sign((this.pos.x-n.x)*s.x+(this.pos.z-n.z)*s.z)||1,o=t==="window"?Z(e.ax,0,e.az):e.a,l=ie((this.pos.x-n.x)*o.x+(this.pos.z-n.z)*o.z,-.2,.2),c=n.clone().addScaledVector(s,a*.75).addScaledVector(o,l),h=n.clone().addScaledVector(s,-a*(t==="window"?.8:.95)).addScaledVector(o,l);this.cancelAction(),this.vault={kind:t,from:this.pos.clone().lerp(c,.5),to:h,t:0,dur:i?.5:t==="window"?.95:.85,yaw:Math.atan2(-a*s.x,-a*s.z)},this.G.audio.vault(n.clone().setY(.8),i),i&&this.G.noise(n,26,"vault"),this.isPlayer&&this.G.killer&&this.G.killer.target===this&&J(this.G.killer.pos,this.pos)<14&&this.G.addScore("boldness",250,"Chase vault")}hook(t){if(this.health="hooked",this.post=t,t.occupant=this,this.hookCount++,this.healProg=0,this.wiggle=0,this.escapeAttempts=3,this.hookCount>=3){this.die("sacrificed");return}this.hookPhase=this.hookCount===1?1:2,this.hookTimer=this.hookPhase===1?55:50,this.G.audio.chains(t.hang),this.G.audio.scream(t.hang,this.def.voice,.55,1.4),this.G.onSurvivorHooked(this)}unhook(t){let e=this.G,i=this.post;i.occupant=null,this.post=null,this.health="injured",this.hookPhase=0;let n=Z(i.hang.x-i.pos.x,0,i.hang.z-i.pos.z).normalize();this.pos.set(i.hang.x,0,i.hang.z).addScaledVector(n,.7),e.world.collide(this.pos,.32),this.immune=10,this.boost=1.5,this.hasPerk("secondwake")&&!this.secondWakeUsed&&(this.secondWakeUsed=!0,this.noBlink=15,this.immune=15),e.audio.chains(i.hang,5),t&&t!==this?(e.toast(`${t.name} freed ${this.name}`,"good"),t.isPlayer&&e.addScore("altruism",1500,"Unbound a survivor")):e.toast(`${this.name} tore free of the post`,"good")}die(t){let e=this.G;this.cancelAction(),this.post&&(this.post.occupant=null);let i=this.post?this.post.pos.clone():this.pos.clone();this.health="dead",this.model.visible=!1,this.aura.visible=!1,e.audio.boom(i.setY(.5),45,.9),e.audio.gurgle(i,18,2.2),e.fx.sink(i),e.onSurvivorDied(this,t),this.post=null}beginCanonize(){this.canonizing=!0,this.cancelAction();for(let t of[...this.healers])t.cancelAction();this.healers.clear()}endCanonize(t){if(this.canonizing=!1,!t){this.setStone(0);return}let e=this.G;this.setStone(1),this.health="dead",this.canonized=!0,this.aura.visible=!1,e.audio.choir(this.chest(),3.5,.45,0,87.3),e.audio.stoneShift(this.chest(),.7),e.fx.dust(this.chest(),50),e.addMemorial(this),e.onSurvivorDied(this,"canonized")}setStone(t){if(!this._stone){let i=new Map,n=new Map,s=Z();this.model.updateMatrixWorld(!0),this.model.traverse(a=>{if(!a.isMesh||!a.material)return;if(!i.has(a.material)){let l=a.material.clone();i.set(a.material,{m:l,color:l.color?l.color.clone():null,rough:l.roughness,metal:l.metalness,emissive:l.emissive?l.emissive.clone():null,y:0,n:0})}let o=i.get(a.material);a.getWorldPosition(s),o.y+=s.y-this.model.position.y,o.n++,n.set(a,o),a.material=o.m}),this._stone=[...i.values()];for(let a of this._stone)a.y=a.n?a.y/a.n:0}let e=pa.STONE;for(let i of this._stone){let n=ie(t*1.7-i.y/1.8*.7,0,1);i.color&&i.m.color.copy(i.color).lerp(e,n),i.rough!==void 0&&(i.m.roughness=i.rough+(.95-i.rough)*n),i.metal!==void 0&&(i.m.metalness=i.metal*(1-n)),i.emissive&&i.m.emissive.copy(i.emissive).multiplyScalar(1-n)}this.stone=t}escape(t){this.cancelAction(),this.health="escaped",this.model.visible=!1,this.aura.visible=!1,this.G.onEscape(this,t)}moveTo(t,e,i,n=!0,s=null){let a=this.G;if(t.lengthSq()>1e-6){t.normalize(),this.pos.addScaledVector(t,e*i),a.world.collide(this.pos,.32,a.agentCircles(this));let o=s??Math.atan2(t.x,t.z);n&&(this.yaw+=xi(this.yaw,o)*Math.min(1,i*10)),this.speed=e}else this.speed=0;this.pos.y=0}runSpeed(){let t=this.health==="downed"?.7:4;return this.boost>0&&this.standing&&(t*=(this.hareBoost,1.5)),this.boost<=0&&(this.hareBoost=!1),t}syncModel(t){let e=this.model;e.position.copy(this.pos),e.rotation.y=this.yaw;let i="idle",n={injured:this.health==="injured",speed:this.speed};if(this.health==="hooked")i="hooked",n.struggle=this.hookPhase===2;else if(this.health==="carried")i="carried",n.wiggle=!0;else if(this.canonizing)i="petrified",n.phase=this.stone||0;else if(this.health==="downed")i="crawl";else if(this.vault)i="vault";else if(this.action){let s=this.action.type;i=s==="ring"?"ring":s==="heal"||s==="selfheal"||s==="hatch"||s==="bandage"||s==="search"?"work":s==="drop"?"drop":"reach",n.phase=this.action.t/.25}else this.mirrorUp?i="hold":this.throwT>0?(i="throw",n.phase=1-this.throwT/.5):this.speed>3?i="run":this.speed>.3?i=this.crouch?"crouch":this.backpedal?"back":"walk":this.crouch&&(i="crouch",n.speed=0);i==="crouch"&&this.speed<.3&&(this.animT-=t),this.isPlayer&&this.lookPitch!==void 0&&(n.lookPitch=this.lookPitch,n.lookYaw=this.lookYaw),wd(e,i,this.animT,t,n),this.health==="carried"&&(e.rotation.z=0),this.aura.visible&&(this.aura.position.copy(e.position),this.aura.rotation.copy(e.rotation),ma(e,this.aura))}knowsKiller(){let t=this.G.killer,e=J(t.pos,this.pos);return!!(this.watching||t.target===this&&e<22||e<9&&t.moving)}aiPathTo(t,e,i,n={}){let s=this.G,a=this.ai;if(a.pathT-=e,!a.path||a.pathT<=0||!a.goal||J(a.goal,t)>1.5){let o=s.world.findPath(this.pos.x,this.pos.z,t.x,t.z,"survivor",45e3);a.path=o||[],a.goal=t.clone?t.clone():Z(t.x,0,t.z),a.pathT=1.2+Math.random()*.6,o?a.failT=0:(a.failT=(a.failT||0)+1,a.failT>2&&(a.failT=0,a.bell=null,a.slot=null,a.fleeGoal=null))}return this.followPath(e,i,n)}followPath(t,e,i={}){let n=this.ai,s=this.G,a=n.path;if(!a||!a.length)return this.speed=0,!0;let o=a[0];if(o.portal){let h=o.portal.type==="window"?s.world.windows[o.portal.id]:s.pallets[o.portal.id];if(!h||o.portal.type==="pallet"&&h.state!=="down")return a.shift(),!1;let u=o.portal.type==="window"?Z(h.x,0,h.z):h.center,d=o.portal.type==="window"?Z(h.nx,0,h.nz):h.n,f=(this.pos.x-u.x)*d.x+(this.pos.z-u.z)*d.z,g=o.portal.type==="window"?Z(h.ax,0,h.az):h.a,x=o.portal.type==="window"?h.halfW:h.w/2,m=Math.abs((this.pos.x-u.x)*g.x+(this.pos.z-u.z)*g.z),p=u.clone().addScaledVector(d,Math.sign(f||1)*.75);return J(p,this.pos)<.5||Math.abs(f)<.95&&m<x+.3?(a.shift(),this.startVault(o.portal.type,h,e>3.5),!1):(this.moveTo(Z(p.x-this.pos.x,0,p.z-this.pos.z),e,t),!1)}if(J(o,this.pos)<(o.final?.4:.45)){if(a.shift(),!a.length)return this.speed=0,!0;if(o=a[0],o.portal)return!1}let c=Z(o.x-this.pos.x,0,o.z-this.pos.z);return this.moveTo(c,e,t,!i.faceYaw,i.faceYaw),n.stuckT+=t,n.stuckT>1.5&&(J(n.lastPos,this.pos)<.4&&(n.path=null,n.pathT=0,this.pos.x+=(Math.random()-.5)*.4,this.pos.z+=(Math.random()-.5)*.4),n.lastPos.copy(this.pos),n.stuckT=0),!1}updateAI(t){let e=this.G,i=this.ai,n=e.killer;if(this.backpedal=!1,this.health==="hooked"){if(this.hookPhase===1&&this.escapeAttempts>0&&this.hookTimer<40&&Math.random()<t*.05&&(this.escapeAttempts--,Math.random()<.04)){this.unhook(this);return}return}if(this.health==="downed"){let u=e.survivors.filter(d=>d!==this&&d.standing).sort((d,f)=>J(d.pos,this.pos)-J(f.pos,this.pos))[0];if(this.healers.size||this.canonizing){this.speed=0;return}if(n&&J(n.pos,this.pos)<10){let d=Z(this.pos.x-n.pos.x,0,this.pos.z-n.pos.z);this.moveTo(d,.7,t)}else u&&J(u.pos,this.pos)>3?this.aiPathTo(u.pos,t,.7):this.speed=0;return}if(!this.standing)return;let s=J(n.pos,this.pos),a=this.knowsKiller();i.t-=t,i.glanceT-=t,i.glanceT<0&&(i.glanceT=1.5+Math.random()*2,s<16&&e.world.lineOfSight(this.eye(),n.headPos())&&Math.random()<(e.diff?.aiNotice??.3)&&(i.noticed=e.time));let o=e.time-(i.noticed??-99)<4&&s<22;if(!n.toll&&e.survivors.some(u=>u.canonizing)&&s<25&&this.resolve>15&&e.world.lineOfSight(this.eye(),n.headPos())){this.setAI("watch"),this.cancelActionIfNot(),this.yaw+=xi(this.yaw,He(this.pos,n.pos))*Math.min(1,t*8),this.speed=0;return}if((a||o)&&s<12&&!n.carrying){if(!n.toll&&(this.noBlink>0||this.resolve>(i.state==="watch"?8:80))&&s>1.6){this.setAI("watch"),this.cancelActionIfNot();let d=He(this.pos,n.pos);this.yaw+=xi(this.yaw,d)*Math.min(1,t*8);let f=Z(this.pos.x-n.pos.x,0,this.pos.z-n.pos.z).normalize(),g=Z(-f.z,0,f.x).multiplyScalar(Math.sin(e.time*.7+this.id)*.6),x=f.add(g);s<9?(this.backpedal=!0,this.moveTo(x,1.6,t,!1)):this.speed=0;return}this.setAI("flee")}if(i.state==="flee")if(i.fleeT-=t,s>24&&i.fleeT<=0)this.setAI("bell");else{(!i.fleeGoal||i.fleeT<=0||J(i.fleeGoal,this.pos)<2)&&(i.fleeGoal=this.pickFleeGoal(),i.fleeT=3,i.path=null);for(let u of e.pallets)if(u.state==="up"&&u.lateral(this.pos)<u.w/2+.2&&u.normalDist(this.pos)<1&&s<5&&u.side(n.pos)!==u.side(this.pos)){this.startAction("drop"),u.drop(this);break}this.cancelActionIfNot("drop"),this.aiPathTo(i.fleeGoal,t,this.runSpeed());return}if(this.action?.type==="drop")return;let l=e.survivors.find(u=>u.health==="hooked"&&(!u.rescuer||u.rescuer===this));if(l&&J(n.pos,l.pos)>14&&(l.hookTimer<45||l.hookPhase===2)){l.rescuer=this,this.setAI("rescue");let u=Z(l.post.hang.x,0,l.post.hang.z);J(u,this.pos)<1.5?(this.action?.type!=="unhook"&&this.startAction("unhook",{target:l}),this.yaw=He(this.pos,u),this.speed=0):(this.cancelAction(),this.aiPathTo(u,t,this.runSpeed()));return}if(l?.rescuer===this&&(l.rescuer=null),s>18){let u=e.survivors.filter(g=>g!==this&&(g.health==="downed"||g.health==="injured"&&!g.isPlayer&&this.health==="healthy")&&J(g.pos,this.pos)<25).sort((g,x)=>(g.health==="downed"?-10:0)+J(g.pos,this.pos)-((x.health==="downed"?-10:0)+J(x.pos,this.pos)))[0],f=e.player.health==="injured"&&e.player.speed<.2&&!e.player.action&&J(e.player.pos,this.pos)<6&&this.health==="healthy"?e.player:u;if(f&&(!f.healers.size||f.healers.has(this))&&(!f.healClaim||f.healClaim===this)){this.setAI("heal"),f.healClaim=this,J(f.pos,this.pos)<1.4?(this.action?.type!=="heal"&&this.startAction("heal",{target:f}),this.yaw=He(this.pos,f.pos),this.speed=0):(this.cancelAction(),this.aiPathTo(f.pos,t,2.6));return}if(this.health==="injured"&&s>26&&!e.gatesPowered){this.setAI("mend"),this.action?.type!=="selfheal"&&this.startAction("selfheal"),this.speed=0;return}}let c=this.healClaim&&this.healClaim.alive&&this.healClaim.ai.state==="heal"&&J(this.healClaim.pos,this.pos)<26;if(this.healers.size&&!this.healers.has(this)||c){this.healers.size||this.cancelAction(),this.speed=0;return}if(e.gatesPowered){this.setAI("gate");let u=e.gates.slice().sort((x,m)=>J(x.pos,this.pos)-J(m.pos,this.pos)),d=u.find(x=>x.open);if(d){let x=d.pos.clone().addScaledVector(d.inward,-4);(this.aiPathTo(x,t,this.runSpeed())||J(x,this.pos)<1.5)&&(this.speed=0);return}let f=u[0],g=f.lever.clone().addScaledVector(f.inward,.9);J(g,this.pos)<1?(this.action?.type!=="gate"&&this.startAction("gate",{gate:f}),this.yaw=He(this.pos,f.lever),this.speed=0):(this.cancelAction(),this.aiPathTo(g,t,this.runSpeed()));return}if(e.hatch&&e.survivors.filter(u=>u.alive).length===1){J(e.hatch.pos,this.pos)<1.2?this.action||this.startAction("hatch"):this.aiPathTo(e.hatch.pos,t,this.runSpeed());return}if(this.setAI("bell"),!i.bell||i.bell.done){let u=n.pos,d=f=>J(f.pos,this.pos)*.6-f.progress*20+f.ringers.size*6+(J(f.pos,u)<14?40:0);i.bell=e.bells.filter(f=>!f.done).sort((f,g)=>d(f)-d(g))[0],i.slot=null}let h=i.bell;if(!h){this.speed=0;return}if((!i.slot||h.slotBlocked(i.slot)||[...h.ringers].some(u=>u!==this&&J(u.pos,i.slot)<.6))&&(i.slot=h.freeSlot(this.pos)||h.slots[0],i.slotT=0),J(i.slot,this.pos)<3&&J(i.slot,this.pos)>.5&&(i.slotT=(i.slotT||0)+t,i.slotT>5)){i.slotT=0;let u=h.freeSlot(this.pos,i.slot);u?i.slot=u:i.bell=null,i.path=null;return}J(i.slot,this.pos)<.5?(i.slotT=0,this.action?.type!=="ring"&&this.startAction("ring",{bell:h}),this.yaw+=xi(this.yaw,He(this.pos,h.pos))*Math.min(1,t*8),this.speed=0,Math.random()<t*.012&&(h.progress=Math.max(0,h.progress-.08),e.audio.crack(h.pos.clone().setY(2.5)),e.noise(h.pos,80,"crack"))):(this.cancelAction(),this.aiPathTo(i.slot,t,s<30?2.26:this.runSpeed()))}cancelActionIfNot(t){this.action&&this.action.type!==t&&this.cancelAction()}setAI(t){if(this.ai.state!==t){this.ai.state=t,this.ai.path=null,t!=="bell"&&(this.ai.slot=null);for(let e of this.G.survivors)e.rescuer===this&&t!=="rescue"&&(e.rescuer=null),e.healClaim===this&&t!=="heal"&&(e.healClaim=null)}}pickFleeGoal(){let t=this.G,e=t.killer,i=null,n=-1e9;for(let s=0;s<10;s++){let a=Math.random()*Math.PI*2,o=8+Math.random()*10,l={x:this.pos.x+Math.cos(a)*o,z:this.pos.z+Math.sin(a)*o};if(Math.abs(l.x)>Ot-3||Math.abs(l.z)>Ot-3)continue;let c=t.world.cellIndex(l.x,l.z);if(c<0||t.world.grid[c]!==0)continue;let h=J(l,e.pos)*1.5-J(l,this.pos)*.3,u=Z(e.pos.x-this.pos.x,0,e.pos.z-this.pos.z).normalize(),d=Z(l.x-this.pos.x,0,l.z-this.pos.z).normalize();h-=Math.max(0,u.dot(d))*25;for(let f of t.pallets)f.state==="up"&&J(f.center,l)<4&&(h+=6);for(let f of t.world.windows)J(f,l)<4&&(h+=4);h>n&&(n=h,i=l)}return i?Z(i.x,0,i.z):Z(-e.pos.x,0,-e.pos.z)}};ac(pa,"STONE",new vt(.42,.41,.385));var fa=pa;function ma(r,t){let e=[],i=[];r.traverse(n=>e.push(n)),t.traverse(n=>i.push(n));for(let n=0;n<e.length&&n<i.length;n++)i[n].position.copy(e[n].position),i[n].rotation.copy(e[n].rotation),i[n].scale.copy(e[n].scale),i[n].visible=e[n].visible}var ga=(r,t)=>(void 0)?.(r,t),Oh=(r,t,e)=>(void 0)?.(r,t,e),Sd=(r,t)=>(void 0)?.(r,t),Td=()=>typeof void 0=="function",mv=(r,t,e="claw")=>os(r,qs[t]?t:e),ya=["","Penitent","Martyr","Saint Unbound"],Zs={chaseNear:["lunge","claw","reach"],chaseFar:["reach","stalk","lunge"],search:["stalk","tilt","beckon"],patrol:["tilt","beckon","stalk","weep","pray"]},gv=0,$s=class{constructor(t,e,i,n){this.G=t,this.id=gv++,this.pos=e.clone(),this.pos.y=0,this.yaw=i,this.pose=n,this.model=Er(t.M,{alive:!1}),ga(this.model,t.killer?t.killer.tier:1),this.cloth=sa(t.M),this.cloth.visible=!1,t.world.root.add(this.model),t.world.root.add(this.cloth),this.circle={x:0,z:0,r:.45},this.shroud=0,this.lookT=Math.random()*.25,this.fx={time:0,glow:0,relic:0,wings:.4,halo:0},this.moveTo(this.pos,i,n)}moveTo(t,e,i){this.pos.set(t.x,0,t.z),this.yaw=e,this.pose=qs[i]?i:"pray",this.model.position.copy(this.pos),this.model.rotation.y=e,os(this.model,this.pose),this.cloth.position.copy(this.pos),this.circle.x=t.x,this.circle.z=t.z}setShroud(t){this.shroud=t,this.cloth.visible=!0,this.G.audio.vault(this.pos.clone().setY(1.5),!1)}update(t){let e=this.G;if(this.shroud>0&&(this.shroud-=t,this.shroud<=0&&(this.cloth.visible=!1)),this.lookT-=t,this.lookT<=0&&this.shroud<=0&&(this.lookT=.25,!e.isWatched(this.samplePoints()))){let i=Ed(e,this.pos,12);i?Oh(this.model,xi(this.yaw,He(this.pos,i.pos)),Math.atan2(i.eye().y-2.3,Math.max(.5,J(i.pos,this.pos)))):Oh(this.model,0,0)}Td()&&e.killer&&(this.fx.time=e.time,this.fx.wings=e.killer.tier>=3?.4:0,Sd(this.model,this.fx))}samplePoints(){return[Z(this.pos.x,1.95,this.pos.z),Z(this.pos.x,1.1,this.pos.z)]}};function Ed(r,t,e){let i=null,n=e;for(let s of r.survivors){if(!s.alive||s.health==="carried")continue;let a=J(s.pos,t);a<n&&(n=a,i=s)}return i}var xa=class{constructor(t,e){this.G=t,this.survivor=e,this.model=e.model,this.isMemorial=!0,this.pos=e.pos.clone(),this.pos.y=0,this.yaw=e.yaw,this.circle={x:this.pos.x,z:this.pos.z,r:.38}}samplePoints(){return[Z(this.pos.x,1.5,this.pos.z),Z(this.pos.x,.9,this.pos.z)]}shatter(){let t=this.G;this.model.visible=!1,t.fx.debris(this.pos),t.audio.shatter(this.pos.clone().setY(1));let e=t.memorials.indexOf(this);e>=0&&t.memorials.splice(e,1)}},va=class{constructor(t){this.G=t,this.model=Er(t.M,{alive:!0}),t.scene.add(this.model),this.aura=Tr(this.model,t.M.aura),this.aura.visible=!1,t.scene.add(this.aura),this.cloth=sa(t.M),this.cloth.visible=!1,t.scene.add(this.cloth),this.pos=Z(),this.yaw=0,this.watchers=0,this.petrified=!1,this.frozenT=0,this.unwatchedT=0,this.lament=!1,this.state="patrol",this.action=null,this.target=null,this.lastSeen=null,this.lastSeenT=-99,this.path=null,this.pathT=0,this.goal=null,this.goalBell=null,this.thinkT=0,this.cooldown=0,this.stunT=0,this.veilT=0,this.carrying=null,this.transferCD=25,this.plantCD=20,this.moving=!1,this.speed=0,this.poseName="tilt",this.variant=0,this.heardT=-99,this.stuckT=0,this.lastPos=Z(),this.circle={x:0,z:0,r:.45},this._pts=[Z(),Z(),Z(),Z(),Z(),Z()],this.tier=1,this.tollCD=25,this.toll=null,this.watchedT=0,this.glow=0,this.wings=0,this.trailAcc=0,this.trailSide=1,this.releaseT=0,this.fx={time:0,glow:0,relic:1,wings:0,halo:0},ga(this.model,1),this.ghostMat=new Ge({color:11450566,transparent:!0,opacity:0,depthWrite:!1}),this.ghost=Tr(this.model,this.ghostMat),this.ghost.visible=!1,t.scene.add(this.ghost),this.ghostT=0,this.ghostPending=!1,this.ghostPos=Z(),os(this.model,"tilt")}ascend(t){let e=this.G;if(!(t<=this.tier)){this.tier=t,ga(this.model,t);for(let i of e.sentinels)ga(i.model,t);this.glow=1,e.audio.ascend(this.headPos()),e.fx.dust(this.pos.clone().setY(1.6),50),e.fx.shockwave(this.pos,9,16767152),e.onAscend(this,t)}}snapGhost(){ma(this.model,this.ghost),this.ghost.position.copy(this.model.position),this.ghost.rotation.copy(this.model.rotation),this.ghostPos.copy(this.pos),this.ghostPending=!0}scald(){let t=this.G;this.stun(3,"holy"),this.transferCD=Math.max(this.transferCD,30),this.toll&&(this.toll=null,t.audio.fizzle(this.headPos())),this.tollCD=Math.max(this.tollCD,15),t.toast("The holy water scalds the Reliquary","good")}nearestWatcherDist(){let t=1e9;for(let e of this.G.survivors)e.watching&&(t=Math.min(t,J(e.pos,this.pos)));return t}place(t){this.pos.set(t.x,0,t.z),this.sync(0)}forward(){return Z(Math.sin(this.yaw),0,Math.cos(this.yaw))}headPos(){return Z(this.pos.x,2.3,this.pos.z)}eye(){return Z(this.pos.x,2.2,this.pos.z)}samplePoints(){let t=this.model.userData;return this.model.updateMatrixWorld(!0),t.head.getWorldPosition(this._pts[0]),t.relic.getWorldPosition(this._pts[1]),t.arms.l.hand.getWorldPosition(this._pts[2]),t.arms.r.hand.getWorldPosition(this._pts[3]),this._pts[4].set(this.pos.x,.9,this.pos.z),this._pts[5].set(this.pos.x,.25,this.pos.z),this._pts}stun(t,e){this.stunT=Math.max(this.stunT,t),this.action?.type==="canonize"&&this.action.target.endCanonize(!1),this.toll&&(this.toll=null,this.G.audio.fizzle(this.headPos()),this.tollCD=Math.max(this.tollCD,8)),this.action=null,this.path=null,this.carrying&&this.dropCarried(!1),this.G.audio.stoneShift(this.pos.clone().setY(1.5),.6),this.G.fx.dust(this.pos.clone().setY(1.8),30),e==="pallet"&&this.G.toast("The Reliquary is stunned","good")}veil(){this.veilT=5,this.cloth.visible=!0,this.stun(5,"veil"),this.G.toast("You veiled the Reliquary","good")}dropCarried(t){let e=this.carrying;e&&(this.carrying=null,e.health="injured",e.wiggle=0,e.pos.copy(this.pos).addScaledVector(this.forward(),.9),e.pos.y=0,this.G.world.collide(e.pos,.32),e.boost=2,e.immune=0,t&&(this.stunT=Math.max(this.stunT,3),this.G.toast(`${e.name} wriggled free`,"good"),e.isPlayer&&this.G.addScore("survival",1200,"Wiggled free")))}detect(t){if(!t.alive||t.health==="hooked"||t.health==="carried")return!1;let e=J(t.pos,this.pos);return e>28||t.crouch&&e>9&&!(t.speed>3)||e>7&&Math.abs(xi(this.yaw,He(this.pos,t.pos)))>1.35?!1:this.G.world.lineOfSight(this.eye(),t.chest())}update(t){let e=this.G;this.cooldown=Math.max(0,this.cooldown-t),this.releaseT=Math.max(0,(this.releaseT||0)-(this.watchers?0:t)),this.transferCD-=t,this.plantCD-=t,this.veilT>0&&(this.veilT-=t,this.veilT<=0&&(this.cloth.visible=!1));let i=this.petrified;this.petrified=this.watchers>0,this.petrified?(this.frozenT+=t*(1+(this.watchers-1)*.5),this.unwatchedT=0,!i&&J(e.player.pos,this.pos)<14&&e.audio.settle(this.pos.clone().setY(1.2))):(this.unwatchedT+=t,this.unwatchedT>2.5&&(this.frozenT=0),i&&(this.variant=Math.floor(Math.random()*5),this.frozenT>2.5&&(this.releaseT=Math.min(1,.35+this.frozenT*.08))));let n=e.nearCandle(this.pos);if(n&&(this.frozenT=Math.min(this.frozenT,3.9)),this.lament=this.frozenT>(this.tier>=3?4:5),this.lament&&this.petrified&&Math.random()<t*6&&e.fx.dust(this.headPos().add(Z(0,-.2,0)),2),this.tollCD-=t,this.watchedT=this.petrified?this.watchedT+t:0,!this.toll&&this.tier>=2&&this.tollCD<=0&&this.watchedT>3&&this.stunT<=0&&!this.carrying&&!n&&this.nearestWatcherDist()<22&&(this.toll={t:0,dur:1.8,lost:0},e.audio.tollCharge(this.headPos(),1.8),e.onTollCharge(this)),this.toll){let s=this.toll;s.t+=t,s.lost=this.petrified?0:s.lost+t,s.lost>.6?(this.toll=null,this.tollCD=8,e.audio.fizzle(this.headPos())):s.t>=s.dur&&(this.toll=null,this.tollCD=this.tier>=3?30:40,e.tollOfStone(this),this.releaseT=Math.max(this.releaseT,1),this.frozenT=0)}if(this.ghostPending&&!e.player.blinking&&(this.ghostPending=!1,J(this.pos,this.ghostPos)>1.2&&(this.ghost.visible=!0,this.ghostT=1.6)),this.ghostT>0&&(this.ghostT-=t,this.ghostMat.opacity=.34*Math.max(0,this.ghostT/1.6),this.ghostT<=0&&(this.ghost.visible=!1)),this.moving=!1,this.speed=0,this.stunT>0){this.stunT-=t,this.sync(t);return}if(this.petrified){this.sync(t);return}this.thinkT-=t,this.thinkT<=0&&(this.thinkT=.25,this.think()),this.act(t),this.choosePose(),this.sync(t)}think(){let t=this.G;if(this.action)return;if(this.carrying){this.state="carry";return}let e=null,i=1e9;for(let s of t.survivors){if(!this.detect(s))continue;let o=J(s.pos,this.pos)+(s.health==="downed"?-4:0)+(s===this.target?-5:0)+(s.health==="injured"?-1:0);o<i&&(i=o,e=s)}if(!e&&t.bellsRung>=4){for(let s of t.survivors)if(s.standing&&s.resolve<25&&J(s.pos,this.pos)<40){e=s;break}}if(e){this.target!==e&&(this.path=null),this.target=e,this.lastSeen=e.pos.clone(),this.lastSeenT=t.time,this.state="chase";return}if(this.target&&t.time-this.lastSeenT<9&&this.target.alive){this.state="search";let s=null;for(let a of t.scratches)a.t>this.lastSeenT-1&&J(a,this.pos)<8&&(!s||a.t>s.t)&&(s=a);s&&J(s,this.pos)>1?this.goal=Z(s.x,0,s.z):this.lastSeen&&J(this.lastSeen,this.pos)>1.2?this.goal=this.lastSeen:this.goal=this.target.pos.clone().add(Z((Math.random()-.5)*6,0,(Math.random()-.5)*6));return}this.target=null;let n=null;for(let s of t.noises)t.time-s.t<5&&J(s.pos,this.pos)<s.r&&s.t>this.heardT&&(!n||s.t>n.t)&&(n=s);if(n){this.heardT=n.t,this.state="investigate",this.goal=n.pos.clone(),this.goalBell=null,this.path=null;return}this.state==="investigate"&&this.goal&&J(this.goal,this.pos)>2||(this.state!=="patrol"||!this.goal)&&(this.state="patrol",this.pickPatrol())}pickPatrol(){let t=this.G,e=t.bells.filter(i=>!i.done);if(e.length&&Math.random()<.85){let i=s=>-s.progress*30+J(s.pos,this.pos)*.4+Math.random()*18-s.ringers.size*25,n=e.length>1?e.filter(s=>s!==this.lastBell):e;this.goalBell=n.sort((s,a)=>i(s)-i(a))[0],this.lastBell=this.goalBell,this.goal=this.goalBell.pos.clone()}else{this.goalBell=null;let i=t.world.randomFreePoint(Math.random,5,45);this.goal=Z(i.x,0,i.z)}this.path=null}act(t){let e=this.G;if(this.action)return this.doAction(t);let i=(e.diff?.killerSpeed??1)*(1+(this.tier-1)*.05),n=this.releaseT>0?8.2+(this.tier-1)*.4:0,s=Math.max(7.2*i,n),a=Math.max(5*i,n),o=1.4,l=this.cooldown>0?o:a;if(this.state==="carry"&&this.carrying){let h=this.nearestPost();if(!h){this.dropCarried(!1);return}let u=Z(h.hang.x,0,h.hang.z);if(J(u,this.pos)<1.4){this.yaw=He(this.pos,u),this.action={type:"hook",t:0,dur:1,post:h};return}this.travel(u,3.9,t);return}if(this.state==="chase"&&this.target){let h=this.target,u=J(h.pos,this.pos);if(!h.alive||h.health==="hooked"||h.health==="carried"){this.target=null,this.state="patrol",this.goal=null;return}if(h.health==="downed"){if(u<1.4){h.hookCount>=2?(this.yaw=He(this.pos,h.pos),this.action={type:"canonize",t:0,dur:3.2,target:h},h.beginCanonize(),e.onCanonizeStart(h)):this.action={type:"pickup",t:0,dur:1.1,target:h};return}this.travel(h.pos,u<7?s:a,t);return}if(u<2.4&&this.cooldown<=0&&!h.vault){this.yaw=He(this.pos,h.pos),this.action={type:"swing",t:0,dur:.28,target:h};return}if(u>26&&this.tryTransfer(h.pos))return;this.travel(h.pos,this.cooldown>0?o:u<6?s:a,t,u<8);return}if(!this.goal){this.pickPatrol();return}if(this.tryTransfer(this.goal))return;if(this.travel(this.goal,this.state==="patrol"?4:l,t)||J(this.goal,this.pos)<1.6){let h=this.goalBell;if(h&&!h.done&&h.progress>.05&&!h.regress&&h.ringers.size===0&&J(h.pos,this.pos)<3){this.yaw=He(this.pos,h.pos),this.action={type:"kick",t:0,dur:1.6,bell:h};return}if(this.plantCD<=0&&e.sentinels.length<6&&!e.survivors.some(u=>u.alive&&J(u.pos,this.pos)<14)){this.action={type:"plant",t:0,dur:1.5};return}this.goal=null,this.state="patrol"}}doAction(t){let e=this.G,i=this.action;if(i.t+=t,i.type==="swing"){if(i.t>=i.dur){let n=i.target;if(this.action=null,n.standing&&!n.vault&&J(n.pos,this.pos)<3&&e.world.lineOfSight(this.eye(),n.chest())){let s=n.hit();this.cooldown=2,e.fx.dust(n.chest(),8),s==="downed"&&e.toast(`${n.name} is down`,"bad")}else this.cooldown=1.4,e.audio.vault(this.pos.clone().setY(1.5),!1)}}else if(i.type==="pickup"){let n=i.target;if(n.health!=="downed"||J(n.pos,this.pos)>2){this.action=null;return}if(i.t>=i.dur){this.action=null,n.cancelAction();for(let s of[...n.healers])s.cancelAction();n.healers.clear(),n.health="carried",n.wiggle=0,n.vault=null,this.carrying=n,this.state="carry",this.path=null,e.audio.stoneShift(this.pos.clone().setY(1),.3)}}else if(i.type==="canonize"){let n=i.target;if(n.health!=="downed"||J(n.pos,this.pos)>2.2){this.action=null,n.endCanonize(!1);return}n.setStone(i.t/i.dur),Math.random()<t*10&&e.fx.dust(n.chest(),2),i.t>=i.dur&&(this.action=null,n.endCanonize(!0),this.target=null,this.state="patrol",this.goal=null)}else if(i.type==="hook"){if(i.t>=i.dur){this.action=null;let n=this.carrying;this.carrying=null,n&&!i.post.occupant?n.hook(i.post):n&&(n.health="downed",n.pos.copy(this.pos)),this.target=null,this.state="patrol",this.goal=null}}else if(i.type==="break"){if(i.pallet.state!=="down"){this.action=null;return}i.t>=i.dur&&(this.action=null,i.pallet.break())}else if(i.type==="vault"){let n=Math.min(1,i.t/i.dur);this.pos.lerpVectors(i.from,i.to,n),this.pos.y=Math.sin(n*Math.PI)*.6,n>=1&&(this.pos.y=0,this.action=null)}else if(i.type==="kick")i.t>=i.dur&&(this.action=null,i.bell.regress=!0,i.bell.progress=Math.max(0,i.bell.progress-.04),e.audio.chime(i.bell.pos.clone().setY(2.5),140,.5),e.audio.settle(i.bell.pos.clone().setY(1)),this.goal=null,this.state="patrol");else if(i.type==="plant"&&i.t>=i.dur){this.action=null,this.plantCD=35+Math.random()*15;let n=this.pos.clone().addScaledVector(this.forward(),1.4),s=e.world.cellIndex(n.x,n.z),a=e.bells.some(o=>J(o.pos,n)<2.8);if(s>=0&&e.world.grid[s]===0&&!a){let o=["pray","tilt","beckon","reach","weep"];e.sentinels.push(new $s(e,n,this.yaw+Math.PI+(Math.random()-.5),o[Math.floor(Math.random()*o.length)])),e.audio.stoneShift(n.clone().setY(1),.35)}this.goal=null,this.state="patrol"}}nearestPost(){let t=null,e=1e9;for(let i of this.G.posts){if(i.occupant)continue;let n=J(i.pos,this.pos);n<e&&(e=n,t=i)}return t}tryTransfer(t){let e=this.G;if(this.transferCD>0||this.carrying||!t||J(this.pos,t)<26)return!1;let i=null,n=14;for(let l of e.sentinels){if(l.shroud>0)continue;let c=J(l.pos,t);c<n&&J(l.pos,this.pos)>15&&!e.isWatched(l.samplePoints())&&(n=c,i=l)}for(let l of e.memorials){let c=J(l.pos,t);c<n&&J(l.pos,this.pos)>15&&!e.isWatched(l.samplePoints())&&(n=c,i=l)}if(!i)return!1;let s=this.pos.clone(),a=this.yaw,o=this.poseName;if(i.isMemorial){let l=Z(t.x-i.pos.x,0,t.z-i.pos.z).normalize(),c=i.pos.clone().addScaledVector(l,1.1);e.world.collide(c,.45,e.killerCircles()),this.pos.copy(c),this.yaw=Math.atan2(l.x,l.z),e.sentinels.length<6&&e.sentinels.push(new $s(e,s,a,o))}else this.pos.copy(i.pos),this.yaw=i.yaw,this.poseName=i.pose,mv(this.model,this.poseName,"pray"),i.moveTo(s,a,o);return e.audio.stoneShift(s.clone().setY(1.2),.5),e.audio.stoneShift(this.pos.clone().setY(1.2),.5),this.transferCD=30,this.path=null,!0}travel(t,e,i,n=!1){let s=this.G;if(n&&s.world.walkable(this.pos,t))return this.step(Z(t.x-this.pos.x,0,t.z-this.pos.z),e,i,J(t,this.pos));if(this.pathT-=i,(!this.path||this.pathT<=0||!this.pathGoal||J(this.pathGoal,t)>1.2)&&(this.path=s.world.findPath(this.pos.x,this.pos.z,t.x,t.z,"killer",45e3),this.pathGoal=Z(t.x,0,t.z),this.pathT=this.state==="chase"?.35:1.2,!this.path))return this.path=[],this.pathT=.6,this.state==="patrol"&&this.pickPatrol(),!0;let a=this.path;if(!a.length)return!0;let o=a[0];if(o.portal){let c=o.portal.type==="window",h=c?s.world.windows[o.portal.id]:s.pallets[o.portal.id];if(!h||!c&&h.state!=="down")return a.shift(),!1;let u=c?Z(h.x,0,h.z):h.center,d=c?Z(h.nx,0,h.nz):h.n,f=c?Z(h.ax,0,h.az):h.a,g=(this.pos.x-u.x)*d.x+(this.pos.z-u.z)*d.z,x=Math.abs((this.pos.x-u.x)*f.x+(this.pos.z-u.z)*f.z),m=u.clone().addScaledVector(d,Math.sign(g||1)*.9);return J(m,this.pos)<.5||Math.abs(g)<1.2&&x<(c?h.halfW:h.w/2)+.4?(a.shift(),this.yaw=Math.atan2(-Math.sign(g||1)*d.x,-Math.sign(g||1)*d.z),c?this.action={type:"vault",t:0,dur:1.5,from:this.pos.clone(),to:u.clone().addScaledVector(d,-Math.sign(g||1)*.9)}:(this.action={type:"break",t:0,dur:2.4,pallet:h},s.audio.settle(u.clone().setY(.8))),!1):this.step(Z(m.x-this.pos.x,0,m.z-this.pos.z),e,i,9)}let l=J(o,this.pos);return l<.5?(a.shift(),!a.length):(this.step(Z(o.x-this.pos.x,0,o.z-this.pos.z),e,i,l),this.stuckT+=i,this.stuckT>1.5&&(J(this.lastPos,this.pos)<.4&&(this.path=null,this.pos.x+=(Math.random()-.5)*.5,this.pos.z+=(Math.random()-.5)*.5),this.lastPos.copy(this.pos),this.stuckT=0),!1)}step(t,e,i,n=99){if(t.lengthSq()<1e-6)return!0;t.normalize();let s=Math.min(e*i,n);this.pos.addScaledVector(t,s);let a=this.G.killerCircles();if(this.G.world.collide(this.pos,.42,a),this.yaw+=xi(this.yaw,Math.atan2(t.x,t.z))*Math.min(1,i*12),this.moving=!0,this.speed=e,this.trailAcc+=s,this.trailAcc>1.1){this.trailAcc=0,this.trailSide=-this.trailSide;let o=Math.cos(this.yaw)*.2*this.trailSide,l=-Math.sin(this.yaw)*.2*this.trailSide;this.G.fx.crack(this.pos.x+o,this.pos.z+l,Math.random()*6.28,.7+Math.random()*.5)}return s>=n-1e-4}choosePose(){let t=this.action,e;if(t)e={swing:"lunge",pickup:"stalk",hook:"carry",break:"claw",kick:"claw",vault:"stalk",plant:"pray",canonize:qs.canonize?"canonize":"reach"}[t.type];else if(this.carrying)e="carry";else if(this.state==="chase"&&this.target){let n=J(this.target.pos,this.pos)<5?Zs.chaseNear:Zs.chaseFar;e=n[this.variant%n.length]}else this.state==="search"||this.state==="investigate"?e=Zs.search[this.variant%Zs.search.length]:e=Zs.patrol[this.variant%Zs.patrol.length];qs[e]||(e="claw"),e!==this.poseName&&(this.poseName=e,os(this.model,e));let i=Ed(this.G,this.pos,18);i&&Oh(this.model,xi(this.yaw,He(this.pos,i.pos)),Math.atan2(i.eye().y-2.3,Math.max(.5,J(i.pos,this.pos))))}sync(t){let e=this.G,i=this.model;i.position.copy(this.pos),i.rotation.y=this.yaw,this.circle.x=this.pos.x,this.circle.z=this.pos.z,this.cloth.position.copy(this.pos);let n=.6+Math.sin(e.time*(this.lament?9:2.2))*.25,s=Math.min(1,t*3),a=this.tier>=2?this.toll?1:this.moving?.85:.2:0;if(this.glow+=(a-this.glow)*s,this.petrified||(this.wings+=((this.tier>=3?this.moving||this.action?1:.45:0)-this.wings)*Math.min(1,t*4)),Td()){let c=this.fx;c.time=e.time,c.glow=this.glow,c.relic=ie(n*(this.lament?1.6:1),0,1),c.wings=this.wings,c.halo=this.toll?1:this.tier>=2?.25:0,Sd(i,c)}else i.userData.relic.material.color.setRGB(.55*n*(this.lament?1.8:1),.11*n,.02*n);let o=e.player.hasPerk("stonehearing")?1.7:1;e.audio.grind("killer",this.pos.clone().setY(.6),this.moving?Math.min(1,this.speed/5)*o:0);let l=J(e.player.pos,this.pos);e.audio.whisper("killer",this.headPos(),!this.petrified&&e.player.alive&&l<13?(1-l/13)*o:0),this.aura.visible&&(this.aura.position.copy(i.position),this.aura.rotation.copy(i.rotation),ma(i,this.aura))}};var Rr={mirror:{name:"Hand Mirror",hint:"Hold <kbd>F</kbd> to watch over your shoulder",charges:16,timed:!0},candle:{name:"Votive Candle",hint:"<kbd>F</kbd> Set it down",charges:1},holy:{name:"Holy Water",hint:"<kbd>F</kbd> Throw",charges:1},bandage:{name:"Linen Bandages",hint:"<kbd>F</kbd> Bind your wounds",charges:1}},Ad=["mirror","mirror","candle","candle","holy","holy","bandage","bandage","bandage"],Rd={mirror:'<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8"><ellipse cx="16" cy="12" rx="7" ry="9"/><path d="M16 21v8M12 29h8"/><path d="M13 8c1-2 3-3 5-2" stroke-opacity=".6"/></svg>',candle:'<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8"><rect x="11" y="14" width="10" height="13"/><path d="M8 27h16"/><path d="M16 4c3 4 3 6 0 9-3-3-3-5 0-9z" fill="#e8c88a"/></svg>',holy:'<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8"><path d="M13 4h6v5l5 8v8a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3v-8l5-8z"/><path d="M9 19h14" stroke-opacity=".6"/><path d="M16 21v5M13.5 23.5h5"/></svg>',bandage:'<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8"><circle cx="13" cy="16" r="7"/><circle cx="13" cy="16" r="3"/><path d="M20 16h8v5h-8"/></svg>'};function Cd(r,t,...e){let i=Fe[r];if(typeof i=="function")return i(t,...e);let n=new he,s=new ee(new ne(.12,.16,.06),t.bronze);return s.position.y=.08,n.add(s),n.userData={},n}function wa(r,t){return Cd({mirror:"buildHandMirror",candle:"buildVotiveCandle",holy:"buildHolyWater",bandage:"buildBandage"}[r],t)}var _a=class{constructor(t,e,i){this.G=t,this.id=i,this.pos=Z(e.x,0,e.z),this.rot=e.rot,this.model=Cd("buildChest",t.M),this.model.position.copy(this.pos),this.model.rotation.y=e.rot,t.world.root.add(this.model),this.front=Z(Math.sin(e.rot),0,Math.cos(e.rot)),this.progress=0,this.opened=!1,this.lidA=0}open(t){let e=this.G;if(this.opened=!0,e.audio.chestOpen(this.pos.clone().setY(.5)),!t.isPlayer)return;if(t.item){e.toast("Your hands are already full","warn");return}let i=Ad[Math.floor(Math.random()*Ad.length)];e.giveItem(t,i)}update(t){let e=this.model.userData,i=this.opened?1:this.progress*.25;if(this.lidA+=(i-this.lidA)*Math.min(1,t*6),e.lid&&(e.lid.rotation.x=-this.lidA*1.9),e.glow){let n=this.opened?Math.max(0,.6-this.lidA*.6+.05):.25+this.progress*.6;e.glow.material&&(e.glow.material.opacity=n)}}},Ma=class{constructor(t,e,i){this.G=t,this.pos=e.clone(),this.vel=i.clone(),this.t=0,this.done=!1,this.model=wa("holy",t.M),this.model.position.copy(this.pos),t.scene.add(this.model)}update(t){if(this.done)return;let e=this.G,i=this.pos.clone();this.vel.y-=9.8*t,this.pos.addScaledVector(this.vel,t),this.t+=t,this.model.position.copy(this.pos),this.model.rotation.x+=t*9,this.model.rotation.z+=t*5,e.fx.holyGlow(this.pos);let n=(o,l,c)=>{let h=this.pos.x-o.x,u=this.pos.z-o.z;return h*h+u*u<l*l&&this.pos.y<c&&this.pos.y>-.1},s=e.killer;if(s&&n(s.pos,.75,2.7))return this.burst(s);for(let o of e.sentinels)if(n(o.pos,.75,2.6))return this.burst(o);for(let o of e.memorials)if(n(o.pos,.6,1.9))return this.burst(o);let a=e.world.raycast(i,this.pos)<.999;(this.pos.y<=.02||a||this.t>4)&&this.burst(null)}burst(t){let e=this.G;if(this.done=!0,e.scene.remove(this.model),e.audio.splash(this.pos),e.fx.splash(this.pos),!t){let i=(n,s)=>J(n,this.pos)<s&&this.pos.y<3;e.killer&&i(e.killer.pos,1.6)?t=e.killer:t=e.sentinels.find(n=>i(n.pos,1.5))||e.memorials.find(n=>i(n.pos,1.3))||null}t&&e.holyHit(t)}},ba=class{constructor(t,e){this.G=t,this.pos=e.clone(),this.pos.y=0,this.t=75,this.r=7,this.model=wa("candle",t.M),this.model.position.copy(this.pos),t.world.root.add(this.model),this.light=t.borrowLight(16756832,9),this.light.position.set(this.pos.x,.6,this.pos.z),this.halo=new mi(t.M.glow.clone()),this.halo.material.opacity=.45,this.halo.scale.set(2.2,2.2,1),this.halo.position.set(this.pos.x,.45,this.pos.z),t.world.root.add(this.halo)}update(t){this.t-=t;let e=Math.min(1,this.t/5),i=.85+Math.sin(this.G.time*13)*.07+(Math.random()-.5)*.08;this.light.intensity=2.6*e*i,this.halo.material.opacity=.45*e*i;let n=this.model.userData.flame;return n&&n.scale.set(.07*e,(.14+Math.random()*.02)*e,1),this.t>0}dispose(){let t=this.G.world.root;t.remove(this.model),t.remove(this.halo),this.G.returnLight(this.light)}};function xv(r){if(typeof void 0=="function")return(void 0)(r);let t=new he,e=new ue({color:723725,roughness:.45}),i=new he;i.position.y=.1,t.add(i);let n=new ee(new Ce(.07,8,6),e);n.scale.set(.8,.8,1.5),i.add(n);let s=new he;s.position.set(0,.06,.09),i.add(s),s.add(new ee(new Ce(.04,8,6),e));let a=new he;a.position.set(.05,.02,0),i.add(a);let o=new he;o.position.set(-.05,.02,0),i.add(o);for(let[c,h]of[[a,1],[o,-1]]){let u=new ee(new ne(.16,.01,.1),e);u.position.x=h*.08,c.add(u)}let l=new he;return l.position.set(0,0,-.1),i.add(l),t.userData={body:i,head:s,wingL:a,wingR:o,tail:l},t}var Sa=class{constructor(t,e){this.G=t,this.list=[];for(let[i,n]of e.entries()){let s=1+Math.floor(Math.random()*3);for(let a=0;a<s;a++){let o=xv(t.M),l=n.wall?.18:.9,c=Z(n.x+(Math.random()-.5)*l,n.y,n.z+(Math.random()-.5)*l),h={model:o,home:c,pos:c.clone(),yaw:Math.random()*6.28,state:"perch",t:Math.random()*10,vel:Z(),respawn:0,perch:i,peck:0};o.position.copy(c),o.rotation.y=h.yaw,o.scale.setScalar(.9+Math.random()*.25),t.world.root.add(o),this.list.push(h)}}}scare(t,e,i){let n=this.G,s=!1;for(let a of this.list){if(a.perch!==t||a.state!=="perch")continue;a.state="fly",a.t=0;let o=Z(a.pos.x-e.x,0,a.pos.z-e.z);o.lengthSq()<.01&&o.set(Math.random()-.5,0,Math.random()-.5),o.normalize();let l=Z(-o.z,0,o.x).multiplyScalar((Math.random()-.5)*1.6);a.vel.copy(o.add(l).normalize().multiplyScalar(4+Math.random()*2)),a.vel.y=4.5+Math.random()*2,s||(n.audio.cawAt(a.pos.clone()),s=!0)}i&&n.noise(e,32,"crows")}update(t){let e=this.G,i=e.killer;for(let n of this.list){let s=n.model.userData;if(n.t+=t,n.state==="perch"){n.peck-=t,n.peck<0&&(n.peck=1.5+Math.random()*4),s.head&&(s.head.rotation.y=Math.sin(n.t*.9+n.home.x)*.7,s.head.rotation.x=n.peck<.25?.9:0),s.wingL&&(s.wingL.rotation.z=0,s.wingR.rotation.z=0);for(let a of e.survivors){if(!a.standing)continue;let o=J(a.pos,n.pos);if(o<4.5&&a.speed>2.6||o<1.6){this.scare(n.perch,a.pos,!0);break}}n.state==="perch"&&i&&i.moving&&J(i.pos,n.pos)<6&&this.scare(n.perch,i.pos,!1)}else if(n.state==="fly"){n.vel.y=Math.max(1.4,n.vel.y-t*1.5),n.pos.addScaledVector(n.vel,t),n.model.position.copy(n.pos),n.model.rotation.y=Math.atan2(n.vel.x,n.vel.z);let a=Math.sin(n.t*28)*1.1;s.wingL&&(s.wingL.rotation.z=a,s.wingR.rotation.z=-a),s.body&&(s.body.rotation.x=-.35),n.t>6&&(n.state="gone",n.model.visible=!1,n.respawn=50+Math.random()*40)}else n.state==="gone"&&(n.respawn-=t,n.respawn<=0&&!e.survivors.some(a=>a.alive&&J(a.pos,n.home)<14)&&(n.state="perch",n.pos.copy(n.home),n.t=0,n.model.position.copy(n.home),n.model.visible=!0,s.body&&(s.body.rotation.x=0)))}}};var Ta=class{constructor(t,e,{rain:i=!1}={}){if(this.G=t,this.rain=i,this.flash=0,this.next=25+Math.random()*30,this.flashes=[],i){let n=t.quality==="low"?1200:2600,s=new Float32Array(n*6);this.drops=[];for(let o=0;o<n;o++)this.drops.push({x:(Math.random()-.5)*40,y:Math.random()*18,z:(Math.random()-.5)*40,s:13+Math.random()*5});let a=new ye;a.setAttribute("position",new ve(s,3).setUsage(ss)),this.lines=new ko(a,new vr({color:10465996,transparent:!0,opacity:.32,depthWrite:!1})),this.lines.frustumCulled=!1,e.add(this.lines),this.pos=s}}strike(){let t=this.G;this.flashes=[0,.12+Math.random()*.08,Math.random()<.5?.35:-1].filter(e=>e>=0),this.flashT=0,t.audio.thunder(150+Math.random()*700),t.onLightning()}update(t,e){let i=this.G;if(this.next-=t,this.next<=0&&(this.next=30+Math.random()*45,this.strike()),this.flashes.length){this.flashT+=t;let n=0;for(let s of this.flashes){let a=this.flashT-s;a>=0&&(n=Math.max(n,Math.exp(-a*9)*(a<.03?a/.03:1)))}this.flash=n,this.flashT>1.5&&(this.flashes=[],this.flash=0)}if(this.rain&&e){let n=this.pos;for(let s=0;s<this.drops.length;s++){let a=this.drops[s];a.y-=a.s*t,a.x-=1.5*t,a.y<0&&(a.y=14+Math.random()*4,a.x=(Math.random()-.5)*40,a.z=(Math.random()-.5)*40);let o=e.x+a.x,l=e.z+a.z,c=a.y;n[s*6]=o,n[s*6+1]=c,n[s*6+2]=l,n[s*6+3]=o+.03,n[s*6+4]=c+.45,n[s*6+5]=l}this.lines.geometry.attributes.position.needsUpdate=!0}}dispose(t){this.lines&&(t.remove(this.lines),this.lines.geometry.dispose())}};var Ea=class{constructor(t,e,i,n,s=1){this.cap=i,this.n=0,this.pos=new Float32Array(i*3),this.vel=new Float32Array(i*3),this.col=new Float32Array(i*3),this.size=new Float32Array(i),this.alpha=new Float32Array(i),this.life=new Float32Array(i),this.max=new Float32Array(i),this.grav=new Float32Array(i),this.drag=new Float32Array(i);let a=new ye;a.setAttribute("position",new ve(this.pos,3).setUsage(ss)),a.setAttribute("color",new ve(this.col,3).setUsage(ss)),a.setAttribute("size",new ve(this.size,1).setUsage(ss)),a.setAttribute("alpha",new ve(this.alpha,1).setUsage(ss)),this.geo=a;let o=new Re({transparent:!0,depthWrite:!1,blending:n,uniforms:{tex:{value:e},scale:{value:400*s},fogColor:{value:t.fog?t.fog.color:new vt(2501427)},fogDensity:{value:t.fog?t.fog.density:.036}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; varying float vFog; uniform float scale; uniform float fogDensity;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
          gl_PointSize = size * scale / max(0.1, -mv.z); float d = -mv.z; vFog = 1.0 - exp(-fogDensity*fogDensity*d*d); }`,fragmentShader:`uniform sampler2D tex; uniform vec3 fogColor; varying vec3 vC; varying float vA; varying float vFog;
        void main(){ vec4 t = texture2D(tex, gl_PointCoord); gl_FragColor = vec4(mix(vC, fogColor, vFog), t.a * vA); if (gl_FragColor.a < 0.003) discard; }`});this.points=new Fo(a,o),this.points.frustumCulled=!1,t.add(this.points)}emit(t,e,i,n,s,a=0,o=.5,l=1){let c=this.n<this.cap?this.n++:Math.floor(Math.random()*this.cap);this.pos.set([t.x,t.y,t.z],c*3),this.vel.set([e.x,e.y,e.z],c*3),this.col.set([i.r,i.g,i.b],c*3),this.size[c]=n,this.life[c]=s,this.max[c]=s,this.grav[c]=a,this.drag[c]=o,this.alpha[c]=l,this.baseA=this.baseA||new Float32Array(this.cap),this.baseA[c]=l}update(t){for(let e=0;e<this.n;e++){if(this.life[e]-=t,this.life[e]<=0){let a=--this.n;if(e!==a){for(let o of[this.pos,this.vel,this.col])o[e*3]=o[a*3],o[e*3+1]=o[a*3+1],o[e*3+2]=o[a*3+2];for(let o of[this.size,this.life,this.max,this.grav,this.drag,this.alpha,this.baseA])o[e]=o[a]}e--;continue}let i=e*3,n=Math.max(0,1-this.drag[e]*t);this.vel[i]*=n,this.vel[i+1]=this.vel[i+1]*n-this.grav[e]*t,this.vel[i+2]*=n,this.pos[i]+=this.vel[i]*t,this.pos[i+1]+=this.vel[i+1]*t,this.pos[i+2]+=this.vel[i+2]*t,this.pos[i+1]<.02&&this.grav[e]>0&&(this.pos[i+1]=.02,this.vel[i+1]*=-.2,this.vel[i]*=.5,this.vel[i+2]*=.5);let s=this.life[e]/this.max[e];this.alpha[e]=this.baseA[e]*Math.min(1,s*3)*Math.min(1,(1-s)*8+.2)}this.geo.setDrawRange(0,this.n);for(let e of["position","color","size","alpha"])this.geo.attributes[e].needsUpdate=!0}clear(){this.n=0,this.geo.setDrawRange(0,0)}},gn=(r,t,e)=>({r,g:t,b:e}),Cr=null;function vv(){if(Cr)return Cr;let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d"),e=7,i=()=>(e=e*16807%2147483647)/2147483647,n=(a,o,l,c,h)=>{if(c<4||h<.4)return;let u=a+Math.cos(l)*c,d=o+Math.sin(l)*c;t.strokeStyle="rgba(8,6,5,0.95)",t.lineWidth=h,t.lineCap="round",t.beginPath(),t.moveTo(a,o),t.lineTo(u,d),t.stroke(),n(u,d,l+(i()-.5)*.9,c*.75,h*.7),i()<.55&&n(u,d,l+(i()<.5?-1:1)*(.5+i()*.7),c*.55,h*.6)};for(let a=0;a<5;a++)n(64,64,a/5*Math.PI*2+i(),14+i()*10,3.2);let s=t.createRadialGradient(64,64,0,64,64,22);return s.addColorStop(0,"rgba(20,16,12,0.55)"),s.addColorStop(1,"rgba(20,16,12,0)"),t.fillStyle=s,t.fillRect(0,0,128,128),Cr=new Bs(r),Cr.colorSpace=Ee,Cr}var Hh=class{constructor(t,e=72){this.cap=e,this.i=0,this.time=0;let i=new Oi(1,1);i.rotateX(-Math.PI/2),this.birth=new Float32Array(e).fill(-999),i.setAttribute("aBirth",new ts(this.birth,1));let n=new Re({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{tex:{value:vv()},uTime:{value:0},uLife:{value:14},fogColor:{value:t.fog?t.fog.color:new vt(4607580)},fogDensity:{value:t.fog?t.fog.density:.03}},vertexShader:`attribute float aBirth; varying vec2 vUv; varying float vA; varying float vFog; uniform float uTime, uLife, fogDensity;
        void main(){ vUv = uv; float age = uTime - aBirth; vA = clamp(1.0 - age / uLife, 0.0, 1.0) * clamp(age * 4.0, 0.0, 1.0);
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
          float d = -mv.z; vFog = 1.0 - exp(-fogDensity * fogDensity * d * d); }`,fragmentShader:`uniform sampler2D tex; uniform vec3 fogColor; varying vec2 vUv; varying float vA; varying float vFog;
        void main(){ vec4 t = texture2D(tex, vUv); float a = t.a * vA * (1.0 - vFog); if (a < 0.01) discard; gl_FragColor = vec4(t.rgb, a); }`});this.mat=n,this.mesh=new In(i,n,e),this.mesh.frustumCulled=!1;let s=new jt().makeScale(1e-4,1e-4,1e-4);for(let a=0;a<e;a++)this.mesh.setMatrixAt(a,s);t.add(this.mesh),this._m=new jt,this._q=new $e,this._s=new R,this._p=new R,this._up=new R(0,1,0)}add(t,e,i,n){let s=this.i++%this.cap;this._q.setFromAxisAngle(this._up,i),this._s.set(n,1,n),this._p.set(t,.03,e),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(s,this._m),this.mesh.instanceMatrix.needsUpdate=!0,this.birth[s]=this.time,this.mesh.geometry.attributes.aBirth.needsUpdate=!0}update(t){this.time+=t,this.mat.uniforms.uTime.value=this.time}clear(){this.birth.fill(-999),this.mesh.geometry.attributes.aBirth.needsUpdate=!0}},Gh=class{constructor(t){this.list=[];for(let e=0;e<3;e++){let i=new ee(new Os(.85,1,64),new Ge({color:16756848,transparent:!0,opacity:0,blending:Li,depthWrite:!1,side:me,fog:!1}));i.rotation.x=-Math.PI/2,i.visible=!1,t.add(i),this.list.push({m:i,t:99,max:24,dur:.8})}}fire(t,e=24,i=16756848){let n=this.list.find(s=>s.t>=s.dur)||this.list[0];n.t=0,n.max=e,n.m.position.set(t.x,.25,t.z),n.m.visible=!0,n.m.material.color.setHex(i)}update(t){for(let e of this.list){if(e.t>=e.dur){e.m.visible=!1;continue}e.t+=t;let i=Math.min(1,e.t/e.dur),n=.5+e.max*(1-Math.pow(1-i,3));e.m.scale.set(n,n,n),e.m.material.opacity=(1-i)*.85}}},te=r=>(Math.random()-.5)*r,Aa=class{constructor(t,e){this.soft=new Ea(t,e.dust,1600,Tn),this.glow=new Ea(t,e.glow,300,Li,1),this.cracks=new Hh(t),this.waves=new Gh(t),this.wispT=0,this.ashT=0}dust(t,e=10){for(let i=0;i<e;i++)this.soft.emit({x:t.x+te(.5),y:t.y+te(.4),z:t.z+te(.5)},{x:te(.6),y:-.1-Math.random()*.4,z:te(.6)},gn(.55,.52,.47),.12+Math.random()*.2,1.5+Math.random()*2,.05,.8,.7)}splinters(t){for(let e=0;e<40;e++)this.soft.emit({x:t.x+te(1.2),y:t.y+te(.4),z:t.z+te(1.2)},{x:te(5),y:1+Math.random()*3,z:te(5)},gn(.25,.17,.1),.05+Math.random()*.06,1.2+Math.random(),9,.4,1);this.dust(t,20)}blood(t){for(let e=0;e<24;e++)this.soft.emit({x:t.x+te(.2),y:t.y+te(.3),z:t.z+te(.2)},{x:te(3),y:Math.random()*2,z:te(3)},gn(.28,.02,.02),.04+Math.random()*.05,.8+Math.random()*.6,9,.6,1)}sink(t){for(let e=0;e<60;e++)this.soft.emit({x:t.x+te(2),y:.2+Math.random()*2.5,z:t.z+te(2)},{x:te(.4),y:.6+Math.random(),z:te(.4)},gn(.03,.03,.03),.3+Math.random()*.4,2+Math.random()*2,-.1,.3,.8)}crack(t,e,i,n=.9){this.cracks.add(t,e,i,n)}shockwave(t,e,i){this.waves.fire(t,e,i),this.dust(t.clone?t.clone().setY(.4):t,40)}debris(t){for(let e=0;e<50;e++)this.soft.emit({x:t.x+te(.8),y:.4+Math.random()*2,z:t.z+te(.8)},{x:te(6),y:1+Math.random()*4,z:te(6)},gn(.38,.37,.35),.06+Math.random()*.1,1.4+Math.random(),9,.3,1);this.dust({x:t.x,y:1.2,z:t.z},40)}splash(t){for(let e=0;e<40;e++)this.glow.emit({x:t.x+te(.3),y:t.y+te(.2),z:t.z+te(.3)},{x:te(4),y:1+Math.random()*3,z:te(4)},gn(.55,.75,1),.06+Math.random()*.08,.6+Math.random()*.6,7,.4,.9)}holyGlow(t){this.glow.emit({x:t.x,y:t.y,z:t.z},{x:0,y:0,z:0},gn(.6,.8,1),.12,.25,0,0,.8)}ambient(t,e,i){for(this.ashT-=t;this.ashT<0;)this.ashT+=.04,this.soft.emit({x:e.x+te(30),y:.3+Math.random()*6,z:e.z+te(30)},{x:.3+te(.2),y:te(.15),z:.15+te(.2)},gn(.6,.6,.62),.03+Math.random()*.03,6+Math.random()*4,0,0,.5);if(this.wispT-=t,this.wispT<0&&i){this.wispT=.35;let n=i[Math.floor(Math.random()*i.length)];n&&this.glow.emit({x:n.x+te(n.r*2),y:.3+Math.random()*1.2,z:n.z+te(n.r*2)},{x:te(.3),y:.05+Math.random()*.1,z:te(.3)},gn(.35,.5,.75),.15+Math.random()*.1,4+Math.random()*3,0,.1,.7)}}update(t){this.soft.update(t),this.glow.update(t),this.cracks.update(t),this.waves.update(t)}clear(){this.soft.clear(),this.glow.clear(),this.cracks.clear()}};var ii=r=>document.getElementById(r),xn=r=>`<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${r}</svg>`,Wh=[{id:"unblinking",name:"Unblinking",desc:"Your Resolve meter is 40% larger.",icon:xn('<path d="M4 16c4-6 8-8 12-8s8 2 12 8c-4 6-8 8-12 8s-8-2-12-8z"/><circle cx="16" cy="16" r="4" fill="#e8c88a"/>')},{id:"afterimage",name:"Afterimage",desc:"When you blink, the Reliquary's aura burns into your eyes for 4s. 30s cooldown.",icon:xn('<path d="M6 17c3-4 6-6 10-6s7 2 10 6"/><path d="M16 4v3M6 7l2 2M26 7l-2 2M3 13h2M27 13h2"/><circle cx="16" cy="18" r="3" fill="#e8c88a"/>')},{id:"ropeburn",name:"Ropeburn",desc:"You ring bells 15% faster when you ring alone.",icon:xn('<path d="M16 3v6"/><path d="M10 22c0-7 2-12 6-12s6 5 6 12z"/><path d="M8 24h16"/><circle cx="16" cy="27" r="2"/>')},{id:"hare",name:"Hare's Flight",desc:"After you vault with the Reliquary within 12m, you run 50% faster for 3s. Then you're Exhausted for 40s.",icon:xn('<path d="M5 22l7-6-3-6 8 4 4-6 1 8 5 2-6 3-2 6-3-5-6 3z"/>')},{id:"kinship",name:"Kinship of the Drowned",desc:"While anyone is bound to a Weeping Post, you see the Reliquary's aura whenever you're within 24m of that post.",icon:xn('<rect x="4" y="12" width="12" height="8" rx="4"/><rect x="16" y="12" width="12" height="8" rx="4"/>')},{id:"hymn",name:"Hymn in the Throat",desc:"You mend yourself and heal others 50% faster. Your wounds make no sound.",icon:xn('<path d="M12 24V8l12-3v15"/><circle cx="9" cy="24" r="3"/><circle cx="21" cy="21" r="3"/>')},{id:"stonehearing",name:"Stone-Hearing",desc:"The grinding of moving stone is much louder to you.",icon:xn('<path d="M20 26c-3 0-4-3-6-4-3-2-5-5-5-9a7 7 0 0 1 14 0c0 3-2 4-3 6"/><path d="M14 13a2 2 0 0 1 4 0c0 2-2 2-2 4"/>')},{id:"tallow",name:"Tallow Breath",desc:"Your Resolve recovers twice as fast when you look away.",icon:xn('<rect x="12" y="15" width="8" height="13"/><path d="M16 4c3 4 3 6 0 9-3-3-3-5 0-9z" fill="#e8c88a"/>')},{id:"secondwake",name:"Second Wake",desc:"Once per match, after you're unbound: you can't be forced to Blink for 15s, and you survive one hit during that time.",icon:xn('<path d="M4 22h24"/><path d="M8 22a8 8 0 0 1 16 0"/><path d="M16 6v4M8 9l2 3M24 9l-2 3"/>')}];function Pr(r,t=46,e=""){let i="#"+r.jacket.toString(16).padStart(6,"0"),n="#"+r.skin.toString(16).padStart(6,"0"),s="#"+r.hair.toString(16).padStart(6,"0"),a=r.extra==="cap"?'<rect x="15" y="9" width="18" height="5" rx="2" fill="#3a3428"/><rect x="13" y="13" width="15" height="2" fill="#3a3428"/>':r.extra==="cassock"?'<rect x="20" y="31" width="8" height="2.5" fill="#eee"/>':r.extra==="oilskin"?'<path d="M10 34c2-6 7-8 14-8s12 2 14 8" fill="none" stroke="#8a6a1a" stroke-width="2"/>':'<rect x="15" y="13" width="18" height="3" fill="#8a1e1a"/>';return`<svg viewBox="0 0 48 48" width="${t}" height="${t}"><defs><clipPath id="cp${r.id}${t}"><circle cx="24" cy="24" r="23"/></clipPath></defs>
    <circle cx="24" cy="24" r="23" fill="#121214"/>
    <g clip-path="url(#cp${r.id}${t})">
      <path d="M4 48c1-10 9-15 20-15s19 5 20 15z" fill="${i}"/>
      <rect x="20" y="27" width="8" height="7" fill="${n}"/>
      <ellipse cx="24" cy="20" rx="8.5" ry="10" fill="${n}"/>
      <path d="M15.5 19c0-7 4-10 8.5-10s8.5 3 8.5 10c-2-4-5-5-8.5-5s-6.5 1-8.5 5z" fill="${s}"/>
      ${a}
      ${e==="dead"?'<path d="M10 10l28 28M38 10L10 38" stroke="#b3261e" stroke-width="3"/>':""}
    </g></svg>`}function Pd(r,t,e,i,n){let s=h=>[r+e*Math.sin(h*Math.PI/180),t-e*Math.cos(h*Math.PI/180)],[a,o]=s(i),[l,c]=s(n);return`M ${a} ${o} A ${e} ${e} 0 ${n-i>180?1:0} 1 ${l} ${c}`}var Vh=class{constructor(t){this.audio=t,this.el=ii("skill"),this.active=!1,this.cb=null,this.good=ii("skGood"),this.great=ii("skGreat"),this.needle=ii("skNeedle")}start(t,{size:e=48,great:i=12,dur:n=1.1}={}){this.active=!0,this.cb=t,this.t=-.55,this.dur=n,this.zone=110+Math.random()*190,this.size=e,this.greatSize=i,this.good.setAttribute("d",Pd(75,75,56,this.zone+i,this.zone+e)),this.great.setAttribute("d",Pd(75,75,56,this.zone,this.zone+i)),this.audio.skillWarn()}update(t){if(this.active){if(this.t+=t,this.t<0){this.el.style.display="none";return}this.el.style.display="block",this.angle=this.t/this.dur*360,this.needle.setAttribute("transform",`rotate(${this.angle} 75 75)`),this.angle>this.zone+this.size+6&&this.finish("miss")}}press(){if(!this.active||this.t<0)return!1;let t=this.angle;return t>=this.zone&&t<=this.zone+this.greatSize?this.finish("great"):t>=this.zone&&t<=this.zone+this.size?this.finish("good"):this.finish("miss"),!0}finish(t){this.active=!1,this.el.style.display="none",t==="great"?this.audio.skillGreat():t==="good"&&this.audio.skillGood();let e=this.cb;this.cb=null,e?.(t)}cancel(){this.active=!1,this.cb=null,this.el.style.display="none"}},Ra=class{constructor(t){this.audio=t,this.skill=new Vh(t),this.toastsEl=ii("toasts"),this.statusEl=ii("status"),this.lastHud=0}show(t,e=!0){ii(t).classList.toggle("on",e)}only(...t){for(let e of document.querySelectorAll(".screen"))e.classList.toggle("on",t.includes(e.id))}toast(t,e=""){let i=document.createElement("div");for(i.className="toast "+e,i.textContent=t,this.toastsEl.appendChild(i);this.toastsEl.children.length>4;)this.toastsEl.firstChild.remove();setTimeout(()=>{i.style.transition="opacity .6s",i.style.opacity="0",setTimeout(()=>i.remove(),650)},e==="big"?4500:3200)}clearToasts(){this.toastsEl.innerHTML=""}buildStatus(t){this.statusEl.innerHTML="",this.rows=t.map(e=>{let i=document.createElement("div");return i.className="srow",i.innerHTML=`<div class="pt">${Pr(e.def)}<div class="ring"></div></div><div><div class="nm">${e.def.short}${e.isPlayer?" (you)":""}</div><div class="st"></div><div class="pips"><i></i><i></i></div><div class="hb" style="display:none"><i></i></div></div>`,this.statusEl.appendChild(i),{r:i,st:i.querySelector(".st"),pips:i.querySelectorAll(".pips i"),hb:i.querySelector(".hb"),hbi:i.querySelector(".hb i"),pt:i.querySelector(".pt"),last:""}})}buildPerkHud(t){let e=ii("perkHud");e.innerHTML="",this.perkEls={};for(let i=0;i<4;i++){let n=Wh.find(a=>a.id===t[i]),s=document.createElement("div");s.className="d",s.style.visibility=n?"visible":"hidden",n&&(s.innerHTML=n.icon+'<div class="cd" style="height:0"></div>',s.title=n.name,this.perkEls[n.id]=s),e.appendChild(s)}}updateHud(t){let e=performance.now(),i=t.player,n=i.resolve/i.maxResolve;ii("resolveArc").setAttribute("stroke-dashoffset",String(176*(1-n))),ii("resolveArc").setAttribute("stroke",n<.25?"#e0483c":n<.5?"#e8a24a":"#d9cfbd"),ii("pupil").setAttribute("r",String(i.watching?6.5:4.5));let s=ii("resolve");if(s.classList.toggle("full",n>.99&&!i.watching),s.classList.toggle("lament",t.killer.lament&&i.watching),e-this.lastHud<100)return;if(this.lastHud=e,ii("bellCount").textContent=String(Math.max(0,t.bellsRequired-t.bellsRung)),ii("bellIcon").classList.toggle("done",t.gatesPowered),t.survivors.forEach((o,l)=>{let c=this.rows[l],h=o.health;c.last!==h&&(c.r.className="srow "+h,c.last=h,h==="dead"&&(c.pt.innerHTML=Pr(o.def,46,"dead")+'<div class="ring"></div>')),c.st.textContent={healthy:"",injured:"Wounded",downed:"Dying",carried:"Carried",hooked:o.hookPhase===2?"Struggling":"Bound",dead:"Taken",escaped:"Escaped"}[h]||"",c.pips.forEach((u,d)=>u.classList.toggle("on",o.hookCount>d)),c.hb.style.display=h==="hooked"||h==="downed"?"block":"none",h==="hooked"&&(c.hbi.style.width=100*o.hookTimer/(o.hookPhase===1?55:50)+"%"),h==="downed"&&(c.hbi.style.width=100*o.bleed/240+"%")}),this.perkEls)for(let[o,l]of Object.entries(this.perkEls)){let c=0,h=!1;o==="afterimage"&&(c=Math.max(0,t.afterCD)/30,h=t.auraT>0&&t.auraSrc==="afterimage"),o==="hare"&&(c=i.exhausted/40,h=i.hareBoost&&i.boost>0),o==="kinship"&&(h=t.auraT>0&&t.auraSrc==="kinship"),o==="secondwake"&&(h=i.noBlink>0,c=i.secondWakeUsed&&!h?1:0),l.querySelector(".cd").style.height=c*100+"%",l.classList.toggle("active",h)}let a=ii("collapse");t.collapseT!==null?(a.style.display="block",a.querySelector("i").style.width=100*t.collapseT/120+"%"):a.style.display="none"}prompt(t,e=null,i=!1){ii("promptText").innerHTML=t||"";let n=ii("promptBar");e===null?n.style.display="none":(n.style.display="block",n.classList.toggle("heal",i),n.firstElementChild.style.width=Math.min(1,e)*100+"%")}};var Mt=r=>document.getElementById(r),ae={sens:1,vol:.8,quality:"high",invert:!1,showFps:!1,difficulty:"vigil"};try{Object.assign(ae,JSON.parse(localStorage.getItem("hollowmoor.settings")||"{}"))}catch{}var Ks=()=>{try{localStorage.setItem("hollowmoor.settings",JSON.stringify(ae))}catch{}},Pa={mercy:{id:"mercy",name:"Mercy",desc:"A slower stone. Bells ring faster. It ascends late.",killerSpeed:.92,bellTime:64,tier2:3,tier3:5,aiNotice:.4},vigil:{id:"vigil",name:"Vigil",desc:"The vigil as it was meant to be kept.",killerSpeed:1,bellTime:72,tier2:2,tier3:4,aiNotice:.3},penance:{id:"penance",name:"Penance",desc:"A faster stone that ascends early. Heavier bells.",killerSpeed:1.07,bellTime:80,tier2:1,tier3:3,aiNotice:.22}},Ld=[{name:"The Sunken Nave",rain:!1},{name:"Peat-Cutters' Rows",rain:!0},{name:"St. Ebba's Drowned Yard",rain:null}],Id=[[0,"Novice"],[15e3,"Mourner"],[4e4,"Bellringer"],[9e4,"Keeper of the Vigil"],[18e4,"Saint of Hollowmoor"]],La=r=>{let t=Id[0][1];for(let[e,i]of Id)r>=e&&(t=i);return t},Ia={get(){try{return Number(localStorage.getItem("hollowmoor.embers")||0)}catch{return 0}},add(r){try{localStorage.setItem("hollowmoor.embers",String(this.get()+r))}catch{}}},as=Mt("view"),Be=new gr({canvas:as,antialias:!1,powerPreference:"high-performance"}),Nd=()=>ae.quality==="high"?Math.min(devicePixelRatio,1.5):Math.min(devicePixelRatio,1);Be.setPixelRatio(Nd());Be.setSize(innerWidth,innerHeight);Be.shadowMap.enabled=!0;Be.shadowMap.type=vh;Be.toneMapping=br;Be.toneMappingExposure=2.3;Be.outputColorSpace=Ee;var ze=new Do,kd=4607580;ze.fog=new Io(kd,.03);ze.background=new vt(kd);var Ut=new Qe(64,innerWidth/innerHeight,.05,900),Ui=new Qe(50,1.6,.1,400),Qh=new Wo(8689336,2761240,2);ze.add(Qh);var fi=new qo(11846884,1.7);fi.castShadow=!0;fi.shadow.mapSize.set(ae.quality==="high"?2048:1024,ae.quality==="high"?2048:1024);Object.assign(fi.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:1,far:160});fi.shadow.bias=-5e-4;fi.shadow.normalBias=.04;ze.add(fi,fi.target);var yv={uniforms:{tDiffuse:{value:null},uTime:{value:0},uBlink:{value:0},uLow:{value:0},uLament:{value:0},uHurt:{value:0},uFade:{value:1},uHit:{value:0},uAspect:{value:1},uFlash:{value:0},uWarn:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uBlink, uLow, uLament, uHurt, uFade, uHit, uAspect, uFlash, uWarn; varying vec2 vUv;
    float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 uv = vUv; vec2 d = uv - 0.5;
      float ca = 0.0012 + uLow * 0.004 + uLament * 0.004 + uHit * 0.01;
      vec3 c;
      c.r = texture2D(tDiffuse, uv + d * ca).r;
      c.g = texture2D(tDiffuse, uv).g;
      c.b = texture2D(tDiffuse, uv - d * ca).b;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(c, vec3(l), 0.22 + uHurt * 0.2 + uLow * 0.2);
      c *= vec3(0.93, 0.99, 1.08);
      c += vec3(0.7, 0.78, 1.0) * uFlash * (0.2 + l * 2.0);
      float r = length(d * vec2(uAspect, 1.0));
      c = mix(c, c * vec3(1.7, 0.45, 0.3), smoothstep(0.3, 0.95, r) * uWarn);
      float vig = 1.0 - smoothstep(0.25, 0.95, r);
      c *= mix(0.25, 1.0, vig);
      c *= 1.0 - uLow * 0.65 * smoothstep(0.2, 0.75, r);
      c = mix(c, c * vec3(1.6, 0.3, 0.25), smoothstep(0.35, 0.95, r) * (uHurt * 0.25 + uHit * 0.8));
      float g = rnd(uv * 731.0 + fract(uTime * 7.3)) - 0.5;
      c += g * (0.018 + uLament * 0.05 + uLow * 0.02) * (0.4 + l);
      float e = abs(uv.y - 0.5) * 2.0;
      float lid = smoothstep(1.0 - uBlink * 1.1, 1.0 - uBlink * 1.1 + 0.18, e + (1.0 - abs(uv.x - 0.5) * 2.0) * -0.08);
      c *= 1.0 - lid;
      c *= 1.0 - uFade;
      gl_FragColor = vec4(max(c, 0.0), 1.0);
    }`},Bn,Da,Ue;function Fd(){let r=Nd();Be.setPixelRatio(r);let t=new ti(innerWidth*r,innerHeight*r,{type:wi,samples:ae.quality==="high"?4:0});Bn=new Qo(Be,t),Bn.addPass(new ta(ze,Ut)),Da=new Ws(new tt(innerWidth,innerHeight),.55,.6,.82),Da.enabled=ae.quality==="high",Bn.addPass(Da),Ue=new Vs(yv),Bn.addPass(Ue),Bn.addPass(new ea),Bn.setSize(innerWidth,innerHeight),Ue.uniforms.uAspect.value=innerWidth/innerHeight}Fd();addEventListener("resize",()=>{Ut.aspect=innerWidth/innerHeight,Ut.updateProjectionMatrix(),Be.setSize(innerWidth,innerHeight),Bn.setSize(innerWidth,innerHeight),Ue.uniforms.uAspect.value=innerWidth/innerHeight});var Se=new Set,vi=new Set,qh=0,Yh=0,Ir=!1,Ki=!1;addEventListener("keydown",r=>{if(It?.state==="playing"&&["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ControlLeft","KeyS","KeyW","KeyF"].includes(r.code)&&r.preventDefault(),Se.has(r.code)||vi.add(r.code),Se.add(r.code),It?.state==="intro"&&["Space","Escape","Enter"].includes(r.code)){r.preventDefault(),It.endIntro();return}r.code==="Escape"&&It&&(It.state==="playing"&&(Ki||!document.pointerLockElement)?It.pause():It.state==="paused"&&Ki&&It.resume())});addEventListener("keyup",r=>Se.delete(r.code));addEventListener("blur",()=>{Se.clear(),Ir=!1,Na=!1});addEventListener("mousemove",r=>{!It||It.state!=="playing"||(document.pointerLockElement===as||Ki)&&(qh+=r.movementX||0,Yh+=r.movementY||0)});var Na=!1;as.addEventListener("mousedown",r=>{r.button===0&&(Ir=!0),r.button===2&&(Na=!0,vi.add("Mouse2")),It?.state==="intro"&&It.endIntro(),It?.state==="playing"&&!document.pointerLockElement&&!Ki&&Dr()});addEventListener("mouseup",r=>{r.button===0&&(Ir=!1),r.button===2&&(Na=!1)});as.addEventListener("contextmenu",r=>r.preventDefault());function Dr(){try{let r=as.requestPointerLock?.();r&&r.catch&&r.catch(()=>{Ki=!0}),as.requestPointerLock||(Ki=!0)}catch{Ki=!0}}document.addEventListener("pointerlockchange",()=>{It&&(document.pointerLockElement===as?(It.state==="paused"&&It.resume(!0),fe.show("clickPlay",!1)):It.state==="playing"&&!Ki&&It.pause())});document.addEventListener("pointerlockerror",()=>{Ki=!0});var Yt=new aa,fe=new Ra(Yt),It=null,Ji=new R,Zh=class{constructor(t,e){this.T=t,this.M=e,this.audio=Yt,this.ui=fe,this.scene=ze,this.camera=Ut,this.fx=new Aa(ze,t),this.state="title",this.time=0,this.camYaw=0,this.camPitch=-.15,this.camPos=Z(),this.survivors=[],this.bells=[],this.pallets=[],this.posts=[],this.gates=[],this.sentinels=[],this.memorials=[],this.chests=[],this.projectiles=[],this.candle=null,this.diff=Pa.vigil,this.quality=ae.quality,this.noises=[],this.scratches=[],this.worldLights=[],this.titleT=0,this.flash=0}buildWorld(t,{rain:e=!1}={}){this.world&&this.disposeMatch(),this.quality=ae.quality,this.world=new oa(ze,this.M,this.T,t,ae.quality),this.bells=this.world.bellSpots.map((n,s)=>new la(this,n,s)),this.pallets=this.world.palletSpots.map((n,s)=>new ha(this,n,s)),this.posts=this.world.postSpots.map((n,s)=>new ca(this,n,s)),this.gates=this.world.gateSpots.map((n,s)=>new ua(this,n,s)),this.spareLights=[0,1,2].map(()=>{let n=new Gi(16756832,0,9,1.6);return n.position.set(0,-30,0),n.userData.free=!0,this.world.root.add(n),n}),this.chests=this.world.chestSpots.map((n,s)=>new _a(this,n,s));for(let n of this.world.decorLights){let s=new mi(this.M.glow);s.scale.set(1.5,1.5,1),s.position.copy(n),this.world.root.add(s)}this.crows=new Sa(this,this.world.perches),this.weather=new Ta(this,ze,{rain:e}),this.M.ground.roughness=e?.55:1,Yt.rain(e?1:0);for(let n of this.world.altarCandles){let s=new mi(this.M.flame);s.scale.set(.06,.12,1),s.position.copy(n),this.world.root.add(s);let a=new ee(new Qt(.03,.035,.2,8),this.M.wax);a.position.copy(n).add(Z(0,-.12,0)),this.world.root.add(a)}let i=new Gi(16754784,2.2,10,1.6);i.position.set(9,1.8,0),this.world.root.add(i),this.flickers=[i],(this.world.lanterns||[]).slice(0,ae.quality==="high"?3:1).forEach(n=>{let s=new Gi(16756848,1.8,8,1.6);s.position.copy(n),this.world.root.add(s),this.flickers.push(s);let a=new ee(new ne(.14,.2,.14),this.M.lanternLit);a.position.copy(n),this.world.root.add(a);let o=new mi(this.M.glow);o.scale.set(1.6,1.6,1),o.position.copy(n),this.world.root.add(o)}),fi.position.copy(this.world.moonDir).multiplyScalar(60)}disposeMatch(){for(let t of this.survivors)ze.remove(t.model),ze.remove(t.aura);this.killer&&(ze.remove(this.killer.model),ze.remove(this.killer.aura),ze.remove(this.killer.cloth),ze.remove(this.killer.ghost),Yt.silenceGrind("killer"));for(let t of this.projectiles)ze.remove(t.model);this.weather&&(this.weather.dispose(ze),this.weather=null),Yt.rain(0),this.world&&(this.world.dispose(),this.world.sky&&ze.remove(this.world.sky)),this.survivors=[],this.killer=null,this.sentinels=[],this.hatch=null,this.memorials=[],this.chests=[],this.projectiles=[],this.candle=null,this.crows=null,Mt("mirrorFrame").hidden=!0,this.fx.clear()}setupTitle(){this.state="title",this.world||this.buildWorld(7),this.titleStatue||(this.titleStatue=Er(this.M,{alive:!0}),os(this.titleStatue,"weep"));let t=this.world,e=Z(-3.5,2.6,-8.2);this.titleCam={a:-1.75,r:22};t:for(let s of[22,19,25,16,28])for(let a=0;a<14;a++){let o=-1.75+(a%2?1:-1)*Math.ceil(a/2)*.12,l=Z(-4+Math.cos(o)*s,2.4,Math.sin(o)*s),c=t.raycast(l,e)>.97;for(let d of[-.22,.22])c=c&&t.raycast(Z(-4+Math.cos(o+d)*s,2.4,Math.sin(o+d)*s),e)>.9;if(!c||t.boxes.some(d=>l.x>d.minX-4&&l.x<d.maxX+4&&l.z>d.minZ-4&&l.z<d.maxZ+4))continue;let h=l.clone().lerp(e,.42);h.y=0;let u=t.cellIndex(h.x,h.z);if(!(u<0||t.grid[u]!==0)){this.titleCam={a:o,r:s,statue:h};break t}}let i=this.titleCam.statue||Z(-6.2,0,-12.5),n=Z(-4+Math.cos(this.titleCam.a)*this.titleCam.r,0,Math.sin(this.titleCam.a)*this.titleCam.r);this.titleStatue.position.copy(i),this.titleStatue.rotation.y=Math.atan2(n.x-i.x,n.z-i.z)+.4,this.world.root.add(this.titleStatue),this.titleStart=performance.now(),Dd(),fe.only("title")}async startMatch(t,e){fe.only(),Ue.uniforms.uFade.value=1,Mt("loadText").textContent="The moor shifts beneath you\u2026",fe.show("loading"),Mt("loadBar").style.width="100%",await new Promise(o=>setTimeout(o,30)),this.titleStatue&&this.titleStatue.parent?.remove(this.titleStatue);let i=Ld[Math.floor(Math.random()*Ld.length)];this.realm=i,this.diff=Pa[ae.difficulty]||Pa.vigil,this.buildWorld(Math.floor(Math.random()*1e9),{rain:i.rain??Math.random()<.5});let n=this.world,s=[t,...na.map((o,l)=>l).filter(o=>o!==t)];this.survivors=s.map((o,l)=>new fa(this,na[o],l===0,l===0?e:[])),this.player=this.survivors[0],this.survivors.forEach((o,l)=>{let c=l/4*Math.PI*2,h=n.randomFreePoint(Math.random,0,2.5,n.survivorSpawn.x+Math.cos(c)*2,n.survivorSpawn.z+Math.sin(c)*2);o.place(h),o.yaw=He(o.pos,Z(0,0,0))}),this.killer=new va(this),this.killer.place(n.killerSpawn),this.killer.yaw=He(this.killer.pos,Z(0,0,0));let a=this.bells.slice().sort(()=>Math.random()-.5).slice(0,2);for(let o of a){let l=n.randomFreePoint(Math.random,3,6,o.pos.x,o.pos.z);this.sentinels.push(new $s(this,Z(l.x,0,l.z),Math.random()*6.28,["pray","tilt","beckon"][Math.floor(Math.random()*3)]))}this.bellsRung=0,this.bellsRequired=5,this.gatesPowered=!1,this.collapseT=null,this.hookEvents=0,this.noises=[],this.scratches=[],this.time=0,this.endT=null,this.auraT=0,this.afterCD=0,this.auraSrc="",this.score={objectives:0,survival:0,altruism:0,boldness:0},this.scoreLog=[],this.stareScore=0,this.memorials=[],this.projectiles=[],this.candle=null,this.deaths=0,this.tollWarnT=-99,this.lookWarn=0,this.canonYaw=0,this.player.item=null,this.player.itemCharges=0,this.skillT=3,this.hitShake=0,this.lastWiggleKey=null,this.escapeCD=0,this.chase=0,this.camYaw=this.player.yaw,this.camPitch=-.12,this.camPos.copy(this.player.pos).add(Z(0,2,0)),fe.buildStatus(this.survivors),fe.buildPerkHud(e),fe.clearToasts(),Mt("fps").style.display=ae.showFps?"block":"none",fe.show("loading",!1),this.updateItemHud(),this.updateTierHud(),this.startIntro(i)}startIntro(t){let e=this.killer,i=this.world;this.state="intro",this.introT=0,this.introDur=6.5,fe.only("intro"),Mt("introRealm").textContent=t.name,Mt("introDiff").textContent=`${this.diff.name} \xB7 ${this.weather.rain?"Drizzle":"Still mist"}`;let n=e.forward(),s=e.headPos(),a=null;for(let o of[3.4,4.2,5.2,2.6])for(let l of[0,.5,-.5,1,-1]){let c=Math.cos(l),h=Math.sin(l),u=Z(n.x*c-n.z*h,0,n.x*h+n.z*c),d=Z(e.pos.x+u.x*o,1.9,e.pos.z+u.z*o);!a&&i.raycast(d,s)>.98&&(a=d)}this.introTo=a||Z(e.pos.x+n.x*3.4,1.9,e.pos.z+n.z*3.4),this.introFrom=Z(e.pos.x*.3,34,e.pos.z*.3-10),this.introLook0=Z(0,0,0),this.introLook1=s.clone().add(Z(0,-.15,0)),e.sync(0),Yt.toll(null,98,.6,9),setTimeout(()=>{this.state==="intro"&&Yt.choir(this.killer.headPos(),3.5,.35,0,98)},3e3)}updateIntro(t){this.introT+=t;let e=ie(this.introT/(this.introDur-1),0,1),i=e*e*(3-2*e);Ut.position.lerpVectors(this.introFrom,this.introTo,i),Ut.position.y+=Math.sin(i*Math.PI)*6;let n=this.introLook0.clone().lerp(this.introLook1,Math.min(1,i*1.4));Ut.lookAt(n),Ut.updateMatrixWorld(),Yt.setListener(Ut.position,n.clone().sub(Ut.position).normalize()),this.killer.sync(t);for(let s of this.bells)s.update(t);Ue.uniforms.uFade.value=ie(1-this.introT/1.2,0,1)+ie((this.introT-(this.introDur-.4))/.4,0,1),Ue.uniforms.uBlink.value=0,Ue.uniforms.uLow.value=0,Ue.uniforms.uHurt.value=0,Ue.uniforms.uLament.value=0,Ue.uniforms.uHit.value=0,Ue.uniforms.uWarn.value=0,Yt.update(t,{listener:Ut.position,chase:0,breath:0,lament:0}),this.introT>=this.introDur&&this.endIntro()}endIntro(){this.state==="intro"&&(this.state="playing",fe.only("hud"),this.fadeIn=0,this.matchStart=performance.now()-900,this.camYaw=this.player.yaw,this.camPitch=-.12,this.camPos.copy(this.player.pos).add(Z(0,2,0)),Se.clear(),vi.clear(),setTimeout(()=>this.toast("Ring five of the seven Mourning Bells","big"),600),setTimeout(()=>this.toast("It cannot move while you watch it","warn"),3800))}pause(){this.state==="playing"&&(this.state="paused",fe.only("hud","pause"),Se.clear(),Ir=!1)}resume(t=!1){this.state==="paused"&&(this.state="playing",fe.only("hud"),!t&&!Ki&&Dr())}abandon(){this.state="title",this.disposeMatch(),this.world=null,document.exitPointerLock?.(),this.setupTitle()}borrowLight(t,e=9,i=2.6){let n=this.spareLights?.find(s=>s.userData.free)||new Gi;return n.userData.free=!1,n.color.setHex(t),n.distance=e,n.intensity=i,n}returnLight(t){t.intensity=0,t.position.set(0,-30,0),t.userData.free=!0}nearCandle(t){return!!(this.candle&&J(this.candle.pos,t)<this.candle.r)}addMemorial(t){this.memorials.push(new xa(this,t))}giveItem(t,e){t.item=e,t.itemCharges=Rr[e].charges,this.attachHeld(t),Yt.itemUse(),this.toast(`You found ${Rr[e].name}`,"good"),this.updateItemHud()}consumeItem(t){t.item=null,t.itemCharges=0,t.mirrorUp=!1,this.attachHeld(t),this.updateItemHud()}attachHeld(t){if(t.heldModel&&(t.heldModel.parent?.remove(t.heldModel),t.heldModel=null),!t.item)return;let e=t.model.userData.j,i=e.handR||e.elR,n=wa(t.item,this.M);e.handR||n.position.set(0,-.27,.04),n.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),i.add(n),t.heldModel=n}holyHit(t){if(t===this.killer){t.scald(),this.addScore("boldness",1500,"Scalded the Reliquary");return}if(t.isMemorial){t.shatter(),this.toast("The statue crumbles. Their vigil is over.","good"),this.addScore("altruism",300,"Laid a statue to rest");return}let e=this.sentinels.indexOf(t);e<0||(this.sentinels.splice(e,1),this.world.root.remove(t.model),this.world.root.remove(t.cloth),this.fx.debris(t.pos),Yt.shatter(t.pos.clone().setY(1.2)),this.toast("A Sentinel shatters","good"),this.addScore("boldness",600,"Shattered a Sentinel"))}onAscend(t,e){J(t.pos,this.player.pos)<35&&(this.hitShake=Math.max(this.hitShake,.5)),this.toast(`The Reliquary ascends: ${ya[e]}`,"big"),setTimeout(()=>this.toast(e===2?"Its halo burns. Hold its gaze too long and it tolls.":"It has wings now. It moves faster and Laments sooner.","warn"),2200),this.updateTierHud()}onTollCharge(t){this.player.watching&&(this.lookWarn=2.2),this.time-this.tollWarnT>20&&(this.tollWarnT=this.time,this.toast("Its halo is burning. Look away!","warn"))}tollOfStone(t){let e=t.headPos();for(let i of this.survivors)!i.alive||i.health==="hooked"||i.health==="carried"||J(i.pos,t.pos)>24||!this.world.lineOfSight(e,i.eye())||(i.noBlink<=0&&i.forceBlink(.9),i.resolve=Math.max(0,i.resolve-25),i.isPlayer&&(this.hitShake=Math.max(this.hitShake,.8),this.flash=Math.max(this.flash||0,.7)));this.fx.shockwave(t.pos,24),Yt.tollRelease(e),this.noise(t.pos,50,"toll"),this.toast("The Toll of Stone","bad")}onCanonizeStart(t){this.toast(`It is turning ${t.name} to stone. Look at it to stop it!`,"bad"),Yt.choir(t.chest(),3.2,.4,.04,92.5)}onLightning(){this.state!=="playing"||!this.player?.alive||!this.killer||J(this.killer.pos,this.player.pos)<55&&(this.auraT=Math.max(this.auraT,.7),this.auraSrc!=="afterimage"&&(this.auraSrc="lightning"))}toast(t,e){fe.toast(t,e)}noise(t,e,i){this.noises.push({pos:t.clone(),r:e,type:i,t:this.time}),this.noises.length>40&&this.noises.shift()}addScore(t,e,i){this.score&&(this.score[t]+=e,i&&this.scoreLog.push(`${i} +${e}`))}bellRateMult(){return Math.max(.7,1-.05*this.hookEvents)}isWatched(t){return this.survivors.some(e=>this.canSee(e,t))}agentCircles(t){let e=this._ac||(this._ac=[]);e.length=0,this.killer&&!this.killer.action&&e.push(this.killer.circle);for(let i of this.sentinels)e.push(i.circle);for(let i of this.memorials)e.push(i.circle);return e}killerCircles(){let t=this._kc||(this._kc=[]);t.length=0;for(let e of this.sentinels)t.push(e.circle);for(let e of this.memorials)t.push(e.circle);return t}onBellRung(t){this.bellsRung++;let e=Math.max(0,this.bellsRequired-this.bellsRung);if(this.toast(e>0?`A Mourning Bell tolls \u2014 ${e} remain`:"The final bell tolls","good"),setTimeout(()=>{for(let i of this.survivors)i.forceBlink(1)},1200),e===0&&!this.gatesPowered){this.gatesPowered=!0,setTimeout(()=>{this.toast("The Lychgates are unsealed","big"),Yt.toll(null,98,.9,10),Yt.toll(null,147,.6,9),Yt.toll(null,196,.5,8)},1800);for(let i of this.bells)if(!i.done){i.locked=!0;for(let n of[...i.ringers])n.cancelAction()}}}onSurvivorHooked(t){this.hookEvents++,this.toast(`${t.name} is bound to a Weeping Post`,"bad")}onSurvivorDied(t,e){this.deaths=(this.deaths||0)+1,this.toast(e==="canonized"?`${t.name} was canonized. Their statue joins the vigil.`:`${t.name} ${e==="bled"?"bled out in the peat":"was taken by the moor"}`,"bad"),t.isPlayer&&(this.endT=3,this.endReason=e),this.checkAllDone()}onEscape(t,e){this.toast(`${t.name} escaped${e==="hatch"?" through the Drowned Well":""}`,"good"),t.isPlayer&&(this.addScore("survival",e==="hatch"?4e3:5e3,"Escaped"),this.endT=2.5,this.endReason=e,Yt.escapeChord()),this.checkAllDone()}checkAllDone(){this.survivors.every(t=>!t.alive)&&this.endT===null&&(this.endT=2.5)}onHit(t){t.isPlayer&&(this.hitShake=1)}onGateOpened(){this.toast("A Lychgate swings open","good"),this.collapseT===null&&(this.collapseT=120,setTimeout(()=>this.toast("The moor is rising \u2014 two minutes","warn"),1500))}onPlayerBlink(){this.player.hasPerk("afterimage")&&this.afterCD<=0&&(this.auraT=4,this.auraSrc="afterimage",this.afterCD=30),this.killer?.snapGhost()}canSee(t,e){if(!t.alive||t.blinking||t.health==="hooked"||t.health==="carried")return!1;if(t.isPlayer){if(t.mirrorUp){for(let n of e)if(Ji.copy(n).project(Ui),!(Ji.z>1||Ji.z<-1||Math.abs(Ji.x)>1||Math.abs(Ji.y)>1)&&!(Ui.position.distanceTo(n)>40)&&this.world.raycast(Ui.position,n)>=.995)return!0}for(let n of e)if(Ji.copy(n).project(Ut),!(Ji.z>1||Ji.z<-1||Math.abs(Ji.x)>1||Math.abs(Ji.y)>1)&&!(Ut.position.distanceTo(n)>46)&&this.world.raycast(Ut.position,n)>=.995)return!0;return!1}if(t.action&&t.action.type!=="drop")return!1;let i=t.eye();for(let n=0;n<Math.min(3,e.length);n++){let s=e[n];if(!(i.distanceTo(s)>30)&&!(Math.abs(xi(t.yaw,He(t.pos,s)))>.95)&&this.world.raycast(i,s)>=.995)return!0}return!1}computeWatch(t){let e=this.killer,i=e.samplePoints(),n=0;for(let s of this.survivors){if(s.watching=this.canSee(s,i),!s.watching)continue;n++;let a=J(s.pos,e.pos),o=12*ie(1.6-a/22,.5,1.6)*(e.lament?2.5:1);s.resolve-=o*t,s.resolve<=0&&(s.noBlink>0?s.resolve=.01:(s.resolve=28,s.forceBlink(.45))),s.isPlayer&&this.addScore("boldness",20*t)}e.watchers=n}interactions(t,e){let i={space:null,hold:null},n=(h,u)=>J(h,t.pos)<u,s=(h,u=.25)=>{let d=Z(h.x-t.pos.x,0,h.z-t.pos.z),f=d.length();return f<.7||d.divideScalar(f).dot(e)>u},a=Se.has("ShiftLeft")||Se.has("ShiftRight"),o=1e9;for(let h of this.world.windows){let u=(t.pos.x-h.x)*h.nx+(t.pos.z-h.z)*h.nz,d=Math.abs((t.pos.x-h.x)*h.ax+(t.pos.z-h.z)*h.az);Math.abs(u)<1.2&&d<h.halfW+.2&&s(h,.2)&&Math.abs(u)<o&&(o=Math.abs(u),i.space={text:"Vault",fn:()=>t.startVault("window",h,a&&t.speed>3)})}for(let h of this.pallets){if(h.state==="broken")continue;let u=h.normalDist(t.pos),d=h.lateral(t.pos);h.state==="up"&&d<h.w/2+.45&&u<1.15&&u<o&&(o=u,i.space={text:"Drop pallet",fn:()=>{t.startAction("drop"),h.drop(t)}}),h.state==="down"&&d<h.w/2+.2&&u<1.35&&u>.55&&s(h.center,.3)&&u<o&&(o=u,i.space={text:"Vault pallet",fn:()=>t.startVault("pallet",h,a&&t.speed>3)})}o=1e9;let l=(h,u,d)=>{h<o&&(o=h,i.hold={text:u,fn:d})};for(let h of this.bells)!h.done&&!h.locked&&n(h.pos,1.95)&&s(h.pos,0)&&l(J(h.pos,t.pos),"Ring the bell",()=>t.startAction("ring",{bell:h}));for(let h of this.survivors)h!==t&&(h.health==="hooked"&&n(h.post.hang,1.7)&&l(.1,`Unbind ${h.def.short}`,()=>t.startAction("unhook",{target:h})),(h.health==="injured"||h.health==="downed")&&n(h.pos,1.5)&&l(J(h.pos,t.pos),`${h.health==="downed"?"Revive":"Heal"} ${h.def.short}`,()=>t.startAction("heal",{target:h})));if(this.gatesPowered)for(let h of this.gates)!h.open&&n(h.lever,1.7)&&l(.2,"Open the Lychgate",()=>t.startAction("gate",{gate:h}));for(let h of this.sentinels)h.shroud<=0&&n(h.pos,1.75)&&s(h.pos,.3)&&l(J(h.pos,t.pos),"Shroud the statue",()=>t.startAction("shroud",{target:h}));let c=this.killer;c.petrified&&c.veilT<=0&&c.stunT<=0&&n(c.pos,1.75)&&s(c.pos,.3)&&l(J(c.pos,t.pos),"Shroud the statue",()=>t.startAction("shroud",{target:c})),this.hatch&&n(this.hatch.pos,1.6)&&l(0,"Descend into the Drowned Well",()=>t.startAction("hatch"));for(let h of this.chests)!h.opened&&n(h.pos,1.5)&&s(h.pos,.2)&&(t.item?i.hold||(i.full=!0):l(J(h.pos,t.pos),"Search the reliquary chest",()=>t.startAction("search",{chest:h})));return i}playerControl(t,e){let i=Z(Math.sin(this.camYaw),0,Math.cos(this.camYaw)),n=Z(-Math.cos(this.camYaw),0,Math.sin(this.camYaw)),s=0,a=0;(Se.has("KeyW")||Se.has("ArrowUp"))&&(a+=1),(Se.has("KeyS")||Se.has("ArrowDown"))&&(a-=1),Se.has("KeyD")&&(s+=1),Se.has("KeyA")&&(s-=1);let o=i.clone().multiplyScalar(a).addScaledVector(n,s),l=Se.has("KeyE")||Ir;if(t.lookPitch=ie(-this.camPitch,-.6,.6),t.lookYaw=ie(xi(t.yaw,this.camYaw),-1.1,1.1),t.backpedal=!1,t.mirrorUp=!1,this.promptText="",this.promptProg=null,this.promptHeal=!1,t.health==="hooked")return this.hookedControl(t,e);if(t.canonizing){t.speed=0,this.promptText="The stone is creeping up your body\u2026",this.promptProg=t.stone||0;return}if(t.health==="downed"){t.crouch=!1,o.lengthSq()>0?t.moveTo(o,.7,e):t.speed=0,this.promptText=t.healers.size?"Someone is helping you up\u2026":"You are dying. Crawl to safety.",this.promptProg=t.healers.size?t.healProg:null,this.promptHeal=!0;return}if(!t.standing)return;if(t.crouch=Se.has("KeyC")||Se.has("ControlLeft")||Se.has("ControlRight"),t.action){let u=t.action;if(!{ring:l,heal:l,unhook:l,gate:l,shroud:l,search:l,hatch:!0,bandage:!0,selfheal:Se.has("KeyR"),drop:!0}[u.type]||o.lengthSq()>0&&u.type!=="drop"&&u.type!=="hatch")t.cancelAction();else{if(t.speed=0,u.type==="ring"&&(t.yaw+=xi(t.yaw,He(t.pos,u.bell.pos))*Math.min(1,e*8),this.addScore("objectives",1e3/80*e)),u.type==="heal"||u.type==="unhook"||u.type==="shroud"||u.type==="gate"){let f=u.type==="gate"?u.gate.lever:u.target.pos;t.yaw+=xi(t.yaw,He(t.pos,f))*Math.min(1,e*8)}this.actionPrompt(t,u),this.maybeSkillCheck(t,u,e);return}}let c=this.interactions(t,i);if(vi.has("Space")&&c.space){c.space.fn();return}if(l&&c.hold&&!this.holdLatch){c.hold.fn();return}if(l||(this.holdLatch=!1),Se.has("KeyR")&&t.health==="injured"){t.startAction("selfheal");return}if(vi.has("KeyB")&&!t.blinking&&(t.forceBlink(.3),t.resolve=Math.min(t.maxResolve,t.resolve+30)),this.useItem(t,e))return;let h=[];if(c.space&&h.push(`<kbd>Space</kbd> ${c.space.text}`),c.hold?h.push(`<kbd>E</kbd> ${c.hold.text}`):c.full&&h.push("Your hands are full"),t.health==="injured"&&!c.hold&&h.push("<kbd>R</kbd> Mend wounds"),this.promptText=h.join("&nbsp;&nbsp;&nbsp;"),o.lengthSq()>0){o.normalize();let u=o.dot(i)<-.35,d=Se.has("ShiftLeft")||Se.has("ShiftRight"),f;t.crouch?f=1.13:u?(f=1.6,t.backpedal=!0):(d||t.boost>0)&&!t.mirrorUp?f=t.runSpeed():f=2.26,t.moveTo(o,f,e,!0,u?this.camYaw:null)}else t.speed=0}useItem(t,e){let i=Se.has("KeyF")||Na,n=vi.has("KeyF")||vi.has("Mouse2");if(!t.item)return!1;if(t.item==="mirror")return i&&t.itemCharges>0&&!t.vault&&(t.mirrorUp=!0,t.itemCharges-=e,t.itemCharges<=0&&(this.consumeItem(t),this.toast("The mirror cracks","warn"),Yt.shatter(t.chest()))),!1;if(!n)return!1;if(t.item==="candle")return this.candle&&this.candle.dispose(),this.candle=new ba(this,t.pos.clone().addScaledVector(t.forward(),.7)),this.consumeItem(t),Yt.itemUse(),this.toast("The candle is lit. In its light the stone cannot Lament or toll.","good"),!0;if(t.item==="holy"){let s=Z();Ut.getWorldDirection(s);let a=Z(-Math.cos(this.camYaw),0,Math.sin(this.camYaw)),o=t.pos.clone().add(Z(0,1.55,0)).addScaledVector(a,-.15).addScaledVector(s,.4),l=s.multiplyScalar(15).add(Z(0,3.2,0));return this.projectiles.push(new Ma(this,o,l)),t.throwT=.5,this.consumeItem(t),Yt.vault(o,!1),!0}if(t.item==="bandage"){if(t.health==="injured")return t.startAction("bandage"),!0;this.toast("You are not wounded","warn")}return!1}updateItemHud(){let t=this.player,e=Mt("itemSlot");if(!t||!t.item){e.hidden=!0;return}let i=Rr[t.item];e.hidden=!1,Mt("itemIcon").innerHTML=Rd[t.item],Mt("itemName").textContent=i.name,Mt("itemHint").innerHTML=i.hint,Mt("itemBar").style.display=i.timed?"block":"none"}updateTierHud(){let t=this.killer?this.killer.tier:1;Mt("tierName").textContent=ya[t],document.querySelectorAll("#tierPips i").forEach((e,i)=>e.classList.toggle("on",i<t))}actionPrompt(t,e){let i={ring:"Ringing",heal:e.target?.health==="downed"?"Reviving":"Healing",selfheal:"Mending",bandage:"Binding your wounds",search:"Searching",unhook:"Unbinding",gate:"Opening",shroud:"Shrouding",hatch:"Descending",drop:""},n=null,s=!1;e.type==="ring"?n=e.bell.progress:e.type==="heal"?(n=e.target.healProg,s=!0):e.type==="selfheal"||e.type==="bandage"?(n=t.healProg,s=!0):e.type==="search"?n=e.chest.progress:e.type==="unhook"?n=e.t/1.2:e.type==="gate"?n=e.gate.progress:e.type==="shroud"&&(n=e.t/2.2),this.promptText=i[e.type]||"",this.promptProg=n,this.promptHeal=s}maybeSkillCheck(t,e,i){!["ring","heal","selfheal"].includes(e.type)||fe.skill.active||(this.skillT-=i,!(this.skillT>0)&&(this.skillT=2.5+Math.random()*4.5,!(Math.random()>.6)&&fe.skill.start(n=>{let s=t.action;if(n==="great")s?.type==="ring"&&(s.bell.progress=Math.min(.999,s.bell.progress+.012)),this.addScore("objectives",150,"Great toll check");else if(n==="good")this.addScore("objectives",50);else{if(s?.type==="ring")s.bell.progress=Math.max(0,s.bell.progress-.1),Yt.crack(s.bell.pos.clone().setY(2.5)),this.noise(s.bell.pos,80,"crack"),this.toast("The bell cracks \u2014 the Reliquary heard that","bad");else if(s){let a=s.type==="heal"?s.target:t;a.healProg=Math.max(0,a.healProg-.1),Yt.groan(t.chest(),t.def.voice,.3),this.noise(t.pos,12,"groan")}t.cancelAction(),this.holdLatch=!0}})))}hookedControl(t,e){t.speed=0,this.escapeCD-=e,t.hookPhase===1?(this.promptText=t.escapeAttempts>0?`Bound. Wait for help, or <kbd>Space</kbd> try to tear free (${t.escapeAttempts} left)`:"Bound. Wait for help.",this.promptProg=t.hookTimer/55,vi.has("Space")&&t.escapeAttempts>0&&this.escapeCD<=0&&(t.escapeAttempts--,this.escapeCD=1.2,Math.random()<.06?(t.unhook(t),this.addScore("survival",1500,"Tore free")):(t.hookTimer=Math.max(1,t.hookTimer-8),Yt.chains(t.post.hang,4),this.toast("The chains hold","bad")))):(this.promptText="Struggle! Hit the toll checks or the moor takes you",this.promptProg=t.hookTimer/50,fe.skill.active||(this.skillT-=e,this.skillT<=0&&(this.skillT=1.2+Math.random()*1.8,fe.skill.start(i=>{i==="miss"&&(t.hookTimer-=10,Yt.gurgle(t.post.hang,6,.5))},{size:40,great:0,dur:1}))))}updateCamera(t){let e=this.player,i=.0022*ae.sens;this.camYaw-=qh*i,this.camPitch-=Yh*i*(ae.invert?-1:1),Se.has("ArrowLeft")&&(this.camYaw+=t*2.2),Se.has("ArrowRight")&&(this.camYaw-=t*2.2),qh=Yh=0,this.camPitch=ie(this.camPitch,-1.25,.95);let n,s=3.4,a=.5;if(e.health==="hooked"||e.health==="carried"?(n=Z(e.pos.x,e.pos.y+(e.health==="carried"?0:1.4),e.pos.z),s=4.2,a=0):n=Z(e.pos.x,e.pos.y+(e.health==="downed"?.55:e.crouch?1.05:1.62),e.pos.z),e.health==="downed"&&(s=2.5),(e.health==="dead"||e.health==="escaped")&&(n=this.camPos.clone(),s=.001,a=0),e.canonizing||e.canonized){this.canonYaw+=t*.45;let v=Z(e.pos.x,1.1,e.pos.z);Ut.position.set(v.x+Math.sin(this.canonYaw)*3.4,1.9,v.z+Math.cos(this.canonYaw)*3.4),Ut.lookAt(v),Ut.updateMatrixWorld(),this.camPos.copy(Ut.position),Yt.setListener(Ut.position,v.clone().sub(Ut.position).normalize());return}let o=Math.cos(this.camPitch),l=Math.sin(this.camPitch),c=Z(Math.sin(this.camYaw)*o,l,Math.cos(this.camYaw)*o),h=Z(-Math.cos(this.camYaw),0,Math.sin(this.camYaw)),u=n.clone().addScaledVector(h,a),d=this.world.raycast(n,u),f=n.clone().lerp(u,Math.max(0,d-.15)),g=f.clone().addScaledVector(c,-s);d=this.world.raycast(f,g);let x=f.clone().lerp(g,Math.max(.04,d-.08));x.y=Math.max(x.y,.3),e.alive&&this.camPos.lerp(x,1-Math.exp(-t*30)),Ut.position.copy(this.camPos);let m=this.killer,p=this.hitShake*.06;m.lament&&e.watching&&(p+=.012),this.hitShake=Math.max(0,this.hitShake-t*2.5),Ut.position.x+=(Math.random()-.5)*p,Ut.position.y+=(Math.random()-.5)*p,Ut.lookAt(Ut.position.clone().add(c)),Ut.updateMatrixWorld(),Yt.setListener(Ut.position,c);let y=Z(Math.sin(this.camYaw),0,Math.cos(this.camYaw));Ui.position.set(e.pos.x-y.x*.3,e.pos.y+(e.crouch?1.05:1.65),e.pos.z-y.z*.3),Ui.lookAt(Ui.position.x-y.x*10,Ui.position.y-.4,Ui.position.z-y.z*10),Ui.updateMatrixWorld()}update(t){this.time+=t;let e=this.player,i=this.killer;if(vi.has("Space")&&fe.skill.press(),e.health==="carried"){let h=vi.has("KeyA")?"A":vi.has("KeyD")?"D":null;h&&h!==this.lastWiggleKey&&(e.wiggle+=.035,this.lastWiggleKey=h)}for(let h of this.survivors)h.update(t);this.updateCamera(t),this.computeWatch(t),i.update(t);for(let h of this.bells)h.update(t),h.locked&&(h.model.userData.light.intensity=.15,h.model.userData.halo.material.opacity=.03);for(let h of this.pallets)h.update(t);for(let h of this.posts)h.update(t);for(let h of this.gates)h.update(t);for(let h of this.sentinels)h.update(t);for(let h of this.chests)h.update(t);for(let h of this.projectiles)h.update(t);this.projectiles.some(h=>h.done)&&(this.projectiles=this.projectiles.filter(h=>!h.done)),this.candle&&!this.candle.update(t)&&(this.candle.dispose(),this.candle=null,this.toast("The candle gutters out","warn")),this.crows?.update(t),fe.skill.update(t);{let h=this.diff,u=1;(this.bellsRung>=h.tier2||this.hookEvents>=2)&&(u=2),(this.bellsRung>=h.tier3||this.deaths>=1||this.hookEvents>=5)&&(u=3),u>i.tier&&i.ascend(u)}for(let h of this.survivors)h.standing&&Math.abs(h.pos.z)>Ot+2.4&&h.escape("gate");let n=this.survivors.filter(h=>h.alive);if(!this.hatch&&n.length===1&&n[0].standing&&this.survivors.length>1&&(this.hatch=new da(this,this.world.hatchSpot),this.toast("You hear water rising in an old well\u2026","warn")),this.collapseT!==null&&(this.collapseT-=t,this.collapseT<=0)){this.collapseT=0;for(let h of this.survivors)h.alive&&h.die("collapse");this.collapseT=null}if(this.afterCD-=t,this.auraT-=t,e.hasPerk("kinship")){let h=this.survivors.find(u=>u.health==="hooked");h&&J(h.post.pos,e.pos)<24&&(this.auraT=Math.max(this.auraT,.2),(this.auraSrc!=="afterimage"||this.auraT<=.2)&&(this.auraSrc="kinship"))}i.aura.visible=this.auraT>0&&e.alive;for(let h of this.survivors)h.aura.visible=!h.isPlayer&&h.alive&&(h.health==="hooked"||h.health==="downed"||h.health==="carried");for(this.noises=this.noises.filter(h=>this.time-h.t<6),this.scratches.length>300&&this.scratches.splice(0,this.scratches.length-300);this.scratches.length&&this.time-this.scratches[0].t>12;)this.scratches.shift();e.alive&&this.addScore("survival",2*t);let s=J(i.pos,e.pos),a=0;i.target===e&&i.state==="chase"?a=ie(1.2-s/26,.25,1):s<14&&i.moving&&(a=.35),e.alive||(a=0),this.chase+=(a-this.chase)*Math.min(1,t*1.5),Yt.update(t,{listener:Ut.position,chase:this.chase,breath:e.health==="injured"||e.health==="downed"?1:e.resolve<30?.6:0,lament:i.lament&&e.watching?1:0});let o=Ue.uniforms,l=e.blinkT>0?Math.min(1,Math.min((e.blinkDur-e.blinkT)/.07,e.blinkT/.12)):0;o.uBlink.value=l,o.uLow.value=ie(1-e.resolve/(e.maxResolve*.4),0,1),o.uLament.value+=((i.lament&&e.watching?1:0)-o.uLament.value)*Math.min(1,t*3),o.uHurt.value=e.health==="injured"?.6:e.health==="downed"||e.health==="hooked"?1:0,o.uHit.value=this.hitShake,this.lookWarn=Math.max(0,this.lookWarn-t);let c=i.toll&&e.watching?1:0;o.uWarn.value+=(c*(.55+Math.sin(this.time*18)*.35)-o.uWarn.value)*Math.min(1,t*10),Mt("lookAway").hidden=!(i.toll&&e.watching),e.item==="mirror"&&(Mt("itemBar").firstElementChild.style.width=100*e.itemCharges/Rr.mirror.charges+"%"),this.fadeIn=ie((performance.now()-this.matchStart)/1800,0,1),o.uFade.value=1-this.fadeIn,this.endT!==null&&(this.endT-=t,o.uFade.value=Math.max(o.uFade.value,ie(1-this.endT/2.5,0,1)),this.endT<=0&&this.showEnd()),fe.prompt(this.promptText,this.promptProg,this.promptHeal),Mt("wiggle").style.display=e.health==="carried"?"block":"none",e.health==="carried"&&(Mt("wiggle").querySelector("i").style.width=e.wiggle*100+"%"),fe.updateHud(this)}updateAmbient(t){var n;let e=this.world;if(!e)return;e.grassUniforms.uTime.value=this.time,e.mistUniforms.uTime.value=this.time,e.mistUniforms.uCam.value.copy(Ut.position),e.sky.material.uniforms.uTime.value=this.time,e.sky.position.copy(Ut.position);for(let s of this.flickers||[])s.intensity=((n=s.userData).base??(n.base=s.intensity))*(.85+Math.sin(this.time*11+s.id)*.08+(Math.random()-.5)*.1);let i=this.state==="playing"?this.player.pos:Z(-4,0,0);if(fi.target.position.set(i.x,0,i.z),fi.position.copy(fi.target.position).addScaledVector(e.moonDir,70),this.fx.ambient(t,Ut.position,e.pools),this.fx.update(t),this.weather){this.weather.update(t,Ut.position);let s=this.weather.flash;Qh.intensity=2+s*7,e.sky.material.uniforms.uFlash.value=s,this.flash=Math.max(0,(this.flash||0)-t*2.5),Ue.uniforms.uFlash.value=Math.max(s*.35,this.flash)}}updateTitle(t){this.time+=t,this.titleT+=t;let e=this.titleCam||{a:-1.75,r:22},i=e.a+Math.sin(this.titleT*.05)*.2;Ut.position.set(-4+Math.cos(i)*e.r,2.4+Math.sin(this.titleT*.2)*.2,Math.sin(i)*e.r),Ut.lookAt(-3.5,2.6,-8.2),Ut.updateMatrixWorld();for(let n of this.bells)n.update(t);this.titleStart??(this.titleStart=performance.now()),Ue.uniforms.uFade.value=ie(1-(performance.now()-this.titleStart)/2e3,0,1),Ue.uniforms.uBlink.value=0,Ue.uniforms.uLow.value=0,Ue.uniforms.uHurt.value=0,Ue.uniforms.uLament.value=0,Ue.uniforms.uHit.value=0,Yt.setListener(Ut.position,Ut.getWorldDirection(Z())),Yt.update(t,{listener:Ut.position,chase:0,breath:0,lament:0})}showEnd(){this.endT=null,this.state="ended",document.exitPointerLock?.();let t=this.player,e=Mt("verdict"),i=Mt("epitaph"),n=t.health==="escaped";e.textContent=n?"ESCAPED":this.endReason==="bled"?"BLED OUT":this.endReason==="collapse"?"THE MOOR ROSE":this.endReason==="canonized"?"CANONIZED":"SACRIFICED",e.className="verdict "+(n?"good":"bad");let s=n?["You walked out through the lychgate and never looked back. You didn't dare to.","Behind you the bells kept ringing, though no one was pulling the ropes.","You climbed out of the Drowned Well, soaked and shaking, but alive."]:["The peat closed over your head. The bells will need a new mourner.","You blinked. That was all it took.","The moor keeps everything it is given."];i.textContent=n?this.endReason==="hatch"?s[2]:s[Math.floor(Math.random()*2)]:this.endReason==="canonized"?"Your statue keeps the vigil now. It is still looking toward the gate.":s[Math.floor(Math.random()*3)],Mt("results").innerHTML=this.survivors.map(u=>{let d=u.canonized?["Turned to stone","var(--blood-hi)"]:{escaped:["Escaped","var(--ok)"],dead:["Taken by the moor","var(--blood-hi)"]}[u.health]||["Still on the moor","var(--muted)"];return`<div class="r">${Pr(u.def,42,u.health==="dead"?"dead":"")}<div><b>${u.name}${u.isPlayer?" (you)":""}</b><span style="color:${d[1]}">${d[0]}</span></div></div>`}).join("");let a=this.score,o=Math.round(a.objectives+a.survival+a.altruism+a.boldness);Mt("emberTotal").textContent=o.toLocaleString(),Mt("score").innerHTML=[["Objectives",a.objectives],["Survival",a.survival],["Altruism",a.altruism],["Boldness",a.boldness]].map(([u,d])=>`<div class="c"><div class="v">${Math.round(d).toLocaleString()}</div><div class="l">${u}</div></div>`).join("");let l={};for(let u of this.scoreLog){let d=u.replace(/ \+\d+$/,"");l[d]=(l[d]||0)+1}Mt("scoreLog").innerHTML=Object.entries(l).map(([u,d])=>`<div>${u}${d>1?` \xD7${d}`:""}</div>`).join("")+`<div>Bells rung by the four: ${this.bellsRung} / 7</div>`,Mt("scoreLog").innerHTML+=`<div>The Reliquary reached: ${ya[this.killer.tier]} \xB7 ${this.diff.name}</div>`;try{let u=Number(localStorage.getItem("hollowmoor.best")||0);o>u&&(localStorage.setItem("hollowmoor.best",String(o)),Mt("scoreLog").innerHTML+='<div style="color:var(--ember)">A new personal best</div>')}catch{}let c=Ia.get();Ia.add(o);let h=Ia.get();Mt("rankEnd").textContent=`${h.toLocaleString()} embers banked \xB7 ${La(h)}`+(La(h)!==La(c)?" (new rank)":""),Dd(),fe.only("end")}},Js=0,Ni=["unblinking","afterimage","ropeburn","kinship"];try{let r=JSON.parse(localStorage.getItem("hollowmoor.loadout")||"null");r&&(Js=r.c??0,Ni=r.p??Ni)}catch{}function Ua(){let r=Mt("survivorCards");r.innerHTML=na.map((i,n)=>`<div class="card ${n===Js?"sel":""}" data-i="${n}">${Pr(i,64)}<div><b>${i.name}</b><div class="t">${i.title}</div><div class="bio">${i.bio}</div></div></div>`).join(""),r.querySelectorAll(".card").forEach(i=>i.onclick=()=>{Js=Number(i.dataset.i),Yt.uiClick(),Ua()});let t=Mt("perkCards");t.innerHTML=Wh.map(i=>`<div class="perk ${Ni.includes(i.id)?"sel":""}" data-id="${i.id}"><div class="d">${i.icon}</div><div><b>${i.name}</b><span>${i.desc}</span></div></div>`).join(""),t.querySelectorAll(".perk").forEach(i=>i.onclick=()=>{let n=i.dataset.id;Ni.includes(n)?Ni=Ni.filter(s=>s!==n):Ni.length<4&&Ni.push(n),Yt.uiClick(),Ua()}),Mt("perkCount").textContent=`${Ni.length} / 4`;let e=Mt("diffs");e.innerHTML=Object.values(Pa).map(i=>`<button type="button" class="diff ${ae.difficulty===i.id?"sel":""}" data-d="${i.id}"><b>${i.name}</b><span>${i.desc}</span></button>`).join(""),e.querySelectorAll(".diff").forEach(i=>i.onclick=()=>{ae.difficulty=i.dataset.d,Ks(),Yt.uiClick(),Ua()})}function Dd(){let r=Ia.get();Mt("rankLine").textContent=r>0?`${La(r)} \xB7 ${r.toLocaleString()} embers banked`:""}var _v="title";document.querySelectorAll("[data-go]").forEach(r=>r.addEventListener("click",()=>{Yt.init(),Yt.setVolume(ae.vol),Yt.uiClick();let t=r.dataset.go;_v=It?.state==="paused"?"pause":"title",t==="select"&&Ua(),It?.state==="paused"?fe.only("hud",t):fe.only(t)}));document.querySelectorAll("[data-back]").forEach(r=>r.addEventListener("click",()=>{Yt.uiClick(),It?.state==="paused"?fe.only("hud","pause"):fe.only("title")}));Mt("startBtn").addEventListener("click",()=>{Yt.init(),Yt.setVolume(ae.vol);try{localStorage.setItem("hollowmoor.loadout",JSON.stringify({c:Js,p:Ni}))}catch{}Dr(),It.startMatch(Js,Ni.slice())});Mt("resumeBtn").addEventListener("click",()=>It.resume());Mt("abandonBtn").addEventListener("click",()=>It.abandon());Mt("againBtn").addEventListener("click",()=>{Dr(),It.startMatch(Js,Ni.slice())});Mt("toTitleBtn").addEventListener("click",()=>{It.disposeMatch(),It.world=null,It.setupTitle()});Mt("clickPlay").addEventListener("click",()=>Dr());var $h=Mt("sens"),Jh=Mt("vol"),Lr=Mt("quality"),Kh=Mt("invert"),jh=Mt("showFps");$h.value=ae.sens;Jh.value=ae.vol;Lr.value=ae.quality;Kh.checked=ae.invert;jh.checked=ae.showFps;$h.oninput=()=>{ae.sens=Number($h.value),Ks()};Jh.oninput=()=>{ae.vol=Number(Jh.value),Yt.setVolume(ae.vol),Ks()};Lr.onchange=()=>{ae.quality=Lr.value,Ks(),fi.shadow.mapSize.set(Lr.value==="high"?2048:1024,Lr.value==="high"?2048:1024),fi.shadow.map?.dispose(),fi.shadow.map=null,Fd()};Kh.onchange=()=>{ae.invert=Kh.checked,Ks()};jh.onchange=()=>{ae.showFps=jh.checked,Ks(),Mt("fps").style.display=ae.showFps?"block":"none"};var Ud=performance.now(),Ca=0,Xh=0;function zd(r){requestAnimationFrame(zd);let t=Math.min(.05,(r-Ud)/1e3);Ud=r;let e=t;if(It){if(Ca+=t,Xh++,Ca>.5&&(Mt("fps").textContent=`${Math.round(Xh/Ca)} fps`,Ca=0,Xh=0),It.state==="playing")for(;t>0;){let i=Math.min(t,.03333333333333333);It.update(i),t-=i,vi.clear()}else It.state==="title"?It.updateTitle(t):It.state==="intro"?It.updateIntro(t):It.state==="paused"||It.state;vi.clear(),It.state!=="paused"&&It.updateAmbient(e),Ue.uniforms.uTime.value=performance.now()/1e3,Bn.render(),Mv()}}function Mv(){let r=It?.state==="playing"&&It.player?.mirrorUp,t=Mt("mirrorFrame");if(t.hidden===r&&(t.hidden=!r),!r)return;let e=Math.round(Math.min(360,innerWidth*.34)),i=Math.round(e*.6),n=Math.round((innerWidth-e)/2),s=150;Ui.aspect=e/i,Ui.updateProjectionMatrix(),t.style.width=e+"px",t.style.height=i+"px",t.style.bottom=s+"px";let a=Be.shadowMap.autoUpdate;Be.shadowMap.autoUpdate=!1,Be.setScissorTest(!0),Be.setScissor(n,s,e,i),Be.setViewport(n,s,e,i),Be.render(ze,Ui),Be.setScissorTest(!1),Be.setViewport(0,0,innerWidth,innerHeight),Be.shadowMap.autoUpdate=a}try{matchMedia("(pointer: coarse)").matches&&!matchMedia("(pointer: fine)").matches&&(Mt("touchNote").hidden=!1)}catch{}async function bv(){let r=await vd((e,i)=>{Mt("loadBar").style.width=e*80+"%",Mt("loadText").textContent={ground:"Cutting the peat\u2026",stone:"Laying the stones\u2026",planks:"Sawing the pallets\u2026",bronze:"Casting the bells\u2026",statue:"Carving the saint\u2026",mask:"Weeping\u2026",bark:"Killing the trees\u2026"}[i]||Mt("loadText").textContent}),t=_d(r);Mt("loadText").textContent="Drowning the parish\u2026",Mt("loadBar").style.width="90%",await new Promise(e=>setTimeout(e,20)),It=new Zh(r,t),window.__G=It,window.__R={renderer:Be,scene:ze,hemi:Qh,moon:fi,get grade(){return Ue},get bloom(){return Da},camera:Ut},window.__input={keys:Se,pressed:vi},It.setupTitle(),Ut.position.set(10,4,20),Ut.lookAt(0,2,0),Be.compile(ze,Ut),Mt("loadBar").style.width="100%",fe.show("loading",!1),fe.only("title"),requestAnimationFrame(zd)}bv().catch(r=>{console.error(r),Mt("loadText").textContent="The vigil failed to begin: "+r.message});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
